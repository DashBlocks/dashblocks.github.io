import { e as error } from './index-d7f43214.js';
import sqlite from 'better-sqlite3';
import nodeCrypto from 'node:crypto';

const KB = 1e3;
const MB = 1e3 * KB;
const GB = 1e3 * MB;
const MAX_PROJECT_DATA_SIZE = 5.5 * MB;
const MAX_ASSET_SIZE = 10 * MB;
const MAX_TOTAL_PROJECT_SIZE = 500 * MB;
const MAX_EVERYTHING_SIZE = 30 * GB;
const MAX_TITLE_LENGTH = 100;
const MAX_DESCRIPTION_LENGTH = 1e4;
const MAX_REPORT_BODY_LENGTH = 1e4;
const db = new sqlite(process.env.TEST ? ":memory:" : "unshared.db");
db.pragma("journal_mode = WAL");
db.pragma("foreign_keys = ON");
db.exec(`
CREATE TABLE IF NOT EXISTS projects (
  -- unique ID for project, visible to user
  project_id TEXT PRIMARY KEY NOT NULL,

  -- 1 if all assets have been uploaded
  complete INT NOT NULL,

  -- raw project.json data
  data BLOB NOT NULL,

  project_title TEXT NOT NULL,
  project_description TEXT NOT NULL
) STRICT;`);
db.exec(`
CREATE TABLE IF NOT EXISTS ownership_tokens (
  project_id TEXT NOT NULL REFERENCES projects(project_id) ON DELETE CASCADE,

  -- secret token to prove project ownership
  ownership_token TEXT NOT NULL,

  PRIMARY KEY(project_id, ownership_token)
) STRICT;`);
db.exec(`
CREATE TABLE IF NOT EXISTS assets (
  -- SHA-256 of data, has already been verified
  asset_sha256 TEXT PRIMARY KEY NOT NULL,

  -- raw asset data
  data BLOB NOT NULL
) STRICT;`);
db.exec(`
CREATE TABLE IF NOT EXISTS complete_project_assets (
  project_id TEXT NOT NULL REFERENCES projects(project_id) ON DELETE CASCADE,

  -- SHA-256 of the asset
  asset_sha256 TEXT NOT NULL REFERENCES assets(asset_sha256) ON DELETE CASCADE,

  -- user-provided md5ext with file extension
  asset_md5ext TEXT NOT NULL,

  PRIMARY KEY(project_id, asset_sha256)
) STRICT;`);
db.exec(`
CREATE TABLE IF NOT EXISTS incomplete_project_assets (
  project_id TEXT NOT NULL REFERENCES projects(project_id) ON DELETE CASCADE,

  -- user-provided SHA-256 that this asset should have (untrusted)
  asset_sha256 TEXT NOT NULL,

  -- user-provided md5ext with file extension that this asset should have (untrusted)
  asset_md5ext TEXT NOT NULL,

  -- user-provided size in bytes that this asset should have (untrusted)
  asset_size INT NOT NULL,

  PRIMARY KEY(project_id, asset_md5ext)
) STRICT;`);
db.exec(`
CREATE TRIGGER IF NOT EXISTS remove_unused_assets AFTER DELETE ON complete_project_assets
BEGIN
  DELETE FROM assets WHERE asset_sha256=OLD.asset_sha256 AND
    NOT EXISTS (SELECT 1 FROM complete_project_assets WHERE asset_sha256=assets.asset_sha256);
END;`);
db.exec(`
CREATE TABLE IF NOT EXISTS admin_tokens (
  secret_token TEXT PRIMARY KEY NOT NULL,

  -- name is just a more memorable description; this isn't used for security
  name TEXT NOT NULL
) STRICT;
`);
db.exec(`
CREATE TABLE IF NOT EXISTS admin_project_reports (
  report_id INTEGER PRIMARY KEY NOT NULL,
  report_body TEXT NOT NULL,
  project_id TEXT NOT NULL REFERENCES projects(project_id) ON DELETE CASCADE
) STRICT;
`);
const _getTotalProjectDataSize = db.prepare("SELECT sum(length(data)) FROM projects;");
const _getTotalCompleteAssetSize = db.prepare("SELECT sum(length(data)) FROM assets;");
const _getTotalIncompleteAssetSize = db.prepare("SELECT sum(asset_size) FROM incomplete_project_assets;");
const getTotalSizeOfEverything = () => {
  return _getTotalProjectDataSize.get()["sum(length(data))"] + _getTotalCompleteAssetSize.get()["sum(length(data))"] + _getTotalIncompleteAssetSize.get()["sum(asset_size)"];
};
const insertProjectStatement = db.prepare(`
  INSERT INTO projects (
    project_id,
    complete,
    data,
    project_title,
    project_description
  ) VALUES (?, FALSE, ?, ?, '');
`);
const createIncompleteProject = db.transaction((encodedProjectJSON, parsedProject, assetInformation, projectTitle) => {
  if (encodedProjectJSON.byteLength > MAX_PROJECT_DATA_SIZE) {
    throw error(400, "project.json too large");
  }
  const projectId = crypto.randomUUID();
  insertProjectStatement.run(
    projectId,
    encodedProjectJSON,
    projectTitle
  );
  const ownershipToken = createOwnershipToken(projectId);
  const missingMd5exts = [];
  let totalSize = 0;
  for (const md5ext of parsedProject.md5exts) {
    const asset = assetInformation[md5ext];
    if (asset.size > MAX_ASSET_SIZE) {
      throw error(400, `asset is too large: ${md5ext}`);
    }
    const completeAsset = getCompleteAssetMetadata(asset.sha256);
    if (completeAsset) {
      const knownSize = completeAsset.size;
      if (asset.size !== knownSize) {
        throw error(400, "size of preexisting asset does not match");
      }
      createCompleteAssetConnection(projectId, asset.sha256, md5ext);
    } else {
      missingMd5exts.push(md5ext);
      createIncompleteAssetConnection(projectId, asset.sha256, md5ext, asset.size);
    }
    totalSize += asset.size;
  }
  if (totalSize > MAX_TOTAL_PROJECT_SIZE) {
    throw error(400, "total project size is too large");
  }
  if (getTotalSizeOfEverything() > MAX_EVERYTHING_SIZE) {
    throw error(400, "the server is out of space");
  }
  return {
    projectId,
    missingMd5exts,
    ownershipToken
  };
});
const _insertOwnershipToken = db.prepare(`
  INSERT INTO ownership_tokens (ownership_token, project_id) VALUES (?, ?);
`);
const createOwnershipToken = (projectId) => {
  const token = crypto.randomUUID();
  _insertOwnershipToken.run(token, projectId);
  return token;
};
const _getAnyOwnershipToken = db.prepare(`SELECT ownership_token FROM ownership_tokens WHERE project_id=?;`);
const getAdminOwnershipToken = (projectId) => {
  const result = _getAnyOwnershipToken.get(projectId);
  if (!result) {
    return null;
  }
  return result.ownership_token;
};
const _isCompleteAsset = db.prepare(`
  SELECT length(data) FROM assets WHERE asset_sha256=?;
`);
const getCompleteAssetMetadata = (sha256) => {
  const result = _isCompleteAsset.get(sha256);
  if (!result) {
    return null;
  }
  const size = result["length(data)"];
  return {
    size
  };
};
const _createCompleteAssetConnection = db.prepare(`
  INSERT INTO complete_project_assets (project_id, asset_sha256, asset_md5ext) VALUES (?, ?, ?);
`);
const createCompleteAssetConnection = (projectId, sha256, md5ext) => {
  _createCompleteAssetConnection.run(projectId, sha256, md5ext);
};
const _createIncompleteAssetConnection = db.prepare(`
  INSERT INTO incomplete_project_assets (project_id, asset_sha256, asset_md5ext, asset_size) VALUES (?, ?, ?, ?);
`);
const createIncompleteAssetConnection = (projectId, sha256, md5ext, size) => {
  _createIncompleteAssetConnection.run(projectId, sha256, md5ext, size);
};
const _getIncompleteAssetMetadata = db.prepare(`
  SELECT asset_sha256, asset_size FROM incomplete_project_assets WHERE project_id=? AND asset_md5ext=?;
`);
const getIncompleteAssetMetadata = (projectId, md5ext) => {
  const metadata = _getIncompleteAssetMetadata.get(projectId, md5ext);
  if (!metadata) {
    throw error(400, "unknown asset");
  }
  return {
    sha256: metadata.asset_sha256,
    size: metadata.asset_size
  };
};
const _deleteIncompleteAsset = db.prepare(`
  DELETE FROM incomplete_project_assets WHERE project_id=? AND asset_md5ext=?;
`);
const _createAsset = db.prepare(`
  INSERT INTO assets (asset_sha256, data) VALUES (?, ?);
`);
const finishIncompleteAsset = db.transaction((projectId, md5ext, data) => {
  const metadata = getIncompleteAssetMetadata(projectId, md5ext);
  if (data.byteLength !== metadata.size) {
    throw error(400, "size mismatch");
  }
  const expectedMd5 = md5ext.split(".")[0];
  const actualMd5 = nodeCrypto.createHash("md5").update(data).digest("hex");
  if (expectedMd5 !== actualMd5) {
    throw error(400, "md5 mismatch");
  }
  const expectedSha256 = metadata.sha256;
  const actualSha256 = nodeCrypto.createHash("sha256").update(data).digest("hex");
  if (expectedSha256 !== actualSha256) {
    throw error(400, "sha256 mismatch");
  }
  _deleteIncompleteAsset.run(projectId, md5ext);
  _createAsset.run(metadata.sha256, data);
  createCompleteAssetConnection(projectId, metadata.sha256, md5ext);
});
const _hasIncompleteAssets = db.prepare(`
  SELECT 1 FROM incomplete_project_assets WHERE project_id=?;
`);
const _finishIncompleteProject = db.prepare(`
  UPDATE projects SET complete=TRUE WHERE project_id=?;
`);
const finishIncompleteProject = db.transaction((projectId) => {
  const hasIncompleteAssets = !!_hasIncompleteAssets.get(projectId);
  if (hasIncompleteAssets) {
    throw error(400, "project is not complete");
  }
  _finishIncompleteProject.run(projectId);
});
const _isValidOwnershipToken = db.prepare(`
  SELECT 1 FROM ownership_tokens WHERE project_id=? AND ownership_token=?;
`);
const isValidOwnershipToken = (projectId, ownershipToken) => {
  return !!_isValidOwnershipToken.get(projectId, ownershipToken);
};
const _getCompleteProjectMetadata = db.prepare(`
  SELECT project_title, project_description FROM projects WHERE project_id=? AND complete=TRUE;
`);
const getCompleteProjectMetadata = (projectId) => {
  const projectMeta = _getCompleteProjectMetadata.get(projectId);
  if (!projectMeta) {
    throw error(404, "project does not exist");
  }
  return {
    title: projectMeta.project_title,
    description: projectMeta.project_description
  };
};
const _getCompleteAssets = db.prepare(`
  SELECT asset_sha256, asset_md5ext FROM complete_project_assets WHERE project_id=?;
`);
const getMd5extToSha256 = (projectId) => {
  const assets = _getCompleteAssets.all(projectId);
  const record = {};
  for (const { asset_sha256, asset_md5ext } of assets) {
    record[asset_md5ext] = asset_sha256;
  }
  return record;
};
const _doesProjectExist = db.prepare("SELECT 1 FROM projects WHERE project_id=? AND complete=TRUE;");
const _getProjectData = db.prepare("SELECT data FROM projects WHERE project_id=?;");
const getProjectData = (projectId) => {
  if (!_doesProjectExist.get(projectId)) {
    throw error(404, "project does not exist");
  }
  const project = _getProjectData.get(projectId);
  return project.data;
};
const _getAssetData = db.prepare("SELECT data FROM assets WHERE asset_sha256=?;");
const getAssetData = (sha256) => {
  const asset = _getAssetData.get(sha256);
  if (!asset) {
    throw error(404, "asset does not exist");
  }
  return asset.data;
};
const _setProjectTitle = db.prepare(`UPDATE projects SET project_title=? WHERE project_id=?;`);
const setProjectTitle = (projectId, title) => {
  _setProjectTitle.run(title, projectId);
};
const _setProjectDescription = db.prepare(`UPDATE projects SET project_description=? WHERE project_id=?;`);
const setProjectDescription = (projectId, title) => {
  _setProjectDescription.run(title, projectId);
};
const _deleteProject = db.prepare(`DELETE FROM projects WHERE project_id=?;`);
const deleteProject = (projectId) => {
  _deleteProject.run(projectId);
};
const _createAdminToken = db.prepare(`INSERT INTO admin_tokens (secret_token, name) VALUES (?, ?);`);
const createAdminToken = (name) => {
  const secretToken = crypto.randomUUID();
  _createAdminToken.run(secretToken, name);
  return secretToken;
};
const _validateAdminToken = db.prepare(`SELECT 1 FROM admin_tokens WHERE secret_token=?;`);
const isValidAdminToken = (secretToken) => {
  return !!_validateAdminToken.get(secretToken);
};
const _createReport = db.prepare(`INSERT INTO admin_project_reports (project_id, report_body) VALUES (?, ?);`);
const createReport = (projectId, reportBody) => {
  _createReport.run(projectId, reportBody);
};
const _deleteReport = db.prepare(`DELETE FROM admin_project_reports WHERE report_id=?;`);
const deleteReport = (reportId) => {
  _deleteReport.run(reportId);
};
const _getAllReports = db.prepare(`
  SELECT
    report_id,
    project_id,
    report_body,
    project_title,
    project_description
  FROM admin_project_reports INNER JOIN projects USING(project_id);
`);
const getAllReports = () => {
  return _getAllReports.all().map((response) => ({
    reportId: response.report_id,
    projectId: response.project_id,
    reportBody: response.report_body,
    projectTitle: response.project_title,
    projectDescription: response.project_description
  }));
};
console.log(`New admin token: ${createAdminToken(`automatically generated ${Date.now()}`)}`);

export { MAX_TITLE_LENGTH as M, getCompleteProjectMetadata as a, getMd5extToSha256 as b, getAdminOwnershipToken as c, deleteReport as d, getAssetData as e, createIncompleteProject as f, getAllReports as g, getProjectData as h, isValidAdminToken as i, deleteProject as j, MAX_DESCRIPTION_LENGTH as k, setProjectDescription as l, finishIncompleteAsset as m, finishIncompleteProject as n, isValidOwnershipToken as o, MAX_REPORT_BODY_LENGTH as p, createReport as q, setProjectTitle as s };
//# sourceMappingURL=db-0c95998c.js.map

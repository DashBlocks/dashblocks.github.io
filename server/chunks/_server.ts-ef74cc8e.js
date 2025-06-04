import { e as error, j as json } from './index-d7f43214.js';
import { M as MAX_TITLE_LENGTH, f as createIncompleteProject } from './db-0c95998c.js';
import { g as getFileFromBody } from './utils-844a088b.js';
import { i as isNaughty } from './naughty-ee434a4c.js';
import 'better-sqlite3';
import 'node:crypto';

const DATA_FORMATS = [
  "png",
  "jpg",
  "svg",
  "mp3",
  "wav"
];
const ASSET_ID_REGEX = /^[0-9a-f]{32}$/;
const isObject$1 = (i) => typeof i === "object" && !!i;
const parseProject = (projectData) => {
  const projectJSON = JSON.parse(projectData);
  if (!isObject$1(projectJSON)) {
    throw new Error("project is not an object");
  }
  const targets = projectJSON.targets;
  if (!Array.isArray(targets)) {
    throw new Error("targets is not an array");
  }
  const md5exts = targets.map((target) => {
    const costumes = target.costumes;
    if (!Array.isArray(costumes)) {
      throw new Error("costumes is not an array");
    }
    const sounds = target.sounds;
    if (!Array.isArray(sounds)) {
      throw new Error("sounds is not an array");
    }
    return [...costumes, ...sounds];
  }).flat().map((asset) => {
    if (!isObject$1(asset)) {
      throw new Error("asset is not an object");
    }
    const md5 = asset.assetId;
    if (typeof md5 !== "string") {
      throw new Error("md5 is not string");
    }
    if (!ASSET_ID_REGEX.test(md5)) {
      throw new Error(`Invalid md5: ${md5}`);
    }
    const dataFormat = asset.dataFormat;
    if (typeof dataFormat !== "string") {
      throw new Error("dataFormat is not string");
    }
    if (!DATA_FORMATS.includes(dataFormat.toLowerCase())) {
      throw new Error(`Unknown data format: ${dataFormat}`);
    }
    const assetId = `${md5}.${dataFormat}`;
    return assetId;
  });
  return {
    md5exts: Array.from(new Set(md5exts))
  };
};
const isSHA256 = (str) => typeof str === "string" && /^[a-f0-9]{64}$/.test(str);
const isMd5ext = (str) => typeof str === "string" && /^[a-f0-9]{32}\.[a-z0-9]{3}$/.test(str);
const isObject = (object) => !!object && !Array.isArray(object) && typeof object === "object";
const isAssetInformation = (object) => {
  if (!isObject(object)) {
    return false;
  }
  for (const key of Object.keys(object)) {
    if (!isMd5ext(key)) {
      return false;
    }
    const asset = object[key];
    if (!isObject(asset)) {
      return false;
    }
    const { sha256, size } = asset;
    if (!isSHA256(sha256) || typeof size !== "number") {
      return false;
    }
  }
  return true;
};
const POST = async ({ request, url }) => {
  const body = await request.formData();
  const projectDataFile = getFileFromBody(body, "project");
  if (!projectDataFile) {
    throw error(400, "missing file");
  }
  const projectData = await projectDataFile.text();
  const assetInformation = body.get("assetInformation");
  if (typeof assetInformation !== "string") {
    throw error(400, "missing asset information");
  }
  const parsedAssetInformation = JSON.parse(assetInformation);
  if (!isAssetInformation(parsedAssetInformation)) {
    throw error(400, "invalid asset information");
  }
  const parsedProject = parseProject(projectData);
  let title = body.get("title");
  if (typeof title !== "string") {
    throw error(400, "invalid or missing title");
  }
  if (isNaughty(title) || title.length > MAX_TITLE_LENGTH) {
    title = "Project";
  }
  const incompleteProject = createIncompleteProject(
    Buffer.from(projectData),
    parsedProject,
    parsedAssetInformation,
    title
  );
  return json(incompleteProject);
};

export { POST };
//# sourceMappingURL=_server.ts-ef74cc8e.js.map

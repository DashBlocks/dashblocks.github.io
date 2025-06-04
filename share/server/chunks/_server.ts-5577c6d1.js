import { e as error, j as json } from './index-d7f43214.js';
import { m as finishIncompleteAsset } from './db-0c95998c.js';
import { a as validateOwnership, g as getFileFromBody } from './utils-844a088b.js';
import 'better-sqlite3';
import 'node:crypto';

const POST = async ({ request, url, params }) => {
  const body = await request.formData();
  validateOwnership(params.project, body.get("ownershipToken"));
  const assetFile = getFileFromBody(body, "asset");
  if (!assetFile) {
    throw error(400, "asset is not a file");
  }
  const assetData = Buffer.from(await assetFile.arrayBuffer());
  finishIncompleteAsset(params.project, params.md5ext, assetData);
  return json({});
};

export { POST };
//# sourceMappingURL=_server.ts-5577c6d1.js.map

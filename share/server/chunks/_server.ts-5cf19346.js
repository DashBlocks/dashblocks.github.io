import { j as json } from './index-d7f43214.js';
import { n as finishIncompleteProject } from './db-0c95998c.js';
import { a as validateOwnership } from './utils-844a088b.js';
import 'better-sqlite3';
import 'node:crypto';

const POST = async ({ request, params }) => {
  const body = await request.formData();
  validateOwnership(params.project, body.get("ownershipToken"));
  finishIncompleteProject(params.project);
  return json({});
};

export { POST };
//# sourceMappingURL=_server.ts-5cf19346.js.map

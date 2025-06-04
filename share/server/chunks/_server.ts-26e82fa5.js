import { j as json, e as error } from './index-d7f43214.js';
import { h as getProjectData, j as deleteProject, M as MAX_TITLE_LENGTH, s as setProjectTitle, k as MAX_DESCRIPTION_LENGTH, l as setProjectDescription } from './db-0c95998c.js';
import { a as validateOwnership } from './utils-844a088b.js';
import { i as isNaughty } from './naughty-ee434a4c.js';
import 'better-sqlite3';
import 'node:crypto';

const GET = async ({ params }) => {
  return new Response(getProjectData(params.project));
};
const DELETE = async ({ request, params }) => {
  const body = await request.formData();
  validateOwnership(params.project, body.get("ownershipToken"));
  deleteProject(params.project);
  return json({});
};
const POST = async ({ request, params }) => {
  const body = await request.formData();
  validateOwnership(params.project, body.get("ownershipToken"));
  const title = body.get("title");
  if (typeof title === "string") {
    if (isNaughty(title)) {
      throw error(400, "title is naughty");
    }
    if (title.length > MAX_TITLE_LENGTH) {
      throw error(400, "title is too long");
    }
    setProjectTitle(params.project, title);
  }
  const description = body.get("description");
  if (typeof description === "string") {
    if (isNaughty(description)) {
      throw error(400, "description is naughty");
    }
    if (description.length > MAX_DESCRIPTION_LENGTH) {
      throw error(400, "description is too long");
    }
    setProjectDescription(params.project, description);
  }
  return json({});
};

export { DELETE, GET, POST };
//# sourceMappingURL=_server.ts-26e82fa5.js.map

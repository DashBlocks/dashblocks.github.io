import { a as getCompleteProjectMetadata, b as getMd5extToSha256, i as isValidAdminToken, c as getAdminOwnershipToken } from './db-0c95998c.js';
import './index-d7f43214.js';
import 'better-sqlite3';
import 'node:crypto';

const load = ({ params, cookies }) => {
  const projectMetadata = getCompleteProjectMetadata(params.project);
  const md5extsToSha256 = getMd5extToSha256(params.project);
  let adminOwnershipToken = null;
  const secretAdminToken = cookies.get("adminToken");
  if (typeof secretAdminToken === "string") {
    const isValidAdminToken$1 = isValidAdminToken(secretAdminToken);
    if (isValidAdminToken$1) {
      adminOwnershipToken = getAdminOwnershipToken(params.project);
    }
  }
  return {
    metadata: projectMetadata,
    md5extsToSha256,
    adminOwnershipToken
  };
};

var _page_server_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 9;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-1037f819.js')).default;
const server_id = "src/routes/projects/[project]/+page.server.ts";
const imports = ["_app/immutable/nodes/9.65dadbfb.js","_app/immutable/chunks/index.b8b3c275.js","_app/immutable/chunks/stores.88f030c4.js","_app/immutable/chunks/singletons.f5e6619c.js","_app/immutable/chunks/local-project-data.ee0fa9b8.js","_app/immutable/chunks/brand.ba6cd0fa.js","_app/immutable/chunks/preload-helper.a4192956.js","_app/immutable/chunks/fetch.c4287b5a.js"];
const stylesheets = ["_app/immutable/assets/9.f592e754.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=9-6a094d70.js.map

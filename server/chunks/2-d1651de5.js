import { v as validateAdminPermissions } from './utils-844a088b.js';
import './index-d7f43214.js';
import './db-0c95998c.js';
import 'better-sqlite3';
import 'node:crypto';

const load = async ({ cookies }) => {
  const adminToken = cookies.get("adminToken");
  validateAdminPermissions(adminToken);
};

var _layout_server_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 2;
let component_cache;
const component = async () => component_cache ??= (await import('./_layout.svelte-31a8dcdb.js')).default;
const server_id = "src/routes/admin/+layout.server.ts";
const imports = ["_app/immutable/nodes/2.efb82c00.js","_app/immutable/chunks/index.b8b3c275.js"];
const stylesheets = [];
const fonts = [];

export { component, fonts, imports, index, _layout_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=2-d1651de5.js.map

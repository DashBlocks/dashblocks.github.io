import { g as getAllReports } from './db-0c95998c.js';
import './index-d7f43214.js';
import 'better-sqlite3';
import 'node:crypto';

const load = () => {
  const reports = getAllReports();
  return {
    reports
  };
};

var _page_server_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 5;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-09f603cd.js')).default;
const server_id = "src/routes/admin/reports/+page.server.ts";
const imports = ["_app/immutable/nodes/5.8f86441e.js","_app/immutable/chunks/index.b8b3c275.js","_app/immutable/chunks/fetch.c4287b5a.js"];
const stylesheets = ["_app/immutable/assets/5.32b1c2cc.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=5-6ffa54b6.js.map

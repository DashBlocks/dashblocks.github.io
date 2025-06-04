import { d as deleteReport } from './db-0c95998c.js';
import { v as validateAdminPermissions } from './utils-844a088b.js';
import { e as error } from './index-d7f43214.js';
import 'better-sqlite3';
import 'node:crypto';

const DELETE = ({ cookies, params }) => {
  const adminToken = cookies.get("adminToken");
  validateAdminPermissions(adminToken);
  const reportId = +params.report;
  if (isNaN(reportId)) {
    throw error(400, "invalid report ID");
  }
  deleteReport(reportId);
  return new Response("OK");
};

export { DELETE };
//# sourceMappingURL=_server.ts-19ef2326.js.map

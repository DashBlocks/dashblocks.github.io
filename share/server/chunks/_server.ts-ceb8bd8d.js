import { p as MAX_REPORT_BODY_LENGTH, q as createReport } from './db-0c95998c.js';
import { e as error } from './index-d7f43214.js';
import 'better-sqlite3';
import 'node:crypto';

const POST = async ({ request }) => {
  const body = await request.formData();
  const projectId = body.get("projectId");
  if (typeof projectId !== "string") {
    throw error(400, "invalid project ID");
  }
  const reportBody = body.get("body");
  if (typeof reportBody !== "string") {
    throw error(400, "invalid report body");
  }
  if (reportBody.length > MAX_REPORT_BODY_LENGTH) {
    throw error(400, "report body too long");
  }
  createReport(projectId, reportBody);
  if (process.env.REPORT_WEBHOOK) {
    fetch(process.env.REPORT_WEBHOOK, {
      method: "POST",
      body: JSON.stringify({
        content: "<@751651888205922348> Someone reported a project on placeholder <https://share.turbowarp.org/admin/reports>"
      }),
      headers: {
        "content-type": "application/json"
      }
    }).then((r) => {
      console.log("webhook status", r.status);
    });
  }
  return new Response("ok");
};

export { POST };
//# sourceMappingURL=_server.ts-ceb8bd8d.js.map

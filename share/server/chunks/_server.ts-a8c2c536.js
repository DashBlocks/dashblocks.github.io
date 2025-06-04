import { e as getAssetData } from './db-0c95998c.js';
import './index-d7f43214.js';
import 'better-sqlite3';
import 'node:crypto';

const GET = async ({ params }) => {
  const data = getAssetData(params.sha256);
  return new Response(data, {
    headers: {
      "Cache-Control": "public, max-age=31557600, immutable",
      "Content-Type": "application/octet-stream",
      "Content-Security-Policy": "default-src 'none'"
    }
  });
};

export { GET };
//# sourceMappingURL=_server.ts-a8c2c536.js.map

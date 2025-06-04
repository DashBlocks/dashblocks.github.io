import { e as error } from './index-d7f43214.js';
import { o as isValidOwnershipToken, i as isValidAdminToken } from './db-0c95998c.js';

const validateOwnership = (projectId, givenToken) => {
  if (typeof givenToken !== "string") {
    throw error(400, "ownership token missing or invalid type");
  }
  const isValid = isValidOwnershipToken(projectId, givenToken);
  if (!isValid) {
    throw error(401, "invalid ownership token");
  }
};
const getFileFromBody = (formData, filename) => {
  const file = formData.get(filename);
  if (!file.arrayBuffer) {
    return null;
  }
  return file;
};
const validateAdminPermissions = (secretToken) => {
  if (typeof secretToken !== "string") {
    throw error(401, "admin token missing or invalid type");
  }
  if (!isValidAdminToken(secretToken)) {
    throw error(401, "invalid admin token");
  }
};

export { validateOwnership as a, getFileFromBody as g, validateAdminPermissions as v };
//# sourceMappingURL=utils-844a088b.js.map

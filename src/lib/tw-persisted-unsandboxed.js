// All we save is whether the box was checked last time, nothing more.
// User still has to manually confirm loading the extension and has
// every opportunity to uncheck the box.

const PERSISTED_UNSANDBOXED_KEY = 'tw:persisted_unsandboxed';

/**
 * @returns {boolean} True if persistence enabled
 */
const getPersistedUnsandboxed = () => {
    try {
        return localStorage.getItem(PERSISTED_UNSANDBOXED_KEY) === 'true';
    } catch (e) {
        return false;
    }
};

/**
 * @param {boolean} persisted True if persistence enabled
 */
const setPersistedUnsandboxed = persisted => {
    try {
        localStorage.setItem(PERSISTED_UNSANDBOXED_KEY, persisted === true);
    } catch (e) {
        // ignore
    }
};

export {
    getPersistedUnsandboxed,
    setPersistedUnsandboxed
};

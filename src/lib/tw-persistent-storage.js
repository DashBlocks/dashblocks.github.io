/**
 * Forcibly asks the browser to grant persistent storage. May show a permission dialog from the browser.
 */
const requestPersistentStorage = () => {
    if (navigator.storage && navigator.storage.persist) {
        navigator.storage.persist();

        // We don't really care about the result.
        // Safari auto-denies. Chrome auto-approves. That's not very useful information.
        // Even if we think we have persistent storage, browsers are known to just delete it anyways.
        // Don't want to give users false trust in the browser-provided storage.
    }
};

/**
 * In browsers that are known to not have a permission dialog, will request persistent storage.
 * In browsers that are not to have a permission dialog, will not do anything.
 */
const gentlyRequestPersistentStorage = () => {
    if (!navigator.userAgent.includes('Firefox')) {
        requestPersistentStorage();
    }
};

export {
    requestPersistentStorage,
    gentlyRequestPersistentStorage
};

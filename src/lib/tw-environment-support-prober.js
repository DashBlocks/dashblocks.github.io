import Renderer from 'scratch-render';
import log from './log';

let cachedRendererSupport = null;
export const isRendererSupported = () => {
    if (cachedRendererSupport === null) {
        cachedRendererSupport = Renderer.isSupported();
    }
    return cachedRendererSupport;
};

let cachedNewFunctionSupport = null;
export const isNewFunctionSupported = () => {
    if (cachedNewFunctionSupport === null) {
        try {
            // This will throw if blocked by CSP
            // eslint-disable-next-line no-new
            new Function('');
            cachedNewFunctionSupport = true;
        } catch (e) {
            cachedNewFunctionSupport = false;
        }
    }
    return cachedNewFunctionSupport;
};

export const findIncompatibleUserscripts = () => {
    /* eslint-disable max-len */

    /** @type {string[]} */
    const errors = [];

    // Chibi < v4 breaks extensionURLs in project.json
    // Check suggested by SinanShiki
    if (typeof window.chibi === 'object' && Number(window.chibi.version) <= 3) {
        errors.push('You are using an old version of the "Chibi" userscript that has known project corruption bugs. Please disable it, uninstall it, or update to version 4.');
    }

    // For debugging incompatibilities, allow ignoring the errors with an undocumented URL parameter.
    if (errors.length > 0) {
        const params = new URLSearchParams(location.search);
        if (params.get('ignore_unsupported_userscripts') === 'i_will_not_ask_for_help_if_something_breaks') {
            log.error('Ignoring unsupported userscripts', errors);
            return [];
        }
    }

    /* eslint-enable max-len */
    return errors;
};

export const isBrowserSupported = () => (
    isNewFunctionSupported() &&
    isRendererSupported() &&
    findIncompatibleUserscripts().length === 0
);

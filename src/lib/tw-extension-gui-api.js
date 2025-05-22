import LazyScratchBlocks from './tw-lazy-scratch-blocks';
import AddonHooks from '../addons/hooks';

/**
 * Implements Scratch.gui API for unsandboxed extensions.
 * @param {any} Scratch window.Scratch, mutated in place.
 */
const implementGuiAPI = Scratch => {
    Scratch.gui = {
        /**
         * Lazily get the internal ScratchBlocks object when it becomes available. It may never be
         * available if, for example, the user never enters the editor.
         *
         * You should not assume that ScratchBlocks becoming available means the user is actually
         * in the editor or that a workspace has been created already.
         *
         * @returns {Promise<any>} Promise that may eventually resolve to ScratchBlocks
         */
        getBlockly: () => {
            if (AddonHooks.blockly) {
                return Promise.resolve(AddonHooks.blockly);
            }
            return new Promise(resolve => {
                AddonHooks.blocklyCallbacks.push(() => resolve(AddonHooks.blockly));
            });
        },

        /**
         * Get the internal ScratchBlocks object as soon as possible. This lets you access it even
         * if the user never enters the editor.
         *
         * This method is VERY SLOW and will cause A LOT OF CPU AND NETWORK ACTIVITY because it
         * downloads and evaluates all of scratch-blocks, a multi-megabyte JavaScript bundle.
         *
         * @returns {Promise<any>} Promise that will resolve to ScratchBlocks.
         */
        getBlocklyEagerly: () => LazyScratchBlocks.load()
    };
};

export default implementGuiAPI;

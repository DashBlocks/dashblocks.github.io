import keyMirror from 'keymirror';

/**
 * Names for each state of the stage size toggle
 * @enum {string}
 */
const STAGE_SIZE_MODES = keyMirror({
    /**
     * Display the stage at a large (but fixed) width.
     */
    large: null,

    /**
     * Display the stage at a small (but fixed) width.
     */
    small: null,

    /**
     * Display the stage at its full size.
     */
    full: null
});

/**
 * Names for each stage render size
 * @enum {string}
 */
const STAGE_DISPLAY_SIZES = keyMirror({
    large: null,

    small: null,

    constrained: null,

    full: null
});

// zoom level to start with
const BLOCKS_DEFAULT_SCALE = 0.675;

const FIXED_WIDTH = 480;

/**
 * Minimum amount of screen width (excluding the width used by the stage itself) to display constrained.
 */
const UNCONSTRAINED_NON_STAGE_WIDTH = 1096 - FIXED_WIDTH;

const STAGE_DISPLAY_SCALE_METADATA = {
    [STAGE_DISPLAY_SIZES.large]: {
        width: FIXED_WIDTH
    },
    [STAGE_DISPLAY_SIZES.small]: {
        width: FIXED_WIDTH * 0.5
    },
    [STAGE_DISPLAY_SIZES.constrained]: {
        scale: 0.85
    },
    [STAGE_DISPLAY_SIZES.full]: {
        scale: 1
    }
};

export {
    BLOCKS_DEFAULT_SCALE,
    STAGE_DISPLAY_SCALE_METADATA,
    STAGE_DISPLAY_SIZES,
    STAGE_SIZE_MODES,
    FIXED_WIDTH,
    UNCONSTRAINED_NON_STAGE_WIDTH
};

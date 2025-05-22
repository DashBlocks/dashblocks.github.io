// This list is a subset of all addon IDs to control the order of userstyles.
// The last item in the list is given the highest precedence (last in the DOM).
// If an addon isn't listed here, it's interpreted to have lowest precedence and
// that its order with other unlisted addons does not matter.
const addonPrecedence = [
    'columns',
    'editor-stage-left',
    'editor-theme3',
    'hide-stage'
];

/**
 * @param {string} addonId The addon ID
 * @returns {number} An integer >= 0
 */
const getPrecedence = addonId => addonPrecedence.indexOf(addonId) + 1;

export default getPrecedence;

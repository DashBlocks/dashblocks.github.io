// Stylesheets are added at the end of <body> so that they have higher precedence
// than those in <head> and above dark mode which is appended at the start of <body>
const stylesheetContainer = document.createElement('div');
stylesheetContainer.style.display = 'none';
stylesheetContainer.className = 'addons-styles';
document.body.appendChild(stylesheetContainer);

/**
 * Maps opaque module IDs to its ConditionalStyle.
 * @type {Map<unknown, ConditionalStyle>}
 */
const allSheets = new Map();

/**
 * Determine if the contents of a list are equal (===) to each other.
 * @param {unknown[]} a The first list
 * @param {unknown[]} b The second list
 * @returns {boolean} true if the lists are identical
 */
const areArraysEqual = (a, b) => {
    if (a.length !== b.length) {
        return false;
    }
    for (let i = 0; i < a.length; a++) {
        if (a[i] !== b[i]) {
            return false;
        }
    }
    return true;
};

const updateAll = () => {
    for (const sheet of allSheets.values()) {
        sheet.update();
    }
};

class ConditionalStyle {
    /**
     * @param {string} styleText CSS text
     */
    constructor (styleText) {
        /**
         * Lazily created <style> element.
         * @type {HTMLStyleElement}
         */
        this.el = null;

        /**
         * Temporary storing place for the CSS text until the style sheet is created.
         * @type {string|null}
         */
        this.styleText = styleText;

        /**
         * Higher number indicates this element should override lower numbers.
         * @type {number}
         */
        this.precedence = 0;

        /**
         * List of [addonId, condition] tuples.
         * @type {Array<[string, () => boolean>]}
         */
        this.dependents = [];

        /**
         * List of addonIds that were enabled on the previous call to update()
         * @type {string[]}
         */
        this.previousEnabledDependents = [];
    }

    addDependent (addonId, precedence, condition) {
        this.dependents.push([addonId, condition]);

        if (precedence > this.precedence) {
            this.precedence = precedence;

            if (this.el) {
                this.el.dataset.precedence = precedence;
            }
        }

        this.update();
    }

    getEnabledDependents () {
        const enabledDependents = [];
        for (const [addonId, condition] of this.dependents) {
            if (condition()) {
                enabledDependents.push(addonId);
            }
        }
        return enabledDependents;
    }

    dependsOn (addonId) {
        return this.dependents.some(dependent => dependent[0] === addonId);
    }

    getElement () {
        if (!this.el) {
            const el = document.createElement('style');
            el.className = 'scratch-addons-style';
            el.dataset.precedence = this.precedence;
            el.textContent = this.styleText;
            this.styleText = null;
            this.el = el;
        }
        return this.el;
    }

    update () {
        const enabledDependents = this.getEnabledDependents();
        if (areArraysEqual(enabledDependents, this.previousEnabledDependents)) {
            // Nothing to do.
            return;
        }
        this.previousEnabledDependents = enabledDependents;

        if (enabledDependents.length > 0) {
            const el = this.getElement();
            el.dataset.addons = enabledDependents.join(',');

            for (const child of stylesheetContainer.children) {
                const otherPrecedence = +child.dataset.precedence || 0;
                if (otherPrecedence >= this.precedence) {
                    // We need to be before this style.
                    stylesheetContainer.insertBefore(el, child);
                    return;
                }
            }

            // We have higher precedence than all existing stylesheets.
            stylesheetContainer.appendChild(el);
        } else if (this.el) {
            this.el.remove();
        }
    }
}

const create = (moduleId, styleText) => {
    if (!allSheets.get(moduleId)) {
        const newSheet = new ConditionalStyle(styleText);
        allSheets.set(moduleId, newSheet);
    }
    return allSheets.get(moduleId);
};

export {
    create,
    updateAll
};

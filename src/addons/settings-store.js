/**
 * Copyright (C) 2021 Thomas Weber
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License version 3 as
 * published by the Free Software Foundation.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
 */

import addons from './generated/addon-manifests';
import upstreamMeta from './generated/upstream-meta.json';
import EventTargetShim from './event-target';

const SETTINGS_KEY = 'tw:addons';
const VERSION = 5;

const migrateSettings = settings => {
    const oldVersion = settings._;
    if (oldVersion === VERSION || !oldVersion) {
        return settings;
    }

    // Migrate 1 -> 2
    // tw-project-info is now block-count
    // tw-interface-customization split into tw-remove-backpack and tw-remove-feedback
    if (oldVersion < 2) {
        const projectInfo = settings['tw-project-info'];
        if (projectInfo && projectInfo.enabled) {
            settings['block-count'] = {
                enabled: true
            };
        }
        const interfaceCustomization = settings['tw-interface-customization'];
        if (interfaceCustomization && interfaceCustomization.enabled) {
            if (interfaceCustomization.removeBackpack) {
                settings['tw-remove-backpack'] = {
                    enabled: true
                };
            }
            if (interfaceCustomization.removeFeedback) {
                settings['tw-remove-feedback'] = {
                    enabled: true
                };
            }
        }
    }

    // Migrate 2 -> 3
    // The default value of hide-flyout's toggle setting changed from "hover" to "cathover"
    // We want to keep the old default value for existing users.
    if (oldVersion < 3) {
        const hideFlyout = settings['hide-flyout'];
        if (hideFlyout && hideFlyout.enabled && typeof hideFlyout.toggled === 'undefined') {
            hideFlyout.toggle = 'hover';
        }
    }

    // Migrate 3 -> 4
    // editor-devtools was broken up into find-bar and middle-click-popup.
    // If someone disabled editor-devtools, we want to keep these disabled.
    if (oldVersion < 4) {
        const editorDevtools = settings['editor-devtools'];
        if (editorDevtools && editorDevtools.enabled === false) {
            settings['find-bar'] = {
                enabled: false
            };
            settings['middle-click-popup'] = {
                enabled: false
            };
        }
    }

    // Migrate 4 -> 5
    // fullscreen's hideToolbar and hoverToolbar settings were merged into one toolbar setting
    if (oldVersion < 5) {
        const fullscreen = settings.fullscreen;
        // hideToolbar was false by default
        // hoverToolbar was true by default
        if (fullscreen && fullscreen.hideToolbar) {
            if (fullscreen.hoverToolbar === false) {
                fullscreen.toolbar = 'hide';
            } else {
                fullscreen.toolbar = 'hover';
            }
        }
    }

    return settings;
};

/**
 * @template T
 * @param {T|T[]} v A value
 * @returns {T[]} The value if it is a list, otherwise a 1 item list
 */
const asArray = v => {
    if (Array.isArray(v)) {
        return v;
    }
    return [v];
};

class SettingsStore extends EventTargetShim {
    constructor () {
        super();
        this.store = this.createEmptyStore();
        this.remote = false;
    }

    /**
     * @private
     */
    createEmptyStore () {
        const result = {};
        for (const addonId of Object.keys(addons)) {
            result[addonId] = {};
        }
        return result;
    }

    readLocalStorage () {
        const base = this.store;
        try {
            const local = localStorage.getItem(SETTINGS_KEY);
            if (local) {
                let result = JSON.parse(local);
                if (result && typeof result === 'object') {
                    result = migrateSettings(result);
                    for (const key of Object.keys(result)) {
                        if (Object.prototype.hasOwnProperty.call(base, key)) {
                            const value = result[key];
                            if (value && typeof value === 'object') {
                                base[key] = value;
                            }
                        }
                    }
                }
            }
        } catch (e) {
            // ignore
        }
        this.store = base;
    }

    /**
     * @private
     */
    saveToLocalStorage () {
        if (this.remote) {
            return;
        }
        try {
            const result = {
                _: VERSION
            };
            for (const addonId of Object.keys(addons)) {
                const data = this.getAddonStorage(addonId);
                if (Object.keys(data).length > 0) {
                    result[addonId] = data;
                }
            }
            localStorage.setItem(SETTINGS_KEY, JSON.stringify(result));
        } catch (e) {
            // ignore
        }
    }

    /**
     * @private
     */
    getAddonStorage (addonId) {
        if (this.store[addonId]) {
            return this.store[addonId];
        }
        throw new Error(`Unknown addon store: ${addonId}`);
    }

    /**
     * @private
     */
    getAddonManifest (addonId) {
        if (addons[addonId]) {
            return addons[addonId];
        }
        throw new Error(`Unknown addon: ${addonId}`);
    }

    /**
     * @private
     */
    getAddonSettingObject (manifest, settingId) {
        if (!manifest.settings) {
            return null;
        }
        for (const setting of manifest.settings) {
            if (setting.id === settingId) {
                return setting;
            }
        }
        return null;
    }

    getAddonEnabled (addonId) {
        const manifest = this.getAddonManifest(addonId);
        if (manifest.unsupported) {
            return false;
        }
        const storage = this.getAddonStorage(addonId);
        if (Object.prototype.hasOwnProperty.call(storage, 'enabled')) {
            return storage.enabled;
        }
        return !!manifest.enabledByDefault;
    }

    getAddonSetting (addonId, settingId) {
        const storage = this.getAddonStorage(addonId);
        const manifest = this.getAddonManifest(addonId);
        const settingObject = this.getAddonSettingObject(manifest, settingId);
        if (!settingObject) {
            throw new Error(`Unknown setting: ${settingId}`);
        }
        if (Object.prototype.hasOwnProperty.call(storage, settingId)) {
            return storage[settingId];
        }
        return settingObject.default;
    }

    /**
     * @private
     */
    getDefaultSettings (addonId) {
        const manifest = this.getAddonManifest(addonId);
        const result = {};
        for (const {id, default: value} of manifest.settings) {
            result[id] = value;
        }
        return result;
    }

    setAddonEnabled (addonId, enabled) {
        const storage = this.getAddonStorage(addonId);
        const manifest = this.getAddonManifest(addonId);
        const oldValue = this.getAddonEnabled(addonId);
        if (enabled === null) {
            enabled = !!manifest.enabledByDefault;
            delete storage.enabled;
        } else if (typeof enabled === 'boolean') {
            storage.enabled = enabled;
        } else {
            throw new Error('Enabled value is invalid.');
        }
        this.saveToLocalStorage();
        if (enabled !== oldValue) {
            // Dynamic enable is always supported.
            // Dynamic disable requires addon support.
            const supportsDynamic = enabled ? true : !!manifest.dynamicDisable;
            this.dispatchEvent(new CustomEvent('setting-changed', {
                detail: {
                    addonId,
                    settingId: 'enabled',
                    reloadRequired: !supportsDynamic,
                    value: enabled
                }
            }));
        }
    }

    setAddonSetting (addonId, settingId, value) {
        const storage = this.getAddonStorage(addonId);
        const manifest = this.getAddonManifest(addonId);
        const settingObject = this.getAddonSettingObject(manifest, settingId);
        const oldValue = this.getAddonSetting(addonId, settingId);
        if (value === null) {
            value = settingObject.default;
            delete storage[settingId];
        } else {
            if (settingObject.type === 'boolean') {
                if (typeof value !== 'boolean') {
                    throw new Error('Setting value is invalid.');
                }
            } else if (settingObject.type === 'integer' || settingObject.type === 'positive_integer') {
                if (typeof value !== 'number') {
                    throw new Error('Setting value is invalid.');
                }
            } else if (settingObject.type === 'string' || settingObject.type === 'untranslated') {
                // always valid
            } else if (settingObject.type === 'color') {
                if (typeof value !== 'string') {
                    throw new Error('Color value is not a string.');
                }
                // Remove alpha channel from colors like #012345ff
                // We don't support transparency yet, but settings imported from Scratch Addons
                // might contain transparency.
                if (value.length === 9) {
                    value = value.substring(0, 7);
                }
                if (!/^#[0-9a-f]{6}$/i.test(value)) {
                    throw new Error('Color value is invalid format.');
                }
            } else if (settingObject.type === 'select') {
                if (!settingObject.potentialValues.some(potentialValue => potentialValue.id === value)) {
                    throw new Error('Setting value is invalid.');
                }
            } else {
                throw new Error('Setting object is of unknown type');
            }
            storage[settingId] = value;
        }
        this.saveToLocalStorage();
        if (value !== oldValue) {
            this.dispatchEvent(new CustomEvent('setting-changed', {
                detail: {
                    addonId,
                    settingId,
                    reloadRequired: !settingObject.dynamic,
                    value
                }
            }));
        }
    }

    applyAddonPreset (addonId, presetId) {
        const manifest = this.getAddonManifest(addonId);
        for (const {id, values} of manifest.presets) {
            if (id !== presetId) {
                continue;
            }
            const settings = {
                ...this.getDefaultSettings(addonId),
                ...values
            };
            for (const key of Object.keys(settings)) {
                this.setAddonSetting(addonId, key, settings[key]);
            }
            return;
        }
        throw new Error(`Unknown preset: ${presetId}`);
    }

    resetAllAddons () {
        for (const addon of Object.keys(addons)) {
            this.resetAddon(addon, true);
        }
        // In case resetAddon missed some properties, do a hard reset on storage.
        this.store = this.createEmptyStore();
        this.saveToLocalStorage();
    }

    resetAddon (addonId, resetEverything) {
        const storage = this.getAddonStorage(addonId);
        for (const setting of Object.keys(storage)) {
            if (setting === 'enabled') {
                if (resetEverything) {
                    this.setAddonEnabled(addonId, null);
                }
                continue;
            }
            try {
                this.setAddonSetting(addonId, setting, null);
            } catch (e) {
                // ignore
            }
        }
    }

    parseUrlParameter (parameter) {
        this.remote = true;
        const enabled = parameter.split(',');
        for (const id of Object.keys(addons)) {
            this.setAddonEnabled(id, enabled.includes(id));
        }
    }

    export ({theme}) {
        const result = {
            core: {
                // Upstream property. We don't use this.
                lightTheme: !theme.isDark(),
                // Doesn't matter what we set this to
                version: `v1.0.0-tw-${upstreamMeta.commit}`
            },
            addons: {}
        };
        for (const [addonId, manifest] of Object.entries(addons)) {
            const enabled = this.getAddonEnabled(addonId);
            const settings = {};
            if (manifest.settings) {
                for (const {id} of manifest.settings) {
                    settings[id] = this.getAddonSetting(addonId, id);
                }
            }
            result.addons[addonId] = {
                enabled,
                settings
            };
        }
        return result;
    }

    import (data) {
        for (const [addonId, value] of Object.entries(data.addons)) {
            if (!Object.prototype.hasOwnProperty.call(addons, addonId)) {
                continue;
            }
            const {enabled, settings} = value;
            if (typeof enabled === 'boolean') {
                this.setAddonEnabled(addonId, enabled);
            }
            for (const [settingId, settingValue] of Object.entries(settings)) {
                try {
                    this.setAddonSetting(addonId, settingId, settingValue);
                } catch (e) {
                    // ignore
                }
            }
        }
    }

    setStoreWithVersionCheck ({version, store}) {
        if (version !== upstreamMeta.commit) {
            return;
        }
        this.setStore(store);
    }

    setStore (newStore) {
        const oldStore = this.store;
        for (const addonId of Object.keys(oldStore)) {
            const oldSettings = oldStore[addonId];
            const newSettings = newStore[addonId];
            if (!newSettings || typeof newSettings !== 'object') {
                continue;
            }
            if (JSON.stringify(oldSettings) !== JSON.stringify(newSettings)) {
                const manifest = this.getAddonManifest(addonId);
                // Dynamic enable is always supported.
                const dynamicEnable = !oldSettings.enabled && newSettings.enabled;
                // Dynamic disable requires addon support.
                const dynamicDisable = !!manifest.dynamicDisable && oldSettings.enabled && !newSettings.enabled;
                // Clone to avoid pass-by-reference issues
                this.store[addonId] = JSON.parse(JSON.stringify(newSettings));
                this.dispatchEvent(new CustomEvent('addon-changed', {
                    detail: {
                        addonId,
                        dynamicEnable,
                        dynamicDisable
                    }
                }));
            }
        }
    }

    /**
     * Evaluate an `if` value from addon.json.
     * @param {string} addonId The ID of the addon.
     * @param {unknown} condition Condition from addon.json
     * @returns {boolean} True if the condition is met.
     */
    evaluateCondition (addonId, condition) {
        if (!condition) {
            // No condition. Default to true.
            return true;
        }

        if (condition.addonEnabled) {
            // addonEnabled is an OR
            const addonsToCheck = asArray(condition.addonEnabled);
            if (addonsToCheck.every(id => !this.getAddonEnabled(id))) {
                return false;
            }
        }

        if (condition.settings) {
            // settings is an AND
            for (const [settingName, expectedValue] of Object.entries(condition.settings)) {
                // expectedValue can be a string or an array of possible options
                const expectedValues = Array.isArray(expectedValue) ? expectedValue : [expectedValue];
                if (!expectedValues.includes(this.getAddonSetting(addonId, settingName))) {
                    return false;
                }
            }
        }

        return true;
    }
}

export default SettingsStore;

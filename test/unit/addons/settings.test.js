import SettingStore from '../../../src/addons/settings-store';
import upstreamMeta from '../../../src/addons/generated/upstream-meta.json';

class LocalStorageShim {
    constructor () {
        this.storage = Object.create(null);
    }
    getItem (key) {
        return this.storage[key];
    }
    setItem (key, value) {
        this.storage[key] = value.toString();
    }
}

beforeEach(() => {
    global.localStorage = new LocalStorageShim();
});

const lightTheme = {
    isDark: () => false
};

const darkTheme = {
    isDark: () => true
};

test('enabled, event', () => {
    const store = new SettingStore();
    const fn = jest.fn();
    store.addEventListener('setting-changed', fn);
    expect(store.getAddonEnabled('editor-devtools')).toBe(true);
    expect('enabled' in store.store['editor-devtools']).toBe(false);
    store.setAddonEnabled('editor-devtools', false);
    expect(store.getAddonEnabled('editor-devtools')).toBe(false);
    expect('enabled' in store.store['editor-devtools']).toBe(true);
    store.setAddonEnabled('editor-devtools', true);
    store.setAddonEnabled('cat-blocks', true);
    expect('enabled' in store.store['cat-blocks']).toBe(true);
    store.setAddonEnabled('cat-blocks', null);
    expect('enabled' in store.store['cat-blocks']).toBe(false);
    expect(fn).toHaveBeenCalledTimes(4);
    expect(fn.mock.calls[0][0].detail.addonId).toBe('editor-devtools');
    expect(fn.mock.calls[0][0].detail.settingId).toBe('enabled');
    expect(fn.mock.calls[0][0].detail.value).toBe(false);
    expect(fn.mock.calls[1][0].detail.addonId).toBe('editor-devtools');
    expect(fn.mock.calls[1][0].detail.settingId).toBe('enabled');
    expect(fn.mock.calls[1][0].detail.value).toBe(true);
    expect(fn.mock.calls[2][0].detail.addonId).toBe('cat-blocks');
    expect(fn.mock.calls[2][0].detail.settingId).toBe('enabled');
    expect(fn.mock.calls[2][0].detail.value).toBe(true);
    expect(fn.mock.calls[3][0].detail.addonId).toBe('cat-blocks');
    expect(fn.mock.calls[3][0].detail.settingId).toBe('enabled');
    expect(fn.mock.calls[3][0].detail.value).toBe(false);
});

test('settings, event, default values', () => {
    const store = new SettingStore();
    const fn = jest.fn();
    expect(store.getAddonSetting('onion-skinning', 'default')).toBe(false);
    expect('default' in store.store['onion-skinning']).toBe(false);
    store.addEventListener('setting-changed', fn);
    store.setAddonSetting('onion-skinning', 'default', true);
    expect(store.getAddonSetting('onion-skinning', 'default')).toBe(true);
    expect('default' in store.store['onion-skinning']).toBe(true);
    store.setAddonSetting('onion-skinning', 'default', null);
    expect('default' in store.store['onion-skinning']).toBe(false);
    expect(store.getAddonSetting('onion-skinning', 'default')).toBe(false);
    expect(fn).toHaveBeenCalledTimes(2);
    expect(fn.mock.calls[0][0].detail.addonId).toBe('onion-skinning');
    expect(fn.mock.calls[0][0].detail.settingId).toBe('default');
    expect(fn.mock.calls[0][0].detail.value).toBe(true);
    expect(fn.mock.calls[1][0].detail.addonId).toBe('onion-skinning');
    expect(fn.mock.calls[1][0].detail.settingId).toBe('default');
    expect(fn.mock.calls[1][0].detail.value).toBe(false);
});

test('no actual change emits no event', () => {
    const store = new SettingStore();
    const fn = jest.fn();
    store.addEventListener('setting-changed', fn);
    for (let i = 0; i < 5; i++) store.setAddonEnabled('cat-blocks', true);
    expect(fn).toHaveBeenCalledTimes(1);
    for (let i = 0; i < 5; i++) store.setAddonEnabled('cat-blocks', false);
    expect(fn).toHaveBeenCalledTimes(2);
    for (let i = 0; i < 5; i++) store.setAddonSetting('onion-skinning', 'default', true);
    expect(fn).toHaveBeenCalledTimes(3);
    for (let i = 0; i < 5; i++) store.setAddonSetting('onion-skinning', 'default', false);
    expect(fn).toHaveBeenCalledTimes(4);
});

test('changing enabled throws on unknown addons', () => {
    const store = new SettingStore();
    const fn = jest.fn();
    store.addEventListener('setting-changed', fn);
    expect(() => store.setAddonEnabled('egriohergoijergijregojiergdfoijre', true)).toThrow();
    expect(fn).toHaveBeenCalledTimes(0);
});

test('changing settings throws on unknown settings', () => {
    const store = new SettingStore();
    const fn = jest.fn();
    store.addEventListener('setting-changed', fn);
    expect(() => store.setAddonSetting('onion-skinning', 'sdlkjfslkdjfljksd', true)).toThrow();
    expect(() => store.setAddonSetting('ergfoijgi', 'sdflkjsfdlkj', true)).toThrow();
    expect(fn).toHaveBeenCalledTimes(0);
});

test('changing enabled throws on invalid values', () => {
    const store = new SettingStore();
    const fn = jest.fn();
    store.addEventListener('setting-changed', fn);
    expect(() => store.setAddonEnabled('cat-blocks', 'sdfjlksdflk')).toThrow();
    expect(() => store.setAddonEnabled('cat-blocks', 0)).toThrow();
    expect(() => store.setAddonEnabled('cat-blocks', [])).toThrow();
    expect(() => store.setAddonEnabled('cat-blocks', {})).toThrow();
    expect(fn).toHaveBeenCalledTimes(0);
});

test('changing settings checks value validity and throws', () => {
    const store = new SettingStore();
    const fn = jest.fn();
    store.addEventListener('setting-changed', fn);
    // boolean
    expect(() => store.setAddonSetting('onion-skinning', 'default', '#abcdef')).toThrow();
    expect(() => store.setAddonSetting('onion-skinning', 'default', [])).toThrow();
    expect(() => store.setAddonSetting('onion-skinning', 'default', {})).toThrow();
    expect(() => store.setAddonSetting('onion-skinning', 'default', '')).toThrow();
    expect(() => store.setAddonSetting('onion-skinning', 'default', 1)).toThrow();
    // integer
    expect(() => store.setAddonSetting('onion-skinning', 'next', '#abcdef')).toThrow();
    expect(() => store.setAddonSetting('onion-skinning', 'next', [])).toThrow();
    expect(() => store.setAddonSetting('onion-skinning', 'next', {})).toThrow();
    expect(() => store.setAddonSetting('onion-skinning', 'next', '')).toThrow();
    expect(() => store.setAddonSetting('onion-skinning', 'next', '3')).toThrow();
    expect(() => store.setAddonSetting('onion-skinning', 'next', false)).toThrow();
    // select
    expect(() => store.setAddonSetting('onion-skinning', 'mode', '#abcdef')).toThrow();
    expect(() => store.setAddonSetting('onion-skinning', 'mode', [])).toThrow();
    expect(() => store.setAddonSetting('onion-skinning', 'mode', {})).toThrow();
    expect(() => store.setAddonSetting('onion-skinning', 'mode', '')).toThrow();
    expect(() => store.setAddonSetting('onion-skinning', 'mode', false)).toThrow();
    expect(() => store.setAddonSetting('onion-skinning', 'mode', 1)).toThrow();
    expect(() => store.setAddonSetting('onion-skinning', 'mode', 'tint')).not.toThrow();
    expect(() => store.setAddonSetting('onion-skinning', 'mode', 'merge')).not.toThrow();
    // color
    expect(() => store.setAddonSetting('onion-skinning', 'beforeTint', '#abcdef')).not.toThrow();
    expect(() => store.setAddonSetting('onion-skinning', 'beforeTint', '#abcDE1')).not.toThrow();
    expect(() => store.setAddonSetting('onion-skinning', 'beforeTint', [])).toThrow();
    expect(() => store.setAddonSetting('onion-skinning', 'beforeTint', {})).toThrow();
    expect(() => store.setAddonSetting('onion-skinning', 'beforeTint', '')).toThrow();
    expect(() => store.setAddonSetting('onion-skinning', 'beforeTint', false)).toThrow();
    expect(() => store.setAddonSetting('onion-skinning', 'beforeTint', 1)).toThrow();
    expect(fn).toHaveBeenCalledTimes(4);
});

test('colors with alpha channel', () => {
    const store = new SettingStore();
    store.setAddonSetting('onion-skinning', 'beforeTint', '#123456');
    expect(store.getAddonSetting('onion-skinning', 'beforeTint')).toBe('#123456');
    store.setAddonSetting('onion-skinning', 'beforeTint', '#234567ff');
    expect(store.getAddonSetting('onion-skinning', 'beforeTint')).toBe('#234567');
    store.setAddonSetting('onion-skinning', 'beforeTint', '#abc67800');
    expect(store.getAddonSetting('onion-skinning', 'beforeTint')).toBe('#abc678');
    store.import({
        addons: {
            'onion-skinning': {
                settings: {
                    beforeTint: '#56789aff'
                }
            }
        }
    });
    expect(store.getAddonSetting('onion-skinning', 'beforeTint')).toBe('#56789a');
});

test('reset does not change enabled', () => {
    const store = new SettingStore();
    store.setAddonEnabled('cat-blocks', true);
    store.resetAddon('cat-blocks');
    expect(store.getAddonEnabled('cat-blocks')).toBe(true);
});

test('reset settings, event', () => {
    const store = new SettingStore();
    store.setAddonSetting('onion-skinning', 'default', true);
    store.setAddonSetting('onion-skinning', 'next', 3);
    const fn = jest.fn();
    store.addEventListener('setting-changed', fn);
    store.resetAddon('onion-skinning');
    expect(store.getAddonSetting('onion-skinning', 'default')).toBe(false);
    expect(store.getAddonSetting('onion-skinning', 'next')).toBe(0);
    expect(fn).toHaveBeenCalledTimes(2);
    expect(fn.mock.calls[0][0].detail.addonId).toBe('onion-skinning');
    expect(fn.mock.calls[0][0].detail.settingId).toBe('default');
    expect(fn.mock.calls[0][0].detail.value).toBe(false);
    expect(fn.mock.calls[1][0].detail.addonId).toBe('onion-skinning');
    expect(fn.mock.calls[1][0].detail.settingId).toBe('next');
    expect(fn.mock.calls[1][0].detail.value).toBe(0);
});

test('reset all addons', () => {
    const store = new SettingStore();
    store.setAddonEnabled('cat-blocks', true);
    store.setAddonSetting('onion-skinning', 'default', true);
    const fn = jest.fn();
    store.addEventListener('setting-changed', fn);
    store.resetAllAddons();
    expect(fn).toHaveBeenCalledTimes(2);
    expect(fn.mock.calls[0][0].detail.addonId).toBe('cat-blocks');
    expect(fn.mock.calls[0][0].detail.settingId).toBe('enabled');
    expect(fn.mock.calls[0][0].detail.value).toBe(false);
    expect(fn.mock.calls[1][0].detail.addonId).toBe('onion-skinning');
    expect(fn.mock.calls[1][0].detail.settingId).toBe('default');
    expect(fn.mock.calls[1][0].detail.value).toBe(false);
});

test('apply preset', () => {
    const store = new SettingStore();
    const fn = jest.fn();
    store.addEventListener('setting-changed', fn);
    store.setAddonSetting('editor-theme3', 'motion-color', '#abcdef');
    store.applyAddonPreset('editor-theme3', 'original');
    expect(fn.mock.calls.length).toBeGreaterThan(5);
    expect(store.getAddonSetting('editor-theme3', 'motion-color')).toBe('#4a6cd4');
    // TODO: test that settings not specified in the preset don't change
});

test('unknown preset throws', () => {
    const store = new SettingStore();
    const fn = jest.fn();
    store.addEventListener('setting-changed', fn);
    expect(() => store.applyAddonPreset('alksdfjlksdf', 'jksdflkjsdf')).toThrow();
    expect(() => store.applyAddonPreset('editor-theme3', 'jksdflkjsdf')).toThrow();
    expect(fn).toHaveBeenCalledTimes(0);
});

test('export core', () => {
    const store = new SettingStore();
    const exported = store.export({theme: lightTheme});
    expect(exported.core.version).toMatch(/tw/);
    expect(exported.core.lightTheme).toBe(true);
    const dark = store.export({theme: darkTheme});
    expect(dark.core.lightTheme).toBe(false);
});

test('export settings', () => {
    const store = new SettingStore();
    let exported = store.export({theme: lightTheme});
    expect(exported.addons['remove-sprite-confirm'].enabled).toBe(false);
    expect(exported.addons['remove-sprite-confirm'].settings).toEqual({});
    expect(exported.addons['onion-skinning'].enabled).toBe(true);
    expect(exported.addons['onion-skinning'].settings.default).toEqual(false);
    store.setAddonEnabled('remove-sprite-confirm', true);
    store.setAddonSetting('onion-skinning', 'default', true);
    exported = store.export({theme: lightTheme});
    expect(exported.addons['remove-sprite-confirm'].enabled).toBe(true);
    expect(exported.addons['remove-sprite-confirm'].settings).toEqual({});
    expect(exported.addons['onion-skinning'].enabled).toBe(true);
    expect(exported.addons['onion-skinning'].settings.default).toEqual(true);
});

test('export theme', () => {
    const store = new SettingStore();
    const exported = store.export({theme: lightTheme});
    expect(exported.core.lightTheme).toBe(true);
    const exported2 = store.export({theme: darkTheme});
    expect(exported2.core.lightTheme).toBe(false);
});

test('import, event', () => {
    const store = new SettingStore();
    store.setAddonEnabled('onion-skinning', false);
    store.setAddonSetting('onion-skinning', 'next', 5);
    const newStore = new SettingStore();
    newStore.setAddonSetting('onion-skinning', 'next', 10);
    const fn = jest.fn();
    newStore.addEventListener('setting-changed', fn);
    newStore.import(store.export({theme: lightTheme}));
    expect(newStore.getAddonEnabled('onion-skinning')).toBe(false);
    expect(newStore.getAddonSetting('onion-skinning', 'next')).toBe(5);
    expect(fn).toHaveBeenCalledTimes(2);
    expect(fn.mock.calls[0][0].detail.addonId).toBe('onion-skinning');
    expect(fn.mock.calls[0][0].detail.settingId).toBe('enabled');
    expect(fn.mock.calls[0][0].detail.value).toBe(false);
    expect(fn.mock.calls[1][0].detail.addonId).toBe('onion-skinning');
    expect(fn.mock.calls[1][0].detail.settingId).toBe('next');
    expect(fn.mock.calls[1][0].detail.value).toBe(5);
});

test('export is identical after import', () => {
    const store = new SettingStore();
    const fn = jest.fn();
    const exported = store.export({theme: lightTheme});
    store.import(exported);
    expect(fn).toHaveBeenCalledTimes(0);
    expect(store.export({theme: lightTheme})).toEqual(exported);
});

test('import format', () => {
    const store = new SettingStore();
    store.setAddonEnabled('cat-blocks', true);
    store.import({
        core: {
            version: 'lksd',
            lightTheme: false
        },
        addons: {
            'onion-skinning': {
                enabled: false,
                settings: {
                    next: 7
                }
            }
        }
    });
    expect(store.getAddonEnabled('onion-skinning')).toBe(false);
    expect(store.getAddonSetting('onion-skinning', 'next')).toBe(7);
    expect(store.getAddonEnabled('cat-blocks')).toBe(true);
});

test('invalid imports', () => {
    const store = new SettingStore();
    expect(() => store.import({
        addons: {}
    })).not.toThrow();
    expect(() => store.import({
        addons: {
            'onion-skinning': {
                enabled: false,
                settings: {
                    dsjfokosdfj: 5
                }
            }
        }
    })).not.toThrow();
    expect(() => store.import({
        addons: {
            grfdjiklk: {
                enabled: true,
                settings: {}
            }
        }
    })).not.toThrow();
    expect(() => store.import({
        addons: {
            'onion-skinning': {
                enabled: '4',
                settings: {
                    default: '3'
                }
            }
        }
    })).not.toThrow();
    expect(store.getAddonEnabled('onion-skinning')).toBe(false);
    expect(store.getAddonSetting('onion-skinning', 'default')).toBe(false);
});

test('local storage', () => {
    const store = new SettingStore();
    store.setAddonEnabled('cat-blocks', true);
    store.setAddonSetting('onion-skinning', 'default', true);
    const newStore = new SettingStore();
    newStore.readLocalStorage();
    expect(newStore.store).toEqual(store.store);
});

test('local storage is resistent to errors', () => {
    global.localStorage = new LocalStorageShim();
    const store = new SettingStore();
    localStorage.getItem = () => {
        throw new Error(':(');
    };
    store.readLocalStorage();
    localStorage.getItem = () => 'eoiru4jtg)(R(';
    store.readLocalStorage();
    localStorage.setItem = () => {
        throw new Error(':(');
    };
    store.setAddonEnabled('cat-blocks', true);
    // eslint-disable-next-line no-undefined
    global.localStorage = undefined;
    store.readLocalStorage();
    store.setAddonEnabled('cat-blocks', false);
});

test('setStore diffing', () => {
    const settingsStore = new SettingStore();
    const pageStore = new SettingStore();
    settingsStore.setAddonEnabled('editor-devtools', false);
    pageStore.setAddonEnabled('editor-devtools', false);
    const fn = jest.fn();
    pageStore.addEventListener('addon-changed', fn);
    pageStore.setStore(settingsStore.store);
    expect(fn).toHaveBeenCalledTimes(0);
    settingsStore.setAddonEnabled('editor-devtools', true);
    settingsStore.setAddonSetting('onion-skinning', 'next', 10);
    pageStore.setStore(settingsStore.store);
    expect(fn).toHaveBeenCalledTimes(2);
    expect(fn.mock.calls[0][0].detail.addonId).toBe('editor-devtools');
    expect(fn.mock.calls[1][0].detail.addonId).toBe('onion-skinning');
});

test('setStore dynamic enable/disable', () => {
    const settingsStore = new SettingStore();
    const pageStore = new SettingStore();
    settingsStore.setAddonEnabled('block-palette-icons', false);
    pageStore.setStore(settingsStore.store);
    const fn = jest.fn();
    pageStore.addEventListener('addon-changed', fn);
    settingsStore.setAddonEnabled('block-palette-icons', true);
    pageStore.setStore(settingsStore.store);
    expect(fn.mock.calls[0][0].detail.addonId).toBe('block-palette-icons');
    expect(fn.mock.calls[0][0].detail.dynamicEnable).toBe(true);
    expect(fn.mock.calls[0][0].detail.dynamicDisable).toBe(false);
    settingsStore.setAddonEnabled('block-palette-icons', false);
    pageStore.setStore(settingsStore.store);
    expect(fn.mock.calls[1][0].detail.addonId).toBe('block-palette-icons');
    expect(fn.mock.calls[1][0].detail.dynamicEnable).toBe(false);
    expect(fn.mock.calls[1][0].detail.dynamicDisable).toBe(true);
});

test('setStore weird values', () => {
    const settingsStore = new SettingStore();
    expect(settingsStore.getAddonEnabled('pause')).toBe(true);
    settingsStore.setAddonEnabled('pause', false);
    settingsStore.setAddonEnabled('clones', true);
    settingsStore.setStore({
        invalid0: {},
        invalid1: null,
        pause: null
    });
    expect(settingsStore.getAddonEnabled('pause')).toBe(false);
});

test('resetting an addon through setStore', () => {
    const store = new SettingStore();
    expect(store.getAddonSetting('custom-block-shape', 'paddingSize')).toBe(100);
    store.setAddonSetting('custom-block-shape', 'paddingSize', 50);
    expect(store.getAddonSetting('custom-block-shape', 'paddingSize')).toBe(50);
    const store2 = new SettingStore();
    store.setStore(store2.store);
    expect(store.getAddonSetting('custom-block-shape', 'paddingSize')).toBe(100);
});

test('setStoreWithVersionCheck', () => {
    const store = new SettingStore();
    store.setStore = jest.fn();
    store.setStoreWithVersionCheck({
        store: '1234',
        version: upstreamMeta.commit
    });
    expect(store.setStore).toHaveBeenCalledTimes(1);
    expect(store.setStore).toHaveBeenCalledWith('1234');
    store.setStore = jest.fn();
    store.setStoreWithVersionCheck({
        store: '1234',
        version: 'something invalid'
    });
    expect(store.setStore).toHaveBeenCalledTimes(0);
});

test('parseUrlParameter', () => {
    const store = new SettingStore();
    expect(store.getAddonEnabled('pause')).toBe(true);
    expect(store.getAddonEnabled('mute-project')).toBe(true);
    expect(store.getAddonEnabled('remove-curved-stage-border')).toBe(false);
    expect(store.remote).toBe(false);
    store.parseUrlParameter('pause,remove-curved-stage-border,,invalid addon??43t987(*&$');
    expect(store.getAddonEnabled('pause')).toBe(true);
    expect(store.getAddonEnabled('mute-project')).toBe(false);
    expect(store.getAddonEnabled('remove-curved-stage-border')).toBe(true);
    expect(store.remote).toBe(true);
});

test('Settings migration 1 -> 2', () => {
    const store = new SettingStore();

    // eslint-disable-next-line max-len
    global.localStorage.getItem = () => `{"_":1,"tw-project-info":{"enabled":false},"tw-interface-customization":{"enabled":false,"removeFeedback":true,"removeBackpack":true}}`;
    store.readLocalStorage();
    expect(store.getAddonEnabled('block-count')).toBe(false);
    expect(store.getAddonEnabled('tw-remove-backpack')).toBe(false);
    expect(store.getAddonEnabled('tw-remove-feedback')).toBe(false);

    // eslint-disable-next-line max-len
    global.localStorage.getItem = () => `{"_":1,"tw-project-info":{"enabled":true},"tw-interface-customization":{"enabled":true,"removeFeedback":true,"removeBackpack":true}}`;
    store.readLocalStorage();
    expect(store.getAddonEnabled('block-count')).toBe(true);
    expect(store.getAddonEnabled('tw-remove-backpack')).toBe(true);
    expect(store.getAddonEnabled('tw-remove-feedback')).toBe(true);
});

test('Settings migration 2 -> 3', () => {
    const store = new SettingStore();

    global.localStorage.getItem = () => JSON.stringify({
        '_': 2,
        'hide-flyout': {
            enabled: true
        }
    });
    store.readLocalStorage();
    expect(store.getAddonSetting('hide-flyout', 'toggle')).toBe('hover');
});

test('Settings migration 3 -> 4', () => {
    const store = new SettingStore();

    global.localStorage.getItem = () => JSON.stringify({
        _: 3
    });
    store.readLocalStorage();
    expect(store.getAddonEnabled('editor-devtools')).toBe(true);
    expect(store.getAddonEnabled('find-bar')).toBe(true);
    expect(store.getAddonEnabled('middle-click-popup')).toBe(true);

    global.localStorage.getItem = () => JSON.stringify({
        '_': 3,
        'editor-devtools': {
            enabled: false
        }
    });
    store.readLocalStorage();
    expect(store.getAddonEnabled('editor-devtools')).toBe(false);
    expect(store.getAddonEnabled('find-bar')).toBe(false);
    expect(store.getAddonEnabled('middle-click-popup')).toBe(false);
});

test('if', () => {
    const store = new SettingStore();
    store.setAddonEnabled('editor-devtools', true);
    store.setAddonEnabled('onion-skinning', false);
    store.setAddonSetting('editor-theme3', 'motion-color', '#000000');
    store.setAddonSetting('editor-theme3', 'looks-color', '#FFFFFF');

    // eslint-disable-next-line no-undefined
    expect(store.evaluateCondition('editor-theme3', undefined)).toBe(true);
    expect(store.evaluateCondition('editor-theme3', null)).toBe(true);
    expect(store.evaluateCondition('editor-theme3', {})).toBe(true);

    expect(store.evaluateCondition('editor-theme3', {
        addonEnabled: ['onion-skinning']
    })).toBe(false);
    expect(store.evaluateCondition('editor-theme3', {
        addonEnabled: 'onion-skinning'
    })).toBe(false);
    expect(store.evaluateCondition('editor-theme3', {
        addonEnabled: ['editor-devtools']
    })).toBe(true);
    expect(store.evaluateCondition('editor-theme3', {
        addonEnabled: 'editor-devtools'
    })).toBe(true);
    expect(store.evaluateCondition('editor-theme3', {
        addonEnabled: ['editor-devtools', 'onion-skinning']
    })).toBe(true);

    expect(store.evaluateCondition('editor-theme3', {
        settings: {}
    })).toBe(true);
    expect(store.evaluateCondition('editor-theme3', {
        settings: {
            'motion-color': '#000000'
        }
    })).toBe(true);
    expect(store.evaluateCondition('editor-theme3', {
        settings: {
            'looks-color': '#FFFFFF'
        }
    })).toBe(true);
    expect(store.evaluateCondition('editor-theme3', {
        settings: {
            'looks-color': '#FFFFFE'
        }
    })).toBe(false);
    expect(store.evaluateCondition('editor-theme3', {
        settings: {
            'motion-color': '#000000',
            'looks-color': '#FFFFFF'
        }
    })).toBe(true);
    expect(store.evaluateCondition('editor-theme3', {
        settings: {
            'motion-color': '#000001',
            'looks-color': '#FFFFFF'
        }
    })).toBe(false);

    expect(store.evaluateCondition('editor-theme3', {
        settings: {
            'looks-color': ['#FFFFFF']
        }
    })).toBe(true);
    expect(store.evaluateCondition('editor-theme3', {
        settings: {
            'looks-color': ['#FFFFFE', '#FFFFFF']
        }
    })).toBe(true);
    expect(store.evaluateCondition('editor-theme3', {
        settings: {
            'looks-color': ['#FFFFFF', '#FFFFFE']
        }
    })).toBe(true);
    expect(store.evaluateCondition('editor-theme3', {
        settings: {
            'looks-color': ['#FFFFFE']
        }
    })).toBe(false);
    expect(store.evaluateCondition('editor-theme3', {
        settings: {
            'looks-color': ['#FFFFFE', '#FFFFFD']
        }
    })).toBe(false);
    expect(store.evaluateCondition('editor-theme3', {
        settings: {
            'looks-color': []
        }
    })).toBe(false);

    expect(store.evaluateCondition('editor-theme3', {
        addonEnabled: ['editor-devtools'],
        settings: {
            'motion-color': '#000000'
        }
    })).toBe(true);
    expect(store.evaluateCondition('editor-theme3', {
        addonEnabled: ['onion-skinning'],
        settings: {
            'motion-color': '#000000'
        }
    })).toBe(false);
    expect(store.evaluateCondition('editor-theme3', {
        addonEnabled: ['editor-devtools'],
        settings: {
            'motion-color': '#000001'
        }
    })).toBe(false);
    expect(store.evaluateCondition('editor-theme3', {
        addonEnabled: ['onion-skinning'],
        settings: {
            'motion-color': '#000001'
        }
    })).toBe(false);
});

test('Settings migration 4 -> 5', () => {
    const store = new SettingStore();

    // implied default settings
    global.localStorage.getItem = () => JSON.stringify({
        _: 4
    });
    store.readLocalStorage();
    expect(store.getAddonSetting('fullscreen', 'toolbar')).toBe('show');

    // also implied default settings
    global.localStorage.getItem = () => JSON.stringify({
        _: 4,
        fullscreen: {}
    });
    store.readLocalStorage();
    expect(store.getAddonSetting('fullscreen', 'toolbar')).toBe('show');

    // explicit default settings
    global.localStorage.getItem = () => JSON.stringify({
        '_': 4,
        'fullscreen': {
            hideToolbar: false
        }
    });
    store.readLocalStorage();
    expect(store.getAddonSetting('fullscreen', 'toolbar')).toBe('show');

    // explicit hide, implied default hover setting
    global.localStorage.getItem = () => JSON.stringify({
        '_': 4,
        'fullscreen': {
            hideToolbar: true
        }
    });
    store.readLocalStorage();
    expect(store.getAddonSetting('fullscreen', 'toolbar')).toBe('hover');

    // explicit hide and default hover
    global.localStorage.getItem = () => JSON.stringify({
        '_': 4,
        'fullscreen': {
            hideToolbar: true,
            hoverToolbar: true
        }
    });
    store.readLocalStorage();
    expect(store.getAddonSetting('fullscreen', 'toolbar')).toBe('hover');

    // explicit hide, no hover
    global.localStorage.getItem = () => JSON.stringify({
        '_': 4,
        'fullscreen': {
            hideToolbar: true,
            hoverToolbar: false
        }
    });
    store.readLocalStorage();
    expect(store.getAddonSetting('fullscreen', 'toolbar')).toBe('hide');
});

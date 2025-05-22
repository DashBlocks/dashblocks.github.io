const runAddons = () => {
    import(/* webpackChunkName: "addons" */ './api');
};

export default runAddons;

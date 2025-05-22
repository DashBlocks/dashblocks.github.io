/* eslint-disable import/no-commonjs */

const OLD_PRIMARY_COLOR = '#855cd6';

const loader = source => `
    const original = ${JSON.stringify(source)};

    const getSRC = () => {
        const recolored = typeof Recolor === 'object' ? (
            original.replace(/${OLD_PRIMARY_COLOR}/gi, Recolor.primary)
        ) : original;
        return 'data:image/svg+xml;,' + encodeURIComponent(recolored);
    };

    export default getSRC;
`;

module.exports = loader;

export const formatBytes = bytes => {
    if (bytes < 1000 * 1000) {
        return `${(bytes / 1000).toFixed(2)}KB`;
    }
    return `${(bytes / 1000 / 1000).toFixed(2)}MB`;
};

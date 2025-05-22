export const isMobile = typeof window !== 'undefined' && 'ontouchstart' in window;
export const clipboardSupported = typeof navigator !== 'undefined' && navigator.clipboard && navigator.clipboard.write;
export const mediaRecorderSupported = typeof MediaRecorder !== 'undefined';

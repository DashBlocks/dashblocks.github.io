self.addEventListener('install', () => {
    // Remove old service worker as soon as possible
    self.skipWaiting();
});

self.addEventListener('activate', event => {
    // We don't use caches any more, so remove all of them
    event.waitUntil(caches.keys().then(keys => Promise.all(keys.map(i => caches.delete(i)))));
});

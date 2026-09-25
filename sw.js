const BASE = '/inversion-matrix';
const CACHE = 'inversion-matrix-' + Date.now();
const ASSETS = [BASE + '/', BASE + '/index.html', BASE + '/manifest.json'];

self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(CACHE).then((c) => c.addAll(ASSETS)));
  self.skipWaiting();
});

self.addEventListener('activate', (e) => {
  e.waitUntil(caches.keys().then((keys) =>
    Promise.all(keys.map((k) => caches.delete(k)))
  ));
  self.clients.claim();
});

self.addEventListener('fetch', (e) => {
  if (e.request.method !== 'GET') return;
  e.respondWith(
    fetch(e.request).then((response) => {
      if (response && response.status === 200) {
        const clone = response.clone();
        caches.open(CACHE).then((c) => c.put(e.request, clone));
      }
      return response;
    }).catch(() => caches.match(e.request))
  );
});

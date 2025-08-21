self.addEventListener('install', e => {
  e.waitUntil(
    caches.open('roma-pwa-cache').then(cache => {
      return cache.addAll(['/', '/index.html', '/manifest.json', '/sun_transparent.png']);
    })
  );
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(response => response || fetch(e.request))
  );
});

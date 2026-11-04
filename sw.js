/* Weekly Volleyball — offline service worker.
   Bump CACHE when the app changes; the old cache is dropped on activate. */
const CACHE = 'volleyball-v22';
const SHELL = [
  './',
  './index.html',
  './manifest.webmanifest',
  './rsvp.html',
  './icon-192.png',
  './icon-512.png',
  './icon-maskable-512.png',
  './apple-touch-icon.png'
];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE)
      .then(c => c.addAll(SHELL))
      .then(() => self.skipWaiting())
      .catch(() => self.skipWaiting())
  );
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('message', e => { if (e.data === 'skip-waiting') self.skipWaiting(); });

/* Pages: try the network so an update lands, fall back to the cached copy offline.
   Everything else, including the Google Fonts files: serve from cache, refresh behind. */
self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET') return;

  if (req.mode === 'navigate'){
    e.respondWith(
      fetch(req)
        .then(res => {
          const copy = res.clone();
          caches.open(CACHE).then(c => c.put('./index.html', copy));
          return res;
        })
        .catch(() => caches.match('./index.html').then(r => r || caches.match('./')))
    );
    return;
  }

  const url = new URL(req.url);
  const sameSite = url.origin === self.location.origin;
  const fonts = /fonts\.(googleapis|gstatic)\.com$/.test(url.hostname);
  if (!sameSite && !fonts) return;

  e.respondWith(
    caches.match(req).then(hit => {
      const live = fetch(req)
        .then(res => {
          if (res && (res.ok || res.type === 'opaque')){
            const copy = res.clone();
            caches.open(CACHE).then(c => c.put(req, copy));
          }
          return res;
        })
        .catch(() => hit);
      return hit || live;
    })
  );
});

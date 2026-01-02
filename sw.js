const cacheName = 'training-logger-v1';
const assets = [
  'index.html',
  'manifest.json',
  'sw.js',
  'https://cdn.jsdelivr.net/npm/chart.js'
];

self.addEventListener('install', e=>{
  e.waitUntil(caches.open(cacheName).then(cache=>cache.addAll(assets)));
});

self.addEventListener('fetch', e=>{
  e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request)));
});

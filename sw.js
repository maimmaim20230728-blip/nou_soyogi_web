/* Service Worker ― 完全オフライン動作（全ファイルを端末にキャッシュ） */
const CACHE = 'soyogi-nou-v16';
const ASSETS = [
  './', 'index.html', 'style.css', 'app.js', 'audio.js', 'store.js', 'tap.js',
  'data/config.js', 'data/lang.js',
  'games/calc.js', 'games/memory.js', 'games/stroop.js', 'games/silhouette.js', 'games/numtouch.js',
  'manifest.webmanifest',
  'icons/icon.svg', 'icons/icon-192.png', 'icons/icon-512.png', 'icons/apple-touch-icon.png',
];

self.addEventListener('install', e=>{
  self.skipWaiting();
  e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS)).catch(()=>{}));
});
self.addEventListener('activate', e=>{
  e.waitUntil(caches.keys().then(keys=>
    Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k)))
  ));
  self.clients.claim();
});
self.addEventListener('fetch', e=>{
  if(e.request.method !== 'GET') return;
  if(new URL(e.request.url).origin !== self.location.origin) return;  // 外部(esm.sh等)はSW介入しない
  e.respondWith(
    caches.match(e.request).then(hit=> hit || fetch(e.request).then(res=>{
      // シルエット素材など後から追加したファイルも動的にキャッシュ
      const copy = res.clone();
      caches.open(CACHE).then(c=>c.put(e.request, copy)).catch(()=>{});
      return res;
    }).catch(()=> hit))
  );
});

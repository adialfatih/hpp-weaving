const cacheVersion = 'rjsStorage';

const filesToCache = [
  
  '/',
  
  //----------JavaScripts----------//
  
  '/assets/js/script2.js',

  //----------CSS----------//
  //themes
  
  '/assets/main/style.css'

];

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheVersion)
      .then(function(cache) {
        return cache.addAll(filesToCache)
      })
  )
});

self.addEventListener("activate", event => {
  console.log("Service worker activated");
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(res) {
        if (res) return res;

        return fetch(event.request);
      })
  );
});
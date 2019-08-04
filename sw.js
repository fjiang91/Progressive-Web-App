const staticCacheName = 'site-static';
const asset = [
  '/',
  '/index.html',
  '/js/app.js',
  '/js/ui.js',
  '/js/materialize.min.css',
  '/css/style.css',
  '/css/materialize.min.css',
  '/img/dish.png',
  'https://fonts.googleapis.com/icon?family=Material+Icons',
];

//Install Service Worker
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(staticCacheName).then(cache => {
      console.log('Caching Shell Assets');
      cache.addAll(asset);
    })
  );
  // console.log('serivce worker has been installed', event);
});

//Activate Service Worker
self.addEventListener('activate', event => {
  console.log('Service Worker has been activated', event);
});

//Fetch Event
self.addEventListener('fetch', event => {
  console.log('Fetch Event', event);
});

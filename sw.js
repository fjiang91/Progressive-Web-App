//Install Service Worker
self.addEventListener('install', (event) => {
  console.log('serivce worker has been installed', event);
});

//Activate Service Worker
self.addEventListener('activate', (event) => {
  console.log('Service Worker has been activated', event);
});

//Fetch Event
self.addEventListener( 'fetch', (event) => {
  console.log('Fetch Event', event);
});

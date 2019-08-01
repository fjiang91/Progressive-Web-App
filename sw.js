//Install Service Worker
self.addEventListener('install', (event) => {
  console.log('serivce worker has been installed', event);
});

//Activate Service Worker
self.addEventListener('activate', (event) => {
  console.log('Service Worker has been activated', event);
});

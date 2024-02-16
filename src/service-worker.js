// service-worker.js

import {precacheAndRoute, } from 'workbox-precaching';
// Add in additional imports here as needed.

// This line of code ensures that everything in your webpack
// compilation gets precache and served.
precacheAndRoute(self.__WB_MANIFEST);

// Your custom service worker code goes here.
self.addEventListener('install', function(e) {
    e.waitUntil(
      caches.open(PrecacheStrategy.cacheName).then(function(cache) {
        return cache.addAll(filesToCache);
      })
    );
    self.skipWaiting();
  });
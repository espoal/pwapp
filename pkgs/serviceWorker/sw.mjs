import { cachedList } from './cache.mjs'

function isSuccessful(response) {
  return response &&
    response.status === 200 &&
    response.type === 'basic';
}

const CACHE_NAME = 'cache-v1'

self.addEventListener('message', (event) => {
  if (event.data === 'SKIP_WAITING') {
    self.skipWaiting()
  }
})

self.addEventListener('install', event => {
  console.log('Service worker installed')
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function (cache) {
        return cache.addAll(cachedList);
      })
  )
})
self.addEventListener('activate', event => {
  console.log('Service worker activated');
})

self.addEventListener('fetch', event => {
  console.log(`URL requested: ${event.request.url}`)
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response; // Cache hit
        }

        console.log(`Cache miss!`)
        console.log({ event })

        return fetch(event.request.clone())
          .then(function (response) {
              if (!isSuccessful(response)) {
                return response;
              }

              caches.open(CACHE_NAME)
                .then(function (cache) {
                  cache.put(event.request, response.clone());
                });

              return response;
            }
          );
      })
  );
})

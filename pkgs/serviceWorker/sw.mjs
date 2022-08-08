import { cachedList } from './cache.mjs'

function isSuccessful(response) {
  //return response &&
  return (response.status === 200 || response.status === 304) //&& response.type === 'basic';
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
        return cache.addAll(cachedList)
      })
  )
})
self.addEventListener('activate', event => {
  console.log('Service worker activated');
})

const respondFromCache = async (event) => {
  const { request } = event

  const cache = await caches.open(CACHE_NAME)
  const cacheMatch = await cache.match(request)
  // TODO: handle API
  if ( cacheMatch ) {
    return cacheMatch
  } else {
    const response = await fetch(request)

    if (isSuccessful(response))
      cache.put(request, response.clone())
    else
      console.log({ response, request})

    return response
  }
}

self.addEventListener('fetch', async function (event) {

  event.respondWith(
    respondFromCache(event))

})



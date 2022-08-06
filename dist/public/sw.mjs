// pnp:/home/mamluk/Projects/pwapp/pkgs/serviceWorker/cache.mjs
var cachedList = [
  "/",
  "/dash",
  "/Auth.mjs",
  "/app.webmanifest",
  "/assets/images/auth-decoration.png",
  "/assets/images/auth-image.jpg",
  "/assets/images/icon-01.svg",
  "/assets/images/user-36-01.jpg",
  "/assets/images/user-36-02.jpg",
  "/assets/images/user-36-03.jpg",
  "/assets/images/user-36-04.jpg",
  "/assets/images/user-avatar-32.png",
  "/data/UserChart.json",
  "/favicon.svg",
  "/index.css",
  "/index.html",
  "/index.mjs",
  "/register.mjs",
  "/ssr/auth/login/index.html",
  "/ssr/critical/critical.css",
  "/ssr/critical/index.html",
  "/ssr/dash/index.html",
  "/ssr.mjs",
  "/sw.mjs",
  "/uncritical.css",
  "/vendors/charts-0.0.1.mjs",
  "/vendors/misc-0.0.1.mjs",
  "/vendors/react-0.0.1.mjs",
  "/vendors/resolvedConfig-0.0.1.mjs",
  "/vendors/server-0.0.1.mjs"
];

// pnp:/home/mamluk/Projects/pwapp/pkgs/serviceWorker/sw.mjs
function isSuccessful(response) {
  return response && (response.status === 200 || response.status === 304) && response.type === "basic";
}
var CACHE_NAME = "cache-v1";
self.addEventListener("message", (event) => {
  if (event.data === "SKIP_WAITING") {
    self.skipWaiting();
  }
});
self.addEventListener("install", (event) => {
  console.log("Service worker installed");
  event.waitUntil(
    caches.open(CACHE_NAME).then(function(cache) {
      return cache.addAll(cachedList);
    })
  );
});
self.addEventListener("activate", (event) => {
  console.log("Service worker activated");
});
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then(function(response) {
      if (response) {
        return response;
      }
      console.log(`Cache miss!`);
      console.log({ event });
      return fetch(event.request.clone()).then(
        function(response2) {
          if (!isSuccessful(response2)) {
            return response2;
          }
          caches.open(CACHE_NAME).then(function(cache) {
            cache.put(event.request, response2.clone());
          });
          return response2;
        }
      );
    })
  );
});

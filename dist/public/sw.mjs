// pnp:/home/mamluk/Projects/pwapp/pkgs/serviceWorker/sw.mjs
self.addEventListener("install", (event) => {
  console.log("Service worker installed");
});
self.addEventListener("activate", (event) => {
  console.log("Service worker activated");
});
self.addEventListener("fetch", (event) => {
  console.log(`URL requested: ${event.request.url}`);
});

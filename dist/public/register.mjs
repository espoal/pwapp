// pnp:/home/mamluk/Projects/pwapp/pkgs/serviceWorker/register.mjs
var invokeServiceWorkerUpdateFlow = (registration) => {
  if (registration.waiting) {
    registration.waiting.postMessage("SKIP_WAITING");
  }
};
if ("serviceWorker" in navigator) {
  window.addEventListener("load", async () => {
    const registration = await navigator.serviceWorker.register("/sw.mjs", { type: "module" });
    if (registration.waiting) {
      invokeServiceWorkerUpdateFlow(registration);
    }
    registration.addEventListener("updatefound", () => {
      if (registration.installing) {
        registration.installing.addEventListener("statechange", () => {
          if (registration.waiting) {
            if (navigator.serviceWorker.controller) {
              invokeServiceWorkerUpdateFlow(registration);
            } else {
              console.log("Service Worker initialized for the first time");
            }
          }
        });
      }
    });
    let refreshing = false;
    navigator.serviceWorker.addEventListener("controllerchange", () => {
      if (!refreshing) {
        window.location.reload();
        refreshing = true;
      }
    });
  });
}

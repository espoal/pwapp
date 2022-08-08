const invokeServiceWorkerUpdateFlow = (registration) => {
  // TODO: implement your own UI notification element
  if (registration.waiting) {
    // let waiting Service Worker know it should became active
    registration.waiting.postMessage('SKIP_WAITING')
  }
}

if ('serviceWorker' in navigator) {
  // wait for the page to load
  window.addEventListener('load', async () => {
    // register the service worker from the file specified
    const registration = await navigator.serviceWorker.register('/sw.mjs', { type: 'module'})

    // ensure the case when the updatefound event was missed is also handled
    // by re-invoking the prompt when there's a waiting Service Worker
    if (registration.waiting) {
      invokeServiceWorkerUpdateFlow(registration)
    }

    // detect Service Worker update available and wait for it to become installed
    registration.addEventListener('updatefound', () => {
      if (registration.installing) {
        // wait until the new Service worker is actually installed (ready to take over)
        registration.installing.addEventListener('statechange', () => {
          if (registration.waiting) {
            // if there's an existing controller (previous Service Worker), show the prompt
            if (navigator.serviceWorker.controller) {
              invokeServiceWorkerUpdateFlow(registration)
            } else {
              // otherwise it's the first install, nothing to do
              //console.log('Service Worker initialized for the first time')
            }
          }
        })
      }
    })

    let refreshing = false;

    // detect controller change and refresh the page
    navigator.serviceWorker.addEventListener('controllerchange', () => {
      if (!refreshing) {
        window.location.reload()
        refreshing = true
      }
    })
  })
}

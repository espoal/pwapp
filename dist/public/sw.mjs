var a=["/","/dash","/Auth.mjs","/app.webmanifest","/assets/images/auth-decoration.png","/assets/images/auth-image.jpg","/assets/images/icon-01.svg","/assets/images/user-36-01.jpg","/assets/images/user-36-02.jpg","/assets/images/user-36-03.jpg","/assets/images/user-36-04.jpg","/assets/images/user-avatar-32.png","/data/UserChart.json","/favicon.svg","/index.css","/index.html","/index.mjs","/register.mjs","/ssr/auth/login/index.html","/ssr/critical/critical.css","/ssr/critical/index.html","/ssr/dash/index.html","/ssr.mjs","/sw.mjs","/uncritical.css","/vendors/charts-0.0.1.mjs","/vendors/misc-0.0.1.mjs","/vendors/react-0.0.1.mjs","/vendors/resolvedConfig-0.0.1.mjs","/vendors/server-0.0.1.mjs"];function c(s){return s&&(s.status===200||s.status===304)&&s.type==="basic"}var i="cache-v1";self.addEventListener("message",s=>{s.data==="SKIP_WAITING"&&self.skipWaiting()});self.addEventListener("install",s=>{console.log("Service worker installed"),s.waitUntil(caches.open(i).then(function(e){return e.addAll(a)}))});self.addEventListener("activate",s=>{console.log("Service worker activated")});self.addEventListener("fetch",s=>{s.respondWith(caches.match(s.request).then(function(e){return e||(console.log("Cache miss!"),console.log({event:s}),fetch(s.request.clone()).then(function(t){return c(t)&&caches.open(i).then(function(n){n.put(s.request,t.clone())}),t}))}))});

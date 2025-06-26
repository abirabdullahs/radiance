const CACHE_NAME = "radiance-v1";
const urlsToCache = [
  "/",
  "/welcome/index.html",
  "/login/login.html",
  "/signup/signup.html",
  "/homepage/homepage.html",
  "/style.css",
  "/manifest.json"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(urlsToCache))
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((res) => res || fetch(event.request))
  );
})
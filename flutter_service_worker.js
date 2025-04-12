'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "d85b51511206a3a760a5a738122fb697",
"assets/assets/data/2021%2520Results.jpg": "b6342f61d3d154867371e042e31b6181",
"assets/assets/data/2022%2520Results.png": "14737ae5219c5b50a43ea84ec7e57354",
"assets/assets/data/api_keys.json": "20571efd65699b90408162894bcff6df",
"assets/assets/data/last_update.json": "c700fe846255c94dda00fffb70959f9b",
"assets/assets/data/leadboard_in_progress_after_cut.json": "3e9c24d0ca85127d33d7c8ac56f671a6",
"assets/assets/data/leaderboard_in_progress_before_cut.json": "86bda9edb9756a835c21e190d6acfaca",
"assets/assets/data/NOTES%2520ABOUT%2520CONVERSIONS.txt": "6282a7327eaf815cafb4e642978cd3e8",
"assets/assets/data/players.json": "a1095e720d3b19d46086decb19345e9d",
"assets/assets/data/responseHeader.txt": "0730bdee90c0de17411d1c81d1a2eebc",
"assets/assets/data/schedule.json": "8da5c1150915a7f2553cfe7ccdeef2d7",
"assets/assets/data/teams-mini.json": "933d11aff12df4f8f828de0342a259c1",
"assets/assets/data/teams.json": "a35a512ffc77227bf5e054de829659df",
"assets/assets/data/tee_times.json": "f84a2f77dcb30107fc51cd7749c9b620",
"assets/assets/data/tournament_summary.json": "236e42b4877705ea1d0f44a299e38bb8",
"assets/assets/images/masters_logo_only.gif": "9d2e2b657bb9c99cae461542680c3609",
"assets/assets/images/masters_logo_transparent.jpg": "5cf2be629cfdd09cecdfdcab12a268e8",
"assets/assets/images/masters_logo_transparent.png": "37437ee13a49a5d0291f62d4ba844041",
"assets/assets/images/masters_with_wordmark.gif": "ad4bb2ecc21918329be116ae9ad8b016",
"assets/data/2021%2520Results.jpg": "b6342f61d3d154867371e042e31b6181",
"assets/data/2022%2520Results.png": "14737ae5219c5b50a43ea84ec7e57354",
"assets/data/api_keys.json": "20571efd65699b90408162894bcff6df",
"assets/data/last_update.json": "c700fe846255c94dda00fffb70959f9b",
"assets/data/leadboard_in_progress_after_cut.json": "3e9c24d0ca85127d33d7c8ac56f671a6",
"assets/data/leaderboard.json": "0a8275f9e086a9c07165fe1ee3cb9e93",
"assets/data/leaderboard_in_progress_before_cut.json": "86bda9edb9756a835c21e190d6acfaca",
"assets/data/NOTES%2520ABOUT%2520CONVERSIONS.txt": "6282a7327eaf815cafb4e642978cd3e8",
"assets/data/players.json": "a1095e720d3b19d46086decb19345e9d",
"assets/data/responseHeader.txt": "0730bdee90c0de17411d1c81d1a2eebc",
"assets/data/schedule.json": "8da5c1150915a7f2553cfe7ccdeef2d7",
"assets/data/teams-mini.json": "933d11aff12df4f8f828de0342a259c1",
"assets/data/teams.json": "a35a512ffc77227bf5e054de829659df",
"assets/data/tee_times.json": "d84a0c84d2ad750664e56e7c9de64377",
"assets/data/tournament_summary.json": "236e42b4877705ea1d0f44a299e38bb8",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/images/masters_logo_only.gif": "9d2e2b657bb9c99cae461542680c3609",
"assets/images/masters_logo_transparent.jpg": "5cf2be629cfdd09cecdfdcab12a268e8",
"assets/images/masters_logo_transparent.png": "37437ee13a49a5d0291f62d4ba844041",
"assets/images/masters_with_wordmark.gif": "ad4bb2ecc21918329be116ae9ad8b016",
"assets/NOTICES": "c8162c784595df0749d6848713ed2e5b",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/shaders/ink_sparkle.frag": "d0b36090b07a1584a39b55248ecd544d",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "d8a3b47978ebe4a25ca7872e6f8d28e5",
"/": "d8a3b47978ebe4a25ca7872e6f8d28e5",
"main.dart.js": "c64e9101180df49688d8badad299cf82",
"manifest.json": "50ba9bc564034218a60724dc1757b8d1",
"version.json": "ebfbd44a2e7df8efa175b9303dfa4843"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}

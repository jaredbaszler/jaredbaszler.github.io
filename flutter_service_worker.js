'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "d0b989c28e7d4ec0410e6ebc1485141e",
"assets/assets/data/2021%2520Results.jpg": "b6342f61d3d154867371e042e31b6181",
"assets/assets/data/api_keys.json": "20571efd65699b90408162894bcff6df",
"assets/assets/data/last_update.json": "07a9da762d7359a810b7ac63df1aa162",
"assets/assets/data/leadboard_in_progress_after_cut.json": "3e9c24d0ca85127d33d7c8ac56f671a6",
"assets/assets/data/leaderboard_in_progress_before_cut.json": "86bda9edb9756a835c21e190d6acfaca",
"assets/assets/data/NOTES%2520ABOUT%2520CONVERSIONS.txt": "6282a7327eaf815cafb4e642978cd3e8",
"assets/assets/data/players.json": "9807431ab1db1a2da770896fb9be7dab",
"assets/assets/data/responseHeader.txt": "0730bdee90c0de17411d1c81d1a2eebc",
"assets/assets/data/schedule.json": "fddcdc8d270b91f5185e4567fac4bc1d",
"assets/assets/data/teams-mini.json": "933d11aff12df4f8f828de0342a259c1",
"assets/assets/data/teams.json": "385a340d11eb1ecaceb0da179baf1ae2",
"assets/assets/data/tee_times.json": "96dd27c2103bc3d1d2611e2e44e9a52d",
"assets/assets/data/tournament_summary.json": "236e42b4877705ea1d0f44a299e38bb8",
"assets/assets/images/masters_logo_only.gif": "9d2e2b657bb9c99cae461542680c3609",
"assets/assets/images/masters_logo_transparent.jpg": "5cf2be629cfdd09cecdfdcab12a268e8",
"assets/assets/images/masters_logo_transparent.png": "37437ee13a49a5d0291f62d4ba844041",
"assets/assets/images/masters_with_wordmark.gif": "ad4bb2ecc21918329be116ae9ad8b016",
"assets/data/api_keys.json": "cb51aa5e2b2e588c545375991f2c15f4",
"assets/data/last_update.json": "ad3ac11e056247b634d6667a563d9551",
"assets/data/leadboard_in_progress_after_cut.json": "3e9c24d0ca85127d33d7c8ac56f671a6",
"assets/data/leaderboard.json": "0a8275f9e086a9c07165fe1ee3cb9e93",
"assets/data/leaderboard_in_progress_before_cut.json": "86bda9edb9756a835c21e190d6acfaca",
"assets/data/NOTES%2520ABOUT%2520CONVERSIONS.txt": "6282a7327eaf815cafb4e642978cd3e8",
"assets/data/players.json": "557ee5baf29a6e4bbf39e11dda480432",
"assets/data/responseHeader.txt": "0730bdee90c0de17411d1c81d1a2eebc",
"assets/data/schedule.json": "2dfde4f3292452b5fc1fff5fd7613d13",
"assets/data/teams-mini.json": "933d11aff12df4f8f828de0342a259c1",
"assets/data/teams.json": "69fee517433d6c5158bccb4685a2f71d",
"assets/data/tee_times.json": "bb61f08835453812cd6db8beab88fe9c",
"assets/data/tournament_summary.json": "236e42b4877705ea1d0f44a299e38bb8",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "7e7a6cccddf6d7b20012a548461d5d81",
"assets/images/masters_logo_only.gif": "9d2e2b657bb9c99cae461542680c3609",
"assets/images/masters_logo_transparent.jpg": "5cf2be629cfdd09cecdfdcab12a268e8",
"assets/images/masters_logo_transparent.png": "37437ee13a49a5d0291f62d4ba844041",
"assets/images/masters_with_wordmark.gif": "ad4bb2ecc21918329be116ae9ad8b016",
"assets/NOTICES": "80569bc1fd8fc0de69071c0c85f7b75c",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "b14fcf3ee94e3ace300b192e9e7c8c5d",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "4821caa5ca81a0c19d95acb9a6743542",
"/": "4821caa5ca81a0c19d95acb9a6743542",
"main.dart.js": "263367ae6d090b143f08e4c6ed2b542d",
"manifest.json": "50ba9bc564034218a60724dc1757b8d1",
"version.json": "83bc0a2f3569a0ced11ac7216628e639"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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

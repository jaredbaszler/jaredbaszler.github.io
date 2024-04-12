'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "e860c2260470fa8a7d62d6ab96fe866a",
"assets/assets/data/2021%2520Results.jpg": "b6342f61d3d154867371e042e31b6181",
"assets/assets/data/2022%2520Results.png": "14737ae5219c5b50a43ea84ec7e57354",
"assets/assets/data/api_keys.json": "20571efd65699b90408162894bcff6df",
"assets/assets/data/last_update.json": "44cad2c9a2c43f7fdcd24ad9eeff18de",
"assets/assets/data/leadboard_in_progress_after_cut.json": "3e9c24d0ca85127d33d7c8ac56f671a6",
"assets/assets/data/leaderboard_in_progress_before_cut.json": "86bda9edb9756a835c21e190d6acfaca",
"assets/assets/data/NOTES%2520ABOUT%2520CONVERSIONS.txt": "6282a7327eaf815cafb4e642978cd3e8",
"assets/assets/data/players.json": "79a40a3e07009d98dee8b46a97a15511",
"assets/assets/data/responseHeader.txt": "0730bdee90c0de17411d1c81d1a2eebc",
"assets/assets/data/schedule.json": "a122ff2b570e8bb40d74fa8ee83cddba",
"assets/assets/data/teams-mini.json": "933d11aff12df4f8f828de0342a259c1",
"assets/assets/data/teams.json": "b142d18c665e4dc7a62195eeece20e59",
"assets/assets/data/tee_times.json": "9bb1766f1004ed518f22654b5030b2e7",
"assets/assets/data/tournament_summary.json": "236e42b4877705ea1d0f44a299e38bb8",
"assets/assets/images/masters_logo_only.gif": "9d2e2b657bb9c99cae461542680c3609",
"assets/assets/images/masters_logo_transparent.jpg": "5cf2be629cfdd09cecdfdcab12a268e8",
"assets/assets/images/masters_logo_transparent.png": "37437ee13a49a5d0291f62d4ba844041",
"assets/assets/images/masters_with_wordmark.gif": "ad4bb2ecc21918329be116ae9ad8b016",
"assets/data/2021%2520Results.jpg": "b6342f61d3d154867371e042e31b6181",
"assets/data/2022%2520Results.png": "14737ae5219c5b50a43ea84ec7e57354",
"assets/data/api_keys.json": "20571efd65699b90408162894bcff6df",
"assets/data/last_update.json": "07a9da762d7359a810b7ac63df1aa162",
"assets/data/leadboard_in_progress_after_cut.json": "3e9c24d0ca85127d33d7c8ac56f671a6",
"assets/data/leaderboard_in_progress_before_cut.json": "86bda9edb9756a835c21e190d6acfaca",
"assets/data/NOTES%2520ABOUT%2520CONVERSIONS.txt": "6282a7327eaf815cafb4e642978cd3e8",
"assets/data/players.json": "8b68dd365fec089dc39ce4bbb4770fb0",
"assets/data/responseHeader.txt": "0730bdee90c0de17411d1c81d1a2eebc",
"assets/data/schedule.json": "a122ff2b570e8bb40d74fa8ee83cddba",
"assets/data/teams-mini.json": "933d11aff12df4f8f828de0342a259c1",
"assets/data/teams.json": "9eb5f9878e216168035a79dd1790f3fe",
"assets/data/tee_times.json": "0fbcc9a718c3968f18787a2b6c21d96b",
"assets/data/tournament_summary.json": "236e42b4877705ea1d0f44a299e38bb8",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/images/masters_logo_only.gif": "9d2e2b657bb9c99cae461542680c3609",
"assets/images/masters_logo_transparent.jpg": "5cf2be629cfdd09cecdfdcab12a268e8",
"assets/images/masters_logo_transparent.png": "37437ee13a49a5d0291f62d4ba844041",
"assets/images/masters_with_wordmark.gif": "ad4bb2ecc21918329be116ae9ad8b016",
"assets/NOTICES": "25a5c485c15542e702e5438dcdf9d821",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "a85fcf6324d3c4d3ae3be1ae4931e9c5",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "d7b73da702e90fc6ad5bb982c61ca5eb",
"/": "d7b73da702e90fc6ad5bb982c61ca5eb",
"main.dart.js": "994a282c4e342c98842ff89471d661a9",
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

'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "b7326ca0023c1c921f45b3f965e87eeb",
"assets/AssetManifest.bin.json": "490092cbdf2efcbc4fdc6d9242a09ee0",
"assets/AssetManifest.json": "a89618d18d517fab926b6922c7363a0a",
"assets/assets/icons/ArrowDown.png": "b8ac6dad9d6f50b3b606eace2dd1b833",
"assets/assets/icons/ArrowLeft.png": "bdd909527d3c0dc76378d0f85aa3e268",
"assets/assets/icons/ArrowRight.png": "c21953104e3189fbdc6eaf5f64a4b0a4",
"assets/assets/icons/ArrowUp.png": "e175f572f9b1c44dad8c51dcb5a1abbe",
"assets/assets/icons/BookOpen.png": "6805bc8b1305598e2da2f86e41f5246e",
"assets/assets/icons/Calendar.png": "92d80ca893ed4ee664495083eb4168f2",
"assets/assets/icons/Check-badge.png": "1c316dc1460252dec87b95b4eae1675a",
"assets/assets/icons/Check.png": "d3440954e09871b2b6ca757142eedaef",
"assets/assets/icons/ChevronDown.png": "955e2081d419d8e24f86fdc859f5cc18",
"assets/assets/icons/ChevronLeft.png": "52c0c85cd49e5cdeac4ebd65b8170f9e",
"assets/assets/icons/ChevronRight.png": "7b41dd9c1b64dce04eb2dcfdb08366fd",
"assets/assets/icons/ChevronUp.png": "8808768e2195e20b82b6b5e38fe917ba",
"assets/assets/icons/ClipboardList.png": "1751859dd5378543f73e390ca626b5b0",
"assets/assets/icons/Close.png": "c8fb6281317eaf38e37723995af13bf0",
"assets/assets/icons/Context%2520Menu.png": "772b88dcc348205e770af5e55712ac02",
"assets/assets/icons/Document.png": "7cf774293bcbc7890001e2aaa5eae976",
"assets/assets/icons/Download.png": "75ceb27bb20f391f1458dbfdfb1064f9",
"assets/assets/icons/External%2520link.png": "2b4718fd234368156701f4d39f726f3b",
"assets/assets/icons/eye-off.png": "d4048b724a14d2dac3b7f56d028bd674",
"assets/assets/icons/eye.png": "b564d3b3e7ce8e374d219638d8a13c3a",
"assets/assets/icons/Filters.png": "1fd040107244b259126898bb7ad0fe9a",
"assets/assets/icons/heatPump.png": "0dddc70796df4478e22932464856fbe4",
"assets/assets/icons/Location.png": "122842dc625884ddde92d60c39d09e25",
"assets/assets/icons/Menu.png": "68c573fa09a00c1ab3e929abc943595f",
"assets/assets/icons/Phone.png": "a65ce3ea4d433099baa47bf780b8e851",
"assets/assets/icons/photovoltaicSystem.png": "485ffa3c15d33cc554e1ef3758cca9c3",
"assets/assets/icons/Quote.png": "a23bdf4d6e50d2867ae3eebc7000f7d3",
"assets/assets/icons/Search.png": "1af9e642ab4aa595e76d2f6bbdcd096f",
"assets/assets/icons/sidebar/Contact.png": "781036bca7ddd30bb032bb8fa06bf0ba",
"assets/assets/icons/sidebar/Dashboard.png": "da909eb31bbc42313ab0cadc15728ed7",
"assets/assets/icons/sidebar/Personal_Data.png": "f3a9b3ed48d24d9aa94eb514b0efd9db",
"assets/assets/icons/sidebar/Projects.png": "a52c09f4a25ea4c49c1eeac2b9bd1444",
"assets/assets/icons/sidebar/Quotes_Documents.png": "4118a5e4d548020f87fd6454aafef011",
"assets/assets/icons/sidebar/Referral.png": "fe017ad576c99828578ae697c4862fad",
"assets/assets/icons/Sorting.png": "0ea36cd9d8ed8a36f0607f2a630ee07f",
"assets/assets/icons/Status_Done.png": "2ca869fb8a4e52e52851e5d8e084edf2",
"assets/assets/icons/Status_Fill.png": "a01f3a016820f88ad64bcddc0705cd13",
"assets/assets/icons/Status_Save.png": "fa3089088e2e90af43cb717c9e6644c0",
"assets/assets/icons/Status_Sign.png": "8f2894521348a5f77d590f1a7ba7bf26",
"assets/assets/icons/Upload.png": "cc66ae5a3b2f42425456eae1e845072c",
"assets/assets/icons/View.png": "628591d36f13633cfad492111a456785",
"assets/assets/images/login_app.png": "ee395d91f0ee1d68c64fd91f372b8ca5",
"assets/assets/images/login_welcome.png": "60ea343dde42406ec391acc42363086d",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "863dec3c9ede72c9c3a322965fbadb62",
"assets/NOTICES": "6e730be891ae819f5c008e8e79237d1f",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "140ccb7d34d0a55065fbd422b843add6",
"canvaskit/canvaskit.js.symbols": "58832fbed59e00d2190aa295c4d70360",
"canvaskit/canvaskit.wasm": "07b9f5853202304d3b0749d9306573cc",
"canvaskit/chromium/canvaskit.js": "5e27aae346eee469027c80af0751d53d",
"canvaskit/chromium/canvaskit.js.symbols": "193deaca1a1424049326d4a91ad1d88d",
"canvaskit/chromium/canvaskit.wasm": "24c77e750a7fa6d474198905249ff506",
"canvaskit/skwasm.js": "1ef3ea3a0fec4569e5d531da25f34095",
"canvaskit/skwasm.js.symbols": "0088242d10d7e7d6d2649d1fe1bda7c1",
"canvaskit/skwasm.wasm": "264db41426307cfc7fa44b95a7772109",
"canvaskit/skwasm_heavy.js": "413f5b2b2d9345f37de148e2544f584f",
"canvaskit/skwasm_heavy.js.symbols": "3c01ec03b5de6d62c34e17014d1decd3",
"canvaskit/skwasm_heavy.wasm": "8034ad26ba2485dab2fd49bdd786837b",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "888483df48293866f9f41d3d9274a779",
"flutter_bootstrap.js": "a2250c6b20c3ee2983fd9e374142cf1d",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "c5d8c2da4903a6f862cbf9d7e305a47c",
"/": "c5d8c2da4903a6f862cbf9d7e305a47c",
"main.dart.js": "bb4691bdd62b5ad0c2ae072d87d071c2",
"manifest.json": "22b444b8303469727f6ecd68c3db631f",
"version.json": "a2cf51f400f86cbfcfc20103f7d64f1b"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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

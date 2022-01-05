self.addEventListener("install", e => {
	e.waitUntil(
		caches.open("static").then(cache => {

			return cache.addAll([
					"/",
					"index.html", 
					"assets/css/style.css",
					"assets/images/zaki.jpg",
					"assets/images/icon-192.png", 
					"assets/js/main.js" 
										
				]);
		}).catch(error =>{
			console.log(error);
		})
	);
});

self.addEventListener("fetch", e => {
	e.respondWith(

		caches.match(e.request).then(response =>{
			return response || fetch(e.request);
		})
	);
});

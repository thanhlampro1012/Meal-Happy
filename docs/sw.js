// Cache only public static assets; never intercept Firebase/OAuth domains.
const CACHE='happy-meal-shell-v1';
const SHELL=['./','./index.html','./catalog.json','./site.webmanifest','./icon.svg','./icon-maskable.svg','./firebase-sync.js','./icons/icon-192.png','./icons/icon-512.png','./icons/apple-touch-icon.png'];
self.addEventListener('install',event=>{event.waitUntil(caches.open(CACHE).then(c=>c.addAll(SHELL)).then(()=>self.skipWaiting()));});
self.addEventListener('activate',event=>{event.waitUntil(Promise.all([
 caches.keys().then(names=>Promise.all(names.filter(n=>n!==CACHE&&n.startsWith('happy-meal-')).map(n=>caches.delete(n)))),
 self.clients.claim()
]));});
self.addEventListener('fetch',event=>{
 const req=event.request, url=new URL(req.url);
 if(req.method!=='GET'||url.origin!==self.location.origin)return;
 if(url.pathname.endsWith('/firebase-config.json')){event.respondWith(fetch(req));return;}
 if(req.mode==='navigate'){
   event.respondWith(fetch(req).then(r=>{if(r.ok){const copy=r.clone();void caches.open(CACHE).then(c=>c.put('./index.html',copy));}return r;}).catch(()=>caches.match('./index.html')));return;
 }
 event.respondWith(fetch(req).then(r=>{if(r.ok){const copy=r.clone();void caches.open(CACHE).then(c=>c.put(req,copy));}return r;}).catch(()=>caches.match(req)));
});

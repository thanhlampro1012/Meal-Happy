// Only cache this app's public files, including its public Firebase web identifiers.
const CACHE='happy-meal-shell-v2';
const FILES=['./','./index.html','./catalog.json','./site.webmanifest','./icon.svg','./icon-maskable.svg',
 './firebase-config.json','./firebase-sync.js','./icons/icon-192.png','./icons/icon-512.png','./icons/apple-touch-icon.png'];
const allowed=new Set(FILES.map(path=>new URL(path,self.registration.scope).href));
const venuePrefix=new URL('./venues/',self.registration.scope).href;

self.addEventListener('install',event=>{
 event.waitUntil(caches.open(CACHE).then(cache=>cache.addAll(FILES)).then(()=>self.skipWaiting()));
});
self.addEventListener('activate',event=>{
 event.waitUntil(Promise.all([caches.delete('happy-meal-shell-v1'),self.clients.claim()]));
});
async function fromNetworkOrCache(request,key){
 const cache=await caches.open(CACHE);
 try{
  const response=await fetch(request);
  if(response.ok){
   try{await cache.put(key,response.clone());}catch{/* The network response can still be used with a full cache. */}
  }else if(response.status>=500){
   return await cache.match(key)||response;
  }
  return response;
 }catch{
  return await cache.match(key)||Response.error();
 }
}
self.addEventListener('fetch',event=>{
 const request=event.request;
 if(request.method!=='GET')return;
 const url=new URL(request.url);
 url.search='';url.hash='';
 if(!allowed.has(url.href)&&!url.href.startsWith(venuePrefix))return;
 const key=request.mode==='navigate'?new URL('./index.html',self.registration.scope).href:url.href;
 event.respondWith(fromNetworkOrCache(request,key));
});

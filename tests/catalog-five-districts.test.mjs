import assert from 'node:assert/strict';
import fs from 'node:fs';
import {test} from 'node:test';
const cat=JSON.parse(fs.readFileSync('docs/catalog.json','utf8'));
const allowed=['Quận 1','Quận 3','Quận 5','Gò Vấp','Tân Bình'];
const kinds=['food','dessert','coffee','drinks'];
const html=fs.readFileSync('docs/index.html','utf8');
test('all curated venues are inside exactly five user-selected districts',()=>{
 assert.equal(cat.places.length,184);
 assert.deepEqual([...new Set(cat.places.map(p=>p.area))].sort(),allowed.sort());
 for(const place of cat.places){
   assert.ok(allowed.includes(place.area),place.name);
   assert.ok(kinds.includes(place.kind),place.name);
   assert.ok(place.sources?.length>0,place.name);
   assert.ok(place.budgetMin>=0&&place.budgetMax>=place.budgetMin,place.name);
 }
});
test('every category has student-budget suggestions within all five districts',()=>{
 for(const area of allowed)for(const kind of kinds){
  const list=cat.places.filter(p=>p.area===area&&p.kind===kind);
  assert.ok(list.length>0,area+' '+kind);
  assert.ok(list.some(p=>p.budgetMax<=100000),area+' '+kind);
 }
});
test('desserts include ice cream, flan, che, fruits and mango sticky rice',()=>{
 const ds=cat.places.filter(p=>p.kind==='dessert');
 for(const tag of ['kem','banh-flan','che','trai-cay-to','xoi-xoai'])
  assert.ok(ds.some(p=>p.cuisineTags?.includes(tag)),tag);
});
test('drinks and coffee have independent filters in static web',()=>{
 assert.match(html,/const KIND_CUISINES=/);
 assert.match(html,/filters\.cuisine="";pageSize=24/);
 assert.match(html,/filters\.kind==="dessert"\?"Hôm nay muốn ăn món ngọt gì\?/);
 assert.match(html,/filters\.kind==="drinks"\?"Hôm nay muốn uống gì\?/);
 assert.match(html,/const candidatePlaces=all\(\)\.filter/);
 const js=html.match(/<script>([\s\S]*?)<\/script>/)?.[1];
 assert.ok(js);
 new Function(js);
});

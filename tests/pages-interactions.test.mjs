import {test} from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import vm from 'node:vm';

const html=readFileSync('docs/index.html','utf8');
const script=html.match(/<script>([\s\S]*?)<\/script>/)?.[1];
assert.ok(script);
const end=script.lastIndexOf('fetch("./catalog.json").then(');
assert.ok(end>0);
const code=script.slice(0,end),places=JSON.parse(readFileSync('docs/catalog.json','utf8')).places;

function app(){
 const dom=new Map(),events=new Map(),timers=[],memory=new Map();
 let lastBlob=null,lastFilename='',reduced=false;
 const element=key=>{
  if(!dom.has(key))dom.set(key,{innerHTML:'',textContent:'',style:{},value:'',focus(){},isConnected:true,addEventListener(){},getClientRects(){return [1]},querySelectorAll(){return []},classList:{toggle(){}},click(){}});
  return dom.get(key);
 };
 const document={querySelector:element,activeElement:element('body'),documentElement:{classList:{toggle(){}},style:{}},
  addEventListener:(kind,handler)=>{if(!events.has(kind))events.set(kind,[]);events.get(kind).push(handler)},
  createElement:()=>({click(){},set href(x){this.hrefValue=x},set download(x){lastFilename=x}})};
 const ctx=vm.createContext({console,document,window:{addEventListener(){}},navigator:{onLine:true},Date,Blob,
  localStorage:{getItem:k=>memory.get(k)||null,setItem:(k,v)=>memory.set(k,String(v))},
  crypto:{getRandomValues:a=>{a[0]=1;return a},randomUUID:()=>String(Date.now())},
  URL:{createObjectURL:b=>{lastBlob=b;return 'blob:test'},revokeObjectURL(){}},
  setTimeout:(fn,ms)=>{timers.push({fn,ms});return timers.length},clearTimeout(){},
  matchMedia:()=>({matches:reduced,addEventListener(){}}),confirm:()=>true,__PLACES:places});
 vm.runInContext(code,ctx);
 vm.runInContext('catalog=__PLACES;',ctx);
 const run=x=>vm.runInContext(x,ctx);
 return {ctx,run,element,timers,places,events,blob:()=>lastBlob,filename:()=>lastFilename,
  reduced:x=>{reduced=x},
  click:x=>{const btn={id:'',dataset:{},disabled:false,closest(){return this},...x};for(const fn of events.get('click')||[])fn({target:btn})}
 };
}

test('five-district discovery has distinct dessert and drink cuisine filters',()=>{
 const a=app();
 a.run('data.customPlaces=[{id:"outside",name:"Outside",area:"Quận 7",kind:"food",dishes:[],tags:[],cuisineTags:["com"],budgetMin:1000,budgetMax:2000}]');
 assert.ok(!a.run('explore(false)').includes('Outside'));
 a.run('filters.kind="dessert"');const sweets=a.run('explore(false)');
 assert.ok(sweets.includes('data-cuisine="banh-flan"'));
 assert.ok(!sweets.includes('data-cuisine="com-tam"'));
 a.run('filters.kind="drinks"');const drinks=a.run('explore(false)');
 assert.ok(drinks.includes('data-cuisine="tra-sua"'));
 assert.ok(!drinks.includes('data-cuisine="banh-flan"'));
});

test('comparison shows selected venues and linked plan action',()=>{
 const a=app();a.run('compareIds.add(catalog[0].id);compareIds.add(catalog[1].id)');
 assert.ok(a.run('compareBar()').includes('2/3 quán'));
 a.run('comparison()');
 const m=a.element('#modalHost').innerHTML;
 assert.ok(m.includes(places[0].name));
 assert.ok(m.includes(places[1].name));
 assert.ok(m.includes('Tạo lịch hẹn'));
});

test('place menus pre-fill the favorite dish form',()=>{
 const a=app();
 a.run('favoriteForm(null,{title:"Bánh flan",placeId:catalog[0].id,category:"Tráng miệng"})');
 const m=a.element('#modalHost').innerHTML;
 assert.ok(m.includes('value="Bánh flan"'));
 assert.ok(m.includes('selected'));
});

test('wheel remains safe on tab switch before spin completes',()=>{
 const a=app();a.run('data.favorites=[{id:"a",title:"Phở",enabled:true},{id:"b",title:"Chè",enabled:true}];tab="wheel"');
 assert.ok(a.run('wheel()').includes('conic-gradient('));
 assert.equal(a.run('randomIndex(2)'),1);
 a.reduced(false);a.click({id:'spin'});
 a.run('tab="favorites"');
 const finish=a.timers.find(t=>t.ms===1800);
 assert.ok(finish);finish.fn();
 assert.equal(a.run('isSpinning'),false);
 assert.equal(a.run('data.lastWinner'),'b');
});

test('photo thumbnail and backup include locally provided image',async()=>{
 const a=app();
 a.run('personalPhotos[catalog[0].id]="data:image/jpeg;base64,AAAA"');
 assert.ok(a.run('placeCard(catalog[0])').includes('Ảnh bạn thêm'));
 a.run('exportBackup()');
 const backup=JSON.parse(await a.blob().text());
 assert.equal(backup.images[places[0].id],'data:image/jpeg;base64,AAAA');
 assert.match(a.filename(),/^happy-meal-backup-/);
});

test('older backups without photos continue to load',async()=>{
 const a=app();
 const book={customPlaces:[],saved:['saved-1'],favorites:[],plans:[],notes:{},theme:'dark'};
 const backup=JSON.stringify({schema:'meal-happy-pages-v1',data:book});
 a.ctx.__FILE={size:backup.length,text:()=>Promise.resolve(backup)};
 a.run('importBackup(__FILE)');
 await new Promise(resolve=>setImmediate(resolve));
 await new Promise(resolve=>setImmediate(resolve));
 assert.equal(a.run('data.saved[0]'),'saved-1');
});

test('unsafe imported venue links cannot be used as script URLs',()=>{
 const a=app();
 a.run('data.customPlaces=[{id:"unsafe",name:"Tự thêm",address:"1 Đường Test",area:"Quận 1",kind:"food",dishes:[],tags:[],cuisineTags:["com"],mapUrl:"javascript:alert(1)",sources:[{url:"javascript:alert(2)",label:"bad"}],budgetMin:1,budgetMax:2}]');
 const safe=a.run('mapUrl(data.customPlaces[0])');
 assert.ok(safe.startsWith('https://www.google.com/maps/search/'));
 assert.ok(!a.run('placeCard(data.customPlaces[0])').includes('href="javascript:'));
 a.run('detail("unsafe")');
 assert.ok(!a.element('#modalHost').innerHTML.includes('href="javascript:'));
});

test('backup refuses malformed nested data before it can replace the notebook',async()=>{
 const a=app();
 a.run("data.saved=['keep-me']");
 const invalid={...a.run('empty()'),customPlaces:[{id:'p',name:'Quán',address:'1',dishes:[],cuisineTags:[],sources:'invalid'}]};
 const input=JSON.stringify({schema:'meal-happy-pages-v1',data:invalid});
 a.ctx.file={text:async()=>input};
 await a.run('importBackup(file)');
 assert.equal(a.run('data.saved[0]'),'keep-me');
 assert.match(a.element('#toastHost').innerHTML,/không phải bản sao/);
});

test('failed local write preserves the notebook and stops remote acknowledgement',()=>{
 const a=app();a.run("data.saved=['original']");
 a.ctx.localStorage.setItem=()=>{throw Error('quota')};
 assert.equal(a.run('persist()'),false);
 assert.equal(a.element('#storageWarning').hidden,false);
 assert.throws(()=>a.run("window.HappyMealHost.applyRemote({...empty(),saved:['other']})"),/bộ nhớ/);
 assert.equal(a.run('data.saved[0]'),'original');
});

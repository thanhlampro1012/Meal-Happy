import assert from 'node:assert/strict';
import { test } from 'node:test';
import vm from 'node:vm';
import { readFileSync } from 'node:fs';

const source=readFileSync('docs/firebase-sync.js','utf8');
const cutoff=source.lastIndexOf('(async()=>{\n  let c=null;');
assert.ok(cutoff>0,'Firebase boot marker not found');
const body=source.slice(0,cutoff);
const empty=()=>({customPlaces:[],saved:[],favorites:[],plans:[],notes:{},theme:'system'});
const clone=x=>JSON.parse(JSON.stringify(x));

function fixture(initial=empty(),cloud=null){
 let device=clone(initial),agree=true,signouts=0,timerSeq=0;
 const key='users/uidA/appData/notebook',rows=new Map(),timers=new Map(),events=new Map(),listeners=new Map(),store=new Map();
 if(cloud)rows.set(key,clone(cloud));
 const storage={getItem:k=>store.get(k)||null,setItem:(k,v)=>store.set(k,String(v))};
 const snapshot=k=>{const x=rows.get(k);return {exists:()=>!!x,data:()=>clone(x),metadata:{hasPendingWrites:false,fromCache:false}}};
 const notify=k=>{for(const cb of listeners.get(k)||[])cb(snapshot(k));};
 const modules={fb:{initializeApp:()=>({})},fa:{
   getAuth:()=>({}),browserLocalPersistence:{},setPersistence:async()=>{},onAuthStateChanged:()=>()=>{},
   signOut:async()=>{signouts++;}
 },fs:{
   getFirestore:()=>({}),doc:(_db,...parts)=>parts.join('/'),
   getDocFromServer:async k=>{if(!context.navigator.onLine)throw Object.assign(new Error('offline'),{code:'unavailable'});return snapshot(k);},
   onSnapshot:(k,cb)=>{if(!listeners.has(k))listeners.set(k,new Set());listeners.get(k).add(cb);return ()=>listeners.get(k).delete(cb);},
   runTransaction:async(_db,fn)=>{
     const writes=[],tx={get:async k=>snapshot(k),set:(k,v)=>writes.push([k,clone(v)])};
     const r=await fn(tx);
     for(const [k,v] of writes){rows.set(k,v);notify(k);}
     return r;
   },serverTimestamp:()=>0
 }};
 const context=vm.createContext({console,testModules:modules,localStorage:storage,navigator:{onLine:true},
   window:{addEventListener:(evt,cb)=>events.set(evt,cb),HappyMealHost:{
     get:()=>clone(device),applyRemote:x=>{device=clone(x);},empty,refresh:()=>{}
   }},document:{visibilityState:'visible',addEventListener:(evt,cb)=>events.set('doc:'+evt,cb)},
   setTimeout:fn=>{const id=++timerSeq;timers.set(id,fn);return id;},clearTimeout:id=>timers.delete(id),
   confirm:()=>agree
 });
 vm.runInContext(body,context);
 vm.runInContext('modules=testModules; db={}; auth={};',context);
 const settle=async()=>{await new Promise(r=>setImmediate(r));await new Promise(r=>setImmediate(r));};
 return {context,rows,key,notify,store,settle,
   login:()=>vm.runInContext("startAccount({uid:'uidA',email:'student@gmail.com'})",context),
   state:()=>context.window.HappyMealCloud.view(),get:()=>clone(device),
   change:fn=>{fn(device);context.window.HappyMealCloud.changed();},
   flush:async()=>{const pending=[...timers.values()];timers.clear();for(const f of pending)f();await settle();},
   online:v=>{context.navigator.onLine=v;},trigger:evt=>events.get(evt)?.(),
   setAgree:v=>{agree=v;},signOutCount:()=>signouts
 };
}

test('first login uploads existing local favorites rather than empty data',async()=>{
 const local=empty();local.favorites.push({id:'pho',title:'Phở',enabled:true});
 const f=fixture(local);await f.login();assert.equal(f.state().phase,'pending');
 await f.flush();assert.equal(f.rows.get(f.key).revision,1);
 assert.equal(f.rows.get(f.key).notebook.favorites[0].title,'Phở');
 assert.equal(f.state().phase,'synced');
});

test('second device downloads the existing Google notebook',async()=>{
 const book=empty();book.plans.push({id:'plan',title:'Ăn tối',stops:[]});
 const f=fixture(empty(),{revision:4,notebook:book});await f.login();
 assert.equal(f.get().plans[0].title,'Ăn tối');
 assert.equal(f.state().phase,'synced');
});

test('concurrent updates do not overwrite unsynced local changes',async()=>{
 const local=empty();local.saved=['a'];const f=fixture(local);
 await f.login();await f.flush();f.change(book=>book.saved.push('b'));
 const remote=empty();remote.saved=['a','c'];
 f.rows.set(f.key,{revision:2,notebook:remote});f.notify(f.key);
 assert.equal(f.state().phase,'conflict');
 assert.deepEqual(f.get().saved,['a','b']);
 const newer=empty();newer.saved=['a','c','d'];
 f.rows.set(f.key,{revision:3,notebook:newer});
 await f.context.window.HappyMealCloud.useDevice();
 assert.equal(f.state().phase,'conflict');
 assert.deepEqual(f.rows.get(f.key).notebook.saved,['a','c','d']);
 assert.deepEqual(f.get().saved,['a','b']);
});

test('offline initialization retains local data and syncs on reconnect',async()=>{
 const local=empty();local.favorites.push({id:'bun',title:'Bún bò'});
 const f=fixture(local);f.online(false);await f.login();
 assert.equal(f.state().phase,'offline');assert.equal(f.get().favorites[0].title,'Bún bò');
 f.online(true);f.trigger('online');await f.settle();await f.flush();
 assert.equal(f.rows.get(f.key).notebook.favorites[0].title,'Bún bò');
});

test('sign-out warns when changes are not yet synced',async()=>{
 const local=empty();local.saved.push('pizza');
 const f=fixture(local);await f.login();await f.flush();
 f.change(book=>book.saved.push('pho'));f.setAgree(false);
 await f.context.window.HappyMealCloud.signOut();
 assert.equal(f.signOutCount(),0);assert.equal(f.state().user,true);
});

test('removing the last saved place while offline survives a restart',async()=>{
 const book=empty();book.saved=['last'];
 const f=fixture(book,{revision:3,notebook:book});
 await f.login();
 f.change(book=>{book.saved=[];});
 f.online(false);await f.flush();
 f.online(true);await f.login();await f.flush();
 assert.deepEqual(f.rows.get(f.key).notebook.saved,[]);
 assert.equal(f.rows.get(f.key).revision,4);
});

test('server update arriving during a transaction is applied after its acknowledgement',async()=>{
 const f=fixture();
 await f.login();await f.flush();
 const transaction=f.context.testModules.fs.runTransaction;
 f.context.testModules.fs.runTransaction=async(db,write)=>{
  const revision=await transaction(db,write);
  const server=f.rows.get(f.key);
  server.revision++;server.notebook.saved.push('other-device');
  f.notify(f.key);
  return revision;
 };
 f.change(book=>book.saved.push('this-device'));await f.flush();
 assert.deepEqual(f.get().saved,['this-device','other-device']);
 assert.equal(f.state().revision,3);
});

// Happy Meal: opt-in Google sign-in + private Firestore sync.
// The publicly readable Firebase web config contains no private credential.
// Firestore access MUST be restricted with the supplied firestore.rules.
const VERSION = '13.4.0';
const CONFIG_STORE = 'happy-meal-firebase-config';
const SYNC_BASE = 'happy-meal-cloud-baseline-';
const LAST_USER = 'happy-meal-last-uid';
const sdk = {
  app: 'https://www.gstatic.com/firebasejs/' + VERSION + '/firebase-app.js',
  auth: 'https://www.gstatic.com/firebasejs/' + VERSION + '/firebase-auth.js',
  store: 'https://www.gstatic.com/firebasejs/' + VERSION + '/firebase-firestore.js'
};
let modules, app, auth, db, user = null, config = null, docRef = null;
let generation = 0, rev = 0, baseline = null, conflict = null, unlisten = null;
let connected = false, sending = false, needsWrite = false, syncTimer = null;
let phase = 'checking', message = 'Đang kiểm tra cấu hình đồng bộ…';

const host = () => window.HappyMealHost;
const clone = value => JSON.parse(JSON.stringify(value));
const stable = value => JSON.stringify(value, function(_key, val){
  if (val && !Array.isArray(val) && Object.getPrototypeOf(val) === Object.prototype) {
    return Object.fromEntries(Object.entries(val).sort(([a],[b]) => a.localeCompare(b)));
  }
  return val;
});
const same = (a,b) => stable(a) === stable(b);
function hasContent(book) {
  return !!(book && ((book.customPlaces?.length || 0) + (book.saved?.length || 0)
    + (book.favorites?.length || 0) + (book.plans?.length || 0)
    + Object.keys(book.notes || {}).length) > 0);
}
function show(status, info = '') {phase = status; message = info; host()?.refresh(); }
function readConfig(c) {
  if (!c || typeof c !== 'object') return null;
  const result = {};
  for (const key of ['apiKey','authDomain','projectId','appId']) {
    if (typeof c[key] !== 'string' || !c[key].trim() || c[key].length > 250) return null;
    result[key] = c[key].trim();
  }
  if (!/^[a-z0-9][a-z0-9-]{3,100}$/i.test(result.projectId)) return null;
  if (result.authDomain !== result.projectId + '.firebaseapp.com'
      && !/^[a-z0-9.-]+$/i.test(result.authDomain)) return null;
  return result;
}
function accountName() {return user ? (user.displayName || user.email || 'Tài khoản Google') : '';}
function view(){
  return {configured:!!config,projectId:config?.projectId||'',connected,phase,message,
    user:!!user,account:accountName(),email:user?.email||'',conflict:!!conflict,
    localChanges:!!needsWrite,revision:rev};
}
function baseKey(){return SYNC_BASE + user?.uid;}
function markSynced(book){
  baseline=clone(book);
  try {localStorage.setItem(baseKey(),JSON.stringify(baseline)); localStorage.setItem(LAST_USER,user.uid);}
  catch { /* Low storage cannot break sync for the current tab. */ }
}
function setLocal(book){
  host()?.applyRemote(clone(book)); markSynced(book);
}
function disconnect(){
  generation++; clearTimeout(syncTimer); unlisten?.(); unlisten=null;
  docRef=null; user=null; rev=0; baseline=null; conflict=null;
  connected=false; sending=false; needsWrite=false;
}
async function loadDependencies(){
  if (!modules) {
    const [fb,fa,fs] = await Promise.all([import(sdk.app),import(sdk.auth),import(sdk.store)]);
    modules={fb,fa,fs};
  }
  return modules;
}
function friendlyError(e){
  const code=String(e?.code||e?.message||'');
  if(code.includes('unauthorized-domain')) return 'Tên miền GitHub Pages chưa được thêm vào Authentication → Authorized domains trên Firebase.';
  if(code.includes('operation-not-allowed')) return 'Cần bật phương thức đăng nhập Google trong Firebase Authentication.';
  if(code.includes('permission-denied')) return 'Firestore từ chối truy cập. Hãy bật đúng quy tắc firestore.rules theo UID.';
  if(code.includes('popup-closed-by-user')||code.includes('cancelled-popup-request')) return 'Đăng nhập chưa hoàn tất.';
  if(code.includes('network')||code.includes('unavailable')) return 'Mất kết nối. Dữ liệu vẫn được giữ trên thiết bị này.';
  if(code.includes('quota-exceeded')) return 'Đã chạm giới hạn Firebase. Dữ liệu vẫn được giữ trên thiết bị.';
  return 'Lỗi đồng bộ: '+code.slice(0,180);
}
async function boot(c) {
  config=readConfig(c);
  if(!config){ show('no-config','Chưa kết nối dự án Firebase. Hiện tại dữ liệu được lưu trên máy.'); return; }
  show('connecting','Đang khởi tạo đăng nhập Google…');
  try {
    const {fb,fa,fs}=await loadDependencies();
    app=fb.initializeApp(config,'happy-meal-'+config.projectId);
    auth=fa.getAuth(app); db=fs.getFirestore(app);
    try {await fa.setPersistence(auth,fa.browserLocalPersistence);}catch { /* Browser may block durable login. */ }
    fa.onAuthStateChanged(auth,account=>{void startAccount(account);},e=>show('error',friendlyError(e)));
  } catch(e){show('error',friendlyError(e));}
}
async function startAccount(account){
  disconnect();
  if(!account){show('signed-out','Đăng nhập Google để đồng bộ trên các thiết bị.');return;}
  user=account;
  const seq=generation;
  const {fs}=modules;
  docRef=fs.doc(db,'users',user.uid,'appData','notebook');
  show('loading','Đang đối chiếu dữ liệu thiết bị với tài khoản '+accountName()+'…');
  try {
    const snap=await fs.getDoc(docRef);
    if(seq!==generation)return;
    const remote=snap.exists()?snap.data():null;
    rev=Number.isSafeInteger(remote?.revision)?remote.revision:0;
    const book=remote?.notebook && typeof remote.notebook==='object'?remote.notebook:null;
    const local=clone(host().get());
    let previous=null;
    try {previous=JSON.parse(localStorage.getItem(baseKey())||'null');}catch{}
    const previousUid=localStorage.getItem(LAST_USER);
    if(book){
      if(!hasContent(local)||same(local,book)){
        setLocal(book);
      }else if(previous && same(local,previous)){
        setLocal(book); // Another device has newer data; local matches last synced state.
      }else if(previous && same(book,previous)){
        baseline=clone(book);
        connected=true;needsWrite=true;
        listen();show('pending','Có thay đổi chưa đồng bộ trên thiết bị này.');
        schedule();return;
      }else{
        conflict={remote:clone(book),revision:rev};
        show('conflict','Thiết bị và Google đang có dữ liệu khác nhau. Chọn bản muốn giữ.');
        return;
      }
    }else if(hasContent(local) && previousUid && previousUid!==account.uid){
      conflict={remote:null,revision:0};
      show('conflict','Tài khoản Google này chưa có dữ liệu, nhưng thiết bị có dữ liệu của một tài khoản khác. Hãy chọn có tải lên hay không.');
      return;
    }else{
      // New cloud account: upload this device's notebook, even if currently empty.
      baseline=null;connected=true;needsWrite=true;
      listen();show('pending','Đang tạo bản lưu Google đầu tiên…');
      schedule();return;
    }
    connected=true;needsWrite=false;listen();
    show('synced','Đã kết nối và cập nhật dữ liệu mới nhất.');
  }catch(e){if(seq===generation)show('error',friendlyError(e));}
}
function listen(){
  unlisten?.();if(!docRef)return;
  const {fs}=modules;
  unlisten=fs.onSnapshot(docRef,snap=>{
    if(!user || !snap.exists() || snap.metadata.hasPendingWrites)return;
    const row=snap.data(),nextRev=row.revision,remote=row.notebook;
    if(!remote || !Number.isSafeInteger(nextRev) || nextRev<=rev)return;
    if(sending)return; // The transaction success path updates revision and baseline.
    const local=host().get();
    if(needsWrite || (baseline && !same(local,baseline))){
      conflict={remote:clone(remote),revision:nextRev};
      connected=false;clearTimeout(syncTimer);
      show('conflict','Có thay đổi trên thiết bị khác trong lúc máy này chưa đồng bộ.');
    }else{
      rev=nextRev;setLocal(remote);
      show('synced','Dữ liệu vừa cập nhật từ một thiết bị khác.');
    }
  },e=>show('error',friendlyError(e)));
}
function schedule(){
  if(!user||!connected||conflict)return;
  clearTimeout(syncTimer);syncTimer=setTimeout(()=>{void push();},550);
}
function changed(){
  if(!user||!connected||conflict)return;
  needsWrite=true;show('pending','Đang chờ lưu dữ liệu lên Google…');schedule();
}
async function push(force=false){
  if(sending||!connected||!docRef||!user||conflict)return;
  const local=clone(host().get());
  if(!force&&!needsWrite&&baseline&&same(local,baseline))return;
  if(!navigator.onLine){needsWrite=true;show('offline','Bạn đang ngoại tuyến. Dữ liệu vẫn được lưu trên thiết bị.');return;}
  sending=true;needsWrite=false;show('sending','Đang lưu an toàn lên Google…');
  const oldRev=rev;
  try{
    const {fs}=modules;
    const nextRev=await fs.runTransaction(db,async tx=>{
      const snap=await tx.get(docRef),current=snap.exists()?snap.data().revision:0;
      if(current!==oldRev)throw Object.assign(new Error('Dữ liệu trên Google đã đổi.'),{code:'cloud/conflict'});
      tx.set(docRef,{revision:current+1,notebook:local,updatedAt:fs.serverTimestamp()});
      return current+1;
    });
    rev=nextRev;markSynced(local);
    const changedAgain=!same(host().get(),local);
    needsWrite=changedAgain;
    show(changedAgain?'pending':'synced',changedAgain?'Có cập nhật mới đang chờ đồng bộ.':'Đã lưu lên Google an toàn.');
  }catch(e){
    needsWrite=true;
    if(e?.code==='cloud/conflict'){
      try{
        const snapshot=await modules.fs.getDoc(docRef);
        if(snapshot.exists()){
          conflict={remote:clone(snapshot.data().notebook),revision:snapshot.data().revision};
          connected=false;show('conflict','Dữ liệu đã thay đổi trên thiết bị khác. Hãy chọn bản muốn giữ.');
        }
      }catch(err){show('error',friendlyError(err));}
    }else show('error',friendlyError(e));
  }finally{sending=false;if(needsWrite&&!conflict&&phase==='pending')schedule();}
}
async function resolveConflict(choice){
  if(!user||!conflict)return;
  if(choice==='cloud'){
    if(!conflict.remote){
      // New account cloud is empty: intentionally start with an empty notebook.
      host().applyRemote(host().empty());
      rev=0;baseline=null;connected=true;needsWrite=true;conflict=null;
      show('pending','Tạo sổ mới cho tài khoản Google.');schedule();return;
    }
    rev=conflict.revision;setLocal(conflict.remote);
    conflict=null;connected=true;needsWrite=false;listen();
    show('synced','Đã dùng bản lưu trên tài khoản Google.');
    return;
  }
  if(choice==='device'){
    // Explicit, user-confirmed replacement, with transaction against latest revision.
    sending=true;show('sending','Đang tải phiên bản thiết bị lên Google…');
    const local=clone(host().get());
    try{
      const next=await modules.fs.runTransaction(db,async tx=>{
        const snap=await tx.get(docRef),old=snap.exists()?snap.data().revision:0;
        tx.set(docRef,{revision:old+1,notebook:local,updatedAt:modules.fs.serverTimestamp()});
        return old+1;
      });
      rev=next;markSynced(local);conflict=null;connected=true;needsWrite=false;
      listen();show('synced','Đã dùng dữ liệu trên thiết bị này.');
    }catch(e){show('error',friendlyError(e));}
    finally{sending=false;}
  }
}
async function googleSignIn(){
  if(!auth || !modules)return show('no-config','Hãy nhập cấu hình Firebase trước.');
  const provider=new modules.fa.GoogleAuthProvider();
  provider.setCustomParameters({prompt:'select_account'});
  try{
    await modules.fa.signInWithPopup(auth,provider);
  }catch(e){
    if(['auth/popup-blocked','auth/operation-not-supported-in-this-environment'].includes(e?.code)){
      try{await modules.fa.signInWithRedirect(auth,provider);}catch(err){show('error',friendlyError(err));}
    }else show('error',friendlyError(e));
  }
}
async function googleSignOut(){
  try{if(auth)await modules.fa.signOut(auth);}catch(e){show('error',friendlyError(e));}
}
function configure(fields){
  const c=readConfig(fields);
  if(!c){show('no-config','Thông tin Firebase chưa hợp lệ. Cần apiKey, authDomain, projectId và appId.');return false;}
  try{localStorage.setItem(CONFIG_STORE,JSON.stringify(c));}catch{}
  location.reload();return true;
}
function retry(){if(conflict)return;needsWrite=true;connected=true;show('pending','Đang thử đồng bộ lại…');schedule();}
window.addEventListener('online',()=>{if(needsWrite&&!conflict){connected=true;schedule();}});
window.HappyMealCloud={view,changed,configure,signIn:googleSignIn,signOut:googleSignOut,
  useCloud:()=>resolveConflict('cloud'),useDevice:()=>resolveConflict('device'),retry};
(async()=>{
  let c=null;
  try{c=JSON.parse(localStorage.getItem(CONFIG_STORE)||'null');}catch{}
  if(!readConfig(c))try{
    const response=await fetch('./firebase-config.json',{cache:'no-store'});
    if(response.ok)c=await response.json();
  }catch{}
  await boot(c);
})();

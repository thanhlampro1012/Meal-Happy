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
let connected = false, sending = false, needsWrite = false, syncTimer = null, deferredSnapshot = null;
let phase = 'checking', message = 'Đang kiểm tra cấu hình đồng bộ…';

const host = () => window.HappyMealHost;
const clone = value => JSON.parse(JSON.stringify(value));
const stable = value => JSON.stringify(value, function(_key, val){
  if (val && !Array.isArray(val) && Object.prototype.toString.call(val) === '[object Object]') {
    return Object.fromEntries(Object.entries(val).sort(([a],[b]) => a.localeCompare(b)));
  }
  return val;
});
const same = (a,b) => stable(a) === stable(b);
function hasContent(book) {
  if(!book)return false;
  return ['customPlaces','saved','favorites','plans'].some(key=>book[key]?.length)
    || Object.keys(book.notes || {}).length>0 || !!book.lastWinner || !!(book.theme && book.theme!=='system');
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
function sessionMatches(seq, uid){return seq===generation && user?.uid===uid;}
function markSynced(book){
  if(!user)return;
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
  connected=false; sending=false; needsWrite=false; deferredSnapshot=null;
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
  if(code.includes('popup-closed-by-user')||code.includes('cancelled-popup-request')) return 'Bạn đã đóng cửa sổ Google. Chọn đăng nhập lại khi sẵn sàng.';
  if(code.includes('network')||code.includes('unavailable')) return 'Mất kết nối. Dữ liệu vẫn được giữ trên thiết bị này.';
  if(code.includes('quota-exceeded')||code.includes('resource-exhausted')) return 'Dữ liệu hoặc lượt sử dụng vượt giới hạn Firebase. Hãy xuất sao lưu; bản cục bộ vẫn được giữ.';
  if(code.includes('invalid-api-key')||code.includes('invalid-app-credential')) return 'Cấu hình API key Firebase chưa đúng. Kiểm tra Project settings → Your apps.';
  if(code.includes('failed-precondition')) return 'Firestore chưa được khởi tạo hoặc không thể dùng giao dịch. Kiểm tra Firestore Database.';
  if(code.includes('auth/domain-not-allowlisted')) return 'Hãy thêm thanhlampro1012.github.io vào Firebase Authentication → Authorized domains.';
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
  } catch(e){show(navigator.onLine?'error':'offline',friendlyError(e));}
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
    const snap=await fs.getDocFromServer(docRef);
    if(!sessionMatches(seq,account.uid))return;
    const remote=snap.exists()?snap.data():null;
    rev=Number.isSafeInteger(remote?.revision)?remote.revision:0;
    const book=remote?.notebook && typeof remote.notebook==='object'?remote.notebook:null;
    const local=clone(host().get());
    let previous=null;
    try {previous=JSON.parse(localStorage.getItem(baseKey())||'null');}catch{}
    const previousUid=localStorage.getItem(LAST_USER);
    if(book){
      // Never silently switch between two Google identities on a shared browser.
      if(previousUid && previousUid!==account.uid && hasContent(local) && !same(local,book)){
        conflict={remote:clone(book),revision:rev};
        show('conflict','Thiết bị chứa dữ liệu của một tài khoản Google khác. Hãy sao lưu rồi chọn phiên bản muốn sử dụng.');
        return;
      }
      if(same(local,book) || (!previous && !hasContent(local)) || (previous && same(local,previous))){
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
  }catch(e){if(sessionMatches(seq,account.uid))show(navigator.onLine?'error':'offline',friendlyError(e));}
}
function listen(){
  unlisten?.();if(!docRef)return;
  const {fs}=modules, seq=generation, uid=user.uid;
  unlisten=fs.onSnapshot(docRef,snap=>{
    if(sessionMatches(seq,uid))receiveSnapshot(snap);
  },e=>{if(sessionMatches(seq,uid))show('error',friendlyError(e));});
}
function receiveSnapshot(snap){
    if(!snap.exists() || snap.metadata.hasPendingWrites || snap.metadata.fromCache)return;
    const row=snap.data(),nextRev=row.revision,remote=row.notebook;
    if(!remote || !Number.isSafeInteger(nextRev) || nextRev<=rev)return;
    if(sending){deferredSnapshot=snap;return;}
    if(conflict)return;
    const local=host().get();
    if(same(local,remote)){
      rev=nextRev;markSynced(remote);needsWrite=false;connected=true;clearTimeout(syncTimer);
      show('synced','Dữ liệu trên máy đã khớp với bản mới trên Google.');return;
    }
    if(needsWrite || (baseline && !same(local,baseline))){
      conflict={remote:clone(remote),revision:nextRev};
      connected=false;clearTimeout(syncTimer);
      show('conflict','Có thay đổi trên thiết bị khác trong lúc máy này chưa đồng bộ.');
    }else{
      try {setLocal(remote);} catch(e){connected=false;show('error',friendlyError(e));return;}
      rev=nextRev;
      show('synced','Dữ liệu vừa cập nhật từ một thiết bị khác.');
    }
}
function finishWrite(){
  sending=false;
  const snap=deferredSnapshot;
  deferredSnapshot=null;
  if(snap)receiveSnapshot(snap);
  if(needsWrite&&!conflict&&phase==='pending')schedule();
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
  const oldRev=rev,seq=generation,uid=user.uid,ref=docRef;
  try{
    const {fs}=modules;
    const nextRev=await fs.runTransaction(db,async tx=>{
      const snap=await tx.get(ref),current=snap.exists()?snap.data().revision:0;
      if(!sessionMatches(seq,uid))throw Error('Phiên đồng bộ đã thay đổi.');
      if(current!==oldRev)throw Object.assign(new Error('Dữ liệu trên Google đã đổi.'),{code:'cloud/conflict'});
      tx.set(ref,{revision:current+1,notebook:local,updatedAt:fs.serverTimestamp()});
      return current+1;
    });
    if(!sessionMatches(seq,uid))return;
    rev=nextRev;markSynced(local);
    const changedAgain=!same(host().get(),local);
    needsWrite=changedAgain;
    show(changedAgain?'pending':'synced',changedAgain?'Có cập nhật mới đang chờ đồng bộ.':'Đã lưu lên Google an toàn.');
  }catch(e){
    if(!sessionMatches(seq,uid))return;
    needsWrite=true;
    if(e?.code==='cloud/conflict'){
      try{
        const snapshot=await modules.fs.getDocFromServer(docRef);
        if(!sessionMatches(seq,uid))return;
        if(snapshot.exists()){
          conflict={remote:clone(snapshot.data().notebook),revision:snapshot.data().revision};
          connected=false;show('conflict','Dữ liệu đã thay đổi trên thiết bị khác. Hãy chọn bản muốn giữ.');
        }
      }catch(err){show('error',friendlyError(err));}
    }else show('error',friendlyError(e));
  }finally{if(sessionMatches(seq,uid))finishWrite();}
}
async function resolveConflict(choice){
  if(!user||!conflict || sending)return;
  const seq=generation,uid=user.uid,ref=docRef;
  const expected=conflict.revision;
  if(choice==='cloud'){
    show('loading','Đang đọc lại phiên bản mới nhất từ Google trước khi thay dữ liệu máy…');
    try{
      const snapshot=await modules.fs.getDocFromServer(docRef);
      if(!sessionMatches(seq,uid))return;
      const latest=snapshot.exists()?snapshot.data():null;
      if(latest?.notebook){
        rev=latest.revision;setLocal(latest.notebook);
        conflict=null;connected=true;needsWrite=false;listen();
        show('synced','Đã chuyển sang bản mới nhất trên Google.');
      }else{
        host().applyRemote(host().empty());
        rev=0;baseline=null;connected=true;needsWrite=true;conflict=null;listen();
        show('pending','Đang tạo sổ riêng cho tài khoản Google.');schedule();
      }
    }catch(e){if(sessionMatches(seq,uid))show('conflict',friendlyError(e));}
    return;
  }
  if(choice==='device'){
    const local=clone(host().get());
    sending=true;show('sending','Đang chuyển dữ liệu từ thiết bị lên Google…');
    try{
      const nextRev=await modules.fs.runTransaction(db,async tx=>{
        const snap=await tx.get(ref),current=snap.exists()?snap.data().revision:0;
        if(!sessionMatches(seq,uid))throw Error('Phiên đồng bộ đã thay đổi.');
        // A newer cloud write must be reviewed instead of silently overwritten.
        if(current!==expected)throw Object.assign(new Error('Đã có dữ liệu mới trên Google.'),{code:'cloud/conflict'});
        tx.set(ref,{revision:current+1,notebook:local,updatedAt:modules.fs.serverTimestamp()});
        return current+1;
      });
      if(!sessionMatches(seq,uid))return;
      rev=nextRev;markSynced(local);
      conflict=null;connected=true;
      needsWrite=!same(host().get(),local);
      listen();
      show(needsWrite?'pending':'synced',needsWrite?'Có thêm thay đổi đang chờ lưu.':'Đã lưu bản trên thiết bị lên Google.');
    }catch(e){
      if(!sessionMatches(seq,uid))return;
      if(e?.code==='cloud/conflict'){
        try{
          const snapshot=await modules.fs.getDocFromServer(docRef);
          if(!sessionMatches(seq,uid))return;
          conflict={remote:snapshot.exists()?clone(snapshot.data().notebook):null,
                    revision:snapshot.exists()?snapshot.data().revision:0};
          show('conflict','Một thiết bị khác vừa cập nhật Google. Hãy xem lại và chọn phiên bản lần nữa.');
        }catch(err){show('conflict',friendlyError(err));}
      }else show('conflict',friendlyError(e));
    }finally{
      if(sessionMatches(seq,uid))finishWrite();
    }
  }
}
async function googleSignIn(){
  if(!auth || !modules)return show('no-config','Hãy nhập cấu hình Firebase trước.');
  if(user||phase==='signing-in')return;
  const provider=new modules.fa.GoogleAuthProvider();
  provider.setCustomParameters({prompt:'select_account'});
  show('signing-in','Hoàn tất đăng nhập trong cửa sổ Google.');
  try{
    await modules.fa.signInWithPopup(auth,provider);
  }catch(e){
    if(['auth/popup-blocked','auth/operation-not-supported-in-this-environment'].includes(e?.code)){
      try{await modules.fa.signInWithRedirect(auth,provider);}catch(err){if(!user)show('signed-out',friendlyError(err));}
    }else if(!user)show('signed-out',friendlyError(e));
  }
}
async function googleSignOut(){
  if((needsWrite||sending||conflict) && !confirm('Có dữ liệu chưa đồng bộ xong. Đăng xuất bây giờ? Dữ liệu vẫn giữ trên trình duyệt này nhưng có thể chưa có trên Google.'))return;
  try{if(auth)await modules.fa.signOut(auth);}catch(e){show('error',friendlyError(e));}
}
function configure(fields){
  const c=readConfig(fields);
  if(!c){show('no-config','Thông tin Firebase chưa hợp lệ. Cần apiKey, authDomain, projectId và appId.');return false;}
  try{localStorage.setItem(CONFIG_STORE,JSON.stringify(c));}catch{}
  location.reload();return true;
}
function retry(){
  if(conflict)return;
  if(!user){if(config&&!auth)void boot(config);return;}
  if(!connected || phase==='offline' || phase==='error'){
    void startAccount(user);return;
  }
  needsWrite=true;show('pending','Đang thử đồng bộ lại…');schedule();
}
window.addEventListener('online',()=>{
  if(!user&&config&&!auth){void boot(config);return;}
  if(!user||conflict)return;
  if(!connected || phase==='offline' || phase==='error')void startAccount(user);
  else if(needsWrite)schedule();
});
document.addEventListener('visibilitychange',()=>{
  if(document.visibilityState==='visible' && user && !conflict && !sending){
    // A suspended phone tab may have missed updates; refresh from server.
    void startAccount(user);
  }
});
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

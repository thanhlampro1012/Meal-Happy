'use client';
import { createContext, useContext, useSyncExternalStore, type ReactNode } from 'react';
import { Monitor, Moon, Sun } from 'lucide-react';

export type ThemeMode='light'|'dark'|'system';
const STORAGE_KEY='hen-saigon-theme';
const valid=(value:unknown):value is ThemeMode=>value==='light'||value==='dark'||value==='system';
type ThemeContextValue={mode:ThemeMode;resolved:'light'|'dark';setMode:(mode:ThemeMode)=>void;ready:boolean;remembered:boolean};
type ThemeSnapshot=Omit<ThemeContextValue,'setMode'>;
const SERVER_SNAPSHOT:ThemeSnapshot={mode:'system',resolved:'light',ready:false,remembered:true};
const ThemeContext=createContext<ThemeContextValue>({...SERVER_SNAPSHOT,setMode:()=>{}});
let snapshot=SERVER_SNAPSHOT;
const listeners=new Set<()=>void>();
let stopListening:(()=>void)|undefined;

function resolvedTheme(mode:ThemeMode):'light'|'dark'{
  return mode==='system'?(window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light'):mode;
}
function publish(next:ThemeSnapshot){
  document.documentElement.dataset.theme=next.resolved;
  document.documentElement.style.colorScheme=next.resolved;
  if(snapshot.mode===next.mode&&snapshot.resolved===next.resolved&&snapshot.ready===next.ready&&snapshot.remembered===next.remembered)return;
  snapshot=next;
  listeners.forEach(listener=>listener());
}
function subscribe(listener:()=>void){
  listeners.add(listener);
  if(!stopListening){
    const media=window.matchMedia('(prefers-color-scheme: dark)');
    let mode=snapshot.mode;
    let remembered=snapshot.remembered;
    // Keep an in-memory choice if storage was blocked during this session.
    if(!snapshot.ready||snapshot.remembered){
      try{
        const stored=window.localStorage.getItem(STORAGE_KEY);
        mode=valid(stored)?stored:'system';
        remembered=true;
      }catch{remembered=false;}
    }
    const change=()=>{
      if(snapshot.mode==='system')publish({...snapshot,resolved:media.matches?'dark':'light'});
    };
    const storage=(event:StorageEvent)=>{
      if(event.key!==STORAGE_KEY&&event.key!==null)return;
      try{if(event.storageArea&&event.storageArea!==window.localStorage)return;}catch{return;}
      const next=valid(event.newValue)?event.newValue:'system';
      publish({mode:next,resolved:resolvedTheme(next),ready:true,remembered:true});
    };
    media.addEventListener('change',change);
    window.addEventListener('storage',storage);
    stopListening=()=>{
      media.removeEventListener('change',change);
      window.removeEventListener('storage',storage);
    };
    // The head script has already applied the saved theme before first paint.
    // Publish that same preference without ever applying the light SSR fallback.
    publish({mode,resolved:mode==='system'?(media.matches?'dark':'light'):mode,ready:true,remembered});
  }
  return()=>{
    listeners.delete(listener);
    if(!listeners.size){stopListening?.();stopListening=undefined;}
  };
}
function getSnapshot(){return snapshot;}
function getServerSnapshot(){return SERVER_SNAPSHOT;}
function setMode(mode:ThemeMode){
  let remembered=true;
  try{window.localStorage.setItem(STORAGE_KEY,mode);}catch{remembered=false;}
  publish({mode,resolved:resolvedTheme(mode),ready:true,remembered});
}

export function ThemeProvider({children}:{children:ReactNode}){
  const theme=useSyncExternalStore(subscribe,getSnapshot,getServerSnapshot);
  return <ThemeContext.Provider value={{...theme,setMode}}>{children}</ThemeContext.Provider>;
}

export function ThemeToggle(){
  const {resolved,setMode,ready}=useContext(ThemeContext);
  const label=resolved==='dark'?'Bật chế độ sáng':'Bật chế độ tối';
  return <button className="theme-toggle" type="button" disabled={!ready} aria-label={label} title={label} onClick={()=>setMode(resolved==='dark'?'light':'dark')}>{resolved==='dark'?<Sun size={19}/>:<Moon size={19}/>}</button>;
}

export function ThemeSettings(){
  const {mode,setMode,remembered,ready}=useContext(ThemeContext);
  return <section className="settings-card"><h2><Moon size={20}/> Giao diện</h2><p>Chọn cách hiển thị bạn thấy dễ chịu. App ghi nhớ lựa chọn trên thiết bị này.</p><div className="theme-switch" role="group" aria-label="Chọn giao diện">{[{value:'light' as const,label:'Sáng',Icon:Sun},{value:'dark' as const,label:'Tối',Icon:Moon},{value:'system' as const,label:'Theo thiết bị',Icon:Monitor}].map(({value,label,Icon})=><button key={value} className="theme-mode-button" type="button" disabled={!ready} aria-pressed={mode===value} onClick={()=>setMode(value)}><Icon size={18}/>{label}</button>)}</div>{!remembered&&<p className="settings-note">Trình duyệt chưa cho phép lưu tùy chọn. Giao diện vẫn đổi trong phiên đang mở.</p>}</section>;
}

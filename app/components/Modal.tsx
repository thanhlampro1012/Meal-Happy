'use client';
import { useEffect, useEffectEvent, useId, useRef, type ReactNode } from 'react';
import { X } from 'lucide-react';

export default function Modal({ title, subtitle, children, onClose, wide=false, busy=false }: {
  title:string; subtitle?:string; children:ReactNode; onClose:()=>void; wide?:boolean; busy?:boolean;
}) {
  const root=useRef<HTMLDivElement>(null);
  const titleId=useId();
  const close=()=>{if(!busy)onClose();};
  const closeOnEscape=useEffectEvent(()=>{if(!busy)onClose();});
  useEffect(()=>{
    const dialog=root.current;
    if(!dialog)return;
    const previous=document.activeElement instanceof HTMLElement?document.activeElement:null;
    const overflow=document.body.style.overflow;
    document.body.style.overflow='hidden';
    dialog.focus();
    const keyboard=(event:KeyboardEvent)=>{
      if(event.key==='Escape'){event.preventDefault();closeOnEscape();return;}
      if(event.key!=='Tab')return;
      const candidates=dialog.querySelectorAll<HTMLElement>('button,a[href],input:not([type="hidden"]),select,textarea,[tabindex]');
      const visible=Array.from(candidates).filter(el=>el.tabIndex>=0&&!el.matches(':disabled')&&el.getClientRects().length>0&&!el.closest('[hidden],[inert],[aria-hidden="true"]'));
      if(!visible.length){event.preventDefault();dialog.focus();return;}
      const first=visible[0],last=visible[visible.length-1];
      const focusOutside=!dialog.contains(document.activeElement);
      if(event.shiftKey&&(document.activeElement===first||document.activeElement===dialog||focusOutside)){event.preventDefault();last.focus();}
      else if(!event.shiftKey&&(document.activeElement===last||document.activeElement===dialog||focusOutside)){event.preventDefault();first.focus();}
    };
    document.addEventListener('keydown',keyboard);
    return()=>{document.body.style.overflow=overflow;document.removeEventListener('keydown',keyboard);if(previous?.isConnected)previous.focus();};
  },[]);
  return <div className="modal-backdrop" onMouseDown={event=>{if(event.target===event.currentTarget)close();}}>
    <div ref={root} tabIndex={-1} role="dialog" aria-modal="true" aria-labelledby={titleId} aria-busy={busy||undefined} className={'modal '+(wide?'wide':'')}>
      <header className="modal-header"><div><h2 id={titleId}>{title}</h2>{subtitle&&<p>{subtitle}</p>}</div><button type="button" className="icon-btn" aria-label="Đóng" disabled={busy} onClick={close}><X size={21}/></button></header>
      {children}
    </div>
  </div>;
}

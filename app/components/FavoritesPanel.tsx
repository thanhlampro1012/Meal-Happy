'use client';
import { useMemo, useState, type FormEvent } from 'react';
import { Check, ChevronDown, Heart, Loader2, MapPin, Pencil, Plus, Search, Shuffle, Trash2, Utensils, X } from 'lucide-react';
import { FAVORITE_CATEGORIES, normalize, type Dish, type FavoriteDish, type Place } from '../lib/types';
import { normalizeFavoriteName } from '../lib/notebook';
import Modal from './Modal';
import FavoriteWheel from './FavoriteWheel';

type Props={
  items:FavoriteDish[]; places:Place[]; wishList:Dish[]; saving:boolean;
  canEdit:()=>boolean; onChange:(items:FavoriteDish[],message:string)=>Promise<boolean>;
  onOpenPlace:(id:string)=>void; onPlan:(placeId:string)=>void; notify:(message:string)=>void;
};

export default function FavoritesPanel({items,places,wishList,saving,canEdit,onChange,onOpenPlace,onPlan,notify}:Props){
  const [search,setSearch]=useState('');
  const [category,setCategory]=useState('all');
  const [onlyOften,setOnlyOften]=useState(false);
  const [editor,setEditor]=useState<FavoriteDish|'new'|null>(null);
  const [deleteId,setDeleteId]=useState<string|null>(null);
  const [spinning,setSpinning]=useState(false);
  const enabled=useMemo(()=>items.filter(item=>item.enabled),[items]);
  const selectionSignature=JSON.stringify(enabled.map(item=>[item.id,item.title]));
  const [selectionResult,setSelectionResult]=useState<{id:string|null;signature:string}>(()=>({id:null,signature:selectionSignature}));
  // Reset this component's selection with the new pool before rendering its
  // details. Returning to an earlier pool must not resurrect an old winner.
  if(selectionResult.signature!==selectionSignature){
    setSelectionResult({id:null,signature:selectionSignature});
  }
  const pickedId=selectionResult.signature===selectionSignature?selectionResult.id:null;
  const filtered=items.filter(item=>{
    const q=normalize(search.trim());
    const place=places.find(p=>p.id===item.placeId);
    return (!onlyOften||item.often)&&(category==='all'||item.category===category)&&(!q||normalize([item.title,item.note,place?.name||''].join(' ')).includes(q));
  });
  const suggestions=wishList.filter(dish=>!items.some(item=>normalizeFavoriteName(item.title)===normalizeFavoriteName(dish.title))).slice(0,6);
  const picked=items.find(item=>item.id===pickedId);
  const pickedPlace=picked?.placeId?places.find(p=>p.id===picked.placeId):undefined;
  const deleting=items.find(item=>item.id===deleteId);
  const locked=saving||spinning;
  function startEdit(item:FavoriteDish|'new') { if(!locked&&canEdit())setEditor(item); }
  async function save(item:FavoriteDish){
    const duplicate=items.find(existing=>existing.id!==item.id&&normalizeFavoriteName(existing.title)===normalizeFavoriteName(item.title));
    if(duplicate){notify('Món này đã có trong danh sách yêu thích. Bạn có thể sửa món đang có.');return;}
    const exists=items.some(existing=>existing.id===item.id);
    if(await onChange(exists?items.map(existing=>existing.id===item.id?item:existing):[item,...items],exists?'Đã cập nhật món yêu thích.':'Đã thêm món vào danh sách yêu thích.'))setEditor(null);
  }
  async function toggle(item:FavoriteDish){
    if(locked||!canEdit())return;
    await onChange(items.map(existing=>existing.id===item.id?{...existing,enabled:!existing.enabled}:existing),item.enabled?'Đã bỏ món khỏi lượt quay.':'Đã đưa món vào vòng quay.');
  }
  async function chooseAll(enabled:boolean){if(!locked&&canEdit())await onChange(items.map(item=>({...item,enabled})),enabled?'Đã chọn tất cả món cho vòng quay.':'Đã bỏ chọn các món trong vòng quay.');}
  async function fromWishList(dish:Dish){
    if(locked||!canEdit())return;
    await save({id:crypto.randomUUID(),title:dish.title,category:'Khác',note:dish.note,placeId:dish.placeId,often:false,enabled:true});
  }
  return <div className="favorites-page">
    <section className="favorites-summary" aria-label="Tổng quan món yêu thích">
      <span><Heart size={18}/><strong>{items.length}</strong> món yêu thích</span>
      <span><Utensils size={18}/><strong>{items.filter(item=>item.often).length}</strong> món hay ăn</span>
      <span><Shuffle size={18}/><strong>{enabled.length}</strong> món trong vòng quay</span>
    </section>
    <div className="favorites-mobile-actions"><button type="button" className="button primary" disabled={locked} onClick={()=>startEdit('new')}><Plus size={17}/> Thêm món yêu thích</button><button type="button" className="button secondary" onClick={()=>document.getElementById('favorite-list-title')?.scrollIntoView({behavior:window.matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth',block:'start'})}>Xem danh sách</button></div>
    <div className="favorites-layout">
      <section className="favorites-wheel-card" aria-labelledby="favorite-wheel-title">
        <div className="favorites-section-heading"><span className="favorites-kicker">ĐỂ VÒNG QUAY CHỌN GIÚP</span><h2 id="favorite-wheel-title">Hôm nay ăn món gì?</h2><p>Chọn những món hai đứa đang muốn ăn, rồi thử một vòng.</p></div>
        <FavoriteWheel items={enabled} onResult={item=>setSelectionResult({id:item.id,signature:selectionSignature})} onSpinningChange={value=>{setSpinning(value);if(value)setSelectionResult({id:null,signature:selectionSignature});}}/>
        {picked&&<div className="favorite-picked-detail">
          {picked.note&&<p>{picked.note}</p>}
          {pickedPlace&&<><button type="button" className="text-button" onClick={()=>onOpenPlace(pickedPlace.id)}><MapPin size={16}/>{pickedPlace.name}</button><button className="button secondary" type="button" disabled={saving} onClick={()=>onPlan(pickedPlace.id)}>Lên lịch ghé quán này</button></>}
        </div>}
        {!items.length&&<button className="button secondary favorite-first-add" type="button" onClick={()=>startEdit('new')}><Plus size={17}/> Thêm món đầu tiên</button>}
      </section>
      <section className="favorites-library" aria-labelledby="favorite-list-title">
        <div className="favorites-list-heading"><div><h2 id="favorite-list-title">Món mình thích</h2><p>Quen miệng, hợp gu, muốn ăn lại.</p></div><button className="button primary" type="button" disabled={locked} onClick={()=>startEdit('new')}><Plus size={17}/> Thêm món</button></div>
        <div className="favorite-filters"><label className="search-box"><Search size={18}/><input aria-label="Tìm món yêu thích" value={search} onChange={event=>setSearch(event.target.value)} placeholder="Tìm món hoặc quán quen…"/>{search&&<button type="button" aria-label="Xóa tìm món yêu thích" onClick={()=>setSearch('')}><X size={16}/></button>}</label><div className="select-wrap"><select value={category} aria-label="Lọc nhóm món yêu thích" onChange={event=>setCategory(event.target.value)}><option value="all">Mọi nhóm món</option>{FAVORITE_CATEGORIES.map(value=><option key={value}>{value}</option>)}</select><ChevronDown size={15}/></div></div>
        <div className="favorite-list-options"><div role="group" aria-label="Lọc món hay ăn"><button type="button" aria-pressed={!onlyOften} onClick={()=>setOnlyOften(false)}>Tất cả</button><button type="button" aria-pressed={onlyOften} onClick={()=>setOnlyOften(true)}>Hay ăn</button></div>{items.length>0&&<span>{filtered.length}/{items.length} món</span>}</div>
        {items.length>0&&<div className="favorite-selection-bar"><span><Shuffle size={15}/> Đánh dấu món muốn đưa vào vòng quay</span><button type="button" disabled={locked||enabled.length===items.length} onClick={()=>chooseAll(true)}>Chọn tất cả</button><button type="button" disabled={locked||!enabled.length} onClick={()=>chooseAll(false)}>Bỏ chọn</button></div>}
        {items.length>0&&(search.trim()||category!=='all'||onlyOften)&&<p className="favorite-filter-hint">Vòng quay dùng tất cả món đã đánh dấu, kể cả món đang ẩn bởi bộ lọc.</p>}
        {filtered.length?<div className="favorite-items">{filtered.map(item=>{
          const place=places.find(p=>p.id===item.placeId);
          return <article key={item.id} className={'favorite-item '+(pickedId===item.id?'just-picked':'')}>
            <label className="favorite-wheel-choice"><input type="checkbox" checked={item.enabled} disabled={locked} onChange={()=>toggle(item)} aria-label={'Cho '+item.title+' tham gia vòng quay'}/><span aria-hidden="true">{item.enabled&&<Check size={16}/>}</span></label>
            <div className="favorite-item-body"><div className="favorite-item-tags"><span>{item.category}</span>{item.often&&<span className="favorite-often"><Utensils size={12}/> Hay ăn</span>}{pickedId===item.id&&<span className="favorite-selected-label">Vừa được chọn</span>}</div><h3>{item.title}</h3>{item.note&&<p>{item.note}</p>}{place&&<button type="button" className="favorite-place-link" onClick={()=>onOpenPlace(place.id)}><MapPin size={14}/>{place.name}</button>}</div>
            <div className="favorite-item-actions"><button type="button" className="icon-btn" disabled={locked} aria-label={'Sửa món yêu thích '+item.title} onClick={()=>startEdit(item)}><Pencil size={17}/></button><button type="button" className="icon-btn danger" disabled={locked} aria-label={'Xóa món yêu thích '+item.title} onClick={()=>{if(canEdit())setDeleteId(item.id);}}><Trash2 size={17}/></button></div>
          </article>;
        })}</div>:<div className="favorite-list-empty"><Heart size={31} strokeWidth={1.5}/><h3>{items.length?'Chưa thấy món phù hợp.':'Danh sách bắt đầu từ món bạn thích.'}</h3><p>{items.length?'Thử bỏ bộ lọc hoặc tìm bằng tên ngắn hơn.':'Bún bò, cơm tấm, sushi hay một món nhà nấu. Bạn tự thêm món, không bắt buộc chọn quán.'}</p>{items.length>0&&<button className="button secondary small" type="button" onClick={()=>{setSearch('');setCategory('all');setOnlyOften(false);}}>Xóa bộ lọc</button>}</div>}
        {suggestions.length>0&&<section className="favorite-from-wishlist"><h3>Giữ lại từ sổ món của bạn</h3><p>Thêm những món muốn ăn lại vào danh sách yêu thích.</p><div>{suggestions.map(dish=><button type="button" key={dish.id} disabled={locked} onClick={()=>fromWishList(dish)}><Plus size={14}/>{dish.title}</button>)}</div></section>}
      </section>
    </div>
    {editor&&<FavoriteEditor item={editor==='new'?undefined:editor} places={places} items={items} saving={saving} onClose={()=>setEditor(null)} onSave={save}/>}
    {deleting&&<Modal title="Xóa món yêu thích?" onClose={()=>setDeleteId(null)} busy={saving}><div className="modal-content"><p><strong>{deleting.title}</strong> sẽ được gỡ khỏi danh sách yêu thích và vòng quay. Các món trong sổ muốn thử vẫn được giữ.</p><div className="modal-actions"><button type="button" className="button secondary" disabled={saving} onClick={()=>setDeleteId(null)}>Giữ lại</button><button type="button" className="button destructive" disabled={saving} onClick={async()=>{if(await onChange(items.filter(item=>item.id!==deleteId),'Đã xóa món khỏi danh sách yêu thích.'))setDeleteId(null);}}>{saving?'Đang xóa…':'Xóa món'}</button></div></div></Modal>}
  </div>;
}

function FavoriteEditor({item,places,items,saving,onClose,onSave}:{item?:FavoriteDish;places:Place[];items:FavoriteDish[];saving:boolean;onClose:()=>void;onSave:(dish:FavoriteDish)=>Promise<void>}){
  const [title,setTitle]=useState(item?.title||'');
  const [category,setCategory]=useState<FavoriteDish['category']>(item?.category||'Món chính');
  const [placeId,setPlaceId]=useState(item?.placeId||'');
  const [note,setNote]=useState(item?.note||'');
  const [often,setOften]=useState(item?.often||false);
  const [enabled,setEnabled]=useState(item?.enabled??true);
  const [error,setError]=useState('');
  async function submit(event:FormEvent){
    event.preventDefault();setError('');
    const clean=title.trim().replace(/\s+/g,' ');
    if(!clean){setError('Bạn nhập tên món trước nhé.');return;}
    if(items.some(other=>other.id!==item?.id&&normalizeFavoriteName(other.title)===normalizeFavoriteName(clean))){setError('Món này đã có trong danh sách yêu thích. Hãy sửa món đang có hoặc đặt tên phân biệt.');return;}
    await onSave({id:item?.id||crypto.randomUUID(),title:clean,category,placeId,note:note.trim(),often,enabled});
  }
  return <Modal title={item?'Sửa món yêu thích':'Thêm món yêu thích'} subtitle="Những món ăn hoài vẫn thấy ngon." onClose={onClose} busy={saving}>
    <form className="modal-content favorite-form" onSubmit={submit}>
      <label><span className="field-label">Tên món *</span><input disabled={saving} value={title} onChange={event=>setTitle(event.target.value)} required maxLength={180} placeholder="Ví dụ: Bún bò Huế, cơm tấm sườn bì…" autoComplete="off"/></label>
      <label><span className="field-label">Nhóm món</span><div className="select-wrap"><select disabled={saving} value={category} onChange={event=>setCategory(event.target.value as FavoriteDish['category'])}>{FAVORITE_CATEGORIES.map(value=><option key={value}>{value}</option>)}</select><ChevronDown size={15}/></div></label>
      <label><span className="field-label">Quán quen <span>không bắt buộc</span></span><div className="select-wrap"><select disabled={saving} value={placeId} onChange={event=>setPlaceId(event.target.value)}><option value="">Chưa chọn quán / ăn ở nhà</option>{places.map(place=><option key={place.id} value={place.id}>{place.name} · {place.area}</option>)}</select><ChevronDown size={15}/></div></label>
      <label><span className="field-label">Ghi chú khẩu vị</span><textarea disabled={saving} value={note} onChange={event=>setNote(event.target.value)} rows={3} maxLength={3000} placeholder="Không hành, ít cay, thêm trứng…"/></label>
      <label className="favorite-form-check"><input disabled={saving} type="checkbox" checked={often} onChange={event=>setOften(event.target.checked)}/><span>Đây là món mình hay ăn</span></label>
      <label className="favorite-form-check"><input disabled={saving} type="checkbox" checked={enabled} onChange={event=>setEnabled(event.target.checked)}/><span>Đưa món này vào vòng quay</span></label>
      {error&&<p className="field-error" role="alert">{error}</p>}
      <div className="modal-actions"><button className="button secondary" type="button" disabled={saving} onClick={onClose}>Để sau</button><button className="button primary" type="submit" disabled={saving}>{saving?<><Loader2 size={16} className="spin"/> Đang lưu…</>:item?'Lưu thay đổi':'Thêm món yêu thích'}</button></div>
    </form>
  </Modal>;
}

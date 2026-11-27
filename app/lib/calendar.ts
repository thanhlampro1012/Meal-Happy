import { mapsUrl, type Plan, type Place } from './types';
export function saigonDate(value:Date=new Date()) {
  const parts=new Intl.DateTimeFormat('en-CA',{timeZone:'Asia/Ho_Chi_Minh',year:'numeric',month:'2-digit',day:'2-digit'}).formatToParts(value);
  const part=(type:Intl.DateTimeFormatPartTypes)=>parts.find(item=>item.type===type)!.value;
  return `${part('year')}-${part('month')}-${part('day')}`;
}
export function dateLabel(value:string) {
  return new Intl.DateTimeFormat('vi-VN',{weekday:'long',day:'numeric',month:'long',timeZone:'Asia/Ho_Chi_Minh'}).format(new Date(value+'T12:00:00+07:00'));
}
export function routeUrl(plan: Plan, places: Place[]) {
  const stops=plan.stops.map(s=>places.find(p=>p.id===s.placeId)).filter((p):p is Place=>!!p);
  if(!stops.length||stops.length!==plan.stops.length)return '';
  // A shared Maps URL can identify the exact branch even when the user saved
  // only a private nickname. A multi-stop route needs an address or Place ID
  // for every stop; guessing from that nickname can send the user elsewhere.
  const resolvable=(place:Place)=>!!(place.address.trim()||place.placeId);
  if(stops.length===1)return !resolvable(stops[0])&&stops[0].mapUrl?stops[0].mapUrl:mapsUrl(stops[0],true);
  if(stops.some(place=>!resolvable(place)))return '';
  const url=new URL('https://www.google.com/maps/dir/');
  url.searchParams.set('api','1');
  const query=(p:Place)=>`${p.name}, ${p.address || 'Thành phố Hồ Chí Minh'}`;
  url.searchParams.set('origin',query(stops[0]));
  if(stops[0].placeId)url.searchParams.set('origin_place_id',stops[0].placeId);
  const last=stops[stops.length-1];
  url.searchParams.set('destination',query(last));
  if(last.placeId)url.searchParams.set('destination_place_id',last.placeId);
  const mid=stops.slice(1,-1);
  if(mid.length){url.searchParams.set('waypoints',mid.map(query).join('|'));if(mid.every(p=>p.placeId))url.searchParams.set('waypoint_place_ids',mid.map(p=>p.placeId).join('|'));}
  return url.toString();
}
const esc=(s:string)=>s.replace(/\\/g,'\\\\').replace(/\r?\n/g,'\\n').replace(/,/g,'\\,').replace(/;/g,'\\;');
const utc=(d:Date)=>d.toISOString().replace(/[-:]/g,'').replace(/\.\d{3}/,'');
export function itineraryText(plan:Plan,places:Place[]) {
  const lines=[plan.title,dateLabel(plan.date)+' · '+plan.time+' (giờ Việt Nam)',...plan.stops.map(s=>{const p=places.find(p=>p.id===s.placeId);return `${s.time} · ${p?.name || 'Địa điểm đã xóa'}${s.note?' — '+s.note:''}${p?'\n'+mapsUrl(p):''}`;}),plan.notes];
  return lines.filter(Boolean).join('\n\n');
}
export function calendarFile(plan:Plan,places:Place[]) {
  const start=new Date(`${plan.date}T${plan.time}:00+07:00`);
  const last=plan.stops[plan.stops.length-1];
  const lastStart=new Date(`${plan.date}T${last?.time || plan.time}:00+07:00`);
  const end=new Date(Math.max(start.getTime()+7200000,lastStart.getTime()+5400000));
  const first=places.find(p=>p.id===plan.stops[0]?.placeId);
  const lines=['BEGIN:VCALENDAR','VERSION:2.0','PRODID:-//Hen Sai Gon//Datebook VI//EN','CALSCALE:GREGORIAN','METHOD:PUBLISH','BEGIN:VEVENT',`UID:${plan.id}@hen-saigon`,`DTSTAMP:${utc(new Date())}`,`DTSTART:${utc(start)}`,`DTEND:${utc(end)}`,`SUMMARY:${esc(plan.title)}`,`DESCRIPTION:${esc(itineraryText(plan,places))}`,`LOCATION:${esc(first?[first.name,first.address].filter(Boolean).join(', '):'TP. Hồ Chí Minh')}`,'END:VEVENT','END:VCALENDAR'];
  return lines.map(line=>{const chunks:string[]=[];let current='',bytes=0;for(const c of line){const n=new TextEncoder().encode(c).length;if(bytes+n>73){chunks.push(current);current=' ';bytes=1;}current+=c;bytes+=n;}chunks.push(current);return chunks.join('\r\n');}).join('\r\n')+'\r\n';
}

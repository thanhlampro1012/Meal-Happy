import { DEFAULT_PREF, normalize, type Place, type PlacePref } from './types';
import { cuisineLabels, getCuisineIds, type CuisineId } from './cuisines';
export type DiscoveryView='explore'|'saved'|'journal';
export type DiscoveryFilters={query:string;kind:string;area:string;cuisines:CuisineId[];budget:number;people:1|2;mood:string;status:'all'|'want'|'visited'|'skip';sort:'recommended'|'budget'|'rating'|'name';};
export const DEFAULT_FILTERS:DiscoveryFilters={query:'',kind:'all',area:'all',cuisines:[],budget:0,people:1,mood:'all',status:'all',sort:'recommended'};
export const BUDGET_OPTIONS=[30000,50000,70000,100000,150000,200000,300000,500000,1000000,2000000,5000000];
export function normalizeQuery(value:string){return normalize(value.trim()).replace(/\bq\.?\s*(\d{1,2})\b/g,'quan $1').replace(/\s+/g,' ');}
export function filterPlaces(places:Place[],prefs:Record<string,PlacePref>,view:DiscoveryView,filters:DiscoveryFilters){
  const query=normalizeQuery(filters.query);
  const districts=[...query.matchAll(/\bquan\s+(\d{1,2})\b/g)].map(match=>match[1]);
  // A dish query must not match “thành phố” in an address or “phô mai” on a pizza menu.
  const lookingForPho=/\bpho\b(?!\s+mai)/.test(query)&&!/(^|\s)phố(?=\s|$)/u.test(filters.query.normalize('NFC').toLowerCase());
  const remaining=query.replace(/\bquan\s+\d{1,2}\b/g,' ');
  const terms=(lookingForPho?remaining.replace(/\bpho\b/g,' '):remaining).split(' ').filter(Boolean);
  const list=places.filter(place=>{
    const pref=prefs[place.id]||DEFAULT_PREF;
    if(view==='saved'&&!pref.saved)return false;
    if(view==='journal'&&pref.status!=='visited')return false;
    if(filters.kind!=='all'&&place.kind!==filters.kind)return false;
    if(filters.area!=='all'&&place.area!==filters.area)return false;
    // A district number must match the area, never a digit in an unrelated street address.
    if(districts.some(district=>!new RegExp(`\\bquan\\s+${district}\\b`).test(normalizeQuery(place.area))))return false;
    if(lookingForPho&&!getCuisineIds(place).includes('pho'))return false;
    if(filters.cuisines.length&&!filters.cuisines.some(id=>getCuisineIds(place).includes(id)))return false;
    if(filters.budget>0&&(!(place.budgetMax>0)||place.budgetMax*filters.people>filters.budget))return false;
    if(filters.mood!=='all'&&!place.tags.includes(filters.mood))return false;
    if(filters.status!=='all'&&pref.status!==filters.status)return false;
    const text=normalizeQuery([place.name,place.area,place.address,...place.dishes,...place.tags,...cuisineLabels(place)].join(' '));
    return !terms.length||terms.every(term=>text.includes(term));
  });
  if(filters.sort==='budget')list.sort((a,b)=>(a.budgetMax||Infinity)-(b.budgetMax||Infinity)||a.budgetMin-b.budgetMin||a.name.localeCompare(b.name,'vi'));
  if(filters.sort==='rating')list.sort((a,b)=>(b.community?.score??-1)-(a.community?.score??-1)||(b.community?.count??0)-(a.community?.count??0));
  if(filters.sort==='name')list.sort((a,b)=>a.name.localeCompare(b.name,'vi',{numeric:true}));
  return list;
}
export function activeFilterCount(filters:DiscoveryFilters){return [!!filters.query.trim(),filters.kind!=='all',filters.area!=='all',filters.cuisines.length>0,filters.budget>0,filters.mood!=='all',filters.status!=='all'].filter(Boolean).length;}

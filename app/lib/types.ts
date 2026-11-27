export type PlaceKind = 'food' | 'coffee' | 'dessert' | 'drinks';
export type PlaceSource = { label: string; url: string; kind?: 'official' | 'community' | 'guide' };
export type Place = {
  id: string; name: string; kind: PlaceKind; area: string; address: string;
  addressSource: string; mapUrl: string; placeId?: string; description: string;
  dishes: string[]; cuisineTags?: string[]; budgetMin: number; budgetMax: number; tags: string[];
  community?: { provider: string; score: number; count: number; url: string; checkedAt: string };
  sources: PlaceSource[]; image?: string; imageSource?: string; curated: boolean;
  checkedAt: string; booking?: string; budgetNote?: string;
};
export type PlacePref = {
  saved: boolean; status: 'want' | 'visited' | 'skip'; note: string;
  myRating: number; partnerRating: number; visitedAt: string;
};
export type Dish = { id: string; title: string; placeId: string; price: number; note: string; done: boolean };
export const FAVORITE_CATEGORIES = ['Món chính', 'Ăn vặt', 'Đồ uống', 'Tráng miệng', 'Khác'] as const;
export type FavoriteDish = {
  id: string; title: string; category: typeof FAVORITE_CATEGORIES[number];
  note: string; placeId: string; often: boolean; enabled: boolean;
};
export type PlanStop = { placeId: string; time: string; note: string };
export type Plan = {
  id: string; title: string; date: string; time: string; budget: number;
  notes: string; stops: PlanStop[]; status: 'planned' | 'done';
};
export type Notebook = {
  customPlaces: Place[]; placePrefs: Record<string, PlacePref>; dishes: Dish[]; favoriteDishes: FavoriteDish[];
  plans: Plan[]; settings: { coupleName: string; defaultBudget: number };
};
export type GooglePlace = {
  id: string; displayName?: { text: string }; formattedAddress?: string;
  googleMapsUri?: string; rating?: number; userRatingCount?: number;
  businessStatus?: string; location?: { latitude: number; longitude: number };
  attributions?: { provider?: string; providerUri?: string }[];
};
export const EMPTY_NOTEBOOK: Notebook = {
  customPlaces: [], placePrefs: {}, dishes: [], favoriteDishes: [], plans: [],
  settings: { coupleName: 'Hai đứa mình', defaultBudget: 600000 },
};
export const DEFAULT_PREF: PlacePref = { saved: false, status: 'want', note: '', myRating: 0, partnerRating: 0, visitedAt: '' };
export const KIND_LABELS: Record<PlaceKind,string> = { food: 'Ăn uống', coffee: 'Cà phê', dessert: 'Tráng miệng', drinks: 'Đồ uống' };
export function mapsUrl(place: Pick<Place,'name'|'address'|'mapUrl'|'placeId'>, directions=false) {
  if (place.mapUrl && (!directions || !(place.address.trim() || place.placeId))) return place.mapUrl;
  const url=new URL(directions?'https://www.google.com/maps/dir/':'https://www.google.com/maps/search/');
  url.searchParams.set('api','1');
  url.searchParams.set(directions?'destination':'query',`${place.name} ${place.address || 'Thành phố Hồ Chí Minh'}`);
  if(place.placeId) url.searchParams.set(directions?'destination_place_id':'query_place_id',place.placeId);
  return url.toString();
}
export function money(n: number) { return new Intl.NumberFormat('vi-VN').format(n)+' ₫'; }
export function shortMoney(n:number) { return n>=1000000?(n/1000000).toLocaleString('vi-VN')+'tr':Math.round(n/1000)+'k'; }
export function normalize(s:string) { return s.normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/đ/g,'d').replace(/Đ/g,'D').toLowerCase(); }

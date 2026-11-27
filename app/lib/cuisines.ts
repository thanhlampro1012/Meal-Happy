import { normalize, type Place } from './types';

export const CUISINE_IDS = ['com-tam','com','xoi','banh-bao','bun','bun-bo','pho','hu-tieu','banh-mi','banh-cuon','banh-xeo','mi','banh-canh','chao-sup','lau','nuong','oc','hai-san','chay','nhat','han','thai','hoa','au','pizza','burger','banh-trang','an-vat','che','kem','banh-ngot','ca-phe','tra-sua','do-uong','banh-flan','trai-cay-to','xoi-xoai','kem-bo','kem-dua','sua-chua','nuoc-ep','sinh-to','tra-trai-cay','matcha','cold-brew','khac'] as const;
export type CuisineId = typeof CUISINE_IDS[number];
export const CUISINE_LABELS:Record<CuisineId,string> = {
  'com-tam':'Cơm tấm',com:'Cơm / cơm nhà',xoi:'Xôi','banh-bao':'Bánh bao / bánh giò',bun:'Bún các loại','bun-bo':'Bún bò',pho:'Phở','hu-tieu':'Hủ tiếu','banh-mi':'Bánh mì','banh-cuon':'Bánh cuốn','banh-xeo':'Bánh xèo',mi:'Mì / mì Quảng','banh-canh':'Bánh canh','chao-sup':'Cháo / súp',lau:'Lẩu',nuong:'Đồ nướng',oc:'Ốc','hai-san':'Hải sản',chay:'Món chay',nhat:'Món Nhật',han:'Món Hàn',thai:'Món Thái',hoa:'Món Hoa',au:'Món Âu',pizza:'Pizza',burger:'Burger','banh-trang':'Bánh tráng','an-vat':'Ăn vặt',che:'Chè',kem:'Kem','banh-ngot':'Bánh ngọt','ca-phe':'Cà phê','tra-sua':'Trà sữa','do-uong':'Đồ uống',
  'banh-flan':'Bánh flan','trai-cay-to':'Trái cây tô','xoi-xoai':'Xôi xoài',
  'kem-bo':'Kem bơ','kem-dua':'Kem dừa','sua-chua':'Sữa chua / yaourt',
  'nuoc-ep':'Nước ép','sinh-to':'Sinh tố','tra-trai-cay':'Trà trái cây',
  matcha:'Matcha','cold-brew':'Cold brew',khac:'Món khác',
};
export const POPULAR_CUISINES: CuisineId[] = ['com-tam','bun','pho','hu-tieu','banh-mi','com','lau','nuong','oc','chay','an-vat','ca-phe'];

export const KIND_CUISINES: Record<Place['kind'], CuisineId[]> = {
  food:['com-tam','com','xoi','banh-bao','bun','bun-bo','pho','hu-tieu','banh-mi','banh-cuon','banh-xeo','mi','banh-canh','chao-sup','lau','nuong','oc','hai-san','chay','nhat','han','thai','hoa','au','pizza','burger','banh-trang','an-vat','khac'],
  coffee:['ca-phe','cold-brew','matcha','tra-trai-cay','banh-ngot','do-uong'],
  dessert:['che','banh-flan','kem','kem-dua','kem-bo','trai-cay-to','xoi-xoai','sua-chua','banh-ngot'],
  drinks:['tra-sua','tra-trai-cay','nuoc-ep','sinh-to','matcha','ca-phe','do-uong'],
};
export const POPULAR_CUISINES_BY_KIND: Record<Place['kind']|'all', CuisineId[]> = {
  all:['com-tam','bun','pho','hu-tieu','banh-mi','com','lau','nuong','che','kem','banh-flan','xoi-xoai','ca-phe','tra-sua','nuoc-ep'],
  food:['com-tam','bun','pho','hu-tieu','banh-mi','com','lau','nuong','oc','chay','an-vat'],
  coffee:['ca-phe','cold-brew','matcha','tra-trai-cay','banh-ngot'],
  dessert:['che','banh-flan','kem','kem-dua','kem-bo','trai-cay-to','xoi-xoai','sua-chua','banh-ngot'],
  drinks:['tra-sua','tra-trai-cay','nuoc-ep','sinh-to','matcha','ca-phe'],
};

const rules:Array<[CuisineId,RegExp]> = [
  ['banh-flan',/\b(banh flan|banh plan|caramel custard)\b/],
  ['trai-cay-to',/\b(trai cay to|trai cay dam|fruit bowl)\b/],
  ['xoi-xoai',/\bxoi xoai\b/],
  ['kem-bo',/\bkem bo\b/],['kem-dua',/\bkem dua\b/],
  ['sua-chua',/\b(sua chua|yaourt|yogurt)\b/],
  ['nuoc-ep',/\bnuoc ep\b/],['sinh-to',/\bsinh to\b/],
  ['tra-trai-cay',/\b(tra trai cay|tra dao|tra vai|tra dau|tra mang cau|tra dao cam sa)\b/],
  ['matcha',/\bmatcha\b/],['cold-brew',/\bcold brew\b/],
  ['xoi',/\bxoi\b/],['banh-bao',/\bbanh (bao|gio)\b/],['com-tam',/\bcom tam\b/],['com',/\bcom\b/],['bun',/\bbun\b/],['bun-bo',/\bbun bo\b/],['pho',/\bpho (bo|ga|nam|tai|vien|kho|tron|cuon)\b|^pho\b/],['hu-tieu',/\bhu tieu\b/],['banh-mi',/\bbanh mi\b/],['banh-cuon',/\bbanh cuon\b/],['banh-xeo',/\bbanh xeo\b/],['mi',/\bmi (quang|ga|vit|hoanh thanh|sui cao|xao|tron|cay|udon|ramen)\b|\bramen\b|\budon\b/],['banh-canh',/\bbanh canh\b/],['chao-sup',/\b(chao|sup)\b/],['lau',/\blau\b/],['nuong',/\b(nuong|bbq|barbecue)\b/],['oc',/\boc\b/],['hai-san',/\b(hai san|tom|cua|ghe|ngheu|so diep|hau)\b/],['chay',/\b(chay|vegetarian|vegan)\b/],['nhat',/\b(sushi|sashimi|ramen|udon|nhat|omakase)\b/],['han',/\b(kimchi|tokbokki|tteokbokki|bibimbap|han quoc)\b/],['thai',/\b(pad thai|tom yum|thai)\b/],['hoa',/\b(dim sum|dimsum|sui cao|hoanh thanh|vit quay|quang dong)\b/],['au',/\b(steak|pasta|risotto|tasting menu|au|phap)\b/],['pizza',/\bpizza\b/],['burger',/\b(burger|hamburger)\b/],['banh-trang',/\bbanh trang\b/],['an-vat',/\b(an vat|ca vien|bot chien|goi cuon|banh trang|pha lau|xien que)\b/],['che',/\bche\b/],['kem',/\b(kem|gelato|ice cream)\b/],['banh-ngot',/\b(banh ngot|tiramisu|croissant|cheesecake|banh chocolate|banh su|banh flan)\b/],['ca-phe',/\b(ca phe|coffee|cappuccino|espresso|cold brew)\b/],['tra-sua',/\btra sua\b/],['do-uong',/\b(tra|nuoc ep|sinh to|cocktail|soda|cacao|chocolate nong)\b/],
];

export function getCuisineIds(place:Pick<Place,'name'|'dishes'|'tags'|'kind'|'cuisineTags'>):CuisineId[] {
  const supplied=(place.cuisineTags||[]).filter((id):id is CuisineId=>CUISINE_IDS.includes(id as CuisineId));
  const selected=new Set<CuisineId>(supplied);
  // Structured tags take precedence; older user-added places remain searchable by their menu.
  if(!supplied.length){
    const fields=[place.name,...place.dishes,...place.tags];
    for(const [id,pattern] of rules){
      if(id==='pho'){
        // Keep Vietnamese accents here: “phố” and the dish “phở” are different words.
        if(fields.some(field=>{
          const original=field.normalize('NFC').toLowerCase();
          if(/(^|\s)phở(?=\s|$|[.,;:/()-])/u.test(original))return true;
          return !/(^|\s)phố(?=\s|$|[.,;:/()-])/u.test(original)&&pattern.test(normalize(field));
        }))selected.add(id);
      }else if(fields.some(field=>{
        const text=id==='mi'?normalize(field).replace(/\bbanh mi\b/g,'banh'):normalize(field);
        return pattern.test(text)||(id==='mi'&&text.trim()==='mi');
      }))selected.add(id);
    }
  }
  if(selected.has('com-tam'))selected.add('com');
  if(selected.has('bun-bo'))selected.add('bun');
  if(place.kind==='coffee')selected.add('ca-phe');
  if(place.kind==='drinks')selected.add('do-uong');
  return selected.size?[...selected]:['khac'];
}

export function cuisineLabels(place:Pick<Place,'name'|'dishes'|'tags'|'kind'|'cuisineTags'>){return getCuisineIds(place).map(id=>CUISINE_LABELS[id]);}

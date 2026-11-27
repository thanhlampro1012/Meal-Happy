import assert from 'node:assert/strict';
import {build} from 'esbuild';
import {mkdtemp,writeFile,rm} from 'node:fs/promises';
import {tmpdir} from 'node:os';
import {join} from 'node:path';
const dir=await mkdtemp(join(tmpdir(),'hen-discovery-'));
let passed=0;
const check=(label,run)=>{run();passed++;console.log(`PASS ${label}`);};
try{
  const bundled=await build({stdin:{contents:"export * from './app/lib/discovery';export * from './app/lib/cuisines';",resolveDir:process.cwd(),loader:'ts'},bundle:true,format:'esm',platform:'node',write:false});
  const file=join(dir,'discovery.mjs');await writeFile(file,bundled.outputFiles[0].contents);
  const {DEFAULT_FILTERS,filterPlaces,getCuisineIds,normalizeQuery,activeFilterCount}=await import(file);
  const place=(id,overrides={})=>({id,name:id,kind:'food',area:'Quận 3',address:'12 Võ Văn Tần, Quận 3',addressSource:'Test',mapUrl:'',description:'',dishes:[],budgetMin:30000,budgetMax:50000,tags:[],sources:[],curated:false,checkedAt:'',...overrides});
  const list=[
    place('com',{name:'Cơm tấm Sườn Bì',cuisineTags:['com-tam'],dishes:['Cơm tấm'],tags:['Vừa túi tiền'],budgetMax:40000}),
    place('pho',{name:'Phở Gà Cô Mai',cuisineTags:['pho'],dishes:['Phở gà'],budgetMax:50000}),
    place('bun',{name:'Bún bò Huế',cuisineTags:['bun-bo'],dishes:['Bún bò'],area:'Quận 1',address:'20 Nguyễn Trãi, Quận 1',budgetMax:60000}),
    place('zero',{name:'Quán chưa ghi giá',cuisineTags:['pho'],budgetMin:0,budgetMax:0}),
    place('coffee',{name:'Cà phê sữa',kind:'coffee',budgetMax:35000,cuisineTags:['ca-phe']}),
  ];
  const filters=change=>({...DEFAULT_FILTERS,cuisines:[],...change});
  const ids=(change,view='explore',prefs={})=>filterPlaces(list,prefs,view,filters(change)).map(place=>place.id);
  check('broad rice and noodle filters include their specific subtypes',()=>{
    assert.ok(getCuisineIds(list[0]).includes('com'));
    assert.ok(getCuisineIds(list[2]).includes('bun'));
    assert.deepEqual(ids({cuisines:['com']}),['com']);
    assert.deepEqual(ids({cuisines:['bun']}),['bun']);
  });
  check('multiple cuisine choices use OR while district, kind and budget use AND',()=>{
    assert.deepEqual(ids({kind:'food',cuisines:['com-tam','pho'],area:'Quận 3',budget:100000,people:2}),['com','pho']);
    assert.deepEqual(ids({kind:'food',cuisines:['com-tam','pho'],area:'Quận 3',budget:90000,people:2}),['com']);
    assert.deepEqual(ids({kind:'coffee',cuisines:['com-tam','pho']}),[]);
  });
  check('bounded budgets apply the correct head count and never treat unknown zero prices as free',()=>{
    assert.deepEqual(ids({cuisines:['pho'],budget:50000,people:1}),['pho']);
    assert.deepEqual(ids({cuisines:['pho'],budget:50000,people:2}),[]);
    assert.deepEqual(ids({cuisines:['pho'],budget:0}),['pho','zero']);
    assert.equal(ids({budget:500000}).includes('zero'),false);
  });
  check('search handles Vietnamese without accents, swapped word order, extra spaces and district shorthand',()=>{
    assert.equal(normalizeQuery('  phở   Q.3  '),'pho quan 3');
    assert.deepEqual(ids({query:'ga q3 pho'}),['pho']);
    assert.deepEqual(ids({query:'  q.3   sườn CƠM '}),['com']);
    assert.deepEqual(ids({query:'q1 bun bo'}),['bun']);
  });
  check('district search does not match a digit from an unrelated street number',()=>{
    assert.deepEqual(ids({query:'pho quan 1'}),[]);
    assert.deepEqual(ids({query:'pho q1'}),[]);
    const districts=[place('one',{area:'Quận 1',address:'99 Nguyễn Trãi, Quận 1'}),place('twelve',{area:'Quận 12',address:'1 Tô Ký, Quận 12'})];
    assert.deepEqual(filterPlaces(districts,{},'explore',filters({query:'q1'})).map(place=>place.id),['one']);
    assert.deepEqual(filterPlaces(districts,{},'explore',filters({query:'q12'})).map(place=>place.id),['twelve']);
  });
  check('saved, visited and mood filters combine with discovery choices',()=>{
    const pref={saved:true,status:'visited',note:'',myRating:0,partnerRating:0,visitedAt:'2026-11-20'};
    const prefs={com:pref,pho:{...pref,status:'want'}};
    assert.deepEqual(ids({cuisines:['com','pho']},'saved',prefs),['com','pho']);
    assert.deepEqual(ids({},'journal',prefs),['com']);
    assert.deepEqual(ids({status:'want'},'saved',prefs),['pho']);
    assert.deepEqual(ids({mood:'Vừa túi tiền'}),['com']);
  });
  check('sorts are deterministic and leave the saved catalog and preference records intact',()=>{
    const before=JSON.stringify(list);
    assert.deepEqual(ids({sort:'budget'}),['coffee','com','pho','bun','zero']);
    const rated=[place('few',{community:{score:4.5,count:10}}),place('unrated'),place('more',{community:{score:4.5,count:100}}),place('best',{community:{score:4.8,count:8}})];
    assert.deepEqual(filterPlaces(rated,{},'explore',filters({sort:'rating'})).map(place=>place.id),['best','more','few','unrated']);
    assert.equal(rated[0].id,'few');
    const named=[place('ten',{name:'Quán 10'}),place('two',{name:'Quán 2'}),place('a',{name:'An'})];
    const prefs={two:{saved:true,status:'want',note:'Giữ nguyên',myRating:0,partnerRating:0,visitedAt:''}};
    const originalPrefs=structuredClone(prefs);
    assert.deepEqual(filterPlaces(named,prefs,'explore',filters({sort:'name'})).map(place=>place.id),['a','two','ten']);
    assert.deepEqual(named.map(place=>place.id),['ten','two','a']);
    assert.deepEqual(prefs,originalPrefs);
    assert.equal(JSON.stringify(list),before);
    assert.equal(activeFilterCount(filters({query:'   ',cuisines:['com','pho'],budget:50000,area:'Quận 3'})),3);
  });
  check('legacy custom places infer cuisine from actual menus and explicit tags take precedence',()=>{
    const old=place('old',{name:'Quán gia đình',dishes:['Cơm tấm sườn bì','Bún bò Huế','Phở gà']});
    const inferred=getCuisineIds(old);
    for(const id of ['com-tam','com','bun-bo','bun','pho'])assert.ok(inferred.includes(id),id);
    assert.deepEqual(getCuisineIds({...old,cuisineTags:['chay']}),['chay']);
    assert.deepEqual(getCuisineIds({...old,cuisineTags:[]}),inferred);
    const fromTags=getCuisineIds(place('tagged',{name:'Quán gia đình',tags:['Mì Quảng','Món chay']}));
    assert.ok(fromTags.includes('mi'));
    assert.ok(fromTags.includes('chay'));
  });
  check('a legacy menu containing the standalone dish Phở still appears under the phở filter',()=>{
    assert.ok(getCuisineIds(place('plain-pho',{name:'Quán gia đình',dishes:['Phở']})).includes('pho'));
    assert.equal(getCuisineIds(place('walking-street',{name:'Cà phê Phố đi bộ Nguyễn Huệ',dishes:['Cà phê']})).includes('pho'),false);
  });
  check('legacy noodle dishes are recognized without classifying chicken baguettes as noodles',()=>{
    const bread=getCuisineIds(place('bread',{name:'Quán gia đình',dishes:['Bánh mì gà']}));
    assert.ok(bread.includes('banh-mi'));
    assert.equal(bread.includes('mi'),false);
    assert.ok(getCuisineIds(place('noodles',{name:'Quán gia đình',dishes:['Mì']})).includes('mi'));
  });
  check('phở search excludes phố in an address and phô mai on a pizza menu',()=>{
    const candidates=[place('pho',{name:'Phở Minh',cuisineTags:['pho'],area:'Quận 1'}),place('cheese',{name:'Pizza ngon',dishes:['Pizza phô mai'],cuisineTags:['pizza'],area:'Quận 1',address:'Thành phố Hồ Chí Minh'}),place('city',{name:'Cà phê Phố',dishes:['Cà phê'],kind:'coffee',area:'Quận 1',address:'Thành phố Hồ Chí Minh'})];
    for(const query of ['pho q1','phở quận 1'])assert.deepEqual(filterPlaces(candidates,{},'explore',filters({query})).map(place=>place.id),['pho']);
    assert.deepEqual(filterPlaces(candidates,{},'explore',filters({query:'pho mai'})).map(place=>place.id),['cheese']);
  });
  console.log(`${passed} discovery checks passed.`);
}finally{await rm(dir,{recursive:true,force:true});}

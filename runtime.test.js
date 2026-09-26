const fs=require('node:fs'),vm=require('node:vm'),assert=require('node:assert/strict');
const THREE={...require('./vendor/three.min.js')};THREE.WebGLRenderer=class{constructor(){this.shadowMap={}}setPixelRatio(){}setSize(){}render(){}clearDepth(){}};
const nodes=new Map(),context2d=new Proxy({}, {get:()=>()=>{}});function el(id){if(!nodes.has(id))nodes.set(id,{style:{},classList:{toggle(){}},children:[],value:'all',checked:false,open:false,getContext:()=>context2d,addEventListener(){},appendChild(n){this.children.push(n)},showModal(){this.open=true},close(){this.open=false}});return nodes.get(id)}
const ctx={THREE,document:{getElementById:el,createElement:()=>({getContext:()=>context2d}),addEventListener(){},body:{classList:{toggle(){}}}},window:{addEventListener(){}},innerWidth:1280,innerHeight:800,devicePixelRatio:1,performance:{now:()=>0},requestAnimationFrame(){},setTimeout(){},localStorage:{getItem:()=>null,setItem(){}},console,Math};vm.createContext(ctx);
for(const file of ['progression.js','maps.js','rebirth.js','combat.js','upgrade.js','game.js'])vm.runInContext(fs.readFileSync(file,'utf8'),ctx,{filename:file});const run=s=>vm.runInContext(s,ctx);
assert.equal(run('weapons.length'),100);assert(run('blocks.length')>300);assert.equal(run('upgrades.barrels.length'),4);
run('for(let i=0;i<10;i++)support(.016)');assert.equal(run('destroyed'),0,'No automatic collapse on load');
run('player.position.set(-3,0,0);pitch=0;yaw=0;attack()');assert(run('destroyed')>0,'Melee destroys nearby blocks');assert(run('progression.xp')>0n);
const before=run('destroyed');run('for(let i=0;i<150;i++)support(.016)');assert(run('destroyed')>before,'Unsupported columns collapse');
run('build();damageArea(upgrades.barrels[0].mesh.position,.6,4,new THREE.Vector3(0,0,-1))');assert.equal(run('upgrades.barrels[0].alive'),false);assert(run('upgrades.particles.length')>0);
run('build();selected=66;cooldown=0;attack()');assert.equal(run('upgrades.projectiles.length'),1);run('for(let i=0;i<240;i++)updateUpgrade(.02,true)');assert.equal(run('upgrades.projectiles.length'),0);assert(run('destroyed')>0,'Rocket impact damages wall');
run('build();upgrades.charge=100;player.position.set(-3,0,0);shockwave()');assert(run('destroyed')>0);assert(run('upgrades.charge')<100);
run('build();for(const b of blocks)shatter(b,new THREE.Vector3(1,0,0))');assert.equal(run('destroyed'),run('initialCount'));assert.equal(el('runDialog').open,true);assert(run('prestige.cleared.has(mapId)'));
assert(run('upgrades.particles.length')<=140);assert(run('fragments.length')<=260);
console.log('PASS: boot, stable structures, melee, collapse, XP, barrels, rockets, shockwave, clear rewards, bounded particles.');

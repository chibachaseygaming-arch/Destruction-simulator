const assert=require('node:assert/strict');
const {maps,layout}=require('./maps');const R=require('./rebirth');
assert.equal(maps.length,4);
const layouts=maps.map(m=>layout(m.id));assert.equal(new Set(layouts.map(x=>JSON.stringify(x))).size,4);
for(const blocks of layouts){assert(blocks.length>100);for(const b of blocks){assert(Math.abs(b.x)<20&&Math.abs(b.z)<17);assert(b.y>0);if(b.y>.35)assert(blocks.some(o=>Math.abs(o.x-b.x)<.7&&Math.abs(o.z-b.z)<.01&&Math.abs(o.y-(b.y-.68))<.01),'Every initial block must be supported');}}
const state=R.load({rebirths:2,clearedMaps:['works']});const p={level:100,xp:0n};assert(!R.reset(state,p,maps));assert.equal(state.count,2);
maps.forEach(m=>state.cleared.add(m.id));p.level=99;assert(!R.reset(state,p,maps));p.level=100;assert(R.reset(state,p,maps));assert.deepEqual(p,{level:1,xp:0n});assert.equal(state.count,3);assert.equal(state.cleared.size,0);assert.equal(R.multiplier(state),2.5);
assert.deepEqual([...R.load({rebirths:3,clearedMaps:['works','frost']}).cleared],['works','frost']);
console.log('PASS: four distinct supported maps, rebirth requirements, reset, permanent XP bonus, save loading.');


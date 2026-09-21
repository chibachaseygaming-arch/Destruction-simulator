(function(root){
 const load=s=>({count:Math.max(0,Math.floor(Number(s?.rebirths)||0)),cleared:new Set(Array.isArray(s?.clearedMaps)?s.clearedMaps:[])});
 const ready=(state,level,maps)=>level===100&&maps.every(m=>state.cleared.has(m.id));
 function reset(state,progression,maps){if(!ready(state,progression.level,maps))return false;state.count++;state.cleared.clear();progression.level=1;progression.xp=0n;return true;}
 const multiplier=state=>1+state.count*.5;
 const api={load,ready,reset,multiplier};if(typeof module==='object'&&module.exports)module.exports=api;else root.Rebirth=api;
})(globalThis);

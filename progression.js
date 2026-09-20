(function(root){
  'use strict';
  const required=level=>level===1?100n:160n+40n*BigInt(level-2);
  function load(saved={}){
    if(saved&&(saved.version===2||saved.version===3)){
      const level=Math.max(1,Math.min(100,Math.floor(Number(saved.level)||1)));
      let xp=0n;try{xp=BigInt(saved.xp)}catch{}
      if(saved.version===2){
        const oldRequired=level===1?100n:500n*(2n**BigInt(level-2));
        xp=xp*required(level)/oldRequired;
      }
      return {level,xp:level===100?0n:xp<0n?0n:xp%required(level)};
    }
    // Keep existing players' levels, unlocks, and percentage through their level.
    const old=Math.max(0,Math.floor(Number(saved?.xp)||0));
    const level=Math.min(100,1+Math.floor(old/100));
    return {level,xp:level===100?0n:required(level)*BigInt(old%100)/100n};
  }
  function award(state,amount){
    if(state.level===100)return;
    state.xp+=BigInt(amount);
    while(state.level<100&&state.xp>=required(state.level)){
      state.xp-=required(state.level);state.level++;
    }
    if(state.level===100)state.xp=0n;
  }
  const api={required,load,award};
  if(typeof module==='object'&&module.exports)module.exports=api;
  else root.Progression=api;
})(typeof globalThis!=='undefined'?globalThis:this);

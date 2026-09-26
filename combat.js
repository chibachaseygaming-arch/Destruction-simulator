(function(root){
 'use strict';
 function profile(name,index){
  let kind=index<20?'melee':index<49?'pulse':'bullet';
  if(index>=49){if(/Shotgun|Double Barrel/.test(name))kind='shotgun';else if(/Launcher|Missile|Marker|Supernova|World Eater|Final Argument/.test(name))kind='rocket';else if(/Gravity|Black Hole|Void/.test(name))kind='vortex';else if(/Laser|Railgun|Gauss|Photon|Neutron|Plasma|Tesla|Arc|Quantum/.test(name))kind='beam';}
  const power=2+Math.floor(index/6),radius={melee:1.7,pulse:3.1,bullet:.85,shotgun:1.1,rocket:5,beam:1.35,vortex:5}[kind]+index*.009;
  return {name,level:index+1,gun:index>=49,kind,power,radius,cooldown:{melee:.5,pulse:.8,bullet:/SMG|Machine|Minigun/.test(name)?.09:.24,shotgun:.7,rocket:1.1,beam:.35,vortex:1.4}[kind],color:{melee:'#d3e1e7',pulse:'#9eff5d',bullet:'#ffe6a0',shotgun:'#ffb66e',rocket:'#ff784a',beam:'#62dcff',vortex:'#c094ff'}[kind]};
 }
 function rank(count){return count>=50?'UNSTOPPABLE':count>=25?'DEMOLITION EXPERT':count>=10?'CHAIN REACTION':'KEEP IT GOING';}
 const api={profile,rank};if(typeof module==='object'&&module.exports)module.exports=api;else root.Combat=api;
})(globalThis);

const assert=require('node:assert/strict');const {profile}=require('./combat');
for(const [name,index,kind] of [['The Hammer',0,'melee'],['Gravity Glove',20,'pulse'],['Pistol',49,'bullet'],['Pump Shotgun',53,'shotgun'],['Rocket Launcher',66,'rocket'],['Railgun',73,'beam'],['Black Hole Gun',91,'vortex']]){const w=profile(name,index);assert.equal(w.kind,kind);assert.equal(w.gun,index>=49);assert(w.cooldown>0&&w.radius>0&&w.power>0)}
console.log('PASS: distinct weapon families, level-50 ranged boundary and valid combat tuning.');

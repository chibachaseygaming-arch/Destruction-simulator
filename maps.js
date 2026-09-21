(function(root){
 const maps=[
  {id:'works',name:'The Works',description:'Brick factory, concrete walls and stacked cargo.',sky:'#8bada5',ground:'#8b9584',color:'#b9895d'},
  {id:'canyon',name:'Canyon Outpost',description:'Sandstone towers and a desert fortress.',sky:'#dab88b',ground:'#bc9662',color:'#c6814e'},
  {id:'frost',name:'Frost Station',description:'Frozen research domes and ice barricades.',sky:'#abcbdc',ground:'#d2e2e8',color:'#79b8d0'},
  {id:'neon',name:'Neon District',description:'Four city towers and a bright central monument.',sky:'#28354e',ground:'#454c64',color:'#947ec2'}
 ];
 function layout(id){const out=[];const put=(x,row,z,color)=>out.push({x,y:.34+row*.68,z,color});
 const wall=(x,z,width,height,color)=>{for(let r=0;r<height;r++)for(let c=0;c<width;c++)put(x+c*1.15,r,z,color)};
 if(id==='works'){wall(-5.1,-2,10,8,'#b9895d');for(const x of [-5.2,5.2])for(let r=0;r<8;r++)for(let c=1;c<6;c++)put(x,r,-2-c*.68,'#cfaa76');wall(-12,5,7,5,'#a6b0a0');wall(8,2,5,6,'#789a8f');wall(-2,-12,5,4,'#bd8e52');}
 if(id==='canyon'){for(const x of [-10,7])for(const z of [-9,2]){wall(x,z,4,9,'#c6814e');wall(x,z-1.4,4,9,'#d5a767')}wall(-5,-12,9,5,'#c6814e');wall(-4,3,7,3,'#d5a767');}
 if(id==='frost'){for(const cx of [-9,7])for(let r=0;r<7;r++){let width=7-Math.floor(r/2);for(let c=0;c<width;c++)put(cx+(c-(width-1)/2)*1.15,r,-5,'#79b8d0')}wall(-13,3,6,4,'#cee5ea');wall(6,4,6,4,'#cee5ea');wall(-4,-12,8,8,'#a3cddf');}
 if(id==='neon'){for(const x of [-11,7])for(const z of [-10,2])for(let r=0;r<11;r++)for(let c=0;c<4;c++)put(x+c*1.15,r,z,r%3===0?'#71d4c3':'#947ec2');for(let r=0;r<7;r++)for(let c=0;c<7-r;c++)put((c-(6-r)/2)*1.15,r,-3,'#de8db9');}
 return out;
 }
 const api={maps,layout};if(typeof module==='object'&&module.exports)module.exports=api;else root.GameMaps=api;
})(globalThis);

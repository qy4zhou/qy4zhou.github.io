
(function(compId){var _=null,y=true,n=false,x1='6.0.0',rz='rotateZ',x2='5.0.0',x4='rgba(0,0,0,0)',e30='${Stage}',e20='${par1_tree_front}',g='image',b='block',e27='${par1_smoke1}',e31='${par1_cloud3}',i='none',x3='6.0.0.400',e25='${par1_temple}',o='opacity',lf='left',e32='${par1_monk3}',w='width',d='display',e28='${par1_cloud2}',e29='${par1_monk1}',e26='${par1_tree_back}',e24='${par1_monk2}',e23='${par1_smoke2}',e21='${par1_cloud1}',tp='top',e22='${par1_person3}',h='height',x19='rgba(255,255,255,1)';var g15='par1_smoke2.png',g17='par1_monk2.png',g8='par1_cloud2.png',g6='par1_road.png',g18='par1_person.png',g7='par1_cloud3.png',g16='par1_tree_back.png',g13='par1_smoke1.png',g14='par1_monk1.png',g12='par1_monk3.png',g10='par1_temple.png',g11='par1_tree_front.png',g5='par1_grass.jpg',g9='par1_cloud1.png';var im='images/',aud='media/',vid='media/',js='js/',fonts={},opts={'gAudioPreloadPreference':'auto','gVideoPreloadPreference':'auto'},resources=[],scripts=[],symbols={"stage":{v:x1,mv:x2,b:x3,stf:i,cg:i,rI:n,cn:{dom:[{id:'par1_grass',t:g,r:['0px','0px','720px','522px','auto','auto'],f:[x4,im+g5,'0px','0px']},{id:'par1_road2',t:g,r:['0px','309px','720px','213px','auto','auto'],f:[x4,im+g6,'0px','0px']},{id:'par1_cloud3',t:g,r:['42px','26px','149px','107px','auto','auto'],overflow:'visible',o:'0.7',f:[x4,im+g7,'0px','0px','100%','100%','no-repeat'],tf:[[],['-8']]},{id:'par1_cloud2',t:g,r:['209px','34px','165px','107px','auto','auto'],o:'1',f:[x4,im+g8,'0px','0px']},{id:'par1_cloud1',t:g,r:['430px','40px','261px','107px','auto','auto'],o:'0.69918653658537',f:[x4,im+g9,'0px','0px']},{id:'par1_temple',t:g,r:['172px','64px','355px','282px','auto','auto'],f:[x4,im+g10,'0px','0px']},{id:'par1_tree_front',t:g,r:['457px','529px','306px','350px','auto','auto'],o:'1',f:[x4,im+g11,'0px','0px']},{id:'par1_monk3',v:i,t:g,r:['519px','302px','20px','42px','auto','auto'],overflow:'visible',o:'1',f:[x4,im+g12,'0px','0px']},{id:'par1_smoke1',v:i,t:g,r:['75px','240px','539px','189px','auto','auto'],overflow:'visible',o:'0.31707317073171',f:[x4,im+g13,'0px','0px']},{id:'par1_monk1',v:i,t:g,r:['123px','327px','57px','46px','auto','auto'],f:[x4,im+g14,'0px','0px']},{id:'par1_smoke2',v:i,t:g,r:['75px','253px','519px','179px','auto','auto'],o:'0.20325203252033',f:[x4,im+g15,'0px','0px']},{id:'par1_tree_back',t:g,r:['4px','541px','180px','179px','auto','auto'],o:'1',f:[x4,im+g16,'0px','0px']},{id:'par1_monk2',v:i,t:g,r:['220px','325px','35px','91px','auto','auto'],f:[x4,im+g17,'0px','0px']},{id:'par1_person3',v:i,t:g,r:['529px','531px','43px','189px','auto','auto'],f:[x4,im+g18,'0px','0px']}],style:{'${Stage}':{isStage:true,r:['null','null','720px','522px','auto','auto'],overflow:'hidden',f:[x19]}}},tt:{d:3000,a:y,data:[["eid295",rz,1864,34,"linear",e20,'0deg','-4deg'],["eid287",rz,1897,66,"linear",e20,'-4deg','0deg'],["eid321",h,3000,0,"linear",e21,'107px','107px'],["eid340",tp,2500,500,"linear",e22,'531px','316px'],["eid227",o,1894,36,"linear",e23,'0.20325203252033','0.84010872899032'],["eid230",o,1930,180,"linear",e23,'0.84010872899032','1'],["eid226",o,2110,390,"linear",e23,'1','0'],["eid296",rz,1828,66,"linear",e24,'0deg','-7deg'],["eid279",rz,1894,36,"linear",e24,'-7deg','0deg'],["eid86",lf,1537,357,"linear",e25,'182px','172px'],["eid294",rz,1894,36,"linear",e26,'0deg','5deg'],["eid285",rz,1930,70,"linear",e26,'5deg','0deg'],["eid206",o,2064,230,"linear",e27,'0.3170729875564575','1'],["eid224",o,2294,116,"linear",e27,'1','0.78648648223257'],["eid225",o,2410,90,"linear",e27,'0.78648648223257','0'],["eid336",h,1500,1500,"linear",e28,'107px','117px'],["eid147",o,0,1500,"easeInOutExpo",e28,'1','0.69918699186992'],["eid148",o,1500,1500,"easeInOutExpo",e28,'0.699187','1'],["eid297",rz,1860,35,"linear",e29,'0deg','10deg'],["eid276",rz,1895,69,"linear",e29,'10deg','0deg'],["eid318",h,1500,0,"linear",e30,'522px','522px'],["eid195",d,0,0,"linear",e29,i,i],["eid202",d,624,0,"linear",e29,i,b],["eid150",o,0,3000,"easeInOutExpo",e21,'0.699187','1'],["eid292",o,0,0,"linear",e26,'1','1'],["eid293",o,380,0,"linear",e26,'1','1'],["eid317",w,1500,0,"linear",e30,'720px','720px'],["eid324",lf,1500,0,"linear",e28,'209px','209px'],["eid328",lf,3000,0,"linear",e28,'209px','209px'],["eid33",tp,1537,357,"linear",e25,'-314px','64px'],["eid291",o,70,0,"linear",e20,'1','1'],["eid288",tp,1828,66,"linear",e24,'325px','330px'],["eid243",tp,1894,36,"linear",e24,'320px','330px'],["eid258",tp,1863,34,"linear",e20,'79px','74px'],["eid262",tp,1897,66,"linear",e20,'74px','79px'],["eid133",w,0,1500,"easeInOutExpo",e31,'127px','130px'],["eid138",w,1500,1500,"easeInOutExpo",e31,'130px','149px'],["eid298",rz,1864,34,"linear",e32,'0deg','9deg'],["eid282",rz,1897,66,"linear",e32,'9deg','0deg'],["eid197",d,70,0,"linear",e32,i,i],["eid198",d,1290,0,"linear",e32,i,b],["eid242",tp,1894,36,"linear",e26,'188px','182px'],["eid244",tp,1930,70,"linear",e26,'182px','188px'],["eid320",tp,1500,0,"linear",e21,'40px','40px'],["eid323",w,3000,0,"linear",e21,'261px','261px'],["eid257",tp,1863,34,"linear",e32,'302px','283px'],["eid261",tp,1897,66,"linear",e32,'283px','302px'],["eid132",h,0,1500,"easeInOutExpo",e31,'91px','90px'],["eid137",h,1500,1500,"easeInOutExpo",e31,'90px','107px'],["eid311",d,0,0,"linear",e22,i,i],["eid310",d,2500,0,"linear",e22,i,b],["eid338",w,1500,1500,"linear",e28,'165px','180px'],["eid203",d,0,0,"linear",e27,i,i],["eid204",d,2064,0,"linear",e27,i,b],["eid201",d,0,0,"linear",e24,i,i],["eid200",d,1000,0,"linear",e24,i,b],["eid249",tp,1860,35,"linear",e29,'327px','310px'],["eid250",tp,1895,69,"linear",e29,'310px','327px'],["eid229",h,1894,0,"linear",e24,'91px','91px'],["eid70",w,1894,0,"linear",e25,'355px','355px'],["eid69",h,1610,0,"linear",e25,'282px','282px'],["eid142",o,0,3000,"easeInOutExpo",e31,'0.7','1'],["eid312",lf,2500,500,"easeOutBack",e22,'529px','581px'],["eid131","location",1500,0,"easeInOutExpo",e31,[[112.33,75.84,0,0,0,0,0],[112.33,75.84,0,0,0,0,0]]],["eid135","location",3000,0,"easeInOutExpo",e31,[[112.33,75.84,0,0,0,0,0],[112.33,75.84,0,0,0,0,0]]],["eid322",lf,1500,1500,"linear",e21,'430px','413px'],["eid337",tp,1500,1500,"linear",e28,'34px','24px'],["eid207",d,0,0,"linear",e23,i,i],["eid208",d,1894,0,"linear",e23,i,b]]}}};AdobeEdge.registerCompositionDefn(compId,symbols,fonts,scripts,resources,opts);})("EDGE-7068124");
(function($,Edge,compId){var Composition=Edge.Composition,Symbol=Edge.Symbol;Edge.registerEventBinding(compId,function($){
//Edge symbol: 'stage'
(function(symbolName){})("stage");
//Edge symbol end:'stage'
})})(AdobeEdge.$,AdobeEdge,"EDGE-7068124");

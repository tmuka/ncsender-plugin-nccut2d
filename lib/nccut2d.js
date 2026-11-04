(()=>{var fm=Object.create;var Ic=Object.defineProperty;var dm=Object.getOwnPropertyDescriptor;var pm=Object.getOwnPropertyNames;var mm=Object.getPrototypeOf,gm=Object.prototype.hasOwnProperty;var pe=(n,t,e)=>()=>{if(e)throw e[0];try{return n&&(t=n(n=0)),t}catch(i){throw e=[i],i}};var Iu=(n,t)=>()=>{try{return t||n((t={exports:{}}).exports,t),t.exports}catch(e){throw t=0,e}},Ru=(n,t)=>{for(var e in t)Ic(n,e,{get:t[e],enumerable:!0})},xm=(n,t,e,i)=>{if(t&&typeof t=="object"||typeof t=="function")for(let s of pm(t))!gm.call(n,s)&&s!==e&&Ic(n,s,{get:()=>t[s],enumerable:!(i=dm(t,s))||i.enumerable});return n};var Lu=(n,t,e)=>(e=n!=null?fm(mm(n)):{},xm(t||!n||!n.__esModule?Ic(e,"default",{value:n,enumerable:!0}):e,n));function Zo(n,t,e=.01){if(!(n>e))return 1;let i=2*Math.acos(Math.max(-1,Math.min(1,1-e/n)));return Math.max(2,Math.min(2e3,Math.ceil(Math.abs(t)/i)))}function Cs(n,t,e,i,s,o=!0){let c=s-i;o&&c<=0&&(c+=Math.PI*2),!o&&c>=0&&(c-=Math.PI*2);let a=Zo(e,c);return Array.from({length:a+1},(u,f)=>{let p=i+c*f/a;return[n+e*Math.cos(p),t+e*Math.sin(p)]})}function jo(n,t,e,i,s,o=0,c=Math.PI*2){let a=Math.hypot(e,i),u=Math.atan2(i,e),f=a*s,p=c-o;p<=0&&(p+=Math.PI*2);let x=Zo(a,p),m=Math.cos(u),_=Math.sin(u);return Array.from({length:x+1},(v,M)=>{let g=o+p*M/x,y=a*Math.cos(g),E=f*Math.sin(g);return[n+y*m-E*_,t+y*_+E*m]})}function Li(n,t,e,i,s=[n],o=.01,c=0){let a=Nu(t,n,i),u=Nu(e,n,i);if(c>16||Math.max(a,u)<=o)return s.push(i),s;let f=(g,y)=>[(g[0]+y[0])/2,(g[1]+y[1])/2],p=f(n,t),x=f(t,e),m=f(e,i),_=f(p,x),v=f(x,m),M=f(_,v);return Li(n,p,_,M,s,o,c+1),Li(M,v,m,i,s,o,c+1),s}function Nu(n,t,e){let i=e[0]-t[0],s=e[1]-t[1],o=Math.hypot(i,s);return o<1e-12?_i(n,t):Math.abs((n[0]-t[0])*s-(n[1]-t[1])*i)/o}function Du(n,t,e,i,s,o,c){if(!t||!e||n[0]===c[0]&&n[1]===c[1])return[n,c];t=Math.abs(t),e=Math.abs(e);let a=i*Math.PI/180,u=Math.cos(a),f=Math.sin(a),p=(n[0]-c[0])/2,x=(n[1]-c[1])/2,m=u*p+f*x,_=-f*p+u*x,v=m*m/(t*t)+_*_/(e*e);v>1&&(t*=Math.sqrt(v),e*=Math.sqrt(v));let M=t*t*e*e-t*t*_*_-e*e*m*m,g=Math.sqrt(Math.max(0,M/(t*t*_*_+e*e*m*m)));!!s==!!o&&(g=-g);let y=g*t*_/e,E=-g*e*m/t,P=u*y-f*E+(n[0]+c[0])/2,S=f*y+u*E+(n[1]+c[1])/2,L=(F,B,H,V)=>Math.atan2(F*V-B*H,F*H+B*V),T=L(1,0,(m-y)/t,(_-E)/e),C=L((m-y)/t,(_-E)/e,(-m-y)/t,(-_-E)/e);!o&&C>0&&(C-=Math.PI*2),o&&C<0&&(C+=Math.PI*2);let w=Zo(Math.max(t,e),C),N=[];for(let F=0;F<=w;F++){let B=T+C*F/w,H=t*Math.cos(B),V=e*Math.sin(B);N.push([u*H-f*V+P,f*H+u*V+S])}return N[0]=n,N[w]=c,N}function Lc(n){let t=1/0,e=1/0,i=-1/0,s=-1/0;for(let o of n)for(let[c,a]of o.pts)c<t&&(t=c),a<e&&(e=a),c>i&&(i=c),a>s&&(s=a);return Number.isFinite(t)?{x0:t,y0:e,x1:i,y1:s,w:i-t,h:s-e}:{x0:0,y0:0,x1:0,y1:0,w:0,h:0}}function rs(n,t,e=1e-6){let i=[];for(let s of n)(!i.length||_i(i[i.length-1],s)>e)&&i.push(s);return t&&i.length>2&&_i(i[0],i[i.length-1])>e&&i.push(i[0].slice()),i}function Uu(n,t=.05){let e=[],i=[];for(let a of n){if(a.closed||a.pts.length<2){e.push(a);continue}if(_i(a.pts[0],a.pts[a.pts.length-1])<=t&&a.pts.length>2){e.push({...a,closed:!0,pts:rs(a.pts.slice(0,-1).concat([a.pts[0]]),!0)});continue}i.push({...a,pts:a.pts.slice()})}let s=0,o=new Map;for(let a of i){let u=a.color+"|"+(a.layer||"");o.has(u)||o.set(u,[]),o.get(u).push(a)}let c=[];for(let a of o.values()){let u=new Array(a.length).fill(!1);for(let f=0;f<a.length;f++){if(u[f])continue;u[f]=!0;let p=a[f],x=!0;for(;x;){x=!1;let m=p.pts[0],_=p.pts[p.pts.length-1];for(let v=0;v<a.length;v++){if(u[v])continue;let M=a[v].pts,g=M[0],y=M[M.length-1];if(_i(_,g)<=t)p.pts.push(...M.slice(1));else if(_i(_,y)<=t)p.pts.push(...M.slice(0,-1).reverse());else if(_i(m,y)<=t)p.pts.unshift(...M.slice(0,-1));else if(_i(m,g)<=t)p.pts.unshift(...M.slice(1).reverse());else continue;u[v]=!0,s++,x=!0;break}}p.pts.length>2&&_i(p.pts[0],p.pts[p.pts.length-1])<=t&&(p.pts[p.pts.length-1]=p.pts[0].slice(),p.closed=!0),c.push(p)}}return{shapes:e.concat(c),joined:s}}var _i,Jo,Rc,Ou,Ni,wr,Fu,Er=pe(()=>{_i=(n,t)=>Math.hypot(t[0]-n[0],t[1]-n[1]);Jo=(n,t,e)=>{let i=Cs(n,t,e,0,Math.PI*2,!0);return i[i.length-1]=i[0].slice(),i};Rc=(n,t,e,i)=>Li(n,[n[0]+2/3*(t[0]-n[0]),n[1]+2/3*(t[1]-n[1])],[e[0]+2/3*(t[0]-e[0]),e[1]+2/3*(t[1]-e[1])],e,i);Ou=[1,0,0,1,0,0],Ni=(n,t)=>[n[0]*t[0]+n[2]*t[1],n[1]*t[0]+n[3]*t[1],n[0]*t[2]+n[2]*t[3],n[1]*t[2]+n[3]*t[3],n[0]*t[4]+n[2]*t[5]+n[4],n[1]*t[4]+n[3]*t[5]+n[5]],wr=(n,t)=>[n[0]*t[0]+n[2]*t[1]+n[4],n[1]*t[0]+n[3]*t[1]+n[5]];Fu=(n,t)=>n.map(e=>({...e,pts:e.pts.map(i=>wr(t,i))}))});function Nc(n){let t=[];for(let _ of String(n||"").matchAll(ym))t.push(_[1]||+_[2]);let e=[],i=0,s="",o=[0,0],c=[0,0],a=null,u=null,f="",p=()=>{let _=t[i++];if(typeof _!="number")throw new Error("bad path data");return _},x=()=>{let _=t[i];if(typeof _=="number"&&(_===0||_===1))return i++,_;if(typeof _=="number"){let v=String(_);return t.splice(i,1,+v[0],+v.slice(1)),i++,+v[0]}throw new Error("bad arc flag")},m=_=>{a&&a.length>1&&e.push({pts:a,closed:!1}),a=[_],c=_};for(;i<t.length;){if(typeof t[i]=="string")s=t[i++];else if(!s)throw new Error("path must start with M");let _=s===s.toLowerCase(),v=s.toUpperCase(),M=(g,y)=>_?[o[0]+g,o[1]+y]:[g,y];switch(v){case"M":{let g=M(p(),p());m(g),o=g,s=_?"l":"L",u=null;break}case"L":{let g=M(p(),p());a.push(g),o=g,u=null;break}case"H":{let g=p(),y=[_?o[0]+g:g,o[1]];a.push(y),o=y,u=null;break}case"V":{let g=p(),y=[o[0],_?o[1]+g:g];a.push(y),o=y,u=null;break}case"C":{let g=M(p(),p()),y=M(p(),p()),E=M(p(),p());Li(o,g,y,E,a),u=y,o=E;break}case"S":{let g=u&&"CS".includes(f)?[2*o[0]-u[0],2*o[1]-u[1]]:o,y=M(p(),p()),E=M(p(),p());Li(o,g,y,E,a),u=y,o=E;break}case"Q":{let g=M(p(),p()),y=M(p(),p());Rc(o,g,y,a),u=g,o=y;break}case"T":{let g=u&&"QT".includes(f)?[2*o[0]-u[0],2*o[1]-u[1]]:o,y=M(p(),p());Rc(o,g,y,a),u=g,o=y;break}case"A":{let g=p(),y=p(),E=p(),P=x(),S=x(),L=M(p(),p());a.push(...Du(o,g,y,E,P,S,L).slice(1)),o=L,u=null;break}case"Z":{a&&a.length>1&&(a.push(c.slice()),e.push({pts:a,closed:!0})),a=[c],o=c,u=null;break}default:throw new Error(`unknown path command ${s}`)}f=v,v==="Z"&&(s="")}return a&&a.length>1&&e.push({pts:a,closed:!1}),e}var ym,Bu=pe(()=>{Er();ym=/([MmLlHhVvCcSsQqTtAaZz])|(-?(?:\d+\.?\d*|\.\d+)(?:[eE][-+]?\d+)?)/g});function ku(n,t){return n<=9?t:n>=10&&n<=59?parseFloat(t):n>=60&&n<=99?parseInt(t):n>=100&&n<=109?t:n>=110&&n<=149?parseFloat(t):n>=160&&n<=179?parseInt(t):n>=210&&n<=239?parseFloat(t):n>=270&&n<=289?parseInt(t):n>=290&&n<=299?_m(t):n>=300&&n<=369?t:n>=370&&n<=389?parseInt(t):n>=390&&n<=399?t:n>=400&&n<=409?parseInt(t):n>=410&&n<=419?t:n>=420&&n<=429?parseInt(t):n>=430&&n<=439?t:n>=440&&n<=459?parseInt(t):n>=460&&n<=469?parseFloat(t):n>=470&&n<=481||n===999||n>=1e3&&n<=1009?t:n>=1010&&n<=1059?parseFloat(t):n>=1060&&n<=1071?parseInt(t):(console.log("WARNING: Group code does not have a defined type: %j",{code:n,value:t}),t)}function _m(n){if(n==="0")return!1;if(n==="1")return!0;throw TypeError("String '"+n+"' cannot be cast to Boolean type")}var Tr,zu=pe(()=>{Tr=class{constructor(t){this._pointer=0,this._eof=!1,this._data=t}next(){if(!this.hasNext())throw this._eof?new Error("Cannot call 'next' after EOF group has been read"):new Error("Unexpected end of input: EOF group not read before end of file. Ended on code "+this._data[this._pointer]);let t={code:parseInt(this._data[this._pointer])};return this._pointer++,t.value=ku(t.code,this._data[this._pointer].trim()),this._pointer++,t.code===0&&t.value==="EOF"&&(this._eof=!0),this.lastReadGroup=t,t}peek(){if(!this.hasNext())throw this._eof?new Error("Cannot call 'next' after EOF group has been read"):new Error("Unexpected end of input: EOF group not read before end of file. Ended on code "+this._data[this._pointer]);let t={code:parseInt(this._data[this._pointer])};return t.value=ku(t.code,this._data[this._pointer+1].trim()),t}rewind(t=1){this._pointer=this._pointer-t*2}hasNext(){return!(this._eof||this._pointer>this._data.length-2)}isEOF(){return this._eof}}});var Ko,Dc=pe(()=>{Ko=[0,16711680,16776960,65280,65535,255,16711935,16777215,8421504,12632256,16711680,16744319,13369344,13395558,10027008,10046540,8323072,8339263,4980736,4990502,16727808,16752511,13382400,13401958,10036736,10051404,8331008,8343359,4985600,4992806,16744192,16760703,13395456,13408614,10046464,10056268,8339200,8347455,4990464,4995366,16760576,16768895,13408512,13415014,10056192,10061132,8347392,8351551,4995328,4997670,16776960,16777087,13421568,13421670,10000384,10000460,8355584,8355647,5000192,5000230,12582656,14679935,10079232,11717734,7510016,8755276,6258432,7307071,3755008,4344870,8388352,12582783,6736896,10079334,5019648,7510092,4161280,6258495,2509824,3755046,4194048,10485631,3394560,8375398,2529280,6264908,2064128,5209919,1264640,3099686,65280,8388479,52224,6736998,38912,5019724,32512,4161343,19456,2509862,65343,8388511,52275,6737023,38950,5019743,32543,4161359,19475,2509871,65407,8388543,52326,6737049,38988,5019762,32575,4161375,19494,2509881,65471,8388575,52377,6737074,39026,5019781,32607,4161391,19513,2509890,65535,8388607,52428,6737100,39064,5019800,32639,4161407,19532,2509900,49151,8380415,39372,6730444,29336,5014936,24447,4157311,14668,2507340,32767,8372223,26316,6724044,19608,5010072,16255,4153215,9804,2505036,16383,8364031,13260,6717388,9880,5005208,8063,4149119,4940,2502476,255,8355839,204,6710988,152,5000344,127,4145023,76,2500172,4129023,10452991,3342540,8349388,2490520,6245528,2031743,5193599,1245260,3089996,8323327,12550143,6684876,10053324,4980888,7490712,4128895,6242175,2490444,3745356,12517631,14647295,10027212,11691724,7471256,8735896,6226047,7290751,3735628,4335180,16711935,16744447,13369548,13395660,9961624,9981080,8323199,8339327,4980812,4990540,16711871,16744415,13369497,13395634,9961586,9981061,8323167,8339311,4980793,4990530,16711807,16744383,13369446,13395609,9961548,9981042,8323135,8339295,4980774,4990521,16711743,16744351,13369395,13395583,9961510,9981023,8323103,8339279,4980755,4990511,3355443,5987163,8684676,11382189,14079702,16777215]});function vm(n){return Ko[n]}function oe(n){let t={};n.rewind();let e=n.next(),i=e.code;if(t.x=e.value,i+=10,e=n.next(),e.code!=i)throw new Error("Expected code for point value to be "+i+" but got "+e.code+".");return t.y=e.value,i+=10,e=n.next(),e.code!=i?(n.rewind(),t):(t.z=e.value,t)}function Ee(n,t,e){switch(t.code){case 0:n.type=t.value;break;case 5:n.handle=t.value;break;case 6:n.lineType=t.value;break;case 8:n.layer=t.value;break;case 48:n.lineTypeScale=t.value;break;case 60:n.visible=t.value===0;break;case 62:n.colorIndex=t.value,n.color=vm(Math.abs(t.value));break;case 67:n.inPaperSpace=t.value!==0;break;case 100:break;case 101:for(;t.code!=0;)t=e.next();e.rewind();break;case 330:n.ownerHandle=t.value;break;case 347:n.materialObjectHandle=t.value;break;case 370:n.lineweight=t.value;break;case 420:n.color=t.value;break;case 1e3:n.extendedData=n.extendedData||{},n.extendedData.customStrings=n.extendedData.customStrings||[],n.extendedData.customStrings.push(t.value);break;case 1001:n.extendedData=n.extendedData||{},n.extendedData.applicationName=t.value;break;default:return!1}return!0}var fn=pe(()=>{Dc()});function bm(n,t){var e=[],i=!1,s=!1,o=4;for(let a=0;a<=o;a++){for(var c={};!n.isEOF()&&!(t.code===0||s);){switch(t.code){case 10:case 11:case 12:case 13:if(i){s=!0;continue}c.x=t.value,i=!0;break;case 20:case 21:case 22:case 23:c.y=t.value;break;case 30:case 31:case 32:case 33:c.z=t.value;break;default:return e}t=n.next()}e.push(c),i=!1,s=!1}return n.rewind(),e}var Ar,Vu=pe(()=>{fn();Ar=class{constructor(){this.ForEntityName="3DFACE"}parseEntity(t,e){let i={type:e.value,vertices:[]};for(e=t.next();!t.isEOF()&&e.code!==0;){switch(e.code){case 70:i.shape=(e.value&1)===1,i.hasContinuousLinetypePattern=(e.value&128)===128;break;case 10:i.vertices=bm(t,e),e=t.lastReadGroup;break;default:Ee(i,e,t);break}e=t.next()}return i}}});var Pr,Hu=pe(()=>{fn();Pr=class{constructor(){this.ForEntityName="ARC"}parseEntity(t,e){let i={type:e.value};for(e=t.next();!t.isEOF()&&e.code!==0;){switch(e.code){case 10:i.center=oe(t);break;case 40:i.radius=e.value;break;case 50:i.startAngle=Math.PI/180*e.value;break;case 51:i.endAngle=Math.PI/180*e.value,i.angleLength=i.endAngle-i.startAngle;break;case 210:i.extrusionDirectionX=e.value;break;case 220:i.extrusionDirectionY=e.value;break;case 230:i.extrusionDirectionZ=e.value;break;default:Ee(i,e,t);break}e=t.next()}return i}}});var Cr,Gu=pe(()=>{fn();Cr=class{constructor(){this.ForEntityName="ATTDEF"}parseEntity(t,e){var i={type:e.value,scale:1,textStyle:"STANDARD"};for(e=t.next();!t.isEOF()&&e.code!==0;){switch(e.code){case 1:i.text=e.value;break;case 2:i.tag=e.value;break;case 3:i.prompt=e.value;break;case 7:i.textStyle=e.value;break;case 10:i.startPoint=oe(t);break;case 11:i.endPoint=oe(t);break;case 39:i.thickness=e.value;break;case 40:i.textHeight=e.value;break;case 41:i.scale=e.value;break;case 50:i.rotation=e.value;break;case 51:i.obliqueAngle=e.value;break;case 70:i.invisible=!!(e.value&1),i.constant=!!(e.value&2),i.verificationRequired=!!(e.value&4),i.preset=!!(e.value&8);break;case 71:i.backwards=!!(e.value&2),i.mirrored=!!(e.value&4);break;case 72:i.horizontalJustification=e.value;break;case 73:i.fieldLength=e.value;break;case 74:i.verticalJustification=e.value;break;case 100:break;case 210:i.extrusionDirectionX=e.value;break;case 220:i.extrusionDirectionY=e.value;break;case 230:i.extrusionDirectionZ=e.value;break;default:Ee(i,e,t);break}e=t.next()}return i}}});var Ir,Xu=pe(()=>{fn();Ir=class{constructor(){this.ForEntityName="CIRCLE"}parseEntity(t,e){let i={type:e.value};for(e=t.next();!t.isEOF()&&e.code!==0;){switch(e.code){case 10:i.center=oe(t);break;case 40:i.radius=e.value;break;case 50:i.startAngle=Math.PI/180*e.value;break;case 51:let s=Math.PI/180*e.value;s<i.startAngle?i.angleLength=s+2*Math.PI-i.startAngle:i.angleLength=s-i.startAngle,i.endAngle=s;break;default:Ee(i,e,t);break}e=t.next()}return i}}});var Rr,Wu=pe(()=>{fn();Rr=class{constructor(){this.ForEntityName="DIMENSION"}parseEntity(t,e){let i={type:e.value};for(e=t.next();!t.isEOF()&&e.code!==0;){switch(e.code){case 2:i.block=e.value;break;case 10:i.anchorPoint=oe(t);break;case 11:i.middleOfText=oe(t);break;case 12:i.insertionPoint=oe(t);break;case 13:i.linearOrAngularPoint1=oe(t);break;case 14:i.linearOrAngularPoint2=oe(t);break;case 15:i.diameterOrRadiusPoint=oe(t);break;case 16:i.arcPoint=oe(t);break;case 70:i.dimensionType=e.value;break;case 71:i.attachmentPoint=e.value;break;case 42:i.actualMeasurement=e.value;break;case 1:i.text=e.value;break;case 50:i.angle=e.value;break;default:Ee(i,e,t);break}e=t.next()}return i}}});var Lr,Yu=pe(()=>{fn();Lr=class{constructor(){this.ForEntityName="ELLIPSE"}parseEntity(t,e){let i={type:e.value};for(e=t.next();!t.isEOF()&&e.code!==0;){switch(e.code){case 10:i.center=oe(t);break;case 11:i.majorAxisEndPoint=oe(t);break;case 40:i.axisRatio=e.value;break;case 41:i.startAngle=e.value;break;case 42:i.endAngle=e.value;break;case 2:i.name=e.value;break;default:Ee(i,e,t);break}e=t.next()}return i}}});var Nr,$u=pe(()=>{fn();Nr=class{constructor(){this.ForEntityName="INSERT"}parseEntity(t,e){let i={type:e.value};for(e=t.next();!t.isEOF()&&e.code!==0;){switch(e.code){case 2:i.name=e.value;break;case 41:i.xScale=e.value;break;case 42:i.yScale=e.value;break;case 43:i.zScale=e.value;break;case 10:i.position=oe(t);break;case 50:i.rotation=e.value;break;case 70:i.columnCount=e.value;break;case 71:i.rowCount=e.value;break;case 44:i.columnSpacing=e.value;break;case 45:i.rowSpacing=e.value;break;case 210:i.extrusionDirection=oe(t);break;default:Ee(i,e,t);break}e=t.next()}return i}}});var Dr,qu=pe(()=>{fn();Dr=class{constructor(){this.ForEntityName="LINE"}parseEntity(t,e){let i={type:e.value,vertices:[]};for(e=t.next();!t.isEOF()&&e.code!==0;){switch(e.code){case 10:i.vertices.unshift(oe(t));break;case 11:i.vertices.push(oe(t));break;case 210:i.extrusionDirection=oe(t);break;case 100:break;default:Ee(i,e,t);break}e=t.next()}return i}}});function Mm(n,t){if(!n||n<=0)throw Error("n must be greater than 0 verticies");let e=[],i=!1,s=!1,o=t.lastReadGroup;for(let c=0;c<n;c++){let a={};for(;!t.isEOF()&&!(o.code===0||s);){switch(o.code){case 10:if(i){s=!0;continue}a.x=o.value,i=!0;break;case 20:a.y=o.value;break;case 30:a.z=o.value;break;case 40:a.startWidth=o.value;break;case 41:a.endWidth=o.value;break;case 42:o.value!=0&&(a.bulge=o.value);break;default:return t.rewind(),i&&e.push(a),t.rewind(),e}o=t.next()}e.push(a),i=!1,s=!1}return t.rewind(),e}var Or,Zu=pe(()=>{fn();Or=class{constructor(){this.ForEntityName="LWPOLYLINE"}parseEntity(t,e){let i={type:e.value,vertices:[]},s=0;for(e=t.next();!t.isEOF()&&e.code!==0;){switch(e.code){case 38:i.elevation=e.value;break;case 39:i.depth=e.value;break;case 70:i.shape=(e.value&1)===1,i.hasContinuousLinetypePattern=(e.value&128)===128;break;case 90:s=e.value;break;case 10:i.vertices=Mm(s,t);break;case 43:e.value!==0&&(i.width=e.value);break;case 210:i.extrusionDirectionX=e.value;break;case 220:i.extrusionDirectionY=e.value;break;case 230:i.extrusionDirectionZ=e.value;break;default:Ee(i,e,t);break}e=t.next()}return i}}});var Fr,Ju=pe(()=>{fn();Fr=class{constructor(){this.ForEntityName="MTEXT"}parseEntity(t,e){let i={type:e.value};for(e=t.next();!t.isEOF()&&e.code!==0;){switch(e.code){case 3:i.text?i.text+=e.value:i.text=e.value;break;case 1:i.text?i.text+=e.value:i.text=e.value;break;case 10:i.position=oe(t);break;case 11:i.directionVector=oe(t);break;case 40:i.height=e.value;break;case 41:i.width=e.value;break;case 50:i.rotation=e.value;break;case 71:i.attachmentPoint=e.value;break;case 72:i.drawingDirection=e.value;break;default:Ee(i,e,t);break}e=t.next()}return i}}});var Ur,ju=pe(()=>{fn();Ur=class{constructor(){this.ForEntityName="POINT"}parseEntity(t,e){let s={type:e.value};for(e=t.next();!t.isEOF()&&e.code!==0;){switch(e.code){case 10:s.position=oe(t);break;case 39:s.thickness=e.value;break;case 210:s.extrusionDirection=oe(t);break;case 100:break;default:Ee(s,e,t);break}e=t.next()}return s}}});var Br,Ku=pe(()=>{fn();Br=class{constructor(){this.ForEntityName="VERTEX"}parseEntity(t,e){var i={type:e.value};for(e=t.next();!t.isEOF()&&e.code!==0;){switch(e.code){case 10:i.x=e.value;break;case 20:i.y=e.value;break;case 30:i.z=e.value;break;case 40:break;case 41:break;case 42:e.value!=0&&(i.bulge=e.value);break;case 70:i.curveFittingVertex=(e.value&1)!==0,i.curveFitTangent=(e.value&2)!==0,i.splineVertex=(e.value&8)!==0,i.splineControlPoint=(e.value&16)!==0,i.threeDPolylineVertex=(e.value&32)!==0,i.threeDPolylineMesh=(e.value&64)!==0,i.polyfaceMeshVertex=(e.value&128)!==0;break;case 50:break;case 71:i.faceA=e.value;break;case 72:i.faceB=e.value;break;case 73:i.faceC=e.value;break;case 74:i.faceD=e.value;break;default:Ee(i,e,t);break}e=t.next()}return i}}});function Sm(n,t){let e=new Br,i=[];for(;!n.isEOF();)if(t.code===0){if(t.value==="VERTEX")i.push(e.parseEntity(n,t)),t=n.lastReadGroup;else if(t.value==="SEQEND"){wm(n,t);break}}return i}function wm(n,t){let e={type:t.value};for(t=n.next();!n.isEOF()&&t.code!=0;)Ee(e,t,n),t=n.next();return e}var kr,Qu=pe(()=>{fn();Ku();kr=class{constructor(){this.ForEntityName="POLYLINE"}parseEntity(t,e){var i={type:e.value,vertices:[]};for(e=t.next();!t.isEOF()&&e.code!==0;){switch(e.code){case 10:break;case 20:break;case 30:break;case 39:i.thickness=e.value;break;case 40:break;case 41:break;case 70:i.shape=(e.value&1)!==0,i.includesCurveFitVertices=(e.value&2)!==0,i.includesSplineFitVertices=(e.value&4)!==0,i.is3dPolyline=(e.value&8)!==0,i.is3dPolygonMesh=(e.value&16)!==0,i.is3dPolygonMeshClosed=(e.value&32)!==0,i.isPolyfaceMesh=(e.value&64)!==0,i.hasContinuousLinetypePattern=(e.value&128)!==0;break;case 71:break;case 72:break;case 73:break;case 74:break;case 75:break;case 210:i.extrusionDirection=oe(t);break;default:Ee(i,e,t);break}e=t.next()}return i.vertices=Sm(t,e),i}}});var zr,tf=pe(()=>{fn();zr=class{constructor(){this.ForEntityName="SOLID"}parseEntity(t,e){let i={type:e.value,points:[]};for(e=t.next();!t.isEOF()&&e.code!==0;){switch(e.code){case 10:i.points[0]=oe(t);break;case 11:i.points[1]=oe(t);break;case 12:i.points[2]=oe(t);break;case 13:i.points[3]=oe(t);break;case 210:i.extrusionDirection=oe(t);break;default:Ee(i,e,t);break}e=t.next()}return i}}});var Vr,ef=pe(()=>{fn();Vr=class{constructor(){this.ForEntityName="SPLINE"}parseEntity(t,e){let i={type:e.value};for(e=t.next();!t.isEOF()&&e.code!==0;){switch(e.code){case 10:i.controlPoints||(i.controlPoints=[]),i.controlPoints.push(oe(t));break;case 11:i.fitPoints||(i.fitPoints=[]),i.fitPoints.push(oe(t));break;case 12:i.startTangent=oe(t);break;case 13:i.endTangent=oe(t);break;case 40:i.knotValues||(i.knotValues=[]),i.knotValues.push(e.value);break;case 70:(e.value&1)!=0&&(i.closed=!0),(e.value&2)!=0&&(i.periodic=!0),(e.value&4)!=0&&(i.rational=!0),(e.value&8)!=0&&(i.planar=!0),(e.value&16)!=0&&(i.planar=!0,i.linear=!0);break;case 71:i.degreeOfSplineCurve=e.value;break;case 72:i.numberOfKnots=e.value;break;case 73:i.numberOfControlPoints=e.value;break;case 74:i.numberOfFitPoints=e.value;break;case 210:i.normalVector=oe(t);break;default:Ee(i,e,t);break}e=t.next()}return i}}});var Hr,nf=pe(()=>{fn();Hr=class{constructor(){this.ForEntityName="TEXT"}parseEntity(t,e){let i={type:e.value};for(e=t.next();!t.isEOF()&&e.code!==0;){switch(e.code){case 10:i.startPoint=oe(t);break;case 11:i.endPoint=oe(t);break;case 40:i.textHeight=e.value;break;case 41:i.xScale=e.value;break;case 50:i.rotation=e.value;break;case 1:i.text=e.value;break;case 72:i.halign=e.value;break;case 73:i.valign=e.value;break;default:Ee(i,e,t);break}e=t.next()}return i}}});var rf=Iu((sf,Qo)=>{(function(n,t){"use strict";typeof define=="function"&&define.amd?define(t):typeof Qo=="object"&&Qo.exports?Qo.exports=t():n.log=t()})(sf,function(){"use strict";var n=function(){},t="undefined",e=typeof window!==t&&typeof window.navigator!==t&&/Trident\/|MSIE /.test(window.navigator.userAgent),i=["trace","debug","info","warn","error"],s={},o=null;function c(v,M){var g=v[M];if(typeof g.bind=="function")return g.bind(v);try{return Function.prototype.bind.call(g,v)}catch{return function(){return Function.prototype.apply.apply(g,[v,arguments])}}}function a(){console.log&&(console.log.apply?console.log.apply(console,arguments):Function.prototype.apply.apply(console.log,[console,arguments])),console.trace&&console.trace()}function u(v){return v==="debug"&&(v="log"),typeof console===t?!1:v==="trace"&&e?a:console[v]!==void 0?c(console,v):console.log!==void 0?c(console,"log"):n}function f(){for(var v=this.getLevel(),M=0;M<i.length;M++){var g=i[M];this[g]=M<v?n:this.methodFactory(g,v,this.name)}if(this.log=this.debug,typeof console===t&&v<this.levels.SILENT)return"No console available for logging"}function p(v){return function(){typeof console!==t&&(f.call(this),this[v].apply(this,arguments))}}function x(v,M,g){return u(v)||p.apply(this,arguments)}function m(v,M){var g=this,y,E,P,S="loglevel";typeof v=="string"?S+=":"+v:typeof v=="symbol"&&(S=void 0);function L(F){var B=(i[F]||"silent").toUpperCase();if(!(typeof window===t||!S)){try{window.localStorage[S]=B;return}catch{}try{window.document.cookie=encodeURIComponent(S)+"="+B+";"}catch{}}}function T(){var F;if(!(typeof window===t||!S)){try{F=window.localStorage[S]}catch{}if(typeof F===t)try{var B=window.document.cookie,H=encodeURIComponent(S),V=B.indexOf(H+"=");V!==-1&&(F=/^([^;]+)/.exec(B.slice(V+H.length+1))[1])}catch{}return g.levels[F]===void 0&&(F=void 0),F}}function C(){if(!(typeof window===t||!S)){try{window.localStorage.removeItem(S)}catch{}try{window.document.cookie=encodeURIComponent(S)+"=; expires=Thu, 01 Jan 1970 00:00:00 UTC"}catch{}}}function w(F){var B=F;if(typeof B=="string"&&g.levels[B.toUpperCase()]!==void 0&&(B=g.levels[B.toUpperCase()]),typeof B=="number"&&B>=0&&B<=g.levels.SILENT)return B;throw new TypeError("log.setLevel() called with invalid level: "+F)}g.name=v,g.levels={TRACE:0,DEBUG:1,INFO:2,WARN:3,ERROR:4,SILENT:5},g.methodFactory=M||x,g.getLevel=function(){return P??E??y},g.setLevel=function(F,B){return P=w(F),B!==!1&&L(P),f.call(g)},g.setDefaultLevel=function(F){E=w(F),T()||g.setLevel(F,!1)},g.resetLevel=function(){P=null,C(),f.call(g)},g.enableAll=function(F){g.setLevel(g.levels.TRACE,F)},g.disableAll=function(F){g.setLevel(g.levels.SILENT,F)},g.rebuild=function(){if(o!==g&&(y=w(o.getLevel())),f.call(g),o===g)for(var F in s)s[F].rebuild()},y=w(o?o.getLevel():"WARN");var N=T();N!=null&&(P=w(N)),f.call(g)}o=new m,o.getLogger=function(M){if(typeof M!="symbol"&&typeof M!="string"||M==="")throw new TypeError("You must supply a name when creating a logger.");var g=s[M];return g||(g=s[M]=new m(M,o.methodFactory)),g};var _=typeof window!==t?window.log:void 0;return o.noConflict=function(){return typeof window!==t&&window.log===o&&(window.log=_),o},o.getLoggers=function(){return s},o.default=o,o})});function Em(n){n.registerEntityHandler(Ar),n.registerEntityHandler(Pr),n.registerEntityHandler(Cr),n.registerEntityHandler(Ir),n.registerEntityHandler(Rr),n.registerEntityHandler(Lr),n.registerEntityHandler(Nr),n.registerEntityHandler(Dr),n.registerEntityHandler(Or),n.registerEntityHandler(Fr),n.registerEntityHandler(Ur),n.registerEntityHandler(kr),n.registerEntityHandler(zr),n.registerEntityHandler(Vr),n.registerEntityHandler(Hr)}function ci(n,t,e){return n.code===t&&n.value===e}function os(n){be.default.debug("unhandled group "+of(n))}function of(n){return n.code+":"+n.value}function Tm(n){return Ko[n]}var be,Is,Oc=pe(()=>{zu();Dc();Vu();Hu();Gu();Xu();Wu();Yu();$u();qu();Zu();Ju();ju();Qu();tf();ef();nf();be=Lu(rf());be.default.setLevel("error");Is=class{constructor(){this._entityHandlers={},Em(this)}parse(t){return typeof t=="string"?this._parse(t):(console.error("Cannot read dxf source of type `"+typeof t),null)}registerEntityHandler(t){let e=new t;this._entityHandlers[e.ForEntityName]=e}parseSync(t){return this.parse(t)}parseStream(t){let e="",i=this;return new Promise((s,o)=>{t.on("data",c=>{e+=c}),t.on("end",()=>{try{s(i._parse(e))}catch(c){o(c)}}),t.on("error",c=>{o(c)})})}_parse(t){let e={},i=0,s=t.split(/\r\n|\r|\n/g),o=new Tr(s);if(!o.hasNext())throw Error("Empty file");let c=this,a;function u(){for(a=o.next();!o.isEOF();)if(a.code===0&&a.value==="SECTION"){if(a=o.next(),a.code!==2){console.error("Unexpected code %s after 0:SECTION",of(a)),a=o.next();continue}a.value==="HEADER"?(be.default.debug("> HEADER"),e.header=f(),be.default.debug("<")):a.value==="BLOCKS"?(be.default.debug("> BLOCKS"),e.blocks=p(),be.default.debug("<")):a.value==="ENTITIES"?(be.default.debug("> ENTITIES"),e.entities=P(!1),be.default.debug("<")):a.value==="TABLES"?(be.default.debug("> TABLES"),e.tables=m(),be.default.debug("<")):a.value==="EOF"?be.default.debug("EOF"):be.default.warn("Skipping section '%s'",a.value)}else a=o.next()}function f(){let T=null,C=null,w={};for(a=o.next();;){if(ci(a,0,"ENDSEC")){T&&(w[T]=C);break}else a.code===9?(T&&(w[T]=C),T=a.value):a.code===10?C={x:a.value}:a.code===20?C.y=a.value:a.code===30?C.z=a.value:C=a.value;a=o.next()}return a=o.next(),w}function p(){let T={};for(a=o.next();a.value!=="EOF"&&!ci(a,0,"ENDSEC");)if(ci(a,0,"BLOCK")){be.default.debug("block {");let C=x();be.default.debug("}"),L(C),C.name?T[C.name]=C:be.default.error('block with handle "'+C.handle+'" is missing a name.')}else os(a),a=o.next();return T}function x(){let T={};for(a=o.next();a.value!=="EOF";){switch(a.code){case 1:T.xrefPath=a.value,a=o.next();break;case 2:T.name=a.value,a=o.next();break;case 3:T.name2=a.value,a=o.next();break;case 5:T.handle=a.value,a=o.next();break;case 8:T.layer=a.value,a=o.next();break;case 10:T.position=S(a),a=o.next();break;case 67:T.paperSpace=!!(a.value&&a.value==1),a=o.next();break;case 70:a.value!=0&&(T.type=a.value),a=o.next();break;case 100:a=o.next();break;case 330:T.ownerHandle=a.value,a=o.next();break;case 0:if(a.value=="ENDBLK")break;T.entities=P(!0);break;default:os(a),a=o.next()}if(ci(a,0,"ENDBLK")){a=o.next();break}}return T}function m(){let T={};for(a=o.next();a.value!=="EOF"&&!ci(a,0,"ENDSEC");)ci(a,0,"TABLE")?(a=o.next(),E[a.value]?(be.default.debug(a.value+" Table {"),T[E[a.value].tableName]=v(a),be.default.debug("}")):be.default.debug("Unhandled Table "+a.value)):a=o.next();return a=o.next(),T}let _="ENDTAB";function v(T){let C=E[T.value],w={},N=0;for(a=o.next();!ci(a,0,_);)switch(a.code){case 5:w.handle=a.value,a=o.next();break;case 330:w.ownerHandle=a.value,a=o.next();break;case 100:a.value==="AcDbSymbolTable"||os(a),a=o.next();break;case 70:N=a.value,a=o.next();break;case 0:a.value===C.dxfSymbolName?w[C.tableRecordsProperty]=C.parseTableRecords():(os(a),a=o.next());break;default:os(a),a=o.next()}let F=w[C.tableRecordsProperty];if(F){let B=(()=>{if(F.constructor===Array)return F.length;if(typeof F=="object")return Object.keys(F).length})();N!==B&&be.default.warn("Parsed "+B+" "+C.dxfSymbolName+"'s but expected "+N)}return a=o.next(),w}function M(){let T=[],C={};for(be.default.debug("ViewPort {"),a=o.next();!ci(a,0,_);)switch(a.code){case 2:C.name=a.value,a=o.next();break;case 10:C.lowerLeftCorner=S(a),a=o.next();break;case 11:C.upperRightCorner=S(a),a=o.next();break;case 12:C.center=S(a),a=o.next();break;case 13:C.snapBasePoint=S(a),a=o.next();break;case 14:C.snapSpacing=S(a),a=o.next();break;case 15:C.gridSpacing=S(a),a=o.next();break;case 16:C.viewDirectionFromTarget=S(a),a=o.next();break;case 17:C.viewTarget=S(a),a=o.next();break;case 42:C.lensLength=a.value,a=o.next();break;case 43:C.frontClippingPlane=a.value,a=o.next();break;case 44:C.backClippingPlane=a.value,a=o.next();break;case 45:C.viewHeight=a.value,a=o.next();break;case 50:C.snapRotationAngle=a.value,a=o.next();break;case 51:C.viewTwistAngle=a.value,a=o.next();break;case 79:C.orthographicType=a.value,a=o.next();break;case 110:C.ucsOrigin=S(a),a=o.next();break;case 111:C.ucsXAxis=S(a),a=o.next();break;case 112:C.ucsYAxis=S(a),a=o.next();break;case 110:C.ucsOrigin=S(a),a=o.next();break;case 281:C.renderMode=a.value,a=o.next();break;case 281:C.defaultLightingType=a.value,a=o.next();break;case 292:C.defaultLightingOn=a.value,a=o.next();break;case 330:C.ownerHandle=a.value,a=o.next();break;case 63:case 421:case 431:C.ambientColor=a.value,a=o.next();break;case 0:a.value==="VPORT"&&(be.default.debug("}"),T.push(C),be.default.debug("ViewPort {"),C={},a=o.next());break;default:os(a),a=o.next();break}return be.default.debug("}"),T.push(C),T}function g(){let T={},C={},w=0,N;for(be.default.debug("LType {"),a=o.next();!ci(a,0,"ENDTAB");)switch(a.code){case 2:C.name=a.value,N=a.value,a=o.next();break;case 3:C.description=a.value,a=o.next();break;case 73:w=a.value,w>0&&(C.pattern=[]),a=o.next();break;case 40:C.patternLength=a.value,a=o.next();break;case 49:C.pattern.push(a.value),a=o.next();break;case 0:be.default.debug("}"),w>0&&w!==C.pattern.length&&be.default.warn("lengths do not match on LTYPE pattern"),T[N]=C,C={},be.default.debug("LType {"),a=o.next();break;default:a=o.next()}return be.default.debug("}"),T[N]=C,T}function y(){let T={},C={},w;for(be.default.debug("Layer {"),a=o.next();!ci(a,0,"ENDTAB");)switch(a.code){case 2:C.name=a.value,w=a.value,a=o.next();break;case 62:C.visible=a.value>=0,C.colorIndex=Math.abs(a.value),C.color=Tm(C.colorIndex),a=o.next();break;case 70:C.frozen=(a.value&1)!=0||(a.value&2)!=0,a=o.next();break;case 0:a.value==="LAYER"&&(be.default.debug("}"),T[w]=C,be.default.debug("Layer {"),C={},w=void 0,a=o.next());break;default:os(a),a=o.next();break}return be.default.debug("}"),T[w]=C,T}let E={VPORT:{tableRecordsProperty:"viewPorts",tableName:"viewPort",dxfSymbolName:"VPORT",parseTableRecords:M},LTYPE:{tableRecordsProperty:"lineTypes",tableName:"lineType",dxfSymbolName:"LTYPE",parseTableRecords:g},LAYER:{tableRecordsProperty:"layers",tableName:"layer",dxfSymbolName:"LAYER",parseTableRecords:y}};function P(T){let C=[],w=T?"ENDBLK":"ENDSEC";for(T||(a=o.next());;)if(a.code===0){if(a.value===w)break;let N=c._entityHandlers[a.value];if(N!=null){be.default.debug(a.value+" {");let F=N.parseEntity(o,a);a=o.lastReadGroup,be.default.debug("}"),L(F),C.push(F)}else{be.default.warn("Unhandled entity "+a.value),a=o.next();continue}}else a=o.next();return w=="ENDSEC"&&(a=o.next()),C}function S(T){let C={},w=T.code;if(C.x=T.value,w+=10,T=o.next(),T.code!=w)throw new Error("Expected code for point value to be "+w+" but got "+T.code+".");return C.y=T.value,w+=10,T=o.next(),T.code!=w?(o.rewind(),C):(C.z=T.value,C)}function L(T){if(!T)throw new TypeError("entity cannot be undefined or null");T.handle||(T.handle=i++)}return u(),e}}});var af,lf=pe(()=>{Oc();Oc();af=Is});function Fc(n){let t;try{t=new af().parseSync(n)}catch(M){throw new Error(`This DXF could not be read (${M.message||M}). Save it again as ASCII DXF.`)}if(!t)throw new Error("This DXF could not be read. Save it again as ASCII DXF.");let e=Number(t.header?.$INSUNITS??0),i=Am[e]??1,s=t.tables?.layer?.layers||{},o=[],c={},a=M=>{c[M]=(c[M]||0)+1},u=(M,g)=>{let y=M.colorIndex;if(M.color!==void 0&&y!==0&&y!==256)return cf(M.color);if(y===0&&g)return g;let E=s[M.layer];return E&&E.color!==void 0?cf(E.color):g||"#000000"},f=(M,g,y,E,P)=>{if(M.length<2)return;let S=rs(M.map(L=>wr(E,L)),g);S.length<2||o.push({pts:S,closed:g&&S.length>2,color:P,layer:y.layer||"0"})},p=M=>(M.extrusionDirectionZ??M.extrusionDirection?.z??1)<0?[-1,0,0,1,0,0]:Ou;function x(M,g,y){let E=Math.hypot(g.x-M.x,g.y-M.y);if(E<1e-12)return[];let P=Math.abs(y),S=E*(1+P*P)/(4*P),L=(M.x+g.x)/2,T=(M.y+g.y)/2,C=Math.sign(y)*(S-P*E/2),w=-(g.y-M.y)/E,N=(g.x-M.x)/E,F=L+w*C,B=T+N*C,H=Math.atan2(M.y-B,M.x-F),V=Math.atan2(g.y-B,g.x-F);return Cs(F,B,S,H,V,y>0).slice(1)}function m(M,g,y){let E=(M.vertices||[]).filter(T=>Number.isFinite(T.x)&&Number.isFinite(T.y));if(E.length<2)return;let P=!!M.shape,S=[[E[0].x,E[0].y]],L=P?E.length:E.length-1;for(let T=0;T<L;T++){let C=E[T],w=E[(T+1)%E.length];C.bulge?S.push(...x(C,w,C.bulge)):S.push([w.x,w.y])}f(S,P,M,g,y)}function _(M,g,y){let E=(M.controlPoints||[]).map(T=>[T.x,T.y]),P=M.knotValues||[],S=M.degreeOfSplineCurve||3;if(E.length>S&&P.length===E.length+S+1){let T=P[S],C=P[E.length],w=0;for(let B=1;B<E.length;B++)w+=Math.hypot(E[B][0]-E[B-1][0],E[B][1]-E[B-1][1]);let N=Math.max(E.length*8,Math.min(4e3,Math.ceil(w/.2))),F=[];for(let B=0;B<=N;B++)F.push(Cm(S,E,P,T+(C-T)*B/N));return f(F,!!M.closed,M,g,y)}let L=(M.fitPoints||[]).map(T=>[T.x,T.y]);L.length>1&&f(L,!!M.closed,M,g,y)}function v(M,g,y,E){if(!(E>8))for(let P of M||[]){if(P.inPaperSpace||P.visible===!1)continue;let S=s[P.layer];if(S&&(S.visible===!1||S.frozen))continue;let L=u(P,y),T=Ni(g,p(P));switch(P.type){case"LINE":P.vertices?.length>=2&&f(P.vertices.map(C=>[C.x,C.y]),!1,P,g,L);break;case"LWPOLYLINE":case"POLYLINE":if(P.is3dPolygonMesh||P.isPolyfaceMesh){a("mesh");break}m(P,T,L);break;case"CIRCLE":f(Jo(P.center.x,P.center.y,P.radius),!0,P,T,L);break;case"ARC":f(Cs(P.center.x,P.center.y,P.radius,P.startAngle,P.endAngle,!0),!1,P,T,L);break;case"ELLIPSE":{let C=P.startAngle===void 0||Math.abs((P.endAngle??0)-(P.startAngle??0)-Math.PI*2)<1e-6||P.startAngle===0&&Math.abs(P.endAngle-Math.PI*2)<1e-6,w=jo(P.center.x,P.center.y,P.majorAxisEndPoint.x,P.majorAxisEndPoint.y,P.axisRatio,P.startAngle??0,P.endAngle??Math.PI*2);f(w,C,P,T,L);break}case"SPLINE":_(P,g,L);break;case"SOLID":{let C=(P.points||[]).filter(Boolean);if(C.length>=3){let w=C.length===4?[C[0],C[1],C[3],C[2]]:C;f(w.map(N=>[N.x,N.y]).concat([[w[0].x,w[0].y]]),!0,P,T,L)}break}case"INSERT":{let C=t.blocks?.[P.name];if(!C){a("missing block");break}let w=(P.rotation||0)*Math.PI/180,N=Math.cos(w),F=Math.sin(w),B=P.xScale??1,H=P.yScale??1,V=C.position||{x:0,y:0},z=Math.max(1,P.columnCount||1),W=Math.max(1,P.rowCount||1);for(let $=0;$<W;$++)for(let k=0;k<z;k++){let J=(P.position?.x||0)+k*(P.columnSpacing||0)*N-$*(P.rowSpacing||0)*F,q=(P.position?.y||0)+k*(P.columnSpacing||0)*F+$*(P.rowSpacing||0)*N,it=Ni(Ni(g,[N*B,F*B,-F*H,N*H,J,q]),[1,0,0,1,-V.x,-V.y]);v(C.entities,it,L,E+1)}break}case"TEXT":case"MTEXT":case"ATTDEF":a("text");break;case"DIMENSION":a("dimension");break;case"POINT":break;default:a(P.type.toLowerCase())}}}return v(t.entities,[i,0,0,i,0,0],null,0),{shapes:o,units:Pm[e]??"mm",skipped:c}}function Cm(n,t,e,i){let s=n;for(;s<t.length-1&&i>=e[s+1];)s++;let o=[];for(let c=0;c<=n;c++)o.push(t[c+s-n].slice());for(let c=1;c<=n;c++)for(let a=n;a>=c;a--){let u=a+s-n,f=e[u+n-c+1]-e[u],p=f===0?0:(i-e[u])/f;o[a]=[(1-p)*o[a-1][0]+p*o[a][0],(1-p)*o[a-1][1]+p*o[a][1]]}return o[n]}var Am,Pm,cf,hf=pe(()=>{lf();Er();Am={0:1,1:25.4,2:304.8,4:1,5:10,6:1e3,8:254e-7,9:.0254,10:914.4,13:.001,14:100},Pm={0:"mm (no units set)",1:"in",2:"ft",4:"mm",5:"cm",6:"m",8:"\xB5in",9:"mil",10:"yd",13:"\xB5m",14:"dm"},cf=n=>"#"+(n>>>0&16777215).toString(16).padStart(6,"0")});async function Uc(n,t){let e=n instanceof Uint8Array?n:new Uint8Array(n),i=-1;for(let o=0;o<Math.min(e.length-4,1024)&&i<0;o++)Nm(e.subarray(o))&&(i=o);if(i<0)throw new Error(Im);e=e.slice();let s=await t.getDocument({data:e,isEvalSupported:!1,disableFontFace:!0,useSystemFonts:!1,verbosity:0}).promise;try{let o=await s.getPage(1),c=await o.getOperatorList({annotationMode:t.AnnotationMode.DISABLE}),a=await s.getOptionalContentConfig().catch(()=>null);return{...Dm(o,c,t.OPS,a),units:"pt",pages:s.numPages}}finally{await s.destroy()}}function Dm(n,{fnArray:t,argsArray:e},i,s){let o=[];for(let z in i)o[i[z]]=z;let c=n.getViewport({scale:1}),a=Ni([Gr,0,0,-Gr,0,c.height*Gr],c.transform),u=c.width*Gr,f=c.height*Gr,p=[],x={},m=z=>{x[z]=(x[z]||0)+1},_={ctm:a,stroke:"#000000",fill:"#000000"},v=[],M=[],g=[],y=null,E=[0,0],P=[0,0],S=!1,L=()=>{for(let z=M.length-1;z>=0;z--)if(M[z]?.layer!==void 0)return M[z].layer;return""},T=()=>M.some(z=>z?.hidden),C=(z,W)=>wr(_.ctm,[z,W]),w=(z,W)=>{y={pts:[C(z,W)],closed:!1},g.push(y),E=P=[z,W]},N=()=>{y||w(E[0],E[1])},F=()=>{y&&(y.closed=!0,y=null,E=P)};function B(z,W){let $=0;for(let k of z)switch(o[k]){case"moveTo":w(W[$],W[$+1]),$+=2;break;case"lineTo":N(),E=[W[$],W[$+1]],y.pts.push(C(...E)),$+=2;break;case"curveTo":case"curveTo2":case"curveTo3":{N();let J,q,it;o[k]==="curveTo"?(J=[W[$],W[$+1]],q=[W[$+2],W[$+3]],it=[W[$+4],W[$+5]],$+=6):o[k]==="curveTo2"?(J=E,q=[W[$],W[$+1]],it=[W[$+2],W[$+3]],$+=4):(J=[W[$],W[$+1]],it=[W[$+2],W[$+3]],q=it,$+=4),Li(y.pts[y.pts.length-1],C(...J),C(...q),C(...it),y.pts),E=it;break}case"closePath":F();break;case"rectangle":{let[J,q,it,st]=W.slice($,$+4);$+=4,w(J,q),y.pts.push(C(J+it,q),C(J+it,q+st),C(J,q+st)),F();break}}}let H=z=>{if(!z.filled||z.stroked||z.color!=="#ffffff"||z.pts.length!==5)return!1;let W=z.pts.map(St=>St[0]),$=z.pts.map(St=>St[1]),k=Math.min(...W),J=Math.max(...W),q=Math.min(...$),it=Math.max(...$),st=.1;return k>st||q>st||J<u-st||it<f-st?!1:z.pts.every(St=>(Math.abs(St[0]-k)<st||Math.abs(St[0]-J)<st)&&(Math.abs(St[1]-q)<st||Math.abs(St[1]-it)<st))};function V([z,W,$]){$&&F();let k=T();for(let J of g){let q=J.closed||W,it=rs(J.pts,q);if(it.length<2)continue;let st={pts:it,closed:q&&it.length>2,color:z?_.stroke:_.fill,layer:L(),filled:W};if(k){m("hidden");continue}if(H({...st,stroked:z})){m("background");continue}p.push(st)}g=[],y=null}for(let z=0;z<t.length;z++){let W=o[t[z]],$=e[z];if(ff[W]){V(ff[W]);continue}if(Rm.includes(W)){S=!0;continue}if(Lm.includes(W)){m("image");continue}switch(W){case"constructPath":B($[0],$[1]);break;case"endPath":g=[],y=null;break;case"save":v.push({..._});break;case"restore":v.length&&(_=v.pop());break;case"transform":_.ctm=Ni(_.ctm,$);break;case"paintFormXObjectBegin":v.push({..._}),$[0]&&(_.ctm=Ni(_.ctm,$[0]));break;case"paintFormXObjectEnd":v.length&&(_=v.pop());break;case"setStrokeRGBColor":_.stroke=uf($);break;case"setFillRGBColor":_.fill=uf($);break;case"setStrokeColorN":case"setFillColorN":break;case"beginText":S=!1;break;case"endText":S&&m("text"),S=!1;break;case"shadingFill":m("gradient");break;case"beginMarkedContentProps":{let k=$[0]==="OC"?$[1]:null;if(!k){M.push(null);break}let J=k.type==="OCG"?s?.getGroup(k.id):null;M.push({layer:J?.name??"",hidden:s?!s.isVisible(k):!1});break}case"beginMarkedContent":M.push(null);break;case"endMarkedContent":M.pop();break}}return{shapes:p,skipped:x}}var Gr,uf,Im,ff,Rm,Lm,Nm,df=pe(()=>{Er();Gr=25.4/72,uf=n=>"#"+(n[0]<<16|n[1]<<8|n[2]).toString(16).padStart(6,"0"),Im='This .ai file was saved without PDF content. In Illustrator, save it again with "Create PDF Compatible File" on, or export a PDF or SVG.',ff={stroke:[!0,!1,!1],closeStroke:[!0,!1,!0],fill:[!1,!0,!1],eoFill:[!1,!0,!1],fillStroke:[!0,!0,!1],eoFillStroke:[!0,!0,!1],closeFillStroke:[!0,!0,!0],closeEOFillStroke:[!0,!0,!0]},Rm=["showText","showSpacedText","nextLineShowText","nextLineSetSpacingShowText"],Lm=["paintImageXObject","paintInlineImageXObject","paintInlineImageXObjectGroup","paintImageXObjectRepeat","paintImageMaskXObject","paintImageMaskXObjectGroup","paintImageMaskXObjectRepeat","paintSolidColorImageMask"],Nm=n=>n.length>=4&&n[0]===37&&n[1]===80&&n[2]===68&&n[3]===70});var pf=pe(()=>{});var mf=Iu((YM,ta)=>{(function(){"use strict";var n={};n.version="6.4.2.2",n.use_lines=!0,n.use_xyz=!1;var t=!1;typeof ta<"u"&&ta.exports?(ta.exports=n,t=!0):(typeof define=="function"&&define.amd&&define(n),typeof document<"u"?window.ClipperLib=n:self.ClipperLib=n);var e;if(t){var i="chrome";e="Netscape"}else{var i=navigator.userAgent.toString().toLowerCase();e=navigator.appName}var s={};i.indexOf("chrome")!=-1&&i.indexOf("chromium")==-1?s.chrome=1:s.chrome=0,i.indexOf("chromium")!=-1?s.chromium=1:s.chromium=0,i.indexOf("safari")!=-1&&i.indexOf("chrome")==-1&&i.indexOf("chromium")==-1?s.safari=1:s.safari=0,i.indexOf("firefox")!=-1?s.firefox=1:s.firefox=0,i.indexOf("firefox/17")!=-1?s.firefox17=1:s.firefox17=0,i.indexOf("firefox/15")!=-1?s.firefox15=1:s.firefox15=0,i.indexOf("firefox/3")!=-1?s.firefox3=1:s.firefox3=0,i.indexOf("opera")!=-1?s.opera=1:s.opera=0,i.indexOf("msie 10")!=-1?s.msie10=1:s.msie10=0,i.indexOf("msie 9")!=-1?s.msie9=1:s.msie9=0,i.indexOf("msie 8")!=-1?s.msie8=1:s.msie8=0,i.indexOf("msie 7")!=-1?s.msie7=1:s.msie7=0,i.indexOf("msie ")!=-1?s.msie=1:s.msie=0,n.biginteger_used=null;var o,c=0xdeadbeefcafe,a=(c&16777215)==15715070;function u(r,l,h){n.biginteger_used=1,r!=null&&(typeof r=="number"&&typeof l>"u"?this.fromInt(r):typeof r=="number"?this.fromNumber(r,l,h):l==null&&typeof r!="string"?this.fromString(r,256):this.fromString(r,l))}function f(){return new u(null,void 0,void 0)}function p(r,l,h,d,b,A){for(;--A>=0;){var O=l*this[r++]+h[d]+b;b=Math.floor(O/67108864),h[d++]=O&67108863}return b}function x(r,l,h,d,b,A){for(var O=l&32767,G=l>>15;--A>=0;){var Y=this[r]&32767,tt=this[r++]>>15,_t=G*Y+tt*O;Y=O*Y+((_t&32767)<<15)+h[d]+(b&1073741823),b=(Y>>>30)+(_t>>>15)+G*tt+(b>>>30),h[d++]=Y&1073741823}return b}function m(r,l,h,d,b,A){for(var O=l&16383,G=l>>14;--A>=0;){var Y=this[r]&16383,tt=this[r++]>>14,_t=G*Y+tt*O;Y=O*Y+((_t&16383)<<14)+h[d]+b,b=(Y>>28)+(_t>>14)+G*tt,h[d++]=Y&268435455}return b}a&&e=="Microsoft Internet Explorer"?(u.prototype.am=x,o=30):a&&e!="Netscape"?(u.prototype.am=p,o=26):(u.prototype.am=m,o=28),u.prototype.DB=o,u.prototype.DM=(1<<o)-1,u.prototype.DV=1<<o;var _=52;u.prototype.FV=Math.pow(2,_),u.prototype.F1=_-o,u.prototype.F2=2*o-_;var v="0123456789abcdefghijklmnopqrstuvwxyz",M=new Array,g,y;for(g=48,y=0;y<=9;++y)M[g++]=y;for(g=97,y=10;y<36;++y)M[g++]=y;for(g=65,y=10;y<36;++y)M[g++]=y;function E(r){return v.charAt(r)}function P(r,l){var h=M[r.charCodeAt(l)];return h??-1}function S(r){for(var l=this.t-1;l>=0;--l)r[l]=this[l];r.t=this.t,r.s=this.s}function L(r){this.t=1,this.s=r<0?-1:0,r>0?this[0]=r:r<-1?this[0]=r+this.DV:this.t=0}function T(r){var l=f();return l.fromInt(r),l}function C(r,l){var h;if(l==16)h=4;else if(l==8)h=3;else if(l==256)h=8;else if(l==2)h=1;else if(l==32)h=5;else if(l==4)h=2;else{this.fromRadix(r,l);return}this.t=0,this.s=0;for(var d=r.length,b=!1,A=0;--d>=0;){var O=h==8?r[d]&255:P(r,d);if(O<0){r.charAt(d)=="-"&&(b=!0);continue}b=!1,A==0?this[this.t++]=O:A+h>this.DB?(this[this.t-1]|=(O&(1<<this.DB-A)-1)<<A,this[this.t++]=O>>this.DB-A):this[this.t-1]|=O<<A,A+=h,A>=this.DB&&(A-=this.DB)}h==8&&(r[0]&128)!=0&&(this.s=-1,A>0&&(this[this.t-1]|=(1<<this.DB-A)-1<<A)),this.clamp(),b&&u.ZERO.subTo(this,this)}function w(){for(var r=this.s&this.DM;this.t>0&&this[this.t-1]==r;)--this.t}function N(r){if(this.s<0)return"-"+this.negate().toString(r);var l;if(r==16)l=4;else if(r==8)l=3;else if(r==2)l=1;else if(r==32)l=5;else if(r==4)l=2;else return this.toRadix(r);var h=(1<<l)-1,d,b=!1,A="",O=this.t,G=this.DB-O*this.DB%l;if(O-- >0)for(G<this.DB&&(d=this[O]>>G)>0&&(b=!0,A=E(d));O>=0;)G<l?(d=(this[O]&(1<<G)-1)<<l-G,d|=this[--O]>>(G+=this.DB-l)):(d=this[O]>>(G-=l)&h,G<=0&&(G+=this.DB,--O)),d>0&&(b=!0),b&&(A+=E(d));return b?A:"0"}function F(){var r=f();return u.ZERO.subTo(this,r),r}function B(){return this.s<0?this.negate():this}function H(r){var l=this.s-r.s;if(l!=0)return l;var h=this.t;if(l=h-r.t,l!=0)return this.s<0?-l:l;for(;--h>=0;)if((l=this[h]-r[h])!=0)return l;return 0}function V(r){var l=1,h;return(h=r>>>16)!=0&&(r=h,l+=16),(h=r>>8)!=0&&(r=h,l+=8),(h=r>>4)!=0&&(r=h,l+=4),(h=r>>2)!=0&&(r=h,l+=2),(h=r>>1)!=0&&(r=h,l+=1),l}function z(){return this.t<=0?0:this.DB*(this.t-1)+V(this[this.t-1]^this.s&this.DM)}function W(r,l){var h;for(h=this.t-1;h>=0;--h)l[h+r]=this[h];for(h=r-1;h>=0;--h)l[h]=0;l.t=this.t+r,l.s=this.s}function $(r,l){for(var h=r;h<this.t;++h)l[h-r]=this[h];l.t=Math.max(this.t-r,0),l.s=this.s}function k(r,l){var h=r%this.DB,d=this.DB-h,b=(1<<d)-1,A=Math.floor(r/this.DB),O=this.s<<h&this.DM,G;for(G=this.t-1;G>=0;--G)l[G+A+1]=this[G]>>d|O,O=(this[G]&b)<<h;for(G=A-1;G>=0;--G)l[G]=0;l[A]=O,l.t=this.t+A+1,l.s=this.s,l.clamp()}function J(r,l){l.s=this.s;var h=Math.floor(r/this.DB);if(h>=this.t){l.t=0;return}var d=r%this.DB,b=this.DB-d,A=(1<<d)-1;l[0]=this[h]>>d;for(var O=h+1;O<this.t;++O)l[O-h-1]|=(this[O]&A)<<b,l[O-h]=this[O]>>d;d>0&&(l[this.t-h-1]|=(this.s&A)<<b),l.t=this.t-h,l.clamp()}function q(r,l){for(var h=0,d=0,b=Math.min(r.t,this.t);h<b;)d+=this[h]-r[h],l[h++]=d&this.DM,d>>=this.DB;if(r.t<this.t){for(d-=r.s;h<this.t;)d+=this[h],l[h++]=d&this.DM,d>>=this.DB;d+=this.s}else{for(d+=this.s;h<r.t;)d-=r[h],l[h++]=d&this.DM,d>>=this.DB;d-=r.s}l.s=d<0?-1:0,d<-1?l[h++]=this.DV+d:d>0&&(l[h++]=d),l.t=h,l.clamp()}function it(r,l){var h=this.abs(),d=r.abs(),b=h.t;for(l.t=b+d.t;--b>=0;)l[b]=0;for(b=0;b<d.t;++b)l[b+h.t]=h.am(0,d[b],l,b,0,h.t);l.s=0,l.clamp(),this.s!=r.s&&u.ZERO.subTo(l,l)}function st(r){for(var l=this.abs(),h=r.t=2*l.t;--h>=0;)r[h]=0;for(h=0;h<l.t-1;++h){var d=l.am(h,l[h],r,2*h,0,1);(r[h+l.t]+=l.am(h+1,2*l[h],r,2*h+1,d,l.t-h-1))>=l.DV&&(r[h+l.t]-=l.DV,r[h+l.t+1]=1)}r.t>0&&(r[r.t-1]+=l.am(h,l[h],r,2*h,0,1)),r.s=0,r.clamp()}function St(r,l,h){var d=r.abs();if(!(d.t<=0)){var b=this.abs();if(b.t<d.t){l?.fromInt(0),h!=null&&this.copyTo(h);return}h==null&&(h=f());var A=f(),O=this.s,G=r.s,Y=this.DB-V(d[d.t-1]);Y>0?(d.lShiftTo(Y,A),b.lShiftTo(Y,h)):(d.copyTo(A),b.copyTo(h));var tt=A.t,_t=A[tt-1];if(_t!=0){var xt=_t*(1<<this.F1)+(tt>1?A[tt-2]>>this.F2:0),Mt=this.FV/xt,jt=(1<<this.F1)/xt,ce=1<<this.F2,ye=h.t,ke=ye-tt,Pn=l??f();for(A.dlShiftTo(ke,Pn),h.compareTo(Pn)>=0&&(h[h.t++]=1,h.subTo(Pn,h)),u.ONE.dlShiftTo(tt,Pn),Pn.subTo(A,A);A.t<tt;)A[A.t++]=0;for(;--ke>=0;){var li=h[--ye]==_t?this.DM:Math.floor(h[ye]*Mt+(h[ye-1]+ce)*jt);if((h[ye]+=A.am(0,li,h,ke,0,tt))<li)for(A.dlShiftTo(ke,Pn),h.subTo(Pn,h);h[ye]<--li;)h.subTo(Pn,h)}l!=null&&(h.drShiftTo(tt,l),O!=G&&u.ZERO.subTo(l,l)),h.t=tt,h.clamp(),Y>0&&h.rShiftTo(Y,h),O<0&&u.ZERO.subTo(h,h)}}}function wt(r){var l=f();return this.abs().divRemTo(r,null,l),this.s<0&&l.compareTo(u.ZERO)>0&&r.subTo(l,l),l}function $t(r){this.m=r}function Kt(r){return r.s<0||r.compareTo(this.m)>=0?r.mod(this.m):r}function re(r){return r}function ct(r){r.divRemTo(this.m,null,r)}function pt(r,l,h){r.multiplyTo(l,h),this.reduce(h)}function Bt(r,l){r.squareTo(l),this.reduce(l)}$t.prototype.convert=Kt,$t.prototype.revert=re,$t.prototype.reduce=ct,$t.prototype.mulTo=pt,$t.prototype.sqrTo=Bt;function ie(){if(this.t<1)return 0;var r=this[0];if((r&1)==0)return 0;var l=r&3;return l=l*(2-(r&15)*l)&15,l=l*(2-(r&255)*l)&255,l=l*(2-((r&65535)*l&65535))&65535,l=l*(2-r*l%this.DV)%this.DV,l>0?this.DV-l:-l}function Ft(r){this.m=r,this.mp=r.invDigit(),this.mpl=this.mp&32767,this.mph=this.mp>>15,this.um=(1<<r.DB-15)-1,this.mt2=2*r.t}function de(r){var l=f();return r.abs().dlShiftTo(this.m.t,l),l.divRemTo(this.m,null,l),r.s<0&&l.compareTo(u.ZERO)>0&&this.m.subTo(l,l),l}function qe(r){var l=f();return r.copyTo(l),this.reduce(l),l}function fe(r){for(;r.t<=this.mt2;)r[r.t++]=0;for(var l=0;l<this.m.t;++l){var h=r[l]&32767,d=h*this.mpl+((h*this.mph+(r[l]>>15)*this.mpl&this.um)<<15)&r.DM;for(h=l+this.m.t,r[h]+=this.m.am(0,d,r,l,0,this.m.t);r[h]>=r.DV;)r[h]-=r.DV,r[++h]++}r.clamp(),r.drShiftTo(this.m.t,r),r.compareTo(this.m)>=0&&r.subTo(this.m,r)}function _e(r,l){r.squareTo(l),this.reduce(l)}function Ie(r,l,h){r.multiplyTo(l,h),this.reduce(h)}Ft.prototype.convert=de,Ft.prototype.revert=qe,Ft.prototype.reduce=fe,Ft.prototype.mulTo=Ie,Ft.prototype.sqrTo=_e;function ge(){return(this.t>0?this[0]&1:this.s)==0}function Re(r,l){if(r>4294967295||r<1)return u.ONE;var h=f(),d=f(),b=l.convert(this),A=V(r)-1;for(b.copyTo(h);--A>=0;)if(l.sqrTo(h,d),(r&1<<A)>0)l.mulTo(d,b,h);else{var O=h;h=d,d=O}return l.revert(h)}function Je(r,l){var h;return r<256||l.isEven()?h=new $t(l):h=new Ft(l),this.exp(r,h)}u.prototype.copyTo=S,u.prototype.fromInt=L,u.prototype.fromString=C,u.prototype.clamp=w,u.prototype.dlShiftTo=W,u.prototype.drShiftTo=$,u.prototype.lShiftTo=k,u.prototype.rShiftTo=J,u.prototype.subTo=q,u.prototype.multiplyTo=it,u.prototype.squareTo=st,u.prototype.divRemTo=St,u.prototype.invDigit=ie,u.prototype.isEven=ge,u.prototype.exp=Re,u.prototype.toString=N,u.prototype.negate=F,u.prototype.abs=B,u.prototype.compareTo=H,u.prototype.bitLength=z,u.prototype.mod=wt,u.prototype.modPowInt=Je,u.ZERO=T(0),u.ONE=T(1);function ln(){var r=f();return this.copyTo(r),r}function Ue(){if(this.s<0){if(this.t==1)return this[0]-this.DV;if(this.t==0)return-1}else{if(this.t==1)return this[0];if(this.t==0)return 0}return(this[1]&(1<<32-this.DB)-1)<<this.DB|this[0]}function Xe(){return this.t==0?this.s:this[0]<<24>>24}function Q(){return this.t==0?this.s:this[0]<<16>>16}function je(r){return Math.floor(Math.LN2*this.DB/Math.log(r))}function we(){return this.s<0?-1:this.t<=0||this.t==1&&this[0]<=0?0:1}function I(r){if(r==null&&(r=10),this.signum()==0||r<2||r>36)return"0";var l=this.chunkSize(r),h=Math.pow(r,l),d=T(h),b=f(),A=f(),O="";for(this.divRemTo(d,b,A);b.signum()>0;)O=(h+A.intValue()).toString(r).substr(1)+O,b.divRemTo(d,b,A);return A.intValue().toString(r)+O}function R(r,l){this.fromInt(0),l==null&&(l=10);for(var h=this.chunkSize(l),d=Math.pow(l,h),b=!1,A=0,O=0,G=0;G<r.length;++G){var Y=P(r,G);if(Y<0){r.charAt(G)=="-"&&this.signum()==0&&(b=!0);continue}O=l*O+Y,++A>=h&&(this.dMultiply(d),this.dAddOffset(O,0),A=0,O=0)}A>0&&(this.dMultiply(Math.pow(l,A)),this.dAddOffset(O,0)),b&&u.ZERO.subTo(this,this)}function nt(r,l,h){if(typeof l=="number")if(r<2)this.fromInt(1);else for(this.fromNumber(r,h),this.testBit(r-1)||this.bitwiseTo(u.ONE.shiftLeft(r-1),Gt,this),this.isEven()&&this.dAddOffset(1,0);!this.isProbablePrime(l);)this.dAddOffset(2,0),this.bitLength()>r&&this.subTo(u.ONE.shiftLeft(r-1),this);else{var d=new Array,b=r&7;d.length=(r>>3)+1,l.nextBytes(d),b>0?d[0]&=(1<<b)-1:d[0]=0,this.fromString(d,256)}}function lt(){var r=this.t,l=new Array;l[0]=this.s;var h=this.DB-r*this.DB%8,d,b=0;if(r-- >0)for(h<this.DB&&(d=this[r]>>h)!=(this.s&this.DM)>>h&&(l[b++]=d|this.s<<this.DB-h);r>=0;)h<8?(d=(this[r]&(1<<h)-1)<<8-h,d|=this[--r]>>(h+=this.DB-8)):(d=this[r]>>(h-=8)&255,h<=0&&(h+=this.DB,--r)),(d&128)!=0&&(d|=-256),b==0&&(this.s&128)!=(d&128)&&++b,(b>0||d!=this.s)&&(l[b++]=d);return l}function dt(r){return this.compareTo(r)==0}function Et(r){return this.compareTo(r)<0?this:r}function Tt(r){return this.compareTo(r)>0?this:r}function ft(r,l,h){var d,b,A=Math.min(r.t,this.t);for(d=0;d<A;++d)h[d]=l(this[d],r[d]);if(r.t<this.t){for(b=r.s&this.DM,d=A;d<this.t;++d)h[d]=l(this[d],b);h.t=this.t}else{for(b=this.s&this.DM,d=A;d<r.t;++d)h[d]=l(b,r[d]);h.t=r.t}h.s=l(this.s,r.s),h.clamp()}function vt(r,l){return r&l}function At(r){var l=f();return this.bitwiseTo(r,vt,l),l}function Gt(r,l){return r|l}function Nt(r){var l=f();return this.bitwiseTo(r,Gt,l),l}function Pt(r,l){return r^l}function Ht(r){var l=f();return this.bitwiseTo(r,Pt,l),l}function Qt(r,l){return r&~l}function le(r){var l=f();return this.bitwiseTo(r,Qt,l),l}function K(){for(var r=f(),l=0;l<this.t;++l)r[l]=this.DM&~this[l];return r.t=this.t,r.s=~this.s,r}function Rt(r){var l=f();return r<0?this.rShiftTo(-r,l):this.lShiftTo(r,l),l}function gt(r){var l=f();return r<0?this.lShiftTo(-r,l):this.rShiftTo(r,l),l}function Ct(r){if(r==0)return-1;var l=0;return(r&65535)==0&&(r>>=16,l+=16),(r&255)==0&&(r>>=8,l+=8),(r&15)==0&&(r>>=4,l+=4),(r&3)==0&&(r>>=2,l+=2),(r&1)==0&&++l,l}function Lt(){for(var r=0;r<this.t;++r)if(this[r]!=0)return r*this.DB+Ct(this[r]);return this.s<0?this.t*this.DB:-1}function bt(r){for(var l=0;r!=0;)r&=r-1,++l;return l}function Zt(){for(var r=0,l=this.s&this.DM,h=0;h<this.t;++h)r+=bt(this[h]^l);return r}function Ot(r){var l=Math.floor(r/this.DB);return l>=this.t?this.s!=0:(this[l]&1<<r%this.DB)!=0}function Te(r,l){var h=u.ONE.shiftLeft(r);return this.bitwiseTo(h,l,h),h}function Se(r){return this.changeBit(r,Gt)}function bn(r){return this.changeBit(r,Qt)}function An(r){return this.changeBit(r,Pt)}function Es(r,l){for(var h=0,d=0,b=Math.min(r.t,this.t);h<b;)d+=this[h]+r[h],l[h++]=d&this.DM,d>>=this.DB;if(r.t<this.t){for(d+=r.s;h<this.t;)d+=this[h],l[h++]=d&this.DM,d>>=this.DB;d+=this.s}else{for(d+=this.s;h<r.t;)d+=r[h],l[h++]=d&this.DM,d>>=this.DB;d+=r.s}l.s=d<0?-1:0,d>0?l[h++]=d:d<-1&&(l[h++]=this.DV+d),l.t=h,l.clamp()}function U(r){var l=f();return this.addTo(r,l),l}function X(r){var l=f();return this.subTo(r,l),l}function rt(r){var l=f();return this.multiplyTo(r,l),l}function ut(){var r=f();return this.squareTo(r),r}function et(r){var l=f();return this.divRemTo(r,l,null),l}function mt(r){var l=f();return this.divRemTo(r,null,l),l}function kt(r){var l=f(),h=f();return this.divRemTo(r,l,h),new Array(l,h)}function ee(r){this[this.t]=this.am(0,r-1,this,0,0,this.t),++this.t,this.clamp()}function yt(r,l){if(r!=0){for(;this.t<=l;)this[this.t++]=0;for(this[l]+=r;this[l]>=this.DV;)this[l]-=this.DV,++l>=this.t&&(this[this.t++]=0),++this[l]}}function Xt(){}function te(r){return r}function Ae(r,l,h){r.multiplyTo(l,h)}function Ke(r,l){r.squareTo(l)}Xt.prototype.convert=te,Xt.prototype.revert=te,Xt.prototype.mulTo=Ae,Xt.prototype.sqrTo=Ke;function We(r){return this.exp(r,new Xt)}function oi(r,l,h){var d=Math.min(this.t+r.t,l);for(h.s=0,h.t=d;d>0;)h[--d]=0;var b;for(b=h.t-this.t;d<b;++d)h[d+this.t]=this.am(0,r[d],h,d,0,this.t);for(b=Math.min(r.t,l);d<b;++d)this.am(0,r[d],h,d,0,l-d);h.clamp()}function Ts(r,l,h){--l;var d=h.t=this.t+r.t-l;for(h.s=0;--d>=0;)h[d]=0;for(d=Math.max(l-this.t,0);d<r.t;++d)h[this.t+d-l]=this.am(l-d,r[d],h,0,0,this.t+d-l);h.clamp(),h.drShiftTo(1,h)}function ai(r){this.r2=f(),this.q3=f(),u.ONE.dlShiftTo(2*r.t,this.r2),this.mu=this.r2.divide(r),this.m=r}function Pc(r){if(r.s<0||r.t>2*this.m.t)return r.mod(this.m);if(r.compareTo(this.m)<0)return r;var l=f();return r.copyTo(l),this.reduce(l),l}function Cc(r){return r}function qo(r){for(r.drShiftTo(this.m.t-1,this.r2),r.t>this.m.t+1&&(r.t=this.m.t+1,r.clamp()),this.mu.multiplyUpperTo(this.r2,this.m.t+1,this.q3),this.m.multiplyLowerTo(this.q3,this.m.t+1,this.r2);r.compareTo(this.r2)<0;)r.dAddOffset(1,this.m.t+1);for(r.subTo(this.r2,r);r.compareTo(this.m)>=0;)r.subTo(this.m,r)}function D(r,l){r.squareTo(l),this.reduce(l)}function j(r,l,h){r.multiplyTo(l,h),this.reduce(h)}ai.prototype.convert=Pc,ai.prototype.revert=Cc,ai.prototype.reduce=qo,ai.prototype.mulTo=j,ai.prototype.sqrTo=D;function ht(r,l){var h=r.bitLength(),d,b=T(1),A;if(h<=0)return b;h<18?d=1:h<48?d=3:h<144?d=4:h<768?d=5:d=6,h<8?A=new $t(l):l.isEven()?A=new ai(l):A=new Ft(l);var O=new Array,G=3,Y=d-1,tt=(1<<d)-1;if(O[1]=A.convert(this),d>1){var _t=f();for(A.sqrTo(O[1],_t);G<=tt;)O[G]=f(),A.mulTo(_t,O[G-2],O[G]),G+=2}var xt=r.t-1,Mt,jt=!0,ce=f(),ye;for(h=V(r[xt])-1;xt>=0;){for(h>=Y?Mt=r[xt]>>h-Y&tt:(Mt=(r[xt]&(1<<h+1)-1)<<Y-h,xt>0&&(Mt|=r[xt-1]>>this.DB+h-Y)),G=d;(Mt&1)==0;)Mt>>=1,--G;if((h-=G)<0&&(h+=this.DB,--xt),jt)O[Mt].copyTo(b),jt=!1;else{for(;G>1;)A.sqrTo(b,ce),A.sqrTo(ce,b),G-=2;G>0?A.sqrTo(b,ce):(ye=b,b=ce,ce=ye),A.mulTo(ce,O[Mt],b)}for(;xt>=0&&(r[xt]&1<<h)==0;)A.sqrTo(b,ce),ye=b,b=ce,ce=ye,--h<0&&(h=this.DB-1,--xt)}return A.revert(b)}function ot(r){var l=this.s<0?this.negate():this.clone(),h=r.s<0?r.negate():r.clone();if(l.compareTo(h)<0){var d=l;l=h,h=d}var b=l.getLowestSetBit(),A=h.getLowestSetBit();if(A<0)return l;for(b<A&&(A=b),A>0&&(l.rShiftTo(A,l),h.rShiftTo(A,h));l.signum()>0;)(b=l.getLowestSetBit())>0&&l.rShiftTo(b,l),(b=h.getLowestSetBit())>0&&h.rShiftTo(b,h),l.compareTo(h)>=0?(l.subTo(h,l),l.rShiftTo(1,l)):(h.subTo(l,h),h.rShiftTo(1,h));return A>0&&h.lShiftTo(A,h),h}function at(r){if(r<=0)return 0;var l=this.DV%r,h=this.s<0?r-1:0;if(this.t>0)if(l==0)h=this[0]%r;else for(var d=this.t-1;d>=0;--d)h=(l*h+this[d])%r;return h}function zt(r){var l=r.isEven();if(this.isEven()&&l||r.signum()==0)return u.ZERO;for(var h=r.clone(),d=this.clone(),b=T(1),A=T(0),O=T(0),G=T(1);h.signum()!=0;){for(;h.isEven();)h.rShiftTo(1,h),l?((!b.isEven()||!A.isEven())&&(b.addTo(this,b),A.subTo(r,A)),b.rShiftTo(1,b)):A.isEven()||A.subTo(r,A),A.rShiftTo(1,A);for(;d.isEven();)d.rShiftTo(1,d),l?((!O.isEven()||!G.isEven())&&(O.addTo(this,O),G.subTo(r,G)),O.rShiftTo(1,O)):G.isEven()||G.subTo(r,G),G.rShiftTo(1,G);h.compareTo(d)>=0?(h.subTo(d,h),l&&b.subTo(O,b),A.subTo(G,A)):(d.subTo(h,d),l&&O.subTo(b,O),G.subTo(A,G))}if(d.compareTo(u.ONE)!=0)return u.ZERO;if(G.compareTo(r)>=0)return G.subtract(r);if(G.signum()<0)G.addTo(r,G);else return G;return G.signum()<0?G.add(r):G}var It=[2,3,5,7,11,13,17,19,23,29,31,37,41,43,47,53,59,61,67,71,73,79,83,89,97,101,103,107,109,113,127,131,137,139,149,151,157,163,167,173,179,181,191,193,197,199,211,223,227,229,233,239,241,251,257,263,269,271,277,281,283,293,307,311,313,317,331,337,347,349,353,359,367,373,379,383,389,397,401,409,419,421,431,433,439,443,449,457,461,463,467,479,487,491,499,503,509,521,523,541,547,557,563,569,571,577,587,593,599,601,607,613,617,619,631,641,643,647,653,659,661,673,677,683,691,701,709,719,727,733,739,743,751,757,761,769,773,787,797,809,811,821,823,827,829,839,853,857,859,863,877,881,883,887,907,911,919,929,937,941,947,953,967,971,977,983,991,997],Ut=(1<<26)/It[It.length-1];function Wt(r){var l,h=this.abs();if(h.t==1&&h[0]<=It[It.length-1]){for(l=0;l<It.length;++l)if(h[0]==It[l])return!0;return!1}if(h.isEven())return!1;for(l=1;l<It.length;){for(var d=It[l],b=l+1;b<It.length&&d<Ut;)d*=It[b++];for(d=h.modInt(d);l<b;)if(d%It[l++]==0)return!1}return h.millerRabin(r)}function qt(r){var l=this.subtract(u.ONE),h=l.getLowestSetBit();if(h<=0)return!1;var d=l.shiftRight(h);r=r+1>>1,r>It.length&&(r=It.length);for(var b=f(),A=0;A<r;++A){b.fromInt(It[Math.floor(Math.random()*It.length)]);var O=b.modPow(d,this);if(O.compareTo(u.ONE)!=0&&O.compareTo(l)!=0){for(var G=1;G++<h&&O.compareTo(l)!=0;)if(O=O.modPowInt(2,this),O.compareTo(u.ONE)==0)return!1;if(O.compareTo(l)!=0)return!1}}return!0}u.prototype.chunkSize=je,u.prototype.toRadix=I,u.prototype.fromRadix=R,u.prototype.fromNumber=nt,u.prototype.bitwiseTo=ft,u.prototype.changeBit=Te,u.prototype.addTo=Es,u.prototype.dMultiply=ee,u.prototype.dAddOffset=yt,u.prototype.multiplyLowerTo=oi,u.prototype.multiplyUpperTo=Ts,u.prototype.modInt=at,u.prototype.millerRabin=qt,u.prototype.clone=ln,u.prototype.intValue=Ue,u.prototype.byteValue=Xe,u.prototype.shortValue=Q,u.prototype.signum=we,u.prototype.toByteArray=lt,u.prototype.equals=dt,u.prototype.min=Et,u.prototype.max=Tt,u.prototype.and=At,u.prototype.or=Nt,u.prototype.xor=Ht,u.prototype.andNot=le,u.prototype.not=K,u.prototype.shiftLeft=Rt,u.prototype.shiftRight=gt,u.prototype.getLowestSetBit=Lt,u.prototype.bitCount=Zt,u.prototype.testBit=Ot,u.prototype.setBit=Se,u.prototype.clearBit=bn,u.prototype.flipBit=An,u.prototype.add=U,u.prototype.subtract=X,u.prototype.multiply=rt,u.prototype.divide=et,u.prototype.remainder=mt,u.prototype.divideAndRemainder=kt,u.prototype.modPow=ht,u.prototype.modInverse=zt,u.prototype.pow=We,u.prototype.gcd=ot,u.prototype.isProbablePrime=Wt,u.prototype.square=ut;var Dt=u;Dt.prototype.IsNegative=function(){return this.compareTo(Dt.ZERO)==-1},Dt.op_Equality=function(r,l){return r.compareTo(l)==0},Dt.op_Inequality=function(r,l){return r.compareTo(l)!=0},Dt.op_GreaterThan=function(r,l){return r.compareTo(l)>0},Dt.op_LessThan=function(r,l){return r.compareTo(l)<0},Dt.op_Addition=function(r,l){return new Dt(r,void 0,void 0).add(new Dt(l,void 0,void 0))},Dt.op_Subtraction=function(r,l){return new Dt(r,void 0,void 0).subtract(new Dt(l,void 0,void 0))},Dt.Int128Mul=function(r,l){return new Dt(r,void 0,void 0).multiply(new Dt(l,void 0,void 0))},Dt.op_Division=function(r,l){return r.divide(l)},Dt.prototype.ToDouble=function(){return parseFloat(this.toString())};var xe=function(r,l){var h;if(typeof Object.getOwnPropertyNames>"u"){for(h in l.prototype)(typeof r.prototype[h]>"u"||r.prototype[h]===Object.prototype[h])&&(r.prototype[h]=l.prototype[h]);for(h in l)typeof r[h]>"u"&&(r[h]=l[h]);r.$baseCtor=l}else{for(var d=Object.getOwnPropertyNames(l.prototype),b=0;b<d.length;b++)typeof Object.getOwnPropertyDescriptor(r.prototype,d[b])>"u"&&Object.defineProperty(r.prototype,d[b],Object.getOwnPropertyDescriptor(l.prototype,d[b]));for(h in l)typeof r[h]>"u"&&(r[h]=l[h]);r.$baseCtor=l}};n.Path=function(){return[]},n.Path.prototype.push=Array.prototype.push,n.Paths=function(){return[]},n.Paths.prototype.push=Array.prototype.push,n.DoublePoint=function(){var r=arguments;this.X=0,this.Y=0,r.length===1?(this.X=r[0].X,this.Y=r[0].Y):r.length===2&&(this.X=r[0],this.Y=r[1])},n.DoublePoint0=function(){this.X=0,this.Y=0},n.DoublePoint0.prototype=n.DoublePoint.prototype,n.DoublePoint1=function(r){this.X=r.X,this.Y=r.Y},n.DoublePoint1.prototype=n.DoublePoint.prototype,n.DoublePoint2=function(r,l){this.X=r,this.Y=l},n.DoublePoint2.prototype=n.DoublePoint.prototype,n.PolyNode=function(){this.m_Parent=null,this.m_polygon=new n.Path,this.m_Index=0,this.m_jointype=0,this.m_endtype=0,this.m_Childs=[],this.IsOpen=!1},n.PolyNode.prototype.IsHoleNode=function(){for(var r=!0,l=this.m_Parent;l!==null;)r=!r,l=l.m_Parent;return r},n.PolyNode.prototype.ChildCount=function(){return this.m_Childs.length},n.PolyNode.prototype.Contour=function(){return this.m_polygon},n.PolyNode.prototype.AddChild=function(r){var l=this.m_Childs.length;this.m_Childs.push(r),r.m_Parent=this,r.m_Index=l},n.PolyNode.prototype.GetNext=function(){return this.m_Childs.length>0?this.m_Childs[0]:this.GetNextSiblingUp()},n.PolyNode.prototype.GetNextSiblingUp=function(){return this.m_Parent===null?null:this.m_Index===this.m_Parent.m_Childs.length-1?this.m_Parent.GetNextSiblingUp():this.m_Parent.m_Childs[this.m_Index+1]},n.PolyNode.prototype.Childs=function(){return this.m_Childs},n.PolyNode.prototype.Parent=function(){return this.m_Parent},n.PolyNode.prototype.IsHole=function(){return this.IsHoleNode()},n.PolyTree=function(){this.m_AllPolys=[],n.PolyNode.call(this)},n.PolyTree.prototype.Clear=function(){for(var r=0,l=this.m_AllPolys.length;r<l;r++)this.m_AllPolys[r]=null;this.m_AllPolys.length=0,this.m_Childs.length=0},n.PolyTree.prototype.GetFirst=function(){return this.m_Childs.length>0?this.m_Childs[0]:null},n.PolyTree.prototype.Total=function(){var r=this.m_AllPolys.length;return r>0&&this.m_Childs[0]!==this.m_AllPolys[0]&&r--,r},xe(n.PolyTree,n.PolyNode),n.Math_Abs_Int64=n.Math_Abs_Int32=n.Math_Abs_Double=function(r){return Math.abs(r)},n.Math_Max_Int32_Int32=function(r,l){return Math.max(r,l)},s.msie||s.opera||s.safari?n.Cast_Int32=function(r){return r|0}:n.Cast_Int32=function(r){return~~r},typeof Number.toInteger>"u"&&(Number.toInteger=null),s.chrome?n.Cast_Int64=function(r){return r<-2147483648||r>2147483647?r<0?Math.ceil(r):Math.floor(r):~~r}:s.firefox&&typeof Number.toInteger=="function"?n.Cast_Int64=function(r){return Number.toInteger(r)}:s.msie7||s.msie8?n.Cast_Int64=function(r){return parseInt(r,10)}:s.msie?n.Cast_Int64=function(r){return r<-2147483648||r>2147483647?r<0?Math.ceil(r):Math.floor(r):r|0}:n.Cast_Int64=function(r){return r<0?Math.ceil(r):Math.floor(r)},n.Clear=function(r){r.length=0},n.PI=3.141592653589793,n.PI2=2*3.141592653589793,n.IntPoint=function(){var r=arguments,l=r.length;if(this.X=0,this.Y=0,n.use_xyz)if(this.Z=0,l===3)this.X=r[0],this.Y=r[1],this.Z=r[2];else if(l===2)this.X=r[0],this.Y=r[1],this.Z=0;else if(l===1)if(r[0]instanceof n.DoublePoint){var h=r[0];this.X=n.Clipper.Round(h.X),this.Y=n.Clipper.Round(h.Y),this.Z=0}else{var d=r[0];typeof d.Z>"u"&&(d.Z=0),this.X=d.X,this.Y=d.Y,this.Z=d.Z}else this.X=0,this.Y=0,this.Z=0;else if(l===2)this.X=r[0],this.Y=r[1];else if(l===1)if(r[0]instanceof n.DoublePoint){var h=r[0];this.X=n.Clipper.Round(h.X),this.Y=n.Clipper.Round(h.Y)}else{var d=r[0];this.X=d.X,this.Y=d.Y}else this.X=0,this.Y=0},n.IntPoint.op_Equality=function(r,l){return r.X===l.X&&r.Y===l.Y},n.IntPoint.op_Inequality=function(r,l){return r.X!==l.X||r.Y!==l.Y},n.IntPoint0=function(){this.X=0,this.Y=0,n.use_xyz&&(this.Z=0)},n.IntPoint0.prototype=n.IntPoint.prototype,n.IntPoint1=function(r){this.X=r.X,this.Y=r.Y,n.use_xyz&&(typeof r.Z>"u"?this.Z=0:this.Z=r.Z)},n.IntPoint1.prototype=n.IntPoint.prototype,n.IntPoint1dp=function(r){this.X=n.Clipper.Round(r.X),this.Y=n.Clipper.Round(r.Y),n.use_xyz&&(this.Z=0)},n.IntPoint1dp.prototype=n.IntPoint.prototype,n.IntPoint2=function(r,l,h){this.X=r,this.Y=l,n.use_xyz&&(typeof h>"u"?this.Z=0:this.Z=h)},n.IntPoint2.prototype=n.IntPoint.prototype,n.IntRect=function(){var r=arguments,l=r.length;if(l===4)this.left=r[0],this.top=r[1],this.right=r[2],this.bottom=r[3];else if(l===1){var h=r[0];this.left=h.left,this.top=h.top,this.right=h.right,this.bottom=h.bottom}else this.left=0,this.top=0,this.right=0,this.bottom=0},n.IntRect0=function(){this.left=0,this.top=0,this.right=0,this.bottom=0},n.IntRect0.prototype=n.IntRect.prototype,n.IntRect1=function(r){this.left=r.left,this.top=r.top,this.right=r.right,this.bottom=r.bottom},n.IntRect1.prototype=n.IntRect.prototype,n.IntRect4=function(r,l,h,d){this.left=r,this.top=l,this.right=h,this.bottom=d},n.IntRect4.prototype=n.IntRect.prototype,n.ClipType={ctIntersection:0,ctUnion:1,ctDifference:2,ctXor:3},n.PolyType={ptSubject:0,ptClip:1},n.PolyFillType={pftEvenOdd:0,pftNonZero:1,pftPositive:2,pftNegative:3},n.JoinType={jtSquare:0,jtRound:1,jtMiter:2},n.EndType={etOpenSquare:0,etOpenRound:1,etOpenButt:2,etClosedLine:3,etClosedPolygon:4},n.EdgeSide={esLeft:0,esRight:1},n.Direction={dRightToLeft:0,dLeftToRight:1},n.TEdge=function(){this.Bot=new n.IntPoint0,this.Curr=new n.IntPoint0,this.Top=new n.IntPoint0,this.Delta=new n.IntPoint0,this.Dx=0,this.PolyTyp=n.PolyType.ptSubject,this.Side=n.EdgeSide.esLeft,this.WindDelta=0,this.WindCnt=0,this.WindCnt2=0,this.OutIdx=0,this.Next=null,this.Prev=null,this.NextInLML=null,this.NextInAEL=null,this.PrevInAEL=null,this.NextInSEL=null,this.PrevInSEL=null},n.IntersectNode=function(){this.Edge1=null,this.Edge2=null,this.Pt=new n.IntPoint0},n.MyIntersectNodeSort=function(){},n.MyIntersectNodeSort.Compare=function(r,l){var h=l.Pt.Y-r.Pt.Y;return h>0?1:h<0?-1:0},n.LocalMinima=function(){this.Y=0,this.LeftBound=null,this.RightBound=null,this.Next=null},n.Scanbeam=function(){this.Y=0,this.Next=null},n.Maxima=function(){this.X=0,this.Next=null,this.Prev=null},n.OutRec=function(){this.Idx=0,this.IsHole=!1,this.IsOpen=!1,this.FirstLeft=null,this.Pts=null,this.BottomPt=null,this.PolyNode=null},n.OutPt=function(){this.Idx=0,this.Pt=new n.IntPoint0,this.Next=null,this.Prev=null},n.Join=function(){this.OutPt1=null,this.OutPt2=null,this.OffPt=new n.IntPoint0},n.ClipperBase=function(){this.m_MinimaList=null,this.m_CurrentLM=null,this.m_edges=new Array,this.m_UseFullRange=!1,this.m_HasOpenPaths=!1,this.PreserveCollinear=!1,this.m_Scanbeam=null,this.m_PolyOuts=null,this.m_ActiveEdges=null},n.ClipperBase.horizontal=-9007199254740992,n.ClipperBase.Skip=-2,n.ClipperBase.Unassigned=-1,n.ClipperBase.tolerance=1e-20,n.ClipperBase.loRange=47453132,n.ClipperBase.hiRange=0xfffffffffffff,n.ClipperBase.near_zero=function(r){return r>-n.ClipperBase.tolerance&&r<n.ClipperBase.tolerance},n.ClipperBase.IsHorizontal=function(r){return r.Delta.Y===0},n.ClipperBase.prototype.PointIsVertex=function(r,l){var h=l;do{if(n.IntPoint.op_Equality(h.Pt,r))return!0;h=h.Next}while(h!==l);return!1},n.ClipperBase.prototype.PointOnLineSegment=function(r,l,h,d){return d?r.X===l.X&&r.Y===l.Y||r.X===h.X&&r.Y===h.Y||r.X>l.X==r.X<h.X&&r.Y>l.Y==r.Y<h.Y&&Dt.op_Equality(Dt.Int128Mul(r.X-l.X,h.Y-l.Y),Dt.Int128Mul(h.X-l.X,r.Y-l.Y)):r.X===l.X&&r.Y===l.Y||r.X===h.X&&r.Y===h.Y||r.X>l.X==r.X<h.X&&r.Y>l.Y==r.Y<h.Y&&(r.X-l.X)*(h.Y-l.Y)===(h.X-l.X)*(r.Y-l.Y)},n.ClipperBase.prototype.PointOnPolygon=function(r,l,h){for(var d=l;;){if(this.PointOnLineSegment(r,d.Pt,d.Next.Pt,h))return!0;if(d=d.Next,d===l)break}return!1},n.ClipperBase.prototype.SlopesEqual=n.ClipperBase.SlopesEqual=function(){var r=arguments,l=r.length,h,d,b,A,O,G,Y;return l===3?(h=r[0],d=r[1],Y=r[2],Y?Dt.op_Equality(Dt.Int128Mul(h.Delta.Y,d.Delta.X),Dt.Int128Mul(h.Delta.X,d.Delta.Y)):n.Cast_Int64(h.Delta.Y*d.Delta.X)===n.Cast_Int64(h.Delta.X*d.Delta.Y)):l===4?(b=r[0],A=r[1],O=r[2],Y=r[3],Y?Dt.op_Equality(Dt.Int128Mul(b.Y-A.Y,A.X-O.X),Dt.Int128Mul(b.X-A.X,A.Y-O.Y)):n.Cast_Int64((b.Y-A.Y)*(A.X-O.X))-n.Cast_Int64((b.X-A.X)*(A.Y-O.Y))===0):(b=r[0],A=r[1],O=r[2],G=r[3],Y=r[4],Y?Dt.op_Equality(Dt.Int128Mul(b.Y-A.Y,O.X-G.X),Dt.Int128Mul(b.X-A.X,O.Y-G.Y)):n.Cast_Int64((b.Y-A.Y)*(O.X-G.X))-n.Cast_Int64((b.X-A.X)*(O.Y-G.Y))===0)},n.ClipperBase.SlopesEqual3=function(r,l,h){return h?Dt.op_Equality(Dt.Int128Mul(r.Delta.Y,l.Delta.X),Dt.Int128Mul(r.Delta.X,l.Delta.Y)):n.Cast_Int64(r.Delta.Y*l.Delta.X)===n.Cast_Int64(r.Delta.X*l.Delta.Y)},n.ClipperBase.SlopesEqual4=function(r,l,h,d){return d?Dt.op_Equality(Dt.Int128Mul(r.Y-l.Y,l.X-h.X),Dt.Int128Mul(r.X-l.X,l.Y-h.Y)):n.Cast_Int64((r.Y-l.Y)*(l.X-h.X))-n.Cast_Int64((r.X-l.X)*(l.Y-h.Y))===0},n.ClipperBase.SlopesEqual5=function(r,l,h,d,b){return b?Dt.op_Equality(Dt.Int128Mul(r.Y-l.Y,h.X-d.X),Dt.Int128Mul(r.X-l.X,h.Y-d.Y)):n.Cast_Int64((r.Y-l.Y)*(h.X-d.X))-n.Cast_Int64((r.X-l.X)*(h.Y-d.Y))===0},n.ClipperBase.prototype.Clear=function(){this.DisposeLocalMinimaList();for(var r=0,l=this.m_edges.length;r<l;++r){for(var h=0,d=this.m_edges[r].length;h<d;++h)this.m_edges[r][h]=null;n.Clear(this.m_edges[r])}n.Clear(this.m_edges),this.m_UseFullRange=!1,this.m_HasOpenPaths=!1},n.ClipperBase.prototype.DisposeLocalMinimaList=function(){for(;this.m_MinimaList!==null;){var r=this.m_MinimaList.Next;this.m_MinimaList=null,this.m_MinimaList=r}this.m_CurrentLM=null},n.ClipperBase.prototype.RangeTest=function(r,l){l.Value?(r.X>n.ClipperBase.hiRange||r.Y>n.ClipperBase.hiRange||-r.X>n.ClipperBase.hiRange||-r.Y>n.ClipperBase.hiRange)&&n.Error("Coordinate outside allowed range in RangeTest()."):(r.X>n.ClipperBase.loRange||r.Y>n.ClipperBase.loRange||-r.X>n.ClipperBase.loRange||-r.Y>n.ClipperBase.loRange)&&(l.Value=!0,this.RangeTest(r,l))},n.ClipperBase.prototype.InitEdge=function(r,l,h,d){r.Next=l,r.Prev=h,r.Curr.X=d.X,r.Curr.Y=d.Y,n.use_xyz&&(r.Curr.Z=d.Z),r.OutIdx=-1},n.ClipperBase.prototype.InitEdge2=function(r,l){r.Curr.Y>=r.Next.Curr.Y?(r.Bot.X=r.Curr.X,r.Bot.Y=r.Curr.Y,n.use_xyz&&(r.Bot.Z=r.Curr.Z),r.Top.X=r.Next.Curr.X,r.Top.Y=r.Next.Curr.Y,n.use_xyz&&(r.Top.Z=r.Next.Curr.Z)):(r.Top.X=r.Curr.X,r.Top.Y=r.Curr.Y,n.use_xyz&&(r.Top.Z=r.Curr.Z),r.Bot.X=r.Next.Curr.X,r.Bot.Y=r.Next.Curr.Y,n.use_xyz&&(r.Bot.Z=r.Next.Curr.Z)),this.SetDx(r),r.PolyTyp=l},n.ClipperBase.prototype.FindNextLocMin=function(r){for(var l;;){for(;n.IntPoint.op_Inequality(r.Bot,r.Prev.Bot)||n.IntPoint.op_Equality(r.Curr,r.Top);)r=r.Next;if(r.Dx!==n.ClipperBase.horizontal&&r.Prev.Dx!==n.ClipperBase.horizontal)break;for(;r.Prev.Dx===n.ClipperBase.horizontal;)r=r.Prev;for(l=r;r.Dx===n.ClipperBase.horizontal;)r=r.Next;if(r.Top.Y!==r.Prev.Bot.Y){l.Prev.Bot.X<r.Bot.X&&(r=l);break}}return r},n.ClipperBase.prototype.ProcessBound=function(r,l){var h,d=r,b;if(d.OutIdx===n.ClipperBase.Skip){if(r=d,l){for(;r.Top.Y===r.Next.Bot.Y;)r=r.Next;for(;r!==d&&r.Dx===n.ClipperBase.horizontal;)r=r.Prev}else{for(;r.Top.Y===r.Prev.Bot.Y;)r=r.Prev;for(;r!==d&&r.Dx===n.ClipperBase.horizontal;)r=r.Next}if(r===d)l?d=r.Next:d=r.Prev;else{l?r=d.Next:r=d.Prev;var A=new n.LocalMinima;A.Next=null,A.Y=r.Bot.Y,A.LeftBound=null,A.RightBound=r,r.WindDelta=0,d=this.ProcessBound(r,l),this.InsertLocalMinima(A)}return d}if(r.Dx===n.ClipperBase.horizontal&&(l?h=r.Prev:h=r.Next,h.Dx===n.ClipperBase.horizontal?h.Bot.X!==r.Bot.X&&h.Top.X!==r.Bot.X&&this.ReverseHorizontal(r):h.Bot.X!==r.Bot.X&&this.ReverseHorizontal(r)),h=r,l){for(;d.Top.Y===d.Next.Bot.Y&&d.Next.OutIdx!==n.ClipperBase.Skip;)d=d.Next;if(d.Dx===n.ClipperBase.horizontal&&d.Next.OutIdx!==n.ClipperBase.Skip){for(b=d;b.Prev.Dx===n.ClipperBase.horizontal;)b=b.Prev;b.Prev.Top.X>d.Next.Top.X&&(d=b.Prev)}for(;r!==d;)r.NextInLML=r.Next,r.Dx===n.ClipperBase.horizontal&&r!==h&&r.Bot.X!==r.Prev.Top.X&&this.ReverseHorizontal(r),r=r.Next;r.Dx===n.ClipperBase.horizontal&&r!==h&&r.Bot.X!==r.Prev.Top.X&&this.ReverseHorizontal(r),d=d.Next}else{for(;d.Top.Y===d.Prev.Bot.Y&&d.Prev.OutIdx!==n.ClipperBase.Skip;)d=d.Prev;if(d.Dx===n.ClipperBase.horizontal&&d.Prev.OutIdx!==n.ClipperBase.Skip){for(b=d;b.Next.Dx===n.ClipperBase.horizontal;)b=b.Next;(b.Next.Top.X===d.Prev.Top.X||b.Next.Top.X>d.Prev.Top.X)&&(d=b.Next)}for(;r!==d;)r.NextInLML=r.Prev,r.Dx===n.ClipperBase.horizontal&&r!==h&&r.Bot.X!==r.Next.Top.X&&this.ReverseHorizontal(r),r=r.Prev;r.Dx===n.ClipperBase.horizontal&&r!==h&&r.Bot.X!==r.Next.Top.X&&this.ReverseHorizontal(r),d=d.Prev}return d},n.ClipperBase.prototype.AddPath=function(r,l,h){n.use_lines?!h&&l===n.PolyType.ptClip&&n.Error("AddPath: Open paths must be subject."):h||n.Error("AddPath: Open paths have been disabled.");var d=r.length-1;if(h)for(;d>0&&n.IntPoint.op_Equality(r[d],r[0]);)--d;for(;d>0&&n.IntPoint.op_Equality(r[d],r[d-1]);)--d;if(h&&d<2||!h&&d<1)return!1;for(var b=new Array,A=0;A<=d;A++)b.push(new n.TEdge);var O=!0;b[1].Curr.X=r[1].X,b[1].Curr.Y=r[1].Y,n.use_xyz&&(b[1].Curr.Z=r[1].Z);var G={Value:this.m_UseFullRange};this.RangeTest(r[0],G),this.m_UseFullRange=G.Value,G.Value=this.m_UseFullRange,this.RangeTest(r[d],G),this.m_UseFullRange=G.Value,this.InitEdge(b[0],b[1],b[d],r[0]),this.InitEdge(b[d],b[0],b[d-1],r[d]);for(var A=d-1;A>=1;--A)G.Value=this.m_UseFullRange,this.RangeTest(r[A],G),this.m_UseFullRange=G.Value,this.InitEdge(b[A],b[A+1],b[A-1],r[A]);for(var Y=b[0],tt=Y,_t=Y;;){if(tt.Curr===tt.Next.Curr&&(h||tt.Next!==Y)){if(tt===tt.Next)break;tt===Y&&(Y=tt.Next),tt=this.RemoveEdge(tt),_t=tt;continue}if(tt.Prev===tt.Next)break;if(h&&n.ClipperBase.SlopesEqual4(tt.Prev.Curr,tt.Curr,tt.Next.Curr,this.m_UseFullRange)&&(!this.PreserveCollinear||!this.Pt2IsBetweenPt1AndPt3(tt.Prev.Curr,tt.Curr,tt.Next.Curr))){tt===Y&&(Y=tt.Next),tt=this.RemoveEdge(tt),tt=tt.Prev,_t=tt;continue}if(tt=tt.Next,tt===_t||!h&&tt.Next===Y)break}if(!h&&tt===tt.Next||h&&tt.Prev===tt.Next)return!1;h||(this.m_HasOpenPaths=!0,Y.Prev.OutIdx=n.ClipperBase.Skip),tt=Y;do this.InitEdge2(tt,l),tt=tt.Next,O&&tt.Curr.Y!==Y.Curr.Y&&(O=!1);while(tt!==Y);if(O){if(h)return!1;tt.Prev.OutIdx=n.ClipperBase.Skip;var xt=new n.LocalMinima;for(xt.Next=null,xt.Y=tt.Bot.Y,xt.LeftBound=null,xt.RightBound=tt,xt.RightBound.Side=n.EdgeSide.esRight,xt.RightBound.WindDelta=0;tt.Bot.X!==tt.Prev.Top.X&&this.ReverseHorizontal(tt),tt.Next.OutIdx!==n.ClipperBase.Skip;)tt.NextInLML=tt.Next,tt=tt.Next;return this.InsertLocalMinima(xt),this.m_edges.push(b),!0}this.m_edges.push(b);var Mt,jt=null;for(n.IntPoint.op_Equality(tt.Prev.Bot,tt.Prev.Top)&&(tt=tt.Next);tt=this.FindNextLocMin(tt),tt!==jt;){jt===null&&(jt=tt);var xt=new n.LocalMinima;xt.Next=null,xt.Y=tt.Bot.Y,tt.Dx<tt.Prev.Dx?(xt.LeftBound=tt.Prev,xt.RightBound=tt,Mt=!1):(xt.LeftBound=tt,xt.RightBound=tt.Prev,Mt=!0),xt.LeftBound.Side=n.EdgeSide.esLeft,xt.RightBound.Side=n.EdgeSide.esRight,h?xt.LeftBound.Next===xt.RightBound?xt.LeftBound.WindDelta=-1:xt.LeftBound.WindDelta=1:xt.LeftBound.WindDelta=0,xt.RightBound.WindDelta=-xt.LeftBound.WindDelta,tt=this.ProcessBound(xt.LeftBound,Mt),tt.OutIdx===n.ClipperBase.Skip&&(tt=this.ProcessBound(tt,Mt));var ce=this.ProcessBound(xt.RightBound,!Mt);ce.OutIdx===n.ClipperBase.Skip&&(ce=this.ProcessBound(ce,!Mt)),xt.LeftBound.OutIdx===n.ClipperBase.Skip?xt.LeftBound=null:xt.RightBound.OutIdx===n.ClipperBase.Skip&&(xt.RightBound=null),this.InsertLocalMinima(xt),Mt||(tt=ce)}return!0},n.ClipperBase.prototype.AddPaths=function(r,l,h){for(var d=!1,b=0,A=r.length;b<A;++b)this.AddPath(r[b],l,h)&&(d=!0);return d},n.ClipperBase.prototype.Pt2IsBetweenPt1AndPt3=function(r,l,h){return n.IntPoint.op_Equality(r,h)||n.IntPoint.op_Equality(r,l)||n.IntPoint.op_Equality(h,l)?!1:r.X!==h.X?l.X>r.X==l.X<h.X:l.Y>r.Y==l.Y<h.Y},n.ClipperBase.prototype.RemoveEdge=function(r){r.Prev.Next=r.Next,r.Next.Prev=r.Prev;var l=r.Next;return r.Prev=null,l},n.ClipperBase.prototype.SetDx=function(r){r.Delta.X=r.Top.X-r.Bot.X,r.Delta.Y=r.Top.Y-r.Bot.Y,r.Delta.Y===0?r.Dx=n.ClipperBase.horizontal:r.Dx=r.Delta.X/r.Delta.Y},n.ClipperBase.prototype.InsertLocalMinima=function(r){if(this.m_MinimaList===null)this.m_MinimaList=r;else if(r.Y>=this.m_MinimaList.Y)r.Next=this.m_MinimaList,this.m_MinimaList=r;else{for(var l=this.m_MinimaList;l.Next!==null&&r.Y<l.Next.Y;)l=l.Next;r.Next=l.Next,l.Next=r}},n.ClipperBase.prototype.PopLocalMinima=function(r,l){return l.v=this.m_CurrentLM,this.m_CurrentLM!==null&&this.m_CurrentLM.Y===r?(this.m_CurrentLM=this.m_CurrentLM.Next,!0):!1},n.ClipperBase.prototype.ReverseHorizontal=function(r){var l=r.Top.X;r.Top.X=r.Bot.X,r.Bot.X=l,n.use_xyz&&(l=r.Top.Z,r.Top.Z=r.Bot.Z,r.Bot.Z=l)},n.ClipperBase.prototype.Reset=function(){if(this.m_CurrentLM=this.m_MinimaList,this.m_CurrentLM!==null){this.m_Scanbeam=null;for(var r=this.m_MinimaList;r!==null;){this.InsertScanbeam(r.Y);var l=r.LeftBound;l!==null&&(l.Curr.X=l.Bot.X,l.Curr.Y=l.Bot.Y,n.use_xyz&&(l.Curr.Z=l.Bot.Z),l.OutIdx=n.ClipperBase.Unassigned),l=r.RightBound,l!==null&&(l.Curr.X=l.Bot.X,l.Curr.Y=l.Bot.Y,n.use_xyz&&(l.Curr.Z=l.Bot.Z),l.OutIdx=n.ClipperBase.Unassigned),r=r.Next}this.m_ActiveEdges=null}},n.ClipperBase.prototype.InsertScanbeam=function(r){if(this.m_Scanbeam===null)this.m_Scanbeam=new n.Scanbeam,this.m_Scanbeam.Next=null,this.m_Scanbeam.Y=r;else if(r>this.m_Scanbeam.Y){var l=new n.Scanbeam;l.Y=r,l.Next=this.m_Scanbeam,this.m_Scanbeam=l}else{for(var h=this.m_Scanbeam;h.Next!==null&&r<=h.Next.Y;)h=h.Next;if(r===h.Y)return;var d=new n.Scanbeam;d.Y=r,d.Next=h.Next,h.Next=d}},n.ClipperBase.prototype.PopScanbeam=function(r){return this.m_Scanbeam===null?(r.v=0,!1):(r.v=this.m_Scanbeam.Y,this.m_Scanbeam=this.m_Scanbeam.Next,!0)},n.ClipperBase.prototype.LocalMinimaPending=function(){return this.m_CurrentLM!==null},n.ClipperBase.prototype.CreateOutRec=function(){var r=new n.OutRec;return r.Idx=n.ClipperBase.Unassigned,r.IsHole=!1,r.IsOpen=!1,r.FirstLeft=null,r.Pts=null,r.BottomPt=null,r.PolyNode=null,this.m_PolyOuts.push(r),r.Idx=this.m_PolyOuts.length-1,r},n.ClipperBase.prototype.DisposeOutRec=function(r){var l=this.m_PolyOuts[r];l.Pts=null,l=null,this.m_PolyOuts[r]=null},n.ClipperBase.prototype.UpdateEdgeIntoAEL=function(r){r.NextInLML===null&&n.Error("UpdateEdgeIntoAEL: invalid call");var l=r.PrevInAEL,h=r.NextInAEL;return r.NextInLML.OutIdx=r.OutIdx,l!==null?l.NextInAEL=r.NextInLML:this.m_ActiveEdges=r.NextInLML,h!==null&&(h.PrevInAEL=r.NextInLML),r.NextInLML.Side=r.Side,r.NextInLML.WindDelta=r.WindDelta,r.NextInLML.WindCnt=r.WindCnt,r.NextInLML.WindCnt2=r.WindCnt2,r=r.NextInLML,r.Curr.X=r.Bot.X,r.Curr.Y=r.Bot.Y,r.PrevInAEL=l,r.NextInAEL=h,n.ClipperBase.IsHorizontal(r)||this.InsertScanbeam(r.Top.Y),r},n.ClipperBase.prototype.SwapPositionsInAEL=function(r,l){if(!(r.NextInAEL===r.PrevInAEL||l.NextInAEL===l.PrevInAEL)){if(r.NextInAEL===l){var h=l.NextInAEL;h!==null&&(h.PrevInAEL=r);var d=r.PrevInAEL;d!==null&&(d.NextInAEL=l),l.PrevInAEL=d,l.NextInAEL=r,r.PrevInAEL=l,r.NextInAEL=h}else if(l.NextInAEL===r){var b=r.NextInAEL;b!==null&&(b.PrevInAEL=l);var A=l.PrevInAEL;A!==null&&(A.NextInAEL=r),r.PrevInAEL=A,r.NextInAEL=l,l.PrevInAEL=r,l.NextInAEL=b}else{var O=r.NextInAEL,G=r.PrevInAEL;r.NextInAEL=l.NextInAEL,r.NextInAEL!==null&&(r.NextInAEL.PrevInAEL=r),r.PrevInAEL=l.PrevInAEL,r.PrevInAEL!==null&&(r.PrevInAEL.NextInAEL=r),l.NextInAEL=O,l.NextInAEL!==null&&(l.NextInAEL.PrevInAEL=l),l.PrevInAEL=G,l.PrevInAEL!==null&&(l.PrevInAEL.NextInAEL=l)}r.PrevInAEL===null?this.m_ActiveEdges=r:l.PrevInAEL===null&&(this.m_ActiveEdges=l)}},n.ClipperBase.prototype.DeleteFromAEL=function(r){var l=r.PrevInAEL,h=r.NextInAEL;l===null&&h===null&&r!==this.m_ActiveEdges||(l!==null?l.NextInAEL=h:this.m_ActiveEdges=h,h!==null&&(h.PrevInAEL=l),r.NextInAEL=null,r.PrevInAEL=null)},n.Clipper=function(r){typeof r>"u"&&(r=0),this.m_PolyOuts=null,this.m_ClipType=n.ClipType.ctIntersection,this.m_Scanbeam=null,this.m_Maxima=null,this.m_ActiveEdges=null,this.m_SortedEdges=null,this.m_IntersectList=null,this.m_IntersectNodeComparer=null,this.m_ExecuteLocked=!1,this.m_ClipFillType=n.PolyFillType.pftEvenOdd,this.m_SubjFillType=n.PolyFillType.pftEvenOdd,this.m_Joins=null,this.m_GhostJoins=null,this.m_UsingPolyTree=!1,this.ReverseSolution=!1,this.StrictlySimple=!1,n.ClipperBase.call(this),this.m_Scanbeam=null,this.m_Maxima=null,this.m_ActiveEdges=null,this.m_SortedEdges=null,this.m_IntersectList=new Array,this.m_IntersectNodeComparer=n.MyIntersectNodeSort.Compare,this.m_ExecuteLocked=!1,this.m_UsingPolyTree=!1,this.m_PolyOuts=new Array,this.m_Joins=new Array,this.m_GhostJoins=new Array,this.ReverseSolution=(1&r)!==0,this.StrictlySimple=(2&r)!==0,this.PreserveCollinear=(4&r)!==0,n.use_xyz&&(this.ZFillFunction=null)},n.Clipper.ioReverseSolution=1,n.Clipper.ioStrictlySimple=2,n.Clipper.ioPreserveCollinear=4,n.Clipper.prototype.Clear=function(){this.m_edges.length!==0&&(this.DisposeAllPolyPts(),n.ClipperBase.prototype.Clear.call(this))},n.Clipper.prototype.InsertMaxima=function(r){var l=new n.Maxima;if(l.X=r,this.m_Maxima===null)this.m_Maxima=l,this.m_Maxima.Next=null,this.m_Maxima.Prev=null;else if(r<this.m_Maxima.X)l.Next=this.m_Maxima,l.Prev=null,this.m_Maxima=l;else{for(var h=this.m_Maxima;h.Next!==null&&r>=h.Next.X;)h=h.Next;if(r===h.X)return;l.Next=h.Next,l.Prev=h,h.Next!==null&&(h.Next.Prev=l),h.Next=l}},n.Clipper.prototype.Execute=function(){var r=arguments,l=r.length,h=r[1]instanceof n.PolyTree;if(l===4&&!h){var d=r[0],b=r[1],A=r[2],O=r[3];if(this.m_ExecuteLocked)return!1;this.m_HasOpenPaths&&n.Error("Error: PolyTree struct is needed for open path clipping."),this.m_ExecuteLocked=!0,n.Clear(b),this.m_SubjFillType=A,this.m_ClipFillType=O,this.m_ClipType=d,this.m_UsingPolyTree=!1;try{var G=this.ExecuteInternal();G&&this.BuildResult(b)}finally{this.DisposeAllPolyPts(),this.m_ExecuteLocked=!1}return G}else if(l===4&&h){var d=r[0],Y=r[1],A=r[2],O=r[3];if(this.m_ExecuteLocked)return!1;this.m_ExecuteLocked=!0,this.m_SubjFillType=A,this.m_ClipFillType=O,this.m_ClipType=d,this.m_UsingPolyTree=!0;try{var G=this.ExecuteInternal();G&&this.BuildResult2(Y)}finally{this.DisposeAllPolyPts(),this.m_ExecuteLocked=!1}return G}else if(l===2&&!h){var d=r[0],b=r[1];return this.Execute(d,b,n.PolyFillType.pftEvenOdd,n.PolyFillType.pftEvenOdd)}else if(l===2&&h){var d=r[0],Y=r[1];return this.Execute(d,Y,n.PolyFillType.pftEvenOdd,n.PolyFillType.pftEvenOdd)}},n.Clipper.prototype.FixHoleLinkage=function(r){if(!(r.FirstLeft===null||r.IsHole!==r.FirstLeft.IsHole&&r.FirstLeft.Pts!==null)){for(var l=r.FirstLeft;l!==null&&(l.IsHole===r.IsHole||l.Pts===null);)l=l.FirstLeft;r.FirstLeft=l}},n.Clipper.prototype.ExecuteInternal=function(){try{this.Reset(),this.m_SortedEdges=null,this.m_Maxima=null;var r={},l={};if(!this.PopScanbeam(r))return!1;for(this.InsertLocalMinimaIntoAEL(r.v);this.PopScanbeam(l)||this.LocalMinimaPending();){if(this.ProcessHorizontals(),this.m_GhostJoins.length=0,!this.ProcessIntersections(l.v))return!1;this.ProcessEdgesAtTopOfScanbeam(l.v),r.v=l.v,this.InsertLocalMinimaIntoAEL(r.v)}var h,d,b;for(d=0,b=this.m_PolyOuts.length;d<b;d++)h=this.m_PolyOuts[d],!(h.Pts===null||h.IsOpen)&&(h.IsHole^this.ReverseSolution)==this.Area$1(h)>0&&this.ReversePolyPtLinks(h.Pts);for(this.JoinCommonEdges(),d=0,b=this.m_PolyOuts.length;d<b;d++)h=this.m_PolyOuts[d],h.Pts!==null&&(h.IsOpen?this.FixupOutPolyline(h):this.FixupOutPolygon(h));return this.StrictlySimple&&this.DoSimplePolygons(),!0}finally{this.m_Joins.length=0,this.m_GhostJoins.length=0}},n.Clipper.prototype.DisposeAllPolyPts=function(){for(var r=0,l=this.m_PolyOuts.length;r<l;++r)this.DisposeOutRec(r);n.Clear(this.m_PolyOuts)},n.Clipper.prototype.AddJoin=function(r,l,h){var d=new n.Join;d.OutPt1=r,d.OutPt2=l,d.OffPt.X=h.X,d.OffPt.Y=h.Y,n.use_xyz&&(d.OffPt.Z=h.Z),this.m_Joins.push(d)},n.Clipper.prototype.AddGhostJoin=function(r,l){var h=new n.Join;h.OutPt1=r,h.OffPt.X=l.X,h.OffPt.Y=l.Y,n.use_xyz&&(h.OffPt.Z=l.Z),this.m_GhostJoins.push(h)},n.Clipper.prototype.SetZ=function(r,l,h){if(this.ZFillFunction!==null){if(r.Z!==0||this.ZFillFunction===null)return;n.IntPoint.op_Equality(r,l.Bot)?r.Z=l.Bot.Z:n.IntPoint.op_Equality(r,l.Top)?r.Z=l.Top.Z:n.IntPoint.op_Equality(r,h.Bot)?r.Z=h.Bot.Z:n.IntPoint.op_Equality(r,h.Top)?r.Z=h.Top.Z:this.ZFillFunction(l.Bot,l.Top,h.Bot,h.Top,r)}},n.Clipper.prototype.InsertLocalMinimaIntoAEL=function(r){for(var l={},h,d;this.PopLocalMinima(r,l);){h=l.v.LeftBound,d=l.v.RightBound;var b=null;if(h===null?(this.InsertEdgeIntoAEL(d,null),this.SetWindingCount(d),this.IsContributing(d)&&(b=this.AddOutPt(d,d.Bot))):d===null?(this.InsertEdgeIntoAEL(h,null),this.SetWindingCount(h),this.IsContributing(h)&&(b=this.AddOutPt(h,h.Bot)),this.InsertScanbeam(h.Top.Y)):(this.InsertEdgeIntoAEL(h,null),this.InsertEdgeIntoAEL(d,h),this.SetWindingCount(h),d.WindCnt=h.WindCnt,d.WindCnt2=h.WindCnt2,this.IsContributing(h)&&(b=this.AddLocalMinPoly(h,d,h.Bot)),this.InsertScanbeam(h.Top.Y)),d!==null&&(n.ClipperBase.IsHorizontal(d)?(d.NextInLML!==null&&this.InsertScanbeam(d.NextInLML.Top.Y),this.AddEdgeToSEL(d)):this.InsertScanbeam(d.Top.Y)),!(h===null||d===null)){if(b!==null&&n.ClipperBase.IsHorizontal(d)&&this.m_GhostJoins.length>0&&d.WindDelta!==0)for(var A=0,O=this.m_GhostJoins.length;A<O;A++){var G=this.m_GhostJoins[A];this.HorzSegmentsOverlap(G.OutPt1.Pt.X,G.OffPt.X,d.Bot.X,d.Top.X)&&this.AddJoin(G.OutPt1,b,G.OffPt)}if(h.OutIdx>=0&&h.PrevInAEL!==null&&h.PrevInAEL.Curr.X===h.Bot.X&&h.PrevInAEL.OutIdx>=0&&n.ClipperBase.SlopesEqual5(h.PrevInAEL.Curr,h.PrevInAEL.Top,h.Curr,h.Top,this.m_UseFullRange)&&h.WindDelta!==0&&h.PrevInAEL.WindDelta!==0){var Y=this.AddOutPt(h.PrevInAEL,h.Bot);this.AddJoin(b,Y,h.Top)}if(h.NextInAEL!==d){if(d.OutIdx>=0&&d.PrevInAEL.OutIdx>=0&&n.ClipperBase.SlopesEqual5(d.PrevInAEL.Curr,d.PrevInAEL.Top,d.Curr,d.Top,this.m_UseFullRange)&&d.WindDelta!==0&&d.PrevInAEL.WindDelta!==0){var Y=this.AddOutPt(d.PrevInAEL,d.Bot);this.AddJoin(b,Y,d.Top)}var tt=h.NextInAEL;if(tt!==null)for(;tt!==d;)this.IntersectEdges(d,tt,h.Curr),tt=tt.NextInAEL}}}},n.Clipper.prototype.InsertEdgeIntoAEL=function(r,l){if(this.m_ActiveEdges===null)r.PrevInAEL=null,r.NextInAEL=null,this.m_ActiveEdges=r;else if(l===null&&this.E2InsertsBeforeE1(this.m_ActiveEdges,r))r.PrevInAEL=null,r.NextInAEL=this.m_ActiveEdges,this.m_ActiveEdges.PrevInAEL=r,this.m_ActiveEdges=r;else{for(l===null&&(l=this.m_ActiveEdges);l.NextInAEL!==null&&!this.E2InsertsBeforeE1(l.NextInAEL,r);)l=l.NextInAEL;r.NextInAEL=l.NextInAEL,l.NextInAEL!==null&&(l.NextInAEL.PrevInAEL=r),r.PrevInAEL=l,l.NextInAEL=r}},n.Clipper.prototype.E2InsertsBeforeE1=function(r,l){return l.Curr.X===r.Curr.X?l.Top.Y>r.Top.Y?l.Top.X<n.Clipper.TopX(r,l.Top.Y):r.Top.X>n.Clipper.TopX(l,r.Top.Y):l.Curr.X<r.Curr.X},n.Clipper.prototype.IsEvenOddFillType=function(r){return r.PolyTyp===n.PolyType.ptSubject?this.m_SubjFillType===n.PolyFillType.pftEvenOdd:this.m_ClipFillType===n.PolyFillType.pftEvenOdd},n.Clipper.prototype.IsEvenOddAltFillType=function(r){return r.PolyTyp===n.PolyType.ptSubject?this.m_ClipFillType===n.PolyFillType.pftEvenOdd:this.m_SubjFillType===n.PolyFillType.pftEvenOdd},n.Clipper.prototype.IsContributing=function(r){var l,h;switch(r.PolyTyp===n.PolyType.ptSubject?(l=this.m_SubjFillType,h=this.m_ClipFillType):(l=this.m_ClipFillType,h=this.m_SubjFillType),l){case n.PolyFillType.pftEvenOdd:if(r.WindDelta===0&&r.WindCnt!==1)return!1;break;case n.PolyFillType.pftNonZero:if(Math.abs(r.WindCnt)!==1)return!1;break;case n.PolyFillType.pftPositive:if(r.WindCnt!==1)return!1;break;default:if(r.WindCnt!==-1)return!1;break}switch(this.m_ClipType){case n.ClipType.ctIntersection:switch(h){case n.PolyFillType.pftEvenOdd:case n.PolyFillType.pftNonZero:return r.WindCnt2!==0;case n.PolyFillType.pftPositive:return r.WindCnt2>0;default:return r.WindCnt2<0}case n.ClipType.ctUnion:switch(h){case n.PolyFillType.pftEvenOdd:case n.PolyFillType.pftNonZero:return r.WindCnt2===0;case n.PolyFillType.pftPositive:return r.WindCnt2<=0;default:return r.WindCnt2>=0}case n.ClipType.ctDifference:if(r.PolyTyp===n.PolyType.ptSubject)switch(h){case n.PolyFillType.pftEvenOdd:case n.PolyFillType.pftNonZero:return r.WindCnt2===0;case n.PolyFillType.pftPositive:return r.WindCnt2<=0;default:return r.WindCnt2>=0}else switch(h){case n.PolyFillType.pftEvenOdd:case n.PolyFillType.pftNonZero:return r.WindCnt2!==0;case n.PolyFillType.pftPositive:return r.WindCnt2>0;default:return r.WindCnt2<0}case n.ClipType.ctXor:if(r.WindDelta===0)switch(h){case n.PolyFillType.pftEvenOdd:case n.PolyFillType.pftNonZero:return r.WindCnt2===0;case n.PolyFillType.pftPositive:return r.WindCnt2<=0;default:return r.WindCnt2>=0}else return!0}return!0},n.Clipper.prototype.SetWindingCount=function(r){for(var l=r.PrevInAEL;l!==null&&(l.PolyTyp!==r.PolyTyp||l.WindDelta===0);)l=l.PrevInAEL;if(l===null){var h=r.PolyTyp===n.PolyType.ptSubject?this.m_SubjFillType:this.m_ClipFillType;r.WindDelta===0?r.WindCnt=h===n.PolyFillType.pftNegative?-1:1:r.WindCnt=r.WindDelta,r.WindCnt2=0,l=this.m_ActiveEdges}else if(r.WindDelta===0&&this.m_ClipType!==n.ClipType.ctUnion)r.WindCnt=1,r.WindCnt2=l.WindCnt2,l=l.NextInAEL;else if(this.IsEvenOddFillType(r)){if(r.WindDelta===0){for(var d=!0,b=l.PrevInAEL;b!==null;)b.PolyTyp===l.PolyTyp&&b.WindDelta!==0&&(d=!d),b=b.PrevInAEL;r.WindCnt=d?0:1}else r.WindCnt=r.WindDelta;r.WindCnt2=l.WindCnt2,l=l.NextInAEL}else l.WindCnt*l.WindDelta<0?Math.abs(l.WindCnt)>1?l.WindDelta*r.WindDelta<0?r.WindCnt=l.WindCnt:r.WindCnt=l.WindCnt+r.WindDelta:r.WindCnt=r.WindDelta===0?1:r.WindDelta:r.WindDelta===0?r.WindCnt=l.WindCnt<0?l.WindCnt-1:l.WindCnt+1:l.WindDelta*r.WindDelta<0?r.WindCnt=l.WindCnt:r.WindCnt=l.WindCnt+r.WindDelta,r.WindCnt2=l.WindCnt2,l=l.NextInAEL;if(this.IsEvenOddAltFillType(r))for(;l!==r;)l.WindDelta!==0&&(r.WindCnt2=r.WindCnt2===0?1:0),l=l.NextInAEL;else for(;l!==r;)r.WindCnt2+=l.WindDelta,l=l.NextInAEL},n.Clipper.prototype.AddEdgeToSEL=function(r){this.m_SortedEdges===null?(this.m_SortedEdges=r,r.PrevInSEL=null,r.NextInSEL=null):(r.NextInSEL=this.m_SortedEdges,r.PrevInSEL=null,this.m_SortedEdges.PrevInSEL=r,this.m_SortedEdges=r)},n.Clipper.prototype.PopEdgeFromSEL=function(r){if(r.v=this.m_SortedEdges,r.v===null)return!1;var l=r.v;return this.m_SortedEdges=r.v.NextInSEL,this.m_SortedEdges!==null&&(this.m_SortedEdges.PrevInSEL=null),l.NextInSEL=null,l.PrevInSEL=null,!0},n.Clipper.prototype.CopyAELToSEL=function(){var r=this.m_ActiveEdges;for(this.m_SortedEdges=r;r!==null;)r.PrevInSEL=r.PrevInAEL,r.NextInSEL=r.NextInAEL,r=r.NextInAEL},n.Clipper.prototype.SwapPositionsInSEL=function(r,l){if(!(r.NextInSEL===null&&r.PrevInSEL===null)&&!(l.NextInSEL===null&&l.PrevInSEL===null)){if(r.NextInSEL===l){var h=l.NextInSEL;h!==null&&(h.PrevInSEL=r);var d=r.PrevInSEL;d!==null&&(d.NextInSEL=l),l.PrevInSEL=d,l.NextInSEL=r,r.PrevInSEL=l,r.NextInSEL=h}else if(l.NextInSEL===r){var h=r.NextInSEL;h!==null&&(h.PrevInSEL=l);var d=l.PrevInSEL;d!==null&&(d.NextInSEL=r),r.PrevInSEL=d,r.NextInSEL=l,l.PrevInSEL=r,l.NextInSEL=h}else{var h=r.NextInSEL,d=r.PrevInSEL;r.NextInSEL=l.NextInSEL,r.NextInSEL!==null&&(r.NextInSEL.PrevInSEL=r),r.PrevInSEL=l.PrevInSEL,r.PrevInSEL!==null&&(r.PrevInSEL.NextInSEL=r),l.NextInSEL=h,l.NextInSEL!==null&&(l.NextInSEL.PrevInSEL=l),l.PrevInSEL=d,l.PrevInSEL!==null&&(l.PrevInSEL.NextInSEL=l)}r.PrevInSEL===null?this.m_SortedEdges=r:l.PrevInSEL===null&&(this.m_SortedEdges=l)}},n.Clipper.prototype.AddLocalMaxPoly=function(r,l,h){this.AddOutPt(r,h),l.WindDelta===0&&this.AddOutPt(l,h),r.OutIdx===l.OutIdx?(r.OutIdx=-1,l.OutIdx=-1):r.OutIdx<l.OutIdx?this.AppendPolygon(r,l):this.AppendPolygon(l,r)},n.Clipper.prototype.AddLocalMinPoly=function(r,l,h){var d,b,A;if(n.ClipperBase.IsHorizontal(l)||r.Dx>l.Dx?(d=this.AddOutPt(r,h),l.OutIdx=r.OutIdx,r.Side=n.EdgeSide.esLeft,l.Side=n.EdgeSide.esRight,b=r,b.PrevInAEL===l?A=l.PrevInAEL:A=b.PrevInAEL):(d=this.AddOutPt(l,h),r.OutIdx=l.OutIdx,r.Side=n.EdgeSide.esRight,l.Side=n.EdgeSide.esLeft,b=l,b.PrevInAEL===r?A=r.PrevInAEL:A=b.PrevInAEL),A!==null&&A.OutIdx>=0&&A.Top.Y<h.Y&&b.Top.Y<h.Y){var O=n.Clipper.TopX(A,h.Y),G=n.Clipper.TopX(b,h.Y);if(O===G&&b.WindDelta!==0&&A.WindDelta!==0&&n.ClipperBase.SlopesEqual5(new n.IntPoint2(O,h.Y),A.Top,new n.IntPoint2(G,h.Y),b.Top,this.m_UseFullRange)){var Y=this.AddOutPt(A,h);this.AddJoin(d,Y,b.Top)}}return d},n.Clipper.prototype.AddOutPt=function(r,l){if(r.OutIdx<0){var h=this.CreateOutRec();h.IsOpen=r.WindDelta===0;var d=new n.OutPt;return h.Pts=d,d.Idx=h.Idx,d.Pt.X=l.X,d.Pt.Y=l.Y,n.use_xyz&&(d.Pt.Z=l.Z),d.Next=d,d.Prev=d,h.IsOpen||this.SetHoleState(r,h),r.OutIdx=h.Idx,d}else{var h=this.m_PolyOuts[r.OutIdx],b=h.Pts,A=r.Side===n.EdgeSide.esLeft;if(A&&n.IntPoint.op_Equality(l,b.Pt))return b;if(!A&&n.IntPoint.op_Equality(l,b.Prev.Pt))return b.Prev;var d=new n.OutPt;return d.Idx=h.Idx,d.Pt.X=l.X,d.Pt.Y=l.Y,n.use_xyz&&(d.Pt.Z=l.Z),d.Next=b,d.Prev=b.Prev,d.Prev.Next=d,b.Prev=d,A&&(h.Pts=d),d}},n.Clipper.prototype.GetLastOutPt=function(r){var l=this.m_PolyOuts[r.OutIdx];return r.Side===n.EdgeSide.esLeft?l.Pts:l.Pts.Prev},n.Clipper.prototype.SwapPoints=function(r,l){var h=new n.IntPoint1(r.Value);r.Value.X=l.Value.X,r.Value.Y=l.Value.Y,n.use_xyz&&(r.Value.Z=l.Value.Z),l.Value.X=h.X,l.Value.Y=h.Y,n.use_xyz&&(l.Value.Z=h.Z)},n.Clipper.prototype.HorzSegmentsOverlap=function(r,l,h,d){var b;return r>l&&(b=r,r=l,l=b),h>d&&(b=h,h=d,d=b),r<d&&h<l},n.Clipper.prototype.SetHoleState=function(r,l){for(var h=r.PrevInAEL,d=null;h!==null;)h.OutIdx>=0&&h.WindDelta!==0&&(d===null?d=h:d.OutIdx===h.OutIdx&&(d=null)),h=h.PrevInAEL;d===null?(l.FirstLeft=null,l.IsHole=!1):(l.FirstLeft=this.m_PolyOuts[d.OutIdx],l.IsHole=!l.FirstLeft.IsHole)},n.Clipper.prototype.GetDx=function(r,l){return r.Y===l.Y?n.ClipperBase.horizontal:(l.X-r.X)/(l.Y-r.Y)},n.Clipper.prototype.FirstIsBottomPt=function(r,l){for(var h=r.Prev;n.IntPoint.op_Equality(h.Pt,r.Pt)&&h!==r;)h=h.Prev;var d=Math.abs(this.GetDx(r.Pt,h.Pt));for(h=r.Next;n.IntPoint.op_Equality(h.Pt,r.Pt)&&h!==r;)h=h.Next;var b=Math.abs(this.GetDx(r.Pt,h.Pt));for(h=l.Prev;n.IntPoint.op_Equality(h.Pt,l.Pt)&&h!==l;)h=h.Prev;var A=Math.abs(this.GetDx(l.Pt,h.Pt));for(h=l.Next;n.IntPoint.op_Equality(h.Pt,l.Pt)&&h!==l;)h=h.Next;var O=Math.abs(this.GetDx(l.Pt,h.Pt));return Math.max(d,b)===Math.max(A,O)&&Math.min(d,b)===Math.min(A,O)?this.Area(r)>0:d>=A&&d>=O||b>=A&&b>=O},n.Clipper.prototype.GetBottomPt=function(r){for(var l=null,h=r.Next;h!==r;)h.Pt.Y>r.Pt.Y?(r=h,l=null):h.Pt.Y===r.Pt.Y&&h.Pt.X<=r.Pt.X&&(h.Pt.X<r.Pt.X?(l=null,r=h):h.Next!==r&&h.Prev!==r&&(l=h)),h=h.Next;if(l!==null)for(;l!==h;)for(this.FirstIsBottomPt(h,l)||(r=l),l=l.Next;n.IntPoint.op_Inequality(l.Pt,r.Pt);)l=l.Next;return r},n.Clipper.prototype.GetLowermostRec=function(r,l){r.BottomPt===null&&(r.BottomPt=this.GetBottomPt(r.Pts)),l.BottomPt===null&&(l.BottomPt=this.GetBottomPt(l.Pts));var h=r.BottomPt,d=l.BottomPt;return h.Pt.Y>d.Pt.Y?r:h.Pt.Y<d.Pt.Y?l:h.Pt.X<d.Pt.X?r:h.Pt.X>d.Pt.X||h.Next===h?l:d.Next===d||this.FirstIsBottomPt(h,d)?r:l},n.Clipper.prototype.OutRec1RightOfOutRec2=function(r,l){do if(r=r.FirstLeft,r===l)return!0;while(r!==null);return!1},n.Clipper.prototype.GetOutRec=function(r){for(var l=this.m_PolyOuts[r];l!==this.m_PolyOuts[l.Idx];)l=this.m_PolyOuts[l.Idx];return l},n.Clipper.prototype.AppendPolygon=function(r,l){var h=this.m_PolyOuts[r.OutIdx],d=this.m_PolyOuts[l.OutIdx],b;this.OutRec1RightOfOutRec2(h,d)?b=d:this.OutRec1RightOfOutRec2(d,h)?b=h:b=this.GetLowermostRec(h,d);var A=h.Pts,O=A.Prev,G=d.Pts,Y=G.Prev;r.Side===n.EdgeSide.esLeft?l.Side===n.EdgeSide.esLeft?(this.ReversePolyPtLinks(G),G.Next=A,A.Prev=G,O.Next=Y,Y.Prev=O,h.Pts=Y):(Y.Next=A,A.Prev=Y,G.Prev=O,O.Next=G,h.Pts=G):l.Side===n.EdgeSide.esRight?(this.ReversePolyPtLinks(G),O.Next=Y,Y.Prev=O,G.Next=A,A.Prev=G):(O.Next=G,G.Prev=O,A.Prev=Y,Y.Next=A),h.BottomPt=null,b===d&&(d.FirstLeft!==h&&(h.FirstLeft=d.FirstLeft),h.IsHole=d.IsHole),d.Pts=null,d.BottomPt=null,d.FirstLeft=h;var tt=r.OutIdx,_t=l.OutIdx;r.OutIdx=-1,l.OutIdx=-1;for(var xt=this.m_ActiveEdges;xt!==null;){if(xt.OutIdx===_t){xt.OutIdx=tt,xt.Side=r.Side;break}xt=xt.NextInAEL}d.Idx=h.Idx},n.Clipper.prototype.ReversePolyPtLinks=function(r){if(r!==null){var l,h;l=r;do h=l.Next,l.Next=l.Prev,l.Prev=h,l=h;while(l!==r)}},n.Clipper.SwapSides=function(r,l){var h=r.Side;r.Side=l.Side,l.Side=h},n.Clipper.SwapPolyIndexes=function(r,l){var h=r.OutIdx;r.OutIdx=l.OutIdx,l.OutIdx=h},n.Clipper.prototype.IntersectEdges=function(r,l,h){var d=r.OutIdx>=0,b=l.OutIdx>=0;if(n.use_xyz&&this.SetZ(h,r,l),n.use_lines&&(r.WindDelta===0||l.WindDelta===0)){if(r.WindDelta===0&&l.WindDelta===0)return;r.PolyTyp===l.PolyTyp&&r.WindDelta!==l.WindDelta&&this.m_ClipType===n.ClipType.ctUnion?r.WindDelta===0?b&&(this.AddOutPt(r,h),d&&(r.OutIdx=-1)):d&&(this.AddOutPt(l,h),b&&(l.OutIdx=-1)):r.PolyTyp!==l.PolyTyp&&(r.WindDelta===0&&Math.abs(l.WindCnt)===1&&(this.m_ClipType!==n.ClipType.ctUnion||l.WindCnt2===0)?(this.AddOutPt(r,h),d&&(r.OutIdx=-1)):l.WindDelta===0&&Math.abs(r.WindCnt)===1&&(this.m_ClipType!==n.ClipType.ctUnion||r.WindCnt2===0)&&(this.AddOutPt(l,h),b&&(l.OutIdx=-1)));return}if(r.PolyTyp===l.PolyTyp)if(this.IsEvenOddFillType(r)){var A=r.WindCnt;r.WindCnt=l.WindCnt,l.WindCnt=A}else r.WindCnt+l.WindDelta===0?r.WindCnt=-r.WindCnt:r.WindCnt+=l.WindDelta,l.WindCnt-r.WindDelta===0?l.WindCnt=-l.WindCnt:l.WindCnt-=r.WindDelta;else this.IsEvenOddFillType(l)?r.WindCnt2=r.WindCnt2===0?1:0:r.WindCnt2+=l.WindDelta,this.IsEvenOddFillType(r)?l.WindCnt2=l.WindCnt2===0?1:0:l.WindCnt2-=r.WindDelta;var O,G,Y,tt;r.PolyTyp===n.PolyType.ptSubject?(O=this.m_SubjFillType,Y=this.m_ClipFillType):(O=this.m_ClipFillType,Y=this.m_SubjFillType),l.PolyTyp===n.PolyType.ptSubject?(G=this.m_SubjFillType,tt=this.m_ClipFillType):(G=this.m_ClipFillType,tt=this.m_SubjFillType);var _t,xt;switch(O){case n.PolyFillType.pftPositive:_t=r.WindCnt;break;case n.PolyFillType.pftNegative:_t=-r.WindCnt;break;default:_t=Math.abs(r.WindCnt);break}switch(G){case n.PolyFillType.pftPositive:xt=l.WindCnt;break;case n.PolyFillType.pftNegative:xt=-l.WindCnt;break;default:xt=Math.abs(l.WindCnt);break}if(d&&b)_t!==0&&_t!==1||xt!==0&&xt!==1||r.PolyTyp!==l.PolyTyp&&this.m_ClipType!==n.ClipType.ctXor?this.AddLocalMaxPoly(r,l,h):(this.AddOutPt(r,h),this.AddOutPt(l,h),n.Clipper.SwapSides(r,l),n.Clipper.SwapPolyIndexes(r,l));else if(d)(xt===0||xt===1)&&(this.AddOutPt(r,h),n.Clipper.SwapSides(r,l),n.Clipper.SwapPolyIndexes(r,l));else if(b)(_t===0||_t===1)&&(this.AddOutPt(l,h),n.Clipper.SwapSides(r,l),n.Clipper.SwapPolyIndexes(r,l));else if((_t===0||_t===1)&&(xt===0||xt===1)){var Mt,jt;switch(Y){case n.PolyFillType.pftPositive:Mt=r.WindCnt2;break;case n.PolyFillType.pftNegative:Mt=-r.WindCnt2;break;default:Mt=Math.abs(r.WindCnt2);break}switch(tt){case n.PolyFillType.pftPositive:jt=l.WindCnt2;break;case n.PolyFillType.pftNegative:jt=-l.WindCnt2;break;default:jt=Math.abs(l.WindCnt2);break}if(r.PolyTyp!==l.PolyTyp)this.AddLocalMinPoly(r,l,h);else if(_t===1&&xt===1)switch(this.m_ClipType){case n.ClipType.ctIntersection:Mt>0&&jt>0&&this.AddLocalMinPoly(r,l,h);break;case n.ClipType.ctUnion:Mt<=0&&jt<=0&&this.AddLocalMinPoly(r,l,h);break;case n.ClipType.ctDifference:(r.PolyTyp===n.PolyType.ptClip&&Mt>0&&jt>0||r.PolyTyp===n.PolyType.ptSubject&&Mt<=0&&jt<=0)&&this.AddLocalMinPoly(r,l,h);break;case n.ClipType.ctXor:this.AddLocalMinPoly(r,l,h);break}else n.Clipper.SwapSides(r,l)}},n.Clipper.prototype.DeleteFromSEL=function(r){var l=r.PrevInSEL,h=r.NextInSEL;l===null&&h===null&&r!==this.m_SortedEdges||(l!==null?l.NextInSEL=h:this.m_SortedEdges=h,h!==null&&(h.PrevInSEL=l),r.NextInSEL=null,r.PrevInSEL=null)},n.Clipper.prototype.ProcessHorizontals=function(){for(var r={};this.PopEdgeFromSEL(r);)this.ProcessHorizontal(r.v)},n.Clipper.prototype.GetHorzDirection=function(r,l){r.Bot.X<r.Top.X?(l.Left=r.Bot.X,l.Right=r.Top.X,l.Dir=n.Direction.dLeftToRight):(l.Left=r.Top.X,l.Right=r.Bot.X,l.Dir=n.Direction.dRightToLeft)},n.Clipper.prototype.ProcessHorizontal=function(r){var l={Dir:null,Left:null,Right:null};this.GetHorzDirection(r,l);for(var h=l.Dir,d=l.Left,b=l.Right,A=r.WindDelta===0,O=r,G=null;O.NextInLML!==null&&n.ClipperBase.IsHorizontal(O.NextInLML);)O=O.NextInLML;O.NextInLML===null&&(G=this.GetMaximaPair(O));var Y=this.m_Maxima;if(Y!==null)if(h===n.Direction.dLeftToRight){for(;Y!==null&&Y.X<=r.Bot.X;)Y=Y.Next;Y!==null&&Y.X>=O.Top.X&&(Y=null)}else{for(;Y.Next!==null&&Y.Next.X<r.Bot.X;)Y=Y.Next;Y.X<=O.Top.X&&(Y=null)}for(var tt=null;;){for(var _t=r===O,xt=this.GetNextInAEL(r,h);xt!==null;){if(Y!==null)if(h===n.Direction.dLeftToRight)for(;Y!==null&&Y.X<xt.Curr.X;)r.OutIdx>=0&&!A&&this.AddOutPt(r,new n.IntPoint2(Y.X,r.Bot.Y)),Y=Y.Next;else for(;Y!==null&&Y.X>xt.Curr.X;)r.OutIdx>=0&&!A&&this.AddOutPt(r,new n.IntPoint2(Y.X,r.Bot.Y)),Y=Y.Prev;if(h===n.Direction.dLeftToRight&&xt.Curr.X>b||h===n.Direction.dRightToLeft&&xt.Curr.X<d||xt.Curr.X===r.Top.X&&r.NextInLML!==null&&xt.Dx<r.NextInLML.Dx)break;if(r.OutIdx>=0&&!A){n.use_xyz&&(h===n.Direction.dLeftToRight?this.SetZ(xt.Curr,r,xt):this.SetZ(xt.Curr,xt,r)),tt=this.AddOutPt(r,xt.Curr);for(var Mt=this.m_SortedEdges;Mt!==null;){if(Mt.OutIdx>=0&&this.HorzSegmentsOverlap(r.Bot.X,r.Top.X,Mt.Bot.X,Mt.Top.X)){var jt=this.GetLastOutPt(Mt);this.AddJoin(jt,tt,Mt.Top)}Mt=Mt.NextInSEL}this.AddGhostJoin(tt,r.Bot)}if(xt===G&&_t){r.OutIdx>=0&&this.AddLocalMaxPoly(r,G,r.Top),this.DeleteFromAEL(r),this.DeleteFromAEL(G);return}if(h===n.Direction.dLeftToRight){var ce=new n.IntPoint2(xt.Curr.X,r.Curr.Y);this.IntersectEdges(r,xt,ce)}else{var ce=new n.IntPoint2(xt.Curr.X,r.Curr.Y);this.IntersectEdges(xt,r,ce)}var ye=this.GetNextInAEL(xt,h);this.SwapPositionsInAEL(r,xt),xt=ye}if(r.NextInLML===null||!n.ClipperBase.IsHorizontal(r.NextInLML))break;r=this.UpdateEdgeIntoAEL(r),r.OutIdx>=0&&this.AddOutPt(r,r.Bot),l={Dir:h,Left:d,Right:b},this.GetHorzDirection(r,l),h=l.Dir,d=l.Left,b=l.Right}if(r.OutIdx>=0&&tt===null){tt=this.GetLastOutPt(r);for(var Mt=this.m_SortedEdges;Mt!==null;){if(Mt.OutIdx>=0&&this.HorzSegmentsOverlap(r.Bot.X,r.Top.X,Mt.Bot.X,Mt.Top.X)){var jt=this.GetLastOutPt(Mt);this.AddJoin(jt,tt,Mt.Top)}Mt=Mt.NextInSEL}this.AddGhostJoin(tt,r.Top)}if(r.NextInLML!==null)if(r.OutIdx>=0){if(tt=this.AddOutPt(r,r.Top),r=this.UpdateEdgeIntoAEL(r),r.WindDelta===0)return;var ke=r.PrevInAEL,ye=r.NextInAEL;if(ke!==null&&ke.Curr.X===r.Bot.X&&ke.Curr.Y===r.Bot.Y&&ke.WindDelta===0&&ke.OutIdx>=0&&ke.Curr.Y>ke.Top.Y&&n.ClipperBase.SlopesEqual3(r,ke,this.m_UseFullRange)){var jt=this.AddOutPt(ke,r.Bot);this.AddJoin(tt,jt,r.Top)}else if(ye!==null&&ye.Curr.X===r.Bot.X&&ye.Curr.Y===r.Bot.Y&&ye.WindDelta!==0&&ye.OutIdx>=0&&ye.Curr.Y>ye.Top.Y&&n.ClipperBase.SlopesEqual3(r,ye,this.m_UseFullRange)){var jt=this.AddOutPt(ye,r.Bot);this.AddJoin(tt,jt,r.Top)}}else r=this.UpdateEdgeIntoAEL(r);else r.OutIdx>=0&&this.AddOutPt(r,r.Top),this.DeleteFromAEL(r)},n.Clipper.prototype.GetNextInAEL=function(r,l){return l===n.Direction.dLeftToRight?r.NextInAEL:r.PrevInAEL},n.Clipper.prototype.IsMinima=function(r){return r!==null&&r.Prev.NextInLML!==r&&r.Next.NextInLML!==r},n.Clipper.prototype.IsMaxima=function(r,l){return r!==null&&r.Top.Y===l&&r.NextInLML===null},n.Clipper.prototype.IsIntermediate=function(r,l){return r.Top.Y===l&&r.NextInLML!==null},n.Clipper.prototype.GetMaximaPair=function(r){return n.IntPoint.op_Equality(r.Next.Top,r.Top)&&r.Next.NextInLML===null?r.Next:n.IntPoint.op_Equality(r.Prev.Top,r.Top)&&r.Prev.NextInLML===null?r.Prev:null},n.Clipper.prototype.GetMaximaPairEx=function(r){var l=this.GetMaximaPair(r);return l===null||l.OutIdx===n.ClipperBase.Skip||l.NextInAEL===l.PrevInAEL&&!n.ClipperBase.IsHorizontal(l)?null:l},n.Clipper.prototype.ProcessIntersections=function(r){if(this.m_ActiveEdges===null)return!0;try{if(this.BuildIntersectList(r),this.m_IntersectList.length===0)return!0;if(this.m_IntersectList.length===1||this.FixupIntersectionOrder())this.ProcessIntersectList();else return!1}catch{this.m_SortedEdges=null,this.m_IntersectList.length=0,n.Error("ProcessIntersections error")}return this.m_SortedEdges=null,!0},n.Clipper.prototype.BuildIntersectList=function(r){if(this.m_ActiveEdges!==null){var l=this.m_ActiveEdges;for(this.m_SortedEdges=l;l!==null;)l.PrevInSEL=l.PrevInAEL,l.NextInSEL=l.NextInAEL,l.Curr.X=n.Clipper.TopX(l,r),l=l.NextInAEL;for(var h=!0;h&&this.m_SortedEdges!==null;){for(h=!1,l=this.m_SortedEdges;l.NextInSEL!==null;){var d=l.NextInSEL,b=new n.IntPoint0;if(l.Curr.X>d.Curr.X){this.IntersectPoint(l,d,b),b.Y<r&&(b=new n.IntPoint2(n.Clipper.TopX(l,r),r));var A=new n.IntersectNode;A.Edge1=l,A.Edge2=d,A.Pt.X=b.X,A.Pt.Y=b.Y,n.use_xyz&&(A.Pt.Z=b.Z),this.m_IntersectList.push(A),this.SwapPositionsInSEL(l,d),h=!0}else l=d}if(l.PrevInSEL!==null)l.PrevInSEL.NextInSEL=null;else break}this.m_SortedEdges=null}},n.Clipper.prototype.EdgesAdjacent=function(r){return r.Edge1.NextInSEL===r.Edge2||r.Edge1.PrevInSEL===r.Edge2},n.Clipper.IntersectNodeSort=function(r,l){return l.Pt.Y-r.Pt.Y},n.Clipper.prototype.FixupIntersectionOrder=function(){this.m_IntersectList.sort(this.m_IntersectNodeComparer),this.CopyAELToSEL();for(var r=this.m_IntersectList.length,l=0;l<r;l++){if(!this.EdgesAdjacent(this.m_IntersectList[l])){for(var h=l+1;h<r&&!this.EdgesAdjacent(this.m_IntersectList[h]);)h++;if(h===r)return!1;var d=this.m_IntersectList[l];this.m_IntersectList[l]=this.m_IntersectList[h],this.m_IntersectList[h]=d}this.SwapPositionsInSEL(this.m_IntersectList[l].Edge1,this.m_IntersectList[l].Edge2)}return!0},n.Clipper.prototype.ProcessIntersectList=function(){for(var r=0,l=this.m_IntersectList.length;r<l;r++){var h=this.m_IntersectList[r];this.IntersectEdges(h.Edge1,h.Edge2,h.Pt),this.SwapPositionsInAEL(h.Edge1,h.Edge2)}this.m_IntersectList.length=0};var Yt=function(r){return r<0?Math.ceil(r-.5):Math.round(r)},Pe=function(r){return r<0?Math.ceil(r-.5):Math.floor(r+.5)},Qe=function(r){return r<0?-Math.round(Math.abs(r)):Math.round(r)},Be=function(r){return r<0?(r-=.5,r<-2147483648?Math.ceil(r):r|0):(r+=.5,r>2147483647?Math.floor(r):r|0)};s.msie?n.Clipper.Round=Yt:s.chromium?n.Clipper.Round=Qe:s.safari?n.Clipper.Round=Be:n.Clipper.Round=Pe,n.Clipper.TopX=function(r,l){return l===r.Top.Y?r.Top.X:r.Bot.X+n.Clipper.Round(r.Dx*(l-r.Bot.Y))},n.Clipper.prototype.IntersectPoint=function(r,l,h){h.X=0,h.Y=0;var d,b;if(r.Dx===l.Dx){h.Y=r.Curr.Y,h.X=n.Clipper.TopX(r,h.Y);return}if(r.Delta.X===0)h.X=r.Bot.X,n.ClipperBase.IsHorizontal(l)?h.Y=l.Bot.Y:(b=l.Bot.Y-l.Bot.X/l.Dx,h.Y=n.Clipper.Round(h.X/l.Dx+b));else if(l.Delta.X===0)h.X=l.Bot.X,n.ClipperBase.IsHorizontal(r)?h.Y=r.Bot.Y:(d=r.Bot.Y-r.Bot.X/r.Dx,h.Y=n.Clipper.Round(h.X/r.Dx+d));else{d=r.Bot.X-r.Bot.Y*r.Dx,b=l.Bot.X-l.Bot.Y*l.Dx;var A=(b-d)/(r.Dx-l.Dx);h.Y=n.Clipper.Round(A),Math.abs(r.Dx)<Math.abs(l.Dx)?h.X=n.Clipper.Round(r.Dx*A+d):h.X=n.Clipper.Round(l.Dx*A+b)}if(h.Y<r.Top.Y||h.Y<l.Top.Y){if(r.Top.Y>l.Top.Y)return h.Y=r.Top.Y,h.X=n.Clipper.TopX(l,r.Top.Y),h.X<r.Top.X;h.Y=l.Top.Y,Math.abs(r.Dx)<Math.abs(l.Dx)?h.X=n.Clipper.TopX(r,h.Y):h.X=n.Clipper.TopX(l,h.Y)}h.Y>r.Curr.Y&&(h.Y=r.Curr.Y,Math.abs(r.Dx)>Math.abs(l.Dx)?h.X=n.Clipper.TopX(l,h.Y):h.X=n.Clipper.TopX(r,h.Y))},n.Clipper.prototype.ProcessEdgesAtTopOfScanbeam=function(r){for(var l=this.m_ActiveEdges;l!==null;){var h=this.IsMaxima(l,r);if(h){var d=this.GetMaximaPairEx(l);h=d===null||!n.ClipperBase.IsHorizontal(d)}if(h){this.StrictlySimple&&this.InsertMaxima(l.Top.X);var b=l.PrevInAEL;this.DoMaxima(l),b===null?l=this.m_ActiveEdges:l=b.NextInAEL}else{if(this.IsIntermediate(l,r)&&n.ClipperBase.IsHorizontal(l.NextInLML)?(l=this.UpdateEdgeIntoAEL(l),l.OutIdx>=0&&this.AddOutPt(l,l.Bot),this.AddEdgeToSEL(l)):(l.Curr.X=n.Clipper.TopX(l,r),l.Curr.Y=r),n.use_xyz&&(l.Top.Y===r?l.Curr.Z=l.Top.Z:l.Bot.Y===r?l.Curr.Z=l.Bot.Z:l.Curr.Z=0),this.StrictlySimple){var b=l.PrevInAEL;if(l.OutIdx>=0&&l.WindDelta!==0&&b!==null&&b.OutIdx>=0&&b.Curr.X===l.Curr.X&&b.WindDelta!==0){var A=new n.IntPoint1(l.Curr);n.use_xyz&&this.SetZ(A,b,l);var O=this.AddOutPt(b,A),G=this.AddOutPt(l,A);this.AddJoin(O,G,A)}}l=l.NextInAEL}}for(this.ProcessHorizontals(),this.m_Maxima=null,l=this.m_ActiveEdges;l!==null;){if(this.IsIntermediate(l,r)){var O=null;l.OutIdx>=0&&(O=this.AddOutPt(l,l.Top)),l=this.UpdateEdgeIntoAEL(l);var b=l.PrevInAEL,Y=l.NextInAEL;if(b!==null&&b.Curr.X===l.Bot.X&&b.Curr.Y===l.Bot.Y&&O!==null&&b.OutIdx>=0&&b.Curr.Y===b.Top.Y&&n.ClipperBase.SlopesEqual5(l.Curr,l.Top,b.Curr,b.Top,this.m_UseFullRange)&&l.WindDelta!==0&&b.WindDelta!==0){var G=this.AddOutPt(ePrev2,l.Bot);this.AddJoin(O,G,l.Top)}else if(Y!==null&&Y.Curr.X===l.Bot.X&&Y.Curr.Y===l.Bot.Y&&O!==null&&Y.OutIdx>=0&&Y.Curr.Y===Y.Top.Y&&n.ClipperBase.SlopesEqual5(l.Curr,l.Top,Y.Curr,Y.Top,this.m_UseFullRange)&&l.WindDelta!==0&&Y.WindDelta!==0){var G=this.AddOutPt(Y,l.Bot);this.AddJoin(O,G,l.Top)}}l=l.NextInAEL}},n.Clipper.prototype.DoMaxima=function(r){var l=this.GetMaximaPairEx(r);if(l===null){r.OutIdx>=0&&this.AddOutPt(r,r.Top),this.DeleteFromAEL(r);return}for(var h=r.NextInAEL;h!==null&&h!==l;)this.IntersectEdges(r,h,r.Top),this.SwapPositionsInAEL(r,h),h=r.NextInAEL;r.OutIdx===-1&&l.OutIdx===-1?(this.DeleteFromAEL(r),this.DeleteFromAEL(l)):r.OutIdx>=0&&l.OutIdx>=0?(r.OutIdx>=0&&this.AddLocalMaxPoly(r,l,r.Top),this.DeleteFromAEL(r),this.DeleteFromAEL(l)):n.use_lines&&r.WindDelta===0?(r.OutIdx>=0&&(this.AddOutPt(r,r.Top),r.OutIdx=n.ClipperBase.Unassigned),this.DeleteFromAEL(r),l.OutIdx>=0&&(this.AddOutPt(l,r.Top),l.OutIdx=n.ClipperBase.Unassigned),this.DeleteFromAEL(l)):n.Error("DoMaxima error")},n.Clipper.ReversePaths=function(r){for(var l=0,h=r.length;l<h;l++)r[l].reverse()},n.Clipper.Orientation=function(r){return n.Clipper.Area(r)>=0},n.Clipper.prototype.PointCount=function(r){if(r===null)return 0;var l=0,h=r;do l++,h=h.Next;while(h!==r);return l},n.Clipper.prototype.BuildResult=function(r){n.Clear(r);for(var l=0,h=this.m_PolyOuts.length;l<h;l++){var d=this.m_PolyOuts[l];if(d.Pts!==null){var b=d.Pts.Prev,A=this.PointCount(b);if(!(A<2)){for(var O=new Array(A),G=0;G<A;G++)O[G]=b.Pt,b=b.Prev;r.push(O)}}}},n.Clipper.prototype.BuildResult2=function(r){r.Clear();for(var l=0,h=this.m_PolyOuts.length;l<h;l++){var d=this.m_PolyOuts[l],b=this.PointCount(d.Pts);if(!(d.IsOpen&&b<2||!d.IsOpen&&b<3)){this.FixHoleLinkage(d);var A=new n.PolyNode;r.m_AllPolys.push(A),d.PolyNode=A,A.m_polygon.length=b;for(var O=d.Pts.Prev,G=0;G<b;G++)A.m_polygon[G]=O.Pt,O=O.Prev}}for(var l=0,h=this.m_PolyOuts.length;l<h;l++){var d=this.m_PolyOuts[l];d.PolyNode!==null&&(d.IsOpen?(d.PolyNode.IsOpen=!0,r.AddChild(d.PolyNode)):d.FirstLeft!==null&&d.FirstLeft.PolyNode!==null?d.FirstLeft.PolyNode.AddChild(d.PolyNode):r.AddChild(d.PolyNode))}},n.Clipper.prototype.FixupOutPolyline=function(r){for(var l=r.Pts,h=l.Prev;l!==h;)if(l=l.Next,n.IntPoint.op_Equality(l.Pt,l.Prev.Pt)){l===h&&(h=l.Prev);var d=l.Prev;d.Next=l.Next,l.Next.Prev=d,l=d}l===l.Prev&&(r.Pts=null)},n.Clipper.prototype.FixupOutPolygon=function(r){var l=null;r.BottomPt=null;for(var h=r.Pts,d=this.PreserveCollinear||this.StrictlySimple;;){if(h.Prev===h||h.Prev===h.Next){r.Pts=null;return}if(n.IntPoint.op_Equality(h.Pt,h.Next.Pt)||n.IntPoint.op_Equality(h.Pt,h.Prev.Pt)||n.ClipperBase.SlopesEqual4(h.Prev.Pt,h.Pt,h.Next.Pt,this.m_UseFullRange)&&(!d||!this.Pt2IsBetweenPt1AndPt3(h.Prev.Pt,h.Pt,h.Next.Pt)))l=null,h.Prev.Next=h.Next,h.Next.Prev=h.Prev,h=h.Prev;else{if(h===l)break;l===null&&(l=h),h=h.Next}}r.Pts=h},n.Clipper.prototype.DupOutPt=function(r,l){var h=new n.OutPt;return h.Pt.X=r.Pt.X,h.Pt.Y=r.Pt.Y,n.use_xyz&&(h.Pt.Z=r.Pt.Z),h.Idx=r.Idx,l?(h.Next=r.Next,h.Prev=r,r.Next.Prev=h,r.Next=h):(h.Prev=r.Prev,h.Next=r,r.Prev.Next=h,r.Prev=h),h},n.Clipper.prototype.GetOverlap=function(r,l,h,d,b){return r<l?h<d?(b.Left=Math.max(r,h),b.Right=Math.min(l,d)):(b.Left=Math.max(r,d),b.Right=Math.min(l,h)):h<d?(b.Left=Math.max(l,h),b.Right=Math.min(r,d)):(b.Left=Math.max(l,d),b.Right=Math.min(r,h)),b.Left<b.Right},n.Clipper.prototype.JoinHorz=function(r,l,h,d,b,A){var O=r.Pt.X>l.Pt.X?n.Direction.dRightToLeft:n.Direction.dLeftToRight,G=h.Pt.X>d.Pt.X?n.Direction.dRightToLeft:n.Direction.dLeftToRight;if(O===G)return!1;if(O===n.Direction.dLeftToRight){for(;r.Next.Pt.X<=b.X&&r.Next.Pt.X>=r.Pt.X&&r.Next.Pt.Y===b.Y;)r=r.Next;A&&r.Pt.X!==b.X&&(r=r.Next),l=this.DupOutPt(r,!A),n.IntPoint.op_Inequality(l.Pt,b)&&(r=l,r.Pt.X=b.X,r.Pt.Y=b.Y,n.use_xyz&&(r.Pt.Z=b.Z),l=this.DupOutPt(r,!A))}else{for(;r.Next.Pt.X>=b.X&&r.Next.Pt.X<=r.Pt.X&&r.Next.Pt.Y===b.Y;)r=r.Next;!A&&r.Pt.X!==b.X&&(r=r.Next),l=this.DupOutPt(r,A),n.IntPoint.op_Inequality(l.Pt,b)&&(r=l,r.Pt.X=b.X,r.Pt.Y=b.Y,n.use_xyz&&(r.Pt.Z=b.Z),l=this.DupOutPt(r,A))}if(G===n.Direction.dLeftToRight){for(;h.Next.Pt.X<=b.X&&h.Next.Pt.X>=h.Pt.X&&h.Next.Pt.Y===b.Y;)h=h.Next;A&&h.Pt.X!==b.X&&(h=h.Next),d=this.DupOutPt(h,!A),n.IntPoint.op_Inequality(d.Pt,b)&&(h=d,h.Pt.X=b.X,h.Pt.Y=b.Y,n.use_xyz&&(h.Pt.Z=b.Z),d=this.DupOutPt(h,!A))}else{for(;h.Next.Pt.X>=b.X&&h.Next.Pt.X<=h.Pt.X&&h.Next.Pt.Y===b.Y;)h=h.Next;!A&&h.Pt.X!==b.X&&(h=h.Next),d=this.DupOutPt(h,A),n.IntPoint.op_Inequality(d.Pt,b)&&(h=d,h.Pt.X=b.X,h.Pt.Y=b.Y,n.use_xyz&&(h.Pt.Z=b.Z),d=this.DupOutPt(h,A))}return O===n.Direction.dLeftToRight===A?(r.Prev=h,h.Next=r,l.Next=d,d.Prev=l):(r.Next=h,h.Prev=r,l.Prev=d,d.Next=l),!0},n.Clipper.prototype.JoinPoints=function(r,l,h){var d=r.OutPt1,b=new n.OutPt,A=r.OutPt2,O=new n.OutPt,G=r.OutPt1.Pt.Y===r.OffPt.Y;if(G&&n.IntPoint.op_Equality(r.OffPt,r.OutPt1.Pt)&&n.IntPoint.op_Equality(r.OffPt,r.OutPt2.Pt)){if(l!==h)return!1;for(b=r.OutPt1.Next;b!==d&&n.IntPoint.op_Equality(b.Pt,r.OffPt);)b=b.Next;var Y=b.Pt.Y>r.OffPt.Y;for(O=r.OutPt2.Next;O!==A&&n.IntPoint.op_Equality(O.Pt,r.OffPt);)O=O.Next;var tt=O.Pt.Y>r.OffPt.Y;return Y===tt?!1:Y?(b=this.DupOutPt(d,!1),O=this.DupOutPt(A,!0),d.Prev=A,A.Next=d,b.Next=O,O.Prev=b,r.OutPt1=d,r.OutPt2=b,!0):(b=this.DupOutPt(d,!0),O=this.DupOutPt(A,!1),d.Next=A,A.Prev=d,b.Prev=O,O.Next=b,r.OutPt1=d,r.OutPt2=b,!0)}else if(G){for(b=d;d.Prev.Pt.Y===d.Pt.Y&&d.Prev!==b&&d.Prev!==A;)d=d.Prev;for(;b.Next.Pt.Y===b.Pt.Y&&b.Next!==d&&b.Next!==A;)b=b.Next;if(b.Next===d||b.Next===A)return!1;for(O=A;A.Prev.Pt.Y===A.Pt.Y&&A.Prev!==O&&A.Prev!==b;)A=A.Prev;for(;O.Next.Pt.Y===O.Pt.Y&&O.Next!==A&&O.Next!==d;)O=O.Next;if(O.Next===A||O.Next===d)return!1;var _t={Left:null,Right:null};if(!this.GetOverlap(d.Pt.X,b.Pt.X,A.Pt.X,O.Pt.X,_t))return!1;var xt=_t.Left,Mt=_t.Right,jt=new n.IntPoint0,ce;return d.Pt.X>=xt&&d.Pt.X<=Mt?(jt.X=d.Pt.X,jt.Y=d.Pt.Y,n.use_xyz&&(jt.Z=d.Pt.Z),ce=d.Pt.X>b.Pt.X):A.Pt.X>=xt&&A.Pt.X<=Mt?(jt.X=A.Pt.X,jt.Y=A.Pt.Y,n.use_xyz&&(jt.Z=A.Pt.Z),ce=A.Pt.X>O.Pt.X):b.Pt.X>=xt&&b.Pt.X<=Mt?(jt.X=b.Pt.X,jt.Y=b.Pt.Y,n.use_xyz&&(jt.Z=b.Pt.Z),ce=b.Pt.X>d.Pt.X):(jt.X=O.Pt.X,jt.Y=O.Pt.Y,n.use_xyz&&(jt.Z=O.Pt.Z),ce=O.Pt.X>A.Pt.X),r.OutPt1=d,r.OutPt2=A,this.JoinHorz(d,b,A,O,jt,ce)}else{for(b=d.Next;n.IntPoint.op_Equality(b.Pt,d.Pt)&&b!==d;)b=b.Next;var ye=b.Pt.Y>d.Pt.Y||!n.ClipperBase.SlopesEqual4(d.Pt,b.Pt,r.OffPt,this.m_UseFullRange);if(ye){for(b=d.Prev;n.IntPoint.op_Equality(b.Pt,d.Pt)&&b!==d;)b=b.Prev;if(b.Pt.Y>d.Pt.Y||!n.ClipperBase.SlopesEqual4(d.Pt,b.Pt,r.OffPt,this.m_UseFullRange))return!1}for(O=A.Next;n.IntPoint.op_Equality(O.Pt,A.Pt)&&O!==A;)O=O.Next;var ke=O.Pt.Y>A.Pt.Y||!n.ClipperBase.SlopesEqual4(A.Pt,O.Pt,r.OffPt,this.m_UseFullRange);if(ke){for(O=A.Prev;n.IntPoint.op_Equality(O.Pt,A.Pt)&&O!==A;)O=O.Prev;if(O.Pt.Y>A.Pt.Y||!n.ClipperBase.SlopesEqual4(A.Pt,O.Pt,r.OffPt,this.m_UseFullRange))return!1}return b===d||O===A||b===O||l===h&&ye===ke?!1:ye?(b=this.DupOutPt(d,!1),O=this.DupOutPt(A,!0),d.Prev=A,A.Next=d,b.Next=O,O.Prev=b,r.OutPt1=d,r.OutPt2=b,!0):(b=this.DupOutPt(d,!0),O=this.DupOutPt(A,!1),d.Next=A,A.Prev=d,b.Prev=O,O.Next=b,r.OutPt1=d,r.OutPt2=b,!0)}},n.Clipper.GetBounds=function(r){for(var l=0,h=r.length;l<h&&r[l].length===0;)l++;if(l===h)return new n.IntRect(0,0,0,0);var d=new n.IntRect;for(d.left=r[l][0].X,d.right=d.left,d.top=r[l][0].Y,d.bottom=d.top;l<h;l++)for(var b=0,A=r[l].length;b<A;b++)r[l][b].X<d.left?d.left=r[l][b].X:r[l][b].X>d.right&&(d.right=r[l][b].X),r[l][b].Y<d.top?d.top=r[l][b].Y:r[l][b].Y>d.bottom&&(d.bottom=r[l][b].Y);return d},n.Clipper.prototype.GetBounds2=function(r){var l=r,h=new n.IntRect;for(h.left=r.Pt.X,h.right=r.Pt.X,h.top=r.Pt.Y,h.bottom=r.Pt.Y,r=r.Next;r!==l;)r.Pt.X<h.left&&(h.left=r.Pt.X),r.Pt.X>h.right&&(h.right=r.Pt.X),r.Pt.Y<h.top&&(h.top=r.Pt.Y),r.Pt.Y>h.bottom&&(h.bottom=r.Pt.Y),r=r.Next;return h},n.Clipper.PointInPolygon=function(r,l){var h=0,d=l.length;if(d<3)return 0;for(var b=l[0],A=1;A<=d;++A){var O=A===d?l[0]:l[A];if(O.Y===r.Y&&(O.X===r.X||b.Y===r.Y&&O.X>r.X==b.X<r.X))return-1;if(b.Y<r.Y!=O.Y<r.Y){if(b.X>=r.X)if(O.X>r.X)h=1-h;else{var G=(b.X-r.X)*(O.Y-r.Y)-(O.X-r.X)*(b.Y-r.Y);if(G===0)return-1;G>0==O.Y>b.Y&&(h=1-h)}else if(O.X>r.X){var G=(b.X-r.X)*(O.Y-r.Y)-(O.X-r.X)*(b.Y-r.Y);if(G===0)return-1;G>0==O.Y>b.Y&&(h=1-h)}}b=O}return h},n.Clipper.prototype.PointInPolygon=function(r,l){var h=0,d=l,b=r.X,A=r.Y,O=l.Pt.X,G=l.Pt.Y;do{l=l.Next;var Y=l.Pt.X,tt=l.Pt.Y;if(tt===A&&(Y===b||G===A&&Y>b==O<b))return-1;if(G<A!=tt<A){if(O>=b)if(Y>b)h=1-h;else{var _t=(O-b)*(tt-A)-(Y-b)*(G-A);if(_t===0)return-1;_t>0==tt>G&&(h=1-h)}else if(Y>b){var _t=(O-b)*(tt-A)-(Y-b)*(G-A);if(_t===0)return-1;_t>0==tt>G&&(h=1-h)}}O=Y,G=tt}while(d!==l);return h},n.Clipper.prototype.Poly2ContainsPoly1=function(r,l){var h=r;do{var d=this.PointInPolygon(h.Pt,l);if(d>=0)return d>0;h=h.Next}while(h!==r);return!0},n.Clipper.prototype.FixupFirstLefts1=function(r,l){for(var h,d,b=0,A=this.m_PolyOuts.length;b<A;b++)h=this.m_PolyOuts[b],d=n.Clipper.ParseFirstLeft(h.FirstLeft),h.Pts!==null&&d===r&&this.Poly2ContainsPoly1(h.Pts,l.Pts)&&(h.FirstLeft=l)},n.Clipper.prototype.FixupFirstLefts2=function(r,l){for(var h=l.FirstLeft,d,b,A=0,O=this.m_PolyOuts.length;A<O;A++)d=this.m_PolyOuts[A],!(d.Pts===null||d===l||d===r)&&(b=n.Clipper.ParseFirstLeft(d.FirstLeft),!(b!==h&&b!==r&&b!==l)&&(this.Poly2ContainsPoly1(d.Pts,r.Pts)?d.FirstLeft=r:this.Poly2ContainsPoly1(d.Pts,l.Pts)?d.FirstLeft=l:(d.FirstLeft===r||d.FirstLeft===l)&&(d.FirstLeft=h)))},n.Clipper.prototype.FixupFirstLefts3=function(r,l){for(var h,d,b=0,A=this.m_PolyOuts.length;b<A;b++)h=this.m_PolyOuts[b],d=n.Clipper.ParseFirstLeft(h.FirstLeft),h.Pts!==null&&d===r&&(h.FirstLeft=l)},n.Clipper.ParseFirstLeft=function(r){for(;r!==null&&r.Pts===null;)r=r.FirstLeft;return r},n.Clipper.prototype.JoinCommonEdges=function(){for(var r=0,l=this.m_Joins.length;r<l;r++){var h=this.m_Joins[r],d=this.GetOutRec(h.OutPt1.Idx),b=this.GetOutRec(h.OutPt2.Idx);if(!(d.Pts===null||b.Pts===null)&&!(d.IsOpen||b.IsOpen)){var A;d===b?A=d:this.OutRec1RightOfOutRec2(d,b)?A=b:this.OutRec1RightOfOutRec2(b,d)?A=d:A=this.GetLowermostRec(d,b),this.JoinPoints(h,d,b)&&(d===b?(d.Pts=h.OutPt1,d.BottomPt=null,b=this.CreateOutRec(),b.Pts=h.OutPt2,this.UpdateOutPtIdxs(b),this.Poly2ContainsPoly1(b.Pts,d.Pts)?(b.IsHole=!d.IsHole,b.FirstLeft=d,this.m_UsingPolyTree&&this.FixupFirstLefts2(b,d),(b.IsHole^this.ReverseSolution)==this.Area$1(b)>0&&this.ReversePolyPtLinks(b.Pts)):this.Poly2ContainsPoly1(d.Pts,b.Pts)?(b.IsHole=d.IsHole,d.IsHole=!b.IsHole,b.FirstLeft=d.FirstLeft,d.FirstLeft=b,this.m_UsingPolyTree&&this.FixupFirstLefts2(d,b),(d.IsHole^this.ReverseSolution)==this.Area$1(d)>0&&this.ReversePolyPtLinks(d.Pts)):(b.IsHole=d.IsHole,b.FirstLeft=d.FirstLeft,this.m_UsingPolyTree&&this.FixupFirstLefts1(d,b))):(b.Pts=null,b.BottomPt=null,b.Idx=d.Idx,d.IsHole=A.IsHole,A===b&&(d.FirstLeft=b.FirstLeft),b.FirstLeft=d,this.m_UsingPolyTree&&this.FixupFirstLefts3(b,d)))}}},n.Clipper.prototype.UpdateOutPtIdxs=function(r){var l=r.Pts;do l.Idx=r.Idx,l=l.Prev;while(l!==r.Pts)},n.Clipper.prototype.DoSimplePolygons=function(){for(var r=0;r<this.m_PolyOuts.length;){var l=this.m_PolyOuts[r++],h=l.Pts;if(!(h===null||l.IsOpen))do{for(var d=h.Next;d!==l.Pts;){if(n.IntPoint.op_Equality(h.Pt,d.Pt)&&d.Next!==h&&d.Prev!==h){var b=h.Prev,A=d.Prev;h.Prev=A,A.Next=h,d.Prev=b,b.Next=d,l.Pts=h;var O=this.CreateOutRec();O.Pts=d,this.UpdateOutPtIdxs(O),this.Poly2ContainsPoly1(O.Pts,l.Pts)?(O.IsHole=!l.IsHole,O.FirstLeft=l,this.m_UsingPolyTree&&this.FixupFirstLefts2(O,l)):this.Poly2ContainsPoly1(l.Pts,O.Pts)?(O.IsHole=l.IsHole,l.IsHole=!O.IsHole,O.FirstLeft=l.FirstLeft,l.FirstLeft=O,this.m_UsingPolyTree&&this.FixupFirstLefts2(l,O)):(O.IsHole=l.IsHole,O.FirstLeft=l.FirstLeft,this.m_UsingPolyTree&&this.FixupFirstLefts1(l,O)),d=h}d=d.Next}h=h.Next}while(h!==l.Pts)}},n.Clipper.Area=function(r){if(!Array.isArray(r))return 0;var l=r.length;if(l<3)return 0;for(var h=0,d=0,b=l-1;d<l;++d)h+=(r[b].X+r[d].X)*(r[b].Y-r[d].Y),b=d;return-h*.5},n.Clipper.prototype.Area=function(r){var l=r;if(r===null)return 0;var h=0;do h=h+(r.Prev.Pt.X+r.Pt.X)*(r.Prev.Pt.Y-r.Pt.Y),r=r.Next;while(r!==l);return h*.5},n.Clipper.prototype.Area$1=function(r){return this.Area(r.Pts)},n.Clipper.SimplifyPolygon=function(r,l){var h=new Array,d=new n.Clipper(0);return d.StrictlySimple=!0,d.AddPath(r,n.PolyType.ptSubject,!0),d.Execute(n.ClipType.ctUnion,h,l,l),h},n.Clipper.SimplifyPolygons=function(r,l){typeof l>"u"&&(l=n.PolyFillType.pftEvenOdd);var h=new Array,d=new n.Clipper(0);return d.StrictlySimple=!0,d.AddPaths(r,n.PolyType.ptSubject,!0),d.Execute(n.ClipType.ctUnion,h,l,l),h},n.Clipper.DistanceSqrd=function(r,l){var h=r.X-l.X,d=r.Y-l.Y;return h*h+d*d},n.Clipper.DistanceFromLineSqrd=function(r,l,h){var d=l.Y-h.Y,b=h.X-l.X,A=d*l.X+b*l.Y;return A=d*r.X+b*r.Y-A,A*A/(d*d+b*b)},n.Clipper.SlopesNearCollinear=function(r,l,h,d){return Math.abs(r.X-l.X)>Math.abs(r.Y-l.Y)?r.X>l.X==r.X<h.X?n.Clipper.DistanceFromLineSqrd(r,l,h)<d:l.X>r.X==l.X<h.X?n.Clipper.DistanceFromLineSqrd(l,r,h)<d:n.Clipper.DistanceFromLineSqrd(h,r,l)<d:r.Y>l.Y==r.Y<h.Y?n.Clipper.DistanceFromLineSqrd(r,l,h)<d:l.Y>r.Y==l.Y<h.Y?n.Clipper.DistanceFromLineSqrd(l,r,h)<d:n.Clipper.DistanceFromLineSqrd(h,r,l)<d},n.Clipper.PointsAreClose=function(r,l,h){var d=r.X-l.X,b=r.Y-l.Y;return d*d+b*b<=h},n.Clipper.ExcludeOp=function(r){var l=r.Prev;return l.Next=r.Next,r.Next.Prev=l,l.Idx=0,l},n.Clipper.CleanPolygon=function(r,l){typeof l>"u"&&(l=1.415);var h=r.length;if(h===0)return new Array;for(var d=new Array(h),b=0;b<h;++b)d[b]=new n.OutPt;for(var b=0;b<h;++b)d[b].Pt=r[b],d[b].Next=d[(b+1)%h],d[b].Next.Prev=d[b],d[b].Idx=0;for(var A=l*l,O=d[0];O.Idx===0&&O.Next!==O.Prev;)n.Clipper.PointsAreClose(O.Pt,O.Prev.Pt,A)?(O=n.Clipper.ExcludeOp(O),h--):n.Clipper.PointsAreClose(O.Prev.Pt,O.Next.Pt,A)?(n.Clipper.ExcludeOp(O.Next),O=n.Clipper.ExcludeOp(O),h-=2):n.Clipper.SlopesNearCollinear(O.Prev.Pt,O.Pt,O.Next.Pt,A)?(O=n.Clipper.ExcludeOp(O),h--):(O.Idx=1,O=O.Next);h<3&&(h=0);for(var G=new Array(h),b=0;b<h;++b)G[b]=new n.IntPoint1(O.Pt),O=O.Next;return d=null,G},n.Clipper.CleanPolygons=function(r,l){for(var h=new Array(r.length),d=0,b=r.length;d<b;d++)h[d]=n.Clipper.CleanPolygon(r[d],l);return h},n.Clipper.Minkowski=function(r,l,h,d){var b=d?1:0,A=r.length,O=l.length,G=new Array;if(h)for(var Y=0;Y<O;Y++){for(var tt=new Array(A),_t=0,xt=r.length,Mt=r[_t];_t<xt;_t++,Mt=r[_t])tt[_t]=new n.IntPoint2(l[Y].X+Mt.X,l[Y].Y+Mt.Y);G.push(tt)}else for(var Y=0;Y<O;Y++){for(var tt=new Array(A),_t=0,xt=r.length,Mt=r[_t];_t<xt;_t++,Mt=r[_t])tt[_t]=new n.IntPoint2(l[Y].X-Mt.X,l[Y].Y-Mt.Y);G.push(tt)}for(var jt=new Array,Y=0;Y<O-1+b;Y++)for(var _t=0;_t<A;_t++){var ce=new Array;ce.push(G[Y%O][_t%A]),ce.push(G[(Y+1)%O][_t%A]),ce.push(G[(Y+1)%O][(_t+1)%A]),ce.push(G[Y%O][(_t+1)%A]),n.Clipper.Orientation(ce)||ce.reverse(),jt.push(ce)}return jt},n.Clipper.MinkowskiSum=function(r,l,h){if(l[0]instanceof Array){for(var b=l,O=new n.Paths,A=new n.Clipper,G=0;G<b.length;++G){var Y=n.Clipper.Minkowski(r,b[G],!0,h);if(A.AddPaths(Y,n.PolyType.ptSubject,!0),h){var d=n.Clipper.TranslatePath(b[G],r[0]);A.AddPath(d,n.PolyType.ptClip,!0)}}return A.Execute(n.ClipType.ctUnion,O,n.PolyFillType.pftNonZero,n.PolyFillType.pftNonZero),O}else{var d=l,b=n.Clipper.Minkowski(r,d,!0,h),A=new n.Clipper;return A.AddPaths(b,n.PolyType.ptSubject,!0),A.Execute(n.ClipType.ctUnion,b,n.PolyFillType.pftNonZero,n.PolyFillType.pftNonZero),b}},n.Clipper.TranslatePath=function(r,l){for(var h=new n.Path,d=0;d<r.length;d++)h.push(new n.IntPoint2(r[d].X+l.X,r[d].Y+l.Y));return h},n.Clipper.MinkowskiDiff=function(r,l){var h=n.Clipper.Minkowski(r,l,!1,!0),d=new n.Clipper;return d.AddPaths(h,n.PolyType.ptSubject,!0),d.Execute(n.ClipType.ctUnion,h,n.PolyFillType.pftNonZero,n.PolyFillType.pftNonZero),h},n.Clipper.PolyTreeToPaths=function(r){var l=new Array;return n.Clipper.AddPolyNodeToPaths(r,n.Clipper.NodeType.ntAny,l),l},n.Clipper.AddPolyNodeToPaths=function(r,l,h){var d=!0;switch(l){case n.Clipper.NodeType.ntOpen:return;case n.Clipper.NodeType.ntClosed:d=!r.IsOpen;break;default:break}r.m_polygon.length>0&&d&&h.push(r.m_polygon);for(var b=0,A=r.Childs(),O=A.length,G=A[b];b<O;b++,G=A[b])n.Clipper.AddPolyNodeToPaths(G,l,h)},n.Clipper.OpenPathsFromPolyTree=function(r){for(var l=new n.Paths,h=0,d=r.ChildCount();h<d;h++)r.Childs()[h].IsOpen&&l.push(r.Childs()[h].m_polygon);return l},n.Clipper.ClosedPathsFromPolyTree=function(r){var l=new n.Paths;return n.Clipper.AddPolyNodeToPaths(r,n.Clipper.NodeType.ntClosed,l),l},xe(n.Clipper,n.ClipperBase),n.Clipper.NodeType={ntAny:0,ntOpen:1,ntClosed:2},n.ClipperOffset=function(r,l){typeof r>"u"&&(r=2),typeof l>"u"&&(l=n.ClipperOffset.def_arc_tolerance),this.m_destPolys=new n.Paths,this.m_srcPoly=new n.Path,this.m_destPoly=new n.Path,this.m_normals=new Array,this.m_delta=0,this.m_sinA=0,this.m_sin=0,this.m_cos=0,this.m_miterLim=0,this.m_StepsPerRad=0,this.m_lowest=new n.IntPoint0,this.m_polyNodes=new n.PolyNode,this.MiterLimit=r,this.ArcTolerance=l,this.m_lowest.X=-1},n.ClipperOffset.two_pi=6.28318530717959,n.ClipperOffset.def_arc_tolerance=.25,n.ClipperOffset.prototype.Clear=function(){n.Clear(this.m_polyNodes.Childs()),this.m_lowest.X=-1},n.ClipperOffset.Round=n.Clipper.Round,n.ClipperOffset.prototype.AddPath=function(r,l,h){var d=r.length-1;if(!(d<0)){var b=new n.PolyNode;if(b.m_jointype=l,b.m_endtype=h,h===n.EndType.etClosedLine||h===n.EndType.etClosedPolygon)for(;d>0&&n.IntPoint.op_Equality(r[0],r[d]);)d--;b.m_polygon.push(r[0]);for(var A=0,O=0,G=1;G<=d;G++)n.IntPoint.op_Inequality(b.m_polygon[A],r[G])&&(A++,b.m_polygon.push(r[G]),(r[G].Y>b.m_polygon[O].Y||r[G].Y===b.m_polygon[O].Y&&r[G].X<b.m_polygon[O].X)&&(O=A));if(!(h===n.EndType.etClosedPolygon&&A<2)&&(this.m_polyNodes.AddChild(b),h===n.EndType.etClosedPolygon))if(this.m_lowest.X<0)this.m_lowest=new n.IntPoint2(this.m_polyNodes.ChildCount()-1,O);else{var Y=this.m_polyNodes.Childs()[this.m_lowest.X].m_polygon[this.m_lowest.Y];(b.m_polygon[O].Y>Y.Y||b.m_polygon[O].Y===Y.Y&&b.m_polygon[O].X<Y.X)&&(this.m_lowest=new n.IntPoint2(this.m_polyNodes.ChildCount()-1,O))}}},n.ClipperOffset.prototype.AddPaths=function(r,l,h){for(var d=0,b=r.length;d<b;d++)this.AddPath(r[d],l,h)},n.ClipperOffset.prototype.FixOrientations=function(){if(this.m_lowest.X>=0&&!n.Clipper.Orientation(this.m_polyNodes.Childs()[this.m_lowest.X].m_polygon))for(var r=0;r<this.m_polyNodes.ChildCount();r++){var l=this.m_polyNodes.Childs()[r];(l.m_endtype===n.EndType.etClosedPolygon||l.m_endtype===n.EndType.etClosedLine&&n.Clipper.Orientation(l.m_polygon))&&l.m_polygon.reverse()}else for(var r=0;r<this.m_polyNodes.ChildCount();r++){var l=this.m_polyNodes.Childs()[r];l.m_endtype===n.EndType.etClosedLine&&!n.Clipper.Orientation(l.m_polygon)&&l.m_polygon.reverse()}},n.ClipperOffset.GetUnitNormal=function(r,l){var h=l.X-r.X,d=l.Y-r.Y;if(h===0&&d===0)return new n.DoublePoint2(0,0);var b=1/Math.sqrt(h*h+d*d);return h*=b,d*=b,new n.DoublePoint2(d,-h)},n.ClipperOffset.prototype.DoOffset=function(r){if(this.m_destPolys=new Array,this.m_delta=r,n.ClipperBase.near_zero(r)){for(var l=0;l<this.m_polyNodes.ChildCount();l++){var h=this.m_polyNodes.Childs()[l];h.m_endtype===n.EndType.etClosedPolygon&&this.m_destPolys.push(h.m_polygon)}return}this.MiterLimit>2?this.m_miterLim=2/(this.MiterLimit*this.MiterLimit):this.m_miterLim=.5;var d;this.ArcTolerance<=0?d=n.ClipperOffset.def_arc_tolerance:this.ArcTolerance>Math.abs(r)*n.ClipperOffset.def_arc_tolerance?d=Math.abs(r)*n.ClipperOffset.def_arc_tolerance:d=this.ArcTolerance;var b=3.14159265358979/Math.acos(1-d/Math.abs(r));this.m_sin=Math.sin(n.ClipperOffset.two_pi/b),this.m_cos=Math.cos(n.ClipperOffset.two_pi/b),this.m_StepsPerRad=b/n.ClipperOffset.two_pi,r<0&&(this.m_sin=-this.m_sin);for(var l=0;l<this.m_polyNodes.ChildCount();l++){var h=this.m_polyNodes.Childs()[l];this.m_srcPoly=h.m_polygon;var A=this.m_srcPoly.length;if(!(A===0||r<=0&&(A<3||h.m_endtype!==n.EndType.etClosedPolygon))){if(this.m_destPoly=new Array,A===1){if(h.m_jointype===n.JoinType.jtRound)for(var O=1,G=0,Y=1;Y<=b;Y++){this.m_destPoly.push(new n.IntPoint2(n.ClipperOffset.Round(this.m_srcPoly[0].X+O*r),n.ClipperOffset.Round(this.m_srcPoly[0].Y+G*r)));var tt=O;O=O*this.m_cos-this.m_sin*G,G=tt*this.m_sin+G*this.m_cos}else for(var O=-1,G=-1,Y=0;Y<4;++Y)this.m_destPoly.push(new n.IntPoint2(n.ClipperOffset.Round(this.m_srcPoly[0].X+O*r),n.ClipperOffset.Round(this.m_srcPoly[0].Y+G*r))),O<0?O=1:G<0?G=1:O=-1;this.m_destPolys.push(this.m_destPoly);continue}this.m_normals.length=0;for(var Y=0;Y<A-1;Y++)this.m_normals.push(n.ClipperOffset.GetUnitNormal(this.m_srcPoly[Y],this.m_srcPoly[Y+1]));if(h.m_endtype===n.EndType.etClosedLine||h.m_endtype===n.EndType.etClosedPolygon?this.m_normals.push(n.ClipperOffset.GetUnitNormal(this.m_srcPoly[A-1],this.m_srcPoly[0])):this.m_normals.push(new n.DoublePoint1(this.m_normals[A-2])),h.m_endtype===n.EndType.etClosedPolygon){for(var _t=A-1,Y=0;Y<A;Y++)_t=this.OffsetPoint(Y,_t,h.m_jointype);this.m_destPolys.push(this.m_destPoly)}else if(h.m_endtype===n.EndType.etClosedLine){for(var _t=A-1,Y=0;Y<A;Y++)_t=this.OffsetPoint(Y,_t,h.m_jointype);this.m_destPolys.push(this.m_destPoly),this.m_destPoly=new Array;for(var xt=this.m_normals[A-1],Y=A-1;Y>0;Y--)this.m_normals[Y]=new n.DoublePoint2(-this.m_normals[Y-1].X,-this.m_normals[Y-1].Y);this.m_normals[0]=new n.DoublePoint2(-xt.X,-xt.Y),_t=0;for(var Y=A-1;Y>=0;Y--)_t=this.OffsetPoint(Y,_t,h.m_jointype);this.m_destPolys.push(this.m_destPoly)}else{for(var _t=0,Y=1;Y<A-1;++Y)_t=this.OffsetPoint(Y,_t,h.m_jointype);var Mt;if(h.m_endtype===n.EndType.etOpenButt){var Y=A-1;Mt=new n.IntPoint2(n.ClipperOffset.Round(this.m_srcPoly[Y].X+this.m_normals[Y].X*r),n.ClipperOffset.Round(this.m_srcPoly[Y].Y+this.m_normals[Y].Y*r)),this.m_destPoly.push(Mt),Mt=new n.IntPoint2(n.ClipperOffset.Round(this.m_srcPoly[Y].X-this.m_normals[Y].X*r),n.ClipperOffset.Round(this.m_srcPoly[Y].Y-this.m_normals[Y].Y*r)),this.m_destPoly.push(Mt)}else{var Y=A-1;_t=A-2,this.m_sinA=0,this.m_normals[Y]=new n.DoublePoint2(-this.m_normals[Y].X,-this.m_normals[Y].Y),h.m_endtype===n.EndType.etOpenSquare?this.DoSquare(Y,_t):this.DoRound(Y,_t)}for(var Y=A-1;Y>0;Y--)this.m_normals[Y]=new n.DoublePoint2(-this.m_normals[Y-1].X,-this.m_normals[Y-1].Y);this.m_normals[0]=new n.DoublePoint2(-this.m_normals[1].X,-this.m_normals[1].Y),_t=A-1;for(var Y=_t-1;Y>0;--Y)_t=this.OffsetPoint(Y,_t,h.m_jointype);h.m_endtype===n.EndType.etOpenButt?(Mt=new n.IntPoint2(n.ClipperOffset.Round(this.m_srcPoly[0].X-this.m_normals[0].X*r),n.ClipperOffset.Round(this.m_srcPoly[0].Y-this.m_normals[0].Y*r)),this.m_destPoly.push(Mt),Mt=new n.IntPoint2(n.ClipperOffset.Round(this.m_srcPoly[0].X+this.m_normals[0].X*r),n.ClipperOffset.Round(this.m_srcPoly[0].Y+this.m_normals[0].Y*r)),this.m_destPoly.push(Mt)):(_t=1,this.m_sinA=0,h.m_endtype===n.EndType.etOpenSquare?this.DoSquare(0,1):this.DoRound(0,1)),this.m_destPolys.push(this.m_destPoly)}}}},n.ClipperOffset.prototype.Execute=function(){var r=arguments,l=r[0]instanceof n.PolyTree;if(l){var h=r[0],d=r[1];h.Clear(),this.FixOrientations(),this.DoOffset(d);var b=new n.Clipper(0);if(b.AddPaths(this.m_destPolys,n.PolyType.ptSubject,!0),d>0)b.Execute(n.ClipType.ctUnion,h,n.PolyFillType.pftPositive,n.PolyFillType.pftPositive);else{var A=n.Clipper.GetBounds(this.m_destPolys),O=new n.Path;if(O.push(new n.IntPoint2(A.left-10,A.bottom+10)),O.push(new n.IntPoint2(A.right+10,A.bottom+10)),O.push(new n.IntPoint2(A.right+10,A.top-10)),O.push(new n.IntPoint2(A.left-10,A.top-10)),b.AddPath(O,n.PolyType.ptSubject,!0),b.ReverseSolution=!0,b.Execute(n.ClipType.ctUnion,h,n.PolyFillType.pftNegative,n.PolyFillType.pftNegative),h.ChildCount()===1&&h.Childs()[0].ChildCount()>0){var G=h.Childs()[0];h.Childs()[0]=G.Childs()[0],h.Childs()[0].m_Parent=h;for(var Y=1;Y<G.ChildCount();Y++)h.AddChild(G.Childs()[Y])}else h.Clear()}}else{var h=r[0],d=r[1];n.Clear(h),this.FixOrientations(),this.DoOffset(d);var b=new n.Clipper(0);if(b.AddPaths(this.m_destPolys,n.PolyType.ptSubject,!0),d>0)b.Execute(n.ClipType.ctUnion,h,n.PolyFillType.pftPositive,n.PolyFillType.pftPositive);else{var A=n.Clipper.GetBounds(this.m_destPolys),O=new n.Path;O.push(new n.IntPoint2(A.left-10,A.bottom+10)),O.push(new n.IntPoint2(A.right+10,A.bottom+10)),O.push(new n.IntPoint2(A.right+10,A.top-10)),O.push(new n.IntPoint2(A.left-10,A.top-10)),b.AddPath(O,n.PolyType.ptSubject,!0),b.ReverseSolution=!0,b.Execute(n.ClipType.ctUnion,h,n.PolyFillType.pftNegative,n.PolyFillType.pftNegative),h.length>0&&h.splice(0,1)}}},n.ClipperOffset.prototype.OffsetPoint=function(r,l,h){if(this.m_sinA=this.m_normals[l].X*this.m_normals[r].Y-this.m_normals[r].X*this.m_normals[l].Y,Math.abs(this.m_sinA*this.m_delta)<1){var d=this.m_normals[l].X*this.m_normals[r].X+this.m_normals[r].Y*this.m_normals[l].Y;if(d>0)return this.m_destPoly.push(new n.IntPoint2(n.ClipperOffset.Round(this.m_srcPoly[r].X+this.m_normals[l].X*this.m_delta),n.ClipperOffset.Round(this.m_srcPoly[r].Y+this.m_normals[l].Y*this.m_delta))),l}else this.m_sinA>1?this.m_sinA=1:this.m_sinA<-1&&(this.m_sinA=-1);if(this.m_sinA*this.m_delta<0)this.m_destPoly.push(new n.IntPoint2(n.ClipperOffset.Round(this.m_srcPoly[r].X+this.m_normals[l].X*this.m_delta),n.ClipperOffset.Round(this.m_srcPoly[r].Y+this.m_normals[l].Y*this.m_delta))),this.m_destPoly.push(new n.IntPoint1(this.m_srcPoly[r])),this.m_destPoly.push(new n.IntPoint2(n.ClipperOffset.Round(this.m_srcPoly[r].X+this.m_normals[r].X*this.m_delta),n.ClipperOffset.Round(this.m_srcPoly[r].Y+this.m_normals[r].Y*this.m_delta)));else switch(h){case n.JoinType.jtMiter:{var b=1+(this.m_normals[r].X*this.m_normals[l].X+this.m_normals[r].Y*this.m_normals[l].Y);b>=this.m_miterLim?this.DoMiter(r,l,b):this.DoSquare(r,l);break}case n.JoinType.jtSquare:this.DoSquare(r,l);break;case n.JoinType.jtRound:this.DoRound(r,l);break}return l=r,l},n.ClipperOffset.prototype.DoSquare=function(r,l){var h=Math.tan(Math.atan2(this.m_sinA,this.m_normals[l].X*this.m_normals[r].X+this.m_normals[l].Y*this.m_normals[r].Y)/4);this.m_destPoly.push(new n.IntPoint2(n.ClipperOffset.Round(this.m_srcPoly[r].X+this.m_delta*(this.m_normals[l].X-this.m_normals[l].Y*h)),n.ClipperOffset.Round(this.m_srcPoly[r].Y+this.m_delta*(this.m_normals[l].Y+this.m_normals[l].X*h)))),this.m_destPoly.push(new n.IntPoint2(n.ClipperOffset.Round(this.m_srcPoly[r].X+this.m_delta*(this.m_normals[r].X+this.m_normals[r].Y*h)),n.ClipperOffset.Round(this.m_srcPoly[r].Y+this.m_delta*(this.m_normals[r].Y-this.m_normals[r].X*h))))},n.ClipperOffset.prototype.DoMiter=function(r,l,h){var d=this.m_delta/h;this.m_destPoly.push(new n.IntPoint2(n.ClipperOffset.Round(this.m_srcPoly[r].X+(this.m_normals[l].X+this.m_normals[r].X)*d),n.ClipperOffset.Round(this.m_srcPoly[r].Y+(this.m_normals[l].Y+this.m_normals[r].Y)*d)))},n.ClipperOffset.prototype.DoRound=function(r,l){for(var h=Math.atan2(this.m_sinA,this.m_normals[l].X*this.m_normals[r].X+this.m_normals[l].Y*this.m_normals[r].Y),d=Math.max(n.Cast_Int32(n.ClipperOffset.Round(this.m_StepsPerRad*Math.abs(h))),1),b=this.m_normals[l].X,A=this.m_normals[l].Y,O,G=0;G<d;++G)this.m_destPoly.push(new n.IntPoint2(n.ClipperOffset.Round(this.m_srcPoly[r].X+b*this.m_delta),n.ClipperOffset.Round(this.m_srcPoly[r].Y+A*this.m_delta))),O=b,b=b*this.m_cos-this.m_sin*A,A=O*this.m_sin+A*this.m_cos;this.m_destPoly.push(new n.IntPoint2(n.ClipperOffset.Round(this.m_srcPoly[r].X+this.m_normals[r].X*this.m_delta),n.ClipperOffset.Round(this.m_srcPoly[r].Y+this.m_normals[r].Y*this.m_delta)))},n.Error=function(r){try{throw new Error(r)}catch(l){alert(l.message)}},n.JS={},n.JS.AreaOfPolygon=function(r,l){return l||(l=1),n.Clipper.Area(r)/(l*l)},n.JS.AreaOfPolygons=function(r,l){l||(l=1);for(var h=0,d=0;d<r.length;d++)h+=n.Clipper.Area(r[d]);return h/(l*l)},n.JS.BoundsOfPath=function(r,l){return n.JS.BoundsOfPaths([r],l)},n.JS.BoundsOfPaths=function(r,l){l||(l=1);var h=n.Clipper.GetBounds(r);return h.left/=l,h.bottom/=l,h.right/=l,h.top/=l,h},n.JS.Clean=function(d,l){if(!(d instanceof Array))return[];var h=d[0]instanceof Array,d=n.JS.Clone(d);if(typeof l!="number"||l===null)return n.Error("Delta is not a number in Clean()."),d;if(d.length===0||d.length===1&&d[0].length===0||l<0)return d;h||(d=[d]);for(var b=d.length,A,O,G,Y,tt,_t,xt,Mt=[],jt=0;jt<b;jt++)if(O=d[jt],A=O.length,A!==0){if(A<3){G=O,Mt.push(G);continue}for(G=O,Y=l*l,tt=O[0],_t=1,xt=1;xt<A;xt++)(O[xt].X-tt.X)*(O[xt].X-tt.X)+(O[xt].Y-tt.Y)*(O[xt].Y-tt.Y)<=Y||(G[_t]=O[xt],tt=O[xt],_t++);tt=O[_t-1],(O[0].X-tt.X)*(O[0].X-tt.X)+(O[0].Y-tt.Y)*(O[0].Y-tt.Y)<=Y&&_t--,_t<A&&G.splice(_t,A-_t),G.length&&Mt.push(G)}return!h&&Mt.length?Mt=Mt[0]:!h&&Mt.length===0?Mt=[]:h&&Mt.length===0&&(Mt=[[]]),Mt},n.JS.Clone=function(r){if(!(r instanceof Array))return[];if(r.length===0)return[];if(r.length===1&&r[0].length===0)return[[]];var l=r[0]instanceof Array;l||(r=[r]);var h=r.length,d,b,A,O,G=new Array(h);for(b=0;b<h;b++){for(d=r[b].length,O=new Array(d),A=0;A<d;A++)O[A]={X:r[b][A].X,Y:r[b][A].Y};G[b]=O}return l||(G=G[0]),G},n.JS.Lighten=function(r,l){if(!(r instanceof Array))return[];if(typeof l!="number"||l===null)return n.Error("Tolerance is not a number in Lighten()."),n.JS.Clone(r);if(r.length===0||r.length===1&&r[0].length===0||l<0)return n.JS.Clone(r);var h=r[0]instanceof Array;h||(r=[r]);var d,b,A,O,G,Y,tt,_t,xt,Mt,jt,ce,ye,ke,Pn,li,As,hm=r.length,um=l*l,Ps=[];for(d=0;d<hm;d++)if(A=r[d],Y=A.length,Y!==0){for(O=0;O<1e6;O++){for(G=[],Y=A.length,A[Y-1].X!==A[0].X||A[Y-1].Y!==A[0].Y?(ce=1,A.push({X:A[0].X,Y:A[0].Y}),Y=A.length):ce=0,jt=[],b=0;b<Y-2;b++)tt=A[b],xt=A[b+1],_t=A[b+2],li=tt.X,As=tt.Y,ye=_t.X-li,ke=_t.Y-As,(ye!==0||ke!==0)&&(Pn=((xt.X-li)*ye+(xt.Y-As)*ke)/(ye*ye+ke*ke),Pn>1?(li=_t.X,As=_t.Y):Pn>0&&(li+=ye*Pn,As+=ke*Pn)),ye=xt.X-li,ke=xt.Y-As,Mt=ye*ye+ke*ke,Mt<=um&&(jt[b+1]=1,b++);for(G.push({X:A[0].X,Y:A[0].Y}),b=1;b<Y-1;b++)jt[b]||G.push({X:A[b].X,Y:A[b].Y});if(G.push({X:A[Y-1].X,Y:A[Y-1].Y}),ce&&A.pop(),jt.length)A=G;else break}Y=G.length,G[Y-1].X===G[0].X&&G[Y-1].Y===G[0].Y&&G.pop(),G.length>2&&Ps.push(G)}return h||(Ps=Ps[0]),typeof Ps>"u"&&(Ps=[]),Ps},n.JS.PerimeterOfPath=function(r,l,h){if(typeof r>"u")return 0;var d=Math.sqrt,b=0,A,O,G=0,Y=0,tt=0,_t=0,xt=r.length;if(xt<2)return 0;for(l&&(r[xt]=r[0],xt++);--xt;)A=r[xt],G=A.X,Y=A.Y,O=r[xt-1],tt=O.X,_t=O.Y,b+=d((G-tt)*(G-tt)+(Y-_t)*(Y-_t));return l&&r.pop(),b/h},n.JS.PerimeterOfPaths=function(r,l,h){h||(h=1);for(var d=0,b=0;b<r.length;b++)d+=n.JS.PerimeterOfPath(r[b],l,h);return d},n.JS.ScaleDownPath=function(r,l){var h,d;for(l||(l=1),h=r.length;h--;)d=r[h],d.X=d.X/l,d.Y=d.Y/l},n.JS.ScaleDownPaths=function(r,l){var h,d,b;for(l||(l=1),h=r.length;h--;)for(d=r[h].length;d--;)b=r[h][d],b.X=b.X/l,b.Y=b.Y/l},n.JS.ScaleUpPath=function(r,l){var h,d,b=Math.round;for(l||(l=1),h=r.length;h--;)d=r[h],d.X=b(d.X*l),d.Y=b(d.Y*l)},n.JS.ScaleUpPaths=function(r,l){var h,d,b,A=Math.round;for(l||(l=1),h=r.length;h--;)for(d=r[h].length;d--;)b=r[h][d],b.X=A(b.X*l),b.Y=A(b.Y*l)},n.ExPolygons=function(){return[]},n.ExPolygon=function(){this.outer=null,this.holes=null},n.JS.AddOuterPolyNodeToExPolygons=function(r,l){var h=new n.ExPolygon;h.outer=r.Contour();var d=r.Childs(),b=d.length;h.holes=new Array(b);var A,O,G,Y,tt,_t;for(G=0;G<b;G++)for(A=d[G],h.holes[G]=A.Contour(),Y=0,tt=A.Childs(),_t=tt.length;Y<_t;Y++)O=tt[Y],n.JS.AddOuterPolyNodeToExPolygons(O,l);l.push(h)},n.JS.ExPolygonsToPaths=function(r){var l,h,d,b,A=new n.Paths;for(l=0,d=r.length;l<d;l++)for(A.push(r[l].outer),h=0,b=r[l].holes.length;h<b;h++)A.push(r[l].holes[h]);return A},n.JS.PolyTreeToExPolygons=function(r){var l=new n.ExPolygons,h,d,b,A;for(d=0,b=r.Childs(),A=b.length;d<A;d++)h=b[d],n.JS.AddOuterPolyNodeToExPolygons(h,l);return l}})()});function zc(n,t,e,i=nn.default.PolyFillType.pftNonZero){let s=new nn.default.Clipper;s.AddPaths(ea(t),nn.default.PolyType.ptSubject,!0),e&&s.AddPaths(ea(e),nn.default.PolyType.ptClip,!0);let o=new nn.default.Paths;return s.Execute(n,o,i,i),kc(o)}function Fe(n,t,e=Om/Di){return n.length?(t<-2*Bc&&(n=gf(n,-Bc,e),t+=Bc),gf(n,t,e)):[]}function gf(n,t,e){if(!n.length)return[];let i=new nn.default.ClipperOffset(2,e*Di);i.AddPaths(ea(n),nn.default.JoinType.jtRound,nn.default.EndType.etClosedPolygon);let s=new nn.default.Paths;return i.Execute(s,t*Di),kc(s)}function mn(n){let t=0;for(let e=0,i=n.length-1;e<n.length;i=e++)t+=(n[i][0]+n[e][0])*(n[i][1]-n[e][1]);return-t/2}function Wr(n){let t=1/0,e=1/0,i=-1/0,s=-1/0;for(let o of n)for(let[c,a]of o)c<t&&(t=c),c>i&&(i=c),a<e&&(e=a),a>s&&(s=a);return{minX:t,minY:e,maxX:i,maxY:s}}function Oi(n){if(!n.length)return[];let t=new nn.default.Clipper;t.AddPaths(ea(n),nn.default.PolyType.ptSubject,!0);let e=new nn.default.PolyTree;t.Execute(nn.default.ClipType.ctUnion,e,nn.default.PolyFillType.pftNonZero,nn.default.PolyFillType.pftNonZero);let i=[],s=o=>{for(let c of o.Childs()){if(c.IsHole()){s(c);continue}let a=c.Childs().map(u=>u.Contour());i.push(kc([c.Contour(),...a]));for(let u of c.Childs())s(u)}};return s(e),i}function vi([n,t],e){let i=!1;for(let s=0,o=e.length-1;s<e.length;o=s++){let[c,a]=e[s],[u,f]=e[o];a>t!=f>t&&n<(u-c)*(t-a)/(f-a)+c&&(i=!i)}return i}function ia(n,t){if(!vi(n,t[0]))return!1;for(let e=1;e<t.length;e++)if(vi(n,t[e]))return!1;return!0}function Cn(n,t=1e-4){return n.filter(e=>e.length>=3&&Math.abs(mn(e))>t)}function Fm(n,t=.005){if(n.length<8)return n;let e=0,i=-1;for(let a=1;a<n.length;a++){let u=(n[a][0]-n[0][0])**2+(n[a][1]-n[0][1])**2;u>i&&(i=u,e=a)}let s=a=>{let u=new Uint8Array(a.length);u[0]=u[a.length-1]=1;let f=[[0,a.length-1]];for(;f.length;){let[p,x]=f.pop(),[m,_]=a[p],[v,M]=a[x],g=Math.hypot(v-m,M-_)||1e-12,y=-1,E=t;for(let P=p+1;P<x;P++){let S=Math.abs((v-m)*(_-a[P][1])-(m-a[P][0])*(M-_))/g;S>E&&(E=S,y=P)}y>0&&(u[y]=1,f.push([p,y],[y,x]))}return a.filter((p,x)=>u[x])},o=s(n.slice(0,e+1)),c=s([...n.slice(e),n[0]]);return[...o,...c.slice(1,-1)]}var nn,Di,Om,ea,kc,Vn,bi,na,Bc,Xr,as,Yr=pe(()=>{nn=Lu(mf(),1),Di=1e3,Om=.01*Di,ea=n=>n.map(t=>t.map(([e,i])=>({X:Math.round(e*Di),Y:Math.round(i*Di)}))),kc=n=>n.map(t=>t.map(e=>[e.X/Di,e.Y/Di]));Vn=n=>zc(nn.default.ClipType.ctUnion,n,null),bi=(n,t)=>zc(nn.default.ClipType.ctDifference,n,t),na=(n,t)=>zc(nn.default.ClipType.ctIntersection,n,t);Bc=.005;Xr=n=>n.reduce((t,e)=>t+mn(e),0);as=(n,t)=>n.map(e=>Fm(e,t)).filter(e=>e.length>=3)});function ra(n){let t=String(n.type||"").toLowerCase().replace(/[-_]/g," ");return/keyhole|round ?over|\bcove\b|bowl|ogee|dovetail/i.test(n.name||"")?"profile":Um.has(t)||t.startsWith("flat")?"flat":t.startsWith("surfac")?"surfacing":t.startsWith("drill")?"drill":t.startsWith("ball")?"ball":t.startsWith("v")?"vbit":t.startsWith("chamfer")?"chamfer":t.startsWith("thread")?"threadmill":t||"flat"}function cs(n,t){return(typeof t=="string"?t:t?.mode)==="toolId"?n.toolId??n.id:n.toolNumber?n.toolNumber:t?.manual?.get(n.id)??n.toolId??n.id}function xf(n,t,e=0,i=null){if(n==="toolId")return{mode:n};let s=new Set(t.filter(u=>u.toolNumber).map(u=>u.toolNumber));for(let u=1;u<=e;u++)s.add(u);i&&s.add(i);let o=new Map,c=t.filter(u=>!u.toolNumber);for(let u of c){let f=u.toolId??u.id;f>e&&!s.has(f)&&(o.set(u.id,f),s.add(f))}let a=e+1;for(let u of c)if(!o.has(u.id)){for(;s.has(a);)a++;o.set(u.id,a),s.add(a)}return{mode:n,manual:o}}function yf(n){return(n||[]).filter(t=>t&&t.diameter>0).map(t=>({id:t.id,toolId:t.toolId??t.id,toolNumber:t.toolNumber??null,name:t.name||`${t.diameter} mm ${ra(t)}`,kind:ra(t),diameter:Number(t.diameter),fluteLength:Number(t.dimensions?.flute_length)||null,flutes:Number(t.metadata?.flutes)||2,.../^(vbit|chamfer)$/.test(ra(t))?{angle:km(t)}:{},...ra(t)==="threadmill"?Bm(t):{}}))}function Bm(n){let t=n.metadata||{},i=[t.sku,n.name,t.notes].filter(Boolean).join(" ").match(/D\s*(\d+(?:\.\d+)?)\s*[×xX*]\s*P(?:itch)?\s*(\d+(?:\.\d+)?)\s*-\s*(\d+(?:\.\d+)?)/),s=Number(t.cut_diameter)||Number(i?i[1]:n.diameter),o=Number(t.reach)||Number(n.dimensions?.neck_length)||0;return{cut:s,pitchMin:Number(t.pitch_min)||(i?Number(i[2]):0),pitchMax:Number(t.pitch_max)||(i?Number(i[3]):1/0),reach:o||3*s,reachAssumed:!o,neck:Number(t.neck_diameter)||.7*s}}function km(n){let t=Number(n.dimensions?.taper_angle);if(t>0&&t<90)return t*2;let e=String(n.name||"").match(/(\d{2,3}(?:\.\d+)?)\s*(?:°|º|deg\b|degrees?\b)/i),i=e?Number(e[1]):0;return i>0&&i<180?i:90}function _f(n,t,e,i={}){let s=ls[t]||ls.mdf,o=Hn[e]||Hn.balanced,c=i.maxRpm||24e3,a=i.minRpm||0,u=Math.round(Math.min(c,Math.max(a,s.rpm))),f=Math.min(s.maxChip,s.chip*n.diameter),p=Math.min(i.maxFeed||4e3,4e3),x=Math.round(Math.min(p,Math.max(150,u*n.flutes*f*o.feed)));return{rpm:u,feed:x,plunge:Math.round(Math.max(60,x*.3)),stepdown:Math.max(.05,n.diameter*s.stepdown*o.stepdown),stepover:Math.max(.05,n.diameter*Math.min(.9,s.stepover*o.stepover)),rampAngle:s.ramp}}var ls,Hn,Um,Fi,$r=pe(()=>{ls={softwood:{name:"Softwood",note:"Pine, cedar",rpm:18e3,chip:.012,maxChip:.25,stepdown:.5,stepover:.45,ramp:5},hardwood:{name:"Hardwood",note:"Oak, maple, walnut",rpm:18e3,chip:.009,maxChip:.2,stepdown:.35,stepover:.4,ramp:4},mdf:{name:"MDF / Plywood",note:"Sheet goods",rpm:18e3,chip:.012,maxChip:.25,stepdown:.5,stepover:.45,ramp:5},plastic:{name:"Plastic",note:"Acrylic, HDPE",rpm:16e3,chip:.01,maxChip:.2,stepdown:.3,stepover:.4,ramp:3},aluminum:{name:"Aluminum",note:"6061",rpm:18e3,chip:.003,maxChip:.05,stepdown:.1,stepover:.25,ramp:2},foam:{name:"Foam",note:"Tooling board",rpm:12e3,chip:.02,maxChip:.4,stepdown:1,stepover:.6,ramp:10}},Hn={fast:{name:"Fast",feed:1.15,stepdown:1.2,stepover:1.1,allowance:0},balanced:{name:"Balanced",feed:1,stepdown:1,stepover:1,allowance:.2},smooth:{name:"Smooth",feed:.85,stepdown:.8,stepover:.7,allowance:.25}},Um=new Set(["flat","flat end mill","endmill","end mill","flat_end_mill"]);Fi=n=>n==="aluminum"?{height:1,length:1}:{height:2,length:2}});var Mn={};Ru(Mn,{INCH:()=>zm,len:()=>Vc,num:()=>vf,toMm:()=>Hm,unitsFrom:()=>Vm});function vf(n,t="mm",e=t==="in"?3:1){let i=t==="in"?n/25.4:n;return(Math.round(i*10**e)/10**e).toLocaleString("en-US",{maximumFractionDigits:e})}var zm,Vm,Vc,Hm,Hc=pe(()=>{zm=25.4,Vm=n=>n==="imperial"?"in":"mm";Vc=(n,t="mm",e)=>`${vf(n,t,e)} ${t}`,Hm=(n,t="mm")=>t==="in"?n*25.4:n});function ca(n){let t=n.flatMap(v=>v.pts);if(!t.length)return{shapes:[],size:[0,0],nest:[]};let e=Math.min(...t.map(v=>v[0])),i=Math.min(...t.map(v=>v[1])),s=Math.max(...t.map(v=>v[0])),o=Math.max(...t.map(v=>v[1])),c=n.map(v=>({...v,pts:v.pts.map(([M,g])=>[M-e,g-i])})),a=c.map(v=>v.closed&&v.pts.length>2&&Math.abs(mn(Mf(v.pts)))>aa?Gm(Mf(v.pts)):null),u=a.map(v=>v?mn(v):0),f=c.map((v,M)=>{let g=v.pts[0],y=-1,E=0;return a.forEach((P,S)=>{!P||S===M||u[S]<=u[M]||!vi(g,P)||(E++,(y<0||u[S]<u[y])&&(y=S))}),{parent:y,depth:E}}),p=a.map(v=>v?Xm(v):null),x=v=>c[v].layer??c[v].color,m=(v,M)=>p[v]&&p[M]&&x(v)===x(M)&&Math.hypot(p[v].x-p[M].x,p[v].y-p[M].y)<.05;f.forEach((v,M)=>{if(v.step=null,!p[M])return;let g=0,y=M;for(let P=v.parent;P>=0&&m(M,P);P=f[P].parent)g++,y=P;let E=f.some((P,S)=>P.parent===M&&m(M,S));(g||E)&&f[y].depth>0&&(v.step=g,v.last=!E,v.top=y)});let _=new Map;return f.forEach(v=>{v.top!==void 0&&v.step!==null&&_.set(v.top,(_.get(v.top)||0)+1)}),f.forEach(v=>{v.top!==void 0&&v.step!==null&&(v.of=_.get(v.top))}),{shapes:c,loops:a,areas:u,nest:f,circles:p,size:[s-e,o-i]}}function Xm(n){if(n.length<12)return null;let t=n.reduce((o,c)=>o+c[0],0)/n.length,e=n.reduce((o,c)=>o+c[1],0)/n.length,i=n.map(o=>Math.hypot(o[0]-t,o[1]-e)),s=i.reduce((o,c)=>o+c,0)/i.length;return s>0&&i.every(o=>Math.abs(o-s)<=Math.max(.01*s,.02))&&Math.abs(Math.abs(mn(n))-Math.PI*s*s)<=.03*Math.PI*s*s?{x:t,y:e,r:s}:null}function Ef(n,t){if(!n.loops[t])return"online";let e=n.nest[t];return e.step!==null&&e.step!==void 0?e.last?"inside":"pocket":e.depth%2?"inside":"outside"}function Tf(n,t=6){return{material:"mdf",finish:"balanced",stock:{fit:!0,margin:5,width:n.size[0]+10,depth:n.size[1]+10,thickness:t},zero:{xy:"front-left",z:"top"},tabs:{enabled:!0,count:4,...Fi("mdf")},throughDepth:.3,groups:{},layers:{},shapes:{},depths:{pocket:3,online:1},disabled:{},toolOverride:{}}}function Gc(n){let t=new Map,e=o=>Math.round(o*100)/100,i=new Set(n.shapes.map(o=>o.layer??o.color)).size>1;n.shapes.forEach((o,c)=>{let a=Ef(n,c),u=n.nest[c],f=n.circles[c],p=i?`${o.layer??o.color}:`:"",x,m,_;if(!n.loops[c])x=`line:${p}`,m="line",_="line";else if(a==="outside"&&u.depth===0)x=`outline:${p}`,m="outline",_="outline";else if(f&&u.step!==null&&u.step!==void 0){let v=c;for(;n.nest[v].step>0;)v=n.nest[v].parent;let M=[];for(let g=v;g>=0;)M.push(e(2*n.circles[g].r)),g=n.nest.findIndex((E,P)=>E.parent===g&&n.nest[P].step===n.nest[g].step+1);x=`cb:${p}${M.join("/")}:${u.step}`,m="counterbore",_={d:2*f.r,sizes:M,step:u.step,last:u.last}}else if(f)x=`circle:${p}${e(2*f.r)}:${a}`,m="circle",_={d:2*f.r};else{let v=Wr([n.loops[c]]),M=v.maxX-v.minX,g=v.maxY-v.minY,y=Math.abs(n.areas[c]-M*g)<.01*M*g;x=`shape:${p}${e(M)}x${e(g)}:${Math.round(n.areas[c])}:${a}`,m=y?"rect":"shape",_={w:M,h:g}}t.has(x)||t.set(x,{key:x,kind:m,label:_,layer:i?o.layer??o.color:null,idx:[],cut:a}),t.get(x).idx.push(c)});let s={outline:0,counterbore:1,circle:2,rect:3,shape:4,line:5};return[...t.values()].sort((o,c)=>s[o.kind]-s[c.kind]||(c.label?.d||0)-(o.label?.d||0)||o.key.localeCompare(c.key))}function Rs(n){let t=new Map;for(let e of n)for(let i of e.idx)t.set(i,e.key);return t}function Ui(n,t,e,i=null){let s=n.shapes[e],o=t.shapes?.[e]||i&&t.groups?.[i.get(e)],c=t.layers?.[s.layer??s.color],a=o?.cut||c?.cut||Ef(n,e),u=n.nest[e],f=a==="pocket"&&u.step!==null&&u.step!==void 0,p=t.stock?.thickness,x=()=>{let _=t.depths.pocket*(u.step+1);return p>0?Math.min(_,p*(u.step+1)/(u.of||2)):_},m=o?.depth!==void 0?o.depth:c?.depth!==void 0?c.depth:f?x():a==="pocket"||a==="online"?t.depths[a]:null;return{cut:a==="online"||a==="off"||n.loops[e]?a:"online",depth:m}}function ha(n,t){let[e,i]=n.size,s=t.stock,o=s.fit?e+2*s.margin:Math.max(e,s.width),c=s.fit?i+2*s.margin:Math.max(i,s.depth),a=s.thickness;return{minX:(e-o)/2,minY:(i-c)/2,maxX:(e+o)/2,maxY:(i+c)/2,bottom:0,top:a,width:o,depth:c,thickness:a}}function Xc(n,t){let e=t.xy.split("-"),i=(n.minX+n.maxX)/2,s=(n.minY+n.maxY)/2;return e.includes("left")&&(i=n.minX),e.includes("right")&&(i=n.maxX),e.includes("front")&&(s=n.minY),e.includes("back")&&(s=n.maxY),{x:i,y:s,z:t.z==="bed"?n.bottom:n.top}}function Af(n,t,e,i={}){let s=k=>Vc(k,e.units),o=ha(n,e),c=o.top,a=[],u=[],f=t.filter(k=>k.kind==="flat").sort((k,J)=>J.diameter-k.diameter),p=e.material==="aluminum"?8:12.8,x=new Set,m=k=>(x.add(k.id),k),_=k=>k==null||k>=c-1e-6?-e.throughDepth:Math.max(c-k,0),v=k=>c-k,M=k=>k==null||k>=c-1e-6?"through":`${s(k)} deep`,g=new Map,y=Rs(Gc(n));n.shapes.forEach((k,J)=>{let q=Ui(n,e,J,y);if(q.cut==="off")return;let it=_(q.depth);if(it>=c-1e-6)return;let st=`${q.cut}@${it}`;g.has(st)||g.set(st,{cut:q.cut,z:it,depth:q.depth,idx:[]}),g.get(st).idx.push(J)});let E=[...g.values()],P=n.shapes.map((k,J)=>Ui(n,e,J,y).cut),S=k=>{for(let J=n.nest[k].parent;J>=0;J=n.nest[J].parent)if(P[J]==="pocket")return!0;return!1},L=k=>E.filter(J=>J.cut===k).sort((J,q)=>q.z-J.z),T=(k,J)=>Xr(Fe(Fe(k,-J),J))/Math.max(Xr(k),aa);for(let k of L("pocket")){let J=n.loops.map((wt,$t)=>wt&&P[$t]==="outside"&&k.idx.some(Kt=>Sf(n,$t,Kt))?wt:null).filter(Boolean),q=Cn(bi(bf(k.idx.map(wt=>n.loops[wt])),Vn(J)),aa);if(!q.length)continue;let it=f.filter(wt=>wt.diameter<=p&&oa(wt,v(k.z))&&Fe(q,-wt.diameter/2).length);if(!it.length){a.push({kind:"notool",text:`No end mill fits the pockets ${M(k.depth)}.`});continue}let st=it.map(wt=>({t:wt,c:T(q,wt.diameter/2)})),St=st.find(wt=>wt.c>=.95)||st.reduce((wt,$t)=>$t.c>wt.c?$t:wt);St.c<.995&&a.push({kind:"corners",text:`${St.t.name} leaves the pockets' tightest corners rounded.`}),u.push({id:`pocket@${k.z}`,kind:"pocket",label:k.idx.length>1?`Clear ${k.idx.length} pockets`:"Clear the pocket",tool:m(St.t),zTop:c,zBottom:k.z,region:q,detail:M(k.depth)})}let C=k=>k.slice().sort((J,q)=>Math.abs(J.diameter-6.35)-Math.abs(q.diameter-6.35))[0]||null,w=(k,J)=>{let q=f.filter(it=>it.diameter<=p&&oa(it,k)&&J(it));return q.find(it=>x.has(it.id))||C(q)},N=k=>P[k]==="outside"&&n.loops[k]&&!S(k),F=k=>n.nest[k].depth>0,B=(Hn[e.finish]||Hn.balanced).allowance,H=(k,J)=>Fe([J],-(k.diameter/2+B+.1)).length>0;function V(k,J,q){let it=f.filter($t=>$t.diameter<=p&&oa($t,v(k.z))),st=C(it),St=new Map,wt=0;for(let $t of J){let Kt=n.loops[$t],re=it.filter(pt=>H(pt,Kt)),ct=re.find(pt=>x.has(pt.id))||C(re);if(!ct){wt++;continue}St.has(ct)||St.set(ct,[]),St.get(ct).push(Kt)}wt&&a.push({kind:"notool",text:`No end mill fits inside ${wt>1?`${wt} shapes`:"a shape"} cut ${M(k.depth)} with room to move: left uncut.`});for(let $t=!0;$t&&St.size>1;){$t=!1;for(let[Kt,re]of[...St].filter(([ct])=>!x.has(ct.id)&&ct!==st).sort((ct,pt)=>ct[1].length-pt[1].length)){let ct=[...St.keys()].filter(pt=>pt!==Kt).sort((pt,Bt)=>Bt.diameter-pt.diameter);if(re.every(pt=>ct.some(Bt=>H(Bt,pt)))){for(let pt of re)St.get(ct.find(Bt=>H(Bt,pt))).push(pt);St.delete(Kt),$t=!0;break}}}for(let[$t,Kt]of[...St].sort((re,ct)=>ct[0].diameter-re[0].diameter))u.push({id:`inside@${k.z}#${$t.id}${q?":tabs":""}`,kind:"inside",label:`${q?"Cut round the windows":Kt.length>1?`Cut ${Kt.length} shapes inside`:"Cut inside the shape"}`,tool:m($t),zTop:c,zBottom:k.z,loops:Kt,region:Kt,tabs:q&&k.z<0&&e.tabs.enabled,detail:`${M(k.depth)}${q&&k.z<0&&e.tabs.enabled?" \xB7 tabs hold the parts in them":""}`})}for(let k of L("inside")){let J=q=>n.shapes.some((it,st)=>N(st)&&Sf(n,st,q));V(k,k.idx.filter(q=>!J(q)),!1),V(k,k.idx.filter(J),!0)}for(let k of L("outside"))for(let J of[!0,!1]){let q=k.idx.filter(wt=>N(wt)&&F(wt)===J);if(!q.length)continue;let it=bf(q.map(wt=>n.loops[wt])),st=w(v(k.z),()=>!0);if(!st){a.push({kind:"notool",text:`No end mill is long enough to cut out ${M(k.depth)} (${s(v(k.z))}).`});continue}let St=k.z<0;u.push({id:`cutout${J?"-in":""}@${k.z}`,kind:"cutout",inner:J,label:J?"Cut out the parts in the windows":"Cut out the parts",tool:m(st),zTop:c,zBottom:k.z,region:it,tabs:St,detail:`${M(k.depth)}${St?` \xB7 ${e.tabs.enabled?`${e.tabs.count} tabs each`:"no tabs"}`:""}`})}for(let k of L("online")){let J=f.filter(st=>oa(st,v(k.z))),q=J.filter(st=>x.has(st.id)).sort((st,St)=>st.diameter-St.diameter)[0]||J.sort((st,St)=>st.diameter-St.diameter)[0];if(!q){a.push({kind:"notool",text:`No end mill reaches ${M(k.depth)} for the lines.`});continue}let it=k.idx.map(st=>({pts:n.shapes[st].pts,closed:!!n.loops[st]}));u.push({id:`online@${k.z}`,kind:"online",label:"Cut on the lines",tool:m(q),zTop:c,zBottom:k.z,lines:it,count:k.idx.length,detail:`${k.idx.length} line${k.idx.length>1?"s":""} \xB7 ${M(k.depth)} \xB7 a groove ${s(q.diameter)} wide`})}let z=k=>k.kind==="online"?0:k.kind==="pocket"?1:k.kind==="cutout"&&k.inner?2:k.kind==="inside"?3:4;u.sort((k,J)=>z(k)-z(J)||J.zBottom-k.zBottom);for(let k of u){let J=e.toolOverride?.[k.id];if(J){let q=t.find(it=>it.id===J);q&&(k.tool=q)}k.enabled=!e.disabled?.[k.id],k.feeds=_f(k.tool,e.material,e.finish,i)}let W=e.tabs.enabled?e:{...e,tabs:{...e.tabs,enabled:!1}};return{analysis:{top:c,size:[n.size[0],n.size[1],c]},stock:o,zero:Xc(o,e.zero),ops:u,warnings:a,job:W}}function Sf(n,t,e){if(!n.loops[e]||n.areas[t]>=n.areas[e])return!1;for(let i=n.nest[t].parent;i>=0;i=n.nest[i].parent)if(i===e)return!0;return!1}function ua(n){let t=[];for(let e of n.ops)e.enabled&&!t.some(i=>i.id===e.tool.id)&&t.push(e.tool);return t}var la,aa,bf,wf,oa,Mf,Gm,Pf=pe(()=>{Yr();$r();Hc();la={outside:"Outer (part)",inside:"Inner (perimeter)",pocket:"Inner (clearing)",online:"On the line",off:"Off"},aa=.01,bf=n=>Cn(Fe(Fe(Vn(n),.01),-.01),aa),wf=["back-left","back-center","back-right","left-center","center","right-center","front-left","front-center","front-right"],oa=(n,t)=>!n.fluteLength||n.fluteLength+1e-6>=t,Mf=n=>n.length>2&&n[0][0]===n.at(-1)[0]&&n[0][1]===n.at(-1)[1]?n.slice(0,-1):n,Gm=n=>mn(n)<0?n.slice().reverse():n});function Wm(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function Ym(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function ao(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Hd(){let n=ao("canvas");return n.style.display="block",n}function lo(...n){let t="THREE."+n.shift();Qs?Qs("log",t,...n):console.log(t,...n)}function Gd(n){let t=n[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=n[1];e&&e.isStackTrace?n[0]+=" "+e.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function ne(...n){n=Gd(n);let t="THREE."+n.shift();if(Qs)Qs("warn",t,...n);else{let e=n[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...n)}}function se(...n){n=Gd(n);let t="THREE."+n.shift();if(Qs)Qs("error",t,...n);else{let e=n[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...n)}}function ps(...n){let t=n.join(" ");t in Cf||(Cf[t]=!0,ne(...n))}function Xd(n,t,e){return new Promise(function(i,s){function o(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(o,e);break;default:i()}}setTimeout(o,e)})}function Ai(){let n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(gn[n&255]+gn[n>>8&255]+gn[n>>16&255]+gn[n>>24&255]+"-"+gn[t&255]+gn[t>>8&255]+"-"+gn[t>>16&15|64]+gn[t>>24&255]+"-"+gn[e&63|128]+gn[e>>8&255]+"-"+gn[e>>16&255]+gn[e>>24&255]+gn[i&255]+gn[i>>8&255]+gn[i>>16&255]+gn[i>>24&255]).toLowerCase()}function ve(n,t,e){return Math.max(t,Math.min(e,n))}function jh(n,t){return(n%t+t)%t}function $m(n,t,e,i,s){return i+(n-t)*(s-i)/(e-t)}function qm(n,t,e){return n!==t?(e-n)/(t-n):0}function io(n,t,e){return(1-e)*n+e*t}function Zm(n,t,e,i){return io(n,t,1-Math.exp(-e*i))}function Jm(n,t=1){return t-Math.abs(jh(n,t*2)-t)}function jm(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*(3-2*n))}function Km(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*n*(n*(n*6-15)+10))}function Qm(n,t){return n+Math.floor(Math.random()*(t-n+1))}function t0(n,t){return n+Math.random()*(t-n)}function e0(n){return n*(.5-Math.random())}function n0(n){n!==void 0&&(If=n);let t=If+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function i0(n){return n*Zs}function s0(n){return n*tr}function r0(n){return n>0&&Number.isInteger(n)&&2**Math.round(Math.log2(n))===n}function o0(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function a0(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function l0(n,t,e,i,s){let o=Math.cos,c=Math.sin,a=o(e/2),u=c(e/2),f=o((t+i)/2),p=c((t+i)/2),x=o((t-i)/2),m=c((t-i)/2),_=o((i-t)/2),v=c((i-t)/2);switch(s){case"XYX":n.set(a*p,u*x,u*m,a*f);break;case"YZY":n.set(u*m,a*p,u*x,a*f);break;case"ZXZ":n.set(u*x,u*m,a*p,a*f);break;case"XZX":n.set(a*p,u*v,u*_,a*f);break;case"YXY":n.set(u*_,a*p,u*v,a*f);break;case"ZYZ":n.set(u*v,u*_,a*p,a*f);break;default:ne("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Jn(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:case Uint8ClampedArray:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Ne(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function c0(){let n={enabled:!0,workingColorSpace:ro,spaces:{},convert:function(s,o,c){return this.enabled===!1||o===c||!o||!c||(this.spaces[o].transfer===Le&&(s.r=Pi(s.r),s.g=Pi(s.g),s.b=Pi(s.b)),this.spaces[o].primaries!==this.spaces[c].primaries&&(s.applyMatrix3(this.spaces[o].toXYZ),s.applyMatrix3(this.spaces[c].fromXYZ)),this.spaces[c].transfer===Le&&(s.r=Js(s.r),s.g=Js(s.g),s.b=Js(s.b))),s},workingToColorSpace:function(s,o){return this.convert(s,this.workingColorSpace,o)},colorSpaceToWorking:function(s,o){return this.convert(s,o,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Ii?oo:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,o=this.workingColorSpace){return s.fromArray(this.spaces[o].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,o,c){return s.copy(this.spaces[o].toXYZ).multiply(this.spaces[c].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,o){return ps("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(s,o)},toWorkingColorSpace:function(s,o){return ps("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(s,o)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[ro]:{primaries:t,whitePoint:i,transfer:oo,toXYZ:Lf,fromXYZ:Nf,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:wn},outputColorSpaceConfig:{drawingBufferColorSpace:wn}},[wn]:{primaries:t,whitePoint:i,transfer:Le,toXYZ:Lf,fromXYZ:Nf,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:wn}}}),n}function Pi(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Js(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}function $c(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?tl.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(ne("Texture: Unable to serialize Texture."),{})}function Jc(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}function sh(n,t,e,i,s){for(let o=0,c=n.length-3;o<=c;o+=3){us.fromArray(n,o);let a=s.x*Math.abs(us.x)+s.y*Math.abs(us.y)+s.z*Math.abs(us.z),u=t.dot(us),f=e.dot(us),p=i.dot(us);if(Math.max(-Math.max(u,f,p),Math.min(u,f,p))>a)return!1}return!0}function ba(n,t,e,i,s,o){Ws.subVectors(n,e).addScalar(.5).multiply(i),s!==void 0?(Qr.x=o*Ws.x-s*Ws.y,Qr.y=s*Ws.x+o*Ws.y):Qr.copy(Ws),n.copy(t),n.x+=Qr.x,n.y+=Qr.y,n.applyMatrix4($d)}function E0(n,t,e,i,s,o,c,a){let u;if(t.side===Tn?u=i.intersectTriangle(c,o,s,!0,a):u=i.intersectTriangle(s,o,c,t.side===Qi,a),u===null)return null;Ca.copy(a),Ca.applyMatrix4(n.matrixWorld);let f=e.ray.origin.distanceTo(Ca);return f<e.near||f>e.far?null:{distance:f,point:Ca.clone(),object:n}}function Ia(n,t,e,i,s,o,c,a,u,f){n.getVertexPosition(a,Ea),n.getVertexPosition(u,Ta),n.getVertexPosition(f,Aa);let p=E0(n,t,e,i,Ea,Ta,Aa,Yf);if(p){let x=new Z;ui.getBarycoord(Yf,Ea,Ta,Aa,x),s&&(p.uv=ui.getInterpolatedAttribute(s,a,u,f,x,new Jt)),o&&(p.uv1=ui.getInterpolatedAttribute(o,a,u,f,x,new Jt)),c&&(p.normal=ui.getInterpolatedAttribute(c,a,u,f,x,new Z),p.normal.dot(i.direction)>0&&p.normal.multiplyScalar(-1));let m={a,b:u,c:f,normal:new Z,materialIndex:0};ui.getNormal(Ea,Ta,Aa,m.normal),p.face=m,p.barycoord=x}return p}function Na(n,t,e,i,s,o,c){let a=n.geometry.attributes.position;if(rl.fromBufferAttribute(a,s),ol.fromBufferAttribute(a,o),e.distanceSqToSegment(rl,ol,uh,qf)>i)return;uh.applyMatrix4(n.matrixWorld);let f=t.ray.origin.distanceTo(uh);if(!(f<t.near||f>t.far))return{distance:f,point:qf.clone().applyMatrix4(n.matrixWorld),index:c,face:null,faceIndex:null,barycoord:null,object:n}}function A0(n,t,e=2){let i=t&&t.length,s=i?t[0]*e:n.length,o=qd(n,0,s,e,!0),c=[];if(!o||o.next===o.prev)return c;let a,u,f;if(i&&(o=L0(n,t,o,e)),n.length>80*e){a=n[0],u=n[1];let p=a,x=u;for(let m=e;m<s;m+=e){let _=n[m],v=n[m+1];_<a&&(a=_),v<u&&(u=v),_>p&&(p=_),v>x&&(x=v)}f=Math.max(p-a,x-u),f=f!==0?32767/f:0}return _o(o,c,e,a,u,f,0),c}function qd(n,t,e,i,s){let o;if(s===G0(n,t,e,i)>0)for(let c=t;c<e;c+=i)o=jf(c/i|0,n[c],n[c+1],o);else for(let c=e-i;c>=t;c-=i)o=jf(c/i|0,n[c],n[c+1],o);return o&&lr(o,o.next)&&(bo(o),o=o.next),o}function ys(n,t){if(!n)return n;t||(t=n);let e=n,i;do if(i=!1,!e.steiner&&(lr(e,e.next)||Ze(e.prev,e,e.next)===0)){if(bo(e),e=t=e.prev,e===e.next)break;i=!0}else e=e.next;while(i||e!==t);return t}function _o(n,t,e,i,s,o,c){if(!n)return;!c&&o&&U0(n,i,s,o);let a=n;for(;n.prev!==n.next;){let u=n.prev,f=n.next;if(o?C0(n,i,s,o):P0(n)){t.push(u.i,n.i,f.i),bo(n),n=f.next,a=f.next;continue}if(n=f,n===a){c?c===1?(n=I0(ys(n),t),_o(n,t,e,i,s,o,2)):c===2&&R0(n,t,e,i,s,o):_o(ys(n),t,e,i,s,o,1);break}}}function P0(n){let t=n.prev,e=n,i=n.next;if(Ze(t,e,i)>=0)return!1;let s=t.x,o=e.x,c=i.x,a=t.y,u=e.y,f=i.y,p=Math.min(s,o,c),x=Math.min(a,u,f),m=Math.max(s,o,c),_=Math.max(a,u,f),v=i.next;for(;v!==t;){if(v.x>=p&&v.x<=m&&v.y>=x&&v.y<=_&&no(s,a,o,u,c,f,v.x,v.y)&&Ze(v.prev,v,v.next)>=0)return!1;v=v.next}return!0}function C0(n,t,e,i){let s=n.prev,o=n,c=n.next;if(Ze(s,o,c)>=0)return!1;let a=s.x,u=o.x,f=c.x,p=s.y,x=o.y,m=c.y,_=Math.min(a,u,f),v=Math.min(p,x,m),M=Math.max(a,u,f),g=Math.max(p,x,m),y=vh(_,v,t,e,i),E=vh(M,g,t,e,i),P=n.prevZ,S=n.nextZ;for(;P&&P.z>=y&&S&&S.z<=E;){if(P.x>=_&&P.x<=M&&P.y>=v&&P.y<=g&&P!==s&&P!==c&&no(a,p,u,x,f,m,P.x,P.y)&&Ze(P.prev,P,P.next)>=0||(P=P.prevZ,S.x>=_&&S.x<=M&&S.y>=v&&S.y<=g&&S!==s&&S!==c&&no(a,p,u,x,f,m,S.x,S.y)&&Ze(S.prev,S,S.next)>=0))return!1;S=S.nextZ}for(;P&&P.z>=y;){if(P.x>=_&&P.x<=M&&P.y>=v&&P.y<=g&&P!==s&&P!==c&&no(a,p,u,x,f,m,P.x,P.y)&&Ze(P.prev,P,P.next)>=0)return!1;P=P.prevZ}for(;S&&S.z<=E;){if(S.x>=_&&S.x<=M&&S.y>=v&&S.y<=g&&S!==s&&S!==c&&no(a,p,u,x,f,m,S.x,S.y)&&Ze(S.prev,S,S.next)>=0)return!1;S=S.nextZ}return!0}function I0(n,t){let e=n;do{let i=e.prev,s=e.next.next;!lr(i,s)&&Jd(i,e,e.next,s)&&vo(i,s)&&vo(s,i)&&(t.push(i.i,e.i,s.i),bo(e),bo(e.next),e=n=s),e=e.next}while(e!==n);return ys(e)}function R0(n,t,e,i,s,o){let c=n;do{let a=c.next.next;for(;a!==c.prev;){if(c.i!==a.i&&z0(c,a)){let u=jd(c,a);c=ys(c,c.next),u=ys(u,u.next),_o(c,t,e,i,s,o,0),_o(u,t,e,i,s,o,0);return}a=a.next}c=c.next}while(c!==n)}function L0(n,t,e,i){let s=[];for(let o=0,c=t.length;o<c;o++){let a=t[o]*i,u=o<c-1?t[o+1]*i:n.length,f=qd(n,a,u,i,!1);f===f.next&&(f.steiner=!0),s.push(k0(f))}s.sort(N0);for(let o=0;o<s.length;o++)e=D0(s[o],e);return e}function N0(n,t){let e=n.x-t.x;if(e===0&&(e=n.y-t.y,e===0)){let i=(n.next.y-n.y)/(n.next.x-n.x),s=(t.next.y-t.y)/(t.next.x-t.x);e=i-s}return e}function D0(n,t){let e=O0(n,t);if(!e)return t;let i=jd(e,n);return ys(i,i.next),ys(e,e.next)}function O0(n,t){let e=t,i=n.x,s=n.y,o=-1/0,c;if(lr(n,e))return e;do{if(lr(n,e.next))return e.next;if(s<=e.y&&s>=e.next.y&&e.next.y!==e.y){let x=e.x+(s-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(x<=i&&x>o&&(o=x,c=e.x<e.next.x?e:e.next,x===i))return c}e=e.next}while(e!==t);if(!c)return null;let a=c,u=c.x,f=c.y,p=1/0;e=c;do{if(i>=e.x&&e.x>=u&&i!==e.x&&Zd(s<f?i:o,s,u,f,s<f?o:i,s,e.x,e.y)){let x=Math.abs(s-e.y)/(i-e.x);vo(e,n)&&(x<p||x===p&&(e.x>c.x||e.x===c.x&&F0(c,e)))&&(c=e,p=x)}e=e.next}while(e!==a);return c}function F0(n,t){return Ze(n.prev,n,t.prev)<0&&Ze(t.next,n,n.next)<0}function U0(n,t,e,i){let s=n;do s.z===0&&(s.z=vh(s.x,s.y,t,e,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==n);s.prevZ.nextZ=null,s.prevZ=null,B0(s)}function B0(n){let t,e=1;do{let i=n,s;n=null;let o=null;for(t=0;i;){t++;let c=i,a=0;for(let f=0;f<e&&(a++,c=c.nextZ,!!c);f++);let u=e;for(;a>0||u>0&&c;)a!==0&&(u===0||!c||i.z<=c.z)?(s=i,i=i.nextZ,a--):(s=c,c=c.nextZ,u--),o?o.nextZ=s:n=s,s.prevZ=o,o=s;i=c}o.nextZ=null,e*=2}while(t>1);return n}function vh(n,t,e,i,s){return n=(n-e)*s|0,t=(t-i)*s|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,n|t<<1}function k0(n){let t=n,e=n;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==n);return e}function Zd(n,t,e,i,s,o,c,a){return(s-c)*(t-a)>=(n-c)*(o-a)&&(n-c)*(i-a)>=(e-c)*(t-a)&&(e-c)*(o-a)>=(s-c)*(i-a)}function no(n,t,e,i,s,o,c,a){return!(n===c&&t===a)&&Zd(n,t,e,i,s,o,c,a)}function z0(n,t){return n.next.i!==t.i&&n.prev.i!==t.i&&!V0(n,t)&&(vo(n,t)&&vo(t,n)&&H0(n,t)&&(Ze(n.prev,n,t.prev)||Ze(n,t.prev,t))||lr(n,t)&&Ze(n.prev,n,n.next)>0&&Ze(t.prev,t,t.next)>0)}function Ze(n,t,e){return(t.y-n.y)*(e.x-t.x)-(t.x-n.x)*(e.y-t.y)}function lr(n,t){return n.x===t.x&&n.y===t.y}function Jd(n,t,e,i){let s=Ba(Ze(n,t,e)),o=Ba(Ze(n,t,i)),c=Ba(Ze(e,i,n)),a=Ba(Ze(e,i,t));return!!(s!==o&&c!==a||s===0&&Ua(n,e,t)||o===0&&Ua(n,i,t)||c===0&&Ua(e,n,i)||a===0&&Ua(e,t,i))}function Ua(n,t,e){return t.x<=Math.max(n.x,e.x)&&t.x>=Math.min(n.x,e.x)&&t.y<=Math.max(n.y,e.y)&&t.y>=Math.min(n.y,e.y)}function Ba(n){return n>0?1:n<0?-1:0}function V0(n,t){let e=n;do{if(e.i!==n.i&&e.next.i!==n.i&&e.i!==t.i&&e.next.i!==t.i&&Jd(e,e.next,n,t))return!0;e=e.next}while(e!==n);return!1}function vo(n,t){return Ze(n.prev,n,n.next)<0?Ze(n,t,n.next)>=0&&Ze(n,n.prev,t)>=0:Ze(n,t,n.prev)<0||Ze(n,n.next,t)<0}function H0(n,t){let e=n,i=!1,s=(n.x+t.x)/2,o=(n.y+t.y)/2;do e.y>o!=e.next.y>o&&e.next.y!==e.y&&s<(e.next.x-e.x)*(o-e.y)/(e.next.y-e.y)+e.x&&(i=!i),e=e.next;while(e!==n);return i}function jd(n,t){let e=bh(n.i,n.x,n.y),i=bh(t.i,t.x,t.y),s=n.next,o=t.prev;return n.next=t,t.prev=n,e.next=s,s.prev=e,i.next=e,e.prev=i,o.next=i,i.prev=o,i}function jf(n,t,e,i){let s=bh(n,t,e);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function bo(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function bh(n,t,e){return{i:n,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function G0(n,t,e,i){let s=0;for(let o=t,c=e-i;o<e;o+=i)s+=(n[c]-n[o])*(n[o+1]+n[c+1]),c=o;return s}function Kf(n){let t=n.length;t>2&&n[t-1].equals(n[0])&&n.pop()}function Qf(n,t){for(let e=0;e<t.length;e++)n.push(t[e].x),n.push(t[e].y)}function Ms(n){let t={};for(let e in n){t[e]={};for(let i in n[e]){let s=n[e][i];if(td(s))s.isRenderTargetTexture?(ne("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=s.clone();else if(Array.isArray(s))if(td(s[0])){let o=[];for(let c=0,a=s.length;c<a;c++)o[c]=s[c].clone();t[e][i]=o}else t[e][i]=s.slice();else t[e][i]=s}}return t}function vn(n){let t={};for(let e=0;e<n.length;e++){let i=Ms(n[e]);for(let s in i)t[s]=i[s]}return t}function td(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function X0(n){let t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function Qh(n){let t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Me.workingColorSpace}function Ys(n,t){return!n||n.constructor===t?n:typeof t.BYTES_PER_ELEMENT=="number"?new t(n):Array.prototype.slice.call(n)}function dh(n){return n!==void 0&&n.inTangents!==void 0&&n.outTangents!==void 0}function Qd(n,t,e,i,s){let o=1-n;return o*o*o*t+3*o*o*n*e+3*o*n*n*i+n*n*n*s}function $0(n,t,e,i,s){let o=1-n;return 3*o*o*(e-t)+6*o*n*(i-e)+3*n*n*(s-i)}function q0(n,t,e,i,s){let o=(n-t)/(s-t);for(let c=0;c<8;c++){let a=Qd(o,t,e,i,s)-n;if(Math.abs(a)<1e-10)break;let u=$0(o,t,e,i,s);if(Math.abs(u)<1e-10)break;o=Math.max(0,Math.min(1,o-a/u))}return o}function ed(n,t){for(let e=0,i=n.length;e!==i;e+=2)n[e]*=t}function ad(n,t){return n.distance-t.distance}function Eh(n,t,e,i){let s=!0;if(n.layers.test(t.layers)&&n.raycast(t,e)===!1&&(s=!1),s===!0&&i===!0){let o=n.children;for(let c=0,a=o.length;c<a;c++)Eh(o[c],t,e,!0)}}function nu(n,t,e,i){let s=ig(i);switch(e){case Yh:return n*t;case qh:return n*t/s.components*s.byteLength;case Il:return n*t/s.components*s.byteLength;case is:return n*t*2/s.components*s.byteLength;case Rl:return n*t*2/s.components*s.byteLength;case $h:return n*t*3/s.components*s.byteLength;case Wn:return n*t*4/s.components*s.byteLength;case Ll:return n*t*4/s.components*s.byteLength;case Fo:case Uo:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Bo:case ko:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Dl:case Fl:return Math.max(n,16)*Math.max(t,8)/4;case Nl:case Ol:return Math.max(n,8)*Math.max(t,8)/2;case Ul:case Bl:case zl:case Vl:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case kl:case zo:case Hl:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Gl:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Xl:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case Wl:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case Yl:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case $l:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case ql:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case Zl:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case Jl:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case jl:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case Kl:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case Ql:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case tc:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case ec:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case nc:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case ic:case sc:case rc:return Math.ceil(n/4)*Math.ceil(t/4)*16;case oc:case ac:return Math.ceil(n/4)*Math.ceil(t/4)*8;case Vo:case lc:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function ig(n){switch(n){case Rn:case Hh:return{byteLength:1,components:1};case pr:case Gh:case ii:return{byteLength:2,components:1};case Pl:case Cl:return{byteLength:2,components:4};case ei:case Al:case ni:return{byteLength:4,components:1};case Xh:case Wh:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}var ji,Ki,cd,Ah,hd,No,ud,fr,Qi,Tn,_n,gi,dr,Ph,Ch,Ih,fd,_s,dd,pd,md,gd,xd,yd,_d,vd,Rh,Lh,bd,Md,Sd,wd,Ed,Td,Ad,Pd,Cd,Xa,Wa,Ya,js,$a,qa,Za,Ja,Nh,Id,Rd,ti,Dh,Oh,Fh,Uh,Bh,kh,zh,Vh,ts,vs,wl,El,Do,ja,fi,Ka,hn,Ld,Oo,dn,Tl,es,Rn,Hh,Gh,pr,Al,ei,ni,ii,Pl,Cl,mr,Xh,Wh,Yh,$h,Wn,di,ns,qh,Il,is,Rl,Ll,Fo,Uo,Bo,ko,Nl,Dl,Ol,Fl,Ul,Bl,kl,zl,Vl,zo,Hl,Gl,Xl,Wl,Yl,$l,ql,Zl,Jl,jl,Kl,Ql,tc,ec,nc,ic,sc,rc,oc,ac,Vo,lc,so,Qa,Ha,gh,xh,yh,_h,Nd,cc,Dd,Ii,wn,ro,oo,Le,Ga,Od,Fd,Ud,Bd,hc,kd,zd,uc,Vd,Zh,bs,Jh,jn,Ks,Cf,Qs,Wd,Kn,gn,If,Zs,tr,Kh,Jt,Fn,Z,Wc,Rf,he,Yc,Lf,Nf,Me,Ls,tl,h0,er,u0,qc,En,Ye,el,In,co,nl,De,Ns,$n,f0,d0,Bi,fa,Nn,Df,Of,Ci,nr,p0,Ff,Ds,Mi,da,qr,m0,g0,Uf,Bf,kf,zf,x0,Os,Zc,sn,Xn,y0,ir,Yd,ki,pa,ae,xn,ho,qn,Si,jc,wi,Fs,Us,Vf,Kc,Qc,th,eh,nh,ih,ui,Gi,Ei,Zn,ma,Bs,ks,zs,zi,Vi,hs,Zr,ga,xa,us,en,ya,_0,ze,uo,fo,Ve,v0,Jr,rh,ms,b0,Gn,oh,Vs,Dn,jr,cn,Ge,il,Sn,po,ah,M0,S0,On,w0,pi,sr,Hs,Kr,Gs,Xs,Ws,Qr,$d,_a,to,va,Hf,lh,Gf,mo,Ti,ch,Ma,Sa,Xi,Un,Xf,fs,wa,Wf,Ea,Ta,Aa,hh,Pa,Yf,Ca,Ce,sl,ds,T0,Ra,rr,Qn,rl,ol,$f,eo,La,uh,qf,gs,Zf,Jf,xs,go,xo,Wi,al,yo,Yi,mi,or,Da,Oa,fh,Fa,ar,Mh,Mo,So,wo,$i,Kd,W0,Y0,Bn,ll,kn,cl,hl,Eo,qi,ul,fl,dl,pl,zn,Zi,ml,gl,xl,To,Ji,yl,_l,tp,vl,Ao,Po,ph,nd,id,bl,ka,za,hi,Co,Hi,sd,rd,yn,cr,Sh,hr,$s,qs,Ml,Sl,tu,Z0,eu,J0,j0,K0,Q0,tg,eg,ng,wh,He,jM,od,Io,ur,Th,ld,Va,mh,Ro,Lo,iu=pe(()=>{ji={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Ki={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},cd=0,Ah=1,hd=2,No=1,ud=2,fr=3,Qi=0,Tn=1,_n=2,gi=0,dr=1,Ph=2,Ch=3,Ih=4,fd=5,_s=100,dd=101,pd=102,md=103,gd=104,xd=200,yd=201,_d=202,vd=203,Rh=204,Lh=205,bd=206,Md=207,Sd=208,wd=209,Ed=210,Td=211,Ad=212,Pd=213,Cd=214,Xa=0,Wa=1,Ya=2,js=3,$a=4,qa=5,Za=6,Ja=7,Nh=0,Id=1,Rd=2,ti=0,Dh=1,Oh=2,Fh=3,Uh=4,Bh=5,kh=6,zh=7,Vh=300,ts=301,vs=302,wl=303,El=304,Do=306,ja=1e3,fi=1001,Ka=1002,hn=1003,Ld=1004,Oo=1005,dn=1006,Tl=1007,es=1008,Rn=1009,Hh=1010,Gh=1011,pr=1012,Al=1013,ei=1014,ni=1015,ii=1016,Pl=1017,Cl=1018,mr=1020,Xh=35902,Wh=35899,Yh=1021,$h=1022,Wn=1023,di=1026,ns=1027,qh=1028,Il=1029,is=1030,Rl=1031,Ll=1033,Fo=33776,Uo=33777,Bo=33778,ko=33779,Nl=35840,Dl=35841,Ol=35842,Fl=35843,Ul=36196,Bl=37492,kl=37496,zl=37488,Vl=37489,zo=37490,Hl=37491,Gl=37808,Xl=37809,Wl=37810,Yl=37811,$l=37812,ql=37813,Zl=37814,Jl=37815,jl=37816,Kl=37817,Ql=37818,tc=37819,ec=37820,nc=37821,ic=36492,sc=36494,rc=36495,oc=36283,ac=36284,Vo=36285,lc=36286,so=2300,Qa=2301,Ha=2302,gh=2303,xh=2400,yh=2401,_h=2402,Nd=3200,cc=0,Dd=1,Ii="",wn="srgb",ro="srgb-linear",oo="linear",Le="srgb",Ga=7680,Od=519,Fd=512,Ud=513,Bd=514,hc=515,kd=516,zd=517,uc=518,Vd=519,Zh=35044,bs=35048,Jh="300 es",jn=2e3,Ks=2001;Cf={},Qs=null;Wd={[Xa]:Wa,[Ya]:Za,[$a]:Ja,[js]:qa,[Wa]:Xa,[Za]:Ya,[Ja]:$a,[qa]:js},Kn=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){let i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){let i=this._listeners;if(i===void 0)return;let s=i[t];if(s!==void 0){let o=s.indexOf(e);o!==-1&&s.splice(o,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let i=e[t.type];if(i!==void 0){t.target=this;let s=i.slice(0);for(let o=0,c=s.length;o<c;o++)s[o].call(this,t);t.target=null}}},gn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],If=1234567,Zs=Math.PI/180,tr=180/Math.PI;Kh={DEG2RAD:Zs,RAD2DEG:tr,generateUUID:Ai,clamp:ve,euclideanModulo:jh,mapLinear:$m,inverseLerp:qm,lerp:io,damp:Zm,pingpong:Jm,smoothstep:jm,smootherstep:Km,randInt:Qm,randFloat:t0,randFloatSpread:e0,seededRandom:n0,degToRad:i0,radToDeg:s0,isPowerOfTwo:r0,ceilPowerOfTwo:o0,floorPowerOfTwo:a0,setQuaternionFromProperEuler:l0,normalize:Ne,denormalize:Jn},Jt=class n{static{n.prototype.isVector2=!0}constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,i=this.y,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6],this.y=s[1]*e+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=ve(this.x,t.x,e.x),this.y=ve(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=ve(this.x,t,e),this.y=ve(this.y,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(ve(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(ve(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let i=Math.cos(e),s=Math.sin(e),o=this.x-t.x,c=this.y-t.y;return this.x=o*i-c*s+t.x,this.y=o*s+c*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Fn=class{constructor(t=0,e=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=s}static slerpFlat(t,e,i,s,o,c,a){let u=i[s+0],f=i[s+1],p=i[s+2],x=i[s+3],m=o[c+0],_=o[c+1],v=o[c+2],M=o[c+3];if(x!==M||u!==m||f!==_||p!==v){let g=u*m+f*_+p*v+x*M;g<0&&(m=-m,_=-_,v=-v,M=-M,g=-g);let y=1-a;if(g<.9995){let E=Math.acos(g),P=Math.sin(E);y=Math.sin(y*E)/P,a=Math.sin(a*E)/P,u=u*y+m*a,f=f*y+_*a,p=p*y+v*a,x=x*y+M*a}else{u=u*y+m*a,f=f*y+_*a,p=p*y+v*a,x=x*y+M*a;let E=1/Math.sqrt(u*u+f*f+p*p+x*x);u*=E,f*=E,p*=E,x*=E}}t[e]=u,t[e+1]=f,t[e+2]=p,t[e+3]=x}static multiplyQuaternionsFlat(t,e,i,s,o,c){let a=i[s],u=i[s+1],f=i[s+2],p=i[s+3],x=o[c],m=o[c+1],_=o[c+2],v=o[c+3];return t[e]=a*v+p*x+u*_-f*m,t[e+1]=u*v+p*m+f*x-a*_,t[e+2]=f*v+p*_+a*m-u*x,t[e+3]=p*v-a*x-u*m-f*_,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,s){return this._x=t,this._y=e,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let i=t._x,s=t._y,o=t._z,c=t._order,a=Math.cos,u=Math.sin,f=a(i/2),p=a(s/2),x=a(o/2),m=u(i/2),_=u(s/2),v=u(o/2);switch(c){case"XYZ":this._x=m*p*x+f*_*v,this._y=f*_*x-m*p*v,this._z=f*p*v+m*_*x,this._w=f*p*x-m*_*v;break;case"YXZ":this._x=m*p*x+f*_*v,this._y=f*_*x-m*p*v,this._z=f*p*v-m*_*x,this._w=f*p*x+m*_*v;break;case"ZXY":this._x=m*p*x-f*_*v,this._y=f*_*x+m*p*v,this._z=f*p*v+m*_*x,this._w=f*p*x-m*_*v;break;case"ZYX":this._x=m*p*x-f*_*v,this._y=f*_*x+m*p*v,this._z=f*p*v-m*_*x,this._w=f*p*x+m*_*v;break;case"YZX":this._x=m*p*x+f*_*v,this._y=f*_*x+m*p*v,this._z=f*p*v-m*_*x,this._w=f*p*x-m*_*v;break;case"XZY":this._x=m*p*x-f*_*v,this._y=f*_*x-m*p*v,this._z=f*p*v+m*_*x,this._w=f*p*x+m*_*v;break;default:ne("Quaternion: .setFromEuler() encountered an unknown order: "+c)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let i=e/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,i=e[0],s=e[4],o=e[8],c=e[1],a=e[5],u=e[9],f=e[2],p=e[6],x=e[10],m=i+a+x;if(m>0){let _=.5/Math.sqrt(m+1);this._w=.25/_,this._x=(p-u)*_,this._y=(o-f)*_,this._z=(c-s)*_}else if(i>a&&i>x){let _=2*Math.sqrt(1+i-a-x);this._w=(p-u)/_,this._x=.25*_,this._y=(s+c)/_,this._z=(o+f)/_}else if(a>x){let _=2*Math.sqrt(1+a-i-x);this._w=(o-f)/_,this._x=(s+c)/_,this._y=.25*_,this._z=(u+p)/_}else{let _=2*Math.sqrt(1+x-i-a);this._w=(c-s)/_,this._x=(o+f)/_,this._y=(u+p)/_,this._z=.25*_}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<1e-8?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ve(this.dot(t),-1,1)))}rotateTowards(t,e){let i=this.angleTo(t);if(i===0)return this;let s=Math.min(1,e/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let i=t._x,s=t._y,o=t._z,c=t._w,a=e._x,u=e._y,f=e._z,p=e._w;return this._x=i*p+c*a+s*f-o*u,this._y=s*p+c*u+o*a-i*f,this._z=o*p+c*f+i*u-s*a,this._w=c*p-i*a-s*u-o*f,this._onChangeCallback(),this}slerp(t,e){let i=t._x,s=t._y,o=t._z,c=t._w,a=this.dot(t);a<0&&(i=-i,s=-s,o=-o,c=-c,a=-a);let u=1-e;if(a<.9995){let f=Math.acos(a),p=Math.sin(f);u=Math.sin(u*f)/p,e=Math.sin(e*f)/p,this._x=this._x*u+i*e,this._y=this._y*u+s*e,this._z=this._z*u+o*e,this._w=this._w*u+c*e,this._onChangeCallback()}else this._x=this._x*u+i*e,this._y=this._y*u+s*e,this._z=this._z*u+o*e,this._w=this._w*u+c*e,this.normalize();return this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),o=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),o*Math.sin(e),o*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},Z=class n{static{n.prototype.isVector3=!0}constructor(t=0,e=0,i=0){this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Rf.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Rf.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,i=this.y,s=this.z,o=t.elements;return this.x=o[0]*e+o[3]*i+o[6]*s,this.y=o[1]*e+o[4]*i+o[7]*s,this.z=o[2]*e+o[5]*i+o[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,i=this.y,s=this.z,o=t.elements,c=1/(o[3]*e+o[7]*i+o[11]*s+o[15]);return this.x=(o[0]*e+o[4]*i+o[8]*s+o[12])*c,this.y=(o[1]*e+o[5]*i+o[9]*s+o[13])*c,this.z=(o[2]*e+o[6]*i+o[10]*s+o[14])*c,this}applyQuaternion(t){let e=this.x,i=this.y,s=this.z,o=t.x,c=t.y,a=t.z,u=t.w,f=2*(c*s-a*i),p=2*(a*e-o*s),x=2*(o*i-c*e);return this.x=e+u*f+c*x-a*p,this.y=i+u*p+a*f-o*x,this.z=s+u*x+o*p-c*f,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,i=this.y,s=this.z,o=t.elements;return this.x=o[0]*e+o[4]*i+o[8]*s,this.y=o[1]*e+o[5]*i+o[9]*s,this.z=o[2]*e+o[6]*i+o[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=ve(this.x,t.x,e.x),this.y=ve(this.y,t.y,e.y),this.z=ve(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=ve(this.x,t,e),this.y=ve(this.y,t,e),this.z=ve(this.z,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(ve(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let i=t.x,s=t.y,o=t.z,c=e.x,a=e.y,u=e.z;return this.x=s*u-o*a,this.y=o*c-i*u,this.z=i*a-s*c,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return Wc.copy(this).projectOnVector(t),this.sub(Wc)}reflect(t){return this.sub(Wc.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(ve(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return e*e+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){let s=Math.sin(e)*t;return this.x=s*Math.sin(i),this.y=Math.cos(e)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Wc=new Z,Rf=new Fn,he=class n{static{n.prototype.isMatrix3=!0}constructor(t,e,i,s,o,c,a,u,f){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,s,o,c,a,u,f)}set(t,e,i,s,o,c,a,u,f){let p=this.elements;return p[0]=t,p[1]=s,p[2]=a,p[3]=e,p[4]=o,p[5]=u,p[6]=i,p[7]=c,p[8]=f,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,s=e.elements,o=this.elements,c=i[0],a=i[3],u=i[6],f=i[1],p=i[4],x=i[7],m=i[2],_=i[5],v=i[8],M=s[0],g=s[3],y=s[6],E=s[1],P=s[4],S=s[7],L=s[2],T=s[5],C=s[8];return o[0]=c*M+a*E+u*L,o[3]=c*g+a*P+u*T,o[6]=c*y+a*S+u*C,o[1]=f*M+p*E+x*L,o[4]=f*g+p*P+x*T,o[7]=f*y+p*S+x*C,o[2]=m*M+_*E+v*L,o[5]=m*g+_*P+v*T,o[8]=m*y+_*S+v*C,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[1],s=t[2],o=t[3],c=t[4],a=t[5],u=t[6],f=t[7],p=t[8];return e*c*p-e*a*f-i*o*p+i*a*u+s*o*f-s*c*u}invert(){let t=this.elements,e=t[0],i=t[1],s=t[2],o=t[3],c=t[4],a=t[5],u=t[6],f=t[7],p=t[8],x=p*c-a*f,m=a*u-p*o,_=f*o-c*u,v=e*x+i*m+s*_;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);let M=1/v;return t[0]=x*M,t[1]=(s*f-p*i)*M,t[2]=(a*i-s*c)*M,t[3]=m*M,t[4]=(p*e-s*u)*M,t[5]=(s*o-a*e)*M,t[6]=_*M,t[7]=(i*u-f*e)*M,t[8]=(c*e-i*o)*M,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,s,o,c,a){let u=Math.cos(o),f=Math.sin(o);return this.set(i*u,i*f,-i*(u*c+f*a)+c+t,-s*f,s*u,-s*(-f*c+u*a)+a+e,0,0,1),this}scale(t,e){return ps("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Yc.makeScale(t,e)),this}rotate(t){return ps("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Yc.makeRotation(-t)),this}translate(t,e){return ps("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Yc.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,i=t.elements;for(let s=0;s<9;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Yc=new he,Lf=new he().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Nf=new he().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Me=c0();tl=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{Ls===void 0&&(Ls=ao("canvas")),Ls.width=t.width,Ls.height=t.height;let s=Ls.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),i=Ls}return i.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=ao("canvas");e.width=t.width,e.height=t.height;let i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);let s=i.getImageData(0,0,t.width,t.height),o=s.data;for(let c=0;c<o.length;c++)o[c]=Pi(o[c]/255)*255;return i.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(Pi(e[i]/255)*255):e[i]=Pi(e[i]);return{data:e,width:t.width,height:t.height}}else return ne("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},h0=0,er=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:h0++}),this.uuid=Ai(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let o;if(Array.isArray(s)){o=[];for(let c=0,a=s.length;c<a;c++)s[c].isDataTexture?o.push($c(s[c].image)):o.push($c(s[c]))}else o=$c(s);i.url=o}return e||(t.images[this.uuid]=i),i}};u0=0,qc=new Z,En=class n extends Kn{constructor(t=n.DEFAULT_IMAGE,e=n.DEFAULT_MAPPING,i=fi,s=fi,o=dn,c=es,a=Wn,u=Rn,f=n.DEFAULT_ANISOTROPY,p=Ii){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:u0++}),this.uuid=Ai(),this.name="",this.source=new er(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=o,this.minFilter=c,this.anisotropy=f,this.format=a,this.internalFormat=null,this.type=u,this.offset=new Jt(0,0),this.repeat=new Jt(1,1),this.center=new Jt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new he,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=p,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(qc).x}get height(){return this.source.getSize(qc).y}get depth(){return this.source.getSize(qc).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let i=t[e];if(i===void 0){ne(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){ne(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Vh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ja:t.x=t.x-Math.floor(t.x);break;case fi:t.x=t.x<0?0:1;break;case Ka:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case ja:t.y=t.y-Math.floor(t.y);break;case fi:t.y=t.y<0?0:1;break;case Ka:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};En.DEFAULT_IMAGE=null;En.DEFAULT_MAPPING=Vh;En.DEFAULT_ANISOTROPY=1;Ye=class n{static{n.prototype.isVector4=!0}constructor(t=0,e=0,i=0,s=1){this.x=t,this.y=e,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,i=this.y,s=this.z,o=this.w,c=t.elements;return this.x=c[0]*e+c[4]*i+c[8]*s+c[12]*o,this.y=c[1]*e+c[5]*i+c[9]*s+c[13]*o,this.z=c[2]*e+c[6]*i+c[10]*s+c[14]*o,this.w=c[3]*e+c[7]*i+c[11]*s+c[15]*o,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,s,o,u=t.elements,f=u[0],p=u[4],x=u[8],m=u[1],_=u[5],v=u[9],M=u[2],g=u[6],y=u[10];if(Math.abs(p-m)<.01&&Math.abs(x-M)<.01&&Math.abs(v-g)<.01){if(Math.abs(p+m)<.1&&Math.abs(x+M)<.1&&Math.abs(v+g)<.1&&Math.abs(f+_+y-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let P=(f+1)/2,S=(_+1)/2,L=(y+1)/2,T=(p+m)/4,C=(x+M)/4,w=(v+g)/4;return P>S&&P>L?P<.01?(i=0,s=.707106781,o=.707106781):(i=Math.sqrt(P),s=T/i,o=C/i):S>L?S<.01?(i=.707106781,s=0,o=.707106781):(s=Math.sqrt(S),i=T/s,o=w/s):L<.01?(i=.707106781,s=.707106781,o=0):(o=Math.sqrt(L),i=C/o,s=w/o),this.set(i,s,o,e),this}let E=Math.sqrt((g-v)*(g-v)+(x-M)*(x-M)+(m-p)*(m-p));return Math.abs(E)<.001&&(E=1),this.x=(g-v)/E,this.y=(x-M)/E,this.z=(m-p)/E,this.w=Math.acos((f+_+y-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=ve(this.x,t.x,e.x),this.y=ve(this.y,t.y,e.y),this.z=ve(this.z,t.z,e.z),this.w=ve(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=ve(this.x,t,e),this.y=ve(this.y,t,e),this.z=ve(this.z,t,e),this.w=ve(this.w,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(ve(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},el=class extends Kn{constructor(t=1,e=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:dn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=i.depth,this.scissor=new Ye(0,0,t,e),this.scissorTest=!1,this.viewport=new Ye(0,0,t,e),this.textures=[];let s={width:t,height:e,depth:i.depth},o=new En(s),c=i.count;for(let a=0;a<c;a++)this.textures[a]=o.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:dn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let s=0,o=this.textures.length;s<o;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,i=t.textures.length;e<i;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new er(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},In=class extends el{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}},co=class extends En{constructor(t=null,e=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=hn,this.minFilter=hn,this.wrapR=fi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}},nl=class extends En{constructor(t=null,e=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=hn,this.minFilter=hn,this.wrapR=fi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}},De=class n{static{n.prototype.isMatrix4=!0}constructor(t,e,i,s,o,c,a,u,f,p,x,m,_,v,M,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,s,o,c,a,u,f,p,x,m,_,v,M,g)}set(t,e,i,s,o,c,a,u,f,p,x,m,_,v,M,g){let y=this.elements;return y[0]=t,y[4]=e,y[8]=i,y[12]=s,y[1]=o,y[5]=c,y[9]=a,y[13]=u,y[2]=f,y[6]=p,y[10]=x,y[14]=m,y[3]=_,y[7]=v,y[11]=M,y[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){let e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),i.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,i=t.elements,s=1/Ns.setFromMatrixColumn(t,0).length(),o=1/Ns.setFromMatrixColumn(t,1).length(),c=1/Ns.setFromMatrixColumn(t,2).length();return e[0]=i[0]*s,e[1]=i[1]*s,e[2]=i[2]*s,e[3]=0,e[4]=i[4]*o,e[5]=i[5]*o,e[6]=i[6]*o,e[7]=0,e[8]=i[8]*c,e[9]=i[9]*c,e[10]=i[10]*c,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,i=t.x,s=t.y,o=t.z,c=Math.cos(i),a=Math.sin(i),u=Math.cos(s),f=Math.sin(s),p=Math.cos(o),x=Math.sin(o);if(t.order==="XYZ"){let m=c*p,_=c*x,v=a*p,M=a*x;e[0]=u*p,e[4]=-u*x,e[8]=f,e[1]=_+v*f,e[5]=m-M*f,e[9]=-a*u,e[2]=M-m*f,e[6]=v+_*f,e[10]=c*u}else if(t.order==="YXZ"){let m=u*p,_=u*x,v=f*p,M=f*x;e[0]=m+M*a,e[4]=v*a-_,e[8]=c*f,e[1]=c*x,e[5]=c*p,e[9]=-a,e[2]=_*a-v,e[6]=M+m*a,e[10]=c*u}else if(t.order==="ZXY"){let m=u*p,_=u*x,v=f*p,M=f*x;e[0]=m-M*a,e[4]=-c*x,e[8]=v+_*a,e[1]=_+v*a,e[5]=c*p,e[9]=M-m*a,e[2]=-c*f,e[6]=a,e[10]=c*u}else if(t.order==="ZYX"){let m=c*p,_=c*x,v=a*p,M=a*x;e[0]=u*p,e[4]=v*f-_,e[8]=m*f+M,e[1]=u*x,e[5]=M*f+m,e[9]=_*f-v,e[2]=-f,e[6]=a*u,e[10]=c*u}else if(t.order==="YZX"){let m=c*u,_=c*f,v=a*u,M=a*f;e[0]=u*p,e[4]=M-m*x,e[8]=v*x+_,e[1]=x,e[5]=c*p,e[9]=-a*p,e[2]=-f*p,e[6]=_*x+v,e[10]=m-M*x}else if(t.order==="XZY"){let m=c*u,_=c*f,v=a*u,M=a*f;e[0]=u*p,e[4]=-x,e[8]=f*p,e[1]=m*x+M,e[5]=c*p,e[9]=_*x-v,e[2]=v*x-_,e[6]=a*p,e[10]=M*x+m}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(f0,t,d0)}lookAt(t,e,i){let s=this.elements;return Nn.subVectors(t,e),Nn.lengthSq()===0&&(Nn.z=1),Nn.normalize(),Bi.crossVectors(i,Nn),Bi.lengthSq()===0&&(Math.abs(i.z)===1?Nn.x+=1e-4:Nn.z+=1e-4,Nn.normalize(),Bi.crossVectors(i,Nn)),Bi.normalize(),fa.crossVectors(Nn,Bi),s[0]=Bi.x,s[4]=fa.x,s[8]=Nn.x,s[1]=Bi.y,s[5]=fa.y,s[9]=Nn.y,s[2]=Bi.z,s[6]=fa.z,s[10]=Nn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,s=e.elements,o=this.elements,c=i[0],a=i[4],u=i[8],f=i[12],p=i[1],x=i[5],m=i[9],_=i[13],v=i[2],M=i[6],g=i[10],y=i[14],E=i[3],P=i[7],S=i[11],L=i[15],T=s[0],C=s[4],w=s[8],N=s[12],F=s[1],B=s[5],H=s[9],V=s[13],z=s[2],W=s[6],$=s[10],k=s[14],J=s[3],q=s[7],it=s[11],st=s[15];return o[0]=c*T+a*F+u*z+f*J,o[4]=c*C+a*B+u*W+f*q,o[8]=c*w+a*H+u*$+f*it,o[12]=c*N+a*V+u*k+f*st,o[1]=p*T+x*F+m*z+_*J,o[5]=p*C+x*B+m*W+_*q,o[9]=p*w+x*H+m*$+_*it,o[13]=p*N+x*V+m*k+_*st,o[2]=v*T+M*F+g*z+y*J,o[6]=v*C+M*B+g*W+y*q,o[10]=v*w+M*H+g*$+y*it,o[14]=v*N+M*V+g*k+y*st,o[3]=E*T+P*F+S*z+L*J,o[7]=E*C+P*B+S*W+L*q,o[11]=E*w+P*H+S*$+L*it,o[15]=E*N+P*V+S*k+L*st,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[4],s=t[8],o=t[12],c=t[1],a=t[5],u=t[9],f=t[13],p=t[2],x=t[6],m=t[10],_=t[14],v=t[3],M=t[7],g=t[11],y=t[15],E=u*_-f*m,P=a*_-f*x,S=a*m-u*x,L=c*_-f*p,T=c*m-u*p,C=c*x-a*p;return e*(M*E-g*P+y*S)-i*(v*E-g*L+y*T)+s*(v*P-M*L+y*C)-o*(v*S-M*T+g*C)}determinantAffine(){let t=this.elements,e=t[0],i=t[4],s=t[8],o=t[1],c=t[5],a=t[9],u=t[2],f=t[6],p=t[10];return e*(c*p-a*f)-i*(o*p-a*u)+s*(o*f-c*u)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=i),this}invert(){let t=this.elements,e=t[0],i=t[1],s=t[2],o=t[3],c=t[4],a=t[5],u=t[6],f=t[7],p=t[8],x=t[9],m=t[10],_=t[11],v=t[12],M=t[13],g=t[14],y=t[15],E=e*a-i*c,P=e*u-s*c,S=e*f-o*c,L=i*u-s*a,T=i*f-o*a,C=s*f-o*u,w=p*M-x*v,N=p*g-m*v,F=p*y-_*v,B=x*g-m*M,H=x*y-_*M,V=m*y-_*g,z=E*V-P*H+S*B+L*F-T*N+C*w;if(z===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let W=1/z;return t[0]=(a*V-u*H+f*B)*W,t[1]=(s*H-i*V-o*B)*W,t[2]=(M*C-g*T+y*L)*W,t[3]=(m*T-x*C-_*L)*W,t[4]=(u*F-c*V-f*N)*W,t[5]=(e*V-s*F+o*N)*W,t[6]=(g*S-v*C-y*P)*W,t[7]=(p*C-m*S+_*P)*W,t[8]=(c*H-a*F+f*w)*W,t[9]=(i*F-e*H-o*w)*W,t[10]=(v*T-M*S+y*E)*W,t[11]=(x*S-p*T-_*E)*W,t[12]=(a*N-c*B-u*w)*W,t[13]=(e*B-i*N+s*w)*W,t[14]=(M*P-v*L-g*E)*W,t[15]=(p*L-x*P+m*E)*W,this}scale(t){let e=this.elements,i=t.x,s=t.y,o=t.z;return e[0]*=i,e[4]*=s,e[8]*=o,e[1]*=i,e[5]*=s,e[9]*=o,e[2]*=i,e[6]*=s,e[10]*=o,e[3]*=i,e[7]*=s,e[11]*=o,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,s))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let i=Math.cos(e),s=Math.sin(e),o=1-i,c=t.x,a=t.y,u=t.z,f=o*c,p=o*a;return this.set(f*c+i,f*a-s*u,f*u+s*a,0,f*a+s*u,p*a+i,p*u-s*c,0,f*u-s*a,p*u+s*c,o*u*u+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,s,o,c){return this.set(1,i,o,0,t,1,c,0,e,s,1,0,0,0,0,1),this}compose(t,e,i){let s=this.elements,o=e._x,c=e._y,a=e._z,u=e._w,f=o+o,p=c+c,x=a+a,m=o*f,_=o*p,v=o*x,M=c*p,g=c*x,y=a*x,E=u*f,P=u*p,S=u*x,L=i.x,T=i.y,C=i.z;return s[0]=(1-(M+y))*L,s[1]=(_+S)*L,s[2]=(v-P)*L,s[3]=0,s[4]=(_-S)*T,s[5]=(1-(m+y))*T,s[6]=(g+E)*T,s[7]=0,s[8]=(v+P)*C,s[9]=(g-E)*C,s[10]=(1-(m+M))*C,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,i){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let o=this.determinantAffine();if(o===0)return i.set(1,1,1),e.identity(),this;let c=Ns.set(s[0],s[1],s[2]).length(),a=Ns.set(s[4],s[5],s[6]).length(),u=Ns.set(s[8],s[9],s[10]).length();o<0&&(c=-c),$n.copy(this);let f=1/c,p=1/a,x=1/u;return $n.elements[0]*=f,$n.elements[1]*=f,$n.elements[2]*=f,$n.elements[4]*=p,$n.elements[5]*=p,$n.elements[6]*=p,$n.elements[8]*=x,$n.elements[9]*=x,$n.elements[10]*=x,e.setFromRotationMatrix($n),i.x=c,i.y=a,i.z=u,this}makePerspective(t,e,i,s,o,c,a=jn,u=!1){let f=this.elements,p=2*o/(e-t),x=2*o/(i-s),m=(e+t)/(e-t),_=(i+s)/(i-s),v,M;if(u)v=o/(c-o),M=c*o/(c-o);else if(a===jn)v=-(c+o)/(c-o),M=-2*c*o/(c-o);else if(a===Ks)v=-c/(c-o),M=-c*o/(c-o);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return f[0]=p,f[4]=0,f[8]=m,f[12]=0,f[1]=0,f[5]=x,f[9]=_,f[13]=0,f[2]=0,f[6]=0,f[10]=v,f[14]=M,f[3]=0,f[7]=0,f[11]=-1,f[15]=0,this}makeOrthographic(t,e,i,s,o,c,a=jn,u=!1){let f=this.elements,p=2/(e-t),x=2/(i-s),m=-(e+t)/(e-t),_=-(i+s)/(i-s),v,M;if(u)v=1/(c-o),M=c/(c-o);else if(a===jn)v=-2/(c-o),M=-(c+o)/(c-o);else if(a===Ks)v=-1/(c-o),M=-o/(c-o);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return f[0]=p,f[4]=0,f[8]=0,f[12]=m,f[1]=0,f[5]=x,f[9]=0,f[13]=_,f[2]=0,f[6]=0,f[10]=v,f[14]=M,f[3]=0,f[7]=0,f[11]=0,f[15]=1,this}equals(t){let e=this.elements,i=t.elements;for(let s=0;s<16;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}},Ns=new Z,$n=new De,f0=new Z(0,0,0),d0=new Z(1,1,1),Bi=new Z,fa=new Z,Nn=new Z,Df=new De,Of=new Fn,Ci=class n{constructor(t=0,e=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,s=this._order){return this._x=t,this._y=e,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){let s=t.elements,o=s[0],c=s[4],a=s[8],u=s[1],f=s[5],p=s[9],x=s[2],m=s[6],_=s[10];switch(e){case"XYZ":this._y=Math.asin(ve(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-p,_),this._z=Math.atan2(-c,o)):(this._x=Math.atan2(m,f),this._z=0);break;case"YXZ":this._x=Math.asin(-ve(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(a,_),this._z=Math.atan2(u,f)):(this._y=Math.atan2(-x,o),this._z=0);break;case"ZXY":this._x=Math.asin(ve(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(-x,_),this._z=Math.atan2(-c,f)):(this._y=0,this._z=Math.atan2(u,o));break;case"ZYX":this._y=Math.asin(-ve(x,-1,1)),Math.abs(x)<.9999999?(this._x=Math.atan2(m,_),this._z=Math.atan2(u,o)):(this._x=0,this._z=Math.atan2(-c,f));break;case"YZX":this._z=Math.asin(ve(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(-p,f),this._y=Math.atan2(-x,o)):(this._x=0,this._y=Math.atan2(a,_));break;case"XZY":this._z=Math.asin(-ve(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(m,f),this._y=Math.atan2(a,o)):(this._x=Math.atan2(-p,_),this._y=0);break;default:ne("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return Df.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Df,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Of.setFromEuler(this),this.setFromQuaternion(Of,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Ci.DEFAULT_ORDER="XYZ";nr=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},p0=0,Ff=new Z,Ds=new Fn,Mi=new De,da=new Z,qr=new Z,m0=new Z,g0=new Fn,Uf=new Z(1,0,0),Bf=new Z(0,1,0),kf=new Z(0,0,1),zf={type:"added"},x0={type:"removed"},Os={type:"childadded",child:null},Zc={type:"childremoved",child:null},sn=class n extends Kn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:p0++}),this.uuid=Ai(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let t=new Z,e=new Ci,i=new Fn,s=new Z(1,1,1);function o(){i.setFromEuler(e,!1)}function c(){e.setFromQuaternion(i,void 0,!1)}e._onChange(o),i._onChange(c),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new De},normalMatrix:{value:new he}}),this.matrix=new De,this.matrixWorld=new De,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new nr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ds.setFromAxisAngle(t,e),this.quaternion.multiply(Ds),this}rotateOnWorldAxis(t,e){return Ds.setFromAxisAngle(t,e),this.quaternion.premultiply(Ds),this}rotateX(t){return this.rotateOnAxis(Uf,t)}rotateY(t){return this.rotateOnAxis(Bf,t)}rotateZ(t){return this.rotateOnAxis(kf,t)}translateOnAxis(t,e){return Ff.copy(t).applyQuaternion(this.quaternion),this.position.add(Ff.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Uf,t)}translateY(t){return this.translateOnAxis(Bf,t)}translateZ(t){return this.translateOnAxis(kf,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Mi.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?da.copy(t):da.set(t,e,i);let s=this.parent;this.updateWorldMatrix(!0,!1),qr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Mi.lookAt(qr,da,this.up):Mi.lookAt(da,qr,this.up),this.quaternion.setFromRotationMatrix(Mi),s&&(Mi.extractRotation(s.matrixWorld),Ds.setFromRotationMatrix(Mi),this.quaternion.premultiply(Ds.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(se("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(zf),Os.child=t,this.dispatchEvent(Os),Os.child=null):se("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(x0),Zc.child=t,this.dispatchEvent(Zc),Zc.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Mi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Mi.multiply(t.parent.matrixWorld)),t.applyMatrix4(Mi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(zf),Os.child=t,this.dispatchEvent(Os),Os.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,s=this.children.length;i<s;i++){let c=this.children[i].getObjectByProperty(t,e);if(c!==void 0)return c}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);let s=this.children;for(let o=0,c=s.length;o<c;o++)s[o].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(qr,t,m0),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(qr,g0,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,i=t.y,s=t.z,o=this.matrix.elements;o[12]+=e-o[0]*e-o[4]*i-o[8]*s,o[13]+=i-o[1]*e-o[5]*i-o[9]*s,o[14]+=s-o[2]*e-o[6]*i-o[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e,i=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),e===!0){let o=this.children;for(let c=0,a=o.length;c<a;c++)o[c].updateWorldMatrix(!1,!0,i)}}toJSON(t){let e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function o(a,u){return a[u.uuid]===void 0&&(a[u.uuid]=u.toJSON(t)),u.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=o(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let u=a.shapes;if(Array.isArray(u))for(let f=0,p=u.length;f<p;f++){let x=u[f];o(t.shapes,x)}else o(t.shapes,u)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let u=0,f=this.material.length;u<f;u++)a.push(o(t.materials,this.material[u]));s.material=a}else s.material=o(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let u=this.animations[a];s.animations.push(o(t.animations,u))}}if(e){let a=c(t.geometries),u=c(t.materials),f=c(t.textures),p=c(t.images),x=c(t.shapes),m=c(t.skeletons),_=c(t.animations),v=c(t.nodes);a.length>0&&(i.geometries=a),u.length>0&&(i.materials=u),f.length>0&&(i.textures=f),p.length>0&&(i.images=p),x.length>0&&(i.shapes=x),m.length>0&&(i.skeletons=m),_.length>0&&(i.animations=_),v.length>0&&(i.nodes=v)}return i.object=s,i;function c(a){let u=[];for(let f in a){let p=a[f];delete p.metadata,u.push(p)}return u}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){let s=t.children[i];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};sn.DEFAULT_UP=new Z(0,1,0);sn.DEFAULT_MATRIX_AUTO_UPDATE=!0;sn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;Xn=class extends sn{constructor(){super(),this.isGroup=!0,this.type="Group"}},y0={type:"move"},ir=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Xn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Xn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Xn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Z,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let s=null,o=null,c=null,a=this._targetRay,u=this._grip,f=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(f&&t.hand){c=!0;for(let M of t.hand.values()){let g=e.getJointPose(M,i),y=this._getHandJoint(f,M);g!==null&&(y.matrix.fromArray(g.transform.matrix),y.matrix.decompose(y.position,y.rotation,y.scale),y.matrixWorldNeedsUpdate=!0,y.jointRadius=g.radius),y.visible=g!==null}let p=f.joints["index-finger-tip"],x=f.joints["thumb-tip"],m=p.position.distanceTo(x.position),_=.02,v=.005;f.inputState.pinching&&m>_+v?(f.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!f.inputState.pinching&&m<=_-v&&(f.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else u!==null&&t.gripSpace&&(o=e.getPose(t.gripSpace,i),o!==null&&(u.matrix.fromArray(o.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,o.linearVelocity?(u.hasLinearVelocity=!0,u.linearVelocity.copy(o.linearVelocity)):u.hasLinearVelocity=!1,o.angularVelocity?(u.hasAngularVelocity=!0,u.angularVelocity.copy(o.angularVelocity)):u.hasAngularVelocity=!1,u.eventsEnabled&&u.dispatchEvent({type:"gripUpdated",data:t,target:this})));a!==null&&(s=e.getPose(t.targetRaySpace,i),s===null&&o!==null&&(s=o),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(y0)))}return a!==null&&(a.visible=s!==null),u!==null&&(u.visible=o!==null),f!==null&&(f.visible=c!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let i=new Xn;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}},Yd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ki={h:0,s:0,l:0},pa={h:0,s:0,l:0};ae=class{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=wn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Me.colorSpaceToWorking(this,e),this}setRGB(t,e,i,s=Me.workingColorSpace){return this.r=t,this.g=e,this.b=i,Me.colorSpaceToWorking(this,s),this}setHSL(t,e,i,s=Me.workingColorSpace){if(t=jh(t,1),e=ve(e,0,1),i=ve(i,0,1),e===0)this.r=this.g=this.b=i;else{let o=i<=.5?i*(1+e):i+e-i*e,c=2*i-o;this.r=Jc(c,o,t+1/3),this.g=Jc(c,o,t),this.b=Jc(c,o,t-1/3)}return Me.colorSpaceToWorking(this,s),this}setStyle(t,e=wn){function i(o){o!==void 0&&parseFloat(o)<1&&ne("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let o,c=s[1],a=s[2];switch(c){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,e);if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(o[4]),this.setRGB(Math.min(100,parseInt(o[1],10))/100,Math.min(100,parseInt(o[2],10))/100,Math.min(100,parseInt(o[3],10))/100,e);break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,e);break;default:ne("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let o=s[1],c=o.length;if(c===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,e);if(c===6)return this.setHex(parseInt(o,16),e);ne("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=wn){let i=Yd[t.toLowerCase()];return i!==void 0?this.setHex(i,e):ne("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Pi(t.r),this.g=Pi(t.g),this.b=Pi(t.b),this}copyLinearToSRGB(t){return this.r=Js(t.r),this.g=Js(t.g),this.b=Js(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=wn){return Me.workingToColorSpace(xn.copy(this),t),Math.round(ve(xn.r*255,0,255))*65536+Math.round(ve(xn.g*255,0,255))*256+Math.round(ve(xn.b*255,0,255))}getHexString(t=wn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Me.workingColorSpace){Me.workingToColorSpace(xn.copy(this),e);let i=xn.r,s=xn.g,o=xn.b,c=Math.max(i,s,o),a=Math.min(i,s,o),u,f,p=(a+c)/2;if(a===c)u=0,f=0;else{let x=c-a;switch(f=p<=.5?x/(c+a):x/(2-c-a),c){case i:u=(s-o)/x+(s<o?6:0);break;case s:u=(o-i)/x+2;break;case o:u=(i-s)/x+4;break}u/=6}return t.h=u,t.s=f,t.l=p,t}getRGB(t,e=Me.workingColorSpace){return Me.workingToColorSpace(xn.copy(this),e),t.r=xn.r,t.g=xn.g,t.b=xn.b,t}getStyle(t=wn){Me.workingToColorSpace(xn.copy(this),t);let e=xn.r,i=xn.g,s=xn.b;return t!==wn?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,e,i){return this.getHSL(ki),this.setHSL(ki.h+t,ki.s+e,ki.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(ki),t.getHSL(pa);let i=io(ki.h,pa.h,e),s=io(ki.s,pa.s,e),o=io(ki.l,pa.l,e);return this.setHSL(i,s,o),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,i=this.g,s=this.b,o=t.elements;return this.r=o[0]*e+o[3]*i+o[6]*s,this.g=o[1]*e+o[4]*i+o[7]*s,this.b=o[2]*e+o[5]*i+o[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},xn=new ae;ae.NAMES=Yd;ho=class extends sn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ci,this.environmentIntensity=1,this.environmentRotation=new Ci,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},qn=new Z,Si=new Z,jc=new Z,wi=new Z,Fs=new Z,Us=new Z,Vf=new Z,Kc=new Z,Qc=new Z,th=new Z,eh=new Ye,nh=new Ye,ih=new Ye,ui=class n{constructor(t=new Z,e=new Z,i=new Z){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,s){s.subVectors(i,e),qn.subVectors(t,e),s.cross(qn);let o=s.lengthSq();return o>0?s.multiplyScalar(1/Math.sqrt(o)):s.set(0,0,0)}static getBarycoord(t,e,i,s,o){qn.subVectors(s,e),Si.subVectors(i,e),jc.subVectors(t,e);let c=qn.dot(qn),a=qn.dot(Si),u=qn.dot(jc),f=Si.dot(Si),p=Si.dot(jc),x=c*f-a*a;if(x===0)return o.set(0,0,0),null;let m=1/x,_=(f*u-a*p)*m,v=(c*p-a*u)*m;return o.set(1-_-v,v,_)}static containsPoint(t,e,i,s){return this.getBarycoord(t,e,i,s,wi)===null?!1:wi.x>=0&&wi.y>=0&&wi.x+wi.y<=1}static getInterpolation(t,e,i,s,o,c,a,u){return this.getBarycoord(t,e,i,s,wi)===null?(u.x=0,u.y=0,"z"in u&&(u.z=0),"w"in u&&(u.w=0),null):(u.setScalar(0),u.addScaledVector(o,wi.x),u.addScaledVector(c,wi.y),u.addScaledVector(a,wi.z),u)}static getInterpolatedAttribute(t,e,i,s,o,c){return eh.setScalar(0),nh.setScalar(0),ih.setScalar(0),eh.fromBufferAttribute(t,e),nh.fromBufferAttribute(t,i),ih.fromBufferAttribute(t,s),c.setScalar(0),c.addScaledVector(eh,o.x),c.addScaledVector(nh,o.y),c.addScaledVector(ih,o.z),c}static isFrontFacing(t,e,i,s){return qn.subVectors(i,e),Si.subVectors(t,e),qn.cross(Si).dot(s)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,s){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,i,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return qn.subVectors(this.c,this.b),Si.subVectors(this.a,this.b),qn.cross(Si).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return n.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return n.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,s,o){return n.getInterpolation(t,this.a,this.b,this.c,e,i,s,o)}containsPoint(t){return n.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return n.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let i=this.a,s=this.b,o=this.c,c,a;Fs.subVectors(s,i),Us.subVectors(o,i),Kc.subVectors(t,i);let u=Fs.dot(Kc),f=Us.dot(Kc);if(u<=0&&f<=0)return e.copy(i);Qc.subVectors(t,s);let p=Fs.dot(Qc),x=Us.dot(Qc);if(p>=0&&x<=p)return e.copy(s);let m=u*x-p*f;if(m<=0&&u>=0&&p<=0)return c=u/(u-p),e.copy(i).addScaledVector(Fs,c);th.subVectors(t,o);let _=Fs.dot(th),v=Us.dot(th);if(v>=0&&_<=v)return e.copy(o);let M=_*f-u*v;if(M<=0&&f>=0&&v<=0)return a=f/(f-v),e.copy(i).addScaledVector(Us,a);let g=p*v-_*x;if(g<=0&&x-p>=0&&_-v>=0)return Vf.subVectors(o,s),a=(x-p)/(x-p+(_-v)),e.copy(s).addScaledVector(Vf,a);let y=1/(g+M+m);return c=M*y,a=m*y,e.copy(i).addScaledVector(Fs,c).addScaledVector(Us,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Gi=class{constructor(t=new Z(1/0,1/0,1/0),e=new Z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(Zn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(Zn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let i=Zn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let i=t.geometry;if(i!==void 0){let o=i.getAttribute("position");if(e===!0&&o!==void 0&&t.isInstancedMesh!==!0)for(let c=0,a=o.count;c<a;c++)t.isMesh===!0?t.getVertexPosition(c,Zn):Zn.fromBufferAttribute(o,c),Zn.applyMatrix4(t.matrixWorld),this.expandByPoint(Zn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),ma.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),ma.copy(i.boundingBox)),ma.applyMatrix4(t.matrixWorld),this.union(ma)}let s=t.children;for(let o=0,c=s.length;o<c;o++)this.expandByObject(s[o],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Zn),Zn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Zr),ga.subVectors(this.max,Zr),Bs.subVectors(t.a,Zr),ks.subVectors(t.b,Zr),zs.subVectors(t.c,Zr),zi.subVectors(ks,Bs),Vi.subVectors(zs,ks),hs.subVectors(Bs,zs);let e=[0,-zi.z,zi.y,0,-Vi.z,Vi.y,0,-hs.z,hs.y,zi.z,0,-zi.x,Vi.z,0,-Vi.x,hs.z,0,-hs.x,-zi.y,zi.x,0,-Vi.y,Vi.x,0,-hs.y,hs.x,0];return!sh(e,Bs,ks,zs,ga)||(e=[1,0,0,0,1,0,0,0,1],!sh(e,Bs,ks,zs,ga))?!1:(xa.crossVectors(zi,Vi),e=[xa.x,xa.y,xa.z],sh(e,Bs,ks,zs,ga))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Zn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Zn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Ei[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Ei[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Ei[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Ei[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Ei[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Ei[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Ei[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Ei[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Ei),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},Ei=[new Z,new Z,new Z,new Z,new Z,new Z,new Z,new Z],Zn=new Z,ma=new Gi,Bs=new Z,ks=new Z,zs=new Z,zi=new Z,Vi=new Z,hs=new Z,Zr=new Z,ga=new Z,xa=new Z,us=new Z;en=new Z,ya=new Jt,_0=0,ze=class extends Kn{constructor(t,e,i=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:_0++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=Zh,this.updateRanges=[],this.gpuType=ni,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let s=0,o=this.itemSize;s<o;s++)this.array[t+s]=e.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)ya.fromBufferAttribute(this,e),ya.applyMatrix3(t),this.setXY(e,ya.x,ya.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)en.fromBufferAttribute(this,e),en.applyMatrix3(t),this.setXYZ(e,en.x,en.y,en.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)en.fromBufferAttribute(this,e),en.applyMatrix4(t),this.setXYZ(e,en.x,en.y,en.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)en.fromBufferAttribute(this,e),en.applyNormalMatrix(t),this.setXYZ(e,en.x,en.y,en.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)en.fromBufferAttribute(this,e),en.transformDirection(t),this.setXYZ(e,en.x,en.y,en.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=Jn(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=Ne(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Jn(e,this.array)),e}setX(t,e){return this.normalized&&(e=Ne(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Jn(e,this.array)),e}setY(t,e){return this.normalized&&(e=Ne(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Jn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Ne(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Jn(e,this.array)),e}setW(t,e){return this.normalized&&(e=Ne(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=Ne(e,this.array),i=Ne(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,s){return t*=this.itemSize,this.normalized&&(e=Ne(e,this.array),i=Ne(i,this.array),s=Ne(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,e,i,s,o){return t*=this.itemSize,this.normalized&&(e=Ne(e,this.array),i=Ne(i,this.array),s=Ne(s,this.array),o=Ne(o,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=o,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}},uo=class extends ze{constructor(t,e,i){super(new Uint16Array(t),e,i)}},fo=class extends ze{constructor(t,e,i){super(new Uint32Array(t),e,i)}},Ve=class extends ze{constructor(t,e,i){super(new Float32Array(t),e,i)}},v0=new Gi,Jr=new Z,rh=new Z,ms=class{constructor(t=new Z,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let i=this.center;e!==void 0?i.copy(e):v0.setFromPoints(t).getCenter(i);let s=0;for(let o=0,c=t.length;o<c;o++)s=Math.max(s,i.distanceToSquared(t[o]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Jr.subVectors(t,this.center);let e=Jr.lengthSq();if(e>this.radius*this.radius){let i=Math.sqrt(e),s=(i-this.radius)*.5;this.center.addScaledVector(Jr,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(rh.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Jr.copy(t.center).add(rh)),this.expandByPoint(Jr.copy(t.center).sub(rh))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},b0=0,Gn=new De,oh=new sn,Vs=new Z,Dn=new Gi,jr=new Gi,cn=new Z,Ge=class n extends Kn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:b0++}),this.uuid=Ai(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Wm(t)?fo:uo)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let o=new he().getNormalMatrix(t);i.applyNormalMatrix(o),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return Gn.makeRotationFromQuaternion(t),this.applyMatrix4(Gn),this}rotateX(t){return Gn.makeRotationX(t),this.applyMatrix4(Gn),this}rotateY(t){return Gn.makeRotationY(t),this.applyMatrix4(Gn),this}rotateZ(t){return Gn.makeRotationZ(t),this.applyMatrix4(Gn),this}translate(t,e,i){return Gn.makeTranslation(t,e,i),this.applyMatrix4(Gn),this}scale(t,e,i){return Gn.makeScale(t,e,i),this.applyMatrix4(Gn),this}lookAt(t){return oh.lookAt(t),oh.updateMatrix(),this.applyMatrix4(oh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Vs).negate(),this.translate(Vs.x,Vs.y,Vs.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let i=[];for(let s=0,o=t.length;s<o;s++){let c=t[s];i.push(c.x,c.y,c.z||0)}this.setAttribute("position",new Ve(i,3))}else{let i=Math.min(t.length,e.count);for(let s=0;s<i;s++){let o=t[s];e.setXYZ(s,o.x,o.y,o.z||0)}t.length>e.count&&ne("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Gi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){se("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new Z(-1/0,-1/0,-1/0),new Z(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,s=e.length;i<s;i++){let o=e[i];Dn.setFromBufferAttribute(o),this.morphTargetsRelative?(cn.addVectors(this.boundingBox.min,Dn.min),this.boundingBox.expandByPoint(cn),cn.addVectors(this.boundingBox.max,Dn.max),this.boundingBox.expandByPoint(cn)):(this.boundingBox.expandByPoint(Dn.min),this.boundingBox.expandByPoint(Dn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&se('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ms);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){se("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new Z,1/0);return}if(t){let i=this.boundingSphere.center;if(Dn.setFromBufferAttribute(t),e)for(let o=0,c=e.length;o<c;o++){let a=e[o];jr.setFromBufferAttribute(a),this.morphTargetsRelative?(cn.addVectors(Dn.min,jr.min),Dn.expandByPoint(cn),cn.addVectors(Dn.max,jr.max),Dn.expandByPoint(cn)):(Dn.expandByPoint(jr.min),Dn.expandByPoint(jr.max))}Dn.getCenter(i);let s=0;for(let o=0,c=t.count;o<c;o++)cn.fromBufferAttribute(t,o),s=Math.max(s,i.distanceToSquared(cn));if(e)for(let o=0,c=e.length;o<c;o++){let a=e[o],u=this.morphTargetsRelative;for(let f=0,p=a.count;f<p;f++)cn.fromBufferAttribute(a,f),u&&(Vs.fromBufferAttribute(t,f),cn.add(Vs)),s=Math.max(s,i.distanceToSquared(cn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&se('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){se("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=e.position,s=e.normal,o=e.uv,c=this.getAttribute("tangent");(c===void 0||c.count!==i.count)&&(c=new ze(new Float32Array(4*i.count),4),this.setAttribute("tangent",c));let a=[],u=[];for(let w=0;w<i.count;w++)a[w]=new Z,u[w]=new Z;let f=new Z,p=new Z,x=new Z,m=new Jt,_=new Jt,v=new Jt,M=new Z,g=new Z;function y(w,N,F){f.fromBufferAttribute(i,w),p.fromBufferAttribute(i,N),x.fromBufferAttribute(i,F),m.fromBufferAttribute(o,w),_.fromBufferAttribute(o,N),v.fromBufferAttribute(o,F),p.sub(f),x.sub(f),_.sub(m),v.sub(m);let B=1/(_.x*v.y-v.x*_.y);isFinite(B)&&(M.copy(p).multiplyScalar(v.y).addScaledVector(x,-_.y).multiplyScalar(B),g.copy(x).multiplyScalar(_.x).addScaledVector(p,-v.x).multiplyScalar(B),a[w].add(M),a[N].add(M),a[F].add(M),u[w].add(g),u[N].add(g),u[F].add(g))}let E=this.groups;E.length===0&&(E=[{start:0,count:t.count}]);for(let w=0,N=E.length;w<N;++w){let F=E[w],B=F.start,H=F.count;for(let V=B,z=B+H;V<z;V+=3)y(t.getX(V+0),t.getX(V+1),t.getX(V+2))}let P=new Z,S=new Z,L=new Z,T=new Z;function C(w){L.fromBufferAttribute(s,w),T.copy(L);let N=a[w];P.copy(N),P.sub(L.multiplyScalar(L.dot(N))).normalize(),S.crossVectors(T,N);let B=S.dot(u[w])<0?-1:1;c.setXYZW(w,P.x,P.y,P.z,B)}for(let w=0,N=E.length;w<N;++w){let F=E[w],B=F.start,H=F.count;for(let V=B,z=B+H;V<z;V+=3)C(t.getX(V+0)),C(t.getX(V+1)),C(t.getX(V+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==e.count)i=new ze(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let m=0,_=i.count;m<_;m++)i.setXYZ(m,0,0,0);let s=new Z,o=new Z,c=new Z,a=new Z,u=new Z,f=new Z,p=new Z,x=new Z;if(t)for(let m=0,_=t.count;m<_;m+=3){let v=t.getX(m+0),M=t.getX(m+1),g=t.getX(m+2);s.fromBufferAttribute(e,v),o.fromBufferAttribute(e,M),c.fromBufferAttribute(e,g),p.subVectors(c,o),x.subVectors(s,o),p.cross(x),a.fromBufferAttribute(i,v),u.fromBufferAttribute(i,M),f.fromBufferAttribute(i,g),a.add(p),u.add(p),f.add(p),i.setXYZ(v,a.x,a.y,a.z),i.setXYZ(M,u.x,u.y,u.z),i.setXYZ(g,f.x,f.y,f.z)}else for(let m=0,_=e.count;m<_;m+=3)s.fromBufferAttribute(e,m+0),o.fromBufferAttribute(e,m+1),c.fromBufferAttribute(e,m+2),p.subVectors(c,o),x.subVectors(s,o),p.cross(x),i.setXYZ(m+0,p.x,p.y,p.z),i.setXYZ(m+1,p.x,p.y,p.z),i.setXYZ(m+2,p.x,p.y,p.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)cn.fromBufferAttribute(t,e),cn.normalize(),t.setXYZ(e,cn.x,cn.y,cn.z)}toNonIndexed(){function t(a,u){let f=a.array,p=a.itemSize,x=a.normalized,m=new f.constructor(u.length*p),_=0,v=0;for(let M=0,g=u.length;M<g;M++){a.isInterleavedBufferAttribute?_=u[M]*a.data.stride+a.offset:_=u[M]*p;for(let y=0;y<p;y++)m[v++]=f[_++]}return new ze(m,p,x)}if(this.index===null)return ne("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new n,i=this.index.array,s=this.attributes;for(let a in s){let u=s[a],f=t(u,i);e.setAttribute(a,f)}let o=this.morphAttributes;for(let a in o){let u=[],f=o[a];for(let p=0,x=f.length;p<x;p++){let m=f[p],_=t(m,i);u.push(_)}e.morphAttributes[a]=u}e.morphTargetsRelative=this.morphTargetsRelative;let c=this.groups;for(let a=0,u=c.length;a<u;a++){let f=c[a];e.addGroup(f.start,f.count,f.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let u=this.parameters;for(let f in u)u[f]!==void 0&&(t[f]=u[f]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let i=this.attributes;for(let u in i){let f=i[u];t.data.attributes[u]=f.toJSON(t.data)}let s={},o=!1;for(let u in this.morphAttributes){let f=this.morphAttributes[u],p=[];for(let x=0,m=f.length;x<m;x++){let _=f[x];p.push(_.toJSON(t.data))}p.length>0&&(s[u]=p,o=!0)}o&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let c=this.groups;c.length>0&&(t.data.groups=JSON.parse(JSON.stringify(c)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let i=t.index;i!==null&&this.setIndex(i.clone());let s=t.attributes;for(let f in s){let p=s[f];this.setAttribute(f,p.clone(e))}let o=t.morphAttributes;for(let f in o){let p=[],x=o[f];for(let m=0,_=x.length;m<_;m++)p.push(x[m].clone(e));this.morphAttributes[f]=p}this.morphTargetsRelative=t.morphTargetsRelative;let c=t.groups;for(let f=0,p=c.length;f<p;f++){let x=c[f];this.addGroup(x.start,x.count,x.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let u=t.boundingSphere;return u!==null&&(this.boundingSphere=u.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},il=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Zh,this.updateRanges=[],this.version=0,this.uuid=Ai()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,i){t*=this.stride,i*=e.stride;for(let s=0,o=this.stride;s<o;s++)this.array[t+s]=e.array[i+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ai()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(e,this.stride);return i.setUsage(this.usage),i}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ai()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let e={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return e.usage=this.usage,e}},Sn=new Z,po=class n{constructor(t,e,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,i=this.data.count;e<i;e++)Sn.fromBufferAttribute(this,e),Sn.applyMatrix4(t),this.setXYZ(e,Sn.x,Sn.y,Sn.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Sn.fromBufferAttribute(this,e),Sn.applyNormalMatrix(t),this.setXYZ(e,Sn.x,Sn.y,Sn.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Sn.fromBufferAttribute(this,e),Sn.transformDirection(t),this.setXYZ(e,Sn.x,Sn.y,Sn.z);return this}getComponent(t,e){let i=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(i=Jn(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=Ne(i,this.array)),this.data.array[t*this.data.stride+this.offset+e]=i,this}setX(t,e){return this.normalized&&(e=Ne(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=Ne(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=Ne(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=Ne(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Jn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Jn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Jn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Jn(e,this.array)),e}setXY(t,e,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=Ne(e,this.array),i=Ne(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this}setXYZ(t,e,i,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=Ne(e,this.array),i=Ne(i,this.array),s=Ne(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this}setXYZW(t,e,i,s,o){return t=t*this.data.stride+this.offset,this.normalized&&(e=Ne(e,this.array),i=Ne(i,this.array),s=Ne(s,this.array),o=Ne(o,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this.data.array[t+3]=o,this}clone(t){if(t===void 0){lo("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let o=0;o<this.itemSize;o++)e.push(this.data.array[s+o])}return new ze(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new n(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){lo("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let o=0;o<this.itemSize;o++)e.push(this.data.array[s+o])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},ah=new Z,M0=new Z,S0=new he,On=class{constructor(t=new Z(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,s){return this.normal.set(t,e,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){let s=ah.subVectors(i,e).cross(M0.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,i=!0){let s=t.delta(ah),o=this.normal.dot(s);if(o===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let c=-(t.start.dot(this.normal)+this.constant)/o;return i===!0&&(c<0||c>1)?null:e.copy(t.start).addScaledVector(s,c)}intersectsLine(t){let e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let i=e||S0.getNormalMatrix(t),s=this.coplanarPoint(ah).applyMatrix4(t),o=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(o),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},w0=0,pi=class extends Kn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:w0++}),this.uuid=Ai(),this.name="",this.type="Material",this.blending=dr,this.side=Qi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Rh,this.blendDst=Lh,this.blendEquation=_s,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ae(0,0,0),this.blendAlpha=0,this.depthFunc=js,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Od,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ga,this.stencilZFail=Ga,this.stencilZPass=Ga,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let i=t[e];if(i===void 0){ne(`Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){ne(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector2&&i&&i.isVector2||s&&s.isEuler&&i&&i.isEuler||s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(o=>o.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(o){let c=[];for(let a in o){let u=o[a];delete u.metadata,c.push(u)}return c}if(e){let o=s(t.textures),c=s(t.images);o.length>0&&(i.textures=o),c.length>0&&(i.images=c)}return i}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new ae().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(i=>new On().fromJSON(i))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let i=t.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new Jt().fromArray(i)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Jt().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,i=null;if(e!==null){let s=e.length;i=new Array(s);for(let o=0;o!==s;++o)i[o]=e[o].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},sr=class extends pi{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new ae(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Kr=new Z,Gs=new Z,Xs=new Z,Ws=new Jt,Qr=new Jt,$d=new De,_a=new Z,to=new Z,va=new Z,Hf=new Jt,lh=new Jt,Gf=new Jt,mo=class extends sn{constructor(t=new sr){if(super(),this.isSprite=!0,this.type="Sprite",Hs===void 0){Hs=new Ge;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new il(e,5);Hs.setIndex([0,1,2,0,2,3]),Hs.setAttribute("position",new po(i,3,0,!1)),Hs.setAttribute("uv",new po(i,2,3,!1))}this.geometry=Hs,this.material=t,this.center=new Jt(.5,.5),this.count=1}intersectsFrustum(t){return t.intersectsSprite(this)}raycast(t,e){t.camera===null&&se('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Gs.setFromMatrixScale(this.matrixWorld),$d.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Xs.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Gs.multiplyScalar(-Xs.z);let i=this.material.rotation,s,o;i!==0&&(o=Math.cos(i),s=Math.sin(i));let c=this.center;ba(_a.set(-.5,-.5,0),Xs,c,Gs,s,o),ba(to.set(.5,-.5,0),Xs,c,Gs,s,o),ba(va.set(.5,.5,0),Xs,c,Gs,s,o),Hf.set(0,0),lh.set(1,0),Gf.set(1,1);let a=t.ray.intersectTriangle(_a,to,va,!1,Kr);if(a===null&&(ba(to.set(-.5,.5,0),Xs,c,Gs,s,o),lh.set(0,1),a=t.ray.intersectTriangle(_a,va,to,!1,Kr),a===null))return;let u=t.ray.origin.distanceTo(Kr);u<t.near||u>t.far||e.push({distance:u,point:Kr.clone(),uv:ui.getInterpolation(Kr,_a,to,va,Hf,lh,Gf,new Jt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};Ti=new Z,ch=new Z,Ma=new Z,Sa=new Z,Xi=class{constructor(t=new Z,e=new Z(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Ti)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Ti.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Ti.copy(this.origin).addScaledVector(this.direction,e),Ti.distanceToSquared(t))}distanceSqToSegment(t,e,i,s){ch.copy(t).add(e).multiplyScalar(.5),Ma.copy(e).sub(t).normalize(),Sa.copy(this.origin).sub(ch);let o=t.distanceTo(e)*.5,c=-this.direction.dot(Ma),a=Sa.dot(this.direction),u=-Sa.dot(Ma),f=Sa.lengthSq(),p=Math.abs(1-c*c),x,m,_,v;if(p>0)if(x=c*u-a,m=c*a-u,v=o*p,x>=0)if(m>=-v)if(m<=v){let M=1/p;x*=M,m*=M,_=x*(x+c*m+2*a)+m*(c*x+m+2*u)+f}else m=o,x=Math.max(0,-(c*m+a)),_=-x*x+m*(m+2*u)+f;else m=-o,x=Math.max(0,-(c*m+a)),_=-x*x+m*(m+2*u)+f;else m<=-v?(x=Math.max(0,-(-c*o+a)),m=x>0?-o:Math.min(Math.max(-o,-u),o),_=-x*x+m*(m+2*u)+f):m<=v?(x=0,m=Math.min(Math.max(-o,-u),o),_=m*(m+2*u)+f):(x=Math.max(0,-(c*o+a)),m=x>0?o:Math.min(Math.max(-o,-u),o),_=-x*x+m*(m+2*u)+f);else m=c>0?-o:o,x=Math.max(0,-(c*m+a)),_=-x*x+m*(m+2*u)+f;return i&&i.copy(this.origin).addScaledVector(this.direction,x),s&&s.copy(ch).addScaledVector(Ma,m),_}intersectSphere(t,e){if(t.radius<0)return null;Ti.subVectors(t.center,this.origin);let i=Ti.dot(this.direction),s=Ti.dot(Ti)-i*i,o=t.radius*t.radius;if(s>o)return null;let c=Math.sqrt(o-s),a=i-c,u=i+c;return u<0?null:a<0?this.at(u,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){let i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,s,o,c,a,u,f=1/this.direction.x,p=1/this.direction.y,x=1/this.direction.z,m=this.origin;return f>=0?(i=(t.min.x-m.x)*f,s=(t.max.x-m.x)*f):(i=(t.max.x-m.x)*f,s=(t.min.x-m.x)*f),p>=0?(o=(t.min.y-m.y)*p,c=(t.max.y-m.y)*p):(o=(t.max.y-m.y)*p,c=(t.min.y-m.y)*p),i>c||o>s||((o>i||isNaN(i))&&(i=o),(c<s||isNaN(s))&&(s=c),x>=0?(a=(t.min.z-m.z)*x,u=(t.max.z-m.z)*x):(a=(t.max.z-m.z)*x,u=(t.min.z-m.z)*x),i>u||a>s)||((a>i||i!==i)&&(i=a),(u<s||s!==s)&&(s=u),s<0)?null:this.at(i>=0?i:s,e)}intersectsBox(t){return this.intersectBox(t,Ti)!==null}intersectTriangle(t,e,i,s,o){let c=this.origin,a=this.direction,u=a.x,f=a.y,p=a.z,x=t.x-c.x,m=t.y-c.y,_=t.z-c.z,v=e.x-c.x,M=e.y-c.y,g=e.z-c.z,y=i.x-c.x,E=i.y-c.y,P=i.z-c.z,S=Math.abs(u),L=Math.abs(f),T=Math.abs(p),C,w,N,F,B,H,V,z,W,$,k,J;if(S>=L&&S>=T?(N=u,H=x,W=v,J=y,u>=0?(C=f,w=p,F=m,B=_,V=M,z=g,$=E,k=P):(C=p,w=f,F=_,B=m,V=g,z=M,$=P,k=E)):L>=T?(N=f,H=m,W=M,J=E,f>=0?(C=p,w=u,F=_,B=x,V=g,z=v,$=P,k=y):(C=u,w=p,F=x,B=_,V=v,z=g,$=y,k=P)):(N=p,H=_,W=g,J=P,p>=0?(C=u,w=f,F=x,B=m,V=v,z=M,$=y,k=E):(C=f,w=u,F=m,B=x,V=M,z=v,$=E,k=y)),N===0)return null;let q=C/N,it=w/N,st=1/N,St=F-q*H,wt=B-it*H,$t=V-q*W,Kt=z-it*W,re=$-q*J,ct=k-it*J,pt=re*Kt-ct*$t,Bt=St*ct-wt*re,ie=$t*wt-Kt*St;if(s){if(pt<0||Bt<0||ie<0)return null}else if((pt<0||Bt<0||ie<0)&&(pt>0||Bt>0||ie>0))return null;let Ft=pt+Bt+ie;if(Ft===0)return null;let de=st*(pt*H+Bt*W+ie*J);return(Ft>0?de<0:de>0)?null:this.at(de/Ft,o)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Un=class extends pi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ae(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ci,this.combine=Nh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},Xf=new De,fs=new Xi,wa=new ms,Wf=new Z,Ea=new Z,Ta=new Z,Aa=new Z,hh=new Z,Pa=new Z,Yf=new Z,Ca=new Z,Ce=class extends sn{constructor(t=new Ge,e=new Un){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,c=s.length;o<c;o++){let a=s[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}getVertexPosition(t,e){let i=this.geometry,s=i.attributes.position,o=i.morphAttributes.position,c=i.morphTargetsRelative;e.fromBufferAttribute(s,t);let a=this.morphTargetInfluences;if(o&&a){Pa.set(0,0,0);for(let u=0,f=o.length;u<f;u++){let p=a[u],x=o[u];p!==0&&(hh.fromBufferAttribute(x,t),c?Pa.addScaledVector(hh,p):Pa.addScaledVector(hh.sub(e),p))}e.add(Pa)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let i=this.geometry,s=this.material,o=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),wa.copy(i.boundingSphere),wa.applyMatrix4(o),fs.copy(t.ray).recast(t.near),!(wa.containsPoint(fs.origin)===!1&&(fs.intersectSphere(wa,Wf)===null||fs.origin.distanceToSquared(Wf)>(t.far-t.near)**2))&&(Xf.copy(o).invert(),fs.copy(t.ray).applyMatrix4(Xf),!(i.boundingBox!==null&&fs.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,fs)))}_computeIntersections(t,e,i){let s,o=this.geometry,c=this.material,a=o.index,u=o.attributes.position,f=o.attributes.uv,p=o.attributes.uv1,x=o.attributes.normal,m=o.groups,_=o.drawRange;if(a!==null)if(Array.isArray(c))for(let v=0,M=m.length;v<M;v++){let g=m[v],y=c[g.materialIndex],E=Math.max(g.start,_.start),P=Math.min(a.count,Math.min(g.start+g.count,_.start+_.count));for(let S=E,L=P;S<L;S+=3){let T=a.getX(S),C=a.getX(S+1),w=a.getX(S+2);s=Ia(this,y,t,i,f,p,x,T,C,w),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{let v=Math.max(0,_.start),M=Math.min(a.count,_.start+_.count);for(let g=v,y=M;g<y;g+=3){let E=a.getX(g),P=a.getX(g+1),S=a.getX(g+2);s=Ia(this,c,t,i,f,p,x,E,P,S),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}else if(u!==void 0)if(Array.isArray(c))for(let v=0,M=m.length;v<M;v++){let g=m[v],y=c[g.materialIndex],E=Math.max(g.start,_.start),P=Math.min(u.count,Math.min(g.start+g.count,_.start+_.count));for(let S=E,L=P;S<L;S+=3){let T=S,C=S+1,w=S+2;s=Ia(this,y,t,i,f,p,x,T,C,w),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{let v=Math.max(0,_.start),M=Math.min(u.count,_.start+_.count);for(let g=v,y=M;g<y;g+=3){let E=g,P=g+1,S=g+2;s=Ia(this,c,t,i,f,p,x,E,P,S),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}}};sl=class extends En{constructor(t=null,e=1,i=1,s,o,c,a,u,f=hn,p=hn,x,m){super(null,c,a,u,f,p,s,o,x,m),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},ds=new ms,T0=new Jt(.5,.5),Ra=new Z,rr=class{constructor(t=new On,e=new On,i=new On,s=new On,o=new On,c=new On){this.planes=[t,e,i,s,o,c]}set(t,e,i,s,o,c){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(i),a[3].copy(s),a[4].copy(o),a[5].copy(c),this}copy(t){let e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=jn,i=!1){let s=this.planes,o=t.elements,c=o[0],a=o[1],u=o[2],f=o[3],p=o[4],x=o[5],m=o[6],_=o[7],v=o[8],M=o[9],g=o[10],y=o[11],E=o[12],P=o[13],S=o[14],L=o[15];if(s[0].setComponents(f-c,_-p,y-v,L-E).normalize(),s[1].setComponents(f+c,_+p,y+v,L+E).normalize(),s[2].setComponents(f+a,_+x,y+M,L+P).normalize(),s[3].setComponents(f-a,_-x,y-M,L-P).normalize(),i)s[4].setComponents(u,m,g,S).normalize(),s[5].setComponents(f-u,_-m,y-g,L-S).normalize();else if(s[4].setComponents(f-u,_-m,y-g,L-S).normalize(),e===jn)s[5].setComponents(f+u,_+m,y+g,L+S).normalize();else if(e===Ks)s[5].setComponents(u,m,g,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ds.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),ds.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ds)}intersectsSprite(t){ds.center.set(0,0,0);let e=T0.distanceTo(t.center);return ds.radius=.7071067811865476+e,ds.applyMatrix4(t.matrixWorld),this.intersectsSphere(ds)}intersectsSphere(t){let e=this.planes,i=t.center,s=-t.radius;for(let o=0;o<6;o++)if(e[o].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let i=0;i<6;i++){let s=e[i];if(Ra.x=s.normal.x>0?t.max.x:t.min.x,Ra.y=s.normal.y>0?t.max.y:t.min.y,Ra.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Ra)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},Qn=class extends pi{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ae(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},rl=new Z,ol=new Z,$f=new De,eo=new Xi,La=new ms,uh=new Z,qf=new Z,gs=class extends sn{constructor(t=new Ge,e=new Qn){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,i=[0];for(let s=1,o=e.count;s<o;s++)rl.fromBufferAttribute(e,s-1),ol.fromBufferAttribute(e,s),i[s]=i[s-1],i[s]+=rl.distanceTo(ol);t.setAttribute("lineDistance",new Ve(i,1))}else ne("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let i=this.geometry,s=this.matrixWorld,o=t.params.Line.threshold,c=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),La.copy(i.boundingSphere),La.applyMatrix4(s),La.radius+=o,t.ray.intersectsSphere(La)===!1)return;$f.copy(s).invert(),eo.copy(t.ray).applyMatrix4($f);let a=o/((this.scale.x+this.scale.y+this.scale.z)/3),u=a*a,f=this.isLineSegments?2:1,p=i.index,m=i.attributes.position;if(p!==null){let _=Math.max(0,c.start),v=Math.min(p.count,c.start+c.count);for(let M=_,g=v-1;M<g;M+=f){let y=p.getX(M),E=p.getX(M+1),P=Na(this,t,eo,u,y,E,M);P&&e.push(P)}if(this.isLineLoop){let M=p.getX(v-1),g=p.getX(_),y=Na(this,t,eo,u,M,g,v-1);y&&e.push(y)}}else{let _=Math.max(0,c.start),v=Math.min(m.count,c.start+c.count);for(let M=_,g=v-1;M<g;M+=f){let y=Na(this,t,eo,u,M,M+1,M);y&&e.push(y)}if(this.isLineLoop){let M=Na(this,t,eo,u,v-1,_,v-1);M&&e.push(M)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,c=s.length;o<c;o++){let a=s[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}};Zf=new Z,Jf=new Z,xs=class extends gs{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,i=[];for(let s=0,o=e.count;s<o;s+=2)Zf.fromBufferAttribute(e,s),Jf.fromBufferAttribute(e,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+Zf.distanceTo(Jf);t.setAttribute("lineDistance",new Ve(i,1))}else ne("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},go=class extends En{constructor(t=[],e=ts,i,s,o,c,a,u,f,p){super(t,e,i,s,o,c,a,u,f,p),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},xo=class extends En{constructor(t,e,i,s,o,c,a,u,f){super(t,e,i,s,o,c,a,u,f),this.isCanvasTexture=!0,this.needsUpdate=!0}},Wi=class extends En{constructor(t,e,i=ei,s,o,c,a=hn,u=hn,f,p=di,x=1){if(p!==di&&p!==ns)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let m={width:t,height:e,depth:x};super(m,s,o,c,a,u,p,i,f),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new er(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},al=class extends Wi{constructor(t,e=ei,i=ts,s,o,c=hn,a=hn,u,f=di){let p={width:t,height:t,depth:1},x=[p,p,p,p,p,p];super(t,t,e,i,s,o,c,a,u,f),this.image=x,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},yo=class extends En{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},Yi=class n extends Ge{constructor(t=1,e=1,i=1,s=1,o=1,c=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:s,heightSegments:o,depthSegments:c};let a=this;s=Math.floor(s),o=Math.floor(o),c=Math.floor(c);let u=[],f=[],p=[],x=[],m=0,_=0;v("z","y","x",-1,-1,i,e,t,c,o,0),v("z","y","x",1,-1,i,e,-t,c,o,1),v("x","z","y",1,1,t,i,e,s,c,2),v("x","z","y",1,-1,t,i,-e,s,c,3),v("x","y","z",1,-1,t,e,i,s,o,4),v("x","y","z",-1,-1,t,e,-i,s,o,5),this.setIndex(u),this.setAttribute("position",new Ve(f,3)),this.setAttribute("normal",new Ve(p,3)),this.setAttribute("uv",new Ve(x,2));function v(M,g,y,E,P,S,L,T,C,w,N){let F=S/C,B=L/w,H=S/2,V=L/2,z=T/2,W=C+1,$=w+1,k=0,J=0,q=new Z;for(let it=0;it<$;it++){let st=it*B-V;for(let St=0;St<W;St++){let wt=St*F-H;q[M]=wt*E,q[g]=st*P,q[y]=z,f.push(q.x,q.y,q.z),q[M]=0,q[g]=0,q[y]=T>0?1:-1,p.push(q.x,q.y,q.z),x.push(St/C),x.push(1-it/w),k+=1}}for(let it=0;it<w;it++)for(let st=0;st<C;st++){let St=m+st+W*it,wt=m+st+W*(it+1),$t=m+(st+1)+W*(it+1),Kt=m+(st+1)+W*it;u.push(St,wt,Kt),u.push(wt,$t,Kt),J+=6}a.addGroup(_,J,N),_+=J,m+=k}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}},mi=class n extends Ge{constructor(t=1,e=1,i=1,s=32,o=1,c=!1,a=0,u=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:s,heightSegments:o,openEnded:c,thetaStart:a,thetaLength:u};let f=this;s=Math.floor(s),o=Math.floor(o);let p=[],x=[],m=[],_=[],v=0,M=[],g=i/2,y=0;E(),c===!1&&(t>0&&P(!0),e>0&&P(!1)),this.setIndex(p),this.setAttribute("position",new Ve(x,3)),this.setAttribute("normal",new Ve(m,3)),this.setAttribute("uv",new Ve(_,2));function E(){let S=new Z,L=new Z,T=0,C=(e-t)/i;for(let w=0;w<=o;w++){let N=[],F=w/o,B=F*(e-t)+t;for(let H=0;H<=s;H++){let V=H/s,z=V*u+a,W=Math.sin(z),$=Math.cos(z);L.x=B*W,L.y=-F*i+g,L.z=B*$,x.push(L.x,L.y,L.z),S.set(W,C,$).normalize(),m.push(S.x,S.y,S.z),_.push(V,1-F),N.push(v++)}M.push(N)}for(let w=0;w<s;w++)for(let N=0;N<o;N++){let F=M[N][w],B=M[N+1][w],H=M[N+1][w+1],V=M[N][w+1];(t>0||N!==0)&&(p.push(F,B,V),T+=3),(e>0||N!==o-1)&&(p.push(B,H,V),T+=3)}f.addGroup(y,T,0),y+=T}function P(S){let L=v,T=new Jt,C=new Z,w=0,N=S===!0?t:e,F=S===!0?1:-1;for(let H=1;H<=s;H++)x.push(0,g*F,0),m.push(0,F,0),_.push(.5,.5),v++;let B=v;for(let H=0;H<=s;H++){let z=H/s*u+a,W=Math.cos(z),$=Math.sin(z);C.x=N*$,C.y=g*F,C.z=N*W,x.push(C.x,C.y,C.z),m.push(0,F,0),T.x=W*.5+.5,T.y=$*.5*F+.5,_.push(T.x,T.y),v++}for(let H=0;H<s;H++){let V=L+H,z=B+H;S===!0?p.push(z,z+1,V):p.push(z+1,z,V),w+=3}f.addGroup(y,w,S===!0?1:2),y+=w}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},or=class n extends mi{constructor(t=1,e=1,i=32,s=1,o=!1,c=0,a=Math.PI*2){super(0,t,e,i,s,o,c,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:i,heightSegments:s,openEnded:o,thetaStart:c,thetaLength:a}}static fromJSON(t){return new n(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Da=new Z,Oa=new Z,fh=new Z,Fa=new ui,ar=class extends Ge{constructor(t=null,e=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:t,thresholdAngle:e},t!==null){let s=Math.pow(10,4),o=Math.cos(Zs*e),c=t.getIndex(),a=t.getAttribute("position"),u=c?c.count:a.count,f=[0,0,0],p=["a","b","c"],x=new Array(3),m={},_=[];for(let v=0;v<u;v+=3){c?(f[0]=c.getX(v),f[1]=c.getX(v+1),f[2]=c.getX(v+2)):(f[0]=v,f[1]=v+1,f[2]=v+2);let{a:M,b:g,c:y}=Fa;if(M.fromBufferAttribute(a,f[0]),g.fromBufferAttribute(a,f[1]),y.fromBufferAttribute(a,f[2]),Fa.getNormal(fh),x[0]=`${Math.round(M.x*s)},${Math.round(M.y*s)},${Math.round(M.z*s)}`,x[1]=`${Math.round(g.x*s)},${Math.round(g.y*s)},${Math.round(g.z*s)}`,x[2]=`${Math.round(y.x*s)},${Math.round(y.y*s)},${Math.round(y.z*s)}`,!(x[0]===x[1]||x[1]===x[2]||x[2]===x[0]))for(let E=0;E<3;E++){let P=(E+1)%3,S=x[E],L=x[P],T=Fa[p[E]],C=Fa[p[P]],w=`${S}_${L}`,N=`${L}_${S}`;N in m&&m[N]?(fh.dot(m[N].normal)<=o&&(_.push(T.x,T.y,T.z),_.push(C.x,C.y,C.z)),m[N]=null):w in m||(m[w]={index0:f[E],index1:f[P],normal:fh.clone()})}}for(let v in m)if(m[v]){let{index0:M,index1:g}=m[v];Da.fromBufferAttribute(a,M),Oa.fromBufferAttribute(a,g),_.push(Da.x,Da.y,Da.z),_.push(Oa.x,Oa.y,Oa.z)}this.setAttribute("position",new Ve(_,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}};Mh=class{static triangulate(t,e,i=2){return A0(t,e,i)}},Mo=class n{static area(t){let e=t.length,i=0;for(let s=e-1,o=0;o<e;s=o++)i+=t[s].x*t[o].y-t[o].x*t[s].y;return i*.5}static isClockWise(t){return n.area(t)<0}static triangulateShape(t,e){let i=[],s=[],o=[];Kf(t),Qf(i,t);let c=t.length;e.forEach(Kf);for(let u=0;u<e.length;u++)s.push(c),c+=e[u].length,Qf(i,e[u]);let a=Mh.triangulate(i,s);for(let u=0;u<a.length;u+=3)o.push(a.slice(u,u+3));return o}};So=class n extends Ge{constructor(t=1,e=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:s};let o=t/2,c=e/2,a=Math.floor(i),u=Math.floor(s),f=a+1,p=u+1,x=t/a,m=e/u,_=[],v=[],M=[],g=[];for(let y=0;y<p;y++){let E=y*m-c;for(let P=0;P<f;P++){let S=P*x-o;v.push(S,-E,0),M.push(0,0,1),g.push(P/a),g.push(1-y/u)}}for(let y=0;y<u;y++)for(let E=0;E<a;E++){let P=E+f*y,S=E+f*(y+1),L=E+1+f*(y+1),T=E+1+f*y;_.push(P,S,T),_.push(S,L,T)}this.setIndex(_),this.setAttribute("position",new Ve(v,3)),this.setAttribute("normal",new Ve(M,3)),this.setAttribute("uv",new Ve(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.widthSegments,t.heightSegments)}},wo=class n extends Ge{constructor(t=.5,e=1,i=32,s=1,o=0,c=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:i,phiSegments:s,thetaStart:o,thetaLength:c},i=Math.max(3,i),s=Math.max(1,s);let a=[],u=[],f=[],p=[],x=t,m=(e-t)/s,_=new Z,v=new Jt;for(let M=0;M<=s;M++){for(let g=0;g<=i;g++){let y=o+g/i*c;_.x=x*Math.cos(y),_.y=x*Math.sin(y),u.push(_.x,_.y,_.z),f.push(0,0,1),v.x=(_.x/e+1)/2,v.y=(_.y/e+1)/2,p.push(v.x,v.y)}x+=m}for(let M=0;M<s;M++){let g=M*(i+1);for(let y=0;y<i;y++){let E=y+g,P=E,S=E+i+1,L=E+i+2,T=E+1;a.push(P,S,T),a.push(S,L,T)}}this.setIndex(a),this.setAttribute("position",new Ve(u,3)),this.setAttribute("normal",new Ve(f,3)),this.setAttribute("uv",new Ve(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}},$i=class n extends Ge{constructor(t=1,e=32,i=16,s=0,o=Math.PI*2,c=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:s,phiLength:o,thetaStart:c,thetaLength:a},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));let u=Math.min(c+a,Math.PI),f=0,p=[],x=new Z,m=new Z,_=[],v=[],M=[],g=[];for(let y=0;y<=i;y++){let E=[],P=y/i,S=c+P*a,L=t*Math.cos(S),T=Math.sqrt(t*t-L*L),C=0;y===0&&c===0?C=.5/e:y===i&&u===Math.PI&&(C=-.5/e);for(let w=0;w<=e;w++){let N=w/e,F=s+N*o;x.x=-T*Math.cos(F),x.y=L,x.z=T*Math.sin(F),v.push(x.x,x.y,x.z),m.copy(x).normalize(),M.push(m.x,m.y,m.z),g.push(N+C,1-P),E.push(f++)}p.push(E)}for(let y=0;y<i;y++)for(let E=0;E<e;E++){let P=p[y][E+1],S=p[y][E],L=p[y+1][E],T=p[y+1][E+1];(y!==0||c>0)&&_.push(P,S,T),(y!==i-1||u<Math.PI)&&_.push(S,L,T)}this.setIndex(_),this.setAttribute("position",new Ve(v,3)),this.setAttribute("normal",new Ve(M,3)),this.setAttribute("uv",new Ve(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};Kd={clone:Ms,merge:vn},W0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Y0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Bn=class extends pi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=W0,this.fragmentShader=Y0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ms(t.uniforms),this.uniformsGroups=X0(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let c=this.uniforms[s].value;c&&c.isTexture?e.uniforms[s]={type:"t",value:c.toJSON(t).uuid}:c&&c.isColor?e.uniforms[s]={type:"c",value:c.getHex()}:c&&c.isVector2?e.uniforms[s]={type:"v2",value:c.toArray()}:c&&c.isVector3?e.uniforms[s]={type:"v3",value:c.toArray()}:c&&c.isVector4?e.uniforms[s]={type:"v4",value:c.toArray()}:c&&c.isMatrix3?e.uniforms[s]={type:"m3",value:c.toArray()}:c&&c.isMatrix4?e.uniforms[s]={type:"m4",value:c.toArray()}:e.uniforms[s]={value:c}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let i in t.uniforms){let s=t.uniforms[i];switch(this.uniforms[i]={},s.type){case"t":this.uniforms[i].value=e[s.value]||null;break;case"c":this.uniforms[i].value=new ae().setHex(s.value);break;case"v2":this.uniforms[i].value=new Jt().fromArray(s.value);break;case"v3":this.uniforms[i].value=new Z().fromArray(s.value);break;case"v4":this.uniforms[i].value=new Ye().fromArray(s.value);break;case"m3":this.uniforms[i].value=new he().fromArray(s.value);break;case"m4":this.uniforms[i].value=new De().fromArray(s.value);break;default:this.uniforms[i].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let i in t.extensions)this.extensions[i]=t.extensions[i];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},ll=class extends Bn{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},kn=class extends pi{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ae(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ae(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=cc,this.normalScale=new Jt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ci,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},cl=class extends pi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Nd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},hl=class extends pi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},Eo=class extends Qn{constructor(t){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(t)}copy(t){return super.copy(t),this.scale=t.scale,this.dashSize=t.dashSize,this.gapSize=t.gapSize,this}};qi=class{constructor(t,e,i,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(i),this.sampleValues=e,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,i=this._cachedIndex,s=e[i],o=e[i-1];n:{t:{let c;e:{i:if(!(t<s)){for(let a=i+2;;){if(s===void 0){if(t<o)break i;return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(o=s,s=e[++i],t<s)break t}c=e.length;break e}if(!(t>=o)){let a=e[1];t<a&&(i=2,o=a);for(let u=i-2;;){if(o===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===u)break;if(s=o,o=e[--i-1],t>=o)break t}c=i,i=0;break e}break n}for(;i<c;){let a=i+c>>>1;t<e[a]?c=a:i=a+1}if(s=e[i],o=e[i-1],o===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,o,s)}return this.interpolate_(i,o,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,i=this.sampleValues,s=this.valueSize,o=t*s;for(let c=0;c!==s;++c)e[c]=i[o+c];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},ul=class extends qi{constructor(t,e,i,s){super(t,e,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:xh,endingEnd:xh}}intervalChanged_(t,e,i){let s=this.parameterPositions,o=t-2,c=t+1,a=s[o],u=s[c];if(a===void 0)switch(this.getSettings_().endingStart){case yh:o=t,a=2*e-i;break;case _h:o=s.length-2,a=e+s[o]-s[o+1];break;default:o=t,a=i}if(u===void 0)switch(this.getSettings_().endingEnd){case yh:c=t,u=2*i-e;break;case _h:c=1,u=i+s[1]-s[0];break;default:c=t-1,u=e}let f=(i-e)*.5,p=this.valueSize;this._weightPrev=f/(e-a),this._weightNext=f/(u-i),this._offsetPrev=o*p,this._offsetNext=c*p}interpolate_(t,e,i,s){let o=this.resultBuffer,c=this.sampleValues,a=this.valueSize,u=t*a,f=u-a,p=this._offsetPrev,x=this._offsetNext,m=this._weightPrev,_=this._weightNext,v=(i-e)/(s-e),M=v*v,g=M*v,y=-m*g+2*m*M-m*v,E=(1+m)*g+(-1.5-2*m)*M+(-.5+m)*v+1,P=(-1-_)*g+(1.5+_)*M+.5*v,S=_*g-_*M;for(let L=0;L!==a;++L)o[L]=y*c[p+L]+E*c[f+L]+P*c[u+L]+S*c[x+L];return o}},fl=class extends qi{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){let o=this.resultBuffer,c=this.sampleValues,a=this.valueSize,u=t*a,f=u-a,p=(i-e)/(s-e),x=1-p;for(let m=0;m!==a;++m)o[m]=c[f+m]*x+c[u+m]*p;return o}},dl=class extends qi{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t){return this.copySampleValue_(t-1)}},pl=class extends qi{interpolate_(t,e,i,s){let o=this.resultBuffer,c=this.sampleValues,a=this.valueSize,u=t*a,f=u-a,p=this.inTangents,x=this.outTangents;if(!p||!x){let v=(i-e)/(s-e),M=1-v;for(let g=0;g!==a;++g)o[g]=c[f+g]*M+c[u+g]*v;return o}let m=a*2,_=t-1;for(let v=0;v!==a;++v){let M=c[f+v],g=c[u+v],y=_*m+v*2,E=x[y],P=x[y+1],S=t*m+v*2,L=p[S],T=p[S+1],C=q0(i,e,E,L,s);o[v]=Qd(C,M,P,T,g)}return o}};zn=class{constructor(t,e,i,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Ys(e,this.TimeBufferType),this.values=Ys(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,i;if(e.toJSON!==this.toJSON)i=e.toJSON(t);else{i={name:t.name,times:Ys(t.times,Array),values:Ys(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(i.interpolation=s),dh(t.settings)&&(i.settings={inTangents:Ys(t.settings.inTangents,Array),outTangents:Ys(t.settings.outTangents,Array)})}return i.type=t.ValueTypeName,i}InterpolantFactoryMethodDiscrete(t){return new dl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new fl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new ul(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new pl(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case so:e=this.InterpolantFactoryMethodDiscrete;break;case Qa:e=this.InterpolantFactoryMethodLinear;break;case Ha:e=this.InterpolantFactoryMethodSmooth;break;case gh:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return ne("KeyframeTrack:",i),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return so;case this.InterpolantFactoryMethodLinear:return Qa;case this.InterpolantFactoryMethodSmooth:return Ha;case this.InterpolantFactoryMethodBezier:return gh}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]*=t;dh(this.settings)&&(ed(this.settings.inTangents,t),ed(this.settings.outTangents,t))}return this}trim(t,e){let i=this.times,s=i.length,o=0,c=s-1;for(;o!==s&&i[o]<t;)++o;for(;c!==-1&&i[c]>e;)--c;if(++c,o!==0||c!==s){o>=c&&(c=Math.max(c,1),o=c-1);let a=this.getValueSize();this.times=i.slice(o,c),this.values=this.values.slice(o*a,c*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(se("KeyframeTrack: Invalid value size in track.",this),t=!1);let i=this.times,s=this.values,o=i.length;o===0&&(se("KeyframeTrack: Track is empty.",this),t=!1);let c=null;for(let a=0;a!==o;a++){let u=i[a];if(typeof u=="number"&&isNaN(u)){se("KeyframeTrack: Time is not a valid number.",this,a,u),t=!1;break}if(c!==null&&c>u){se("KeyframeTrack: Out of order keys.",this,a,u,c),t=!1;break}c=u}if(s!==void 0&&Ym(s))for(let a=0,u=s.length;a!==u;++a){let f=s[a];if(isNaN(f)){se("KeyframeTrack: Value is not a valid number.",this,a,f),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===Ha,o=t.length-1,c=1;for(let a=1;a<o;++a){let u=!1,f=t[a],p=t[a+1];if(f!==p&&(a!==1||f!==t[0]))if(s)u=!0;else{let x=a*i,m=x-i,_=x+i;for(let v=0;v!==i;++v){let M=e[x+v];if(M!==e[m+v]||M!==e[_+v]){u=!0;break}}}if(u){if(a!==c){t[c]=t[a];let x=a*i,m=c*i;for(let _=0;_!==i;++_)e[m+_]=e[x+_]}++c}}if(o>0){t[c]=t[o];for(let a=o*i,u=c*i,f=0;f!==i;++f)e[u+f]=e[a+f];++c}return c!==t.length?(this.times=t.slice(0,c),this.values=e.slice(0,c*i)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),i=this.constructor,s=new i(this.name,t,e);return s.createInterpolant=this.createInterpolant,dh(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};zn.prototype.ValueTypeName="";zn.prototype.TimeBufferType=Float32Array;zn.prototype.ValueBufferType=Float32Array;zn.prototype.DefaultInterpolation=Qa;Zi=class extends zn{constructor(t,e,i){super(t,e,i)}};Zi.prototype.ValueTypeName="bool";Zi.prototype.ValueBufferType=Array;Zi.prototype.DefaultInterpolation=so;Zi.prototype.InterpolantFactoryMethodLinear=void 0;Zi.prototype.InterpolantFactoryMethodSmooth=void 0;ml=class extends zn{constructor(t,e,i,s){super(t,e,i,s)}};ml.prototype.ValueTypeName="color";gl=class extends zn{constructor(t,e,i,s){super(t,e,i,s)}};gl.prototype.ValueTypeName="number";xl=class extends qi{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){let o=this.resultBuffer,c=this.sampleValues,a=this.valueSize,u=(i-e)/(s-e),f=t*a;for(let p=f+a;f!==p;f+=4)Fn.slerpFlat(o,0,c,f-a,c,f,u);return o}},To=class extends zn{constructor(t,e,i,s){super(t,e,i,s)}InterpolantFactoryMethodLinear(t){return new xl(this.times,this.values,this.getValueSize(),t)}};To.prototype.ValueTypeName="quaternion";To.prototype.InterpolantFactoryMethodSmooth=void 0;Ji=class extends zn{constructor(t,e,i){super(t,e,i)}};Ji.prototype.ValueTypeName="string";Ji.prototype.ValueBufferType=Array;Ji.prototype.DefaultInterpolation=so;Ji.prototype.InterpolantFactoryMethodLinear=void 0;Ji.prototype.InterpolantFactoryMethodSmooth=void 0;yl=class extends zn{constructor(t,e,i,s){super(t,e,i,s)}};yl.prototype.ValueTypeName="vector";_l=class{constructor(t,e,i){let s=this,o=!1,c=0,a=0,u,f=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this._abortController=null,this.itemStart=function(p){a++,o===!1&&s.onStart!==void 0&&s.onStart(p,c,a),o=!0},this.itemEnd=function(p){c++,s.onProgress!==void 0&&s.onProgress(p,c,a),c===a&&(o=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(p){s.onError!==void 0&&s.onError(p)},this.resolveURL=function(p){return p=p.normalize("NFC"),u?u(p):p},this.setURLModifier=function(p){return u=p,this},this.addHandler=function(p,x){return f.push(p,x),this},this.removeHandler=function(p){let x=f.indexOf(p);return x!==-1&&f.splice(x,2),this},this.getHandler=function(p){for(let x=0,m=f.length;x<m;x+=2){let _=f[x],v=f[x+1];if(_.global&&(_.lastIndex=0),_.test(p))return v}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},tp=new _l,vl=class{constructor(t){this.manager=t!==void 0?t:tp,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let i=this;return new Promise(function(s,o){i.load(t,s,e,o)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};vl.DEFAULT_MATERIAL_NAME="__DEFAULT";Ao=class extends sn{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new ae(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},Po=class extends Ao{constructor(t,e,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(sn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ae(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},ph=new De,nd=new Z,id=new Z,bl=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Jt(512,512),this.mapType=Rn,this.map=null,this.mapPass=null,this.matrix=new De,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new rr,this._frameExtents=new Jt(1,1),this._viewportCount=1,this._viewports=[new Ye(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;nd.setFromMatrixPosition(t.matrixWorld),e.position.copy(nd),id.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(id),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,i,s){ph.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),i.setFromProjectionMatrix(ph,t.coordinateSystem,t.reversedDepth);let o=this._frameExtents,c=s?s.z/o.x:1,a=s?s.w/o.y:1,u=s?s.x/o.x:0,f=s?s.y/o.y:0;t.coordinateSystem===Ks||t.reversedDepth?e.set(.5*c,0,0,.5*c+u,0,.5*a,0,.5*a+f,0,0,1,0,0,0,0,1):e.set(.5*c,0,0,.5*c+u,0,.5*a,0,.5*a+f,0,0,.5,.5,0,0,0,1),e.multiply(ph)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},ka=new Z,za=new Fn,hi=new Z,Co=class extends sn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new De,this.projectionMatrix=new De,this.projectionMatrixInverse=new De,this.coordinateSystem=jn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(ka,za,hi),hi.x===1&&hi.y===1&&hi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ka,za,hi.set(1,1,1)).invert()}updateWorldMatrix(t,e,i=!1){super.updateWorldMatrix(t,e,i),this.matrixWorld.decompose(ka,za,hi),hi.x===1&&hi.y===1&&hi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ka,za,hi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Hi=new Z,sd=new Jt,rd=new Jt,yn=class extends Co{constructor(t=50,e=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=tr*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Zs*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return tr*2*Math.atan(Math.tan(Zs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){Hi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Hi.x,Hi.y).multiplyScalar(-t/Hi.z),Hi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Hi.x,Hi.y).multiplyScalar(-t/Hi.z)}getViewSize(t,e){return this.getViewBounds(t,sd,rd),e.subVectors(rd,sd)}setViewOffset(t,e,i,s,o,c){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=o,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Zs*.5*this.fov)/this.zoom,i=2*e,s=this.aspect*i,o=-.5*s,c=this.view;if(this.view!==null&&this.view.enabled){let u=c.fullWidth,f=c.fullHeight;o+=c.offsetX*s/u,e-=c.offsetY*i/f,s*=c.width/u,i*=c.height/f}let a=this.filmOffset;a!==0&&(o+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+s,e,e-i,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},cr=class extends Co{constructor(t=-1,e=1,i=1,s=-1,o=.1,c=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=s,this.near=o,this.far=c,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,s,o,c){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=o,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,o=i-t,c=i+t,a=s+e,u=s-e;if(this.view!==null&&this.view.enabled){let f=(this.right-this.left)/this.view.fullWidth/this.zoom,p=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=f*this.view.offsetX,c=o+f*this.view.width,a-=p*this.view.offsetY,u=a-p*this.view.height}this.projectionMatrix.makeOrthographic(o,c,a,u,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Sh=class extends bl{constructor(){super(new cr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},hr=class extends Ao{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(sn.DEFAULT_UP),this.updateMatrix(),this.target=new sn,this.shadow=new Sh}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}},$s=-90,qs=1,Ml=class extends sn{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new yn($s,qs,t,e);s.layers=this.layers,this.add(s);let o=new yn($s,qs,t,e);o.layers=this.layers,this.add(o);let c=new yn($s,qs,t,e);c.layers=this.layers,this.add(c);let a=new yn($s,qs,t,e);a.layers=this.layers,this.add(a);let u=new yn($s,qs,t,e);u.layers=this.layers,this.add(u);let f=new yn($s,qs,t,e);f.layers=this.layers,this.add(f)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[i,s,o,c,a,u]=e;for(let f of e)this.remove(f);if(t===jn)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),o.up.set(0,0,-1),o.lookAt(0,1,0),c.up.set(0,0,1),c.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),u.up.set(0,1,0),u.lookAt(0,0,-1);else if(t===Ks)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),o.up.set(0,0,1),o.lookAt(0,1,0),c.up.set(0,0,-1),c.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),u.up.set(0,-1,0),u.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let f of e)this.add(f),f.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[o,c,a,u,f,p]=this.children,x=t.getRenderTarget(),m=t.getActiveCubeFace(),_=t.getActiveMipmapLevel(),v=t.xr.enabled;t.xr.enabled=!1;let M=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let g=!1;t.isWebGLRenderer===!0?g=t.state.buffers.depth.getReversed():g=t.reversedDepthBuffer,t.setRenderTarget(i,0,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(i,1,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),t.setRenderTarget(i,2,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(i,3,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,u),t.setRenderTarget(i,4,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,f),i.texture.generateMipmaps=M,t.setRenderTarget(i,5,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,p),t.setRenderTarget(x,m,_),t.xr.enabled=v,i.texture.needsPMREMUpdate=!0}},Sl=class extends yn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}},tu="\\[\\]\\.:\\/",Z0=new RegExp("["+tu+"]","g"),eu="[^"+tu+"]",J0="[^"+tu.replace("\\.","")+"]",j0=/((?:WC+[\/:])*)/.source.replace("WC",eu),K0=/(WCOD+)?/.source.replace("WCOD",J0),Q0=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",eu),tg=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",eu),eg=new RegExp("^"+j0+K0+Q0+tg+"$"),ng=["material","materials","bones","map"],wh=class{constructor(t,e,i){let s=i||He.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(t,e)}setValue(t,e){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,o=i.length;s!==o;++s)i[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].unbind()}},He=class n{constructor(t,e,i){this.path=e,this.parsedPath=i||n.parseTrackName(e),this.node=n.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,i){return t&&t.isAnimationObjectGroup?new n.Composite(t,e,i):new n(t,e,i)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Z0,"")}static parseTrackName(t){let e=eg.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let i={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let o=i.nodeName.substring(s+1);ng.indexOf(o)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=o)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return i}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let i=t.skeleton.getBoneByName(e);if(i!==void 0)return i}if(t.children){let i=function(o){for(let c=0;c<o.length;c++){let a=o[c];if(a.name===e||a.uuid===e)return a;let u=i(a.children);if(u)return u}return null},s=i(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let i=this.resolvedProperty;for(let s=0,o=i.length;s!==o;++s)t[e++]=i[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let i=this.resolvedProperty;for(let s=0,o=i.length;s!==o;++s)i[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let i=this.resolvedProperty;for(let s=0,o=i.length;s!==o;++s)i[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let i=this.resolvedProperty;for(let s=0,o=i.length;s!==o;++s)i[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,i=e.objectName,s=e.propertyName,o=e.propertyIndex;if(t||(t=n.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){ne("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let f=e.objectIndex;switch(i){case"materials":if(!t.material){se("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){se("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){se("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let p=0;p<t.length;p++)if(t[p].name===f){f=p;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){se("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){se("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[i]===void 0){se("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[i]}if(f!==void 0){if(t[f]===void 0){se("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[f]}}let c=t[s];if(c===void 0){let f=e.nodeName;se("PropertyBinding: Trying to update property for track: "+f+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?a=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let u=this.BindingType.Direct;if(o!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){se("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){se("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[o]!==void 0&&(o=t.morphTargetDictionary[o])}u=this.BindingType.ArrayElement,this.resolvedProperty=c,this.propertyIndex=o}else c.fromArray!==void 0&&c.toArray!==void 0?(u=this.BindingType.HasFromToArray,this.resolvedProperty=c):Array.isArray(c)?(u=this.BindingType.EntireArray,this.resolvedProperty=c):this.propertyName=s;this.getValue=this.GetterByBindingType[u],this.setValue=this.SetterByBindingTypeAndVersioning[u][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};He.Composite=wh;He.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};He.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};He.prototype.GetterByBindingType=[He.prototype._getValue_direct,He.prototype._getValue_array,He.prototype._getValue_arrayElement,He.prototype._getValue_toArray];He.prototype.SetterByBindingTypeAndVersioning=[[He.prototype._setValue_direct,He.prototype._setValue_direct_setNeedsUpdate,He.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[He.prototype._setValue_array,He.prototype._setValue_array_setNeedsUpdate,He.prototype._setValue_array_setMatrixWorldNeedsUpdate],[He.prototype._setValue_arrayElement,He.prototype._setValue_arrayElement_setNeedsUpdate,He.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[He.prototype._setValue_fromArray,He.prototype._setValue_fromArray_setNeedsUpdate,He.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];jM=new Float32Array(1),od=new De,Io=class{constructor(t,e,i=0,s=1/0){this.ray=new Xi(t,e),this.near=i,this.far=s,this.camera=null,this.layers=new nr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,e.projectionMatrix.elements[14]).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):se("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return od.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(od),this}intersectObject(t,e=!0,i=[]){return Eh(t,this,i,e),i.sort(ad),i}intersectObjects(t,e=!0,i=[]){for(let s=0,o=t.length;s<o;s++)Eh(t[s],this,i,e);return i.sort(ad),i}};ur=class{constructor(t=1,e=0,i=0){this.radius=t,this.phi=e,this.theta=i}set(t,e,i){return this.radius=t,this.phi=e,this.theta=i,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=ve(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,i){return this.radius=Math.sqrt(t*t+e*e+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,i),this.phi=Math.acos(ve(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}},Th=class n{static{n.prototype.isMatrix2=!0}constructor(t,e,i,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,i,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let i=0;i<4;i++)this.elements[i]=t[i+e];return this}set(t,e,i,s){let o=this.elements;return o[0]=t,o[2]=e,o[1]=i,o[3]=s,this}},ld=new Z,Ro=class extends sn{constructor(t=new Z(0,0,1),e=new Z(0,0,0),i=1,s=16776960,o=i*.2,c=o*.2){super(),this.type="ArrowHelper",Va===void 0&&(Va=new Ge,Va.setAttribute("position",new Ve([0,0,0,0,1,0],3)),mh=new or(.5,1,5,1),mh.translate(0,-.5,0)),this.position.copy(e),this.line=new gs(Va,new Qn({color:s,toneMapped:!1})),this.line.matrixAutoUpdate=!1,this.add(this.line),this.cone=new Ce(mh,new Un({color:s,toneMapped:!1})),this.cone.matrixAutoUpdate=!1,this.add(this.cone),this.setDirection(t),this.setLength(i,o,c)}setDirection(t){if(t.y>.99999)this.quaternion.set(0,0,0,1);else if(t.y<-.99999)this.quaternion.set(1,0,0,0);else{ld.set(t.z,0,-t.x).normalize();let e=Math.acos(t.y);this.quaternion.setFromAxisAngle(ld,e)}}setLength(t,e=t*.2,i=e*.2){this.line.scale.set(1,Math.max(1e-4,t-e),1),this.line.updateMatrix(),this.cone.scale.set(i,e,i),this.cone.position.y=t,this.cone.updateMatrix()}setColor(t){this.line.material.color.set(t),this.cone.material.color.set(t)}copy(t){return super.copy(t,!1),this.line.copy(t.line),this.cone.copy(t.cone),this}dispose(){super.dispose(),this.line.geometry.dispose(),this.line.material.dispose(),this.cone.geometry.dispose(),this.cone.material.dispose()}},Lo=class extends Kn{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}};typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?ne("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186")});function Mp(){let n=null,t=!1,e=null,i=null;function s(o,c){i=n.requestAnimationFrame(s),e(o,c)}return{start:function(){t!==!0&&e!==null&&n!==null&&(i=n.requestAnimationFrame(s),t=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(o){e=o},setContext:function(o){n=o}}}function rg(n){let t=new WeakMap;function e(a,u){let f=a.array,p=a.usage,x=f.byteLength,m=n.createBuffer();n.bindBuffer(u,m),n.bufferData(u,f,p),a.onUploadCallback();let _;if(f instanceof Float32Array)_=n.FLOAT;else if(typeof Float16Array<"u"&&f instanceof Float16Array)_=n.HALF_FLOAT;else if(f instanceof Uint16Array)a.isFloat16BufferAttribute?_=n.HALF_FLOAT:_=n.UNSIGNED_SHORT;else if(f instanceof Int16Array)_=n.SHORT;else if(f instanceof Uint32Array)_=n.UNSIGNED_INT;else if(f instanceof Int32Array)_=n.INT;else if(f instanceof Int8Array)_=n.BYTE;else if(f instanceof Uint8Array)_=n.UNSIGNED_BYTE;else if(f instanceof Uint8ClampedArray)_=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:m,type:_,bytesPerElement:f.BYTES_PER_ELEMENT,version:a.version,size:x}}function i(a,u,f){let p=u.array,x=u.updateRanges;if(n.bindBuffer(f,a),x.length===0)n.bufferSubData(f,0,p);else{x.sort((_,v)=>_.start-v.start);let m=0;for(let _=1;_<x.length;_++){let v=x[m],M=x[_];M.start<=v.start+v.count+1?v.count=Math.max(v.count,M.start+M.count-v.start):(++m,x[m]=M)}x.length=m+1;for(let _=0,v=x.length;_<v;_++){let M=x[_];n.bufferSubData(f,M.start*p.BYTES_PER_ELEMENT,p,M.start,M.count)}u.clearUpdateRanges()}u.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function o(a){a.isInterleavedBufferAttribute&&(a=a.data);let u=t.get(a);u&&(n.deleteBuffer(u.buffer),t.delete(a))}function c(a,u){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let p=t.get(a);(!p||p.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let f=t.get(a);if(f===void 0)t.set(a,e(a,u));else if(f.version<a.version){if(f.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(f.buffer,a,u),f.version=a.version}}return{get:s,remove:o,update:c}}function Vy(n,t,e,i,s,o){let c=new ae(0),a=s===!0?0:1,u,f,p=null,x=0,m=null;function _(E){let P=E.isScene===!0?E.background:null;if(P&&P.isTexture){let S=E.backgroundBlurriness>0;P=t.get(P,S)}return P}function v(E){let P=!1,S=_(E);S===null?g(c,a):S&&S.isColor&&(g(S,1),P=!0);let L=n.xr.getEnvironmentBlendMode();L==="additive"?e.buffers.color.setClear(0,0,0,1,o):L==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,o),(n.autoClear||P)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function M(E,P){let S=_(P);S&&(S.isCubeTexture||S.mapping===Do)?(f===void 0&&(f=new Ce(new Yi(1,1,1),new Bn({name:"BackgroundCubeMaterial",uniforms:Ms(yi.backgroundCube.uniforms),vertexShader:yi.backgroundCube.vertexShader,fragmentShader:yi.backgroundCube.fragmentShader,side:Tn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),f.geometry.deleteAttribute("normal"),f.geometry.deleteAttribute("uv"),f.onBeforeRender=function(L,T,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(f.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(f)),f.material.uniforms.envMap.value=S,f.material.uniforms.backgroundBlurriness.value=P.backgroundBlurriness,f.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,f.material.uniforms.backgroundRotation.value.setFromMatrix4(zy.makeRotationFromEuler(P.backgroundRotation)).transpose(),S.isCubeTexture&&S.isRenderTargetTexture===!1&&f.material.uniforms.backgroundRotation.value.premultiply(Sp),f.material.toneMapped=Me.getTransfer(S.colorSpace)!==Le,(p!==S||x!==S.version||m!==n.toneMapping)&&(f.material.needsUpdate=!0,p=S,x=S.version,m=n.toneMapping),f.layers.enableAll(),E.unshift(f,f.geometry,f.material,0,0,null)):S&&S.isTexture&&(u===void 0&&(u=new Ce(new So(2,2),new Bn({name:"BackgroundMaterial",uniforms:Ms(yi.background.uniforms),vertexShader:yi.background.vertexShader,fragmentShader:yi.background.fragmentShader,side:Qi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(u)),u.material.uniforms.t2D.value=S,u.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,u.material.toneMapped=Me.getTransfer(S.colorSpace)!==Le,S.matrixAutoUpdate===!0&&S.updateMatrix(),u.material.uniforms.uvTransform.value.copy(S.matrix),(p!==S||x!==S.version||m!==n.toneMapping)&&(u.material.needsUpdate=!0,p=S,x=S.version,m=n.toneMapping),u.layers.enableAll(),E.unshift(u,u.geometry,u.material,0,0,null))}function g(E,P){E.getRGB(fc,Qh(n)),e.buffers.color.setClear(fc.r,fc.g,fc.b,P,o)}function y(){f!==void 0&&(f.geometry.dispose(),f.material.dispose(),f=void 0),u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0)}return{getClearColor:function(){return c},setClearColor:function(E,P=1){c.set(E),a=P,g(c,a)},getClearAlpha:function(){return a},setClearAlpha:function(E){a=E,g(c,a)},render:v,addToRenderList:M,dispose:y}}function Hy(n,t){let e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=m(null),o=s,c=!1;function a(B,H,V,z,W){let $=!1,k=x(B,z,V,H);o!==k&&(o=k,f(o.object)),$=_(B,z,V,W),$&&v(B,z,V,W),W!==null&&t.update(W,n.ELEMENT_ARRAY_BUFFER),($||c)&&(c=!1,S(B,H,V,z),W!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(W).buffer))}function u(){return n.createVertexArray()}function f(B){return n.bindVertexArray(B)}function p(B){return n.deleteVertexArray(B)}function x(B,H,V,z){let W=z.wireframe===!0,$=i[H.id];$===void 0&&($={},i[H.id]=$);let k=B.isInstancedMesh===!0?B.id:0,J=$[k];J===void 0&&(J={},$[k]=J);let q=J[V.id];q===void 0&&(q={},J[V.id]=q);let it=q[W];return it===void 0&&(it=m(u()),q[W]=it),it}function m(B){let H=[],V=[],z=[];for(let W=0;W<e;W++)H[W]=0,V[W]=0,z[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:H,enabledAttributes:V,attributeDivisors:z,object:B,attributes:{},index:null}}function _(B,H,V,z){let W=o.attributes,$=H.attributes,k=0,J=V.getAttributes();for(let q in J)if(J[q].location>=0){let st=W[q],St=$[q];if(St===void 0&&(q==="instanceMatrix"&&B.instanceMatrix&&(St=B.instanceMatrix),q==="instanceColor"&&B.instanceColor&&(St=B.instanceColor)),st===void 0||st.attribute!==St||St&&st.data!==St.data)return!0;k++}return o.attributesNum!==k||o.index!==z}function v(B,H,V,z){let W={},$=H.attributes,k=0,J=V.getAttributes();for(let q in J)if(J[q].location>=0){let st=$[q];st===void 0&&(q==="instanceMatrix"&&B.instanceMatrix&&(st=B.instanceMatrix),q==="instanceColor"&&B.instanceColor&&(st=B.instanceColor));let St={};St.attribute=st,st&&st.data&&(St.data=st.data),W[q]=St,k++}o.attributes=W,o.attributesNum=k,o.index=z}function M(){let B=o.newAttributes;for(let H=0,V=B.length;H<V;H++)B[H]=0}function g(B){y(B,0)}function y(B,H){let V=o.newAttributes,z=o.enabledAttributes,W=o.attributeDivisors;V[B]=1,z[B]===0&&(n.enableVertexAttribArray(B),z[B]=1),W[B]!==H&&(n.vertexAttribDivisor(B,H),W[B]=H)}function E(){let B=o.newAttributes,H=o.enabledAttributes;for(let V=0,z=H.length;V<z;V++)H[V]!==B[V]&&(n.disableVertexAttribArray(V),H[V]=0)}function P(B,H,V,z,W,$,k){k===!0?n.vertexAttribIPointer(B,H,V,W,$):n.vertexAttribPointer(B,H,V,z,W,$)}function S(B,H,V,z){M();let W=z.attributes,$=V.getAttributes(),k=H.defaultAttributeValues;for(let J in $){let q=$[J];if(q.location>=0){let it=W[J];if(it===void 0&&(J==="instanceMatrix"&&B.instanceMatrix&&(it=B.instanceMatrix),J==="instanceColor"&&B.instanceColor&&(it=B.instanceColor)),it!==void 0){let st=it.normalized,St=it.itemSize,wt=t.get(it);if(wt===void 0)continue;let $t=wt.buffer,Kt=wt.type,re=wt.bytesPerElement,ct=Kt===n.INT||Kt===n.UNSIGNED_INT||it.gpuType===Al;if(it.isInterleavedBufferAttribute){let pt=it.data,Bt=pt.stride,ie=it.offset;if(pt.isInstancedInterleavedBuffer){for(let Ft=0;Ft<q.locationSize;Ft++)y(q.location+Ft,pt.meshPerAttribute);B.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=pt.meshPerAttribute*pt.count)}else for(let Ft=0;Ft<q.locationSize;Ft++)g(q.location+Ft);n.bindBuffer(n.ARRAY_BUFFER,$t);for(let Ft=0;Ft<q.locationSize;Ft++)P(q.location+Ft,St/q.locationSize,Kt,st,Bt*re,(ie+St/q.locationSize*Ft)*re,ct)}else{if(it.isInstancedBufferAttribute){for(let pt=0;pt<q.locationSize;pt++)y(q.location+pt,it.meshPerAttribute);B.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=it.meshPerAttribute*it.count)}else for(let pt=0;pt<q.locationSize;pt++)g(q.location+pt);n.bindBuffer(n.ARRAY_BUFFER,$t);for(let pt=0;pt<q.locationSize;pt++)P(q.location+pt,St/q.locationSize,Kt,st,St*re,St/q.locationSize*pt*re,ct)}}else if(k!==void 0){let st=k[J];if(st!==void 0)switch(st.length){case 2:n.vertexAttrib2fv(q.location,st);break;case 3:n.vertexAttrib3fv(q.location,st);break;case 4:n.vertexAttrib4fv(q.location,st);break;default:n.vertexAttrib1fv(q.location,st)}}}}E()}function L(){N();for(let B in i){let H=i[B];for(let V in H){let z=H[V];for(let W in z){let $=z[W];for(let k in $)p($[k].object),delete $[k];delete z[W]}}delete i[B]}}function T(B){if(i[B.id]===void 0)return;let H=i[B.id];for(let V in H){let z=H[V];for(let W in z){let $=z[W];for(let k in $)p($[k].object),delete $[k];delete z[W]}}delete i[B.id]}function C(B){for(let H in i){let V=i[H];for(let z in V){let W=V[z];if(W[B.id]===void 0)continue;let $=W[B.id];for(let k in $)p($[k].object),delete $[k];delete W[B.id]}}}function w(B){for(let H in i){let V=i[H],z=B.isInstancedMesh===!0?B.id:0,W=V[z];if(W!==void 0){for(let $ in W){let k=W[$];for(let J in k)p(k[J].object),delete k[J];delete W[$]}delete V[z],Object.keys(V).length===0&&delete i[H]}}}function N(){F(),c=!0,o!==s&&(o=s,f(o.object))}function F(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:N,resetDefaultState:F,dispose:L,releaseStatesOfGeometry:T,releaseStatesOfObject:w,releaseStatesOfProgram:C,initAttributes:M,enableAttribute:g,disableUnusedAttributes:E}}function Gy(n,t,e){let i;function s(u){i=u}function o(u,f){n.drawArrays(i,u,f),e.update(f,i,1)}function c(u,f,p){p!==0&&(n.drawArraysInstanced(i,u,f,p),e.update(f,i,p))}function a(u,f,p){if(p===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,u,0,f,0,p);let m=0;for(let _=0;_<p;_++)m+=f[_];e.update(m,i,1)}this.setMode=s,this.render=o,this.renderInstances=c,this.renderMultiDraw=a}function Xy(n,t,e,i){let s;function o(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let C=t.get("EXT_texture_filter_anisotropic");s=n.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function c(C){return!(C!==Wn&&i.convert(C)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(C){let w=C===ii&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(C!==Rn&&C!==ni&&!w&&i.convert(C)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE))}function u(C){if(C==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let f=e.precision!==void 0?e.precision:"highp",p=u(f);p!==f&&(ne("WebGLRenderer:",f,"not supported, using",p,"instead."),f=p);let x=e.logarithmicDepthBuffer===!0,m=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&m===!1&&ne("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let _=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),v=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=n.getParameter(n.MAX_TEXTURE_SIZE),g=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),y=n.getParameter(n.MAX_VERTEX_ATTRIBS),E=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),P=n.getParameter(n.MAX_VARYING_VECTORS),S=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),L=n.getParameter(n.MAX_SAMPLES),T=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:o,getMaxPrecision:u,textureFormatReadable:c,textureTypeReadable:a,precision:f,logarithmicDepthBuffer:x,reversedDepthBuffer:m,maxTextures:_,maxVertexTextures:v,maxTextureSize:M,maxCubemapSize:g,maxAttributes:y,maxVertexUniforms:E,maxVaryings:P,maxFragmentUniforms:S,maxSamples:L,samples:T}}function Wy(n){let t=this,e=null,i=0,s=!1,o=!1,c=new On,a=new he,u={value:null,needsUpdate:!1};this.uniform=u,this.numPlanes=0,this.numIntersection=0,this.init=function(x,m){let _=x.length!==0||m||i!==0||s;return s=m,i=x.length,_},this.beginShadows=function(){o=!0,p(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(x,m){e=p(x,m,0)},this.setState=function(x,m,_){let v=x.clippingPlanes,M=x.clipIntersection,g=x.clipShadows,y=n.get(x);if(!s||v===null||v.length===0||o&&!g)o?p(null):f();else{let E=o?0:i,P=E*4,S=y.clippingState||null;u.value=S,S=p(v,m,P,_);for(let L=0;L!==P;++L)S[L]=e[L];y.clippingState=S,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=E}};function f(){u.value!==e&&(u.value=e,u.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function p(x,m,_,v){let M=x!==null?x.length:0,g=null;if(M!==0){if(g=u.value,v!==!0||g===null){let y=_+M*4,E=m.matrixWorldInverse;a.getNormalMatrix(E),(g===null||g.length<y)&&(g=new Float32Array(y));for(let P=0,S=_;P!==M;++P,S+=4)c.copy(x[P]).applyMatrix4(E,a),c.normal.toArray(g,S),g[S+3]=c.constant}u.value=g,u.needsUpdate=!0}return t.numPlanes=M,t.numIntersection=0,g}}function Jy(n){let t=[],e=[],i=n,s=n-xr+1+Yy;for(let o=0;o<s;o++){let c=Math.pow(2,i);t.push(c);let a=1/(c-2),u=-a,f=1+a,p=[u,u,f,u,f,f,u,u,f,f,u,f],x=6,m=6,_=3,v=new Float32Array(_*m*x),M=new Float32Array(_*m*x);for(let y=0;y<x;y++){let E=y%3*2/3-1,P=y>2?0:-1,S=[E,P,0,E+2/3,P,0,E+2/3,P+1,0,E,P,0,E+2/3,P+1,0,E,P+1,0];v.set(S,_*m*y);for(let L=0;L<m;L++){let T=p[L*2]*2-1,C=p[L*2+1]*2-1;y===0?Ss.set(1,C,T):y===1?Ss.set(-T,1,-C):y===2?Ss.set(-T,C,1):y===3?Ss.set(-1,C,-T):y===4?Ss.set(-T,-1,C):Ss.set(T,C,-1),Ss.toArray(M,(y*m+L)*_)}}let g=new Ge;g.setAttribute("position",new ze(v,_)),g.setAttribute("outputDirection",new ze(M,_)),e.push(new Ce(g,null)),i>xr&&i--}return{lodMeshes:e,sizeLods:t}}function np(n,t,e){let i=new In(n,t,e);return i.texture.mapping=Do,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function gr(n,t,e,i,s){n.viewport.set(t,e,i,s),n.scissor.set(t,e,i,s)}function jy(n,t,e){return new Bn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:qy,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:xc(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:gi,depthTest:!1,depthWrite:!1})}function Ky(n,t,e){return new Bn({name:"SphericalGaussianBlur",defines:{SAMPLES:$y,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:xc(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:gi,depthTest:!1,depthWrite:!1})}function ip(){return new Bn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:xc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:gi,depthTest:!1,depthWrite:!1})}function sp(){return new Bn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:xc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:gi,depthTest:!1,depthWrite:!1})}function xc(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}function Qy(n){let t=new WeakMap,e=new WeakMap,i=null;function s(m,_=!1){return m==null?null:_?c(m):o(m)}function o(m){if(m&&m.isTexture){let _=m.mapping;if(_===wl||_===El)if(t.has(m)){let v=t.get(m).texture;return a(v,m.mapping)}else{let v=m.image;if(v&&v.height>0){let M=new mc(v.height);return M.fromEquirectangularTexture(n,m),t.set(m,M),m.addEventListener("dispose",f),a(M.texture,m.mapping)}else return null}}return m}function c(m){if(m&&m.isTexture){let _=m.mapping,v=_===wl||_===El,M=_===ts||_===vs;if(v||M){let g=e.get(m),y=g!==void 0?g.texture.pmremVersion:0;if(m.isRenderTargetTexture&&m.pmremVersion!==y)return i===null&&(i=new pc(n)),g=v?i.fromEquirectangular(m,g):i.fromCubemap(m,g),g.texture.pmremVersion=m.pmremVersion,e.set(m,g),g.texture;if(g!==void 0)return g.texture;{let E=m.image;return v&&E&&E.height>0||M&&E&&u(E)?(i===null&&(i=new pc(n)),g=v?i.fromEquirectangular(m):i.fromCubemap(m),g.texture.pmremVersion=m.pmremVersion,e.set(m,g),m.addEventListener("dispose",p),g.texture):null}}}return m}function a(m,_){return _===wl?m.mapping=ts:_===El&&(m.mapping=vs),m}function u(m){let _=0,v=6;for(let M=0;M<v;M++)m[M]!==void 0&&_++;return _===v}function f(m){let _=m.target;_.removeEventListener("dispose",f);let v=t.get(_);v!==void 0&&(t.delete(_),v.dispose())}function p(m){let _=m.target;_.removeEventListener("dispose",p);let v=e.get(_);v!==void 0&&(e.delete(_),v.dispose())}function x(){t=new WeakMap,e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:x}}function t_(n){let t={};function e(i){if(t[i]!==void 0)return t[i];let s=n.getExtension(i);return t[i]=s,s}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){let s=e(i);return s===null&&ps("WebGLRenderer: "+i+" extension not supported."),s}}}function e_(n,t,e,i){let s={},o=new WeakMap;function c(x){let m=x.target;m.index!==null&&t.remove(m.index);for(let v in m.attributes)t.remove(m.attributes[v]);m.removeEventListener("dispose",c),delete s[m.id];let _=o.get(m);_&&(t.remove(_),o.delete(m)),i.releaseStatesOfGeometry(m),m.isInstancedBufferGeometry===!0&&delete m._maxInstanceCount,e.memory.geometries--}function a(x,m){return s[m.id]===!0||(m.addEventListener("dispose",c),s[m.id]=!0,e.memory.geometries++),m}function u(x){let m=x.attributes;for(let _ in m)t.update(m[_],n.ARRAY_BUFFER)}function f(x){let m=[],_=x.index,v=x.attributes.position,M=0;if(v===void 0)return;if(_!==null){let E=_.array;M=_.version;for(let P=0,S=E.length;P<S;P+=3){let L=E[P+0],T=E[P+1],C=E[P+2];m.push(L,T,T,C,C,L)}}else{let E=v.array;M=v.version;for(let P=0,S=E.length/3-1;P<S;P+=3){let L=P+0,T=P+1,C=P+2;m.push(L,T,T,C,C,L)}}let g=new(v.count>=65535?fo:uo)(m,1);g.version=M;let y=o.get(x);y&&t.remove(y),o.set(x,g)}function p(x){let m=o.get(x);if(m){let _=x.index;_!==null&&m.version<_.version&&f(x)}else f(x);return o.get(x)}return{get:a,update:u,getWireframeAttribute:p}}function n_(n,t,e){let i;function s(x){i=x}let o,c;function a(x){o=x.type,c=x.bytesPerElement}function u(x,m){n.drawElements(i,m,o,x*c),e.update(m,i,1)}function f(x,m,_){_!==0&&(n.drawElementsInstanced(i,m,o,x*c,_),e.update(m,i,_))}function p(x,m,_){if(_===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,m,0,o,x,0,_);let M=0;for(let g=0;g<_;g++)M+=m[g];e.update(M,i,1)}this.setMode=s,this.setIndex=a,this.render=u,this.renderInstances=f,this.renderMultiDraw=p}function i_(n){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(o,c,a){switch(e.calls++,c){case n.TRIANGLES:e.triangles+=a*(o/3);break;case n.LINES:e.lines+=a*(o/2);break;case n.LINE_STRIP:e.lines+=a*(o-1);break;case n.LINE_LOOP:e.lines+=a*o;break;case n.POINTS:e.points+=a*o;break;default:se("WebGLInfo: Unknown draw mode:",c);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:i}}function s_(n,t,e){let i=new WeakMap,s=new Ye;function o(c,a,u){let f=c.morphTargetInfluences,p=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,x=p!==void 0?p.length:0,m=i.get(a);if(m===void 0||m.count!==x){let N=function(){C.dispose(),i.delete(a),a.removeEventListener("dispose",N)};m!==void 0&&m.texture.dispose();let _=a.morphAttributes.position!==void 0,v=a.morphAttributes.normal!==void 0,M=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],y=a.morphAttributes.normal||[],E=a.morphAttributes.color||[],P=0;_===!0&&(P=1),v===!0&&(P=2),M===!0&&(P=3);let S=a.attributes.position.count*P,L=1;S>t.maxTextureSize&&(L=Math.ceil(S/t.maxTextureSize),S=t.maxTextureSize);let T=new Float32Array(S*L*4*x),C=new co(T,S,L,x);C.type=ni,C.needsUpdate=!0;let w=P*4;for(let F=0;F<x;F++){let B=g[F],H=y[F],V=E[F],z=S*L*4*F;for(let W=0;W<B.count;W++){let $=W*w;_===!0&&(s.fromBufferAttribute(B,W),T[z+$+0]=s.x,T[z+$+1]=s.y,T[z+$+2]=s.z,T[z+$+3]=0),v===!0&&(s.fromBufferAttribute(H,W),T[z+$+4]=s.x,T[z+$+5]=s.y,T[z+$+6]=s.z,T[z+$+7]=0),M===!0&&(s.fromBufferAttribute(V,W),T[z+$+8]=s.x,T[z+$+9]=s.y,T[z+$+10]=s.z,T[z+$+11]=V.itemSize===4?s.w:1)}}m={count:x,texture:C,size:new Jt(S,L)},i.set(a,m),a.addEventListener("dispose",N)}if(c.isInstancedMesh===!0&&c.morphTexture!==null)u.getUniforms().setValue(n,"morphTexture",c.morphTexture,e);else{let _=0;for(let M=0;M<f.length;M++)_+=f[M];let v=a.morphTargetsRelative?1:1-_;u.getUniforms().setValue(n,"morphTargetBaseInfluence",v),u.getUniforms().setValue(n,"morphTargetInfluences",f)}u.getUniforms().setValue(n,"morphTargetsTexture",m.texture,e),u.getUniforms().setValue(n,"morphTargetsTextureSize",m.size)}return{update:o}}function r_(n,t,e,i,s){let o=new WeakMap;function c(f){let p=s.render.frame,x=f.geometry,m=t.get(f,x);if(o.get(m)!==p&&(t.update(m),o.set(m,p)),f.isInstancedMesh&&(f.hasEventListener("dispose",u)===!1&&f.addEventListener("dispose",u),o.get(f)!==p&&(e.update(f.instanceMatrix,n.ARRAY_BUFFER),f.instanceColor!==null&&e.update(f.instanceColor,n.ARRAY_BUFFER),o.set(f,p))),f.isSkinnedMesh){let _=f.skeleton;o.get(_)!==p&&(_.update(),o.set(_,p))}return m}function a(){o=new WeakMap}function u(f){let p=f.target;p.removeEventListener("dispose",u),i.releaseStatesOfObject(p),e.remove(p.instanceMatrix),p.instanceColor!==null&&e.remove(p.instanceColor)}return{update:c,dispose:a}}function a_(n,t,e,i,s,o){let c=new In(t,e,{type:n,depthBuffer:s,stencilBuffer:o,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,u=null,f=new Ge;f.setAttribute("position",new Ve([-1,3,0,-1,-1,0,3,-1,0],3)),f.setAttribute("uv",new Ve([0,2,0,0,2,0],2));let p=new ll({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),x=new Ce(f,p),m=new cr(-1,1,1,-1,0,1),_=null,v=null,M=!1,g,y=null,E=[],P=!1;this.setSize=function(S,L){c.setSize(S,L),a!==null&&a.setSize(S,L),u!==null&&u.setSize(S,L);for(let T=0;T<E.length;T++){let C=E[T];C.setSize&&C.setSize(S,L)}},this.setEffects=function(S){E=S,P=E.length>0&&E[0].isRenderPass===!0;let L=c.width,T=c.height;E.length>0&&a===null&&(a=new In(L,T,{type:ii,depthBuffer:!1,stencilBuffer:!1}),u=new In(L,T,{type:ii,depthBuffer:!1,stencilBuffer:!1}));for(let C=0;C<E.length;C++){let w=E[C];w.setSize&&w.setSize(L,T)}},this.begin=function(S,L){if(M||S.toneMapping===ti&&E.length===0)return!1;if(y=L,L!==null){let T=L.width,C=L.height;(c.width!==T||c.height!==C)&&this.setSize(T,C)}return P===!1&&S.setRenderTarget(c),g=S.toneMapping,S.toneMapping=ti,!0},this.hasRenderPass=function(){return P},this.end=function(S,L){S.toneMapping=g,M=!0;let T=c,C=a;for(let w=0;w<E.length;w++){let N=E[w];N.enabled!==!1&&(N.render(S,C,T,L),N.needsSwap!==!1&&(T=C,C=C===a?u:a))}if(_!==S.outputColorSpace||v!==S.toneMapping){_=S.outputColorSpace,v=S.toneMapping,p.defines={},Me.getTransfer(_)===Le&&(p.defines.SRGB_TRANSFER="");let w=o_[v];w&&(p.defines[w]=""),p.needsUpdate=!0}p.uniforms.tDiffuse.value=T.texture,S.setRenderTarget(y),S.render(x,m),y=null,M=!1},this.isCompositing=function(){return M},this.dispose=function(){c.dispose(),a!==null&&a.dispose(),u!==null&&u.dispose(),f.dispose(),p.dispose()}}function _r(n,t,e){let i=n[0];if(i<=0||i>0)return n;let s=t*e,o=rp[s];if(o===void 0&&(o=new Float32Array(s),rp[s]=o),t!==0){i.toArray(o,0);for(let c=1,a=0;c!==t;++c)a+=e,n[c].toArray(o,a)}return o}function rn(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function on(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function yc(n,t){let e=op[t];e===void 0&&(e=new Int32Array(t),op[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function l_(n,t){let e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function c_(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(rn(e,t))return;n.uniform2fv(this.addr,t),on(e,t)}}function h_(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(rn(e,t))return;n.uniform3fv(this.addr,t),on(e,t)}}function u_(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(rn(e,t))return;n.uniform4fv(this.addr,t),on(e,t)}}function f_(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(rn(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),on(e,t)}else{if(rn(e,i))return;cp.set(i),n.uniformMatrix2fv(this.addr,!1,cp),on(e,i)}}function d_(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(rn(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),on(e,t)}else{if(rn(e,i))return;lp.set(i),n.uniformMatrix3fv(this.addr,!1,lp),on(e,i)}}function p_(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(rn(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),on(e,t)}else{if(rn(e,i))return;ap.set(i),n.uniformMatrix4fv(this.addr,!1,ap),on(e,i)}}function m_(n,t){let e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function g_(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(rn(e,t))return;n.uniform2iv(this.addr,t),on(e,t)}}function x_(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(rn(e,t))return;n.uniform3iv(this.addr,t),on(e,t)}}function y_(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(rn(e,t))return;n.uniform4iv(this.addr,t),on(e,t)}}function __(n,t){let e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function v_(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(rn(e,t))return;n.uniform2uiv(this.addr,t),on(e,t)}}function b_(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(rn(e,t))return;n.uniform3uiv(this.addr,t),on(e,t)}}function M_(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(rn(e,t))return;n.uniform4uiv(this.addr,t),on(e,t)}}function S_(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let o;this.type===n.SAMPLER_2D_SHADOW?(hu.compareFunction=e.isReversedDepthBuffer()?uc:hc,o=hu):o=wp,e.setTexture2D(t||o,s)}function w_(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture3D(t||Tp,s)}function E_(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTextureCube(t||Ap,s)}function T_(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture2DArray(t||Ep,s)}function A_(n){switch(n){case 5126:return l_;case 35664:return c_;case 35665:return h_;case 35666:return u_;case 35674:return f_;case 35675:return d_;case 35676:return p_;case 5124:case 35670:return m_;case 35667:case 35671:return g_;case 35668:case 35672:return x_;case 35669:case 35673:return y_;case 5125:return __;case 36294:return v_;case 36295:return b_;case 36296:return M_;case 35678:case 36198:case 36298:case 36306:case 35682:return S_;case 35679:case 36299:case 36307:return w_;case 35680:case 36300:case 36308:case 36293:return E_;case 36289:case 36303:case 36311:case 36292:return T_}}function P_(n,t){n.uniform1fv(this.addr,t)}function C_(n,t){let e=_r(t,this.size,2);n.uniform2fv(this.addr,e)}function I_(n,t){let e=_r(t,this.size,3);n.uniform3fv(this.addr,e)}function R_(n,t){let e=_r(t,this.size,4);n.uniform4fv(this.addr,e)}function L_(n,t){let e=_r(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function N_(n,t){let e=_r(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function D_(n,t){let e=_r(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function O_(n,t){n.uniform1iv(this.addr,t)}function F_(n,t){n.uniform2iv(this.addr,t)}function U_(n,t){n.uniform3iv(this.addr,t)}function B_(n,t){n.uniform4iv(this.addr,t)}function k_(n,t){n.uniform1uiv(this.addr,t)}function z_(n,t){n.uniform2uiv(this.addr,t)}function V_(n,t){n.uniform3uiv(this.addr,t)}function H_(n,t){n.uniform4uiv(this.addr,t)}function G_(n,t,e){let i=this.cache,s=t.length,o=yc(e,s);rn(i,o)||(n.uniform1iv(this.addr,o),on(i,o));let c;this.type===n.SAMPLER_2D_SHADOW?c=hu:c=wp;for(let a=0;a!==s;++a)e.setTexture2D(t[a]||c,o[a])}function X_(n,t,e){let i=this.cache,s=t.length,o=yc(e,s);rn(i,o)||(n.uniform1iv(this.addr,o),on(i,o));for(let c=0;c!==s;++c)e.setTexture3D(t[c]||Tp,o[c])}function W_(n,t,e){let i=this.cache,s=t.length,o=yc(e,s);rn(i,o)||(n.uniform1iv(this.addr,o),on(i,o));for(let c=0;c!==s;++c)e.setTextureCube(t[c]||Ap,o[c])}function Y_(n,t,e){let i=this.cache,s=t.length,o=yc(e,s);rn(i,o)||(n.uniform1iv(this.addr,o),on(i,o));for(let c=0;c!==s;++c)e.setTexture2DArray(t[c]||Ep,o[c])}function $_(n){switch(n){case 5126:return P_;case 35664:return C_;case 35665:return I_;case 35666:return R_;case 35674:return L_;case 35675:return N_;case 35676:return D_;case 5124:case 35670:return O_;case 35667:case 35671:return F_;case 35668:case 35672:return U_;case 35669:case 35673:return B_;case 5125:return k_;case 36294:return z_;case 36295:return V_;case 36296:return H_;case 35678:case 36198:case 36298:case 36306:case 35682:return G_;case 35679:case 36299:case 36307:return X_;case 35680:case 36300:case 36308:case 36293:return W_;case 36289:case 36303:case 36311:case 36292:return Y_}}function hp(n,t){n.seq.push(t),n.map[t.id]=t}function q_(n,t,e){let i=n.name,s=i.length;for(lu.lastIndex=0;;){let o=lu.exec(i),c=lu.lastIndex,a=o[1],u=o[2]==="]",f=o[3];if(u&&(a=a|0),f===void 0||f==="["&&c+2===s){hp(e,f===void 0?new uu(a,n,t):new fu(a,n,t));break}else{let x=e.map[a];x===void 0&&(x=new du(a),hp(e,x)),e=x}}}function up(n,t,e){let i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}function j_(n,t){let e=n.split(`
`),i=[],s=Math.max(t-6,0),o=Math.min(t+6,e.length);for(let c=s;c<o;c++){let a=c+1;i.push(`${a===t?">":" "} ${a}: ${e[c]}`)}return i.join(`
`)}function K_(n){Me._getMatrix(fp,Me.workingColorSpace,n);let t=`mat3( ${fp.elements.map(e=>e.toFixed(4))} )`;switch(Me.getTransfer(n)){case oo:return[t,"LinearTransferOETF"];case Le:return[t,"sRGBTransferOETF"];default:return ne("WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function dp(n,t,e){let i=n.getShaderParameter(t,n.COMPILE_STATUS),o=(n.getShaderInfoLog(t)||"").trim();if(i&&o==="")return"";let c=/ERROR: 0:(\d+)/.exec(o);if(c){let a=parseInt(c[1]);return e.toUpperCase()+`

`+o+`

`+j_(n.getShaderSource(t),a)}else return o}function Q_(n,t){let e=K_(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function ev(n,t){let e=tv[t];return e===void 0?(ne("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function nv(){Me.getLuminanceCoefficients(dc);let n=dc.x.toFixed(4),t=dc.y.toFixed(4),e=dc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function iv(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Xo).join(`
`)}function sv(n){let t=[];for(let e in n){let i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function rv(n,t){let e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let o=n.getActiveAttrib(t,s),c=o.name,a=1;o.type===n.FLOAT_MAT2&&(a=2),o.type===n.FLOAT_MAT3&&(a=3),o.type===n.FLOAT_MAT4&&(a=4),e[c]={type:o.type,location:n.getAttribLocation(t,c),locationSize:a}}return e}function Xo(n){return n!==""}function pp(n,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function mp(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}function pu(n){return n.replace(ov,lv)}function lv(n,t){let e=me[t];if(e===void 0){let i=av.get(t);if(i!==void 0)e=me[i],ne('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return pu(e)}function gp(n){return n.replace(cv,hv)}function hv(n,t,e,i){let s="";for(let o=parseInt(t);o<parseInt(e);o++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return s}function xp(n){let t=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?t+=`
#define HIGH_PRECISION`:n.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function fv(n){return uv[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}function pv(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":dv[n.envMapMode]||"ENVMAP_TYPE_CUBE"}function gv(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":mv[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}function yv(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":xv[n.combine]||"ENVMAP_BLENDING_NONE"}function _v(n){let t=n.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:i,maxMip:e}}function vv(n,t,e,i){let s=n.getContext(),o=e.defines,c=e.vertexShader,a=e.fragmentShader,u=fv(e),f=pv(e),p=gv(e),x=yv(e),m=_v(e),_=iv(e),v=sv(o),M=s.createProgram(),g,y,E=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v].filter(Xo).join(`
`),g.length>0&&(g+=`
`),y=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v].filter(Xo).join(`
`),y.length>0&&(y+=`
`)):(g=[xp(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+p:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+u:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Xo).join(`
`),y=[xp(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+f:"",e.envMap?"#define "+p:"",e.envMap?"#define "+x:"",m?"#define CUBEUV_TEXEL_WIDTH "+m.texelWidth:"",m?"#define CUBEUV_TEXEL_HEIGHT "+m.texelHeight:"",m?"#define CUBEUV_MAX_MIP "+m.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+u:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==ti?"#define TONE_MAPPING":"",e.toneMapping!==ti?me.tonemapping_pars_fragment:"",e.toneMapping!==ti?ev("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",me.colorspace_pars_fragment,Q_("linearToOutputTexel",e.outputColorSpace),nv(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Xo).join(`
`)),c=pu(c),c=pp(c,e),c=mp(c,e),a=pu(a),a=pp(a,e),a=mp(a,e),c=gp(c),a=gp(a),e.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,g=[_,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,y=["#define varying in",e.glslVersion===Jh?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Jh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+y);let P=E+g+c,S=E+y+a,L=up(s,s.VERTEX_SHADER,P),T=up(s,s.FRAGMENT_SHADER,S);s.attachShader(M,L),s.attachShader(M,T),e.index0AttributeName!==void 0?s.bindAttribLocation(M,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(M,0,"position"),s.linkProgram(M);function C(B){if(n.debug.checkShaderErrors){let H=s.getProgramInfoLog(M)||"",V=s.getShaderInfoLog(L)||"",z=s.getShaderInfoLog(T)||"",W=H.trim(),$=V.trim(),k=z.trim(),J=!0,q=!0;if(s.getProgramParameter(M,s.LINK_STATUS)===!1)if(J=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,M,L,T);else{let it=dp(s,L,"vertex"),st=dp(s,T,"fragment");se("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(M,s.VALIDATE_STATUS)+`

Material Name: `+B.name+`
Material Type: `+B.type+`

Program Info Log: `+W+`
`+it+`
`+st)}else W!==""?ne("WebGLProgram: Program Info Log:",W):($===""||k==="")&&(q=!1);q&&(B.diagnostics={runnable:J,programLog:W,vertexShader:{log:$,prefix:g},fragmentShader:{log:k,prefix:y}})}s.deleteShader(L),s.deleteShader(T),w=new yr(s,M),N=rv(s,M)}let w;this.getUniforms=function(){return w===void 0&&C(this),w};let N;this.getAttributes=function(){return N===void 0&&C(this),N};let F=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return F===!1&&(F=s.getProgramParameter(M,Z_)),F},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(M),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=J_++,this.cacheKey=t,this.usedTimes=1,this.program=M,this.vertexShader=L,this.fragmentShader=T,this}function Mv(n){return n===is||n===zo||n===Vo}function Sv(n,t,e,i,s,o){let c=new nr,a=new mu,u=new Set,f=[],p=new Map,x=i.logarithmicDepthBuffer,m=i.precision,_={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(w){return u.add(w),w===0?"uv":`uv${w}`}function M(w,N,F,B,H,V){let z=B.fog,W=H.geometry,$=w.isMeshStandardMaterial||w.isMeshLambertMaterial||w.isMeshPhongMaterial?B.environment:null,k=w.isMeshStandardMaterial||w.isMeshLambertMaterial&&!w.envMap||w.isMeshPhongMaterial&&!w.envMap,J=t.get(w.envMap||$,k),q=J&&J.mapping===Do?J.image.height:null,it=_[w.type];w.precision!==null&&(m=i.getMaxPrecision(w.precision),m!==w.precision&&ne("WebGLProgram.getParameters:",w.precision,"not supported, using",m,"instead."));let st=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,St=st!==void 0?st.length:0,wt=0;W.morphAttributes.position!==void 0&&(wt=1),W.morphAttributes.normal!==void 0&&(wt=2),W.morphAttributes.color!==void 0&&(wt=3);let $t,Kt,re,ct;if(it){let Te=yi[it];$t=Te.vertexShader,Kt=Te.fragmentShader}else{$t=w.vertexShader,Kt=w.fragmentShader;let Te=a.getVertexShaderStage(w),Se=a.getFragmentShaderStage(w);a.update(w,Te,Se),re=Te.id,ct=Se.id}let pt=n.getRenderTarget(),Bt=n.state.buffers.depth.getReversed(),ie=H.isInstancedMesh===!0,Ft=H.isBatchedMesh===!0,de=!!w.map,qe=!!w.matcap,fe=!!J,_e=!!w.aoMap,Ie=!!w.lightMap,ge=!!w.bumpMap&&w.wireframe===!1,Re=!!w.normalMap,Je=!!w.displacementMap,ln=!!w.emissiveMap,Ue=!!w.metalnessMap,Xe=!!w.roughnessMap,Q=w.anisotropy>0,je=w.clearcoat>0,we=w.dispersion>0,I=w.retroreflectivity>0,R=w.iridescence>0,nt=w.sheen>0,lt=w.transmission>0,dt=Q&&!!w.anisotropyMap,Et=je&&!!w.clearcoatMap,Tt=je&&!!w.clearcoatNormalMap,ft=je&&!!w.clearcoatRoughnessMap,vt=R&&!!w.iridescenceMap,At=R&&!!w.iridescenceThicknessMap,Gt=nt&&!!w.sheenColorMap,Nt=nt&&!!w.sheenRoughnessMap,Pt=!!w.specularMap,Ht=!!w.specularColorMap,Qt=!!w.specularIntensityMap,le=lt&&!!w.transmissionMap,K=lt&&!!w.thicknessMap,Rt=!!w.gradientMap,gt=!!w.alphaMap,Ct=w.alphaTest>0,Lt=!!w.alphaHash,bt=!!w.extensions,Zt=ti;w.toneMapped&&(pt===null||pt.isXRRenderTarget===!0)&&(Zt=n.toneMapping);let Ot={shaderID:it,shaderType:w.type,shaderName:w.name,vertexShader:$t,fragmentShader:Kt,defines:w.defines,customVertexShaderID:re,customFragmentShaderID:ct,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:m,batching:Ft,batchingColor:Ft&&H._colorsTexture!==null,instancing:ie,instancingColor:ie&&H.instanceColor!==null,instancingMorph:ie&&H.morphTexture!==null,outputColorSpace:pt===null?n.outputColorSpace:pt.isXRRenderTarget===!0?pt.texture.colorSpace:Me.workingColorSpace,alphaToCoverage:!!w.alphaToCoverage,map:de,matcap:qe,envMap:fe,envMapMode:fe&&J.mapping,envMapCubeUVHeight:q,aoMap:_e,lightMap:Ie,bumpMap:ge,normalMap:Re,displacementMap:Je,emissiveMap:ln,normalMapObjectSpace:Re&&w.normalMapType===Dd,normalMapTangentSpace:Re&&w.normalMapType===cc,packedNormalMap:Re&&w.normalMapType===cc&&Mv(w.normalMap.format),metalnessMap:Ue,roughnessMap:Xe,anisotropy:Q,anisotropyMap:dt,clearcoat:je,clearcoatMap:Et,clearcoatNormalMap:Tt,clearcoatRoughnessMap:ft,dispersion:we,retroreflection:I,iridescence:R,iridescenceMap:vt,iridescenceThicknessMap:At,sheen:nt,sheenColorMap:Gt,sheenRoughnessMap:Nt,specularMap:Pt,specularColorMap:Ht,specularIntensityMap:Qt,transmission:lt,transmissionMap:le,thicknessMap:K,gradientMap:Rt,opaque:w.transparent===!1&&w.blending===dr&&w.alphaToCoverage===!1,alphaMap:gt,alphaTest:Ct,alphaHash:Lt,combine:w.combine,mapUv:de&&v(w.map.channel),aoMapUv:_e&&v(w.aoMap.channel),lightMapUv:Ie&&v(w.lightMap.channel),bumpMapUv:ge&&v(w.bumpMap.channel),normalMapUv:Re&&v(w.normalMap.channel),displacementMapUv:Je&&v(w.displacementMap.channel),emissiveMapUv:ln&&v(w.emissiveMap.channel),metalnessMapUv:Ue&&v(w.metalnessMap.channel),roughnessMapUv:Xe&&v(w.roughnessMap.channel),anisotropyMapUv:dt&&v(w.anisotropyMap.channel),clearcoatMapUv:Et&&v(w.clearcoatMap.channel),clearcoatNormalMapUv:Tt&&v(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ft&&v(w.clearcoatRoughnessMap.channel),iridescenceMapUv:vt&&v(w.iridescenceMap.channel),iridescenceThicknessMapUv:At&&v(w.iridescenceThicknessMap.channel),sheenColorMapUv:Gt&&v(w.sheenColorMap.channel),sheenRoughnessMapUv:Nt&&v(w.sheenRoughnessMap.channel),specularMapUv:Pt&&v(w.specularMap.channel),specularColorMapUv:Ht&&v(w.specularColorMap.channel),specularIntensityMapUv:Qt&&v(w.specularIntensityMap.channel),transmissionMapUv:le&&v(w.transmissionMap.channel),thicknessMapUv:K&&v(w.thicknessMap.channel),alphaMapUv:gt&&v(w.alphaMap.channel),vertexTangents:!!W.attributes.tangent&&(Re||Q),vertexNormals:!!W.attributes.normal,vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,pointsUvs:H.isPoints===!0&&!!W.attributes.uv&&(de||gt),fog:!!z,useFog:w.fog===!0,fogExp2:!!z&&z.isFogExp2,flatShading:w.wireframe===!1&&(w.flatShading===!0||W.attributes.normal===void 0&&Re===!1&&(w.isMeshLambertMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isMeshPhysicalMaterial)),sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:x,reversedDepthBuffer:Bt,skinning:H.isSkinnedMesh===!0,hasPositionAttribute:W.attributes.position!==void 0,morphTargets:W.morphAttributes.position!==void 0,morphNormals:W.morphAttributes.normal!==void 0,morphColors:W.morphAttributes.color!==void 0,morphTargetsCount:St,morphTextureStride:wt,numSunLights:N.sun.length,numDirLights:N.directional.length,numPointLights:N.point.length,numSpotLights:N.spot.length,numSpotLightMaps:N.spotLightMap.length,numRectAreaLights:N.rectArea.length,numHemiLights:N.hemi.length,numSunLightShadows:N.sunShadowMap.length,numDirLightShadows:N.directionalShadowMap.length,numPointLightShadows:N.pointShadowMap.length,numSpotLightShadows:N.spotShadowMap.length,numSpotLightShadowsWithMaps:N.numSpotLightShadowsWithMaps,numLightProbes:N.numLightProbes,numLightProbeGrids:V.length,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:w.dithering,shadowMapEnabled:n.shadowMap.enabled&&F.length>0,shadowMapType:n.shadowMap.type,toneMapping:Zt,decodeVideoTexture:de&&w.map.isVideoTexture===!0&&Me.getTransfer(w.map.colorSpace)===Le,decodeVideoTextureEmissive:ln&&w.emissiveMap.isVideoTexture===!0&&Me.getTransfer(w.emissiveMap.colorSpace)===Le,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===_n,flipSided:w.side===Tn,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:bt&&w.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(bt&&w.extensions.multiDraw===!0||Ft)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return Ot.vertexUv1s=u.has(1),Ot.vertexUv2s=u.has(2),Ot.vertexUv3s=u.has(3),u.clear(),Ot}function g(w){let N=[];if(w.shaderID?N.push(w.shaderID):(N.push(w.customVertexShaderID),N.push(w.customFragmentShaderID)),w.defines!==void 0)for(let F in w.defines)N.push(F),N.push(w.defines[F]);return w.isRawShaderMaterial===!1&&(y(N,w),E(N,w),N.push(n.outputColorSpace)),N.push(w.customProgramCacheKey),N.join()}function y(w,N){w.push(N.precision),w.push(N.outputColorSpace),w.push(N.envMapMode),w.push(N.envMapCubeUVHeight),w.push(N.mapUv),w.push(N.alphaMapUv),w.push(N.lightMapUv),w.push(N.aoMapUv),w.push(N.bumpMapUv),w.push(N.normalMapUv),w.push(N.displacementMapUv),w.push(N.emissiveMapUv),w.push(N.metalnessMapUv),w.push(N.roughnessMapUv),w.push(N.anisotropyMapUv),w.push(N.clearcoatMapUv),w.push(N.clearcoatNormalMapUv),w.push(N.clearcoatRoughnessMapUv),w.push(N.iridescenceMapUv),w.push(N.iridescenceThicknessMapUv),w.push(N.sheenColorMapUv),w.push(N.sheenRoughnessMapUv),w.push(N.specularMapUv),w.push(N.specularColorMapUv),w.push(N.specularIntensityMapUv),w.push(N.transmissionMapUv),w.push(N.thicknessMapUv),w.push(N.combine),w.push(N.fogExp2),w.push(N.sizeAttenuation),w.push(N.morphTargetsCount),w.push(N.morphAttributeCount),w.push(N.numSunLights),w.push(N.numDirLights),w.push(N.numPointLights),w.push(N.numSpotLights),w.push(N.numSpotLightMaps),w.push(N.numHemiLights),w.push(N.numRectAreaLights),w.push(N.numSunLightShadows),w.push(N.numDirLightShadows),w.push(N.numPointLightShadows),w.push(N.numSpotLightShadows),w.push(N.numSpotLightShadowsWithMaps),w.push(N.numLightProbes),w.push(N.shadowMapType),w.push(N.toneMapping),w.push(N.numClippingPlanes),w.push(N.numClipIntersection),w.push(N.depthPacking)}function E(w,N){c.disableAll(),N.instancing&&c.enable(0),N.instancingColor&&c.enable(1),N.instancingMorph&&c.enable(2),N.matcap&&c.enable(3),N.envMap&&c.enable(4),N.normalMapObjectSpace&&c.enable(5),N.normalMapTangentSpace&&c.enable(6),N.clearcoat&&c.enable(7),N.iridescence&&c.enable(8),N.alphaTest&&c.enable(9),N.vertexColors&&c.enable(10),N.vertexAlphas&&c.enable(11),N.vertexUv1s&&c.enable(12),N.vertexUv2s&&c.enable(13),N.vertexUv3s&&c.enable(14),N.vertexTangents&&c.enable(15),N.anisotropy&&c.enable(16),N.alphaHash&&c.enable(17),N.batching&&c.enable(18),N.dispersion&&c.enable(19),N.retroreflection&&c.enable(24),N.batchingColor&&c.enable(20),N.gradientMap&&c.enable(21),N.packedNormalMap&&c.enable(22),N.vertexNormals&&c.enable(23),w.push(c.mask),c.disableAll(),N.fog&&c.enable(0),N.useFog&&c.enable(1),N.flatShading&&c.enable(2),N.logarithmicDepthBuffer&&c.enable(3),N.reversedDepthBuffer&&c.enable(4),N.skinning&&c.enable(5),N.morphTargets&&c.enable(6),N.morphNormals&&c.enable(7),N.morphColors&&c.enable(8),N.premultipliedAlpha&&c.enable(9),N.shadowMapEnabled&&c.enable(10),N.doubleSided&&c.enable(11),N.flipSided&&c.enable(12),N.useDepthPacking&&c.enable(13),N.dithering&&c.enable(14),N.transmission&&c.enable(15),N.sheen&&c.enable(16),N.opaque&&c.enable(17),N.pointsUvs&&c.enable(18),N.decodeVideoTexture&&c.enable(19),N.decodeVideoTextureEmissive&&c.enable(20),N.alphaToCoverage&&c.enable(21),N.numLightProbeGrids>0&&c.enable(22),N.hasPositionAttribute&&c.enable(23),w.push(c.mask)}function P(w){let N=_[w.type],F;if(N){let B=yi[N];F=Kd.clone(B.uniforms)}else F=w.uniforms;return F}function S(w,N){let F=p.get(N);return F!==void 0?++F.usedTimes:(F=new vv(n,N,w,s),f.push(F),p.set(N,F)),F}function L(w){if(--w.usedTimes===0){let N=f.indexOf(w);f[N]=f[f.length-1],f.pop(),p.delete(w.cacheKey),w.destroy()}}function T(w){a.remove(w)}function C(){a.dispose()}return{getParameters:M,getProgramCacheKey:g,getUniforms:P,acquireProgram:S,releaseProgram:L,releaseShaderCache:T,programs:f,dispose:C}}function wv(){let n=new WeakMap;function t(c){return n.has(c)}function e(c){let a=n.get(c);return a===void 0&&(a={},n.set(c,a)),a}function i(c){n.delete(c)}function s(c,a,u){n.get(c)[a]=u}function o(){n=new WeakMap}return{has:t,get:e,remove:i,update:s,dispose:o}}function Ev(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.materialVariant!==t.materialVariant?n.materialVariant-t.materialVariant:n.z!==t.z?n.z-t.z:n.id-t.id}function yp(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function _p(){let n=[],t=0,e=[],i=[],s=[];function o(){t=0,e.length=0,i.length=0,s.length=0}function c(m){let _=0;return m.isInstancedMesh&&(_+=2),m.isSkinnedMesh&&(_+=1),_}function a(m,_,v,M,g,y){let E=n[t];return E===void 0?(E={id:m.id,object:m,geometry:_,material:v,materialVariant:c(m),groupOrder:M,renderOrder:m.renderOrder,z:g,group:y},n[t]=E):(E.id=m.id,E.object=m,E.geometry=_,E.material=v,E.materialVariant=c(m),E.groupOrder=M,E.renderOrder=m.renderOrder,E.z=g,E.group=y),t++,E}function u(m,_,v,M,g,y,E){E.reversedDepth===!0&&(g=-g);let P=a(m,_,v,M,g,y);v.transmission>0?i.push(P):v.transparent===!0?s.push(P):e.push(P)}function f(m,_,v,M,g,y){let E=a(m,_,v,M,g,y);v.transmission>0?i.unshift(E):v.transparent===!0?s.unshift(E):e.unshift(E)}function p(m,_){e.length>1&&e.sort(m||Ev),i.length>1&&i.sort(_||yp),s.length>1&&s.sort(_||yp)}function x(){for(let m=t,_=n.length;m<_;m++){let v=n[m];if(v.id===null)break;v.id=null,v.object=null,v.geometry=null,v.material=null,v.group=null}}return{opaque:e,transmissive:i,transparent:s,init:o,push:u,unshift:f,finish:x,sort:p}}function Tv(){let n=new WeakMap;function t(i,s){let o=n.get(i),c;return o===void 0?(c=new _p,n.set(i,[c])):s>=o.length?(c=new _p,o.push(c)):c=o[s],c}function e(){n=new WeakMap}return{get:t,dispose:e}}function Av(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new Z,color:new ae};break;case"SpotLight":e={position:new Z,direction:new Z,color:new ae,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new Z,color:new ae,distance:0,decay:0};break;case"HemisphereLight":e={direction:new Z,skyColor:new ae,groundColor:new ae};break;case"RectAreaLight":e={color:new ae,position:new Z,halfWidth:new Z,halfHeight:new Z};break}return n[t.id]=e,e}}}function Pv(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Jt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Jt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Jt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}function Iv(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function Rv(n){let t=new Av,e=Pv(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let f=0;f<9;f++)i.probe.push(new Z);let s=new Z,o=new De,c=new De;function a(f){let p=0,x=0,m=0;for(let H=0;H<9;H++)i.probe[H].set(0,0,0);let _=0,v=0,M=0,g=0,y=0,E=0,P=0,S=0,L=0,T=0,C=0,w=0,N=0,F=0;f.sort(Iv);for(let H=0,V=f.length;H<V;H++){let z=f[H],W=z.color,$=z.intensity,k=z.distance,J=null;if(z.shadow&&z.shadow.map&&(z.shadow.map.texture.format===is?J=z.shadow.map.texture:J=z.shadow.map.depthTexture||z.shadow.map.texture),z.isAmbientLight)p+=W.r*$,x+=W.g*$,m+=W.b*$;else if(z.isLightProbe){for(let q=0;q<9;q++)i.probe[q].addScaledVector(z.sh.coefficients[q],$);F++}else if(z.isSunLight){let q=t.get(z);if(q.color.copy(z.color).multiplyScalar(z.intensity),z.castShadow){let it=z.shadow,st=e.get(z);st.shadowIntensity=it.intensity,st.shadowBias=it.bias,st.shadowNormalBias=it.normalBias,st.shadowRadius=it.radius,st.shadowMapSize.copy(it.mapSize).multiply(it.getFrameExtents()),i.sunShadow[v]=st,i.sunShadowMap[v]=J;let St=it.getViewportCount();for(let wt=0;wt<St;wt++)i.sunShadowMatrix[M+wt]=it.getMatrix(wt),i.sunShadowCascade[M+wt]=it._cascadeData[wt];M+=St,v++}i.sun[_]=q,_++}else if(z.isDirectionalLight){let q=t.get(z);if(q.color.copy(z.color).multiplyScalar(z.intensity),z.castShadow){let it=z.shadow,st=e.get(z);st.shadowIntensity=it.intensity,st.shadowBias=it.bias,st.shadowNormalBias=it.normalBias,st.shadowRadius=it.radius,st.shadowMapSize=it.mapSize,i.directionalShadow[g]=st,i.directionalShadowMap[g]=J,i.directionalShadowMatrix[g]=z.shadow.matrix,L++}i.directional[g]=q,g++}else if(z.isSpotLight){let q=t.get(z);q.position.setFromMatrixPosition(z.matrixWorld),q.color.copy(W).multiplyScalar($),q.distance=k,q.coneCos=Math.cos(z.angle),q.penumbraCos=Math.cos(z.angle*(1-z.penumbra)),q.decay=z.decay,i.spot[E]=q;let it=z.shadow;if(z.map&&(i.spotLightMap[w]=z.map,w++,it.updateMatrices(z),z.castShadow&&N++),i.spotLightMatrix[E]=it.matrix,z.castShadow){let st=e.get(z);st.shadowIntensity=it.intensity,st.shadowBias=it.bias,st.shadowNormalBias=it.normalBias,st.shadowRadius=it.radius,st.shadowMapSize=it.mapSize,i.spotShadow[E]=st,i.spotShadowMap[E]=J,C++}E++}else if(z.isRectAreaLight){let q=t.get(z);q.color.copy(W).multiplyScalar($),q.halfWidth.set(z.width*.5,0,0),q.halfHeight.set(0,z.height*.5,0),i.rectArea[P]=q,P++}else if(z.isPointLight){let q=t.get(z);if(q.color.copy(z.color).multiplyScalar(z.intensity),q.distance=z.distance,q.decay=z.decay,z.castShadow){let it=z.shadow,st=e.get(z);st.shadowIntensity=it.intensity,st.shadowBias=it.bias,st.shadowNormalBias=it.normalBias,st.shadowRadius=it.radius,st.shadowMapSize=it.mapSize,st.shadowCameraNear=it.camera.near,st.shadowCameraFar=it.camera.far,i.pointShadow[y]=st,i.pointShadowMap[y]=J,i.pointShadowMatrix[y]=z.shadow.matrix,T++}i.point[y]=q,y++}else if(z.isHemisphereLight){let q=t.get(z);q.skyColor.copy(z.color).multiplyScalar($),q.groundColor.copy(z.groundColor).multiplyScalar($),i.hemi[S]=q,S++}}P>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Vt.LTC_FLOAT_1,i.rectAreaLTC2=Vt.LTC_FLOAT_2):(i.rectAreaLTC1=Vt.LTC_HALF_1,i.rectAreaLTC2=Vt.LTC_HALF_2)),i.ambient[0]=p,i.ambient[1]=x,i.ambient[2]=m;let B=i.hash;(B.sunLength!==_||B.directionalLength!==g||B.pointLength!==y||B.spotLength!==E||B.rectAreaLength!==P||B.hemiLength!==S||B.numSunShadows!==v||B.numDirectionalShadows!==L||B.numPointShadows!==T||B.numSpotShadows!==C||B.numSpotMaps!==w||B.numLightProbes!==F)&&(i.sun.length=_,i.directional.length=g,i.spot.length=E,i.rectArea.length=P,i.point.length=y,i.hemi.length=S,i.sunShadow.length=v,i.sunShadowMap.length=v,i.sunShadowMatrix.length=M,i.sunShadowCascade.length=M,i.directionalShadow.length=L,i.directionalShadowMap.length=L,i.directionalShadowMatrix.length=L,i.pointShadow.length=T,i.pointShadowMap.length=T,i.pointShadowMatrix.length=T,i.spotShadow.length=C,i.spotShadowMap.length=C,i.spotLightMatrix.length=C+w-N,i.spotLightMap.length=w,i.numSpotLightShadowsWithMaps=N,i.numLightProbes=F,B.sunLength=_,B.directionalLength=g,B.pointLength=y,B.spotLength=E,B.rectAreaLength=P,B.hemiLength=S,B.numSunShadows=v,B.numDirectionalShadows=L,B.numPointShadows=T,B.numSpotShadows=C,B.numSpotMaps=w,B.numLightProbes=F,i.version=Cv++)}function u(f,p){let x=0,m=0,_=0,v=0,M=0,g=0,y=p.matrixWorldInverse;for(let E=0,P=f.length;E<P;E++){let S=f[E];if(S.isSunLight){let L=i.sun[x];L.direction.setFromMatrixPosition(S.matrixWorld),L.direction.transformDirection(y),x++}else if(S.isDirectionalLight){let L=i.directional[m];L.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),L.direction.sub(s),L.direction.transformDirection(y),m++}else if(S.isSpotLight){let L=i.spot[v];L.position.setFromMatrixPosition(S.matrixWorld),L.position.applyMatrix4(y),L.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),L.direction.sub(s),L.direction.transformDirection(y),v++}else if(S.isRectAreaLight){let L=i.rectArea[M];L.position.setFromMatrixPosition(S.matrixWorld),L.position.applyMatrix4(y),c.identity(),o.copy(S.matrixWorld),o.premultiply(y),c.extractRotation(o),L.halfWidth.set(S.width*.5,0,0),L.halfHeight.set(0,S.height*.5,0),L.halfWidth.applyMatrix4(c),L.halfHeight.applyMatrix4(c),M++}else if(S.isPointLight){let L=i.point[_];L.position.setFromMatrixPosition(S.matrixWorld),L.position.applyMatrix4(y),_++}else if(S.isHemisphereLight){let L=i.hemi[g];L.direction.setFromMatrixPosition(S.matrixWorld),L.direction.transformDirection(y),g++}}}return{setup:a,setupView:u,state:i}}function vp(n){let t=new Rv(n),e=[],i=[],s=[];function o(m){x.camera=m,e.length=0,i.length=0,s.length=0}function c(m){e.push(m)}function a(m){i.push(m)}function u(m){s.push(m)}function f(){t.setup(e)}function p(m){t.setupView(e,m)}let x={lightsArray:e,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:o,state:x,setupLights:f,setupLightsView:p,pushLight:c,pushShadow:a,pushLightProbeGrid:u}}function Lv(n){let t=new WeakMap;function e(s,o=0){let c=t.get(s),a;return c===void 0?(a=new vp(n),t.set(s,[a])):o>=c.length?(a=new vp(n),c.push(a)):a=c[o],a}function i(){t=new WeakMap}return{get:e,dispose:i}}function Uv(n,t,e){let i=new rr,s=new Jt,o=new Jt,c=new Ye,a=new cl,u=new hl,f={},p=e.maxTextureSize,x={[Qi]:Tn,[Tn]:Qi,[_n]:_n},m=new Bn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Jt},radius:{value:4}},vertexShader:Nv,fragmentShader:Dv}),_=m.clone();_.defines.HORIZONTAL_PASS=1;let v=new Ge;v.setAttribute("position",new ze(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let M=new Ce(v,m),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=No;let y=this.type;this.render=function(T,C,w){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||T.length===0)return;this.type===ud&&(ne("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=No);let N=n.getRenderTarget(),F=n.getActiveCubeFace(),B=n.getActiveMipmapLevel(),H=n.state;H.setBlending(gi),H.buffers.depth.getReversed()===!0?H.buffers.color.setClear(0,0,0,0):H.buffers.color.setClear(1,1,1,1),H.buffers.depth.setTest(!0),H.setScissorTest(!1);let V=y!==this.type;V&&C.traverse(function(z){z.material&&(Array.isArray(z.material)?z.material.forEach(W=>W.needsUpdate=!0):z.material.needsUpdate=!0)});for(let z=0,W=T.length;z<W;z++){let $=T[z],k=$.shadow;if(k===void 0){ne("WebGLShadowMap:",$,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;s.copy(k.mapSize);let J=k.getFrameExtents();s.multiply(J),o.copy(k.mapSize),(s.x>p||s.y>p)&&(s.x>p&&(o.x=Math.floor(p/J.x),s.x=o.x*J.x,k.mapSize.x=o.x),s.y>p&&(o.y=Math.floor(p/J.y),s.y=o.y*J.y,k.mapSize.y=o.y));let q=n.state.buffers.depth.getReversed();if(k.camera._reversedDepth=q,k.map===null||V===!0){if(k.map!==null&&(k.map.depthTexture!==null&&(k.map.depthTexture.dispose(),k.map.depthTexture=null),k.map.dispose()),this.type===fr){if($.isPointLight){ne("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}k.map=new In(s.x,s.y,{format:is,type:ii,minFilter:dn,magFilter:dn,generateMipmaps:!1}),k.map.texture.name=$.name+".shadowMap",k.map.depthTexture=new Wi(s.x,s.y,ni),k.map.depthTexture.name=$.name+".shadowMapDepth",k.map.depthTexture.format=di,k.map.depthTexture.compareFunction=null,k.map.depthTexture.minFilter=hn,k.map.depthTexture.magFilter=hn}else $.isPointLight?(k.map=new mc(s.x),k.map.depthTexture=new al(s.x,ei)):(k.map=new In(s.x,s.y),k.map.depthTexture=new Wi(s.x,s.y,ei)),k.map.depthTexture.name=$.name+".shadowMap",k.map.depthTexture.format=di,this.type===No?(k.map.depthTexture.compareFunction=q?uc:hc,k.map.depthTexture.minFilter=dn,k.map.depthTexture.magFilter=dn):(k.map.depthTexture.compareFunction=null,k.map.depthTexture.minFilter=hn,k.map.depthTexture.magFilter=hn);k.camera.updateProjectionMatrix()}k.map.isWebGLCubeRenderTarget!==!0&&(k.map.width!==s.x||k.map.height!==s.y)&&k.map.setSize(s.x,s.y);let it=k.map.isWebGLCubeRenderTarget?6:k.getViewportCount();$.isPointLight!==!0&&k.updateMatrices($,w);for(let st=0;st<it;st++){let St=k.getCamera(st);if($.isPointLight){let wt=k.camera,$t=k.matrix,Kt=$.distance||wt.far;Kt!==wt.far&&(wt.far=Kt,wt.updateProjectionMatrix()),Go.setFromMatrixPosition($.matrixWorld),wt.position.copy(Go),cu.copy(wt.position),cu.add(Ov[st]),wt.up.copy(Fv[st]),wt.lookAt(cu),wt.updateMatrixWorld(),$t.makeTranslation(-Go.x,-Go.y,-Go.z),bp.multiplyMatrices(wt.projectionMatrix,wt.matrixWorldInverse),k._frustum.setFromProjectionMatrix(bp,wt.coordinateSystem,wt.reversedDepth)}if(k.map.isWebGLCubeRenderTarget)n.setRenderTarget(k.map,st),n.clear();else{st===0&&(n.setRenderTarget(k.map),n.clear());let wt=k.getViewport(st);c.set(o.x*wt.x,o.y*wt.y,o.x*wt.z,o.y*wt.w),H.viewport(c)}i=k.getFrustum(st),S(C,w,St,$,this.type)}k.isPointLightShadow!==!0&&this.type===fr&&E(k,w),k.needsUpdate=!1}y=this.type,g.needsUpdate=!1,n.setRenderTarget(N,F,B)};function E(T,C){let w=t.update(M);m.defines.VSM_SAMPLES!==T.blurSamples&&(m.defines.VSM_SAMPLES=T.blurSamples,_.defines.VSM_SAMPLES=T.blurSamples,m.needsUpdate=!0,_.needsUpdate=!0),T.mapPass===null?T.mapPass=new In(s.x,s.y,{format:is,type:ii}):(T.mapPass.width!==T.map.width||T.mapPass.height!==T.map.height)&&T.mapPass.setSize(T.map.width,T.map.height),m.uniforms.shadow_pass.value=T.map.depthTexture,m.uniforms.resolution.value.set(T.map.width,T.map.height),m.uniforms.radius.value=T.radius,n.setRenderTarget(T.mapPass),n.clear(),n.renderBufferDirect(C,null,w,m,M,null),_.uniforms.shadow_pass.value=T.mapPass.texture,_.uniforms.resolution.value.set(T.map.width,T.map.height),_.uniforms.radius.value=T.radius,n.setRenderTarget(T.map),n.clear(),n.renderBufferDirect(C,null,w,_,M,null)}function P(T,C,w,N){let F=null,B=w.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(B!==void 0)F=B;else if(F=w.isPointLight===!0?u:a,n.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){let H=F.uuid,V=C.uuid,z=f[H];z===void 0&&(z={},f[H]=z);let W=z[V];W===void 0&&(W=F.clone(),z[V]=W,C.addEventListener("dispose",L)),F=W}if(F.visible=C.visible,F.wireframe=C.wireframe,N===fr?F.side=C.shadowSide!==null?C.shadowSide:C.side:F.side=C.shadowSide!==null?C.shadowSide:x[C.side],F.alphaMap=C.alphaMap,F.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,F.map=C.map,F.clipShadows=C.clipShadows,F.clippingPlanes=C.clippingPlanes,F.clipIntersection=C.clipIntersection,F.displacementMap=C.displacementMap,F.displacementScale=C.displacementScale,F.displacementBias=C.displacementBias,F.wireframeLinewidth=C.wireframeLinewidth,F.linewidth=C.linewidth,w.isPointLight===!0&&F.isMeshDistanceMaterial===!0){let H=n.properties.get(F);H.light=w}return F}function S(T,C,w,N,F){if(T.visible===!1)return;if(T.layers.test(C.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&F===fr)&&(!T.frustumCulled||T.intersectsFrustum(i))){T.modelViewMatrix.multiplyMatrices(w.matrixWorldInverse,T.matrixWorld);let V=t.update(T),z=T.material;if(Array.isArray(z)){let W=V.groups;for(let $=0,k=W.length;$<k;$++){let J=W[$],q=z[J.materialIndex];if(q&&q.visible){let it=P(T,q,N,F);T.onBeforeShadow(n,T,C,w,V,it,J),n.renderBufferDirect(w,null,V,it,T,J),T.onAfterShadow(n,T,C,w,V,it,J)}}}else if(z.visible){let W=P(T,z,N,F);T.onBeforeShadow(n,T,C,w,V,W,null),n.renderBufferDirect(w,null,V,W,T,null),T.onAfterShadow(n,T,C,w,V,W,null)}}let H=T.children;for(let V=0,z=H.length;V<z;V++)S(H[V],C,w,N,F)}function L(T){T.target.removeEventListener("dispose",L);for(let w in f){let N=f[w],F=T.target.uuid;F in N&&(N[F].dispose(),delete N[F])}}}function Bv(n,t){function e(){let K=!1,Rt=new Ye,gt=null,Ct=new Ye(0,0,0,0);return{setMask:function(Lt){gt!==Lt&&!K&&(n.colorMask(Lt,Lt,Lt,Lt),gt=Lt)},setLocked:function(Lt){K=Lt},setClear:function(Lt,bt,Zt,Ot,Te){Te===!0&&(Lt*=Ot,bt*=Ot,Zt*=Ot),Rt.set(Lt,bt,Zt,Ot),Ct.equals(Rt)===!1&&(n.clearColor(Lt,bt,Zt,Ot),Ct.copy(Rt))},reset:function(){K=!1,gt=null,Ct.set(-1,0,0,0)}}}function i(){let K=!1,Rt=!1,gt=null,Ct=null,Lt=null;return{setReversed:function(bt){if(Rt!==bt){let Zt=t.get("EXT_clip_control");bt?Zt.clipControlEXT(Zt.LOWER_LEFT_EXT,Zt.ZERO_TO_ONE_EXT):Zt.clipControlEXT(Zt.LOWER_LEFT_EXT,Zt.NEGATIVE_ONE_TO_ONE_EXT),Rt=bt;let Ot=Lt;Lt=null,this.setClear(Ot)}},getReversed:function(){return Rt},setTest:function(bt){bt?pt(n.DEPTH_TEST):Bt(n.DEPTH_TEST)},setMask:function(bt){gt!==bt&&!K&&(n.depthMask(bt),gt=bt)},setFunc:function(bt){if(Rt&&(bt=Wd[bt]),Ct!==bt){switch(bt){case Xa:n.depthFunc(n.NEVER);break;case Wa:n.depthFunc(n.ALWAYS);break;case Ya:n.depthFunc(n.LESS);break;case js:n.depthFunc(n.LEQUAL);break;case $a:n.depthFunc(n.EQUAL);break;case qa:n.depthFunc(n.GEQUAL);break;case Za:n.depthFunc(n.GREATER);break;case Ja:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Ct=bt}},setLocked:function(bt){K=bt},setClear:function(bt){Lt!==bt&&(Lt=bt,Rt&&(bt=1-bt),n.clearDepth(bt))},reset:function(){K=!1,gt=null,Ct=null,Lt=null,Rt=!1}}}function s(){let K=!1,Rt=null,gt=null,Ct=null,Lt=null,bt=null,Zt=null,Ot=null,Te=null;return{setTest:function(Se){K||(Se?pt(n.STENCIL_TEST):Bt(n.STENCIL_TEST))},setMask:function(Se){Rt!==Se&&!K&&(n.stencilMask(Se),Rt=Se)},setFunc:function(Se,bn,An){(gt!==Se||Ct!==bn||Lt!==An)&&(n.stencilFunc(Se,bn,An),gt=Se,Ct=bn,Lt=An)},setOp:function(Se,bn,An){(bt!==Se||Zt!==bn||Ot!==An)&&(n.stencilOp(Se,bn,An),bt=Se,Zt=bn,Ot=An)},setLocked:function(Se){K=Se},setClear:function(Se){Te!==Se&&(n.clearStencil(Se),Te=Se)},reset:function(){K=!1,Rt=null,gt=null,Ct=null,Lt=null,bt=null,Zt=null,Ot=null,Te=null}}}let o=new e,c=new i,a=new s,u=new WeakMap,f=new WeakMap,p={},x={},m={},_=new WeakMap,v=[],M=null,g=!1,y=null,E=null,P=null,S=null,L=null,T=null,C=null,w=new ae(0,0,0),N=0,F=!1,B=null,H=null,V=null,z=null,W=null,$=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),k=!1,J=0,q=n.getParameter(n.VERSION);q.indexOf("WebGL")!==-1?(J=parseFloat(/^WebGL (\d)/.exec(q)[1]),k=J>=1):q.indexOf("OpenGL ES")!==-1&&(J=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),k=J>=2);let it=null,st={},St=n.getParameter(n.SCISSOR_BOX),wt=n.getParameter(n.VIEWPORT),$t=new Ye().fromArray(St),Kt=new Ye().fromArray(wt);function re(K,Rt,gt,Ct){let Lt=new Uint8Array(4),bt=n.createTexture();n.bindTexture(K,bt),n.texParameteri(K,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(K,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Zt=0;Zt<gt;Zt++)K===n.TEXTURE_3D||K===n.TEXTURE_2D_ARRAY?n.texImage3D(Rt,0,n.RGBA,1,1,Ct,0,n.RGBA,n.UNSIGNED_BYTE,Lt):n.texImage2D(Rt+Zt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Lt);return bt}let ct={};ct[n.TEXTURE_2D]=re(n.TEXTURE_2D,n.TEXTURE_2D,1),ct[n.TEXTURE_CUBE_MAP]=re(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),ct[n.TEXTURE_2D_ARRAY]=re(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),ct[n.TEXTURE_3D]=re(n.TEXTURE_3D,n.TEXTURE_3D,1,1),o.setClear(0,0,0,1),c.setClear(1),a.setClear(0),pt(n.DEPTH_TEST),c.setFunc(js),ge(!1),Re(Ah),pt(n.CULL_FACE),_e(gi);function pt(K){p[K]!==!0&&(n.enable(K),p[K]=!0)}function Bt(K){p[K]!==!1&&(n.disable(K),p[K]=!1)}function ie(K,Rt){return m[K]!==Rt?(n.bindFramebuffer(K,Rt),m[K]=Rt,K===n.DRAW_FRAMEBUFFER&&(m[n.FRAMEBUFFER]=Rt),K===n.FRAMEBUFFER&&(m[n.DRAW_FRAMEBUFFER]=Rt),!0):!1}function Ft(K,Rt){let gt=v,Ct=!1;if(K){gt=_.get(Rt),gt===void 0&&(gt=[],_.set(Rt,gt));let Lt=K.textures;if(gt.length!==Lt.length||gt[0]!==n.COLOR_ATTACHMENT0){for(let bt=0,Zt=Lt.length;bt<Zt;bt++)gt[bt]=n.COLOR_ATTACHMENT0+bt;gt.length=Lt.length,Ct=!0}}else gt[0]!==n.BACK&&(gt[0]=n.BACK,Ct=!0);Ct&&n.drawBuffers(gt)}function de(K){return M!==K?(n.useProgram(K),M=K,!0):!1}let qe={[_s]:n.FUNC_ADD,[dd]:n.FUNC_SUBTRACT,[pd]:n.FUNC_REVERSE_SUBTRACT};qe[md]=n.MIN,qe[gd]=n.MAX;let fe={[xd]:n.ZERO,[yd]:n.ONE,[_d]:n.SRC_COLOR,[Rh]:n.SRC_ALPHA,[Ed]:n.SRC_ALPHA_SATURATE,[Sd]:n.DST_COLOR,[bd]:n.DST_ALPHA,[vd]:n.ONE_MINUS_SRC_COLOR,[Lh]:n.ONE_MINUS_SRC_ALPHA,[wd]:n.ONE_MINUS_DST_COLOR,[Md]:n.ONE_MINUS_DST_ALPHA,[Td]:n.CONSTANT_COLOR,[Ad]:n.ONE_MINUS_CONSTANT_COLOR,[Pd]:n.CONSTANT_ALPHA,[Cd]:n.ONE_MINUS_CONSTANT_ALPHA};function _e(K,Rt,gt,Ct,Lt,bt,Zt,Ot,Te,Se){if(K===gi){g===!0&&(Bt(n.BLEND),g=!1);return}if(g===!1&&(pt(n.BLEND),g=!0),K!==fd){if(K!==y||Se!==F){if((E!==_s||L!==_s)&&(n.blendEquation(n.FUNC_ADD),E=_s,L=_s),Se)switch(K){case dr:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Ph:n.blendFunc(n.ONE,n.ONE);break;case Ch:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Ih:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:se("WebGLState: Invalid blending: ",K);break}else switch(K){case dr:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Ph:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Ch:se("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Ih:se("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:se("WebGLState: Invalid blending: ",K);break}P=null,S=null,T=null,C=null,w.set(0,0,0),N=0,y=K,F=Se}return}Lt=Lt||Rt,bt=bt||gt,Zt=Zt||Ct,(Rt!==E||Lt!==L)&&(n.blendEquationSeparate(qe[Rt],qe[Lt]),E=Rt,L=Lt),(gt!==P||Ct!==S||bt!==T||Zt!==C)&&(n.blendFuncSeparate(fe[gt],fe[Ct],fe[bt],fe[Zt]),P=gt,S=Ct,T=bt,C=Zt),(Ot.equals(w)===!1||Te!==N)&&(n.blendColor(Ot.r,Ot.g,Ot.b,Te),w.copy(Ot),N=Te),y=K,F=!1}function Ie(K,Rt){K.side===_n?Bt(n.CULL_FACE):pt(n.CULL_FACE);let gt=K.side===Tn;Rt&&(gt=!gt),ge(gt),K.blending===dr&&K.transparent===!1?_e(gi):_e(K.blending,K.blendEquation,K.blendSrc,K.blendDst,K.blendEquationAlpha,K.blendSrcAlpha,K.blendDstAlpha,K.blendColor,K.blendAlpha,K.premultipliedAlpha),c.setFunc(K.depthFunc),c.setTest(K.depthTest),c.setMask(K.depthWrite),o.setMask(K.colorWrite);let Ct=K.stencilWrite;a.setTest(Ct),Ct&&(a.setMask(K.stencilWriteMask),a.setFunc(K.stencilFunc,K.stencilRef,K.stencilFuncMask),a.setOp(K.stencilFail,K.stencilZFail,K.stencilZPass)),ln(K.polygonOffset,K.polygonOffsetFactor,K.polygonOffsetUnits),K.alphaToCoverage===!0?pt(n.SAMPLE_ALPHA_TO_COVERAGE):Bt(n.SAMPLE_ALPHA_TO_COVERAGE)}function ge(K){B!==K&&(K?n.frontFace(n.CW):n.frontFace(n.CCW),B=K)}function Re(K){K!==cd?(pt(n.CULL_FACE),K!==H&&(K===Ah?n.cullFace(n.BACK):K===hd?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Bt(n.CULL_FACE),H=K}function Je(K){K!==V&&(k&&n.lineWidth(K),V=K)}function ln(K,Rt,gt){K?(pt(n.POLYGON_OFFSET_FILL),(z!==Rt||W!==gt)&&(z=Rt,W=gt,c.getReversed()&&(Rt=-Rt),n.polygonOffset(Rt,gt))):Bt(n.POLYGON_OFFSET_FILL)}function Ue(K){K?pt(n.SCISSOR_TEST):Bt(n.SCISSOR_TEST)}function Xe(K){K===void 0&&(K=n.TEXTURE0+$-1),it!==K&&(n.activeTexture(K),it=K)}function Q(K,Rt,gt){gt===void 0&&(it===null?gt=n.TEXTURE0+$-1:gt=it);let Ct=st[gt];Ct===void 0&&(Ct={type:void 0,texture:void 0},st[gt]=Ct),(Ct.type!==K||Ct.texture!==Rt)&&(it!==gt&&(n.activeTexture(gt),it=gt),n.bindTexture(K,Rt||ct[K]),Ct.type=K,Ct.texture=Rt)}function je(){let K=st[it];K!==void 0&&K.type!==void 0&&(n.bindTexture(K.type,null),K.type=void 0,K.texture=void 0)}function we(){try{n.compressedTexImage2D(...arguments)}catch(K){se("WebGLState:",K)}}function I(){try{n.compressedTexImage3D(...arguments)}catch(K){se("WebGLState:",K)}}function R(){try{n.texSubImage2D(...arguments)}catch(K){se("WebGLState:",K)}}function nt(){try{n.texSubImage3D(...arguments)}catch(K){se("WebGLState:",K)}}function lt(){try{n.compressedTexSubImage2D(...arguments)}catch(K){se("WebGLState:",K)}}function dt(){try{n.compressedTexSubImage3D(...arguments)}catch(K){se("WebGLState:",K)}}function Et(){try{n.texStorage2D(...arguments)}catch(K){se("WebGLState:",K)}}function Tt(){try{n.texStorage3D(...arguments)}catch(K){se("WebGLState:",K)}}function ft(){try{n.texImage2D(...arguments)}catch(K){se("WebGLState:",K)}}function vt(){try{n.texImage3D(...arguments)}catch(K){se("WebGLState:",K)}}function At(K){return x[K]!==void 0?x[K]:n.getParameter(K)}function Gt(K,Rt){x[K]!==Rt&&(n.pixelStorei(K,Rt),x[K]=Rt)}function Nt(K){$t.equals(K)===!1&&(n.scissor(K.x,K.y,K.z,K.w),$t.copy(K))}function Pt(K){Kt.equals(K)===!1&&(n.viewport(K.x,K.y,K.z,K.w),Kt.copy(K))}function Ht(K,Rt){let gt=f.get(Rt);gt===void 0&&(gt=new WeakMap,f.set(Rt,gt));let Ct=gt.get(K);Ct===void 0&&(Ct=n.getUniformBlockIndex(Rt,K.name),gt.set(K,Ct))}function Qt(K,Rt){let Ct=f.get(Rt).get(K);u.get(Rt)!==Ct&&(n.uniformBlockBinding(Rt,Ct,K.__bindingPointIndex),u.set(Rt,Ct))}function le(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),c.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),p={},x={},it=null,st={},m={},_=new WeakMap,v=[],M=null,g=!1,y=null,E=null,P=null,S=null,L=null,T=null,C=null,w=new ae(0,0,0),N=0,F=!1,B=null,H=null,V=null,z=null,W=null,$t.set(0,0,n.canvas.width,n.canvas.height),Kt.set(0,0,n.canvas.width,n.canvas.height),o.reset(),c.reset(),a.reset()}return{buffers:{color:o,depth:c,stencil:a},enable:pt,disable:Bt,bindFramebuffer:ie,drawBuffers:Ft,useProgram:de,setBlending:_e,setMaterial:Ie,setFlipSided:ge,setCullFace:Re,setLineWidth:Je,setPolygonOffset:ln,setScissorTest:Ue,activeTexture:Xe,bindTexture:Q,unbindTexture:je,compressedTexImage2D:we,compressedTexImage3D:I,texImage2D:ft,texImage3D:vt,pixelStorei:Gt,getParameter:At,updateUBOMapping:Ht,uniformBlockBinding:Qt,texStorage2D:Et,texStorage3D:Tt,texSubImage2D:R,texSubImage3D:nt,compressedTexSubImage2D:lt,compressedTexSubImage3D:dt,scissor:Nt,viewport:Pt,reset:le}}function kv(n,t,e,i,s,o,c){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,u=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),f=new Jt,p=new WeakMap,x=new Set,m,_=new WeakMap,v=!1;try{v=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(I,R){return v?new OffscreenCanvas(I,R):ao("canvas")}function g(I,R,nt){let lt=1,dt=we(I);if((dt.width>nt||dt.height>nt)&&(lt=nt/Math.max(dt.width,dt.height)),lt<1)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap||typeof VideoFrame<"u"&&I instanceof VideoFrame){let Et=Math.floor(lt*dt.width),Tt=Math.floor(lt*dt.height);m===void 0&&(m=M(Et,Tt));let ft=R?M(Et,Tt):m;return ft.width=Et,ft.height=Tt,ft.getContext("2d").drawImage(I,0,0,Et,Tt),ne("WebGLRenderer: Texture has been resized from ("+dt.width+"x"+dt.height+") to ("+Et+"x"+Tt+")."),ft}else return"data"in I&&ne("WebGLRenderer: Image in DataTexture is too big ("+dt.width+"x"+dt.height+")."),I;return I}function y(I){return I.generateMipmaps}function E(I){n.generateMipmap(I)}function P(I){return I.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:I.isWebGL3DRenderTarget?n.TEXTURE_3D:I.isWebGLArrayRenderTarget||I.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function S(I,R,nt,lt,dt,Et=!1){if(I!==null){if(n[I]!==void 0)return n[I];ne("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let Tt;lt&&(Tt=t.get("EXT_texture_norm16"),Tt||ne("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ft=R;if(R===n.RED&&(nt===n.FLOAT&&(ft=n.R32F),nt===n.HALF_FLOAT&&(ft=n.R16F),nt===n.UNSIGNED_BYTE&&(ft=n.R8),nt===n.UNSIGNED_SHORT&&Tt&&(ft=Tt.R16_EXT),nt===n.SHORT&&Tt&&(ft=Tt.R16_SNORM_EXT)),R===n.RED_INTEGER&&(nt===n.UNSIGNED_BYTE&&(ft=n.R8UI),nt===n.UNSIGNED_SHORT&&(ft=n.R16UI),nt===n.UNSIGNED_INT&&(ft=n.R32UI),nt===n.BYTE&&(ft=n.R8I),nt===n.SHORT&&(ft=n.R16I),nt===n.INT&&(ft=n.R32I)),R===n.RG&&(nt===n.FLOAT&&(ft=n.RG32F),nt===n.HALF_FLOAT&&(ft=n.RG16F),nt===n.UNSIGNED_BYTE&&(ft=n.RG8),nt===n.UNSIGNED_SHORT&&Tt&&(ft=Tt.RG16_EXT),nt===n.SHORT&&Tt&&(ft=Tt.RG16_SNORM_EXT)),R===n.RG_INTEGER&&(nt===n.UNSIGNED_BYTE&&(ft=n.RG8UI),nt===n.UNSIGNED_SHORT&&(ft=n.RG16UI),nt===n.UNSIGNED_INT&&(ft=n.RG32UI),nt===n.BYTE&&(ft=n.RG8I),nt===n.SHORT&&(ft=n.RG16I),nt===n.INT&&(ft=n.RG32I)),R===n.RGB_INTEGER&&(nt===n.UNSIGNED_BYTE&&(ft=n.RGB8UI),nt===n.UNSIGNED_SHORT&&(ft=n.RGB16UI),nt===n.UNSIGNED_INT&&(ft=n.RGB32UI),nt===n.BYTE&&(ft=n.RGB8I),nt===n.SHORT&&(ft=n.RGB16I),nt===n.INT&&(ft=n.RGB32I)),R===n.RGBA_INTEGER&&(nt===n.UNSIGNED_BYTE&&(ft=n.RGBA8UI),nt===n.UNSIGNED_SHORT&&(ft=n.RGBA16UI),nt===n.UNSIGNED_INT&&(ft=n.RGBA32UI),nt===n.BYTE&&(ft=n.RGBA8I),nt===n.SHORT&&(ft=n.RGBA16I),nt===n.INT&&(ft=n.RGBA32I)),R===n.RGB&&(nt===n.UNSIGNED_SHORT&&Tt&&(ft=Tt.RGB16_EXT),nt===n.SHORT&&Tt&&(ft=Tt.RGB16_SNORM_EXT),nt===n.UNSIGNED_INT_5_9_9_9_REV&&(ft=n.RGB9_E5),nt===n.UNSIGNED_INT_10F_11F_11F_REV&&(ft=n.R11F_G11F_B10F)),R===n.RGBA){let vt=Et?oo:Me.getTransfer(dt);nt===n.FLOAT&&(ft=n.RGBA32F),nt===n.HALF_FLOAT&&(ft=n.RGBA16F),nt===n.UNSIGNED_BYTE&&(ft=vt===Le?n.SRGB8_ALPHA8:n.RGBA8),nt===n.UNSIGNED_SHORT&&Tt&&(ft=Tt.RGBA16_EXT),nt===n.SHORT&&Tt&&(ft=Tt.RGBA16_SNORM_EXT),nt===n.UNSIGNED_SHORT_4_4_4_4&&(ft=n.RGBA4),nt===n.UNSIGNED_SHORT_5_5_5_1&&(ft=n.RGB5_A1)}return(ft===n.R16F||ft===n.R32F||ft===n.RG16F||ft===n.RG32F||ft===n.RGBA16F||ft===n.RGBA32F)&&t.get("EXT_color_buffer_float"),ft}function L(I,R){let nt;return I?R===null||R===ei||R===mr?nt=n.DEPTH24_STENCIL8:R===ni?nt=n.DEPTH32F_STENCIL8:R===pr&&(nt=n.DEPTH24_STENCIL8,ne("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):R===null||R===ei||R===mr?nt=n.DEPTH_COMPONENT24:R===ni?nt=n.DEPTH_COMPONENT32F:R===pr&&(nt=n.DEPTH_COMPONENT16),nt}function T(I,R){return y(I)===!0||I.isFramebufferTexture&&I.minFilter!==hn&&I.minFilter!==dn?Math.log2(Math.max(R.width,R.height))+1:I.mipmaps!==void 0&&I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?R.mipmaps.length:1}function C(I){let R=I.target;R.removeEventListener("dispose",C),N(R),R.isVideoTexture&&p.delete(R),R.isHTMLTexture&&x.delete(R)}function w(I){let R=I.target;R.removeEventListener("dispose",w),B(R)}function N(I){let R=i.get(I);if(R.__webglInit===void 0)return;let nt=I.source,lt=_.get(nt);if(lt){let dt=lt[R.__cacheKey];dt.usedTimes--,dt.usedTimes===0&&F(I),Object.keys(lt).length===0&&_.delete(nt)}i.remove(I)}function F(I){let R=i.get(I);n.deleteTexture(R.__webglTexture);let nt=I.source,lt=_.get(nt);delete lt[R.__cacheKey],c.memory.textures--}function B(I){let R=i.get(I);if(I.depthTexture&&(I.depthTexture.dispose(),i.remove(I.depthTexture)),I.isWebGLCubeRenderTarget)for(let lt=0;lt<6;lt++){if(Array.isArray(R.__webglFramebuffer[lt]))for(let dt=0;dt<R.__webglFramebuffer[lt].length;dt++)n.deleteFramebuffer(R.__webglFramebuffer[lt][dt]);else n.deleteFramebuffer(R.__webglFramebuffer[lt]);R.__webglDepthbuffer&&n.deleteRenderbuffer(R.__webglDepthbuffer[lt])}else{if(Array.isArray(R.__webglFramebuffer))for(let lt=0;lt<R.__webglFramebuffer.length;lt++)n.deleteFramebuffer(R.__webglFramebuffer[lt]);else n.deleteFramebuffer(R.__webglFramebuffer);if(R.__webglDepthbuffer&&n.deleteRenderbuffer(R.__webglDepthbuffer),R.__webglMultisampledFramebuffer&&n.deleteFramebuffer(R.__webglMultisampledFramebuffer),R.__webglColorRenderbuffer)for(let lt=0;lt<R.__webglColorRenderbuffer.length;lt++)R.__webglColorRenderbuffer[lt]&&n.deleteRenderbuffer(R.__webglColorRenderbuffer[lt]);R.__webglDepthRenderbuffer&&n.deleteRenderbuffer(R.__webglDepthRenderbuffer)}let nt=I.textures;for(let lt=0,dt=nt.length;lt<dt;lt++){let Et=i.get(nt[lt]);Et.__webglTexture&&(n.deleteTexture(Et.__webglTexture),c.memory.textures--),i.remove(nt[lt])}i.remove(I)}let H=0;function V(){H=0}function z(){return H}function W(I){H=I}function $(){let I=H;return I>=s.maxTextures&&ne("WebGLTextures: Trying to use "+(I+1)+" texture units while this GPU supports only "+s.maxTextures),H+=1,I}function k(I){let R=[];return R.push(I.wrapS),R.push(I.wrapT),R.push(I.wrapR||0),R.push(I.magFilter),R.push(I.minFilter),R.push(I.anisotropy),R.push(I.internalFormat),R.push(I.format),R.push(I.type),R.push(I.generateMipmaps),R.push(I.premultiplyAlpha),R.push(I.flipY),R.push(I.unpackAlignment),R.push(I.colorSpace),R.join()}function J(I,R){let nt=i.get(I);if(I.isVideoTexture&&Q(I),I.isRenderTargetTexture===!1&&I.isExternalTexture!==!0&&I.version>0&&nt.__version!==I.version){let lt=I.image;if(lt===null)ne("WebGLRenderer: Texture marked for update but no image data found.");else if(lt.complete===!1)ne("WebGLRenderer: Texture marked for update but image is incomplete");else{Bt(nt,I,R);return}}else I.isExternalTexture&&(nt.__webglTexture=I.sourceTexture?I.sourceTexture:null);e.bindTexture(n.TEXTURE_2D,nt.__webglTexture,n.TEXTURE0+R)}function q(I,R){let nt=i.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&nt.__version!==I.version){Bt(nt,I,R);return}else I.isExternalTexture&&(nt.__webglTexture=I.sourceTexture?I.sourceTexture:null);e.bindTexture(n.TEXTURE_2D_ARRAY,nt.__webglTexture,n.TEXTURE0+R)}function it(I,R){let nt=i.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&nt.__version!==I.version){Bt(nt,I,R);return}e.bindTexture(n.TEXTURE_3D,nt.__webglTexture,n.TEXTURE0+R)}function st(I,R){let nt=i.get(I);if(I.isCubeDepthTexture!==!0&&I.version>0&&nt.__version!==I.version){ie(nt,I,R);return}e.bindTexture(n.TEXTURE_CUBE_MAP,nt.__webglTexture,n.TEXTURE0+R)}let St={[ja]:n.REPEAT,[fi]:n.CLAMP_TO_EDGE,[Ka]:n.MIRRORED_REPEAT},wt={[hn]:n.NEAREST,[Ld]:n.NEAREST_MIPMAP_NEAREST,[Oo]:n.NEAREST_MIPMAP_LINEAR,[dn]:n.LINEAR,[Tl]:n.LINEAR_MIPMAP_NEAREST,[es]:n.LINEAR_MIPMAP_LINEAR},$t={[Fd]:n.NEVER,[Vd]:n.ALWAYS,[Ud]:n.LESS,[hc]:n.LEQUAL,[Bd]:n.EQUAL,[uc]:n.GEQUAL,[kd]:n.GREATER,[zd]:n.NOTEQUAL};function Kt(I,R){if(R.type===ni&&t.has("OES_texture_float_linear")===!1&&(R.magFilter===dn||R.magFilter===Tl||R.magFilter===Oo||R.magFilter===es||R.minFilter===dn||R.minFilter===Tl||R.minFilter===Oo||R.minFilter===es)&&ne("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(I,n.TEXTURE_WRAP_S,St[R.wrapS]),n.texParameteri(I,n.TEXTURE_WRAP_T,St[R.wrapT]),(I===n.TEXTURE_3D||I===n.TEXTURE_2D_ARRAY)&&n.texParameteri(I,n.TEXTURE_WRAP_R,St[R.wrapR]),n.texParameteri(I,n.TEXTURE_MAG_FILTER,wt[R.magFilter]),n.texParameteri(I,n.TEXTURE_MIN_FILTER,wt[R.minFilter]),R.compareFunction&&(n.texParameteri(I,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(I,n.TEXTURE_COMPARE_FUNC,$t[R.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(R.magFilter===hn||R.minFilter!==Oo&&R.minFilter!==es||R.type===ni&&t.has("OES_texture_float_linear")===!1)return;if(R.anisotropy>1||i.get(R).__currentAnisotropy){let nt=t.get("EXT_texture_filter_anisotropic");n.texParameterf(I,nt.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(R.anisotropy,s.getMaxAnisotropy())),i.get(R).__currentAnisotropy=R.anisotropy}}}function re(I,R){let nt=!1;I.__webglInit===void 0&&(I.__webglInit=!0,R.addEventListener("dispose",C));let lt=R.source,dt=_.get(lt);dt===void 0&&(dt={},_.set(lt,dt));let Et=k(R);if(Et!==I.__cacheKey){dt[Et]===void 0&&(dt[Et]={texture:n.createTexture(),usedTimes:0},c.memory.textures++,nt=!0),dt[Et].usedTimes++;let Tt=dt[I.__cacheKey];Tt!==void 0&&(dt[I.__cacheKey].usedTimes--,Tt.usedTimes===0&&F(R)),I.__cacheKey=Et,I.__webglTexture=dt[Et].texture}return nt}function ct(I,R,nt){return Math.floor(Math.floor(I/nt)/R)}function pt(I,R,nt,lt){let Et=I.updateRanges;if(Et.length===0)e.texSubImage2D(n.TEXTURE_2D,0,0,0,R.width,R.height,nt,lt,R.data);else{Et.sort((Gt,Nt)=>Gt.start-Nt.start);let Tt=0;for(let Gt=1;Gt<Et.length;Gt++){let Nt=Et[Tt],Pt=Et[Gt],Ht=Nt.start+Nt.count,Qt=ct(Pt.start,R.width,4),le=ct(Nt.start,R.width,4);Pt.start<=Ht+1&&Qt===le&&ct(Pt.start+Pt.count-1,R.width,4)===Qt?Nt.count=Math.max(Nt.count,Pt.start+Pt.count-Nt.start):(++Tt,Et[Tt]=Pt)}Et.length=Tt+1;let ft=e.getParameter(n.UNPACK_ROW_LENGTH),vt=e.getParameter(n.UNPACK_SKIP_PIXELS),At=e.getParameter(n.UNPACK_SKIP_ROWS);e.pixelStorei(n.UNPACK_ROW_LENGTH,R.width);for(let Gt=0,Nt=Et.length;Gt<Nt;Gt++){let Pt=Et[Gt],Ht=Math.floor(Pt.start/4),Qt=Math.ceil(Pt.count/4),le=Ht%R.width,K=Math.floor(Ht/R.width),Rt=Qt,gt=1;e.pixelStorei(n.UNPACK_SKIP_PIXELS,le),e.pixelStorei(n.UNPACK_SKIP_ROWS,K),e.texSubImage2D(n.TEXTURE_2D,0,le,K,Rt,gt,nt,lt,R.data)}I.clearUpdateRanges(),e.pixelStorei(n.UNPACK_ROW_LENGTH,ft),e.pixelStorei(n.UNPACK_SKIP_PIXELS,vt),e.pixelStorei(n.UNPACK_SKIP_ROWS,At)}}function Bt(I,R,nt){let lt=n.TEXTURE_2D;(R.isDataArrayTexture||R.isCompressedArrayTexture)&&(lt=n.TEXTURE_2D_ARRAY),R.isData3DTexture&&(lt=n.TEXTURE_3D);let dt=re(I,R),Et=R.source;e.bindTexture(lt,I.__webglTexture,n.TEXTURE0+nt);let Tt=i.get(Et);if(Et.version!==Tt.__version||dt===!0){if(e.activeTexture(n.TEXTURE0+nt),(typeof ImageBitmap<"u"&&R.image instanceof ImageBitmap)===!1){let gt=Me.getPrimaries(Me.workingColorSpace),Ct=R.colorSpace===Ii?null:Me.getPrimaries(R.colorSpace),Lt=R.colorSpace===Ii||gt===Ct?n.NONE:n.BROWSER_DEFAULT_WEBGL;e.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,R.flipY),e.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),e.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Lt)}e.pixelStorei(n.UNPACK_ALIGNMENT,R.unpackAlignment);let vt=g(R.image,!1,s.maxTextureSize);vt=je(R,vt);let At=o.convert(R.format,R.colorSpace),Gt=o.convert(R.type),Nt=S(R.internalFormat,At,Gt,R.normalized,R.colorSpace,R.isVideoTexture);Kt(lt,R);let Pt,Ht=R.mipmaps,Qt=R.isVideoTexture!==!0,le=Tt.__version===void 0||dt===!0,K=Et.dataReady,Rt=T(R,vt);if(R.isDepthTexture)Nt=L(R.format===ns,R.type),le&&(Qt?e.texStorage2D(n.TEXTURE_2D,1,Nt,vt.width,vt.height):e.texImage2D(n.TEXTURE_2D,0,Nt,vt.width,vt.height,0,At,Gt,null));else if(R.isDataTexture)if(Ht.length>0){Qt&&le&&e.texStorage2D(n.TEXTURE_2D,Rt,Nt,Ht[0].width,Ht[0].height);for(let gt=0,Ct=Ht.length;gt<Ct;gt++)Pt=Ht[gt],Qt?K&&e.texSubImage2D(n.TEXTURE_2D,gt,0,0,Pt.width,Pt.height,At,Gt,Pt.data):e.texImage2D(n.TEXTURE_2D,gt,Nt,Pt.width,Pt.height,0,At,Gt,Pt.data);R.generateMipmaps=!1}else Qt?(le&&e.texStorage2D(n.TEXTURE_2D,Rt,Nt,vt.width,vt.height),K&&pt(R,vt,At,Gt)):e.texImage2D(n.TEXTURE_2D,0,Nt,vt.width,vt.height,0,At,Gt,vt.data);else if(R.isCompressedTexture)if(R.isCompressedArrayTexture){Qt&&le&&e.texStorage3D(n.TEXTURE_2D_ARRAY,Rt,Nt,Ht[0].width,Ht[0].height,vt.depth);for(let gt=0,Ct=Ht.length;gt<Ct;gt++)if(Pt=Ht[gt],R.format!==Wn)if(At!==null)if(Qt){if(K)if(R.layerUpdates.size>0){let Lt=nu(Pt.width,Pt.height,R.format,R.type);for(let bt of R.layerUpdates){let Zt=Pt.data.subarray(bt*Lt/Pt.data.BYTES_PER_ELEMENT,(bt+1)*Lt/Pt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,gt,0,0,bt,Pt.width,Pt.height,1,At,Zt)}}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,gt,0,0,0,Pt.width,Pt.height,vt.depth,At,Pt.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,gt,Nt,Pt.width,Pt.height,vt.depth,0,Pt.data,0,0);else ne("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Qt?K&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,gt,0,0,0,Pt.width,Pt.height,vt.depth,At,Gt,Pt.data):e.texImage3D(n.TEXTURE_2D_ARRAY,gt,Nt,Pt.width,Pt.height,vt.depth,0,At,Gt,Pt.data);R.layerUpdates.size>0&&R.clearLayerUpdates()}else{Qt&&le&&e.texStorage2D(n.TEXTURE_2D,Rt,Nt,Ht[0].width,Ht[0].height);for(let gt=0,Ct=Ht.length;gt<Ct;gt++)Pt=Ht[gt],R.format!==Wn?At!==null?Qt?K&&e.compressedTexSubImage2D(n.TEXTURE_2D,gt,0,0,Pt.width,Pt.height,At,Pt.data):e.compressedTexImage2D(n.TEXTURE_2D,gt,Nt,Pt.width,Pt.height,0,Pt.data):ne("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Qt?K&&e.texSubImage2D(n.TEXTURE_2D,gt,0,0,Pt.width,Pt.height,At,Gt,Pt.data):e.texImage2D(n.TEXTURE_2D,gt,Nt,Pt.width,Pt.height,0,At,Gt,Pt.data)}else if(R.isDataArrayTexture)if(Qt){if(le&&e.texStorage3D(n.TEXTURE_2D_ARRAY,Rt,Nt,vt.width,vt.height,vt.depth),K)if(R.layerUpdates.size>0){let gt=nu(vt.width,vt.height,R.format,R.type);for(let Ct of R.layerUpdates){let Lt=vt.data.subarray(Ct*gt/vt.data.BYTES_PER_ELEMENT,(Ct+1)*gt/vt.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,Ct,vt.width,vt.height,1,At,Gt,Lt)}R.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,vt.width,vt.height,vt.depth,At,Gt,vt.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,Nt,vt.width,vt.height,vt.depth,0,At,Gt,vt.data);else if(R.isData3DTexture)Qt?(le&&e.texStorage3D(n.TEXTURE_3D,Rt,Nt,vt.width,vt.height,vt.depth),K&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,vt.width,vt.height,vt.depth,At,Gt,vt.data)):e.texImage3D(n.TEXTURE_3D,0,Nt,vt.width,vt.height,vt.depth,0,At,Gt,vt.data);else if(R.isFramebufferTexture){if(le)if(Qt)e.texStorage2D(n.TEXTURE_2D,Rt,Nt,vt.width,vt.height);else{let gt=vt.width,Ct=vt.height;for(let Lt=0;Lt<Rt;Lt++)e.texImage2D(n.TEXTURE_2D,Lt,Nt,gt,Ct,0,At,Gt,null),gt>>=1,Ct>>=1}}else if(R.isHTMLTexture){if("texElementImage2D"in n){let gt=n.canvas;if(gt.hasAttribute("layoutsubtree")||gt.setAttribute("layoutsubtree","true"),vt.parentNode!==gt){gt.appendChild(vt),x.add(R),gt.onpaint=Ct=>{let Lt=Ct.changedElements;for(let bt of x)Lt.includes(bt.image)&&(bt.needsUpdate=!0)},gt.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,vt);else{let Lt=n.RGBA,bt=n.RGBA,Zt=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,Lt,bt,Zt,vt)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(Ht.length>0){if(Qt&&le){let gt=we(Ht[0]);e.texStorage2D(n.TEXTURE_2D,Rt,Nt,gt.width,gt.height)}for(let gt=0,Ct=Ht.length;gt<Ct;gt++)Pt=Ht[gt],Qt?K&&e.texSubImage2D(n.TEXTURE_2D,gt,0,0,At,Gt,Pt):e.texImage2D(n.TEXTURE_2D,gt,Nt,At,Gt,Pt);R.generateMipmaps=!1}else if(Qt){if(le){let gt=we(vt);e.texStorage2D(n.TEXTURE_2D,Rt,Nt,gt.width,gt.height)}K&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,At,Gt,vt)}else e.texImage2D(n.TEXTURE_2D,0,Nt,At,Gt,vt);y(R)&&E(lt),Tt.__version=Et.version,R.onUpdate&&R.onUpdate(R)}I.__version=R.version}function ie(I,R,nt){if(R.image.length!==6)return;let lt=re(I,R),dt=R.source;e.bindTexture(n.TEXTURE_CUBE_MAP,I.__webglTexture,n.TEXTURE0+nt);let Et=i.get(dt);if(dt.version!==Et.__version||lt===!0){e.activeTexture(n.TEXTURE0+nt);let Tt=Me.getPrimaries(Me.workingColorSpace),ft=R.colorSpace===Ii?null:Me.getPrimaries(R.colorSpace),vt=R.colorSpace===Ii||Tt===ft?n.NONE:n.BROWSER_DEFAULT_WEBGL;e.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,R.flipY),e.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),e.pixelStorei(n.UNPACK_ALIGNMENT,R.unpackAlignment),e.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,vt);let At=R.isCompressedTexture||R.image[0].isCompressedTexture,Gt=R.image[0]&&R.image[0].isDataTexture,Nt=[];for(let bt=0;bt<6;bt++)!At&&!Gt?Nt[bt]=g(R.image[bt],!0,s.maxCubemapSize):Nt[bt]=Gt?R.image[bt].image:R.image[bt],Nt[bt]=je(R,Nt[bt]);let Pt=Nt[0],Ht=o.convert(R.format,R.colorSpace),Qt=o.convert(R.type),le=S(R.internalFormat,Ht,Qt,R.normalized,R.colorSpace),K=R.isVideoTexture!==!0,Rt=Et.__version===void 0||lt===!0,gt=dt.dataReady,Ct=T(R,Pt);Kt(n.TEXTURE_CUBE_MAP,R);let Lt;if(At){K&&Rt&&e.texStorage2D(n.TEXTURE_CUBE_MAP,Ct,le,Pt.width,Pt.height);for(let bt=0;bt<6;bt++){Lt=Nt[bt].mipmaps;for(let Zt=0;Zt<Lt.length;Zt++){let Ot=Lt[Zt];R.format!==Wn?Ht!==null?K?gt&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+bt,Zt,0,0,Ot.width,Ot.height,Ht,Ot.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+bt,Zt,le,Ot.width,Ot.height,0,Ot.data):ne("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):K?gt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+bt,Zt,0,0,Ot.width,Ot.height,Ht,Qt,Ot.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+bt,Zt,le,Ot.width,Ot.height,0,Ht,Qt,Ot.data)}}}else{if(Lt=R.mipmaps,K&&Rt){Lt.length>0&&Ct++;let bt=we(Nt[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,Ct,le,bt.width,bt.height)}for(let bt=0;bt<6;bt++)if(Gt){K?gt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+bt,0,0,0,Nt[bt].width,Nt[bt].height,Ht,Qt,Nt[bt].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+bt,0,le,Nt[bt].width,Nt[bt].height,0,Ht,Qt,Nt[bt].data);for(let Zt=0;Zt<Lt.length;Zt++){let Te=Lt[Zt].image[bt].image;K?gt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+bt,Zt+1,0,0,Te.width,Te.height,Ht,Qt,Te.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+bt,Zt+1,le,Te.width,Te.height,0,Ht,Qt,Te.data)}}else{K?gt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+bt,0,0,0,Ht,Qt,Nt[bt]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+bt,0,le,Ht,Qt,Nt[bt]);for(let Zt=0;Zt<Lt.length;Zt++){let Ot=Lt[Zt];K?gt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+bt,Zt+1,0,0,Ht,Qt,Ot.image[bt]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+bt,Zt+1,le,Ht,Qt,Ot.image[bt])}}}y(R)&&E(n.TEXTURE_CUBE_MAP),Et.__version=dt.version,R.onUpdate&&R.onUpdate(R)}I.__version=R.version}function Ft(I,R,nt,lt,dt,Et){let Tt=o.convert(nt.format,nt.colorSpace),ft=o.convert(nt.type),vt=S(nt.internalFormat,Tt,ft,nt.normalized,nt.colorSpace),At=i.get(R),Gt=i.get(nt);if(Gt.__renderTarget=R,!At.__hasExternalTextures){let Nt=Math.max(1,R.width>>Et),Pt=Math.max(1,R.height>>Et);dt===n.TEXTURE_3D||dt===n.TEXTURE_2D_ARRAY?e.texImage3D(dt,Et,vt,Nt,Pt,R.depth,0,Tt,ft,null):e.texImage2D(dt,Et,vt,Nt,Pt,0,Tt,ft,null)}e.bindFramebuffer(n.FRAMEBUFFER,I),Xe(R)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,lt,dt,Gt.__webglTexture,0,Ue(R)):(dt===n.TEXTURE_2D||dt>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&dt<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,lt,dt,Gt.__webglTexture,Et),e.bindFramebuffer(n.FRAMEBUFFER,null)}function de(I,R,nt){if(n.bindRenderbuffer(n.RENDERBUFFER,I),R.depthBuffer){let lt=R.depthTexture,dt=lt&&lt.isDepthTexture?lt.type:null,Et=L(R.stencilBuffer,dt),Tt=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;Xe(R)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ue(R),Et,R.width,R.height):nt?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ue(R),Et,R.width,R.height):n.renderbufferStorage(n.RENDERBUFFER,Et,R.width,R.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Tt,n.RENDERBUFFER,I)}else{let lt=R.textures;for(let dt=0;dt<lt.length;dt++){let Et=lt[dt],Tt=o.convert(Et.format,Et.colorSpace),ft=o.convert(Et.type),vt=S(Et.internalFormat,Tt,ft,Et.normalized,Et.colorSpace);Xe(R)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ue(R),vt,R.width,R.height):nt?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ue(R),vt,R.width,R.height):n.renderbufferStorage(n.RENDERBUFFER,vt,R.width,R.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function qe(I,R,nt){let lt=R.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(n.FRAMEBUFFER,I),!(R.depthTexture&&R.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let dt=i.get(R.depthTexture);if(dt.__renderTarget=R,(!dt.__webglTexture||R.depthTexture.image.width!==R.width||R.depthTexture.image.height!==R.height)&&(R.depthTexture.image.width=R.width,R.depthTexture.image.height=R.height,R.depthTexture.needsUpdate=!0),lt){if(dt.__webglInit===void 0&&(dt.__webglInit=!0,R.depthTexture.addEventListener("dispose",C)),dt.__webglTexture===void 0){dt.__webglTexture=n.createTexture(),e.bindTexture(n.TEXTURE_CUBE_MAP,dt.__webglTexture),Kt(n.TEXTURE_CUBE_MAP,R.depthTexture);let At=o.convert(R.depthTexture.format),Gt=o.convert(R.depthTexture.type),Nt;R.depthTexture.format===di?Nt=n.DEPTH_COMPONENT24:R.depthTexture.format===ns&&(Nt=n.DEPTH24_STENCIL8);for(let Pt=0;Pt<6;Pt++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Pt,0,Nt,R.width,R.height,0,At,Gt,null)}}else J(R.depthTexture,0);let Et=dt.__webglTexture,Tt=Ue(R),ft=lt?n.TEXTURE_CUBE_MAP_POSITIVE_X+nt:n.TEXTURE_2D,vt=R.depthTexture.format===ns?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(R.depthTexture.format===di)Xe(R)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,vt,ft,Et,0,Tt):n.framebufferTexture2D(n.FRAMEBUFFER,vt,ft,Et,0);else if(R.depthTexture.format===ns)Xe(R)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,vt,ft,Et,0,Tt):n.framebufferTexture2D(n.FRAMEBUFFER,vt,ft,Et,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function fe(I){let R=i.get(I),nt=I.isWebGLCubeRenderTarget===!0;if(R.__boundDepthTexture!==I.depthTexture){let lt=I.depthTexture;if(R.__depthDisposeCallback&&R.__depthDisposeCallback(),lt){let dt=()=>{delete R.__boundDepthTexture,delete R.__depthDisposeCallback,lt.removeEventListener("dispose",dt)};lt.addEventListener("dispose",dt),R.__depthDisposeCallback=dt}R.__boundDepthTexture=lt}if(I.depthTexture&&!R.__autoAllocateDepthBuffer)if(nt)for(let lt=0;lt<6;lt++)qe(R.__webglFramebuffer[lt],I,lt);else{let lt=I.texture.mipmaps;lt&&lt.length>0?qe(R.__webglFramebuffer[0],I,0):qe(R.__webglFramebuffer,I,0)}else if(nt){R.__webglDepthbuffer=[];for(let lt=0;lt<6;lt++)if(e.bindFramebuffer(n.FRAMEBUFFER,R.__webglFramebuffer[lt]),R.__webglDepthbuffer[lt]===void 0)R.__webglDepthbuffer[lt]=n.createRenderbuffer(),de(R.__webglDepthbuffer[lt],I,!1);else{let dt=I.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Et=R.__webglDepthbuffer[lt];n.bindRenderbuffer(n.RENDERBUFFER,Et),n.framebufferRenderbuffer(n.FRAMEBUFFER,dt,n.RENDERBUFFER,Et)}}else{let lt=I.texture.mipmaps;if(lt&&lt.length>0?e.bindFramebuffer(n.FRAMEBUFFER,R.__webglFramebuffer[0]):e.bindFramebuffer(n.FRAMEBUFFER,R.__webglFramebuffer),R.__webglDepthbuffer===void 0)R.__webglDepthbuffer=n.createRenderbuffer(),de(R.__webglDepthbuffer,I,!1);else{let dt=I.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Et=R.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,Et),n.framebufferRenderbuffer(n.FRAMEBUFFER,dt,n.RENDERBUFFER,Et)}}e.bindFramebuffer(n.FRAMEBUFFER,null)}function _e(I,R,nt){let lt=i.get(I);R!==void 0&&Ft(lt.__webglFramebuffer,I,I.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),nt!==void 0&&fe(I)}function Ie(I){let R=I.texture,nt=i.get(I),lt=i.get(R);I.addEventListener("dispose",w);let dt=I.textures,Et=I.isWebGLCubeRenderTarget===!0,Tt=dt.length>1;if(Tt||(lt.__webglTexture===void 0&&(lt.__webglTexture=n.createTexture()),lt.__version=R.version,c.memory.textures++),Et){nt.__webglFramebuffer=[];for(let ft=0;ft<6;ft++)if(R.mipmaps&&R.mipmaps.length>0){nt.__webglFramebuffer[ft]=[];for(let vt=0;vt<R.mipmaps.length;vt++)nt.__webglFramebuffer[ft][vt]=n.createFramebuffer()}else nt.__webglFramebuffer[ft]=n.createFramebuffer()}else{if(R.mipmaps&&R.mipmaps.length>0){nt.__webglFramebuffer=[];for(let ft=0;ft<R.mipmaps.length;ft++)nt.__webglFramebuffer[ft]=n.createFramebuffer()}else nt.__webglFramebuffer=n.createFramebuffer();if(Tt)for(let ft=0,vt=dt.length;ft<vt;ft++){let At=i.get(dt[ft]);At.__webglTexture===void 0&&(At.__webglTexture=n.createTexture(),c.memory.textures++)}if(I.samples>0&&Xe(I)===!1){nt.__webglMultisampledFramebuffer=n.createFramebuffer(),nt.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,nt.__webglMultisampledFramebuffer);for(let ft=0;ft<dt.length;ft++){let vt=dt[ft];nt.__webglColorRenderbuffer[ft]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,nt.__webglColorRenderbuffer[ft]);let At=o.convert(vt.format,vt.colorSpace),Gt=o.convert(vt.type),Nt=S(vt.internalFormat,At,Gt,vt.normalized,vt.colorSpace,I.isXRRenderTarget===!0),Pt=Ue(I);n.renderbufferStorageMultisample(n.RENDERBUFFER,Pt,Nt,I.width,I.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ft,n.RENDERBUFFER,nt.__webglColorRenderbuffer[ft])}n.bindRenderbuffer(n.RENDERBUFFER,null),I.depthBuffer&&(nt.__webglDepthRenderbuffer=n.createRenderbuffer(),de(nt.__webglDepthRenderbuffer,I,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(Et){e.bindTexture(n.TEXTURE_CUBE_MAP,lt.__webglTexture),Kt(n.TEXTURE_CUBE_MAP,R);for(let ft=0;ft<6;ft++)if(R.mipmaps&&R.mipmaps.length>0)for(let vt=0;vt<R.mipmaps.length;vt++)Ft(nt.__webglFramebuffer[ft][vt],I,R,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ft,vt);else Ft(nt.__webglFramebuffer[ft],I,R,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ft,0);y(R)&&E(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Tt){for(let ft=0,vt=dt.length;ft<vt;ft++){let At=dt[ft],Gt=i.get(At),Nt=n.TEXTURE_2D;(I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(Nt=I.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(Nt,Gt.__webglTexture),Kt(Nt,At),Ft(nt.__webglFramebuffer,I,At,n.COLOR_ATTACHMENT0+ft,Nt,0),y(At)&&E(Nt)}e.unbindTexture()}else{let ft=n.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(ft=I.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(ft,lt.__webglTexture),Kt(ft,R),R.mipmaps&&R.mipmaps.length>0)for(let vt=0;vt<R.mipmaps.length;vt++)Ft(nt.__webglFramebuffer[vt],I,R,n.COLOR_ATTACHMENT0,ft,vt);else Ft(nt.__webglFramebuffer,I,R,n.COLOR_ATTACHMENT0,ft,0);y(R)&&E(ft),e.unbindTexture()}I.depthBuffer&&fe(I)}function ge(I){let R=I.textures;for(let nt=0,lt=R.length;nt<lt;nt++){let dt=R[nt];if(y(dt)){let Et=P(I),Tt=i.get(dt).__webglTexture;e.bindTexture(Et,Tt),E(Et),e.unbindTexture()}}}let Re=[],Je=[];function ln(I){if(I.samples>0){if(Xe(I)===!1){let R=I.textures,nt=I.width,lt=I.height,dt=n.COLOR_BUFFER_BIT,Et=I.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Tt=i.get(I),ft=R.length>1;if(ft)for(let At=0;At<R.length;At++)e.bindFramebuffer(n.FRAMEBUFFER,Tt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+At,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,Tt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+At,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,Tt.__webglMultisampledFramebuffer);let vt=I.texture.mipmaps;vt&&vt.length>0?e.bindFramebuffer(n.DRAW_FRAMEBUFFER,Tt.__webglFramebuffer[0]):e.bindFramebuffer(n.DRAW_FRAMEBUFFER,Tt.__webglFramebuffer);for(let At=0;At<R.length;At++){if(I.resolveDepthBuffer&&(I.depthBuffer&&(dt|=n.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&(dt|=n.STENCIL_BUFFER_BIT)),ft){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Tt.__webglColorRenderbuffer[At]);let Gt=i.get(R[At]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Gt,0)}n.blitFramebuffer(0,0,nt,lt,0,0,nt,lt,dt,n.NEAREST),u===!0&&(Re.length=0,Je.length=0,Re.push(n.COLOR_ATTACHMENT0+At),I.depthBuffer&&I.storeMultisampledDepthBuffer===!1&&(Re.push(Et),Je.push(Et),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,Je)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Re))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ft)for(let At=0;At<R.length;At++){e.bindFramebuffer(n.FRAMEBUFFER,Tt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+At,n.RENDERBUFFER,Tt.__webglColorRenderbuffer[At]);let Gt=i.get(R[At]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,Tt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+At,n.TEXTURE_2D,Gt,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,Tt.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.storeMultisampledDepthBuffer===!1&&u){let R=I.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[R])}}}function Ue(I){return Math.min(s.maxSamples,I.samples)}function Xe(I){let R=i.get(I);return I.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&R.__useRenderToTexture!==!1}function Q(I){let R=c.render.frame;p.get(I)!==R&&(p.set(I,R),I.update())}function je(I,R){let nt=I.colorSpace,lt=I.format,dt=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||nt!==ro&&nt!==Ii&&(Me.getTransfer(nt)===Le?(lt!==Wn||dt!==Rn)&&ne("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):se("WebGLTextures: Unsupported texture color space:",nt)),R}function we(I){return typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement?(f.width=I.naturalWidth||I.width,f.height=I.naturalHeight||I.height):typeof VideoFrame<"u"&&I instanceof VideoFrame?(f.width=I.displayWidth,f.height=I.displayHeight):(f.width=I.width,f.height=I.height),f}this.allocateTextureUnit=$,this.resetTextureUnits=V,this.getTextureUnits=z,this.setTextureUnits=W,this.setTexture2D=J,this.setTexture2DArray=q,this.setTexture3D=it,this.setTextureCube=st,this.rebindTextures=_e,this.setupRenderTarget=Ie,this.updateRenderTargetMipmap=ge,this.updateMultisampleRenderTarget=ln,this.setupDepthRenderbuffer=fe,this.setupFrameBufferTexture=Ft,this.useMultisampledRTT=Xe,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function zv(n,t){function e(i,s=Ii){let o,c=Me.getTransfer(s);if(i===Rn)return n.UNSIGNED_BYTE;if(i===Pl)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Cl)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Xh)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Wh)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===Hh)return n.BYTE;if(i===Gh)return n.SHORT;if(i===pr)return n.UNSIGNED_SHORT;if(i===Al)return n.INT;if(i===ei)return n.UNSIGNED_INT;if(i===ni)return n.FLOAT;if(i===ii)return n.HALF_FLOAT;if(i===Yh)return n.ALPHA;if(i===$h)return n.RGB;if(i===Wn)return n.RGBA;if(i===di)return n.DEPTH_COMPONENT;if(i===ns)return n.DEPTH_STENCIL;if(i===qh)return n.RED;if(i===Il)return n.RED_INTEGER;if(i===is)return n.RG;if(i===Rl)return n.RG_INTEGER;if(i===Ll)return n.RGBA_INTEGER;if(i===Fo||i===Uo||i===Bo||i===ko)if(c===Le)if(o=t.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(i===Fo)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Uo)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Bo)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===ko)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=t.get("WEBGL_compressed_texture_s3tc"),o!==null){if(i===Fo)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Uo)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Bo)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===ko)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Nl||i===Dl||i===Ol||i===Fl)if(o=t.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(i===Nl)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Dl)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Ol)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Fl)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Ul||i===Bl||i===kl||i===zl||i===Vl||i===zo||i===Hl)if(o=t.get("WEBGL_compressed_texture_etc"),o!==null){if(i===Ul||i===Bl)return c===Le?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(i===kl)return c===Le?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC;if(i===zl)return o.COMPRESSED_R11_EAC;if(i===Vl)return o.COMPRESSED_SIGNED_R11_EAC;if(i===zo)return o.COMPRESSED_RG11_EAC;if(i===Hl)return o.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Gl||i===Xl||i===Wl||i===Yl||i===$l||i===ql||i===Zl||i===Jl||i===jl||i===Kl||i===Ql||i===tc||i===ec||i===nc)if(o=t.get("WEBGL_compressed_texture_astc"),o!==null){if(i===Gl)return c===Le?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Xl)return c===Le?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Wl)return c===Le?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Yl)return c===Le?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===$l)return c===Le?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===ql)return c===Le?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Zl)return c===Le?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Jl)return c===Le?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===jl)return c===Le?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Kl)return c===Le?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Ql)return c===Le?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===tc)return c===Le?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===ec)return c===Le?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===nc)return c===Le?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===ic||i===sc||i===rc)if(o=t.get("EXT_texture_compression_bptc"),o!==null){if(i===ic)return c===Le?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===sc)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===rc)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===oc||i===ac||i===Vo||i===lc)if(o=t.get("EXT_texture_compression_rgtc"),o!==null){if(i===oc)return o.COMPRESSED_RED_RGTC1_EXT;if(i===ac)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Vo)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===lc)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===mr?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}function Xv(n,t){function e(g,y){g.matrixAutoUpdate===!0&&g.updateMatrix(),y.value.copy(g.matrix)}function i(g,y){y.color.getRGB(g.fogColor.value,Qh(n)),y.isFog?(g.fogNear.value=y.near,g.fogFar.value=y.far):y.isFogExp2&&(g.fogDensity.value=y.density)}function s(g,y,E,P,S){y.isNodeMaterial?y.uniformsNeedUpdate=!1:y.isMeshBasicMaterial?o(g,y):y.isMeshLambertMaterial?(o(g,y),y.envMap&&(g.envMapIntensity.value=y.envMapIntensity)):y.isMeshToonMaterial?(o(g,y),x(g,y)):y.isMeshPhongMaterial?(o(g,y),p(g,y),y.envMap&&(g.envMapIntensity.value=y.envMapIntensity)):y.isMeshStandardMaterial?(o(g,y),m(g,y),y.isMeshPhysicalMaterial&&_(g,y,S)):y.isMeshMatcapMaterial?(o(g,y),v(g,y)):y.isMeshDepthMaterial?o(g,y):y.isMeshDistanceMaterial?(o(g,y),M(g,y)):y.isMeshNormalMaterial?o(g,y):y.isLineBasicMaterial?(c(g,y),y.isLineDashedMaterial&&a(g,y)):y.isPointsMaterial?u(g,y,E,P):y.isSpriteMaterial?f(g,y):y.isShadowMaterial?(g.color.value.copy(y.color),g.opacity.value=y.opacity):y.isShaderMaterial&&(y.uniformsNeedUpdate=!1)}function o(g,y){g.opacity.value=y.opacity,y.color&&g.diffuse.value.copy(y.color),y.emissive&&g.emissive.value.copy(y.emissive).multiplyScalar(y.emissiveIntensity),y.map&&(g.map.value=y.map,e(y.map,g.mapTransform)),y.alphaMap&&(g.alphaMap.value=y.alphaMap,e(y.alphaMap,g.alphaMapTransform)),y.bumpMap&&(g.bumpMap.value=y.bumpMap,e(y.bumpMap,g.bumpMapTransform),g.bumpScale.value=y.bumpScale,y.side===Tn&&(g.bumpScale.value*=-1)),y.normalMap&&(g.normalMap.value=y.normalMap,e(y.normalMap,g.normalMapTransform),g.normalScale.value.copy(y.normalScale),y.side===Tn&&g.normalScale.value.negate()),y.displacementMap&&(g.displacementMap.value=y.displacementMap,e(y.displacementMap,g.displacementMapTransform),g.displacementScale.value=y.displacementScale,g.displacementBias.value=y.displacementBias),y.emissiveMap&&(g.emissiveMap.value=y.emissiveMap,e(y.emissiveMap,g.emissiveMapTransform)),y.specularMap&&(g.specularMap.value=y.specularMap,e(y.specularMap,g.specularMapTransform)),y.alphaTest>0&&(g.alphaTest.value=y.alphaTest);let E=t.get(y),P=E.envMap,S=E.envMapRotation;P&&(g.envMap.value=P,g.envMapRotation.value.setFromMatrix4(Gv.makeRotationFromEuler(S)).transpose(),P.isCubeTexture&&P.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(Pp),g.reflectivity.value=y.reflectivity,g.ior.value=y.ior,g.refractionRatio.value=y.refractionRatio),y.lightMap&&(g.lightMap.value=y.lightMap,g.lightMapIntensity.value=y.lightMapIntensity,e(y.lightMap,g.lightMapTransform)),y.aoMap&&(g.aoMap.value=y.aoMap,g.aoMapIntensity.value=y.aoMapIntensity,e(y.aoMap,g.aoMapTransform))}function c(g,y){g.diffuse.value.copy(y.color),g.opacity.value=y.opacity,y.map&&(g.map.value=y.map,e(y.map,g.mapTransform))}function a(g,y){g.dashSize.value=y.dashSize,g.totalSize.value=y.dashSize+y.gapSize,g.scale.value=y.scale}function u(g,y,E,P){g.diffuse.value.copy(y.color),g.opacity.value=y.opacity,g.size.value=y.size*E,g.scale.value=P*.5,y.map&&(g.map.value=y.map,e(y.map,g.uvTransform)),y.alphaMap&&(g.alphaMap.value=y.alphaMap,e(y.alphaMap,g.alphaMapTransform)),y.alphaTest>0&&(g.alphaTest.value=y.alphaTest)}function f(g,y){g.diffuse.value.copy(y.color),g.opacity.value=y.opacity,g.rotation.value=y.rotation,y.map&&(g.map.value=y.map,e(y.map,g.mapTransform)),y.alphaMap&&(g.alphaMap.value=y.alphaMap,e(y.alphaMap,g.alphaMapTransform)),y.alphaTest>0&&(g.alphaTest.value=y.alphaTest)}function p(g,y){g.specular.value.copy(y.specular),g.shininess.value=Math.max(y.shininess,1e-4)}function x(g,y){y.gradientMap&&(g.gradientMap.value=y.gradientMap)}function m(g,y){g.metalness.value=y.metalness,y.metalnessMap&&(g.metalnessMap.value=y.metalnessMap,e(y.metalnessMap,g.metalnessMapTransform)),g.roughness.value=y.roughness,y.roughnessMap&&(g.roughnessMap.value=y.roughnessMap,e(y.roughnessMap,g.roughnessMapTransform)),y.envMap&&(g.envMapIntensity.value=y.envMapIntensity)}function _(g,y,E){g.ior.value=y.ior,y.sheen>0&&(g.sheenColor.value.copy(y.sheenColor).multiplyScalar(y.sheen),g.sheenRoughness.value=y.sheenRoughness,y.sheenColorMap&&(g.sheenColorMap.value=y.sheenColorMap,e(y.sheenColorMap,g.sheenColorMapTransform)),y.sheenRoughnessMap&&(g.sheenRoughnessMap.value=y.sheenRoughnessMap,e(y.sheenRoughnessMap,g.sheenRoughnessMapTransform))),y.clearcoat>0&&(g.clearcoat.value=y.clearcoat,g.clearcoatRoughness.value=y.clearcoatRoughness,y.clearcoatMap&&(g.clearcoatMap.value=y.clearcoatMap,e(y.clearcoatMap,g.clearcoatMapTransform)),y.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=y.clearcoatRoughnessMap,e(y.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),y.clearcoatNormalMap&&(g.clearcoatNormalMap.value=y.clearcoatNormalMap,e(y.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(y.clearcoatNormalScale),y.side===Tn&&g.clearcoatNormalScale.value.negate())),y.dispersion>0&&(g.dispersion.value=y.dispersion),y.retroreflectivity>0&&(g.retroreflectivity.value=y.retroreflectivity),y.iridescence>0&&(g.iridescence.value=y.iridescence,g.iridescenceIOR.value=y.iridescenceIOR,g.iridescenceThicknessMinimum.value=y.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=y.iridescenceThicknessRange[1],y.iridescenceMap&&(g.iridescenceMap.value=y.iridescenceMap,e(y.iridescenceMap,g.iridescenceMapTransform)),y.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=y.iridescenceThicknessMap,e(y.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),y.transmission>0&&(g.transmission.value=y.transmission,g.transmissionSamplerMap.value=E.texture,g.transmissionSamplerSize.value.set(E.width,E.height),y.transmissionMap&&(g.transmissionMap.value=y.transmissionMap,e(y.transmissionMap,g.transmissionMapTransform)),g.thickness.value=y.thickness,y.thicknessMap&&(g.thicknessMap.value=y.thicknessMap,e(y.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=y.attenuationDistance,g.attenuationColor.value.copy(y.attenuationColor)),y.anisotropy>0&&(g.anisotropyVector.value.set(y.anisotropy*Math.cos(y.anisotropyRotation),y.anisotropy*Math.sin(y.anisotropyRotation)),y.anisotropyMap&&(g.anisotropyMap.value=y.anisotropyMap,e(y.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=y.specularIntensity,g.specularColor.value.copy(y.specularColor),y.specularColorMap&&(g.specularColorMap.value=y.specularColorMap,e(y.specularColorMap,g.specularColorMapTransform)),y.specularIntensityMap&&(g.specularIntensityMap.value=y.specularIntensityMap,e(y.specularIntensityMap,g.specularIntensityMapTransform))}function v(g,y){y.matcap&&(g.matcap.value=y.matcap)}function M(g,y){let E=t.get(y).light;g.referencePosition.value.setFromMatrixPosition(E.matrixWorld),g.nearDistance.value=E.shadow.camera.near,g.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function Wv(n,t,e,i){let s={},o={},c=[],a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function u(S,L){let T=L.program;i.uniformBlockBinding(S,T)}function f(S,L){let T=s[S.id];T===void 0&&(g(S),T=p(S),s[S.id]=T,S.addEventListener("dispose",E));let C=L.program;i.updateUBOMapping(S,C);let w=t.render.frame;o[S.id]!==w&&(m(S),o[S.id]=w)}function p(S){let L=x();S.__bindingPointIndex=L;let T=n.createBuffer(),C=S.__size,w=S.usage;return n.bindBuffer(n.UNIFORM_BUFFER,T),n.bufferData(n.UNIFORM_BUFFER,C,w),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,L,T),T}function x(){for(let S=0;S<a;S++)if(c.indexOf(S)===-1)return c.push(S),S;return se("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function m(S){let L=s[S.id],T=S.uniforms,C=S.__cache;n.bindBuffer(n.UNIFORM_BUFFER,L);for(let w=0,N=T.length;w<N;w++){let F=T[w];if(Array.isArray(F))for(let B=0,H=F.length;B<H;B++)_(F[B],w,B,C);else _(F,w,0,C)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function _(S,L,T,C){if(M(S,L,T,C)===!0){let w=S.__offset,N=S.value;if(Array.isArray(N)){let F=0;for(let B=0;B<N.length;B++){let H=N[B],V=y(H);v(H,S.__data,F),typeof H!="number"&&typeof H!="boolean"&&!H.isMatrix3&&!ArrayBuffer.isView(H)&&(F+=V.storage/Float32Array.BYTES_PER_ELEMENT)}}else v(N,S.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,w,S.__data)}}function v(S,L,T){typeof S=="number"||typeof S=="boolean"?L[0]=S:S.isMatrix3?(L[0]=S.elements[0],L[1]=S.elements[1],L[2]=S.elements[2],L[3]=0,L[4]=S.elements[3],L[5]=S.elements[4],L[6]=S.elements[5],L[7]=0,L[8]=S.elements[6],L[9]=S.elements[7],L[10]=S.elements[8],L[11]=0):ArrayBuffer.isView(S)?L.set(new S.constructor(S.buffer,S.byteOffset,L.length)):S.toArray(L,T)}function M(S,L,T,C){let w=S.value,N=L+"_"+T;if(C[N]===void 0)return typeof w=="number"||typeof w=="boolean"?C[N]=w:ArrayBuffer.isView(w)?C[N]=w.slice():C[N]=w.clone(),!0;{let F=C[N];if(typeof w=="number"||typeof w=="boolean"){if(F!==w)return C[N]=w,!0}else{if(ArrayBuffer.isView(w))return!0;if(F.equals(w)===!1)return F.copy(w),!0}}return!1}function g(S){let L=S.uniforms,T=0,C=16;for(let N=0,F=L.length;N<F;N++){let B=Array.isArray(L[N])?L[N]:[L[N]];for(let H=0,V=B.length;H<V;H++){let z=B[H],W=Array.isArray(z.value)?z.value:[z.value];for(let $=0,k=W.length;$<k;$++){let J=W[$],q=y(J),it=T%C,st=it%q.boundary,St=it+st;T+=st,St!==0&&C-St<q.storage&&(T+=C-St),z.__data=new Float32Array(q.storage/Float32Array.BYTES_PER_ELEMENT),z.__offset=T,T+=q.storage}}}let w=T%C;return w>0&&(T+=C-w),S.__size=T,S.__cache={},this}function y(S){let L={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(L.boundary=4,L.storage=4):S.isVector2?(L.boundary=8,L.storage=8):S.isVector3||S.isColor?(L.boundary=16,L.storage=12):S.isVector4?(L.boundary=16,L.storage=16):S.isMatrix3?(L.boundary=48,L.storage=48):S.isMatrix4?(L.boundary=64,L.storage=64):S.isTexture?ne("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(S)?(L.boundary=16,L.storage=S.byteLength):ne("WebGLRenderer: Unsupported uniform value type.",S),L}function E(S){let L=S.target;L.removeEventListener("dispose",E);let T=c.indexOf(L.__bindingPointIndex);c.splice(T,1),n.deleteBuffer(s[L.id]),delete s[L.id],delete o[L.id]}function P(){for(let S in s)n.deleteBuffer(s[S]);c=[],s={},o={}}return{bind:u,update:f,dispose:P}}function $v(){return xi===null&&(xi=new sl(Yv,16,16,is,ii),xi.name="DFG_LUT",xi.minFilter=dn,xi.magFilter=dn,xi.wrapS=fi,xi.wrapT=fi,xi.generateMipmaps=!1,xi.needsUpdate=!0),xi}var og,ag,lg,cg,hg,ug,fg,dg,pg,mg,gg,xg,yg,_g,vg,bg,Mg,Sg,wg,Eg,Tg,Ag,Pg,Cg,Ig,Rg,Lg,Ng,Dg,Og,Fg,Ug,Bg,kg,zg,Vg,Hg,Gg,Xg,Wg,Yg,$g,qg,Zg,Jg,jg,Kg,Qg,tx,ex,nx,ix,sx,rx,ox,ax,lx,cx,hx,ux,fx,dx,px,mx,gx,xx,yx,_x,vx,bx,Mx,Sx,wx,Ex,Tx,Ax,Px,Cx,Ix,Rx,Lx,Nx,Dx,Ox,Fx,Ux,Bx,kx,zx,Vx,Hx,Gx,Xx,Wx,Yx,$x,qx,Zx,Jx,jx,Kx,Qx,ty,ey,ny,iy,sy,ry,oy,ay,ly,cy,hy,uy,fy,dy,py,my,gy,xy,yy,_y,vy,by,My,Sy,wy,Ey,Ty,Ay,Py,Cy,Iy,Ry,Ly,Ny,Dy,Oy,Fy,Uy,By,ky,me,Vt,yi,fc,zy,Sp,xr,Yy,$y,qy,Ho,ep,su,ru,ou,au,Zy,Ss,pc,mc,o_,wp,hu,Ep,Tp,Ap,rp,op,ap,lp,cp,uu,fu,du,lu,yr,Z_,J_,fp,tv,dc,ov,av,cv,uv,dv,mv,xv,bv,mu,gu,Cv,Nv,Dv,Ov,Fv,bp,Go,cu,Vv,Hv,xu,yu,Gv,Pp,Yv,xi,gc,Wo=pe(()=>{iu();iu();og=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,ag=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,lg=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,cg=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,hg=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,ug=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,fg=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,dg=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,pg=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,mg=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,gg=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,xg=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,yg=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,_g=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,vg=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,bg=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Mg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Sg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,wg=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Eg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Tg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Ag=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Pg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,Cg=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Ig=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Rg=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,Lg=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Ng=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Dg=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Og=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Fg="gl_FragColor = linearToOutputTexel( gl_FragColor );",Ug=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Bg=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,kg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,zg=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Vg=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Hg=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Gg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Xg=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Wg=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Yg=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,$g=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,qg=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Zg=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Jg=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,jg=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,Kg=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,Qg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,tx=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ex=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,nx=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,ix=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,sx=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,rx=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,ox=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,ax=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,lx=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,cx=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,hx=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ux=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,fx=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,dx=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,px=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,mx=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,gx=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,xx=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,yx=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,_x=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,vx=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,bx=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Mx=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Sx=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,wx=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Ex=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Tx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ax=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Px=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Cx=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Ix=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Rx=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Lx=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Nx=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Dx=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Ox=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,Fx=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Ux=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Bx=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,kx=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,zx=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Vx=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Hx=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,Gx=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Xx=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Wx=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Yx=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,$x=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,qx=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Zx=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Jx=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,jx=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Kx=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Qx=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,ty=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,ey=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,ny=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,iy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,sy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,ry=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,oy=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,ay=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ly=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cy=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,hy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,uy=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,fy=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,dy=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,py=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,my=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,gy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,xy=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,yy=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,_y=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,vy=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,by=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,My=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Sy=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,wy=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Ey=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ty=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Ay=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Py=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Cy=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Iy=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Ry=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ly=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ny=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Dy=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Oy=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Fy=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Uy=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,By=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,ky=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,me={alphahash_fragment:og,alphahash_pars_fragment:ag,alphamap_fragment:lg,alphamap_pars_fragment:cg,alphatest_fragment:hg,alphatest_pars_fragment:ug,aomap_fragment:fg,aomap_pars_fragment:dg,batching_pars_vertex:pg,batching_vertex:mg,begin_vertex:gg,beginnormal_vertex:xg,bsdfs:yg,iridescence_fragment:_g,bumpmap_pars_fragment:vg,clipping_planes_fragment:bg,clipping_planes_pars_fragment:Mg,clipping_planes_pars_vertex:Sg,clipping_planes_vertex:wg,color_fragment:Eg,color_pars_fragment:Tg,color_pars_vertex:Ag,color_vertex:Pg,common:Cg,cube_uv_reflection_fragment:Ig,defaultnormal_vertex:Rg,displacementmap_pars_vertex:Lg,displacementmap_vertex:Ng,emissivemap_fragment:Dg,emissivemap_pars_fragment:Og,colorspace_fragment:Fg,colorspace_pars_fragment:Ug,envmap_fragment:Bg,envmap_common_pars_fragment:kg,envmap_pars_fragment:zg,envmap_pars_vertex:Vg,envmap_physical_pars_fragment:Kg,envmap_vertex:Hg,fog_vertex:Gg,fog_pars_vertex:Xg,fog_fragment:Wg,fog_pars_fragment:Yg,gradientmap_pars_fragment:$g,lightmap_pars_fragment:qg,lights_lambert_fragment:Zg,lights_lambert_pars_fragment:Jg,lights_pars_begin:jg,lights_toon_fragment:Qg,lights_toon_pars_fragment:tx,lights_phong_fragment:ex,lights_phong_pars_fragment:nx,lights_physical_fragment:ix,lights_physical_pars_fragment:sx,lights_fragment_begin:rx,lights_fragment_maps:ox,lights_fragment_end:ax,lightprobes_pars_fragment:lx,logdepthbuf_fragment:cx,logdepthbuf_pars_fragment:hx,logdepthbuf_pars_vertex:ux,logdepthbuf_vertex:fx,map_fragment:dx,map_pars_fragment:px,map_particle_fragment:mx,map_particle_pars_fragment:gx,metalnessmap_fragment:xx,metalnessmap_pars_fragment:yx,morphinstance_vertex:_x,morphcolor_vertex:vx,morphnormal_vertex:bx,morphtarget_pars_vertex:Mx,morphtarget_vertex:Sx,normal_fragment_begin:wx,normal_fragment_maps:Ex,normal_pars_fragment:Tx,normal_pars_vertex:Ax,normal_vertex:Px,normalmap_pars_fragment:Cx,clearcoat_normal_fragment_begin:Ix,clearcoat_normal_fragment_maps:Rx,clearcoat_pars_fragment:Lx,iridescence_pars_fragment:Nx,opaque_fragment:Dx,packing:Ox,premultiplied_alpha_fragment:Fx,project_vertex:Ux,dithering_fragment:Bx,dithering_pars_fragment:kx,roughnessmap_fragment:zx,roughnessmap_pars_fragment:Vx,shadowmap_pars_fragment:Hx,shadowmap_pars_vertex:Gx,shadowmap_vertex:Xx,shadowmask_pars_fragment:Wx,skinbase_vertex:Yx,skinning_pars_vertex:$x,skinning_vertex:qx,skinnormal_vertex:Zx,specularmap_fragment:Jx,specularmap_pars_fragment:jx,tonemapping_fragment:Kx,tonemapping_pars_fragment:Qx,transmission_fragment:ty,transmission_pars_fragment:ey,uv_pars_fragment:ny,uv_pars_vertex:iy,uv_vertex:sy,worldpos_vertex:ry,background_vert:oy,background_frag:ay,backgroundCube_vert:ly,backgroundCube_frag:cy,cube_vert:hy,cube_frag:uy,depth_vert:fy,depth_frag:dy,distance_vert:py,distance_frag:my,equirect_vert:gy,equirect_frag:xy,linedashed_vert:yy,linedashed_frag:_y,meshbasic_vert:vy,meshbasic_frag:by,meshlambert_vert:My,meshlambert_frag:Sy,meshmatcap_vert:wy,meshmatcap_frag:Ey,meshnormal_vert:Ty,meshnormal_frag:Ay,meshphong_vert:Py,meshphong_frag:Cy,meshphysical_vert:Iy,meshphysical_frag:Ry,meshtoon_vert:Ly,meshtoon_frag:Ny,points_vert:Dy,points_frag:Oy,shadow_vert:Fy,shadow_frag:Uy,sprite_vert:By,sprite_frag:ky},Vt={common:{diffuse:{value:new ae(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new he},alphaMap:{value:null},alphaMapTransform:{value:new he},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new he}},envmap:{envMap:{value:null},envMapRotation:{value:new he},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new he}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new he}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new he},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new he},normalScale:{value:new Jt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new he},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new he}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new he}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new he}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ae(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new Z},probesMax:{value:new Z},probesResolution:{value:new Z}},points:{diffuse:{value:new ae(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new he},alphaTest:{value:0},uvTransform:{value:new he}},sprite:{diffuse:{value:new ae(16777215)},opacity:{value:1},center:{value:new Jt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new he},alphaMap:{value:null},alphaMapTransform:{value:new he},alphaTest:{value:0}}},yi={basic:{uniforms:vn([Vt.common,Vt.specularmap,Vt.envmap,Vt.aomap,Vt.lightmap,Vt.fog]),vertexShader:me.meshbasic_vert,fragmentShader:me.meshbasic_frag},lambert:{uniforms:vn([Vt.common,Vt.specularmap,Vt.envmap,Vt.aomap,Vt.lightmap,Vt.emissivemap,Vt.bumpmap,Vt.normalmap,Vt.displacementmap,Vt.fog,Vt.lights,{emissive:{value:new ae(0)},envMapIntensity:{value:1}}]),vertexShader:me.meshlambert_vert,fragmentShader:me.meshlambert_frag},phong:{uniforms:vn([Vt.common,Vt.specularmap,Vt.envmap,Vt.aomap,Vt.lightmap,Vt.emissivemap,Vt.bumpmap,Vt.normalmap,Vt.displacementmap,Vt.fog,Vt.lights,{emissive:{value:new ae(0)},specular:{value:new ae(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:me.meshphong_vert,fragmentShader:me.meshphong_frag},standard:{uniforms:vn([Vt.common,Vt.envmap,Vt.aomap,Vt.lightmap,Vt.emissivemap,Vt.bumpmap,Vt.normalmap,Vt.displacementmap,Vt.roughnessmap,Vt.metalnessmap,Vt.fog,Vt.lights,{emissive:{value:new ae(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:me.meshphysical_vert,fragmentShader:me.meshphysical_frag},toon:{uniforms:vn([Vt.common,Vt.aomap,Vt.lightmap,Vt.emissivemap,Vt.bumpmap,Vt.normalmap,Vt.displacementmap,Vt.gradientmap,Vt.fog,Vt.lights,{emissive:{value:new ae(0)}}]),vertexShader:me.meshtoon_vert,fragmentShader:me.meshtoon_frag},matcap:{uniforms:vn([Vt.common,Vt.bumpmap,Vt.normalmap,Vt.displacementmap,Vt.fog,{matcap:{value:null}}]),vertexShader:me.meshmatcap_vert,fragmentShader:me.meshmatcap_frag},points:{uniforms:vn([Vt.points,Vt.fog]),vertexShader:me.points_vert,fragmentShader:me.points_frag},dashed:{uniforms:vn([Vt.common,Vt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:me.linedashed_vert,fragmentShader:me.linedashed_frag},depth:{uniforms:vn([Vt.common,Vt.displacementmap]),vertexShader:me.depth_vert,fragmentShader:me.depth_frag},normal:{uniforms:vn([Vt.common,Vt.bumpmap,Vt.normalmap,Vt.displacementmap,{opacity:{value:1}}]),vertexShader:me.meshnormal_vert,fragmentShader:me.meshnormal_frag},sprite:{uniforms:vn([Vt.sprite,Vt.fog]),vertexShader:me.sprite_vert,fragmentShader:me.sprite_frag},background:{uniforms:{uvTransform:{value:new he},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:me.background_vert,fragmentShader:me.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new he}},vertexShader:me.backgroundCube_vert,fragmentShader:me.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:me.cube_vert,fragmentShader:me.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:me.equirect_vert,fragmentShader:me.equirect_frag},distance:{uniforms:vn([Vt.common,Vt.displacementmap,{referencePosition:{value:new Z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:me.distance_vert,fragmentShader:me.distance_frag},shadow:{uniforms:vn([Vt.lights,Vt.fog,{color:{value:new ae(0)},opacity:{value:1}}]),vertexShader:me.shadow_vert,fragmentShader:me.shadow_frag}};yi.physical={uniforms:vn([yi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new he},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new he},clearcoatNormalScale:{value:new Jt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new he},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new he},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new he},sheen:{value:0},sheenColor:{value:new ae(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new he},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new he},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new he},transmissionSamplerSize:{value:new Jt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new he},attenuationDistance:{value:0},attenuationColor:{value:new ae(0)},specularColor:{value:new ae(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new he},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new he},anisotropyVector:{value:new Jt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new he}}]),vertexShader:me.meshphysical_vert,fragmentShader:me.meshphysical_frag};fc={r:0,b:0,g:0},zy=new De,Sp=new he;Sp.set(-1,0,0,0,1,0,0,0,1);xr=4,Yy=6,$y=20,qy=256,Ho=new cr,ep=new ae,su=null,ru=0,ou=0,au=!1,Zy=new Z,Ss=new Z,pc=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,i=.1,s=100,o={}){let{size:c=256,position:a=Zy}=o;su=this._renderer.getRenderTarget(),ru=this._renderer.getActiveCubeFace(),ou=this._renderer.getActiveMipmapLevel(),au=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(c);let u=this._allocateTargets();return u.depthBuffer=!0,this._sceneToCubeUV(t,i,s,u,a),e>0&&this._blur(u,0,0,e),this._applyPMREM(u),this._cleanup(u),u}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=sp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ip(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(su,ru,ou),this._renderer.xr.enabled=au,t.scissorTest=!1,gr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===ts||t.mapping===vs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),su=this._renderer.getRenderTarget(),ru=this._renderer.getActiveCubeFace(),ou=this._renderer.getActiveMipmapLevel(),au=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:dn,minFilter:dn,generateMipmaps:!1,type:ii,format:Wn,colorSpace:ro,depthBuffer:!1},s=np(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=np(t,e,i);let{_lodMax:o}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=Jy(o)),this._blurMaterial=Ky(o,t,e),this._ggxMaterial=jy(o,t,e)}return s}_compileMaterial(t){let e=new Ce(new Ge,t);this._renderer.compile(e,Ho)}_sceneToCubeUV(t,e,i,s,o){let u=new yn(90,1,e,i),f=[1,-1,1,1,1,1],p=[1,1,1,-1,-1,-1],x=this._renderer,m=x.autoClear,_=x.toneMapping;x.getClearColor(ep),x.toneMapping=ti,x.autoClear=!1,x.state.buffers.depth.getReversed()&&(x.setRenderTarget(s),x.clearDepth(),x.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Ce(new Yi,new Un({name:"PMREM.Background",side:Tn,depthWrite:!1,depthTest:!1})));let M=this._backgroundBox,g=M.material,y=!1,E=t.background;E?E.isColor&&(g.color.copy(E),t.background=null,y=!0):(g.color.copy(ep),y=!0);for(let P=0;P<6;P++){let S=P%3;S===0?(u.up.set(0,f[P],0),u.position.set(o.x,o.y,o.z),u.lookAt(o.x+p[P],o.y,o.z)):S===1?(u.up.set(0,0,f[P]),u.position.set(o.x,o.y,o.z),u.lookAt(o.x,o.y+p[P],o.z)):(u.up.set(0,f[P],0),u.position.set(o.x,o.y,o.z),u.lookAt(o.x,o.y,o.z+p[P]));let L=this._cubeSize;gr(s,S*L,P>2?L:0,L,L),x.setRenderTarget(s),y&&x.render(M,u),x.render(t,u)}x.toneMapping=_,x.autoClear=m,t.background=E}_textureToCubeUV(t,e){let i=this._renderer,s=t.mapping===ts||t.mapping===vs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=sp()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ip());let o=s?this._cubemapMaterial:this._equirectMaterial,c=this._lodMeshes[0];c.material=o;let a=o.uniforms;a.envMap.value=t;let u=this._cubeSize;gr(e,0,0,3*u,2*u),i.setRenderTarget(e),i.render(c,Ho)}_applyPMREM(t){let e=this._renderer,i=e.autoClear;e.autoClear=!1;let s=this._lodMeshes.length;for(let o=1;o<s;o++)this._applyGGXFilter(t,o-1,o);e.autoClear=i}_applyGGXFilter(t,e,i){let s=this._renderer,o=this._pingPongRenderTarget,c=this._ggxMaterial,a=this._lodMeshes[i];a.material=c;let u=c.uniforms,f=i/(this._lodMeshes.length-1),p=e/(this._lodMeshes.length-1),x=Math.sqrt(f*f-p*p),m=f*1.25,_=x*m,{_lodMax:v}=this,M=this._sizeLods[i],g=3*M*(i>v-xr?i-v+xr:0),y=4*(this._cubeSize-M);u.envMap.value=t.texture,u.roughness.value=_,u.mipInt.value=v-e,gr(o,g,y,3*M,2*M),s.setRenderTarget(o),s.render(a,Ho),u.envMap.value=o.texture,u.roughness.value=0,u.mipInt.value=v-i,gr(t,g,y,3*M,2*M),s.setRenderTarget(t),s.render(a,Ho)}_blur(t,e,i,s){let o=this._pingPongRenderTarget,c=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(t,o,e,i,c),this._blurPass(o,t,i,i,c)}_blurPass(t,e,i,s,o){let c=this._renderer,a=this._blurMaterial,u=this._lodMeshes[s];u.material=a;let f=a.uniforms;f.envMap.value=t.texture,f.sigma.value=o,f.mipInt.value=this._lodMax-i;let p=this._sizeLods[s],x=3*p*(s>this._lodMax-xr?s-this._lodMax+xr:0),m=4*(this._cubeSize-p);gr(e,x,m,3*p,2*p),c.setRenderTarget(e),c.render(u,Ho)}};mc=class extends In{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new go(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Yi(5,5,5),o=new Bn({name:"CubemapFromEquirect",uniforms:Ms(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Tn,blending:gi});o.uniforms.tEquirect.value=e;let c=new Ce(s,o),a=e.minFilter;return e.minFilter===es&&(e.minFilter=dn),new Ml(1,10,this).update(t,c),e.minFilter=a,c.geometry.dispose(),c.material.dispose(),this}clear(t,e=!0,i=!0,s=!0){let o=t.getRenderTarget();for(let c=0;c<6;c++)t.setRenderTarget(this,c),t.clear(e,i,s);t.setRenderTarget(o)}};o_={[Dh]:"LINEAR_TONE_MAPPING",[Oh]:"REINHARD_TONE_MAPPING",[Fh]:"CINEON_TONE_MAPPING",[Uh]:"ACES_FILMIC_TONE_MAPPING",[kh]:"AGX_TONE_MAPPING",[zh]:"NEUTRAL_TONE_MAPPING",[Bh]:"CUSTOM_TONE_MAPPING"};wp=new En,hu=new Wi(1,1),Ep=new co,Tp=new nl,Ap=new go,rp=[],op=[],ap=new Float32Array(16),lp=new Float32Array(9),cp=new Float32Array(4);uu=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=A_(e.type)}},fu=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=$_(e.type)}},du=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){let s=this.seq;for(let o=0,c=s.length;o!==c;++o){let a=s[o];a.setValue(t,e[a.id],i)}}},lu=/(\w+)(\])?(\[|\.)?/g;yr=class{constructor(t,e){this.seq=[],this.map={};let i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let c=0;c<i;++c){let a=t.getActiveUniform(e,c),u=t.getUniformLocation(e,a.name);q_(a,u,this)}let s=[],o=[];for(let c of this.seq)c.type===t.SAMPLER_2D_SHADOW||c.type===t.SAMPLER_CUBE_SHADOW||c.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(c):o.push(c);s.length>0&&(this.seq=s.concat(o))}setValue(t,e,i,s){let o=this.map[e];o!==void 0&&o.setValue(t,i,s)}setOptional(t,e,i){let s=e[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,e,i,s){for(let o=0,c=e.length;o!==c;++o){let a=e[o],u=i[a.id];u.needsUpdate!==!1&&a.setValue(t,u.value,s)}}static seqWithValue(t,e){let i=[];for(let s=0,o=t.length;s!==o;++s){let c=t[s];c.id in e&&i.push(c)}return i}};Z_=37297,J_=0;fp=new he;tv={[Dh]:"Linear",[Oh]:"Reinhard",[Fh]:"Cineon",[Uh]:"ACESFilmic",[kh]:"AgX",[zh]:"Neutral",[Bh]:"Custom"};dc=new Z;ov=/^[ \t]*#include +<([\w\d./]+)>/gm;av=new Map;cv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;uv={[No]:"SHADOWMAP_TYPE_PCF",[fr]:"SHADOWMAP_TYPE_VSM"};dv={[ts]:"ENVMAP_TYPE_CUBE",[vs]:"ENVMAP_TYPE_CUBE",[Do]:"ENVMAP_TYPE_CUBE_UV"};mv={[vs]:"ENVMAP_MODE_REFRACTION"};xv={[Nh]:"ENVMAP_BLENDING_MULTIPLY",[Id]:"ENVMAP_BLENDING_MIX",[Rd]:"ENVMAP_BLENDING_ADD"};bv=0,mu=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,i){let s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(i)===!1&&(s.add(i),i.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){let e=this.shaderCache,i=e.get(t);return i===void 0&&(i=new gu(t),e.set(t,i)),i}},gu=class{constructor(t){this.id=bv++,this.code=t,this.usedTimes=0}};Cv=0;Nv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Dv=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,Ov=[new Z(1,0,0),new Z(-1,0,0),new Z(0,1,0),new Z(0,-1,0),new Z(0,0,1),new Z(0,0,-1)],Fv=[new Z(0,-1,0),new Z(0,-1,0),new Z(0,0,1),new Z(0,0,-1),new Z(0,-1,0),new Z(0,-1,0)],bp=new De,Go=new Z,cu=new Z;Vv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Hv=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,xu=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let i=new yo(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,i=new Bn({vertexShader:Vv,fragmentShader:Hv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Ce(new So(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},yu=class extends Kn{constructor(t,e){super();let i=this,s=null,o=1,c=null,a="local-floor",u=1,f=null,p=null,x=null,m=null,_=null,v=null,M=typeof XRWebGLBinding<"u",g=new xu,y={},E=e.getContextAttributes(),P=null,S=null,L=[],T=[],C=new Jt,w=null,N=null,F=new yn;F.viewport=new Ye;let B=new yn;B.viewport=new Ye;let H=[F,B],V=new Sl,z=null,W=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ct){let pt=L[ct];return pt===void 0&&(pt=new ir,L[ct]=pt),pt.getTargetRaySpace()},this.getControllerGrip=function(ct){let pt=L[ct];return pt===void 0&&(pt=new ir,L[ct]=pt),pt.getGripSpace()},this.getHand=function(ct){let pt=L[ct];return pt===void 0&&(pt=new ir,L[ct]=pt),pt.getHandSpace()};function $(ct){let pt=T.indexOf(ct.inputSource);if(pt===-1)return;let Bt=L[pt];Bt!==void 0&&(Bt.update(ct.inputSource,ct.frame,f||c),Bt.dispatchEvent({type:ct.type,data:ct.inputSource}))}function k(){s.removeEventListener("select",$),s.removeEventListener("selectstart",$),s.removeEventListener("selectend",$),s.removeEventListener("squeeze",$),s.removeEventListener("squeezestart",$),s.removeEventListener("squeezeend",$),s.removeEventListener("end",k),s.removeEventListener("inputsourceschange",J);for(let ct=0;ct<L.length;ct++){let pt=T[ct];pt!==null&&(T[ct]=null,L[ct].disconnect(pt))}z=null,W=null,g.reset();for(let ct in y)delete y[ct];if(t.setRenderTarget(P),_=null,m=null,x=null,s=null,S=null,re.stop(),i.isPresenting=!1,t.setPixelRatio(w),t.setSize(C.width,C.height,!1),N!==null){let ct=N.camera;ct.fov=N.fov,ct.zoom=N.zoom,ct.updateProjectionMatrix(),N=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ct){o=ct,i.isPresenting===!0&&ne("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ct){a=ct,i.isPresenting===!0&&ne("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return f||c},this.setReferenceSpace=function(ct){f=ct},this.getBaseLayer=function(){return m!==null?m:_},this.getBinding=function(){return x===null&&M&&(x=new XRWebGLBinding(s,e)),x},this.getFrame=function(){return v},this.getSession=function(){return s},this.setSession=async function(ct){if(s=ct,s!==null){if(P=t.getRenderTarget(),s.addEventListener("select",$),s.addEventListener("selectstart",$),s.addEventListener("selectend",$),s.addEventListener("squeeze",$),s.addEventListener("squeezestart",$),s.addEventListener("squeezeend",$),s.addEventListener("end",k),s.addEventListener("inputsourceschange",J),E.xrCompatible!==!0&&await e.makeXRCompatible(),w=t.getPixelRatio(),t.getSize(C),M&&"createProjectionLayer"in XRWebGLBinding.prototype){let Bt=null,ie=null,Ft=null;E.depth&&(Ft=E.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Bt=E.stencil?ns:di,ie=E.stencil?mr:ei);let de={colorFormat:e.RGBA8,depthFormat:Ft,scaleFactor:o};x=this.getBinding(),m=x.createProjectionLayer(de),s.updateRenderState({layers:[m]}),t.setPixelRatio(1),t.setSize(m.textureWidth,m.textureHeight,!1),S=new In(m.textureWidth,m.textureHeight,{format:Wn,type:Rn,depthTexture:new Wi(m.textureWidth,m.textureHeight,ie,void 0,void 0,void 0,void 0,void 0,void 0,Bt),stencilBuffer:E.stencil,colorSpace:t.outputColorSpace,samples:E.antialias?4:0,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1,storeMultisampledDepthBuffer:m.ignoreDepthValues===!1,storeMultisampledStencilBuffer:m.ignoreDepthValues===!1})}else{let Bt={antialias:E.antialias,alpha:!0,depth:E.depth,stencil:E.stencil,framebufferScaleFactor:o};_=new XRWebGLLayer(s,e,Bt),s.updateRenderState({baseLayer:_}),t.setPixelRatio(1),t.setSize(_.framebufferWidth,_.framebufferHeight,!1),S=new In(_.framebufferWidth,_.framebufferHeight,{format:Wn,type:Rn,colorSpace:t.outputColorSpace,stencilBuffer:E.stencil,resolveDepthBuffer:_.ignoreDepthValues===!1,resolveStencilBuffer:_.ignoreDepthValues===!1,storeMultisampledDepthBuffer:_.ignoreDepthValues===!1,storeMultisampledStencilBuffer:_.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(u),f=null,c=await s.requestReferenceSpace(a),re.setContext(s),re.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function J(ct){for(let pt=0;pt<ct.removed.length;pt++){let Bt=ct.removed[pt],ie=T.indexOf(Bt);ie>=0&&(T[ie]=null,L[ie].disconnect(Bt))}for(let pt=0;pt<ct.added.length;pt++){let Bt=ct.added[pt],ie=T.indexOf(Bt);if(ie===-1){for(let de=0;de<L.length;de++)if(de>=T.length){T.push(Bt),ie=de;break}else if(T[de]===null){T[de]=Bt,ie=de;break}if(ie===-1)break}let Ft=L[ie];Ft&&Ft.connect(Bt)}}let q=new Z,it=new Z;function st(ct,pt,Bt){q.setFromMatrixPosition(pt.matrixWorld),it.setFromMatrixPosition(Bt.matrixWorld);let ie=q.distanceTo(it),Ft=pt.projectionMatrix.elements,de=Bt.projectionMatrix.elements,qe=Ft[14]/(Ft[10]-1),fe=Ft[14]/(Ft[10]+1),_e=(Ft[9]+1)/Ft[5],Ie=(Ft[9]-1)/Ft[5],ge=(Ft[8]-1)/Ft[0],Re=(de[8]+1)/de[0],Je=qe*ge,ln=qe*Re,Ue=ie/(-ge+Re),Xe=Ue*-ge;if(pt.matrixWorld.decompose(ct.position,ct.quaternion,ct.scale),ct.translateX(Xe),ct.translateZ(Ue),ct.matrixWorld.compose(ct.position,ct.quaternion,ct.scale),ct.matrixWorldInverse.copy(ct.matrixWorld).invert(),Ft[10]===-1)ct.projectionMatrix.copy(pt.projectionMatrix),ct.projectionMatrixInverse.copy(pt.projectionMatrixInverse);else{let Q=qe+Ue,je=fe+Ue,we=Je-Xe,I=ln+(ie-Xe),R=_e*fe/je*Q,nt=Ie*fe/je*Q;ct.projectionMatrix.makePerspective(we,I,R,nt,Q,je),ct.projectionMatrixInverse.copy(ct.projectionMatrix).invert()}}function St(ct,pt){pt===null?ct.matrixWorld.copy(ct.matrix):ct.matrixWorld.multiplyMatrices(pt.matrixWorld,ct.matrix),ct.matrixWorldInverse.copy(ct.matrixWorld).invert()}this.updateCamera=function(ct){if(s===null)return;let pt=ct.near,Bt=ct.far;g.texture!==null&&(g.depthNear>0&&(pt=g.depthNear),g.depthFar>0&&(Bt=g.depthFar)),V.near=B.near=F.near=pt,V.far=B.far=F.far=Bt,(z!==V.near||W!==V.far)&&(s.updateRenderState({depthNear:V.near,depthFar:V.far}),z=V.near,W=V.far),V.layers.mask=ct.layers.mask|6,F.layers.mask=V.layers.mask&-5,B.layers.mask=V.layers.mask&-3;let ie=ct.parent,Ft=V.cameras;St(V,ie);for(let de=0;de<Ft.length;de++)St(Ft[de],ie);Ft.length===2?st(V,F,B):V.projectionMatrix.copy(F.projectionMatrix),N===null&&ct.isPerspectiveCamera&&(N={camera:ct,fov:ct.fov,zoom:ct.zoom}),wt(ct,V,ie)};function wt(ct,pt,Bt){Bt===null?ct.matrix.copy(pt.matrixWorld):(ct.matrix.copy(Bt.matrixWorld),ct.matrix.invert(),ct.matrix.multiply(pt.matrixWorld)),ct.matrix.decompose(ct.position,ct.quaternion,ct.scale),ct.updateMatrixWorld(!0),ct.projectionMatrix.copy(pt.projectionMatrix),ct.projectionMatrixInverse.copy(pt.projectionMatrixInverse),ct.isPerspectiveCamera&&(ct.fov=tr*2*Math.atan(1/ct.projectionMatrix.elements[5]),ct.zoom=1)}this.getCamera=function(){return V},this.getFoveation=function(){if(!(m===null&&_===null))return u},this.setFoveation=function(ct){u=ct,m!==null&&(m.fixedFoveation=ct),_!==null&&_.fixedFoveation!==void 0&&(_.fixedFoveation=ct)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(V)},this.getCameraTexture=function(ct){return y[ct]};let $t=null;function Kt(ct,pt){if(p=pt.getViewerPose(f||c),v=pt,p!==null){let Bt=p.views;_!==null&&(t.setRenderTargetFramebuffer(S,_.framebuffer),t.setRenderTarget(S));let ie=!1;Bt.length!==V.cameras.length&&(V.cameras.length=0,ie=!0);for(let fe=0;fe<Bt.length;fe++){let _e=Bt[fe],Ie=null;if(_!==null)Ie=_.getViewport(_e);else{let Re=x.getViewSubImage(m,_e);Ie=Re.viewport,fe===0&&(t.setRenderTargetTextures(S,Re.colorTexture,Re.depthStencilTexture),t.setRenderTarget(S))}let ge=H[fe];ge===void 0&&(ge=new yn,ge.layers.enable(fe),ge.viewport=new Ye,H[fe]=ge),ge.matrix.fromArray(_e.transform.matrix),ge.matrix.decompose(ge.position,ge.quaternion,ge.scale),ge.projectionMatrix.fromArray(_e.projectionMatrix),ge.projectionMatrixInverse.copy(ge.projectionMatrix).invert(),ge.viewport.set(Ie.x,Ie.y,Ie.width,Ie.height),fe===0&&(V.matrix.copy(ge.matrix),V.matrix.decompose(V.position,V.quaternion,V.scale)),ie===!0&&V.cameras.push(ge)}let Ft=s.enabledFeatures;if(Ft&&Ft.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&M){x=i.getBinding();let fe=x.getDepthInformation(Bt[0]);fe&&fe.isValid&&fe.texture&&g.init(fe,s.renderState)}if(Ft&&Ft.includes("camera-access")&&M){t.state.unbindTexture(),x=i.getBinding();for(let fe=0;fe<Bt.length;fe++){let _e=Bt[fe].camera;if(_e){let Ie=y[_e];Ie||(Ie=new yo,y[_e]=Ie);let ge=x.getCameraImage(_e);Ie.sourceTexture=ge}}}}for(let Bt=0;Bt<L.length;Bt++){let ie=T[Bt],Ft=L[Bt];ie!==null&&Ft!==void 0&&Ft.update(ie,pt,f||c)}$t&&$t(ct,pt),pt.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:pt}),v=null}let re=new Mp;re.setAnimationLoop(Kt),this.setAnimationLoop=function(ct){$t=ct},this.dispose=function(){}}},Gv=new De,Pp=new he;Pp.set(-1,0,0,0,1,0,0,0,1);Yv=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),xi=null;gc=class{constructor(t={}){let{canvas:e=Hd(),context:i=null,depth:s=!0,stencil:o=!1,alpha:c=!1,antialias:a=!1,premultipliedAlpha:u=!0,preserveDrawingBuffer:f=!1,powerPreference:p="default",failIfMajorPerformanceCaveat:x=!1,reversedDepthBuffer:m=!1,outputBufferType:_=Rn}=t;this.isWebGLRenderer=!0;let v;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");v=i.getContextAttributes().alpha}else v=c;let M=_,g=new Set([Ll,Rl,Il]),y=new Set([Rn,ei,pr,mr,Pl,Cl]),E=new Uint32Array(4),P=new Int32Array(4),S=new Z,L=null,T=null,C=[],w=[],N=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ti,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let F=this,B=!1,H=null,V=null,z=null,W=null;this._outputColorSpace=wn;let $=0,k=0,J=null,q=-1,it=null,st=new Ye,St=new Ye,wt=null,$t=new ae(0),Kt=0,re=e.width,ct=e.height,pt=1,Bt=null,ie=null,Ft=new Ye(0,0,re,ct),de=new Ye(0,0,re,ct),qe=!1,fe=new rr,_e=!1,Ie=!1,ge=new De,Re=new Z,Je=new Ye,ln={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Ue=!1;function Xe(){return J===null?pt:1}let Q=i;function je(D,j){return e.getContext(D,j)}let we,I,R,nt,lt,dt,Et,Tt,ft,vt,At,Gt,Nt,Pt,Ht,Qt,le,K,Rt,gt,Ct,Lt,bt;try{let D={alpha:!0,depth:s,stencil:o,antialias:a,premultipliedAlpha:u,preserveDrawingBuffer:f,powerPreference:p,failIfMajorPerformanceCaveat:x};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"186"}`),e.addEventListener("webglcontextlost",Te,!1),e.addEventListener("webglcontextrestored",Se,!1),e.addEventListener("webglcontextcreationerror",bn,!1),Q===null){let j="webgl2";if(Q=je(j,D),Q===null)throw je(j)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Zt()}catch(D){throw e.removeEventListener("webglcontextlost",Te,!1),e.removeEventListener("webglcontextrestored",Se,!1),e.removeEventListener("webglcontextcreationerror",bn,!1),se("WebGLRenderer: "+D.message),D}function Zt(){we=new t_(Q),we.init(),Ct=new zv(Q,we),I=new Xy(Q,we,t,Ct),R=new Bv(Q,we),I.reversedDepthBuffer&&m&&R.buffers.depth.setReversed(!0),V=Q.createFramebuffer(),z=Q.createFramebuffer(),W=Q.createFramebuffer(),nt=new i_(Q),lt=new wv,dt=new kv(Q,we,R,lt,I,Ct,nt),Et=new Qy(F),Tt=new rg(Q),Lt=new Hy(Q,Tt),ft=new e_(Q,Tt,nt,Lt),vt=new r_(Q,ft,Tt,Lt,nt),K=new s_(Q,I,dt),Ht=new Wy(lt),At=new Sv(F,Et,we,I,Lt,Ht),Gt=new Xv(F,lt),Nt=new Tv,Pt=new Lv(we),le=new Vy(F,Et,R,vt,v,u),Qt=new Uv(F,vt,I),bt=new Wv(Q,nt,I,R),Rt=new Gy(Q,we,nt),gt=new n_(Q,we,nt),nt.programs=At.programs,F.capabilities=I,F.extensions=we,F.properties=lt,F.renderLists=Nt,F.shadowMap=Qt,F.state=R,F.info=nt}M!==Rn&&(N=new a_(M,e.width,e.height,a,s,o));let Ot=new yu(F,Q);this.xr=Ot,this.getContext=function(){return Q},this.getContextAttributes=function(){return Q.getContextAttributes()},this.forceContextLoss=function(){let D=we.get("WEBGL_lose_context");D&&D.loseContext()},this.forceContextRestore=function(){let D=we.get("WEBGL_lose_context");D&&D.restoreContext()},this.getPixelRatio=function(){return pt},this.setPixelRatio=function(D){D!==void 0&&(pt=D,this.setSize(re,ct,!1))},this.getSize=function(D){return D.set(re,ct)},this.setSize=function(D,j,ht=!0){if(Ot.isPresenting){ne("WebGLRenderer: Can't change size while VR device is presenting.");return}re=D,ct=j,e.width=Math.floor(D*pt),e.height=Math.floor(j*pt),ht===!0&&(e.style.width=D+"px",e.style.height=j+"px"),N!==null&&N.setSize(e.width,e.height),this.setViewport(0,0,D,j)},this.getDrawingBufferSize=function(D){return D.set(re*pt,ct*pt).floor()},this.setDrawingBufferSize=function(D,j,ht){re=D,ct=j,pt=ht,e.width=Math.floor(D*ht),e.height=Math.floor(j*ht),this.setViewport(0,0,D,j)},this.setEffects=function(D){if(M===Rn){se("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(D){for(let j=0;j<D.length;j++)if(D[j].isOutputPass===!0){ne("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}N.setEffects(D||[])},this.getCurrentViewport=function(D){return D.copy(st)},this.getViewport=function(D){return D.copy(Ft)},this.setViewport=function(D,j,ht,ot){D.isVector4?Ft.set(D.x,D.y,D.z,D.w):Ft.set(D,j,ht,ot),R.viewport(st.copy(Ft).multiplyScalar(pt).round())},this.getScissor=function(D){return D.copy(de)},this.setScissor=function(D,j,ht,ot){D.isVector4?de.set(D.x,D.y,D.z,D.w):de.set(D,j,ht,ot),R.scissor(St.copy(de).multiplyScalar(pt).round())},this.getScissorTest=function(){return qe},this.setScissorTest=function(D){R.setScissorTest(qe=D)},this.setOpaqueSort=function(D){Bt=D},this.setTransparentSort=function(D){ie=D},this.getClearColor=function(D){return D.copy(le.getClearColor())},this.setClearColor=function(){le.setClearColor(...arguments)},this.getClearAlpha=function(){return le.getClearAlpha()},this.setClearAlpha=function(){le.setClearAlpha(...arguments)},this.clear=function(D=!0,j=!0,ht=!0){let ot=0;if(D){let at=!1;if(J!==null){let zt=J.texture.format;at=g.has(zt)}if(at){let zt=J.texture.type,It=y.has(zt),Ut=le.getClearColor(),Wt=le.getClearAlpha(),qt=Ut.r,Dt=Ut.g,xe=Ut.b;It?(E[0]=qt,E[1]=Dt,E[2]=xe,E[3]=Wt,Q.clearBufferuiv(Q.COLOR,0,E)):(P[0]=qt,P[1]=Dt,P[2]=xe,P[3]=Wt,Q.clearBufferiv(Q.COLOR,0,P))}else ot|=Q.COLOR_BUFFER_BIT}j&&(ot|=Q.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),ht&&(ot|=Q.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),ot!==0&&Q.clear(ot)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(D){D.setRenderer(this),H=D},this.dispose=function(){e.removeEventListener("webglcontextlost",Te,!1),e.removeEventListener("webglcontextrestored",Se,!1),e.removeEventListener("webglcontextcreationerror",bn,!1),le.dispose(),Nt.dispose(),Pt.dispose(),lt.dispose(),Et.dispose(),vt.dispose(),Lt.dispose(),bt.dispose(),At.dispose(),Ot.dispose(),Ot.removeEventListener("sessionstart",et),Ot.removeEventListener("sessionend",mt),kt.stop()};function Te(D){D.preventDefault(),lo("WebGLRenderer: Context Lost."),B=!0}function Se(){lo("WebGLRenderer: Context Restored."),B=!1;let D=nt.autoReset,j=Qt.enabled,ht=Qt.autoUpdate,ot=Qt.needsUpdate,at=Qt.type;Zt(),nt.autoReset=D,Qt.enabled=j,Qt.autoUpdate=ht,Qt.needsUpdate=ot,Qt.type=at}function bn(D){se("WebGLRenderer: A WebGL context could not be created. Reason: ",D.statusMessage)}function An(D){let j=D.target;j.removeEventListener("dispose",An),Es(j)}function Es(D){U(D),lt.remove(D)}function U(D){let j=lt.get(D).programs;j!==void 0&&(j.forEach(function(ht){At.releaseProgram(ht)}),D.isShaderMaterial&&At.releaseShaderCache(D))}this.renderBufferDirect=function(D,j,ht,ot,at,zt){j===null&&(j=ln);let It=at.isMesh&&at.matrixWorld.determinantAffine()<0,Ut=ai(D,j,ht,ot,at);R.setMaterial(ot,It);let Wt=ht.index,qt=1;if(ot.wireframe===!0){if(Wt=ft.getWireframeAttribute(ht),Wt===void 0)return;qt=2}let Dt=ht.drawRange,xe=ht.attributes.position,Yt=Dt.start*qt,Pe=(Dt.start+Dt.count)*qt;zt!==null&&(Yt=Math.max(Yt,zt.start*qt),Pe=Math.min(Pe,(zt.start+zt.count)*qt)),Wt!==null?(Yt=Math.max(Yt,0),Pe=Math.min(Pe,Wt.count)):xe!=null&&(Yt=Math.max(Yt,0),Pe=Math.min(Pe,xe.count));let Qe=Pe-Yt;if(Qe<0||Qe===1/0)return;Lt.setup(at,ot,Ut,ht,Wt);let Be,r=Rt;if(Wt!==null&&(Be=Tt.get(Wt),r=gt,r.setIndex(Be)),at.isMesh)ot.wireframe===!0?(R.setLineWidth(ot.wireframeLinewidth*Xe()),r.setMode(Q.LINES)):r.setMode(Q.TRIANGLES);else if(at.isLine){let l=ot.linewidth;l===void 0&&(l=1),R.setLineWidth(l*Xe()),at.isLineSegments?r.setMode(Q.LINES):at.isLineLoop?r.setMode(Q.LINE_LOOP):r.setMode(Q.LINE_STRIP)}else at.isPoints?r.setMode(Q.POINTS):at.isSprite&&r.setMode(Q.TRIANGLES);if(at.isBatchedMesh)if(we.get("WEBGL_multi_draw"))r.renderMultiDraw(at._multiDrawStarts,at._multiDrawCounts,at._multiDrawCount);else{let l=at._multiDrawStarts,h=at._multiDrawCounts,d=at._multiDrawCount,b=Wt?Tt.get(Wt).bytesPerElement:1,A=lt.get(ot).currentProgram.getUniforms();for(let O=0;O<d;O++)A.setValue(Q,"_gl_DrawID",O),r.render(l[O]/b,h[O])}else if(at.isInstancedMesh)r.renderInstances(Yt,Qe,at.count);else if(ht.isInstancedBufferGeometry){let l=ht._maxInstanceCount!==void 0?ht._maxInstanceCount:1/0,h=Math.min(ht.instanceCount,l);r.renderInstances(Yt,Qe,h)}else r.render(Yt,Qe)};function X(D,j,ht,ot){H!==null&&D.isNodeMaterial&&H.setObject(ot,D),_e===!0&&Ht.setState(D,ht,!1),D.transparent===!0&&D.side===_n&&D.forceSinglePass===!1?(D.side=Tn,D.needsUpdate=!0,Ke(D,j,ot),D.side=Qi,D.needsUpdate=!0,Ke(D,j,ot),D.side=_n):Ke(D,j,ot)}this.compile=function(D,j,ht=null){ht===null&&(ht=D),H!==null&&H.renderStart(D,j,ht),T=Pt.get(ht),T.init(j),w.push(T),ht.traverseVisible(function(at){at.isLight&&at.layers.test(j.layers)&&(T.pushLight(at),at.castShadow&&T.pushShadow(at))}),D!==ht&&D.traverseVisible(function(at){at.isLight&&at.layers.test(j.layers)&&(T.pushLight(at),at.castShadow&&T.pushShadow(at))}),T.setupLights(),H!==null&&H.updateLights(T.state.lightsArray),Ie=this.localClippingEnabled,_e=Ht.init(this.clippingPlanes,Ie),_e===!0&&Ht.setGlobalState(this.clippingPlanes,j),H!==null&&Qt.render(T.state.shadowsArray,ht,j);let ot=new Set;return D.traverse(function(at){if(!(at.isMesh||at.isPoints||at.isLine||at.isSprite))return;let zt=at.material;if(zt)if(Array.isArray(zt))for(let It=0;It<zt.length;It++){let Ut=zt[It];X(Ut,ht,j,at),ot.add(Ut)}else X(zt,ht,j,at),ot.add(zt)}),T=w.pop(),H!==null&&H.renderEnd(),ot},this.compileAsync=function(D,j,ht=null){let ot=this.compile(D,j,ht);return new Promise(at=>{function zt(){if(ot.forEach(function(It){let Wt=lt.get(It).currentProgram;(Wt===void 0||Wt.isReady())&&ot.delete(It)}),ot.size===0){at(D);return}setTimeout(zt,10)}we.get("KHR_parallel_shader_compile")!==null?zt():setTimeout(zt,10)})};let rt=null;function ut(D){rt&&rt(D)}function et(){kt.stop()}function mt(){kt.start()}let kt=new Mp;kt.setAnimationLoop(ut),typeof self<"u"&&kt.setContext(self),this.setAnimationLoop=function(D){rt=D,Ot.setAnimationLoop(D),D===null?kt.stop():kt.start()},Ot.addEventListener("sessionstart",et),Ot.addEventListener("sessionend",mt),this.render=function(D,j){if(j!==void 0&&j.isCamera!==!0){se("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(B===!0)return;H!==null&&H.renderStart(D,j);let ht=Ot.enabled===!0&&Ot.isPresenting===!0,ot=N!==null&&(J===null||ht)&&N.begin(F,J);if(D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),j.parent===null&&j.matrixWorldAutoUpdate===!0&&j.updateMatrixWorld(),Ot.enabled===!0&&Ot.isPresenting===!0&&(N===null||N.isCompositing()===!1)&&(Ot.cameraAutoUpdate===!0&&Ot.updateCamera(j),j=Ot.getCamera()),D.isScene===!0&&D.onBeforeRender(F,D,j,J),T=Pt.get(D,w.length),T.init(j),T.state.textureUnits=dt.getTextureUnits(),w.push(T),ge.multiplyMatrices(j.projectionMatrix,j.matrixWorldInverse),fe.setFromProjectionMatrix(ge,jn,j.reversedDepth),Ie=this.localClippingEnabled,_e=Ht.init(this.clippingPlanes,Ie),L=Nt.get(D,C.length),L.init(),C.push(L),Ot.enabled===!0&&Ot.isPresenting===!0){let It=F.xr.getDepthSensingMesh();It!==null&&ee(It,j,-1/0,F.sortObjects)}ee(D,j,0,F.sortObjects),L.finish(),H!==null&&H.updateLights(T.state.lightsArray),F.sortObjects===!0&&L.sort(Bt,ie),Ue=Ot.enabled===!1||Ot.isPresenting===!1||Ot.hasDepthSensing()===!1,Ue&&le.addToRenderList(L,D),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),_e===!0&&Ht.beginShadows();let at=T.state.shadowsArray;if(Qt.render(at,D,j),_e===!0&&Ht.endShadows(),(ot&&N.hasRenderPass())===!1){let It=L.opaque,Ut=L.transmissive;if(T.setupLights(),j.isArrayCamera){let Wt=j.cameras;if(Ut.length>0)for(let qt=0,Dt=Wt.length;qt<Dt;qt++){let xe=Wt[qt];Xt(It,Ut,D,xe)}Ue&&le.render(D);for(let qt=0,Dt=Wt.length;qt<Dt;qt++){let xe=Wt[qt];yt(L,D,xe,xe.viewport)}}else Ut.length>0&&Xt(It,Ut,D,j),Ue&&le.render(D),yt(L,D,j)}J!==null&&k===0&&(dt.updateMultisampleRenderTarget(J),dt.updateRenderTargetMipmap(J)),ot&&N.end(F),D.isScene===!0&&D.onAfterRender(F,D,j),Lt.resetDefaultState(),q=-1,it=null,w.pop(),w.length>0?(T=w[w.length-1],dt.setTextureUnits(T.state.textureUnits),_e===!0&&Ht.setGlobalState(F.clippingPlanes,T.state.camera)):T=null,C.pop(),C.length>0?L=C[C.length-1]:L=null,H!==null&&H.renderEnd()};function ee(D,j,ht,ot){if(D.visible===!1)return;if(D.layers.test(j.layers)){if(D.isGroup)ht=D.renderOrder;else if(D.isLOD)D.autoUpdate===!0&&D.update(j);else if(D.isLightProbeGrid)T.pushLightProbeGrid(D);else if(D.isLight)T.pushLight(D),D.castShadow&&T.pushShadow(D);else if(D.isSprite){if(!D.frustumCulled||D.intersectsFrustum(fe)){ot&&Je.setFromMatrixPosition(D.matrixWorld).applyMatrix4(ge);let It=vt.update(D),Ut=D.material;Ut.visible&&L.push(D,It,Ut,ht,Je.z,null,j)}}else if((D.isMesh||D.isLine||D.isPoints)&&(!D.frustumCulled||D.intersectsFrustum(fe))){let It=vt.update(D),Ut=D.material;if(ot&&(D.boundingSphere!==void 0?(D.boundingSphere===null&&D.computeBoundingSphere(),Je.copy(D.boundingSphere.center)):(It.boundingSphere===null&&It.computeBoundingSphere(),Je.copy(It.boundingSphere.center)),Je.applyMatrix4(D.matrixWorld).applyMatrix4(ge)),Array.isArray(Ut)){let Wt=It.groups;for(let qt=0,Dt=Wt.length;qt<Dt;qt++){let xe=Wt[qt],Yt=Ut[xe.materialIndex];Yt&&Yt.visible&&L.push(D,It,Yt,ht,Je.z,xe,j)}}else Ut.visible&&L.push(D,It,Ut,ht,Je.z,null,j)}}let zt=D.children;for(let It=0,Ut=zt.length;It<Ut;It++)ee(zt[It],j,ht,ot)}function yt(D,j,ht,ot){let{opaque:at,transmissive:zt,transparent:It}=D;T.setupLightsView(ht),_e===!0&&Ht.setGlobalState(F.clippingPlanes,ht),ot&&R.viewport(st.copy(ot)),at.length>0&&te(at,j,ht),zt.length>0&&te(zt,j,ht),It.length>0&&te(It,j,ht),R.buffers.depth.setTest(!0),R.buffers.depth.setMask(!0),R.buffers.color.setMask(!0),R.setPolygonOffset(!1)}function Xt(D,j,ht,ot){if((ht.isScene===!0?ht.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[ot.id]===void 0){let Yt=we.has("EXT_color_buffer_half_float")||we.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[ot.id]=new In(1,1,{generateMipmaps:!0,type:Yt?ii:Rn,minFilter:es,samples:Math.max(4,I.samples),stencilBuffer:o,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Me.workingColorSpace})}let zt=T.state.transmissionRenderTarget[ot.id],It=ot.viewport||st;zt.setSize(It.z*F.transmissionResolutionScale,It.w*F.transmissionResolutionScale);let Ut=F.getRenderTarget(),Wt=F.getActiveCubeFace(),qt=F.getActiveMipmapLevel();F.setRenderTarget(zt),F.getClearColor($t),Kt=F.getClearAlpha(),Kt<1&&F.setClearColor(16777215,.5),F.clear(),Ue&&le.render(ht);let Dt=F.toneMapping;F.toneMapping=ti;let xe=ot.viewport;if(ot.viewport!==void 0&&(ot.viewport=void 0),T.setupLightsView(ot),_e===!0&&Ht.setGlobalState(F.clippingPlanes,ot),te(D,ht,ot),dt.updateMultisampleRenderTarget(zt),dt.updateRenderTargetMipmap(zt),we.has("WEBGL_multisampled_render_to_texture")===!1){let Yt=!1;for(let Pe=0,Qe=j.length;Pe<Qe;Pe++){let Be=j[Pe],{object:r,geometry:l,material:h,group:d}=Be;if(h.side===_n&&r.layers.test(ot.layers)){let b=h.side;h.side=Tn,h.needsUpdate=!0,Ae(r,ht,ot,l,h,d),h.side=b,h.needsUpdate=!0,Yt=!0}}Yt===!0&&(dt.updateMultisampleRenderTarget(zt),dt.updateRenderTargetMipmap(zt))}F.setRenderTarget(Ut,Wt,qt),F.setClearColor($t,Kt),xe!==void 0&&(ot.viewport=xe),F.toneMapping=Dt}function te(D,j,ht){let ot=j.isScene===!0?j.overrideMaterial:null;for(let at=0,zt=D.length;at<zt;at++){let It=D[at],{object:Ut,geometry:Wt,group:qt}=It,Dt=It.material;Dt.allowOverride===!0&&ot!==null&&(Dt=ot),Ut.layers.test(ht.layers)&&Ae(Ut,j,ht,Wt,Dt,qt)}}function Ae(D,j,ht,ot,at,zt){H!==null&&at.isNodeMaterial&&H.setObject(D,at),D.onBeforeRender(F,j,ht,ot,at,zt),D.modelViewMatrix.multiplyMatrices(ht.matrixWorldInverse,D.matrixWorld),D.normalMatrix.getNormalMatrix(D.modelViewMatrix),at.onBeforeRender(F,j,ht,ot,D,zt),at.transparent===!0&&at.side===_n&&at.forceSinglePass===!1?(at.side=Tn,at.needsUpdate=!0,F.renderBufferDirect(ht,j,ot,at,D,zt),at.side=Qi,at.needsUpdate=!0,F.renderBufferDirect(ht,j,ot,at,D,zt),at.side=_n):F.renderBufferDirect(ht,j,ot,at,D,zt),D.onAfterRender(F,j,ht,ot,at,zt)}function Ke(D,j,ht){j.isScene!==!0&&(j=ln);let ot=lt.get(D),at=T.state.lights,zt=T.state.shadowsArray,It=at.state.version,Ut=At.getParameters(D,at.state,zt,j,ht,T.state.lightProbeGridArray),Wt=At.getProgramCacheKey(Ut),qt=ot.programs;ot.environment=D.isMeshStandardMaterial||D.isMeshLambertMaterial||D.isMeshPhongMaterial?j.environment:null,ot.fog=j.fog;let Dt=D.isMeshStandardMaterial||D.isMeshLambertMaterial&&!D.envMap||D.isMeshPhongMaterial&&!D.envMap;ot.envMap=Et.get(D.envMap||ot.environment,Dt),ot.envMapRotation=ot.environment!==null&&D.envMap===null?j.environmentRotation:D.envMapRotation,qt===void 0&&(D.addEventListener("dispose",An),qt=new Map,ot.programs=qt);let xe=qt.get(Wt);if(xe!==void 0){if(ot.currentProgram===xe&&ot.lightsStateVersion===It)return oi(D,Ut),xe}else Ut.uniforms=At.getUniforms(D),H!==null&&D.isNodeMaterial&&H.build(D,ht,Ut),D.onBeforeCompile(Ut,F),xe=At.acquireProgram(Ut,Wt),qt.set(Wt,xe),ot.uniforms=Ut.uniforms;let Yt=ot.uniforms;return(!D.isShaderMaterial&&!D.isRawShaderMaterial||D.clipping===!0)&&(Yt.clippingPlanes=Ht.uniform),oi(D,Ut),ot.needsLights=Cc(D),ot.lightsStateVersion=It,ot.needsLights&&(Yt.ambientLightColor.value=at.state.ambient,Yt.lightProbe.value=at.state.probe,Yt.sunLights.value=at.state.sun,Yt.sunLightShadows.value=at.state.sunShadow,Yt.directionalLights.value=at.state.directional,Yt.directionalLightShadows.value=at.state.directionalShadow,Yt.spotLights.value=at.state.spot,Yt.spotLightShadows.value=at.state.spotShadow,Yt.rectAreaLights.value=at.state.rectArea,Yt.ltc_1.value=at.state.rectAreaLTC1,Yt.ltc_2.value=at.state.rectAreaLTC2,Yt.pointLights.value=at.state.point,Yt.pointLightShadows.value=at.state.pointShadow,Yt.hemisphereLights.value=at.state.hemi,Yt.sunShadowMatrix.value=at.state.sunShadowMatrix,Yt.sunShadowCascade.value=at.state.sunShadowCascade,Yt.directionalShadowMatrix.value=at.state.directionalShadowMatrix,Yt.spotLightMatrix.value=at.state.spotLightMatrix,Yt.spotLightMap.value=at.state.spotLightMap,Yt.pointShadowMatrix.value=at.state.pointShadowMatrix),ot.lightProbeGrid=T.state.lightProbeGridArray.length>0,ot.currentProgram=xe,ot.uniformsList=null,xe}function We(D){if(D.uniformsList===null){let j=D.currentProgram.getUniforms();D.uniformsList=yr.seqWithValue(j.seq,D.uniforms)}return D.uniformsList}function oi(D,j){let ht=lt.get(D);ht.outputColorSpace=j.outputColorSpace,ht.batching=j.batching,ht.batchingColor=j.batchingColor,ht.instancing=j.instancing,ht.instancingColor=j.instancingColor,ht.instancingMorph=j.instancingMorph,ht.skinning=j.skinning,ht.morphTargets=j.morphTargets,ht.morphNormals=j.morphNormals,ht.morphColors=j.morphColors,ht.morphTargetsCount=j.morphTargetsCount,ht.numClippingPlanes=j.numClippingPlanes,ht.numIntersection=j.numClipIntersection,ht.vertexAlphas=j.vertexAlphas,ht.vertexTangents=j.vertexTangents,ht.toneMapping=j.toneMapping}function Ts(D,j){if(D.length===0)return null;if(D.length===1)return D[0].texture!==null?D[0]:null;S.setFromMatrixPosition(j.matrixWorld);for(let ht=0,ot=D.length;ht<ot;ht++){let at=D[ht];if(at.texture!==null&&at.boundingBox.containsPoint(S))return at}return null}function ai(D,j,ht,ot,at){j.isScene!==!0&&(j=ln),dt.resetTextureUnits();let zt=j.fog,It=ot.isMeshStandardMaterial||ot.isMeshLambertMaterial||ot.isMeshPhongMaterial?j.environment:null,Ut=J===null?F.outputColorSpace:J.isXRRenderTarget===!0?J.texture.colorSpace:Me.workingColorSpace,Wt=ot.isMeshStandardMaterial||ot.isMeshLambertMaterial&&!ot.envMap||ot.isMeshPhongMaterial&&!ot.envMap,qt=Et.get(ot.envMap||It,Wt),Dt=ot.vertexColors===!0&&!!ht.attributes.color&&ht.attributes.color.itemSize===4,xe=!!ht.attributes.tangent&&(!!ot.normalMap||ot.anisotropy>0),Yt=!!ht.morphAttributes.position,Pe=!!ht.morphAttributes.normal,Qe=!!ht.morphAttributes.color,Be=ti;ot.toneMapped&&(J===null||J.isXRRenderTarget===!0)&&(Be=F.toneMapping);let r=ht.morphAttributes.position||ht.morphAttributes.normal||ht.morphAttributes.color,l=r!==void 0?r.length:0,h=lt.get(ot),d=T.state.lights;if(_e===!0&&(Ie===!0||D!==it)){let Mt=D===it&&ot.id===q;Ht.setState(ot,D,Mt)}let b=!1;ot.version===h.__version?(h.needsLights&&h.lightsStateVersion!==d.state.version||h.outputColorSpace!==Ut||at.isBatchedMesh&&h.batching===!1||!at.isBatchedMesh&&h.batching===!0||at.isBatchedMesh&&h.batchingColor===!0&&at._colorsTexture===null||at.isBatchedMesh&&h.batchingColor===!1&&at._colorsTexture!==null||at.isInstancedMesh&&h.instancing===!1||!at.isInstancedMesh&&h.instancing===!0||at.isSkinnedMesh&&h.skinning===!1||!at.isSkinnedMesh&&h.skinning===!0||at.isInstancedMesh&&h.instancingColor===!0&&at.instanceColor===null||at.isInstancedMesh&&h.instancingColor===!1&&at.instanceColor!==null||at.isInstancedMesh&&h.instancingMorph===!0&&at.morphTexture===null||at.isInstancedMesh&&h.instancingMorph===!1&&at.morphTexture!==null||h.envMap!==qt||ot.fog===!0&&h.fog!==zt||h.numClippingPlanes!==void 0&&(h.numClippingPlanes!==Ht.numPlanes||h.numIntersection!==Ht.numIntersection)||h.vertexAlphas!==Dt||h.vertexTangents!==xe||h.morphTargets!==Yt||h.morphNormals!==Pe||h.morphColors!==Qe||h.toneMapping!==Be||h.morphTargetsCount!==l||!!h.lightProbeGrid!=T.state.lightProbeGridArray.length>0)&&(b=!0):(b=!0,h.__version=ot.version);let A=h.currentProgram;b===!0&&(A=Ke(ot,j,at),H&&ot.isNodeMaterial&&H.onUpdateProgram(ot,A,h));let O=!1,G=!1,Y=!1,tt=A.getUniforms(),_t=h.uniforms;if(R.useProgram(A.program)&&(O=!0,G=!0,Y=!0),ot.id!==q&&(q=ot.id,G=!0),h.needsLights){let Mt=Ts(T.state.lightProbeGridArray,at);h.lightProbeGrid!==Mt&&(h.lightProbeGrid=Mt,G=!0)}if(O||it!==D){R.buffers.depth.getReversed()&&D.reversedDepth!==!0&&(D._reversedDepth=!0,D.updateProjectionMatrix()),tt.setValue(Q,"projectionMatrix",D.projectionMatrix),tt.setValue(Q,"viewMatrix",D.matrixWorldInverse);let jt=tt.map.cameraPosition;jt!==void 0&&jt.setValue(Q,Re.setFromMatrixPosition(D.matrixWorld)),I.logarithmicDepthBuffer&&tt.setValue(Q,"logDepthBufFC",2/(Math.log(D.far+1)/Math.LN2)),(ot.isMeshPhongMaterial||ot.isMeshToonMaterial||ot.isMeshLambertMaterial||ot.isMeshBasicMaterial||ot.isMeshStandardMaterial||ot.isShaderMaterial)&&tt.setValue(Q,"isOrthographic",D.isOrthographicCamera===!0),it!==D&&(it=D,G=!0,Y=!0)}if(h.needsLights&&(d.state.sunShadowMap.length>0&&tt.setValue(Q,"sunShadowMap",d.state.sunShadowMap,dt),d.state.directionalShadowMap.length>0&&tt.setValue(Q,"directionalShadowMap",d.state.directionalShadowMap,dt),d.state.spotShadowMap.length>0&&tt.setValue(Q,"spotShadowMap",d.state.spotShadowMap,dt),d.state.pointShadowMap.length>0&&tt.setValue(Q,"pointShadowMap",d.state.pointShadowMap,dt)),at.isSkinnedMesh){tt.setOptional(Q,at,"bindMatrix"),tt.setOptional(Q,at,"bindMatrixInverse");let Mt=at.skeleton;Mt&&(Mt.boneTexture===null&&Mt.computeBoneTexture(),tt.setValue(Q,"boneTexture",Mt.boneTexture,dt))}at.isBatchedMesh&&(tt.setOptional(Q,at,"batchingTexture"),tt.setValue(Q,"batchingTexture",at._matricesTexture,dt),tt.setOptional(Q,at,"batchingIdTexture"),tt.setValue(Q,"batchingIdTexture",at._indirectTexture,dt),tt.setOptional(Q,at,"batchingColorTexture"),at._colorsTexture!==null&&tt.setValue(Q,"batchingColorTexture",at._colorsTexture,dt));let xt=ht.morphAttributes;if((xt.position!==void 0||xt.normal!==void 0||xt.color!==void 0)&&K.update(at,ht,A),(G||h.receiveShadow!==at.receiveShadow)&&(h.receiveShadow=at.receiveShadow,tt.setValue(Q,"receiveShadow",at.receiveShadow)),(ot.isMeshStandardMaterial||ot.isMeshLambertMaterial||ot.isMeshPhongMaterial)&&ot.envMap===null&&j.environment!==null&&(_t.envMapIntensity.value=j.environmentIntensity),_t.dfgLUT!==void 0&&(_t.dfgLUT.value=$v()),G){if(tt.setValue(Q,"toneMappingExposure",F.toneMappingExposure),h.needsLights&&Pc(_t,Y),zt&&ot.fog===!0&&Gt.refreshFogUniforms(_t,zt),Gt.refreshMaterialUniforms(_t,ot,pt,ct,T.state.transmissionRenderTarget[D.id]),h.needsLights&&h.lightProbeGrid){let Mt=h.lightProbeGrid;_t.probesSH.value=Mt.texture,_t.probesMin.value.copy(Mt.boundingBox.min),_t.probesMax.value.copy(Mt.boundingBox.max),_t.probesResolution.value.copy(Mt.resolution)}yr.upload(Q,We(h),_t,dt)}if(ot.isShaderMaterial&&ot.uniformsNeedUpdate===!0&&(yr.upload(Q,We(h),_t,dt),ot.uniformsNeedUpdate=!1),ot.isSpriteMaterial&&tt.setValue(Q,"center",at.center),tt.setValue(Q,"modelViewMatrix",at.modelViewMatrix),tt.setValue(Q,"normalMatrix",at.normalMatrix),tt.setValue(Q,"modelMatrix",at.matrixWorld),ot.uniformsGroups!==void 0){let Mt=ot.uniformsGroups;for(let jt=0,ce=Mt.length;jt<ce;jt++){let ye=Mt[jt];bt.update(ye,A),bt.bind(ye,A)}}return A}function Pc(D,j){D.ambientLightColor.needsUpdate=j,D.lightProbe.needsUpdate=j,D.sunLights.needsUpdate=j,D.sunLightShadows.needsUpdate=j,D.directionalLights.needsUpdate=j,D.directionalLightShadows.needsUpdate=j,D.pointLights.needsUpdate=j,D.pointLightShadows.needsUpdate=j,D.spotLights.needsUpdate=j,D.spotLightShadows.needsUpdate=j,D.rectAreaLights.needsUpdate=j,D.hemisphereLights.needsUpdate=j}function Cc(D){return D.isMeshLambertMaterial||D.isMeshToonMaterial||D.isMeshPhongMaterial||D.isMeshStandardMaterial||D.isShadowMaterial||D.isShaderMaterial&&D.lights===!0}this.getActiveCubeFace=function(){return $},this.getActiveMipmapLevel=function(){return k},this.getRenderTarget=function(){return J},this.setRenderTargetTextures=function(D,j,ht){let ot=lt.get(D);ot.__autoAllocateDepthBuffer=D.resolveDepthBuffer===!1,ot.__autoAllocateDepthBuffer===!1&&(ot.__useRenderToTexture=!1),lt.get(D.texture).__webglTexture=j,lt.get(D.depthTexture).__webglTexture=ot.__autoAllocateDepthBuffer?void 0:ht,ot.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(D,j){let ht=lt.get(D);ht.__webglFramebuffer=j,ht.__useDefaultFramebuffer=j===void 0},this.setRenderTarget=function(D,j=0,ht=0){J=D,$=j,k=ht;let ot=null,at=!1,zt=!1;if(D){let Ut=lt.get(D);if(Ut.__useDefaultFramebuffer!==void 0){R.bindFramebuffer(Q.FRAMEBUFFER,Ut.__webglFramebuffer),st.copy(D.viewport),St.copy(D.scissor),wt=D.scissorTest,R.viewport(st),R.scissor(St),R.setScissorTest(wt),q=-1;return}else if(Ut.__webglFramebuffer===void 0)dt.setupRenderTarget(D);else if(Ut.__hasExternalTextures)dt.rebindTextures(D,lt.get(D.texture).__webglTexture,lt.get(D.depthTexture).__webglTexture);else if(D.depthBuffer){let Dt=D.depthTexture;if(Ut.__boundDepthTexture!==Dt){if(Dt!==null&&lt.has(Dt)&&(D.width!==Dt.image.width||D.height!==Dt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");dt.setupDepthRenderbuffer(D)}}let Wt=D.texture;(Wt.isData3DTexture||Wt.isDataArrayTexture||Wt.isCompressedArrayTexture)&&(zt=!0);let qt=lt.get(D).__webglFramebuffer;D.isWebGLCubeRenderTarget?(Array.isArray(qt[j])?ot=qt[j][ht]:ot=qt[j],at=!0):D.samples>0&&dt.useMultisampledRTT(D)===!1?ot=lt.get(D).__webglMultisampledFramebuffer:Array.isArray(qt)?ot=qt[ht]:ot=qt,st.copy(D.viewport),St.copy(D.scissor),wt=D.scissorTest}else st.copy(Ft).multiplyScalar(pt).floor(),St.copy(de).multiplyScalar(pt).floor(),wt=qe;if(ht!==0&&(ot=V),R.bindFramebuffer(Q.FRAMEBUFFER,ot)&&R.drawBuffers(D,ot),R.viewport(st),R.scissor(St),R.setScissorTest(wt),at){let Ut=lt.get(D.texture);Q.framebufferTexture2D(Q.FRAMEBUFFER,Q.COLOR_ATTACHMENT0,Q.TEXTURE_CUBE_MAP_POSITIVE_X+j,Ut.__webglTexture,ht)}else if(zt){let Ut=j;for(let Wt=0;Wt<D.textures.length;Wt++){let qt=lt.get(D.textures[Wt]);Q.framebufferTextureLayer(Q.FRAMEBUFFER,Q.COLOR_ATTACHMENT0+Wt,qt.__webglTexture,ht,Ut)}}else if(D!==null&&ht!==0){let Ut=lt.get(D.texture);Q.framebufferTexture2D(Q.FRAMEBUFFER,Q.COLOR_ATTACHMENT0,Q.TEXTURE_2D,Ut.__webglTexture,ht)}q=-1};function qo(D){let j=lt.get(D);return(j.__readFormat!==D.format||j.__readType!==D.type)&&(j.__readFormat=D.format,j.__readType=D.type,j.__formatReadable=I.textureFormatReadable(D.format),j.__typeReadable=I.textureTypeReadable(D.type)),j}this.readRenderTargetPixels=function(D,j,ht,ot,at,zt,It,Ut=0){if(!(D&&D.isWebGLRenderTarget)){se("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Wt=lt.get(D).__webglFramebuffer;if(D.isWebGLCubeRenderTarget&&It!==void 0&&(Wt=Wt[It]),Wt){R.bindFramebuffer(Q.FRAMEBUFFER,Wt);try{let qt=D.textures[Ut],Dt=qt.format,xe=qt.type;D.textures.length>1&&Q.readBuffer(Q.COLOR_ATTACHMENT0+Ut);let Yt=qo(qt);if(Yt.__formatReadable===!1){se("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Yt.__typeReadable===!1){se("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}j>=0&&j<=D.width-ot&&ht>=0&&ht<=D.height-at&&Q.readPixels(j,ht,ot,at,Ct.convert(Dt),Ct.convert(xe),zt)}finally{let qt=J!==null?lt.get(J).__webglFramebuffer:null;R.bindFramebuffer(Q.FRAMEBUFFER,qt)}}},this.readRenderTargetPixelsAsync=async function(D,j,ht,ot,at,zt,It,Ut=0){if(!(D&&D.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Wt=lt.get(D).__webglFramebuffer;if(D.isWebGLCubeRenderTarget&&It!==void 0&&(Wt=Wt[It]),Wt)if(j>=0&&j<=D.width-ot&&ht>=0&&ht<=D.height-at){R.bindFramebuffer(Q.FRAMEBUFFER,Wt);let qt=D.textures[Ut],Dt=qt.format,xe=qt.type;D.textures.length>1&&Q.readBuffer(Q.COLOR_ATTACHMENT0+Ut);let Yt=qo(qt);if(Yt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Yt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Pe=Q.createBuffer();Q.bindBuffer(Q.PIXEL_PACK_BUFFER,Pe),Q.bufferData(Q.PIXEL_PACK_BUFFER,zt.byteLength,Q.STREAM_READ),Q.readPixels(j,ht,ot,at,Ct.convert(Dt),Ct.convert(xe),0),Q.bindBuffer(Q.PIXEL_PACK_BUFFER,null);let Qe=J!==null?lt.get(J).__webglFramebuffer:null;R.bindFramebuffer(Q.FRAMEBUFFER,Qe);let Be=Q.fenceSync(Q.SYNC_GPU_COMMANDS_COMPLETE,0);return Q.flush(),await Xd(Q,Be,4),Q.bindBuffer(Q.PIXEL_PACK_BUFFER,Pe),Q.getBufferSubData(Q.PIXEL_PACK_BUFFER,0,zt),Q.bindBuffer(Q.PIXEL_PACK_BUFFER,null),Q.deleteBuffer(Pe),Q.deleteSync(Be),zt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(D,j=null,ht=0){let ot=Math.pow(2,-ht),at=Math.floor(D.image.width*ot),zt=Math.floor(D.image.height*ot),It=j!==null?j.x:0,Ut=j!==null?j.y:0;dt.setTexture2D(D,0),Q.copyTexSubImage2D(Q.TEXTURE_2D,ht,0,0,It,Ut,at,zt),R.unbindTexture()},this.copyTextureToTexture=function(D,j,ht=null,ot=null,at=0,zt=0){let It,Ut,Wt,qt,Dt,xe,Yt,Pe,Qe,Be=D.isCompressedTexture?D.mipmaps[zt]:D.image;if(ht!==null)It=ht.max.x-ht.min.x,Ut=ht.max.y-ht.min.y,Wt=ht.isBox3?ht.max.z-ht.min.z:1,qt=ht.min.x,Dt=ht.min.y,xe=ht.isBox3?ht.min.z:0;else{let _t=Math.pow(2,-at);It=Math.floor(Be.width*_t),Ut=Math.floor(Be.height*_t),D.isDataArrayTexture?Wt=Be.depth:D.isData3DTexture?Wt=Math.floor(Be.depth*_t):Wt=1,qt=0,Dt=0,xe=0}ot!==null?(Yt=ot.x,Pe=ot.y,Qe=ot.z):(Yt=0,Pe=0,Qe=0);let r=Ct.convert(j.format),l=Ct.convert(j.type),h;j.isData3DTexture?(dt.setTexture3D(j,0),h=Q.TEXTURE_3D):j.isDataArrayTexture||j.isCompressedArrayTexture?(dt.setTexture2DArray(j,0),h=Q.TEXTURE_2D_ARRAY):(dt.setTexture2D(j,0),h=Q.TEXTURE_2D),R.activeTexture(Q.TEXTURE0),R.pixelStorei(Q.UNPACK_FLIP_Y_WEBGL,j.flipY),R.pixelStorei(Q.UNPACK_PREMULTIPLY_ALPHA_WEBGL,j.premultiplyAlpha),R.pixelStorei(Q.UNPACK_ALIGNMENT,j.unpackAlignment);let d=R.getParameter(Q.UNPACK_ROW_LENGTH),b=R.getParameter(Q.UNPACK_IMAGE_HEIGHT),A=R.getParameter(Q.UNPACK_SKIP_PIXELS),O=R.getParameter(Q.UNPACK_SKIP_ROWS),G=R.getParameter(Q.UNPACK_SKIP_IMAGES);R.pixelStorei(Q.UNPACK_ROW_LENGTH,Be.width),R.pixelStorei(Q.UNPACK_IMAGE_HEIGHT,Be.height),R.pixelStorei(Q.UNPACK_SKIP_PIXELS,qt),R.pixelStorei(Q.UNPACK_SKIP_ROWS,Dt),R.pixelStorei(Q.UNPACK_SKIP_IMAGES,xe);let Y=D.isDataArrayTexture||D.isData3DTexture,tt=j.isDataArrayTexture||j.isData3DTexture;if(D.isDepthTexture){let _t=lt.get(D),xt=lt.get(j),Mt=lt.get(_t.__renderTarget),jt=lt.get(xt.__renderTarget);R.bindFramebuffer(Q.READ_FRAMEBUFFER,Mt.__webglFramebuffer),R.bindFramebuffer(Q.DRAW_FRAMEBUFFER,jt.__webglFramebuffer);for(let ce=0;ce<Wt;ce++)Y&&(Q.framebufferTextureLayer(Q.READ_FRAMEBUFFER,Q.COLOR_ATTACHMENT0,lt.get(D).__webglTexture,at,xe+ce),Q.framebufferTextureLayer(Q.DRAW_FRAMEBUFFER,Q.COLOR_ATTACHMENT0,lt.get(j).__webglTexture,zt,Qe+ce)),Q.blitFramebuffer(qt,Dt,It,Ut,Yt,Pe,It,Ut,Q.DEPTH_BUFFER_BIT,Q.NEAREST);R.bindFramebuffer(Q.READ_FRAMEBUFFER,null),R.bindFramebuffer(Q.DRAW_FRAMEBUFFER,null)}else if(at!==0||D.isRenderTargetTexture||lt.has(D)){let _t=lt.get(D),xt=lt.get(j);R.bindFramebuffer(Q.READ_FRAMEBUFFER,z),R.bindFramebuffer(Q.DRAW_FRAMEBUFFER,W);for(let Mt=0;Mt<Wt;Mt++)Y?Q.framebufferTextureLayer(Q.READ_FRAMEBUFFER,Q.COLOR_ATTACHMENT0,_t.__webglTexture,at,xe+Mt):Q.framebufferTexture2D(Q.READ_FRAMEBUFFER,Q.COLOR_ATTACHMENT0,Q.TEXTURE_2D,_t.__webglTexture,at),tt?Q.framebufferTextureLayer(Q.DRAW_FRAMEBUFFER,Q.COLOR_ATTACHMENT0,xt.__webglTexture,zt,Qe+Mt):Q.framebufferTexture2D(Q.DRAW_FRAMEBUFFER,Q.COLOR_ATTACHMENT0,Q.TEXTURE_2D,xt.__webglTexture,zt),at!==0?Q.blitFramebuffer(qt,Dt,It,Ut,Yt,Pe,It,Ut,Q.COLOR_BUFFER_BIT,Q.NEAREST):tt?Q.copyTexSubImage3D(h,zt,Yt,Pe,Qe+Mt,qt,Dt,It,Ut):Q.copyTexSubImage2D(h,zt,Yt,Pe,qt,Dt,It,Ut);R.bindFramebuffer(Q.READ_FRAMEBUFFER,null),R.bindFramebuffer(Q.DRAW_FRAMEBUFFER,null)}else tt?D.isDataTexture||D.isData3DTexture?Q.texSubImage3D(h,zt,Yt,Pe,Qe,It,Ut,Wt,r,l,Be.data):j.isCompressedArrayTexture?Q.compressedTexSubImage3D(h,zt,Yt,Pe,Qe,It,Ut,Wt,r,Be.data):Q.texSubImage3D(h,zt,Yt,Pe,Qe,It,Ut,Wt,r,l,Be):D.isDataTexture?Q.texSubImage2D(Q.TEXTURE_2D,zt,Yt,Pe,It,Ut,r,l,Be.data):D.isCompressedTexture?Q.compressedTexSubImage2D(Q.TEXTURE_2D,zt,Yt,Pe,Be.width,Be.height,r,Be.data):Q.texSubImage2D(Q.TEXTURE_2D,zt,Yt,Pe,It,Ut,r,l,Be);R.pixelStorei(Q.UNPACK_ROW_LENGTH,d),R.pixelStorei(Q.UNPACK_IMAGE_HEIGHT,b),R.pixelStorei(Q.UNPACK_SKIP_PIXELS,A),R.pixelStorei(Q.UNPACK_SKIP_ROWS,O),R.pixelStorei(Q.UNPACK_SKIP_IMAGES,G),zt===0&&j.generateMipmaps&&Q.generateMipmap(h),R.unbindTexture()},this.initRenderTarget=function(D){lt.get(D).__webglFramebuffer===void 0&&dt.setupRenderTarget(D)},this.initTexture=function(D){D.isCubeTexture?dt.setTextureCube(D,0):D.isData3DTexture?dt.setTexture3D(D,0):D.isDataArrayTexture||D.isCompressedArrayTexture?dt.setTexture2DArray(D,0):dt.setTexture2D(D,0),R.unbindTexture()},this.resetState=function(){$=0,k=0,J=null,R.reset(),Lt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return jn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=Me._getDrawingBufferColorSpace(t),e.unpackColorSpace=Me._getUnpackColorSpace()}}});function _u(n){let t=n.stock.top,e=n.ops.filter(g=>g.enabled!==!1),i=e.filter(g=>g.kind==="cutout"),s=i.length?Vn(i.flatMap(g=>g.region)):[[[n.stock.minX,n.stock.minY],[n.stock.maxX,n.stock.minY],[n.stock.maxX,n.stock.maxY],[n.stock.minX,n.stock.maxY]]],o=new Map;for(let g of e){let y=g.kind==="pocket"?g.region:g.kind==="inside"?g.zBottom>0?bi(g.loops,Fe(g.loops,-g.tool.diameter)):g.loops:null;if(!y?.length)continue;let E=Math.max(0,g.zBottom);o.set(E,[...o.get(E)||[],...y])}let c=[...o.keys()].sort((g,y)=>g-y),a=[],u=[];for(let g of c){let y=Vn(o.get(g)),E=Cn(na(bi(y,u),s),.01);g>0&&E.length&&a.push({z:g,region:E}),u=Vn([...u,...y])}let f=Vn(i.filter(g=>g.inner).flatMap(g=>g.region)),p=f.length?Vn([...o.values()].flat().filter(g=>ia(g[0],f))):[],x=Cn(Vn([...bi(s,u),...bi(f,p)]),.01);a.push({z:t,region:x});let m=g=>{for(let y of a)if(ia(g,y.region))return y.z;return 0},_=[],v=[],M=(g,y,E)=>(_.push(g,y,E),_.length/3-1);for(let g of a)for(let[y,...E]of Oi(g.region)){let P=N=>N.map(([F,B])=>new Jt(F,B)),S=P(y),L=E.map(P),T=Mo.triangulateShape(S,L),C=[...S,...L.flat()],w=_.length/3;for(let N of C)_.push(N.x,N.y,g.z);for(let N of T)v.push(w+N[0],w+N[1],w+N[2]);for(let N of[y,...E])for(let F=0;F<N.length;F++){let B=N[F],H=N[(F+1)%N.length],V=H[0]-B[0],z=H[1]-B[1],W=Math.hypot(V,z);if(W<1e-9)continue;let $=(B[0]+H[0])/2,k=(B[1]+H[1])/2,J=z/W*.05,q=-V/W*.05,it=ia([$+J,k+q],g.region)?[$-J,k-q]:[$+J,k+q],st=m(it);if(st>=g.z-1e-6)continue;let St=M(B[0],B[1],g.z),wt=M(H[0],H[1],g.z),$t=M(H[0],H[1],st),Kt=M(B[0],B[1],st);v.push(St,wt,$t,St,$t,Kt)}}return{positions:Float32Array.from(_),indices:Uint32Array.from(v)}}var Cp=pe(()=>{Wo();Yr()});function si(n,t,e){let i=Math.max(1,Math.ceil((n-t)/e-1e-6));return Array.from({length:i},(s,o)=>n-(o+1)*(n-t)/i)}function ws(n,t,e,i,s,o,c){let a=[...t.breaks(e,i),i];if(c)for(let f of c.edges(e,i))a.push(f);a.sort((f,p)=>f-p);let u=e;for(let f of a){if(f-u<1e-9)continue;let p=(u+f)/2,x=c&&c.inside(p)?c.top:-1/0,[m,_]=t.at(u),v=Math.max(s(u),x),M=n.at;M&&(Math.abs(M.z-v)>1e-6||Math.abs(M.x-m)>1e-6||Math.abs(M.y-_)>1e-6)&&n.feed(m,_,v,o);let[g,y]=t.at(f);n.feed(g,y,Math.max(s(f),x),o),u=f}}function vc(n,t,e,i,s,o,c){let a=Math.max(0,(i-s)/Math.tan(o.rampAngle*Math.PI/180));if(t.length<1||a<1e-6){let[f,p]=t.at(e);return n.feed(f,p,c&&c.inside(e)?Math.max(s,c.top):s,o.plunge),ws(n,t,e,e+t.length,()=>s,o.feed,c),e}let u=e+a;return ws(n,t,e,u,f=>i-(f-e)/a*(i-s),Math.min(o.feed,o.plunge*2),c),ws(n,t,u,u+t.length,()=>s,o.feed,c),u}function Kv(n,t,e,i){let s=[];for(let o=t,c=0;c<500;o+=e,c++){let a=as(Cn(Fe(n,-o,i),.001),.005);if(!a.length)break;s.push(a)}return s}function Qv(n){let t=n.map((s,o)=>s.map(c=>({loop:c,depth:o,kids:[]})));for(let s=1;s<t.length;s++)for(let o of t[s])(t[s-1].find(a=>vi(o.loop[0],a.loop)&&Math.sign(mn(a.loop))===Math.sign(mn(o.loop)))||t[s-1].find(a=>vi(o.loop[0],a.loop))||t[0][0]).kids.push(o);let e=[],i=s=>{if(!s.kids.length){e.push([s.loop]);return}for(let o of s.kids)i(o);e[e.length-1].push(s.loop)};for(let s of t[0]||[])mn(s.loop)>0&&i(s);for(let s of t[0]||[])mn(s.loop)<=0&&!t[0].some(o=>o.kids.includes(s))&&i(s);return e}function br(n,t){let e=0;for(let i of t)vi(n,i)&&(e+=mn(i)>0?1:-1);return e>0}function tb(n,t,e){let i=Math.max(2,Math.ceil(Math.hypot(t[0]-n[0],t[1]-n[1])/.2));for(let s=1;s<i;s++){let o=s/i;if(!br([n[0]+(t[0]-n[0])*o,n[1]+(t[1]-n[1])*o],e))return!1}return!0}function _c(n,t,e,i,s,o,c,a=null,u=null){let f=Math.min(i.stepover,e*.95),p=Kv(t,e+c,f,c>=.2?.05:void 0);if(!p.length)return;let x=Fe(t,-(e+c)+.01),m=Qv(p),_=s;for(let v of si(s,o,i.stepdown)){for(let M of m){let g=new ri(M[0]),[y,E]=g.at(0);n.goTo(y,E,Math.max(_,u?u(y,E):_)),n.feed(y,E,_,i.plunge);let P=vc(n,g,0,_,v,i);for(let S=1;S<M.length;S++){let L=g.at(P),T=new ri(M[S]),C=T.nearest(L);if(!tb(L,T.at(C),x)){[y,E]=T.at(C);let w=n.travel?Math.max(_+1,Math.min(a??1/0,n.travel({x:L[0],y:L[1]},{x:y,y:E}))):a??_+1;n.rapid(L[0],L[1],w),n.rapid(y,E,w);let N=Math.max(_,u?u(y,E):_)+1;w>N&&n.rapid(y,E,N),n.feed(y,E,v,i.plunge)}ws(n,T,C,C+T.length,()=>v,i.feed),g=T,P=C}}_=v}n.retract()}function Rp(n,t,e,i,s,o,c){let a=as(Cn(Fe(t,-e),.001),.005);for(let u of a){let f=new ri(u),[p,x]=f.at(0);n.goTo(p,x,s);for(let m of si(s,o,c))n.feed(p,x,m,i.plunge),ws(n,f,0,f.length,()=>m,i.feed*.9);n.retract()}}function eb(n,t,e,i,s,o,c,a){let u=e?Fe(e,-(i-.05)):null,f=e?Fe(e,-(i+.05)):null,p=x=>!e||br(x,u)&&!br(x,f);for(let x of as(Cn(Fe(t,-(i+.02)),.001),.005)){let m=new ri(x),_=Math.max(8,Math.ceil(m.length/.5)),v=Array.from({length:_},(y,E)=>p(m.at(E/_*m.length)));if(!v.some(Boolean))continue;let M=v.every(Boolean),g=M?0:v.indexOf(!1);for(let y=0;y<_;y++){let E=(g+y)%_;if(!v[E]||!M&&v[(E-1+_)%_])continue;let P=E;for(;P-E<_-1&&v[(P+1)%_];)P++;let S=E/_*m.length,L=M?S+m.length:(P+1)/_*m.length,[T,C]=m.at(S);if(n.goTo(T,C,Math.max(o,a(T,C))),n.feed(T,C,c,s.plunge),ws(n,m,S,L,()=>c,s.feed*.9),n.retract(),M)break}}}function nb(n,t,e){for(let i of t)for(let s of vr(i.loops.map(o=>[o]),n.at).map(o=>o[0])){let o=new ri(s.slice().reverse()),c=Math.max(8,Math.ceil(o.length/.25)),a=Array.from({length:c},(p,x)=>{let m=o.at(x/c*o.length);return!br(m,i.bad)&&(!i.keep||br(m,i.keep))});if(!a.some(Boolean))continue;let u=a.every(Boolean),f=u?0:a.indexOf(!1);for(let p=0;p<c;p++){let x=(f+p)%c;if(!a[x]||!u&&a[(x-1+c)%c])continue;let m=x;for(;m-x<c-1&&a[(m+1)%c];)m++;let _=x/c*o.length,v=u?_+o.length:m/c*o.length;if(!u&&v-_<.5)continue;let[M,g]=o.at(_);for(let y of si(i.z,i.z-i.depth,e.stepdown))u?(!n.at||Math.hypot(n.at.x-M,n.at.y-g)>1e-6)&&n.goTo(M,g,i.z):n.goTo(M,g,i.z),n.feed(M,g,y,e.plunge),ws(n,o,_,v,()=>y,e.feed),u||n.retract();if(n.retract(),u)break}}}function ib(n,t,e,i,s,o,c){let a=Cn(bi(t,Fe(Fe(t,-i),i)),.01);if(!a.length)return;let u=Fe(a,e+.5);for(let f of as(Cn(Fe(t,-e),.001),.005)){let p=new ri(f),x=Math.max(8,Math.ceil(p.length/.25)),m=Array.from({length:x},(v,M)=>u.some(g=>vi(p.at(M/x*p.length),g)));if(m.every(Boolean)){Rp(n,t,e,s,o,c,s.stepdown);return}let _=m.indexOf(!1);for(let v=0;v<x;v++){let M=(_+v)%x;if(!m[M]||m[(M-1+x)%x])continue;let g=M;for(;m[(g+1)%x]&&g-M<x;)g++;let y=M/x*p.length,E=(g+1)/x*p.length,[P,S]=p.at(y);n.goTo(P,S,o);let L=!0;for(let T of si(o,c,s.stepdown)){let C=[...p.breaks(y,E),E],w=L?C:[...C.slice(0,-1).reverse(),y],[N,F]=p.at(L?y:E);n.feed(N,F,T,s.plunge);for(let B of w){let[H,V]=p.at(B);n.feed(H,V,T,s.feed)}L=!L}n.retract()}}}function sb(n,t,e,i,s,o){let c=Math.min(i.stepover,e*1.6),a=t.minX-e-2,u=t.maxX+e+2;for(let f of si(s,o,i.stepdown)){let p=t.minY+e*.6;n.goTo(a,p,s),n.feed(a,p,f,i.plunge);let x=1;for(;n.feed(x>0?u:a,p,f,i.feed),!(p>=t.maxY-e*.6-1e-6);)p=Math.min(p+c,t.maxY-e*.6),n.feed(x>0?u:a,p,f,i.feed),x=-x}n.retract()}function rb(n,t,e,i){let s=t.thread,o=t.tool.cut??t.tool.diameter,c=Math.max(0,(s.major-o)/2),a=s.pitch,u=s.hand==="left"?-1:1,f=72,p=t.centers.slice();for(;p.length;){let x=n.at||p[0],m=0;p.forEach((v,M)=>{Math.hypot(v.x-x.x,v.y-x.y)<Math.hypot(p[m].x-x.x,p[m].y-x.y)&&(m=M)});let[_]=p.splice(m,1);n.goTo(_.x,_.y,t.zTop);for(let v of Ip[i]||Ip.balanced){let M=c*v;n.feed(_.x,_.y,t.zTop,e.plunge),n.feed(_.x,_.y,s.zLow,e.plunge);let g=s.zLow;for(let C=1;C<=f/2;C++){let w=Math.PI+Math.PI*C/(f/2);g=s.zLow+a/4*(C/(f/2)),n.feed(_.x+M/2+M/2*Math.cos(w),_.y+u*(M/2)*Math.sin(w),g,e.feed)}let y=(s.zHigh-g)/a,E=Math.max(1,Math.ceil(y*f)),P=0;for(let C=1;C<=E;C++)P=2*Math.PI*y*C/E,n.feed(_.x+M*Math.cos(P),_.y+u*M*Math.sin(P),g+a*P/(2*Math.PI),e.feed);let S=g+a*y,L=_.x+M/2*Math.cos(P),T=_.y+u*(M/2)*Math.sin(P);for(let C=1;C<=f/2;C++){let w=P+Math.PI*C/(f/2);n.feed(L+M/2*Math.cos(w),T+u*(M/2)*Math.sin(w),Math.min(t.zTop,S+a/4*(C/(f/2))),e.feed)}}n.feed(_.x,_.y,t.zTop,e.feed),n.retract()}}function ob(n,t,e,i,s,o){let c=t.slice();for(;c.length;){let a=n.at||c[0],u=0;c.forEach((_,v)=>{Math.hypot(_.x-a.x,_.y-a.y)<Math.hypot(c[u].x-a.x,c[u].y-a.y)&&(u=v)});let[f]=c.splice(u,1),p=Math.max(0,f.d/2-e),x=Math.max(1,Math.ceil((s-o)/i.stepdown-1e-6)),m=Math.max(12,Math.ceil(2*Math.PI*p/.05));n.goTo(f.x,f.y,s),n.feed(f.x,f.y,s,i.plunge),n.feed(f.x+p,f.y,s,i.feed);for(let _=1;_<=(x+1)*m;_++){let v=2*Math.PI*_/m,M=Math.max(o,s-(s-o)*_/(x*m));n.feed(f.x+p*Math.cos(v),f.y+p*Math.sin(v),M,i.feed)}n.feed(f.x,f.y,o,i.feed),n.retract()}}function ab(n,t,e,i,s,o){let c=Math.max(.5,o*1.5);for(let a of t){n.goTo(a.x,a.y,i);let u=i;for(;u>s+1e-6;){let f=Math.max(s,u-c);u<i&&n.rapid(a.x,a.y,u+.5),n.feed(a.x,a.y,f,e.plunge),n.rapid(a.x,a.y,i+1),u=f}n.retract()}}function Lp(n,t,e,i){let s=Math.max(0,Math.round(t.tabs.count));if(!t.tabs.enabled||!s)return null;let o=t.tabs.length??Fi(t.material).length,c=2*e+o,a=Array.from({length:s},(f,p)=>{let x=(p+.5)/s*n;return[x-c/2,x+c/2]}),u=n;return{top:i+(t.tabs.height??Fi(t.material).height),inside:f=>{let p=(f%u+u)%u;return a.some(([x,m])=>p>x&&p<m)},edges:(f,p)=>{let x=[];for(let m=Math.floor(f/u);m*u<=p;m++)for(let[_,v]of a)for(let M of[_,v]){let g=m*u+M;g>f&&g<p&&x.push(g)}return x}}}function lb(n,t,e,i,s,o,c,a){let u=[{off:e+a,fd:i}];a>0&&u.push({off:e,fd:{...i,feed:Math.round(i.feed*.9)},finish:!0});for(let f of u)for(let p of Oi(t).map(x=>x[0])){let x=as(Cn(Fe([p],f.off),.001),.005).filter(m=>mn(m)>0);for(let m of x){let _=new ri(m.slice().reverse()),v=Lp(_.length,c,e,0),[M,g]=_.at(0);n.goTo(M,g,s),n.feed(M,g,s,i.plunge);let y=0,E=s,P=f.finish?si(s,o,Math.max(i.stepdown,Math.min(6*e,s-o))):si(s,o,i.stepdown);for(let S of P)y=vc(n,_,y,E,S,f.fd,v),E=S;n.retract()}}}function cb(n,t,e,i,s,o,c,a,u){let f={...c,tabs:{...c.tabs,enabled:!!u}},p=[{off:e+a,fd:i}];a>0&&p.push({off:e,fd:{...i,feed:Math.round(i.feed*.9)},finish:!0});let x=new Set;for(let m of p)for(let _ of vr(t.map(v=>[mn(v)<0?v.slice().reverse():v]),n.at).map(v=>v[0])){let v=as(Cn(Fe([_],-m.off),.001),.005).filter(M=>mn(M)>0);!m.finish&&v.length&&x.add(_);for(let M of v){let g=new ri(M),y=Lp(g.length,f,e,0),[E,P]=g.at(0);n.goTo(E,P,s),n.feed(E,P,s,i.plunge);let S=0,L=s,T=m.finish&&x.has(_)?si(s,o,Math.max(i.stepdown,Math.min(6*e,s-o))):si(s,o,i.stepdown);for(let C of T)S=vc(n,g,S,L,C,m.fd,y),L=C;n.retract()}}}function hb(n,t,e,i,s){let o=t.slice();for(;o.length;){let c=n.at||{x:o[0].pts[0][0],y:o[0].pts[0][1]},a=0,u=!1,f=1/0;o.forEach((m,_)=>{let v=m.pts[0],M=m.pts[m.pts.length-1],g=Math.hypot(v[0]-c.x,v[1]-c.y),y=m.closed?1/0:Math.hypot(M[0]-c.x,M[1]-c.y);Math.min(g,y)<f&&(f=Math.min(g,y),a=_,u=y<g)});let[p]=o.splice(a,1),x=u?p.pts.slice().reverse():p.pts;if(p.closed){let m=new ri(x[0][0]===x.at(-1)[0]&&x[0][1]===x.at(-1)[1]?x.slice(0,-1):x),[_,v]=m.at(0);n.goTo(_,v,i),n.feed(_,v,i,e.plunge);let M=0,g=i;for(let y of si(i,s,e.stepdown))M=vc(n,m,M,g,y,e),g=y}else{let m=x;n.goTo(m[0][0],m[0][1],i);for(let _ of si(i,s,e.stepdown)){n.feed(m[0][0],m[0][1],_,e.plunge);for(let[v,M]of m.slice(1))n.feed(v,M,_,e.feed);m=m.slice().reverse()}}n.retract()}}function ub(n,t,e){let i=t.diameter/2,s=n.cell,o=t.kind==="ball",c=s*Math.SQRT1_2,a=Math.ceil((i+c)/s),u=S=>o?i-Math.sqrt(Math.max(0,i*i-S*S)):0,f=[];for(let S=-a;S<=a;S++)for(let L=-a;L<=a;L++){let T=Math.max(0,Math.hypot(L,S)*s-c);T<=i+1e-9&&f.push(L,S,u(T))}let{nx:p,ny:x,h:m,x0:_,y0:v}=n,M={r:i,c:s,n:a,zFloor:e,x:S=>_+S*s,y:S=>v+S*s};M.drop=(S,L)=>{let T=-1/0;for(let C=0;C<f.length;C+=3){let w=S+f[C],N=L+f[C+1];if(w<0||N<0||w>=p||N>=x)continue;let F=m[N*p+w]-f[C+2];F>T&&(T=F)}return T===-1/0?null:Math.max(T,e)},M.dropAt=(S,L)=>{let T=(S-_)/s,C=(L-v)/s,w=(i+c)/s,N=-1/0;for(let F=Math.max(0,Math.ceil(C-w));F<=Math.min(x-1,Math.floor(C+w));F++)for(let B=Math.max(0,Math.ceil(T-w));B<=Math.min(p-1,Math.floor(T+w));B++){let H=Math.max(0,Math.hypot(B-T,F-C)*s-c);if(H>i)continue;let V=m[F*p+B]-u(H);V>N&&(N=V)}return N===-1/0?null:Math.max(N,e)},M.underAt=(S,L)=>{let T=(S-_)/s,C=(L-v)/s,w=(i+c)/s,N=e;for(let F=Math.max(0,Math.ceil(C-w));F<=Math.min(x-1,Math.floor(C+w));F++)for(let B=Math.max(0,Math.ceil(T-w));B<=Math.min(p-1,Math.floor(T+w));B++)m[F*p+B]>N&&(N=m[F*p+B]);return N};let g=1/0,y=-1,E=1/0,P=-1;for(let S=0;S<x;S++)for(let L=0;L<p;L++)m[S*p+L]!==-1/0&&(L<g&&(g=L),L>y&&(y=L),S<E&&(E=S),S>P&&(P=S));return M.box=y<0?null:{i0:Math.max(0,g-a),i1:Math.min(p-1,y+a),j0:Math.max(0,E-a),j1:Math.min(x-1,P+a)},M}function Np(n,t,e,i,s,o){let c=e[0],a=n.at;if(a&&!a.r&&Math.hypot(c.x-a.x,c.y-a.y)<=s){let f=Math.max(1,Math.ceil(Math.hypot(c.x-a.x,c.y-a.y)/(t.c/2))),p=Math.max(a.z,c.z),x=!1;for(let m=1;m<f;m++){let _=m/f,v=t.dropAt(a.x+(c.x-a.x)*_,a.y+(c.y-a.y)*_)??t.zFloor;v>a.z+(c.z-a.z)*_+.001&&(x=!0,p=Math.max(p,v))}x&&(n.feed(a.x,a.y,p+.5,i.feed),n.feed(c.x,c.y,p+.5,i.feed)),n.feed(c.x,c.y,c.z,i.plunge)}else n.goTo(c.x,c.y,t.underAt(c.x,c.y)+o),n.feed(c.x,c.y,c.z,i.plunge);let u=c;for(let f of e.slice(1))n.feed(f.x,f.y,f.z,u.z-f.z>fb*Math.hypot(f.x-u.x,f.y-u.y)?i.plunge:i.feed),u=f}function pb(n,t,e,i,s,o,c,a=!0){let u=ub(t,e,o);if(!u.box)return;let{r:f,c:p}=u,{i0:x,i1:m,j0:_,j1:v}=u.box,M=e.kind==="ball"?2*Math.sqrt(Math.max(0,2*f*s-s*s)):i.stepover*.5,g=Math.max(1,Math.floor(Math.min(M,f)/p+1e-9)),y=3*g*p+1e-6,E=[];for(let P=_;P<=v;P+=g)E.push(P);E[E.length-1]!==v&&E.push(v),E.forEach((P,S)=>{let L=[],T=[];for(let C=x;C<=m;C++){let w=u.drop(C,P);if(w===null){T.length&&L.push(T),T=[];continue}T.push({x:u.x(C),y:u.y(P),z:w})}T.length&&L.push(T),S%2&&(L.reverse(),L.forEach(C=>C.reverse()));for(let C of L)Np(n,u,Dp(C,.005),i,y,c)}),a&&mb(n,u,i,Math.min(M,f),y,c),n.retract()}function mb(n,t,e,i,s,o){let{i0:a,i1:u,j0:f,j1:p}=t.box,x=Math.floor((u-a)/2)+1,m=Math.floor((p-f)/2)+1,_=new Float32Array(x*m),v=-1/0;for(let S=0;S<m;S++)for(let L=0;L<x;L++){let T=t.drop(a+L*2,f+S*2);_[S*x+L]=T===null?NaN:T,T!==null&&T>v&&(v=T)}let M=2*t.c,g=db*M,y=S=>t.x(a+S*2),E=S=>t.y(f+S*2),P=new Uint8Array(x*m);for(let S=0;S+1<m;S++)for(let L=0;L+1<x;L++){let T=_[S*x+L],C=_[S*x+L+1],w=_[(S+1)*x+L],N=_[(S+1)*x+L+1];[T,C,w,N].some(Number.isNaN)||(Math.abs(T-C)>g||Math.abs(w-N)>g||Math.abs(T-w)>g||Math.abs(C-N)>g)&&(P[S*x+L]=1)}for(let S=v-i/2;S>t.zFloor+.05;S-=i){let L=new Map,T=[],C=(B,H,V)=>{let z=V?`h${B},${H}`:`v${B},${H}`;if(!L.has(z)){let W=_[H*x+B],$=V?_[H*x+B+1]:_[(H+1)*x+B],k=(S-W)/($-W);L.set(z,{key:z,x:V?y(B)+k*M:y(B),y:V?E(H):E(H)+k*M,segs:[]})}return L.get(z)};for(let B=0;B+1<m;B++)for(let H=0;H+1<x;H++){if(!P[B*x+H])continue;let V=_[B*x+H]>S,z=_[B*x+H+1]>S,W=_[(B+1)*x+H]>S,$=_[(B+1)*x+H+1]>S,k=[];V!==z&&k.push(C(H,B,!0)),z!==$&&k.push(C(H+1,B,!1)),W!==$&&k.push(C(H,B+1,!0)),V!==W&&k.push(C(H,B,!1));for(let J=0;J+1<k.length;J+=2){let q=[k[J],k[J+1]];T.push(q),q[0].segs.push(q),q[1].segs.push(q)}}let w=new Set,N=[];for(let B of T){if(w.has(B))continue;w.add(B);let H=[B[0],B[1]];for(let V of[!1,!0])for(;;){let z=V?H[0]:H[H.length-1],W=z.segs.find(k=>!w.has(k));if(!W)break;w.add(W);let $=W[0]===z?W[1]:W[0];V?H.unshift($):H.push($)}H.length>=3&&N.push(H)}let F=n.at;for(;N.length;){let B=0,H=1/0,V=!1;N.forEach(($,k)=>{for(let[J,q]of[[$[0],!1],[$[$.length-1],!0]]){let it=F?Math.hypot(J.x-F.x,J.y-F.y):0;it<H&&(H=it,B=k,V=q)}});let[z]=N.splice(B,1);V&&z.reverse();let W=z.map($=>({x:$.x,y:$.y,z:Math.max(S,t.dropAt($.x,$.y)??S)}));Np(n,t,Dp(W,.005),e,s,o),F=n.at}}}function Dp(n,t){if(n.length<3)return n;let e=new Uint8Array(n.length);e[0]=e[n.length-1]=1;let i=[[0,n.length-1]];for(;i.length;){let[s,o]=i.pop(),c=n[s],a=n[o],u=a.x-c.x,f=a.y-c.y,p=a.z-c.z,x=u*u+f*f+p*p,m=-1,_=t;for(let v=s+1;v<o;v++){let M=n[v],g=x>0?((M.x-c.x)*u+(M.y-c.y)*f+(M.z-c.z)*p)/x:0,y=Math.hypot(c.x+u*g-M.x,c.y+f*g-M.y,c.z+p*g-M.z);y>_&&(_=y,m=v)}m>=0&&(e[m]=1,i.push([s,m],[m,o]))}return n.filter((s,o)=>e[o])}function gb(n){let t=[],e=[];n.forEach((i,s)=>{let o=[];for(let c of Oi(i.region)){let a=Wr([c[0]]),u=[...new Set(t.filter(p=>p.b.minX<a.maxX&&a.minX<p.b.maxX&&p.b.minY<a.maxY&&a.minY<p.b.maxY&&Xr(na(p.last,c))>0).map(p=>p.spot))],f=u[0]||{parts:[]};u.length||e.push(f);for(let p of u.slice(1)){f.parts.push(...p.parts),e=e.filter(x=>x!==p);for(let x of[...t,...o])x.spot===p&&(x.spot=f)}f.parts.push({k:s,area:c}),o.push({k:s,b:a,last:c,spot:f})}t.length=0,t.push(...o)});for(let i of e)i.parts.sort((s,o)=>s.k-o.k);return e.map(i=>Object.assign([...i.parts[0].area],{parts:i.parts}))}function vr(n,t){let e=c=>{let a=Wr([c[0]]);return[(a.minX+a.maxX)/2,(a.minY+a.maxY)/2]},i=n.map(c=>({a:c,m:e(c)})),s=[],o=t?[t.x,t.y]:i[0]?.m;for(;i.length;){let c=0;for(let u=1;u<i.length;u++)Math.hypot(i[u].m[0]-o[0],i[u].m[1]-o[1])<Math.hypot(i[c].m[0]-o[0],i[c].m[1]-o[1])&&(c=u);let[a]=i.splice(c,1);s.push(a.a),o=a.m}return s}function xb(n,t,e,i,s,o){let c=[...new Set(n.map(u=>u.z))].sort((u,f)=>f-u),a=o;for(let u of c){if(u<t-1e-6||!br([i,s],yb(n,u,e)))break;a=u}return Math.max(a,t)}function yb(n,t,e){let i=n.filter(a=>Math.abs(a.z-t)<1e-6);n.inner||=new Map;let s=`${t}|${e}`,o=n.inner.get(s);if(o&&o.n===i.length)return o.loops;let c=Fe(Vn(i.flatMap(a=>a.area)),-e-jv);return n.inner.set(s,{n:i.length,loops:c}),c}function Op(n){let t=n.stock.top+Zv,e=[],i=null,s=(Hn[n.job.finish]||Hn.balanced).allowance,c=n.ops.some(a=>a.kind==="face"&&a.enabled)?n.analysis.top:n.stock.top;for(let a of n.ops){let u=new vu(t),f=a.kind!=="face"&&a.zTop>=n.analysis.top-1e-6?Math.max(a.zTop,c):a.zTop,p=a.tool.diameter/2,x=a.feeds,m=Math.min(a.tool.fluteLength||1/0,3*a.tool.diameter);switch(a.kind){case"face":sb(u,n.stock,p,x,f,a.zBottom);break;case"hole":if(a.bore){ob(u,a.centers,p,x,f,a.zBottom);break}case"pocket":case"step":for(let _ of vr(Oi(a.region),u.at))_c(u,_,p,x,f,a.zBottom,s),s>0&&Rp(u,_,p,x,f,a.zBottom,m);break;case"corners":{let _=n.ops.find(v=>v.id===a.after);ib(u,a.region,p,_?_.tool.diameter/2:p*2,x,f,a.zBottom);break}case"rough3d":case"rest3d":{let _=a.kind==="rough3d"?a.allowance:0,v=M=>(g,y)=>xb(e,a.layers[M].zFrom,p,g,y,f);if(i||=new bu(n.stock,c),u.travel=(M,g)=>i.over(M,g,p),a.kind==="rest3d"){for(let M of vr(gb(a.layers),u.at))for(let{k:g,area:y}of M.parts){let E=a.layers[g],P=E.zFrom>=n.analysis.top-1e-6?f:E.zFrom;_c(u,y,p,x,P,E.z,0,f+1,v(g));let S=Fe(Fe(y,-p),p);S.length&&a.enabled&&(e.push({zFrom:P,z:E.z,area:S}),i.layer(S,P,E.z))}u.travel=null,u.retract();break}a.layers.forEach((M,g)=>{let y=M.zFrom>=n.analysis.top-1e-6?f:M.zFrom;for(let P of vr(Oi(M.region),u.at))_c(u,P,p,x,y,M.z,_,f+1,v(g));for(let P of vr(Oi(M.fresh||[]),u.at))_c(u,P,p,x,f,M.z,_,f+1);_>0&&g&&eb(u,M.exact||M.region,a.layers[g-1].exact||a.layers[g-1].region,p,x,y,M.z,v(g));let E=Fe(Fe([...M.region,...M.fresh||[]],-(p+_)),p);E.length&&a.enabled&&(e.push({zFrom:y,z:M.z,area:E}),i.layer(E,y,M.z))}),u.travel=null,u.retract();break}case"finish3d":pb(u,a.surface,a.tool,x,a.ridge,0,a.left??Jv,a.steep!==!1);break;case"drill":ab(u,a.centers,x,f,a.zBottom,a.tool.diameter);break;case"thread":rb(u,a,x,n.job.finish);break;case"cutout":lb(u,a.region,p,x,f,a.zBottom,a.tabs===!1?{...n.job,tabs:{...n.job.tabs,enabled:!1}}:n.job,s);break;case"inside":cb(u,a.loops,p,x,f,a.zBottom,n.job,s,a.tabs);break;case"online":hb(u,a.lines,x,f,a.zBottom);break;case"chamfer":nb(u,a.levels.map(_=>_.z>=n.analysis.top-1e-6?{..._,z:_.z+c-n.analysis.top}:_),x);break}a.moves=u.moves}return n}var Zv,Jv,jv,vu,ri,Ip,fb,db,bu,Fp=pe(()=>{Yr();$r();Zv=3,Jv=3.5,jv=.02;vu=class{constructor(t){this.moves=[],this.clearZ=t,this.at=null,this.travel=null}rapid(t,e,i){this.push({r:!0,x:t,y:e,z:i})}feed(t,e,i,s){this.push({x:t,y:e,z:i,f:s})}push(t){let e=this.at;e&&Math.abs(e.x-t.x)<1e-6&&Math.abs(e.y-t.y)<1e-6&&Math.abs(e.z-t.z)<1e-6||(this.moves.push(t),this.at=t)}goTo(t,e,i){let s=this.at,o=this.clearZ;s&&this.travel&&(o=Math.min(o,Math.max(this.travel(s,{x:t,y:e}),s.z,i+1))),s&&this.rapid(s.x,s.y,o),this.rapid(t,e,o),this.rapid(t,e,i+1)}retract(){this.at&&!this.travel&&this.rapid(this.at.x,this.at.y,this.clearZ)}},ri=class{constructor(t){this.p=t,this.s=[0];for(let e=1;e<=t.length;e++){let i=t[e-1],s=t[e%t.length];this.s.push(this.s[e-1]+Math.hypot(s[0]-i[0],s[1]-i[1]))}this.length=this.s[t.length]}at(t){let e=this.length,i=(t%e+e)%e,s=1;for(;s<this.s.length-1&&this.s[s]<i;)s++;let o=this.p[s-1],c=this.p[s%this.p.length],a=this.s[s]-this.s[s-1]||1,u=(i-this.s[s-1])/a;return[o[0]+(c[0]-o[0])*u,o[1]+(c[1]-o[1])*u]}breaks(t,e){let i=[],s=this.length;for(let o=Math.floor(t/s);o*s<=e;o++)for(let c=0;c<this.p.length;c++){let a=o*s+this.s[c];a>t+1e-9&&a<e-1e-9&&i.push(a)}return i}nearest([t,e]){let i=0,s=1/0;for(let o=0;o<this.p.length;o++){let c=(this.p[o][0]-t)**2+(this.p[o][1]-e)**2;c<s&&(s=c,i=this.s[o])}return i}};Ip={fast:[.6,1],balanced:[.5,.8,1,1],smooth:[.4,.65,.85,1,1]};fb=Math.tan(70*Math.PI/180);db=Math.tan(50*Math.PI/180);bu=class{constructor(t,e){this.c=1,this.x0=t.minX,this.y0=t.minY,this.nx=Math.ceil((t.maxX-t.minX)/this.c)+1,this.ny=Math.ceil((t.maxY-t.minY)/this.c)+1,this.top=new Float32Array(this.nx*this.ny).fill(e)}layer(t,e,i){let{c:s,x0:o,y0:c,nx:a,ny:u,top:f}=this,p=Fe(t,-(s*Math.SQRT1_2+.02));for(let x=0;x<u;x++){let m=c+x*s,_=[];for(let v of p)for(let M=0;M<v.length;M++){let[g,y]=v[M],[E,P]=v[(M+1)%v.length];y<=m!=P<=m&&_.push(g+(m-y)/(P-y)*(E-g))}_.sort((v,M)=>v-M);for(let v=0;v+1<_.length;v+=2)for(let M=Math.max(0,Math.ceil((_[v]-o)/s));M<=Math.min(a-1,Math.floor((_[v+1]-o)/s));M++){let g=x*a+M;f[g]<=e+1e-6&&i<f[g]&&(f[g]=i)}}}over(t,e,i){let{c:s,x0:o,y0:c,nx:a,ny:u,top:f}=this,p=(i+1.5*s)/s,x=Math.max(1,Math.ceil(Math.hypot(e.x-t.x,e.y-t.y)/(s/2))),m=-1/0;for(let _=0;_<=x;_++){let v=(t.x+(e.x-t.x)*_/x-o)/s,M=(t.y+(e.y-t.y)*_/x-c)/s;for(let g=Math.max(0,Math.ceil(M-p));g<=Math.min(u-1,Math.floor(M+p));g++)for(let y=Math.max(0,Math.ceil(v-p));y<=Math.min(a-1,Math.floor(v+p));y++)(y-v)**2+(g-M)**2<=p*p&&f[g*a+y]>m&&(m=f[g*a+y])}return m+1}}});function Up(n,t={}){let{name:e="part",numbering:i="slot",safeZHeightMm:s=null,spindleDelay:o=3}=t,c=Number.isFinite(s)?`G53 G0 Z${ss(s)}`:"G53 G0 Z0",a=n.zero,u=n.stock,f=[Mr(`ncCAM: ${e}`),Mr(`Stock ${ss(u.width)} x ${ss(u.depth)} x ${ss(u.thickness)} mm, ${(ls[n.job.material]||{}).name||n.job.material}, ${(Hn[n.job.finish]||{}).name||n.job.finish}`),Mr(`Zero: X Y at the ${vb[n.job.zero.xy]||n.job.zero.xy}, Z on ${n.job.zero.z==="bed"?"the bed":"top of the stock"}`)],p=n.ops.filter(M=>M.enabled&&M.moves&&M.moves.length);for(let M of[...new Map(p.map(g=>[g.tool.id,g.tool])).values()])f.push(Mr(`T${cs(M,i)}: ${M.name}, ${ss(M.diameter)} mm`));f.push("G21 G90 G94 G17");let x=null,m={},_=null,v=null;for(let M of p){(!x||M.tool.id!==x.id)&&(x&&f.push("M5"),f.push(c,`M6 T${cs(M.tool,i)}`,Mr(M.tool.name)),x=M.tool,f.push(`M3 S${M.feeds.rpm}`),o>0&&f.push(`G4 P${o}`),m={},_=null,v=null),f.push(Mr(`${M.label}${M.detail?": "+M.detail:""}`));for(let g of M.moves){let y=ss(g.x-a.x),E=ss(g.y-a.y),P=ss(g.z-a.z);if(g.r&&(y!==m.x||E!==m.y)&&P!==m.z){let C=m.z===void 0||+P<+m.z?[`X${y} Y${E}`,`Z${P}`]:[`Z${P}`,`X${y} Y${E}`];for(let w of C)f.push(`${v==="G0"?"":"G0 "}${w}`),v="G0";m={x:y,y:E,z:P};continue}let S=g.r?"G0":"G1",L=S===v?"":S;y!==m.x&&(L+=` X${y}`),E!==m.y&&(L+=` Y${E}`),P!==m.z&&(L+=` Z${P}`),!g.r&&g.f!==_&&(L+=` F${Math.round(g.f)}`,_=g.f),L=L.trim(),!(!L||L===S)&&(f.push(L),v=S,m={x:y,y:E,z:P})}}return f.push("M5",c,"M30",""),f.join(`
`)}function Bp(n,{maxRapid:t=5e3,spindleDelay:e=3,toolChange:i=30}={}){let s=0,o=null,c=null;for(let a of n.ops){if(!a.enabled||!a.moves)continue;(!c||a.tool.id!==c.id)&&(s+=e+(c?i:0),c=a.tool);let u=0;for(let f of a.moves){if(o){let p=Math.hypot(f.x-o.x,f.y-o.y,f.z-o.z);u+=p/(f.r?t:f.f)*60}o=f}a.seconds=u,s+=u}return s}var ss,_b,Mr,vb,kp=pe(()=>{$r();ss=n=>{let t=(Math.round(n*1e3)/1e3).toFixed(3).replace(/\.?0+$/,"");return t==="-0"?"0":t},_b={"\xD7":"x","\xB7":"-",\u00D8:"D","\xB0":" deg","\u2019":"'","\u2026":"..."},Mr=n=>`(${String(n).replace(/\(/g,"[").replace(/\)/g,"]").replace(/[^\x20-\x7e]/g,t=>_b[t]??"")})`,vb={"back-left":"back left corner","back-center":"back edge, middle","back-right":"back right corner","left-center":"left edge, middle",center:"center","right-center":"right edge, middle","front-left":"front left corner","front-center":"front edge, middle","front-right":"front right corner"}});function Mu(n,t){let e=(n.kind==="threadmill"?n.neck:n.diameter)/2,i=Math.ceil(e/t),s=[];for(let c=-i;c<=i;c++)for(let a=-i;a<=i;a++){let u=Math.hypot(a,c)*t;if(u>e+1e-6)continue;let f=Math.min(u,e),p=0;if(n.kind==="ball")p=e-Math.sqrt(Math.max(0,e*e-f*f));else if(n.kind==="vbit"||n.kind==="chamfer"||n.kind==="drill"){let x=(n.angle||(n.kind==="drill"?118:90))*Math.PI/360;p=f/Math.tan(x)}s.push(a,c,p,u)}let o=Float32Array.from(s);return o.inner=Math.max(0,e-t*Math.SQRT1_2),o}function bb(n,t,e,i,s,o){let c=Math.hypot(i.x-e.x,i.y-e.y),a=Math.max(1,Math.ceil(c/(n.cell*.5))),u=!1;for(let f=s?0:1;f<=a;f++){let p=f/a,x=(e.x+(i.x-e.x)*p-n.x0)/n.cell,m=(e.y+(i.y-e.y)*p-n.y0)/n.cell,_=e.z+(i.z-e.z)*p;if(_>=n.top)continue;let v=Math.round(x),M=Math.round(m);for(let g=0;g<t.length;g+=4){let y=v+t[g],E=M+t[g+1];if(y<0||E<0||y>=n.nx||E>=n.ny)continue;let P=E*n.nx+y,S=_+t[g+2];if(n.h[P]>S+1e-4){if(s){n.h[P]>S+.05&&t[g+3]<=t.inner&&(u=!0);continue}n.h[P]=S,n.op[P]=o+1}}}return u}function zp(n){let t=n.nx*n.ny;return n.sx=new Float32Array(t),n.sy=new Float32Array(t),n.wx=new Float32Array(t),n.wy=new Float32Array(t),n.gap=new Float32Array(t).fill(1/0),n.deep=new Float32Array(t).fill(-1/0),n}function Su(n,t,e,i,s){let o=(t.kind==="threadmill"?t.neck:t.diameter)/2,c=n.cell,a=o/c,u=t.kind==="ball"?V=>o-Math.sqrt(Math.max(0,o*o-V*V)):t.kind==="vbit"||t.kind==="chamfer"||t.kind==="drill"?(V=>z=>z/V)(Math.tan((t.angle||(t.kind==="drill"?118:90))*Math.PI/360)):()=>0,f=!t.kind||t.kind==="flat"||t.kind==="surfacing"||t.kind==="threadmill",{h:p,sx:x,sy:m,wx:_,wy:v,gap:M,deep:g,nx:y,ny:E}=n,P=1.5*c,S=a+1.5,L=(V,z,W,$)=>{let k=Math.hypot(z,W);if(k>S)return;let J=k*c;if(J<=o){let q=$+u(J);if(p[V]>q+1e-4)p[V]=q,n.op[V]=s+1,M[V]=1/0,g[V]=-1/0;else if(p[V]<q-1e-4)return;o-J>g[V]&&(g[V]=o-J,f&&o-J<P&&k>1e-6?(x[V]=z/k*(o-J),m[V]=W/k*(o-J),_[V]=-z/k,v[V]=-W/k):(x[V]=0,m[V]=0,_[V]=0,v[V]=0))}else f&&p[V]>$+1e-4&&J-o<M[V]&&(M[V]=J-o,x[V]=z/k*(o-J),m[V]=W/k*(o-J),_[V]=-z/k,v[V]=-W/k)},T=(e.x-n.x0)/c,C=(e.y-n.y0)/c,w=(i.x-n.x0)/c,N=(i.y-n.y0)/c;if(Math.abs(i.z-e.z)<1e-9){if(e.z>=n.top)return;let V=w-T,z=N-C,W=V*V+z*z,$=Math.max(0,Math.floor(Math.min(T,w)-S)),k=Math.min(y-1,Math.ceil(Math.max(T,w)+S)),J=Math.max(0,Math.floor(Math.min(C,N)-S)),q=Math.min(E-1,Math.ceil(Math.max(C,N)+S));for(let it=J;it<=q;it++)for(let st=$;st<=k;st++){let St=W>0?Math.max(0,Math.min(1,((st-T)*V+(it-C)*z)/W)):0;L(it*y+st,st-(T+V*St),it-(C+z*St),e.z)}return}let F=Math.hypot(i.x-e.x,i.y-e.y),B=Math.max(1,Math.ceil(F/(c*.5))),H=Math.ceil(S);for(let V=1;V<=B;V++){let z=V/B,W=T+(w-T)*z,$=C+(N-C)*z,k=e.z+(i.z-e.z)*z;if(k>=n.top)continue;let J=Math.max(0,Math.floor(W-H)),q=Math.min(y-1,Math.ceil(W+H)),it=Math.max(0,Math.floor($-H)),st=Math.min(E-1,Math.ceil($+H));for(let St=it;St<=st;St++)for(let wt=J;wt<=q;wt++)L(St*y+wt,wt-W,St-$,k)}}function Vp(n,t){let e=new Ri(n.stock,t||Ri.cellFor(n.stock)),i=[];return n.ops.forEach((s,o)=>{if(!s.enabled||!s.moves)return;let c=Mu(s.tool,e.cell),a=null;for(let u of s.moves)a&&bb(e,c,a,u,!!u.r,o)&&i.push({op:s.id,at:u}),a=u}),{hm:e,collisions:i}}var Ri,Hp=pe(()=>{Ri=class{constructor(t,e){this.cell=e,this.x0=t.minX,this.y0=t.minY,this.nx=Math.max(2,Math.ceil((t.maxX-t.minX)/e)+1),this.ny=Math.max(2,Math.ceil((t.maxY-t.minY)/e)+1),this.h=new Float32Array(this.nx*this.ny).fill(t.top),this.op=new Uint8Array(this.nx*this.ny),this.top=t.top,this.bottom=t.bottom}static cellFor(t,e=600*600){let i=(t.maxX-t.minX)*(t.maxY-t.minY);return Math.max(.1,Math.sqrt(i/e))}}});var bc=pe(()=>{Er();Bu();hf();df();pf();Pf();Cp();Fp();kp();Hp();$r();Hc();Yr()});function Sb(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function wb(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function Eb(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Yp),this.state=Oe.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:let t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function Tb(n){let t;switch(n.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case ji.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=Oe.DOLLY;break;case ji.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=Oe.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=Oe.ROTATE}break;case ji.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=Oe.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=Oe.PAN}break;default:this.state=Oe.NONE}this.state!==Oe.NONE&&this.dispatchEvent(Tu)}function Ab(n){switch(this.state){case Oe.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case Oe.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case Oe.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function Pb(n){this.enabled===!1||this.enableZoom===!1||this.state!==Oe.NONE||(n.preventDefault(),this.dispatchEvent(Tu),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent(Yp))}function Cb(n){this.enabled!==!1&&this._handleKeyDown(n)}function Ib(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case Ki.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(n),this.state=Oe.TOUCH_ROTATE;break;case Ki.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(n),this.state=Oe.TOUCH_PAN;break;default:this.state=Oe.NONE}break;case 2:switch(this.touches.TWO){case Ki.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=Oe.TOUCH_DOLLY_PAN;break;case Ki.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=Oe.TOUCH_DOLLY_ROTATE;break;default:this.state=Oe.NONE}break;default:this.state=Oe.NONE}this.state!==Oe.NONE&&this.dispatchEvent(Tu)}function Rb(n){switch(this._trackPointer(n),this.state){case Oe.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case Oe.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case Oe.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case Oe.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=Oe.NONE}}function Lb(n){this.enabled!==!1&&n.preventDefault()}function Nb(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Db(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}var Xp,Tu,Yp,Mc,Wp,Mb,an,Ln,Oe,Eu,Sc,$p=pe(()=>{Wo();Xp={type:"change"},Tu={type:"start"},Yp={type:"end"},Mc=new Xi,Wp=new On,Mb=Math.cos(70*Kh.DEG2RAD),an=new Z,Ln=2*Math.PI,Oe={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Eu=1e-6,Sc=class extends Lo{constructor(t,e=null){super(t,e),this.state=Oe.NONE,this.target=new Z,this.cursor=new Z,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:ji.ROTATE,MIDDLE:ji.DOLLY,RIGHT:ji.PAN},this.touches={ONE:Ki.ROTATE,TWO:Ki.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new Z,this._lastQuaternion=new Fn,this._lastTargetPosition=new Z,this._quat=new Fn().setFromUnitVectors(t.up,new Z(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new ur,this._sphericalDelta=new ur,this._scale=1,this._panOffset=new Z,this._rotateStart=new Jt,this._rotateEnd=new Jt,this._rotateDelta=new Jt,this._panStart=new Jt,this._panEnd=new Jt,this._panDelta=new Jt,this._dollyStart=new Jt,this._dollyEnd=new Jt,this._dollyDelta=new Jt,this._dollyDirection=new Z,this._mouse=new Jt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=wb.bind(this),this._onPointerDown=Sb.bind(this),this._onPointerUp=Eb.bind(this),this._onContextMenu=Lb.bind(this),this._onMouseWheel=Pb.bind(this),this._onKeyDown=Cb.bind(this),this._onTouchStart=Ib.bind(this),this._onTouchMove=Rb.bind(this),this._onMouseDown=Tb.bind(this),this._onMouseMove=Ab.bind(this),this._interceptControlDown=Nb.bind(this),this._interceptControlUp=Db.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(t){this._cursorStyle=t,t==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.state=Oe.NONE,this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents();let t=this.domElement.getRootNode();t.removeEventListener("keydown",this._interceptControlDown,{capture:!0}),t.removeEventListener("keyup",this._interceptControlUp,{capture:!0}),this._controlActive=!1,this._pointers.length=0,this._pointerPositions={},this.domElement.style.touchAction="",this.domElement.style.cursor="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Xp),this.update(),this.state=Oe.NONE}pan(t,e){this._pan(t,e),this.update()}dollyIn(t){this._dollyIn(t),this.update()}dollyOut(t){this._dollyOut(t),this.update()}rotateLeft(t){this._rotateLeft(t),this.update()}rotateUp(t){this._rotateUp(t),this.update()}update(t=null){let e=this.object.position;an.copy(e).sub(this.target),an.applyQuaternion(this._quat),this._spherical.setFromVector3(an),this.autoRotate&&this.state===Oe.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(i)&&isFinite(s)&&(i<-Math.PI?i+=Ln:i>Math.PI&&(i-=Ln),s<-Math.PI?s+=Ln:s>Math.PI&&(s-=Ln),i<=s?this._spherical.theta=Math.max(i,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+s)/2?Math.max(i,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let o=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let c=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),o=c!=this._spherical.radius}if(an.setFromSpherical(this._spherical),an.applyQuaternion(this._quatInverse),e.copy(this.target).add(an),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let c=null;if(this.object.isPerspectiveCamera){let a=an.length();c=this._clampDistance(a*this._scale);let u=a-c;this.object.position.addScaledVector(this._dollyDirection,u),this.object.updateMatrixWorld(),o=!!u}else if(this.object.isOrthographicCamera){let a=new Z(this._mouse.x,this._mouse.y,0);a.unproject(this.object);let u=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),o=u!==this.object.zoom;let f=new Z(this._mouse.x,this._mouse.y,0);f.unproject(this.object),this.object.position.sub(f).add(a),this.object.updateMatrixWorld(),c=an.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;c!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(c).add(this.object.position):(Mc.origin.copy(this.object.position),Mc.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Mc.direction))<Mb?this.object.lookAt(this.target):(Wp.setFromNormalAndCoplanarPoint(this.object.up,this.target),Mc.intersectPlane(Wp,this.target))))}else if(this.object.isOrthographicCamera){let c=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),c!==this.object.zoom&&(this.object.updateProjectionMatrix(),o=!0)}return this._scale=1,this._performCursorZoom=!1,o||this._lastPosition.distanceToSquared(this.object.position)>Eu||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Eu||this._lastTargetPosition.distanceToSquared(this.target)>Eu?(this.dispatchEvent(Xp),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?Ln/60*this.autoRotateSpeed*t:Ln/60/60*this.autoRotateSpeed}_getZoomScale(t){let e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){an.setFromMatrixColumn(e,0),an.multiplyScalar(-t),this._panOffset.add(an)}_panUp(t,e){this.screenSpacePanning===!0?an.setFromMatrixColumn(e,1):(an.setFromMatrixColumn(e,0),an.crossVectors(this.object.up,an)),an.multiplyScalar(t),this._panOffset.add(an)}_pan(t,e){let i=this.domElement;if(this.object.isPerspectiveCamera){let s=this.object.position;an.copy(s).sub(this.target);let o=an.length();o*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*o/i.clientHeight,this.object.matrix),this._panUp(2*e*o/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let i=this.domElement.getBoundingClientRect(),s=t-i.left,o=e-i.top,c=i.width,a=i.height;this._mouse.x=s/c*2-1,this._mouse.y=-(o/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let e=this.domElement;this._rotateLeft(Ln*this._rotateDelta.x/e.clientHeight),this._rotateUp(Ln*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(Ln*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-Ln*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(Ln*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-Ln*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._rotateStart.set(i,s)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panStart.set(i,s)}}_handleTouchStartDolly(t){let e=this._getSecondPointerPosition(t),i=t.pageX-e.x,s=t.pageY-e.y,o=Math.sqrt(i*i+s*s);this._dollyStart.set(0,o)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{let i=this._getSecondPointerPosition(t),s=.5*(t.pageX+i.x),o=.5*(t.pageY+i.y);this._rotateEnd.set(s,o)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let e=this.domElement;this._rotateLeft(Ln*this._rotateDelta.x/e.clientHeight),this._rotateUp(Ln*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panEnd.set(i,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){let e=this._getSecondPointerPosition(t),i=t.pageX-e.x,s=t.pageY-e.y,o=Math.sqrt(i*i+s*s);this._dollyEnd.set(0,o),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let c=(t.pageX+e.x)*.5,a=(t.pageY+e.y)*.5;this._updateZoomParameters(c,a)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new Jt,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){let e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){let e=t.deltaMode,i={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}});function qp(n,t,e,i){n.onBeforeCompile=s=>{s.uniforms.uCut={value:t-.05},s.uniforms.uBase={value:i||new ae(1,1,1)},s.uniforms.uBottom={value:t},s.vertexShader=`varying float vZ;
uniform float uBottom;
`+(e?"":`attribute vec4 wall;
varying vec4 vWall;
`)+s.vertexShader.replace("#include <beginnormal_vertex>",`#include <beginnormal_vertex>
`+(e?"objectNormal = vec3(0.0, 0.0, -1.0);":"")).replace("#include <begin_vertex>",`#include <begin_vertex>
vZ = transformed.z;
`+(e?"transformed.z = uBottom;":"vWall = wall;")),s.fragmentShader=`varying float vZ;
uniform float uCut;
`+s.fragmentShader.replace("#include <clipping_planes_fragment>",`#include <clipping_planes_fragment>
if (vZ < uCut) discard;`),e||(s.fragmentShader=`varying vec4 vWall;
uniform vec3 uBase;
`+s.fragmentShader.replace("#include <color_fragment>",`#include <color_fragment>
float onWall = dot(vWall.xy, vWall.xy) > 1e-6 ? smoothstep(0.0, 0.03, vZ - vWall.z) * smoothstep(0.0, 0.03, vWall.w - vZ) : 0.0;
diffuseColor.rgb = mix(diffuseColor.rgb, uBase, onWall);`).replace("#include <normal_fragment_begin>",me.normal_fragment_begin.replace("gl_FrontFacing ? 1.0 : - 1.0","1.0")+`
if (onWall > 0.0) normal = normalize(mix(normal, (viewMatrix * vec4(normalize(vWall.xy), 0.0, 0.0)).xyz, onWall));`))},n.customProgramCacheKey=()=>`through-${e}`}function Zp(n,t,e){let i=document.createElement("canvas");i.width=256,i.height=128;let s=i.getContext("2d");s.font="600 84px Inter, system-ui, sans-serif",s.fillStyle="#"+new ae(t).getHexString(),s.textAlign="center",s.textBaseline="middle",s.fillText(n,128,64);let o=new xo(i);o.colorSpace=wn;let c=new mo(new sr({map:o,depthTest:!1,transparent:!0}));return c.scale.set(e*2,e,1),c.renderOrder=6,c}var Yn,Sr,Ob,wc,Jp=pe(()=>{Wo();$p();Yn={face:"#93a2b4",pocket:"#1abc9c",hole:"#4ea1ff",drill:"#4ea1ff",step:"#2ecc71",corners:"#48d1b4",cutout:"#a78bfa",rough3d:"#f5a524",rest3d:"#e3c341",finish3d:"#ff7a59",chamfer:"#f472b6",thread:"#c084fc",inside:"#4ea1ff",online:"#f5a524"},Sr={softwood:"#d8b38a",hardwood:"#9c6b45",mdf:"#b59672",plastic:"#d9e2ea",aluminum:"#b9c1c9",foam:"#c7b8a5"};Ob=(n,t)=>n.some(e=>e.key===t);wc=class{constructor(){this.el=document.createElement("div"),this.el.className="ncc-viewport",this.renderer=new gc({antialias:!0,alpha:!0}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),this.el.appendChild(this.renderer.domElement),this.scene=new ho,this.camera=new yn(35,1,.1,1e4),this.camera.up.set(0,0,1),this.controls=new Sc(this.camera,this.renderer.domElement),this.controls.enableDamping=!0,this.controls.dampingFactor=.12,this.controls.addEventListener("start",()=>{this.userMoved=!0}),this.scene.add(new Po(16777215,4478310,1.6));let t=new hr(16777215,1.6);t.position.set(-.6,-1,1.6),this.scene.add(t);let e=new hr(16777215,.5);e.position.set(1,.6,.4),this.scene.add(e),this.content=new Xn,this.scene.add(this.content),this.onFrame=null,this.alive=!0,this.resize=new ResizeObserver(()=>this.fit()),this.resize.observe(this.el);let i=s=>{if(this.alive){if(!this.el.isConnected&&this.detachedSince&&s-this.detachedSince>3e3&&!document.querySelector(".ncc-wrapper")){this.dispose();return}this.el.isConnected?this.detachedSince=0:this.detachedSince||=s,this.onFrame&&this.onFrame(s),this.controls.update(),this.el.isConnected&&this.renderer.render(this.scene,this.camera),requestAnimationFrame(i)}};requestAnimationFrame(i),this.setupPicking()}fit(){let t=this.el.clientWidth,e=this.el.clientHeight;!t||!e||(this.renderer.setSize(t,e,!1),this.camera.aspect=t/e,this.camera.updateProjectionMatrix(),this.userMoved||this.refit())}clear(){for(let t of[...this.content.children])this.content.remove(t),t.traverse(e=>{e.geometry?.dispose(),e.material&&[].concat(e.material).forEach(i=>i.dispose())});this.pickMesh=null,this.markers=null}frame(t,e,i=.08){this.fitBox=[t,e,i],this.userMoved=!1,this.refit()}refit(){if(!this.fitBox)return;let[t,e,i]=this.fitBox,s=new Z((t[0]+e[0])/2,(t[1]+e[1])/2,(t[2]+e[2])/2),o=Math.max(e[0]-t[0],e[1]-t[1],e[2]-t[2],.001),c=new Z(-.45,-.8,.75).normalize(),a=[];for(let x of[t[0],e[0]])for(let m of[t[1],e[1]])for(let _ of[t[2],e[2]])a.push(new Z(x,m,_));let u=s.clone(),f=o*2,p=()=>{this.camera.position.copy(u).addScaledVector(c,f),this.camera.near=f/100,this.camera.far=f*100,this.camera.lookAt(u),this.camera.updateMatrixWorld(),this.camera.updateProjectionMatrix()};for(let x=0;x<8;x++){p();let m=1/0,_=-1/0,v=1/0,M=-1/0;for(let L of a){let T=L.clone().project(this.camera);m=Math.min(m,T.x),_=Math.max(_,T.x),v=Math.min(v,T.y),M=Math.max(M,T.y)}let g=Math.max((_-m)/2,(M-v)/2);if(!(g>0))break;let y=f*Math.tan(this.camera.fov*Math.PI/360),E=y*this.camera.aspect,P=new Z().setFromMatrixColumn(this.camera.matrixWorld,0),S=new Z().setFromMatrixColumn(this.camera.matrixWorld,1);u.addScaledVector(P,(m+_)/2*E).addScaledVector(S,(v+M)/2*y),f*=g/(1-i)}p(),this.controls.target.copy(u),this.controls.update()}showPart(t,e=[]){this.clear();let i=new Ge;i.setAttribute("position",new ze(t.positions,3)),i.setIndex(new ze(t.indices,1)),i.computeVertexNormals();let s=new Ce(i,new kn({color:9348283,metalness:.15,roughness:.55,side:_n,polygonOffset:!0,polygonOffsetFactor:1,polygonOffsetUnits:1}));this.content.add(s),this.pickMesh=s;let o=new xs(new ar(i,25),new Qn({color:2832972,transparent:!0,opacity:.55}));this.content.add(o);for(let a of e)this.addLoops(a.loops,a.z,a.color,a.dashed,a.opacity);i.computeBoundingBox();let c=i.boundingBox;this.keepCamera||this.frame(c.min.toArray(),c.max.toArray())}addLoops(t,e,i,s,o=.95){for(let c of t){let a=c.map(([x,m])=>new Z(x,m,e)),u=new Ge().setFromPoints([...a,a[0]]),f=s?new Eo({color:i,dashSize:2,gapSize:1.5,transparent:!0,opacity:o,depthTest:!1}):new Qn({color:i,transparent:!0,opacity:o,depthTest:!1}),p=new gs(u,f);s&&p.computeLineDistances(),p.renderOrder=2,this.content.add(p)}}setupPicking(){let t=this.renderer.domElement,e=null;t.addEventListener("pointerdown",i=>{e=[i.clientX,i.clientY]}),t.addEventListener("pointerup",i=>{if(!e||Math.hypot(i.clientX-e[0],i.clientY-e[1])>4)return;let s=t.getBoundingClientRect(),o=new Io;if(o.setFromCamera(new Jt((i.clientX-s.left)/s.width*2-1,-((i.clientY-s.top)/s.height)*2+1),this.camera),this.markers?.length&&this.onMarker){let u=o.intersectObjects(this.markers)[0];if(u?.object.userData.axis){this.onAxis?.(u.object.userData.axis);return}if(u){this.onMarker(u.object.userData.key);return}}if(!this.pickMesh||!this.onPick)return;let c=o.intersectObject(this.pickMesh)[0];if(!c||!c.face)return;let a=c.face.normal.clone();a.dot(o.ray.direction)>0&&a.negate(),this.onPick([a.x,a.y,a.z])})}showZero({stock:t,part:e,points:i,selected:s,zFace:o,color:c,accent:a="#4c6ef5"}){this.clear();let u=t.maxX-t.minX,f=t.maxY-t.minY,p=t.top-t.bottom,x=Math.max(u,f,p),m=new Yi(u,f,p);m.translate((t.minX+t.maxX)/2,(t.minY+t.maxY)/2,(t.top+t.bottom)/2);let _=new Ce(m,new kn({color:c,transparent:!0,opacity:.45,roughness:.9,depthWrite:!1}));if(_.renderOrder=2,this.content.add(_),this.content.add(new xs(new ar(m),new Qn({color:new ae(c).multiplyScalar(.6)}))),e){let y=new Ge;y.setAttribute("position",new ze(e.positions,3)),y.setIndex(new ze(e.indices,1)),y.computeVertexNormals(),this.partMesh=new Ce(y,new kn({color:9348283,metalness:.15,roughness:.55})),this.content.add(this.partMesh)}else this.partMesh=null;let v=o==="bed"?t.bottom:t.top,M=x*.014;this.markers=[];for(let y of i){let E=y.key===s,P=new Ce(new $i(E?M*1.3:M,24,16),new Un({color:E?a:16777215}));if(P.position.set(y.x,y.y,v),P.userData.key=y.key,P.renderOrder=4,P.material.depthTest=!1,!E){let L=new Ce(new $i(M*1.25,24,16),new Un({color:6187893,depthTest:!1}));L.renderOrder=3,P.add(L)}let S=new Ce(new $i(M*3.5,12,8),new Un({visible:!1}));if(S.userData.key=y.key,P.add(S),this.markers.push(S),this.content.add(P),E){let L=new Ce(new wo(M*1.6,M*2,40),new Un({color:a,transparent:!0,depthTest:!1,side:_n}));L.position.copy(P.position),L.renderOrder=4,this.content.add(L),this.pulse=L;let T=x*.24;for(let[C,w,N]of[[[1,0,0],15158332,"X"],[[0,1,0],3066993,"Y"],[[0,0,1],5147903,"Z"]]){let F=new Ro(new Z(...C),P.position,T,w,T*.15,T*.065);F.line.visible=!1;let B=new Ce(new mi(x*.0028,x*.0028,T*.86,12),new Un({color:w,depthTest:!1}));B.position.y=T*.43,B.renderOrder=5,F.add(B),F.cone.material.depthTest=!1,F.renderOrder=5,F.cone.renderOrder=5,this.content.add(F);let H=Zp(N,w,x*.05);H.position.copy(P.position).add(new Z(...C).multiplyScalar(T*1.18)),this.content.add(H);let V=new Ce(new mi(T*.1,T*.1,T*1.3,10),new Un({visible:!1}));V.quaternion.setFromUnitVectors(new Z(0,1,0),new Z(...C)),V.position.copy(P.position).add(new Z(...C).multiplyScalar(T*.65)),V.userData.axis=N.toLowerCase(),this.content.add(V),this.markers.unshift(V)}}}let g=Zp("Front",9675444,x*.04);g.position.set((t.minX+t.maxX)/2,t.minY-x*.08,t.bottom),this.content.add(g),this.keepCamera||this.frame([t.minX,t.minY,t.bottom],[t.maxX,t.maxY,t.top]),Ob(i,s)||(this.pulse=null),this.onFrame=y=>{if(!this.pulse)return;let E=y%1600/1600;this.pulse.scale.setScalar(1+E*1.6),this.pulse.material.opacity=.8*(1-E),this.pulse.lookAt(this.camera.position)}}spin(t,e=700){let i=this.partMesh;if(!i)return Promise.resolve();i.geometry.computeBoundingBox();let s=i.geometry.boundingBox.getCenter(new Z),o=t==="x"?new Z(1,0,0):new Z(0,0,1);i.matrixAutoUpdate=!1;let c=performance.now();return new Promise(a=>{let u=f=>{let p=Math.min(1,(f-c)/e),x=p<.5?2*p*p:1-(-2*p+2)**2/2;i.matrix.makeTranslation(s.x,s.y,s.z).multiply(new De().makeRotationAxis(o,Math.PI*x)).multiply(new De().makeTranslation(-s.x,-s.y,-s.z)),i.matrixWorldNeedsUpdate=!0,p<1&&i.parent?requestAnimationFrame(u):a()};requestAnimationFrame(u)})}showStock(t,e,i){this.clear(),this.keepCamera=!1;let s=t.nx,o=t.ny,c=s*o,a=new Float32Array(c*3),u=new Float32Array(c*3),f=new ae(e);for(let E=0;E<o;E++)for(let P=0;P<s;P++){let S=E*s+P;a[S*3]=t.x0+P*t.cell,a[S*3+1]=t.y0+E*t.cell,a[S*3+2]=t.h[S],u[S*3]=f.r,u[S*3+1]=f.g,u[S*3+2]=f.b}let p=new Uint32Array((s-1)*(o-1)*6),x=0;for(let E=0;E<o-1;E++)for(let P=0;P<s-1;P++){let S=E*s+P,L=S+1,T=S+s,C=T+1;p[x++]=S,p[x++]=L,p[x++]=C,p[x++]=S,p[x++]=C,p[x++]=T}let m=new Ge;m.setAttribute("position",new ze(a,3).setUsage(bs)),m.setAttribute("color",new ze(u,3).setUsage(bs));let _=new Float32Array(c*3);for(let E=0;E<c;E++)_[E*3+2]=1;m.setAttribute("normal",new ze(_,3).setUsage(bs));let v=new Float32Array(c*4);for(let E=0;E<c;E++)v[E*4+2]=t.h[E],v[E*4+3]=t.h[E];m.setAttribute("wall",new ze(v,4).setUsage(bs)),m.setIndex(new ze(p,1));let M=new kn({vertexColors:!0,flatShading:!1,roughness:.8,metalness:e===Sr.aluminum?.5:.05,side:_n});qp(M,t.bottom,!1,f);let g=new Ce(m,M);this.content.add(g),this.stock={hm:t,geo:m,base:f,sides:this.makeSides(t,f)};let y=new kn({color:f.clone().multiplyScalar(.7),roughness:.9,side:_n});if(qp(y,t.bottom,!0),this.content.add(new Ce(m,y)),i){let E=new Ge;E.setAttribute("position",new ze(i.positions,3)),E.setIndex(new ze(i.indices,1)),E.computeVertexNormals(),this.partGhost=new Ce(E,new kn({color:5153279,transparent:!0,opacity:.25,depthWrite:!1})),this.partGhost.visible=!1,this.content.add(this.partGhost)}this.tool=new Xn,this.content.add(this.tool),this.frame([t.x0,t.y0,t.bottom],[t.x0+(s-1)*t.cell,t.y0+(o-1)*t.cell,t.top])}makeSides(t,e){let i=[];for(let x=0;x<t.nx;x++)i.push(x);for(let x=1;x<t.ny;x++)i.push(x*t.nx+t.nx-1);for(let x=t.nx-2;x>=0;x--)i.push((t.ny-1)*t.nx+x);for(let x=t.ny-2;x>=0;x--)i.push(x*t.nx);let s=new Float32Array(i.length*6),o=new Float32Array(i.length*6),c=[],a=[[0,-1],[1,0],[0,1],[-1,0]],u=[t.nx,t.nx+t.ny-1,2*t.nx+t.ny-2];for(let x=0;x<i.length;x++){let m=i[x],_=t.x0+m%t.nx*t.cell,v=t.y0+Math.floor(m/t.nx)*t.cell;s.set([_,v,t.h[m],_,v,t.bottom],x*6);let[M,g]=a[x<u[0]?0:x<u[1]?1:x<u[2]?2:3];if(o.set([M,g,0,M,g,0],x*6),x<i.length-1){let y=x*2;c.push(y,y+1,y+3,y,y+3,y+2)}}let f=new Ge;f.setAttribute("position",new ze(s,3).setUsage(bs)),f.setAttribute("normal",new ze(o,3)),f.setIndex(c);let p=new Ce(f,new kn({color:e.clone().multiplyScalar(.85),roughness:.85,side:_n}));return this.content.add(p),{g:f,edge:i}}refreshStock(t,e,i){let s=this.stock;if(!s||e<t)return;let{hm:o,geo:c,base:a}=s,u=o.nx,f=o.ny,p=o.h,x=c.attributes.position,m=c.attributes.color,_=c.attributes.normal,v=c.attributes.wall,M=new ae,g=Math.max(0,t),y=Math.min(f-1,e),E=o.cell*1.5,P=(w,N,F)=>{let B=p[N*u+w],H=0;for(let V=-1;V<=1;V++)for(let z=-1;z<=1;z++){let W=w+z,$=N+V;(z||V)&&W>=0&&$>=0&&W<u&&$<f&&(H=Math.max(H,F*(p[$*u+W]-B)))}return H};for(let w=g;w<=y;w++)for(let N=0;N<u;N++){let F=w*u+N;x.array[F*3]=o.x0+N*o.cell+(o.sx?o.sx[F]:0),x.array[F*3+1]=o.y0+w*o.cell+(o.sy?o.sy[F]:0),x.array[F*3+2]=p[F];let B=o.op[F];B?(M.copy(a).lerp(i[B-1],.28),M.multiplyScalar(.82+.18*Math.max(0,Math.min(1,(p[F]-o.bottom)/Math.max(1,o.top-o.bottom))))):M.copy(a),m.array[F*3]=M.r,m.array[F*3+1]=M.g,m.array[F*3+2]=M.b}let S=x.array,L=Math.max(0,g-1),T=Math.min(f-1,y+1);for(let w=L;w<=T;w++)for(let N=0;N<u;N++){let F=w*u+N,B=v.array,H=P(N,w,1),V=P(N,w,-1);if(B[F*4]=0,B[F*4+1]=0,B[F*4+2]=p[F],B[F*4+3]=p[F],o.wx&&(o.wx[F]||o.wy[F])&&(H>E||V>E)){B[F*4]=o.wx[F],B[F*4+1]=o.wy[F],B[F*4+2]=p[F]-V,B[F*4+3]=p[F]+H,_.array[F*3]=0,_.array[F*3+1]=0,_.array[F*3+2]=1;continue}let z=(w*u+Math.max(0,N-1))*3,W=(w*u+Math.min(u-1,N+1))*3,$=(Math.max(0,w-1)*u+N)*3,k=(Math.min(f-1,w+1)*u+N)*3,J=S[W]-S[z],q=S[W+1]-S[z+1],it=S[W+2]-S[z+2],st=S[k]-S[$],St=S[k+1]-S[$+1],wt=S[k+2]-S[$+2],$t=q*wt-it*St,Kt=it*st-J*wt,re=J*St-q*st,ct=Math.hypot($t,Kt,re)||1;re<0&&($t=-$t,Kt=-Kt,re=-re),_.array[F*3]=$t/ct,_.array[F*3+1]=Kt/ct,_.array[F*3+2]=re/ct}x.addUpdateRange(g*u*3,(y-g+1)*u*3),m.addUpdateRange(g*u*3,(y-g+1)*u*3),_.addUpdateRange(L*u*3,(T-L+1)*u*3),v.addUpdateRange(L*u*4,(T-L+1)*u*4),x.needsUpdate=!0,m.needsUpdate=!0,_.needsUpdate=!0,v.needsUpdate=!0;let C=s.sides.g.attributes.position;s.sides.edge.forEach((w,N)=>{C.array[N*6+2]=p[w]}),C.needsUpdate=!0}setTool(t,e){for(let x of[...this.tool.children])this.tool.remove(x),x.traverse(m=>{m.geometry?.dispose(),m.material?.dispose()});let i=t.diameter/2,s=t.kind==="surfacing"||i>6.35,o=s?Math.max(e+1,Math.min(8,i*.5)):Math.max(t.fluteLength||0,Math.min(25,Math.max(e+3,t.diameter*2))),c=new kn({color:14015457,metalness:.85,roughness:.3}),a;if(t.kind==="vbit"||t.kind==="chamfer"||t.kind==="drill"){let x=i/Math.tan((t.angle||(t.kind==="drill"?118:90))*Math.PI/360);a=new Ce(new or(i,x,48),c),a.rotation.x=-Math.PI/2,a.position.z=x/2}else if(t.kind==="ball"){a=new Xn;let x=new Ce(new mi(i,i,o-i,64),c);x.rotation.x=Math.PI/2,x.position.z=i+(o-i)/2;let m=new Ce(new $i(i,48,24,0,Math.PI*2,Math.PI/2,Math.PI/2),c);m.rotation.x=Math.PI/2,m.position.z=i,a.add(x,m)}else a=new Ce(new mi(i,i,o,64),c),a.rotation.x=Math.PI/2,a.position.z=o/2;let u=s?3.175:Math.max(i,Math.min(3.175,i*1.5)),f=20,p=new Ce(new mi(u,u,f,32),new kn({color:11187132,metalness:.8,roughness:.35}));p.rotation.x=Math.PI/2,p.position.z=o+f/2,this.tool.add(a,p)}moveTool(t,e,i){this.tool.position.set(t,e,i)}showPaths(t){this.paths&&(this.content.remove(this.paths),this.paths.traverse(e=>{e.geometry?.dispose(),e.material?.dispose()})),this.paths=new Xn;for(let e of t){let i=e.track;if(!i)continue;let s=[],o=[];for(let a=4;a<i.length;a+=4)(i[a+3]>0?s:o).push(i[a-4],i[a-3],i[a-2]+.02,i[a],i[a+1],i[a+2]+.02);let c=(a,u,f)=>{if(!a.length)return;let p=new Ge;p.setAttribute("position",new Ve(a,3));let x=new xs(p,new Qn({color:u,transparent:!0,opacity:f}));x.renderOrder=3,this.paths.add(x)};c(s,Yn[e.kind]||"#1abc9c",.75),c(o,"#93a2b4",.3)}this.content.add(this.paths)}dispose(){this.alive=!1,this.resize.disconnect(),this.clear(),this.controls.dispose(),this.renderer.dispose()}}});function Ub(){return new Promise((n,t)=>{let e=indexedDB.open(Fb,1);e.onupgradeneeded=()=>e.result.createObjectStore("kv"),e.onsuccess=()=>n(e.result),e.onerror=()=>t(e.error)})}async function Pu(n,t){let e=await Ub();return new Promise((i,s)=>{let o=e.transaction("kv",n),c=t(o.objectStore("kv"));o.oncomplete=()=>{e.close(),i(c?.result)},o.onerror=o.onabort=()=>{e.close(),s(o.error)}})}function Bb(n){let t=new Uint8Array(n),e=2166136261;for(let i=0;i<t.length;i++)e^=t[i],e=Math.imul(e,16777619);return(e>>>0).toString(36)}async function jp(){let n=await Yo("recent");if(Array.isArray(n))return n;let t=await Yo("last");if(!t?.bytes)return[];let e=Tc(t.name,t.bytes);await $o(`part:${e}`,t);let i=[{key:e,name:t.name,size:t.bytes.byteLength,savedAt:t.savedAt||Date.now()}];return await $o("recent",i),await Ec("last"),i}async function Kp(n,t,e=Tc(n.name,n.bytes)){await $o(`part:${e}`,n);let i=kb(n.name,n.bytes);t.some(o=>o.key===i)&&await Ec(`part:${i}`);let s=[{key:e,name:n.name,size:n.bytes.byteLength,savedAt:n.savedAt},...t.filter(o=>o.key!==e&&o.key!==i)];for(let o of s.slice(Au))await Ec(`part:${o.key}`);return await $o("recent",s.slice(0,Au)),s.slice(0,Au)}async function Cu(n,t){await Ec(`part:${n}`);let e=t.filter(i=>i.key!==n);return await $o("recent",e),e}var Fb,Yo,$o,Ec,Au,Tc,kb,Qp=pe(()=>{Fb="nccam";Yo=n=>Pu("readonly",t=>t.get(n)).catch(()=>null),$o=(n,t)=>Pu("readwrite",e=>e.put(t,n)).catch(()=>{}),Ec=n=>Pu("readwrite",t=>t.delete(n)).catch(()=>{}),Au=10,Tc=(n,t)=>`${n}|${t.byteLength}|${Bb(t)}`;kb=(n,t)=>`${n}|${t.byteLength}`});function tm(n){let t=/^\s*([-+]?[\d.]+(?:e[-+]?\d+)?)\s*([a-z%]*)\s*$/i.exec(n||"");if(!t||t[2]==="%")return null;let e=Vb[t[2].toLowerCase()];return e?{mm:+t[1]*e,user:+t[1]}:null}function em(n){let t=/rgba?\(\s*(\d+)[, ]+(\d+)[, ]+(\d+)(?:[,/ ]+([\d.]+%?))?/.exec(n||"");return!t||t[4]!==void 0&&parseFloat(t[4])===0?null:"#"+[t[1],t[2],t[3]].map(e=>(+e).toString(16).padStart(2,"0")).join("")}function nm(n){let t=new DOMParser().parseFromString(n,"image/svg+xml");if(t.querySelector("parsererror")||t.documentElement.nodeName.toLowerCase()!=="svg")throw new Error("This SVG could not be read. Save it again as plain SVG.");let e=t.documentElement,i=(e.getAttribute("viewBox")||"").trim().split(/[\s,]+/).map(Number),s=i.length===4&&i.every(Number.isFinite)&&i[2]>0&&i[3]>0,o=tm(e.getAttribute("width")),c=tm(e.getAttribute("height")),a=s?i[2]:o?.user??0,u=s?i[3]:c?.user??0,f=o&&s?o.mm/i[2]:c&&s?c.mm/i[3]:o?o.mm/o.user:25.4/96,p=o&&/[a-z]+$/i.exec(e.getAttribute("width"))?.[0]||"px",x=document.createElement("div");x.style.cssText="position:absolute;left:-100000px;top:0;width:0;height:0;overflow:hidden;opacity:0;pointer-events:none";let m=document.importNode(e,!0);s?(m.setAttribute("width",String(i[2])),m.setAttribute("height",String(i[3])),m.setAttribute("preserveAspectRatio","none")):(a&&m.setAttribute("width",String(a)),u&&m.setAttribute("height",String(u))),x.appendChild(m),document.body.appendChild(x);let _=[],v={},M=g=>{v[g]=(v[g]||0)+1};try{Xb(m);let g=s?i[3]:u||m.getBBox().height,y=m.querySelectorAll("path, rect, circle, ellipse, line, polyline, polygon, text, image");for(let E of y){if(E.closest(Hb))continue;let P=getComputedStyle(E);if(P.display==="none"||P.visibility==="hidden")continue;let S=E.nodeName.toLowerCase();if(S==="text"){M("text");continue}if(S==="image"){M("image");continue}let L=P.stroke!=="none"&&parseFloat(P.strokeOpacity)!==0?em(P.stroke):null,T=P.fill!=="none"&&parseFloat(P.fillOpacity)!==0?em(P.fill):null;if(!L&&!T)continue;let C=E.getCTM();if(!C)continue;let w=Gb(E);for(let N of Wb(E,S)){let F=N.pts.map(([H,V])=>[(C.a*H+C.c*V+C.e)*f,(g-(C.b*H+C.d*V+C.f))*f]),B=rs(F,N.closed);B.length<2||_.push({pts:B,closed:N.closed&&B.length>2,color:L||T,layer:w,filled:!!T})}}}finally{x.remove()}return{shapes:_,units:p,skipped:v}}function Gb(n){for(let t=n.parentElement;t&&t.nodeName.toLowerCase()!=="svg";t=t.parentElement)if(t.getAttribute("inkscape:groupmode")==="layer")return t.getAttribute("inkscape:label")||t.id||"";return""}function Xb(n){for(let t=0;t<6;t++){let e=n.querySelectorAll("use");if(!e.length)return;for(let i of e){let s=i.getAttribute("href")||i.getAttributeNS("http://www.w3.org/1999/xlink","href")||"",o=s.startsWith("#")?n.querySelector(`[id="${CSS.escape(s.slice(1))}"]`):null,c=document.createElementNS("http://www.w3.org/2000/svg","g");for(let f of i.attributes)["href","xlink:href","x","y","width","height","transform"].includes(f.name)||c.setAttribute(f.name,f.value);let a=parseFloat(i.getAttribute("x"))||0,u=parseFloat(i.getAttribute("y"))||0;if(c.setAttribute("transform",`${i.getAttribute("transform")||""} translate(${a} ${u})`),o&&!o.contains(i)){let f=o.nodeName.toLowerCase()==="symbol"?Object.assign(document.createElementNS("http://www.w3.org/2000/svg","g"),{innerHTML:o.innerHTML}):o.cloneNode(!0);f.removeAttribute("id"),c.appendChild(f)}i.replaceWith(c)}}}function Wb(n,t){switch(t){case"path":try{return Nc(n.getAttribute("d"))}catch{return[]}case"line":return[{pts:[[un(n,"x1"),un(n,"y1")],[un(n,"x2"),un(n,"y2")]],closed:!1}];case"polyline":case"polygon":{let e=(n.getAttribute("points")||"").trim().split(/[\s,]+/).map(Number),i=[];for(let s=0;s+1<e.length;s+=2)i.push([e[s],e[s+1]]);return t==="polygon"&&i.length>2&&i.push(i[0].slice()),i.length>1?[{pts:i,closed:t==="polygon"}]:[]}case"circle":{let e=un(n,"r");return e>0?[{pts:Jo(un(n,"cx"),un(n,"cy"),e),closed:!0}]:[]}case"ellipse":{let e=un(n,"rx"),i=un(n,"ry");if(!(e>0&&i>0))return[];let s=jo(un(n,"cx"),un(n,"cy"),e,0,i/e);return s[s.length-1]=s[0].slice(),[{pts:s,closed:!0}]}case"rect":{let e=un(n,"x"),i=un(n,"y"),s=un(n,"width"),o=un(n,"height");if(!(s>0&&o>0))return[];let c=n.hasAttribute("rx")?un(n,"rx"):un(n,"ry"),a=n.hasAttribute("ry")?un(n,"ry"):c;if(c=Math.min(c,s/2),a=Math.min(a,o/2),!(c>0))return[{pts:[[e,i],[e+s,i],[e+s,i+o],[e,i+o],[e,i]],closed:!0}];let u=Math.max(c,a),f=(x,m,_)=>Cs(0,0,u,_,_+Math.PI/2,!0).map(([v,M])=>[x+v/u*c,m+M/u*a]),p=[...f(e+s-c,i+o-a,0),...f(e+c,i+o-a,Math.PI/2),...f(e+c,i+a,Math.PI),...f(e+s-c,i+a,Math.PI*1.5)];return p.push(p[0].slice()),[{pts:p,closed:!0}]}}return[]}var Vb,Hb,un,im=pe(()=>{bc();Vb={mm:1,cm:10,in:25.4,pt:25.4/72,pc:25.4/6,px:25.4/96,"":25.4/96},Hb="defs, clipPath, mask, symbol, marker, pattern, metadata, title, desc";un=(n,t)=>parseFloat(n.getAttribute(t))||0});function rm(n){return sm||=(async()=>{let t=async o=>{let c=await fetch(n.file(`lib/${o}`));if(!c.ok)throw new Error(`lib/${o}: ${c.status}`);return URL.createObjectURL(new Blob([await c.text()],{type:"text/javascript"}))},[e,i]=await Promise.all([t("pdf.min.mjs"),t("pdf.worker.min.mjs")]),s=await import(e);return s.GlobalWorkerOptions.workerSrc=i,s})().catch(t=>{throw sm=null,t})}var sm,om=pe(()=>{sm=null});var am={};Ru(am,{mountApp:()=>$b});function $b(n,t,e){let i={get:async U=>{let X=await fetch(t.base+U);if(!X.ok)throw new Error(`${U}: ${X.status}`);return X.json()},post:(U,X)=>fetch(t.base+U,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(X)})},s={step:1,maxStep:1,fileName:"",loading:"",error:"",up:"top",analysis:null,part:null,scale:null,rot:null,lock:!0,fileSize:null,meshKind:null,tools:[],numbering:"slot",safeZ:null,connected:!1,units:"mm",limits:{},travel:null,job:null,plan:null,planning:!1,result:null,simChecks:null,toast:"",recent:[],partKey:null,raw:null,a:null,groups:[],sel:new Set,info:null},o=new wc,c=U=>!!U.toolNumber&&(!s.slots||U.toolNumber<=s.slots),a=(U,X)=>Mn.num(U,s.units,X),u=(U,X)=>Mn.len(U,s.units,X),f=0;(async()=>{let[U,X,rt,ut]=await Promise.all([i.get("/api/settings").catch(()=>({})),i.get("/api/tools").catch(()=>[]),i.get("/api/firmware").catch(()=>null),i.get("/api/server-state").catch(()=>null)]);s.units=Mn.unitsFrom(U?.unitsPreference),s.numbering=U?.tool?.numbering==="toolId"?"toolId":"slot",s.slots=Math.max(0,Number(U?.tool?.count)||0);let et=U?.tool?.probe?Number(U?.tool?.probeToolNumber)||99:null,mt=Number(U?.safeZHeight);s.safeZ=Number.isFinite(mt)?mt:null,s.tools=yf(Array.isArray(X)?X:X?.tools),s.numbering=xf(s.numbering,s.tools,s.slots,et);let kt=rt?.settings||{},ee=yt=>{let Xt=parseFloat(kt[yt]?.value);return Number.isFinite(Xt)&&Xt>0?Xt:null};s.limits={maxRpm:ee("30")||void 0,minRpm:ee("31")||void 0,maxFeed:Math.min(ee("110")||1/0,ee("111")||1/0,1/0)},Number.isFinite(s.limits.maxFeed)||delete s.limits.maxFeed,s.maxRapid=Math.min(ee("110")||5e3,ee("111")||5e3),ee("130")&&ee("131")&&(s.travel={x:ee("130"),y:ee("131"),z:ee("132")}),s.connected=!!ut?.machineState?.connected,V(),s.recent=await jp(),s.recent.length&&!s.a&&!s.loading&&N(s.recent[0].key)})();let p=0,x=/\.(dxf|svg|pdf|ai)$/i;async function m(U,X=null){if(!U&&!X)return;let rt=++p,ut=()=>rt!==p,et=X?X.name:U.name;if(!x.test(et)){s.error=/\.(step|stp|stl|3mf)$/i.test(et)?"That\u2019s a 3D part: open it in ncCAM. ncCut2D reads drawings: DXF, SVG, PDF or AI.":"Open a DXF, SVG, PDF or AI drawing.",V();return}s.fileName=et,s.loading=`Reading ${et}\u2026`,s.error="",s.plan=null,s.result=null,s.a=null,s.part=null,s.sel=new Set,s.step=1,s.maxStep=1,V();try{let mt=X?X.bytes:await U.arrayBuffer();if(ut())return;let kt=Tc(et,mt);if(!X&&s.recent.some(Ae=>Ae.key===kt)){let Ae=await Yo(`part:${kt}`);if(ut())return;Ae?.bytes&&F(Ae.bytes,mt)&&(X={...Ae,bytes:mt})}let ee=et.split(".").pop().toLowerCase(),yt;if(ee==="dxf"?yt=Fc(new TextDecoder().decode(mt)):ee==="svg"?yt=nm(new TextDecoder().decode(mt)):yt=await Uc(new Uint8Array(mt.slice(0)),await rm(t)),ut())return;let Xt=Uu(yt.shapes);if(!Xt.shapes.length)throw new Error("No lines or shapes were found in this drawing. Text must be converted to curves (outlines) first.");let te=Object.entries(yt.skipped||{}).filter(([,Ae])=>Ae>0).map(([Ae,Ke])=>`${Ke} ${Ae}`);if(s.info={units:yt.units,notes:te.length?`Not drawn: ${te.join(", ")} (convert text and hatches to curves to cut them).`:""},s.raw=Xt.shapes,s.bytes=mt.slice(0),s.partKey=kt,s.scale=X?.scale||1,await _(X?.job),ut())return;w()}catch(mt){if(ut())return;s.error=mt.message||String(mt),s.fileName="",s.a=null}s.loading="",V()}async function _(U){let X=s.scale===1?s.raw:Fu(s.raw,[s.scale,0,0,s.scale,0,0]),rt=s.groups;if(s.a=ca(X),s.groups=Gc(s.a),U?.groups&&rt?.length){let et={};for(let mt of s.groups){let kt=rt.find(ee=>ee.idx.includes(mt.idx[0]));kt&&U.groups[kt.key]&&(et[mt.key]=U.groups[kt.key])}U={...U,groups:et}}await e("load",{shapes:X});let ut=Tf(s.a,null);s.job=U?{...ut,...U,stock:{...ut.stock,...U.stock,...U.stock?.fit!==!1?{width:ut.stock.width,depth:ut.stock.depth}:{}},groups:U.groups||{},shapes:U.shapes||{}}:ut;for(let et of Object.keys(s.job.shapes))+et>=s.a.shapes.length&&delete s.job.shapes[et];s.sel=new Set([...s.sel].filter(et=>et<s.a.shapes.length)),await g()}let v=Promise.resolve();function M(U){return v=v.then(async()=>{s.loading="Resizing the drawing\u2026",V();try{s.scale=U,s.result=null,s.maxStep=Math.min(s.maxStep,3),await _(s.job),w()}catch(X){s.error=X.message||String(X)}s.loading="",V()}),v}async function g(U=!1){if(!s.a||!(s.job?.stock.thickness>0)){s.plan=null,s.part=null,V();return}let X=++f;s.planning=!0,U&&(s.result=null),V();let rt=performance.now();try{let ut=await e("plan",{tools:s.tools,job:{...s.job,units:s.units},limits:s.limits,paths:U,gcodeOptions:{name:s.fileName,numbering:s.numbering,safeZHeightMm:s.safeZ},timing:{maxRapid:s.maxRapid||5e3}});if(X!==f)return;s.slow=P(performance.now()-rt,U)??(U?null:s.slow),s.plan=ut.plan,s.part=ut.part,w(),U&&(s.result=ut,s.simChecks=null)}catch(ut){X===f&&(s.error=ut.message||String(ut))}X===f&&(s.planning=!1,V())}let y={plan:6e3,paths:15e3,tip:5e3},E=()=>{let U=/aarch64|arm64|armv\d|raspberry/i.test(navigator.userAgent||"")||(navigator.hardwareConcurrency||8)<=4,X=/^(localhost|127\.|\[?::1)/.test(location.hostname||"localhost")||!/^https?:$/.test(location.protocol);return U&&X};function P(U,X){return!E()||U<(X?y.paths:y.plan)?null:`${X?"Making the toolpaths":"Planning"} took ${Math.round(U/1e3)} s on this small computer. ncCut2D runs in the browser that shows it: open ncSender in a browser on a laptop or desktop (this machine's address, port 8090) and it works there, usually several times faster. Programs still save to this machine.`}function S(U,X=""){return`<div class="ncc-busy" ${X?`style="${X}"`:""}><div class="ncc-busy-in"><div class="ncc-busy-row"><span class="ncc-spin"></span>${ue(U)}<span class="ncc-elapsed" data-elapsed></span></div>
      <div class="ncc-busy-tip" data-slowtip hidden>Slow for your parts? Open ncSender in a browser on a laptop or desktop (this machine's address, port 8090): ncCut2D works there, usually several times faster.</div></div></div>`}let L=null,T=setInterval(()=>{if(!n.isConnected){clearInterval(T);return}if(!(s.loading||s.planning||s.result&&!s.simChecks&&s.step===4)){L=null;return}L??=performance.now();let X=performance.now()-L,rt=Math.floor(X/1e3);n.querySelectorAll("[data-elapsed]").forEach(ut=>{ut.textContent=rt>=2?` ${rt} s`:""}),X>=y.tip&&E()&&n.querySelectorAll("[data-slowtip]").forEach(ut=>{ut.hidden=!1})},500),C=null;function w(){if(!s.bytes||!s.job)return;clearTimeout(C);let U={name:s.fileName,bytes:s.bytes,job:s.job,scale:s.scale,savedAt:Date.now()},X=s.partKey,rt=s.recent[0]?.key!==X;C=setTimeout(async()=>{s.recent=await Kp(U,s.recent,X),rt&&V()},400)}async function N(U){let X=await Yo(`part:${U}`);if(X?.bytes)return m(null,X);s.recent=await Cu(U,s.recent),s.error="That drawing is no longer kept in this browser.",V()}function F(U,X){if(U.byteLength!==X.byteLength)return!1;let rt=new Uint8Array(U),ut=new Uint8Array(X);for(let et=0;et<rt.length;et++)if(rt[et]!==ut[et])return!1;return!0}function B(){let U=s.bytes?s.partKey:null;return s.recent.filter(X=>X.key!==U)}function H(U){let X=(Date.now()-U)/864e5;return X<1?"today":X<2?"yesterday":X<30?`${Math.floor(X)} days ago`:new Date(U).toLocaleDateString()}function V(){if(!n.isConnected)return;let U=n.querySelector("[data-keep-scroll]"),X=U?U.scrollTop:0,rt=s.step,ut=[s.a?"Give the stock\u2019s thickness, then choose how each kind of shape is cut and how deep.":"Drop a drawing. ncCut2D groups alike shapes so you choose each kind once.","Pick the material. ncCAM sets the speeds, feeds and depth of each pass.","Tools are picked from your Tool Library. Change any of them, or just continue.","Watch the cut play through. When it looks right, load it."][rt-1],et=[s.a?"What to cut":"Open your drawing","What are you cutting it from?","Here\u2019s the plan",s.simChecks&&!s.simChecks.ok?"Check the warnings":"Ready to cut"][rt-1];n.innerHTML=`
      <nav class="ncc-rail" aria-label="Steps">
        <div class="ncc-rail-head"><div class="ncc-eyebrow">Plugin</div><div class="ncc-rail-title">ncCut2D<span class="ncc-beta">Beta</span></div><div class="ncc-rail-sub">DXF, SVG, PDF or AI to G-code</div></div>
        <div class="ncc-steps">${Yb.map((ee,yt)=>{let Xt=yt+1,te=Xt===rt?"on":Xt<s.maxStep||Xt<rt?"done":"";return`<button class="ncc-step ${te}" type="button" data-go="${Xt}" ${Xt<=s.maxStep?"":"disabled"}><span class="ncc-num">${te==="done"?"\u2713":Xt}</span>${ue(ee)}</button>`}).join("")}</div>
        <button class="ncc-close" type="button" data-act="close">${$e.close}Close</button>
      </nav>
      <section class="ncc-main">
        <div class="ncc-top">
          <div><h1>${ue(et)}</h1><p class="ncc-lede">${ue(ut)}</p></div>
          <div class="ncc-conn"><span class="ncc-dot ${s.connected?"ok":""}"></span>${s.connected?"Connected":"Not connected"}</div>
        </div>
        <div class="ncc-body ${rt===3?"fixed":""}">${[k,Ft,ln,Q][rt-1]()}</div>
        <div class="ncc-foot">${z()}</div>
      </section>
      ${s.toast?`<div class="ncc-toast" role="status">${ue(s.toast)}</div>`:""}`;let mt=n.querySelector("[data-keep-scroll]");mt&&(mt.scrollTop=X);let kt=n.querySelector("[data-viewer]");if(kt){kt.replaceWith(o.el);let ee=s.loading||rt===4&&!s.result?S(s.loading||"Making toolpaths\u2026"):"";o.el.querySelectorAll(".ncc-busy, .ncc-overlay").forEach(yt=>yt.remove()),o.el.insertAdjacentHTML("beforeend",(rt===4?nt():"")+ee),o.fit(),rt===2&&Je(),rt===3&&Ue(),rt===4&&s.result&&dt()}}function z(){let U=`<button class="ncc-back" type="button" data-go="${s.step-1}" ${s.step>1?"":"disabled"}>Back</button>`;if(s.step===1){let rt=s.a?s.job?.stock.thickness>0?s.plan&&!s.plan.ops.length?"Nothing is set to be cut.":"":"Give the stock\u2019s thickness first.":"";return`${U}${rt?`<span class="ncc-foot-note">${rt}</span>`:""}<button class="ncc-next" type="button" data-go="2" ${s.plan&&s.plan.ops.length&&!s.loading&&!s.planning?"":"disabled"}>Next: Stock ${$e.next}</button>`}if(s.step===2)return`${U}<button class="ncc-next" type="button" data-go="3">Next: Operations ${$e.next}</button>`;if(s.step===3){let rt=s.plan&&s.plan.ops.some(ut=>ut.enabled);return`${U}<button class="ncc-next" type="button" data-go="4" ${rt&&!s.planning?"":"disabled"}>Make toolpaths ${$e.next}</button>`}let X=s.simChecks&&!s.simChecks.ok;return`${U}${X?'<span class="ncc-foot-note ncc-bad">Fix the problems above before loading.</span>':""}<button class="ncc-next" type="button" data-act="load" ${s.result&&s.simChecks&&!X?"":"disabled"}>${$e.load}Load into ncSender</button>`}let W={outside:Yn.cutout,inside:Yn.inside,pocket:Yn.pocket,online:Yn.online,off:"#8a94a3"},$=".dxf,.svg,.pdf,.ai,.DXF,.SVG,.PDF,.AI";function k(){if(!s.a&&!s.loading)return`<div class="ncc-drop" data-drop>
        <div class="ncc-drop-icon">${$e.upload}</div>
        <h2>Drop a DXF, SVG, PDF or AI file here</h2>
        <p>A drawing to size, from Fusion, Inkscape, Illustrator, LibreCAD or QCAD. Each shape gets a cut: <strong>Outer (part)</strong>, <strong>Inner (perimeter)</strong>, <strong>Inner (clearing)</strong> or <strong>On the line</strong>.</p>
        <label class="ncc-btn" style="display: inline-flex; align-items: center; gap: 8px">Open file<input type="file" accept="${$}" data-file hidden></label>
        ${s.error?`<div class="ncc-hint bad" style="max-width: 520px">${$e.warn}<span>${ue(s.error)}</span></div>`:""}
        ${B().length?`<div class="ncc-recent"><div class="ncc-recent-h">Recent drawings <span>kept in this browser</span></div>
          ${B().map(X=>`<div class="ncc-recent-row"><button class="ncc-recent-open" type="button" data-recent-open="${ue(X.key)}"><span class="ncc-file-name">${ue(X.name)}</span><span class="ncc-file-sub">${H(X.savedAt)}</span></button><button class="ncc-recent-x" type="button" data-forget="${ue(X.key)}" aria-label="Forget ${ue(X.name)}" title="Forget">${$e.close}</button></div>`).join("")}</div>`:""}
        ${s.tools.length?"":`<div class="ncc-hint" style="max-width: 520px">${$e.info}<span>Your Tool Library is empty. Add your end mills in Settings \u2192 Tool Library so ncCut2D can pick them.</span></div>`}
      </div>`;let U=s.a;return`
      <div class="ncc-card ncc-viewcard ncc-grow">
        <div class="ncc-file">
          <div style="display: flex; align-items: center; gap: 12px; min-width: 0">
            <div class="ncc-drop-icon" style="width: 38px; height: 38px; border-radius: 10px">${$e.part}</div>
            <div style="min-width: 0"><div class="ncc-file-name">${ue(s.fileName)}</div>
            <div class="ncc-file-sub ncc-mono">${U?`${a(U.size[0])} \xD7 ${u(U.size[1])} \xB7 ${U.shapes.length} shape${U.shapes.length===1?"":"s"}`:"&nbsp;"}</div></div>
          </div>
          <div style="display: flex; gap: 8px; align-items: center">
          ${B().length?`<select class="ncc-select ncc-recent-pick" data-recent aria-label="Recent drawings" ${s.loading?"disabled":""}><option value="">Recent drawings\u2026</option>${B().map(X=>`<option value="${ue(X.key)}">${ue(X.name)} \xB7 ${H(X.savedAt)}</option>`).join("")}</select>`:""}
          <label class="ncc-btn muted" style="white-space: nowrap">Open another file<input type="file" accept="${$}" data-file hidden></label>
          </div>
        </div>
        <div class="ncc-drawing" data-drawing>${U?q():S(s.loading||"Reading\u2026","position: static; flex: 1")}</div>
        <div class="ncc-row-sub" style="margin: 0">Click a shape to choose its cut on its own; shift-click for more. ${J()}</div>
      </div>
      <div class="ncc-col ncc-side" data-keep-scroll="cuts">
        ${U?`${pt()}${ct()}${re()}${Kt()}${Bt(!0)}`:""}
      </div>`}let J=()=>["outside","inside","pocket","online","off"].map(U=>`<span style="white-space: nowrap"><span class="ncc-swatch" style="background: ${W[U]}"></span> ${ue(la[U])}</span>`).join(" ");function q(){let U=s.a,[X,rt]=U.size,ut=Math.max(X,rt)*.03+1,et=Rs(s.groups),mt=U.shapes.map((yt,Xt)=>Xt).sort((yt,Xt)=>(U.areas[Xt]||0)-(U.areas[yt]||0)),kt=Math.max(X,rt)/500,ee=mt.map(yt=>{let Xt=U.shapes[yt],te=Ui(U,s.job,yt,et),Ae=Xt.pts.map((Ts,ai)=>`${ai?"L":"M"}${Ts[0].toFixed(3)} ${(rt-Ts[1]).toFixed(3)}`).join("")+(U.loops[yt]?"Z":""),Ke=W[te.cut],We=s.sel.has(yt),oi=te.cut==="pocket"&&U.loops[yt]?`fill="${Ke}" fill-opacity="0.22"`:U.loops[yt]?'fill="transparent"':'fill="none"';return`<path d="${Ae}" data-shape="${yt}" stroke="${We?"var(--color-accent)":Ke}" stroke-width="${(We?3:1.4)*kt}" ${te.cut==="off"?`stroke-dasharray="${4*kt} ${3*kt}"`:""} ${oi} vector-effect="non-scaling-stroke" style="cursor: pointer"><title>${ue(st(yt))} \xB7 ${ue(la[te.cut])}${it(te)}</title></path>`}).join("");return`<svg viewBox="${-ut} ${-ut} ${X+2*ut} ${rt+2*ut}" preserveAspectRatio="xMidYMid meet" style="width: 100%; height: 100%; display: block">${ee}</svg>`}let it=U=>U.cut==="off"?"":U.depth===null||U.depth===void 0?" \xB7 through":` \xB7 ${u(U.depth)} deep`;function st(U){let X=s.a,rt=X.circles[U];if(!X.loops[U])return"Line";if(rt)return`\xD8${u(2*rt.r)} circle`;let ut=Lc([X.shapes[U]]);return`${a(ut.w)} \xD7 ${u(ut.h)} shape`}function St(U){let X=U.idx.length,rt=X>1?`${X} \xD7 `:"";if(U.kind==="outline")return X>1?`Outline (${X} shapes joined)`:"Outline";if(U.kind==="line")return X>1?`${X} lines`:"A line";if(U.kind==="counterbore"){let{sizes:ut,step:et,last:mt}=U.label;return`${rt}\xD8${u(ut[et])} ${mt?"hole through the":et?"inner step of the":"outer step of the"} counterbore${X>1?"s":""} (${ut.map(kt=>a(kt)).join(" / ")})`}return U.kind==="circle"?`${rt}\xD8${u(U.label.d)} circle${X>1?"s":""}`:`${rt}${a(U.label.w)} \xD7 ${u(U.label.h)} ${U.kind==="rect"?"rectangle":"shape"}${X>1?"s":""}`}let wt=U=>U?["outside","inside","pocket","online","off"]:["online","off"];function $t(U,X,rt){let ut=wt(rt).map(kt=>`<option value="${kt}" ${X.cut===kt?"selected":""}>${ue(la[kt])}</option>`).join(""),et=X.depth===null||X.depth===void 0,mt=X.cut==="off"?"":`<label class="ncc-chk"><input type="checkbox" data-through="${ue(U)}" ${et?"checked":""}> Through</label>
      ${et?"":`<input class="ncc-input ncc-mono ncc-depth" inputmode="decimal" aria-label="Depth (${s.units})" data-depth="${ue(U)}" value="${s.units==="in"?Math.round(X.depth/Mn.INCH*1e3)/1e3:Math.round(X.depth*100)/100}"><span class="ncc-unit">${s.units} deep</span>`}`;return`<div class="ncc-choose"><select class="ncc-select" data-cut="${ue(U)}" aria-label="Cut">${ut}</select>${mt}</div>`}function Kt(){let U=Rs(s.groups);return`<div class="ncc-card"><div class="ncc-label">What to cut</div>${s.groups.map(rt=>{let ut=Ui(s.a,s.job,rt.idx[0],U),et=rt.idx.filter(mt=>s.job.shapes[mt]).length;return`<div class="ncc-decide" data-hover="${ue(rt.key)}">
        <div class="ncc-decide-name"><span class="ncc-swatch" style="background: ${W[ut.cut]}"></span>${ue(St(rt))}${et?`<small> \xB7 ${et} set on ${et>1?"their":"its"} own</small>`:""}</div>
        ${$t(rt.key,ut,rt.kind!=="line")}
      </div>`}).join("")}</div>`}function re(){if(!s.sel.size)return"";let U=[...s.sel],X=Rs(s.groups),rt=Ui(s.a,s.job,U[0],X),ut=U.every(mt=>s.a.loops[mt]),et=U.some(mt=>s.job.shapes[mt]);return`<div class="ncc-card ncc-sel-card">
        <div class="ncc-row"><div class="ncc-row-title">${U.length>1?`${U.length} shapes selected`:ue(st(U[0]))}</div><button type="button" class="ncc-link" data-act="unselect">Clear</button></div>
        ${$t("sel",rt,ut)}
        ${et?'<button type="button" class="ncc-link" data-act="sel-reset">Back to its group\u2019s choice</button>':'<div class="ncc-row-sub">A change here applies to the selected shapes only.</div>'}
      </div>`}function ct(){let U=s.job.stock.thickness,X=U?s.units==="in"?Math.round(U/Mn.INCH*1e3)/1e3:Math.round(U*100)/100:"";return`<div class="ncc-card ${U?"":"ncc-need"}">
        <div class="ncc-row"><div class="ncc-row-text"><div class="ncc-row-title">Stock thickness</div><div class="ncc-row-sub">${U?"\u201CThrough\u201D cuts go this deep and a little into the spoilboard.":"How thick is the board? Measure it: every \u201Cthrough\u201D cut depends on it."}</div></div>
        <div style="display: flex; align-items: center; gap: 6px"><input class="ncc-input ncc-mono ncc-depth" inputmode="decimal" aria-label="Stock thickness (${s.units})" data-thick value="${X}" placeholder="?"><span class="ncc-unit">${s.units}</span></div></div>
      </div>`}function pt(){let U=s.a,X=Lc(s.raw),rt=s.info?.units==null||s.info?.units==="unitless",ut=Math.round(s.scale*1e4)/100;return`<div class="ncc-card">
        <div class="ncc-fields">${["X","Y"].map((et,mt)=>`<div class="ncc-field"><label for="ncc-size${mt}">${et} (${s.units})</label><input id="ncc-size${mt}" class="ncc-input ncc-mono" inputmode="decimal" data-size="${mt}" value="${s.units==="in"?Math.round(U.size[mt]/Mn.INCH*1e3)/1e3:Math.round(U.size[mt]*100)/100}"></div>`).join("")}</div>
        <div class="ncc-row-sub">${ut===100?"As drawn":`Scaled to ${ut}%`}${s.info?.units?` \xB7 the file says ${ue(s.info.units)}`:""}.${ut!==100?' <button type="button" class="ncc-link" data-scale="reset">Back to the drawing\u2019s size</button>':""}</div>
        ${rt&&ut===100&&Math.max(X.w,X.h)<50?`<div class="ncc-hint">${$e.info}<span>Only ${a(Math.max(X.w,X.h))} across and the file has no unit: it may be in inches. <button type="button" class="ncc-link" data-scale="inch">Make it inches (\xD7 25.4)</button></span></div>`:""}
        ${s.info?.notes?`<div class="ncc-hint">${$e.info}<span>${ue(s.info.notes)}</span></div>`:""}
      </div>`}function Bt(){let U=s.slow?`<div class="ncc-hint">${$e.info}<span>${ue(s.slow)}</span></div>`:"";return s.plan?U+s.plan.warnings.map(X=>`<div class="ncc-hint ${X.kind==="notool"?"bad":""}">${X.kind==="notool"?$e.warn:$e.info}<span>${ue(X.text)}</span></div>`).join(""):U}let ie=null;function Ft(){let U=s.job,X=s.plan?.stock||ha(s.a,U),rt=Object.entries(ls).map(([et,mt])=>`<button class="ncc-pick ncc-mat ${U.material===et?"sel":""}" type="button" data-material="${et}"><span class="ncc-mat-swatch" style="background: ${Sr[et]}"></span>${ue(mt.name)}<small>${ue(mt.note)}</small></button>`).join(""),ut=(et,mt,kt)=>`<div class="ncc-field"><label for="ncc-${et}">${mt}</label><input id="ncc-${et}" class="ncc-input ncc-mono" inputmode="decimal" data-stock="${et}" value="${s.units==="in"?Math.round(kt/Mn.INCH*1e3)/1e3:Math.round(kt*100)/100}" ${U.stock.fit&&et!=="thickness"?"disabled":""}></div>`;return`
      <div class="ncc-col ncc-half">
        <div class="ncc-card ncc-mat-card"><div class="ncc-label">Material</div><div class="ncc-picks ncc-mats">${rt}</div></div>
        <div class="ncc-card">
          ${de("fit","Size the stock to the drawing",`Adds ${u(U.stock.margin)} on every side`,U.stock.fit)}
          <div class="ncc-fields">${ut("width",`Width X (${s.units})`,X.width)}${ut("depth",`Depth Y (${s.units})`,X.depth)}${ut("thickness",`Thickness Z (${s.units})`,X.thickness)}</div>
        </div>
        <div class="ncc-card">
          ${de("tabs","Leave tabs to hold the part",U.tabs.enabled?`${a(fe().height)} \xD7 ${u(fe().length)}, so the part stays put until you cut it free`:"The part comes loose at the end",U.tabs.enabled)}
          ${U.tabs.enabled?`<div class="ncc-row"><span class="ncc-row-title" style="font-weight: 500">Number of tabs</span><div class="ncc-stepper"><button type="button" data-tabs="-1" aria-label="Fewer tabs" ${U.tabs.count<=1?"disabled":""}>\u2212</button><span class="ncc-mono">${U.tabs.count}</span><button type="button" data-tabs="1" aria-label="More tabs" ${U.tabs.count>=12?"disabled":""}>+</button></div></div>
          ${Ie("height","Tab thickness","Thinner tabs","Thicker tabs")}
          ${Ie("length","Tab length","Shorter tabs","Longer tabs")}`:""}
        </div>
      </div>
      <div class="ncc-col ncc-half">
        <div class="ncc-card ncc-zero-card"><div class="ncc-label">Where is zero?</div>${ge(X)}
          <div style="font-size: 14px">X Y zero: <strong>${ue(qe(U.zero.xy))}</strong> of the stock</div>
          <div class="ncc-seg" role="group" aria-label="Z zero">
            <button type="button" class="${U.zero.z==="top"?"sel":""}" data-z="top">Z0 on top of stock</button>
            <button type="button" class="${U.zero.z==="bed"?"sel":""}" data-z="bed">Z0 on the bed</button>
          </div>
        </div>
      </div>`}let de=(U,X,rt,ut)=>`<div class="ncc-row"><div class="ncc-row-text"><div class="ncc-row-title">${ue(X)}</div><div class="ncc-row-sub">${ue(rt)}</div></div><button class="ncc-toggle" type="button" role="switch" aria-checked="${ut}" aria-label="${ue(X)}" data-toggle="${U}"></button></div>`;function qe(U){return{"back-left":"back left corner","back-center":"back edge, middle","back-right":"back right corner","left-center":"left edge, middle",center:"center","right-center":"right edge, middle","front-left":"front left corner","front-center":"front edge, middle","front-right":"front right corner"}[U]}let fe=()=>({...Fi(s.job.material),...Object.fromEntries(["height","length"].filter(U=>s.job.tabs[U]!=null).map(U=>[U,s.job.tabs[U]]))}),_e=()=>s.units==="in"?{min:.508,max:10.16,step:.508,grid:.254}:{min:.5,max:10,step:.5,grid:.1};function Ie(U,X,rt,ut){let et=fe()[U];return`<div class="ncc-row"><span class="ncc-row-title" style="font-weight: 500">${X}</span><div class="ncc-stepper"><button type="button" data-tabsize="${U}" data-by="-1" aria-label="${rt}" ${et<=_e().min+1e-6?"disabled":""}>\u2212</button><span class="ncc-mono">${u(et,s.units==="in"?2:1)}</span><button type="button" data-tabsize="${U}" data-by="1" aria-label="${ut}" ${et>=_e().max-1e-6?"disabled":""}>+</button></div></div>`}function ge(U){return`<div class="ncc-zero"><div data-viewer></div></div>
      <div class="ncc-row-sub ncc-mono" style="text-align: center; margin: 0">${a(U.width)} \xD7 ${a(U.depth)} \xD7 ${u(U.thickness)} stock \xB7 tap a point for zero, an arrow to turn the part</div>`}let Re=null;function Je(){let U=s.plan?.stock||ha(s.a,s.job),X=wf.map(et=>({key:et,...Xc(U,{xy:et,z:"top"})})),rt=getComputedStyle(n).getPropertyValue("--color-accent").trim()||"#4c6ef5",ut=`${s.part?.positions?.length}|${U.width}|${U.depth}|${U.thickness}`;o.keepCamera=Re===ut,o.showZero({stock:U,part:s.part,points:X,selected:s.job.zero.xy,zFace:s.job.zero.z,color:Sr[s.job.material],accent:rt}),Re=ut,ie=null,lt=null,o.onPick=null,o.onMarker=et=>{et!==s.job.zero.xy&&(s.job.zero.xy=et,Ot())},o.onAxis=null}function ln(){let U=s.plan;if(!U)return S("Planning\u2026","position: static; flex: 1");let X=U.ops.map(yt=>{let Xt=Xe(yt);return`<div class="ncc-op ${yt.enabled?"":"off"} ${s.focusOp===yt.id?"focus":""}" data-focus="${yt.id}">
        <div class="ncc-op-icon" style="background: color-mix(in srgb, ${Yn[yt.kind]} 16%, transparent); color: ${Yn[yt.kind]}">${$e[yt.kind]||$e.pocket}</div>
        <div class="ncc-op-text"><div class="ncc-op-title">${ue(yt.label)}</div><div class="ncc-op-sub ncc-mono">${ue(yt.detail)}</div></div>
        <select class="ncc-select" data-tool="${yt.id}" aria-label="Tool for ${ue(yt.label)}">${Xt.map(te=>`<option value="${te.id}" ${te.id===yt.tool.id?"selected":""}>T${cs(te,s.numbering)} \xB7 ${ue(te.name)}</option>`).join("")}</select>
        <button class="ncc-toggle" type="button" role="switch" aria-checked="${yt.enabled}" aria-label="${ue(yt.label)}" data-op="${yt.id}"></button>
      </div>`}).join(""),rt=ua(U),ut=new Map;for(let yt of U.ops)yt.enabled&&yt.kind!=="face"&&ut.set(yt.tool.id,(ut.get(yt.tool.id)||0)+1);let et=[...ut].sort((yt,Xt)=>Xt[1]-yt[1])[0]?.[0],mt=U.ops.find(yt=>yt.enabled&&yt.tool.id===et)||U.ops.find(yt=>yt.enabled),kt=mt?.feeds,ee=`<div class="ncc-pair">
          <div class="ncc-card"><div class="ncc-label">Finish</div>
            <div class="ncc-seg" role="group" aria-label="Finish">${Object.entries(Hn).map(([yt,Xt])=>`<button type="button" class="${s.job.finish===yt?"sel":""}" data-finish="${yt}">${Xt.name}</button>`).join("")}</div>
            <div class="ncc-row-sub">${{fast:"Bigger steps, no finishing pass.",balanced:`Leaves ${u(.2,s.units==="in"?3:1)} on the walls, then a clean finishing pass.`,smooth:"Lighter steps and a finishing pass, for the best walls."}[s.job.finish]}</div>
            ${kt?`<div class="ncc-mono ncc-row-sub" style="line-height: 1.6">${ue(mt.tool.name)}<br>${ue(ls[s.job.material].name)} \xB7 ${kt.rpm.toLocaleString()} RPM<br>${s.units==="in"?`${a(kt.feed,1)} in/min`:`${kt.feed.toLocaleString()} mm/min`} \xB7 ${u(kt.stepdown,s.units==="in"?3:2)} per pass</div>`:""}
          </div>
          <div class="ncc-card"><div class="ncc-label">Tools for this job</div>
            ${rt.map(yt=>`<div class="ncc-row"><span style="min-width: 0"><span class="ncc-mono" style="color: var(--color-accent)">T${cs(yt,s.numbering)}</span> ${ue(yt.name)}</span><span class="ncc-slot ${c(yt)?"":"hand"}">${c(yt)?`Slot ${yt.toolNumber}`:"By hand"}</span></div>`).join("")||'<div class="ncc-row-sub">No operations switched on.</div>'}
            ${rt.some(yt=>!yt.toolNumber)?'<div class="ncc-row-sub">By hand: not in the magazine, so you\u2019ll be asked to load it.</div>':""}
          </div>
        </div>`;return`<div class="ncc-plan">
        <div class="ncc-plan-list" data-keep-scroll="ops"><div class="ncc-ops">${X}</div>${Bt(!1)}<div class="ncc-plan-pair-in">${ee}</div></div>
        <div class="ncc-card ncc-viewcard ncc-plan-view"><div data-viewer></div></div>
        <div class="ncc-plan-pair">${ee}</div>
      </div>`}function Ue(){let X=(s.plan?.ops||[]).filter(rt=>rt.enabled&&rt.kind!=="face").flatMap(rt=>{let ut=s.focusOp&&s.focusOp!==rt.id;return rt.kind==="chamfer"?rt.show.map(mt=>({loops:mt.loops,z:mt.z+.05,color:Yn.chamfer,opacity:ut?.2:1,top:mt.z})):{loops:rt.region||(rt.lines||[]).map(mt=>mt.pts)||[],z:rt.kind==="cutout"?rt.zTop+.05:Math.max(rt.zBottom,0)+.05,color:Yn[rt.kind],dashed:rt.kind==="cutout",opacity:ut?.2:1,top:rt.zTop}});o.keepCamera=ie===s.part?.positions,o.showPart(s.part,X),ie=s.part?.positions,lt=null,Re=null,o.onFrame=null,o.onMarker=null,o.onPick=null}function Xe(U){let X=U.kind==="drill"?["drill"]:U.kind==="face"?["surfacing","flat"]:U.kind==="finish3d"?["ball","flat"]:U.kind==="chamfer"?["vbit","chamfer"]:U.kind==="thread"?["threadmill"]:["flat"],rt=s.tools.filter(ut=>X.includes(ut.kind)&&(U.angle==null||Math.abs(ut.angle/2-U.angle)<=1.5)).sort((ut,et)=>et.diameter-ut.diameter);return rt.some(ut=>ut.id===U.tool.id)?rt:[U.tool,...rt]}function Q(){let U=s.result,X=U?.plan,rt=X?ua(X):[],ut=X?X.ops.filter(et=>et.enabled).reduce((et,mt,kt,ee)=>et+(kt>0&&ee[kt-1].tool.id!==mt.tool.id?1:0),0):0;return`
      <div class="ncc-card ncc-viewcard ncc-grow">
        <div data-viewer></div>
        <div class="ncc-play" data-playbar>${R()}</div>
      </div>
      <div class="ncc-col ncc-side">
        <div class="ncc-card ncc-stats">
          <div class="ncc-stat"><b class="ncc-mono">${X?Math.max(1,Math.round(U.seconds/60)):"\u2013"}<span> min</span></b><span>Run time</span></div>
          <div class="ncc-stat"><b class="ncc-mono">${rt.length||"\u2013"}</b><span>Tools</span></div>
          <div class="ncc-stat"><b class="ncc-mono">${X?ut:"\u2013"}</b><span>Tool changes</span></div>
        </div>
        <div class="ncc-card"><div class="ncc-label">Checked</div>${we()}</div>
        ${s.slow?`<div class="ncc-hint">${$e.info}<span>${ue(s.slow)}</span></div>`:""}
        <div class="ncc-card">
          <div class="ncc-mono ncc-row-sub" style="margin: 0">${ue(je())}${U?` \xB7 ${(U.gcode.split(`
`).length-1).toLocaleString()} lines`:""}</div>
          <button class="ncc-btn muted" type="button" data-act="save" ${U?"":"disabled"}>Save to File Manager</button>
        </div>
      </div>`}let je=()=>`${(s.fileName||"drawing").replace(/\.(dxf|svg|pdf|ai)$/i,"")}.nc`;function we(){let U=s.simChecks;return U?U.items.map(X=>`<div class="ncc-check"><span class="ncc-ck ${X.state}">${X.state==="bad"?$e.cross:X.state==="info"?"!":$e.check}</span><span>${ue(X.text)}</span></div>`).join(""):`<div class="ncc-row-sub">${s.result?"Checking\u2026":"Waiting for the toolpaths\u2026"}<span class="ncc-elapsed" data-elapsed></span></div>`}let I={ops:[],moves:null,opOf:null,cum:null,total:0,t:0,i:1,playing:!1,speed:5,hm:null,stamps:[],colors:[],cursor:null,goal:null};function R(){if(!s.result)return"";let X=s.result.plan.ops.filter(et=>et.enabled&&et.track),rt=I.total||1,ut=X[Math.max(0,I.opIndexAt?.(I.t)??0)];return`<button class="ncc-playbtn" type="button" data-act="play" aria-label="${I.playing?"Pause":"Play"}">${I.playing?$e.pause:$e.play}</button>
      <div class="ncc-track">
        <div class="ncc-bar" data-scrub role="slider" aria-label="Position in the program" aria-valuemin="0" aria-valuemax="${Math.round(rt)}" aria-valuenow="${Math.round(I.t)}">
          ${X.map(et=>`<i style="width: ${(et.seconds||0)/rt*100}%; background: ${Yn[et.kind]}"></i>`).join("")}
          <b style="width: ${I.t/rt*100}%"></b><em style="left: ${I.t/rt*100}%"></em>
        </div>
        <div class="ncc-row" style="font-size: 12px; color: var(--color-text-secondary)"><span data-pb="step">${Ct(X,ut)}</span><span class="ncc-mono" data-pb="clock">${Ac(I.t)} / ${Ac(rt)}</span></div>
      </div>
      <div class="ncc-seg" style="padding: 3px" role="group" aria-label="Speed">${[[1,"Slow"],[5,"Normal"],[25,"Fast"]].map(([et,mt])=>`<button type="button" style="padding: 6px 8px" class="${I.speed===et?"sel":""}" data-speed="${et}">${mt}</button>`).join("")}</div>`}function nt(){return`<div class="ncc-overlay tr">
      <button class="ncc-chip ${o.paths?.visible!==!1&&s.showPaths?"on":""}" type="button" data-act="paths">Toolpaths</button>
      <button class="ncc-chip ${s.showPart?"on":""}" type="button" data-act="ghost">Part</button>
    </div>`}let lt=null;function dt(){if(lt===s.result){Et();return}lt=s.result,ie=null,Re=null,o.onMarker=null,o.onPick=null;let U=s.result.plan,X=U.ops.filter(yt=>yt.enabled&&yt.track),rt=Ri.cellFor(U.stock,E()?380*380:520*520);I.ops=X,I.hm=zp(new Ri(U.stock,rt)),I.colors=U.ops.map(yt=>new ae(Yn[yt.kind])),I.stamps=U.ops.map(yt=>Mu(yt.tool,rt));let ut=0;for(let yt of X)ut+=yt.track.length/4;I.moves=new Float32Array(ut*4),I.opOf=new Uint16Array(ut),I.cum=new Float64Array(ut);let et=0,mt=0,kt=null,ee=s.maxRapid||5e3;for(let yt of X){let Xt=U.ops.indexOf(yt);for(let te=0;te<yt.track.length;te+=4,et++){if(I.moves.set(yt.track.subarray(te,te+4),et*4),I.opOf[et]=Xt,kt){let Ae=Math.hypot(yt.track[te]-kt[0],yt.track[te+1]-kt[1],yt.track[te+2]-kt[2]);mt+=Ae/(yt.track[te+3]>0?yt.track[te+3]:ee)*60}kt=[yt.track[te],yt.track[te+1],yt.track[te+2]],I.cum[et]=mt}}I.total=mt,I.opIndexAt=yt=>{let Xt=Math.min(ut-1,Tt(I.cum,yt));return X.indexOf(U.ops[I.opOf[Xt]])},I.t=0,I.i=1,I.cursor=null,I.toolOp=-1,I.snaps=[],I.goal=null,I.cutT=0,o.showStock(I.hm,Sr[U.job.material]||Sr.mdf,s.part);{let yt=I.hm,Xt=[yt.x0,yt.y0,yt.bottom],te=[yt.x0+(yt.nx-1)*yt.cell,yt.y0+(yt.ny-1)*yt.cell,yt.top];for(let Ae of X){let Ke=Ae.tool.diameter/2;for(let We=0;We<Ae.track.length;We+=4)Ae.track[We+3]!==0&&(Xt[0]=Math.min(Xt[0],Ae.track[We]-Ke),te[0]=Math.max(te[0],Ae.track[We]+Ke),Xt[1]=Math.min(Xt[1],Ae.track[We+1]-Ke),te[1]=Math.max(te[1],Ae.track[We+1]+Ke))}o.frame(Xt,te)}o.showPaths(X),s.showPaths=s.showPaths??!1,Et(),At(0),I.speed=5,I.rate=Math.max(1,I.total/600/5),o.onFrame=le,bt(U),I.playing=!1,Lt()}function Et(){o.paths&&(o.paths.visible=!!s.showPaths),o.partGhost&&(o.partGhost.visible=!!s.showPart)}function Tt(U,X){let rt=0,ut=U.length;for(;rt<ut;){let et=rt+ut>>1;U[et]<X?rt=et+1:ut=et}return rt}let ft=U=>({x:I.moves[U*4],y:I.moves[U*4+1],z:I.moves[U*4+2],r:I.moves[U*4+3]===0});function vt(U,X=1/0){let rt=I.hm,ut=I.cum.length,et=1/0,mt=-1,kt=(yt,Xt,te)=>{let Ae=s.result.plan.ops[te].tool.diameter/2/rt.cell+3,Ke=Math.floor((Math.min(yt.y,Xt.y)-rt.y0)/rt.cell-Ae),We=Math.ceil((Math.max(yt.y,Xt.y)-rt.y0)/rt.cell+Ae);et=Math.min(et,Math.max(0,Ke)),mt=Math.max(mt,Math.min(rt.ny-1,We))},ee=0;for(;I.i<ut&&I.cum[I.i]<=U;){if((++ee&31)===0&&performance.now()>X)return I.cutT=I.cum[I.i-1],[et,mt,!1];!I.cursor&&(I.opOf[I.i]!==I.opOf[I.i-1]||Math.floor(I.cum[I.i]/I.total*10)>Math.floor(I.cum[I.i-1]/I.total*10))&&Rt();let yt=I.cursor||ft(I.i-1),Xt=ft(I.i),te=I.opOf[I.i];Xt.r||(Su(rt,s.result.plan.ops[te].tool,yt,Xt,te),kt(yt,Xt,te)),I.cursor=null,I.i++}if(I.i<ut&&U>I.cum[I.i-1]){let yt=I.cursor||ft(I.i-1),Xt=ft(I.i),te=I.opOf[I.i],Ae=I.cum[I.i-1],Ke=(U-Ae)/(I.cum[I.i]-Ae||1),We=ft(I.i-1),oi={x:We.x+(Xt.x-We.x)*Ke,y:We.y+(Xt.y-We.y)*Ke,z:We.z+(Xt.z-We.z)*Ke};Xt.r||(Su(rt,s.result.plan.ops[te].tool,yt,oi,te),kt(yt,oi,te)),I.cursor=oi}return I.cutT=U,[et,mt,!0]}function At(U){let X=I.cum.length;if(!X)return;let rt=Math.min(X-1,Tt(I.cum,U)),ut=I.opOf[rt];if(ut!==I.toolOp){let yt=s.result.plan.ops[ut];o.setTool(yt.tool,yt.zTop-yt.zBottom),I.toolOp=ut}let et=ft(Math.max(0,rt-1)),mt=ft(rt),kt=rt>0?I.cum[rt-1]:0,ee=rt>0?Math.max(0,Math.min(1,(U-kt)/(I.cum[rt]-kt||1))):1;o.moveTool(et.x+(mt.x-et.x)*ee,et.y+(mt.y-et.y)*ee,et.z+(mt.z-et.z)*ee)}let Gt=0,Nt=0,Pt=0,Ht=[1/0,-1],Qt={drag:12,catchUp:250};function le(U){let X=Gt?Math.min(.1,(U-Gt)/1e3):0;if(Gt=U,!I.cum||(I.playing&&(I.t=Math.min(I.total,I.t+X*I.speed*I.rate),I.goal=I.t),I.goal==null))return;let[rt,ut,et]=vt(I.goal,performance.now()+(I.dragging||I.playing?Qt.drag:Qt.catchUp));Ht[0]=Math.min(Ht[0],rt),Ht[1]=Math.max(Ht[1],ut),(et||I.playing||U-Pt>250)&&(o.refreshStock(Ht[0],Ht[1],I.colors),Ht[0]=1/0,Ht[1]=-1,Pt=U),et&&(I.goal=null),I.playing&&(At(I.t),I.t>=I.total?(I.playing=!1,Lt()):U-Nt>200&&(Nt=U,Lt()))}let K=["h","op","sx","sy","wx","wy","gap","deep"];function Rt(){I.snaps.some(U=>U.i===I.i)||I.snaps.push({i:I.i,data:K.map(U=>I.hm[U].slice())})}function gt(U){if(U=Math.max(0,Math.min(I.total,U)),U<(I.cutT??0)){let X=I.snaps.filter(rt=>I.cum[rt.i-1]<=U).sort((rt,ut)=>ut.i-rt.i)[0];X?(K.forEach((rt,ut)=>I.hm[rt].set(X.data[ut])),I.i=X.i):(I.hm.h.fill(I.hm.top),I.hm.op.fill(0),I.hm.sx.fill(0),I.hm.sy.fill(0),I.hm.wx.fill(0),I.hm.wy.fill(0),I.hm.gap.fill(1/0),I.hm.deep.fill(-1/0),I.i=1),I.cursor=null,I.cutT=I.i>1?I.cum[I.i-1]:0,o.refreshStock(0,I.hm.ny-1,I.colors)}I.goal=U,I.t=U,At(U),Lt()}let Ct=(U,X)=>X?`Step ${U.indexOf(X)+1} of ${U.length} \xB7 ${ue(X.label)} \xB7 T${cs(X.tool,s.numbering)}`:"";function Lt(){let U=n.querySelector("[data-playbar]");if(!U)return;if(U._result!==s.result||U._total!==I.total||!U.querySelector("[data-scrub]")){U.innerHTML=R(),U._result=s.result,U._total=I.total;return}let X=s.result.plan.ops.filter(Xt=>Xt.enabled&&Xt.track),rt=I.total||1,ut=`${I.t/rt*100}%`,et=X[Math.max(0,I.opIndexAt?.(I.t)??0)],mt=U.querySelector("[data-scrub]");mt.querySelector("b").style.width=ut,mt.querySelector("em").style.left=ut,mt.setAttribute("aria-valuenow",String(Math.round(I.t)));let kt=(Xt,te)=>{Xt&&Xt.innerHTML!==te&&(Xt.innerHTML=te)};kt(U.querySelector('[data-pb="step"]'),Ct(X,et)),kt(U.querySelector('[data-pb="clock"]'),`${Ac(I.t)} / ${Ac(rt)}`);let ee=U.querySelector('[data-act="play"]'),yt=I.playing?"Pause":"Play";ee.getAttribute("aria-label")!==yt&&(ee.setAttribute("aria-label",yt),ee.innerHTML=I.playing?$e.pause:$e.play);for(let Xt of U.querySelectorAll("[data-speed]"))Xt.classList.toggle("sel",+Xt.dataset.speed===I.speed)}function bt(U){setTimeout(()=>{if(s.result?.plan!==U)return;let X=s.result?.collisions||[],rt=[];if(rt.push(X.length?{state:"bad",text:`${X.length} fast move${X.length>1?"s go":" goes"} into the material (${[...new Set(X.map(mt=>U.ops.find(kt=>kt.id===mt.op)?.label))].join(", ")}).`}:{state:"ok",text:"No fast moves through the material"}),s.travel){let mt=U.stock.width<=s.travel.x&&U.stock.depth<=s.travel.y;rt.push(mt?{state:"ok",text:"The stock fits inside your machine\u2019s travel"}:{state:"bad",text:`The stock is bigger than your machine\u2019s travel (${a(s.travel.x)} \xD7 ${u(s.travel.y)}).`})}let ut=ua(U);rt.push(ut.every(mt=>mt.fluteLength)?{state:"ok",text:"Every tool is long enough for its depth"}:{state:"info",text:"Some tools have no cutting length in the Tool Library, so their depth isn\u2019t checked."}),U.ops.find(mt=>mt.kind==="cutout"&&mt.enabled)&&rt.push({state:"ok",text:`The cut-out goes ${u(U.job.throughDepth,s.units==="in"?3:1)} into the spoilboard${U.job.tabs.enabled?`, with ${U.job.tabs.count} tabs`:""}`}),U.warnings.some(mt=>mt.kind==="undercut")&&rt.push({state:"info",text:"Some features are on the other side. Cut this side, then turn the part over and make a program for that side. Pins (the Spoilboard Toolbox plugin can set them up) put it back in the same place."}),s.simChecks={ok:!rt.some(mt=>mt.state==="bad"),items:rt},V()},50)}let Zt=U=>{if(!(U<1||U>4||U>s.maxStep+1)){if(U===4&&s.step!==4){I.playing=!1,s.step=4,s.maxStep=4,V(),g(!0);return}s.step=U,s.maxStep=Math.max(s.maxStep,U),U!==4&&(I.playing=!1),V()}},Ot=()=>{s.maxStep=Math.min(s.maxStep,Math.max(s.step,3)),s.result=null,g(!1)};n.addEventListener("click",U=>{let X=U.target.closest("[data-shape]");if(X||U.target.closest("[data-drawing]")){let mt=X?+X.dataset.shape:null;return mt===null?s.sel=new Set:U.shiftKey||U.metaKey||U.ctrlKey?s.sel.has(mt)?s.sel.delete(mt):s.sel.add(mt):s.sel=s.sel.size===1&&s.sel.has(mt)?new Set:new Set([mt]),V()}let rt=U.target.closest("[data-focus]");if(rt&&!U.target.closest("button, select")){s.focusOp=s.focusOp===rt.dataset.focus?null:rt.dataset.focus,V();return}let ut=U.target.closest("button, [data-scrub]");if(!ut||ut.disabled)return;let et=ut.dataset;if(et.go)return Zt(+et.go);if(et.material)return s.job.material=et.material,Object.assign(s.job.tabs,Fi(et.material)),Ot();if(et.tabsize){let mt=fe(),kt=_e();return s.job.tabs[et.tabsize]=Math.max(kt.min,Math.min(kt.max,Math.round((mt[et.tabsize]+ +et.by*kt.step)/kt.grid)*kt.grid)),Ot()}if(et.zero)return s.job.zero.xy=et.zero,Ot();if(et.z)return s.job.zero.z=et.z,Ot();if(et.finish)return s.job.finish=et.finish,Ot();if(et.tabs)return s.job.tabs.count=Math.max(1,Math.min(12,s.job.tabs.count+ +et.tabs)),Ot();if(et.toggle==="fit"){let mt=s.plan?.stock;return s.job.stock.fit=!s.job.stock.fit,!s.job.stock.fit&&mt&&Object.assign(s.job.stock,{width:mt.width,depth:mt.depth,thickness:mt.thickness}),Ot()}if(et.scale==="reset")return M(1);if(et.scale==="inch")return M(Mn.INCH);if(et.act==="unselect")return s.sel=new Set,V();if(et.act==="sel-reset"){for(let mt of s.sel)delete s.job.shapes[mt];return Ot()}if(et.toggle==="tabs")return s.job.tabs.enabled=!s.job.tabs.enabled,Ot();if(et.op)return s.job.disabled[et.op]=!s.job.disabled[et.op],Ot();if(et.speed)return I.speed=+et.speed,Lt();if(et.act==="play")return I.t>=I.total&&gt(0),I.playing=!I.playing,Gt=0,Lt();if(et.act==="paths"){s.showPaths=!s.showPaths,Et(),ut.classList.toggle("on",s.showPaths);return}if(et.act==="ghost"){s.showPart=!s.showPart,Et(),ut.classList.toggle("on",s.showPart);return}if(et.act==="close")return Es();if(et.recentOpen)return N(et.recentOpen);if(et.forget)return Cu(et.forget,s.recent).then(mt=>{s.recent=mt,V()});if(et.act==="load")return Se(ut);if(et.act==="save")return bn(ut)}),n.addEventListener("pointerdown",U=>{if(!U.target.closest("[data-scrub]")||!I.cum)return;let rt=I.playing;I.playing=!1,I.dragging=!0;let ut=ee=>{let yt=n.querySelector("[data-scrub]").getBoundingClientRect();yt.width>0&&gt((ee-yt.left)/yt.width*I.total)};ut(U.clientX);let et=null,mt=ee=>{et===null&&requestAnimationFrame(()=>{let yt=et;et=null,ut(yt)}),et=ee.clientX},kt=()=>{I.dragging=!1,window.removeEventListener("pointermove",mt),window.removeEventListener("pointerup",kt),I.playing=rt&&I.t<I.total,Gt=0,Lt()};window.addEventListener("pointermove",mt),window.addEventListener("pointerup",kt)}),n.addEventListener("change",U=>{let X=U.target;if(X.matches("[data-file]"))return m(X.files[0]);if(X.matches("[data-recent]"))return X.value&&N(X.value);if(X.dataset.tool)return s.job.toolOverride[X.dataset.tool]=+X.value||X.value,Ot();if(X.dataset.size){let ut=+X.dataset.size,et=parseFloat(String(X.value).replace(",","."));if(!(Number.isFinite(et)&&et>0&&s.a?.size[ut]>0))return V();let mt=Mn.toMm(et,s.units)/s.a.size[ut];return Math.abs(mt-1)<1e-9?V():M(s.scale*mt)}if(X.matches("[data-thick]")){let ut=parseFloat(String(X.value).replace(",","."));return Number.isFinite(ut)&&ut>0&&(s.job.stock.thickness=Mn.toMm(ut,s.units)),Ot()}let rt=X.dataset.cut??X.dataset.through??X.dataset.depth;if(rt!==void 0){let ut=rt==="sel"?[...s.sel].map(et=>s.job.shapes[et]||={}):[s.job.groups[rt]||={}];if(rt==="sel"){let et=Rs(s.groups);[...s.sel].forEach((mt,kt)=>{let ee=Ui(s.a,{...s.job,shapes:{}},mt,et);ut[kt].cut===void 0&&Object.assign(ut[kt],{cut:ee.cut,depth:ee.depth})})}else{let et=s.groups.find(kt=>kt.key===rt),mt=Ui(s.a,{...s.job,groups:{},shapes:{}},et.idx[0],null);ut[0].cut===void 0&&Object.assign(ut[0],{cut:mt.cut,depth:mt.depth})}for(let et of ut)if(X.dataset.cut!==void 0)et.cut=X.value,et.depth=X.value==="pocket"||X.value==="online"?et.depth??s.job.depths[X.value]:X.value==="off"?et.depth:null;else if(X.dataset.through!==void 0)et.depth=X.checked?null:Math.max(.1,Math.min(s.job.depths[et.cut]||s.job.depths.pocket,(s.job.stock.thickness||6)-.5));else{let mt=parseFloat(String(X.value).replace(",","."));Number.isFinite(mt)&&mt>0&&(et.depth=Mn.toMm(mt,s.units))}return Ot()}if(X.dataset.stock){let ut=parseFloat(String(X.value).replace(",","."));return Number.isFinite(ut)&&ut>0&&(s.job.stock[X.dataset.stock]=Mn.toMm(ut,s.units)),Ot()}}),n.addEventListener("dragover",U=>{let X=U.target.closest("[data-drop]");X&&(U.preventDefault(),X.classList.add("over"))}),n.addEventListener("dragleave",U=>{let X=U.target.closest("[data-drop]");X&&X.classList.remove("over")}),n.addEventListener("drop",U=>{U.target.closest("[data-drop]")&&(U.preventDefault(),m(U.dataTransfer.files[0]))});function Te(U){s.toast=U,V(),setTimeout(()=>{s.toast===U&&(s.toast="",V())},2600)}async function Se(U){U.disabled=!0;try{let X=await i.post("/api/gcode-files/load-temp",{filename:je(),content:s.result.gcode});if(!X.ok)throw new Error(`ncSender said ${X.status}`);Es()}catch(X){U.disabled=!1,Te(`Couldn\u2019t load the program: ${X.message}`)}}async function bn(U){U.disabled=!0;try{let X=await An(je()),rt=await i.post("/api/gcode-files/file/save",{path:X,content:s.result.gcode});if(!rt.ok)throw new Error(`save failed (${rt.status})`);Te(`Saved to File Manager: ${X}`)}catch(X){Te(`Couldn\u2019t save: ${X.message}`)}U.disabled=!1}async function An(U){let X=U.replace(/\.nc$/,""),rt=new Set,ut=et=>{for(let mt of et||[])mt.type==="folder"?ut(mt.children):rt.add(mt.path)};ut((await i.get("/api/gcode-files"))?.tree);for(let et=1;et<1e3;et++){let mt=`ncCut2D/${et<2?U:`${X} (${et}).nc`}`;if(!rt.has(mt))return mt}throw new Error("too many saved copies")}function Es(){I.playing=!1,window.postMessage({type:"close-plugin-dialog"},"*")}V(),window.__nccut2d={S:s,PLAY:I,viewer:o,seek:U=>gt(U)}}var Yb,ue,Ac,tn,$e,lm=pe(()=>{Wo();bc();Jp();Qp();im();om();Yb=["Drawing","Stock & Zero","Operations","Preview & Load"],ue=n=>String(n??"").replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t]),Ac=n=>{let t=Math.max(0,Math.round(n));return`${Math.floor(t/60)}:${String(t%60).padStart(2,"0")}`},tn=(n,t=18,e="")=>`<svg width="${t}" height="${t}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" ${e}>${n}</svg>`,$e={close:tn('<path d="M6 6l12 12M18 6L6 18"/>'),next:tn('<path d="M9 6l6 6-6 6"/>',16,'stroke-width="2.4"'),part:tn('<path d="M12 2l9 5v10l-9 5-9-5V7z"/><path d="M12 22V12M21 7l-9 5-9-5"/>',20),upload:tn('<path d="M12 16V4M7 9l5-5 5 5M4 20h16"/>',28),info:tn('<circle cx="12" cy="12" r="9"/><path d="M12 8h.01M11 12h1v5h1"/>'),warn:tn('<path d="M12 3l10 18H2z"/><path d="M12 10v4M12 17h.01"/>'),check:tn('<path d="M5 12l5 5 9-10"/>',12,'stroke-width="3.2"'),cross:tn('<path d="M6 6l12 12M18 6L6 18"/>',12,'stroke-width="3.2"'),play:'<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M7 4l13 8-13 8z"/></svg>',pause:'<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><rect x="6" y="5" width="4" height="14" rx="1"/><rect x="14" y="5" width="4" height="14" rx="1"/></svg>',load:tn('<path d="M12 4v11M7 10l5 5 5-5M5 20h14"/>',16,'stroke-width="2.4"'),face:tn('<path d="M3 9h18M3 15h18"/>'),pocket:tn('<rect x="4" y="6" width="16" height="12" rx="2"/>'),corners:tn('<path d="M4 10V6a2 2 0 012-2h4M20 14v4a2 2 0 01-2 2h-4"/>'),hole:tn('<circle cx="8" cy="12" r="3"/><circle cx="16" cy="12" r="3"/>'),drill:tn('<path d="M12 3v14M8 13l4 8 4-8"/>'),step:tn('<path d="M3 18h6v-6h6V6h6"/>'),cutout:tn('<rect x="3" y="5" width="18" height="14" rx="2" stroke-dasharray="3 2.5"/>'),rough3d:tn('<path d="M3 19h4v-4h3v-4h4v4h3v4h4"/>'),finish3d:tn('<path d="M3 18c3 0 4-9 9-9s6 9 9 9"/>'),thread:tn('<path d="M8 4h8M8 8l8-2M8 12l8-2M8 16l8-2M8 20h8M8 4v16M16 4v16"/>'),chamfer:tn('<path d="M4 20V9l5-5h11v16z"/><path d="M9 4v5H4" stroke-dasharray="2 2"/>'),rest3d:tn('<path d="M3 19h4v-4h3v-4h4v4h3v4h4"/><circle cx="12" cy="17" r="1.5"/>')}});bc();function wu(){let n=null,t={async init(){return!0},async load({shapes:e}){return n=ca(e),{size:n.size,count:n.shapes.length}},async plan({tools:e,job:i,limits:s,paths:o,gcodeOptions:c,timing:a}){if(!n)throw new Error("No drawing open.");let u=Af(n,e,i,s),f=_u(u);o&&Op(u);let p=o?Bp(u,a):0,x=o?Up(u,c):"",m=o?Vp(u,Ri.cellFor(u.stock,300*300)).collisions.map(_=>({op:_.op,at:_.at})):[];for(let _ of u.ops){if(!_.moves)continue;let v=new Float32Array(_.moves.length*4);_.moves.forEach((M,g)=>{v[g*4]=M.x,v[g*4+1]=M.y,v[g*4+2]=M.z,v[g*4+3]=M.r?0:M.f}),_.track=v,delete _.moves}return{plan:u,gcode:x,seconds:p,collisions:m,part:f}}};return async function(i){let s=t[i.type];if(!s)throw new Error(`unknown request ${i.type}`);return s(i)}}var cm="0.0.1-mw1meeem";if(typeof document>"u"){let n=wu();self.onmessage=async({data:t})=>{try{let e=await n(t),i=e?.part?[e.part.positions.buffer,e.part.indices.buffer]:[];self.postMessage({id:t.id,ok:!0,result:e},i)}catch(e){self.postMessage({id:t.id,ok:!1,error:e.message||String(e)})}}}else{let n=window.NcCut2D=window.NcCut2D||{};n.build!==cm&&n.engine&&(n.engine.then(i=>i.worker?.terminate(),()=>{}),n.engine=null),n.build=cm,n.mount=async(i,s)=>{let{mountApp:o}=await Promise.resolve().then(()=>(lm(),am));try{o(i,s,await t(s))}catch(c){i.textContent=`ncCut2D could not start: ${c.message||c}`}};let t=i=>n.engine||=e(i);async function e(i){let s=null;try{s=new Worker(URL.createObjectURL(new Blob([n.source||""],{type:"text/javascript"})))}catch{s=null}if(s){let c=0,a=new Map;s.onmessage=({data:p})=>{let x=a.get(p.id);x&&(a.delete(p.id),p.ok?x.resolve(p.result):x.reject(new Error(p.error)))};let u=(p,x={},m=[])=>new Promise((_,v)=>{let M=++c;a.set(M,{resolve:_,reject:v}),s.postMessage({...x,id:M,type:p},m)});if(await Promise.race([u("init").then(()=>!0),new Promise(p=>setTimeout(()=>p(!1),5e3))]))return u.worker=s,u;s.terminate()}let o=wu();return await o({type:"init"}),(c,a={})=>o({...a,type:c})}}})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/

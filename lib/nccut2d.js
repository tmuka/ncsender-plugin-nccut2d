(()=>{var um=Object.create;var Cc=Object.defineProperty;var fm=Object.getOwnPropertyDescriptor;var dm=Object.getOwnPropertyNames;var pm=Object.getPrototypeOf,mm=Object.prototype.hasOwnProperty;var fe=(n,t,e)=>()=>{if(e)throw e[0];try{return n&&(t=n(n=0)),t}catch(i){throw e=[i],i}};var Iu=(n,t)=>()=>{try{return t||n((t={exports:{}}).exports,t),t.exports}catch(e){throw t=0,e}},Ru=(n,t)=>{for(var e in t)Cc(n,e,{get:t[e],enumerable:!0})},gm=(n,t,e,i)=>{if(t&&typeof t=="object"||typeof t=="function")for(let s of dm(t))!mm.call(n,s)&&s!==e&&Cc(n,s,{get:()=>t[s],enumerable:!(i=fm(t,s))||i.enumerable});return n};var Lu=(n,t,e)=>(e=n!=null?um(pm(n)):{},gm(t||!n||!n.__esModule?Cc(e,"default",{value:n,enumerable:!0}):e,n));function Zo(n,t,e=.01){if(!(n>e))return 1;let i=2*Math.acos(Math.max(-1,Math.min(1,1-e/n)));return Math.max(2,Math.min(2e3,Math.ceil(Math.abs(t)/i)))}function Cs(n,t,e,i,s,o=!0){let c=s-i;o&&c<=0&&(c+=Math.PI*2),!o&&c>=0&&(c-=Math.PI*2);let a=Zo(e,c);return Array.from({length:a+1},(u,f)=>{let p=i+c*f/a;return[n+e*Math.cos(p),t+e*Math.sin(p)]})}function jo(n,t,e,i,s,o=0,c=Math.PI*2){let a=Math.hypot(e,i),u=Math.atan2(i,e),f=a*s,p=c-o;p<=0&&(p+=Math.PI*2);let g=Zo(a,p),m=Math.cos(u),x=Math.sin(u);return Array.from({length:g+1},(v,M)=>{let y=o+p*M/g,_=a*Math.cos(y),T=f*Math.sin(y);return[n+_*m-T*x,t+_*x+T*m]})}function Ri(n,t,e,i,s=[n],o=.01,c=0){let a=Nu(t,n,i),u=Nu(e,n,i);if(c>16||Math.max(a,u)<=o)return s.push(i),s;let f=(y,_)=>[(y[0]+_[0])/2,(y[1]+_[1])/2],p=f(n,t),g=f(t,e),m=f(e,i),x=f(p,g),v=f(g,m),M=f(x,v);return Ri(n,p,x,M,s,o,c+1),Ri(M,v,m,i,s,o,c+1),s}function Nu(n,t,e){let i=e[0]-t[0],s=e[1]-t[1],o=Math.hypot(i,s);return o<1e-12?xi(n,t):Math.abs((n[0]-t[0])*s-(n[1]-t[1])*i)/o}function Du(n,t,e,i,s,o,c){if(!t||!e||n[0]===c[0]&&n[1]===c[1])return[n,c];t=Math.abs(t),e=Math.abs(e);let a=i*Math.PI/180,u=Math.cos(a),f=Math.sin(a),p=(n[0]-c[0])/2,g=(n[1]-c[1])/2,m=u*p+f*g,x=-f*p+u*g,v=m*m/(t*t)+x*x/(e*e);v>1&&(t*=Math.sqrt(v),e*=Math.sqrt(v));let M=t*t*e*e-t*t*x*x-e*e*m*m,y=Math.sqrt(Math.max(0,M/(t*t*x*x+e*e*m*m)));!!s==!!o&&(y=-y);let _=y*t*x/e,T=-y*e*m/t,C=u*_-f*T+(n[0]+c[0])/2,S=f*_+u*T+(n[1]+c[1])/2,L=(N,U,V,k)=>Math.atan2(N*k-U*V,N*V+U*k),E=L(1,0,(m-_)/t,(x-T)/e),A=L((m-_)/t,(x-T)/e,(-m-_)/t,(-x-T)/e);!o&&A>0&&(A-=Math.PI*2),o&&A<0&&(A+=Math.PI*2);let w=Zo(Math.max(t,e),A),D=[];for(let N=0;N<=w;N++){let U=E+A*N/w,V=t*Math.cos(U),k=e*Math.sin(U);D.push([u*V-f*k+C,f*V+u*k+S])}return D[0]=n,D[w]=c,D}function Rc(n){let t=1/0,e=1/0,i=-1/0,s=-1/0;for(let o of n)for(let[c,a]of o.pts)c<t&&(t=c),a<e&&(e=a),c>i&&(i=c),a>s&&(s=a);return Number.isFinite(t)?{x0:t,y0:e,x1:i,y1:s,w:i-t,h:s-e}:{x0:0,y0:0,x1:0,y1:0,w:0,h:0}}function ss(n,t,e=1e-6){let i=[];for(let s of n)(!i.length||xi(i[i.length-1],s)>e)&&i.push(s);return t&&i.length>2&&xi(i[0],i[i.length-1])>e&&i.push(i[0].slice()),i}function Uu(n,t=.05){let e=[],i=[];for(let a of n){if(a.closed||a.pts.length<2){e.push(a);continue}if(xi(a.pts[0],a.pts[a.pts.length-1])<=t&&a.pts.length>2){e.push({...a,closed:!0,pts:ss(a.pts.slice(0,-1).concat([a.pts[0]]),!0)});continue}i.push({...a,pts:a.pts.slice()})}let s=0,o=new Map;for(let a of i){let u=a.color+"|"+(a.layer||"");o.has(u)||o.set(u,[]),o.get(u).push(a)}let c=[];for(let a of o.values()){let u=new Array(a.length).fill(!1);for(let f=0;f<a.length;f++){if(u[f])continue;u[f]=!0;let p=a[f],g=!0;for(;g;){g=!1;let m=p.pts[0],x=p.pts[p.pts.length-1];for(let v=0;v<a.length;v++){if(u[v])continue;let M=a[v].pts,y=M[0],_=M[M.length-1];if(xi(x,y)<=t)p.pts.push(...M.slice(1));else if(xi(x,_)<=t)p.pts.push(...M.slice(0,-1).reverse());else if(xi(m,_)<=t)p.pts.unshift(...M.slice(0,-1));else if(xi(m,y)<=t)p.pts.unshift(...M.slice(1).reverse());else continue;u[v]=!0,s++,g=!0;break}}p.pts.length>2&&xi(p.pts[0],p.pts[p.pts.length-1])<=t&&(p.pts[p.pts.length-1]=p.pts[0].slice(),p.closed=!0),c.push(p)}}return{shapes:e.concat(c),joined:s}}var xi,Jo,Ic,Ou,Li,wr,Fu,Er=fe(()=>{xi=(n,t)=>Math.hypot(t[0]-n[0],t[1]-n[1]);Jo=(n,t,e)=>{let i=Cs(n,t,e,0,Math.PI*2,!0);return i[i.length-1]=i[0].slice(),i};Ic=(n,t,e,i)=>Ri(n,[n[0]+2/3*(t[0]-n[0]),n[1]+2/3*(t[1]-n[1])],[e[0]+2/3*(t[0]-e[0]),e[1]+2/3*(t[1]-e[1])],e,i);Ou=[1,0,0,1,0,0],Li=(n,t)=>[n[0]*t[0]+n[2]*t[1],n[1]*t[0]+n[3]*t[1],n[0]*t[2]+n[2]*t[3],n[1]*t[2]+n[3]*t[3],n[0]*t[4]+n[2]*t[5]+n[4],n[1]*t[4]+n[3]*t[5]+n[5]],wr=(n,t)=>[n[0]*t[0]+n[2]*t[1]+n[4],n[1]*t[0]+n[3]*t[1]+n[5]];Fu=(n,t)=>n.map(e=>({...e,pts:e.pts.map(i=>wr(t,i))}))});function Lc(n){let t=[];for(let x of String(n||"").matchAll(xm))t.push(x[1]||+x[2]);let e=[],i=0,s="",o=[0,0],c=[0,0],a=null,u=null,f="",p=()=>{let x=t[i++];if(typeof x!="number")throw new Error("bad path data");return x},g=()=>{let x=t[i];if(typeof x=="number"&&(x===0||x===1))return i++,x;if(typeof x=="number"){let v=String(x);return t.splice(i,1,+v[0],+v.slice(1)),i++,+v[0]}throw new Error("bad arc flag")},m=x=>{a&&a.length>1&&e.push({pts:a,closed:!1}),a=[x],c=x};for(;i<t.length;){if(typeof t[i]=="string")s=t[i++];else if(!s)throw new Error("path must start with M");let x=s===s.toLowerCase(),v=s.toUpperCase(),M=(y,_)=>x?[o[0]+y,o[1]+_]:[y,_];switch(v){case"M":{let y=M(p(),p());m(y),o=y,s=x?"l":"L",u=null;break}case"L":{let y=M(p(),p());a.push(y),o=y,u=null;break}case"H":{let y=p(),_=[x?o[0]+y:y,o[1]];a.push(_),o=_,u=null;break}case"V":{let y=p(),_=[o[0],x?o[1]+y:y];a.push(_),o=_,u=null;break}case"C":{let y=M(p(),p()),_=M(p(),p()),T=M(p(),p());Ri(o,y,_,T,a),u=_,o=T;break}case"S":{let y=u&&"CS".includes(f)?[2*o[0]-u[0],2*o[1]-u[1]]:o,_=M(p(),p()),T=M(p(),p());Ri(o,y,_,T,a),u=_,o=T;break}case"Q":{let y=M(p(),p()),_=M(p(),p());Ic(o,y,_,a),u=y,o=_;break}case"T":{let y=u&&"QT".includes(f)?[2*o[0]-u[0],2*o[1]-u[1]]:o,_=M(p(),p());Ic(o,y,_,a),u=y,o=_;break}case"A":{let y=p(),_=p(),T=p(),C=g(),S=g(),L=M(p(),p());a.push(...Du(o,y,_,T,C,S,L).slice(1)),o=L,u=null;break}case"Z":{a&&a.length>1&&(a.push(c.slice()),e.push({pts:a,closed:!0})),a=[c],o=c,u=null;break}default:throw new Error(`unknown path command ${s}`)}f=v,v==="Z"&&(s="")}return a&&a.length>1&&e.push({pts:a,closed:!1}),e}var xm,Bu=fe(()=>{Er();xm=/([MmLlHhVvCcSsQqTtAaZz])|(-?(?:\d+\.?\d*|\.\d+)(?:[eE][-+]?\d+)?)/g});function ku(n,t){return n<=9?t:n>=10&&n<=59?parseFloat(t):n>=60&&n<=99?parseInt(t):n>=100&&n<=109?t:n>=110&&n<=149?parseFloat(t):n>=160&&n<=179?parseInt(t):n>=210&&n<=239?parseFloat(t):n>=270&&n<=289?parseInt(t):n>=290&&n<=299?ym(t):n>=300&&n<=369?t:n>=370&&n<=389?parseInt(t):n>=390&&n<=399?t:n>=400&&n<=409?parseInt(t):n>=410&&n<=419?t:n>=420&&n<=429?parseInt(t):n>=430&&n<=439?t:n>=440&&n<=459?parseInt(t):n>=460&&n<=469?parseFloat(t):n>=470&&n<=481||n===999||n>=1e3&&n<=1009?t:n>=1010&&n<=1059?parseFloat(t):n>=1060&&n<=1071?parseInt(t):(console.log("WARNING: Group code does not have a defined type: %j",{code:n,value:t}),t)}function ym(n){if(n==="0")return!1;if(n==="1")return!0;throw TypeError("String '"+n+"' cannot be cast to Boolean type")}var Tr,zu=fe(()=>{Tr=class{constructor(t){this._pointer=0,this._eof=!1,this._data=t}next(){if(!this.hasNext())throw this._eof?new Error("Cannot call 'next' after EOF group has been read"):new Error("Unexpected end of input: EOF group not read before end of file. Ended on code "+this._data[this._pointer]);let t={code:parseInt(this._data[this._pointer])};return this._pointer++,t.value=ku(t.code,this._data[this._pointer].trim()),this._pointer++,t.code===0&&t.value==="EOF"&&(this._eof=!0),this.lastReadGroup=t,t}peek(){if(!this.hasNext())throw this._eof?new Error("Cannot call 'next' after EOF group has been read"):new Error("Unexpected end of input: EOF group not read before end of file. Ended on code "+this._data[this._pointer]);let t={code:parseInt(this._data[this._pointer])};return t.value=ku(t.code,this._data[this._pointer+1].trim()),t}rewind(t=1){this._pointer=this._pointer-t*2}hasNext(){return!(this._eof||this._pointer>this._data.length-2)}isEOF(){return this._eof}}});var Ko,Nc=fe(()=>{Ko=[0,16711680,16776960,65280,65535,255,16711935,16777215,8421504,12632256,16711680,16744319,13369344,13395558,10027008,10046540,8323072,8339263,4980736,4990502,16727808,16752511,13382400,13401958,10036736,10051404,8331008,8343359,4985600,4992806,16744192,16760703,13395456,13408614,10046464,10056268,8339200,8347455,4990464,4995366,16760576,16768895,13408512,13415014,10056192,10061132,8347392,8351551,4995328,4997670,16776960,16777087,13421568,13421670,10000384,10000460,8355584,8355647,5000192,5000230,12582656,14679935,10079232,11717734,7510016,8755276,6258432,7307071,3755008,4344870,8388352,12582783,6736896,10079334,5019648,7510092,4161280,6258495,2509824,3755046,4194048,10485631,3394560,8375398,2529280,6264908,2064128,5209919,1264640,3099686,65280,8388479,52224,6736998,38912,5019724,32512,4161343,19456,2509862,65343,8388511,52275,6737023,38950,5019743,32543,4161359,19475,2509871,65407,8388543,52326,6737049,38988,5019762,32575,4161375,19494,2509881,65471,8388575,52377,6737074,39026,5019781,32607,4161391,19513,2509890,65535,8388607,52428,6737100,39064,5019800,32639,4161407,19532,2509900,49151,8380415,39372,6730444,29336,5014936,24447,4157311,14668,2507340,32767,8372223,26316,6724044,19608,5010072,16255,4153215,9804,2505036,16383,8364031,13260,6717388,9880,5005208,8063,4149119,4940,2502476,255,8355839,204,6710988,152,5000344,127,4145023,76,2500172,4129023,10452991,3342540,8349388,2490520,6245528,2031743,5193599,1245260,3089996,8323327,12550143,6684876,10053324,4980888,7490712,4128895,6242175,2490444,3745356,12517631,14647295,10027212,11691724,7471256,8735896,6226047,7290751,3735628,4335180,16711935,16744447,13369548,13395660,9961624,9981080,8323199,8339327,4980812,4990540,16711871,16744415,13369497,13395634,9961586,9981061,8323167,8339311,4980793,4990530,16711807,16744383,13369446,13395609,9961548,9981042,8323135,8339295,4980774,4990521,16711743,16744351,13369395,13395583,9961510,9981023,8323103,8339279,4980755,4990511,3355443,5987163,8684676,11382189,14079702,16777215]});function _m(n){return Ko[n]}function ie(n){let t={};n.rewind();let e=n.next(),i=e.code;if(t.x=e.value,i+=10,e=n.next(),e.code!=i)throw new Error("Expected code for point value to be "+i+" but got "+e.code+".");return t.y=e.value,i+=10,e=n.next(),e.code!=i?(n.rewind(),t):(t.z=e.value,t)}function Ee(n,t,e){switch(t.code){case 0:n.type=t.value;break;case 5:n.handle=t.value;break;case 6:n.lineType=t.value;break;case 8:n.layer=t.value;break;case 48:n.lineTypeScale=t.value;break;case 60:n.visible=t.value===0;break;case 62:n.colorIndex=t.value,n.color=_m(Math.abs(t.value));break;case 67:n.inPaperSpace=t.value!==0;break;case 100:break;case 101:for(;t.code!=0;)t=e.next();e.rewind();break;case 330:n.ownerHandle=t.value;break;case 347:n.materialObjectHandle=t.value;break;case 370:n.lineweight=t.value;break;case 420:n.color=t.value;break;case 1e3:n.extendedData=n.extendedData||{},n.extendedData.customStrings=n.extendedData.customStrings||[],n.extendedData.customStrings.push(t.value);break;case 1001:n.extendedData=n.extendedData||{},n.extendedData.applicationName=t.value;break;default:return!1}return!0}var fn=fe(()=>{Nc()});function vm(n,t){var e=[],i=!1,s=!1,o=4;for(let a=0;a<=o;a++){for(var c={};!n.isEOF()&&!(t.code===0||s);){switch(t.code){case 10:case 11:case 12:case 13:if(i){s=!0;continue}c.x=t.value,i=!0;break;case 20:case 21:case 22:case 23:c.y=t.value;break;case 30:case 31:case 32:case 33:c.z=t.value;break;default:return e}t=n.next()}e.push(c),i=!1,s=!1}return n.rewind(),e}var Ar,Vu=fe(()=>{fn();Ar=class{constructor(){this.ForEntityName="3DFACE"}parseEntity(t,e){let i={type:e.value,vertices:[]};for(e=t.next();!t.isEOF()&&e.code!==0;){switch(e.code){case 70:i.shape=(e.value&1)===1,i.hasContinuousLinetypePattern=(e.value&128)===128;break;case 10:i.vertices=vm(t,e),e=t.lastReadGroup;break;default:Ee(i,e,t);break}e=t.next()}return i}}});var Pr,Hu=fe(()=>{fn();Pr=class{constructor(){this.ForEntityName="ARC"}parseEntity(t,e){let i={type:e.value};for(e=t.next();!t.isEOF()&&e.code!==0;){switch(e.code){case 10:i.center=ie(t);break;case 40:i.radius=e.value;break;case 50:i.startAngle=Math.PI/180*e.value;break;case 51:i.endAngle=Math.PI/180*e.value,i.angleLength=i.endAngle-i.startAngle;break;case 210:i.extrusionDirectionX=e.value;break;case 220:i.extrusionDirectionY=e.value;break;case 230:i.extrusionDirectionZ=e.value;break;default:Ee(i,e,t);break}e=t.next()}return i}}});var Cr,Gu=fe(()=>{fn();Cr=class{constructor(){this.ForEntityName="ATTDEF"}parseEntity(t,e){var i={type:e.value,scale:1,textStyle:"STANDARD"};for(e=t.next();!t.isEOF()&&e.code!==0;){switch(e.code){case 1:i.text=e.value;break;case 2:i.tag=e.value;break;case 3:i.prompt=e.value;break;case 7:i.textStyle=e.value;break;case 10:i.startPoint=ie(t);break;case 11:i.endPoint=ie(t);break;case 39:i.thickness=e.value;break;case 40:i.textHeight=e.value;break;case 41:i.scale=e.value;break;case 50:i.rotation=e.value;break;case 51:i.obliqueAngle=e.value;break;case 70:i.invisible=!!(e.value&1),i.constant=!!(e.value&2),i.verificationRequired=!!(e.value&4),i.preset=!!(e.value&8);break;case 71:i.backwards=!!(e.value&2),i.mirrored=!!(e.value&4);break;case 72:i.horizontalJustification=e.value;break;case 73:i.fieldLength=e.value;break;case 74:i.verticalJustification=e.value;break;case 100:break;case 210:i.extrusionDirectionX=e.value;break;case 220:i.extrusionDirectionY=e.value;break;case 230:i.extrusionDirectionZ=e.value;break;default:Ee(i,e,t);break}e=t.next()}return i}}});var Ir,Xu=fe(()=>{fn();Ir=class{constructor(){this.ForEntityName="CIRCLE"}parseEntity(t,e){let i={type:e.value};for(e=t.next();!t.isEOF()&&e.code!==0;){switch(e.code){case 10:i.center=ie(t);break;case 40:i.radius=e.value;break;case 50:i.startAngle=Math.PI/180*e.value;break;case 51:let s=Math.PI/180*e.value;s<i.startAngle?i.angleLength=s+2*Math.PI-i.startAngle:i.angleLength=s-i.startAngle,i.endAngle=s;break;default:Ee(i,e,t);break}e=t.next()}return i}}});var Rr,Wu=fe(()=>{fn();Rr=class{constructor(){this.ForEntityName="DIMENSION"}parseEntity(t,e){let i={type:e.value};for(e=t.next();!t.isEOF()&&e.code!==0;){switch(e.code){case 2:i.block=e.value;break;case 10:i.anchorPoint=ie(t);break;case 11:i.middleOfText=ie(t);break;case 12:i.insertionPoint=ie(t);break;case 13:i.linearOrAngularPoint1=ie(t);break;case 14:i.linearOrAngularPoint2=ie(t);break;case 15:i.diameterOrRadiusPoint=ie(t);break;case 16:i.arcPoint=ie(t);break;case 70:i.dimensionType=e.value;break;case 71:i.attachmentPoint=e.value;break;case 42:i.actualMeasurement=e.value;break;case 1:i.text=e.value;break;case 50:i.angle=e.value;break;default:Ee(i,e,t);break}e=t.next()}return i}}});var Lr,Yu=fe(()=>{fn();Lr=class{constructor(){this.ForEntityName="ELLIPSE"}parseEntity(t,e){let i={type:e.value};for(e=t.next();!t.isEOF()&&e.code!==0;){switch(e.code){case 10:i.center=ie(t);break;case 11:i.majorAxisEndPoint=ie(t);break;case 40:i.axisRatio=e.value;break;case 41:i.startAngle=e.value;break;case 42:i.endAngle=e.value;break;case 2:i.name=e.value;break;default:Ee(i,e,t);break}e=t.next()}return i}}});var Nr,$u=fe(()=>{fn();Nr=class{constructor(){this.ForEntityName="INSERT"}parseEntity(t,e){let i={type:e.value};for(e=t.next();!t.isEOF()&&e.code!==0;){switch(e.code){case 2:i.name=e.value;break;case 41:i.xScale=e.value;break;case 42:i.yScale=e.value;break;case 43:i.zScale=e.value;break;case 10:i.position=ie(t);break;case 50:i.rotation=e.value;break;case 70:i.columnCount=e.value;break;case 71:i.rowCount=e.value;break;case 44:i.columnSpacing=e.value;break;case 45:i.rowSpacing=e.value;break;case 210:i.extrusionDirection=ie(t);break;default:Ee(i,e,t);break}e=t.next()}return i}}});var Dr,qu=fe(()=>{fn();Dr=class{constructor(){this.ForEntityName="LINE"}parseEntity(t,e){let i={type:e.value,vertices:[]};for(e=t.next();!t.isEOF()&&e.code!==0;){switch(e.code){case 10:i.vertices.unshift(ie(t));break;case 11:i.vertices.push(ie(t));break;case 210:i.extrusionDirection=ie(t);break;case 100:break;default:Ee(i,e,t);break}e=t.next()}return i}}});function bm(n,t){if(!n||n<=0)throw Error("n must be greater than 0 verticies");let e=[],i=!1,s=!1,o=t.lastReadGroup;for(let c=0;c<n;c++){let a={};for(;!t.isEOF()&&!(o.code===0||s);){switch(o.code){case 10:if(i){s=!0;continue}a.x=o.value,i=!0;break;case 20:a.y=o.value;break;case 30:a.z=o.value;break;case 40:a.startWidth=o.value;break;case 41:a.endWidth=o.value;break;case 42:o.value!=0&&(a.bulge=o.value);break;default:return t.rewind(),i&&e.push(a),t.rewind(),e}o=t.next()}e.push(a),i=!1,s=!1}return t.rewind(),e}var Or,Zu=fe(()=>{fn();Or=class{constructor(){this.ForEntityName="LWPOLYLINE"}parseEntity(t,e){let i={type:e.value,vertices:[]},s=0;for(e=t.next();!t.isEOF()&&e.code!==0;){switch(e.code){case 38:i.elevation=e.value;break;case 39:i.depth=e.value;break;case 70:i.shape=(e.value&1)===1,i.hasContinuousLinetypePattern=(e.value&128)===128;break;case 90:s=e.value;break;case 10:i.vertices=bm(s,t);break;case 43:e.value!==0&&(i.width=e.value);break;case 210:i.extrusionDirectionX=e.value;break;case 220:i.extrusionDirectionY=e.value;break;case 230:i.extrusionDirectionZ=e.value;break;default:Ee(i,e,t);break}e=t.next()}return i}}});var Fr,Ju=fe(()=>{fn();Fr=class{constructor(){this.ForEntityName="MTEXT"}parseEntity(t,e){let i={type:e.value};for(e=t.next();!t.isEOF()&&e.code!==0;){switch(e.code){case 3:i.text?i.text+=e.value:i.text=e.value;break;case 1:i.text?i.text+=e.value:i.text=e.value;break;case 10:i.position=ie(t);break;case 11:i.directionVector=ie(t);break;case 40:i.height=e.value;break;case 41:i.width=e.value;break;case 50:i.rotation=e.value;break;case 71:i.attachmentPoint=e.value;break;case 72:i.drawingDirection=e.value;break;default:Ee(i,e,t);break}e=t.next()}return i}}});var Ur,ju=fe(()=>{fn();Ur=class{constructor(){this.ForEntityName="POINT"}parseEntity(t,e){let s={type:e.value};for(e=t.next();!t.isEOF()&&e.code!==0;){switch(e.code){case 10:s.position=ie(t);break;case 39:s.thickness=e.value;break;case 210:s.extrusionDirection=ie(t);break;case 100:break;default:Ee(s,e,t);break}e=t.next()}return s}}});var Br,Ku=fe(()=>{fn();Br=class{constructor(){this.ForEntityName="VERTEX"}parseEntity(t,e){var i={type:e.value};for(e=t.next();!t.isEOF()&&e.code!==0;){switch(e.code){case 10:i.x=e.value;break;case 20:i.y=e.value;break;case 30:i.z=e.value;break;case 40:break;case 41:break;case 42:e.value!=0&&(i.bulge=e.value);break;case 70:i.curveFittingVertex=(e.value&1)!==0,i.curveFitTangent=(e.value&2)!==0,i.splineVertex=(e.value&8)!==0,i.splineControlPoint=(e.value&16)!==0,i.threeDPolylineVertex=(e.value&32)!==0,i.threeDPolylineMesh=(e.value&64)!==0,i.polyfaceMeshVertex=(e.value&128)!==0;break;case 50:break;case 71:i.faceA=e.value;break;case 72:i.faceB=e.value;break;case 73:i.faceC=e.value;break;case 74:i.faceD=e.value;break;default:Ee(i,e,t);break}e=t.next()}return i}}});function Mm(n,t){let e=new Br,i=[];for(;!n.isEOF();)if(t.code===0){if(t.value==="VERTEX")i.push(e.parseEntity(n,t)),t=n.lastReadGroup;else if(t.value==="SEQEND"){Sm(n,t);break}}return i}function Sm(n,t){let e={type:t.value};for(t=n.next();!n.isEOF()&&t.code!=0;)Ee(e,t,n),t=n.next();return e}var kr,Qu=fe(()=>{fn();Ku();kr=class{constructor(){this.ForEntityName="POLYLINE"}parseEntity(t,e){var i={type:e.value,vertices:[]};for(e=t.next();!t.isEOF()&&e.code!==0;){switch(e.code){case 10:break;case 20:break;case 30:break;case 39:i.thickness=e.value;break;case 40:break;case 41:break;case 70:i.shape=(e.value&1)!==0,i.includesCurveFitVertices=(e.value&2)!==0,i.includesSplineFitVertices=(e.value&4)!==0,i.is3dPolyline=(e.value&8)!==0,i.is3dPolygonMesh=(e.value&16)!==0,i.is3dPolygonMeshClosed=(e.value&32)!==0,i.isPolyfaceMesh=(e.value&64)!==0,i.hasContinuousLinetypePattern=(e.value&128)!==0;break;case 71:break;case 72:break;case 73:break;case 74:break;case 75:break;case 210:i.extrusionDirection=ie(t);break;default:Ee(i,e,t);break}e=t.next()}return i.vertices=Mm(t,e),i}}});var zr,tf=fe(()=>{fn();zr=class{constructor(){this.ForEntityName="SOLID"}parseEntity(t,e){let i={type:e.value,points:[]};for(e=t.next();!t.isEOF()&&e.code!==0;){switch(e.code){case 10:i.points[0]=ie(t);break;case 11:i.points[1]=ie(t);break;case 12:i.points[2]=ie(t);break;case 13:i.points[3]=ie(t);break;case 210:i.extrusionDirection=ie(t);break;default:Ee(i,e,t);break}e=t.next()}return i}}});var Vr,ef=fe(()=>{fn();Vr=class{constructor(){this.ForEntityName="SPLINE"}parseEntity(t,e){let i={type:e.value};for(e=t.next();!t.isEOF()&&e.code!==0;){switch(e.code){case 10:i.controlPoints||(i.controlPoints=[]),i.controlPoints.push(ie(t));break;case 11:i.fitPoints||(i.fitPoints=[]),i.fitPoints.push(ie(t));break;case 12:i.startTangent=ie(t);break;case 13:i.endTangent=ie(t);break;case 40:i.knotValues||(i.knotValues=[]),i.knotValues.push(e.value);break;case 70:(e.value&1)!=0&&(i.closed=!0),(e.value&2)!=0&&(i.periodic=!0),(e.value&4)!=0&&(i.rational=!0),(e.value&8)!=0&&(i.planar=!0),(e.value&16)!=0&&(i.planar=!0,i.linear=!0);break;case 71:i.degreeOfSplineCurve=e.value;break;case 72:i.numberOfKnots=e.value;break;case 73:i.numberOfControlPoints=e.value;break;case 74:i.numberOfFitPoints=e.value;break;case 210:i.normalVector=ie(t);break;default:Ee(i,e,t);break}e=t.next()}return i}}});var Hr,nf=fe(()=>{fn();Hr=class{constructor(){this.ForEntityName="TEXT"}parseEntity(t,e){let i={type:e.value};for(e=t.next();!t.isEOF()&&e.code!==0;){switch(e.code){case 10:i.startPoint=ie(t);break;case 11:i.endPoint=ie(t);break;case 40:i.textHeight=e.value;break;case 41:i.xScale=e.value;break;case 50:i.rotation=e.value;break;case 1:i.text=e.value;break;case 72:i.halign=e.value;break;case 73:i.valign=e.value;break;default:Ee(i,e,t);break}e=t.next()}return i}}});var rf=Iu((sf,Qo)=>{(function(n,t){"use strict";typeof define=="function"&&define.amd?define(t):typeof Qo=="object"&&Qo.exports?Qo.exports=t():n.log=t()})(sf,function(){"use strict";var n=function(){},t="undefined",e=typeof window!==t&&typeof window.navigator!==t&&/Trident\/|MSIE /.test(window.navigator.userAgent),i=["trace","debug","info","warn","error"],s={},o=null;function c(v,M){var y=v[M];if(typeof y.bind=="function")return y.bind(v);try{return Function.prototype.bind.call(y,v)}catch{return function(){return Function.prototype.apply.apply(y,[v,arguments])}}}function a(){console.log&&(console.log.apply?console.log.apply(console,arguments):Function.prototype.apply.apply(console.log,[console,arguments])),console.trace&&console.trace()}function u(v){return v==="debug"&&(v="log"),typeof console===t?!1:v==="trace"&&e?a:console[v]!==void 0?c(console,v):console.log!==void 0?c(console,"log"):n}function f(){for(var v=this.getLevel(),M=0;M<i.length;M++){var y=i[M];this[y]=M<v?n:this.methodFactory(y,v,this.name)}if(this.log=this.debug,typeof console===t&&v<this.levels.SILENT)return"No console available for logging"}function p(v){return function(){typeof console!==t&&(f.call(this),this[v].apply(this,arguments))}}function g(v,M,y){return u(v)||p.apply(this,arguments)}function m(v,M){var y=this,_,T,C,S="loglevel";typeof v=="string"?S+=":"+v:typeof v=="symbol"&&(S=void 0);function L(N){var U=(i[N]||"silent").toUpperCase();if(!(typeof window===t||!S)){try{window.localStorage[S]=U;return}catch{}try{window.document.cookie=encodeURIComponent(S)+"="+U+";"}catch{}}}function E(){var N;if(!(typeof window===t||!S)){try{N=window.localStorage[S]}catch{}if(typeof N===t)try{var U=window.document.cookie,V=encodeURIComponent(S),k=U.indexOf(V+"=");k!==-1&&(N=/^([^;]+)/.exec(U.slice(k+V.length+1))[1])}catch{}return y.levels[N]===void 0&&(N=void 0),N}}function A(){if(!(typeof window===t||!S)){try{window.localStorage.removeItem(S)}catch{}try{window.document.cookie=encodeURIComponent(S)+"=; expires=Thu, 01 Jan 1970 00:00:00 UTC"}catch{}}}function w(N){var U=N;if(typeof U=="string"&&y.levels[U.toUpperCase()]!==void 0&&(U=y.levels[U.toUpperCase()]),typeof U=="number"&&U>=0&&U<=y.levels.SILENT)return U;throw new TypeError("log.setLevel() called with invalid level: "+N)}y.name=v,y.levels={TRACE:0,DEBUG:1,INFO:2,WARN:3,ERROR:4,SILENT:5},y.methodFactory=M||g,y.getLevel=function(){return C??T??_},y.setLevel=function(N,U){return C=w(N),U!==!1&&L(C),f.call(y)},y.setDefaultLevel=function(N){T=w(N),E()||y.setLevel(N,!1)},y.resetLevel=function(){C=null,A(),f.call(y)},y.enableAll=function(N){y.setLevel(y.levels.TRACE,N)},y.disableAll=function(N){y.setLevel(y.levels.SILENT,N)},y.rebuild=function(){if(o!==y&&(_=w(o.getLevel())),f.call(y),o===y)for(var N in s)s[N].rebuild()},_=w(o?o.getLevel():"WARN");var D=E();D!=null&&(C=w(D)),f.call(y)}o=new m,o.getLogger=function(M){if(typeof M!="symbol"&&typeof M!="string"||M==="")throw new TypeError("You must supply a name when creating a logger.");var y=s[M];return y||(y=s[M]=new m(M,o.methodFactory)),y};var x=typeof window!==t?window.log:void 0;return o.noConflict=function(){return typeof window!==t&&window.log===o&&(window.log=x),o},o.getLoggers=function(){return s},o.default=o,o})});function wm(n){n.registerEntityHandler(Ar),n.registerEntityHandler(Pr),n.registerEntityHandler(Cr),n.registerEntityHandler(Ir),n.registerEntityHandler(Rr),n.registerEntityHandler(Lr),n.registerEntityHandler(Nr),n.registerEntityHandler(Dr),n.registerEntityHandler(Or),n.registerEntityHandler(Fr),n.registerEntityHandler(Ur),n.registerEntityHandler(kr),n.registerEntityHandler(zr),n.registerEntityHandler(Vr),n.registerEntityHandler(Hr)}function ai(n,t,e){return n.code===t&&n.value===e}function rs(n){be.default.debug("unhandled group "+of(n))}function of(n){return n.code+":"+n.value}function Em(n){return Ko[n]}var be,Is,Dc=fe(()=>{zu();Nc();Vu();Hu();Gu();Xu();Wu();Yu();$u();qu();Zu();Ju();ju();Qu();tf();ef();nf();be=Lu(rf());be.default.setLevel("error");Is=class{constructor(){this._entityHandlers={},wm(this)}parse(t){return typeof t=="string"?this._parse(t):(console.error("Cannot read dxf source of type `"+typeof t),null)}registerEntityHandler(t){let e=new t;this._entityHandlers[e.ForEntityName]=e}parseSync(t){return this.parse(t)}parseStream(t){let e="",i=this;return new Promise((s,o)=>{t.on("data",c=>{e+=c}),t.on("end",()=>{try{s(i._parse(e))}catch(c){o(c)}}),t.on("error",c=>{o(c)})})}_parse(t){let e={},i=0,s=t.split(/\r\n|\r|\n/g),o=new Tr(s);if(!o.hasNext())throw Error("Empty file");let c=this,a;function u(){for(a=o.next();!o.isEOF();)if(a.code===0&&a.value==="SECTION"){if(a=o.next(),a.code!==2){console.error("Unexpected code %s after 0:SECTION",of(a)),a=o.next();continue}a.value==="HEADER"?(be.default.debug("> HEADER"),e.header=f(),be.default.debug("<")):a.value==="BLOCKS"?(be.default.debug("> BLOCKS"),e.blocks=p(),be.default.debug("<")):a.value==="ENTITIES"?(be.default.debug("> ENTITIES"),e.entities=C(!1),be.default.debug("<")):a.value==="TABLES"?(be.default.debug("> TABLES"),e.tables=m(),be.default.debug("<")):a.value==="EOF"?be.default.debug("EOF"):be.default.warn("Skipping section '%s'",a.value)}else a=o.next()}function f(){let E=null,A=null,w={};for(a=o.next();;){if(ai(a,0,"ENDSEC")){E&&(w[E]=A);break}else a.code===9?(E&&(w[E]=A),E=a.value):a.code===10?A={x:a.value}:a.code===20?A.y=a.value:a.code===30?A.z=a.value:A=a.value;a=o.next()}return a=o.next(),w}function p(){let E={};for(a=o.next();a.value!=="EOF"&&!ai(a,0,"ENDSEC");)if(ai(a,0,"BLOCK")){be.default.debug("block {");let A=g();be.default.debug("}"),L(A),A.name?E[A.name]=A:be.default.error('block with handle "'+A.handle+'" is missing a name.')}else rs(a),a=o.next();return E}function g(){let E={};for(a=o.next();a.value!=="EOF";){switch(a.code){case 1:E.xrefPath=a.value,a=o.next();break;case 2:E.name=a.value,a=o.next();break;case 3:E.name2=a.value,a=o.next();break;case 5:E.handle=a.value,a=o.next();break;case 8:E.layer=a.value,a=o.next();break;case 10:E.position=S(a),a=o.next();break;case 67:E.paperSpace=!!(a.value&&a.value==1),a=o.next();break;case 70:a.value!=0&&(E.type=a.value),a=o.next();break;case 100:a=o.next();break;case 330:E.ownerHandle=a.value,a=o.next();break;case 0:if(a.value=="ENDBLK")break;E.entities=C(!0);break;default:rs(a),a=o.next()}if(ai(a,0,"ENDBLK")){a=o.next();break}}return E}function m(){let E={};for(a=o.next();a.value!=="EOF"&&!ai(a,0,"ENDSEC");)ai(a,0,"TABLE")?(a=o.next(),T[a.value]?(be.default.debug(a.value+" Table {"),E[T[a.value].tableName]=v(a),be.default.debug("}")):be.default.debug("Unhandled Table "+a.value)):a=o.next();return a=o.next(),E}let x="ENDTAB";function v(E){let A=T[E.value],w={},D=0;for(a=o.next();!ai(a,0,x);)switch(a.code){case 5:w.handle=a.value,a=o.next();break;case 330:w.ownerHandle=a.value,a=o.next();break;case 100:a.value==="AcDbSymbolTable"||rs(a),a=o.next();break;case 70:D=a.value,a=o.next();break;case 0:a.value===A.dxfSymbolName?w[A.tableRecordsProperty]=A.parseTableRecords():(rs(a),a=o.next());break;default:rs(a),a=o.next()}let N=w[A.tableRecordsProperty];if(N){let U=(()=>{if(N.constructor===Array)return N.length;if(typeof N=="object")return Object.keys(N).length})();D!==U&&be.default.warn("Parsed "+U+" "+A.dxfSymbolName+"'s but expected "+D)}return a=o.next(),w}function M(){let E=[],A={};for(be.default.debug("ViewPort {"),a=o.next();!ai(a,0,x);)switch(a.code){case 2:A.name=a.value,a=o.next();break;case 10:A.lowerLeftCorner=S(a),a=o.next();break;case 11:A.upperRightCorner=S(a),a=o.next();break;case 12:A.center=S(a),a=o.next();break;case 13:A.snapBasePoint=S(a),a=o.next();break;case 14:A.snapSpacing=S(a),a=o.next();break;case 15:A.gridSpacing=S(a),a=o.next();break;case 16:A.viewDirectionFromTarget=S(a),a=o.next();break;case 17:A.viewTarget=S(a),a=o.next();break;case 42:A.lensLength=a.value,a=o.next();break;case 43:A.frontClippingPlane=a.value,a=o.next();break;case 44:A.backClippingPlane=a.value,a=o.next();break;case 45:A.viewHeight=a.value,a=o.next();break;case 50:A.snapRotationAngle=a.value,a=o.next();break;case 51:A.viewTwistAngle=a.value,a=o.next();break;case 79:A.orthographicType=a.value,a=o.next();break;case 110:A.ucsOrigin=S(a),a=o.next();break;case 111:A.ucsXAxis=S(a),a=o.next();break;case 112:A.ucsYAxis=S(a),a=o.next();break;case 110:A.ucsOrigin=S(a),a=o.next();break;case 281:A.renderMode=a.value,a=o.next();break;case 281:A.defaultLightingType=a.value,a=o.next();break;case 292:A.defaultLightingOn=a.value,a=o.next();break;case 330:A.ownerHandle=a.value,a=o.next();break;case 63:case 421:case 431:A.ambientColor=a.value,a=o.next();break;case 0:a.value==="VPORT"&&(be.default.debug("}"),E.push(A),be.default.debug("ViewPort {"),A={},a=o.next());break;default:rs(a),a=o.next();break}return be.default.debug("}"),E.push(A),E}function y(){let E={},A={},w=0,D;for(be.default.debug("LType {"),a=o.next();!ai(a,0,"ENDTAB");)switch(a.code){case 2:A.name=a.value,D=a.value,a=o.next();break;case 3:A.description=a.value,a=o.next();break;case 73:w=a.value,w>0&&(A.pattern=[]),a=o.next();break;case 40:A.patternLength=a.value,a=o.next();break;case 49:A.pattern.push(a.value),a=o.next();break;case 0:be.default.debug("}"),w>0&&w!==A.pattern.length&&be.default.warn("lengths do not match on LTYPE pattern"),E[D]=A,A={},be.default.debug("LType {"),a=o.next();break;default:a=o.next()}return be.default.debug("}"),E[D]=A,E}function _(){let E={},A={},w;for(be.default.debug("Layer {"),a=o.next();!ai(a,0,"ENDTAB");)switch(a.code){case 2:A.name=a.value,w=a.value,a=o.next();break;case 62:A.visible=a.value>=0,A.colorIndex=Math.abs(a.value),A.color=Em(A.colorIndex),a=o.next();break;case 70:A.frozen=(a.value&1)!=0||(a.value&2)!=0,a=o.next();break;case 0:a.value==="LAYER"&&(be.default.debug("}"),E[w]=A,be.default.debug("Layer {"),A={},w=void 0,a=o.next());break;default:rs(a),a=o.next();break}return be.default.debug("}"),E[w]=A,E}let T={VPORT:{tableRecordsProperty:"viewPorts",tableName:"viewPort",dxfSymbolName:"VPORT",parseTableRecords:M},LTYPE:{tableRecordsProperty:"lineTypes",tableName:"lineType",dxfSymbolName:"LTYPE",parseTableRecords:y},LAYER:{tableRecordsProperty:"layers",tableName:"layer",dxfSymbolName:"LAYER",parseTableRecords:_}};function C(E){let A=[],w=E?"ENDBLK":"ENDSEC";for(E||(a=o.next());;)if(a.code===0){if(a.value===w)break;let D=c._entityHandlers[a.value];if(D!=null){be.default.debug(a.value+" {");let N=D.parseEntity(o,a);a=o.lastReadGroup,be.default.debug("}"),L(N),A.push(N)}else{be.default.warn("Unhandled entity "+a.value),a=o.next();continue}}else a=o.next();return w=="ENDSEC"&&(a=o.next()),A}function S(E){let A={},w=E.code;if(A.x=E.value,w+=10,E=o.next(),E.code!=w)throw new Error("Expected code for point value to be "+w+" but got "+E.code+".");return A.y=E.value,w+=10,E=o.next(),E.code!=w?(o.rewind(),A):(A.z=E.value,A)}function L(E){if(!E)throw new TypeError("entity cannot be undefined or null");E.handle||(E.handle=i++)}return u(),e}}});var af,lf=fe(()=>{Dc();Dc();af=Is});function Oc(n){let t;try{t=new af().parseSync(n)}catch(M){throw new Error(`This DXF could not be read (${M.message||M}). Save it again as ASCII DXF.`)}if(!t)throw new Error("This DXF could not be read. Save it again as ASCII DXF.");let e=Number(t.header?.$INSUNITS??0),i=Tm[e]??1,s=t.tables?.layer?.layers||{},o=[],c={},a=M=>{c[M]=(c[M]||0)+1},u=(M,y)=>{let _=M.colorIndex;if(M.color!==void 0&&_!==0&&_!==256)return cf(M.color);if(_===0&&y)return y;let T=s[M.layer];return T&&T.color!==void 0?cf(T.color):y||"#000000"},f=(M,y,_,T,C)=>{if(M.length<2)return;let S=ss(M.map(L=>wr(T,L)),y);S.length<2||o.push({pts:S,closed:y&&S.length>2,color:C,layer:_.layer||"0"})},p=M=>(M.extrusionDirectionZ??M.extrusionDirection?.z??1)<0?[-1,0,0,1,0,0]:Ou;function g(M,y,_){let T=Math.hypot(y.x-M.x,y.y-M.y);if(T<1e-12)return[];let C=Math.abs(_),S=T*(1+C*C)/(4*C),L=(M.x+y.x)/2,E=(M.y+y.y)/2,A=Math.sign(_)*(S-C*T/2),w=-(y.y-M.y)/T,D=(y.x-M.x)/T,N=L+w*A,U=E+D*A,V=Math.atan2(M.y-U,M.x-N),k=Math.atan2(y.y-U,y.x-N);return Cs(N,U,S,V,k,_>0).slice(1)}function m(M,y,_){let T=(M.vertices||[]).filter(E=>Number.isFinite(E.x)&&Number.isFinite(E.y));if(T.length<2)return;let C=!!M.shape,S=[[T[0].x,T[0].y]],L=C?T.length:T.length-1;for(let E=0;E<L;E++){let A=T[E],w=T[(E+1)%T.length];A.bulge?S.push(...g(A,w,A.bulge)):S.push([w.x,w.y])}f(S,C,M,y,_)}function x(M,y,_){let T=(M.controlPoints||[]).map(E=>[E.x,E.y]),C=M.knotValues||[],S=M.degreeOfSplineCurve||3;if(T.length>S&&C.length===T.length+S+1){let E=C[S],A=C[T.length],w=0;for(let U=1;U<T.length;U++)w+=Math.hypot(T[U][0]-T[U-1][0],T[U][1]-T[U-1][1]);let D=Math.max(T.length*8,Math.min(4e3,Math.ceil(w/.2))),N=[];for(let U=0;U<=D;U++)N.push(Pm(S,T,C,E+(A-E)*U/D));return f(N,!!M.closed,M,y,_)}let L=(M.fitPoints||[]).map(E=>[E.x,E.y]);L.length>1&&f(L,!!M.closed,M,y,_)}function v(M,y,_,T){if(!(T>8))for(let C of M||[]){if(C.inPaperSpace||C.visible===!1)continue;let S=s[C.layer];if(S&&(S.visible===!1||S.frozen))continue;let L=u(C,_),E=Li(y,p(C));switch(C.type){case"LINE":C.vertices?.length>=2&&f(C.vertices.map(A=>[A.x,A.y]),!1,C,y,L);break;case"LWPOLYLINE":case"POLYLINE":if(C.is3dPolygonMesh||C.isPolyfaceMesh){a("mesh");break}m(C,E,L);break;case"CIRCLE":f(Jo(C.center.x,C.center.y,C.radius),!0,C,E,L);break;case"ARC":f(Cs(C.center.x,C.center.y,C.radius,C.startAngle,C.endAngle,!0),!1,C,E,L);break;case"ELLIPSE":{let A=C.startAngle===void 0||Math.abs((C.endAngle??0)-(C.startAngle??0)-Math.PI*2)<1e-6||C.startAngle===0&&Math.abs(C.endAngle-Math.PI*2)<1e-6,w=jo(C.center.x,C.center.y,C.majorAxisEndPoint.x,C.majorAxisEndPoint.y,C.axisRatio,C.startAngle??0,C.endAngle??Math.PI*2);f(w,A,C,E,L);break}case"SPLINE":x(C,y,L);break;case"SOLID":{let A=(C.points||[]).filter(Boolean);if(A.length>=3){let w=A.length===4?[A[0],A[1],A[3],A[2]]:A;f(w.map(D=>[D.x,D.y]).concat([[w[0].x,w[0].y]]),!0,C,E,L)}break}case"INSERT":{let A=t.blocks?.[C.name];if(!A){a("missing block");break}let w=(C.rotation||0)*Math.PI/180,D=Math.cos(w),N=Math.sin(w),U=C.xScale??1,V=C.yScale??1,k=A.position||{x:0,y:0},z=Math.max(1,C.columnCount||1),H=Math.max(1,C.rowCount||1);for(let G=0;G<H;G++)for(let $=0;$<z;$++){let it=(C.position?.x||0)+$*(C.columnSpacing||0)*D-G*(C.rowSpacing||0)*N,K=(C.position?.y||0)+$*(C.columnSpacing||0)*N+G*(C.rowSpacing||0)*D,st=Li(Li(y,[D*U,N*U,-N*V,D*V,it,K]),[1,0,0,1,-k.x,-k.y]);v(A.entities,st,L,T+1)}break}case"TEXT":case"MTEXT":case"ATTDEF":a("text");break;case"DIMENSION":a("dimension");break;case"POINT":break;default:a(C.type.toLowerCase())}}}return v(t.entities,[i,0,0,i,0,0],null,0),{shapes:o,units:Am[e]??"mm",skipped:c}}function Pm(n,t,e,i){let s=n;for(;s<t.length-1&&i>=e[s+1];)s++;let o=[];for(let c=0;c<=n;c++)o.push(t[c+s-n].slice());for(let c=1;c<=n;c++)for(let a=n;a>=c;a--){let u=a+s-n,f=e[u+n-c+1]-e[u],p=f===0?0:(i-e[u])/f;o[a]=[(1-p)*o[a-1][0]+p*o[a][0],(1-p)*o[a-1][1]+p*o[a][1]]}return o[n]}var Tm,Am,cf,hf=fe(()=>{lf();Er();Tm={0:1,1:25.4,2:304.8,4:1,5:10,6:1e3,8:254e-7,9:.0254,10:914.4,13:.001,14:100},Am={0:"mm (no units set)",1:"in",2:"ft",4:"mm",5:"cm",6:"m",8:"\xB5in",9:"mil",10:"yd",13:"\xB5m",14:"dm"},cf=n=>"#"+(n>>>0&16777215).toString(16).padStart(6,"0")});async function Fc(n,t){let e=n instanceof Uint8Array?n:new Uint8Array(n),i=-1;for(let o=0;o<Math.min(e.length-4,1024)&&i<0;o++)Lm(e.subarray(o))&&(i=o);if(i<0)throw new Error(Cm);e=e.slice();let s=await t.getDocument({data:e,isEvalSupported:!1,disableFontFace:!0,useSystemFonts:!1,verbosity:0}).promise;try{let o=await s.getPage(1),c=await o.getOperatorList({annotationMode:t.AnnotationMode.DISABLE}),a=await s.getOptionalContentConfig().catch(()=>null);return{...Nm(o,c,t.OPS,a),units:"pt",pages:s.numPages}}finally{await s.destroy()}}function Nm(n,{fnArray:t,argsArray:e},i,s){let o=[];for(let z in i)o[i[z]]=z;let c=n.getViewport({scale:1}),a=Li([Gr,0,0,-Gr,0,c.height*Gr],c.transform),u=c.width*Gr,f=c.height*Gr,p=[],g={},m=z=>{g[z]=(g[z]||0)+1},x={ctm:a,stroke:"#000000",fill:"#000000"},v=[],M=[],y=[],_=null,T=[0,0],C=[0,0],S=!1,L=()=>{for(let z=M.length-1;z>=0;z--)if(M[z]?.layer!==void 0)return M[z].layer;return""},E=()=>M.some(z=>z?.hidden),A=(z,H)=>wr(x.ctm,[z,H]),w=(z,H)=>{_={pts:[A(z,H)],closed:!1},y.push(_),T=C=[z,H]},D=()=>{_||w(T[0],T[1])},N=()=>{_&&(_.closed=!0,_=null,T=C)};function U(z,H){let G=0;for(let $ of z)switch(o[$]){case"moveTo":w(H[G],H[G+1]),G+=2;break;case"lineTo":D(),T=[H[G],H[G+1]],_.pts.push(A(...T)),G+=2;break;case"curveTo":case"curveTo2":case"curveTo3":{D();let it,K,st;o[$]==="curveTo"?(it=[H[G],H[G+1]],K=[H[G+2],H[G+3]],st=[H[G+4],H[G+5]],G+=6):o[$]==="curveTo2"?(it=T,K=[H[G],H[G+1]],st=[H[G+2],H[G+3]],G+=4):(it=[H[G],H[G+1]],st=[H[G+2],H[G+3]],K=st,G+=4),Ri(_.pts[_.pts.length-1],A(...it),A(...K),A(...st),_.pts),T=st;break}case"closePath":N();break;case"rectangle":{let[it,K,st,ht]=H.slice(G,G+4);G+=4,w(it,K),_.pts.push(A(it+st,K),A(it+st,K+ht),A(it,K+ht)),N();break}}}let V=z=>{if(!z.filled||z.stroked||z.color!=="#ffffff"||z.pts.length!==5)return!1;let H=z.pts.map(Rt=>Rt[0]),G=z.pts.map(Rt=>Rt[1]),$=Math.min(...H),it=Math.max(...H),K=Math.min(...G),st=Math.max(...G),ht=.1;return $>ht||K>ht||it<u-ht||st<f-ht?!1:z.pts.every(Rt=>(Math.abs(Rt[0]-$)<ht||Math.abs(Rt[0]-it)<ht)&&(Math.abs(Rt[1]-K)<ht||Math.abs(Rt[1]-st)<ht))};function k([z,H,G]){G&&N();let $=E();for(let it of y){let K=it.closed||H,st=ss(it.pts,K);if(st.length<2)continue;let ht={pts:st,closed:K&&st.length>2,color:z?x.stroke:x.fill,layer:L(),filled:H};if($){m("hidden");continue}if(V({...ht,stroked:z})){m("background");continue}p.push(ht)}y=[],_=null}for(let z=0;z<t.length;z++){let H=o[t[z]],G=e[z];if(ff[H]){k(ff[H]);continue}if(Im.includes(H)){S=!0;continue}if(Rm.includes(H)){m("image");continue}switch(H){case"constructPath":U(G[0],G[1]);break;case"endPath":y=[],_=null;break;case"save":v.push({...x});break;case"restore":v.length&&(x=v.pop());break;case"transform":x.ctm=Li(x.ctm,G);break;case"paintFormXObjectBegin":v.push({...x}),G[0]&&(x.ctm=Li(x.ctm,G[0]));break;case"paintFormXObjectEnd":v.length&&(x=v.pop());break;case"setStrokeRGBColor":x.stroke=uf(G);break;case"setFillRGBColor":x.fill=uf(G);break;case"setStrokeColorN":case"setFillColorN":break;case"beginText":S=!1;break;case"endText":S&&m("text"),S=!1;break;case"shadingFill":m("gradient");break;case"beginMarkedContentProps":{let $=G[0]==="OC"?G[1]:null;if(!$){M.push(null);break}let it=$.type==="OCG"?s?.getGroup($.id):null;M.push({layer:it?.name??"",hidden:s?!s.isVisible($):!1});break}case"beginMarkedContent":M.push(null);break;case"endMarkedContent":M.pop();break}}return{shapes:p,skipped:g}}var Gr,uf,Cm,ff,Im,Rm,Lm,df=fe(()=>{Er();Gr=25.4/72,uf=n=>"#"+(n[0]<<16|n[1]<<8|n[2]).toString(16).padStart(6,"0"),Cm='This .ai file was saved without PDF content. In Illustrator, save it again with "Create PDF Compatible File" on, or export a PDF or SVG.',ff={stroke:[!0,!1,!1],closeStroke:[!0,!1,!0],fill:[!1,!0,!1],eoFill:[!1,!0,!1],fillStroke:[!0,!0,!1],eoFillStroke:[!0,!0,!1],closeFillStroke:[!0,!0,!0],closeEOFillStroke:[!0,!0,!0]},Im=["showText","showSpacedText","nextLineShowText","nextLineSetSpacingShowText"],Rm=["paintImageXObject","paintInlineImageXObject","paintInlineImageXObjectGroup","paintImageXObjectRepeat","paintImageMaskXObject","paintImageMaskXObjectGroup","paintImageMaskXObjectRepeat","paintSolidColorImageMask"],Lm=n=>n.length>=4&&n[0]===37&&n[1]===80&&n[2]===68&&n[3]===70});var pf=fe(()=>{});var mf=Iu((YM,ta)=>{(function(){"use strict";var n={};n.version="6.4.2.2",n.use_lines=!0,n.use_xyz=!1;var t=!1;typeof ta<"u"&&ta.exports?(ta.exports=n,t=!0):(typeof define=="function"&&define.amd&&define(n),typeof document<"u"?window.ClipperLib=n:self.ClipperLib=n);var e;if(t){var i="chrome";e="Netscape"}else{var i=navigator.userAgent.toString().toLowerCase();e=navigator.appName}var s={};i.indexOf("chrome")!=-1&&i.indexOf("chromium")==-1?s.chrome=1:s.chrome=0,i.indexOf("chromium")!=-1?s.chromium=1:s.chromium=0,i.indexOf("safari")!=-1&&i.indexOf("chrome")==-1&&i.indexOf("chromium")==-1?s.safari=1:s.safari=0,i.indexOf("firefox")!=-1?s.firefox=1:s.firefox=0,i.indexOf("firefox/17")!=-1?s.firefox17=1:s.firefox17=0,i.indexOf("firefox/15")!=-1?s.firefox15=1:s.firefox15=0,i.indexOf("firefox/3")!=-1?s.firefox3=1:s.firefox3=0,i.indexOf("opera")!=-1?s.opera=1:s.opera=0,i.indexOf("msie 10")!=-1?s.msie10=1:s.msie10=0,i.indexOf("msie 9")!=-1?s.msie9=1:s.msie9=0,i.indexOf("msie 8")!=-1?s.msie8=1:s.msie8=0,i.indexOf("msie 7")!=-1?s.msie7=1:s.msie7=0,i.indexOf("msie ")!=-1?s.msie=1:s.msie=0,n.biginteger_used=null;var o,c=0xdeadbeefcafe,a=(c&16777215)==15715070;function u(r,l,h){n.biginteger_used=1,r!=null&&(typeof r=="number"&&typeof l>"u"?this.fromInt(r):typeof r=="number"?this.fromNumber(r,l,h):l==null&&typeof r!="string"?this.fromString(r,256):this.fromString(r,l))}function f(){return new u(null,void 0,void 0)}function p(r,l,h,d,b,P){for(;--P>=0;){var F=l*this[r++]+h[d]+b;b=Math.floor(F/67108864),h[d++]=F&67108863}return b}function g(r,l,h,d,b,P){for(var F=l&32767,X=l>>15;--P>=0;){var Y=this[r]&32767,Q=this[r++]>>15,yt=X*Y+Q*F;Y=F*Y+((yt&32767)<<15)+h[d]+(b&1073741823),b=(Y>>>30)+(yt>>>15)+X*Q+(b>>>30),h[d++]=Y&1073741823}return b}function m(r,l,h,d,b,P){for(var F=l&16383,X=l>>14;--P>=0;){var Y=this[r]&16383,Q=this[r++]>>14,yt=X*Y+Q*F;Y=F*Y+((yt&16383)<<14)+h[d]+b,b=(Y>>28)+(yt>>14)+X*Q,h[d++]=Y&268435455}return b}a&&e=="Microsoft Internet Explorer"?(u.prototype.am=g,o=30):a&&e!="Netscape"?(u.prototype.am=p,o=26):(u.prototype.am=m,o=28),u.prototype.DB=o,u.prototype.DM=(1<<o)-1,u.prototype.DV=1<<o;var x=52;u.prototype.FV=Math.pow(2,x),u.prototype.F1=x-o,u.prototype.F2=2*o-x;var v="0123456789abcdefghijklmnopqrstuvwxyz",M=new Array,y,_;for(y=48,_=0;_<=9;++_)M[y++]=_;for(y=97,_=10;_<36;++_)M[y++]=_;for(y=65,_=10;_<36;++_)M[y++]=_;function T(r){return v.charAt(r)}function C(r,l){var h=M[r.charCodeAt(l)];return h??-1}function S(r){for(var l=this.t-1;l>=0;--l)r[l]=this[l];r.t=this.t,r.s=this.s}function L(r){this.t=1,this.s=r<0?-1:0,r>0?this[0]=r:r<-1?this[0]=r+this.DV:this.t=0}function E(r){var l=f();return l.fromInt(r),l}function A(r,l){var h;if(l==16)h=4;else if(l==8)h=3;else if(l==256)h=8;else if(l==2)h=1;else if(l==32)h=5;else if(l==4)h=2;else{this.fromRadix(r,l);return}this.t=0,this.s=0;for(var d=r.length,b=!1,P=0;--d>=0;){var F=h==8?r[d]&255:C(r,d);if(F<0){r.charAt(d)=="-"&&(b=!0);continue}b=!1,P==0?this[this.t++]=F:P+h>this.DB?(this[this.t-1]|=(F&(1<<this.DB-P)-1)<<P,this[this.t++]=F>>this.DB-P):this[this.t-1]|=F<<P,P+=h,P>=this.DB&&(P-=this.DB)}h==8&&(r[0]&128)!=0&&(this.s=-1,P>0&&(this[this.t-1]|=(1<<this.DB-P)-1<<P)),this.clamp(),b&&u.ZERO.subTo(this,this)}function w(){for(var r=this.s&this.DM;this.t>0&&this[this.t-1]==r;)--this.t}function D(r){if(this.s<0)return"-"+this.negate().toString(r);var l;if(r==16)l=4;else if(r==8)l=3;else if(r==2)l=1;else if(r==32)l=5;else if(r==4)l=2;else return this.toRadix(r);var h=(1<<l)-1,d,b=!1,P="",F=this.t,X=this.DB-F*this.DB%l;if(F-- >0)for(X<this.DB&&(d=this[F]>>X)>0&&(b=!0,P=T(d));F>=0;)X<l?(d=(this[F]&(1<<X)-1)<<l-X,d|=this[--F]>>(X+=this.DB-l)):(d=this[F]>>(X-=l)&h,X<=0&&(X+=this.DB,--F)),d>0&&(b=!0),b&&(P+=T(d));return b?P:"0"}function N(){var r=f();return u.ZERO.subTo(this,r),r}function U(){return this.s<0?this.negate():this}function V(r){var l=this.s-r.s;if(l!=0)return l;var h=this.t;if(l=h-r.t,l!=0)return this.s<0?-l:l;for(;--h>=0;)if((l=this[h]-r[h])!=0)return l;return 0}function k(r){var l=1,h;return(h=r>>>16)!=0&&(r=h,l+=16),(h=r>>8)!=0&&(r=h,l+=8),(h=r>>4)!=0&&(r=h,l+=4),(h=r>>2)!=0&&(r=h,l+=2),(h=r>>1)!=0&&(r=h,l+=1),l}function z(){return this.t<=0?0:this.DB*(this.t-1)+k(this[this.t-1]^this.s&this.DM)}function H(r,l){var h;for(h=this.t-1;h>=0;--h)l[h+r]=this[h];for(h=r-1;h>=0;--h)l[h]=0;l.t=this.t+r,l.s=this.s}function G(r,l){for(var h=r;h<this.t;++h)l[h-r]=this[h];l.t=Math.max(this.t-r,0),l.s=this.s}function $(r,l){var h=r%this.DB,d=this.DB-h,b=(1<<d)-1,P=Math.floor(r/this.DB),F=this.s<<h&this.DM,X;for(X=this.t-1;X>=0;--X)l[X+P+1]=this[X]>>d|F,F=(this[X]&b)<<h;for(X=P-1;X>=0;--X)l[X]=0;l[P]=F,l.t=this.t+P+1,l.s=this.s,l.clamp()}function it(r,l){l.s=this.s;var h=Math.floor(r/this.DB);if(h>=this.t){l.t=0;return}var d=r%this.DB,b=this.DB-d,P=(1<<d)-1;l[0]=this[h]>>d;for(var F=h+1;F<this.t;++F)l[F-h-1]|=(this[F]&P)<<b,l[F-h]=this[F]>>d;d>0&&(l[this.t-h-1]|=(this.s&P)<<b),l.t=this.t-h,l.clamp()}function K(r,l){for(var h=0,d=0,b=Math.min(r.t,this.t);h<b;)d+=this[h]-r[h],l[h++]=d&this.DM,d>>=this.DB;if(r.t<this.t){for(d-=r.s;h<this.t;)d+=this[h],l[h++]=d&this.DM,d>>=this.DB;d+=this.s}else{for(d+=this.s;h<r.t;)d-=r[h],l[h++]=d&this.DM,d>>=this.DB;d-=r.s}l.s=d<0?-1:0,d<-1?l[h++]=this.DV+d:d>0&&(l[h++]=d),l.t=h,l.clamp()}function st(r,l){var h=this.abs(),d=r.abs(),b=h.t;for(l.t=b+d.t;--b>=0;)l[b]=0;for(b=0;b<d.t;++b)l[b+h.t]=h.am(0,d[b],l,b,0,h.t);l.s=0,l.clamp(),this.s!=r.s&&u.ZERO.subTo(l,l)}function ht(r){for(var l=this.abs(),h=r.t=2*l.t;--h>=0;)r[h]=0;for(h=0;h<l.t-1;++h){var d=l.am(h,l[h],r,2*h,0,1);(r[h+l.t]+=l.am(h+1,2*l[h],r,2*h+1,d,l.t-h-1))>=l.DV&&(r[h+l.t]-=l.DV,r[h+l.t+1]=1)}r.t>0&&(r[r.t-1]+=l.am(h,l[h],r,2*h,0,1)),r.s=0,r.clamp()}function Rt(r,l,h){var d=r.abs();if(!(d.t<=0)){var b=this.abs();if(b.t<d.t){l?.fromInt(0),h!=null&&this.copyTo(h);return}h==null&&(h=f());var P=f(),F=this.s,X=r.s,Y=this.DB-k(d[d.t-1]);Y>0?(d.lShiftTo(Y,P),b.lShiftTo(Y,h)):(d.copyTo(P),b.copyTo(h));var Q=P.t,yt=P[Q-1];if(yt!=0){var gt=yt*(1<<this.F1)+(Q>1?P[Q-2]>>this.F2:0),Mt=this.FV/gt,Jt=(1<<this.F1)/gt,oe=1<<this.F2,ye=h.t,Be=ye-Q,Pn=l??f();for(P.dlShiftTo(Be,Pn),h.compareTo(Pn)>=0&&(h[h.t++]=1,h.subTo(Pn,h)),u.ONE.dlShiftTo(Q,Pn),Pn.subTo(P,P);P.t<Q;)P[P.t++]=0;for(;--Be>=0;){var oi=h[--ye]==yt?this.DM:Math.floor(h[ye]*Mt+(h[ye-1]+oe)*Jt);if((h[ye]+=P.am(0,oi,h,Be,0,Q))<oi)for(P.dlShiftTo(Be,Pn),h.subTo(Pn,h);h[ye]<--oi;)h.subTo(Pn,h)}l!=null&&(h.drShiftTo(Q,l),F!=X&&u.ZERO.subTo(l,l)),h.t=Q,h.clamp(),Y>0&&h.rShiftTo(Y,h),F<0&&u.ZERO.subTo(h,h)}}}function zt(r){var l=f();return this.abs().divRemTo(r,null,l),this.s<0&&l.compareTo(u.ZERO)>0&&r.subTo(l,l),l}function de(r){this.m=r}function he(r){return r.s<0||r.compareTo(this.m)>=0?r.mod(this.m):r}function me(r){return r}function ft(r){r.divRemTo(this.m,null,r)}function vt(r,l,h){r.multiplyTo(l,h),this.reduce(h)}function Vt(r,l){r.squareTo(l),this.reduce(l)}de.prototype.convert=he,de.prototype.revert=me,de.prototype.reduce=ft,de.prototype.mulTo=vt,de.prototype.sqrTo=Vt;function te(){if(this.t<1)return 0;var r=this[0];if((r&1)==0)return 0;var l=r&3;return l=l*(2-(r&15)*l)&15,l=l*(2-(r&255)*l)&255,l=l*(2-((r&65535)*l&65535))&65535,l=l*(2-r*l%this.DV)%this.DV,l>0?this.DV-l:-l}function Ot(r){this.m=r,this.mp=r.invDigit(),this.mpl=this.mp&32767,this.mph=this.mp>>15,this.um=(1<<r.DB-15)-1,this.mt2=2*r.t}function ue(r){var l=f();return r.abs().dlShiftTo(this.m.t,l),l.divRemTo(this.m,null,l),r.s<0&&l.compareTo(u.ZERO)>0&&this.m.subTo(l,l),l}function qe(r){var l=f();return r.copyTo(l),this.reduce(l),l}function ce(r){for(;r.t<=this.mt2;)r[r.t++]=0;for(var l=0;l<this.m.t;++l){var h=r[l]&32767,d=h*this.mpl+((h*this.mph+(r[l]>>15)*this.mpl&this.um)<<15)&r.DM;for(h=l+this.m.t,r[h]+=this.m.am(0,d,r,l,0,this.m.t);r[h]>=r.DV;)r[h]-=r.DV,r[++h]++}r.clamp(),r.drShiftTo(this.m.t,r),r.compareTo(this.m)>=0&&r.subTo(this.m,r)}function _e(r,l){r.squareTo(l),this.reduce(l)}function Ie(r,l,h){r.multiplyTo(l,h),this.reduce(h)}Ot.prototype.convert=ue,Ot.prototype.revert=qe,Ot.prototype.reduce=ce,Ot.prototype.mulTo=Ie,Ot.prototype.sqrTo=_e;function ge(){return(this.t>0?this[0]&1:this.s)==0}function Re(r,l){if(r>4294967295||r<1)return u.ONE;var h=f(),d=f(),b=l.convert(this),P=k(r)-1;for(b.copyTo(h);--P>=0;)if(l.sqrTo(h,d),(r&1<<P)>0)l.mulTo(d,b,h);else{var F=h;h=d,d=F}return l.revert(h)}function Je(r,l){var h;return r<256||l.isEven()?h=new de(l):h=new Ot(l),this.exp(r,h)}u.prototype.copyTo=S,u.prototype.fromInt=L,u.prototype.fromString=A,u.prototype.clamp=w,u.prototype.dlShiftTo=H,u.prototype.drShiftTo=G,u.prototype.lShiftTo=$,u.prototype.rShiftTo=it,u.prototype.subTo=K,u.prototype.multiplyTo=st,u.prototype.squareTo=ht,u.prototype.divRemTo=Rt,u.prototype.invDigit=te,u.prototype.isEven=ge,u.prototype.exp=Re,u.prototype.toString=D,u.prototype.negate=N,u.prototype.abs=U,u.prototype.compareTo=V,u.prototype.bitLength=z,u.prototype.mod=zt,u.prototype.modPowInt=Je,u.ZERO=E(0),u.ONE=E(1);function ln(){var r=f();return this.copyTo(r),r}function Fe(){if(this.s<0){if(this.t==1)return this[0]-this.DV;if(this.t==0)return-1}else{if(this.t==1)return this[0];if(this.t==0)return 0}return(this[1]&(1<<32-this.DB)-1)<<this.DB|this[0]}function Xe(){return this.t==0?this.s:this[0]<<24>>24}function j(){return this.t==0?this.s:this[0]<<16>>16}function je(r){return Math.floor(Math.LN2*this.DB/Math.log(r))}function we(){return this.s<0?-1:this.t<=0||this.t==1&&this[0]<=0?0:1}function I(r){if(r==null&&(r=10),this.signum()==0||r<2||r>36)return"0";var l=this.chunkSize(r),h=Math.pow(r,l),d=E(h),b=f(),P=f(),F="";for(this.divRemTo(d,b,P);b.signum()>0;)F=(h+P.intValue()).toString(r).substr(1)+F,b.divRemTo(d,b,P);return P.intValue().toString(r)+F}function R(r,l){this.fromInt(0),l==null&&(l=10);for(var h=this.chunkSize(l),d=Math.pow(l,h),b=!1,P=0,F=0,X=0;X<r.length;++X){var Y=C(r,X);if(Y<0){r.charAt(X)=="-"&&this.signum()==0&&(b=!0);continue}F=l*F+Y,++P>=h&&(this.dMultiply(d),this.dAddOffset(F,0),P=0,F=0)}P>0&&(this.dMultiply(Math.pow(l,P)),this.dAddOffset(F,0)),b&&u.ZERO.subTo(this,this)}function tt(r,l,h){if(typeof l=="number")if(r<2)this.fromInt(1);else for(this.fromNumber(r,h),this.testBit(r-1)||this.bitwiseTo(u.ONE.shiftLeft(r-1),Gt,this),this.isEven()&&this.dAddOffset(1,0);!this.isProbablePrime(l);)this.dAddOffset(2,0),this.bitLength()>r&&this.subTo(u.ONE.shiftLeft(r-1),this);else{var d=new Array,b=r&7;d.length=(r>>3)+1,l.nextBytes(d),b>0?d[0]&=(1<<b)-1:d[0]=0,this.fromString(d,256)}}function at(){var r=this.t,l=new Array;l[0]=this.s;var h=this.DB-r*this.DB%8,d,b=0;if(r-- >0)for(h<this.DB&&(d=this[r]>>h)!=(this.s&this.DM)>>h&&(l[b++]=d|this.s<<this.DB-h);r>=0;)h<8?(d=(this[r]&(1<<h)-1)<<8-h,d|=this[--r]>>(h+=this.DB-8)):(d=this[r]>>(h-=8)&255,h<=0&&(h+=this.DB,--r)),(d&128)!=0&&(d|=-256),b==0&&(this.s&128)!=(d&128)&&++b,(b>0||d!=this.s)&&(l[b++]=d);return l}function dt(r){return this.compareTo(r)==0}function St(r){return this.compareTo(r)<0?this:r}function wt(r){return this.compareTo(r)>0?this:r}function ut(r,l,h){var d,b,P=Math.min(r.t,this.t);for(d=0;d<P;++d)h[d]=l(this[d],r[d]);if(r.t<this.t){for(b=r.s&this.DM,d=P;d<this.t;++d)h[d]=l(this[d],b);h.t=this.t}else{for(b=this.s&this.DM,d=P;d<r.t;++d)h[d]=l(b,r[d]);h.t=r.t}h.s=l(this.s,r.s),h.clamp()}function _t(r,l){return r&l}function Et(r){var l=f();return this.bitwiseTo(r,_t,l),l}function Gt(r,l){return r|l}function Lt(r){var l=f();return this.bitwiseTo(r,Gt,l),l}function Tt(r,l){return r^l}function Ht(r){var l=f();return this.bitwiseTo(r,Tt,l),l}function jt(r,l){return r&~l}function re(r){var l=f();return this.bitwiseTo(r,jt,l),l}function J(){for(var r=f(),l=0;l<this.t;++l)r[l]=this.DM&~this[l];return r.t=this.t,r.s=~this.s,r}function Ct(r){var l=f();return r<0?this.rShiftTo(-r,l):this.lShiftTo(r,l),l}function mt(r){var l=f();return r<0?this.lShiftTo(-r,l):this.rShiftTo(r,l),l}function At(r){if(r==0)return-1;var l=0;return(r&65535)==0&&(r>>=16,l+=16),(r&255)==0&&(r>>=8,l+=8),(r&15)==0&&(r>>=4,l+=4),(r&3)==0&&(r>>=2,l+=2),(r&1)==0&&++l,l}function It(){for(var r=0;r<this.t;++r)if(this[r]!=0)return r*this.DB+At(this[r]);return this.s<0?this.t*this.DB:-1}function bt(r){for(var l=0;r!=0;)r&=r-1,++l;return l}function qt(){for(var r=0,l=this.s&this.DM,h=0;h<this.t;++h)r+=bt(this[h]^l);return r}function Dt(r){var l=Math.floor(r/this.DB);return l>=this.t?this.s!=0:(this[l]&1<<r%this.DB)!=0}function Te(r,l){var h=u.ONE.shiftLeft(r);return this.bitwiseTo(h,l,h),h}function Se(r){return this.changeBit(r,Gt)}function bn(r){return this.changeBit(r,jt)}function An(r){return this.changeBit(r,Tt)}function Es(r,l){for(var h=0,d=0,b=Math.min(r.t,this.t);h<b;)d+=this[h]+r[h],l[h++]=d&this.DM,d>>=this.DB;if(r.t<this.t){for(d+=r.s;h<this.t;)d+=this[h],l[h++]=d&this.DM,d>>=this.DB;d+=this.s}else{for(d+=this.s;h<r.t;)d+=r[h],l[h++]=d&this.DM,d>>=this.DB;d+=r.s}l.s=d<0?-1:0,d>0?l[h++]=d:d<-1&&(l[h++]=this.DV+d),l.t=h,l.clamp()}function B(r){var l=f();return this.addTo(r,l),l}function W(r){var l=f();return this.subTo(r,l),l}function nt(r){var l=f();return this.multiplyTo(r,l),l}function ct(){var r=f();return this.squareTo(r),r}function et(r){var l=f();return this.divRemTo(r,l,null),l}function pt(r){var l=f();return this.divRemTo(r,null,l),l}function kt(r){var l=f(),h=f();return this.divRemTo(r,l,h),new Array(l,h)}function ee(r){this[this.t]=this.am(0,r-1,this,0,0,this.t),++this.t,this.clamp()}function xt(r,l){if(r!=0){for(;this.t<=l;)this[this.t++]=0;for(this[l]+=r;this[l]>=this.DV;)this[l]-=this.DV,++l>=this.t&&(this[this.t++]=0),++this[l]}}function Xt(){}function Kt(r){return r}function Ae(r,l,h){r.multiplyTo(l,h)}function Ke(r,l){r.squareTo(l)}Xt.prototype.convert=Kt,Xt.prototype.revert=Kt,Xt.prototype.mulTo=Ae,Xt.prototype.sqrTo=Ke;function We(r){return this.exp(r,new Xt)}function si(r,l,h){var d=Math.min(this.t+r.t,l);for(h.s=0,h.t=d;d>0;)h[--d]=0;var b;for(b=h.t-this.t;d<b;++d)h[d+this.t]=this.am(0,r[d],h,d,0,this.t);for(b=Math.min(r.t,l);d<b;++d)this.am(0,r[d],h,d,0,l-d);h.clamp()}function Ts(r,l,h){--l;var d=h.t=this.t+r.t-l;for(h.s=0;--d>=0;)h[d]=0;for(d=Math.max(l-this.t,0);d<r.t;++d)h[this.t+d-l]=this.am(l-d,r[d],h,0,0,this.t+d-l);h.clamp(),h.drShiftTo(1,h)}function ri(r){this.r2=f(),this.q3=f(),u.ONE.dlShiftTo(2*r.t,this.r2),this.mu=this.r2.divide(r),this.m=r}function Ac(r){if(r.s<0||r.t>2*this.m.t)return r.mod(this.m);if(r.compareTo(this.m)<0)return r;var l=f();return r.copyTo(l),this.reduce(l),l}function Pc(r){return r}function qo(r){for(r.drShiftTo(this.m.t-1,this.r2),r.t>this.m.t+1&&(r.t=this.m.t+1,r.clamp()),this.mu.multiplyUpperTo(this.r2,this.m.t+1,this.q3),this.m.multiplyLowerTo(this.q3,this.m.t+1,this.r2);r.compareTo(this.r2)<0;)r.dAddOffset(1,this.m.t+1);for(r.subTo(this.r2,r);r.compareTo(this.m)>=0;)r.subTo(this.m,r)}function O(r,l){r.squareTo(l),this.reduce(l)}function Z(r,l,h){r.multiplyTo(l,h),this.reduce(h)}ri.prototype.convert=Ac,ri.prototype.revert=Pc,ri.prototype.reduce=qo,ri.prototype.mulTo=Z,ri.prototype.sqrTo=O;function lt(r,l){var h=r.bitLength(),d,b=E(1),P;if(h<=0)return b;h<18?d=1:h<48?d=3:h<144?d=4:h<768?d=5:d=6,h<8?P=new de(l):l.isEven()?P=new ri(l):P=new Ot(l);var F=new Array,X=3,Y=d-1,Q=(1<<d)-1;if(F[1]=P.convert(this),d>1){var yt=f();for(P.sqrTo(F[1],yt);X<=Q;)F[X]=f(),P.mulTo(yt,F[X-2],F[X]),X+=2}var gt=r.t-1,Mt,Jt=!0,oe=f(),ye;for(h=k(r[gt])-1;gt>=0;){for(h>=Y?Mt=r[gt]>>h-Y&Q:(Mt=(r[gt]&(1<<h+1)-1)<<Y-h,gt>0&&(Mt|=r[gt-1]>>this.DB+h-Y)),X=d;(Mt&1)==0;)Mt>>=1,--X;if((h-=X)<0&&(h+=this.DB,--gt),Jt)F[Mt].copyTo(b),Jt=!1;else{for(;X>1;)P.sqrTo(b,oe),P.sqrTo(oe,b),X-=2;X>0?P.sqrTo(b,oe):(ye=b,b=oe,oe=ye),P.mulTo(oe,F[Mt],b)}for(;gt>=0&&(r[gt]&1<<h)==0;)P.sqrTo(b,oe),ye=b,b=oe,oe=ye,--h<0&&(h=this.DB-1,--gt)}return P.revert(b)}function rt(r){var l=this.s<0?this.negate():this.clone(),h=r.s<0?r.negate():r.clone();if(l.compareTo(h)<0){var d=l;l=h,h=d}var b=l.getLowestSetBit(),P=h.getLowestSetBit();if(P<0)return l;for(b<P&&(P=b),P>0&&(l.rShiftTo(P,l),h.rShiftTo(P,h));l.signum()>0;)(b=l.getLowestSetBit())>0&&l.rShiftTo(b,l),(b=h.getLowestSetBit())>0&&h.rShiftTo(b,h),l.compareTo(h)>=0?(l.subTo(h,l),l.rShiftTo(1,l)):(h.subTo(l,h),h.rShiftTo(1,h));return P>0&&h.lShiftTo(P,h),h}function ot(r){if(r<=0)return 0;var l=this.DV%r,h=this.s<0?r-1:0;if(this.t>0)if(l==0)h=this[0]%r;else for(var d=this.t-1;d>=0;--d)h=(l*h+this[d])%r;return h}function Ut(r){var l=r.isEven();if(this.isEven()&&l||r.signum()==0)return u.ZERO;for(var h=r.clone(),d=this.clone(),b=E(1),P=E(0),F=E(0),X=E(1);h.signum()!=0;){for(;h.isEven();)h.rShiftTo(1,h),l?((!b.isEven()||!P.isEven())&&(b.addTo(this,b),P.subTo(r,P)),b.rShiftTo(1,b)):P.isEven()||P.subTo(r,P),P.rShiftTo(1,P);for(;d.isEven();)d.rShiftTo(1,d),l?((!F.isEven()||!X.isEven())&&(F.addTo(this,F),X.subTo(r,X)),F.rShiftTo(1,F)):X.isEven()||X.subTo(r,X),X.rShiftTo(1,X);h.compareTo(d)>=0?(h.subTo(d,h),l&&b.subTo(F,b),P.subTo(X,P)):(d.subTo(h,d),l&&F.subTo(b,F),X.subTo(P,X))}if(d.compareTo(u.ONE)!=0)return u.ZERO;if(X.compareTo(r)>=0)return X.subtract(r);if(X.signum()<0)X.addTo(r,X);else return X;return X.signum()<0?X.add(r):X}var Pt=[2,3,5,7,11,13,17,19,23,29,31,37,41,43,47,53,59,61,67,71,73,79,83,89,97,101,103,107,109,113,127,131,137,139,149,151,157,163,167,173,179,181,191,193,197,199,211,223,227,229,233,239,241,251,257,263,269,271,277,281,283,293,307,311,313,317,331,337,347,349,353,359,367,373,379,383,389,397,401,409,419,421,431,433,439,443,449,457,461,463,467,479,487,491,499,503,509,521,523,541,547,557,563,569,571,577,587,593,599,601,607,613,617,619,631,641,643,647,653,659,661,673,677,683,691,701,709,719,727,733,739,743,751,757,761,769,773,787,797,809,811,821,823,827,829,839,853,857,859,863,877,881,883,887,907,911,919,929,937,941,947,953,967,971,977,983,991,997],Ft=(1<<26)/Pt[Pt.length-1];function Wt(r){var l,h=this.abs();if(h.t==1&&h[0]<=Pt[Pt.length-1]){for(l=0;l<Pt.length;++l)if(h[0]==Pt[l])return!0;return!1}if(h.isEven())return!1;for(l=1;l<Pt.length;){for(var d=Pt[l],b=l+1;b<Pt.length&&d<Ft;)d*=Pt[b++];for(d=h.modInt(d);l<b;)if(d%Pt[l++]==0)return!1}return h.millerRabin(r)}function $t(r){var l=this.subtract(u.ONE),h=l.getLowestSetBit();if(h<=0)return!1;var d=l.shiftRight(h);r=r+1>>1,r>Pt.length&&(r=Pt.length);for(var b=f(),P=0;P<r;++P){b.fromInt(Pt[Math.floor(Math.random()*Pt.length)]);var F=b.modPow(d,this);if(F.compareTo(u.ONE)!=0&&F.compareTo(l)!=0){for(var X=1;X++<h&&F.compareTo(l)!=0;)if(F=F.modPowInt(2,this),F.compareTo(u.ONE)==0)return!1;if(F.compareTo(l)!=0)return!1}}return!0}u.prototype.chunkSize=je,u.prototype.toRadix=I,u.prototype.fromRadix=R,u.prototype.fromNumber=tt,u.prototype.bitwiseTo=ut,u.prototype.changeBit=Te,u.prototype.addTo=Es,u.prototype.dMultiply=ee,u.prototype.dAddOffset=xt,u.prototype.multiplyLowerTo=si,u.prototype.multiplyUpperTo=Ts,u.prototype.modInt=ot,u.prototype.millerRabin=$t,u.prototype.clone=ln,u.prototype.intValue=Fe,u.prototype.byteValue=Xe,u.prototype.shortValue=j,u.prototype.signum=we,u.prototype.toByteArray=at,u.prototype.equals=dt,u.prototype.min=St,u.prototype.max=wt,u.prototype.and=Et,u.prototype.or=Lt,u.prototype.xor=Ht,u.prototype.andNot=re,u.prototype.not=J,u.prototype.shiftLeft=Ct,u.prototype.shiftRight=mt,u.prototype.getLowestSetBit=It,u.prototype.bitCount=qt,u.prototype.testBit=Dt,u.prototype.setBit=Se,u.prototype.clearBit=bn,u.prototype.flipBit=An,u.prototype.add=B,u.prototype.subtract=W,u.prototype.multiply=nt,u.prototype.divide=et,u.prototype.remainder=pt,u.prototype.divideAndRemainder=kt,u.prototype.modPow=lt,u.prototype.modInverse=Ut,u.prototype.pow=We,u.prototype.gcd=rt,u.prototype.isProbablePrime=Wt,u.prototype.square=ct;var Nt=u;Nt.prototype.IsNegative=function(){return this.compareTo(Nt.ZERO)==-1},Nt.op_Equality=function(r,l){return r.compareTo(l)==0},Nt.op_Inequality=function(r,l){return r.compareTo(l)!=0},Nt.op_GreaterThan=function(r,l){return r.compareTo(l)>0},Nt.op_LessThan=function(r,l){return r.compareTo(l)<0},Nt.op_Addition=function(r,l){return new Nt(r,void 0,void 0).add(new Nt(l,void 0,void 0))},Nt.op_Subtraction=function(r,l){return new Nt(r,void 0,void 0).subtract(new Nt(l,void 0,void 0))},Nt.Int128Mul=function(r,l){return new Nt(r,void 0,void 0).multiply(new Nt(l,void 0,void 0))},Nt.op_Division=function(r,l){return r.divide(l)},Nt.prototype.ToDouble=function(){return parseFloat(this.toString())};var xe=function(r,l){var h;if(typeof Object.getOwnPropertyNames>"u"){for(h in l.prototype)(typeof r.prototype[h]>"u"||r.prototype[h]===Object.prototype[h])&&(r.prototype[h]=l.prototype[h]);for(h in l)typeof r[h]>"u"&&(r[h]=l[h]);r.$baseCtor=l}else{for(var d=Object.getOwnPropertyNames(l.prototype),b=0;b<d.length;b++)typeof Object.getOwnPropertyDescriptor(r.prototype,d[b])>"u"&&Object.defineProperty(r.prototype,d[b],Object.getOwnPropertyDescriptor(l.prototype,d[b]));for(h in l)typeof r[h]>"u"&&(r[h]=l[h]);r.$baseCtor=l}};n.Path=function(){return[]},n.Path.prototype.push=Array.prototype.push,n.Paths=function(){return[]},n.Paths.prototype.push=Array.prototype.push,n.DoublePoint=function(){var r=arguments;this.X=0,this.Y=0,r.length===1?(this.X=r[0].X,this.Y=r[0].Y):r.length===2&&(this.X=r[0],this.Y=r[1])},n.DoublePoint0=function(){this.X=0,this.Y=0},n.DoublePoint0.prototype=n.DoublePoint.prototype,n.DoublePoint1=function(r){this.X=r.X,this.Y=r.Y},n.DoublePoint1.prototype=n.DoublePoint.prototype,n.DoublePoint2=function(r,l){this.X=r,this.Y=l},n.DoublePoint2.prototype=n.DoublePoint.prototype,n.PolyNode=function(){this.m_Parent=null,this.m_polygon=new n.Path,this.m_Index=0,this.m_jointype=0,this.m_endtype=0,this.m_Childs=[],this.IsOpen=!1},n.PolyNode.prototype.IsHoleNode=function(){for(var r=!0,l=this.m_Parent;l!==null;)r=!r,l=l.m_Parent;return r},n.PolyNode.prototype.ChildCount=function(){return this.m_Childs.length},n.PolyNode.prototype.Contour=function(){return this.m_polygon},n.PolyNode.prototype.AddChild=function(r){var l=this.m_Childs.length;this.m_Childs.push(r),r.m_Parent=this,r.m_Index=l},n.PolyNode.prototype.GetNext=function(){return this.m_Childs.length>0?this.m_Childs[0]:this.GetNextSiblingUp()},n.PolyNode.prototype.GetNextSiblingUp=function(){return this.m_Parent===null?null:this.m_Index===this.m_Parent.m_Childs.length-1?this.m_Parent.GetNextSiblingUp():this.m_Parent.m_Childs[this.m_Index+1]},n.PolyNode.prototype.Childs=function(){return this.m_Childs},n.PolyNode.prototype.Parent=function(){return this.m_Parent},n.PolyNode.prototype.IsHole=function(){return this.IsHoleNode()},n.PolyTree=function(){this.m_AllPolys=[],n.PolyNode.call(this)},n.PolyTree.prototype.Clear=function(){for(var r=0,l=this.m_AllPolys.length;r<l;r++)this.m_AllPolys[r]=null;this.m_AllPolys.length=0,this.m_Childs.length=0},n.PolyTree.prototype.GetFirst=function(){return this.m_Childs.length>0?this.m_Childs[0]:null},n.PolyTree.prototype.Total=function(){var r=this.m_AllPolys.length;return r>0&&this.m_Childs[0]!==this.m_AllPolys[0]&&r--,r},xe(n.PolyTree,n.PolyNode),n.Math_Abs_Int64=n.Math_Abs_Int32=n.Math_Abs_Double=function(r){return Math.abs(r)},n.Math_Max_Int32_Int32=function(r,l){return Math.max(r,l)},s.msie||s.opera||s.safari?n.Cast_Int32=function(r){return r|0}:n.Cast_Int32=function(r){return~~r},typeof Number.toInteger>"u"&&(Number.toInteger=null),s.chrome?n.Cast_Int64=function(r){return r<-2147483648||r>2147483647?r<0?Math.ceil(r):Math.floor(r):~~r}:s.firefox&&typeof Number.toInteger=="function"?n.Cast_Int64=function(r){return Number.toInteger(r)}:s.msie7||s.msie8?n.Cast_Int64=function(r){return parseInt(r,10)}:s.msie?n.Cast_Int64=function(r){return r<-2147483648||r>2147483647?r<0?Math.ceil(r):Math.floor(r):r|0}:n.Cast_Int64=function(r){return r<0?Math.ceil(r):Math.floor(r)},n.Clear=function(r){r.length=0},n.PI=3.141592653589793,n.PI2=2*3.141592653589793,n.IntPoint=function(){var r=arguments,l=r.length;if(this.X=0,this.Y=0,n.use_xyz)if(this.Z=0,l===3)this.X=r[0],this.Y=r[1],this.Z=r[2];else if(l===2)this.X=r[0],this.Y=r[1],this.Z=0;else if(l===1)if(r[0]instanceof n.DoublePoint){var h=r[0];this.X=n.Clipper.Round(h.X),this.Y=n.Clipper.Round(h.Y),this.Z=0}else{var d=r[0];typeof d.Z>"u"&&(d.Z=0),this.X=d.X,this.Y=d.Y,this.Z=d.Z}else this.X=0,this.Y=0,this.Z=0;else if(l===2)this.X=r[0],this.Y=r[1];else if(l===1)if(r[0]instanceof n.DoublePoint){var h=r[0];this.X=n.Clipper.Round(h.X),this.Y=n.Clipper.Round(h.Y)}else{var d=r[0];this.X=d.X,this.Y=d.Y}else this.X=0,this.Y=0},n.IntPoint.op_Equality=function(r,l){return r.X===l.X&&r.Y===l.Y},n.IntPoint.op_Inequality=function(r,l){return r.X!==l.X||r.Y!==l.Y},n.IntPoint0=function(){this.X=0,this.Y=0,n.use_xyz&&(this.Z=0)},n.IntPoint0.prototype=n.IntPoint.prototype,n.IntPoint1=function(r){this.X=r.X,this.Y=r.Y,n.use_xyz&&(typeof r.Z>"u"?this.Z=0:this.Z=r.Z)},n.IntPoint1.prototype=n.IntPoint.prototype,n.IntPoint1dp=function(r){this.X=n.Clipper.Round(r.X),this.Y=n.Clipper.Round(r.Y),n.use_xyz&&(this.Z=0)},n.IntPoint1dp.prototype=n.IntPoint.prototype,n.IntPoint2=function(r,l,h){this.X=r,this.Y=l,n.use_xyz&&(typeof h>"u"?this.Z=0:this.Z=h)},n.IntPoint2.prototype=n.IntPoint.prototype,n.IntRect=function(){var r=arguments,l=r.length;if(l===4)this.left=r[0],this.top=r[1],this.right=r[2],this.bottom=r[3];else if(l===1){var h=r[0];this.left=h.left,this.top=h.top,this.right=h.right,this.bottom=h.bottom}else this.left=0,this.top=0,this.right=0,this.bottom=0},n.IntRect0=function(){this.left=0,this.top=0,this.right=0,this.bottom=0},n.IntRect0.prototype=n.IntRect.prototype,n.IntRect1=function(r){this.left=r.left,this.top=r.top,this.right=r.right,this.bottom=r.bottom},n.IntRect1.prototype=n.IntRect.prototype,n.IntRect4=function(r,l,h,d){this.left=r,this.top=l,this.right=h,this.bottom=d},n.IntRect4.prototype=n.IntRect.prototype,n.ClipType={ctIntersection:0,ctUnion:1,ctDifference:2,ctXor:3},n.PolyType={ptSubject:0,ptClip:1},n.PolyFillType={pftEvenOdd:0,pftNonZero:1,pftPositive:2,pftNegative:3},n.JoinType={jtSquare:0,jtRound:1,jtMiter:2},n.EndType={etOpenSquare:0,etOpenRound:1,etOpenButt:2,etClosedLine:3,etClosedPolygon:4},n.EdgeSide={esLeft:0,esRight:1},n.Direction={dRightToLeft:0,dLeftToRight:1},n.TEdge=function(){this.Bot=new n.IntPoint0,this.Curr=new n.IntPoint0,this.Top=new n.IntPoint0,this.Delta=new n.IntPoint0,this.Dx=0,this.PolyTyp=n.PolyType.ptSubject,this.Side=n.EdgeSide.esLeft,this.WindDelta=0,this.WindCnt=0,this.WindCnt2=0,this.OutIdx=0,this.Next=null,this.Prev=null,this.NextInLML=null,this.NextInAEL=null,this.PrevInAEL=null,this.NextInSEL=null,this.PrevInSEL=null},n.IntersectNode=function(){this.Edge1=null,this.Edge2=null,this.Pt=new n.IntPoint0},n.MyIntersectNodeSort=function(){},n.MyIntersectNodeSort.Compare=function(r,l){var h=l.Pt.Y-r.Pt.Y;return h>0?1:h<0?-1:0},n.LocalMinima=function(){this.Y=0,this.LeftBound=null,this.RightBound=null,this.Next=null},n.Scanbeam=function(){this.Y=0,this.Next=null},n.Maxima=function(){this.X=0,this.Next=null,this.Prev=null},n.OutRec=function(){this.Idx=0,this.IsHole=!1,this.IsOpen=!1,this.FirstLeft=null,this.Pts=null,this.BottomPt=null,this.PolyNode=null},n.OutPt=function(){this.Idx=0,this.Pt=new n.IntPoint0,this.Next=null,this.Prev=null},n.Join=function(){this.OutPt1=null,this.OutPt2=null,this.OffPt=new n.IntPoint0},n.ClipperBase=function(){this.m_MinimaList=null,this.m_CurrentLM=null,this.m_edges=new Array,this.m_UseFullRange=!1,this.m_HasOpenPaths=!1,this.PreserveCollinear=!1,this.m_Scanbeam=null,this.m_PolyOuts=null,this.m_ActiveEdges=null},n.ClipperBase.horizontal=-9007199254740992,n.ClipperBase.Skip=-2,n.ClipperBase.Unassigned=-1,n.ClipperBase.tolerance=1e-20,n.ClipperBase.loRange=47453132,n.ClipperBase.hiRange=0xfffffffffffff,n.ClipperBase.near_zero=function(r){return r>-n.ClipperBase.tolerance&&r<n.ClipperBase.tolerance},n.ClipperBase.IsHorizontal=function(r){return r.Delta.Y===0},n.ClipperBase.prototype.PointIsVertex=function(r,l){var h=l;do{if(n.IntPoint.op_Equality(h.Pt,r))return!0;h=h.Next}while(h!==l);return!1},n.ClipperBase.prototype.PointOnLineSegment=function(r,l,h,d){return d?r.X===l.X&&r.Y===l.Y||r.X===h.X&&r.Y===h.Y||r.X>l.X==r.X<h.X&&r.Y>l.Y==r.Y<h.Y&&Nt.op_Equality(Nt.Int128Mul(r.X-l.X,h.Y-l.Y),Nt.Int128Mul(h.X-l.X,r.Y-l.Y)):r.X===l.X&&r.Y===l.Y||r.X===h.X&&r.Y===h.Y||r.X>l.X==r.X<h.X&&r.Y>l.Y==r.Y<h.Y&&(r.X-l.X)*(h.Y-l.Y)===(h.X-l.X)*(r.Y-l.Y)},n.ClipperBase.prototype.PointOnPolygon=function(r,l,h){for(var d=l;;){if(this.PointOnLineSegment(r,d.Pt,d.Next.Pt,h))return!0;if(d=d.Next,d===l)break}return!1},n.ClipperBase.prototype.SlopesEqual=n.ClipperBase.SlopesEqual=function(){var r=arguments,l=r.length,h,d,b,P,F,X,Y;return l===3?(h=r[0],d=r[1],Y=r[2],Y?Nt.op_Equality(Nt.Int128Mul(h.Delta.Y,d.Delta.X),Nt.Int128Mul(h.Delta.X,d.Delta.Y)):n.Cast_Int64(h.Delta.Y*d.Delta.X)===n.Cast_Int64(h.Delta.X*d.Delta.Y)):l===4?(b=r[0],P=r[1],F=r[2],Y=r[3],Y?Nt.op_Equality(Nt.Int128Mul(b.Y-P.Y,P.X-F.X),Nt.Int128Mul(b.X-P.X,P.Y-F.Y)):n.Cast_Int64((b.Y-P.Y)*(P.X-F.X))-n.Cast_Int64((b.X-P.X)*(P.Y-F.Y))===0):(b=r[0],P=r[1],F=r[2],X=r[3],Y=r[4],Y?Nt.op_Equality(Nt.Int128Mul(b.Y-P.Y,F.X-X.X),Nt.Int128Mul(b.X-P.X,F.Y-X.Y)):n.Cast_Int64((b.Y-P.Y)*(F.X-X.X))-n.Cast_Int64((b.X-P.X)*(F.Y-X.Y))===0)},n.ClipperBase.SlopesEqual3=function(r,l,h){return h?Nt.op_Equality(Nt.Int128Mul(r.Delta.Y,l.Delta.X),Nt.Int128Mul(r.Delta.X,l.Delta.Y)):n.Cast_Int64(r.Delta.Y*l.Delta.X)===n.Cast_Int64(r.Delta.X*l.Delta.Y)},n.ClipperBase.SlopesEqual4=function(r,l,h,d){return d?Nt.op_Equality(Nt.Int128Mul(r.Y-l.Y,l.X-h.X),Nt.Int128Mul(r.X-l.X,l.Y-h.Y)):n.Cast_Int64((r.Y-l.Y)*(l.X-h.X))-n.Cast_Int64((r.X-l.X)*(l.Y-h.Y))===0},n.ClipperBase.SlopesEqual5=function(r,l,h,d,b){return b?Nt.op_Equality(Nt.Int128Mul(r.Y-l.Y,h.X-d.X),Nt.Int128Mul(r.X-l.X,h.Y-d.Y)):n.Cast_Int64((r.Y-l.Y)*(h.X-d.X))-n.Cast_Int64((r.X-l.X)*(h.Y-d.Y))===0},n.ClipperBase.prototype.Clear=function(){this.DisposeLocalMinimaList();for(var r=0,l=this.m_edges.length;r<l;++r){for(var h=0,d=this.m_edges[r].length;h<d;++h)this.m_edges[r][h]=null;n.Clear(this.m_edges[r])}n.Clear(this.m_edges),this.m_UseFullRange=!1,this.m_HasOpenPaths=!1},n.ClipperBase.prototype.DisposeLocalMinimaList=function(){for(;this.m_MinimaList!==null;){var r=this.m_MinimaList.Next;this.m_MinimaList=null,this.m_MinimaList=r}this.m_CurrentLM=null},n.ClipperBase.prototype.RangeTest=function(r,l){l.Value?(r.X>n.ClipperBase.hiRange||r.Y>n.ClipperBase.hiRange||-r.X>n.ClipperBase.hiRange||-r.Y>n.ClipperBase.hiRange)&&n.Error("Coordinate outside allowed range in RangeTest()."):(r.X>n.ClipperBase.loRange||r.Y>n.ClipperBase.loRange||-r.X>n.ClipperBase.loRange||-r.Y>n.ClipperBase.loRange)&&(l.Value=!0,this.RangeTest(r,l))},n.ClipperBase.prototype.InitEdge=function(r,l,h,d){r.Next=l,r.Prev=h,r.Curr.X=d.X,r.Curr.Y=d.Y,n.use_xyz&&(r.Curr.Z=d.Z),r.OutIdx=-1},n.ClipperBase.prototype.InitEdge2=function(r,l){r.Curr.Y>=r.Next.Curr.Y?(r.Bot.X=r.Curr.X,r.Bot.Y=r.Curr.Y,n.use_xyz&&(r.Bot.Z=r.Curr.Z),r.Top.X=r.Next.Curr.X,r.Top.Y=r.Next.Curr.Y,n.use_xyz&&(r.Top.Z=r.Next.Curr.Z)):(r.Top.X=r.Curr.X,r.Top.Y=r.Curr.Y,n.use_xyz&&(r.Top.Z=r.Curr.Z),r.Bot.X=r.Next.Curr.X,r.Bot.Y=r.Next.Curr.Y,n.use_xyz&&(r.Bot.Z=r.Next.Curr.Z)),this.SetDx(r),r.PolyTyp=l},n.ClipperBase.prototype.FindNextLocMin=function(r){for(var l;;){for(;n.IntPoint.op_Inequality(r.Bot,r.Prev.Bot)||n.IntPoint.op_Equality(r.Curr,r.Top);)r=r.Next;if(r.Dx!==n.ClipperBase.horizontal&&r.Prev.Dx!==n.ClipperBase.horizontal)break;for(;r.Prev.Dx===n.ClipperBase.horizontal;)r=r.Prev;for(l=r;r.Dx===n.ClipperBase.horizontal;)r=r.Next;if(r.Top.Y!==r.Prev.Bot.Y){l.Prev.Bot.X<r.Bot.X&&(r=l);break}}return r},n.ClipperBase.prototype.ProcessBound=function(r,l){var h,d=r,b;if(d.OutIdx===n.ClipperBase.Skip){if(r=d,l){for(;r.Top.Y===r.Next.Bot.Y;)r=r.Next;for(;r!==d&&r.Dx===n.ClipperBase.horizontal;)r=r.Prev}else{for(;r.Top.Y===r.Prev.Bot.Y;)r=r.Prev;for(;r!==d&&r.Dx===n.ClipperBase.horizontal;)r=r.Next}if(r===d)l?d=r.Next:d=r.Prev;else{l?r=d.Next:r=d.Prev;var P=new n.LocalMinima;P.Next=null,P.Y=r.Bot.Y,P.LeftBound=null,P.RightBound=r,r.WindDelta=0,d=this.ProcessBound(r,l),this.InsertLocalMinima(P)}return d}if(r.Dx===n.ClipperBase.horizontal&&(l?h=r.Prev:h=r.Next,h.Dx===n.ClipperBase.horizontal?h.Bot.X!==r.Bot.X&&h.Top.X!==r.Bot.X&&this.ReverseHorizontal(r):h.Bot.X!==r.Bot.X&&this.ReverseHorizontal(r)),h=r,l){for(;d.Top.Y===d.Next.Bot.Y&&d.Next.OutIdx!==n.ClipperBase.Skip;)d=d.Next;if(d.Dx===n.ClipperBase.horizontal&&d.Next.OutIdx!==n.ClipperBase.Skip){for(b=d;b.Prev.Dx===n.ClipperBase.horizontal;)b=b.Prev;b.Prev.Top.X>d.Next.Top.X&&(d=b.Prev)}for(;r!==d;)r.NextInLML=r.Next,r.Dx===n.ClipperBase.horizontal&&r!==h&&r.Bot.X!==r.Prev.Top.X&&this.ReverseHorizontal(r),r=r.Next;r.Dx===n.ClipperBase.horizontal&&r!==h&&r.Bot.X!==r.Prev.Top.X&&this.ReverseHorizontal(r),d=d.Next}else{for(;d.Top.Y===d.Prev.Bot.Y&&d.Prev.OutIdx!==n.ClipperBase.Skip;)d=d.Prev;if(d.Dx===n.ClipperBase.horizontal&&d.Prev.OutIdx!==n.ClipperBase.Skip){for(b=d;b.Next.Dx===n.ClipperBase.horizontal;)b=b.Next;(b.Next.Top.X===d.Prev.Top.X||b.Next.Top.X>d.Prev.Top.X)&&(d=b.Next)}for(;r!==d;)r.NextInLML=r.Prev,r.Dx===n.ClipperBase.horizontal&&r!==h&&r.Bot.X!==r.Next.Top.X&&this.ReverseHorizontal(r),r=r.Prev;r.Dx===n.ClipperBase.horizontal&&r!==h&&r.Bot.X!==r.Next.Top.X&&this.ReverseHorizontal(r),d=d.Prev}return d},n.ClipperBase.prototype.AddPath=function(r,l,h){n.use_lines?!h&&l===n.PolyType.ptClip&&n.Error("AddPath: Open paths must be subject."):h||n.Error("AddPath: Open paths have been disabled.");var d=r.length-1;if(h)for(;d>0&&n.IntPoint.op_Equality(r[d],r[0]);)--d;for(;d>0&&n.IntPoint.op_Equality(r[d],r[d-1]);)--d;if(h&&d<2||!h&&d<1)return!1;for(var b=new Array,P=0;P<=d;P++)b.push(new n.TEdge);var F=!0;b[1].Curr.X=r[1].X,b[1].Curr.Y=r[1].Y,n.use_xyz&&(b[1].Curr.Z=r[1].Z);var X={Value:this.m_UseFullRange};this.RangeTest(r[0],X),this.m_UseFullRange=X.Value,X.Value=this.m_UseFullRange,this.RangeTest(r[d],X),this.m_UseFullRange=X.Value,this.InitEdge(b[0],b[1],b[d],r[0]),this.InitEdge(b[d],b[0],b[d-1],r[d]);for(var P=d-1;P>=1;--P)X.Value=this.m_UseFullRange,this.RangeTest(r[P],X),this.m_UseFullRange=X.Value,this.InitEdge(b[P],b[P+1],b[P-1],r[P]);for(var Y=b[0],Q=Y,yt=Y;;){if(Q.Curr===Q.Next.Curr&&(h||Q.Next!==Y)){if(Q===Q.Next)break;Q===Y&&(Y=Q.Next),Q=this.RemoveEdge(Q),yt=Q;continue}if(Q.Prev===Q.Next)break;if(h&&n.ClipperBase.SlopesEqual4(Q.Prev.Curr,Q.Curr,Q.Next.Curr,this.m_UseFullRange)&&(!this.PreserveCollinear||!this.Pt2IsBetweenPt1AndPt3(Q.Prev.Curr,Q.Curr,Q.Next.Curr))){Q===Y&&(Y=Q.Next),Q=this.RemoveEdge(Q),Q=Q.Prev,yt=Q;continue}if(Q=Q.Next,Q===yt||!h&&Q.Next===Y)break}if(!h&&Q===Q.Next||h&&Q.Prev===Q.Next)return!1;h||(this.m_HasOpenPaths=!0,Y.Prev.OutIdx=n.ClipperBase.Skip),Q=Y;do this.InitEdge2(Q,l),Q=Q.Next,F&&Q.Curr.Y!==Y.Curr.Y&&(F=!1);while(Q!==Y);if(F){if(h)return!1;Q.Prev.OutIdx=n.ClipperBase.Skip;var gt=new n.LocalMinima;for(gt.Next=null,gt.Y=Q.Bot.Y,gt.LeftBound=null,gt.RightBound=Q,gt.RightBound.Side=n.EdgeSide.esRight,gt.RightBound.WindDelta=0;Q.Bot.X!==Q.Prev.Top.X&&this.ReverseHorizontal(Q),Q.Next.OutIdx!==n.ClipperBase.Skip;)Q.NextInLML=Q.Next,Q=Q.Next;return this.InsertLocalMinima(gt),this.m_edges.push(b),!0}this.m_edges.push(b);var Mt,Jt=null;for(n.IntPoint.op_Equality(Q.Prev.Bot,Q.Prev.Top)&&(Q=Q.Next);Q=this.FindNextLocMin(Q),Q!==Jt;){Jt===null&&(Jt=Q);var gt=new n.LocalMinima;gt.Next=null,gt.Y=Q.Bot.Y,Q.Dx<Q.Prev.Dx?(gt.LeftBound=Q.Prev,gt.RightBound=Q,Mt=!1):(gt.LeftBound=Q,gt.RightBound=Q.Prev,Mt=!0),gt.LeftBound.Side=n.EdgeSide.esLeft,gt.RightBound.Side=n.EdgeSide.esRight,h?gt.LeftBound.Next===gt.RightBound?gt.LeftBound.WindDelta=-1:gt.LeftBound.WindDelta=1:gt.LeftBound.WindDelta=0,gt.RightBound.WindDelta=-gt.LeftBound.WindDelta,Q=this.ProcessBound(gt.LeftBound,Mt),Q.OutIdx===n.ClipperBase.Skip&&(Q=this.ProcessBound(Q,Mt));var oe=this.ProcessBound(gt.RightBound,!Mt);oe.OutIdx===n.ClipperBase.Skip&&(oe=this.ProcessBound(oe,!Mt)),gt.LeftBound.OutIdx===n.ClipperBase.Skip?gt.LeftBound=null:gt.RightBound.OutIdx===n.ClipperBase.Skip&&(gt.RightBound=null),this.InsertLocalMinima(gt),Mt||(Q=oe)}return!0},n.ClipperBase.prototype.AddPaths=function(r,l,h){for(var d=!1,b=0,P=r.length;b<P;++b)this.AddPath(r[b],l,h)&&(d=!0);return d},n.ClipperBase.prototype.Pt2IsBetweenPt1AndPt3=function(r,l,h){return n.IntPoint.op_Equality(r,h)||n.IntPoint.op_Equality(r,l)||n.IntPoint.op_Equality(h,l)?!1:r.X!==h.X?l.X>r.X==l.X<h.X:l.Y>r.Y==l.Y<h.Y},n.ClipperBase.prototype.RemoveEdge=function(r){r.Prev.Next=r.Next,r.Next.Prev=r.Prev;var l=r.Next;return r.Prev=null,l},n.ClipperBase.prototype.SetDx=function(r){r.Delta.X=r.Top.X-r.Bot.X,r.Delta.Y=r.Top.Y-r.Bot.Y,r.Delta.Y===0?r.Dx=n.ClipperBase.horizontal:r.Dx=r.Delta.X/r.Delta.Y},n.ClipperBase.prototype.InsertLocalMinima=function(r){if(this.m_MinimaList===null)this.m_MinimaList=r;else if(r.Y>=this.m_MinimaList.Y)r.Next=this.m_MinimaList,this.m_MinimaList=r;else{for(var l=this.m_MinimaList;l.Next!==null&&r.Y<l.Next.Y;)l=l.Next;r.Next=l.Next,l.Next=r}},n.ClipperBase.prototype.PopLocalMinima=function(r,l){return l.v=this.m_CurrentLM,this.m_CurrentLM!==null&&this.m_CurrentLM.Y===r?(this.m_CurrentLM=this.m_CurrentLM.Next,!0):!1},n.ClipperBase.prototype.ReverseHorizontal=function(r){var l=r.Top.X;r.Top.X=r.Bot.X,r.Bot.X=l,n.use_xyz&&(l=r.Top.Z,r.Top.Z=r.Bot.Z,r.Bot.Z=l)},n.ClipperBase.prototype.Reset=function(){if(this.m_CurrentLM=this.m_MinimaList,this.m_CurrentLM!==null){this.m_Scanbeam=null;for(var r=this.m_MinimaList;r!==null;){this.InsertScanbeam(r.Y);var l=r.LeftBound;l!==null&&(l.Curr.X=l.Bot.X,l.Curr.Y=l.Bot.Y,n.use_xyz&&(l.Curr.Z=l.Bot.Z),l.OutIdx=n.ClipperBase.Unassigned),l=r.RightBound,l!==null&&(l.Curr.X=l.Bot.X,l.Curr.Y=l.Bot.Y,n.use_xyz&&(l.Curr.Z=l.Bot.Z),l.OutIdx=n.ClipperBase.Unassigned),r=r.Next}this.m_ActiveEdges=null}},n.ClipperBase.prototype.InsertScanbeam=function(r){if(this.m_Scanbeam===null)this.m_Scanbeam=new n.Scanbeam,this.m_Scanbeam.Next=null,this.m_Scanbeam.Y=r;else if(r>this.m_Scanbeam.Y){var l=new n.Scanbeam;l.Y=r,l.Next=this.m_Scanbeam,this.m_Scanbeam=l}else{for(var h=this.m_Scanbeam;h.Next!==null&&r<=h.Next.Y;)h=h.Next;if(r===h.Y)return;var d=new n.Scanbeam;d.Y=r,d.Next=h.Next,h.Next=d}},n.ClipperBase.prototype.PopScanbeam=function(r){return this.m_Scanbeam===null?(r.v=0,!1):(r.v=this.m_Scanbeam.Y,this.m_Scanbeam=this.m_Scanbeam.Next,!0)},n.ClipperBase.prototype.LocalMinimaPending=function(){return this.m_CurrentLM!==null},n.ClipperBase.prototype.CreateOutRec=function(){var r=new n.OutRec;return r.Idx=n.ClipperBase.Unassigned,r.IsHole=!1,r.IsOpen=!1,r.FirstLeft=null,r.Pts=null,r.BottomPt=null,r.PolyNode=null,this.m_PolyOuts.push(r),r.Idx=this.m_PolyOuts.length-1,r},n.ClipperBase.prototype.DisposeOutRec=function(r){var l=this.m_PolyOuts[r];l.Pts=null,l=null,this.m_PolyOuts[r]=null},n.ClipperBase.prototype.UpdateEdgeIntoAEL=function(r){r.NextInLML===null&&n.Error("UpdateEdgeIntoAEL: invalid call");var l=r.PrevInAEL,h=r.NextInAEL;return r.NextInLML.OutIdx=r.OutIdx,l!==null?l.NextInAEL=r.NextInLML:this.m_ActiveEdges=r.NextInLML,h!==null&&(h.PrevInAEL=r.NextInLML),r.NextInLML.Side=r.Side,r.NextInLML.WindDelta=r.WindDelta,r.NextInLML.WindCnt=r.WindCnt,r.NextInLML.WindCnt2=r.WindCnt2,r=r.NextInLML,r.Curr.X=r.Bot.X,r.Curr.Y=r.Bot.Y,r.PrevInAEL=l,r.NextInAEL=h,n.ClipperBase.IsHorizontal(r)||this.InsertScanbeam(r.Top.Y),r},n.ClipperBase.prototype.SwapPositionsInAEL=function(r,l){if(!(r.NextInAEL===r.PrevInAEL||l.NextInAEL===l.PrevInAEL)){if(r.NextInAEL===l){var h=l.NextInAEL;h!==null&&(h.PrevInAEL=r);var d=r.PrevInAEL;d!==null&&(d.NextInAEL=l),l.PrevInAEL=d,l.NextInAEL=r,r.PrevInAEL=l,r.NextInAEL=h}else if(l.NextInAEL===r){var b=r.NextInAEL;b!==null&&(b.PrevInAEL=l);var P=l.PrevInAEL;P!==null&&(P.NextInAEL=r),r.PrevInAEL=P,r.NextInAEL=l,l.PrevInAEL=r,l.NextInAEL=b}else{var F=r.NextInAEL,X=r.PrevInAEL;r.NextInAEL=l.NextInAEL,r.NextInAEL!==null&&(r.NextInAEL.PrevInAEL=r),r.PrevInAEL=l.PrevInAEL,r.PrevInAEL!==null&&(r.PrevInAEL.NextInAEL=r),l.NextInAEL=F,l.NextInAEL!==null&&(l.NextInAEL.PrevInAEL=l),l.PrevInAEL=X,l.PrevInAEL!==null&&(l.PrevInAEL.NextInAEL=l)}r.PrevInAEL===null?this.m_ActiveEdges=r:l.PrevInAEL===null&&(this.m_ActiveEdges=l)}},n.ClipperBase.prototype.DeleteFromAEL=function(r){var l=r.PrevInAEL,h=r.NextInAEL;l===null&&h===null&&r!==this.m_ActiveEdges||(l!==null?l.NextInAEL=h:this.m_ActiveEdges=h,h!==null&&(h.PrevInAEL=l),r.NextInAEL=null,r.PrevInAEL=null)},n.Clipper=function(r){typeof r>"u"&&(r=0),this.m_PolyOuts=null,this.m_ClipType=n.ClipType.ctIntersection,this.m_Scanbeam=null,this.m_Maxima=null,this.m_ActiveEdges=null,this.m_SortedEdges=null,this.m_IntersectList=null,this.m_IntersectNodeComparer=null,this.m_ExecuteLocked=!1,this.m_ClipFillType=n.PolyFillType.pftEvenOdd,this.m_SubjFillType=n.PolyFillType.pftEvenOdd,this.m_Joins=null,this.m_GhostJoins=null,this.m_UsingPolyTree=!1,this.ReverseSolution=!1,this.StrictlySimple=!1,n.ClipperBase.call(this),this.m_Scanbeam=null,this.m_Maxima=null,this.m_ActiveEdges=null,this.m_SortedEdges=null,this.m_IntersectList=new Array,this.m_IntersectNodeComparer=n.MyIntersectNodeSort.Compare,this.m_ExecuteLocked=!1,this.m_UsingPolyTree=!1,this.m_PolyOuts=new Array,this.m_Joins=new Array,this.m_GhostJoins=new Array,this.ReverseSolution=(1&r)!==0,this.StrictlySimple=(2&r)!==0,this.PreserveCollinear=(4&r)!==0,n.use_xyz&&(this.ZFillFunction=null)},n.Clipper.ioReverseSolution=1,n.Clipper.ioStrictlySimple=2,n.Clipper.ioPreserveCollinear=4,n.Clipper.prototype.Clear=function(){this.m_edges.length!==0&&(this.DisposeAllPolyPts(),n.ClipperBase.prototype.Clear.call(this))},n.Clipper.prototype.InsertMaxima=function(r){var l=new n.Maxima;if(l.X=r,this.m_Maxima===null)this.m_Maxima=l,this.m_Maxima.Next=null,this.m_Maxima.Prev=null;else if(r<this.m_Maxima.X)l.Next=this.m_Maxima,l.Prev=null,this.m_Maxima=l;else{for(var h=this.m_Maxima;h.Next!==null&&r>=h.Next.X;)h=h.Next;if(r===h.X)return;l.Next=h.Next,l.Prev=h,h.Next!==null&&(h.Next.Prev=l),h.Next=l}},n.Clipper.prototype.Execute=function(){var r=arguments,l=r.length,h=r[1]instanceof n.PolyTree;if(l===4&&!h){var d=r[0],b=r[1],P=r[2],F=r[3];if(this.m_ExecuteLocked)return!1;this.m_HasOpenPaths&&n.Error("Error: PolyTree struct is needed for open path clipping."),this.m_ExecuteLocked=!0,n.Clear(b),this.m_SubjFillType=P,this.m_ClipFillType=F,this.m_ClipType=d,this.m_UsingPolyTree=!1;try{var X=this.ExecuteInternal();X&&this.BuildResult(b)}finally{this.DisposeAllPolyPts(),this.m_ExecuteLocked=!1}return X}else if(l===4&&h){var d=r[0],Y=r[1],P=r[2],F=r[3];if(this.m_ExecuteLocked)return!1;this.m_ExecuteLocked=!0,this.m_SubjFillType=P,this.m_ClipFillType=F,this.m_ClipType=d,this.m_UsingPolyTree=!0;try{var X=this.ExecuteInternal();X&&this.BuildResult2(Y)}finally{this.DisposeAllPolyPts(),this.m_ExecuteLocked=!1}return X}else if(l===2&&!h){var d=r[0],b=r[1];return this.Execute(d,b,n.PolyFillType.pftEvenOdd,n.PolyFillType.pftEvenOdd)}else if(l===2&&h){var d=r[0],Y=r[1];return this.Execute(d,Y,n.PolyFillType.pftEvenOdd,n.PolyFillType.pftEvenOdd)}},n.Clipper.prototype.FixHoleLinkage=function(r){if(!(r.FirstLeft===null||r.IsHole!==r.FirstLeft.IsHole&&r.FirstLeft.Pts!==null)){for(var l=r.FirstLeft;l!==null&&(l.IsHole===r.IsHole||l.Pts===null);)l=l.FirstLeft;r.FirstLeft=l}},n.Clipper.prototype.ExecuteInternal=function(){try{this.Reset(),this.m_SortedEdges=null,this.m_Maxima=null;var r={},l={};if(!this.PopScanbeam(r))return!1;for(this.InsertLocalMinimaIntoAEL(r.v);this.PopScanbeam(l)||this.LocalMinimaPending();){if(this.ProcessHorizontals(),this.m_GhostJoins.length=0,!this.ProcessIntersections(l.v))return!1;this.ProcessEdgesAtTopOfScanbeam(l.v),r.v=l.v,this.InsertLocalMinimaIntoAEL(r.v)}var h,d,b;for(d=0,b=this.m_PolyOuts.length;d<b;d++)h=this.m_PolyOuts[d],!(h.Pts===null||h.IsOpen)&&(h.IsHole^this.ReverseSolution)==this.Area$1(h)>0&&this.ReversePolyPtLinks(h.Pts);for(this.JoinCommonEdges(),d=0,b=this.m_PolyOuts.length;d<b;d++)h=this.m_PolyOuts[d],h.Pts!==null&&(h.IsOpen?this.FixupOutPolyline(h):this.FixupOutPolygon(h));return this.StrictlySimple&&this.DoSimplePolygons(),!0}finally{this.m_Joins.length=0,this.m_GhostJoins.length=0}},n.Clipper.prototype.DisposeAllPolyPts=function(){for(var r=0,l=this.m_PolyOuts.length;r<l;++r)this.DisposeOutRec(r);n.Clear(this.m_PolyOuts)},n.Clipper.prototype.AddJoin=function(r,l,h){var d=new n.Join;d.OutPt1=r,d.OutPt2=l,d.OffPt.X=h.X,d.OffPt.Y=h.Y,n.use_xyz&&(d.OffPt.Z=h.Z),this.m_Joins.push(d)},n.Clipper.prototype.AddGhostJoin=function(r,l){var h=new n.Join;h.OutPt1=r,h.OffPt.X=l.X,h.OffPt.Y=l.Y,n.use_xyz&&(h.OffPt.Z=l.Z),this.m_GhostJoins.push(h)},n.Clipper.prototype.SetZ=function(r,l,h){if(this.ZFillFunction!==null){if(r.Z!==0||this.ZFillFunction===null)return;n.IntPoint.op_Equality(r,l.Bot)?r.Z=l.Bot.Z:n.IntPoint.op_Equality(r,l.Top)?r.Z=l.Top.Z:n.IntPoint.op_Equality(r,h.Bot)?r.Z=h.Bot.Z:n.IntPoint.op_Equality(r,h.Top)?r.Z=h.Top.Z:this.ZFillFunction(l.Bot,l.Top,h.Bot,h.Top,r)}},n.Clipper.prototype.InsertLocalMinimaIntoAEL=function(r){for(var l={},h,d;this.PopLocalMinima(r,l);){h=l.v.LeftBound,d=l.v.RightBound;var b=null;if(h===null?(this.InsertEdgeIntoAEL(d,null),this.SetWindingCount(d),this.IsContributing(d)&&(b=this.AddOutPt(d,d.Bot))):d===null?(this.InsertEdgeIntoAEL(h,null),this.SetWindingCount(h),this.IsContributing(h)&&(b=this.AddOutPt(h,h.Bot)),this.InsertScanbeam(h.Top.Y)):(this.InsertEdgeIntoAEL(h,null),this.InsertEdgeIntoAEL(d,h),this.SetWindingCount(h),d.WindCnt=h.WindCnt,d.WindCnt2=h.WindCnt2,this.IsContributing(h)&&(b=this.AddLocalMinPoly(h,d,h.Bot)),this.InsertScanbeam(h.Top.Y)),d!==null&&(n.ClipperBase.IsHorizontal(d)?(d.NextInLML!==null&&this.InsertScanbeam(d.NextInLML.Top.Y),this.AddEdgeToSEL(d)):this.InsertScanbeam(d.Top.Y)),!(h===null||d===null)){if(b!==null&&n.ClipperBase.IsHorizontal(d)&&this.m_GhostJoins.length>0&&d.WindDelta!==0)for(var P=0,F=this.m_GhostJoins.length;P<F;P++){var X=this.m_GhostJoins[P];this.HorzSegmentsOverlap(X.OutPt1.Pt.X,X.OffPt.X,d.Bot.X,d.Top.X)&&this.AddJoin(X.OutPt1,b,X.OffPt)}if(h.OutIdx>=0&&h.PrevInAEL!==null&&h.PrevInAEL.Curr.X===h.Bot.X&&h.PrevInAEL.OutIdx>=0&&n.ClipperBase.SlopesEqual5(h.PrevInAEL.Curr,h.PrevInAEL.Top,h.Curr,h.Top,this.m_UseFullRange)&&h.WindDelta!==0&&h.PrevInAEL.WindDelta!==0){var Y=this.AddOutPt(h.PrevInAEL,h.Bot);this.AddJoin(b,Y,h.Top)}if(h.NextInAEL!==d){if(d.OutIdx>=0&&d.PrevInAEL.OutIdx>=0&&n.ClipperBase.SlopesEqual5(d.PrevInAEL.Curr,d.PrevInAEL.Top,d.Curr,d.Top,this.m_UseFullRange)&&d.WindDelta!==0&&d.PrevInAEL.WindDelta!==0){var Y=this.AddOutPt(d.PrevInAEL,d.Bot);this.AddJoin(b,Y,d.Top)}var Q=h.NextInAEL;if(Q!==null)for(;Q!==d;)this.IntersectEdges(d,Q,h.Curr),Q=Q.NextInAEL}}}},n.Clipper.prototype.InsertEdgeIntoAEL=function(r,l){if(this.m_ActiveEdges===null)r.PrevInAEL=null,r.NextInAEL=null,this.m_ActiveEdges=r;else if(l===null&&this.E2InsertsBeforeE1(this.m_ActiveEdges,r))r.PrevInAEL=null,r.NextInAEL=this.m_ActiveEdges,this.m_ActiveEdges.PrevInAEL=r,this.m_ActiveEdges=r;else{for(l===null&&(l=this.m_ActiveEdges);l.NextInAEL!==null&&!this.E2InsertsBeforeE1(l.NextInAEL,r);)l=l.NextInAEL;r.NextInAEL=l.NextInAEL,l.NextInAEL!==null&&(l.NextInAEL.PrevInAEL=r),r.PrevInAEL=l,l.NextInAEL=r}},n.Clipper.prototype.E2InsertsBeforeE1=function(r,l){return l.Curr.X===r.Curr.X?l.Top.Y>r.Top.Y?l.Top.X<n.Clipper.TopX(r,l.Top.Y):r.Top.X>n.Clipper.TopX(l,r.Top.Y):l.Curr.X<r.Curr.X},n.Clipper.prototype.IsEvenOddFillType=function(r){return r.PolyTyp===n.PolyType.ptSubject?this.m_SubjFillType===n.PolyFillType.pftEvenOdd:this.m_ClipFillType===n.PolyFillType.pftEvenOdd},n.Clipper.prototype.IsEvenOddAltFillType=function(r){return r.PolyTyp===n.PolyType.ptSubject?this.m_ClipFillType===n.PolyFillType.pftEvenOdd:this.m_SubjFillType===n.PolyFillType.pftEvenOdd},n.Clipper.prototype.IsContributing=function(r){var l,h;switch(r.PolyTyp===n.PolyType.ptSubject?(l=this.m_SubjFillType,h=this.m_ClipFillType):(l=this.m_ClipFillType,h=this.m_SubjFillType),l){case n.PolyFillType.pftEvenOdd:if(r.WindDelta===0&&r.WindCnt!==1)return!1;break;case n.PolyFillType.pftNonZero:if(Math.abs(r.WindCnt)!==1)return!1;break;case n.PolyFillType.pftPositive:if(r.WindCnt!==1)return!1;break;default:if(r.WindCnt!==-1)return!1;break}switch(this.m_ClipType){case n.ClipType.ctIntersection:switch(h){case n.PolyFillType.pftEvenOdd:case n.PolyFillType.pftNonZero:return r.WindCnt2!==0;case n.PolyFillType.pftPositive:return r.WindCnt2>0;default:return r.WindCnt2<0}case n.ClipType.ctUnion:switch(h){case n.PolyFillType.pftEvenOdd:case n.PolyFillType.pftNonZero:return r.WindCnt2===0;case n.PolyFillType.pftPositive:return r.WindCnt2<=0;default:return r.WindCnt2>=0}case n.ClipType.ctDifference:if(r.PolyTyp===n.PolyType.ptSubject)switch(h){case n.PolyFillType.pftEvenOdd:case n.PolyFillType.pftNonZero:return r.WindCnt2===0;case n.PolyFillType.pftPositive:return r.WindCnt2<=0;default:return r.WindCnt2>=0}else switch(h){case n.PolyFillType.pftEvenOdd:case n.PolyFillType.pftNonZero:return r.WindCnt2!==0;case n.PolyFillType.pftPositive:return r.WindCnt2>0;default:return r.WindCnt2<0}case n.ClipType.ctXor:if(r.WindDelta===0)switch(h){case n.PolyFillType.pftEvenOdd:case n.PolyFillType.pftNonZero:return r.WindCnt2===0;case n.PolyFillType.pftPositive:return r.WindCnt2<=0;default:return r.WindCnt2>=0}else return!0}return!0},n.Clipper.prototype.SetWindingCount=function(r){for(var l=r.PrevInAEL;l!==null&&(l.PolyTyp!==r.PolyTyp||l.WindDelta===0);)l=l.PrevInAEL;if(l===null){var h=r.PolyTyp===n.PolyType.ptSubject?this.m_SubjFillType:this.m_ClipFillType;r.WindDelta===0?r.WindCnt=h===n.PolyFillType.pftNegative?-1:1:r.WindCnt=r.WindDelta,r.WindCnt2=0,l=this.m_ActiveEdges}else if(r.WindDelta===0&&this.m_ClipType!==n.ClipType.ctUnion)r.WindCnt=1,r.WindCnt2=l.WindCnt2,l=l.NextInAEL;else if(this.IsEvenOddFillType(r)){if(r.WindDelta===0){for(var d=!0,b=l.PrevInAEL;b!==null;)b.PolyTyp===l.PolyTyp&&b.WindDelta!==0&&(d=!d),b=b.PrevInAEL;r.WindCnt=d?0:1}else r.WindCnt=r.WindDelta;r.WindCnt2=l.WindCnt2,l=l.NextInAEL}else l.WindCnt*l.WindDelta<0?Math.abs(l.WindCnt)>1?l.WindDelta*r.WindDelta<0?r.WindCnt=l.WindCnt:r.WindCnt=l.WindCnt+r.WindDelta:r.WindCnt=r.WindDelta===0?1:r.WindDelta:r.WindDelta===0?r.WindCnt=l.WindCnt<0?l.WindCnt-1:l.WindCnt+1:l.WindDelta*r.WindDelta<0?r.WindCnt=l.WindCnt:r.WindCnt=l.WindCnt+r.WindDelta,r.WindCnt2=l.WindCnt2,l=l.NextInAEL;if(this.IsEvenOddAltFillType(r))for(;l!==r;)l.WindDelta!==0&&(r.WindCnt2=r.WindCnt2===0?1:0),l=l.NextInAEL;else for(;l!==r;)r.WindCnt2+=l.WindDelta,l=l.NextInAEL},n.Clipper.prototype.AddEdgeToSEL=function(r){this.m_SortedEdges===null?(this.m_SortedEdges=r,r.PrevInSEL=null,r.NextInSEL=null):(r.NextInSEL=this.m_SortedEdges,r.PrevInSEL=null,this.m_SortedEdges.PrevInSEL=r,this.m_SortedEdges=r)},n.Clipper.prototype.PopEdgeFromSEL=function(r){if(r.v=this.m_SortedEdges,r.v===null)return!1;var l=r.v;return this.m_SortedEdges=r.v.NextInSEL,this.m_SortedEdges!==null&&(this.m_SortedEdges.PrevInSEL=null),l.NextInSEL=null,l.PrevInSEL=null,!0},n.Clipper.prototype.CopyAELToSEL=function(){var r=this.m_ActiveEdges;for(this.m_SortedEdges=r;r!==null;)r.PrevInSEL=r.PrevInAEL,r.NextInSEL=r.NextInAEL,r=r.NextInAEL},n.Clipper.prototype.SwapPositionsInSEL=function(r,l){if(!(r.NextInSEL===null&&r.PrevInSEL===null)&&!(l.NextInSEL===null&&l.PrevInSEL===null)){if(r.NextInSEL===l){var h=l.NextInSEL;h!==null&&(h.PrevInSEL=r);var d=r.PrevInSEL;d!==null&&(d.NextInSEL=l),l.PrevInSEL=d,l.NextInSEL=r,r.PrevInSEL=l,r.NextInSEL=h}else if(l.NextInSEL===r){var h=r.NextInSEL;h!==null&&(h.PrevInSEL=l);var d=l.PrevInSEL;d!==null&&(d.NextInSEL=r),r.PrevInSEL=d,r.NextInSEL=l,l.PrevInSEL=r,l.NextInSEL=h}else{var h=r.NextInSEL,d=r.PrevInSEL;r.NextInSEL=l.NextInSEL,r.NextInSEL!==null&&(r.NextInSEL.PrevInSEL=r),r.PrevInSEL=l.PrevInSEL,r.PrevInSEL!==null&&(r.PrevInSEL.NextInSEL=r),l.NextInSEL=h,l.NextInSEL!==null&&(l.NextInSEL.PrevInSEL=l),l.PrevInSEL=d,l.PrevInSEL!==null&&(l.PrevInSEL.NextInSEL=l)}r.PrevInSEL===null?this.m_SortedEdges=r:l.PrevInSEL===null&&(this.m_SortedEdges=l)}},n.Clipper.prototype.AddLocalMaxPoly=function(r,l,h){this.AddOutPt(r,h),l.WindDelta===0&&this.AddOutPt(l,h),r.OutIdx===l.OutIdx?(r.OutIdx=-1,l.OutIdx=-1):r.OutIdx<l.OutIdx?this.AppendPolygon(r,l):this.AppendPolygon(l,r)},n.Clipper.prototype.AddLocalMinPoly=function(r,l,h){var d,b,P;if(n.ClipperBase.IsHorizontal(l)||r.Dx>l.Dx?(d=this.AddOutPt(r,h),l.OutIdx=r.OutIdx,r.Side=n.EdgeSide.esLeft,l.Side=n.EdgeSide.esRight,b=r,b.PrevInAEL===l?P=l.PrevInAEL:P=b.PrevInAEL):(d=this.AddOutPt(l,h),r.OutIdx=l.OutIdx,r.Side=n.EdgeSide.esRight,l.Side=n.EdgeSide.esLeft,b=l,b.PrevInAEL===r?P=r.PrevInAEL:P=b.PrevInAEL),P!==null&&P.OutIdx>=0&&P.Top.Y<h.Y&&b.Top.Y<h.Y){var F=n.Clipper.TopX(P,h.Y),X=n.Clipper.TopX(b,h.Y);if(F===X&&b.WindDelta!==0&&P.WindDelta!==0&&n.ClipperBase.SlopesEqual5(new n.IntPoint2(F,h.Y),P.Top,new n.IntPoint2(X,h.Y),b.Top,this.m_UseFullRange)){var Y=this.AddOutPt(P,h);this.AddJoin(d,Y,b.Top)}}return d},n.Clipper.prototype.AddOutPt=function(r,l){if(r.OutIdx<0){var h=this.CreateOutRec();h.IsOpen=r.WindDelta===0;var d=new n.OutPt;return h.Pts=d,d.Idx=h.Idx,d.Pt.X=l.X,d.Pt.Y=l.Y,n.use_xyz&&(d.Pt.Z=l.Z),d.Next=d,d.Prev=d,h.IsOpen||this.SetHoleState(r,h),r.OutIdx=h.Idx,d}else{var h=this.m_PolyOuts[r.OutIdx],b=h.Pts,P=r.Side===n.EdgeSide.esLeft;if(P&&n.IntPoint.op_Equality(l,b.Pt))return b;if(!P&&n.IntPoint.op_Equality(l,b.Prev.Pt))return b.Prev;var d=new n.OutPt;return d.Idx=h.Idx,d.Pt.X=l.X,d.Pt.Y=l.Y,n.use_xyz&&(d.Pt.Z=l.Z),d.Next=b,d.Prev=b.Prev,d.Prev.Next=d,b.Prev=d,P&&(h.Pts=d),d}},n.Clipper.prototype.GetLastOutPt=function(r){var l=this.m_PolyOuts[r.OutIdx];return r.Side===n.EdgeSide.esLeft?l.Pts:l.Pts.Prev},n.Clipper.prototype.SwapPoints=function(r,l){var h=new n.IntPoint1(r.Value);r.Value.X=l.Value.X,r.Value.Y=l.Value.Y,n.use_xyz&&(r.Value.Z=l.Value.Z),l.Value.X=h.X,l.Value.Y=h.Y,n.use_xyz&&(l.Value.Z=h.Z)},n.Clipper.prototype.HorzSegmentsOverlap=function(r,l,h,d){var b;return r>l&&(b=r,r=l,l=b),h>d&&(b=h,h=d,d=b),r<d&&h<l},n.Clipper.prototype.SetHoleState=function(r,l){for(var h=r.PrevInAEL,d=null;h!==null;)h.OutIdx>=0&&h.WindDelta!==0&&(d===null?d=h:d.OutIdx===h.OutIdx&&(d=null)),h=h.PrevInAEL;d===null?(l.FirstLeft=null,l.IsHole=!1):(l.FirstLeft=this.m_PolyOuts[d.OutIdx],l.IsHole=!l.FirstLeft.IsHole)},n.Clipper.prototype.GetDx=function(r,l){return r.Y===l.Y?n.ClipperBase.horizontal:(l.X-r.X)/(l.Y-r.Y)},n.Clipper.prototype.FirstIsBottomPt=function(r,l){for(var h=r.Prev;n.IntPoint.op_Equality(h.Pt,r.Pt)&&h!==r;)h=h.Prev;var d=Math.abs(this.GetDx(r.Pt,h.Pt));for(h=r.Next;n.IntPoint.op_Equality(h.Pt,r.Pt)&&h!==r;)h=h.Next;var b=Math.abs(this.GetDx(r.Pt,h.Pt));for(h=l.Prev;n.IntPoint.op_Equality(h.Pt,l.Pt)&&h!==l;)h=h.Prev;var P=Math.abs(this.GetDx(l.Pt,h.Pt));for(h=l.Next;n.IntPoint.op_Equality(h.Pt,l.Pt)&&h!==l;)h=h.Next;var F=Math.abs(this.GetDx(l.Pt,h.Pt));return Math.max(d,b)===Math.max(P,F)&&Math.min(d,b)===Math.min(P,F)?this.Area(r)>0:d>=P&&d>=F||b>=P&&b>=F},n.Clipper.prototype.GetBottomPt=function(r){for(var l=null,h=r.Next;h!==r;)h.Pt.Y>r.Pt.Y?(r=h,l=null):h.Pt.Y===r.Pt.Y&&h.Pt.X<=r.Pt.X&&(h.Pt.X<r.Pt.X?(l=null,r=h):h.Next!==r&&h.Prev!==r&&(l=h)),h=h.Next;if(l!==null)for(;l!==h;)for(this.FirstIsBottomPt(h,l)||(r=l),l=l.Next;n.IntPoint.op_Inequality(l.Pt,r.Pt);)l=l.Next;return r},n.Clipper.prototype.GetLowermostRec=function(r,l){r.BottomPt===null&&(r.BottomPt=this.GetBottomPt(r.Pts)),l.BottomPt===null&&(l.BottomPt=this.GetBottomPt(l.Pts));var h=r.BottomPt,d=l.BottomPt;return h.Pt.Y>d.Pt.Y?r:h.Pt.Y<d.Pt.Y?l:h.Pt.X<d.Pt.X?r:h.Pt.X>d.Pt.X||h.Next===h?l:d.Next===d||this.FirstIsBottomPt(h,d)?r:l},n.Clipper.prototype.OutRec1RightOfOutRec2=function(r,l){do if(r=r.FirstLeft,r===l)return!0;while(r!==null);return!1},n.Clipper.prototype.GetOutRec=function(r){for(var l=this.m_PolyOuts[r];l!==this.m_PolyOuts[l.Idx];)l=this.m_PolyOuts[l.Idx];return l},n.Clipper.prototype.AppendPolygon=function(r,l){var h=this.m_PolyOuts[r.OutIdx],d=this.m_PolyOuts[l.OutIdx],b;this.OutRec1RightOfOutRec2(h,d)?b=d:this.OutRec1RightOfOutRec2(d,h)?b=h:b=this.GetLowermostRec(h,d);var P=h.Pts,F=P.Prev,X=d.Pts,Y=X.Prev;r.Side===n.EdgeSide.esLeft?l.Side===n.EdgeSide.esLeft?(this.ReversePolyPtLinks(X),X.Next=P,P.Prev=X,F.Next=Y,Y.Prev=F,h.Pts=Y):(Y.Next=P,P.Prev=Y,X.Prev=F,F.Next=X,h.Pts=X):l.Side===n.EdgeSide.esRight?(this.ReversePolyPtLinks(X),F.Next=Y,Y.Prev=F,X.Next=P,P.Prev=X):(F.Next=X,X.Prev=F,P.Prev=Y,Y.Next=P),h.BottomPt=null,b===d&&(d.FirstLeft!==h&&(h.FirstLeft=d.FirstLeft),h.IsHole=d.IsHole),d.Pts=null,d.BottomPt=null,d.FirstLeft=h;var Q=r.OutIdx,yt=l.OutIdx;r.OutIdx=-1,l.OutIdx=-1;for(var gt=this.m_ActiveEdges;gt!==null;){if(gt.OutIdx===yt){gt.OutIdx=Q,gt.Side=r.Side;break}gt=gt.NextInAEL}d.Idx=h.Idx},n.Clipper.prototype.ReversePolyPtLinks=function(r){if(r!==null){var l,h;l=r;do h=l.Next,l.Next=l.Prev,l.Prev=h,l=h;while(l!==r)}},n.Clipper.SwapSides=function(r,l){var h=r.Side;r.Side=l.Side,l.Side=h},n.Clipper.SwapPolyIndexes=function(r,l){var h=r.OutIdx;r.OutIdx=l.OutIdx,l.OutIdx=h},n.Clipper.prototype.IntersectEdges=function(r,l,h){var d=r.OutIdx>=0,b=l.OutIdx>=0;if(n.use_xyz&&this.SetZ(h,r,l),n.use_lines&&(r.WindDelta===0||l.WindDelta===0)){if(r.WindDelta===0&&l.WindDelta===0)return;r.PolyTyp===l.PolyTyp&&r.WindDelta!==l.WindDelta&&this.m_ClipType===n.ClipType.ctUnion?r.WindDelta===0?b&&(this.AddOutPt(r,h),d&&(r.OutIdx=-1)):d&&(this.AddOutPt(l,h),b&&(l.OutIdx=-1)):r.PolyTyp!==l.PolyTyp&&(r.WindDelta===0&&Math.abs(l.WindCnt)===1&&(this.m_ClipType!==n.ClipType.ctUnion||l.WindCnt2===0)?(this.AddOutPt(r,h),d&&(r.OutIdx=-1)):l.WindDelta===0&&Math.abs(r.WindCnt)===1&&(this.m_ClipType!==n.ClipType.ctUnion||r.WindCnt2===0)&&(this.AddOutPt(l,h),b&&(l.OutIdx=-1)));return}if(r.PolyTyp===l.PolyTyp)if(this.IsEvenOddFillType(r)){var P=r.WindCnt;r.WindCnt=l.WindCnt,l.WindCnt=P}else r.WindCnt+l.WindDelta===0?r.WindCnt=-r.WindCnt:r.WindCnt+=l.WindDelta,l.WindCnt-r.WindDelta===0?l.WindCnt=-l.WindCnt:l.WindCnt-=r.WindDelta;else this.IsEvenOddFillType(l)?r.WindCnt2=r.WindCnt2===0?1:0:r.WindCnt2+=l.WindDelta,this.IsEvenOddFillType(r)?l.WindCnt2=l.WindCnt2===0?1:0:l.WindCnt2-=r.WindDelta;var F,X,Y,Q;r.PolyTyp===n.PolyType.ptSubject?(F=this.m_SubjFillType,Y=this.m_ClipFillType):(F=this.m_ClipFillType,Y=this.m_SubjFillType),l.PolyTyp===n.PolyType.ptSubject?(X=this.m_SubjFillType,Q=this.m_ClipFillType):(X=this.m_ClipFillType,Q=this.m_SubjFillType);var yt,gt;switch(F){case n.PolyFillType.pftPositive:yt=r.WindCnt;break;case n.PolyFillType.pftNegative:yt=-r.WindCnt;break;default:yt=Math.abs(r.WindCnt);break}switch(X){case n.PolyFillType.pftPositive:gt=l.WindCnt;break;case n.PolyFillType.pftNegative:gt=-l.WindCnt;break;default:gt=Math.abs(l.WindCnt);break}if(d&&b)yt!==0&&yt!==1||gt!==0&&gt!==1||r.PolyTyp!==l.PolyTyp&&this.m_ClipType!==n.ClipType.ctXor?this.AddLocalMaxPoly(r,l,h):(this.AddOutPt(r,h),this.AddOutPt(l,h),n.Clipper.SwapSides(r,l),n.Clipper.SwapPolyIndexes(r,l));else if(d)(gt===0||gt===1)&&(this.AddOutPt(r,h),n.Clipper.SwapSides(r,l),n.Clipper.SwapPolyIndexes(r,l));else if(b)(yt===0||yt===1)&&(this.AddOutPt(l,h),n.Clipper.SwapSides(r,l),n.Clipper.SwapPolyIndexes(r,l));else if((yt===0||yt===1)&&(gt===0||gt===1)){var Mt,Jt;switch(Y){case n.PolyFillType.pftPositive:Mt=r.WindCnt2;break;case n.PolyFillType.pftNegative:Mt=-r.WindCnt2;break;default:Mt=Math.abs(r.WindCnt2);break}switch(Q){case n.PolyFillType.pftPositive:Jt=l.WindCnt2;break;case n.PolyFillType.pftNegative:Jt=-l.WindCnt2;break;default:Jt=Math.abs(l.WindCnt2);break}if(r.PolyTyp!==l.PolyTyp)this.AddLocalMinPoly(r,l,h);else if(yt===1&&gt===1)switch(this.m_ClipType){case n.ClipType.ctIntersection:Mt>0&&Jt>0&&this.AddLocalMinPoly(r,l,h);break;case n.ClipType.ctUnion:Mt<=0&&Jt<=0&&this.AddLocalMinPoly(r,l,h);break;case n.ClipType.ctDifference:(r.PolyTyp===n.PolyType.ptClip&&Mt>0&&Jt>0||r.PolyTyp===n.PolyType.ptSubject&&Mt<=0&&Jt<=0)&&this.AddLocalMinPoly(r,l,h);break;case n.ClipType.ctXor:this.AddLocalMinPoly(r,l,h);break}else n.Clipper.SwapSides(r,l)}},n.Clipper.prototype.DeleteFromSEL=function(r){var l=r.PrevInSEL,h=r.NextInSEL;l===null&&h===null&&r!==this.m_SortedEdges||(l!==null?l.NextInSEL=h:this.m_SortedEdges=h,h!==null&&(h.PrevInSEL=l),r.NextInSEL=null,r.PrevInSEL=null)},n.Clipper.prototype.ProcessHorizontals=function(){for(var r={};this.PopEdgeFromSEL(r);)this.ProcessHorizontal(r.v)},n.Clipper.prototype.GetHorzDirection=function(r,l){r.Bot.X<r.Top.X?(l.Left=r.Bot.X,l.Right=r.Top.X,l.Dir=n.Direction.dLeftToRight):(l.Left=r.Top.X,l.Right=r.Bot.X,l.Dir=n.Direction.dRightToLeft)},n.Clipper.prototype.ProcessHorizontal=function(r){var l={Dir:null,Left:null,Right:null};this.GetHorzDirection(r,l);for(var h=l.Dir,d=l.Left,b=l.Right,P=r.WindDelta===0,F=r,X=null;F.NextInLML!==null&&n.ClipperBase.IsHorizontal(F.NextInLML);)F=F.NextInLML;F.NextInLML===null&&(X=this.GetMaximaPair(F));var Y=this.m_Maxima;if(Y!==null)if(h===n.Direction.dLeftToRight){for(;Y!==null&&Y.X<=r.Bot.X;)Y=Y.Next;Y!==null&&Y.X>=F.Top.X&&(Y=null)}else{for(;Y.Next!==null&&Y.Next.X<r.Bot.X;)Y=Y.Next;Y.X<=F.Top.X&&(Y=null)}for(var Q=null;;){for(var yt=r===F,gt=this.GetNextInAEL(r,h);gt!==null;){if(Y!==null)if(h===n.Direction.dLeftToRight)for(;Y!==null&&Y.X<gt.Curr.X;)r.OutIdx>=0&&!P&&this.AddOutPt(r,new n.IntPoint2(Y.X,r.Bot.Y)),Y=Y.Next;else for(;Y!==null&&Y.X>gt.Curr.X;)r.OutIdx>=0&&!P&&this.AddOutPt(r,new n.IntPoint2(Y.X,r.Bot.Y)),Y=Y.Prev;if(h===n.Direction.dLeftToRight&&gt.Curr.X>b||h===n.Direction.dRightToLeft&&gt.Curr.X<d||gt.Curr.X===r.Top.X&&r.NextInLML!==null&&gt.Dx<r.NextInLML.Dx)break;if(r.OutIdx>=0&&!P){n.use_xyz&&(h===n.Direction.dLeftToRight?this.SetZ(gt.Curr,r,gt):this.SetZ(gt.Curr,gt,r)),Q=this.AddOutPt(r,gt.Curr);for(var Mt=this.m_SortedEdges;Mt!==null;){if(Mt.OutIdx>=0&&this.HorzSegmentsOverlap(r.Bot.X,r.Top.X,Mt.Bot.X,Mt.Top.X)){var Jt=this.GetLastOutPt(Mt);this.AddJoin(Jt,Q,Mt.Top)}Mt=Mt.NextInSEL}this.AddGhostJoin(Q,r.Bot)}if(gt===X&&yt){r.OutIdx>=0&&this.AddLocalMaxPoly(r,X,r.Top),this.DeleteFromAEL(r),this.DeleteFromAEL(X);return}if(h===n.Direction.dLeftToRight){var oe=new n.IntPoint2(gt.Curr.X,r.Curr.Y);this.IntersectEdges(r,gt,oe)}else{var oe=new n.IntPoint2(gt.Curr.X,r.Curr.Y);this.IntersectEdges(gt,r,oe)}var ye=this.GetNextInAEL(gt,h);this.SwapPositionsInAEL(r,gt),gt=ye}if(r.NextInLML===null||!n.ClipperBase.IsHorizontal(r.NextInLML))break;r=this.UpdateEdgeIntoAEL(r),r.OutIdx>=0&&this.AddOutPt(r,r.Bot),l={Dir:h,Left:d,Right:b},this.GetHorzDirection(r,l),h=l.Dir,d=l.Left,b=l.Right}if(r.OutIdx>=0&&Q===null){Q=this.GetLastOutPt(r);for(var Mt=this.m_SortedEdges;Mt!==null;){if(Mt.OutIdx>=0&&this.HorzSegmentsOverlap(r.Bot.X,r.Top.X,Mt.Bot.X,Mt.Top.X)){var Jt=this.GetLastOutPt(Mt);this.AddJoin(Jt,Q,Mt.Top)}Mt=Mt.NextInSEL}this.AddGhostJoin(Q,r.Top)}if(r.NextInLML!==null)if(r.OutIdx>=0){if(Q=this.AddOutPt(r,r.Top),r=this.UpdateEdgeIntoAEL(r),r.WindDelta===0)return;var Be=r.PrevInAEL,ye=r.NextInAEL;if(Be!==null&&Be.Curr.X===r.Bot.X&&Be.Curr.Y===r.Bot.Y&&Be.WindDelta===0&&Be.OutIdx>=0&&Be.Curr.Y>Be.Top.Y&&n.ClipperBase.SlopesEqual3(r,Be,this.m_UseFullRange)){var Jt=this.AddOutPt(Be,r.Bot);this.AddJoin(Q,Jt,r.Top)}else if(ye!==null&&ye.Curr.X===r.Bot.X&&ye.Curr.Y===r.Bot.Y&&ye.WindDelta!==0&&ye.OutIdx>=0&&ye.Curr.Y>ye.Top.Y&&n.ClipperBase.SlopesEqual3(r,ye,this.m_UseFullRange)){var Jt=this.AddOutPt(ye,r.Bot);this.AddJoin(Q,Jt,r.Top)}}else r=this.UpdateEdgeIntoAEL(r);else r.OutIdx>=0&&this.AddOutPt(r,r.Top),this.DeleteFromAEL(r)},n.Clipper.prototype.GetNextInAEL=function(r,l){return l===n.Direction.dLeftToRight?r.NextInAEL:r.PrevInAEL},n.Clipper.prototype.IsMinima=function(r){return r!==null&&r.Prev.NextInLML!==r&&r.Next.NextInLML!==r},n.Clipper.prototype.IsMaxima=function(r,l){return r!==null&&r.Top.Y===l&&r.NextInLML===null},n.Clipper.prototype.IsIntermediate=function(r,l){return r.Top.Y===l&&r.NextInLML!==null},n.Clipper.prototype.GetMaximaPair=function(r){return n.IntPoint.op_Equality(r.Next.Top,r.Top)&&r.Next.NextInLML===null?r.Next:n.IntPoint.op_Equality(r.Prev.Top,r.Top)&&r.Prev.NextInLML===null?r.Prev:null},n.Clipper.prototype.GetMaximaPairEx=function(r){var l=this.GetMaximaPair(r);return l===null||l.OutIdx===n.ClipperBase.Skip||l.NextInAEL===l.PrevInAEL&&!n.ClipperBase.IsHorizontal(l)?null:l},n.Clipper.prototype.ProcessIntersections=function(r){if(this.m_ActiveEdges===null)return!0;try{if(this.BuildIntersectList(r),this.m_IntersectList.length===0)return!0;if(this.m_IntersectList.length===1||this.FixupIntersectionOrder())this.ProcessIntersectList();else return!1}catch{this.m_SortedEdges=null,this.m_IntersectList.length=0,n.Error("ProcessIntersections error")}return this.m_SortedEdges=null,!0},n.Clipper.prototype.BuildIntersectList=function(r){if(this.m_ActiveEdges!==null){var l=this.m_ActiveEdges;for(this.m_SortedEdges=l;l!==null;)l.PrevInSEL=l.PrevInAEL,l.NextInSEL=l.NextInAEL,l.Curr.X=n.Clipper.TopX(l,r),l=l.NextInAEL;for(var h=!0;h&&this.m_SortedEdges!==null;){for(h=!1,l=this.m_SortedEdges;l.NextInSEL!==null;){var d=l.NextInSEL,b=new n.IntPoint0;if(l.Curr.X>d.Curr.X){this.IntersectPoint(l,d,b),b.Y<r&&(b=new n.IntPoint2(n.Clipper.TopX(l,r),r));var P=new n.IntersectNode;P.Edge1=l,P.Edge2=d,P.Pt.X=b.X,P.Pt.Y=b.Y,n.use_xyz&&(P.Pt.Z=b.Z),this.m_IntersectList.push(P),this.SwapPositionsInSEL(l,d),h=!0}else l=d}if(l.PrevInSEL!==null)l.PrevInSEL.NextInSEL=null;else break}this.m_SortedEdges=null}},n.Clipper.prototype.EdgesAdjacent=function(r){return r.Edge1.NextInSEL===r.Edge2||r.Edge1.PrevInSEL===r.Edge2},n.Clipper.IntersectNodeSort=function(r,l){return l.Pt.Y-r.Pt.Y},n.Clipper.prototype.FixupIntersectionOrder=function(){this.m_IntersectList.sort(this.m_IntersectNodeComparer),this.CopyAELToSEL();for(var r=this.m_IntersectList.length,l=0;l<r;l++){if(!this.EdgesAdjacent(this.m_IntersectList[l])){for(var h=l+1;h<r&&!this.EdgesAdjacent(this.m_IntersectList[h]);)h++;if(h===r)return!1;var d=this.m_IntersectList[l];this.m_IntersectList[l]=this.m_IntersectList[h],this.m_IntersectList[h]=d}this.SwapPositionsInSEL(this.m_IntersectList[l].Edge1,this.m_IntersectList[l].Edge2)}return!0},n.Clipper.prototype.ProcessIntersectList=function(){for(var r=0,l=this.m_IntersectList.length;r<l;r++){var h=this.m_IntersectList[r];this.IntersectEdges(h.Edge1,h.Edge2,h.Pt),this.SwapPositionsInAEL(h.Edge1,h.Edge2)}this.m_IntersectList.length=0};var Yt=function(r){return r<0?Math.ceil(r-.5):Math.round(r)},Pe=function(r){return r<0?Math.ceil(r-.5):Math.floor(r+.5)},Qe=function(r){return r<0?-Math.round(Math.abs(r)):Math.round(r)},Ue=function(r){return r<0?(r-=.5,r<-2147483648?Math.ceil(r):r|0):(r+=.5,r>2147483647?Math.floor(r):r|0)};s.msie?n.Clipper.Round=Yt:s.chromium?n.Clipper.Round=Qe:s.safari?n.Clipper.Round=Ue:n.Clipper.Round=Pe,n.Clipper.TopX=function(r,l){return l===r.Top.Y?r.Top.X:r.Bot.X+n.Clipper.Round(r.Dx*(l-r.Bot.Y))},n.Clipper.prototype.IntersectPoint=function(r,l,h){h.X=0,h.Y=0;var d,b;if(r.Dx===l.Dx){h.Y=r.Curr.Y,h.X=n.Clipper.TopX(r,h.Y);return}if(r.Delta.X===0)h.X=r.Bot.X,n.ClipperBase.IsHorizontal(l)?h.Y=l.Bot.Y:(b=l.Bot.Y-l.Bot.X/l.Dx,h.Y=n.Clipper.Round(h.X/l.Dx+b));else if(l.Delta.X===0)h.X=l.Bot.X,n.ClipperBase.IsHorizontal(r)?h.Y=r.Bot.Y:(d=r.Bot.Y-r.Bot.X/r.Dx,h.Y=n.Clipper.Round(h.X/r.Dx+d));else{d=r.Bot.X-r.Bot.Y*r.Dx,b=l.Bot.X-l.Bot.Y*l.Dx;var P=(b-d)/(r.Dx-l.Dx);h.Y=n.Clipper.Round(P),Math.abs(r.Dx)<Math.abs(l.Dx)?h.X=n.Clipper.Round(r.Dx*P+d):h.X=n.Clipper.Round(l.Dx*P+b)}if(h.Y<r.Top.Y||h.Y<l.Top.Y){if(r.Top.Y>l.Top.Y)return h.Y=r.Top.Y,h.X=n.Clipper.TopX(l,r.Top.Y),h.X<r.Top.X;h.Y=l.Top.Y,Math.abs(r.Dx)<Math.abs(l.Dx)?h.X=n.Clipper.TopX(r,h.Y):h.X=n.Clipper.TopX(l,h.Y)}h.Y>r.Curr.Y&&(h.Y=r.Curr.Y,Math.abs(r.Dx)>Math.abs(l.Dx)?h.X=n.Clipper.TopX(l,h.Y):h.X=n.Clipper.TopX(r,h.Y))},n.Clipper.prototype.ProcessEdgesAtTopOfScanbeam=function(r){for(var l=this.m_ActiveEdges;l!==null;){var h=this.IsMaxima(l,r);if(h){var d=this.GetMaximaPairEx(l);h=d===null||!n.ClipperBase.IsHorizontal(d)}if(h){this.StrictlySimple&&this.InsertMaxima(l.Top.X);var b=l.PrevInAEL;this.DoMaxima(l),b===null?l=this.m_ActiveEdges:l=b.NextInAEL}else{if(this.IsIntermediate(l,r)&&n.ClipperBase.IsHorizontal(l.NextInLML)?(l=this.UpdateEdgeIntoAEL(l),l.OutIdx>=0&&this.AddOutPt(l,l.Bot),this.AddEdgeToSEL(l)):(l.Curr.X=n.Clipper.TopX(l,r),l.Curr.Y=r),n.use_xyz&&(l.Top.Y===r?l.Curr.Z=l.Top.Z:l.Bot.Y===r?l.Curr.Z=l.Bot.Z:l.Curr.Z=0),this.StrictlySimple){var b=l.PrevInAEL;if(l.OutIdx>=0&&l.WindDelta!==0&&b!==null&&b.OutIdx>=0&&b.Curr.X===l.Curr.X&&b.WindDelta!==0){var P=new n.IntPoint1(l.Curr);n.use_xyz&&this.SetZ(P,b,l);var F=this.AddOutPt(b,P),X=this.AddOutPt(l,P);this.AddJoin(F,X,P)}}l=l.NextInAEL}}for(this.ProcessHorizontals(),this.m_Maxima=null,l=this.m_ActiveEdges;l!==null;){if(this.IsIntermediate(l,r)){var F=null;l.OutIdx>=0&&(F=this.AddOutPt(l,l.Top)),l=this.UpdateEdgeIntoAEL(l);var b=l.PrevInAEL,Y=l.NextInAEL;if(b!==null&&b.Curr.X===l.Bot.X&&b.Curr.Y===l.Bot.Y&&F!==null&&b.OutIdx>=0&&b.Curr.Y===b.Top.Y&&n.ClipperBase.SlopesEqual5(l.Curr,l.Top,b.Curr,b.Top,this.m_UseFullRange)&&l.WindDelta!==0&&b.WindDelta!==0){var X=this.AddOutPt(ePrev2,l.Bot);this.AddJoin(F,X,l.Top)}else if(Y!==null&&Y.Curr.X===l.Bot.X&&Y.Curr.Y===l.Bot.Y&&F!==null&&Y.OutIdx>=0&&Y.Curr.Y===Y.Top.Y&&n.ClipperBase.SlopesEqual5(l.Curr,l.Top,Y.Curr,Y.Top,this.m_UseFullRange)&&l.WindDelta!==0&&Y.WindDelta!==0){var X=this.AddOutPt(Y,l.Bot);this.AddJoin(F,X,l.Top)}}l=l.NextInAEL}},n.Clipper.prototype.DoMaxima=function(r){var l=this.GetMaximaPairEx(r);if(l===null){r.OutIdx>=0&&this.AddOutPt(r,r.Top),this.DeleteFromAEL(r);return}for(var h=r.NextInAEL;h!==null&&h!==l;)this.IntersectEdges(r,h,r.Top),this.SwapPositionsInAEL(r,h),h=r.NextInAEL;r.OutIdx===-1&&l.OutIdx===-1?(this.DeleteFromAEL(r),this.DeleteFromAEL(l)):r.OutIdx>=0&&l.OutIdx>=0?(r.OutIdx>=0&&this.AddLocalMaxPoly(r,l,r.Top),this.DeleteFromAEL(r),this.DeleteFromAEL(l)):n.use_lines&&r.WindDelta===0?(r.OutIdx>=0&&(this.AddOutPt(r,r.Top),r.OutIdx=n.ClipperBase.Unassigned),this.DeleteFromAEL(r),l.OutIdx>=0&&(this.AddOutPt(l,r.Top),l.OutIdx=n.ClipperBase.Unassigned),this.DeleteFromAEL(l)):n.Error("DoMaxima error")},n.Clipper.ReversePaths=function(r){for(var l=0,h=r.length;l<h;l++)r[l].reverse()},n.Clipper.Orientation=function(r){return n.Clipper.Area(r)>=0},n.Clipper.prototype.PointCount=function(r){if(r===null)return 0;var l=0,h=r;do l++,h=h.Next;while(h!==r);return l},n.Clipper.prototype.BuildResult=function(r){n.Clear(r);for(var l=0,h=this.m_PolyOuts.length;l<h;l++){var d=this.m_PolyOuts[l];if(d.Pts!==null){var b=d.Pts.Prev,P=this.PointCount(b);if(!(P<2)){for(var F=new Array(P),X=0;X<P;X++)F[X]=b.Pt,b=b.Prev;r.push(F)}}}},n.Clipper.prototype.BuildResult2=function(r){r.Clear();for(var l=0,h=this.m_PolyOuts.length;l<h;l++){var d=this.m_PolyOuts[l],b=this.PointCount(d.Pts);if(!(d.IsOpen&&b<2||!d.IsOpen&&b<3)){this.FixHoleLinkage(d);var P=new n.PolyNode;r.m_AllPolys.push(P),d.PolyNode=P,P.m_polygon.length=b;for(var F=d.Pts.Prev,X=0;X<b;X++)P.m_polygon[X]=F.Pt,F=F.Prev}}for(var l=0,h=this.m_PolyOuts.length;l<h;l++){var d=this.m_PolyOuts[l];d.PolyNode!==null&&(d.IsOpen?(d.PolyNode.IsOpen=!0,r.AddChild(d.PolyNode)):d.FirstLeft!==null&&d.FirstLeft.PolyNode!==null?d.FirstLeft.PolyNode.AddChild(d.PolyNode):r.AddChild(d.PolyNode))}},n.Clipper.prototype.FixupOutPolyline=function(r){for(var l=r.Pts,h=l.Prev;l!==h;)if(l=l.Next,n.IntPoint.op_Equality(l.Pt,l.Prev.Pt)){l===h&&(h=l.Prev);var d=l.Prev;d.Next=l.Next,l.Next.Prev=d,l=d}l===l.Prev&&(r.Pts=null)},n.Clipper.prototype.FixupOutPolygon=function(r){var l=null;r.BottomPt=null;for(var h=r.Pts,d=this.PreserveCollinear||this.StrictlySimple;;){if(h.Prev===h||h.Prev===h.Next){r.Pts=null;return}if(n.IntPoint.op_Equality(h.Pt,h.Next.Pt)||n.IntPoint.op_Equality(h.Pt,h.Prev.Pt)||n.ClipperBase.SlopesEqual4(h.Prev.Pt,h.Pt,h.Next.Pt,this.m_UseFullRange)&&(!d||!this.Pt2IsBetweenPt1AndPt3(h.Prev.Pt,h.Pt,h.Next.Pt)))l=null,h.Prev.Next=h.Next,h.Next.Prev=h.Prev,h=h.Prev;else{if(h===l)break;l===null&&(l=h),h=h.Next}}r.Pts=h},n.Clipper.prototype.DupOutPt=function(r,l){var h=new n.OutPt;return h.Pt.X=r.Pt.X,h.Pt.Y=r.Pt.Y,n.use_xyz&&(h.Pt.Z=r.Pt.Z),h.Idx=r.Idx,l?(h.Next=r.Next,h.Prev=r,r.Next.Prev=h,r.Next=h):(h.Prev=r.Prev,h.Next=r,r.Prev.Next=h,r.Prev=h),h},n.Clipper.prototype.GetOverlap=function(r,l,h,d,b){return r<l?h<d?(b.Left=Math.max(r,h),b.Right=Math.min(l,d)):(b.Left=Math.max(r,d),b.Right=Math.min(l,h)):h<d?(b.Left=Math.max(l,h),b.Right=Math.min(r,d)):(b.Left=Math.max(l,d),b.Right=Math.min(r,h)),b.Left<b.Right},n.Clipper.prototype.JoinHorz=function(r,l,h,d,b,P){var F=r.Pt.X>l.Pt.X?n.Direction.dRightToLeft:n.Direction.dLeftToRight,X=h.Pt.X>d.Pt.X?n.Direction.dRightToLeft:n.Direction.dLeftToRight;if(F===X)return!1;if(F===n.Direction.dLeftToRight){for(;r.Next.Pt.X<=b.X&&r.Next.Pt.X>=r.Pt.X&&r.Next.Pt.Y===b.Y;)r=r.Next;P&&r.Pt.X!==b.X&&(r=r.Next),l=this.DupOutPt(r,!P),n.IntPoint.op_Inequality(l.Pt,b)&&(r=l,r.Pt.X=b.X,r.Pt.Y=b.Y,n.use_xyz&&(r.Pt.Z=b.Z),l=this.DupOutPt(r,!P))}else{for(;r.Next.Pt.X>=b.X&&r.Next.Pt.X<=r.Pt.X&&r.Next.Pt.Y===b.Y;)r=r.Next;!P&&r.Pt.X!==b.X&&(r=r.Next),l=this.DupOutPt(r,P),n.IntPoint.op_Inequality(l.Pt,b)&&(r=l,r.Pt.X=b.X,r.Pt.Y=b.Y,n.use_xyz&&(r.Pt.Z=b.Z),l=this.DupOutPt(r,P))}if(X===n.Direction.dLeftToRight){for(;h.Next.Pt.X<=b.X&&h.Next.Pt.X>=h.Pt.X&&h.Next.Pt.Y===b.Y;)h=h.Next;P&&h.Pt.X!==b.X&&(h=h.Next),d=this.DupOutPt(h,!P),n.IntPoint.op_Inequality(d.Pt,b)&&(h=d,h.Pt.X=b.X,h.Pt.Y=b.Y,n.use_xyz&&(h.Pt.Z=b.Z),d=this.DupOutPt(h,!P))}else{for(;h.Next.Pt.X>=b.X&&h.Next.Pt.X<=h.Pt.X&&h.Next.Pt.Y===b.Y;)h=h.Next;!P&&h.Pt.X!==b.X&&(h=h.Next),d=this.DupOutPt(h,P),n.IntPoint.op_Inequality(d.Pt,b)&&(h=d,h.Pt.X=b.X,h.Pt.Y=b.Y,n.use_xyz&&(h.Pt.Z=b.Z),d=this.DupOutPt(h,P))}return F===n.Direction.dLeftToRight===P?(r.Prev=h,h.Next=r,l.Next=d,d.Prev=l):(r.Next=h,h.Prev=r,l.Prev=d,d.Next=l),!0},n.Clipper.prototype.JoinPoints=function(r,l,h){var d=r.OutPt1,b=new n.OutPt,P=r.OutPt2,F=new n.OutPt,X=r.OutPt1.Pt.Y===r.OffPt.Y;if(X&&n.IntPoint.op_Equality(r.OffPt,r.OutPt1.Pt)&&n.IntPoint.op_Equality(r.OffPt,r.OutPt2.Pt)){if(l!==h)return!1;for(b=r.OutPt1.Next;b!==d&&n.IntPoint.op_Equality(b.Pt,r.OffPt);)b=b.Next;var Y=b.Pt.Y>r.OffPt.Y;for(F=r.OutPt2.Next;F!==P&&n.IntPoint.op_Equality(F.Pt,r.OffPt);)F=F.Next;var Q=F.Pt.Y>r.OffPt.Y;return Y===Q?!1:Y?(b=this.DupOutPt(d,!1),F=this.DupOutPt(P,!0),d.Prev=P,P.Next=d,b.Next=F,F.Prev=b,r.OutPt1=d,r.OutPt2=b,!0):(b=this.DupOutPt(d,!0),F=this.DupOutPt(P,!1),d.Next=P,P.Prev=d,b.Prev=F,F.Next=b,r.OutPt1=d,r.OutPt2=b,!0)}else if(X){for(b=d;d.Prev.Pt.Y===d.Pt.Y&&d.Prev!==b&&d.Prev!==P;)d=d.Prev;for(;b.Next.Pt.Y===b.Pt.Y&&b.Next!==d&&b.Next!==P;)b=b.Next;if(b.Next===d||b.Next===P)return!1;for(F=P;P.Prev.Pt.Y===P.Pt.Y&&P.Prev!==F&&P.Prev!==b;)P=P.Prev;for(;F.Next.Pt.Y===F.Pt.Y&&F.Next!==P&&F.Next!==d;)F=F.Next;if(F.Next===P||F.Next===d)return!1;var yt={Left:null,Right:null};if(!this.GetOverlap(d.Pt.X,b.Pt.X,P.Pt.X,F.Pt.X,yt))return!1;var gt=yt.Left,Mt=yt.Right,Jt=new n.IntPoint0,oe;return d.Pt.X>=gt&&d.Pt.X<=Mt?(Jt.X=d.Pt.X,Jt.Y=d.Pt.Y,n.use_xyz&&(Jt.Z=d.Pt.Z),oe=d.Pt.X>b.Pt.X):P.Pt.X>=gt&&P.Pt.X<=Mt?(Jt.X=P.Pt.X,Jt.Y=P.Pt.Y,n.use_xyz&&(Jt.Z=P.Pt.Z),oe=P.Pt.X>F.Pt.X):b.Pt.X>=gt&&b.Pt.X<=Mt?(Jt.X=b.Pt.X,Jt.Y=b.Pt.Y,n.use_xyz&&(Jt.Z=b.Pt.Z),oe=b.Pt.X>d.Pt.X):(Jt.X=F.Pt.X,Jt.Y=F.Pt.Y,n.use_xyz&&(Jt.Z=F.Pt.Z),oe=F.Pt.X>P.Pt.X),r.OutPt1=d,r.OutPt2=P,this.JoinHorz(d,b,P,F,Jt,oe)}else{for(b=d.Next;n.IntPoint.op_Equality(b.Pt,d.Pt)&&b!==d;)b=b.Next;var ye=b.Pt.Y>d.Pt.Y||!n.ClipperBase.SlopesEqual4(d.Pt,b.Pt,r.OffPt,this.m_UseFullRange);if(ye){for(b=d.Prev;n.IntPoint.op_Equality(b.Pt,d.Pt)&&b!==d;)b=b.Prev;if(b.Pt.Y>d.Pt.Y||!n.ClipperBase.SlopesEqual4(d.Pt,b.Pt,r.OffPt,this.m_UseFullRange))return!1}for(F=P.Next;n.IntPoint.op_Equality(F.Pt,P.Pt)&&F!==P;)F=F.Next;var Be=F.Pt.Y>P.Pt.Y||!n.ClipperBase.SlopesEqual4(P.Pt,F.Pt,r.OffPt,this.m_UseFullRange);if(Be){for(F=P.Prev;n.IntPoint.op_Equality(F.Pt,P.Pt)&&F!==P;)F=F.Prev;if(F.Pt.Y>P.Pt.Y||!n.ClipperBase.SlopesEqual4(P.Pt,F.Pt,r.OffPt,this.m_UseFullRange))return!1}return b===d||F===P||b===F||l===h&&ye===Be?!1:ye?(b=this.DupOutPt(d,!1),F=this.DupOutPt(P,!0),d.Prev=P,P.Next=d,b.Next=F,F.Prev=b,r.OutPt1=d,r.OutPt2=b,!0):(b=this.DupOutPt(d,!0),F=this.DupOutPt(P,!1),d.Next=P,P.Prev=d,b.Prev=F,F.Next=b,r.OutPt1=d,r.OutPt2=b,!0)}},n.Clipper.GetBounds=function(r){for(var l=0,h=r.length;l<h&&r[l].length===0;)l++;if(l===h)return new n.IntRect(0,0,0,0);var d=new n.IntRect;for(d.left=r[l][0].X,d.right=d.left,d.top=r[l][0].Y,d.bottom=d.top;l<h;l++)for(var b=0,P=r[l].length;b<P;b++)r[l][b].X<d.left?d.left=r[l][b].X:r[l][b].X>d.right&&(d.right=r[l][b].X),r[l][b].Y<d.top?d.top=r[l][b].Y:r[l][b].Y>d.bottom&&(d.bottom=r[l][b].Y);return d},n.Clipper.prototype.GetBounds2=function(r){var l=r,h=new n.IntRect;for(h.left=r.Pt.X,h.right=r.Pt.X,h.top=r.Pt.Y,h.bottom=r.Pt.Y,r=r.Next;r!==l;)r.Pt.X<h.left&&(h.left=r.Pt.X),r.Pt.X>h.right&&(h.right=r.Pt.X),r.Pt.Y<h.top&&(h.top=r.Pt.Y),r.Pt.Y>h.bottom&&(h.bottom=r.Pt.Y),r=r.Next;return h},n.Clipper.PointInPolygon=function(r,l){var h=0,d=l.length;if(d<3)return 0;for(var b=l[0],P=1;P<=d;++P){var F=P===d?l[0]:l[P];if(F.Y===r.Y&&(F.X===r.X||b.Y===r.Y&&F.X>r.X==b.X<r.X))return-1;if(b.Y<r.Y!=F.Y<r.Y){if(b.X>=r.X)if(F.X>r.X)h=1-h;else{var X=(b.X-r.X)*(F.Y-r.Y)-(F.X-r.X)*(b.Y-r.Y);if(X===0)return-1;X>0==F.Y>b.Y&&(h=1-h)}else if(F.X>r.X){var X=(b.X-r.X)*(F.Y-r.Y)-(F.X-r.X)*(b.Y-r.Y);if(X===0)return-1;X>0==F.Y>b.Y&&(h=1-h)}}b=F}return h},n.Clipper.prototype.PointInPolygon=function(r,l){var h=0,d=l,b=r.X,P=r.Y,F=l.Pt.X,X=l.Pt.Y;do{l=l.Next;var Y=l.Pt.X,Q=l.Pt.Y;if(Q===P&&(Y===b||X===P&&Y>b==F<b))return-1;if(X<P!=Q<P){if(F>=b)if(Y>b)h=1-h;else{var yt=(F-b)*(Q-P)-(Y-b)*(X-P);if(yt===0)return-1;yt>0==Q>X&&(h=1-h)}else if(Y>b){var yt=(F-b)*(Q-P)-(Y-b)*(X-P);if(yt===0)return-1;yt>0==Q>X&&(h=1-h)}}F=Y,X=Q}while(d!==l);return h},n.Clipper.prototype.Poly2ContainsPoly1=function(r,l){var h=r;do{var d=this.PointInPolygon(h.Pt,l);if(d>=0)return d>0;h=h.Next}while(h!==r);return!0},n.Clipper.prototype.FixupFirstLefts1=function(r,l){for(var h,d,b=0,P=this.m_PolyOuts.length;b<P;b++)h=this.m_PolyOuts[b],d=n.Clipper.ParseFirstLeft(h.FirstLeft),h.Pts!==null&&d===r&&this.Poly2ContainsPoly1(h.Pts,l.Pts)&&(h.FirstLeft=l)},n.Clipper.prototype.FixupFirstLefts2=function(r,l){for(var h=l.FirstLeft,d,b,P=0,F=this.m_PolyOuts.length;P<F;P++)d=this.m_PolyOuts[P],!(d.Pts===null||d===l||d===r)&&(b=n.Clipper.ParseFirstLeft(d.FirstLeft),!(b!==h&&b!==r&&b!==l)&&(this.Poly2ContainsPoly1(d.Pts,r.Pts)?d.FirstLeft=r:this.Poly2ContainsPoly1(d.Pts,l.Pts)?d.FirstLeft=l:(d.FirstLeft===r||d.FirstLeft===l)&&(d.FirstLeft=h)))},n.Clipper.prototype.FixupFirstLefts3=function(r,l){for(var h,d,b=0,P=this.m_PolyOuts.length;b<P;b++)h=this.m_PolyOuts[b],d=n.Clipper.ParseFirstLeft(h.FirstLeft),h.Pts!==null&&d===r&&(h.FirstLeft=l)},n.Clipper.ParseFirstLeft=function(r){for(;r!==null&&r.Pts===null;)r=r.FirstLeft;return r},n.Clipper.prototype.JoinCommonEdges=function(){for(var r=0,l=this.m_Joins.length;r<l;r++){var h=this.m_Joins[r],d=this.GetOutRec(h.OutPt1.Idx),b=this.GetOutRec(h.OutPt2.Idx);if(!(d.Pts===null||b.Pts===null)&&!(d.IsOpen||b.IsOpen)){var P;d===b?P=d:this.OutRec1RightOfOutRec2(d,b)?P=b:this.OutRec1RightOfOutRec2(b,d)?P=d:P=this.GetLowermostRec(d,b),this.JoinPoints(h,d,b)&&(d===b?(d.Pts=h.OutPt1,d.BottomPt=null,b=this.CreateOutRec(),b.Pts=h.OutPt2,this.UpdateOutPtIdxs(b),this.Poly2ContainsPoly1(b.Pts,d.Pts)?(b.IsHole=!d.IsHole,b.FirstLeft=d,this.m_UsingPolyTree&&this.FixupFirstLefts2(b,d),(b.IsHole^this.ReverseSolution)==this.Area$1(b)>0&&this.ReversePolyPtLinks(b.Pts)):this.Poly2ContainsPoly1(d.Pts,b.Pts)?(b.IsHole=d.IsHole,d.IsHole=!b.IsHole,b.FirstLeft=d.FirstLeft,d.FirstLeft=b,this.m_UsingPolyTree&&this.FixupFirstLefts2(d,b),(d.IsHole^this.ReverseSolution)==this.Area$1(d)>0&&this.ReversePolyPtLinks(d.Pts)):(b.IsHole=d.IsHole,b.FirstLeft=d.FirstLeft,this.m_UsingPolyTree&&this.FixupFirstLefts1(d,b))):(b.Pts=null,b.BottomPt=null,b.Idx=d.Idx,d.IsHole=P.IsHole,P===b&&(d.FirstLeft=b.FirstLeft),b.FirstLeft=d,this.m_UsingPolyTree&&this.FixupFirstLefts3(b,d)))}}},n.Clipper.prototype.UpdateOutPtIdxs=function(r){var l=r.Pts;do l.Idx=r.Idx,l=l.Prev;while(l!==r.Pts)},n.Clipper.prototype.DoSimplePolygons=function(){for(var r=0;r<this.m_PolyOuts.length;){var l=this.m_PolyOuts[r++],h=l.Pts;if(!(h===null||l.IsOpen))do{for(var d=h.Next;d!==l.Pts;){if(n.IntPoint.op_Equality(h.Pt,d.Pt)&&d.Next!==h&&d.Prev!==h){var b=h.Prev,P=d.Prev;h.Prev=P,P.Next=h,d.Prev=b,b.Next=d,l.Pts=h;var F=this.CreateOutRec();F.Pts=d,this.UpdateOutPtIdxs(F),this.Poly2ContainsPoly1(F.Pts,l.Pts)?(F.IsHole=!l.IsHole,F.FirstLeft=l,this.m_UsingPolyTree&&this.FixupFirstLefts2(F,l)):this.Poly2ContainsPoly1(l.Pts,F.Pts)?(F.IsHole=l.IsHole,l.IsHole=!F.IsHole,F.FirstLeft=l.FirstLeft,l.FirstLeft=F,this.m_UsingPolyTree&&this.FixupFirstLefts2(l,F)):(F.IsHole=l.IsHole,F.FirstLeft=l.FirstLeft,this.m_UsingPolyTree&&this.FixupFirstLefts1(l,F)),d=h}d=d.Next}h=h.Next}while(h!==l.Pts)}},n.Clipper.Area=function(r){if(!Array.isArray(r))return 0;var l=r.length;if(l<3)return 0;for(var h=0,d=0,b=l-1;d<l;++d)h+=(r[b].X+r[d].X)*(r[b].Y-r[d].Y),b=d;return-h*.5},n.Clipper.prototype.Area=function(r){var l=r;if(r===null)return 0;var h=0;do h=h+(r.Prev.Pt.X+r.Pt.X)*(r.Prev.Pt.Y-r.Pt.Y),r=r.Next;while(r!==l);return h*.5},n.Clipper.prototype.Area$1=function(r){return this.Area(r.Pts)},n.Clipper.SimplifyPolygon=function(r,l){var h=new Array,d=new n.Clipper(0);return d.StrictlySimple=!0,d.AddPath(r,n.PolyType.ptSubject,!0),d.Execute(n.ClipType.ctUnion,h,l,l),h},n.Clipper.SimplifyPolygons=function(r,l){typeof l>"u"&&(l=n.PolyFillType.pftEvenOdd);var h=new Array,d=new n.Clipper(0);return d.StrictlySimple=!0,d.AddPaths(r,n.PolyType.ptSubject,!0),d.Execute(n.ClipType.ctUnion,h,l,l),h},n.Clipper.DistanceSqrd=function(r,l){var h=r.X-l.X,d=r.Y-l.Y;return h*h+d*d},n.Clipper.DistanceFromLineSqrd=function(r,l,h){var d=l.Y-h.Y,b=h.X-l.X,P=d*l.X+b*l.Y;return P=d*r.X+b*r.Y-P,P*P/(d*d+b*b)},n.Clipper.SlopesNearCollinear=function(r,l,h,d){return Math.abs(r.X-l.X)>Math.abs(r.Y-l.Y)?r.X>l.X==r.X<h.X?n.Clipper.DistanceFromLineSqrd(r,l,h)<d:l.X>r.X==l.X<h.X?n.Clipper.DistanceFromLineSqrd(l,r,h)<d:n.Clipper.DistanceFromLineSqrd(h,r,l)<d:r.Y>l.Y==r.Y<h.Y?n.Clipper.DistanceFromLineSqrd(r,l,h)<d:l.Y>r.Y==l.Y<h.Y?n.Clipper.DistanceFromLineSqrd(l,r,h)<d:n.Clipper.DistanceFromLineSqrd(h,r,l)<d},n.Clipper.PointsAreClose=function(r,l,h){var d=r.X-l.X,b=r.Y-l.Y;return d*d+b*b<=h},n.Clipper.ExcludeOp=function(r){var l=r.Prev;return l.Next=r.Next,r.Next.Prev=l,l.Idx=0,l},n.Clipper.CleanPolygon=function(r,l){typeof l>"u"&&(l=1.415);var h=r.length;if(h===0)return new Array;for(var d=new Array(h),b=0;b<h;++b)d[b]=new n.OutPt;for(var b=0;b<h;++b)d[b].Pt=r[b],d[b].Next=d[(b+1)%h],d[b].Next.Prev=d[b],d[b].Idx=0;for(var P=l*l,F=d[0];F.Idx===0&&F.Next!==F.Prev;)n.Clipper.PointsAreClose(F.Pt,F.Prev.Pt,P)?(F=n.Clipper.ExcludeOp(F),h--):n.Clipper.PointsAreClose(F.Prev.Pt,F.Next.Pt,P)?(n.Clipper.ExcludeOp(F.Next),F=n.Clipper.ExcludeOp(F),h-=2):n.Clipper.SlopesNearCollinear(F.Prev.Pt,F.Pt,F.Next.Pt,P)?(F=n.Clipper.ExcludeOp(F),h--):(F.Idx=1,F=F.Next);h<3&&(h=0);for(var X=new Array(h),b=0;b<h;++b)X[b]=new n.IntPoint1(F.Pt),F=F.Next;return d=null,X},n.Clipper.CleanPolygons=function(r,l){for(var h=new Array(r.length),d=0,b=r.length;d<b;d++)h[d]=n.Clipper.CleanPolygon(r[d],l);return h},n.Clipper.Minkowski=function(r,l,h,d){var b=d?1:0,P=r.length,F=l.length,X=new Array;if(h)for(var Y=0;Y<F;Y++){for(var Q=new Array(P),yt=0,gt=r.length,Mt=r[yt];yt<gt;yt++,Mt=r[yt])Q[yt]=new n.IntPoint2(l[Y].X+Mt.X,l[Y].Y+Mt.Y);X.push(Q)}else for(var Y=0;Y<F;Y++){for(var Q=new Array(P),yt=0,gt=r.length,Mt=r[yt];yt<gt;yt++,Mt=r[yt])Q[yt]=new n.IntPoint2(l[Y].X-Mt.X,l[Y].Y-Mt.Y);X.push(Q)}for(var Jt=new Array,Y=0;Y<F-1+b;Y++)for(var yt=0;yt<P;yt++){var oe=new Array;oe.push(X[Y%F][yt%P]),oe.push(X[(Y+1)%F][yt%P]),oe.push(X[(Y+1)%F][(yt+1)%P]),oe.push(X[Y%F][(yt+1)%P]),n.Clipper.Orientation(oe)||oe.reverse(),Jt.push(oe)}return Jt},n.Clipper.MinkowskiSum=function(r,l,h){if(l[0]instanceof Array){for(var b=l,F=new n.Paths,P=new n.Clipper,X=0;X<b.length;++X){var Y=n.Clipper.Minkowski(r,b[X],!0,h);if(P.AddPaths(Y,n.PolyType.ptSubject,!0),h){var d=n.Clipper.TranslatePath(b[X],r[0]);P.AddPath(d,n.PolyType.ptClip,!0)}}return P.Execute(n.ClipType.ctUnion,F,n.PolyFillType.pftNonZero,n.PolyFillType.pftNonZero),F}else{var d=l,b=n.Clipper.Minkowski(r,d,!0,h),P=new n.Clipper;return P.AddPaths(b,n.PolyType.ptSubject,!0),P.Execute(n.ClipType.ctUnion,b,n.PolyFillType.pftNonZero,n.PolyFillType.pftNonZero),b}},n.Clipper.TranslatePath=function(r,l){for(var h=new n.Path,d=0;d<r.length;d++)h.push(new n.IntPoint2(r[d].X+l.X,r[d].Y+l.Y));return h},n.Clipper.MinkowskiDiff=function(r,l){var h=n.Clipper.Minkowski(r,l,!1,!0),d=new n.Clipper;return d.AddPaths(h,n.PolyType.ptSubject,!0),d.Execute(n.ClipType.ctUnion,h,n.PolyFillType.pftNonZero,n.PolyFillType.pftNonZero),h},n.Clipper.PolyTreeToPaths=function(r){var l=new Array;return n.Clipper.AddPolyNodeToPaths(r,n.Clipper.NodeType.ntAny,l),l},n.Clipper.AddPolyNodeToPaths=function(r,l,h){var d=!0;switch(l){case n.Clipper.NodeType.ntOpen:return;case n.Clipper.NodeType.ntClosed:d=!r.IsOpen;break;default:break}r.m_polygon.length>0&&d&&h.push(r.m_polygon);for(var b=0,P=r.Childs(),F=P.length,X=P[b];b<F;b++,X=P[b])n.Clipper.AddPolyNodeToPaths(X,l,h)},n.Clipper.OpenPathsFromPolyTree=function(r){for(var l=new n.Paths,h=0,d=r.ChildCount();h<d;h++)r.Childs()[h].IsOpen&&l.push(r.Childs()[h].m_polygon);return l},n.Clipper.ClosedPathsFromPolyTree=function(r){var l=new n.Paths;return n.Clipper.AddPolyNodeToPaths(r,n.Clipper.NodeType.ntClosed,l),l},xe(n.Clipper,n.ClipperBase),n.Clipper.NodeType={ntAny:0,ntOpen:1,ntClosed:2},n.ClipperOffset=function(r,l){typeof r>"u"&&(r=2),typeof l>"u"&&(l=n.ClipperOffset.def_arc_tolerance),this.m_destPolys=new n.Paths,this.m_srcPoly=new n.Path,this.m_destPoly=new n.Path,this.m_normals=new Array,this.m_delta=0,this.m_sinA=0,this.m_sin=0,this.m_cos=0,this.m_miterLim=0,this.m_StepsPerRad=0,this.m_lowest=new n.IntPoint0,this.m_polyNodes=new n.PolyNode,this.MiterLimit=r,this.ArcTolerance=l,this.m_lowest.X=-1},n.ClipperOffset.two_pi=6.28318530717959,n.ClipperOffset.def_arc_tolerance=.25,n.ClipperOffset.prototype.Clear=function(){n.Clear(this.m_polyNodes.Childs()),this.m_lowest.X=-1},n.ClipperOffset.Round=n.Clipper.Round,n.ClipperOffset.prototype.AddPath=function(r,l,h){var d=r.length-1;if(!(d<0)){var b=new n.PolyNode;if(b.m_jointype=l,b.m_endtype=h,h===n.EndType.etClosedLine||h===n.EndType.etClosedPolygon)for(;d>0&&n.IntPoint.op_Equality(r[0],r[d]);)d--;b.m_polygon.push(r[0]);for(var P=0,F=0,X=1;X<=d;X++)n.IntPoint.op_Inequality(b.m_polygon[P],r[X])&&(P++,b.m_polygon.push(r[X]),(r[X].Y>b.m_polygon[F].Y||r[X].Y===b.m_polygon[F].Y&&r[X].X<b.m_polygon[F].X)&&(F=P));if(!(h===n.EndType.etClosedPolygon&&P<2)&&(this.m_polyNodes.AddChild(b),h===n.EndType.etClosedPolygon))if(this.m_lowest.X<0)this.m_lowest=new n.IntPoint2(this.m_polyNodes.ChildCount()-1,F);else{var Y=this.m_polyNodes.Childs()[this.m_lowest.X].m_polygon[this.m_lowest.Y];(b.m_polygon[F].Y>Y.Y||b.m_polygon[F].Y===Y.Y&&b.m_polygon[F].X<Y.X)&&(this.m_lowest=new n.IntPoint2(this.m_polyNodes.ChildCount()-1,F))}}},n.ClipperOffset.prototype.AddPaths=function(r,l,h){for(var d=0,b=r.length;d<b;d++)this.AddPath(r[d],l,h)},n.ClipperOffset.prototype.FixOrientations=function(){if(this.m_lowest.X>=0&&!n.Clipper.Orientation(this.m_polyNodes.Childs()[this.m_lowest.X].m_polygon))for(var r=0;r<this.m_polyNodes.ChildCount();r++){var l=this.m_polyNodes.Childs()[r];(l.m_endtype===n.EndType.etClosedPolygon||l.m_endtype===n.EndType.etClosedLine&&n.Clipper.Orientation(l.m_polygon))&&l.m_polygon.reverse()}else for(var r=0;r<this.m_polyNodes.ChildCount();r++){var l=this.m_polyNodes.Childs()[r];l.m_endtype===n.EndType.etClosedLine&&!n.Clipper.Orientation(l.m_polygon)&&l.m_polygon.reverse()}},n.ClipperOffset.GetUnitNormal=function(r,l){var h=l.X-r.X,d=l.Y-r.Y;if(h===0&&d===0)return new n.DoublePoint2(0,0);var b=1/Math.sqrt(h*h+d*d);return h*=b,d*=b,new n.DoublePoint2(d,-h)},n.ClipperOffset.prototype.DoOffset=function(r){if(this.m_destPolys=new Array,this.m_delta=r,n.ClipperBase.near_zero(r)){for(var l=0;l<this.m_polyNodes.ChildCount();l++){var h=this.m_polyNodes.Childs()[l];h.m_endtype===n.EndType.etClosedPolygon&&this.m_destPolys.push(h.m_polygon)}return}this.MiterLimit>2?this.m_miterLim=2/(this.MiterLimit*this.MiterLimit):this.m_miterLim=.5;var d;this.ArcTolerance<=0?d=n.ClipperOffset.def_arc_tolerance:this.ArcTolerance>Math.abs(r)*n.ClipperOffset.def_arc_tolerance?d=Math.abs(r)*n.ClipperOffset.def_arc_tolerance:d=this.ArcTolerance;var b=3.14159265358979/Math.acos(1-d/Math.abs(r));this.m_sin=Math.sin(n.ClipperOffset.two_pi/b),this.m_cos=Math.cos(n.ClipperOffset.two_pi/b),this.m_StepsPerRad=b/n.ClipperOffset.two_pi,r<0&&(this.m_sin=-this.m_sin);for(var l=0;l<this.m_polyNodes.ChildCount();l++){var h=this.m_polyNodes.Childs()[l];this.m_srcPoly=h.m_polygon;var P=this.m_srcPoly.length;if(!(P===0||r<=0&&(P<3||h.m_endtype!==n.EndType.etClosedPolygon))){if(this.m_destPoly=new Array,P===1){if(h.m_jointype===n.JoinType.jtRound)for(var F=1,X=0,Y=1;Y<=b;Y++){this.m_destPoly.push(new n.IntPoint2(n.ClipperOffset.Round(this.m_srcPoly[0].X+F*r),n.ClipperOffset.Round(this.m_srcPoly[0].Y+X*r)));var Q=F;F=F*this.m_cos-this.m_sin*X,X=Q*this.m_sin+X*this.m_cos}else for(var F=-1,X=-1,Y=0;Y<4;++Y)this.m_destPoly.push(new n.IntPoint2(n.ClipperOffset.Round(this.m_srcPoly[0].X+F*r),n.ClipperOffset.Round(this.m_srcPoly[0].Y+X*r))),F<0?F=1:X<0?X=1:F=-1;this.m_destPolys.push(this.m_destPoly);continue}this.m_normals.length=0;for(var Y=0;Y<P-1;Y++)this.m_normals.push(n.ClipperOffset.GetUnitNormal(this.m_srcPoly[Y],this.m_srcPoly[Y+1]));if(h.m_endtype===n.EndType.etClosedLine||h.m_endtype===n.EndType.etClosedPolygon?this.m_normals.push(n.ClipperOffset.GetUnitNormal(this.m_srcPoly[P-1],this.m_srcPoly[0])):this.m_normals.push(new n.DoublePoint1(this.m_normals[P-2])),h.m_endtype===n.EndType.etClosedPolygon){for(var yt=P-1,Y=0;Y<P;Y++)yt=this.OffsetPoint(Y,yt,h.m_jointype);this.m_destPolys.push(this.m_destPoly)}else if(h.m_endtype===n.EndType.etClosedLine){for(var yt=P-1,Y=0;Y<P;Y++)yt=this.OffsetPoint(Y,yt,h.m_jointype);this.m_destPolys.push(this.m_destPoly),this.m_destPoly=new Array;for(var gt=this.m_normals[P-1],Y=P-1;Y>0;Y--)this.m_normals[Y]=new n.DoublePoint2(-this.m_normals[Y-1].X,-this.m_normals[Y-1].Y);this.m_normals[0]=new n.DoublePoint2(-gt.X,-gt.Y),yt=0;for(var Y=P-1;Y>=0;Y--)yt=this.OffsetPoint(Y,yt,h.m_jointype);this.m_destPolys.push(this.m_destPoly)}else{for(var yt=0,Y=1;Y<P-1;++Y)yt=this.OffsetPoint(Y,yt,h.m_jointype);var Mt;if(h.m_endtype===n.EndType.etOpenButt){var Y=P-1;Mt=new n.IntPoint2(n.ClipperOffset.Round(this.m_srcPoly[Y].X+this.m_normals[Y].X*r),n.ClipperOffset.Round(this.m_srcPoly[Y].Y+this.m_normals[Y].Y*r)),this.m_destPoly.push(Mt),Mt=new n.IntPoint2(n.ClipperOffset.Round(this.m_srcPoly[Y].X-this.m_normals[Y].X*r),n.ClipperOffset.Round(this.m_srcPoly[Y].Y-this.m_normals[Y].Y*r)),this.m_destPoly.push(Mt)}else{var Y=P-1;yt=P-2,this.m_sinA=0,this.m_normals[Y]=new n.DoublePoint2(-this.m_normals[Y].X,-this.m_normals[Y].Y),h.m_endtype===n.EndType.etOpenSquare?this.DoSquare(Y,yt):this.DoRound(Y,yt)}for(var Y=P-1;Y>0;Y--)this.m_normals[Y]=new n.DoublePoint2(-this.m_normals[Y-1].X,-this.m_normals[Y-1].Y);this.m_normals[0]=new n.DoublePoint2(-this.m_normals[1].X,-this.m_normals[1].Y),yt=P-1;for(var Y=yt-1;Y>0;--Y)yt=this.OffsetPoint(Y,yt,h.m_jointype);h.m_endtype===n.EndType.etOpenButt?(Mt=new n.IntPoint2(n.ClipperOffset.Round(this.m_srcPoly[0].X-this.m_normals[0].X*r),n.ClipperOffset.Round(this.m_srcPoly[0].Y-this.m_normals[0].Y*r)),this.m_destPoly.push(Mt),Mt=new n.IntPoint2(n.ClipperOffset.Round(this.m_srcPoly[0].X+this.m_normals[0].X*r),n.ClipperOffset.Round(this.m_srcPoly[0].Y+this.m_normals[0].Y*r)),this.m_destPoly.push(Mt)):(yt=1,this.m_sinA=0,h.m_endtype===n.EndType.etOpenSquare?this.DoSquare(0,1):this.DoRound(0,1)),this.m_destPolys.push(this.m_destPoly)}}}},n.ClipperOffset.prototype.Execute=function(){var r=arguments,l=r[0]instanceof n.PolyTree;if(l){var h=r[0],d=r[1];h.Clear(),this.FixOrientations(),this.DoOffset(d);var b=new n.Clipper(0);if(b.AddPaths(this.m_destPolys,n.PolyType.ptSubject,!0),d>0)b.Execute(n.ClipType.ctUnion,h,n.PolyFillType.pftPositive,n.PolyFillType.pftPositive);else{var P=n.Clipper.GetBounds(this.m_destPolys),F=new n.Path;if(F.push(new n.IntPoint2(P.left-10,P.bottom+10)),F.push(new n.IntPoint2(P.right+10,P.bottom+10)),F.push(new n.IntPoint2(P.right+10,P.top-10)),F.push(new n.IntPoint2(P.left-10,P.top-10)),b.AddPath(F,n.PolyType.ptSubject,!0),b.ReverseSolution=!0,b.Execute(n.ClipType.ctUnion,h,n.PolyFillType.pftNegative,n.PolyFillType.pftNegative),h.ChildCount()===1&&h.Childs()[0].ChildCount()>0){var X=h.Childs()[0];h.Childs()[0]=X.Childs()[0],h.Childs()[0].m_Parent=h;for(var Y=1;Y<X.ChildCount();Y++)h.AddChild(X.Childs()[Y])}else h.Clear()}}else{var h=r[0],d=r[1];n.Clear(h),this.FixOrientations(),this.DoOffset(d);var b=new n.Clipper(0);if(b.AddPaths(this.m_destPolys,n.PolyType.ptSubject,!0),d>0)b.Execute(n.ClipType.ctUnion,h,n.PolyFillType.pftPositive,n.PolyFillType.pftPositive);else{var P=n.Clipper.GetBounds(this.m_destPolys),F=new n.Path;F.push(new n.IntPoint2(P.left-10,P.bottom+10)),F.push(new n.IntPoint2(P.right+10,P.bottom+10)),F.push(new n.IntPoint2(P.right+10,P.top-10)),F.push(new n.IntPoint2(P.left-10,P.top-10)),b.AddPath(F,n.PolyType.ptSubject,!0),b.ReverseSolution=!0,b.Execute(n.ClipType.ctUnion,h,n.PolyFillType.pftNegative,n.PolyFillType.pftNegative),h.length>0&&h.splice(0,1)}}},n.ClipperOffset.prototype.OffsetPoint=function(r,l,h){if(this.m_sinA=this.m_normals[l].X*this.m_normals[r].Y-this.m_normals[r].X*this.m_normals[l].Y,Math.abs(this.m_sinA*this.m_delta)<1){var d=this.m_normals[l].X*this.m_normals[r].X+this.m_normals[r].Y*this.m_normals[l].Y;if(d>0)return this.m_destPoly.push(new n.IntPoint2(n.ClipperOffset.Round(this.m_srcPoly[r].X+this.m_normals[l].X*this.m_delta),n.ClipperOffset.Round(this.m_srcPoly[r].Y+this.m_normals[l].Y*this.m_delta))),l}else this.m_sinA>1?this.m_sinA=1:this.m_sinA<-1&&(this.m_sinA=-1);if(this.m_sinA*this.m_delta<0)this.m_destPoly.push(new n.IntPoint2(n.ClipperOffset.Round(this.m_srcPoly[r].X+this.m_normals[l].X*this.m_delta),n.ClipperOffset.Round(this.m_srcPoly[r].Y+this.m_normals[l].Y*this.m_delta))),this.m_destPoly.push(new n.IntPoint1(this.m_srcPoly[r])),this.m_destPoly.push(new n.IntPoint2(n.ClipperOffset.Round(this.m_srcPoly[r].X+this.m_normals[r].X*this.m_delta),n.ClipperOffset.Round(this.m_srcPoly[r].Y+this.m_normals[r].Y*this.m_delta)));else switch(h){case n.JoinType.jtMiter:{var b=1+(this.m_normals[r].X*this.m_normals[l].X+this.m_normals[r].Y*this.m_normals[l].Y);b>=this.m_miterLim?this.DoMiter(r,l,b):this.DoSquare(r,l);break}case n.JoinType.jtSquare:this.DoSquare(r,l);break;case n.JoinType.jtRound:this.DoRound(r,l);break}return l=r,l},n.ClipperOffset.prototype.DoSquare=function(r,l){var h=Math.tan(Math.atan2(this.m_sinA,this.m_normals[l].X*this.m_normals[r].X+this.m_normals[l].Y*this.m_normals[r].Y)/4);this.m_destPoly.push(new n.IntPoint2(n.ClipperOffset.Round(this.m_srcPoly[r].X+this.m_delta*(this.m_normals[l].X-this.m_normals[l].Y*h)),n.ClipperOffset.Round(this.m_srcPoly[r].Y+this.m_delta*(this.m_normals[l].Y+this.m_normals[l].X*h)))),this.m_destPoly.push(new n.IntPoint2(n.ClipperOffset.Round(this.m_srcPoly[r].X+this.m_delta*(this.m_normals[r].X+this.m_normals[r].Y*h)),n.ClipperOffset.Round(this.m_srcPoly[r].Y+this.m_delta*(this.m_normals[r].Y-this.m_normals[r].X*h))))},n.ClipperOffset.prototype.DoMiter=function(r,l,h){var d=this.m_delta/h;this.m_destPoly.push(new n.IntPoint2(n.ClipperOffset.Round(this.m_srcPoly[r].X+(this.m_normals[l].X+this.m_normals[r].X)*d),n.ClipperOffset.Round(this.m_srcPoly[r].Y+(this.m_normals[l].Y+this.m_normals[r].Y)*d)))},n.ClipperOffset.prototype.DoRound=function(r,l){for(var h=Math.atan2(this.m_sinA,this.m_normals[l].X*this.m_normals[r].X+this.m_normals[l].Y*this.m_normals[r].Y),d=Math.max(n.Cast_Int32(n.ClipperOffset.Round(this.m_StepsPerRad*Math.abs(h))),1),b=this.m_normals[l].X,P=this.m_normals[l].Y,F,X=0;X<d;++X)this.m_destPoly.push(new n.IntPoint2(n.ClipperOffset.Round(this.m_srcPoly[r].X+b*this.m_delta),n.ClipperOffset.Round(this.m_srcPoly[r].Y+P*this.m_delta))),F=b,b=b*this.m_cos-this.m_sin*P,P=F*this.m_sin+P*this.m_cos;this.m_destPoly.push(new n.IntPoint2(n.ClipperOffset.Round(this.m_srcPoly[r].X+this.m_normals[r].X*this.m_delta),n.ClipperOffset.Round(this.m_srcPoly[r].Y+this.m_normals[r].Y*this.m_delta)))},n.Error=function(r){try{throw new Error(r)}catch(l){alert(l.message)}},n.JS={},n.JS.AreaOfPolygon=function(r,l){return l||(l=1),n.Clipper.Area(r)/(l*l)},n.JS.AreaOfPolygons=function(r,l){l||(l=1);for(var h=0,d=0;d<r.length;d++)h+=n.Clipper.Area(r[d]);return h/(l*l)},n.JS.BoundsOfPath=function(r,l){return n.JS.BoundsOfPaths([r],l)},n.JS.BoundsOfPaths=function(r,l){l||(l=1);var h=n.Clipper.GetBounds(r);return h.left/=l,h.bottom/=l,h.right/=l,h.top/=l,h},n.JS.Clean=function(d,l){if(!(d instanceof Array))return[];var h=d[0]instanceof Array,d=n.JS.Clone(d);if(typeof l!="number"||l===null)return n.Error("Delta is not a number in Clean()."),d;if(d.length===0||d.length===1&&d[0].length===0||l<0)return d;h||(d=[d]);for(var b=d.length,P,F,X,Y,Q,yt,gt,Mt=[],Jt=0;Jt<b;Jt++)if(F=d[Jt],P=F.length,P!==0){if(P<3){X=F,Mt.push(X);continue}for(X=F,Y=l*l,Q=F[0],yt=1,gt=1;gt<P;gt++)(F[gt].X-Q.X)*(F[gt].X-Q.X)+(F[gt].Y-Q.Y)*(F[gt].Y-Q.Y)<=Y||(X[yt]=F[gt],Q=F[gt],yt++);Q=F[yt-1],(F[0].X-Q.X)*(F[0].X-Q.X)+(F[0].Y-Q.Y)*(F[0].Y-Q.Y)<=Y&&yt--,yt<P&&X.splice(yt,P-yt),X.length&&Mt.push(X)}return!h&&Mt.length?Mt=Mt[0]:!h&&Mt.length===0?Mt=[]:h&&Mt.length===0&&(Mt=[[]]),Mt},n.JS.Clone=function(r){if(!(r instanceof Array))return[];if(r.length===0)return[];if(r.length===1&&r[0].length===0)return[[]];var l=r[0]instanceof Array;l||(r=[r]);var h=r.length,d,b,P,F,X=new Array(h);for(b=0;b<h;b++){for(d=r[b].length,F=new Array(d),P=0;P<d;P++)F[P]={X:r[b][P].X,Y:r[b][P].Y};X[b]=F}return l||(X=X[0]),X},n.JS.Lighten=function(r,l){if(!(r instanceof Array))return[];if(typeof l!="number"||l===null)return n.Error("Tolerance is not a number in Lighten()."),n.JS.Clone(r);if(r.length===0||r.length===1&&r[0].length===0||l<0)return n.JS.Clone(r);var h=r[0]instanceof Array;h||(r=[r]);var d,b,P,F,X,Y,Q,yt,gt,Mt,Jt,oe,ye,Be,Pn,oi,As,cm=r.length,hm=l*l,Ps=[];for(d=0;d<cm;d++)if(P=r[d],Y=P.length,Y!==0){for(F=0;F<1e6;F++){for(X=[],Y=P.length,P[Y-1].X!==P[0].X||P[Y-1].Y!==P[0].Y?(oe=1,P.push({X:P[0].X,Y:P[0].Y}),Y=P.length):oe=0,Jt=[],b=0;b<Y-2;b++)Q=P[b],gt=P[b+1],yt=P[b+2],oi=Q.X,As=Q.Y,ye=yt.X-oi,Be=yt.Y-As,(ye!==0||Be!==0)&&(Pn=((gt.X-oi)*ye+(gt.Y-As)*Be)/(ye*ye+Be*Be),Pn>1?(oi=yt.X,As=yt.Y):Pn>0&&(oi+=ye*Pn,As+=Be*Pn)),ye=gt.X-oi,Be=gt.Y-As,Mt=ye*ye+Be*Be,Mt<=hm&&(Jt[b+1]=1,b++);for(X.push({X:P[0].X,Y:P[0].Y}),b=1;b<Y-1;b++)Jt[b]||X.push({X:P[b].X,Y:P[b].Y});if(X.push({X:P[Y-1].X,Y:P[Y-1].Y}),oe&&P.pop(),Jt.length)P=X;else break}Y=X.length,X[Y-1].X===X[0].X&&X[Y-1].Y===X[0].Y&&X.pop(),X.length>2&&Ps.push(X)}return h||(Ps=Ps[0]),typeof Ps>"u"&&(Ps=[]),Ps},n.JS.PerimeterOfPath=function(r,l,h){if(typeof r>"u")return 0;var d=Math.sqrt,b=0,P,F,X=0,Y=0,Q=0,yt=0,gt=r.length;if(gt<2)return 0;for(l&&(r[gt]=r[0],gt++);--gt;)P=r[gt],X=P.X,Y=P.Y,F=r[gt-1],Q=F.X,yt=F.Y,b+=d((X-Q)*(X-Q)+(Y-yt)*(Y-yt));return l&&r.pop(),b/h},n.JS.PerimeterOfPaths=function(r,l,h){h||(h=1);for(var d=0,b=0;b<r.length;b++)d+=n.JS.PerimeterOfPath(r[b],l,h);return d},n.JS.ScaleDownPath=function(r,l){var h,d;for(l||(l=1),h=r.length;h--;)d=r[h],d.X=d.X/l,d.Y=d.Y/l},n.JS.ScaleDownPaths=function(r,l){var h,d,b;for(l||(l=1),h=r.length;h--;)for(d=r[h].length;d--;)b=r[h][d],b.X=b.X/l,b.Y=b.Y/l},n.JS.ScaleUpPath=function(r,l){var h,d,b=Math.round;for(l||(l=1),h=r.length;h--;)d=r[h],d.X=b(d.X*l),d.Y=b(d.Y*l)},n.JS.ScaleUpPaths=function(r,l){var h,d,b,P=Math.round;for(l||(l=1),h=r.length;h--;)for(d=r[h].length;d--;)b=r[h][d],b.X=P(b.X*l),b.Y=P(b.Y*l)},n.ExPolygons=function(){return[]},n.ExPolygon=function(){this.outer=null,this.holes=null},n.JS.AddOuterPolyNodeToExPolygons=function(r,l){var h=new n.ExPolygon;h.outer=r.Contour();var d=r.Childs(),b=d.length;h.holes=new Array(b);var P,F,X,Y,Q,yt;for(X=0;X<b;X++)for(P=d[X],h.holes[X]=P.Contour(),Y=0,Q=P.Childs(),yt=Q.length;Y<yt;Y++)F=Q[Y],n.JS.AddOuterPolyNodeToExPolygons(F,l);l.push(h)},n.JS.ExPolygonsToPaths=function(r){var l,h,d,b,P=new n.Paths;for(l=0,d=r.length;l<d;l++)for(P.push(r[l].outer),h=0,b=r[l].holes.length;h<b;h++)P.push(r[l].holes[h]);return P},n.JS.PolyTreeToExPolygons=function(r){var l=new n.ExPolygons,h,d,b,P;for(d=0,b=r.Childs(),P=b.length;d<P;d++)h=b[d],n.JS.AddOuterPolyNodeToExPolygons(h,l);return l}})()});function kc(n,t,e,i=nn.default.PolyFillType.pftNonZero){let s=new nn.default.Clipper;s.AddPaths(ea(t),nn.default.PolyType.ptSubject,!0),e&&s.AddPaths(ea(e),nn.default.PolyType.ptClip,!0);let o=new nn.default.Paths;return s.Execute(n,o,i,i),Bc(o)}function Ve(n,t,e=Dm/Ni){return n.length?(t<-2*Uc&&(n=gf(n,-Uc,e),t+=Uc),gf(n,t,e)):[]}function gf(n,t,e){if(!n.length)return[];let i=new nn.default.ClipperOffset(2,e*Ni);i.AddPaths(ea(n),nn.default.JoinType.jtRound,nn.default.EndType.etClosedPolygon);let s=new nn.default.Paths;return i.Execute(s,t*Ni),Bc(s)}function mn(n){let t=0;for(let e=0,i=n.length-1;e<n.length;i=e++)t+=(n[i][0]+n[e][0])*(n[i][1]-n[e][1]);return-t/2}function Wr(n){let t=1/0,e=1/0,i=-1/0,s=-1/0;for(let o of n)for(let[c,a]of o)c<t&&(t=c),c>i&&(i=c),a<e&&(e=a),a>s&&(s=a);return{minX:t,minY:e,maxX:i,maxY:s}}function Di(n){if(!n.length)return[];let t=new nn.default.Clipper;t.AddPaths(ea(n),nn.default.PolyType.ptSubject,!0);let e=new nn.default.PolyTree;t.Execute(nn.default.ClipType.ctUnion,e,nn.default.PolyFillType.pftNonZero,nn.default.PolyFillType.pftNonZero);let i=[],s=o=>{for(let c of o.Childs()){if(c.IsHole()){s(c);continue}let a=c.Childs().map(u=>u.Contour());i.push(Bc([c.Contour(),...a]));for(let u of c.Childs())s(u)}};return s(e),i}function yi([n,t],e){let i=!1;for(let s=0,o=e.length-1;s<e.length;o=s++){let[c,a]=e[s],[u,f]=e[o];a>t!=f>t&&n<(u-c)*(t-a)/(f-a)+c&&(i=!i)}return i}function zc(n,t){if(!yi(n,t[0]))return!1;for(let e=1;e<t.length;e++)if(yi(n,t[e]))return!1;return!0}function Cn(n,t=1e-4){return n.filter(e=>e.length>=3&&Math.abs(mn(e))>t)}function Om(n,t=.005){if(n.length<8)return n;let e=0,i=-1;for(let a=1;a<n.length;a++){let u=(n[a][0]-n[0][0])**2+(n[a][1]-n[0][1])**2;u>i&&(i=u,e=a)}let s=a=>{let u=new Uint8Array(a.length);u[0]=u[a.length-1]=1;let f=[[0,a.length-1]];for(;f.length;){let[p,g]=f.pop(),[m,x]=a[p],[v,M]=a[g],y=Math.hypot(v-m,M-x)||1e-12,_=-1,T=t;for(let C=p+1;C<g;C++){let S=Math.abs((v-m)*(x-a[C][1])-(m-a[C][0])*(M-x))/y;S>T&&(T=S,_=C)}_>0&&(u[_]=1,f.push([p,_],[_,g]))}return a.filter((p,g)=>u[g])},o=s(n.slice(0,e+1)),c=s([...n.slice(e),n[0]]);return[...o,...c.slice(1,-1)]}var nn,Ni,Dm,ea,Bc,_i,os,na,Uc,Xr,as,Yr=fe(()=>{nn=Lu(mf(),1),Ni=1e3,Dm=.01*Ni,ea=n=>n.map(t=>t.map(([e,i])=>({X:Math.round(e*Ni),Y:Math.round(i*Ni)}))),Bc=n=>n.map(t=>t.map(e=>[e.X/Ni,e.Y/Ni]));_i=n=>kc(nn.default.ClipType.ctUnion,n,null),os=(n,t)=>kc(nn.default.ClipType.ctDifference,n,t),na=(n,t)=>kc(nn.default.ClipType.ctIntersection,n,t);Uc=.005;Xr=n=>n.reduce((t,e)=>t+mn(e),0);as=(n,t)=>n.map(e=>Om(e,t)).filter(e=>e.length>=3)});function sa(n){let t=String(n.type||"").toLowerCase().replace(/[-_]/g," ");return/keyhole|round ?over|\bcove\b|bowl|ogee|dovetail/i.test(n.name||"")?"profile":Fm.has(t)||t.startsWith("flat")?"flat":t.startsWith("surfac")?"surfacing":t.startsWith("drill")?"drill":t.startsWith("ball")?"ball":t.startsWith("v")?"vbit":t.startsWith("chamfer")?"chamfer":t.startsWith("thread")?"threadmill":t||"flat"}function cs(n,t){return(typeof t=="string"?t:t?.mode)==="toolId"?n.toolId??n.id:n.toolNumber?n.toolNumber:t?.manual?.get(n.id)??n.toolId??n.id}function xf(n,t,e=0,i=null){if(n==="toolId")return{mode:n};let s=new Set(t.filter(u=>u.toolNumber).map(u=>u.toolNumber));for(let u=1;u<=e;u++)s.add(u);i&&s.add(i);let o=new Map,c=t.filter(u=>!u.toolNumber);for(let u of c){let f=u.toolId??u.id;f>e&&!s.has(f)&&(o.set(u.id,f),s.add(f))}let a=e+1;for(let u of c)if(!o.has(u.id)){for(;s.has(a);)a++;o.set(u.id,a),s.add(a)}return{mode:n,manual:o}}function yf(n){return(n||[]).filter(t=>t&&t.diameter>0).map(t=>({id:t.id,toolId:t.toolId??t.id,toolNumber:t.toolNumber??null,name:t.name||`${t.diameter} mm ${sa(t)}`,kind:sa(t),diameter:Number(t.diameter),fluteLength:Number(t.dimensions?.flute_length)||null,flutes:Number(t.metadata?.flutes)||2,.../^(vbit|chamfer)$/.test(sa(t))?{angle:Bm(t)}:{},...sa(t)==="threadmill"?Um(t):{}}))}function Um(n){let t=n.metadata||{},i=[t.sku,n.name,t.notes].filter(Boolean).join(" ").match(/D\s*(\d+(?:\.\d+)?)\s*[×xX*]\s*P(?:itch)?\s*(\d+(?:\.\d+)?)\s*-\s*(\d+(?:\.\d+)?)/),s=Number(t.cut_diameter)||Number(i?i[1]:n.diameter),o=Number(t.reach)||Number(n.dimensions?.neck_length)||0;return{cut:s,pitchMin:Number(t.pitch_min)||(i?Number(i[2]):0),pitchMax:Number(t.pitch_max)||(i?Number(i[3]):1/0),reach:o||3*s,reachAssumed:!o,neck:Number(t.neck_diameter)||.7*s}}function Bm(n){let t=Number(n.dimensions?.taper_angle);if(t>0&&t<90)return t*2;let e=String(n.name||"").match(/(\d{2,3}(?:\.\d+)?)\s*(?:°|º|deg\b|degrees?\b)/i),i=e?Number(e[1]):0;return i>0&&i<180?i:90}function _f(n,t,e,i={}){let s=ls[t]||ls.mdf,o=vi[e]||vi.balanced,c=i.maxRpm||24e3,a=i.minRpm||0,u=Math.round(Math.min(c,Math.max(a,s.rpm))),f=Math.min(s.maxChip,s.chip*n.diameter),p=Math.min(i.maxFeed||4e3,4e3),g=Math.round(Math.min(p,Math.max(150,u*n.flutes*f*o.feed)));return{rpm:u,feed:g,plunge:Math.round(Math.max(60,g*.3)),stepdown:Math.max(.05,n.diameter*s.stepdown*o.stepdown),stepover:Math.max(.05,n.diameter*Math.min(.9,s.stepover*o.stepover)),rampAngle:s.ramp}}var ls,vi,Fm,Oi,$r=fe(()=>{ls={softwood:{name:"Softwood",note:"Pine, cedar",rpm:18e3,chip:.012,maxChip:.25,stepdown:.5,stepover:.45,ramp:5},hardwood:{name:"Hardwood",note:"Oak, maple, walnut",rpm:18e3,chip:.009,maxChip:.2,stepdown:.35,stepover:.4,ramp:4},mdf:{name:"MDF / Plywood",note:"Sheet goods",rpm:18e3,chip:.012,maxChip:.25,stepdown:.5,stepover:.45,ramp:5},plastic:{name:"Plastic",note:"Acrylic, HDPE",rpm:16e3,chip:.01,maxChip:.2,stepdown:.3,stepover:.4,ramp:3},aluminum:{name:"Aluminum",note:"6061",rpm:18e3,chip:.003,maxChip:.05,stepdown:.1,stepover:.25,ramp:2},foam:{name:"Foam",note:"Tooling board",rpm:12e3,chip:.02,maxChip:.4,stepdown:1,stepover:.6,ramp:10}},vi={fast:{name:"Fast",feed:1.15,stepdown:1.2,stepover:1.1,allowance:0},balanced:{name:"Balanced",feed:1,stepdown:1,stepover:1,allowance:.2},smooth:{name:"Smooth",feed:.85,stepdown:.8,stepover:.7,allowance:.25}},Fm=new Set(["flat","flat end mill","endmill","end mill","flat_end_mill"]);Oi=n=>n==="aluminum"?{height:1,length:1}:{height:2,length:2}});var Mn={};Ru(Mn,{INCH:()=>km,len:()=>Vc,num:()=>vf,toMm:()=>Vm,unitsFrom:()=>zm});function vf(n,t="mm",e=t==="in"?3:1){let i=t==="in"?n/25.4:n;return(Math.round(i*10**e)/10**e).toLocaleString("en-US",{maximumFractionDigits:e})}var km,zm,Vc,Vm,Hc=fe(()=>{km=25.4,zm=n=>n==="imperial"?"in":"mm";Vc=(n,t="mm",e)=>`${vf(n,t,e)} ${t}`,Vm=(n,t="mm")=>t==="in"?n*25.4:n});function la(n){let t=n.flatMap(x=>x.pts);if(!t.length)return{shapes:[],size:[0,0],nest:[]};let e=Math.min(...t.map(x=>x[0])),i=Math.min(...t.map(x=>x[1])),s=Math.max(...t.map(x=>x[0])),o=Math.max(...t.map(x=>x[1])),c=n.map(x=>({...x,pts:x.pts.map(([v,M])=>[v-e,M-i])})),a=c.map(x=>x.closed&&x.pts.length>2&&Math.abs(mn(Mf(x.pts)))>oa?Hm(Mf(x.pts)):null),u=a.map(x=>x?mn(x):0),f=c.map((x,v)=>{let M=x.pts[0],y=-1,_=0;return a.forEach((T,C)=>{!T||C===v||u[C]<=u[v]||!yi(M,T)||(_++,(y<0||u[C]<u[y])&&(y=C))}),{parent:y,depth:_}}),p=a.map(x=>x?Gm(x):null),g=x=>c[x].layer??c[x].color,m=(x,v)=>p[x]&&p[v]&&g(x)===g(v)&&Math.hypot(p[x].x-p[v].x,p[x].y-p[v].y)<.05;return f.forEach((x,v)=>{if(x.step=null,!p[v])return;let M=0,y=v;for(let T=x.parent;T>=0&&m(v,T);T=f[T].parent)M++,y=T;let _=f.some((T,C)=>T.parent===v&&m(v,C));(M||_)&&f[y].depth>0&&(x.step=M,x.last=!_)}),{shapes:c,loops:a,areas:u,nest:f,circles:p,size:[s-e,o-i]}}function Gm(n){if(n.length<12)return null;let t=n.reduce((o,c)=>o+c[0],0)/n.length,e=n.reduce((o,c)=>o+c[1],0)/n.length,i=n.map(o=>Math.hypot(o[0]-t,o[1]-e)),s=i.reduce((o,c)=>o+c,0)/i.length;return s>0&&i.every(o=>Math.abs(o-s)<=Math.max(.01*s,.02))&&Math.abs(Math.abs(mn(n))-Math.PI*s*s)<=.03*Math.PI*s*s?{x:t,y:e,r:s}:null}function wf(n,t){if(!n.loops[t])return"online";let e=n.nest[t];return e.step!==null&&e.step!==void 0?e.last?"inside":"pocket":e.depth%2?"inside":"outside"}function Ef(n,t=6){return{material:"mdf",finish:"balanced",stock:{fit:!0,margin:5,width:n.size[0]+10,depth:n.size[1]+10,thickness:t},zero:{xy:"front-left",z:"top"},tabs:{enabled:!0,count:4,...Oi("mdf")},throughDepth:.3,groups:{},layers:{},shapes:{},depths:{pocket:3,online:1},disabled:{},toolOverride:{}}}function Gc(n){let t=new Map,e=o=>Math.round(o*100)/100,i=new Set(n.shapes.map(o=>o.layer??o.color)).size>1;n.shapes.forEach((o,c)=>{let a=wf(n,c),u=n.nest[c],f=n.circles[c],p=i?`${o.layer??o.color}:`:"",g,m,x;if(!n.loops[c])g=`line:${p}`,m="line",x="line";else if(a==="outside"&&u.depth===0)g=`outline:${p}`,m="outline",x="outline";else if(f&&u.step!==null&&u.step!==void 0){let v=c;for(;n.nest[v].step>0;)v=n.nest[v].parent;let M=[];for(let y=v;y>=0;)M.push(e(2*n.circles[y].r)),y=n.nest.findIndex((T,C)=>T.parent===y&&n.nest[C].step===n.nest[y].step+1);g=`cb:${p}${M.join("/")}:${u.step}`,m="counterbore",x={d:2*f.r,sizes:M,step:u.step,last:u.last}}else if(f)g=`circle:${p}${e(2*f.r)}:${a}`,m="circle",x={d:2*f.r};else{let v=Wr([n.loops[c]]),M=v.maxX-v.minX,y=v.maxY-v.minY,_=Math.abs(n.areas[c]-M*y)<.01*M*y;g=`shape:${p}${e(M)}x${e(y)}:${Math.round(n.areas[c])}:${a}`,m=_?"rect":"shape",x={w:M,h:y}}t.has(g)||t.set(g,{key:g,kind:m,label:x,layer:i?o.layer??o.color:null,idx:[],cut:a}),t.get(g).idx.push(c)});let s={outline:0,counterbore:1,circle:2,rect:3,shape:4,line:5};return[...t.values()].sort((o,c)=>s[o.kind]-s[c.kind]||(c.label?.d||0)-(o.label?.d||0)||o.key.localeCompare(c.key))}function Rs(n){let t=new Map;for(let e of n)for(let i of e.idx)t.set(i,e.key);return t}function Fi(n,t,e,i=null){let s=n.shapes[e],o=t.shapes?.[e]||i&&t.groups?.[i.get(e)],c=t.layers?.[s.layer??s.color],a=o?.cut||c?.cut||wf(n,e),u=n.nest[e],f=a==="pocket"&&u.step!==null&&u.step!==void 0,p=o?.depth!==void 0?o.depth:c?.depth!==void 0?c.depth:f?t.depths.pocket*(u.step+1):a==="pocket"||a==="online"?t.depths[a]:null;return{cut:a==="online"||a==="off"||n.loops[e]?a:"online",depth:p}}function ca(n,t){let[e,i]=n.size,s=t.stock,o=s.fit?e+2*s.margin:Math.max(e,s.width),c=s.fit?i+2*s.margin:Math.max(i,s.depth),a=s.thickness;return{minX:(e-o)/2,minY:(i-c)/2,maxX:(e+o)/2,maxY:(i+c)/2,bottom:0,top:a,width:o,depth:c,thickness:a}}function Xc(n,t){let e=t.xy.split("-"),i=(n.minX+n.maxX)/2,s=(n.minY+n.maxY)/2;return e.includes("left")&&(i=n.minX),e.includes("right")&&(i=n.maxX),e.includes("front")&&(s=n.minY),e.includes("back")&&(s=n.maxY),{x:i,y:s,z:t.z==="bed"?n.bottom:n.top}}function Tf(n,t,e,i={}){let s=N=>Vc(N,e.units),o=ca(n,e),c=o.top,a=[],u=[],f=t.filter(N=>N.kind==="flat").sort((N,U)=>U.diameter-N.diameter),p=e.material==="aluminum"?8:12.8,g=new Set,m=N=>(g.add(N.id),N),x=N=>N==null||N>=c-1e-6?-e.throughDepth:Math.max(c-N,0),v=N=>c-N,M=N=>N==null||N>=c-1e-6?"through":`${s(N)} deep`,y=new Map,_=Rs(Gc(n));n.shapes.forEach((N,U)=>{let V=Fi(n,e,U,_);if(V.cut==="off")return;let k=x(V.depth),z=`${V.cut}@${k}`;y.has(z)||y.set(z,{cut:V.cut,z:k,depth:V.depth,idx:[]}),y.get(z).idx.push(U)});let T=[...y.values()],C=n.shapes.map((N,U)=>Fi(n,e,U,_).cut),S=N=>{for(let U=n.nest[N].parent;U>=0;U=n.nest[U].parent)if(C[U]==="pocket")return!0;return!1},L=N=>T.filter(U=>U.cut===N).sort((U,V)=>V.z-U.z),E=(N,U)=>Xr(Ve(Ve(N,-U),U))/Math.max(Xr(N),oa);for(let N of L("online")){let U=f.slice().reverse().find(k=>ra(k,v(N.z)));if(!U){a.push({kind:"notool",text:`No end mill reaches ${M(N.depth)} for the lines.`});continue}let V=N.idx.map(k=>({pts:n.shapes[k].pts,closed:!!n.loops[k]}));u.push({id:`online@${N.z}`,kind:"online",label:"Cut on the lines",tool:m(U),zTop:c,zBottom:N.z,lines:V,count:N.idx.length,detail:`${N.idx.length} line${N.idx.length>1?"s":""} \xB7 ${M(N.depth)}`})}for(let N of L("pocket")){let U=n.loops.map((G,$)=>G&&C[$]==="outside"&&N.idx.some(it=>Xm(n,$,it))?G:null).filter(Boolean),V=Cn(os(bf(N.idx.map(G=>n.loops[G])),_i(U)),oa);if(!V.length)continue;let k=f.filter(G=>G.diameter<=p&&ra(G,v(N.z))&&Ve(V,-G.diameter/2).length);if(!k.length){a.push({kind:"notool",text:`No end mill fits the pockets ${M(N.depth)}.`});continue}let z=k.map(G=>({t:G,c:E(V,G.diameter/2)})),H=z.find(G=>G.c>=.95)||z.reduce((G,$)=>$.c>G.c?$:G);H.c<.995&&a.push({kind:"corners",text:`${H.t.name} leaves the pockets' tightest corners rounded.`}),u.push({id:`pocket@${N.z}`,kind:"pocket",label:N.idx.length>1?`Clear ${N.idx.length} pockets`:"Clear the pocket",tool:m(H.t),zTop:c,zBottom:N.z,region:V,detail:M(N.depth)})}let A=(N,U)=>{let V=f.filter(k=>k.diameter<=p&&ra(k,N)&&U(k));return V.find(k=>g.has(k.id))||V.sort((k,z)=>Math.abs(k.diameter-6.35)-Math.abs(z.diameter-6.35))[0]||null};for(let N of L("inside")){let U=(H,G)=>Ve([G],-(H.diameter/2+.1)).length>0,V=f.filter(H=>H.diameter<=p&&ra(H,v(N.z))),k=new Map,z=0;for(let H of N.idx){let G=n.loops[H],$=V.filter(K=>U(K,G)),it=$.find(K=>g.has(K.id))||$.sort((K,st)=>Math.abs(K.diameter-6.35)-Math.abs(st.diameter-6.35))[0];if(!it){z++;continue}k.has(it)||k.set(it,[]),k.get(it).push(G)}z&&a.push({kind:"notool",text:`No end mill fits inside ${z>1?`${z} shapes`:"a shape"} cut ${M(N.depth)}: left uncut.`});for(let H=!0;H&&k.size>1;){H=!1;let G=V.slice().sort(($,it)=>Math.abs($.diameter-6.35)-Math.abs(it.diameter-6.35))[0];for(let[$,it]of[...k].filter(([K])=>!g.has(K.id)&&K!==G).sort((K,st)=>K[1].length-st[1].length)){let K=[...k.keys()].filter(st=>st!==$).sort((st,ht)=>ht.diameter-st.diameter);if(it.every(st=>K.some(ht=>U(ht,st)))){for(let st of it)k.get(K.find(ht=>U(ht,st))).push(st);k.delete($),H=!0;break}}}[...k].sort((H,G)=>G[0].diameter-H[0].diameter).forEach(([H,G],$)=>{u.push({id:`inside@${N.z}${$?`#${H.id}`:""}`,kind:"inside",label:G.length>1?`Cut ${G.length} shapes inside`:"Cut inside the shape",tool:m(H),zTop:c,zBottom:N.z,loops:G,region:G,tabs:!1,detail:M(N.depth)})})}for(let N of L("outside")){let U=N.idx.filter(H=>!S(H));if(!U.length)continue;let V=bf(U.map(H=>n.loops[H])),k=A(v(N.z),()=>!0);if(!k){a.push({kind:"notool",text:`No end mill is long enough to cut out ${M(N.depth)} (${s(v(N.z))}).`});continue}let z=N.z<0;u.push({id:`cutout@${N.z}`,kind:"cutout",label:"Cut out the parts",tool:m(k),zTop:c,zBottom:N.z,region:V,detail:`${M(N.depth)}${z?` \xB7 ${e.tabs.enabled?`${e.tabs.count} tabs each`:"no tabs"}`:""}`})}for(let N of u){let U=e.toolOverride?.[N.id];if(U){let V=t.find(k=>k.id===U);V&&(N.tool=V)}N.enabled=!e.disabled?.[N.id],N.feeds=_f(N.tool,e.material,e.finish,i)}let w=e.tabs.enabled?e:{...e,tabs:{...e.tabs,enabled:!1}};return{analysis:{top:c,size:[n.size[0],n.size[1],c]},stock:o,zero:Xc(o,e.zero),ops:u,warnings:a,job:w}}function Xm(n,t,e){if(!n.loops[e]||n.areas[t]>=n.areas[e])return!1;for(let i=n.nest[t].parent;i>=0;i=n.nest[i].parent)if(i===e)return!0;return!1}function ha(n){let t=[];for(let e of n.ops)e.enabled&&!t.some(i=>i.id===e.tool.id)&&t.push(e.tool);return t}var aa,oa,bf,Sf,ra,Mf,Hm,Af=fe(()=>{Yr();$r();Hc();aa={outside:"Outer (part)",inside:"Inner (perimeter)",pocket:"Inner (clearing)",online:"On the line",off:"Off"},oa=.01,bf=n=>Cn(Ve(Ve(_i(n),.01),-.01),oa),Sf=["back-left","back-center","back-right","left-center","center","right-center","front-left","front-center","front-right"],ra=(n,t)=>!n.fluteLength||n.fluteLength+1e-6>=t,Mf=n=>n.length>2&&n[0][0]===n.at(-1)[0]&&n[0][1]===n.at(-1)[1]?n.slice(0,-1):n,Hm=n=>mn(n)<0?n.slice().reverse():n});function Wm(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function Ym(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function ao(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Vd(){let n=ao("canvas");return n.style.display="block",n}function lo(...n){let t="THREE."+n.shift();Qs?Qs("log",t,...n):console.log(t,...n)}function Hd(n){let t=n[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=n[1];e&&e.isStackTrace?n[0]+=" "+e.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function Qt(...n){n=Hd(n);let t="THREE."+n.shift();if(Qs)Qs("warn",t,...n);else{let e=n[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...n)}}function ne(...n){n=Hd(n);let t="THREE."+n.shift();if(Qs)Qs("error",t,...n);else{let e=n[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...n)}}function ps(...n){let t=n.join(" ");t in Pf||(Pf[t]=!0,Qt(...n))}function Gd(n,t,e){return new Promise(function(i,s){function o(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(o,e);break;default:i()}}setTimeout(o,e)})}function Ti(){let n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(gn[n&255]+gn[n>>8&255]+gn[n>>16&255]+gn[n>>24&255]+"-"+gn[t&255]+gn[t>>8&255]+"-"+gn[t>>16&15|64]+gn[t>>24&255]+"-"+gn[e&63|128]+gn[e>>8&255]+"-"+gn[e>>16&255]+gn[e>>24&255]+gn[i&255]+gn[i>>8&255]+gn[i>>16&255]+gn[i>>24&255]).toLowerCase()}function ve(n,t,e){return Math.max(t,Math.min(e,n))}function jh(n,t){return(n%t+t)%t}function $m(n,t,e,i,s){return i+(n-t)*(s-i)/(e-t)}function qm(n,t,e){return n!==t?(e-n)/(t-n):0}function io(n,t,e){return(1-e)*n+e*t}function Zm(n,t,e,i){return io(n,t,1-Math.exp(-e*i))}function Jm(n,t=1){return t-Math.abs(jh(n,t*2)-t)}function jm(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*(3-2*n))}function Km(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*n*(n*(n*6-15)+10))}function Qm(n,t){return n+Math.floor(Math.random()*(t-n+1))}function t0(n,t){return n+Math.random()*(t-n)}function e0(n){return n*(.5-Math.random())}function n0(n){n!==void 0&&(Cf=n);let t=Cf+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function i0(n){return n*Zs}function s0(n){return n*tr}function r0(n){return n>0&&Number.isInteger(n)&&2**Math.round(Math.log2(n))===n}function o0(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function a0(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function l0(n,t,e,i,s){let o=Math.cos,c=Math.sin,a=o(e/2),u=c(e/2),f=o((t+i)/2),p=c((t+i)/2),g=o((t-i)/2),m=c((t-i)/2),x=o((i-t)/2),v=c((i-t)/2);switch(s){case"XYX":n.set(a*p,u*g,u*m,a*f);break;case"YZY":n.set(u*m,a*p,u*g,a*f);break;case"ZXZ":n.set(u*g,u*m,a*p,a*f);break;case"XZX":n.set(a*p,u*v,u*x,a*f);break;case"YXY":n.set(u*x,a*p,u*v,a*f);break;case"ZYZ":n.set(u*v,u*x,a*p,a*f);break;default:Qt("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function qn(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:case Uint8ClampedArray:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Ne(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function c0(){let n={enabled:!0,workingColorSpace:ro,spaces:{},convert:function(s,o,c){return this.enabled===!1||o===c||!o||!c||(this.spaces[o].transfer===Le&&(s.r=Ai(s.r),s.g=Ai(s.g),s.b=Ai(s.b)),this.spaces[o].primaries!==this.spaces[c].primaries&&(s.applyMatrix3(this.spaces[o].toXYZ),s.applyMatrix3(this.spaces[c].fromXYZ)),this.spaces[c].transfer===Le&&(s.r=Js(s.r),s.g=Js(s.g),s.b=Js(s.b))),s},workingToColorSpace:function(s,o){return this.convert(s,this.workingColorSpace,o)},colorSpaceToWorking:function(s,o){return this.convert(s,o,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Ci?oo:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,o=this.workingColorSpace){return s.fromArray(this.spaces[o].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,o,c){return s.copy(this.spaces[o].toXYZ).multiply(this.spaces[c].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,o){return ps("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(s,o)},toWorkingColorSpace:function(s,o){return ps("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(s,o)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[ro]:{primaries:t,whitePoint:i,transfer:oo,toXYZ:Rf,fromXYZ:Lf,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:wn},outputColorSpaceConfig:{drawingBufferColorSpace:wn}},[wn]:{primaries:t,whitePoint:i,transfer:Le,toXYZ:Rf,fromXYZ:Lf,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:wn}}}),n}function Ai(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Js(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}function $c(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Qa.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(Qt("Texture: Unable to serialize Texture."),{})}function Jc(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}function sh(n,t,e,i,s){for(let o=0,c=n.length-3;o<=c;o+=3){us.fromArray(n,o);let a=s.x*Math.abs(us.x)+s.y*Math.abs(us.y)+s.z*Math.abs(us.z),u=t.dot(us),f=e.dot(us),p=i.dot(us);if(Math.max(-Math.max(u,f,p),Math.min(u,f,p))>a)return!1}return!0}function va(n,t,e,i,s,o){Ws.subVectors(n,e).addScalar(.5).multiply(i),s!==void 0?(Qr.x=o*Ws.x-s*Ws.y,Qr.y=s*Ws.x+o*Ws.y):Qr.copy(Ws),n.copy(t),n.x+=Qr.x,n.y+=Qr.y,n.applyMatrix4(Yd)}function E0(n,t,e,i,s,o,c,a){let u;if(t.side===Tn?u=i.intersectTriangle(c,o,s,!0,a):u=i.intersectTriangle(s,o,c,t.side===Ki,a),u===null)return null;Pa.copy(a),Pa.applyMatrix4(n.matrixWorld);let f=e.ray.origin.distanceTo(Pa);return f<e.near||f>e.far?null:{distance:f,point:Pa.clone(),object:n}}function Ca(n,t,e,i,s,o,c,a,u,f){n.getVertexPosition(a,wa),n.getVertexPosition(u,Ea),n.getVertexPosition(f,Ta);let p=E0(n,t,e,i,wa,Ea,Ta,Wf);if(p){let g=new q;ci.getBarycoord(Wf,wa,Ea,Ta,g),s&&(p.uv=ci.getInterpolatedAttribute(s,a,u,f,g,new Zt)),o&&(p.uv1=ci.getInterpolatedAttribute(o,a,u,f,g,new Zt)),c&&(p.normal=ci.getInterpolatedAttribute(c,a,u,f,g,new q),p.normal.dot(i.direction)>0&&p.normal.multiplyScalar(-1));let m={a,b:u,c:f,normal:new q,materialIndex:0};ci.getNormal(wa,Ea,Ta,m.normal),p.face=m,p.barycoord=g}return p}function La(n,t,e,i,s,o,c){let a=n.geometry.attributes.position;if(sl.fromBufferAttribute(a,s),rl.fromBufferAttribute(a,o),e.distanceSqToSegment(sl,rl,uh,$f)>i)return;uh.applyMatrix4(n.matrixWorld);let f=t.ray.origin.distanceTo(uh);if(!(f<t.near||f>t.far))return{distance:f,point:$f.clone().applyMatrix4(n.matrixWorld),index:c,face:null,faceIndex:null,barycoord:null,object:n}}function A0(n,t,e=2){let i=t&&t.length,s=i?t[0]*e:n.length,o=$d(n,0,s,e,!0),c=[];if(!o||o.next===o.prev)return c;let a,u,f;if(i&&(o=L0(n,t,o,e)),n.length>80*e){a=n[0],u=n[1];let p=a,g=u;for(let m=e;m<s;m+=e){let x=n[m],v=n[m+1];x<a&&(a=x),v<u&&(u=v),x>p&&(p=x),v>g&&(g=v)}f=Math.max(p-a,g-u),f=f!==0?32767/f:0}return _o(o,c,e,a,u,f,0),c}function $d(n,t,e,i,s){let o;if(s===G0(n,t,e,i)>0)for(let c=t;c<e;c+=i)o=Jf(c/i|0,n[c],n[c+1],o);else for(let c=e-i;c>=t;c-=i)o=Jf(c/i|0,n[c],n[c+1],o);return o&&lr(o,o.next)&&(bo(o),o=o.next),o}function ys(n,t){if(!n)return n;t||(t=n);let e=n,i;do if(i=!1,!e.steiner&&(lr(e,e.next)||Ze(e.prev,e,e.next)===0)){if(bo(e),e=t=e.prev,e===e.next)break;i=!0}else e=e.next;while(i||e!==t);return t}function _o(n,t,e,i,s,o,c){if(!n)return;!c&&o&&U0(n,i,s,o);let a=n;for(;n.prev!==n.next;){let u=n.prev,f=n.next;if(o?C0(n,i,s,o):P0(n)){t.push(u.i,n.i,f.i),bo(n),n=f.next,a=f.next;continue}if(n=f,n===a){c?c===1?(n=I0(ys(n),t),_o(n,t,e,i,s,o,2)):c===2&&R0(n,t,e,i,s,o):_o(ys(n),t,e,i,s,o,1);break}}}function P0(n){let t=n.prev,e=n,i=n.next;if(Ze(t,e,i)>=0)return!1;let s=t.x,o=e.x,c=i.x,a=t.y,u=e.y,f=i.y,p=Math.min(s,o,c),g=Math.min(a,u,f),m=Math.max(s,o,c),x=Math.max(a,u,f),v=i.next;for(;v!==t;){if(v.x>=p&&v.x<=m&&v.y>=g&&v.y<=x&&no(s,a,o,u,c,f,v.x,v.y)&&Ze(v.prev,v,v.next)>=0)return!1;v=v.next}return!0}function C0(n,t,e,i){let s=n.prev,o=n,c=n.next;if(Ze(s,o,c)>=0)return!1;let a=s.x,u=o.x,f=c.x,p=s.y,g=o.y,m=c.y,x=Math.min(a,u,f),v=Math.min(p,g,m),M=Math.max(a,u,f),y=Math.max(p,g,m),_=vh(x,v,t,e,i),T=vh(M,y,t,e,i),C=n.prevZ,S=n.nextZ;for(;C&&C.z>=_&&S&&S.z<=T;){if(C.x>=x&&C.x<=M&&C.y>=v&&C.y<=y&&C!==s&&C!==c&&no(a,p,u,g,f,m,C.x,C.y)&&Ze(C.prev,C,C.next)>=0||(C=C.prevZ,S.x>=x&&S.x<=M&&S.y>=v&&S.y<=y&&S!==s&&S!==c&&no(a,p,u,g,f,m,S.x,S.y)&&Ze(S.prev,S,S.next)>=0))return!1;S=S.nextZ}for(;C&&C.z>=_;){if(C.x>=x&&C.x<=M&&C.y>=v&&C.y<=y&&C!==s&&C!==c&&no(a,p,u,g,f,m,C.x,C.y)&&Ze(C.prev,C,C.next)>=0)return!1;C=C.prevZ}for(;S&&S.z<=T;){if(S.x>=x&&S.x<=M&&S.y>=v&&S.y<=y&&S!==s&&S!==c&&no(a,p,u,g,f,m,S.x,S.y)&&Ze(S.prev,S,S.next)>=0)return!1;S=S.nextZ}return!0}function I0(n,t){let e=n;do{let i=e.prev,s=e.next.next;!lr(i,s)&&Zd(i,e,e.next,s)&&vo(i,s)&&vo(s,i)&&(t.push(i.i,e.i,s.i),bo(e),bo(e.next),e=n=s),e=e.next}while(e!==n);return ys(e)}function R0(n,t,e,i,s,o){let c=n;do{let a=c.next.next;for(;a!==c.prev;){if(c.i!==a.i&&z0(c,a)){let u=Jd(c,a);c=ys(c,c.next),u=ys(u,u.next),_o(c,t,e,i,s,o,0),_o(u,t,e,i,s,o,0);return}a=a.next}c=c.next}while(c!==n)}function L0(n,t,e,i){let s=[];for(let o=0,c=t.length;o<c;o++){let a=t[o]*i,u=o<c-1?t[o+1]*i:n.length,f=$d(n,a,u,i,!1);f===f.next&&(f.steiner=!0),s.push(k0(f))}s.sort(N0);for(let o=0;o<s.length;o++)e=D0(s[o],e);return e}function N0(n,t){let e=n.x-t.x;if(e===0&&(e=n.y-t.y,e===0)){let i=(n.next.y-n.y)/(n.next.x-n.x),s=(t.next.y-t.y)/(t.next.x-t.x);e=i-s}return e}function D0(n,t){let e=O0(n,t);if(!e)return t;let i=Jd(e,n);return ys(i,i.next),ys(e,e.next)}function O0(n,t){let e=t,i=n.x,s=n.y,o=-1/0,c;if(lr(n,e))return e;do{if(lr(n,e.next))return e.next;if(s<=e.y&&s>=e.next.y&&e.next.y!==e.y){let g=e.x+(s-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(g<=i&&g>o&&(o=g,c=e.x<e.next.x?e:e.next,g===i))return c}e=e.next}while(e!==t);if(!c)return null;let a=c,u=c.x,f=c.y,p=1/0;e=c;do{if(i>=e.x&&e.x>=u&&i!==e.x&&qd(s<f?i:o,s,u,f,s<f?o:i,s,e.x,e.y)){let g=Math.abs(s-e.y)/(i-e.x);vo(e,n)&&(g<p||g===p&&(e.x>c.x||e.x===c.x&&F0(c,e)))&&(c=e,p=g)}e=e.next}while(e!==a);return c}function F0(n,t){return Ze(n.prev,n,t.prev)<0&&Ze(t.next,n,n.next)<0}function U0(n,t,e,i){let s=n;do s.z===0&&(s.z=vh(s.x,s.y,t,e,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==n);s.prevZ.nextZ=null,s.prevZ=null,B0(s)}function B0(n){let t,e=1;do{let i=n,s;n=null;let o=null;for(t=0;i;){t++;let c=i,a=0;for(let f=0;f<e&&(a++,c=c.nextZ,!!c);f++);let u=e;for(;a>0||u>0&&c;)a!==0&&(u===0||!c||i.z<=c.z)?(s=i,i=i.nextZ,a--):(s=c,c=c.nextZ,u--),o?o.nextZ=s:n=s,s.prevZ=o,o=s;i=c}o.nextZ=null,e*=2}while(t>1);return n}function vh(n,t,e,i,s){return n=(n-e)*s|0,t=(t-i)*s|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,n|t<<1}function k0(n){let t=n,e=n;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==n);return e}function qd(n,t,e,i,s,o,c,a){return(s-c)*(t-a)>=(n-c)*(o-a)&&(n-c)*(i-a)>=(e-c)*(t-a)&&(e-c)*(o-a)>=(s-c)*(i-a)}function no(n,t,e,i,s,o,c,a){return!(n===c&&t===a)&&qd(n,t,e,i,s,o,c,a)}function z0(n,t){return n.next.i!==t.i&&n.prev.i!==t.i&&!V0(n,t)&&(vo(n,t)&&vo(t,n)&&H0(n,t)&&(Ze(n.prev,n,t.prev)||Ze(n,t.prev,t))||lr(n,t)&&Ze(n.prev,n,n.next)>0&&Ze(t.prev,t,t.next)>0)}function Ze(n,t,e){return(t.y-n.y)*(e.x-t.x)-(t.x-n.x)*(e.y-t.y)}function lr(n,t){return n.x===t.x&&n.y===t.y}function Zd(n,t,e,i){let s=Ua(Ze(n,t,e)),o=Ua(Ze(n,t,i)),c=Ua(Ze(e,i,n)),a=Ua(Ze(e,i,t));return!!(s!==o&&c!==a||s===0&&Fa(n,e,t)||o===0&&Fa(n,i,t)||c===0&&Fa(e,n,i)||a===0&&Fa(e,t,i))}function Fa(n,t,e){return t.x<=Math.max(n.x,e.x)&&t.x>=Math.min(n.x,e.x)&&t.y<=Math.max(n.y,e.y)&&t.y>=Math.min(n.y,e.y)}function Ua(n){return n>0?1:n<0?-1:0}function V0(n,t){let e=n;do{if(e.i!==n.i&&e.next.i!==n.i&&e.i!==t.i&&e.next.i!==t.i&&Zd(e,e.next,n,t))return!0;e=e.next}while(e!==n);return!1}function vo(n,t){return Ze(n.prev,n,n.next)<0?Ze(n,t,n.next)>=0&&Ze(n,n.prev,t)>=0:Ze(n,t,n.prev)<0||Ze(n,n.next,t)<0}function H0(n,t){let e=n,i=!1,s=(n.x+t.x)/2,o=(n.y+t.y)/2;do e.y>o!=e.next.y>o&&e.next.y!==e.y&&s<(e.next.x-e.x)*(o-e.y)/(e.next.y-e.y)+e.x&&(i=!i),e=e.next;while(e!==n);return i}function Jd(n,t){let e=bh(n.i,n.x,n.y),i=bh(t.i,t.x,t.y),s=n.next,o=t.prev;return n.next=t,t.prev=n,e.next=s,s.prev=e,i.next=e,e.prev=i,o.next=i,i.prev=o,i}function Jf(n,t,e,i){let s=bh(n,t,e);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function bo(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function bh(n,t,e){return{i:n,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function G0(n,t,e,i){let s=0;for(let o=t,c=e-i;o<e;o+=i)s+=(n[c]-n[o])*(n[o+1]+n[c+1]),c=o;return s}function jf(n){let t=n.length;t>2&&n[t-1].equals(n[0])&&n.pop()}function Kf(n,t){for(let e=0;e<t.length;e++)n.push(t[e].x),n.push(t[e].y)}function Ms(n){let t={};for(let e in n){t[e]={};for(let i in n[e]){let s=n[e][i];if(Qf(s))s.isRenderTargetTexture?(Qt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=s.clone();else if(Array.isArray(s))if(Qf(s[0])){let o=[];for(let c=0,a=s.length;c<a;c++)o[c]=s[c].clone();t[e][i]=o}else t[e][i]=s.slice();else t[e][i]=s}}return t}function vn(n){let t={};for(let e=0;e<n.length;e++){let i=Ms(n[e]);for(let s in i)t[s]=i[s]}return t}function Qf(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function X0(n){let t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function Qh(n){let t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Me.workingColorSpace}function Ys(n,t){return!n||n.constructor===t?n:typeof t.BYTES_PER_ELEMENT=="number"?new t(n):Array.prototype.slice.call(n)}function dh(n){return n!==void 0&&n.inTangents!==void 0&&n.outTangents!==void 0}function Kd(n,t,e,i,s){let o=1-n;return o*o*o*t+3*o*o*n*e+3*o*n*n*i+n*n*n*s}function $0(n,t,e,i,s){let o=1-n;return 3*o*o*(e-t)+6*o*n*(i-e)+3*n*n*(s-i)}function q0(n,t,e,i,s){let o=(n-t)/(s-t);for(let c=0;c<8;c++){let a=Kd(o,t,e,i,s)-n;if(Math.abs(a)<1e-10)break;let u=$0(o,t,e,i,s);if(Math.abs(u)<1e-10)break;o=Math.max(0,Math.min(1,o-a/u))}return o}function td(n,t){for(let e=0,i=n.length;e!==i;e+=2)n[e]*=t}function od(n,t){return n.distance-t.distance}function Eh(n,t,e,i){let s=!0;if(n.layers.test(t.layers)&&n.raycast(t,e)===!1&&(s=!1),s===!0&&i===!0){let o=n.children;for(let c=0,a=o.length;c<a;c++)Eh(o[c],t,e,!0)}}function nu(n,t,e,i){let s=ig(i);switch(e){case Yh:return n*t;case qh:return n*t/s.components*s.byteLength;case Cl:return n*t/s.components*s.byteLength;case ns:return n*t*2/s.components*s.byteLength;case Il:return n*t*2/s.components*s.byteLength;case $h:return n*t*3/s.components*s.byteLength;case Gn:return n*t*4/s.components*s.byteLength;case Rl:return n*t*4/s.components*s.byteLength;case Fo:case Uo:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Bo:case ko:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Nl:case Ol:return Math.max(n,16)*Math.max(t,8)/4;case Ll:case Dl:return Math.max(n,8)*Math.max(t,8)/2;case Fl:case Ul:case kl:case zl:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Bl:case zo:case Vl:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Hl:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Gl:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case Xl:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case Wl:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case Yl:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case $l:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case ql:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case Zl:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case Jl:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case jl:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case Kl:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case Ql:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case tc:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case ec:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case nc:case ic:case sc:return Math.ceil(n/4)*Math.ceil(t/4)*16;case rc:case oc:return Math.ceil(n/4)*Math.ceil(t/4)*8;case Vo:case ac:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function ig(n){switch(n){case Rn:case Hh:return{byteLength:1,components:1};case pr:case Gh:case ei:return{byteLength:2,components:1};case Al:case Pl:return{byteLength:2,components:4};case Qn:case Tl:case ti:return{byteLength:4,components:1};case Xh:case Wh:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}var Ji,ji,ld,Ah,cd,No,hd,fr,Ki,Tn,_n,pi,dr,Ph,Ch,Ih,ud,_s,fd,dd,pd,md,gd,xd,yd,_d,Rh,Lh,vd,bd,Md,Sd,wd,Ed,Td,Ad,Pd,Ga,Xa,Wa,js,Ya,$a,qa,Za,Nh,Cd,Id,Kn,Dh,Oh,Fh,Uh,Bh,kh,zh,Vh,Qi,vs,Sl,wl,Do,Ja,hi,ja,hn,Rd,Oo,dn,El,ts,Rn,Hh,Gh,pr,Tl,Qn,ti,ei,Al,Pl,mr,Xh,Wh,Yh,$h,Gn,ui,es,qh,Cl,ns,Il,Rl,Fo,Uo,Bo,ko,Ll,Nl,Dl,Ol,Fl,Ul,Bl,kl,zl,zo,Vl,Hl,Gl,Xl,Wl,Yl,$l,ql,Zl,Jl,jl,Kl,Ql,tc,ec,nc,ic,sc,rc,oc,Vo,ac,so,Ka,Va,gh,xh,yh,_h,Ld,lc,Nd,Ci,wn,ro,oo,Le,Ha,Dd,Od,Fd,Ud,cc,Bd,kd,hc,zd,Zh,bs,Jh,Zn,Ks,Pf,Qs,Xd,Jn,gn,Cf,Zs,tr,Kh,Zt,Fn,q,Wc,If,ae,Yc,Rf,Lf,Me,Ls,Qa,h0,er,u0,qc,En,Ye,tl,In,co,el,De,Ns,Wn,f0,d0,Ui,ua,Nn,Nf,Df,Pi,nr,p0,Of,Ds,bi,fa,qr,m0,g0,Ff,Uf,Bf,kf,x0,Os,Zc,sn,Hn,y0,ir,Wd,Bi,da,se,xn,ho,Yn,Mi,jc,Si,Fs,Us,zf,Kc,Qc,th,eh,nh,ih,ci,Hi,wi,$n,pa,Bs,ks,zs,ki,zi,hs,Zr,ma,ga,us,en,xa,_0,ke,uo,fo,ze,v0,Jr,rh,ms,b0,Vn,oh,Vs,Dn,jr,cn,Ge,nl,Sn,po,ah,M0,S0,On,w0,fi,sr,Hs,Kr,Gs,Xs,Ws,Qr,Yd,ya,to,_a,Vf,lh,Hf,mo,Ei,ch,ba,Ma,Gi,Un,Gf,fs,Sa,Xf,wa,Ea,Ta,hh,Aa,Wf,Pa,Ce,il,ds,T0,Ia,rr,jn,sl,rl,Yf,eo,Ra,uh,$f,gs,qf,Zf,xs,go,xo,Xi,ol,yo,Wi,di,or,Na,Da,fh,Oa,ar,Mh,Mo,So,wo,Yi,jd,W0,Y0,Bn,al,kn,ll,cl,Eo,$i,hl,ul,fl,dl,zn,qi,pl,ml,gl,To,Zi,xl,yl,Qd,_l,Ao,Po,ph,ed,nd,vl,Ba,ka,li,Co,Vi,id,sd,yn,cr,Sh,hr,$s,qs,bl,Ml,tu,Z0,eu,J0,j0,K0,Q0,tg,eg,ng,wh,He,jM,rd,Io,ur,Th,ad,za,mh,Ro,Lo,iu=fe(()=>{Ji={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},ji={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},ld=0,Ah=1,cd=2,No=1,hd=2,fr=3,Ki=0,Tn=1,_n=2,pi=0,dr=1,Ph=2,Ch=3,Ih=4,ud=5,_s=100,fd=101,dd=102,pd=103,md=104,gd=200,xd=201,yd=202,_d=203,Rh=204,Lh=205,vd=206,bd=207,Md=208,Sd=209,wd=210,Ed=211,Td=212,Ad=213,Pd=214,Ga=0,Xa=1,Wa=2,js=3,Ya=4,$a=5,qa=6,Za=7,Nh=0,Cd=1,Id=2,Kn=0,Dh=1,Oh=2,Fh=3,Uh=4,Bh=5,kh=6,zh=7,Vh=300,Qi=301,vs=302,Sl=303,wl=304,Do=306,Ja=1e3,hi=1001,ja=1002,hn=1003,Rd=1004,Oo=1005,dn=1006,El=1007,ts=1008,Rn=1009,Hh=1010,Gh=1011,pr=1012,Tl=1013,Qn=1014,ti=1015,ei=1016,Al=1017,Pl=1018,mr=1020,Xh=35902,Wh=35899,Yh=1021,$h=1022,Gn=1023,ui=1026,es=1027,qh=1028,Cl=1029,ns=1030,Il=1031,Rl=1033,Fo=33776,Uo=33777,Bo=33778,ko=33779,Ll=35840,Nl=35841,Dl=35842,Ol=35843,Fl=36196,Ul=37492,Bl=37496,kl=37488,zl=37489,zo=37490,Vl=37491,Hl=37808,Gl=37809,Xl=37810,Wl=37811,Yl=37812,$l=37813,ql=37814,Zl=37815,Jl=37816,jl=37817,Kl=37818,Ql=37819,tc=37820,ec=37821,nc=36492,ic=36494,sc=36495,rc=36283,oc=36284,Vo=36285,ac=36286,so=2300,Ka=2301,Va=2302,gh=2303,xh=2400,yh=2401,_h=2402,Ld=3200,lc=0,Nd=1,Ci="",wn="srgb",ro="srgb-linear",oo="linear",Le="srgb",Ha=7680,Dd=519,Od=512,Fd=513,Ud=514,cc=515,Bd=516,kd=517,hc=518,zd=519,Zh=35044,bs=35048,Jh="300 es",Zn=2e3,Ks=2001;Pf={},Qs=null;Xd={[Ga]:Xa,[Wa]:qa,[Ya]:Za,[js]:$a,[Xa]:Ga,[qa]:Wa,[Za]:Ya,[$a]:js},Jn=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){let i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){let i=this._listeners;if(i===void 0)return;let s=i[t];if(s!==void 0){let o=s.indexOf(e);o!==-1&&s.splice(o,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let i=e[t.type];if(i!==void 0){t.target=this;let s=i.slice(0);for(let o=0,c=s.length;o<c;o++)s[o].call(this,t);t.target=null}}},gn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Cf=1234567,Zs=Math.PI/180,tr=180/Math.PI;Kh={DEG2RAD:Zs,RAD2DEG:tr,generateUUID:Ti,clamp:ve,euclideanModulo:jh,mapLinear:$m,inverseLerp:qm,lerp:io,damp:Zm,pingpong:Jm,smoothstep:jm,smootherstep:Km,randInt:Qm,randFloat:t0,randFloatSpread:e0,seededRandom:n0,degToRad:i0,radToDeg:s0,isPowerOfTwo:r0,ceilPowerOfTwo:o0,floorPowerOfTwo:a0,setQuaternionFromProperEuler:l0,normalize:Ne,denormalize:qn},Zt=class n{static{n.prototype.isVector2=!0}constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,i=this.y,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6],this.y=s[1]*e+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=ve(this.x,t.x,e.x),this.y=ve(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=ve(this.x,t,e),this.y=ve(this.y,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(ve(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(ve(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let i=Math.cos(e),s=Math.sin(e),o=this.x-t.x,c=this.y-t.y;return this.x=o*i-c*s+t.x,this.y=o*s+c*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Fn=class{constructor(t=0,e=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=s}static slerpFlat(t,e,i,s,o,c,a){let u=i[s+0],f=i[s+1],p=i[s+2],g=i[s+3],m=o[c+0],x=o[c+1],v=o[c+2],M=o[c+3];if(g!==M||u!==m||f!==x||p!==v){let y=u*m+f*x+p*v+g*M;y<0&&(m=-m,x=-x,v=-v,M=-M,y=-y);let _=1-a;if(y<.9995){let T=Math.acos(y),C=Math.sin(T);_=Math.sin(_*T)/C,a=Math.sin(a*T)/C,u=u*_+m*a,f=f*_+x*a,p=p*_+v*a,g=g*_+M*a}else{u=u*_+m*a,f=f*_+x*a,p=p*_+v*a,g=g*_+M*a;let T=1/Math.sqrt(u*u+f*f+p*p+g*g);u*=T,f*=T,p*=T,g*=T}}t[e]=u,t[e+1]=f,t[e+2]=p,t[e+3]=g}static multiplyQuaternionsFlat(t,e,i,s,o,c){let a=i[s],u=i[s+1],f=i[s+2],p=i[s+3],g=o[c],m=o[c+1],x=o[c+2],v=o[c+3];return t[e]=a*v+p*g+u*x-f*m,t[e+1]=u*v+p*m+f*g-a*x,t[e+2]=f*v+p*x+a*m-u*g,t[e+3]=p*v-a*g-u*m-f*x,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,s){return this._x=t,this._y=e,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let i=t._x,s=t._y,o=t._z,c=t._order,a=Math.cos,u=Math.sin,f=a(i/2),p=a(s/2),g=a(o/2),m=u(i/2),x=u(s/2),v=u(o/2);switch(c){case"XYZ":this._x=m*p*g+f*x*v,this._y=f*x*g-m*p*v,this._z=f*p*v+m*x*g,this._w=f*p*g-m*x*v;break;case"YXZ":this._x=m*p*g+f*x*v,this._y=f*x*g-m*p*v,this._z=f*p*v-m*x*g,this._w=f*p*g+m*x*v;break;case"ZXY":this._x=m*p*g-f*x*v,this._y=f*x*g+m*p*v,this._z=f*p*v+m*x*g,this._w=f*p*g-m*x*v;break;case"ZYX":this._x=m*p*g-f*x*v,this._y=f*x*g+m*p*v,this._z=f*p*v-m*x*g,this._w=f*p*g+m*x*v;break;case"YZX":this._x=m*p*g+f*x*v,this._y=f*x*g+m*p*v,this._z=f*p*v-m*x*g,this._w=f*p*g-m*x*v;break;case"XZY":this._x=m*p*g-f*x*v,this._y=f*x*g-m*p*v,this._z=f*p*v+m*x*g,this._w=f*p*g+m*x*v;break;default:Qt("Quaternion: .setFromEuler() encountered an unknown order: "+c)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let i=e/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,i=e[0],s=e[4],o=e[8],c=e[1],a=e[5],u=e[9],f=e[2],p=e[6],g=e[10],m=i+a+g;if(m>0){let x=.5/Math.sqrt(m+1);this._w=.25/x,this._x=(p-u)*x,this._y=(o-f)*x,this._z=(c-s)*x}else if(i>a&&i>g){let x=2*Math.sqrt(1+i-a-g);this._w=(p-u)/x,this._x=.25*x,this._y=(s+c)/x,this._z=(o+f)/x}else if(a>g){let x=2*Math.sqrt(1+a-i-g);this._w=(o-f)/x,this._x=(s+c)/x,this._y=.25*x,this._z=(u+p)/x}else{let x=2*Math.sqrt(1+g-i-a);this._w=(c-s)/x,this._x=(o+f)/x,this._y=(u+p)/x,this._z=.25*x}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<1e-8?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ve(this.dot(t),-1,1)))}rotateTowards(t,e){let i=this.angleTo(t);if(i===0)return this;let s=Math.min(1,e/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let i=t._x,s=t._y,o=t._z,c=t._w,a=e._x,u=e._y,f=e._z,p=e._w;return this._x=i*p+c*a+s*f-o*u,this._y=s*p+c*u+o*a-i*f,this._z=o*p+c*f+i*u-s*a,this._w=c*p-i*a-s*u-o*f,this._onChangeCallback(),this}slerp(t,e){let i=t._x,s=t._y,o=t._z,c=t._w,a=this.dot(t);a<0&&(i=-i,s=-s,o=-o,c=-c,a=-a);let u=1-e;if(a<.9995){let f=Math.acos(a),p=Math.sin(f);u=Math.sin(u*f)/p,e=Math.sin(e*f)/p,this._x=this._x*u+i*e,this._y=this._y*u+s*e,this._z=this._z*u+o*e,this._w=this._w*u+c*e,this._onChangeCallback()}else this._x=this._x*u+i*e,this._y=this._y*u+s*e,this._z=this._z*u+o*e,this._w=this._w*u+c*e,this.normalize();return this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),o=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),o*Math.sin(e),o*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},q=class n{static{n.prototype.isVector3=!0}constructor(t=0,e=0,i=0){this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(If.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(If.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,i=this.y,s=this.z,o=t.elements;return this.x=o[0]*e+o[3]*i+o[6]*s,this.y=o[1]*e+o[4]*i+o[7]*s,this.z=o[2]*e+o[5]*i+o[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,i=this.y,s=this.z,o=t.elements,c=1/(o[3]*e+o[7]*i+o[11]*s+o[15]);return this.x=(o[0]*e+o[4]*i+o[8]*s+o[12])*c,this.y=(o[1]*e+o[5]*i+o[9]*s+o[13])*c,this.z=(o[2]*e+o[6]*i+o[10]*s+o[14])*c,this}applyQuaternion(t){let e=this.x,i=this.y,s=this.z,o=t.x,c=t.y,a=t.z,u=t.w,f=2*(c*s-a*i),p=2*(a*e-o*s),g=2*(o*i-c*e);return this.x=e+u*f+c*g-a*p,this.y=i+u*p+a*f-o*g,this.z=s+u*g+o*p-c*f,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,i=this.y,s=this.z,o=t.elements;return this.x=o[0]*e+o[4]*i+o[8]*s,this.y=o[1]*e+o[5]*i+o[9]*s,this.z=o[2]*e+o[6]*i+o[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=ve(this.x,t.x,e.x),this.y=ve(this.y,t.y,e.y),this.z=ve(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=ve(this.x,t,e),this.y=ve(this.y,t,e),this.z=ve(this.z,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(ve(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let i=t.x,s=t.y,o=t.z,c=e.x,a=e.y,u=e.z;return this.x=s*u-o*a,this.y=o*c-i*u,this.z=i*a-s*c,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return Wc.copy(this).projectOnVector(t),this.sub(Wc)}reflect(t){return this.sub(Wc.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(ve(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return e*e+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){let s=Math.sin(e)*t;return this.x=s*Math.sin(i),this.y=Math.cos(e)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Wc=new q,If=new Fn,ae=class n{static{n.prototype.isMatrix3=!0}constructor(t,e,i,s,o,c,a,u,f){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,s,o,c,a,u,f)}set(t,e,i,s,o,c,a,u,f){let p=this.elements;return p[0]=t,p[1]=s,p[2]=a,p[3]=e,p[4]=o,p[5]=u,p[6]=i,p[7]=c,p[8]=f,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,s=e.elements,o=this.elements,c=i[0],a=i[3],u=i[6],f=i[1],p=i[4],g=i[7],m=i[2],x=i[5],v=i[8],M=s[0],y=s[3],_=s[6],T=s[1],C=s[4],S=s[7],L=s[2],E=s[5],A=s[8];return o[0]=c*M+a*T+u*L,o[3]=c*y+a*C+u*E,o[6]=c*_+a*S+u*A,o[1]=f*M+p*T+g*L,o[4]=f*y+p*C+g*E,o[7]=f*_+p*S+g*A,o[2]=m*M+x*T+v*L,o[5]=m*y+x*C+v*E,o[8]=m*_+x*S+v*A,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[1],s=t[2],o=t[3],c=t[4],a=t[5],u=t[6],f=t[7],p=t[8];return e*c*p-e*a*f-i*o*p+i*a*u+s*o*f-s*c*u}invert(){let t=this.elements,e=t[0],i=t[1],s=t[2],o=t[3],c=t[4],a=t[5],u=t[6],f=t[7],p=t[8],g=p*c-a*f,m=a*u-p*o,x=f*o-c*u,v=e*g+i*m+s*x;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);let M=1/v;return t[0]=g*M,t[1]=(s*f-p*i)*M,t[2]=(a*i-s*c)*M,t[3]=m*M,t[4]=(p*e-s*u)*M,t[5]=(s*o-a*e)*M,t[6]=x*M,t[7]=(i*u-f*e)*M,t[8]=(c*e-i*o)*M,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,s,o,c,a){let u=Math.cos(o),f=Math.sin(o);return this.set(i*u,i*f,-i*(u*c+f*a)+c+t,-s*f,s*u,-s*(-f*c+u*a)+a+e,0,0,1),this}scale(t,e){return ps("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Yc.makeScale(t,e)),this}rotate(t){return ps("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Yc.makeRotation(-t)),this}translate(t,e){return ps("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Yc.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,i=t.elements;for(let s=0;s<9;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Yc=new ae,Rf=new ae().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Lf=new ae().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Me=c0();Qa=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{Ls===void 0&&(Ls=ao("canvas")),Ls.width=t.width,Ls.height=t.height;let s=Ls.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),i=Ls}return i.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=ao("canvas");e.width=t.width,e.height=t.height;let i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);let s=i.getImageData(0,0,t.width,t.height),o=s.data;for(let c=0;c<o.length;c++)o[c]=Ai(o[c]/255)*255;return i.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(Ai(e[i]/255)*255):e[i]=Ai(e[i]);return{data:e,width:t.width,height:t.height}}else return Qt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},h0=0,er=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:h0++}),this.uuid=Ti(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let o;if(Array.isArray(s)){o=[];for(let c=0,a=s.length;c<a;c++)s[c].isDataTexture?o.push($c(s[c].image)):o.push($c(s[c]))}else o=$c(s);i.url=o}return e||(t.images[this.uuid]=i),i}};u0=0,qc=new q,En=class n extends Jn{constructor(t=n.DEFAULT_IMAGE,e=n.DEFAULT_MAPPING,i=hi,s=hi,o=dn,c=ts,a=Gn,u=Rn,f=n.DEFAULT_ANISOTROPY,p=Ci){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:u0++}),this.uuid=Ti(),this.name="",this.source=new er(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=o,this.minFilter=c,this.anisotropy=f,this.format=a,this.internalFormat=null,this.type=u,this.offset=new Zt(0,0),this.repeat=new Zt(1,1),this.center=new Zt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ae,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=p,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(qc).x}get height(){return this.source.getSize(qc).y}get depth(){return this.source.getSize(qc).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let i=t[e];if(i===void 0){Qt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Qt(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Vh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Ja:t.x=t.x-Math.floor(t.x);break;case hi:t.x=t.x<0?0:1;break;case ja:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Ja:t.y=t.y-Math.floor(t.y);break;case hi:t.y=t.y<0?0:1;break;case ja:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};En.DEFAULT_IMAGE=null;En.DEFAULT_MAPPING=Vh;En.DEFAULT_ANISOTROPY=1;Ye=class n{static{n.prototype.isVector4=!0}constructor(t=0,e=0,i=0,s=1){this.x=t,this.y=e,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,i=this.y,s=this.z,o=this.w,c=t.elements;return this.x=c[0]*e+c[4]*i+c[8]*s+c[12]*o,this.y=c[1]*e+c[5]*i+c[9]*s+c[13]*o,this.z=c[2]*e+c[6]*i+c[10]*s+c[14]*o,this.w=c[3]*e+c[7]*i+c[11]*s+c[15]*o,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,s,o,u=t.elements,f=u[0],p=u[4],g=u[8],m=u[1],x=u[5],v=u[9],M=u[2],y=u[6],_=u[10];if(Math.abs(p-m)<.01&&Math.abs(g-M)<.01&&Math.abs(v-y)<.01){if(Math.abs(p+m)<.1&&Math.abs(g+M)<.1&&Math.abs(v+y)<.1&&Math.abs(f+x+_-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let C=(f+1)/2,S=(x+1)/2,L=(_+1)/2,E=(p+m)/4,A=(g+M)/4,w=(v+y)/4;return C>S&&C>L?C<.01?(i=0,s=.707106781,o=.707106781):(i=Math.sqrt(C),s=E/i,o=A/i):S>L?S<.01?(i=.707106781,s=0,o=.707106781):(s=Math.sqrt(S),i=E/s,o=w/s):L<.01?(i=.707106781,s=.707106781,o=0):(o=Math.sqrt(L),i=A/o,s=w/o),this.set(i,s,o,e),this}let T=Math.sqrt((y-v)*(y-v)+(g-M)*(g-M)+(m-p)*(m-p));return Math.abs(T)<.001&&(T=1),this.x=(y-v)/T,this.y=(g-M)/T,this.z=(m-p)/T,this.w=Math.acos((f+x+_-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=ve(this.x,t.x,e.x),this.y=ve(this.y,t.y,e.y),this.z=ve(this.z,t.z,e.z),this.w=ve(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=ve(this.x,t,e),this.y=ve(this.y,t,e),this.z=ve(this.z,t,e),this.w=ve(this.w,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(ve(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},tl=class extends Jn{constructor(t=1,e=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:dn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=i.depth,this.scissor=new Ye(0,0,t,e),this.scissorTest=!1,this.viewport=new Ye(0,0,t,e),this.textures=[];let s={width:t,height:e,depth:i.depth},o=new En(s),c=i.count;for(let a=0;a<c;a++)this.textures[a]=o.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:dn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let s=0,o=this.textures.length;s<o;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,i=t.textures.length;e<i;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new er(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},In=class extends tl{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}},co=class extends En{constructor(t=null,e=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=hn,this.minFilter=hn,this.wrapR=hi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}},el=class extends En{constructor(t=null,e=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=hn,this.minFilter=hn,this.wrapR=hi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}},De=class n{static{n.prototype.isMatrix4=!0}constructor(t,e,i,s,o,c,a,u,f,p,g,m,x,v,M,y){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,s,o,c,a,u,f,p,g,m,x,v,M,y)}set(t,e,i,s,o,c,a,u,f,p,g,m,x,v,M,y){let _=this.elements;return _[0]=t,_[4]=e,_[8]=i,_[12]=s,_[1]=o,_[5]=c,_[9]=a,_[13]=u,_[2]=f,_[6]=p,_[10]=g,_[14]=m,_[3]=x,_[7]=v,_[11]=M,_[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){let e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),i.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,i=t.elements,s=1/Ns.setFromMatrixColumn(t,0).length(),o=1/Ns.setFromMatrixColumn(t,1).length(),c=1/Ns.setFromMatrixColumn(t,2).length();return e[0]=i[0]*s,e[1]=i[1]*s,e[2]=i[2]*s,e[3]=0,e[4]=i[4]*o,e[5]=i[5]*o,e[6]=i[6]*o,e[7]=0,e[8]=i[8]*c,e[9]=i[9]*c,e[10]=i[10]*c,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,i=t.x,s=t.y,o=t.z,c=Math.cos(i),a=Math.sin(i),u=Math.cos(s),f=Math.sin(s),p=Math.cos(o),g=Math.sin(o);if(t.order==="XYZ"){let m=c*p,x=c*g,v=a*p,M=a*g;e[0]=u*p,e[4]=-u*g,e[8]=f,e[1]=x+v*f,e[5]=m-M*f,e[9]=-a*u,e[2]=M-m*f,e[6]=v+x*f,e[10]=c*u}else if(t.order==="YXZ"){let m=u*p,x=u*g,v=f*p,M=f*g;e[0]=m+M*a,e[4]=v*a-x,e[8]=c*f,e[1]=c*g,e[5]=c*p,e[9]=-a,e[2]=x*a-v,e[6]=M+m*a,e[10]=c*u}else if(t.order==="ZXY"){let m=u*p,x=u*g,v=f*p,M=f*g;e[0]=m-M*a,e[4]=-c*g,e[8]=v+x*a,e[1]=x+v*a,e[5]=c*p,e[9]=M-m*a,e[2]=-c*f,e[6]=a,e[10]=c*u}else if(t.order==="ZYX"){let m=c*p,x=c*g,v=a*p,M=a*g;e[0]=u*p,e[4]=v*f-x,e[8]=m*f+M,e[1]=u*g,e[5]=M*f+m,e[9]=x*f-v,e[2]=-f,e[6]=a*u,e[10]=c*u}else if(t.order==="YZX"){let m=c*u,x=c*f,v=a*u,M=a*f;e[0]=u*p,e[4]=M-m*g,e[8]=v*g+x,e[1]=g,e[5]=c*p,e[9]=-a*p,e[2]=-f*p,e[6]=x*g+v,e[10]=m-M*g}else if(t.order==="XZY"){let m=c*u,x=c*f,v=a*u,M=a*f;e[0]=u*p,e[4]=-g,e[8]=f*p,e[1]=m*g+M,e[5]=c*p,e[9]=x*g-v,e[2]=v*g-x,e[6]=a*p,e[10]=M*g+m}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(f0,t,d0)}lookAt(t,e,i){let s=this.elements;return Nn.subVectors(t,e),Nn.lengthSq()===0&&(Nn.z=1),Nn.normalize(),Ui.crossVectors(i,Nn),Ui.lengthSq()===0&&(Math.abs(i.z)===1?Nn.x+=1e-4:Nn.z+=1e-4,Nn.normalize(),Ui.crossVectors(i,Nn)),Ui.normalize(),ua.crossVectors(Nn,Ui),s[0]=Ui.x,s[4]=ua.x,s[8]=Nn.x,s[1]=Ui.y,s[5]=ua.y,s[9]=Nn.y,s[2]=Ui.z,s[6]=ua.z,s[10]=Nn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,s=e.elements,o=this.elements,c=i[0],a=i[4],u=i[8],f=i[12],p=i[1],g=i[5],m=i[9],x=i[13],v=i[2],M=i[6],y=i[10],_=i[14],T=i[3],C=i[7],S=i[11],L=i[15],E=s[0],A=s[4],w=s[8],D=s[12],N=s[1],U=s[5],V=s[9],k=s[13],z=s[2],H=s[6],G=s[10],$=s[14],it=s[3],K=s[7],st=s[11],ht=s[15];return o[0]=c*E+a*N+u*z+f*it,o[4]=c*A+a*U+u*H+f*K,o[8]=c*w+a*V+u*G+f*st,o[12]=c*D+a*k+u*$+f*ht,o[1]=p*E+g*N+m*z+x*it,o[5]=p*A+g*U+m*H+x*K,o[9]=p*w+g*V+m*G+x*st,o[13]=p*D+g*k+m*$+x*ht,o[2]=v*E+M*N+y*z+_*it,o[6]=v*A+M*U+y*H+_*K,o[10]=v*w+M*V+y*G+_*st,o[14]=v*D+M*k+y*$+_*ht,o[3]=T*E+C*N+S*z+L*it,o[7]=T*A+C*U+S*H+L*K,o[11]=T*w+C*V+S*G+L*st,o[15]=T*D+C*k+S*$+L*ht,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[4],s=t[8],o=t[12],c=t[1],a=t[5],u=t[9],f=t[13],p=t[2],g=t[6],m=t[10],x=t[14],v=t[3],M=t[7],y=t[11],_=t[15],T=u*x-f*m,C=a*x-f*g,S=a*m-u*g,L=c*x-f*p,E=c*m-u*p,A=c*g-a*p;return e*(M*T-y*C+_*S)-i*(v*T-y*L+_*E)+s*(v*C-M*L+_*A)-o*(v*S-M*E+y*A)}determinantAffine(){let t=this.elements,e=t[0],i=t[4],s=t[8],o=t[1],c=t[5],a=t[9],u=t[2],f=t[6],p=t[10];return e*(c*p-a*f)-i*(o*p-a*u)+s*(o*f-c*u)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=i),this}invert(){let t=this.elements,e=t[0],i=t[1],s=t[2],o=t[3],c=t[4],a=t[5],u=t[6],f=t[7],p=t[8],g=t[9],m=t[10],x=t[11],v=t[12],M=t[13],y=t[14],_=t[15],T=e*a-i*c,C=e*u-s*c,S=e*f-o*c,L=i*u-s*a,E=i*f-o*a,A=s*f-o*u,w=p*M-g*v,D=p*y-m*v,N=p*_-x*v,U=g*y-m*M,V=g*_-x*M,k=m*_-x*y,z=T*k-C*V+S*U+L*N-E*D+A*w;if(z===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let H=1/z;return t[0]=(a*k-u*V+f*U)*H,t[1]=(s*V-i*k-o*U)*H,t[2]=(M*A-y*E+_*L)*H,t[3]=(m*E-g*A-x*L)*H,t[4]=(u*N-c*k-f*D)*H,t[5]=(e*k-s*N+o*D)*H,t[6]=(y*S-v*A-_*C)*H,t[7]=(p*A-m*S+x*C)*H,t[8]=(c*V-a*N+f*w)*H,t[9]=(i*N-e*V-o*w)*H,t[10]=(v*E-M*S+_*T)*H,t[11]=(g*S-p*E-x*T)*H,t[12]=(a*D-c*U-u*w)*H,t[13]=(e*U-i*D+s*w)*H,t[14]=(M*C-v*L-y*T)*H,t[15]=(p*L-g*C+m*T)*H,this}scale(t){let e=this.elements,i=t.x,s=t.y,o=t.z;return e[0]*=i,e[4]*=s,e[8]*=o,e[1]*=i,e[5]*=s,e[9]*=o,e[2]*=i,e[6]*=s,e[10]*=o,e[3]*=i,e[7]*=s,e[11]*=o,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,s))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let i=Math.cos(e),s=Math.sin(e),o=1-i,c=t.x,a=t.y,u=t.z,f=o*c,p=o*a;return this.set(f*c+i,f*a-s*u,f*u+s*a,0,f*a+s*u,p*a+i,p*u-s*c,0,f*u-s*a,p*u+s*c,o*u*u+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,s,o,c){return this.set(1,i,o,0,t,1,c,0,e,s,1,0,0,0,0,1),this}compose(t,e,i){let s=this.elements,o=e._x,c=e._y,a=e._z,u=e._w,f=o+o,p=c+c,g=a+a,m=o*f,x=o*p,v=o*g,M=c*p,y=c*g,_=a*g,T=u*f,C=u*p,S=u*g,L=i.x,E=i.y,A=i.z;return s[0]=(1-(M+_))*L,s[1]=(x+S)*L,s[2]=(v-C)*L,s[3]=0,s[4]=(x-S)*E,s[5]=(1-(m+_))*E,s[6]=(y+T)*E,s[7]=0,s[8]=(v+C)*A,s[9]=(y-T)*A,s[10]=(1-(m+M))*A,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,i){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let o=this.determinantAffine();if(o===0)return i.set(1,1,1),e.identity(),this;let c=Ns.set(s[0],s[1],s[2]).length(),a=Ns.set(s[4],s[5],s[6]).length(),u=Ns.set(s[8],s[9],s[10]).length();o<0&&(c=-c),Wn.copy(this);let f=1/c,p=1/a,g=1/u;return Wn.elements[0]*=f,Wn.elements[1]*=f,Wn.elements[2]*=f,Wn.elements[4]*=p,Wn.elements[5]*=p,Wn.elements[6]*=p,Wn.elements[8]*=g,Wn.elements[9]*=g,Wn.elements[10]*=g,e.setFromRotationMatrix(Wn),i.x=c,i.y=a,i.z=u,this}makePerspective(t,e,i,s,o,c,a=Zn,u=!1){let f=this.elements,p=2*o/(e-t),g=2*o/(i-s),m=(e+t)/(e-t),x=(i+s)/(i-s),v,M;if(u)v=o/(c-o),M=c*o/(c-o);else if(a===Zn)v=-(c+o)/(c-o),M=-2*c*o/(c-o);else if(a===Ks)v=-c/(c-o),M=-c*o/(c-o);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return f[0]=p,f[4]=0,f[8]=m,f[12]=0,f[1]=0,f[5]=g,f[9]=x,f[13]=0,f[2]=0,f[6]=0,f[10]=v,f[14]=M,f[3]=0,f[7]=0,f[11]=-1,f[15]=0,this}makeOrthographic(t,e,i,s,o,c,a=Zn,u=!1){let f=this.elements,p=2/(e-t),g=2/(i-s),m=-(e+t)/(e-t),x=-(i+s)/(i-s),v,M;if(u)v=1/(c-o),M=c/(c-o);else if(a===Zn)v=-2/(c-o),M=-(c+o)/(c-o);else if(a===Ks)v=-1/(c-o),M=-o/(c-o);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return f[0]=p,f[4]=0,f[8]=0,f[12]=m,f[1]=0,f[5]=g,f[9]=0,f[13]=x,f[2]=0,f[6]=0,f[10]=v,f[14]=M,f[3]=0,f[7]=0,f[11]=0,f[15]=1,this}equals(t){let e=this.elements,i=t.elements;for(let s=0;s<16;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}},Ns=new q,Wn=new De,f0=new q(0,0,0),d0=new q(1,1,1),Ui=new q,ua=new q,Nn=new q,Nf=new De,Df=new Fn,Pi=class n{constructor(t=0,e=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,s=this._order){return this._x=t,this._y=e,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){let s=t.elements,o=s[0],c=s[4],a=s[8],u=s[1],f=s[5],p=s[9],g=s[2],m=s[6],x=s[10];switch(e){case"XYZ":this._y=Math.asin(ve(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-p,x),this._z=Math.atan2(-c,o)):(this._x=Math.atan2(m,f),this._z=0);break;case"YXZ":this._x=Math.asin(-ve(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(a,x),this._z=Math.atan2(u,f)):(this._y=Math.atan2(-g,o),this._z=0);break;case"ZXY":this._x=Math.asin(ve(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(-g,x),this._z=Math.atan2(-c,f)):(this._y=0,this._z=Math.atan2(u,o));break;case"ZYX":this._y=Math.asin(-ve(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(m,x),this._z=Math.atan2(u,o)):(this._x=0,this._z=Math.atan2(-c,f));break;case"YZX":this._z=Math.asin(ve(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(-p,f),this._y=Math.atan2(-g,o)):(this._x=0,this._y=Math.atan2(a,x));break;case"XZY":this._z=Math.asin(-ve(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(m,f),this._y=Math.atan2(a,o)):(this._x=Math.atan2(-p,x),this._y=0);break;default:Qt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return Nf.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Nf,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Df.setFromEuler(this),this.setFromQuaternion(Df,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Pi.DEFAULT_ORDER="XYZ";nr=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},p0=0,Of=new q,Ds=new Fn,bi=new De,fa=new q,qr=new q,m0=new q,g0=new Fn,Ff=new q(1,0,0),Uf=new q(0,1,0),Bf=new q(0,0,1),kf={type:"added"},x0={type:"removed"},Os={type:"childadded",child:null},Zc={type:"childremoved",child:null},sn=class n extends Jn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:p0++}),this.uuid=Ti(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let t=new q,e=new Pi,i=new Fn,s=new q(1,1,1);function o(){i.setFromEuler(e,!1)}function c(){e.setFromQuaternion(i,void 0,!1)}e._onChange(o),i._onChange(c),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new De},normalMatrix:{value:new ae}}),this.matrix=new De,this.matrixWorld=new De,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new nr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ds.setFromAxisAngle(t,e),this.quaternion.multiply(Ds),this}rotateOnWorldAxis(t,e){return Ds.setFromAxisAngle(t,e),this.quaternion.premultiply(Ds),this}rotateX(t){return this.rotateOnAxis(Ff,t)}rotateY(t){return this.rotateOnAxis(Uf,t)}rotateZ(t){return this.rotateOnAxis(Bf,t)}translateOnAxis(t,e){return Of.copy(t).applyQuaternion(this.quaternion),this.position.add(Of.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Ff,t)}translateY(t){return this.translateOnAxis(Uf,t)}translateZ(t){return this.translateOnAxis(Bf,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(bi.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?fa.copy(t):fa.set(t,e,i);let s=this.parent;this.updateWorldMatrix(!0,!1),qr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?bi.lookAt(qr,fa,this.up):bi.lookAt(fa,qr,this.up),this.quaternion.setFromRotationMatrix(bi),s&&(bi.extractRotation(s.matrixWorld),Ds.setFromRotationMatrix(bi),this.quaternion.premultiply(Ds.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(ne("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(kf),Os.child=t,this.dispatchEvent(Os),Os.child=null):ne("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(x0),Zc.child=t,this.dispatchEvent(Zc),Zc.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),bi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),bi.multiply(t.parent.matrixWorld)),t.applyMatrix4(bi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(kf),Os.child=t,this.dispatchEvent(Os),Os.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,s=this.children.length;i<s;i++){let c=this.children[i].getObjectByProperty(t,e);if(c!==void 0)return c}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);let s=this.children;for(let o=0,c=s.length;o<c;o++)s[o].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(qr,t,m0),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(qr,g0,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,i=t.y,s=t.z,o=this.matrix.elements;o[12]+=e-o[0]*e-o[4]*i-o[8]*s,o[13]+=i-o[1]*e-o[5]*i-o[9]*s,o[14]+=s-o[2]*e-o[6]*i-o[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e,i=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),e===!0){let o=this.children;for(let c=0,a=o.length;c<a;c++)o[c].updateWorldMatrix(!1,!0,i)}}toJSON(t){let e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function o(a,u){return a[u.uuid]===void 0&&(a[u.uuid]=u.toJSON(t)),u.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=o(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let u=a.shapes;if(Array.isArray(u))for(let f=0,p=u.length;f<p;f++){let g=u[f];o(t.shapes,g)}else o(t.shapes,u)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let u=0,f=this.material.length;u<f;u++)a.push(o(t.materials,this.material[u]));s.material=a}else s.material=o(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let u=this.animations[a];s.animations.push(o(t.animations,u))}}if(e){let a=c(t.geometries),u=c(t.materials),f=c(t.textures),p=c(t.images),g=c(t.shapes),m=c(t.skeletons),x=c(t.animations),v=c(t.nodes);a.length>0&&(i.geometries=a),u.length>0&&(i.materials=u),f.length>0&&(i.textures=f),p.length>0&&(i.images=p),g.length>0&&(i.shapes=g),m.length>0&&(i.skeletons=m),x.length>0&&(i.animations=x),v.length>0&&(i.nodes=v)}return i.object=s,i;function c(a){let u=[];for(let f in a){let p=a[f];delete p.metadata,u.push(p)}return u}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){let s=t.children[i];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};sn.DEFAULT_UP=new q(0,1,0);sn.DEFAULT_MATRIX_AUTO_UPDATE=!0;sn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;Hn=class extends sn{constructor(){super(),this.isGroup=!0,this.type="Group"}},y0={type:"move"},ir=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Hn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Hn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new q,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new q),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Hn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new q,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new q,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let s=null,o=null,c=null,a=this._targetRay,u=this._grip,f=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(f&&t.hand){c=!0;for(let M of t.hand.values()){let y=e.getJointPose(M,i),_=this._getHandJoint(f,M);y!==null&&(_.matrix.fromArray(y.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=y.radius),_.visible=y!==null}let p=f.joints["index-finger-tip"],g=f.joints["thumb-tip"],m=p.position.distanceTo(g.position),x=.02,v=.005;f.inputState.pinching&&m>x+v?(f.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!f.inputState.pinching&&m<=x-v&&(f.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else u!==null&&t.gripSpace&&(o=e.getPose(t.gripSpace,i),o!==null&&(u.matrix.fromArray(o.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,o.linearVelocity?(u.hasLinearVelocity=!0,u.linearVelocity.copy(o.linearVelocity)):u.hasLinearVelocity=!1,o.angularVelocity?(u.hasAngularVelocity=!0,u.angularVelocity.copy(o.angularVelocity)):u.hasAngularVelocity=!1,u.eventsEnabled&&u.dispatchEvent({type:"gripUpdated",data:t,target:this})));a!==null&&(s=e.getPose(t.targetRaySpace,i),s===null&&o!==null&&(s=o),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(y0)))}return a!==null&&(a.visible=s!==null),u!==null&&(u.visible=o!==null),f!==null&&(f.visible=c!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let i=new Hn;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}},Wd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Bi={h:0,s:0,l:0},da={h:0,s:0,l:0};se=class{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=wn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Me.colorSpaceToWorking(this,e),this}setRGB(t,e,i,s=Me.workingColorSpace){return this.r=t,this.g=e,this.b=i,Me.colorSpaceToWorking(this,s),this}setHSL(t,e,i,s=Me.workingColorSpace){if(t=jh(t,1),e=ve(e,0,1),i=ve(i,0,1),e===0)this.r=this.g=this.b=i;else{let o=i<=.5?i*(1+e):i+e-i*e,c=2*i-o;this.r=Jc(c,o,t+1/3),this.g=Jc(c,o,t),this.b=Jc(c,o,t-1/3)}return Me.colorSpaceToWorking(this,s),this}setStyle(t,e=wn){function i(o){o!==void 0&&parseFloat(o)<1&&Qt("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let o,c=s[1],a=s[2];switch(c){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,e);if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(o[4]),this.setRGB(Math.min(100,parseInt(o[1],10))/100,Math.min(100,parseInt(o[2],10))/100,Math.min(100,parseInt(o[3],10))/100,e);break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,e);break;default:Qt("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let o=s[1],c=o.length;if(c===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,e);if(c===6)return this.setHex(parseInt(o,16),e);Qt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=wn){let i=Wd[t.toLowerCase()];return i!==void 0?this.setHex(i,e):Qt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Ai(t.r),this.g=Ai(t.g),this.b=Ai(t.b),this}copyLinearToSRGB(t){return this.r=Js(t.r),this.g=Js(t.g),this.b=Js(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=wn){return Me.workingToColorSpace(xn.copy(this),t),Math.round(ve(xn.r*255,0,255))*65536+Math.round(ve(xn.g*255,0,255))*256+Math.round(ve(xn.b*255,0,255))}getHexString(t=wn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Me.workingColorSpace){Me.workingToColorSpace(xn.copy(this),e);let i=xn.r,s=xn.g,o=xn.b,c=Math.max(i,s,o),a=Math.min(i,s,o),u,f,p=(a+c)/2;if(a===c)u=0,f=0;else{let g=c-a;switch(f=p<=.5?g/(c+a):g/(2-c-a),c){case i:u=(s-o)/g+(s<o?6:0);break;case s:u=(o-i)/g+2;break;case o:u=(i-s)/g+4;break}u/=6}return t.h=u,t.s=f,t.l=p,t}getRGB(t,e=Me.workingColorSpace){return Me.workingToColorSpace(xn.copy(this),e),t.r=xn.r,t.g=xn.g,t.b=xn.b,t}getStyle(t=wn){Me.workingToColorSpace(xn.copy(this),t);let e=xn.r,i=xn.g,s=xn.b;return t!==wn?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,e,i){return this.getHSL(Bi),this.setHSL(Bi.h+t,Bi.s+e,Bi.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(Bi),t.getHSL(da);let i=io(Bi.h,da.h,e),s=io(Bi.s,da.s,e),o=io(Bi.l,da.l,e);return this.setHSL(i,s,o),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,i=this.g,s=this.b,o=t.elements;return this.r=o[0]*e+o[3]*i+o[6]*s,this.g=o[1]*e+o[4]*i+o[7]*s,this.b=o[2]*e+o[5]*i+o[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},xn=new se;se.NAMES=Wd;ho=class extends sn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Pi,this.environmentIntensity=1,this.environmentRotation=new Pi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},Yn=new q,Mi=new q,jc=new q,Si=new q,Fs=new q,Us=new q,zf=new q,Kc=new q,Qc=new q,th=new q,eh=new Ye,nh=new Ye,ih=new Ye,ci=class n{constructor(t=new q,e=new q,i=new q){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,s){s.subVectors(i,e),Yn.subVectors(t,e),s.cross(Yn);let o=s.lengthSq();return o>0?s.multiplyScalar(1/Math.sqrt(o)):s.set(0,0,0)}static getBarycoord(t,e,i,s,o){Yn.subVectors(s,e),Mi.subVectors(i,e),jc.subVectors(t,e);let c=Yn.dot(Yn),a=Yn.dot(Mi),u=Yn.dot(jc),f=Mi.dot(Mi),p=Mi.dot(jc),g=c*f-a*a;if(g===0)return o.set(0,0,0),null;let m=1/g,x=(f*u-a*p)*m,v=(c*p-a*u)*m;return o.set(1-x-v,v,x)}static containsPoint(t,e,i,s){return this.getBarycoord(t,e,i,s,Si)===null?!1:Si.x>=0&&Si.y>=0&&Si.x+Si.y<=1}static getInterpolation(t,e,i,s,o,c,a,u){return this.getBarycoord(t,e,i,s,Si)===null?(u.x=0,u.y=0,"z"in u&&(u.z=0),"w"in u&&(u.w=0),null):(u.setScalar(0),u.addScaledVector(o,Si.x),u.addScaledVector(c,Si.y),u.addScaledVector(a,Si.z),u)}static getInterpolatedAttribute(t,e,i,s,o,c){return eh.setScalar(0),nh.setScalar(0),ih.setScalar(0),eh.fromBufferAttribute(t,e),nh.fromBufferAttribute(t,i),ih.fromBufferAttribute(t,s),c.setScalar(0),c.addScaledVector(eh,o.x),c.addScaledVector(nh,o.y),c.addScaledVector(ih,o.z),c}static isFrontFacing(t,e,i,s){return Yn.subVectors(i,e),Mi.subVectors(t,e),Yn.cross(Mi).dot(s)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,s){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,i,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Yn.subVectors(this.c,this.b),Mi.subVectors(this.a,this.b),Yn.cross(Mi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return n.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return n.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,s,o){return n.getInterpolation(t,this.a,this.b,this.c,e,i,s,o)}containsPoint(t){return n.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return n.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let i=this.a,s=this.b,o=this.c,c,a;Fs.subVectors(s,i),Us.subVectors(o,i),Kc.subVectors(t,i);let u=Fs.dot(Kc),f=Us.dot(Kc);if(u<=0&&f<=0)return e.copy(i);Qc.subVectors(t,s);let p=Fs.dot(Qc),g=Us.dot(Qc);if(p>=0&&g<=p)return e.copy(s);let m=u*g-p*f;if(m<=0&&u>=0&&p<=0)return c=u/(u-p),e.copy(i).addScaledVector(Fs,c);th.subVectors(t,o);let x=Fs.dot(th),v=Us.dot(th);if(v>=0&&x<=v)return e.copy(o);let M=x*f-u*v;if(M<=0&&f>=0&&v<=0)return a=f/(f-v),e.copy(i).addScaledVector(Us,a);let y=p*v-x*g;if(y<=0&&g-p>=0&&x-v>=0)return zf.subVectors(o,s),a=(g-p)/(g-p+(x-v)),e.copy(s).addScaledVector(zf,a);let _=1/(y+M+m);return c=M*_,a=m*_,e.copy(i).addScaledVector(Fs,c).addScaledVector(Us,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Hi=class{constructor(t=new q(1/0,1/0,1/0),e=new q(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint($n.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint($n.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let i=$n.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let i=t.geometry;if(i!==void 0){let o=i.getAttribute("position");if(e===!0&&o!==void 0&&t.isInstancedMesh!==!0)for(let c=0,a=o.count;c<a;c++)t.isMesh===!0?t.getVertexPosition(c,$n):$n.fromBufferAttribute(o,c),$n.applyMatrix4(t.matrixWorld),this.expandByPoint($n);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),pa.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),pa.copy(i.boundingBox)),pa.applyMatrix4(t.matrixWorld),this.union(pa)}let s=t.children;for(let o=0,c=s.length;o<c;o++)this.expandByObject(s[o],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,$n),$n.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Zr),ma.subVectors(this.max,Zr),Bs.subVectors(t.a,Zr),ks.subVectors(t.b,Zr),zs.subVectors(t.c,Zr),ki.subVectors(ks,Bs),zi.subVectors(zs,ks),hs.subVectors(Bs,zs);let e=[0,-ki.z,ki.y,0,-zi.z,zi.y,0,-hs.z,hs.y,ki.z,0,-ki.x,zi.z,0,-zi.x,hs.z,0,-hs.x,-ki.y,ki.x,0,-zi.y,zi.x,0,-hs.y,hs.x,0];return!sh(e,Bs,ks,zs,ma)||(e=[1,0,0,0,1,0,0,0,1],!sh(e,Bs,ks,zs,ma))?!1:(ga.crossVectors(ki,zi),e=[ga.x,ga.y,ga.z],sh(e,Bs,ks,zs,ma))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,$n).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize($n).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(wi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),wi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),wi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),wi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),wi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),wi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),wi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),wi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(wi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},wi=[new q,new q,new q,new q,new q,new q,new q,new q],$n=new q,pa=new Hi,Bs=new q,ks=new q,zs=new q,ki=new q,zi=new q,hs=new q,Zr=new q,ma=new q,ga=new q,us=new q;en=new q,xa=new Zt,_0=0,ke=class extends Jn{constructor(t,e,i=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:_0++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=Zh,this.updateRanges=[],this.gpuType=ti,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let s=0,o=this.itemSize;s<o;s++)this.array[t+s]=e.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)xa.fromBufferAttribute(this,e),xa.applyMatrix3(t),this.setXY(e,xa.x,xa.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)en.fromBufferAttribute(this,e),en.applyMatrix3(t),this.setXYZ(e,en.x,en.y,en.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)en.fromBufferAttribute(this,e),en.applyMatrix4(t),this.setXYZ(e,en.x,en.y,en.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)en.fromBufferAttribute(this,e),en.applyNormalMatrix(t),this.setXYZ(e,en.x,en.y,en.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)en.fromBufferAttribute(this,e),en.transformDirection(t),this.setXYZ(e,en.x,en.y,en.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=qn(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=Ne(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=qn(e,this.array)),e}setX(t,e){return this.normalized&&(e=Ne(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=qn(e,this.array)),e}setY(t,e){return this.normalized&&(e=Ne(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=qn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Ne(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=qn(e,this.array)),e}setW(t,e){return this.normalized&&(e=Ne(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=Ne(e,this.array),i=Ne(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,s){return t*=this.itemSize,this.normalized&&(e=Ne(e,this.array),i=Ne(i,this.array),s=Ne(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,e,i,s,o){return t*=this.itemSize,this.normalized&&(e=Ne(e,this.array),i=Ne(i,this.array),s=Ne(s,this.array),o=Ne(o,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=o,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}},uo=class extends ke{constructor(t,e,i){super(new Uint16Array(t),e,i)}},fo=class extends ke{constructor(t,e,i){super(new Uint32Array(t),e,i)}},ze=class extends ke{constructor(t,e,i){super(new Float32Array(t),e,i)}},v0=new Hi,Jr=new q,rh=new q,ms=class{constructor(t=new q,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let i=this.center;e!==void 0?i.copy(e):v0.setFromPoints(t).getCenter(i);let s=0;for(let o=0,c=t.length;o<c;o++)s=Math.max(s,i.distanceToSquared(t[o]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Jr.subVectors(t,this.center);let e=Jr.lengthSq();if(e>this.radius*this.radius){let i=Math.sqrt(e),s=(i-this.radius)*.5;this.center.addScaledVector(Jr,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(rh.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Jr.copy(t.center).add(rh)),this.expandByPoint(Jr.copy(t.center).sub(rh))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},b0=0,Vn=new De,oh=new sn,Vs=new q,Dn=new Hi,jr=new Hi,cn=new q,Ge=class n extends Jn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:b0++}),this.uuid=Ti(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Wm(t)?fo:uo)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let o=new ae().getNormalMatrix(t);i.applyNormalMatrix(o),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return Vn.makeRotationFromQuaternion(t),this.applyMatrix4(Vn),this}rotateX(t){return Vn.makeRotationX(t),this.applyMatrix4(Vn),this}rotateY(t){return Vn.makeRotationY(t),this.applyMatrix4(Vn),this}rotateZ(t){return Vn.makeRotationZ(t),this.applyMatrix4(Vn),this}translate(t,e,i){return Vn.makeTranslation(t,e,i),this.applyMatrix4(Vn),this}scale(t,e,i){return Vn.makeScale(t,e,i),this.applyMatrix4(Vn),this}lookAt(t){return oh.lookAt(t),oh.updateMatrix(),this.applyMatrix4(oh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Vs).negate(),this.translate(Vs.x,Vs.y,Vs.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let i=[];for(let s=0,o=t.length;s<o;s++){let c=t[s];i.push(c.x,c.y,c.z||0)}this.setAttribute("position",new ze(i,3))}else{let i=Math.min(t.length,e.count);for(let s=0;s<i;s++){let o=t[s];e.setXYZ(s,o.x,o.y,o.z||0)}t.length>e.count&&Qt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Hi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){ne("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new q(-1/0,-1/0,-1/0),new q(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,s=e.length;i<s;i++){let o=e[i];Dn.setFromBufferAttribute(o),this.morphTargetsRelative?(cn.addVectors(this.boundingBox.min,Dn.min),this.boundingBox.expandByPoint(cn),cn.addVectors(this.boundingBox.max,Dn.max),this.boundingBox.expandByPoint(cn)):(this.boundingBox.expandByPoint(Dn.min),this.boundingBox.expandByPoint(Dn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&ne('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ms);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){ne("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new q,1/0);return}if(t){let i=this.boundingSphere.center;if(Dn.setFromBufferAttribute(t),e)for(let o=0,c=e.length;o<c;o++){let a=e[o];jr.setFromBufferAttribute(a),this.morphTargetsRelative?(cn.addVectors(Dn.min,jr.min),Dn.expandByPoint(cn),cn.addVectors(Dn.max,jr.max),Dn.expandByPoint(cn)):(Dn.expandByPoint(jr.min),Dn.expandByPoint(jr.max))}Dn.getCenter(i);let s=0;for(let o=0,c=t.count;o<c;o++)cn.fromBufferAttribute(t,o),s=Math.max(s,i.distanceToSquared(cn));if(e)for(let o=0,c=e.length;o<c;o++){let a=e[o],u=this.morphTargetsRelative;for(let f=0,p=a.count;f<p;f++)cn.fromBufferAttribute(a,f),u&&(Vs.fromBufferAttribute(t,f),cn.add(Vs)),s=Math.max(s,i.distanceToSquared(cn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&ne('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){ne("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=e.position,s=e.normal,o=e.uv,c=this.getAttribute("tangent");(c===void 0||c.count!==i.count)&&(c=new ke(new Float32Array(4*i.count),4),this.setAttribute("tangent",c));let a=[],u=[];for(let w=0;w<i.count;w++)a[w]=new q,u[w]=new q;let f=new q,p=new q,g=new q,m=new Zt,x=new Zt,v=new Zt,M=new q,y=new q;function _(w,D,N){f.fromBufferAttribute(i,w),p.fromBufferAttribute(i,D),g.fromBufferAttribute(i,N),m.fromBufferAttribute(o,w),x.fromBufferAttribute(o,D),v.fromBufferAttribute(o,N),p.sub(f),g.sub(f),x.sub(m),v.sub(m);let U=1/(x.x*v.y-v.x*x.y);isFinite(U)&&(M.copy(p).multiplyScalar(v.y).addScaledVector(g,-x.y).multiplyScalar(U),y.copy(g).multiplyScalar(x.x).addScaledVector(p,-v.x).multiplyScalar(U),a[w].add(M),a[D].add(M),a[N].add(M),u[w].add(y),u[D].add(y),u[N].add(y))}let T=this.groups;T.length===0&&(T=[{start:0,count:t.count}]);for(let w=0,D=T.length;w<D;++w){let N=T[w],U=N.start,V=N.count;for(let k=U,z=U+V;k<z;k+=3)_(t.getX(k+0),t.getX(k+1),t.getX(k+2))}let C=new q,S=new q,L=new q,E=new q;function A(w){L.fromBufferAttribute(s,w),E.copy(L);let D=a[w];C.copy(D),C.sub(L.multiplyScalar(L.dot(D))).normalize(),S.crossVectors(E,D);let U=S.dot(u[w])<0?-1:1;c.setXYZW(w,C.x,C.y,C.z,U)}for(let w=0,D=T.length;w<D;++w){let N=T[w],U=N.start,V=N.count;for(let k=U,z=U+V;k<z;k+=3)A(t.getX(k+0)),A(t.getX(k+1)),A(t.getX(k+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==e.count)i=new ke(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let m=0,x=i.count;m<x;m++)i.setXYZ(m,0,0,0);let s=new q,o=new q,c=new q,a=new q,u=new q,f=new q,p=new q,g=new q;if(t)for(let m=0,x=t.count;m<x;m+=3){let v=t.getX(m+0),M=t.getX(m+1),y=t.getX(m+2);s.fromBufferAttribute(e,v),o.fromBufferAttribute(e,M),c.fromBufferAttribute(e,y),p.subVectors(c,o),g.subVectors(s,o),p.cross(g),a.fromBufferAttribute(i,v),u.fromBufferAttribute(i,M),f.fromBufferAttribute(i,y),a.add(p),u.add(p),f.add(p),i.setXYZ(v,a.x,a.y,a.z),i.setXYZ(M,u.x,u.y,u.z),i.setXYZ(y,f.x,f.y,f.z)}else for(let m=0,x=e.count;m<x;m+=3)s.fromBufferAttribute(e,m+0),o.fromBufferAttribute(e,m+1),c.fromBufferAttribute(e,m+2),p.subVectors(c,o),g.subVectors(s,o),p.cross(g),i.setXYZ(m+0,p.x,p.y,p.z),i.setXYZ(m+1,p.x,p.y,p.z),i.setXYZ(m+2,p.x,p.y,p.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)cn.fromBufferAttribute(t,e),cn.normalize(),t.setXYZ(e,cn.x,cn.y,cn.z)}toNonIndexed(){function t(a,u){let f=a.array,p=a.itemSize,g=a.normalized,m=new f.constructor(u.length*p),x=0,v=0;for(let M=0,y=u.length;M<y;M++){a.isInterleavedBufferAttribute?x=u[M]*a.data.stride+a.offset:x=u[M]*p;for(let _=0;_<p;_++)m[v++]=f[x++]}return new ke(m,p,g)}if(this.index===null)return Qt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new n,i=this.index.array,s=this.attributes;for(let a in s){let u=s[a],f=t(u,i);e.setAttribute(a,f)}let o=this.morphAttributes;for(let a in o){let u=[],f=o[a];for(let p=0,g=f.length;p<g;p++){let m=f[p],x=t(m,i);u.push(x)}e.morphAttributes[a]=u}e.morphTargetsRelative=this.morphTargetsRelative;let c=this.groups;for(let a=0,u=c.length;a<u;a++){let f=c[a];e.addGroup(f.start,f.count,f.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let u=this.parameters;for(let f in u)u[f]!==void 0&&(t[f]=u[f]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let i=this.attributes;for(let u in i){let f=i[u];t.data.attributes[u]=f.toJSON(t.data)}let s={},o=!1;for(let u in this.morphAttributes){let f=this.morphAttributes[u],p=[];for(let g=0,m=f.length;g<m;g++){let x=f[g];p.push(x.toJSON(t.data))}p.length>0&&(s[u]=p,o=!0)}o&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let c=this.groups;c.length>0&&(t.data.groups=JSON.parse(JSON.stringify(c)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let i=t.index;i!==null&&this.setIndex(i.clone());let s=t.attributes;for(let f in s){let p=s[f];this.setAttribute(f,p.clone(e))}let o=t.morphAttributes;for(let f in o){let p=[],g=o[f];for(let m=0,x=g.length;m<x;m++)p.push(g[m].clone(e));this.morphAttributes[f]=p}this.morphTargetsRelative=t.morphTargetsRelative;let c=t.groups;for(let f=0,p=c.length;f<p;f++){let g=c[f];this.addGroup(g.start,g.count,g.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let u=t.boundingSphere;return u!==null&&(this.boundingSphere=u.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},nl=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Zh,this.updateRanges=[],this.version=0,this.uuid=Ti()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,i){t*=this.stride,i*=e.stride;for(let s=0,o=this.stride;s<o;s++)this.array[t+s]=e.array[i+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ti()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(e,this.stride);return i.setUsage(this.usage),i}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ti()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let e={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return e.usage=this.usage,e}},Sn=new q,po=class n{constructor(t,e,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,i=this.data.count;e<i;e++)Sn.fromBufferAttribute(this,e),Sn.applyMatrix4(t),this.setXYZ(e,Sn.x,Sn.y,Sn.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Sn.fromBufferAttribute(this,e),Sn.applyNormalMatrix(t),this.setXYZ(e,Sn.x,Sn.y,Sn.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Sn.fromBufferAttribute(this,e),Sn.transformDirection(t),this.setXYZ(e,Sn.x,Sn.y,Sn.z);return this}getComponent(t,e){let i=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(i=qn(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=Ne(i,this.array)),this.data.array[t*this.data.stride+this.offset+e]=i,this}setX(t,e){return this.normalized&&(e=Ne(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=Ne(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=Ne(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=Ne(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=qn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=qn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=qn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=qn(e,this.array)),e}setXY(t,e,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=Ne(e,this.array),i=Ne(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this}setXYZ(t,e,i,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=Ne(e,this.array),i=Ne(i,this.array),s=Ne(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this}setXYZW(t,e,i,s,o){return t=t*this.data.stride+this.offset,this.normalized&&(e=Ne(e,this.array),i=Ne(i,this.array),s=Ne(s,this.array),o=Ne(o,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this.data.array[t+3]=o,this}clone(t){if(t===void 0){lo("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let o=0;o<this.itemSize;o++)e.push(this.data.array[s+o])}return new ke(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new n(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){lo("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let o=0;o<this.itemSize;o++)e.push(this.data.array[s+o])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},ah=new q,M0=new q,S0=new ae,On=class{constructor(t=new q(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,s){return this.normal.set(t,e,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){let s=ah.subVectors(i,e).cross(M0.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,i=!0){let s=t.delta(ah),o=this.normal.dot(s);if(o===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let c=-(t.start.dot(this.normal)+this.constant)/o;return i===!0&&(c<0||c>1)?null:e.copy(t.start).addScaledVector(s,c)}intersectsLine(t){let e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let i=e||S0.getNormalMatrix(t),s=this.coplanarPoint(ah).applyMatrix4(t),o=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(o),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},w0=0,fi=class extends Jn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:w0++}),this.uuid=Ti(),this.name="",this.type="Material",this.blending=dr,this.side=Ki,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Rh,this.blendDst=Lh,this.blendEquation=_s,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new se(0,0,0),this.blendAlpha=0,this.depthFunc=js,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Dd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ha,this.stencilZFail=Ha,this.stencilZPass=Ha,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let i=t[e];if(i===void 0){Qt(`Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Qt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector2&&i&&i.isVector2||s&&s.isEuler&&i&&i.isEuler||s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(o=>o.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(o){let c=[];for(let a in o){let u=o[a];delete u.metadata,c.push(u)}return c}if(e){let o=s(t.textures),c=s(t.images);o.length>0&&(i.textures=o),c.length>0&&(i.images=c)}return i}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new se().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(i=>new On().fromJSON(i))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let i=t.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new Zt().fromArray(i)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Zt().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,i=null;if(e!==null){let s=e.length;i=new Array(s);for(let o=0;o!==s;++o)i[o]=e[o].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},sr=class extends fi{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new se(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Kr=new q,Gs=new q,Xs=new q,Ws=new Zt,Qr=new Zt,Yd=new De,ya=new q,to=new q,_a=new q,Vf=new Zt,lh=new Zt,Hf=new Zt,mo=class extends sn{constructor(t=new sr){if(super(),this.isSprite=!0,this.type="Sprite",Hs===void 0){Hs=new Ge;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new nl(e,5);Hs.setIndex([0,1,2,0,2,3]),Hs.setAttribute("position",new po(i,3,0,!1)),Hs.setAttribute("uv",new po(i,2,3,!1))}this.geometry=Hs,this.material=t,this.center=new Zt(.5,.5),this.count=1}intersectsFrustum(t){return t.intersectsSprite(this)}raycast(t,e){t.camera===null&&ne('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Gs.setFromMatrixScale(this.matrixWorld),Yd.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Xs.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Gs.multiplyScalar(-Xs.z);let i=this.material.rotation,s,o;i!==0&&(o=Math.cos(i),s=Math.sin(i));let c=this.center;va(ya.set(-.5,-.5,0),Xs,c,Gs,s,o),va(to.set(.5,-.5,0),Xs,c,Gs,s,o),va(_a.set(.5,.5,0),Xs,c,Gs,s,o),Vf.set(0,0),lh.set(1,0),Hf.set(1,1);let a=t.ray.intersectTriangle(ya,to,_a,!1,Kr);if(a===null&&(va(to.set(-.5,.5,0),Xs,c,Gs,s,o),lh.set(0,1),a=t.ray.intersectTriangle(ya,_a,to,!1,Kr),a===null))return;let u=t.ray.origin.distanceTo(Kr);u<t.near||u>t.far||e.push({distance:u,point:Kr.clone(),uv:ci.getInterpolation(Kr,ya,to,_a,Vf,lh,Hf,new Zt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};Ei=new q,ch=new q,ba=new q,Ma=new q,Gi=class{constructor(t=new q,e=new q(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Ei)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Ei.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Ei.copy(this.origin).addScaledVector(this.direction,e),Ei.distanceToSquared(t))}distanceSqToSegment(t,e,i,s){ch.copy(t).add(e).multiplyScalar(.5),ba.copy(e).sub(t).normalize(),Ma.copy(this.origin).sub(ch);let o=t.distanceTo(e)*.5,c=-this.direction.dot(ba),a=Ma.dot(this.direction),u=-Ma.dot(ba),f=Ma.lengthSq(),p=Math.abs(1-c*c),g,m,x,v;if(p>0)if(g=c*u-a,m=c*a-u,v=o*p,g>=0)if(m>=-v)if(m<=v){let M=1/p;g*=M,m*=M,x=g*(g+c*m+2*a)+m*(c*g+m+2*u)+f}else m=o,g=Math.max(0,-(c*m+a)),x=-g*g+m*(m+2*u)+f;else m=-o,g=Math.max(0,-(c*m+a)),x=-g*g+m*(m+2*u)+f;else m<=-v?(g=Math.max(0,-(-c*o+a)),m=g>0?-o:Math.min(Math.max(-o,-u),o),x=-g*g+m*(m+2*u)+f):m<=v?(g=0,m=Math.min(Math.max(-o,-u),o),x=m*(m+2*u)+f):(g=Math.max(0,-(c*o+a)),m=g>0?o:Math.min(Math.max(-o,-u),o),x=-g*g+m*(m+2*u)+f);else m=c>0?-o:o,g=Math.max(0,-(c*m+a)),x=-g*g+m*(m+2*u)+f;return i&&i.copy(this.origin).addScaledVector(this.direction,g),s&&s.copy(ch).addScaledVector(ba,m),x}intersectSphere(t,e){if(t.radius<0)return null;Ei.subVectors(t.center,this.origin);let i=Ei.dot(this.direction),s=Ei.dot(Ei)-i*i,o=t.radius*t.radius;if(s>o)return null;let c=Math.sqrt(o-s),a=i-c,u=i+c;return u<0?null:a<0?this.at(u,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){let i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,s,o,c,a,u,f=1/this.direction.x,p=1/this.direction.y,g=1/this.direction.z,m=this.origin;return f>=0?(i=(t.min.x-m.x)*f,s=(t.max.x-m.x)*f):(i=(t.max.x-m.x)*f,s=(t.min.x-m.x)*f),p>=0?(o=(t.min.y-m.y)*p,c=(t.max.y-m.y)*p):(o=(t.max.y-m.y)*p,c=(t.min.y-m.y)*p),i>c||o>s||((o>i||isNaN(i))&&(i=o),(c<s||isNaN(s))&&(s=c),g>=0?(a=(t.min.z-m.z)*g,u=(t.max.z-m.z)*g):(a=(t.max.z-m.z)*g,u=(t.min.z-m.z)*g),i>u||a>s)||((a>i||i!==i)&&(i=a),(u<s||s!==s)&&(s=u),s<0)?null:this.at(i>=0?i:s,e)}intersectsBox(t){return this.intersectBox(t,Ei)!==null}intersectTriangle(t,e,i,s,o){let c=this.origin,a=this.direction,u=a.x,f=a.y,p=a.z,g=t.x-c.x,m=t.y-c.y,x=t.z-c.z,v=e.x-c.x,M=e.y-c.y,y=e.z-c.z,_=i.x-c.x,T=i.y-c.y,C=i.z-c.z,S=Math.abs(u),L=Math.abs(f),E=Math.abs(p),A,w,D,N,U,V,k,z,H,G,$,it;if(S>=L&&S>=E?(D=u,V=g,H=v,it=_,u>=0?(A=f,w=p,N=m,U=x,k=M,z=y,G=T,$=C):(A=p,w=f,N=x,U=m,k=y,z=M,G=C,$=T)):L>=E?(D=f,V=m,H=M,it=T,f>=0?(A=p,w=u,N=x,U=g,k=y,z=v,G=C,$=_):(A=u,w=p,N=g,U=x,k=v,z=y,G=_,$=C)):(D=p,V=x,H=y,it=C,p>=0?(A=u,w=f,N=g,U=m,k=v,z=M,G=_,$=T):(A=f,w=u,N=m,U=g,k=M,z=v,G=T,$=_)),D===0)return null;let K=A/D,st=w/D,ht=1/D,Rt=N-K*V,zt=U-st*V,de=k-K*H,he=z-st*H,me=G-K*it,ft=$-st*it,vt=me*he-ft*de,Vt=Rt*ft-zt*me,te=de*zt-he*Rt;if(s){if(vt<0||Vt<0||te<0)return null}else if((vt<0||Vt<0||te<0)&&(vt>0||Vt>0||te>0))return null;let Ot=vt+Vt+te;if(Ot===0)return null;let ue=ht*(vt*V+Vt*H+te*it);return(Ot>0?ue<0:ue>0)?null:this.at(ue/Ot,o)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Un=class extends fi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new se(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Pi,this.combine=Nh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},Gf=new De,fs=new Gi,Sa=new ms,Xf=new q,wa=new q,Ea=new q,Ta=new q,hh=new q,Aa=new q,Wf=new q,Pa=new q,Ce=class extends sn{constructor(t=new Ge,e=new Un){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,c=s.length;o<c;o++){let a=s[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}getVertexPosition(t,e){let i=this.geometry,s=i.attributes.position,o=i.morphAttributes.position,c=i.morphTargetsRelative;e.fromBufferAttribute(s,t);let a=this.morphTargetInfluences;if(o&&a){Aa.set(0,0,0);for(let u=0,f=o.length;u<f;u++){let p=a[u],g=o[u];p!==0&&(hh.fromBufferAttribute(g,t),c?Aa.addScaledVector(hh,p):Aa.addScaledVector(hh.sub(e),p))}e.add(Aa)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let i=this.geometry,s=this.material,o=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Sa.copy(i.boundingSphere),Sa.applyMatrix4(o),fs.copy(t.ray).recast(t.near),!(Sa.containsPoint(fs.origin)===!1&&(fs.intersectSphere(Sa,Xf)===null||fs.origin.distanceToSquared(Xf)>(t.far-t.near)**2))&&(Gf.copy(o).invert(),fs.copy(t.ray).applyMatrix4(Gf),!(i.boundingBox!==null&&fs.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,fs)))}_computeIntersections(t,e,i){let s,o=this.geometry,c=this.material,a=o.index,u=o.attributes.position,f=o.attributes.uv,p=o.attributes.uv1,g=o.attributes.normal,m=o.groups,x=o.drawRange;if(a!==null)if(Array.isArray(c))for(let v=0,M=m.length;v<M;v++){let y=m[v],_=c[y.materialIndex],T=Math.max(y.start,x.start),C=Math.min(a.count,Math.min(y.start+y.count,x.start+x.count));for(let S=T,L=C;S<L;S+=3){let E=a.getX(S),A=a.getX(S+1),w=a.getX(S+2);s=Ca(this,_,t,i,f,p,g,E,A,w),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=y.materialIndex,e.push(s))}}else{let v=Math.max(0,x.start),M=Math.min(a.count,x.start+x.count);for(let y=v,_=M;y<_;y+=3){let T=a.getX(y),C=a.getX(y+1),S=a.getX(y+2);s=Ca(this,c,t,i,f,p,g,T,C,S),s&&(s.faceIndex=Math.floor(y/3),e.push(s))}}else if(u!==void 0)if(Array.isArray(c))for(let v=0,M=m.length;v<M;v++){let y=m[v],_=c[y.materialIndex],T=Math.max(y.start,x.start),C=Math.min(u.count,Math.min(y.start+y.count,x.start+x.count));for(let S=T,L=C;S<L;S+=3){let E=S,A=S+1,w=S+2;s=Ca(this,_,t,i,f,p,g,E,A,w),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=y.materialIndex,e.push(s))}}else{let v=Math.max(0,x.start),M=Math.min(u.count,x.start+x.count);for(let y=v,_=M;y<_;y+=3){let T=y,C=y+1,S=y+2;s=Ca(this,c,t,i,f,p,g,T,C,S),s&&(s.faceIndex=Math.floor(y/3),e.push(s))}}}};il=class extends En{constructor(t=null,e=1,i=1,s,o,c,a,u,f=hn,p=hn,g,m){super(null,c,a,u,f,p,s,o,g,m),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},ds=new ms,T0=new Zt(.5,.5),Ia=new q,rr=class{constructor(t=new On,e=new On,i=new On,s=new On,o=new On,c=new On){this.planes=[t,e,i,s,o,c]}set(t,e,i,s,o,c){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(i),a[3].copy(s),a[4].copy(o),a[5].copy(c),this}copy(t){let e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=Zn,i=!1){let s=this.planes,o=t.elements,c=o[0],a=o[1],u=o[2],f=o[3],p=o[4],g=o[5],m=o[6],x=o[7],v=o[8],M=o[9],y=o[10],_=o[11],T=o[12],C=o[13],S=o[14],L=o[15];if(s[0].setComponents(f-c,x-p,_-v,L-T).normalize(),s[1].setComponents(f+c,x+p,_+v,L+T).normalize(),s[2].setComponents(f+a,x+g,_+M,L+C).normalize(),s[3].setComponents(f-a,x-g,_-M,L-C).normalize(),i)s[4].setComponents(u,m,y,S).normalize(),s[5].setComponents(f-u,x-m,_-y,L-S).normalize();else if(s[4].setComponents(f-u,x-m,_-y,L-S).normalize(),e===Zn)s[5].setComponents(f+u,x+m,_+y,L+S).normalize();else if(e===Ks)s[5].setComponents(u,m,y,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ds.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),ds.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ds)}intersectsSprite(t){ds.center.set(0,0,0);let e=T0.distanceTo(t.center);return ds.radius=.7071067811865476+e,ds.applyMatrix4(t.matrixWorld),this.intersectsSphere(ds)}intersectsSphere(t){let e=this.planes,i=t.center,s=-t.radius;for(let o=0;o<6;o++)if(e[o].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let i=0;i<6;i++){let s=e[i];if(Ia.x=s.normal.x>0?t.max.x:t.min.x,Ia.y=s.normal.y>0?t.max.y:t.min.y,Ia.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Ia)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},jn=class extends fi{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new se(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},sl=new q,rl=new q,Yf=new De,eo=new Gi,Ra=new ms,uh=new q,$f=new q,gs=class extends sn{constructor(t=new Ge,e=new jn){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,i=[0];for(let s=1,o=e.count;s<o;s++)sl.fromBufferAttribute(e,s-1),rl.fromBufferAttribute(e,s),i[s]=i[s-1],i[s]+=sl.distanceTo(rl);t.setAttribute("lineDistance",new ze(i,1))}else Qt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let i=this.geometry,s=this.matrixWorld,o=t.params.Line.threshold,c=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Ra.copy(i.boundingSphere),Ra.applyMatrix4(s),Ra.radius+=o,t.ray.intersectsSphere(Ra)===!1)return;Yf.copy(s).invert(),eo.copy(t.ray).applyMatrix4(Yf);let a=o/((this.scale.x+this.scale.y+this.scale.z)/3),u=a*a,f=this.isLineSegments?2:1,p=i.index,m=i.attributes.position;if(p!==null){let x=Math.max(0,c.start),v=Math.min(p.count,c.start+c.count);for(let M=x,y=v-1;M<y;M+=f){let _=p.getX(M),T=p.getX(M+1),C=La(this,t,eo,u,_,T,M);C&&e.push(C)}if(this.isLineLoop){let M=p.getX(v-1),y=p.getX(x),_=La(this,t,eo,u,M,y,v-1);_&&e.push(_)}}else{let x=Math.max(0,c.start),v=Math.min(m.count,c.start+c.count);for(let M=x,y=v-1;M<y;M+=f){let _=La(this,t,eo,u,M,M+1,M);_&&e.push(_)}if(this.isLineLoop){let M=La(this,t,eo,u,v-1,x,v-1);M&&e.push(M)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,c=s.length;o<c;o++){let a=s[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}};qf=new q,Zf=new q,xs=class extends gs{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,i=[];for(let s=0,o=e.count;s<o;s+=2)qf.fromBufferAttribute(e,s),Zf.fromBufferAttribute(e,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+qf.distanceTo(Zf);t.setAttribute("lineDistance",new ze(i,1))}else Qt("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},go=class extends En{constructor(t=[],e=Qi,i,s,o,c,a,u,f,p){super(t,e,i,s,o,c,a,u,f,p),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},xo=class extends En{constructor(t,e,i,s,o,c,a,u,f){super(t,e,i,s,o,c,a,u,f),this.isCanvasTexture=!0,this.needsUpdate=!0}},Xi=class extends En{constructor(t,e,i=Qn,s,o,c,a=hn,u=hn,f,p=ui,g=1){if(p!==ui&&p!==es)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let m={width:t,height:e,depth:g};super(m,s,o,c,a,u,p,i,f),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new er(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},ol=class extends Xi{constructor(t,e=Qn,i=Qi,s,o,c=hn,a=hn,u,f=ui){let p={width:t,height:t,depth:1},g=[p,p,p,p,p,p];super(t,t,e,i,s,o,c,a,u,f),this.image=g,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},yo=class extends En{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},Wi=class n extends Ge{constructor(t=1,e=1,i=1,s=1,o=1,c=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:s,heightSegments:o,depthSegments:c};let a=this;s=Math.floor(s),o=Math.floor(o),c=Math.floor(c);let u=[],f=[],p=[],g=[],m=0,x=0;v("z","y","x",-1,-1,i,e,t,c,o,0),v("z","y","x",1,-1,i,e,-t,c,o,1),v("x","z","y",1,1,t,i,e,s,c,2),v("x","z","y",1,-1,t,i,-e,s,c,3),v("x","y","z",1,-1,t,e,i,s,o,4),v("x","y","z",-1,-1,t,e,-i,s,o,5),this.setIndex(u),this.setAttribute("position",new ze(f,3)),this.setAttribute("normal",new ze(p,3)),this.setAttribute("uv",new ze(g,2));function v(M,y,_,T,C,S,L,E,A,w,D){let N=S/A,U=L/w,V=S/2,k=L/2,z=E/2,H=A+1,G=w+1,$=0,it=0,K=new q;for(let st=0;st<G;st++){let ht=st*U-k;for(let Rt=0;Rt<H;Rt++){let zt=Rt*N-V;K[M]=zt*T,K[y]=ht*C,K[_]=z,f.push(K.x,K.y,K.z),K[M]=0,K[y]=0,K[_]=E>0?1:-1,p.push(K.x,K.y,K.z),g.push(Rt/A),g.push(1-st/w),$+=1}}for(let st=0;st<w;st++)for(let ht=0;ht<A;ht++){let Rt=m+ht+H*st,zt=m+ht+H*(st+1),de=m+(ht+1)+H*(st+1),he=m+(ht+1)+H*st;u.push(Rt,zt,he),u.push(zt,de,he),it+=6}a.addGroup(x,it,D),x+=it,m+=$}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}},di=class n extends Ge{constructor(t=1,e=1,i=1,s=32,o=1,c=!1,a=0,u=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:s,heightSegments:o,openEnded:c,thetaStart:a,thetaLength:u};let f=this;s=Math.floor(s),o=Math.floor(o);let p=[],g=[],m=[],x=[],v=0,M=[],y=i/2,_=0;T(),c===!1&&(t>0&&C(!0),e>0&&C(!1)),this.setIndex(p),this.setAttribute("position",new ze(g,3)),this.setAttribute("normal",new ze(m,3)),this.setAttribute("uv",new ze(x,2));function T(){let S=new q,L=new q,E=0,A=(e-t)/i;for(let w=0;w<=o;w++){let D=[],N=w/o,U=N*(e-t)+t;for(let V=0;V<=s;V++){let k=V/s,z=k*u+a,H=Math.sin(z),G=Math.cos(z);L.x=U*H,L.y=-N*i+y,L.z=U*G,g.push(L.x,L.y,L.z),S.set(H,A,G).normalize(),m.push(S.x,S.y,S.z),x.push(k,1-N),D.push(v++)}M.push(D)}for(let w=0;w<s;w++)for(let D=0;D<o;D++){let N=M[D][w],U=M[D+1][w],V=M[D+1][w+1],k=M[D][w+1];(t>0||D!==0)&&(p.push(N,U,k),E+=3),(e>0||D!==o-1)&&(p.push(U,V,k),E+=3)}f.addGroup(_,E,0),_+=E}function C(S){let L=v,E=new Zt,A=new q,w=0,D=S===!0?t:e,N=S===!0?1:-1;for(let V=1;V<=s;V++)g.push(0,y*N,0),m.push(0,N,0),x.push(.5,.5),v++;let U=v;for(let V=0;V<=s;V++){let z=V/s*u+a,H=Math.cos(z),G=Math.sin(z);A.x=D*G,A.y=y*N,A.z=D*H,g.push(A.x,A.y,A.z),m.push(0,N,0),E.x=H*.5+.5,E.y=G*.5*N+.5,x.push(E.x,E.y),v++}for(let V=0;V<s;V++){let k=L+V,z=U+V;S===!0?p.push(z,z+1,k):p.push(z+1,z,k),w+=3}f.addGroup(_,w,S===!0?1:2),_+=w}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},or=class n extends di{constructor(t=1,e=1,i=32,s=1,o=!1,c=0,a=Math.PI*2){super(0,t,e,i,s,o,c,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:i,heightSegments:s,openEnded:o,thetaStart:c,thetaLength:a}}static fromJSON(t){return new n(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Na=new q,Da=new q,fh=new q,Oa=new ci,ar=class extends Ge{constructor(t=null,e=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:t,thresholdAngle:e},t!==null){let s=Math.pow(10,4),o=Math.cos(Zs*e),c=t.getIndex(),a=t.getAttribute("position"),u=c?c.count:a.count,f=[0,0,0],p=["a","b","c"],g=new Array(3),m={},x=[];for(let v=0;v<u;v+=3){c?(f[0]=c.getX(v),f[1]=c.getX(v+1),f[2]=c.getX(v+2)):(f[0]=v,f[1]=v+1,f[2]=v+2);let{a:M,b:y,c:_}=Oa;if(M.fromBufferAttribute(a,f[0]),y.fromBufferAttribute(a,f[1]),_.fromBufferAttribute(a,f[2]),Oa.getNormal(fh),g[0]=`${Math.round(M.x*s)},${Math.round(M.y*s)},${Math.round(M.z*s)}`,g[1]=`${Math.round(y.x*s)},${Math.round(y.y*s)},${Math.round(y.z*s)}`,g[2]=`${Math.round(_.x*s)},${Math.round(_.y*s)},${Math.round(_.z*s)}`,!(g[0]===g[1]||g[1]===g[2]||g[2]===g[0]))for(let T=0;T<3;T++){let C=(T+1)%3,S=g[T],L=g[C],E=Oa[p[T]],A=Oa[p[C]],w=`${S}_${L}`,D=`${L}_${S}`;D in m&&m[D]?(fh.dot(m[D].normal)<=o&&(x.push(E.x,E.y,E.z),x.push(A.x,A.y,A.z)),m[D]=null):w in m||(m[w]={index0:f[T],index1:f[C],normal:fh.clone()})}}for(let v in m)if(m[v]){let{index0:M,index1:y}=m[v];Na.fromBufferAttribute(a,M),Da.fromBufferAttribute(a,y),x.push(Na.x,Na.y,Na.z),x.push(Da.x,Da.y,Da.z)}this.setAttribute("position",new ze(x,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}};Mh=class{static triangulate(t,e,i=2){return A0(t,e,i)}},Mo=class n{static area(t){let e=t.length,i=0;for(let s=e-1,o=0;o<e;s=o++)i+=t[s].x*t[o].y-t[o].x*t[s].y;return i*.5}static isClockWise(t){return n.area(t)<0}static triangulateShape(t,e){let i=[],s=[],o=[];jf(t),Kf(i,t);let c=t.length;e.forEach(jf);for(let u=0;u<e.length;u++)s.push(c),c+=e[u].length,Kf(i,e[u]);let a=Mh.triangulate(i,s);for(let u=0;u<a.length;u+=3)o.push(a.slice(u,u+3));return o}};So=class n extends Ge{constructor(t=1,e=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:s};let o=t/2,c=e/2,a=Math.floor(i),u=Math.floor(s),f=a+1,p=u+1,g=t/a,m=e/u,x=[],v=[],M=[],y=[];for(let _=0;_<p;_++){let T=_*m-c;for(let C=0;C<f;C++){let S=C*g-o;v.push(S,-T,0),M.push(0,0,1),y.push(C/a),y.push(1-_/u)}}for(let _=0;_<u;_++)for(let T=0;T<a;T++){let C=T+f*_,S=T+f*(_+1),L=T+1+f*(_+1),E=T+1+f*_;x.push(C,S,E),x.push(S,L,E)}this.setIndex(x),this.setAttribute("position",new ze(v,3)),this.setAttribute("normal",new ze(M,3)),this.setAttribute("uv",new ze(y,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.widthSegments,t.heightSegments)}},wo=class n extends Ge{constructor(t=.5,e=1,i=32,s=1,o=0,c=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:i,phiSegments:s,thetaStart:o,thetaLength:c},i=Math.max(3,i),s=Math.max(1,s);let a=[],u=[],f=[],p=[],g=t,m=(e-t)/s,x=new q,v=new Zt;for(let M=0;M<=s;M++){for(let y=0;y<=i;y++){let _=o+y/i*c;x.x=g*Math.cos(_),x.y=g*Math.sin(_),u.push(x.x,x.y,x.z),f.push(0,0,1),v.x=(x.x/e+1)/2,v.y=(x.y/e+1)/2,p.push(v.x,v.y)}g+=m}for(let M=0;M<s;M++){let y=M*(i+1);for(let _=0;_<i;_++){let T=_+y,C=T,S=T+i+1,L=T+i+2,E=T+1;a.push(C,S,E),a.push(S,L,E)}}this.setIndex(a),this.setAttribute("position",new ze(u,3)),this.setAttribute("normal",new ze(f,3)),this.setAttribute("uv",new ze(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}},Yi=class n extends Ge{constructor(t=1,e=32,i=16,s=0,o=Math.PI*2,c=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:s,phiLength:o,thetaStart:c,thetaLength:a},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));let u=Math.min(c+a,Math.PI),f=0,p=[],g=new q,m=new q,x=[],v=[],M=[],y=[];for(let _=0;_<=i;_++){let T=[],C=_/i,S=c+C*a,L=t*Math.cos(S),E=Math.sqrt(t*t-L*L),A=0;_===0&&c===0?A=.5/e:_===i&&u===Math.PI&&(A=-.5/e);for(let w=0;w<=e;w++){let D=w/e,N=s+D*o;g.x=-E*Math.cos(N),g.y=L,g.z=E*Math.sin(N),v.push(g.x,g.y,g.z),m.copy(g).normalize(),M.push(m.x,m.y,m.z),y.push(D+A,1-C),T.push(f++)}p.push(T)}for(let _=0;_<i;_++)for(let T=0;T<e;T++){let C=p[_][T+1],S=p[_][T],L=p[_+1][T],E=p[_+1][T+1];(_!==0||c>0)&&x.push(C,S,E),(_!==i-1||u<Math.PI)&&x.push(S,L,E)}this.setIndex(x),this.setAttribute("position",new ze(v,3)),this.setAttribute("normal",new ze(M,3)),this.setAttribute("uv",new ze(y,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};jd={clone:Ms,merge:vn},W0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Y0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Bn=class extends fi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=W0,this.fragmentShader=Y0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ms(t.uniforms),this.uniformsGroups=X0(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let c=this.uniforms[s].value;c&&c.isTexture?e.uniforms[s]={type:"t",value:c.toJSON(t).uuid}:c&&c.isColor?e.uniforms[s]={type:"c",value:c.getHex()}:c&&c.isVector2?e.uniforms[s]={type:"v2",value:c.toArray()}:c&&c.isVector3?e.uniforms[s]={type:"v3",value:c.toArray()}:c&&c.isVector4?e.uniforms[s]={type:"v4",value:c.toArray()}:c&&c.isMatrix3?e.uniforms[s]={type:"m3",value:c.toArray()}:c&&c.isMatrix4?e.uniforms[s]={type:"m4",value:c.toArray()}:e.uniforms[s]={value:c}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let i in t.uniforms){let s=t.uniforms[i];switch(this.uniforms[i]={},s.type){case"t":this.uniforms[i].value=e[s.value]||null;break;case"c":this.uniforms[i].value=new se().setHex(s.value);break;case"v2":this.uniforms[i].value=new Zt().fromArray(s.value);break;case"v3":this.uniforms[i].value=new q().fromArray(s.value);break;case"v4":this.uniforms[i].value=new Ye().fromArray(s.value);break;case"m3":this.uniforms[i].value=new ae().fromArray(s.value);break;case"m4":this.uniforms[i].value=new De().fromArray(s.value);break;default:this.uniforms[i].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let i in t.extensions)this.extensions[i]=t.extensions[i];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},al=class extends Bn{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},kn=class extends fi{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new se(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new se(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=lc,this.normalScale=new Zt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Pi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},ll=class extends fi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Ld,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},cl=class extends fi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},Eo=class extends jn{constructor(t){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(t)}copy(t){return super.copy(t),this.scale=t.scale,this.dashSize=t.dashSize,this.gapSize=t.gapSize,this}};$i=class{constructor(t,e,i,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(i),this.sampleValues=e,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,i=this._cachedIndex,s=e[i],o=e[i-1];n:{t:{let c;e:{i:if(!(t<s)){for(let a=i+2;;){if(s===void 0){if(t<o)break i;return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(o=s,s=e[++i],t<s)break t}c=e.length;break e}if(!(t>=o)){let a=e[1];t<a&&(i=2,o=a);for(let u=i-2;;){if(o===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===u)break;if(s=o,o=e[--i-1],t>=o)break t}c=i,i=0;break e}break n}for(;i<c;){let a=i+c>>>1;t<e[a]?c=a:i=a+1}if(s=e[i],o=e[i-1],o===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,o,s)}return this.interpolate_(i,o,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,i=this.sampleValues,s=this.valueSize,o=t*s;for(let c=0;c!==s;++c)e[c]=i[o+c];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},hl=class extends $i{constructor(t,e,i,s){super(t,e,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:xh,endingEnd:xh}}intervalChanged_(t,e,i){let s=this.parameterPositions,o=t-2,c=t+1,a=s[o],u=s[c];if(a===void 0)switch(this.getSettings_().endingStart){case yh:o=t,a=2*e-i;break;case _h:o=s.length-2,a=e+s[o]-s[o+1];break;default:o=t,a=i}if(u===void 0)switch(this.getSettings_().endingEnd){case yh:c=t,u=2*i-e;break;case _h:c=1,u=i+s[1]-s[0];break;default:c=t-1,u=e}let f=(i-e)*.5,p=this.valueSize;this._weightPrev=f/(e-a),this._weightNext=f/(u-i),this._offsetPrev=o*p,this._offsetNext=c*p}interpolate_(t,e,i,s){let o=this.resultBuffer,c=this.sampleValues,a=this.valueSize,u=t*a,f=u-a,p=this._offsetPrev,g=this._offsetNext,m=this._weightPrev,x=this._weightNext,v=(i-e)/(s-e),M=v*v,y=M*v,_=-m*y+2*m*M-m*v,T=(1+m)*y+(-1.5-2*m)*M+(-.5+m)*v+1,C=(-1-x)*y+(1.5+x)*M+.5*v,S=x*y-x*M;for(let L=0;L!==a;++L)o[L]=_*c[p+L]+T*c[f+L]+C*c[u+L]+S*c[g+L];return o}},ul=class extends $i{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){let o=this.resultBuffer,c=this.sampleValues,a=this.valueSize,u=t*a,f=u-a,p=(i-e)/(s-e),g=1-p;for(let m=0;m!==a;++m)o[m]=c[f+m]*g+c[u+m]*p;return o}},fl=class extends $i{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t){return this.copySampleValue_(t-1)}},dl=class extends $i{interpolate_(t,e,i,s){let o=this.resultBuffer,c=this.sampleValues,a=this.valueSize,u=t*a,f=u-a,p=this.inTangents,g=this.outTangents;if(!p||!g){let v=(i-e)/(s-e),M=1-v;for(let y=0;y!==a;++y)o[y]=c[f+y]*M+c[u+y]*v;return o}let m=a*2,x=t-1;for(let v=0;v!==a;++v){let M=c[f+v],y=c[u+v],_=x*m+v*2,T=g[_],C=g[_+1],S=t*m+v*2,L=p[S],E=p[S+1],A=q0(i,e,T,L,s);o[v]=Kd(A,M,C,E,y)}return o}};zn=class{constructor(t,e,i,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Ys(e,this.TimeBufferType),this.values=Ys(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,i;if(e.toJSON!==this.toJSON)i=e.toJSON(t);else{i={name:t.name,times:Ys(t.times,Array),values:Ys(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(i.interpolation=s),dh(t.settings)&&(i.settings={inTangents:Ys(t.settings.inTangents,Array),outTangents:Ys(t.settings.outTangents,Array)})}return i.type=t.ValueTypeName,i}InterpolantFactoryMethodDiscrete(t){return new fl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new ul(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new hl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new dl(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case so:e=this.InterpolantFactoryMethodDiscrete;break;case Ka:e=this.InterpolantFactoryMethodLinear;break;case Va:e=this.InterpolantFactoryMethodSmooth;break;case gh:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return Qt("KeyframeTrack:",i),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return so;case this.InterpolantFactoryMethodLinear:return Ka;case this.InterpolantFactoryMethodSmooth:return Va;case this.InterpolantFactoryMethodBezier:return gh}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]*=t;dh(this.settings)&&(td(this.settings.inTangents,t),td(this.settings.outTangents,t))}return this}trim(t,e){let i=this.times,s=i.length,o=0,c=s-1;for(;o!==s&&i[o]<t;)++o;for(;c!==-1&&i[c]>e;)--c;if(++c,o!==0||c!==s){o>=c&&(c=Math.max(c,1),o=c-1);let a=this.getValueSize();this.times=i.slice(o,c),this.values=this.values.slice(o*a,c*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(ne("KeyframeTrack: Invalid value size in track.",this),t=!1);let i=this.times,s=this.values,o=i.length;o===0&&(ne("KeyframeTrack: Track is empty.",this),t=!1);let c=null;for(let a=0;a!==o;a++){let u=i[a];if(typeof u=="number"&&isNaN(u)){ne("KeyframeTrack: Time is not a valid number.",this,a,u),t=!1;break}if(c!==null&&c>u){ne("KeyframeTrack: Out of order keys.",this,a,u,c),t=!1;break}c=u}if(s!==void 0&&Ym(s))for(let a=0,u=s.length;a!==u;++a){let f=s[a];if(isNaN(f)){ne("KeyframeTrack: Value is not a valid number.",this,a,f),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===Va,o=t.length-1,c=1;for(let a=1;a<o;++a){let u=!1,f=t[a],p=t[a+1];if(f!==p&&(a!==1||f!==t[0]))if(s)u=!0;else{let g=a*i,m=g-i,x=g+i;for(let v=0;v!==i;++v){let M=e[g+v];if(M!==e[m+v]||M!==e[x+v]){u=!0;break}}}if(u){if(a!==c){t[c]=t[a];let g=a*i,m=c*i;for(let x=0;x!==i;++x)e[m+x]=e[g+x]}++c}}if(o>0){t[c]=t[o];for(let a=o*i,u=c*i,f=0;f!==i;++f)e[u+f]=e[a+f];++c}return c!==t.length?(this.times=t.slice(0,c),this.values=e.slice(0,c*i)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),i=this.constructor,s=new i(this.name,t,e);return s.createInterpolant=this.createInterpolant,dh(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};zn.prototype.ValueTypeName="";zn.prototype.TimeBufferType=Float32Array;zn.prototype.ValueBufferType=Float32Array;zn.prototype.DefaultInterpolation=Ka;qi=class extends zn{constructor(t,e,i){super(t,e,i)}};qi.prototype.ValueTypeName="bool";qi.prototype.ValueBufferType=Array;qi.prototype.DefaultInterpolation=so;qi.prototype.InterpolantFactoryMethodLinear=void 0;qi.prototype.InterpolantFactoryMethodSmooth=void 0;pl=class extends zn{constructor(t,e,i,s){super(t,e,i,s)}};pl.prototype.ValueTypeName="color";ml=class extends zn{constructor(t,e,i,s){super(t,e,i,s)}};ml.prototype.ValueTypeName="number";gl=class extends $i{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){let o=this.resultBuffer,c=this.sampleValues,a=this.valueSize,u=(i-e)/(s-e),f=t*a;for(let p=f+a;f!==p;f+=4)Fn.slerpFlat(o,0,c,f-a,c,f,u);return o}},To=class extends zn{constructor(t,e,i,s){super(t,e,i,s)}InterpolantFactoryMethodLinear(t){return new gl(this.times,this.values,this.getValueSize(),t)}};To.prototype.ValueTypeName="quaternion";To.prototype.InterpolantFactoryMethodSmooth=void 0;Zi=class extends zn{constructor(t,e,i){super(t,e,i)}};Zi.prototype.ValueTypeName="string";Zi.prototype.ValueBufferType=Array;Zi.prototype.DefaultInterpolation=so;Zi.prototype.InterpolantFactoryMethodLinear=void 0;Zi.prototype.InterpolantFactoryMethodSmooth=void 0;xl=class extends zn{constructor(t,e,i,s){super(t,e,i,s)}};xl.prototype.ValueTypeName="vector";yl=class{constructor(t,e,i){let s=this,o=!1,c=0,a=0,u,f=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this._abortController=null,this.itemStart=function(p){a++,o===!1&&s.onStart!==void 0&&s.onStart(p,c,a),o=!0},this.itemEnd=function(p){c++,s.onProgress!==void 0&&s.onProgress(p,c,a),c===a&&(o=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(p){s.onError!==void 0&&s.onError(p)},this.resolveURL=function(p){return p=p.normalize("NFC"),u?u(p):p},this.setURLModifier=function(p){return u=p,this},this.addHandler=function(p,g){return f.push(p,g),this},this.removeHandler=function(p){let g=f.indexOf(p);return g!==-1&&f.splice(g,2),this},this.getHandler=function(p){for(let g=0,m=f.length;g<m;g+=2){let x=f[g],v=f[g+1];if(x.global&&(x.lastIndex=0),x.test(p))return v}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Qd=new yl,_l=class{constructor(t){this.manager=t!==void 0?t:Qd,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let i=this;return new Promise(function(s,o){i.load(t,s,e,o)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};_l.DEFAULT_MATERIAL_NAME="__DEFAULT";Ao=class extends sn{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new se(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},Po=class extends Ao{constructor(t,e,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(sn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new se(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},ph=new De,ed=new q,nd=new q,vl=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Zt(512,512),this.mapType=Rn,this.map=null,this.mapPass=null,this.matrix=new De,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new rr,this._frameExtents=new Zt(1,1),this._viewportCount=1,this._viewports=[new Ye(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;ed.setFromMatrixPosition(t.matrixWorld),e.position.copy(ed),nd.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(nd),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,i,s){ph.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),i.setFromProjectionMatrix(ph,t.coordinateSystem,t.reversedDepth);let o=this._frameExtents,c=s?s.z/o.x:1,a=s?s.w/o.y:1,u=s?s.x/o.x:0,f=s?s.y/o.y:0;t.coordinateSystem===Ks||t.reversedDepth?e.set(.5*c,0,0,.5*c+u,0,.5*a,0,.5*a+f,0,0,1,0,0,0,0,1):e.set(.5*c,0,0,.5*c+u,0,.5*a,0,.5*a+f,0,0,.5,.5,0,0,0,1),e.multiply(ph)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},Ba=new q,ka=new Fn,li=new q,Co=class extends sn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new De,this.projectionMatrix=new De,this.projectionMatrixInverse=new De,this.coordinateSystem=Zn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Ba,ka,li),li.x===1&&li.y===1&&li.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ba,ka,li.set(1,1,1)).invert()}updateWorldMatrix(t,e,i=!1){super.updateWorldMatrix(t,e,i),this.matrixWorld.decompose(Ba,ka,li),li.x===1&&li.y===1&&li.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ba,ka,li.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Vi=new q,id=new Zt,sd=new Zt,yn=class extends Co{constructor(t=50,e=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=tr*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Zs*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return tr*2*Math.atan(Math.tan(Zs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){Vi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Vi.x,Vi.y).multiplyScalar(-t/Vi.z),Vi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Vi.x,Vi.y).multiplyScalar(-t/Vi.z)}getViewSize(t,e){return this.getViewBounds(t,id,sd),e.subVectors(sd,id)}setViewOffset(t,e,i,s,o,c){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=o,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Zs*.5*this.fov)/this.zoom,i=2*e,s=this.aspect*i,o=-.5*s,c=this.view;if(this.view!==null&&this.view.enabled){let u=c.fullWidth,f=c.fullHeight;o+=c.offsetX*s/u,e-=c.offsetY*i/f,s*=c.width/u,i*=c.height/f}let a=this.filmOffset;a!==0&&(o+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+s,e,e-i,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},cr=class extends Co{constructor(t=-1,e=1,i=1,s=-1,o=.1,c=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=s,this.near=o,this.far=c,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,s,o,c){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=o,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,o=i-t,c=i+t,a=s+e,u=s-e;if(this.view!==null&&this.view.enabled){let f=(this.right-this.left)/this.view.fullWidth/this.zoom,p=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=f*this.view.offsetX,c=o+f*this.view.width,a-=p*this.view.offsetY,u=a-p*this.view.height}this.projectionMatrix.makeOrthographic(o,c,a,u,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Sh=class extends vl{constructor(){super(new cr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},hr=class extends Ao{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(sn.DEFAULT_UP),this.updateMatrix(),this.target=new sn,this.shadow=new Sh}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}},$s=-90,qs=1,bl=class extends sn{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new yn($s,qs,t,e);s.layers=this.layers,this.add(s);let o=new yn($s,qs,t,e);o.layers=this.layers,this.add(o);let c=new yn($s,qs,t,e);c.layers=this.layers,this.add(c);let a=new yn($s,qs,t,e);a.layers=this.layers,this.add(a);let u=new yn($s,qs,t,e);u.layers=this.layers,this.add(u);let f=new yn($s,qs,t,e);f.layers=this.layers,this.add(f)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[i,s,o,c,a,u]=e;for(let f of e)this.remove(f);if(t===Zn)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),o.up.set(0,0,-1),o.lookAt(0,1,0),c.up.set(0,0,1),c.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),u.up.set(0,1,0),u.lookAt(0,0,-1);else if(t===Ks)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),o.up.set(0,0,1),o.lookAt(0,1,0),c.up.set(0,0,-1),c.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),u.up.set(0,-1,0),u.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let f of e)this.add(f),f.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[o,c,a,u,f,p]=this.children,g=t.getRenderTarget(),m=t.getActiveCubeFace(),x=t.getActiveMipmapLevel(),v=t.xr.enabled;t.xr.enabled=!1;let M=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let y=!1;t.isWebGLRenderer===!0?y=t.state.buffers.depth.getReversed():y=t.reversedDepthBuffer,t.setRenderTarget(i,0,s),y&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(i,1,s),y&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),t.setRenderTarget(i,2,s),y&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(i,3,s),y&&t.autoClear===!1&&t.clearDepth(),t.render(e,u),t.setRenderTarget(i,4,s),y&&t.autoClear===!1&&t.clearDepth(),t.render(e,f),i.texture.generateMipmaps=M,t.setRenderTarget(i,5,s),y&&t.autoClear===!1&&t.clearDepth(),t.render(e,p),t.setRenderTarget(g,m,x),t.xr.enabled=v,i.texture.needsPMREMUpdate=!0}},Ml=class extends yn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}},tu="\\[\\]\\.:\\/",Z0=new RegExp("["+tu+"]","g"),eu="[^"+tu+"]",J0="[^"+tu.replace("\\.","")+"]",j0=/((?:WC+[\/:])*)/.source.replace("WC",eu),K0=/(WCOD+)?/.source.replace("WCOD",J0),Q0=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",eu),tg=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",eu),eg=new RegExp("^"+j0+K0+Q0+tg+"$"),ng=["material","materials","bones","map"],wh=class{constructor(t,e,i){let s=i||He.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(t,e)}setValue(t,e){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,o=i.length;s!==o;++s)i[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].unbind()}},He=class n{constructor(t,e,i){this.path=e,this.parsedPath=i||n.parseTrackName(e),this.node=n.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,i){return t&&t.isAnimationObjectGroup?new n.Composite(t,e,i):new n(t,e,i)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Z0,"")}static parseTrackName(t){let e=eg.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let i={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let o=i.nodeName.substring(s+1);ng.indexOf(o)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=o)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return i}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let i=t.skeleton.getBoneByName(e);if(i!==void 0)return i}if(t.children){let i=function(o){for(let c=0;c<o.length;c++){let a=o[c];if(a.name===e||a.uuid===e)return a;let u=i(a.children);if(u)return u}return null},s=i(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let i=this.resolvedProperty;for(let s=0,o=i.length;s!==o;++s)t[e++]=i[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let i=this.resolvedProperty;for(let s=0,o=i.length;s!==o;++s)i[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let i=this.resolvedProperty;for(let s=0,o=i.length;s!==o;++s)i[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let i=this.resolvedProperty;for(let s=0,o=i.length;s!==o;++s)i[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,i=e.objectName,s=e.propertyName,o=e.propertyIndex;if(t||(t=n.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Qt("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let f=e.objectIndex;switch(i){case"materials":if(!t.material){ne("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){ne("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){ne("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let p=0;p<t.length;p++)if(t[p].name===f){f=p;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){ne("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){ne("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[i]===void 0){ne("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[i]}if(f!==void 0){if(t[f]===void 0){ne("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[f]}}let c=t[s];if(c===void 0){let f=e.nodeName;ne("PropertyBinding: Trying to update property for track: "+f+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?a=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let u=this.BindingType.Direct;if(o!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){ne("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){ne("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[o]!==void 0&&(o=t.morphTargetDictionary[o])}u=this.BindingType.ArrayElement,this.resolvedProperty=c,this.propertyIndex=o}else c.fromArray!==void 0&&c.toArray!==void 0?(u=this.BindingType.HasFromToArray,this.resolvedProperty=c):Array.isArray(c)?(u=this.BindingType.EntireArray,this.resolvedProperty=c):this.propertyName=s;this.getValue=this.GetterByBindingType[u],this.setValue=this.SetterByBindingTypeAndVersioning[u][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};He.Composite=wh;He.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};He.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};He.prototype.GetterByBindingType=[He.prototype._getValue_direct,He.prototype._getValue_array,He.prototype._getValue_arrayElement,He.prototype._getValue_toArray];He.prototype.SetterByBindingTypeAndVersioning=[[He.prototype._setValue_direct,He.prototype._setValue_direct_setNeedsUpdate,He.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[He.prototype._setValue_array,He.prototype._setValue_array_setNeedsUpdate,He.prototype._setValue_array_setMatrixWorldNeedsUpdate],[He.prototype._setValue_arrayElement,He.prototype._setValue_arrayElement_setNeedsUpdate,He.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[He.prototype._setValue_fromArray,He.prototype._setValue_fromArray_setNeedsUpdate,He.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];jM=new Float32Array(1),rd=new De,Io=class{constructor(t,e,i=0,s=1/0){this.ray=new Gi(t,e),this.near=i,this.far=s,this.camera=null,this.layers=new nr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,e.projectionMatrix.elements[14]).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):ne("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return rd.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(rd),this}intersectObject(t,e=!0,i=[]){return Eh(t,this,i,e),i.sort(od),i}intersectObjects(t,e=!0,i=[]){for(let s=0,o=t.length;s<o;s++)Eh(t[s],this,i,e);return i.sort(od),i}};ur=class{constructor(t=1,e=0,i=0){this.radius=t,this.phi=e,this.theta=i}set(t,e,i){return this.radius=t,this.phi=e,this.theta=i,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=ve(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,i){return this.radius=Math.sqrt(t*t+e*e+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,i),this.phi=Math.acos(ve(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}},Th=class n{static{n.prototype.isMatrix2=!0}constructor(t,e,i,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,i,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let i=0;i<4;i++)this.elements[i]=t[i+e];return this}set(t,e,i,s){let o=this.elements;return o[0]=t,o[2]=e,o[1]=i,o[3]=s,this}},ad=new q,Ro=class extends sn{constructor(t=new q(0,0,1),e=new q(0,0,0),i=1,s=16776960,o=i*.2,c=o*.2){super(),this.type="ArrowHelper",za===void 0&&(za=new Ge,za.setAttribute("position",new ze([0,0,0,0,1,0],3)),mh=new or(.5,1,5,1),mh.translate(0,-.5,0)),this.position.copy(e),this.line=new gs(za,new jn({color:s,toneMapped:!1})),this.line.matrixAutoUpdate=!1,this.add(this.line),this.cone=new Ce(mh,new Un({color:s,toneMapped:!1})),this.cone.matrixAutoUpdate=!1,this.add(this.cone),this.setDirection(t),this.setLength(i,o,c)}setDirection(t){if(t.y>.99999)this.quaternion.set(0,0,0,1);else if(t.y<-.99999)this.quaternion.set(1,0,0,0);else{ad.set(t.z,0,-t.x).normalize();let e=Math.acos(t.y);this.quaternion.setFromAxisAngle(ad,e)}}setLength(t,e=t*.2,i=e*.2){this.line.scale.set(1,Math.max(1e-4,t-e),1),this.line.updateMatrix(),this.cone.scale.set(i,e,i),this.cone.position.y=t,this.cone.updateMatrix()}setColor(t){this.line.material.color.set(t),this.cone.material.color.set(t)}copy(t){return super.copy(t,!1),this.line.copy(t.line),this.cone.copy(t.cone),this}dispose(){super.dispose(),this.line.geometry.dispose(),this.line.material.dispose(),this.cone.geometry.dispose(),this.cone.material.dispose()}},Lo=class extends Jn{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}};typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?Qt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186")});function bp(){let n=null,t=!1,e=null,i=null;function s(o,c){i=n.requestAnimationFrame(s),e(o,c)}return{start:function(){t!==!0&&e!==null&&n!==null&&(i=n.requestAnimationFrame(s),t=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(o){e=o},setContext:function(o){n=o}}}function rg(n){let t=new WeakMap;function e(a,u){let f=a.array,p=a.usage,g=f.byteLength,m=n.createBuffer();n.bindBuffer(u,m),n.bufferData(u,f,p),a.onUploadCallback();let x;if(f instanceof Float32Array)x=n.FLOAT;else if(typeof Float16Array<"u"&&f instanceof Float16Array)x=n.HALF_FLOAT;else if(f instanceof Uint16Array)a.isFloat16BufferAttribute?x=n.HALF_FLOAT:x=n.UNSIGNED_SHORT;else if(f instanceof Int16Array)x=n.SHORT;else if(f instanceof Uint32Array)x=n.UNSIGNED_INT;else if(f instanceof Int32Array)x=n.INT;else if(f instanceof Int8Array)x=n.BYTE;else if(f instanceof Uint8Array)x=n.UNSIGNED_BYTE;else if(f instanceof Uint8ClampedArray)x=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:m,type:x,bytesPerElement:f.BYTES_PER_ELEMENT,version:a.version,size:g}}function i(a,u,f){let p=u.array,g=u.updateRanges;if(n.bindBuffer(f,a),g.length===0)n.bufferSubData(f,0,p);else{g.sort((x,v)=>x.start-v.start);let m=0;for(let x=1;x<g.length;x++){let v=g[m],M=g[x];M.start<=v.start+v.count+1?v.count=Math.max(v.count,M.start+M.count-v.start):(++m,g[m]=M)}g.length=m+1;for(let x=0,v=g.length;x<v;x++){let M=g[x];n.bufferSubData(f,M.start*p.BYTES_PER_ELEMENT,p,M.start,M.count)}u.clearUpdateRanges()}u.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function o(a){a.isInterleavedBufferAttribute&&(a=a.data);let u=t.get(a);u&&(n.deleteBuffer(u.buffer),t.delete(a))}function c(a,u){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let p=t.get(a);(!p||p.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let f=t.get(a);if(f===void 0)t.set(a,e(a,u));else if(f.version<a.version){if(f.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(f.buffer,a,u),f.version=a.version}}return{get:s,remove:o,update:c}}function Vy(n,t,e,i,s,o){let c=new se(0),a=s===!0?0:1,u,f,p=null,g=0,m=null;function x(T){let C=T.isScene===!0?T.background:null;if(C&&C.isTexture){let S=T.backgroundBlurriness>0;C=t.get(C,S)}return C}function v(T){let C=!1,S=x(T);S===null?y(c,a):S&&S.isColor&&(y(S,1),C=!0);let L=n.xr.getEnvironmentBlendMode();L==="additive"?e.buffers.color.setClear(0,0,0,1,o):L==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,o),(n.autoClear||C)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function M(T,C){let S=x(C);S&&(S.isCubeTexture||S.mapping===Do)?(f===void 0&&(f=new Ce(new Wi(1,1,1),new Bn({name:"BackgroundCubeMaterial",uniforms:Ms(gi.backgroundCube.uniforms),vertexShader:gi.backgroundCube.vertexShader,fragmentShader:gi.backgroundCube.fragmentShader,side:Tn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),f.geometry.deleteAttribute("normal"),f.geometry.deleteAttribute("uv"),f.onBeforeRender=function(L,E,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(f.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(f)),f.material.uniforms.envMap.value=S,f.material.uniforms.backgroundBlurriness.value=C.backgroundBlurriness,f.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,f.material.uniforms.backgroundRotation.value.setFromMatrix4(zy.makeRotationFromEuler(C.backgroundRotation)).transpose(),S.isCubeTexture&&S.isRenderTargetTexture===!1&&f.material.uniforms.backgroundRotation.value.premultiply(Mp),f.material.toneMapped=Me.getTransfer(S.colorSpace)!==Le,(p!==S||g!==S.version||m!==n.toneMapping)&&(f.material.needsUpdate=!0,p=S,g=S.version,m=n.toneMapping),f.layers.enableAll(),T.unshift(f,f.geometry,f.material,0,0,null)):S&&S.isTexture&&(u===void 0&&(u=new Ce(new So(2,2),new Bn({name:"BackgroundMaterial",uniforms:Ms(gi.background.uniforms),vertexShader:gi.background.vertexShader,fragmentShader:gi.background.fragmentShader,side:Ki,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(u)),u.material.uniforms.t2D.value=S,u.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,u.material.toneMapped=Me.getTransfer(S.colorSpace)!==Le,S.matrixAutoUpdate===!0&&S.updateMatrix(),u.material.uniforms.uvTransform.value.copy(S.matrix),(p!==S||g!==S.version||m!==n.toneMapping)&&(u.material.needsUpdate=!0,p=S,g=S.version,m=n.toneMapping),u.layers.enableAll(),T.unshift(u,u.geometry,u.material,0,0,null))}function y(T,C){T.getRGB(uc,Qh(n)),e.buffers.color.setClear(uc.r,uc.g,uc.b,C,o)}function _(){f!==void 0&&(f.geometry.dispose(),f.material.dispose(),f=void 0),u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0)}return{getClearColor:function(){return c},setClearColor:function(T,C=1){c.set(T),a=C,y(c,a)},getClearAlpha:function(){return a},setClearAlpha:function(T){a=T,y(c,a)},render:v,addToRenderList:M,dispose:_}}function Hy(n,t){let e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=m(null),o=s,c=!1;function a(U,V,k,z,H){let G=!1,$=g(U,z,k,V);o!==$&&(o=$,f(o.object)),G=x(U,z,k,H),G&&v(U,z,k,H),H!==null&&t.update(H,n.ELEMENT_ARRAY_BUFFER),(G||c)&&(c=!1,S(U,V,k,z),H!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(H).buffer))}function u(){return n.createVertexArray()}function f(U){return n.bindVertexArray(U)}function p(U){return n.deleteVertexArray(U)}function g(U,V,k,z){let H=z.wireframe===!0,G=i[V.id];G===void 0&&(G={},i[V.id]=G);let $=U.isInstancedMesh===!0?U.id:0,it=G[$];it===void 0&&(it={},G[$]=it);let K=it[k.id];K===void 0&&(K={},it[k.id]=K);let st=K[H];return st===void 0&&(st=m(u()),K[H]=st),st}function m(U){let V=[],k=[],z=[];for(let H=0;H<e;H++)V[H]=0,k[H]=0,z[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:V,enabledAttributes:k,attributeDivisors:z,object:U,attributes:{},index:null}}function x(U,V,k,z){let H=o.attributes,G=V.attributes,$=0,it=k.getAttributes();for(let K in it)if(it[K].location>=0){let ht=H[K],Rt=G[K];if(Rt===void 0&&(K==="instanceMatrix"&&U.instanceMatrix&&(Rt=U.instanceMatrix),K==="instanceColor"&&U.instanceColor&&(Rt=U.instanceColor)),ht===void 0||ht.attribute!==Rt||Rt&&ht.data!==Rt.data)return!0;$++}return o.attributesNum!==$||o.index!==z}function v(U,V,k,z){let H={},G=V.attributes,$=0,it=k.getAttributes();for(let K in it)if(it[K].location>=0){let ht=G[K];ht===void 0&&(K==="instanceMatrix"&&U.instanceMatrix&&(ht=U.instanceMatrix),K==="instanceColor"&&U.instanceColor&&(ht=U.instanceColor));let Rt={};Rt.attribute=ht,ht&&ht.data&&(Rt.data=ht.data),H[K]=Rt,$++}o.attributes=H,o.attributesNum=$,o.index=z}function M(){let U=o.newAttributes;for(let V=0,k=U.length;V<k;V++)U[V]=0}function y(U){_(U,0)}function _(U,V){let k=o.newAttributes,z=o.enabledAttributes,H=o.attributeDivisors;k[U]=1,z[U]===0&&(n.enableVertexAttribArray(U),z[U]=1),H[U]!==V&&(n.vertexAttribDivisor(U,V),H[U]=V)}function T(){let U=o.newAttributes,V=o.enabledAttributes;for(let k=0,z=V.length;k<z;k++)V[k]!==U[k]&&(n.disableVertexAttribArray(k),V[k]=0)}function C(U,V,k,z,H,G,$){$===!0?n.vertexAttribIPointer(U,V,k,H,G):n.vertexAttribPointer(U,V,k,z,H,G)}function S(U,V,k,z){M();let H=z.attributes,G=k.getAttributes(),$=V.defaultAttributeValues;for(let it in G){let K=G[it];if(K.location>=0){let st=H[it];if(st===void 0&&(it==="instanceMatrix"&&U.instanceMatrix&&(st=U.instanceMatrix),it==="instanceColor"&&U.instanceColor&&(st=U.instanceColor)),st!==void 0){let ht=st.normalized,Rt=st.itemSize,zt=t.get(st);if(zt===void 0)continue;let de=zt.buffer,he=zt.type,me=zt.bytesPerElement,ft=he===n.INT||he===n.UNSIGNED_INT||st.gpuType===Tl;if(st.isInterleavedBufferAttribute){let vt=st.data,Vt=vt.stride,te=st.offset;if(vt.isInstancedInterleavedBuffer){for(let Ot=0;Ot<K.locationSize;Ot++)_(K.location+Ot,vt.meshPerAttribute);U.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=vt.meshPerAttribute*vt.count)}else for(let Ot=0;Ot<K.locationSize;Ot++)y(K.location+Ot);n.bindBuffer(n.ARRAY_BUFFER,de);for(let Ot=0;Ot<K.locationSize;Ot++)C(K.location+Ot,Rt/K.locationSize,he,ht,Vt*me,(te+Rt/K.locationSize*Ot)*me,ft)}else{if(st.isInstancedBufferAttribute){for(let vt=0;vt<K.locationSize;vt++)_(K.location+vt,st.meshPerAttribute);U.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=st.meshPerAttribute*st.count)}else for(let vt=0;vt<K.locationSize;vt++)y(K.location+vt);n.bindBuffer(n.ARRAY_BUFFER,de);for(let vt=0;vt<K.locationSize;vt++)C(K.location+vt,Rt/K.locationSize,he,ht,Rt*me,Rt/K.locationSize*vt*me,ft)}}else if($!==void 0){let ht=$[it];if(ht!==void 0)switch(ht.length){case 2:n.vertexAttrib2fv(K.location,ht);break;case 3:n.vertexAttrib3fv(K.location,ht);break;case 4:n.vertexAttrib4fv(K.location,ht);break;default:n.vertexAttrib1fv(K.location,ht)}}}}T()}function L(){D();for(let U in i){let V=i[U];for(let k in V){let z=V[k];for(let H in z){let G=z[H];for(let $ in G)p(G[$].object),delete G[$];delete z[H]}}delete i[U]}}function E(U){if(i[U.id]===void 0)return;let V=i[U.id];for(let k in V){let z=V[k];for(let H in z){let G=z[H];for(let $ in G)p(G[$].object),delete G[$];delete z[H]}}delete i[U.id]}function A(U){for(let V in i){let k=i[V];for(let z in k){let H=k[z];if(H[U.id]===void 0)continue;let G=H[U.id];for(let $ in G)p(G[$].object),delete G[$];delete H[U.id]}}}function w(U){for(let V in i){let k=i[V],z=U.isInstancedMesh===!0?U.id:0,H=k[z];if(H!==void 0){for(let G in H){let $=H[G];for(let it in $)p($[it].object),delete $[it];delete H[G]}delete k[z],Object.keys(k).length===0&&delete i[V]}}}function D(){N(),c=!0,o!==s&&(o=s,f(o.object))}function N(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:D,resetDefaultState:N,dispose:L,releaseStatesOfGeometry:E,releaseStatesOfObject:w,releaseStatesOfProgram:A,initAttributes:M,enableAttribute:y,disableUnusedAttributes:T}}function Gy(n,t,e){let i;function s(u){i=u}function o(u,f){n.drawArrays(i,u,f),e.update(f,i,1)}function c(u,f,p){p!==0&&(n.drawArraysInstanced(i,u,f,p),e.update(f,i,p))}function a(u,f,p){if(p===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,u,0,f,0,p);let m=0;for(let x=0;x<p;x++)m+=f[x];e.update(m,i,1)}this.setMode=s,this.render=o,this.renderInstances=c,this.renderMultiDraw=a}function Xy(n,t,e,i){let s;function o(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let A=t.get("EXT_texture_filter_anisotropic");s=n.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function c(A){return!(A!==Gn&&i.convert(A)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(A){let w=A===ei&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(A!==Rn&&A!==ti&&!w&&i.convert(A)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE))}function u(A){if(A==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let f=e.precision!==void 0?e.precision:"highp",p=u(f);p!==f&&(Qt("WebGLRenderer:",f,"not supported, using",p,"instead."),f=p);let g=e.logarithmicDepthBuffer===!0,m=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&m===!1&&Qt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let x=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),v=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=n.getParameter(n.MAX_TEXTURE_SIZE),y=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),_=n.getParameter(n.MAX_VERTEX_ATTRIBS),T=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),C=n.getParameter(n.MAX_VARYING_VECTORS),S=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),L=n.getParameter(n.MAX_SAMPLES),E=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:o,getMaxPrecision:u,textureFormatReadable:c,textureTypeReadable:a,precision:f,logarithmicDepthBuffer:g,reversedDepthBuffer:m,maxTextures:x,maxVertexTextures:v,maxTextureSize:M,maxCubemapSize:y,maxAttributes:_,maxVertexUniforms:T,maxVaryings:C,maxFragmentUniforms:S,maxSamples:L,samples:E}}function Wy(n){let t=this,e=null,i=0,s=!1,o=!1,c=new On,a=new ae,u={value:null,needsUpdate:!1};this.uniform=u,this.numPlanes=0,this.numIntersection=0,this.init=function(g,m){let x=g.length!==0||m||i!==0||s;return s=m,i=g.length,x},this.beginShadows=function(){o=!0,p(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(g,m){e=p(g,m,0)},this.setState=function(g,m,x){let v=g.clippingPlanes,M=g.clipIntersection,y=g.clipShadows,_=n.get(g);if(!s||v===null||v.length===0||o&&!y)o?p(null):f();else{let T=o?0:i,C=T*4,S=_.clippingState||null;u.value=S,S=p(v,m,C,x);for(let L=0;L!==C;++L)S[L]=e[L];_.clippingState=S,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=T}};function f(){u.value!==e&&(u.value=e,u.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function p(g,m,x,v){let M=g!==null?g.length:0,y=null;if(M!==0){if(y=u.value,v!==!0||y===null){let _=x+M*4,T=m.matrixWorldInverse;a.getNormalMatrix(T),(y===null||y.length<_)&&(y=new Float32Array(_));for(let C=0,S=x;C!==M;++C,S+=4)c.copy(g[C]).applyMatrix4(T,a),c.normal.toArray(y,S),y[S+3]=c.constant}u.value=y,u.needsUpdate=!0}return t.numPlanes=M,t.numIntersection=0,y}}function Jy(n){let t=[],e=[],i=n,s=n-xr+1+Yy;for(let o=0;o<s;o++){let c=Math.pow(2,i);t.push(c);let a=1/(c-2),u=-a,f=1+a,p=[u,u,f,u,f,f,u,u,f,f,u,f],g=6,m=6,x=3,v=new Float32Array(x*m*g),M=new Float32Array(x*m*g);for(let _=0;_<g;_++){let T=_%3*2/3-1,C=_>2?0:-1,S=[T,C,0,T+2/3,C,0,T+2/3,C+1,0,T,C,0,T+2/3,C+1,0,T,C+1,0];v.set(S,x*m*_);for(let L=0;L<m;L++){let E=p[L*2]*2-1,A=p[L*2+1]*2-1;_===0?Ss.set(1,A,E):_===1?Ss.set(-E,1,-A):_===2?Ss.set(-E,A,1):_===3?Ss.set(-1,A,-E):_===4?Ss.set(-E,-1,A):Ss.set(E,A,-1),Ss.toArray(M,(_*m+L)*x)}}let y=new Ge;y.setAttribute("position",new ke(v,x)),y.setAttribute("outputDirection",new ke(M,x)),e.push(new Ce(y,null)),i>xr&&i--}return{lodMeshes:e,sizeLods:t}}function ep(n,t,e){let i=new In(n,t,e);return i.texture.mapping=Do,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function gr(n,t,e,i,s){n.viewport.set(t,e,i,s),n.scissor.set(t,e,i,s)}function jy(n,t,e){return new Bn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:qy,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:gc(),fragmentShader:`

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
		`,blending:pi,depthTest:!1,depthWrite:!1})}function Ky(n,t,e){return new Bn({name:"SphericalGaussianBlur",defines:{SAMPLES:$y,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:gc(),fragmentShader:`

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
		`,blending:pi,depthTest:!1,depthWrite:!1})}function np(){return new Bn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:gc(),fragmentShader:`

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
		`,blending:pi,depthTest:!1,depthWrite:!1})}function ip(){return new Bn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:gc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:pi,depthTest:!1,depthWrite:!1})}function gc(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}function Qy(n){let t=new WeakMap,e=new WeakMap,i=null;function s(m,x=!1){return m==null?null:x?c(m):o(m)}function o(m){if(m&&m.isTexture){let x=m.mapping;if(x===Sl||x===wl)if(t.has(m)){let v=t.get(m).texture;return a(v,m.mapping)}else{let v=m.image;if(v&&v.height>0){let M=new pc(v.height);return M.fromEquirectangularTexture(n,m),t.set(m,M),m.addEventListener("dispose",f),a(M.texture,m.mapping)}else return null}}return m}function c(m){if(m&&m.isTexture){let x=m.mapping,v=x===Sl||x===wl,M=x===Qi||x===vs;if(v||M){let y=e.get(m),_=y!==void 0?y.texture.pmremVersion:0;if(m.isRenderTargetTexture&&m.pmremVersion!==_)return i===null&&(i=new dc(n)),y=v?i.fromEquirectangular(m,y):i.fromCubemap(m,y),y.texture.pmremVersion=m.pmremVersion,e.set(m,y),y.texture;if(y!==void 0)return y.texture;{let T=m.image;return v&&T&&T.height>0||M&&T&&u(T)?(i===null&&(i=new dc(n)),y=v?i.fromEquirectangular(m):i.fromCubemap(m),y.texture.pmremVersion=m.pmremVersion,e.set(m,y),m.addEventListener("dispose",p),y.texture):null}}}return m}function a(m,x){return x===Sl?m.mapping=Qi:x===wl&&(m.mapping=vs),m}function u(m){let x=0,v=6;for(let M=0;M<v;M++)m[M]!==void 0&&x++;return x===v}function f(m){let x=m.target;x.removeEventListener("dispose",f);let v=t.get(x);v!==void 0&&(t.delete(x),v.dispose())}function p(m){let x=m.target;x.removeEventListener("dispose",p);let v=e.get(x);v!==void 0&&(e.delete(x),v.dispose())}function g(){t=new WeakMap,e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:g}}function t_(n){let t={};function e(i){if(t[i]!==void 0)return t[i];let s=n.getExtension(i);return t[i]=s,s}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){let s=e(i);return s===null&&ps("WebGLRenderer: "+i+" extension not supported."),s}}}function e_(n,t,e,i){let s={},o=new WeakMap;function c(g){let m=g.target;m.index!==null&&t.remove(m.index);for(let v in m.attributes)t.remove(m.attributes[v]);m.removeEventListener("dispose",c),delete s[m.id];let x=o.get(m);x&&(t.remove(x),o.delete(m)),i.releaseStatesOfGeometry(m),m.isInstancedBufferGeometry===!0&&delete m._maxInstanceCount,e.memory.geometries--}function a(g,m){return s[m.id]===!0||(m.addEventListener("dispose",c),s[m.id]=!0,e.memory.geometries++),m}function u(g){let m=g.attributes;for(let x in m)t.update(m[x],n.ARRAY_BUFFER)}function f(g){let m=[],x=g.index,v=g.attributes.position,M=0;if(v===void 0)return;if(x!==null){let T=x.array;M=x.version;for(let C=0,S=T.length;C<S;C+=3){let L=T[C+0],E=T[C+1],A=T[C+2];m.push(L,E,E,A,A,L)}}else{let T=v.array;M=v.version;for(let C=0,S=T.length/3-1;C<S;C+=3){let L=C+0,E=C+1,A=C+2;m.push(L,E,E,A,A,L)}}let y=new(v.count>=65535?fo:uo)(m,1);y.version=M;let _=o.get(g);_&&t.remove(_),o.set(g,y)}function p(g){let m=o.get(g);if(m){let x=g.index;x!==null&&m.version<x.version&&f(g)}else f(g);return o.get(g)}return{get:a,update:u,getWireframeAttribute:p}}function n_(n,t,e){let i;function s(g){i=g}let o,c;function a(g){o=g.type,c=g.bytesPerElement}function u(g,m){n.drawElements(i,m,o,g*c),e.update(m,i,1)}function f(g,m,x){x!==0&&(n.drawElementsInstanced(i,m,o,g*c,x),e.update(m,i,x))}function p(g,m,x){if(x===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,m,0,o,g,0,x);let M=0;for(let y=0;y<x;y++)M+=m[y];e.update(M,i,1)}this.setMode=s,this.setIndex=a,this.render=u,this.renderInstances=f,this.renderMultiDraw=p}function i_(n){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(o,c,a){switch(e.calls++,c){case n.TRIANGLES:e.triangles+=a*(o/3);break;case n.LINES:e.lines+=a*(o/2);break;case n.LINE_STRIP:e.lines+=a*(o-1);break;case n.LINE_LOOP:e.lines+=a*o;break;case n.POINTS:e.points+=a*o;break;default:ne("WebGLInfo: Unknown draw mode:",c);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:i}}function s_(n,t,e){let i=new WeakMap,s=new Ye;function o(c,a,u){let f=c.morphTargetInfluences,p=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,g=p!==void 0?p.length:0,m=i.get(a);if(m===void 0||m.count!==g){let D=function(){A.dispose(),i.delete(a),a.removeEventListener("dispose",D)};m!==void 0&&m.texture.dispose();let x=a.morphAttributes.position!==void 0,v=a.morphAttributes.normal!==void 0,M=a.morphAttributes.color!==void 0,y=a.morphAttributes.position||[],_=a.morphAttributes.normal||[],T=a.morphAttributes.color||[],C=0;x===!0&&(C=1),v===!0&&(C=2),M===!0&&(C=3);let S=a.attributes.position.count*C,L=1;S>t.maxTextureSize&&(L=Math.ceil(S/t.maxTextureSize),S=t.maxTextureSize);let E=new Float32Array(S*L*4*g),A=new co(E,S,L,g);A.type=ti,A.needsUpdate=!0;let w=C*4;for(let N=0;N<g;N++){let U=y[N],V=_[N],k=T[N],z=S*L*4*N;for(let H=0;H<U.count;H++){let G=H*w;x===!0&&(s.fromBufferAttribute(U,H),E[z+G+0]=s.x,E[z+G+1]=s.y,E[z+G+2]=s.z,E[z+G+3]=0),v===!0&&(s.fromBufferAttribute(V,H),E[z+G+4]=s.x,E[z+G+5]=s.y,E[z+G+6]=s.z,E[z+G+7]=0),M===!0&&(s.fromBufferAttribute(k,H),E[z+G+8]=s.x,E[z+G+9]=s.y,E[z+G+10]=s.z,E[z+G+11]=k.itemSize===4?s.w:1)}}m={count:g,texture:A,size:new Zt(S,L)},i.set(a,m),a.addEventListener("dispose",D)}if(c.isInstancedMesh===!0&&c.morphTexture!==null)u.getUniforms().setValue(n,"morphTexture",c.morphTexture,e);else{let x=0;for(let M=0;M<f.length;M++)x+=f[M];let v=a.morphTargetsRelative?1:1-x;u.getUniforms().setValue(n,"morphTargetBaseInfluence",v),u.getUniforms().setValue(n,"morphTargetInfluences",f)}u.getUniforms().setValue(n,"morphTargetsTexture",m.texture,e),u.getUniforms().setValue(n,"morphTargetsTextureSize",m.size)}return{update:o}}function r_(n,t,e,i,s){let o=new WeakMap;function c(f){let p=s.render.frame,g=f.geometry,m=t.get(f,g);if(o.get(m)!==p&&(t.update(m),o.set(m,p)),f.isInstancedMesh&&(f.hasEventListener("dispose",u)===!1&&f.addEventListener("dispose",u),o.get(f)!==p&&(e.update(f.instanceMatrix,n.ARRAY_BUFFER),f.instanceColor!==null&&e.update(f.instanceColor,n.ARRAY_BUFFER),o.set(f,p))),f.isSkinnedMesh){let x=f.skeleton;o.get(x)!==p&&(x.update(),o.set(x,p))}return m}function a(){o=new WeakMap}function u(f){let p=f.target;p.removeEventListener("dispose",u),i.releaseStatesOfObject(p),e.remove(p.instanceMatrix),p.instanceColor!==null&&e.remove(p.instanceColor)}return{update:c,dispose:a}}function a_(n,t,e,i,s,o){let c=new In(t,e,{type:n,depthBuffer:s,stencilBuffer:o,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,u=null,f=new Ge;f.setAttribute("position",new ze([-1,3,0,-1,-1,0,3,-1,0],3)),f.setAttribute("uv",new ze([0,2,0,0,2,0],2));let p=new al({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),g=new Ce(f,p),m=new cr(-1,1,1,-1,0,1),x=null,v=null,M=!1,y,_=null,T=[],C=!1;this.setSize=function(S,L){c.setSize(S,L),a!==null&&a.setSize(S,L),u!==null&&u.setSize(S,L);for(let E=0;E<T.length;E++){let A=T[E];A.setSize&&A.setSize(S,L)}},this.setEffects=function(S){T=S,C=T.length>0&&T[0].isRenderPass===!0;let L=c.width,E=c.height;T.length>0&&a===null&&(a=new In(L,E,{type:ei,depthBuffer:!1,stencilBuffer:!1}),u=new In(L,E,{type:ei,depthBuffer:!1,stencilBuffer:!1}));for(let A=0;A<T.length;A++){let w=T[A];w.setSize&&w.setSize(L,E)}},this.begin=function(S,L){if(M||S.toneMapping===Kn&&T.length===0)return!1;if(_=L,L!==null){let E=L.width,A=L.height;(c.width!==E||c.height!==A)&&this.setSize(E,A)}return C===!1&&S.setRenderTarget(c),y=S.toneMapping,S.toneMapping=Kn,!0},this.hasRenderPass=function(){return C},this.end=function(S,L){S.toneMapping=y,M=!0;let E=c,A=a;for(let w=0;w<T.length;w++){let D=T[w];D.enabled!==!1&&(D.render(S,A,E,L),D.needsSwap!==!1&&(E=A,A=A===a?u:a))}if(x!==S.outputColorSpace||v!==S.toneMapping){x=S.outputColorSpace,v=S.toneMapping,p.defines={},Me.getTransfer(x)===Le&&(p.defines.SRGB_TRANSFER="");let w=o_[v];w&&(p.defines[w]=""),p.needsUpdate=!0}p.uniforms.tDiffuse.value=E.texture,S.setRenderTarget(_),S.render(g,m),_=null,M=!1},this.isCompositing=function(){return M},this.dispose=function(){c.dispose(),a!==null&&a.dispose(),u!==null&&u.dispose(),f.dispose(),p.dispose()}}function _r(n,t,e){let i=n[0];if(i<=0||i>0)return n;let s=t*e,o=sp[s];if(o===void 0&&(o=new Float32Array(s),sp[s]=o),t!==0){i.toArray(o,0);for(let c=1,a=0;c!==t;++c)a+=e,n[c].toArray(o,a)}return o}function rn(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function on(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function xc(n,t){let e=rp[t];e===void 0&&(e=new Int32Array(t),rp[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function l_(n,t){let e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function c_(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(rn(e,t))return;n.uniform2fv(this.addr,t),on(e,t)}}function h_(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(rn(e,t))return;n.uniform3fv(this.addr,t),on(e,t)}}function u_(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(rn(e,t))return;n.uniform4fv(this.addr,t),on(e,t)}}function f_(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(rn(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),on(e,t)}else{if(rn(e,i))return;lp.set(i),n.uniformMatrix2fv(this.addr,!1,lp),on(e,i)}}function d_(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(rn(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),on(e,t)}else{if(rn(e,i))return;ap.set(i),n.uniformMatrix3fv(this.addr,!1,ap),on(e,i)}}function p_(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(rn(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),on(e,t)}else{if(rn(e,i))return;op.set(i),n.uniformMatrix4fv(this.addr,!1,op),on(e,i)}}function m_(n,t){let e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function g_(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(rn(e,t))return;n.uniform2iv(this.addr,t),on(e,t)}}function x_(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(rn(e,t))return;n.uniform3iv(this.addr,t),on(e,t)}}function y_(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(rn(e,t))return;n.uniform4iv(this.addr,t),on(e,t)}}function __(n,t){let e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function v_(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(rn(e,t))return;n.uniform2uiv(this.addr,t),on(e,t)}}function b_(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(rn(e,t))return;n.uniform3uiv(this.addr,t),on(e,t)}}function M_(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(rn(e,t))return;n.uniform4uiv(this.addr,t),on(e,t)}}function S_(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let o;this.type===n.SAMPLER_2D_SHADOW?(hu.compareFunction=e.isReversedDepthBuffer()?hc:cc,o=hu):o=Sp,e.setTexture2D(t||o,s)}function w_(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture3D(t||Ep,s)}function E_(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTextureCube(t||Tp,s)}function T_(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture2DArray(t||wp,s)}function A_(n){switch(n){case 5126:return l_;case 35664:return c_;case 35665:return h_;case 35666:return u_;case 35674:return f_;case 35675:return d_;case 35676:return p_;case 5124:case 35670:return m_;case 35667:case 35671:return g_;case 35668:case 35672:return x_;case 35669:case 35673:return y_;case 5125:return __;case 36294:return v_;case 36295:return b_;case 36296:return M_;case 35678:case 36198:case 36298:case 36306:case 35682:return S_;case 35679:case 36299:case 36307:return w_;case 35680:case 36300:case 36308:case 36293:return E_;case 36289:case 36303:case 36311:case 36292:return T_}}function P_(n,t){n.uniform1fv(this.addr,t)}function C_(n,t){let e=_r(t,this.size,2);n.uniform2fv(this.addr,e)}function I_(n,t){let e=_r(t,this.size,3);n.uniform3fv(this.addr,e)}function R_(n,t){let e=_r(t,this.size,4);n.uniform4fv(this.addr,e)}function L_(n,t){let e=_r(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function N_(n,t){let e=_r(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function D_(n,t){let e=_r(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function O_(n,t){n.uniform1iv(this.addr,t)}function F_(n,t){n.uniform2iv(this.addr,t)}function U_(n,t){n.uniform3iv(this.addr,t)}function B_(n,t){n.uniform4iv(this.addr,t)}function k_(n,t){n.uniform1uiv(this.addr,t)}function z_(n,t){n.uniform2uiv(this.addr,t)}function V_(n,t){n.uniform3uiv(this.addr,t)}function H_(n,t){n.uniform4uiv(this.addr,t)}function G_(n,t,e){let i=this.cache,s=t.length,o=xc(e,s);rn(i,o)||(n.uniform1iv(this.addr,o),on(i,o));let c;this.type===n.SAMPLER_2D_SHADOW?c=hu:c=Sp;for(let a=0;a!==s;++a)e.setTexture2D(t[a]||c,o[a])}function X_(n,t,e){let i=this.cache,s=t.length,o=xc(e,s);rn(i,o)||(n.uniform1iv(this.addr,o),on(i,o));for(let c=0;c!==s;++c)e.setTexture3D(t[c]||Ep,o[c])}function W_(n,t,e){let i=this.cache,s=t.length,o=xc(e,s);rn(i,o)||(n.uniform1iv(this.addr,o),on(i,o));for(let c=0;c!==s;++c)e.setTextureCube(t[c]||Tp,o[c])}function Y_(n,t,e){let i=this.cache,s=t.length,o=xc(e,s);rn(i,o)||(n.uniform1iv(this.addr,o),on(i,o));for(let c=0;c!==s;++c)e.setTexture2DArray(t[c]||wp,o[c])}function $_(n){switch(n){case 5126:return P_;case 35664:return C_;case 35665:return I_;case 35666:return R_;case 35674:return L_;case 35675:return N_;case 35676:return D_;case 5124:case 35670:return O_;case 35667:case 35671:return F_;case 35668:case 35672:return U_;case 35669:case 35673:return B_;case 5125:return k_;case 36294:return z_;case 36295:return V_;case 36296:return H_;case 35678:case 36198:case 36298:case 36306:case 35682:return G_;case 35679:case 36299:case 36307:return X_;case 35680:case 36300:case 36308:case 36293:return W_;case 36289:case 36303:case 36311:case 36292:return Y_}}function cp(n,t){n.seq.push(t),n.map[t.id]=t}function q_(n,t,e){let i=n.name,s=i.length;for(lu.lastIndex=0;;){let o=lu.exec(i),c=lu.lastIndex,a=o[1],u=o[2]==="]",f=o[3];if(u&&(a=a|0),f===void 0||f==="["&&c+2===s){cp(e,f===void 0?new uu(a,n,t):new fu(a,n,t));break}else{let g=e.map[a];g===void 0&&(g=new du(a),cp(e,g)),e=g}}}function hp(n,t,e){let i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}function j_(n,t){let e=n.split(`
`),i=[],s=Math.max(t-6,0),o=Math.min(t+6,e.length);for(let c=s;c<o;c++){let a=c+1;i.push(`${a===t?">":" "} ${a}: ${e[c]}`)}return i.join(`
`)}function K_(n){Me._getMatrix(up,Me.workingColorSpace,n);let t=`mat3( ${up.elements.map(e=>e.toFixed(4))} )`;switch(Me.getTransfer(n)){case oo:return[t,"LinearTransferOETF"];case Le:return[t,"sRGBTransferOETF"];default:return Qt("WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function fp(n,t,e){let i=n.getShaderParameter(t,n.COMPILE_STATUS),o=(n.getShaderInfoLog(t)||"").trim();if(i&&o==="")return"";let c=/ERROR: 0:(\d+)/.exec(o);if(c){let a=parseInt(c[1]);return e.toUpperCase()+`

`+o+`

`+j_(n.getShaderSource(t),a)}else return o}function Q_(n,t){let e=K_(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function ev(n,t){let e=tv[t];return e===void 0?(Qt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function nv(){Me.getLuminanceCoefficients(fc);let n=fc.x.toFixed(4),t=fc.y.toFixed(4),e=fc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function iv(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Xo).join(`
`)}function sv(n){let t=[];for(let e in n){let i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function rv(n,t){let e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let o=n.getActiveAttrib(t,s),c=o.name,a=1;o.type===n.FLOAT_MAT2&&(a=2),o.type===n.FLOAT_MAT3&&(a=3),o.type===n.FLOAT_MAT4&&(a=4),e[c]={type:o.type,location:n.getAttribLocation(t,c),locationSize:a}}return e}function Xo(n){return n!==""}function dp(n,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function pp(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}function pu(n){return n.replace(ov,lv)}function lv(n,t){let e=pe[t];if(e===void 0){let i=av.get(t);if(i!==void 0)e=pe[i],Qt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return pu(e)}function mp(n){return n.replace(cv,hv)}function hv(n,t,e,i){let s="";for(let o=parseInt(t);o<parseInt(e);o++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return s}function gp(n){let t=`precision ${n.precision} float;
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
#define LOW_PRECISION`),t}function fv(n){return uv[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}function pv(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":dv[n.envMapMode]||"ENVMAP_TYPE_CUBE"}function gv(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":mv[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}function yv(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":xv[n.combine]||"ENVMAP_BLENDING_NONE"}function _v(n){let t=n.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:i,maxMip:e}}function vv(n,t,e,i){let s=n.getContext(),o=e.defines,c=e.vertexShader,a=e.fragmentShader,u=fv(e),f=pv(e),p=gv(e),g=yv(e),m=_v(e),x=iv(e),v=sv(o),M=s.createProgram(),y,_,T=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(y=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v].filter(Xo).join(`
`),y.length>0&&(y+=`
`),_=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v].filter(Xo).join(`
`),_.length>0&&(_+=`
`)):(y=[gp(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+p:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+u:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Xo).join(`
`),_=[gp(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+f:"",e.envMap?"#define "+p:"",e.envMap?"#define "+g:"",m?"#define CUBEUV_TEXEL_WIDTH "+m.texelWidth:"",m?"#define CUBEUV_TEXEL_HEIGHT "+m.texelHeight:"",m?"#define CUBEUV_MAX_MIP "+m.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+u:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Kn?"#define TONE_MAPPING":"",e.toneMapping!==Kn?pe.tonemapping_pars_fragment:"",e.toneMapping!==Kn?ev("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",pe.colorspace_pars_fragment,Q_("linearToOutputTexel",e.outputColorSpace),nv(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Xo).join(`
`)),c=pu(c),c=dp(c,e),c=pp(c,e),a=pu(a),a=dp(a,e),a=pp(a,e),c=mp(c),a=mp(a),e.isRawShaderMaterial!==!0&&(T=`#version 300 es
`,y=[x,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,_=["#define varying in",e.glslVersion===Jh?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Jh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);let C=T+y+c,S=T+_+a,L=hp(s,s.VERTEX_SHADER,C),E=hp(s,s.FRAGMENT_SHADER,S);s.attachShader(M,L),s.attachShader(M,E),e.index0AttributeName!==void 0?s.bindAttribLocation(M,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(M,0,"position"),s.linkProgram(M);function A(U){if(n.debug.checkShaderErrors){let V=s.getProgramInfoLog(M)||"",k=s.getShaderInfoLog(L)||"",z=s.getShaderInfoLog(E)||"",H=V.trim(),G=k.trim(),$=z.trim(),it=!0,K=!0;if(s.getProgramParameter(M,s.LINK_STATUS)===!1)if(it=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,M,L,E);else{let st=fp(s,L,"vertex"),ht=fp(s,E,"fragment");ne("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(M,s.VALIDATE_STATUS)+`

Material Name: `+U.name+`
Material Type: `+U.type+`

Program Info Log: `+H+`
`+st+`
`+ht)}else H!==""?Qt("WebGLProgram: Program Info Log:",H):(G===""||$==="")&&(K=!1);K&&(U.diagnostics={runnable:it,programLog:H,vertexShader:{log:G,prefix:y},fragmentShader:{log:$,prefix:_}})}s.deleteShader(L),s.deleteShader(E),w=new yr(s,M),D=rv(s,M)}let w;this.getUniforms=function(){return w===void 0&&A(this),w};let D;this.getAttributes=function(){return D===void 0&&A(this),D};let N=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return N===!1&&(N=s.getProgramParameter(M,Z_)),N},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(M),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=J_++,this.cacheKey=t,this.usedTimes=1,this.program=M,this.vertexShader=L,this.fragmentShader=E,this}function Mv(n){return n===ns||n===zo||n===Vo}function Sv(n,t,e,i,s,o){let c=new nr,a=new mu,u=new Set,f=[],p=new Map,g=i.logarithmicDepthBuffer,m=i.precision,x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(w){return u.add(w),w===0?"uv":`uv${w}`}function M(w,D,N,U,V,k){let z=U.fog,H=V.geometry,G=w.isMeshStandardMaterial||w.isMeshLambertMaterial||w.isMeshPhongMaterial?U.environment:null,$=w.isMeshStandardMaterial||w.isMeshLambertMaterial&&!w.envMap||w.isMeshPhongMaterial&&!w.envMap,it=t.get(w.envMap||G,$),K=it&&it.mapping===Do?it.image.height:null,st=x[w.type];w.precision!==null&&(m=i.getMaxPrecision(w.precision),m!==w.precision&&Qt("WebGLProgram.getParameters:",w.precision,"not supported, using",m,"instead."));let ht=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,Rt=ht!==void 0?ht.length:0,zt=0;H.morphAttributes.position!==void 0&&(zt=1),H.morphAttributes.normal!==void 0&&(zt=2),H.morphAttributes.color!==void 0&&(zt=3);let de,he,me,ft;if(st){let Te=gi[st];de=Te.vertexShader,he=Te.fragmentShader}else{de=w.vertexShader,he=w.fragmentShader;let Te=a.getVertexShaderStage(w),Se=a.getFragmentShaderStage(w);a.update(w,Te,Se),me=Te.id,ft=Se.id}let vt=n.getRenderTarget(),Vt=n.state.buffers.depth.getReversed(),te=V.isInstancedMesh===!0,Ot=V.isBatchedMesh===!0,ue=!!w.map,qe=!!w.matcap,ce=!!it,_e=!!w.aoMap,Ie=!!w.lightMap,ge=!!w.bumpMap&&w.wireframe===!1,Re=!!w.normalMap,Je=!!w.displacementMap,ln=!!w.emissiveMap,Fe=!!w.metalnessMap,Xe=!!w.roughnessMap,j=w.anisotropy>0,je=w.clearcoat>0,we=w.dispersion>0,I=w.retroreflectivity>0,R=w.iridescence>0,tt=w.sheen>0,at=w.transmission>0,dt=j&&!!w.anisotropyMap,St=je&&!!w.clearcoatMap,wt=je&&!!w.clearcoatNormalMap,ut=je&&!!w.clearcoatRoughnessMap,_t=R&&!!w.iridescenceMap,Et=R&&!!w.iridescenceThicknessMap,Gt=tt&&!!w.sheenColorMap,Lt=tt&&!!w.sheenRoughnessMap,Tt=!!w.specularMap,Ht=!!w.specularColorMap,jt=!!w.specularIntensityMap,re=at&&!!w.transmissionMap,J=at&&!!w.thicknessMap,Ct=!!w.gradientMap,mt=!!w.alphaMap,At=w.alphaTest>0,It=!!w.alphaHash,bt=!!w.extensions,qt=Kn;w.toneMapped&&(vt===null||vt.isXRRenderTarget===!0)&&(qt=n.toneMapping);let Dt={shaderID:st,shaderType:w.type,shaderName:w.name,vertexShader:de,fragmentShader:he,defines:w.defines,customVertexShaderID:me,customFragmentShaderID:ft,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:m,batching:Ot,batchingColor:Ot&&V._colorsTexture!==null,instancing:te,instancingColor:te&&V.instanceColor!==null,instancingMorph:te&&V.morphTexture!==null,outputColorSpace:vt===null?n.outputColorSpace:vt.isXRRenderTarget===!0?vt.texture.colorSpace:Me.workingColorSpace,alphaToCoverage:!!w.alphaToCoverage,map:ue,matcap:qe,envMap:ce,envMapMode:ce&&it.mapping,envMapCubeUVHeight:K,aoMap:_e,lightMap:Ie,bumpMap:ge,normalMap:Re,displacementMap:Je,emissiveMap:ln,normalMapObjectSpace:Re&&w.normalMapType===Nd,normalMapTangentSpace:Re&&w.normalMapType===lc,packedNormalMap:Re&&w.normalMapType===lc&&Mv(w.normalMap.format),metalnessMap:Fe,roughnessMap:Xe,anisotropy:j,anisotropyMap:dt,clearcoat:je,clearcoatMap:St,clearcoatNormalMap:wt,clearcoatRoughnessMap:ut,dispersion:we,retroreflection:I,iridescence:R,iridescenceMap:_t,iridescenceThicknessMap:Et,sheen:tt,sheenColorMap:Gt,sheenRoughnessMap:Lt,specularMap:Tt,specularColorMap:Ht,specularIntensityMap:jt,transmission:at,transmissionMap:re,thicknessMap:J,gradientMap:Ct,opaque:w.transparent===!1&&w.blending===dr&&w.alphaToCoverage===!1,alphaMap:mt,alphaTest:At,alphaHash:It,combine:w.combine,mapUv:ue&&v(w.map.channel),aoMapUv:_e&&v(w.aoMap.channel),lightMapUv:Ie&&v(w.lightMap.channel),bumpMapUv:ge&&v(w.bumpMap.channel),normalMapUv:Re&&v(w.normalMap.channel),displacementMapUv:Je&&v(w.displacementMap.channel),emissiveMapUv:ln&&v(w.emissiveMap.channel),metalnessMapUv:Fe&&v(w.metalnessMap.channel),roughnessMapUv:Xe&&v(w.roughnessMap.channel),anisotropyMapUv:dt&&v(w.anisotropyMap.channel),clearcoatMapUv:St&&v(w.clearcoatMap.channel),clearcoatNormalMapUv:wt&&v(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ut&&v(w.clearcoatRoughnessMap.channel),iridescenceMapUv:_t&&v(w.iridescenceMap.channel),iridescenceThicknessMapUv:Et&&v(w.iridescenceThicknessMap.channel),sheenColorMapUv:Gt&&v(w.sheenColorMap.channel),sheenRoughnessMapUv:Lt&&v(w.sheenRoughnessMap.channel),specularMapUv:Tt&&v(w.specularMap.channel),specularColorMapUv:Ht&&v(w.specularColorMap.channel),specularIntensityMapUv:jt&&v(w.specularIntensityMap.channel),transmissionMapUv:re&&v(w.transmissionMap.channel),thicknessMapUv:J&&v(w.thicknessMap.channel),alphaMapUv:mt&&v(w.alphaMap.channel),vertexTangents:!!H.attributes.tangent&&(Re||j),vertexNormals:!!H.attributes.normal,vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,pointsUvs:V.isPoints===!0&&!!H.attributes.uv&&(ue||mt),fog:!!z,useFog:w.fog===!0,fogExp2:!!z&&z.isFogExp2,flatShading:w.wireframe===!1&&(w.flatShading===!0||H.attributes.normal===void 0&&Re===!1&&(w.isMeshLambertMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isMeshPhysicalMaterial)),sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:g,reversedDepthBuffer:Vt,skinning:V.isSkinnedMesh===!0,hasPositionAttribute:H.attributes.position!==void 0,morphTargets:H.morphAttributes.position!==void 0,morphNormals:H.morphAttributes.normal!==void 0,morphColors:H.morphAttributes.color!==void 0,morphTargetsCount:Rt,morphTextureStride:zt,numSunLights:D.sun.length,numDirLights:D.directional.length,numPointLights:D.point.length,numSpotLights:D.spot.length,numSpotLightMaps:D.spotLightMap.length,numRectAreaLights:D.rectArea.length,numHemiLights:D.hemi.length,numSunLightShadows:D.sunShadowMap.length,numDirLightShadows:D.directionalShadowMap.length,numPointLightShadows:D.pointShadowMap.length,numSpotLightShadows:D.spotShadowMap.length,numSpotLightShadowsWithMaps:D.numSpotLightShadowsWithMaps,numLightProbes:D.numLightProbes,numLightProbeGrids:k.length,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:w.dithering,shadowMapEnabled:n.shadowMap.enabled&&N.length>0,shadowMapType:n.shadowMap.type,toneMapping:qt,decodeVideoTexture:ue&&w.map.isVideoTexture===!0&&Me.getTransfer(w.map.colorSpace)===Le,decodeVideoTextureEmissive:ln&&w.emissiveMap.isVideoTexture===!0&&Me.getTransfer(w.emissiveMap.colorSpace)===Le,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===_n,flipSided:w.side===Tn,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:bt&&w.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(bt&&w.extensions.multiDraw===!0||Ot)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return Dt.vertexUv1s=u.has(1),Dt.vertexUv2s=u.has(2),Dt.vertexUv3s=u.has(3),u.clear(),Dt}function y(w){let D=[];if(w.shaderID?D.push(w.shaderID):(D.push(w.customVertexShaderID),D.push(w.customFragmentShaderID)),w.defines!==void 0)for(let N in w.defines)D.push(N),D.push(w.defines[N]);return w.isRawShaderMaterial===!1&&(_(D,w),T(D,w),D.push(n.outputColorSpace)),D.push(w.customProgramCacheKey),D.join()}function _(w,D){w.push(D.precision),w.push(D.outputColorSpace),w.push(D.envMapMode),w.push(D.envMapCubeUVHeight),w.push(D.mapUv),w.push(D.alphaMapUv),w.push(D.lightMapUv),w.push(D.aoMapUv),w.push(D.bumpMapUv),w.push(D.normalMapUv),w.push(D.displacementMapUv),w.push(D.emissiveMapUv),w.push(D.metalnessMapUv),w.push(D.roughnessMapUv),w.push(D.anisotropyMapUv),w.push(D.clearcoatMapUv),w.push(D.clearcoatNormalMapUv),w.push(D.clearcoatRoughnessMapUv),w.push(D.iridescenceMapUv),w.push(D.iridescenceThicknessMapUv),w.push(D.sheenColorMapUv),w.push(D.sheenRoughnessMapUv),w.push(D.specularMapUv),w.push(D.specularColorMapUv),w.push(D.specularIntensityMapUv),w.push(D.transmissionMapUv),w.push(D.thicknessMapUv),w.push(D.combine),w.push(D.fogExp2),w.push(D.sizeAttenuation),w.push(D.morphTargetsCount),w.push(D.morphAttributeCount),w.push(D.numSunLights),w.push(D.numDirLights),w.push(D.numPointLights),w.push(D.numSpotLights),w.push(D.numSpotLightMaps),w.push(D.numHemiLights),w.push(D.numRectAreaLights),w.push(D.numSunLightShadows),w.push(D.numDirLightShadows),w.push(D.numPointLightShadows),w.push(D.numSpotLightShadows),w.push(D.numSpotLightShadowsWithMaps),w.push(D.numLightProbes),w.push(D.shadowMapType),w.push(D.toneMapping),w.push(D.numClippingPlanes),w.push(D.numClipIntersection),w.push(D.depthPacking)}function T(w,D){c.disableAll(),D.instancing&&c.enable(0),D.instancingColor&&c.enable(1),D.instancingMorph&&c.enable(2),D.matcap&&c.enable(3),D.envMap&&c.enable(4),D.normalMapObjectSpace&&c.enable(5),D.normalMapTangentSpace&&c.enable(6),D.clearcoat&&c.enable(7),D.iridescence&&c.enable(8),D.alphaTest&&c.enable(9),D.vertexColors&&c.enable(10),D.vertexAlphas&&c.enable(11),D.vertexUv1s&&c.enable(12),D.vertexUv2s&&c.enable(13),D.vertexUv3s&&c.enable(14),D.vertexTangents&&c.enable(15),D.anisotropy&&c.enable(16),D.alphaHash&&c.enable(17),D.batching&&c.enable(18),D.dispersion&&c.enable(19),D.retroreflection&&c.enable(24),D.batchingColor&&c.enable(20),D.gradientMap&&c.enable(21),D.packedNormalMap&&c.enable(22),D.vertexNormals&&c.enable(23),w.push(c.mask),c.disableAll(),D.fog&&c.enable(0),D.useFog&&c.enable(1),D.flatShading&&c.enable(2),D.logarithmicDepthBuffer&&c.enable(3),D.reversedDepthBuffer&&c.enable(4),D.skinning&&c.enable(5),D.morphTargets&&c.enable(6),D.morphNormals&&c.enable(7),D.morphColors&&c.enable(8),D.premultipliedAlpha&&c.enable(9),D.shadowMapEnabled&&c.enable(10),D.doubleSided&&c.enable(11),D.flipSided&&c.enable(12),D.useDepthPacking&&c.enable(13),D.dithering&&c.enable(14),D.transmission&&c.enable(15),D.sheen&&c.enable(16),D.opaque&&c.enable(17),D.pointsUvs&&c.enable(18),D.decodeVideoTexture&&c.enable(19),D.decodeVideoTextureEmissive&&c.enable(20),D.alphaToCoverage&&c.enable(21),D.numLightProbeGrids>0&&c.enable(22),D.hasPositionAttribute&&c.enable(23),w.push(c.mask)}function C(w){let D=x[w.type],N;if(D){let U=gi[D];N=jd.clone(U.uniforms)}else N=w.uniforms;return N}function S(w,D){let N=p.get(D);return N!==void 0?++N.usedTimes:(N=new vv(n,D,w,s),f.push(N),p.set(D,N)),N}function L(w){if(--w.usedTimes===0){let D=f.indexOf(w);f[D]=f[f.length-1],f.pop(),p.delete(w.cacheKey),w.destroy()}}function E(w){a.remove(w)}function A(){a.dispose()}return{getParameters:M,getProgramCacheKey:y,getUniforms:C,acquireProgram:S,releaseProgram:L,releaseShaderCache:E,programs:f,dispose:A}}function wv(){let n=new WeakMap;function t(c){return n.has(c)}function e(c){let a=n.get(c);return a===void 0&&(a={},n.set(c,a)),a}function i(c){n.delete(c)}function s(c,a,u){n.get(c)[a]=u}function o(){n=new WeakMap}return{has:t,get:e,remove:i,update:s,dispose:o}}function Ev(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.materialVariant!==t.materialVariant?n.materialVariant-t.materialVariant:n.z!==t.z?n.z-t.z:n.id-t.id}function xp(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function yp(){let n=[],t=0,e=[],i=[],s=[];function o(){t=0,e.length=0,i.length=0,s.length=0}function c(m){let x=0;return m.isInstancedMesh&&(x+=2),m.isSkinnedMesh&&(x+=1),x}function a(m,x,v,M,y,_){let T=n[t];return T===void 0?(T={id:m.id,object:m,geometry:x,material:v,materialVariant:c(m),groupOrder:M,renderOrder:m.renderOrder,z:y,group:_},n[t]=T):(T.id=m.id,T.object=m,T.geometry=x,T.material=v,T.materialVariant=c(m),T.groupOrder=M,T.renderOrder=m.renderOrder,T.z=y,T.group=_),t++,T}function u(m,x,v,M,y,_,T){T.reversedDepth===!0&&(y=-y);let C=a(m,x,v,M,y,_);v.transmission>0?i.push(C):v.transparent===!0?s.push(C):e.push(C)}function f(m,x,v,M,y,_){let T=a(m,x,v,M,y,_);v.transmission>0?i.unshift(T):v.transparent===!0?s.unshift(T):e.unshift(T)}function p(m,x){e.length>1&&e.sort(m||Ev),i.length>1&&i.sort(x||xp),s.length>1&&s.sort(x||xp)}function g(){for(let m=t,x=n.length;m<x;m++){let v=n[m];if(v.id===null)break;v.id=null,v.object=null,v.geometry=null,v.material=null,v.group=null}}return{opaque:e,transmissive:i,transparent:s,init:o,push:u,unshift:f,finish:g,sort:p}}function Tv(){let n=new WeakMap;function t(i,s){let o=n.get(i),c;return o===void 0?(c=new yp,n.set(i,[c])):s>=o.length?(c=new yp,o.push(c)):c=o[s],c}function e(){n=new WeakMap}return{get:t,dispose:e}}function Av(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new q,color:new se};break;case"SpotLight":e={position:new q,direction:new q,color:new se,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new q,color:new se,distance:0,decay:0};break;case"HemisphereLight":e={direction:new q,skyColor:new se,groundColor:new se};break;case"RectAreaLight":e={color:new se,position:new q,halfWidth:new q,halfHeight:new q};break}return n[t.id]=e,e}}}function Pv(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Zt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Zt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Zt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}function Iv(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function Rv(n){let t=new Av,e=Pv(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let f=0;f<9;f++)i.probe.push(new q);let s=new q,o=new De,c=new De;function a(f){let p=0,g=0,m=0;for(let V=0;V<9;V++)i.probe[V].set(0,0,0);let x=0,v=0,M=0,y=0,_=0,T=0,C=0,S=0,L=0,E=0,A=0,w=0,D=0,N=0;f.sort(Iv);for(let V=0,k=f.length;V<k;V++){let z=f[V],H=z.color,G=z.intensity,$=z.distance,it=null;if(z.shadow&&z.shadow.map&&(z.shadow.map.texture.format===ns?it=z.shadow.map.texture:it=z.shadow.map.depthTexture||z.shadow.map.texture),z.isAmbientLight)p+=H.r*G,g+=H.g*G,m+=H.b*G;else if(z.isLightProbe){for(let K=0;K<9;K++)i.probe[K].addScaledVector(z.sh.coefficients[K],G);N++}else if(z.isSunLight){let K=t.get(z);if(K.color.copy(z.color).multiplyScalar(z.intensity),z.castShadow){let st=z.shadow,ht=e.get(z);ht.shadowIntensity=st.intensity,ht.shadowBias=st.bias,ht.shadowNormalBias=st.normalBias,ht.shadowRadius=st.radius,ht.shadowMapSize.copy(st.mapSize).multiply(st.getFrameExtents()),i.sunShadow[v]=ht,i.sunShadowMap[v]=it;let Rt=st.getViewportCount();for(let zt=0;zt<Rt;zt++)i.sunShadowMatrix[M+zt]=st.getMatrix(zt),i.sunShadowCascade[M+zt]=st._cascadeData[zt];M+=Rt,v++}i.sun[x]=K,x++}else if(z.isDirectionalLight){let K=t.get(z);if(K.color.copy(z.color).multiplyScalar(z.intensity),z.castShadow){let st=z.shadow,ht=e.get(z);ht.shadowIntensity=st.intensity,ht.shadowBias=st.bias,ht.shadowNormalBias=st.normalBias,ht.shadowRadius=st.radius,ht.shadowMapSize=st.mapSize,i.directionalShadow[y]=ht,i.directionalShadowMap[y]=it,i.directionalShadowMatrix[y]=z.shadow.matrix,L++}i.directional[y]=K,y++}else if(z.isSpotLight){let K=t.get(z);K.position.setFromMatrixPosition(z.matrixWorld),K.color.copy(H).multiplyScalar(G),K.distance=$,K.coneCos=Math.cos(z.angle),K.penumbraCos=Math.cos(z.angle*(1-z.penumbra)),K.decay=z.decay,i.spot[T]=K;let st=z.shadow;if(z.map&&(i.spotLightMap[w]=z.map,w++,st.updateMatrices(z),z.castShadow&&D++),i.spotLightMatrix[T]=st.matrix,z.castShadow){let ht=e.get(z);ht.shadowIntensity=st.intensity,ht.shadowBias=st.bias,ht.shadowNormalBias=st.normalBias,ht.shadowRadius=st.radius,ht.shadowMapSize=st.mapSize,i.spotShadow[T]=ht,i.spotShadowMap[T]=it,A++}T++}else if(z.isRectAreaLight){let K=t.get(z);K.color.copy(H).multiplyScalar(G),K.halfWidth.set(z.width*.5,0,0),K.halfHeight.set(0,z.height*.5,0),i.rectArea[C]=K,C++}else if(z.isPointLight){let K=t.get(z);if(K.color.copy(z.color).multiplyScalar(z.intensity),K.distance=z.distance,K.decay=z.decay,z.castShadow){let st=z.shadow,ht=e.get(z);ht.shadowIntensity=st.intensity,ht.shadowBias=st.bias,ht.shadowNormalBias=st.normalBias,ht.shadowRadius=st.radius,ht.shadowMapSize=st.mapSize,ht.shadowCameraNear=st.camera.near,ht.shadowCameraFar=st.camera.far,i.pointShadow[_]=ht,i.pointShadowMap[_]=it,i.pointShadowMatrix[_]=z.shadow.matrix,E++}i.point[_]=K,_++}else if(z.isHemisphereLight){let K=t.get(z);K.skyColor.copy(z.color).multiplyScalar(G),K.groundColor.copy(z.groundColor).multiplyScalar(G),i.hemi[S]=K,S++}}C>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Bt.LTC_FLOAT_1,i.rectAreaLTC2=Bt.LTC_FLOAT_2):(i.rectAreaLTC1=Bt.LTC_HALF_1,i.rectAreaLTC2=Bt.LTC_HALF_2)),i.ambient[0]=p,i.ambient[1]=g,i.ambient[2]=m;let U=i.hash;(U.sunLength!==x||U.directionalLength!==y||U.pointLength!==_||U.spotLength!==T||U.rectAreaLength!==C||U.hemiLength!==S||U.numSunShadows!==v||U.numDirectionalShadows!==L||U.numPointShadows!==E||U.numSpotShadows!==A||U.numSpotMaps!==w||U.numLightProbes!==N)&&(i.sun.length=x,i.directional.length=y,i.spot.length=T,i.rectArea.length=C,i.point.length=_,i.hemi.length=S,i.sunShadow.length=v,i.sunShadowMap.length=v,i.sunShadowMatrix.length=M,i.sunShadowCascade.length=M,i.directionalShadow.length=L,i.directionalShadowMap.length=L,i.directionalShadowMatrix.length=L,i.pointShadow.length=E,i.pointShadowMap.length=E,i.pointShadowMatrix.length=E,i.spotShadow.length=A,i.spotShadowMap.length=A,i.spotLightMatrix.length=A+w-D,i.spotLightMap.length=w,i.numSpotLightShadowsWithMaps=D,i.numLightProbes=N,U.sunLength=x,U.directionalLength=y,U.pointLength=_,U.spotLength=T,U.rectAreaLength=C,U.hemiLength=S,U.numSunShadows=v,U.numDirectionalShadows=L,U.numPointShadows=E,U.numSpotShadows=A,U.numSpotMaps=w,U.numLightProbes=N,i.version=Cv++)}function u(f,p){let g=0,m=0,x=0,v=0,M=0,y=0,_=p.matrixWorldInverse;for(let T=0,C=f.length;T<C;T++){let S=f[T];if(S.isSunLight){let L=i.sun[g];L.direction.setFromMatrixPosition(S.matrixWorld),L.direction.transformDirection(_),g++}else if(S.isDirectionalLight){let L=i.directional[m];L.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),L.direction.sub(s),L.direction.transformDirection(_),m++}else if(S.isSpotLight){let L=i.spot[v];L.position.setFromMatrixPosition(S.matrixWorld),L.position.applyMatrix4(_),L.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),L.direction.sub(s),L.direction.transformDirection(_),v++}else if(S.isRectAreaLight){let L=i.rectArea[M];L.position.setFromMatrixPosition(S.matrixWorld),L.position.applyMatrix4(_),c.identity(),o.copy(S.matrixWorld),o.premultiply(_),c.extractRotation(o),L.halfWidth.set(S.width*.5,0,0),L.halfHeight.set(0,S.height*.5,0),L.halfWidth.applyMatrix4(c),L.halfHeight.applyMatrix4(c),M++}else if(S.isPointLight){let L=i.point[x];L.position.setFromMatrixPosition(S.matrixWorld),L.position.applyMatrix4(_),x++}else if(S.isHemisphereLight){let L=i.hemi[y];L.direction.setFromMatrixPosition(S.matrixWorld),L.direction.transformDirection(_),y++}}}return{setup:a,setupView:u,state:i}}function _p(n){let t=new Rv(n),e=[],i=[],s=[];function o(m){g.camera=m,e.length=0,i.length=0,s.length=0}function c(m){e.push(m)}function a(m){i.push(m)}function u(m){s.push(m)}function f(){t.setup(e)}function p(m){t.setupView(e,m)}let g={lightsArray:e,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:o,state:g,setupLights:f,setupLightsView:p,pushLight:c,pushShadow:a,pushLightProbeGrid:u}}function Lv(n){let t=new WeakMap;function e(s,o=0){let c=t.get(s),a;return c===void 0?(a=new _p(n),t.set(s,[a])):o>=c.length?(a=new _p(n),c.push(a)):a=c[o],a}function i(){t=new WeakMap}return{get:e,dispose:i}}function Uv(n,t,e){let i=new rr,s=new Zt,o=new Zt,c=new Ye,a=new ll,u=new cl,f={},p=e.maxTextureSize,g={[Ki]:Tn,[Tn]:Ki,[_n]:_n},m=new Bn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Zt},radius:{value:4}},vertexShader:Nv,fragmentShader:Dv}),x=m.clone();x.defines.HORIZONTAL_PASS=1;let v=new Ge;v.setAttribute("position",new ke(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let M=new Ce(v,m),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=No;let _=this.type;this.render=function(E,A,w){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||E.length===0)return;this.type===hd&&(Qt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=No);let D=n.getRenderTarget(),N=n.getActiveCubeFace(),U=n.getActiveMipmapLevel(),V=n.state;V.setBlending(pi),V.buffers.depth.getReversed()===!0?V.buffers.color.setClear(0,0,0,0):V.buffers.color.setClear(1,1,1,1),V.buffers.depth.setTest(!0),V.setScissorTest(!1);let k=_!==this.type;k&&A.traverse(function(z){z.material&&(Array.isArray(z.material)?z.material.forEach(H=>H.needsUpdate=!0):z.material.needsUpdate=!0)});for(let z=0,H=E.length;z<H;z++){let G=E[z],$=G.shadow;if($===void 0){Qt("WebGLShadowMap:",G,"has no shadow.");continue}if($.autoUpdate===!1&&$.needsUpdate===!1)continue;s.copy($.mapSize);let it=$.getFrameExtents();s.multiply(it),o.copy($.mapSize),(s.x>p||s.y>p)&&(s.x>p&&(o.x=Math.floor(p/it.x),s.x=o.x*it.x,$.mapSize.x=o.x),s.y>p&&(o.y=Math.floor(p/it.y),s.y=o.y*it.y,$.mapSize.y=o.y));let K=n.state.buffers.depth.getReversed();if($.camera._reversedDepth=K,$.map===null||k===!0){if($.map!==null&&($.map.depthTexture!==null&&($.map.depthTexture.dispose(),$.map.depthTexture=null),$.map.dispose()),this.type===fr){if(G.isPointLight){Qt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}$.map=new In(s.x,s.y,{format:ns,type:ei,minFilter:dn,magFilter:dn,generateMipmaps:!1}),$.map.texture.name=G.name+".shadowMap",$.map.depthTexture=new Xi(s.x,s.y,ti),$.map.depthTexture.name=G.name+".shadowMapDepth",$.map.depthTexture.format=ui,$.map.depthTexture.compareFunction=null,$.map.depthTexture.minFilter=hn,$.map.depthTexture.magFilter=hn}else G.isPointLight?($.map=new pc(s.x),$.map.depthTexture=new ol(s.x,Qn)):($.map=new In(s.x,s.y),$.map.depthTexture=new Xi(s.x,s.y,Qn)),$.map.depthTexture.name=G.name+".shadowMap",$.map.depthTexture.format=ui,this.type===No?($.map.depthTexture.compareFunction=K?hc:cc,$.map.depthTexture.minFilter=dn,$.map.depthTexture.magFilter=dn):($.map.depthTexture.compareFunction=null,$.map.depthTexture.minFilter=hn,$.map.depthTexture.magFilter=hn);$.camera.updateProjectionMatrix()}$.map.isWebGLCubeRenderTarget!==!0&&($.map.width!==s.x||$.map.height!==s.y)&&$.map.setSize(s.x,s.y);let st=$.map.isWebGLCubeRenderTarget?6:$.getViewportCount();G.isPointLight!==!0&&$.updateMatrices(G,w);for(let ht=0;ht<st;ht++){let Rt=$.getCamera(ht);if(G.isPointLight){let zt=$.camera,de=$.matrix,he=G.distance||zt.far;he!==zt.far&&(zt.far=he,zt.updateProjectionMatrix()),Go.setFromMatrixPosition(G.matrixWorld),zt.position.copy(Go),cu.copy(zt.position),cu.add(Ov[ht]),zt.up.copy(Fv[ht]),zt.lookAt(cu),zt.updateMatrixWorld(),de.makeTranslation(-Go.x,-Go.y,-Go.z),vp.multiplyMatrices(zt.projectionMatrix,zt.matrixWorldInverse),$._frustum.setFromProjectionMatrix(vp,zt.coordinateSystem,zt.reversedDepth)}if($.map.isWebGLCubeRenderTarget)n.setRenderTarget($.map,ht),n.clear();else{ht===0&&(n.setRenderTarget($.map),n.clear());let zt=$.getViewport(ht);c.set(o.x*zt.x,o.y*zt.y,o.x*zt.z,o.y*zt.w),V.viewport(c)}i=$.getFrustum(ht),S(A,w,Rt,G,this.type)}$.isPointLightShadow!==!0&&this.type===fr&&T($,w),$.needsUpdate=!1}_=this.type,y.needsUpdate=!1,n.setRenderTarget(D,N,U)};function T(E,A){let w=t.update(M);m.defines.VSM_SAMPLES!==E.blurSamples&&(m.defines.VSM_SAMPLES=E.blurSamples,x.defines.VSM_SAMPLES=E.blurSamples,m.needsUpdate=!0,x.needsUpdate=!0),E.mapPass===null?E.mapPass=new In(s.x,s.y,{format:ns,type:ei}):(E.mapPass.width!==E.map.width||E.mapPass.height!==E.map.height)&&E.mapPass.setSize(E.map.width,E.map.height),m.uniforms.shadow_pass.value=E.map.depthTexture,m.uniforms.resolution.value.set(E.map.width,E.map.height),m.uniforms.radius.value=E.radius,n.setRenderTarget(E.mapPass),n.clear(),n.renderBufferDirect(A,null,w,m,M,null),x.uniforms.shadow_pass.value=E.mapPass.texture,x.uniforms.resolution.value.set(E.map.width,E.map.height),x.uniforms.radius.value=E.radius,n.setRenderTarget(E.map),n.clear(),n.renderBufferDirect(A,null,w,x,M,null)}function C(E,A,w,D){let N=null,U=w.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(U!==void 0)N=U;else if(N=w.isPointLight===!0?u:a,n.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0||A.alphaToCoverage===!0){let V=N.uuid,k=A.uuid,z=f[V];z===void 0&&(z={},f[V]=z);let H=z[k];H===void 0&&(H=N.clone(),z[k]=H,A.addEventListener("dispose",L)),N=H}if(N.visible=A.visible,N.wireframe=A.wireframe,D===fr?N.side=A.shadowSide!==null?A.shadowSide:A.side:N.side=A.shadowSide!==null?A.shadowSide:g[A.side],N.alphaMap=A.alphaMap,N.alphaTest=A.alphaToCoverage===!0?.5:A.alphaTest,N.map=A.map,N.clipShadows=A.clipShadows,N.clippingPlanes=A.clippingPlanes,N.clipIntersection=A.clipIntersection,N.displacementMap=A.displacementMap,N.displacementScale=A.displacementScale,N.displacementBias=A.displacementBias,N.wireframeLinewidth=A.wireframeLinewidth,N.linewidth=A.linewidth,w.isPointLight===!0&&N.isMeshDistanceMaterial===!0){let V=n.properties.get(N);V.light=w}return N}function S(E,A,w,D,N){if(E.visible===!1)return;if(E.layers.test(A.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&N===fr)&&(!E.frustumCulled||E.intersectsFrustum(i))){E.modelViewMatrix.multiplyMatrices(w.matrixWorldInverse,E.matrixWorld);let k=t.update(E),z=E.material;if(Array.isArray(z)){let H=k.groups;for(let G=0,$=H.length;G<$;G++){let it=H[G],K=z[it.materialIndex];if(K&&K.visible){let st=C(E,K,D,N);E.onBeforeShadow(n,E,A,w,k,st,it),n.renderBufferDirect(w,null,k,st,E,it),E.onAfterShadow(n,E,A,w,k,st,it)}}}else if(z.visible){let H=C(E,z,D,N);E.onBeforeShadow(n,E,A,w,k,H,null),n.renderBufferDirect(w,null,k,H,E,null),E.onAfterShadow(n,E,A,w,k,H,null)}}let V=E.children;for(let k=0,z=V.length;k<z;k++)S(V[k],A,w,D,N)}function L(E){E.target.removeEventListener("dispose",L);for(let w in f){let D=f[w],N=E.target.uuid;N in D&&(D[N].dispose(),delete D[N])}}}function Bv(n,t){function e(){let J=!1,Ct=new Ye,mt=null,At=new Ye(0,0,0,0);return{setMask:function(It){mt!==It&&!J&&(n.colorMask(It,It,It,It),mt=It)},setLocked:function(It){J=It},setClear:function(It,bt,qt,Dt,Te){Te===!0&&(It*=Dt,bt*=Dt,qt*=Dt),Ct.set(It,bt,qt,Dt),At.equals(Ct)===!1&&(n.clearColor(It,bt,qt,Dt),At.copy(Ct))},reset:function(){J=!1,mt=null,At.set(-1,0,0,0)}}}function i(){let J=!1,Ct=!1,mt=null,At=null,It=null;return{setReversed:function(bt){if(Ct!==bt){let qt=t.get("EXT_clip_control");bt?qt.clipControlEXT(qt.LOWER_LEFT_EXT,qt.ZERO_TO_ONE_EXT):qt.clipControlEXT(qt.LOWER_LEFT_EXT,qt.NEGATIVE_ONE_TO_ONE_EXT),Ct=bt;let Dt=It;It=null,this.setClear(Dt)}},getReversed:function(){return Ct},setTest:function(bt){bt?vt(n.DEPTH_TEST):Vt(n.DEPTH_TEST)},setMask:function(bt){mt!==bt&&!J&&(n.depthMask(bt),mt=bt)},setFunc:function(bt){if(Ct&&(bt=Xd[bt]),At!==bt){switch(bt){case Ga:n.depthFunc(n.NEVER);break;case Xa:n.depthFunc(n.ALWAYS);break;case Wa:n.depthFunc(n.LESS);break;case js:n.depthFunc(n.LEQUAL);break;case Ya:n.depthFunc(n.EQUAL);break;case $a:n.depthFunc(n.GEQUAL);break;case qa:n.depthFunc(n.GREATER);break;case Za:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}At=bt}},setLocked:function(bt){J=bt},setClear:function(bt){It!==bt&&(It=bt,Ct&&(bt=1-bt),n.clearDepth(bt))},reset:function(){J=!1,mt=null,At=null,It=null,Ct=!1}}}function s(){let J=!1,Ct=null,mt=null,At=null,It=null,bt=null,qt=null,Dt=null,Te=null;return{setTest:function(Se){J||(Se?vt(n.STENCIL_TEST):Vt(n.STENCIL_TEST))},setMask:function(Se){Ct!==Se&&!J&&(n.stencilMask(Se),Ct=Se)},setFunc:function(Se,bn,An){(mt!==Se||At!==bn||It!==An)&&(n.stencilFunc(Se,bn,An),mt=Se,At=bn,It=An)},setOp:function(Se,bn,An){(bt!==Se||qt!==bn||Dt!==An)&&(n.stencilOp(Se,bn,An),bt=Se,qt=bn,Dt=An)},setLocked:function(Se){J=Se},setClear:function(Se){Te!==Se&&(n.clearStencil(Se),Te=Se)},reset:function(){J=!1,Ct=null,mt=null,At=null,It=null,bt=null,qt=null,Dt=null,Te=null}}}let o=new e,c=new i,a=new s,u=new WeakMap,f=new WeakMap,p={},g={},m={},x=new WeakMap,v=[],M=null,y=!1,_=null,T=null,C=null,S=null,L=null,E=null,A=null,w=new se(0,0,0),D=0,N=!1,U=null,V=null,k=null,z=null,H=null,G=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),$=!1,it=0,K=n.getParameter(n.VERSION);K.indexOf("WebGL")!==-1?(it=parseFloat(/^WebGL (\d)/.exec(K)[1]),$=it>=1):K.indexOf("OpenGL ES")!==-1&&(it=parseFloat(/^OpenGL ES (\d)/.exec(K)[1]),$=it>=2);let st=null,ht={},Rt=n.getParameter(n.SCISSOR_BOX),zt=n.getParameter(n.VIEWPORT),de=new Ye().fromArray(Rt),he=new Ye().fromArray(zt);function me(J,Ct,mt,At){let It=new Uint8Array(4),bt=n.createTexture();n.bindTexture(J,bt),n.texParameteri(J,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(J,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let qt=0;qt<mt;qt++)J===n.TEXTURE_3D||J===n.TEXTURE_2D_ARRAY?n.texImage3D(Ct,0,n.RGBA,1,1,At,0,n.RGBA,n.UNSIGNED_BYTE,It):n.texImage2D(Ct+qt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,It);return bt}let ft={};ft[n.TEXTURE_2D]=me(n.TEXTURE_2D,n.TEXTURE_2D,1),ft[n.TEXTURE_CUBE_MAP]=me(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),ft[n.TEXTURE_2D_ARRAY]=me(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),ft[n.TEXTURE_3D]=me(n.TEXTURE_3D,n.TEXTURE_3D,1,1),o.setClear(0,0,0,1),c.setClear(1),a.setClear(0),vt(n.DEPTH_TEST),c.setFunc(js),ge(!1),Re(Ah),vt(n.CULL_FACE),_e(pi);function vt(J){p[J]!==!0&&(n.enable(J),p[J]=!0)}function Vt(J){p[J]!==!1&&(n.disable(J),p[J]=!1)}function te(J,Ct){return m[J]!==Ct?(n.bindFramebuffer(J,Ct),m[J]=Ct,J===n.DRAW_FRAMEBUFFER&&(m[n.FRAMEBUFFER]=Ct),J===n.FRAMEBUFFER&&(m[n.DRAW_FRAMEBUFFER]=Ct),!0):!1}function Ot(J,Ct){let mt=v,At=!1;if(J){mt=x.get(Ct),mt===void 0&&(mt=[],x.set(Ct,mt));let It=J.textures;if(mt.length!==It.length||mt[0]!==n.COLOR_ATTACHMENT0){for(let bt=0,qt=It.length;bt<qt;bt++)mt[bt]=n.COLOR_ATTACHMENT0+bt;mt.length=It.length,At=!0}}else mt[0]!==n.BACK&&(mt[0]=n.BACK,At=!0);At&&n.drawBuffers(mt)}function ue(J){return M!==J?(n.useProgram(J),M=J,!0):!1}let qe={[_s]:n.FUNC_ADD,[fd]:n.FUNC_SUBTRACT,[dd]:n.FUNC_REVERSE_SUBTRACT};qe[pd]=n.MIN,qe[md]=n.MAX;let ce={[gd]:n.ZERO,[xd]:n.ONE,[yd]:n.SRC_COLOR,[Rh]:n.SRC_ALPHA,[wd]:n.SRC_ALPHA_SATURATE,[Md]:n.DST_COLOR,[vd]:n.DST_ALPHA,[_d]:n.ONE_MINUS_SRC_COLOR,[Lh]:n.ONE_MINUS_SRC_ALPHA,[Sd]:n.ONE_MINUS_DST_COLOR,[bd]:n.ONE_MINUS_DST_ALPHA,[Ed]:n.CONSTANT_COLOR,[Td]:n.ONE_MINUS_CONSTANT_COLOR,[Ad]:n.CONSTANT_ALPHA,[Pd]:n.ONE_MINUS_CONSTANT_ALPHA};function _e(J,Ct,mt,At,It,bt,qt,Dt,Te,Se){if(J===pi){y===!0&&(Vt(n.BLEND),y=!1);return}if(y===!1&&(vt(n.BLEND),y=!0),J!==ud){if(J!==_||Se!==N){if((T!==_s||L!==_s)&&(n.blendEquation(n.FUNC_ADD),T=_s,L=_s),Se)switch(J){case dr:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Ph:n.blendFunc(n.ONE,n.ONE);break;case Ch:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Ih:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:ne("WebGLState: Invalid blending: ",J);break}else switch(J){case dr:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Ph:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Ch:ne("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Ih:ne("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:ne("WebGLState: Invalid blending: ",J);break}C=null,S=null,E=null,A=null,w.set(0,0,0),D=0,_=J,N=Se}return}It=It||Ct,bt=bt||mt,qt=qt||At,(Ct!==T||It!==L)&&(n.blendEquationSeparate(qe[Ct],qe[It]),T=Ct,L=It),(mt!==C||At!==S||bt!==E||qt!==A)&&(n.blendFuncSeparate(ce[mt],ce[At],ce[bt],ce[qt]),C=mt,S=At,E=bt,A=qt),(Dt.equals(w)===!1||Te!==D)&&(n.blendColor(Dt.r,Dt.g,Dt.b,Te),w.copy(Dt),D=Te),_=J,N=!1}function Ie(J,Ct){J.side===_n?Vt(n.CULL_FACE):vt(n.CULL_FACE);let mt=J.side===Tn;Ct&&(mt=!mt),ge(mt),J.blending===dr&&J.transparent===!1?_e(pi):_e(J.blending,J.blendEquation,J.blendSrc,J.blendDst,J.blendEquationAlpha,J.blendSrcAlpha,J.blendDstAlpha,J.blendColor,J.blendAlpha,J.premultipliedAlpha),c.setFunc(J.depthFunc),c.setTest(J.depthTest),c.setMask(J.depthWrite),o.setMask(J.colorWrite);let At=J.stencilWrite;a.setTest(At),At&&(a.setMask(J.stencilWriteMask),a.setFunc(J.stencilFunc,J.stencilRef,J.stencilFuncMask),a.setOp(J.stencilFail,J.stencilZFail,J.stencilZPass)),ln(J.polygonOffset,J.polygonOffsetFactor,J.polygonOffsetUnits),J.alphaToCoverage===!0?vt(n.SAMPLE_ALPHA_TO_COVERAGE):Vt(n.SAMPLE_ALPHA_TO_COVERAGE)}function ge(J){U!==J&&(J?n.frontFace(n.CW):n.frontFace(n.CCW),U=J)}function Re(J){J!==ld?(vt(n.CULL_FACE),J!==V&&(J===Ah?n.cullFace(n.BACK):J===cd?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Vt(n.CULL_FACE),V=J}function Je(J){J!==k&&($&&n.lineWidth(J),k=J)}function ln(J,Ct,mt){J?(vt(n.POLYGON_OFFSET_FILL),(z!==Ct||H!==mt)&&(z=Ct,H=mt,c.getReversed()&&(Ct=-Ct),n.polygonOffset(Ct,mt))):Vt(n.POLYGON_OFFSET_FILL)}function Fe(J){J?vt(n.SCISSOR_TEST):Vt(n.SCISSOR_TEST)}function Xe(J){J===void 0&&(J=n.TEXTURE0+G-1),st!==J&&(n.activeTexture(J),st=J)}function j(J,Ct,mt){mt===void 0&&(st===null?mt=n.TEXTURE0+G-1:mt=st);let At=ht[mt];At===void 0&&(At={type:void 0,texture:void 0},ht[mt]=At),(At.type!==J||At.texture!==Ct)&&(st!==mt&&(n.activeTexture(mt),st=mt),n.bindTexture(J,Ct||ft[J]),At.type=J,At.texture=Ct)}function je(){let J=ht[st];J!==void 0&&J.type!==void 0&&(n.bindTexture(J.type,null),J.type=void 0,J.texture=void 0)}function we(){try{n.compressedTexImage2D(...arguments)}catch(J){ne("WebGLState:",J)}}function I(){try{n.compressedTexImage3D(...arguments)}catch(J){ne("WebGLState:",J)}}function R(){try{n.texSubImage2D(...arguments)}catch(J){ne("WebGLState:",J)}}function tt(){try{n.texSubImage3D(...arguments)}catch(J){ne("WebGLState:",J)}}function at(){try{n.compressedTexSubImage2D(...arguments)}catch(J){ne("WebGLState:",J)}}function dt(){try{n.compressedTexSubImage3D(...arguments)}catch(J){ne("WebGLState:",J)}}function St(){try{n.texStorage2D(...arguments)}catch(J){ne("WebGLState:",J)}}function wt(){try{n.texStorage3D(...arguments)}catch(J){ne("WebGLState:",J)}}function ut(){try{n.texImage2D(...arguments)}catch(J){ne("WebGLState:",J)}}function _t(){try{n.texImage3D(...arguments)}catch(J){ne("WebGLState:",J)}}function Et(J){return g[J]!==void 0?g[J]:n.getParameter(J)}function Gt(J,Ct){g[J]!==Ct&&(n.pixelStorei(J,Ct),g[J]=Ct)}function Lt(J){de.equals(J)===!1&&(n.scissor(J.x,J.y,J.z,J.w),de.copy(J))}function Tt(J){he.equals(J)===!1&&(n.viewport(J.x,J.y,J.z,J.w),he.copy(J))}function Ht(J,Ct){let mt=f.get(Ct);mt===void 0&&(mt=new WeakMap,f.set(Ct,mt));let At=mt.get(J);At===void 0&&(At=n.getUniformBlockIndex(Ct,J.name),mt.set(J,At))}function jt(J,Ct){let At=f.get(Ct).get(J);u.get(Ct)!==At&&(n.uniformBlockBinding(Ct,At,J.__bindingPointIndex),u.set(Ct,At))}function re(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),c.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),p={},g={},st=null,ht={},m={},x=new WeakMap,v=[],M=null,y=!1,_=null,T=null,C=null,S=null,L=null,E=null,A=null,w=new se(0,0,0),D=0,N=!1,U=null,V=null,k=null,z=null,H=null,de.set(0,0,n.canvas.width,n.canvas.height),he.set(0,0,n.canvas.width,n.canvas.height),o.reset(),c.reset(),a.reset()}return{buffers:{color:o,depth:c,stencil:a},enable:vt,disable:Vt,bindFramebuffer:te,drawBuffers:Ot,useProgram:ue,setBlending:_e,setMaterial:Ie,setFlipSided:ge,setCullFace:Re,setLineWidth:Je,setPolygonOffset:ln,setScissorTest:Fe,activeTexture:Xe,bindTexture:j,unbindTexture:je,compressedTexImage2D:we,compressedTexImage3D:I,texImage2D:ut,texImage3D:_t,pixelStorei:Gt,getParameter:Et,updateUBOMapping:Ht,uniformBlockBinding:jt,texStorage2D:St,texStorage3D:wt,texSubImage2D:R,texSubImage3D:tt,compressedTexSubImage2D:at,compressedTexSubImage3D:dt,scissor:Lt,viewport:Tt,reset:re}}function kv(n,t,e,i,s,o,c){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,u=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),f=new Zt,p=new WeakMap,g=new Set,m,x=new WeakMap,v=!1;try{v=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(I,R){return v?new OffscreenCanvas(I,R):ao("canvas")}function y(I,R,tt){let at=1,dt=we(I);if((dt.width>tt||dt.height>tt)&&(at=tt/Math.max(dt.width,dt.height)),at<1)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap||typeof VideoFrame<"u"&&I instanceof VideoFrame){let St=Math.floor(at*dt.width),wt=Math.floor(at*dt.height);m===void 0&&(m=M(St,wt));let ut=R?M(St,wt):m;return ut.width=St,ut.height=wt,ut.getContext("2d").drawImage(I,0,0,St,wt),Qt("WebGLRenderer: Texture has been resized from ("+dt.width+"x"+dt.height+") to ("+St+"x"+wt+")."),ut}else return"data"in I&&Qt("WebGLRenderer: Image in DataTexture is too big ("+dt.width+"x"+dt.height+")."),I;return I}function _(I){return I.generateMipmaps}function T(I){n.generateMipmap(I)}function C(I){return I.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:I.isWebGL3DRenderTarget?n.TEXTURE_3D:I.isWebGLArrayRenderTarget||I.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function S(I,R,tt,at,dt,St=!1){if(I!==null){if(n[I]!==void 0)return n[I];Qt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let wt;at&&(wt=t.get("EXT_texture_norm16"),wt||Qt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ut=R;if(R===n.RED&&(tt===n.FLOAT&&(ut=n.R32F),tt===n.HALF_FLOAT&&(ut=n.R16F),tt===n.UNSIGNED_BYTE&&(ut=n.R8),tt===n.UNSIGNED_SHORT&&wt&&(ut=wt.R16_EXT),tt===n.SHORT&&wt&&(ut=wt.R16_SNORM_EXT)),R===n.RED_INTEGER&&(tt===n.UNSIGNED_BYTE&&(ut=n.R8UI),tt===n.UNSIGNED_SHORT&&(ut=n.R16UI),tt===n.UNSIGNED_INT&&(ut=n.R32UI),tt===n.BYTE&&(ut=n.R8I),tt===n.SHORT&&(ut=n.R16I),tt===n.INT&&(ut=n.R32I)),R===n.RG&&(tt===n.FLOAT&&(ut=n.RG32F),tt===n.HALF_FLOAT&&(ut=n.RG16F),tt===n.UNSIGNED_BYTE&&(ut=n.RG8),tt===n.UNSIGNED_SHORT&&wt&&(ut=wt.RG16_EXT),tt===n.SHORT&&wt&&(ut=wt.RG16_SNORM_EXT)),R===n.RG_INTEGER&&(tt===n.UNSIGNED_BYTE&&(ut=n.RG8UI),tt===n.UNSIGNED_SHORT&&(ut=n.RG16UI),tt===n.UNSIGNED_INT&&(ut=n.RG32UI),tt===n.BYTE&&(ut=n.RG8I),tt===n.SHORT&&(ut=n.RG16I),tt===n.INT&&(ut=n.RG32I)),R===n.RGB_INTEGER&&(tt===n.UNSIGNED_BYTE&&(ut=n.RGB8UI),tt===n.UNSIGNED_SHORT&&(ut=n.RGB16UI),tt===n.UNSIGNED_INT&&(ut=n.RGB32UI),tt===n.BYTE&&(ut=n.RGB8I),tt===n.SHORT&&(ut=n.RGB16I),tt===n.INT&&(ut=n.RGB32I)),R===n.RGBA_INTEGER&&(tt===n.UNSIGNED_BYTE&&(ut=n.RGBA8UI),tt===n.UNSIGNED_SHORT&&(ut=n.RGBA16UI),tt===n.UNSIGNED_INT&&(ut=n.RGBA32UI),tt===n.BYTE&&(ut=n.RGBA8I),tt===n.SHORT&&(ut=n.RGBA16I),tt===n.INT&&(ut=n.RGBA32I)),R===n.RGB&&(tt===n.UNSIGNED_SHORT&&wt&&(ut=wt.RGB16_EXT),tt===n.SHORT&&wt&&(ut=wt.RGB16_SNORM_EXT),tt===n.UNSIGNED_INT_5_9_9_9_REV&&(ut=n.RGB9_E5),tt===n.UNSIGNED_INT_10F_11F_11F_REV&&(ut=n.R11F_G11F_B10F)),R===n.RGBA){let _t=St?oo:Me.getTransfer(dt);tt===n.FLOAT&&(ut=n.RGBA32F),tt===n.HALF_FLOAT&&(ut=n.RGBA16F),tt===n.UNSIGNED_BYTE&&(ut=_t===Le?n.SRGB8_ALPHA8:n.RGBA8),tt===n.UNSIGNED_SHORT&&wt&&(ut=wt.RGBA16_EXT),tt===n.SHORT&&wt&&(ut=wt.RGBA16_SNORM_EXT),tt===n.UNSIGNED_SHORT_4_4_4_4&&(ut=n.RGBA4),tt===n.UNSIGNED_SHORT_5_5_5_1&&(ut=n.RGB5_A1)}return(ut===n.R16F||ut===n.R32F||ut===n.RG16F||ut===n.RG32F||ut===n.RGBA16F||ut===n.RGBA32F)&&t.get("EXT_color_buffer_float"),ut}function L(I,R){let tt;return I?R===null||R===Qn||R===mr?tt=n.DEPTH24_STENCIL8:R===ti?tt=n.DEPTH32F_STENCIL8:R===pr&&(tt=n.DEPTH24_STENCIL8,Qt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):R===null||R===Qn||R===mr?tt=n.DEPTH_COMPONENT24:R===ti?tt=n.DEPTH_COMPONENT32F:R===pr&&(tt=n.DEPTH_COMPONENT16),tt}function E(I,R){return _(I)===!0||I.isFramebufferTexture&&I.minFilter!==hn&&I.minFilter!==dn?Math.log2(Math.max(R.width,R.height))+1:I.mipmaps!==void 0&&I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?R.mipmaps.length:1}function A(I){let R=I.target;R.removeEventListener("dispose",A),D(R),R.isVideoTexture&&p.delete(R),R.isHTMLTexture&&g.delete(R)}function w(I){let R=I.target;R.removeEventListener("dispose",w),U(R)}function D(I){let R=i.get(I);if(R.__webglInit===void 0)return;let tt=I.source,at=x.get(tt);if(at){let dt=at[R.__cacheKey];dt.usedTimes--,dt.usedTimes===0&&N(I),Object.keys(at).length===0&&x.delete(tt)}i.remove(I)}function N(I){let R=i.get(I);n.deleteTexture(R.__webglTexture);let tt=I.source,at=x.get(tt);delete at[R.__cacheKey],c.memory.textures--}function U(I){let R=i.get(I);if(I.depthTexture&&(I.depthTexture.dispose(),i.remove(I.depthTexture)),I.isWebGLCubeRenderTarget)for(let at=0;at<6;at++){if(Array.isArray(R.__webglFramebuffer[at]))for(let dt=0;dt<R.__webglFramebuffer[at].length;dt++)n.deleteFramebuffer(R.__webglFramebuffer[at][dt]);else n.deleteFramebuffer(R.__webglFramebuffer[at]);R.__webglDepthbuffer&&n.deleteRenderbuffer(R.__webglDepthbuffer[at])}else{if(Array.isArray(R.__webglFramebuffer))for(let at=0;at<R.__webglFramebuffer.length;at++)n.deleteFramebuffer(R.__webglFramebuffer[at]);else n.deleteFramebuffer(R.__webglFramebuffer);if(R.__webglDepthbuffer&&n.deleteRenderbuffer(R.__webglDepthbuffer),R.__webglMultisampledFramebuffer&&n.deleteFramebuffer(R.__webglMultisampledFramebuffer),R.__webglColorRenderbuffer)for(let at=0;at<R.__webglColorRenderbuffer.length;at++)R.__webglColorRenderbuffer[at]&&n.deleteRenderbuffer(R.__webglColorRenderbuffer[at]);R.__webglDepthRenderbuffer&&n.deleteRenderbuffer(R.__webglDepthRenderbuffer)}let tt=I.textures;for(let at=0,dt=tt.length;at<dt;at++){let St=i.get(tt[at]);St.__webglTexture&&(n.deleteTexture(St.__webglTexture),c.memory.textures--),i.remove(tt[at])}i.remove(I)}let V=0;function k(){V=0}function z(){return V}function H(I){V=I}function G(){let I=V;return I>=s.maxTextures&&Qt("WebGLTextures: Trying to use "+(I+1)+" texture units while this GPU supports only "+s.maxTextures),V+=1,I}function $(I){let R=[];return R.push(I.wrapS),R.push(I.wrapT),R.push(I.wrapR||0),R.push(I.magFilter),R.push(I.minFilter),R.push(I.anisotropy),R.push(I.internalFormat),R.push(I.format),R.push(I.type),R.push(I.generateMipmaps),R.push(I.premultiplyAlpha),R.push(I.flipY),R.push(I.unpackAlignment),R.push(I.colorSpace),R.join()}function it(I,R){let tt=i.get(I);if(I.isVideoTexture&&j(I),I.isRenderTargetTexture===!1&&I.isExternalTexture!==!0&&I.version>0&&tt.__version!==I.version){let at=I.image;if(at===null)Qt("WebGLRenderer: Texture marked for update but no image data found.");else if(at.complete===!1)Qt("WebGLRenderer: Texture marked for update but image is incomplete");else{Vt(tt,I,R);return}}else I.isExternalTexture&&(tt.__webglTexture=I.sourceTexture?I.sourceTexture:null);e.bindTexture(n.TEXTURE_2D,tt.__webglTexture,n.TEXTURE0+R)}function K(I,R){let tt=i.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&tt.__version!==I.version){Vt(tt,I,R);return}else I.isExternalTexture&&(tt.__webglTexture=I.sourceTexture?I.sourceTexture:null);e.bindTexture(n.TEXTURE_2D_ARRAY,tt.__webglTexture,n.TEXTURE0+R)}function st(I,R){let tt=i.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&tt.__version!==I.version){Vt(tt,I,R);return}e.bindTexture(n.TEXTURE_3D,tt.__webglTexture,n.TEXTURE0+R)}function ht(I,R){let tt=i.get(I);if(I.isCubeDepthTexture!==!0&&I.version>0&&tt.__version!==I.version){te(tt,I,R);return}e.bindTexture(n.TEXTURE_CUBE_MAP,tt.__webglTexture,n.TEXTURE0+R)}let Rt={[Ja]:n.REPEAT,[hi]:n.CLAMP_TO_EDGE,[ja]:n.MIRRORED_REPEAT},zt={[hn]:n.NEAREST,[Rd]:n.NEAREST_MIPMAP_NEAREST,[Oo]:n.NEAREST_MIPMAP_LINEAR,[dn]:n.LINEAR,[El]:n.LINEAR_MIPMAP_NEAREST,[ts]:n.LINEAR_MIPMAP_LINEAR},de={[Od]:n.NEVER,[zd]:n.ALWAYS,[Fd]:n.LESS,[cc]:n.LEQUAL,[Ud]:n.EQUAL,[hc]:n.GEQUAL,[Bd]:n.GREATER,[kd]:n.NOTEQUAL};function he(I,R){if(R.type===ti&&t.has("OES_texture_float_linear")===!1&&(R.magFilter===dn||R.magFilter===El||R.magFilter===Oo||R.magFilter===ts||R.minFilter===dn||R.minFilter===El||R.minFilter===Oo||R.minFilter===ts)&&Qt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(I,n.TEXTURE_WRAP_S,Rt[R.wrapS]),n.texParameteri(I,n.TEXTURE_WRAP_T,Rt[R.wrapT]),(I===n.TEXTURE_3D||I===n.TEXTURE_2D_ARRAY)&&n.texParameteri(I,n.TEXTURE_WRAP_R,Rt[R.wrapR]),n.texParameteri(I,n.TEXTURE_MAG_FILTER,zt[R.magFilter]),n.texParameteri(I,n.TEXTURE_MIN_FILTER,zt[R.minFilter]),R.compareFunction&&(n.texParameteri(I,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(I,n.TEXTURE_COMPARE_FUNC,de[R.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(R.magFilter===hn||R.minFilter!==Oo&&R.minFilter!==ts||R.type===ti&&t.has("OES_texture_float_linear")===!1)return;if(R.anisotropy>1||i.get(R).__currentAnisotropy){let tt=t.get("EXT_texture_filter_anisotropic");n.texParameterf(I,tt.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(R.anisotropy,s.getMaxAnisotropy())),i.get(R).__currentAnisotropy=R.anisotropy}}}function me(I,R){let tt=!1;I.__webglInit===void 0&&(I.__webglInit=!0,R.addEventListener("dispose",A));let at=R.source,dt=x.get(at);dt===void 0&&(dt={},x.set(at,dt));let St=$(R);if(St!==I.__cacheKey){dt[St]===void 0&&(dt[St]={texture:n.createTexture(),usedTimes:0},c.memory.textures++,tt=!0),dt[St].usedTimes++;let wt=dt[I.__cacheKey];wt!==void 0&&(dt[I.__cacheKey].usedTimes--,wt.usedTimes===0&&N(R)),I.__cacheKey=St,I.__webglTexture=dt[St].texture}return tt}function ft(I,R,tt){return Math.floor(Math.floor(I/tt)/R)}function vt(I,R,tt,at){let St=I.updateRanges;if(St.length===0)e.texSubImage2D(n.TEXTURE_2D,0,0,0,R.width,R.height,tt,at,R.data);else{St.sort((Gt,Lt)=>Gt.start-Lt.start);let wt=0;for(let Gt=1;Gt<St.length;Gt++){let Lt=St[wt],Tt=St[Gt],Ht=Lt.start+Lt.count,jt=ft(Tt.start,R.width,4),re=ft(Lt.start,R.width,4);Tt.start<=Ht+1&&jt===re&&ft(Tt.start+Tt.count-1,R.width,4)===jt?Lt.count=Math.max(Lt.count,Tt.start+Tt.count-Lt.start):(++wt,St[wt]=Tt)}St.length=wt+1;let ut=e.getParameter(n.UNPACK_ROW_LENGTH),_t=e.getParameter(n.UNPACK_SKIP_PIXELS),Et=e.getParameter(n.UNPACK_SKIP_ROWS);e.pixelStorei(n.UNPACK_ROW_LENGTH,R.width);for(let Gt=0,Lt=St.length;Gt<Lt;Gt++){let Tt=St[Gt],Ht=Math.floor(Tt.start/4),jt=Math.ceil(Tt.count/4),re=Ht%R.width,J=Math.floor(Ht/R.width),Ct=jt,mt=1;e.pixelStorei(n.UNPACK_SKIP_PIXELS,re),e.pixelStorei(n.UNPACK_SKIP_ROWS,J),e.texSubImage2D(n.TEXTURE_2D,0,re,J,Ct,mt,tt,at,R.data)}I.clearUpdateRanges(),e.pixelStorei(n.UNPACK_ROW_LENGTH,ut),e.pixelStorei(n.UNPACK_SKIP_PIXELS,_t),e.pixelStorei(n.UNPACK_SKIP_ROWS,Et)}}function Vt(I,R,tt){let at=n.TEXTURE_2D;(R.isDataArrayTexture||R.isCompressedArrayTexture)&&(at=n.TEXTURE_2D_ARRAY),R.isData3DTexture&&(at=n.TEXTURE_3D);let dt=me(I,R),St=R.source;e.bindTexture(at,I.__webglTexture,n.TEXTURE0+tt);let wt=i.get(St);if(St.version!==wt.__version||dt===!0){if(e.activeTexture(n.TEXTURE0+tt),(typeof ImageBitmap<"u"&&R.image instanceof ImageBitmap)===!1){let mt=Me.getPrimaries(Me.workingColorSpace),At=R.colorSpace===Ci?null:Me.getPrimaries(R.colorSpace),It=R.colorSpace===Ci||mt===At?n.NONE:n.BROWSER_DEFAULT_WEBGL;e.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,R.flipY),e.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),e.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,It)}e.pixelStorei(n.UNPACK_ALIGNMENT,R.unpackAlignment);let _t=y(R.image,!1,s.maxTextureSize);_t=je(R,_t);let Et=o.convert(R.format,R.colorSpace),Gt=o.convert(R.type),Lt=S(R.internalFormat,Et,Gt,R.normalized,R.colorSpace,R.isVideoTexture);he(at,R);let Tt,Ht=R.mipmaps,jt=R.isVideoTexture!==!0,re=wt.__version===void 0||dt===!0,J=St.dataReady,Ct=E(R,_t);if(R.isDepthTexture)Lt=L(R.format===es,R.type),re&&(jt?e.texStorage2D(n.TEXTURE_2D,1,Lt,_t.width,_t.height):e.texImage2D(n.TEXTURE_2D,0,Lt,_t.width,_t.height,0,Et,Gt,null));else if(R.isDataTexture)if(Ht.length>0){jt&&re&&e.texStorage2D(n.TEXTURE_2D,Ct,Lt,Ht[0].width,Ht[0].height);for(let mt=0,At=Ht.length;mt<At;mt++)Tt=Ht[mt],jt?J&&e.texSubImage2D(n.TEXTURE_2D,mt,0,0,Tt.width,Tt.height,Et,Gt,Tt.data):e.texImage2D(n.TEXTURE_2D,mt,Lt,Tt.width,Tt.height,0,Et,Gt,Tt.data);R.generateMipmaps=!1}else jt?(re&&e.texStorage2D(n.TEXTURE_2D,Ct,Lt,_t.width,_t.height),J&&vt(R,_t,Et,Gt)):e.texImage2D(n.TEXTURE_2D,0,Lt,_t.width,_t.height,0,Et,Gt,_t.data);else if(R.isCompressedTexture)if(R.isCompressedArrayTexture){jt&&re&&e.texStorage3D(n.TEXTURE_2D_ARRAY,Ct,Lt,Ht[0].width,Ht[0].height,_t.depth);for(let mt=0,At=Ht.length;mt<At;mt++)if(Tt=Ht[mt],R.format!==Gn)if(Et!==null)if(jt){if(J)if(R.layerUpdates.size>0){let It=nu(Tt.width,Tt.height,R.format,R.type);for(let bt of R.layerUpdates){let qt=Tt.data.subarray(bt*It/Tt.data.BYTES_PER_ELEMENT,(bt+1)*It/Tt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,mt,0,0,bt,Tt.width,Tt.height,1,Et,qt)}}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,mt,0,0,0,Tt.width,Tt.height,_t.depth,Et,Tt.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,mt,Lt,Tt.width,Tt.height,_t.depth,0,Tt.data,0,0);else Qt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else jt?J&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,mt,0,0,0,Tt.width,Tt.height,_t.depth,Et,Gt,Tt.data):e.texImage3D(n.TEXTURE_2D_ARRAY,mt,Lt,Tt.width,Tt.height,_t.depth,0,Et,Gt,Tt.data);R.layerUpdates.size>0&&R.clearLayerUpdates()}else{jt&&re&&e.texStorage2D(n.TEXTURE_2D,Ct,Lt,Ht[0].width,Ht[0].height);for(let mt=0,At=Ht.length;mt<At;mt++)Tt=Ht[mt],R.format!==Gn?Et!==null?jt?J&&e.compressedTexSubImage2D(n.TEXTURE_2D,mt,0,0,Tt.width,Tt.height,Et,Tt.data):e.compressedTexImage2D(n.TEXTURE_2D,mt,Lt,Tt.width,Tt.height,0,Tt.data):Qt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):jt?J&&e.texSubImage2D(n.TEXTURE_2D,mt,0,0,Tt.width,Tt.height,Et,Gt,Tt.data):e.texImage2D(n.TEXTURE_2D,mt,Lt,Tt.width,Tt.height,0,Et,Gt,Tt.data)}else if(R.isDataArrayTexture)if(jt){if(re&&e.texStorage3D(n.TEXTURE_2D_ARRAY,Ct,Lt,_t.width,_t.height,_t.depth),J)if(R.layerUpdates.size>0){let mt=nu(_t.width,_t.height,R.format,R.type);for(let At of R.layerUpdates){let It=_t.data.subarray(At*mt/_t.data.BYTES_PER_ELEMENT,(At+1)*mt/_t.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,At,_t.width,_t.height,1,Et,Gt,It)}R.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,_t.width,_t.height,_t.depth,Et,Gt,_t.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,Lt,_t.width,_t.height,_t.depth,0,Et,Gt,_t.data);else if(R.isData3DTexture)jt?(re&&e.texStorage3D(n.TEXTURE_3D,Ct,Lt,_t.width,_t.height,_t.depth),J&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,_t.width,_t.height,_t.depth,Et,Gt,_t.data)):e.texImage3D(n.TEXTURE_3D,0,Lt,_t.width,_t.height,_t.depth,0,Et,Gt,_t.data);else if(R.isFramebufferTexture){if(re)if(jt)e.texStorage2D(n.TEXTURE_2D,Ct,Lt,_t.width,_t.height);else{let mt=_t.width,At=_t.height;for(let It=0;It<Ct;It++)e.texImage2D(n.TEXTURE_2D,It,Lt,mt,At,0,Et,Gt,null),mt>>=1,At>>=1}}else if(R.isHTMLTexture){if("texElementImage2D"in n){let mt=n.canvas;if(mt.hasAttribute("layoutsubtree")||mt.setAttribute("layoutsubtree","true"),_t.parentNode!==mt){mt.appendChild(_t),g.add(R),mt.onpaint=At=>{let It=At.changedElements;for(let bt of g)It.includes(bt.image)&&(bt.needsUpdate=!0)},mt.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,_t);else{let It=n.RGBA,bt=n.RGBA,qt=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,It,bt,qt,_t)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(Ht.length>0){if(jt&&re){let mt=we(Ht[0]);e.texStorage2D(n.TEXTURE_2D,Ct,Lt,mt.width,mt.height)}for(let mt=0,At=Ht.length;mt<At;mt++)Tt=Ht[mt],jt?J&&e.texSubImage2D(n.TEXTURE_2D,mt,0,0,Et,Gt,Tt):e.texImage2D(n.TEXTURE_2D,mt,Lt,Et,Gt,Tt);R.generateMipmaps=!1}else if(jt){if(re){let mt=we(_t);e.texStorage2D(n.TEXTURE_2D,Ct,Lt,mt.width,mt.height)}J&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,Et,Gt,_t)}else e.texImage2D(n.TEXTURE_2D,0,Lt,Et,Gt,_t);_(R)&&T(at),wt.__version=St.version,R.onUpdate&&R.onUpdate(R)}I.__version=R.version}function te(I,R,tt){if(R.image.length!==6)return;let at=me(I,R),dt=R.source;e.bindTexture(n.TEXTURE_CUBE_MAP,I.__webglTexture,n.TEXTURE0+tt);let St=i.get(dt);if(dt.version!==St.__version||at===!0){e.activeTexture(n.TEXTURE0+tt);let wt=Me.getPrimaries(Me.workingColorSpace),ut=R.colorSpace===Ci?null:Me.getPrimaries(R.colorSpace),_t=R.colorSpace===Ci||wt===ut?n.NONE:n.BROWSER_DEFAULT_WEBGL;e.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,R.flipY),e.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),e.pixelStorei(n.UNPACK_ALIGNMENT,R.unpackAlignment),e.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,_t);let Et=R.isCompressedTexture||R.image[0].isCompressedTexture,Gt=R.image[0]&&R.image[0].isDataTexture,Lt=[];for(let bt=0;bt<6;bt++)!Et&&!Gt?Lt[bt]=y(R.image[bt],!0,s.maxCubemapSize):Lt[bt]=Gt?R.image[bt].image:R.image[bt],Lt[bt]=je(R,Lt[bt]);let Tt=Lt[0],Ht=o.convert(R.format,R.colorSpace),jt=o.convert(R.type),re=S(R.internalFormat,Ht,jt,R.normalized,R.colorSpace),J=R.isVideoTexture!==!0,Ct=St.__version===void 0||at===!0,mt=dt.dataReady,At=E(R,Tt);he(n.TEXTURE_CUBE_MAP,R);let It;if(Et){J&&Ct&&e.texStorage2D(n.TEXTURE_CUBE_MAP,At,re,Tt.width,Tt.height);for(let bt=0;bt<6;bt++){It=Lt[bt].mipmaps;for(let qt=0;qt<It.length;qt++){let Dt=It[qt];R.format!==Gn?Ht!==null?J?mt&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+bt,qt,0,0,Dt.width,Dt.height,Ht,Dt.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+bt,qt,re,Dt.width,Dt.height,0,Dt.data):Qt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):J?mt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+bt,qt,0,0,Dt.width,Dt.height,Ht,jt,Dt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+bt,qt,re,Dt.width,Dt.height,0,Ht,jt,Dt.data)}}}else{if(It=R.mipmaps,J&&Ct){It.length>0&&At++;let bt=we(Lt[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,At,re,bt.width,bt.height)}for(let bt=0;bt<6;bt++)if(Gt){J?mt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+bt,0,0,0,Lt[bt].width,Lt[bt].height,Ht,jt,Lt[bt].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+bt,0,re,Lt[bt].width,Lt[bt].height,0,Ht,jt,Lt[bt].data);for(let qt=0;qt<It.length;qt++){let Te=It[qt].image[bt].image;J?mt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+bt,qt+1,0,0,Te.width,Te.height,Ht,jt,Te.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+bt,qt+1,re,Te.width,Te.height,0,Ht,jt,Te.data)}}else{J?mt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+bt,0,0,0,Ht,jt,Lt[bt]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+bt,0,re,Ht,jt,Lt[bt]);for(let qt=0;qt<It.length;qt++){let Dt=It[qt];J?mt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+bt,qt+1,0,0,Ht,jt,Dt.image[bt]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+bt,qt+1,re,Ht,jt,Dt.image[bt])}}}_(R)&&T(n.TEXTURE_CUBE_MAP),St.__version=dt.version,R.onUpdate&&R.onUpdate(R)}I.__version=R.version}function Ot(I,R,tt,at,dt,St){let wt=o.convert(tt.format,tt.colorSpace),ut=o.convert(tt.type),_t=S(tt.internalFormat,wt,ut,tt.normalized,tt.colorSpace),Et=i.get(R),Gt=i.get(tt);if(Gt.__renderTarget=R,!Et.__hasExternalTextures){let Lt=Math.max(1,R.width>>St),Tt=Math.max(1,R.height>>St);dt===n.TEXTURE_3D||dt===n.TEXTURE_2D_ARRAY?e.texImage3D(dt,St,_t,Lt,Tt,R.depth,0,wt,ut,null):e.texImage2D(dt,St,_t,Lt,Tt,0,wt,ut,null)}e.bindFramebuffer(n.FRAMEBUFFER,I),Xe(R)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,at,dt,Gt.__webglTexture,0,Fe(R)):(dt===n.TEXTURE_2D||dt>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&dt<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,at,dt,Gt.__webglTexture,St),e.bindFramebuffer(n.FRAMEBUFFER,null)}function ue(I,R,tt){if(n.bindRenderbuffer(n.RENDERBUFFER,I),R.depthBuffer){let at=R.depthTexture,dt=at&&at.isDepthTexture?at.type:null,St=L(R.stencilBuffer,dt),wt=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;Xe(R)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Fe(R),St,R.width,R.height):tt?n.renderbufferStorageMultisample(n.RENDERBUFFER,Fe(R),St,R.width,R.height):n.renderbufferStorage(n.RENDERBUFFER,St,R.width,R.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,wt,n.RENDERBUFFER,I)}else{let at=R.textures;for(let dt=0;dt<at.length;dt++){let St=at[dt],wt=o.convert(St.format,St.colorSpace),ut=o.convert(St.type),_t=S(St.internalFormat,wt,ut,St.normalized,St.colorSpace);Xe(R)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Fe(R),_t,R.width,R.height):tt?n.renderbufferStorageMultisample(n.RENDERBUFFER,Fe(R),_t,R.width,R.height):n.renderbufferStorage(n.RENDERBUFFER,_t,R.width,R.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function qe(I,R,tt){let at=R.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(n.FRAMEBUFFER,I),!(R.depthTexture&&R.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let dt=i.get(R.depthTexture);if(dt.__renderTarget=R,(!dt.__webglTexture||R.depthTexture.image.width!==R.width||R.depthTexture.image.height!==R.height)&&(R.depthTexture.image.width=R.width,R.depthTexture.image.height=R.height,R.depthTexture.needsUpdate=!0),at){if(dt.__webglInit===void 0&&(dt.__webglInit=!0,R.depthTexture.addEventListener("dispose",A)),dt.__webglTexture===void 0){dt.__webglTexture=n.createTexture(),e.bindTexture(n.TEXTURE_CUBE_MAP,dt.__webglTexture),he(n.TEXTURE_CUBE_MAP,R.depthTexture);let Et=o.convert(R.depthTexture.format),Gt=o.convert(R.depthTexture.type),Lt;R.depthTexture.format===ui?Lt=n.DEPTH_COMPONENT24:R.depthTexture.format===es&&(Lt=n.DEPTH24_STENCIL8);for(let Tt=0;Tt<6;Tt++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,0,Lt,R.width,R.height,0,Et,Gt,null)}}else it(R.depthTexture,0);let St=dt.__webglTexture,wt=Fe(R),ut=at?n.TEXTURE_CUBE_MAP_POSITIVE_X+tt:n.TEXTURE_2D,_t=R.depthTexture.format===es?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(R.depthTexture.format===ui)Xe(R)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,_t,ut,St,0,wt):n.framebufferTexture2D(n.FRAMEBUFFER,_t,ut,St,0);else if(R.depthTexture.format===es)Xe(R)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,_t,ut,St,0,wt):n.framebufferTexture2D(n.FRAMEBUFFER,_t,ut,St,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function ce(I){let R=i.get(I),tt=I.isWebGLCubeRenderTarget===!0;if(R.__boundDepthTexture!==I.depthTexture){let at=I.depthTexture;if(R.__depthDisposeCallback&&R.__depthDisposeCallback(),at){let dt=()=>{delete R.__boundDepthTexture,delete R.__depthDisposeCallback,at.removeEventListener("dispose",dt)};at.addEventListener("dispose",dt),R.__depthDisposeCallback=dt}R.__boundDepthTexture=at}if(I.depthTexture&&!R.__autoAllocateDepthBuffer)if(tt)for(let at=0;at<6;at++)qe(R.__webglFramebuffer[at],I,at);else{let at=I.texture.mipmaps;at&&at.length>0?qe(R.__webglFramebuffer[0],I,0):qe(R.__webglFramebuffer,I,0)}else if(tt){R.__webglDepthbuffer=[];for(let at=0;at<6;at++)if(e.bindFramebuffer(n.FRAMEBUFFER,R.__webglFramebuffer[at]),R.__webglDepthbuffer[at]===void 0)R.__webglDepthbuffer[at]=n.createRenderbuffer(),ue(R.__webglDepthbuffer[at],I,!1);else{let dt=I.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,St=R.__webglDepthbuffer[at];n.bindRenderbuffer(n.RENDERBUFFER,St),n.framebufferRenderbuffer(n.FRAMEBUFFER,dt,n.RENDERBUFFER,St)}}else{let at=I.texture.mipmaps;if(at&&at.length>0?e.bindFramebuffer(n.FRAMEBUFFER,R.__webglFramebuffer[0]):e.bindFramebuffer(n.FRAMEBUFFER,R.__webglFramebuffer),R.__webglDepthbuffer===void 0)R.__webglDepthbuffer=n.createRenderbuffer(),ue(R.__webglDepthbuffer,I,!1);else{let dt=I.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,St=R.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,St),n.framebufferRenderbuffer(n.FRAMEBUFFER,dt,n.RENDERBUFFER,St)}}e.bindFramebuffer(n.FRAMEBUFFER,null)}function _e(I,R,tt){let at=i.get(I);R!==void 0&&Ot(at.__webglFramebuffer,I,I.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),tt!==void 0&&ce(I)}function Ie(I){let R=I.texture,tt=i.get(I),at=i.get(R);I.addEventListener("dispose",w);let dt=I.textures,St=I.isWebGLCubeRenderTarget===!0,wt=dt.length>1;if(wt||(at.__webglTexture===void 0&&(at.__webglTexture=n.createTexture()),at.__version=R.version,c.memory.textures++),St){tt.__webglFramebuffer=[];for(let ut=0;ut<6;ut++)if(R.mipmaps&&R.mipmaps.length>0){tt.__webglFramebuffer[ut]=[];for(let _t=0;_t<R.mipmaps.length;_t++)tt.__webglFramebuffer[ut][_t]=n.createFramebuffer()}else tt.__webglFramebuffer[ut]=n.createFramebuffer()}else{if(R.mipmaps&&R.mipmaps.length>0){tt.__webglFramebuffer=[];for(let ut=0;ut<R.mipmaps.length;ut++)tt.__webglFramebuffer[ut]=n.createFramebuffer()}else tt.__webglFramebuffer=n.createFramebuffer();if(wt)for(let ut=0,_t=dt.length;ut<_t;ut++){let Et=i.get(dt[ut]);Et.__webglTexture===void 0&&(Et.__webglTexture=n.createTexture(),c.memory.textures++)}if(I.samples>0&&Xe(I)===!1){tt.__webglMultisampledFramebuffer=n.createFramebuffer(),tt.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,tt.__webglMultisampledFramebuffer);for(let ut=0;ut<dt.length;ut++){let _t=dt[ut];tt.__webglColorRenderbuffer[ut]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,tt.__webglColorRenderbuffer[ut]);let Et=o.convert(_t.format,_t.colorSpace),Gt=o.convert(_t.type),Lt=S(_t.internalFormat,Et,Gt,_t.normalized,_t.colorSpace,I.isXRRenderTarget===!0),Tt=Fe(I);n.renderbufferStorageMultisample(n.RENDERBUFFER,Tt,Lt,I.width,I.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ut,n.RENDERBUFFER,tt.__webglColorRenderbuffer[ut])}n.bindRenderbuffer(n.RENDERBUFFER,null),I.depthBuffer&&(tt.__webglDepthRenderbuffer=n.createRenderbuffer(),ue(tt.__webglDepthRenderbuffer,I,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(St){e.bindTexture(n.TEXTURE_CUBE_MAP,at.__webglTexture),he(n.TEXTURE_CUBE_MAP,R);for(let ut=0;ut<6;ut++)if(R.mipmaps&&R.mipmaps.length>0)for(let _t=0;_t<R.mipmaps.length;_t++)Ot(tt.__webglFramebuffer[ut][_t],I,R,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ut,_t);else Ot(tt.__webglFramebuffer[ut],I,R,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ut,0);_(R)&&T(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(wt){for(let ut=0,_t=dt.length;ut<_t;ut++){let Et=dt[ut],Gt=i.get(Et),Lt=n.TEXTURE_2D;(I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(Lt=I.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(Lt,Gt.__webglTexture),he(Lt,Et),Ot(tt.__webglFramebuffer,I,Et,n.COLOR_ATTACHMENT0+ut,Lt,0),_(Et)&&T(Lt)}e.unbindTexture()}else{let ut=n.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(ut=I.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(ut,at.__webglTexture),he(ut,R),R.mipmaps&&R.mipmaps.length>0)for(let _t=0;_t<R.mipmaps.length;_t++)Ot(tt.__webglFramebuffer[_t],I,R,n.COLOR_ATTACHMENT0,ut,_t);else Ot(tt.__webglFramebuffer,I,R,n.COLOR_ATTACHMENT0,ut,0);_(R)&&T(ut),e.unbindTexture()}I.depthBuffer&&ce(I)}function ge(I){let R=I.textures;for(let tt=0,at=R.length;tt<at;tt++){let dt=R[tt];if(_(dt)){let St=C(I),wt=i.get(dt).__webglTexture;e.bindTexture(St,wt),T(St),e.unbindTexture()}}}let Re=[],Je=[];function ln(I){if(I.samples>0){if(Xe(I)===!1){let R=I.textures,tt=I.width,at=I.height,dt=n.COLOR_BUFFER_BIT,St=I.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,wt=i.get(I),ut=R.length>1;if(ut)for(let Et=0;Et<R.length;Et++)e.bindFramebuffer(n.FRAMEBUFFER,wt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Et,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,wt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Et,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,wt.__webglMultisampledFramebuffer);let _t=I.texture.mipmaps;_t&&_t.length>0?e.bindFramebuffer(n.DRAW_FRAMEBUFFER,wt.__webglFramebuffer[0]):e.bindFramebuffer(n.DRAW_FRAMEBUFFER,wt.__webglFramebuffer);for(let Et=0;Et<R.length;Et++){if(I.resolveDepthBuffer&&(I.depthBuffer&&(dt|=n.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&(dt|=n.STENCIL_BUFFER_BIT)),ut){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,wt.__webglColorRenderbuffer[Et]);let Gt=i.get(R[Et]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Gt,0)}n.blitFramebuffer(0,0,tt,at,0,0,tt,at,dt,n.NEAREST),u===!0&&(Re.length=0,Je.length=0,Re.push(n.COLOR_ATTACHMENT0+Et),I.depthBuffer&&I.storeMultisampledDepthBuffer===!1&&(Re.push(St),Je.push(St),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,Je)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Re))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ut)for(let Et=0;Et<R.length;Et++){e.bindFramebuffer(n.FRAMEBUFFER,wt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Et,n.RENDERBUFFER,wt.__webglColorRenderbuffer[Et]);let Gt=i.get(R[Et]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,wt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Et,n.TEXTURE_2D,Gt,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,wt.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.storeMultisampledDepthBuffer===!1&&u){let R=I.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[R])}}}function Fe(I){return Math.min(s.maxSamples,I.samples)}function Xe(I){let R=i.get(I);return I.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&R.__useRenderToTexture!==!1}function j(I){let R=c.render.frame;p.get(I)!==R&&(p.set(I,R),I.update())}function je(I,R){let tt=I.colorSpace,at=I.format,dt=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||tt!==ro&&tt!==Ci&&(Me.getTransfer(tt)===Le?(at!==Gn||dt!==Rn)&&Qt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):ne("WebGLTextures: Unsupported texture color space:",tt)),R}function we(I){return typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement?(f.width=I.naturalWidth||I.width,f.height=I.naturalHeight||I.height):typeof VideoFrame<"u"&&I instanceof VideoFrame?(f.width=I.displayWidth,f.height=I.displayHeight):(f.width=I.width,f.height=I.height),f}this.allocateTextureUnit=G,this.resetTextureUnits=k,this.getTextureUnits=z,this.setTextureUnits=H,this.setTexture2D=it,this.setTexture2DArray=K,this.setTexture3D=st,this.setTextureCube=ht,this.rebindTextures=_e,this.setupRenderTarget=Ie,this.updateRenderTargetMipmap=ge,this.updateMultisampleRenderTarget=ln,this.setupDepthRenderbuffer=ce,this.setupFrameBufferTexture=Ot,this.useMultisampledRTT=Xe,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function zv(n,t){function e(i,s=Ci){let o,c=Me.getTransfer(s);if(i===Rn)return n.UNSIGNED_BYTE;if(i===Al)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Pl)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Xh)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Wh)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===Hh)return n.BYTE;if(i===Gh)return n.SHORT;if(i===pr)return n.UNSIGNED_SHORT;if(i===Tl)return n.INT;if(i===Qn)return n.UNSIGNED_INT;if(i===ti)return n.FLOAT;if(i===ei)return n.HALF_FLOAT;if(i===Yh)return n.ALPHA;if(i===$h)return n.RGB;if(i===Gn)return n.RGBA;if(i===ui)return n.DEPTH_COMPONENT;if(i===es)return n.DEPTH_STENCIL;if(i===qh)return n.RED;if(i===Cl)return n.RED_INTEGER;if(i===ns)return n.RG;if(i===Il)return n.RG_INTEGER;if(i===Rl)return n.RGBA_INTEGER;if(i===Fo||i===Uo||i===Bo||i===ko)if(c===Le)if(o=t.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(i===Fo)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Uo)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Bo)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===ko)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=t.get("WEBGL_compressed_texture_s3tc"),o!==null){if(i===Fo)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Uo)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Bo)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===ko)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Ll||i===Nl||i===Dl||i===Ol)if(o=t.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(i===Ll)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Nl)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Dl)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Ol)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Fl||i===Ul||i===Bl||i===kl||i===zl||i===zo||i===Vl)if(o=t.get("WEBGL_compressed_texture_etc"),o!==null){if(i===Fl||i===Ul)return c===Le?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(i===Bl)return c===Le?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC;if(i===kl)return o.COMPRESSED_R11_EAC;if(i===zl)return o.COMPRESSED_SIGNED_R11_EAC;if(i===zo)return o.COMPRESSED_RG11_EAC;if(i===Vl)return o.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Hl||i===Gl||i===Xl||i===Wl||i===Yl||i===$l||i===ql||i===Zl||i===Jl||i===jl||i===Kl||i===Ql||i===tc||i===ec)if(o=t.get("WEBGL_compressed_texture_astc"),o!==null){if(i===Hl)return c===Le?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Gl)return c===Le?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Xl)return c===Le?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Wl)return c===Le?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Yl)return c===Le?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===$l)return c===Le?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===ql)return c===Le?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Zl)return c===Le?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Jl)return c===Le?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===jl)return c===Le?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Kl)return c===Le?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Ql)return c===Le?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===tc)return c===Le?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===ec)return c===Le?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===nc||i===ic||i===sc)if(o=t.get("EXT_texture_compression_bptc"),o!==null){if(i===nc)return c===Le?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===ic)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===sc)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===rc||i===oc||i===Vo||i===ac)if(o=t.get("EXT_texture_compression_rgtc"),o!==null){if(i===rc)return o.COMPRESSED_RED_RGTC1_EXT;if(i===oc)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Vo)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===ac)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===mr?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}function Xv(n,t){function e(y,_){y.matrixAutoUpdate===!0&&y.updateMatrix(),_.value.copy(y.matrix)}function i(y,_){_.color.getRGB(y.fogColor.value,Qh(n)),_.isFog?(y.fogNear.value=_.near,y.fogFar.value=_.far):_.isFogExp2&&(y.fogDensity.value=_.density)}function s(y,_,T,C,S){_.isNodeMaterial?_.uniformsNeedUpdate=!1:_.isMeshBasicMaterial?o(y,_):_.isMeshLambertMaterial?(o(y,_),_.envMap&&(y.envMapIntensity.value=_.envMapIntensity)):_.isMeshToonMaterial?(o(y,_),g(y,_)):_.isMeshPhongMaterial?(o(y,_),p(y,_),_.envMap&&(y.envMapIntensity.value=_.envMapIntensity)):_.isMeshStandardMaterial?(o(y,_),m(y,_),_.isMeshPhysicalMaterial&&x(y,_,S)):_.isMeshMatcapMaterial?(o(y,_),v(y,_)):_.isMeshDepthMaterial?o(y,_):_.isMeshDistanceMaterial?(o(y,_),M(y,_)):_.isMeshNormalMaterial?o(y,_):_.isLineBasicMaterial?(c(y,_),_.isLineDashedMaterial&&a(y,_)):_.isPointsMaterial?u(y,_,T,C):_.isSpriteMaterial?f(y,_):_.isShadowMaterial?(y.color.value.copy(_.color),y.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function o(y,_){y.opacity.value=_.opacity,_.color&&y.diffuse.value.copy(_.color),_.emissive&&y.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(y.map.value=_.map,e(_.map,y.mapTransform)),_.alphaMap&&(y.alphaMap.value=_.alphaMap,e(_.alphaMap,y.alphaMapTransform)),_.bumpMap&&(y.bumpMap.value=_.bumpMap,e(_.bumpMap,y.bumpMapTransform),y.bumpScale.value=_.bumpScale,_.side===Tn&&(y.bumpScale.value*=-1)),_.normalMap&&(y.normalMap.value=_.normalMap,e(_.normalMap,y.normalMapTransform),y.normalScale.value.copy(_.normalScale),_.side===Tn&&y.normalScale.value.negate()),_.displacementMap&&(y.displacementMap.value=_.displacementMap,e(_.displacementMap,y.displacementMapTransform),y.displacementScale.value=_.displacementScale,y.displacementBias.value=_.displacementBias),_.emissiveMap&&(y.emissiveMap.value=_.emissiveMap,e(_.emissiveMap,y.emissiveMapTransform)),_.specularMap&&(y.specularMap.value=_.specularMap,e(_.specularMap,y.specularMapTransform)),_.alphaTest>0&&(y.alphaTest.value=_.alphaTest);let T=t.get(_),C=T.envMap,S=T.envMapRotation;C&&(y.envMap.value=C,y.envMapRotation.value.setFromMatrix4(Gv.makeRotationFromEuler(S)).transpose(),C.isCubeTexture&&C.isRenderTargetTexture===!1&&y.envMapRotation.value.premultiply(Ap),y.reflectivity.value=_.reflectivity,y.ior.value=_.ior,y.refractionRatio.value=_.refractionRatio),_.lightMap&&(y.lightMap.value=_.lightMap,y.lightMapIntensity.value=_.lightMapIntensity,e(_.lightMap,y.lightMapTransform)),_.aoMap&&(y.aoMap.value=_.aoMap,y.aoMapIntensity.value=_.aoMapIntensity,e(_.aoMap,y.aoMapTransform))}function c(y,_){y.diffuse.value.copy(_.color),y.opacity.value=_.opacity,_.map&&(y.map.value=_.map,e(_.map,y.mapTransform))}function a(y,_){y.dashSize.value=_.dashSize,y.totalSize.value=_.dashSize+_.gapSize,y.scale.value=_.scale}function u(y,_,T,C){y.diffuse.value.copy(_.color),y.opacity.value=_.opacity,y.size.value=_.size*T,y.scale.value=C*.5,_.map&&(y.map.value=_.map,e(_.map,y.uvTransform)),_.alphaMap&&(y.alphaMap.value=_.alphaMap,e(_.alphaMap,y.alphaMapTransform)),_.alphaTest>0&&(y.alphaTest.value=_.alphaTest)}function f(y,_){y.diffuse.value.copy(_.color),y.opacity.value=_.opacity,y.rotation.value=_.rotation,_.map&&(y.map.value=_.map,e(_.map,y.mapTransform)),_.alphaMap&&(y.alphaMap.value=_.alphaMap,e(_.alphaMap,y.alphaMapTransform)),_.alphaTest>0&&(y.alphaTest.value=_.alphaTest)}function p(y,_){y.specular.value.copy(_.specular),y.shininess.value=Math.max(_.shininess,1e-4)}function g(y,_){_.gradientMap&&(y.gradientMap.value=_.gradientMap)}function m(y,_){y.metalness.value=_.metalness,_.metalnessMap&&(y.metalnessMap.value=_.metalnessMap,e(_.metalnessMap,y.metalnessMapTransform)),y.roughness.value=_.roughness,_.roughnessMap&&(y.roughnessMap.value=_.roughnessMap,e(_.roughnessMap,y.roughnessMapTransform)),_.envMap&&(y.envMapIntensity.value=_.envMapIntensity)}function x(y,_,T){y.ior.value=_.ior,_.sheen>0&&(y.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),y.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(y.sheenColorMap.value=_.sheenColorMap,e(_.sheenColorMap,y.sheenColorMapTransform)),_.sheenRoughnessMap&&(y.sheenRoughnessMap.value=_.sheenRoughnessMap,e(_.sheenRoughnessMap,y.sheenRoughnessMapTransform))),_.clearcoat>0&&(y.clearcoat.value=_.clearcoat,y.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(y.clearcoatMap.value=_.clearcoatMap,e(_.clearcoatMap,y.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,e(_.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(y.clearcoatNormalMap.value=_.clearcoatNormalMap,e(_.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===Tn&&y.clearcoatNormalScale.value.negate())),_.dispersion>0&&(y.dispersion.value=_.dispersion),_.retroreflectivity>0&&(y.retroreflectivity.value=_.retroreflectivity),_.iridescence>0&&(y.iridescence.value=_.iridescence,y.iridescenceIOR.value=_.iridescenceIOR,y.iridescenceThicknessMinimum.value=_.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=_.iridescenceThicknessRange[1],_.iridescenceMap&&(y.iridescenceMap.value=_.iridescenceMap,e(_.iridescenceMap,y.iridescenceMapTransform)),_.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=_.iridescenceThicknessMap,e(_.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),_.transmission>0&&(y.transmission.value=_.transmission,y.transmissionSamplerMap.value=T.texture,y.transmissionSamplerSize.value.set(T.width,T.height),_.transmissionMap&&(y.transmissionMap.value=_.transmissionMap,e(_.transmissionMap,y.transmissionMapTransform)),y.thickness.value=_.thickness,_.thicknessMap&&(y.thicknessMap.value=_.thicknessMap,e(_.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=_.attenuationDistance,y.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(y.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(y.anisotropyMap.value=_.anisotropyMap,e(_.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=_.specularIntensity,y.specularColor.value.copy(_.specularColor),_.specularColorMap&&(y.specularColorMap.value=_.specularColorMap,e(_.specularColorMap,y.specularColorMapTransform)),_.specularIntensityMap&&(y.specularIntensityMap.value=_.specularIntensityMap,e(_.specularIntensityMap,y.specularIntensityMapTransform))}function v(y,_){_.matcap&&(y.matcap.value=_.matcap)}function M(y,_){let T=t.get(_).light;y.referencePosition.value.setFromMatrixPosition(T.matrixWorld),y.nearDistance.value=T.shadow.camera.near,y.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function Wv(n,t,e,i){let s={},o={},c=[],a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function u(S,L){let E=L.program;i.uniformBlockBinding(S,E)}function f(S,L){let E=s[S.id];E===void 0&&(y(S),E=p(S),s[S.id]=E,S.addEventListener("dispose",T));let A=L.program;i.updateUBOMapping(S,A);let w=t.render.frame;o[S.id]!==w&&(m(S),o[S.id]=w)}function p(S){let L=g();S.__bindingPointIndex=L;let E=n.createBuffer(),A=S.__size,w=S.usage;return n.bindBuffer(n.UNIFORM_BUFFER,E),n.bufferData(n.UNIFORM_BUFFER,A,w),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,L,E),E}function g(){for(let S=0;S<a;S++)if(c.indexOf(S)===-1)return c.push(S),S;return ne("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function m(S){let L=s[S.id],E=S.uniforms,A=S.__cache;n.bindBuffer(n.UNIFORM_BUFFER,L);for(let w=0,D=E.length;w<D;w++){let N=E[w];if(Array.isArray(N))for(let U=0,V=N.length;U<V;U++)x(N[U],w,U,A);else x(N,w,0,A)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function x(S,L,E,A){if(M(S,L,E,A)===!0){let w=S.__offset,D=S.value;if(Array.isArray(D)){let N=0;for(let U=0;U<D.length;U++){let V=D[U],k=_(V);v(V,S.__data,N),typeof V!="number"&&typeof V!="boolean"&&!V.isMatrix3&&!ArrayBuffer.isView(V)&&(N+=k.storage/Float32Array.BYTES_PER_ELEMENT)}}else v(D,S.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,w,S.__data)}}function v(S,L,E){typeof S=="number"||typeof S=="boolean"?L[0]=S:S.isMatrix3?(L[0]=S.elements[0],L[1]=S.elements[1],L[2]=S.elements[2],L[3]=0,L[4]=S.elements[3],L[5]=S.elements[4],L[6]=S.elements[5],L[7]=0,L[8]=S.elements[6],L[9]=S.elements[7],L[10]=S.elements[8],L[11]=0):ArrayBuffer.isView(S)?L.set(new S.constructor(S.buffer,S.byteOffset,L.length)):S.toArray(L,E)}function M(S,L,E,A){let w=S.value,D=L+"_"+E;if(A[D]===void 0)return typeof w=="number"||typeof w=="boolean"?A[D]=w:ArrayBuffer.isView(w)?A[D]=w.slice():A[D]=w.clone(),!0;{let N=A[D];if(typeof w=="number"||typeof w=="boolean"){if(N!==w)return A[D]=w,!0}else{if(ArrayBuffer.isView(w))return!0;if(N.equals(w)===!1)return N.copy(w),!0}}return!1}function y(S){let L=S.uniforms,E=0,A=16;for(let D=0,N=L.length;D<N;D++){let U=Array.isArray(L[D])?L[D]:[L[D]];for(let V=0,k=U.length;V<k;V++){let z=U[V],H=Array.isArray(z.value)?z.value:[z.value];for(let G=0,$=H.length;G<$;G++){let it=H[G],K=_(it),st=E%A,ht=st%K.boundary,Rt=st+ht;E+=ht,Rt!==0&&A-Rt<K.storage&&(E+=A-Rt),z.__data=new Float32Array(K.storage/Float32Array.BYTES_PER_ELEMENT),z.__offset=E,E+=K.storage}}}let w=E%A;return w>0&&(E+=A-w),S.__size=E,S.__cache={},this}function _(S){let L={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(L.boundary=4,L.storage=4):S.isVector2?(L.boundary=8,L.storage=8):S.isVector3||S.isColor?(L.boundary=16,L.storage=12):S.isVector4?(L.boundary=16,L.storage=16):S.isMatrix3?(L.boundary=48,L.storage=48):S.isMatrix4?(L.boundary=64,L.storage=64):S.isTexture?Qt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(S)?(L.boundary=16,L.storage=S.byteLength):Qt("WebGLRenderer: Unsupported uniform value type.",S),L}function T(S){let L=S.target;L.removeEventListener("dispose",T);let E=c.indexOf(L.__bindingPointIndex);c.splice(E,1),n.deleteBuffer(s[L.id]),delete s[L.id],delete o[L.id]}function C(){for(let S in s)n.deleteBuffer(s[S]);c=[],s={},o={}}return{bind:u,update:f,dispose:C}}function $v(){return mi===null&&(mi=new il(Yv,16,16,ns,ei),mi.name="DFG_LUT",mi.minFilter=dn,mi.magFilter=dn,mi.wrapS=hi,mi.wrapT=hi,mi.generateMipmaps=!1,mi.needsUpdate=!0),mi}var og,ag,lg,cg,hg,ug,fg,dg,pg,mg,gg,xg,yg,_g,vg,bg,Mg,Sg,wg,Eg,Tg,Ag,Pg,Cg,Ig,Rg,Lg,Ng,Dg,Og,Fg,Ug,Bg,kg,zg,Vg,Hg,Gg,Xg,Wg,Yg,$g,qg,Zg,Jg,jg,Kg,Qg,tx,ex,nx,ix,sx,rx,ox,ax,lx,cx,hx,ux,fx,dx,px,mx,gx,xx,yx,_x,vx,bx,Mx,Sx,wx,Ex,Tx,Ax,Px,Cx,Ix,Rx,Lx,Nx,Dx,Ox,Fx,Ux,Bx,kx,zx,Vx,Hx,Gx,Xx,Wx,Yx,$x,qx,Zx,Jx,jx,Kx,Qx,ty,ey,ny,iy,sy,ry,oy,ay,ly,cy,hy,uy,fy,dy,py,my,gy,xy,yy,_y,vy,by,My,Sy,wy,Ey,Ty,Ay,Py,Cy,Iy,Ry,Ly,Ny,Dy,Oy,Fy,Uy,By,ky,pe,Bt,gi,uc,zy,Mp,xr,Yy,$y,qy,Ho,tp,su,ru,ou,au,Zy,Ss,dc,pc,o_,Sp,hu,wp,Ep,Tp,sp,rp,op,ap,lp,uu,fu,du,lu,yr,Z_,J_,up,tv,fc,ov,av,cv,uv,dv,mv,xv,bv,mu,gu,Cv,Nv,Dv,Ov,Fv,vp,Go,cu,Vv,Hv,xu,yu,Gv,Ap,Yv,mi,mc,Wo=fe(()=>{iu();iu();og=`#ifdef USE_ALPHAHASH
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
}`,pe={alphahash_fragment:og,alphahash_pars_fragment:ag,alphamap_fragment:lg,alphamap_pars_fragment:cg,alphatest_fragment:hg,alphatest_pars_fragment:ug,aomap_fragment:fg,aomap_pars_fragment:dg,batching_pars_vertex:pg,batching_vertex:mg,begin_vertex:gg,beginnormal_vertex:xg,bsdfs:yg,iridescence_fragment:_g,bumpmap_pars_fragment:vg,clipping_planes_fragment:bg,clipping_planes_pars_fragment:Mg,clipping_planes_pars_vertex:Sg,clipping_planes_vertex:wg,color_fragment:Eg,color_pars_fragment:Tg,color_pars_vertex:Ag,color_vertex:Pg,common:Cg,cube_uv_reflection_fragment:Ig,defaultnormal_vertex:Rg,displacementmap_pars_vertex:Lg,displacementmap_vertex:Ng,emissivemap_fragment:Dg,emissivemap_pars_fragment:Og,colorspace_fragment:Fg,colorspace_pars_fragment:Ug,envmap_fragment:Bg,envmap_common_pars_fragment:kg,envmap_pars_fragment:zg,envmap_pars_vertex:Vg,envmap_physical_pars_fragment:Kg,envmap_vertex:Hg,fog_vertex:Gg,fog_pars_vertex:Xg,fog_fragment:Wg,fog_pars_fragment:Yg,gradientmap_pars_fragment:$g,lightmap_pars_fragment:qg,lights_lambert_fragment:Zg,lights_lambert_pars_fragment:Jg,lights_pars_begin:jg,lights_toon_fragment:Qg,lights_toon_pars_fragment:tx,lights_phong_fragment:ex,lights_phong_pars_fragment:nx,lights_physical_fragment:ix,lights_physical_pars_fragment:sx,lights_fragment_begin:rx,lights_fragment_maps:ox,lights_fragment_end:ax,lightprobes_pars_fragment:lx,logdepthbuf_fragment:cx,logdepthbuf_pars_fragment:hx,logdepthbuf_pars_vertex:ux,logdepthbuf_vertex:fx,map_fragment:dx,map_pars_fragment:px,map_particle_fragment:mx,map_particle_pars_fragment:gx,metalnessmap_fragment:xx,metalnessmap_pars_fragment:yx,morphinstance_vertex:_x,morphcolor_vertex:vx,morphnormal_vertex:bx,morphtarget_pars_vertex:Mx,morphtarget_vertex:Sx,normal_fragment_begin:wx,normal_fragment_maps:Ex,normal_pars_fragment:Tx,normal_pars_vertex:Ax,normal_vertex:Px,normalmap_pars_fragment:Cx,clearcoat_normal_fragment_begin:Ix,clearcoat_normal_fragment_maps:Rx,clearcoat_pars_fragment:Lx,iridescence_pars_fragment:Nx,opaque_fragment:Dx,packing:Ox,premultiplied_alpha_fragment:Fx,project_vertex:Ux,dithering_fragment:Bx,dithering_pars_fragment:kx,roughnessmap_fragment:zx,roughnessmap_pars_fragment:Vx,shadowmap_pars_fragment:Hx,shadowmap_pars_vertex:Gx,shadowmap_vertex:Xx,shadowmask_pars_fragment:Wx,skinbase_vertex:Yx,skinning_pars_vertex:$x,skinning_vertex:qx,skinnormal_vertex:Zx,specularmap_fragment:Jx,specularmap_pars_fragment:jx,tonemapping_fragment:Kx,tonemapping_pars_fragment:Qx,transmission_fragment:ty,transmission_pars_fragment:ey,uv_pars_fragment:ny,uv_pars_vertex:iy,uv_vertex:sy,worldpos_vertex:ry,background_vert:oy,background_frag:ay,backgroundCube_vert:ly,backgroundCube_frag:cy,cube_vert:hy,cube_frag:uy,depth_vert:fy,depth_frag:dy,distance_vert:py,distance_frag:my,equirect_vert:gy,equirect_frag:xy,linedashed_vert:yy,linedashed_frag:_y,meshbasic_vert:vy,meshbasic_frag:by,meshlambert_vert:My,meshlambert_frag:Sy,meshmatcap_vert:wy,meshmatcap_frag:Ey,meshnormal_vert:Ty,meshnormal_frag:Ay,meshphong_vert:Py,meshphong_frag:Cy,meshphysical_vert:Iy,meshphysical_frag:Ry,meshtoon_vert:Ly,meshtoon_frag:Ny,points_vert:Dy,points_frag:Oy,shadow_vert:Fy,shadow_frag:Uy,sprite_vert:By,sprite_frag:ky},Bt={common:{diffuse:{value:new se(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ae},alphaMap:{value:null},alphaMapTransform:{value:new ae},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ae}},envmap:{envMap:{value:null},envMapRotation:{value:new ae},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ae}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ae}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ae},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ae},normalScale:{value:new Zt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ae},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ae}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ae}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ae}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new se(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new q},probesMax:{value:new q},probesResolution:{value:new q}},points:{diffuse:{value:new se(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ae},alphaTest:{value:0},uvTransform:{value:new ae}},sprite:{diffuse:{value:new se(16777215)},opacity:{value:1},center:{value:new Zt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ae},alphaMap:{value:null},alphaMapTransform:{value:new ae},alphaTest:{value:0}}},gi={basic:{uniforms:vn([Bt.common,Bt.specularmap,Bt.envmap,Bt.aomap,Bt.lightmap,Bt.fog]),vertexShader:pe.meshbasic_vert,fragmentShader:pe.meshbasic_frag},lambert:{uniforms:vn([Bt.common,Bt.specularmap,Bt.envmap,Bt.aomap,Bt.lightmap,Bt.emissivemap,Bt.bumpmap,Bt.normalmap,Bt.displacementmap,Bt.fog,Bt.lights,{emissive:{value:new se(0)},envMapIntensity:{value:1}}]),vertexShader:pe.meshlambert_vert,fragmentShader:pe.meshlambert_frag},phong:{uniforms:vn([Bt.common,Bt.specularmap,Bt.envmap,Bt.aomap,Bt.lightmap,Bt.emissivemap,Bt.bumpmap,Bt.normalmap,Bt.displacementmap,Bt.fog,Bt.lights,{emissive:{value:new se(0)},specular:{value:new se(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:pe.meshphong_vert,fragmentShader:pe.meshphong_frag},standard:{uniforms:vn([Bt.common,Bt.envmap,Bt.aomap,Bt.lightmap,Bt.emissivemap,Bt.bumpmap,Bt.normalmap,Bt.displacementmap,Bt.roughnessmap,Bt.metalnessmap,Bt.fog,Bt.lights,{emissive:{value:new se(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:pe.meshphysical_vert,fragmentShader:pe.meshphysical_frag},toon:{uniforms:vn([Bt.common,Bt.aomap,Bt.lightmap,Bt.emissivemap,Bt.bumpmap,Bt.normalmap,Bt.displacementmap,Bt.gradientmap,Bt.fog,Bt.lights,{emissive:{value:new se(0)}}]),vertexShader:pe.meshtoon_vert,fragmentShader:pe.meshtoon_frag},matcap:{uniforms:vn([Bt.common,Bt.bumpmap,Bt.normalmap,Bt.displacementmap,Bt.fog,{matcap:{value:null}}]),vertexShader:pe.meshmatcap_vert,fragmentShader:pe.meshmatcap_frag},points:{uniforms:vn([Bt.points,Bt.fog]),vertexShader:pe.points_vert,fragmentShader:pe.points_frag},dashed:{uniforms:vn([Bt.common,Bt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:pe.linedashed_vert,fragmentShader:pe.linedashed_frag},depth:{uniforms:vn([Bt.common,Bt.displacementmap]),vertexShader:pe.depth_vert,fragmentShader:pe.depth_frag},normal:{uniforms:vn([Bt.common,Bt.bumpmap,Bt.normalmap,Bt.displacementmap,{opacity:{value:1}}]),vertexShader:pe.meshnormal_vert,fragmentShader:pe.meshnormal_frag},sprite:{uniforms:vn([Bt.sprite,Bt.fog]),vertexShader:pe.sprite_vert,fragmentShader:pe.sprite_frag},background:{uniforms:{uvTransform:{value:new ae},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:pe.background_vert,fragmentShader:pe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ae}},vertexShader:pe.backgroundCube_vert,fragmentShader:pe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:pe.cube_vert,fragmentShader:pe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:pe.equirect_vert,fragmentShader:pe.equirect_frag},distance:{uniforms:vn([Bt.common,Bt.displacementmap,{referencePosition:{value:new q},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:pe.distance_vert,fragmentShader:pe.distance_frag},shadow:{uniforms:vn([Bt.lights,Bt.fog,{color:{value:new se(0)},opacity:{value:1}}]),vertexShader:pe.shadow_vert,fragmentShader:pe.shadow_frag}};gi.physical={uniforms:vn([gi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ae},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ae},clearcoatNormalScale:{value:new Zt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ae},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ae},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ae},sheen:{value:0},sheenColor:{value:new se(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ae},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ae},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ae},transmissionSamplerSize:{value:new Zt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ae},attenuationDistance:{value:0},attenuationColor:{value:new se(0)},specularColor:{value:new se(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ae},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ae},anisotropyVector:{value:new Zt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ae}}]),vertexShader:pe.meshphysical_vert,fragmentShader:pe.meshphysical_frag};uc={r:0,b:0,g:0},zy=new De,Mp=new ae;Mp.set(-1,0,0,0,1,0,0,0,1);xr=4,Yy=6,$y=20,qy=256,Ho=new cr,tp=new se,su=null,ru=0,ou=0,au=!1,Zy=new q,Ss=new q,dc=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,i=.1,s=100,o={}){let{size:c=256,position:a=Zy}=o;su=this._renderer.getRenderTarget(),ru=this._renderer.getActiveCubeFace(),ou=this._renderer.getActiveMipmapLevel(),au=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(c);let u=this._allocateTargets();return u.depthBuffer=!0,this._sceneToCubeUV(t,i,s,u,a),e>0&&this._blur(u,0,0,e),this._applyPMREM(u),this._cleanup(u),u}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ip(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=np(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(su,ru,ou),this._renderer.xr.enabled=au,t.scissorTest=!1,gr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Qi||t.mapping===vs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),su=this._renderer.getRenderTarget(),ru=this._renderer.getActiveCubeFace(),ou=this._renderer.getActiveMipmapLevel(),au=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:dn,minFilter:dn,generateMipmaps:!1,type:ei,format:Gn,colorSpace:ro,depthBuffer:!1},s=ep(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ep(t,e,i);let{_lodMax:o}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=Jy(o)),this._blurMaterial=Ky(o,t,e),this._ggxMaterial=jy(o,t,e)}return s}_compileMaterial(t){let e=new Ce(new Ge,t);this._renderer.compile(e,Ho)}_sceneToCubeUV(t,e,i,s,o){let u=new yn(90,1,e,i),f=[1,-1,1,1,1,1],p=[1,1,1,-1,-1,-1],g=this._renderer,m=g.autoClear,x=g.toneMapping;g.getClearColor(tp),g.toneMapping=Kn,g.autoClear=!1,g.state.buffers.depth.getReversed()&&(g.setRenderTarget(s),g.clearDepth(),g.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Ce(new Wi,new Un({name:"PMREM.Background",side:Tn,depthWrite:!1,depthTest:!1})));let M=this._backgroundBox,y=M.material,_=!1,T=t.background;T?T.isColor&&(y.color.copy(T),t.background=null,_=!0):(y.color.copy(tp),_=!0);for(let C=0;C<6;C++){let S=C%3;S===0?(u.up.set(0,f[C],0),u.position.set(o.x,o.y,o.z),u.lookAt(o.x+p[C],o.y,o.z)):S===1?(u.up.set(0,0,f[C]),u.position.set(o.x,o.y,o.z),u.lookAt(o.x,o.y+p[C],o.z)):(u.up.set(0,f[C],0),u.position.set(o.x,o.y,o.z),u.lookAt(o.x,o.y,o.z+p[C]));let L=this._cubeSize;gr(s,S*L,C>2?L:0,L,L),g.setRenderTarget(s),_&&g.render(M,u),g.render(t,u)}g.toneMapping=x,g.autoClear=m,t.background=T}_textureToCubeUV(t,e){let i=this._renderer,s=t.mapping===Qi||t.mapping===vs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=ip()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=np());let o=s?this._cubemapMaterial:this._equirectMaterial,c=this._lodMeshes[0];c.material=o;let a=o.uniforms;a.envMap.value=t;let u=this._cubeSize;gr(e,0,0,3*u,2*u),i.setRenderTarget(e),i.render(c,Ho)}_applyPMREM(t){let e=this._renderer,i=e.autoClear;e.autoClear=!1;let s=this._lodMeshes.length;for(let o=1;o<s;o++)this._applyGGXFilter(t,o-1,o);e.autoClear=i}_applyGGXFilter(t,e,i){let s=this._renderer,o=this._pingPongRenderTarget,c=this._ggxMaterial,a=this._lodMeshes[i];a.material=c;let u=c.uniforms,f=i/(this._lodMeshes.length-1),p=e/(this._lodMeshes.length-1),g=Math.sqrt(f*f-p*p),m=f*1.25,x=g*m,{_lodMax:v}=this,M=this._sizeLods[i],y=3*M*(i>v-xr?i-v+xr:0),_=4*(this._cubeSize-M);u.envMap.value=t.texture,u.roughness.value=x,u.mipInt.value=v-e,gr(o,y,_,3*M,2*M),s.setRenderTarget(o),s.render(a,Ho),u.envMap.value=o.texture,u.roughness.value=0,u.mipInt.value=v-i,gr(t,y,_,3*M,2*M),s.setRenderTarget(t),s.render(a,Ho)}_blur(t,e,i,s){let o=this._pingPongRenderTarget,c=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(t,o,e,i,c),this._blurPass(o,t,i,i,c)}_blurPass(t,e,i,s,o){let c=this._renderer,a=this._blurMaterial,u=this._lodMeshes[s];u.material=a;let f=a.uniforms;f.envMap.value=t.texture,f.sigma.value=o,f.mipInt.value=this._lodMax-i;let p=this._sizeLods[s],g=3*p*(s>this._lodMax-xr?s-this._lodMax+xr:0),m=4*(this._cubeSize-p);gr(e,g,m,3*p,2*p),c.setRenderTarget(e),c.render(u,Ho)}};pc=class extends In{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new go(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Wi(5,5,5),o=new Bn({name:"CubemapFromEquirect",uniforms:Ms(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Tn,blending:pi});o.uniforms.tEquirect.value=e;let c=new Ce(s,o),a=e.minFilter;return e.minFilter===ts&&(e.minFilter=dn),new bl(1,10,this).update(t,c),e.minFilter=a,c.geometry.dispose(),c.material.dispose(),this}clear(t,e=!0,i=!0,s=!0){let o=t.getRenderTarget();for(let c=0;c<6;c++)t.setRenderTarget(this,c),t.clear(e,i,s);t.setRenderTarget(o)}};o_={[Dh]:"LINEAR_TONE_MAPPING",[Oh]:"REINHARD_TONE_MAPPING",[Fh]:"CINEON_TONE_MAPPING",[Uh]:"ACES_FILMIC_TONE_MAPPING",[kh]:"AGX_TONE_MAPPING",[zh]:"NEUTRAL_TONE_MAPPING",[Bh]:"CUSTOM_TONE_MAPPING"};Sp=new En,hu=new Xi(1,1),wp=new co,Ep=new el,Tp=new go,sp=[],rp=[],op=new Float32Array(16),ap=new Float32Array(9),lp=new Float32Array(4);uu=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=A_(e.type)}},fu=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=$_(e.type)}},du=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){let s=this.seq;for(let o=0,c=s.length;o!==c;++o){let a=s[o];a.setValue(t,e[a.id],i)}}},lu=/(\w+)(\])?(\[|\.)?/g;yr=class{constructor(t,e){this.seq=[],this.map={};let i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let c=0;c<i;++c){let a=t.getActiveUniform(e,c),u=t.getUniformLocation(e,a.name);q_(a,u,this)}let s=[],o=[];for(let c of this.seq)c.type===t.SAMPLER_2D_SHADOW||c.type===t.SAMPLER_CUBE_SHADOW||c.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(c):o.push(c);s.length>0&&(this.seq=s.concat(o))}setValue(t,e,i,s){let o=this.map[e];o!==void 0&&o.setValue(t,i,s)}setOptional(t,e,i){let s=e[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,e,i,s){for(let o=0,c=e.length;o!==c;++o){let a=e[o],u=i[a.id];u.needsUpdate!==!1&&a.setValue(t,u.value,s)}}static seqWithValue(t,e){let i=[];for(let s=0,o=t.length;s!==o;++s){let c=t[s];c.id in e&&i.push(c)}return i}};Z_=37297,J_=0;up=new ae;tv={[Dh]:"Linear",[Oh]:"Reinhard",[Fh]:"Cineon",[Uh]:"ACESFilmic",[kh]:"AgX",[zh]:"Neutral",[Bh]:"Custom"};fc=new q;ov=/^[ \t]*#include +<([\w\d./]+)>/gm;av=new Map;cv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;uv={[No]:"SHADOWMAP_TYPE_PCF",[fr]:"SHADOWMAP_TYPE_VSM"};dv={[Qi]:"ENVMAP_TYPE_CUBE",[vs]:"ENVMAP_TYPE_CUBE",[Do]:"ENVMAP_TYPE_CUBE_UV"};mv={[vs]:"ENVMAP_MODE_REFRACTION"};xv={[Nh]:"ENVMAP_BLENDING_MULTIPLY",[Cd]:"ENVMAP_BLENDING_MIX",[Id]:"ENVMAP_BLENDING_ADD"};bv=0,mu=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,i){let s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(i)===!1&&(s.add(i),i.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){let e=this.shaderCache,i=e.get(t);return i===void 0&&(i=new gu(t),e.set(t,i)),i}},gu=class{constructor(t){this.id=bv++,this.code=t,this.usedTimes=0}};Cv=0;Nv=`void main() {
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
}`,Ov=[new q(1,0,0),new q(-1,0,0),new q(0,1,0),new q(0,-1,0),new q(0,0,1),new q(0,0,-1)],Fv=[new q(0,-1,0),new q(0,-1,0),new q(0,0,1),new q(0,0,-1),new q(0,-1,0),new q(0,-1,0)],vp=new De,Go=new q,cu=new q;Vv=`
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

}`,xu=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let i=new yo(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,i=new Bn({vertexShader:Vv,fragmentShader:Hv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Ce(new So(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},yu=class extends Jn{constructor(t,e){super();let i=this,s=null,o=1,c=null,a="local-floor",u=1,f=null,p=null,g=null,m=null,x=null,v=null,M=typeof XRWebGLBinding<"u",y=new xu,_={},T=e.getContextAttributes(),C=null,S=null,L=[],E=[],A=new Zt,w=null,D=null,N=new yn;N.viewport=new Ye;let U=new yn;U.viewport=new Ye;let V=[N,U],k=new Ml,z=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ft){let vt=L[ft];return vt===void 0&&(vt=new ir,L[ft]=vt),vt.getTargetRaySpace()},this.getControllerGrip=function(ft){let vt=L[ft];return vt===void 0&&(vt=new ir,L[ft]=vt),vt.getGripSpace()},this.getHand=function(ft){let vt=L[ft];return vt===void 0&&(vt=new ir,L[ft]=vt),vt.getHandSpace()};function G(ft){let vt=E.indexOf(ft.inputSource);if(vt===-1)return;let Vt=L[vt];Vt!==void 0&&(Vt.update(ft.inputSource,ft.frame,f||c),Vt.dispatchEvent({type:ft.type,data:ft.inputSource}))}function $(){s.removeEventListener("select",G),s.removeEventListener("selectstart",G),s.removeEventListener("selectend",G),s.removeEventListener("squeeze",G),s.removeEventListener("squeezestart",G),s.removeEventListener("squeezeend",G),s.removeEventListener("end",$),s.removeEventListener("inputsourceschange",it);for(let ft=0;ft<L.length;ft++){let vt=E[ft];vt!==null&&(E[ft]=null,L[ft].disconnect(vt))}z=null,H=null,y.reset();for(let ft in _)delete _[ft];if(t.setRenderTarget(C),x=null,m=null,g=null,s=null,S=null,me.stop(),i.isPresenting=!1,t.setPixelRatio(w),t.setSize(A.width,A.height,!1),D!==null){let ft=D.camera;ft.fov=D.fov,ft.zoom=D.zoom,ft.updateProjectionMatrix(),D=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ft){o=ft,i.isPresenting===!0&&Qt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ft){a=ft,i.isPresenting===!0&&Qt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return f||c},this.setReferenceSpace=function(ft){f=ft},this.getBaseLayer=function(){return m!==null?m:x},this.getBinding=function(){return g===null&&M&&(g=new XRWebGLBinding(s,e)),g},this.getFrame=function(){return v},this.getSession=function(){return s},this.setSession=async function(ft){if(s=ft,s!==null){if(C=t.getRenderTarget(),s.addEventListener("select",G),s.addEventListener("selectstart",G),s.addEventListener("selectend",G),s.addEventListener("squeeze",G),s.addEventListener("squeezestart",G),s.addEventListener("squeezeend",G),s.addEventListener("end",$),s.addEventListener("inputsourceschange",it),T.xrCompatible!==!0&&await e.makeXRCompatible(),w=t.getPixelRatio(),t.getSize(A),M&&"createProjectionLayer"in XRWebGLBinding.prototype){let Vt=null,te=null,Ot=null;T.depth&&(Ot=T.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Vt=T.stencil?es:ui,te=T.stencil?mr:Qn);let ue={colorFormat:e.RGBA8,depthFormat:Ot,scaleFactor:o};g=this.getBinding(),m=g.createProjectionLayer(ue),s.updateRenderState({layers:[m]}),t.setPixelRatio(1),t.setSize(m.textureWidth,m.textureHeight,!1),S=new In(m.textureWidth,m.textureHeight,{format:Gn,type:Rn,depthTexture:new Xi(m.textureWidth,m.textureHeight,te,void 0,void 0,void 0,void 0,void 0,void 0,Vt),stencilBuffer:T.stencil,colorSpace:t.outputColorSpace,samples:T.antialias?4:0,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1,storeMultisampledDepthBuffer:m.ignoreDepthValues===!1,storeMultisampledStencilBuffer:m.ignoreDepthValues===!1})}else{let Vt={antialias:T.antialias,alpha:!0,depth:T.depth,stencil:T.stencil,framebufferScaleFactor:o};x=new XRWebGLLayer(s,e,Vt),s.updateRenderState({baseLayer:x}),t.setPixelRatio(1),t.setSize(x.framebufferWidth,x.framebufferHeight,!1),S=new In(x.framebufferWidth,x.framebufferHeight,{format:Gn,type:Rn,colorSpace:t.outputColorSpace,stencilBuffer:T.stencil,resolveDepthBuffer:x.ignoreDepthValues===!1,resolveStencilBuffer:x.ignoreDepthValues===!1,storeMultisampledDepthBuffer:x.ignoreDepthValues===!1,storeMultisampledStencilBuffer:x.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(u),f=null,c=await s.requestReferenceSpace(a),me.setContext(s),me.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function it(ft){for(let vt=0;vt<ft.removed.length;vt++){let Vt=ft.removed[vt],te=E.indexOf(Vt);te>=0&&(E[te]=null,L[te].disconnect(Vt))}for(let vt=0;vt<ft.added.length;vt++){let Vt=ft.added[vt],te=E.indexOf(Vt);if(te===-1){for(let ue=0;ue<L.length;ue++)if(ue>=E.length){E.push(Vt),te=ue;break}else if(E[ue]===null){E[ue]=Vt,te=ue;break}if(te===-1)break}let Ot=L[te];Ot&&Ot.connect(Vt)}}let K=new q,st=new q;function ht(ft,vt,Vt){K.setFromMatrixPosition(vt.matrixWorld),st.setFromMatrixPosition(Vt.matrixWorld);let te=K.distanceTo(st),Ot=vt.projectionMatrix.elements,ue=Vt.projectionMatrix.elements,qe=Ot[14]/(Ot[10]-1),ce=Ot[14]/(Ot[10]+1),_e=(Ot[9]+1)/Ot[5],Ie=(Ot[9]-1)/Ot[5],ge=(Ot[8]-1)/Ot[0],Re=(ue[8]+1)/ue[0],Je=qe*ge,ln=qe*Re,Fe=te/(-ge+Re),Xe=Fe*-ge;if(vt.matrixWorld.decompose(ft.position,ft.quaternion,ft.scale),ft.translateX(Xe),ft.translateZ(Fe),ft.matrixWorld.compose(ft.position,ft.quaternion,ft.scale),ft.matrixWorldInverse.copy(ft.matrixWorld).invert(),Ot[10]===-1)ft.projectionMatrix.copy(vt.projectionMatrix),ft.projectionMatrixInverse.copy(vt.projectionMatrixInverse);else{let j=qe+Fe,je=ce+Fe,we=Je-Xe,I=ln+(te-Xe),R=_e*ce/je*j,tt=Ie*ce/je*j;ft.projectionMatrix.makePerspective(we,I,R,tt,j,je),ft.projectionMatrixInverse.copy(ft.projectionMatrix).invert()}}function Rt(ft,vt){vt===null?ft.matrixWorld.copy(ft.matrix):ft.matrixWorld.multiplyMatrices(vt.matrixWorld,ft.matrix),ft.matrixWorldInverse.copy(ft.matrixWorld).invert()}this.updateCamera=function(ft){if(s===null)return;let vt=ft.near,Vt=ft.far;y.texture!==null&&(y.depthNear>0&&(vt=y.depthNear),y.depthFar>0&&(Vt=y.depthFar)),k.near=U.near=N.near=vt,k.far=U.far=N.far=Vt,(z!==k.near||H!==k.far)&&(s.updateRenderState({depthNear:k.near,depthFar:k.far}),z=k.near,H=k.far),k.layers.mask=ft.layers.mask|6,N.layers.mask=k.layers.mask&-5,U.layers.mask=k.layers.mask&-3;let te=ft.parent,Ot=k.cameras;Rt(k,te);for(let ue=0;ue<Ot.length;ue++)Rt(Ot[ue],te);Ot.length===2?ht(k,N,U):k.projectionMatrix.copy(N.projectionMatrix),D===null&&ft.isPerspectiveCamera&&(D={camera:ft,fov:ft.fov,zoom:ft.zoom}),zt(ft,k,te)};function zt(ft,vt,Vt){Vt===null?ft.matrix.copy(vt.matrixWorld):(ft.matrix.copy(Vt.matrixWorld),ft.matrix.invert(),ft.matrix.multiply(vt.matrixWorld)),ft.matrix.decompose(ft.position,ft.quaternion,ft.scale),ft.updateMatrixWorld(!0),ft.projectionMatrix.copy(vt.projectionMatrix),ft.projectionMatrixInverse.copy(vt.projectionMatrixInverse),ft.isPerspectiveCamera&&(ft.fov=tr*2*Math.atan(1/ft.projectionMatrix.elements[5]),ft.zoom=1)}this.getCamera=function(){return k},this.getFoveation=function(){if(!(m===null&&x===null))return u},this.setFoveation=function(ft){u=ft,m!==null&&(m.fixedFoveation=ft),x!==null&&x.fixedFoveation!==void 0&&(x.fixedFoveation=ft)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(k)},this.getCameraTexture=function(ft){return _[ft]};let de=null;function he(ft,vt){if(p=vt.getViewerPose(f||c),v=vt,p!==null){let Vt=p.views;x!==null&&(t.setRenderTargetFramebuffer(S,x.framebuffer),t.setRenderTarget(S));let te=!1;Vt.length!==k.cameras.length&&(k.cameras.length=0,te=!0);for(let ce=0;ce<Vt.length;ce++){let _e=Vt[ce],Ie=null;if(x!==null)Ie=x.getViewport(_e);else{let Re=g.getViewSubImage(m,_e);Ie=Re.viewport,ce===0&&(t.setRenderTargetTextures(S,Re.colorTexture,Re.depthStencilTexture),t.setRenderTarget(S))}let ge=V[ce];ge===void 0&&(ge=new yn,ge.layers.enable(ce),ge.viewport=new Ye,V[ce]=ge),ge.matrix.fromArray(_e.transform.matrix),ge.matrix.decompose(ge.position,ge.quaternion,ge.scale),ge.projectionMatrix.fromArray(_e.projectionMatrix),ge.projectionMatrixInverse.copy(ge.projectionMatrix).invert(),ge.viewport.set(Ie.x,Ie.y,Ie.width,Ie.height),ce===0&&(k.matrix.copy(ge.matrix),k.matrix.decompose(k.position,k.quaternion,k.scale)),te===!0&&k.cameras.push(ge)}let Ot=s.enabledFeatures;if(Ot&&Ot.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&M){g=i.getBinding();let ce=g.getDepthInformation(Vt[0]);ce&&ce.isValid&&ce.texture&&y.init(ce,s.renderState)}if(Ot&&Ot.includes("camera-access")&&M){t.state.unbindTexture(),g=i.getBinding();for(let ce=0;ce<Vt.length;ce++){let _e=Vt[ce].camera;if(_e){let Ie=_[_e];Ie||(Ie=new yo,_[_e]=Ie);let ge=g.getCameraImage(_e);Ie.sourceTexture=ge}}}}for(let Vt=0;Vt<L.length;Vt++){let te=E[Vt],Ot=L[Vt];te!==null&&Ot!==void 0&&Ot.update(te,vt,f||c)}de&&de(ft,vt),vt.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:vt}),v=null}let me=new bp;me.setAnimationLoop(he),this.setAnimationLoop=function(ft){de=ft},this.dispose=function(){}}},Gv=new De,Ap=new ae;Ap.set(-1,0,0,0,1,0,0,0,1);Yv=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),mi=null;mc=class{constructor(t={}){let{canvas:e=Vd(),context:i=null,depth:s=!0,stencil:o=!1,alpha:c=!1,antialias:a=!1,premultipliedAlpha:u=!0,preserveDrawingBuffer:f=!1,powerPreference:p="default",failIfMajorPerformanceCaveat:g=!1,reversedDepthBuffer:m=!1,outputBufferType:x=Rn}=t;this.isWebGLRenderer=!0;let v;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");v=i.getContextAttributes().alpha}else v=c;let M=x,y=new Set([Rl,Il,Cl]),_=new Set([Rn,Qn,pr,mr,Al,Pl]),T=new Uint32Array(4),C=new Int32Array(4),S=new q,L=null,E=null,A=[],w=[],D=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Kn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let N=this,U=!1,V=null,k=null,z=null,H=null;this._outputColorSpace=wn;let G=0,$=0,it=null,K=-1,st=null,ht=new Ye,Rt=new Ye,zt=null,de=new se(0),he=0,me=e.width,ft=e.height,vt=1,Vt=null,te=null,Ot=new Ye(0,0,me,ft),ue=new Ye(0,0,me,ft),qe=!1,ce=new rr,_e=!1,Ie=!1,ge=new De,Re=new q,Je=new Ye,ln={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Fe=!1;function Xe(){return it===null?vt:1}let j=i;function je(O,Z){return e.getContext(O,Z)}let we,I,R,tt,at,dt,St,wt,ut,_t,Et,Gt,Lt,Tt,Ht,jt,re,J,Ct,mt,At,It,bt;try{let O={alpha:!0,depth:s,stencil:o,antialias:a,premultipliedAlpha:u,preserveDrawingBuffer:f,powerPreference:p,failIfMajorPerformanceCaveat:g};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"186"}`),e.addEventListener("webglcontextlost",Te,!1),e.addEventListener("webglcontextrestored",Se,!1),e.addEventListener("webglcontextcreationerror",bn,!1),j===null){let Z="webgl2";if(j=je(Z,O),j===null)throw je(Z)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}qt()}catch(O){throw e.removeEventListener("webglcontextlost",Te,!1),e.removeEventListener("webglcontextrestored",Se,!1),e.removeEventListener("webglcontextcreationerror",bn,!1),ne("WebGLRenderer: "+O.message),O}function qt(){we=new t_(j),we.init(),At=new zv(j,we),I=new Xy(j,we,t,At),R=new Bv(j,we),I.reversedDepthBuffer&&m&&R.buffers.depth.setReversed(!0),k=j.createFramebuffer(),z=j.createFramebuffer(),H=j.createFramebuffer(),tt=new i_(j),at=new wv,dt=new kv(j,we,R,at,I,At,tt),St=new Qy(N),wt=new rg(j),It=new Hy(j,wt),ut=new e_(j,wt,tt,It),_t=new r_(j,ut,wt,It,tt),J=new s_(j,I,dt),Ht=new Wy(at),Et=new Sv(N,St,we,I,It,Ht),Gt=new Xv(N,at),Lt=new Tv,Tt=new Lv(we),re=new Vy(N,St,R,_t,v,u),jt=new Uv(N,_t,I),bt=new Wv(j,tt,I,R),Ct=new Gy(j,we,tt),mt=new n_(j,we,tt),tt.programs=Et.programs,N.capabilities=I,N.extensions=we,N.properties=at,N.renderLists=Lt,N.shadowMap=jt,N.state=R,N.info=tt}M!==Rn&&(D=new a_(M,e.width,e.height,a,s,o));let Dt=new yu(N,j);this.xr=Dt,this.getContext=function(){return j},this.getContextAttributes=function(){return j.getContextAttributes()},this.forceContextLoss=function(){let O=we.get("WEBGL_lose_context");O&&O.loseContext()},this.forceContextRestore=function(){let O=we.get("WEBGL_lose_context");O&&O.restoreContext()},this.getPixelRatio=function(){return vt},this.setPixelRatio=function(O){O!==void 0&&(vt=O,this.setSize(me,ft,!1))},this.getSize=function(O){return O.set(me,ft)},this.setSize=function(O,Z,lt=!0){if(Dt.isPresenting){Qt("WebGLRenderer: Can't change size while VR device is presenting.");return}me=O,ft=Z,e.width=Math.floor(O*vt),e.height=Math.floor(Z*vt),lt===!0&&(e.style.width=O+"px",e.style.height=Z+"px"),D!==null&&D.setSize(e.width,e.height),this.setViewport(0,0,O,Z)},this.getDrawingBufferSize=function(O){return O.set(me*vt,ft*vt).floor()},this.setDrawingBufferSize=function(O,Z,lt){me=O,ft=Z,vt=lt,e.width=Math.floor(O*lt),e.height=Math.floor(Z*lt),this.setViewport(0,0,O,Z)},this.setEffects=function(O){if(M===Rn){ne("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(O){for(let Z=0;Z<O.length;Z++)if(O[Z].isOutputPass===!0){Qt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}D.setEffects(O||[])},this.getCurrentViewport=function(O){return O.copy(ht)},this.getViewport=function(O){return O.copy(Ot)},this.setViewport=function(O,Z,lt,rt){O.isVector4?Ot.set(O.x,O.y,O.z,O.w):Ot.set(O,Z,lt,rt),R.viewport(ht.copy(Ot).multiplyScalar(vt).round())},this.getScissor=function(O){return O.copy(ue)},this.setScissor=function(O,Z,lt,rt){O.isVector4?ue.set(O.x,O.y,O.z,O.w):ue.set(O,Z,lt,rt),R.scissor(Rt.copy(ue).multiplyScalar(vt).round())},this.getScissorTest=function(){return qe},this.setScissorTest=function(O){R.setScissorTest(qe=O)},this.setOpaqueSort=function(O){Vt=O},this.setTransparentSort=function(O){te=O},this.getClearColor=function(O){return O.copy(re.getClearColor())},this.setClearColor=function(){re.setClearColor(...arguments)},this.getClearAlpha=function(){return re.getClearAlpha()},this.setClearAlpha=function(){re.setClearAlpha(...arguments)},this.clear=function(O=!0,Z=!0,lt=!0){let rt=0;if(O){let ot=!1;if(it!==null){let Ut=it.texture.format;ot=y.has(Ut)}if(ot){let Ut=it.texture.type,Pt=_.has(Ut),Ft=re.getClearColor(),Wt=re.getClearAlpha(),$t=Ft.r,Nt=Ft.g,xe=Ft.b;Pt?(T[0]=$t,T[1]=Nt,T[2]=xe,T[3]=Wt,j.clearBufferuiv(j.COLOR,0,T)):(C[0]=$t,C[1]=Nt,C[2]=xe,C[3]=Wt,j.clearBufferiv(j.COLOR,0,C))}else rt|=j.COLOR_BUFFER_BIT}Z&&(rt|=j.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),lt&&(rt|=j.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),rt!==0&&j.clear(rt)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(O){O.setRenderer(this),V=O},this.dispose=function(){e.removeEventListener("webglcontextlost",Te,!1),e.removeEventListener("webglcontextrestored",Se,!1),e.removeEventListener("webglcontextcreationerror",bn,!1),re.dispose(),Lt.dispose(),Tt.dispose(),at.dispose(),St.dispose(),_t.dispose(),It.dispose(),bt.dispose(),Et.dispose(),Dt.dispose(),Dt.removeEventListener("sessionstart",et),Dt.removeEventListener("sessionend",pt),kt.stop()};function Te(O){O.preventDefault(),lo("WebGLRenderer: Context Lost."),U=!0}function Se(){lo("WebGLRenderer: Context Restored."),U=!1;let O=tt.autoReset,Z=jt.enabled,lt=jt.autoUpdate,rt=jt.needsUpdate,ot=jt.type;qt(),tt.autoReset=O,jt.enabled=Z,jt.autoUpdate=lt,jt.needsUpdate=rt,jt.type=ot}function bn(O){ne("WebGLRenderer: A WebGL context could not be created. Reason: ",O.statusMessage)}function An(O){let Z=O.target;Z.removeEventListener("dispose",An),Es(Z)}function Es(O){B(O),at.remove(O)}function B(O){let Z=at.get(O).programs;Z!==void 0&&(Z.forEach(function(lt){Et.releaseProgram(lt)}),O.isShaderMaterial&&Et.releaseShaderCache(O))}this.renderBufferDirect=function(O,Z,lt,rt,ot,Ut){Z===null&&(Z=ln);let Pt=ot.isMesh&&ot.matrixWorld.determinantAffine()<0,Ft=ri(O,Z,lt,rt,ot);R.setMaterial(rt,Pt);let Wt=lt.index,$t=1;if(rt.wireframe===!0){if(Wt=ut.getWireframeAttribute(lt),Wt===void 0)return;$t=2}let Nt=lt.drawRange,xe=lt.attributes.position,Yt=Nt.start*$t,Pe=(Nt.start+Nt.count)*$t;Ut!==null&&(Yt=Math.max(Yt,Ut.start*$t),Pe=Math.min(Pe,(Ut.start+Ut.count)*$t)),Wt!==null?(Yt=Math.max(Yt,0),Pe=Math.min(Pe,Wt.count)):xe!=null&&(Yt=Math.max(Yt,0),Pe=Math.min(Pe,xe.count));let Qe=Pe-Yt;if(Qe<0||Qe===1/0)return;It.setup(ot,rt,Ft,lt,Wt);let Ue,r=Ct;if(Wt!==null&&(Ue=wt.get(Wt),r=mt,r.setIndex(Ue)),ot.isMesh)rt.wireframe===!0?(R.setLineWidth(rt.wireframeLinewidth*Xe()),r.setMode(j.LINES)):r.setMode(j.TRIANGLES);else if(ot.isLine){let l=rt.linewidth;l===void 0&&(l=1),R.setLineWidth(l*Xe()),ot.isLineSegments?r.setMode(j.LINES):ot.isLineLoop?r.setMode(j.LINE_LOOP):r.setMode(j.LINE_STRIP)}else ot.isPoints?r.setMode(j.POINTS):ot.isSprite&&r.setMode(j.TRIANGLES);if(ot.isBatchedMesh)if(we.get("WEBGL_multi_draw"))r.renderMultiDraw(ot._multiDrawStarts,ot._multiDrawCounts,ot._multiDrawCount);else{let l=ot._multiDrawStarts,h=ot._multiDrawCounts,d=ot._multiDrawCount,b=Wt?wt.get(Wt).bytesPerElement:1,P=at.get(rt).currentProgram.getUniforms();for(let F=0;F<d;F++)P.setValue(j,"_gl_DrawID",F),r.render(l[F]/b,h[F])}else if(ot.isInstancedMesh)r.renderInstances(Yt,Qe,ot.count);else if(lt.isInstancedBufferGeometry){let l=lt._maxInstanceCount!==void 0?lt._maxInstanceCount:1/0,h=Math.min(lt.instanceCount,l);r.renderInstances(Yt,Qe,h)}else r.render(Yt,Qe)};function W(O,Z,lt,rt){V!==null&&O.isNodeMaterial&&V.setObject(rt,O),_e===!0&&Ht.setState(O,lt,!1),O.transparent===!0&&O.side===_n&&O.forceSinglePass===!1?(O.side=Tn,O.needsUpdate=!0,Ke(O,Z,rt),O.side=Ki,O.needsUpdate=!0,Ke(O,Z,rt),O.side=_n):Ke(O,Z,rt)}this.compile=function(O,Z,lt=null){lt===null&&(lt=O),V!==null&&V.renderStart(O,Z,lt),E=Tt.get(lt),E.init(Z),w.push(E),lt.traverseVisible(function(ot){ot.isLight&&ot.layers.test(Z.layers)&&(E.pushLight(ot),ot.castShadow&&E.pushShadow(ot))}),O!==lt&&O.traverseVisible(function(ot){ot.isLight&&ot.layers.test(Z.layers)&&(E.pushLight(ot),ot.castShadow&&E.pushShadow(ot))}),E.setupLights(),V!==null&&V.updateLights(E.state.lightsArray),Ie=this.localClippingEnabled,_e=Ht.init(this.clippingPlanes,Ie),_e===!0&&Ht.setGlobalState(this.clippingPlanes,Z),V!==null&&jt.render(E.state.shadowsArray,lt,Z);let rt=new Set;return O.traverse(function(ot){if(!(ot.isMesh||ot.isPoints||ot.isLine||ot.isSprite))return;let Ut=ot.material;if(Ut)if(Array.isArray(Ut))for(let Pt=0;Pt<Ut.length;Pt++){let Ft=Ut[Pt];W(Ft,lt,Z,ot),rt.add(Ft)}else W(Ut,lt,Z,ot),rt.add(Ut)}),E=w.pop(),V!==null&&V.renderEnd(),rt},this.compileAsync=function(O,Z,lt=null){let rt=this.compile(O,Z,lt);return new Promise(ot=>{function Ut(){if(rt.forEach(function(Pt){let Wt=at.get(Pt).currentProgram;(Wt===void 0||Wt.isReady())&&rt.delete(Pt)}),rt.size===0){ot(O);return}setTimeout(Ut,10)}we.get("KHR_parallel_shader_compile")!==null?Ut():setTimeout(Ut,10)})};let nt=null;function ct(O){nt&&nt(O)}function et(){kt.stop()}function pt(){kt.start()}let kt=new bp;kt.setAnimationLoop(ct),typeof self<"u"&&kt.setContext(self),this.setAnimationLoop=function(O){nt=O,Dt.setAnimationLoop(O),O===null?kt.stop():kt.start()},Dt.addEventListener("sessionstart",et),Dt.addEventListener("sessionend",pt),this.render=function(O,Z){if(Z!==void 0&&Z.isCamera!==!0){ne("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(U===!0)return;V!==null&&V.renderStart(O,Z);let lt=Dt.enabled===!0&&Dt.isPresenting===!0,rt=D!==null&&(it===null||lt)&&D.begin(N,it);if(O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),Z.parent===null&&Z.matrixWorldAutoUpdate===!0&&Z.updateMatrixWorld(),Dt.enabled===!0&&Dt.isPresenting===!0&&(D===null||D.isCompositing()===!1)&&(Dt.cameraAutoUpdate===!0&&Dt.updateCamera(Z),Z=Dt.getCamera()),O.isScene===!0&&O.onBeforeRender(N,O,Z,it),E=Tt.get(O,w.length),E.init(Z),E.state.textureUnits=dt.getTextureUnits(),w.push(E),ge.multiplyMatrices(Z.projectionMatrix,Z.matrixWorldInverse),ce.setFromProjectionMatrix(ge,Zn,Z.reversedDepth),Ie=this.localClippingEnabled,_e=Ht.init(this.clippingPlanes,Ie),L=Lt.get(O,A.length),L.init(),A.push(L),Dt.enabled===!0&&Dt.isPresenting===!0){let Pt=N.xr.getDepthSensingMesh();Pt!==null&&ee(Pt,Z,-1/0,N.sortObjects)}ee(O,Z,0,N.sortObjects),L.finish(),V!==null&&V.updateLights(E.state.lightsArray),N.sortObjects===!0&&L.sort(Vt,te),Fe=Dt.enabled===!1||Dt.isPresenting===!1||Dt.hasDepthSensing()===!1,Fe&&re.addToRenderList(L,O),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),_e===!0&&Ht.beginShadows();let ot=E.state.shadowsArray;if(jt.render(ot,O,Z),_e===!0&&Ht.endShadows(),(rt&&D.hasRenderPass())===!1){let Pt=L.opaque,Ft=L.transmissive;if(E.setupLights(),Z.isArrayCamera){let Wt=Z.cameras;if(Ft.length>0)for(let $t=0,Nt=Wt.length;$t<Nt;$t++){let xe=Wt[$t];Xt(Pt,Ft,O,xe)}Fe&&re.render(O);for(let $t=0,Nt=Wt.length;$t<Nt;$t++){let xe=Wt[$t];xt(L,O,xe,xe.viewport)}}else Ft.length>0&&Xt(Pt,Ft,O,Z),Fe&&re.render(O),xt(L,O,Z)}it!==null&&$===0&&(dt.updateMultisampleRenderTarget(it),dt.updateRenderTargetMipmap(it)),rt&&D.end(N),O.isScene===!0&&O.onAfterRender(N,O,Z),It.resetDefaultState(),K=-1,st=null,w.pop(),w.length>0?(E=w[w.length-1],dt.setTextureUnits(E.state.textureUnits),_e===!0&&Ht.setGlobalState(N.clippingPlanes,E.state.camera)):E=null,A.pop(),A.length>0?L=A[A.length-1]:L=null,V!==null&&V.renderEnd()};function ee(O,Z,lt,rt){if(O.visible===!1)return;if(O.layers.test(Z.layers)){if(O.isGroup)lt=O.renderOrder;else if(O.isLOD)O.autoUpdate===!0&&O.update(Z);else if(O.isLightProbeGrid)E.pushLightProbeGrid(O);else if(O.isLight)E.pushLight(O),O.castShadow&&E.pushShadow(O);else if(O.isSprite){if(!O.frustumCulled||O.intersectsFrustum(ce)){rt&&Je.setFromMatrixPosition(O.matrixWorld).applyMatrix4(ge);let Pt=_t.update(O),Ft=O.material;Ft.visible&&L.push(O,Pt,Ft,lt,Je.z,null,Z)}}else if((O.isMesh||O.isLine||O.isPoints)&&(!O.frustumCulled||O.intersectsFrustum(ce))){let Pt=_t.update(O),Ft=O.material;if(rt&&(O.boundingSphere!==void 0?(O.boundingSphere===null&&O.computeBoundingSphere(),Je.copy(O.boundingSphere.center)):(Pt.boundingSphere===null&&Pt.computeBoundingSphere(),Je.copy(Pt.boundingSphere.center)),Je.applyMatrix4(O.matrixWorld).applyMatrix4(ge)),Array.isArray(Ft)){let Wt=Pt.groups;for(let $t=0,Nt=Wt.length;$t<Nt;$t++){let xe=Wt[$t],Yt=Ft[xe.materialIndex];Yt&&Yt.visible&&L.push(O,Pt,Yt,lt,Je.z,xe,Z)}}else Ft.visible&&L.push(O,Pt,Ft,lt,Je.z,null,Z)}}let Ut=O.children;for(let Pt=0,Ft=Ut.length;Pt<Ft;Pt++)ee(Ut[Pt],Z,lt,rt)}function xt(O,Z,lt,rt){let{opaque:ot,transmissive:Ut,transparent:Pt}=O;E.setupLightsView(lt),_e===!0&&Ht.setGlobalState(N.clippingPlanes,lt),rt&&R.viewport(ht.copy(rt)),ot.length>0&&Kt(ot,Z,lt),Ut.length>0&&Kt(Ut,Z,lt),Pt.length>0&&Kt(Pt,Z,lt),R.buffers.depth.setTest(!0),R.buffers.depth.setMask(!0),R.buffers.color.setMask(!0),R.setPolygonOffset(!1)}function Xt(O,Z,lt,rt){if((lt.isScene===!0?lt.overrideMaterial:null)!==null)return;if(E.state.transmissionRenderTarget[rt.id]===void 0){let Yt=we.has("EXT_color_buffer_half_float")||we.has("EXT_color_buffer_float");E.state.transmissionRenderTarget[rt.id]=new In(1,1,{generateMipmaps:!0,type:Yt?ei:Rn,minFilter:ts,samples:Math.max(4,I.samples),stencilBuffer:o,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Me.workingColorSpace})}let Ut=E.state.transmissionRenderTarget[rt.id],Pt=rt.viewport||ht;Ut.setSize(Pt.z*N.transmissionResolutionScale,Pt.w*N.transmissionResolutionScale);let Ft=N.getRenderTarget(),Wt=N.getActiveCubeFace(),$t=N.getActiveMipmapLevel();N.setRenderTarget(Ut),N.getClearColor(de),he=N.getClearAlpha(),he<1&&N.setClearColor(16777215,.5),N.clear(),Fe&&re.render(lt);let Nt=N.toneMapping;N.toneMapping=Kn;let xe=rt.viewport;if(rt.viewport!==void 0&&(rt.viewport=void 0),E.setupLightsView(rt),_e===!0&&Ht.setGlobalState(N.clippingPlanes,rt),Kt(O,lt,rt),dt.updateMultisampleRenderTarget(Ut),dt.updateRenderTargetMipmap(Ut),we.has("WEBGL_multisampled_render_to_texture")===!1){let Yt=!1;for(let Pe=0,Qe=Z.length;Pe<Qe;Pe++){let Ue=Z[Pe],{object:r,geometry:l,material:h,group:d}=Ue;if(h.side===_n&&r.layers.test(rt.layers)){let b=h.side;h.side=Tn,h.needsUpdate=!0,Ae(r,lt,rt,l,h,d),h.side=b,h.needsUpdate=!0,Yt=!0}}Yt===!0&&(dt.updateMultisampleRenderTarget(Ut),dt.updateRenderTargetMipmap(Ut))}N.setRenderTarget(Ft,Wt,$t),N.setClearColor(de,he),xe!==void 0&&(rt.viewport=xe),N.toneMapping=Nt}function Kt(O,Z,lt){let rt=Z.isScene===!0?Z.overrideMaterial:null;for(let ot=0,Ut=O.length;ot<Ut;ot++){let Pt=O[ot],{object:Ft,geometry:Wt,group:$t}=Pt,Nt=Pt.material;Nt.allowOverride===!0&&rt!==null&&(Nt=rt),Ft.layers.test(lt.layers)&&Ae(Ft,Z,lt,Wt,Nt,$t)}}function Ae(O,Z,lt,rt,ot,Ut){V!==null&&ot.isNodeMaterial&&V.setObject(O,ot),O.onBeforeRender(N,Z,lt,rt,ot,Ut),O.modelViewMatrix.multiplyMatrices(lt.matrixWorldInverse,O.matrixWorld),O.normalMatrix.getNormalMatrix(O.modelViewMatrix),ot.onBeforeRender(N,Z,lt,rt,O,Ut),ot.transparent===!0&&ot.side===_n&&ot.forceSinglePass===!1?(ot.side=Tn,ot.needsUpdate=!0,N.renderBufferDirect(lt,Z,rt,ot,O,Ut),ot.side=Ki,ot.needsUpdate=!0,N.renderBufferDirect(lt,Z,rt,ot,O,Ut),ot.side=_n):N.renderBufferDirect(lt,Z,rt,ot,O,Ut),O.onAfterRender(N,Z,lt,rt,ot,Ut)}function Ke(O,Z,lt){Z.isScene!==!0&&(Z=ln);let rt=at.get(O),ot=E.state.lights,Ut=E.state.shadowsArray,Pt=ot.state.version,Ft=Et.getParameters(O,ot.state,Ut,Z,lt,E.state.lightProbeGridArray),Wt=Et.getProgramCacheKey(Ft),$t=rt.programs;rt.environment=O.isMeshStandardMaterial||O.isMeshLambertMaterial||O.isMeshPhongMaterial?Z.environment:null,rt.fog=Z.fog;let Nt=O.isMeshStandardMaterial||O.isMeshLambertMaterial&&!O.envMap||O.isMeshPhongMaterial&&!O.envMap;rt.envMap=St.get(O.envMap||rt.environment,Nt),rt.envMapRotation=rt.environment!==null&&O.envMap===null?Z.environmentRotation:O.envMapRotation,$t===void 0&&(O.addEventListener("dispose",An),$t=new Map,rt.programs=$t);let xe=$t.get(Wt);if(xe!==void 0){if(rt.currentProgram===xe&&rt.lightsStateVersion===Pt)return si(O,Ft),xe}else Ft.uniforms=Et.getUniforms(O),V!==null&&O.isNodeMaterial&&V.build(O,lt,Ft),O.onBeforeCompile(Ft,N),xe=Et.acquireProgram(Ft,Wt),$t.set(Wt,xe),rt.uniforms=Ft.uniforms;let Yt=rt.uniforms;return(!O.isShaderMaterial&&!O.isRawShaderMaterial||O.clipping===!0)&&(Yt.clippingPlanes=Ht.uniform),si(O,Ft),rt.needsLights=Pc(O),rt.lightsStateVersion=Pt,rt.needsLights&&(Yt.ambientLightColor.value=ot.state.ambient,Yt.lightProbe.value=ot.state.probe,Yt.sunLights.value=ot.state.sun,Yt.sunLightShadows.value=ot.state.sunShadow,Yt.directionalLights.value=ot.state.directional,Yt.directionalLightShadows.value=ot.state.directionalShadow,Yt.spotLights.value=ot.state.spot,Yt.spotLightShadows.value=ot.state.spotShadow,Yt.rectAreaLights.value=ot.state.rectArea,Yt.ltc_1.value=ot.state.rectAreaLTC1,Yt.ltc_2.value=ot.state.rectAreaLTC2,Yt.pointLights.value=ot.state.point,Yt.pointLightShadows.value=ot.state.pointShadow,Yt.hemisphereLights.value=ot.state.hemi,Yt.sunShadowMatrix.value=ot.state.sunShadowMatrix,Yt.sunShadowCascade.value=ot.state.sunShadowCascade,Yt.directionalShadowMatrix.value=ot.state.directionalShadowMatrix,Yt.spotLightMatrix.value=ot.state.spotLightMatrix,Yt.spotLightMap.value=ot.state.spotLightMap,Yt.pointShadowMatrix.value=ot.state.pointShadowMatrix),rt.lightProbeGrid=E.state.lightProbeGridArray.length>0,rt.currentProgram=xe,rt.uniformsList=null,xe}function We(O){if(O.uniformsList===null){let Z=O.currentProgram.getUniforms();O.uniformsList=yr.seqWithValue(Z.seq,O.uniforms)}return O.uniformsList}function si(O,Z){let lt=at.get(O);lt.outputColorSpace=Z.outputColorSpace,lt.batching=Z.batching,lt.batchingColor=Z.batchingColor,lt.instancing=Z.instancing,lt.instancingColor=Z.instancingColor,lt.instancingMorph=Z.instancingMorph,lt.skinning=Z.skinning,lt.morphTargets=Z.morphTargets,lt.morphNormals=Z.morphNormals,lt.morphColors=Z.morphColors,lt.morphTargetsCount=Z.morphTargetsCount,lt.numClippingPlanes=Z.numClippingPlanes,lt.numIntersection=Z.numClipIntersection,lt.vertexAlphas=Z.vertexAlphas,lt.vertexTangents=Z.vertexTangents,lt.toneMapping=Z.toneMapping}function Ts(O,Z){if(O.length===0)return null;if(O.length===1)return O[0].texture!==null?O[0]:null;S.setFromMatrixPosition(Z.matrixWorld);for(let lt=0,rt=O.length;lt<rt;lt++){let ot=O[lt];if(ot.texture!==null&&ot.boundingBox.containsPoint(S))return ot}return null}function ri(O,Z,lt,rt,ot){Z.isScene!==!0&&(Z=ln),dt.resetTextureUnits();let Ut=Z.fog,Pt=rt.isMeshStandardMaterial||rt.isMeshLambertMaterial||rt.isMeshPhongMaterial?Z.environment:null,Ft=it===null?N.outputColorSpace:it.isXRRenderTarget===!0?it.texture.colorSpace:Me.workingColorSpace,Wt=rt.isMeshStandardMaterial||rt.isMeshLambertMaterial&&!rt.envMap||rt.isMeshPhongMaterial&&!rt.envMap,$t=St.get(rt.envMap||Pt,Wt),Nt=rt.vertexColors===!0&&!!lt.attributes.color&&lt.attributes.color.itemSize===4,xe=!!lt.attributes.tangent&&(!!rt.normalMap||rt.anisotropy>0),Yt=!!lt.morphAttributes.position,Pe=!!lt.morphAttributes.normal,Qe=!!lt.morphAttributes.color,Ue=Kn;rt.toneMapped&&(it===null||it.isXRRenderTarget===!0)&&(Ue=N.toneMapping);let r=lt.morphAttributes.position||lt.morphAttributes.normal||lt.morphAttributes.color,l=r!==void 0?r.length:0,h=at.get(rt),d=E.state.lights;if(_e===!0&&(Ie===!0||O!==st)){let Mt=O===st&&rt.id===K;Ht.setState(rt,O,Mt)}let b=!1;rt.version===h.__version?(h.needsLights&&h.lightsStateVersion!==d.state.version||h.outputColorSpace!==Ft||ot.isBatchedMesh&&h.batching===!1||!ot.isBatchedMesh&&h.batching===!0||ot.isBatchedMesh&&h.batchingColor===!0&&ot._colorsTexture===null||ot.isBatchedMesh&&h.batchingColor===!1&&ot._colorsTexture!==null||ot.isInstancedMesh&&h.instancing===!1||!ot.isInstancedMesh&&h.instancing===!0||ot.isSkinnedMesh&&h.skinning===!1||!ot.isSkinnedMesh&&h.skinning===!0||ot.isInstancedMesh&&h.instancingColor===!0&&ot.instanceColor===null||ot.isInstancedMesh&&h.instancingColor===!1&&ot.instanceColor!==null||ot.isInstancedMesh&&h.instancingMorph===!0&&ot.morphTexture===null||ot.isInstancedMesh&&h.instancingMorph===!1&&ot.morphTexture!==null||h.envMap!==$t||rt.fog===!0&&h.fog!==Ut||h.numClippingPlanes!==void 0&&(h.numClippingPlanes!==Ht.numPlanes||h.numIntersection!==Ht.numIntersection)||h.vertexAlphas!==Nt||h.vertexTangents!==xe||h.morphTargets!==Yt||h.morphNormals!==Pe||h.morphColors!==Qe||h.toneMapping!==Ue||h.morphTargetsCount!==l||!!h.lightProbeGrid!=E.state.lightProbeGridArray.length>0)&&(b=!0):(b=!0,h.__version=rt.version);let P=h.currentProgram;b===!0&&(P=Ke(rt,Z,ot),V&&rt.isNodeMaterial&&V.onUpdateProgram(rt,P,h));let F=!1,X=!1,Y=!1,Q=P.getUniforms(),yt=h.uniforms;if(R.useProgram(P.program)&&(F=!0,X=!0,Y=!0),rt.id!==K&&(K=rt.id,X=!0),h.needsLights){let Mt=Ts(E.state.lightProbeGridArray,ot);h.lightProbeGrid!==Mt&&(h.lightProbeGrid=Mt,X=!0)}if(F||st!==O){R.buffers.depth.getReversed()&&O.reversedDepth!==!0&&(O._reversedDepth=!0,O.updateProjectionMatrix()),Q.setValue(j,"projectionMatrix",O.projectionMatrix),Q.setValue(j,"viewMatrix",O.matrixWorldInverse);let Jt=Q.map.cameraPosition;Jt!==void 0&&Jt.setValue(j,Re.setFromMatrixPosition(O.matrixWorld)),I.logarithmicDepthBuffer&&Q.setValue(j,"logDepthBufFC",2/(Math.log(O.far+1)/Math.LN2)),(rt.isMeshPhongMaterial||rt.isMeshToonMaterial||rt.isMeshLambertMaterial||rt.isMeshBasicMaterial||rt.isMeshStandardMaterial||rt.isShaderMaterial)&&Q.setValue(j,"isOrthographic",O.isOrthographicCamera===!0),st!==O&&(st=O,X=!0,Y=!0)}if(h.needsLights&&(d.state.sunShadowMap.length>0&&Q.setValue(j,"sunShadowMap",d.state.sunShadowMap,dt),d.state.directionalShadowMap.length>0&&Q.setValue(j,"directionalShadowMap",d.state.directionalShadowMap,dt),d.state.spotShadowMap.length>0&&Q.setValue(j,"spotShadowMap",d.state.spotShadowMap,dt),d.state.pointShadowMap.length>0&&Q.setValue(j,"pointShadowMap",d.state.pointShadowMap,dt)),ot.isSkinnedMesh){Q.setOptional(j,ot,"bindMatrix"),Q.setOptional(j,ot,"bindMatrixInverse");let Mt=ot.skeleton;Mt&&(Mt.boneTexture===null&&Mt.computeBoneTexture(),Q.setValue(j,"boneTexture",Mt.boneTexture,dt))}ot.isBatchedMesh&&(Q.setOptional(j,ot,"batchingTexture"),Q.setValue(j,"batchingTexture",ot._matricesTexture,dt),Q.setOptional(j,ot,"batchingIdTexture"),Q.setValue(j,"batchingIdTexture",ot._indirectTexture,dt),Q.setOptional(j,ot,"batchingColorTexture"),ot._colorsTexture!==null&&Q.setValue(j,"batchingColorTexture",ot._colorsTexture,dt));let gt=lt.morphAttributes;if((gt.position!==void 0||gt.normal!==void 0||gt.color!==void 0)&&J.update(ot,lt,P),(X||h.receiveShadow!==ot.receiveShadow)&&(h.receiveShadow=ot.receiveShadow,Q.setValue(j,"receiveShadow",ot.receiveShadow)),(rt.isMeshStandardMaterial||rt.isMeshLambertMaterial||rt.isMeshPhongMaterial)&&rt.envMap===null&&Z.environment!==null&&(yt.envMapIntensity.value=Z.environmentIntensity),yt.dfgLUT!==void 0&&(yt.dfgLUT.value=$v()),X){if(Q.setValue(j,"toneMappingExposure",N.toneMappingExposure),h.needsLights&&Ac(yt,Y),Ut&&rt.fog===!0&&Gt.refreshFogUniforms(yt,Ut),Gt.refreshMaterialUniforms(yt,rt,vt,ft,E.state.transmissionRenderTarget[O.id]),h.needsLights&&h.lightProbeGrid){let Mt=h.lightProbeGrid;yt.probesSH.value=Mt.texture,yt.probesMin.value.copy(Mt.boundingBox.min),yt.probesMax.value.copy(Mt.boundingBox.max),yt.probesResolution.value.copy(Mt.resolution)}yr.upload(j,We(h),yt,dt)}if(rt.isShaderMaterial&&rt.uniformsNeedUpdate===!0&&(yr.upload(j,We(h),yt,dt),rt.uniformsNeedUpdate=!1),rt.isSpriteMaterial&&Q.setValue(j,"center",ot.center),Q.setValue(j,"modelViewMatrix",ot.modelViewMatrix),Q.setValue(j,"normalMatrix",ot.normalMatrix),Q.setValue(j,"modelMatrix",ot.matrixWorld),rt.uniformsGroups!==void 0){let Mt=rt.uniformsGroups;for(let Jt=0,oe=Mt.length;Jt<oe;Jt++){let ye=Mt[Jt];bt.update(ye,P),bt.bind(ye,P)}}return P}function Ac(O,Z){O.ambientLightColor.needsUpdate=Z,O.lightProbe.needsUpdate=Z,O.sunLights.needsUpdate=Z,O.sunLightShadows.needsUpdate=Z,O.directionalLights.needsUpdate=Z,O.directionalLightShadows.needsUpdate=Z,O.pointLights.needsUpdate=Z,O.pointLightShadows.needsUpdate=Z,O.spotLights.needsUpdate=Z,O.spotLightShadows.needsUpdate=Z,O.rectAreaLights.needsUpdate=Z,O.hemisphereLights.needsUpdate=Z}function Pc(O){return O.isMeshLambertMaterial||O.isMeshToonMaterial||O.isMeshPhongMaterial||O.isMeshStandardMaterial||O.isShadowMaterial||O.isShaderMaterial&&O.lights===!0}this.getActiveCubeFace=function(){return G},this.getActiveMipmapLevel=function(){return $},this.getRenderTarget=function(){return it},this.setRenderTargetTextures=function(O,Z,lt){let rt=at.get(O);rt.__autoAllocateDepthBuffer=O.resolveDepthBuffer===!1,rt.__autoAllocateDepthBuffer===!1&&(rt.__useRenderToTexture=!1),at.get(O.texture).__webglTexture=Z,at.get(O.depthTexture).__webglTexture=rt.__autoAllocateDepthBuffer?void 0:lt,rt.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(O,Z){let lt=at.get(O);lt.__webglFramebuffer=Z,lt.__useDefaultFramebuffer=Z===void 0},this.setRenderTarget=function(O,Z=0,lt=0){it=O,G=Z,$=lt;let rt=null,ot=!1,Ut=!1;if(O){let Ft=at.get(O);if(Ft.__useDefaultFramebuffer!==void 0){R.bindFramebuffer(j.FRAMEBUFFER,Ft.__webglFramebuffer),ht.copy(O.viewport),Rt.copy(O.scissor),zt=O.scissorTest,R.viewport(ht),R.scissor(Rt),R.setScissorTest(zt),K=-1;return}else if(Ft.__webglFramebuffer===void 0)dt.setupRenderTarget(O);else if(Ft.__hasExternalTextures)dt.rebindTextures(O,at.get(O.texture).__webglTexture,at.get(O.depthTexture).__webglTexture);else if(O.depthBuffer){let Nt=O.depthTexture;if(Ft.__boundDepthTexture!==Nt){if(Nt!==null&&at.has(Nt)&&(O.width!==Nt.image.width||O.height!==Nt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");dt.setupDepthRenderbuffer(O)}}let Wt=O.texture;(Wt.isData3DTexture||Wt.isDataArrayTexture||Wt.isCompressedArrayTexture)&&(Ut=!0);let $t=at.get(O).__webglFramebuffer;O.isWebGLCubeRenderTarget?(Array.isArray($t[Z])?rt=$t[Z][lt]:rt=$t[Z],ot=!0):O.samples>0&&dt.useMultisampledRTT(O)===!1?rt=at.get(O).__webglMultisampledFramebuffer:Array.isArray($t)?rt=$t[lt]:rt=$t,ht.copy(O.viewport),Rt.copy(O.scissor),zt=O.scissorTest}else ht.copy(Ot).multiplyScalar(vt).floor(),Rt.copy(ue).multiplyScalar(vt).floor(),zt=qe;if(lt!==0&&(rt=k),R.bindFramebuffer(j.FRAMEBUFFER,rt)&&R.drawBuffers(O,rt),R.viewport(ht),R.scissor(Rt),R.setScissorTest(zt),ot){let Ft=at.get(O.texture);j.framebufferTexture2D(j.FRAMEBUFFER,j.COLOR_ATTACHMENT0,j.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Ft.__webglTexture,lt)}else if(Ut){let Ft=Z;for(let Wt=0;Wt<O.textures.length;Wt++){let $t=at.get(O.textures[Wt]);j.framebufferTextureLayer(j.FRAMEBUFFER,j.COLOR_ATTACHMENT0+Wt,$t.__webglTexture,lt,Ft)}}else if(O!==null&&lt!==0){let Ft=at.get(O.texture);j.framebufferTexture2D(j.FRAMEBUFFER,j.COLOR_ATTACHMENT0,j.TEXTURE_2D,Ft.__webglTexture,lt)}K=-1};function qo(O){let Z=at.get(O);return(Z.__readFormat!==O.format||Z.__readType!==O.type)&&(Z.__readFormat=O.format,Z.__readType=O.type,Z.__formatReadable=I.textureFormatReadable(O.format),Z.__typeReadable=I.textureTypeReadable(O.type)),Z}this.readRenderTargetPixels=function(O,Z,lt,rt,ot,Ut,Pt,Ft=0){if(!(O&&O.isWebGLRenderTarget)){ne("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Wt=at.get(O).__webglFramebuffer;if(O.isWebGLCubeRenderTarget&&Pt!==void 0&&(Wt=Wt[Pt]),Wt){R.bindFramebuffer(j.FRAMEBUFFER,Wt);try{let $t=O.textures[Ft],Nt=$t.format,xe=$t.type;O.textures.length>1&&j.readBuffer(j.COLOR_ATTACHMENT0+Ft);let Yt=qo($t);if(Yt.__formatReadable===!1){ne("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Yt.__typeReadable===!1){ne("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Z>=0&&Z<=O.width-rt&&lt>=0&&lt<=O.height-ot&&j.readPixels(Z,lt,rt,ot,At.convert(Nt),At.convert(xe),Ut)}finally{let $t=it!==null?at.get(it).__webglFramebuffer:null;R.bindFramebuffer(j.FRAMEBUFFER,$t)}}},this.readRenderTargetPixelsAsync=async function(O,Z,lt,rt,ot,Ut,Pt,Ft=0){if(!(O&&O.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Wt=at.get(O).__webglFramebuffer;if(O.isWebGLCubeRenderTarget&&Pt!==void 0&&(Wt=Wt[Pt]),Wt)if(Z>=0&&Z<=O.width-rt&&lt>=0&&lt<=O.height-ot){R.bindFramebuffer(j.FRAMEBUFFER,Wt);let $t=O.textures[Ft],Nt=$t.format,xe=$t.type;O.textures.length>1&&j.readBuffer(j.COLOR_ATTACHMENT0+Ft);let Yt=qo($t);if(Yt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Yt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Pe=j.createBuffer();j.bindBuffer(j.PIXEL_PACK_BUFFER,Pe),j.bufferData(j.PIXEL_PACK_BUFFER,Ut.byteLength,j.STREAM_READ),j.readPixels(Z,lt,rt,ot,At.convert(Nt),At.convert(xe),0),j.bindBuffer(j.PIXEL_PACK_BUFFER,null);let Qe=it!==null?at.get(it).__webglFramebuffer:null;R.bindFramebuffer(j.FRAMEBUFFER,Qe);let Ue=j.fenceSync(j.SYNC_GPU_COMMANDS_COMPLETE,0);return j.flush(),await Gd(j,Ue,4),j.bindBuffer(j.PIXEL_PACK_BUFFER,Pe),j.getBufferSubData(j.PIXEL_PACK_BUFFER,0,Ut),j.bindBuffer(j.PIXEL_PACK_BUFFER,null),j.deleteBuffer(Pe),j.deleteSync(Ue),Ut}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(O,Z=null,lt=0){let rt=Math.pow(2,-lt),ot=Math.floor(O.image.width*rt),Ut=Math.floor(O.image.height*rt),Pt=Z!==null?Z.x:0,Ft=Z!==null?Z.y:0;dt.setTexture2D(O,0),j.copyTexSubImage2D(j.TEXTURE_2D,lt,0,0,Pt,Ft,ot,Ut),R.unbindTexture()},this.copyTextureToTexture=function(O,Z,lt=null,rt=null,ot=0,Ut=0){let Pt,Ft,Wt,$t,Nt,xe,Yt,Pe,Qe,Ue=O.isCompressedTexture?O.mipmaps[Ut]:O.image;if(lt!==null)Pt=lt.max.x-lt.min.x,Ft=lt.max.y-lt.min.y,Wt=lt.isBox3?lt.max.z-lt.min.z:1,$t=lt.min.x,Nt=lt.min.y,xe=lt.isBox3?lt.min.z:0;else{let yt=Math.pow(2,-ot);Pt=Math.floor(Ue.width*yt),Ft=Math.floor(Ue.height*yt),O.isDataArrayTexture?Wt=Ue.depth:O.isData3DTexture?Wt=Math.floor(Ue.depth*yt):Wt=1,$t=0,Nt=0,xe=0}rt!==null?(Yt=rt.x,Pe=rt.y,Qe=rt.z):(Yt=0,Pe=0,Qe=0);let r=At.convert(Z.format),l=At.convert(Z.type),h;Z.isData3DTexture?(dt.setTexture3D(Z,0),h=j.TEXTURE_3D):Z.isDataArrayTexture||Z.isCompressedArrayTexture?(dt.setTexture2DArray(Z,0),h=j.TEXTURE_2D_ARRAY):(dt.setTexture2D(Z,0),h=j.TEXTURE_2D),R.activeTexture(j.TEXTURE0),R.pixelStorei(j.UNPACK_FLIP_Y_WEBGL,Z.flipY),R.pixelStorei(j.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Z.premultiplyAlpha),R.pixelStorei(j.UNPACK_ALIGNMENT,Z.unpackAlignment);let d=R.getParameter(j.UNPACK_ROW_LENGTH),b=R.getParameter(j.UNPACK_IMAGE_HEIGHT),P=R.getParameter(j.UNPACK_SKIP_PIXELS),F=R.getParameter(j.UNPACK_SKIP_ROWS),X=R.getParameter(j.UNPACK_SKIP_IMAGES);R.pixelStorei(j.UNPACK_ROW_LENGTH,Ue.width),R.pixelStorei(j.UNPACK_IMAGE_HEIGHT,Ue.height),R.pixelStorei(j.UNPACK_SKIP_PIXELS,$t),R.pixelStorei(j.UNPACK_SKIP_ROWS,Nt),R.pixelStorei(j.UNPACK_SKIP_IMAGES,xe);let Y=O.isDataArrayTexture||O.isData3DTexture,Q=Z.isDataArrayTexture||Z.isData3DTexture;if(O.isDepthTexture){let yt=at.get(O),gt=at.get(Z),Mt=at.get(yt.__renderTarget),Jt=at.get(gt.__renderTarget);R.bindFramebuffer(j.READ_FRAMEBUFFER,Mt.__webglFramebuffer),R.bindFramebuffer(j.DRAW_FRAMEBUFFER,Jt.__webglFramebuffer);for(let oe=0;oe<Wt;oe++)Y&&(j.framebufferTextureLayer(j.READ_FRAMEBUFFER,j.COLOR_ATTACHMENT0,at.get(O).__webglTexture,ot,xe+oe),j.framebufferTextureLayer(j.DRAW_FRAMEBUFFER,j.COLOR_ATTACHMENT0,at.get(Z).__webglTexture,Ut,Qe+oe)),j.blitFramebuffer($t,Nt,Pt,Ft,Yt,Pe,Pt,Ft,j.DEPTH_BUFFER_BIT,j.NEAREST);R.bindFramebuffer(j.READ_FRAMEBUFFER,null),R.bindFramebuffer(j.DRAW_FRAMEBUFFER,null)}else if(ot!==0||O.isRenderTargetTexture||at.has(O)){let yt=at.get(O),gt=at.get(Z);R.bindFramebuffer(j.READ_FRAMEBUFFER,z),R.bindFramebuffer(j.DRAW_FRAMEBUFFER,H);for(let Mt=0;Mt<Wt;Mt++)Y?j.framebufferTextureLayer(j.READ_FRAMEBUFFER,j.COLOR_ATTACHMENT0,yt.__webglTexture,ot,xe+Mt):j.framebufferTexture2D(j.READ_FRAMEBUFFER,j.COLOR_ATTACHMENT0,j.TEXTURE_2D,yt.__webglTexture,ot),Q?j.framebufferTextureLayer(j.DRAW_FRAMEBUFFER,j.COLOR_ATTACHMENT0,gt.__webglTexture,Ut,Qe+Mt):j.framebufferTexture2D(j.DRAW_FRAMEBUFFER,j.COLOR_ATTACHMENT0,j.TEXTURE_2D,gt.__webglTexture,Ut),ot!==0?j.blitFramebuffer($t,Nt,Pt,Ft,Yt,Pe,Pt,Ft,j.COLOR_BUFFER_BIT,j.NEAREST):Q?j.copyTexSubImage3D(h,Ut,Yt,Pe,Qe+Mt,$t,Nt,Pt,Ft):j.copyTexSubImage2D(h,Ut,Yt,Pe,$t,Nt,Pt,Ft);R.bindFramebuffer(j.READ_FRAMEBUFFER,null),R.bindFramebuffer(j.DRAW_FRAMEBUFFER,null)}else Q?O.isDataTexture||O.isData3DTexture?j.texSubImage3D(h,Ut,Yt,Pe,Qe,Pt,Ft,Wt,r,l,Ue.data):Z.isCompressedArrayTexture?j.compressedTexSubImage3D(h,Ut,Yt,Pe,Qe,Pt,Ft,Wt,r,Ue.data):j.texSubImage3D(h,Ut,Yt,Pe,Qe,Pt,Ft,Wt,r,l,Ue):O.isDataTexture?j.texSubImage2D(j.TEXTURE_2D,Ut,Yt,Pe,Pt,Ft,r,l,Ue.data):O.isCompressedTexture?j.compressedTexSubImage2D(j.TEXTURE_2D,Ut,Yt,Pe,Ue.width,Ue.height,r,Ue.data):j.texSubImage2D(j.TEXTURE_2D,Ut,Yt,Pe,Pt,Ft,r,l,Ue);R.pixelStorei(j.UNPACK_ROW_LENGTH,d),R.pixelStorei(j.UNPACK_IMAGE_HEIGHT,b),R.pixelStorei(j.UNPACK_SKIP_PIXELS,P),R.pixelStorei(j.UNPACK_SKIP_ROWS,F),R.pixelStorei(j.UNPACK_SKIP_IMAGES,X),Ut===0&&Z.generateMipmaps&&j.generateMipmap(h),R.unbindTexture()},this.initRenderTarget=function(O){at.get(O).__webglFramebuffer===void 0&&dt.setupRenderTarget(O)},this.initTexture=function(O){O.isCubeTexture?dt.setTextureCube(O,0):O.isData3DTexture?dt.setTexture3D(O,0):O.isDataArrayTexture||O.isCompressedArrayTexture?dt.setTexture2DArray(O,0):dt.setTexture2D(O,0),R.unbindTexture()},this.resetState=function(){G=0,$=0,it=null,R.reset(),It.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Zn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=Me._getDrawingBufferColorSpace(t),e.unpackColorSpace=Me._getUnpackColorSpace()}}});function _u(n){let t=n.stock.top,e=n.ops.filter(v=>v.enabled!==!1),i=e.filter(v=>v.kind==="cutout"),s=i.length?_i(i.flatMap(v=>v.region)):[[[n.stock.minX,n.stock.minY],[n.stock.maxX,n.stock.minY],[n.stock.maxX,n.stock.maxY],[n.stock.minX,n.stock.maxY]]],o=new Map;for(let v of e){let M=v.kind==="pocket"?v.region:v.kind==="inside"?v.loops:null;if(!M?.length)continue;let y=Math.max(0,v.zBottom);o.set(y,[...o.get(y)||[],...M])}let c=[...o.keys()].sort((v,M)=>v-M),a=[],u=[];for(let v of c){let M=_i(o.get(v)),y=Cn(na(os(M,u),s),.01);v>0&&y.length&&a.push({z:v,region:y}),u=_i([...u,...M])}let f=Cn(os(s,u),.01);a.push({z:t,region:f});let p=v=>{for(let M of a)if(zc(v,M.region))return M.z;return 0},g=[],m=[],x=(v,M,y)=>(g.push(v,M,y),g.length/3-1);for(let v of a)for(let[M,...y]of Di(v.region)){let _=A=>A.map(([w,D])=>new Zt(w,D)),T=_(M),C=y.map(_),S=Mo.triangulateShape(T,C),L=[...T,...C.flat()],E=g.length/3;for(let A of L)g.push(A.x,A.y,v.z);for(let A of S)m.push(E+A[0],E+A[1],E+A[2]);for(let A of[M,...y])for(let w=0;w<A.length;w++){let D=A[w],N=A[(w+1)%A.length],U=N[0]-D[0],V=N[1]-D[1],k=Math.hypot(U,V);if(k<1e-9)continue;let z=(D[0]+N[0])/2,H=(D[1]+N[1])/2,G=V/k*.05,$=-U/k*.05,it=zc([z+G,H+$],v.region)?[z-G,H-$]:[z+G,H+$],K=p(it);if(K>=v.z-1e-6)continue;let st=x(D[0],D[1],v.z),ht=x(N[0],N[1],v.z),Rt=x(N[0],N[1],K),zt=x(D[0],D[1],K);m.push(st,ht,Rt,st,Rt,zt)}}return{positions:Float32Array.from(g),indices:Uint32Array.from(m)}}var Pp=fe(()=>{Wo();Yr()});function ni(n,t,e){let i=Math.max(1,Math.ceil((n-t)/e-1e-6));return Array.from({length:i},(s,o)=>n-(o+1)*(n-t)/i)}function ws(n,t,e,i,s,o,c){let a=[...t.breaks(e,i),i];if(c)for(let f of c.edges(e,i))a.push(f);a.sort((f,p)=>f-p);let u=e;for(let f of a){if(f-u<1e-9)continue;let p=(u+f)/2,g=c&&c.inside(p)?c.top:-1/0,[m,x]=t.at(u),v=Math.max(s(u),g),M=n.at;M&&(Math.abs(M.z-v)>1e-6||Math.abs(M.x-m)>1e-6||Math.abs(M.y-x)>1e-6)&&n.feed(m,x,v,o);let[y,_]=t.at(f);n.feed(y,_,Math.max(s(f),g),o),u=f}}function _c(n,t,e,i,s,o,c){let a=Math.max(0,(i-s)/Math.tan(o.rampAngle*Math.PI/180));if(t.length<1||a<1e-6){let[f,p]=t.at(e);return n.feed(f,p,c&&c.inside(e)?Math.max(s,c.top):s,o.plunge),ws(n,t,e,e+t.length,()=>s,o.feed,c),e}let u=e+a;return ws(n,t,e,u,f=>i-(f-e)/a*(i-s),Math.min(o.feed,o.plunge*2),c),ws(n,t,u,u+t.length,()=>s,o.feed,c),u}function Kv(n,t,e,i){let s=[];for(let o=t,c=0;c<500;o+=e,c++){let a=as(Cn(Ve(n,-o,i),.001),.005);if(!a.length)break;s.push(a)}return s}function Qv(n){let t=n.map((s,o)=>s.map(c=>({loop:c,depth:o,kids:[]})));for(let s=1;s<t.length;s++)for(let o of t[s])(t[s-1].find(a=>yi(o.loop[0],a.loop)&&Math.sign(mn(a.loop))===Math.sign(mn(o.loop)))||t[s-1].find(a=>yi(o.loop[0],a.loop))||t[0][0]).kids.push(o);let e=[],i=s=>{if(!s.kids.length){e.push([s.loop]);return}for(let o of s.kids)i(o);e[e.length-1].push(s.loop)};for(let s of t[0]||[])mn(s.loop)>0&&i(s);for(let s of t[0]||[])mn(s.loop)<=0&&!t[0].some(o=>o.kids.includes(s))&&i(s);return e}function br(n,t){let e=0;for(let i of t)yi(n,i)&&(e+=mn(i)>0?1:-1);return e>0}function tb(n,t,e){let i=Math.max(2,Math.ceil(Math.hypot(t[0]-n[0],t[1]-n[1])/.2));for(let s=1;s<i;s++){let o=s/i;if(!br([n[0]+(t[0]-n[0])*o,n[1]+(t[1]-n[1])*o],e))return!1}return!0}function yc(n,t,e,i,s,o,c,a=null,u=null){let f=Math.min(i.stepover,e*.95),p=Kv(t,e+c,f,c>=.2?.05:void 0);if(!p.length)return;let g=Ve(t,-(e+c)+.01),m=Qv(p),x=s;for(let v of ni(s,o,i.stepdown)){for(let M of m){let y=new ii(M[0]),[_,T]=y.at(0);n.goTo(_,T,Math.max(x,u?u(_,T):x)),n.feed(_,T,x,i.plunge);let C=_c(n,y,0,x,v,i);for(let S=1;S<M.length;S++){let L=y.at(C),E=new ii(M[S]),A=E.nearest(L);if(!tb(L,E.at(A),g)){[_,T]=E.at(A);let w=n.travel?Math.max(x+1,Math.min(a??1/0,n.travel({x:L[0],y:L[1]},{x:_,y:T}))):a??x+1;n.rapid(L[0],L[1],w),n.rapid(_,T,w);let D=Math.max(x,u?u(_,T):x)+1;w>D&&n.rapid(_,T,D),n.feed(_,T,v,i.plunge)}ws(n,E,A,A+E.length,()=>v,i.feed),y=E,C=A}}x=v}n.retract()}function Ip(n,t,e,i,s,o,c){let a=as(Cn(Ve(t,-e),.001),.005);for(let u of a){let f=new ii(u),[p,g]=f.at(0);n.goTo(p,g,s);for(let m of ni(s,o,c))n.feed(p,g,m,i.plunge),ws(n,f,0,f.length,()=>m,i.feed*.9);n.retract()}}function eb(n,t,e,i,s,o,c,a){let u=e?Ve(e,-(i-.05)):null,f=e?Ve(e,-(i+.05)):null,p=g=>!e||br(g,u)&&!br(g,f);for(let g of as(Cn(Ve(t,-(i+.02)),.001),.005)){let m=new ii(g),x=Math.max(8,Math.ceil(m.length/.5)),v=Array.from({length:x},(_,T)=>p(m.at(T/x*m.length)));if(!v.some(Boolean))continue;let M=v.every(Boolean),y=M?0:v.indexOf(!1);for(let _=0;_<x;_++){let T=(y+_)%x;if(!v[T]||!M&&v[(T-1+x)%x])continue;let C=T;for(;C-T<x-1&&v[(C+1)%x];)C++;let S=T/x*m.length,L=M?S+m.length:(C+1)/x*m.length,[E,A]=m.at(S);if(n.goTo(E,A,Math.max(o,a(E,A))),n.feed(E,A,c,s.plunge),ws(n,m,S,L,()=>c,s.feed*.9),n.retract(),M)break}}}function nb(n,t,e){for(let i of t)for(let s of vr(i.loops.map(o=>[o]),n.at).map(o=>o[0])){let o=new ii(s.slice().reverse()),c=Math.max(8,Math.ceil(o.length/.25)),a=Array.from({length:c},(p,g)=>{let m=o.at(g/c*o.length);return!br(m,i.bad)&&(!i.keep||br(m,i.keep))});if(!a.some(Boolean))continue;let u=a.every(Boolean),f=u?0:a.indexOf(!1);for(let p=0;p<c;p++){let g=(f+p)%c;if(!a[g]||!u&&a[(g-1+c)%c])continue;let m=g;for(;m-g<c-1&&a[(m+1)%c];)m++;let x=g/c*o.length,v=u?x+o.length:m/c*o.length;if(!u&&v-x<.5)continue;let[M,y]=o.at(x);for(let _ of ni(i.z,i.z-i.depth,e.stepdown))u?(!n.at||Math.hypot(n.at.x-M,n.at.y-y)>1e-6)&&n.goTo(M,y,i.z):n.goTo(M,y,i.z),n.feed(M,y,_,e.plunge),ws(n,o,x,v,()=>_,e.feed),u||n.retract();if(n.retract(),u)break}}}function ib(n,t,e,i,s,o,c){let a=Cn(os(t,Ve(Ve(t,-i),i)),.01);if(!a.length)return;let u=Ve(a,e+.5);for(let f of as(Cn(Ve(t,-e),.001),.005)){let p=new ii(f),g=Math.max(8,Math.ceil(p.length/.25)),m=Array.from({length:g},(v,M)=>u.some(y=>yi(p.at(M/g*p.length),y)));if(m.every(Boolean)){Ip(n,t,e,s,o,c,s.stepdown);return}let x=m.indexOf(!1);for(let v=0;v<g;v++){let M=(x+v)%g;if(!m[M]||m[(M-1+g)%g])continue;let y=M;for(;m[(y+1)%g]&&y-M<g;)y++;let _=M/g*p.length,T=(y+1)/g*p.length,[C,S]=p.at(_);n.goTo(C,S,o);let L=!0;for(let E of ni(o,c,s.stepdown)){let A=[...p.breaks(_,T),T],w=L?A:[...A.slice(0,-1).reverse(),_],[D,N]=p.at(L?_:T);n.feed(D,N,E,s.plunge);for(let U of w){let[V,k]=p.at(U);n.feed(V,k,E,s.feed)}L=!L}n.retract()}}}function sb(n,t,e,i,s,o){let c=Math.min(i.stepover,e*1.6),a=t.minX-e-2,u=t.maxX+e+2;for(let f of ni(s,o,i.stepdown)){let p=t.minY+e*.6;n.goTo(a,p,s),n.feed(a,p,f,i.plunge);let g=1;for(;n.feed(g>0?u:a,p,f,i.feed),!(p>=t.maxY-e*.6-1e-6);)p=Math.min(p+c,t.maxY-e*.6),n.feed(g>0?u:a,p,f,i.feed),g=-g}n.retract()}function rb(n,t,e,i){let s=t.thread,o=t.tool.cut??t.tool.diameter,c=Math.max(0,(s.major-o)/2),a=s.pitch,u=s.hand==="left"?-1:1,f=72,p=t.centers.slice();for(;p.length;){let g=n.at||p[0],m=0;p.forEach((v,M)=>{Math.hypot(v.x-g.x,v.y-g.y)<Math.hypot(p[m].x-g.x,p[m].y-g.y)&&(m=M)});let[x]=p.splice(m,1);n.goTo(x.x,x.y,t.zTop);for(let v of Cp[i]||Cp.balanced){let M=c*v;n.feed(x.x,x.y,t.zTop,e.plunge),n.feed(x.x,x.y,s.zLow,e.plunge);let y=s.zLow;for(let A=1;A<=f/2;A++){let w=Math.PI+Math.PI*A/(f/2);y=s.zLow+a/4*(A/(f/2)),n.feed(x.x+M/2+M/2*Math.cos(w),x.y+u*(M/2)*Math.sin(w),y,e.feed)}let _=(s.zHigh-y)/a,T=Math.max(1,Math.ceil(_*f)),C=0;for(let A=1;A<=T;A++)C=2*Math.PI*_*A/T,n.feed(x.x+M*Math.cos(C),x.y+u*M*Math.sin(C),y+a*C/(2*Math.PI),e.feed);let S=y+a*_,L=x.x+M/2*Math.cos(C),E=x.y+u*(M/2)*Math.sin(C);for(let A=1;A<=f/2;A++){let w=C+Math.PI*A/(f/2);n.feed(L+M/2*Math.cos(w),E+u*(M/2)*Math.sin(w),Math.min(t.zTop,S+a/4*(A/(f/2))),e.feed)}}n.feed(x.x,x.y,t.zTop,e.feed),n.retract()}}function ob(n,t,e,i,s,o){let c=t.slice();for(;c.length;){let a=n.at||c[0],u=0;c.forEach((x,v)=>{Math.hypot(x.x-a.x,x.y-a.y)<Math.hypot(c[u].x-a.x,c[u].y-a.y)&&(u=v)});let[f]=c.splice(u,1),p=Math.max(0,f.d/2-e),g=Math.max(1,Math.ceil((s-o)/i.stepdown-1e-6)),m=Math.max(12,Math.ceil(2*Math.PI*p/.05));n.goTo(f.x,f.y,s),n.feed(f.x,f.y,s,i.plunge),n.feed(f.x+p,f.y,s,i.feed);for(let x=1;x<=(g+1)*m;x++){let v=2*Math.PI*x/m,M=Math.max(o,s-(s-o)*x/(g*m));n.feed(f.x+p*Math.cos(v),f.y+p*Math.sin(v),M,i.feed)}n.feed(f.x,f.y,o,i.feed),n.retract()}}function ab(n,t,e,i,s,o){let c=Math.max(.5,o*1.5);for(let a of t){n.goTo(a.x,a.y,i);let u=i;for(;u>s+1e-6;){let f=Math.max(s,u-c);u<i&&n.rapid(a.x,a.y,u+.5),n.feed(a.x,a.y,f,e.plunge),n.rapid(a.x,a.y,i+1),u=f}n.retract()}}function Rp(n,t,e,i){let s=Math.max(0,Math.round(t.tabs.count));if(!t.tabs.enabled||!s)return null;let o=t.tabs.length??Oi(t.material).length,c=2*e+o,a=Array.from({length:s},(f,p)=>{let g=(p+.5)/s*n;return[g-c/2,g+c/2]}),u=n;return{top:i+(t.tabs.height??Oi(t.material).height),inside:f=>{let p=(f%u+u)%u;return a.some(([g,m])=>p>g&&p<m)},edges:(f,p)=>{let g=[];for(let m=Math.floor(f/u);m*u<=p;m++)for(let[x,v]of a)for(let M of[x,v]){let y=m*u+M;y>f&&y<p&&g.push(y)}return g}}}function lb(n,t,e,i,s,o,c,a){let u=[{off:e+a,fd:i}];a>0&&u.push({off:e,fd:{...i,feed:Math.round(i.feed*.9)},finish:!0});for(let f of u)for(let p of Di(t).map(g=>g[0])){let g=as(Cn(Ve([p],f.off),.001),.005).filter(m=>mn(m)>0);for(let m of g){let x=new ii(m.slice().reverse()),v=Rp(x.length,c,e,0),[M,y]=x.at(0);n.goTo(M,y,s),n.feed(M,y,s,i.plunge);let _=0,T=s,C=f.finish?ni(s,o,Math.max(i.stepdown,Math.min(6*e,s-o))):ni(s,o,i.stepdown);for(let S of C)_=_c(n,x,_,T,S,f.fd,v),T=S;n.retract()}}}function cb(n,t,e,i,s,o,c,a,u){let f={...c,tabs:{...c.tabs,enabled:!!u}},p=[{off:e+a,fd:i}];a>0&&p.push({off:e,fd:{...i,feed:Math.round(i.feed*.9)},finish:!0});for(let g of p)for(let m of vr(t.map(x=>[mn(x)<0?x.slice().reverse():x]),n.at).map(x=>x[0])){let x=as(Cn(Ve([m],-g.off),.001),.005).filter(v=>mn(v)>0);for(let v of x){let M=new ii(v),y=Rp(M.length,f,e,0),[_,T]=M.at(0);n.goTo(_,T,s),n.feed(_,T,s,i.plunge);let C=0,S=s,L=g.finish?ni(s,o,Math.max(i.stepdown,Math.min(6*e,s-o))):ni(s,o,i.stepdown);for(let E of L)C=_c(n,M,C,S,E,g.fd,y),S=E;n.retract()}}}function hb(n,t,e,i,s){let o=t.slice();for(;o.length;){let c=n.at||{x:o[0].pts[0][0],y:o[0].pts[0][1]},a=0,u=!1,f=1/0;o.forEach((m,x)=>{let v=m.pts[0],M=m.pts[m.pts.length-1],y=Math.hypot(v[0]-c.x,v[1]-c.y),_=m.closed?1/0:Math.hypot(M[0]-c.x,M[1]-c.y);Math.min(y,_)<f&&(f=Math.min(y,_),a=x,u=_<y)});let[p]=o.splice(a,1),g=u?p.pts.slice().reverse():p.pts;if(p.closed){let m=new ii(g[0][0]===g.at(-1)[0]&&g[0][1]===g.at(-1)[1]?g.slice(0,-1):g),[x,v]=m.at(0);n.goTo(x,v,i),n.feed(x,v,i,e.plunge);let M=0,y=i;for(let _ of ni(i,s,e.stepdown))M=_c(n,m,M,y,_,e),y=_}else{let m=g;n.goTo(m[0][0],m[0][1],i);for(let x of ni(i,s,e.stepdown)){n.feed(m[0][0],m[0][1],x,e.plunge);for(let[v,M]of m.slice(1))n.feed(v,M,x,e.feed);m=m.slice().reverse()}}n.retract()}}function ub(n,t,e){let i=t.diameter/2,s=n.cell,o=t.kind==="ball",c=s*Math.SQRT1_2,a=Math.ceil((i+c)/s),u=S=>o?i-Math.sqrt(Math.max(0,i*i-S*S)):0,f=[];for(let S=-a;S<=a;S++)for(let L=-a;L<=a;L++){let E=Math.max(0,Math.hypot(L,S)*s-c);E<=i+1e-9&&f.push(L,S,u(E))}let{nx:p,ny:g,h:m,x0:x,y0:v}=n,M={r:i,c:s,n:a,zFloor:e,x:S=>x+S*s,y:S=>v+S*s};M.drop=(S,L)=>{let E=-1/0;for(let A=0;A<f.length;A+=3){let w=S+f[A],D=L+f[A+1];if(w<0||D<0||w>=p||D>=g)continue;let N=m[D*p+w]-f[A+2];N>E&&(E=N)}return E===-1/0?null:Math.max(E,e)},M.dropAt=(S,L)=>{let E=(S-x)/s,A=(L-v)/s,w=(i+c)/s,D=-1/0;for(let N=Math.max(0,Math.ceil(A-w));N<=Math.min(g-1,Math.floor(A+w));N++)for(let U=Math.max(0,Math.ceil(E-w));U<=Math.min(p-1,Math.floor(E+w));U++){let V=Math.max(0,Math.hypot(U-E,N-A)*s-c);if(V>i)continue;let k=m[N*p+U]-u(V);k>D&&(D=k)}return D===-1/0?null:Math.max(D,e)},M.underAt=(S,L)=>{let E=(S-x)/s,A=(L-v)/s,w=(i+c)/s,D=e;for(let N=Math.max(0,Math.ceil(A-w));N<=Math.min(g-1,Math.floor(A+w));N++)for(let U=Math.max(0,Math.ceil(E-w));U<=Math.min(p-1,Math.floor(E+w));U++)m[N*p+U]>D&&(D=m[N*p+U]);return D};let y=1/0,_=-1,T=1/0,C=-1;for(let S=0;S<g;S++)for(let L=0;L<p;L++)m[S*p+L]!==-1/0&&(L<y&&(y=L),L>_&&(_=L),S<T&&(T=S),S>C&&(C=S));return M.box=_<0?null:{i0:Math.max(0,y-a),i1:Math.min(p-1,_+a),j0:Math.max(0,T-a),j1:Math.min(g-1,C+a)},M}function Lp(n,t,e,i,s,o){let c=e[0],a=n.at;if(a&&!a.r&&Math.hypot(c.x-a.x,c.y-a.y)<=s){let f=Math.max(1,Math.ceil(Math.hypot(c.x-a.x,c.y-a.y)/(t.c/2))),p=Math.max(a.z,c.z),g=!1;for(let m=1;m<f;m++){let x=m/f,v=t.dropAt(a.x+(c.x-a.x)*x,a.y+(c.y-a.y)*x)??t.zFloor;v>a.z+(c.z-a.z)*x+.001&&(g=!0,p=Math.max(p,v))}g&&(n.feed(a.x,a.y,p+.5,i.feed),n.feed(c.x,c.y,p+.5,i.feed)),n.feed(c.x,c.y,c.z,i.plunge)}else n.goTo(c.x,c.y,t.underAt(c.x,c.y)+o),n.feed(c.x,c.y,c.z,i.plunge);let u=c;for(let f of e.slice(1))n.feed(f.x,f.y,f.z,u.z-f.z>fb*Math.hypot(f.x-u.x,f.y-u.y)?i.plunge:i.feed),u=f}function pb(n,t,e,i,s,o,c,a=!0){let u=ub(t,e,o);if(!u.box)return;let{r:f,c:p}=u,{i0:g,i1:m,j0:x,j1:v}=u.box,M=e.kind==="ball"?2*Math.sqrt(Math.max(0,2*f*s-s*s)):i.stepover*.5,y=Math.max(1,Math.floor(Math.min(M,f)/p+1e-9)),_=3*y*p+1e-6,T=[];for(let C=x;C<=v;C+=y)T.push(C);T[T.length-1]!==v&&T.push(v),T.forEach((C,S)=>{let L=[],E=[];for(let A=g;A<=m;A++){let w=u.drop(A,C);if(w===null){E.length&&L.push(E),E=[];continue}E.push({x:u.x(A),y:u.y(C),z:w})}E.length&&L.push(E),S%2&&(L.reverse(),L.forEach(A=>A.reverse()));for(let A of L)Lp(n,u,Np(A,.005),i,_,c)}),a&&mb(n,u,i,Math.min(M,f),_,c),n.retract()}function mb(n,t,e,i,s,o){let{i0:a,i1:u,j0:f,j1:p}=t.box,g=Math.floor((u-a)/2)+1,m=Math.floor((p-f)/2)+1,x=new Float32Array(g*m),v=-1/0;for(let S=0;S<m;S++)for(let L=0;L<g;L++){let E=t.drop(a+L*2,f+S*2);x[S*g+L]=E===null?NaN:E,E!==null&&E>v&&(v=E)}let M=2*t.c,y=db*M,_=S=>t.x(a+S*2),T=S=>t.y(f+S*2),C=new Uint8Array(g*m);for(let S=0;S+1<m;S++)for(let L=0;L+1<g;L++){let E=x[S*g+L],A=x[S*g+L+1],w=x[(S+1)*g+L],D=x[(S+1)*g+L+1];[E,A,w,D].some(Number.isNaN)||(Math.abs(E-A)>y||Math.abs(w-D)>y||Math.abs(E-w)>y||Math.abs(A-D)>y)&&(C[S*g+L]=1)}for(let S=v-i/2;S>t.zFloor+.05;S-=i){let L=new Map,E=[],A=(U,V,k)=>{let z=k?`h${U},${V}`:`v${U},${V}`;if(!L.has(z)){let H=x[V*g+U],G=k?x[V*g+U+1]:x[(V+1)*g+U],$=(S-H)/(G-H);L.set(z,{key:z,x:k?_(U)+$*M:_(U),y:k?T(V):T(V)+$*M,segs:[]})}return L.get(z)};for(let U=0;U+1<m;U++)for(let V=0;V+1<g;V++){if(!C[U*g+V])continue;let k=x[U*g+V]>S,z=x[U*g+V+1]>S,H=x[(U+1)*g+V]>S,G=x[(U+1)*g+V+1]>S,$=[];k!==z&&$.push(A(V,U,!0)),z!==G&&$.push(A(V+1,U,!1)),H!==G&&$.push(A(V,U+1,!0)),k!==H&&$.push(A(V,U,!1));for(let it=0;it+1<$.length;it+=2){let K=[$[it],$[it+1]];E.push(K),K[0].segs.push(K),K[1].segs.push(K)}}let w=new Set,D=[];for(let U of E){if(w.has(U))continue;w.add(U);let V=[U[0],U[1]];for(let k of[!1,!0])for(;;){let z=k?V[0]:V[V.length-1],H=z.segs.find($=>!w.has($));if(!H)break;w.add(H);let G=H[0]===z?H[1]:H[0];k?V.unshift(G):V.push(G)}V.length>=3&&D.push(V)}let N=n.at;for(;D.length;){let U=0,V=1/0,k=!1;D.forEach((G,$)=>{for(let[it,K]of[[G[0],!1],[G[G.length-1],!0]]){let st=N?Math.hypot(it.x-N.x,it.y-N.y):0;st<V&&(V=st,U=$,k=K)}});let[z]=D.splice(U,1);k&&z.reverse();let H=z.map(G=>({x:G.x,y:G.y,z:Math.max(S,t.dropAt(G.x,G.y)??S)}));Lp(n,t,Np(H,.005),e,s,o),N=n.at}}}function Np(n,t){if(n.length<3)return n;let e=new Uint8Array(n.length);e[0]=e[n.length-1]=1;let i=[[0,n.length-1]];for(;i.length;){let[s,o]=i.pop(),c=n[s],a=n[o],u=a.x-c.x,f=a.y-c.y,p=a.z-c.z,g=u*u+f*f+p*p,m=-1,x=t;for(let v=s+1;v<o;v++){let M=n[v],y=g>0?((M.x-c.x)*u+(M.y-c.y)*f+(M.z-c.z)*p)/g:0,_=Math.hypot(c.x+u*y-M.x,c.y+f*y-M.y,c.z+p*y-M.z);_>x&&(x=_,m=v)}m>=0&&(e[m]=1,i.push([s,m],[m,o]))}return n.filter((s,o)=>e[o])}function gb(n){let t=[],e=[];n.forEach((i,s)=>{let o=[];for(let c of Di(i.region)){let a=Wr([c[0]]),u=[...new Set(t.filter(p=>p.b.minX<a.maxX&&a.minX<p.b.maxX&&p.b.minY<a.maxY&&a.minY<p.b.maxY&&Xr(na(p.last,c))>0).map(p=>p.spot))],f=u[0]||{parts:[]};u.length||e.push(f);for(let p of u.slice(1)){f.parts.push(...p.parts),e=e.filter(g=>g!==p);for(let g of[...t,...o])g.spot===p&&(g.spot=f)}f.parts.push({k:s,area:c}),o.push({k:s,b:a,last:c,spot:f})}t.length=0,t.push(...o)});for(let i of e)i.parts.sort((s,o)=>s.k-o.k);return e.map(i=>Object.assign([...i.parts[0].area],{parts:i.parts}))}function vr(n,t){let e=c=>{let a=Wr([c[0]]);return[(a.minX+a.maxX)/2,(a.minY+a.maxY)/2]},i=n.map(c=>({a:c,m:e(c)})),s=[],o=t?[t.x,t.y]:i[0]?.m;for(;i.length;){let c=0;for(let u=1;u<i.length;u++)Math.hypot(i[u].m[0]-o[0],i[u].m[1]-o[1])<Math.hypot(i[c].m[0]-o[0],i[c].m[1]-o[1])&&(c=u);let[a]=i.splice(c,1);s.push(a.a),o=a.m}return s}function xb(n,t,e,i,s,o){let c=[...new Set(n.map(u=>u.z))].sort((u,f)=>f-u),a=o;for(let u of c){if(u<t-1e-6||!br([i,s],yb(n,u,e)))break;a=u}return Math.max(a,t)}function yb(n,t,e){let i=n.filter(a=>Math.abs(a.z-t)<1e-6);n.inner||=new Map;let s=`${t}|${e}`,o=n.inner.get(s);if(o&&o.n===i.length)return o.loops;let c=Ve(_i(i.flatMap(a=>a.area)),-e-jv);return n.inner.set(s,{n:i.length,loops:c}),c}function Dp(n){let t=n.stock.top+Zv,e=[],i=null,s=(vi[n.job.finish]||vi.balanced).allowance,c=n.ops.some(a=>a.kind==="face"&&a.enabled)?n.analysis.top:n.stock.top;for(let a of n.ops){let u=new vu(t),f=a.kind!=="face"&&a.zTop>=n.analysis.top-1e-6?Math.max(a.zTop,c):a.zTop,p=a.tool.diameter/2,g=a.feeds,m=Math.min(a.tool.fluteLength||1/0,3*a.tool.diameter);switch(a.kind){case"face":sb(u,n.stock,p,g,f,a.zBottom);break;case"hole":if(a.bore){ob(u,a.centers,p,g,f,a.zBottom);break}case"pocket":case"step":for(let x of vr(Di(a.region),u.at))yc(u,x,p,g,f,a.zBottom,s),s>0&&Ip(u,x,p,g,f,a.zBottom,m);break;case"corners":{let x=n.ops.find(v=>v.id===a.after);ib(u,a.region,p,x?x.tool.diameter/2:p*2,g,f,a.zBottom);break}case"rough3d":case"rest3d":{let x=a.kind==="rough3d"?a.allowance:0,v=M=>(y,_)=>xb(e,a.layers[M].zFrom,p,y,_,f);if(i||=new bu(n.stock,c),u.travel=(M,y)=>i.over(M,y,p),a.kind==="rest3d"){for(let M of vr(gb(a.layers),u.at))for(let{k:y,area:_}of M.parts){let T=a.layers[y],C=T.zFrom>=n.analysis.top-1e-6?f:T.zFrom;yc(u,_,p,g,C,T.z,0,f+1,v(y));let S=Ve(Ve(_,-p),p);S.length&&a.enabled&&(e.push({zFrom:C,z:T.z,area:S}),i.layer(S,C,T.z))}u.travel=null,u.retract();break}a.layers.forEach((M,y)=>{let _=M.zFrom>=n.analysis.top-1e-6?f:M.zFrom;for(let C of vr(Di(M.region),u.at))yc(u,C,p,g,_,M.z,x,f+1,v(y));for(let C of vr(Di(M.fresh||[]),u.at))yc(u,C,p,g,f,M.z,x,f+1);x>0&&y&&eb(u,M.exact||M.region,a.layers[y-1].exact||a.layers[y-1].region,p,g,_,M.z,v(y));let T=Ve(Ve([...M.region,...M.fresh||[]],-(p+x)),p);T.length&&a.enabled&&(e.push({zFrom:_,z:M.z,area:T}),i.layer(T,_,M.z))}),u.travel=null,u.retract();break}case"finish3d":pb(u,a.surface,a.tool,g,a.ridge,0,a.left??Jv,a.steep!==!1);break;case"drill":ab(u,a.centers,g,f,a.zBottom,a.tool.diameter);break;case"thread":rb(u,a,g,n.job.finish);break;case"cutout":lb(u,a.region,p,g,f,a.zBottom,n.job,s);break;case"inside":cb(u,a.loops,p,g,f,a.zBottom,n.job,s,a.tabs);break;case"online":hb(u,a.lines,g,f,a.zBottom);break;case"chamfer":nb(u,a.levels.map(x=>x.z>=n.analysis.top-1e-6?{...x,z:x.z+c-n.analysis.top}:x),g);break}a.moves=u.moves}return n}var Zv,Jv,jv,vu,ii,Cp,fb,db,bu,Op=fe(()=>{Yr();$r();Zv=3,Jv=3.5,jv=.02;vu=class{constructor(t){this.moves=[],this.clearZ=t,this.at=null,this.travel=null}rapid(t,e,i){this.push({r:!0,x:t,y:e,z:i})}feed(t,e,i,s){this.push({x:t,y:e,z:i,f:s})}push(t){let e=this.at;e&&Math.abs(e.x-t.x)<1e-6&&Math.abs(e.y-t.y)<1e-6&&Math.abs(e.z-t.z)<1e-6||(this.moves.push(t),this.at=t)}goTo(t,e,i){let s=this.at,o=this.clearZ;s&&this.travel&&(o=Math.min(o,Math.max(this.travel(s,{x:t,y:e}),s.z,i+1))),s&&this.rapid(s.x,s.y,o),this.rapid(t,e,o),this.rapid(t,e,i+1)}retract(){this.at&&!this.travel&&this.rapid(this.at.x,this.at.y,this.clearZ)}},ii=class{constructor(t){this.p=t,this.s=[0];for(let e=1;e<=t.length;e++){let i=t[e-1],s=t[e%t.length];this.s.push(this.s[e-1]+Math.hypot(s[0]-i[0],s[1]-i[1]))}this.length=this.s[t.length]}at(t){let e=this.length,i=(t%e+e)%e,s=1;for(;s<this.s.length-1&&this.s[s]<i;)s++;let o=this.p[s-1],c=this.p[s%this.p.length],a=this.s[s]-this.s[s-1]||1,u=(i-this.s[s-1])/a;return[o[0]+(c[0]-o[0])*u,o[1]+(c[1]-o[1])*u]}breaks(t,e){let i=[],s=this.length;for(let o=Math.floor(t/s);o*s<=e;o++)for(let c=0;c<this.p.length;c++){let a=o*s+this.s[c];a>t+1e-9&&a<e-1e-9&&i.push(a)}return i}nearest([t,e]){let i=0,s=1/0;for(let o=0;o<this.p.length;o++){let c=(this.p[o][0]-t)**2+(this.p[o][1]-e)**2;c<s&&(s=c,i=this.s[o])}return i}};Cp={fast:[.6,1],balanced:[.5,.8,1,1],smooth:[.4,.65,.85,1,1]};fb=Math.tan(70*Math.PI/180);db=Math.tan(50*Math.PI/180);bu=class{constructor(t,e){this.c=1,this.x0=t.minX,this.y0=t.minY,this.nx=Math.ceil((t.maxX-t.minX)/this.c)+1,this.ny=Math.ceil((t.maxY-t.minY)/this.c)+1,this.top=new Float32Array(this.nx*this.ny).fill(e)}layer(t,e,i){let{c:s,x0:o,y0:c,nx:a,ny:u,top:f}=this,p=Ve(t,-(s*Math.SQRT1_2+.02));for(let g=0;g<u;g++){let m=c+g*s,x=[];for(let v of p)for(let M=0;M<v.length;M++){let[y,_]=v[M],[T,C]=v[(M+1)%v.length];_<=m!=C<=m&&x.push(y+(m-_)/(C-_)*(T-y))}x.sort((v,M)=>v-M);for(let v=0;v+1<x.length;v+=2)for(let M=Math.max(0,Math.ceil((x[v]-o)/s));M<=Math.min(a-1,Math.floor((x[v+1]-o)/s));M++){let y=g*a+M;f[y]<=e+1e-6&&i<f[y]&&(f[y]=i)}}}over(t,e,i){let{c:s,x0:o,y0:c,nx:a,ny:u,top:f}=this,p=(i+1.5*s)/s,g=Math.max(1,Math.ceil(Math.hypot(e.x-t.x,e.y-t.y)/(s/2))),m=-1/0;for(let x=0;x<=g;x++){let v=(t.x+(e.x-t.x)*x/g-o)/s,M=(t.y+(e.y-t.y)*x/g-c)/s;for(let y=Math.max(0,Math.ceil(M-p));y<=Math.min(u-1,Math.floor(M+p));y++)for(let _=Math.max(0,Math.ceil(v-p));_<=Math.min(a-1,Math.floor(v+p));_++)(_-v)**2+(y-M)**2<=p*p&&f[y*a+_]>m&&(m=f[y*a+_])}return m+1}}});function Fp(n,t={}){let{name:e="part",numbering:i="slot",safeZHeightMm:s=null,spindleDelay:o=3}=t,c=Number.isFinite(s)?`G53 G0 Z${is(s)}`:"G53 G0 Z0",a=n.zero,u=n.stock,f=[Mr(`ncCAM: ${e}`),Mr(`Stock ${is(u.width)} x ${is(u.depth)} x ${is(u.thickness)} mm, ${(ls[n.job.material]||{}).name||n.job.material}, ${(vi[n.job.finish]||{}).name||n.job.finish}`),Mr(`Zero: X Y at the ${vb[n.job.zero.xy]||n.job.zero.xy}, Z on ${n.job.zero.z==="bed"?"the bed":"top of the stock"}`)],p=n.ops.filter(M=>M.enabled&&M.moves&&M.moves.length);for(let M of[...new Map(p.map(y=>[y.tool.id,y.tool])).values()])f.push(Mr(`T${cs(M,i)}: ${M.name}, ${is(M.diameter)} mm`));f.push("G21 G90 G94 G17");let g=null,m={},x=null,v=null;for(let M of p){(!g||M.tool.id!==g.id)&&(g&&f.push("M5"),f.push(c,`M6 T${cs(M.tool,i)}`,Mr(M.tool.name)),g=M.tool,f.push(`M3 S${M.feeds.rpm}`),o>0&&f.push(`G4 P${o}`),m={},x=null,v=null),f.push(Mr(`${M.label}${M.detail?": "+M.detail:""}`));for(let y of M.moves){let _=is(y.x-a.x),T=is(y.y-a.y),C=is(y.z-a.z);if(y.r&&(_!==m.x||T!==m.y)&&C!==m.z){let A=m.z===void 0||+C<+m.z?[`X${_} Y${T}`,`Z${C}`]:[`Z${C}`,`X${_} Y${T}`];for(let w of A)f.push(`${v==="G0"?"":"G0 "}${w}`),v="G0";m={x:_,y:T,z:C};continue}let S=y.r?"G0":"G1",L=S===v?"":S;_!==m.x&&(L+=` X${_}`),T!==m.y&&(L+=` Y${T}`),C!==m.z&&(L+=` Z${C}`),!y.r&&y.f!==x&&(L+=` F${Math.round(y.f)}`,x=y.f),L=L.trim(),!(!L||L===S)&&(f.push(L),v=S,m={x:_,y:T,z:C})}}return f.push("M5",c,"M30",""),f.join(`
`)}function Up(n,{maxRapid:t=5e3,spindleDelay:e=3,toolChange:i=30}={}){let s=0,o=null,c=null;for(let a of n.ops){if(!a.enabled||!a.moves)continue;(!c||a.tool.id!==c.id)&&(s+=e+(c?i:0),c=a.tool);let u=0;for(let f of a.moves){if(o){let p=Math.hypot(f.x-o.x,f.y-o.y,f.z-o.z);u+=p/(f.r?t:f.f)*60}o=f}a.seconds=u,s+=u}return s}var is,_b,Mr,vb,Bp=fe(()=>{$r();is=n=>{let t=(Math.round(n*1e3)/1e3).toFixed(3).replace(/\.?0+$/,"");return t==="-0"?"0":t},_b={"\xD7":"x","\xB7":"-",\u00D8:"D","\xB0":" deg","\u2019":"'","\u2026":"..."},Mr=n=>`(${String(n).replace(/\(/g,"[").replace(/\)/g,"]").replace(/[^\x20-\x7e]/g,t=>_b[t]??"")})`,vb={"back-left":"back left corner","back-center":"back edge, middle","back-right":"back right corner","left-center":"left edge, middle",center:"center","right-center":"right edge, middle","front-left":"front left corner","front-center":"front edge, middle","front-right":"front right corner"}});function Mu(n,t){let e=(n.kind==="threadmill"?n.neck:n.diameter)/2,i=Math.ceil(e/t),s=[];for(let c=-i;c<=i;c++)for(let a=-i;a<=i;a++){let u=Math.hypot(a,c)*t;if(u>e+1e-6)continue;let f=Math.min(u,e),p=0;if(n.kind==="ball")p=e-Math.sqrt(Math.max(0,e*e-f*f));else if(n.kind==="vbit"||n.kind==="chamfer"||n.kind==="drill"){let g=(n.angle||(n.kind==="drill"?118:90))*Math.PI/360;p=f/Math.tan(g)}s.push(a,c,p,u)}let o=Float32Array.from(s);return o.inner=Math.max(0,e-t*Math.SQRT1_2),o}function bb(n,t,e,i,s,o){let c=Math.hypot(i.x-e.x,i.y-e.y),a=Math.max(1,Math.ceil(c/(n.cell*.5))),u=!1;for(let f=s?0:1;f<=a;f++){let p=f/a,g=(e.x+(i.x-e.x)*p-n.x0)/n.cell,m=(e.y+(i.y-e.y)*p-n.y0)/n.cell,x=e.z+(i.z-e.z)*p;if(x>=n.top)continue;let v=Math.round(g),M=Math.round(m);for(let y=0;y<t.length;y+=4){let _=v+t[y],T=M+t[y+1];if(_<0||T<0||_>=n.nx||T>=n.ny)continue;let C=T*n.nx+_,S=x+t[y+2];if(n.h[C]>S+1e-4){if(s){n.h[C]>S+.05&&t[y+3]<=t.inner&&(u=!0);continue}n.h[C]=S,n.op[C]=o+1}}}return u}function kp(n){let t=n.nx*n.ny;return n.sx=new Float32Array(t),n.sy=new Float32Array(t),n.wx=new Float32Array(t),n.wy=new Float32Array(t),n.gap=new Float32Array(t).fill(1/0),n.deep=new Float32Array(t).fill(-1/0),n}function Su(n,t,e,i,s){let o=(t.kind==="threadmill"?t.neck:t.diameter)/2,c=n.cell,a=o/c,u=t.kind==="ball"?k=>o-Math.sqrt(Math.max(0,o*o-k*k)):t.kind==="vbit"||t.kind==="chamfer"||t.kind==="drill"?(k=>z=>z/k)(Math.tan((t.angle||(t.kind==="drill"?118:90))*Math.PI/360)):()=>0,f=!t.kind||t.kind==="flat"||t.kind==="surfacing"||t.kind==="threadmill",{h:p,sx:g,sy:m,wx:x,wy:v,gap:M,deep:y,nx:_,ny:T}=n,C=1.5*c,S=a+1.5,L=(k,z,H,G)=>{let $=Math.hypot(z,H);if($>S)return;let it=$*c;if(it<=o){let K=G+u(it);if(p[k]>K+1e-4)p[k]=K,n.op[k]=s+1,M[k]=1/0,y[k]=-1/0;else if(p[k]<K-1e-4)return;o-it>y[k]&&(y[k]=o-it,f&&o-it<C&&$>1e-6?(g[k]=z/$*(o-it),m[k]=H/$*(o-it),x[k]=-z/$,v[k]=-H/$):(g[k]=0,m[k]=0,x[k]=0,v[k]=0))}else f&&p[k]>G+1e-4&&it-o<M[k]&&(M[k]=it-o,g[k]=z/$*(o-it),m[k]=H/$*(o-it),x[k]=-z/$,v[k]=-H/$)},E=(e.x-n.x0)/c,A=(e.y-n.y0)/c,w=(i.x-n.x0)/c,D=(i.y-n.y0)/c;if(Math.abs(i.z-e.z)<1e-9){if(e.z>=n.top)return;let k=w-E,z=D-A,H=k*k+z*z,G=Math.max(0,Math.floor(Math.min(E,w)-S)),$=Math.min(_-1,Math.ceil(Math.max(E,w)+S)),it=Math.max(0,Math.floor(Math.min(A,D)-S)),K=Math.min(T-1,Math.ceil(Math.max(A,D)+S));for(let st=it;st<=K;st++)for(let ht=G;ht<=$;ht++){let Rt=H>0?Math.max(0,Math.min(1,((ht-E)*k+(st-A)*z)/H)):0;L(st*_+ht,ht-(E+k*Rt),st-(A+z*Rt),e.z)}return}let N=Math.hypot(i.x-e.x,i.y-e.y),U=Math.max(1,Math.ceil(N/(c*.5))),V=Math.ceil(S);for(let k=1;k<=U;k++){let z=k/U,H=E+(w-E)*z,G=A+(D-A)*z,$=e.z+(i.z-e.z)*z;if($>=n.top)continue;let it=Math.max(0,Math.floor(H-V)),K=Math.min(_-1,Math.ceil(H+V)),st=Math.max(0,Math.floor(G-V)),ht=Math.min(T-1,Math.ceil(G+V));for(let Rt=st;Rt<=ht;Rt++)for(let zt=it;zt<=K;zt++)L(Rt*_+zt,zt-H,Rt-G,$)}}function zp(n,t){let e=new Ii(n.stock,t||Ii.cellFor(n.stock)),i=[];return n.ops.forEach((s,o)=>{if(!s.enabled||!s.moves)return;let c=Mu(s.tool,e.cell),a=null;for(let u of s.moves)a&&bb(e,c,a,u,!!u.r,o)&&i.push({op:s.id,at:u}),a=u}),{hm:e,collisions:i}}var Ii,Vp=fe(()=>{Ii=class{constructor(t,e){this.cell=e,this.x0=t.minX,this.y0=t.minY,this.nx=Math.max(2,Math.ceil((t.maxX-t.minX)/e)+1),this.ny=Math.max(2,Math.ceil((t.maxY-t.minY)/e)+1),this.h=new Float32Array(this.nx*this.ny).fill(t.top),this.op=new Uint8Array(this.nx*this.ny),this.top=t.top,this.bottom=t.bottom}static cellFor(t,e=600*600){let i=(t.maxX-t.minX)*(t.maxY-t.minY);return Math.max(.1,Math.sqrt(i/e))}}});var vc=fe(()=>{Er();Bu();hf();df();pf();Af();Pp();Op();Bp();Vp();$r();Hc();Yr()});function Sb(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function wb(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function Eb(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Wp),this.state=Oe.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:let t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function Tb(n){let t;switch(n.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case Ji.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=Oe.DOLLY;break;case Ji.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=Oe.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=Oe.ROTATE}break;case Ji.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=Oe.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=Oe.PAN}break;default:this.state=Oe.NONE}this.state!==Oe.NONE&&this.dispatchEvent(Tu)}function Ab(n){switch(this.state){case Oe.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case Oe.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case Oe.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function Pb(n){this.enabled===!1||this.enableZoom===!1||this.state!==Oe.NONE||(n.preventDefault(),this.dispatchEvent(Tu),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent(Wp))}function Cb(n){this.enabled!==!1&&this._handleKeyDown(n)}function Ib(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case ji.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(n),this.state=Oe.TOUCH_ROTATE;break;case ji.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(n),this.state=Oe.TOUCH_PAN;break;default:this.state=Oe.NONE}break;case 2:switch(this.touches.TWO){case ji.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=Oe.TOUCH_DOLLY_PAN;break;case ji.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=Oe.TOUCH_DOLLY_ROTATE;break;default:this.state=Oe.NONE}break;default:this.state=Oe.NONE}this.state!==Oe.NONE&&this.dispatchEvent(Tu)}function Rb(n){switch(this._trackPointer(n),this.state){case Oe.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case Oe.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case Oe.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case Oe.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=Oe.NONE}}function Lb(n){this.enabled!==!1&&n.preventDefault()}function Nb(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Db(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}var Gp,Tu,Wp,bc,Xp,Mb,an,Ln,Oe,Eu,Mc,Yp=fe(()=>{Wo();Gp={type:"change"},Tu={type:"start"},Wp={type:"end"},bc=new Gi,Xp=new On,Mb=Math.cos(70*Kh.DEG2RAD),an=new q,Ln=2*Math.PI,Oe={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Eu=1e-6,Mc=class extends Lo{constructor(t,e=null){super(t,e),this.state=Oe.NONE,this.target=new q,this.cursor=new q,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Ji.ROTATE,MIDDLE:Ji.DOLLY,RIGHT:Ji.PAN},this.touches={ONE:ji.ROTATE,TWO:ji.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new q,this._lastQuaternion=new Fn,this._lastTargetPosition=new q,this._quat=new Fn().setFromUnitVectors(t.up,new q(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new ur,this._sphericalDelta=new ur,this._scale=1,this._panOffset=new q,this._rotateStart=new Zt,this._rotateEnd=new Zt,this._rotateDelta=new Zt,this._panStart=new Zt,this._panEnd=new Zt,this._panDelta=new Zt,this._dollyStart=new Zt,this._dollyEnd=new Zt,this._dollyDelta=new Zt,this._dollyDirection=new q,this._mouse=new Zt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=wb.bind(this),this._onPointerDown=Sb.bind(this),this._onPointerUp=Eb.bind(this),this._onContextMenu=Lb.bind(this),this._onMouseWheel=Pb.bind(this),this._onKeyDown=Cb.bind(this),this._onTouchStart=Ib.bind(this),this._onTouchMove=Rb.bind(this),this._onMouseDown=Tb.bind(this),this._onMouseMove=Ab.bind(this),this._interceptControlDown=Nb.bind(this),this._interceptControlUp=Db.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(t){this._cursorStyle=t,t==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.state=Oe.NONE,this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents();let t=this.domElement.getRootNode();t.removeEventListener("keydown",this._interceptControlDown,{capture:!0}),t.removeEventListener("keyup",this._interceptControlUp,{capture:!0}),this._controlActive=!1,this._pointers.length=0,this._pointerPositions={},this.domElement.style.touchAction="",this.domElement.style.cursor="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Gp),this.update(),this.state=Oe.NONE}pan(t,e){this._pan(t,e),this.update()}dollyIn(t){this._dollyIn(t),this.update()}dollyOut(t){this._dollyOut(t),this.update()}rotateLeft(t){this._rotateLeft(t),this.update()}rotateUp(t){this._rotateUp(t),this.update()}update(t=null){let e=this.object.position;an.copy(e).sub(this.target),an.applyQuaternion(this._quat),this._spherical.setFromVector3(an),this.autoRotate&&this.state===Oe.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(i)&&isFinite(s)&&(i<-Math.PI?i+=Ln:i>Math.PI&&(i-=Ln),s<-Math.PI?s+=Ln:s>Math.PI&&(s-=Ln),i<=s?this._spherical.theta=Math.max(i,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+s)/2?Math.max(i,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let o=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let c=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),o=c!=this._spherical.radius}if(an.setFromSpherical(this._spherical),an.applyQuaternion(this._quatInverse),e.copy(this.target).add(an),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let c=null;if(this.object.isPerspectiveCamera){let a=an.length();c=this._clampDistance(a*this._scale);let u=a-c;this.object.position.addScaledVector(this._dollyDirection,u),this.object.updateMatrixWorld(),o=!!u}else if(this.object.isOrthographicCamera){let a=new q(this._mouse.x,this._mouse.y,0);a.unproject(this.object);let u=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),o=u!==this.object.zoom;let f=new q(this._mouse.x,this._mouse.y,0);f.unproject(this.object),this.object.position.sub(f).add(a),this.object.updateMatrixWorld(),c=an.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;c!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(c).add(this.object.position):(bc.origin.copy(this.object.position),bc.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(bc.direction))<Mb?this.object.lookAt(this.target):(Xp.setFromNormalAndCoplanarPoint(this.object.up,this.target),bc.intersectPlane(Xp,this.target))))}else if(this.object.isOrthographicCamera){let c=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),c!==this.object.zoom&&(this.object.updateProjectionMatrix(),o=!0)}return this._scale=1,this._performCursorZoom=!1,o||this._lastPosition.distanceToSquared(this.object.position)>Eu||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Eu||this._lastTargetPosition.distanceToSquared(this.target)>Eu?(this.dispatchEvent(Gp),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?Ln/60*this.autoRotateSpeed*t:Ln/60/60*this.autoRotateSpeed}_getZoomScale(t){let e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){an.setFromMatrixColumn(e,0),an.multiplyScalar(-t),this._panOffset.add(an)}_panUp(t,e){this.screenSpacePanning===!0?an.setFromMatrixColumn(e,1):(an.setFromMatrixColumn(e,0),an.crossVectors(this.object.up,an)),an.multiplyScalar(t),this._panOffset.add(an)}_pan(t,e){let i=this.domElement;if(this.object.isPerspectiveCamera){let s=this.object.position;an.copy(s).sub(this.target);let o=an.length();o*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*o/i.clientHeight,this.object.matrix),this._panUp(2*e*o/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let i=this.domElement.getBoundingClientRect(),s=t-i.left,o=e-i.top,c=i.width,a=i.height;this._mouse.x=s/c*2-1,this._mouse.y=-(o/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let e=this.domElement;this._rotateLeft(Ln*this._rotateDelta.x/e.clientHeight),this._rotateUp(Ln*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(Ln*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-Ln*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(Ln*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-Ln*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._rotateStart.set(i,s)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panStart.set(i,s)}}_handleTouchStartDolly(t){let e=this._getSecondPointerPosition(t),i=t.pageX-e.x,s=t.pageY-e.y,o=Math.sqrt(i*i+s*s);this._dollyStart.set(0,o)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{let i=this._getSecondPointerPosition(t),s=.5*(t.pageX+i.x),o=.5*(t.pageY+i.y);this._rotateEnd.set(s,o)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let e=this.domElement;this._rotateLeft(Ln*this._rotateDelta.x/e.clientHeight),this._rotateUp(Ln*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panEnd.set(i,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){let e=this._getSecondPointerPosition(t),i=t.pageX-e.x,s=t.pageY-e.y,o=Math.sqrt(i*i+s*s);this._dollyEnd.set(0,o),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let c=(t.pageX+e.x)*.5,a=(t.pageY+e.y)*.5;this._updateZoomParameters(c,a)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new Zt,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){let e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){let e=t.deltaMode,i={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}});function $p(n,t,e,i){n.onBeforeCompile=s=>{s.uniforms.uCut={value:t-.05},s.uniforms.uBase={value:i||new se(1,1,1)},s.uniforms.uBottom={value:t},s.vertexShader=`varying float vZ;
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
diffuseColor.rgb = mix(diffuseColor.rgb, uBase, onWall);`).replace("#include <normal_fragment_begin>",pe.normal_fragment_begin.replace("gl_FrontFacing ? 1.0 : - 1.0","1.0")+`
if (onWall > 0.0) normal = normalize(mix(normal, (viewMatrix * vec4(normalize(vWall.xy), 0.0, 0.0)).xyz, onWall));`))},n.customProgramCacheKey=()=>`through-${e}`}function qp(n,t,e){let i=document.createElement("canvas");i.width=256,i.height=128;let s=i.getContext("2d");s.font="600 84px Inter, system-ui, sans-serif",s.fillStyle="#"+new se(t).getHexString(),s.textAlign="center",s.textBaseline="middle",s.fillText(n,128,64);let o=new xo(i);o.colorSpace=wn;let c=new mo(new sr({map:o,depthTest:!1,transparent:!0}));return c.scale.set(e*2,e,1),c.renderOrder=6,c}var Xn,Sr,Ob,Sc,Zp=fe(()=>{Wo();Yp();Xn={face:"#93a2b4",pocket:"#1abc9c",hole:"#4ea1ff",drill:"#4ea1ff",step:"#2ecc71",corners:"#48d1b4",cutout:"#a78bfa",rough3d:"#f5a524",rest3d:"#e3c341",finish3d:"#ff7a59",chamfer:"#f472b6",thread:"#c084fc",inside:"#4ea1ff",online:"#f5a524"},Sr={softwood:"#d8b38a",hardwood:"#9c6b45",mdf:"#b59672",plastic:"#d9e2ea",aluminum:"#b9c1c9",foam:"#c7b8a5"};Ob=(n,t)=>n.some(e=>e.key===t);Sc=class{constructor(){this.el=document.createElement("div"),this.el.className="ncc-viewport",this.renderer=new mc({antialias:!0,alpha:!0}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),this.el.appendChild(this.renderer.domElement),this.scene=new ho,this.camera=new yn(35,1,.1,1e4),this.camera.up.set(0,0,1),this.controls=new Mc(this.camera,this.renderer.domElement),this.controls.enableDamping=!0,this.controls.dampingFactor=.12,this.controls.addEventListener("start",()=>{this.userMoved=!0}),this.scene.add(new Po(16777215,4478310,1.6));let t=new hr(16777215,1.6);t.position.set(-.6,-1,1.6),this.scene.add(t);let e=new hr(16777215,.5);e.position.set(1,.6,.4),this.scene.add(e),this.content=new Hn,this.scene.add(this.content),this.onFrame=null,this.alive=!0,this.resize=new ResizeObserver(()=>this.fit()),this.resize.observe(this.el);let i=s=>{if(this.alive){if(!this.el.isConnected&&this.detachedSince&&s-this.detachedSince>3e3&&!document.querySelector(".ncc-wrapper")){this.dispose();return}this.el.isConnected?this.detachedSince=0:this.detachedSince||=s,this.onFrame&&this.onFrame(s),this.controls.update(),this.el.isConnected&&this.renderer.render(this.scene,this.camera),requestAnimationFrame(i)}};requestAnimationFrame(i),this.setupPicking()}fit(){let t=this.el.clientWidth,e=this.el.clientHeight;!t||!e||(this.renderer.setSize(t,e,!1),this.camera.aspect=t/e,this.camera.updateProjectionMatrix(),this.userMoved||this.refit())}clear(){for(let t of[...this.content.children])this.content.remove(t),t.traverse(e=>{e.geometry?.dispose(),e.material&&[].concat(e.material).forEach(i=>i.dispose())});this.pickMesh=null,this.markers=null}frame(t,e,i=.08){this.fitBox=[t,e,i],this.userMoved=!1,this.refit()}refit(){if(!this.fitBox)return;let[t,e,i]=this.fitBox,s=new q((t[0]+e[0])/2,(t[1]+e[1])/2,(t[2]+e[2])/2),o=Math.max(e[0]-t[0],e[1]-t[1],e[2]-t[2],.001),c=new q(-.45,-.8,.75).normalize(),a=[];for(let g of[t[0],e[0]])for(let m of[t[1],e[1]])for(let x of[t[2],e[2]])a.push(new q(g,m,x));let u=s.clone(),f=o*2,p=()=>{this.camera.position.copy(u).addScaledVector(c,f),this.camera.near=f/100,this.camera.far=f*100,this.camera.lookAt(u),this.camera.updateMatrixWorld(),this.camera.updateProjectionMatrix()};for(let g=0;g<8;g++){p();let m=1/0,x=-1/0,v=1/0,M=-1/0;for(let L of a){let E=L.clone().project(this.camera);m=Math.min(m,E.x),x=Math.max(x,E.x),v=Math.min(v,E.y),M=Math.max(M,E.y)}let y=Math.max((x-m)/2,(M-v)/2);if(!(y>0))break;let _=f*Math.tan(this.camera.fov*Math.PI/360),T=_*this.camera.aspect,C=new q().setFromMatrixColumn(this.camera.matrixWorld,0),S=new q().setFromMatrixColumn(this.camera.matrixWorld,1);u.addScaledVector(C,(m+x)/2*T).addScaledVector(S,(v+M)/2*_),f*=y/(1-i)}p(),this.controls.target.copy(u),this.controls.update()}showPart(t,e=[]){this.clear();let i=new Ge;i.setAttribute("position",new ke(t.positions,3)),i.setIndex(new ke(t.indices,1)),i.computeVertexNormals();let s=new Ce(i,new kn({color:9348283,metalness:.15,roughness:.55,side:_n,polygonOffset:!0,polygonOffsetFactor:1,polygonOffsetUnits:1}));this.content.add(s),this.pickMesh=s;let o=new xs(new ar(i,25),new jn({color:2832972,transparent:!0,opacity:.55}));this.content.add(o);for(let a of e)this.addLoops(a.loops,a.z,a.color,a.dashed,a.opacity);i.computeBoundingBox();let c=i.boundingBox;this.keepCamera||this.frame(c.min.toArray(),c.max.toArray())}addLoops(t,e,i,s,o=.95){for(let c of t){let a=c.map(([g,m])=>new q(g,m,e)),u=new Ge().setFromPoints([...a,a[0]]),f=s?new Eo({color:i,dashSize:2,gapSize:1.5,transparent:!0,opacity:o,depthTest:!1}):new jn({color:i,transparent:!0,opacity:o,depthTest:!1}),p=new gs(u,f);s&&p.computeLineDistances(),p.renderOrder=2,this.content.add(p)}}setupPicking(){let t=this.renderer.domElement,e=null;t.addEventListener("pointerdown",i=>{e=[i.clientX,i.clientY]}),t.addEventListener("pointerup",i=>{if(!e||Math.hypot(i.clientX-e[0],i.clientY-e[1])>4)return;let s=t.getBoundingClientRect(),o=new Io;if(o.setFromCamera(new Zt((i.clientX-s.left)/s.width*2-1,-((i.clientY-s.top)/s.height)*2+1),this.camera),this.markers?.length&&this.onMarker){let u=o.intersectObjects(this.markers)[0];if(u?.object.userData.axis){this.onAxis?.(u.object.userData.axis);return}if(u){this.onMarker(u.object.userData.key);return}}if(!this.pickMesh||!this.onPick)return;let c=o.intersectObject(this.pickMesh)[0];if(!c||!c.face)return;let a=c.face.normal.clone();a.dot(o.ray.direction)>0&&a.negate(),this.onPick([a.x,a.y,a.z])})}showZero({stock:t,part:e,points:i,selected:s,zFace:o,color:c,accent:a="#4c6ef5"}){this.clear();let u=t.maxX-t.minX,f=t.maxY-t.minY,p=t.top-t.bottom,g=Math.max(u,f,p),m=new Wi(u,f,p);m.translate((t.minX+t.maxX)/2,(t.minY+t.maxY)/2,(t.top+t.bottom)/2);let x=new Ce(m,new kn({color:c,transparent:!0,opacity:.45,roughness:.9,depthWrite:!1}));if(x.renderOrder=2,this.content.add(x),this.content.add(new xs(new ar(m),new jn({color:new se(c).multiplyScalar(.6)}))),e){let _=new Ge;_.setAttribute("position",new ke(e.positions,3)),_.setIndex(new ke(e.indices,1)),_.computeVertexNormals(),this.partMesh=new Ce(_,new kn({color:9348283,metalness:.15,roughness:.55})),this.content.add(this.partMesh)}else this.partMesh=null;let v=o==="bed"?t.bottom:t.top,M=g*.014;this.markers=[];for(let _ of i){let T=_.key===s,C=new Ce(new Yi(T?M*1.3:M,24,16),new Un({color:T?a:16777215}));if(C.position.set(_.x,_.y,v),C.userData.key=_.key,C.renderOrder=4,C.material.depthTest=!1,!T){let L=new Ce(new Yi(M*1.25,24,16),new Un({color:6187893,depthTest:!1}));L.renderOrder=3,C.add(L)}let S=new Ce(new Yi(M*3.5,12,8),new Un({visible:!1}));if(S.userData.key=_.key,C.add(S),this.markers.push(S),this.content.add(C),T){let L=new Ce(new wo(M*1.6,M*2,40),new Un({color:a,transparent:!0,depthTest:!1,side:_n}));L.position.copy(C.position),L.renderOrder=4,this.content.add(L),this.pulse=L;let E=g*.24;for(let[A,w,D]of[[[1,0,0],15158332,"X"],[[0,1,0],3066993,"Y"],[[0,0,1],5147903,"Z"]]){let N=new Ro(new q(...A),C.position,E,w,E*.15,E*.065);N.line.visible=!1;let U=new Ce(new di(g*.0028,g*.0028,E*.86,12),new Un({color:w,depthTest:!1}));U.position.y=E*.43,U.renderOrder=5,N.add(U),N.cone.material.depthTest=!1,N.renderOrder=5,N.cone.renderOrder=5,this.content.add(N);let V=qp(D,w,g*.05);V.position.copy(C.position).add(new q(...A).multiplyScalar(E*1.18)),this.content.add(V);let k=new Ce(new di(E*.1,E*.1,E*1.3,10),new Un({visible:!1}));k.quaternion.setFromUnitVectors(new q(0,1,0),new q(...A)),k.position.copy(C.position).add(new q(...A).multiplyScalar(E*.65)),k.userData.axis=D.toLowerCase(),this.content.add(k),this.markers.unshift(k)}}}let y=qp("Front",9675444,g*.04);y.position.set((t.minX+t.maxX)/2,t.minY-g*.08,t.bottom),this.content.add(y),this.keepCamera||this.frame([t.minX,t.minY,t.bottom],[t.maxX,t.maxY,t.top]),Ob(i,s)||(this.pulse=null),this.onFrame=_=>{if(!this.pulse)return;let T=_%1600/1600;this.pulse.scale.setScalar(1+T*1.6),this.pulse.material.opacity=.8*(1-T),this.pulse.lookAt(this.camera.position)}}spin(t,e=700){let i=this.partMesh;if(!i)return Promise.resolve();i.geometry.computeBoundingBox();let s=i.geometry.boundingBox.getCenter(new q),o=t==="x"?new q(1,0,0):new q(0,0,1);i.matrixAutoUpdate=!1;let c=performance.now();return new Promise(a=>{let u=f=>{let p=Math.min(1,(f-c)/e),g=p<.5?2*p*p:1-(-2*p+2)**2/2;i.matrix.makeTranslation(s.x,s.y,s.z).multiply(new De().makeRotationAxis(o,Math.PI*g)).multiply(new De().makeTranslation(-s.x,-s.y,-s.z)),i.matrixWorldNeedsUpdate=!0,p<1&&i.parent?requestAnimationFrame(u):a()};requestAnimationFrame(u)})}showStock(t,e,i){this.clear(),this.keepCamera=!1;let s=t.nx,o=t.ny,c=s*o,a=new Float32Array(c*3),u=new Float32Array(c*3),f=new se(e);for(let T=0;T<o;T++)for(let C=0;C<s;C++){let S=T*s+C;a[S*3]=t.x0+C*t.cell,a[S*3+1]=t.y0+T*t.cell,a[S*3+2]=t.h[S],u[S*3]=f.r,u[S*3+1]=f.g,u[S*3+2]=f.b}let p=new Uint32Array((s-1)*(o-1)*6),g=0;for(let T=0;T<o-1;T++)for(let C=0;C<s-1;C++){let S=T*s+C,L=S+1,E=S+s,A=E+1;p[g++]=S,p[g++]=L,p[g++]=A,p[g++]=S,p[g++]=A,p[g++]=E}let m=new Ge;m.setAttribute("position",new ke(a,3).setUsage(bs)),m.setAttribute("color",new ke(u,3).setUsage(bs));let x=new Float32Array(c*3);for(let T=0;T<c;T++)x[T*3+2]=1;m.setAttribute("normal",new ke(x,3).setUsage(bs));let v=new Float32Array(c*4);for(let T=0;T<c;T++)v[T*4+2]=t.h[T],v[T*4+3]=t.h[T];m.setAttribute("wall",new ke(v,4).setUsage(bs)),m.setIndex(new ke(p,1));let M=new kn({vertexColors:!0,flatShading:!1,roughness:.8,metalness:e===Sr.aluminum?.5:.05,side:_n});$p(M,t.bottom,!1,f);let y=new Ce(m,M);this.content.add(y),this.stock={hm:t,geo:m,base:f,sides:this.makeSides(t,f)};let _=new kn({color:f.clone().multiplyScalar(.7),roughness:.9,side:_n});if($p(_,t.bottom,!0),this.content.add(new Ce(m,_)),i){let T=new Ge;T.setAttribute("position",new ke(i.positions,3)),T.setIndex(new ke(i.indices,1)),T.computeVertexNormals(),this.partGhost=new Ce(T,new kn({color:5153279,transparent:!0,opacity:.25,depthWrite:!1})),this.partGhost.visible=!1,this.content.add(this.partGhost)}this.tool=new Hn,this.content.add(this.tool),this.frame([t.x0,t.y0,t.bottom],[t.x0+(s-1)*t.cell,t.y0+(o-1)*t.cell,t.top])}makeSides(t,e){let i=[];for(let g=0;g<t.nx;g++)i.push(g);for(let g=1;g<t.ny;g++)i.push(g*t.nx+t.nx-1);for(let g=t.nx-2;g>=0;g--)i.push((t.ny-1)*t.nx+g);for(let g=t.ny-2;g>=0;g--)i.push(g*t.nx);let s=new Float32Array(i.length*6),o=new Float32Array(i.length*6),c=[],a=[[0,-1],[1,0],[0,1],[-1,0]],u=[t.nx,t.nx+t.ny-1,2*t.nx+t.ny-2];for(let g=0;g<i.length;g++){let m=i[g],x=t.x0+m%t.nx*t.cell,v=t.y0+Math.floor(m/t.nx)*t.cell;s.set([x,v,t.h[m],x,v,t.bottom],g*6);let[M,y]=a[g<u[0]?0:g<u[1]?1:g<u[2]?2:3];if(o.set([M,y,0,M,y,0],g*6),g<i.length-1){let _=g*2;c.push(_,_+1,_+3,_,_+3,_+2)}}let f=new Ge;f.setAttribute("position",new ke(s,3).setUsage(bs)),f.setAttribute("normal",new ke(o,3)),f.setIndex(c);let p=new Ce(f,new kn({color:e.clone().multiplyScalar(.85),roughness:.85,side:_n}));return this.content.add(p),{g:f,edge:i}}refreshStock(t,e,i){let s=this.stock;if(!s||e<t)return;let{hm:o,geo:c,base:a}=s,u=o.nx,f=o.ny,p=o.h,g=c.attributes.position,m=c.attributes.color,x=c.attributes.normal,v=c.attributes.wall,M=new se,y=Math.max(0,t),_=Math.min(f-1,e),T=o.cell*1.5,C=(w,D,N)=>{let U=p[D*u+w],V=0;for(let k=-1;k<=1;k++)for(let z=-1;z<=1;z++){let H=w+z,G=D+k;(z||k)&&H>=0&&G>=0&&H<u&&G<f&&(V=Math.max(V,N*(p[G*u+H]-U)))}return V};for(let w=y;w<=_;w++)for(let D=0;D<u;D++){let N=w*u+D;g.array[N*3]=o.x0+D*o.cell+(o.sx?o.sx[N]:0),g.array[N*3+1]=o.y0+w*o.cell+(o.sy?o.sy[N]:0),g.array[N*3+2]=p[N];let U=o.op[N];U?(M.copy(a).lerp(i[U-1],.28),M.multiplyScalar(.82+.18*Math.max(0,Math.min(1,(p[N]-o.bottom)/Math.max(1,o.top-o.bottom))))):M.copy(a),m.array[N*3]=M.r,m.array[N*3+1]=M.g,m.array[N*3+2]=M.b}let S=g.array,L=Math.max(0,y-1),E=Math.min(f-1,_+1);for(let w=L;w<=E;w++)for(let D=0;D<u;D++){let N=w*u+D,U=v.array,V=C(D,w,1),k=C(D,w,-1);if(U[N*4]=0,U[N*4+1]=0,U[N*4+2]=p[N],U[N*4+3]=p[N],o.wx&&(o.wx[N]||o.wy[N])&&(V>T||k>T)){U[N*4]=o.wx[N],U[N*4+1]=o.wy[N],U[N*4+2]=p[N]-k,U[N*4+3]=p[N]+V,x.array[N*3]=0,x.array[N*3+1]=0,x.array[N*3+2]=1;continue}let z=(w*u+Math.max(0,D-1))*3,H=(w*u+Math.min(u-1,D+1))*3,G=(Math.max(0,w-1)*u+D)*3,$=(Math.min(f-1,w+1)*u+D)*3,it=S[H]-S[z],K=S[H+1]-S[z+1],st=S[H+2]-S[z+2],ht=S[$]-S[G],Rt=S[$+1]-S[G+1],zt=S[$+2]-S[G+2],de=K*zt-st*Rt,he=st*ht-it*zt,me=it*Rt-K*ht,ft=Math.hypot(de,he,me)||1;me<0&&(de=-de,he=-he,me=-me),x.array[N*3]=de/ft,x.array[N*3+1]=he/ft,x.array[N*3+2]=me/ft}g.addUpdateRange(y*u*3,(_-y+1)*u*3),m.addUpdateRange(y*u*3,(_-y+1)*u*3),x.addUpdateRange(L*u*3,(E-L+1)*u*3),v.addUpdateRange(L*u*4,(E-L+1)*u*4),g.needsUpdate=!0,m.needsUpdate=!0,x.needsUpdate=!0,v.needsUpdate=!0;let A=s.sides.g.attributes.position;s.sides.edge.forEach((w,D)=>{A.array[D*6+2]=p[w]}),A.needsUpdate=!0}setTool(t,e){for(let g of[...this.tool.children])this.tool.remove(g),g.traverse(m=>{m.geometry?.dispose(),m.material?.dispose()});let i=t.diameter/2,s=t.kind==="surfacing"||i>6.35,o=s?Math.max(e+1,Math.min(8,i*.5)):Math.max(t.fluteLength||0,Math.min(25,Math.max(e+3,t.diameter*2))),c=new kn({color:14015457,metalness:.85,roughness:.3}),a;if(t.kind==="vbit"||t.kind==="chamfer"||t.kind==="drill"){let g=i/Math.tan((t.angle||(t.kind==="drill"?118:90))*Math.PI/360);a=new Ce(new or(i,g,48),c),a.rotation.x=-Math.PI/2,a.position.z=g/2}else if(t.kind==="ball"){a=new Hn;let g=new Ce(new di(i,i,o-i,64),c);g.rotation.x=Math.PI/2,g.position.z=i+(o-i)/2;let m=new Ce(new Yi(i,48,24,0,Math.PI*2,Math.PI/2,Math.PI/2),c);m.rotation.x=Math.PI/2,m.position.z=i,a.add(g,m)}else a=new Ce(new di(i,i,o,64),c),a.rotation.x=Math.PI/2,a.position.z=o/2;let u=s?3.175:Math.max(i,Math.min(3.175,i*1.5)),f=20,p=new Ce(new di(u,u,f,32),new kn({color:11187132,metalness:.8,roughness:.35}));p.rotation.x=Math.PI/2,p.position.z=o+f/2,this.tool.add(a,p)}moveTool(t,e,i){this.tool.position.set(t,e,i)}showPaths(t){this.paths&&(this.content.remove(this.paths),this.paths.traverse(e=>{e.geometry?.dispose(),e.material?.dispose()})),this.paths=new Hn;for(let e of t){let i=e.track;if(!i)continue;let s=[],o=[];for(let a=4;a<i.length;a+=4)(i[a+3]>0?s:o).push(i[a-4],i[a-3],i[a-2]+.02,i[a],i[a+1],i[a+2]+.02);let c=(a,u,f)=>{if(!a.length)return;let p=new Ge;p.setAttribute("position",new ze(a,3));let g=new xs(p,new jn({color:u,transparent:!0,opacity:f}));g.renderOrder=3,this.paths.add(g)};c(s,Xn[e.kind]||"#1abc9c",.75),c(o,"#93a2b4",.3)}this.content.add(this.paths)}dispose(){this.alive=!1,this.resize.disconnect(),this.clear(),this.controls.dispose(),this.renderer.dispose()}}});function Ub(){return new Promise((n,t)=>{let e=indexedDB.open(Fb,1);e.onupgradeneeded=()=>e.result.createObjectStore("kv"),e.onsuccess=()=>n(e.result),e.onerror=()=>t(e.error)})}async function Pu(n,t){let e=await Ub();return new Promise((i,s)=>{let o=e.transaction("kv",n),c=t(o.objectStore("kv"));o.oncomplete=()=>{e.close(),i(c?.result)},o.onerror=o.onabort=()=>{e.close(),s(o.error)}})}function Bb(n){let t=new Uint8Array(n),e=2166136261;for(let i=0;i<t.length;i++)e^=t[i],e=Math.imul(e,16777619);return(e>>>0).toString(36)}async function Jp(){let n=await Yo("recent");if(Array.isArray(n))return n;let t=await Yo("last");if(!t?.bytes)return[];let e=Ec(t.name,t.bytes);await $o(`part:${e}`,t);let i=[{key:e,name:t.name,size:t.bytes.byteLength,savedAt:t.savedAt||Date.now()}];return await $o("recent",i),await wc("last"),i}async function jp(n,t,e=Ec(n.name,n.bytes)){await $o(`part:${e}`,n);let i=kb(n.name,n.bytes);t.some(o=>o.key===i)&&await wc(`part:${i}`);let s=[{key:e,name:n.name,size:n.bytes.byteLength,savedAt:n.savedAt},...t.filter(o=>o.key!==e&&o.key!==i)];for(let o of s.slice(Au))await wc(`part:${o.key}`);return await $o("recent",s.slice(0,Au)),s.slice(0,Au)}async function Cu(n,t){await wc(`part:${n}`);let e=t.filter(i=>i.key!==n);return await $o("recent",e),e}var Fb,Yo,$o,wc,Au,Ec,kb,Kp=fe(()=>{Fb="nccam";Yo=n=>Pu("readonly",t=>t.get(n)).catch(()=>null),$o=(n,t)=>Pu("readwrite",e=>e.put(t,n)).catch(()=>{}),wc=n=>Pu("readwrite",t=>t.delete(n)).catch(()=>{}),Au=10,Ec=(n,t)=>`${n}|${t.byteLength}|${Bb(t)}`;kb=(n,t)=>`${n}|${t.byteLength}`});function Qp(n){let t=/^\s*([-+]?[\d.]+(?:e[-+]?\d+)?)\s*([a-z%]*)\s*$/i.exec(n||"");if(!t||t[2]==="%")return null;let e=Vb[t[2].toLowerCase()];return e?{mm:+t[1]*e,user:+t[1]}:null}function tm(n){let t=/rgba?\(\s*(\d+)[, ]+(\d+)[, ]+(\d+)(?:[,/ ]+([\d.]+%?))?/.exec(n||"");return!t||t[4]!==void 0&&parseFloat(t[4])===0?null:"#"+[t[1],t[2],t[3]].map(e=>(+e).toString(16).padStart(2,"0")).join("")}function em(n){let t=new DOMParser().parseFromString(n,"image/svg+xml");if(t.querySelector("parsererror")||t.documentElement.nodeName.toLowerCase()!=="svg")throw new Error("This SVG could not be read. Save it again as plain SVG.");let e=t.documentElement,i=(e.getAttribute("viewBox")||"").trim().split(/[\s,]+/).map(Number),s=i.length===4&&i.every(Number.isFinite)&&i[2]>0&&i[3]>0,o=Qp(e.getAttribute("width")),c=Qp(e.getAttribute("height")),a=s?i[2]:o?.user??0,u=s?i[3]:c?.user??0,f=o&&s?o.mm/i[2]:c&&s?c.mm/i[3]:o?o.mm/o.user:25.4/96,p=o&&/[a-z]+$/i.exec(e.getAttribute("width"))?.[0]||"px",g=document.createElement("div");g.style.cssText="position:absolute;left:-100000px;top:0;width:0;height:0;overflow:hidden;opacity:0;pointer-events:none";let m=document.importNode(e,!0);s?(m.setAttribute("width",String(i[2])),m.setAttribute("height",String(i[3])),m.setAttribute("preserveAspectRatio","none")):(a&&m.setAttribute("width",String(a)),u&&m.setAttribute("height",String(u))),g.appendChild(m),document.body.appendChild(g);let x=[],v={},M=y=>{v[y]=(v[y]||0)+1};try{Xb(m);let y=s?i[3]:u||m.getBBox().height,_=m.querySelectorAll("path, rect, circle, ellipse, line, polyline, polygon, text, image");for(let T of _){if(T.closest(Hb))continue;let C=getComputedStyle(T);if(C.display==="none"||C.visibility==="hidden")continue;let S=T.nodeName.toLowerCase();if(S==="text"){M("text");continue}if(S==="image"){M("image");continue}let L=C.stroke!=="none"&&parseFloat(C.strokeOpacity)!==0?tm(C.stroke):null,E=C.fill!=="none"&&parseFloat(C.fillOpacity)!==0?tm(C.fill):null;if(!L&&!E)continue;let A=T.getCTM();if(!A)continue;let w=Gb(T);for(let D of Wb(T,S)){let N=D.pts.map(([V,k])=>[(A.a*V+A.c*k+A.e)*f,(y-(A.b*V+A.d*k+A.f))*f]),U=ss(N,D.closed);U.length<2||x.push({pts:U,closed:D.closed&&U.length>2,color:L||E,layer:w,filled:!!E})}}}finally{g.remove()}return{shapes:x,units:p,skipped:v}}function Gb(n){for(let t=n.parentElement;t&&t.nodeName.toLowerCase()!=="svg";t=t.parentElement)if(t.getAttribute("inkscape:groupmode")==="layer")return t.getAttribute("inkscape:label")||t.id||"";return""}function Xb(n){for(let t=0;t<6;t++){let e=n.querySelectorAll("use");if(!e.length)return;for(let i of e){let s=i.getAttribute("href")||i.getAttributeNS("http://www.w3.org/1999/xlink","href")||"",o=s.startsWith("#")?n.querySelector(`[id="${CSS.escape(s.slice(1))}"]`):null,c=document.createElementNS("http://www.w3.org/2000/svg","g");for(let f of i.attributes)["href","xlink:href","x","y","width","height","transform"].includes(f.name)||c.setAttribute(f.name,f.value);let a=parseFloat(i.getAttribute("x"))||0,u=parseFloat(i.getAttribute("y"))||0;if(c.setAttribute("transform",`${i.getAttribute("transform")||""} translate(${a} ${u})`),o&&!o.contains(i)){let f=o.nodeName.toLowerCase()==="symbol"?Object.assign(document.createElementNS("http://www.w3.org/2000/svg","g"),{innerHTML:o.innerHTML}):o.cloneNode(!0);f.removeAttribute("id"),c.appendChild(f)}i.replaceWith(c)}}}function Wb(n,t){switch(t){case"path":try{return Lc(n.getAttribute("d"))}catch{return[]}case"line":return[{pts:[[un(n,"x1"),un(n,"y1")],[un(n,"x2"),un(n,"y2")]],closed:!1}];case"polyline":case"polygon":{let e=(n.getAttribute("points")||"").trim().split(/[\s,]+/).map(Number),i=[];for(let s=0;s+1<e.length;s+=2)i.push([e[s],e[s+1]]);return t==="polygon"&&i.length>2&&i.push(i[0].slice()),i.length>1?[{pts:i,closed:t==="polygon"}]:[]}case"circle":{let e=un(n,"r");return e>0?[{pts:Jo(un(n,"cx"),un(n,"cy"),e),closed:!0}]:[]}case"ellipse":{let e=un(n,"rx"),i=un(n,"ry");if(!(e>0&&i>0))return[];let s=jo(un(n,"cx"),un(n,"cy"),e,0,i/e);return s[s.length-1]=s[0].slice(),[{pts:s,closed:!0}]}case"rect":{let e=un(n,"x"),i=un(n,"y"),s=un(n,"width"),o=un(n,"height");if(!(s>0&&o>0))return[];let c=n.hasAttribute("rx")?un(n,"rx"):un(n,"ry"),a=n.hasAttribute("ry")?un(n,"ry"):c;if(c=Math.min(c,s/2),a=Math.min(a,o/2),!(c>0))return[{pts:[[e,i],[e+s,i],[e+s,i+o],[e,i+o],[e,i]],closed:!0}];let u=Math.max(c,a),f=(g,m,x)=>Cs(0,0,u,x,x+Math.PI/2,!0).map(([v,M])=>[g+v/u*c,m+M/u*a]),p=[...f(e+s-c,i+o-a,0),...f(e+c,i+o-a,Math.PI/2),...f(e+c,i+a,Math.PI),...f(e+s-c,i+a,Math.PI*1.5)];return p.push(p[0].slice()),[{pts:p,closed:!0}]}}return[]}var Vb,Hb,un,nm=fe(()=>{vc();Vb={mm:1,cm:10,in:25.4,pt:25.4/72,pc:25.4/6,px:25.4/96,"":25.4/96},Hb="defs, clipPath, mask, symbol, marker, pattern, metadata, title, desc";un=(n,t)=>parseFloat(n.getAttribute(t))||0});function sm(n){return im||=(async()=>{let t=async o=>{let c=await fetch(n.file(`lib/${o}`));if(!c.ok)throw new Error(`lib/${o}: ${c.status}`);return URL.createObjectURL(new Blob([await c.text()],{type:"text/javascript"}))},[e,i]=await Promise.all([t("pdf.min.mjs"),t("pdf.worker.min.mjs")]),s=await import(e);return s.GlobalWorkerOptions.workerSrc=i,s})().catch(t=>{throw im=null,t})}var im,rm=fe(()=>{im=null});var om={};Ru(om,{mountApp:()=>$b});function $b(n,t,e){let i={get:async B=>{let W=await fetch(t.base+B);if(!W.ok)throw new Error(`${B}: ${W.status}`);return W.json()},post:(B,W)=>fetch(t.base+B,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(W)})},s={step:1,maxStep:1,fileName:"",loading:"",error:"",up:"top",analysis:null,part:null,scale:null,rot:null,lock:!0,fileSize:null,meshKind:null,tools:[],numbering:"slot",safeZ:null,connected:!1,units:"mm",limits:{},travel:null,job:null,plan:null,planning:!1,result:null,simChecks:null,toast:"",recent:[],partKey:null,raw:null,a:null,groups:[],sel:new Set,info:null},o=new Sc,c=B=>!!B.toolNumber&&(!s.slots||B.toolNumber<=s.slots),a=(B,W)=>Mn.num(B,s.units,W),u=(B,W)=>Mn.len(B,s.units,W),f=0;(async()=>{let[B,W,nt,ct]=await Promise.all([i.get("/api/settings").catch(()=>({})),i.get("/api/tools").catch(()=>[]),i.get("/api/firmware").catch(()=>null),i.get("/api/server-state").catch(()=>null)]);s.units=Mn.unitsFrom(B?.unitsPreference),s.numbering=B?.tool?.numbering==="toolId"?"toolId":"slot",s.slots=Math.max(0,Number(B?.tool?.count)||0);let et=B?.tool?.probe?Number(B?.tool?.probeToolNumber)||99:null,pt=Number(B?.safeZHeight);s.safeZ=Number.isFinite(pt)?pt:null,s.tools=yf(Array.isArray(W)?W:W?.tools),s.numbering=xf(s.numbering,s.tools,s.slots,et);let kt=nt?.settings||{},ee=xt=>{let Xt=parseFloat(kt[xt]?.value);return Number.isFinite(Xt)&&Xt>0?Xt:null};s.limits={maxRpm:ee("30")||void 0,minRpm:ee("31")||void 0,maxFeed:Math.min(ee("110")||1/0,ee("111")||1/0,1/0)},Number.isFinite(s.limits.maxFeed)||delete s.limits.maxFeed,s.maxRapid=Math.min(ee("110")||5e3,ee("111")||5e3),ee("130")&&ee("131")&&(s.travel={x:ee("130"),y:ee("131"),z:ee("132")}),s.connected=!!ct?.machineState?.connected,k(),s.recent=await Jp(),s.recent.length&&!s.a&&!s.loading&&D(s.recent[0].key)})();let p=0,g=/\.(dxf|svg|pdf|ai)$/i;async function m(B,W=null){if(!B&&!W)return;let nt=++p,ct=()=>nt!==p,et=W?W.name:B.name;if(!g.test(et)){s.error=/\.(step|stp|stl|3mf)$/i.test(et)?"That\u2019s a 3D part: open it in ncCAM. ncCut2D reads drawings: DXF, SVG, PDF or AI.":"Open a DXF, SVG, PDF or AI drawing.",k();return}s.fileName=et,s.loading=`Reading ${et}\u2026`,s.error="",s.plan=null,s.result=null,s.a=null,s.part=null,s.sel=new Set,s.step=1,s.maxStep=1,k();try{let pt=W?W.bytes:await B.arrayBuffer();if(ct())return;let kt=Ec(et,pt);if(!W&&s.recent.some(Ae=>Ae.key===kt)){let Ae=await Yo(`part:${kt}`);if(ct())return;Ae?.bytes&&N(Ae.bytes,pt)&&(W={...Ae,bytes:pt})}let ee=et.split(".").pop().toLowerCase(),xt;if(ee==="dxf"?xt=Oc(new TextDecoder().decode(pt)):ee==="svg"?xt=em(new TextDecoder().decode(pt)):xt=await Fc(new Uint8Array(pt.slice(0)),await sm(t)),ct())return;let Xt=Uu(xt.shapes);if(!Xt.shapes.length)throw new Error("No lines or shapes were found in this drawing. Text must be converted to curves (outlines) first.");let Kt=Object.entries(xt.skipped||{}).filter(([,Ae])=>Ae>0).map(([Ae,Ke])=>`${Ke} ${Ae}`);if(s.info={units:xt.units,notes:Kt.length?`Not drawn: ${Kt.join(", ")} (convert text and hatches to curves to cut them).`:""},s.raw=Xt.shapes,s.bytes=pt.slice(0),s.partKey=kt,s.scale=W?.scale||1,await x(W?.job),ct())return;w()}catch(pt){if(ct())return;s.error=pt.message||String(pt),s.fileName="",s.a=null}s.loading="",k()}async function x(B){let W=s.scale===1?s.raw:Fu(s.raw,[s.scale,0,0,s.scale,0,0]);s.a=la(W),s.groups=Gc(s.a),await e("load",{shapes:W});let nt=Ef(s.a,null);s.job=B?{...nt,...B,stock:{...nt.stock,...B.stock,...B.stock?.fit!==!1?{width:nt.stock.width,depth:nt.stock.depth}:{}},groups:B.groups||{},shapes:B.shapes||{}}:nt;for(let ct of Object.keys(s.job.shapes))+ct>=s.a.shapes.length&&delete s.job.shapes[ct];s.sel=new Set([...s.sel].filter(ct=>ct<s.a.shapes.length)),await y()}let v=Promise.resolve();function M(B){return v=v.then(async()=>{s.loading="Resizing the drawing\u2026",k();try{s.scale=B,s.result=null,s.maxStep=Math.min(s.maxStep,3),await x(s.job),w()}catch(W){s.error=W.message||String(W)}s.loading="",k()}),v}async function y(B=!1){if(!s.a||!(s.job?.stock.thickness>0)){s.plan=null,s.part=null,k();return}let W=++f;s.planning=!0,B&&(s.result=null),k();let nt=performance.now();try{let ct=await e("plan",{tools:s.tools,job:{...s.job,units:s.units},limits:s.limits,paths:B,gcodeOptions:{name:s.fileName,numbering:s.numbering,safeZHeightMm:s.safeZ},timing:{maxRapid:s.maxRapid||5e3}});if(W!==f)return;s.slow=C(performance.now()-nt,B)??(B?null:s.slow),s.plan=ct.plan,s.part=ct.part,w(),B&&(s.result=ct,s.simChecks=null)}catch(ct){W===f&&(s.error=ct.message||String(ct))}W===f&&(s.planning=!1,k())}let _={plan:6e3,paths:15e3,tip:5e3},T=()=>{let B=/aarch64|arm64|armv\d|raspberry/i.test(navigator.userAgent||"")||(navigator.hardwareConcurrency||8)<=4,W=/^(localhost|127\.|\[?::1)/.test(location.hostname||"localhost")||!/^https?:$/.test(location.protocol);return B&&W};function C(B,W){return!T()||B<(W?_.paths:_.plan)?null:`${W?"Making the toolpaths":"Planning"} took ${Math.round(B/1e3)} s on this small computer. ncCut2D runs in the browser that shows it: open ncSender in a browser on a laptop or desktop (this machine's address, port 8090) and it works there, usually several times faster. Programs still save to this machine.`}function S(B,W=""){return`<div class="ncc-busy" ${W?`style="${W}"`:""}><div class="ncc-busy-in"><div class="ncc-busy-row"><span class="ncc-spin"></span>${le(B)}<span class="ncc-elapsed" data-elapsed></span></div>
      <div class="ncc-busy-tip" data-slowtip hidden>Slow for your parts? Open ncSender in a browser on a laptop or desktop (this machine's address, port 8090): ncCut2D works there, usually several times faster.</div></div></div>`}let L=null,E=setInterval(()=>{if(!n.isConnected){clearInterval(E);return}if(!(s.loading||s.planning||s.result&&!s.simChecks&&s.step===4)){L=null;return}L??=performance.now();let W=performance.now()-L,nt=Math.floor(W/1e3);n.querySelectorAll("[data-elapsed]").forEach(ct=>{ct.textContent=nt>=2?` ${nt} s`:""}),W>=_.tip&&T()&&n.querySelectorAll("[data-slowtip]").forEach(ct=>{ct.hidden=!1})},500),A=null;function w(){if(!s.bytes||!s.job)return;clearTimeout(A);let B={name:s.fileName,bytes:s.bytes,job:s.job,scale:s.scale,savedAt:Date.now()},W=s.partKey,nt=s.recent[0]?.key!==W;A=setTimeout(async()=>{s.recent=await jp(B,s.recent,W),nt&&k()},400)}async function D(B){let W=await Yo(`part:${B}`);if(W?.bytes)return m(null,W);s.recent=await Cu(B,s.recent),s.error="That drawing is no longer kept in this browser.",k()}function N(B,W){if(B.byteLength!==W.byteLength)return!1;let nt=new Uint8Array(B),ct=new Uint8Array(W);for(let et=0;et<nt.length;et++)if(nt[et]!==ct[et])return!1;return!0}function U(){let B=s.bytes?s.partKey:null;return s.recent.filter(W=>W.key!==B)}function V(B){let W=(Date.now()-B)/864e5;return W<1?"today":W<2?"yesterday":W<30?`${Math.floor(W)} days ago`:new Date(B).toLocaleDateString()}function k(){if(!n.isConnected)return;let B=n.querySelector("[data-keep-scroll]"),W=B?B.scrollTop:0,nt=s.step,ct=[s.a?"Give the stock\u2019s thickness, then choose how each kind of shape is cut and how deep.":"Drop a drawing. ncCut2D groups alike shapes so you choose each kind once.","Pick the material. ncCAM sets the speeds, feeds and depth of each pass.","Tools are picked from your Tool Library. Change any of them, or just continue.","Watch the cut play through. When it looks right, load it."][nt-1],et=[s.a?"What to cut":"Open your drawing","What are you cutting it from?","Here\u2019s the plan",s.simChecks&&!s.simChecks.ok?"Check the warnings":"Ready to cut"][nt-1];n.innerHTML=`
      <nav class="ncc-rail" aria-label="Steps">
        <div class="ncc-rail-head"><div class="ncc-eyebrow">Plugin</div><div class="ncc-rail-title">ncCut2D<span class="ncc-beta">Beta</span></div><div class="ncc-rail-sub">DXF, SVG, PDF or AI to G-code</div></div>
        <div class="ncc-steps">${Yb.map((ee,xt)=>{let Xt=xt+1,Kt=Xt===nt?"on":Xt<s.maxStep||Xt<nt?"done":"";return`<button class="ncc-step ${Kt}" type="button" data-go="${Xt}" ${Xt<=s.maxStep?"":"disabled"}><span class="ncc-num">${Kt==="done"?"\u2713":Xt}</span>${le(ee)}</button>`}).join("")}</div>
        <button class="ncc-close" type="button" data-act="close">${$e.close}Close</button>
      </nav>
      <section class="ncc-main">
        <div class="ncc-top">
          <div><h1>${le(et)}</h1><p class="ncc-lede">${le(ct)}</p></div>
          <div class="ncc-conn"><span class="ncc-dot ${s.connected?"ok":""}"></span>${s.connected?"Connected":"Not connected"}</div>
        </div>
        <div class="ncc-body ${nt===3?"fixed":""}">${[$,Ot,ln,j][nt-1]()}</div>
        <div class="ncc-foot">${z()}</div>
      </section>
      ${s.toast?`<div class="ncc-toast" role="status">${le(s.toast)}</div>`:""}`;let pt=n.querySelector("[data-keep-scroll]");pt&&(pt.scrollTop=W);let kt=n.querySelector("[data-viewer]");if(kt){kt.replaceWith(o.el);let ee=s.loading||nt===4&&!s.result?S(s.loading||"Making toolpaths\u2026"):"";o.el.querySelectorAll(".ncc-busy, .ncc-overlay").forEach(xt=>xt.remove()),o.el.insertAdjacentHTML("beforeend",(nt===4?tt():"")+ee),o.fit(),nt===2&&Je(),nt===3&&Fe(),nt===4&&s.result&&dt()}}function z(){let B=`<button class="ncc-back" type="button" data-go="${s.step-1}" ${s.step>1?"":"disabled"}>Back</button>`;if(s.step===1){let nt=s.a?s.job?.stock.thickness>0?s.plan&&!s.plan.ops.length?"Nothing is set to be cut.":"":"Give the stock\u2019s thickness first.":"";return`${B}${nt?`<span class="ncc-foot-note">${nt}</span>`:""}<button class="ncc-next" type="button" data-go="2" ${s.plan&&s.plan.ops.length&&!s.loading&&!s.planning?"":"disabled"}>Next: Stock ${$e.next}</button>`}if(s.step===2)return`${B}<button class="ncc-next" type="button" data-go="3">Next: Operations ${$e.next}</button>`;if(s.step===3){let nt=s.plan&&s.plan.ops.some(ct=>ct.enabled);return`${B}<button class="ncc-next" type="button" data-go="4" ${nt&&!s.planning?"":"disabled"}>Make toolpaths ${$e.next}</button>`}let W=s.simChecks&&!s.simChecks.ok;return`${B}${W?'<span class="ncc-foot-note ncc-bad">Fix the problems above before loading.</span>':""}<button class="ncc-next" type="button" data-act="load" ${s.result&&s.simChecks&&!W?"":"disabled"}>${$e.load}Load into ncSender</button>`}let H={outside:Xn.cutout,inside:Xn.inside,pocket:Xn.pocket,online:Xn.online,off:"#8a94a3"},G=".dxf,.svg,.pdf,.ai,.DXF,.SVG,.PDF,.AI";function $(){if(!s.a&&!s.loading)return`<div class="ncc-drop" data-drop>
        <div class="ncc-drop-icon">${$e.upload}</div>
        <h2>Drop a DXF, SVG, PDF or AI file here</h2>
        <p>A drawing to size, from Fusion, Inkscape, Illustrator, LibreCAD or QCAD. Each shape gets a cut: <strong>Outer (part)</strong>, <strong>Inner (perimeter)</strong>, <strong>Inner (clearing)</strong> or <strong>On the line</strong>.</p>
        <label class="ncc-btn" style="display: inline-flex; align-items: center; gap: 8px">Open file<input type="file" accept="${G}" data-file hidden></label>
        ${s.error?`<div class="ncc-hint bad" style="max-width: 520px">${$e.warn}<span>${le(s.error)}</span></div>`:""}
        ${U().length?`<div class="ncc-recent"><div class="ncc-recent-h">Recent drawings <span>kept in this browser</span></div>
          ${U().map(W=>`<div class="ncc-recent-row"><button class="ncc-recent-open" type="button" data-recent-open="${le(W.key)}"><span class="ncc-file-name">${le(W.name)}</span><span class="ncc-file-sub">${V(W.savedAt)}</span></button><button class="ncc-recent-x" type="button" data-forget="${le(W.key)}" aria-label="Forget ${le(W.name)}" title="Forget">${$e.close}</button></div>`).join("")}</div>`:""}
        ${s.tools.length?"":`<div class="ncc-hint" style="max-width: 520px">${$e.info}<span>Your Tool Library is empty. Add your end mills in Settings \u2192 Tool Library so ncCut2D can pick them.</span></div>`}
      </div>`;let B=s.a;return`
      <div class="ncc-card ncc-viewcard ncc-grow">
        <div class="ncc-file">
          <div style="display: flex; align-items: center; gap: 12px; min-width: 0">
            <div class="ncc-drop-icon" style="width: 38px; height: 38px; border-radius: 10px">${$e.part}</div>
            <div style="min-width: 0"><div class="ncc-file-name">${le(s.fileName)}</div>
            <div class="ncc-file-sub ncc-mono">${B?`${a(B.size[0])} \xD7 ${u(B.size[1])} \xB7 ${B.shapes.length} shape${B.shapes.length===1?"":"s"}`:"&nbsp;"}</div></div>
          </div>
          <div style="display: flex; gap: 8px; align-items: center">
          ${U().length?`<select class="ncc-select ncc-recent-pick" data-recent aria-label="Recent drawings" ${s.loading?"disabled":""}><option value="">Recent drawings\u2026</option>${U().map(W=>`<option value="${le(W.key)}">${le(W.name)} \xB7 ${V(W.savedAt)}</option>`).join("")}</select>`:""}
          <label class="ncc-btn muted" style="white-space: nowrap">Open another file<input type="file" accept="${G}" data-file hidden></label>
          </div>
        </div>
        <div class="ncc-drawing" data-drawing>${B?K():S(s.loading||"Reading\u2026","position: static; flex: 1")}</div>
        <div class="ncc-row-sub" style="margin: 0">Click a shape to choose its cut on its own; shift-click for more. ${it()}</div>
      </div>
      <div class="ncc-col ncc-side" data-keep-scroll="cuts">
        ${B?`${vt()}${ft()}${me()}${he()}${Vt(!0)}`:""}
      </div>`}let it=()=>["outside","inside","pocket","online","off"].map(B=>`<span style="white-space: nowrap"><span class="ncc-swatch" style="background: ${H[B]}"></span> ${le(aa[B])}</span>`).join(" ");function K(){let B=s.a,[W,nt]=B.size,ct=Math.max(W,nt)*.03+1,et=Rs(s.groups),pt=B.shapes.map((xt,Xt)=>Xt).sort((xt,Xt)=>(B.areas[Xt]||0)-(B.areas[xt]||0)),kt=Math.max(W,nt)/500,ee=pt.map(xt=>{let Xt=B.shapes[xt],Kt=Fi(B,s.job,xt,et),Ae=Xt.pts.map((Ts,ri)=>`${ri?"L":"M"}${Ts[0].toFixed(3)} ${(nt-Ts[1]).toFixed(3)}`).join("")+(B.loops[xt]?"Z":""),Ke=H[Kt.cut],We=s.sel.has(xt),si=Kt.cut==="pocket"&&B.loops[xt]?`fill="${Ke}" fill-opacity="0.22"`:B.loops[xt]?'fill="transparent"':'fill="none"';return`<path d="${Ae}" data-shape="${xt}" stroke="${We?"var(--color-accent)":Ke}" stroke-width="${(We?3:1.4)*kt}" ${Kt.cut==="off"?`stroke-dasharray="${4*kt} ${3*kt}"`:""} ${si} vector-effect="non-scaling-stroke" style="cursor: pointer"><title>${le(ht(xt))} \xB7 ${le(aa[Kt.cut])}${st(Kt)}</title></path>`}).join("");return`<svg viewBox="${-ct} ${-ct} ${W+2*ct} ${nt+2*ct}" preserveAspectRatio="xMidYMid meet" style="width: 100%; height: 100%; display: block">${ee}</svg>`}let st=B=>B.cut==="off"?"":B.depth===null||B.depth===void 0?" \xB7 through":` \xB7 ${u(B.depth)} deep`;function ht(B){let W=s.a,nt=W.circles[B];if(!W.loops[B])return"Line";if(nt)return`\xD8${u(2*nt.r)} circle`;let ct=Rc([W.shapes[B]]);return`${a(ct.w)} \xD7 ${u(ct.h)} shape`}function Rt(B){let W=B.idx.length,nt=W>1?`${W} \xD7 `:"";if(B.kind==="outline")return W>1?`Outline (${W} shapes joined)`:"Outline";if(B.kind==="line")return W>1?`${W} lines`:"A line";if(B.kind==="counterbore"){let{sizes:ct,step:et,last:pt}=B.label;return`${nt}\xD8${u(ct[et])} ${pt?"hole through the":et?"inner step of the":"outer step of the"} counterbore${W>1?"s":""} (${ct.map(kt=>a(kt)).join(" / ")})`}return B.kind==="circle"?`${nt}\xD8${u(B.label.d)} circle${W>1?"s":""}`:`${nt}${a(B.label.w)} \xD7 ${u(B.label.h)} ${B.kind==="rect"?"rectangle":"shape"}${W>1?"s":""}`}let zt=B=>B?["outside","inside","pocket","online","off"]:["online","off"];function de(B,W,nt){let ct=zt(nt).map(kt=>`<option value="${kt}" ${W.cut===kt?"selected":""}>${le(aa[kt])}</option>`).join(""),et=W.depth===null||W.depth===void 0,pt=W.cut==="off"?"":`<label class="ncc-chk"><input type="checkbox" data-through="${le(B)}" ${et?"checked":""}> Through</label>
      ${et?"":`<input class="ncc-input ncc-mono ncc-depth" inputmode="decimal" aria-label="Depth (${s.units})" data-depth="${le(B)}" value="${s.units==="in"?Math.round(W.depth/Mn.INCH*1e3)/1e3:Math.round(W.depth*100)/100}"><span class="ncc-unit">${s.units} deep</span>`}`;return`<div class="ncc-choose"><select class="ncc-select" data-cut="${le(B)}" aria-label="Cut">${ct}</select>${pt}</div>`}function he(){let B=Rs(s.groups);return`<div class="ncc-card"><div class="ncc-label">What to cut</div>${s.groups.map(nt=>{let ct=Fi(s.a,s.job,nt.idx[0],B),et=nt.idx.filter(pt=>s.job.shapes[pt]).length;return`<div class="ncc-decide" data-hover="${le(nt.key)}">
        <div class="ncc-decide-name"><span class="ncc-swatch" style="background: ${H[ct.cut]}"></span>${le(Rt(nt))}${et?`<small> \xB7 ${et} set on ${et>1?"their":"its"} own</small>`:""}</div>
        ${de(nt.key,ct,nt.kind!=="line")}
      </div>`}).join("")}</div>`}function me(){if(!s.sel.size)return"";let B=[...s.sel],W=Rs(s.groups),nt=Fi(s.a,s.job,B[0],W),ct=B.every(pt=>s.a.loops[pt]),et=B.some(pt=>s.job.shapes[pt]);return`<div class="ncc-card ncc-sel-card">
        <div class="ncc-row"><div class="ncc-row-title">${B.length>1?`${B.length} shapes selected`:le(ht(B[0]))}</div><button type="button" class="ncc-link" data-act="unselect">Clear</button></div>
        ${de("sel",nt,ct)}
        ${et?'<button type="button" class="ncc-link" data-act="sel-reset">Back to its group\u2019s choice</button>':'<div class="ncc-row-sub">A change here applies to the selected shapes only.</div>'}
      </div>`}function ft(){let B=s.job.stock.thickness,W=B?s.units==="in"?Math.round(B/Mn.INCH*1e3)/1e3:Math.round(B*100)/100:"";return`<div class="ncc-card ${B?"":"ncc-need"}">
        <div class="ncc-row"><div class="ncc-row-text"><div class="ncc-row-title">Stock thickness</div><div class="ncc-row-sub">${B?"\u201CThrough\u201D cuts go this deep and a little into the spoilboard.":"How thick is the board? Measure it: every \u201Cthrough\u201D cut depends on it."}</div></div>
        <div style="display: flex; align-items: center; gap: 6px"><input class="ncc-input ncc-mono ncc-depth" inputmode="decimal" aria-label="Stock thickness (${s.units})" data-thick value="${W}" placeholder="?"><span class="ncc-unit">${s.units}</span></div></div>
      </div>`}function vt(){let B=s.a,W=Rc(s.raw),nt=s.info?.units==null||s.info?.units==="unitless",ct=Math.round(s.scale*1e4)/100;return`<div class="ncc-card">
        <div class="ncc-fields">${["X","Y"].map((et,pt)=>`<div class="ncc-field"><label for="ncc-size${pt}">${et} (${s.units})</label><input id="ncc-size${pt}" class="ncc-input ncc-mono" inputmode="decimal" data-size="${pt}" value="${s.units==="in"?Math.round(B.size[pt]/Mn.INCH*1e3)/1e3:Math.round(B.size[pt]*100)/100}"></div>`).join("")}</div>
        <div class="ncc-row-sub">${ct===100?"As drawn":`Scaled to ${ct}%`}${s.info?.units?` \xB7 the file says ${le(s.info.units)}`:""}.${ct!==100?' <button type="button" class="ncc-link" data-scale="reset">Back to the drawing\u2019s size</button>':""}</div>
        ${nt&&ct===100&&Math.max(W.w,W.h)<50?`<div class="ncc-hint">${$e.info}<span>Only ${a(Math.max(W.w,W.h))} across and the file has no unit: it may be in inches. <button type="button" class="ncc-link" data-scale="inch">Make it inches (\xD7 25.4)</button></span></div>`:""}
        ${s.info?.notes?`<div class="ncc-hint">${$e.info}<span>${le(s.info.notes)}</span></div>`:""}
      </div>`}function Vt(){let B=s.slow?`<div class="ncc-hint">${$e.info}<span>${le(s.slow)}</span></div>`:"";return s.plan?B+s.plan.warnings.map(W=>`<div class="ncc-hint ${W.kind==="notool"?"bad":""}">${W.kind==="notool"?$e.warn:$e.info}<span>${le(W.text)}</span></div>`).join(""):B}let te=null;function Ot(){let B=s.job,W=s.plan?.stock||ca(s.a,B),nt=Object.entries(ls).map(([et,pt])=>`<button class="ncc-pick ncc-mat ${B.material===et?"sel":""}" type="button" data-material="${et}"><span class="ncc-mat-swatch" style="background: ${Sr[et]}"></span>${le(pt.name)}<small>${le(pt.note)}</small></button>`).join(""),ct=(et,pt,kt)=>`<div class="ncc-field"><label for="ncc-${et}">${pt}</label><input id="ncc-${et}" class="ncc-input ncc-mono" inputmode="decimal" data-stock="${et}" value="${s.units==="in"?Math.round(kt/Mn.INCH*1e3)/1e3:Math.round(kt*100)/100}" ${B.stock.fit&&et!=="thickness"?"disabled":""}></div>`;return`
      <div class="ncc-col ncc-half">
        <div class="ncc-card ncc-mat-card"><div class="ncc-label">Material</div><div class="ncc-picks ncc-mats">${nt}</div></div>
        <div class="ncc-card">
          ${ue("fit","Size the stock to the drawing",`Adds ${u(B.stock.margin)} on every side`,B.stock.fit)}
          <div class="ncc-fields">${ct("width",`Width X (${s.units})`,W.width)}${ct("depth",`Depth Y (${s.units})`,W.depth)}${ct("thickness",`Thickness Z (${s.units})`,W.thickness)}</div>
        </div>
        <div class="ncc-card">
          ${ue("tabs","Leave tabs to hold the part",B.tabs.enabled?`${a(ce().height)} \xD7 ${u(ce().length)}, so the part stays put until you cut it free`:"The part comes loose at the end",B.tabs.enabled)}
          ${B.tabs.enabled?`<div class="ncc-row"><span class="ncc-row-title" style="font-weight: 500">Number of tabs</span><div class="ncc-stepper"><button type="button" data-tabs="-1" aria-label="Fewer tabs" ${B.tabs.count<=1?"disabled":""}>\u2212</button><span class="ncc-mono">${B.tabs.count}</span><button type="button" data-tabs="1" aria-label="More tabs" ${B.tabs.count>=12?"disabled":""}>+</button></div></div>
          ${Ie("height","Tab thickness","Thinner tabs","Thicker tabs")}
          ${Ie("length","Tab length","Shorter tabs","Longer tabs")}`:""}
        </div>
      </div>
      <div class="ncc-col ncc-half">
        <div class="ncc-card ncc-zero-card"><div class="ncc-label">Where is zero?</div>${ge(W)}
          <div style="font-size: 14px">X Y zero: <strong>${le(qe(B.zero.xy))}</strong> of the stock</div>
          <div class="ncc-seg" role="group" aria-label="Z zero">
            <button type="button" class="${B.zero.z==="top"?"sel":""}" data-z="top">Z0 on top of stock</button>
            <button type="button" class="${B.zero.z==="bed"?"sel":""}" data-z="bed">Z0 on the bed</button>
          </div>
        </div>
      </div>`}let ue=(B,W,nt,ct)=>`<div class="ncc-row"><div class="ncc-row-text"><div class="ncc-row-title">${le(W)}</div><div class="ncc-row-sub">${le(nt)}</div></div><button class="ncc-toggle" type="button" role="switch" aria-checked="${ct}" aria-label="${le(W)}" data-toggle="${B}"></button></div>`;function qe(B){return{"back-left":"back left corner","back-center":"back edge, middle","back-right":"back right corner","left-center":"left edge, middle",center:"center","right-center":"right edge, middle","front-left":"front left corner","front-center":"front edge, middle","front-right":"front right corner"}[B]}let ce=()=>({...Oi(s.job.material),...Object.fromEntries(["height","length"].filter(B=>s.job.tabs[B]!=null).map(B=>[B,s.job.tabs[B]]))}),_e=()=>s.units==="in"?{min:.508,max:10.16,step:.508,grid:.254}:{min:.5,max:10,step:.5,grid:.1};function Ie(B,W,nt,ct){let et=ce()[B];return`<div class="ncc-row"><span class="ncc-row-title" style="font-weight: 500">${W}</span><div class="ncc-stepper"><button type="button" data-tabsize="${B}" data-by="-1" aria-label="${nt}" ${et<=_e().min+1e-6?"disabled":""}>\u2212</button><span class="ncc-mono">${u(et,s.units==="in"?2:1)}</span><button type="button" data-tabsize="${B}" data-by="1" aria-label="${ct}" ${et>=_e().max-1e-6?"disabled":""}>+</button></div></div>`}function ge(B){return`<div class="ncc-zero"><div data-viewer></div></div>
      <div class="ncc-row-sub ncc-mono" style="text-align: center; margin: 0">${a(B.width)} \xD7 ${a(B.depth)} \xD7 ${u(B.thickness)} stock \xB7 tap a point for zero, an arrow to turn the part</div>`}let Re=null;function Je(){let B=s.plan?.stock||ca(s.a,s.job),W=Sf.map(et=>({key:et,...Xc(B,{xy:et,z:"top"})})),nt=getComputedStyle(n).getPropertyValue("--color-accent").trim()||"#4c6ef5",ct=`${s.part?.positions?.length}|${B.width}|${B.depth}|${B.thickness}`;o.keepCamera=Re===ct,o.showZero({stock:B,part:s.part,points:W,selected:s.job.zero.xy,zFace:s.job.zero.z,color:Sr[s.job.material],accent:nt}),Re=ct,te=null,at=null,o.onPick=null,o.onMarker=et=>{et!==s.job.zero.xy&&(s.job.zero.xy=et,Dt())},o.onAxis=null}function ln(){let B=s.plan;if(!B)return S("Planning\u2026","position: static; flex: 1");let W=B.ops.map(xt=>{let Xt=Xe(xt);return`<div class="ncc-op ${xt.enabled?"":"off"} ${s.focusOp===xt.id?"focus":""}" data-focus="${xt.id}">
        <div class="ncc-op-icon" style="background: color-mix(in srgb, ${Xn[xt.kind]} 16%, transparent); color: ${Xn[xt.kind]}">${$e[xt.kind]||$e.pocket}</div>
        <div class="ncc-op-text"><div class="ncc-op-title">${le(xt.label)}</div><div class="ncc-op-sub ncc-mono">${le(xt.detail)}</div></div>
        <select class="ncc-select" data-tool="${xt.id}" aria-label="Tool for ${le(xt.label)}">${Xt.map(Kt=>`<option value="${Kt.id}" ${Kt.id===xt.tool.id?"selected":""}>T${cs(Kt,s.numbering)} \xB7 ${le(Kt.name)}</option>`).join("")}</select>
        <button class="ncc-toggle" type="button" role="switch" aria-checked="${xt.enabled}" aria-label="${le(xt.label)}" data-op="${xt.id}"></button>
      </div>`}).join(""),nt=ha(B),ct=new Map;for(let xt of B.ops)xt.enabled&&xt.kind!=="face"&&ct.set(xt.tool.id,(ct.get(xt.tool.id)||0)+1);let et=[...ct].sort((xt,Xt)=>Xt[1]-xt[1])[0]?.[0],pt=B.ops.find(xt=>xt.enabled&&xt.tool.id===et)||B.ops.find(xt=>xt.enabled),kt=pt?.feeds,ee=`<div class="ncc-pair">
          <div class="ncc-card"><div class="ncc-label">Finish</div>
            <div class="ncc-seg" role="group" aria-label="Finish">${Object.entries(vi).map(([xt,Xt])=>`<button type="button" class="${s.job.finish===xt?"sel":""}" data-finish="${xt}">${Xt.name}</button>`).join("")}</div>
            <div class="ncc-row-sub">${{fast:"Bigger steps, no finishing pass.",balanced:`Leaves ${u(.2,s.units==="in"?3:1)} on the walls, then a clean finishing pass.`,smooth:"Lighter steps and a finishing pass, for the best walls."}[s.job.finish]}</div>
            ${kt?`<div class="ncc-mono ncc-row-sub" style="line-height: 1.6">${le(pt.tool.name)}<br>${le(ls[s.job.material].name)} \xB7 ${kt.rpm.toLocaleString()} RPM<br>${s.units==="in"?`${a(kt.feed,1)} in/min`:`${kt.feed.toLocaleString()} mm/min`} \xB7 ${u(kt.stepdown,s.units==="in"?3:2)} per pass</div>`:""}
          </div>
          <div class="ncc-card"><div class="ncc-label">Tools for this job</div>
            ${nt.map(xt=>`<div class="ncc-row"><span style="min-width: 0"><span class="ncc-mono" style="color: var(--color-accent)">T${cs(xt,s.numbering)}</span> ${le(xt.name)}</span><span class="ncc-slot ${c(xt)?"":"hand"}">${c(xt)?`Slot ${xt.toolNumber}`:"By hand"}</span></div>`).join("")||'<div class="ncc-row-sub">No operations switched on.</div>'}
            ${nt.some(xt=>!xt.toolNumber)?'<div class="ncc-row-sub">By hand: not in the magazine, so you\u2019ll be asked to load it.</div>':""}
          </div>
        </div>`;return`<div class="ncc-plan">
        <div class="ncc-plan-list" data-keep-scroll="ops"><div class="ncc-ops">${W}</div>${Vt(!1)}<div class="ncc-plan-pair-in">${ee}</div></div>
        <div class="ncc-card ncc-viewcard ncc-plan-view"><div data-viewer></div></div>
        <div class="ncc-plan-pair">${ee}</div>
      </div>`}function Fe(){let W=(s.plan?.ops||[]).filter(nt=>nt.enabled&&nt.kind!=="face").flatMap(nt=>{let ct=s.focusOp&&s.focusOp!==nt.id;return nt.kind==="chamfer"?nt.show.map(pt=>({loops:pt.loops,z:pt.z+.05,color:Xn.chamfer,opacity:ct?.2:1,top:pt.z})):{loops:nt.region||(nt.lines||[]).map(pt=>pt.pts)||[],z:nt.kind==="cutout"?nt.zTop+.05:Math.max(nt.zBottom,0)+.05,color:Xn[nt.kind],dashed:nt.kind==="cutout",opacity:ct?.2:1,top:nt.zTop}});o.keepCamera=te===s.part?.positions,o.showPart(s.part,W),te=s.part?.positions,at=null,Re=null,o.onFrame=null,o.onMarker=null,o.onPick=null}function Xe(B){let W=B.kind==="drill"?["drill"]:B.kind==="face"?["surfacing","flat"]:B.kind==="finish3d"?["ball","flat"]:B.kind==="chamfer"?["vbit","chamfer"]:B.kind==="thread"?["threadmill"]:["flat"],nt=s.tools.filter(ct=>W.includes(ct.kind)&&(B.angle==null||Math.abs(ct.angle/2-B.angle)<=1.5)).sort((ct,et)=>et.diameter-ct.diameter);return nt.some(ct=>ct.id===B.tool.id)?nt:[B.tool,...nt]}function j(){let B=s.result,W=B?.plan,nt=W?ha(W):[],ct=W?W.ops.filter(et=>et.enabled).reduce((et,pt,kt,ee)=>et+(kt>0&&ee[kt-1].tool.id!==pt.tool.id?1:0),0):0;return`
      <div class="ncc-card ncc-viewcard ncc-grow">
        <div data-viewer></div>
        <div class="ncc-play" data-playbar>${R()}</div>
      </div>
      <div class="ncc-col ncc-side">
        <div class="ncc-card ncc-stats">
          <div class="ncc-stat"><b class="ncc-mono">${W?Math.max(1,Math.round(B.seconds/60)):"\u2013"}<span> min</span></b><span>Run time</span></div>
          <div class="ncc-stat"><b class="ncc-mono">${nt.length||"\u2013"}</b><span>Tools</span></div>
          <div class="ncc-stat"><b class="ncc-mono">${W?ct:"\u2013"}</b><span>Tool changes</span></div>
        </div>
        <div class="ncc-card"><div class="ncc-label">Checked</div>${we()}</div>
        ${s.slow?`<div class="ncc-hint">${$e.info}<span>${le(s.slow)}</span></div>`:""}
        <div class="ncc-card">
          <div class="ncc-mono ncc-row-sub" style="margin: 0">${le(je())}${B?` \xB7 ${(B.gcode.split(`
`).length-1).toLocaleString()} lines`:""}</div>
          <button class="ncc-btn muted" type="button" data-act="save" ${B?"":"disabled"}>Save to File Manager</button>
        </div>
      </div>`}let je=()=>`${(s.fileName||"drawing").replace(/\.(dxf|svg|pdf|ai)$/i,"")}.nc`;function we(){let B=s.simChecks;return B?B.items.map(W=>`<div class="ncc-check"><span class="ncc-ck ${W.state}">${W.state==="bad"?$e.cross:W.state==="info"?"!":$e.check}</span><span>${le(W.text)}</span></div>`).join(""):`<div class="ncc-row-sub">${s.result?"Checking\u2026":"Waiting for the toolpaths\u2026"}<span class="ncc-elapsed" data-elapsed></span></div>`}let I={ops:[],moves:null,opOf:null,cum:null,total:0,t:0,i:1,playing:!1,speed:5,hm:null,stamps:[],colors:[],cursor:null,goal:null};function R(){if(!s.result)return"";let W=s.result.plan.ops.filter(et=>et.enabled&&et.track),nt=I.total||1,ct=W[Math.max(0,I.opIndexAt?.(I.t)??0)];return`<button class="ncc-playbtn" type="button" data-act="play" aria-label="${I.playing?"Pause":"Play"}">${I.playing?$e.pause:$e.play}</button>
      <div class="ncc-track">
        <div class="ncc-bar" data-scrub role="slider" aria-label="Position in the program" aria-valuemin="0" aria-valuemax="${Math.round(nt)}" aria-valuenow="${Math.round(I.t)}">
          ${W.map(et=>`<i style="width: ${(et.seconds||0)/nt*100}%; background: ${Xn[et.kind]}"></i>`).join("")}
          <b style="width: ${I.t/nt*100}%"></b><em style="left: ${I.t/nt*100}%"></em>
        </div>
        <div class="ncc-row" style="font-size: 12px; color: var(--color-text-secondary)"><span data-pb="step">${At(W,ct)}</span><span class="ncc-mono" data-pb="clock">${Tc(I.t)} / ${Tc(nt)}</span></div>
      </div>
      <div class="ncc-seg" style="padding: 3px" role="group" aria-label="Speed">${[[1,"Slow"],[5,"Normal"],[25,"Fast"]].map(([et,pt])=>`<button type="button" style="padding: 6px 8px" class="${I.speed===et?"sel":""}" data-speed="${et}">${pt}</button>`).join("")}</div>`}function tt(){return`<div class="ncc-overlay tr">
      <button class="ncc-chip ${o.paths?.visible!==!1&&s.showPaths?"on":""}" type="button" data-act="paths">Toolpaths</button>
      <button class="ncc-chip ${s.showPart?"on":""}" type="button" data-act="ghost">Part</button>
    </div>`}let at=null;function dt(){if(at===s.result){St();return}at=s.result,te=null,Re=null,o.onMarker=null,o.onPick=null;let B=s.result.plan,W=B.ops.filter(xt=>xt.enabled&&xt.track),nt=Ii.cellFor(B.stock,T()?380*380:520*520);I.ops=W,I.hm=kp(new Ii(B.stock,nt)),I.colors=B.ops.map(xt=>new se(Xn[xt.kind])),I.stamps=B.ops.map(xt=>Mu(xt.tool,nt));let ct=0;for(let xt of W)ct+=xt.track.length/4;I.moves=new Float32Array(ct*4),I.opOf=new Uint16Array(ct),I.cum=new Float64Array(ct);let et=0,pt=0,kt=null,ee=s.maxRapid||5e3;for(let xt of W){let Xt=B.ops.indexOf(xt);for(let Kt=0;Kt<xt.track.length;Kt+=4,et++){if(I.moves.set(xt.track.subarray(Kt,Kt+4),et*4),I.opOf[et]=Xt,kt){let Ae=Math.hypot(xt.track[Kt]-kt[0],xt.track[Kt+1]-kt[1],xt.track[Kt+2]-kt[2]);pt+=Ae/(xt.track[Kt+3]>0?xt.track[Kt+3]:ee)*60}kt=[xt.track[Kt],xt.track[Kt+1],xt.track[Kt+2]],I.cum[et]=pt}}I.total=pt,I.opIndexAt=xt=>{let Xt=Math.min(ct-1,wt(I.cum,xt));return W.indexOf(B.ops[I.opOf[Xt]])},I.t=0,I.i=1,I.cursor=null,I.toolOp=-1,I.snaps=[],I.goal=null,I.cutT=0,o.showStock(I.hm,Sr[B.job.material]||Sr.mdf,s.part);{let xt=I.hm,Xt=[xt.x0,xt.y0,xt.bottom],Kt=[xt.x0+(xt.nx-1)*xt.cell,xt.y0+(xt.ny-1)*xt.cell,xt.top];for(let Ae of W){let Ke=Ae.tool.diameter/2;for(let We=0;We<Ae.track.length;We+=4)Ae.track[We+3]!==0&&(Xt[0]=Math.min(Xt[0],Ae.track[We]-Ke),Kt[0]=Math.max(Kt[0],Ae.track[We]+Ke),Xt[1]=Math.min(Xt[1],Ae.track[We+1]-Ke),Kt[1]=Math.max(Kt[1],Ae.track[We+1]+Ke))}o.frame(Xt,Kt)}o.showPaths(W),s.showPaths=s.showPaths??!1,St(),Et(0),I.speed=5,I.rate=Math.max(1,I.total/600/5),o.onFrame=re,bt(B),I.playing=!1,It()}function St(){o.paths&&(o.paths.visible=!!s.showPaths),o.partGhost&&(o.partGhost.visible=!!s.showPart)}function wt(B,W){let nt=0,ct=B.length;for(;nt<ct;){let et=nt+ct>>1;B[et]<W?nt=et+1:ct=et}return nt}let ut=B=>({x:I.moves[B*4],y:I.moves[B*4+1],z:I.moves[B*4+2],r:I.moves[B*4+3]===0});function _t(B,W=1/0){let nt=I.hm,ct=I.cum.length,et=1/0,pt=-1,kt=(xt,Xt,Kt)=>{let Ae=s.result.plan.ops[Kt].tool.diameter/2/nt.cell+3,Ke=Math.floor((Math.min(xt.y,Xt.y)-nt.y0)/nt.cell-Ae),We=Math.ceil((Math.max(xt.y,Xt.y)-nt.y0)/nt.cell+Ae);et=Math.min(et,Math.max(0,Ke)),pt=Math.max(pt,Math.min(nt.ny-1,We))},ee=0;for(;I.i<ct&&I.cum[I.i]<=B;){if((++ee&31)===0&&performance.now()>W)return I.cutT=I.cum[I.i-1],[et,pt,!1];!I.cursor&&(I.opOf[I.i]!==I.opOf[I.i-1]||Math.floor(I.cum[I.i]/I.total*10)>Math.floor(I.cum[I.i-1]/I.total*10))&&Ct();let xt=I.cursor||ut(I.i-1),Xt=ut(I.i),Kt=I.opOf[I.i];Xt.r||(Su(nt,s.result.plan.ops[Kt].tool,xt,Xt,Kt),kt(xt,Xt,Kt)),I.cursor=null,I.i++}if(I.i<ct&&B>I.cum[I.i-1]){let xt=I.cursor||ut(I.i-1),Xt=ut(I.i),Kt=I.opOf[I.i],Ae=I.cum[I.i-1],Ke=(B-Ae)/(I.cum[I.i]-Ae||1),We=ut(I.i-1),si={x:We.x+(Xt.x-We.x)*Ke,y:We.y+(Xt.y-We.y)*Ke,z:We.z+(Xt.z-We.z)*Ke};Xt.r||(Su(nt,s.result.plan.ops[Kt].tool,xt,si,Kt),kt(xt,si,Kt)),I.cursor=si}return I.cutT=B,[et,pt,!0]}function Et(B){let W=I.cum.length;if(!W)return;let nt=Math.min(W-1,wt(I.cum,B)),ct=I.opOf[nt];if(ct!==I.toolOp){let xt=s.result.plan.ops[ct];o.setTool(xt.tool,xt.zTop-xt.zBottom),I.toolOp=ct}let et=ut(Math.max(0,nt-1)),pt=ut(nt),kt=nt>0?I.cum[nt-1]:0,ee=nt>0?Math.max(0,Math.min(1,(B-kt)/(I.cum[nt]-kt||1))):1;o.moveTool(et.x+(pt.x-et.x)*ee,et.y+(pt.y-et.y)*ee,et.z+(pt.z-et.z)*ee)}let Gt=0,Lt=0,Tt=0,Ht=[1/0,-1],jt={drag:12,catchUp:250};function re(B){let W=Gt?Math.min(.1,(B-Gt)/1e3):0;if(Gt=B,!I.cum||(I.playing&&(I.t=Math.min(I.total,I.t+W*I.speed*I.rate),I.goal=I.t),I.goal==null))return;let[nt,ct,et]=_t(I.goal,performance.now()+(I.dragging||I.playing?jt.drag:jt.catchUp));Ht[0]=Math.min(Ht[0],nt),Ht[1]=Math.max(Ht[1],ct),(et||I.playing||B-Tt>250)&&(o.refreshStock(Ht[0],Ht[1],I.colors),Ht[0]=1/0,Ht[1]=-1,Tt=B),et&&(I.goal=null),I.playing&&(Et(I.t),I.t>=I.total?(I.playing=!1,It()):B-Lt>200&&(Lt=B,It()))}let J=["h","op","sx","sy","wx","wy","gap","deep"];function Ct(){I.snaps.some(B=>B.i===I.i)||I.snaps.push({i:I.i,data:J.map(B=>I.hm[B].slice())})}function mt(B){if(B=Math.max(0,Math.min(I.total,B)),B<(I.cutT??0)){let W=I.snaps.filter(nt=>I.cum[nt.i-1]<=B).sort((nt,ct)=>ct.i-nt.i)[0];W?(J.forEach((nt,ct)=>I.hm[nt].set(W.data[ct])),I.i=W.i):(I.hm.h.fill(I.hm.top),I.hm.op.fill(0),I.hm.sx.fill(0),I.hm.sy.fill(0),I.hm.wx.fill(0),I.hm.wy.fill(0),I.hm.gap.fill(1/0),I.hm.deep.fill(-1/0),I.i=1),I.cursor=null,I.cutT=I.i>1?I.cum[I.i-1]:0,o.refreshStock(0,I.hm.ny-1,I.colors)}I.goal=B,I.t=B,Et(B),It()}let At=(B,W)=>W?`Step ${B.indexOf(W)+1} of ${B.length} \xB7 ${le(W.label)} \xB7 T${cs(W.tool,s.numbering)}`:"";function It(){let B=n.querySelector("[data-playbar]");if(!B)return;if(B._result!==s.result||B._total!==I.total||!B.querySelector("[data-scrub]")){B.innerHTML=R(),B._result=s.result,B._total=I.total;return}let W=s.result.plan.ops.filter(Xt=>Xt.enabled&&Xt.track),nt=I.total||1,ct=`${I.t/nt*100}%`,et=W[Math.max(0,I.opIndexAt?.(I.t)??0)],pt=B.querySelector("[data-scrub]");pt.querySelector("b").style.width=ct,pt.querySelector("em").style.left=ct,pt.setAttribute("aria-valuenow",String(Math.round(I.t)));let kt=(Xt,Kt)=>{Xt&&Xt.innerHTML!==Kt&&(Xt.innerHTML=Kt)};kt(B.querySelector('[data-pb="step"]'),At(W,et)),kt(B.querySelector('[data-pb="clock"]'),`${Tc(I.t)} / ${Tc(nt)}`);let ee=B.querySelector('[data-act="play"]'),xt=I.playing?"Pause":"Play";ee.getAttribute("aria-label")!==xt&&(ee.setAttribute("aria-label",xt),ee.innerHTML=I.playing?$e.pause:$e.play);for(let Xt of B.querySelectorAll("[data-speed]"))Xt.classList.toggle("sel",+Xt.dataset.speed===I.speed)}function bt(B){setTimeout(()=>{if(s.result?.plan!==B)return;let W=s.result?.collisions||[],nt=[];if(nt.push(W.length?{state:"bad",text:`${W.length} fast move${W.length>1?"s go":" goes"} into the material (${[...new Set(W.map(pt=>B.ops.find(kt=>kt.id===pt.op)?.label))].join(", ")}).`}:{state:"ok",text:"No fast moves through the material"}),s.travel){let pt=B.stock.width<=s.travel.x&&B.stock.depth<=s.travel.y;nt.push(pt?{state:"ok",text:"The stock fits inside your machine\u2019s travel"}:{state:"bad",text:`The stock is bigger than your machine\u2019s travel (${a(s.travel.x)} \xD7 ${u(s.travel.y)}).`})}let ct=ha(B);nt.push(ct.every(pt=>pt.fluteLength)?{state:"ok",text:"Every tool is long enough for its depth"}:{state:"info",text:"Some tools have no cutting length in the Tool Library, so their depth isn\u2019t checked."}),B.ops.find(pt=>pt.kind==="cutout"&&pt.enabled)&&nt.push({state:"ok",text:`The cut-out goes ${u(B.job.throughDepth,s.units==="in"?3:1)} into the spoilboard${B.job.tabs.enabled?`, with ${B.job.tabs.count} tabs`:""}`}),B.warnings.some(pt=>pt.kind==="undercut")&&nt.push({state:"info",text:"Some features are on the other side. Cut this side, then turn the part over and make a program for that side. Pins (the Spoilboard Toolbox plugin can set them up) put it back in the same place."}),s.simChecks={ok:!nt.some(pt=>pt.state==="bad"),items:nt},k()},50)}let qt=B=>{if(!(B<1||B>4||B>s.maxStep+1)){if(B===4&&s.step!==4){I.playing=!1,s.step=4,s.maxStep=4,k(),y(!0);return}s.step=B,s.maxStep=Math.max(s.maxStep,B),B!==4&&(I.playing=!1),k()}},Dt=()=>{s.maxStep=Math.min(s.maxStep,Math.max(s.step,3)),s.result=null,y(!1)};n.addEventListener("click",B=>{let W=B.target.closest("[data-shape]");if(W||B.target.closest("[data-drawing]")){let pt=W?+W.dataset.shape:null;return pt===null?s.sel=new Set:B.shiftKey||B.metaKey||B.ctrlKey?s.sel.has(pt)?s.sel.delete(pt):s.sel.add(pt):s.sel=s.sel.size===1&&s.sel.has(pt)?new Set:new Set([pt]),k()}let nt=B.target.closest("[data-focus]");if(nt&&!B.target.closest("button, select")){s.focusOp=s.focusOp===nt.dataset.focus?null:nt.dataset.focus,k();return}let ct=B.target.closest("button, [data-scrub]");if(!ct||ct.disabled)return;let et=ct.dataset;if(et.go)return qt(+et.go);if(et.material)return s.job.material=et.material,Object.assign(s.job.tabs,Oi(et.material)),Dt();if(et.tabsize){let pt=ce(),kt=_e();return s.job.tabs[et.tabsize]=Math.max(kt.min,Math.min(kt.max,Math.round((pt[et.tabsize]+ +et.by*kt.step)/kt.grid)*kt.grid)),Dt()}if(et.zero)return s.job.zero.xy=et.zero,Dt();if(et.z)return s.job.zero.z=et.z,Dt();if(et.finish)return s.job.finish=et.finish,Dt();if(et.tabs)return s.job.tabs.count=Math.max(1,Math.min(12,s.job.tabs.count+ +et.tabs)),Dt();if(et.toggle==="fit"){let pt=s.plan?.stock;return s.job.stock.fit=!s.job.stock.fit,!s.job.stock.fit&&pt&&Object.assign(s.job.stock,{width:pt.width,depth:pt.depth,thickness:pt.thickness}),Dt()}if(et.scale==="reset")return M(1);if(et.scale==="inch")return M(Mn.INCH);if(et.act==="unselect")return s.sel=new Set,k();if(et.act==="sel-reset"){for(let pt of s.sel)delete s.job.shapes[pt];return Dt()}if(et.toggle==="tabs")return s.job.tabs.enabled=!s.job.tabs.enabled,Dt();if(et.op)return s.job.disabled[et.op]=!s.job.disabled[et.op],Dt();if(et.speed)return I.speed=+et.speed,It();if(et.act==="play")return I.t>=I.total&&mt(0),I.playing=!I.playing,Gt=0,It();if(et.act==="paths"){s.showPaths=!s.showPaths,St(),ct.classList.toggle("on",s.showPaths);return}if(et.act==="ghost"){s.showPart=!s.showPart,St(),ct.classList.toggle("on",s.showPart);return}if(et.act==="close")return Es();if(et.recentOpen)return D(et.recentOpen);if(et.forget)return Cu(et.forget,s.recent).then(pt=>{s.recent=pt,k()});if(et.act==="load")return Se(ct);if(et.act==="save")return bn(ct)}),n.addEventListener("pointerdown",B=>{if(!B.target.closest("[data-scrub]")||!I.cum)return;let nt=I.playing;I.playing=!1,I.dragging=!0;let ct=ee=>{let xt=n.querySelector("[data-scrub]").getBoundingClientRect();xt.width>0&&mt((ee-xt.left)/xt.width*I.total)};ct(B.clientX);let et=null,pt=ee=>{et===null&&requestAnimationFrame(()=>{let xt=et;et=null,ct(xt)}),et=ee.clientX},kt=()=>{I.dragging=!1,window.removeEventListener("pointermove",pt),window.removeEventListener("pointerup",kt),I.playing=nt&&I.t<I.total,Gt=0,It()};window.addEventListener("pointermove",pt),window.addEventListener("pointerup",kt)}),n.addEventListener("change",B=>{let W=B.target;if(W.matches("[data-file]"))return m(W.files[0]);if(W.matches("[data-recent]"))return W.value&&D(W.value);if(W.dataset.tool)return s.job.toolOverride[W.dataset.tool]=+W.value||W.value,Dt();if(W.dataset.size){let ct=+W.dataset.size,et=parseFloat(String(W.value).replace(",","."));if(!(Number.isFinite(et)&&et>0&&s.a?.size[ct]>0))return k();let pt=Mn.toMm(et,s.units)/s.a.size[ct];return Math.abs(pt-1)<1e-9?k():M(s.scale*pt)}if(W.matches("[data-thick]")){let ct=parseFloat(String(W.value).replace(",","."));return Number.isFinite(ct)&&ct>0&&(s.job.stock.thickness=Mn.toMm(ct,s.units)),Dt()}let nt=W.dataset.cut??W.dataset.through??W.dataset.depth;if(nt!==void 0){let ct=nt==="sel"?[...s.sel].map(et=>s.job.shapes[et]||={}):[s.job.groups[nt]||={}];if(nt==="sel"){let et=Rs(s.groups);[...s.sel].forEach((pt,kt)=>{let ee=Fi(s.a,{...s.job,shapes:{}},pt,et);ct[kt].cut===void 0&&Object.assign(ct[kt],{cut:ee.cut,depth:ee.depth})})}else{let et=s.groups.find(kt=>kt.key===nt),pt=Fi(s.a,{...s.job,groups:{},shapes:{}},et.idx[0],null);ct[0].cut===void 0&&Object.assign(ct[0],{cut:pt.cut,depth:pt.depth})}for(let et of ct)if(W.dataset.cut!==void 0)et.cut=W.value,et.depth=W.value==="pocket"||W.value==="online"?et.depth??s.job.depths[W.value]:W.value==="off"?et.depth:null;else if(W.dataset.through!==void 0)et.depth=W.checked?null:Math.min(s.job.depths[et.cut]||s.job.depths.pocket,(s.job.stock.thickness||6)-.5);else{let pt=parseFloat(String(W.value).replace(",","."));Number.isFinite(pt)&&pt>0&&(et.depth=Mn.toMm(pt,s.units))}return Dt()}if(W.dataset.stock){let ct=parseFloat(String(W.value).replace(",","."));return Number.isFinite(ct)&&ct>0&&(s.job.stock[W.dataset.stock]=Mn.toMm(ct,s.units)),Dt()}}),n.addEventListener("dragover",B=>{let W=B.target.closest("[data-drop]");W&&(B.preventDefault(),W.classList.add("over"))}),n.addEventListener("dragleave",B=>{let W=B.target.closest("[data-drop]");W&&W.classList.remove("over")}),n.addEventListener("drop",B=>{B.target.closest("[data-drop]")&&(B.preventDefault(),m(B.dataTransfer.files[0]))});function Te(B){s.toast=B,k(),setTimeout(()=>{s.toast===B&&(s.toast="",k())},2600)}async function Se(B){B.disabled=!0;try{let W=await i.post("/api/gcode-files/load-temp",{filename:je(),content:s.result.gcode});if(!W.ok)throw new Error(`ncSender said ${W.status}`);Es()}catch(W){B.disabled=!1,Te(`Couldn\u2019t load the program: ${W.message}`)}}async function bn(B){B.disabled=!0;try{let W=await An(je()),nt=await i.post("/api/gcode-files/file/save",{path:W,content:s.result.gcode});if(!nt.ok)throw new Error(`save failed (${nt.status})`);Te(`Saved to File Manager: ${W}`)}catch(W){Te(`Couldn\u2019t save: ${W.message}`)}B.disabled=!1}async function An(B){let W=B.replace(/\.nc$/,""),nt=new Set,ct=et=>{for(let pt of et||[])pt.type==="folder"?ct(pt.children):nt.add(pt.path)};ct((await i.get("/api/gcode-files"))?.tree);for(let et=1;et<1e3;et++){let pt=`ncCut2D/${et<2?B:`${W} (${et}).nc`}`;if(!nt.has(pt))return pt}throw new Error("too many saved copies")}function Es(){I.playing=!1,window.postMessage({type:"close-plugin-dialog"},"*")}k(),window.__nccut2d={S:s,PLAY:I,viewer:o,seek:B=>mt(B)}}var Yb,le,Tc,tn,$e,am=fe(()=>{Wo();vc();Zp();Kp();nm();rm();Yb=["Drawing","Stock & Zero","Operations","Preview & Load"],le=n=>String(n??"").replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t]),Tc=n=>{let t=Math.max(0,Math.round(n));return`${Math.floor(t/60)}:${String(t%60).padStart(2,"0")}`},tn=(n,t=18,e="")=>`<svg width="${t}" height="${t}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" ${e}>${n}</svg>`,$e={close:tn('<path d="M6 6l12 12M18 6L6 18"/>'),next:tn('<path d="M9 6l6 6-6 6"/>',16,'stroke-width="2.4"'),part:tn('<path d="M12 2l9 5v10l-9 5-9-5V7z"/><path d="M12 22V12M21 7l-9 5-9-5"/>',20),upload:tn('<path d="M12 16V4M7 9l5-5 5 5M4 20h16"/>',28),info:tn('<circle cx="12" cy="12" r="9"/><path d="M12 8h.01M11 12h1v5h1"/>'),warn:tn('<path d="M12 3l10 18H2z"/><path d="M12 10v4M12 17h.01"/>'),check:tn('<path d="M5 12l5 5 9-10"/>',12,'stroke-width="3.2"'),cross:tn('<path d="M6 6l12 12M18 6L6 18"/>',12,'stroke-width="3.2"'),play:'<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M7 4l13 8-13 8z"/></svg>',pause:'<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><rect x="6" y="5" width="4" height="14" rx="1"/><rect x="14" y="5" width="4" height="14" rx="1"/></svg>',load:tn('<path d="M12 4v11M7 10l5 5 5-5M5 20h14"/>',16,'stroke-width="2.4"'),face:tn('<path d="M3 9h18M3 15h18"/>'),pocket:tn('<rect x="4" y="6" width="16" height="12" rx="2"/>'),corners:tn('<path d="M4 10V6a2 2 0 012-2h4M20 14v4a2 2 0 01-2 2h-4"/>'),hole:tn('<circle cx="8" cy="12" r="3"/><circle cx="16" cy="12" r="3"/>'),drill:tn('<path d="M12 3v14M8 13l4 8 4-8"/>'),step:tn('<path d="M3 18h6v-6h6V6h6"/>'),cutout:tn('<rect x="3" y="5" width="18" height="14" rx="2" stroke-dasharray="3 2.5"/>'),rough3d:tn('<path d="M3 19h4v-4h3v-4h4v4h3v4h4"/>'),finish3d:tn('<path d="M3 18c3 0 4-9 9-9s6 9 9 9"/>'),thread:tn('<path d="M8 4h8M8 8l8-2M8 12l8-2M8 16l8-2M8 20h8M8 4v16M16 4v16"/>'),chamfer:tn('<path d="M4 20V9l5-5h11v16z"/><path d="M9 4v5H4" stroke-dasharray="2 2"/>'),rest3d:tn('<path d="M3 19h4v-4h3v-4h4v4h3v4h4"/><circle cx="12" cy="17" r="1.5"/>')}});vc();function wu(){let n=null,t={async init(){return!0},async load({shapes:e}){return n=la(e),{size:n.size,count:n.shapes.length}},async plan({tools:e,job:i,limits:s,paths:o,gcodeOptions:c,timing:a}){if(!n)throw new Error("No drawing open.");let u=Tf(n,e,i,s),f=_u(u);o&&Dp(u);let p=o?Up(u,a):0,g=o?Fp(u,c):"",m=o?zp(u,Ii.cellFor(u.stock,300*300)).collisions.map(x=>({op:x.op,at:x.at})):[];for(let x of u.ops){if(!x.moves)continue;let v=new Float32Array(x.moves.length*4);x.moves.forEach((M,y)=>{v[y*4]=M.x,v[y*4+1]=M.y,v[y*4+2]=M.z,v[y*4+3]=M.r?0:M.f}),x.track=v,delete x.moves}return{plan:u,gcode:g,seconds:p,collisions:m,part:f}}};return async function(i){let s=t[i.type];if(!s)throw new Error(`unknown request ${i.type}`);return s(i)}}var lm="0.0.1-mw1lpqs6";if(typeof document>"u"){let n=wu();self.onmessage=async({data:t})=>{try{let e=await n(t),i=e?.part?[e.part.positions.buffer,e.part.indices.buffer]:[];self.postMessage({id:t.id,ok:!0,result:e},i)}catch(e){self.postMessage({id:t.id,ok:!1,error:e.message||String(e)})}}}else{let n=window.NcCut2D=window.NcCut2D||{};n.build!==lm&&n.engine&&(n.engine.then(i=>i.worker?.terminate(),()=>{}),n.engine=null),n.build=lm,n.mount=async(i,s)=>{let{mountApp:o}=await Promise.resolve().then(()=>(am(),om));try{o(i,s,await t(s))}catch(c){i.textContent=`ncCut2D could not start: ${c.message||c}`}};let t=i=>n.engine||=e(i);async function e(i){let s=null;try{s=new Worker(URL.createObjectURL(new Blob([n.source||""],{type:"text/javascript"})))}catch{s=null}if(s){let c=0,a=new Map;s.onmessage=({data:p})=>{let g=a.get(p.id);g&&(a.delete(p.id),p.ok?g.resolve(p.result):g.reject(new Error(p.error)))};let u=(p,g={},m=[])=>new Promise((x,v)=>{let M=++c;a.set(M,{resolve:x,reject:v}),s.postMessage({...g,id:M,type:p},m)});if(await Promise.race([u("init").then(()=>!0),new Promise(p=>setTimeout(()=>p(!1),5e3))]))return u.worker=s,u;s.terminate()}let o=wu();return await o({type:"init"}),(c,a={})=>o({...a,type:c})}}})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/

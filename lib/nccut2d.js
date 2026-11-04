(()=>{var vm=Object.create;var Ic=Object.defineProperty;var bm=Object.getOwnPropertyDescriptor;var Mm=Object.getOwnPropertyNames;var Sm=Object.getPrototypeOf,wm=Object.prototype.hasOwnProperty;var fe=(n,t,e)=>()=>{if(e)throw e[0];try{return n&&(t=n(n=0)),t}catch(i){throw e=[i],i}};var Nu=(n,t)=>()=>{try{return t||n((t={exports:{}}).exports,t),t.exports}catch(e){throw t=0,e}},Du=(n,t)=>{for(var e in t)Ic(n,e,{get:t[e],enumerable:!0})},Em=(n,t,e,i)=>{if(t&&typeof t=="object"||typeof t=="function")for(let s of Mm(t))!wm.call(n,s)&&s!==e&&Ic(n,s,{get:()=>t[s],enumerable:!(i=bm(t,s))||i.enumerable});return n};var Ou=(n,t,e)=>(e=n!=null?vm(Sm(n)):{},Em(t||!n||!n.__esModule?Ic(e,"default",{value:n,enumerable:!0}):e,n));function jo(n,t,e=.01){if(!(n>e))return 1;let i=2*Math.acos(Math.max(-1,Math.min(1,1-e/n)));return Math.max(2,Math.min(2e3,Math.ceil(Math.abs(t)/i)))}function Rs(n,t,e,i,s,o=!0){let c=s-i;o&&c<=0&&(c+=Math.PI*2),!o&&c>=0&&(c-=Math.PI*2);let a=jo(e,c);return Array.from({length:a+1},(u,f)=>{let d=i+c*f/a;return[n+e*Math.cos(d),t+e*Math.sin(d)]})}function Qo(n,t,e,i,s,o=0,c=Math.PI*2){let a=Math.hypot(e,i),u=Math.atan2(i,e),f=a*s,d=c-o;d<=0&&(d+=Math.PI*2);let g=jo(a,d),m=Math.cos(u),y=Math.sin(u);return Array.from({length:g+1},(v,b)=>{let x=o+d*b/g,_=a*Math.cos(x),E=f*Math.sin(x);return[n+_*m-E*y,t+_*y+E*m]})}function Ii(n,t,e,i,s=[n],o=.01,c=0){let a=Fu(t,n,i),u=Fu(e,n,i);if(c>16||Math.max(a,u)<=o)return s.push(i),s;let f=(x,_)=>[(x[0]+_[0])/2,(x[1]+_[1])/2],d=f(n,t),g=f(t,e),m=f(e,i),y=f(d,g),v=f(g,m),b=f(y,v);return Ii(n,d,y,b,s,o,c+1),Ii(b,v,m,i,s,o,c+1),s}function Fu(n,t,e){let i=e[0]-t[0],s=e[1]-t[1],o=Math.hypot(i,s);return o<1e-12?xi(n,t):Math.abs((n[0]-t[0])*s-(n[1]-t[1])*i)/o}function Uu(n,t,e,i,s,o,c){if(!t||!e||n[0]===c[0]&&n[1]===c[1])return[n,c];t=Math.abs(t),e=Math.abs(e);let a=i*Math.PI/180,u=Math.cos(a),f=Math.sin(a),d=(n[0]-c[0])/2,g=(n[1]-c[1])/2,m=u*d+f*g,y=-f*d+u*g,v=m*m/(t*t)+y*y/(e*e);v>1&&(t*=Math.sqrt(v),e*=Math.sqrt(v));let b=t*t*e*e-t*t*y*y-e*e*m*m,x=Math.sqrt(Math.max(0,b/(t*t*y*y+e*e*m*m)));!!s==!!o&&(x=-x);let _=x*t*y/e,E=-x*e*m/t,A=u*_-f*E+(n[0]+c[0])/2,S=f*_+u*E+(n[1]+c[1])/2,R=(F,B,H,G)=>Math.atan2(F*G-B*H,F*H+B*G),T=R(1,0,(m-_)/t,(y-E)/e),C=R((m-_)/t,(y-E)/e,(-m-_)/t,(-y-E)/e);!o&&C>0&&(C-=Math.PI*2),o&&C<0&&(C+=Math.PI*2);let w=jo(Math.max(t,e),C),L=[];for(let F=0;F<=w;F++){let B=T+C*F/w,H=t*Math.cos(B),G=e*Math.sin(B);L.push([u*H-f*G+A,f*H+u*G+S])}return L[0]=n,L[w]=c,L}function Lc(n){let t=1/0,e=1/0,i=-1/0,s=-1/0;for(let o of n)for(let[c,a]of o.pts)c<t&&(t=c),a<e&&(e=a),c>i&&(i=c),a>s&&(s=a);return Number.isFinite(t)?{x0:t,y0:e,x1:i,y1:s,w:i-t,h:s-e}:{x0:0,y0:0,x1:0,y1:0,w:0,h:0}}function os(n,t,e=1e-6){let i=[];for(let s of n)(!i.length||xi(i[i.length-1],s)>e)&&i.push(s);return t&&i.length>2&&xi(i[0],i[i.length-1])>e&&i.push(i[0].slice()),i}function zu(n,t=.05){let e=[],i=[];for(let a of n){if(a.closed||a.pts.length<2){e.push(a);continue}if(xi(a.pts[0],a.pts[a.pts.length-1])<=t&&a.pts.length>2){e.push({...a,closed:!0,pts:os(a.pts.slice(0,-1).concat([a.pts[0]]),!0)});continue}i.push({...a,pts:a.pts.slice()})}let s=0,o=new Map;for(let a of i){let u=a.color+"|"+(a.layer||"");o.has(u)||o.set(u,[]),o.get(u).push(a)}let c=[];for(let a of o.values()){let u=new Array(a.length).fill(!1);for(let f=0;f<a.length;f++){if(u[f])continue;u[f]=!0;let d=a[f],g=!0;for(;g;){g=!1;let m=d.pts[0],y=d.pts[d.pts.length-1];for(let v=0;v<a.length;v++){if(u[v])continue;let b=a[v].pts,x=b[0],_=b[b.length-1];if(xi(y,x)<=t)d.pts.push(...b.slice(1));else if(xi(y,_)<=t)d.pts.push(...b.slice(0,-1).reverse());else if(xi(m,_)<=t)d.pts.unshift(...b.slice(0,-1));else if(xi(m,x)<=t)d.pts.unshift(...b.slice(1).reverse());else continue;u[v]=!0,s++,g=!0;break}}d.pts.length>2&&xi(d.pts[0],d.pts[d.pts.length-1])<=t&&(d.pts[d.pts.length-1]=d.pts[0].slice(),d.closed=!0),c.push(d)}}return{shapes:e.concat(c),joined:s}}var xi,Ko,Rc,Bu,Ri,Ar,ku,Pr=fe(()=>{xi=(n,t)=>Math.hypot(t[0]-n[0],t[1]-n[1]);Ko=(n,t,e)=>{let i=Rs(n,t,e,0,Math.PI*2,!0);return i[i.length-1]=i[0].slice(),i};Rc=(n,t,e,i)=>Ii(n,[n[0]+2/3*(t[0]-n[0]),n[1]+2/3*(t[1]-n[1])],[e[0]+2/3*(t[0]-e[0]),e[1]+2/3*(t[1]-e[1])],e,i);Bu=[1,0,0,1,0,0],Ri=(n,t)=>[n[0]*t[0]+n[2]*t[1],n[1]*t[0]+n[3]*t[1],n[0]*t[2]+n[2]*t[3],n[1]*t[2]+n[3]*t[3],n[0]*t[4]+n[2]*t[5]+n[4],n[1]*t[4]+n[3]*t[5]+n[5]],Ar=(n,t)=>[n[0]*t[0]+n[2]*t[1]+n[4],n[1]*t[0]+n[3]*t[1]+n[5]];ku=(n,t)=>n.map(e=>({...e,pts:e.pts.map(i=>Ar(t,i))}))});function Nc(n){let t=[];for(let y of String(n||"").matchAll(Tm))t.push(y[1]||+y[2]);let e=[],i=0,s="",o=[0,0],c=[0,0],a=null,u=null,f="",d=()=>{let y=t[i++];if(typeof y!="number")throw new Error("bad path data");return y},g=()=>{let y=t[i];if(typeof y=="number"&&(y===0||y===1))return i++,y;if(typeof y=="number"){let v=String(y);return t.splice(i,1,+v[0],+v.slice(1)),i++,+v[0]}throw new Error("bad arc flag")},m=y=>{a&&a.length>1&&e.push({pts:a,closed:!1}),a=[y],c=y};for(;i<t.length;){if(typeof t[i]=="string")s=t[i++];else if(!s)throw new Error("path must start with M");let y=s===s.toLowerCase(),v=s.toUpperCase(),b=(x,_)=>y?[o[0]+x,o[1]+_]:[x,_];switch(v){case"M":{let x=b(d(),d());m(x),o=x,s=y?"l":"L",u=null;break}case"L":{let x=b(d(),d());a.push(x),o=x,u=null;break}case"H":{let x=d(),_=[y?o[0]+x:x,o[1]];a.push(_),o=_,u=null;break}case"V":{let x=d(),_=[o[0],y?o[1]+x:x];a.push(_),o=_,u=null;break}case"C":{let x=b(d(),d()),_=b(d(),d()),E=b(d(),d());Ii(o,x,_,E,a),u=_,o=E;break}case"S":{let x=u&&"CS".includes(f)?[2*o[0]-u[0],2*o[1]-u[1]]:o,_=b(d(),d()),E=b(d(),d());Ii(o,x,_,E,a),u=_,o=E;break}case"Q":{let x=b(d(),d()),_=b(d(),d());Rc(o,x,_,a),u=x,o=_;break}case"T":{let x=u&&"QT".includes(f)?[2*o[0]-u[0],2*o[1]-u[1]]:o,_=b(d(),d());Rc(o,x,_,a),u=x,o=_;break}case"A":{let x=d(),_=d(),E=d(),A=g(),S=g(),R=b(d(),d());a.push(...Uu(o,x,_,E,A,S,R).slice(1)),o=R,u=null;break}case"Z":{a&&a.length>1&&(a.push(c.slice()),e.push({pts:a,closed:!0})),a=[c],o=c,u=null;break}default:throw new Error(`unknown path command ${s}`)}f=v,v==="Z"&&(s="")}return a&&a.length>1&&e.push({pts:a,closed:!1}),e}var Tm,Vu=fe(()=>{Pr();Tm=/([MmLlHhVvCcSsQqTtAaZz])|(-?(?:\d+\.?\d*|\.\d+)(?:[eE][-+]?\d+)?)/g});function Hu(n,t){return n<=9?t:n>=10&&n<=59?parseFloat(t):n>=60&&n<=99?parseInt(t):n>=100&&n<=109?t:n>=110&&n<=149?parseFloat(t):n>=160&&n<=179?parseInt(t):n>=210&&n<=239?parseFloat(t):n>=270&&n<=289?parseInt(t):n>=290&&n<=299?Am(t):n>=300&&n<=369?t:n>=370&&n<=389?parseInt(t):n>=390&&n<=399?t:n>=400&&n<=409?parseInt(t):n>=410&&n<=419?t:n>=420&&n<=429?parseInt(t):n>=430&&n<=439?t:n>=440&&n<=459?parseInt(t):n>=460&&n<=469?parseFloat(t):n>=470&&n<=481||n===999||n>=1e3&&n<=1009?t:n>=1010&&n<=1059?parseFloat(t):n>=1060&&n<=1071?parseInt(t):(console.log("WARNING: Group code does not have a defined type: %j",{code:n,value:t}),t)}function Am(n){if(n==="0")return!1;if(n==="1")return!0;throw TypeError("String '"+n+"' cannot be cast to Boolean type")}var Cr,Gu=fe(()=>{Cr=class{constructor(t){this._pointer=0,this._eof=!1,this._data=t}next(){if(!this.hasNext())throw this._eof?new Error("Cannot call 'next' after EOF group has been read"):new Error("Unexpected end of input: EOF group not read before end of file. Ended on code "+this._data[this._pointer]);let t={code:parseInt(this._data[this._pointer])};return this._pointer++,t.value=Hu(t.code,this._data[this._pointer].trim()),this._pointer++,t.code===0&&t.value==="EOF"&&(this._eof=!0),this.lastReadGroup=t,t}peek(){if(!this.hasNext())throw this._eof?new Error("Cannot call 'next' after EOF group has been read"):new Error("Unexpected end of input: EOF group not read before end of file. Ended on code "+this._data[this._pointer]);let t={code:parseInt(this._data[this._pointer])};return t.value=Hu(t.code,this._data[this._pointer+1].trim()),t}rewind(t=1){this._pointer=this._pointer-t*2}hasNext(){return!(this._eof||this._pointer>this._data.length-2)}isEOF(){return this._eof}}});var ta,Dc=fe(()=>{ta=[0,16711680,16776960,65280,65535,255,16711935,16777215,8421504,12632256,16711680,16744319,13369344,13395558,10027008,10046540,8323072,8339263,4980736,4990502,16727808,16752511,13382400,13401958,10036736,10051404,8331008,8343359,4985600,4992806,16744192,16760703,13395456,13408614,10046464,10056268,8339200,8347455,4990464,4995366,16760576,16768895,13408512,13415014,10056192,10061132,8347392,8351551,4995328,4997670,16776960,16777087,13421568,13421670,10000384,10000460,8355584,8355647,5000192,5000230,12582656,14679935,10079232,11717734,7510016,8755276,6258432,7307071,3755008,4344870,8388352,12582783,6736896,10079334,5019648,7510092,4161280,6258495,2509824,3755046,4194048,10485631,3394560,8375398,2529280,6264908,2064128,5209919,1264640,3099686,65280,8388479,52224,6736998,38912,5019724,32512,4161343,19456,2509862,65343,8388511,52275,6737023,38950,5019743,32543,4161359,19475,2509871,65407,8388543,52326,6737049,38988,5019762,32575,4161375,19494,2509881,65471,8388575,52377,6737074,39026,5019781,32607,4161391,19513,2509890,65535,8388607,52428,6737100,39064,5019800,32639,4161407,19532,2509900,49151,8380415,39372,6730444,29336,5014936,24447,4157311,14668,2507340,32767,8372223,26316,6724044,19608,5010072,16255,4153215,9804,2505036,16383,8364031,13260,6717388,9880,5005208,8063,4149119,4940,2502476,255,8355839,204,6710988,152,5000344,127,4145023,76,2500172,4129023,10452991,3342540,8349388,2490520,6245528,2031743,5193599,1245260,3089996,8323327,12550143,6684876,10053324,4980888,7490712,4128895,6242175,2490444,3745356,12517631,14647295,10027212,11691724,7471256,8735896,6226047,7290751,3735628,4335180,16711935,16744447,13369548,13395660,9961624,9981080,8323199,8339327,4980812,4990540,16711871,16744415,13369497,13395634,9961586,9981061,8323167,8339311,4980793,4990530,16711807,16744383,13369446,13395609,9961548,9981042,8323135,8339295,4980774,4990521,16711743,16744351,13369395,13395583,9961510,9981023,8323103,8339279,4980755,4990511,3355443,5987163,8684676,11382189,14079702,16777215]});function Pm(n){return ta[n]}function oe(n){let t={};n.rewind();let e=n.next(),i=e.code;if(t.x=e.value,i+=10,e=n.next(),e.code!=i)throw new Error("Expected code for point value to be "+i+" but got "+e.code+".");return t.y=e.value,i+=10,e=n.next(),e.code!=i?(n.rewind(),t):(t.z=e.value,t)}function Ee(n,t,e){switch(t.code){case 0:n.type=t.value;break;case 5:n.handle=t.value;break;case 6:n.lineType=t.value;break;case 8:n.layer=t.value;break;case 48:n.lineTypeScale=t.value;break;case 60:n.visible=t.value===0;break;case 62:n.colorIndex=t.value,n.color=Pm(Math.abs(t.value));break;case 67:n.inPaperSpace=t.value!==0;break;case 100:break;case 101:for(;t.code!=0;)t=e.next();e.rewind();break;case 330:n.ownerHandle=t.value;break;case 347:n.materialObjectHandle=t.value;break;case 370:n.lineweight=t.value;break;case 420:n.color=t.value;break;case 1e3:n.extendedData=n.extendedData||{},n.extendedData.customStrings=n.extendedData.customStrings||[],n.extendedData.customStrings.push(t.value);break;case 1001:n.extendedData=n.extendedData||{},n.extendedData.applicationName=t.value;break;default:return!1}return!0}var dn=fe(()=>{Dc()});function Cm(n,t){var e=[],i=!1,s=!1,o=4;for(let a=0;a<=o;a++){for(var c={};!n.isEOF()&&!(t.code===0||s);){switch(t.code){case 10:case 11:case 12:case 13:if(i){s=!0;continue}c.x=t.value,i=!0;break;case 20:case 21:case 22:case 23:c.y=t.value;break;case 30:case 31:case 32:case 33:c.z=t.value;break;default:return e}t=n.next()}e.push(c),i=!1,s=!1}return n.rewind(),e}var Ir,Xu=fe(()=>{dn();Ir=class{constructor(){this.ForEntityName="3DFACE"}parseEntity(t,e){let i={type:e.value,vertices:[]};for(e=t.next();!t.isEOF()&&e.code!==0;){switch(e.code){case 70:i.shape=(e.value&1)===1,i.hasContinuousLinetypePattern=(e.value&128)===128;break;case 10:i.vertices=Cm(t,e),e=t.lastReadGroup;break;default:Ee(i,e,t);break}e=t.next()}return i}}});var Rr,Wu=fe(()=>{dn();Rr=class{constructor(){this.ForEntityName="ARC"}parseEntity(t,e){let i={type:e.value};for(e=t.next();!t.isEOF()&&e.code!==0;){switch(e.code){case 10:i.center=oe(t);break;case 40:i.radius=e.value;break;case 50:i.startAngle=Math.PI/180*e.value;break;case 51:i.endAngle=Math.PI/180*e.value,i.angleLength=i.endAngle-i.startAngle;break;case 210:i.extrusionDirectionX=e.value;break;case 220:i.extrusionDirectionY=e.value;break;case 230:i.extrusionDirectionZ=e.value;break;default:Ee(i,e,t);break}e=t.next()}return i}}});var Lr,Yu=fe(()=>{dn();Lr=class{constructor(){this.ForEntityName="ATTDEF"}parseEntity(t,e){var i={type:e.value,scale:1,textStyle:"STANDARD"};for(e=t.next();!t.isEOF()&&e.code!==0;){switch(e.code){case 1:i.text=e.value;break;case 2:i.tag=e.value;break;case 3:i.prompt=e.value;break;case 7:i.textStyle=e.value;break;case 10:i.startPoint=oe(t);break;case 11:i.endPoint=oe(t);break;case 39:i.thickness=e.value;break;case 40:i.textHeight=e.value;break;case 41:i.scale=e.value;break;case 50:i.rotation=e.value;break;case 51:i.obliqueAngle=e.value;break;case 70:i.invisible=!!(e.value&1),i.constant=!!(e.value&2),i.verificationRequired=!!(e.value&4),i.preset=!!(e.value&8);break;case 71:i.backwards=!!(e.value&2),i.mirrored=!!(e.value&4);break;case 72:i.horizontalJustification=e.value;break;case 73:i.fieldLength=e.value;break;case 74:i.verticalJustification=e.value;break;case 100:break;case 210:i.extrusionDirectionX=e.value;break;case 220:i.extrusionDirectionY=e.value;break;case 230:i.extrusionDirectionZ=e.value;break;default:Ee(i,e,t);break}e=t.next()}return i}}});var Nr,$u=fe(()=>{dn();Nr=class{constructor(){this.ForEntityName="CIRCLE"}parseEntity(t,e){let i={type:e.value};for(e=t.next();!t.isEOF()&&e.code!==0;){switch(e.code){case 10:i.center=oe(t);break;case 40:i.radius=e.value;break;case 50:i.startAngle=Math.PI/180*e.value;break;case 51:let s=Math.PI/180*e.value;s<i.startAngle?i.angleLength=s+2*Math.PI-i.startAngle:i.angleLength=s-i.startAngle,i.endAngle=s;break;default:Ee(i,e,t);break}e=t.next()}return i}}});var Dr,qu=fe(()=>{dn();Dr=class{constructor(){this.ForEntityName="DIMENSION"}parseEntity(t,e){let i={type:e.value};for(e=t.next();!t.isEOF()&&e.code!==0;){switch(e.code){case 2:i.block=e.value;break;case 10:i.anchorPoint=oe(t);break;case 11:i.middleOfText=oe(t);break;case 12:i.insertionPoint=oe(t);break;case 13:i.linearOrAngularPoint1=oe(t);break;case 14:i.linearOrAngularPoint2=oe(t);break;case 15:i.diameterOrRadiusPoint=oe(t);break;case 16:i.arcPoint=oe(t);break;case 70:i.dimensionType=e.value;break;case 71:i.attachmentPoint=e.value;break;case 42:i.actualMeasurement=e.value;break;case 1:i.text=e.value;break;case 50:i.angle=e.value;break;default:Ee(i,e,t);break}e=t.next()}return i}}});var Or,Zu=fe(()=>{dn();Or=class{constructor(){this.ForEntityName="ELLIPSE"}parseEntity(t,e){let i={type:e.value};for(e=t.next();!t.isEOF()&&e.code!==0;){switch(e.code){case 10:i.center=oe(t);break;case 11:i.majorAxisEndPoint=oe(t);break;case 40:i.axisRatio=e.value;break;case 41:i.startAngle=e.value;break;case 42:i.endAngle=e.value;break;case 2:i.name=e.value;break;default:Ee(i,e,t);break}e=t.next()}return i}}});var Fr,Ju=fe(()=>{dn();Fr=class{constructor(){this.ForEntityName="INSERT"}parseEntity(t,e){let i={type:e.value};for(e=t.next();!t.isEOF()&&e.code!==0;){switch(e.code){case 2:i.name=e.value;break;case 41:i.xScale=e.value;break;case 42:i.yScale=e.value;break;case 43:i.zScale=e.value;break;case 10:i.position=oe(t);break;case 50:i.rotation=e.value;break;case 70:i.columnCount=e.value;break;case 71:i.rowCount=e.value;break;case 44:i.columnSpacing=e.value;break;case 45:i.rowSpacing=e.value;break;case 210:i.extrusionDirection=oe(t);break;default:Ee(i,e,t);break}e=t.next()}return i}}});var Ur,ju=fe(()=>{dn();Ur=class{constructor(){this.ForEntityName="LINE"}parseEntity(t,e){let i={type:e.value,vertices:[]};for(e=t.next();!t.isEOF()&&e.code!==0;){switch(e.code){case 10:i.vertices.unshift(oe(t));break;case 11:i.vertices.push(oe(t));break;case 210:i.extrusionDirection=oe(t);break;case 100:break;default:Ee(i,e,t);break}e=t.next()}return i}}});function Im(n,t){if(!n||n<=0)throw Error("n must be greater than 0 verticies");let e=[],i=!1,s=!1,o=t.lastReadGroup;for(let c=0;c<n;c++){let a={};for(;!t.isEOF()&&!(o.code===0||s);){switch(o.code){case 10:if(i){s=!0;continue}a.x=o.value,i=!0;break;case 20:a.y=o.value;break;case 30:a.z=o.value;break;case 40:a.startWidth=o.value;break;case 41:a.endWidth=o.value;break;case 42:o.value!=0&&(a.bulge=o.value);break;default:return t.rewind(),i&&e.push(a),t.rewind(),e}o=t.next()}e.push(a),i=!1,s=!1}return t.rewind(),e}var Br,Ku=fe(()=>{dn();Br=class{constructor(){this.ForEntityName="LWPOLYLINE"}parseEntity(t,e){let i={type:e.value,vertices:[]},s=0;for(e=t.next();!t.isEOF()&&e.code!==0;){switch(e.code){case 38:i.elevation=e.value;break;case 39:i.depth=e.value;break;case 70:i.shape=(e.value&1)===1,i.hasContinuousLinetypePattern=(e.value&128)===128;break;case 90:s=e.value;break;case 10:i.vertices=Im(s,t);break;case 43:e.value!==0&&(i.width=e.value);break;case 210:i.extrusionDirectionX=e.value;break;case 220:i.extrusionDirectionY=e.value;break;case 230:i.extrusionDirectionZ=e.value;break;default:Ee(i,e,t);break}e=t.next()}return i}}});var kr,Qu=fe(()=>{dn();kr=class{constructor(){this.ForEntityName="MTEXT"}parseEntity(t,e){let i={type:e.value};for(e=t.next();!t.isEOF()&&e.code!==0;){switch(e.code){case 3:i.text?i.text+=e.value:i.text=e.value;break;case 1:i.text?i.text+=e.value:i.text=e.value;break;case 10:i.position=oe(t);break;case 11:i.directionVector=oe(t);break;case 40:i.height=e.value;break;case 41:i.width=e.value;break;case 50:i.rotation=e.value;break;case 71:i.attachmentPoint=e.value;break;case 72:i.drawingDirection=e.value;break;default:Ee(i,e,t);break}e=t.next()}return i}}});var zr,tf=fe(()=>{dn();zr=class{constructor(){this.ForEntityName="POINT"}parseEntity(t,e){let s={type:e.value};for(e=t.next();!t.isEOF()&&e.code!==0;){switch(e.code){case 10:s.position=oe(t);break;case 39:s.thickness=e.value;break;case 210:s.extrusionDirection=oe(t);break;case 100:break;default:Ee(s,e,t);break}e=t.next()}return s}}});var Vr,ef=fe(()=>{dn();Vr=class{constructor(){this.ForEntityName="VERTEX"}parseEntity(t,e){var i={type:e.value};for(e=t.next();!t.isEOF()&&e.code!==0;){switch(e.code){case 10:i.x=e.value;break;case 20:i.y=e.value;break;case 30:i.z=e.value;break;case 40:break;case 41:break;case 42:e.value!=0&&(i.bulge=e.value);break;case 70:i.curveFittingVertex=(e.value&1)!==0,i.curveFitTangent=(e.value&2)!==0,i.splineVertex=(e.value&8)!==0,i.splineControlPoint=(e.value&16)!==0,i.threeDPolylineVertex=(e.value&32)!==0,i.threeDPolylineMesh=(e.value&64)!==0,i.polyfaceMeshVertex=(e.value&128)!==0;break;case 50:break;case 71:i.faceA=e.value;break;case 72:i.faceB=e.value;break;case 73:i.faceC=e.value;break;case 74:i.faceD=e.value;break;default:Ee(i,e,t);break}e=t.next()}return i}}});function Rm(n,t){let e=new Vr,i=[];for(;!n.isEOF();)if(t.code===0){if(t.value==="VERTEX")i.push(e.parseEntity(n,t)),t=n.lastReadGroup;else if(t.value==="SEQEND"){Lm(n,t);break}}return i}function Lm(n,t){let e={type:t.value};for(t=n.next();!n.isEOF()&&t.code!=0;)Ee(e,t,n),t=n.next();return e}var Hr,nf=fe(()=>{dn();ef();Hr=class{constructor(){this.ForEntityName="POLYLINE"}parseEntity(t,e){var i={type:e.value,vertices:[]};for(e=t.next();!t.isEOF()&&e.code!==0;){switch(e.code){case 10:break;case 20:break;case 30:break;case 39:i.thickness=e.value;break;case 40:break;case 41:break;case 70:i.shape=(e.value&1)!==0,i.includesCurveFitVertices=(e.value&2)!==0,i.includesSplineFitVertices=(e.value&4)!==0,i.is3dPolyline=(e.value&8)!==0,i.is3dPolygonMesh=(e.value&16)!==0,i.is3dPolygonMeshClosed=(e.value&32)!==0,i.isPolyfaceMesh=(e.value&64)!==0,i.hasContinuousLinetypePattern=(e.value&128)!==0;break;case 71:break;case 72:break;case 73:break;case 74:break;case 75:break;case 210:i.extrusionDirection=oe(t);break;default:Ee(i,e,t);break}e=t.next()}return i.vertices=Rm(t,e),i}}});var Gr,sf=fe(()=>{dn();Gr=class{constructor(){this.ForEntityName="SOLID"}parseEntity(t,e){let i={type:e.value,points:[]};for(e=t.next();!t.isEOF()&&e.code!==0;){switch(e.code){case 10:i.points[0]=oe(t);break;case 11:i.points[1]=oe(t);break;case 12:i.points[2]=oe(t);break;case 13:i.points[3]=oe(t);break;case 210:i.extrusionDirection=oe(t);break;default:Ee(i,e,t);break}e=t.next()}return i}}});var Xr,rf=fe(()=>{dn();Xr=class{constructor(){this.ForEntityName="SPLINE"}parseEntity(t,e){let i={type:e.value};for(e=t.next();!t.isEOF()&&e.code!==0;){switch(e.code){case 10:i.controlPoints||(i.controlPoints=[]),i.controlPoints.push(oe(t));break;case 11:i.fitPoints||(i.fitPoints=[]),i.fitPoints.push(oe(t));break;case 12:i.startTangent=oe(t);break;case 13:i.endTangent=oe(t);break;case 40:i.knotValues||(i.knotValues=[]),i.knotValues.push(e.value);break;case 70:(e.value&1)!=0&&(i.closed=!0),(e.value&2)!=0&&(i.periodic=!0),(e.value&4)!=0&&(i.rational=!0),(e.value&8)!=0&&(i.planar=!0),(e.value&16)!=0&&(i.planar=!0,i.linear=!0);break;case 71:i.degreeOfSplineCurve=e.value;break;case 72:i.numberOfKnots=e.value;break;case 73:i.numberOfControlPoints=e.value;break;case 74:i.numberOfFitPoints=e.value;break;case 210:i.normalVector=oe(t);break;default:Ee(i,e,t);break}e=t.next()}return i}}});var Wr,of=fe(()=>{dn();Wr=class{constructor(){this.ForEntityName="TEXT"}parseEntity(t,e){let i={type:e.value};for(e=t.next();!t.isEOF()&&e.code!==0;){switch(e.code){case 10:i.startPoint=oe(t);break;case 11:i.endPoint=oe(t);break;case 40:i.textHeight=e.value;break;case 41:i.xScale=e.value;break;case 50:i.rotation=e.value;break;case 1:i.text=e.value;break;case 72:i.halign=e.value;break;case 73:i.valign=e.value;break;default:Ee(i,e,t);break}e=t.next()}return i}}});var lf=Nu((af,ea)=>{(function(n,t){"use strict";typeof define=="function"&&define.amd?define(t):typeof ea=="object"&&ea.exports?ea.exports=t():n.log=t()})(af,function(){"use strict";var n=function(){},t="undefined",e=typeof window!==t&&typeof window.navigator!==t&&/Trident\/|MSIE /.test(window.navigator.userAgent),i=["trace","debug","info","warn","error"],s={},o=null;function c(v,b){var x=v[b];if(typeof x.bind=="function")return x.bind(v);try{return Function.prototype.bind.call(x,v)}catch{return function(){return Function.prototype.apply.apply(x,[v,arguments])}}}function a(){console.log&&(console.log.apply?console.log.apply(console,arguments):Function.prototype.apply.apply(console.log,[console,arguments])),console.trace&&console.trace()}function u(v){return v==="debug"&&(v="log"),typeof console===t?!1:v==="trace"&&e?a:console[v]!==void 0?c(console,v):console.log!==void 0?c(console,"log"):n}function f(){for(var v=this.getLevel(),b=0;b<i.length;b++){var x=i[b];this[x]=b<v?n:this.methodFactory(x,v,this.name)}if(this.log=this.debug,typeof console===t&&v<this.levels.SILENT)return"No console available for logging"}function d(v){return function(){typeof console!==t&&(f.call(this),this[v].apply(this,arguments))}}function g(v,b,x){return u(v)||d.apply(this,arguments)}function m(v,b){var x=this,_,E,A,S="loglevel";typeof v=="string"?S+=":"+v:typeof v=="symbol"&&(S=void 0);function R(F){var B=(i[F]||"silent").toUpperCase();if(!(typeof window===t||!S)){try{window.localStorage[S]=B;return}catch{}try{window.document.cookie=encodeURIComponent(S)+"="+B+";"}catch{}}}function T(){var F;if(!(typeof window===t||!S)){try{F=window.localStorage[S]}catch{}if(typeof F===t)try{var B=window.document.cookie,H=encodeURIComponent(S),G=B.indexOf(H+"=");G!==-1&&(F=/^([^;]+)/.exec(B.slice(G+H.length+1))[1])}catch{}return x.levels[F]===void 0&&(F=void 0),F}}function C(){if(!(typeof window===t||!S)){try{window.localStorage.removeItem(S)}catch{}try{window.document.cookie=encodeURIComponent(S)+"=; expires=Thu, 01 Jan 1970 00:00:00 UTC"}catch{}}}function w(F){var B=F;if(typeof B=="string"&&x.levels[B.toUpperCase()]!==void 0&&(B=x.levels[B.toUpperCase()]),typeof B=="number"&&B>=0&&B<=x.levels.SILENT)return B;throw new TypeError("log.setLevel() called with invalid level: "+F)}x.name=v,x.levels={TRACE:0,DEBUG:1,INFO:2,WARN:3,ERROR:4,SILENT:5},x.methodFactory=b||g,x.getLevel=function(){return A??E??_},x.setLevel=function(F,B){return A=w(F),B!==!1&&R(A),f.call(x)},x.setDefaultLevel=function(F){E=w(F),T()||x.setLevel(F,!1)},x.resetLevel=function(){A=null,C(),f.call(x)},x.enableAll=function(F){x.setLevel(x.levels.TRACE,F)},x.disableAll=function(F){x.setLevel(x.levels.SILENT,F)},x.rebuild=function(){if(o!==x&&(_=w(o.getLevel())),f.call(x),o===x)for(var F in s)s[F].rebuild()},_=w(o?o.getLevel():"WARN");var L=T();L!=null&&(A=w(L)),f.call(x)}o=new m,o.getLogger=function(b){if(typeof b!="symbol"&&typeof b!="string"||b==="")throw new TypeError("You must supply a name when creating a logger.");var x=s[b];return x||(x=s[b]=new m(b,o.methodFactory)),x};var y=typeof window!==t?window.log:void 0;return o.noConflict=function(){return typeof window!==t&&window.log===o&&(window.log=y),o},o.getLoggers=function(){return s},o.default=o,o})});function Nm(n){n.registerEntityHandler(Ir),n.registerEntityHandler(Rr),n.registerEntityHandler(Lr),n.registerEntityHandler(Nr),n.registerEntityHandler(Dr),n.registerEntityHandler(Or),n.registerEntityHandler(Fr),n.registerEntityHandler(Ur),n.registerEntityHandler(Br),n.registerEntityHandler(kr),n.registerEntityHandler(zr),n.registerEntityHandler(Hr),n.registerEntityHandler(Gr),n.registerEntityHandler(Xr),n.registerEntityHandler(Wr)}function oi(n,t,e){return n.code===t&&n.value===e}function as(n){be.default.debug("unhandled group "+cf(n))}function cf(n){return n.code+":"+n.value}function Dm(n){return ta[n]}var be,Ls,Oc=fe(()=>{Gu();Dc();Xu();Wu();Yu();$u();qu();Zu();Ju();ju();Ku();Qu();tf();nf();sf();rf();of();be=Ou(lf());be.default.setLevel("error");Ls=class{constructor(){this._entityHandlers={},Nm(this)}parse(t){return typeof t=="string"?this._parse(t):(console.error("Cannot read dxf source of type `"+typeof t),null)}registerEntityHandler(t){let e=new t;this._entityHandlers[e.ForEntityName]=e}parseSync(t){return this.parse(t)}parseStream(t){let e="",i=this;return new Promise((s,o)=>{t.on("data",c=>{e+=c}),t.on("end",()=>{try{s(i._parse(e))}catch(c){o(c)}}),t.on("error",c=>{o(c)})})}_parse(t){let e={},i=0,s=t.split(/\r\n|\r|\n/g),o=new Cr(s);if(!o.hasNext())throw Error("Empty file");let c=this,a;function u(){for(a=o.next();!o.isEOF();)if(a.code===0&&a.value==="SECTION"){if(a=o.next(),a.code!==2){console.error("Unexpected code %s after 0:SECTION",cf(a)),a=o.next();continue}a.value==="HEADER"?(be.default.debug("> HEADER"),e.header=f(),be.default.debug("<")):a.value==="BLOCKS"?(be.default.debug("> BLOCKS"),e.blocks=d(),be.default.debug("<")):a.value==="ENTITIES"?(be.default.debug("> ENTITIES"),e.entities=A(!1),be.default.debug("<")):a.value==="TABLES"?(be.default.debug("> TABLES"),e.tables=m(),be.default.debug("<")):a.value==="EOF"?be.default.debug("EOF"):be.default.warn("Skipping section '%s'",a.value)}else a=o.next()}function f(){let T=null,C=null,w={};for(a=o.next();;){if(oi(a,0,"ENDSEC")){T&&(w[T]=C);break}else a.code===9?(T&&(w[T]=C),T=a.value):a.code===10?C={x:a.value}:a.code===20?C.y=a.value:a.code===30?C.z=a.value:C=a.value;a=o.next()}return a=o.next(),w}function d(){let T={};for(a=o.next();a.value!=="EOF"&&!oi(a,0,"ENDSEC");)if(oi(a,0,"BLOCK")){be.default.debug("block {");let C=g();be.default.debug("}"),R(C),C.name?T[C.name]=C:be.default.error('block with handle "'+C.handle+'" is missing a name.')}else as(a),a=o.next();return T}function g(){let T={};for(a=o.next();a.value!=="EOF";){switch(a.code){case 1:T.xrefPath=a.value,a=o.next();break;case 2:T.name=a.value,a=o.next();break;case 3:T.name2=a.value,a=o.next();break;case 5:T.handle=a.value,a=o.next();break;case 8:T.layer=a.value,a=o.next();break;case 10:T.position=S(a),a=o.next();break;case 67:T.paperSpace=!!(a.value&&a.value==1),a=o.next();break;case 70:a.value!=0&&(T.type=a.value),a=o.next();break;case 100:a=o.next();break;case 330:T.ownerHandle=a.value,a=o.next();break;case 0:if(a.value=="ENDBLK")break;T.entities=A(!0);break;default:as(a),a=o.next()}if(oi(a,0,"ENDBLK")){a=o.next();break}}return T}function m(){let T={};for(a=o.next();a.value!=="EOF"&&!oi(a,0,"ENDSEC");)oi(a,0,"TABLE")?(a=o.next(),E[a.value]?(be.default.debug(a.value+" Table {"),T[E[a.value].tableName]=v(a),be.default.debug("}")):be.default.debug("Unhandled Table "+a.value)):a=o.next();return a=o.next(),T}let y="ENDTAB";function v(T){let C=E[T.value],w={},L=0;for(a=o.next();!oi(a,0,y);)switch(a.code){case 5:w.handle=a.value,a=o.next();break;case 330:w.ownerHandle=a.value,a=o.next();break;case 100:a.value==="AcDbSymbolTable"||as(a),a=o.next();break;case 70:L=a.value,a=o.next();break;case 0:a.value===C.dxfSymbolName?w[C.tableRecordsProperty]=C.parseTableRecords():(as(a),a=o.next());break;default:as(a),a=o.next()}let F=w[C.tableRecordsProperty];if(F){let B=(()=>{if(F.constructor===Array)return F.length;if(typeof F=="object")return Object.keys(F).length})();L!==B&&be.default.warn("Parsed "+B+" "+C.dxfSymbolName+"'s but expected "+L)}return a=o.next(),w}function b(){let T=[],C={};for(be.default.debug("ViewPort {"),a=o.next();!oi(a,0,y);)switch(a.code){case 2:C.name=a.value,a=o.next();break;case 10:C.lowerLeftCorner=S(a),a=o.next();break;case 11:C.upperRightCorner=S(a),a=o.next();break;case 12:C.center=S(a),a=o.next();break;case 13:C.snapBasePoint=S(a),a=o.next();break;case 14:C.snapSpacing=S(a),a=o.next();break;case 15:C.gridSpacing=S(a),a=o.next();break;case 16:C.viewDirectionFromTarget=S(a),a=o.next();break;case 17:C.viewTarget=S(a),a=o.next();break;case 42:C.lensLength=a.value,a=o.next();break;case 43:C.frontClippingPlane=a.value,a=o.next();break;case 44:C.backClippingPlane=a.value,a=o.next();break;case 45:C.viewHeight=a.value,a=o.next();break;case 50:C.snapRotationAngle=a.value,a=o.next();break;case 51:C.viewTwistAngle=a.value,a=o.next();break;case 79:C.orthographicType=a.value,a=o.next();break;case 110:C.ucsOrigin=S(a),a=o.next();break;case 111:C.ucsXAxis=S(a),a=o.next();break;case 112:C.ucsYAxis=S(a),a=o.next();break;case 110:C.ucsOrigin=S(a),a=o.next();break;case 281:C.renderMode=a.value,a=o.next();break;case 281:C.defaultLightingType=a.value,a=o.next();break;case 292:C.defaultLightingOn=a.value,a=o.next();break;case 330:C.ownerHandle=a.value,a=o.next();break;case 63:case 421:case 431:C.ambientColor=a.value,a=o.next();break;case 0:a.value==="VPORT"&&(be.default.debug("}"),T.push(C),be.default.debug("ViewPort {"),C={},a=o.next());break;default:as(a),a=o.next();break}return be.default.debug("}"),T.push(C),T}function x(){let T={},C={},w=0,L;for(be.default.debug("LType {"),a=o.next();!oi(a,0,"ENDTAB");)switch(a.code){case 2:C.name=a.value,L=a.value,a=o.next();break;case 3:C.description=a.value,a=o.next();break;case 73:w=a.value,w>0&&(C.pattern=[]),a=o.next();break;case 40:C.patternLength=a.value,a=o.next();break;case 49:C.pattern.push(a.value),a=o.next();break;case 0:be.default.debug("}"),w>0&&w!==C.pattern.length&&be.default.warn("lengths do not match on LTYPE pattern"),T[L]=C,C={},be.default.debug("LType {"),a=o.next();break;default:a=o.next()}return be.default.debug("}"),T[L]=C,T}function _(){let T={},C={},w;for(be.default.debug("Layer {"),a=o.next();!oi(a,0,"ENDTAB");)switch(a.code){case 2:C.name=a.value,w=a.value,a=o.next();break;case 62:C.visible=a.value>=0,C.colorIndex=Math.abs(a.value),C.color=Dm(C.colorIndex),a=o.next();break;case 70:C.frozen=(a.value&1)!=0||(a.value&2)!=0,a=o.next();break;case 0:a.value==="LAYER"&&(be.default.debug("}"),T[w]=C,be.default.debug("Layer {"),C={},w=void 0,a=o.next());break;default:as(a),a=o.next();break}return be.default.debug("}"),T[w]=C,T}let E={VPORT:{tableRecordsProperty:"viewPorts",tableName:"viewPort",dxfSymbolName:"VPORT",parseTableRecords:b},LTYPE:{tableRecordsProperty:"lineTypes",tableName:"lineType",dxfSymbolName:"LTYPE",parseTableRecords:x},LAYER:{tableRecordsProperty:"layers",tableName:"layer",dxfSymbolName:"LAYER",parseTableRecords:_}};function A(T){let C=[],w=T?"ENDBLK":"ENDSEC";for(T||(a=o.next());;)if(a.code===0){if(a.value===w)break;let L=c._entityHandlers[a.value];if(L!=null){be.default.debug(a.value+" {");let F=L.parseEntity(o,a);a=o.lastReadGroup,be.default.debug("}"),R(F),C.push(F)}else{be.default.warn("Unhandled entity "+a.value),a=o.next();continue}}else a=o.next();return w=="ENDSEC"&&(a=o.next()),C}function S(T){let C={},w=T.code;if(C.x=T.value,w+=10,T=o.next(),T.code!=w)throw new Error("Expected code for point value to be "+w+" but got "+T.code+".");return C.y=T.value,w+=10,T=o.next(),T.code!=w?(o.rewind(),C):(C.z=T.value,C)}function R(T){if(!T)throw new TypeError("entity cannot be undefined or null");T.handle||(T.handle=i++)}return u(),e}}});var hf,uf=fe(()=>{Oc();Oc();hf=Ls});function Fc(n){let t;try{t=new hf().parseSync(n)}catch(b){throw new Error(`This DXF could not be read (${b.message||b}). Save it again as ASCII DXF.`)}if(!t)throw new Error("This DXF could not be read. Save it again as ASCII DXF.");let e=Number(t.header?.$INSUNITS??0),i=Om[e]??1,s=t.tables?.layer?.layers||{},o=[],c={},a=b=>{c[b]=(c[b]||0)+1},u=(b,x)=>{let _=b.colorIndex;if(b.color!==void 0&&_!==0&&_!==256)return ff(b.color);if(_===0&&x)return x;let E=s[b.layer];return E&&E.color!==void 0?ff(E.color):x||"#000000"},f=(b,x,_,E,A)=>{if(b.length<2)return;let S=os(b.map(R=>Ar(E,R)),x);S.length<2||o.push({pts:S,closed:x&&S.length>2,color:A,layer:_.layer||"0"})},d=b=>(b.extrusionDirectionZ??b.extrusionDirection?.z??1)<0?[-1,0,0,1,0,0]:Bu;function g(b,x,_){let E=Math.hypot(x.x-b.x,x.y-b.y);if(E<1e-12)return[];let A=Math.abs(_),S=E*(1+A*A)/(4*A),R=(b.x+x.x)/2,T=(b.y+x.y)/2,C=Math.sign(_)*(S-A*E/2),w=-(x.y-b.y)/E,L=(x.x-b.x)/E,F=R+w*C,B=T+L*C,H=Math.atan2(b.y-B,b.x-F),G=Math.atan2(x.y-B,x.x-F);return Rs(F,B,S,H,G,_>0).slice(1)}function m(b,x,_){let E=(b.vertices||[]).filter(T=>Number.isFinite(T.x)&&Number.isFinite(T.y));if(E.length<2)return;let A=!!b.shape,S=[[E[0].x,E[0].y]],R=A?E.length:E.length-1;for(let T=0;T<R;T++){let C=E[T],w=E[(T+1)%E.length];C.bulge?S.push(...g(C,w,C.bulge)):S.push([w.x,w.y])}f(S,A,b,x,_)}function y(b,x,_){let E=(b.controlPoints||[]).map(T=>[T.x,T.y]),A=b.knotValues||[],S=b.degreeOfSplineCurve||3;if(E.length>S&&A.length===E.length+S+1){let T=A[S],C=A[E.length],w=0;for(let B=1;B<E.length;B++)w+=Math.hypot(E[B][0]-E[B-1][0],E[B][1]-E[B-1][1]);let L=Math.max(E.length*8,Math.min(4e3,Math.ceil(w/.2))),F=[];for(let B=0;B<=L;B++)F.push(Um(S,E,A,T+(C-T)*B/L));return f(F,!!b.closed,b,x,_)}let R=(b.fitPoints||[]).map(T=>[T.x,T.y]);R.length>1&&f(R,!!b.closed,b,x,_)}function v(b,x,_,E){if(!(E>8))for(let A of b||[]){if(A.inPaperSpace||A.visible===!1)continue;let S=s[A.layer];if(S&&(S.visible===!1||S.frozen))continue;let R=u(A,_),T=Ri(x,d(A));switch(A.type){case"LINE":A.vertices?.length>=2&&f(A.vertices.map(C=>[C.x,C.y]),!1,A,x,R);break;case"LWPOLYLINE":case"POLYLINE":if(A.is3dPolygonMesh||A.isPolyfaceMesh){a("mesh");break}m(A,T,R);break;case"CIRCLE":f(Ko(A.center.x,A.center.y,A.radius),!0,A,T,R);break;case"ARC":f(Rs(A.center.x,A.center.y,A.radius,A.startAngle,A.endAngle,!0),!1,A,T,R);break;case"ELLIPSE":{let C=A.startAngle===void 0||Math.abs((A.endAngle??0)-(A.startAngle??0)-Math.PI*2)<1e-6||A.startAngle===0&&Math.abs(A.endAngle-Math.PI*2)<1e-6,w=Qo(A.center.x,A.center.y,A.majorAxisEndPoint.x,A.majorAxisEndPoint.y,A.axisRatio,A.startAngle??0,A.endAngle??Math.PI*2);f(w,C,A,T,R);break}case"SPLINE":y(A,x,R);break;case"SOLID":{let C=(A.points||[]).filter(Boolean);if(C.length>=3){let w=C.length===4?[C[0],C[1],C[3],C[2]]:C;f(w.map(L=>[L.x,L.y]).concat([[w[0].x,w[0].y]]),!0,A,T,R)}break}case"INSERT":{let C=t.blocks?.[A.name];if(!C){a("missing block");break}let w=(A.rotation||0)*Math.PI/180,L=Math.cos(w),F=Math.sin(w),B=A.xScale??1,H=A.yScale??1,G=C.position||{x:0,y:0},z=Math.max(1,A.columnCount||1),$=Math.max(1,A.rowCount||1);for(let Y=0;Y<$;Y++)for(let k=0;k<z;k++){let j=(A.position?.x||0)+k*(A.columnSpacing||0)*L-Y*(A.rowSpacing||0)*F,Z=(A.position?.y||0)+k*(A.columnSpacing||0)*F+Y*(A.rowSpacing||0)*L,st=Ri(Ri(x,[L*B,F*B,-F*H,L*H,j,Z]),[1,0,0,1,-G.x,-G.y]);v(C.entities,st,R,E+1)}break}case"TEXT":case"MTEXT":case"ATTDEF":a("text");break;case"DIMENSION":a("dimension");break;case"POINT":break;default:a(A.type.toLowerCase())}}}return v(t.entities,[i,0,0,i,0,0],null,0),{shapes:o,units:Fm[e]??"mm",skipped:c}}function Um(n,t,e,i){let s=n;for(;s<t.length-1&&i>=e[s+1];)s++;let o=[];for(let c=0;c<=n;c++)o.push(t[c+s-n].slice());for(let c=1;c<=n;c++)for(let a=n;a>=c;a--){let u=a+s-n,f=e[u+n-c+1]-e[u],d=f===0?0:(i-e[u])/f;o[a]=[(1-d)*o[a-1][0]+d*o[a][0],(1-d)*o[a-1][1]+d*o[a][1]]}return o[n]}var Om,Fm,ff,df=fe(()=>{uf();Pr();Om={0:1,1:25.4,2:304.8,4:1,5:10,6:1e3,8:254e-7,9:.0254,10:914.4,13:.001,14:100},Fm={0:"mm (no units set)",1:"in",2:"ft",4:"mm",5:"cm",6:"m",8:"\xB5in",9:"mil",10:"yd",13:"\xB5m",14:"dm"},ff=n=>"#"+(n>>>0&16777215).toString(16).padStart(6,"0")});async function Uc(n,t){let e=n instanceof Uint8Array?n:new Uint8Array(n),i=-1;for(let o=0;o<Math.min(e.length-4,1024)&&i<0;o++)Vm(e.subarray(o))&&(i=o);if(i<0)throw new Error(Bm);e=e.slice();let s=await t.getDocument({data:e,isEvalSupported:!1,disableFontFace:!0,useSystemFonts:!1,verbosity:0}).promise;try{let o=await s.getPage(1),c=await o.getOperatorList({annotationMode:t.AnnotationMode.DISABLE}),a=await s.getOptionalContentConfig().catch(()=>null);return{...Hm(o,c,t.OPS,a),units:"pt",pages:s.numPages}}finally{await s.destroy()}}function Hm(n,{fnArray:t,argsArray:e},i,s){let o=[];for(let z in i)o[i[z]]=z;let c=n.getViewport({scale:1}),a=Ri([Yr,0,0,-Yr,0,c.height*Yr],c.transform),u=c.width*Yr,f=c.height*Yr,d=[],g={},m=z=>{g[z]=(g[z]||0)+1},y={ctm:a,stroke:"#000000",fill:"#000000"},v=[],b=[],x=[],_=null,E=[0,0],A=[0,0],S=!1,R=()=>{for(let z=b.length-1;z>=0;z--)if(b[z]?.layer!==void 0)return b[z].layer;return""},T=()=>b.some(z=>z?.hidden),C=(z,$)=>Ar(y.ctm,[z,$]),w=(z,$)=>{_={pts:[C(z,$)],closed:!1},x.push(_),E=A=[z,$]},L=()=>{_||w(E[0],E[1])},F=()=>{_&&(_.closed=!0,_=null,E=A)};function B(z,$){let Y=0;for(let k of z)switch(o[k]){case"moveTo":w($[Y],$[Y+1]),Y+=2;break;case"lineTo":L(),E=[$[Y],$[Y+1]],_.pts.push(C(...E)),Y+=2;break;case"curveTo":case"curveTo2":case"curveTo3":{L();let j,Z,st;o[k]==="curveTo"?(j=[$[Y],$[Y+1]],Z=[$[Y+2],$[Y+3]],st=[$[Y+4],$[Y+5]],Y+=6):o[k]==="curveTo2"?(j=E,Z=[$[Y],$[Y+1]],st=[$[Y+2],$[Y+3]],Y+=4):(j=[$[Y],$[Y+1]],st=[$[Y+2],$[Y+3]],Z=st,Y+=4),Ii(_.pts[_.pts.length-1],C(...j),C(...Z),C(...st),_.pts),E=st;break}case"closePath":F();break;case"rectangle":{let[j,Z,st,ot]=$.slice(Y,Y+4);Y+=4,w(j,Z),_.pts.push(C(j+st,Z),C(j+st,Z+ot),C(j,Z+ot)),F();break}}}let H=z=>{if(!z.filled||z.stroked||z.color!=="#ffffff"||z.pts.length!==5)return!1;let $=z.pts.map(St=>St[0]),Y=z.pts.map(St=>St[1]),k=Math.min(...$),j=Math.max(...$),Z=Math.min(...Y),st=Math.max(...Y),ot=.1;return k>ot||Z>ot||j<u-ot||st<f-ot?!1:z.pts.every(St=>(Math.abs(St[0]-k)<ot||Math.abs(St[0]-j)<ot)&&(Math.abs(St[1]-Z)<ot||Math.abs(St[1]-st)<ot))};function G([z,$,Y]){Y&&F();let k=T();for(let j of x){let Z=j.closed||$,st=os(j.pts,Z);if(st.length<2)continue;let ot={pts:st,closed:Z&&st.length>2,color:z?y.stroke:y.fill,layer:R(),filled:$};if(k){m("hidden");continue}if(H({...ot,stroked:z})){m("background");continue}d.push(ot)}x=[],_=null}for(let z=0;z<t.length;z++){let $=o[t[z]],Y=e[z];if(mf[$]){G(mf[$]);continue}if(km.includes($)){S=!0;continue}if(zm.includes($)){m("image");continue}switch($){case"constructPath":B(Y[0],Y[1]);break;case"endPath":x=[],_=null;break;case"save":v.push({...y});break;case"restore":v.length&&(y=v.pop());break;case"transform":y.ctm=Ri(y.ctm,Y);break;case"paintFormXObjectBegin":v.push({...y}),Y[0]&&(y.ctm=Ri(y.ctm,Y[0]));break;case"paintFormXObjectEnd":v.length&&(y=v.pop());break;case"setStrokeRGBColor":y.stroke=pf(Y);break;case"setFillRGBColor":y.fill=pf(Y);break;case"setStrokeColorN":case"setFillColorN":break;case"beginText":S=!1;break;case"endText":S&&m("text"),S=!1;break;case"shadingFill":m("gradient");break;case"beginMarkedContentProps":{let k=Y[0]==="OC"?Y[1]:null;if(!k){b.push(null);break}let j=k.type==="OCG"?s?.getGroup(k.id):null;b.push({layer:j?.name??"",hidden:s?!s.isVisible(k):!1});break}case"beginMarkedContent":b.push(null);break;case"endMarkedContent":b.pop();break}}return{shapes:d,skipped:g}}var Yr,pf,Bm,mf,km,zm,Vm,gf=fe(()=>{Pr();Yr=25.4/72,pf=n=>"#"+(n[0]<<16|n[1]<<8|n[2]).toString(16).padStart(6,"0"),Bm='This .ai file was saved without PDF content. In Illustrator, save it again with "Create PDF Compatible File" on, or export a PDF or SVG.',mf={stroke:[!0,!1,!1],closeStroke:[!0,!1,!0],fill:[!1,!0,!1],eoFill:[!1,!0,!1],fillStroke:[!0,!0,!1],eoFillStroke:[!0,!0,!1],closeFillStroke:[!0,!0,!0],closeEOFillStroke:[!0,!0,!0]},km=["showText","showSpacedText","nextLineShowText","nextLineSetSpacingShowText"],zm=["paintImageXObject","paintInlineImageXObject","paintInlineImageXObjectGroup","paintImageXObjectRepeat","paintImageMaskXObject","paintImageMaskXObjectGroup","paintImageMaskXObjectRepeat","paintSolidColorImageMask"],Vm=n=>n.length>=4&&n[0]===37&&n[1]===80&&n[2]===68&&n[3]===70});var xf=fe(()=>{});var yf=Nu((sS,na)=>{(function(){"use strict";var n={};n.version="6.4.2.2",n.use_lines=!0,n.use_xyz=!1;var t=!1;typeof na<"u"&&na.exports?(na.exports=n,t=!0):(typeof define=="function"&&define.amd&&define(n),typeof document<"u"?window.ClipperLib=n:self.ClipperLib=n);var e;if(t){var i="chrome";e="Netscape"}else{var i=navigator.userAgent.toString().toLowerCase();e=navigator.appName}var s={};i.indexOf("chrome")!=-1&&i.indexOf("chromium")==-1?s.chrome=1:s.chrome=0,i.indexOf("chromium")!=-1?s.chromium=1:s.chromium=0,i.indexOf("safari")!=-1&&i.indexOf("chrome")==-1&&i.indexOf("chromium")==-1?s.safari=1:s.safari=0,i.indexOf("firefox")!=-1?s.firefox=1:s.firefox=0,i.indexOf("firefox/17")!=-1?s.firefox17=1:s.firefox17=0,i.indexOf("firefox/15")!=-1?s.firefox15=1:s.firefox15=0,i.indexOf("firefox/3")!=-1?s.firefox3=1:s.firefox3=0,i.indexOf("opera")!=-1?s.opera=1:s.opera=0,i.indexOf("msie 10")!=-1?s.msie10=1:s.msie10=0,i.indexOf("msie 9")!=-1?s.msie9=1:s.msie9=0,i.indexOf("msie 8")!=-1?s.msie8=1:s.msie8=0,i.indexOf("msie 7")!=-1?s.msie7=1:s.msie7=0,i.indexOf("msie ")!=-1?s.msie=1:s.msie=0,n.biginteger_used=null;var o,c=0xdeadbeefcafe,a=(c&16777215)==15715070;function u(r,l,h){n.biginteger_used=1,r!=null&&(typeof r=="number"&&typeof l>"u"?this.fromInt(r):typeof r=="number"?this.fromNumber(r,l,h):l==null&&typeof r!="string"?this.fromString(r,256):this.fromString(r,l))}function f(){return new u(null,void 0,void 0)}function d(r,l,h,p,M,P){for(;--P>=0;){var D=l*this[r++]+h[p]+M;M=Math.floor(D/67108864),h[p++]=D&67108863}return M}function g(r,l,h,p,M,P){for(var D=l&32767,W=l>>15;--P>=0;){var q=this[r]&32767,et=this[r++]>>15,vt=W*q+et*D;q=D*q+((vt&32767)<<15)+h[p]+(M&1073741823),M=(q>>>30)+(vt>>>15)+W*et+(M>>>30),h[p++]=q&1073741823}return M}function m(r,l,h,p,M,P){for(var D=l&16383,W=l>>14;--P>=0;){var q=this[r]&16383,et=this[r++]>>14,vt=W*q+et*D;q=D*q+((vt&16383)<<14)+h[p]+M,M=(q>>28)+(vt>>14)+W*et,h[p++]=q&268435455}return M}a&&e=="Microsoft Internet Explorer"?(u.prototype.am=g,o=30):a&&e!="Netscape"?(u.prototype.am=d,o=26):(u.prototype.am=m,o=28),u.prototype.DB=o,u.prototype.DM=(1<<o)-1,u.prototype.DV=1<<o;var y=52;u.prototype.FV=Math.pow(2,y),u.prototype.F1=y-o,u.prototype.F2=2*o-y;var v="0123456789abcdefghijklmnopqrstuvwxyz",b=new Array,x,_;for(x=48,_=0;_<=9;++_)b[x++]=_;for(x=97,_=10;_<36;++_)b[x++]=_;for(x=65,_=10;_<36;++_)b[x++]=_;function E(r){return v.charAt(r)}function A(r,l){var h=b[r.charCodeAt(l)];return h??-1}function S(r){for(var l=this.t-1;l>=0;--l)r[l]=this[l];r.t=this.t,r.s=this.s}function R(r){this.t=1,this.s=r<0?-1:0,r>0?this[0]=r:r<-1?this[0]=r+this.DV:this.t=0}function T(r){var l=f();return l.fromInt(r),l}function C(r,l){var h;if(l==16)h=4;else if(l==8)h=3;else if(l==256)h=8;else if(l==2)h=1;else if(l==32)h=5;else if(l==4)h=2;else{this.fromRadix(r,l);return}this.t=0,this.s=0;for(var p=r.length,M=!1,P=0;--p>=0;){var D=h==8?r[p]&255:A(r,p);if(D<0){r.charAt(p)=="-"&&(M=!0);continue}M=!1,P==0?this[this.t++]=D:P+h>this.DB?(this[this.t-1]|=(D&(1<<this.DB-P)-1)<<P,this[this.t++]=D>>this.DB-P):this[this.t-1]|=D<<P,P+=h,P>=this.DB&&(P-=this.DB)}h==8&&(r[0]&128)!=0&&(this.s=-1,P>0&&(this[this.t-1]|=(1<<this.DB-P)-1<<P)),this.clamp(),M&&u.ZERO.subTo(this,this)}function w(){for(var r=this.s&this.DM;this.t>0&&this[this.t-1]==r;)--this.t}function L(r){if(this.s<0)return"-"+this.negate().toString(r);var l;if(r==16)l=4;else if(r==8)l=3;else if(r==2)l=1;else if(r==32)l=5;else if(r==4)l=2;else return this.toRadix(r);var h=(1<<l)-1,p,M=!1,P="",D=this.t,W=this.DB-D*this.DB%l;if(D-- >0)for(W<this.DB&&(p=this[D]>>W)>0&&(M=!0,P=E(p));D>=0;)W<l?(p=(this[D]&(1<<W)-1)<<l-W,p|=this[--D]>>(W+=this.DB-l)):(p=this[D]>>(W-=l)&h,W<=0&&(W+=this.DB,--D)),p>0&&(M=!0),M&&(P+=E(p));return M?P:"0"}function F(){var r=f();return u.ZERO.subTo(this,r),r}function B(){return this.s<0?this.negate():this}function H(r){var l=this.s-r.s;if(l!=0)return l;var h=this.t;if(l=h-r.t,l!=0)return this.s<0?-l:l;for(;--h>=0;)if((l=this[h]-r[h])!=0)return l;return 0}function G(r){var l=1,h;return(h=r>>>16)!=0&&(r=h,l+=16),(h=r>>8)!=0&&(r=h,l+=8),(h=r>>4)!=0&&(r=h,l+=4),(h=r>>2)!=0&&(r=h,l+=2),(h=r>>1)!=0&&(r=h,l+=1),l}function z(){return this.t<=0?0:this.DB*(this.t-1)+G(this[this.t-1]^this.s&this.DM)}function $(r,l){var h;for(h=this.t-1;h>=0;--h)l[h+r]=this[h];for(h=r-1;h>=0;--h)l[h]=0;l.t=this.t+r,l.s=this.s}function Y(r,l){for(var h=r;h<this.t;++h)l[h-r]=this[h];l.t=Math.max(this.t-r,0),l.s=this.s}function k(r,l){var h=r%this.DB,p=this.DB-h,M=(1<<p)-1,P=Math.floor(r/this.DB),D=this.s<<h&this.DM,W;for(W=this.t-1;W>=0;--W)l[W+P+1]=this[W]>>p|D,D=(this[W]&M)<<h;for(W=P-1;W>=0;--W)l[W]=0;l[P]=D,l.t=this.t+P+1,l.s=this.s,l.clamp()}function j(r,l){l.s=this.s;var h=Math.floor(r/this.DB);if(h>=this.t){l.t=0;return}var p=r%this.DB,M=this.DB-p,P=(1<<p)-1;l[0]=this[h]>>p;for(var D=h+1;D<this.t;++D)l[D-h-1]|=(this[D]&P)<<M,l[D-h]=this[D]>>p;p>0&&(l[this.t-h-1]|=(this.s&P)<<M),l.t=this.t-h,l.clamp()}function Z(r,l){for(var h=0,p=0,M=Math.min(r.t,this.t);h<M;)p+=this[h]-r[h],l[h++]=p&this.DM,p>>=this.DB;if(r.t<this.t){for(p-=r.s;h<this.t;)p+=this[h],l[h++]=p&this.DM,p>>=this.DB;p+=this.s}else{for(p+=this.s;h<r.t;)p-=r[h],l[h++]=p&this.DM,p>>=this.DB;p-=r.s}l.s=p<0?-1:0,p<-1?l[h++]=this.DV+p:p>0&&(l[h++]=p),l.t=h,l.clamp()}function st(r,l){var h=this.abs(),p=r.abs(),M=h.t;for(l.t=M+p.t;--M>=0;)l[M]=0;for(M=0;M<p.t;++M)l[M+h.t]=h.am(0,p[M],l,M,0,h.t);l.s=0,l.clamp(),this.s!=r.s&&u.ZERO.subTo(l,l)}function ot(r){for(var l=this.abs(),h=r.t=2*l.t;--h>=0;)r[h]=0;for(h=0;h<l.t-1;++h){var p=l.am(h,l[h],r,2*h,0,1);(r[h+l.t]+=l.am(h+1,2*l[h],r,2*h+1,p,l.t-h-1))>=l.DV&&(r[h+l.t]-=l.DV,r[h+l.t+1]=1)}r.t>0&&(r[r.t-1]+=l.am(h,l[h],r,2*h,0,1)),r.s=0,r.clamp()}function St(r,l,h){var p=r.abs();if(!(p.t<=0)){var M=this.abs();if(M.t<p.t){l?.fromInt(0),h!=null&&this.copyTo(h);return}h==null&&(h=f());var P=f(),D=this.s,W=r.s,q=this.DB-G(p[p.t-1]);q>0?(p.lShiftTo(q,P),M.lShiftTo(q,h)):(p.copyTo(P),M.copyTo(h));var et=P.t,vt=P[et-1];if(vt!=0){var xt=vt*(1<<this.F1)+(et>1?P[et-2]>>this.F2:0),Mt=this.FV/xt,jt=(1<<this.F1)/xt,ce=1<<this.F2,ye=h.t,ze=ye-et,An=l??f();for(P.dlShiftTo(ze,An),h.compareTo(An)>=0&&(h[h.t++]=1,h.subTo(An,h)),u.ONE.dlShiftTo(et,An),An.subTo(P,P);P.t<et;)P[P.t++]=0;for(;--ze>=0;){var ri=h[--ye]==vt?this.DM:Math.floor(h[ye]*Mt+(h[ye-1]+ce)*jt);if((h[ye]+=P.am(0,ri,h,ze,0,et))<ri)for(P.dlShiftTo(ze,An),h.subTo(An,h);h[ye]<--ri;)h.subTo(An,h)}l!=null&&(h.drShiftTo(et,l),D!=W&&u.ZERO.subTo(l,l)),h.t=et,h.clamp(),q>0&&h.rShiftTo(q,h),D<0&&u.ZERO.subTo(h,h)}}}function wt(r){var l=f();return this.abs().divRemTo(r,null,l),this.s<0&&l.compareTo(u.ZERO)>0&&r.subTo(l,l),l}function Yt(r){this.m=r}function Kt(r){return r.s<0||r.compareTo(this.m)>=0?r.mod(this.m):r}function se(r){return r}function ct(r){r.divRemTo(this.m,null,r)}function pt(r,l,h){r.multiplyTo(l,h),this.reduce(h)}function kt(r,l){r.squareTo(l),this.reduce(l)}Yt.prototype.convert=Kt,Yt.prototype.revert=se,Yt.prototype.reduce=ct,Yt.prototype.mulTo=pt,Yt.prototype.sqrTo=kt;function re(){if(this.t<1)return 0;var r=this[0];if((r&1)==0)return 0;var l=r&3;return l=l*(2-(r&15)*l)&15,l=l*(2-(r&255)*l)&255,l=l*(2-((r&65535)*l&65535))&65535,l=l*(2-r*l%this.DV)%this.DV,l>0?this.DV-l:-l}function Dt(r){this.m=r,this.mp=r.invDigit(),this.mpl=this.mp&32767,this.mph=this.mp>>15,this.um=(1<<r.DB-15)-1,this.mt2=2*r.t}function de(r){var l=f();return r.abs().dlShiftTo(this.m.t,l),l.divRemTo(this.m,null,l),r.s<0&&l.compareTo(u.ZERO)>0&&this.m.subTo(l,l),l}function Ge(r){var l=f();return r.copyTo(l),this.reduce(l),l}function ge(r){for(;r.t<=this.mt2;)r[r.t++]=0;for(var l=0;l<this.m.t;++l){var h=r[l]&32767,p=h*this.mpl+((h*this.mph+(r[l]>>15)*this.mpl&this.um)<<15)&r.DM;for(h=l+this.m.t,r[h]+=this.m.am(0,p,r,l,0,this.m.t);r[h]>=r.DV;)r[h]-=r.DV,r[++h]++}r.clamp(),r.drShiftTo(this.m.t,r),r.compareTo(this.m)>=0&&r.subTo(this.m,r)}function ve(r,l){r.squareTo(l),this.reduce(l)}function Ce(r,l,h){r.multiplyTo(l,h),this.reduce(h)}Dt.prototype.convert=de,Dt.prototype.revert=Ge,Dt.prototype.reduce=ge,Dt.prototype.mulTo=Ce,Dt.prototype.sqrTo=ve;function pe(){return(this.t>0?this[0]&1:this.s)==0}function Ie(r,l){if(r>4294967295||r<1)return u.ONE;var h=f(),p=f(),M=l.convert(this),P=G(r)-1;for(M.copyTo(h);--P>=0;)if(l.sqrTo(h,p),(r&1<<P)>0)l.mulTo(p,M,h);else{var D=h;h=p,p=D}return l.revert(h)}function Je(r,l){var h;return r<256||l.isEven()?h=new Yt(l):h=new Dt(l),this.exp(r,h)}u.prototype.copyTo=S,u.prototype.fromInt=R,u.prototype.fromString=C,u.prototype.clamp=w,u.prototype.dlShiftTo=$,u.prototype.drShiftTo=Y,u.prototype.lShiftTo=k,u.prototype.rShiftTo=j,u.prototype.subTo=Z,u.prototype.multiplyTo=st,u.prototype.squareTo=ot,u.prototype.divRemTo=St,u.prototype.invDigit=re,u.prototype.isEven=pe,u.prototype.exp=Ie,u.prototype.toString=L,u.prototype.negate=F,u.prototype.abs=B,u.prototype.compareTo=H,u.prototype.bitLength=z,u.prototype.mod=wt,u.prototype.modPowInt=Je,u.ZERO=T(0),u.ONE=T(1);function cn(){var r=f();return this.copyTo(r),r}function Re(){if(this.s<0){if(this.t==1)return this[0]-this.DV;if(this.t==0)return-1}else{if(this.t==1)return this[0];if(this.t==0)return 0}return(this[1]&(1<<32-this.DB)-1)<<this.DB|this[0]}function Ye(){return this.t==0?this.s:this[0]<<24>>24}function tt(){return this.t==0?this.s:this[0]<<16>>16}function en(r){return Math.floor(Math.LN2*this.DB/Math.log(r))}function we(){return this.s<0?-1:this.t<=0||this.t==1&&this[0]<=0?0:1}function V(r){if(r==null&&(r=10),this.signum()==0||r<2||r>36)return"0";var l=this.chunkSize(r),h=Math.pow(r,l),p=T(h),M=f(),P=f(),D="";for(this.divRemTo(p,M,P);M.signum()>0;)D=(h+P.intValue()).toString(r).substr(1)+D,M.divRemTo(p,M,P);return P.intValue().toString(r)+D}function I(r,l){this.fromInt(0),l==null&&(l=10);for(var h=this.chunkSize(l),p=Math.pow(l,h),M=!1,P=0,D=0,W=0;W<r.length;++W){var q=A(r,W);if(q<0){r.charAt(W)=="-"&&this.signum()==0&&(M=!0);continue}D=l*D+q,++P>=h&&(this.dMultiply(p),this.dAddOffset(D,0),P=0,D=0)}P>0&&(this.dMultiply(Math.pow(l,P)),this.dAddOffset(D,0)),M&&u.ZERO.subTo(this,this)}function it(r,l,h){if(typeof l=="number")if(r<2)this.fromInt(1);else for(this.fromNumber(r,h),this.testBit(r-1)||this.bitwiseTo(u.ONE.shiftLeft(r-1),Ht,this),this.isEven()&&this.dAddOffset(1,0);!this.isProbablePrime(l);)this.dAddOffset(2,0),this.bitLength()>r&&this.subTo(u.ONE.shiftLeft(r-1),this);else{var p=new Array,M=r&7;p.length=(r>>3)+1,l.nextBytes(p),M>0?p[0]&=(1<<M)-1:p[0]=0,this.fromString(p,256)}}function U(){var r=this.t,l=new Array;l[0]=this.s;var h=this.DB-r*this.DB%8,p,M=0;if(r-- >0)for(h<this.DB&&(p=this[r]>>h)!=(this.s&this.DM)>>h&&(l[M++]=p|this.s<<this.DB-h);r>=0;)h<8?(p=(this[r]&(1<<h)-1)<<8-h,p|=this[--r]>>(h+=this.DB-8)):(p=this[r]>>(h-=8)&255,h<=0&&(h+=this.DB,--r)),(p&128)!=0&&(p|=-256),M==0&&(this.s&128)!=(p&128)&&++M,(M>0||p!=this.s)&&(l[M++]=p);return l}function ft(r){return this.compareTo(r)==0}function Et(r){return this.compareTo(r)<0?this:r}function Tt(r){return this.compareTo(r)>0?this:r}function mt(r,l,h){var p,M,P=Math.min(r.t,this.t);for(p=0;p<P;++p)h[p]=l(this[p],r[p]);if(r.t<this.t){for(M=r.s&this.DM,p=P;p<this.t;++p)h[p]=l(this[p],M);h.t=this.t}else{for(M=this.s&this.DM,p=P;p<r.t;++p)h[p]=l(M,r[p]);h.t=r.t}h.s=l(this.s,r.s),h.clamp()}function yt(r,l){return r&l}function Pt(r){var l=f();return this.bitwiseTo(r,yt,l),l}function Ht(r,l){return r|l}function Lt(r){var l=f();return this.bitwiseTo(r,Ht,l),l}function At(r,l){return r^l}function Gt(r){var l=f();return this.bitwiseTo(r,At,l),l}function Qt(r,l){return r&~l}function ae(r){var l=f();return this.bitwiseTo(r,Qt,l),l}function J(){for(var r=f(),l=0;l<this.t;++l)r[l]=this.DM&~this[l];return r.t=this.t,r.s=~this.s,r}function Ct(r){var l=f();return r<0?this.rShiftTo(-r,l):this.lShiftTo(r,l),l}function _t(r){var l=f();return r<0?this.lShiftTo(-r,l):this.rShiftTo(r,l),l}function It(r){if(r==0)return-1;var l=0;return(r&65535)==0&&(r>>=16,l+=16),(r&255)==0&&(r>>=8,l+=8),(r&15)==0&&(r>>=4,l+=4),(r&3)==0&&(r>>=2,l+=2),(r&1)==0&&++l,l}function Ft(){for(var r=0;r<this.t;++r)if(this[r]!=0)return r*this.DB+It(this[r]);return this.s<0?this.t*this.DB:-1}function bt(r){for(var l=0;r!=0;)r&=r-1,++l;return l}function qt(){for(var r=0,l=this.s&this.DM,h=0;h<this.t;++h)r+=bt(this[h]^l);return r}function Vt(r){var l=Math.floor(r/this.DB);return l>=this.t?this.s!=0:(this[l]&1<<r%this.DB)!=0}function Le(r,l){var h=u.ONE.shiftLeft(r);return this.bitwiseTo(h,l,h),h}function Se(r){return this.changeBit(r,Ht)}function De(r){return this.changeBit(r,Qt)}function Mn(r){return this.changeBit(r,At)}function is(r,l){for(var h=0,p=0,M=Math.min(r.t,this.t);h<M;)p+=this[h]+r[h],l[h++]=p&this.DM,p>>=this.DB;if(r.t<this.t){for(p+=r.s;h<this.t;)p+=this[h],l[h++]=p&this.DM,p>>=this.DB;p+=this.s}else{for(p+=this.s;h<r.t;)p+=r[h],l[h++]=p&this.DM,p>>=this.DB;p+=r.s}l.s=p<0?-1:0,p>0?l[h++]=p:p<-1&&(l[h++]=this.DV+p),l.t=h,l.clamp()}function Tr(r){var l=f();return this.addTo(r,l),l}function As(r){var l=f();return this.subTo(r,l),l}function ss(r){var l=f();return this.multiplyTo(r,l),l}function Ps(){var r=f();return this.squareTo(r),r}function O(r){var l=f();return this.divRemTo(r,l,null),l}function X(r){var l=f();return this.divRemTo(r,null,l),l}function rt(r){var l=f(),h=f();return this.divRemTo(r,l,h),new Array(l,h)}function ut(r){this[this.t]=this.am(0,r-1,this,0,0,this.t),++this.t,this.clamp()}function nt(r,l){if(r!=0){for(;this.t<=l;)this[this.t++]=0;for(this[l]+=r;this[l]>=this.DV;)this[l]-=this.DV,++l>=this.t&&(this[this.t++]=0),++this[l]}}function dt(){}function zt(r){return r}function ne(r,l,h){r.multiplyTo(l,h)}function gt(r,l){r.squareTo(l)}dt.prototype.convert=zt,dt.prototype.revert=zt,dt.prototype.mulTo=ne,dt.prototype.sqrTo=gt;function $t(r){return this.exp(r,new dt)}function te(r,l,h){var p=Math.min(this.t+r.t,l);for(h.s=0,h.t=p;p>0;)h[--p]=0;var M;for(M=h.t-this.t;p<M;++p)h[p+this.t]=this.am(0,r[p],h,p,0,this.t);for(M=Math.min(r.t,l);p<M;++p)this.am(0,r[p],h,p,0,l-p);h.clamp()}function Pe(r,l,h){--l;var p=h.t=this.t+r.t-l;for(h.s=0;--p>=0;)h[p]=0;for(p=Math.max(l-this.t,0);p<r.t;++p)h[this.t+p-l]=this.am(l-p,r[p],h,0,0,this.t+p-l);h.clamp(),h.drShiftTo(1,h)}function $e(r){this.r2=f(),this.q3=f(),u.ONE.dlShiftTo(2*r.t,this.r2),this.mu=this.r2.divide(r),this.m=r}function je(r){if(r.s<0||r.t>2*this.m.t)return r.mod(this.m);if(r.compareTo(this.m)<0)return r;var l=f();return r.copyTo(l),this.reduce(l),l}function gi(r){return r}function rs(r){for(r.drShiftTo(this.m.t-1,this.r2),r.t>this.m.t+1&&(r.t=this.m.t+1,r.clamp()),this.mu.multiplyUpperTo(this.r2,this.m.t+1,this.q3),this.m.multiplyLowerTo(this.q3,this.m.t+1,this.r2);r.compareTo(this.r2)<0;)r.dAddOffset(1,this.m.t+1);for(r.subTo(this.r2,r);r.compareTo(this.m)>=0;)r.subTo(this.m,r)}function N(r,l){r.squareTo(l),this.reduce(l)}function Q(r,l,h){r.multiplyTo(l,h),this.reduce(h)}$e.prototype.convert=je,$e.prototype.revert=gi,$e.prototype.reduce=rs,$e.prototype.mulTo=Q,$e.prototype.sqrTo=N;function ht(r,l){var h=r.bitLength(),p,M=T(1),P;if(h<=0)return M;h<18?p=1:h<48?p=3:h<144?p=4:h<768?p=5:p=6,h<8?P=new Yt(l):l.isEven()?P=new $e(l):P=new Dt(l);var D=new Array,W=3,q=p-1,et=(1<<p)-1;if(D[1]=P.convert(this),p>1){var vt=f();for(P.sqrTo(D[1],vt);W<=et;)D[W]=f(),P.mulTo(vt,D[W-2],D[W]),W+=2}var xt=r.t-1,Mt,jt=!0,ce=f(),ye;for(h=G(r[xt])-1;xt>=0;){for(h>=q?Mt=r[xt]>>h-q&et:(Mt=(r[xt]&(1<<h+1)-1)<<q-h,xt>0&&(Mt|=r[xt-1]>>this.DB+h-q)),W=p;(Mt&1)==0;)Mt>>=1,--W;if((h-=W)<0&&(h+=this.DB,--xt),jt)D[Mt].copyTo(M),jt=!1;else{for(;W>1;)P.sqrTo(M,ce),P.sqrTo(ce,M),W-=2;W>0?P.sqrTo(M,ce):(ye=M,M=ce,ce=ye),P.mulTo(ce,D[Mt],M)}for(;xt>=0&&(r[xt]&1<<h)==0;)P.sqrTo(M,ce),ye=M,M=ce,ce=ye,--h<0&&(h=this.DB-1,--xt)}return P.revert(M)}function at(r){var l=this.s<0?this.negate():this.clone(),h=r.s<0?r.negate():r.clone();if(l.compareTo(h)<0){var p=l;l=h,h=p}var M=l.getLowestSetBit(),P=h.getLowestSetBit();if(P<0)return l;for(M<P&&(P=M),P>0&&(l.rShiftTo(P,l),h.rShiftTo(P,h));l.signum()>0;)(M=l.getLowestSetBit())>0&&l.rShiftTo(M,l),(M=h.getLowestSetBit())>0&&h.rShiftTo(M,h),l.compareTo(h)>=0?(l.subTo(h,l),l.rShiftTo(1,l)):(h.subTo(l,h),h.rShiftTo(1,h));return P>0&&h.lShiftTo(P,h),h}function lt(r){if(r<=0)return 0;var l=this.DV%r,h=this.s<0?r-1:0;if(this.t>0)if(l==0)h=this[0]%r;else for(var p=this.t-1;p>=0;--p)h=(l*h+this[p])%r;return h}function Ut(r){var l=r.isEven();if(this.isEven()&&l||r.signum()==0)return u.ZERO;for(var h=r.clone(),p=this.clone(),M=T(1),P=T(0),D=T(0),W=T(1);h.signum()!=0;){for(;h.isEven();)h.rShiftTo(1,h),l?((!M.isEven()||!P.isEven())&&(M.addTo(this,M),P.subTo(r,P)),M.rShiftTo(1,M)):P.isEven()||P.subTo(r,P),P.rShiftTo(1,P);for(;p.isEven();)p.rShiftTo(1,p),l?((!D.isEven()||!W.isEven())&&(D.addTo(this,D),W.subTo(r,W)),D.rShiftTo(1,D)):W.isEven()||W.subTo(r,W),W.rShiftTo(1,W);h.compareTo(p)>=0?(h.subTo(p,h),l&&M.subTo(D,M),P.subTo(W,P)):(p.subTo(h,p),l&&D.subTo(M,D),W.subTo(P,W))}if(p.compareTo(u.ONE)!=0)return u.ZERO;if(W.compareTo(r)>=0)return W.subtract(r);if(W.signum()<0)W.addTo(r,W);else return W;return W.signum()<0?W.add(r):W}var Rt=[2,3,5,7,11,13,17,19,23,29,31,37,41,43,47,53,59,61,67,71,73,79,83,89,97,101,103,107,109,113,127,131,137,139,149,151,157,163,167,173,179,181,191,193,197,199,211,223,227,229,233,239,241,251,257,263,269,271,277,281,283,293,307,311,313,317,331,337,347,349,353,359,367,373,379,383,389,397,401,409,419,421,431,433,439,443,449,457,461,463,467,479,487,491,499,503,509,521,523,541,547,557,563,569,571,577,587,593,599,601,607,613,617,619,631,641,643,647,653,659,661,673,677,683,691,701,709,719,727,733,739,743,751,757,761,769,773,787,797,809,811,821,823,827,829,839,853,857,859,863,877,881,883,887,907,911,919,929,937,941,947,953,967,971,977,983,991,997],Ot=(1<<26)/Rt[Rt.length-1];function Xt(r){var l,h=this.abs();if(h.t==1&&h[0]<=Rt[Rt.length-1]){for(l=0;l<Rt.length;++l)if(h[0]==Rt[l])return!0;return!1}if(h.isEven())return!1;for(l=1;l<Rt.length;){for(var p=Rt[l],M=l+1;M<Rt.length&&p<Ot;)p*=Rt[M++];for(p=h.modInt(p);l<M;)if(p%Rt[l++]==0)return!1}return h.millerRabin(r)}function Zt(r){var l=this.subtract(u.ONE),h=l.getLowestSetBit();if(h<=0)return!1;var p=l.shiftRight(h);r=r+1>>1,r>Rt.length&&(r=Rt.length);for(var M=f(),P=0;P<r;++P){M.fromInt(Rt[Math.floor(Math.random()*Rt.length)]);var D=M.modPow(p,this);if(D.compareTo(u.ONE)!=0&&D.compareTo(l)!=0){for(var W=1;W++<h&&D.compareTo(l)!=0;)if(D=D.modPowInt(2,this),D.compareTo(u.ONE)==0)return!1;if(D.compareTo(l)!=0)return!1}}return!0}u.prototype.chunkSize=en,u.prototype.toRadix=V,u.prototype.fromRadix=I,u.prototype.fromNumber=it,u.prototype.bitwiseTo=mt,u.prototype.changeBit=Le,u.prototype.addTo=is,u.prototype.dMultiply=ut,u.prototype.dAddOffset=nt,u.prototype.multiplyLowerTo=te,u.prototype.multiplyUpperTo=Pe,u.prototype.modInt=lt,u.prototype.millerRabin=Zt,u.prototype.clone=cn,u.prototype.intValue=Re,u.prototype.byteValue=Ye,u.prototype.shortValue=tt,u.prototype.signum=we,u.prototype.toByteArray=U,u.prototype.equals=ft,u.prototype.min=Et,u.prototype.max=Tt,u.prototype.and=Pt,u.prototype.or=Lt,u.prototype.xor=Gt,u.prototype.andNot=ae,u.prototype.not=J,u.prototype.shiftLeft=Ct,u.prototype.shiftRight=_t,u.prototype.getLowestSetBit=Ft,u.prototype.bitCount=qt,u.prototype.testBit=Vt,u.prototype.setBit=Se,u.prototype.clearBit=De,u.prototype.flipBit=Mn,u.prototype.add=Tr,u.prototype.subtract=As,u.prototype.multiply=ss,u.prototype.divide=O,u.prototype.remainder=X,u.prototype.divideAndRemainder=rt,u.prototype.modPow=ht,u.prototype.modInverse=Ut,u.prototype.pow=$t,u.prototype.gcd=at,u.prototype.isProbablePrime=Xt,u.prototype.square=Ps;var Nt=u;Nt.prototype.IsNegative=function(){return this.compareTo(Nt.ZERO)==-1},Nt.op_Equality=function(r,l){return r.compareTo(l)==0},Nt.op_Inequality=function(r,l){return r.compareTo(l)!=0},Nt.op_GreaterThan=function(r,l){return r.compareTo(l)>0},Nt.op_LessThan=function(r,l){return r.compareTo(l)<0},Nt.op_Addition=function(r,l){return new Nt(r,void 0,void 0).add(new Nt(l,void 0,void 0))},Nt.op_Subtraction=function(r,l){return new Nt(r,void 0,void 0).subtract(new Nt(l,void 0,void 0))},Nt.Int128Mul=function(r,l){return new Nt(r,void 0,void 0).multiply(new Nt(l,void 0,void 0))},Nt.op_Division=function(r,l){return r.divide(l)},Nt.prototype.ToDouble=function(){return parseFloat(this.toString())};var xe=function(r,l){var h;if(typeof Object.getOwnPropertyNames>"u"){for(h in l.prototype)(typeof r.prototype[h]>"u"||r.prototype[h]===Object.prototype[h])&&(r.prototype[h]=l.prototype[h]);for(h in l)typeof r[h]>"u"&&(r[h]=l[h]);r.$baseCtor=l}else{for(var p=Object.getOwnPropertyNames(l.prototype),M=0;M<p.length;M++)typeof Object.getOwnPropertyDescriptor(r.prototype,p[M])>"u"&&Object.defineProperty(r.prototype,p[M],Object.getOwnPropertyDescriptor(l.prototype,p[M]));for(h in l)typeof r[h]>"u"&&(r[h]=l[h]);r.$baseCtor=l}};n.Path=function(){return[]},n.Path.prototype.push=Array.prototype.push,n.Paths=function(){return[]},n.Paths.prototype.push=Array.prototype.push,n.DoublePoint=function(){var r=arguments;this.X=0,this.Y=0,r.length===1?(this.X=r[0].X,this.Y=r[0].Y):r.length===2&&(this.X=r[0],this.Y=r[1])},n.DoublePoint0=function(){this.X=0,this.Y=0},n.DoublePoint0.prototype=n.DoublePoint.prototype,n.DoublePoint1=function(r){this.X=r.X,this.Y=r.Y},n.DoublePoint1.prototype=n.DoublePoint.prototype,n.DoublePoint2=function(r,l){this.X=r,this.Y=l},n.DoublePoint2.prototype=n.DoublePoint.prototype,n.PolyNode=function(){this.m_Parent=null,this.m_polygon=new n.Path,this.m_Index=0,this.m_jointype=0,this.m_endtype=0,this.m_Childs=[],this.IsOpen=!1},n.PolyNode.prototype.IsHoleNode=function(){for(var r=!0,l=this.m_Parent;l!==null;)r=!r,l=l.m_Parent;return r},n.PolyNode.prototype.ChildCount=function(){return this.m_Childs.length},n.PolyNode.prototype.Contour=function(){return this.m_polygon},n.PolyNode.prototype.AddChild=function(r){var l=this.m_Childs.length;this.m_Childs.push(r),r.m_Parent=this,r.m_Index=l},n.PolyNode.prototype.GetNext=function(){return this.m_Childs.length>0?this.m_Childs[0]:this.GetNextSiblingUp()},n.PolyNode.prototype.GetNextSiblingUp=function(){return this.m_Parent===null?null:this.m_Index===this.m_Parent.m_Childs.length-1?this.m_Parent.GetNextSiblingUp():this.m_Parent.m_Childs[this.m_Index+1]},n.PolyNode.prototype.Childs=function(){return this.m_Childs},n.PolyNode.prototype.Parent=function(){return this.m_Parent},n.PolyNode.prototype.IsHole=function(){return this.IsHoleNode()},n.PolyTree=function(){this.m_AllPolys=[],n.PolyNode.call(this)},n.PolyTree.prototype.Clear=function(){for(var r=0,l=this.m_AllPolys.length;r<l;r++)this.m_AllPolys[r]=null;this.m_AllPolys.length=0,this.m_Childs.length=0},n.PolyTree.prototype.GetFirst=function(){return this.m_Childs.length>0?this.m_Childs[0]:null},n.PolyTree.prototype.Total=function(){var r=this.m_AllPolys.length;return r>0&&this.m_Childs[0]!==this.m_AllPolys[0]&&r--,r},xe(n.PolyTree,n.PolyNode),n.Math_Abs_Int64=n.Math_Abs_Int32=n.Math_Abs_Double=function(r){return Math.abs(r)},n.Math_Max_Int32_Int32=function(r,l){return Math.max(r,l)},s.msie||s.opera||s.safari?n.Cast_Int32=function(r){return r|0}:n.Cast_Int32=function(r){return~~r},typeof Number.toInteger>"u"&&(Number.toInteger=null),s.chrome?n.Cast_Int64=function(r){return r<-2147483648||r>2147483647?r<0?Math.ceil(r):Math.floor(r):~~r}:s.firefox&&typeof Number.toInteger=="function"?n.Cast_Int64=function(r){return Number.toInteger(r)}:s.msie7||s.msie8?n.Cast_Int64=function(r){return parseInt(r,10)}:s.msie?n.Cast_Int64=function(r){return r<-2147483648||r>2147483647?r<0?Math.ceil(r):Math.floor(r):r|0}:n.Cast_Int64=function(r){return r<0?Math.ceil(r):Math.floor(r)},n.Clear=function(r){r.length=0},n.PI=3.141592653589793,n.PI2=2*3.141592653589793,n.IntPoint=function(){var r=arguments,l=r.length;if(this.X=0,this.Y=0,n.use_xyz)if(this.Z=0,l===3)this.X=r[0],this.Y=r[1],this.Z=r[2];else if(l===2)this.X=r[0],this.Y=r[1],this.Z=0;else if(l===1)if(r[0]instanceof n.DoublePoint){var h=r[0];this.X=n.Clipper.Round(h.X),this.Y=n.Clipper.Round(h.Y),this.Z=0}else{var p=r[0];typeof p.Z>"u"&&(p.Z=0),this.X=p.X,this.Y=p.Y,this.Z=p.Z}else this.X=0,this.Y=0,this.Z=0;else if(l===2)this.X=r[0],this.Y=r[1];else if(l===1)if(r[0]instanceof n.DoublePoint){var h=r[0];this.X=n.Clipper.Round(h.X),this.Y=n.Clipper.Round(h.Y)}else{var p=r[0];this.X=p.X,this.Y=p.Y}else this.X=0,this.Y=0},n.IntPoint.op_Equality=function(r,l){return r.X===l.X&&r.Y===l.Y},n.IntPoint.op_Inequality=function(r,l){return r.X!==l.X||r.Y!==l.Y},n.IntPoint0=function(){this.X=0,this.Y=0,n.use_xyz&&(this.Z=0)},n.IntPoint0.prototype=n.IntPoint.prototype,n.IntPoint1=function(r){this.X=r.X,this.Y=r.Y,n.use_xyz&&(typeof r.Z>"u"?this.Z=0:this.Z=r.Z)},n.IntPoint1.prototype=n.IntPoint.prototype,n.IntPoint1dp=function(r){this.X=n.Clipper.Round(r.X),this.Y=n.Clipper.Round(r.Y),n.use_xyz&&(this.Z=0)},n.IntPoint1dp.prototype=n.IntPoint.prototype,n.IntPoint2=function(r,l,h){this.X=r,this.Y=l,n.use_xyz&&(typeof h>"u"?this.Z=0:this.Z=h)},n.IntPoint2.prototype=n.IntPoint.prototype,n.IntRect=function(){var r=arguments,l=r.length;if(l===4)this.left=r[0],this.top=r[1],this.right=r[2],this.bottom=r[3];else if(l===1){var h=r[0];this.left=h.left,this.top=h.top,this.right=h.right,this.bottom=h.bottom}else this.left=0,this.top=0,this.right=0,this.bottom=0},n.IntRect0=function(){this.left=0,this.top=0,this.right=0,this.bottom=0},n.IntRect0.prototype=n.IntRect.prototype,n.IntRect1=function(r){this.left=r.left,this.top=r.top,this.right=r.right,this.bottom=r.bottom},n.IntRect1.prototype=n.IntRect.prototype,n.IntRect4=function(r,l,h,p){this.left=r,this.top=l,this.right=h,this.bottom=p},n.IntRect4.prototype=n.IntRect.prototype,n.ClipType={ctIntersection:0,ctUnion:1,ctDifference:2,ctXor:3},n.PolyType={ptSubject:0,ptClip:1},n.PolyFillType={pftEvenOdd:0,pftNonZero:1,pftPositive:2,pftNegative:3},n.JoinType={jtSquare:0,jtRound:1,jtMiter:2},n.EndType={etOpenSquare:0,etOpenRound:1,etOpenButt:2,etClosedLine:3,etClosedPolygon:4},n.EdgeSide={esLeft:0,esRight:1},n.Direction={dRightToLeft:0,dLeftToRight:1},n.TEdge=function(){this.Bot=new n.IntPoint0,this.Curr=new n.IntPoint0,this.Top=new n.IntPoint0,this.Delta=new n.IntPoint0,this.Dx=0,this.PolyTyp=n.PolyType.ptSubject,this.Side=n.EdgeSide.esLeft,this.WindDelta=0,this.WindCnt=0,this.WindCnt2=0,this.OutIdx=0,this.Next=null,this.Prev=null,this.NextInLML=null,this.NextInAEL=null,this.PrevInAEL=null,this.NextInSEL=null,this.PrevInSEL=null},n.IntersectNode=function(){this.Edge1=null,this.Edge2=null,this.Pt=new n.IntPoint0},n.MyIntersectNodeSort=function(){},n.MyIntersectNodeSort.Compare=function(r,l){var h=l.Pt.Y-r.Pt.Y;return h>0?1:h<0?-1:0},n.LocalMinima=function(){this.Y=0,this.LeftBound=null,this.RightBound=null,this.Next=null},n.Scanbeam=function(){this.Y=0,this.Next=null},n.Maxima=function(){this.X=0,this.Next=null,this.Prev=null},n.OutRec=function(){this.Idx=0,this.IsHole=!1,this.IsOpen=!1,this.FirstLeft=null,this.Pts=null,this.BottomPt=null,this.PolyNode=null},n.OutPt=function(){this.Idx=0,this.Pt=new n.IntPoint0,this.Next=null,this.Prev=null},n.Join=function(){this.OutPt1=null,this.OutPt2=null,this.OffPt=new n.IntPoint0},n.ClipperBase=function(){this.m_MinimaList=null,this.m_CurrentLM=null,this.m_edges=new Array,this.m_UseFullRange=!1,this.m_HasOpenPaths=!1,this.PreserveCollinear=!1,this.m_Scanbeam=null,this.m_PolyOuts=null,this.m_ActiveEdges=null},n.ClipperBase.horizontal=-9007199254740992,n.ClipperBase.Skip=-2,n.ClipperBase.Unassigned=-1,n.ClipperBase.tolerance=1e-20,n.ClipperBase.loRange=47453132,n.ClipperBase.hiRange=0xfffffffffffff,n.ClipperBase.near_zero=function(r){return r>-n.ClipperBase.tolerance&&r<n.ClipperBase.tolerance},n.ClipperBase.IsHorizontal=function(r){return r.Delta.Y===0},n.ClipperBase.prototype.PointIsVertex=function(r,l){var h=l;do{if(n.IntPoint.op_Equality(h.Pt,r))return!0;h=h.Next}while(h!==l);return!1},n.ClipperBase.prototype.PointOnLineSegment=function(r,l,h,p){return p?r.X===l.X&&r.Y===l.Y||r.X===h.X&&r.Y===h.Y||r.X>l.X==r.X<h.X&&r.Y>l.Y==r.Y<h.Y&&Nt.op_Equality(Nt.Int128Mul(r.X-l.X,h.Y-l.Y),Nt.Int128Mul(h.X-l.X,r.Y-l.Y)):r.X===l.X&&r.Y===l.Y||r.X===h.X&&r.Y===h.Y||r.X>l.X==r.X<h.X&&r.Y>l.Y==r.Y<h.Y&&(r.X-l.X)*(h.Y-l.Y)===(h.X-l.X)*(r.Y-l.Y)},n.ClipperBase.prototype.PointOnPolygon=function(r,l,h){for(var p=l;;){if(this.PointOnLineSegment(r,p.Pt,p.Next.Pt,h))return!0;if(p=p.Next,p===l)break}return!1},n.ClipperBase.prototype.SlopesEqual=n.ClipperBase.SlopesEqual=function(){var r=arguments,l=r.length,h,p,M,P,D,W,q;return l===3?(h=r[0],p=r[1],q=r[2],q?Nt.op_Equality(Nt.Int128Mul(h.Delta.Y,p.Delta.X),Nt.Int128Mul(h.Delta.X,p.Delta.Y)):n.Cast_Int64(h.Delta.Y*p.Delta.X)===n.Cast_Int64(h.Delta.X*p.Delta.Y)):l===4?(M=r[0],P=r[1],D=r[2],q=r[3],q?Nt.op_Equality(Nt.Int128Mul(M.Y-P.Y,P.X-D.X),Nt.Int128Mul(M.X-P.X,P.Y-D.Y)):n.Cast_Int64((M.Y-P.Y)*(P.X-D.X))-n.Cast_Int64((M.X-P.X)*(P.Y-D.Y))===0):(M=r[0],P=r[1],D=r[2],W=r[3],q=r[4],q?Nt.op_Equality(Nt.Int128Mul(M.Y-P.Y,D.X-W.X),Nt.Int128Mul(M.X-P.X,D.Y-W.Y)):n.Cast_Int64((M.Y-P.Y)*(D.X-W.X))-n.Cast_Int64((M.X-P.X)*(D.Y-W.Y))===0)},n.ClipperBase.SlopesEqual3=function(r,l,h){return h?Nt.op_Equality(Nt.Int128Mul(r.Delta.Y,l.Delta.X),Nt.Int128Mul(r.Delta.X,l.Delta.Y)):n.Cast_Int64(r.Delta.Y*l.Delta.X)===n.Cast_Int64(r.Delta.X*l.Delta.Y)},n.ClipperBase.SlopesEqual4=function(r,l,h,p){return p?Nt.op_Equality(Nt.Int128Mul(r.Y-l.Y,l.X-h.X),Nt.Int128Mul(r.X-l.X,l.Y-h.Y)):n.Cast_Int64((r.Y-l.Y)*(l.X-h.X))-n.Cast_Int64((r.X-l.X)*(l.Y-h.Y))===0},n.ClipperBase.SlopesEqual5=function(r,l,h,p,M){return M?Nt.op_Equality(Nt.Int128Mul(r.Y-l.Y,h.X-p.X),Nt.Int128Mul(r.X-l.X,h.Y-p.Y)):n.Cast_Int64((r.Y-l.Y)*(h.X-p.X))-n.Cast_Int64((r.X-l.X)*(h.Y-p.Y))===0},n.ClipperBase.prototype.Clear=function(){this.DisposeLocalMinimaList();for(var r=0,l=this.m_edges.length;r<l;++r){for(var h=0,p=this.m_edges[r].length;h<p;++h)this.m_edges[r][h]=null;n.Clear(this.m_edges[r])}n.Clear(this.m_edges),this.m_UseFullRange=!1,this.m_HasOpenPaths=!1},n.ClipperBase.prototype.DisposeLocalMinimaList=function(){for(;this.m_MinimaList!==null;){var r=this.m_MinimaList.Next;this.m_MinimaList=null,this.m_MinimaList=r}this.m_CurrentLM=null},n.ClipperBase.prototype.RangeTest=function(r,l){l.Value?(r.X>n.ClipperBase.hiRange||r.Y>n.ClipperBase.hiRange||-r.X>n.ClipperBase.hiRange||-r.Y>n.ClipperBase.hiRange)&&n.Error("Coordinate outside allowed range in RangeTest()."):(r.X>n.ClipperBase.loRange||r.Y>n.ClipperBase.loRange||-r.X>n.ClipperBase.loRange||-r.Y>n.ClipperBase.loRange)&&(l.Value=!0,this.RangeTest(r,l))},n.ClipperBase.prototype.InitEdge=function(r,l,h,p){r.Next=l,r.Prev=h,r.Curr.X=p.X,r.Curr.Y=p.Y,n.use_xyz&&(r.Curr.Z=p.Z),r.OutIdx=-1},n.ClipperBase.prototype.InitEdge2=function(r,l){r.Curr.Y>=r.Next.Curr.Y?(r.Bot.X=r.Curr.X,r.Bot.Y=r.Curr.Y,n.use_xyz&&(r.Bot.Z=r.Curr.Z),r.Top.X=r.Next.Curr.X,r.Top.Y=r.Next.Curr.Y,n.use_xyz&&(r.Top.Z=r.Next.Curr.Z)):(r.Top.X=r.Curr.X,r.Top.Y=r.Curr.Y,n.use_xyz&&(r.Top.Z=r.Curr.Z),r.Bot.X=r.Next.Curr.X,r.Bot.Y=r.Next.Curr.Y,n.use_xyz&&(r.Bot.Z=r.Next.Curr.Z)),this.SetDx(r),r.PolyTyp=l},n.ClipperBase.prototype.FindNextLocMin=function(r){for(var l;;){for(;n.IntPoint.op_Inequality(r.Bot,r.Prev.Bot)||n.IntPoint.op_Equality(r.Curr,r.Top);)r=r.Next;if(r.Dx!==n.ClipperBase.horizontal&&r.Prev.Dx!==n.ClipperBase.horizontal)break;for(;r.Prev.Dx===n.ClipperBase.horizontal;)r=r.Prev;for(l=r;r.Dx===n.ClipperBase.horizontal;)r=r.Next;if(r.Top.Y!==r.Prev.Bot.Y){l.Prev.Bot.X<r.Bot.X&&(r=l);break}}return r},n.ClipperBase.prototype.ProcessBound=function(r,l){var h,p=r,M;if(p.OutIdx===n.ClipperBase.Skip){if(r=p,l){for(;r.Top.Y===r.Next.Bot.Y;)r=r.Next;for(;r!==p&&r.Dx===n.ClipperBase.horizontal;)r=r.Prev}else{for(;r.Top.Y===r.Prev.Bot.Y;)r=r.Prev;for(;r!==p&&r.Dx===n.ClipperBase.horizontal;)r=r.Next}if(r===p)l?p=r.Next:p=r.Prev;else{l?r=p.Next:r=p.Prev;var P=new n.LocalMinima;P.Next=null,P.Y=r.Bot.Y,P.LeftBound=null,P.RightBound=r,r.WindDelta=0,p=this.ProcessBound(r,l),this.InsertLocalMinima(P)}return p}if(r.Dx===n.ClipperBase.horizontal&&(l?h=r.Prev:h=r.Next,h.Dx===n.ClipperBase.horizontal?h.Bot.X!==r.Bot.X&&h.Top.X!==r.Bot.X&&this.ReverseHorizontal(r):h.Bot.X!==r.Bot.X&&this.ReverseHorizontal(r)),h=r,l){for(;p.Top.Y===p.Next.Bot.Y&&p.Next.OutIdx!==n.ClipperBase.Skip;)p=p.Next;if(p.Dx===n.ClipperBase.horizontal&&p.Next.OutIdx!==n.ClipperBase.Skip){for(M=p;M.Prev.Dx===n.ClipperBase.horizontal;)M=M.Prev;M.Prev.Top.X>p.Next.Top.X&&(p=M.Prev)}for(;r!==p;)r.NextInLML=r.Next,r.Dx===n.ClipperBase.horizontal&&r!==h&&r.Bot.X!==r.Prev.Top.X&&this.ReverseHorizontal(r),r=r.Next;r.Dx===n.ClipperBase.horizontal&&r!==h&&r.Bot.X!==r.Prev.Top.X&&this.ReverseHorizontal(r),p=p.Next}else{for(;p.Top.Y===p.Prev.Bot.Y&&p.Prev.OutIdx!==n.ClipperBase.Skip;)p=p.Prev;if(p.Dx===n.ClipperBase.horizontal&&p.Prev.OutIdx!==n.ClipperBase.Skip){for(M=p;M.Next.Dx===n.ClipperBase.horizontal;)M=M.Next;(M.Next.Top.X===p.Prev.Top.X||M.Next.Top.X>p.Prev.Top.X)&&(p=M.Next)}for(;r!==p;)r.NextInLML=r.Prev,r.Dx===n.ClipperBase.horizontal&&r!==h&&r.Bot.X!==r.Next.Top.X&&this.ReverseHorizontal(r),r=r.Prev;r.Dx===n.ClipperBase.horizontal&&r!==h&&r.Bot.X!==r.Next.Top.X&&this.ReverseHorizontal(r),p=p.Prev}return p},n.ClipperBase.prototype.AddPath=function(r,l,h){n.use_lines?!h&&l===n.PolyType.ptClip&&n.Error("AddPath: Open paths must be subject."):h||n.Error("AddPath: Open paths have been disabled.");var p=r.length-1;if(h)for(;p>0&&n.IntPoint.op_Equality(r[p],r[0]);)--p;for(;p>0&&n.IntPoint.op_Equality(r[p],r[p-1]);)--p;if(h&&p<2||!h&&p<1)return!1;for(var M=new Array,P=0;P<=p;P++)M.push(new n.TEdge);var D=!0;M[1].Curr.X=r[1].X,M[1].Curr.Y=r[1].Y,n.use_xyz&&(M[1].Curr.Z=r[1].Z);var W={Value:this.m_UseFullRange};this.RangeTest(r[0],W),this.m_UseFullRange=W.Value,W.Value=this.m_UseFullRange,this.RangeTest(r[p],W),this.m_UseFullRange=W.Value,this.InitEdge(M[0],M[1],M[p],r[0]),this.InitEdge(M[p],M[0],M[p-1],r[p]);for(var P=p-1;P>=1;--P)W.Value=this.m_UseFullRange,this.RangeTest(r[P],W),this.m_UseFullRange=W.Value,this.InitEdge(M[P],M[P+1],M[P-1],r[P]);for(var q=M[0],et=q,vt=q;;){if(et.Curr===et.Next.Curr&&(h||et.Next!==q)){if(et===et.Next)break;et===q&&(q=et.Next),et=this.RemoveEdge(et),vt=et;continue}if(et.Prev===et.Next)break;if(h&&n.ClipperBase.SlopesEqual4(et.Prev.Curr,et.Curr,et.Next.Curr,this.m_UseFullRange)&&(!this.PreserveCollinear||!this.Pt2IsBetweenPt1AndPt3(et.Prev.Curr,et.Curr,et.Next.Curr))){et===q&&(q=et.Next),et=this.RemoveEdge(et),et=et.Prev,vt=et;continue}if(et=et.Next,et===vt||!h&&et.Next===q)break}if(!h&&et===et.Next||h&&et.Prev===et.Next)return!1;h||(this.m_HasOpenPaths=!0,q.Prev.OutIdx=n.ClipperBase.Skip),et=q;do this.InitEdge2(et,l),et=et.Next,D&&et.Curr.Y!==q.Curr.Y&&(D=!1);while(et!==q);if(D){if(h)return!1;et.Prev.OutIdx=n.ClipperBase.Skip;var xt=new n.LocalMinima;for(xt.Next=null,xt.Y=et.Bot.Y,xt.LeftBound=null,xt.RightBound=et,xt.RightBound.Side=n.EdgeSide.esRight,xt.RightBound.WindDelta=0;et.Bot.X!==et.Prev.Top.X&&this.ReverseHorizontal(et),et.Next.OutIdx!==n.ClipperBase.Skip;)et.NextInLML=et.Next,et=et.Next;return this.InsertLocalMinima(xt),this.m_edges.push(M),!0}this.m_edges.push(M);var Mt,jt=null;for(n.IntPoint.op_Equality(et.Prev.Bot,et.Prev.Top)&&(et=et.Next);et=this.FindNextLocMin(et),et!==jt;){jt===null&&(jt=et);var xt=new n.LocalMinima;xt.Next=null,xt.Y=et.Bot.Y,et.Dx<et.Prev.Dx?(xt.LeftBound=et.Prev,xt.RightBound=et,Mt=!1):(xt.LeftBound=et,xt.RightBound=et.Prev,Mt=!0),xt.LeftBound.Side=n.EdgeSide.esLeft,xt.RightBound.Side=n.EdgeSide.esRight,h?xt.LeftBound.Next===xt.RightBound?xt.LeftBound.WindDelta=-1:xt.LeftBound.WindDelta=1:xt.LeftBound.WindDelta=0,xt.RightBound.WindDelta=-xt.LeftBound.WindDelta,et=this.ProcessBound(xt.LeftBound,Mt),et.OutIdx===n.ClipperBase.Skip&&(et=this.ProcessBound(et,Mt));var ce=this.ProcessBound(xt.RightBound,!Mt);ce.OutIdx===n.ClipperBase.Skip&&(ce=this.ProcessBound(ce,!Mt)),xt.LeftBound.OutIdx===n.ClipperBase.Skip?xt.LeftBound=null:xt.RightBound.OutIdx===n.ClipperBase.Skip&&(xt.RightBound=null),this.InsertLocalMinima(xt),Mt||(et=ce)}return!0},n.ClipperBase.prototype.AddPaths=function(r,l,h){for(var p=!1,M=0,P=r.length;M<P;++M)this.AddPath(r[M],l,h)&&(p=!0);return p},n.ClipperBase.prototype.Pt2IsBetweenPt1AndPt3=function(r,l,h){return n.IntPoint.op_Equality(r,h)||n.IntPoint.op_Equality(r,l)||n.IntPoint.op_Equality(h,l)?!1:r.X!==h.X?l.X>r.X==l.X<h.X:l.Y>r.Y==l.Y<h.Y},n.ClipperBase.prototype.RemoveEdge=function(r){r.Prev.Next=r.Next,r.Next.Prev=r.Prev;var l=r.Next;return r.Prev=null,l},n.ClipperBase.prototype.SetDx=function(r){r.Delta.X=r.Top.X-r.Bot.X,r.Delta.Y=r.Top.Y-r.Bot.Y,r.Delta.Y===0?r.Dx=n.ClipperBase.horizontal:r.Dx=r.Delta.X/r.Delta.Y},n.ClipperBase.prototype.InsertLocalMinima=function(r){if(this.m_MinimaList===null)this.m_MinimaList=r;else if(r.Y>=this.m_MinimaList.Y)r.Next=this.m_MinimaList,this.m_MinimaList=r;else{for(var l=this.m_MinimaList;l.Next!==null&&r.Y<l.Next.Y;)l=l.Next;r.Next=l.Next,l.Next=r}},n.ClipperBase.prototype.PopLocalMinima=function(r,l){return l.v=this.m_CurrentLM,this.m_CurrentLM!==null&&this.m_CurrentLM.Y===r?(this.m_CurrentLM=this.m_CurrentLM.Next,!0):!1},n.ClipperBase.prototype.ReverseHorizontal=function(r){var l=r.Top.X;r.Top.X=r.Bot.X,r.Bot.X=l,n.use_xyz&&(l=r.Top.Z,r.Top.Z=r.Bot.Z,r.Bot.Z=l)},n.ClipperBase.prototype.Reset=function(){if(this.m_CurrentLM=this.m_MinimaList,this.m_CurrentLM!==null){this.m_Scanbeam=null;for(var r=this.m_MinimaList;r!==null;){this.InsertScanbeam(r.Y);var l=r.LeftBound;l!==null&&(l.Curr.X=l.Bot.X,l.Curr.Y=l.Bot.Y,n.use_xyz&&(l.Curr.Z=l.Bot.Z),l.OutIdx=n.ClipperBase.Unassigned),l=r.RightBound,l!==null&&(l.Curr.X=l.Bot.X,l.Curr.Y=l.Bot.Y,n.use_xyz&&(l.Curr.Z=l.Bot.Z),l.OutIdx=n.ClipperBase.Unassigned),r=r.Next}this.m_ActiveEdges=null}},n.ClipperBase.prototype.InsertScanbeam=function(r){if(this.m_Scanbeam===null)this.m_Scanbeam=new n.Scanbeam,this.m_Scanbeam.Next=null,this.m_Scanbeam.Y=r;else if(r>this.m_Scanbeam.Y){var l=new n.Scanbeam;l.Y=r,l.Next=this.m_Scanbeam,this.m_Scanbeam=l}else{for(var h=this.m_Scanbeam;h.Next!==null&&r<=h.Next.Y;)h=h.Next;if(r===h.Y)return;var p=new n.Scanbeam;p.Y=r,p.Next=h.Next,h.Next=p}},n.ClipperBase.prototype.PopScanbeam=function(r){return this.m_Scanbeam===null?(r.v=0,!1):(r.v=this.m_Scanbeam.Y,this.m_Scanbeam=this.m_Scanbeam.Next,!0)},n.ClipperBase.prototype.LocalMinimaPending=function(){return this.m_CurrentLM!==null},n.ClipperBase.prototype.CreateOutRec=function(){var r=new n.OutRec;return r.Idx=n.ClipperBase.Unassigned,r.IsHole=!1,r.IsOpen=!1,r.FirstLeft=null,r.Pts=null,r.BottomPt=null,r.PolyNode=null,this.m_PolyOuts.push(r),r.Idx=this.m_PolyOuts.length-1,r},n.ClipperBase.prototype.DisposeOutRec=function(r){var l=this.m_PolyOuts[r];l.Pts=null,l=null,this.m_PolyOuts[r]=null},n.ClipperBase.prototype.UpdateEdgeIntoAEL=function(r){r.NextInLML===null&&n.Error("UpdateEdgeIntoAEL: invalid call");var l=r.PrevInAEL,h=r.NextInAEL;return r.NextInLML.OutIdx=r.OutIdx,l!==null?l.NextInAEL=r.NextInLML:this.m_ActiveEdges=r.NextInLML,h!==null&&(h.PrevInAEL=r.NextInLML),r.NextInLML.Side=r.Side,r.NextInLML.WindDelta=r.WindDelta,r.NextInLML.WindCnt=r.WindCnt,r.NextInLML.WindCnt2=r.WindCnt2,r=r.NextInLML,r.Curr.X=r.Bot.X,r.Curr.Y=r.Bot.Y,r.PrevInAEL=l,r.NextInAEL=h,n.ClipperBase.IsHorizontal(r)||this.InsertScanbeam(r.Top.Y),r},n.ClipperBase.prototype.SwapPositionsInAEL=function(r,l){if(!(r.NextInAEL===r.PrevInAEL||l.NextInAEL===l.PrevInAEL)){if(r.NextInAEL===l){var h=l.NextInAEL;h!==null&&(h.PrevInAEL=r);var p=r.PrevInAEL;p!==null&&(p.NextInAEL=l),l.PrevInAEL=p,l.NextInAEL=r,r.PrevInAEL=l,r.NextInAEL=h}else if(l.NextInAEL===r){var M=r.NextInAEL;M!==null&&(M.PrevInAEL=l);var P=l.PrevInAEL;P!==null&&(P.NextInAEL=r),r.PrevInAEL=P,r.NextInAEL=l,l.PrevInAEL=r,l.NextInAEL=M}else{var D=r.NextInAEL,W=r.PrevInAEL;r.NextInAEL=l.NextInAEL,r.NextInAEL!==null&&(r.NextInAEL.PrevInAEL=r),r.PrevInAEL=l.PrevInAEL,r.PrevInAEL!==null&&(r.PrevInAEL.NextInAEL=r),l.NextInAEL=D,l.NextInAEL!==null&&(l.NextInAEL.PrevInAEL=l),l.PrevInAEL=W,l.PrevInAEL!==null&&(l.PrevInAEL.NextInAEL=l)}r.PrevInAEL===null?this.m_ActiveEdges=r:l.PrevInAEL===null&&(this.m_ActiveEdges=l)}},n.ClipperBase.prototype.DeleteFromAEL=function(r){var l=r.PrevInAEL,h=r.NextInAEL;l===null&&h===null&&r!==this.m_ActiveEdges||(l!==null?l.NextInAEL=h:this.m_ActiveEdges=h,h!==null&&(h.PrevInAEL=l),r.NextInAEL=null,r.PrevInAEL=null)},n.Clipper=function(r){typeof r>"u"&&(r=0),this.m_PolyOuts=null,this.m_ClipType=n.ClipType.ctIntersection,this.m_Scanbeam=null,this.m_Maxima=null,this.m_ActiveEdges=null,this.m_SortedEdges=null,this.m_IntersectList=null,this.m_IntersectNodeComparer=null,this.m_ExecuteLocked=!1,this.m_ClipFillType=n.PolyFillType.pftEvenOdd,this.m_SubjFillType=n.PolyFillType.pftEvenOdd,this.m_Joins=null,this.m_GhostJoins=null,this.m_UsingPolyTree=!1,this.ReverseSolution=!1,this.StrictlySimple=!1,n.ClipperBase.call(this),this.m_Scanbeam=null,this.m_Maxima=null,this.m_ActiveEdges=null,this.m_SortedEdges=null,this.m_IntersectList=new Array,this.m_IntersectNodeComparer=n.MyIntersectNodeSort.Compare,this.m_ExecuteLocked=!1,this.m_UsingPolyTree=!1,this.m_PolyOuts=new Array,this.m_Joins=new Array,this.m_GhostJoins=new Array,this.ReverseSolution=(1&r)!==0,this.StrictlySimple=(2&r)!==0,this.PreserveCollinear=(4&r)!==0,n.use_xyz&&(this.ZFillFunction=null)},n.Clipper.ioReverseSolution=1,n.Clipper.ioStrictlySimple=2,n.Clipper.ioPreserveCollinear=4,n.Clipper.prototype.Clear=function(){this.m_edges.length!==0&&(this.DisposeAllPolyPts(),n.ClipperBase.prototype.Clear.call(this))},n.Clipper.prototype.InsertMaxima=function(r){var l=new n.Maxima;if(l.X=r,this.m_Maxima===null)this.m_Maxima=l,this.m_Maxima.Next=null,this.m_Maxima.Prev=null;else if(r<this.m_Maxima.X)l.Next=this.m_Maxima,l.Prev=null,this.m_Maxima=l;else{for(var h=this.m_Maxima;h.Next!==null&&r>=h.Next.X;)h=h.Next;if(r===h.X)return;l.Next=h.Next,l.Prev=h,h.Next!==null&&(h.Next.Prev=l),h.Next=l}},n.Clipper.prototype.Execute=function(){var r=arguments,l=r.length,h=r[1]instanceof n.PolyTree;if(l===4&&!h){var p=r[0],M=r[1],P=r[2],D=r[3];if(this.m_ExecuteLocked)return!1;this.m_HasOpenPaths&&n.Error("Error: PolyTree struct is needed for open path clipping."),this.m_ExecuteLocked=!0,n.Clear(M),this.m_SubjFillType=P,this.m_ClipFillType=D,this.m_ClipType=p,this.m_UsingPolyTree=!1;try{var W=this.ExecuteInternal();W&&this.BuildResult(M)}finally{this.DisposeAllPolyPts(),this.m_ExecuteLocked=!1}return W}else if(l===4&&h){var p=r[0],q=r[1],P=r[2],D=r[3];if(this.m_ExecuteLocked)return!1;this.m_ExecuteLocked=!0,this.m_SubjFillType=P,this.m_ClipFillType=D,this.m_ClipType=p,this.m_UsingPolyTree=!0;try{var W=this.ExecuteInternal();W&&this.BuildResult2(q)}finally{this.DisposeAllPolyPts(),this.m_ExecuteLocked=!1}return W}else if(l===2&&!h){var p=r[0],M=r[1];return this.Execute(p,M,n.PolyFillType.pftEvenOdd,n.PolyFillType.pftEvenOdd)}else if(l===2&&h){var p=r[0],q=r[1];return this.Execute(p,q,n.PolyFillType.pftEvenOdd,n.PolyFillType.pftEvenOdd)}},n.Clipper.prototype.FixHoleLinkage=function(r){if(!(r.FirstLeft===null||r.IsHole!==r.FirstLeft.IsHole&&r.FirstLeft.Pts!==null)){for(var l=r.FirstLeft;l!==null&&(l.IsHole===r.IsHole||l.Pts===null);)l=l.FirstLeft;r.FirstLeft=l}},n.Clipper.prototype.ExecuteInternal=function(){try{this.Reset(),this.m_SortedEdges=null,this.m_Maxima=null;var r={},l={};if(!this.PopScanbeam(r))return!1;for(this.InsertLocalMinimaIntoAEL(r.v);this.PopScanbeam(l)||this.LocalMinimaPending();){if(this.ProcessHorizontals(),this.m_GhostJoins.length=0,!this.ProcessIntersections(l.v))return!1;this.ProcessEdgesAtTopOfScanbeam(l.v),r.v=l.v,this.InsertLocalMinimaIntoAEL(r.v)}var h,p,M;for(p=0,M=this.m_PolyOuts.length;p<M;p++)h=this.m_PolyOuts[p],!(h.Pts===null||h.IsOpen)&&(h.IsHole^this.ReverseSolution)==this.Area$1(h)>0&&this.ReversePolyPtLinks(h.Pts);for(this.JoinCommonEdges(),p=0,M=this.m_PolyOuts.length;p<M;p++)h=this.m_PolyOuts[p],h.Pts!==null&&(h.IsOpen?this.FixupOutPolyline(h):this.FixupOutPolygon(h));return this.StrictlySimple&&this.DoSimplePolygons(),!0}finally{this.m_Joins.length=0,this.m_GhostJoins.length=0}},n.Clipper.prototype.DisposeAllPolyPts=function(){for(var r=0,l=this.m_PolyOuts.length;r<l;++r)this.DisposeOutRec(r);n.Clear(this.m_PolyOuts)},n.Clipper.prototype.AddJoin=function(r,l,h){var p=new n.Join;p.OutPt1=r,p.OutPt2=l,p.OffPt.X=h.X,p.OffPt.Y=h.Y,n.use_xyz&&(p.OffPt.Z=h.Z),this.m_Joins.push(p)},n.Clipper.prototype.AddGhostJoin=function(r,l){var h=new n.Join;h.OutPt1=r,h.OffPt.X=l.X,h.OffPt.Y=l.Y,n.use_xyz&&(h.OffPt.Z=l.Z),this.m_GhostJoins.push(h)},n.Clipper.prototype.SetZ=function(r,l,h){if(this.ZFillFunction!==null){if(r.Z!==0||this.ZFillFunction===null)return;n.IntPoint.op_Equality(r,l.Bot)?r.Z=l.Bot.Z:n.IntPoint.op_Equality(r,l.Top)?r.Z=l.Top.Z:n.IntPoint.op_Equality(r,h.Bot)?r.Z=h.Bot.Z:n.IntPoint.op_Equality(r,h.Top)?r.Z=h.Top.Z:this.ZFillFunction(l.Bot,l.Top,h.Bot,h.Top,r)}},n.Clipper.prototype.InsertLocalMinimaIntoAEL=function(r){for(var l={},h,p;this.PopLocalMinima(r,l);){h=l.v.LeftBound,p=l.v.RightBound;var M=null;if(h===null?(this.InsertEdgeIntoAEL(p,null),this.SetWindingCount(p),this.IsContributing(p)&&(M=this.AddOutPt(p,p.Bot))):p===null?(this.InsertEdgeIntoAEL(h,null),this.SetWindingCount(h),this.IsContributing(h)&&(M=this.AddOutPt(h,h.Bot)),this.InsertScanbeam(h.Top.Y)):(this.InsertEdgeIntoAEL(h,null),this.InsertEdgeIntoAEL(p,h),this.SetWindingCount(h),p.WindCnt=h.WindCnt,p.WindCnt2=h.WindCnt2,this.IsContributing(h)&&(M=this.AddLocalMinPoly(h,p,h.Bot)),this.InsertScanbeam(h.Top.Y)),p!==null&&(n.ClipperBase.IsHorizontal(p)?(p.NextInLML!==null&&this.InsertScanbeam(p.NextInLML.Top.Y),this.AddEdgeToSEL(p)):this.InsertScanbeam(p.Top.Y)),!(h===null||p===null)){if(M!==null&&n.ClipperBase.IsHorizontal(p)&&this.m_GhostJoins.length>0&&p.WindDelta!==0)for(var P=0,D=this.m_GhostJoins.length;P<D;P++){var W=this.m_GhostJoins[P];this.HorzSegmentsOverlap(W.OutPt1.Pt.X,W.OffPt.X,p.Bot.X,p.Top.X)&&this.AddJoin(W.OutPt1,M,W.OffPt)}if(h.OutIdx>=0&&h.PrevInAEL!==null&&h.PrevInAEL.Curr.X===h.Bot.X&&h.PrevInAEL.OutIdx>=0&&n.ClipperBase.SlopesEqual5(h.PrevInAEL.Curr,h.PrevInAEL.Top,h.Curr,h.Top,this.m_UseFullRange)&&h.WindDelta!==0&&h.PrevInAEL.WindDelta!==0){var q=this.AddOutPt(h.PrevInAEL,h.Bot);this.AddJoin(M,q,h.Top)}if(h.NextInAEL!==p){if(p.OutIdx>=0&&p.PrevInAEL.OutIdx>=0&&n.ClipperBase.SlopesEqual5(p.PrevInAEL.Curr,p.PrevInAEL.Top,p.Curr,p.Top,this.m_UseFullRange)&&p.WindDelta!==0&&p.PrevInAEL.WindDelta!==0){var q=this.AddOutPt(p.PrevInAEL,p.Bot);this.AddJoin(M,q,p.Top)}var et=h.NextInAEL;if(et!==null)for(;et!==p;)this.IntersectEdges(p,et,h.Curr),et=et.NextInAEL}}}},n.Clipper.prototype.InsertEdgeIntoAEL=function(r,l){if(this.m_ActiveEdges===null)r.PrevInAEL=null,r.NextInAEL=null,this.m_ActiveEdges=r;else if(l===null&&this.E2InsertsBeforeE1(this.m_ActiveEdges,r))r.PrevInAEL=null,r.NextInAEL=this.m_ActiveEdges,this.m_ActiveEdges.PrevInAEL=r,this.m_ActiveEdges=r;else{for(l===null&&(l=this.m_ActiveEdges);l.NextInAEL!==null&&!this.E2InsertsBeforeE1(l.NextInAEL,r);)l=l.NextInAEL;r.NextInAEL=l.NextInAEL,l.NextInAEL!==null&&(l.NextInAEL.PrevInAEL=r),r.PrevInAEL=l,l.NextInAEL=r}},n.Clipper.prototype.E2InsertsBeforeE1=function(r,l){return l.Curr.X===r.Curr.X?l.Top.Y>r.Top.Y?l.Top.X<n.Clipper.TopX(r,l.Top.Y):r.Top.X>n.Clipper.TopX(l,r.Top.Y):l.Curr.X<r.Curr.X},n.Clipper.prototype.IsEvenOddFillType=function(r){return r.PolyTyp===n.PolyType.ptSubject?this.m_SubjFillType===n.PolyFillType.pftEvenOdd:this.m_ClipFillType===n.PolyFillType.pftEvenOdd},n.Clipper.prototype.IsEvenOddAltFillType=function(r){return r.PolyTyp===n.PolyType.ptSubject?this.m_ClipFillType===n.PolyFillType.pftEvenOdd:this.m_SubjFillType===n.PolyFillType.pftEvenOdd},n.Clipper.prototype.IsContributing=function(r){var l,h;switch(r.PolyTyp===n.PolyType.ptSubject?(l=this.m_SubjFillType,h=this.m_ClipFillType):(l=this.m_ClipFillType,h=this.m_SubjFillType),l){case n.PolyFillType.pftEvenOdd:if(r.WindDelta===0&&r.WindCnt!==1)return!1;break;case n.PolyFillType.pftNonZero:if(Math.abs(r.WindCnt)!==1)return!1;break;case n.PolyFillType.pftPositive:if(r.WindCnt!==1)return!1;break;default:if(r.WindCnt!==-1)return!1;break}switch(this.m_ClipType){case n.ClipType.ctIntersection:switch(h){case n.PolyFillType.pftEvenOdd:case n.PolyFillType.pftNonZero:return r.WindCnt2!==0;case n.PolyFillType.pftPositive:return r.WindCnt2>0;default:return r.WindCnt2<0}case n.ClipType.ctUnion:switch(h){case n.PolyFillType.pftEvenOdd:case n.PolyFillType.pftNonZero:return r.WindCnt2===0;case n.PolyFillType.pftPositive:return r.WindCnt2<=0;default:return r.WindCnt2>=0}case n.ClipType.ctDifference:if(r.PolyTyp===n.PolyType.ptSubject)switch(h){case n.PolyFillType.pftEvenOdd:case n.PolyFillType.pftNonZero:return r.WindCnt2===0;case n.PolyFillType.pftPositive:return r.WindCnt2<=0;default:return r.WindCnt2>=0}else switch(h){case n.PolyFillType.pftEvenOdd:case n.PolyFillType.pftNonZero:return r.WindCnt2!==0;case n.PolyFillType.pftPositive:return r.WindCnt2>0;default:return r.WindCnt2<0}case n.ClipType.ctXor:if(r.WindDelta===0)switch(h){case n.PolyFillType.pftEvenOdd:case n.PolyFillType.pftNonZero:return r.WindCnt2===0;case n.PolyFillType.pftPositive:return r.WindCnt2<=0;default:return r.WindCnt2>=0}else return!0}return!0},n.Clipper.prototype.SetWindingCount=function(r){for(var l=r.PrevInAEL;l!==null&&(l.PolyTyp!==r.PolyTyp||l.WindDelta===0);)l=l.PrevInAEL;if(l===null){var h=r.PolyTyp===n.PolyType.ptSubject?this.m_SubjFillType:this.m_ClipFillType;r.WindDelta===0?r.WindCnt=h===n.PolyFillType.pftNegative?-1:1:r.WindCnt=r.WindDelta,r.WindCnt2=0,l=this.m_ActiveEdges}else if(r.WindDelta===0&&this.m_ClipType!==n.ClipType.ctUnion)r.WindCnt=1,r.WindCnt2=l.WindCnt2,l=l.NextInAEL;else if(this.IsEvenOddFillType(r)){if(r.WindDelta===0){for(var p=!0,M=l.PrevInAEL;M!==null;)M.PolyTyp===l.PolyTyp&&M.WindDelta!==0&&(p=!p),M=M.PrevInAEL;r.WindCnt=p?0:1}else r.WindCnt=r.WindDelta;r.WindCnt2=l.WindCnt2,l=l.NextInAEL}else l.WindCnt*l.WindDelta<0?Math.abs(l.WindCnt)>1?l.WindDelta*r.WindDelta<0?r.WindCnt=l.WindCnt:r.WindCnt=l.WindCnt+r.WindDelta:r.WindCnt=r.WindDelta===0?1:r.WindDelta:r.WindDelta===0?r.WindCnt=l.WindCnt<0?l.WindCnt-1:l.WindCnt+1:l.WindDelta*r.WindDelta<0?r.WindCnt=l.WindCnt:r.WindCnt=l.WindCnt+r.WindDelta,r.WindCnt2=l.WindCnt2,l=l.NextInAEL;if(this.IsEvenOddAltFillType(r))for(;l!==r;)l.WindDelta!==0&&(r.WindCnt2=r.WindCnt2===0?1:0),l=l.NextInAEL;else for(;l!==r;)r.WindCnt2+=l.WindDelta,l=l.NextInAEL},n.Clipper.prototype.AddEdgeToSEL=function(r){this.m_SortedEdges===null?(this.m_SortedEdges=r,r.PrevInSEL=null,r.NextInSEL=null):(r.NextInSEL=this.m_SortedEdges,r.PrevInSEL=null,this.m_SortedEdges.PrevInSEL=r,this.m_SortedEdges=r)},n.Clipper.prototype.PopEdgeFromSEL=function(r){if(r.v=this.m_SortedEdges,r.v===null)return!1;var l=r.v;return this.m_SortedEdges=r.v.NextInSEL,this.m_SortedEdges!==null&&(this.m_SortedEdges.PrevInSEL=null),l.NextInSEL=null,l.PrevInSEL=null,!0},n.Clipper.prototype.CopyAELToSEL=function(){var r=this.m_ActiveEdges;for(this.m_SortedEdges=r;r!==null;)r.PrevInSEL=r.PrevInAEL,r.NextInSEL=r.NextInAEL,r=r.NextInAEL},n.Clipper.prototype.SwapPositionsInSEL=function(r,l){if(!(r.NextInSEL===null&&r.PrevInSEL===null)&&!(l.NextInSEL===null&&l.PrevInSEL===null)){if(r.NextInSEL===l){var h=l.NextInSEL;h!==null&&(h.PrevInSEL=r);var p=r.PrevInSEL;p!==null&&(p.NextInSEL=l),l.PrevInSEL=p,l.NextInSEL=r,r.PrevInSEL=l,r.NextInSEL=h}else if(l.NextInSEL===r){var h=r.NextInSEL;h!==null&&(h.PrevInSEL=l);var p=l.PrevInSEL;p!==null&&(p.NextInSEL=r),r.PrevInSEL=p,r.NextInSEL=l,l.PrevInSEL=r,l.NextInSEL=h}else{var h=r.NextInSEL,p=r.PrevInSEL;r.NextInSEL=l.NextInSEL,r.NextInSEL!==null&&(r.NextInSEL.PrevInSEL=r),r.PrevInSEL=l.PrevInSEL,r.PrevInSEL!==null&&(r.PrevInSEL.NextInSEL=r),l.NextInSEL=h,l.NextInSEL!==null&&(l.NextInSEL.PrevInSEL=l),l.PrevInSEL=p,l.PrevInSEL!==null&&(l.PrevInSEL.NextInSEL=l)}r.PrevInSEL===null?this.m_SortedEdges=r:l.PrevInSEL===null&&(this.m_SortedEdges=l)}},n.Clipper.prototype.AddLocalMaxPoly=function(r,l,h){this.AddOutPt(r,h),l.WindDelta===0&&this.AddOutPt(l,h),r.OutIdx===l.OutIdx?(r.OutIdx=-1,l.OutIdx=-1):r.OutIdx<l.OutIdx?this.AppendPolygon(r,l):this.AppendPolygon(l,r)},n.Clipper.prototype.AddLocalMinPoly=function(r,l,h){var p,M,P;if(n.ClipperBase.IsHorizontal(l)||r.Dx>l.Dx?(p=this.AddOutPt(r,h),l.OutIdx=r.OutIdx,r.Side=n.EdgeSide.esLeft,l.Side=n.EdgeSide.esRight,M=r,M.PrevInAEL===l?P=l.PrevInAEL:P=M.PrevInAEL):(p=this.AddOutPt(l,h),r.OutIdx=l.OutIdx,r.Side=n.EdgeSide.esRight,l.Side=n.EdgeSide.esLeft,M=l,M.PrevInAEL===r?P=r.PrevInAEL:P=M.PrevInAEL),P!==null&&P.OutIdx>=0&&P.Top.Y<h.Y&&M.Top.Y<h.Y){var D=n.Clipper.TopX(P,h.Y),W=n.Clipper.TopX(M,h.Y);if(D===W&&M.WindDelta!==0&&P.WindDelta!==0&&n.ClipperBase.SlopesEqual5(new n.IntPoint2(D,h.Y),P.Top,new n.IntPoint2(W,h.Y),M.Top,this.m_UseFullRange)){var q=this.AddOutPt(P,h);this.AddJoin(p,q,M.Top)}}return p},n.Clipper.prototype.AddOutPt=function(r,l){if(r.OutIdx<0){var h=this.CreateOutRec();h.IsOpen=r.WindDelta===0;var p=new n.OutPt;return h.Pts=p,p.Idx=h.Idx,p.Pt.X=l.X,p.Pt.Y=l.Y,n.use_xyz&&(p.Pt.Z=l.Z),p.Next=p,p.Prev=p,h.IsOpen||this.SetHoleState(r,h),r.OutIdx=h.Idx,p}else{var h=this.m_PolyOuts[r.OutIdx],M=h.Pts,P=r.Side===n.EdgeSide.esLeft;if(P&&n.IntPoint.op_Equality(l,M.Pt))return M;if(!P&&n.IntPoint.op_Equality(l,M.Prev.Pt))return M.Prev;var p=new n.OutPt;return p.Idx=h.Idx,p.Pt.X=l.X,p.Pt.Y=l.Y,n.use_xyz&&(p.Pt.Z=l.Z),p.Next=M,p.Prev=M.Prev,p.Prev.Next=p,M.Prev=p,P&&(h.Pts=p),p}},n.Clipper.prototype.GetLastOutPt=function(r){var l=this.m_PolyOuts[r.OutIdx];return r.Side===n.EdgeSide.esLeft?l.Pts:l.Pts.Prev},n.Clipper.prototype.SwapPoints=function(r,l){var h=new n.IntPoint1(r.Value);r.Value.X=l.Value.X,r.Value.Y=l.Value.Y,n.use_xyz&&(r.Value.Z=l.Value.Z),l.Value.X=h.X,l.Value.Y=h.Y,n.use_xyz&&(l.Value.Z=h.Z)},n.Clipper.prototype.HorzSegmentsOverlap=function(r,l,h,p){var M;return r>l&&(M=r,r=l,l=M),h>p&&(M=h,h=p,p=M),r<p&&h<l},n.Clipper.prototype.SetHoleState=function(r,l){for(var h=r.PrevInAEL,p=null;h!==null;)h.OutIdx>=0&&h.WindDelta!==0&&(p===null?p=h:p.OutIdx===h.OutIdx&&(p=null)),h=h.PrevInAEL;p===null?(l.FirstLeft=null,l.IsHole=!1):(l.FirstLeft=this.m_PolyOuts[p.OutIdx],l.IsHole=!l.FirstLeft.IsHole)},n.Clipper.prototype.GetDx=function(r,l){return r.Y===l.Y?n.ClipperBase.horizontal:(l.X-r.X)/(l.Y-r.Y)},n.Clipper.prototype.FirstIsBottomPt=function(r,l){for(var h=r.Prev;n.IntPoint.op_Equality(h.Pt,r.Pt)&&h!==r;)h=h.Prev;var p=Math.abs(this.GetDx(r.Pt,h.Pt));for(h=r.Next;n.IntPoint.op_Equality(h.Pt,r.Pt)&&h!==r;)h=h.Next;var M=Math.abs(this.GetDx(r.Pt,h.Pt));for(h=l.Prev;n.IntPoint.op_Equality(h.Pt,l.Pt)&&h!==l;)h=h.Prev;var P=Math.abs(this.GetDx(l.Pt,h.Pt));for(h=l.Next;n.IntPoint.op_Equality(h.Pt,l.Pt)&&h!==l;)h=h.Next;var D=Math.abs(this.GetDx(l.Pt,h.Pt));return Math.max(p,M)===Math.max(P,D)&&Math.min(p,M)===Math.min(P,D)?this.Area(r)>0:p>=P&&p>=D||M>=P&&M>=D},n.Clipper.prototype.GetBottomPt=function(r){for(var l=null,h=r.Next;h!==r;)h.Pt.Y>r.Pt.Y?(r=h,l=null):h.Pt.Y===r.Pt.Y&&h.Pt.X<=r.Pt.X&&(h.Pt.X<r.Pt.X?(l=null,r=h):h.Next!==r&&h.Prev!==r&&(l=h)),h=h.Next;if(l!==null)for(;l!==h;)for(this.FirstIsBottomPt(h,l)||(r=l),l=l.Next;n.IntPoint.op_Inequality(l.Pt,r.Pt);)l=l.Next;return r},n.Clipper.prototype.GetLowermostRec=function(r,l){r.BottomPt===null&&(r.BottomPt=this.GetBottomPt(r.Pts)),l.BottomPt===null&&(l.BottomPt=this.GetBottomPt(l.Pts));var h=r.BottomPt,p=l.BottomPt;return h.Pt.Y>p.Pt.Y?r:h.Pt.Y<p.Pt.Y?l:h.Pt.X<p.Pt.X?r:h.Pt.X>p.Pt.X||h.Next===h?l:p.Next===p||this.FirstIsBottomPt(h,p)?r:l},n.Clipper.prototype.OutRec1RightOfOutRec2=function(r,l){do if(r=r.FirstLeft,r===l)return!0;while(r!==null);return!1},n.Clipper.prototype.GetOutRec=function(r){for(var l=this.m_PolyOuts[r];l!==this.m_PolyOuts[l.Idx];)l=this.m_PolyOuts[l.Idx];return l},n.Clipper.prototype.AppendPolygon=function(r,l){var h=this.m_PolyOuts[r.OutIdx],p=this.m_PolyOuts[l.OutIdx],M;this.OutRec1RightOfOutRec2(h,p)?M=p:this.OutRec1RightOfOutRec2(p,h)?M=h:M=this.GetLowermostRec(h,p);var P=h.Pts,D=P.Prev,W=p.Pts,q=W.Prev;r.Side===n.EdgeSide.esLeft?l.Side===n.EdgeSide.esLeft?(this.ReversePolyPtLinks(W),W.Next=P,P.Prev=W,D.Next=q,q.Prev=D,h.Pts=q):(q.Next=P,P.Prev=q,W.Prev=D,D.Next=W,h.Pts=W):l.Side===n.EdgeSide.esRight?(this.ReversePolyPtLinks(W),D.Next=q,q.Prev=D,W.Next=P,P.Prev=W):(D.Next=W,W.Prev=D,P.Prev=q,q.Next=P),h.BottomPt=null,M===p&&(p.FirstLeft!==h&&(h.FirstLeft=p.FirstLeft),h.IsHole=p.IsHole),p.Pts=null,p.BottomPt=null,p.FirstLeft=h;var et=r.OutIdx,vt=l.OutIdx;r.OutIdx=-1,l.OutIdx=-1;for(var xt=this.m_ActiveEdges;xt!==null;){if(xt.OutIdx===vt){xt.OutIdx=et,xt.Side=r.Side;break}xt=xt.NextInAEL}p.Idx=h.Idx},n.Clipper.prototype.ReversePolyPtLinks=function(r){if(r!==null){var l,h;l=r;do h=l.Next,l.Next=l.Prev,l.Prev=h,l=h;while(l!==r)}},n.Clipper.SwapSides=function(r,l){var h=r.Side;r.Side=l.Side,l.Side=h},n.Clipper.SwapPolyIndexes=function(r,l){var h=r.OutIdx;r.OutIdx=l.OutIdx,l.OutIdx=h},n.Clipper.prototype.IntersectEdges=function(r,l,h){var p=r.OutIdx>=0,M=l.OutIdx>=0;if(n.use_xyz&&this.SetZ(h,r,l),n.use_lines&&(r.WindDelta===0||l.WindDelta===0)){if(r.WindDelta===0&&l.WindDelta===0)return;r.PolyTyp===l.PolyTyp&&r.WindDelta!==l.WindDelta&&this.m_ClipType===n.ClipType.ctUnion?r.WindDelta===0?M&&(this.AddOutPt(r,h),p&&(r.OutIdx=-1)):p&&(this.AddOutPt(l,h),M&&(l.OutIdx=-1)):r.PolyTyp!==l.PolyTyp&&(r.WindDelta===0&&Math.abs(l.WindCnt)===1&&(this.m_ClipType!==n.ClipType.ctUnion||l.WindCnt2===0)?(this.AddOutPt(r,h),p&&(r.OutIdx=-1)):l.WindDelta===0&&Math.abs(r.WindCnt)===1&&(this.m_ClipType!==n.ClipType.ctUnion||r.WindCnt2===0)&&(this.AddOutPt(l,h),M&&(l.OutIdx=-1)));return}if(r.PolyTyp===l.PolyTyp)if(this.IsEvenOddFillType(r)){var P=r.WindCnt;r.WindCnt=l.WindCnt,l.WindCnt=P}else r.WindCnt+l.WindDelta===0?r.WindCnt=-r.WindCnt:r.WindCnt+=l.WindDelta,l.WindCnt-r.WindDelta===0?l.WindCnt=-l.WindCnt:l.WindCnt-=r.WindDelta;else this.IsEvenOddFillType(l)?r.WindCnt2=r.WindCnt2===0?1:0:r.WindCnt2+=l.WindDelta,this.IsEvenOddFillType(r)?l.WindCnt2=l.WindCnt2===0?1:0:l.WindCnt2-=r.WindDelta;var D,W,q,et;r.PolyTyp===n.PolyType.ptSubject?(D=this.m_SubjFillType,q=this.m_ClipFillType):(D=this.m_ClipFillType,q=this.m_SubjFillType),l.PolyTyp===n.PolyType.ptSubject?(W=this.m_SubjFillType,et=this.m_ClipFillType):(W=this.m_ClipFillType,et=this.m_SubjFillType);var vt,xt;switch(D){case n.PolyFillType.pftPositive:vt=r.WindCnt;break;case n.PolyFillType.pftNegative:vt=-r.WindCnt;break;default:vt=Math.abs(r.WindCnt);break}switch(W){case n.PolyFillType.pftPositive:xt=l.WindCnt;break;case n.PolyFillType.pftNegative:xt=-l.WindCnt;break;default:xt=Math.abs(l.WindCnt);break}if(p&&M)vt!==0&&vt!==1||xt!==0&&xt!==1||r.PolyTyp!==l.PolyTyp&&this.m_ClipType!==n.ClipType.ctXor?this.AddLocalMaxPoly(r,l,h):(this.AddOutPt(r,h),this.AddOutPt(l,h),n.Clipper.SwapSides(r,l),n.Clipper.SwapPolyIndexes(r,l));else if(p)(xt===0||xt===1)&&(this.AddOutPt(r,h),n.Clipper.SwapSides(r,l),n.Clipper.SwapPolyIndexes(r,l));else if(M)(vt===0||vt===1)&&(this.AddOutPt(l,h),n.Clipper.SwapSides(r,l),n.Clipper.SwapPolyIndexes(r,l));else if((vt===0||vt===1)&&(xt===0||xt===1)){var Mt,jt;switch(q){case n.PolyFillType.pftPositive:Mt=r.WindCnt2;break;case n.PolyFillType.pftNegative:Mt=-r.WindCnt2;break;default:Mt=Math.abs(r.WindCnt2);break}switch(et){case n.PolyFillType.pftPositive:jt=l.WindCnt2;break;case n.PolyFillType.pftNegative:jt=-l.WindCnt2;break;default:jt=Math.abs(l.WindCnt2);break}if(r.PolyTyp!==l.PolyTyp)this.AddLocalMinPoly(r,l,h);else if(vt===1&&xt===1)switch(this.m_ClipType){case n.ClipType.ctIntersection:Mt>0&&jt>0&&this.AddLocalMinPoly(r,l,h);break;case n.ClipType.ctUnion:Mt<=0&&jt<=0&&this.AddLocalMinPoly(r,l,h);break;case n.ClipType.ctDifference:(r.PolyTyp===n.PolyType.ptClip&&Mt>0&&jt>0||r.PolyTyp===n.PolyType.ptSubject&&Mt<=0&&jt<=0)&&this.AddLocalMinPoly(r,l,h);break;case n.ClipType.ctXor:this.AddLocalMinPoly(r,l,h);break}else n.Clipper.SwapSides(r,l)}},n.Clipper.prototype.DeleteFromSEL=function(r){var l=r.PrevInSEL,h=r.NextInSEL;l===null&&h===null&&r!==this.m_SortedEdges||(l!==null?l.NextInSEL=h:this.m_SortedEdges=h,h!==null&&(h.PrevInSEL=l),r.NextInSEL=null,r.PrevInSEL=null)},n.Clipper.prototype.ProcessHorizontals=function(){for(var r={};this.PopEdgeFromSEL(r);)this.ProcessHorizontal(r.v)},n.Clipper.prototype.GetHorzDirection=function(r,l){r.Bot.X<r.Top.X?(l.Left=r.Bot.X,l.Right=r.Top.X,l.Dir=n.Direction.dLeftToRight):(l.Left=r.Top.X,l.Right=r.Bot.X,l.Dir=n.Direction.dRightToLeft)},n.Clipper.prototype.ProcessHorizontal=function(r){var l={Dir:null,Left:null,Right:null};this.GetHorzDirection(r,l);for(var h=l.Dir,p=l.Left,M=l.Right,P=r.WindDelta===0,D=r,W=null;D.NextInLML!==null&&n.ClipperBase.IsHorizontal(D.NextInLML);)D=D.NextInLML;D.NextInLML===null&&(W=this.GetMaximaPair(D));var q=this.m_Maxima;if(q!==null)if(h===n.Direction.dLeftToRight){for(;q!==null&&q.X<=r.Bot.X;)q=q.Next;q!==null&&q.X>=D.Top.X&&(q=null)}else{for(;q.Next!==null&&q.Next.X<r.Bot.X;)q=q.Next;q.X<=D.Top.X&&(q=null)}for(var et=null;;){for(var vt=r===D,xt=this.GetNextInAEL(r,h);xt!==null;){if(q!==null)if(h===n.Direction.dLeftToRight)for(;q!==null&&q.X<xt.Curr.X;)r.OutIdx>=0&&!P&&this.AddOutPt(r,new n.IntPoint2(q.X,r.Bot.Y)),q=q.Next;else for(;q!==null&&q.X>xt.Curr.X;)r.OutIdx>=0&&!P&&this.AddOutPt(r,new n.IntPoint2(q.X,r.Bot.Y)),q=q.Prev;if(h===n.Direction.dLeftToRight&&xt.Curr.X>M||h===n.Direction.dRightToLeft&&xt.Curr.X<p||xt.Curr.X===r.Top.X&&r.NextInLML!==null&&xt.Dx<r.NextInLML.Dx)break;if(r.OutIdx>=0&&!P){n.use_xyz&&(h===n.Direction.dLeftToRight?this.SetZ(xt.Curr,r,xt):this.SetZ(xt.Curr,xt,r)),et=this.AddOutPt(r,xt.Curr);for(var Mt=this.m_SortedEdges;Mt!==null;){if(Mt.OutIdx>=0&&this.HorzSegmentsOverlap(r.Bot.X,r.Top.X,Mt.Bot.X,Mt.Top.X)){var jt=this.GetLastOutPt(Mt);this.AddJoin(jt,et,Mt.Top)}Mt=Mt.NextInSEL}this.AddGhostJoin(et,r.Bot)}if(xt===W&&vt){r.OutIdx>=0&&this.AddLocalMaxPoly(r,W,r.Top),this.DeleteFromAEL(r),this.DeleteFromAEL(W);return}if(h===n.Direction.dLeftToRight){var ce=new n.IntPoint2(xt.Curr.X,r.Curr.Y);this.IntersectEdges(r,xt,ce)}else{var ce=new n.IntPoint2(xt.Curr.X,r.Curr.Y);this.IntersectEdges(xt,r,ce)}var ye=this.GetNextInAEL(xt,h);this.SwapPositionsInAEL(r,xt),xt=ye}if(r.NextInLML===null||!n.ClipperBase.IsHorizontal(r.NextInLML))break;r=this.UpdateEdgeIntoAEL(r),r.OutIdx>=0&&this.AddOutPt(r,r.Bot),l={Dir:h,Left:p,Right:M},this.GetHorzDirection(r,l),h=l.Dir,p=l.Left,M=l.Right}if(r.OutIdx>=0&&et===null){et=this.GetLastOutPt(r);for(var Mt=this.m_SortedEdges;Mt!==null;){if(Mt.OutIdx>=0&&this.HorzSegmentsOverlap(r.Bot.X,r.Top.X,Mt.Bot.X,Mt.Top.X)){var jt=this.GetLastOutPt(Mt);this.AddJoin(jt,et,Mt.Top)}Mt=Mt.NextInSEL}this.AddGhostJoin(et,r.Top)}if(r.NextInLML!==null)if(r.OutIdx>=0){if(et=this.AddOutPt(r,r.Top),r=this.UpdateEdgeIntoAEL(r),r.WindDelta===0)return;var ze=r.PrevInAEL,ye=r.NextInAEL;if(ze!==null&&ze.Curr.X===r.Bot.X&&ze.Curr.Y===r.Bot.Y&&ze.WindDelta===0&&ze.OutIdx>=0&&ze.Curr.Y>ze.Top.Y&&n.ClipperBase.SlopesEqual3(r,ze,this.m_UseFullRange)){var jt=this.AddOutPt(ze,r.Bot);this.AddJoin(et,jt,r.Top)}else if(ye!==null&&ye.Curr.X===r.Bot.X&&ye.Curr.Y===r.Bot.Y&&ye.WindDelta!==0&&ye.OutIdx>=0&&ye.Curr.Y>ye.Top.Y&&n.ClipperBase.SlopesEqual3(r,ye,this.m_UseFullRange)){var jt=this.AddOutPt(ye,r.Bot);this.AddJoin(et,jt,r.Top)}}else r=this.UpdateEdgeIntoAEL(r);else r.OutIdx>=0&&this.AddOutPt(r,r.Top),this.DeleteFromAEL(r)},n.Clipper.prototype.GetNextInAEL=function(r,l){return l===n.Direction.dLeftToRight?r.NextInAEL:r.PrevInAEL},n.Clipper.prototype.IsMinima=function(r){return r!==null&&r.Prev.NextInLML!==r&&r.Next.NextInLML!==r},n.Clipper.prototype.IsMaxima=function(r,l){return r!==null&&r.Top.Y===l&&r.NextInLML===null},n.Clipper.prototype.IsIntermediate=function(r,l){return r.Top.Y===l&&r.NextInLML!==null},n.Clipper.prototype.GetMaximaPair=function(r){return n.IntPoint.op_Equality(r.Next.Top,r.Top)&&r.Next.NextInLML===null?r.Next:n.IntPoint.op_Equality(r.Prev.Top,r.Top)&&r.Prev.NextInLML===null?r.Prev:null},n.Clipper.prototype.GetMaximaPairEx=function(r){var l=this.GetMaximaPair(r);return l===null||l.OutIdx===n.ClipperBase.Skip||l.NextInAEL===l.PrevInAEL&&!n.ClipperBase.IsHorizontal(l)?null:l},n.Clipper.prototype.ProcessIntersections=function(r){if(this.m_ActiveEdges===null)return!0;try{if(this.BuildIntersectList(r),this.m_IntersectList.length===0)return!0;if(this.m_IntersectList.length===1||this.FixupIntersectionOrder())this.ProcessIntersectList();else return!1}catch{this.m_SortedEdges=null,this.m_IntersectList.length=0,n.Error("ProcessIntersections error")}return this.m_SortedEdges=null,!0},n.Clipper.prototype.BuildIntersectList=function(r){if(this.m_ActiveEdges!==null){var l=this.m_ActiveEdges;for(this.m_SortedEdges=l;l!==null;)l.PrevInSEL=l.PrevInAEL,l.NextInSEL=l.NextInAEL,l.Curr.X=n.Clipper.TopX(l,r),l=l.NextInAEL;for(var h=!0;h&&this.m_SortedEdges!==null;){for(h=!1,l=this.m_SortedEdges;l.NextInSEL!==null;){var p=l.NextInSEL,M=new n.IntPoint0;if(l.Curr.X>p.Curr.X){this.IntersectPoint(l,p,M),M.Y<r&&(M=new n.IntPoint2(n.Clipper.TopX(l,r),r));var P=new n.IntersectNode;P.Edge1=l,P.Edge2=p,P.Pt.X=M.X,P.Pt.Y=M.Y,n.use_xyz&&(P.Pt.Z=M.Z),this.m_IntersectList.push(P),this.SwapPositionsInSEL(l,p),h=!0}else l=p}if(l.PrevInSEL!==null)l.PrevInSEL.NextInSEL=null;else break}this.m_SortedEdges=null}},n.Clipper.prototype.EdgesAdjacent=function(r){return r.Edge1.NextInSEL===r.Edge2||r.Edge1.PrevInSEL===r.Edge2},n.Clipper.IntersectNodeSort=function(r,l){return l.Pt.Y-r.Pt.Y},n.Clipper.prototype.FixupIntersectionOrder=function(){this.m_IntersectList.sort(this.m_IntersectNodeComparer),this.CopyAELToSEL();for(var r=this.m_IntersectList.length,l=0;l<r;l++){if(!this.EdgesAdjacent(this.m_IntersectList[l])){for(var h=l+1;h<r&&!this.EdgesAdjacent(this.m_IntersectList[h]);)h++;if(h===r)return!1;var p=this.m_IntersectList[l];this.m_IntersectList[l]=this.m_IntersectList[h],this.m_IntersectList[h]=p}this.SwapPositionsInSEL(this.m_IntersectList[l].Edge1,this.m_IntersectList[l].Edge2)}return!0},n.Clipper.prototype.ProcessIntersectList=function(){for(var r=0,l=this.m_IntersectList.length;r<l;r++){var h=this.m_IntersectList[r];this.IntersectEdges(h.Edge1,h.Edge2,h.Pt),this.SwapPositionsInAEL(h.Edge1,h.Edge2)}this.m_IntersectList.length=0};var Wt=function(r){return r<0?Math.ceil(r-.5):Math.round(r)},Te=function(r){return r<0?Math.ceil(r-.5):Math.floor(r+.5)},Qe=function(r){return r<0?-Math.round(Math.abs(r)):Math.round(r)},ke=function(r){return r<0?(r-=.5,r<-2147483648?Math.ceil(r):r|0):(r+=.5,r>2147483647?Math.floor(r):r|0)};s.msie?n.Clipper.Round=Wt:s.chromium?n.Clipper.Round=Qe:s.safari?n.Clipper.Round=ke:n.Clipper.Round=Te,n.Clipper.TopX=function(r,l){return l===r.Top.Y?r.Top.X:r.Bot.X+n.Clipper.Round(r.Dx*(l-r.Bot.Y))},n.Clipper.prototype.IntersectPoint=function(r,l,h){h.X=0,h.Y=0;var p,M;if(r.Dx===l.Dx){h.Y=r.Curr.Y,h.X=n.Clipper.TopX(r,h.Y);return}if(r.Delta.X===0)h.X=r.Bot.X,n.ClipperBase.IsHorizontal(l)?h.Y=l.Bot.Y:(M=l.Bot.Y-l.Bot.X/l.Dx,h.Y=n.Clipper.Round(h.X/l.Dx+M));else if(l.Delta.X===0)h.X=l.Bot.X,n.ClipperBase.IsHorizontal(r)?h.Y=r.Bot.Y:(p=r.Bot.Y-r.Bot.X/r.Dx,h.Y=n.Clipper.Round(h.X/r.Dx+p));else{p=r.Bot.X-r.Bot.Y*r.Dx,M=l.Bot.X-l.Bot.Y*l.Dx;var P=(M-p)/(r.Dx-l.Dx);h.Y=n.Clipper.Round(P),Math.abs(r.Dx)<Math.abs(l.Dx)?h.X=n.Clipper.Round(r.Dx*P+p):h.X=n.Clipper.Round(l.Dx*P+M)}if(h.Y<r.Top.Y||h.Y<l.Top.Y){if(r.Top.Y>l.Top.Y)return h.Y=r.Top.Y,h.X=n.Clipper.TopX(l,r.Top.Y),h.X<r.Top.X;h.Y=l.Top.Y,Math.abs(r.Dx)<Math.abs(l.Dx)?h.X=n.Clipper.TopX(r,h.Y):h.X=n.Clipper.TopX(l,h.Y)}h.Y>r.Curr.Y&&(h.Y=r.Curr.Y,Math.abs(r.Dx)>Math.abs(l.Dx)?h.X=n.Clipper.TopX(l,h.Y):h.X=n.Clipper.TopX(r,h.Y))},n.Clipper.prototype.ProcessEdgesAtTopOfScanbeam=function(r){for(var l=this.m_ActiveEdges;l!==null;){var h=this.IsMaxima(l,r);if(h){var p=this.GetMaximaPairEx(l);h=p===null||!n.ClipperBase.IsHorizontal(p)}if(h){this.StrictlySimple&&this.InsertMaxima(l.Top.X);var M=l.PrevInAEL;this.DoMaxima(l),M===null?l=this.m_ActiveEdges:l=M.NextInAEL}else{if(this.IsIntermediate(l,r)&&n.ClipperBase.IsHorizontal(l.NextInLML)?(l=this.UpdateEdgeIntoAEL(l),l.OutIdx>=0&&this.AddOutPt(l,l.Bot),this.AddEdgeToSEL(l)):(l.Curr.X=n.Clipper.TopX(l,r),l.Curr.Y=r),n.use_xyz&&(l.Top.Y===r?l.Curr.Z=l.Top.Z:l.Bot.Y===r?l.Curr.Z=l.Bot.Z:l.Curr.Z=0),this.StrictlySimple){var M=l.PrevInAEL;if(l.OutIdx>=0&&l.WindDelta!==0&&M!==null&&M.OutIdx>=0&&M.Curr.X===l.Curr.X&&M.WindDelta!==0){var P=new n.IntPoint1(l.Curr);n.use_xyz&&this.SetZ(P,M,l);var D=this.AddOutPt(M,P),W=this.AddOutPt(l,P);this.AddJoin(D,W,P)}}l=l.NextInAEL}}for(this.ProcessHorizontals(),this.m_Maxima=null,l=this.m_ActiveEdges;l!==null;){if(this.IsIntermediate(l,r)){var D=null;l.OutIdx>=0&&(D=this.AddOutPt(l,l.Top)),l=this.UpdateEdgeIntoAEL(l);var M=l.PrevInAEL,q=l.NextInAEL;if(M!==null&&M.Curr.X===l.Bot.X&&M.Curr.Y===l.Bot.Y&&D!==null&&M.OutIdx>=0&&M.Curr.Y===M.Top.Y&&n.ClipperBase.SlopesEqual5(l.Curr,l.Top,M.Curr,M.Top,this.m_UseFullRange)&&l.WindDelta!==0&&M.WindDelta!==0){var W=this.AddOutPt(ePrev2,l.Bot);this.AddJoin(D,W,l.Top)}else if(q!==null&&q.Curr.X===l.Bot.X&&q.Curr.Y===l.Bot.Y&&D!==null&&q.OutIdx>=0&&q.Curr.Y===q.Top.Y&&n.ClipperBase.SlopesEqual5(l.Curr,l.Top,q.Curr,q.Top,this.m_UseFullRange)&&l.WindDelta!==0&&q.WindDelta!==0){var W=this.AddOutPt(q,l.Bot);this.AddJoin(D,W,l.Top)}}l=l.NextInAEL}},n.Clipper.prototype.DoMaxima=function(r){var l=this.GetMaximaPairEx(r);if(l===null){r.OutIdx>=0&&this.AddOutPt(r,r.Top),this.DeleteFromAEL(r);return}for(var h=r.NextInAEL;h!==null&&h!==l;)this.IntersectEdges(r,h,r.Top),this.SwapPositionsInAEL(r,h),h=r.NextInAEL;r.OutIdx===-1&&l.OutIdx===-1?(this.DeleteFromAEL(r),this.DeleteFromAEL(l)):r.OutIdx>=0&&l.OutIdx>=0?(r.OutIdx>=0&&this.AddLocalMaxPoly(r,l,r.Top),this.DeleteFromAEL(r),this.DeleteFromAEL(l)):n.use_lines&&r.WindDelta===0?(r.OutIdx>=0&&(this.AddOutPt(r,r.Top),r.OutIdx=n.ClipperBase.Unassigned),this.DeleteFromAEL(r),l.OutIdx>=0&&(this.AddOutPt(l,r.Top),l.OutIdx=n.ClipperBase.Unassigned),this.DeleteFromAEL(l)):n.Error("DoMaxima error")},n.Clipper.ReversePaths=function(r){for(var l=0,h=r.length;l<h;l++)r[l].reverse()},n.Clipper.Orientation=function(r){return n.Clipper.Area(r)>=0},n.Clipper.prototype.PointCount=function(r){if(r===null)return 0;var l=0,h=r;do l++,h=h.Next;while(h!==r);return l},n.Clipper.prototype.BuildResult=function(r){n.Clear(r);for(var l=0,h=this.m_PolyOuts.length;l<h;l++){var p=this.m_PolyOuts[l];if(p.Pts!==null){var M=p.Pts.Prev,P=this.PointCount(M);if(!(P<2)){for(var D=new Array(P),W=0;W<P;W++)D[W]=M.Pt,M=M.Prev;r.push(D)}}}},n.Clipper.prototype.BuildResult2=function(r){r.Clear();for(var l=0,h=this.m_PolyOuts.length;l<h;l++){var p=this.m_PolyOuts[l],M=this.PointCount(p.Pts);if(!(p.IsOpen&&M<2||!p.IsOpen&&M<3)){this.FixHoleLinkage(p);var P=new n.PolyNode;r.m_AllPolys.push(P),p.PolyNode=P,P.m_polygon.length=M;for(var D=p.Pts.Prev,W=0;W<M;W++)P.m_polygon[W]=D.Pt,D=D.Prev}}for(var l=0,h=this.m_PolyOuts.length;l<h;l++){var p=this.m_PolyOuts[l];p.PolyNode!==null&&(p.IsOpen?(p.PolyNode.IsOpen=!0,r.AddChild(p.PolyNode)):p.FirstLeft!==null&&p.FirstLeft.PolyNode!==null?p.FirstLeft.PolyNode.AddChild(p.PolyNode):r.AddChild(p.PolyNode))}},n.Clipper.prototype.FixupOutPolyline=function(r){for(var l=r.Pts,h=l.Prev;l!==h;)if(l=l.Next,n.IntPoint.op_Equality(l.Pt,l.Prev.Pt)){l===h&&(h=l.Prev);var p=l.Prev;p.Next=l.Next,l.Next.Prev=p,l=p}l===l.Prev&&(r.Pts=null)},n.Clipper.prototype.FixupOutPolygon=function(r){var l=null;r.BottomPt=null;for(var h=r.Pts,p=this.PreserveCollinear||this.StrictlySimple;;){if(h.Prev===h||h.Prev===h.Next){r.Pts=null;return}if(n.IntPoint.op_Equality(h.Pt,h.Next.Pt)||n.IntPoint.op_Equality(h.Pt,h.Prev.Pt)||n.ClipperBase.SlopesEqual4(h.Prev.Pt,h.Pt,h.Next.Pt,this.m_UseFullRange)&&(!p||!this.Pt2IsBetweenPt1AndPt3(h.Prev.Pt,h.Pt,h.Next.Pt)))l=null,h.Prev.Next=h.Next,h.Next.Prev=h.Prev,h=h.Prev;else{if(h===l)break;l===null&&(l=h),h=h.Next}}r.Pts=h},n.Clipper.prototype.DupOutPt=function(r,l){var h=new n.OutPt;return h.Pt.X=r.Pt.X,h.Pt.Y=r.Pt.Y,n.use_xyz&&(h.Pt.Z=r.Pt.Z),h.Idx=r.Idx,l?(h.Next=r.Next,h.Prev=r,r.Next.Prev=h,r.Next=h):(h.Prev=r.Prev,h.Next=r,r.Prev.Next=h,r.Prev=h),h},n.Clipper.prototype.GetOverlap=function(r,l,h,p,M){return r<l?h<p?(M.Left=Math.max(r,h),M.Right=Math.min(l,p)):(M.Left=Math.max(r,p),M.Right=Math.min(l,h)):h<p?(M.Left=Math.max(l,h),M.Right=Math.min(r,p)):(M.Left=Math.max(l,p),M.Right=Math.min(r,h)),M.Left<M.Right},n.Clipper.prototype.JoinHorz=function(r,l,h,p,M,P){var D=r.Pt.X>l.Pt.X?n.Direction.dRightToLeft:n.Direction.dLeftToRight,W=h.Pt.X>p.Pt.X?n.Direction.dRightToLeft:n.Direction.dLeftToRight;if(D===W)return!1;if(D===n.Direction.dLeftToRight){for(;r.Next.Pt.X<=M.X&&r.Next.Pt.X>=r.Pt.X&&r.Next.Pt.Y===M.Y;)r=r.Next;P&&r.Pt.X!==M.X&&(r=r.Next),l=this.DupOutPt(r,!P),n.IntPoint.op_Inequality(l.Pt,M)&&(r=l,r.Pt.X=M.X,r.Pt.Y=M.Y,n.use_xyz&&(r.Pt.Z=M.Z),l=this.DupOutPt(r,!P))}else{for(;r.Next.Pt.X>=M.X&&r.Next.Pt.X<=r.Pt.X&&r.Next.Pt.Y===M.Y;)r=r.Next;!P&&r.Pt.X!==M.X&&(r=r.Next),l=this.DupOutPt(r,P),n.IntPoint.op_Inequality(l.Pt,M)&&(r=l,r.Pt.X=M.X,r.Pt.Y=M.Y,n.use_xyz&&(r.Pt.Z=M.Z),l=this.DupOutPt(r,P))}if(W===n.Direction.dLeftToRight){for(;h.Next.Pt.X<=M.X&&h.Next.Pt.X>=h.Pt.X&&h.Next.Pt.Y===M.Y;)h=h.Next;P&&h.Pt.X!==M.X&&(h=h.Next),p=this.DupOutPt(h,!P),n.IntPoint.op_Inequality(p.Pt,M)&&(h=p,h.Pt.X=M.X,h.Pt.Y=M.Y,n.use_xyz&&(h.Pt.Z=M.Z),p=this.DupOutPt(h,!P))}else{for(;h.Next.Pt.X>=M.X&&h.Next.Pt.X<=h.Pt.X&&h.Next.Pt.Y===M.Y;)h=h.Next;!P&&h.Pt.X!==M.X&&(h=h.Next),p=this.DupOutPt(h,P),n.IntPoint.op_Inequality(p.Pt,M)&&(h=p,h.Pt.X=M.X,h.Pt.Y=M.Y,n.use_xyz&&(h.Pt.Z=M.Z),p=this.DupOutPt(h,P))}return D===n.Direction.dLeftToRight===P?(r.Prev=h,h.Next=r,l.Next=p,p.Prev=l):(r.Next=h,h.Prev=r,l.Prev=p,p.Next=l),!0},n.Clipper.prototype.JoinPoints=function(r,l,h){var p=r.OutPt1,M=new n.OutPt,P=r.OutPt2,D=new n.OutPt,W=r.OutPt1.Pt.Y===r.OffPt.Y;if(W&&n.IntPoint.op_Equality(r.OffPt,r.OutPt1.Pt)&&n.IntPoint.op_Equality(r.OffPt,r.OutPt2.Pt)){if(l!==h)return!1;for(M=r.OutPt1.Next;M!==p&&n.IntPoint.op_Equality(M.Pt,r.OffPt);)M=M.Next;var q=M.Pt.Y>r.OffPt.Y;for(D=r.OutPt2.Next;D!==P&&n.IntPoint.op_Equality(D.Pt,r.OffPt);)D=D.Next;var et=D.Pt.Y>r.OffPt.Y;return q===et?!1:q?(M=this.DupOutPt(p,!1),D=this.DupOutPt(P,!0),p.Prev=P,P.Next=p,M.Next=D,D.Prev=M,r.OutPt1=p,r.OutPt2=M,!0):(M=this.DupOutPt(p,!0),D=this.DupOutPt(P,!1),p.Next=P,P.Prev=p,M.Prev=D,D.Next=M,r.OutPt1=p,r.OutPt2=M,!0)}else if(W){for(M=p;p.Prev.Pt.Y===p.Pt.Y&&p.Prev!==M&&p.Prev!==P;)p=p.Prev;for(;M.Next.Pt.Y===M.Pt.Y&&M.Next!==p&&M.Next!==P;)M=M.Next;if(M.Next===p||M.Next===P)return!1;for(D=P;P.Prev.Pt.Y===P.Pt.Y&&P.Prev!==D&&P.Prev!==M;)P=P.Prev;for(;D.Next.Pt.Y===D.Pt.Y&&D.Next!==P&&D.Next!==p;)D=D.Next;if(D.Next===P||D.Next===p)return!1;var vt={Left:null,Right:null};if(!this.GetOverlap(p.Pt.X,M.Pt.X,P.Pt.X,D.Pt.X,vt))return!1;var xt=vt.Left,Mt=vt.Right,jt=new n.IntPoint0,ce;return p.Pt.X>=xt&&p.Pt.X<=Mt?(jt.X=p.Pt.X,jt.Y=p.Pt.Y,n.use_xyz&&(jt.Z=p.Pt.Z),ce=p.Pt.X>M.Pt.X):P.Pt.X>=xt&&P.Pt.X<=Mt?(jt.X=P.Pt.X,jt.Y=P.Pt.Y,n.use_xyz&&(jt.Z=P.Pt.Z),ce=P.Pt.X>D.Pt.X):M.Pt.X>=xt&&M.Pt.X<=Mt?(jt.X=M.Pt.X,jt.Y=M.Pt.Y,n.use_xyz&&(jt.Z=M.Pt.Z),ce=M.Pt.X>p.Pt.X):(jt.X=D.Pt.X,jt.Y=D.Pt.Y,n.use_xyz&&(jt.Z=D.Pt.Z),ce=D.Pt.X>P.Pt.X),r.OutPt1=p,r.OutPt2=P,this.JoinHorz(p,M,P,D,jt,ce)}else{for(M=p.Next;n.IntPoint.op_Equality(M.Pt,p.Pt)&&M!==p;)M=M.Next;var ye=M.Pt.Y>p.Pt.Y||!n.ClipperBase.SlopesEqual4(p.Pt,M.Pt,r.OffPt,this.m_UseFullRange);if(ye){for(M=p.Prev;n.IntPoint.op_Equality(M.Pt,p.Pt)&&M!==p;)M=M.Prev;if(M.Pt.Y>p.Pt.Y||!n.ClipperBase.SlopesEqual4(p.Pt,M.Pt,r.OffPt,this.m_UseFullRange))return!1}for(D=P.Next;n.IntPoint.op_Equality(D.Pt,P.Pt)&&D!==P;)D=D.Next;var ze=D.Pt.Y>P.Pt.Y||!n.ClipperBase.SlopesEqual4(P.Pt,D.Pt,r.OffPt,this.m_UseFullRange);if(ze){for(D=P.Prev;n.IntPoint.op_Equality(D.Pt,P.Pt)&&D!==P;)D=D.Prev;if(D.Pt.Y>P.Pt.Y||!n.ClipperBase.SlopesEqual4(P.Pt,D.Pt,r.OffPt,this.m_UseFullRange))return!1}return M===p||D===P||M===D||l===h&&ye===ze?!1:ye?(M=this.DupOutPt(p,!1),D=this.DupOutPt(P,!0),p.Prev=P,P.Next=p,M.Next=D,D.Prev=M,r.OutPt1=p,r.OutPt2=M,!0):(M=this.DupOutPt(p,!0),D=this.DupOutPt(P,!1),p.Next=P,P.Prev=p,M.Prev=D,D.Next=M,r.OutPt1=p,r.OutPt2=M,!0)}},n.Clipper.GetBounds=function(r){for(var l=0,h=r.length;l<h&&r[l].length===0;)l++;if(l===h)return new n.IntRect(0,0,0,0);var p=new n.IntRect;for(p.left=r[l][0].X,p.right=p.left,p.top=r[l][0].Y,p.bottom=p.top;l<h;l++)for(var M=0,P=r[l].length;M<P;M++)r[l][M].X<p.left?p.left=r[l][M].X:r[l][M].X>p.right&&(p.right=r[l][M].X),r[l][M].Y<p.top?p.top=r[l][M].Y:r[l][M].Y>p.bottom&&(p.bottom=r[l][M].Y);return p},n.Clipper.prototype.GetBounds2=function(r){var l=r,h=new n.IntRect;for(h.left=r.Pt.X,h.right=r.Pt.X,h.top=r.Pt.Y,h.bottom=r.Pt.Y,r=r.Next;r!==l;)r.Pt.X<h.left&&(h.left=r.Pt.X),r.Pt.X>h.right&&(h.right=r.Pt.X),r.Pt.Y<h.top&&(h.top=r.Pt.Y),r.Pt.Y>h.bottom&&(h.bottom=r.Pt.Y),r=r.Next;return h},n.Clipper.PointInPolygon=function(r,l){var h=0,p=l.length;if(p<3)return 0;for(var M=l[0],P=1;P<=p;++P){var D=P===p?l[0]:l[P];if(D.Y===r.Y&&(D.X===r.X||M.Y===r.Y&&D.X>r.X==M.X<r.X))return-1;if(M.Y<r.Y!=D.Y<r.Y){if(M.X>=r.X)if(D.X>r.X)h=1-h;else{var W=(M.X-r.X)*(D.Y-r.Y)-(D.X-r.X)*(M.Y-r.Y);if(W===0)return-1;W>0==D.Y>M.Y&&(h=1-h)}else if(D.X>r.X){var W=(M.X-r.X)*(D.Y-r.Y)-(D.X-r.X)*(M.Y-r.Y);if(W===0)return-1;W>0==D.Y>M.Y&&(h=1-h)}}M=D}return h},n.Clipper.prototype.PointInPolygon=function(r,l){var h=0,p=l,M=r.X,P=r.Y,D=l.Pt.X,W=l.Pt.Y;do{l=l.Next;var q=l.Pt.X,et=l.Pt.Y;if(et===P&&(q===M||W===P&&q>M==D<M))return-1;if(W<P!=et<P){if(D>=M)if(q>M)h=1-h;else{var vt=(D-M)*(et-P)-(q-M)*(W-P);if(vt===0)return-1;vt>0==et>W&&(h=1-h)}else if(q>M){var vt=(D-M)*(et-P)-(q-M)*(W-P);if(vt===0)return-1;vt>0==et>W&&(h=1-h)}}D=q,W=et}while(p!==l);return h},n.Clipper.prototype.Poly2ContainsPoly1=function(r,l){var h=r;do{var p=this.PointInPolygon(h.Pt,l);if(p>=0)return p>0;h=h.Next}while(h!==r);return!0},n.Clipper.prototype.FixupFirstLefts1=function(r,l){for(var h,p,M=0,P=this.m_PolyOuts.length;M<P;M++)h=this.m_PolyOuts[M],p=n.Clipper.ParseFirstLeft(h.FirstLeft),h.Pts!==null&&p===r&&this.Poly2ContainsPoly1(h.Pts,l.Pts)&&(h.FirstLeft=l)},n.Clipper.prototype.FixupFirstLefts2=function(r,l){for(var h=l.FirstLeft,p,M,P=0,D=this.m_PolyOuts.length;P<D;P++)p=this.m_PolyOuts[P],!(p.Pts===null||p===l||p===r)&&(M=n.Clipper.ParseFirstLeft(p.FirstLeft),!(M!==h&&M!==r&&M!==l)&&(this.Poly2ContainsPoly1(p.Pts,r.Pts)?p.FirstLeft=r:this.Poly2ContainsPoly1(p.Pts,l.Pts)?p.FirstLeft=l:(p.FirstLeft===r||p.FirstLeft===l)&&(p.FirstLeft=h)))},n.Clipper.prototype.FixupFirstLefts3=function(r,l){for(var h,p,M=0,P=this.m_PolyOuts.length;M<P;M++)h=this.m_PolyOuts[M],p=n.Clipper.ParseFirstLeft(h.FirstLeft),h.Pts!==null&&p===r&&(h.FirstLeft=l)},n.Clipper.ParseFirstLeft=function(r){for(;r!==null&&r.Pts===null;)r=r.FirstLeft;return r},n.Clipper.prototype.JoinCommonEdges=function(){for(var r=0,l=this.m_Joins.length;r<l;r++){var h=this.m_Joins[r],p=this.GetOutRec(h.OutPt1.Idx),M=this.GetOutRec(h.OutPt2.Idx);if(!(p.Pts===null||M.Pts===null)&&!(p.IsOpen||M.IsOpen)){var P;p===M?P=p:this.OutRec1RightOfOutRec2(p,M)?P=M:this.OutRec1RightOfOutRec2(M,p)?P=p:P=this.GetLowermostRec(p,M),this.JoinPoints(h,p,M)&&(p===M?(p.Pts=h.OutPt1,p.BottomPt=null,M=this.CreateOutRec(),M.Pts=h.OutPt2,this.UpdateOutPtIdxs(M),this.Poly2ContainsPoly1(M.Pts,p.Pts)?(M.IsHole=!p.IsHole,M.FirstLeft=p,this.m_UsingPolyTree&&this.FixupFirstLefts2(M,p),(M.IsHole^this.ReverseSolution)==this.Area$1(M)>0&&this.ReversePolyPtLinks(M.Pts)):this.Poly2ContainsPoly1(p.Pts,M.Pts)?(M.IsHole=p.IsHole,p.IsHole=!M.IsHole,M.FirstLeft=p.FirstLeft,p.FirstLeft=M,this.m_UsingPolyTree&&this.FixupFirstLefts2(p,M),(p.IsHole^this.ReverseSolution)==this.Area$1(p)>0&&this.ReversePolyPtLinks(p.Pts)):(M.IsHole=p.IsHole,M.FirstLeft=p.FirstLeft,this.m_UsingPolyTree&&this.FixupFirstLefts1(p,M))):(M.Pts=null,M.BottomPt=null,M.Idx=p.Idx,p.IsHole=P.IsHole,P===M&&(p.FirstLeft=M.FirstLeft),M.FirstLeft=p,this.m_UsingPolyTree&&this.FixupFirstLefts3(M,p)))}}},n.Clipper.prototype.UpdateOutPtIdxs=function(r){var l=r.Pts;do l.Idx=r.Idx,l=l.Prev;while(l!==r.Pts)},n.Clipper.prototype.DoSimplePolygons=function(){for(var r=0;r<this.m_PolyOuts.length;){var l=this.m_PolyOuts[r++],h=l.Pts;if(!(h===null||l.IsOpen))do{for(var p=h.Next;p!==l.Pts;){if(n.IntPoint.op_Equality(h.Pt,p.Pt)&&p.Next!==h&&p.Prev!==h){var M=h.Prev,P=p.Prev;h.Prev=P,P.Next=h,p.Prev=M,M.Next=p,l.Pts=h;var D=this.CreateOutRec();D.Pts=p,this.UpdateOutPtIdxs(D),this.Poly2ContainsPoly1(D.Pts,l.Pts)?(D.IsHole=!l.IsHole,D.FirstLeft=l,this.m_UsingPolyTree&&this.FixupFirstLefts2(D,l)):this.Poly2ContainsPoly1(l.Pts,D.Pts)?(D.IsHole=l.IsHole,l.IsHole=!D.IsHole,D.FirstLeft=l.FirstLeft,l.FirstLeft=D,this.m_UsingPolyTree&&this.FixupFirstLefts2(l,D)):(D.IsHole=l.IsHole,D.FirstLeft=l.FirstLeft,this.m_UsingPolyTree&&this.FixupFirstLefts1(l,D)),p=h}p=p.Next}h=h.Next}while(h!==l.Pts)}},n.Clipper.Area=function(r){if(!Array.isArray(r))return 0;var l=r.length;if(l<3)return 0;for(var h=0,p=0,M=l-1;p<l;++p)h+=(r[M].X+r[p].X)*(r[M].Y-r[p].Y),M=p;return-h*.5},n.Clipper.prototype.Area=function(r){var l=r;if(r===null)return 0;var h=0;do h=h+(r.Prev.Pt.X+r.Pt.X)*(r.Prev.Pt.Y-r.Pt.Y),r=r.Next;while(r!==l);return h*.5},n.Clipper.prototype.Area$1=function(r){return this.Area(r.Pts)},n.Clipper.SimplifyPolygon=function(r,l){var h=new Array,p=new n.Clipper(0);return p.StrictlySimple=!0,p.AddPath(r,n.PolyType.ptSubject,!0),p.Execute(n.ClipType.ctUnion,h,l,l),h},n.Clipper.SimplifyPolygons=function(r,l){typeof l>"u"&&(l=n.PolyFillType.pftEvenOdd);var h=new Array,p=new n.Clipper(0);return p.StrictlySimple=!0,p.AddPaths(r,n.PolyType.ptSubject,!0),p.Execute(n.ClipType.ctUnion,h,l,l),h},n.Clipper.DistanceSqrd=function(r,l){var h=r.X-l.X,p=r.Y-l.Y;return h*h+p*p},n.Clipper.DistanceFromLineSqrd=function(r,l,h){var p=l.Y-h.Y,M=h.X-l.X,P=p*l.X+M*l.Y;return P=p*r.X+M*r.Y-P,P*P/(p*p+M*M)},n.Clipper.SlopesNearCollinear=function(r,l,h,p){return Math.abs(r.X-l.X)>Math.abs(r.Y-l.Y)?r.X>l.X==r.X<h.X?n.Clipper.DistanceFromLineSqrd(r,l,h)<p:l.X>r.X==l.X<h.X?n.Clipper.DistanceFromLineSqrd(l,r,h)<p:n.Clipper.DistanceFromLineSqrd(h,r,l)<p:r.Y>l.Y==r.Y<h.Y?n.Clipper.DistanceFromLineSqrd(r,l,h)<p:l.Y>r.Y==l.Y<h.Y?n.Clipper.DistanceFromLineSqrd(l,r,h)<p:n.Clipper.DistanceFromLineSqrd(h,r,l)<p},n.Clipper.PointsAreClose=function(r,l,h){var p=r.X-l.X,M=r.Y-l.Y;return p*p+M*M<=h},n.Clipper.ExcludeOp=function(r){var l=r.Prev;return l.Next=r.Next,r.Next.Prev=l,l.Idx=0,l},n.Clipper.CleanPolygon=function(r,l){typeof l>"u"&&(l=1.415);var h=r.length;if(h===0)return new Array;for(var p=new Array(h),M=0;M<h;++M)p[M]=new n.OutPt;for(var M=0;M<h;++M)p[M].Pt=r[M],p[M].Next=p[(M+1)%h],p[M].Next.Prev=p[M],p[M].Idx=0;for(var P=l*l,D=p[0];D.Idx===0&&D.Next!==D.Prev;)n.Clipper.PointsAreClose(D.Pt,D.Prev.Pt,P)?(D=n.Clipper.ExcludeOp(D),h--):n.Clipper.PointsAreClose(D.Prev.Pt,D.Next.Pt,P)?(n.Clipper.ExcludeOp(D.Next),D=n.Clipper.ExcludeOp(D),h-=2):n.Clipper.SlopesNearCollinear(D.Prev.Pt,D.Pt,D.Next.Pt,P)?(D=n.Clipper.ExcludeOp(D),h--):(D.Idx=1,D=D.Next);h<3&&(h=0);for(var W=new Array(h),M=0;M<h;++M)W[M]=new n.IntPoint1(D.Pt),D=D.Next;return p=null,W},n.Clipper.CleanPolygons=function(r,l){for(var h=new Array(r.length),p=0,M=r.length;p<M;p++)h[p]=n.Clipper.CleanPolygon(r[p],l);return h},n.Clipper.Minkowski=function(r,l,h,p){var M=p?1:0,P=r.length,D=l.length,W=new Array;if(h)for(var q=0;q<D;q++){for(var et=new Array(P),vt=0,xt=r.length,Mt=r[vt];vt<xt;vt++,Mt=r[vt])et[vt]=new n.IntPoint2(l[q].X+Mt.X,l[q].Y+Mt.Y);W.push(et)}else for(var q=0;q<D;q++){for(var et=new Array(P),vt=0,xt=r.length,Mt=r[vt];vt<xt;vt++,Mt=r[vt])et[vt]=new n.IntPoint2(l[q].X-Mt.X,l[q].Y-Mt.Y);W.push(et)}for(var jt=new Array,q=0;q<D-1+M;q++)for(var vt=0;vt<P;vt++){var ce=new Array;ce.push(W[q%D][vt%P]),ce.push(W[(q+1)%D][vt%P]),ce.push(W[(q+1)%D][(vt+1)%P]),ce.push(W[q%D][(vt+1)%P]),n.Clipper.Orientation(ce)||ce.reverse(),jt.push(ce)}return jt},n.Clipper.MinkowskiSum=function(r,l,h){if(l[0]instanceof Array){for(var M=l,D=new n.Paths,P=new n.Clipper,W=0;W<M.length;++W){var q=n.Clipper.Minkowski(r,M[W],!0,h);if(P.AddPaths(q,n.PolyType.ptSubject,!0),h){var p=n.Clipper.TranslatePath(M[W],r[0]);P.AddPath(p,n.PolyType.ptClip,!0)}}return P.Execute(n.ClipType.ctUnion,D,n.PolyFillType.pftNonZero,n.PolyFillType.pftNonZero),D}else{var p=l,M=n.Clipper.Minkowski(r,p,!0,h),P=new n.Clipper;return P.AddPaths(M,n.PolyType.ptSubject,!0),P.Execute(n.ClipType.ctUnion,M,n.PolyFillType.pftNonZero,n.PolyFillType.pftNonZero),M}},n.Clipper.TranslatePath=function(r,l){for(var h=new n.Path,p=0;p<r.length;p++)h.push(new n.IntPoint2(r[p].X+l.X,r[p].Y+l.Y));return h},n.Clipper.MinkowskiDiff=function(r,l){var h=n.Clipper.Minkowski(r,l,!1,!0),p=new n.Clipper;return p.AddPaths(h,n.PolyType.ptSubject,!0),p.Execute(n.ClipType.ctUnion,h,n.PolyFillType.pftNonZero,n.PolyFillType.pftNonZero),h},n.Clipper.PolyTreeToPaths=function(r){var l=new Array;return n.Clipper.AddPolyNodeToPaths(r,n.Clipper.NodeType.ntAny,l),l},n.Clipper.AddPolyNodeToPaths=function(r,l,h){var p=!0;switch(l){case n.Clipper.NodeType.ntOpen:return;case n.Clipper.NodeType.ntClosed:p=!r.IsOpen;break;default:break}r.m_polygon.length>0&&p&&h.push(r.m_polygon);for(var M=0,P=r.Childs(),D=P.length,W=P[M];M<D;M++,W=P[M])n.Clipper.AddPolyNodeToPaths(W,l,h)},n.Clipper.OpenPathsFromPolyTree=function(r){for(var l=new n.Paths,h=0,p=r.ChildCount();h<p;h++)r.Childs()[h].IsOpen&&l.push(r.Childs()[h].m_polygon);return l},n.Clipper.ClosedPathsFromPolyTree=function(r){var l=new n.Paths;return n.Clipper.AddPolyNodeToPaths(r,n.Clipper.NodeType.ntClosed,l),l},xe(n.Clipper,n.ClipperBase),n.Clipper.NodeType={ntAny:0,ntOpen:1,ntClosed:2},n.ClipperOffset=function(r,l){typeof r>"u"&&(r=2),typeof l>"u"&&(l=n.ClipperOffset.def_arc_tolerance),this.m_destPolys=new n.Paths,this.m_srcPoly=new n.Path,this.m_destPoly=new n.Path,this.m_normals=new Array,this.m_delta=0,this.m_sinA=0,this.m_sin=0,this.m_cos=0,this.m_miterLim=0,this.m_StepsPerRad=0,this.m_lowest=new n.IntPoint0,this.m_polyNodes=new n.PolyNode,this.MiterLimit=r,this.ArcTolerance=l,this.m_lowest.X=-1},n.ClipperOffset.two_pi=6.28318530717959,n.ClipperOffset.def_arc_tolerance=.25,n.ClipperOffset.prototype.Clear=function(){n.Clear(this.m_polyNodes.Childs()),this.m_lowest.X=-1},n.ClipperOffset.Round=n.Clipper.Round,n.ClipperOffset.prototype.AddPath=function(r,l,h){var p=r.length-1;if(!(p<0)){var M=new n.PolyNode;if(M.m_jointype=l,M.m_endtype=h,h===n.EndType.etClosedLine||h===n.EndType.etClosedPolygon)for(;p>0&&n.IntPoint.op_Equality(r[0],r[p]);)p--;M.m_polygon.push(r[0]);for(var P=0,D=0,W=1;W<=p;W++)n.IntPoint.op_Inequality(M.m_polygon[P],r[W])&&(P++,M.m_polygon.push(r[W]),(r[W].Y>M.m_polygon[D].Y||r[W].Y===M.m_polygon[D].Y&&r[W].X<M.m_polygon[D].X)&&(D=P));if(!(h===n.EndType.etClosedPolygon&&P<2)&&(this.m_polyNodes.AddChild(M),h===n.EndType.etClosedPolygon))if(this.m_lowest.X<0)this.m_lowest=new n.IntPoint2(this.m_polyNodes.ChildCount()-1,D);else{var q=this.m_polyNodes.Childs()[this.m_lowest.X].m_polygon[this.m_lowest.Y];(M.m_polygon[D].Y>q.Y||M.m_polygon[D].Y===q.Y&&M.m_polygon[D].X<q.X)&&(this.m_lowest=new n.IntPoint2(this.m_polyNodes.ChildCount()-1,D))}}},n.ClipperOffset.prototype.AddPaths=function(r,l,h){for(var p=0,M=r.length;p<M;p++)this.AddPath(r[p],l,h)},n.ClipperOffset.prototype.FixOrientations=function(){if(this.m_lowest.X>=0&&!n.Clipper.Orientation(this.m_polyNodes.Childs()[this.m_lowest.X].m_polygon))for(var r=0;r<this.m_polyNodes.ChildCount();r++){var l=this.m_polyNodes.Childs()[r];(l.m_endtype===n.EndType.etClosedPolygon||l.m_endtype===n.EndType.etClosedLine&&n.Clipper.Orientation(l.m_polygon))&&l.m_polygon.reverse()}else for(var r=0;r<this.m_polyNodes.ChildCount();r++){var l=this.m_polyNodes.Childs()[r];l.m_endtype===n.EndType.etClosedLine&&!n.Clipper.Orientation(l.m_polygon)&&l.m_polygon.reverse()}},n.ClipperOffset.GetUnitNormal=function(r,l){var h=l.X-r.X,p=l.Y-r.Y;if(h===0&&p===0)return new n.DoublePoint2(0,0);var M=1/Math.sqrt(h*h+p*p);return h*=M,p*=M,new n.DoublePoint2(p,-h)},n.ClipperOffset.prototype.DoOffset=function(r){if(this.m_destPolys=new Array,this.m_delta=r,n.ClipperBase.near_zero(r)){for(var l=0;l<this.m_polyNodes.ChildCount();l++){var h=this.m_polyNodes.Childs()[l];h.m_endtype===n.EndType.etClosedPolygon&&this.m_destPolys.push(h.m_polygon)}return}this.MiterLimit>2?this.m_miterLim=2/(this.MiterLimit*this.MiterLimit):this.m_miterLim=.5;var p;this.ArcTolerance<=0?p=n.ClipperOffset.def_arc_tolerance:this.ArcTolerance>Math.abs(r)*n.ClipperOffset.def_arc_tolerance?p=Math.abs(r)*n.ClipperOffset.def_arc_tolerance:p=this.ArcTolerance;var M=3.14159265358979/Math.acos(1-p/Math.abs(r));this.m_sin=Math.sin(n.ClipperOffset.two_pi/M),this.m_cos=Math.cos(n.ClipperOffset.two_pi/M),this.m_StepsPerRad=M/n.ClipperOffset.two_pi,r<0&&(this.m_sin=-this.m_sin);for(var l=0;l<this.m_polyNodes.ChildCount();l++){var h=this.m_polyNodes.Childs()[l];this.m_srcPoly=h.m_polygon;var P=this.m_srcPoly.length;if(!(P===0||r<=0&&(P<3||h.m_endtype!==n.EndType.etClosedPolygon))){if(this.m_destPoly=new Array,P===1){if(h.m_jointype===n.JoinType.jtRound)for(var D=1,W=0,q=1;q<=M;q++){this.m_destPoly.push(new n.IntPoint2(n.ClipperOffset.Round(this.m_srcPoly[0].X+D*r),n.ClipperOffset.Round(this.m_srcPoly[0].Y+W*r)));var et=D;D=D*this.m_cos-this.m_sin*W,W=et*this.m_sin+W*this.m_cos}else for(var D=-1,W=-1,q=0;q<4;++q)this.m_destPoly.push(new n.IntPoint2(n.ClipperOffset.Round(this.m_srcPoly[0].X+D*r),n.ClipperOffset.Round(this.m_srcPoly[0].Y+W*r))),D<0?D=1:W<0?W=1:D=-1;this.m_destPolys.push(this.m_destPoly);continue}this.m_normals.length=0;for(var q=0;q<P-1;q++)this.m_normals.push(n.ClipperOffset.GetUnitNormal(this.m_srcPoly[q],this.m_srcPoly[q+1]));if(h.m_endtype===n.EndType.etClosedLine||h.m_endtype===n.EndType.etClosedPolygon?this.m_normals.push(n.ClipperOffset.GetUnitNormal(this.m_srcPoly[P-1],this.m_srcPoly[0])):this.m_normals.push(new n.DoublePoint1(this.m_normals[P-2])),h.m_endtype===n.EndType.etClosedPolygon){for(var vt=P-1,q=0;q<P;q++)vt=this.OffsetPoint(q,vt,h.m_jointype);this.m_destPolys.push(this.m_destPoly)}else if(h.m_endtype===n.EndType.etClosedLine){for(var vt=P-1,q=0;q<P;q++)vt=this.OffsetPoint(q,vt,h.m_jointype);this.m_destPolys.push(this.m_destPoly),this.m_destPoly=new Array;for(var xt=this.m_normals[P-1],q=P-1;q>0;q--)this.m_normals[q]=new n.DoublePoint2(-this.m_normals[q-1].X,-this.m_normals[q-1].Y);this.m_normals[0]=new n.DoublePoint2(-xt.X,-xt.Y),vt=0;for(var q=P-1;q>=0;q--)vt=this.OffsetPoint(q,vt,h.m_jointype);this.m_destPolys.push(this.m_destPoly)}else{for(var vt=0,q=1;q<P-1;++q)vt=this.OffsetPoint(q,vt,h.m_jointype);var Mt;if(h.m_endtype===n.EndType.etOpenButt){var q=P-1;Mt=new n.IntPoint2(n.ClipperOffset.Round(this.m_srcPoly[q].X+this.m_normals[q].X*r),n.ClipperOffset.Round(this.m_srcPoly[q].Y+this.m_normals[q].Y*r)),this.m_destPoly.push(Mt),Mt=new n.IntPoint2(n.ClipperOffset.Round(this.m_srcPoly[q].X-this.m_normals[q].X*r),n.ClipperOffset.Round(this.m_srcPoly[q].Y-this.m_normals[q].Y*r)),this.m_destPoly.push(Mt)}else{var q=P-1;vt=P-2,this.m_sinA=0,this.m_normals[q]=new n.DoublePoint2(-this.m_normals[q].X,-this.m_normals[q].Y),h.m_endtype===n.EndType.etOpenSquare?this.DoSquare(q,vt):this.DoRound(q,vt)}for(var q=P-1;q>0;q--)this.m_normals[q]=new n.DoublePoint2(-this.m_normals[q-1].X,-this.m_normals[q-1].Y);this.m_normals[0]=new n.DoublePoint2(-this.m_normals[1].X,-this.m_normals[1].Y),vt=P-1;for(var q=vt-1;q>0;--q)vt=this.OffsetPoint(q,vt,h.m_jointype);h.m_endtype===n.EndType.etOpenButt?(Mt=new n.IntPoint2(n.ClipperOffset.Round(this.m_srcPoly[0].X-this.m_normals[0].X*r),n.ClipperOffset.Round(this.m_srcPoly[0].Y-this.m_normals[0].Y*r)),this.m_destPoly.push(Mt),Mt=new n.IntPoint2(n.ClipperOffset.Round(this.m_srcPoly[0].X+this.m_normals[0].X*r),n.ClipperOffset.Round(this.m_srcPoly[0].Y+this.m_normals[0].Y*r)),this.m_destPoly.push(Mt)):(vt=1,this.m_sinA=0,h.m_endtype===n.EndType.etOpenSquare?this.DoSquare(0,1):this.DoRound(0,1)),this.m_destPolys.push(this.m_destPoly)}}}},n.ClipperOffset.prototype.Execute=function(){var r=arguments,l=r[0]instanceof n.PolyTree;if(l){var h=r[0],p=r[1];h.Clear(),this.FixOrientations(),this.DoOffset(p);var M=new n.Clipper(0);if(M.AddPaths(this.m_destPolys,n.PolyType.ptSubject,!0),p>0)M.Execute(n.ClipType.ctUnion,h,n.PolyFillType.pftPositive,n.PolyFillType.pftPositive);else{var P=n.Clipper.GetBounds(this.m_destPolys),D=new n.Path;if(D.push(new n.IntPoint2(P.left-10,P.bottom+10)),D.push(new n.IntPoint2(P.right+10,P.bottom+10)),D.push(new n.IntPoint2(P.right+10,P.top-10)),D.push(new n.IntPoint2(P.left-10,P.top-10)),M.AddPath(D,n.PolyType.ptSubject,!0),M.ReverseSolution=!0,M.Execute(n.ClipType.ctUnion,h,n.PolyFillType.pftNegative,n.PolyFillType.pftNegative),h.ChildCount()===1&&h.Childs()[0].ChildCount()>0){var W=h.Childs()[0];h.Childs()[0]=W.Childs()[0],h.Childs()[0].m_Parent=h;for(var q=1;q<W.ChildCount();q++)h.AddChild(W.Childs()[q])}else h.Clear()}}else{var h=r[0],p=r[1];n.Clear(h),this.FixOrientations(),this.DoOffset(p);var M=new n.Clipper(0);if(M.AddPaths(this.m_destPolys,n.PolyType.ptSubject,!0),p>0)M.Execute(n.ClipType.ctUnion,h,n.PolyFillType.pftPositive,n.PolyFillType.pftPositive);else{var P=n.Clipper.GetBounds(this.m_destPolys),D=new n.Path;D.push(new n.IntPoint2(P.left-10,P.bottom+10)),D.push(new n.IntPoint2(P.right+10,P.bottom+10)),D.push(new n.IntPoint2(P.right+10,P.top-10)),D.push(new n.IntPoint2(P.left-10,P.top-10)),M.AddPath(D,n.PolyType.ptSubject,!0),M.ReverseSolution=!0,M.Execute(n.ClipType.ctUnion,h,n.PolyFillType.pftNegative,n.PolyFillType.pftNegative),h.length>0&&h.splice(0,1)}}},n.ClipperOffset.prototype.OffsetPoint=function(r,l,h){if(this.m_sinA=this.m_normals[l].X*this.m_normals[r].Y-this.m_normals[r].X*this.m_normals[l].Y,Math.abs(this.m_sinA*this.m_delta)<1){var p=this.m_normals[l].X*this.m_normals[r].X+this.m_normals[r].Y*this.m_normals[l].Y;if(p>0)return this.m_destPoly.push(new n.IntPoint2(n.ClipperOffset.Round(this.m_srcPoly[r].X+this.m_normals[l].X*this.m_delta),n.ClipperOffset.Round(this.m_srcPoly[r].Y+this.m_normals[l].Y*this.m_delta))),l}else this.m_sinA>1?this.m_sinA=1:this.m_sinA<-1&&(this.m_sinA=-1);if(this.m_sinA*this.m_delta<0)this.m_destPoly.push(new n.IntPoint2(n.ClipperOffset.Round(this.m_srcPoly[r].X+this.m_normals[l].X*this.m_delta),n.ClipperOffset.Round(this.m_srcPoly[r].Y+this.m_normals[l].Y*this.m_delta))),this.m_destPoly.push(new n.IntPoint1(this.m_srcPoly[r])),this.m_destPoly.push(new n.IntPoint2(n.ClipperOffset.Round(this.m_srcPoly[r].X+this.m_normals[r].X*this.m_delta),n.ClipperOffset.Round(this.m_srcPoly[r].Y+this.m_normals[r].Y*this.m_delta)));else switch(h){case n.JoinType.jtMiter:{var M=1+(this.m_normals[r].X*this.m_normals[l].X+this.m_normals[r].Y*this.m_normals[l].Y);M>=this.m_miterLim?this.DoMiter(r,l,M):this.DoSquare(r,l);break}case n.JoinType.jtSquare:this.DoSquare(r,l);break;case n.JoinType.jtRound:this.DoRound(r,l);break}return l=r,l},n.ClipperOffset.prototype.DoSquare=function(r,l){var h=Math.tan(Math.atan2(this.m_sinA,this.m_normals[l].X*this.m_normals[r].X+this.m_normals[l].Y*this.m_normals[r].Y)/4);this.m_destPoly.push(new n.IntPoint2(n.ClipperOffset.Round(this.m_srcPoly[r].X+this.m_delta*(this.m_normals[l].X-this.m_normals[l].Y*h)),n.ClipperOffset.Round(this.m_srcPoly[r].Y+this.m_delta*(this.m_normals[l].Y+this.m_normals[l].X*h)))),this.m_destPoly.push(new n.IntPoint2(n.ClipperOffset.Round(this.m_srcPoly[r].X+this.m_delta*(this.m_normals[r].X+this.m_normals[r].Y*h)),n.ClipperOffset.Round(this.m_srcPoly[r].Y+this.m_delta*(this.m_normals[r].Y-this.m_normals[r].X*h))))},n.ClipperOffset.prototype.DoMiter=function(r,l,h){var p=this.m_delta/h;this.m_destPoly.push(new n.IntPoint2(n.ClipperOffset.Round(this.m_srcPoly[r].X+(this.m_normals[l].X+this.m_normals[r].X)*p),n.ClipperOffset.Round(this.m_srcPoly[r].Y+(this.m_normals[l].Y+this.m_normals[r].Y)*p)))},n.ClipperOffset.prototype.DoRound=function(r,l){for(var h=Math.atan2(this.m_sinA,this.m_normals[l].X*this.m_normals[r].X+this.m_normals[l].Y*this.m_normals[r].Y),p=Math.max(n.Cast_Int32(n.ClipperOffset.Round(this.m_StepsPerRad*Math.abs(h))),1),M=this.m_normals[l].X,P=this.m_normals[l].Y,D,W=0;W<p;++W)this.m_destPoly.push(new n.IntPoint2(n.ClipperOffset.Round(this.m_srcPoly[r].X+M*this.m_delta),n.ClipperOffset.Round(this.m_srcPoly[r].Y+P*this.m_delta))),D=M,M=M*this.m_cos-this.m_sin*P,P=D*this.m_sin+P*this.m_cos;this.m_destPoly.push(new n.IntPoint2(n.ClipperOffset.Round(this.m_srcPoly[r].X+this.m_normals[r].X*this.m_delta),n.ClipperOffset.Round(this.m_srcPoly[r].Y+this.m_normals[r].Y*this.m_delta)))},n.Error=function(r){try{throw new Error(r)}catch(l){alert(l.message)}},n.JS={},n.JS.AreaOfPolygon=function(r,l){return l||(l=1),n.Clipper.Area(r)/(l*l)},n.JS.AreaOfPolygons=function(r,l){l||(l=1);for(var h=0,p=0;p<r.length;p++)h+=n.Clipper.Area(r[p]);return h/(l*l)},n.JS.BoundsOfPath=function(r,l){return n.JS.BoundsOfPaths([r],l)},n.JS.BoundsOfPaths=function(r,l){l||(l=1);var h=n.Clipper.GetBounds(r);return h.left/=l,h.bottom/=l,h.right/=l,h.top/=l,h},n.JS.Clean=function(p,l){if(!(p instanceof Array))return[];var h=p[0]instanceof Array,p=n.JS.Clone(p);if(typeof l!="number"||l===null)return n.Error("Delta is not a number in Clean()."),p;if(p.length===0||p.length===1&&p[0].length===0||l<0)return p;h||(p=[p]);for(var M=p.length,P,D,W,q,et,vt,xt,Mt=[],jt=0;jt<M;jt++)if(D=p[jt],P=D.length,P!==0){if(P<3){W=D,Mt.push(W);continue}for(W=D,q=l*l,et=D[0],vt=1,xt=1;xt<P;xt++)(D[xt].X-et.X)*(D[xt].X-et.X)+(D[xt].Y-et.Y)*(D[xt].Y-et.Y)<=q||(W[vt]=D[xt],et=D[xt],vt++);et=D[vt-1],(D[0].X-et.X)*(D[0].X-et.X)+(D[0].Y-et.Y)*(D[0].Y-et.Y)<=q&&vt--,vt<P&&W.splice(vt,P-vt),W.length&&Mt.push(W)}return!h&&Mt.length?Mt=Mt[0]:!h&&Mt.length===0?Mt=[]:h&&Mt.length===0&&(Mt=[[]]),Mt},n.JS.Clone=function(r){if(!(r instanceof Array))return[];if(r.length===0)return[];if(r.length===1&&r[0].length===0)return[[]];var l=r[0]instanceof Array;l||(r=[r]);var h=r.length,p,M,P,D,W=new Array(h);for(M=0;M<h;M++){for(p=r[M].length,D=new Array(p),P=0;P<p;P++)D[P]={X:r[M][P].X,Y:r[M][P].Y};W[M]=D}return l||(W=W[0]),W},n.JS.Lighten=function(r,l){if(!(r instanceof Array))return[];if(typeof l!="number"||l===null)return n.Error("Tolerance is not a number in Lighten()."),n.JS.Clone(r);if(r.length===0||r.length===1&&r[0].length===0||l<0)return n.JS.Clone(r);var h=r[0]instanceof Array;h||(r=[r]);var p,M,P,D,W,q,et,vt,xt,Mt,jt,ce,ye,ze,An,ri,Cs,ym=r.length,_m=l*l,Is=[];for(p=0;p<ym;p++)if(P=r[p],q=P.length,q!==0){for(D=0;D<1e6;D++){for(W=[],q=P.length,P[q-1].X!==P[0].X||P[q-1].Y!==P[0].Y?(ce=1,P.push({X:P[0].X,Y:P[0].Y}),q=P.length):ce=0,jt=[],M=0;M<q-2;M++)et=P[M],xt=P[M+1],vt=P[M+2],ri=et.X,Cs=et.Y,ye=vt.X-ri,ze=vt.Y-Cs,(ye!==0||ze!==0)&&(An=((xt.X-ri)*ye+(xt.Y-Cs)*ze)/(ye*ye+ze*ze),An>1?(ri=vt.X,Cs=vt.Y):An>0&&(ri+=ye*An,Cs+=ze*An)),ye=xt.X-ri,ze=xt.Y-Cs,Mt=ye*ye+ze*ze,Mt<=_m&&(jt[M+1]=1,M++);for(W.push({X:P[0].X,Y:P[0].Y}),M=1;M<q-1;M++)jt[M]||W.push({X:P[M].X,Y:P[M].Y});if(W.push({X:P[q-1].X,Y:P[q-1].Y}),ce&&P.pop(),jt.length)P=W;else break}q=W.length,W[q-1].X===W[0].X&&W[q-1].Y===W[0].Y&&W.pop(),W.length>2&&Is.push(W)}return h||(Is=Is[0]),typeof Is>"u"&&(Is=[]),Is},n.JS.PerimeterOfPath=function(r,l,h){if(typeof r>"u")return 0;var p=Math.sqrt,M=0,P,D,W=0,q=0,et=0,vt=0,xt=r.length;if(xt<2)return 0;for(l&&(r[xt]=r[0],xt++);--xt;)P=r[xt],W=P.X,q=P.Y,D=r[xt-1],et=D.X,vt=D.Y,M+=p((W-et)*(W-et)+(q-vt)*(q-vt));return l&&r.pop(),M/h},n.JS.PerimeterOfPaths=function(r,l,h){h||(h=1);for(var p=0,M=0;M<r.length;M++)p+=n.JS.PerimeterOfPath(r[M],l,h);return p},n.JS.ScaleDownPath=function(r,l){var h,p;for(l||(l=1),h=r.length;h--;)p=r[h],p.X=p.X/l,p.Y=p.Y/l},n.JS.ScaleDownPaths=function(r,l){var h,p,M;for(l||(l=1),h=r.length;h--;)for(p=r[h].length;p--;)M=r[h][p],M.X=M.X/l,M.Y=M.Y/l},n.JS.ScaleUpPath=function(r,l){var h,p,M=Math.round;for(l||(l=1),h=r.length;h--;)p=r[h],p.X=M(p.X*l),p.Y=M(p.Y*l)},n.JS.ScaleUpPaths=function(r,l){var h,p,M,P=Math.round;for(l||(l=1),h=r.length;h--;)for(p=r[h].length;p--;)M=r[h][p],M.X=P(M.X*l),M.Y=P(M.Y*l)},n.ExPolygons=function(){return[]},n.ExPolygon=function(){this.outer=null,this.holes=null},n.JS.AddOuterPolyNodeToExPolygons=function(r,l){var h=new n.ExPolygon;h.outer=r.Contour();var p=r.Childs(),M=p.length;h.holes=new Array(M);var P,D,W,q,et,vt;for(W=0;W<M;W++)for(P=p[W],h.holes[W]=P.Contour(),q=0,et=P.Childs(),vt=et.length;q<vt;q++)D=et[q],n.JS.AddOuterPolyNodeToExPolygons(D,l);l.push(h)},n.JS.ExPolygonsToPaths=function(r){var l,h,p,M,P=new n.Paths;for(l=0,p=r.length;l<p;l++)for(P.push(r[l].outer),h=0,M=r[l].holes.length;h<M;h++)P.push(r[l].holes[h]);return P},n.JS.PolyTreeToExPolygons=function(r){var l=new n.ExPolygons,h,p,M,P;for(p=0,M=r.Childs(),P=M.length;p<P;p++)h=M[p],n.JS.AddOuterPolyNodeToExPolygons(h,l);return l}})()});function zc(n,t,e,i=sn.default.PolyFillType.pftNonZero){let s=new sn.default.Clipper;s.AddPaths(ia(t),sn.default.PolyType.ptSubject,!0),e&&s.AddPaths(ia(e),sn.default.PolyType.ptClip,!0);let o=new sn.default.Paths;return s.Execute(n,o,i,i),kc(o)}function Be(n,t,e=Gm/Li){return n.length?(t<-2*Bc&&(n=_f(n,-Bc,e),t+=Bc),_f(n,t,e)):[]}function _f(n,t,e){if(!n.length)return[];let i=new sn.default.ClipperOffset(2,e*Li);i.AddPaths(ia(n),sn.default.JoinType.jtRound,sn.default.EndType.etClosedPolygon);let s=new sn.default.Paths;return i.Execute(s,t*Li),kc(s)}function gn(n){let t=0;for(let e=0,i=n.length-1;e<n.length;i=e++)t+=(n[i][0]+n[e][0])*(n[i][1]-n[e][1]);return-t/2}function qr(n){let t=1/0,e=1/0,i=-1/0,s=-1/0;for(let o of n)for(let[c,a]of o)c<t&&(t=c),c>i&&(i=c),a<e&&(e=a),a>s&&(s=a);return{minX:t,minY:e,maxX:i,maxY:s}}function Ni(n){if(!n.length)return[];let t=new sn.default.Clipper;t.AddPaths(ia(n),sn.default.PolyType.ptSubject,!0);let e=new sn.default.PolyTree;t.Execute(sn.default.ClipType.ctUnion,e,sn.default.PolyFillType.pftNonZero,sn.default.PolyFillType.pftNonZero);let i=[],s=o=>{for(let c of o.Childs()){if(c.IsHole()){s(c);continue}let a=c.Childs().map(u=>u.Contour());i.push(kc([c.Contour(),...a]));for(let u of c.Childs())s(u)}};return s(e),i}function yi([n,t],e){let i=!1;for(let s=0,o=e.length-1;s<e.length;o=s++){let[c,a]=e[s],[u,f]=e[o];a>t!=f>t&&n<(u-c)*(t-a)/(f-a)+c&&(i=!i)}return i}function ra(n,t){if(!yi(n,t[0]))return!1;for(let e=1;e<t.length;e++)if(yi(n,t[e]))return!1;return!0}function Pn(n,t=1e-4){return n.filter(e=>e.length>=3&&Math.abs(gn(e))>t)}function Xm(n,t=.005){if(n.length<8)return n;let e=0,i=-1;for(let a=1;a<n.length;a++){let u=(n[a][0]-n[0][0])**2+(n[a][1]-n[0][1])**2;u>i&&(i=u,e=a)}let s=a=>{let u=new Uint8Array(a.length);u[0]=u[a.length-1]=1;let f=[[0,a.length-1]];for(;f.length;){let[d,g]=f.pop(),[m,y]=a[d],[v,b]=a[g],x=Math.hypot(v-m,b-y)||1e-12,_=-1,E=t;for(let A=d+1;A<g;A++){let S=Math.abs((v-m)*(y-a[A][1])-(m-a[A][0])*(b-y))/x;S>E&&(E=S,_=A)}_>0&&(u[_]=1,f.push([d,_],[_,g]))}return a.filter((d,g)=>u[g])},o=s(n.slice(0,e+1)),c=s([...n.slice(e),n[0]]);return[...o,...c.slice(1,-1)]}var sn,Li,Gm,ia,kc,zn,_i,sa,Bc,$r,ls,Zr=fe(()=>{sn=Ou(yf(),1),Li=1e3,Gm=.01*Li,ia=n=>n.map(t=>t.map(([e,i])=>({X:Math.round(e*Li),Y:Math.round(i*Li)}))),kc=n=>n.map(t=>t.map(e=>[e.X/Li,e.Y/Li]));zn=n=>zc(sn.default.ClipType.ctUnion,n,null),_i=(n,t)=>zc(sn.default.ClipType.ctDifference,n,t),sa=(n,t)=>zc(sn.default.ClipType.ctIntersection,n,t);Bc=.005;$r=n=>n.reduce((t,e)=>t+gn(e),0);ls=(n,t)=>n.map(e=>Xm(e,t)).filter(e=>e.length>=3)});function aa(n){let t=String(n.type||"").toLowerCase().replace(/[-_]/g," ");return/keyhole|round ?over|\bcove\b|bowl|ogee|dovetail/i.test(n.name||"")?"profile":Wm.has(t)||t.startsWith("flat")?"flat":t.startsWith("surfac")?"surfacing":t.startsWith("drill")?"drill":t.startsWith("ball")?"ball":t.startsWith("v")?"vbit":t.startsWith("chamfer")?"chamfer":t.startsWith("thread")?"threadmill":t||"flat"}function hs(n,t){return(typeof t=="string"?t:t?.mode)==="toolId"?n.toolId??n.id:n.toolNumber?n.toolNumber:t?.manual?.get(n.id)??n.toolId??n.id}function vf(n,t,e=0,i=null){if(n==="toolId")return{mode:n};let s=new Set(t.filter(u=>u.toolNumber).map(u=>u.toolNumber));for(let u=1;u<=e;u++)s.add(u);i&&s.add(i);let o=new Map,c=t.filter(u=>!u.toolNumber);for(let u of c){let f=u.toolId??u.id;f>e&&!s.has(f)&&(o.set(u.id,f),s.add(f))}let a=e+1;for(let u of c)if(!o.has(u.id)){for(;s.has(a);)a++;o.set(u.id,a),s.add(a)}return{mode:n,manual:o}}function bf(n){return(n||[]).filter(t=>t&&t.diameter>0).map(t=>({id:t.id,toolId:t.toolId??t.id,toolNumber:t.toolNumber??null,name:t.name||`${t.diameter} mm ${aa(t)}`,kind:aa(t),diameter:Number(t.diameter),fluteLength:Number(t.dimensions?.flute_length)||null,flutes:Number(t.metadata?.flutes)||2,.../^(vbit|chamfer)$/.test(aa(t))?{angle:$m(t)}:{},...aa(t)==="threadmill"?Ym(t):{}}))}function Ym(n){let t=n.metadata||{},i=[t.sku,n.name,t.notes].filter(Boolean).join(" ").match(/D\s*(\d+(?:\.\d+)?)\s*[×xX*]\s*P(?:itch)?\s*(\d+(?:\.\d+)?)\s*-\s*(\d+(?:\.\d+)?)/),s=Number(t.cut_diameter)||Number(i?i[1]:n.diameter),o=Number(t.reach)||Number(n.dimensions?.neck_length)||0;return{cut:s,pitchMin:Number(t.pitch_min)||(i?Number(i[2]):0),pitchMax:Number(t.pitch_max)||(i?Number(i[3]):1/0),reach:o||3*s,reachAssumed:!o,neck:Number(t.neck_diameter)||.7*s}}function $m(n){let t=Number(n.dimensions?.taper_angle);if(t>0&&t<90)return t*2;let e=String(n.name||"").match(/(\d{2,3}(?:\.\d+)?)\s*(?:°|º|deg\b|degrees?\b)/i),i=e?Number(e[1]):0;return i>0&&i<180?i:90}function Mf(n,t,e,i={}){let s=cs[t]||cs.mdf,o=Vn[e]||Vn.balanced,c=i.maxRpm||24e3,a=i.minRpm||0,u=Math.round(Math.min(c,Math.max(a,s.rpm))),f=Math.min(s.maxChip,s.chip*n.diameter),d=Math.min(i.maxFeed||4e3,4e3),g=Math.round(Math.min(d,Math.max(150,u*n.flutes*f*o.feed)));return{rpm:u,feed:g,plunge:Math.round(Math.max(60,g*.3)),stepdown:Math.max(.05,n.diameter*s.stepdown*o.stepdown),stepover:Math.max(.05,n.diameter*Math.min(.9,s.stepover*o.stepover)),rampAngle:s.ramp}}var cs,Vn,Wm,Di,Jr=fe(()=>{cs={softwood:{name:"Softwood",note:"Pine, cedar",rpm:18e3,chip:.012,maxChip:.25,stepdown:.5,stepover:.45,ramp:5},hardwood:{name:"Hardwood",note:"Oak, maple, walnut",rpm:18e3,chip:.009,maxChip:.2,stepdown:.35,stepover:.4,ramp:4},mdf:{name:"MDF / Plywood",note:"Sheet goods",rpm:18e3,chip:.012,maxChip:.25,stepdown:.5,stepover:.45,ramp:5},plastic:{name:"Plastic",note:"Acrylic, HDPE",rpm:16e3,chip:.01,maxChip:.2,stepdown:.3,stepover:.4,ramp:3},aluminum:{name:"Aluminum",note:"6061",rpm:18e3,chip:.003,maxChip:.05,stepdown:.1,stepover:.25,ramp:2},foam:{name:"Foam",note:"Tooling board",rpm:12e3,chip:.02,maxChip:.4,stepdown:1,stepover:.6,ramp:10}},Vn={fast:{name:"Fast",feed:1.15,stepdown:1.2,stepover:1.1,allowance:0},balanced:{name:"Balanced",feed:1,stepdown:1,stepover:1,allowance:.2},smooth:{name:"Smooth",feed:.85,stepdown:.8,stepover:.7,allowance:.25}},Wm=new Set(["flat","flat end mill","endmill","end mill","flat_end_mill"]);Di=n=>n==="aluminum"?{height:1,length:1}:{height:2,length:2}});var us={};Du(us,{INCH:()=>qm,len:()=>Vc,num:()=>Sf,toMm:()=>Jm,unitsFrom:()=>Zm});function Sf(n,t="mm",e=t==="in"?3:1){let i=t==="in"?n/25.4:n;return(Math.round(i*10**e)/10**e).toLocaleString("en-US",{maximumFractionDigits:e})}var qm,Zm,Vc,Jm,Hc=fe(()=>{qm=25.4,Zm=n=>n==="imperial"?"in":"mm";Vc=(n,t="mm",e)=>`${Sf(n,t,e)} ${t}`,Jm=(n,t="mm")=>t==="in"?n*25.4:n});function ua(n){let t=n.flatMap(v=>v.pts);if(!t.length)return{shapes:[],size:[0,0],nest:[]};let e=Math.min(...t.map(v=>v[0])),i=Math.min(...t.map(v=>v[1])),s=Math.max(...t.map(v=>v[0])),o=Math.max(...t.map(v=>v[1])),c=n.map(v=>({...v,pts:v.pts.map(([b,x])=>[b-e,x-i])})),a=c.map(v=>v.closed&&v.pts.length>2&&Math.abs(gn(Ef(v.pts)))>ca?jm(Ef(v.pts)):null),u=a.map(v=>v?gn(v):0),f=c.map((v,b)=>{let x=v.pts[0],_=-1,E=0;return a.forEach((A,S)=>{!A||S===b||u[S]<=u[b]||!yi(x,A)||(E++,(_<0||u[S]<u[_])&&(_=S))}),{parent:_,depth:E}}),d=a.map(v=>v?Km(v):null),g=v=>c[v].layer??c[v].color,m=(v,b)=>d[v]&&d[b]&&g(v)===g(b)&&Math.hypot(d[v].x-d[b].x,d[v].y-d[b].y)<.05;f.forEach((v,b)=>{if(v.step=null,!d[b])return;let x=0,_=b;for(let A=v.parent;A>=0&&m(b,A);A=f[A].parent)x++,_=A;let E=f.some((A,S)=>A.parent===b&&m(b,S));(x||E)&&f[_].depth>0&&(v.step=x,v.last=!E,v.top=_)});let y=new Map;return f.forEach(v=>{v.top!==void 0&&v.step!==null&&y.set(v.top,(y.get(v.top)||0)+1)}),f.forEach(v=>{v.top!==void 0&&v.step!==null&&(v.of=y.get(v.top))}),{shapes:c,loops:a,areas:u,nest:f,circles:d,size:[s-e,o-i]}}function Km(n){if(n.length<12)return null;let t=n.reduce((o,c)=>o+c[0],0)/n.length,e=n.reduce((o,c)=>o+c[1],0)/n.length,i=n.map(o=>Math.hypot(o[0]-t,o[1]-e)),s=i.reduce((o,c)=>o+c,0)/i.length;return s>0&&i.every(o=>Math.abs(o-s)<=Math.max(.01*s,.02))&&Math.abs(Math.abs(gn(n))-Math.PI*s*s)<=.03*Math.PI*s*s?{x:t,y:e,r:s}:null}function Pf(n,t){if(!n.loops[t])return"online";let e=n.nest[t];return e.step!==null&&e.step!==void 0?e.last?"inside":"pocket":e.depth%2?"inside":"outside"}function Cf(n,t=6){return{material:"mdf",finish:"balanced",stock:{fit:!0,margin:5,width:n.size[0]+10,depth:n.size[1]+10,thickness:t},zero:{xy:"front-left",z:"top"},tabs:{enabled:!0,count:4,...Di("mdf")},throughDepth:.3,groups:{},layers:{},shapes:{},depths:{pocket:3,online:1},disabled:{},toolOverride:{}}}function Gc(n){let t=new Map,e=o=>Math.round(o*100)/100,i=new Set(n.shapes.map(o=>o.layer??o.color)).size>1;n.shapes.forEach((o,c)=>{let a=Pf(n,c),u=n.nest[c],f=n.circles[c],d=i?`${o.layer??o.color}:`:"",g,m,y;if(!n.loops[c])g=`line:${d}`,m="line",y="line";else if(a==="outside"&&u.depth===0)g=`outline:${d}`,m="outline",y="outline";else if(f&&u.step!==null&&u.step!==void 0){let v=c;for(;n.nest[v].step>0;)v=n.nest[v].parent;let b=[];for(let x=v;x>=0;)b.push(e(2*n.circles[x].r)),x=n.nest.findIndex((E,A)=>E.parent===x&&n.nest[A].step===n.nest[x].step+1);g=`cb:${d}${b.join("/")}:${u.step}`,m="counterbore",y={d:2*f.r,sizes:b,step:u.step,last:u.last}}else if(f)g=`circle:${d}${e(2*f.r)}:${a}`,m="circle",y={d:2*f.r};else{let v=qr([n.loops[c]]),b=v.maxX-v.minX,x=v.maxY-v.minY,_=Math.abs(n.areas[c]-b*x)<.01*b*x;g=`shape:${d}${e(b)}x${e(x)}:${Math.round(n.areas[c])}:${a}`,m=_?"rect":"shape",y={w:b,h:x}}t.has(g)||t.set(g,{key:g,kind:m,label:y,layer:i?o.layer??o.color:null,idx:[],cut:a}),t.get(g).idx.push(c)});let s={outline:0,counterbore:1,circle:2,rect:3,shape:4,line:5};return[...t.values()].sort((o,c)=>s[o.kind]-s[c.kind]||(c.label?.d||0)-(o.label?.d||0)||o.key.localeCompare(c.key))}function Ns(n){let t=new Map;for(let e of n)for(let i of e.idx)t.set(i,e.key);return t}function Oi(n,t,e,i=null){let s=n.shapes[e],o=t.shapes?.[e]||i&&t.groups?.[i.get(e)],c=t.layers?.[s.layer??s.color],a=o?.cut||c?.cut||Pf(n,e),u=n.nest[e],f=a==="pocket"&&u.step!==null&&u.step!==void 0,d=t.stock?.thickness,g=()=>{let y=t.depths.pocket*(u.step+1);return d>0?Math.min(y,d*(u.step+1)/(u.of||2)):y},m=o?.depth!==void 0?o.depth:c?.depth!==void 0?c.depth:f?g():a==="pocket"||a==="online"?t.depths[a]:null;return{cut:a==="online"||a==="off"||n.loops[e]?a:"online",depth:m}}function fa(n,t){let[e,i]=n.size,s=t.stock,o=s.fit?e+2*s.margin:Math.max(e,s.width),c=s.fit?i+2*s.margin:Math.max(i,s.depth),a=s.thickness;return{minX:(e-o)/2,minY:(i-c)/2,maxX:(e+o)/2,maxY:(i+c)/2,bottom:0,top:a,width:o,depth:c,thickness:a}}function Xc(n,t){let e=t.xy.split("-"),i=(n.minX+n.maxX)/2,s=(n.minY+n.maxY)/2;return e.includes("left")&&(i=n.minX),e.includes("right")&&(i=n.maxX),e.includes("front")&&(s=n.minY),e.includes("back")&&(s=n.maxY),{x:i,y:s,z:t.z==="bed"?n.bottom:n.top}}function If(n,t,e,i={}){let s=k=>Vc(k,e.units),o=fa(n,e),c=o.top,a=[],u=[],f=t.filter(k=>k.kind==="flat").sort((k,j)=>j.diameter-k.diameter),d=e.material==="aluminum"?8:12.8,g=new Set,m=k=>(g.add(k.id),k),y=k=>k==null||k>=c-1e-6?-e.throughDepth:Math.max(c-k,0),v=k=>c-k,b=k=>k==null||k>=c-1e-6?"through":`${s(k)} deep`,x=new Map,_=Ns(Gc(n));n.shapes.forEach((k,j)=>{let Z=Oi(n,e,j,_);if(Z.cut==="off")return;let st=y(Z.depth);if(st>=c-1e-6)return;let ot=`${Z.cut}@${st}`;x.has(ot)||x.set(ot,{cut:Z.cut,z:st,depth:Z.depth,idx:[]}),x.get(ot).idx.push(j)});let E=[...x.values()],A=n.shapes.map((k,j)=>Oi(n,e,j,_).cut),S=k=>{for(let j=n.nest[k].parent;j>=0;j=n.nest[j].parent)if(A[j]==="pocket")return!0;return!1},R=k=>E.filter(j=>j.cut===k).sort((j,Z)=>Z.z-j.z),T=(k,j)=>$r(Be(Be(k,-j),j))/Math.max($r(k),ca);for(let k of R("pocket")){let j=n.loops.map((wt,Yt)=>wt&&A[Yt]==="outside"&&k.idx.some(Kt=>Tf(n,Yt,Kt))?wt:null).filter(Boolean),Z=Pn(_i(wf(k.idx.map(wt=>n.loops[wt])),zn(j)),ca);if(!Z.length)continue;let st=f.filter(wt=>wt.diameter<=d&&la(wt,v(k.z))&&Be(Z,-wt.diameter/2).length);if(!st.length){a.push({kind:"notool",text:`No end mill fits the pockets ${b(k.depth)}.`});continue}let ot=st.map(wt=>({t:wt,c:T(Z,wt.diameter/2)})),St=ot.find(wt=>wt.c>=.95)||ot.reduce((wt,Yt)=>Yt.c>wt.c?Yt:wt);St.c<.995&&a.push({kind:"corners",text:`${St.t.name} leaves the pockets' tightest corners rounded.`}),u.push({id:`pocket@${k.z}`,kind:"pocket",label:k.idx.length>1?`Clear ${k.idx.length} pockets`:"Clear the pocket",tool:m(St.t),zTop:c,zBottom:k.z,region:Z,detail:b(k.depth)})}let C=k=>k.slice().sort((j,Z)=>Math.abs(j.diameter-6.35)-Math.abs(Z.diameter-6.35))[0]||null,w=(k,j)=>{let Z=f.filter(st=>st.diameter<=d&&la(st,k)&&j(st));return Z.find(st=>g.has(st.id))||C(Z)},L=k=>A[k]==="outside"&&n.loops[k]&&!S(k),F=k=>n.nest[k].depth>0,B=(Vn[e.finish]||Vn.balanced).allowance,H=(k,j)=>Be([j],-(k.diameter/2+B+.1)).length>0;function G(k,j,Z){let st=f.filter(Yt=>Yt.diameter<=d&&la(Yt,v(k.z))),ot=C(st),St=new Map,wt=0;for(let Yt of j){let Kt=n.loops[Yt],se=st.filter(pt=>H(pt,Kt)),ct=se.find(pt=>g.has(pt.id))||C(se);if(!ct){wt++;continue}St.has(ct)||St.set(ct,[]),St.get(ct).push(Kt)}wt&&a.push({kind:"notool",text:`No end mill fits inside ${wt>1?`${wt} shapes`:"a shape"} cut ${b(k.depth)} with room to move: left uncut.`});for(let Yt=!0;Yt&&St.size>1;){Yt=!1;for(let[Kt,se]of[...St].filter(([ct])=>!g.has(ct.id)&&ct!==ot).sort((ct,pt)=>ct[1].length-pt[1].length)){let ct=[...St.keys()].filter(pt=>pt!==Kt).sort((pt,kt)=>kt.diameter-pt.diameter);if(se.every(pt=>ct.some(kt=>H(kt,pt)))){for(let pt of se)St.get(ct.find(kt=>H(kt,pt))).push(pt);St.delete(Kt),Yt=!0;break}}}for(let[Yt,Kt]of[...St].sort((se,ct)=>ct[0].diameter-se[0].diameter))u.push({id:`inside@${k.z}#${Yt.id}${Z?":tabs":""}`,kind:"inside",label:`${Z?"Cut round the windows":Kt.length>1?`Cut ${Kt.length} shapes inside`:"Cut inside the shape"}`,tool:m(Yt),zTop:c,zBottom:k.z,loops:Kt,region:Kt,tabs:Z&&k.z<0&&e.tabs.enabled,detail:`${b(k.depth)}${Z&&k.z<0&&e.tabs.enabled?" \xB7 tabs hold the parts in them":""}`})}for(let k of R("inside")){let j=Z=>n.shapes.some((st,ot)=>L(ot)&&Tf(n,ot,Z));G(k,k.idx.filter(Z=>!j(Z)),!1),G(k,k.idx.filter(j),!0)}for(let k of R("outside"))for(let j of[!0,!1]){let Z=k.idx.filter(wt=>L(wt)&&F(wt)===j);if(!Z.length)continue;let st=wf(Z.map(wt=>n.loops[wt])),ot=w(v(k.z),()=>!0);if(!ot){a.push({kind:"notool",text:`No end mill is long enough to cut out ${b(k.depth)} (${s(v(k.z))}).`});continue}let St=k.z<0;u.push({id:`cutout${j?"-in":""}@${k.z}`,kind:"cutout",inner:j,label:j?"Cut out the parts in the windows":"Cut out the parts",tool:m(ot),zTop:c,zBottom:k.z,region:st,tabs:St,detail:`${b(k.depth)}${St?` \xB7 ${e.tabs.enabled?`${e.tabs.count} tabs each`:"no tabs"}`:""}`})}for(let k of R("online")){let j=f.filter(ot=>la(ot,v(k.z))),Z=j.filter(ot=>g.has(ot.id)).sort((ot,St)=>ot.diameter-St.diameter)[0]||j.sort((ot,St)=>ot.diameter-St.diameter)[0];if(!Z){a.push({kind:"notool",text:`No end mill reaches ${b(k.depth)} for the lines.`});continue}let st=k.idx.map(ot=>({pts:n.shapes[ot].pts,closed:!!n.loops[ot]}));u.push({id:`online@${k.z}`,kind:"online",label:"Cut on the lines",tool:m(Z),zTop:c,zBottom:k.z,lines:st,count:k.idx.length,detail:`${k.idx.length} line${k.idx.length>1?"s":""} \xB7 ${b(k.depth)} \xB7 a groove ${s(Z.diameter)} wide`})}let z=k=>k.kind==="online"?0:k.kind==="pocket"?1:k.kind==="cutout"&&k.inner?2:k.kind==="inside"?3:4;u.sort((k,j)=>z(k)-z(j)||j.zBottom-k.zBottom);for(let k of u){let j=e.toolOverride?.[k.id];if(j){let Z=t.find(st=>st.id===j);Z&&(k.tool=Z)}k.enabled=!e.disabled?.[k.id],k.feeds=Mf(k.tool,e.material,e.finish,i)}let $=e.tabs.enabled?e:{...e,tabs:{...e.tabs,enabled:!1}};return{analysis:{top:c,size:[n.size[0],n.size[1],c]},stock:o,zero:Xc(o,e.zero),ops:u,warnings:a,job:$}}function Tf(n,t,e){if(!n.loops[e]||n.areas[t]>=n.areas[e])return!1;for(let i=n.nest[t].parent;i>=0;i=n.nest[i].parent)if(i===e)return!0;return!1}function da(n){let t=[];for(let e of n.ops)e.enabled&&!t.some(i=>i.id===e.tool.id)&&t.push(e.tool);return t}var ha,ca,wf,Af,la,Ef,jm,Rf=fe(()=>{Zr();Jr();Hc();ha={outside:"Outer (part)",inside:"Inner (perimeter)",pocket:"Inner (clearing)",online:"On the line",off:"Off"},ca=.01,wf=n=>Pn(Be(Be(zn(n),.01),-.01),ca),Af=["back-left","back-center","back-right","left-center","center","right-center","front-left","front-center","front-right"],la=(n,t)=>!n.fluteLength||n.fluteLength+1e-6>=t,Ef=n=>n.length>2&&n[0][0]===n.at(-1)[0]&&n[0][1]===n.at(-1)[1]?n.slice(0,-1):n,jm=n=>gn(n)<0?n.slice().reverse():n});function Qm(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function t0(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function ho(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Wd(){let n=ho("canvas");return n.style.display="block",n}function uo(...n){let t="THREE."+n.shift();er?er("log",t,...n):console.log(t,...n)}function Yd(n){let t=n[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=n[1];e&&e.isStackTrace?n[0]+=" "+e.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function ee(...n){n=Yd(n);let t="THREE."+n.shift();if(er)er("warn",t,...n);else{let e=n[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...n)}}function ie(...n){n=Yd(n);let t="THREE."+n.shift();if(er)er("error",t,...n);else{let e=n[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...n)}}function gs(...n){let t=n.join(" ");t in Lf||(Lf[t]=!0,ee(...n))}function $d(n,t,e){return new Promise(function(i,s){function o(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(o,e);break;default:i()}}setTimeout(o,e)})}function Ei(){let n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(xn[n&255]+xn[n>>8&255]+xn[n>>16&255]+xn[n>>24&255]+"-"+xn[t&255]+xn[t>>8&255]+"-"+xn[t>>16&15|64]+xn[t>>24&255]+"-"+xn[e&63|128]+xn[e>>8&255]+"-"+xn[e>>16&255]+xn[e>>24&255]+xn[i&255]+xn[i>>8&255]+xn[i>>16&255]+xn[i>>24&255]).toLowerCase()}function _e(n,t,e){return Math.max(t,Math.min(e,n))}function jh(n,t){return(n%t+t)%t}function e0(n,t,e,i,s){return i+(n-t)*(s-i)/(e-t)}function n0(n,t,e){return n!==t?(e-n)/(t-n):0}function oo(n,t,e){return(1-e)*n+e*t}function i0(n,t,e,i){return oo(n,t,1-Math.exp(-e*i))}function s0(n,t=1){return t-Math.abs(jh(n,t*2)-t)}function r0(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*(3-2*n))}function o0(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*n*(n*(n*6-15)+10))}function a0(n,t){return n+Math.floor(Math.random()*(t-n+1))}function l0(n,t){return n+Math.random()*(t-n)}function c0(n){return n*(.5-Math.random())}function h0(n){n!==void 0&&(Nf=n);let t=Nf+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function u0(n){return n*js}function f0(n){return n*nr}function d0(n){return n>0&&Number.isInteger(n)&&2**Math.round(Math.log2(n))===n}function p0(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function m0(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function g0(n,t,e,i,s){let o=Math.cos,c=Math.sin,a=o(e/2),u=c(e/2),f=o((t+i)/2),d=c((t+i)/2),g=o((t-i)/2),m=c((t-i)/2),y=o((i-t)/2),v=c((i-t)/2);switch(s){case"XYX":n.set(a*d,u*g,u*m,a*f);break;case"YZY":n.set(u*m,a*d,u*g,a*f);break;case"ZXZ":n.set(u*g,u*m,a*d,a*f);break;case"XZX":n.set(a*d,u*v,u*y,a*f);break;case"YXY":n.set(u*y,a*d,u*v,a*f);break;case"ZYZ":n.set(u*v,u*y,a*d,a*f);break;default:ee("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Zn(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:case Uint8ClampedArray:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Oe(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function x0(){let n={enabled:!0,workingColorSpace:lo,spaces:{},convert:function(s,o,c){return this.enabled===!1||o===c||!o||!c||(this.spaces[o].transfer===Ne&&(s.r=Ti(s.r),s.g=Ti(s.g),s.b=Ti(s.b)),this.spaces[o].primaries!==this.spaces[c].primaries&&(s.applyMatrix3(this.spaces[o].toXYZ),s.applyMatrix3(this.spaces[c].fromXYZ)),this.spaces[c].transfer===Ne&&(s.r=Ks(s.r),s.g=Ks(s.g),s.b=Ks(s.b))),s},workingToColorSpace:function(s,o){return this.convert(s,this.workingColorSpace,o)},colorSpaceToWorking:function(s,o){return this.convert(s,o,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Pi?co:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,o=this.workingColorSpace){return s.fromArray(this.spaces[o].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,o,c){return s.copy(this.spaces[o].toXYZ).multiply(this.spaces[c].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,o){return gs("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(s,o)},toWorkingColorSpace:function(s,o){return gs("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(s,o)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[lo]:{primaries:t,whitePoint:i,transfer:co,toXYZ:Of,fromXYZ:Ff,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:wn},outputColorSpaceConfig:{drawingBufferColorSpace:wn}},[wn]:{primaries:t,whitePoint:i,transfer:Ne,toXYZ:Of,fromXYZ:Ff,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:wn}}}),n}function Ti(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Ks(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}function $c(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?nl.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(ee("Texture: Unable to serialize Texture."),{})}function Jc(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}function sh(n,t,e,i,s){for(let o=0,c=n.length-3;o<=c;o+=3){ds.fromArray(n,o);let a=s.x*Math.abs(ds.x)+s.y*Math.abs(ds.y)+s.z*Math.abs(ds.z),u=t.dot(ds),f=e.dot(ds),d=i.dot(ds);if(Math.max(-Math.max(u,f,d),Math.min(u,f,d))>a)return!1}return!0}function Sa(n,t,e,i,s,o){$s.subVectors(n,e).addScalar(.5).multiply(i),s!==void 0?(no.x=o*$s.x-s*$s.y,no.y=s*$s.x+o*$s.y):no.copy($s),n.copy(t),n.x+=no.x,n.y+=no.y,n.applyMatrix4(Jd)}function N0(n,t,e,i,s,o,c,a){let u;if(t.side===Tn?u=i.intersectTriangle(c,o,s,!0,a):u=i.intersectTriangle(s,o,c,t.side===ji,a),u===null)return null;Ra.copy(a),Ra.applyMatrix4(n.matrixWorld);let f=e.ray.origin.distanceTo(Ra);return f<e.near||f>e.far?null:{distance:f,point:Ra.clone(),object:n}}function La(n,t,e,i,s,o,c,a,u,f){n.getVertexPosition(a,Aa),n.getVertexPosition(u,Pa),n.getVertexPosition(f,Ca);let d=N0(n,t,e,i,Aa,Pa,Ca,Zf);if(d){let g=new K;li.getBarycoord(Zf,Aa,Pa,Ca,g),s&&(d.uv=li.getInterpolatedAttribute(s,a,u,f,g,new Jt)),o&&(d.uv1=li.getInterpolatedAttribute(o,a,u,f,g,new Jt)),c&&(d.normal=li.getInterpolatedAttribute(c,a,u,f,g,new K),d.normal.dot(i.direction)>0&&d.normal.multiplyScalar(-1));let m={a,b:u,c:f,normal:new K,materialIndex:0};li.getNormal(Aa,Pa,Ca,m.normal),d.face=m,d.barycoord=g}return d}function Oa(n,t,e,i,s,o,c){let a=n.geometry.attributes.position;if(al.fromBufferAttribute(a,s),ll.fromBufferAttribute(a,o),e.distanceSqToSegment(al,ll,uh,jf)>i)return;uh.applyMatrix4(n.matrixWorld);let f=t.ray.origin.distanceTo(uh);if(!(f<t.near||f>t.far))return{distance:f,point:jf.clone().applyMatrix4(n.matrixWorld),index:c,face:null,faceIndex:null,barycoord:null,object:n}}function O0(n,t,e=2){let i=t&&t.length,s=i?t[0]*e:n.length,o=jd(n,0,s,e,!0),c=[];if(!o||o.next===o.prev)return c;let a,u,f;if(i&&(o=z0(n,t,o,e)),n.length>80*e){a=n[0],u=n[1];let d=a,g=u;for(let m=e;m<s;m+=e){let y=n[m],v=n[m+1];y<a&&(a=y),v<u&&(u=v),y>d&&(d=y),v>g&&(g=v)}f=Math.max(d-a,g-u),f=f!==0?32767/f:0}return Mo(o,c,e,a,u,f,0),c}function jd(n,t,e,i,s){let o;if(s===j0(n,t,e,i)>0)for(let c=t;c<e;c+=i)o=td(c/i|0,n[c],n[c+1],o);else for(let c=e-i;c>=t;c-=i)o=td(c/i|0,n[c],n[c+1],o);return o&&hr(o,o.next)&&(wo(o),o=o.next),o}function vs(n,t){if(!n)return n;t||(t=n);let e=n,i;do if(i=!1,!e.steiner&&(hr(e,e.next)||Ke(e.prev,e,e.next)===0)){if(wo(e),e=t=e.prev,e===e.next)break;i=!0}else e=e.next;while(i||e!==t);return t}function Mo(n,t,e,i,s,o,c){if(!n)return;!c&&o&&W0(n,i,s,o);let a=n;for(;n.prev!==n.next;){let u=n.prev,f=n.next;if(o?U0(n,i,s,o):F0(n)){t.push(u.i,n.i,f.i),wo(n),n=f.next,a=f.next;continue}if(n=f,n===a){c?c===1?(n=B0(vs(n),t),Mo(n,t,e,i,s,o,2)):c===2&&k0(n,t,e,i,s,o):Mo(vs(n),t,e,i,s,o,1);break}}}function F0(n){let t=n.prev,e=n,i=n.next;if(Ke(t,e,i)>=0)return!1;let s=t.x,o=e.x,c=i.x,a=t.y,u=e.y,f=i.y,d=Math.min(s,o,c),g=Math.min(a,u,f),m=Math.max(s,o,c),y=Math.max(a,u,f),v=i.next;for(;v!==t;){if(v.x>=d&&v.x<=m&&v.y>=g&&v.y<=y&&ro(s,a,o,u,c,f,v.x,v.y)&&Ke(v.prev,v,v.next)>=0)return!1;v=v.next}return!0}function U0(n,t,e,i){let s=n.prev,o=n,c=n.next;if(Ke(s,o,c)>=0)return!1;let a=s.x,u=o.x,f=c.x,d=s.y,g=o.y,m=c.y,y=Math.min(a,u,f),v=Math.min(d,g,m),b=Math.max(a,u,f),x=Math.max(d,g,m),_=vh(y,v,t,e,i),E=vh(b,x,t,e,i),A=n.prevZ,S=n.nextZ;for(;A&&A.z>=_&&S&&S.z<=E;){if(A.x>=y&&A.x<=b&&A.y>=v&&A.y<=x&&A!==s&&A!==c&&ro(a,d,u,g,f,m,A.x,A.y)&&Ke(A.prev,A,A.next)>=0||(A=A.prevZ,S.x>=y&&S.x<=b&&S.y>=v&&S.y<=x&&S!==s&&S!==c&&ro(a,d,u,g,f,m,S.x,S.y)&&Ke(S.prev,S,S.next)>=0))return!1;S=S.nextZ}for(;A&&A.z>=_;){if(A.x>=y&&A.x<=b&&A.y>=v&&A.y<=x&&A!==s&&A!==c&&ro(a,d,u,g,f,m,A.x,A.y)&&Ke(A.prev,A,A.next)>=0)return!1;A=A.prevZ}for(;S&&S.z<=E;){if(S.x>=y&&S.x<=b&&S.y>=v&&S.y<=x&&S!==s&&S!==c&&ro(a,d,u,g,f,m,S.x,S.y)&&Ke(S.prev,S,S.next)>=0)return!1;S=S.nextZ}return!0}function B0(n,t){let e=n;do{let i=e.prev,s=e.next.next;!hr(i,s)&&Qd(i,e,e.next,s)&&So(i,s)&&So(s,i)&&(t.push(i.i,e.i,s.i),wo(e),wo(e.next),e=n=s),e=e.next}while(e!==n);return vs(e)}function k0(n,t,e,i,s,o){let c=n;do{let a=c.next.next;for(;a!==c.prev;){if(c.i!==a.i&&q0(c,a)){let u=tp(c,a);c=vs(c,c.next),u=vs(u,u.next),Mo(c,t,e,i,s,o,0),Mo(u,t,e,i,s,o,0);return}a=a.next}c=c.next}while(c!==n)}function z0(n,t,e,i){let s=[];for(let o=0,c=t.length;o<c;o++){let a=t[o]*i,u=o<c-1?t[o+1]*i:n.length,f=jd(n,a,u,i,!1);f===f.next&&(f.steiner=!0),s.push($0(f))}s.sort(V0);for(let o=0;o<s.length;o++)e=H0(s[o],e);return e}function V0(n,t){let e=n.x-t.x;if(e===0&&(e=n.y-t.y,e===0)){let i=(n.next.y-n.y)/(n.next.x-n.x),s=(t.next.y-t.y)/(t.next.x-t.x);e=i-s}return e}function H0(n,t){let e=G0(n,t);if(!e)return t;let i=tp(e,n);return vs(i,i.next),vs(e,e.next)}function G0(n,t){let e=t,i=n.x,s=n.y,o=-1/0,c;if(hr(n,e))return e;do{if(hr(n,e.next))return e.next;if(s<=e.y&&s>=e.next.y&&e.next.y!==e.y){let g=e.x+(s-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(g<=i&&g>o&&(o=g,c=e.x<e.next.x?e:e.next,g===i))return c}e=e.next}while(e!==t);if(!c)return null;let a=c,u=c.x,f=c.y,d=1/0;e=c;do{if(i>=e.x&&e.x>=u&&i!==e.x&&Kd(s<f?i:o,s,u,f,s<f?o:i,s,e.x,e.y)){let g=Math.abs(s-e.y)/(i-e.x);So(e,n)&&(g<d||g===d&&(e.x>c.x||e.x===c.x&&X0(c,e)))&&(c=e,d=g)}e=e.next}while(e!==a);return c}function X0(n,t){return Ke(n.prev,n,t.prev)<0&&Ke(t.next,n,n.next)<0}function W0(n,t,e,i){let s=n;do s.z===0&&(s.z=vh(s.x,s.y,t,e,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==n);s.prevZ.nextZ=null,s.prevZ=null,Y0(s)}function Y0(n){let t,e=1;do{let i=n,s;n=null;let o=null;for(t=0;i;){t++;let c=i,a=0;for(let f=0;f<e&&(a++,c=c.nextZ,!!c);f++);let u=e;for(;a>0||u>0&&c;)a!==0&&(u===0||!c||i.z<=c.z)?(s=i,i=i.nextZ,a--):(s=c,c=c.nextZ,u--),o?o.nextZ=s:n=s,s.prevZ=o,o=s;i=c}o.nextZ=null,e*=2}while(t>1);return n}function vh(n,t,e,i,s){return n=(n-e)*s|0,t=(t-i)*s|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,n|t<<1}function $0(n){let t=n,e=n;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==n);return e}function Kd(n,t,e,i,s,o,c,a){return(s-c)*(t-a)>=(n-c)*(o-a)&&(n-c)*(i-a)>=(e-c)*(t-a)&&(e-c)*(o-a)>=(s-c)*(i-a)}function ro(n,t,e,i,s,o,c,a){return!(n===c&&t===a)&&Kd(n,t,e,i,s,o,c,a)}function q0(n,t){return n.next.i!==t.i&&n.prev.i!==t.i&&!Z0(n,t)&&(So(n,t)&&So(t,n)&&J0(n,t)&&(Ke(n.prev,n,t.prev)||Ke(n,t.prev,t))||hr(n,t)&&Ke(n.prev,n,n.next)>0&&Ke(t.prev,t,t.next)>0)}function Ke(n,t,e){return(t.y-n.y)*(e.x-t.x)-(t.x-n.x)*(e.y-t.y)}function hr(n,t){return n.x===t.x&&n.y===t.y}function Qd(n,t,e,i){let s=za(Ke(n,t,e)),o=za(Ke(n,t,i)),c=za(Ke(e,i,n)),a=za(Ke(e,i,t));return!!(s!==o&&c!==a||s===0&&ka(n,e,t)||o===0&&ka(n,i,t)||c===0&&ka(e,n,i)||a===0&&ka(e,t,i))}function ka(n,t,e){return t.x<=Math.max(n.x,e.x)&&t.x>=Math.min(n.x,e.x)&&t.y<=Math.max(n.y,e.y)&&t.y>=Math.min(n.y,e.y)}function za(n){return n>0?1:n<0?-1:0}function Z0(n,t){let e=n;do{if(e.i!==n.i&&e.next.i!==n.i&&e.i!==t.i&&e.next.i!==t.i&&Qd(e,e.next,n,t))return!0;e=e.next}while(e!==n);return!1}function So(n,t){return Ke(n.prev,n,n.next)<0?Ke(n,t,n.next)>=0&&Ke(n,n.prev,t)>=0:Ke(n,t,n.prev)<0||Ke(n,n.next,t)<0}function J0(n,t){let e=n,i=!1,s=(n.x+t.x)/2,o=(n.y+t.y)/2;do e.y>o!=e.next.y>o&&e.next.y!==e.y&&s<(e.next.x-e.x)*(o-e.y)/(e.next.y-e.y)+e.x&&(i=!i),e=e.next;while(e!==n);return i}function tp(n,t){let e=bh(n.i,n.x,n.y),i=bh(t.i,t.x,t.y),s=n.next,o=t.prev;return n.next=t,t.prev=n,e.next=s,s.prev=e,i.next=e,e.prev=i,o.next=i,i.prev=o,i}function td(n,t,e,i){let s=bh(n,t,e);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function wo(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function bh(n,t,e){return{i:n,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function j0(n,t,e,i){let s=0;for(let o=t,c=e-i;o<e;o+=i)s+=(n[c]-n[o])*(n[o+1]+n[c+1]),c=o;return s}function ed(n){let t=n.length;t>2&&n[t-1].equals(n[0])&&n.pop()}function nd(n,t){for(let e=0;e<t.length;e++)n.push(t[e].x),n.push(t[e].y)}function ws(n){let t={};for(let e in n){t[e]={};for(let i in n[e]){let s=n[e][i];if(id(s))s.isRenderTargetTexture?(ee("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=s.clone();else if(Array.isArray(s))if(id(s[0])){let o=[];for(let c=0,a=s.length;c<a;c++)o[c]=s[c].clone();t[e][i]=o}else t[e][i]=s.slice();else t[e][i]=s}}return t}function bn(n){let t={};for(let e=0;e<n.length;e++){let i=ws(n[e]);for(let s in i)t[s]=i[s]}return t}function id(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function K0(n){let t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function Qh(n){let t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Me.workingColorSpace}function qs(n,t){return!n||n.constructor===t?n:typeof t.BYTES_PER_ELEMENT=="number"?new t(n):Array.prototype.slice.call(n)}function dh(n){return n!==void 0&&n.inTangents!==void 0&&n.outTangents!==void 0}function np(n,t,e,i,s){let o=1-n;return o*o*o*t+3*o*o*n*e+3*o*n*n*i+n*n*n*s}function eg(n,t,e,i,s){let o=1-n;return 3*o*o*(e-t)+6*o*n*(i-e)+3*n*n*(s-i)}function ng(n,t,e,i,s){let o=(n-t)/(s-t);for(let c=0;c<8;c++){let a=np(o,t,e,i,s)-n;if(Math.abs(a)<1e-10)break;let u=eg(o,t,e,i,s);if(Math.abs(u)<1e-10)break;o=Math.max(0,Math.min(1,o-a/u))}return o}function sd(n,t){for(let e=0,i=n.length;e!==i;e+=2)n[e]*=t}function hd(n,t){return n.distance-t.distance}function Eh(n,t,e,i){let s=!0;if(n.layers.test(t.layers)&&n.raycast(t,e)===!1&&(s=!1),s===!0&&i===!0){let o=n.children;for(let c=0,a=o.length;c<a;c++)Eh(o[c],t,e,!0)}}function nu(n,t,e,i){let s=ug(i);switch(e){case Yh:return n*t;case qh:return n*t/s.components*s.byteLength;case Ll:return n*t/s.components*s.byteLength;case es:return n*t*2/s.components*s.byteLength;case Nl:return n*t*2/s.components*s.byteLength;case $h:return n*t*3/s.components*s.byteLength;case Xn:return n*t*4/s.components*s.byteLength;case Dl:return n*t*4/s.components*s.byteLength;case ko:case zo:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Vo:case Ho:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Fl:case Bl:return Math.max(n,16)*Math.max(t,8)/4;case Ol:case Ul:return Math.max(n,8)*Math.max(t,8)/2;case kl:case zl:case Hl:case Gl:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Vl:case Go:case Xl:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Wl:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Yl:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case $l:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case ql:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case Zl:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case Jl:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case jl:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case Kl:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case Ql:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case tc:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case ec:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case nc:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case ic:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case sc:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case rc:case oc:case ac:return Math.ceil(n/4)*Math.ceil(t/4)*16;case lc:case cc:return Math.ceil(n/4)*Math.ceil(t/4)*8;case Xo:case hc:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function ug(n){switch(n){case In:case Hh:return{byteLength:1,components:1};case gr:case Gh:case ni:return{byteLength:2,components:1};case Il:case Rl:return{byteLength:2,components:4};case ti:case Cl:case ei:return{byteLength:4,components:1};case Xh:case Wh:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}var Zi,Ji,fd,Ah,dd,Fo,pd,pr,ji,Tn,vn,di,mr,Ph,Ch,Ih,md,bs,gd,xd,yd,_d,vd,bd,Md,Sd,Rh,Lh,wd,Ed,Td,Ad,Pd,Cd,Id,Rd,Ld,Ya,$a,qa,Qs,Za,Ja,ja,Ka,Nh,Nd,Dd,Qn,Dh,Oh,Fh,Uh,Bh,kh,zh,Vh,Ki,Ms,Tl,Al,Uo,Qa,ci,tl,un,Od,Bo,pn,Pl,Qi,In,Hh,Gh,gr,Cl,ti,ei,ni,Il,Rl,xr,Xh,Wh,Yh,$h,Xn,hi,ts,qh,Ll,es,Nl,Dl,ko,zo,Vo,Ho,Ol,Fl,Ul,Bl,kl,zl,Vl,Hl,Gl,Go,Xl,Wl,Yl,$l,ql,Zl,Jl,jl,Kl,Ql,tc,ec,nc,ic,sc,rc,oc,ac,lc,cc,Xo,hc,ao,el,Xa,gh,xh,yh,_h,Fd,uc,Ud,Pi,wn,lo,co,Ne,Wa,Bd,kd,zd,Vd,fc,Hd,Gd,dc,Xd,Zh,Ss,Jh,Jn,tr,Lf,er,qd,jn,xn,Nf,js,nr,Kh,Jt,On,K,Wc,Df,he,Yc,Of,Ff,Me,Ds,nl,y0,ir,_0,qc,En,qe,il,Cn,fo,sl,Fe,Os,Yn,v0,b0,Fi,pa,Ln,Uf,Bf,Ai,sr,M0,kf,Fs,vi,ma,jr,S0,w0,zf,Vf,Hf,Gf,E0,Us,Zc,rn,Gn,T0,rr,Zd,Ui,ga,le,yn,po,$n,bi,jc,Mi,Bs,ks,Xf,Kc,Qc,th,eh,nh,ih,li,Vi,Si,qn,xa,zs,Vs,Hs,Bi,ki,fs,Kr,ya,_a,ds,nn,va,A0,Ve,mo,go,He,P0,Qr,rh,xs,C0,Hn,oh,Gs,Nn,to,hn,We,rl,Sn,xo,ah,I0,R0,Dn,L0,ui,or,Xs,eo,Ws,Ys,$s,no,Jd,ba,io,Ma,Wf,lh,Yf,yo,wi,ch,wa,Ea,Hi,Fn,$f,ps,Ta,qf,Aa,Pa,Ca,hh,Ia,Zf,Ra,Ae,ol,ms,D0,Na,ar,Kn,al,ll,Jf,so,Da,uh,jf,ys,Kf,Qf,_s,_o,vo,Gi,cl,bo,Xi,fi,lr,Fa,Ua,fh,Ba,cr,Mh,Eo,To,Ao,Wi,ep,Q0,tg,Un,hl,Bn,ul,fl,Po,Yi,dl,pl,ml,gl,kn,$i,xl,yl,_l,Co,qi,vl,bl,ip,Ml,Io,Ro,ph,rd,od,Sl,Va,Ha,ai,Lo,zi,ad,ld,_n,ur,Sh,fr,Zs,Js,wl,El,tu,ig,eu,sg,rg,og,ag,lg,cg,hg,wh,Xe,cS,cd,No,dr,Th,ud,Ga,mh,Do,Oo,iu=fe(()=>{Zi={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Ji={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},fd=0,Ah=1,dd=2,Fo=1,pd=2,pr=3,ji=0,Tn=1,vn=2,di=0,mr=1,Ph=2,Ch=3,Ih=4,md=5,bs=100,gd=101,xd=102,yd=103,_d=104,vd=200,bd=201,Md=202,Sd=203,Rh=204,Lh=205,wd=206,Ed=207,Td=208,Ad=209,Pd=210,Cd=211,Id=212,Rd=213,Ld=214,Ya=0,$a=1,qa=2,Qs=3,Za=4,Ja=5,ja=6,Ka=7,Nh=0,Nd=1,Dd=2,Qn=0,Dh=1,Oh=2,Fh=3,Uh=4,Bh=5,kh=6,zh=7,Vh=300,Ki=301,Ms=302,Tl=303,Al=304,Uo=306,Qa=1e3,ci=1001,tl=1002,un=1003,Od=1004,Bo=1005,pn=1006,Pl=1007,Qi=1008,In=1009,Hh=1010,Gh=1011,gr=1012,Cl=1013,ti=1014,ei=1015,ni=1016,Il=1017,Rl=1018,xr=1020,Xh=35902,Wh=35899,Yh=1021,$h=1022,Xn=1023,hi=1026,ts=1027,qh=1028,Ll=1029,es=1030,Nl=1031,Dl=1033,ko=33776,zo=33777,Vo=33778,Ho=33779,Ol=35840,Fl=35841,Ul=35842,Bl=35843,kl=36196,zl=37492,Vl=37496,Hl=37488,Gl=37489,Go=37490,Xl=37491,Wl=37808,Yl=37809,$l=37810,ql=37811,Zl=37812,Jl=37813,jl=37814,Kl=37815,Ql=37816,tc=37817,ec=37818,nc=37819,ic=37820,sc=37821,rc=36492,oc=36494,ac=36495,lc=36283,cc=36284,Xo=36285,hc=36286,ao=2300,el=2301,Xa=2302,gh=2303,xh=2400,yh=2401,_h=2402,Fd=3200,uc=0,Ud=1,Pi="",wn="srgb",lo="srgb-linear",co="linear",Ne="srgb",Wa=7680,Bd=519,kd=512,zd=513,Vd=514,fc=515,Hd=516,Gd=517,dc=518,Xd=519,Zh=35044,Ss=35048,Jh="300 es",Jn=2e3,tr=2001;Lf={},er=null;qd={[Ya]:$a,[qa]:ja,[Za]:Ka,[Qs]:Ja,[$a]:Ya,[ja]:qa,[Ka]:Za,[Ja]:Qs},jn=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){let i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){let i=this._listeners;if(i===void 0)return;let s=i[t];if(s!==void 0){let o=s.indexOf(e);o!==-1&&s.splice(o,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let i=e[t.type];if(i!==void 0){t.target=this;let s=i.slice(0);for(let o=0,c=s.length;o<c;o++)s[o].call(this,t);t.target=null}}},xn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Nf=1234567,js=Math.PI/180,nr=180/Math.PI;Kh={DEG2RAD:js,RAD2DEG:nr,generateUUID:Ei,clamp:_e,euclideanModulo:jh,mapLinear:e0,inverseLerp:n0,lerp:oo,damp:i0,pingpong:s0,smoothstep:r0,smootherstep:o0,randInt:a0,randFloat:l0,randFloatSpread:c0,seededRandom:h0,degToRad:u0,radToDeg:f0,isPowerOfTwo:d0,ceilPowerOfTwo:p0,floorPowerOfTwo:m0,setQuaternionFromProperEuler:g0,normalize:Oe,denormalize:Zn},Jt=class n{static{n.prototype.isVector2=!0}constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,i=this.y,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6],this.y=s[1]*e+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=_e(this.x,t.x,e.x),this.y=_e(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=_e(this.x,t,e),this.y=_e(this.y,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(_e(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(_e(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let i=Math.cos(e),s=Math.sin(e),o=this.x-t.x,c=this.y-t.y;return this.x=o*i-c*s+t.x,this.y=o*s+c*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},On=class{constructor(t=0,e=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=s}static slerpFlat(t,e,i,s,o,c,a){let u=i[s+0],f=i[s+1],d=i[s+2],g=i[s+3],m=o[c+0],y=o[c+1],v=o[c+2],b=o[c+3];if(g!==b||u!==m||f!==y||d!==v){let x=u*m+f*y+d*v+g*b;x<0&&(m=-m,y=-y,v=-v,b=-b,x=-x);let _=1-a;if(x<.9995){let E=Math.acos(x),A=Math.sin(E);_=Math.sin(_*E)/A,a=Math.sin(a*E)/A,u=u*_+m*a,f=f*_+y*a,d=d*_+v*a,g=g*_+b*a}else{u=u*_+m*a,f=f*_+y*a,d=d*_+v*a,g=g*_+b*a;let E=1/Math.sqrt(u*u+f*f+d*d+g*g);u*=E,f*=E,d*=E,g*=E}}t[e]=u,t[e+1]=f,t[e+2]=d,t[e+3]=g}static multiplyQuaternionsFlat(t,e,i,s,o,c){let a=i[s],u=i[s+1],f=i[s+2],d=i[s+3],g=o[c],m=o[c+1],y=o[c+2],v=o[c+3];return t[e]=a*v+d*g+u*y-f*m,t[e+1]=u*v+d*m+f*g-a*y,t[e+2]=f*v+d*y+a*m-u*g,t[e+3]=d*v-a*g-u*m-f*y,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,s){return this._x=t,this._y=e,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let i=t._x,s=t._y,o=t._z,c=t._order,a=Math.cos,u=Math.sin,f=a(i/2),d=a(s/2),g=a(o/2),m=u(i/2),y=u(s/2),v=u(o/2);switch(c){case"XYZ":this._x=m*d*g+f*y*v,this._y=f*y*g-m*d*v,this._z=f*d*v+m*y*g,this._w=f*d*g-m*y*v;break;case"YXZ":this._x=m*d*g+f*y*v,this._y=f*y*g-m*d*v,this._z=f*d*v-m*y*g,this._w=f*d*g+m*y*v;break;case"ZXY":this._x=m*d*g-f*y*v,this._y=f*y*g+m*d*v,this._z=f*d*v+m*y*g,this._w=f*d*g-m*y*v;break;case"ZYX":this._x=m*d*g-f*y*v,this._y=f*y*g+m*d*v,this._z=f*d*v-m*y*g,this._w=f*d*g+m*y*v;break;case"YZX":this._x=m*d*g+f*y*v,this._y=f*y*g+m*d*v,this._z=f*d*v-m*y*g,this._w=f*d*g-m*y*v;break;case"XZY":this._x=m*d*g-f*y*v,this._y=f*y*g-m*d*v,this._z=f*d*v+m*y*g,this._w=f*d*g+m*y*v;break;default:ee("Quaternion: .setFromEuler() encountered an unknown order: "+c)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let i=e/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,i=e[0],s=e[4],o=e[8],c=e[1],a=e[5],u=e[9],f=e[2],d=e[6],g=e[10],m=i+a+g;if(m>0){let y=.5/Math.sqrt(m+1);this._w=.25/y,this._x=(d-u)*y,this._y=(o-f)*y,this._z=(c-s)*y}else if(i>a&&i>g){let y=2*Math.sqrt(1+i-a-g);this._w=(d-u)/y,this._x=.25*y,this._y=(s+c)/y,this._z=(o+f)/y}else if(a>g){let y=2*Math.sqrt(1+a-i-g);this._w=(o-f)/y,this._x=(s+c)/y,this._y=.25*y,this._z=(u+d)/y}else{let y=2*Math.sqrt(1+g-i-a);this._w=(c-s)/y,this._x=(o+f)/y,this._y=(u+d)/y,this._z=.25*y}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<1e-8?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(_e(this.dot(t),-1,1)))}rotateTowards(t,e){let i=this.angleTo(t);if(i===0)return this;let s=Math.min(1,e/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let i=t._x,s=t._y,o=t._z,c=t._w,a=e._x,u=e._y,f=e._z,d=e._w;return this._x=i*d+c*a+s*f-o*u,this._y=s*d+c*u+o*a-i*f,this._z=o*d+c*f+i*u-s*a,this._w=c*d-i*a-s*u-o*f,this._onChangeCallback(),this}slerp(t,e){let i=t._x,s=t._y,o=t._z,c=t._w,a=this.dot(t);a<0&&(i=-i,s=-s,o=-o,c=-c,a=-a);let u=1-e;if(a<.9995){let f=Math.acos(a),d=Math.sin(f);u=Math.sin(u*f)/d,e=Math.sin(e*f)/d,this._x=this._x*u+i*e,this._y=this._y*u+s*e,this._z=this._z*u+o*e,this._w=this._w*u+c*e,this._onChangeCallback()}else this._x=this._x*u+i*e,this._y=this._y*u+s*e,this._z=this._z*u+o*e,this._w=this._w*u+c*e,this.normalize();return this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),o=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),o*Math.sin(e),o*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},K=class n{static{n.prototype.isVector3=!0}constructor(t=0,e=0,i=0){this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Df.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Df.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,i=this.y,s=this.z,o=t.elements;return this.x=o[0]*e+o[3]*i+o[6]*s,this.y=o[1]*e+o[4]*i+o[7]*s,this.z=o[2]*e+o[5]*i+o[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,i=this.y,s=this.z,o=t.elements,c=1/(o[3]*e+o[7]*i+o[11]*s+o[15]);return this.x=(o[0]*e+o[4]*i+o[8]*s+o[12])*c,this.y=(o[1]*e+o[5]*i+o[9]*s+o[13])*c,this.z=(o[2]*e+o[6]*i+o[10]*s+o[14])*c,this}applyQuaternion(t){let e=this.x,i=this.y,s=this.z,o=t.x,c=t.y,a=t.z,u=t.w,f=2*(c*s-a*i),d=2*(a*e-o*s),g=2*(o*i-c*e);return this.x=e+u*f+c*g-a*d,this.y=i+u*d+a*f-o*g,this.z=s+u*g+o*d-c*f,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,i=this.y,s=this.z,o=t.elements;return this.x=o[0]*e+o[4]*i+o[8]*s,this.y=o[1]*e+o[5]*i+o[9]*s,this.z=o[2]*e+o[6]*i+o[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=_e(this.x,t.x,e.x),this.y=_e(this.y,t.y,e.y),this.z=_e(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=_e(this.x,t,e),this.y=_e(this.y,t,e),this.z=_e(this.z,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(_e(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let i=t.x,s=t.y,o=t.z,c=e.x,a=e.y,u=e.z;return this.x=s*u-o*a,this.y=o*c-i*u,this.z=i*a-s*c,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return Wc.copy(this).projectOnVector(t),this.sub(Wc)}reflect(t){return this.sub(Wc.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(_e(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return e*e+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){let s=Math.sin(e)*t;return this.x=s*Math.sin(i),this.y=Math.cos(e)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Wc=new K,Df=new On,he=class n{static{n.prototype.isMatrix3=!0}constructor(t,e,i,s,o,c,a,u,f){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,s,o,c,a,u,f)}set(t,e,i,s,o,c,a,u,f){let d=this.elements;return d[0]=t,d[1]=s,d[2]=a,d[3]=e,d[4]=o,d[5]=u,d[6]=i,d[7]=c,d[8]=f,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,s=e.elements,o=this.elements,c=i[0],a=i[3],u=i[6],f=i[1],d=i[4],g=i[7],m=i[2],y=i[5],v=i[8],b=s[0],x=s[3],_=s[6],E=s[1],A=s[4],S=s[7],R=s[2],T=s[5],C=s[8];return o[0]=c*b+a*E+u*R,o[3]=c*x+a*A+u*T,o[6]=c*_+a*S+u*C,o[1]=f*b+d*E+g*R,o[4]=f*x+d*A+g*T,o[7]=f*_+d*S+g*C,o[2]=m*b+y*E+v*R,o[5]=m*x+y*A+v*T,o[8]=m*_+y*S+v*C,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[1],s=t[2],o=t[3],c=t[4],a=t[5],u=t[6],f=t[7],d=t[8];return e*c*d-e*a*f-i*o*d+i*a*u+s*o*f-s*c*u}invert(){let t=this.elements,e=t[0],i=t[1],s=t[2],o=t[3],c=t[4],a=t[5],u=t[6],f=t[7],d=t[8],g=d*c-a*f,m=a*u-d*o,y=f*o-c*u,v=e*g+i*m+s*y;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);let b=1/v;return t[0]=g*b,t[1]=(s*f-d*i)*b,t[2]=(a*i-s*c)*b,t[3]=m*b,t[4]=(d*e-s*u)*b,t[5]=(s*o-a*e)*b,t[6]=y*b,t[7]=(i*u-f*e)*b,t[8]=(c*e-i*o)*b,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,s,o,c,a){let u=Math.cos(o),f=Math.sin(o);return this.set(i*u,i*f,-i*(u*c+f*a)+c+t,-s*f,s*u,-s*(-f*c+u*a)+a+e,0,0,1),this}scale(t,e){return gs("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Yc.makeScale(t,e)),this}rotate(t){return gs("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Yc.makeRotation(-t)),this}translate(t,e){return gs("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Yc.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,i=t.elements;for(let s=0;s<9;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Yc=new he,Of=new he().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ff=new he().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Me=x0();nl=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{Ds===void 0&&(Ds=ho("canvas")),Ds.width=t.width,Ds.height=t.height;let s=Ds.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),i=Ds}return i.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=ho("canvas");e.width=t.width,e.height=t.height;let i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);let s=i.getImageData(0,0,t.width,t.height),o=s.data;for(let c=0;c<o.length;c++)o[c]=Ti(o[c]/255)*255;return i.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(Ti(e[i]/255)*255):e[i]=Ti(e[i]);return{data:e,width:t.width,height:t.height}}else return ee("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},y0=0,ir=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:y0++}),this.uuid=Ei(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let o;if(Array.isArray(s)){o=[];for(let c=0,a=s.length;c<a;c++)s[c].isDataTexture?o.push($c(s[c].image)):o.push($c(s[c]))}else o=$c(s);i.url=o}return e||(t.images[this.uuid]=i),i}};_0=0,qc=new K,En=class n extends jn{constructor(t=n.DEFAULT_IMAGE,e=n.DEFAULT_MAPPING,i=ci,s=ci,o=pn,c=Qi,a=Xn,u=In,f=n.DEFAULT_ANISOTROPY,d=Pi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:_0++}),this.uuid=Ei(),this.name="",this.source=new ir(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=o,this.minFilter=c,this.anisotropy=f,this.format=a,this.internalFormat=null,this.type=u,this.offset=new Jt(0,0),this.repeat=new Jt(1,1),this.center=new Jt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new he,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(qc).x}get height(){return this.source.getSize(qc).y}get depth(){return this.source.getSize(qc).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let i=t[e];if(i===void 0){ee(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){ee(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Vh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Qa:t.x=t.x-Math.floor(t.x);break;case ci:t.x=t.x<0?0:1;break;case tl:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Qa:t.y=t.y-Math.floor(t.y);break;case ci:t.y=t.y<0?0:1;break;case tl:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};En.DEFAULT_IMAGE=null;En.DEFAULT_MAPPING=Vh;En.DEFAULT_ANISOTROPY=1;qe=class n{static{n.prototype.isVector4=!0}constructor(t=0,e=0,i=0,s=1){this.x=t,this.y=e,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,i=this.y,s=this.z,o=this.w,c=t.elements;return this.x=c[0]*e+c[4]*i+c[8]*s+c[12]*o,this.y=c[1]*e+c[5]*i+c[9]*s+c[13]*o,this.z=c[2]*e+c[6]*i+c[10]*s+c[14]*o,this.w=c[3]*e+c[7]*i+c[11]*s+c[15]*o,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,s,o,u=t.elements,f=u[0],d=u[4],g=u[8],m=u[1],y=u[5],v=u[9],b=u[2],x=u[6],_=u[10];if(Math.abs(d-m)<.01&&Math.abs(g-b)<.01&&Math.abs(v-x)<.01){if(Math.abs(d+m)<.1&&Math.abs(g+b)<.1&&Math.abs(v+x)<.1&&Math.abs(f+y+_-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let A=(f+1)/2,S=(y+1)/2,R=(_+1)/2,T=(d+m)/4,C=(g+b)/4,w=(v+x)/4;return A>S&&A>R?A<.01?(i=0,s=.707106781,o=.707106781):(i=Math.sqrt(A),s=T/i,o=C/i):S>R?S<.01?(i=.707106781,s=0,o=.707106781):(s=Math.sqrt(S),i=T/s,o=w/s):R<.01?(i=.707106781,s=.707106781,o=0):(o=Math.sqrt(R),i=C/o,s=w/o),this.set(i,s,o,e),this}let E=Math.sqrt((x-v)*(x-v)+(g-b)*(g-b)+(m-d)*(m-d));return Math.abs(E)<.001&&(E=1),this.x=(x-v)/E,this.y=(g-b)/E,this.z=(m-d)/E,this.w=Math.acos((f+y+_-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=_e(this.x,t.x,e.x),this.y=_e(this.y,t.y,e.y),this.z=_e(this.z,t.z,e.z),this.w=_e(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=_e(this.x,t,e),this.y=_e(this.y,t,e),this.z=_e(this.z,t,e),this.w=_e(this.w,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(_e(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},il=class extends jn{constructor(t=1,e=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:pn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=i.depth,this.scissor=new qe(0,0,t,e),this.scissorTest=!1,this.viewport=new qe(0,0,t,e),this.textures=[];let s={width:t,height:e,depth:i.depth},o=new En(s),c=i.count;for(let a=0;a<c;a++)this.textures[a]=o.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:pn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let s=0,o=this.textures.length;s<o;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,i=t.textures.length;e<i;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new ir(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Cn=class extends il{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}},fo=class extends En{constructor(t=null,e=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=un,this.minFilter=un,this.wrapR=ci,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}},sl=class extends En{constructor(t=null,e=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=un,this.minFilter=un,this.wrapR=ci,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}},Fe=class n{static{n.prototype.isMatrix4=!0}constructor(t,e,i,s,o,c,a,u,f,d,g,m,y,v,b,x){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,s,o,c,a,u,f,d,g,m,y,v,b,x)}set(t,e,i,s,o,c,a,u,f,d,g,m,y,v,b,x){let _=this.elements;return _[0]=t,_[4]=e,_[8]=i,_[12]=s,_[1]=o,_[5]=c,_[9]=a,_[13]=u,_[2]=f,_[6]=d,_[10]=g,_[14]=m,_[3]=y,_[7]=v,_[11]=b,_[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){let e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),i.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,i=t.elements,s=1/Os.setFromMatrixColumn(t,0).length(),o=1/Os.setFromMatrixColumn(t,1).length(),c=1/Os.setFromMatrixColumn(t,2).length();return e[0]=i[0]*s,e[1]=i[1]*s,e[2]=i[2]*s,e[3]=0,e[4]=i[4]*o,e[5]=i[5]*o,e[6]=i[6]*o,e[7]=0,e[8]=i[8]*c,e[9]=i[9]*c,e[10]=i[10]*c,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,i=t.x,s=t.y,o=t.z,c=Math.cos(i),a=Math.sin(i),u=Math.cos(s),f=Math.sin(s),d=Math.cos(o),g=Math.sin(o);if(t.order==="XYZ"){let m=c*d,y=c*g,v=a*d,b=a*g;e[0]=u*d,e[4]=-u*g,e[8]=f,e[1]=y+v*f,e[5]=m-b*f,e[9]=-a*u,e[2]=b-m*f,e[6]=v+y*f,e[10]=c*u}else if(t.order==="YXZ"){let m=u*d,y=u*g,v=f*d,b=f*g;e[0]=m+b*a,e[4]=v*a-y,e[8]=c*f,e[1]=c*g,e[5]=c*d,e[9]=-a,e[2]=y*a-v,e[6]=b+m*a,e[10]=c*u}else if(t.order==="ZXY"){let m=u*d,y=u*g,v=f*d,b=f*g;e[0]=m-b*a,e[4]=-c*g,e[8]=v+y*a,e[1]=y+v*a,e[5]=c*d,e[9]=b-m*a,e[2]=-c*f,e[6]=a,e[10]=c*u}else if(t.order==="ZYX"){let m=c*d,y=c*g,v=a*d,b=a*g;e[0]=u*d,e[4]=v*f-y,e[8]=m*f+b,e[1]=u*g,e[5]=b*f+m,e[9]=y*f-v,e[2]=-f,e[6]=a*u,e[10]=c*u}else if(t.order==="YZX"){let m=c*u,y=c*f,v=a*u,b=a*f;e[0]=u*d,e[4]=b-m*g,e[8]=v*g+y,e[1]=g,e[5]=c*d,e[9]=-a*d,e[2]=-f*d,e[6]=y*g+v,e[10]=m-b*g}else if(t.order==="XZY"){let m=c*u,y=c*f,v=a*u,b=a*f;e[0]=u*d,e[4]=-g,e[8]=f*d,e[1]=m*g+b,e[5]=c*d,e[9]=y*g-v,e[2]=v*g-y,e[6]=a*d,e[10]=b*g+m}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(v0,t,b0)}lookAt(t,e,i){let s=this.elements;return Ln.subVectors(t,e),Ln.lengthSq()===0&&(Ln.z=1),Ln.normalize(),Fi.crossVectors(i,Ln),Fi.lengthSq()===0&&(Math.abs(i.z)===1?Ln.x+=1e-4:Ln.z+=1e-4,Ln.normalize(),Fi.crossVectors(i,Ln)),Fi.normalize(),pa.crossVectors(Ln,Fi),s[0]=Fi.x,s[4]=pa.x,s[8]=Ln.x,s[1]=Fi.y,s[5]=pa.y,s[9]=Ln.y,s[2]=Fi.z,s[6]=pa.z,s[10]=Ln.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,s=e.elements,o=this.elements,c=i[0],a=i[4],u=i[8],f=i[12],d=i[1],g=i[5],m=i[9],y=i[13],v=i[2],b=i[6],x=i[10],_=i[14],E=i[3],A=i[7],S=i[11],R=i[15],T=s[0],C=s[4],w=s[8],L=s[12],F=s[1],B=s[5],H=s[9],G=s[13],z=s[2],$=s[6],Y=s[10],k=s[14],j=s[3],Z=s[7],st=s[11],ot=s[15];return o[0]=c*T+a*F+u*z+f*j,o[4]=c*C+a*B+u*$+f*Z,o[8]=c*w+a*H+u*Y+f*st,o[12]=c*L+a*G+u*k+f*ot,o[1]=d*T+g*F+m*z+y*j,o[5]=d*C+g*B+m*$+y*Z,o[9]=d*w+g*H+m*Y+y*st,o[13]=d*L+g*G+m*k+y*ot,o[2]=v*T+b*F+x*z+_*j,o[6]=v*C+b*B+x*$+_*Z,o[10]=v*w+b*H+x*Y+_*st,o[14]=v*L+b*G+x*k+_*ot,o[3]=E*T+A*F+S*z+R*j,o[7]=E*C+A*B+S*$+R*Z,o[11]=E*w+A*H+S*Y+R*st,o[15]=E*L+A*G+S*k+R*ot,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[4],s=t[8],o=t[12],c=t[1],a=t[5],u=t[9],f=t[13],d=t[2],g=t[6],m=t[10],y=t[14],v=t[3],b=t[7],x=t[11],_=t[15],E=u*y-f*m,A=a*y-f*g,S=a*m-u*g,R=c*y-f*d,T=c*m-u*d,C=c*g-a*d;return e*(b*E-x*A+_*S)-i*(v*E-x*R+_*T)+s*(v*A-b*R+_*C)-o*(v*S-b*T+x*C)}determinantAffine(){let t=this.elements,e=t[0],i=t[4],s=t[8],o=t[1],c=t[5],a=t[9],u=t[2],f=t[6],d=t[10];return e*(c*d-a*f)-i*(o*d-a*u)+s*(o*f-c*u)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=i),this}invert(){let t=this.elements,e=t[0],i=t[1],s=t[2],o=t[3],c=t[4],a=t[5],u=t[6],f=t[7],d=t[8],g=t[9],m=t[10],y=t[11],v=t[12],b=t[13],x=t[14],_=t[15],E=e*a-i*c,A=e*u-s*c,S=e*f-o*c,R=i*u-s*a,T=i*f-o*a,C=s*f-o*u,w=d*b-g*v,L=d*x-m*v,F=d*_-y*v,B=g*x-m*b,H=g*_-y*b,G=m*_-y*x,z=E*G-A*H+S*B+R*F-T*L+C*w;if(z===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let $=1/z;return t[0]=(a*G-u*H+f*B)*$,t[1]=(s*H-i*G-o*B)*$,t[2]=(b*C-x*T+_*R)*$,t[3]=(m*T-g*C-y*R)*$,t[4]=(u*F-c*G-f*L)*$,t[5]=(e*G-s*F+o*L)*$,t[6]=(x*S-v*C-_*A)*$,t[7]=(d*C-m*S+y*A)*$,t[8]=(c*H-a*F+f*w)*$,t[9]=(i*F-e*H-o*w)*$,t[10]=(v*T-b*S+_*E)*$,t[11]=(g*S-d*T-y*E)*$,t[12]=(a*L-c*B-u*w)*$,t[13]=(e*B-i*L+s*w)*$,t[14]=(b*A-v*R-x*E)*$,t[15]=(d*R-g*A+m*E)*$,this}scale(t){let e=this.elements,i=t.x,s=t.y,o=t.z;return e[0]*=i,e[4]*=s,e[8]*=o,e[1]*=i,e[5]*=s,e[9]*=o,e[2]*=i,e[6]*=s,e[10]*=o,e[3]*=i,e[7]*=s,e[11]*=o,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,s))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let i=Math.cos(e),s=Math.sin(e),o=1-i,c=t.x,a=t.y,u=t.z,f=o*c,d=o*a;return this.set(f*c+i,f*a-s*u,f*u+s*a,0,f*a+s*u,d*a+i,d*u-s*c,0,f*u-s*a,d*u+s*c,o*u*u+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,s,o,c){return this.set(1,i,o,0,t,1,c,0,e,s,1,0,0,0,0,1),this}compose(t,e,i){let s=this.elements,o=e._x,c=e._y,a=e._z,u=e._w,f=o+o,d=c+c,g=a+a,m=o*f,y=o*d,v=o*g,b=c*d,x=c*g,_=a*g,E=u*f,A=u*d,S=u*g,R=i.x,T=i.y,C=i.z;return s[0]=(1-(b+_))*R,s[1]=(y+S)*R,s[2]=(v-A)*R,s[3]=0,s[4]=(y-S)*T,s[5]=(1-(m+_))*T,s[6]=(x+E)*T,s[7]=0,s[8]=(v+A)*C,s[9]=(x-E)*C,s[10]=(1-(m+b))*C,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,i){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let o=this.determinantAffine();if(o===0)return i.set(1,1,1),e.identity(),this;let c=Os.set(s[0],s[1],s[2]).length(),a=Os.set(s[4],s[5],s[6]).length(),u=Os.set(s[8],s[9],s[10]).length();o<0&&(c=-c),Yn.copy(this);let f=1/c,d=1/a,g=1/u;return Yn.elements[0]*=f,Yn.elements[1]*=f,Yn.elements[2]*=f,Yn.elements[4]*=d,Yn.elements[5]*=d,Yn.elements[6]*=d,Yn.elements[8]*=g,Yn.elements[9]*=g,Yn.elements[10]*=g,e.setFromRotationMatrix(Yn),i.x=c,i.y=a,i.z=u,this}makePerspective(t,e,i,s,o,c,a=Jn,u=!1){let f=this.elements,d=2*o/(e-t),g=2*o/(i-s),m=(e+t)/(e-t),y=(i+s)/(i-s),v,b;if(u)v=o/(c-o),b=c*o/(c-o);else if(a===Jn)v=-(c+o)/(c-o),b=-2*c*o/(c-o);else if(a===tr)v=-c/(c-o),b=-c*o/(c-o);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return f[0]=d,f[4]=0,f[8]=m,f[12]=0,f[1]=0,f[5]=g,f[9]=y,f[13]=0,f[2]=0,f[6]=0,f[10]=v,f[14]=b,f[3]=0,f[7]=0,f[11]=-1,f[15]=0,this}makeOrthographic(t,e,i,s,o,c,a=Jn,u=!1){let f=this.elements,d=2/(e-t),g=2/(i-s),m=-(e+t)/(e-t),y=-(i+s)/(i-s),v,b;if(u)v=1/(c-o),b=c/(c-o);else if(a===Jn)v=-2/(c-o),b=-(c+o)/(c-o);else if(a===tr)v=-1/(c-o),b=-o/(c-o);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return f[0]=d,f[4]=0,f[8]=0,f[12]=m,f[1]=0,f[5]=g,f[9]=0,f[13]=y,f[2]=0,f[6]=0,f[10]=v,f[14]=b,f[3]=0,f[7]=0,f[11]=0,f[15]=1,this}equals(t){let e=this.elements,i=t.elements;for(let s=0;s<16;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}},Os=new K,Yn=new Fe,v0=new K(0,0,0),b0=new K(1,1,1),Fi=new K,pa=new K,Ln=new K,Uf=new Fe,Bf=new On,Ai=class n{constructor(t=0,e=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,s=this._order){return this._x=t,this._y=e,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){let s=t.elements,o=s[0],c=s[4],a=s[8],u=s[1],f=s[5],d=s[9],g=s[2],m=s[6],y=s[10];switch(e){case"XYZ":this._y=Math.asin(_e(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-d,y),this._z=Math.atan2(-c,o)):(this._x=Math.atan2(m,f),this._z=0);break;case"YXZ":this._x=Math.asin(-_e(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(a,y),this._z=Math.atan2(u,f)):(this._y=Math.atan2(-g,o),this._z=0);break;case"ZXY":this._x=Math.asin(_e(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(-g,y),this._z=Math.atan2(-c,f)):(this._y=0,this._z=Math.atan2(u,o));break;case"ZYX":this._y=Math.asin(-_e(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(m,y),this._z=Math.atan2(u,o)):(this._x=0,this._z=Math.atan2(-c,f));break;case"YZX":this._z=Math.asin(_e(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(-d,f),this._y=Math.atan2(-g,o)):(this._x=0,this._y=Math.atan2(a,y));break;case"XZY":this._z=Math.asin(-_e(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(m,f),this._y=Math.atan2(a,o)):(this._x=Math.atan2(-d,y),this._y=0);break;default:ee("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return Uf.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Uf,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Bf.setFromEuler(this),this.setFromQuaternion(Bf,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Ai.DEFAULT_ORDER="XYZ";sr=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},M0=0,kf=new K,Fs=new On,vi=new Fe,ma=new K,jr=new K,S0=new K,w0=new On,zf=new K(1,0,0),Vf=new K(0,1,0),Hf=new K(0,0,1),Gf={type:"added"},E0={type:"removed"},Us={type:"childadded",child:null},Zc={type:"childremoved",child:null},rn=class n extends jn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:M0++}),this.uuid=Ei(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let t=new K,e=new Ai,i=new On,s=new K(1,1,1);function o(){i.setFromEuler(e,!1)}function c(){e.setFromQuaternion(i,void 0,!1)}e._onChange(o),i._onChange(c),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Fe},normalMatrix:{value:new he}}),this.matrix=new Fe,this.matrixWorld=new Fe,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new sr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Fs.setFromAxisAngle(t,e),this.quaternion.multiply(Fs),this}rotateOnWorldAxis(t,e){return Fs.setFromAxisAngle(t,e),this.quaternion.premultiply(Fs),this}rotateX(t){return this.rotateOnAxis(zf,t)}rotateY(t){return this.rotateOnAxis(Vf,t)}rotateZ(t){return this.rotateOnAxis(Hf,t)}translateOnAxis(t,e){return kf.copy(t).applyQuaternion(this.quaternion),this.position.add(kf.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(zf,t)}translateY(t){return this.translateOnAxis(Vf,t)}translateZ(t){return this.translateOnAxis(Hf,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(vi.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?ma.copy(t):ma.set(t,e,i);let s=this.parent;this.updateWorldMatrix(!0,!1),jr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?vi.lookAt(jr,ma,this.up):vi.lookAt(ma,jr,this.up),this.quaternion.setFromRotationMatrix(vi),s&&(vi.extractRotation(s.matrixWorld),Fs.setFromRotationMatrix(vi),this.quaternion.premultiply(Fs.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(ie("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Gf),Us.child=t,this.dispatchEvent(Us),Us.child=null):ie("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(E0),Zc.child=t,this.dispatchEvent(Zc),Zc.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),vi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),vi.multiply(t.parent.matrixWorld)),t.applyMatrix4(vi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Gf),Us.child=t,this.dispatchEvent(Us),Us.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,s=this.children.length;i<s;i++){let c=this.children[i].getObjectByProperty(t,e);if(c!==void 0)return c}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);let s=this.children;for(let o=0,c=s.length;o<c;o++)s[o].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(jr,t,S0),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(jr,w0,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,i=t.y,s=t.z,o=this.matrix.elements;o[12]+=e-o[0]*e-o[4]*i-o[8]*s,o[13]+=i-o[1]*e-o[5]*i-o[9]*s,o[14]+=s-o[2]*e-o[6]*i-o[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e,i=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),e===!0){let o=this.children;for(let c=0,a=o.length;c<a;c++)o[c].updateWorldMatrix(!1,!0,i)}}toJSON(t){let e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function o(a,u){return a[u.uuid]===void 0&&(a[u.uuid]=u.toJSON(t)),u.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=o(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let u=a.shapes;if(Array.isArray(u))for(let f=0,d=u.length;f<d;f++){let g=u[f];o(t.shapes,g)}else o(t.shapes,u)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let u=0,f=this.material.length;u<f;u++)a.push(o(t.materials,this.material[u]));s.material=a}else s.material=o(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let u=this.animations[a];s.animations.push(o(t.animations,u))}}if(e){let a=c(t.geometries),u=c(t.materials),f=c(t.textures),d=c(t.images),g=c(t.shapes),m=c(t.skeletons),y=c(t.animations),v=c(t.nodes);a.length>0&&(i.geometries=a),u.length>0&&(i.materials=u),f.length>0&&(i.textures=f),d.length>0&&(i.images=d),g.length>0&&(i.shapes=g),m.length>0&&(i.skeletons=m),y.length>0&&(i.animations=y),v.length>0&&(i.nodes=v)}return i.object=s,i;function c(a){let u=[];for(let f in a){let d=a[f];delete d.metadata,u.push(d)}return u}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){let s=t.children[i];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};rn.DEFAULT_UP=new K(0,1,0);rn.DEFAULT_MATRIX_AUTO_UPDATE=!0;rn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;Gn=class extends rn{constructor(){super(),this.isGroup=!0,this.type="Group"}},T0={type:"move"},rr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Gn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Gn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new K,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new K),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Gn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new K,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new K,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let s=null,o=null,c=null,a=this._targetRay,u=this._grip,f=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(f&&t.hand){c=!0;for(let b of t.hand.values()){let x=e.getJointPose(b,i),_=this._getHandJoint(f,b);x!==null&&(_.matrix.fromArray(x.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=x.radius),_.visible=x!==null}let d=f.joints["index-finger-tip"],g=f.joints["thumb-tip"],m=d.position.distanceTo(g.position),y=.02,v=.005;f.inputState.pinching&&m>y+v?(f.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!f.inputState.pinching&&m<=y-v&&(f.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else u!==null&&t.gripSpace&&(o=e.getPose(t.gripSpace,i),o!==null&&(u.matrix.fromArray(o.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,o.linearVelocity?(u.hasLinearVelocity=!0,u.linearVelocity.copy(o.linearVelocity)):u.hasLinearVelocity=!1,o.angularVelocity?(u.hasAngularVelocity=!0,u.angularVelocity.copy(o.angularVelocity)):u.hasAngularVelocity=!1,u.eventsEnabled&&u.dispatchEvent({type:"gripUpdated",data:t,target:this})));a!==null&&(s=e.getPose(t.targetRaySpace,i),s===null&&o!==null&&(s=o),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(T0)))}return a!==null&&(a.visible=s!==null),u!==null&&(u.visible=o!==null),f!==null&&(f.visible=c!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let i=new Gn;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}},Zd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ui={h:0,s:0,l:0},ga={h:0,s:0,l:0};le=class{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=wn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Me.colorSpaceToWorking(this,e),this}setRGB(t,e,i,s=Me.workingColorSpace){return this.r=t,this.g=e,this.b=i,Me.colorSpaceToWorking(this,s),this}setHSL(t,e,i,s=Me.workingColorSpace){if(t=jh(t,1),e=_e(e,0,1),i=_e(i,0,1),e===0)this.r=this.g=this.b=i;else{let o=i<=.5?i*(1+e):i+e-i*e,c=2*i-o;this.r=Jc(c,o,t+1/3),this.g=Jc(c,o,t),this.b=Jc(c,o,t-1/3)}return Me.colorSpaceToWorking(this,s),this}setStyle(t,e=wn){function i(o){o!==void 0&&parseFloat(o)<1&&ee("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let o,c=s[1],a=s[2];switch(c){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,e);if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(o[4]),this.setRGB(Math.min(100,parseInt(o[1],10))/100,Math.min(100,parseInt(o[2],10))/100,Math.min(100,parseInt(o[3],10))/100,e);break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,e);break;default:ee("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let o=s[1],c=o.length;if(c===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,e);if(c===6)return this.setHex(parseInt(o,16),e);ee("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=wn){let i=Zd[t.toLowerCase()];return i!==void 0?this.setHex(i,e):ee("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Ti(t.r),this.g=Ti(t.g),this.b=Ti(t.b),this}copyLinearToSRGB(t){return this.r=Ks(t.r),this.g=Ks(t.g),this.b=Ks(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=wn){return Me.workingToColorSpace(yn.copy(this),t),Math.round(_e(yn.r*255,0,255))*65536+Math.round(_e(yn.g*255,0,255))*256+Math.round(_e(yn.b*255,0,255))}getHexString(t=wn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Me.workingColorSpace){Me.workingToColorSpace(yn.copy(this),e);let i=yn.r,s=yn.g,o=yn.b,c=Math.max(i,s,o),a=Math.min(i,s,o),u,f,d=(a+c)/2;if(a===c)u=0,f=0;else{let g=c-a;switch(f=d<=.5?g/(c+a):g/(2-c-a),c){case i:u=(s-o)/g+(s<o?6:0);break;case s:u=(o-i)/g+2;break;case o:u=(i-s)/g+4;break}u/=6}return t.h=u,t.s=f,t.l=d,t}getRGB(t,e=Me.workingColorSpace){return Me.workingToColorSpace(yn.copy(this),e),t.r=yn.r,t.g=yn.g,t.b=yn.b,t}getStyle(t=wn){Me.workingToColorSpace(yn.copy(this),t);let e=yn.r,i=yn.g,s=yn.b;return t!==wn?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,e,i){return this.getHSL(Ui),this.setHSL(Ui.h+t,Ui.s+e,Ui.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(Ui),t.getHSL(ga);let i=oo(Ui.h,ga.h,e),s=oo(Ui.s,ga.s,e),o=oo(Ui.l,ga.l,e);return this.setHSL(i,s,o),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,i=this.g,s=this.b,o=t.elements;return this.r=o[0]*e+o[3]*i+o[6]*s,this.g=o[1]*e+o[4]*i+o[7]*s,this.b=o[2]*e+o[5]*i+o[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},yn=new le;le.NAMES=Zd;po=class extends rn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ai,this.environmentIntensity=1,this.environmentRotation=new Ai,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},$n=new K,bi=new K,jc=new K,Mi=new K,Bs=new K,ks=new K,Xf=new K,Kc=new K,Qc=new K,th=new K,eh=new qe,nh=new qe,ih=new qe,li=class n{constructor(t=new K,e=new K,i=new K){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,s){s.subVectors(i,e),$n.subVectors(t,e),s.cross($n);let o=s.lengthSq();return o>0?s.multiplyScalar(1/Math.sqrt(o)):s.set(0,0,0)}static getBarycoord(t,e,i,s,o){$n.subVectors(s,e),bi.subVectors(i,e),jc.subVectors(t,e);let c=$n.dot($n),a=$n.dot(bi),u=$n.dot(jc),f=bi.dot(bi),d=bi.dot(jc),g=c*f-a*a;if(g===0)return o.set(0,0,0),null;let m=1/g,y=(f*u-a*d)*m,v=(c*d-a*u)*m;return o.set(1-y-v,v,y)}static containsPoint(t,e,i,s){return this.getBarycoord(t,e,i,s,Mi)===null?!1:Mi.x>=0&&Mi.y>=0&&Mi.x+Mi.y<=1}static getInterpolation(t,e,i,s,o,c,a,u){return this.getBarycoord(t,e,i,s,Mi)===null?(u.x=0,u.y=0,"z"in u&&(u.z=0),"w"in u&&(u.w=0),null):(u.setScalar(0),u.addScaledVector(o,Mi.x),u.addScaledVector(c,Mi.y),u.addScaledVector(a,Mi.z),u)}static getInterpolatedAttribute(t,e,i,s,o,c){return eh.setScalar(0),nh.setScalar(0),ih.setScalar(0),eh.fromBufferAttribute(t,e),nh.fromBufferAttribute(t,i),ih.fromBufferAttribute(t,s),c.setScalar(0),c.addScaledVector(eh,o.x),c.addScaledVector(nh,o.y),c.addScaledVector(ih,o.z),c}static isFrontFacing(t,e,i,s){return $n.subVectors(i,e),bi.subVectors(t,e),$n.cross(bi).dot(s)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,s){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,i,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return $n.subVectors(this.c,this.b),bi.subVectors(this.a,this.b),$n.cross(bi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return n.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return n.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,s,o){return n.getInterpolation(t,this.a,this.b,this.c,e,i,s,o)}containsPoint(t){return n.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return n.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let i=this.a,s=this.b,o=this.c,c,a;Bs.subVectors(s,i),ks.subVectors(o,i),Kc.subVectors(t,i);let u=Bs.dot(Kc),f=ks.dot(Kc);if(u<=0&&f<=0)return e.copy(i);Qc.subVectors(t,s);let d=Bs.dot(Qc),g=ks.dot(Qc);if(d>=0&&g<=d)return e.copy(s);let m=u*g-d*f;if(m<=0&&u>=0&&d<=0)return c=u/(u-d),e.copy(i).addScaledVector(Bs,c);th.subVectors(t,o);let y=Bs.dot(th),v=ks.dot(th);if(v>=0&&y<=v)return e.copy(o);let b=y*f-u*v;if(b<=0&&f>=0&&v<=0)return a=f/(f-v),e.copy(i).addScaledVector(ks,a);let x=d*v-y*g;if(x<=0&&g-d>=0&&y-v>=0)return Xf.subVectors(o,s),a=(g-d)/(g-d+(y-v)),e.copy(s).addScaledVector(Xf,a);let _=1/(x+b+m);return c=b*_,a=m*_,e.copy(i).addScaledVector(Bs,c).addScaledVector(ks,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Vi=class{constructor(t=new K(1/0,1/0,1/0),e=new K(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(qn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(qn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let i=qn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let i=t.geometry;if(i!==void 0){let o=i.getAttribute("position");if(e===!0&&o!==void 0&&t.isInstancedMesh!==!0)for(let c=0,a=o.count;c<a;c++)t.isMesh===!0?t.getVertexPosition(c,qn):qn.fromBufferAttribute(o,c),qn.applyMatrix4(t.matrixWorld),this.expandByPoint(qn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),xa.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),xa.copy(i.boundingBox)),xa.applyMatrix4(t.matrixWorld),this.union(xa)}let s=t.children;for(let o=0,c=s.length;o<c;o++)this.expandByObject(s[o],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,qn),qn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Kr),ya.subVectors(this.max,Kr),zs.subVectors(t.a,Kr),Vs.subVectors(t.b,Kr),Hs.subVectors(t.c,Kr),Bi.subVectors(Vs,zs),ki.subVectors(Hs,Vs),fs.subVectors(zs,Hs);let e=[0,-Bi.z,Bi.y,0,-ki.z,ki.y,0,-fs.z,fs.y,Bi.z,0,-Bi.x,ki.z,0,-ki.x,fs.z,0,-fs.x,-Bi.y,Bi.x,0,-ki.y,ki.x,0,-fs.y,fs.x,0];return!sh(e,zs,Vs,Hs,ya)||(e=[1,0,0,0,1,0,0,0,1],!sh(e,zs,Vs,Hs,ya))?!1:(_a.crossVectors(Bi,ki),e=[_a.x,_a.y,_a.z],sh(e,zs,Vs,Hs,ya))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,qn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(qn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Si[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Si[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Si[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Si[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Si[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Si[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Si[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Si[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Si),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},Si=[new K,new K,new K,new K,new K,new K,new K,new K],qn=new K,xa=new Vi,zs=new K,Vs=new K,Hs=new K,Bi=new K,ki=new K,fs=new K,Kr=new K,ya=new K,_a=new K,ds=new K;nn=new K,va=new Jt,A0=0,Ve=class extends jn{constructor(t,e,i=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:A0++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=Zh,this.updateRanges=[],this.gpuType=ei,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let s=0,o=this.itemSize;s<o;s++)this.array[t+s]=e.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)va.fromBufferAttribute(this,e),va.applyMatrix3(t),this.setXY(e,va.x,va.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)nn.fromBufferAttribute(this,e),nn.applyMatrix3(t),this.setXYZ(e,nn.x,nn.y,nn.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)nn.fromBufferAttribute(this,e),nn.applyMatrix4(t),this.setXYZ(e,nn.x,nn.y,nn.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)nn.fromBufferAttribute(this,e),nn.applyNormalMatrix(t),this.setXYZ(e,nn.x,nn.y,nn.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)nn.fromBufferAttribute(this,e),nn.transformDirection(t),this.setXYZ(e,nn.x,nn.y,nn.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=Zn(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=Oe(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Zn(e,this.array)),e}setX(t,e){return this.normalized&&(e=Oe(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Zn(e,this.array)),e}setY(t,e){return this.normalized&&(e=Oe(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Zn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Oe(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Zn(e,this.array)),e}setW(t,e){return this.normalized&&(e=Oe(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=Oe(e,this.array),i=Oe(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,s){return t*=this.itemSize,this.normalized&&(e=Oe(e,this.array),i=Oe(i,this.array),s=Oe(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,e,i,s,o){return t*=this.itemSize,this.normalized&&(e=Oe(e,this.array),i=Oe(i,this.array),s=Oe(s,this.array),o=Oe(o,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=o,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}},mo=class extends Ve{constructor(t,e,i){super(new Uint16Array(t),e,i)}},go=class extends Ve{constructor(t,e,i){super(new Uint32Array(t),e,i)}},He=class extends Ve{constructor(t,e,i){super(new Float32Array(t),e,i)}},P0=new Vi,Qr=new K,rh=new K,xs=class{constructor(t=new K,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let i=this.center;e!==void 0?i.copy(e):P0.setFromPoints(t).getCenter(i);let s=0;for(let o=0,c=t.length;o<c;o++)s=Math.max(s,i.distanceToSquared(t[o]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Qr.subVectors(t,this.center);let e=Qr.lengthSq();if(e>this.radius*this.radius){let i=Math.sqrt(e),s=(i-this.radius)*.5;this.center.addScaledVector(Qr,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(rh.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Qr.copy(t.center).add(rh)),this.expandByPoint(Qr.copy(t.center).sub(rh))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},C0=0,Hn=new Fe,oh=new rn,Gs=new K,Nn=new Vi,to=new Vi,hn=new K,We=class n extends jn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:C0++}),this.uuid=Ei(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Qm(t)?go:mo)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let o=new he().getNormalMatrix(t);i.applyNormalMatrix(o),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return Hn.makeRotationFromQuaternion(t),this.applyMatrix4(Hn),this}rotateX(t){return Hn.makeRotationX(t),this.applyMatrix4(Hn),this}rotateY(t){return Hn.makeRotationY(t),this.applyMatrix4(Hn),this}rotateZ(t){return Hn.makeRotationZ(t),this.applyMatrix4(Hn),this}translate(t,e,i){return Hn.makeTranslation(t,e,i),this.applyMatrix4(Hn),this}scale(t,e,i){return Hn.makeScale(t,e,i),this.applyMatrix4(Hn),this}lookAt(t){return oh.lookAt(t),oh.updateMatrix(),this.applyMatrix4(oh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Gs).negate(),this.translate(Gs.x,Gs.y,Gs.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let i=[];for(let s=0,o=t.length;s<o;s++){let c=t[s];i.push(c.x,c.y,c.z||0)}this.setAttribute("position",new He(i,3))}else{let i=Math.min(t.length,e.count);for(let s=0;s<i;s++){let o=t[s];e.setXYZ(s,o.x,o.y,o.z||0)}t.length>e.count&&ee("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Vi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){ie("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new K(-1/0,-1/0,-1/0),new K(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,s=e.length;i<s;i++){let o=e[i];Nn.setFromBufferAttribute(o),this.morphTargetsRelative?(hn.addVectors(this.boundingBox.min,Nn.min),this.boundingBox.expandByPoint(hn),hn.addVectors(this.boundingBox.max,Nn.max),this.boundingBox.expandByPoint(hn)):(this.boundingBox.expandByPoint(Nn.min),this.boundingBox.expandByPoint(Nn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&ie('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new xs);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){ie("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new K,1/0);return}if(t){let i=this.boundingSphere.center;if(Nn.setFromBufferAttribute(t),e)for(let o=0,c=e.length;o<c;o++){let a=e[o];to.setFromBufferAttribute(a),this.morphTargetsRelative?(hn.addVectors(Nn.min,to.min),Nn.expandByPoint(hn),hn.addVectors(Nn.max,to.max),Nn.expandByPoint(hn)):(Nn.expandByPoint(to.min),Nn.expandByPoint(to.max))}Nn.getCenter(i);let s=0;for(let o=0,c=t.count;o<c;o++)hn.fromBufferAttribute(t,o),s=Math.max(s,i.distanceToSquared(hn));if(e)for(let o=0,c=e.length;o<c;o++){let a=e[o],u=this.morphTargetsRelative;for(let f=0,d=a.count;f<d;f++)hn.fromBufferAttribute(a,f),u&&(Gs.fromBufferAttribute(t,f),hn.add(Gs)),s=Math.max(s,i.distanceToSquared(hn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&ie('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){ie("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=e.position,s=e.normal,o=e.uv,c=this.getAttribute("tangent");(c===void 0||c.count!==i.count)&&(c=new Ve(new Float32Array(4*i.count),4),this.setAttribute("tangent",c));let a=[],u=[];for(let w=0;w<i.count;w++)a[w]=new K,u[w]=new K;let f=new K,d=new K,g=new K,m=new Jt,y=new Jt,v=new Jt,b=new K,x=new K;function _(w,L,F){f.fromBufferAttribute(i,w),d.fromBufferAttribute(i,L),g.fromBufferAttribute(i,F),m.fromBufferAttribute(o,w),y.fromBufferAttribute(o,L),v.fromBufferAttribute(o,F),d.sub(f),g.sub(f),y.sub(m),v.sub(m);let B=1/(y.x*v.y-v.x*y.y);isFinite(B)&&(b.copy(d).multiplyScalar(v.y).addScaledVector(g,-y.y).multiplyScalar(B),x.copy(g).multiplyScalar(y.x).addScaledVector(d,-v.x).multiplyScalar(B),a[w].add(b),a[L].add(b),a[F].add(b),u[w].add(x),u[L].add(x),u[F].add(x))}let E=this.groups;E.length===0&&(E=[{start:0,count:t.count}]);for(let w=0,L=E.length;w<L;++w){let F=E[w],B=F.start,H=F.count;for(let G=B,z=B+H;G<z;G+=3)_(t.getX(G+0),t.getX(G+1),t.getX(G+2))}let A=new K,S=new K,R=new K,T=new K;function C(w){R.fromBufferAttribute(s,w),T.copy(R);let L=a[w];A.copy(L),A.sub(R.multiplyScalar(R.dot(L))).normalize(),S.crossVectors(T,L);let B=S.dot(u[w])<0?-1:1;c.setXYZW(w,A.x,A.y,A.z,B)}for(let w=0,L=E.length;w<L;++w){let F=E[w],B=F.start,H=F.count;for(let G=B,z=B+H;G<z;G+=3)C(t.getX(G+0)),C(t.getX(G+1)),C(t.getX(G+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==e.count)i=new Ve(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let m=0,y=i.count;m<y;m++)i.setXYZ(m,0,0,0);let s=new K,o=new K,c=new K,a=new K,u=new K,f=new K,d=new K,g=new K;if(t)for(let m=0,y=t.count;m<y;m+=3){let v=t.getX(m+0),b=t.getX(m+1),x=t.getX(m+2);s.fromBufferAttribute(e,v),o.fromBufferAttribute(e,b),c.fromBufferAttribute(e,x),d.subVectors(c,o),g.subVectors(s,o),d.cross(g),a.fromBufferAttribute(i,v),u.fromBufferAttribute(i,b),f.fromBufferAttribute(i,x),a.add(d),u.add(d),f.add(d),i.setXYZ(v,a.x,a.y,a.z),i.setXYZ(b,u.x,u.y,u.z),i.setXYZ(x,f.x,f.y,f.z)}else for(let m=0,y=e.count;m<y;m+=3)s.fromBufferAttribute(e,m+0),o.fromBufferAttribute(e,m+1),c.fromBufferAttribute(e,m+2),d.subVectors(c,o),g.subVectors(s,o),d.cross(g),i.setXYZ(m+0,d.x,d.y,d.z),i.setXYZ(m+1,d.x,d.y,d.z),i.setXYZ(m+2,d.x,d.y,d.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)hn.fromBufferAttribute(t,e),hn.normalize(),t.setXYZ(e,hn.x,hn.y,hn.z)}toNonIndexed(){function t(a,u){let f=a.array,d=a.itemSize,g=a.normalized,m=new f.constructor(u.length*d),y=0,v=0;for(let b=0,x=u.length;b<x;b++){a.isInterleavedBufferAttribute?y=u[b]*a.data.stride+a.offset:y=u[b]*d;for(let _=0;_<d;_++)m[v++]=f[y++]}return new Ve(m,d,g)}if(this.index===null)return ee("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new n,i=this.index.array,s=this.attributes;for(let a in s){let u=s[a],f=t(u,i);e.setAttribute(a,f)}let o=this.morphAttributes;for(let a in o){let u=[],f=o[a];for(let d=0,g=f.length;d<g;d++){let m=f[d],y=t(m,i);u.push(y)}e.morphAttributes[a]=u}e.morphTargetsRelative=this.morphTargetsRelative;let c=this.groups;for(let a=0,u=c.length;a<u;a++){let f=c[a];e.addGroup(f.start,f.count,f.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let u=this.parameters;for(let f in u)u[f]!==void 0&&(t[f]=u[f]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let i=this.attributes;for(let u in i){let f=i[u];t.data.attributes[u]=f.toJSON(t.data)}let s={},o=!1;for(let u in this.morphAttributes){let f=this.morphAttributes[u],d=[];for(let g=0,m=f.length;g<m;g++){let y=f[g];d.push(y.toJSON(t.data))}d.length>0&&(s[u]=d,o=!0)}o&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let c=this.groups;c.length>0&&(t.data.groups=JSON.parse(JSON.stringify(c)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let i=t.index;i!==null&&this.setIndex(i.clone());let s=t.attributes;for(let f in s){let d=s[f];this.setAttribute(f,d.clone(e))}let o=t.morphAttributes;for(let f in o){let d=[],g=o[f];for(let m=0,y=g.length;m<y;m++)d.push(g[m].clone(e));this.morphAttributes[f]=d}this.morphTargetsRelative=t.morphTargetsRelative;let c=t.groups;for(let f=0,d=c.length;f<d;f++){let g=c[f];this.addGroup(g.start,g.count,g.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let u=t.boundingSphere;return u!==null&&(this.boundingSphere=u.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},rl=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Zh,this.updateRanges=[],this.version=0,this.uuid=Ei()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,i){t*=this.stride,i*=e.stride;for(let s=0,o=this.stride;s<o;s++)this.array[t+s]=e.array[i+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ei()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(e,this.stride);return i.setUsage(this.usage),i}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ei()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let e={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return e.usage=this.usage,e}},Sn=new K,xo=class n{constructor(t,e,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,i=this.data.count;e<i;e++)Sn.fromBufferAttribute(this,e),Sn.applyMatrix4(t),this.setXYZ(e,Sn.x,Sn.y,Sn.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Sn.fromBufferAttribute(this,e),Sn.applyNormalMatrix(t),this.setXYZ(e,Sn.x,Sn.y,Sn.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Sn.fromBufferAttribute(this,e),Sn.transformDirection(t),this.setXYZ(e,Sn.x,Sn.y,Sn.z);return this}getComponent(t,e){let i=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(i=Zn(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=Oe(i,this.array)),this.data.array[t*this.data.stride+this.offset+e]=i,this}setX(t,e){return this.normalized&&(e=Oe(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=Oe(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=Oe(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=Oe(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Zn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Zn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Zn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Zn(e,this.array)),e}setXY(t,e,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=Oe(e,this.array),i=Oe(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this}setXYZ(t,e,i,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=Oe(e,this.array),i=Oe(i,this.array),s=Oe(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this}setXYZW(t,e,i,s,o){return t=t*this.data.stride+this.offset,this.normalized&&(e=Oe(e,this.array),i=Oe(i,this.array),s=Oe(s,this.array),o=Oe(o,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this.data.array[t+3]=o,this}clone(t){if(t===void 0){uo("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let o=0;o<this.itemSize;o++)e.push(this.data.array[s+o])}return new Ve(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new n(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){uo("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let o=0;o<this.itemSize;o++)e.push(this.data.array[s+o])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},ah=new K,I0=new K,R0=new he,Dn=class{constructor(t=new K(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,s){return this.normal.set(t,e,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){let s=ah.subVectors(i,e).cross(I0.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,i=!0){let s=t.delta(ah),o=this.normal.dot(s);if(o===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let c=-(t.start.dot(this.normal)+this.constant)/o;return i===!0&&(c<0||c>1)?null:e.copy(t.start).addScaledVector(s,c)}intersectsLine(t){let e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let i=e||R0.getNormalMatrix(t),s=this.coplanarPoint(ah).applyMatrix4(t),o=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(o),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},L0=0,ui=class extends jn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:L0++}),this.uuid=Ei(),this.name="",this.type="Material",this.blending=mr,this.side=ji,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Rh,this.blendDst=Lh,this.blendEquation=bs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new le(0,0,0),this.blendAlpha=0,this.depthFunc=Qs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Bd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Wa,this.stencilZFail=Wa,this.stencilZPass=Wa,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let i=t[e];if(i===void 0){ee(`Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){ee(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector2&&i&&i.isVector2||s&&s.isEuler&&i&&i.isEuler||s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(o=>o.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(o){let c=[];for(let a in o){let u=o[a];delete u.metadata,c.push(u)}return c}if(e){let o=s(t.textures),c=s(t.images);o.length>0&&(i.textures=o),c.length>0&&(i.images=c)}return i}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new le().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(i=>new Dn().fromJSON(i))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let i=t.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new Jt().fromArray(i)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Jt().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,i=null;if(e!==null){let s=e.length;i=new Array(s);for(let o=0;o!==s;++o)i[o]=e[o].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},or=class extends ui{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new le(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},eo=new K,Ws=new K,Ys=new K,$s=new Jt,no=new Jt,Jd=new Fe,ba=new K,io=new K,Ma=new K,Wf=new Jt,lh=new Jt,Yf=new Jt,yo=class extends rn{constructor(t=new or){if(super(),this.isSprite=!0,this.type="Sprite",Xs===void 0){Xs=new We;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new rl(e,5);Xs.setIndex([0,1,2,0,2,3]),Xs.setAttribute("position",new xo(i,3,0,!1)),Xs.setAttribute("uv",new xo(i,2,3,!1))}this.geometry=Xs,this.material=t,this.center=new Jt(.5,.5),this.count=1}intersectsFrustum(t){return t.intersectsSprite(this)}raycast(t,e){t.camera===null&&ie('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Ws.setFromMatrixScale(this.matrixWorld),Jd.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Ys.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Ws.multiplyScalar(-Ys.z);let i=this.material.rotation,s,o;i!==0&&(o=Math.cos(i),s=Math.sin(i));let c=this.center;Sa(ba.set(-.5,-.5,0),Ys,c,Ws,s,o),Sa(io.set(.5,-.5,0),Ys,c,Ws,s,o),Sa(Ma.set(.5,.5,0),Ys,c,Ws,s,o),Wf.set(0,0),lh.set(1,0),Yf.set(1,1);let a=t.ray.intersectTriangle(ba,io,Ma,!1,eo);if(a===null&&(Sa(io.set(-.5,.5,0),Ys,c,Ws,s,o),lh.set(0,1),a=t.ray.intersectTriangle(ba,Ma,io,!1,eo),a===null))return;let u=t.ray.origin.distanceTo(eo);u<t.near||u>t.far||e.push({distance:u,point:eo.clone(),uv:li.getInterpolation(eo,ba,io,Ma,Wf,lh,Yf,new Jt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};wi=new K,ch=new K,wa=new K,Ea=new K,Hi=class{constructor(t=new K,e=new K(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,wi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=wi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(wi.copy(this.origin).addScaledVector(this.direction,e),wi.distanceToSquared(t))}distanceSqToSegment(t,e,i,s){ch.copy(t).add(e).multiplyScalar(.5),wa.copy(e).sub(t).normalize(),Ea.copy(this.origin).sub(ch);let o=t.distanceTo(e)*.5,c=-this.direction.dot(wa),a=Ea.dot(this.direction),u=-Ea.dot(wa),f=Ea.lengthSq(),d=Math.abs(1-c*c),g,m,y,v;if(d>0)if(g=c*u-a,m=c*a-u,v=o*d,g>=0)if(m>=-v)if(m<=v){let b=1/d;g*=b,m*=b,y=g*(g+c*m+2*a)+m*(c*g+m+2*u)+f}else m=o,g=Math.max(0,-(c*m+a)),y=-g*g+m*(m+2*u)+f;else m=-o,g=Math.max(0,-(c*m+a)),y=-g*g+m*(m+2*u)+f;else m<=-v?(g=Math.max(0,-(-c*o+a)),m=g>0?-o:Math.min(Math.max(-o,-u),o),y=-g*g+m*(m+2*u)+f):m<=v?(g=0,m=Math.min(Math.max(-o,-u),o),y=m*(m+2*u)+f):(g=Math.max(0,-(c*o+a)),m=g>0?o:Math.min(Math.max(-o,-u),o),y=-g*g+m*(m+2*u)+f);else m=c>0?-o:o,g=Math.max(0,-(c*m+a)),y=-g*g+m*(m+2*u)+f;return i&&i.copy(this.origin).addScaledVector(this.direction,g),s&&s.copy(ch).addScaledVector(wa,m),y}intersectSphere(t,e){if(t.radius<0)return null;wi.subVectors(t.center,this.origin);let i=wi.dot(this.direction),s=wi.dot(wi)-i*i,o=t.radius*t.radius;if(s>o)return null;let c=Math.sqrt(o-s),a=i-c,u=i+c;return u<0?null:a<0?this.at(u,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){let i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,s,o,c,a,u,f=1/this.direction.x,d=1/this.direction.y,g=1/this.direction.z,m=this.origin;return f>=0?(i=(t.min.x-m.x)*f,s=(t.max.x-m.x)*f):(i=(t.max.x-m.x)*f,s=(t.min.x-m.x)*f),d>=0?(o=(t.min.y-m.y)*d,c=(t.max.y-m.y)*d):(o=(t.max.y-m.y)*d,c=(t.min.y-m.y)*d),i>c||o>s||((o>i||isNaN(i))&&(i=o),(c<s||isNaN(s))&&(s=c),g>=0?(a=(t.min.z-m.z)*g,u=(t.max.z-m.z)*g):(a=(t.max.z-m.z)*g,u=(t.min.z-m.z)*g),i>u||a>s)||((a>i||i!==i)&&(i=a),(u<s||s!==s)&&(s=u),s<0)?null:this.at(i>=0?i:s,e)}intersectsBox(t){return this.intersectBox(t,wi)!==null}intersectTriangle(t,e,i,s,o){let c=this.origin,a=this.direction,u=a.x,f=a.y,d=a.z,g=t.x-c.x,m=t.y-c.y,y=t.z-c.z,v=e.x-c.x,b=e.y-c.y,x=e.z-c.z,_=i.x-c.x,E=i.y-c.y,A=i.z-c.z,S=Math.abs(u),R=Math.abs(f),T=Math.abs(d),C,w,L,F,B,H,G,z,$,Y,k,j;if(S>=R&&S>=T?(L=u,H=g,$=v,j=_,u>=0?(C=f,w=d,F=m,B=y,G=b,z=x,Y=E,k=A):(C=d,w=f,F=y,B=m,G=x,z=b,Y=A,k=E)):R>=T?(L=f,H=m,$=b,j=E,f>=0?(C=d,w=u,F=y,B=g,G=x,z=v,Y=A,k=_):(C=u,w=d,F=g,B=y,G=v,z=x,Y=_,k=A)):(L=d,H=y,$=x,j=A,d>=0?(C=u,w=f,F=g,B=m,G=v,z=b,Y=_,k=E):(C=f,w=u,F=m,B=g,G=b,z=v,Y=E,k=_)),L===0)return null;let Z=C/L,st=w/L,ot=1/L,St=F-Z*H,wt=B-st*H,Yt=G-Z*$,Kt=z-st*$,se=Y-Z*j,ct=k-st*j,pt=se*Kt-ct*Yt,kt=St*ct-wt*se,re=Yt*wt-Kt*St;if(s){if(pt<0||kt<0||re<0)return null}else if((pt<0||kt<0||re<0)&&(pt>0||kt>0||re>0))return null;let Dt=pt+kt+re;if(Dt===0)return null;let de=ot*(pt*H+kt*$+re*j);return(Dt>0?de<0:de>0)?null:this.at(de/Dt,o)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Fn=class extends ui{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new le(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ai,this.combine=Nh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},$f=new Fe,ps=new Hi,Ta=new xs,qf=new K,Aa=new K,Pa=new K,Ca=new K,hh=new K,Ia=new K,Zf=new K,Ra=new K,Ae=class extends rn{constructor(t=new We,e=new Fn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,c=s.length;o<c;o++){let a=s[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}getVertexPosition(t,e){let i=this.geometry,s=i.attributes.position,o=i.morphAttributes.position,c=i.morphTargetsRelative;e.fromBufferAttribute(s,t);let a=this.morphTargetInfluences;if(o&&a){Ia.set(0,0,0);for(let u=0,f=o.length;u<f;u++){let d=a[u],g=o[u];d!==0&&(hh.fromBufferAttribute(g,t),c?Ia.addScaledVector(hh,d):Ia.addScaledVector(hh.sub(e),d))}e.add(Ia)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let i=this.geometry,s=this.material,o=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Ta.copy(i.boundingSphere),Ta.applyMatrix4(o),ps.copy(t.ray).recast(t.near),!(Ta.containsPoint(ps.origin)===!1&&(ps.intersectSphere(Ta,qf)===null||ps.origin.distanceToSquared(qf)>(t.far-t.near)**2))&&($f.copy(o).invert(),ps.copy(t.ray).applyMatrix4($f),!(i.boundingBox!==null&&ps.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,ps)))}_computeIntersections(t,e,i){let s,o=this.geometry,c=this.material,a=o.index,u=o.attributes.position,f=o.attributes.uv,d=o.attributes.uv1,g=o.attributes.normal,m=o.groups,y=o.drawRange;if(a!==null)if(Array.isArray(c))for(let v=0,b=m.length;v<b;v++){let x=m[v],_=c[x.materialIndex],E=Math.max(x.start,y.start),A=Math.min(a.count,Math.min(x.start+x.count,y.start+y.count));for(let S=E,R=A;S<R;S+=3){let T=a.getX(S),C=a.getX(S+1),w=a.getX(S+2);s=La(this,_,t,i,f,d,g,T,C,w),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=x.materialIndex,e.push(s))}}else{let v=Math.max(0,y.start),b=Math.min(a.count,y.start+y.count);for(let x=v,_=b;x<_;x+=3){let E=a.getX(x),A=a.getX(x+1),S=a.getX(x+2);s=La(this,c,t,i,f,d,g,E,A,S),s&&(s.faceIndex=Math.floor(x/3),e.push(s))}}else if(u!==void 0)if(Array.isArray(c))for(let v=0,b=m.length;v<b;v++){let x=m[v],_=c[x.materialIndex],E=Math.max(x.start,y.start),A=Math.min(u.count,Math.min(x.start+x.count,y.start+y.count));for(let S=E,R=A;S<R;S+=3){let T=S,C=S+1,w=S+2;s=La(this,_,t,i,f,d,g,T,C,w),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=x.materialIndex,e.push(s))}}else{let v=Math.max(0,y.start),b=Math.min(u.count,y.start+y.count);for(let x=v,_=b;x<_;x+=3){let E=x,A=x+1,S=x+2;s=La(this,c,t,i,f,d,g,E,A,S),s&&(s.faceIndex=Math.floor(x/3),e.push(s))}}}};ol=class extends En{constructor(t=null,e=1,i=1,s,o,c,a,u,f=un,d=un,g,m){super(null,c,a,u,f,d,s,o,g,m),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},ms=new xs,D0=new Jt(.5,.5),Na=new K,ar=class{constructor(t=new Dn,e=new Dn,i=new Dn,s=new Dn,o=new Dn,c=new Dn){this.planes=[t,e,i,s,o,c]}set(t,e,i,s,o,c){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(i),a[3].copy(s),a[4].copy(o),a[5].copy(c),this}copy(t){let e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=Jn,i=!1){let s=this.planes,o=t.elements,c=o[0],a=o[1],u=o[2],f=o[3],d=o[4],g=o[5],m=o[6],y=o[7],v=o[8],b=o[9],x=o[10],_=o[11],E=o[12],A=o[13],S=o[14],R=o[15];if(s[0].setComponents(f-c,y-d,_-v,R-E).normalize(),s[1].setComponents(f+c,y+d,_+v,R+E).normalize(),s[2].setComponents(f+a,y+g,_+b,R+A).normalize(),s[3].setComponents(f-a,y-g,_-b,R-A).normalize(),i)s[4].setComponents(u,m,x,S).normalize(),s[5].setComponents(f-u,y-m,_-x,R-S).normalize();else if(s[4].setComponents(f-u,y-m,_-x,R-S).normalize(),e===Jn)s[5].setComponents(f+u,y+m,_+x,R+S).normalize();else if(e===tr)s[5].setComponents(u,m,x,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ms.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),ms.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ms)}intersectsSprite(t){ms.center.set(0,0,0);let e=D0.distanceTo(t.center);return ms.radius=.7071067811865476+e,ms.applyMatrix4(t.matrixWorld),this.intersectsSphere(ms)}intersectsSphere(t){let e=this.planes,i=t.center,s=-t.radius;for(let o=0;o<6;o++)if(e[o].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let i=0;i<6;i++){let s=e[i];if(Na.x=s.normal.x>0?t.max.x:t.min.x,Na.y=s.normal.y>0?t.max.y:t.min.y,Na.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Na)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},Kn=class extends ui{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new le(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},al=new K,ll=new K,Jf=new Fe,so=new Hi,Da=new xs,uh=new K,jf=new K,ys=class extends rn{constructor(t=new We,e=new Kn){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,i=[0];for(let s=1,o=e.count;s<o;s++)al.fromBufferAttribute(e,s-1),ll.fromBufferAttribute(e,s),i[s]=i[s-1],i[s]+=al.distanceTo(ll);t.setAttribute("lineDistance",new He(i,1))}else ee("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let i=this.geometry,s=this.matrixWorld,o=t.params.Line.threshold,c=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Da.copy(i.boundingSphere),Da.applyMatrix4(s),Da.radius+=o,t.ray.intersectsSphere(Da)===!1)return;Jf.copy(s).invert(),so.copy(t.ray).applyMatrix4(Jf);let a=o/((this.scale.x+this.scale.y+this.scale.z)/3),u=a*a,f=this.isLineSegments?2:1,d=i.index,m=i.attributes.position;if(d!==null){let y=Math.max(0,c.start),v=Math.min(d.count,c.start+c.count);for(let b=y,x=v-1;b<x;b+=f){let _=d.getX(b),E=d.getX(b+1),A=Oa(this,t,so,u,_,E,b);A&&e.push(A)}if(this.isLineLoop){let b=d.getX(v-1),x=d.getX(y),_=Oa(this,t,so,u,b,x,v-1);_&&e.push(_)}}else{let y=Math.max(0,c.start),v=Math.min(m.count,c.start+c.count);for(let b=y,x=v-1;b<x;b+=f){let _=Oa(this,t,so,u,b,b+1,b);_&&e.push(_)}if(this.isLineLoop){let b=Oa(this,t,so,u,v-1,y,v-1);b&&e.push(b)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,c=s.length;o<c;o++){let a=s[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}};Kf=new K,Qf=new K,_s=class extends ys{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,i=[];for(let s=0,o=e.count;s<o;s+=2)Kf.fromBufferAttribute(e,s),Qf.fromBufferAttribute(e,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+Kf.distanceTo(Qf);t.setAttribute("lineDistance",new He(i,1))}else ee("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},_o=class extends En{constructor(t=[],e=Ki,i,s,o,c,a,u,f,d){super(t,e,i,s,o,c,a,u,f,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},vo=class extends En{constructor(t,e,i,s,o,c,a,u,f){super(t,e,i,s,o,c,a,u,f),this.isCanvasTexture=!0,this.needsUpdate=!0}},Gi=class extends En{constructor(t,e,i=ti,s,o,c,a=un,u=un,f,d=hi,g=1){if(d!==hi&&d!==ts)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let m={width:t,height:e,depth:g};super(m,s,o,c,a,u,d,i,f),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new ir(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},cl=class extends Gi{constructor(t,e=ti,i=Ki,s,o,c=un,a=un,u,f=hi){let d={width:t,height:t,depth:1},g=[d,d,d,d,d,d];super(t,t,e,i,s,o,c,a,u,f),this.image=g,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},bo=class extends En{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},Xi=class n extends We{constructor(t=1,e=1,i=1,s=1,o=1,c=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:s,heightSegments:o,depthSegments:c};let a=this;s=Math.floor(s),o=Math.floor(o),c=Math.floor(c);let u=[],f=[],d=[],g=[],m=0,y=0;v("z","y","x",-1,-1,i,e,t,c,o,0),v("z","y","x",1,-1,i,e,-t,c,o,1),v("x","z","y",1,1,t,i,e,s,c,2),v("x","z","y",1,-1,t,i,-e,s,c,3),v("x","y","z",1,-1,t,e,i,s,o,4),v("x","y","z",-1,-1,t,e,-i,s,o,5),this.setIndex(u),this.setAttribute("position",new He(f,3)),this.setAttribute("normal",new He(d,3)),this.setAttribute("uv",new He(g,2));function v(b,x,_,E,A,S,R,T,C,w,L){let F=S/C,B=R/w,H=S/2,G=R/2,z=T/2,$=C+1,Y=w+1,k=0,j=0,Z=new K;for(let st=0;st<Y;st++){let ot=st*B-G;for(let St=0;St<$;St++){let wt=St*F-H;Z[b]=wt*E,Z[x]=ot*A,Z[_]=z,f.push(Z.x,Z.y,Z.z),Z[b]=0,Z[x]=0,Z[_]=T>0?1:-1,d.push(Z.x,Z.y,Z.z),g.push(St/C),g.push(1-st/w),k+=1}}for(let st=0;st<w;st++)for(let ot=0;ot<C;ot++){let St=m+ot+$*st,wt=m+ot+$*(st+1),Yt=m+(ot+1)+$*(st+1),Kt=m+(ot+1)+$*st;u.push(St,wt,Kt),u.push(wt,Yt,Kt),j+=6}a.addGroup(y,j,L),y+=j,m+=k}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}},fi=class n extends We{constructor(t=1,e=1,i=1,s=32,o=1,c=!1,a=0,u=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:s,heightSegments:o,openEnded:c,thetaStart:a,thetaLength:u};let f=this;s=Math.floor(s),o=Math.floor(o);let d=[],g=[],m=[],y=[],v=0,b=[],x=i/2,_=0;E(),c===!1&&(t>0&&A(!0),e>0&&A(!1)),this.setIndex(d),this.setAttribute("position",new He(g,3)),this.setAttribute("normal",new He(m,3)),this.setAttribute("uv",new He(y,2));function E(){let S=new K,R=new K,T=0,C=(e-t)/i;for(let w=0;w<=o;w++){let L=[],F=w/o,B=F*(e-t)+t;for(let H=0;H<=s;H++){let G=H/s,z=G*u+a,$=Math.sin(z),Y=Math.cos(z);R.x=B*$,R.y=-F*i+x,R.z=B*Y,g.push(R.x,R.y,R.z),S.set($,C,Y).normalize(),m.push(S.x,S.y,S.z),y.push(G,1-F),L.push(v++)}b.push(L)}for(let w=0;w<s;w++)for(let L=0;L<o;L++){let F=b[L][w],B=b[L+1][w],H=b[L+1][w+1],G=b[L][w+1];(t>0||L!==0)&&(d.push(F,B,G),T+=3),(e>0||L!==o-1)&&(d.push(B,H,G),T+=3)}f.addGroup(_,T,0),_+=T}function A(S){let R=v,T=new Jt,C=new K,w=0,L=S===!0?t:e,F=S===!0?1:-1;for(let H=1;H<=s;H++)g.push(0,x*F,0),m.push(0,F,0),y.push(.5,.5),v++;let B=v;for(let H=0;H<=s;H++){let z=H/s*u+a,$=Math.cos(z),Y=Math.sin(z);C.x=L*Y,C.y=x*F,C.z=L*$,g.push(C.x,C.y,C.z),m.push(0,F,0),T.x=$*.5+.5,T.y=Y*.5*F+.5,y.push(T.x,T.y),v++}for(let H=0;H<s;H++){let G=R+H,z=B+H;S===!0?d.push(z,z+1,G):d.push(z+1,z,G),w+=3}f.addGroup(_,w,S===!0?1:2),_+=w}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},lr=class n extends fi{constructor(t=1,e=1,i=32,s=1,o=!1,c=0,a=Math.PI*2){super(0,t,e,i,s,o,c,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:i,heightSegments:s,openEnded:o,thetaStart:c,thetaLength:a}}static fromJSON(t){return new n(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Fa=new K,Ua=new K,fh=new K,Ba=new li,cr=class extends We{constructor(t=null,e=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:t,thresholdAngle:e},t!==null){let s=Math.pow(10,4),o=Math.cos(js*e),c=t.getIndex(),a=t.getAttribute("position"),u=c?c.count:a.count,f=[0,0,0],d=["a","b","c"],g=new Array(3),m={},y=[];for(let v=0;v<u;v+=3){c?(f[0]=c.getX(v),f[1]=c.getX(v+1),f[2]=c.getX(v+2)):(f[0]=v,f[1]=v+1,f[2]=v+2);let{a:b,b:x,c:_}=Ba;if(b.fromBufferAttribute(a,f[0]),x.fromBufferAttribute(a,f[1]),_.fromBufferAttribute(a,f[2]),Ba.getNormal(fh),g[0]=`${Math.round(b.x*s)},${Math.round(b.y*s)},${Math.round(b.z*s)}`,g[1]=`${Math.round(x.x*s)},${Math.round(x.y*s)},${Math.round(x.z*s)}`,g[2]=`${Math.round(_.x*s)},${Math.round(_.y*s)},${Math.round(_.z*s)}`,!(g[0]===g[1]||g[1]===g[2]||g[2]===g[0]))for(let E=0;E<3;E++){let A=(E+1)%3,S=g[E],R=g[A],T=Ba[d[E]],C=Ba[d[A]],w=`${S}_${R}`,L=`${R}_${S}`;L in m&&m[L]?(fh.dot(m[L].normal)<=o&&(y.push(T.x,T.y,T.z),y.push(C.x,C.y,C.z)),m[L]=null):w in m||(m[w]={index0:f[E],index1:f[A],normal:fh.clone()})}}for(let v in m)if(m[v]){let{index0:b,index1:x}=m[v];Fa.fromBufferAttribute(a,b),Ua.fromBufferAttribute(a,x),y.push(Fa.x,Fa.y,Fa.z),y.push(Ua.x,Ua.y,Ua.z)}this.setAttribute("position",new He(y,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}};Mh=class{static triangulate(t,e,i=2){return O0(t,e,i)}},Eo=class n{static area(t){let e=t.length,i=0;for(let s=e-1,o=0;o<e;s=o++)i+=t[s].x*t[o].y-t[o].x*t[s].y;return i*.5}static isClockWise(t){return n.area(t)<0}static triangulateShape(t,e){let i=[],s=[],o=[];ed(t),nd(i,t);let c=t.length;e.forEach(ed);for(let u=0;u<e.length;u++)s.push(c),c+=e[u].length,nd(i,e[u]);let a=Mh.triangulate(i,s);for(let u=0;u<a.length;u+=3)o.push(a.slice(u,u+3));return o}};To=class n extends We{constructor(t=1,e=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:s};let o=t/2,c=e/2,a=Math.floor(i),u=Math.floor(s),f=a+1,d=u+1,g=t/a,m=e/u,y=[],v=[],b=[],x=[];for(let _=0;_<d;_++){let E=_*m-c;for(let A=0;A<f;A++){let S=A*g-o;v.push(S,-E,0),b.push(0,0,1),x.push(A/a),x.push(1-_/u)}}for(let _=0;_<u;_++)for(let E=0;E<a;E++){let A=E+f*_,S=E+f*(_+1),R=E+1+f*(_+1),T=E+1+f*_;y.push(A,S,T),y.push(S,R,T)}this.setIndex(y),this.setAttribute("position",new He(v,3)),this.setAttribute("normal",new He(b,3)),this.setAttribute("uv",new He(x,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.widthSegments,t.heightSegments)}},Ao=class n extends We{constructor(t=.5,e=1,i=32,s=1,o=0,c=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:i,phiSegments:s,thetaStart:o,thetaLength:c},i=Math.max(3,i),s=Math.max(1,s);let a=[],u=[],f=[],d=[],g=t,m=(e-t)/s,y=new K,v=new Jt;for(let b=0;b<=s;b++){for(let x=0;x<=i;x++){let _=o+x/i*c;y.x=g*Math.cos(_),y.y=g*Math.sin(_),u.push(y.x,y.y,y.z),f.push(0,0,1),v.x=(y.x/e+1)/2,v.y=(y.y/e+1)/2,d.push(v.x,v.y)}g+=m}for(let b=0;b<s;b++){let x=b*(i+1);for(let _=0;_<i;_++){let E=_+x,A=E,S=E+i+1,R=E+i+2,T=E+1;a.push(A,S,T),a.push(S,R,T)}}this.setIndex(a),this.setAttribute("position",new He(u,3)),this.setAttribute("normal",new He(f,3)),this.setAttribute("uv",new He(d,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}},Wi=class n extends We{constructor(t=1,e=32,i=16,s=0,o=Math.PI*2,c=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:s,phiLength:o,thetaStart:c,thetaLength:a},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));let u=Math.min(c+a,Math.PI),f=0,d=[],g=new K,m=new K,y=[],v=[],b=[],x=[];for(let _=0;_<=i;_++){let E=[],A=_/i,S=c+A*a,R=t*Math.cos(S),T=Math.sqrt(t*t-R*R),C=0;_===0&&c===0?C=.5/e:_===i&&u===Math.PI&&(C=-.5/e);for(let w=0;w<=e;w++){let L=w/e,F=s+L*o;g.x=-T*Math.cos(F),g.y=R,g.z=T*Math.sin(F),v.push(g.x,g.y,g.z),m.copy(g).normalize(),b.push(m.x,m.y,m.z),x.push(L+C,1-A),E.push(f++)}d.push(E)}for(let _=0;_<i;_++)for(let E=0;E<e;E++){let A=d[_][E+1],S=d[_][E],R=d[_+1][E],T=d[_+1][E+1];(_!==0||c>0)&&y.push(A,S,T),(_!==i-1||u<Math.PI)&&y.push(S,R,T)}this.setIndex(y),this.setAttribute("position",new He(v,3)),this.setAttribute("normal",new He(b,3)),this.setAttribute("uv",new He(x,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};ep={clone:ws,merge:bn},Q0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,tg=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Un=class extends ui{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Q0,this.fragmentShader=tg,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ws(t.uniforms),this.uniformsGroups=K0(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let c=this.uniforms[s].value;c&&c.isTexture?e.uniforms[s]={type:"t",value:c.toJSON(t).uuid}:c&&c.isColor?e.uniforms[s]={type:"c",value:c.getHex()}:c&&c.isVector2?e.uniforms[s]={type:"v2",value:c.toArray()}:c&&c.isVector3?e.uniforms[s]={type:"v3",value:c.toArray()}:c&&c.isVector4?e.uniforms[s]={type:"v4",value:c.toArray()}:c&&c.isMatrix3?e.uniforms[s]={type:"m3",value:c.toArray()}:c&&c.isMatrix4?e.uniforms[s]={type:"m4",value:c.toArray()}:e.uniforms[s]={value:c}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let i in t.uniforms){let s=t.uniforms[i];switch(this.uniforms[i]={},s.type){case"t":this.uniforms[i].value=e[s.value]||null;break;case"c":this.uniforms[i].value=new le().setHex(s.value);break;case"v2":this.uniforms[i].value=new Jt().fromArray(s.value);break;case"v3":this.uniforms[i].value=new K().fromArray(s.value);break;case"v4":this.uniforms[i].value=new qe().fromArray(s.value);break;case"m3":this.uniforms[i].value=new he().fromArray(s.value);break;case"m4":this.uniforms[i].value=new Fe().fromArray(s.value);break;default:this.uniforms[i].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let i in t.extensions)this.extensions[i]=t.extensions[i];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},hl=class extends Un{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Bn=class extends ui{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new le(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new le(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=uc,this.normalScale=new Jt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ai,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},ul=class extends ui{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Fd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},fl=class extends ui{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},Po=class extends Kn{constructor(t){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(t)}copy(t){return super.copy(t),this.scale=t.scale,this.dashSize=t.dashSize,this.gapSize=t.gapSize,this}};Yi=class{constructor(t,e,i,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(i),this.sampleValues=e,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,i=this._cachedIndex,s=e[i],o=e[i-1];n:{t:{let c;e:{i:if(!(t<s)){for(let a=i+2;;){if(s===void 0){if(t<o)break i;return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(o=s,s=e[++i],t<s)break t}c=e.length;break e}if(!(t>=o)){let a=e[1];t<a&&(i=2,o=a);for(let u=i-2;;){if(o===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===u)break;if(s=o,o=e[--i-1],t>=o)break t}c=i,i=0;break e}break n}for(;i<c;){let a=i+c>>>1;t<e[a]?c=a:i=a+1}if(s=e[i],o=e[i-1],o===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,o,s)}return this.interpolate_(i,o,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,i=this.sampleValues,s=this.valueSize,o=t*s;for(let c=0;c!==s;++c)e[c]=i[o+c];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},dl=class extends Yi{constructor(t,e,i,s){super(t,e,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:xh,endingEnd:xh}}intervalChanged_(t,e,i){let s=this.parameterPositions,o=t-2,c=t+1,a=s[o],u=s[c];if(a===void 0)switch(this.getSettings_().endingStart){case yh:o=t,a=2*e-i;break;case _h:o=s.length-2,a=e+s[o]-s[o+1];break;default:o=t,a=i}if(u===void 0)switch(this.getSettings_().endingEnd){case yh:c=t,u=2*i-e;break;case _h:c=1,u=i+s[1]-s[0];break;default:c=t-1,u=e}let f=(i-e)*.5,d=this.valueSize;this._weightPrev=f/(e-a),this._weightNext=f/(u-i),this._offsetPrev=o*d,this._offsetNext=c*d}interpolate_(t,e,i,s){let o=this.resultBuffer,c=this.sampleValues,a=this.valueSize,u=t*a,f=u-a,d=this._offsetPrev,g=this._offsetNext,m=this._weightPrev,y=this._weightNext,v=(i-e)/(s-e),b=v*v,x=b*v,_=-m*x+2*m*b-m*v,E=(1+m)*x+(-1.5-2*m)*b+(-.5+m)*v+1,A=(-1-y)*x+(1.5+y)*b+.5*v,S=y*x-y*b;for(let R=0;R!==a;++R)o[R]=_*c[d+R]+E*c[f+R]+A*c[u+R]+S*c[g+R];return o}},pl=class extends Yi{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){let o=this.resultBuffer,c=this.sampleValues,a=this.valueSize,u=t*a,f=u-a,d=(i-e)/(s-e),g=1-d;for(let m=0;m!==a;++m)o[m]=c[f+m]*g+c[u+m]*d;return o}},ml=class extends Yi{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t){return this.copySampleValue_(t-1)}},gl=class extends Yi{interpolate_(t,e,i,s){let o=this.resultBuffer,c=this.sampleValues,a=this.valueSize,u=t*a,f=u-a,d=this.inTangents,g=this.outTangents;if(!d||!g){let v=(i-e)/(s-e),b=1-v;for(let x=0;x!==a;++x)o[x]=c[f+x]*b+c[u+x]*v;return o}let m=a*2,y=t-1;for(let v=0;v!==a;++v){let b=c[f+v],x=c[u+v],_=y*m+v*2,E=g[_],A=g[_+1],S=t*m+v*2,R=d[S],T=d[S+1],C=ng(i,e,E,R,s);o[v]=np(C,b,A,T,x)}return o}};kn=class{constructor(t,e,i,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=qs(e,this.TimeBufferType),this.values=qs(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,i;if(e.toJSON!==this.toJSON)i=e.toJSON(t);else{i={name:t.name,times:qs(t.times,Array),values:qs(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(i.interpolation=s),dh(t.settings)&&(i.settings={inTangents:qs(t.settings.inTangents,Array),outTangents:qs(t.settings.outTangents,Array)})}return i.type=t.ValueTypeName,i}InterpolantFactoryMethodDiscrete(t){return new ml(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new pl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new dl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new gl(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case ao:e=this.InterpolantFactoryMethodDiscrete;break;case el:e=this.InterpolantFactoryMethodLinear;break;case Xa:e=this.InterpolantFactoryMethodSmooth;break;case gh:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return ee("KeyframeTrack:",i),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ao;case this.InterpolantFactoryMethodLinear:return el;case this.InterpolantFactoryMethodSmooth:return Xa;case this.InterpolantFactoryMethodBezier:return gh}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]*=t;dh(this.settings)&&(sd(this.settings.inTangents,t),sd(this.settings.outTangents,t))}return this}trim(t,e){let i=this.times,s=i.length,o=0,c=s-1;for(;o!==s&&i[o]<t;)++o;for(;c!==-1&&i[c]>e;)--c;if(++c,o!==0||c!==s){o>=c&&(c=Math.max(c,1),o=c-1);let a=this.getValueSize();this.times=i.slice(o,c),this.values=this.values.slice(o*a,c*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(ie("KeyframeTrack: Invalid value size in track.",this),t=!1);let i=this.times,s=this.values,o=i.length;o===0&&(ie("KeyframeTrack: Track is empty.",this),t=!1);let c=null;for(let a=0;a!==o;a++){let u=i[a];if(typeof u=="number"&&isNaN(u)){ie("KeyframeTrack: Time is not a valid number.",this,a,u),t=!1;break}if(c!==null&&c>u){ie("KeyframeTrack: Out of order keys.",this,a,u,c),t=!1;break}c=u}if(s!==void 0&&t0(s))for(let a=0,u=s.length;a!==u;++a){let f=s[a];if(isNaN(f)){ie("KeyframeTrack: Value is not a valid number.",this,a,f),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===Xa,o=t.length-1,c=1;for(let a=1;a<o;++a){let u=!1,f=t[a],d=t[a+1];if(f!==d&&(a!==1||f!==t[0]))if(s)u=!0;else{let g=a*i,m=g-i,y=g+i;for(let v=0;v!==i;++v){let b=e[g+v];if(b!==e[m+v]||b!==e[y+v]){u=!0;break}}}if(u){if(a!==c){t[c]=t[a];let g=a*i,m=c*i;for(let y=0;y!==i;++y)e[m+y]=e[g+y]}++c}}if(o>0){t[c]=t[o];for(let a=o*i,u=c*i,f=0;f!==i;++f)e[u+f]=e[a+f];++c}return c!==t.length?(this.times=t.slice(0,c),this.values=e.slice(0,c*i)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),i=this.constructor,s=new i(this.name,t,e);return s.createInterpolant=this.createInterpolant,dh(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};kn.prototype.ValueTypeName="";kn.prototype.TimeBufferType=Float32Array;kn.prototype.ValueBufferType=Float32Array;kn.prototype.DefaultInterpolation=el;$i=class extends kn{constructor(t,e,i){super(t,e,i)}};$i.prototype.ValueTypeName="bool";$i.prototype.ValueBufferType=Array;$i.prototype.DefaultInterpolation=ao;$i.prototype.InterpolantFactoryMethodLinear=void 0;$i.prototype.InterpolantFactoryMethodSmooth=void 0;xl=class extends kn{constructor(t,e,i,s){super(t,e,i,s)}};xl.prototype.ValueTypeName="color";yl=class extends kn{constructor(t,e,i,s){super(t,e,i,s)}};yl.prototype.ValueTypeName="number";_l=class extends Yi{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){let o=this.resultBuffer,c=this.sampleValues,a=this.valueSize,u=(i-e)/(s-e),f=t*a;for(let d=f+a;f!==d;f+=4)On.slerpFlat(o,0,c,f-a,c,f,u);return o}},Co=class extends kn{constructor(t,e,i,s){super(t,e,i,s)}InterpolantFactoryMethodLinear(t){return new _l(this.times,this.values,this.getValueSize(),t)}};Co.prototype.ValueTypeName="quaternion";Co.prototype.InterpolantFactoryMethodSmooth=void 0;qi=class extends kn{constructor(t,e,i){super(t,e,i)}};qi.prototype.ValueTypeName="string";qi.prototype.ValueBufferType=Array;qi.prototype.DefaultInterpolation=ao;qi.prototype.InterpolantFactoryMethodLinear=void 0;qi.prototype.InterpolantFactoryMethodSmooth=void 0;vl=class extends kn{constructor(t,e,i,s){super(t,e,i,s)}};vl.prototype.ValueTypeName="vector";bl=class{constructor(t,e,i){let s=this,o=!1,c=0,a=0,u,f=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this._abortController=null,this.itemStart=function(d){a++,o===!1&&s.onStart!==void 0&&s.onStart(d,c,a),o=!0},this.itemEnd=function(d){c++,s.onProgress!==void 0&&s.onProgress(d,c,a),c===a&&(o=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(d){s.onError!==void 0&&s.onError(d)},this.resolveURL=function(d){return d=d.normalize("NFC"),u?u(d):d},this.setURLModifier=function(d){return u=d,this},this.addHandler=function(d,g){return f.push(d,g),this},this.removeHandler=function(d){let g=f.indexOf(d);return g!==-1&&f.splice(g,2),this},this.getHandler=function(d){for(let g=0,m=f.length;g<m;g+=2){let y=f[g],v=f[g+1];if(y.global&&(y.lastIndex=0),y.test(d))return v}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},ip=new bl,Ml=class{constructor(t){this.manager=t!==void 0?t:ip,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let i=this;return new Promise(function(s,o){i.load(t,s,e,o)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};Ml.DEFAULT_MATERIAL_NAME="__DEFAULT";Io=class extends rn{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new le(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},Ro=class extends Io{constructor(t,e,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(rn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new le(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},ph=new Fe,rd=new K,od=new K,Sl=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Jt(512,512),this.mapType=In,this.map=null,this.mapPass=null,this.matrix=new Fe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ar,this._frameExtents=new Jt(1,1),this._viewportCount=1,this._viewports=[new qe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;rd.setFromMatrixPosition(t.matrixWorld),e.position.copy(rd),od.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(od),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,i,s){ph.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),i.setFromProjectionMatrix(ph,t.coordinateSystem,t.reversedDepth);let o=this._frameExtents,c=s?s.z/o.x:1,a=s?s.w/o.y:1,u=s?s.x/o.x:0,f=s?s.y/o.y:0;t.coordinateSystem===tr||t.reversedDepth?e.set(.5*c,0,0,.5*c+u,0,.5*a,0,.5*a+f,0,0,1,0,0,0,0,1):e.set(.5*c,0,0,.5*c+u,0,.5*a,0,.5*a+f,0,0,.5,.5,0,0,0,1),e.multiply(ph)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},Va=new K,Ha=new On,ai=new K,Lo=class extends rn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Fe,this.projectionMatrix=new Fe,this.projectionMatrixInverse=new Fe,this.coordinateSystem=Jn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Va,Ha,ai),ai.x===1&&ai.y===1&&ai.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Va,Ha,ai.set(1,1,1)).invert()}updateWorldMatrix(t,e,i=!1){super.updateWorldMatrix(t,e,i),this.matrixWorld.decompose(Va,Ha,ai),ai.x===1&&ai.y===1&&ai.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Va,Ha,ai.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},zi=new K,ad=new Jt,ld=new Jt,_n=class extends Lo{constructor(t=50,e=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=nr*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(js*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return nr*2*Math.atan(Math.tan(js*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){zi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(zi.x,zi.y).multiplyScalar(-t/zi.z),zi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(zi.x,zi.y).multiplyScalar(-t/zi.z)}getViewSize(t,e){return this.getViewBounds(t,ad,ld),e.subVectors(ld,ad)}setViewOffset(t,e,i,s,o,c){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=o,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(js*.5*this.fov)/this.zoom,i=2*e,s=this.aspect*i,o=-.5*s,c=this.view;if(this.view!==null&&this.view.enabled){let u=c.fullWidth,f=c.fullHeight;o+=c.offsetX*s/u,e-=c.offsetY*i/f,s*=c.width/u,i*=c.height/f}let a=this.filmOffset;a!==0&&(o+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+s,e,e-i,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},ur=class extends Lo{constructor(t=-1,e=1,i=1,s=-1,o=.1,c=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=s,this.near=o,this.far=c,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,s,o,c){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=o,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,o=i-t,c=i+t,a=s+e,u=s-e;if(this.view!==null&&this.view.enabled){let f=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=f*this.view.offsetX,c=o+f*this.view.width,a-=d*this.view.offsetY,u=a-d*this.view.height}this.projectionMatrix.makeOrthographic(o,c,a,u,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Sh=class extends Sl{constructor(){super(new ur(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},fr=class extends Io{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(rn.DEFAULT_UP),this.updateMatrix(),this.target=new rn,this.shadow=new Sh}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}},Zs=-90,Js=1,wl=class extends rn{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new _n(Zs,Js,t,e);s.layers=this.layers,this.add(s);let o=new _n(Zs,Js,t,e);o.layers=this.layers,this.add(o);let c=new _n(Zs,Js,t,e);c.layers=this.layers,this.add(c);let a=new _n(Zs,Js,t,e);a.layers=this.layers,this.add(a);let u=new _n(Zs,Js,t,e);u.layers=this.layers,this.add(u);let f=new _n(Zs,Js,t,e);f.layers=this.layers,this.add(f)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[i,s,o,c,a,u]=e;for(let f of e)this.remove(f);if(t===Jn)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),o.up.set(0,0,-1),o.lookAt(0,1,0),c.up.set(0,0,1),c.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),u.up.set(0,1,0),u.lookAt(0,0,-1);else if(t===tr)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),o.up.set(0,0,1),o.lookAt(0,1,0),c.up.set(0,0,-1),c.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),u.up.set(0,-1,0),u.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let f of e)this.add(f),f.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[o,c,a,u,f,d]=this.children,g=t.getRenderTarget(),m=t.getActiveCubeFace(),y=t.getActiveMipmapLevel(),v=t.xr.enabled;t.xr.enabled=!1;let b=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let x=!1;t.isWebGLRenderer===!0?x=t.state.buffers.depth.getReversed():x=t.reversedDepthBuffer,t.setRenderTarget(i,0,s),x&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(i,1,s),x&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),t.setRenderTarget(i,2,s),x&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(i,3,s),x&&t.autoClear===!1&&t.clearDepth(),t.render(e,u),t.setRenderTarget(i,4,s),x&&t.autoClear===!1&&t.clearDepth(),t.render(e,f),i.texture.generateMipmaps=b,t.setRenderTarget(i,5,s),x&&t.autoClear===!1&&t.clearDepth(),t.render(e,d),t.setRenderTarget(g,m,y),t.xr.enabled=v,i.texture.needsPMREMUpdate=!0}},El=class extends _n{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}},tu="\\[\\]\\.:\\/",ig=new RegExp("["+tu+"]","g"),eu="[^"+tu+"]",sg="[^"+tu.replace("\\.","")+"]",rg=/((?:WC+[\/:])*)/.source.replace("WC",eu),og=/(WCOD+)?/.source.replace("WCOD",sg),ag=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",eu),lg=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",eu),cg=new RegExp("^"+rg+og+ag+lg+"$"),hg=["material","materials","bones","map"],wh=class{constructor(t,e,i){let s=i||Xe.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(t,e)}setValue(t,e){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,o=i.length;s!==o;++s)i[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].unbind()}},Xe=class n{constructor(t,e,i){this.path=e,this.parsedPath=i||n.parseTrackName(e),this.node=n.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,i){return t&&t.isAnimationObjectGroup?new n.Composite(t,e,i):new n(t,e,i)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(ig,"")}static parseTrackName(t){let e=cg.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let i={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let o=i.nodeName.substring(s+1);hg.indexOf(o)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=o)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return i}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let i=t.skeleton.getBoneByName(e);if(i!==void 0)return i}if(t.children){let i=function(o){for(let c=0;c<o.length;c++){let a=o[c];if(a.name===e||a.uuid===e)return a;let u=i(a.children);if(u)return u}return null},s=i(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let i=this.resolvedProperty;for(let s=0,o=i.length;s!==o;++s)t[e++]=i[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let i=this.resolvedProperty;for(let s=0,o=i.length;s!==o;++s)i[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let i=this.resolvedProperty;for(let s=0,o=i.length;s!==o;++s)i[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let i=this.resolvedProperty;for(let s=0,o=i.length;s!==o;++s)i[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,i=e.objectName,s=e.propertyName,o=e.propertyIndex;if(t||(t=n.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){ee("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let f=e.objectIndex;switch(i){case"materials":if(!t.material){ie("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){ie("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){ie("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let d=0;d<t.length;d++)if(t[d].name===f){f=d;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){ie("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){ie("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[i]===void 0){ie("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[i]}if(f!==void 0){if(t[f]===void 0){ie("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[f]}}let c=t[s];if(c===void 0){let f=e.nodeName;ie("PropertyBinding: Trying to update property for track: "+f+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?a=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let u=this.BindingType.Direct;if(o!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){ie("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){ie("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[o]!==void 0&&(o=t.morphTargetDictionary[o])}u=this.BindingType.ArrayElement,this.resolvedProperty=c,this.propertyIndex=o}else c.fromArray!==void 0&&c.toArray!==void 0?(u=this.BindingType.HasFromToArray,this.resolvedProperty=c):Array.isArray(c)?(u=this.BindingType.EntireArray,this.resolvedProperty=c):this.propertyName=s;this.getValue=this.GetterByBindingType[u],this.setValue=this.SetterByBindingTypeAndVersioning[u][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Xe.Composite=wh;Xe.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Xe.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Xe.prototype.GetterByBindingType=[Xe.prototype._getValue_direct,Xe.prototype._getValue_array,Xe.prototype._getValue_arrayElement,Xe.prototype._getValue_toArray];Xe.prototype.SetterByBindingTypeAndVersioning=[[Xe.prototype._setValue_direct,Xe.prototype._setValue_direct_setNeedsUpdate,Xe.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Xe.prototype._setValue_array,Xe.prototype._setValue_array_setNeedsUpdate,Xe.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Xe.prototype._setValue_arrayElement,Xe.prototype._setValue_arrayElement_setNeedsUpdate,Xe.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Xe.prototype._setValue_fromArray,Xe.prototype._setValue_fromArray_setNeedsUpdate,Xe.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];cS=new Float32Array(1),cd=new Fe,No=class{constructor(t,e,i=0,s=1/0){this.ray=new Hi(t,e),this.near=i,this.far=s,this.camera=null,this.layers=new sr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,e.projectionMatrix.elements[14]).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):ie("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return cd.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(cd),this}intersectObject(t,e=!0,i=[]){return Eh(t,this,i,e),i.sort(hd),i}intersectObjects(t,e=!0,i=[]){for(let s=0,o=t.length;s<o;s++)Eh(t[s],this,i,e);return i.sort(hd),i}};dr=class{constructor(t=1,e=0,i=0){this.radius=t,this.phi=e,this.theta=i}set(t,e,i){return this.radius=t,this.phi=e,this.theta=i,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=_e(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,i){return this.radius=Math.sqrt(t*t+e*e+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,i),this.phi=Math.acos(_e(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}},Th=class n{static{n.prototype.isMatrix2=!0}constructor(t,e,i,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,i,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let i=0;i<4;i++)this.elements[i]=t[i+e];return this}set(t,e,i,s){let o=this.elements;return o[0]=t,o[2]=e,o[1]=i,o[3]=s,this}},ud=new K,Do=class extends rn{constructor(t=new K(0,0,1),e=new K(0,0,0),i=1,s=16776960,o=i*.2,c=o*.2){super(),this.type="ArrowHelper",Ga===void 0&&(Ga=new We,Ga.setAttribute("position",new He([0,0,0,0,1,0],3)),mh=new lr(.5,1,5,1),mh.translate(0,-.5,0)),this.position.copy(e),this.line=new ys(Ga,new Kn({color:s,toneMapped:!1})),this.line.matrixAutoUpdate=!1,this.add(this.line),this.cone=new Ae(mh,new Fn({color:s,toneMapped:!1})),this.cone.matrixAutoUpdate=!1,this.add(this.cone),this.setDirection(t),this.setLength(i,o,c)}setDirection(t){if(t.y>.99999)this.quaternion.set(0,0,0,1);else if(t.y<-.99999)this.quaternion.set(1,0,0,0);else{ud.set(t.z,0,-t.x).normalize();let e=Math.acos(t.y);this.quaternion.setFromAxisAngle(ud,e)}}setLength(t,e=t*.2,i=e*.2){this.line.scale.set(1,Math.max(1e-4,t-e),1),this.line.updateMatrix(),this.cone.scale.set(i,e,i),this.cone.position.y=t,this.cone.updateMatrix()}setColor(t){this.line.material.color.set(t),this.cone.material.color.set(t)}copy(t){return super.copy(t,!1),this.line.copy(t.line),this.cone.copy(t.cone),this}dispose(){super.dispose(),this.line.geometry.dispose(),this.line.material.dispose(),this.cone.geometry.dispose(),this.cone.material.dispose()}},Oo=class extends jn{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}};typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?ee("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186")});function Ep(){let n=null,t=!1,e=null,i=null;function s(o,c){i=n.requestAnimationFrame(s),e(o,c)}return{start:function(){t!==!0&&e!==null&&n!==null&&(i=n.requestAnimationFrame(s),t=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(o){e=o},setContext:function(o){n=o}}}function dg(n){let t=new WeakMap;function e(a,u){let f=a.array,d=a.usage,g=f.byteLength,m=n.createBuffer();n.bindBuffer(u,m),n.bufferData(u,f,d),a.onUploadCallback();let y;if(f instanceof Float32Array)y=n.FLOAT;else if(typeof Float16Array<"u"&&f instanceof Float16Array)y=n.HALF_FLOAT;else if(f instanceof Uint16Array)a.isFloat16BufferAttribute?y=n.HALF_FLOAT:y=n.UNSIGNED_SHORT;else if(f instanceof Int16Array)y=n.SHORT;else if(f instanceof Uint32Array)y=n.UNSIGNED_INT;else if(f instanceof Int32Array)y=n.INT;else if(f instanceof Int8Array)y=n.BYTE;else if(f instanceof Uint8Array)y=n.UNSIGNED_BYTE;else if(f instanceof Uint8ClampedArray)y=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:m,type:y,bytesPerElement:f.BYTES_PER_ELEMENT,version:a.version,size:g}}function i(a,u,f){let d=u.array,g=u.updateRanges;if(n.bindBuffer(f,a),g.length===0)n.bufferSubData(f,0,d);else{g.sort((y,v)=>y.start-v.start);let m=0;for(let y=1;y<g.length;y++){let v=g[m],b=g[y];b.start<=v.start+v.count+1?v.count=Math.max(v.count,b.start+b.count-v.start):(++m,g[m]=b)}g.length=m+1;for(let y=0,v=g.length;y<v;y++){let b=g[y];n.bufferSubData(f,b.start*d.BYTES_PER_ELEMENT,d,b.start,b.count)}u.clearUpdateRanges()}u.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function o(a){a.isInterleavedBufferAttribute&&(a=a.data);let u=t.get(a);u&&(n.deleteBuffer(u.buffer),t.delete(a))}function c(a,u){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let d=t.get(a);(!d||d.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let f=t.get(a);if(f===void 0)t.set(a,e(a,u));else if(f.version<a.version){if(f.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(f.buffer,a,u),f.version=a.version}}return{get:s,remove:o,update:c}}function Zy(n,t,e,i,s,o){let c=new le(0),a=s===!0?0:1,u,f,d=null,g=0,m=null;function y(E){let A=E.isScene===!0?E.background:null;if(A&&A.isTexture){let S=E.backgroundBlurriness>0;A=t.get(A,S)}return A}function v(E){let A=!1,S=y(E);S===null?x(c,a):S&&S.isColor&&(x(S,1),A=!0);let R=n.xr.getEnvironmentBlendMode();R==="additive"?e.buffers.color.setClear(0,0,0,1,o):R==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,o),(n.autoClear||A)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function b(E,A){let S=y(A);S&&(S.isCubeTexture||S.mapping===Uo)?(f===void 0&&(f=new Ae(new Xi(1,1,1),new Un({name:"BackgroundCubeMaterial",uniforms:ws(mi.backgroundCube.uniforms),vertexShader:mi.backgroundCube.vertexShader,fragmentShader:mi.backgroundCube.fragmentShader,side:Tn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),f.geometry.deleteAttribute("normal"),f.geometry.deleteAttribute("uv"),f.onBeforeRender=function(R,T,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(f.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(f)),f.material.uniforms.envMap.value=S,f.material.uniforms.backgroundBlurriness.value=A.backgroundBlurriness,f.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,f.material.uniforms.backgroundRotation.value.setFromMatrix4(qy.makeRotationFromEuler(A.backgroundRotation)).transpose(),S.isCubeTexture&&S.isRenderTargetTexture===!1&&f.material.uniforms.backgroundRotation.value.premultiply(Tp),f.material.toneMapped=Me.getTransfer(S.colorSpace)!==Ne,(d!==S||g!==S.version||m!==n.toneMapping)&&(f.material.needsUpdate=!0,d=S,g=S.version,m=n.toneMapping),f.layers.enableAll(),E.unshift(f,f.geometry,f.material,0,0,null)):S&&S.isTexture&&(u===void 0&&(u=new Ae(new To(2,2),new Un({name:"BackgroundMaterial",uniforms:ws(mi.background.uniforms),vertexShader:mi.background.vertexShader,fragmentShader:mi.background.fragmentShader,side:ji,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(u)),u.material.uniforms.t2D.value=S,u.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,u.material.toneMapped=Me.getTransfer(S.colorSpace)!==Ne,S.matrixAutoUpdate===!0&&S.updateMatrix(),u.material.uniforms.uvTransform.value.copy(S.matrix),(d!==S||g!==S.version||m!==n.toneMapping)&&(u.material.needsUpdate=!0,d=S,g=S.version,m=n.toneMapping),u.layers.enableAll(),E.unshift(u,u.geometry,u.material,0,0,null))}function x(E,A){E.getRGB(pc,Qh(n)),e.buffers.color.setClear(pc.r,pc.g,pc.b,A,o)}function _(){f!==void 0&&(f.geometry.dispose(),f.material.dispose(),f=void 0),u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0)}return{getClearColor:function(){return c},setClearColor:function(E,A=1){c.set(E),a=A,x(c,a)},getClearAlpha:function(){return a},setClearAlpha:function(E){a=E,x(c,a)},render:v,addToRenderList:b,dispose:_}}function Jy(n,t){let e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=m(null),o=s,c=!1;function a(B,H,G,z,$){let Y=!1,k=g(B,z,G,H);o!==k&&(o=k,f(o.object)),Y=y(B,z,G,$),Y&&v(B,z,G,$),$!==null&&t.update($,n.ELEMENT_ARRAY_BUFFER),(Y||c)&&(c=!1,S(B,H,G,z),$!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get($).buffer))}function u(){return n.createVertexArray()}function f(B){return n.bindVertexArray(B)}function d(B){return n.deleteVertexArray(B)}function g(B,H,G,z){let $=z.wireframe===!0,Y=i[H.id];Y===void 0&&(Y={},i[H.id]=Y);let k=B.isInstancedMesh===!0?B.id:0,j=Y[k];j===void 0&&(j={},Y[k]=j);let Z=j[G.id];Z===void 0&&(Z={},j[G.id]=Z);let st=Z[$];return st===void 0&&(st=m(u()),Z[$]=st),st}function m(B){let H=[],G=[],z=[];for(let $=0;$<e;$++)H[$]=0,G[$]=0,z[$]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:H,enabledAttributes:G,attributeDivisors:z,object:B,attributes:{},index:null}}function y(B,H,G,z){let $=o.attributes,Y=H.attributes,k=0,j=G.getAttributes();for(let Z in j)if(j[Z].location>=0){let ot=$[Z],St=Y[Z];if(St===void 0&&(Z==="instanceMatrix"&&B.instanceMatrix&&(St=B.instanceMatrix),Z==="instanceColor"&&B.instanceColor&&(St=B.instanceColor)),ot===void 0||ot.attribute!==St||St&&ot.data!==St.data)return!0;k++}return o.attributesNum!==k||o.index!==z}function v(B,H,G,z){let $={},Y=H.attributes,k=0,j=G.getAttributes();for(let Z in j)if(j[Z].location>=0){let ot=Y[Z];ot===void 0&&(Z==="instanceMatrix"&&B.instanceMatrix&&(ot=B.instanceMatrix),Z==="instanceColor"&&B.instanceColor&&(ot=B.instanceColor));let St={};St.attribute=ot,ot&&ot.data&&(St.data=ot.data),$[Z]=St,k++}o.attributes=$,o.attributesNum=k,o.index=z}function b(){let B=o.newAttributes;for(let H=0,G=B.length;H<G;H++)B[H]=0}function x(B){_(B,0)}function _(B,H){let G=o.newAttributes,z=o.enabledAttributes,$=o.attributeDivisors;G[B]=1,z[B]===0&&(n.enableVertexAttribArray(B),z[B]=1),$[B]!==H&&(n.vertexAttribDivisor(B,H),$[B]=H)}function E(){let B=o.newAttributes,H=o.enabledAttributes;for(let G=0,z=H.length;G<z;G++)H[G]!==B[G]&&(n.disableVertexAttribArray(G),H[G]=0)}function A(B,H,G,z,$,Y,k){k===!0?n.vertexAttribIPointer(B,H,G,$,Y):n.vertexAttribPointer(B,H,G,z,$,Y)}function S(B,H,G,z){b();let $=z.attributes,Y=G.getAttributes(),k=H.defaultAttributeValues;for(let j in Y){let Z=Y[j];if(Z.location>=0){let st=$[j];if(st===void 0&&(j==="instanceMatrix"&&B.instanceMatrix&&(st=B.instanceMatrix),j==="instanceColor"&&B.instanceColor&&(st=B.instanceColor)),st!==void 0){let ot=st.normalized,St=st.itemSize,wt=t.get(st);if(wt===void 0)continue;let Yt=wt.buffer,Kt=wt.type,se=wt.bytesPerElement,ct=Kt===n.INT||Kt===n.UNSIGNED_INT||st.gpuType===Cl;if(st.isInterleavedBufferAttribute){let pt=st.data,kt=pt.stride,re=st.offset;if(pt.isInstancedInterleavedBuffer){for(let Dt=0;Dt<Z.locationSize;Dt++)_(Z.location+Dt,pt.meshPerAttribute);B.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=pt.meshPerAttribute*pt.count)}else for(let Dt=0;Dt<Z.locationSize;Dt++)x(Z.location+Dt);n.bindBuffer(n.ARRAY_BUFFER,Yt);for(let Dt=0;Dt<Z.locationSize;Dt++)A(Z.location+Dt,St/Z.locationSize,Kt,ot,kt*se,(re+St/Z.locationSize*Dt)*se,ct)}else{if(st.isInstancedBufferAttribute){for(let pt=0;pt<Z.locationSize;pt++)_(Z.location+pt,st.meshPerAttribute);B.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=st.meshPerAttribute*st.count)}else for(let pt=0;pt<Z.locationSize;pt++)x(Z.location+pt);n.bindBuffer(n.ARRAY_BUFFER,Yt);for(let pt=0;pt<Z.locationSize;pt++)A(Z.location+pt,St/Z.locationSize,Kt,ot,St*se,St/Z.locationSize*pt*se,ct)}}else if(k!==void 0){let ot=k[j];if(ot!==void 0)switch(ot.length){case 2:n.vertexAttrib2fv(Z.location,ot);break;case 3:n.vertexAttrib3fv(Z.location,ot);break;case 4:n.vertexAttrib4fv(Z.location,ot);break;default:n.vertexAttrib1fv(Z.location,ot)}}}}E()}function R(){L();for(let B in i){let H=i[B];for(let G in H){let z=H[G];for(let $ in z){let Y=z[$];for(let k in Y)d(Y[k].object),delete Y[k];delete z[$]}}delete i[B]}}function T(B){if(i[B.id]===void 0)return;let H=i[B.id];for(let G in H){let z=H[G];for(let $ in z){let Y=z[$];for(let k in Y)d(Y[k].object),delete Y[k];delete z[$]}}delete i[B.id]}function C(B){for(let H in i){let G=i[H];for(let z in G){let $=G[z];if($[B.id]===void 0)continue;let Y=$[B.id];for(let k in Y)d(Y[k].object),delete Y[k];delete $[B.id]}}}function w(B){for(let H in i){let G=i[H],z=B.isInstancedMesh===!0?B.id:0,$=G[z];if($!==void 0){for(let Y in $){let k=$[Y];for(let j in k)d(k[j].object),delete k[j];delete $[Y]}delete G[z],Object.keys(G).length===0&&delete i[H]}}}function L(){F(),c=!0,o!==s&&(o=s,f(o.object))}function F(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:L,resetDefaultState:F,dispose:R,releaseStatesOfGeometry:T,releaseStatesOfObject:w,releaseStatesOfProgram:C,initAttributes:b,enableAttribute:x,disableUnusedAttributes:E}}function jy(n,t,e){let i;function s(u){i=u}function o(u,f){n.drawArrays(i,u,f),e.update(f,i,1)}function c(u,f,d){d!==0&&(n.drawArraysInstanced(i,u,f,d),e.update(f,i,d))}function a(u,f,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,u,0,f,0,d);let m=0;for(let y=0;y<d;y++)m+=f[y];e.update(m,i,1)}this.setMode=s,this.render=o,this.renderInstances=c,this.renderMultiDraw=a}function Ky(n,t,e,i){let s;function o(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let C=t.get("EXT_texture_filter_anisotropic");s=n.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function c(C){return!(C!==Xn&&i.convert(C)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(C){let w=C===ni&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(C!==In&&C!==ei&&!w&&i.convert(C)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE))}function u(C){if(C==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let f=e.precision!==void 0?e.precision:"highp",d=u(f);d!==f&&(ee("WebGLRenderer:",f,"not supported, using",d,"instead."),f=d);let g=e.logarithmicDepthBuffer===!0,m=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&m===!1&&ee("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let y=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),v=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),b=n.getParameter(n.MAX_TEXTURE_SIZE),x=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),_=n.getParameter(n.MAX_VERTEX_ATTRIBS),E=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),A=n.getParameter(n.MAX_VARYING_VECTORS),S=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),R=n.getParameter(n.MAX_SAMPLES),T=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:o,getMaxPrecision:u,textureFormatReadable:c,textureTypeReadable:a,precision:f,logarithmicDepthBuffer:g,reversedDepthBuffer:m,maxTextures:y,maxVertexTextures:v,maxTextureSize:b,maxCubemapSize:x,maxAttributes:_,maxVertexUniforms:E,maxVaryings:A,maxFragmentUniforms:S,maxSamples:R,samples:T}}function Qy(n){let t=this,e=null,i=0,s=!1,o=!1,c=new Dn,a=new he,u={value:null,needsUpdate:!1};this.uniform=u,this.numPlanes=0,this.numIntersection=0,this.init=function(g,m){let y=g.length!==0||m||i!==0||s;return s=m,i=g.length,y},this.beginShadows=function(){o=!0,d(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(g,m){e=d(g,m,0)},this.setState=function(g,m,y){let v=g.clippingPlanes,b=g.clipIntersection,x=g.clipShadows,_=n.get(g);if(!s||v===null||v.length===0||o&&!x)o?d(null):f();else{let E=o?0:i,A=E*4,S=_.clippingState||null;u.value=S,S=d(v,m,A,y);for(let R=0;R!==A;++R)S[R]=e[R];_.clippingState=S,this.numIntersection=b?this.numPlanes:0,this.numPlanes+=E}};function f(){u.value!==e&&(u.value=e,u.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function d(g,m,y,v){let b=g!==null?g.length:0,x=null;if(b!==0){if(x=u.value,v!==!0||x===null){let _=y+b*4,E=m.matrixWorldInverse;a.getNormalMatrix(E),(x===null||x.length<_)&&(x=new Float32Array(_));for(let A=0,S=y;A!==b;++A,S+=4)c.copy(g[A]).applyMatrix4(E,a),c.normal.toArray(x,S),x[S+3]=c.constant}u.value=x,u.needsUpdate=!0}return t.numPlanes=b,t.numIntersection=0,x}}function s_(n){let t=[],e=[],i=n,s=n-_r+1+t_;for(let o=0;o<s;o++){let c=Math.pow(2,i);t.push(c);let a=1/(c-2),u=-a,f=1+a,d=[u,u,f,u,f,f,u,u,f,f,u,f],g=6,m=6,y=3,v=new Float32Array(y*m*g),b=new Float32Array(y*m*g);for(let _=0;_<g;_++){let E=_%3*2/3-1,A=_>2?0:-1,S=[E,A,0,E+2/3,A,0,E+2/3,A+1,0,E,A,0,E+2/3,A+1,0,E,A+1,0];v.set(S,y*m*_);for(let R=0;R<m;R++){let T=d[R*2]*2-1,C=d[R*2+1]*2-1;_===0?Es.set(1,C,T):_===1?Es.set(-T,1,-C):_===2?Es.set(-T,C,1):_===3?Es.set(-1,C,-T):_===4?Es.set(-T,-1,C):Es.set(T,C,-1),Es.toArray(b,(_*m+R)*y)}}let x=new We;x.setAttribute("position",new Ve(v,y)),x.setAttribute("outputDirection",new Ve(b,y)),e.push(new Ae(x,null)),i>_r&&i--}return{lodMeshes:e,sizeLods:t}}function rp(n,t,e){let i=new Cn(n,t,e);return i.texture.mapping=Uo,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function yr(n,t,e,i,s){n.viewport.set(t,e,i,s),n.scissor.set(t,e,i,s)}function r_(n,t,e){return new Un({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:n_,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:_c(),fragmentShader:`

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
		`,blending:di,depthTest:!1,depthWrite:!1})}function o_(n,t,e){return new Un({name:"SphericalGaussianBlur",defines:{SAMPLES:e_,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:_c(),fragmentShader:`

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
		`,blending:di,depthTest:!1,depthWrite:!1})}function op(){return new Un({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:_c(),fragmentShader:`

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
		`,blending:di,depthTest:!1,depthWrite:!1})}function ap(){return new Un({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:_c(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:di,depthTest:!1,depthWrite:!1})}function _c(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}function a_(n){let t=new WeakMap,e=new WeakMap,i=null;function s(m,y=!1){return m==null?null:y?c(m):o(m)}function o(m){if(m&&m.isTexture){let y=m.mapping;if(y===Tl||y===Al)if(t.has(m)){let v=t.get(m).texture;return a(v,m.mapping)}else{let v=m.image;if(v&&v.height>0){let b=new xc(v.height);return b.fromEquirectangularTexture(n,m),t.set(m,b),m.addEventListener("dispose",f),a(b.texture,m.mapping)}else return null}}return m}function c(m){if(m&&m.isTexture){let y=m.mapping,v=y===Tl||y===Al,b=y===Ki||y===Ms;if(v||b){let x=e.get(m),_=x!==void 0?x.texture.pmremVersion:0;if(m.isRenderTargetTexture&&m.pmremVersion!==_)return i===null&&(i=new gc(n)),x=v?i.fromEquirectangular(m,x):i.fromCubemap(m,x),x.texture.pmremVersion=m.pmremVersion,e.set(m,x),x.texture;if(x!==void 0)return x.texture;{let E=m.image;return v&&E&&E.height>0||b&&E&&u(E)?(i===null&&(i=new gc(n)),x=v?i.fromEquirectangular(m):i.fromCubemap(m),x.texture.pmremVersion=m.pmremVersion,e.set(m,x),m.addEventListener("dispose",d),x.texture):null}}}return m}function a(m,y){return y===Tl?m.mapping=Ki:y===Al&&(m.mapping=Ms),m}function u(m){let y=0,v=6;for(let b=0;b<v;b++)m[b]!==void 0&&y++;return y===v}function f(m){let y=m.target;y.removeEventListener("dispose",f);let v=t.get(y);v!==void 0&&(t.delete(y),v.dispose())}function d(m){let y=m.target;y.removeEventListener("dispose",d);let v=e.get(y);v!==void 0&&(e.delete(y),v.dispose())}function g(){t=new WeakMap,e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:g}}function l_(n){let t={};function e(i){if(t[i]!==void 0)return t[i];let s=n.getExtension(i);return t[i]=s,s}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){let s=e(i);return s===null&&gs("WebGLRenderer: "+i+" extension not supported."),s}}}function c_(n,t,e,i){let s={},o=new WeakMap;function c(g){let m=g.target;m.index!==null&&t.remove(m.index);for(let v in m.attributes)t.remove(m.attributes[v]);m.removeEventListener("dispose",c),delete s[m.id];let y=o.get(m);y&&(t.remove(y),o.delete(m)),i.releaseStatesOfGeometry(m),m.isInstancedBufferGeometry===!0&&delete m._maxInstanceCount,e.memory.geometries--}function a(g,m){return s[m.id]===!0||(m.addEventListener("dispose",c),s[m.id]=!0,e.memory.geometries++),m}function u(g){let m=g.attributes;for(let y in m)t.update(m[y],n.ARRAY_BUFFER)}function f(g){let m=[],y=g.index,v=g.attributes.position,b=0;if(v===void 0)return;if(y!==null){let E=y.array;b=y.version;for(let A=0,S=E.length;A<S;A+=3){let R=E[A+0],T=E[A+1],C=E[A+2];m.push(R,T,T,C,C,R)}}else{let E=v.array;b=v.version;for(let A=0,S=E.length/3-1;A<S;A+=3){let R=A+0,T=A+1,C=A+2;m.push(R,T,T,C,C,R)}}let x=new(v.count>=65535?go:mo)(m,1);x.version=b;let _=o.get(g);_&&t.remove(_),o.set(g,x)}function d(g){let m=o.get(g);if(m){let y=g.index;y!==null&&m.version<y.version&&f(g)}else f(g);return o.get(g)}return{get:a,update:u,getWireframeAttribute:d}}function h_(n,t,e){let i;function s(g){i=g}let o,c;function a(g){o=g.type,c=g.bytesPerElement}function u(g,m){n.drawElements(i,m,o,g*c),e.update(m,i,1)}function f(g,m,y){y!==0&&(n.drawElementsInstanced(i,m,o,g*c,y),e.update(m,i,y))}function d(g,m,y){if(y===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,m,0,o,g,0,y);let b=0;for(let x=0;x<y;x++)b+=m[x];e.update(b,i,1)}this.setMode=s,this.setIndex=a,this.render=u,this.renderInstances=f,this.renderMultiDraw=d}function u_(n){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(o,c,a){switch(e.calls++,c){case n.TRIANGLES:e.triangles+=a*(o/3);break;case n.LINES:e.lines+=a*(o/2);break;case n.LINE_STRIP:e.lines+=a*(o-1);break;case n.LINE_LOOP:e.lines+=a*o;break;case n.POINTS:e.points+=a*o;break;default:ie("WebGLInfo: Unknown draw mode:",c);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:i}}function f_(n,t,e){let i=new WeakMap,s=new qe;function o(c,a,u){let f=c.morphTargetInfluences,d=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,g=d!==void 0?d.length:0,m=i.get(a);if(m===void 0||m.count!==g){let L=function(){C.dispose(),i.delete(a),a.removeEventListener("dispose",L)};m!==void 0&&m.texture.dispose();let y=a.morphAttributes.position!==void 0,v=a.morphAttributes.normal!==void 0,b=a.morphAttributes.color!==void 0,x=a.morphAttributes.position||[],_=a.morphAttributes.normal||[],E=a.morphAttributes.color||[],A=0;y===!0&&(A=1),v===!0&&(A=2),b===!0&&(A=3);let S=a.attributes.position.count*A,R=1;S>t.maxTextureSize&&(R=Math.ceil(S/t.maxTextureSize),S=t.maxTextureSize);let T=new Float32Array(S*R*4*g),C=new fo(T,S,R,g);C.type=ei,C.needsUpdate=!0;let w=A*4;for(let F=0;F<g;F++){let B=x[F],H=_[F],G=E[F],z=S*R*4*F;for(let $=0;$<B.count;$++){let Y=$*w;y===!0&&(s.fromBufferAttribute(B,$),T[z+Y+0]=s.x,T[z+Y+1]=s.y,T[z+Y+2]=s.z,T[z+Y+3]=0),v===!0&&(s.fromBufferAttribute(H,$),T[z+Y+4]=s.x,T[z+Y+5]=s.y,T[z+Y+6]=s.z,T[z+Y+7]=0),b===!0&&(s.fromBufferAttribute(G,$),T[z+Y+8]=s.x,T[z+Y+9]=s.y,T[z+Y+10]=s.z,T[z+Y+11]=G.itemSize===4?s.w:1)}}m={count:g,texture:C,size:new Jt(S,R)},i.set(a,m),a.addEventListener("dispose",L)}if(c.isInstancedMesh===!0&&c.morphTexture!==null)u.getUniforms().setValue(n,"morphTexture",c.morphTexture,e);else{let y=0;for(let b=0;b<f.length;b++)y+=f[b];let v=a.morphTargetsRelative?1:1-y;u.getUniforms().setValue(n,"morphTargetBaseInfluence",v),u.getUniforms().setValue(n,"morphTargetInfluences",f)}u.getUniforms().setValue(n,"morphTargetsTexture",m.texture,e),u.getUniforms().setValue(n,"morphTargetsTextureSize",m.size)}return{update:o}}function d_(n,t,e,i,s){let o=new WeakMap;function c(f){let d=s.render.frame,g=f.geometry,m=t.get(f,g);if(o.get(m)!==d&&(t.update(m),o.set(m,d)),f.isInstancedMesh&&(f.hasEventListener("dispose",u)===!1&&f.addEventListener("dispose",u),o.get(f)!==d&&(e.update(f.instanceMatrix,n.ARRAY_BUFFER),f.instanceColor!==null&&e.update(f.instanceColor,n.ARRAY_BUFFER),o.set(f,d))),f.isSkinnedMesh){let y=f.skeleton;o.get(y)!==d&&(y.update(),o.set(y,d))}return m}function a(){o=new WeakMap}function u(f){let d=f.target;d.removeEventListener("dispose",u),i.releaseStatesOfObject(d),e.remove(d.instanceMatrix),d.instanceColor!==null&&e.remove(d.instanceColor)}return{update:c,dispose:a}}function m_(n,t,e,i,s,o){let c=new Cn(t,e,{type:n,depthBuffer:s,stencilBuffer:o,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,u=null,f=new We;f.setAttribute("position",new He([-1,3,0,-1,-1,0,3,-1,0],3)),f.setAttribute("uv",new He([0,2,0,0,2,0],2));let d=new hl({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),g=new Ae(f,d),m=new ur(-1,1,1,-1,0,1),y=null,v=null,b=!1,x,_=null,E=[],A=!1;this.setSize=function(S,R){c.setSize(S,R),a!==null&&a.setSize(S,R),u!==null&&u.setSize(S,R);for(let T=0;T<E.length;T++){let C=E[T];C.setSize&&C.setSize(S,R)}},this.setEffects=function(S){E=S,A=E.length>0&&E[0].isRenderPass===!0;let R=c.width,T=c.height;E.length>0&&a===null&&(a=new Cn(R,T,{type:ni,depthBuffer:!1,stencilBuffer:!1}),u=new Cn(R,T,{type:ni,depthBuffer:!1,stencilBuffer:!1}));for(let C=0;C<E.length;C++){let w=E[C];w.setSize&&w.setSize(R,T)}},this.begin=function(S,R){if(b||S.toneMapping===Qn&&E.length===0)return!1;if(_=R,R!==null){let T=R.width,C=R.height;(c.width!==T||c.height!==C)&&this.setSize(T,C)}return A===!1&&S.setRenderTarget(c),x=S.toneMapping,S.toneMapping=Qn,!0},this.hasRenderPass=function(){return A},this.end=function(S,R){S.toneMapping=x,b=!0;let T=c,C=a;for(let w=0;w<E.length;w++){let L=E[w];L.enabled!==!1&&(L.render(S,C,T,R),L.needsSwap!==!1&&(T=C,C=C===a?u:a))}if(y!==S.outputColorSpace||v!==S.toneMapping){y=S.outputColorSpace,v=S.toneMapping,d.defines={},Me.getTransfer(y)===Ne&&(d.defines.SRGB_TRANSFER="");let w=p_[v];w&&(d.defines[w]=""),d.needsUpdate=!0}d.uniforms.tDiffuse.value=T.texture,S.setRenderTarget(_),S.render(g,m),_=null,b=!1},this.isCompositing=function(){return b},this.dispose=function(){c.dispose(),a!==null&&a.dispose(),u!==null&&u.dispose(),f.dispose(),d.dispose()}}function br(n,t,e){let i=n[0];if(i<=0||i>0)return n;let s=t*e,o=lp[s];if(o===void 0&&(o=new Float32Array(s),lp[s]=o),t!==0){i.toArray(o,0);for(let c=1,a=0;c!==t;++c)a+=e,n[c].toArray(o,a)}return o}function on(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function an(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function vc(n,t){let e=cp[t];e===void 0&&(e=new Int32Array(t),cp[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function g_(n,t){let e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function x_(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(on(e,t))return;n.uniform2fv(this.addr,t),an(e,t)}}function y_(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(on(e,t))return;n.uniform3fv(this.addr,t),an(e,t)}}function __(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(on(e,t))return;n.uniform4fv(this.addr,t),an(e,t)}}function v_(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(on(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),an(e,t)}else{if(on(e,i))return;fp.set(i),n.uniformMatrix2fv(this.addr,!1,fp),an(e,i)}}function b_(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(on(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),an(e,t)}else{if(on(e,i))return;up.set(i),n.uniformMatrix3fv(this.addr,!1,up),an(e,i)}}function M_(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(on(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),an(e,t)}else{if(on(e,i))return;hp.set(i),n.uniformMatrix4fv(this.addr,!1,hp),an(e,i)}}function S_(n,t){let e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function w_(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(on(e,t))return;n.uniform2iv(this.addr,t),an(e,t)}}function E_(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(on(e,t))return;n.uniform3iv(this.addr,t),an(e,t)}}function T_(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(on(e,t))return;n.uniform4iv(this.addr,t),an(e,t)}}function A_(n,t){let e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function P_(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(on(e,t))return;n.uniform2uiv(this.addr,t),an(e,t)}}function C_(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(on(e,t))return;n.uniform3uiv(this.addr,t),an(e,t)}}function I_(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(on(e,t))return;n.uniform4uiv(this.addr,t),an(e,t)}}function R_(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let o;this.type===n.SAMPLER_2D_SHADOW?(hu.compareFunction=e.isReversedDepthBuffer()?dc:fc,o=hu):o=Ap,e.setTexture2D(t||o,s)}function L_(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture3D(t||Cp,s)}function N_(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTextureCube(t||Ip,s)}function D_(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture2DArray(t||Pp,s)}function O_(n){switch(n){case 5126:return g_;case 35664:return x_;case 35665:return y_;case 35666:return __;case 35674:return v_;case 35675:return b_;case 35676:return M_;case 5124:case 35670:return S_;case 35667:case 35671:return w_;case 35668:case 35672:return E_;case 35669:case 35673:return T_;case 5125:return A_;case 36294:return P_;case 36295:return C_;case 36296:return I_;case 35678:case 36198:case 36298:case 36306:case 35682:return R_;case 35679:case 36299:case 36307:return L_;case 35680:case 36300:case 36308:case 36293:return N_;case 36289:case 36303:case 36311:case 36292:return D_}}function F_(n,t){n.uniform1fv(this.addr,t)}function U_(n,t){let e=br(t,this.size,2);n.uniform2fv(this.addr,e)}function B_(n,t){let e=br(t,this.size,3);n.uniform3fv(this.addr,e)}function k_(n,t){let e=br(t,this.size,4);n.uniform4fv(this.addr,e)}function z_(n,t){let e=br(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function V_(n,t){let e=br(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function H_(n,t){let e=br(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function G_(n,t){n.uniform1iv(this.addr,t)}function X_(n,t){n.uniform2iv(this.addr,t)}function W_(n,t){n.uniform3iv(this.addr,t)}function Y_(n,t){n.uniform4iv(this.addr,t)}function $_(n,t){n.uniform1uiv(this.addr,t)}function q_(n,t){n.uniform2uiv(this.addr,t)}function Z_(n,t){n.uniform3uiv(this.addr,t)}function J_(n,t){n.uniform4uiv(this.addr,t)}function j_(n,t,e){let i=this.cache,s=t.length,o=vc(e,s);on(i,o)||(n.uniform1iv(this.addr,o),an(i,o));let c;this.type===n.SAMPLER_2D_SHADOW?c=hu:c=Ap;for(let a=0;a!==s;++a)e.setTexture2D(t[a]||c,o[a])}function K_(n,t,e){let i=this.cache,s=t.length,o=vc(e,s);on(i,o)||(n.uniform1iv(this.addr,o),an(i,o));for(let c=0;c!==s;++c)e.setTexture3D(t[c]||Cp,o[c])}function Q_(n,t,e){let i=this.cache,s=t.length,o=vc(e,s);on(i,o)||(n.uniform1iv(this.addr,o),an(i,o));for(let c=0;c!==s;++c)e.setTextureCube(t[c]||Ip,o[c])}function tv(n,t,e){let i=this.cache,s=t.length,o=vc(e,s);on(i,o)||(n.uniform1iv(this.addr,o),an(i,o));for(let c=0;c!==s;++c)e.setTexture2DArray(t[c]||Pp,o[c])}function ev(n){switch(n){case 5126:return F_;case 35664:return U_;case 35665:return B_;case 35666:return k_;case 35674:return z_;case 35675:return V_;case 35676:return H_;case 5124:case 35670:return G_;case 35667:case 35671:return X_;case 35668:case 35672:return W_;case 35669:case 35673:return Y_;case 5125:return $_;case 36294:return q_;case 36295:return Z_;case 36296:return J_;case 35678:case 36198:case 36298:case 36306:case 35682:return j_;case 35679:case 36299:case 36307:return K_;case 35680:case 36300:case 36308:case 36293:return Q_;case 36289:case 36303:case 36311:case 36292:return tv}}function dp(n,t){n.seq.push(t),n.map[t.id]=t}function nv(n,t,e){let i=n.name,s=i.length;for(lu.lastIndex=0;;){let o=lu.exec(i),c=lu.lastIndex,a=o[1],u=o[2]==="]",f=o[3];if(u&&(a=a|0),f===void 0||f==="["&&c+2===s){dp(e,f===void 0?new uu(a,n,t):new fu(a,n,t));break}else{let g=e.map[a];g===void 0&&(g=new du(a),dp(e,g)),e=g}}}function pp(n,t,e){let i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}function rv(n,t){let e=n.split(`
`),i=[],s=Math.max(t-6,0),o=Math.min(t+6,e.length);for(let c=s;c<o;c++){let a=c+1;i.push(`${a===t?">":" "} ${a}: ${e[c]}`)}return i.join(`
`)}function ov(n){Me._getMatrix(mp,Me.workingColorSpace,n);let t=`mat3( ${mp.elements.map(e=>e.toFixed(4))} )`;switch(Me.getTransfer(n)){case co:return[t,"LinearTransferOETF"];case Ne:return[t,"sRGBTransferOETF"];default:return ee("WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function gp(n,t,e){let i=n.getShaderParameter(t,n.COMPILE_STATUS),o=(n.getShaderInfoLog(t)||"").trim();if(i&&o==="")return"";let c=/ERROR: 0:(\d+)/.exec(o);if(c){let a=parseInt(c[1]);return e.toUpperCase()+`

`+o+`

`+rv(n.getShaderSource(t),a)}else return o}function av(n,t){let e=ov(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function cv(n,t){let e=lv[t];return e===void 0?(ee("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function hv(){Me.getLuminanceCoefficients(mc);let n=mc.x.toFixed(4),t=mc.y.toFixed(4),e=mc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function uv(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter($o).join(`
`)}function fv(n){let t=[];for(let e in n){let i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function dv(n,t){let e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let o=n.getActiveAttrib(t,s),c=o.name,a=1;o.type===n.FLOAT_MAT2&&(a=2),o.type===n.FLOAT_MAT3&&(a=3),o.type===n.FLOAT_MAT4&&(a=4),e[c]={type:o.type,location:n.getAttribLocation(t,c),locationSize:a}}return e}function $o(n){return n!==""}function xp(n,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function yp(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}function pu(n){return n.replace(pv,gv)}function gv(n,t){let e=me[t];if(e===void 0){let i=mv.get(t);if(i!==void 0)e=me[i],ee('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return pu(e)}function _p(n){return n.replace(xv,yv)}function yv(n,t,e,i){let s="";for(let o=parseInt(t);o<parseInt(e);o++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return s}function vp(n){let t=`precision ${n.precision} float;
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
#define LOW_PRECISION`),t}function vv(n){return _v[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}function Mv(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":bv[n.envMapMode]||"ENVMAP_TYPE_CUBE"}function wv(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":Sv[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}function Tv(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":Ev[n.combine]||"ENVMAP_BLENDING_NONE"}function Av(n){let t=n.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:i,maxMip:e}}function Pv(n,t,e,i){let s=n.getContext(),o=e.defines,c=e.vertexShader,a=e.fragmentShader,u=vv(e),f=Mv(e),d=wv(e),g=Tv(e),m=Av(e),y=uv(e),v=fv(o),b=s.createProgram(),x,_,E=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(x=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v].filter($o).join(`
`),x.length>0&&(x+=`
`),_=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v].filter($o).join(`
`),_.length>0&&(_+=`
`)):(x=[vp(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+d:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+u:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter($o).join(`
`),_=[vp(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+f:"",e.envMap?"#define "+d:"",e.envMap?"#define "+g:"",m?"#define CUBEUV_TEXEL_WIDTH "+m.texelWidth:"",m?"#define CUBEUV_TEXEL_HEIGHT "+m.texelHeight:"",m?"#define CUBEUV_MAX_MIP "+m.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+u:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Qn?"#define TONE_MAPPING":"",e.toneMapping!==Qn?me.tonemapping_pars_fragment:"",e.toneMapping!==Qn?cv("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",me.colorspace_pars_fragment,av("linearToOutputTexel",e.outputColorSpace),hv(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter($o).join(`
`)),c=pu(c),c=xp(c,e),c=yp(c,e),a=pu(a),a=xp(a,e),a=yp(a,e),c=_p(c),a=_p(a),e.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,x=[y,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,_=["#define varying in",e.glslVersion===Jh?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Jh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);let A=E+x+c,S=E+_+a,R=pp(s,s.VERTEX_SHADER,A),T=pp(s,s.FRAGMENT_SHADER,S);s.attachShader(b,R),s.attachShader(b,T),e.index0AttributeName!==void 0?s.bindAttribLocation(b,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(b,0,"position"),s.linkProgram(b);function C(B){if(n.debug.checkShaderErrors){let H=s.getProgramInfoLog(b)||"",G=s.getShaderInfoLog(R)||"",z=s.getShaderInfoLog(T)||"",$=H.trim(),Y=G.trim(),k=z.trim(),j=!0,Z=!0;if(s.getProgramParameter(b,s.LINK_STATUS)===!1)if(j=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,b,R,T);else{let st=gp(s,R,"vertex"),ot=gp(s,T,"fragment");ie("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(b,s.VALIDATE_STATUS)+`

Material Name: `+B.name+`
Material Type: `+B.type+`

Program Info Log: `+$+`
`+st+`
`+ot)}else $!==""?ee("WebGLProgram: Program Info Log:",$):(Y===""||k==="")&&(Z=!1);Z&&(B.diagnostics={runnable:j,programLog:$,vertexShader:{log:Y,prefix:x},fragmentShader:{log:k,prefix:_}})}s.deleteShader(R),s.deleteShader(T),w=new vr(s,b),L=dv(s,b)}let w;this.getUniforms=function(){return w===void 0&&C(this),w};let L;this.getAttributes=function(){return L===void 0&&C(this),L};let F=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return F===!1&&(F=s.getProgramParameter(b,iv)),F},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(b),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=sv++,this.cacheKey=t,this.usedTimes=1,this.program=b,this.vertexShader=R,this.fragmentShader=T,this}function Iv(n){return n===es||n===Go||n===Xo}function Rv(n,t,e,i,s,o){let c=new sr,a=new mu,u=new Set,f=[],d=new Map,g=i.logarithmicDepthBuffer,m=i.precision,y={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(w){return u.add(w),w===0?"uv":`uv${w}`}function b(w,L,F,B,H,G){let z=B.fog,$=H.geometry,Y=w.isMeshStandardMaterial||w.isMeshLambertMaterial||w.isMeshPhongMaterial?B.environment:null,k=w.isMeshStandardMaterial||w.isMeshLambertMaterial&&!w.envMap||w.isMeshPhongMaterial&&!w.envMap,j=t.get(w.envMap||Y,k),Z=j&&j.mapping===Uo?j.image.height:null,st=y[w.type];w.precision!==null&&(m=i.getMaxPrecision(w.precision),m!==w.precision&&ee("WebGLProgram.getParameters:",w.precision,"not supported, using",m,"instead."));let ot=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,St=ot!==void 0?ot.length:0,wt=0;$.morphAttributes.position!==void 0&&(wt=1),$.morphAttributes.normal!==void 0&&(wt=2),$.morphAttributes.color!==void 0&&(wt=3);let Yt,Kt,se,ct;if(st){let Le=mi[st];Yt=Le.vertexShader,Kt=Le.fragmentShader}else{Yt=w.vertexShader,Kt=w.fragmentShader;let Le=a.getVertexShaderStage(w),Se=a.getFragmentShaderStage(w);a.update(w,Le,Se),se=Le.id,ct=Se.id}let pt=n.getRenderTarget(),kt=n.state.buffers.depth.getReversed(),re=H.isInstancedMesh===!0,Dt=H.isBatchedMesh===!0,de=!!w.map,Ge=!!w.matcap,ge=!!j,ve=!!w.aoMap,Ce=!!w.lightMap,pe=!!w.bumpMap&&w.wireframe===!1,Ie=!!w.normalMap,Je=!!w.displacementMap,cn=!!w.emissiveMap,Re=!!w.metalnessMap,Ye=!!w.roughnessMap,tt=w.anisotropy>0,en=w.clearcoat>0,we=w.dispersion>0,V=w.retroreflectivity>0,I=w.iridescence>0,it=w.sheen>0,U=w.transmission>0,ft=tt&&!!w.anisotropyMap,Et=en&&!!w.clearcoatMap,Tt=en&&!!w.clearcoatNormalMap,mt=en&&!!w.clearcoatRoughnessMap,yt=I&&!!w.iridescenceMap,Pt=I&&!!w.iridescenceThicknessMap,Ht=it&&!!w.sheenColorMap,Lt=it&&!!w.sheenRoughnessMap,At=!!w.specularMap,Gt=!!w.specularColorMap,Qt=!!w.specularIntensityMap,ae=U&&!!w.transmissionMap,J=U&&!!w.thicknessMap,Ct=!!w.gradientMap,_t=!!w.alphaMap,It=w.alphaTest>0,Ft=!!w.alphaHash,bt=!!w.extensions,qt=Qn;w.toneMapped&&(pt===null||pt.isXRRenderTarget===!0)&&(qt=n.toneMapping);let Vt={shaderID:st,shaderType:w.type,shaderName:w.name,vertexShader:Yt,fragmentShader:Kt,defines:w.defines,customVertexShaderID:se,customFragmentShaderID:ct,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:m,batching:Dt,batchingColor:Dt&&H._colorsTexture!==null,instancing:re,instancingColor:re&&H.instanceColor!==null,instancingMorph:re&&H.morphTexture!==null,outputColorSpace:pt===null?n.outputColorSpace:pt.isXRRenderTarget===!0?pt.texture.colorSpace:Me.workingColorSpace,alphaToCoverage:!!w.alphaToCoverage,map:de,matcap:Ge,envMap:ge,envMapMode:ge&&j.mapping,envMapCubeUVHeight:Z,aoMap:ve,lightMap:Ce,bumpMap:pe,normalMap:Ie,displacementMap:Je,emissiveMap:cn,normalMapObjectSpace:Ie&&w.normalMapType===Ud,normalMapTangentSpace:Ie&&w.normalMapType===uc,packedNormalMap:Ie&&w.normalMapType===uc&&Iv(w.normalMap.format),metalnessMap:Re,roughnessMap:Ye,anisotropy:tt,anisotropyMap:ft,clearcoat:en,clearcoatMap:Et,clearcoatNormalMap:Tt,clearcoatRoughnessMap:mt,dispersion:we,retroreflection:V,iridescence:I,iridescenceMap:yt,iridescenceThicknessMap:Pt,sheen:it,sheenColorMap:Ht,sheenRoughnessMap:Lt,specularMap:At,specularColorMap:Gt,specularIntensityMap:Qt,transmission:U,transmissionMap:ae,thicknessMap:J,gradientMap:Ct,opaque:w.transparent===!1&&w.blending===mr&&w.alphaToCoverage===!1,alphaMap:_t,alphaTest:It,alphaHash:Ft,combine:w.combine,mapUv:de&&v(w.map.channel),aoMapUv:ve&&v(w.aoMap.channel),lightMapUv:Ce&&v(w.lightMap.channel),bumpMapUv:pe&&v(w.bumpMap.channel),normalMapUv:Ie&&v(w.normalMap.channel),displacementMapUv:Je&&v(w.displacementMap.channel),emissiveMapUv:cn&&v(w.emissiveMap.channel),metalnessMapUv:Re&&v(w.metalnessMap.channel),roughnessMapUv:Ye&&v(w.roughnessMap.channel),anisotropyMapUv:ft&&v(w.anisotropyMap.channel),clearcoatMapUv:Et&&v(w.clearcoatMap.channel),clearcoatNormalMapUv:Tt&&v(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:mt&&v(w.clearcoatRoughnessMap.channel),iridescenceMapUv:yt&&v(w.iridescenceMap.channel),iridescenceThicknessMapUv:Pt&&v(w.iridescenceThicknessMap.channel),sheenColorMapUv:Ht&&v(w.sheenColorMap.channel),sheenRoughnessMapUv:Lt&&v(w.sheenRoughnessMap.channel),specularMapUv:At&&v(w.specularMap.channel),specularColorMapUv:Gt&&v(w.specularColorMap.channel),specularIntensityMapUv:Qt&&v(w.specularIntensityMap.channel),transmissionMapUv:ae&&v(w.transmissionMap.channel),thicknessMapUv:J&&v(w.thicknessMap.channel),alphaMapUv:_t&&v(w.alphaMap.channel),vertexTangents:!!$.attributes.tangent&&(Ie||tt),vertexNormals:!!$.attributes.normal,vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,pointsUvs:H.isPoints===!0&&!!$.attributes.uv&&(de||_t),fog:!!z,useFog:w.fog===!0,fogExp2:!!z&&z.isFogExp2,flatShading:w.wireframe===!1&&(w.flatShading===!0||$.attributes.normal===void 0&&Ie===!1&&(w.isMeshLambertMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isMeshPhysicalMaterial)),sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:g,reversedDepthBuffer:kt,skinning:H.isSkinnedMesh===!0,hasPositionAttribute:$.attributes.position!==void 0,morphTargets:$.morphAttributes.position!==void 0,morphNormals:$.morphAttributes.normal!==void 0,morphColors:$.morphAttributes.color!==void 0,morphTargetsCount:St,morphTextureStride:wt,numSunLights:L.sun.length,numDirLights:L.directional.length,numPointLights:L.point.length,numSpotLights:L.spot.length,numSpotLightMaps:L.spotLightMap.length,numRectAreaLights:L.rectArea.length,numHemiLights:L.hemi.length,numSunLightShadows:L.sunShadowMap.length,numDirLightShadows:L.directionalShadowMap.length,numPointLightShadows:L.pointShadowMap.length,numSpotLightShadows:L.spotShadowMap.length,numSpotLightShadowsWithMaps:L.numSpotLightShadowsWithMaps,numLightProbes:L.numLightProbes,numLightProbeGrids:G.length,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:w.dithering,shadowMapEnabled:n.shadowMap.enabled&&F.length>0,shadowMapType:n.shadowMap.type,toneMapping:qt,decodeVideoTexture:de&&w.map.isVideoTexture===!0&&Me.getTransfer(w.map.colorSpace)===Ne,decodeVideoTextureEmissive:cn&&w.emissiveMap.isVideoTexture===!0&&Me.getTransfer(w.emissiveMap.colorSpace)===Ne,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===vn,flipSided:w.side===Tn,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:bt&&w.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(bt&&w.extensions.multiDraw===!0||Dt)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return Vt.vertexUv1s=u.has(1),Vt.vertexUv2s=u.has(2),Vt.vertexUv3s=u.has(3),u.clear(),Vt}function x(w){let L=[];if(w.shaderID?L.push(w.shaderID):(L.push(w.customVertexShaderID),L.push(w.customFragmentShaderID)),w.defines!==void 0)for(let F in w.defines)L.push(F),L.push(w.defines[F]);return w.isRawShaderMaterial===!1&&(_(L,w),E(L,w),L.push(n.outputColorSpace)),L.push(w.customProgramCacheKey),L.join()}function _(w,L){w.push(L.precision),w.push(L.outputColorSpace),w.push(L.envMapMode),w.push(L.envMapCubeUVHeight),w.push(L.mapUv),w.push(L.alphaMapUv),w.push(L.lightMapUv),w.push(L.aoMapUv),w.push(L.bumpMapUv),w.push(L.normalMapUv),w.push(L.displacementMapUv),w.push(L.emissiveMapUv),w.push(L.metalnessMapUv),w.push(L.roughnessMapUv),w.push(L.anisotropyMapUv),w.push(L.clearcoatMapUv),w.push(L.clearcoatNormalMapUv),w.push(L.clearcoatRoughnessMapUv),w.push(L.iridescenceMapUv),w.push(L.iridescenceThicknessMapUv),w.push(L.sheenColorMapUv),w.push(L.sheenRoughnessMapUv),w.push(L.specularMapUv),w.push(L.specularColorMapUv),w.push(L.specularIntensityMapUv),w.push(L.transmissionMapUv),w.push(L.thicknessMapUv),w.push(L.combine),w.push(L.fogExp2),w.push(L.sizeAttenuation),w.push(L.morphTargetsCount),w.push(L.morphAttributeCount),w.push(L.numSunLights),w.push(L.numDirLights),w.push(L.numPointLights),w.push(L.numSpotLights),w.push(L.numSpotLightMaps),w.push(L.numHemiLights),w.push(L.numRectAreaLights),w.push(L.numSunLightShadows),w.push(L.numDirLightShadows),w.push(L.numPointLightShadows),w.push(L.numSpotLightShadows),w.push(L.numSpotLightShadowsWithMaps),w.push(L.numLightProbes),w.push(L.shadowMapType),w.push(L.toneMapping),w.push(L.numClippingPlanes),w.push(L.numClipIntersection),w.push(L.depthPacking)}function E(w,L){c.disableAll(),L.instancing&&c.enable(0),L.instancingColor&&c.enable(1),L.instancingMorph&&c.enable(2),L.matcap&&c.enable(3),L.envMap&&c.enable(4),L.normalMapObjectSpace&&c.enable(5),L.normalMapTangentSpace&&c.enable(6),L.clearcoat&&c.enable(7),L.iridescence&&c.enable(8),L.alphaTest&&c.enable(9),L.vertexColors&&c.enable(10),L.vertexAlphas&&c.enable(11),L.vertexUv1s&&c.enable(12),L.vertexUv2s&&c.enable(13),L.vertexUv3s&&c.enable(14),L.vertexTangents&&c.enable(15),L.anisotropy&&c.enable(16),L.alphaHash&&c.enable(17),L.batching&&c.enable(18),L.dispersion&&c.enable(19),L.retroreflection&&c.enable(24),L.batchingColor&&c.enable(20),L.gradientMap&&c.enable(21),L.packedNormalMap&&c.enable(22),L.vertexNormals&&c.enable(23),w.push(c.mask),c.disableAll(),L.fog&&c.enable(0),L.useFog&&c.enable(1),L.flatShading&&c.enable(2),L.logarithmicDepthBuffer&&c.enable(3),L.reversedDepthBuffer&&c.enable(4),L.skinning&&c.enable(5),L.morphTargets&&c.enable(6),L.morphNormals&&c.enable(7),L.morphColors&&c.enable(8),L.premultipliedAlpha&&c.enable(9),L.shadowMapEnabled&&c.enable(10),L.doubleSided&&c.enable(11),L.flipSided&&c.enable(12),L.useDepthPacking&&c.enable(13),L.dithering&&c.enable(14),L.transmission&&c.enable(15),L.sheen&&c.enable(16),L.opaque&&c.enable(17),L.pointsUvs&&c.enable(18),L.decodeVideoTexture&&c.enable(19),L.decodeVideoTextureEmissive&&c.enable(20),L.alphaToCoverage&&c.enable(21),L.numLightProbeGrids>0&&c.enable(22),L.hasPositionAttribute&&c.enable(23),w.push(c.mask)}function A(w){let L=y[w.type],F;if(L){let B=mi[L];F=ep.clone(B.uniforms)}else F=w.uniforms;return F}function S(w,L){let F=d.get(L);return F!==void 0?++F.usedTimes:(F=new Pv(n,L,w,s),f.push(F),d.set(L,F)),F}function R(w){if(--w.usedTimes===0){let L=f.indexOf(w);f[L]=f[f.length-1],f.pop(),d.delete(w.cacheKey),w.destroy()}}function T(w){a.remove(w)}function C(){a.dispose()}return{getParameters:b,getProgramCacheKey:x,getUniforms:A,acquireProgram:S,releaseProgram:R,releaseShaderCache:T,programs:f,dispose:C}}function Lv(){let n=new WeakMap;function t(c){return n.has(c)}function e(c){let a=n.get(c);return a===void 0&&(a={},n.set(c,a)),a}function i(c){n.delete(c)}function s(c,a,u){n.get(c)[a]=u}function o(){n=new WeakMap}return{has:t,get:e,remove:i,update:s,dispose:o}}function Nv(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.materialVariant!==t.materialVariant?n.materialVariant-t.materialVariant:n.z!==t.z?n.z-t.z:n.id-t.id}function bp(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function Mp(){let n=[],t=0,e=[],i=[],s=[];function o(){t=0,e.length=0,i.length=0,s.length=0}function c(m){let y=0;return m.isInstancedMesh&&(y+=2),m.isSkinnedMesh&&(y+=1),y}function a(m,y,v,b,x,_){let E=n[t];return E===void 0?(E={id:m.id,object:m,geometry:y,material:v,materialVariant:c(m),groupOrder:b,renderOrder:m.renderOrder,z:x,group:_},n[t]=E):(E.id=m.id,E.object=m,E.geometry=y,E.material=v,E.materialVariant=c(m),E.groupOrder=b,E.renderOrder=m.renderOrder,E.z=x,E.group=_),t++,E}function u(m,y,v,b,x,_,E){E.reversedDepth===!0&&(x=-x);let A=a(m,y,v,b,x,_);v.transmission>0?i.push(A):v.transparent===!0?s.push(A):e.push(A)}function f(m,y,v,b,x,_){let E=a(m,y,v,b,x,_);v.transmission>0?i.unshift(E):v.transparent===!0?s.unshift(E):e.unshift(E)}function d(m,y){e.length>1&&e.sort(m||Nv),i.length>1&&i.sort(y||bp),s.length>1&&s.sort(y||bp)}function g(){for(let m=t,y=n.length;m<y;m++){let v=n[m];if(v.id===null)break;v.id=null,v.object=null,v.geometry=null,v.material=null,v.group=null}}return{opaque:e,transmissive:i,transparent:s,init:o,push:u,unshift:f,finish:g,sort:d}}function Dv(){let n=new WeakMap;function t(i,s){let o=n.get(i),c;return o===void 0?(c=new Mp,n.set(i,[c])):s>=o.length?(c=new Mp,o.push(c)):c=o[s],c}function e(){n=new WeakMap}return{get:t,dispose:e}}function Ov(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new K,color:new le};break;case"SpotLight":e={position:new K,direction:new K,color:new le,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new K,color:new le,distance:0,decay:0};break;case"HemisphereLight":e={direction:new K,skyColor:new le,groundColor:new le};break;case"RectAreaLight":e={color:new le,position:new K,halfWidth:new K,halfHeight:new K};break}return n[t.id]=e,e}}}function Fv(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Jt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Jt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Jt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}function Bv(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function kv(n){let t=new Ov,e=Fv(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let f=0;f<9;f++)i.probe.push(new K);let s=new K,o=new Fe,c=new Fe;function a(f){let d=0,g=0,m=0;for(let H=0;H<9;H++)i.probe[H].set(0,0,0);let y=0,v=0,b=0,x=0,_=0,E=0,A=0,S=0,R=0,T=0,C=0,w=0,L=0,F=0;f.sort(Bv);for(let H=0,G=f.length;H<G;H++){let z=f[H],$=z.color,Y=z.intensity,k=z.distance,j=null;if(z.shadow&&z.shadow.map&&(z.shadow.map.texture.format===es?j=z.shadow.map.texture:j=z.shadow.map.depthTexture||z.shadow.map.texture),z.isAmbientLight)d+=$.r*Y,g+=$.g*Y,m+=$.b*Y;else if(z.isLightProbe){for(let Z=0;Z<9;Z++)i.probe[Z].addScaledVector(z.sh.coefficients[Z],Y);F++}else if(z.isSunLight){let Z=t.get(z);if(Z.color.copy(z.color).multiplyScalar(z.intensity),z.castShadow){let st=z.shadow,ot=e.get(z);ot.shadowIntensity=st.intensity,ot.shadowBias=st.bias,ot.shadowNormalBias=st.normalBias,ot.shadowRadius=st.radius,ot.shadowMapSize.copy(st.mapSize).multiply(st.getFrameExtents()),i.sunShadow[v]=ot,i.sunShadowMap[v]=j;let St=st.getViewportCount();for(let wt=0;wt<St;wt++)i.sunShadowMatrix[b+wt]=st.getMatrix(wt),i.sunShadowCascade[b+wt]=st._cascadeData[wt];b+=St,v++}i.sun[y]=Z,y++}else if(z.isDirectionalLight){let Z=t.get(z);if(Z.color.copy(z.color).multiplyScalar(z.intensity),z.castShadow){let st=z.shadow,ot=e.get(z);ot.shadowIntensity=st.intensity,ot.shadowBias=st.bias,ot.shadowNormalBias=st.normalBias,ot.shadowRadius=st.radius,ot.shadowMapSize=st.mapSize,i.directionalShadow[x]=ot,i.directionalShadowMap[x]=j,i.directionalShadowMatrix[x]=z.shadow.matrix,R++}i.directional[x]=Z,x++}else if(z.isSpotLight){let Z=t.get(z);Z.position.setFromMatrixPosition(z.matrixWorld),Z.color.copy($).multiplyScalar(Y),Z.distance=k,Z.coneCos=Math.cos(z.angle),Z.penumbraCos=Math.cos(z.angle*(1-z.penumbra)),Z.decay=z.decay,i.spot[E]=Z;let st=z.shadow;if(z.map&&(i.spotLightMap[w]=z.map,w++,st.updateMatrices(z),z.castShadow&&L++),i.spotLightMatrix[E]=st.matrix,z.castShadow){let ot=e.get(z);ot.shadowIntensity=st.intensity,ot.shadowBias=st.bias,ot.shadowNormalBias=st.normalBias,ot.shadowRadius=st.radius,ot.shadowMapSize=st.mapSize,i.spotShadow[E]=ot,i.spotShadowMap[E]=j,C++}E++}else if(z.isRectAreaLight){let Z=t.get(z);Z.color.copy($).multiplyScalar(Y),Z.halfWidth.set(z.width*.5,0,0),Z.halfHeight.set(0,z.height*.5,0),i.rectArea[A]=Z,A++}else if(z.isPointLight){let Z=t.get(z);if(Z.color.copy(z.color).multiplyScalar(z.intensity),Z.distance=z.distance,Z.decay=z.decay,z.castShadow){let st=z.shadow,ot=e.get(z);ot.shadowIntensity=st.intensity,ot.shadowBias=st.bias,ot.shadowNormalBias=st.normalBias,ot.shadowRadius=st.radius,ot.shadowMapSize=st.mapSize,ot.shadowCameraNear=st.camera.near,ot.shadowCameraFar=st.camera.far,i.pointShadow[_]=ot,i.pointShadowMap[_]=j,i.pointShadowMatrix[_]=z.shadow.matrix,T++}i.point[_]=Z,_++}else if(z.isHemisphereLight){let Z=t.get(z);Z.skyColor.copy(z.color).multiplyScalar(Y),Z.groundColor.copy(z.groundColor).multiplyScalar(Y),i.hemi[S]=Z,S++}}A>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Bt.LTC_FLOAT_1,i.rectAreaLTC2=Bt.LTC_FLOAT_2):(i.rectAreaLTC1=Bt.LTC_HALF_1,i.rectAreaLTC2=Bt.LTC_HALF_2)),i.ambient[0]=d,i.ambient[1]=g,i.ambient[2]=m;let B=i.hash;(B.sunLength!==y||B.directionalLength!==x||B.pointLength!==_||B.spotLength!==E||B.rectAreaLength!==A||B.hemiLength!==S||B.numSunShadows!==v||B.numDirectionalShadows!==R||B.numPointShadows!==T||B.numSpotShadows!==C||B.numSpotMaps!==w||B.numLightProbes!==F)&&(i.sun.length=y,i.directional.length=x,i.spot.length=E,i.rectArea.length=A,i.point.length=_,i.hemi.length=S,i.sunShadow.length=v,i.sunShadowMap.length=v,i.sunShadowMatrix.length=b,i.sunShadowCascade.length=b,i.directionalShadow.length=R,i.directionalShadowMap.length=R,i.directionalShadowMatrix.length=R,i.pointShadow.length=T,i.pointShadowMap.length=T,i.pointShadowMatrix.length=T,i.spotShadow.length=C,i.spotShadowMap.length=C,i.spotLightMatrix.length=C+w-L,i.spotLightMap.length=w,i.numSpotLightShadowsWithMaps=L,i.numLightProbes=F,B.sunLength=y,B.directionalLength=x,B.pointLength=_,B.spotLength=E,B.rectAreaLength=A,B.hemiLength=S,B.numSunShadows=v,B.numDirectionalShadows=R,B.numPointShadows=T,B.numSpotShadows=C,B.numSpotMaps=w,B.numLightProbes=F,i.version=Uv++)}function u(f,d){let g=0,m=0,y=0,v=0,b=0,x=0,_=d.matrixWorldInverse;for(let E=0,A=f.length;E<A;E++){let S=f[E];if(S.isSunLight){let R=i.sun[g];R.direction.setFromMatrixPosition(S.matrixWorld),R.direction.transformDirection(_),g++}else if(S.isDirectionalLight){let R=i.directional[m];R.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),R.direction.sub(s),R.direction.transformDirection(_),m++}else if(S.isSpotLight){let R=i.spot[v];R.position.setFromMatrixPosition(S.matrixWorld),R.position.applyMatrix4(_),R.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),R.direction.sub(s),R.direction.transformDirection(_),v++}else if(S.isRectAreaLight){let R=i.rectArea[b];R.position.setFromMatrixPosition(S.matrixWorld),R.position.applyMatrix4(_),c.identity(),o.copy(S.matrixWorld),o.premultiply(_),c.extractRotation(o),R.halfWidth.set(S.width*.5,0,0),R.halfHeight.set(0,S.height*.5,0),R.halfWidth.applyMatrix4(c),R.halfHeight.applyMatrix4(c),b++}else if(S.isPointLight){let R=i.point[y];R.position.setFromMatrixPosition(S.matrixWorld),R.position.applyMatrix4(_),y++}else if(S.isHemisphereLight){let R=i.hemi[x];R.direction.setFromMatrixPosition(S.matrixWorld),R.direction.transformDirection(_),x++}}}return{setup:a,setupView:u,state:i}}function Sp(n){let t=new kv(n),e=[],i=[],s=[];function o(m){g.camera=m,e.length=0,i.length=0,s.length=0}function c(m){e.push(m)}function a(m){i.push(m)}function u(m){s.push(m)}function f(){t.setup(e)}function d(m){t.setupView(e,m)}let g={lightsArray:e,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:o,state:g,setupLights:f,setupLightsView:d,pushLight:c,pushShadow:a,pushLightProbeGrid:u}}function zv(n){let t=new WeakMap;function e(s,o=0){let c=t.get(s),a;return c===void 0?(a=new Sp(n),t.set(s,[a])):o>=c.length?(a=new Sp(n),c.push(a)):a=c[o],a}function i(){t=new WeakMap}return{get:e,dispose:i}}function Wv(n,t,e){let i=new ar,s=new Jt,o=new Jt,c=new qe,a=new ul,u=new fl,f={},d=e.maxTextureSize,g={[ji]:Tn,[Tn]:ji,[vn]:vn},m=new Un({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Jt},radius:{value:4}},vertexShader:Vv,fragmentShader:Hv}),y=m.clone();y.defines.HORIZONTAL_PASS=1;let v=new We;v.setAttribute("position",new Ve(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let b=new Ae(v,m),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Fo;let _=this.type;this.render=function(T,C,w){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||T.length===0)return;this.type===pd&&(ee("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Fo);let L=n.getRenderTarget(),F=n.getActiveCubeFace(),B=n.getActiveMipmapLevel(),H=n.state;H.setBlending(di),H.buffers.depth.getReversed()===!0?H.buffers.color.setClear(0,0,0,0):H.buffers.color.setClear(1,1,1,1),H.buffers.depth.setTest(!0),H.setScissorTest(!1);let G=_!==this.type;G&&C.traverse(function(z){z.material&&(Array.isArray(z.material)?z.material.forEach($=>$.needsUpdate=!0):z.material.needsUpdate=!0)});for(let z=0,$=T.length;z<$;z++){let Y=T[z],k=Y.shadow;if(k===void 0){ee("WebGLShadowMap:",Y,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;s.copy(k.mapSize);let j=k.getFrameExtents();s.multiply(j),o.copy(k.mapSize),(s.x>d||s.y>d)&&(s.x>d&&(o.x=Math.floor(d/j.x),s.x=o.x*j.x,k.mapSize.x=o.x),s.y>d&&(o.y=Math.floor(d/j.y),s.y=o.y*j.y,k.mapSize.y=o.y));let Z=n.state.buffers.depth.getReversed();if(k.camera._reversedDepth=Z,k.map===null||G===!0){if(k.map!==null&&(k.map.depthTexture!==null&&(k.map.depthTexture.dispose(),k.map.depthTexture=null),k.map.dispose()),this.type===pr){if(Y.isPointLight){ee("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}k.map=new Cn(s.x,s.y,{format:es,type:ni,minFilter:pn,magFilter:pn,generateMipmaps:!1}),k.map.texture.name=Y.name+".shadowMap",k.map.depthTexture=new Gi(s.x,s.y,ei),k.map.depthTexture.name=Y.name+".shadowMapDepth",k.map.depthTexture.format=hi,k.map.depthTexture.compareFunction=null,k.map.depthTexture.minFilter=un,k.map.depthTexture.magFilter=un}else Y.isPointLight?(k.map=new xc(s.x),k.map.depthTexture=new cl(s.x,ti)):(k.map=new Cn(s.x,s.y),k.map.depthTexture=new Gi(s.x,s.y,ti)),k.map.depthTexture.name=Y.name+".shadowMap",k.map.depthTexture.format=hi,this.type===Fo?(k.map.depthTexture.compareFunction=Z?dc:fc,k.map.depthTexture.minFilter=pn,k.map.depthTexture.magFilter=pn):(k.map.depthTexture.compareFunction=null,k.map.depthTexture.minFilter=un,k.map.depthTexture.magFilter=un);k.camera.updateProjectionMatrix()}k.map.isWebGLCubeRenderTarget!==!0&&(k.map.width!==s.x||k.map.height!==s.y)&&k.map.setSize(s.x,s.y);let st=k.map.isWebGLCubeRenderTarget?6:k.getViewportCount();Y.isPointLight!==!0&&k.updateMatrices(Y,w);for(let ot=0;ot<st;ot++){let St=k.getCamera(ot);if(Y.isPointLight){let wt=k.camera,Yt=k.matrix,Kt=Y.distance||wt.far;Kt!==wt.far&&(wt.far=Kt,wt.updateProjectionMatrix()),Yo.setFromMatrixPosition(Y.matrixWorld),wt.position.copy(Yo),cu.copy(wt.position),cu.add(Gv[ot]),wt.up.copy(Xv[ot]),wt.lookAt(cu),wt.updateMatrixWorld(),Yt.makeTranslation(-Yo.x,-Yo.y,-Yo.z),wp.multiplyMatrices(wt.projectionMatrix,wt.matrixWorldInverse),k._frustum.setFromProjectionMatrix(wp,wt.coordinateSystem,wt.reversedDepth)}if(k.map.isWebGLCubeRenderTarget)n.setRenderTarget(k.map,ot),n.clear();else{ot===0&&(n.setRenderTarget(k.map),n.clear());let wt=k.getViewport(ot);c.set(o.x*wt.x,o.y*wt.y,o.x*wt.z,o.y*wt.w),H.viewport(c)}i=k.getFrustum(ot),S(C,w,St,Y,this.type)}k.isPointLightShadow!==!0&&this.type===pr&&E(k,w),k.needsUpdate=!1}_=this.type,x.needsUpdate=!1,n.setRenderTarget(L,F,B)};function E(T,C){let w=t.update(b);m.defines.VSM_SAMPLES!==T.blurSamples&&(m.defines.VSM_SAMPLES=T.blurSamples,y.defines.VSM_SAMPLES=T.blurSamples,m.needsUpdate=!0,y.needsUpdate=!0),T.mapPass===null?T.mapPass=new Cn(s.x,s.y,{format:es,type:ni}):(T.mapPass.width!==T.map.width||T.mapPass.height!==T.map.height)&&T.mapPass.setSize(T.map.width,T.map.height),m.uniforms.shadow_pass.value=T.map.depthTexture,m.uniforms.resolution.value.set(T.map.width,T.map.height),m.uniforms.radius.value=T.radius,n.setRenderTarget(T.mapPass),n.clear(),n.renderBufferDirect(C,null,w,m,b,null),y.uniforms.shadow_pass.value=T.mapPass.texture,y.uniforms.resolution.value.set(T.map.width,T.map.height),y.uniforms.radius.value=T.radius,n.setRenderTarget(T.map),n.clear(),n.renderBufferDirect(C,null,w,y,b,null)}function A(T,C,w,L){let F=null,B=w.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(B!==void 0)F=B;else if(F=w.isPointLight===!0?u:a,n.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){let H=F.uuid,G=C.uuid,z=f[H];z===void 0&&(z={},f[H]=z);let $=z[G];$===void 0&&($=F.clone(),z[G]=$,C.addEventListener("dispose",R)),F=$}if(F.visible=C.visible,F.wireframe=C.wireframe,L===pr?F.side=C.shadowSide!==null?C.shadowSide:C.side:F.side=C.shadowSide!==null?C.shadowSide:g[C.side],F.alphaMap=C.alphaMap,F.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,F.map=C.map,F.clipShadows=C.clipShadows,F.clippingPlanes=C.clippingPlanes,F.clipIntersection=C.clipIntersection,F.displacementMap=C.displacementMap,F.displacementScale=C.displacementScale,F.displacementBias=C.displacementBias,F.wireframeLinewidth=C.wireframeLinewidth,F.linewidth=C.linewidth,w.isPointLight===!0&&F.isMeshDistanceMaterial===!0){let H=n.properties.get(F);H.light=w}return F}function S(T,C,w,L,F){if(T.visible===!1)return;if(T.layers.test(C.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&F===pr)&&(!T.frustumCulled||T.intersectsFrustum(i))){T.modelViewMatrix.multiplyMatrices(w.matrixWorldInverse,T.matrixWorld);let G=t.update(T),z=T.material;if(Array.isArray(z)){let $=G.groups;for(let Y=0,k=$.length;Y<k;Y++){let j=$[Y],Z=z[j.materialIndex];if(Z&&Z.visible){let st=A(T,Z,L,F);T.onBeforeShadow(n,T,C,w,G,st,j),n.renderBufferDirect(w,null,G,st,T,j),T.onAfterShadow(n,T,C,w,G,st,j)}}}else if(z.visible){let $=A(T,z,L,F);T.onBeforeShadow(n,T,C,w,G,$,null),n.renderBufferDirect(w,null,G,$,T,null),T.onAfterShadow(n,T,C,w,G,$,null)}}let H=T.children;for(let G=0,z=H.length;G<z;G++)S(H[G],C,w,L,F)}function R(T){T.target.removeEventListener("dispose",R);for(let w in f){let L=f[w],F=T.target.uuid;F in L&&(L[F].dispose(),delete L[F])}}}function Yv(n,t){function e(){let J=!1,Ct=new qe,_t=null,It=new qe(0,0,0,0);return{setMask:function(Ft){_t!==Ft&&!J&&(n.colorMask(Ft,Ft,Ft,Ft),_t=Ft)},setLocked:function(Ft){J=Ft},setClear:function(Ft,bt,qt,Vt,Le){Le===!0&&(Ft*=Vt,bt*=Vt,qt*=Vt),Ct.set(Ft,bt,qt,Vt),It.equals(Ct)===!1&&(n.clearColor(Ft,bt,qt,Vt),It.copy(Ct))},reset:function(){J=!1,_t=null,It.set(-1,0,0,0)}}}function i(){let J=!1,Ct=!1,_t=null,It=null,Ft=null;return{setReversed:function(bt){if(Ct!==bt){let qt=t.get("EXT_clip_control");bt?qt.clipControlEXT(qt.LOWER_LEFT_EXT,qt.ZERO_TO_ONE_EXT):qt.clipControlEXT(qt.LOWER_LEFT_EXT,qt.NEGATIVE_ONE_TO_ONE_EXT),Ct=bt;let Vt=Ft;Ft=null,this.setClear(Vt)}},getReversed:function(){return Ct},setTest:function(bt){bt?pt(n.DEPTH_TEST):kt(n.DEPTH_TEST)},setMask:function(bt){_t!==bt&&!J&&(n.depthMask(bt),_t=bt)},setFunc:function(bt){if(Ct&&(bt=qd[bt]),It!==bt){switch(bt){case Ya:n.depthFunc(n.NEVER);break;case $a:n.depthFunc(n.ALWAYS);break;case qa:n.depthFunc(n.LESS);break;case Qs:n.depthFunc(n.LEQUAL);break;case Za:n.depthFunc(n.EQUAL);break;case Ja:n.depthFunc(n.GEQUAL);break;case ja:n.depthFunc(n.GREATER);break;case Ka:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}It=bt}},setLocked:function(bt){J=bt},setClear:function(bt){Ft!==bt&&(Ft=bt,Ct&&(bt=1-bt),n.clearDepth(bt))},reset:function(){J=!1,_t=null,It=null,Ft=null,Ct=!1}}}function s(){let J=!1,Ct=null,_t=null,It=null,Ft=null,bt=null,qt=null,Vt=null,Le=null;return{setTest:function(Se){J||(Se?pt(n.STENCIL_TEST):kt(n.STENCIL_TEST))},setMask:function(Se){Ct!==Se&&!J&&(n.stencilMask(Se),Ct=Se)},setFunc:function(Se,De,Mn){(_t!==Se||It!==De||Ft!==Mn)&&(n.stencilFunc(Se,De,Mn),_t=Se,It=De,Ft=Mn)},setOp:function(Se,De,Mn){(bt!==Se||qt!==De||Vt!==Mn)&&(n.stencilOp(Se,De,Mn),bt=Se,qt=De,Vt=Mn)},setLocked:function(Se){J=Se},setClear:function(Se){Le!==Se&&(n.clearStencil(Se),Le=Se)},reset:function(){J=!1,Ct=null,_t=null,It=null,Ft=null,bt=null,qt=null,Vt=null,Le=null}}}let o=new e,c=new i,a=new s,u=new WeakMap,f=new WeakMap,d={},g={},m={},y=new WeakMap,v=[],b=null,x=!1,_=null,E=null,A=null,S=null,R=null,T=null,C=null,w=new le(0,0,0),L=0,F=!1,B=null,H=null,G=null,z=null,$=null,Y=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),k=!1,j=0,Z=n.getParameter(n.VERSION);Z.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(Z)[1]),k=j>=1):Z.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(Z)[1]),k=j>=2);let st=null,ot={},St=n.getParameter(n.SCISSOR_BOX),wt=n.getParameter(n.VIEWPORT),Yt=new qe().fromArray(St),Kt=new qe().fromArray(wt);function se(J,Ct,_t,It){let Ft=new Uint8Array(4),bt=n.createTexture();n.bindTexture(J,bt),n.texParameteri(J,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(J,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let qt=0;qt<_t;qt++)J===n.TEXTURE_3D||J===n.TEXTURE_2D_ARRAY?n.texImage3D(Ct,0,n.RGBA,1,1,It,0,n.RGBA,n.UNSIGNED_BYTE,Ft):n.texImage2D(Ct+qt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Ft);return bt}let ct={};ct[n.TEXTURE_2D]=se(n.TEXTURE_2D,n.TEXTURE_2D,1),ct[n.TEXTURE_CUBE_MAP]=se(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),ct[n.TEXTURE_2D_ARRAY]=se(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),ct[n.TEXTURE_3D]=se(n.TEXTURE_3D,n.TEXTURE_3D,1,1),o.setClear(0,0,0,1),c.setClear(1),a.setClear(0),pt(n.DEPTH_TEST),c.setFunc(Qs),pe(!1),Ie(Ah),pt(n.CULL_FACE),ve(di);function pt(J){d[J]!==!0&&(n.enable(J),d[J]=!0)}function kt(J){d[J]!==!1&&(n.disable(J),d[J]=!1)}function re(J,Ct){return m[J]!==Ct?(n.bindFramebuffer(J,Ct),m[J]=Ct,J===n.DRAW_FRAMEBUFFER&&(m[n.FRAMEBUFFER]=Ct),J===n.FRAMEBUFFER&&(m[n.DRAW_FRAMEBUFFER]=Ct),!0):!1}function Dt(J,Ct){let _t=v,It=!1;if(J){_t=y.get(Ct),_t===void 0&&(_t=[],y.set(Ct,_t));let Ft=J.textures;if(_t.length!==Ft.length||_t[0]!==n.COLOR_ATTACHMENT0){for(let bt=0,qt=Ft.length;bt<qt;bt++)_t[bt]=n.COLOR_ATTACHMENT0+bt;_t.length=Ft.length,It=!0}}else _t[0]!==n.BACK&&(_t[0]=n.BACK,It=!0);It&&n.drawBuffers(_t)}function de(J){return b!==J?(n.useProgram(J),b=J,!0):!1}let Ge={[bs]:n.FUNC_ADD,[gd]:n.FUNC_SUBTRACT,[xd]:n.FUNC_REVERSE_SUBTRACT};Ge[yd]=n.MIN,Ge[_d]=n.MAX;let ge={[vd]:n.ZERO,[bd]:n.ONE,[Md]:n.SRC_COLOR,[Rh]:n.SRC_ALPHA,[Pd]:n.SRC_ALPHA_SATURATE,[Td]:n.DST_COLOR,[wd]:n.DST_ALPHA,[Sd]:n.ONE_MINUS_SRC_COLOR,[Lh]:n.ONE_MINUS_SRC_ALPHA,[Ad]:n.ONE_MINUS_DST_COLOR,[Ed]:n.ONE_MINUS_DST_ALPHA,[Cd]:n.CONSTANT_COLOR,[Id]:n.ONE_MINUS_CONSTANT_COLOR,[Rd]:n.CONSTANT_ALPHA,[Ld]:n.ONE_MINUS_CONSTANT_ALPHA};function ve(J,Ct,_t,It,Ft,bt,qt,Vt,Le,Se){if(J===di){x===!0&&(kt(n.BLEND),x=!1);return}if(x===!1&&(pt(n.BLEND),x=!0),J!==md){if(J!==_||Se!==F){if((E!==bs||R!==bs)&&(n.blendEquation(n.FUNC_ADD),E=bs,R=bs),Se)switch(J){case mr:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Ph:n.blendFunc(n.ONE,n.ONE);break;case Ch:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Ih:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:ie("WebGLState: Invalid blending: ",J);break}else switch(J){case mr:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Ph:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Ch:ie("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Ih:ie("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:ie("WebGLState: Invalid blending: ",J);break}A=null,S=null,T=null,C=null,w.set(0,0,0),L=0,_=J,F=Se}return}Ft=Ft||Ct,bt=bt||_t,qt=qt||It,(Ct!==E||Ft!==R)&&(n.blendEquationSeparate(Ge[Ct],Ge[Ft]),E=Ct,R=Ft),(_t!==A||It!==S||bt!==T||qt!==C)&&(n.blendFuncSeparate(ge[_t],ge[It],ge[bt],ge[qt]),A=_t,S=It,T=bt,C=qt),(Vt.equals(w)===!1||Le!==L)&&(n.blendColor(Vt.r,Vt.g,Vt.b,Le),w.copy(Vt),L=Le),_=J,F=!1}function Ce(J,Ct){J.side===vn?kt(n.CULL_FACE):pt(n.CULL_FACE);let _t=J.side===Tn;Ct&&(_t=!_t),pe(_t),J.blending===mr&&J.transparent===!1?ve(di):ve(J.blending,J.blendEquation,J.blendSrc,J.blendDst,J.blendEquationAlpha,J.blendSrcAlpha,J.blendDstAlpha,J.blendColor,J.blendAlpha,J.premultipliedAlpha),c.setFunc(J.depthFunc),c.setTest(J.depthTest),c.setMask(J.depthWrite),o.setMask(J.colorWrite);let It=J.stencilWrite;a.setTest(It),It&&(a.setMask(J.stencilWriteMask),a.setFunc(J.stencilFunc,J.stencilRef,J.stencilFuncMask),a.setOp(J.stencilFail,J.stencilZFail,J.stencilZPass)),cn(J.polygonOffset,J.polygonOffsetFactor,J.polygonOffsetUnits),J.alphaToCoverage===!0?pt(n.SAMPLE_ALPHA_TO_COVERAGE):kt(n.SAMPLE_ALPHA_TO_COVERAGE)}function pe(J){B!==J&&(J?n.frontFace(n.CW):n.frontFace(n.CCW),B=J)}function Ie(J){J!==fd?(pt(n.CULL_FACE),J!==H&&(J===Ah?n.cullFace(n.BACK):J===dd?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):kt(n.CULL_FACE),H=J}function Je(J){J!==G&&(k&&n.lineWidth(J),G=J)}function cn(J,Ct,_t){J?(pt(n.POLYGON_OFFSET_FILL),(z!==Ct||$!==_t)&&(z=Ct,$=_t,c.getReversed()&&(Ct=-Ct),n.polygonOffset(Ct,_t))):kt(n.POLYGON_OFFSET_FILL)}function Re(J){J?pt(n.SCISSOR_TEST):kt(n.SCISSOR_TEST)}function Ye(J){J===void 0&&(J=n.TEXTURE0+Y-1),st!==J&&(n.activeTexture(J),st=J)}function tt(J,Ct,_t){_t===void 0&&(st===null?_t=n.TEXTURE0+Y-1:_t=st);let It=ot[_t];It===void 0&&(It={type:void 0,texture:void 0},ot[_t]=It),(It.type!==J||It.texture!==Ct)&&(st!==_t&&(n.activeTexture(_t),st=_t),n.bindTexture(J,Ct||ct[J]),It.type=J,It.texture=Ct)}function en(){let J=ot[st];J!==void 0&&J.type!==void 0&&(n.bindTexture(J.type,null),J.type=void 0,J.texture=void 0)}function we(){try{n.compressedTexImage2D(...arguments)}catch(J){ie("WebGLState:",J)}}function V(){try{n.compressedTexImage3D(...arguments)}catch(J){ie("WebGLState:",J)}}function I(){try{n.texSubImage2D(...arguments)}catch(J){ie("WebGLState:",J)}}function it(){try{n.texSubImage3D(...arguments)}catch(J){ie("WebGLState:",J)}}function U(){try{n.compressedTexSubImage2D(...arguments)}catch(J){ie("WebGLState:",J)}}function ft(){try{n.compressedTexSubImage3D(...arguments)}catch(J){ie("WebGLState:",J)}}function Et(){try{n.texStorage2D(...arguments)}catch(J){ie("WebGLState:",J)}}function Tt(){try{n.texStorage3D(...arguments)}catch(J){ie("WebGLState:",J)}}function mt(){try{n.texImage2D(...arguments)}catch(J){ie("WebGLState:",J)}}function yt(){try{n.texImage3D(...arguments)}catch(J){ie("WebGLState:",J)}}function Pt(J){return g[J]!==void 0?g[J]:n.getParameter(J)}function Ht(J,Ct){g[J]!==Ct&&(n.pixelStorei(J,Ct),g[J]=Ct)}function Lt(J){Yt.equals(J)===!1&&(n.scissor(J.x,J.y,J.z,J.w),Yt.copy(J))}function At(J){Kt.equals(J)===!1&&(n.viewport(J.x,J.y,J.z,J.w),Kt.copy(J))}function Gt(J,Ct){let _t=f.get(Ct);_t===void 0&&(_t=new WeakMap,f.set(Ct,_t));let It=_t.get(J);It===void 0&&(It=n.getUniformBlockIndex(Ct,J.name),_t.set(J,It))}function Qt(J,Ct){let It=f.get(Ct).get(J);u.get(Ct)!==It&&(n.uniformBlockBinding(Ct,It,J.__bindingPointIndex),u.set(Ct,It))}function ae(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),c.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),d={},g={},st=null,ot={},m={},y=new WeakMap,v=[],b=null,x=!1,_=null,E=null,A=null,S=null,R=null,T=null,C=null,w=new le(0,0,0),L=0,F=!1,B=null,H=null,G=null,z=null,$=null,Yt.set(0,0,n.canvas.width,n.canvas.height),Kt.set(0,0,n.canvas.width,n.canvas.height),o.reset(),c.reset(),a.reset()}return{buffers:{color:o,depth:c,stencil:a},enable:pt,disable:kt,bindFramebuffer:re,drawBuffers:Dt,useProgram:de,setBlending:ve,setMaterial:Ce,setFlipSided:pe,setCullFace:Ie,setLineWidth:Je,setPolygonOffset:cn,setScissorTest:Re,activeTexture:Ye,bindTexture:tt,unbindTexture:en,compressedTexImage2D:we,compressedTexImage3D:V,texImage2D:mt,texImage3D:yt,pixelStorei:Ht,getParameter:Pt,updateUBOMapping:Gt,uniformBlockBinding:Qt,texStorage2D:Et,texStorage3D:Tt,texSubImage2D:I,texSubImage3D:it,compressedTexSubImage2D:U,compressedTexSubImage3D:ft,scissor:Lt,viewport:At,reset:ae}}function $v(n,t,e,i,s,o,c){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,u=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),f=new Jt,d=new WeakMap,g=new Set,m,y=new WeakMap,v=!1;try{v=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(V,I){return v?new OffscreenCanvas(V,I):ho("canvas")}function x(V,I,it){let U=1,ft=we(V);if((ft.width>it||ft.height>it)&&(U=it/Math.max(ft.width,ft.height)),U<1)if(typeof HTMLImageElement<"u"&&V instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&V instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&V instanceof ImageBitmap||typeof VideoFrame<"u"&&V instanceof VideoFrame){let Et=Math.floor(U*ft.width),Tt=Math.floor(U*ft.height);m===void 0&&(m=b(Et,Tt));let mt=I?b(Et,Tt):m;return mt.width=Et,mt.height=Tt,mt.getContext("2d").drawImage(V,0,0,Et,Tt),ee("WebGLRenderer: Texture has been resized from ("+ft.width+"x"+ft.height+") to ("+Et+"x"+Tt+")."),mt}else return"data"in V&&ee("WebGLRenderer: Image in DataTexture is too big ("+ft.width+"x"+ft.height+")."),V;return V}function _(V){return V.generateMipmaps}function E(V){n.generateMipmap(V)}function A(V){return V.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:V.isWebGL3DRenderTarget?n.TEXTURE_3D:V.isWebGLArrayRenderTarget||V.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function S(V,I,it,U,ft,Et=!1){if(V!==null){if(n[V]!==void 0)return n[V];ee("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+V+"'")}let Tt;U&&(Tt=t.get("EXT_texture_norm16"),Tt||ee("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let mt=I;if(I===n.RED&&(it===n.FLOAT&&(mt=n.R32F),it===n.HALF_FLOAT&&(mt=n.R16F),it===n.UNSIGNED_BYTE&&(mt=n.R8),it===n.UNSIGNED_SHORT&&Tt&&(mt=Tt.R16_EXT),it===n.SHORT&&Tt&&(mt=Tt.R16_SNORM_EXT)),I===n.RED_INTEGER&&(it===n.UNSIGNED_BYTE&&(mt=n.R8UI),it===n.UNSIGNED_SHORT&&(mt=n.R16UI),it===n.UNSIGNED_INT&&(mt=n.R32UI),it===n.BYTE&&(mt=n.R8I),it===n.SHORT&&(mt=n.R16I),it===n.INT&&(mt=n.R32I)),I===n.RG&&(it===n.FLOAT&&(mt=n.RG32F),it===n.HALF_FLOAT&&(mt=n.RG16F),it===n.UNSIGNED_BYTE&&(mt=n.RG8),it===n.UNSIGNED_SHORT&&Tt&&(mt=Tt.RG16_EXT),it===n.SHORT&&Tt&&(mt=Tt.RG16_SNORM_EXT)),I===n.RG_INTEGER&&(it===n.UNSIGNED_BYTE&&(mt=n.RG8UI),it===n.UNSIGNED_SHORT&&(mt=n.RG16UI),it===n.UNSIGNED_INT&&(mt=n.RG32UI),it===n.BYTE&&(mt=n.RG8I),it===n.SHORT&&(mt=n.RG16I),it===n.INT&&(mt=n.RG32I)),I===n.RGB_INTEGER&&(it===n.UNSIGNED_BYTE&&(mt=n.RGB8UI),it===n.UNSIGNED_SHORT&&(mt=n.RGB16UI),it===n.UNSIGNED_INT&&(mt=n.RGB32UI),it===n.BYTE&&(mt=n.RGB8I),it===n.SHORT&&(mt=n.RGB16I),it===n.INT&&(mt=n.RGB32I)),I===n.RGBA_INTEGER&&(it===n.UNSIGNED_BYTE&&(mt=n.RGBA8UI),it===n.UNSIGNED_SHORT&&(mt=n.RGBA16UI),it===n.UNSIGNED_INT&&(mt=n.RGBA32UI),it===n.BYTE&&(mt=n.RGBA8I),it===n.SHORT&&(mt=n.RGBA16I),it===n.INT&&(mt=n.RGBA32I)),I===n.RGB&&(it===n.UNSIGNED_SHORT&&Tt&&(mt=Tt.RGB16_EXT),it===n.SHORT&&Tt&&(mt=Tt.RGB16_SNORM_EXT),it===n.UNSIGNED_INT_5_9_9_9_REV&&(mt=n.RGB9_E5),it===n.UNSIGNED_INT_10F_11F_11F_REV&&(mt=n.R11F_G11F_B10F)),I===n.RGBA){let yt=Et?co:Me.getTransfer(ft);it===n.FLOAT&&(mt=n.RGBA32F),it===n.HALF_FLOAT&&(mt=n.RGBA16F),it===n.UNSIGNED_BYTE&&(mt=yt===Ne?n.SRGB8_ALPHA8:n.RGBA8),it===n.UNSIGNED_SHORT&&Tt&&(mt=Tt.RGBA16_EXT),it===n.SHORT&&Tt&&(mt=Tt.RGBA16_SNORM_EXT),it===n.UNSIGNED_SHORT_4_4_4_4&&(mt=n.RGBA4),it===n.UNSIGNED_SHORT_5_5_5_1&&(mt=n.RGB5_A1)}return(mt===n.R16F||mt===n.R32F||mt===n.RG16F||mt===n.RG32F||mt===n.RGBA16F||mt===n.RGBA32F)&&t.get("EXT_color_buffer_float"),mt}function R(V,I){let it;return V?I===null||I===ti||I===xr?it=n.DEPTH24_STENCIL8:I===ei?it=n.DEPTH32F_STENCIL8:I===gr&&(it=n.DEPTH24_STENCIL8,ee("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):I===null||I===ti||I===xr?it=n.DEPTH_COMPONENT24:I===ei?it=n.DEPTH_COMPONENT32F:I===gr&&(it=n.DEPTH_COMPONENT16),it}function T(V,I){return _(V)===!0||V.isFramebufferTexture&&V.minFilter!==un&&V.minFilter!==pn?Math.log2(Math.max(I.width,I.height))+1:V.mipmaps!==void 0&&V.mipmaps.length>0?V.mipmaps.length:V.isCompressedTexture&&Array.isArray(V.image)?I.mipmaps.length:1}function C(V){let I=V.target;I.removeEventListener("dispose",C),L(I),I.isVideoTexture&&d.delete(I),I.isHTMLTexture&&g.delete(I)}function w(V){let I=V.target;I.removeEventListener("dispose",w),B(I)}function L(V){let I=i.get(V);if(I.__webglInit===void 0)return;let it=V.source,U=y.get(it);if(U){let ft=U[I.__cacheKey];ft.usedTimes--,ft.usedTimes===0&&F(V),Object.keys(U).length===0&&y.delete(it)}i.remove(V)}function F(V){let I=i.get(V);n.deleteTexture(I.__webglTexture);let it=V.source,U=y.get(it);delete U[I.__cacheKey],c.memory.textures--}function B(V){let I=i.get(V);if(V.depthTexture&&(V.depthTexture.dispose(),i.remove(V.depthTexture)),V.isWebGLCubeRenderTarget)for(let U=0;U<6;U++){if(Array.isArray(I.__webglFramebuffer[U]))for(let ft=0;ft<I.__webglFramebuffer[U].length;ft++)n.deleteFramebuffer(I.__webglFramebuffer[U][ft]);else n.deleteFramebuffer(I.__webglFramebuffer[U]);I.__webglDepthbuffer&&n.deleteRenderbuffer(I.__webglDepthbuffer[U])}else{if(Array.isArray(I.__webglFramebuffer))for(let U=0;U<I.__webglFramebuffer.length;U++)n.deleteFramebuffer(I.__webglFramebuffer[U]);else n.deleteFramebuffer(I.__webglFramebuffer);if(I.__webglDepthbuffer&&n.deleteRenderbuffer(I.__webglDepthbuffer),I.__webglMultisampledFramebuffer&&n.deleteFramebuffer(I.__webglMultisampledFramebuffer),I.__webglColorRenderbuffer)for(let U=0;U<I.__webglColorRenderbuffer.length;U++)I.__webglColorRenderbuffer[U]&&n.deleteRenderbuffer(I.__webglColorRenderbuffer[U]);I.__webglDepthRenderbuffer&&n.deleteRenderbuffer(I.__webglDepthRenderbuffer)}let it=V.textures;for(let U=0,ft=it.length;U<ft;U++){let Et=i.get(it[U]);Et.__webglTexture&&(n.deleteTexture(Et.__webglTexture),c.memory.textures--),i.remove(it[U])}i.remove(V)}let H=0;function G(){H=0}function z(){return H}function $(V){H=V}function Y(){let V=H;return V>=s.maxTextures&&ee("WebGLTextures: Trying to use "+(V+1)+" texture units while this GPU supports only "+s.maxTextures),H+=1,V}function k(V){let I=[];return I.push(V.wrapS),I.push(V.wrapT),I.push(V.wrapR||0),I.push(V.magFilter),I.push(V.minFilter),I.push(V.anisotropy),I.push(V.internalFormat),I.push(V.format),I.push(V.type),I.push(V.generateMipmaps),I.push(V.premultiplyAlpha),I.push(V.flipY),I.push(V.unpackAlignment),I.push(V.colorSpace),I.join()}function j(V,I){let it=i.get(V);if(V.isVideoTexture&&tt(V),V.isRenderTargetTexture===!1&&V.isExternalTexture!==!0&&V.version>0&&it.__version!==V.version){let U=V.image;if(U===null)ee("WebGLRenderer: Texture marked for update but no image data found.");else if(U.complete===!1)ee("WebGLRenderer: Texture marked for update but image is incomplete");else{kt(it,V,I);return}}else V.isExternalTexture&&(it.__webglTexture=V.sourceTexture?V.sourceTexture:null);e.bindTexture(n.TEXTURE_2D,it.__webglTexture,n.TEXTURE0+I)}function Z(V,I){let it=i.get(V);if(V.isRenderTargetTexture===!1&&V.version>0&&it.__version!==V.version){kt(it,V,I);return}else V.isExternalTexture&&(it.__webglTexture=V.sourceTexture?V.sourceTexture:null);e.bindTexture(n.TEXTURE_2D_ARRAY,it.__webglTexture,n.TEXTURE0+I)}function st(V,I){let it=i.get(V);if(V.isRenderTargetTexture===!1&&V.version>0&&it.__version!==V.version){kt(it,V,I);return}e.bindTexture(n.TEXTURE_3D,it.__webglTexture,n.TEXTURE0+I)}function ot(V,I){let it=i.get(V);if(V.isCubeDepthTexture!==!0&&V.version>0&&it.__version!==V.version){re(it,V,I);return}e.bindTexture(n.TEXTURE_CUBE_MAP,it.__webglTexture,n.TEXTURE0+I)}let St={[Qa]:n.REPEAT,[ci]:n.CLAMP_TO_EDGE,[tl]:n.MIRRORED_REPEAT},wt={[un]:n.NEAREST,[Od]:n.NEAREST_MIPMAP_NEAREST,[Bo]:n.NEAREST_MIPMAP_LINEAR,[pn]:n.LINEAR,[Pl]:n.LINEAR_MIPMAP_NEAREST,[Qi]:n.LINEAR_MIPMAP_LINEAR},Yt={[kd]:n.NEVER,[Xd]:n.ALWAYS,[zd]:n.LESS,[fc]:n.LEQUAL,[Vd]:n.EQUAL,[dc]:n.GEQUAL,[Hd]:n.GREATER,[Gd]:n.NOTEQUAL};function Kt(V,I){if(I.type===ei&&t.has("OES_texture_float_linear")===!1&&(I.magFilter===pn||I.magFilter===Pl||I.magFilter===Bo||I.magFilter===Qi||I.minFilter===pn||I.minFilter===Pl||I.minFilter===Bo||I.minFilter===Qi)&&ee("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(V,n.TEXTURE_WRAP_S,St[I.wrapS]),n.texParameteri(V,n.TEXTURE_WRAP_T,St[I.wrapT]),(V===n.TEXTURE_3D||V===n.TEXTURE_2D_ARRAY)&&n.texParameteri(V,n.TEXTURE_WRAP_R,St[I.wrapR]),n.texParameteri(V,n.TEXTURE_MAG_FILTER,wt[I.magFilter]),n.texParameteri(V,n.TEXTURE_MIN_FILTER,wt[I.minFilter]),I.compareFunction&&(n.texParameteri(V,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(V,n.TEXTURE_COMPARE_FUNC,Yt[I.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(I.magFilter===un||I.minFilter!==Bo&&I.minFilter!==Qi||I.type===ei&&t.has("OES_texture_float_linear")===!1)return;if(I.anisotropy>1||i.get(I).__currentAnisotropy){let it=t.get("EXT_texture_filter_anisotropic");n.texParameterf(V,it.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(I.anisotropy,s.getMaxAnisotropy())),i.get(I).__currentAnisotropy=I.anisotropy}}}function se(V,I){let it=!1;V.__webglInit===void 0&&(V.__webglInit=!0,I.addEventListener("dispose",C));let U=I.source,ft=y.get(U);ft===void 0&&(ft={},y.set(U,ft));let Et=k(I);if(Et!==V.__cacheKey){ft[Et]===void 0&&(ft[Et]={texture:n.createTexture(),usedTimes:0},c.memory.textures++,it=!0),ft[Et].usedTimes++;let Tt=ft[V.__cacheKey];Tt!==void 0&&(ft[V.__cacheKey].usedTimes--,Tt.usedTimes===0&&F(I)),V.__cacheKey=Et,V.__webglTexture=ft[Et].texture}return it}function ct(V,I,it){return Math.floor(Math.floor(V/it)/I)}function pt(V,I,it,U){let Et=V.updateRanges;if(Et.length===0)e.texSubImage2D(n.TEXTURE_2D,0,0,0,I.width,I.height,it,U,I.data);else{Et.sort((Ht,Lt)=>Ht.start-Lt.start);let Tt=0;for(let Ht=1;Ht<Et.length;Ht++){let Lt=Et[Tt],At=Et[Ht],Gt=Lt.start+Lt.count,Qt=ct(At.start,I.width,4),ae=ct(Lt.start,I.width,4);At.start<=Gt+1&&Qt===ae&&ct(At.start+At.count-1,I.width,4)===Qt?Lt.count=Math.max(Lt.count,At.start+At.count-Lt.start):(++Tt,Et[Tt]=At)}Et.length=Tt+1;let mt=e.getParameter(n.UNPACK_ROW_LENGTH),yt=e.getParameter(n.UNPACK_SKIP_PIXELS),Pt=e.getParameter(n.UNPACK_SKIP_ROWS);e.pixelStorei(n.UNPACK_ROW_LENGTH,I.width);for(let Ht=0,Lt=Et.length;Ht<Lt;Ht++){let At=Et[Ht],Gt=Math.floor(At.start/4),Qt=Math.ceil(At.count/4),ae=Gt%I.width,J=Math.floor(Gt/I.width),Ct=Qt,_t=1;e.pixelStorei(n.UNPACK_SKIP_PIXELS,ae),e.pixelStorei(n.UNPACK_SKIP_ROWS,J),e.texSubImage2D(n.TEXTURE_2D,0,ae,J,Ct,_t,it,U,I.data)}V.clearUpdateRanges(),e.pixelStorei(n.UNPACK_ROW_LENGTH,mt),e.pixelStorei(n.UNPACK_SKIP_PIXELS,yt),e.pixelStorei(n.UNPACK_SKIP_ROWS,Pt)}}function kt(V,I,it){let U=n.TEXTURE_2D;(I.isDataArrayTexture||I.isCompressedArrayTexture)&&(U=n.TEXTURE_2D_ARRAY),I.isData3DTexture&&(U=n.TEXTURE_3D);let ft=se(V,I),Et=I.source;e.bindTexture(U,V.__webglTexture,n.TEXTURE0+it);let Tt=i.get(Et);if(Et.version!==Tt.__version||ft===!0){if(e.activeTexture(n.TEXTURE0+it),(typeof ImageBitmap<"u"&&I.image instanceof ImageBitmap)===!1){let _t=Me.getPrimaries(Me.workingColorSpace),It=I.colorSpace===Pi?null:Me.getPrimaries(I.colorSpace),Ft=I.colorSpace===Pi||_t===It?n.NONE:n.BROWSER_DEFAULT_WEBGL;e.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,I.flipY),e.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),e.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ft)}e.pixelStorei(n.UNPACK_ALIGNMENT,I.unpackAlignment);let yt=x(I.image,!1,s.maxTextureSize);yt=en(I,yt);let Pt=o.convert(I.format,I.colorSpace),Ht=o.convert(I.type),Lt=S(I.internalFormat,Pt,Ht,I.normalized,I.colorSpace,I.isVideoTexture);Kt(U,I);let At,Gt=I.mipmaps,Qt=I.isVideoTexture!==!0,ae=Tt.__version===void 0||ft===!0,J=Et.dataReady,Ct=T(I,yt);if(I.isDepthTexture)Lt=R(I.format===ts,I.type),ae&&(Qt?e.texStorage2D(n.TEXTURE_2D,1,Lt,yt.width,yt.height):e.texImage2D(n.TEXTURE_2D,0,Lt,yt.width,yt.height,0,Pt,Ht,null));else if(I.isDataTexture)if(Gt.length>0){Qt&&ae&&e.texStorage2D(n.TEXTURE_2D,Ct,Lt,Gt[0].width,Gt[0].height);for(let _t=0,It=Gt.length;_t<It;_t++)At=Gt[_t],Qt?J&&e.texSubImage2D(n.TEXTURE_2D,_t,0,0,At.width,At.height,Pt,Ht,At.data):e.texImage2D(n.TEXTURE_2D,_t,Lt,At.width,At.height,0,Pt,Ht,At.data);I.generateMipmaps=!1}else Qt?(ae&&e.texStorage2D(n.TEXTURE_2D,Ct,Lt,yt.width,yt.height),J&&pt(I,yt,Pt,Ht)):e.texImage2D(n.TEXTURE_2D,0,Lt,yt.width,yt.height,0,Pt,Ht,yt.data);else if(I.isCompressedTexture)if(I.isCompressedArrayTexture){Qt&&ae&&e.texStorage3D(n.TEXTURE_2D_ARRAY,Ct,Lt,Gt[0].width,Gt[0].height,yt.depth);for(let _t=0,It=Gt.length;_t<It;_t++)if(At=Gt[_t],I.format!==Xn)if(Pt!==null)if(Qt){if(J)if(I.layerUpdates.size>0){let Ft=nu(At.width,At.height,I.format,I.type);for(let bt of I.layerUpdates){let qt=At.data.subarray(bt*Ft/At.data.BYTES_PER_ELEMENT,(bt+1)*Ft/At.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,_t,0,0,bt,At.width,At.height,1,Pt,qt)}}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,_t,0,0,0,At.width,At.height,yt.depth,Pt,At.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,_t,Lt,At.width,At.height,yt.depth,0,At.data,0,0);else ee("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Qt?J&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,_t,0,0,0,At.width,At.height,yt.depth,Pt,Ht,At.data):e.texImage3D(n.TEXTURE_2D_ARRAY,_t,Lt,At.width,At.height,yt.depth,0,Pt,Ht,At.data);I.layerUpdates.size>0&&I.clearLayerUpdates()}else{Qt&&ae&&e.texStorage2D(n.TEXTURE_2D,Ct,Lt,Gt[0].width,Gt[0].height);for(let _t=0,It=Gt.length;_t<It;_t++)At=Gt[_t],I.format!==Xn?Pt!==null?Qt?J&&e.compressedTexSubImage2D(n.TEXTURE_2D,_t,0,0,At.width,At.height,Pt,At.data):e.compressedTexImage2D(n.TEXTURE_2D,_t,Lt,At.width,At.height,0,At.data):ee("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Qt?J&&e.texSubImage2D(n.TEXTURE_2D,_t,0,0,At.width,At.height,Pt,Ht,At.data):e.texImage2D(n.TEXTURE_2D,_t,Lt,At.width,At.height,0,Pt,Ht,At.data)}else if(I.isDataArrayTexture)if(Qt){if(ae&&e.texStorage3D(n.TEXTURE_2D_ARRAY,Ct,Lt,yt.width,yt.height,yt.depth),J)if(I.layerUpdates.size>0){let _t=nu(yt.width,yt.height,I.format,I.type);for(let It of I.layerUpdates){let Ft=yt.data.subarray(It*_t/yt.data.BYTES_PER_ELEMENT,(It+1)*_t/yt.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,It,yt.width,yt.height,1,Pt,Ht,Ft)}I.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,yt.width,yt.height,yt.depth,Pt,Ht,yt.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,Lt,yt.width,yt.height,yt.depth,0,Pt,Ht,yt.data);else if(I.isData3DTexture)Qt?(ae&&e.texStorage3D(n.TEXTURE_3D,Ct,Lt,yt.width,yt.height,yt.depth),J&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,yt.width,yt.height,yt.depth,Pt,Ht,yt.data)):e.texImage3D(n.TEXTURE_3D,0,Lt,yt.width,yt.height,yt.depth,0,Pt,Ht,yt.data);else if(I.isFramebufferTexture){if(ae)if(Qt)e.texStorage2D(n.TEXTURE_2D,Ct,Lt,yt.width,yt.height);else{let _t=yt.width,It=yt.height;for(let Ft=0;Ft<Ct;Ft++)e.texImage2D(n.TEXTURE_2D,Ft,Lt,_t,It,0,Pt,Ht,null),_t>>=1,It>>=1}}else if(I.isHTMLTexture){if("texElementImage2D"in n){let _t=n.canvas;if(_t.hasAttribute("layoutsubtree")||_t.setAttribute("layoutsubtree","true"),yt.parentNode!==_t){_t.appendChild(yt),g.add(I),_t.onpaint=It=>{let Ft=It.changedElements;for(let bt of g)Ft.includes(bt.image)&&(bt.needsUpdate=!0)},_t.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,yt);else{let Ft=n.RGBA,bt=n.RGBA,qt=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,Ft,bt,qt,yt)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(Gt.length>0){if(Qt&&ae){let _t=we(Gt[0]);e.texStorage2D(n.TEXTURE_2D,Ct,Lt,_t.width,_t.height)}for(let _t=0,It=Gt.length;_t<It;_t++)At=Gt[_t],Qt?J&&e.texSubImage2D(n.TEXTURE_2D,_t,0,0,Pt,Ht,At):e.texImage2D(n.TEXTURE_2D,_t,Lt,Pt,Ht,At);I.generateMipmaps=!1}else if(Qt){if(ae){let _t=we(yt);e.texStorage2D(n.TEXTURE_2D,Ct,Lt,_t.width,_t.height)}J&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,Pt,Ht,yt)}else e.texImage2D(n.TEXTURE_2D,0,Lt,Pt,Ht,yt);_(I)&&E(U),Tt.__version=Et.version,I.onUpdate&&I.onUpdate(I)}V.__version=I.version}function re(V,I,it){if(I.image.length!==6)return;let U=se(V,I),ft=I.source;e.bindTexture(n.TEXTURE_CUBE_MAP,V.__webglTexture,n.TEXTURE0+it);let Et=i.get(ft);if(ft.version!==Et.__version||U===!0){e.activeTexture(n.TEXTURE0+it);let Tt=Me.getPrimaries(Me.workingColorSpace),mt=I.colorSpace===Pi?null:Me.getPrimaries(I.colorSpace),yt=I.colorSpace===Pi||Tt===mt?n.NONE:n.BROWSER_DEFAULT_WEBGL;e.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,I.flipY),e.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),e.pixelStorei(n.UNPACK_ALIGNMENT,I.unpackAlignment),e.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,yt);let Pt=I.isCompressedTexture||I.image[0].isCompressedTexture,Ht=I.image[0]&&I.image[0].isDataTexture,Lt=[];for(let bt=0;bt<6;bt++)!Pt&&!Ht?Lt[bt]=x(I.image[bt],!0,s.maxCubemapSize):Lt[bt]=Ht?I.image[bt].image:I.image[bt],Lt[bt]=en(I,Lt[bt]);let At=Lt[0],Gt=o.convert(I.format,I.colorSpace),Qt=o.convert(I.type),ae=S(I.internalFormat,Gt,Qt,I.normalized,I.colorSpace),J=I.isVideoTexture!==!0,Ct=Et.__version===void 0||U===!0,_t=ft.dataReady,It=T(I,At);Kt(n.TEXTURE_CUBE_MAP,I);let Ft;if(Pt){J&&Ct&&e.texStorage2D(n.TEXTURE_CUBE_MAP,It,ae,At.width,At.height);for(let bt=0;bt<6;bt++){Ft=Lt[bt].mipmaps;for(let qt=0;qt<Ft.length;qt++){let Vt=Ft[qt];I.format!==Xn?Gt!==null?J?_t&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+bt,qt,0,0,Vt.width,Vt.height,Gt,Vt.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+bt,qt,ae,Vt.width,Vt.height,0,Vt.data):ee("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):J?_t&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+bt,qt,0,0,Vt.width,Vt.height,Gt,Qt,Vt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+bt,qt,ae,Vt.width,Vt.height,0,Gt,Qt,Vt.data)}}}else{if(Ft=I.mipmaps,J&&Ct){Ft.length>0&&It++;let bt=we(Lt[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,It,ae,bt.width,bt.height)}for(let bt=0;bt<6;bt++)if(Ht){J?_t&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+bt,0,0,0,Lt[bt].width,Lt[bt].height,Gt,Qt,Lt[bt].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+bt,0,ae,Lt[bt].width,Lt[bt].height,0,Gt,Qt,Lt[bt].data);for(let qt=0;qt<Ft.length;qt++){let Le=Ft[qt].image[bt].image;J?_t&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+bt,qt+1,0,0,Le.width,Le.height,Gt,Qt,Le.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+bt,qt+1,ae,Le.width,Le.height,0,Gt,Qt,Le.data)}}else{J?_t&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+bt,0,0,0,Gt,Qt,Lt[bt]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+bt,0,ae,Gt,Qt,Lt[bt]);for(let qt=0;qt<Ft.length;qt++){let Vt=Ft[qt];J?_t&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+bt,qt+1,0,0,Gt,Qt,Vt.image[bt]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+bt,qt+1,ae,Gt,Qt,Vt.image[bt])}}}_(I)&&E(n.TEXTURE_CUBE_MAP),Et.__version=ft.version,I.onUpdate&&I.onUpdate(I)}V.__version=I.version}function Dt(V,I,it,U,ft,Et){let Tt=o.convert(it.format,it.colorSpace),mt=o.convert(it.type),yt=S(it.internalFormat,Tt,mt,it.normalized,it.colorSpace),Pt=i.get(I),Ht=i.get(it);if(Ht.__renderTarget=I,!Pt.__hasExternalTextures){let Lt=Math.max(1,I.width>>Et),At=Math.max(1,I.height>>Et);ft===n.TEXTURE_3D||ft===n.TEXTURE_2D_ARRAY?e.texImage3D(ft,Et,yt,Lt,At,I.depth,0,Tt,mt,null):e.texImage2D(ft,Et,yt,Lt,At,0,Tt,mt,null)}e.bindFramebuffer(n.FRAMEBUFFER,V),Ye(I)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,U,ft,Ht.__webglTexture,0,Re(I)):(ft===n.TEXTURE_2D||ft>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&ft<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,U,ft,Ht.__webglTexture,Et),e.bindFramebuffer(n.FRAMEBUFFER,null)}function de(V,I,it){if(n.bindRenderbuffer(n.RENDERBUFFER,V),I.depthBuffer){let U=I.depthTexture,ft=U&&U.isDepthTexture?U.type:null,Et=R(I.stencilBuffer,ft),Tt=I.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;Ye(I)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Re(I),Et,I.width,I.height):it?n.renderbufferStorageMultisample(n.RENDERBUFFER,Re(I),Et,I.width,I.height):n.renderbufferStorage(n.RENDERBUFFER,Et,I.width,I.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Tt,n.RENDERBUFFER,V)}else{let U=I.textures;for(let ft=0;ft<U.length;ft++){let Et=U[ft],Tt=o.convert(Et.format,Et.colorSpace),mt=o.convert(Et.type),yt=S(Et.internalFormat,Tt,mt,Et.normalized,Et.colorSpace);Ye(I)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Re(I),yt,I.width,I.height):it?n.renderbufferStorageMultisample(n.RENDERBUFFER,Re(I),yt,I.width,I.height):n.renderbufferStorage(n.RENDERBUFFER,yt,I.width,I.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Ge(V,I,it){let U=I.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(n.FRAMEBUFFER,V),!(I.depthTexture&&I.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let ft=i.get(I.depthTexture);if(ft.__renderTarget=I,(!ft.__webglTexture||I.depthTexture.image.width!==I.width||I.depthTexture.image.height!==I.height)&&(I.depthTexture.image.width=I.width,I.depthTexture.image.height=I.height,I.depthTexture.needsUpdate=!0),U){if(ft.__webglInit===void 0&&(ft.__webglInit=!0,I.depthTexture.addEventListener("dispose",C)),ft.__webglTexture===void 0){ft.__webglTexture=n.createTexture(),e.bindTexture(n.TEXTURE_CUBE_MAP,ft.__webglTexture),Kt(n.TEXTURE_CUBE_MAP,I.depthTexture);let Pt=o.convert(I.depthTexture.format),Ht=o.convert(I.depthTexture.type),Lt;I.depthTexture.format===hi?Lt=n.DEPTH_COMPONENT24:I.depthTexture.format===ts&&(Lt=n.DEPTH24_STENCIL8);for(let At=0;At<6;At++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+At,0,Lt,I.width,I.height,0,Pt,Ht,null)}}else j(I.depthTexture,0);let Et=ft.__webglTexture,Tt=Re(I),mt=U?n.TEXTURE_CUBE_MAP_POSITIVE_X+it:n.TEXTURE_2D,yt=I.depthTexture.format===ts?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(I.depthTexture.format===hi)Ye(I)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,yt,mt,Et,0,Tt):n.framebufferTexture2D(n.FRAMEBUFFER,yt,mt,Et,0);else if(I.depthTexture.format===ts)Ye(I)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,yt,mt,Et,0,Tt):n.framebufferTexture2D(n.FRAMEBUFFER,yt,mt,Et,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function ge(V){let I=i.get(V),it=V.isWebGLCubeRenderTarget===!0;if(I.__boundDepthTexture!==V.depthTexture){let U=V.depthTexture;if(I.__depthDisposeCallback&&I.__depthDisposeCallback(),U){let ft=()=>{delete I.__boundDepthTexture,delete I.__depthDisposeCallback,U.removeEventListener("dispose",ft)};U.addEventListener("dispose",ft),I.__depthDisposeCallback=ft}I.__boundDepthTexture=U}if(V.depthTexture&&!I.__autoAllocateDepthBuffer)if(it)for(let U=0;U<6;U++)Ge(I.__webglFramebuffer[U],V,U);else{let U=V.texture.mipmaps;U&&U.length>0?Ge(I.__webglFramebuffer[0],V,0):Ge(I.__webglFramebuffer,V,0)}else if(it){I.__webglDepthbuffer=[];for(let U=0;U<6;U++)if(e.bindFramebuffer(n.FRAMEBUFFER,I.__webglFramebuffer[U]),I.__webglDepthbuffer[U]===void 0)I.__webglDepthbuffer[U]=n.createRenderbuffer(),de(I.__webglDepthbuffer[U],V,!1);else{let ft=V.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Et=I.__webglDepthbuffer[U];n.bindRenderbuffer(n.RENDERBUFFER,Et),n.framebufferRenderbuffer(n.FRAMEBUFFER,ft,n.RENDERBUFFER,Et)}}else{let U=V.texture.mipmaps;if(U&&U.length>0?e.bindFramebuffer(n.FRAMEBUFFER,I.__webglFramebuffer[0]):e.bindFramebuffer(n.FRAMEBUFFER,I.__webglFramebuffer),I.__webglDepthbuffer===void 0)I.__webglDepthbuffer=n.createRenderbuffer(),de(I.__webglDepthbuffer,V,!1);else{let ft=V.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Et=I.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,Et),n.framebufferRenderbuffer(n.FRAMEBUFFER,ft,n.RENDERBUFFER,Et)}}e.bindFramebuffer(n.FRAMEBUFFER,null)}function ve(V,I,it){let U=i.get(V);I!==void 0&&Dt(U.__webglFramebuffer,V,V.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),it!==void 0&&ge(V)}function Ce(V){let I=V.texture,it=i.get(V),U=i.get(I);V.addEventListener("dispose",w);let ft=V.textures,Et=V.isWebGLCubeRenderTarget===!0,Tt=ft.length>1;if(Tt||(U.__webglTexture===void 0&&(U.__webglTexture=n.createTexture()),U.__version=I.version,c.memory.textures++),Et){it.__webglFramebuffer=[];for(let mt=0;mt<6;mt++)if(I.mipmaps&&I.mipmaps.length>0){it.__webglFramebuffer[mt]=[];for(let yt=0;yt<I.mipmaps.length;yt++)it.__webglFramebuffer[mt][yt]=n.createFramebuffer()}else it.__webglFramebuffer[mt]=n.createFramebuffer()}else{if(I.mipmaps&&I.mipmaps.length>0){it.__webglFramebuffer=[];for(let mt=0;mt<I.mipmaps.length;mt++)it.__webglFramebuffer[mt]=n.createFramebuffer()}else it.__webglFramebuffer=n.createFramebuffer();if(Tt)for(let mt=0,yt=ft.length;mt<yt;mt++){let Pt=i.get(ft[mt]);Pt.__webglTexture===void 0&&(Pt.__webglTexture=n.createTexture(),c.memory.textures++)}if(V.samples>0&&Ye(V)===!1){it.__webglMultisampledFramebuffer=n.createFramebuffer(),it.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,it.__webglMultisampledFramebuffer);for(let mt=0;mt<ft.length;mt++){let yt=ft[mt];it.__webglColorRenderbuffer[mt]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,it.__webglColorRenderbuffer[mt]);let Pt=o.convert(yt.format,yt.colorSpace),Ht=o.convert(yt.type),Lt=S(yt.internalFormat,Pt,Ht,yt.normalized,yt.colorSpace,V.isXRRenderTarget===!0),At=Re(V);n.renderbufferStorageMultisample(n.RENDERBUFFER,At,Lt,V.width,V.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+mt,n.RENDERBUFFER,it.__webglColorRenderbuffer[mt])}n.bindRenderbuffer(n.RENDERBUFFER,null),V.depthBuffer&&(it.__webglDepthRenderbuffer=n.createRenderbuffer(),de(it.__webglDepthRenderbuffer,V,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(Et){e.bindTexture(n.TEXTURE_CUBE_MAP,U.__webglTexture),Kt(n.TEXTURE_CUBE_MAP,I);for(let mt=0;mt<6;mt++)if(I.mipmaps&&I.mipmaps.length>0)for(let yt=0;yt<I.mipmaps.length;yt++)Dt(it.__webglFramebuffer[mt][yt],V,I,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+mt,yt);else Dt(it.__webglFramebuffer[mt],V,I,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+mt,0);_(I)&&E(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Tt){for(let mt=0,yt=ft.length;mt<yt;mt++){let Pt=ft[mt],Ht=i.get(Pt),Lt=n.TEXTURE_2D;(V.isWebGL3DRenderTarget||V.isWebGLArrayRenderTarget)&&(Lt=V.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(Lt,Ht.__webglTexture),Kt(Lt,Pt),Dt(it.__webglFramebuffer,V,Pt,n.COLOR_ATTACHMENT0+mt,Lt,0),_(Pt)&&E(Lt)}e.unbindTexture()}else{let mt=n.TEXTURE_2D;if((V.isWebGL3DRenderTarget||V.isWebGLArrayRenderTarget)&&(mt=V.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(mt,U.__webglTexture),Kt(mt,I),I.mipmaps&&I.mipmaps.length>0)for(let yt=0;yt<I.mipmaps.length;yt++)Dt(it.__webglFramebuffer[yt],V,I,n.COLOR_ATTACHMENT0,mt,yt);else Dt(it.__webglFramebuffer,V,I,n.COLOR_ATTACHMENT0,mt,0);_(I)&&E(mt),e.unbindTexture()}V.depthBuffer&&ge(V)}function pe(V){let I=V.textures;for(let it=0,U=I.length;it<U;it++){let ft=I[it];if(_(ft)){let Et=A(V),Tt=i.get(ft).__webglTexture;e.bindTexture(Et,Tt),E(Et),e.unbindTexture()}}}let Ie=[],Je=[];function cn(V){if(V.samples>0){if(Ye(V)===!1){let I=V.textures,it=V.width,U=V.height,ft=n.COLOR_BUFFER_BIT,Et=V.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Tt=i.get(V),mt=I.length>1;if(mt)for(let Pt=0;Pt<I.length;Pt++)e.bindFramebuffer(n.FRAMEBUFFER,Tt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Pt,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,Tt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Pt,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,Tt.__webglMultisampledFramebuffer);let yt=V.texture.mipmaps;yt&&yt.length>0?e.bindFramebuffer(n.DRAW_FRAMEBUFFER,Tt.__webglFramebuffer[0]):e.bindFramebuffer(n.DRAW_FRAMEBUFFER,Tt.__webglFramebuffer);for(let Pt=0;Pt<I.length;Pt++){if(V.resolveDepthBuffer&&(V.depthBuffer&&(ft|=n.DEPTH_BUFFER_BIT),V.stencilBuffer&&V.resolveStencilBuffer&&(ft|=n.STENCIL_BUFFER_BIT)),mt){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Tt.__webglColorRenderbuffer[Pt]);let Ht=i.get(I[Pt]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Ht,0)}n.blitFramebuffer(0,0,it,U,0,0,it,U,ft,n.NEAREST),u===!0&&(Ie.length=0,Je.length=0,Ie.push(n.COLOR_ATTACHMENT0+Pt),V.depthBuffer&&V.storeMultisampledDepthBuffer===!1&&(Ie.push(Et),Je.push(Et),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,Je)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Ie))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),mt)for(let Pt=0;Pt<I.length;Pt++){e.bindFramebuffer(n.FRAMEBUFFER,Tt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Pt,n.RENDERBUFFER,Tt.__webglColorRenderbuffer[Pt]);let Ht=i.get(I[Pt]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,Tt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Pt,n.TEXTURE_2D,Ht,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,Tt.__webglMultisampledFramebuffer)}else if(V.depthBuffer&&V.storeMultisampledDepthBuffer===!1&&u){let I=V.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[I])}}}function Re(V){return Math.min(s.maxSamples,V.samples)}function Ye(V){let I=i.get(V);return V.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&I.__useRenderToTexture!==!1}function tt(V){let I=c.render.frame;d.get(V)!==I&&(d.set(V,I),V.update())}function en(V,I){let it=V.colorSpace,U=V.format,ft=V.type;return V.isCompressedTexture===!0||V.isVideoTexture===!0||it!==lo&&it!==Pi&&(Me.getTransfer(it)===Ne?(U!==Xn||ft!==In)&&ee("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):ie("WebGLTextures: Unsupported texture color space:",it)),I}function we(V){return typeof HTMLImageElement<"u"&&V instanceof HTMLImageElement?(f.width=V.naturalWidth||V.width,f.height=V.naturalHeight||V.height):typeof VideoFrame<"u"&&V instanceof VideoFrame?(f.width=V.displayWidth,f.height=V.displayHeight):(f.width=V.width,f.height=V.height),f}this.allocateTextureUnit=Y,this.resetTextureUnits=G,this.getTextureUnits=z,this.setTextureUnits=$,this.setTexture2D=j,this.setTexture2DArray=Z,this.setTexture3D=st,this.setTextureCube=ot,this.rebindTextures=ve,this.setupRenderTarget=Ce,this.updateRenderTargetMipmap=pe,this.updateMultisampleRenderTarget=cn,this.setupDepthRenderbuffer=ge,this.setupFrameBufferTexture=Dt,this.useMultisampledRTT=Ye,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function qv(n,t){function e(i,s=Pi){let o,c=Me.getTransfer(s);if(i===In)return n.UNSIGNED_BYTE;if(i===Il)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Rl)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Xh)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Wh)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===Hh)return n.BYTE;if(i===Gh)return n.SHORT;if(i===gr)return n.UNSIGNED_SHORT;if(i===Cl)return n.INT;if(i===ti)return n.UNSIGNED_INT;if(i===ei)return n.FLOAT;if(i===ni)return n.HALF_FLOAT;if(i===Yh)return n.ALPHA;if(i===$h)return n.RGB;if(i===Xn)return n.RGBA;if(i===hi)return n.DEPTH_COMPONENT;if(i===ts)return n.DEPTH_STENCIL;if(i===qh)return n.RED;if(i===Ll)return n.RED_INTEGER;if(i===es)return n.RG;if(i===Nl)return n.RG_INTEGER;if(i===Dl)return n.RGBA_INTEGER;if(i===ko||i===zo||i===Vo||i===Ho)if(c===Ne)if(o=t.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(i===ko)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===zo)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Vo)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Ho)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=t.get("WEBGL_compressed_texture_s3tc"),o!==null){if(i===ko)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===zo)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Vo)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Ho)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Ol||i===Fl||i===Ul||i===Bl)if(o=t.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(i===Ol)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Fl)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Ul)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Bl)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===kl||i===zl||i===Vl||i===Hl||i===Gl||i===Go||i===Xl)if(o=t.get("WEBGL_compressed_texture_etc"),o!==null){if(i===kl||i===zl)return c===Ne?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(i===Vl)return c===Ne?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC;if(i===Hl)return o.COMPRESSED_R11_EAC;if(i===Gl)return o.COMPRESSED_SIGNED_R11_EAC;if(i===Go)return o.COMPRESSED_RG11_EAC;if(i===Xl)return o.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Wl||i===Yl||i===$l||i===ql||i===Zl||i===Jl||i===jl||i===Kl||i===Ql||i===tc||i===ec||i===nc||i===ic||i===sc)if(o=t.get("WEBGL_compressed_texture_astc"),o!==null){if(i===Wl)return c===Ne?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Yl)return c===Ne?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===$l)return c===Ne?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===ql)return c===Ne?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Zl)return c===Ne?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Jl)return c===Ne?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===jl)return c===Ne?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Kl)return c===Ne?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Ql)return c===Ne?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===tc)return c===Ne?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===ec)return c===Ne?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===nc)return c===Ne?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===ic)return c===Ne?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===sc)return c===Ne?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===rc||i===oc||i===ac)if(o=t.get("EXT_texture_compression_bptc"),o!==null){if(i===rc)return c===Ne?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===oc)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===ac)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===lc||i===cc||i===Xo||i===hc)if(o=t.get("EXT_texture_compression_rgtc"),o!==null){if(i===lc)return o.COMPRESSED_RED_RGTC1_EXT;if(i===cc)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Xo)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===hc)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===xr?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}function Kv(n,t){function e(x,_){x.matrixAutoUpdate===!0&&x.updateMatrix(),_.value.copy(x.matrix)}function i(x,_){_.color.getRGB(x.fogColor.value,Qh(n)),_.isFog?(x.fogNear.value=_.near,x.fogFar.value=_.far):_.isFogExp2&&(x.fogDensity.value=_.density)}function s(x,_,E,A,S){_.isNodeMaterial?_.uniformsNeedUpdate=!1:_.isMeshBasicMaterial?o(x,_):_.isMeshLambertMaterial?(o(x,_),_.envMap&&(x.envMapIntensity.value=_.envMapIntensity)):_.isMeshToonMaterial?(o(x,_),g(x,_)):_.isMeshPhongMaterial?(o(x,_),d(x,_),_.envMap&&(x.envMapIntensity.value=_.envMapIntensity)):_.isMeshStandardMaterial?(o(x,_),m(x,_),_.isMeshPhysicalMaterial&&y(x,_,S)):_.isMeshMatcapMaterial?(o(x,_),v(x,_)):_.isMeshDepthMaterial?o(x,_):_.isMeshDistanceMaterial?(o(x,_),b(x,_)):_.isMeshNormalMaterial?o(x,_):_.isLineBasicMaterial?(c(x,_),_.isLineDashedMaterial&&a(x,_)):_.isPointsMaterial?u(x,_,E,A):_.isSpriteMaterial?f(x,_):_.isShadowMaterial?(x.color.value.copy(_.color),x.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function o(x,_){x.opacity.value=_.opacity,_.color&&x.diffuse.value.copy(_.color),_.emissive&&x.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(x.map.value=_.map,e(_.map,x.mapTransform)),_.alphaMap&&(x.alphaMap.value=_.alphaMap,e(_.alphaMap,x.alphaMapTransform)),_.bumpMap&&(x.bumpMap.value=_.bumpMap,e(_.bumpMap,x.bumpMapTransform),x.bumpScale.value=_.bumpScale,_.side===Tn&&(x.bumpScale.value*=-1)),_.normalMap&&(x.normalMap.value=_.normalMap,e(_.normalMap,x.normalMapTransform),x.normalScale.value.copy(_.normalScale),_.side===Tn&&x.normalScale.value.negate()),_.displacementMap&&(x.displacementMap.value=_.displacementMap,e(_.displacementMap,x.displacementMapTransform),x.displacementScale.value=_.displacementScale,x.displacementBias.value=_.displacementBias),_.emissiveMap&&(x.emissiveMap.value=_.emissiveMap,e(_.emissiveMap,x.emissiveMapTransform)),_.specularMap&&(x.specularMap.value=_.specularMap,e(_.specularMap,x.specularMapTransform)),_.alphaTest>0&&(x.alphaTest.value=_.alphaTest);let E=t.get(_),A=E.envMap,S=E.envMapRotation;A&&(x.envMap.value=A,x.envMapRotation.value.setFromMatrix4(jv.makeRotationFromEuler(S)).transpose(),A.isCubeTexture&&A.isRenderTargetTexture===!1&&x.envMapRotation.value.premultiply(Rp),x.reflectivity.value=_.reflectivity,x.ior.value=_.ior,x.refractionRatio.value=_.refractionRatio),_.lightMap&&(x.lightMap.value=_.lightMap,x.lightMapIntensity.value=_.lightMapIntensity,e(_.lightMap,x.lightMapTransform)),_.aoMap&&(x.aoMap.value=_.aoMap,x.aoMapIntensity.value=_.aoMapIntensity,e(_.aoMap,x.aoMapTransform))}function c(x,_){x.diffuse.value.copy(_.color),x.opacity.value=_.opacity,_.map&&(x.map.value=_.map,e(_.map,x.mapTransform))}function a(x,_){x.dashSize.value=_.dashSize,x.totalSize.value=_.dashSize+_.gapSize,x.scale.value=_.scale}function u(x,_,E,A){x.diffuse.value.copy(_.color),x.opacity.value=_.opacity,x.size.value=_.size*E,x.scale.value=A*.5,_.map&&(x.map.value=_.map,e(_.map,x.uvTransform)),_.alphaMap&&(x.alphaMap.value=_.alphaMap,e(_.alphaMap,x.alphaMapTransform)),_.alphaTest>0&&(x.alphaTest.value=_.alphaTest)}function f(x,_){x.diffuse.value.copy(_.color),x.opacity.value=_.opacity,x.rotation.value=_.rotation,_.map&&(x.map.value=_.map,e(_.map,x.mapTransform)),_.alphaMap&&(x.alphaMap.value=_.alphaMap,e(_.alphaMap,x.alphaMapTransform)),_.alphaTest>0&&(x.alphaTest.value=_.alphaTest)}function d(x,_){x.specular.value.copy(_.specular),x.shininess.value=Math.max(_.shininess,1e-4)}function g(x,_){_.gradientMap&&(x.gradientMap.value=_.gradientMap)}function m(x,_){x.metalness.value=_.metalness,_.metalnessMap&&(x.metalnessMap.value=_.metalnessMap,e(_.metalnessMap,x.metalnessMapTransform)),x.roughness.value=_.roughness,_.roughnessMap&&(x.roughnessMap.value=_.roughnessMap,e(_.roughnessMap,x.roughnessMapTransform)),_.envMap&&(x.envMapIntensity.value=_.envMapIntensity)}function y(x,_,E){x.ior.value=_.ior,_.sheen>0&&(x.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),x.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(x.sheenColorMap.value=_.sheenColorMap,e(_.sheenColorMap,x.sheenColorMapTransform)),_.sheenRoughnessMap&&(x.sheenRoughnessMap.value=_.sheenRoughnessMap,e(_.sheenRoughnessMap,x.sheenRoughnessMapTransform))),_.clearcoat>0&&(x.clearcoat.value=_.clearcoat,x.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(x.clearcoatMap.value=_.clearcoatMap,e(_.clearcoatMap,x.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(x.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,e(_.clearcoatRoughnessMap,x.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(x.clearcoatNormalMap.value=_.clearcoatNormalMap,e(_.clearcoatNormalMap,x.clearcoatNormalMapTransform),x.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===Tn&&x.clearcoatNormalScale.value.negate())),_.dispersion>0&&(x.dispersion.value=_.dispersion),_.retroreflectivity>0&&(x.retroreflectivity.value=_.retroreflectivity),_.iridescence>0&&(x.iridescence.value=_.iridescence,x.iridescenceIOR.value=_.iridescenceIOR,x.iridescenceThicknessMinimum.value=_.iridescenceThicknessRange[0],x.iridescenceThicknessMaximum.value=_.iridescenceThicknessRange[1],_.iridescenceMap&&(x.iridescenceMap.value=_.iridescenceMap,e(_.iridescenceMap,x.iridescenceMapTransform)),_.iridescenceThicknessMap&&(x.iridescenceThicknessMap.value=_.iridescenceThicknessMap,e(_.iridescenceThicknessMap,x.iridescenceThicknessMapTransform))),_.transmission>0&&(x.transmission.value=_.transmission,x.transmissionSamplerMap.value=E.texture,x.transmissionSamplerSize.value.set(E.width,E.height),_.transmissionMap&&(x.transmissionMap.value=_.transmissionMap,e(_.transmissionMap,x.transmissionMapTransform)),x.thickness.value=_.thickness,_.thicknessMap&&(x.thicknessMap.value=_.thicknessMap,e(_.thicknessMap,x.thicknessMapTransform)),x.attenuationDistance.value=_.attenuationDistance,x.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(x.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(x.anisotropyMap.value=_.anisotropyMap,e(_.anisotropyMap,x.anisotropyMapTransform))),x.specularIntensity.value=_.specularIntensity,x.specularColor.value.copy(_.specularColor),_.specularColorMap&&(x.specularColorMap.value=_.specularColorMap,e(_.specularColorMap,x.specularColorMapTransform)),_.specularIntensityMap&&(x.specularIntensityMap.value=_.specularIntensityMap,e(_.specularIntensityMap,x.specularIntensityMapTransform))}function v(x,_){_.matcap&&(x.matcap.value=_.matcap)}function b(x,_){let E=t.get(_).light;x.referencePosition.value.setFromMatrixPosition(E.matrixWorld),x.nearDistance.value=E.shadow.camera.near,x.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function Qv(n,t,e,i){let s={},o={},c=[],a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function u(S,R){let T=R.program;i.uniformBlockBinding(S,T)}function f(S,R){let T=s[S.id];T===void 0&&(x(S),T=d(S),s[S.id]=T,S.addEventListener("dispose",E));let C=R.program;i.updateUBOMapping(S,C);let w=t.render.frame;o[S.id]!==w&&(m(S),o[S.id]=w)}function d(S){let R=g();S.__bindingPointIndex=R;let T=n.createBuffer(),C=S.__size,w=S.usage;return n.bindBuffer(n.UNIFORM_BUFFER,T),n.bufferData(n.UNIFORM_BUFFER,C,w),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,R,T),T}function g(){for(let S=0;S<a;S++)if(c.indexOf(S)===-1)return c.push(S),S;return ie("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function m(S){let R=s[S.id],T=S.uniforms,C=S.__cache;n.bindBuffer(n.UNIFORM_BUFFER,R);for(let w=0,L=T.length;w<L;w++){let F=T[w];if(Array.isArray(F))for(let B=0,H=F.length;B<H;B++)y(F[B],w,B,C);else y(F,w,0,C)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function y(S,R,T,C){if(b(S,R,T,C)===!0){let w=S.__offset,L=S.value;if(Array.isArray(L)){let F=0;for(let B=0;B<L.length;B++){let H=L[B],G=_(H);v(H,S.__data,F),typeof H!="number"&&typeof H!="boolean"&&!H.isMatrix3&&!ArrayBuffer.isView(H)&&(F+=G.storage/Float32Array.BYTES_PER_ELEMENT)}}else v(L,S.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,w,S.__data)}}function v(S,R,T){typeof S=="number"||typeof S=="boolean"?R[0]=S:S.isMatrix3?(R[0]=S.elements[0],R[1]=S.elements[1],R[2]=S.elements[2],R[3]=0,R[4]=S.elements[3],R[5]=S.elements[4],R[6]=S.elements[5],R[7]=0,R[8]=S.elements[6],R[9]=S.elements[7],R[10]=S.elements[8],R[11]=0):ArrayBuffer.isView(S)?R.set(new S.constructor(S.buffer,S.byteOffset,R.length)):S.toArray(R,T)}function b(S,R,T,C){let w=S.value,L=R+"_"+T;if(C[L]===void 0)return typeof w=="number"||typeof w=="boolean"?C[L]=w:ArrayBuffer.isView(w)?C[L]=w.slice():C[L]=w.clone(),!0;{let F=C[L];if(typeof w=="number"||typeof w=="boolean"){if(F!==w)return C[L]=w,!0}else{if(ArrayBuffer.isView(w))return!0;if(F.equals(w)===!1)return F.copy(w),!0}}return!1}function x(S){let R=S.uniforms,T=0,C=16;for(let L=0,F=R.length;L<F;L++){let B=Array.isArray(R[L])?R[L]:[R[L]];for(let H=0,G=B.length;H<G;H++){let z=B[H],$=Array.isArray(z.value)?z.value:[z.value];for(let Y=0,k=$.length;Y<k;Y++){let j=$[Y],Z=_(j),st=T%C,ot=st%Z.boundary,St=st+ot;T+=ot,St!==0&&C-St<Z.storage&&(T+=C-St),z.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),z.__offset=T,T+=Z.storage}}}let w=T%C;return w>0&&(T+=C-w),S.__size=T,S.__cache={},this}function _(S){let R={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(R.boundary=4,R.storage=4):S.isVector2?(R.boundary=8,R.storage=8):S.isVector3||S.isColor?(R.boundary=16,R.storage=12):S.isVector4?(R.boundary=16,R.storage=16):S.isMatrix3?(R.boundary=48,R.storage=48):S.isMatrix4?(R.boundary=64,R.storage=64):S.isTexture?ee("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(S)?(R.boundary=16,R.storage=S.byteLength):ee("WebGLRenderer: Unsupported uniform value type.",S),R}function E(S){let R=S.target;R.removeEventListener("dispose",E);let T=c.indexOf(R.__bindingPointIndex);c.splice(T,1),n.deleteBuffer(s[R.id]),delete s[R.id],delete o[R.id]}function A(){for(let S in s)n.deleteBuffer(s[S]);c=[],s={},o={}}return{bind:u,update:f,dispose:A}}function eb(){return pi===null&&(pi=new ol(tb,16,16,es,ni),pi.name="DFG_LUT",pi.minFilter=pn,pi.magFilter=pn,pi.wrapS=ci,pi.wrapT=ci,pi.generateMipmaps=!1,pi.needsUpdate=!0),pi}var pg,mg,gg,xg,yg,_g,vg,bg,Mg,Sg,wg,Eg,Tg,Ag,Pg,Cg,Ig,Rg,Lg,Ng,Dg,Og,Fg,Ug,Bg,kg,zg,Vg,Hg,Gg,Xg,Wg,Yg,$g,qg,Zg,Jg,jg,Kg,Qg,tx,ex,nx,ix,sx,rx,ox,ax,lx,cx,hx,ux,fx,dx,px,mx,gx,xx,yx,_x,vx,bx,Mx,Sx,wx,Ex,Tx,Ax,Px,Cx,Ix,Rx,Lx,Nx,Dx,Ox,Fx,Ux,Bx,kx,zx,Vx,Hx,Gx,Xx,Wx,Yx,$x,qx,Zx,Jx,jx,Kx,Qx,ty,ey,ny,iy,sy,ry,oy,ay,ly,cy,hy,uy,fy,dy,py,my,gy,xy,yy,_y,vy,by,My,Sy,wy,Ey,Ty,Ay,Py,Cy,Iy,Ry,Ly,Ny,Dy,Oy,Fy,Uy,By,ky,zy,Vy,Hy,Gy,Xy,Wy,Yy,$y,me,Bt,mi,pc,qy,Tp,_r,t_,e_,n_,Wo,sp,su,ru,ou,au,i_,Es,gc,xc,p_,Ap,hu,Pp,Cp,Ip,lp,cp,hp,up,fp,uu,fu,du,lu,vr,iv,sv,mp,lv,mc,pv,mv,xv,_v,bv,Sv,Ev,Cv,mu,gu,Uv,Vv,Hv,Gv,Xv,wp,Yo,cu,Zv,Jv,xu,yu,jv,Rp,tb,pi,yc,qo=fe(()=>{iu();iu();pg=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,mg=`#ifdef USE_ALPHAHASH
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
#endif`,gg=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,xg=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,yg=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,_g=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,vg=`#ifdef USE_AOMAP
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
#endif`,bg=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Mg=`#ifdef USE_BATCHING
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
#endif`,Sg=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,wg=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Eg=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Tg=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Ag=`#ifdef USE_IRIDESCENCE
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
#endif`,Pg=`#ifdef USE_BUMPMAP
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
#endif`,Cg=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Ig=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Rg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Lg=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Ng=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Dg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Og=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Fg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Ug=`#define PI 3.141592653589793
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
} // validated`,Bg=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,kg=`vec3 transformedNormal = objectNormal;
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
#endif`,zg=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Vg=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Hg=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Gg=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Xg="gl_FragColor = linearToOutputTexel( gl_FragColor );",Wg=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Yg=`#ifdef USE_ENVMAP
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
#endif`,$g=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,qg=`#ifdef USE_ENVMAP
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
#endif`,Zg=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Jg=`#ifdef USE_ENVMAP
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
#endif`,jg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Kg=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Qg=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,tx=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ex=`#ifdef USE_GRADIENTMAP
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
}`,nx=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ix=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,sx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,rx=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,ox=`#ifdef USE_ENVMAP
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
#endif`,ax=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,cx=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,hx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,ux=`PhysicalMaterial material;
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
#endif`,fx=`uniform sampler2D dfgLUT;
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
}`,dx=`
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
#endif`,px=`#if defined( RE_IndirectDiffuse )
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
#endif`,mx=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,gx=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,xx=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,yx=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,_x=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,vx=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,bx=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Mx=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Sx=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,wx=`#if defined( USE_POINTS_UV )
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
#endif`,Ex=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Tx=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Ax=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Px=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Cx=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ix=`#ifdef USE_MORPHTARGETS
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
#endif`,Rx=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Lx=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Nx=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Dx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ox=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Fx=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Ux=`#ifdef USE_NORMALMAP
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
#endif`,Bx=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,kx=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,zx=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Vx=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Hx=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Gx=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Xx=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Wx=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Yx=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,$x=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,qx=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Zx=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Jx=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,jx=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Kx=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Qx=`float getShadowMask() {
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
}`,ty=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,ey=`#ifdef USE_SKINNING
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
#endif`,ny=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,iy=`#ifdef USE_SKINNING
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
#endif`,sy=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,ry=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,oy=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ay=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,ly=`#ifdef USE_TRANSMISSION
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
#endif`,cy=`#ifdef USE_TRANSMISSION
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
#endif`,hy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,uy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,fy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,dy=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,py=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,my=`uniform sampler2D t2D;
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
}`,gy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,xy=`#ifdef ENVMAP_TYPE_CUBE
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
}`,yy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,_y=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,vy=`#include <common>
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
}`,by=`#if DEPTH_PACKING == 3200
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
}`,My=`#define DISTANCE
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
}`,Sy=`#define DISTANCE
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
}`,wy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Ey=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ty=`uniform float scale;
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
}`,Ay=`uniform vec3 diffuse;
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
}`,Py=`#include <common>
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
}`,Cy=`uniform vec3 diffuse;
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
}`,Iy=`#define LAMBERT
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
}`,Ry=`#define LAMBERT
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
}`,Ly=`#define MATCAP
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
}`,Ny=`#define MATCAP
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
}`,Dy=`#define NORMAL
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
}`,Oy=`#define NORMAL
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
}`,Fy=`#define PHONG
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
}`,Uy=`#define PHONG
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
}`,By=`#define STANDARD
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
}`,ky=`#define STANDARD
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
}`,zy=`#define TOON
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
}`,Vy=`#define TOON
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
}`,Hy=`uniform float size;
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
}`,Gy=`uniform vec3 diffuse;
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
}`,Xy=`#include <common>
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
}`,Wy=`uniform vec3 color;
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
}`,Yy=`uniform float rotation;
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
}`,$y=`uniform vec3 diffuse;
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
}`,me={alphahash_fragment:pg,alphahash_pars_fragment:mg,alphamap_fragment:gg,alphamap_pars_fragment:xg,alphatest_fragment:yg,alphatest_pars_fragment:_g,aomap_fragment:vg,aomap_pars_fragment:bg,batching_pars_vertex:Mg,batching_vertex:Sg,begin_vertex:wg,beginnormal_vertex:Eg,bsdfs:Tg,iridescence_fragment:Ag,bumpmap_pars_fragment:Pg,clipping_planes_fragment:Cg,clipping_planes_pars_fragment:Ig,clipping_planes_pars_vertex:Rg,clipping_planes_vertex:Lg,color_fragment:Ng,color_pars_fragment:Dg,color_pars_vertex:Og,color_vertex:Fg,common:Ug,cube_uv_reflection_fragment:Bg,defaultnormal_vertex:kg,displacementmap_pars_vertex:zg,displacementmap_vertex:Vg,emissivemap_fragment:Hg,emissivemap_pars_fragment:Gg,colorspace_fragment:Xg,colorspace_pars_fragment:Wg,envmap_fragment:Yg,envmap_common_pars_fragment:$g,envmap_pars_fragment:qg,envmap_pars_vertex:Zg,envmap_physical_pars_fragment:ox,envmap_vertex:Jg,fog_vertex:jg,fog_pars_vertex:Kg,fog_fragment:Qg,fog_pars_fragment:tx,gradientmap_pars_fragment:ex,lightmap_pars_fragment:nx,lights_lambert_fragment:ix,lights_lambert_pars_fragment:sx,lights_pars_begin:rx,lights_toon_fragment:ax,lights_toon_pars_fragment:lx,lights_phong_fragment:cx,lights_phong_pars_fragment:hx,lights_physical_fragment:ux,lights_physical_pars_fragment:fx,lights_fragment_begin:dx,lights_fragment_maps:px,lights_fragment_end:mx,lightprobes_pars_fragment:gx,logdepthbuf_fragment:xx,logdepthbuf_pars_fragment:yx,logdepthbuf_pars_vertex:_x,logdepthbuf_vertex:vx,map_fragment:bx,map_pars_fragment:Mx,map_particle_fragment:Sx,map_particle_pars_fragment:wx,metalnessmap_fragment:Ex,metalnessmap_pars_fragment:Tx,morphinstance_vertex:Ax,morphcolor_vertex:Px,morphnormal_vertex:Cx,morphtarget_pars_vertex:Ix,morphtarget_vertex:Rx,normal_fragment_begin:Lx,normal_fragment_maps:Nx,normal_pars_fragment:Dx,normal_pars_vertex:Ox,normal_vertex:Fx,normalmap_pars_fragment:Ux,clearcoat_normal_fragment_begin:Bx,clearcoat_normal_fragment_maps:kx,clearcoat_pars_fragment:zx,iridescence_pars_fragment:Vx,opaque_fragment:Hx,packing:Gx,premultiplied_alpha_fragment:Xx,project_vertex:Wx,dithering_fragment:Yx,dithering_pars_fragment:$x,roughnessmap_fragment:qx,roughnessmap_pars_fragment:Zx,shadowmap_pars_fragment:Jx,shadowmap_pars_vertex:jx,shadowmap_vertex:Kx,shadowmask_pars_fragment:Qx,skinbase_vertex:ty,skinning_pars_vertex:ey,skinning_vertex:ny,skinnormal_vertex:iy,specularmap_fragment:sy,specularmap_pars_fragment:ry,tonemapping_fragment:oy,tonemapping_pars_fragment:ay,transmission_fragment:ly,transmission_pars_fragment:cy,uv_pars_fragment:hy,uv_pars_vertex:uy,uv_vertex:fy,worldpos_vertex:dy,background_vert:py,background_frag:my,backgroundCube_vert:gy,backgroundCube_frag:xy,cube_vert:yy,cube_frag:_y,depth_vert:vy,depth_frag:by,distance_vert:My,distance_frag:Sy,equirect_vert:wy,equirect_frag:Ey,linedashed_vert:Ty,linedashed_frag:Ay,meshbasic_vert:Py,meshbasic_frag:Cy,meshlambert_vert:Iy,meshlambert_frag:Ry,meshmatcap_vert:Ly,meshmatcap_frag:Ny,meshnormal_vert:Dy,meshnormal_frag:Oy,meshphong_vert:Fy,meshphong_frag:Uy,meshphysical_vert:By,meshphysical_frag:ky,meshtoon_vert:zy,meshtoon_frag:Vy,points_vert:Hy,points_frag:Gy,shadow_vert:Xy,shadow_frag:Wy,sprite_vert:Yy,sprite_frag:$y},Bt={common:{diffuse:{value:new le(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new he},alphaMap:{value:null},alphaMapTransform:{value:new he},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new he}},envmap:{envMap:{value:null},envMapRotation:{value:new he},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new he}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new he}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new he},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new he},normalScale:{value:new Jt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new he},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new he}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new he}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new he}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new le(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new K},probesMax:{value:new K},probesResolution:{value:new K}},points:{diffuse:{value:new le(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new he},alphaTest:{value:0},uvTransform:{value:new he}},sprite:{diffuse:{value:new le(16777215)},opacity:{value:1},center:{value:new Jt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new he},alphaMap:{value:null},alphaMapTransform:{value:new he},alphaTest:{value:0}}},mi={basic:{uniforms:bn([Bt.common,Bt.specularmap,Bt.envmap,Bt.aomap,Bt.lightmap,Bt.fog]),vertexShader:me.meshbasic_vert,fragmentShader:me.meshbasic_frag},lambert:{uniforms:bn([Bt.common,Bt.specularmap,Bt.envmap,Bt.aomap,Bt.lightmap,Bt.emissivemap,Bt.bumpmap,Bt.normalmap,Bt.displacementmap,Bt.fog,Bt.lights,{emissive:{value:new le(0)},envMapIntensity:{value:1}}]),vertexShader:me.meshlambert_vert,fragmentShader:me.meshlambert_frag},phong:{uniforms:bn([Bt.common,Bt.specularmap,Bt.envmap,Bt.aomap,Bt.lightmap,Bt.emissivemap,Bt.bumpmap,Bt.normalmap,Bt.displacementmap,Bt.fog,Bt.lights,{emissive:{value:new le(0)},specular:{value:new le(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:me.meshphong_vert,fragmentShader:me.meshphong_frag},standard:{uniforms:bn([Bt.common,Bt.envmap,Bt.aomap,Bt.lightmap,Bt.emissivemap,Bt.bumpmap,Bt.normalmap,Bt.displacementmap,Bt.roughnessmap,Bt.metalnessmap,Bt.fog,Bt.lights,{emissive:{value:new le(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:me.meshphysical_vert,fragmentShader:me.meshphysical_frag},toon:{uniforms:bn([Bt.common,Bt.aomap,Bt.lightmap,Bt.emissivemap,Bt.bumpmap,Bt.normalmap,Bt.displacementmap,Bt.gradientmap,Bt.fog,Bt.lights,{emissive:{value:new le(0)}}]),vertexShader:me.meshtoon_vert,fragmentShader:me.meshtoon_frag},matcap:{uniforms:bn([Bt.common,Bt.bumpmap,Bt.normalmap,Bt.displacementmap,Bt.fog,{matcap:{value:null}}]),vertexShader:me.meshmatcap_vert,fragmentShader:me.meshmatcap_frag},points:{uniforms:bn([Bt.points,Bt.fog]),vertexShader:me.points_vert,fragmentShader:me.points_frag},dashed:{uniforms:bn([Bt.common,Bt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:me.linedashed_vert,fragmentShader:me.linedashed_frag},depth:{uniforms:bn([Bt.common,Bt.displacementmap]),vertexShader:me.depth_vert,fragmentShader:me.depth_frag},normal:{uniforms:bn([Bt.common,Bt.bumpmap,Bt.normalmap,Bt.displacementmap,{opacity:{value:1}}]),vertexShader:me.meshnormal_vert,fragmentShader:me.meshnormal_frag},sprite:{uniforms:bn([Bt.sprite,Bt.fog]),vertexShader:me.sprite_vert,fragmentShader:me.sprite_frag},background:{uniforms:{uvTransform:{value:new he},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:me.background_vert,fragmentShader:me.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new he}},vertexShader:me.backgroundCube_vert,fragmentShader:me.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:me.cube_vert,fragmentShader:me.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:me.equirect_vert,fragmentShader:me.equirect_frag},distance:{uniforms:bn([Bt.common,Bt.displacementmap,{referencePosition:{value:new K},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:me.distance_vert,fragmentShader:me.distance_frag},shadow:{uniforms:bn([Bt.lights,Bt.fog,{color:{value:new le(0)},opacity:{value:1}}]),vertexShader:me.shadow_vert,fragmentShader:me.shadow_frag}};mi.physical={uniforms:bn([mi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new he},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new he},clearcoatNormalScale:{value:new Jt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new he},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new he},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new he},sheen:{value:0},sheenColor:{value:new le(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new he},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new he},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new he},transmissionSamplerSize:{value:new Jt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new he},attenuationDistance:{value:0},attenuationColor:{value:new le(0)},specularColor:{value:new le(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new he},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new he},anisotropyVector:{value:new Jt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new he}}]),vertexShader:me.meshphysical_vert,fragmentShader:me.meshphysical_frag};pc={r:0,b:0,g:0},qy=new Fe,Tp=new he;Tp.set(-1,0,0,0,1,0,0,0,1);_r=4,t_=6,e_=20,n_=256,Wo=new ur,sp=new le,su=null,ru=0,ou=0,au=!1,i_=new K,Es=new K,gc=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,i=.1,s=100,o={}){let{size:c=256,position:a=i_}=o;su=this._renderer.getRenderTarget(),ru=this._renderer.getActiveCubeFace(),ou=this._renderer.getActiveMipmapLevel(),au=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(c);let u=this._allocateTargets();return u.depthBuffer=!0,this._sceneToCubeUV(t,i,s,u,a),e>0&&this._blur(u,0,0,e),this._applyPMREM(u),this._cleanup(u),u}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ap(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=op(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(su,ru,ou),this._renderer.xr.enabled=au,t.scissorTest=!1,yr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Ki||t.mapping===Ms?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),su=this._renderer.getRenderTarget(),ru=this._renderer.getActiveCubeFace(),ou=this._renderer.getActiveMipmapLevel(),au=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:pn,minFilter:pn,generateMipmaps:!1,type:ni,format:Xn,colorSpace:lo,depthBuffer:!1},s=rp(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=rp(t,e,i);let{_lodMax:o}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=s_(o)),this._blurMaterial=o_(o,t,e),this._ggxMaterial=r_(o,t,e)}return s}_compileMaterial(t){let e=new Ae(new We,t);this._renderer.compile(e,Wo)}_sceneToCubeUV(t,e,i,s,o){let u=new _n(90,1,e,i),f=[1,-1,1,1,1,1],d=[1,1,1,-1,-1,-1],g=this._renderer,m=g.autoClear,y=g.toneMapping;g.getClearColor(sp),g.toneMapping=Qn,g.autoClear=!1,g.state.buffers.depth.getReversed()&&(g.setRenderTarget(s),g.clearDepth(),g.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Ae(new Xi,new Fn({name:"PMREM.Background",side:Tn,depthWrite:!1,depthTest:!1})));let b=this._backgroundBox,x=b.material,_=!1,E=t.background;E?E.isColor&&(x.color.copy(E),t.background=null,_=!0):(x.color.copy(sp),_=!0);for(let A=0;A<6;A++){let S=A%3;S===0?(u.up.set(0,f[A],0),u.position.set(o.x,o.y,o.z),u.lookAt(o.x+d[A],o.y,o.z)):S===1?(u.up.set(0,0,f[A]),u.position.set(o.x,o.y,o.z),u.lookAt(o.x,o.y+d[A],o.z)):(u.up.set(0,f[A],0),u.position.set(o.x,o.y,o.z),u.lookAt(o.x,o.y,o.z+d[A]));let R=this._cubeSize;yr(s,S*R,A>2?R:0,R,R),g.setRenderTarget(s),_&&g.render(b,u),g.render(t,u)}g.toneMapping=y,g.autoClear=m,t.background=E}_textureToCubeUV(t,e){let i=this._renderer,s=t.mapping===Ki||t.mapping===Ms;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=ap()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=op());let o=s?this._cubemapMaterial:this._equirectMaterial,c=this._lodMeshes[0];c.material=o;let a=o.uniforms;a.envMap.value=t;let u=this._cubeSize;yr(e,0,0,3*u,2*u),i.setRenderTarget(e),i.render(c,Wo)}_applyPMREM(t){let e=this._renderer,i=e.autoClear;e.autoClear=!1;let s=this._lodMeshes.length;for(let o=1;o<s;o++)this._applyGGXFilter(t,o-1,o);e.autoClear=i}_applyGGXFilter(t,e,i){let s=this._renderer,o=this._pingPongRenderTarget,c=this._ggxMaterial,a=this._lodMeshes[i];a.material=c;let u=c.uniforms,f=i/(this._lodMeshes.length-1),d=e/(this._lodMeshes.length-1),g=Math.sqrt(f*f-d*d),m=f*1.25,y=g*m,{_lodMax:v}=this,b=this._sizeLods[i],x=3*b*(i>v-_r?i-v+_r:0),_=4*(this._cubeSize-b);u.envMap.value=t.texture,u.roughness.value=y,u.mipInt.value=v-e,yr(o,x,_,3*b,2*b),s.setRenderTarget(o),s.render(a,Wo),u.envMap.value=o.texture,u.roughness.value=0,u.mipInt.value=v-i,yr(t,x,_,3*b,2*b),s.setRenderTarget(t),s.render(a,Wo)}_blur(t,e,i,s){let o=this._pingPongRenderTarget,c=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(t,o,e,i,c),this._blurPass(o,t,i,i,c)}_blurPass(t,e,i,s,o){let c=this._renderer,a=this._blurMaterial,u=this._lodMeshes[s];u.material=a;let f=a.uniforms;f.envMap.value=t.texture,f.sigma.value=o,f.mipInt.value=this._lodMax-i;let d=this._sizeLods[s],g=3*d*(s>this._lodMax-_r?s-this._lodMax+_r:0),m=4*(this._cubeSize-d);yr(e,g,m,3*d,2*d),c.setRenderTarget(e),c.render(u,Wo)}};xc=class extends Cn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new _o(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Xi(5,5,5),o=new Un({name:"CubemapFromEquirect",uniforms:ws(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Tn,blending:di});o.uniforms.tEquirect.value=e;let c=new Ae(s,o),a=e.minFilter;return e.minFilter===Qi&&(e.minFilter=pn),new wl(1,10,this).update(t,c),e.minFilter=a,c.geometry.dispose(),c.material.dispose(),this}clear(t,e=!0,i=!0,s=!0){let o=t.getRenderTarget();for(let c=0;c<6;c++)t.setRenderTarget(this,c),t.clear(e,i,s);t.setRenderTarget(o)}};p_={[Dh]:"LINEAR_TONE_MAPPING",[Oh]:"REINHARD_TONE_MAPPING",[Fh]:"CINEON_TONE_MAPPING",[Uh]:"ACES_FILMIC_TONE_MAPPING",[kh]:"AGX_TONE_MAPPING",[zh]:"NEUTRAL_TONE_MAPPING",[Bh]:"CUSTOM_TONE_MAPPING"};Ap=new En,hu=new Gi(1,1),Pp=new fo,Cp=new sl,Ip=new _o,lp=[],cp=[],hp=new Float32Array(16),up=new Float32Array(9),fp=new Float32Array(4);uu=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=O_(e.type)}},fu=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=ev(e.type)}},du=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){let s=this.seq;for(let o=0,c=s.length;o!==c;++o){let a=s[o];a.setValue(t,e[a.id],i)}}},lu=/(\w+)(\])?(\[|\.)?/g;vr=class{constructor(t,e){this.seq=[],this.map={};let i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let c=0;c<i;++c){let a=t.getActiveUniform(e,c),u=t.getUniformLocation(e,a.name);nv(a,u,this)}let s=[],o=[];for(let c of this.seq)c.type===t.SAMPLER_2D_SHADOW||c.type===t.SAMPLER_CUBE_SHADOW||c.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(c):o.push(c);s.length>0&&(this.seq=s.concat(o))}setValue(t,e,i,s){let o=this.map[e];o!==void 0&&o.setValue(t,i,s)}setOptional(t,e,i){let s=e[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,e,i,s){for(let o=0,c=e.length;o!==c;++o){let a=e[o],u=i[a.id];u.needsUpdate!==!1&&a.setValue(t,u.value,s)}}static seqWithValue(t,e){let i=[];for(let s=0,o=t.length;s!==o;++s){let c=t[s];c.id in e&&i.push(c)}return i}};iv=37297,sv=0;mp=new he;lv={[Dh]:"Linear",[Oh]:"Reinhard",[Fh]:"Cineon",[Uh]:"ACESFilmic",[kh]:"AgX",[zh]:"Neutral",[Bh]:"Custom"};mc=new K;pv=/^[ \t]*#include +<([\w\d./]+)>/gm;mv=new Map;xv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;_v={[Fo]:"SHADOWMAP_TYPE_PCF",[pr]:"SHADOWMAP_TYPE_VSM"};bv={[Ki]:"ENVMAP_TYPE_CUBE",[Ms]:"ENVMAP_TYPE_CUBE",[Uo]:"ENVMAP_TYPE_CUBE_UV"};Sv={[Ms]:"ENVMAP_MODE_REFRACTION"};Ev={[Nh]:"ENVMAP_BLENDING_MULTIPLY",[Nd]:"ENVMAP_BLENDING_MIX",[Dd]:"ENVMAP_BLENDING_ADD"};Cv=0,mu=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,i){let s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(i)===!1&&(s.add(i),i.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){let e=this.shaderCache,i=e.get(t);return i===void 0&&(i=new gu(t),e.set(t,i)),i}},gu=class{constructor(t){this.id=Cv++,this.code=t,this.usedTimes=0}};Uv=0;Vv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Hv=`uniform sampler2D shadow_pass;
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
}`,Gv=[new K(1,0,0),new K(-1,0,0),new K(0,1,0),new K(0,-1,0),new K(0,0,1),new K(0,0,-1)],Xv=[new K(0,-1,0),new K(0,-1,0),new K(0,0,1),new K(0,0,-1),new K(0,-1,0),new K(0,-1,0)],wp=new Fe,Yo=new K,cu=new K;Zv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Jv=`
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

}`,xu=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let i=new bo(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,i=new Un({vertexShader:Zv,fragmentShader:Jv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Ae(new To(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},yu=class extends jn{constructor(t,e){super();let i=this,s=null,o=1,c=null,a="local-floor",u=1,f=null,d=null,g=null,m=null,y=null,v=null,b=typeof XRWebGLBinding<"u",x=new xu,_={},E=e.getContextAttributes(),A=null,S=null,R=[],T=[],C=new Jt,w=null,L=null,F=new _n;F.viewport=new qe;let B=new _n;B.viewport=new qe;let H=[F,B],G=new El,z=null,$=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ct){let pt=R[ct];return pt===void 0&&(pt=new rr,R[ct]=pt),pt.getTargetRaySpace()},this.getControllerGrip=function(ct){let pt=R[ct];return pt===void 0&&(pt=new rr,R[ct]=pt),pt.getGripSpace()},this.getHand=function(ct){let pt=R[ct];return pt===void 0&&(pt=new rr,R[ct]=pt),pt.getHandSpace()};function Y(ct){let pt=T.indexOf(ct.inputSource);if(pt===-1)return;let kt=R[pt];kt!==void 0&&(kt.update(ct.inputSource,ct.frame,f||c),kt.dispatchEvent({type:ct.type,data:ct.inputSource}))}function k(){s.removeEventListener("select",Y),s.removeEventListener("selectstart",Y),s.removeEventListener("selectend",Y),s.removeEventListener("squeeze",Y),s.removeEventListener("squeezestart",Y),s.removeEventListener("squeezeend",Y),s.removeEventListener("end",k),s.removeEventListener("inputsourceschange",j);for(let ct=0;ct<R.length;ct++){let pt=T[ct];pt!==null&&(T[ct]=null,R[ct].disconnect(pt))}z=null,$=null,x.reset();for(let ct in _)delete _[ct];if(t.setRenderTarget(A),y=null,m=null,g=null,s=null,S=null,se.stop(),i.isPresenting=!1,t.setPixelRatio(w),t.setSize(C.width,C.height,!1),L!==null){let ct=L.camera;ct.fov=L.fov,ct.zoom=L.zoom,ct.updateProjectionMatrix(),L=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ct){o=ct,i.isPresenting===!0&&ee("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ct){a=ct,i.isPresenting===!0&&ee("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return f||c},this.setReferenceSpace=function(ct){f=ct},this.getBaseLayer=function(){return m!==null?m:y},this.getBinding=function(){return g===null&&b&&(g=new XRWebGLBinding(s,e)),g},this.getFrame=function(){return v},this.getSession=function(){return s},this.setSession=async function(ct){if(s=ct,s!==null){if(A=t.getRenderTarget(),s.addEventListener("select",Y),s.addEventListener("selectstart",Y),s.addEventListener("selectend",Y),s.addEventListener("squeeze",Y),s.addEventListener("squeezestart",Y),s.addEventListener("squeezeend",Y),s.addEventListener("end",k),s.addEventListener("inputsourceschange",j),E.xrCompatible!==!0&&await e.makeXRCompatible(),w=t.getPixelRatio(),t.getSize(C),b&&"createProjectionLayer"in XRWebGLBinding.prototype){let kt=null,re=null,Dt=null;E.depth&&(Dt=E.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,kt=E.stencil?ts:hi,re=E.stencil?xr:ti);let de={colorFormat:e.RGBA8,depthFormat:Dt,scaleFactor:o};g=this.getBinding(),m=g.createProjectionLayer(de),s.updateRenderState({layers:[m]}),t.setPixelRatio(1),t.setSize(m.textureWidth,m.textureHeight,!1),S=new Cn(m.textureWidth,m.textureHeight,{format:Xn,type:In,depthTexture:new Gi(m.textureWidth,m.textureHeight,re,void 0,void 0,void 0,void 0,void 0,void 0,kt),stencilBuffer:E.stencil,colorSpace:t.outputColorSpace,samples:E.antialias?4:0,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1,storeMultisampledDepthBuffer:m.ignoreDepthValues===!1,storeMultisampledStencilBuffer:m.ignoreDepthValues===!1})}else{let kt={antialias:E.antialias,alpha:!0,depth:E.depth,stencil:E.stencil,framebufferScaleFactor:o};y=new XRWebGLLayer(s,e,kt),s.updateRenderState({baseLayer:y}),t.setPixelRatio(1),t.setSize(y.framebufferWidth,y.framebufferHeight,!1),S=new Cn(y.framebufferWidth,y.framebufferHeight,{format:Xn,type:In,colorSpace:t.outputColorSpace,stencilBuffer:E.stencil,resolveDepthBuffer:y.ignoreDepthValues===!1,resolveStencilBuffer:y.ignoreDepthValues===!1,storeMultisampledDepthBuffer:y.ignoreDepthValues===!1,storeMultisampledStencilBuffer:y.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(u),f=null,c=await s.requestReferenceSpace(a),se.setContext(s),se.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function j(ct){for(let pt=0;pt<ct.removed.length;pt++){let kt=ct.removed[pt],re=T.indexOf(kt);re>=0&&(T[re]=null,R[re].disconnect(kt))}for(let pt=0;pt<ct.added.length;pt++){let kt=ct.added[pt],re=T.indexOf(kt);if(re===-1){for(let de=0;de<R.length;de++)if(de>=T.length){T.push(kt),re=de;break}else if(T[de]===null){T[de]=kt,re=de;break}if(re===-1)break}let Dt=R[re];Dt&&Dt.connect(kt)}}let Z=new K,st=new K;function ot(ct,pt,kt){Z.setFromMatrixPosition(pt.matrixWorld),st.setFromMatrixPosition(kt.matrixWorld);let re=Z.distanceTo(st),Dt=pt.projectionMatrix.elements,de=kt.projectionMatrix.elements,Ge=Dt[14]/(Dt[10]-1),ge=Dt[14]/(Dt[10]+1),ve=(Dt[9]+1)/Dt[5],Ce=(Dt[9]-1)/Dt[5],pe=(Dt[8]-1)/Dt[0],Ie=(de[8]+1)/de[0],Je=Ge*pe,cn=Ge*Ie,Re=re/(-pe+Ie),Ye=Re*-pe;if(pt.matrixWorld.decompose(ct.position,ct.quaternion,ct.scale),ct.translateX(Ye),ct.translateZ(Re),ct.matrixWorld.compose(ct.position,ct.quaternion,ct.scale),ct.matrixWorldInverse.copy(ct.matrixWorld).invert(),Dt[10]===-1)ct.projectionMatrix.copy(pt.projectionMatrix),ct.projectionMatrixInverse.copy(pt.projectionMatrixInverse);else{let tt=Ge+Re,en=ge+Re,we=Je-Ye,V=cn+(re-Ye),I=ve*ge/en*tt,it=Ce*ge/en*tt;ct.projectionMatrix.makePerspective(we,V,I,it,tt,en),ct.projectionMatrixInverse.copy(ct.projectionMatrix).invert()}}function St(ct,pt){pt===null?ct.matrixWorld.copy(ct.matrix):ct.matrixWorld.multiplyMatrices(pt.matrixWorld,ct.matrix),ct.matrixWorldInverse.copy(ct.matrixWorld).invert()}this.updateCamera=function(ct){if(s===null)return;let pt=ct.near,kt=ct.far;x.texture!==null&&(x.depthNear>0&&(pt=x.depthNear),x.depthFar>0&&(kt=x.depthFar)),G.near=B.near=F.near=pt,G.far=B.far=F.far=kt,(z!==G.near||$!==G.far)&&(s.updateRenderState({depthNear:G.near,depthFar:G.far}),z=G.near,$=G.far),G.layers.mask=ct.layers.mask|6,F.layers.mask=G.layers.mask&-5,B.layers.mask=G.layers.mask&-3;let re=ct.parent,Dt=G.cameras;St(G,re);for(let de=0;de<Dt.length;de++)St(Dt[de],re);Dt.length===2?ot(G,F,B):G.projectionMatrix.copy(F.projectionMatrix),L===null&&ct.isPerspectiveCamera&&(L={camera:ct,fov:ct.fov,zoom:ct.zoom}),wt(ct,G,re)};function wt(ct,pt,kt){kt===null?ct.matrix.copy(pt.matrixWorld):(ct.matrix.copy(kt.matrixWorld),ct.matrix.invert(),ct.matrix.multiply(pt.matrixWorld)),ct.matrix.decompose(ct.position,ct.quaternion,ct.scale),ct.updateMatrixWorld(!0),ct.projectionMatrix.copy(pt.projectionMatrix),ct.projectionMatrixInverse.copy(pt.projectionMatrixInverse),ct.isPerspectiveCamera&&(ct.fov=nr*2*Math.atan(1/ct.projectionMatrix.elements[5]),ct.zoom=1)}this.getCamera=function(){return G},this.getFoveation=function(){if(!(m===null&&y===null))return u},this.setFoveation=function(ct){u=ct,m!==null&&(m.fixedFoveation=ct),y!==null&&y.fixedFoveation!==void 0&&(y.fixedFoveation=ct)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(G)},this.getCameraTexture=function(ct){return _[ct]};let Yt=null;function Kt(ct,pt){if(d=pt.getViewerPose(f||c),v=pt,d!==null){let kt=d.views;y!==null&&(t.setRenderTargetFramebuffer(S,y.framebuffer),t.setRenderTarget(S));let re=!1;kt.length!==G.cameras.length&&(G.cameras.length=0,re=!0);for(let ge=0;ge<kt.length;ge++){let ve=kt[ge],Ce=null;if(y!==null)Ce=y.getViewport(ve);else{let Ie=g.getViewSubImage(m,ve);Ce=Ie.viewport,ge===0&&(t.setRenderTargetTextures(S,Ie.colorTexture,Ie.depthStencilTexture),t.setRenderTarget(S))}let pe=H[ge];pe===void 0&&(pe=new _n,pe.layers.enable(ge),pe.viewport=new qe,H[ge]=pe),pe.matrix.fromArray(ve.transform.matrix),pe.matrix.decompose(pe.position,pe.quaternion,pe.scale),pe.projectionMatrix.fromArray(ve.projectionMatrix),pe.projectionMatrixInverse.copy(pe.projectionMatrix).invert(),pe.viewport.set(Ce.x,Ce.y,Ce.width,Ce.height),ge===0&&(G.matrix.copy(pe.matrix),G.matrix.decompose(G.position,G.quaternion,G.scale)),re===!0&&G.cameras.push(pe)}let Dt=s.enabledFeatures;if(Dt&&Dt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&b){g=i.getBinding();let ge=g.getDepthInformation(kt[0]);ge&&ge.isValid&&ge.texture&&x.init(ge,s.renderState)}if(Dt&&Dt.includes("camera-access")&&b){t.state.unbindTexture(),g=i.getBinding();for(let ge=0;ge<kt.length;ge++){let ve=kt[ge].camera;if(ve){let Ce=_[ve];Ce||(Ce=new bo,_[ve]=Ce);let pe=g.getCameraImage(ve);Ce.sourceTexture=pe}}}}for(let kt=0;kt<R.length;kt++){let re=T[kt],Dt=R[kt];re!==null&&Dt!==void 0&&Dt.update(re,pt,f||c)}Yt&&Yt(ct,pt),pt.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:pt}),v=null}let se=new Ep;se.setAnimationLoop(Kt),this.setAnimationLoop=function(ct){Yt=ct},this.dispose=function(){}}},jv=new Fe,Rp=new he;Rp.set(-1,0,0,0,1,0,0,0,1);tb=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),pi=null;yc=class{constructor(t={}){let{canvas:e=Wd(),context:i=null,depth:s=!0,stencil:o=!1,alpha:c=!1,antialias:a=!1,premultipliedAlpha:u=!0,preserveDrawingBuffer:f=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:g=!1,reversedDepthBuffer:m=!1,outputBufferType:y=In}=t;this.isWebGLRenderer=!0;let v;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");v=i.getContextAttributes().alpha}else v=c;let b=y,x=new Set([Dl,Nl,Ll]),_=new Set([In,ti,gr,xr,Il,Rl]),E=new Uint32Array(4),A=new Int32Array(4),S=new K,R=null,T=null,C=[],w=[],L=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Qn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let F=this,B=!1,H=null,G=null,z=null,$=null;this._outputColorSpace=wn;let Y=0,k=0,j=null,Z=-1,st=null,ot=new qe,St=new qe,wt=null,Yt=new le(0),Kt=0,se=e.width,ct=e.height,pt=1,kt=null,re=null,Dt=new qe(0,0,se,ct),de=new qe(0,0,se,ct),Ge=!1,ge=new ar,ve=!1,Ce=!1,pe=new Fe,Ie=new K,Je=new qe,cn={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Re=!1;function Ye(){return j===null?pt:1}let tt=i;function en(N,Q){return e.getContext(N,Q)}let we,V,I,it,U,ft,Et,Tt,mt,yt,Pt,Ht,Lt,At,Gt,Qt,ae,J,Ct,_t,It,Ft,bt;try{let N={alpha:!0,depth:s,stencil:o,antialias:a,premultipliedAlpha:u,preserveDrawingBuffer:f,powerPreference:d,failIfMajorPerformanceCaveat:g};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"186"}`),e.addEventListener("webglcontextlost",Le,!1),e.addEventListener("webglcontextrestored",Se,!1),e.addEventListener("webglcontextcreationerror",De,!1),tt===null){let Q="webgl2";if(tt=en(Q,N),tt===null)throw en(Q)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}qt()}catch(N){throw e.removeEventListener("webglcontextlost",Le,!1),e.removeEventListener("webglcontextrestored",Se,!1),e.removeEventListener("webglcontextcreationerror",De,!1),ie("WebGLRenderer: "+N.message),N}function qt(){we=new l_(tt),we.init(),It=new qv(tt,we),V=new Ky(tt,we,t,It),I=new Yv(tt,we),V.reversedDepthBuffer&&m&&I.buffers.depth.setReversed(!0),G=tt.createFramebuffer(),z=tt.createFramebuffer(),$=tt.createFramebuffer(),it=new u_(tt),U=new Lv,ft=new $v(tt,we,I,U,V,It,it),Et=new a_(F),Tt=new dg(tt),Ft=new Jy(tt,Tt),mt=new c_(tt,Tt,it,Ft),yt=new d_(tt,mt,Tt,Ft,it),J=new f_(tt,V,ft),Gt=new Qy(U),Pt=new Rv(F,Et,we,V,Ft,Gt),Ht=new Kv(F,U),Lt=new Dv,At=new zv(we),ae=new Zy(F,Et,I,yt,v,u),Qt=new Wv(F,yt,V),bt=new Qv(tt,it,V,I),Ct=new jy(tt,we,it),_t=new h_(tt,we,it),it.programs=Pt.programs,F.capabilities=V,F.extensions=we,F.properties=U,F.renderLists=Lt,F.shadowMap=Qt,F.state=I,F.info=it}b!==In&&(L=new m_(b,e.width,e.height,a,s,o));let Vt=new yu(F,tt);this.xr=Vt,this.getContext=function(){return tt},this.getContextAttributes=function(){return tt.getContextAttributes()},this.forceContextLoss=function(){let N=we.get("WEBGL_lose_context");N&&N.loseContext()},this.forceContextRestore=function(){let N=we.get("WEBGL_lose_context");N&&N.restoreContext()},this.getPixelRatio=function(){return pt},this.setPixelRatio=function(N){N!==void 0&&(pt=N,this.setSize(se,ct,!1))},this.getSize=function(N){return N.set(se,ct)},this.setSize=function(N,Q,ht=!0){if(Vt.isPresenting){ee("WebGLRenderer: Can't change size while VR device is presenting.");return}se=N,ct=Q,e.width=Math.floor(N*pt),e.height=Math.floor(Q*pt),ht===!0&&(e.style.width=N+"px",e.style.height=Q+"px"),L!==null&&L.setSize(e.width,e.height),this.setViewport(0,0,N,Q)},this.getDrawingBufferSize=function(N){return N.set(se*pt,ct*pt).floor()},this.setDrawingBufferSize=function(N,Q,ht){se=N,ct=Q,pt=ht,e.width=Math.floor(N*ht),e.height=Math.floor(Q*ht),this.setViewport(0,0,N,Q)},this.setEffects=function(N){if(b===In){ie("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(N){for(let Q=0;Q<N.length;Q++)if(N[Q].isOutputPass===!0){ee("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}L.setEffects(N||[])},this.getCurrentViewport=function(N){return N.copy(ot)},this.getViewport=function(N){return N.copy(Dt)},this.setViewport=function(N,Q,ht,at){N.isVector4?Dt.set(N.x,N.y,N.z,N.w):Dt.set(N,Q,ht,at),I.viewport(ot.copy(Dt).multiplyScalar(pt).round())},this.getScissor=function(N){return N.copy(de)},this.setScissor=function(N,Q,ht,at){N.isVector4?de.set(N.x,N.y,N.z,N.w):de.set(N,Q,ht,at),I.scissor(St.copy(de).multiplyScalar(pt).round())},this.getScissorTest=function(){return Ge},this.setScissorTest=function(N){I.setScissorTest(Ge=N)},this.setOpaqueSort=function(N){kt=N},this.setTransparentSort=function(N){re=N},this.getClearColor=function(N){return N.copy(ae.getClearColor())},this.setClearColor=function(){ae.setClearColor(...arguments)},this.getClearAlpha=function(){return ae.getClearAlpha()},this.setClearAlpha=function(){ae.setClearAlpha(...arguments)},this.clear=function(N=!0,Q=!0,ht=!0){let at=0;if(N){let lt=!1;if(j!==null){let Ut=j.texture.format;lt=x.has(Ut)}if(lt){let Ut=j.texture.type,Rt=_.has(Ut),Ot=ae.getClearColor(),Xt=ae.getClearAlpha(),Zt=Ot.r,Nt=Ot.g,xe=Ot.b;Rt?(E[0]=Zt,E[1]=Nt,E[2]=xe,E[3]=Xt,tt.clearBufferuiv(tt.COLOR,0,E)):(A[0]=Zt,A[1]=Nt,A[2]=xe,A[3]=Xt,tt.clearBufferiv(tt.COLOR,0,A))}else at|=tt.COLOR_BUFFER_BIT}Q&&(at|=tt.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),ht&&(at|=tt.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),at!==0&&tt.clear(at)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(N){N.setRenderer(this),H=N},this.dispose=function(){e.removeEventListener("webglcontextlost",Le,!1),e.removeEventListener("webglcontextrestored",Se,!1),e.removeEventListener("webglcontextcreationerror",De,!1),ae.dispose(),Lt.dispose(),At.dispose(),U.dispose(),Et.dispose(),yt.dispose(),Ft.dispose(),bt.dispose(),Pt.dispose(),Vt.dispose(),Vt.removeEventListener("sessionstart",O),Vt.removeEventListener("sessionend",X),rt.stop()};function Le(N){N.preventDefault(),uo("WebGLRenderer: Context Lost."),B=!0}function Se(){uo("WebGLRenderer: Context Restored."),B=!1;let N=it.autoReset,Q=Qt.enabled,ht=Qt.autoUpdate,at=Qt.needsUpdate,lt=Qt.type;qt(),it.autoReset=N,Qt.enabled=Q,Qt.autoUpdate=ht,Qt.needsUpdate=at,Qt.type=lt}function De(N){ie("WebGLRenderer: A WebGL context could not be created. Reason: ",N.statusMessage)}function Mn(N){let Q=N.target;Q.removeEventListener("dispose",Mn),is(Q)}function is(N){Tr(N),U.remove(N)}function Tr(N){let Q=U.get(N).programs;Q!==void 0&&(Q.forEach(function(ht){Pt.releaseProgram(ht)}),N.isShaderMaterial&&Pt.releaseShaderCache(N))}this.renderBufferDirect=function(N,Q,ht,at,lt,Ut){Q===null&&(Q=cn);let Rt=lt.isMesh&&lt.matrixWorld.determinantAffine()<0,Ot=$e(N,Q,ht,at,lt);I.setMaterial(at,Rt);let Xt=ht.index,Zt=1;if(at.wireframe===!0){if(Xt=mt.getWireframeAttribute(ht),Xt===void 0)return;Zt=2}let Nt=ht.drawRange,xe=ht.attributes.position,Wt=Nt.start*Zt,Te=(Nt.start+Nt.count)*Zt;Ut!==null&&(Wt=Math.max(Wt,Ut.start*Zt),Te=Math.min(Te,(Ut.start+Ut.count)*Zt)),Xt!==null?(Wt=Math.max(Wt,0),Te=Math.min(Te,Xt.count)):xe!=null&&(Wt=Math.max(Wt,0),Te=Math.min(Te,xe.count));let Qe=Te-Wt;if(Qe<0||Qe===1/0)return;Ft.setup(lt,at,Ot,ht,Xt);let ke,r=Ct;if(Xt!==null&&(ke=Tt.get(Xt),r=_t,r.setIndex(ke)),lt.isMesh)at.wireframe===!0?(I.setLineWidth(at.wireframeLinewidth*Ye()),r.setMode(tt.LINES)):r.setMode(tt.TRIANGLES);else if(lt.isLine){let l=at.linewidth;l===void 0&&(l=1),I.setLineWidth(l*Ye()),lt.isLineSegments?r.setMode(tt.LINES):lt.isLineLoop?r.setMode(tt.LINE_LOOP):r.setMode(tt.LINE_STRIP)}else lt.isPoints?r.setMode(tt.POINTS):lt.isSprite&&r.setMode(tt.TRIANGLES);if(lt.isBatchedMesh)if(we.get("WEBGL_multi_draw"))r.renderMultiDraw(lt._multiDrawStarts,lt._multiDrawCounts,lt._multiDrawCount);else{let l=lt._multiDrawStarts,h=lt._multiDrawCounts,p=lt._multiDrawCount,M=Xt?Tt.get(Xt).bytesPerElement:1,P=U.get(at).currentProgram.getUniforms();for(let D=0;D<p;D++)P.setValue(tt,"_gl_DrawID",D),r.render(l[D]/M,h[D])}else if(lt.isInstancedMesh)r.renderInstances(Wt,Qe,lt.count);else if(ht.isInstancedBufferGeometry){let l=ht._maxInstanceCount!==void 0?ht._maxInstanceCount:1/0,h=Math.min(ht.instanceCount,l);r.renderInstances(Wt,Qe,h)}else r.render(Wt,Qe)};function As(N,Q,ht,at){H!==null&&N.isNodeMaterial&&H.setObject(at,N),ve===!0&&Gt.setState(N,ht,!1),N.transparent===!0&&N.side===vn&&N.forceSinglePass===!1?(N.side=Tn,N.needsUpdate=!0,gt(N,Q,at),N.side=ji,N.needsUpdate=!0,gt(N,Q,at),N.side=vn):gt(N,Q,at)}this.compile=function(N,Q,ht=null){ht===null&&(ht=N),H!==null&&H.renderStart(N,Q,ht),T=At.get(ht),T.init(Q),w.push(T),ht.traverseVisible(function(lt){lt.isLight&&lt.layers.test(Q.layers)&&(T.pushLight(lt),lt.castShadow&&T.pushShadow(lt))}),N!==ht&&N.traverseVisible(function(lt){lt.isLight&&lt.layers.test(Q.layers)&&(T.pushLight(lt),lt.castShadow&&T.pushShadow(lt))}),T.setupLights(),H!==null&&H.updateLights(T.state.lightsArray),Ce=this.localClippingEnabled,ve=Gt.init(this.clippingPlanes,Ce),ve===!0&&Gt.setGlobalState(this.clippingPlanes,Q),H!==null&&Qt.render(T.state.shadowsArray,ht,Q);let at=new Set;return N.traverse(function(lt){if(!(lt.isMesh||lt.isPoints||lt.isLine||lt.isSprite))return;let Ut=lt.material;if(Ut)if(Array.isArray(Ut))for(let Rt=0;Rt<Ut.length;Rt++){let Ot=Ut[Rt];As(Ot,ht,Q,lt),at.add(Ot)}else As(Ut,ht,Q,lt),at.add(Ut)}),T=w.pop(),H!==null&&H.renderEnd(),at},this.compileAsync=function(N,Q,ht=null){let at=this.compile(N,Q,ht);return new Promise(lt=>{function Ut(){if(at.forEach(function(Rt){let Xt=U.get(Rt).currentProgram;(Xt===void 0||Xt.isReady())&&at.delete(Rt)}),at.size===0){lt(N);return}setTimeout(Ut,10)}we.get("KHR_parallel_shader_compile")!==null?Ut():setTimeout(Ut,10)})};let ss=null;function Ps(N){ss&&ss(N)}function O(){rt.stop()}function X(){rt.start()}let rt=new Ep;rt.setAnimationLoop(Ps),typeof self<"u"&&rt.setContext(self),this.setAnimationLoop=function(N){ss=N,Vt.setAnimationLoop(N),N===null?rt.stop():rt.start()},Vt.addEventListener("sessionstart",O),Vt.addEventListener("sessionend",X),this.render=function(N,Q){if(Q!==void 0&&Q.isCamera!==!0){ie("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(B===!0)return;H!==null&&H.renderStart(N,Q);let ht=Vt.enabled===!0&&Vt.isPresenting===!0,at=L!==null&&(j===null||ht)&&L.begin(F,j);if(N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),Q.parent===null&&Q.matrixWorldAutoUpdate===!0&&Q.updateMatrixWorld(),Vt.enabled===!0&&Vt.isPresenting===!0&&(L===null||L.isCompositing()===!1)&&(Vt.cameraAutoUpdate===!0&&Vt.updateCamera(Q),Q=Vt.getCamera()),N.isScene===!0&&N.onBeforeRender(F,N,Q,j),T=At.get(N,w.length),T.init(Q),T.state.textureUnits=ft.getTextureUnits(),w.push(T),pe.multiplyMatrices(Q.projectionMatrix,Q.matrixWorldInverse),ge.setFromProjectionMatrix(pe,Jn,Q.reversedDepth),Ce=this.localClippingEnabled,ve=Gt.init(this.clippingPlanes,Ce),R=Lt.get(N,C.length),R.init(),C.push(R),Vt.enabled===!0&&Vt.isPresenting===!0){let Rt=F.xr.getDepthSensingMesh();Rt!==null&&ut(Rt,Q,-1/0,F.sortObjects)}ut(N,Q,0,F.sortObjects),R.finish(),H!==null&&H.updateLights(T.state.lightsArray),F.sortObjects===!0&&R.sort(kt,re),Re=Vt.enabled===!1||Vt.isPresenting===!1||Vt.hasDepthSensing()===!1,Re&&ae.addToRenderList(R,N),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),ve===!0&&Gt.beginShadows();let lt=T.state.shadowsArray;if(Qt.render(lt,N,Q),ve===!0&&Gt.endShadows(),(at&&L.hasRenderPass())===!1){let Rt=R.opaque,Ot=R.transmissive;if(T.setupLights(),Q.isArrayCamera){let Xt=Q.cameras;if(Ot.length>0)for(let Zt=0,Nt=Xt.length;Zt<Nt;Zt++){let xe=Xt[Zt];dt(Rt,Ot,N,xe)}Re&&ae.render(N);for(let Zt=0,Nt=Xt.length;Zt<Nt;Zt++){let xe=Xt[Zt];nt(R,N,xe,xe.viewport)}}else Ot.length>0&&dt(Rt,Ot,N,Q),Re&&ae.render(N),nt(R,N,Q)}j!==null&&k===0&&(ft.updateMultisampleRenderTarget(j),ft.updateRenderTargetMipmap(j)),at&&L.end(F),N.isScene===!0&&N.onAfterRender(F,N,Q),Ft.resetDefaultState(),Z=-1,st=null,w.pop(),w.length>0?(T=w[w.length-1],ft.setTextureUnits(T.state.textureUnits),ve===!0&&Gt.setGlobalState(F.clippingPlanes,T.state.camera)):T=null,C.pop(),C.length>0?R=C[C.length-1]:R=null,H!==null&&H.renderEnd()};function ut(N,Q,ht,at){if(N.visible===!1)return;if(N.layers.test(Q.layers)){if(N.isGroup)ht=N.renderOrder;else if(N.isLOD)N.autoUpdate===!0&&N.update(Q);else if(N.isLightProbeGrid)T.pushLightProbeGrid(N);else if(N.isLight)T.pushLight(N),N.castShadow&&T.pushShadow(N);else if(N.isSprite){if(!N.frustumCulled||N.intersectsFrustum(ge)){at&&Je.setFromMatrixPosition(N.matrixWorld).applyMatrix4(pe);let Rt=yt.update(N),Ot=N.material;Ot.visible&&R.push(N,Rt,Ot,ht,Je.z,null,Q)}}else if((N.isMesh||N.isLine||N.isPoints)&&(!N.frustumCulled||N.intersectsFrustum(ge))){let Rt=yt.update(N),Ot=N.material;if(at&&(N.boundingSphere!==void 0?(N.boundingSphere===null&&N.computeBoundingSphere(),Je.copy(N.boundingSphere.center)):(Rt.boundingSphere===null&&Rt.computeBoundingSphere(),Je.copy(Rt.boundingSphere.center)),Je.applyMatrix4(N.matrixWorld).applyMatrix4(pe)),Array.isArray(Ot)){let Xt=Rt.groups;for(let Zt=0,Nt=Xt.length;Zt<Nt;Zt++){let xe=Xt[Zt],Wt=Ot[xe.materialIndex];Wt&&Wt.visible&&R.push(N,Rt,Wt,ht,Je.z,xe,Q)}}else Ot.visible&&R.push(N,Rt,Ot,ht,Je.z,null,Q)}}let Ut=N.children;for(let Rt=0,Ot=Ut.length;Rt<Ot;Rt++)ut(Ut[Rt],Q,ht,at)}function nt(N,Q,ht,at){let{opaque:lt,transmissive:Ut,transparent:Rt}=N;T.setupLightsView(ht),ve===!0&&Gt.setGlobalState(F.clippingPlanes,ht),at&&I.viewport(ot.copy(at)),lt.length>0&&zt(lt,Q,ht),Ut.length>0&&zt(Ut,Q,ht),Rt.length>0&&zt(Rt,Q,ht),I.buffers.depth.setTest(!0),I.buffers.depth.setMask(!0),I.buffers.color.setMask(!0),I.setPolygonOffset(!1)}function dt(N,Q,ht,at){if((ht.isScene===!0?ht.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[at.id]===void 0){let Wt=we.has("EXT_color_buffer_half_float")||we.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[at.id]=new Cn(1,1,{generateMipmaps:!0,type:Wt?ni:In,minFilter:Qi,samples:Math.max(4,V.samples),stencilBuffer:o,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Me.workingColorSpace})}let Ut=T.state.transmissionRenderTarget[at.id],Rt=at.viewport||ot;Ut.setSize(Rt.z*F.transmissionResolutionScale,Rt.w*F.transmissionResolutionScale);let Ot=F.getRenderTarget(),Xt=F.getActiveCubeFace(),Zt=F.getActiveMipmapLevel();F.setRenderTarget(Ut),F.getClearColor(Yt),Kt=F.getClearAlpha(),Kt<1&&F.setClearColor(16777215,.5),F.clear(),Re&&ae.render(ht);let Nt=F.toneMapping;F.toneMapping=Qn;let xe=at.viewport;if(at.viewport!==void 0&&(at.viewport=void 0),T.setupLightsView(at),ve===!0&&Gt.setGlobalState(F.clippingPlanes,at),zt(N,ht,at),ft.updateMultisampleRenderTarget(Ut),ft.updateRenderTargetMipmap(Ut),we.has("WEBGL_multisampled_render_to_texture")===!1){let Wt=!1;for(let Te=0,Qe=Q.length;Te<Qe;Te++){let ke=Q[Te],{object:r,geometry:l,material:h,group:p}=ke;if(h.side===vn&&r.layers.test(at.layers)){let M=h.side;h.side=Tn,h.needsUpdate=!0,ne(r,ht,at,l,h,p),h.side=M,h.needsUpdate=!0,Wt=!0}}Wt===!0&&(ft.updateMultisampleRenderTarget(Ut),ft.updateRenderTargetMipmap(Ut))}F.setRenderTarget(Ot,Xt,Zt),F.setClearColor(Yt,Kt),xe!==void 0&&(at.viewport=xe),F.toneMapping=Nt}function zt(N,Q,ht){let at=Q.isScene===!0?Q.overrideMaterial:null;for(let lt=0,Ut=N.length;lt<Ut;lt++){let Rt=N[lt],{object:Ot,geometry:Xt,group:Zt}=Rt,Nt=Rt.material;Nt.allowOverride===!0&&at!==null&&(Nt=at),Ot.layers.test(ht.layers)&&ne(Ot,Q,ht,Xt,Nt,Zt)}}function ne(N,Q,ht,at,lt,Ut){H!==null&&lt.isNodeMaterial&&H.setObject(N,lt),N.onBeforeRender(F,Q,ht,at,lt,Ut),N.modelViewMatrix.multiplyMatrices(ht.matrixWorldInverse,N.matrixWorld),N.normalMatrix.getNormalMatrix(N.modelViewMatrix),lt.onBeforeRender(F,Q,ht,at,N,Ut),lt.transparent===!0&&lt.side===vn&&lt.forceSinglePass===!1?(lt.side=Tn,lt.needsUpdate=!0,F.renderBufferDirect(ht,Q,at,lt,N,Ut),lt.side=ji,lt.needsUpdate=!0,F.renderBufferDirect(ht,Q,at,lt,N,Ut),lt.side=vn):F.renderBufferDirect(ht,Q,at,lt,N,Ut),N.onAfterRender(F,Q,ht,at,lt,Ut)}function gt(N,Q,ht){Q.isScene!==!0&&(Q=cn);let at=U.get(N),lt=T.state.lights,Ut=T.state.shadowsArray,Rt=lt.state.version,Ot=Pt.getParameters(N,lt.state,Ut,Q,ht,T.state.lightProbeGridArray),Xt=Pt.getProgramCacheKey(Ot),Zt=at.programs;at.environment=N.isMeshStandardMaterial||N.isMeshLambertMaterial||N.isMeshPhongMaterial?Q.environment:null,at.fog=Q.fog;let Nt=N.isMeshStandardMaterial||N.isMeshLambertMaterial&&!N.envMap||N.isMeshPhongMaterial&&!N.envMap;at.envMap=Et.get(N.envMap||at.environment,Nt),at.envMapRotation=at.environment!==null&&N.envMap===null?Q.environmentRotation:N.envMapRotation,Zt===void 0&&(N.addEventListener("dispose",Mn),Zt=new Map,at.programs=Zt);let xe=Zt.get(Xt);if(xe!==void 0){if(at.currentProgram===xe&&at.lightsStateVersion===Rt)return te(N,Ot),xe}else Ot.uniforms=Pt.getUniforms(N),H!==null&&N.isNodeMaterial&&H.build(N,ht,Ot),N.onBeforeCompile(Ot,F),xe=Pt.acquireProgram(Ot,Xt),Zt.set(Xt,xe),at.uniforms=Ot.uniforms;let Wt=at.uniforms;return(!N.isShaderMaterial&&!N.isRawShaderMaterial||N.clipping===!0)&&(Wt.clippingPlanes=Gt.uniform),te(N,Ot),at.needsLights=gi(N),at.lightsStateVersion=Rt,at.needsLights&&(Wt.ambientLightColor.value=lt.state.ambient,Wt.lightProbe.value=lt.state.probe,Wt.sunLights.value=lt.state.sun,Wt.sunLightShadows.value=lt.state.sunShadow,Wt.directionalLights.value=lt.state.directional,Wt.directionalLightShadows.value=lt.state.directionalShadow,Wt.spotLights.value=lt.state.spot,Wt.spotLightShadows.value=lt.state.spotShadow,Wt.rectAreaLights.value=lt.state.rectArea,Wt.ltc_1.value=lt.state.rectAreaLTC1,Wt.ltc_2.value=lt.state.rectAreaLTC2,Wt.pointLights.value=lt.state.point,Wt.pointLightShadows.value=lt.state.pointShadow,Wt.hemisphereLights.value=lt.state.hemi,Wt.sunShadowMatrix.value=lt.state.sunShadowMatrix,Wt.sunShadowCascade.value=lt.state.sunShadowCascade,Wt.directionalShadowMatrix.value=lt.state.directionalShadowMatrix,Wt.spotLightMatrix.value=lt.state.spotLightMatrix,Wt.spotLightMap.value=lt.state.spotLightMap,Wt.pointShadowMatrix.value=lt.state.pointShadowMatrix),at.lightProbeGrid=T.state.lightProbeGridArray.length>0,at.currentProgram=xe,at.uniformsList=null,xe}function $t(N){if(N.uniformsList===null){let Q=N.currentProgram.getUniforms();N.uniformsList=vr.seqWithValue(Q.seq,N.uniforms)}return N.uniformsList}function te(N,Q){let ht=U.get(N);ht.outputColorSpace=Q.outputColorSpace,ht.batching=Q.batching,ht.batchingColor=Q.batchingColor,ht.instancing=Q.instancing,ht.instancingColor=Q.instancingColor,ht.instancingMorph=Q.instancingMorph,ht.skinning=Q.skinning,ht.morphTargets=Q.morphTargets,ht.morphNormals=Q.morphNormals,ht.morphColors=Q.morphColors,ht.morphTargetsCount=Q.morphTargetsCount,ht.numClippingPlanes=Q.numClippingPlanes,ht.numIntersection=Q.numClipIntersection,ht.vertexAlphas=Q.vertexAlphas,ht.vertexTangents=Q.vertexTangents,ht.toneMapping=Q.toneMapping}function Pe(N,Q){if(N.length===0)return null;if(N.length===1)return N[0].texture!==null?N[0]:null;S.setFromMatrixPosition(Q.matrixWorld);for(let ht=0,at=N.length;ht<at;ht++){let lt=N[ht];if(lt.texture!==null&&lt.boundingBox.containsPoint(S))return lt}return null}function $e(N,Q,ht,at,lt){Q.isScene!==!0&&(Q=cn),ft.resetTextureUnits();let Ut=Q.fog,Rt=at.isMeshStandardMaterial||at.isMeshLambertMaterial||at.isMeshPhongMaterial?Q.environment:null,Ot=j===null?F.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:Me.workingColorSpace,Xt=at.isMeshStandardMaterial||at.isMeshLambertMaterial&&!at.envMap||at.isMeshPhongMaterial&&!at.envMap,Zt=Et.get(at.envMap||Rt,Xt),Nt=at.vertexColors===!0&&!!ht.attributes.color&&ht.attributes.color.itemSize===4,xe=!!ht.attributes.tangent&&(!!at.normalMap||at.anisotropy>0),Wt=!!ht.morphAttributes.position,Te=!!ht.morphAttributes.normal,Qe=!!ht.morphAttributes.color,ke=Qn;at.toneMapped&&(j===null||j.isXRRenderTarget===!0)&&(ke=F.toneMapping);let r=ht.morphAttributes.position||ht.morphAttributes.normal||ht.morphAttributes.color,l=r!==void 0?r.length:0,h=U.get(at),p=T.state.lights;if(ve===!0&&(Ce===!0||N!==st)){let Mt=N===st&&at.id===Z;Gt.setState(at,N,Mt)}let M=!1;at.version===h.__version?(h.needsLights&&h.lightsStateVersion!==p.state.version||h.outputColorSpace!==Ot||lt.isBatchedMesh&&h.batching===!1||!lt.isBatchedMesh&&h.batching===!0||lt.isBatchedMesh&&h.batchingColor===!0&&lt._colorsTexture===null||lt.isBatchedMesh&&h.batchingColor===!1&&lt._colorsTexture!==null||lt.isInstancedMesh&&h.instancing===!1||!lt.isInstancedMesh&&h.instancing===!0||lt.isSkinnedMesh&&h.skinning===!1||!lt.isSkinnedMesh&&h.skinning===!0||lt.isInstancedMesh&&h.instancingColor===!0&&lt.instanceColor===null||lt.isInstancedMesh&&h.instancingColor===!1&&lt.instanceColor!==null||lt.isInstancedMesh&&h.instancingMorph===!0&&lt.morphTexture===null||lt.isInstancedMesh&&h.instancingMorph===!1&&lt.morphTexture!==null||h.envMap!==Zt||at.fog===!0&&h.fog!==Ut||h.numClippingPlanes!==void 0&&(h.numClippingPlanes!==Gt.numPlanes||h.numIntersection!==Gt.numIntersection)||h.vertexAlphas!==Nt||h.vertexTangents!==xe||h.morphTargets!==Wt||h.morphNormals!==Te||h.morphColors!==Qe||h.toneMapping!==ke||h.morphTargetsCount!==l||!!h.lightProbeGrid!=T.state.lightProbeGridArray.length>0)&&(M=!0):(M=!0,h.__version=at.version);let P=h.currentProgram;M===!0&&(P=gt(at,Q,lt),H&&at.isNodeMaterial&&H.onUpdateProgram(at,P,h));let D=!1,W=!1,q=!1,et=P.getUniforms(),vt=h.uniforms;if(I.useProgram(P.program)&&(D=!0,W=!0,q=!0),at.id!==Z&&(Z=at.id,W=!0),h.needsLights){let Mt=Pe(T.state.lightProbeGridArray,lt);h.lightProbeGrid!==Mt&&(h.lightProbeGrid=Mt,W=!0)}if(D||st!==N){I.buffers.depth.getReversed()&&N.reversedDepth!==!0&&(N._reversedDepth=!0,N.updateProjectionMatrix()),et.setValue(tt,"projectionMatrix",N.projectionMatrix),et.setValue(tt,"viewMatrix",N.matrixWorldInverse);let jt=et.map.cameraPosition;jt!==void 0&&jt.setValue(tt,Ie.setFromMatrixPosition(N.matrixWorld)),V.logarithmicDepthBuffer&&et.setValue(tt,"logDepthBufFC",2/(Math.log(N.far+1)/Math.LN2)),(at.isMeshPhongMaterial||at.isMeshToonMaterial||at.isMeshLambertMaterial||at.isMeshBasicMaterial||at.isMeshStandardMaterial||at.isShaderMaterial)&&et.setValue(tt,"isOrthographic",N.isOrthographicCamera===!0),st!==N&&(st=N,W=!0,q=!0)}if(h.needsLights&&(p.state.sunShadowMap.length>0&&et.setValue(tt,"sunShadowMap",p.state.sunShadowMap,ft),p.state.directionalShadowMap.length>0&&et.setValue(tt,"directionalShadowMap",p.state.directionalShadowMap,ft),p.state.spotShadowMap.length>0&&et.setValue(tt,"spotShadowMap",p.state.spotShadowMap,ft),p.state.pointShadowMap.length>0&&et.setValue(tt,"pointShadowMap",p.state.pointShadowMap,ft)),lt.isSkinnedMesh){et.setOptional(tt,lt,"bindMatrix"),et.setOptional(tt,lt,"bindMatrixInverse");let Mt=lt.skeleton;Mt&&(Mt.boneTexture===null&&Mt.computeBoneTexture(),et.setValue(tt,"boneTexture",Mt.boneTexture,ft))}lt.isBatchedMesh&&(et.setOptional(tt,lt,"batchingTexture"),et.setValue(tt,"batchingTexture",lt._matricesTexture,ft),et.setOptional(tt,lt,"batchingIdTexture"),et.setValue(tt,"batchingIdTexture",lt._indirectTexture,ft),et.setOptional(tt,lt,"batchingColorTexture"),lt._colorsTexture!==null&&et.setValue(tt,"batchingColorTexture",lt._colorsTexture,ft));let xt=ht.morphAttributes;if((xt.position!==void 0||xt.normal!==void 0||xt.color!==void 0)&&J.update(lt,ht,P),(W||h.receiveShadow!==lt.receiveShadow)&&(h.receiveShadow=lt.receiveShadow,et.setValue(tt,"receiveShadow",lt.receiveShadow)),(at.isMeshStandardMaterial||at.isMeshLambertMaterial||at.isMeshPhongMaterial)&&at.envMap===null&&Q.environment!==null&&(vt.envMapIntensity.value=Q.environmentIntensity),vt.dfgLUT!==void 0&&(vt.dfgLUT.value=eb()),W){if(et.setValue(tt,"toneMappingExposure",F.toneMappingExposure),h.needsLights&&je(vt,q),Ut&&at.fog===!0&&Ht.refreshFogUniforms(vt,Ut),Ht.refreshMaterialUniforms(vt,at,pt,ct,T.state.transmissionRenderTarget[N.id]),h.needsLights&&h.lightProbeGrid){let Mt=h.lightProbeGrid;vt.probesSH.value=Mt.texture,vt.probesMin.value.copy(Mt.boundingBox.min),vt.probesMax.value.copy(Mt.boundingBox.max),vt.probesResolution.value.copy(Mt.resolution)}vr.upload(tt,$t(h),vt,ft)}if(at.isShaderMaterial&&at.uniformsNeedUpdate===!0&&(vr.upload(tt,$t(h),vt,ft),at.uniformsNeedUpdate=!1),at.isSpriteMaterial&&et.setValue(tt,"center",lt.center),et.setValue(tt,"modelViewMatrix",lt.modelViewMatrix),et.setValue(tt,"normalMatrix",lt.normalMatrix),et.setValue(tt,"modelMatrix",lt.matrixWorld),at.uniformsGroups!==void 0){let Mt=at.uniformsGroups;for(let jt=0,ce=Mt.length;jt<ce;jt++){let ye=Mt[jt];bt.update(ye,P),bt.bind(ye,P)}}return P}function je(N,Q){N.ambientLightColor.needsUpdate=Q,N.lightProbe.needsUpdate=Q,N.sunLights.needsUpdate=Q,N.sunLightShadows.needsUpdate=Q,N.directionalLights.needsUpdate=Q,N.directionalLightShadows.needsUpdate=Q,N.pointLights.needsUpdate=Q,N.pointLightShadows.needsUpdate=Q,N.spotLights.needsUpdate=Q,N.spotLightShadows.needsUpdate=Q,N.rectAreaLights.needsUpdate=Q,N.hemisphereLights.needsUpdate=Q}function gi(N){return N.isMeshLambertMaterial||N.isMeshToonMaterial||N.isMeshPhongMaterial||N.isMeshStandardMaterial||N.isShadowMaterial||N.isShaderMaterial&&N.lights===!0}this.getActiveCubeFace=function(){return Y},this.getActiveMipmapLevel=function(){return k},this.getRenderTarget=function(){return j},this.setRenderTargetTextures=function(N,Q,ht){let at=U.get(N);at.__autoAllocateDepthBuffer=N.resolveDepthBuffer===!1,at.__autoAllocateDepthBuffer===!1&&(at.__useRenderToTexture=!1),U.get(N.texture).__webglTexture=Q,U.get(N.depthTexture).__webglTexture=at.__autoAllocateDepthBuffer?void 0:ht,at.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(N,Q){let ht=U.get(N);ht.__webglFramebuffer=Q,ht.__useDefaultFramebuffer=Q===void 0},this.setRenderTarget=function(N,Q=0,ht=0){j=N,Y=Q,k=ht;let at=null,lt=!1,Ut=!1;if(N){let Ot=U.get(N);if(Ot.__useDefaultFramebuffer!==void 0){I.bindFramebuffer(tt.FRAMEBUFFER,Ot.__webglFramebuffer),ot.copy(N.viewport),St.copy(N.scissor),wt=N.scissorTest,I.viewport(ot),I.scissor(St),I.setScissorTest(wt),Z=-1;return}else if(Ot.__webglFramebuffer===void 0)ft.setupRenderTarget(N);else if(Ot.__hasExternalTextures)ft.rebindTextures(N,U.get(N.texture).__webglTexture,U.get(N.depthTexture).__webglTexture);else if(N.depthBuffer){let Nt=N.depthTexture;if(Ot.__boundDepthTexture!==Nt){if(Nt!==null&&U.has(Nt)&&(N.width!==Nt.image.width||N.height!==Nt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");ft.setupDepthRenderbuffer(N)}}let Xt=N.texture;(Xt.isData3DTexture||Xt.isDataArrayTexture||Xt.isCompressedArrayTexture)&&(Ut=!0);let Zt=U.get(N).__webglFramebuffer;N.isWebGLCubeRenderTarget?(Array.isArray(Zt[Q])?at=Zt[Q][ht]:at=Zt[Q],lt=!0):N.samples>0&&ft.useMultisampledRTT(N)===!1?at=U.get(N).__webglMultisampledFramebuffer:Array.isArray(Zt)?at=Zt[ht]:at=Zt,ot.copy(N.viewport),St.copy(N.scissor),wt=N.scissorTest}else ot.copy(Dt).multiplyScalar(pt).floor(),St.copy(de).multiplyScalar(pt).floor(),wt=Ge;if(ht!==0&&(at=G),I.bindFramebuffer(tt.FRAMEBUFFER,at)&&I.drawBuffers(N,at),I.viewport(ot),I.scissor(St),I.setScissorTest(wt),lt){let Ot=U.get(N.texture);tt.framebufferTexture2D(tt.FRAMEBUFFER,tt.COLOR_ATTACHMENT0,tt.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Ot.__webglTexture,ht)}else if(Ut){let Ot=Q;for(let Xt=0;Xt<N.textures.length;Xt++){let Zt=U.get(N.textures[Xt]);tt.framebufferTextureLayer(tt.FRAMEBUFFER,tt.COLOR_ATTACHMENT0+Xt,Zt.__webglTexture,ht,Ot)}}else if(N!==null&&ht!==0){let Ot=U.get(N.texture);tt.framebufferTexture2D(tt.FRAMEBUFFER,tt.COLOR_ATTACHMENT0,tt.TEXTURE_2D,Ot.__webglTexture,ht)}Z=-1};function rs(N){let Q=U.get(N);return(Q.__readFormat!==N.format||Q.__readType!==N.type)&&(Q.__readFormat=N.format,Q.__readType=N.type,Q.__formatReadable=V.textureFormatReadable(N.format),Q.__typeReadable=V.textureTypeReadable(N.type)),Q}this.readRenderTargetPixels=function(N,Q,ht,at,lt,Ut,Rt,Ot=0){if(!(N&&N.isWebGLRenderTarget)){ie("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Xt=U.get(N).__webglFramebuffer;if(N.isWebGLCubeRenderTarget&&Rt!==void 0&&(Xt=Xt[Rt]),Xt){I.bindFramebuffer(tt.FRAMEBUFFER,Xt);try{let Zt=N.textures[Ot],Nt=Zt.format,xe=Zt.type;N.textures.length>1&&tt.readBuffer(tt.COLOR_ATTACHMENT0+Ot);let Wt=rs(Zt);if(Wt.__formatReadable===!1){ie("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Wt.__typeReadable===!1){ie("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Q>=0&&Q<=N.width-at&&ht>=0&&ht<=N.height-lt&&tt.readPixels(Q,ht,at,lt,It.convert(Nt),It.convert(xe),Ut)}finally{let Zt=j!==null?U.get(j).__webglFramebuffer:null;I.bindFramebuffer(tt.FRAMEBUFFER,Zt)}}},this.readRenderTargetPixelsAsync=async function(N,Q,ht,at,lt,Ut,Rt,Ot=0){if(!(N&&N.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Xt=U.get(N).__webglFramebuffer;if(N.isWebGLCubeRenderTarget&&Rt!==void 0&&(Xt=Xt[Rt]),Xt)if(Q>=0&&Q<=N.width-at&&ht>=0&&ht<=N.height-lt){I.bindFramebuffer(tt.FRAMEBUFFER,Xt);let Zt=N.textures[Ot],Nt=Zt.format,xe=Zt.type;N.textures.length>1&&tt.readBuffer(tt.COLOR_ATTACHMENT0+Ot);let Wt=rs(Zt);if(Wt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Wt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Te=tt.createBuffer();tt.bindBuffer(tt.PIXEL_PACK_BUFFER,Te),tt.bufferData(tt.PIXEL_PACK_BUFFER,Ut.byteLength,tt.STREAM_READ),tt.readPixels(Q,ht,at,lt,It.convert(Nt),It.convert(xe),0),tt.bindBuffer(tt.PIXEL_PACK_BUFFER,null);let Qe=j!==null?U.get(j).__webglFramebuffer:null;I.bindFramebuffer(tt.FRAMEBUFFER,Qe);let ke=tt.fenceSync(tt.SYNC_GPU_COMMANDS_COMPLETE,0);return tt.flush(),await $d(tt,ke,4),tt.bindBuffer(tt.PIXEL_PACK_BUFFER,Te),tt.getBufferSubData(tt.PIXEL_PACK_BUFFER,0,Ut),tt.bindBuffer(tt.PIXEL_PACK_BUFFER,null),tt.deleteBuffer(Te),tt.deleteSync(ke),Ut}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(N,Q=null,ht=0){let at=Math.pow(2,-ht),lt=Math.floor(N.image.width*at),Ut=Math.floor(N.image.height*at),Rt=Q!==null?Q.x:0,Ot=Q!==null?Q.y:0;ft.setTexture2D(N,0),tt.copyTexSubImage2D(tt.TEXTURE_2D,ht,0,0,Rt,Ot,lt,Ut),I.unbindTexture()},this.copyTextureToTexture=function(N,Q,ht=null,at=null,lt=0,Ut=0){let Rt,Ot,Xt,Zt,Nt,xe,Wt,Te,Qe,ke=N.isCompressedTexture?N.mipmaps[Ut]:N.image;if(ht!==null)Rt=ht.max.x-ht.min.x,Ot=ht.max.y-ht.min.y,Xt=ht.isBox3?ht.max.z-ht.min.z:1,Zt=ht.min.x,Nt=ht.min.y,xe=ht.isBox3?ht.min.z:0;else{let vt=Math.pow(2,-lt);Rt=Math.floor(ke.width*vt),Ot=Math.floor(ke.height*vt),N.isDataArrayTexture?Xt=ke.depth:N.isData3DTexture?Xt=Math.floor(ke.depth*vt):Xt=1,Zt=0,Nt=0,xe=0}at!==null?(Wt=at.x,Te=at.y,Qe=at.z):(Wt=0,Te=0,Qe=0);let r=It.convert(Q.format),l=It.convert(Q.type),h;Q.isData3DTexture?(ft.setTexture3D(Q,0),h=tt.TEXTURE_3D):Q.isDataArrayTexture||Q.isCompressedArrayTexture?(ft.setTexture2DArray(Q,0),h=tt.TEXTURE_2D_ARRAY):(ft.setTexture2D(Q,0),h=tt.TEXTURE_2D),I.activeTexture(tt.TEXTURE0),I.pixelStorei(tt.UNPACK_FLIP_Y_WEBGL,Q.flipY),I.pixelStorei(tt.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Q.premultiplyAlpha),I.pixelStorei(tt.UNPACK_ALIGNMENT,Q.unpackAlignment);let p=I.getParameter(tt.UNPACK_ROW_LENGTH),M=I.getParameter(tt.UNPACK_IMAGE_HEIGHT),P=I.getParameter(tt.UNPACK_SKIP_PIXELS),D=I.getParameter(tt.UNPACK_SKIP_ROWS),W=I.getParameter(tt.UNPACK_SKIP_IMAGES);I.pixelStorei(tt.UNPACK_ROW_LENGTH,ke.width),I.pixelStorei(tt.UNPACK_IMAGE_HEIGHT,ke.height),I.pixelStorei(tt.UNPACK_SKIP_PIXELS,Zt),I.pixelStorei(tt.UNPACK_SKIP_ROWS,Nt),I.pixelStorei(tt.UNPACK_SKIP_IMAGES,xe);let q=N.isDataArrayTexture||N.isData3DTexture,et=Q.isDataArrayTexture||Q.isData3DTexture;if(N.isDepthTexture){let vt=U.get(N),xt=U.get(Q),Mt=U.get(vt.__renderTarget),jt=U.get(xt.__renderTarget);I.bindFramebuffer(tt.READ_FRAMEBUFFER,Mt.__webglFramebuffer),I.bindFramebuffer(tt.DRAW_FRAMEBUFFER,jt.__webglFramebuffer);for(let ce=0;ce<Xt;ce++)q&&(tt.framebufferTextureLayer(tt.READ_FRAMEBUFFER,tt.COLOR_ATTACHMENT0,U.get(N).__webglTexture,lt,xe+ce),tt.framebufferTextureLayer(tt.DRAW_FRAMEBUFFER,tt.COLOR_ATTACHMENT0,U.get(Q).__webglTexture,Ut,Qe+ce)),tt.blitFramebuffer(Zt,Nt,Rt,Ot,Wt,Te,Rt,Ot,tt.DEPTH_BUFFER_BIT,tt.NEAREST);I.bindFramebuffer(tt.READ_FRAMEBUFFER,null),I.bindFramebuffer(tt.DRAW_FRAMEBUFFER,null)}else if(lt!==0||N.isRenderTargetTexture||U.has(N)){let vt=U.get(N),xt=U.get(Q);I.bindFramebuffer(tt.READ_FRAMEBUFFER,z),I.bindFramebuffer(tt.DRAW_FRAMEBUFFER,$);for(let Mt=0;Mt<Xt;Mt++)q?tt.framebufferTextureLayer(tt.READ_FRAMEBUFFER,tt.COLOR_ATTACHMENT0,vt.__webglTexture,lt,xe+Mt):tt.framebufferTexture2D(tt.READ_FRAMEBUFFER,tt.COLOR_ATTACHMENT0,tt.TEXTURE_2D,vt.__webglTexture,lt),et?tt.framebufferTextureLayer(tt.DRAW_FRAMEBUFFER,tt.COLOR_ATTACHMENT0,xt.__webglTexture,Ut,Qe+Mt):tt.framebufferTexture2D(tt.DRAW_FRAMEBUFFER,tt.COLOR_ATTACHMENT0,tt.TEXTURE_2D,xt.__webglTexture,Ut),lt!==0?tt.blitFramebuffer(Zt,Nt,Rt,Ot,Wt,Te,Rt,Ot,tt.COLOR_BUFFER_BIT,tt.NEAREST):et?tt.copyTexSubImage3D(h,Ut,Wt,Te,Qe+Mt,Zt,Nt,Rt,Ot):tt.copyTexSubImage2D(h,Ut,Wt,Te,Zt,Nt,Rt,Ot);I.bindFramebuffer(tt.READ_FRAMEBUFFER,null),I.bindFramebuffer(tt.DRAW_FRAMEBUFFER,null)}else et?N.isDataTexture||N.isData3DTexture?tt.texSubImage3D(h,Ut,Wt,Te,Qe,Rt,Ot,Xt,r,l,ke.data):Q.isCompressedArrayTexture?tt.compressedTexSubImage3D(h,Ut,Wt,Te,Qe,Rt,Ot,Xt,r,ke.data):tt.texSubImage3D(h,Ut,Wt,Te,Qe,Rt,Ot,Xt,r,l,ke):N.isDataTexture?tt.texSubImage2D(tt.TEXTURE_2D,Ut,Wt,Te,Rt,Ot,r,l,ke.data):N.isCompressedTexture?tt.compressedTexSubImage2D(tt.TEXTURE_2D,Ut,Wt,Te,ke.width,ke.height,r,ke.data):tt.texSubImage2D(tt.TEXTURE_2D,Ut,Wt,Te,Rt,Ot,r,l,ke);I.pixelStorei(tt.UNPACK_ROW_LENGTH,p),I.pixelStorei(tt.UNPACK_IMAGE_HEIGHT,M),I.pixelStorei(tt.UNPACK_SKIP_PIXELS,P),I.pixelStorei(tt.UNPACK_SKIP_ROWS,D),I.pixelStorei(tt.UNPACK_SKIP_IMAGES,W),Ut===0&&Q.generateMipmaps&&tt.generateMipmap(h),I.unbindTexture()},this.initRenderTarget=function(N){U.get(N).__webglFramebuffer===void 0&&ft.setupRenderTarget(N)},this.initTexture=function(N){N.isCubeTexture?ft.setTextureCube(N,0):N.isData3DTexture?ft.setTexture3D(N,0):N.isDataArrayTexture||N.isCompressedArrayTexture?ft.setTexture2DArray(N,0):ft.setTexture2D(N,0),I.unbindTexture()},this.resetState=function(){Y=0,k=0,j=null,I.reset(),Ft.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Jn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=Me._getDrawingBufferColorSpace(t),e.unpackColorSpace=Me._getUnpackColorSpace()}}});function _u(n){let t=n.stock.top,e=n.ops.filter(x=>x.enabled!==!1),i=e.filter(x=>x.kind==="cutout"),s=i.length?zn(i.flatMap(x=>x.region)):[[[n.stock.minX,n.stock.minY],[n.stock.maxX,n.stock.minY],[n.stock.maxX,n.stock.maxY],[n.stock.minX,n.stock.maxY]]],o=new Map;for(let x of e){let _=x.kind==="pocket"?x.region:x.kind==="inside"?x.zBottom>0?_i(x.loops,Be(x.loops,-x.tool.diameter)):x.loops:null;if(!_?.length)continue;let E=Math.max(0,x.zBottom);o.set(E,[...o.get(E)||[],..._])}let c=[...o.keys()].sort((x,_)=>x-_),a=[],u=[];for(let x of c){let _=zn(o.get(x)),E=Pn(sa(_i(_,u),s),.01);x>0&&E.length&&a.push({z:x,region:E}),u=zn([...u,..._])}let f=zn(i.filter(x=>x.inner).flatMap(x=>x.region)),d=f.length?zn([...o.values()].flat().filter(x=>ra(x[0],f))):[],g=Pn(zn([..._i(s,u),..._i(f,d)]),.01);a.push({z:t,region:g});let m=x=>{for(let _ of a)if(ra(x,_.region))return _.z;return 0},y=[],v=[],b=(x,_,E)=>(y.push(x,_,E),y.length/3-1);for(let x of a)for(let[_,...E]of Ni(x.region)){let A=L=>L.map(([F,B])=>new Jt(F,B)),S=A(_),R=E.map(A),T=Eo.triangulateShape(S,R),C=[...S,...R.flat()],w=y.length/3;for(let L of C)y.push(L.x,L.y,x.z);for(let L of T)v.push(w+L[0],w+L[1],w+L[2]);for(let L of[_,...E])for(let F=0;F<L.length;F++){let B=L[F],H=L[(F+1)%L.length],G=H[0]-B[0],z=H[1]-B[1],$=Math.hypot(G,z);if($<1e-9)continue;let Y=(B[0]+H[0])/2,k=(B[1]+H[1])/2,j=z/$*.05,Z=-G/$*.05,st=ra([Y+j,k+Z],x.region)?[Y-j,k-Z]:[Y+j,k+Z],ot=m(st);if(ot>=x.z-1e-6)continue;let St=b(B[0],B[1],x.z),wt=b(H[0],H[1],x.z),Yt=b(H[0],H[1],ot),Kt=b(B[0],B[1],ot);v.push(St,wt,Yt,St,Yt,Kt)}}return{positions:Float32Array.from(y),indices:Uint32Array.from(v)}}var Lp=fe(()=>{qo();Zr()});function ii(n,t,e){let i=Math.max(1,Math.ceil((n-t)/e-1e-6));return Array.from({length:i},(s,o)=>n-(o+1)*(n-t)/i)}function Ts(n,t,e,i,s,o,c){let a=[...t.breaks(e,i),i];if(c)for(let f of c.edges(e,i))a.push(f);a.sort((f,d)=>f-d);let u=e;for(let f of a){if(f-u<1e-9)continue;let d=(u+f)/2,g=c&&c.inside(d)?c.top:-1/0,[m,y]=t.at(u),v=Math.max(s(u),g),b=n.at;b&&(Math.abs(b.z-v)>1e-6||Math.abs(b.x-m)>1e-6||Math.abs(b.y-y)>1e-6)&&n.feed(m,y,v,o);let[x,_]=t.at(f);n.feed(x,_,Math.max(s(f),g),o),u=f}}function Mc(n,t,e,i,s,o,c){let a=Math.max(0,(i-s)/Math.tan(o.rampAngle*Math.PI/180));if(t.length<1||a<1e-6){let[f,d]=t.at(e);return n.feed(f,d,c&&c.inside(e)?Math.max(s,c.top):s,o.plunge),Ts(n,t,e,e+t.length,()=>s,o.feed,c),e}let u=e+a;return Ts(n,t,e,u,f=>i-(f-e)/a*(i-s),Math.min(o.feed,o.plunge*2),c),Ts(n,t,u,u+t.length,()=>s,o.feed,c),u}function ob(n,t,e,i){let s=[];for(let o=t,c=0;c<500;o+=e,c++){let a=ls(Pn(Be(n,-o,i),.001),.005);if(!a.length)break;s.push(a)}return s}function ab(n){let t=n.map((s,o)=>s.map(c=>({loop:c,depth:o,kids:[]})));for(let s=1;s<t.length;s++)for(let o of t[s])(t[s-1].find(a=>yi(o.loop[0],a.loop)&&Math.sign(gn(a.loop))===Math.sign(gn(o.loop)))||t[s-1].find(a=>yi(o.loop[0],a.loop))||t[0][0]).kids.push(o);let e=[],i=s=>{if(!s.kids.length){e.push([s.loop]);return}for(let o of s.kids)i(o);e[e.length-1].push(s.loop)};for(let s of t[0]||[])gn(s.loop)>0&&i(s);for(let s of t[0]||[])gn(s.loop)<=0&&!t[0].some(o=>o.kids.includes(s))&&i(s);return e}function Sr(n,t){let e=0;for(let i of t)yi(n,i)&&(e+=gn(i)>0?1:-1);return e>0}function lb(n,t,e){let i=Math.max(2,Math.ceil(Math.hypot(t[0]-n[0],t[1]-n[1])/.2));for(let s=1;s<i;s++){let o=s/i;if(!Sr([n[0]+(t[0]-n[0])*o,n[1]+(t[1]-n[1])*o],e))return!1}return!0}function bc(n,t,e,i,s,o,c,a=null,u=null){let f=Math.min(i.stepover,e*.95),d=ob(t,e+c,f,c>=.2?.05:void 0);if(!d.length)return;let g=Be(t,-(e+c)+.01),m=ab(d),y=s;for(let v of ii(s,o,i.stepdown)){for(let b of m){let x=new si(b[0]),[_,E]=x.at(0);n.goTo(_,E,Math.max(y,u?u(_,E):y)),n.feed(_,E,y,i.plunge);let A=Mc(n,x,0,y,v,i);for(let S=1;S<b.length;S++){let R=x.at(A),T=new si(b[S]),C=T.nearest(R);if(!lb(R,T.at(C),g)){[_,E]=T.at(C);let w=n.travel?Math.max(y+1,Math.min(a??1/0,n.travel({x:R[0],y:R[1]},{x:_,y:E}))):a??y+1;n.rapid(R[0],R[1],w),n.rapid(_,E,w);let L=Math.max(y,u?u(_,E):y)+1;w>L&&n.rapid(_,E,L),n.feed(_,E,v,i.plunge)}Ts(n,T,C,C+T.length,()=>v,i.feed),x=T,A=C}}y=v}n.retract()}function Dp(n,t,e,i,s,o,c){let a=ls(Pn(Be(t,-e),.001),.005);for(let u of a){let f=new si(u),[d,g]=f.at(0);n.goTo(d,g,s);for(let m of ii(s,o,c))n.feed(d,g,m,i.plunge),Ts(n,f,0,f.length,()=>m,i.feed*.9);n.retract()}}function cb(n,t,e,i,s,o,c,a){let u=e?Be(e,-(i-.05)):null,f=e?Be(e,-(i+.05)):null,d=g=>!e||Sr(g,u)&&!Sr(g,f);for(let g of ls(Pn(Be(t,-(i+.02)),.001),.005)){let m=new si(g),y=Math.max(8,Math.ceil(m.length/.5)),v=Array.from({length:y},(_,E)=>d(m.at(E/y*m.length)));if(!v.some(Boolean))continue;let b=v.every(Boolean),x=b?0:v.indexOf(!1);for(let _=0;_<y;_++){let E=(x+_)%y;if(!v[E]||!b&&v[(E-1+y)%y])continue;let A=E;for(;A-E<y-1&&v[(A+1)%y];)A++;let S=E/y*m.length,R=b?S+m.length:(A+1)/y*m.length,[T,C]=m.at(S);if(n.goTo(T,C,Math.max(o,a(T,C))),n.feed(T,C,c,s.plunge),Ts(n,m,S,R,()=>c,s.feed*.9),n.retract(),b)break}}}function hb(n,t,e){for(let i of t)for(let s of Mr(i.loops.map(o=>[o]),n.at).map(o=>o[0])){let o=new si(s.slice().reverse()),c=Math.max(8,Math.ceil(o.length/.25)),a=Array.from({length:c},(d,g)=>{let m=o.at(g/c*o.length);return!Sr(m,i.bad)&&(!i.keep||Sr(m,i.keep))});if(!a.some(Boolean))continue;let u=a.every(Boolean),f=u?0:a.indexOf(!1);for(let d=0;d<c;d++){let g=(f+d)%c;if(!a[g]||!u&&a[(g-1+c)%c])continue;let m=g;for(;m-g<c-1&&a[(m+1)%c];)m++;let y=g/c*o.length,v=u?y+o.length:m/c*o.length;if(!u&&v-y<.5)continue;let[b,x]=o.at(y);for(let _ of ii(i.z,i.z-i.depth,e.stepdown))u?(!n.at||Math.hypot(n.at.x-b,n.at.y-x)>1e-6)&&n.goTo(b,x,i.z):n.goTo(b,x,i.z),n.feed(b,x,_,e.plunge),Ts(n,o,y,v,()=>_,e.feed),u||n.retract();if(n.retract(),u)break}}}function ub(n,t,e,i,s,o,c){let a=Pn(_i(t,Be(Be(t,-i),i)),.01);if(!a.length)return;let u=Be(a,e+.5);for(let f of ls(Pn(Be(t,-e),.001),.005)){let d=new si(f),g=Math.max(8,Math.ceil(d.length/.25)),m=Array.from({length:g},(v,b)=>u.some(x=>yi(d.at(b/g*d.length),x)));if(m.every(Boolean)){Dp(n,t,e,s,o,c,s.stepdown);return}let y=m.indexOf(!1);for(let v=0;v<g;v++){let b=(y+v)%g;if(!m[b]||m[(b-1+g)%g])continue;let x=b;for(;m[(x+1)%g]&&x-b<g;)x++;let _=b/g*d.length,E=(x+1)/g*d.length,[A,S]=d.at(_);n.goTo(A,S,o);let R=!0;for(let T of ii(o,c,s.stepdown)){let C=[...d.breaks(_,E),E],w=R?C:[...C.slice(0,-1).reverse(),_],[L,F]=d.at(R?_:E);n.feed(L,F,T,s.plunge);for(let B of w){let[H,G]=d.at(B);n.feed(H,G,T,s.feed)}R=!R}n.retract()}}}function fb(n,t,e,i,s,o){let c=Math.min(i.stepover,e*1.6),a=t.minX-e-2,u=t.maxX+e+2;for(let f of ii(s,o,i.stepdown)){let d=t.minY+e*.6;n.goTo(a,d,s),n.feed(a,d,f,i.plunge);let g=1;for(;n.feed(g>0?u:a,d,f,i.feed),!(d>=t.maxY-e*.6-1e-6);)d=Math.min(d+c,t.maxY-e*.6),n.feed(g>0?u:a,d,f,i.feed),g=-g}n.retract()}function db(n,t,e,i){let s=t.thread,o=t.tool.cut??t.tool.diameter,c=Math.max(0,(s.major-o)/2),a=s.pitch,u=s.hand==="left"?-1:1,f=72,d=t.centers.slice();for(;d.length;){let g=n.at||d[0],m=0;d.forEach((v,b)=>{Math.hypot(v.x-g.x,v.y-g.y)<Math.hypot(d[m].x-g.x,d[m].y-g.y)&&(m=b)});let[y]=d.splice(m,1);n.goTo(y.x,y.y,t.zTop);for(let v of Np[i]||Np.balanced){let b=c*v;n.feed(y.x,y.y,t.zTop,e.plunge),n.feed(y.x,y.y,s.zLow,e.plunge);let x=s.zLow;for(let C=1;C<=f/2;C++){let w=Math.PI+Math.PI*C/(f/2);x=s.zLow+a/4*(C/(f/2)),n.feed(y.x+b/2+b/2*Math.cos(w),y.y+u*(b/2)*Math.sin(w),x,e.feed)}let _=(s.zHigh-x)/a,E=Math.max(1,Math.ceil(_*f)),A=0;for(let C=1;C<=E;C++)A=2*Math.PI*_*C/E,n.feed(y.x+b*Math.cos(A),y.y+u*b*Math.sin(A),x+a*A/(2*Math.PI),e.feed);let S=x+a*_,R=y.x+b/2*Math.cos(A),T=y.y+u*(b/2)*Math.sin(A);for(let C=1;C<=f/2;C++){let w=A+Math.PI*C/(f/2);n.feed(R+b/2*Math.cos(w),T+u*(b/2)*Math.sin(w),Math.min(t.zTop,S+a/4*(C/(f/2))),e.feed)}}n.feed(y.x,y.y,t.zTop,e.feed),n.retract()}}function pb(n,t,e,i,s,o){let c=t.slice();for(;c.length;){let a=n.at||c[0],u=0;c.forEach((y,v)=>{Math.hypot(y.x-a.x,y.y-a.y)<Math.hypot(c[u].x-a.x,c[u].y-a.y)&&(u=v)});let[f]=c.splice(u,1),d=Math.max(0,f.d/2-e),g=Math.max(1,Math.ceil((s-o)/i.stepdown-1e-6)),m=Math.max(12,Math.ceil(2*Math.PI*d/.05));n.goTo(f.x,f.y,s),n.feed(f.x,f.y,s,i.plunge),n.feed(f.x+d,f.y,s,i.feed);for(let y=1;y<=(g+1)*m;y++){let v=2*Math.PI*y/m,b=Math.max(o,s-(s-o)*y/(g*m));n.feed(f.x+d*Math.cos(v),f.y+d*Math.sin(v),b,i.feed)}n.feed(f.x,f.y,o,i.feed),n.retract()}}function mb(n,t,e,i,s,o){let c=Math.max(.5,o*1.5);for(let a of t){n.goTo(a.x,a.y,i);let u=i;for(;u>s+1e-6;){let f=Math.max(s,u-c);u<i&&n.rapid(a.x,a.y,u+.5),n.feed(a.x,a.y,f,e.plunge),n.rapid(a.x,a.y,i+1),u=f}n.retract()}}function Op(n,t,e,i){let s=Math.max(0,Math.round(t.tabs.count));if(!t.tabs.enabled||!s)return null;let o=t.tabs.length??Di(t.material).length,c=2*e+o,a=Array.from({length:s},(f,d)=>{let g=(d+.5)/s*n;return[g-c/2,g+c/2]}),u=n;return{top:i+(t.tabs.height??Di(t.material).height),inside:f=>{let d=(f%u+u)%u;return a.some(([g,m])=>d>g&&d<m)},edges:(f,d)=>{let g=[];for(let m=Math.floor(f/u);m*u<=d;m++)for(let[y,v]of a)for(let b of[y,v]){let x=m*u+b;x>f&&x<d&&g.push(x)}return g}}}function gb(n,t,e,i,s,o,c,a){let u=[{off:e+a,fd:i}];a>0&&u.push({off:e,fd:{...i,feed:Math.round(i.feed*.9)},finish:!0});for(let f of u)for(let d of Ni(t).map(g=>g[0])){let g=ls(Pn(Be([d],f.off),.001),.005).filter(m=>gn(m)>0);for(let m of g){let y=new si(m.slice().reverse()),v=Op(y.length,c,e,0),[b,x]=y.at(0);n.goTo(b,x,s),n.feed(b,x,s,i.plunge);let _=0,E=s,A=f.finish?ii(s,o,Math.max(i.stepdown,Math.min(6*e,s-o))):ii(s,o,i.stepdown);for(let S of A)_=Mc(n,y,_,E,S,f.fd,v),E=S;n.retract()}}}function xb(n,t,e,i,s,o,c,a,u){let f={...c,tabs:{...c.tabs,enabled:!!u}},d=[{off:e+a,fd:i}];a>0&&d.push({off:e,fd:{...i,feed:Math.round(i.feed*.9)},finish:!0});let g=new Set;for(let m of d)for(let y of Mr(t.map(v=>[gn(v)<0?v.slice().reverse():v]),n.at).map(v=>v[0])){let v=ls(Pn(Be([y],-m.off),.001),.005).filter(b=>gn(b)>0);!m.finish&&v.length&&g.add(y);for(let b of v){let x=new si(b),_=Op(x.length,f,e,0),[E,A]=x.at(0);n.goTo(E,A,s),n.feed(E,A,s,i.plunge);let S=0,R=s,T=m.finish&&g.has(y)?ii(s,o,Math.max(i.stepdown,Math.min(6*e,s-o))):ii(s,o,i.stepdown);for(let C of T)S=Mc(n,x,S,R,C,m.fd,_),R=C;n.retract()}}}function yb(n,t,e,i,s){let o=t.slice();for(;o.length;){let c=n.at||{x:o[0].pts[0][0],y:o[0].pts[0][1]},a=0,u=!1,f=1/0;o.forEach((m,y)=>{let v=m.pts[0],b=m.pts[m.pts.length-1],x=Math.hypot(v[0]-c.x,v[1]-c.y),_=m.closed?1/0:Math.hypot(b[0]-c.x,b[1]-c.y);Math.min(x,_)<f&&(f=Math.min(x,_),a=y,u=_<x)});let[d]=o.splice(a,1),g=u?d.pts.slice().reverse():d.pts;if(d.closed){let m=new si(g[0][0]===g.at(-1)[0]&&g[0][1]===g.at(-1)[1]?g.slice(0,-1):g),[y,v]=m.at(0);n.goTo(y,v,i),n.feed(y,v,i,e.plunge);let b=0,x=i;for(let _ of ii(i,s,e.stepdown))b=Mc(n,m,b,x,_,e),x=_}else{let m=g;n.goTo(m[0][0],m[0][1],i);for(let y of ii(i,s,e.stepdown)){n.feed(m[0][0],m[0][1],y,e.plunge);for(let[v,b]of m.slice(1))n.feed(v,b,y,e.feed);m=m.slice().reverse()}}n.retract()}}function _b(n,t,e){let i=t.diameter/2,s=n.cell,o=t.kind==="ball",c=s*Math.SQRT1_2,a=Math.ceil((i+c)/s),u=S=>o?i-Math.sqrt(Math.max(0,i*i-S*S)):0,f=[];for(let S=-a;S<=a;S++)for(let R=-a;R<=a;R++){let T=Math.max(0,Math.hypot(R,S)*s-c);T<=i+1e-9&&f.push(R,S,u(T))}let{nx:d,ny:g,h:m,x0:y,y0:v}=n,b={r:i,c:s,n:a,zFloor:e,x:S=>y+S*s,y:S=>v+S*s};b.drop=(S,R)=>{let T=-1/0;for(let C=0;C<f.length;C+=3){let w=S+f[C],L=R+f[C+1];if(w<0||L<0||w>=d||L>=g)continue;let F=m[L*d+w]-f[C+2];F>T&&(T=F)}return T===-1/0?null:Math.max(T,e)},b.dropAt=(S,R)=>{let T=(S-y)/s,C=(R-v)/s,w=(i+c)/s,L=-1/0;for(let F=Math.max(0,Math.ceil(C-w));F<=Math.min(g-1,Math.floor(C+w));F++)for(let B=Math.max(0,Math.ceil(T-w));B<=Math.min(d-1,Math.floor(T+w));B++){let H=Math.max(0,Math.hypot(B-T,F-C)*s-c);if(H>i)continue;let G=m[F*d+B]-u(H);G>L&&(L=G)}return L===-1/0?null:Math.max(L,e)},b.underAt=(S,R)=>{let T=(S-y)/s,C=(R-v)/s,w=(i+c)/s,L=e;for(let F=Math.max(0,Math.ceil(C-w));F<=Math.min(g-1,Math.floor(C+w));F++)for(let B=Math.max(0,Math.ceil(T-w));B<=Math.min(d-1,Math.floor(T+w));B++)m[F*d+B]>L&&(L=m[F*d+B]);return L};let x=1/0,_=-1,E=1/0,A=-1;for(let S=0;S<g;S++)for(let R=0;R<d;R++)m[S*d+R]!==-1/0&&(R<x&&(x=R),R>_&&(_=R),S<E&&(E=S),S>A&&(A=S));return b.box=_<0?null:{i0:Math.max(0,x-a),i1:Math.min(d-1,_+a),j0:Math.max(0,E-a),j1:Math.min(g-1,A+a)},b}function Fp(n,t,e,i,s,o){let c=e[0],a=n.at;if(a&&!a.r&&Math.hypot(c.x-a.x,c.y-a.y)<=s){let f=Math.max(1,Math.ceil(Math.hypot(c.x-a.x,c.y-a.y)/(t.c/2))),d=Math.max(a.z,c.z),g=!1;for(let m=1;m<f;m++){let y=m/f,v=t.dropAt(a.x+(c.x-a.x)*y,a.y+(c.y-a.y)*y)??t.zFloor;v>a.z+(c.z-a.z)*y+.001&&(g=!0,d=Math.max(d,v))}g&&(n.feed(a.x,a.y,d+.5,i.feed),n.feed(c.x,c.y,d+.5,i.feed)),n.feed(c.x,c.y,c.z,i.plunge)}else n.goTo(c.x,c.y,t.underAt(c.x,c.y)+o),n.feed(c.x,c.y,c.z,i.plunge);let u=c;for(let f of e.slice(1))n.feed(f.x,f.y,f.z,u.z-f.z>vb*Math.hypot(f.x-u.x,f.y-u.y)?i.plunge:i.feed),u=f}function Mb(n,t,e,i,s,o,c,a=!0){let u=_b(t,e,o);if(!u.box)return;let{r:f,c:d}=u,{i0:g,i1:m,j0:y,j1:v}=u.box,b=e.kind==="ball"?2*Math.sqrt(Math.max(0,2*f*s-s*s)):i.stepover*.5,x=Math.max(1,Math.floor(Math.min(b,f)/d+1e-9)),_=3*x*d+1e-6,E=[];for(let A=y;A<=v;A+=x)E.push(A);E[E.length-1]!==v&&E.push(v),E.forEach((A,S)=>{let R=[],T=[];for(let C=g;C<=m;C++){let w=u.drop(C,A);if(w===null){T.length&&R.push(T),T=[];continue}T.push({x:u.x(C),y:u.y(A),z:w})}T.length&&R.push(T),S%2&&(R.reverse(),R.forEach(C=>C.reverse()));for(let C of R)Fp(n,u,Up(C,.005),i,_,c)}),a&&Sb(n,u,i,Math.min(b,f),_,c),n.retract()}function Sb(n,t,e,i,s,o){let{i0:a,i1:u,j0:f,j1:d}=t.box,g=Math.floor((u-a)/2)+1,m=Math.floor((d-f)/2)+1,y=new Float32Array(g*m),v=-1/0;for(let S=0;S<m;S++)for(let R=0;R<g;R++){let T=t.drop(a+R*2,f+S*2);y[S*g+R]=T===null?NaN:T,T!==null&&T>v&&(v=T)}let b=2*t.c,x=bb*b,_=S=>t.x(a+S*2),E=S=>t.y(f+S*2),A=new Uint8Array(g*m);for(let S=0;S+1<m;S++)for(let R=0;R+1<g;R++){let T=y[S*g+R],C=y[S*g+R+1],w=y[(S+1)*g+R],L=y[(S+1)*g+R+1];[T,C,w,L].some(Number.isNaN)||(Math.abs(T-C)>x||Math.abs(w-L)>x||Math.abs(T-w)>x||Math.abs(C-L)>x)&&(A[S*g+R]=1)}for(let S=v-i/2;S>t.zFloor+.05;S-=i){let R=new Map,T=[],C=(B,H,G)=>{let z=G?`h${B},${H}`:`v${B},${H}`;if(!R.has(z)){let $=y[H*g+B],Y=G?y[H*g+B+1]:y[(H+1)*g+B],k=(S-$)/(Y-$);R.set(z,{key:z,x:G?_(B)+k*b:_(B),y:G?E(H):E(H)+k*b,segs:[]})}return R.get(z)};for(let B=0;B+1<m;B++)for(let H=0;H+1<g;H++){if(!A[B*g+H])continue;let G=y[B*g+H]>S,z=y[B*g+H+1]>S,$=y[(B+1)*g+H]>S,Y=y[(B+1)*g+H+1]>S,k=[];G!==z&&k.push(C(H,B,!0)),z!==Y&&k.push(C(H+1,B,!1)),$!==Y&&k.push(C(H,B+1,!0)),G!==$&&k.push(C(H,B,!1));for(let j=0;j+1<k.length;j+=2){let Z=[k[j],k[j+1]];T.push(Z),Z[0].segs.push(Z),Z[1].segs.push(Z)}}let w=new Set,L=[];for(let B of T){if(w.has(B))continue;w.add(B);let H=[B[0],B[1]];for(let G of[!1,!0])for(;;){let z=G?H[0]:H[H.length-1],$=z.segs.find(k=>!w.has(k));if(!$)break;w.add($);let Y=$[0]===z?$[1]:$[0];G?H.unshift(Y):H.push(Y)}H.length>=3&&L.push(H)}let F=n.at;for(;L.length;){let B=0,H=1/0,G=!1;L.forEach((Y,k)=>{for(let[j,Z]of[[Y[0],!1],[Y[Y.length-1],!0]]){let st=F?Math.hypot(j.x-F.x,j.y-F.y):0;st<H&&(H=st,B=k,G=Z)}});let[z]=L.splice(B,1);G&&z.reverse();let $=z.map(Y=>({x:Y.x,y:Y.y,z:Math.max(S,t.dropAt(Y.x,Y.y)??S)}));Fp(n,t,Up($,.005),e,s,o),F=n.at}}}function Up(n,t){if(n.length<3)return n;let e=new Uint8Array(n.length);e[0]=e[n.length-1]=1;let i=[[0,n.length-1]];for(;i.length;){let[s,o]=i.pop(),c=n[s],a=n[o],u=a.x-c.x,f=a.y-c.y,d=a.z-c.z,g=u*u+f*f+d*d,m=-1,y=t;for(let v=s+1;v<o;v++){let b=n[v],x=g>0?((b.x-c.x)*u+(b.y-c.y)*f+(b.z-c.z)*d)/g:0,_=Math.hypot(c.x+u*x-b.x,c.y+f*x-b.y,c.z+d*x-b.z);_>y&&(y=_,m=v)}m>=0&&(e[m]=1,i.push([s,m],[m,o]))}return n.filter((s,o)=>e[o])}function wb(n){let t=[],e=[];n.forEach((i,s)=>{let o=[];for(let c of Ni(i.region)){let a=qr([c[0]]),u=[...new Set(t.filter(d=>d.b.minX<a.maxX&&a.minX<d.b.maxX&&d.b.minY<a.maxY&&a.minY<d.b.maxY&&$r(sa(d.last,c))>0).map(d=>d.spot))],f=u[0]||{parts:[]};u.length||e.push(f);for(let d of u.slice(1)){f.parts.push(...d.parts),e=e.filter(g=>g!==d);for(let g of[...t,...o])g.spot===d&&(g.spot=f)}f.parts.push({k:s,area:c}),o.push({k:s,b:a,last:c,spot:f})}t.length=0,t.push(...o)});for(let i of e)i.parts.sort((s,o)=>s.k-o.k);return e.map(i=>Object.assign([...i.parts[0].area],{parts:i.parts}))}function Mr(n,t){let e=c=>{let a=qr([c[0]]);return[(a.minX+a.maxX)/2,(a.minY+a.maxY)/2]},i=n.map(c=>({a:c,m:e(c)})),s=[],o=t?[t.x,t.y]:i[0]?.m;for(;i.length;){let c=0;for(let u=1;u<i.length;u++)Math.hypot(i[u].m[0]-o[0],i[u].m[1]-o[1])<Math.hypot(i[c].m[0]-o[0],i[c].m[1]-o[1])&&(c=u);let[a]=i.splice(c,1);s.push(a.a),o=a.m}return s}function Eb(n,t,e,i,s,o){let c=[...new Set(n.map(u=>u.z))].sort((u,f)=>f-u),a=o;for(let u of c){if(u<t-1e-6||!Sr([i,s],Tb(n,u,e)))break;a=u}return Math.max(a,t)}function Tb(n,t,e){let i=n.filter(a=>Math.abs(a.z-t)<1e-6);n.inner||=new Map;let s=`${t}|${e}`,o=n.inner.get(s);if(o&&o.n===i.length)return o.loops;let c=Be(zn(i.flatMap(a=>a.area)),-e-rb);return n.inner.set(s,{n:i.length,loops:c}),c}function Bp(n){let t=n.stock.top+ib,e=[],i=null,s=(Vn[n.job.finish]||Vn.balanced).allowance,c=n.ops.some(a=>a.kind==="face"&&a.enabled)?n.analysis.top:n.stock.top;for(let a of n.ops){let u=new vu(t),f=a.kind!=="face"&&a.zTop>=n.analysis.top-1e-6?Math.max(a.zTop,c):a.zTop,d=a.tool.diameter/2,g=a.feeds,m=Math.min(a.tool.fluteLength||1/0,3*a.tool.diameter);switch(a.kind){case"face":fb(u,n.stock,d,g,f,a.zBottom);break;case"hole":if(a.bore){pb(u,a.centers,d,g,f,a.zBottom);break}case"pocket":case"step":for(let y of Mr(Ni(a.region),u.at))bc(u,y,d,g,f,a.zBottom,s),s>0&&Dp(u,y,d,g,f,a.zBottom,m);break;case"corners":{let y=n.ops.find(v=>v.id===a.after);ub(u,a.region,d,y?y.tool.diameter/2:d*2,g,f,a.zBottom);break}case"rough3d":case"rest3d":{let y=a.kind==="rough3d"?a.allowance:0,v=b=>(x,_)=>Eb(e,a.layers[b].zFrom,d,x,_,f);if(i||=new bu(n.stock,c),u.travel=(b,x)=>i.over(b,x,d),a.kind==="rest3d"){for(let b of Mr(wb(a.layers),u.at))for(let{k:x,area:_}of b.parts){let E=a.layers[x],A=E.zFrom>=n.analysis.top-1e-6?f:E.zFrom;bc(u,_,d,g,A,E.z,0,f+1,v(x));let S=Be(Be(_,-d),d);S.length&&a.enabled&&(e.push({zFrom:A,z:E.z,area:S}),i.layer(S,A,E.z))}u.travel=null,u.retract();break}a.layers.forEach((b,x)=>{let _=b.zFrom>=n.analysis.top-1e-6?f:b.zFrom;for(let A of Mr(Ni(b.region),u.at))bc(u,A,d,g,_,b.z,y,f+1,v(x));for(let A of Mr(Ni(b.fresh||[]),u.at))bc(u,A,d,g,f,b.z,y,f+1);y>0&&x&&cb(u,b.exact||b.region,a.layers[x-1].exact||a.layers[x-1].region,d,g,_,b.z,v(x));let E=Be(Be([...b.region,...b.fresh||[]],-(d+y)),d);E.length&&a.enabled&&(e.push({zFrom:_,z:b.z,area:E}),i.layer(E,_,b.z))}),u.travel=null,u.retract();break}case"finish3d":Mb(u,a.surface,a.tool,g,a.ridge,0,a.left??sb,a.steep!==!1);break;case"drill":mb(u,a.centers,g,f,a.zBottom,a.tool.diameter);break;case"thread":db(u,a,g,n.job.finish);break;case"cutout":gb(u,a.region,d,g,f,a.zBottom,a.tabs===!1?{...n.job,tabs:{...n.job.tabs,enabled:!1}}:n.job,s);break;case"inside":xb(u,a.loops,d,g,f,a.zBottom,n.job,s,a.tabs);break;case"online":yb(u,a.lines,g,f,a.zBottom);break;case"chamfer":hb(u,a.levels.map(y=>y.z>=n.analysis.top-1e-6?{...y,z:y.z+c-n.analysis.top}:y),g);break}a.moves=u.moves}return n}var ib,sb,rb,vu,si,Np,vb,bb,bu,kp=fe(()=>{Zr();Jr();ib=3,sb=3.5,rb=.02;vu=class{constructor(t){this.moves=[],this.clearZ=t,this.at=null,this.travel=null}rapid(t,e,i){this.push({r:!0,x:t,y:e,z:i})}feed(t,e,i,s){this.push({x:t,y:e,z:i,f:s})}push(t){let e=this.at;e&&Math.abs(e.x-t.x)<1e-6&&Math.abs(e.y-t.y)<1e-6&&Math.abs(e.z-t.z)<1e-6||(this.moves.push(t),this.at=t)}goTo(t,e,i){let s=this.at,o=this.clearZ;s&&this.travel&&(o=Math.min(o,Math.max(this.travel(s,{x:t,y:e}),s.z,i+1))),s&&this.rapid(s.x,s.y,o),this.rapid(t,e,o),this.rapid(t,e,i+1)}retract(){this.at&&!this.travel&&this.rapid(this.at.x,this.at.y,this.clearZ)}},si=class{constructor(t){this.p=t,this.s=[0];for(let e=1;e<=t.length;e++){let i=t[e-1],s=t[e%t.length];this.s.push(this.s[e-1]+Math.hypot(s[0]-i[0],s[1]-i[1]))}this.length=this.s[t.length]}at(t){let e=this.length,i=(t%e+e)%e,s=1;for(;s<this.s.length-1&&this.s[s]<i;)s++;let o=this.p[s-1],c=this.p[s%this.p.length],a=this.s[s]-this.s[s-1]||1,u=(i-this.s[s-1])/a;return[o[0]+(c[0]-o[0])*u,o[1]+(c[1]-o[1])*u]}breaks(t,e){let i=[],s=this.length;for(let o=Math.floor(t/s);o*s<=e;o++)for(let c=0;c<this.p.length;c++){let a=o*s+this.s[c];a>t+1e-9&&a<e-1e-9&&i.push(a)}return i}nearest([t,e]){let i=0,s=1/0;for(let o=0;o<this.p.length;o++){let c=(this.p[o][0]-t)**2+(this.p[o][1]-e)**2;c<s&&(s=c,i=this.s[o])}return i}};Np={fast:[.6,1],balanced:[.5,.8,1,1],smooth:[.4,.65,.85,1,1]};vb=Math.tan(70*Math.PI/180);bb=Math.tan(50*Math.PI/180);bu=class{constructor(t,e){this.c=1,this.x0=t.minX,this.y0=t.minY,this.nx=Math.ceil((t.maxX-t.minX)/this.c)+1,this.ny=Math.ceil((t.maxY-t.minY)/this.c)+1,this.top=new Float32Array(this.nx*this.ny).fill(e)}layer(t,e,i){let{c:s,x0:o,y0:c,nx:a,ny:u,top:f}=this,d=Be(t,-(s*Math.SQRT1_2+.02));for(let g=0;g<u;g++){let m=c+g*s,y=[];for(let v of d)for(let b=0;b<v.length;b++){let[x,_]=v[b],[E,A]=v[(b+1)%v.length];_<=m!=A<=m&&y.push(x+(m-_)/(A-_)*(E-x))}y.sort((v,b)=>v-b);for(let v=0;v+1<y.length;v+=2)for(let b=Math.max(0,Math.ceil((y[v]-o)/s));b<=Math.min(a-1,Math.floor((y[v+1]-o)/s));b++){let x=g*a+b;f[x]<=e+1e-6&&i<f[x]&&(f[x]=i)}}}over(t,e,i){let{c:s,x0:o,y0:c,nx:a,ny:u,top:f}=this,d=(i+1.5*s)/s,g=Math.max(1,Math.ceil(Math.hypot(e.x-t.x,e.y-t.y)/(s/2))),m=-1/0;for(let y=0;y<=g;y++){let v=(t.x+(e.x-t.x)*y/g-o)/s,b=(t.y+(e.y-t.y)*y/g-c)/s;for(let x=Math.max(0,Math.ceil(b-d));x<=Math.min(u-1,Math.floor(b+d));x++)for(let _=Math.max(0,Math.ceil(v-d));_<=Math.min(a-1,Math.floor(v+d));_++)(_-v)**2+(x-b)**2<=d*d&&f[x*a+_]>m&&(m=f[x*a+_])}return m+1}}});function zp(n,t={}){let{name:e="part",numbering:i="slot",safeZHeightMm:s=null,spindleDelay:o=3}=t,c=Number.isFinite(s)?`G53 G0 Z${ns(s)}`:"G53 G0 Z0",a=n.zero,u=n.stock,f=[wr(`ncCAM: ${e}`),wr(`Stock ${ns(u.width)} x ${ns(u.depth)} x ${ns(u.thickness)} mm, ${(cs[n.job.material]||{}).name||n.job.material}, ${(Vn[n.job.finish]||{}).name||n.job.finish}`),wr(`Zero: X Y at the ${Pb[n.job.zero.xy]||n.job.zero.xy}, Z on ${n.job.zero.z==="bed"?"the bed":"top of the stock"}`)],d=n.ops.filter(b=>b.enabled&&b.moves&&b.moves.length);for(let b of[...new Map(d.map(x=>[x.tool.id,x.tool])).values()])f.push(wr(`T${hs(b,i)}: ${b.name}, ${ns(b.diameter)} mm`));f.push("G21 G90 G94 G17");let g=null,m={},y=null,v=null;for(let b of d){(!g||b.tool.id!==g.id)&&(g&&f.push("M5"),f.push(c,`M6 T${hs(b.tool,i)}`,wr(b.tool.name)),g=b.tool,f.push(`M3 S${b.feeds.rpm}`),o>0&&f.push(`G4 P${o}`),m={},y=null,v=null),f.push(wr(`${b.label}${b.detail?": "+b.detail:""}`));for(let x of b.moves){let _=ns(x.x-a.x),E=ns(x.y-a.y),A=ns(x.z-a.z);if(x.r&&(_!==m.x||E!==m.y)&&A!==m.z){let C=m.z===void 0||+A<+m.z?[`X${_} Y${E}`,`Z${A}`]:[`Z${A}`,`X${_} Y${E}`];for(let w of C)f.push(`${v==="G0"?"":"G0 "}${w}`),v="G0";m={x:_,y:E,z:A};continue}let S=x.r?"G0":"G1",R=S===v?"":S;_!==m.x&&(R+=` X${_}`),E!==m.y&&(R+=` Y${E}`),A!==m.z&&(R+=` Z${A}`),!x.r&&x.f!==y&&(R+=` F${Math.round(x.f)}`,y=x.f),R=R.trim(),!(!R||R===S)&&(f.push(R),v=S,m={x:_,y:E,z:A})}}return f.push("M5",c,"M30",""),f.join(`
`)}function Vp(n,{maxRapid:t=5e3,spindleDelay:e=3,toolChange:i=30}={}){let s=0,o=null,c=null;for(let a of n.ops){if(!a.enabled||!a.moves)continue;(!c||a.tool.id!==c.id)&&(s+=e+(c?i:0),c=a.tool);let u=0;for(let f of a.moves){if(o){let d=Math.hypot(f.x-o.x,f.y-o.y,f.z-o.z);u+=d/(f.r?t:f.f)*60}o=f}a.seconds=u,s+=u}return s}var ns,Ab,wr,Pb,Hp=fe(()=>{Jr();ns=n=>{let t=(Math.round(n*1e3)/1e3).toFixed(3).replace(/\.?0+$/,"");return t==="-0"?"0":t},Ab={"\xD7":"x","\xB7":"-",\u00D8:"D","\xB0":" deg","\u2019":"'","\u2026":"..."},wr=n=>`(${String(n).replace(/\(/g,"[").replace(/\)/g,"]").replace(/[^\x20-\x7e]/g,t=>Ab[t]??"")})`,Pb={"back-left":"back left corner","back-center":"back edge, middle","back-right":"back right corner","left-center":"left edge, middle",center:"center","right-center":"right edge, middle","front-left":"front left corner","front-center":"front edge, middle","front-right":"front right corner"}});function Mu(n,t){let e=(n.kind==="threadmill"?n.neck:n.diameter)/2,i=Math.ceil(e/t),s=[];for(let c=-i;c<=i;c++)for(let a=-i;a<=i;a++){let u=Math.hypot(a,c)*t;if(u>e+1e-6)continue;let f=Math.min(u,e),d=0;if(n.kind==="ball")d=e-Math.sqrt(Math.max(0,e*e-f*f));else if(n.kind==="vbit"||n.kind==="chamfer"||n.kind==="drill"){let g=(n.angle||(n.kind==="drill"?118:90))*Math.PI/360;d=f/Math.tan(g)}s.push(a,c,d,u)}let o=Float32Array.from(s);return o.inner=Math.max(0,e-t*Math.SQRT1_2),o}function Cb(n,t,e,i,s,o){let c=Math.hypot(i.x-e.x,i.y-e.y),a=Math.max(1,Math.ceil(c/(n.cell*.5))),u=!1;for(let f=s?0:1;f<=a;f++){let d=f/a,g=(e.x+(i.x-e.x)*d-n.x0)/n.cell,m=(e.y+(i.y-e.y)*d-n.y0)/n.cell,y=e.z+(i.z-e.z)*d;if(y>=n.top)continue;let v=Math.round(g),b=Math.round(m);for(let x=0;x<t.length;x+=4){let _=v+t[x],E=b+t[x+1];if(_<0||E<0||_>=n.nx||E>=n.ny)continue;let A=E*n.nx+_,S=y+t[x+2];if(n.h[A]>S+1e-4){if(s){n.h[A]>S+.05&&t[x+3]<=t.inner&&(u=!0);continue}n.h[A]=S,n.op[A]=o+1}}}return u}function Gp(n){let t=n.nx*n.ny;return n.sx=new Float32Array(t),n.sy=new Float32Array(t),n.wx=new Float32Array(t),n.wy=new Float32Array(t),n.gap=new Float32Array(t).fill(1/0),n.deep=new Float32Array(t).fill(-1/0),n}function Su(n,t,e,i,s){let o=(t.kind==="threadmill"?t.neck:t.diameter)/2,c=n.cell,a=o/c,u=t.kind==="ball"?G=>o-Math.sqrt(Math.max(0,o*o-G*G)):t.kind==="vbit"||t.kind==="chamfer"||t.kind==="drill"?(G=>z=>z/G)(Math.tan((t.angle||(t.kind==="drill"?118:90))*Math.PI/360)):()=>0,f=!t.kind||t.kind==="flat"||t.kind==="surfacing"||t.kind==="threadmill",{h:d,sx:g,sy:m,wx:y,wy:v,gap:b,deep:x,nx:_,ny:E}=n,A=1.5*c,S=a+1.5,R=(G,z,$,Y)=>{let k=Math.hypot(z,$);if(k>S)return;let j=k*c;if(j<=o){let Z=Y+u(j);if(d[G]>Z+1e-4)d[G]=Z,n.op[G]=s+1,b[G]=1/0,x[G]=-1/0;else if(d[G]<Z-1e-4)return;o-j>x[G]&&(x[G]=o-j,f&&o-j<A&&k>1e-6?(g[G]=z/k*(o-j),m[G]=$/k*(o-j),y[G]=-z/k,v[G]=-$/k):(g[G]=0,m[G]=0,y[G]=0,v[G]=0))}else f&&d[G]>Y+1e-4&&j-o<b[G]&&(b[G]=j-o,g[G]=z/k*(o-j),m[G]=$/k*(o-j),y[G]=-z/k,v[G]=-$/k)},T=(e.x-n.x0)/c,C=(e.y-n.y0)/c,w=(i.x-n.x0)/c,L=(i.y-n.y0)/c;if(Math.abs(i.z-e.z)<1e-9){if(e.z>=n.top)return;let G=w-T,z=L-C,$=G*G+z*z,Y=Math.max(0,Math.floor(Math.min(T,w)-S)),k=Math.min(_-1,Math.ceil(Math.max(T,w)+S)),j=Math.max(0,Math.floor(Math.min(C,L)-S)),Z=Math.min(E-1,Math.ceil(Math.max(C,L)+S));for(let st=j;st<=Z;st++)for(let ot=Y;ot<=k;ot++){let St=$>0?Math.max(0,Math.min(1,((ot-T)*G+(st-C)*z)/$)):0;R(st*_+ot,ot-(T+G*St),st-(C+z*St),e.z)}return}let F=Math.hypot(i.x-e.x,i.y-e.y),B=Math.max(1,Math.ceil(F/(c*.5))),H=Math.ceil(S);for(let G=1;G<=B;G++){let z=G/B,$=T+(w-T)*z,Y=C+(L-C)*z,k=e.z+(i.z-e.z)*z;if(k>=n.top)continue;let j=Math.max(0,Math.floor($-H)),Z=Math.min(_-1,Math.ceil($+H)),st=Math.max(0,Math.floor(Y-H)),ot=Math.min(E-1,Math.ceil(Y+H));for(let St=st;St<=ot;St++)for(let wt=j;wt<=Z;wt++)R(St*_+wt,wt-$,St-Y,k)}}function Xp(n,t){let e=new Ci(n.stock,t||Ci.cellFor(n.stock)),i=[];return n.ops.forEach((s,o)=>{if(!s.enabled||!s.moves)return;let c=Mu(s.tool,e.cell),a=null;for(let u of s.moves)a&&Cb(e,c,a,u,!!u.r,o)&&i.push({op:s.id,at:u}),a=u}),{hm:e,collisions:i}}var Ci,Wp=fe(()=>{Ci=class{constructor(t,e){this.cell=e,this.x0=t.minX,this.y0=t.minY,this.nx=Math.max(2,Math.ceil((t.maxX-t.minX)/e)+1),this.ny=Math.max(2,Math.ceil((t.maxY-t.minY)/e)+1),this.h=new Float32Array(this.nx*this.ny).fill(t.top),this.op=new Uint8Array(this.nx*this.ny),this.top=t.top,this.bottom=t.bottom}static cellFor(t,e=600*600){let i=(t.maxX-t.minX)*(t.maxY-t.minY);return Math.max(.1,Math.sqrt(i/e))}}});var Sc=fe(()=>{Pr();Vu();df();gf();xf();Rf();Lp();kp();Hp();Wp();Jr();Hc();Zr()});function Rb(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function Lb(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function Nb(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Zp),this.state=Ue.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:let t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function Db(n){let t;switch(n.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case Zi.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=Ue.DOLLY;break;case Zi.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=Ue.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=Ue.ROTATE}break;case Zi.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=Ue.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=Ue.PAN}break;default:this.state=Ue.NONE}this.state!==Ue.NONE&&this.dispatchEvent(Tu)}function Ob(n){switch(this.state){case Ue.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case Ue.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case Ue.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function Fb(n){this.enabled===!1||this.enableZoom===!1||this.state!==Ue.NONE||(n.preventDefault(),this.dispatchEvent(Tu),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent(Zp))}function Ub(n){this.enabled!==!1&&this._handleKeyDown(n)}function Bb(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case Ji.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(n),this.state=Ue.TOUCH_ROTATE;break;case Ji.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(n),this.state=Ue.TOUCH_PAN;break;default:this.state=Ue.NONE}break;case 2:switch(this.touches.TWO){case Ji.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=Ue.TOUCH_DOLLY_PAN;break;case Ji.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=Ue.TOUCH_DOLLY_ROTATE;break;default:this.state=Ue.NONE}break;default:this.state=Ue.NONE}this.state!==Ue.NONE&&this.dispatchEvent(Tu)}function kb(n){switch(this._trackPointer(n),this.state){case Ue.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case Ue.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case Ue.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case Ue.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=Ue.NONE}}function zb(n){this.enabled!==!1&&n.preventDefault()}function Vb(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Hb(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}var $p,Tu,Zp,wc,qp,Ib,ln,Rn,Ue,Eu,Ec,Jp=fe(()=>{qo();$p={type:"change"},Tu={type:"start"},Zp={type:"end"},wc=new Hi,qp=new Dn,Ib=Math.cos(70*Kh.DEG2RAD),ln=new K,Rn=2*Math.PI,Ue={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Eu=1e-6,Ec=class extends Oo{constructor(t,e=null){super(t,e),this.state=Ue.NONE,this.target=new K,this.cursor=new K,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Zi.ROTATE,MIDDLE:Zi.DOLLY,RIGHT:Zi.PAN},this.touches={ONE:Ji.ROTATE,TWO:Ji.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new K,this._lastQuaternion=new On,this._lastTargetPosition=new K,this._quat=new On().setFromUnitVectors(t.up,new K(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new dr,this._sphericalDelta=new dr,this._scale=1,this._panOffset=new K,this._rotateStart=new Jt,this._rotateEnd=new Jt,this._rotateDelta=new Jt,this._panStart=new Jt,this._panEnd=new Jt,this._panDelta=new Jt,this._dollyStart=new Jt,this._dollyEnd=new Jt,this._dollyDelta=new Jt,this._dollyDirection=new K,this._mouse=new Jt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=Lb.bind(this),this._onPointerDown=Rb.bind(this),this._onPointerUp=Nb.bind(this),this._onContextMenu=zb.bind(this),this._onMouseWheel=Fb.bind(this),this._onKeyDown=Ub.bind(this),this._onTouchStart=Bb.bind(this),this._onTouchMove=kb.bind(this),this._onMouseDown=Db.bind(this),this._onMouseMove=Ob.bind(this),this._interceptControlDown=Vb.bind(this),this._interceptControlUp=Hb.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(t){this._cursorStyle=t,t==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.state=Ue.NONE,this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents();let t=this.domElement.getRootNode();t.removeEventListener("keydown",this._interceptControlDown,{capture:!0}),t.removeEventListener("keyup",this._interceptControlUp,{capture:!0}),this._controlActive=!1,this._pointers.length=0,this._pointerPositions={},this.domElement.style.touchAction="",this.domElement.style.cursor="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent($p),this.update(),this.state=Ue.NONE}pan(t,e){this._pan(t,e),this.update()}dollyIn(t){this._dollyIn(t),this.update()}dollyOut(t){this._dollyOut(t),this.update()}rotateLeft(t){this._rotateLeft(t),this.update()}rotateUp(t){this._rotateUp(t),this.update()}update(t=null){let e=this.object.position;ln.copy(e).sub(this.target),ln.applyQuaternion(this._quat),this._spherical.setFromVector3(ln),this.autoRotate&&this.state===Ue.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(i)&&isFinite(s)&&(i<-Math.PI?i+=Rn:i>Math.PI&&(i-=Rn),s<-Math.PI?s+=Rn:s>Math.PI&&(s-=Rn),i<=s?this._spherical.theta=Math.max(i,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+s)/2?Math.max(i,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let o=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let c=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),o=c!=this._spherical.radius}if(ln.setFromSpherical(this._spherical),ln.applyQuaternion(this._quatInverse),e.copy(this.target).add(ln),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let c=null;if(this.object.isPerspectiveCamera){let a=ln.length();c=this._clampDistance(a*this._scale);let u=a-c;this.object.position.addScaledVector(this._dollyDirection,u),this.object.updateMatrixWorld(),o=!!u}else if(this.object.isOrthographicCamera){let a=new K(this._mouse.x,this._mouse.y,0);a.unproject(this.object);let u=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),o=u!==this.object.zoom;let f=new K(this._mouse.x,this._mouse.y,0);f.unproject(this.object),this.object.position.sub(f).add(a),this.object.updateMatrixWorld(),c=ln.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;c!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(c).add(this.object.position):(wc.origin.copy(this.object.position),wc.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(wc.direction))<Ib?this.object.lookAt(this.target):(qp.setFromNormalAndCoplanarPoint(this.object.up,this.target),wc.intersectPlane(qp,this.target))))}else if(this.object.isOrthographicCamera){let c=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),c!==this.object.zoom&&(this.object.updateProjectionMatrix(),o=!0)}return this._scale=1,this._performCursorZoom=!1,o||this._lastPosition.distanceToSquared(this.object.position)>Eu||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Eu||this._lastTargetPosition.distanceToSquared(this.target)>Eu?(this.dispatchEvent($p),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?Rn/60*this.autoRotateSpeed*t:Rn/60/60*this.autoRotateSpeed}_getZoomScale(t){let e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){ln.setFromMatrixColumn(e,0),ln.multiplyScalar(-t),this._panOffset.add(ln)}_panUp(t,e){this.screenSpacePanning===!0?ln.setFromMatrixColumn(e,1):(ln.setFromMatrixColumn(e,0),ln.crossVectors(this.object.up,ln)),ln.multiplyScalar(t),this._panOffset.add(ln)}_pan(t,e){let i=this.domElement;if(this.object.isPerspectiveCamera){let s=this.object.position;ln.copy(s).sub(this.target);let o=ln.length();o*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*o/i.clientHeight,this.object.matrix),this._panUp(2*e*o/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let i=this.domElement.getBoundingClientRect(),s=t-i.left,o=e-i.top,c=i.width,a=i.height;this._mouse.x=s/c*2-1,this._mouse.y=-(o/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let e=this.domElement;this._rotateLeft(Rn*this._rotateDelta.x/e.clientHeight),this._rotateUp(Rn*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(Rn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-Rn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(Rn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-Rn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._rotateStart.set(i,s)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panStart.set(i,s)}}_handleTouchStartDolly(t){let e=this._getSecondPointerPosition(t),i=t.pageX-e.x,s=t.pageY-e.y,o=Math.sqrt(i*i+s*s);this._dollyStart.set(0,o)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{let i=this._getSecondPointerPosition(t),s=.5*(t.pageX+i.x),o=.5*(t.pageY+i.y);this._rotateEnd.set(s,o)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let e=this.domElement;this._rotateLeft(Rn*this._rotateDelta.x/e.clientHeight),this._rotateUp(Rn*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panEnd.set(i,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){let e=this._getSecondPointerPosition(t),i=t.pageX-e.x,s=t.pageY-e.y,o=Math.sqrt(i*i+s*s);this._dollyEnd.set(0,o),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let c=(t.pageX+e.x)*.5,a=(t.pageY+e.y)*.5;this._updateZoomParameters(c,a)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new Jt,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){let e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){let e=t.deltaMode,i={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}});function jp(n,t,e,i){n.onBeforeCompile=s=>{s.uniforms.uCut={value:t-.05},s.uniforms.uBase={value:i||new le(1,1,1)},s.uniforms.uBottom={value:t},s.vertexShader=`varying float vZ;
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
if (onWall > 0.0) normal = normalize(mix(normal, (viewMatrix * vec4(normalize(vWall.xy), 0.0, 0.0)).xyz, onWall));`))},n.customProgramCacheKey=()=>`through-${e}`}function Kp(n,t,e){let i=document.createElement("canvas");i.width=256,i.height=128;let s=i.getContext("2d");s.font="600 84px Inter, system-ui, sans-serif",s.fillStyle="#"+new le(t).getHexString(),s.textAlign="center",s.textBaseline="middle",s.fillText(n,128,64);let o=new vo(i);o.colorSpace=wn;let c=new yo(new or({map:o,depthTest:!1,transparent:!0}));return c.scale.set(e*2,e,1),c.renderOrder=6,c}var Wn,Er,Gb,Tc,Qp=fe(()=>{qo();Jp();Wn={face:"#93a2b4",pocket:"#1abc9c",hole:"#4ea1ff",drill:"#4ea1ff",step:"#2ecc71",corners:"#48d1b4",cutout:"#a78bfa",rough3d:"#f5a524",rest3d:"#e3c341",finish3d:"#ff7a59",chamfer:"#f472b6",thread:"#c084fc",inside:"#4ea1ff",online:"#f5a524"},Er={softwood:"#d8b38a",hardwood:"#9c6b45",mdf:"#b59672",plastic:"#d9e2ea",aluminum:"#b9c1c9",foam:"#c7b8a5"};Gb=(n,t)=>n.some(e=>e.key===t);Tc=class{constructor(){this.el=document.createElement("div"),this.el.className="ncc-viewport",this.renderer=new yc({antialias:!0,alpha:!0}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),this.el.appendChild(this.renderer.domElement),this.scene=new po,this.camera=new _n(35,1,.1,1e4),this.camera.up.set(0,0,1),this.controls=new Ec(this.camera,this.renderer.domElement),this.controls.enableDamping=!0,this.controls.dampingFactor=.12,this.controls.addEventListener("start",()=>{this.userMoved=!0}),this.scene.add(new Ro(16777215,4478310,1.6));let t=new fr(16777215,1.6);t.position.set(-.6,-1,1.6),this.scene.add(t);let e=new fr(16777215,.5);e.position.set(1,.6,.4),this.scene.add(e),this.content=new Gn,this.scene.add(this.content),this.onFrame=null,this.alive=!0,this.resize=new ResizeObserver(()=>this.fit()),this.resize.observe(this.el);let i=s=>{if(this.alive){if(!this.el.isConnected&&this.detachedSince&&s-this.detachedSince>3e3&&!document.querySelector(".ncc-wrapper")){this.dispose();return}this.el.isConnected?this.detachedSince=0:this.detachedSince||=s,this.onFrame&&this.onFrame(s),this.controls.update(),this.el.isConnected&&this.renderer.render(this.scene,this.camera),requestAnimationFrame(i)}};requestAnimationFrame(i),this.setupPicking()}fit(){let t=this.el.clientWidth,e=this.el.clientHeight;!t||!e||(this.renderer.setSize(t,e,!1),this.camera.aspect=t/e,this.camera.updateProjectionMatrix(),this.userMoved||this.refit())}clear(){for(let t of[...this.content.children])this.content.remove(t),t.traverse(e=>{e.geometry?.dispose(),e.material&&[].concat(e.material).forEach(i=>i.dispose())});this.pickMesh=null,this.markers=null}frame(t,e,i=.08){this.fitBox=[t,e,i],this.userMoved=!1,this.refit()}refit(){if(!this.fitBox)return;let[t,e,i]=this.fitBox,s=new K((t[0]+e[0])/2,(t[1]+e[1])/2,(t[2]+e[2])/2),o=Math.max(e[0]-t[0],e[1]-t[1],e[2]-t[2],.001),c=new K(-.45,-.8,.75).normalize(),a=[];for(let g of[t[0],e[0]])for(let m of[t[1],e[1]])for(let y of[t[2],e[2]])a.push(new K(g,m,y));let u=s.clone(),f=o*2,d=()=>{this.camera.position.copy(u).addScaledVector(c,f),this.camera.near=f/100,this.camera.far=f*100,this.camera.lookAt(u),this.camera.updateMatrixWorld(),this.camera.updateProjectionMatrix()};for(let g=0;g<8;g++){d();let m=1/0,y=-1/0,v=1/0,b=-1/0;for(let R of a){let T=R.clone().project(this.camera);m=Math.min(m,T.x),y=Math.max(y,T.x),v=Math.min(v,T.y),b=Math.max(b,T.y)}let x=Math.max((y-m)/2,(b-v)/2);if(!(x>0))break;let _=f*Math.tan(this.camera.fov*Math.PI/360),E=_*this.camera.aspect,A=new K().setFromMatrixColumn(this.camera.matrixWorld,0),S=new K().setFromMatrixColumn(this.camera.matrixWorld,1);u.addScaledVector(A,(m+y)/2*E).addScaledVector(S,(v+b)/2*_),f*=x/(1-i)}d(),this.controls.target.copy(u),this.controls.update()}showPart(t,e=[]){this.clear();let i=new We;i.setAttribute("position",new Ve(t.positions,3)),i.setIndex(new Ve(t.indices,1)),i.computeVertexNormals();let s=new Ae(i,new Bn({color:9348283,metalness:.15,roughness:.55,side:vn,polygonOffset:!0,polygonOffsetFactor:1,polygonOffsetUnits:1}));this.content.add(s),this.pickMesh=s;let o=new _s(new cr(i,25),new Kn({color:2832972,transparent:!0,opacity:.55}));this.content.add(o);for(let a of e)this.addLoops(a.loops,a.z,a.color,a.dashed,a.opacity);i.computeBoundingBox();let c=i.boundingBox;this.keepCamera||this.frame(c.min.toArray(),c.max.toArray())}addLoops(t,e,i,s,o=.95){for(let c of t){let a=c.map(([g,m])=>new K(g,m,e)),u=new We().setFromPoints([...a,a[0]]),f=s?new Po({color:i,dashSize:2,gapSize:1.5,transparent:!0,opacity:o,depthTest:!1}):new Kn({color:i,transparent:!0,opacity:o,depthTest:!1}),d=new ys(u,f);s&&d.computeLineDistances(),d.renderOrder=2,this.content.add(d)}}setupPicking(){let t=this.renderer.domElement,e=null;t.addEventListener("pointerdown",i=>{e=[i.clientX,i.clientY]}),t.addEventListener("pointerup",i=>{if(!e||Math.hypot(i.clientX-e[0],i.clientY-e[1])>4)return;let s=t.getBoundingClientRect(),o=new No;if(o.setFromCamera(new Jt((i.clientX-s.left)/s.width*2-1,-((i.clientY-s.top)/s.height)*2+1),this.camera),this.markers?.length&&this.onMarker){let u=o.intersectObjects(this.markers)[0];if(u?.object.userData.axis){this.onAxis?.(u.object.userData.axis);return}if(u){this.onMarker(u.object.userData.key);return}}if(!this.pickMesh||!this.onPick)return;let c=o.intersectObject(this.pickMesh)[0];if(!c||!c.face)return;let a=c.face.normal.clone();a.dot(o.ray.direction)>0&&a.negate(),this.onPick([a.x,a.y,a.z])})}showZero({stock:t,part:e,points:i,selected:s,zFace:o,color:c,accent:a="#4c6ef5"}){this.clear();let u=t.maxX-t.minX,f=t.maxY-t.minY,d=t.top-t.bottom,g=Math.max(u,f,d),m=new Xi(u,f,d);m.translate((t.minX+t.maxX)/2,(t.minY+t.maxY)/2,(t.top+t.bottom)/2);let y=new Ae(m,new Bn({color:c,transparent:!0,opacity:.45,roughness:.9,depthWrite:!1}));if(y.renderOrder=2,this.content.add(y),this.content.add(new _s(new cr(m),new Kn({color:new le(c).multiplyScalar(.6)}))),e){let _=new We;_.setAttribute("position",new Ve(e.positions,3)),_.setIndex(new Ve(e.indices,1)),_.computeVertexNormals(),this.partMesh=new Ae(_,new Bn({color:9348283,metalness:.15,roughness:.55})),this.content.add(this.partMesh)}else this.partMesh=null;let v=o==="bed"?t.bottom:t.top,b=g*.014;this.markers=[];for(let _ of i){let E=_.key===s,A=new Ae(new Wi(E?b*1.3:b,24,16),new Fn({color:E?a:16777215}));if(A.position.set(_.x,_.y,v),A.userData.key=_.key,A.renderOrder=4,A.material.depthTest=!1,!E){let R=new Ae(new Wi(b*1.25,24,16),new Fn({color:6187893,depthTest:!1}));R.renderOrder=3,A.add(R)}let S=new Ae(new Wi(b*3.5,12,8),new Fn({visible:!1}));if(S.userData.key=_.key,A.add(S),this.markers.push(S),this.content.add(A),E){let R=new Ae(new Ao(b*1.6,b*2,40),new Fn({color:a,transparent:!0,depthTest:!1,side:vn}));R.position.copy(A.position),R.renderOrder=4,this.content.add(R),this.pulse=R;let T=g*.24;for(let[C,w,L]of[[[1,0,0],15158332,"X"],[[0,1,0],3066993,"Y"],[[0,0,1],5147903,"Z"]]){let F=new Do(new K(...C),A.position,T,w,T*.15,T*.065);F.line.visible=!1;let B=new Ae(new fi(g*.0028,g*.0028,T*.86,12),new Fn({color:w,depthTest:!1}));B.position.y=T*.43,B.renderOrder=5,F.add(B),F.cone.material.depthTest=!1,F.renderOrder=5,F.cone.renderOrder=5,this.content.add(F);let H=Kp(L,w,g*.05);H.position.copy(A.position).add(new K(...C).multiplyScalar(T*1.18)),this.content.add(H);let G=new Ae(new fi(T*.1,T*.1,T*1.3,10),new Fn({visible:!1}));G.quaternion.setFromUnitVectors(new K(0,1,0),new K(...C)),G.position.copy(A.position).add(new K(...C).multiplyScalar(T*.65)),G.userData.axis=L.toLowerCase(),this.content.add(G),this.markers.unshift(G)}}}let x=Kp("Front",9675444,g*.04);x.position.set((t.minX+t.maxX)/2,t.minY-g*.08,t.bottom),this.content.add(x),this.keepCamera||this.frame([t.minX,t.minY,t.bottom],[t.maxX,t.maxY,t.top]),Gb(i,s)||(this.pulse=null),this.onFrame=_=>{if(!this.pulse)return;let E=_%1600/1600;this.pulse.scale.setScalar(1+E*1.6),this.pulse.material.opacity=.8*(1-E),this.pulse.lookAt(this.camera.position)}}spin(t,e=700){let i=this.partMesh;if(!i)return Promise.resolve();i.geometry.computeBoundingBox();let s=i.geometry.boundingBox.getCenter(new K),o=t==="x"?new K(1,0,0):new K(0,0,1);i.matrixAutoUpdate=!1;let c=performance.now();return new Promise(a=>{let u=f=>{let d=Math.min(1,(f-c)/e),g=d<.5?2*d*d:1-(-2*d+2)**2/2;i.matrix.makeTranslation(s.x,s.y,s.z).multiply(new Fe().makeRotationAxis(o,Math.PI*g)).multiply(new Fe().makeTranslation(-s.x,-s.y,-s.z)),i.matrixWorldNeedsUpdate=!0,d<1&&i.parent?requestAnimationFrame(u):a()};requestAnimationFrame(u)})}showStock(t,e,i){this.clear(),this.keepCamera=!1;let s=t.nx,o=t.ny,c=s*o,a=new Float32Array(c*3),u=new Float32Array(c*3),f=new le(e);for(let E=0;E<o;E++)for(let A=0;A<s;A++){let S=E*s+A;a[S*3]=t.x0+A*t.cell,a[S*3+1]=t.y0+E*t.cell,a[S*3+2]=t.h[S],u[S*3]=f.r,u[S*3+1]=f.g,u[S*3+2]=f.b}let d=new Uint32Array((s-1)*(o-1)*6),g=0;for(let E=0;E<o-1;E++)for(let A=0;A<s-1;A++){let S=E*s+A,R=S+1,T=S+s,C=T+1;d[g++]=S,d[g++]=R,d[g++]=C,d[g++]=S,d[g++]=C,d[g++]=T}let m=new We;m.setAttribute("position",new Ve(a,3).setUsage(Ss)),m.setAttribute("color",new Ve(u,3).setUsage(Ss));let y=new Float32Array(c*3);for(let E=0;E<c;E++)y[E*3+2]=1;m.setAttribute("normal",new Ve(y,3).setUsage(Ss));let v=new Float32Array(c*4);for(let E=0;E<c;E++)v[E*4+2]=t.h[E],v[E*4+3]=t.h[E];m.setAttribute("wall",new Ve(v,4).setUsage(Ss)),m.setIndex(new Ve(d,1));let b=new Bn({vertexColors:!0,flatShading:!1,roughness:.8,metalness:e===Er.aluminum?.5:.05,side:vn});jp(b,t.bottom,!1,f);let x=new Ae(m,b);this.content.add(x),this.stock={hm:t,geo:m,base:f,sides:this.makeSides(t,f)};let _=new Bn({color:f.clone().multiplyScalar(.7),roughness:.9,side:vn});if(jp(_,t.bottom,!0),this.content.add(new Ae(m,_)),i){let E=new We;E.setAttribute("position",new Ve(i.positions,3)),E.setIndex(new Ve(i.indices,1)),E.computeVertexNormals(),this.partGhost=new Ae(E,new Bn({color:5153279,transparent:!0,opacity:.25,depthWrite:!1})),this.partGhost.visible=!1,this.content.add(this.partGhost)}this.tool=new Gn,this.content.add(this.tool),this.frame([t.x0,t.y0,t.bottom],[t.x0+(s-1)*t.cell,t.y0+(o-1)*t.cell,t.top])}makeSides(t,e){let i=[];for(let g=0;g<t.nx;g++)i.push(g);for(let g=1;g<t.ny;g++)i.push(g*t.nx+t.nx-1);for(let g=t.nx-2;g>=0;g--)i.push((t.ny-1)*t.nx+g);for(let g=t.ny-2;g>=0;g--)i.push(g*t.nx);let s=new Float32Array(i.length*6),o=new Float32Array(i.length*6),c=[],a=[[0,-1],[1,0],[0,1],[-1,0]],u=[t.nx,t.nx+t.ny-1,2*t.nx+t.ny-2];for(let g=0;g<i.length;g++){let m=i[g],y=t.x0+m%t.nx*t.cell,v=t.y0+Math.floor(m/t.nx)*t.cell;s.set([y,v,t.h[m],y,v,t.bottom],g*6);let[b,x]=a[g<u[0]?0:g<u[1]?1:g<u[2]?2:3];if(o.set([b,x,0,b,x,0],g*6),g<i.length-1){let _=g*2;c.push(_,_+1,_+3,_,_+3,_+2)}}let f=new We;f.setAttribute("position",new Ve(s,3).setUsage(Ss)),f.setAttribute("normal",new Ve(o,3)),f.setIndex(c);let d=new Ae(f,new Bn({color:e.clone().multiplyScalar(.85),roughness:.85,side:vn}));return this.content.add(d),{g:f,edge:i}}refreshStock(t,e,i){let s=this.stock;if(!s||e<t)return;let{hm:o,geo:c,base:a}=s,u=o.nx,f=o.ny,d=o.h,g=c.attributes.position,m=c.attributes.color,y=c.attributes.normal,v=c.attributes.wall,b=new le,x=Math.max(0,t),_=Math.min(f-1,e),E=o.cell*1.5,A=(w,L,F)=>{let B=d[L*u+w],H=0;for(let G=-1;G<=1;G++)for(let z=-1;z<=1;z++){let $=w+z,Y=L+G;(z||G)&&$>=0&&Y>=0&&$<u&&Y<f&&(H=Math.max(H,F*(d[Y*u+$]-B)))}return H};for(let w=x;w<=_;w++)for(let L=0;L<u;L++){let F=w*u+L;g.array[F*3]=o.x0+L*o.cell+(o.sx?o.sx[F]:0),g.array[F*3+1]=o.y0+w*o.cell+(o.sy?o.sy[F]:0),g.array[F*3+2]=d[F];let B=o.op[F];B?(b.copy(a).lerp(i[B-1],.28),b.multiplyScalar(.82+.18*Math.max(0,Math.min(1,(d[F]-o.bottom)/Math.max(1,o.top-o.bottom))))):b.copy(a),m.array[F*3]=b.r,m.array[F*3+1]=b.g,m.array[F*3+2]=b.b}let S=g.array,R=Math.max(0,x-1),T=Math.min(f-1,_+1);for(let w=R;w<=T;w++)for(let L=0;L<u;L++){let F=w*u+L,B=v.array,H=A(L,w,1),G=A(L,w,-1);if(B[F*4]=0,B[F*4+1]=0,B[F*4+2]=d[F],B[F*4+3]=d[F],o.wx&&(o.wx[F]||o.wy[F])&&(H>E||G>E)){B[F*4]=o.wx[F],B[F*4+1]=o.wy[F],B[F*4+2]=d[F]-G,B[F*4+3]=d[F]+H,y.array[F*3]=0,y.array[F*3+1]=0,y.array[F*3+2]=1;continue}let z=(w*u+Math.max(0,L-1))*3,$=(w*u+Math.min(u-1,L+1))*3,Y=(Math.max(0,w-1)*u+L)*3,k=(Math.min(f-1,w+1)*u+L)*3,j=S[$]-S[z],Z=S[$+1]-S[z+1],st=S[$+2]-S[z+2],ot=S[k]-S[Y],St=S[k+1]-S[Y+1],wt=S[k+2]-S[Y+2],Yt=Z*wt-st*St,Kt=st*ot-j*wt,se=j*St-Z*ot,ct=Math.hypot(Yt,Kt,se)||1;se<0&&(Yt=-Yt,Kt=-Kt,se=-se),y.array[F*3]=Yt/ct,y.array[F*3+1]=Kt/ct,y.array[F*3+2]=se/ct}g.addUpdateRange(x*u*3,(_-x+1)*u*3),m.addUpdateRange(x*u*3,(_-x+1)*u*3),y.addUpdateRange(R*u*3,(T-R+1)*u*3),v.addUpdateRange(R*u*4,(T-R+1)*u*4),g.needsUpdate=!0,m.needsUpdate=!0,y.needsUpdate=!0,v.needsUpdate=!0;let C=s.sides.g.attributes.position;s.sides.edge.forEach((w,L)=>{C.array[L*6+2]=d[w]}),C.needsUpdate=!0}setTool(t,e){for(let g of[...this.tool.children])this.tool.remove(g),g.traverse(m=>{m.geometry?.dispose(),m.material?.dispose()});let i=t.diameter/2,s=t.kind==="surfacing"||i>6.35,o=s?Math.max(e+1,Math.min(8,i*.5)):Math.max(t.fluteLength||0,Math.min(25,Math.max(e+3,t.diameter*2))),c=new Bn({color:14015457,metalness:.85,roughness:.3}),a;if(t.kind==="vbit"||t.kind==="chamfer"||t.kind==="drill"){let g=i/Math.tan((t.angle||(t.kind==="drill"?118:90))*Math.PI/360);a=new Ae(new lr(i,g,48),c),a.rotation.x=-Math.PI/2,a.position.z=g/2}else if(t.kind==="ball"){a=new Gn;let g=new Ae(new fi(i,i,o-i,64),c);g.rotation.x=Math.PI/2,g.position.z=i+(o-i)/2;let m=new Ae(new Wi(i,48,24,0,Math.PI*2,Math.PI/2,Math.PI/2),c);m.rotation.x=Math.PI/2,m.position.z=i,a.add(g,m)}else a=new Ae(new fi(i,i,o,64),c),a.rotation.x=Math.PI/2,a.position.z=o/2;let u=s?3.175:Math.max(i,Math.min(3.175,i*1.5)),f=20,d=new Ae(new fi(u,u,f,32),new Bn({color:11187132,metalness:.8,roughness:.35}));d.rotation.x=Math.PI/2,d.position.z=o+f/2,this.tool.add(a,d)}moveTool(t,e,i){this.tool.position.set(t,e,i)}showPaths(t){this.paths&&(this.content.remove(this.paths),this.paths.traverse(e=>{e.geometry?.dispose(),e.material?.dispose()})),this.paths=new Gn;for(let e of t){let i=e.track;if(!i)continue;let s=[],o=[];for(let a=4;a<i.length;a+=4)(i[a+3]>0?s:o).push(i[a-4],i[a-3],i[a-2]+.02,i[a],i[a+1],i[a+2]+.02);let c=(a,u,f)=>{if(!a.length)return;let d=new We;d.setAttribute("position",new He(a,3));let g=new _s(d,new Kn({color:u,transparent:!0,opacity:f}));g.renderOrder=3,this.paths.add(g)};c(s,Wn[e.kind]||"#1abc9c",.75),c(o,"#93a2b4",.3)}this.content.add(this.paths)}dispose(){this.alive=!1,this.resize.disconnect(),this.clear(),this.controls.dispose(),this.renderer.dispose()}}});function Wb(){return new Promise((n,t)=>{let e=indexedDB.open(Xb,1);e.onupgradeneeded=()=>e.result.createObjectStore("kv"),e.onsuccess=()=>n(e.result),e.onerror=()=>t(e.error)})}async function Pu(n,t){let e=await Wb();return new Promise((i,s)=>{let o=e.transaction("kv",n),c=t(o.objectStore("kv"));o.oncomplete=()=>{e.close(),i(c?.result)},o.onerror=o.onabort=()=>{e.close(),s(o.error)}})}function Yb(n){let t=new Uint8Array(n),e=2166136261;for(let i=0;i<t.length;i++)e^=t[i],e=Math.imul(e,16777619);return(e>>>0).toString(36)}async function tm(){let n=await Zo("recent");if(Array.isArray(n))return n;let t=await Zo("last");if(!t?.bytes)return[];let e=Pc(t.name,t.bytes);await Jo(`part:${e}`,t);let i=[{key:e,name:t.name,size:t.bytes.byteLength,savedAt:t.savedAt||Date.now()}];return await Jo("recent",i),await Ac("last"),i}async function em(n,t,e=Pc(n.name,n.bytes)){await Jo(`part:${e}`,n);let i=$b(n.name,n.bytes);t.some(o=>o.key===i)&&await Ac(`part:${i}`);let s=[{key:e,name:n.name,size:n.bytes.byteLength,savedAt:n.savedAt},...t.filter(o=>o.key!==e&&o.key!==i)];for(let o of s.slice(Au))await Ac(`part:${o.key}`);return await Jo("recent",s.slice(0,Au)),s.slice(0,Au)}async function Cu(n,t){await Ac(`part:${n}`);let e=t.filter(i=>i.key!==n);return await Jo("recent",e),e}var Xb,Zo,Jo,Ac,Au,Pc,$b,nm=fe(()=>{Xb="nccam";Zo=n=>Pu("readonly",t=>t.get(n)).catch(()=>null),Jo=(n,t)=>Pu("readwrite",e=>e.put(t,n)).catch(()=>{}),Ac=n=>Pu("readwrite",t=>t.delete(n)).catch(()=>{}),Au=10,Pc=(n,t)=>`${n}|${t.byteLength}|${Yb(t)}`;$b=(n,t)=>`${n}|${t.byteLength}`});function im(n){let t=/^\s*([-+]?[\d.]+(?:e[-+]?\d+)?)\s*([a-z%]*)\s*$/i.exec(n||"");if(!t||t[2]==="%")return null;let e=Zb[t[2].toLowerCase()];return e?{mm:+t[1]*e,user:+t[1]}:null}function sm(n){let t=/rgba?\(\s*(\d+)[, ]+(\d+)[, ]+(\d+)(?:[,/ ]+([\d.]+%?))?/.exec(n||"");return!t||t[4]!==void 0&&parseFloat(t[4])===0?null:"#"+[t[1],t[2],t[3]].map(e=>(+e).toString(16).padStart(2,"0")).join("")}function rm(n){let t=new DOMParser().parseFromString(n,"image/svg+xml");if(t.querySelector("parsererror")||t.documentElement.nodeName.toLowerCase()!=="svg")throw new Error("This SVG could not be read. Save it again as plain SVG.");let e=t.documentElement,i=(e.getAttribute("viewBox")||"").trim().split(/[\s,]+/).map(Number),s=i.length===4&&i.every(Number.isFinite)&&i[2]>0&&i[3]>0,o=im(e.getAttribute("width")),c=im(e.getAttribute("height")),a=s?i[2]:o?.user??0,u=s?i[3]:c?.user??0,f=o&&s?o.mm/i[2]:c&&s?c.mm/i[3]:o?o.mm/o.user:25.4/96,d=o&&/[a-z]+$/i.exec(e.getAttribute("width"))?.[0]||"px",g=document.createElement("div");g.style.cssText="position:absolute;left:-100000px;top:0;width:0;height:0;overflow:hidden;opacity:0;pointer-events:none";let m=document.importNode(e,!0);s?(m.setAttribute("width",String(i[2])),m.setAttribute("height",String(i[3])),m.setAttribute("preserveAspectRatio","none")):(a&&m.setAttribute("width",String(a)),u&&m.setAttribute("height",String(u))),g.appendChild(m),document.body.appendChild(g);let y=[],v={},b=x=>{v[x]=(v[x]||0)+1};try{Kb(m);let x=s?i[3]:u||m.getBBox().height,_=m.querySelectorAll("path, rect, circle, ellipse, line, polyline, polygon, text, image");for(let E of _){if(E.closest(Jb))continue;let A=getComputedStyle(E);if(A.display==="none"||A.visibility==="hidden")continue;let S=E.nodeName.toLowerCase();if(S==="text"){b("text");continue}if(S==="image"){b("image");continue}let R=A.stroke!=="none"&&parseFloat(A.strokeOpacity)!==0?sm(A.stroke):null,T=A.fill!=="none"&&parseFloat(A.fillOpacity)!==0?sm(A.fill):null;if(!R&&!T)continue;let C=E.getCTM();if(!C)continue;let w=jb(E);for(let L of Qb(E,S)){let F=L.pts.map(([H,G])=>[(C.a*H+C.c*G+C.e)*f,(x-(C.b*H+C.d*G+C.f))*f]),B=os(F,L.closed);B.length<2||y.push({pts:B,closed:L.closed&&B.length>2,color:R||T,layer:w,filled:!!T})}}}finally{g.remove()}return{shapes:y,units:d,skipped:v}}function jb(n){for(let t=n.parentElement;t&&t.nodeName.toLowerCase()!=="svg";t=t.parentElement)if(t.getAttribute("inkscape:groupmode")==="layer")return t.getAttribute("inkscape:label")||t.id||"";return""}function Kb(n){for(let t=0;t<6;t++){let e=n.querySelectorAll("use");if(!e.length)return;for(let i of e){let s=i.getAttribute("href")||i.getAttributeNS("http://www.w3.org/1999/xlink","href")||"",o=s.startsWith("#")?n.querySelector(`[id="${CSS.escape(s.slice(1))}"]`):null,c=document.createElementNS("http://www.w3.org/2000/svg","g");for(let f of i.attributes)["href","xlink:href","x","y","width","height","transform"].includes(f.name)||c.setAttribute(f.name,f.value);let a=parseFloat(i.getAttribute("x"))||0,u=parseFloat(i.getAttribute("y"))||0;if(c.setAttribute("transform",`${i.getAttribute("transform")||""} translate(${a} ${u})`),o&&!o.contains(i)){let f=o.nodeName.toLowerCase()==="symbol"?Object.assign(document.createElementNS("http://www.w3.org/2000/svg","g"),{innerHTML:o.innerHTML}):o.cloneNode(!0);f.removeAttribute("id"),c.appendChild(f)}i.replaceWith(c)}}}function Qb(n,t){switch(t){case"path":try{return Nc(n.getAttribute("d"))}catch{return[]}case"line":return[{pts:[[fn(n,"x1"),fn(n,"y1")],[fn(n,"x2"),fn(n,"y2")]],closed:!1}];case"polyline":case"polygon":{let e=(n.getAttribute("points")||"").trim().split(/[\s,]+/).map(Number),i=[];for(let s=0;s+1<e.length;s+=2)i.push([e[s],e[s+1]]);return t==="polygon"&&i.length>2&&i.push(i[0].slice()),i.length>1?[{pts:i,closed:t==="polygon"}]:[]}case"circle":{let e=fn(n,"r");return e>0?[{pts:Ko(fn(n,"cx"),fn(n,"cy"),e),closed:!0}]:[]}case"ellipse":{let e=fn(n,"rx"),i=fn(n,"ry");if(!(e>0&&i>0))return[];let s=Qo(fn(n,"cx"),fn(n,"cy"),e,0,i/e);return s[s.length-1]=s[0].slice(),[{pts:s,closed:!0}]}case"rect":{let e=fn(n,"x"),i=fn(n,"y"),s=fn(n,"width"),o=fn(n,"height");if(!(s>0&&o>0))return[];let c=n.hasAttribute("rx")?fn(n,"rx"):fn(n,"ry"),a=n.hasAttribute("ry")?fn(n,"ry"):c;if(c=Math.min(c,s/2),a=Math.min(a,o/2),!(c>0))return[{pts:[[e,i],[e+s,i],[e+s,i+o],[e,i+o],[e,i]],closed:!0}];let u=Math.max(c,a),f=(g,m,y)=>Rs(0,0,u,y,y+Math.PI/2,!0).map(([v,b])=>[g+v/u*c,m+b/u*a]),d=[...f(e+s-c,i+o-a,0),...f(e+c,i+o-a,Math.PI/2),...f(e+c,i+a,Math.PI),...f(e+s-c,i+a,Math.PI*1.5)];return d.push(d[0].slice()),[{pts:d,closed:!0}]}}return[]}var Zb,Jb,fn,om=fe(()=>{Sc();Zb={mm:1,cm:10,in:25.4,pt:25.4/72,pc:25.4/6,px:25.4/96,"":25.4/96},Jb="defs, clipPath, mask, symbol, marker, pattern, metadata, title, desc";fn=(n,t)=>parseFloat(n.getAttribute(t))||0});function lm(n){return am||=(async()=>{let t=async o=>{let c=await fetch(n.file(`lib/${o}`));if(!c.ok)throw new Error(`lib/${o}: ${c.status}`);return URL.createObjectURL(new Blob([await c.text()],{type:"text/javascript"}))},[e,i]=await Promise.all([t("pdf.min.mjs"),t("pdf.worker.min.mjs")]),s=await import(e);return s.GlobalWorkerOptions.workerSrc=i,s})().catch(t=>{throw am=null,t})}var am,cm=fe(()=>{am=null});function Ru(n,t,e){var i=eM(n,t,e);return i!==null?i:tM(n,t,e)}function hm(n){var t={mm:1,cm:10,in:25.4,inch:25.4,inches:25.4,'"':25.4};return n==="feed"&&(t["mm/min"]=1,t["mm/m"]=1,t["in/min"]=25.4,t["in/m"]=25.4,t["inch/min"]=25.4,t.ipm=25.4,t["mm/s"]=60,t["mm/sec"]=60,t["in/s"]=25.4*60,t["in/sec"]=25.4*60,t.ips=25.4*60),t}function tM(n,t,e){var i=String(n??"").trim().toLowerCase().replace(/[”″]/g,'"').replace(/''/g,'"'),s=hm(e),o=t?25.4:1,c=0,a=function(){for(;i[c]===" ";)c++},u=function(){var y=/^(?:(\d+)\/(\d+)(?![\d.])|(\d+(?:\.\d*)?|\.\d+))\s*([a-z"]+(?:\/[a-z]+)?)?/.exec(i.slice(c));if(!y||+y[2]==0)return null;c+=y[0].length;var v=y[1]!=null?y[1]/y[2]:parseFloat(y[3]);return y[4]?Object.prototype.hasOwnProperty.call(s,y[4])?{v:v*s[y[4]],d:1}:null:{v,d:0}},f,d=function(y){if(a(),!y&&(i[c]==="-"||i[c]==="+")){var v=i[c++]==="-",b=d(!0);return b&&{v:v?-b.v:b.v,d:b.d}}if(i[c]!=="(")return u();c++;var x=f();return a(),!x||i[c]!==")"?null:(c++,x)},g=function(){for(var y=d();;){a();var v=i[c];if(v!=="*"&&v!=="/")return y;c++;var b=d();if(!y||!b)return null;if(v==="*"){if(y.d+b.d>1)return null;y={v:y.v*b.v,d:y.d+b.d}}else{if(b.d||b.v===0)return null;y={v:y.v/b.v,d:y.d}}}};f=function(){for(var y=g();;){a();var v=i[c];if(v!=="+"&&v!=="-")return y;c++;var b=g();if(!y||!b)return null;y.d!==b.d&&(y.d?b={v:b.v*o,d:1}:y={v:y.v*o,d:1}),y={v:v==="+"?y.v+b.v:y.v-b.v,d:y.d}}};var m=f();return a(),!m||c<i.length||!isFinite(m.v)?null:parseFloat((m.d?m.v/o:m.v).toFixed(t?4:3))}function eM(n,t,e){var i=String(n??"").trim().toLowerCase().replace(/[”″]/g,'"').replace(/''/g,'"'),s=i.match(/^([+-])?\s*(\d+(?:\.\d*)?|\.\d+)(?:(?:\s+|-)(\d+)\/(\d+)|\/(\d+))?\s*([a-z"/]*)$/);if(!s)return null;var o=parseFloat(s[2]),c;if(s[3]!=null){if(/\./.test(s[2])||+s[4]==0)return null;c=o+ +s[3]/+s[4]}else if(s[5]!=null){if(/\./.test(s[2])||+s[5]==0)return null;c=o/+s[5]}else c=o;s[1]==="-"&&(c=-c);var a=hm(e),u=s[6];if(!u)return c;if(!Object.prototype.hasOwnProperty.call(a,u))return null;var f=c*a[u],d=t?f/25.4:f;return parseFloat(d.toFixed(t?4:3))}function Lu(n,t){return parseFloat(n.toFixed(t?4:3))}function nM(n,t){return t?n/Iu:n}function iM(n,t){if(!t)return n;for(var e=n*Iu,i=Lu(n,!0),s=0;s<=4;s++){var o=parseFloat(e.toFixed(s));if(Lu(o/Iu,!0)===i)return o}return e}function um(n,t){return String(Lu(nM(n,t),t))}function fm(n,t,e){var i=Ru(n,t,e);return i==null?null:iM(i,t)}function dm(n,t){t=t||{};function e(){return typeof t.imperial=="function"?!!t.imperial():!!t.imperial}function i(a){return a&&a.getAttribute&&a.tagName==="INPUT"&&a.getAttribute("data-unit")?a:null}function s(a){var u=Ru(a.value,e(),a.getAttribute("data-unit"));u==null||String(u)===a.value.trim()||(a.value=u,a.dispatchEvent(new Event("input",{bubbles:!0})))}function o(a){var u=i(a.target);u&&s(u)}function c(a){var u=i(a.target);if(!(!u||u.disabled||u.readOnly)){if(a.key==="Enter"){s(u);return}if(!(t.arrows===!1||a.key!=="ArrowUp"&&a.key!=="ArrowDown")){var f=e(),d=Ru(u.value,f,u.getAttribute("data-unit"));(d==null||!isFinite(d))&&(d=0);var g=a.ctrlKey||a.metaKey?.001:a.shiftKey?10:a.altKey?.1:1;u.hasAttribute("data-integer")&&(g=Math.max(1,g));var m=d+(a.key==="ArrowUp"?g:-g),y=parseFloat(u.getAttribute("data-min")!=null?u.getAttribute("data-min"):u.getAttribute("min"));if(isFinite(y)&&m<y){if(!Number.isInteger(y)){a.preventDefault();return}m=y}m=parseFloat(m.toFixed(f?4:3)),a.preventDefault(),String(m)!==u.value&&(u.value=m,u.dispatchEvent(new Event("input",{bubbles:!0})),t.onStep&&t.onStep(u))}}}return n.addEventListener("focusout",o,!0),n.addEventListener("keydown",c,!0),function(){n.removeEventListener("focusout",o,!0),n.removeEventListener("keydown",c,!0)}}var Iu,pm=fe(()=>{Iu=25.4});var mm={};Du(mm,{mountApp:()=>rM});function rM(n,t,e){let i={get:async O=>{let X=await fetch(t.base+O);if(!X.ok)throw new Error(`${O}: ${X.status}`);return X.json()},post:(O,X)=>fetch(t.base+O,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(X)})},s={step:1,maxStep:1,fileName:"",loading:"",error:"",up:"top",analysis:null,part:null,scale:null,rot:null,lock:!0,fileSize:null,meshKind:null,tools:[],numbering:"slot",safeZ:null,connected:!1,units:"mm",limits:{},travel:null,job:null,plan:null,planning:!1,result:null,simChecks:null,toast:"",recent:[],partKey:null,raw:null,a:null,groups:[],sel:new Set,info:null},o=new Tc,c=O=>!!O.toolNumber&&(!s.slots||O.toolNumber<=s.slots),a=(O,X)=>us.num(O,s.units,X),u=(O,X)=>us.len(O,s.units,X),f=()=>s.units==="in",d=O=>um(O,f()),g=O=>{let X=fm(String(O.value).replace(/^(\d+),(\d+)$/,"$1.$2"),f());return X!=null&&Number.isFinite(X)&&X>0?X:null},m=0;(async()=>{let[O,X,rt,ut]=await Promise.all([i.get("/api/settings").catch(()=>({})),i.get("/api/tools").catch(()=>[]),i.get("/api/firmware").catch(()=>null),i.get("/api/server-state").catch(()=>null)]);s.units=us.unitsFrom(O?.unitsPreference),s.numbering=O?.tool?.numbering==="toolId"?"toolId":"slot",s.slots=Math.max(0,Number(O?.tool?.count)||0);let nt=O?.tool?.probe?Number(O?.tool?.probeToolNumber)||99:null,dt=Number(O?.safeZHeight);s.safeZ=Number.isFinite(dt)?dt:null,s.tools=bf(Array.isArray(X)?X:X?.tools),s.numbering=vf(s.numbering,s.tools,s.slots,nt);let zt=rt?.settings||{},ne=gt=>{let $t=parseFloat(zt[gt]?.value);return Number.isFinite($t)&&$t>0?$t:null};s.limits={maxRpm:ne("30")||void 0,minRpm:ne("31")||void 0,maxFeed:Math.min(ne("110")||1/0,ne("111")||1/0,1/0)},Number.isFinite(s.limits.maxFeed)||delete s.limits.maxFeed,s.maxRapid=Math.min(ne("110")||5e3,ne("111")||5e3),ne("130")&&ne("131")&&(s.travel={x:ne("130"),y:ne("131"),z:ne("132")}),s.connected=!!ut?.machineState?.connected,Y(),s.recent=await tm(),s.recent.length&&!s.a&&!s.loading&&H(s.recent[0].key)})();let y=0,v=/\.(dxf|svg|pdf|ai)$/i;async function b(O,X=null){if(!O&&!X)return;let rt=++y,ut=()=>rt!==y,nt=X?X.name:O.name;if(!v.test(nt)){s.error=/\.(step|stp|stl|3mf)$/i.test(nt)?"That\u2019s a 3D part: open it in ncCAM. ncCut2D reads drawings: DXF, SVG, PDF or AI.":"Open a DXF, SVG, PDF or AI drawing.",Y();return}s.fileName=nt,s.loading=`Reading ${nt}\u2026`,s.error="",s.plan=null,s.result=null,s.a=null,s.part=null,s.sel=new Set,s.step=1,s.maxStep=1,Y();try{let dt=X?X.bytes:await O.arrayBuffer();if(ut())return;let zt=Pc(nt,dt);if(!X&&s.recent.some(Pe=>Pe.key===zt)){let Pe=await Zo(`part:${zt}`);if(ut())return;Pe?.bytes&&G(Pe.bytes,dt)&&(X={...Pe,bytes:dt})}let ne=nt.split(".").pop().toLowerCase(),gt;if(ne==="dxf"?gt=Fc(new TextDecoder().decode(dt)):ne==="svg"?gt=rm(new TextDecoder().decode(dt)):gt=await Uc(new Uint8Array(dt.slice(0)),await lm(t)),ut())return;let $t=zu(gt.shapes);if(!$t.shapes.length)throw new Error("No lines or shapes were found in this drawing. Text must be converted to curves (outlines) first.");let te=Object.entries(gt.skipped||{}).filter(([,Pe])=>Pe>0).map(([Pe,$e])=>`${$e} ${Pe}`);if(s.info={units:gt.units,notes:te.length?`Not drawn: ${te.join(", ")} (convert text and hatches to curves to cut them).`:""},s.raw=$t.shapes,s.bytes=dt.slice(0),s.partKey=zt,s.scale=X?.scale||1,await x(X?.job),ut())return;B()}catch(dt){if(ut())return;s.error=dt.message||String(dt),s.fileName="",s.a=null}s.loading="",Y()}async function x(O){let X=s.scale===1?s.raw:ku(s.raw,[s.scale,0,0,s.scale,0,0]),rt=s.groups;if(s.a=ua(X),s.groups=Gc(s.a),O?.groups&&rt?.length){let nt={};for(let dt of s.groups){let zt=rt.find(ne=>ne.idx.includes(dt.idx[0]));zt&&O.groups[zt.key]&&(nt[dt.key]=O.groups[zt.key])}O={...O,groups:nt}}await e("load",{shapes:X});let ut=Cf(s.a,null);s.job=O?{...ut,...O,stock:{...ut.stock,...O.stock,...O.stock?.fit!==!1?{width:ut.stock.width,depth:ut.stock.depth}:{}},groups:O.groups||{},shapes:O.shapes||{}}:ut;for(let nt of Object.keys(s.job.shapes))+nt>=s.a.shapes.length&&delete s.job.shapes[nt];s.sel=new Set([...s.sel].filter(nt=>nt<s.a.shapes.length)),await A()}let _=Promise.resolve();function E(O){return _=_.then(async()=>{s.loading="Resizing the drawing\u2026",Y();try{s.scale=O,s.result=null,s.maxStep=Math.min(s.maxStep,3),await x(s.job),B()}catch(X){s.error=X.message||String(X)}s.loading="",Y()}),_}async function A(O=!1){if(!s.a||!(s.job?.stock.thickness>0)){s.plan=null,s.part=null,Y();return}let X=++m;s.planning=!0,O&&(s.result=null),Y();let rt=performance.now();try{let ut=await e("plan",{tools:s.tools,job:{...s.job,units:s.units},limits:s.limits,paths:O,gcodeOptions:{name:s.fileName,numbering:s.numbering,safeZHeightMm:s.safeZ},timing:{maxRapid:s.maxRapid||5e3}});if(X!==m)return;s.slow=T(performance.now()-rt,O)??(O?null:s.slow),s.plan=ut.plan,s.part=ut.part,B(),O&&(s.result=ut,s.simChecks=null)}catch(ut){X===m&&(s.error=ut.message||String(ut))}X===m&&(s.planning=!1,Y())}let S={plan:6e3,paths:15e3,tip:5e3},R=()=>{let O=/aarch64|arm64|armv\d|raspberry/i.test(navigator.userAgent||"")||(navigator.hardwareConcurrency||8)<=4,X=/^(localhost|127\.|\[?::1)/.test(location.hostname||"localhost")||!/^https?:$/.test(location.protocol);return O&&X};function T(O,X){return!R()||O<(X?S.paths:S.plan)?null:`${X?"Making the toolpaths":"Planning"} took ${Math.round(O/1e3)} s on this small computer. ncCut2D runs in the browser that shows it: open ncSender in a browser on a laptop or desktop (this machine's address, port 8090) and it works there, usually several times faster. Programs still save to this machine.`}function C(O,X=""){return`<div class="ncc-busy" ${X?`style="${X}"`:""}><div class="ncc-busy-in"><div class="ncc-busy-row"><span class="ncc-spin"></span>${ue(O)}<span class="ncc-elapsed" data-elapsed></span></div>
      <div class="ncc-busy-tip" data-slowtip hidden>Slow for your parts? Open ncSender in a browser on a laptop or desktop (this machine's address, port 8090): ncCut2D works there, usually several times faster.</div></div></div>`}let w=null,L=setInterval(()=>{if(!n.isConnected){clearInterval(L);return}if(!(s.loading||s.planning||s.result&&!s.simChecks&&s.step===4)){w=null;return}w??=performance.now();let X=performance.now()-w,rt=Math.floor(X/1e3);n.querySelectorAll("[data-elapsed]").forEach(ut=>{ut.textContent=rt>=2?` ${rt} s`:""}),X>=S.tip&&R()&&n.querySelectorAll("[data-slowtip]").forEach(ut=>{ut.hidden=!1})},500),F=null;function B(){if(!s.bytes||!s.job)return;clearTimeout(F);let O={name:s.fileName,bytes:s.bytes,job:s.job,scale:s.scale,savedAt:Date.now()},X=s.partKey,rt=s.recent[0]?.key!==X;F=setTimeout(async()=>{s.recent=await em(O,s.recent,X),rt&&Y()},400)}async function H(O){let X=await Zo(`part:${O}`);if(X?.bytes)return b(null,X);s.recent=await Cu(O,s.recent),s.error="That drawing is no longer kept in this browser.",Y()}function G(O,X){if(O.byteLength!==X.byteLength)return!1;let rt=new Uint8Array(O),ut=new Uint8Array(X);for(let nt=0;nt<rt.length;nt++)if(rt[nt]!==ut[nt])return!1;return!0}function z(){let O=s.bytes?s.partKey:null;return s.recent.filter(X=>X.key!==O)}function $(O){let X=(Date.now()-O)/864e5;return X<1?"today":X<2?"yesterday":X<30?`${Math.floor(X)} days ago`:new Date(O).toLocaleDateString()}function Y(){if(!n.isConnected)return;let O=n.querySelector("[data-keep-scroll]"),X=O?O.scrollTop:0,rt=s.step,ut=[s.a?"Give the stock\u2019s thickness, then choose how each kind of shape is cut and how deep.":"Drop a drawing. ncCut2D groups alike shapes so you choose each kind once.","Pick the material. ncCAM sets the speeds, feeds and depth of each pass.","Tools are picked from your Tool Library. Change any of them, or just continue.","Watch the cut play through. When it looks right, load it."][rt-1],nt=[s.a?"What to cut":"Open your drawing","What are you cutting it from?","Here\u2019s the plan",s.simChecks&&!s.simChecks.ok?"Check the warnings":"Ready to cut"][rt-1];n.innerHTML=`
      <nav class="ncc-rail" aria-label="Steps">
        <div class="ncc-rail-head"><div class="ncc-eyebrow">Plugin</div><div class="ncc-rail-title">ncCut2D<span class="ncc-beta">Beta</span></div><div class="ncc-rail-sub">DXF, SVG, PDF or AI to G-code</div></div>
        <div class="ncc-steps">${sM.map((ne,gt)=>{let $t=gt+1,te=$t===rt?"on":$t<s.maxStep||$t<rt?"done":"";return`<button class="ncc-step ${te}" type="button" data-go="${$t}" ${$t<=s.maxStep?"":"disabled"}><span class="ncc-num">${te==="done"?"\u2713":$t}</span>${ue(ne)}</button>`}).join("")}</div>
        <button class="ncc-close" type="button" data-act="close">${Ze.close}Close</button>
      </nav>
      <section class="ncc-main">
        <div class="ncc-top">
          <div><h1>${ue(nt)}</h1><p class="ncc-lede">${ue(ut)}</p></div>
          <div class="ncc-conn"><span class="ncc-dot ${s.connected?"ok":""}"></span>${s.connected?"Connected":"Not connected"}</div>
        </div>
        <div class="ncc-body ${rt===3?"fixed":""}">${[st,ge,tt,V][rt-1]()}</div>
        <div class="ncc-foot">${k()}</div>
      </section>
      ${s.toast?`<div class="ncc-toast" role="status">${ue(s.toast)}</div>`:""}`;let dt=n.querySelector("[data-keep-scroll]");dt&&(dt.scrollTop=X);let zt=n.querySelector("[data-viewer]");if(zt){zt.replaceWith(o.el);let ne=s.loading||rt===4&&!s.result?C(s.loading||"Making toolpaths\u2026"):"";o.el.querySelectorAll(".ncc-busy, .ncc-overlay").forEach(gt=>gt.remove()),o.el.insertAdjacentHTML("beforeend",(rt===4?Et():"")+ne),o.fit(),rt===2&&Ye(),rt===3&&en(),rt===4&&s.result&&mt()}}function k(){let O=`<button class="ncc-back" type="button" data-go="${s.step-1}" ${s.step>1?"":"disabled"}>Back</button>`;if(s.step===1){let rt=s.a?s.job?.stock.thickness>0?s.plan&&!s.plan.ops.length?"Nothing is set to be cut.":"":"Give the stock\u2019s thickness first.":"";return`${O}${rt?`<span class="ncc-foot-note">${rt}</span>`:""}<button class="ncc-next" type="button" data-go="2" ${s.plan&&s.plan.ops.length&&!s.loading&&!s.planning?"":"disabled"}>Next: Stock ${Ze.next}</button>`}if(s.step===2)return`${O}<button class="ncc-next" type="button" data-go="3">Next: Operations ${Ze.next}</button>`;if(s.step===3){let rt=s.plan&&s.plan.ops.some(ut=>ut.enabled);return`${O}<button class="ncc-next" type="button" data-go="4" ${rt&&!s.planning?"":"disabled"}>Make toolpaths ${Ze.next}</button>`}let X=s.simChecks&&!s.simChecks.ok;return`${O}${X?'<span class="ncc-foot-note ncc-bad">Fix the problems above before loading.</span>':""}<button class="ncc-next" type="button" data-act="load" ${s.result&&s.simChecks&&!X?"":"disabled"}>${Ze.load}Load into ncSender</button>`}let j={outside:Wn.cutout,inside:Wn.inside,pocket:Wn.pocket,online:Wn.online,off:"#8a94a3"},Z=".dxf,.svg,.pdf,.ai,.DXF,.SVG,.PDF,.AI";function st(){if(!s.a&&!s.loading)return`<div class="ncc-drop" data-drop>
        <div class="ncc-drop-icon">${Ze.upload}</div>
        <h2>Drop a DXF, SVG, PDF or AI file here</h2>
        <p>A drawing to size, from Fusion, Inkscape, Illustrator, LibreCAD or QCAD. Each shape gets a cut: <strong>Outer (part)</strong>, <strong>Inner (perimeter)</strong>, <strong>Inner (clearing)</strong> or <strong>On the line</strong>.</p>
        <label class="ncc-btn" style="display: inline-flex; align-items: center; gap: 8px">Open file<input type="file" accept="${Z}" data-file hidden></label>
        ${s.error?`<div class="ncc-hint bad" style="max-width: 520px">${Ze.warn}<span>${ue(s.error)}</span></div>`:""}
        ${z().length?`<div class="ncc-recent"><div class="ncc-recent-h">Recent drawings <span>kept in this browser</span></div>
          ${z().map(X=>`<div class="ncc-recent-row"><button class="ncc-recent-open" type="button" data-recent-open="${ue(X.key)}"><span class="ncc-file-name">${ue(X.name)}</span><span class="ncc-file-sub">${$(X.savedAt)}</span></button><button class="ncc-recent-x" type="button" data-forget="${ue(X.key)}" aria-label="Forget ${ue(X.name)}" title="Forget">${Ze.close}</button></div>`).join("")}</div>`:""}
        ${s.tools.length?"":`<div class="ncc-hint" style="max-width: 520px">${Ze.info}<span>Your Tool Library is empty. Add your end mills in Settings \u2192 Tool Library so ncCut2D can pick them.</span></div>`}
      </div>`;let O=s.a;return`
      <div class="ncc-card ncc-viewcard ncc-grow">
        <div class="ncc-file">
          <div style="display: flex; align-items: center; gap: 12px; min-width: 0">
            <div class="ncc-drop-icon" style="width: 38px; height: 38px; border-radius: 10px">${Ze.part}</div>
            <div style="min-width: 0"><div class="ncc-file-name">${ue(s.fileName)}</div>
            <div class="ncc-file-sub ncc-mono">${O?`${a(O.size[0])} \xD7 ${u(O.size[1])} \xB7 ${O.shapes.length} shape${O.shapes.length===1?"":"s"}`:"&nbsp;"}</div></div>
          </div>
          <div style="display: flex; gap: 8px; align-items: center">
          ${z().length?`<select class="ncc-select ncc-recent-pick" data-recent aria-label="Recent drawings" ${s.loading?"disabled":""}><option value="">Recent drawings\u2026</option>${z().map(X=>`<option value="${ue(X.key)}">${ue(X.name)} \xB7 ${$(X.savedAt)}</option>`).join("")}</select>`:""}
          <label class="ncc-btn muted" style="white-space: nowrap">Open another file<input type="file" accept="${Z}" data-file hidden></label>
          </div>
        </div>
        <div class="ncc-drawing" data-drawing>${O?St():C(s.loading||"Reading\u2026","position: static; flex: 1")}</div>
        <div class="ncc-row-sub" style="margin: 0">Click a shape to choose its cut on its own; shift-click for more. ${ot()}</div>
      </div>
      <div class="ncc-col ncc-side" data-keep-scroll="cuts">
        ${O?`${Dt()}${re()}${kt()}${pt()}${de(!0)}`:""}
      </div>`}let ot=()=>["outside","inside","pocket","online","off"].map(O=>`<span style="white-space: nowrap"><span class="ncc-swatch" style="background: ${j[O]}"></span> ${ue(ha[O])}</span>`).join(" ");function St(){let O=s.a,[X,rt]=O.size,ut=Math.max(X,rt)*.03+1,nt=Ns(s.groups),dt=O.shapes.map((gt,$t)=>$t).sort((gt,$t)=>(O.areas[$t]||0)-(O.areas[gt]||0)),zt=Math.max(X,rt)/500,ne=dt.map(gt=>{let $t=O.shapes[gt],te=Oi(O,s.job,gt,nt),Pe=$t.pts.map((rs,N)=>`${N?"L":"M"}${rs[0].toFixed(3)} ${(rt-rs[1]).toFixed(3)}`).join("")+(O.loops[gt]?"Z":""),$e=j[te.cut],je=s.sel.has(gt),gi=te.cut==="pocket"&&O.loops[gt]?`fill="${$e}" fill-opacity="0.22"`:O.loops[gt]?'fill="transparent"':'fill="none"';return`<path d="${Pe}" data-shape="${gt}" stroke="${je?"var(--color-accent)":$e}" stroke-width="${(je?3:1.4)*zt}" ${te.cut==="off"?`stroke-dasharray="${4*zt} ${3*zt}"`:""} ${gi} vector-effect="non-scaling-stroke" style="cursor: pointer"><title>${ue(Yt(gt))} \xB7 ${ue(ha[te.cut])}${wt(te)}</title></path>`}).join("");return`<svg viewBox="${-ut} ${-ut} ${X+2*ut} ${rt+2*ut}" preserveAspectRatio="xMidYMid meet" style="width: 100%; height: 100%; display: block">${ne}</svg>`}let wt=O=>O.cut==="off"?"":O.depth===null||O.depth===void 0?" \xB7 through":` \xB7 ${u(O.depth)} deep`;function Yt(O){let X=s.a,rt=X.circles[O];if(!X.loops[O])return"Line";if(rt)return`\xD8${u(2*rt.r)} circle`;let ut=Lc([X.shapes[O]]);return`${a(ut.w)} \xD7 ${u(ut.h)} shape`}function Kt(O){let X=O.idx.length,rt=X>1?`${X} \xD7 `:"";if(O.kind==="outline")return X>1?`Outline (${X} shapes joined)`:"Outline";if(O.kind==="line")return X>1?`${X} lines`:"A line";if(O.kind==="counterbore"){let{sizes:ut,step:nt,last:dt}=O.label;return`${rt}\xD8${u(ut[nt])} ${dt?"hole through the":nt?"inner step of the":"outer step of the"} counterbore${X>1?"s":""} (${ut.map(zt=>a(zt)).join(" / ")})`}return O.kind==="circle"?`${rt}\xD8${u(O.label.d)} circle${X>1?"s":""}`:`${rt}${a(O.label.w)} \xD7 ${u(O.label.h)} ${O.kind==="rect"?"rectangle":"shape"}${X>1?"s":""}`}let se=O=>O?["outside","inside","pocket","online","off"]:["online","off"];function ct(O,X,rt){let ut=se(rt).map(zt=>`<option value="${zt}" ${X.cut===zt?"selected":""}>${ue(ha[zt])}</option>`).join(""),nt=X.depth===null||X.depth===void 0,dt=X.cut==="off"?"":`<label class="ncc-chk"><input type="checkbox" data-through="${ue(O)}" ${nt?"checked":""}> Through</label>
      ${nt?"":`<input class="ncc-input ncc-mono ncc-depth" type="text" data-unit="length" data-min="0" autocomplete="off" spellcheck="false" aria-label="Depth (${s.units})" data-depth="${ue(O)}" value="${d(X.depth)}"><span class="ncc-unit">${s.units} deep</span>`}`;return`<div class="ncc-choose"><select class="ncc-select" data-cut="${ue(O)}" aria-label="Cut">${ut}</select>${dt}</div>`}function pt(){let O=Ns(s.groups);return`<div class="ncc-card"><div class="ncc-label">What to cut</div>${s.groups.map(rt=>{let ut=Oi(s.a,s.job,rt.idx[0],O),nt=rt.idx.filter(dt=>s.job.shapes[dt]).length;return`<div class="ncc-decide" data-hover="${ue(rt.key)}">
        <div class="ncc-decide-name"><span class="ncc-swatch" style="background: ${j[ut.cut]}"></span>${ue(Kt(rt))}${nt?`<small> \xB7 ${nt} set on ${nt>1?"their":"its"} own</small>`:""}</div>
        ${ct(rt.key,ut,rt.kind!=="line")}
      </div>`}).join("")}</div>`}function kt(){if(!s.sel.size)return"";let O=[...s.sel],X=Ns(s.groups),rt=Oi(s.a,s.job,O[0],X),ut=O.every(dt=>s.a.loops[dt]),nt=O.some(dt=>s.job.shapes[dt]);return`<div class="ncc-card ncc-sel-card">
        <div class="ncc-row"><div class="ncc-row-title">${O.length>1?`${O.length} shapes selected`:ue(Yt(O[0]))}</div><button type="button" class="ncc-link" data-act="unselect">Clear</button></div>
        ${ct("sel",rt,ut)}
        ${nt?'<button type="button" class="ncc-link" data-act="sel-reset">Back to its group\u2019s choice</button>':'<div class="ncc-row-sub">A change here applies to the selected shapes only.</div>'}
      </div>`}function re(){let O=s.job.stock.thickness,X=O?d(O):"";return`<div class="ncc-card ${O?"":"ncc-need"}">
        <div class="ncc-row"><div class="ncc-row-text"><div class="ncc-row-title">Stock thickness</div><div class="ncc-row-sub">${O?"\u201CThrough\u201D cuts go this deep and a little into the spoilboard.":"How thick is the board? Measure it: every \u201Cthrough\u201D cut depends on it."}</div></div>
        <div style="display: flex; align-items: center; gap: 6px"><input class="ncc-input ncc-mono ncc-depth" type="text" data-unit="length" data-min="0" autocomplete="off" spellcheck="false" aria-label="Stock thickness (${s.units})" data-thick value="${X}" placeholder="?"><span class="ncc-unit">${s.units}</span></div></div>
      </div>`}function Dt(){let O=s.a,X=Lc(s.raw),rt=s.info?.units==null||s.info?.units==="unitless",ut=Math.round(s.scale*1e4)/100;return`<div class="ncc-card">
        <div class="ncc-fields">${["X","Y"].map((nt,dt)=>`<div class="ncc-field"><label for="ncc-size${dt}">${nt} (${s.units})</label><input id="ncc-size${dt}" class="ncc-input ncc-mono" type="text" data-unit="length" data-min="0" autocomplete="off" spellcheck="false" data-size="${dt}" value="${d(O.size[dt])}"></div>`).join("")}</div>
        <div class="ncc-row-sub">${ut===100?"As drawn":`Scaled to ${ut}%`}${s.info?.units?` \xB7 the file says ${ue(s.info.units)}`:""}.${ut!==100?' <button type="button" class="ncc-link" data-scale="reset">Back to the drawing\u2019s size</button>':""}</div>
        ${rt&&ut===100&&Math.max(X.w,X.h)<50?`<div class="ncc-hint">${Ze.info}<span>Only ${a(Math.max(X.w,X.h))} across and the file has no unit: it may be in inches. <button type="button" class="ncc-link" data-scale="inch">Make it inches (\xD7 25.4)</button></span></div>`:""}
        ${s.info?.notes?`<div class="ncc-hint">${Ze.info}<span>${ue(s.info.notes)}</span></div>`:""}
      </div>`}function de(){let O=s.slow?`<div class="ncc-hint">${Ze.info}<span>${ue(s.slow)}</span></div>`:"";return s.plan?O+s.plan.warnings.map(X=>`<div class="ncc-hint ${X.kind==="notool"?"bad":""}">${X.kind==="notool"?Ze.warn:Ze.info}<span>${ue(X.text)}</span></div>`).join(""):O}let Ge=null;function ge(){let O=s.job,X=s.plan?.stock||fa(s.a,O),rt=Object.entries(cs).map(([nt,dt])=>`<button class="ncc-pick ncc-mat ${O.material===nt?"sel":""}" type="button" data-material="${nt}"><span class="ncc-mat-swatch" style="background: ${Er[nt]}"></span>${ue(dt.name)}<small>${ue(dt.note)}</small></button>`).join(""),ut=(nt,dt,zt)=>`<div class="ncc-field"><label for="ncc-${nt}">${dt}</label><input id="ncc-${nt}" class="ncc-input ncc-mono" type="text" data-unit="length" data-min="0" autocomplete="off" spellcheck="false" data-stock="${nt}" value="${d(zt)}" ${O.stock.fit&&nt!=="thickness"?"disabled":""}></div>`;return`
      <div class="ncc-col ncc-half">
        <div class="ncc-card ncc-mat-card"><div class="ncc-label">Material</div><div class="ncc-picks ncc-mats">${rt}</div></div>
        <div class="ncc-card">
          ${ve("fit","Size the stock to the drawing",`Adds ${u(O.stock.margin)} on every side`,O.stock.fit)}
          <div class="ncc-fields">${ut("width",`Width X (${s.units})`,X.width)}${ut("depth",`Depth Y (${s.units})`,X.depth)}${ut("thickness",`Thickness Z (${s.units})`,X.thickness)}</div>
        </div>
        <div class="ncc-card">
          ${ve("tabs","Leave tabs to hold the part",O.tabs.enabled?`${a(pe().height)} \xD7 ${u(pe().length)}, so the part stays put until you cut it free`:"The part comes loose at the end",O.tabs.enabled)}
          ${O.tabs.enabled?`<div class="ncc-row"><span class="ncc-row-title" style="font-weight: 500">Number of tabs</span><div class="ncc-stepper"><button type="button" data-tabs="-1" aria-label="Fewer tabs" ${O.tabs.count<=1?"disabled":""}>\u2212</button><span class="ncc-mono">${O.tabs.count}</span><button type="button" data-tabs="1" aria-label="More tabs" ${O.tabs.count>=12?"disabled":""}>+</button></div></div>
          ${Je("height","Tab thickness","Thinner tabs","Thicker tabs")}
          ${Je("length","Tab length","Shorter tabs","Longer tabs")}`:""}
        </div>
      </div>
      <div class="ncc-col ncc-half">
        <div class="ncc-card ncc-zero-card"><div class="ncc-label">Where is zero?</div>${cn(X)}
          <div style="font-size: 14px">X Y zero: <strong>${ue(Ce(O.zero.xy))}</strong> of the stock</div>
          <div class="ncc-seg" role="group" aria-label="Z zero">
            <button type="button" class="${O.zero.z==="top"?"sel":""}" data-z="top">Z0 on top of stock</button>
            <button type="button" class="${O.zero.z==="bed"?"sel":""}" data-z="bed">Z0 on the bed</button>
          </div>
        </div>
      </div>`}let ve=(O,X,rt,ut)=>`<div class="ncc-row"><div class="ncc-row-text"><div class="ncc-row-title">${ue(X)}</div><div class="ncc-row-sub">${ue(rt)}</div></div><button class="ncc-toggle" type="button" role="switch" aria-checked="${ut}" aria-label="${ue(X)}" data-toggle="${O}"></button></div>`;function Ce(O){return{"back-left":"back left corner","back-center":"back edge, middle","back-right":"back right corner","left-center":"left edge, middle",center:"center","right-center":"right edge, middle","front-left":"front left corner","front-center":"front edge, middle","front-right":"front right corner"}[O]}let pe=()=>({...Di(s.job.material),...Object.fromEntries(["height","length"].filter(O=>s.job.tabs[O]!=null).map(O=>[O,s.job.tabs[O]]))}),Ie=()=>s.units==="in"?{min:.508,max:10.16,step:.508,grid:.254}:{min:.5,max:10,step:.5,grid:.1};function Je(O,X,rt,ut){let nt=pe()[O];return`<div class="ncc-row"><span class="ncc-row-title" style="font-weight: 500">${X}</span><div class="ncc-stepper"><button type="button" data-tabsize="${O}" data-by="-1" aria-label="${rt}" ${nt<=Ie().min+1e-6?"disabled":""}>\u2212</button><span class="ncc-mono">${u(nt,s.units==="in"?2:1)}</span><button type="button" data-tabsize="${O}" data-by="1" aria-label="${ut}" ${nt>=Ie().max-1e-6?"disabled":""}>+</button></div></div>`}function cn(O){return`<div class="ncc-zero"><div data-viewer></div></div>
      <div class="ncc-row-sub ncc-mono" style="text-align: center; margin: 0">${a(O.width)} \xD7 ${a(O.depth)} \xD7 ${u(O.thickness)} stock \xB7 tap a point for zero, an arrow to turn the part</div>`}let Re=null;function Ye(){let O=s.plan?.stock||fa(s.a,s.job),X=Af.map(nt=>({key:nt,...Xc(O,{xy:nt,z:"top"})})),rt=getComputedStyle(n).getPropertyValue("--color-accent").trim()||"#4c6ef5",ut=`${s.part?.positions?.length}|${O.width}|${O.depth}|${O.thickness}`;o.keepCamera=Re===ut,o.showZero({stock:O,part:s.part,points:X,selected:s.job.zero.xy,zFace:s.job.zero.z,color:Er[s.job.material],accent:rt}),Re=ut,Ge=null,Tt=null,o.onPick=null,o.onMarker=nt=>{nt!==s.job.zero.xy&&(s.job.zero.xy=nt,De())},o.onAxis=null}function tt(){let O=s.plan;if(!O)return C("Planning\u2026","position: static; flex: 1");let X=O.ops.map(gt=>{let $t=we(gt);return`<div class="ncc-op ${gt.enabled?"":"off"} ${s.focusOp===gt.id?"focus":""}" data-focus="${gt.id}">
        <div class="ncc-op-icon" style="background: color-mix(in srgb, ${Wn[gt.kind]} 16%, transparent); color: ${Wn[gt.kind]}">${Ze[gt.kind]||Ze.pocket}</div>
        <div class="ncc-op-text"><div class="ncc-op-title">${ue(gt.label)}</div><div class="ncc-op-sub ncc-mono">${ue(gt.detail)}</div></div>
        <select class="ncc-select" data-tool="${gt.id}" aria-label="Tool for ${ue(gt.label)}">${$t.map(te=>`<option value="${te.id}" ${te.id===gt.tool.id?"selected":""}>T${hs(te,s.numbering)} \xB7 ${ue(te.name)}</option>`).join("")}</select>
        <button class="ncc-toggle" type="button" role="switch" aria-checked="${gt.enabled}" aria-label="${ue(gt.label)}" data-op="${gt.id}"></button>
      </div>`}).join(""),rt=da(O),ut=new Map;for(let gt of O.ops)gt.enabled&&gt.kind!=="face"&&ut.set(gt.tool.id,(ut.get(gt.tool.id)||0)+1);let nt=[...ut].sort((gt,$t)=>$t[1]-gt[1])[0]?.[0],dt=O.ops.find(gt=>gt.enabled&&gt.tool.id===nt)||O.ops.find(gt=>gt.enabled),zt=dt?.feeds,ne=`<div class="ncc-pair">
          <div class="ncc-card"><div class="ncc-label">Finish</div>
            <div class="ncc-seg" role="group" aria-label="Finish">${Object.entries(Vn).map(([gt,$t])=>`<button type="button" class="${s.job.finish===gt?"sel":""}" data-finish="${gt}">${$t.name}</button>`).join("")}</div>
            <div class="ncc-row-sub">${{fast:"Bigger steps, no finishing pass.",balanced:`Leaves ${u(.2,s.units==="in"?3:1)} on the walls, then a clean finishing pass.`,smooth:"Lighter steps and a finishing pass, for the best walls."}[s.job.finish]}</div>
            ${zt?`<div class="ncc-mono ncc-row-sub" style="line-height: 1.6">${ue(dt.tool.name)}<br>${ue(cs[s.job.material].name)} \xB7 ${zt.rpm.toLocaleString()} RPM<br>${s.units==="in"?`${a(zt.feed,1)} in/min`:`${zt.feed.toLocaleString()} mm/min`} \xB7 ${u(zt.stepdown,s.units==="in"?3:2)} per pass</div>`:""}
          </div>
          <div class="ncc-card"><div class="ncc-label">Tools for this job</div>
            ${rt.map(gt=>`<div class="ncc-row"><span style="min-width: 0"><span class="ncc-mono" style="color: var(--color-accent)">T${hs(gt,s.numbering)}</span> ${ue(gt.name)}</span><span class="ncc-slot ${c(gt)?"":"hand"}">${c(gt)?`Slot ${gt.toolNumber}`:"By hand"}</span></div>`).join("")||'<div class="ncc-row-sub">No operations switched on.</div>'}
            ${rt.some(gt=>!gt.toolNumber)?'<div class="ncc-row-sub">By hand: not in the magazine, so you\u2019ll be asked to load it.</div>':""}
          </div>
        </div>`;return`<div class="ncc-plan">
        <div class="ncc-plan-list" data-keep-scroll="ops"><div class="ncc-ops">${X}</div>${de(!1)}<div class="ncc-plan-pair-in">${ne}</div></div>
        <div class="ncc-card ncc-viewcard ncc-plan-view"><div data-viewer></div></div>
        <div class="ncc-plan-pair">${ne}</div>
      </div>`}function en(){let X=(s.plan?.ops||[]).filter(rt=>rt.enabled&&rt.kind!=="face").flatMap(rt=>{let ut=s.focusOp&&s.focusOp!==rt.id;return rt.kind==="chamfer"?rt.show.map(dt=>({loops:dt.loops,z:dt.z+.05,color:Wn.chamfer,opacity:ut?.2:1,top:dt.z})):{loops:rt.region||(rt.lines||[]).map(dt=>dt.pts)||[],z:rt.kind==="cutout"?rt.zTop+.05:Math.max(rt.zBottom,0)+.05,color:Wn[rt.kind],dashed:rt.kind==="cutout",opacity:ut?.2:1,top:rt.zTop}});o.keepCamera=Ge===s.part?.positions,o.showPart(s.part,X),Ge=s.part?.positions,Tt=null,Re=null,o.onFrame=null,o.onMarker=null,o.onPick=null}function we(O){let X=O.kind==="drill"?["drill"]:O.kind==="face"?["surfacing","flat"]:O.kind==="finish3d"?["ball","flat"]:O.kind==="chamfer"?["vbit","chamfer"]:O.kind==="thread"?["threadmill"]:["flat"],rt=s.tools.filter(ut=>X.includes(ut.kind)&&(O.angle==null||Math.abs(ut.angle/2-O.angle)<=1.5)).sort((ut,nt)=>nt.diameter-ut.diameter);return rt.some(ut=>ut.id===O.tool.id)?rt:[O.tool,...rt]}function V(){let O=s.result,X=O?.plan,rt=X?da(X):[],ut=X?X.ops.filter(nt=>nt.enabled).reduce((nt,dt,zt,ne)=>nt+(zt>0&&ne[zt-1].tool.id!==dt.tool.id?1:0),0):0;return`
      <div class="ncc-card ncc-viewcard ncc-grow">
        <div data-viewer></div>
        <div class="ncc-play" data-playbar>${ft()}</div>
      </div>
      <div class="ncc-col ncc-side">
        <div class="ncc-card ncc-stats">
          <div class="ncc-stat"><b class="ncc-mono">${X?Math.max(1,Math.round(O.seconds/60)):"\u2013"}<span> min</span></b><span>Run time</span></div>
          <div class="ncc-stat"><b class="ncc-mono">${rt.length||"\u2013"}</b><span>Tools</span></div>
          <div class="ncc-stat"><b class="ncc-mono">${X?ut:"\u2013"}</b><span>Tool changes</span></div>
        </div>
        <div class="ncc-card"><div class="ncc-label">Checked</div>${it()}</div>
        ${s.slow?`<div class="ncc-hint">${Ze.info}<span>${ue(s.slow)}</span></div>`:""}
        <div class="ncc-card">
          <div class="ncc-mono ncc-row-sub" style="margin: 0">${ue(I())}${O?` \xB7 ${(O.gcode.split(`
`).length-1).toLocaleString()} lines`:""}</div>
          <button class="ncc-btn muted" type="button" data-act="save" ${O?"":"disabled"}>Save to File Manager</button>
        </div>
      </div>`}let I=()=>`${(s.fileName||"drawing").replace(/\.(dxf|svg|pdf|ai)$/i,"")}.nc`;function it(){let O=s.simChecks;return O?O.items.map(X=>`<div class="ncc-check"><span class="ncc-ck ${X.state}">${X.state==="bad"?Ze.cross:X.state==="info"?"!":Ze.check}</span><span>${ue(X.text)}</span></div>`).join(""):`<div class="ncc-row-sub">${s.result?"Checking\u2026":"Waiting for the toolpaths\u2026"}<span class="ncc-elapsed" data-elapsed></span></div>`}let U={ops:[],moves:null,opOf:null,cum:null,total:0,t:0,i:1,playing:!1,speed:5,hm:null,stamps:[],colors:[],cursor:null,goal:null};function ft(){if(!s.result)return"";let X=s.result.plan.ops.filter(nt=>nt.enabled&&nt.track),rt=U.total||1,ut=X[Math.max(0,U.opIndexAt?.(U.t)??0)];return`<button class="ncc-playbtn" type="button" data-act="play" aria-label="${U.playing?"Pause":"Play"}">${U.playing?Ze.pause:Ze.play}</button>
      <div class="ncc-track">
        <div class="ncc-bar" data-scrub role="slider" aria-label="Position in the program" aria-valuemin="0" aria-valuemax="${Math.round(rt)}" aria-valuenow="${Math.round(U.t)}">
          ${X.map(nt=>`<i style="width: ${(nt.seconds||0)/rt*100}%; background: ${Wn[nt.kind]}"></i>`).join("")}
          <b style="width: ${U.t/rt*100}%"></b><em style="left: ${U.t/rt*100}%"></em>
        </div>
        <div class="ncc-row" style="font-size: 12px; color: var(--color-text-secondary)"><span data-pb="step">${qt(X,ut)}</span><span class="ncc-mono" data-pb="clock">${Cc(U.t)} / ${Cc(rt)}</span></div>
      </div>
      <div class="ncc-seg" style="padding: 3px" role="group" aria-label="Speed">${[[1,"Slow"],[5,"Normal"],[25,"Fast"]].map(([nt,dt])=>`<button type="button" style="padding: 6px 8px" class="${U.speed===nt?"sel":""}" data-speed="${nt}">${dt}</button>`).join("")}</div>`}function Et(){return`<div class="ncc-overlay tr">
      <button class="ncc-chip ${o.paths?.visible!==!1&&s.showPaths?"on":""}" type="button" data-act="paths">Toolpaths</button>
      <button class="ncc-chip ${s.showPart?"on":""}" type="button" data-act="ghost">Part</button>
    </div>`}let Tt=null;function mt(){if(Tt===s.result){yt();return}Tt=s.result,Ge=null,Re=null,o.onMarker=null,o.onPick=null;let O=s.result.plan,X=O.ops.filter(gt=>gt.enabled&&gt.track),rt=Ci.cellFor(O.stock,R()?380*380:520*520);U.ops=X,U.hm=Gp(new Ci(O.stock,rt)),U.colors=O.ops.map(gt=>new le(Wn[gt.kind])),U.stamps=O.ops.map(gt=>Mu(gt.tool,rt));let ut=0;for(let gt of X)ut+=gt.track.length/4;U.moves=new Float32Array(ut*4),U.opOf=new Uint16Array(ut),U.cum=new Float64Array(ut);let nt=0,dt=0,zt=null,ne=s.maxRapid||5e3;for(let gt of X){let $t=O.ops.indexOf(gt);for(let te=0;te<gt.track.length;te+=4,nt++){if(U.moves.set(gt.track.subarray(te,te+4),nt*4),U.opOf[nt]=$t,zt){let Pe=Math.hypot(gt.track[te]-zt[0],gt.track[te+1]-zt[1],gt.track[te+2]-zt[2]);dt+=Pe/(gt.track[te+3]>0?gt.track[te+3]:ne)*60}zt=[gt.track[te],gt.track[te+1],gt.track[te+2]],U.cum[nt]=dt}}U.total=dt,U.opIndexAt=gt=>{let $t=Math.min(ut-1,Pt(U.cum,gt));return X.indexOf(O.ops[U.opOf[$t]])},U.t=0,U.i=1,U.cursor=null,U.toolOp=-1,U.snaps=[],U.goal=null,U.cutT=0,o.showStock(U.hm,Er[O.job.material]||Er.mdf,s.part);{let gt=U.hm,$t=[gt.x0,gt.y0,gt.bottom],te=[gt.x0+(gt.nx-1)*gt.cell,gt.y0+(gt.ny-1)*gt.cell,gt.top];for(let Pe of X){let $e=Pe.tool.diameter/2;for(let je=0;je<Pe.track.length;je+=4)Pe.track[je+3]!==0&&($t[0]=Math.min($t[0],Pe.track[je]-$e),te[0]=Math.max(te[0],Pe.track[je]+$e),$t[1]=Math.min($t[1],Pe.track[je+1]-$e),te[1]=Math.max(te[1],Pe.track[je+1]+$e))}o.frame($t,te)}o.showPaths(X),s.showPaths=s.showPaths??!1,yt(),At(0),U.speed=5,U.rate=Math.max(1,U.total/600/5),o.onFrame=_t,Le(O),U.playing=!1,Vt()}function yt(){o.paths&&(o.paths.visible=!!s.showPaths),o.partGhost&&(o.partGhost.visible=!!s.showPart)}function Pt(O,X){let rt=0,ut=O.length;for(;rt<ut;){let nt=rt+ut>>1;O[nt]<X?rt=nt+1:ut=nt}return rt}let Ht=O=>({x:U.moves[O*4],y:U.moves[O*4+1],z:U.moves[O*4+2],r:U.moves[O*4+3]===0});function Lt(O,X=1/0){let rt=U.hm,ut=U.cum.length,nt=1/0,dt=-1,zt=(gt,$t,te)=>{let Pe=s.result.plan.ops[te].tool.diameter/2/rt.cell+3,$e=Math.floor((Math.min(gt.y,$t.y)-rt.y0)/rt.cell-Pe),je=Math.ceil((Math.max(gt.y,$t.y)-rt.y0)/rt.cell+Pe);nt=Math.min(nt,Math.max(0,$e)),dt=Math.max(dt,Math.min(rt.ny-1,je))},ne=0;for(;U.i<ut&&U.cum[U.i]<=O;){if((++ne&31)===0&&performance.now()>X)return U.cutT=U.cum[U.i-1],[nt,dt,!1];!U.cursor&&(U.opOf[U.i]!==U.opOf[U.i-1]||Math.floor(U.cum[U.i]/U.total*10)>Math.floor(U.cum[U.i-1]/U.total*10))&&Ft();let gt=U.cursor||Ht(U.i-1),$t=Ht(U.i),te=U.opOf[U.i];$t.r||(Su(rt,s.result.plan.ops[te].tool,gt,$t,te),zt(gt,$t,te)),U.cursor=null,U.i++}if(U.i<ut&&O>U.cum[U.i-1]){let gt=U.cursor||Ht(U.i-1),$t=Ht(U.i),te=U.opOf[U.i],Pe=U.cum[U.i-1],$e=(O-Pe)/(U.cum[U.i]-Pe||1),je=Ht(U.i-1),gi={x:je.x+($t.x-je.x)*$e,y:je.y+($t.y-je.y)*$e,z:je.z+($t.z-je.z)*$e};$t.r||(Su(rt,s.result.plan.ops[te].tool,gt,gi,te),zt(gt,gi,te)),U.cursor=gi}return U.cutT=O,[nt,dt,!0]}function At(O){let X=U.cum.length;if(!X)return;let rt=Math.min(X-1,Pt(U.cum,O)),ut=U.opOf[rt];if(ut!==U.toolOp){let gt=s.result.plan.ops[ut];o.setTool(gt.tool,gt.zTop-gt.zBottom),U.toolOp=ut}let nt=Ht(Math.max(0,rt-1)),dt=Ht(rt),zt=rt>0?U.cum[rt-1]:0,ne=rt>0?Math.max(0,Math.min(1,(O-zt)/(U.cum[rt]-zt||1))):1;o.moveTool(nt.x+(dt.x-nt.x)*ne,nt.y+(dt.y-nt.y)*ne,nt.z+(dt.z-nt.z)*ne)}let Gt=0,Qt=0,ae=0,J=[1/0,-1],Ct={drag:12,catchUp:250};function _t(O){let X=Gt?Math.min(.1,(O-Gt)/1e3):0;if(Gt=O,!U.cum||(U.playing&&(U.t=Math.min(U.total,U.t+X*U.speed*U.rate),U.goal=U.t),U.goal==null))return;let[rt,ut,nt]=Lt(U.goal,performance.now()+(U.dragging||U.playing?Ct.drag:Ct.catchUp));J[0]=Math.min(J[0],rt),J[1]=Math.max(J[1],ut),(nt||U.playing||O-ae>250)&&(o.refreshStock(J[0],J[1],U.colors),J[0]=1/0,J[1]=-1,ae=O),nt&&(U.goal=null),U.playing&&(At(U.t),U.t>=U.total?(U.playing=!1,Vt()):O-Qt>200&&(Qt=O,Vt()))}let It=["h","op","sx","sy","wx","wy","gap","deep"];function Ft(){U.snaps.some(O=>O.i===U.i)||U.snaps.push({i:U.i,data:It.map(O=>U.hm[O].slice())})}function bt(O){if(O=Math.max(0,Math.min(U.total,O)),O<(U.cutT??0)){let X=U.snaps.filter(rt=>U.cum[rt.i-1]<=O).sort((rt,ut)=>ut.i-rt.i)[0];X?(It.forEach((rt,ut)=>U.hm[rt].set(X.data[ut])),U.i=X.i):(U.hm.h.fill(U.hm.top),U.hm.op.fill(0),U.hm.sx.fill(0),U.hm.sy.fill(0),U.hm.wx.fill(0),U.hm.wy.fill(0),U.hm.gap.fill(1/0),U.hm.deep.fill(-1/0),U.i=1),U.cursor=null,U.cutT=U.i>1?U.cum[U.i-1]:0,o.refreshStock(0,U.hm.ny-1,U.colors)}U.goal=O,U.t=O,At(O),Vt()}let qt=(O,X)=>X?`Step ${O.indexOf(X)+1} of ${O.length} \xB7 ${ue(X.label)} \xB7 T${hs(X.tool,s.numbering)}`:"";function Vt(){let O=n.querySelector("[data-playbar]");if(!O)return;if(O._result!==s.result||O._total!==U.total||!O.querySelector("[data-scrub]")){O.innerHTML=ft(),O._result=s.result,O._total=U.total;return}let X=s.result.plan.ops.filter($t=>$t.enabled&&$t.track),rt=U.total||1,ut=`${U.t/rt*100}%`,nt=X[Math.max(0,U.opIndexAt?.(U.t)??0)],dt=O.querySelector("[data-scrub]");dt.querySelector("b").style.width=ut,dt.querySelector("em").style.left=ut,dt.setAttribute("aria-valuenow",String(Math.round(U.t)));let zt=($t,te)=>{$t&&$t.innerHTML!==te&&($t.innerHTML=te)};zt(O.querySelector('[data-pb="step"]'),qt(X,nt)),zt(O.querySelector('[data-pb="clock"]'),`${Cc(U.t)} / ${Cc(rt)}`);let ne=O.querySelector('[data-act="play"]'),gt=U.playing?"Pause":"Play";ne.getAttribute("aria-label")!==gt&&(ne.setAttribute("aria-label",gt),ne.innerHTML=U.playing?Ze.pause:Ze.play);for(let $t of O.querySelectorAll("[data-speed]"))$t.classList.toggle("sel",+$t.dataset.speed===U.speed)}function Le(O){setTimeout(()=>{if(s.result?.plan!==O)return;let X=s.result?.collisions||[],rt=[];if(rt.push(X.length?{state:"bad",text:`${X.length} fast move${X.length>1?"s go":" goes"} into the material (${[...new Set(X.map(dt=>O.ops.find(zt=>zt.id===dt.op)?.label))].join(", ")}).`}:{state:"ok",text:"No fast moves through the material"}),s.travel){let dt=O.stock.width<=s.travel.x&&O.stock.depth<=s.travel.y;rt.push(dt?{state:"ok",text:"The stock fits inside your machine\u2019s travel"}:{state:"bad",text:`The stock is bigger than your machine\u2019s travel (${a(s.travel.x)} \xD7 ${u(s.travel.y)}).`})}let ut=da(O);rt.push(ut.every(dt=>dt.fluteLength)?{state:"ok",text:"Every tool is long enough for its depth"}:{state:"info",text:"Some tools have no cutting length in the Tool Library, so their depth isn\u2019t checked."}),O.ops.find(dt=>dt.kind==="cutout"&&dt.enabled)&&rt.push({state:"ok",text:`The cut-out goes ${u(O.job.throughDepth,s.units==="in"?3:1)} into the spoilboard${O.job.tabs.enabled?`, with ${O.job.tabs.count} tabs`:""}`}),O.warnings.some(dt=>dt.kind==="undercut")&&rt.push({state:"info",text:"Some features are on the other side. Cut this side, then turn the part over and make a program for that side. Pins (the Spoilboard Toolbox plugin can set them up) put it back in the same place."}),s.simChecks={ok:!rt.some(dt=>dt.state==="bad"),items:rt},Y()},50)}let Se=O=>{if(!(O<1||O>4||O>s.maxStep+1)){if(O===4&&s.step!==4){U.playing=!1,s.step=4,s.maxStep=4,Y(),A(!0);return}s.step=O,s.maxStep=Math.max(s.maxStep,O),O!==4&&(U.playing=!1),Y()}},De=()=>{s.maxStep=Math.min(s.maxStep,Math.max(s.step,3)),s.result=null,A(!1)};n.addEventListener("click",O=>{let X=O.target.closest("[data-shape]");if(X||O.target.closest("[data-drawing]")){let dt=X?+X.dataset.shape:null;return dt===null?s.sel=new Set:O.shiftKey||O.metaKey||O.ctrlKey?s.sel.has(dt)?s.sel.delete(dt):s.sel.add(dt):s.sel=s.sel.size===1&&s.sel.has(dt)?new Set:new Set([dt]),Y()}let rt=O.target.closest("[data-focus]");if(rt&&!O.target.closest("button, select")){s.focusOp=s.focusOp===rt.dataset.focus?null:rt.dataset.focus,Y();return}let ut=O.target.closest("button, [data-scrub]");if(!ut||ut.disabled)return;let nt=ut.dataset;if(nt.go)return Se(+nt.go);if(nt.material)return s.job.material=nt.material,Object.assign(s.job.tabs,Di(nt.material)),De();if(nt.tabsize){let dt=pe(),zt=Ie();return s.job.tabs[nt.tabsize]=Math.max(zt.min,Math.min(zt.max,Math.round((dt[nt.tabsize]+ +nt.by*zt.step)/zt.grid)*zt.grid)),De()}if(nt.zero)return s.job.zero.xy=nt.zero,De();if(nt.z)return s.job.zero.z=nt.z,De();if(nt.finish)return s.job.finish=nt.finish,De();if(nt.tabs)return s.job.tabs.count=Math.max(1,Math.min(12,s.job.tabs.count+ +nt.tabs)),De();if(nt.toggle==="fit"){let dt=s.plan?.stock;return s.job.stock.fit=!s.job.stock.fit,!s.job.stock.fit&&dt&&Object.assign(s.job.stock,{width:dt.width,depth:dt.depth,thickness:dt.thickness}),De()}if(nt.scale==="reset")return E(1);if(nt.scale==="inch")return E(us.INCH);if(nt.act==="unselect")return s.sel=new Set,Y();if(nt.act==="sel-reset"){for(let dt of s.sel)delete s.job.shapes[dt];return De()}if(nt.toggle==="tabs")return s.job.tabs.enabled=!s.job.tabs.enabled,De();if(nt.op)return s.job.disabled[nt.op]=!s.job.disabled[nt.op],De();if(nt.speed)return U.speed=+nt.speed,Vt();if(nt.act==="play")return U.t>=U.total&&bt(0),U.playing=!U.playing,Gt=0,Vt();if(nt.act==="paths"){s.showPaths=!s.showPaths,yt(),ut.classList.toggle("on",s.showPaths);return}if(nt.act==="ghost"){s.showPart=!s.showPart,yt(),ut.classList.toggle("on",s.showPart);return}if(nt.act==="close")return Ps();if(nt.recentOpen)return H(nt.recentOpen);if(nt.forget)return Cu(nt.forget,s.recent).then(dt=>{s.recent=dt,Y()});if(nt.act==="load")return Tr(ut);if(nt.act==="save")return As(ut)}),n.addEventListener("pointerdown",O=>{if(!O.target.closest("[data-scrub]")||!U.cum)return;let rt=U.playing;U.playing=!1,U.dragging=!0;let ut=ne=>{let gt=n.querySelector("[data-scrub]").getBoundingClientRect();gt.width>0&&bt((ne-gt.left)/gt.width*U.total)};ut(O.clientX);let nt=null,dt=ne=>{nt===null&&requestAnimationFrame(()=>{let gt=nt;nt=null,ut(gt)}),nt=ne.clientX},zt=()=>{U.dragging=!1,window.removeEventListener("pointermove",dt),window.removeEventListener("pointerup",zt),U.playing=rt&&U.t<U.total,Gt=0,Vt()};window.addEventListener("pointermove",dt),window.addEventListener("pointerup",zt)}),n.addEventListener("change",O=>{let X=O.target;if(X.matches("input[data-unit]")&&(X.defaultValue=X.value),X.matches("[data-file]"))return b(X.files[0]);if(X.matches("[data-recent]"))return X.value&&H(X.value);if(X.dataset.tool)return s.job.toolOverride[X.dataset.tool]=+X.value||X.value,De();if(X.dataset.size){let ut=+X.dataset.size,nt=g(X);if(!(nt&&s.a?.size[ut]>0))return Y();let dt=nt/s.a.size[ut];return Math.abs(dt-1)<1e-9?Y():E(s.scale*dt)}if(X.matches("[data-thick]")){let ut=g(X);return ut&&(s.job.stock.thickness=ut),De()}let rt=X.dataset.cut??X.dataset.through??X.dataset.depth;if(rt!==void 0){let ut=rt==="sel"?[...s.sel].map(nt=>s.job.shapes[nt]||={}):[s.job.groups[rt]||={}];if(rt==="sel"){let nt=Ns(s.groups);[...s.sel].forEach((dt,zt)=>{let ne=Oi(s.a,{...s.job,shapes:{}},dt,nt);ut[zt].cut===void 0&&Object.assign(ut[zt],{cut:ne.cut,depth:ne.depth})})}else{let nt=s.groups.find(zt=>zt.key===rt),dt=Oi(s.a,{...s.job,groups:{},shapes:{}},nt.idx[0],null);ut[0].cut===void 0&&Object.assign(ut[0],{cut:dt.cut,depth:dt.depth})}for(let nt of ut)if(X.dataset.cut!==void 0)nt.cut=X.value,nt.depth=X.value==="pocket"||X.value==="online"?nt.depth??s.job.depths[X.value]:X.value==="off"?nt.depth:null;else if(X.dataset.through!==void 0)nt.depth=X.checked?null:Math.max(.1,Math.min(s.job.depths[nt.cut]||s.job.depths.pocket,(s.job.stock.thickness||6)-.5));else{let dt=g(X);dt&&(nt.depth=dt)}return De()}if(X.dataset.stock){let ut=g(X);return ut&&(s.job.stock[X.dataset.stock]=ut),De()}}),dm(n,{imperial:f});let Mn=O=>{O?.isConnected&&O.matches("input[data-unit]")&&O.value!==O.defaultValue&&O.dispatchEvent(new Event("change",{bubbles:!0}))};n.addEventListener("focusout",O=>Mn(O.target)),n.addEventListener("keydown",O=>{O.key==="Enter"&&Mn(O.target)}),n.addEventListener("dragover",O=>{let X=O.target.closest("[data-drop]");X&&(O.preventDefault(),X.classList.add("over"))}),n.addEventListener("dragleave",O=>{let X=O.target.closest("[data-drop]");X&&X.classList.remove("over")}),n.addEventListener("drop",O=>{O.target.closest("[data-drop]")&&(O.preventDefault(),b(O.dataTransfer.files[0]))});function is(O){s.toast=O,Y(),setTimeout(()=>{s.toast===O&&(s.toast="",Y())},2600)}async function Tr(O){O.disabled=!0;try{let X=await i.post("/api/gcode-files/load-temp",{filename:I(),content:s.result.gcode});if(!X.ok)throw new Error(`ncSender said ${X.status}`);Ps()}catch(X){O.disabled=!1,is(`Couldn\u2019t load the program: ${X.message}`)}}async function As(O){O.disabled=!0;try{let X=await ss(I()),rt=await i.post("/api/gcode-files/file/save",{path:X,content:s.result.gcode});if(!rt.ok)throw new Error(`save failed (${rt.status})`);is(`Saved to File Manager: ${X}`)}catch(X){is(`Couldn\u2019t save: ${X.message}`)}O.disabled=!1}async function ss(O){let X=O.replace(/\.nc$/,""),rt=new Set,ut=nt=>{for(let dt of nt||[])dt.type==="folder"?ut(dt.children):rt.add(dt.path)};ut((await i.get("/api/gcode-files"))?.tree);for(let nt=1;nt<1e3;nt++){let dt=`ncCut2D/${nt<2?O:`${X} (${nt}).nc`}`;if(!rt.has(dt))return dt}throw new Error("too many saved copies")}function Ps(){U.playing=!1,window.postMessage({type:"close-plugin-dialog"},"*")}Y(),window.__nccut2d={S:s,PLAY:U,viewer:o,seek:O=>bt(O)}}var sM,ue,Cc,tn,Ze,gm=fe(()=>{qo();Sc();Qp();nm();om();cm();pm();sM=["Drawing","Stock & Zero","Operations","Preview & Load"],ue=n=>String(n??"").replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t]),Cc=n=>{let t=Math.max(0,Math.round(n));return`${Math.floor(t/60)}:${String(t%60).padStart(2,"0")}`},tn=(n,t=18,e="")=>`<svg width="${t}" height="${t}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" ${e}>${n}</svg>`,Ze={close:tn('<path d="M6 6l12 12M18 6L6 18"/>'),next:tn('<path d="M9 6l6 6-6 6"/>',16,'stroke-width="2.4"'),part:tn('<path d="M12 2l9 5v10l-9 5-9-5V7z"/><path d="M12 22V12M21 7l-9 5-9-5"/>',20),upload:tn('<path d="M12 16V4M7 9l5-5 5 5M4 20h16"/>',28),info:tn('<circle cx="12" cy="12" r="9"/><path d="M12 8h.01M11 12h1v5h1"/>'),warn:tn('<path d="M12 3l10 18H2z"/><path d="M12 10v4M12 17h.01"/>'),check:tn('<path d="M5 12l5 5 9-10"/>',12,'stroke-width="3.2"'),cross:tn('<path d="M6 6l12 12M18 6L6 18"/>',12,'stroke-width="3.2"'),play:'<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M7 4l13 8-13 8z"/></svg>',pause:'<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><rect x="6" y="5" width="4" height="14" rx="1"/><rect x="14" y="5" width="4" height="14" rx="1"/></svg>',load:tn('<path d="M12 4v11M7 10l5 5 5-5M5 20h14"/>',16,'stroke-width="2.4"'),face:tn('<path d="M3 9h18M3 15h18"/>'),pocket:tn('<rect x="4" y="6" width="16" height="12" rx="2"/>'),corners:tn('<path d="M4 10V6a2 2 0 012-2h4M20 14v4a2 2 0 01-2 2h-4"/>'),hole:tn('<circle cx="8" cy="12" r="3"/><circle cx="16" cy="12" r="3"/>'),drill:tn('<path d="M12 3v14M8 13l4 8 4-8"/>'),step:tn('<path d="M3 18h6v-6h6V6h6"/>'),cutout:tn('<rect x="3" y="5" width="18" height="14" rx="2" stroke-dasharray="3 2.5"/>'),rough3d:tn('<path d="M3 19h4v-4h3v-4h4v4h3v4h4"/>'),finish3d:tn('<path d="M3 18c3 0 4-9 9-9s6 9 9 9"/>'),thread:tn('<path d="M8 4h8M8 8l8-2M8 12l8-2M8 16l8-2M8 20h8M8 4v16M16 4v16"/>'),chamfer:tn('<path d="M4 20V9l5-5h11v16z"/><path d="M9 4v5H4" stroke-dasharray="2 2"/>'),rest3d:tn('<path d="M3 19h4v-4h3v-4h4v4h3v4h4"/><circle cx="12" cy="17" r="1.5"/>')}});Sc();function wu(){let n=null,t={async init(){return!0},async load({shapes:e}){return n=ua(e),{size:n.size,count:n.shapes.length}},async plan({tools:e,job:i,limits:s,paths:o,gcodeOptions:c,timing:a}){if(!n)throw new Error("No drawing open.");let u=If(n,e,i,s),f=_u(u);o&&Bp(u);let d=o?Vp(u,a):0,g=o?zp(u,c):"",m=o?Xp(u,Ci.cellFor(u.stock,300*300)).collisions.map(y=>({op:y.op,at:y.at})):[];for(let y of u.ops){if(!y.moves)continue;let v=new Float32Array(y.moves.length*4);y.moves.forEach((b,x)=>{v[x*4]=b.x,v[x*4+1]=b.y,v[x*4+2]=b.z,v[x*4+3]=b.r?0:b.f}),y.track=v,delete y.moves}return{plan:u,gcode:g,seconds:d,collisions:m,part:f}}};return async function(i){let s=t[i.type];if(!s)throw new Error(`unknown request ${i.type}`);return s(i)}}var xm="0.0.1-mw246pdk";if(typeof document>"u"){let n=wu();self.onmessage=async({data:t})=>{try{let e=await n(t),i=e?.part?[e.part.positions.buffer,e.part.indices.buffer]:[];self.postMessage({id:t.id,ok:!0,result:e},i)}catch(e){self.postMessage({id:t.id,ok:!1,error:e.message||String(e)})}}}else{let n=window.NcCut2D=window.NcCut2D||{};n.build!==xm&&n.engine&&(n.engine.then(i=>i.worker?.terminate(),()=>{}),n.engine=null),n.build=xm,n.mount=async(i,s)=>{let{mountApp:o}=await Promise.resolve().then(()=>(gm(),mm));try{o(i,s,await t(s))}catch(c){i.textContent=`ncCut2D could not start: ${c.message||c}`}};let t=i=>n.engine||=e(i);async function e(i){let s=null;try{s=new Worker(URL.createObjectURL(new Blob([n.source||""],{type:"text/javascript"})))}catch{s=null}if(s){let c=0,a=new Map;s.onmessage=({data:d})=>{let g=a.get(d.id);g&&(a.delete(d.id),d.ok?g.resolve(d.result):g.reject(new Error(d.error)))};let u=(d,g={},m=[])=>new Promise((y,v)=>{let b=++c;a.set(b,{resolve:y,reject:v}),s.postMessage({...g,id:b,type:d},m)});if(await Promise.race([u("init").then(()=>!0),new Promise(d=>setTimeout(()=>d(!1),5e3))]))return u.worker=s,u;s.terminate()}let o=wu();return await o({type:"init"}),(c,a={})=>o({...a,type:c})}}})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/

(()=>{var Bm=Object.create;var Fc=Object.defineProperty;var km=Object.getOwnPropertyDescriptor;var zm=Object.getOwnPropertyNames;var Vm=Object.getPrototypeOf,Hm=Object.prototype.hasOwnProperty;var pe=(n,t,e)=>()=>{if(e)throw e[0];try{return n&&(t=n(n=0)),t}catch(i){throw e=[i],i}};var Vu=(n,t)=>()=>{try{return t||n((t={exports:{}}).exports,t),t.exports}catch(e){throw t=0,e}},Hu=(n,t)=>{for(var e in t)Fc(n,e,{get:t[e],enumerable:!0})},Gm=(n,t,e,i)=>{if(t&&typeof t=="object"||typeof t=="function")for(let s of zm(t))!Hm.call(n,s)&&s!==e&&Fc(n,s,{get:()=>t[s],enumerable:!(i=km(t,s))||i.enumerable});return n};var Gu=(n,t,e)=>(e=n!=null?Bm(Vm(n)):{},Gm(t||!n||!n.__esModule?Fc(e,"default",{value:n,enumerable:!0}):e,n));function sa(n,t,e=.01){if(!(n>e))return 1;let i=2*Math.acos(Math.max(-1,Math.min(1,1-e/n)));return Math.max(2,Math.min(2e3,Math.ceil(Math.abs(t)/i)))}function Us(n,t,e,i,s,a=!0){let l=s-i;a&&l<=0&&(l+=Math.PI*2),!a&&l>=0&&(l-=Math.PI*2);let o=sa(e,l);return Array.from({length:o+1},(h,f)=>{let d=i+l*f/o;return[n+e*Math.cos(d),t+e*Math.sin(d)]})}function oa(n,t,e,i,s,a=0,l=Math.PI*2){let o=Math.hypot(e,i),h=Math.atan2(i,e),f=o*s,d=l-a;d<=0&&(d+=Math.PI*2);let g=sa(o,d),p=Math.cos(h),x=Math.sin(h);return Array.from({length:g+1},(v,b)=>{let y=a+d*b/g,_=o*Math.cos(y),A=f*Math.sin(y);return[n+_*p-A*x,t+_*x+A*p]})}function Di(n,t,e,i,s=[n],a=.01,l=0){let o=Xu(t,n,i),h=Xu(e,n,i);if(l>16||Math.max(o,h)<=a)return s.push(i),s;let f=(y,_)=>[(y[0]+_[0])/2,(y[1]+_[1])/2],d=f(n,t),g=f(t,e),p=f(e,i),x=f(d,g),v=f(g,p),b=f(x,v);return Di(n,d,x,b,s,a,l+1),Di(b,v,p,i,s,a,l+1),s}function Xu(n,t,e){let i=e[0]-t[0],s=e[1]-t[1],a=Math.hypot(i,s);return a<1e-12?vi(n,t):Math.abs((n[0]-t[0])*s-(n[1]-t[1])*i)/a}function Wu(n,t,e,i,s,a,l){if(!t||!e||n[0]===l[0]&&n[1]===l[1])return[n,l];t=Math.abs(t),e=Math.abs(e);let o=i*Math.PI/180,h=Math.cos(o),f=Math.sin(o),d=(n[0]-l[0])/2,g=(n[1]-l[1])/2,p=h*d+f*g,x=-f*d+h*g,v=p*p/(t*t)+x*x/(e*e);v>1&&(t*=Math.sqrt(v),e*=Math.sqrt(v));let b=t*t*e*e-t*t*x*x-e*e*p*p,y=Math.sqrt(Math.max(0,b/(t*t*x*x+e*e*p*p)));!!s==!!a&&(y=-y);let _=y*t*x/e,A=-y*e*p/t,T=h*_-f*A+(n[0]+l[0])/2,S=f*_+h*A+(n[1]+l[1])/2,I=(F,U,G,V)=>Math.atan2(F*V-U*G,F*G+U*V),E=I(1,0,(p-_)/t,(x-A)/e),C=I((p-_)/t,(x-A)/e,(-p-_)/t,(-x-A)/e);!a&&C>0&&(C-=Math.PI*2),a&&C<0&&(C+=Math.PI*2);let w=sa(Math.max(t,e),C),N=[];for(let F=0;F<=w;F++){let U=E+C*F/w,G=t*Math.cos(U),V=e*Math.sin(U);N.push([h*G-f*V+T,f*G+h*V+S])}return N[0]=n,N[w]=l,N}function Bc(n){let t=1/0,e=1/0,i=-1/0,s=-1/0;for(let a of n)for(let[l,o]of a.pts)l<t&&(t=l),o<e&&(e=o),l>i&&(i=l),o>s&&(s=o);return Number.isFinite(t)?{x0:t,y0:e,x1:i,y1:s,w:i-t,h:s-e}:{x0:0,y0:0,x1:0,y1:0,w:0,h:0}}function hs(n,t,e=1e-6){let i=[];for(let s of n)(!i.length||vi(i[i.length-1],s)>e)&&i.push(s);return t&&i.length>2&&vi(i[0],i[i.length-1])>e&&i.push(i[0].slice()),i}function qu(n,t=.05){let e=[],i=[];for(let o of n){if(o.closed||o.pts.length<2){e.push(o);continue}if(vi(o.pts[0],o.pts[o.pts.length-1])<=t&&o.pts.length>2){e.push({...o,closed:!0,pts:hs(o.pts.slice(0,-1).concat([o.pts[0]]),!0)});continue}i.push({...o,pts:o.pts.slice()})}let s=0,a=new Map;for(let o of i){let h=o.color+"|"+(o.layer||"");a.has(h)||a.set(h,[]),a.get(h).push(o)}let l=[];for(let o of a.values()){let h=new Array(o.length).fill(!1);for(let f=0;f<o.length;f++){if(h[f])continue;h[f]=!0;let d=o[f],g=!0;for(;g;){g=!1;let p=d.pts[0],x=d.pts[d.pts.length-1];for(let v=0;v<o.length;v++){if(h[v])continue;let b=o[v].pts,y=b[0],_=b[b.length-1];if(vi(x,y)<=t)d.pts.push(...b.slice(1));else if(vi(x,_)<=t)d.pts.push(...b.slice(0,-1).reverse());else if(vi(p,_)<=t)d.pts.unshift(...b.slice(0,-1));else if(vi(p,y)<=t)d.pts.unshift(...b.slice(1).reverse());else continue;h[v]=!0,s++,g=!0;break}}d.pts.length>2&&vi(d.pts[0],d.pts[d.pts.length-1])<=t&&(d.pts[d.pts.length-1]=d.pts[0].slice(),d.closed=!0),l.push(d)}}return{shapes:e.concat(l),joined:s}}var vi,ra,Uc,Yu,Oi,Lr,$u,Nr=pe(()=>{vi=(n,t)=>Math.hypot(t[0]-n[0],t[1]-n[1]);ra=(n,t,e)=>{let i=Us(n,t,e,0,Math.PI*2,!0);return i[i.length-1]=i[0].slice(),i};Uc=(n,t,e,i)=>Di(n,[n[0]+2/3*(t[0]-n[0]),n[1]+2/3*(t[1]-n[1])],[e[0]+2/3*(t[0]-e[0]),e[1]+2/3*(t[1]-e[1])],e,i);Yu=[1,0,0,1,0,0],Oi=(n,t)=>[n[0]*t[0]+n[2]*t[1],n[1]*t[0]+n[3]*t[1],n[0]*t[2]+n[2]*t[3],n[1]*t[2]+n[3]*t[3],n[0]*t[4]+n[2]*t[5]+n[4],n[1]*t[4]+n[3]*t[5]+n[5]],Lr=(n,t)=>[n[0]*t[0]+n[2]*t[1]+n[4],n[1]*t[0]+n[3]*t[1]+n[5]];$u=(n,t)=>n.map(e=>({...e,pts:e.pts.map(i=>Lr(t,i))}))});function kc(n){let t=[];for(let x of String(n||"").matchAll(Xm))t.push(x[1]||+x[2]);let e=[],i=0,s="",a=[0,0],l=[0,0],o=null,h=null,f="",d=()=>{let x=t[i++];if(typeof x!="number")throw new Error("bad path data");return x},g=()=>{let x=t[i];if(typeof x=="number"&&(x===0||x===1))return i++,x;if(typeof x=="number"){let v=String(x);return t.splice(i,1,+v[0],+v.slice(1)),i++,+v[0]}throw new Error("bad arc flag")},p=x=>{o&&o.length>1&&e.push({pts:o,closed:!1}),o=[x],l=x};for(;i<t.length;){if(typeof t[i]=="string")s=t[i++];else if(!s)throw new Error("path must start with M");let x=s===s.toLowerCase(),v=s.toUpperCase(),b=(y,_)=>x?[a[0]+y,a[1]+_]:[y,_];switch(v){case"M":{let y=b(d(),d());p(y),a=y,s=x?"l":"L",h=null;break}case"L":{let y=b(d(),d());o.push(y),a=y,h=null;break}case"H":{let y=d(),_=[x?a[0]+y:y,a[1]];o.push(_),a=_,h=null;break}case"V":{let y=d(),_=[a[0],x?a[1]+y:y];o.push(_),a=_,h=null;break}case"C":{let y=b(d(),d()),_=b(d(),d()),A=b(d(),d());Di(a,y,_,A,o),h=_,a=A;break}case"S":{let y=h&&"CS".includes(f)?[2*a[0]-h[0],2*a[1]-h[1]]:a,_=b(d(),d()),A=b(d(),d());Di(a,y,_,A,o),h=_,a=A;break}case"Q":{let y=b(d(),d()),_=b(d(),d());Uc(a,y,_,o),h=y,a=_;break}case"T":{let y=h&&"QT".includes(f)?[2*a[0]-h[0],2*a[1]-h[1]]:a,_=b(d(),d());Uc(a,y,_,o),h=y,a=_;break}case"A":{let y=d(),_=d(),A=d(),T=g(),S=g(),I=b(d(),d());o.push(...Wu(a,y,_,A,T,S,I).slice(1)),a=I,h=null;break}case"Z":{o&&o.length>1&&(o.push(l.slice()),e.push({pts:o,closed:!0})),o=[l],a=l,h=null;break}default:throw new Error(`unknown path command ${s}`)}f=v,v==="Z"&&(s="")}return o&&o.length>1&&e.push({pts:o,closed:!1}),e}var Xm,Zu=pe(()=>{Nr();Xm=/([MmLlHhVvCcSsQqTtAaZz])|(-?(?:\d+\.?\d*|\.\d+)(?:[eE][-+]?\d+)?)/g});function Ju(n,t){return n<=9?t:n>=10&&n<=59?parseFloat(t):n>=60&&n<=99?parseInt(t):n>=100&&n<=109?t:n>=110&&n<=149?parseFloat(t):n>=160&&n<=179?parseInt(t):n>=210&&n<=239?parseFloat(t):n>=270&&n<=289?parseInt(t):n>=290&&n<=299?Wm(t):n>=300&&n<=369?t:n>=370&&n<=389?parseInt(t):n>=390&&n<=399?t:n>=400&&n<=409?parseInt(t):n>=410&&n<=419?t:n>=420&&n<=429?parseInt(t):n>=430&&n<=439?t:n>=440&&n<=459?parseInt(t):n>=460&&n<=469?parseFloat(t):n>=470&&n<=481||n===999||n>=1e3&&n<=1009?t:n>=1010&&n<=1059?parseFloat(t):n>=1060&&n<=1071?parseInt(t):(console.log("WARNING: Group code does not have a defined type: %j",{code:n,value:t}),t)}function Wm(n){if(n==="0")return!1;if(n==="1")return!0;throw TypeError("String '"+n+"' cannot be cast to Boolean type")}var Dr,ju=pe(()=>{Dr=class{constructor(t){this._pointer=0,this._eof=!1,this._data=t}next(){if(!this.hasNext())throw this._eof?new Error("Cannot call 'next' after EOF group has been read"):new Error("Unexpected end of input: EOF group not read before end of file. Ended on code "+this._data[this._pointer]);let t={code:parseInt(this._data[this._pointer])};return this._pointer++,t.value=Ju(t.code,this._data[this._pointer].trim()),this._pointer++,t.code===0&&t.value==="EOF"&&(this._eof=!0),this.lastReadGroup=t,t}peek(){if(!this.hasNext())throw this._eof?new Error("Cannot call 'next' after EOF group has been read"):new Error("Unexpected end of input: EOF group not read before end of file. Ended on code "+this._data[this._pointer]);let t={code:parseInt(this._data[this._pointer])};return t.value=Ju(t.code,this._data[this._pointer+1].trim()),t}rewind(t=1){this._pointer=this._pointer-t*2}hasNext(){return!(this._eof||this._pointer>this._data.length-2)}isEOF(){return this._eof}}});var aa,zc=pe(()=>{aa=[0,16711680,16776960,65280,65535,255,16711935,16777215,8421504,12632256,16711680,16744319,13369344,13395558,10027008,10046540,8323072,8339263,4980736,4990502,16727808,16752511,13382400,13401958,10036736,10051404,8331008,8343359,4985600,4992806,16744192,16760703,13395456,13408614,10046464,10056268,8339200,8347455,4990464,4995366,16760576,16768895,13408512,13415014,10056192,10061132,8347392,8351551,4995328,4997670,16776960,16777087,13421568,13421670,10000384,10000460,8355584,8355647,5000192,5000230,12582656,14679935,10079232,11717734,7510016,8755276,6258432,7307071,3755008,4344870,8388352,12582783,6736896,10079334,5019648,7510092,4161280,6258495,2509824,3755046,4194048,10485631,3394560,8375398,2529280,6264908,2064128,5209919,1264640,3099686,65280,8388479,52224,6736998,38912,5019724,32512,4161343,19456,2509862,65343,8388511,52275,6737023,38950,5019743,32543,4161359,19475,2509871,65407,8388543,52326,6737049,38988,5019762,32575,4161375,19494,2509881,65471,8388575,52377,6737074,39026,5019781,32607,4161391,19513,2509890,65535,8388607,52428,6737100,39064,5019800,32639,4161407,19532,2509900,49151,8380415,39372,6730444,29336,5014936,24447,4157311,14668,2507340,32767,8372223,26316,6724044,19608,5010072,16255,4153215,9804,2505036,16383,8364031,13260,6717388,9880,5005208,8063,4149119,4940,2502476,255,8355839,204,6710988,152,5000344,127,4145023,76,2500172,4129023,10452991,3342540,8349388,2490520,6245528,2031743,5193599,1245260,3089996,8323327,12550143,6684876,10053324,4980888,7490712,4128895,6242175,2490444,3745356,12517631,14647295,10027212,11691724,7471256,8735896,6226047,7290751,3735628,4335180,16711935,16744447,13369548,13395660,9961624,9981080,8323199,8339327,4980812,4990540,16711871,16744415,13369497,13395634,9961586,9981061,8323167,8339311,4980793,4990530,16711807,16744383,13369446,13395609,9961548,9981042,8323135,8339295,4980774,4990521,16711743,16744351,13369395,13395583,9961510,9981023,8323103,8339279,4980755,4990511,3355443,5987163,8684676,11382189,14079702,16777215]});function Ym(n){return aa[n]}function oe(n){let t={};n.rewind();let e=n.next(),i=e.code;if(t.x=e.value,i+=10,e=n.next(),e.code!=i)throw new Error("Expected code for point value to be "+i+" but got "+e.code+".");return t.y=e.value,i+=10,e=n.next(),e.code!=i?(n.rewind(),t):(t.z=e.value,t)}function Pe(n,t,e){switch(t.code){case 0:n.type=t.value;break;case 5:n.handle=t.value;break;case 6:n.lineType=t.value;break;case 8:n.layer=t.value;break;case 48:n.lineTypeScale=t.value;break;case 60:n.visible=t.value===0;break;case 62:n.colorIndex=t.value,n.color=Ym(Math.abs(t.value));break;case 67:n.inPaperSpace=t.value!==0;break;case 100:break;case 101:for(;t.code!=0;)t=e.next();e.rewind();break;case 330:n.ownerHandle=t.value;break;case 347:n.materialObjectHandle=t.value;break;case 370:n.lineweight=t.value;break;case 420:n.color=t.value;break;case 1e3:n.extendedData=n.extendedData||{},n.extendedData.customStrings=n.extendedData.customStrings||[],n.extendedData.customStrings.push(t.value);break;case 1001:n.extendedData=n.extendedData||{},n.extendedData.applicationName=t.value;break;default:return!1}return!0}var dn=pe(()=>{zc()});function $m(n,t){var e=[],i=!1,s=!1,a=4;for(let o=0;o<=a;o++){for(var l={};!n.isEOF()&&!(t.code===0||s);){switch(t.code){case 10:case 11:case 12:case 13:if(i){s=!0;continue}l.x=t.value,i=!0;break;case 20:case 21:case 22:case 23:l.y=t.value;break;case 30:case 31:case 32:case 33:l.z=t.value;break;default:return e}t=n.next()}e.push(l),i=!1,s=!1}return n.rewind(),e}var Or,Ku=pe(()=>{dn();Or=class{constructor(){this.ForEntityName="3DFACE"}parseEntity(t,e){let i={type:e.value,vertices:[]};for(e=t.next();!t.isEOF()&&e.code!==0;){switch(e.code){case 70:i.shape=(e.value&1)===1,i.hasContinuousLinetypePattern=(e.value&128)===128;break;case 10:i.vertices=$m(t,e),e=t.lastReadGroup;break;default:Pe(i,e,t);break}e=t.next()}return i}}});var Fr,Qu=pe(()=>{dn();Fr=class{constructor(){this.ForEntityName="ARC"}parseEntity(t,e){let i={type:e.value};for(e=t.next();!t.isEOF()&&e.code!==0;){switch(e.code){case 10:i.center=oe(t);break;case 40:i.radius=e.value;break;case 50:i.startAngle=Math.PI/180*e.value;break;case 51:i.endAngle=Math.PI/180*e.value,i.angleLength=i.endAngle-i.startAngle;break;case 210:i.extrusionDirectionX=e.value;break;case 220:i.extrusionDirectionY=e.value;break;case 230:i.extrusionDirectionZ=e.value;break;default:Pe(i,e,t);break}e=t.next()}return i}}});var Ur,tf=pe(()=>{dn();Ur=class{constructor(){this.ForEntityName="ATTDEF"}parseEntity(t,e){var i={type:e.value,scale:1,textStyle:"STANDARD"};for(e=t.next();!t.isEOF()&&e.code!==0;){switch(e.code){case 1:i.text=e.value;break;case 2:i.tag=e.value;break;case 3:i.prompt=e.value;break;case 7:i.textStyle=e.value;break;case 10:i.startPoint=oe(t);break;case 11:i.endPoint=oe(t);break;case 39:i.thickness=e.value;break;case 40:i.textHeight=e.value;break;case 41:i.scale=e.value;break;case 50:i.rotation=e.value;break;case 51:i.obliqueAngle=e.value;break;case 70:i.invisible=!!(e.value&1),i.constant=!!(e.value&2),i.verificationRequired=!!(e.value&4),i.preset=!!(e.value&8);break;case 71:i.backwards=!!(e.value&2),i.mirrored=!!(e.value&4);break;case 72:i.horizontalJustification=e.value;break;case 73:i.fieldLength=e.value;break;case 74:i.verticalJustification=e.value;break;case 100:break;case 210:i.extrusionDirectionX=e.value;break;case 220:i.extrusionDirectionY=e.value;break;case 230:i.extrusionDirectionZ=e.value;break;default:Pe(i,e,t);break}e=t.next()}return i}}});var Br,ef=pe(()=>{dn();Br=class{constructor(){this.ForEntityName="CIRCLE"}parseEntity(t,e){let i={type:e.value};for(e=t.next();!t.isEOF()&&e.code!==0;){switch(e.code){case 10:i.center=oe(t);break;case 40:i.radius=e.value;break;case 50:i.startAngle=Math.PI/180*e.value;break;case 51:let s=Math.PI/180*e.value;s<i.startAngle?i.angleLength=s+2*Math.PI-i.startAngle:i.angleLength=s-i.startAngle,i.endAngle=s;break;default:Pe(i,e,t);break}e=t.next()}return i}}});var kr,nf=pe(()=>{dn();kr=class{constructor(){this.ForEntityName="DIMENSION"}parseEntity(t,e){let i={type:e.value};for(e=t.next();!t.isEOF()&&e.code!==0;){switch(e.code){case 2:i.block=e.value;break;case 10:i.anchorPoint=oe(t);break;case 11:i.middleOfText=oe(t);break;case 12:i.insertionPoint=oe(t);break;case 13:i.linearOrAngularPoint1=oe(t);break;case 14:i.linearOrAngularPoint2=oe(t);break;case 15:i.diameterOrRadiusPoint=oe(t);break;case 16:i.arcPoint=oe(t);break;case 70:i.dimensionType=e.value;break;case 71:i.attachmentPoint=e.value;break;case 42:i.actualMeasurement=e.value;break;case 1:i.text=e.value;break;case 50:i.angle=e.value;break;default:Pe(i,e,t);break}e=t.next()}return i}}});var zr,sf=pe(()=>{dn();zr=class{constructor(){this.ForEntityName="ELLIPSE"}parseEntity(t,e){let i={type:e.value};for(e=t.next();!t.isEOF()&&e.code!==0;){switch(e.code){case 10:i.center=oe(t);break;case 11:i.majorAxisEndPoint=oe(t);break;case 40:i.axisRatio=e.value;break;case 41:i.startAngle=e.value;break;case 42:i.endAngle=e.value;break;case 2:i.name=e.value;break;default:Pe(i,e,t);break}e=t.next()}return i}}});var Vr,rf=pe(()=>{dn();Vr=class{constructor(){this.ForEntityName="INSERT"}parseEntity(t,e){let i={type:e.value};for(e=t.next();!t.isEOF()&&e.code!==0;){switch(e.code){case 2:i.name=e.value;break;case 41:i.xScale=e.value;break;case 42:i.yScale=e.value;break;case 43:i.zScale=e.value;break;case 10:i.position=oe(t);break;case 50:i.rotation=e.value;break;case 70:i.columnCount=e.value;break;case 71:i.rowCount=e.value;break;case 44:i.columnSpacing=e.value;break;case 45:i.rowSpacing=e.value;break;case 210:i.extrusionDirection=oe(t);break;default:Pe(i,e,t);break}e=t.next()}return i}}});var Hr,of=pe(()=>{dn();Hr=class{constructor(){this.ForEntityName="LINE"}parseEntity(t,e){let i={type:e.value,vertices:[]};for(e=t.next();!t.isEOF()&&e.code!==0;){switch(e.code){case 10:i.vertices.unshift(oe(t));break;case 11:i.vertices.push(oe(t));break;case 210:i.extrusionDirection=oe(t);break;case 100:break;default:Pe(i,e,t);break}e=t.next()}return i}}});function qm(n,t){if(!n||n<=0)throw Error("n must be greater than 0 verticies");let e=[],i=!1,s=!1,a=t.lastReadGroup;for(let l=0;l<n;l++){let o={};for(;!t.isEOF()&&!(a.code===0||s);){switch(a.code){case 10:if(i){s=!0;continue}o.x=a.value,i=!0;break;case 20:o.y=a.value;break;case 30:o.z=a.value;break;case 40:o.startWidth=a.value;break;case 41:o.endWidth=a.value;break;case 42:a.value!=0&&(o.bulge=a.value);break;default:return t.rewind(),i&&e.push(o),t.rewind(),e}a=t.next()}e.push(o),i=!1,s=!1}return t.rewind(),e}var Gr,af=pe(()=>{dn();Gr=class{constructor(){this.ForEntityName="LWPOLYLINE"}parseEntity(t,e){let i={type:e.value,vertices:[]},s=0;for(e=t.next();!t.isEOF()&&e.code!==0;){switch(e.code){case 38:i.elevation=e.value;break;case 39:i.depth=e.value;break;case 70:i.shape=(e.value&1)===1,i.hasContinuousLinetypePattern=(e.value&128)===128;break;case 90:s=e.value;break;case 10:i.vertices=qm(s,t);break;case 43:e.value!==0&&(i.width=e.value);break;case 210:i.extrusionDirectionX=e.value;break;case 220:i.extrusionDirectionY=e.value;break;case 230:i.extrusionDirectionZ=e.value;break;default:Pe(i,e,t);break}e=t.next()}return i}}});var Xr,lf=pe(()=>{dn();Xr=class{constructor(){this.ForEntityName="MTEXT"}parseEntity(t,e){let i={type:e.value};for(e=t.next();!t.isEOF()&&e.code!==0;){switch(e.code){case 3:i.text?i.text+=e.value:i.text=e.value;break;case 1:i.text?i.text+=e.value:i.text=e.value;break;case 10:i.position=oe(t);break;case 11:i.directionVector=oe(t);break;case 40:i.height=e.value;break;case 41:i.width=e.value;break;case 50:i.rotation=e.value;break;case 71:i.attachmentPoint=e.value;break;case 72:i.drawingDirection=e.value;break;default:Pe(i,e,t);break}e=t.next()}return i}}});var Wr,cf=pe(()=>{dn();Wr=class{constructor(){this.ForEntityName="POINT"}parseEntity(t,e){let s={type:e.value};for(e=t.next();!t.isEOF()&&e.code!==0;){switch(e.code){case 10:s.position=oe(t);break;case 39:s.thickness=e.value;break;case 210:s.extrusionDirection=oe(t);break;case 100:break;default:Pe(s,e,t);break}e=t.next()}return s}}});var Yr,hf=pe(()=>{dn();Yr=class{constructor(){this.ForEntityName="VERTEX"}parseEntity(t,e){var i={type:e.value};for(e=t.next();!t.isEOF()&&e.code!==0;){switch(e.code){case 10:i.x=e.value;break;case 20:i.y=e.value;break;case 30:i.z=e.value;break;case 40:break;case 41:break;case 42:e.value!=0&&(i.bulge=e.value);break;case 70:i.curveFittingVertex=(e.value&1)!==0,i.curveFitTangent=(e.value&2)!==0,i.splineVertex=(e.value&8)!==0,i.splineControlPoint=(e.value&16)!==0,i.threeDPolylineVertex=(e.value&32)!==0,i.threeDPolylineMesh=(e.value&64)!==0,i.polyfaceMeshVertex=(e.value&128)!==0;break;case 50:break;case 71:i.faceA=e.value;break;case 72:i.faceB=e.value;break;case 73:i.faceC=e.value;break;case 74:i.faceD=e.value;break;default:Pe(i,e,t);break}e=t.next()}return i}}});function Zm(n,t){let e=new Yr,i=[];for(;!n.isEOF();)if(t.code===0){if(t.value==="VERTEX")i.push(e.parseEntity(n,t)),t=n.lastReadGroup;else if(t.value==="SEQEND"){Jm(n,t);break}}return i}function Jm(n,t){let e={type:t.value};for(t=n.next();!n.isEOF()&&t.code!=0;)Pe(e,t,n),t=n.next();return e}var $r,uf=pe(()=>{dn();hf();$r=class{constructor(){this.ForEntityName="POLYLINE"}parseEntity(t,e){var i={type:e.value,vertices:[]};for(e=t.next();!t.isEOF()&&e.code!==0;){switch(e.code){case 10:break;case 20:break;case 30:break;case 39:i.thickness=e.value;break;case 40:break;case 41:break;case 70:i.shape=(e.value&1)!==0,i.includesCurveFitVertices=(e.value&2)!==0,i.includesSplineFitVertices=(e.value&4)!==0,i.is3dPolyline=(e.value&8)!==0,i.is3dPolygonMesh=(e.value&16)!==0,i.is3dPolygonMeshClosed=(e.value&32)!==0,i.isPolyfaceMesh=(e.value&64)!==0,i.hasContinuousLinetypePattern=(e.value&128)!==0;break;case 71:break;case 72:break;case 73:break;case 74:break;case 75:break;case 210:i.extrusionDirection=oe(t);break;default:Pe(i,e,t);break}e=t.next()}return i.vertices=Zm(t,e),i}}});var qr,ff=pe(()=>{dn();qr=class{constructor(){this.ForEntityName="SOLID"}parseEntity(t,e){let i={type:e.value,points:[]};for(e=t.next();!t.isEOF()&&e.code!==0;){switch(e.code){case 10:i.points[0]=oe(t);break;case 11:i.points[1]=oe(t);break;case 12:i.points[2]=oe(t);break;case 13:i.points[3]=oe(t);break;case 210:i.extrusionDirection=oe(t);break;default:Pe(i,e,t);break}e=t.next()}return i}}});var Zr,df=pe(()=>{dn();Zr=class{constructor(){this.ForEntityName="SPLINE"}parseEntity(t,e){let i={type:e.value};for(e=t.next();!t.isEOF()&&e.code!==0;){switch(e.code){case 10:i.controlPoints||(i.controlPoints=[]),i.controlPoints.push(oe(t));break;case 11:i.fitPoints||(i.fitPoints=[]),i.fitPoints.push(oe(t));break;case 12:i.startTangent=oe(t);break;case 13:i.endTangent=oe(t);break;case 40:i.knotValues||(i.knotValues=[]),i.knotValues.push(e.value);break;case 70:(e.value&1)!=0&&(i.closed=!0),(e.value&2)!=0&&(i.periodic=!0),(e.value&4)!=0&&(i.rational=!0),(e.value&8)!=0&&(i.planar=!0),(e.value&16)!=0&&(i.planar=!0,i.linear=!0);break;case 71:i.degreeOfSplineCurve=e.value;break;case 72:i.numberOfKnots=e.value;break;case 73:i.numberOfControlPoints=e.value;break;case 74:i.numberOfFitPoints=e.value;break;case 210:i.normalVector=oe(t);break;default:Pe(i,e,t);break}e=t.next()}return i}}});var Jr,pf=pe(()=>{dn();Jr=class{constructor(){this.ForEntityName="TEXT"}parseEntity(t,e){let i={type:e.value};for(e=t.next();!t.isEOF()&&e.code!==0;){switch(e.code){case 10:i.startPoint=oe(t);break;case 11:i.endPoint=oe(t);break;case 40:i.textHeight=e.value;break;case 41:i.xScale=e.value;break;case 50:i.rotation=e.value;break;case 1:i.text=e.value;break;case 72:i.halign=e.value;break;case 73:i.valign=e.value;break;default:Pe(i,e,t);break}e=t.next()}return i}}});var gf=Vu((mf,la)=>{(function(n,t){"use strict";typeof define=="function"&&define.amd?define(t):typeof la=="object"&&la.exports?la.exports=t():n.log=t()})(mf,function(){"use strict";var n=function(){},t="undefined",e=typeof window!==t&&typeof window.navigator!==t&&/Trident\/|MSIE /.test(window.navigator.userAgent),i=["trace","debug","info","warn","error"],s={},a=null;function l(v,b){var y=v[b];if(typeof y.bind=="function")return y.bind(v);try{return Function.prototype.bind.call(y,v)}catch{return function(){return Function.prototype.apply.apply(y,[v,arguments])}}}function o(){console.log&&(console.log.apply?console.log.apply(console,arguments):Function.prototype.apply.apply(console.log,[console,arguments])),console.trace&&console.trace()}function h(v){return v==="debug"&&(v="log"),typeof console===t?!1:v==="trace"&&e?o:console[v]!==void 0?l(console,v):console.log!==void 0?l(console,"log"):n}function f(){for(var v=this.getLevel(),b=0;b<i.length;b++){var y=i[b];this[y]=b<v?n:this.methodFactory(y,v,this.name)}if(this.log=this.debug,typeof console===t&&v<this.levels.SILENT)return"No console available for logging"}function d(v){return function(){typeof console!==t&&(f.call(this),this[v].apply(this,arguments))}}function g(v,b,y){return h(v)||d.apply(this,arguments)}function p(v,b){var y=this,_,A,T,S="loglevel";typeof v=="string"?S+=":"+v:typeof v=="symbol"&&(S=void 0);function I(F){var U=(i[F]||"silent").toUpperCase();if(!(typeof window===t||!S)){try{window.localStorage[S]=U;return}catch{}try{window.document.cookie=encodeURIComponent(S)+"="+U+";"}catch{}}}function E(){var F;if(!(typeof window===t||!S)){try{F=window.localStorage[S]}catch{}if(typeof F===t)try{var U=window.document.cookie,G=encodeURIComponent(S),V=U.indexOf(G+"=");V!==-1&&(F=/^([^;]+)/.exec(U.slice(V+G.length+1))[1])}catch{}return y.levels[F]===void 0&&(F=void 0),F}}function C(){if(!(typeof window===t||!S)){try{window.localStorage.removeItem(S)}catch{}try{window.document.cookie=encodeURIComponent(S)+"=; expires=Thu, 01 Jan 1970 00:00:00 UTC"}catch{}}}function w(F){var U=F;if(typeof U=="string"&&y.levels[U.toUpperCase()]!==void 0&&(U=y.levels[U.toUpperCase()]),typeof U=="number"&&U>=0&&U<=y.levels.SILENT)return U;throw new TypeError("log.setLevel() called with invalid level: "+F)}y.name=v,y.levels={TRACE:0,DEBUG:1,INFO:2,WARN:3,ERROR:4,SILENT:5},y.methodFactory=b||g,y.getLevel=function(){return T??A??_},y.setLevel=function(F,U){return T=w(F),U!==!1&&I(T),f.call(y)},y.setDefaultLevel=function(F){A=w(F),E()||y.setLevel(F,!1)},y.resetLevel=function(){T=null,C(),f.call(y)},y.enableAll=function(F){y.setLevel(y.levels.TRACE,F)},y.disableAll=function(F){y.setLevel(y.levels.SILENT,F)},y.rebuild=function(){if(a!==y&&(_=w(a.getLevel())),f.call(y),a===y)for(var F in s)s[F].rebuild()},_=w(a?a.getLevel():"WARN");var N=E();N!=null&&(T=w(N)),f.call(y)}a=new p,a.getLogger=function(b){if(typeof b!="symbol"&&typeof b!="string"||b==="")throw new TypeError("You must supply a name when creating a logger.");var y=s[b];return y||(y=s[b]=new p(b,a.methodFactory)),y};var x=typeof window!==t?window.log:void 0;return a.noConflict=function(){return typeof window!==t&&window.log===a&&(window.log=x),a},a.getLoggers=function(){return s},a.default=a,a})});function jm(n){n.registerEntityHandler(Or),n.registerEntityHandler(Fr),n.registerEntityHandler(Ur),n.registerEntityHandler(Br),n.registerEntityHandler(kr),n.registerEntityHandler(zr),n.registerEntityHandler(Vr),n.registerEntityHandler(Hr),n.registerEntityHandler(Gr),n.registerEntityHandler(Xr),n.registerEntityHandler(Wr),n.registerEntityHandler($r),n.registerEntityHandler(qr),n.registerEntityHandler(Zr),n.registerEntityHandler(Jr)}function li(n,t,e){return n.code===t&&n.value===e}function us(n){we.default.debug("unhandled group "+xf(n))}function xf(n){return n.code+":"+n.value}function Km(n){return aa[n]}var we,Bs,Vc=pe(()=>{ju();zc();Ku();Qu();tf();ef();nf();sf();rf();of();af();lf();cf();uf();ff();df();pf();we=Gu(gf());we.default.setLevel("error");Bs=class{constructor(){this._entityHandlers={},jm(this)}parse(t){return typeof t=="string"?this._parse(t):(console.error("Cannot read dxf source of type `"+typeof t),null)}registerEntityHandler(t){let e=new t;this._entityHandlers[e.ForEntityName]=e}parseSync(t){return this.parse(t)}parseStream(t){let e="",i=this;return new Promise((s,a)=>{t.on("data",l=>{e+=l}),t.on("end",()=>{try{s(i._parse(e))}catch(l){a(l)}}),t.on("error",l=>{a(l)})})}_parse(t){let e={},i=0,s=t.split(/\r\n|\r|\n/g),a=new Dr(s);if(!a.hasNext())throw Error("Empty file");let l=this,o;function h(){for(o=a.next();!a.isEOF();)if(o.code===0&&o.value==="SECTION"){if(o=a.next(),o.code!==2){console.error("Unexpected code %s after 0:SECTION",xf(o)),o=a.next();continue}o.value==="HEADER"?(we.default.debug("> HEADER"),e.header=f(),we.default.debug("<")):o.value==="BLOCKS"?(we.default.debug("> BLOCKS"),e.blocks=d(),we.default.debug("<")):o.value==="ENTITIES"?(we.default.debug("> ENTITIES"),e.entities=T(!1),we.default.debug("<")):o.value==="TABLES"?(we.default.debug("> TABLES"),e.tables=p(),we.default.debug("<")):o.value==="EOF"?we.default.debug("EOF"):we.default.warn("Skipping section '%s'",o.value)}else o=a.next()}function f(){let E=null,C=null,w={};for(o=a.next();;){if(li(o,0,"ENDSEC")){E&&(w[E]=C);break}else o.code===9?(E&&(w[E]=C),E=o.value):o.code===10?C={x:o.value}:o.code===20?C.y=o.value:o.code===30?C.z=o.value:C=o.value;o=a.next()}return o=a.next(),w}function d(){let E={};for(o=a.next();o.value!=="EOF"&&!li(o,0,"ENDSEC");)if(li(o,0,"BLOCK")){we.default.debug("block {");let C=g();we.default.debug("}"),I(C),C.name?E[C.name]=C:we.default.error('block with handle "'+C.handle+'" is missing a name.')}else us(o),o=a.next();return E}function g(){let E={};for(o=a.next();o.value!=="EOF";){switch(o.code){case 1:E.xrefPath=o.value,o=a.next();break;case 2:E.name=o.value,o=a.next();break;case 3:E.name2=o.value,o=a.next();break;case 5:E.handle=o.value,o=a.next();break;case 8:E.layer=o.value,o=a.next();break;case 10:E.position=S(o),o=a.next();break;case 67:E.paperSpace=!!(o.value&&o.value==1),o=a.next();break;case 70:o.value!=0&&(E.type=o.value),o=a.next();break;case 100:o=a.next();break;case 330:E.ownerHandle=o.value,o=a.next();break;case 0:if(o.value=="ENDBLK")break;E.entities=T(!0);break;default:us(o),o=a.next()}if(li(o,0,"ENDBLK")){o=a.next();break}}return E}function p(){let E={};for(o=a.next();o.value!=="EOF"&&!li(o,0,"ENDSEC");)li(o,0,"TABLE")?(o=a.next(),A[o.value]?(we.default.debug(o.value+" Table {"),E[A[o.value].tableName]=v(o),we.default.debug("}")):we.default.debug("Unhandled Table "+o.value)):o=a.next();return o=a.next(),E}let x="ENDTAB";function v(E){let C=A[E.value],w={},N=0;for(o=a.next();!li(o,0,x);)switch(o.code){case 5:w.handle=o.value,o=a.next();break;case 330:w.ownerHandle=o.value,o=a.next();break;case 100:o.value==="AcDbSymbolTable"||us(o),o=a.next();break;case 70:N=o.value,o=a.next();break;case 0:o.value===C.dxfSymbolName?w[C.tableRecordsProperty]=C.parseTableRecords():(us(o),o=a.next());break;default:us(o),o=a.next()}let F=w[C.tableRecordsProperty];if(F){let U=(()=>{if(F.constructor===Array)return F.length;if(typeof F=="object")return Object.keys(F).length})();N!==U&&we.default.warn("Parsed "+U+" "+C.dxfSymbolName+"'s but expected "+N)}return o=a.next(),w}function b(){let E=[],C={};for(we.default.debug("ViewPort {"),o=a.next();!li(o,0,x);)switch(o.code){case 2:C.name=o.value,o=a.next();break;case 10:C.lowerLeftCorner=S(o),o=a.next();break;case 11:C.upperRightCorner=S(o),o=a.next();break;case 12:C.center=S(o),o=a.next();break;case 13:C.snapBasePoint=S(o),o=a.next();break;case 14:C.snapSpacing=S(o),o=a.next();break;case 15:C.gridSpacing=S(o),o=a.next();break;case 16:C.viewDirectionFromTarget=S(o),o=a.next();break;case 17:C.viewTarget=S(o),o=a.next();break;case 42:C.lensLength=o.value,o=a.next();break;case 43:C.frontClippingPlane=o.value,o=a.next();break;case 44:C.backClippingPlane=o.value,o=a.next();break;case 45:C.viewHeight=o.value,o=a.next();break;case 50:C.snapRotationAngle=o.value,o=a.next();break;case 51:C.viewTwistAngle=o.value,o=a.next();break;case 79:C.orthographicType=o.value,o=a.next();break;case 110:C.ucsOrigin=S(o),o=a.next();break;case 111:C.ucsXAxis=S(o),o=a.next();break;case 112:C.ucsYAxis=S(o),o=a.next();break;case 110:C.ucsOrigin=S(o),o=a.next();break;case 281:C.renderMode=o.value,o=a.next();break;case 281:C.defaultLightingType=o.value,o=a.next();break;case 292:C.defaultLightingOn=o.value,o=a.next();break;case 330:C.ownerHandle=o.value,o=a.next();break;case 63:case 421:case 431:C.ambientColor=o.value,o=a.next();break;case 0:o.value==="VPORT"&&(we.default.debug("}"),E.push(C),we.default.debug("ViewPort {"),C={},o=a.next());break;default:us(o),o=a.next();break}return we.default.debug("}"),E.push(C),E}function y(){let E={},C={},w=0,N;for(we.default.debug("LType {"),o=a.next();!li(o,0,"ENDTAB");)switch(o.code){case 2:C.name=o.value,N=o.value,o=a.next();break;case 3:C.description=o.value,o=a.next();break;case 73:w=o.value,w>0&&(C.pattern=[]),o=a.next();break;case 40:C.patternLength=o.value,o=a.next();break;case 49:C.pattern.push(o.value),o=a.next();break;case 0:we.default.debug("}"),w>0&&w!==C.pattern.length&&we.default.warn("lengths do not match on LTYPE pattern"),E[N]=C,C={},we.default.debug("LType {"),o=a.next();break;default:o=a.next()}return we.default.debug("}"),E[N]=C,E}function _(){let E={},C={},w;for(we.default.debug("Layer {"),o=a.next();!li(o,0,"ENDTAB");)switch(o.code){case 2:C.name=o.value,w=o.value,o=a.next();break;case 62:C.visible=o.value>=0,C.colorIndex=Math.abs(o.value),C.color=Km(C.colorIndex),o=a.next();break;case 70:C.frozen=(o.value&1)!=0||(o.value&2)!=0,o=a.next();break;case 0:o.value==="LAYER"&&(we.default.debug("}"),E[w]=C,we.default.debug("Layer {"),C={},w=void 0,o=a.next());break;default:us(o),o=a.next();break}return we.default.debug("}"),E[w]=C,E}let A={VPORT:{tableRecordsProperty:"viewPorts",tableName:"viewPort",dxfSymbolName:"VPORT",parseTableRecords:b},LTYPE:{tableRecordsProperty:"lineTypes",tableName:"lineType",dxfSymbolName:"LTYPE",parseTableRecords:y},LAYER:{tableRecordsProperty:"layers",tableName:"layer",dxfSymbolName:"LAYER",parseTableRecords:_}};function T(E){let C=[],w=E?"ENDBLK":"ENDSEC";for(E||(o=a.next());;)if(o.code===0){if(o.value===w)break;let N=l._entityHandlers[o.value];if(N!=null){we.default.debug(o.value+" {");let F=N.parseEntity(a,o);o=a.lastReadGroup,we.default.debug("}"),I(F),C.push(F)}else{we.default.warn("Unhandled entity "+o.value),o=a.next();continue}}else o=a.next();return w=="ENDSEC"&&(o=a.next()),C}function S(E){let C={},w=E.code;if(C.x=E.value,w+=10,E=a.next(),E.code!=w)throw new Error("Expected code for point value to be "+w+" but got "+E.code+".");return C.y=E.value,w+=10,E=a.next(),E.code!=w?(a.rewind(),C):(C.z=E.value,C)}function I(E){if(!E)throw new TypeError("entity cannot be undefined or null");E.handle||(E.handle=i++)}return h(),e}}});var yf,_f=pe(()=>{Vc();Vc();yf=Bs});function Hc(n){let t;try{t=new yf().parseSync(n)}catch(b){throw new Error(`This DXF could not be read (${b.message||b}). Save it again as ASCII DXF.`)}if(!t)throw new Error("This DXF could not be read. Save it again as ASCII DXF.");let e=Number(t.header?.$INSUNITS??0),i=Qm[e]??1,s=t.tables?.layer?.layers||{},a=[],l={},o=b=>{l[b]=(l[b]||0)+1},h=(b,y)=>{let _=b.colorIndex;if(b.color!==void 0&&_!==0&&_!==256)return vf(b.color);if(_===0&&y)return y;let A=s[b.layer];return A&&A.color!==void 0?vf(A.color):y||"#000000"},f=(b,y,_,A,T)=>{if(b.length<2)return;let S=hs(b.map(I=>Lr(A,I)),y);S.length<2||a.push({pts:S,closed:y&&S.length>2,color:T,layer:_.layer||"0"})},d=b=>(b.extrusionDirectionZ??b.extrusionDirection?.z??1)<0?[-1,0,0,1,0,0]:Yu;function g(b,y,_){let A=Math.hypot(y.x-b.x,y.y-b.y);if(A<1e-12)return[];let T=Math.abs(_),S=A*(1+T*T)/(4*T),I=(b.x+y.x)/2,E=(b.y+y.y)/2,C=Math.sign(_)*(S-T*A/2),w=-(y.y-b.y)/A,N=(y.x-b.x)/A,F=I+w*C,U=E+N*C,G=Math.atan2(b.y-U,b.x-F),V=Math.atan2(y.y-U,y.x-F);return Us(F,U,S,G,V,_>0).slice(1)}function p(b,y,_){let A=(b.vertices||[]).filter(E=>Number.isFinite(E.x)&&Number.isFinite(E.y));if(A.length<2)return;let T=!!b.shape,S=[[A[0].x,A[0].y]],I=T?A.length:A.length-1;for(let E=0;E<I;E++){let C=A[E],w=A[(E+1)%A.length];C.bulge?S.push(...g(C,w,C.bulge)):S.push([w.x,w.y])}f(S,T,b,y,_)}function x(b,y,_){let A=(b.controlPoints||[]).map(E=>[E.x,E.y]),T=b.knotValues||[],S=b.degreeOfSplineCurve||3;if(A.length>S&&T.length===A.length+S+1){let E=T[S],C=T[A.length],w=0;for(let U=1;U<A.length;U++)w+=Math.hypot(A[U][0]-A[U-1][0],A[U][1]-A[U-1][1]);let N=Math.max(A.length*8,Math.min(4e3,Math.ceil(w/.2))),F=[];for(let U=0;U<=N;U++)F.push(e0(S,A,T,E+(C-E)*U/N));return f(F,!!b.closed,b,y,_)}let I=(b.fitPoints||[]).map(E=>[E.x,E.y]);I.length>1&&f(I,!!b.closed,b,y,_)}function v(b,y,_,A){if(!(A>8))for(let T of b||[]){if(T.inPaperSpace||T.visible===!1)continue;let S=s[T.layer];if(S&&(S.visible===!1||S.frozen))continue;let I=h(T,_),E=Oi(y,d(T));switch(T.type){case"LINE":T.vertices?.length>=2&&f(T.vertices.map(C=>[C.x,C.y]),!1,T,y,I);break;case"LWPOLYLINE":case"POLYLINE":if(T.is3dPolygonMesh||T.isPolyfaceMesh){o("mesh");break}p(T,E,I);break;case"CIRCLE":f(ra(T.center.x,T.center.y,T.radius),!0,T,E,I);break;case"ARC":f(Us(T.center.x,T.center.y,T.radius,T.startAngle,T.endAngle,!0),!1,T,E,I);break;case"ELLIPSE":{let C=T.startAngle===void 0||Math.abs((T.endAngle??0)-(T.startAngle??0)-Math.PI*2)<1e-6||T.startAngle===0&&Math.abs(T.endAngle-Math.PI*2)<1e-6,w=oa(T.center.x,T.center.y,T.majorAxisEndPoint.x,T.majorAxisEndPoint.y,T.axisRatio,T.startAngle??0,T.endAngle??Math.PI*2);f(w,C,T,E,I);break}case"SPLINE":x(T,y,I);break;case"SOLID":{let C=(T.points||[]).filter(Boolean);if(C.length>=3){let w=C.length===4?[C[0],C[1],C[3],C[2]]:C;f(w.map(N=>[N.x,N.y]).concat([[w[0].x,w[0].y]]),!0,T,E,I)}break}case"INSERT":{let C=t.blocks?.[T.name];if(!C){o("missing block");break}let w=(T.rotation||0)*Math.PI/180,N=Math.cos(w),F=Math.sin(w),U=T.xScale??1,G=T.yScale??1,V=C.position||{x:0,y:0},k=Math.max(1,T.columnCount||1),q=Math.max(1,T.rowCount||1);for(let Z=0;Z<q;Z++)for(let B=0;B<k;B++){let K=(T.position?.x||0)+B*(T.columnSpacing||0)*N-Z*(T.rowSpacing||0)*F,j=(T.position?.y||0)+B*(T.columnSpacing||0)*F+Z*(T.rowSpacing||0)*N,st=Oi(Oi(y,[N*U,F*U,-F*G,N*G,K,j]),[1,0,0,1,-V.x,-V.y]);v(C.entities,st,I,A+1)}break}case"TEXT":case"MTEXT":case"ATTDEF":o("text");break;case"DIMENSION":o("dimension");break;case"POINT":break;default:o(T.type.toLowerCase())}}}return v(t.entities,[i,0,0,i,0,0],null,0),{shapes:a,units:t0[e]??"mm",skipped:l}}function e0(n,t,e,i){let s=n;for(;s<t.length-1&&i>=e[s+1];)s++;let a=[];for(let l=0;l<=n;l++)a.push(t[l+s-n].slice());for(let l=1;l<=n;l++)for(let o=n;o>=l;o--){let h=o+s-n,f=e[h+n-l+1]-e[h],d=f===0?0:(i-e[h])/f;a[o]=[(1-d)*a[o-1][0]+d*a[o][0],(1-d)*a[o-1][1]+d*a[o][1]]}return a[n]}var Qm,t0,vf,bf=pe(()=>{_f();Nr();Qm={0:1,1:25.4,2:304.8,4:1,5:10,6:1e3,8:254e-7,9:.0254,10:914.4,13:.001,14:100},t0={0:"mm (no units set)",1:"in",2:"ft",4:"mm",5:"cm",6:"m",8:"\xB5in",9:"mil",10:"yd",13:"\xB5m",14:"dm"},vf=n=>"#"+(n>>>0&16777215).toString(16).padStart(6,"0")});async function Gc(n,t){let e=n instanceof Uint8Array?n:new Uint8Array(n),i=-1;for(let a=0;a<Math.min(e.length-4,1024)&&i<0;a++)r0(e.subarray(a))&&(i=a);if(i<0)throw new Error(n0);e=e.slice();let s=await t.getDocument({data:e,isEvalSupported:!1,disableFontFace:!0,useSystemFonts:!1,verbosity:0}).promise;try{let a=await s.getPage(1),l=await a.getOperatorList({annotationMode:t.AnnotationMode.DISABLE}),o=await s.getOptionalContentConfig().catch(()=>null);return{...o0(a,l,t.OPS,o),units:"pt",pages:s.numPages}}finally{await s.destroy()}}function o0(n,{fnArray:t,argsArray:e},i,s){let a=[];for(let k in i)a[i[k]]=k;let l=n.getViewport({scale:1}),o=Oi([jr,0,0,-jr,0,l.height*jr],l.transform),h=l.width*jr,f=l.height*jr,d=[],g={},p=k=>{g[k]=(g[k]||0)+1},x={ctm:o,stroke:"#000000",fill:"#000000"},v=[],b=[],y=[],_=null,A=[0,0],T=[0,0],S=!1,I=()=>{for(let k=b.length-1;k>=0;k--)if(b[k]?.layer!==void 0)return b[k].layer;return""},E=()=>b.some(k=>k?.hidden),C=(k,q)=>Lr(x.ctm,[k,q]),w=(k,q)=>{_={pts:[C(k,q)],closed:!1},y.push(_),A=T=[k,q]},N=()=>{_||w(A[0],A[1])},F=()=>{_&&(_.closed=!0,_=null,A=T)};function U(k,q){let Z=0;for(let B of k)switch(a[B]){case"moveTo":w(q[Z],q[Z+1]),Z+=2;break;case"lineTo":N(),A=[q[Z],q[Z+1]],_.pts.push(C(...A)),Z+=2;break;case"curveTo":case"curveTo2":case"curveTo3":{N();let K,j,st;a[B]==="curveTo"?(K=[q[Z],q[Z+1]],j=[q[Z+2],q[Z+3]],st=[q[Z+4],q[Z+5]],Z+=6):a[B]==="curveTo2"?(K=A,j=[q[Z],q[Z+1]],st=[q[Z+2],q[Z+3]],Z+=4):(K=[q[Z],q[Z+1]],st=[q[Z+2],q[Z+3]],j=st,Z+=4),Di(_.pts[_.pts.length-1],C(...K),C(...j),C(...st),_.pts),A=st;break}case"closePath":F();break;case"rectangle":{let[K,j,st,X]=q.slice(Z,Z+4);Z+=4,w(K,j),_.pts.push(C(K+st,j),C(K+st,j+X),C(K,j+X)),F();break}}}let G=k=>{if(!k.filled||k.stroked||k.color!=="#ffffff"||k.pts.length!==5)return!1;let q=k.pts.map(bt=>bt[0]),Z=k.pts.map(bt=>bt[1]),B=Math.min(...q),K=Math.max(...q),j=Math.min(...Z),st=Math.max(...Z),X=.1;return B>X||j>X||K<h-X||st<f-X?!1:k.pts.every(bt=>(Math.abs(bt[0]-B)<X||Math.abs(bt[0]-K)<X)&&(Math.abs(bt[1]-j)<X||Math.abs(bt[1]-st)<X))};function V([k,q,Z]){Z&&F();let B=E();for(let K of y){let j=K.closed||q,st=hs(K.pts,j);if(st.length<2)continue;let X={pts:st,closed:j&&st.length>2,color:k?x.stroke:x.fill,layer:I(),filled:q};if(B){p("hidden");continue}if(G({...X,stroked:k})){p("background");continue}d.push(X)}y=[],_=null}for(let k=0;k<t.length;k++){let q=a[t[k]],Z=e[k];if(Sf[q]){V(Sf[q]);continue}if(i0.includes(q)){S=!0;continue}if(s0.includes(q)){p("image");continue}switch(q){case"constructPath":U(Z[0],Z[1]);break;case"endPath":y=[],_=null;break;case"save":v.push({...x});break;case"restore":v.length&&(x=v.pop());break;case"transform":x.ctm=Oi(x.ctm,Z);break;case"paintFormXObjectBegin":v.push({...x}),Z[0]&&(x.ctm=Oi(x.ctm,Z[0]));break;case"paintFormXObjectEnd":v.length&&(x=v.pop());break;case"setStrokeRGBColor":x.stroke=Mf(Z);break;case"setFillRGBColor":x.fill=Mf(Z);break;case"setStrokeColorN":case"setFillColorN":break;case"beginText":S=!1;break;case"endText":S&&p("text"),S=!1;break;case"shadingFill":p("gradient");break;case"beginMarkedContentProps":{let B=Z[0]==="OC"?Z[1]:null;if(!B){b.push(null);break}let K=B.type==="OCG"?s?.getGroup(B.id):null;b.push({layer:K?.name??"",hidden:s?!s.isVisible(B):!1});break}case"beginMarkedContent":b.push(null);break;case"endMarkedContent":b.pop();break}}return{shapes:d,skipped:g}}var jr,Mf,n0,Sf,i0,s0,r0,wf=pe(()=>{Nr();jr=25.4/72,Mf=n=>"#"+(n[0]<<16|n[1]<<8|n[2]).toString(16).padStart(6,"0"),n0='This .ai file was saved without PDF content. In Illustrator, save it again with "Create PDF Compatible File" on, or export a PDF or SVG.',Sf={stroke:[!0,!1,!1],closeStroke:[!0,!1,!0],fill:[!1,!0,!1],eoFill:[!1,!0,!1],fillStroke:[!0,!0,!1],eoFillStroke:[!0,!0,!1],closeFillStroke:[!0,!0,!0],closeEOFillStroke:[!0,!0,!0]},i0=["showText","showSpacedText","nextLineShowText","nextLineSetSpacingShowText"],s0=["paintImageXObject","paintInlineImageXObject","paintInlineImageXObjectGroup","paintImageXObjectRepeat","paintImageMaskXObject","paintImageMaskXObjectGroup","paintImageMaskXObjectRepeat","paintSolidColorImageMask"],r0=n=>n.length>=4&&n[0]===37&&n[1]===80&&n[2]===68&&n[3]===70});var Ef=pe(()=>{});var Tf=Vu((PS,ca)=>{(function(){"use strict";var n={};n.version="6.4.2.2",n.use_lines=!0,n.use_xyz=!1;var t=!1;typeof ca<"u"&&ca.exports?(ca.exports=n,t=!0):(typeof define=="function"&&define.amd&&define(n),typeof document<"u"?window.ClipperLib=n:self.ClipperLib=n);var e;if(t){var i="chrome";e="Netscape"}else{var i=navigator.userAgent.toString().toLowerCase();e=navigator.appName}var s={};i.indexOf("chrome")!=-1&&i.indexOf("chromium")==-1?s.chrome=1:s.chrome=0,i.indexOf("chromium")!=-1?s.chromium=1:s.chromium=0,i.indexOf("safari")!=-1&&i.indexOf("chrome")==-1&&i.indexOf("chromium")==-1?s.safari=1:s.safari=0,i.indexOf("firefox")!=-1?s.firefox=1:s.firefox=0,i.indexOf("firefox/17")!=-1?s.firefox17=1:s.firefox17=0,i.indexOf("firefox/15")!=-1?s.firefox15=1:s.firefox15=0,i.indexOf("firefox/3")!=-1?s.firefox3=1:s.firefox3=0,i.indexOf("opera")!=-1?s.opera=1:s.opera=0,i.indexOf("msie 10")!=-1?s.msie10=1:s.msie10=0,i.indexOf("msie 9")!=-1?s.msie9=1:s.msie9=0,i.indexOf("msie 8")!=-1?s.msie8=1:s.msie8=0,i.indexOf("msie 7")!=-1?s.msie7=1:s.msie7=0,i.indexOf("msie ")!=-1?s.msie=1:s.msie=0,n.biginteger_used=null;var a,l=0xdeadbeefcafe,o=(l&16777215)==15715070;function h(r,c,u){n.biginteger_used=1,r!=null&&(typeof r=="number"&&typeof c>"u"?this.fromInt(r):typeof r=="number"?this.fromNumber(r,c,u):c==null&&typeof r!="string"?this.fromString(r,256):this.fromString(r,c))}function f(){return new h(null,void 0,void 0)}function d(r,c,u,m,M,P){for(;--P>=0;){var D=c*this[r++]+u[m]+M;M=Math.floor(D/67108864),u[m++]=D&67108863}return M}function g(r,c,u,m,M,P){for(var D=c&32767,Y=c>>15;--P>=0;){var $=this[r]&32767,it=this[r++]>>15,vt=Y*$+it*D;$=D*$+((vt&32767)<<15)+u[m]+(M&1073741823),M=($>>>30)+(vt>>>15)+Y*it+(M>>>30),u[m++]=$&1073741823}return M}function p(r,c,u,m,M,P){for(var D=c&16383,Y=c>>14;--P>=0;){var $=this[r]&16383,it=this[r++]>>14,vt=Y*$+it*D;$=D*$+((vt&16383)<<14)+u[m]+M,M=($>>28)+(vt>>14)+Y*it,u[m++]=$&268435455}return M}o&&e=="Microsoft Internet Explorer"?(h.prototype.am=g,a=30):o&&e!="Netscape"?(h.prototype.am=d,a=26):(h.prototype.am=p,a=28),h.prototype.DB=a,h.prototype.DM=(1<<a)-1,h.prototype.DV=1<<a;var x=52;h.prototype.FV=Math.pow(2,x),h.prototype.F1=x-a,h.prototype.F2=2*a-x;var v="0123456789abcdefghijklmnopqrstuvwxyz",b=new Array,y,_;for(y=48,_=0;_<=9;++_)b[y++]=_;for(y=97,_=10;_<36;++_)b[y++]=_;for(y=65,_=10;_<36;++_)b[y++]=_;function A(r){return v.charAt(r)}function T(r,c){var u=b[r.charCodeAt(c)];return u??-1}function S(r){for(var c=this.t-1;c>=0;--c)r[c]=this[c];r.t=this.t,r.s=this.s}function I(r){this.t=1,this.s=r<0?-1:0,r>0?this[0]=r:r<-1?this[0]=r+this.DV:this.t=0}function E(r){var c=f();return c.fromInt(r),c}function C(r,c){var u;if(c==16)u=4;else if(c==8)u=3;else if(c==256)u=8;else if(c==2)u=1;else if(c==32)u=5;else if(c==4)u=2;else{this.fromRadix(r,c);return}this.t=0,this.s=0;for(var m=r.length,M=!1,P=0;--m>=0;){var D=u==8?r[m]&255:T(r,m);if(D<0){r.charAt(m)=="-"&&(M=!0);continue}M=!1,P==0?this[this.t++]=D:P+u>this.DB?(this[this.t-1]|=(D&(1<<this.DB-P)-1)<<P,this[this.t++]=D>>this.DB-P):this[this.t-1]|=D<<P,P+=u,P>=this.DB&&(P-=this.DB)}u==8&&(r[0]&128)!=0&&(this.s=-1,P>0&&(this[this.t-1]|=(1<<this.DB-P)-1<<P)),this.clamp(),M&&h.ZERO.subTo(this,this)}function w(){for(var r=this.s&this.DM;this.t>0&&this[this.t-1]==r;)--this.t}function N(r){if(this.s<0)return"-"+this.negate().toString(r);var c;if(r==16)c=4;else if(r==8)c=3;else if(r==2)c=1;else if(r==32)c=5;else if(r==4)c=2;else return this.toRadix(r);var u=(1<<c)-1,m,M=!1,P="",D=this.t,Y=this.DB-D*this.DB%c;if(D-- >0)for(Y<this.DB&&(m=this[D]>>Y)>0&&(M=!0,P=A(m));D>=0;)Y<c?(m=(this[D]&(1<<Y)-1)<<c-Y,m|=this[--D]>>(Y+=this.DB-c)):(m=this[D]>>(Y-=c)&u,Y<=0&&(Y+=this.DB,--D)),m>0&&(M=!0),M&&(P+=A(m));return M?P:"0"}function F(){var r=f();return h.ZERO.subTo(this,r),r}function U(){return this.s<0?this.negate():this}function G(r){var c=this.s-r.s;if(c!=0)return c;var u=this.t;if(c=u-r.t,c!=0)return this.s<0?-c:c;for(;--u>=0;)if((c=this[u]-r[u])!=0)return c;return 0}function V(r){var c=1,u;return(u=r>>>16)!=0&&(r=u,c+=16),(u=r>>8)!=0&&(r=u,c+=8),(u=r>>4)!=0&&(r=u,c+=4),(u=r>>2)!=0&&(r=u,c+=2),(u=r>>1)!=0&&(r=u,c+=1),c}function k(){return this.t<=0?0:this.DB*(this.t-1)+V(this[this.t-1]^this.s&this.DM)}function q(r,c){var u;for(u=this.t-1;u>=0;--u)c[u+r]=this[u];for(u=r-1;u>=0;--u)c[u]=0;c.t=this.t+r,c.s=this.s}function Z(r,c){for(var u=r;u<this.t;++u)c[u-r]=this[u];c.t=Math.max(this.t-r,0),c.s=this.s}function B(r,c){var u=r%this.DB,m=this.DB-u,M=(1<<m)-1,P=Math.floor(r/this.DB),D=this.s<<u&this.DM,Y;for(Y=this.t-1;Y>=0;--Y)c[Y+P+1]=this[Y]>>m|D,D=(this[Y]&M)<<u;for(Y=P-1;Y>=0;--Y)c[Y]=0;c[P]=D,c.t=this.t+P+1,c.s=this.s,c.clamp()}function K(r,c){c.s=this.s;var u=Math.floor(r/this.DB);if(u>=this.t){c.t=0;return}var m=r%this.DB,M=this.DB-m,P=(1<<m)-1;c[0]=this[u]>>m;for(var D=u+1;D<this.t;++D)c[D-u-1]|=(this[D]&P)<<M,c[D-u]=this[D]>>m;m>0&&(c[this.t-u-1]|=(this.s&P)<<M),c.t=this.t-u,c.clamp()}function j(r,c){for(var u=0,m=0,M=Math.min(r.t,this.t);u<M;)m+=this[u]-r[u],c[u++]=m&this.DM,m>>=this.DB;if(r.t<this.t){for(m-=r.s;u<this.t;)m+=this[u],c[u++]=m&this.DM,m>>=this.DB;m+=this.s}else{for(m+=this.s;u<r.t;)m-=r[u],c[u++]=m&this.DM,m>>=this.DB;m-=r.s}c.s=m<0?-1:0,m<-1?c[u++]=this.DV+m:m>0&&(c[u++]=m),c.t=u,c.clamp()}function st(r,c){var u=this.abs(),m=r.abs(),M=u.t;for(c.t=M+m.t;--M>=0;)c[M]=0;for(M=0;M<m.t;++M)c[M+u.t]=u.am(0,m[M],c,M,0,u.t);c.s=0,c.clamp(),this.s!=r.s&&h.ZERO.subTo(c,c)}function X(r){for(var c=this.abs(),u=r.t=2*c.t;--u>=0;)r[u]=0;for(u=0;u<c.t-1;++u){var m=c.am(u,c[u],r,2*u,0,1);(r[u+c.t]+=c.am(u+1,2*c[u],r,2*u+1,m,c.t-u-1))>=c.DV&&(r[u+c.t]-=c.DV,r[u+c.t+1]=1)}r.t>0&&(r[r.t-1]+=c.am(u,c[u],r,2*u,0,1)),r.s=0,r.clamp()}function bt(r,c,u){var m=r.abs();if(!(m.t<=0)){var M=this.abs();if(M.t<m.t){c?.fromInt(0),u!=null&&this.copyTo(u);return}u==null&&(u=f());var P=f(),D=this.s,Y=r.s,$=this.DB-V(m[m.t-1]);$>0?(m.lShiftTo($,P),M.lShiftTo($,u)):(m.copyTo(P),M.copyTo(u));var it=P.t,vt=P[it-1];if(vt!=0){var _t=vt*(1<<this.F1)+(it>1?P[it-2]>>this.F2:0),Et=this.FV/_t,Qt=(1<<this.F1)/_t,de=1<<this.F2,_e=u.t,Ve=_e-it,Cn=c??f();for(P.dlShiftTo(Ve,Cn),u.compareTo(Cn)>=0&&(u[u.t++]=1,u.subTo(Cn,u)),h.ONE.dlShiftTo(it,Cn),Cn.subTo(P,P);P.t<it;)P[P.t++]=0;for(;--Ve>=0;){var ai=u[--_e]==vt?this.DM:Math.floor(u[_e]*Et+(u[_e-1]+de)*Qt);if((u[_e]+=P.am(0,ai,u,Ve,0,it))<ai)for(P.dlShiftTo(Ve,Cn),u.subTo(Cn,u);u[_e]<--ai;)u.subTo(Cn,u)}c!=null&&(u.drShiftTo(it,c),D!=Y&&h.ZERO.subTo(c,c)),u.t=it,u.clamp(),$>0&&u.rShiftTo($,u),D<0&&h.ZERO.subTo(u,u)}}}function St(r){var c=f();return this.abs().divRemTo(r,null,c),this.s<0&&c.compareTo(h.ZERO)>0&&r.subTo(c,c),c}function Vt(r){this.m=r}function $t(r){return r.s<0||r.compareTo(this.m)>=0?r.mod(this.m):r}function te(r){return r}function ut(r){r.divRemTo(this.m,null,r)}function gt(r,c,u){r.multiplyTo(c,u),this.reduce(u)}function Dt(r,c){r.squareTo(c),this.reduce(c)}Vt.prototype.convert=$t,Vt.prototype.revert=te,Vt.prototype.reduce=ut,Vt.prototype.mulTo=gt,Vt.prototype.sqrTo=Dt;function ne(){if(this.t<1)return 0;var r=this[0];if((r&1)==0)return 0;var c=r&3;return c=c*(2-(r&15)*c)&15,c=c*(2-(r&255)*c)&255,c=c*(2-((r&65535)*c&65535))&65535,c=c*(2-r*c%this.DV)%this.DV,c>0?this.DV-c:-c}function Ot(r){this.m=r,this.mp=r.invDigit(),this.mpl=this.mp&32767,this.mph=this.mp>>15,this.um=(1<<r.DB-15)-1,this.mt2=2*r.t}function ce(r){var c=f();return r.abs().dlShiftTo(this.m.t,c),c.divRemTo(this.m,null,c),r.s<0&&c.compareTo(h.ZERO)>0&&this.m.subTo(c,c),c}function be(r){var c=f();return r.copyTo(c),this.reduce(c),c}function he(r){for(;r.t<=this.mt2;)r[r.t++]=0;for(var c=0;c<this.m.t;++c){var u=r[c]&32767,m=u*this.mpl+((u*this.mph+(r[c]>>15)*this.mpl&this.um)<<15)&r.DM;for(u=c+this.m.t,r[u]+=this.m.am(0,m,r,c,0,this.m.t);r[u]>=r.DV;)r[u]-=r.DV,r[++u]++}r.clamp(),r.drShiftTo(this.m.t,r),r.compareTo(this.m)>=0&&r.subTo(this.m,r)}function ge(r,c){r.squareTo(c),this.reduce(c)}function Se(r,c,u){r.multiplyTo(c,u),this.reduce(u)}Ot.prototype.convert=ce,Ot.prototype.revert=be,Ot.prototype.reduce=he,Ot.prototype.mulTo=Se,Ot.prototype.sqrTo=ge;function ue(){return(this.t>0?this[0]&1:this.s)==0}function Ae(r,c){if(r>4294967295||r<1)return h.ONE;var u=f(),m=f(),M=c.convert(this),P=V(r)-1;for(M.copyTo(u);--P>=0;)if(c.sqrTo(u,m),(r&1<<P)>0)c.mulTo(m,M,u);else{var D=u;u=m,m=D}return c.revert(u)}function Ue(r,c){var u;return r<256||c.isEven()?u=new Vt(c):u=new Ot(c),this.exp(r,u)}h.prototype.copyTo=S,h.prototype.fromInt=I,h.prototype.fromString=C,h.prototype.clamp=w,h.prototype.dlShiftTo=q,h.prototype.drShiftTo=Z,h.prototype.lShiftTo=B,h.prototype.rShiftTo=K,h.prototype.subTo=j,h.prototype.multiplyTo=st,h.prototype.squareTo=X,h.prototype.divRemTo=bt,h.prototype.invDigit=ne,h.prototype.isEven=ue,h.prototype.exp=Ae,h.prototype.toString=N,h.prototype.negate=F,h.prototype.abs=U,h.prototype.compareTo=G,h.prototype.bitLength=k,h.prototype.mod=St,h.prototype.modPowInt=Ue,h.ZERO=E(0),h.ONE=E(1);function Ye(){var r=f();return this.copyTo(r),r}function Be(){if(this.s<0){if(this.t==1)return this[0]-this.DV;if(this.t==0)return-1}else{if(this.t==1)return this[0];if(this.t==0)return 0}return(this[1]&(1<<32-this.DB)-1)<<this.DB|this[0]}function ke(){return this.t==0?this.s:this[0]<<24>>24}function et(){return this.t==0?this.s:this[0]<<16>>16}function Qe(r){return Math.floor(Math.LN2*this.DB/Math.log(r))}function Ce(){return this.s<0?-1:this.t<=0||this.t==1&&this[0]<=0?0:1}function z(r){if(r==null&&(r=10),this.signum()==0||r<2||r>36)return"0";var c=this.chunkSize(r),u=Math.pow(r,c),m=E(u),M=f(),P=f(),D="";for(this.divRemTo(m,M,P);M.signum()>0;)D=(u+P.intValue()).toString(r).substr(1)+D,M.divRemTo(m,M,P);return P.intValue().toString(r)+D}function R(r,c){this.fromInt(0),c==null&&(c=10);for(var u=this.chunkSize(c),m=Math.pow(c,u),M=!1,P=0,D=0,Y=0;Y<r.length;++Y){var $=T(r,Y);if($<0){r.charAt(Y)=="-"&&this.signum()==0&&(M=!0);continue}D=c*D+$,++P>=u&&(this.dMultiply(m),this.dAddOffset(D,0),P=0,D=0)}P>0&&(this.dMultiply(Math.pow(c,P)),this.dAddOffset(D,0)),M&&h.ZERO.subTo(this,this)}function rt(r,c,u){if(typeof c=="number")if(r<2)this.fromInt(1);else for(this.fromNumber(r,u),this.testBit(r-1)||this.bitwiseTo(h.ONE.shiftLeft(r-1),Xt,this),this.isEven()&&this.dAddOffset(1,0);!this.isProbablePrime(c);)this.dAddOffset(2,0),this.bitLength()>r&&this.subTo(h.ONE.shiftLeft(r-1),this);else{var m=new Array,M=r&7;m.length=(r>>3)+1,c.nextBytes(m),M>0?m[0]&=(1<<M)-1:m[0]=0,this.fromString(m,256)}}function ft(){var r=this.t,c=new Array;c[0]=this.s;var u=this.DB-r*this.DB%8,m,M=0;if(r-- >0)for(u<this.DB&&(m=this[r]>>u)!=(this.s&this.DM)>>u&&(c[M++]=m|this.s<<this.DB-u);r>=0;)u<8?(m=(this[r]&(1<<u)-1)<<8-u,m|=this[--r]>>(u+=this.DB-8)):(m=this[r]>>(u-=8)&255,u<=0&&(u+=this.DB,--r)),(m&128)!=0&&(m|=-256),M==0&&(this.s&128)!=(m&128)&&++M,(M>0||m!=this.s)&&(c[M++]=m);return c}function mt(r){return this.compareTo(r)==0}function Tt(r){return this.compareTo(r)<0?this:r}function Pt(r){return this.compareTo(r)>0?this:r}function xt(r,c,u){var m,M,P=Math.min(r.t,this.t);for(m=0;m<P;++m)u[m]=c(this[m],r[m]);if(r.t<this.t){for(M=r.s&this.DM,m=P;m<this.t;++m)u[m]=c(this[m],M);u.t=this.t}else{for(M=this.s&this.DM,m=P;m<r.t;++m)u[m]=c(M,r[m]);u.t=r.t}u.s=c(this.s,r.s),u.clamp()}function Mt(r,c){return r&c}function W(r){var c=f();return this.bitwiseTo(r,Mt,c),c}function Xt(r,c){return r|c}function Lt(r){var c=f();return this.bitwiseTo(r,Xt,c),c}function At(r,c){return r^c}function qt(r){var c=f();return this.bitwiseTo(r,At,c),c}function Kt(r,c){return r&~c}function ae(r){var c=f();return this.bitwiseTo(r,Kt,c),c}function Q(){for(var r=f(),c=0;c<this.t;++c)r[c]=this.DM&~this[c];return r.t=this.t,r.s=~this.s,r}function Rt(r){var c=f();return r<0?this.rShiftTo(-r,c):this.lShiftTo(r,c),c}function yt(r){var c=f();return r<0?this.lShiftTo(-r,c):this.rShiftTo(r,c),c}function Ct(r){if(r==0)return-1;var c=0;return(r&65535)==0&&(r>>=16,c+=16),(r&255)==0&&(r>>=8,c+=8),(r&15)==0&&(r>>=4,c+=4),(r&3)==0&&(r>>=2,c+=2),(r&1)==0&&++c,c}function Ut(){for(var r=0;r<this.t;++r)if(this[r]!=0)return r*this.DB+Ct(this[r]);return this.s<0?this.t*this.DB:-1}function wt(r){for(var c=0;r!=0;)r&=r-1,++c;return c}function Ht(){for(var r=0,c=this.s&this.DM,u=0;u<this.t;++u)r+=wt(this[u]^c);return r}function Gt(r){var c=Math.floor(r/this.DB);return c>=this.t?this.s!=0:(this[c]&1<<r%this.DB)!=0}function Le(r,c){var u=h.ONE.shiftLeft(r);return this.bitwiseTo(u,c,u),u}function Te(r){return this.changeBit(r,Xt)}function Sn(r){return this.changeBit(r,Kt)}function gn(r){return this.changeBit(r,At)}function Ns(r,c){for(var u=0,m=0,M=Math.min(r.t,this.t);u<M;)m+=this[u]+r[u],c[u++]=m&this.DM,m>>=this.DB;if(r.t<this.t){for(m+=r.s;u<this.t;)m+=this[u],c[u++]=m&this.DM,m>>=this.DB;m+=this.s}else{for(m+=this.s;u<r.t;)m+=r[u],c[u++]=m&this.DM,m>>=this.DB;m+=r.s}c.s=m<0?-1:0,m>0?c[u++]=m:m<-1&&(c[u++]=this.DV+m),c.t=u,c.clamp()}function $n(r){var c=f();return this.addTo(r,c),c}function Ds(r){var c=f();return this.subTo(r,c),c}function rs(r){var c=f();return this.multiplyTo(r,c),c}function je(){var r=f();return this.squareTo(r),r}function os(r){var c=f();return this.divRemTo(r,c,null),c}function as(r){var c=f();return this.divRemTo(r,null,c),c}function qn(r){var c=f(),u=f();return this.divRemTo(r,c,u),new Array(c,u)}function ls(r){this[this.t]=this.am(0,r-1,this,0,0,this.t),++this.t,this.clamp()}function cs(r,c){if(r!=0){for(;this.t<=c;)this[this.t++]=0;for(this[c]+=r;this[c]>=this.DV;)this[c]-=this.DV,++c>=this.t&&(this[this.t++]=0),++this[c]}}function O(){}function H(r){return r}function ot(r,c,u){r.multiplyTo(c,u)}function ht(r,c){r.squareTo(c)}O.prototype.convert=H,O.prototype.revert=H,O.prototype.mulTo=ot,O.prototype.sqrTo=ht;function nt(r){return this.exp(r,new O)}function dt(r,c,u){var m=Math.min(this.t+r.t,c);for(u.s=0,u.t=m;m>0;)u[--m]=0;var M;for(M=u.t-this.t;m<M;++m)u[m+this.t]=this.am(0,r[m],u,m,0,this.t);for(M=Math.min(r.t,c);m<M;++m)this.am(0,r[m],u,m,0,c-m);u.clamp()}function zt(r,c,u){--c;var m=u.t=this.t+r.t-c;for(u.s=0;--m>=0;)u[m]=0;for(m=Math.max(c-this.t,0);m<r.t;++m)u[this.t+m-c]=this.am(c-m,r[m],u,0,0,this.t+m-c);u.clamp(),u.drShiftTo(1,u)}function re(r){this.r2=f(),this.q3=f(),h.ONE.dlShiftTo(2*r.t,this.r2),this.mu=this.r2.divide(r),this.m=r}function pt(r){if(r.s<0||r.t>2*this.m.t)return r.mod(this.m);if(r.compareTo(this.m)<0)return r;var c=f();return r.copyTo(c),this.reduce(c),c}function Jt(r){return r}function ee(r){for(r.drShiftTo(this.m.t-1,this.r2),r.t>this.m.t+1&&(r.t=this.m.t+1,r.clamp()),this.mu.multiplyUpperTo(this.r2,this.m.t+1,this.q3),this.m.multiplyLowerTo(this.q3,this.m.t+1,this.r2);r.compareTo(this.r2)<0;)r.dAddOffset(1,this.m.t+1);for(r.subTo(this.r2,r);r.compareTo(this.m)>=0;)r.subTo(this.m,r)}function L(r,c){r.squareTo(c),this.reduce(c)}function J(r,c,u){r.multiplyTo(c,u),this.reduce(u)}re.prototype.convert=pt,re.prototype.revert=Jt,re.prototype.reduce=ee,re.prototype.mulTo=J,re.prototype.sqrTo=L;function at(r,c){var u=r.bitLength(),m,M=E(1),P;if(u<=0)return M;u<18?m=1:u<48?m=3:u<144?m=4:u<768?m=5:m=6,u<8?P=new Vt(c):c.isEven()?P=new re(c):P=new Ot(c);var D=new Array,Y=3,$=m-1,it=(1<<m)-1;if(D[1]=P.convert(this),m>1){var vt=f();for(P.sqrTo(D[1],vt);Y<=it;)D[Y]=f(),P.mulTo(vt,D[Y-2],D[Y]),Y+=2}var _t=r.t-1,Et,Qt=!0,de=f(),_e;for(u=V(r[_t])-1;_t>=0;){for(u>=$?Et=r[_t]>>u-$&it:(Et=(r[_t]&(1<<u+1)-1)<<$-u,_t>0&&(Et|=r[_t-1]>>this.DB+u-$)),Y=m;(Et&1)==0;)Et>>=1,--Y;if((u-=Y)<0&&(u+=this.DB,--_t),Qt)D[Et].copyTo(M),Qt=!1;else{for(;Y>1;)P.sqrTo(M,de),P.sqrTo(de,M),Y-=2;Y>0?P.sqrTo(M,de):(_e=M,M=de,de=_e),P.mulTo(de,D[Et],M)}for(;_t>=0&&(r[_t]&1<<u)==0;)P.sqrTo(M,de),_e=M,M=de,de=_e,--u<0&&(u=this.DB-1,--_t)}return P.revert(M)}function lt(r){var c=this.s<0?this.negate():this.clone(),u=r.s<0?r.negate():r.clone();if(c.compareTo(u)<0){var m=c;c=u,u=m}var M=c.getLowestSetBit(),P=u.getLowestSetBit();if(P<0)return c;for(M<P&&(P=M),P>0&&(c.rShiftTo(P,c),u.rShiftTo(P,u));c.signum()>0;)(M=c.getLowestSetBit())>0&&c.rShiftTo(M,c),(M=u.getLowestSetBit())>0&&u.rShiftTo(M,u),c.compareTo(u)>=0?(c.subTo(u,c),c.rShiftTo(1,c)):(u.subTo(c,u),u.rShiftTo(1,u));return P>0&&u.lShiftTo(P,u),u}function ct(r){if(r<=0)return 0;var c=this.DV%r,u=this.s<0?r-1:0;if(this.t>0)if(c==0)u=this[0]%r;else for(var m=this.t-1;m>=0;--m)u=(c*u+this[m])%r;return u}function Ft(r){var c=r.isEven();if(this.isEven()&&c||r.signum()==0)return h.ZERO;for(var u=r.clone(),m=this.clone(),M=E(1),P=E(0),D=E(0),Y=E(1);u.signum()!=0;){for(;u.isEven();)u.rShiftTo(1,u),c?((!M.isEven()||!P.isEven())&&(M.addTo(this,M),P.subTo(r,P)),M.rShiftTo(1,M)):P.isEven()||P.subTo(r,P),P.rShiftTo(1,P);for(;m.isEven();)m.rShiftTo(1,m),c?((!D.isEven()||!Y.isEven())&&(D.addTo(this,D),Y.subTo(r,Y)),D.rShiftTo(1,D)):Y.isEven()||Y.subTo(r,Y),Y.rShiftTo(1,Y);u.compareTo(m)>=0?(u.subTo(m,u),c&&M.subTo(D,M),P.subTo(Y,P)):(m.subTo(u,m),c&&D.subTo(M,D),Y.subTo(P,Y))}if(m.compareTo(h.ONE)!=0)return h.ZERO;if(Y.compareTo(r)>=0)return Y.subtract(r);if(Y.signum()<0)Y.addTo(r,Y);else return Y;return Y.signum()<0?Y.add(r):Y}var It=[2,3,5,7,11,13,17,19,23,29,31,37,41,43,47,53,59,61,67,71,73,79,83,89,97,101,103,107,109,113,127,131,137,139,149,151,157,163,167,173,179,181,191,193,197,199,211,223,227,229,233,239,241,251,257,263,269,271,277,281,283,293,307,311,313,317,331,337,347,349,353,359,367,373,379,383,389,397,401,409,419,421,431,433,439,443,449,457,461,463,467,479,487,491,499,503,509,521,523,541,547,557,563,569,571,577,587,593,599,601,607,613,617,619,631,641,643,647,653,659,661,673,677,683,691,701,709,719,727,733,739,743,751,757,761,769,773,787,797,809,811,821,823,827,829,839,853,857,859,863,877,881,883,887,907,911,919,929,937,941,947,953,967,971,977,983,991,997],Bt=(1<<26)/It[It.length-1];function Wt(r){var c,u=this.abs();if(u.t==1&&u[0]<=It[It.length-1]){for(c=0;c<It.length;++c)if(u[0]==It[c])return!0;return!1}if(u.isEven())return!1;for(c=1;c<It.length;){for(var m=It[c],M=c+1;M<It.length&&m<Bt;)m*=It[M++];for(m=u.modInt(m);c<M;)if(m%It[c++]==0)return!1}return u.millerRabin(r)}function Zt(r){var c=this.subtract(h.ONE),u=c.getLowestSetBit();if(u<=0)return!1;var m=c.shiftRight(u);r=r+1>>1,r>It.length&&(r=It.length);for(var M=f(),P=0;P<r;++P){M.fromInt(It[Math.floor(Math.random()*It.length)]);var D=M.modPow(m,this);if(D.compareTo(h.ONE)!=0&&D.compareTo(c)!=0){for(var Y=1;Y++<u&&D.compareTo(c)!=0;)if(D=D.modPowInt(2,this),D.compareTo(h.ONE)==0)return!1;if(D.compareTo(c)!=0)return!1}}return!0}h.prototype.chunkSize=Qe,h.prototype.toRadix=z,h.prototype.fromRadix=R,h.prototype.fromNumber=rt,h.prototype.bitwiseTo=xt,h.prototype.changeBit=Le,h.prototype.addTo=Ns,h.prototype.dMultiply=ls,h.prototype.dAddOffset=cs,h.prototype.multiplyLowerTo=dt,h.prototype.multiplyUpperTo=zt,h.prototype.modInt=ct,h.prototype.millerRabin=Zt,h.prototype.clone=Ye,h.prototype.intValue=Be,h.prototype.byteValue=ke,h.prototype.shortValue=et,h.prototype.signum=Ce,h.prototype.toByteArray=ft,h.prototype.equals=mt,h.prototype.min=Tt,h.prototype.max=Pt,h.prototype.and=W,h.prototype.or=Lt,h.prototype.xor=qt,h.prototype.andNot=ae,h.prototype.not=Q,h.prototype.shiftLeft=Rt,h.prototype.shiftRight=yt,h.prototype.getLowestSetBit=Ut,h.prototype.bitCount=Ht,h.prototype.testBit=Gt,h.prototype.setBit=Te,h.prototype.clearBit=Sn,h.prototype.flipBit=gn,h.prototype.add=$n,h.prototype.subtract=Ds,h.prototype.multiply=rs,h.prototype.divide=os,h.prototype.remainder=as,h.prototype.divideAndRemainder=qn,h.prototype.modPow=at,h.prototype.modInverse=Ft,h.prototype.pow=nt,h.prototype.gcd=lt,h.prototype.isProbablePrime=Wt,h.prototype.square=je;var Nt=h;Nt.prototype.IsNegative=function(){return this.compareTo(Nt.ZERO)==-1},Nt.op_Equality=function(r,c){return r.compareTo(c)==0},Nt.op_Inequality=function(r,c){return r.compareTo(c)!=0},Nt.op_GreaterThan=function(r,c){return r.compareTo(c)>0},Nt.op_LessThan=function(r,c){return r.compareTo(c)<0},Nt.op_Addition=function(r,c){return new Nt(r,void 0,void 0).add(new Nt(c,void 0,void 0))},Nt.op_Subtraction=function(r,c){return new Nt(r,void 0,void 0).subtract(new Nt(c,void 0,void 0))},Nt.Int128Mul=function(r,c){return new Nt(r,void 0,void 0).multiply(new Nt(c,void 0,void 0))},Nt.op_Division=function(r,c){return r.divide(c)},Nt.prototype.ToDouble=function(){return parseFloat(this.toString())};var ye=function(r,c){var u;if(typeof Object.getOwnPropertyNames>"u"){for(u in c.prototype)(typeof r.prototype[u]>"u"||r.prototype[u]===Object.prototype[u])&&(r.prototype[u]=c.prototype[u]);for(u in c)typeof r[u]>"u"&&(r[u]=c[u]);r.$baseCtor=c}else{for(var m=Object.getOwnPropertyNames(c.prototype),M=0;M<m.length;M++)typeof Object.getOwnPropertyDescriptor(r.prototype,m[M])>"u"&&Object.defineProperty(r.prototype,m[M],Object.getOwnPropertyDescriptor(c.prototype,m[M]));for(u in c)typeof r[u]>"u"&&(r[u]=c[u]);r.$baseCtor=c}};n.Path=function(){return[]},n.Path.prototype.push=Array.prototype.push,n.Paths=function(){return[]},n.Paths.prototype.push=Array.prototype.push,n.DoublePoint=function(){var r=arguments;this.X=0,this.Y=0,r.length===1?(this.X=r[0].X,this.Y=r[0].Y):r.length===2&&(this.X=r[0],this.Y=r[1])},n.DoublePoint0=function(){this.X=0,this.Y=0},n.DoublePoint0.prototype=n.DoublePoint.prototype,n.DoublePoint1=function(r){this.X=r.X,this.Y=r.Y},n.DoublePoint1.prototype=n.DoublePoint.prototype,n.DoublePoint2=function(r,c){this.X=r,this.Y=c},n.DoublePoint2.prototype=n.DoublePoint.prototype,n.PolyNode=function(){this.m_Parent=null,this.m_polygon=new n.Path,this.m_Index=0,this.m_jointype=0,this.m_endtype=0,this.m_Childs=[],this.IsOpen=!1},n.PolyNode.prototype.IsHoleNode=function(){for(var r=!0,c=this.m_Parent;c!==null;)r=!r,c=c.m_Parent;return r},n.PolyNode.prototype.ChildCount=function(){return this.m_Childs.length},n.PolyNode.prototype.Contour=function(){return this.m_polygon},n.PolyNode.prototype.AddChild=function(r){var c=this.m_Childs.length;this.m_Childs.push(r),r.m_Parent=this,r.m_Index=c},n.PolyNode.prototype.GetNext=function(){return this.m_Childs.length>0?this.m_Childs[0]:this.GetNextSiblingUp()},n.PolyNode.prototype.GetNextSiblingUp=function(){return this.m_Parent===null?null:this.m_Index===this.m_Parent.m_Childs.length-1?this.m_Parent.GetNextSiblingUp():this.m_Parent.m_Childs[this.m_Index+1]},n.PolyNode.prototype.Childs=function(){return this.m_Childs},n.PolyNode.prototype.Parent=function(){return this.m_Parent},n.PolyNode.prototype.IsHole=function(){return this.IsHoleNode()},n.PolyTree=function(){this.m_AllPolys=[],n.PolyNode.call(this)},n.PolyTree.prototype.Clear=function(){for(var r=0,c=this.m_AllPolys.length;r<c;r++)this.m_AllPolys[r]=null;this.m_AllPolys.length=0,this.m_Childs.length=0},n.PolyTree.prototype.GetFirst=function(){return this.m_Childs.length>0?this.m_Childs[0]:null},n.PolyTree.prototype.Total=function(){var r=this.m_AllPolys.length;return r>0&&this.m_Childs[0]!==this.m_AllPolys[0]&&r--,r},ye(n.PolyTree,n.PolyNode),n.Math_Abs_Int64=n.Math_Abs_Int32=n.Math_Abs_Double=function(r){return Math.abs(r)},n.Math_Max_Int32_Int32=function(r,c){return Math.max(r,c)},s.msie||s.opera||s.safari?n.Cast_Int32=function(r){return r|0}:n.Cast_Int32=function(r){return~~r},typeof Number.toInteger>"u"&&(Number.toInteger=null),s.chrome?n.Cast_Int64=function(r){return r<-2147483648||r>2147483647?r<0?Math.ceil(r):Math.floor(r):~~r}:s.firefox&&typeof Number.toInteger=="function"?n.Cast_Int64=function(r){return Number.toInteger(r)}:s.msie7||s.msie8?n.Cast_Int64=function(r){return parseInt(r,10)}:s.msie?n.Cast_Int64=function(r){return r<-2147483648||r>2147483647?r<0?Math.ceil(r):Math.floor(r):r|0}:n.Cast_Int64=function(r){return r<0?Math.ceil(r):Math.floor(r)},n.Clear=function(r){r.length=0},n.PI=3.141592653589793,n.PI2=2*3.141592653589793,n.IntPoint=function(){var r=arguments,c=r.length;if(this.X=0,this.Y=0,n.use_xyz)if(this.Z=0,c===3)this.X=r[0],this.Y=r[1],this.Z=r[2];else if(c===2)this.X=r[0],this.Y=r[1],this.Z=0;else if(c===1)if(r[0]instanceof n.DoublePoint){var u=r[0];this.X=n.Clipper.Round(u.X),this.Y=n.Clipper.Round(u.Y),this.Z=0}else{var m=r[0];typeof m.Z>"u"&&(m.Z=0),this.X=m.X,this.Y=m.Y,this.Z=m.Z}else this.X=0,this.Y=0,this.Z=0;else if(c===2)this.X=r[0],this.Y=r[1];else if(c===1)if(r[0]instanceof n.DoublePoint){var u=r[0];this.X=n.Clipper.Round(u.X),this.Y=n.Clipper.Round(u.Y)}else{var m=r[0];this.X=m.X,this.Y=m.Y}else this.X=0,this.Y=0},n.IntPoint.op_Equality=function(r,c){return r.X===c.X&&r.Y===c.Y},n.IntPoint.op_Inequality=function(r,c){return r.X!==c.X||r.Y!==c.Y},n.IntPoint0=function(){this.X=0,this.Y=0,n.use_xyz&&(this.Z=0)},n.IntPoint0.prototype=n.IntPoint.prototype,n.IntPoint1=function(r){this.X=r.X,this.Y=r.Y,n.use_xyz&&(typeof r.Z>"u"?this.Z=0:this.Z=r.Z)},n.IntPoint1.prototype=n.IntPoint.prototype,n.IntPoint1dp=function(r){this.X=n.Clipper.Round(r.X),this.Y=n.Clipper.Round(r.Y),n.use_xyz&&(this.Z=0)},n.IntPoint1dp.prototype=n.IntPoint.prototype,n.IntPoint2=function(r,c,u){this.X=r,this.Y=c,n.use_xyz&&(typeof u>"u"?this.Z=0:this.Z=u)},n.IntPoint2.prototype=n.IntPoint.prototype,n.IntRect=function(){var r=arguments,c=r.length;if(c===4)this.left=r[0],this.top=r[1],this.right=r[2],this.bottom=r[3];else if(c===1){var u=r[0];this.left=u.left,this.top=u.top,this.right=u.right,this.bottom=u.bottom}else this.left=0,this.top=0,this.right=0,this.bottom=0},n.IntRect0=function(){this.left=0,this.top=0,this.right=0,this.bottom=0},n.IntRect0.prototype=n.IntRect.prototype,n.IntRect1=function(r){this.left=r.left,this.top=r.top,this.right=r.right,this.bottom=r.bottom},n.IntRect1.prototype=n.IntRect.prototype,n.IntRect4=function(r,c,u,m){this.left=r,this.top=c,this.right=u,this.bottom=m},n.IntRect4.prototype=n.IntRect.prototype,n.ClipType={ctIntersection:0,ctUnion:1,ctDifference:2,ctXor:3},n.PolyType={ptSubject:0,ptClip:1},n.PolyFillType={pftEvenOdd:0,pftNonZero:1,pftPositive:2,pftNegative:3},n.JoinType={jtSquare:0,jtRound:1,jtMiter:2},n.EndType={etOpenSquare:0,etOpenRound:1,etOpenButt:2,etClosedLine:3,etClosedPolygon:4},n.EdgeSide={esLeft:0,esRight:1},n.Direction={dRightToLeft:0,dLeftToRight:1},n.TEdge=function(){this.Bot=new n.IntPoint0,this.Curr=new n.IntPoint0,this.Top=new n.IntPoint0,this.Delta=new n.IntPoint0,this.Dx=0,this.PolyTyp=n.PolyType.ptSubject,this.Side=n.EdgeSide.esLeft,this.WindDelta=0,this.WindCnt=0,this.WindCnt2=0,this.OutIdx=0,this.Next=null,this.Prev=null,this.NextInLML=null,this.NextInAEL=null,this.PrevInAEL=null,this.NextInSEL=null,this.PrevInSEL=null},n.IntersectNode=function(){this.Edge1=null,this.Edge2=null,this.Pt=new n.IntPoint0},n.MyIntersectNodeSort=function(){},n.MyIntersectNodeSort.Compare=function(r,c){var u=c.Pt.Y-r.Pt.Y;return u>0?1:u<0?-1:0},n.LocalMinima=function(){this.Y=0,this.LeftBound=null,this.RightBound=null,this.Next=null},n.Scanbeam=function(){this.Y=0,this.Next=null},n.Maxima=function(){this.X=0,this.Next=null,this.Prev=null},n.OutRec=function(){this.Idx=0,this.IsHole=!1,this.IsOpen=!1,this.FirstLeft=null,this.Pts=null,this.BottomPt=null,this.PolyNode=null},n.OutPt=function(){this.Idx=0,this.Pt=new n.IntPoint0,this.Next=null,this.Prev=null},n.Join=function(){this.OutPt1=null,this.OutPt2=null,this.OffPt=new n.IntPoint0},n.ClipperBase=function(){this.m_MinimaList=null,this.m_CurrentLM=null,this.m_edges=new Array,this.m_UseFullRange=!1,this.m_HasOpenPaths=!1,this.PreserveCollinear=!1,this.m_Scanbeam=null,this.m_PolyOuts=null,this.m_ActiveEdges=null},n.ClipperBase.horizontal=-9007199254740992,n.ClipperBase.Skip=-2,n.ClipperBase.Unassigned=-1,n.ClipperBase.tolerance=1e-20,n.ClipperBase.loRange=47453132,n.ClipperBase.hiRange=0xfffffffffffff,n.ClipperBase.near_zero=function(r){return r>-n.ClipperBase.tolerance&&r<n.ClipperBase.tolerance},n.ClipperBase.IsHorizontal=function(r){return r.Delta.Y===0},n.ClipperBase.prototype.PointIsVertex=function(r,c){var u=c;do{if(n.IntPoint.op_Equality(u.Pt,r))return!0;u=u.Next}while(u!==c);return!1},n.ClipperBase.prototype.PointOnLineSegment=function(r,c,u,m){return m?r.X===c.X&&r.Y===c.Y||r.X===u.X&&r.Y===u.Y||r.X>c.X==r.X<u.X&&r.Y>c.Y==r.Y<u.Y&&Nt.op_Equality(Nt.Int128Mul(r.X-c.X,u.Y-c.Y),Nt.Int128Mul(u.X-c.X,r.Y-c.Y)):r.X===c.X&&r.Y===c.Y||r.X===u.X&&r.Y===u.Y||r.X>c.X==r.X<u.X&&r.Y>c.Y==r.Y<u.Y&&(r.X-c.X)*(u.Y-c.Y)===(u.X-c.X)*(r.Y-c.Y)},n.ClipperBase.prototype.PointOnPolygon=function(r,c,u){for(var m=c;;){if(this.PointOnLineSegment(r,m.Pt,m.Next.Pt,u))return!0;if(m=m.Next,m===c)break}return!1},n.ClipperBase.prototype.SlopesEqual=n.ClipperBase.SlopesEqual=function(){var r=arguments,c=r.length,u,m,M,P,D,Y,$;return c===3?(u=r[0],m=r[1],$=r[2],$?Nt.op_Equality(Nt.Int128Mul(u.Delta.Y,m.Delta.X),Nt.Int128Mul(u.Delta.X,m.Delta.Y)):n.Cast_Int64(u.Delta.Y*m.Delta.X)===n.Cast_Int64(u.Delta.X*m.Delta.Y)):c===4?(M=r[0],P=r[1],D=r[2],$=r[3],$?Nt.op_Equality(Nt.Int128Mul(M.Y-P.Y,P.X-D.X),Nt.Int128Mul(M.X-P.X,P.Y-D.Y)):n.Cast_Int64((M.Y-P.Y)*(P.X-D.X))-n.Cast_Int64((M.X-P.X)*(P.Y-D.Y))===0):(M=r[0],P=r[1],D=r[2],Y=r[3],$=r[4],$?Nt.op_Equality(Nt.Int128Mul(M.Y-P.Y,D.X-Y.X),Nt.Int128Mul(M.X-P.X,D.Y-Y.Y)):n.Cast_Int64((M.Y-P.Y)*(D.X-Y.X))-n.Cast_Int64((M.X-P.X)*(D.Y-Y.Y))===0)},n.ClipperBase.SlopesEqual3=function(r,c,u){return u?Nt.op_Equality(Nt.Int128Mul(r.Delta.Y,c.Delta.X),Nt.Int128Mul(r.Delta.X,c.Delta.Y)):n.Cast_Int64(r.Delta.Y*c.Delta.X)===n.Cast_Int64(r.Delta.X*c.Delta.Y)},n.ClipperBase.SlopesEqual4=function(r,c,u,m){return m?Nt.op_Equality(Nt.Int128Mul(r.Y-c.Y,c.X-u.X),Nt.Int128Mul(r.X-c.X,c.Y-u.Y)):n.Cast_Int64((r.Y-c.Y)*(c.X-u.X))-n.Cast_Int64((r.X-c.X)*(c.Y-u.Y))===0},n.ClipperBase.SlopesEqual5=function(r,c,u,m,M){return M?Nt.op_Equality(Nt.Int128Mul(r.Y-c.Y,u.X-m.X),Nt.Int128Mul(r.X-c.X,u.Y-m.Y)):n.Cast_Int64((r.Y-c.Y)*(u.X-m.X))-n.Cast_Int64((r.X-c.X)*(u.Y-m.Y))===0},n.ClipperBase.prototype.Clear=function(){this.DisposeLocalMinimaList();for(var r=0,c=this.m_edges.length;r<c;++r){for(var u=0,m=this.m_edges[r].length;u<m;++u)this.m_edges[r][u]=null;n.Clear(this.m_edges[r])}n.Clear(this.m_edges),this.m_UseFullRange=!1,this.m_HasOpenPaths=!1},n.ClipperBase.prototype.DisposeLocalMinimaList=function(){for(;this.m_MinimaList!==null;){var r=this.m_MinimaList.Next;this.m_MinimaList=null,this.m_MinimaList=r}this.m_CurrentLM=null},n.ClipperBase.prototype.RangeTest=function(r,c){c.Value?(r.X>n.ClipperBase.hiRange||r.Y>n.ClipperBase.hiRange||-r.X>n.ClipperBase.hiRange||-r.Y>n.ClipperBase.hiRange)&&n.Error("Coordinate outside allowed range in RangeTest()."):(r.X>n.ClipperBase.loRange||r.Y>n.ClipperBase.loRange||-r.X>n.ClipperBase.loRange||-r.Y>n.ClipperBase.loRange)&&(c.Value=!0,this.RangeTest(r,c))},n.ClipperBase.prototype.InitEdge=function(r,c,u,m){r.Next=c,r.Prev=u,r.Curr.X=m.X,r.Curr.Y=m.Y,n.use_xyz&&(r.Curr.Z=m.Z),r.OutIdx=-1},n.ClipperBase.prototype.InitEdge2=function(r,c){r.Curr.Y>=r.Next.Curr.Y?(r.Bot.X=r.Curr.X,r.Bot.Y=r.Curr.Y,n.use_xyz&&(r.Bot.Z=r.Curr.Z),r.Top.X=r.Next.Curr.X,r.Top.Y=r.Next.Curr.Y,n.use_xyz&&(r.Top.Z=r.Next.Curr.Z)):(r.Top.X=r.Curr.X,r.Top.Y=r.Curr.Y,n.use_xyz&&(r.Top.Z=r.Curr.Z),r.Bot.X=r.Next.Curr.X,r.Bot.Y=r.Next.Curr.Y,n.use_xyz&&(r.Bot.Z=r.Next.Curr.Z)),this.SetDx(r),r.PolyTyp=c},n.ClipperBase.prototype.FindNextLocMin=function(r){for(var c;;){for(;n.IntPoint.op_Inequality(r.Bot,r.Prev.Bot)||n.IntPoint.op_Equality(r.Curr,r.Top);)r=r.Next;if(r.Dx!==n.ClipperBase.horizontal&&r.Prev.Dx!==n.ClipperBase.horizontal)break;for(;r.Prev.Dx===n.ClipperBase.horizontal;)r=r.Prev;for(c=r;r.Dx===n.ClipperBase.horizontal;)r=r.Next;if(r.Top.Y!==r.Prev.Bot.Y){c.Prev.Bot.X<r.Bot.X&&(r=c);break}}return r},n.ClipperBase.prototype.ProcessBound=function(r,c){var u,m=r,M;if(m.OutIdx===n.ClipperBase.Skip){if(r=m,c){for(;r.Top.Y===r.Next.Bot.Y;)r=r.Next;for(;r!==m&&r.Dx===n.ClipperBase.horizontal;)r=r.Prev}else{for(;r.Top.Y===r.Prev.Bot.Y;)r=r.Prev;for(;r!==m&&r.Dx===n.ClipperBase.horizontal;)r=r.Next}if(r===m)c?m=r.Next:m=r.Prev;else{c?r=m.Next:r=m.Prev;var P=new n.LocalMinima;P.Next=null,P.Y=r.Bot.Y,P.LeftBound=null,P.RightBound=r,r.WindDelta=0,m=this.ProcessBound(r,c),this.InsertLocalMinima(P)}return m}if(r.Dx===n.ClipperBase.horizontal&&(c?u=r.Prev:u=r.Next,u.Dx===n.ClipperBase.horizontal?u.Bot.X!==r.Bot.X&&u.Top.X!==r.Bot.X&&this.ReverseHorizontal(r):u.Bot.X!==r.Bot.X&&this.ReverseHorizontal(r)),u=r,c){for(;m.Top.Y===m.Next.Bot.Y&&m.Next.OutIdx!==n.ClipperBase.Skip;)m=m.Next;if(m.Dx===n.ClipperBase.horizontal&&m.Next.OutIdx!==n.ClipperBase.Skip){for(M=m;M.Prev.Dx===n.ClipperBase.horizontal;)M=M.Prev;M.Prev.Top.X>m.Next.Top.X&&(m=M.Prev)}for(;r!==m;)r.NextInLML=r.Next,r.Dx===n.ClipperBase.horizontal&&r!==u&&r.Bot.X!==r.Prev.Top.X&&this.ReverseHorizontal(r),r=r.Next;r.Dx===n.ClipperBase.horizontal&&r!==u&&r.Bot.X!==r.Prev.Top.X&&this.ReverseHorizontal(r),m=m.Next}else{for(;m.Top.Y===m.Prev.Bot.Y&&m.Prev.OutIdx!==n.ClipperBase.Skip;)m=m.Prev;if(m.Dx===n.ClipperBase.horizontal&&m.Prev.OutIdx!==n.ClipperBase.Skip){for(M=m;M.Next.Dx===n.ClipperBase.horizontal;)M=M.Next;(M.Next.Top.X===m.Prev.Top.X||M.Next.Top.X>m.Prev.Top.X)&&(m=M.Next)}for(;r!==m;)r.NextInLML=r.Prev,r.Dx===n.ClipperBase.horizontal&&r!==u&&r.Bot.X!==r.Next.Top.X&&this.ReverseHorizontal(r),r=r.Prev;r.Dx===n.ClipperBase.horizontal&&r!==u&&r.Bot.X!==r.Next.Top.X&&this.ReverseHorizontal(r),m=m.Prev}return m},n.ClipperBase.prototype.AddPath=function(r,c,u){n.use_lines?!u&&c===n.PolyType.ptClip&&n.Error("AddPath: Open paths must be subject."):u||n.Error("AddPath: Open paths have been disabled.");var m=r.length-1;if(u)for(;m>0&&n.IntPoint.op_Equality(r[m],r[0]);)--m;for(;m>0&&n.IntPoint.op_Equality(r[m],r[m-1]);)--m;if(u&&m<2||!u&&m<1)return!1;for(var M=new Array,P=0;P<=m;P++)M.push(new n.TEdge);var D=!0;M[1].Curr.X=r[1].X,M[1].Curr.Y=r[1].Y,n.use_xyz&&(M[1].Curr.Z=r[1].Z);var Y={Value:this.m_UseFullRange};this.RangeTest(r[0],Y),this.m_UseFullRange=Y.Value,Y.Value=this.m_UseFullRange,this.RangeTest(r[m],Y),this.m_UseFullRange=Y.Value,this.InitEdge(M[0],M[1],M[m],r[0]),this.InitEdge(M[m],M[0],M[m-1],r[m]);for(var P=m-1;P>=1;--P)Y.Value=this.m_UseFullRange,this.RangeTest(r[P],Y),this.m_UseFullRange=Y.Value,this.InitEdge(M[P],M[P+1],M[P-1],r[P]);for(var $=M[0],it=$,vt=$;;){if(it.Curr===it.Next.Curr&&(u||it.Next!==$)){if(it===it.Next)break;it===$&&($=it.Next),it=this.RemoveEdge(it),vt=it;continue}if(it.Prev===it.Next)break;if(u&&n.ClipperBase.SlopesEqual4(it.Prev.Curr,it.Curr,it.Next.Curr,this.m_UseFullRange)&&(!this.PreserveCollinear||!this.Pt2IsBetweenPt1AndPt3(it.Prev.Curr,it.Curr,it.Next.Curr))){it===$&&($=it.Next),it=this.RemoveEdge(it),it=it.Prev,vt=it;continue}if(it=it.Next,it===vt||!u&&it.Next===$)break}if(!u&&it===it.Next||u&&it.Prev===it.Next)return!1;u||(this.m_HasOpenPaths=!0,$.Prev.OutIdx=n.ClipperBase.Skip),it=$;do this.InitEdge2(it,c),it=it.Next,D&&it.Curr.Y!==$.Curr.Y&&(D=!1);while(it!==$);if(D){if(u)return!1;it.Prev.OutIdx=n.ClipperBase.Skip;var _t=new n.LocalMinima;for(_t.Next=null,_t.Y=it.Bot.Y,_t.LeftBound=null,_t.RightBound=it,_t.RightBound.Side=n.EdgeSide.esRight,_t.RightBound.WindDelta=0;it.Bot.X!==it.Prev.Top.X&&this.ReverseHorizontal(it),it.Next.OutIdx!==n.ClipperBase.Skip;)it.NextInLML=it.Next,it=it.Next;return this.InsertLocalMinima(_t),this.m_edges.push(M),!0}this.m_edges.push(M);var Et,Qt=null;for(n.IntPoint.op_Equality(it.Prev.Bot,it.Prev.Top)&&(it=it.Next);it=this.FindNextLocMin(it),it!==Qt;){Qt===null&&(Qt=it);var _t=new n.LocalMinima;_t.Next=null,_t.Y=it.Bot.Y,it.Dx<it.Prev.Dx?(_t.LeftBound=it.Prev,_t.RightBound=it,Et=!1):(_t.LeftBound=it,_t.RightBound=it.Prev,Et=!0),_t.LeftBound.Side=n.EdgeSide.esLeft,_t.RightBound.Side=n.EdgeSide.esRight,u?_t.LeftBound.Next===_t.RightBound?_t.LeftBound.WindDelta=-1:_t.LeftBound.WindDelta=1:_t.LeftBound.WindDelta=0,_t.RightBound.WindDelta=-_t.LeftBound.WindDelta,it=this.ProcessBound(_t.LeftBound,Et),it.OutIdx===n.ClipperBase.Skip&&(it=this.ProcessBound(it,Et));var de=this.ProcessBound(_t.RightBound,!Et);de.OutIdx===n.ClipperBase.Skip&&(de=this.ProcessBound(de,!Et)),_t.LeftBound.OutIdx===n.ClipperBase.Skip?_t.LeftBound=null:_t.RightBound.OutIdx===n.ClipperBase.Skip&&(_t.RightBound=null),this.InsertLocalMinima(_t),Et||(it=de)}return!0},n.ClipperBase.prototype.AddPaths=function(r,c,u){for(var m=!1,M=0,P=r.length;M<P;++M)this.AddPath(r[M],c,u)&&(m=!0);return m},n.ClipperBase.prototype.Pt2IsBetweenPt1AndPt3=function(r,c,u){return n.IntPoint.op_Equality(r,u)||n.IntPoint.op_Equality(r,c)||n.IntPoint.op_Equality(u,c)?!1:r.X!==u.X?c.X>r.X==c.X<u.X:c.Y>r.Y==c.Y<u.Y},n.ClipperBase.prototype.RemoveEdge=function(r){r.Prev.Next=r.Next,r.Next.Prev=r.Prev;var c=r.Next;return r.Prev=null,c},n.ClipperBase.prototype.SetDx=function(r){r.Delta.X=r.Top.X-r.Bot.X,r.Delta.Y=r.Top.Y-r.Bot.Y,r.Delta.Y===0?r.Dx=n.ClipperBase.horizontal:r.Dx=r.Delta.X/r.Delta.Y},n.ClipperBase.prototype.InsertLocalMinima=function(r){if(this.m_MinimaList===null)this.m_MinimaList=r;else if(r.Y>=this.m_MinimaList.Y)r.Next=this.m_MinimaList,this.m_MinimaList=r;else{for(var c=this.m_MinimaList;c.Next!==null&&r.Y<c.Next.Y;)c=c.Next;r.Next=c.Next,c.Next=r}},n.ClipperBase.prototype.PopLocalMinima=function(r,c){return c.v=this.m_CurrentLM,this.m_CurrentLM!==null&&this.m_CurrentLM.Y===r?(this.m_CurrentLM=this.m_CurrentLM.Next,!0):!1},n.ClipperBase.prototype.ReverseHorizontal=function(r){var c=r.Top.X;r.Top.X=r.Bot.X,r.Bot.X=c,n.use_xyz&&(c=r.Top.Z,r.Top.Z=r.Bot.Z,r.Bot.Z=c)},n.ClipperBase.prototype.Reset=function(){if(this.m_CurrentLM=this.m_MinimaList,this.m_CurrentLM!==null){this.m_Scanbeam=null;for(var r=this.m_MinimaList;r!==null;){this.InsertScanbeam(r.Y);var c=r.LeftBound;c!==null&&(c.Curr.X=c.Bot.X,c.Curr.Y=c.Bot.Y,n.use_xyz&&(c.Curr.Z=c.Bot.Z),c.OutIdx=n.ClipperBase.Unassigned),c=r.RightBound,c!==null&&(c.Curr.X=c.Bot.X,c.Curr.Y=c.Bot.Y,n.use_xyz&&(c.Curr.Z=c.Bot.Z),c.OutIdx=n.ClipperBase.Unassigned),r=r.Next}this.m_ActiveEdges=null}},n.ClipperBase.prototype.InsertScanbeam=function(r){if(this.m_Scanbeam===null)this.m_Scanbeam=new n.Scanbeam,this.m_Scanbeam.Next=null,this.m_Scanbeam.Y=r;else if(r>this.m_Scanbeam.Y){var c=new n.Scanbeam;c.Y=r,c.Next=this.m_Scanbeam,this.m_Scanbeam=c}else{for(var u=this.m_Scanbeam;u.Next!==null&&r<=u.Next.Y;)u=u.Next;if(r===u.Y)return;var m=new n.Scanbeam;m.Y=r,m.Next=u.Next,u.Next=m}},n.ClipperBase.prototype.PopScanbeam=function(r){return this.m_Scanbeam===null?(r.v=0,!1):(r.v=this.m_Scanbeam.Y,this.m_Scanbeam=this.m_Scanbeam.Next,!0)},n.ClipperBase.prototype.LocalMinimaPending=function(){return this.m_CurrentLM!==null},n.ClipperBase.prototype.CreateOutRec=function(){var r=new n.OutRec;return r.Idx=n.ClipperBase.Unassigned,r.IsHole=!1,r.IsOpen=!1,r.FirstLeft=null,r.Pts=null,r.BottomPt=null,r.PolyNode=null,this.m_PolyOuts.push(r),r.Idx=this.m_PolyOuts.length-1,r},n.ClipperBase.prototype.DisposeOutRec=function(r){var c=this.m_PolyOuts[r];c.Pts=null,c=null,this.m_PolyOuts[r]=null},n.ClipperBase.prototype.UpdateEdgeIntoAEL=function(r){r.NextInLML===null&&n.Error("UpdateEdgeIntoAEL: invalid call");var c=r.PrevInAEL,u=r.NextInAEL;return r.NextInLML.OutIdx=r.OutIdx,c!==null?c.NextInAEL=r.NextInLML:this.m_ActiveEdges=r.NextInLML,u!==null&&(u.PrevInAEL=r.NextInLML),r.NextInLML.Side=r.Side,r.NextInLML.WindDelta=r.WindDelta,r.NextInLML.WindCnt=r.WindCnt,r.NextInLML.WindCnt2=r.WindCnt2,r=r.NextInLML,r.Curr.X=r.Bot.X,r.Curr.Y=r.Bot.Y,r.PrevInAEL=c,r.NextInAEL=u,n.ClipperBase.IsHorizontal(r)||this.InsertScanbeam(r.Top.Y),r},n.ClipperBase.prototype.SwapPositionsInAEL=function(r,c){if(!(r.NextInAEL===r.PrevInAEL||c.NextInAEL===c.PrevInAEL)){if(r.NextInAEL===c){var u=c.NextInAEL;u!==null&&(u.PrevInAEL=r);var m=r.PrevInAEL;m!==null&&(m.NextInAEL=c),c.PrevInAEL=m,c.NextInAEL=r,r.PrevInAEL=c,r.NextInAEL=u}else if(c.NextInAEL===r){var M=r.NextInAEL;M!==null&&(M.PrevInAEL=c);var P=c.PrevInAEL;P!==null&&(P.NextInAEL=r),r.PrevInAEL=P,r.NextInAEL=c,c.PrevInAEL=r,c.NextInAEL=M}else{var D=r.NextInAEL,Y=r.PrevInAEL;r.NextInAEL=c.NextInAEL,r.NextInAEL!==null&&(r.NextInAEL.PrevInAEL=r),r.PrevInAEL=c.PrevInAEL,r.PrevInAEL!==null&&(r.PrevInAEL.NextInAEL=r),c.NextInAEL=D,c.NextInAEL!==null&&(c.NextInAEL.PrevInAEL=c),c.PrevInAEL=Y,c.PrevInAEL!==null&&(c.PrevInAEL.NextInAEL=c)}r.PrevInAEL===null?this.m_ActiveEdges=r:c.PrevInAEL===null&&(this.m_ActiveEdges=c)}},n.ClipperBase.prototype.DeleteFromAEL=function(r){var c=r.PrevInAEL,u=r.NextInAEL;c===null&&u===null&&r!==this.m_ActiveEdges||(c!==null?c.NextInAEL=u:this.m_ActiveEdges=u,u!==null&&(u.PrevInAEL=c),r.NextInAEL=null,r.PrevInAEL=null)},n.Clipper=function(r){typeof r>"u"&&(r=0),this.m_PolyOuts=null,this.m_ClipType=n.ClipType.ctIntersection,this.m_Scanbeam=null,this.m_Maxima=null,this.m_ActiveEdges=null,this.m_SortedEdges=null,this.m_IntersectList=null,this.m_IntersectNodeComparer=null,this.m_ExecuteLocked=!1,this.m_ClipFillType=n.PolyFillType.pftEvenOdd,this.m_SubjFillType=n.PolyFillType.pftEvenOdd,this.m_Joins=null,this.m_GhostJoins=null,this.m_UsingPolyTree=!1,this.ReverseSolution=!1,this.StrictlySimple=!1,n.ClipperBase.call(this),this.m_Scanbeam=null,this.m_Maxima=null,this.m_ActiveEdges=null,this.m_SortedEdges=null,this.m_IntersectList=new Array,this.m_IntersectNodeComparer=n.MyIntersectNodeSort.Compare,this.m_ExecuteLocked=!1,this.m_UsingPolyTree=!1,this.m_PolyOuts=new Array,this.m_Joins=new Array,this.m_GhostJoins=new Array,this.ReverseSolution=(1&r)!==0,this.StrictlySimple=(2&r)!==0,this.PreserveCollinear=(4&r)!==0,n.use_xyz&&(this.ZFillFunction=null)},n.Clipper.ioReverseSolution=1,n.Clipper.ioStrictlySimple=2,n.Clipper.ioPreserveCollinear=4,n.Clipper.prototype.Clear=function(){this.m_edges.length!==0&&(this.DisposeAllPolyPts(),n.ClipperBase.prototype.Clear.call(this))},n.Clipper.prototype.InsertMaxima=function(r){var c=new n.Maxima;if(c.X=r,this.m_Maxima===null)this.m_Maxima=c,this.m_Maxima.Next=null,this.m_Maxima.Prev=null;else if(r<this.m_Maxima.X)c.Next=this.m_Maxima,c.Prev=null,this.m_Maxima=c;else{for(var u=this.m_Maxima;u.Next!==null&&r>=u.Next.X;)u=u.Next;if(r===u.X)return;c.Next=u.Next,c.Prev=u,u.Next!==null&&(u.Next.Prev=c),u.Next=c}},n.Clipper.prototype.Execute=function(){var r=arguments,c=r.length,u=r[1]instanceof n.PolyTree;if(c===4&&!u){var m=r[0],M=r[1],P=r[2],D=r[3];if(this.m_ExecuteLocked)return!1;this.m_HasOpenPaths&&n.Error("Error: PolyTree struct is needed for open path clipping."),this.m_ExecuteLocked=!0,n.Clear(M),this.m_SubjFillType=P,this.m_ClipFillType=D,this.m_ClipType=m,this.m_UsingPolyTree=!1;try{var Y=this.ExecuteInternal();Y&&this.BuildResult(M)}finally{this.DisposeAllPolyPts(),this.m_ExecuteLocked=!1}return Y}else if(c===4&&u){var m=r[0],$=r[1],P=r[2],D=r[3];if(this.m_ExecuteLocked)return!1;this.m_ExecuteLocked=!0,this.m_SubjFillType=P,this.m_ClipFillType=D,this.m_ClipType=m,this.m_UsingPolyTree=!0;try{var Y=this.ExecuteInternal();Y&&this.BuildResult2($)}finally{this.DisposeAllPolyPts(),this.m_ExecuteLocked=!1}return Y}else if(c===2&&!u){var m=r[0],M=r[1];return this.Execute(m,M,n.PolyFillType.pftEvenOdd,n.PolyFillType.pftEvenOdd)}else if(c===2&&u){var m=r[0],$=r[1];return this.Execute(m,$,n.PolyFillType.pftEvenOdd,n.PolyFillType.pftEvenOdd)}},n.Clipper.prototype.FixHoleLinkage=function(r){if(!(r.FirstLeft===null||r.IsHole!==r.FirstLeft.IsHole&&r.FirstLeft.Pts!==null)){for(var c=r.FirstLeft;c!==null&&(c.IsHole===r.IsHole||c.Pts===null);)c=c.FirstLeft;r.FirstLeft=c}},n.Clipper.prototype.ExecuteInternal=function(){try{this.Reset(),this.m_SortedEdges=null,this.m_Maxima=null;var r={},c={};if(!this.PopScanbeam(r))return!1;for(this.InsertLocalMinimaIntoAEL(r.v);this.PopScanbeam(c)||this.LocalMinimaPending();){if(this.ProcessHorizontals(),this.m_GhostJoins.length=0,!this.ProcessIntersections(c.v))return!1;this.ProcessEdgesAtTopOfScanbeam(c.v),r.v=c.v,this.InsertLocalMinimaIntoAEL(r.v)}var u,m,M;for(m=0,M=this.m_PolyOuts.length;m<M;m++)u=this.m_PolyOuts[m],!(u.Pts===null||u.IsOpen)&&(u.IsHole^this.ReverseSolution)==this.Area$1(u)>0&&this.ReversePolyPtLinks(u.Pts);for(this.JoinCommonEdges(),m=0,M=this.m_PolyOuts.length;m<M;m++)u=this.m_PolyOuts[m],u.Pts!==null&&(u.IsOpen?this.FixupOutPolyline(u):this.FixupOutPolygon(u));return this.StrictlySimple&&this.DoSimplePolygons(),!0}finally{this.m_Joins.length=0,this.m_GhostJoins.length=0}},n.Clipper.prototype.DisposeAllPolyPts=function(){for(var r=0,c=this.m_PolyOuts.length;r<c;++r)this.DisposeOutRec(r);n.Clear(this.m_PolyOuts)},n.Clipper.prototype.AddJoin=function(r,c,u){var m=new n.Join;m.OutPt1=r,m.OutPt2=c,m.OffPt.X=u.X,m.OffPt.Y=u.Y,n.use_xyz&&(m.OffPt.Z=u.Z),this.m_Joins.push(m)},n.Clipper.prototype.AddGhostJoin=function(r,c){var u=new n.Join;u.OutPt1=r,u.OffPt.X=c.X,u.OffPt.Y=c.Y,n.use_xyz&&(u.OffPt.Z=c.Z),this.m_GhostJoins.push(u)},n.Clipper.prototype.SetZ=function(r,c,u){if(this.ZFillFunction!==null){if(r.Z!==0||this.ZFillFunction===null)return;n.IntPoint.op_Equality(r,c.Bot)?r.Z=c.Bot.Z:n.IntPoint.op_Equality(r,c.Top)?r.Z=c.Top.Z:n.IntPoint.op_Equality(r,u.Bot)?r.Z=u.Bot.Z:n.IntPoint.op_Equality(r,u.Top)?r.Z=u.Top.Z:this.ZFillFunction(c.Bot,c.Top,u.Bot,u.Top,r)}},n.Clipper.prototype.InsertLocalMinimaIntoAEL=function(r){for(var c={},u,m;this.PopLocalMinima(r,c);){u=c.v.LeftBound,m=c.v.RightBound;var M=null;if(u===null?(this.InsertEdgeIntoAEL(m,null),this.SetWindingCount(m),this.IsContributing(m)&&(M=this.AddOutPt(m,m.Bot))):m===null?(this.InsertEdgeIntoAEL(u,null),this.SetWindingCount(u),this.IsContributing(u)&&(M=this.AddOutPt(u,u.Bot)),this.InsertScanbeam(u.Top.Y)):(this.InsertEdgeIntoAEL(u,null),this.InsertEdgeIntoAEL(m,u),this.SetWindingCount(u),m.WindCnt=u.WindCnt,m.WindCnt2=u.WindCnt2,this.IsContributing(u)&&(M=this.AddLocalMinPoly(u,m,u.Bot)),this.InsertScanbeam(u.Top.Y)),m!==null&&(n.ClipperBase.IsHorizontal(m)?(m.NextInLML!==null&&this.InsertScanbeam(m.NextInLML.Top.Y),this.AddEdgeToSEL(m)):this.InsertScanbeam(m.Top.Y)),!(u===null||m===null)){if(M!==null&&n.ClipperBase.IsHorizontal(m)&&this.m_GhostJoins.length>0&&m.WindDelta!==0)for(var P=0,D=this.m_GhostJoins.length;P<D;P++){var Y=this.m_GhostJoins[P];this.HorzSegmentsOverlap(Y.OutPt1.Pt.X,Y.OffPt.X,m.Bot.X,m.Top.X)&&this.AddJoin(Y.OutPt1,M,Y.OffPt)}if(u.OutIdx>=0&&u.PrevInAEL!==null&&u.PrevInAEL.Curr.X===u.Bot.X&&u.PrevInAEL.OutIdx>=0&&n.ClipperBase.SlopesEqual5(u.PrevInAEL.Curr,u.PrevInAEL.Top,u.Curr,u.Top,this.m_UseFullRange)&&u.WindDelta!==0&&u.PrevInAEL.WindDelta!==0){var $=this.AddOutPt(u.PrevInAEL,u.Bot);this.AddJoin(M,$,u.Top)}if(u.NextInAEL!==m){if(m.OutIdx>=0&&m.PrevInAEL.OutIdx>=0&&n.ClipperBase.SlopesEqual5(m.PrevInAEL.Curr,m.PrevInAEL.Top,m.Curr,m.Top,this.m_UseFullRange)&&m.WindDelta!==0&&m.PrevInAEL.WindDelta!==0){var $=this.AddOutPt(m.PrevInAEL,m.Bot);this.AddJoin(M,$,m.Top)}var it=u.NextInAEL;if(it!==null)for(;it!==m;)this.IntersectEdges(m,it,u.Curr),it=it.NextInAEL}}}},n.Clipper.prototype.InsertEdgeIntoAEL=function(r,c){if(this.m_ActiveEdges===null)r.PrevInAEL=null,r.NextInAEL=null,this.m_ActiveEdges=r;else if(c===null&&this.E2InsertsBeforeE1(this.m_ActiveEdges,r))r.PrevInAEL=null,r.NextInAEL=this.m_ActiveEdges,this.m_ActiveEdges.PrevInAEL=r,this.m_ActiveEdges=r;else{for(c===null&&(c=this.m_ActiveEdges);c.NextInAEL!==null&&!this.E2InsertsBeforeE1(c.NextInAEL,r);)c=c.NextInAEL;r.NextInAEL=c.NextInAEL,c.NextInAEL!==null&&(c.NextInAEL.PrevInAEL=r),r.PrevInAEL=c,c.NextInAEL=r}},n.Clipper.prototype.E2InsertsBeforeE1=function(r,c){return c.Curr.X===r.Curr.X?c.Top.Y>r.Top.Y?c.Top.X<n.Clipper.TopX(r,c.Top.Y):r.Top.X>n.Clipper.TopX(c,r.Top.Y):c.Curr.X<r.Curr.X},n.Clipper.prototype.IsEvenOddFillType=function(r){return r.PolyTyp===n.PolyType.ptSubject?this.m_SubjFillType===n.PolyFillType.pftEvenOdd:this.m_ClipFillType===n.PolyFillType.pftEvenOdd},n.Clipper.prototype.IsEvenOddAltFillType=function(r){return r.PolyTyp===n.PolyType.ptSubject?this.m_ClipFillType===n.PolyFillType.pftEvenOdd:this.m_SubjFillType===n.PolyFillType.pftEvenOdd},n.Clipper.prototype.IsContributing=function(r){var c,u;switch(r.PolyTyp===n.PolyType.ptSubject?(c=this.m_SubjFillType,u=this.m_ClipFillType):(c=this.m_ClipFillType,u=this.m_SubjFillType),c){case n.PolyFillType.pftEvenOdd:if(r.WindDelta===0&&r.WindCnt!==1)return!1;break;case n.PolyFillType.pftNonZero:if(Math.abs(r.WindCnt)!==1)return!1;break;case n.PolyFillType.pftPositive:if(r.WindCnt!==1)return!1;break;default:if(r.WindCnt!==-1)return!1;break}switch(this.m_ClipType){case n.ClipType.ctIntersection:switch(u){case n.PolyFillType.pftEvenOdd:case n.PolyFillType.pftNonZero:return r.WindCnt2!==0;case n.PolyFillType.pftPositive:return r.WindCnt2>0;default:return r.WindCnt2<0}case n.ClipType.ctUnion:switch(u){case n.PolyFillType.pftEvenOdd:case n.PolyFillType.pftNonZero:return r.WindCnt2===0;case n.PolyFillType.pftPositive:return r.WindCnt2<=0;default:return r.WindCnt2>=0}case n.ClipType.ctDifference:if(r.PolyTyp===n.PolyType.ptSubject)switch(u){case n.PolyFillType.pftEvenOdd:case n.PolyFillType.pftNonZero:return r.WindCnt2===0;case n.PolyFillType.pftPositive:return r.WindCnt2<=0;default:return r.WindCnt2>=0}else switch(u){case n.PolyFillType.pftEvenOdd:case n.PolyFillType.pftNonZero:return r.WindCnt2!==0;case n.PolyFillType.pftPositive:return r.WindCnt2>0;default:return r.WindCnt2<0}case n.ClipType.ctXor:if(r.WindDelta===0)switch(u){case n.PolyFillType.pftEvenOdd:case n.PolyFillType.pftNonZero:return r.WindCnt2===0;case n.PolyFillType.pftPositive:return r.WindCnt2<=0;default:return r.WindCnt2>=0}else return!0}return!0},n.Clipper.prototype.SetWindingCount=function(r){for(var c=r.PrevInAEL;c!==null&&(c.PolyTyp!==r.PolyTyp||c.WindDelta===0);)c=c.PrevInAEL;if(c===null){var u=r.PolyTyp===n.PolyType.ptSubject?this.m_SubjFillType:this.m_ClipFillType;r.WindDelta===0?r.WindCnt=u===n.PolyFillType.pftNegative?-1:1:r.WindCnt=r.WindDelta,r.WindCnt2=0,c=this.m_ActiveEdges}else if(r.WindDelta===0&&this.m_ClipType!==n.ClipType.ctUnion)r.WindCnt=1,r.WindCnt2=c.WindCnt2,c=c.NextInAEL;else if(this.IsEvenOddFillType(r)){if(r.WindDelta===0){for(var m=!0,M=c.PrevInAEL;M!==null;)M.PolyTyp===c.PolyTyp&&M.WindDelta!==0&&(m=!m),M=M.PrevInAEL;r.WindCnt=m?0:1}else r.WindCnt=r.WindDelta;r.WindCnt2=c.WindCnt2,c=c.NextInAEL}else c.WindCnt*c.WindDelta<0?Math.abs(c.WindCnt)>1?c.WindDelta*r.WindDelta<0?r.WindCnt=c.WindCnt:r.WindCnt=c.WindCnt+r.WindDelta:r.WindCnt=r.WindDelta===0?1:r.WindDelta:r.WindDelta===0?r.WindCnt=c.WindCnt<0?c.WindCnt-1:c.WindCnt+1:c.WindDelta*r.WindDelta<0?r.WindCnt=c.WindCnt:r.WindCnt=c.WindCnt+r.WindDelta,r.WindCnt2=c.WindCnt2,c=c.NextInAEL;if(this.IsEvenOddAltFillType(r))for(;c!==r;)c.WindDelta!==0&&(r.WindCnt2=r.WindCnt2===0?1:0),c=c.NextInAEL;else for(;c!==r;)r.WindCnt2+=c.WindDelta,c=c.NextInAEL},n.Clipper.prototype.AddEdgeToSEL=function(r){this.m_SortedEdges===null?(this.m_SortedEdges=r,r.PrevInSEL=null,r.NextInSEL=null):(r.NextInSEL=this.m_SortedEdges,r.PrevInSEL=null,this.m_SortedEdges.PrevInSEL=r,this.m_SortedEdges=r)},n.Clipper.prototype.PopEdgeFromSEL=function(r){if(r.v=this.m_SortedEdges,r.v===null)return!1;var c=r.v;return this.m_SortedEdges=r.v.NextInSEL,this.m_SortedEdges!==null&&(this.m_SortedEdges.PrevInSEL=null),c.NextInSEL=null,c.PrevInSEL=null,!0},n.Clipper.prototype.CopyAELToSEL=function(){var r=this.m_ActiveEdges;for(this.m_SortedEdges=r;r!==null;)r.PrevInSEL=r.PrevInAEL,r.NextInSEL=r.NextInAEL,r=r.NextInAEL},n.Clipper.prototype.SwapPositionsInSEL=function(r,c){if(!(r.NextInSEL===null&&r.PrevInSEL===null)&&!(c.NextInSEL===null&&c.PrevInSEL===null)){if(r.NextInSEL===c){var u=c.NextInSEL;u!==null&&(u.PrevInSEL=r);var m=r.PrevInSEL;m!==null&&(m.NextInSEL=c),c.PrevInSEL=m,c.NextInSEL=r,r.PrevInSEL=c,r.NextInSEL=u}else if(c.NextInSEL===r){var u=r.NextInSEL;u!==null&&(u.PrevInSEL=c);var m=c.PrevInSEL;m!==null&&(m.NextInSEL=r),r.PrevInSEL=m,r.NextInSEL=c,c.PrevInSEL=r,c.NextInSEL=u}else{var u=r.NextInSEL,m=r.PrevInSEL;r.NextInSEL=c.NextInSEL,r.NextInSEL!==null&&(r.NextInSEL.PrevInSEL=r),r.PrevInSEL=c.PrevInSEL,r.PrevInSEL!==null&&(r.PrevInSEL.NextInSEL=r),c.NextInSEL=u,c.NextInSEL!==null&&(c.NextInSEL.PrevInSEL=c),c.PrevInSEL=m,c.PrevInSEL!==null&&(c.PrevInSEL.NextInSEL=c)}r.PrevInSEL===null?this.m_SortedEdges=r:c.PrevInSEL===null&&(this.m_SortedEdges=c)}},n.Clipper.prototype.AddLocalMaxPoly=function(r,c,u){this.AddOutPt(r,u),c.WindDelta===0&&this.AddOutPt(c,u),r.OutIdx===c.OutIdx?(r.OutIdx=-1,c.OutIdx=-1):r.OutIdx<c.OutIdx?this.AppendPolygon(r,c):this.AppendPolygon(c,r)},n.Clipper.prototype.AddLocalMinPoly=function(r,c,u){var m,M,P;if(n.ClipperBase.IsHorizontal(c)||r.Dx>c.Dx?(m=this.AddOutPt(r,u),c.OutIdx=r.OutIdx,r.Side=n.EdgeSide.esLeft,c.Side=n.EdgeSide.esRight,M=r,M.PrevInAEL===c?P=c.PrevInAEL:P=M.PrevInAEL):(m=this.AddOutPt(c,u),r.OutIdx=c.OutIdx,r.Side=n.EdgeSide.esRight,c.Side=n.EdgeSide.esLeft,M=c,M.PrevInAEL===r?P=r.PrevInAEL:P=M.PrevInAEL),P!==null&&P.OutIdx>=0&&P.Top.Y<u.Y&&M.Top.Y<u.Y){var D=n.Clipper.TopX(P,u.Y),Y=n.Clipper.TopX(M,u.Y);if(D===Y&&M.WindDelta!==0&&P.WindDelta!==0&&n.ClipperBase.SlopesEqual5(new n.IntPoint2(D,u.Y),P.Top,new n.IntPoint2(Y,u.Y),M.Top,this.m_UseFullRange)){var $=this.AddOutPt(P,u);this.AddJoin(m,$,M.Top)}}return m},n.Clipper.prototype.AddOutPt=function(r,c){if(r.OutIdx<0){var u=this.CreateOutRec();u.IsOpen=r.WindDelta===0;var m=new n.OutPt;return u.Pts=m,m.Idx=u.Idx,m.Pt.X=c.X,m.Pt.Y=c.Y,n.use_xyz&&(m.Pt.Z=c.Z),m.Next=m,m.Prev=m,u.IsOpen||this.SetHoleState(r,u),r.OutIdx=u.Idx,m}else{var u=this.m_PolyOuts[r.OutIdx],M=u.Pts,P=r.Side===n.EdgeSide.esLeft;if(P&&n.IntPoint.op_Equality(c,M.Pt))return M;if(!P&&n.IntPoint.op_Equality(c,M.Prev.Pt))return M.Prev;var m=new n.OutPt;return m.Idx=u.Idx,m.Pt.X=c.X,m.Pt.Y=c.Y,n.use_xyz&&(m.Pt.Z=c.Z),m.Next=M,m.Prev=M.Prev,m.Prev.Next=m,M.Prev=m,P&&(u.Pts=m),m}},n.Clipper.prototype.GetLastOutPt=function(r){var c=this.m_PolyOuts[r.OutIdx];return r.Side===n.EdgeSide.esLeft?c.Pts:c.Pts.Prev},n.Clipper.prototype.SwapPoints=function(r,c){var u=new n.IntPoint1(r.Value);r.Value.X=c.Value.X,r.Value.Y=c.Value.Y,n.use_xyz&&(r.Value.Z=c.Value.Z),c.Value.X=u.X,c.Value.Y=u.Y,n.use_xyz&&(c.Value.Z=u.Z)},n.Clipper.prototype.HorzSegmentsOverlap=function(r,c,u,m){var M;return r>c&&(M=r,r=c,c=M),u>m&&(M=u,u=m,m=M),r<m&&u<c},n.Clipper.prototype.SetHoleState=function(r,c){for(var u=r.PrevInAEL,m=null;u!==null;)u.OutIdx>=0&&u.WindDelta!==0&&(m===null?m=u:m.OutIdx===u.OutIdx&&(m=null)),u=u.PrevInAEL;m===null?(c.FirstLeft=null,c.IsHole=!1):(c.FirstLeft=this.m_PolyOuts[m.OutIdx],c.IsHole=!c.FirstLeft.IsHole)},n.Clipper.prototype.GetDx=function(r,c){return r.Y===c.Y?n.ClipperBase.horizontal:(c.X-r.X)/(c.Y-r.Y)},n.Clipper.prototype.FirstIsBottomPt=function(r,c){for(var u=r.Prev;n.IntPoint.op_Equality(u.Pt,r.Pt)&&u!==r;)u=u.Prev;var m=Math.abs(this.GetDx(r.Pt,u.Pt));for(u=r.Next;n.IntPoint.op_Equality(u.Pt,r.Pt)&&u!==r;)u=u.Next;var M=Math.abs(this.GetDx(r.Pt,u.Pt));for(u=c.Prev;n.IntPoint.op_Equality(u.Pt,c.Pt)&&u!==c;)u=u.Prev;var P=Math.abs(this.GetDx(c.Pt,u.Pt));for(u=c.Next;n.IntPoint.op_Equality(u.Pt,c.Pt)&&u!==c;)u=u.Next;var D=Math.abs(this.GetDx(c.Pt,u.Pt));return Math.max(m,M)===Math.max(P,D)&&Math.min(m,M)===Math.min(P,D)?this.Area(r)>0:m>=P&&m>=D||M>=P&&M>=D},n.Clipper.prototype.GetBottomPt=function(r){for(var c=null,u=r.Next;u!==r;)u.Pt.Y>r.Pt.Y?(r=u,c=null):u.Pt.Y===r.Pt.Y&&u.Pt.X<=r.Pt.X&&(u.Pt.X<r.Pt.X?(c=null,r=u):u.Next!==r&&u.Prev!==r&&(c=u)),u=u.Next;if(c!==null)for(;c!==u;)for(this.FirstIsBottomPt(u,c)||(r=c),c=c.Next;n.IntPoint.op_Inequality(c.Pt,r.Pt);)c=c.Next;return r},n.Clipper.prototype.GetLowermostRec=function(r,c){r.BottomPt===null&&(r.BottomPt=this.GetBottomPt(r.Pts)),c.BottomPt===null&&(c.BottomPt=this.GetBottomPt(c.Pts));var u=r.BottomPt,m=c.BottomPt;return u.Pt.Y>m.Pt.Y?r:u.Pt.Y<m.Pt.Y?c:u.Pt.X<m.Pt.X?r:u.Pt.X>m.Pt.X||u.Next===u?c:m.Next===m||this.FirstIsBottomPt(u,m)?r:c},n.Clipper.prototype.OutRec1RightOfOutRec2=function(r,c){do if(r=r.FirstLeft,r===c)return!0;while(r!==null);return!1},n.Clipper.prototype.GetOutRec=function(r){for(var c=this.m_PolyOuts[r];c!==this.m_PolyOuts[c.Idx];)c=this.m_PolyOuts[c.Idx];return c},n.Clipper.prototype.AppendPolygon=function(r,c){var u=this.m_PolyOuts[r.OutIdx],m=this.m_PolyOuts[c.OutIdx],M;this.OutRec1RightOfOutRec2(u,m)?M=m:this.OutRec1RightOfOutRec2(m,u)?M=u:M=this.GetLowermostRec(u,m);var P=u.Pts,D=P.Prev,Y=m.Pts,$=Y.Prev;r.Side===n.EdgeSide.esLeft?c.Side===n.EdgeSide.esLeft?(this.ReversePolyPtLinks(Y),Y.Next=P,P.Prev=Y,D.Next=$,$.Prev=D,u.Pts=$):($.Next=P,P.Prev=$,Y.Prev=D,D.Next=Y,u.Pts=Y):c.Side===n.EdgeSide.esRight?(this.ReversePolyPtLinks(Y),D.Next=$,$.Prev=D,Y.Next=P,P.Prev=Y):(D.Next=Y,Y.Prev=D,P.Prev=$,$.Next=P),u.BottomPt=null,M===m&&(m.FirstLeft!==u&&(u.FirstLeft=m.FirstLeft),u.IsHole=m.IsHole),m.Pts=null,m.BottomPt=null,m.FirstLeft=u;var it=r.OutIdx,vt=c.OutIdx;r.OutIdx=-1,c.OutIdx=-1;for(var _t=this.m_ActiveEdges;_t!==null;){if(_t.OutIdx===vt){_t.OutIdx=it,_t.Side=r.Side;break}_t=_t.NextInAEL}m.Idx=u.Idx},n.Clipper.prototype.ReversePolyPtLinks=function(r){if(r!==null){var c,u;c=r;do u=c.Next,c.Next=c.Prev,c.Prev=u,c=u;while(c!==r)}},n.Clipper.SwapSides=function(r,c){var u=r.Side;r.Side=c.Side,c.Side=u},n.Clipper.SwapPolyIndexes=function(r,c){var u=r.OutIdx;r.OutIdx=c.OutIdx,c.OutIdx=u},n.Clipper.prototype.IntersectEdges=function(r,c,u){var m=r.OutIdx>=0,M=c.OutIdx>=0;if(n.use_xyz&&this.SetZ(u,r,c),n.use_lines&&(r.WindDelta===0||c.WindDelta===0)){if(r.WindDelta===0&&c.WindDelta===0)return;r.PolyTyp===c.PolyTyp&&r.WindDelta!==c.WindDelta&&this.m_ClipType===n.ClipType.ctUnion?r.WindDelta===0?M&&(this.AddOutPt(r,u),m&&(r.OutIdx=-1)):m&&(this.AddOutPt(c,u),M&&(c.OutIdx=-1)):r.PolyTyp!==c.PolyTyp&&(r.WindDelta===0&&Math.abs(c.WindCnt)===1&&(this.m_ClipType!==n.ClipType.ctUnion||c.WindCnt2===0)?(this.AddOutPt(r,u),m&&(r.OutIdx=-1)):c.WindDelta===0&&Math.abs(r.WindCnt)===1&&(this.m_ClipType!==n.ClipType.ctUnion||r.WindCnt2===0)&&(this.AddOutPt(c,u),M&&(c.OutIdx=-1)));return}if(r.PolyTyp===c.PolyTyp)if(this.IsEvenOddFillType(r)){var P=r.WindCnt;r.WindCnt=c.WindCnt,c.WindCnt=P}else r.WindCnt+c.WindDelta===0?r.WindCnt=-r.WindCnt:r.WindCnt+=c.WindDelta,c.WindCnt-r.WindDelta===0?c.WindCnt=-c.WindCnt:c.WindCnt-=r.WindDelta;else this.IsEvenOddFillType(c)?r.WindCnt2=r.WindCnt2===0?1:0:r.WindCnt2+=c.WindDelta,this.IsEvenOddFillType(r)?c.WindCnt2=c.WindCnt2===0?1:0:c.WindCnt2-=r.WindDelta;var D,Y,$,it;r.PolyTyp===n.PolyType.ptSubject?(D=this.m_SubjFillType,$=this.m_ClipFillType):(D=this.m_ClipFillType,$=this.m_SubjFillType),c.PolyTyp===n.PolyType.ptSubject?(Y=this.m_SubjFillType,it=this.m_ClipFillType):(Y=this.m_ClipFillType,it=this.m_SubjFillType);var vt,_t;switch(D){case n.PolyFillType.pftPositive:vt=r.WindCnt;break;case n.PolyFillType.pftNegative:vt=-r.WindCnt;break;default:vt=Math.abs(r.WindCnt);break}switch(Y){case n.PolyFillType.pftPositive:_t=c.WindCnt;break;case n.PolyFillType.pftNegative:_t=-c.WindCnt;break;default:_t=Math.abs(c.WindCnt);break}if(m&&M)vt!==0&&vt!==1||_t!==0&&_t!==1||r.PolyTyp!==c.PolyTyp&&this.m_ClipType!==n.ClipType.ctXor?this.AddLocalMaxPoly(r,c,u):(this.AddOutPt(r,u),this.AddOutPt(c,u),n.Clipper.SwapSides(r,c),n.Clipper.SwapPolyIndexes(r,c));else if(m)(_t===0||_t===1)&&(this.AddOutPt(r,u),n.Clipper.SwapSides(r,c),n.Clipper.SwapPolyIndexes(r,c));else if(M)(vt===0||vt===1)&&(this.AddOutPt(c,u),n.Clipper.SwapSides(r,c),n.Clipper.SwapPolyIndexes(r,c));else if((vt===0||vt===1)&&(_t===0||_t===1)){var Et,Qt;switch($){case n.PolyFillType.pftPositive:Et=r.WindCnt2;break;case n.PolyFillType.pftNegative:Et=-r.WindCnt2;break;default:Et=Math.abs(r.WindCnt2);break}switch(it){case n.PolyFillType.pftPositive:Qt=c.WindCnt2;break;case n.PolyFillType.pftNegative:Qt=-c.WindCnt2;break;default:Qt=Math.abs(c.WindCnt2);break}if(r.PolyTyp!==c.PolyTyp)this.AddLocalMinPoly(r,c,u);else if(vt===1&&_t===1)switch(this.m_ClipType){case n.ClipType.ctIntersection:Et>0&&Qt>0&&this.AddLocalMinPoly(r,c,u);break;case n.ClipType.ctUnion:Et<=0&&Qt<=0&&this.AddLocalMinPoly(r,c,u);break;case n.ClipType.ctDifference:(r.PolyTyp===n.PolyType.ptClip&&Et>0&&Qt>0||r.PolyTyp===n.PolyType.ptSubject&&Et<=0&&Qt<=0)&&this.AddLocalMinPoly(r,c,u);break;case n.ClipType.ctXor:this.AddLocalMinPoly(r,c,u);break}else n.Clipper.SwapSides(r,c)}},n.Clipper.prototype.DeleteFromSEL=function(r){var c=r.PrevInSEL,u=r.NextInSEL;c===null&&u===null&&r!==this.m_SortedEdges||(c!==null?c.NextInSEL=u:this.m_SortedEdges=u,u!==null&&(u.PrevInSEL=c),r.NextInSEL=null,r.PrevInSEL=null)},n.Clipper.prototype.ProcessHorizontals=function(){for(var r={};this.PopEdgeFromSEL(r);)this.ProcessHorizontal(r.v)},n.Clipper.prototype.GetHorzDirection=function(r,c){r.Bot.X<r.Top.X?(c.Left=r.Bot.X,c.Right=r.Top.X,c.Dir=n.Direction.dLeftToRight):(c.Left=r.Top.X,c.Right=r.Bot.X,c.Dir=n.Direction.dRightToLeft)},n.Clipper.prototype.ProcessHorizontal=function(r){var c={Dir:null,Left:null,Right:null};this.GetHorzDirection(r,c);for(var u=c.Dir,m=c.Left,M=c.Right,P=r.WindDelta===0,D=r,Y=null;D.NextInLML!==null&&n.ClipperBase.IsHorizontal(D.NextInLML);)D=D.NextInLML;D.NextInLML===null&&(Y=this.GetMaximaPair(D));var $=this.m_Maxima;if($!==null)if(u===n.Direction.dLeftToRight){for(;$!==null&&$.X<=r.Bot.X;)$=$.Next;$!==null&&$.X>=D.Top.X&&($=null)}else{for(;$.Next!==null&&$.Next.X<r.Bot.X;)$=$.Next;$.X<=D.Top.X&&($=null)}for(var it=null;;){for(var vt=r===D,_t=this.GetNextInAEL(r,u);_t!==null;){if($!==null)if(u===n.Direction.dLeftToRight)for(;$!==null&&$.X<_t.Curr.X;)r.OutIdx>=0&&!P&&this.AddOutPt(r,new n.IntPoint2($.X,r.Bot.Y)),$=$.Next;else for(;$!==null&&$.X>_t.Curr.X;)r.OutIdx>=0&&!P&&this.AddOutPt(r,new n.IntPoint2($.X,r.Bot.Y)),$=$.Prev;if(u===n.Direction.dLeftToRight&&_t.Curr.X>M||u===n.Direction.dRightToLeft&&_t.Curr.X<m||_t.Curr.X===r.Top.X&&r.NextInLML!==null&&_t.Dx<r.NextInLML.Dx)break;if(r.OutIdx>=0&&!P){n.use_xyz&&(u===n.Direction.dLeftToRight?this.SetZ(_t.Curr,r,_t):this.SetZ(_t.Curr,_t,r)),it=this.AddOutPt(r,_t.Curr);for(var Et=this.m_SortedEdges;Et!==null;){if(Et.OutIdx>=0&&this.HorzSegmentsOverlap(r.Bot.X,r.Top.X,Et.Bot.X,Et.Top.X)){var Qt=this.GetLastOutPt(Et);this.AddJoin(Qt,it,Et.Top)}Et=Et.NextInSEL}this.AddGhostJoin(it,r.Bot)}if(_t===Y&&vt){r.OutIdx>=0&&this.AddLocalMaxPoly(r,Y,r.Top),this.DeleteFromAEL(r),this.DeleteFromAEL(Y);return}if(u===n.Direction.dLeftToRight){var de=new n.IntPoint2(_t.Curr.X,r.Curr.Y);this.IntersectEdges(r,_t,de)}else{var de=new n.IntPoint2(_t.Curr.X,r.Curr.Y);this.IntersectEdges(_t,r,de)}var _e=this.GetNextInAEL(_t,u);this.SwapPositionsInAEL(r,_t),_t=_e}if(r.NextInLML===null||!n.ClipperBase.IsHorizontal(r.NextInLML))break;r=this.UpdateEdgeIntoAEL(r),r.OutIdx>=0&&this.AddOutPt(r,r.Bot),c={Dir:u,Left:m,Right:M},this.GetHorzDirection(r,c),u=c.Dir,m=c.Left,M=c.Right}if(r.OutIdx>=0&&it===null){it=this.GetLastOutPt(r);for(var Et=this.m_SortedEdges;Et!==null;){if(Et.OutIdx>=0&&this.HorzSegmentsOverlap(r.Bot.X,r.Top.X,Et.Bot.X,Et.Top.X)){var Qt=this.GetLastOutPt(Et);this.AddJoin(Qt,it,Et.Top)}Et=Et.NextInSEL}this.AddGhostJoin(it,r.Top)}if(r.NextInLML!==null)if(r.OutIdx>=0){if(it=this.AddOutPt(r,r.Top),r=this.UpdateEdgeIntoAEL(r),r.WindDelta===0)return;var Ve=r.PrevInAEL,_e=r.NextInAEL;if(Ve!==null&&Ve.Curr.X===r.Bot.X&&Ve.Curr.Y===r.Bot.Y&&Ve.WindDelta===0&&Ve.OutIdx>=0&&Ve.Curr.Y>Ve.Top.Y&&n.ClipperBase.SlopesEqual3(r,Ve,this.m_UseFullRange)){var Qt=this.AddOutPt(Ve,r.Bot);this.AddJoin(it,Qt,r.Top)}else if(_e!==null&&_e.Curr.X===r.Bot.X&&_e.Curr.Y===r.Bot.Y&&_e.WindDelta!==0&&_e.OutIdx>=0&&_e.Curr.Y>_e.Top.Y&&n.ClipperBase.SlopesEqual3(r,_e,this.m_UseFullRange)){var Qt=this.AddOutPt(_e,r.Bot);this.AddJoin(it,Qt,r.Top)}}else r=this.UpdateEdgeIntoAEL(r);else r.OutIdx>=0&&this.AddOutPt(r,r.Top),this.DeleteFromAEL(r)},n.Clipper.prototype.GetNextInAEL=function(r,c){return c===n.Direction.dLeftToRight?r.NextInAEL:r.PrevInAEL},n.Clipper.prototype.IsMinima=function(r){return r!==null&&r.Prev.NextInLML!==r&&r.Next.NextInLML!==r},n.Clipper.prototype.IsMaxima=function(r,c){return r!==null&&r.Top.Y===c&&r.NextInLML===null},n.Clipper.prototype.IsIntermediate=function(r,c){return r.Top.Y===c&&r.NextInLML!==null},n.Clipper.prototype.GetMaximaPair=function(r){return n.IntPoint.op_Equality(r.Next.Top,r.Top)&&r.Next.NextInLML===null?r.Next:n.IntPoint.op_Equality(r.Prev.Top,r.Top)&&r.Prev.NextInLML===null?r.Prev:null},n.Clipper.prototype.GetMaximaPairEx=function(r){var c=this.GetMaximaPair(r);return c===null||c.OutIdx===n.ClipperBase.Skip||c.NextInAEL===c.PrevInAEL&&!n.ClipperBase.IsHorizontal(c)?null:c},n.Clipper.prototype.ProcessIntersections=function(r){if(this.m_ActiveEdges===null)return!0;try{if(this.BuildIntersectList(r),this.m_IntersectList.length===0)return!0;if(this.m_IntersectList.length===1||this.FixupIntersectionOrder())this.ProcessIntersectList();else return!1}catch{this.m_SortedEdges=null,this.m_IntersectList.length=0,n.Error("ProcessIntersections error")}return this.m_SortedEdges=null,!0},n.Clipper.prototype.BuildIntersectList=function(r){if(this.m_ActiveEdges!==null){var c=this.m_ActiveEdges;for(this.m_SortedEdges=c;c!==null;)c.PrevInSEL=c.PrevInAEL,c.NextInSEL=c.NextInAEL,c.Curr.X=n.Clipper.TopX(c,r),c=c.NextInAEL;for(var u=!0;u&&this.m_SortedEdges!==null;){for(u=!1,c=this.m_SortedEdges;c.NextInSEL!==null;){var m=c.NextInSEL,M=new n.IntPoint0;if(c.Curr.X>m.Curr.X){this.IntersectPoint(c,m,M),M.Y<r&&(M=new n.IntPoint2(n.Clipper.TopX(c,r),r));var P=new n.IntersectNode;P.Edge1=c,P.Edge2=m,P.Pt.X=M.X,P.Pt.Y=M.Y,n.use_xyz&&(P.Pt.Z=M.Z),this.m_IntersectList.push(P),this.SwapPositionsInSEL(c,m),u=!0}else c=m}if(c.PrevInSEL!==null)c.PrevInSEL.NextInSEL=null;else break}this.m_SortedEdges=null}},n.Clipper.prototype.EdgesAdjacent=function(r){return r.Edge1.NextInSEL===r.Edge2||r.Edge1.PrevInSEL===r.Edge2},n.Clipper.IntersectNodeSort=function(r,c){return c.Pt.Y-r.Pt.Y},n.Clipper.prototype.FixupIntersectionOrder=function(){this.m_IntersectList.sort(this.m_IntersectNodeComparer),this.CopyAELToSEL();for(var r=this.m_IntersectList.length,c=0;c<r;c++){if(!this.EdgesAdjacent(this.m_IntersectList[c])){for(var u=c+1;u<r&&!this.EdgesAdjacent(this.m_IntersectList[u]);)u++;if(u===r)return!1;var m=this.m_IntersectList[c];this.m_IntersectList[c]=this.m_IntersectList[u],this.m_IntersectList[u]=m}this.SwapPositionsInSEL(this.m_IntersectList[c].Edge1,this.m_IntersectList[c].Edge2)}return!0},n.Clipper.prototype.ProcessIntersectList=function(){for(var r=0,c=this.m_IntersectList.length;r<c;r++){var u=this.m_IntersectList[r];this.IntersectEdges(u.Edge1,u.Edge2,u.Pt),this.SwapPositionsInAEL(u.Edge1,u.Edge2)}this.m_IntersectList.length=0};var Yt=function(r){return r<0?Math.ceil(r-.5):Math.round(r)},Ie=function(r){return r<0?Math.ceil(r-.5):Math.floor(r+.5)},Ke=function(r){return r<0?-Math.round(Math.abs(r)):Math.round(r)},ze=function(r){return r<0?(r-=.5,r<-2147483648?Math.ceil(r):r|0):(r+=.5,r>2147483647?Math.floor(r):r|0)};s.msie?n.Clipper.Round=Yt:s.chromium?n.Clipper.Round=Ke:s.safari?n.Clipper.Round=ze:n.Clipper.Round=Ie,n.Clipper.TopX=function(r,c){return c===r.Top.Y?r.Top.X:r.Bot.X+n.Clipper.Round(r.Dx*(c-r.Bot.Y))},n.Clipper.prototype.IntersectPoint=function(r,c,u){u.X=0,u.Y=0;var m,M;if(r.Dx===c.Dx){u.Y=r.Curr.Y,u.X=n.Clipper.TopX(r,u.Y);return}if(r.Delta.X===0)u.X=r.Bot.X,n.ClipperBase.IsHorizontal(c)?u.Y=c.Bot.Y:(M=c.Bot.Y-c.Bot.X/c.Dx,u.Y=n.Clipper.Round(u.X/c.Dx+M));else if(c.Delta.X===0)u.X=c.Bot.X,n.ClipperBase.IsHorizontal(r)?u.Y=r.Bot.Y:(m=r.Bot.Y-r.Bot.X/r.Dx,u.Y=n.Clipper.Round(u.X/r.Dx+m));else{m=r.Bot.X-r.Bot.Y*r.Dx,M=c.Bot.X-c.Bot.Y*c.Dx;var P=(M-m)/(r.Dx-c.Dx);u.Y=n.Clipper.Round(P),Math.abs(r.Dx)<Math.abs(c.Dx)?u.X=n.Clipper.Round(r.Dx*P+m):u.X=n.Clipper.Round(c.Dx*P+M)}if(u.Y<r.Top.Y||u.Y<c.Top.Y){if(r.Top.Y>c.Top.Y)return u.Y=r.Top.Y,u.X=n.Clipper.TopX(c,r.Top.Y),u.X<r.Top.X;u.Y=c.Top.Y,Math.abs(r.Dx)<Math.abs(c.Dx)?u.X=n.Clipper.TopX(r,u.Y):u.X=n.Clipper.TopX(c,u.Y)}u.Y>r.Curr.Y&&(u.Y=r.Curr.Y,Math.abs(r.Dx)>Math.abs(c.Dx)?u.X=n.Clipper.TopX(c,u.Y):u.X=n.Clipper.TopX(r,u.Y))},n.Clipper.prototype.ProcessEdgesAtTopOfScanbeam=function(r){for(var c=this.m_ActiveEdges;c!==null;){var u=this.IsMaxima(c,r);if(u){var m=this.GetMaximaPairEx(c);u=m===null||!n.ClipperBase.IsHorizontal(m)}if(u){this.StrictlySimple&&this.InsertMaxima(c.Top.X);var M=c.PrevInAEL;this.DoMaxima(c),M===null?c=this.m_ActiveEdges:c=M.NextInAEL}else{if(this.IsIntermediate(c,r)&&n.ClipperBase.IsHorizontal(c.NextInLML)?(c=this.UpdateEdgeIntoAEL(c),c.OutIdx>=0&&this.AddOutPt(c,c.Bot),this.AddEdgeToSEL(c)):(c.Curr.X=n.Clipper.TopX(c,r),c.Curr.Y=r),n.use_xyz&&(c.Top.Y===r?c.Curr.Z=c.Top.Z:c.Bot.Y===r?c.Curr.Z=c.Bot.Z:c.Curr.Z=0),this.StrictlySimple){var M=c.PrevInAEL;if(c.OutIdx>=0&&c.WindDelta!==0&&M!==null&&M.OutIdx>=0&&M.Curr.X===c.Curr.X&&M.WindDelta!==0){var P=new n.IntPoint1(c.Curr);n.use_xyz&&this.SetZ(P,M,c);var D=this.AddOutPt(M,P),Y=this.AddOutPt(c,P);this.AddJoin(D,Y,P)}}c=c.NextInAEL}}for(this.ProcessHorizontals(),this.m_Maxima=null,c=this.m_ActiveEdges;c!==null;){if(this.IsIntermediate(c,r)){var D=null;c.OutIdx>=0&&(D=this.AddOutPt(c,c.Top)),c=this.UpdateEdgeIntoAEL(c);var M=c.PrevInAEL,$=c.NextInAEL;if(M!==null&&M.Curr.X===c.Bot.X&&M.Curr.Y===c.Bot.Y&&D!==null&&M.OutIdx>=0&&M.Curr.Y===M.Top.Y&&n.ClipperBase.SlopesEqual5(c.Curr,c.Top,M.Curr,M.Top,this.m_UseFullRange)&&c.WindDelta!==0&&M.WindDelta!==0){var Y=this.AddOutPt(ePrev2,c.Bot);this.AddJoin(D,Y,c.Top)}else if($!==null&&$.Curr.X===c.Bot.X&&$.Curr.Y===c.Bot.Y&&D!==null&&$.OutIdx>=0&&$.Curr.Y===$.Top.Y&&n.ClipperBase.SlopesEqual5(c.Curr,c.Top,$.Curr,$.Top,this.m_UseFullRange)&&c.WindDelta!==0&&$.WindDelta!==0){var Y=this.AddOutPt($,c.Bot);this.AddJoin(D,Y,c.Top)}}c=c.NextInAEL}},n.Clipper.prototype.DoMaxima=function(r){var c=this.GetMaximaPairEx(r);if(c===null){r.OutIdx>=0&&this.AddOutPt(r,r.Top),this.DeleteFromAEL(r);return}for(var u=r.NextInAEL;u!==null&&u!==c;)this.IntersectEdges(r,u,r.Top),this.SwapPositionsInAEL(r,u),u=r.NextInAEL;r.OutIdx===-1&&c.OutIdx===-1?(this.DeleteFromAEL(r),this.DeleteFromAEL(c)):r.OutIdx>=0&&c.OutIdx>=0?(r.OutIdx>=0&&this.AddLocalMaxPoly(r,c,r.Top),this.DeleteFromAEL(r),this.DeleteFromAEL(c)):n.use_lines&&r.WindDelta===0?(r.OutIdx>=0&&(this.AddOutPt(r,r.Top),r.OutIdx=n.ClipperBase.Unassigned),this.DeleteFromAEL(r),c.OutIdx>=0&&(this.AddOutPt(c,r.Top),c.OutIdx=n.ClipperBase.Unassigned),this.DeleteFromAEL(c)):n.Error("DoMaxima error")},n.Clipper.ReversePaths=function(r){for(var c=0,u=r.length;c<u;c++)r[c].reverse()},n.Clipper.Orientation=function(r){return n.Clipper.Area(r)>=0},n.Clipper.prototype.PointCount=function(r){if(r===null)return 0;var c=0,u=r;do c++,u=u.Next;while(u!==r);return c},n.Clipper.prototype.BuildResult=function(r){n.Clear(r);for(var c=0,u=this.m_PolyOuts.length;c<u;c++){var m=this.m_PolyOuts[c];if(m.Pts!==null){var M=m.Pts.Prev,P=this.PointCount(M);if(!(P<2)){for(var D=new Array(P),Y=0;Y<P;Y++)D[Y]=M.Pt,M=M.Prev;r.push(D)}}}},n.Clipper.prototype.BuildResult2=function(r){r.Clear();for(var c=0,u=this.m_PolyOuts.length;c<u;c++){var m=this.m_PolyOuts[c],M=this.PointCount(m.Pts);if(!(m.IsOpen&&M<2||!m.IsOpen&&M<3)){this.FixHoleLinkage(m);var P=new n.PolyNode;r.m_AllPolys.push(P),m.PolyNode=P,P.m_polygon.length=M;for(var D=m.Pts.Prev,Y=0;Y<M;Y++)P.m_polygon[Y]=D.Pt,D=D.Prev}}for(var c=0,u=this.m_PolyOuts.length;c<u;c++){var m=this.m_PolyOuts[c];m.PolyNode!==null&&(m.IsOpen?(m.PolyNode.IsOpen=!0,r.AddChild(m.PolyNode)):m.FirstLeft!==null&&m.FirstLeft.PolyNode!==null?m.FirstLeft.PolyNode.AddChild(m.PolyNode):r.AddChild(m.PolyNode))}},n.Clipper.prototype.FixupOutPolyline=function(r){for(var c=r.Pts,u=c.Prev;c!==u;)if(c=c.Next,n.IntPoint.op_Equality(c.Pt,c.Prev.Pt)){c===u&&(u=c.Prev);var m=c.Prev;m.Next=c.Next,c.Next.Prev=m,c=m}c===c.Prev&&(r.Pts=null)},n.Clipper.prototype.FixupOutPolygon=function(r){var c=null;r.BottomPt=null;for(var u=r.Pts,m=this.PreserveCollinear||this.StrictlySimple;;){if(u.Prev===u||u.Prev===u.Next){r.Pts=null;return}if(n.IntPoint.op_Equality(u.Pt,u.Next.Pt)||n.IntPoint.op_Equality(u.Pt,u.Prev.Pt)||n.ClipperBase.SlopesEqual4(u.Prev.Pt,u.Pt,u.Next.Pt,this.m_UseFullRange)&&(!m||!this.Pt2IsBetweenPt1AndPt3(u.Prev.Pt,u.Pt,u.Next.Pt)))c=null,u.Prev.Next=u.Next,u.Next.Prev=u.Prev,u=u.Prev;else{if(u===c)break;c===null&&(c=u),u=u.Next}}r.Pts=u},n.Clipper.prototype.DupOutPt=function(r,c){var u=new n.OutPt;return u.Pt.X=r.Pt.X,u.Pt.Y=r.Pt.Y,n.use_xyz&&(u.Pt.Z=r.Pt.Z),u.Idx=r.Idx,c?(u.Next=r.Next,u.Prev=r,r.Next.Prev=u,r.Next=u):(u.Prev=r.Prev,u.Next=r,r.Prev.Next=u,r.Prev=u),u},n.Clipper.prototype.GetOverlap=function(r,c,u,m,M){return r<c?u<m?(M.Left=Math.max(r,u),M.Right=Math.min(c,m)):(M.Left=Math.max(r,m),M.Right=Math.min(c,u)):u<m?(M.Left=Math.max(c,u),M.Right=Math.min(r,m)):(M.Left=Math.max(c,m),M.Right=Math.min(r,u)),M.Left<M.Right},n.Clipper.prototype.JoinHorz=function(r,c,u,m,M,P){var D=r.Pt.X>c.Pt.X?n.Direction.dRightToLeft:n.Direction.dLeftToRight,Y=u.Pt.X>m.Pt.X?n.Direction.dRightToLeft:n.Direction.dLeftToRight;if(D===Y)return!1;if(D===n.Direction.dLeftToRight){for(;r.Next.Pt.X<=M.X&&r.Next.Pt.X>=r.Pt.X&&r.Next.Pt.Y===M.Y;)r=r.Next;P&&r.Pt.X!==M.X&&(r=r.Next),c=this.DupOutPt(r,!P),n.IntPoint.op_Inequality(c.Pt,M)&&(r=c,r.Pt.X=M.X,r.Pt.Y=M.Y,n.use_xyz&&(r.Pt.Z=M.Z),c=this.DupOutPt(r,!P))}else{for(;r.Next.Pt.X>=M.X&&r.Next.Pt.X<=r.Pt.X&&r.Next.Pt.Y===M.Y;)r=r.Next;!P&&r.Pt.X!==M.X&&(r=r.Next),c=this.DupOutPt(r,P),n.IntPoint.op_Inequality(c.Pt,M)&&(r=c,r.Pt.X=M.X,r.Pt.Y=M.Y,n.use_xyz&&(r.Pt.Z=M.Z),c=this.DupOutPt(r,P))}if(Y===n.Direction.dLeftToRight){for(;u.Next.Pt.X<=M.X&&u.Next.Pt.X>=u.Pt.X&&u.Next.Pt.Y===M.Y;)u=u.Next;P&&u.Pt.X!==M.X&&(u=u.Next),m=this.DupOutPt(u,!P),n.IntPoint.op_Inequality(m.Pt,M)&&(u=m,u.Pt.X=M.X,u.Pt.Y=M.Y,n.use_xyz&&(u.Pt.Z=M.Z),m=this.DupOutPt(u,!P))}else{for(;u.Next.Pt.X>=M.X&&u.Next.Pt.X<=u.Pt.X&&u.Next.Pt.Y===M.Y;)u=u.Next;!P&&u.Pt.X!==M.X&&(u=u.Next),m=this.DupOutPt(u,P),n.IntPoint.op_Inequality(m.Pt,M)&&(u=m,u.Pt.X=M.X,u.Pt.Y=M.Y,n.use_xyz&&(u.Pt.Z=M.Z),m=this.DupOutPt(u,P))}return D===n.Direction.dLeftToRight===P?(r.Prev=u,u.Next=r,c.Next=m,m.Prev=c):(r.Next=u,u.Prev=r,c.Prev=m,m.Next=c),!0},n.Clipper.prototype.JoinPoints=function(r,c,u){var m=r.OutPt1,M=new n.OutPt,P=r.OutPt2,D=new n.OutPt,Y=r.OutPt1.Pt.Y===r.OffPt.Y;if(Y&&n.IntPoint.op_Equality(r.OffPt,r.OutPt1.Pt)&&n.IntPoint.op_Equality(r.OffPt,r.OutPt2.Pt)){if(c!==u)return!1;for(M=r.OutPt1.Next;M!==m&&n.IntPoint.op_Equality(M.Pt,r.OffPt);)M=M.Next;var $=M.Pt.Y>r.OffPt.Y;for(D=r.OutPt2.Next;D!==P&&n.IntPoint.op_Equality(D.Pt,r.OffPt);)D=D.Next;var it=D.Pt.Y>r.OffPt.Y;return $===it?!1:$?(M=this.DupOutPt(m,!1),D=this.DupOutPt(P,!0),m.Prev=P,P.Next=m,M.Next=D,D.Prev=M,r.OutPt1=m,r.OutPt2=M,!0):(M=this.DupOutPt(m,!0),D=this.DupOutPt(P,!1),m.Next=P,P.Prev=m,M.Prev=D,D.Next=M,r.OutPt1=m,r.OutPt2=M,!0)}else if(Y){for(M=m;m.Prev.Pt.Y===m.Pt.Y&&m.Prev!==M&&m.Prev!==P;)m=m.Prev;for(;M.Next.Pt.Y===M.Pt.Y&&M.Next!==m&&M.Next!==P;)M=M.Next;if(M.Next===m||M.Next===P)return!1;for(D=P;P.Prev.Pt.Y===P.Pt.Y&&P.Prev!==D&&P.Prev!==M;)P=P.Prev;for(;D.Next.Pt.Y===D.Pt.Y&&D.Next!==P&&D.Next!==m;)D=D.Next;if(D.Next===P||D.Next===m)return!1;var vt={Left:null,Right:null};if(!this.GetOverlap(m.Pt.X,M.Pt.X,P.Pt.X,D.Pt.X,vt))return!1;var _t=vt.Left,Et=vt.Right,Qt=new n.IntPoint0,de;return m.Pt.X>=_t&&m.Pt.X<=Et?(Qt.X=m.Pt.X,Qt.Y=m.Pt.Y,n.use_xyz&&(Qt.Z=m.Pt.Z),de=m.Pt.X>M.Pt.X):P.Pt.X>=_t&&P.Pt.X<=Et?(Qt.X=P.Pt.X,Qt.Y=P.Pt.Y,n.use_xyz&&(Qt.Z=P.Pt.Z),de=P.Pt.X>D.Pt.X):M.Pt.X>=_t&&M.Pt.X<=Et?(Qt.X=M.Pt.X,Qt.Y=M.Pt.Y,n.use_xyz&&(Qt.Z=M.Pt.Z),de=M.Pt.X>m.Pt.X):(Qt.X=D.Pt.X,Qt.Y=D.Pt.Y,n.use_xyz&&(Qt.Z=D.Pt.Z),de=D.Pt.X>P.Pt.X),r.OutPt1=m,r.OutPt2=P,this.JoinHorz(m,M,P,D,Qt,de)}else{for(M=m.Next;n.IntPoint.op_Equality(M.Pt,m.Pt)&&M!==m;)M=M.Next;var _e=M.Pt.Y>m.Pt.Y||!n.ClipperBase.SlopesEqual4(m.Pt,M.Pt,r.OffPt,this.m_UseFullRange);if(_e){for(M=m.Prev;n.IntPoint.op_Equality(M.Pt,m.Pt)&&M!==m;)M=M.Prev;if(M.Pt.Y>m.Pt.Y||!n.ClipperBase.SlopesEqual4(m.Pt,M.Pt,r.OffPt,this.m_UseFullRange))return!1}for(D=P.Next;n.IntPoint.op_Equality(D.Pt,P.Pt)&&D!==P;)D=D.Next;var Ve=D.Pt.Y>P.Pt.Y||!n.ClipperBase.SlopesEqual4(P.Pt,D.Pt,r.OffPt,this.m_UseFullRange);if(Ve){for(D=P.Prev;n.IntPoint.op_Equality(D.Pt,P.Pt)&&D!==P;)D=D.Prev;if(D.Pt.Y>P.Pt.Y||!n.ClipperBase.SlopesEqual4(P.Pt,D.Pt,r.OffPt,this.m_UseFullRange))return!1}return M===m||D===P||M===D||c===u&&_e===Ve?!1:_e?(M=this.DupOutPt(m,!1),D=this.DupOutPt(P,!0),m.Prev=P,P.Next=m,M.Next=D,D.Prev=M,r.OutPt1=m,r.OutPt2=M,!0):(M=this.DupOutPt(m,!0),D=this.DupOutPt(P,!1),m.Next=P,P.Prev=m,M.Prev=D,D.Next=M,r.OutPt1=m,r.OutPt2=M,!0)}},n.Clipper.GetBounds=function(r){for(var c=0,u=r.length;c<u&&r[c].length===0;)c++;if(c===u)return new n.IntRect(0,0,0,0);var m=new n.IntRect;for(m.left=r[c][0].X,m.right=m.left,m.top=r[c][0].Y,m.bottom=m.top;c<u;c++)for(var M=0,P=r[c].length;M<P;M++)r[c][M].X<m.left?m.left=r[c][M].X:r[c][M].X>m.right&&(m.right=r[c][M].X),r[c][M].Y<m.top?m.top=r[c][M].Y:r[c][M].Y>m.bottom&&(m.bottom=r[c][M].Y);return m},n.Clipper.prototype.GetBounds2=function(r){var c=r,u=new n.IntRect;for(u.left=r.Pt.X,u.right=r.Pt.X,u.top=r.Pt.Y,u.bottom=r.Pt.Y,r=r.Next;r!==c;)r.Pt.X<u.left&&(u.left=r.Pt.X),r.Pt.X>u.right&&(u.right=r.Pt.X),r.Pt.Y<u.top&&(u.top=r.Pt.Y),r.Pt.Y>u.bottom&&(u.bottom=r.Pt.Y),r=r.Next;return u},n.Clipper.PointInPolygon=function(r,c){var u=0,m=c.length;if(m<3)return 0;for(var M=c[0],P=1;P<=m;++P){var D=P===m?c[0]:c[P];if(D.Y===r.Y&&(D.X===r.X||M.Y===r.Y&&D.X>r.X==M.X<r.X))return-1;if(M.Y<r.Y!=D.Y<r.Y){if(M.X>=r.X)if(D.X>r.X)u=1-u;else{var Y=(M.X-r.X)*(D.Y-r.Y)-(D.X-r.X)*(M.Y-r.Y);if(Y===0)return-1;Y>0==D.Y>M.Y&&(u=1-u)}else if(D.X>r.X){var Y=(M.X-r.X)*(D.Y-r.Y)-(D.X-r.X)*(M.Y-r.Y);if(Y===0)return-1;Y>0==D.Y>M.Y&&(u=1-u)}}M=D}return u},n.Clipper.prototype.PointInPolygon=function(r,c){var u=0,m=c,M=r.X,P=r.Y,D=c.Pt.X,Y=c.Pt.Y;do{c=c.Next;var $=c.Pt.X,it=c.Pt.Y;if(it===P&&($===M||Y===P&&$>M==D<M))return-1;if(Y<P!=it<P){if(D>=M)if($>M)u=1-u;else{var vt=(D-M)*(it-P)-($-M)*(Y-P);if(vt===0)return-1;vt>0==it>Y&&(u=1-u)}else if($>M){var vt=(D-M)*(it-P)-($-M)*(Y-P);if(vt===0)return-1;vt>0==it>Y&&(u=1-u)}}D=$,Y=it}while(m!==c);return u},n.Clipper.prototype.Poly2ContainsPoly1=function(r,c){var u=r;do{var m=this.PointInPolygon(u.Pt,c);if(m>=0)return m>0;u=u.Next}while(u!==r);return!0},n.Clipper.prototype.FixupFirstLefts1=function(r,c){for(var u,m,M=0,P=this.m_PolyOuts.length;M<P;M++)u=this.m_PolyOuts[M],m=n.Clipper.ParseFirstLeft(u.FirstLeft),u.Pts!==null&&m===r&&this.Poly2ContainsPoly1(u.Pts,c.Pts)&&(u.FirstLeft=c)},n.Clipper.prototype.FixupFirstLefts2=function(r,c){for(var u=c.FirstLeft,m,M,P=0,D=this.m_PolyOuts.length;P<D;P++)m=this.m_PolyOuts[P],!(m.Pts===null||m===c||m===r)&&(M=n.Clipper.ParseFirstLeft(m.FirstLeft),!(M!==u&&M!==r&&M!==c)&&(this.Poly2ContainsPoly1(m.Pts,r.Pts)?m.FirstLeft=r:this.Poly2ContainsPoly1(m.Pts,c.Pts)?m.FirstLeft=c:(m.FirstLeft===r||m.FirstLeft===c)&&(m.FirstLeft=u)))},n.Clipper.prototype.FixupFirstLefts3=function(r,c){for(var u,m,M=0,P=this.m_PolyOuts.length;M<P;M++)u=this.m_PolyOuts[M],m=n.Clipper.ParseFirstLeft(u.FirstLeft),u.Pts!==null&&m===r&&(u.FirstLeft=c)},n.Clipper.ParseFirstLeft=function(r){for(;r!==null&&r.Pts===null;)r=r.FirstLeft;return r},n.Clipper.prototype.JoinCommonEdges=function(){for(var r=0,c=this.m_Joins.length;r<c;r++){var u=this.m_Joins[r],m=this.GetOutRec(u.OutPt1.Idx),M=this.GetOutRec(u.OutPt2.Idx);if(!(m.Pts===null||M.Pts===null)&&!(m.IsOpen||M.IsOpen)){var P;m===M?P=m:this.OutRec1RightOfOutRec2(m,M)?P=M:this.OutRec1RightOfOutRec2(M,m)?P=m:P=this.GetLowermostRec(m,M),this.JoinPoints(u,m,M)&&(m===M?(m.Pts=u.OutPt1,m.BottomPt=null,M=this.CreateOutRec(),M.Pts=u.OutPt2,this.UpdateOutPtIdxs(M),this.Poly2ContainsPoly1(M.Pts,m.Pts)?(M.IsHole=!m.IsHole,M.FirstLeft=m,this.m_UsingPolyTree&&this.FixupFirstLefts2(M,m),(M.IsHole^this.ReverseSolution)==this.Area$1(M)>0&&this.ReversePolyPtLinks(M.Pts)):this.Poly2ContainsPoly1(m.Pts,M.Pts)?(M.IsHole=m.IsHole,m.IsHole=!M.IsHole,M.FirstLeft=m.FirstLeft,m.FirstLeft=M,this.m_UsingPolyTree&&this.FixupFirstLefts2(m,M),(m.IsHole^this.ReverseSolution)==this.Area$1(m)>0&&this.ReversePolyPtLinks(m.Pts)):(M.IsHole=m.IsHole,M.FirstLeft=m.FirstLeft,this.m_UsingPolyTree&&this.FixupFirstLefts1(m,M))):(M.Pts=null,M.BottomPt=null,M.Idx=m.Idx,m.IsHole=P.IsHole,P===M&&(m.FirstLeft=M.FirstLeft),M.FirstLeft=m,this.m_UsingPolyTree&&this.FixupFirstLefts3(M,m)))}}},n.Clipper.prototype.UpdateOutPtIdxs=function(r){var c=r.Pts;do c.Idx=r.Idx,c=c.Prev;while(c!==r.Pts)},n.Clipper.prototype.DoSimplePolygons=function(){for(var r=0;r<this.m_PolyOuts.length;){var c=this.m_PolyOuts[r++],u=c.Pts;if(!(u===null||c.IsOpen))do{for(var m=u.Next;m!==c.Pts;){if(n.IntPoint.op_Equality(u.Pt,m.Pt)&&m.Next!==u&&m.Prev!==u){var M=u.Prev,P=m.Prev;u.Prev=P,P.Next=u,m.Prev=M,M.Next=m,c.Pts=u;var D=this.CreateOutRec();D.Pts=m,this.UpdateOutPtIdxs(D),this.Poly2ContainsPoly1(D.Pts,c.Pts)?(D.IsHole=!c.IsHole,D.FirstLeft=c,this.m_UsingPolyTree&&this.FixupFirstLefts2(D,c)):this.Poly2ContainsPoly1(c.Pts,D.Pts)?(D.IsHole=c.IsHole,c.IsHole=!D.IsHole,D.FirstLeft=c.FirstLeft,c.FirstLeft=D,this.m_UsingPolyTree&&this.FixupFirstLefts2(c,D)):(D.IsHole=c.IsHole,D.FirstLeft=c.FirstLeft,this.m_UsingPolyTree&&this.FixupFirstLefts1(c,D)),m=u}m=m.Next}u=u.Next}while(u!==c.Pts)}},n.Clipper.Area=function(r){if(!Array.isArray(r))return 0;var c=r.length;if(c<3)return 0;for(var u=0,m=0,M=c-1;m<c;++m)u+=(r[M].X+r[m].X)*(r[M].Y-r[m].Y),M=m;return-u*.5},n.Clipper.prototype.Area=function(r){var c=r;if(r===null)return 0;var u=0;do u=u+(r.Prev.Pt.X+r.Pt.X)*(r.Prev.Pt.Y-r.Pt.Y),r=r.Next;while(r!==c);return u*.5},n.Clipper.prototype.Area$1=function(r){return this.Area(r.Pts)},n.Clipper.SimplifyPolygon=function(r,c){var u=new Array,m=new n.Clipper(0);return m.StrictlySimple=!0,m.AddPath(r,n.PolyType.ptSubject,!0),m.Execute(n.ClipType.ctUnion,u,c,c),u},n.Clipper.SimplifyPolygons=function(r,c){typeof c>"u"&&(c=n.PolyFillType.pftEvenOdd);var u=new Array,m=new n.Clipper(0);return m.StrictlySimple=!0,m.AddPaths(r,n.PolyType.ptSubject,!0),m.Execute(n.ClipType.ctUnion,u,c,c),u},n.Clipper.DistanceSqrd=function(r,c){var u=r.X-c.X,m=r.Y-c.Y;return u*u+m*m},n.Clipper.DistanceFromLineSqrd=function(r,c,u){var m=c.Y-u.Y,M=u.X-c.X,P=m*c.X+M*c.Y;return P=m*r.X+M*r.Y-P,P*P/(m*m+M*M)},n.Clipper.SlopesNearCollinear=function(r,c,u,m){return Math.abs(r.X-c.X)>Math.abs(r.Y-c.Y)?r.X>c.X==r.X<u.X?n.Clipper.DistanceFromLineSqrd(r,c,u)<m:c.X>r.X==c.X<u.X?n.Clipper.DistanceFromLineSqrd(c,r,u)<m:n.Clipper.DistanceFromLineSqrd(u,r,c)<m:r.Y>c.Y==r.Y<u.Y?n.Clipper.DistanceFromLineSqrd(r,c,u)<m:c.Y>r.Y==c.Y<u.Y?n.Clipper.DistanceFromLineSqrd(c,r,u)<m:n.Clipper.DistanceFromLineSqrd(u,r,c)<m},n.Clipper.PointsAreClose=function(r,c,u){var m=r.X-c.X,M=r.Y-c.Y;return m*m+M*M<=u},n.Clipper.ExcludeOp=function(r){var c=r.Prev;return c.Next=r.Next,r.Next.Prev=c,c.Idx=0,c},n.Clipper.CleanPolygon=function(r,c){typeof c>"u"&&(c=1.415);var u=r.length;if(u===0)return new Array;for(var m=new Array(u),M=0;M<u;++M)m[M]=new n.OutPt;for(var M=0;M<u;++M)m[M].Pt=r[M],m[M].Next=m[(M+1)%u],m[M].Next.Prev=m[M],m[M].Idx=0;for(var P=c*c,D=m[0];D.Idx===0&&D.Next!==D.Prev;)n.Clipper.PointsAreClose(D.Pt,D.Prev.Pt,P)?(D=n.Clipper.ExcludeOp(D),u--):n.Clipper.PointsAreClose(D.Prev.Pt,D.Next.Pt,P)?(n.Clipper.ExcludeOp(D.Next),D=n.Clipper.ExcludeOp(D),u-=2):n.Clipper.SlopesNearCollinear(D.Prev.Pt,D.Pt,D.Next.Pt,P)?(D=n.Clipper.ExcludeOp(D),u--):(D.Idx=1,D=D.Next);u<3&&(u=0);for(var Y=new Array(u),M=0;M<u;++M)Y[M]=new n.IntPoint1(D.Pt),D=D.Next;return m=null,Y},n.Clipper.CleanPolygons=function(r,c){for(var u=new Array(r.length),m=0,M=r.length;m<M;m++)u[m]=n.Clipper.CleanPolygon(r[m],c);return u},n.Clipper.Minkowski=function(r,c,u,m){var M=m?1:0,P=r.length,D=c.length,Y=new Array;if(u)for(var $=0;$<D;$++){for(var it=new Array(P),vt=0,_t=r.length,Et=r[vt];vt<_t;vt++,Et=r[vt])it[vt]=new n.IntPoint2(c[$].X+Et.X,c[$].Y+Et.Y);Y.push(it)}else for(var $=0;$<D;$++){for(var it=new Array(P),vt=0,_t=r.length,Et=r[vt];vt<_t;vt++,Et=r[vt])it[vt]=new n.IntPoint2(c[$].X-Et.X,c[$].Y-Et.Y);Y.push(it)}for(var Qt=new Array,$=0;$<D-1+M;$++)for(var vt=0;vt<P;vt++){var de=new Array;de.push(Y[$%D][vt%P]),de.push(Y[($+1)%D][vt%P]),de.push(Y[($+1)%D][(vt+1)%P]),de.push(Y[$%D][(vt+1)%P]),n.Clipper.Orientation(de)||de.reverse(),Qt.push(de)}return Qt},n.Clipper.MinkowskiSum=function(r,c,u){if(c[0]instanceof Array){for(var M=c,D=new n.Paths,P=new n.Clipper,Y=0;Y<M.length;++Y){var $=n.Clipper.Minkowski(r,M[Y],!0,u);if(P.AddPaths($,n.PolyType.ptSubject,!0),u){var m=n.Clipper.TranslatePath(M[Y],r[0]);P.AddPath(m,n.PolyType.ptClip,!0)}}return P.Execute(n.ClipType.ctUnion,D,n.PolyFillType.pftNonZero,n.PolyFillType.pftNonZero),D}else{var m=c,M=n.Clipper.Minkowski(r,m,!0,u),P=new n.Clipper;return P.AddPaths(M,n.PolyType.ptSubject,!0),P.Execute(n.ClipType.ctUnion,M,n.PolyFillType.pftNonZero,n.PolyFillType.pftNonZero),M}},n.Clipper.TranslatePath=function(r,c){for(var u=new n.Path,m=0;m<r.length;m++)u.push(new n.IntPoint2(r[m].X+c.X,r[m].Y+c.Y));return u},n.Clipper.MinkowskiDiff=function(r,c){var u=n.Clipper.Minkowski(r,c,!1,!0),m=new n.Clipper;return m.AddPaths(u,n.PolyType.ptSubject,!0),m.Execute(n.ClipType.ctUnion,u,n.PolyFillType.pftNonZero,n.PolyFillType.pftNonZero),u},n.Clipper.PolyTreeToPaths=function(r){var c=new Array;return n.Clipper.AddPolyNodeToPaths(r,n.Clipper.NodeType.ntAny,c),c},n.Clipper.AddPolyNodeToPaths=function(r,c,u){var m=!0;switch(c){case n.Clipper.NodeType.ntOpen:return;case n.Clipper.NodeType.ntClosed:m=!r.IsOpen;break;default:break}r.m_polygon.length>0&&m&&u.push(r.m_polygon);for(var M=0,P=r.Childs(),D=P.length,Y=P[M];M<D;M++,Y=P[M])n.Clipper.AddPolyNodeToPaths(Y,c,u)},n.Clipper.OpenPathsFromPolyTree=function(r){for(var c=new n.Paths,u=0,m=r.ChildCount();u<m;u++)r.Childs()[u].IsOpen&&c.push(r.Childs()[u].m_polygon);return c},n.Clipper.ClosedPathsFromPolyTree=function(r){var c=new n.Paths;return n.Clipper.AddPolyNodeToPaths(r,n.Clipper.NodeType.ntClosed,c),c},ye(n.Clipper,n.ClipperBase),n.Clipper.NodeType={ntAny:0,ntOpen:1,ntClosed:2},n.ClipperOffset=function(r,c){typeof r>"u"&&(r=2),typeof c>"u"&&(c=n.ClipperOffset.def_arc_tolerance),this.m_destPolys=new n.Paths,this.m_srcPoly=new n.Path,this.m_destPoly=new n.Path,this.m_normals=new Array,this.m_delta=0,this.m_sinA=0,this.m_sin=0,this.m_cos=0,this.m_miterLim=0,this.m_StepsPerRad=0,this.m_lowest=new n.IntPoint0,this.m_polyNodes=new n.PolyNode,this.MiterLimit=r,this.ArcTolerance=c,this.m_lowest.X=-1},n.ClipperOffset.two_pi=6.28318530717959,n.ClipperOffset.def_arc_tolerance=.25,n.ClipperOffset.prototype.Clear=function(){n.Clear(this.m_polyNodes.Childs()),this.m_lowest.X=-1},n.ClipperOffset.Round=n.Clipper.Round,n.ClipperOffset.prototype.AddPath=function(r,c,u){var m=r.length-1;if(!(m<0)){var M=new n.PolyNode;if(M.m_jointype=c,M.m_endtype=u,u===n.EndType.etClosedLine||u===n.EndType.etClosedPolygon)for(;m>0&&n.IntPoint.op_Equality(r[0],r[m]);)m--;M.m_polygon.push(r[0]);for(var P=0,D=0,Y=1;Y<=m;Y++)n.IntPoint.op_Inequality(M.m_polygon[P],r[Y])&&(P++,M.m_polygon.push(r[Y]),(r[Y].Y>M.m_polygon[D].Y||r[Y].Y===M.m_polygon[D].Y&&r[Y].X<M.m_polygon[D].X)&&(D=P));if(!(u===n.EndType.etClosedPolygon&&P<2)&&(this.m_polyNodes.AddChild(M),u===n.EndType.etClosedPolygon))if(this.m_lowest.X<0)this.m_lowest=new n.IntPoint2(this.m_polyNodes.ChildCount()-1,D);else{var $=this.m_polyNodes.Childs()[this.m_lowest.X].m_polygon[this.m_lowest.Y];(M.m_polygon[D].Y>$.Y||M.m_polygon[D].Y===$.Y&&M.m_polygon[D].X<$.X)&&(this.m_lowest=new n.IntPoint2(this.m_polyNodes.ChildCount()-1,D))}}},n.ClipperOffset.prototype.AddPaths=function(r,c,u){for(var m=0,M=r.length;m<M;m++)this.AddPath(r[m],c,u)},n.ClipperOffset.prototype.FixOrientations=function(){if(this.m_lowest.X>=0&&!n.Clipper.Orientation(this.m_polyNodes.Childs()[this.m_lowest.X].m_polygon))for(var r=0;r<this.m_polyNodes.ChildCount();r++){var c=this.m_polyNodes.Childs()[r];(c.m_endtype===n.EndType.etClosedPolygon||c.m_endtype===n.EndType.etClosedLine&&n.Clipper.Orientation(c.m_polygon))&&c.m_polygon.reverse()}else for(var r=0;r<this.m_polyNodes.ChildCount();r++){var c=this.m_polyNodes.Childs()[r];c.m_endtype===n.EndType.etClosedLine&&!n.Clipper.Orientation(c.m_polygon)&&c.m_polygon.reverse()}},n.ClipperOffset.GetUnitNormal=function(r,c){var u=c.X-r.X,m=c.Y-r.Y;if(u===0&&m===0)return new n.DoublePoint2(0,0);var M=1/Math.sqrt(u*u+m*m);return u*=M,m*=M,new n.DoublePoint2(m,-u)},n.ClipperOffset.prototype.DoOffset=function(r){if(this.m_destPolys=new Array,this.m_delta=r,n.ClipperBase.near_zero(r)){for(var c=0;c<this.m_polyNodes.ChildCount();c++){var u=this.m_polyNodes.Childs()[c];u.m_endtype===n.EndType.etClosedPolygon&&this.m_destPolys.push(u.m_polygon)}return}this.MiterLimit>2?this.m_miterLim=2/(this.MiterLimit*this.MiterLimit):this.m_miterLim=.5;var m;this.ArcTolerance<=0?m=n.ClipperOffset.def_arc_tolerance:this.ArcTolerance>Math.abs(r)*n.ClipperOffset.def_arc_tolerance?m=Math.abs(r)*n.ClipperOffset.def_arc_tolerance:m=this.ArcTolerance;var M=3.14159265358979/Math.acos(1-m/Math.abs(r));this.m_sin=Math.sin(n.ClipperOffset.two_pi/M),this.m_cos=Math.cos(n.ClipperOffset.two_pi/M),this.m_StepsPerRad=M/n.ClipperOffset.two_pi,r<0&&(this.m_sin=-this.m_sin);for(var c=0;c<this.m_polyNodes.ChildCount();c++){var u=this.m_polyNodes.Childs()[c];this.m_srcPoly=u.m_polygon;var P=this.m_srcPoly.length;if(!(P===0||r<=0&&(P<3||u.m_endtype!==n.EndType.etClosedPolygon))){if(this.m_destPoly=new Array,P===1){if(u.m_jointype===n.JoinType.jtRound)for(var D=1,Y=0,$=1;$<=M;$++){this.m_destPoly.push(new n.IntPoint2(n.ClipperOffset.Round(this.m_srcPoly[0].X+D*r),n.ClipperOffset.Round(this.m_srcPoly[0].Y+Y*r)));var it=D;D=D*this.m_cos-this.m_sin*Y,Y=it*this.m_sin+Y*this.m_cos}else for(var D=-1,Y=-1,$=0;$<4;++$)this.m_destPoly.push(new n.IntPoint2(n.ClipperOffset.Round(this.m_srcPoly[0].X+D*r),n.ClipperOffset.Round(this.m_srcPoly[0].Y+Y*r))),D<0?D=1:Y<0?Y=1:D=-1;this.m_destPolys.push(this.m_destPoly);continue}this.m_normals.length=0;for(var $=0;$<P-1;$++)this.m_normals.push(n.ClipperOffset.GetUnitNormal(this.m_srcPoly[$],this.m_srcPoly[$+1]));if(u.m_endtype===n.EndType.etClosedLine||u.m_endtype===n.EndType.etClosedPolygon?this.m_normals.push(n.ClipperOffset.GetUnitNormal(this.m_srcPoly[P-1],this.m_srcPoly[0])):this.m_normals.push(new n.DoublePoint1(this.m_normals[P-2])),u.m_endtype===n.EndType.etClosedPolygon){for(var vt=P-1,$=0;$<P;$++)vt=this.OffsetPoint($,vt,u.m_jointype);this.m_destPolys.push(this.m_destPoly)}else if(u.m_endtype===n.EndType.etClosedLine){for(var vt=P-1,$=0;$<P;$++)vt=this.OffsetPoint($,vt,u.m_jointype);this.m_destPolys.push(this.m_destPoly),this.m_destPoly=new Array;for(var _t=this.m_normals[P-1],$=P-1;$>0;$--)this.m_normals[$]=new n.DoublePoint2(-this.m_normals[$-1].X,-this.m_normals[$-1].Y);this.m_normals[0]=new n.DoublePoint2(-_t.X,-_t.Y),vt=0;for(var $=P-1;$>=0;$--)vt=this.OffsetPoint($,vt,u.m_jointype);this.m_destPolys.push(this.m_destPoly)}else{for(var vt=0,$=1;$<P-1;++$)vt=this.OffsetPoint($,vt,u.m_jointype);var Et;if(u.m_endtype===n.EndType.etOpenButt){var $=P-1;Et=new n.IntPoint2(n.ClipperOffset.Round(this.m_srcPoly[$].X+this.m_normals[$].X*r),n.ClipperOffset.Round(this.m_srcPoly[$].Y+this.m_normals[$].Y*r)),this.m_destPoly.push(Et),Et=new n.IntPoint2(n.ClipperOffset.Round(this.m_srcPoly[$].X-this.m_normals[$].X*r),n.ClipperOffset.Round(this.m_srcPoly[$].Y-this.m_normals[$].Y*r)),this.m_destPoly.push(Et)}else{var $=P-1;vt=P-2,this.m_sinA=0,this.m_normals[$]=new n.DoublePoint2(-this.m_normals[$].X,-this.m_normals[$].Y),u.m_endtype===n.EndType.etOpenSquare?this.DoSquare($,vt):this.DoRound($,vt)}for(var $=P-1;$>0;$--)this.m_normals[$]=new n.DoublePoint2(-this.m_normals[$-1].X,-this.m_normals[$-1].Y);this.m_normals[0]=new n.DoublePoint2(-this.m_normals[1].X,-this.m_normals[1].Y),vt=P-1;for(var $=vt-1;$>0;--$)vt=this.OffsetPoint($,vt,u.m_jointype);u.m_endtype===n.EndType.etOpenButt?(Et=new n.IntPoint2(n.ClipperOffset.Round(this.m_srcPoly[0].X-this.m_normals[0].X*r),n.ClipperOffset.Round(this.m_srcPoly[0].Y-this.m_normals[0].Y*r)),this.m_destPoly.push(Et),Et=new n.IntPoint2(n.ClipperOffset.Round(this.m_srcPoly[0].X+this.m_normals[0].X*r),n.ClipperOffset.Round(this.m_srcPoly[0].Y+this.m_normals[0].Y*r)),this.m_destPoly.push(Et)):(vt=1,this.m_sinA=0,u.m_endtype===n.EndType.etOpenSquare?this.DoSquare(0,1):this.DoRound(0,1)),this.m_destPolys.push(this.m_destPoly)}}}},n.ClipperOffset.prototype.Execute=function(){var r=arguments,c=r[0]instanceof n.PolyTree;if(c){var u=r[0],m=r[1];u.Clear(),this.FixOrientations(),this.DoOffset(m);var M=new n.Clipper(0);if(M.AddPaths(this.m_destPolys,n.PolyType.ptSubject,!0),m>0)M.Execute(n.ClipType.ctUnion,u,n.PolyFillType.pftPositive,n.PolyFillType.pftPositive);else{var P=n.Clipper.GetBounds(this.m_destPolys),D=new n.Path;if(D.push(new n.IntPoint2(P.left-10,P.bottom+10)),D.push(new n.IntPoint2(P.right+10,P.bottom+10)),D.push(new n.IntPoint2(P.right+10,P.top-10)),D.push(new n.IntPoint2(P.left-10,P.top-10)),M.AddPath(D,n.PolyType.ptSubject,!0),M.ReverseSolution=!0,M.Execute(n.ClipType.ctUnion,u,n.PolyFillType.pftNegative,n.PolyFillType.pftNegative),u.ChildCount()===1&&u.Childs()[0].ChildCount()>0){var Y=u.Childs()[0];u.Childs()[0]=Y.Childs()[0],u.Childs()[0].m_Parent=u;for(var $=1;$<Y.ChildCount();$++)u.AddChild(Y.Childs()[$])}else u.Clear()}}else{var u=r[0],m=r[1];n.Clear(u),this.FixOrientations(),this.DoOffset(m);var M=new n.Clipper(0);if(M.AddPaths(this.m_destPolys,n.PolyType.ptSubject,!0),m>0)M.Execute(n.ClipType.ctUnion,u,n.PolyFillType.pftPositive,n.PolyFillType.pftPositive);else{var P=n.Clipper.GetBounds(this.m_destPolys),D=new n.Path;D.push(new n.IntPoint2(P.left-10,P.bottom+10)),D.push(new n.IntPoint2(P.right+10,P.bottom+10)),D.push(new n.IntPoint2(P.right+10,P.top-10)),D.push(new n.IntPoint2(P.left-10,P.top-10)),M.AddPath(D,n.PolyType.ptSubject,!0),M.ReverseSolution=!0,M.Execute(n.ClipType.ctUnion,u,n.PolyFillType.pftNegative,n.PolyFillType.pftNegative),u.length>0&&u.splice(0,1)}}},n.ClipperOffset.prototype.OffsetPoint=function(r,c,u){if(this.m_sinA=this.m_normals[c].X*this.m_normals[r].Y-this.m_normals[r].X*this.m_normals[c].Y,Math.abs(this.m_sinA*this.m_delta)<1){var m=this.m_normals[c].X*this.m_normals[r].X+this.m_normals[r].Y*this.m_normals[c].Y;if(m>0)return this.m_destPoly.push(new n.IntPoint2(n.ClipperOffset.Round(this.m_srcPoly[r].X+this.m_normals[c].X*this.m_delta),n.ClipperOffset.Round(this.m_srcPoly[r].Y+this.m_normals[c].Y*this.m_delta))),c}else this.m_sinA>1?this.m_sinA=1:this.m_sinA<-1&&(this.m_sinA=-1);if(this.m_sinA*this.m_delta<0)this.m_destPoly.push(new n.IntPoint2(n.ClipperOffset.Round(this.m_srcPoly[r].X+this.m_normals[c].X*this.m_delta),n.ClipperOffset.Round(this.m_srcPoly[r].Y+this.m_normals[c].Y*this.m_delta))),this.m_destPoly.push(new n.IntPoint1(this.m_srcPoly[r])),this.m_destPoly.push(new n.IntPoint2(n.ClipperOffset.Round(this.m_srcPoly[r].X+this.m_normals[r].X*this.m_delta),n.ClipperOffset.Round(this.m_srcPoly[r].Y+this.m_normals[r].Y*this.m_delta)));else switch(u){case n.JoinType.jtMiter:{var M=1+(this.m_normals[r].X*this.m_normals[c].X+this.m_normals[r].Y*this.m_normals[c].Y);M>=this.m_miterLim?this.DoMiter(r,c,M):this.DoSquare(r,c);break}case n.JoinType.jtSquare:this.DoSquare(r,c);break;case n.JoinType.jtRound:this.DoRound(r,c);break}return c=r,c},n.ClipperOffset.prototype.DoSquare=function(r,c){var u=Math.tan(Math.atan2(this.m_sinA,this.m_normals[c].X*this.m_normals[r].X+this.m_normals[c].Y*this.m_normals[r].Y)/4);this.m_destPoly.push(new n.IntPoint2(n.ClipperOffset.Round(this.m_srcPoly[r].X+this.m_delta*(this.m_normals[c].X-this.m_normals[c].Y*u)),n.ClipperOffset.Round(this.m_srcPoly[r].Y+this.m_delta*(this.m_normals[c].Y+this.m_normals[c].X*u)))),this.m_destPoly.push(new n.IntPoint2(n.ClipperOffset.Round(this.m_srcPoly[r].X+this.m_delta*(this.m_normals[r].X+this.m_normals[r].Y*u)),n.ClipperOffset.Round(this.m_srcPoly[r].Y+this.m_delta*(this.m_normals[r].Y-this.m_normals[r].X*u))))},n.ClipperOffset.prototype.DoMiter=function(r,c,u){var m=this.m_delta/u;this.m_destPoly.push(new n.IntPoint2(n.ClipperOffset.Round(this.m_srcPoly[r].X+(this.m_normals[c].X+this.m_normals[r].X)*m),n.ClipperOffset.Round(this.m_srcPoly[r].Y+(this.m_normals[c].Y+this.m_normals[r].Y)*m)))},n.ClipperOffset.prototype.DoRound=function(r,c){for(var u=Math.atan2(this.m_sinA,this.m_normals[c].X*this.m_normals[r].X+this.m_normals[c].Y*this.m_normals[r].Y),m=Math.max(n.Cast_Int32(n.ClipperOffset.Round(this.m_StepsPerRad*Math.abs(u))),1),M=this.m_normals[c].X,P=this.m_normals[c].Y,D,Y=0;Y<m;++Y)this.m_destPoly.push(new n.IntPoint2(n.ClipperOffset.Round(this.m_srcPoly[r].X+M*this.m_delta),n.ClipperOffset.Round(this.m_srcPoly[r].Y+P*this.m_delta))),D=M,M=M*this.m_cos-this.m_sin*P,P=D*this.m_sin+P*this.m_cos;this.m_destPoly.push(new n.IntPoint2(n.ClipperOffset.Round(this.m_srcPoly[r].X+this.m_normals[r].X*this.m_delta),n.ClipperOffset.Round(this.m_srcPoly[r].Y+this.m_normals[r].Y*this.m_delta)))},n.Error=function(r){try{throw new Error(r)}catch(c){alert(c.message)}},n.JS={},n.JS.AreaOfPolygon=function(r,c){return c||(c=1),n.Clipper.Area(r)/(c*c)},n.JS.AreaOfPolygons=function(r,c){c||(c=1);for(var u=0,m=0;m<r.length;m++)u+=n.Clipper.Area(r[m]);return u/(c*c)},n.JS.BoundsOfPath=function(r,c){return n.JS.BoundsOfPaths([r],c)},n.JS.BoundsOfPaths=function(r,c){c||(c=1);var u=n.Clipper.GetBounds(r);return u.left/=c,u.bottom/=c,u.right/=c,u.top/=c,u},n.JS.Clean=function(m,c){if(!(m instanceof Array))return[];var u=m[0]instanceof Array,m=n.JS.Clone(m);if(typeof c!="number"||c===null)return n.Error("Delta is not a number in Clean()."),m;if(m.length===0||m.length===1&&m[0].length===0||c<0)return m;u||(m=[m]);for(var M=m.length,P,D,Y,$,it,vt,_t,Et=[],Qt=0;Qt<M;Qt++)if(D=m[Qt],P=D.length,P!==0){if(P<3){Y=D,Et.push(Y);continue}for(Y=D,$=c*c,it=D[0],vt=1,_t=1;_t<P;_t++)(D[_t].X-it.X)*(D[_t].X-it.X)+(D[_t].Y-it.Y)*(D[_t].Y-it.Y)<=$||(Y[vt]=D[_t],it=D[_t],vt++);it=D[vt-1],(D[0].X-it.X)*(D[0].X-it.X)+(D[0].Y-it.Y)*(D[0].Y-it.Y)<=$&&vt--,vt<P&&Y.splice(vt,P-vt),Y.length&&Et.push(Y)}return!u&&Et.length?Et=Et[0]:!u&&Et.length===0?Et=[]:u&&Et.length===0&&(Et=[[]]),Et},n.JS.Clone=function(r){if(!(r instanceof Array))return[];if(r.length===0)return[];if(r.length===1&&r[0].length===0)return[[]];var c=r[0]instanceof Array;c||(r=[r]);var u=r.length,m,M,P,D,Y=new Array(u);for(M=0;M<u;M++){for(m=r[M].length,D=new Array(m),P=0;P<m;P++)D[P]={X:r[M][P].X,Y:r[M][P].Y};Y[M]=D}return c||(Y=Y[0]),Y},n.JS.Lighten=function(r,c){if(!(r instanceof Array))return[];if(typeof c!="number"||c===null)return n.Error("Tolerance is not a number in Lighten()."),n.JS.Clone(r);if(r.length===0||r.length===1&&r[0].length===0||c<0)return n.JS.Clone(r);var u=r[0]instanceof Array;u||(r=[r]);var m,M,P,D,Y,$,it,vt,_t,Et,Qt,de,_e,Ve,Cn,ai,Os,Fm=r.length,Um=c*c,Fs=[];for(m=0;m<Fm;m++)if(P=r[m],$=P.length,$!==0){for(D=0;D<1e6;D++){for(Y=[],$=P.length,P[$-1].X!==P[0].X||P[$-1].Y!==P[0].Y?(de=1,P.push({X:P[0].X,Y:P[0].Y}),$=P.length):de=0,Qt=[],M=0;M<$-2;M++)it=P[M],_t=P[M+1],vt=P[M+2],ai=it.X,Os=it.Y,_e=vt.X-ai,Ve=vt.Y-Os,(_e!==0||Ve!==0)&&(Cn=((_t.X-ai)*_e+(_t.Y-Os)*Ve)/(_e*_e+Ve*Ve),Cn>1?(ai=vt.X,Os=vt.Y):Cn>0&&(ai+=_e*Cn,Os+=Ve*Cn)),_e=_t.X-ai,Ve=_t.Y-Os,Et=_e*_e+Ve*Ve,Et<=Um&&(Qt[M+1]=1,M++);for(Y.push({X:P[0].X,Y:P[0].Y}),M=1;M<$-1;M++)Qt[M]||Y.push({X:P[M].X,Y:P[M].Y});if(Y.push({X:P[$-1].X,Y:P[$-1].Y}),de&&P.pop(),Qt.length)P=Y;else break}$=Y.length,Y[$-1].X===Y[0].X&&Y[$-1].Y===Y[0].Y&&Y.pop(),Y.length>2&&Fs.push(Y)}return u||(Fs=Fs[0]),typeof Fs>"u"&&(Fs=[]),Fs},n.JS.PerimeterOfPath=function(r,c,u){if(typeof r>"u")return 0;var m=Math.sqrt,M=0,P,D,Y=0,$=0,it=0,vt=0,_t=r.length;if(_t<2)return 0;for(c&&(r[_t]=r[0],_t++);--_t;)P=r[_t],Y=P.X,$=P.Y,D=r[_t-1],it=D.X,vt=D.Y,M+=m((Y-it)*(Y-it)+($-vt)*($-vt));return c&&r.pop(),M/u},n.JS.PerimeterOfPaths=function(r,c,u){u||(u=1);for(var m=0,M=0;M<r.length;M++)m+=n.JS.PerimeterOfPath(r[M],c,u);return m},n.JS.ScaleDownPath=function(r,c){var u,m;for(c||(c=1),u=r.length;u--;)m=r[u],m.X=m.X/c,m.Y=m.Y/c},n.JS.ScaleDownPaths=function(r,c){var u,m,M;for(c||(c=1),u=r.length;u--;)for(m=r[u].length;m--;)M=r[u][m],M.X=M.X/c,M.Y=M.Y/c},n.JS.ScaleUpPath=function(r,c){var u,m,M=Math.round;for(c||(c=1),u=r.length;u--;)m=r[u],m.X=M(m.X*c),m.Y=M(m.Y*c)},n.JS.ScaleUpPaths=function(r,c){var u,m,M,P=Math.round;for(c||(c=1),u=r.length;u--;)for(m=r[u].length;m--;)M=r[u][m],M.X=P(M.X*c),M.Y=P(M.Y*c)},n.ExPolygons=function(){return[]},n.ExPolygon=function(){this.outer=null,this.holes=null},n.JS.AddOuterPolyNodeToExPolygons=function(r,c){var u=new n.ExPolygon;u.outer=r.Contour();var m=r.Childs(),M=m.length;u.holes=new Array(M);var P,D,Y,$,it,vt;for(Y=0;Y<M;Y++)for(P=m[Y],u.holes[Y]=P.Contour(),$=0,it=P.Childs(),vt=it.length;$<vt;$++)D=it[$],n.JS.AddOuterPolyNodeToExPolygons(D,c);c.push(u)},n.JS.ExPolygonsToPaths=function(r){var c,u,m,M,P=new n.Paths;for(c=0,m=r.length;c<m;c++)for(P.push(r[c].outer),u=0,M=r[c].holes.length;u<M;u++)P.push(r[c].holes[u]);return P},n.JS.PolyTreeToExPolygons=function(r){var c=new n.ExPolygons,u,m,M,P;for(m=0,M=r.Childs(),P=M.length;m<P;m++)u=M[m],n.JS.AddOuterPolyNodeToExPolygons(u,c);return c}})()});function Wc(n,t,e,i=Ze.default.PolyFillType.pftNonZero){let s=new Ze.default.Clipper;s.AddPaths(Kr(t),Ze.default.PolyType.ptSubject,!0),e&&s.AddPaths(Kr(e),Ze.default.PolyType.ptClip,!0);let a=new Ze.default.Paths;return s.Execute(n,a,i,i),ha(a)}function ve(n,t,e=Cf/bi){return n.length?(t<-2*Xc&&(n=Af(n,-Xc,e),t+=Xc),Af(n,t,e)):[]}function Af(n,t,e){if(!n.length)return[];let i=new Ze.default.ClipperOffset(2,e*bi);i.AddPaths(Kr(n),Ze.default.JoinType.jtRound,Ze.default.EndType.etClosedPolygon);let s=new Ze.default.Paths;return i.Execute(s,t*bi),ha(s)}function Pf(n,t){if(!n.length)return[];let e=new Ze.default.ClipperOffset(4,Cf);e.AddPaths(Kr(n),Ze.default.JoinType.jtMiter,Ze.default.EndType.etClosedPolygon);let i=new Ze.default.Paths;return e.Execute(i,t*bi),ha(i)}function en(n){let t=0;for(let e=0,i=n.length-1;e<n.length;i=e++)t+=(n[i][0]+n[e][0])*(n[i][1]-n[e][1]);return-t/2}function to(n){let t=1/0,e=1/0,i=-1/0,s=-1/0;for(let a of n)for(let[l,o]of a)l<t&&(t=l),l>i&&(i=l),o<e&&(e=o),o>s&&(s=o);return{minX:t,minY:e,maxX:i,maxY:s}}function Zn(n){if(!n.length)return[];let t=new Ze.default.Clipper;t.AddPaths(Kr(n),Ze.default.PolyType.ptSubject,!0);let e=new Ze.default.PolyTree;t.Execute(Ze.default.ClipType.ctUnion,e,Ze.default.PolyFillType.pftNonZero,Ze.default.PolyFillType.pftNonZero);let i=[],s=a=>{for(let l of a.Childs()){if(l.IsHole()){s(l);continue}let o=l.Childs().map(h=>h.Contour());i.push(ha([l.Contour(),...o]));for(let h of l.Childs())s(h)}};return s(e),i}function Mi([n,t],e){let i=!1;for(let s=0,a=e.length-1;s<e.length;a=s++){let[l,o]=e[s],[h,f]=e[a];o>t!=f>t&&n<(h-l)*(t-o)/(f-o)+l&&(i=!i)}return i}function sn(n,t=1e-4){return n.filter(e=>e.length>=3&&Math.abs(en(e))>t)}function a0(n,t=.005){if(n.length<8)return n;let e=0,i=-1;for(let o=1;o<n.length;o++){let h=(n[o][0]-n[0][0])**2+(n[o][1]-n[0][1])**2;h>i&&(i=h,e=o)}let s=o=>{let h=new Uint8Array(o.length);h[0]=h[o.length-1]=1;let f=[[0,o.length-1]];for(;f.length;){let[d,g]=f.pop(),[p,x]=o[d],[v,b]=o[g],y=Math.hypot(v-p,b-x)||1e-12,_=-1,A=t;for(let T=d+1;T<g;T++){let S=Math.abs((v-p)*(x-o[T][1])-(p-o[T][0])*(b-x))/y;S>A&&(A=S,_=T)}_>0&&(h[_]=1,f.push([d,_],[_,g]))}return o.filter((d,g)=>h[g])},a=s(n.slice(0,e+1)),l=s([...n.slice(e),n[0]]);return[...a,...l.slice(1,-1)]}var Ze,bi,Cf,Kr,ha,cn,pn,ua,Xc,Qr,ci,eo=pe(()=>{Ze=Gu(Tf(),1),bi=1e3,Cf=.01*bi,Kr=n=>n.map(t=>t.map(([e,i])=>({X:Math.round(e*bi),Y:Math.round(i*bi)}))),ha=n=>n.map(t=>t.map(e=>[e.X/bi,e.Y/bi]));cn=n=>Wc(Ze.default.ClipType.ctUnion,n,null),pn=(n,t)=>Wc(Ze.default.ClipType.ctDifference,n,t),ua=(n,t)=>Wc(Ze.default.ClipType.ctIntersection,n,t);Xc=.005;Qr=n=>n.reduce((t,e)=>t+en(e),0);ci=(n,t)=>n.map(e=>a0(e,t)).filter(e=>e.length>=3)});function no(n){let t=String(n.type||"").toLowerCase().replace(/[-_]/g," ");return If.has(t)?t:/keyhole|round ?over|\bcove\b|bowl|ogee|dovetail/i.test(n.name||"")?"profile":l0.has(t)||t.startsWith("flat")?"flat":t.startsWith("surfac")?"surfacing":t.startsWith("drill")?"drill":t.startsWith("ball")?"ball":t.startsWith("v")?"vbit":t.startsWith("chamfer")?"chamfer":t.startsWith("thread")?"threadmill":t||"flat"}function ds(n,t){return(typeof t=="string"?t:t?.mode)==="toolId"?n.toolId??n.id:n.toolNumber?n.toolNumber:t?.manual?.get(n.id)??n.toolId??n.id}function Rf(n,t,e=0,i=null){if(n==="toolId")return{mode:n};let s=new Set(t.filter(h=>h.toolNumber).map(h=>h.toolNumber));for(let h=1;h<=e;h++)s.add(h);i&&s.add(i);let a=new Map,l=t.filter(h=>!h.toolNumber);for(let h of l){let f=h.toolId??h.id;f>e&&!s.has(f)&&(a.set(h.id,f),s.add(f))}let o=e+1;for(let h of l)if(!a.has(h.id)){for(;s.has(o);)o++;a.set(h.id,o),s.add(o)}return{mode:n,manual:a}}function Lf(n){return(n||[]).filter(t=>t&&t.diameter>0).map(t=>({id:t.id,toolId:t.toolId??t.id,toolNumber:t.toolNumber??null,name:t.name||`${t.diameter} mm ${no(t)}`,kind:no(t),diameter:Number(t.diameter),fluteLength:Number(t.dimensions?.flute_length)||null,flutes:Number(t.metadata?.flutes)||2,cut:c0(t),.../^(vbit|chamfer)$/.test(no(t))?{angle:u0(t)}:{},...no(t)==="threadmill"?h0(t):{}}))}function c0(n){let t=String(n.type||""),e=String(n.name||"");return/^compression$/i.test(t)||/\bcompression\b/i.test(e)?"compression":/^down[-_ ]?cut$/i.test(t)||/\bdown[-_ ]?(cut|shear|spiral)\b/i.test(e)?"down":""}function h0(n){let t=n.metadata||{},i=[t.sku,n.name,t.notes].filter(Boolean).join(" ").match(/D\s*(\d+(?:\.\d+)?)\s*[×xX*]\s*P(?:itch)?\s*(\d+(?:\.\d+)?)\s*-\s*(\d+(?:\.\d+)?)/),s=Number(t.cut_diameter)||Number(i?i[1]:n.diameter),a=Number(t.reach)||Number(n.dimensions?.neck_length)||0;return{cut:s,pitchMin:Number(t.pitch_min)||(i?Number(i[2]):0),pitchMax:Number(t.pitch_max)||(i?Number(i[3]):1/0),reach:a||3*s,reachAssumed:!a,neck:Number(t.neck_diameter)||.7*s}}function u0(n){let t=Number(n.dimensions?.taper_angle);if(t>0&&t<90)return t*2;let e=String(n.name||"").match(/(\d{2,3}(?:\.\d+)?)\s*(?:°|º|deg\b|degrees?\b)/i),i=e?Number(e[1]):0;return i>0&&i<180?i:90}function Nf(n=[]){let t=[];for(let e of n){let i=String(e).trim().match(/^\[SPINDLE:([^\]]*)\]$/);if(!i)continue;let[s,a,l,o="",h="",f=""]=i[1].split("|"),[d,g]=f.split(",").map(Number);t.push({id:Number(s),num:a==="-"||a===""?null:Number(a),type:Number(l),current:o.includes("*"),name:h.trim(),minRpm:Number.isFinite(d)&&d>0?d:void 0,maxRpm:Number.isFinite(g)&&g>0?g:void 0})}return t}function Df(n={},t=[]){let e=t.find(l=>l.current);if(e?.maxRpm>0)return{maxRpm:e.maxRpm,minRpm:e.minRpm,source:`the ${e.name||"active"} spindle's range`};let i=l=>{let o=parseFloat(n[l]?.value);return Number.isFinite(o)&&o>0?o:void 0},s=n[395];return(s?.format?String(s.format).split(",").map(l=>l.trim())[parseInt(s.value,10)]:void 0)==="PWM2"?{maxRpm:i("730"),minRpm:i("731"),source:"$730"}:{maxRpm:i("30"),minRpm:i("31"),source:"$30"}}function Yc(n,t,e,i={}){let s=fs[t]||fs.mdf,a=zn[e]||zn.balanced,l=i.maxRpm||24e3,o=i.minRpm||0,h=Math.round(Math.min(l,Math.max(o,s.rpm))),f=Math.min(s.maxChip,s.chip*n.diameter),d=Math.min(i.maxFeed||4e3,4e3),g=Math.round(Math.min(d,Math.max(150,h*n.flutes*f*a.feed)));return{rpm:h,feed:g,plunge:Math.round(Math.max(60,g*.3)),stepdown:Math.max(.05,n.diameter*s.stepdown*a.stepdown),stepover:Math.max(.05,n.diameter*Math.min(.9,s.stepover*a.stepover)),rampAngle:s.ramp}}var fs,zn,l0,If,da,Of,hi,io=pe(()=>{fs={softwood:{name:"Softwood",note:"Pine, cedar",rpm:18e3,chip:.012,maxChip:.25,stepdown:.5,stepover:.45,ramp:5},hardwood:{name:"Hardwood",note:"Oak, maple, walnut",rpm:18e3,chip:.009,maxChip:.2,stepdown:.35,stepover:.4,ramp:4},mdf:{name:"MDF / Plywood",note:"Sheet goods",rpm:18e3,chip:.012,maxChip:.25,stepdown:.5,stepover:.45,ramp:5},plastic:{name:"Plastic",note:"Acrylic, HDPE",rpm:16e3,chip:.01,maxChip:.2,stepdown:.3,stepover:.4,ramp:3},aluminum:{name:"Aluminum",note:"6061",rpm:18e3,chip:.003,maxChip:.05,stepdown:.1,stepover:.25,ramp:2},foam:{name:"Foam",note:"Tooling board",rpm:12e3,chip:.02,maxChip:.4,stepdown:1,stepover:.6,ramp:10}},zn={fast:{name:"Fast",feed:1.15,stepdown:1.2,stepover:1.1,allowance:0},balanced:{name:"Balanced",feed:1,stepdown:1,stepover:1,allowance:.2},smooth:{name:"Smooth",feed:.85,stepdown:.8,stepover:.7,allowance:.25}},l0=new Set(["flat","flat end mill","endmill","end mill","flat_end_mill"]),If=new Set(["pen","drag knife"]),da=n=>!If.has(n.kind??no(n));Of=5e3;hi=n=>n==="aluminum"?{height:1,length:1}:{height:2,length:2}});var ps={};Hu(ps,{INCH:()=>f0,len:()=>$c,num:()=>Ff,toMm:()=>p0,unitsFrom:()=>d0});function Ff(n,t="mm",e=t==="in"?3:1){let i=t==="in"?n/25.4:n;return(Math.round(i*10**e)/10**e).toLocaleString("en-US",{maximumFractionDigits:e})}var f0,d0,$c,p0,qc=pe(()=>{f0=25.4,d0=n=>n==="imperial"?"in":"mm";$c=(n,t="mm",e)=>`${Ff(n,t,e)} ${t}`,p0=(n,t="mm")=>t==="in"?n*25.4:n});function m0(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function g0(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function yo(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Jd(){let n=yo("canvas");return n.style.display="block",n}function _o(...n){let t="THREE."+n.shift();or?or("log",t,...n):console.log(t,...n)}function jd(n){let t=n[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=n[1];e&&e.isStackTrace?n[0]+=" "+e.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function ie(...n){n=jd(n);let t="THREE."+n.shift();if(or)or("warn",t,...n);else{let e=n[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...n)}}function se(...n){n=jd(n);let t="THREE."+n.shift();if(or)or("error",t,...n);else{let e=n[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...n)}}function _s(...n){let t=n.join(" ");t in Uf||(Uf[t]=!0,ie(...n))}function Kd(n,t,e){return new Promise(function(i,s){function a(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(a,e);break;default:i()}}setTimeout(a,e)})}function Ci(){let n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(yn[n&255]+yn[n>>8&255]+yn[n>>16&255]+yn[n>>24&255]+"-"+yn[t&255]+yn[t>>8&255]+"-"+yn[t>>16&15|64]+yn[t>>24&255]+"-"+yn[e&63|128]+yn[e>>8&255]+"-"+yn[e>>16&255]+yn[e>>24&255]+yn[i&255]+yn[i>>8&255]+yn[i>>16&255]+yn[i>>24&255]).toLowerCase()}function Me(n,t,e){return Math.max(t,Math.min(e,n))}function eu(n,t){return(n%t+t)%t}function x0(n,t,e,i,s){return i+(n-t)*(s-i)/(e-t)}function y0(n,t,e){return n!==t?(e-n)/(t-n):0}function po(n,t,e){return(1-e)*n+e*t}function _0(n,t,e,i){return po(n,t,1-Math.exp(-e*i))}function v0(n,t=1){return t-Math.abs(eu(n,t*2)-t)}function b0(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*(3-2*n))}function M0(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*n*(n*(n*6-15)+10))}function S0(n,t){return n+Math.floor(Math.random()*(t-n+1))}function w0(n,t){return n+Math.random()*(t-n)}function E0(n){return n*(.5-Math.random())}function T0(n){n!==void 0&&(Bf=n);let t=Bf+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function A0(n){return n*nr}function C0(n){return n*ar}function P0(n){return n>0&&Number.isInteger(n)&&2**Math.round(Math.log2(n))===n}function I0(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function R0(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function L0(n,t,e,i,s){let a=Math.cos,l=Math.sin,o=a(e/2),h=l(e/2),f=a((t+i)/2),d=l((t+i)/2),g=a((t-i)/2),p=l((t-i)/2),x=a((i-t)/2),v=l((i-t)/2);switch(s){case"XYX":n.set(o*d,h*g,h*p,o*f);break;case"YZY":n.set(h*p,o*d,h*g,o*f);break;case"ZXZ":n.set(h*g,h*p,o*d,o*f);break;case"XZX":n.set(o*d,h*v,h*x,o*f);break;case"YXY":n.set(h*x,o*d,h*v,o*f);break;case"ZYZ":n.set(h*v,h*x,o*d,o*f);break;default:ie("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Qn(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:case Uint8ClampedArray:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function De(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function N0(){let n={enabled:!0,workingColorSpace:go,spaces:{},convert:function(s,a,l){return this.enabled===!1||a===l||!a||!l||(this.spaces[a].transfer===Ne&&(s.r=Pi(s.r),s.g=Pi(s.g),s.b=Pi(s.b)),this.spaces[a].primaries!==this.spaces[l].primaries&&(s.applyMatrix3(this.spaces[a].toXYZ),s.applyMatrix3(this.spaces[l].fromXYZ)),this.spaces[l].transfer===Ne&&(s.r=ir(s.r),s.g=ir(s.g),s.b=ir(s.b))),s},workingToColorSpace:function(s,a){return this.convert(s,this.workingColorSpace,a)},colorSpaceToWorking:function(s,a){return this.convert(s,a,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Ri?xo:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,a=this.workingColorSpace){return s.fromArray(this.spaces[a].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,a,l){return s.copy(this.spaces[a].toXYZ).multiply(this.spaces[l].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,a){return _s("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(s,a)},toWorkingColorSpace:function(s,a){return _s("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(s,a)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[go]:{primaries:t,whitePoint:i,transfer:xo,toXYZ:zf,fromXYZ:Vf,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:En},outputColorSpaceConfig:{drawingBufferColorSpace:En}},[En]:{primaries:t,whitePoint:i,transfer:Ne,toXYZ:zf,fromXYZ:Vf,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:En}}}),n}function Pi(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function ir(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}function jc(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?nl.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(ie("Texture: Unable to serialize Texture."),{})}function th(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}function lh(n,t,e,i,s){for(let a=0,l=n.length-3;a<=l;a+=3){gs.fromArray(n,a);let o=s.x*Math.abs(gs.x)+s.y*Math.abs(gs.y)+s.z*Math.abs(gs.z),h=t.dot(gs),f=e.dot(gs),d=i.dot(gs);if(Math.max(-Math.max(h,f,d),Math.min(h,f,d))>o)return!1}return!0}function Sa(n,t,e,i,s,a){Ks.subVectors(n,e).addScalar(.5).multiply(i),s!==void 0?(co.x=a*Ks.x-s*Ks.y,co.y=s*Ks.x+a*Ks.y):co.copy(Ks),n.copy(t),n.x+=co.x,n.y+=co.y,n.applyMatrix4(ep)}function Z0(n,t,e,i,s,a,l,o){let h;if(t.side===An?h=i.intersectTriangle(l,a,s,!0,o):h=i.intersectTriangle(s,a,l,t.side===ji,o),h===null)return null;Ra.copy(o),Ra.applyMatrix4(n.matrixWorld);let f=e.ray.origin.distanceTo(Ra);return f<e.near||f>e.far?null:{distance:f,point:Ra.clone(),object:n}}function La(n,t,e,i,s,a,l,o,h,f){n.getVertexPosition(o,Aa),n.getVertexPosition(h,Ca),n.getVertexPosition(f,Pa);let d=Z0(n,t,e,i,Aa,Ca,Pa,td);if(d){let g=new tt;fi.getBarycoord(td,Aa,Ca,Pa,g),s&&(d.uv=fi.getInterpolatedAttribute(s,o,h,f,g,new jt)),a&&(d.uv1=fi.getInterpolatedAttribute(a,o,h,f,g,new jt)),l&&(d.normal=fi.getInterpolatedAttribute(l,o,h,f,g,new tt),d.normal.dot(i.direction)>0&&d.normal.multiplyScalar(-1));let p={a:o,b:h,c:f,normal:new tt,materialIndex:0};fi.getNormal(Aa,Ca,Pa,p.normal),d.face=p,d.barycoord=g}return d}function Oa(n,t,e,i,s,a,l){let o=n.geometry.attributes.position;if(al.fromBufferAttribute(o,s),ll.fromBufferAttribute(o,a),e.distanceSqToSegment(al,ll,mh,nd)>i)return;mh.applyMatrix4(n.matrixWorld);let f=t.ray.origin.distanceTo(mh);if(!(f<t.near||f>t.far))return{distance:f,point:nd.clone().applyMatrix4(n.matrixWorld),index:l,face:null,faceIndex:null,barycoord:null,object:n}}function j0(n,t,e=2){let i=t&&t.length,s=i?t[0]*e:n.length,a=np(n,0,s,e,!0),l=[];if(!a||a.next===a.prev)return l;let o,h,f;if(i&&(a=ng(n,t,a,e)),n.length>80*e){o=n[0],h=n[1];let d=o,g=h;for(let p=e;p<s;p+=e){let x=n[p],v=n[p+1];x<o&&(o=x),v<h&&(h=v),x>d&&(d=x),v>g&&(g=v)}f=Math.max(d-o,g-h),f=f!==0?32767/f:0}return Po(a,l,e,o,h,f,0),l}function np(n,t,e,i,s){let a;if(s===dg(n,t,e,i)>0)for(let l=t;l<e;l+=i)a=rd(l/i|0,n[l],n[l+1],a);else for(let l=e-i;l>=t;l-=i)a=rd(l/i|0,n[l],n[l+1],a);return a&&mr(a,a.next)&&(Ro(a),a=a.next),a}function Ss(n,t){if(!n)return n;t||(t=n);let e=n,i;do if(i=!1,!e.steiner&&(mr(e,e.next)||Je(e.prev,e,e.next)===0)){if(Ro(e),e=t=e.prev,e===e.next)break;i=!0}else e=e.next;while(i||e!==t);return t}function Po(n,t,e,i,s,a,l){if(!n)return;!l&&a&&ag(n,i,s,a);let o=n;for(;n.prev!==n.next;){let h=n.prev,f=n.next;if(a?Q0(n,i,s,a):K0(n)){t.push(h.i,n.i,f.i),Ro(n),n=f.next,o=f.next;continue}if(n=f,n===o){l?l===1?(n=tg(Ss(n),t),Po(n,t,e,i,s,a,2)):l===2&&eg(n,t,e,i,s,a):Po(Ss(n),t,e,i,s,a,1);break}}}function K0(n){let t=n.prev,e=n,i=n.next;if(Je(t,e,i)>=0)return!1;let s=t.x,a=e.x,l=i.x,o=t.y,h=e.y,f=i.y,d=Math.min(s,a,l),g=Math.min(o,h,f),p=Math.max(s,a,l),x=Math.max(o,h,f),v=i.next;for(;v!==t;){if(v.x>=d&&v.x<=p&&v.y>=g&&v.y<=x&&fo(s,o,a,h,l,f,v.x,v.y)&&Je(v.prev,v,v.next)>=0)return!1;v=v.next}return!0}function Q0(n,t,e,i){let s=n.prev,a=n,l=n.next;if(Je(s,a,l)>=0)return!1;let o=s.x,h=a.x,f=l.x,d=s.y,g=a.y,p=l.y,x=Math.min(o,h,f),v=Math.min(d,g,p),b=Math.max(o,h,f),y=Math.max(d,g,p),_=wh(x,v,t,e,i),A=wh(b,y,t,e,i),T=n.prevZ,S=n.nextZ;for(;T&&T.z>=_&&S&&S.z<=A;){if(T.x>=x&&T.x<=b&&T.y>=v&&T.y<=y&&T!==s&&T!==l&&fo(o,d,h,g,f,p,T.x,T.y)&&Je(T.prev,T,T.next)>=0||(T=T.prevZ,S.x>=x&&S.x<=b&&S.y>=v&&S.y<=y&&S!==s&&S!==l&&fo(o,d,h,g,f,p,S.x,S.y)&&Je(S.prev,S,S.next)>=0))return!1;S=S.nextZ}for(;T&&T.z>=_;){if(T.x>=x&&T.x<=b&&T.y>=v&&T.y<=y&&T!==s&&T!==l&&fo(o,d,h,g,f,p,T.x,T.y)&&Je(T.prev,T,T.next)>=0)return!1;T=T.prevZ}for(;S&&S.z<=A;){if(S.x>=x&&S.x<=b&&S.y>=v&&S.y<=y&&S!==s&&S!==l&&fo(o,d,h,g,f,p,S.x,S.y)&&Je(S.prev,S,S.next)>=0)return!1;S=S.nextZ}return!0}function tg(n,t){let e=n;do{let i=e.prev,s=e.next.next;!mr(i,s)&&sp(i,e,e.next,s)&&Io(i,s)&&Io(s,i)&&(t.push(i.i,e.i,s.i),Ro(e),Ro(e.next),e=n=s),e=e.next}while(e!==n);return Ss(e)}function eg(n,t,e,i,s,a){let l=n;do{let o=l.next.next;for(;o!==l.prev;){if(l.i!==o.i&&hg(l,o)){let h=rp(l,o);l=Ss(l,l.next),h=Ss(h,h.next),Po(l,t,e,i,s,a,0),Po(h,t,e,i,s,a,0);return}o=o.next}l=l.next}while(l!==n)}function ng(n,t,e,i){let s=[];for(let a=0,l=t.length;a<l;a++){let o=t[a]*i,h=a<l-1?t[a+1]*i:n.length,f=np(n,o,h,i,!1);f===f.next&&(f.steiner=!0),s.push(cg(f))}s.sort(ig);for(let a=0;a<s.length;a++)e=sg(s[a],e);return e}function ig(n,t){let e=n.x-t.x;if(e===0&&(e=n.y-t.y,e===0)){let i=(n.next.y-n.y)/(n.next.x-n.x),s=(t.next.y-t.y)/(t.next.x-t.x);e=i-s}return e}function sg(n,t){let e=rg(n,t);if(!e)return t;let i=rp(e,n);return Ss(i,i.next),Ss(e,e.next)}function rg(n,t){let e=t,i=n.x,s=n.y,a=-1/0,l;if(mr(n,e))return e;do{if(mr(n,e.next))return e.next;if(s<=e.y&&s>=e.next.y&&e.next.y!==e.y){let g=e.x+(s-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(g<=i&&g>a&&(a=g,l=e.x<e.next.x?e:e.next,g===i))return l}e=e.next}while(e!==t);if(!l)return null;let o=l,h=l.x,f=l.y,d=1/0;e=l;do{if(i>=e.x&&e.x>=h&&i!==e.x&&ip(s<f?i:a,s,h,f,s<f?a:i,s,e.x,e.y)){let g=Math.abs(s-e.y)/(i-e.x);Io(e,n)&&(g<d||g===d&&(e.x>l.x||e.x===l.x&&og(l,e)))&&(l=e,d=g)}e=e.next}while(e!==o);return l}function og(n,t){return Je(n.prev,n,t.prev)<0&&Je(t.next,n,n.next)<0}function ag(n,t,e,i){let s=n;do s.z===0&&(s.z=wh(s.x,s.y,t,e,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==n);s.prevZ.nextZ=null,s.prevZ=null,lg(s)}function lg(n){let t,e=1;do{let i=n,s;n=null;let a=null;for(t=0;i;){t++;let l=i,o=0;for(let f=0;f<e&&(o++,l=l.nextZ,!!l);f++);let h=e;for(;o>0||h>0&&l;)o!==0&&(h===0||!l||i.z<=l.z)?(s=i,i=i.nextZ,o--):(s=l,l=l.nextZ,h--),a?a.nextZ=s:n=s,s.prevZ=a,a=s;i=l}a.nextZ=null,e*=2}while(t>1);return n}function wh(n,t,e,i,s){return n=(n-e)*s|0,t=(t-i)*s|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,n|t<<1}function cg(n){let t=n,e=n;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==n);return e}function ip(n,t,e,i,s,a,l,o){return(s-l)*(t-o)>=(n-l)*(a-o)&&(n-l)*(i-o)>=(e-l)*(t-o)&&(e-l)*(a-o)>=(s-l)*(i-o)}function fo(n,t,e,i,s,a,l,o){return!(n===l&&t===o)&&ip(n,t,e,i,s,a,l,o)}function hg(n,t){return n.next.i!==t.i&&n.prev.i!==t.i&&!ug(n,t)&&(Io(n,t)&&Io(t,n)&&fg(n,t)&&(Je(n.prev,n,t.prev)||Je(n,t.prev,t))||mr(n,t)&&Je(n.prev,n,n.next)>0&&Je(t.prev,t,t.next)>0)}function Je(n,t,e){return(t.y-n.y)*(e.x-t.x)-(t.x-n.x)*(e.y-t.y)}function mr(n,t){return n.x===t.x&&n.y===t.y}function sp(n,t,e,i){let s=za(Je(n,t,e)),a=za(Je(n,t,i)),l=za(Je(e,i,n)),o=za(Je(e,i,t));return!!(s!==a&&l!==o||s===0&&ka(n,e,t)||a===0&&ka(n,i,t)||l===0&&ka(e,n,i)||o===0&&ka(e,t,i))}function ka(n,t,e){return t.x<=Math.max(n.x,e.x)&&t.x>=Math.min(n.x,e.x)&&t.y<=Math.max(n.y,e.y)&&t.y>=Math.min(n.y,e.y)}function za(n){return n>0?1:n<0?-1:0}function ug(n,t){let e=n;do{if(e.i!==n.i&&e.next.i!==n.i&&e.i!==t.i&&e.next.i!==t.i&&sp(e,e.next,n,t))return!0;e=e.next}while(e!==n);return!1}function Io(n,t){return Je(n.prev,n,n.next)<0?Je(n,t,n.next)>=0&&Je(n,n.prev,t)>=0:Je(n,t,n.prev)<0||Je(n,n.next,t)<0}function fg(n,t){let e=n,i=!1,s=(n.x+t.x)/2,a=(n.y+t.y)/2;do e.y>a!=e.next.y>a&&e.next.y!==e.y&&s<(e.next.x-e.x)*(a-e.y)/(e.next.y-e.y)+e.x&&(i=!i),e=e.next;while(e!==n);return i}function rp(n,t){let e=Eh(n.i,n.x,n.y),i=Eh(t.i,t.x,t.y),s=n.next,a=t.prev;return n.next=t,t.prev=n,e.next=s,s.prev=e,i.next=e,e.prev=i,a.next=i,i.prev=a,i}function rd(n,t,e,i){let s=Eh(n,t,e);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function Ro(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function Eh(n,t,e){return{i:n,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function dg(n,t,e,i){let s=0;for(let a=t,l=e-i;a<e;a+=i)s+=(n[l]-n[a])*(n[a+1]+n[l+1]),l=a;return s}function od(n){let t=n.length;t>2&&n[t-1].equals(n[0])&&n.pop()}function ad(n,t){for(let e=0;e<t.length;e++)n.push(t[e].x),n.push(t[e].y)}function As(n){let t={};for(let e in n){t[e]={};for(let i in n[e]){let s=n[e][i];if(ld(s))s.isRenderTargetTexture?(ie("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=s.clone();else if(Array.isArray(s))if(ld(s[0])){let a=[];for(let l=0,o=s.length;l<o;l++)a[l]=s[l].clone();t[e][i]=a}else t[e][i]=s.slice();else t[e][i]=s}}return t}function Mn(n){let t={};for(let e=0;e<n.length;e++){let i=As(n[e]);for(let s in i)t[s]=i[s]}return t}function ld(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function pg(n){let t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function iu(n){let t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Ee.workingColorSpace}function Qs(n,t){return!n||n.constructor===t?n:typeof t.BYTES_PER_ELEMENT=="number"?new t(n):Array.prototype.slice.call(n)}function xh(n){return n!==void 0&&n.inTangents!==void 0&&n.outTangents!==void 0}function ap(n,t,e,i,s){let a=1-n;return a*a*a*t+3*a*a*n*e+3*a*n*n*i+n*n*n*s}function xg(n,t,e,i,s){let a=1-n;return 3*a*a*(e-t)+6*a*n*(i-e)+3*n*n*(s-i)}function yg(n,t,e,i,s){let a=(n-t)/(s-t);for(let l=0;l<8;l++){let o=ap(a,t,e,i,s)-n;if(Math.abs(o)<1e-10)break;let h=xg(a,t,e,i,s);if(Math.abs(h)<1e-10)break;a=Math.max(0,Math.min(1,a-o/h))}return a}function cd(n,t){for(let e=0,i=n.length;e!==i;e+=2)n[e]*=t}function md(n,t){return n.distance-t.distance}function Ph(n,t,e,i){let s=!0;if(n.layers.test(t.layers)&&n.raycast(t,e)===!1&&(s=!1),s===!0&&i===!0){let a=n.children;for(let l=0,o=a.length;l<o;l++)Ph(a[l],t,e,!0)}}function ou(n,t,e,i){let s=Ag(i);switch(e){case Jh:return n*t;case Kh:return n*t/s.components*s.byteLength;case Ll:return n*t/s.components*s.byteLength;case es:return n*t*2/s.components*s.byteLength;case Nl:return n*t*2/s.components*s.byteLength;case jh:return n*t*3/s.components*s.byteLength;case Gn:return n*t*4/s.components*s.byteLength;case Dl:return n*t*4/s.components*s.byteLength;case Yo:case $o:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case qo:case Zo:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Fl:case Bl:return Math.max(n,16)*Math.max(t,8)/4;case Ol:case Ul:return Math.max(n,8)*Math.max(t,8)/2;case kl:case zl:case Hl:case Gl:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Vl:case Jo:case Xl:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Wl:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Yl:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case $l:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case ql:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case Zl:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case Jl:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case jl:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case Kl:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case Ql:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case tc:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case ec:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case nc:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case ic:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case sc:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case rc:case oc:case ac:return Math.ceil(n/4)*Math.ceil(t/4)*16;case lc:case cc:return Math.ceil(n/4)*Math.ceil(t/4)*8;case jo:case hc:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Ag(n){switch(n){case In:case Yh:return{byteLength:1,components:1};case br:case $h:case oi:return{byteLength:2,components:1};case Il:case Rl:return{byteLength:2,components:4};case si:case Pl:case ri:return{byteLength:4,components:1};case qh:case Zh:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}var Zi,Ji,xd,Rh,yd,Go,_d,_r,ji,An,bn,xi,vr,Lh,Nh,Dh,vd,ws,bd,Md,Sd,wd,Ed,Td,Ad,Cd,Oh,Fh,Pd,Id,Rd,Ld,Nd,Dd,Od,Fd,Ud,Ya,$a,qa,sr,Za,Ja,ja,Ka,Uh,Bd,kd,ii,Bh,kh,zh,Vh,Hh,Gh,Xh,Wh,Ki,Es,Tl,Al,Xo,Qa,di,tl,un,zd,Wo,mn,Cl,Qi,In,Yh,$h,br,Pl,si,ri,oi,Il,Rl,Mr,qh,Zh,Jh,jh,Gn,pi,ts,Kh,Ll,es,Nl,Dl,Yo,$o,qo,Zo,Ol,Fl,Ul,Bl,kl,zl,Vl,Hl,Gl,Jo,Xl,Wl,Yl,$l,ql,Zl,Jl,jl,Kl,Ql,tc,ec,nc,ic,sc,rc,oc,ac,lc,cc,jo,hc,mo,el,Xa,vh,bh,Mh,Sh,Vd,uc,Hd,Ri,En,go,xo,Ne,Wa,Gd,Xd,Wd,Yd,fc,$d,qd,dc,Zd,Qh,Ts,tu,ti,rr,Uf,or,Qd,ei,yn,Bf,nr,ar,nu,jt,On,tt,Zc,kf,me,Jc,zf,Vf,Ee,ks,nl,D0,lr,O0,Kc,Tn,$e,il,Pn,vo,sl,Oe,zs,Jn,F0,U0,Fi,pa,Ln,Hf,Gf,Ii,cr,B0,Xf,Vs,Si,ma,so,k0,z0,Wf,Yf,$f,qf,V0,Hs,Qc,rn,Hn,H0,hr,tp,Ui,ga,le,_n,bo,jn,wi,eh,Ei,Gs,Xs,Zf,nh,ih,sh,rh,oh,ah,fi,Vi,Ti,Kn,xa,Ws,Ys,$s,Bi,ki,ms,ro,ya,_a,gs,nn,va,G0,He,Mo,So,Ge,X0,oo,ch,vs,W0,Vn,hh,qs,Nn,ao,hn,We,rl,wn,wo,uh,Y0,$0,Dn,q0,mi,ur,Zs,lo,Js,js,Ks,co,ep,ba,ho,Ma,Jf,fh,jf,Eo,Ai,dh,wa,Ea,Hi,Fn,Kf,xs,Ta,Qf,Aa,Ca,Pa,ph,Ia,td,Ra,Re,ol,ys,J0,Na,fr,ni,al,ll,ed,uo,Da,mh,nd,bs,id,sd,Ms,To,Ao,Gi,cl,Co,Xi,gi,dr,Fa,Ua,gh,Ba,pr,Th,Lo,No,Do,Wi,op,mg,gg,Un,hl,Bn,ul,fl,Oo,Yi,dl,pl,ml,gl,kn,$i,xl,yl,_l,Fo,qi,vl,bl,lp,Ml,Uo,Bo,yh,hd,ud,Sl,Va,Ha,ui,ko,zi,fd,dd,vn,gr,Ah,xr,tr,er,wl,El,su,_g,ru,vg,bg,Mg,Sg,wg,Eg,Tg,Ch,Xe,RS,pd,zo,yr,Ih,gd,Ga,_h,Vo,Ho,au=pe(()=>{Zi={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Ji={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},xd=0,Rh=1,yd=2,Go=1,_d=2,_r=3,ji=0,An=1,bn=2,xi=0,vr=1,Lh=2,Nh=3,Dh=4,vd=5,ws=100,bd=101,Md=102,Sd=103,wd=104,Ed=200,Td=201,Ad=202,Cd=203,Oh=204,Fh=205,Pd=206,Id=207,Rd=208,Ld=209,Nd=210,Dd=211,Od=212,Fd=213,Ud=214,Ya=0,$a=1,qa=2,sr=3,Za=4,Ja=5,ja=6,Ka=7,Uh=0,Bd=1,kd=2,ii=0,Bh=1,kh=2,zh=3,Vh=4,Hh=5,Gh=6,Xh=7,Wh=300,Ki=301,Es=302,Tl=303,Al=304,Xo=306,Qa=1e3,di=1001,tl=1002,un=1003,zd=1004,Wo=1005,mn=1006,Cl=1007,Qi=1008,In=1009,Yh=1010,$h=1011,br=1012,Pl=1013,si=1014,ri=1015,oi=1016,Il=1017,Rl=1018,Mr=1020,qh=35902,Zh=35899,Jh=1021,jh=1022,Gn=1023,pi=1026,ts=1027,Kh=1028,Ll=1029,es=1030,Nl=1031,Dl=1033,Yo=33776,$o=33777,qo=33778,Zo=33779,Ol=35840,Fl=35841,Ul=35842,Bl=35843,kl=36196,zl=37492,Vl=37496,Hl=37488,Gl=37489,Jo=37490,Xl=37491,Wl=37808,Yl=37809,$l=37810,ql=37811,Zl=37812,Jl=37813,jl=37814,Kl=37815,Ql=37816,tc=37817,ec=37818,nc=37819,ic=37820,sc=37821,rc=36492,oc=36494,ac=36495,lc=36283,cc=36284,jo=36285,hc=36286,mo=2300,el=2301,Xa=2302,vh=2303,bh=2400,Mh=2401,Sh=2402,Vd=3200,uc=0,Hd=1,Ri="",En="srgb",go="srgb-linear",xo="linear",Ne="srgb",Wa=7680,Gd=519,Xd=512,Wd=513,Yd=514,fc=515,$d=516,qd=517,dc=518,Zd=519,Qh=35044,Ts=35048,tu="300 es",ti=2e3,rr=2001;Uf={},or=null;Qd={[Ya]:$a,[qa]:ja,[Za]:Ka,[sr]:Ja,[$a]:Ya,[ja]:qa,[Ka]:Za,[Ja]:sr},ei=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){let i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){let i=this._listeners;if(i===void 0)return;let s=i[t];if(s!==void 0){let a=s.indexOf(e);a!==-1&&s.splice(a,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let i=e[t.type];if(i!==void 0){t.target=this;let s=i.slice(0);for(let a=0,l=s.length;a<l;a++)s[a].call(this,t);t.target=null}}},yn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Bf=1234567,nr=Math.PI/180,ar=180/Math.PI;nu={DEG2RAD:nr,RAD2DEG:ar,generateUUID:Ci,clamp:Me,euclideanModulo:eu,mapLinear:x0,inverseLerp:y0,lerp:po,damp:_0,pingpong:v0,smoothstep:b0,smootherstep:M0,randInt:S0,randFloat:w0,randFloatSpread:E0,seededRandom:T0,degToRad:A0,radToDeg:C0,isPowerOfTwo:P0,ceilPowerOfTwo:I0,floorPowerOfTwo:R0,setQuaternionFromProperEuler:L0,normalize:De,denormalize:Qn},jt=class n{static{n.prototype.isVector2=!0}constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,i=this.y,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6],this.y=s[1]*e+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Me(this.x,t.x,e.x),this.y=Me(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Me(this.x,t,e),this.y=Me(this.y,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Me(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(Me(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let i=Math.cos(e),s=Math.sin(e),a=this.x-t.x,l=this.y-t.y;return this.x=a*i-l*s+t.x,this.y=a*s+l*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},On=class{constructor(t=0,e=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=s}static slerpFlat(t,e,i,s,a,l,o){let h=i[s+0],f=i[s+1],d=i[s+2],g=i[s+3],p=a[l+0],x=a[l+1],v=a[l+2],b=a[l+3];if(g!==b||h!==p||f!==x||d!==v){let y=h*p+f*x+d*v+g*b;y<0&&(p=-p,x=-x,v=-v,b=-b,y=-y);let _=1-o;if(y<.9995){let A=Math.acos(y),T=Math.sin(A);_=Math.sin(_*A)/T,o=Math.sin(o*A)/T,h=h*_+p*o,f=f*_+x*o,d=d*_+v*o,g=g*_+b*o}else{h=h*_+p*o,f=f*_+x*o,d=d*_+v*o,g=g*_+b*o;let A=1/Math.sqrt(h*h+f*f+d*d+g*g);h*=A,f*=A,d*=A,g*=A}}t[e]=h,t[e+1]=f,t[e+2]=d,t[e+3]=g}static multiplyQuaternionsFlat(t,e,i,s,a,l){let o=i[s],h=i[s+1],f=i[s+2],d=i[s+3],g=a[l],p=a[l+1],x=a[l+2],v=a[l+3];return t[e]=o*v+d*g+h*x-f*p,t[e+1]=h*v+d*p+f*g-o*x,t[e+2]=f*v+d*x+o*p-h*g,t[e+3]=d*v-o*g-h*p-f*x,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,s){return this._x=t,this._y=e,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let i=t._x,s=t._y,a=t._z,l=t._order,o=Math.cos,h=Math.sin,f=o(i/2),d=o(s/2),g=o(a/2),p=h(i/2),x=h(s/2),v=h(a/2);switch(l){case"XYZ":this._x=p*d*g+f*x*v,this._y=f*x*g-p*d*v,this._z=f*d*v+p*x*g,this._w=f*d*g-p*x*v;break;case"YXZ":this._x=p*d*g+f*x*v,this._y=f*x*g-p*d*v,this._z=f*d*v-p*x*g,this._w=f*d*g+p*x*v;break;case"ZXY":this._x=p*d*g-f*x*v,this._y=f*x*g+p*d*v,this._z=f*d*v+p*x*g,this._w=f*d*g-p*x*v;break;case"ZYX":this._x=p*d*g-f*x*v,this._y=f*x*g+p*d*v,this._z=f*d*v-p*x*g,this._w=f*d*g+p*x*v;break;case"YZX":this._x=p*d*g+f*x*v,this._y=f*x*g+p*d*v,this._z=f*d*v-p*x*g,this._w=f*d*g-p*x*v;break;case"XZY":this._x=p*d*g-f*x*v,this._y=f*x*g-p*d*v,this._z=f*d*v+p*x*g,this._w=f*d*g+p*x*v;break;default:ie("Quaternion: .setFromEuler() encountered an unknown order: "+l)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let i=e/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,i=e[0],s=e[4],a=e[8],l=e[1],o=e[5],h=e[9],f=e[2],d=e[6],g=e[10],p=i+o+g;if(p>0){let x=.5/Math.sqrt(p+1);this._w=.25/x,this._x=(d-h)*x,this._y=(a-f)*x,this._z=(l-s)*x}else if(i>o&&i>g){let x=2*Math.sqrt(1+i-o-g);this._w=(d-h)/x,this._x=.25*x,this._y=(s+l)/x,this._z=(a+f)/x}else if(o>g){let x=2*Math.sqrt(1+o-i-g);this._w=(a-f)/x,this._x=(s+l)/x,this._y=.25*x,this._z=(h+d)/x}else{let x=2*Math.sqrt(1+g-i-o);this._w=(l-s)/x,this._x=(a+f)/x,this._y=(h+d)/x,this._z=.25*x}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<1e-8?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Me(this.dot(t),-1,1)))}rotateTowards(t,e){let i=this.angleTo(t);if(i===0)return this;let s=Math.min(1,e/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let i=t._x,s=t._y,a=t._z,l=t._w,o=e._x,h=e._y,f=e._z,d=e._w;return this._x=i*d+l*o+s*f-a*h,this._y=s*d+l*h+a*o-i*f,this._z=a*d+l*f+i*h-s*o,this._w=l*d-i*o-s*h-a*f,this._onChangeCallback(),this}slerp(t,e){let i=t._x,s=t._y,a=t._z,l=t._w,o=this.dot(t);o<0&&(i=-i,s=-s,a=-a,l=-l,o=-o);let h=1-e;if(o<.9995){let f=Math.acos(o),d=Math.sin(f);h=Math.sin(h*f)/d,e=Math.sin(e*f)/d,this._x=this._x*h+i*e,this._y=this._y*h+s*e,this._z=this._z*h+a*e,this._w=this._w*h+l*e,this._onChangeCallback()}else this._x=this._x*h+i*e,this._y=this._y*h+s*e,this._z=this._z*h+a*e,this._w=this._w*h+l*e,this.normalize();return this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),a=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),a*Math.sin(e),a*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},tt=class n{static{n.prototype.isVector3=!0}constructor(t=0,e=0,i=0){this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(kf.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(kf.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,i=this.y,s=this.z,a=t.elements;return this.x=a[0]*e+a[3]*i+a[6]*s,this.y=a[1]*e+a[4]*i+a[7]*s,this.z=a[2]*e+a[5]*i+a[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,i=this.y,s=this.z,a=t.elements,l=1/(a[3]*e+a[7]*i+a[11]*s+a[15]);return this.x=(a[0]*e+a[4]*i+a[8]*s+a[12])*l,this.y=(a[1]*e+a[5]*i+a[9]*s+a[13])*l,this.z=(a[2]*e+a[6]*i+a[10]*s+a[14])*l,this}applyQuaternion(t){let e=this.x,i=this.y,s=this.z,a=t.x,l=t.y,o=t.z,h=t.w,f=2*(l*s-o*i),d=2*(o*e-a*s),g=2*(a*i-l*e);return this.x=e+h*f+l*g-o*d,this.y=i+h*d+o*f-a*g,this.z=s+h*g+a*d-l*f,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,i=this.y,s=this.z,a=t.elements;return this.x=a[0]*e+a[4]*i+a[8]*s,this.y=a[1]*e+a[5]*i+a[9]*s,this.z=a[2]*e+a[6]*i+a[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Me(this.x,t.x,e.x),this.y=Me(this.y,t.y,e.y),this.z=Me(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Me(this.x,t,e),this.y=Me(this.y,t,e),this.z=Me(this.z,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Me(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let i=t.x,s=t.y,a=t.z,l=e.x,o=e.y,h=e.z;return this.x=s*h-a*o,this.y=a*l-i*h,this.z=i*o-s*l,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return Zc.copy(this).projectOnVector(t),this.sub(Zc)}reflect(t){return this.sub(Zc.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(Me(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return e*e+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){let s=Math.sin(e)*t;return this.x=s*Math.sin(i),this.y=Math.cos(e)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Zc=new tt,kf=new On,me=class n{static{n.prototype.isMatrix3=!0}constructor(t,e,i,s,a,l,o,h,f){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,s,a,l,o,h,f)}set(t,e,i,s,a,l,o,h,f){let d=this.elements;return d[0]=t,d[1]=s,d[2]=o,d[3]=e,d[4]=a,d[5]=h,d[6]=i,d[7]=l,d[8]=f,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,s=e.elements,a=this.elements,l=i[0],o=i[3],h=i[6],f=i[1],d=i[4],g=i[7],p=i[2],x=i[5],v=i[8],b=s[0],y=s[3],_=s[6],A=s[1],T=s[4],S=s[7],I=s[2],E=s[5],C=s[8];return a[0]=l*b+o*A+h*I,a[3]=l*y+o*T+h*E,a[6]=l*_+o*S+h*C,a[1]=f*b+d*A+g*I,a[4]=f*y+d*T+g*E,a[7]=f*_+d*S+g*C,a[2]=p*b+x*A+v*I,a[5]=p*y+x*T+v*E,a[8]=p*_+x*S+v*C,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[1],s=t[2],a=t[3],l=t[4],o=t[5],h=t[6],f=t[7],d=t[8];return e*l*d-e*o*f-i*a*d+i*o*h+s*a*f-s*l*h}invert(){let t=this.elements,e=t[0],i=t[1],s=t[2],a=t[3],l=t[4],o=t[5],h=t[6],f=t[7],d=t[8],g=d*l-o*f,p=o*h-d*a,x=f*a-l*h,v=e*g+i*p+s*x;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);let b=1/v;return t[0]=g*b,t[1]=(s*f-d*i)*b,t[2]=(o*i-s*l)*b,t[3]=p*b,t[4]=(d*e-s*h)*b,t[5]=(s*a-o*e)*b,t[6]=x*b,t[7]=(i*h-f*e)*b,t[8]=(l*e-i*a)*b,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,s,a,l,o){let h=Math.cos(a),f=Math.sin(a);return this.set(i*h,i*f,-i*(h*l+f*o)+l+t,-s*f,s*h,-s*(-f*l+h*o)+o+e,0,0,1),this}scale(t,e){return _s("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Jc.makeScale(t,e)),this}rotate(t){return _s("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Jc.makeRotation(-t)),this}translate(t,e){return _s("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Jc.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,i=t.elements;for(let s=0;s<9;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Jc=new me,zf=new me().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Vf=new me().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Ee=N0();nl=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{ks===void 0&&(ks=yo("canvas")),ks.width=t.width,ks.height=t.height;let s=ks.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),i=ks}return i.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=yo("canvas");e.width=t.width,e.height=t.height;let i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);let s=i.getImageData(0,0,t.width,t.height),a=s.data;for(let l=0;l<a.length;l++)a[l]=Pi(a[l]/255)*255;return i.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(Pi(e[i]/255)*255):e[i]=Pi(e[i]);return{data:e,width:t.width,height:t.height}}else return ie("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},D0=0,lr=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:D0++}),this.uuid=Ci(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let a;if(Array.isArray(s)){a=[];for(let l=0,o=s.length;l<o;l++)s[l].isDataTexture?a.push(jc(s[l].image)):a.push(jc(s[l]))}else a=jc(s);i.url=a}return e||(t.images[this.uuid]=i),i}};O0=0,Kc=new tt,Tn=class n extends ei{constructor(t=n.DEFAULT_IMAGE,e=n.DEFAULT_MAPPING,i=di,s=di,a=mn,l=Qi,o=Gn,h=In,f=n.DEFAULT_ANISOTROPY,d=Ri){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:O0++}),this.uuid=Ci(),this.name="",this.source=new lr(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=a,this.minFilter=l,this.anisotropy=f,this.format=o,this.internalFormat=null,this.type=h,this.offset=new jt(0,0),this.repeat=new jt(1,1),this.center=new jt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new me,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Kc).x}get height(){return this.source.getSize(Kc).y}get depth(){return this.source.getSize(Kc).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let i=t[e];if(i===void 0){ie(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){ie(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Wh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Qa:t.x=t.x-Math.floor(t.x);break;case di:t.x=t.x<0?0:1;break;case tl:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Qa:t.y=t.y-Math.floor(t.y);break;case di:t.y=t.y<0?0:1;break;case tl:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Tn.DEFAULT_IMAGE=null;Tn.DEFAULT_MAPPING=Wh;Tn.DEFAULT_ANISOTROPY=1;$e=class n{static{n.prototype.isVector4=!0}constructor(t=0,e=0,i=0,s=1){this.x=t,this.y=e,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,i=this.y,s=this.z,a=this.w,l=t.elements;return this.x=l[0]*e+l[4]*i+l[8]*s+l[12]*a,this.y=l[1]*e+l[5]*i+l[9]*s+l[13]*a,this.z=l[2]*e+l[6]*i+l[10]*s+l[14]*a,this.w=l[3]*e+l[7]*i+l[11]*s+l[15]*a,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,s,a,h=t.elements,f=h[0],d=h[4],g=h[8],p=h[1],x=h[5],v=h[9],b=h[2],y=h[6],_=h[10];if(Math.abs(d-p)<.01&&Math.abs(g-b)<.01&&Math.abs(v-y)<.01){if(Math.abs(d+p)<.1&&Math.abs(g+b)<.1&&Math.abs(v+y)<.1&&Math.abs(f+x+_-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let T=(f+1)/2,S=(x+1)/2,I=(_+1)/2,E=(d+p)/4,C=(g+b)/4,w=(v+y)/4;return T>S&&T>I?T<.01?(i=0,s=.707106781,a=.707106781):(i=Math.sqrt(T),s=E/i,a=C/i):S>I?S<.01?(i=.707106781,s=0,a=.707106781):(s=Math.sqrt(S),i=E/s,a=w/s):I<.01?(i=.707106781,s=.707106781,a=0):(a=Math.sqrt(I),i=C/a,s=w/a),this.set(i,s,a,e),this}let A=Math.sqrt((y-v)*(y-v)+(g-b)*(g-b)+(p-d)*(p-d));return Math.abs(A)<.001&&(A=1),this.x=(y-v)/A,this.y=(g-b)/A,this.z=(p-d)/A,this.w=Math.acos((f+x+_-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Me(this.x,t.x,e.x),this.y=Me(this.y,t.y,e.y),this.z=Me(this.z,t.z,e.z),this.w=Me(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Me(this.x,t,e),this.y=Me(this.y,t,e),this.z=Me(this.z,t,e),this.w=Me(this.w,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Me(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},il=class extends ei{constructor(t=1,e=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:mn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=i.depth,this.scissor=new $e(0,0,t,e),this.scissorTest=!1,this.viewport=new $e(0,0,t,e),this.textures=[];let s={width:t,height:e,depth:i.depth},a=new Tn(s),l=i.count;for(let o=0;o<l;o++)this.textures[o]=a.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:mn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let s=0,a=this.textures.length;s<a;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,i=t.textures.length;e<i;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new lr(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Pn=class extends il{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}},vo=class extends Tn{constructor(t=null,e=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=un,this.minFilter=un,this.wrapR=di,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}},sl=class extends Tn{constructor(t=null,e=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=un,this.minFilter=un,this.wrapR=di,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}},Oe=class n{static{n.prototype.isMatrix4=!0}constructor(t,e,i,s,a,l,o,h,f,d,g,p,x,v,b,y){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,s,a,l,o,h,f,d,g,p,x,v,b,y)}set(t,e,i,s,a,l,o,h,f,d,g,p,x,v,b,y){let _=this.elements;return _[0]=t,_[4]=e,_[8]=i,_[12]=s,_[1]=a,_[5]=l,_[9]=o,_[13]=h,_[2]=f,_[6]=d,_[10]=g,_[14]=p,_[3]=x,_[7]=v,_[11]=b,_[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){let e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),i.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,i=t.elements,s=1/zs.setFromMatrixColumn(t,0).length(),a=1/zs.setFromMatrixColumn(t,1).length(),l=1/zs.setFromMatrixColumn(t,2).length();return e[0]=i[0]*s,e[1]=i[1]*s,e[2]=i[2]*s,e[3]=0,e[4]=i[4]*a,e[5]=i[5]*a,e[6]=i[6]*a,e[7]=0,e[8]=i[8]*l,e[9]=i[9]*l,e[10]=i[10]*l,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,i=t.x,s=t.y,a=t.z,l=Math.cos(i),o=Math.sin(i),h=Math.cos(s),f=Math.sin(s),d=Math.cos(a),g=Math.sin(a);if(t.order==="XYZ"){let p=l*d,x=l*g,v=o*d,b=o*g;e[0]=h*d,e[4]=-h*g,e[8]=f,e[1]=x+v*f,e[5]=p-b*f,e[9]=-o*h,e[2]=b-p*f,e[6]=v+x*f,e[10]=l*h}else if(t.order==="YXZ"){let p=h*d,x=h*g,v=f*d,b=f*g;e[0]=p+b*o,e[4]=v*o-x,e[8]=l*f,e[1]=l*g,e[5]=l*d,e[9]=-o,e[2]=x*o-v,e[6]=b+p*o,e[10]=l*h}else if(t.order==="ZXY"){let p=h*d,x=h*g,v=f*d,b=f*g;e[0]=p-b*o,e[4]=-l*g,e[8]=v+x*o,e[1]=x+v*o,e[5]=l*d,e[9]=b-p*o,e[2]=-l*f,e[6]=o,e[10]=l*h}else if(t.order==="ZYX"){let p=l*d,x=l*g,v=o*d,b=o*g;e[0]=h*d,e[4]=v*f-x,e[8]=p*f+b,e[1]=h*g,e[5]=b*f+p,e[9]=x*f-v,e[2]=-f,e[6]=o*h,e[10]=l*h}else if(t.order==="YZX"){let p=l*h,x=l*f,v=o*h,b=o*f;e[0]=h*d,e[4]=b-p*g,e[8]=v*g+x,e[1]=g,e[5]=l*d,e[9]=-o*d,e[2]=-f*d,e[6]=x*g+v,e[10]=p-b*g}else if(t.order==="XZY"){let p=l*h,x=l*f,v=o*h,b=o*f;e[0]=h*d,e[4]=-g,e[8]=f*d,e[1]=p*g+b,e[5]=l*d,e[9]=x*g-v,e[2]=v*g-x,e[6]=o*d,e[10]=b*g+p}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(F0,t,U0)}lookAt(t,e,i){let s=this.elements;return Ln.subVectors(t,e),Ln.lengthSq()===0&&(Ln.z=1),Ln.normalize(),Fi.crossVectors(i,Ln),Fi.lengthSq()===0&&(Math.abs(i.z)===1?Ln.x+=1e-4:Ln.z+=1e-4,Ln.normalize(),Fi.crossVectors(i,Ln)),Fi.normalize(),pa.crossVectors(Ln,Fi),s[0]=Fi.x,s[4]=pa.x,s[8]=Ln.x,s[1]=Fi.y,s[5]=pa.y,s[9]=Ln.y,s[2]=Fi.z,s[6]=pa.z,s[10]=Ln.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,s=e.elements,a=this.elements,l=i[0],o=i[4],h=i[8],f=i[12],d=i[1],g=i[5],p=i[9],x=i[13],v=i[2],b=i[6],y=i[10],_=i[14],A=i[3],T=i[7],S=i[11],I=i[15],E=s[0],C=s[4],w=s[8],N=s[12],F=s[1],U=s[5],G=s[9],V=s[13],k=s[2],q=s[6],Z=s[10],B=s[14],K=s[3],j=s[7],st=s[11],X=s[15];return a[0]=l*E+o*F+h*k+f*K,a[4]=l*C+o*U+h*q+f*j,a[8]=l*w+o*G+h*Z+f*st,a[12]=l*N+o*V+h*B+f*X,a[1]=d*E+g*F+p*k+x*K,a[5]=d*C+g*U+p*q+x*j,a[9]=d*w+g*G+p*Z+x*st,a[13]=d*N+g*V+p*B+x*X,a[2]=v*E+b*F+y*k+_*K,a[6]=v*C+b*U+y*q+_*j,a[10]=v*w+b*G+y*Z+_*st,a[14]=v*N+b*V+y*B+_*X,a[3]=A*E+T*F+S*k+I*K,a[7]=A*C+T*U+S*q+I*j,a[11]=A*w+T*G+S*Z+I*st,a[15]=A*N+T*V+S*B+I*X,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[4],s=t[8],a=t[12],l=t[1],o=t[5],h=t[9],f=t[13],d=t[2],g=t[6],p=t[10],x=t[14],v=t[3],b=t[7],y=t[11],_=t[15],A=h*x-f*p,T=o*x-f*g,S=o*p-h*g,I=l*x-f*d,E=l*p-h*d,C=l*g-o*d;return e*(b*A-y*T+_*S)-i*(v*A-y*I+_*E)+s*(v*T-b*I+_*C)-a*(v*S-b*E+y*C)}determinantAffine(){let t=this.elements,e=t[0],i=t[4],s=t[8],a=t[1],l=t[5],o=t[9],h=t[2],f=t[6],d=t[10];return e*(l*d-o*f)-i*(a*d-o*h)+s*(a*f-l*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=i),this}invert(){let t=this.elements,e=t[0],i=t[1],s=t[2],a=t[3],l=t[4],o=t[5],h=t[6],f=t[7],d=t[8],g=t[9],p=t[10],x=t[11],v=t[12],b=t[13],y=t[14],_=t[15],A=e*o-i*l,T=e*h-s*l,S=e*f-a*l,I=i*h-s*o,E=i*f-a*o,C=s*f-a*h,w=d*b-g*v,N=d*y-p*v,F=d*_-x*v,U=g*y-p*b,G=g*_-x*b,V=p*_-x*y,k=A*V-T*G+S*U+I*F-E*N+C*w;if(k===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let q=1/k;return t[0]=(o*V-h*G+f*U)*q,t[1]=(s*G-i*V-a*U)*q,t[2]=(b*C-y*E+_*I)*q,t[3]=(p*E-g*C-x*I)*q,t[4]=(h*F-l*V-f*N)*q,t[5]=(e*V-s*F+a*N)*q,t[6]=(y*S-v*C-_*T)*q,t[7]=(d*C-p*S+x*T)*q,t[8]=(l*G-o*F+f*w)*q,t[9]=(i*F-e*G-a*w)*q,t[10]=(v*E-b*S+_*A)*q,t[11]=(g*S-d*E-x*A)*q,t[12]=(o*N-l*U-h*w)*q,t[13]=(e*U-i*N+s*w)*q,t[14]=(b*T-v*I-y*A)*q,t[15]=(d*I-g*T+p*A)*q,this}scale(t){let e=this.elements,i=t.x,s=t.y,a=t.z;return e[0]*=i,e[4]*=s,e[8]*=a,e[1]*=i,e[5]*=s,e[9]*=a,e[2]*=i,e[6]*=s,e[10]*=a,e[3]*=i,e[7]*=s,e[11]*=a,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,s))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let i=Math.cos(e),s=Math.sin(e),a=1-i,l=t.x,o=t.y,h=t.z,f=a*l,d=a*o;return this.set(f*l+i,f*o-s*h,f*h+s*o,0,f*o+s*h,d*o+i,d*h-s*l,0,f*h-s*o,d*h+s*l,a*h*h+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,s,a,l){return this.set(1,i,a,0,t,1,l,0,e,s,1,0,0,0,0,1),this}compose(t,e,i){let s=this.elements,a=e._x,l=e._y,o=e._z,h=e._w,f=a+a,d=l+l,g=o+o,p=a*f,x=a*d,v=a*g,b=l*d,y=l*g,_=o*g,A=h*f,T=h*d,S=h*g,I=i.x,E=i.y,C=i.z;return s[0]=(1-(b+_))*I,s[1]=(x+S)*I,s[2]=(v-T)*I,s[3]=0,s[4]=(x-S)*E,s[5]=(1-(p+_))*E,s[6]=(y+A)*E,s[7]=0,s[8]=(v+T)*C,s[9]=(y-A)*C,s[10]=(1-(p+b))*C,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,i){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let a=this.determinantAffine();if(a===0)return i.set(1,1,1),e.identity(),this;let l=zs.set(s[0],s[1],s[2]).length(),o=zs.set(s[4],s[5],s[6]).length(),h=zs.set(s[8],s[9],s[10]).length();a<0&&(l=-l),Jn.copy(this);let f=1/l,d=1/o,g=1/h;return Jn.elements[0]*=f,Jn.elements[1]*=f,Jn.elements[2]*=f,Jn.elements[4]*=d,Jn.elements[5]*=d,Jn.elements[6]*=d,Jn.elements[8]*=g,Jn.elements[9]*=g,Jn.elements[10]*=g,e.setFromRotationMatrix(Jn),i.x=l,i.y=o,i.z=h,this}makePerspective(t,e,i,s,a,l,o=ti,h=!1){let f=this.elements,d=2*a/(e-t),g=2*a/(i-s),p=(e+t)/(e-t),x=(i+s)/(i-s),v,b;if(h)v=a/(l-a),b=l*a/(l-a);else if(o===ti)v=-(l+a)/(l-a),b=-2*l*a/(l-a);else if(o===rr)v=-l/(l-a),b=-l*a/(l-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return f[0]=d,f[4]=0,f[8]=p,f[12]=0,f[1]=0,f[5]=g,f[9]=x,f[13]=0,f[2]=0,f[6]=0,f[10]=v,f[14]=b,f[3]=0,f[7]=0,f[11]=-1,f[15]=0,this}makeOrthographic(t,e,i,s,a,l,o=ti,h=!1){let f=this.elements,d=2/(e-t),g=2/(i-s),p=-(e+t)/(e-t),x=-(i+s)/(i-s),v,b;if(h)v=1/(l-a),b=l/(l-a);else if(o===ti)v=-2/(l-a),b=-(l+a)/(l-a);else if(o===rr)v=-1/(l-a),b=-a/(l-a);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return f[0]=d,f[4]=0,f[8]=0,f[12]=p,f[1]=0,f[5]=g,f[9]=0,f[13]=x,f[2]=0,f[6]=0,f[10]=v,f[14]=b,f[3]=0,f[7]=0,f[11]=0,f[15]=1,this}equals(t){let e=this.elements,i=t.elements;for(let s=0;s<16;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}},zs=new tt,Jn=new Oe,F0=new tt(0,0,0),U0=new tt(1,1,1),Fi=new tt,pa=new tt,Ln=new tt,Hf=new Oe,Gf=new On,Ii=class n{constructor(t=0,e=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,s=this._order){return this._x=t,this._y=e,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){let s=t.elements,a=s[0],l=s[4],o=s[8],h=s[1],f=s[5],d=s[9],g=s[2],p=s[6],x=s[10];switch(e){case"XYZ":this._y=Math.asin(Me(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-d,x),this._z=Math.atan2(-l,a)):(this._x=Math.atan2(p,f),this._z=0);break;case"YXZ":this._x=Math.asin(-Me(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(o,x),this._z=Math.atan2(h,f)):(this._y=Math.atan2(-g,a),this._z=0);break;case"ZXY":this._x=Math.asin(Me(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-g,x),this._z=Math.atan2(-l,f)):(this._y=0,this._z=Math.atan2(h,a));break;case"ZYX":this._y=Math.asin(-Me(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(p,x),this._z=Math.atan2(h,a)):(this._x=0,this._z=Math.atan2(-l,f));break;case"YZX":this._z=Math.asin(Me(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-d,f),this._y=Math.atan2(-g,a)):(this._x=0,this._y=Math.atan2(o,x));break;case"XZY":this._z=Math.asin(-Me(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(p,f),this._y=Math.atan2(o,a)):(this._x=Math.atan2(-d,x),this._y=0);break;default:ie("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return Hf.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Hf,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Gf.setFromEuler(this),this.setFromQuaternion(Gf,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Ii.DEFAULT_ORDER="XYZ";cr=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},B0=0,Xf=new tt,Vs=new On,Si=new Oe,ma=new tt,so=new tt,k0=new tt,z0=new On,Wf=new tt(1,0,0),Yf=new tt(0,1,0),$f=new tt(0,0,1),qf={type:"added"},V0={type:"removed"},Hs={type:"childadded",child:null},Qc={type:"childremoved",child:null},rn=class n extends ei{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:B0++}),this.uuid=Ci(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let t=new tt,e=new Ii,i=new On,s=new tt(1,1,1);function a(){i.setFromEuler(e,!1)}function l(){e.setFromQuaternion(i,void 0,!1)}e._onChange(a),i._onChange(l),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Oe},normalMatrix:{value:new me}}),this.matrix=new Oe,this.matrixWorld=new Oe,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new cr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Vs.setFromAxisAngle(t,e),this.quaternion.multiply(Vs),this}rotateOnWorldAxis(t,e){return Vs.setFromAxisAngle(t,e),this.quaternion.premultiply(Vs),this}rotateX(t){return this.rotateOnAxis(Wf,t)}rotateY(t){return this.rotateOnAxis(Yf,t)}rotateZ(t){return this.rotateOnAxis($f,t)}translateOnAxis(t,e){return Xf.copy(t).applyQuaternion(this.quaternion),this.position.add(Xf.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Wf,t)}translateY(t){return this.translateOnAxis(Yf,t)}translateZ(t){return this.translateOnAxis($f,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Si.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?ma.copy(t):ma.set(t,e,i);let s=this.parent;this.updateWorldMatrix(!0,!1),so.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Si.lookAt(so,ma,this.up):Si.lookAt(ma,so,this.up),this.quaternion.setFromRotationMatrix(Si),s&&(Si.extractRotation(s.matrixWorld),Vs.setFromRotationMatrix(Si),this.quaternion.premultiply(Vs.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(se("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(qf),Hs.child=t,this.dispatchEvent(Hs),Hs.child=null):se("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(V0),Qc.child=t,this.dispatchEvent(Qc),Qc.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Si.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Si.multiply(t.parent.matrixWorld)),t.applyMatrix4(Si),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(qf),Hs.child=t,this.dispatchEvent(Hs),Hs.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,s=this.children.length;i<s;i++){let l=this.children[i].getObjectByProperty(t,e);if(l!==void 0)return l}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);let s=this.children;for(let a=0,l=s.length;a<l;a++)s[a].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(so,t,k0),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(so,z0,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,i=t.y,s=t.z,a=this.matrix.elements;a[12]+=e-a[0]*e-a[4]*i-a[8]*s,a[13]+=i-a[1]*e-a[5]*i-a[9]*s,a[14]+=s-a[2]*e-a[6]*i-a[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e,i=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),e===!0){let a=this.children;for(let l=0,o=a.length;l<o;l++)a[l].updateWorldMatrix(!1,!0,i)}}toJSON(t){let e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function a(o,h){return o[h.uuid]===void 0&&(o[h.uuid]=h.toJSON(t)),h.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=a(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let h=o.shapes;if(Array.isArray(h))for(let f=0,d=h.length;f<d;f++){let g=h[f];a(t.shapes,g)}else a(t.shapes,h)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let h=0,f=this.material.length;h<f;h++)o.push(a(t.materials,this.material[h]));s.material=o}else s.material=a(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let h=this.animations[o];s.animations.push(a(t.animations,h))}}if(e){let o=l(t.geometries),h=l(t.materials),f=l(t.textures),d=l(t.images),g=l(t.shapes),p=l(t.skeletons),x=l(t.animations),v=l(t.nodes);o.length>0&&(i.geometries=o),h.length>0&&(i.materials=h),f.length>0&&(i.textures=f),d.length>0&&(i.images=d),g.length>0&&(i.shapes=g),p.length>0&&(i.skeletons=p),x.length>0&&(i.animations=x),v.length>0&&(i.nodes=v)}return i.object=s,i;function l(o){let h=[];for(let f in o){let d=o[f];delete d.metadata,h.push(d)}return h}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){let s=t.children[i];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};rn.DEFAULT_UP=new tt(0,1,0);rn.DEFAULT_MATRIX_AUTO_UPDATE=!0;rn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;Hn=class extends rn{constructor(){super(),this.isGroup=!0,this.type="Group"}},H0={type:"move"},hr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Hn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Hn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new tt,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new tt),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Hn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new tt,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new tt,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let s=null,a=null,l=null,o=this._targetRay,h=this._grip,f=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(f&&t.hand){l=!0;for(let b of t.hand.values()){let y=e.getJointPose(b,i),_=this._getHandJoint(f,b);y!==null&&(_.matrix.fromArray(y.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=y.radius),_.visible=y!==null}let d=f.joints["index-finger-tip"],g=f.joints["thumb-tip"],p=d.position.distanceTo(g.position),x=.02,v=.005;f.inputState.pinching&&p>x+v?(f.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!f.inputState.pinching&&p<=x-v&&(f.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else h!==null&&t.gripSpace&&(a=e.getPose(t.gripSpace,i),a!==null&&(h.matrix.fromArray(a.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,a.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(a.linearVelocity)):h.hasLinearVelocity=!1,a.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(a.angularVelocity)):h.hasAngularVelocity=!1,h.eventsEnabled&&h.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(s=e.getPose(t.targetRaySpace,i),s===null&&a!==null&&(s=a),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(H0)))}return o!==null&&(o.visible=s!==null),h!==null&&(h.visible=a!==null),f!==null&&(f.visible=l!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let i=new Hn;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}},tp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ui={h:0,s:0,l:0},ga={h:0,s:0,l:0};le=class{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=En){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Ee.colorSpaceToWorking(this,e),this}setRGB(t,e,i,s=Ee.workingColorSpace){return this.r=t,this.g=e,this.b=i,Ee.colorSpaceToWorking(this,s),this}setHSL(t,e,i,s=Ee.workingColorSpace){if(t=eu(t,1),e=Me(e,0,1),i=Me(i,0,1),e===0)this.r=this.g=this.b=i;else{let a=i<=.5?i*(1+e):i+e-i*e,l=2*i-a;this.r=th(l,a,t+1/3),this.g=th(l,a,t),this.b=th(l,a,t-1/3)}return Ee.colorSpaceToWorking(this,s),this}setStyle(t,e=En){function i(a){a!==void 0&&parseFloat(a)<1&&ie("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let a,l=s[1],o=s[2];switch(l){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,e);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,e);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,e);break;default:ie("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let a=s[1],l=a.length;if(l===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,e);if(l===6)return this.setHex(parseInt(a,16),e);ie("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=En){let i=tp[t.toLowerCase()];return i!==void 0?this.setHex(i,e):ie("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Pi(t.r),this.g=Pi(t.g),this.b=Pi(t.b),this}copyLinearToSRGB(t){return this.r=ir(t.r),this.g=ir(t.g),this.b=ir(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=En){return Ee.workingToColorSpace(_n.copy(this),t),Math.round(Me(_n.r*255,0,255))*65536+Math.round(Me(_n.g*255,0,255))*256+Math.round(Me(_n.b*255,0,255))}getHexString(t=En){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Ee.workingColorSpace){Ee.workingToColorSpace(_n.copy(this),e);let i=_n.r,s=_n.g,a=_n.b,l=Math.max(i,s,a),o=Math.min(i,s,a),h,f,d=(o+l)/2;if(o===l)h=0,f=0;else{let g=l-o;switch(f=d<=.5?g/(l+o):g/(2-l-o),l){case i:h=(s-a)/g+(s<a?6:0);break;case s:h=(a-i)/g+2;break;case a:h=(i-s)/g+4;break}h/=6}return t.h=h,t.s=f,t.l=d,t}getRGB(t,e=Ee.workingColorSpace){return Ee.workingToColorSpace(_n.copy(this),e),t.r=_n.r,t.g=_n.g,t.b=_n.b,t}getStyle(t=En){Ee.workingToColorSpace(_n.copy(this),t);let e=_n.r,i=_n.g,s=_n.b;return t!==En?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,e,i){return this.getHSL(Ui),this.setHSL(Ui.h+t,Ui.s+e,Ui.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(Ui),t.getHSL(ga);let i=po(Ui.h,ga.h,e),s=po(Ui.s,ga.s,e),a=po(Ui.l,ga.l,e);return this.setHSL(i,s,a),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,i=this.g,s=this.b,a=t.elements;return this.r=a[0]*e+a[3]*i+a[6]*s,this.g=a[1]*e+a[4]*i+a[7]*s,this.b=a[2]*e+a[5]*i+a[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},_n=new le;le.NAMES=tp;bo=class extends rn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ii,this.environmentIntensity=1,this.environmentRotation=new Ii,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},jn=new tt,wi=new tt,eh=new tt,Ei=new tt,Gs=new tt,Xs=new tt,Zf=new tt,nh=new tt,ih=new tt,sh=new tt,rh=new $e,oh=new $e,ah=new $e,fi=class n{constructor(t=new tt,e=new tt,i=new tt){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,s){s.subVectors(i,e),jn.subVectors(t,e),s.cross(jn);let a=s.lengthSq();return a>0?s.multiplyScalar(1/Math.sqrt(a)):s.set(0,0,0)}static getBarycoord(t,e,i,s,a){jn.subVectors(s,e),wi.subVectors(i,e),eh.subVectors(t,e);let l=jn.dot(jn),o=jn.dot(wi),h=jn.dot(eh),f=wi.dot(wi),d=wi.dot(eh),g=l*f-o*o;if(g===0)return a.set(0,0,0),null;let p=1/g,x=(f*h-o*d)*p,v=(l*d-o*h)*p;return a.set(1-x-v,v,x)}static containsPoint(t,e,i,s){return this.getBarycoord(t,e,i,s,Ei)===null?!1:Ei.x>=0&&Ei.y>=0&&Ei.x+Ei.y<=1}static getInterpolation(t,e,i,s,a,l,o,h){return this.getBarycoord(t,e,i,s,Ei)===null?(h.x=0,h.y=0,"z"in h&&(h.z=0),"w"in h&&(h.w=0),null):(h.setScalar(0),h.addScaledVector(a,Ei.x),h.addScaledVector(l,Ei.y),h.addScaledVector(o,Ei.z),h)}static getInterpolatedAttribute(t,e,i,s,a,l){return rh.setScalar(0),oh.setScalar(0),ah.setScalar(0),rh.fromBufferAttribute(t,e),oh.fromBufferAttribute(t,i),ah.fromBufferAttribute(t,s),l.setScalar(0),l.addScaledVector(rh,a.x),l.addScaledVector(oh,a.y),l.addScaledVector(ah,a.z),l}static isFrontFacing(t,e,i,s){return jn.subVectors(i,e),wi.subVectors(t,e),jn.cross(wi).dot(s)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,s){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,i,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return jn.subVectors(this.c,this.b),wi.subVectors(this.a,this.b),jn.cross(wi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return n.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return n.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,s,a){return n.getInterpolation(t,this.a,this.b,this.c,e,i,s,a)}containsPoint(t){return n.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return n.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let i=this.a,s=this.b,a=this.c,l,o;Gs.subVectors(s,i),Xs.subVectors(a,i),nh.subVectors(t,i);let h=Gs.dot(nh),f=Xs.dot(nh);if(h<=0&&f<=0)return e.copy(i);ih.subVectors(t,s);let d=Gs.dot(ih),g=Xs.dot(ih);if(d>=0&&g<=d)return e.copy(s);let p=h*g-d*f;if(p<=0&&h>=0&&d<=0)return l=h/(h-d),e.copy(i).addScaledVector(Gs,l);sh.subVectors(t,a);let x=Gs.dot(sh),v=Xs.dot(sh);if(v>=0&&x<=v)return e.copy(a);let b=x*f-h*v;if(b<=0&&f>=0&&v<=0)return o=f/(f-v),e.copy(i).addScaledVector(Xs,o);let y=d*v-x*g;if(y<=0&&g-d>=0&&x-v>=0)return Zf.subVectors(a,s),o=(g-d)/(g-d+(x-v)),e.copy(s).addScaledVector(Zf,o);let _=1/(y+b+p);return l=b*_,o=p*_,e.copy(i).addScaledVector(Gs,l).addScaledVector(Xs,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Vi=class{constructor(t=new tt(1/0,1/0,1/0),e=new tt(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(Kn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(Kn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let i=Kn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let i=t.geometry;if(i!==void 0){let a=i.getAttribute("position");if(e===!0&&a!==void 0&&t.isInstancedMesh!==!0)for(let l=0,o=a.count;l<o;l++)t.isMesh===!0?t.getVertexPosition(l,Kn):Kn.fromBufferAttribute(a,l),Kn.applyMatrix4(t.matrixWorld),this.expandByPoint(Kn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),xa.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),xa.copy(i.boundingBox)),xa.applyMatrix4(t.matrixWorld),this.union(xa)}let s=t.children;for(let a=0,l=s.length;a<l;a++)this.expandByObject(s[a],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Kn),Kn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ro),ya.subVectors(this.max,ro),Ws.subVectors(t.a,ro),Ys.subVectors(t.b,ro),$s.subVectors(t.c,ro),Bi.subVectors(Ys,Ws),ki.subVectors($s,Ys),ms.subVectors(Ws,$s);let e=[0,-Bi.z,Bi.y,0,-ki.z,ki.y,0,-ms.z,ms.y,Bi.z,0,-Bi.x,ki.z,0,-ki.x,ms.z,0,-ms.x,-Bi.y,Bi.x,0,-ki.y,ki.x,0,-ms.y,ms.x,0];return!lh(e,Ws,Ys,$s,ya)||(e=[1,0,0,0,1,0,0,0,1],!lh(e,Ws,Ys,$s,ya))?!1:(_a.crossVectors(Bi,ki),e=[_a.x,_a.y,_a.z],lh(e,Ws,Ys,$s,ya))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Kn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Kn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Ti[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Ti[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Ti[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Ti[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Ti[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Ti[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Ti[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Ti[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Ti),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},Ti=[new tt,new tt,new tt,new tt,new tt,new tt,new tt,new tt],Kn=new tt,xa=new Vi,Ws=new tt,Ys=new tt,$s=new tt,Bi=new tt,ki=new tt,ms=new tt,ro=new tt,ya=new tt,_a=new tt,gs=new tt;nn=new tt,va=new jt,G0=0,He=class extends ei{constructor(t,e,i=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:G0++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=Qh,this.updateRanges=[],this.gpuType=ri,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let s=0,a=this.itemSize;s<a;s++)this.array[t+s]=e.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)va.fromBufferAttribute(this,e),va.applyMatrix3(t),this.setXY(e,va.x,va.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)nn.fromBufferAttribute(this,e),nn.applyMatrix3(t),this.setXYZ(e,nn.x,nn.y,nn.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)nn.fromBufferAttribute(this,e),nn.applyMatrix4(t),this.setXYZ(e,nn.x,nn.y,nn.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)nn.fromBufferAttribute(this,e),nn.applyNormalMatrix(t),this.setXYZ(e,nn.x,nn.y,nn.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)nn.fromBufferAttribute(this,e),nn.transformDirection(t),this.setXYZ(e,nn.x,nn.y,nn.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=Qn(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=De(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Qn(e,this.array)),e}setX(t,e){return this.normalized&&(e=De(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Qn(e,this.array)),e}setY(t,e){return this.normalized&&(e=De(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Qn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=De(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Qn(e,this.array)),e}setW(t,e){return this.normalized&&(e=De(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=De(e,this.array),i=De(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,s){return t*=this.itemSize,this.normalized&&(e=De(e,this.array),i=De(i,this.array),s=De(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,e,i,s,a){return t*=this.itemSize,this.normalized&&(e=De(e,this.array),i=De(i,this.array),s=De(s,this.array),a=De(a,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=a,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}},Mo=class extends He{constructor(t,e,i){super(new Uint16Array(t),e,i)}},So=class extends He{constructor(t,e,i){super(new Uint32Array(t),e,i)}},Ge=class extends He{constructor(t,e,i){super(new Float32Array(t),e,i)}},X0=new Vi,oo=new tt,ch=new tt,vs=class{constructor(t=new tt,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let i=this.center;e!==void 0?i.copy(e):X0.setFromPoints(t).getCenter(i);let s=0;for(let a=0,l=t.length;a<l;a++)s=Math.max(s,i.distanceToSquared(t[a]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;oo.subVectors(t,this.center);let e=oo.lengthSq();if(e>this.radius*this.radius){let i=Math.sqrt(e),s=(i-this.radius)*.5;this.center.addScaledVector(oo,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(ch.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(oo.copy(t.center).add(ch)),this.expandByPoint(oo.copy(t.center).sub(ch))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},W0=0,Vn=new Oe,hh=new rn,qs=new tt,Nn=new Vi,ao=new Vi,hn=new tt,We=class n extends ei{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:W0++}),this.uuid=Ci(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(m0(t)?So:Mo)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let a=new me().getNormalMatrix(t);i.applyNormalMatrix(a),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return Vn.makeRotationFromQuaternion(t),this.applyMatrix4(Vn),this}rotateX(t){return Vn.makeRotationX(t),this.applyMatrix4(Vn),this}rotateY(t){return Vn.makeRotationY(t),this.applyMatrix4(Vn),this}rotateZ(t){return Vn.makeRotationZ(t),this.applyMatrix4(Vn),this}translate(t,e,i){return Vn.makeTranslation(t,e,i),this.applyMatrix4(Vn),this}scale(t,e,i){return Vn.makeScale(t,e,i),this.applyMatrix4(Vn),this}lookAt(t){return hh.lookAt(t),hh.updateMatrix(),this.applyMatrix4(hh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(qs).negate(),this.translate(qs.x,qs.y,qs.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let i=[];for(let s=0,a=t.length;s<a;s++){let l=t[s];i.push(l.x,l.y,l.z||0)}this.setAttribute("position",new Ge(i,3))}else{let i=Math.min(t.length,e.count);for(let s=0;s<i;s++){let a=t[s];e.setXYZ(s,a.x,a.y,a.z||0)}t.length>e.count&&ie("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Vi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){se("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new tt(-1/0,-1/0,-1/0),new tt(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,s=e.length;i<s;i++){let a=e[i];Nn.setFromBufferAttribute(a),this.morphTargetsRelative?(hn.addVectors(this.boundingBox.min,Nn.min),this.boundingBox.expandByPoint(hn),hn.addVectors(this.boundingBox.max,Nn.max),this.boundingBox.expandByPoint(hn)):(this.boundingBox.expandByPoint(Nn.min),this.boundingBox.expandByPoint(Nn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&se('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new vs);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){se("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new tt,1/0);return}if(t){let i=this.boundingSphere.center;if(Nn.setFromBufferAttribute(t),e)for(let a=0,l=e.length;a<l;a++){let o=e[a];ao.setFromBufferAttribute(o),this.morphTargetsRelative?(hn.addVectors(Nn.min,ao.min),Nn.expandByPoint(hn),hn.addVectors(Nn.max,ao.max),Nn.expandByPoint(hn)):(Nn.expandByPoint(ao.min),Nn.expandByPoint(ao.max))}Nn.getCenter(i);let s=0;for(let a=0,l=t.count;a<l;a++)hn.fromBufferAttribute(t,a),s=Math.max(s,i.distanceToSquared(hn));if(e)for(let a=0,l=e.length;a<l;a++){let o=e[a],h=this.morphTargetsRelative;for(let f=0,d=o.count;f<d;f++)hn.fromBufferAttribute(o,f),h&&(qs.fromBufferAttribute(t,f),hn.add(qs)),s=Math.max(s,i.distanceToSquared(hn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&se('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){se("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=e.position,s=e.normal,a=e.uv,l=this.getAttribute("tangent");(l===void 0||l.count!==i.count)&&(l=new He(new Float32Array(4*i.count),4),this.setAttribute("tangent",l));let o=[],h=[];for(let w=0;w<i.count;w++)o[w]=new tt,h[w]=new tt;let f=new tt,d=new tt,g=new tt,p=new jt,x=new jt,v=new jt,b=new tt,y=new tt;function _(w,N,F){f.fromBufferAttribute(i,w),d.fromBufferAttribute(i,N),g.fromBufferAttribute(i,F),p.fromBufferAttribute(a,w),x.fromBufferAttribute(a,N),v.fromBufferAttribute(a,F),d.sub(f),g.sub(f),x.sub(p),v.sub(p);let U=1/(x.x*v.y-v.x*x.y);isFinite(U)&&(b.copy(d).multiplyScalar(v.y).addScaledVector(g,-x.y).multiplyScalar(U),y.copy(g).multiplyScalar(x.x).addScaledVector(d,-v.x).multiplyScalar(U),o[w].add(b),o[N].add(b),o[F].add(b),h[w].add(y),h[N].add(y),h[F].add(y))}let A=this.groups;A.length===0&&(A=[{start:0,count:t.count}]);for(let w=0,N=A.length;w<N;++w){let F=A[w],U=F.start,G=F.count;for(let V=U,k=U+G;V<k;V+=3)_(t.getX(V+0),t.getX(V+1),t.getX(V+2))}let T=new tt,S=new tt,I=new tt,E=new tt;function C(w){I.fromBufferAttribute(s,w),E.copy(I);let N=o[w];T.copy(N),T.sub(I.multiplyScalar(I.dot(N))).normalize(),S.crossVectors(E,N);let U=S.dot(h[w])<0?-1:1;l.setXYZW(w,T.x,T.y,T.z,U)}for(let w=0,N=A.length;w<N;++w){let F=A[w],U=F.start,G=F.count;for(let V=U,k=U+G;V<k;V+=3)C(t.getX(V+0)),C(t.getX(V+1)),C(t.getX(V+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==e.count)i=new He(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let p=0,x=i.count;p<x;p++)i.setXYZ(p,0,0,0);let s=new tt,a=new tt,l=new tt,o=new tt,h=new tt,f=new tt,d=new tt,g=new tt;if(t)for(let p=0,x=t.count;p<x;p+=3){let v=t.getX(p+0),b=t.getX(p+1),y=t.getX(p+2);s.fromBufferAttribute(e,v),a.fromBufferAttribute(e,b),l.fromBufferAttribute(e,y),d.subVectors(l,a),g.subVectors(s,a),d.cross(g),o.fromBufferAttribute(i,v),h.fromBufferAttribute(i,b),f.fromBufferAttribute(i,y),o.add(d),h.add(d),f.add(d),i.setXYZ(v,o.x,o.y,o.z),i.setXYZ(b,h.x,h.y,h.z),i.setXYZ(y,f.x,f.y,f.z)}else for(let p=0,x=e.count;p<x;p+=3)s.fromBufferAttribute(e,p+0),a.fromBufferAttribute(e,p+1),l.fromBufferAttribute(e,p+2),d.subVectors(l,a),g.subVectors(s,a),d.cross(g),i.setXYZ(p+0,d.x,d.y,d.z),i.setXYZ(p+1,d.x,d.y,d.z),i.setXYZ(p+2,d.x,d.y,d.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)hn.fromBufferAttribute(t,e),hn.normalize(),t.setXYZ(e,hn.x,hn.y,hn.z)}toNonIndexed(){function t(o,h){let f=o.array,d=o.itemSize,g=o.normalized,p=new f.constructor(h.length*d),x=0,v=0;for(let b=0,y=h.length;b<y;b++){o.isInterleavedBufferAttribute?x=h[b]*o.data.stride+o.offset:x=h[b]*d;for(let _=0;_<d;_++)p[v++]=f[x++]}return new He(p,d,g)}if(this.index===null)return ie("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new n,i=this.index.array,s=this.attributes;for(let o in s){let h=s[o],f=t(h,i);e.setAttribute(o,f)}let a=this.morphAttributes;for(let o in a){let h=[],f=a[o];for(let d=0,g=f.length;d<g;d++){let p=f[d],x=t(p,i);h.push(x)}e.morphAttributes[o]=h}e.morphTargetsRelative=this.morphTargetsRelative;let l=this.groups;for(let o=0,h=l.length;o<h;o++){let f=l[o];e.addGroup(f.start,f.count,f.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let h=this.parameters;for(let f in h)h[f]!==void 0&&(t[f]=h[f]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let i=this.attributes;for(let h in i){let f=i[h];t.data.attributes[h]=f.toJSON(t.data)}let s={},a=!1;for(let h in this.morphAttributes){let f=this.morphAttributes[h],d=[];for(let g=0,p=f.length;g<p;g++){let x=f[g];d.push(x.toJSON(t.data))}d.length>0&&(s[h]=d,a=!0)}a&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let l=this.groups;l.length>0&&(t.data.groups=JSON.parse(JSON.stringify(l)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let i=t.index;i!==null&&this.setIndex(i.clone());let s=t.attributes;for(let f in s){let d=s[f];this.setAttribute(f,d.clone(e))}let a=t.morphAttributes;for(let f in a){let d=[],g=a[f];for(let p=0,x=g.length;p<x;p++)d.push(g[p].clone(e));this.morphAttributes[f]=d}this.morphTargetsRelative=t.morphTargetsRelative;let l=t.groups;for(let f=0,d=l.length;f<d;f++){let g=l[f];this.addGroup(g.start,g.count,g.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let h=t.boundingSphere;return h!==null&&(this.boundingSphere=h.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},rl=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Qh,this.updateRanges=[],this.version=0,this.uuid=Ci()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,i){t*=this.stride,i*=e.stride;for(let s=0,a=this.stride;s<a;s++)this.array[t+s]=e.array[i+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ci()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(e,this.stride);return i.setUsage(this.usage),i}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ci()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let e={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return e.usage=this.usage,e}},wn=new tt,wo=class n{constructor(t,e,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,i=this.data.count;e<i;e++)wn.fromBufferAttribute(this,e),wn.applyMatrix4(t),this.setXYZ(e,wn.x,wn.y,wn.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)wn.fromBufferAttribute(this,e),wn.applyNormalMatrix(t),this.setXYZ(e,wn.x,wn.y,wn.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)wn.fromBufferAttribute(this,e),wn.transformDirection(t),this.setXYZ(e,wn.x,wn.y,wn.z);return this}getComponent(t,e){let i=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(i=Qn(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=De(i,this.array)),this.data.array[t*this.data.stride+this.offset+e]=i,this}setX(t,e){return this.normalized&&(e=De(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=De(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=De(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=De(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Qn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Qn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Qn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Qn(e,this.array)),e}setXY(t,e,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=De(e,this.array),i=De(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this}setXYZ(t,e,i,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=De(e,this.array),i=De(i,this.array),s=De(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this}setXYZW(t,e,i,s,a){return t=t*this.data.stride+this.offset,this.normalized&&(e=De(e,this.array),i=De(i,this.array),s=De(s,this.array),a=De(a,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this.data.array[t+3]=a,this}clone(t){if(t===void 0){_o("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let a=0;a<this.itemSize;a++)e.push(this.data.array[s+a])}return new He(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new n(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){_o("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let a=0;a<this.itemSize;a++)e.push(this.data.array[s+a])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},uh=new tt,Y0=new tt,$0=new me,Dn=class{constructor(t=new tt(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,s){return this.normal.set(t,e,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){let s=uh.subVectors(i,e).cross(Y0.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,i=!0){let s=t.delta(uh),a=this.normal.dot(s);if(a===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let l=-(t.start.dot(this.normal)+this.constant)/a;return i===!0&&(l<0||l>1)?null:e.copy(t.start).addScaledVector(s,l)}intersectsLine(t){let e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let i=e||$0.getNormalMatrix(t),s=this.coplanarPoint(uh).applyMatrix4(t),a=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(a),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},q0=0,mi=class extends ei{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:q0++}),this.uuid=Ci(),this.name="",this.type="Material",this.blending=vr,this.side=ji,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Oh,this.blendDst=Fh,this.blendEquation=ws,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new le(0,0,0),this.blendAlpha=0,this.depthFunc=sr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Gd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Wa,this.stencilZFail=Wa,this.stencilZPass=Wa,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let i=t[e];if(i===void 0){ie(`Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){ie(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector2&&i&&i.isVector2||s&&s.isEuler&&i&&i.isEuler||s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(a=>a.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(a){let l=[];for(let o in a){let h=a[o];delete h.metadata,l.push(h)}return l}if(e){let a=s(t.textures),l=s(t.images);a.length>0&&(i.textures=a),l.length>0&&(i.images=l)}return i}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new le().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(i=>new Dn().fromJSON(i))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let i=t.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new jt().fromArray(i)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new jt().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,i=null;if(e!==null){let s=e.length;i=new Array(s);for(let a=0;a!==s;++a)i[a]=e[a].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},ur=class extends mi{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new le(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},lo=new tt,Js=new tt,js=new tt,Ks=new jt,co=new jt,ep=new Oe,ba=new tt,ho=new tt,Ma=new tt,Jf=new jt,fh=new jt,jf=new jt,Eo=class extends rn{constructor(t=new ur){if(super(),this.isSprite=!0,this.type="Sprite",Zs===void 0){Zs=new We;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new rl(e,5);Zs.setIndex([0,1,2,0,2,3]),Zs.setAttribute("position",new wo(i,3,0,!1)),Zs.setAttribute("uv",new wo(i,2,3,!1))}this.geometry=Zs,this.material=t,this.center=new jt(.5,.5),this.count=1}intersectsFrustum(t){return t.intersectsSprite(this)}raycast(t,e){t.camera===null&&se('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Js.setFromMatrixScale(this.matrixWorld),ep.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),js.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Js.multiplyScalar(-js.z);let i=this.material.rotation,s,a;i!==0&&(a=Math.cos(i),s=Math.sin(i));let l=this.center;Sa(ba.set(-.5,-.5,0),js,l,Js,s,a),Sa(ho.set(.5,-.5,0),js,l,Js,s,a),Sa(Ma.set(.5,.5,0),js,l,Js,s,a),Jf.set(0,0),fh.set(1,0),jf.set(1,1);let o=t.ray.intersectTriangle(ba,ho,Ma,!1,lo);if(o===null&&(Sa(ho.set(-.5,.5,0),js,l,Js,s,a),fh.set(0,1),o=t.ray.intersectTriangle(ba,Ma,ho,!1,lo),o===null))return;let h=t.ray.origin.distanceTo(lo);h<t.near||h>t.far||e.push({distance:h,point:lo.clone(),uv:fi.getInterpolation(lo,ba,ho,Ma,Jf,fh,jf,new jt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};Ai=new tt,dh=new tt,wa=new tt,Ea=new tt,Hi=class{constructor(t=new tt,e=new tt(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Ai)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Ai.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Ai.copy(this.origin).addScaledVector(this.direction,e),Ai.distanceToSquared(t))}distanceSqToSegment(t,e,i,s){dh.copy(t).add(e).multiplyScalar(.5),wa.copy(e).sub(t).normalize(),Ea.copy(this.origin).sub(dh);let a=t.distanceTo(e)*.5,l=-this.direction.dot(wa),o=Ea.dot(this.direction),h=-Ea.dot(wa),f=Ea.lengthSq(),d=Math.abs(1-l*l),g,p,x,v;if(d>0)if(g=l*h-o,p=l*o-h,v=a*d,g>=0)if(p>=-v)if(p<=v){let b=1/d;g*=b,p*=b,x=g*(g+l*p+2*o)+p*(l*g+p+2*h)+f}else p=a,g=Math.max(0,-(l*p+o)),x=-g*g+p*(p+2*h)+f;else p=-a,g=Math.max(0,-(l*p+o)),x=-g*g+p*(p+2*h)+f;else p<=-v?(g=Math.max(0,-(-l*a+o)),p=g>0?-a:Math.min(Math.max(-a,-h),a),x=-g*g+p*(p+2*h)+f):p<=v?(g=0,p=Math.min(Math.max(-a,-h),a),x=p*(p+2*h)+f):(g=Math.max(0,-(l*a+o)),p=g>0?a:Math.min(Math.max(-a,-h),a),x=-g*g+p*(p+2*h)+f);else p=l>0?-a:a,g=Math.max(0,-(l*p+o)),x=-g*g+p*(p+2*h)+f;return i&&i.copy(this.origin).addScaledVector(this.direction,g),s&&s.copy(dh).addScaledVector(wa,p),x}intersectSphere(t,e){if(t.radius<0)return null;Ai.subVectors(t.center,this.origin);let i=Ai.dot(this.direction),s=Ai.dot(Ai)-i*i,a=t.radius*t.radius;if(s>a)return null;let l=Math.sqrt(a-s),o=i-l,h=i+l;return h<0?null:o<0?this.at(h,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){let i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,s,a,l,o,h,f=1/this.direction.x,d=1/this.direction.y,g=1/this.direction.z,p=this.origin;return f>=0?(i=(t.min.x-p.x)*f,s=(t.max.x-p.x)*f):(i=(t.max.x-p.x)*f,s=(t.min.x-p.x)*f),d>=0?(a=(t.min.y-p.y)*d,l=(t.max.y-p.y)*d):(a=(t.max.y-p.y)*d,l=(t.min.y-p.y)*d),i>l||a>s||((a>i||isNaN(i))&&(i=a),(l<s||isNaN(s))&&(s=l),g>=0?(o=(t.min.z-p.z)*g,h=(t.max.z-p.z)*g):(o=(t.max.z-p.z)*g,h=(t.min.z-p.z)*g),i>h||o>s)||((o>i||i!==i)&&(i=o),(h<s||s!==s)&&(s=h),s<0)?null:this.at(i>=0?i:s,e)}intersectsBox(t){return this.intersectBox(t,Ai)!==null}intersectTriangle(t,e,i,s,a){let l=this.origin,o=this.direction,h=o.x,f=o.y,d=o.z,g=t.x-l.x,p=t.y-l.y,x=t.z-l.z,v=e.x-l.x,b=e.y-l.y,y=e.z-l.z,_=i.x-l.x,A=i.y-l.y,T=i.z-l.z,S=Math.abs(h),I=Math.abs(f),E=Math.abs(d),C,w,N,F,U,G,V,k,q,Z,B,K;if(S>=I&&S>=E?(N=h,G=g,q=v,K=_,h>=0?(C=f,w=d,F=p,U=x,V=b,k=y,Z=A,B=T):(C=d,w=f,F=x,U=p,V=y,k=b,Z=T,B=A)):I>=E?(N=f,G=p,q=b,K=A,f>=0?(C=d,w=h,F=x,U=g,V=y,k=v,Z=T,B=_):(C=h,w=d,F=g,U=x,V=v,k=y,Z=_,B=T)):(N=d,G=x,q=y,K=T,d>=0?(C=h,w=f,F=g,U=p,V=v,k=b,Z=_,B=A):(C=f,w=h,F=p,U=g,V=b,k=v,Z=A,B=_)),N===0)return null;let j=C/N,st=w/N,X=1/N,bt=F-j*G,St=U-st*G,Vt=V-j*q,$t=k-st*q,te=Z-j*K,ut=B-st*K,gt=te*$t-ut*Vt,Dt=bt*ut-St*te,ne=Vt*St-$t*bt;if(s){if(gt<0||Dt<0||ne<0)return null}else if((gt<0||Dt<0||ne<0)&&(gt>0||Dt>0||ne>0))return null;let Ot=gt+Dt+ne;if(Ot===0)return null;let ce=X*(gt*G+Dt*q+ne*K);return(Ot>0?ce<0:ce>0)?null:this.at(ce/Ot,a)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Fn=class extends mi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new le(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ii,this.combine=Uh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},Kf=new Oe,xs=new Hi,Ta=new vs,Qf=new tt,Aa=new tt,Ca=new tt,Pa=new tt,ph=new tt,Ia=new tt,td=new tt,Ra=new tt,Re=class extends rn{constructor(t=new We,e=new Fn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,l=s.length;a<l;a++){let o=s[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=a}}}}getVertexPosition(t,e){let i=this.geometry,s=i.attributes.position,a=i.morphAttributes.position,l=i.morphTargetsRelative;e.fromBufferAttribute(s,t);let o=this.morphTargetInfluences;if(a&&o){Ia.set(0,0,0);for(let h=0,f=a.length;h<f;h++){let d=o[h],g=a[h];d!==0&&(ph.fromBufferAttribute(g,t),l?Ia.addScaledVector(ph,d):Ia.addScaledVector(ph.sub(e),d))}e.add(Ia)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let i=this.geometry,s=this.material,a=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Ta.copy(i.boundingSphere),Ta.applyMatrix4(a),xs.copy(t.ray).recast(t.near),!(Ta.containsPoint(xs.origin)===!1&&(xs.intersectSphere(Ta,Qf)===null||xs.origin.distanceToSquared(Qf)>(t.far-t.near)**2))&&(Kf.copy(a).invert(),xs.copy(t.ray).applyMatrix4(Kf),!(i.boundingBox!==null&&xs.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,xs)))}_computeIntersections(t,e,i){let s,a=this.geometry,l=this.material,o=a.index,h=a.attributes.position,f=a.attributes.uv,d=a.attributes.uv1,g=a.attributes.normal,p=a.groups,x=a.drawRange;if(o!==null)if(Array.isArray(l))for(let v=0,b=p.length;v<b;v++){let y=p[v],_=l[y.materialIndex],A=Math.max(y.start,x.start),T=Math.min(o.count,Math.min(y.start+y.count,x.start+x.count));for(let S=A,I=T;S<I;S+=3){let E=o.getX(S),C=o.getX(S+1),w=o.getX(S+2);s=La(this,_,t,i,f,d,g,E,C,w),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=y.materialIndex,e.push(s))}}else{let v=Math.max(0,x.start),b=Math.min(o.count,x.start+x.count);for(let y=v,_=b;y<_;y+=3){let A=o.getX(y),T=o.getX(y+1),S=o.getX(y+2);s=La(this,l,t,i,f,d,g,A,T,S),s&&(s.faceIndex=Math.floor(y/3),e.push(s))}}else if(h!==void 0)if(Array.isArray(l))for(let v=0,b=p.length;v<b;v++){let y=p[v],_=l[y.materialIndex],A=Math.max(y.start,x.start),T=Math.min(h.count,Math.min(y.start+y.count,x.start+x.count));for(let S=A,I=T;S<I;S+=3){let E=S,C=S+1,w=S+2;s=La(this,_,t,i,f,d,g,E,C,w),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=y.materialIndex,e.push(s))}}else{let v=Math.max(0,x.start),b=Math.min(h.count,x.start+x.count);for(let y=v,_=b;y<_;y+=3){let A=y,T=y+1,S=y+2;s=La(this,l,t,i,f,d,g,A,T,S),s&&(s.faceIndex=Math.floor(y/3),e.push(s))}}}};ol=class extends Tn{constructor(t=null,e=1,i=1,s,a,l,o,h,f=un,d=un,g,p){super(null,l,o,h,f,d,s,a,g,p),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},ys=new vs,J0=new jt(.5,.5),Na=new tt,fr=class{constructor(t=new Dn,e=new Dn,i=new Dn,s=new Dn,a=new Dn,l=new Dn){this.planes=[t,e,i,s,a,l]}set(t,e,i,s,a,l){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(i),o[3].copy(s),o[4].copy(a),o[5].copy(l),this}copy(t){let e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=ti,i=!1){let s=this.planes,a=t.elements,l=a[0],o=a[1],h=a[2],f=a[3],d=a[4],g=a[5],p=a[6],x=a[7],v=a[8],b=a[9],y=a[10],_=a[11],A=a[12],T=a[13],S=a[14],I=a[15];if(s[0].setComponents(f-l,x-d,_-v,I-A).normalize(),s[1].setComponents(f+l,x+d,_+v,I+A).normalize(),s[2].setComponents(f+o,x+g,_+b,I+T).normalize(),s[3].setComponents(f-o,x-g,_-b,I-T).normalize(),i)s[4].setComponents(h,p,y,S).normalize(),s[5].setComponents(f-h,x-p,_-y,I-S).normalize();else if(s[4].setComponents(f-h,x-p,_-y,I-S).normalize(),e===ti)s[5].setComponents(f+h,x+p,_+y,I+S).normalize();else if(e===rr)s[5].setComponents(h,p,y,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ys.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),ys.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ys)}intersectsSprite(t){ys.center.set(0,0,0);let e=J0.distanceTo(t.center);return ys.radius=.7071067811865476+e,ys.applyMatrix4(t.matrixWorld),this.intersectsSphere(ys)}intersectsSphere(t){let e=this.planes,i=t.center,s=-t.radius;for(let a=0;a<6;a++)if(e[a].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let i=0;i<6;i++){let s=e[i];if(Na.x=s.normal.x>0?t.max.x:t.min.x,Na.y=s.normal.y>0?t.max.y:t.min.y,Na.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Na)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},ni=class extends mi{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new le(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},al=new tt,ll=new tt,ed=new Oe,uo=new Hi,Da=new vs,mh=new tt,nd=new tt,bs=class extends rn{constructor(t=new We,e=new ni){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,i=[0];for(let s=1,a=e.count;s<a;s++)al.fromBufferAttribute(e,s-1),ll.fromBufferAttribute(e,s),i[s]=i[s-1],i[s]+=al.distanceTo(ll);t.setAttribute("lineDistance",new Ge(i,1))}else ie("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let i=this.geometry,s=this.matrixWorld,a=t.params.Line.threshold,l=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Da.copy(i.boundingSphere),Da.applyMatrix4(s),Da.radius+=a,t.ray.intersectsSphere(Da)===!1)return;ed.copy(s).invert(),uo.copy(t.ray).applyMatrix4(ed);let o=a/((this.scale.x+this.scale.y+this.scale.z)/3),h=o*o,f=this.isLineSegments?2:1,d=i.index,p=i.attributes.position;if(d!==null){let x=Math.max(0,l.start),v=Math.min(d.count,l.start+l.count);for(let b=x,y=v-1;b<y;b+=f){let _=d.getX(b),A=d.getX(b+1),T=Oa(this,t,uo,h,_,A,b);T&&e.push(T)}if(this.isLineLoop){let b=d.getX(v-1),y=d.getX(x),_=Oa(this,t,uo,h,b,y,v-1);_&&e.push(_)}}else{let x=Math.max(0,l.start),v=Math.min(p.count,l.start+l.count);for(let b=x,y=v-1;b<y;b+=f){let _=Oa(this,t,uo,h,b,b+1,b);_&&e.push(_)}if(this.isLineLoop){let b=Oa(this,t,uo,h,v-1,x,v-1);b&&e.push(b)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,l=s.length;a<l;a++){let o=s[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=a}}}}};id=new tt,sd=new tt,Ms=class extends bs{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,i=[];for(let s=0,a=e.count;s<a;s+=2)id.fromBufferAttribute(e,s),sd.fromBufferAttribute(e,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+id.distanceTo(sd);t.setAttribute("lineDistance",new Ge(i,1))}else ie("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},To=class extends Tn{constructor(t=[],e=Ki,i,s,a,l,o,h,f,d){super(t,e,i,s,a,l,o,h,f,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Ao=class extends Tn{constructor(t,e,i,s,a,l,o,h,f){super(t,e,i,s,a,l,o,h,f),this.isCanvasTexture=!0,this.needsUpdate=!0}},Gi=class extends Tn{constructor(t,e,i=si,s,a,l,o=un,h=un,f,d=pi,g=1){if(d!==pi&&d!==ts)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let p={width:t,height:e,depth:g};super(p,s,a,l,o,h,d,i,f),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new lr(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},cl=class extends Gi{constructor(t,e=si,i=Ki,s,a,l=un,o=un,h,f=pi){let d={width:t,height:t,depth:1},g=[d,d,d,d,d,d];super(t,t,e,i,s,a,l,o,h,f),this.image=g,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},Co=class extends Tn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},Xi=class n extends We{constructor(t=1,e=1,i=1,s=1,a=1,l=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:s,heightSegments:a,depthSegments:l};let o=this;s=Math.floor(s),a=Math.floor(a),l=Math.floor(l);let h=[],f=[],d=[],g=[],p=0,x=0;v("z","y","x",-1,-1,i,e,t,l,a,0),v("z","y","x",1,-1,i,e,-t,l,a,1),v("x","z","y",1,1,t,i,e,s,l,2),v("x","z","y",1,-1,t,i,-e,s,l,3),v("x","y","z",1,-1,t,e,i,s,a,4),v("x","y","z",-1,-1,t,e,-i,s,a,5),this.setIndex(h),this.setAttribute("position",new Ge(f,3)),this.setAttribute("normal",new Ge(d,3)),this.setAttribute("uv",new Ge(g,2));function v(b,y,_,A,T,S,I,E,C,w,N){let F=S/C,U=I/w,G=S/2,V=I/2,k=E/2,q=C+1,Z=w+1,B=0,K=0,j=new tt;for(let st=0;st<Z;st++){let X=st*U-V;for(let bt=0;bt<q;bt++){let St=bt*F-G;j[b]=St*A,j[y]=X*T,j[_]=k,f.push(j.x,j.y,j.z),j[b]=0,j[y]=0,j[_]=E>0?1:-1,d.push(j.x,j.y,j.z),g.push(bt/C),g.push(1-st/w),B+=1}}for(let st=0;st<w;st++)for(let X=0;X<C;X++){let bt=p+X+q*st,St=p+X+q*(st+1),Vt=p+(X+1)+q*(st+1),$t=p+(X+1)+q*st;h.push(bt,St,$t),h.push(St,Vt,$t),K+=6}o.addGroup(x,K,N),x+=K,p+=B}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}},gi=class n extends We{constructor(t=1,e=1,i=1,s=32,a=1,l=!1,o=0,h=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:s,heightSegments:a,openEnded:l,thetaStart:o,thetaLength:h};let f=this;s=Math.floor(s),a=Math.floor(a);let d=[],g=[],p=[],x=[],v=0,b=[],y=i/2,_=0;A(),l===!1&&(t>0&&T(!0),e>0&&T(!1)),this.setIndex(d),this.setAttribute("position",new Ge(g,3)),this.setAttribute("normal",new Ge(p,3)),this.setAttribute("uv",new Ge(x,2));function A(){let S=new tt,I=new tt,E=0,C=(e-t)/i;for(let w=0;w<=a;w++){let N=[],F=w/a,U=F*(e-t)+t;for(let G=0;G<=s;G++){let V=G/s,k=V*h+o,q=Math.sin(k),Z=Math.cos(k);I.x=U*q,I.y=-F*i+y,I.z=U*Z,g.push(I.x,I.y,I.z),S.set(q,C,Z).normalize(),p.push(S.x,S.y,S.z),x.push(V,1-F),N.push(v++)}b.push(N)}for(let w=0;w<s;w++)for(let N=0;N<a;N++){let F=b[N][w],U=b[N+1][w],G=b[N+1][w+1],V=b[N][w+1];(t>0||N!==0)&&(d.push(F,U,V),E+=3),(e>0||N!==a-1)&&(d.push(U,G,V),E+=3)}f.addGroup(_,E,0),_+=E}function T(S){let I=v,E=new jt,C=new tt,w=0,N=S===!0?t:e,F=S===!0?1:-1;for(let G=1;G<=s;G++)g.push(0,y*F,0),p.push(0,F,0),x.push(.5,.5),v++;let U=v;for(let G=0;G<=s;G++){let k=G/s*h+o,q=Math.cos(k),Z=Math.sin(k);C.x=N*Z,C.y=y*F,C.z=N*q,g.push(C.x,C.y,C.z),p.push(0,F,0),E.x=q*.5+.5,E.y=Z*.5*F+.5,x.push(E.x,E.y),v++}for(let G=0;G<s;G++){let V=I+G,k=U+G;S===!0?d.push(k,k+1,V):d.push(k+1,k,V),w+=3}f.addGroup(_,w,S===!0?1:2),_+=w}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},dr=class n extends gi{constructor(t=1,e=1,i=32,s=1,a=!1,l=0,o=Math.PI*2){super(0,t,e,i,s,a,l,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:i,heightSegments:s,openEnded:a,thetaStart:l,thetaLength:o}}static fromJSON(t){return new n(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Fa=new tt,Ua=new tt,gh=new tt,Ba=new fi,pr=class extends We{constructor(t=null,e=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:t,thresholdAngle:e},t!==null){let s=Math.pow(10,4),a=Math.cos(nr*e),l=t.getIndex(),o=t.getAttribute("position"),h=l?l.count:o.count,f=[0,0,0],d=["a","b","c"],g=new Array(3),p={},x=[];for(let v=0;v<h;v+=3){l?(f[0]=l.getX(v),f[1]=l.getX(v+1),f[2]=l.getX(v+2)):(f[0]=v,f[1]=v+1,f[2]=v+2);let{a:b,b:y,c:_}=Ba;if(b.fromBufferAttribute(o,f[0]),y.fromBufferAttribute(o,f[1]),_.fromBufferAttribute(o,f[2]),Ba.getNormal(gh),g[0]=`${Math.round(b.x*s)},${Math.round(b.y*s)},${Math.round(b.z*s)}`,g[1]=`${Math.round(y.x*s)},${Math.round(y.y*s)},${Math.round(y.z*s)}`,g[2]=`${Math.round(_.x*s)},${Math.round(_.y*s)},${Math.round(_.z*s)}`,!(g[0]===g[1]||g[1]===g[2]||g[2]===g[0]))for(let A=0;A<3;A++){let T=(A+1)%3,S=g[A],I=g[T],E=Ba[d[A]],C=Ba[d[T]],w=`${S}_${I}`,N=`${I}_${S}`;N in p&&p[N]?(gh.dot(p[N].normal)<=a&&(x.push(E.x,E.y,E.z),x.push(C.x,C.y,C.z)),p[N]=null):w in p||(p[w]={index0:f[A],index1:f[T],normal:gh.clone()})}}for(let v in p)if(p[v]){let{index0:b,index1:y}=p[v];Fa.fromBufferAttribute(o,b),Ua.fromBufferAttribute(o,y),x.push(Fa.x,Fa.y,Fa.z),x.push(Ua.x,Ua.y,Ua.z)}this.setAttribute("position",new Ge(x,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}};Th=class{static triangulate(t,e,i=2){return j0(t,e,i)}},Lo=class n{static area(t){let e=t.length,i=0;for(let s=e-1,a=0;a<e;s=a++)i+=t[s].x*t[a].y-t[a].x*t[s].y;return i*.5}static isClockWise(t){return n.area(t)<0}static triangulateShape(t,e){let i=[],s=[],a=[];od(t),ad(i,t);let l=t.length;e.forEach(od);for(let h=0;h<e.length;h++)s.push(l),l+=e[h].length,ad(i,e[h]);let o=Th.triangulate(i,s);for(let h=0;h<o.length;h+=3)a.push(o.slice(h,h+3));return a}};No=class n extends We{constructor(t=1,e=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:s};let a=t/2,l=e/2,o=Math.floor(i),h=Math.floor(s),f=o+1,d=h+1,g=t/o,p=e/h,x=[],v=[],b=[],y=[];for(let _=0;_<d;_++){let A=_*p-l;for(let T=0;T<f;T++){let S=T*g-a;v.push(S,-A,0),b.push(0,0,1),y.push(T/o),y.push(1-_/h)}}for(let _=0;_<h;_++)for(let A=0;A<o;A++){let T=A+f*_,S=A+f*(_+1),I=A+1+f*(_+1),E=A+1+f*_;x.push(T,S,E),x.push(S,I,E)}this.setIndex(x),this.setAttribute("position",new Ge(v,3)),this.setAttribute("normal",new Ge(b,3)),this.setAttribute("uv",new Ge(y,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.widthSegments,t.heightSegments)}},Do=class n extends We{constructor(t=.5,e=1,i=32,s=1,a=0,l=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:i,phiSegments:s,thetaStart:a,thetaLength:l},i=Math.max(3,i),s=Math.max(1,s);let o=[],h=[],f=[],d=[],g=t,p=(e-t)/s,x=new tt,v=new jt;for(let b=0;b<=s;b++){for(let y=0;y<=i;y++){let _=a+y/i*l;x.x=g*Math.cos(_),x.y=g*Math.sin(_),h.push(x.x,x.y,x.z),f.push(0,0,1),v.x=(x.x/e+1)/2,v.y=(x.y/e+1)/2,d.push(v.x,v.y)}g+=p}for(let b=0;b<s;b++){let y=b*(i+1);for(let _=0;_<i;_++){let A=_+y,T=A,S=A+i+1,I=A+i+2,E=A+1;o.push(T,S,E),o.push(S,I,E)}}this.setIndex(o),this.setAttribute("position",new Ge(h,3)),this.setAttribute("normal",new Ge(f,3)),this.setAttribute("uv",new Ge(d,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}},Wi=class n extends We{constructor(t=1,e=32,i=16,s=0,a=Math.PI*2,l=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:s,phiLength:a,thetaStart:l,thetaLength:o},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));let h=Math.min(l+o,Math.PI),f=0,d=[],g=new tt,p=new tt,x=[],v=[],b=[],y=[];for(let _=0;_<=i;_++){let A=[],T=_/i,S=l+T*o,I=t*Math.cos(S),E=Math.sqrt(t*t-I*I),C=0;_===0&&l===0?C=.5/e:_===i&&h===Math.PI&&(C=-.5/e);for(let w=0;w<=e;w++){let N=w/e,F=s+N*a;g.x=-E*Math.cos(F),g.y=I,g.z=E*Math.sin(F),v.push(g.x,g.y,g.z),p.copy(g).normalize(),b.push(p.x,p.y,p.z),y.push(N+C,1-T),A.push(f++)}d.push(A)}for(let _=0;_<i;_++)for(let A=0;A<e;A++){let T=d[_][A+1],S=d[_][A],I=d[_+1][A],E=d[_+1][A+1];(_!==0||l>0)&&x.push(T,S,E),(_!==i-1||h<Math.PI)&&x.push(S,I,E)}this.setIndex(x),this.setAttribute("position",new Ge(v,3)),this.setAttribute("normal",new Ge(b,3)),this.setAttribute("uv",new Ge(y,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};op={clone:As,merge:Mn},mg=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,gg=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Un=class extends mi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=mg,this.fragmentShader=gg,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=As(t.uniforms),this.uniformsGroups=pg(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let l=this.uniforms[s].value;l&&l.isTexture?e.uniforms[s]={type:"t",value:l.toJSON(t).uuid}:l&&l.isColor?e.uniforms[s]={type:"c",value:l.getHex()}:l&&l.isVector2?e.uniforms[s]={type:"v2",value:l.toArray()}:l&&l.isVector3?e.uniforms[s]={type:"v3",value:l.toArray()}:l&&l.isVector4?e.uniforms[s]={type:"v4",value:l.toArray()}:l&&l.isMatrix3?e.uniforms[s]={type:"m3",value:l.toArray()}:l&&l.isMatrix4?e.uniforms[s]={type:"m4",value:l.toArray()}:e.uniforms[s]={value:l}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let i in t.uniforms){let s=t.uniforms[i];switch(this.uniforms[i]={},s.type){case"t":this.uniforms[i].value=e[s.value]||null;break;case"c":this.uniforms[i].value=new le().setHex(s.value);break;case"v2":this.uniforms[i].value=new jt().fromArray(s.value);break;case"v3":this.uniforms[i].value=new tt().fromArray(s.value);break;case"v4":this.uniforms[i].value=new $e().fromArray(s.value);break;case"m3":this.uniforms[i].value=new me().fromArray(s.value);break;case"m4":this.uniforms[i].value=new Oe().fromArray(s.value);break;default:this.uniforms[i].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let i in t.extensions)this.extensions[i]=t.extensions[i];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},hl=class extends Un{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Bn=class extends mi{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new le(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new le(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=uc,this.normalScale=new jt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ii,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},ul=class extends mi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Vd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},fl=class extends mi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},Oo=class extends ni{constructor(t){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(t)}copy(t){return super.copy(t),this.scale=t.scale,this.dashSize=t.dashSize,this.gapSize=t.gapSize,this}};Yi=class{constructor(t,e,i,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(i),this.sampleValues=e,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,i=this._cachedIndex,s=e[i],a=e[i-1];n:{t:{let l;e:{i:if(!(t<s)){for(let o=i+2;;){if(s===void 0){if(t<a)break i;return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(a=s,s=e[++i],t<s)break t}l=e.length;break e}if(!(t>=a)){let o=e[1];t<o&&(i=2,a=o);for(let h=i-2;;){if(a===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===h)break;if(s=a,a=e[--i-1],t>=a)break t}l=i,i=0;break e}break n}for(;i<l;){let o=i+l>>>1;t<e[o]?l=o:i=o+1}if(s=e[i],a=e[i-1],a===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,a,s)}return this.interpolate_(i,a,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,i=this.sampleValues,s=this.valueSize,a=t*s;for(let l=0;l!==s;++l)e[l]=i[a+l];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},dl=class extends Yi{constructor(t,e,i,s){super(t,e,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:bh,endingEnd:bh}}intervalChanged_(t,e,i){let s=this.parameterPositions,a=t-2,l=t+1,o=s[a],h=s[l];if(o===void 0)switch(this.getSettings_().endingStart){case Mh:a=t,o=2*e-i;break;case Sh:a=s.length-2,o=e+s[a]-s[a+1];break;default:a=t,o=i}if(h===void 0)switch(this.getSettings_().endingEnd){case Mh:l=t,h=2*i-e;break;case Sh:l=1,h=i+s[1]-s[0];break;default:l=t-1,h=e}let f=(i-e)*.5,d=this.valueSize;this._weightPrev=f/(e-o),this._weightNext=f/(h-i),this._offsetPrev=a*d,this._offsetNext=l*d}interpolate_(t,e,i,s){let a=this.resultBuffer,l=this.sampleValues,o=this.valueSize,h=t*o,f=h-o,d=this._offsetPrev,g=this._offsetNext,p=this._weightPrev,x=this._weightNext,v=(i-e)/(s-e),b=v*v,y=b*v,_=-p*y+2*p*b-p*v,A=(1+p)*y+(-1.5-2*p)*b+(-.5+p)*v+1,T=(-1-x)*y+(1.5+x)*b+.5*v,S=x*y-x*b;for(let I=0;I!==o;++I)a[I]=_*l[d+I]+A*l[f+I]+T*l[h+I]+S*l[g+I];return a}},pl=class extends Yi{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){let a=this.resultBuffer,l=this.sampleValues,o=this.valueSize,h=t*o,f=h-o,d=(i-e)/(s-e),g=1-d;for(let p=0;p!==o;++p)a[p]=l[f+p]*g+l[h+p]*d;return a}},ml=class extends Yi{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t){return this.copySampleValue_(t-1)}},gl=class extends Yi{interpolate_(t,e,i,s){let a=this.resultBuffer,l=this.sampleValues,o=this.valueSize,h=t*o,f=h-o,d=this.inTangents,g=this.outTangents;if(!d||!g){let v=(i-e)/(s-e),b=1-v;for(let y=0;y!==o;++y)a[y]=l[f+y]*b+l[h+y]*v;return a}let p=o*2,x=t-1;for(let v=0;v!==o;++v){let b=l[f+v],y=l[h+v],_=x*p+v*2,A=g[_],T=g[_+1],S=t*p+v*2,I=d[S],E=d[S+1],C=yg(i,e,A,I,s);a[v]=ap(C,b,T,E,y)}return a}};kn=class{constructor(t,e,i,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Qs(e,this.TimeBufferType),this.values=Qs(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,i;if(e.toJSON!==this.toJSON)i=e.toJSON(t);else{i={name:t.name,times:Qs(t.times,Array),values:Qs(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(i.interpolation=s),xh(t.settings)&&(i.settings={inTangents:Qs(t.settings.inTangents,Array),outTangents:Qs(t.settings.outTangents,Array)})}return i.type=t.ValueTypeName,i}InterpolantFactoryMethodDiscrete(t){return new ml(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new pl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new dl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new gl(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case mo:e=this.InterpolantFactoryMethodDiscrete;break;case el:e=this.InterpolantFactoryMethodLinear;break;case Xa:e=this.InterpolantFactoryMethodSmooth;break;case vh:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return ie("KeyframeTrack:",i),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return mo;case this.InterpolantFactoryMethodLinear:return el;case this.InterpolantFactoryMethodSmooth:return Xa;case this.InterpolantFactoryMethodBezier:return vh}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]*=t;xh(this.settings)&&(cd(this.settings.inTangents,t),cd(this.settings.outTangents,t))}return this}trim(t,e){let i=this.times,s=i.length,a=0,l=s-1;for(;a!==s&&i[a]<t;)++a;for(;l!==-1&&i[l]>e;)--l;if(++l,a!==0||l!==s){a>=l&&(l=Math.max(l,1),a=l-1);let o=this.getValueSize();this.times=i.slice(a,l),this.values=this.values.slice(a*o,l*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(se("KeyframeTrack: Invalid value size in track.",this),t=!1);let i=this.times,s=this.values,a=i.length;a===0&&(se("KeyframeTrack: Track is empty.",this),t=!1);let l=null;for(let o=0;o!==a;o++){let h=i[o];if(typeof h=="number"&&isNaN(h)){se("KeyframeTrack: Time is not a valid number.",this,o,h),t=!1;break}if(l!==null&&l>h){se("KeyframeTrack: Out of order keys.",this,o,h,l),t=!1;break}l=h}if(s!==void 0&&g0(s))for(let o=0,h=s.length;o!==h;++o){let f=s[o];if(isNaN(f)){se("KeyframeTrack: Value is not a valid number.",this,o,f),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===Xa,a=t.length-1,l=1;for(let o=1;o<a;++o){let h=!1,f=t[o],d=t[o+1];if(f!==d&&(o!==1||f!==t[0]))if(s)h=!0;else{let g=o*i,p=g-i,x=g+i;for(let v=0;v!==i;++v){let b=e[g+v];if(b!==e[p+v]||b!==e[x+v]){h=!0;break}}}if(h){if(o!==l){t[l]=t[o];let g=o*i,p=l*i;for(let x=0;x!==i;++x)e[p+x]=e[g+x]}++l}}if(a>0){t[l]=t[a];for(let o=a*i,h=l*i,f=0;f!==i;++f)e[h+f]=e[o+f];++l}return l!==t.length?(this.times=t.slice(0,l),this.values=e.slice(0,l*i)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),i=this.constructor,s=new i(this.name,t,e);return s.createInterpolant=this.createInterpolant,xh(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};kn.prototype.ValueTypeName="";kn.prototype.TimeBufferType=Float32Array;kn.prototype.ValueBufferType=Float32Array;kn.prototype.DefaultInterpolation=el;$i=class extends kn{constructor(t,e,i){super(t,e,i)}};$i.prototype.ValueTypeName="bool";$i.prototype.ValueBufferType=Array;$i.prototype.DefaultInterpolation=mo;$i.prototype.InterpolantFactoryMethodLinear=void 0;$i.prototype.InterpolantFactoryMethodSmooth=void 0;xl=class extends kn{constructor(t,e,i,s){super(t,e,i,s)}};xl.prototype.ValueTypeName="color";yl=class extends kn{constructor(t,e,i,s){super(t,e,i,s)}};yl.prototype.ValueTypeName="number";_l=class extends Yi{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){let a=this.resultBuffer,l=this.sampleValues,o=this.valueSize,h=(i-e)/(s-e),f=t*o;for(let d=f+o;f!==d;f+=4)On.slerpFlat(a,0,l,f-o,l,f,h);return a}},Fo=class extends kn{constructor(t,e,i,s){super(t,e,i,s)}InterpolantFactoryMethodLinear(t){return new _l(this.times,this.values,this.getValueSize(),t)}};Fo.prototype.ValueTypeName="quaternion";Fo.prototype.InterpolantFactoryMethodSmooth=void 0;qi=class extends kn{constructor(t,e,i){super(t,e,i)}};qi.prototype.ValueTypeName="string";qi.prototype.ValueBufferType=Array;qi.prototype.DefaultInterpolation=mo;qi.prototype.InterpolantFactoryMethodLinear=void 0;qi.prototype.InterpolantFactoryMethodSmooth=void 0;vl=class extends kn{constructor(t,e,i,s){super(t,e,i,s)}};vl.prototype.ValueTypeName="vector";bl=class{constructor(t,e,i){let s=this,a=!1,l=0,o=0,h,f=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this._abortController=null,this.itemStart=function(d){o++,a===!1&&s.onStart!==void 0&&s.onStart(d,l,o),a=!0},this.itemEnd=function(d){l++,s.onProgress!==void 0&&s.onProgress(d,l,o),l===o&&(a=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(d){s.onError!==void 0&&s.onError(d)},this.resolveURL=function(d){return d=d.normalize("NFC"),h?h(d):d},this.setURLModifier=function(d){return h=d,this},this.addHandler=function(d,g){return f.push(d,g),this},this.removeHandler=function(d){let g=f.indexOf(d);return g!==-1&&f.splice(g,2),this},this.getHandler=function(d){for(let g=0,p=f.length;g<p;g+=2){let x=f[g],v=f[g+1];if(x.global&&(x.lastIndex=0),x.test(d))return v}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},lp=new bl,Ml=class{constructor(t){this.manager=t!==void 0?t:lp,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let i=this;return new Promise(function(s,a){i.load(t,s,e,a)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};Ml.DEFAULT_MATERIAL_NAME="__DEFAULT";Uo=class extends rn{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new le(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},Bo=class extends Uo{constructor(t,e,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(rn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new le(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},yh=new Oe,hd=new tt,ud=new tt,Sl=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new jt(512,512),this.mapType=In,this.map=null,this.mapPass=null,this.matrix=new Oe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new fr,this._frameExtents=new jt(1,1),this._viewportCount=1,this._viewports=[new $e(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;hd.setFromMatrixPosition(t.matrixWorld),e.position.copy(hd),ud.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(ud),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,i,s){yh.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),i.setFromProjectionMatrix(yh,t.coordinateSystem,t.reversedDepth);let a=this._frameExtents,l=s?s.z/a.x:1,o=s?s.w/a.y:1,h=s?s.x/a.x:0,f=s?s.y/a.y:0;t.coordinateSystem===rr||t.reversedDepth?e.set(.5*l,0,0,.5*l+h,0,.5*o,0,.5*o+f,0,0,1,0,0,0,0,1):e.set(.5*l,0,0,.5*l+h,0,.5*o,0,.5*o+f,0,0,.5,.5,0,0,0,1),e.multiply(yh)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},Va=new tt,Ha=new On,ui=new tt,ko=class extends rn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Oe,this.projectionMatrix=new Oe,this.projectionMatrixInverse=new Oe,this.coordinateSystem=ti,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Va,Ha,ui),ui.x===1&&ui.y===1&&ui.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Va,Ha,ui.set(1,1,1)).invert()}updateWorldMatrix(t,e,i=!1){super.updateWorldMatrix(t,e,i),this.matrixWorld.decompose(Va,Ha,ui),ui.x===1&&ui.y===1&&ui.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Va,Ha,ui.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},zi=new tt,fd=new jt,dd=new jt,vn=class extends ko{constructor(t=50,e=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=ar*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(nr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return ar*2*Math.atan(Math.tan(nr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){zi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(zi.x,zi.y).multiplyScalar(-t/zi.z),zi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(zi.x,zi.y).multiplyScalar(-t/zi.z)}getViewSize(t,e){return this.getViewBounds(t,fd,dd),e.subVectors(dd,fd)}setViewOffset(t,e,i,s,a,l){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=a,this.view.height=l,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(nr*.5*this.fov)/this.zoom,i=2*e,s=this.aspect*i,a=-.5*s,l=this.view;if(this.view!==null&&this.view.enabled){let h=l.fullWidth,f=l.fullHeight;a+=l.offsetX*s/h,e-=l.offsetY*i/f,s*=l.width/h,i*=l.height/f}let o=this.filmOffset;o!==0&&(a+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+s,e,e-i,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},gr=class extends ko{constructor(t=-1,e=1,i=1,s=-1,a=.1,l=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=s,this.near=a,this.far=l,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,s,a,l){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=a,this.view.height=l,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,a=i-t,l=i+t,o=s+e,h=s-e;if(this.view!==null&&this.view.enabled){let f=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=f*this.view.offsetX,l=a+f*this.view.width,o-=d*this.view.offsetY,h=o-d*this.view.height}this.projectionMatrix.makeOrthographic(a,l,o,h,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Ah=class extends Sl{constructor(){super(new gr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},xr=class extends Uo{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(rn.DEFAULT_UP),this.updateMatrix(),this.target=new rn,this.shadow=new Ah}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}},tr=-90,er=1,wl=class extends rn{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new vn(tr,er,t,e);s.layers=this.layers,this.add(s);let a=new vn(tr,er,t,e);a.layers=this.layers,this.add(a);let l=new vn(tr,er,t,e);l.layers=this.layers,this.add(l);let o=new vn(tr,er,t,e);o.layers=this.layers,this.add(o);let h=new vn(tr,er,t,e);h.layers=this.layers,this.add(h);let f=new vn(tr,er,t,e);f.layers=this.layers,this.add(f)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[i,s,a,l,o,h]=e;for(let f of e)this.remove(f);if(t===ti)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),l.up.set(0,0,1),l.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),h.up.set(0,1,0),h.lookAt(0,0,-1);else if(t===rr)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),l.up.set(0,0,-1),l.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),h.up.set(0,-1,0),h.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let f of e)this.add(f),f.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[a,l,o,h,f,d]=this.children,g=t.getRenderTarget(),p=t.getActiveCubeFace(),x=t.getActiveMipmapLevel(),v=t.xr.enabled;t.xr.enabled=!1;let b=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let y=!1;t.isWebGLRenderer===!0?y=t.state.buffers.depth.getReversed():y=t.reversedDepthBuffer,t.setRenderTarget(i,0,s),y&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(i,1,s),y&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(i,2,s),y&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(i,3,s),y&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(i,4,s),y&&t.autoClear===!1&&t.clearDepth(),t.render(e,f),i.texture.generateMipmaps=b,t.setRenderTarget(i,5,s),y&&t.autoClear===!1&&t.clearDepth(),t.render(e,d),t.setRenderTarget(g,p,x),t.xr.enabled=v,i.texture.needsPMREMUpdate=!0}},El=class extends vn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}},su="\\[\\]\\.:\\/",_g=new RegExp("["+su+"]","g"),ru="[^"+su+"]",vg="[^"+su.replace("\\.","")+"]",bg=/((?:WC+[\/:])*)/.source.replace("WC",ru),Mg=/(WCOD+)?/.source.replace("WCOD",vg),Sg=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",ru),wg=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",ru),Eg=new RegExp("^"+bg+Mg+Sg+wg+"$"),Tg=["material","materials","bones","map"],Ch=class{constructor(t,e,i){let s=i||Xe.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(t,e)}setValue(t,e){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,a=i.length;s!==a;++s)i[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].unbind()}},Xe=class n{constructor(t,e,i){this.path=e,this.parsedPath=i||n.parseTrackName(e),this.node=n.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,i){return t&&t.isAnimationObjectGroup?new n.Composite(t,e,i):new n(t,e,i)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(_g,"")}static parseTrackName(t){let e=Eg.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let i={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let a=i.nodeName.substring(s+1);Tg.indexOf(a)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=a)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return i}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let i=t.skeleton.getBoneByName(e);if(i!==void 0)return i}if(t.children){let i=function(a){for(let l=0;l<a.length;l++){let o=a[l];if(o.name===e||o.uuid===e)return o;let h=i(o.children);if(h)return h}return null},s=i(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let i=this.resolvedProperty;for(let s=0,a=i.length;s!==a;++s)t[e++]=i[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let i=this.resolvedProperty;for(let s=0,a=i.length;s!==a;++s)i[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let i=this.resolvedProperty;for(let s=0,a=i.length;s!==a;++s)i[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let i=this.resolvedProperty;for(let s=0,a=i.length;s!==a;++s)i[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,i=e.objectName,s=e.propertyName,a=e.propertyIndex;if(t||(t=n.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){ie("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let f=e.objectIndex;switch(i){case"materials":if(!t.material){se("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){se("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){se("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let d=0;d<t.length;d++)if(t[d].name===f){f=d;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){se("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){se("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[i]===void 0){se("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[i]}if(f!==void 0){if(t[f]===void 0){se("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[f]}}let l=t[s];if(l===void 0){let f=e.nodeName;se("PropertyBinding: Trying to update property for track: "+f+"."+s+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?o=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let h=this.BindingType.Direct;if(a!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){se("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){se("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[a]!==void 0&&(a=t.morphTargetDictionary[a])}h=this.BindingType.ArrayElement,this.resolvedProperty=l,this.propertyIndex=a}else l.fromArray!==void 0&&l.toArray!==void 0?(h=this.BindingType.HasFromToArray,this.resolvedProperty=l):Array.isArray(l)?(h=this.BindingType.EntireArray,this.resolvedProperty=l):this.propertyName=s;this.getValue=this.GetterByBindingType[h],this.setValue=this.SetterByBindingTypeAndVersioning[h][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Xe.Composite=Ch;Xe.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Xe.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Xe.prototype.GetterByBindingType=[Xe.prototype._getValue_direct,Xe.prototype._getValue_array,Xe.prototype._getValue_arrayElement,Xe.prototype._getValue_toArray];Xe.prototype.SetterByBindingTypeAndVersioning=[[Xe.prototype._setValue_direct,Xe.prototype._setValue_direct_setNeedsUpdate,Xe.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Xe.prototype._setValue_array,Xe.prototype._setValue_array_setNeedsUpdate,Xe.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Xe.prototype._setValue_arrayElement,Xe.prototype._setValue_arrayElement_setNeedsUpdate,Xe.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Xe.prototype._setValue_fromArray,Xe.prototype._setValue_fromArray_setNeedsUpdate,Xe.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];RS=new Float32Array(1),pd=new Oe,zo=class{constructor(t,e,i=0,s=1/0){this.ray=new Hi(t,e),this.near=i,this.far=s,this.camera=null,this.layers=new cr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,e.projectionMatrix.elements[14]).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):se("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return pd.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(pd),this}intersectObject(t,e=!0,i=[]){return Ph(t,this,i,e),i.sort(md),i}intersectObjects(t,e=!0,i=[]){for(let s=0,a=t.length;s<a;s++)Ph(t[s],this,i,e);return i.sort(md),i}};yr=class{constructor(t=1,e=0,i=0){this.radius=t,this.phi=e,this.theta=i}set(t,e,i){return this.radius=t,this.phi=e,this.theta=i,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Me(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,i){return this.radius=Math.sqrt(t*t+e*e+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,i),this.phi=Math.acos(Me(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}},Ih=class n{static{n.prototype.isMatrix2=!0}constructor(t,e,i,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,i,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let i=0;i<4;i++)this.elements[i]=t[i+e];return this}set(t,e,i,s){let a=this.elements;return a[0]=t,a[2]=e,a[1]=i,a[3]=s,this}},gd=new tt,Vo=class extends rn{constructor(t=new tt(0,0,1),e=new tt(0,0,0),i=1,s=16776960,a=i*.2,l=a*.2){super(),this.type="ArrowHelper",Ga===void 0&&(Ga=new We,Ga.setAttribute("position",new Ge([0,0,0,0,1,0],3)),_h=new dr(.5,1,5,1),_h.translate(0,-.5,0)),this.position.copy(e),this.line=new bs(Ga,new ni({color:s,toneMapped:!1})),this.line.matrixAutoUpdate=!1,this.add(this.line),this.cone=new Re(_h,new Fn({color:s,toneMapped:!1})),this.cone.matrixAutoUpdate=!1,this.add(this.cone),this.setDirection(t),this.setLength(i,a,l)}setDirection(t){if(t.y>.99999)this.quaternion.set(0,0,0,1);else if(t.y<-.99999)this.quaternion.set(1,0,0,0);else{gd.set(t.z,0,-t.x).normalize();let e=Math.acos(t.y);this.quaternion.setFromAxisAngle(gd,e)}}setLength(t,e=t*.2,i=e*.2){this.line.scale.set(1,Math.max(1e-4,t-e),1),this.line.updateMatrix(),this.cone.scale.set(i,e,i),this.cone.position.y=t,this.cone.updateMatrix()}setColor(t){this.line.material.color.set(t),this.cone.material.color.set(t)}copy(t){return super.copy(t,!1),this.line.copy(t.line),this.cone.copy(t.cone),this}dispose(){super.dispose(),this.line.geometry.dispose(),this.line.material.dispose(),this.cone.geometry.dispose(),this.cone.material.dispose()}},Ho=class extends ei{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}};typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?ie("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186")});function Ip(){let n=null,t=!1,e=null,i=null;function s(a,l){i=n.requestAnimationFrame(s),e(a,l)}return{start:function(){t!==!0&&e!==null&&n!==null&&(i=n.requestAnimationFrame(s),t=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(a){e=a},setContext:function(a){n=a}}}function Pg(n){let t=new WeakMap;function e(o,h){let f=o.array,d=o.usage,g=f.byteLength,p=n.createBuffer();n.bindBuffer(h,p),n.bufferData(h,f,d),o.onUploadCallback();let x;if(f instanceof Float32Array)x=n.FLOAT;else if(typeof Float16Array<"u"&&f instanceof Float16Array)x=n.HALF_FLOAT;else if(f instanceof Uint16Array)o.isFloat16BufferAttribute?x=n.HALF_FLOAT:x=n.UNSIGNED_SHORT;else if(f instanceof Int16Array)x=n.SHORT;else if(f instanceof Uint32Array)x=n.UNSIGNED_INT;else if(f instanceof Int32Array)x=n.INT;else if(f instanceof Int8Array)x=n.BYTE;else if(f instanceof Uint8Array)x=n.UNSIGNED_BYTE;else if(f instanceof Uint8ClampedArray)x=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:p,type:x,bytesPerElement:f.BYTES_PER_ELEMENT,version:o.version,size:g}}function i(o,h,f){let d=h.array,g=h.updateRanges;if(n.bindBuffer(f,o),g.length===0)n.bufferSubData(f,0,d);else{g.sort((x,v)=>x.start-v.start);let p=0;for(let x=1;x<g.length;x++){let v=g[p],b=g[x];b.start<=v.start+v.count+1?v.count=Math.max(v.count,b.start+b.count-v.start):(++p,g[p]=b)}g.length=p+1;for(let x=0,v=g.length;x<v;x++){let b=g[x];n.bufferSubData(f,b.start*d.BYTES_PER_ELEMENT,d,b.start,b.count)}h.clearUpdateRanges()}h.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function a(o){o.isInterleavedBufferAttribute&&(o=o.data);let h=t.get(o);h&&(n.deleteBuffer(h.buffer),t.delete(o))}function l(o,h){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let d=t.get(o);(!d||d.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let f=t.get(o);if(f===void 0)t.set(o,e(o,h));else if(f.version<o.version){if(f.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(f.buffer,o,h),f.version=o.version}}return{get:s,remove:a,update:l}}function u_(n,t,e,i,s,a){let l=new le(0),o=s===!0?0:1,h,f,d=null,g=0,p=null;function x(A){let T=A.isScene===!0?A.background:null;if(T&&T.isTexture){let S=A.backgroundBlurriness>0;T=t.get(T,S)}return T}function v(A){let T=!1,S=x(A);S===null?y(l,o):S&&S.isColor&&(y(S,1),T=!0);let I=n.xr.getEnvironmentBlendMode();I==="additive"?e.buffers.color.setClear(0,0,0,1,a):I==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,a),(n.autoClear||T)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function b(A,T){let S=x(T);S&&(S.isCubeTexture||S.mapping===Xo)?(f===void 0&&(f=new Re(new Xi(1,1,1),new Un({name:"BackgroundCubeMaterial",uniforms:As(_i.backgroundCube.uniforms),vertexShader:_i.backgroundCube.vertexShader,fragmentShader:_i.backgroundCube.fragmentShader,side:An,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),f.geometry.deleteAttribute("normal"),f.geometry.deleteAttribute("uv"),f.onBeforeRender=function(I,E,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(f.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(f)),f.material.uniforms.envMap.value=S,f.material.uniforms.backgroundBlurriness.value=T.backgroundBlurriness,f.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,f.material.uniforms.backgroundRotation.value.setFromMatrix4(h_.makeRotationFromEuler(T.backgroundRotation)).transpose(),S.isCubeTexture&&S.isRenderTargetTexture===!1&&f.material.uniforms.backgroundRotation.value.premultiply(Rp),f.material.toneMapped=Ee.getTransfer(S.colorSpace)!==Ne,(d!==S||g!==S.version||p!==n.toneMapping)&&(f.material.needsUpdate=!0,d=S,g=S.version,p=n.toneMapping),f.layers.enableAll(),A.unshift(f,f.geometry,f.material,0,0,null)):S&&S.isTexture&&(h===void 0&&(h=new Re(new No(2,2),new Un({name:"BackgroundMaterial",uniforms:As(_i.background.uniforms),vertexShader:_i.background.vertexShader,fragmentShader:_i.background.fragmentShader,side:ji,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(h)),h.material.uniforms.t2D.value=S,h.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,h.material.toneMapped=Ee.getTransfer(S.colorSpace)!==Ne,S.matrixAutoUpdate===!0&&S.updateMatrix(),h.material.uniforms.uvTransform.value.copy(S.matrix),(d!==S||g!==S.version||p!==n.toneMapping)&&(h.material.needsUpdate=!0,d=S,g=S.version,p=n.toneMapping),h.layers.enableAll(),A.unshift(h,h.geometry,h.material,0,0,null))}function y(A,T){A.getRGB(pc,iu(n)),e.buffers.color.setClear(pc.r,pc.g,pc.b,T,a)}function _(){f!==void 0&&(f.geometry.dispose(),f.material.dispose(),f=void 0),h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0)}return{getClearColor:function(){return l},setClearColor:function(A,T=1){l.set(A),o=T,y(l,o)},getClearAlpha:function(){return o},setClearAlpha:function(A){o=A,y(l,o)},render:v,addToRenderList:b,dispose:_}}function f_(n,t){let e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=p(null),a=s,l=!1;function o(U,G,V,k,q){let Z=!1,B=g(U,k,V,G);a!==B&&(a=B,f(a.object)),Z=x(U,k,V,q),Z&&v(U,k,V,q),q!==null&&t.update(q,n.ELEMENT_ARRAY_BUFFER),(Z||l)&&(l=!1,S(U,G,V,k),q!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(q).buffer))}function h(){return n.createVertexArray()}function f(U){return n.bindVertexArray(U)}function d(U){return n.deleteVertexArray(U)}function g(U,G,V,k){let q=k.wireframe===!0,Z=i[G.id];Z===void 0&&(Z={},i[G.id]=Z);let B=U.isInstancedMesh===!0?U.id:0,K=Z[B];K===void 0&&(K={},Z[B]=K);let j=K[V.id];j===void 0&&(j={},K[V.id]=j);let st=j[q];return st===void 0&&(st=p(h()),j[q]=st),st}function p(U){let G=[],V=[],k=[];for(let q=0;q<e;q++)G[q]=0,V[q]=0,k[q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:G,enabledAttributes:V,attributeDivisors:k,object:U,attributes:{},index:null}}function x(U,G,V,k){let q=a.attributes,Z=G.attributes,B=0,K=V.getAttributes();for(let j in K)if(K[j].location>=0){let X=q[j],bt=Z[j];if(bt===void 0&&(j==="instanceMatrix"&&U.instanceMatrix&&(bt=U.instanceMatrix),j==="instanceColor"&&U.instanceColor&&(bt=U.instanceColor)),X===void 0||X.attribute!==bt||bt&&X.data!==bt.data)return!0;B++}return a.attributesNum!==B||a.index!==k}function v(U,G,V,k){let q={},Z=G.attributes,B=0,K=V.getAttributes();for(let j in K)if(K[j].location>=0){let X=Z[j];X===void 0&&(j==="instanceMatrix"&&U.instanceMatrix&&(X=U.instanceMatrix),j==="instanceColor"&&U.instanceColor&&(X=U.instanceColor));let bt={};bt.attribute=X,X&&X.data&&(bt.data=X.data),q[j]=bt,B++}a.attributes=q,a.attributesNum=B,a.index=k}function b(){let U=a.newAttributes;for(let G=0,V=U.length;G<V;G++)U[G]=0}function y(U){_(U,0)}function _(U,G){let V=a.newAttributes,k=a.enabledAttributes,q=a.attributeDivisors;V[U]=1,k[U]===0&&(n.enableVertexAttribArray(U),k[U]=1),q[U]!==G&&(n.vertexAttribDivisor(U,G),q[U]=G)}function A(){let U=a.newAttributes,G=a.enabledAttributes;for(let V=0,k=G.length;V<k;V++)G[V]!==U[V]&&(n.disableVertexAttribArray(V),G[V]=0)}function T(U,G,V,k,q,Z,B){B===!0?n.vertexAttribIPointer(U,G,V,q,Z):n.vertexAttribPointer(U,G,V,k,q,Z)}function S(U,G,V,k){b();let q=k.attributes,Z=V.getAttributes(),B=G.defaultAttributeValues;for(let K in Z){let j=Z[K];if(j.location>=0){let st=q[K];if(st===void 0&&(K==="instanceMatrix"&&U.instanceMatrix&&(st=U.instanceMatrix),K==="instanceColor"&&U.instanceColor&&(st=U.instanceColor)),st!==void 0){let X=st.normalized,bt=st.itemSize,St=t.get(st);if(St===void 0)continue;let Vt=St.buffer,$t=St.type,te=St.bytesPerElement,ut=$t===n.INT||$t===n.UNSIGNED_INT||st.gpuType===Pl;if(st.isInterleavedBufferAttribute){let gt=st.data,Dt=gt.stride,ne=st.offset;if(gt.isInstancedInterleavedBuffer){for(let Ot=0;Ot<j.locationSize;Ot++)_(j.location+Ot,gt.meshPerAttribute);U.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=gt.meshPerAttribute*gt.count)}else for(let Ot=0;Ot<j.locationSize;Ot++)y(j.location+Ot);n.bindBuffer(n.ARRAY_BUFFER,Vt);for(let Ot=0;Ot<j.locationSize;Ot++)T(j.location+Ot,bt/j.locationSize,$t,X,Dt*te,(ne+bt/j.locationSize*Ot)*te,ut)}else{if(st.isInstancedBufferAttribute){for(let gt=0;gt<j.locationSize;gt++)_(j.location+gt,st.meshPerAttribute);U.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=st.meshPerAttribute*st.count)}else for(let gt=0;gt<j.locationSize;gt++)y(j.location+gt);n.bindBuffer(n.ARRAY_BUFFER,Vt);for(let gt=0;gt<j.locationSize;gt++)T(j.location+gt,bt/j.locationSize,$t,X,bt*te,bt/j.locationSize*gt*te,ut)}}else if(B!==void 0){let X=B[K];if(X!==void 0)switch(X.length){case 2:n.vertexAttrib2fv(j.location,X);break;case 3:n.vertexAttrib3fv(j.location,X);break;case 4:n.vertexAttrib4fv(j.location,X);break;default:n.vertexAttrib1fv(j.location,X)}}}}A()}function I(){N();for(let U in i){let G=i[U];for(let V in G){let k=G[V];for(let q in k){let Z=k[q];for(let B in Z)d(Z[B].object),delete Z[B];delete k[q]}}delete i[U]}}function E(U){if(i[U.id]===void 0)return;let G=i[U.id];for(let V in G){let k=G[V];for(let q in k){let Z=k[q];for(let B in Z)d(Z[B].object),delete Z[B];delete k[q]}}delete i[U.id]}function C(U){for(let G in i){let V=i[G];for(let k in V){let q=V[k];if(q[U.id]===void 0)continue;let Z=q[U.id];for(let B in Z)d(Z[B].object),delete Z[B];delete q[U.id]}}}function w(U){for(let G in i){let V=i[G],k=U.isInstancedMesh===!0?U.id:0,q=V[k];if(q!==void 0){for(let Z in q){let B=q[Z];for(let K in B)d(B[K].object),delete B[K];delete q[Z]}delete V[k],Object.keys(V).length===0&&delete i[G]}}}function N(){F(),l=!0,a!==s&&(a=s,f(a.object))}function F(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:N,resetDefaultState:F,dispose:I,releaseStatesOfGeometry:E,releaseStatesOfObject:w,releaseStatesOfProgram:C,initAttributes:b,enableAttribute:y,disableUnusedAttributes:A}}function d_(n,t,e){let i;function s(h){i=h}function a(h,f){n.drawArrays(i,h,f),e.update(f,i,1)}function l(h,f,d){d!==0&&(n.drawArraysInstanced(i,h,f,d),e.update(f,i,d))}function o(h,f,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,h,0,f,0,d);let p=0;for(let x=0;x<d;x++)p+=f[x];e.update(p,i,1)}this.setMode=s,this.render=a,this.renderInstances=l,this.renderMultiDraw=o}function p_(n,t,e,i){let s;function a(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let C=t.get("EXT_texture_filter_anisotropic");s=n.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function l(C){return!(C!==Gn&&i.convert(C)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(C){let w=C===oi&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(C!==In&&C!==ri&&!w&&i.convert(C)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE))}function h(C){if(C==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let f=e.precision!==void 0?e.precision:"highp",d=h(f);d!==f&&(ie("WebGLRenderer:",f,"not supported, using",d,"instead."),f=d);let g=e.logarithmicDepthBuffer===!0,p=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&p===!1&&ie("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let x=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),v=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),b=n.getParameter(n.MAX_TEXTURE_SIZE),y=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),_=n.getParameter(n.MAX_VERTEX_ATTRIBS),A=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),T=n.getParameter(n.MAX_VARYING_VECTORS),S=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),I=n.getParameter(n.MAX_SAMPLES),E=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:h,textureFormatReadable:l,textureTypeReadable:o,precision:f,logarithmicDepthBuffer:g,reversedDepthBuffer:p,maxTextures:x,maxVertexTextures:v,maxTextureSize:b,maxCubemapSize:y,maxAttributes:_,maxVertexUniforms:A,maxVaryings:T,maxFragmentUniforms:S,maxSamples:I,samples:E}}function m_(n){let t=this,e=null,i=0,s=!1,a=!1,l=new Dn,o=new me,h={value:null,needsUpdate:!1};this.uniform=h,this.numPlanes=0,this.numIntersection=0,this.init=function(g,p){let x=g.length!==0||p||i!==0||s;return s=p,i=g.length,x},this.beginShadows=function(){a=!0,d(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(g,p){e=d(g,p,0)},this.setState=function(g,p,x){let v=g.clippingPlanes,b=g.clipIntersection,y=g.clipShadows,_=n.get(g);if(!s||v===null||v.length===0||a&&!y)a?d(null):f();else{let A=a?0:i,T=A*4,S=_.clippingState||null;h.value=S,S=d(v,p,T,x);for(let I=0;I!==T;++I)S[I]=e[I];_.clippingState=S,this.numIntersection=b?this.numPlanes:0,this.numPlanes+=A}};function f(){h.value!==e&&(h.value=e,h.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function d(g,p,x,v){let b=g!==null?g.length:0,y=null;if(b!==0){if(y=h.value,v!==!0||y===null){let _=x+b*4,A=p.matrixWorldInverse;o.getNormalMatrix(A),(y===null||y.length<_)&&(y=new Float32Array(_));for(let T=0,S=x;T!==b;++T,S+=4)l.copy(g[T]).applyMatrix4(A,o),l.normal.toArray(y,S),y[S+3]=l.constant}h.value=y,h.needsUpdate=!0}return t.numPlanes=b,t.numIntersection=0,y}}function v_(n){let t=[],e=[],i=n,s=n-wr+1+g_;for(let a=0;a<s;a++){let l=Math.pow(2,i);t.push(l);let o=1/(l-2),h=-o,f=1+o,d=[h,h,f,h,f,f,h,h,f,f,h,f],g=6,p=6,x=3,v=new Float32Array(x*p*g),b=new Float32Array(x*p*g);for(let _=0;_<g;_++){let A=_%3*2/3-1,T=_>2?0:-1,S=[A,T,0,A+2/3,T,0,A+2/3,T+1,0,A,T,0,A+2/3,T+1,0,A,T+1,0];v.set(S,x*p*_);for(let I=0;I<p;I++){let E=d[I*2]*2-1,C=d[I*2+1]*2-1;_===0?Cs.set(1,C,E):_===1?Cs.set(-E,1,-C):_===2?Cs.set(-E,C,1):_===3?Cs.set(-1,C,-E):_===4?Cs.set(-E,-1,C):Cs.set(E,C,-1),Cs.toArray(b,(_*p+I)*x)}}let y=new We;y.setAttribute("position",new He(v,x)),y.setAttribute("outputDirection",new He(b,x)),e.push(new Re(y,null)),i>wr&&i--}return{lodMeshes:e,sizeLods:t}}function hp(n,t,e){let i=new Pn(n,t,e);return i.texture.mapping=Xo,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Sr(n,t,e,i,s){n.viewport.set(t,e,i,s),n.scissor.set(t,e,i,s)}function b_(n,t,e){return new Un({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:y_,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:_c(),fragmentShader:`

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
		`,blending:xi,depthTest:!1,depthWrite:!1})}function M_(n,t,e){return new Un({name:"SphericalGaussianBlur",defines:{SAMPLES:x_,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:_c(),fragmentShader:`

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
		`,blending:xi,depthTest:!1,depthWrite:!1})}function up(){return new Un({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:_c(),fragmentShader:`

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
		`,blending:xi,depthTest:!1,depthWrite:!1})}function fp(){return new Un({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:_c(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:xi,depthTest:!1,depthWrite:!1})}function _c(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}function S_(n){let t=new WeakMap,e=new WeakMap,i=null;function s(p,x=!1){return p==null?null:x?l(p):a(p)}function a(p){if(p&&p.isTexture){let x=p.mapping;if(x===Tl||x===Al)if(t.has(p)){let v=t.get(p).texture;return o(v,p.mapping)}else{let v=p.image;if(v&&v.height>0){let b=new xc(v.height);return b.fromEquirectangularTexture(n,p),t.set(p,b),p.addEventListener("dispose",f),o(b.texture,p.mapping)}else return null}}return p}function l(p){if(p&&p.isTexture){let x=p.mapping,v=x===Tl||x===Al,b=x===Ki||x===Es;if(v||b){let y=e.get(p),_=y!==void 0?y.texture.pmremVersion:0;if(p.isRenderTargetTexture&&p.pmremVersion!==_)return i===null&&(i=new gc(n)),y=v?i.fromEquirectangular(p,y):i.fromCubemap(p,y),y.texture.pmremVersion=p.pmremVersion,e.set(p,y),y.texture;if(y!==void 0)return y.texture;{let A=p.image;return v&&A&&A.height>0||b&&A&&h(A)?(i===null&&(i=new gc(n)),y=v?i.fromEquirectangular(p):i.fromCubemap(p),y.texture.pmremVersion=p.pmremVersion,e.set(p,y),p.addEventListener("dispose",d),y.texture):null}}}return p}function o(p,x){return x===Tl?p.mapping=Ki:x===Al&&(p.mapping=Es),p}function h(p){let x=0,v=6;for(let b=0;b<v;b++)p[b]!==void 0&&x++;return x===v}function f(p){let x=p.target;x.removeEventListener("dispose",f);let v=t.get(x);v!==void 0&&(t.delete(x),v.dispose())}function d(p){let x=p.target;x.removeEventListener("dispose",d);let v=e.get(x);v!==void 0&&(e.delete(x),v.dispose())}function g(){t=new WeakMap,e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:g}}function w_(n){let t={};function e(i){if(t[i]!==void 0)return t[i];let s=n.getExtension(i);return t[i]=s,s}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){let s=e(i);return s===null&&_s("WebGLRenderer: "+i+" extension not supported."),s}}}function E_(n,t,e,i){let s={},a=new WeakMap;function l(g){let p=g.target;p.index!==null&&t.remove(p.index);for(let v in p.attributes)t.remove(p.attributes[v]);p.removeEventListener("dispose",l),delete s[p.id];let x=a.get(p);x&&(t.remove(x),a.delete(p)),i.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,e.memory.geometries--}function o(g,p){return s[p.id]===!0||(p.addEventListener("dispose",l),s[p.id]=!0,e.memory.geometries++),p}function h(g){let p=g.attributes;for(let x in p)t.update(p[x],n.ARRAY_BUFFER)}function f(g){let p=[],x=g.index,v=g.attributes.position,b=0;if(v===void 0)return;if(x!==null){let A=x.array;b=x.version;for(let T=0,S=A.length;T<S;T+=3){let I=A[T+0],E=A[T+1],C=A[T+2];p.push(I,E,E,C,C,I)}}else{let A=v.array;b=v.version;for(let T=0,S=A.length/3-1;T<S;T+=3){let I=T+0,E=T+1,C=T+2;p.push(I,E,E,C,C,I)}}let y=new(v.count>=65535?So:Mo)(p,1);y.version=b;let _=a.get(g);_&&t.remove(_),a.set(g,y)}function d(g){let p=a.get(g);if(p){let x=g.index;x!==null&&p.version<x.version&&f(g)}else f(g);return a.get(g)}return{get:o,update:h,getWireframeAttribute:d}}function T_(n,t,e){let i;function s(g){i=g}let a,l;function o(g){a=g.type,l=g.bytesPerElement}function h(g,p){n.drawElements(i,p,a,g*l),e.update(p,i,1)}function f(g,p,x){x!==0&&(n.drawElementsInstanced(i,p,a,g*l,x),e.update(p,i,x))}function d(g,p,x){if(x===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,a,g,0,x);let b=0;for(let y=0;y<x;y++)b+=p[y];e.update(b,i,1)}this.setMode=s,this.setIndex=o,this.render=h,this.renderInstances=f,this.renderMultiDraw=d}function A_(n){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(a,l,o){switch(e.calls++,l){case n.TRIANGLES:e.triangles+=o*(a/3);break;case n.LINES:e.lines+=o*(a/2);break;case n.LINE_STRIP:e.lines+=o*(a-1);break;case n.LINE_LOOP:e.lines+=o*a;break;case n.POINTS:e.points+=o*a;break;default:se("WebGLInfo: Unknown draw mode:",l);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:i}}function C_(n,t,e){let i=new WeakMap,s=new $e;function a(l,o,h){let f=l.morphTargetInfluences,d=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,g=d!==void 0?d.length:0,p=i.get(o);if(p===void 0||p.count!==g){let N=function(){C.dispose(),i.delete(o),o.removeEventListener("dispose",N)};p!==void 0&&p.texture.dispose();let x=o.morphAttributes.position!==void 0,v=o.morphAttributes.normal!==void 0,b=o.morphAttributes.color!==void 0,y=o.morphAttributes.position||[],_=o.morphAttributes.normal||[],A=o.morphAttributes.color||[],T=0;x===!0&&(T=1),v===!0&&(T=2),b===!0&&(T=3);let S=o.attributes.position.count*T,I=1;S>t.maxTextureSize&&(I=Math.ceil(S/t.maxTextureSize),S=t.maxTextureSize);let E=new Float32Array(S*I*4*g),C=new vo(E,S,I,g);C.type=ri,C.needsUpdate=!0;let w=T*4;for(let F=0;F<g;F++){let U=y[F],G=_[F],V=A[F],k=S*I*4*F;for(let q=0;q<U.count;q++){let Z=q*w;x===!0&&(s.fromBufferAttribute(U,q),E[k+Z+0]=s.x,E[k+Z+1]=s.y,E[k+Z+2]=s.z,E[k+Z+3]=0),v===!0&&(s.fromBufferAttribute(G,q),E[k+Z+4]=s.x,E[k+Z+5]=s.y,E[k+Z+6]=s.z,E[k+Z+7]=0),b===!0&&(s.fromBufferAttribute(V,q),E[k+Z+8]=s.x,E[k+Z+9]=s.y,E[k+Z+10]=s.z,E[k+Z+11]=V.itemSize===4?s.w:1)}}p={count:g,texture:C,size:new jt(S,I)},i.set(o,p),o.addEventListener("dispose",N)}if(l.isInstancedMesh===!0&&l.morphTexture!==null)h.getUniforms().setValue(n,"morphTexture",l.morphTexture,e);else{let x=0;for(let b=0;b<f.length;b++)x+=f[b];let v=o.morphTargetsRelative?1:1-x;h.getUniforms().setValue(n,"morphTargetBaseInfluence",v),h.getUniforms().setValue(n,"morphTargetInfluences",f)}h.getUniforms().setValue(n,"morphTargetsTexture",p.texture,e),h.getUniforms().setValue(n,"morphTargetsTextureSize",p.size)}return{update:a}}function P_(n,t,e,i,s){let a=new WeakMap;function l(f){let d=s.render.frame,g=f.geometry,p=t.get(f,g);if(a.get(p)!==d&&(t.update(p),a.set(p,d)),f.isInstancedMesh&&(f.hasEventListener("dispose",h)===!1&&f.addEventListener("dispose",h),a.get(f)!==d&&(e.update(f.instanceMatrix,n.ARRAY_BUFFER),f.instanceColor!==null&&e.update(f.instanceColor,n.ARRAY_BUFFER),a.set(f,d))),f.isSkinnedMesh){let x=f.skeleton;a.get(x)!==d&&(x.update(),a.set(x,d))}return p}function o(){a=new WeakMap}function h(f){let d=f.target;d.removeEventListener("dispose",h),i.releaseStatesOfObject(d),e.remove(d.instanceMatrix),d.instanceColor!==null&&e.remove(d.instanceColor)}return{update:l,dispose:o}}function R_(n,t,e,i,s,a){let l=new Pn(t,e,{type:n,depthBuffer:s,stencilBuffer:a,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,h=null,f=new We;f.setAttribute("position",new Ge([-1,3,0,-1,-1,0,3,-1,0],3)),f.setAttribute("uv",new Ge([0,2,0,0,2,0],2));let d=new hl({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),g=new Re(f,d),p=new gr(-1,1,1,-1,0,1),x=null,v=null,b=!1,y,_=null,A=[],T=!1;this.setSize=function(S,I){l.setSize(S,I),o!==null&&o.setSize(S,I),h!==null&&h.setSize(S,I);for(let E=0;E<A.length;E++){let C=A[E];C.setSize&&C.setSize(S,I)}},this.setEffects=function(S){A=S,T=A.length>0&&A[0].isRenderPass===!0;let I=l.width,E=l.height;A.length>0&&o===null&&(o=new Pn(I,E,{type:oi,depthBuffer:!1,stencilBuffer:!1}),h=new Pn(I,E,{type:oi,depthBuffer:!1,stencilBuffer:!1}));for(let C=0;C<A.length;C++){let w=A[C];w.setSize&&w.setSize(I,E)}},this.begin=function(S,I){if(b||S.toneMapping===ii&&A.length===0)return!1;if(_=I,I!==null){let E=I.width,C=I.height;(l.width!==E||l.height!==C)&&this.setSize(E,C)}return T===!1&&S.setRenderTarget(l),y=S.toneMapping,S.toneMapping=ii,!0},this.hasRenderPass=function(){return T},this.end=function(S,I){S.toneMapping=y,b=!0;let E=l,C=o;for(let w=0;w<A.length;w++){let N=A[w];N.enabled!==!1&&(N.render(S,C,E,I),N.needsSwap!==!1&&(E=C,C=C===o?h:o))}if(x!==S.outputColorSpace||v!==S.toneMapping){x=S.outputColorSpace,v=S.toneMapping,d.defines={},Ee.getTransfer(x)===Ne&&(d.defines.SRGB_TRANSFER="");let w=I_[v];w&&(d.defines[w]=""),d.needsUpdate=!0}d.uniforms.tDiffuse.value=E.texture,S.setRenderTarget(_),S.render(g,p),_=null,b=!1},this.isCompositing=function(){return b},this.dispose=function(){l.dispose(),o!==null&&o.dispose(),h!==null&&h.dispose(),f.dispose(),d.dispose()}}function Tr(n,t,e){let i=n[0];if(i<=0||i>0)return n;let s=t*e,a=dp[s];if(a===void 0&&(a=new Float32Array(s),dp[s]=a),t!==0){i.toArray(a,0);for(let l=1,o=0;l!==t;++l)o+=e,n[l].toArray(a,o)}return a}function on(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function an(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function vc(n,t){let e=pp[t];e===void 0&&(e=new Int32Array(t),pp[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function L_(n,t){let e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function N_(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(on(e,t))return;n.uniform2fv(this.addr,t),an(e,t)}}function D_(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(on(e,t))return;n.uniform3fv(this.addr,t),an(e,t)}}function O_(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(on(e,t))return;n.uniform4fv(this.addr,t),an(e,t)}}function F_(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(on(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),an(e,t)}else{if(on(e,i))return;xp.set(i),n.uniformMatrix2fv(this.addr,!1,xp),an(e,i)}}function U_(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(on(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),an(e,t)}else{if(on(e,i))return;gp.set(i),n.uniformMatrix3fv(this.addr,!1,gp),an(e,i)}}function B_(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(on(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),an(e,t)}else{if(on(e,i))return;mp.set(i),n.uniformMatrix4fv(this.addr,!1,mp),an(e,i)}}function k_(n,t){let e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function z_(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(on(e,t))return;n.uniform2iv(this.addr,t),an(e,t)}}function V_(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(on(e,t))return;n.uniform3iv(this.addr,t),an(e,t)}}function H_(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(on(e,t))return;n.uniform4iv(this.addr,t),an(e,t)}}function G_(n,t){let e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function X_(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(on(e,t))return;n.uniform2uiv(this.addr,t),an(e,t)}}function W_(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(on(e,t))return;n.uniform3uiv(this.addr,t),an(e,t)}}function Y_(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(on(e,t))return;n.uniform4uiv(this.addr,t),an(e,t)}}function $_(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let a;this.type===n.SAMPLER_2D_SHADOW?(pu.compareFunction=e.isReversedDepthBuffer()?dc:fc,a=pu):a=Lp,e.setTexture2D(t||a,s)}function q_(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture3D(t||Dp,s)}function Z_(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTextureCube(t||Op,s)}function J_(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture2DArray(t||Np,s)}function j_(n){switch(n){case 5126:return L_;case 35664:return N_;case 35665:return D_;case 35666:return O_;case 35674:return F_;case 35675:return U_;case 35676:return B_;case 5124:case 35670:return k_;case 35667:case 35671:return z_;case 35668:case 35672:return V_;case 35669:case 35673:return H_;case 5125:return G_;case 36294:return X_;case 36295:return W_;case 36296:return Y_;case 35678:case 36198:case 36298:case 36306:case 35682:return $_;case 35679:case 36299:case 36307:return q_;case 35680:case 36300:case 36308:case 36293:return Z_;case 36289:case 36303:case 36311:case 36292:return J_}}function K_(n,t){n.uniform1fv(this.addr,t)}function Q_(n,t){let e=Tr(t,this.size,2);n.uniform2fv(this.addr,e)}function tv(n,t){let e=Tr(t,this.size,3);n.uniform3fv(this.addr,e)}function ev(n,t){let e=Tr(t,this.size,4);n.uniform4fv(this.addr,e)}function nv(n,t){let e=Tr(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function iv(n,t){let e=Tr(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function sv(n,t){let e=Tr(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function rv(n,t){n.uniform1iv(this.addr,t)}function ov(n,t){n.uniform2iv(this.addr,t)}function av(n,t){n.uniform3iv(this.addr,t)}function lv(n,t){n.uniform4iv(this.addr,t)}function cv(n,t){n.uniform1uiv(this.addr,t)}function hv(n,t){n.uniform2uiv(this.addr,t)}function uv(n,t){n.uniform3uiv(this.addr,t)}function fv(n,t){n.uniform4uiv(this.addr,t)}function dv(n,t,e){let i=this.cache,s=t.length,a=vc(e,s);on(i,a)||(n.uniform1iv(this.addr,a),an(i,a));let l;this.type===n.SAMPLER_2D_SHADOW?l=pu:l=Lp;for(let o=0;o!==s;++o)e.setTexture2D(t[o]||l,a[o])}function pv(n,t,e){let i=this.cache,s=t.length,a=vc(e,s);on(i,a)||(n.uniform1iv(this.addr,a),an(i,a));for(let l=0;l!==s;++l)e.setTexture3D(t[l]||Dp,a[l])}function mv(n,t,e){let i=this.cache,s=t.length,a=vc(e,s);on(i,a)||(n.uniform1iv(this.addr,a),an(i,a));for(let l=0;l!==s;++l)e.setTextureCube(t[l]||Op,a[l])}function gv(n,t,e){let i=this.cache,s=t.length,a=vc(e,s);on(i,a)||(n.uniform1iv(this.addr,a),an(i,a));for(let l=0;l!==s;++l)e.setTexture2DArray(t[l]||Np,a[l])}function xv(n){switch(n){case 5126:return K_;case 35664:return Q_;case 35665:return tv;case 35666:return ev;case 35674:return nv;case 35675:return iv;case 35676:return sv;case 5124:case 35670:return rv;case 35667:case 35671:return ov;case 35668:case 35672:return av;case 35669:case 35673:return lv;case 5125:return cv;case 36294:return hv;case 36295:return uv;case 36296:return fv;case 35678:case 36198:case 36298:case 36306:case 35682:return dv;case 35679:case 36299:case 36307:return pv;case 35680:case 36300:case 36308:case 36293:return mv;case 36289:case 36303:case 36311:case 36292:return gv}}function yp(n,t){n.seq.push(t),n.map[t.id]=t}function yv(n,t,e){let i=n.name,s=i.length;for(fu.lastIndex=0;;){let a=fu.exec(i),l=fu.lastIndex,o=a[1],h=a[2]==="]",f=a[3];if(h&&(o=o|0),f===void 0||f==="["&&l+2===s){yp(e,f===void 0?new mu(o,n,t):new gu(o,n,t));break}else{let g=e.map[o];g===void 0&&(g=new xu(o),yp(e,g)),e=g}}}function _p(n,t,e){let i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}function bv(n,t){let e=n.split(`
`),i=[],s=Math.max(t-6,0),a=Math.min(t+6,e.length);for(let l=s;l<a;l++){let o=l+1;i.push(`${o===t?">":" "} ${o}: ${e[l]}`)}return i.join(`
`)}function Mv(n){Ee._getMatrix(vp,Ee.workingColorSpace,n);let t=`mat3( ${vp.elements.map(e=>e.toFixed(4))} )`;switch(Ee.getTransfer(n)){case xo:return[t,"LinearTransferOETF"];case Ne:return[t,"sRGBTransferOETF"];default:return ie("WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function bp(n,t,e){let i=n.getShaderParameter(t,n.COMPILE_STATUS),a=(n.getShaderInfoLog(t)||"").trim();if(i&&a==="")return"";let l=/ERROR: 0:(\d+)/.exec(a);if(l){let o=parseInt(l[1]);return e.toUpperCase()+`

`+a+`

`+bv(n.getShaderSource(t),o)}else return a}function Sv(n,t){let e=Mv(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function Ev(n,t){let e=wv[t];return e===void 0?(ie("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function Tv(){Ee.getLuminanceCoefficients(mc);let n=mc.x.toFixed(4),t=mc.y.toFixed(4),e=mc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Av(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ta).join(`
`)}function Cv(n){let t=[];for(let e in n){let i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function Pv(n,t){let e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let a=n.getActiveAttrib(t,s),l=a.name,o=1;a.type===n.FLOAT_MAT2&&(o=2),a.type===n.FLOAT_MAT3&&(o=3),a.type===n.FLOAT_MAT4&&(o=4),e[l]={type:a.type,location:n.getAttribLocation(t,l),locationSize:o}}return e}function ta(n){return n!==""}function Mp(n,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Sp(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}function yu(n){return n.replace(Iv,Lv)}function Lv(n,t){let e=xe[t];if(e===void 0){let i=Rv.get(t);if(i!==void 0)e=xe[i],ie('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return yu(e)}function wp(n){return n.replace(Nv,Dv)}function Dv(n,t,e,i){let s="";for(let a=parseInt(t);a<parseInt(e);a++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return s}function Ep(n){let t=`precision ${n.precision} float;
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
#define LOW_PRECISION`),t}function Fv(n){return Ov[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}function Bv(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":Uv[n.envMapMode]||"ENVMAP_TYPE_CUBE"}function zv(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":kv[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}function Hv(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":Vv[n.combine]||"ENVMAP_BLENDING_NONE"}function Gv(n){let t=n.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:i,maxMip:e}}function Xv(n,t,e,i){let s=n.getContext(),a=e.defines,l=e.vertexShader,o=e.fragmentShader,h=Fv(e),f=Bv(e),d=zv(e),g=Hv(e),p=Gv(e),x=Av(e),v=Cv(a),b=s.createProgram(),y,_,A=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(y=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v].filter(ta).join(`
`),y.length>0&&(y+=`
`),_=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v].filter(ta).join(`
`),_.length>0&&(_+=`
`)):(y=[Ep(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+d:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+h:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ta).join(`
`),_=[Ep(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+f:"",e.envMap?"#define "+d:"",e.envMap?"#define "+g:"",p?"#define CUBEUV_TEXEL_WIDTH "+p.texelWidth:"",p?"#define CUBEUV_TEXEL_HEIGHT "+p.texelHeight:"",p?"#define CUBEUV_MAX_MIP "+p.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+h:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==ii?"#define TONE_MAPPING":"",e.toneMapping!==ii?xe.tonemapping_pars_fragment:"",e.toneMapping!==ii?Ev("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",xe.colorspace_pars_fragment,Sv("linearToOutputTexel",e.outputColorSpace),Tv(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(ta).join(`
`)),l=yu(l),l=Mp(l,e),l=Sp(l,e),o=yu(o),o=Mp(o,e),o=Sp(o,e),l=wp(l),o=wp(o),e.isRawShaderMaterial!==!0&&(A=`#version 300 es
`,y=[x,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,_=["#define varying in",e.glslVersion===tu?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===tu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);let T=A+y+l,S=A+_+o,I=_p(s,s.VERTEX_SHADER,T),E=_p(s,s.FRAGMENT_SHADER,S);s.attachShader(b,I),s.attachShader(b,E),e.index0AttributeName!==void 0?s.bindAttribLocation(b,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(b,0,"position"),s.linkProgram(b);function C(U){if(n.debug.checkShaderErrors){let G=s.getProgramInfoLog(b)||"",V=s.getShaderInfoLog(I)||"",k=s.getShaderInfoLog(E)||"",q=G.trim(),Z=V.trim(),B=k.trim(),K=!0,j=!0;if(s.getProgramParameter(b,s.LINK_STATUS)===!1)if(K=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,b,I,E);else{let st=bp(s,I,"vertex"),X=bp(s,E,"fragment");se("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(b,s.VALIDATE_STATUS)+`

Material Name: `+U.name+`
Material Type: `+U.type+`

Program Info Log: `+q+`
`+st+`
`+X)}else q!==""?ie("WebGLProgram: Program Info Log:",q):(Z===""||B==="")&&(j=!1);j&&(U.diagnostics={runnable:K,programLog:q,vertexShader:{log:Z,prefix:y},fragmentShader:{log:B,prefix:_}})}s.deleteShader(I),s.deleteShader(E),w=new Er(s,b),N=Pv(s,b)}let w;this.getUniforms=function(){return w===void 0&&C(this),w};let N;this.getAttributes=function(){return N===void 0&&C(this),N};let F=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return F===!1&&(F=s.getProgramParameter(b,_v)),F},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(b),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=vv++,this.cacheKey=t,this.usedTimes=1,this.program=b,this.vertexShader=I,this.fragmentShader=E,this}function Yv(n){return n===es||n===Jo||n===jo}function $v(n,t,e,i,s,a){let l=new cr,o=new _u,h=new Set,f=[],d=new Map,g=i.logarithmicDepthBuffer,p=i.precision,x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(w){return h.add(w),w===0?"uv":`uv${w}`}function b(w,N,F,U,G,V){let k=U.fog,q=G.geometry,Z=w.isMeshStandardMaterial||w.isMeshLambertMaterial||w.isMeshPhongMaterial?U.environment:null,B=w.isMeshStandardMaterial||w.isMeshLambertMaterial&&!w.envMap||w.isMeshPhongMaterial&&!w.envMap,K=t.get(w.envMap||Z,B),j=K&&K.mapping===Xo?K.image.height:null,st=x[w.type];w.precision!==null&&(p=i.getMaxPrecision(w.precision),p!==w.precision&&ie("WebGLProgram.getParameters:",w.precision,"not supported, using",p,"instead."));let X=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,bt=X!==void 0?X.length:0,St=0;q.morphAttributes.position!==void 0&&(St=1),q.morphAttributes.normal!==void 0&&(St=2),q.morphAttributes.color!==void 0&&(St=3);let Vt,$t,te,ut;if(st){let Le=_i[st];Vt=Le.vertexShader,$t=Le.fragmentShader}else{Vt=w.vertexShader,$t=w.fragmentShader;let Le=o.getVertexShaderStage(w),Te=o.getFragmentShaderStage(w);o.update(w,Le,Te),te=Le.id,ut=Te.id}let gt=n.getRenderTarget(),Dt=n.state.buffers.depth.getReversed(),ne=G.isInstancedMesh===!0,Ot=G.isBatchedMesh===!0,ce=!!w.map,be=!!w.matcap,he=!!K,ge=!!w.aoMap,Se=!!w.lightMap,ue=!!w.bumpMap&&w.wireframe===!1,Ae=!!w.normalMap,Ue=!!w.displacementMap,Ye=!!w.emissiveMap,Be=!!w.metalnessMap,ke=!!w.roughnessMap,et=w.anisotropy>0,Qe=w.clearcoat>0,Ce=w.dispersion>0,z=w.retroreflectivity>0,R=w.iridescence>0,rt=w.sheen>0,ft=w.transmission>0,mt=et&&!!w.anisotropyMap,Tt=Qe&&!!w.clearcoatMap,Pt=Qe&&!!w.clearcoatNormalMap,xt=Qe&&!!w.clearcoatRoughnessMap,Mt=R&&!!w.iridescenceMap,W=R&&!!w.iridescenceThicknessMap,Xt=rt&&!!w.sheenColorMap,Lt=rt&&!!w.sheenRoughnessMap,At=!!w.specularMap,qt=!!w.specularColorMap,Kt=!!w.specularIntensityMap,ae=ft&&!!w.transmissionMap,Q=ft&&!!w.thicknessMap,Rt=!!w.gradientMap,yt=!!w.alphaMap,Ct=w.alphaTest>0,Ut=!!w.alphaHash,wt=!!w.extensions,Ht=ii;w.toneMapped&&(gt===null||gt.isXRRenderTarget===!0)&&(Ht=n.toneMapping);let Gt={shaderID:st,shaderType:w.type,shaderName:w.name,vertexShader:Vt,fragmentShader:$t,defines:w.defines,customVertexShaderID:te,customFragmentShaderID:ut,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:p,batching:Ot,batchingColor:Ot&&G._colorsTexture!==null,instancing:ne,instancingColor:ne&&G.instanceColor!==null,instancingMorph:ne&&G.morphTexture!==null,outputColorSpace:gt===null?n.outputColorSpace:gt.isXRRenderTarget===!0?gt.texture.colorSpace:Ee.workingColorSpace,alphaToCoverage:!!w.alphaToCoverage,map:ce,matcap:be,envMap:he,envMapMode:he&&K.mapping,envMapCubeUVHeight:j,aoMap:ge,lightMap:Se,bumpMap:ue,normalMap:Ae,displacementMap:Ue,emissiveMap:Ye,normalMapObjectSpace:Ae&&w.normalMapType===Hd,normalMapTangentSpace:Ae&&w.normalMapType===uc,packedNormalMap:Ae&&w.normalMapType===uc&&Yv(w.normalMap.format),metalnessMap:Be,roughnessMap:ke,anisotropy:et,anisotropyMap:mt,clearcoat:Qe,clearcoatMap:Tt,clearcoatNormalMap:Pt,clearcoatRoughnessMap:xt,dispersion:Ce,retroreflection:z,iridescence:R,iridescenceMap:Mt,iridescenceThicknessMap:W,sheen:rt,sheenColorMap:Xt,sheenRoughnessMap:Lt,specularMap:At,specularColorMap:qt,specularIntensityMap:Kt,transmission:ft,transmissionMap:ae,thicknessMap:Q,gradientMap:Rt,opaque:w.transparent===!1&&w.blending===vr&&w.alphaToCoverage===!1,alphaMap:yt,alphaTest:Ct,alphaHash:Ut,combine:w.combine,mapUv:ce&&v(w.map.channel),aoMapUv:ge&&v(w.aoMap.channel),lightMapUv:Se&&v(w.lightMap.channel),bumpMapUv:ue&&v(w.bumpMap.channel),normalMapUv:Ae&&v(w.normalMap.channel),displacementMapUv:Ue&&v(w.displacementMap.channel),emissiveMapUv:Ye&&v(w.emissiveMap.channel),metalnessMapUv:Be&&v(w.metalnessMap.channel),roughnessMapUv:ke&&v(w.roughnessMap.channel),anisotropyMapUv:mt&&v(w.anisotropyMap.channel),clearcoatMapUv:Tt&&v(w.clearcoatMap.channel),clearcoatNormalMapUv:Pt&&v(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:xt&&v(w.clearcoatRoughnessMap.channel),iridescenceMapUv:Mt&&v(w.iridescenceMap.channel),iridescenceThicknessMapUv:W&&v(w.iridescenceThicknessMap.channel),sheenColorMapUv:Xt&&v(w.sheenColorMap.channel),sheenRoughnessMapUv:Lt&&v(w.sheenRoughnessMap.channel),specularMapUv:At&&v(w.specularMap.channel),specularColorMapUv:qt&&v(w.specularColorMap.channel),specularIntensityMapUv:Kt&&v(w.specularIntensityMap.channel),transmissionMapUv:ae&&v(w.transmissionMap.channel),thicknessMapUv:Q&&v(w.thicknessMap.channel),alphaMapUv:yt&&v(w.alphaMap.channel),vertexTangents:!!q.attributes.tangent&&(Ae||et),vertexNormals:!!q.attributes.normal,vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,pointsUvs:G.isPoints===!0&&!!q.attributes.uv&&(ce||yt),fog:!!k,useFog:w.fog===!0,fogExp2:!!k&&k.isFogExp2,flatShading:w.wireframe===!1&&(w.flatShading===!0||q.attributes.normal===void 0&&Ae===!1&&(w.isMeshLambertMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isMeshPhysicalMaterial)),sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:g,reversedDepthBuffer:Dt,skinning:G.isSkinnedMesh===!0,hasPositionAttribute:q.attributes.position!==void 0,morphTargets:q.morphAttributes.position!==void 0,morphNormals:q.morphAttributes.normal!==void 0,morphColors:q.morphAttributes.color!==void 0,morphTargetsCount:bt,morphTextureStride:St,numSunLights:N.sun.length,numDirLights:N.directional.length,numPointLights:N.point.length,numSpotLights:N.spot.length,numSpotLightMaps:N.spotLightMap.length,numRectAreaLights:N.rectArea.length,numHemiLights:N.hemi.length,numSunLightShadows:N.sunShadowMap.length,numDirLightShadows:N.directionalShadowMap.length,numPointLightShadows:N.pointShadowMap.length,numSpotLightShadows:N.spotShadowMap.length,numSpotLightShadowsWithMaps:N.numSpotLightShadowsWithMaps,numLightProbes:N.numLightProbes,numLightProbeGrids:V.length,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:w.dithering,shadowMapEnabled:n.shadowMap.enabled&&F.length>0,shadowMapType:n.shadowMap.type,toneMapping:Ht,decodeVideoTexture:ce&&w.map.isVideoTexture===!0&&Ee.getTransfer(w.map.colorSpace)===Ne,decodeVideoTextureEmissive:Ye&&w.emissiveMap.isVideoTexture===!0&&Ee.getTransfer(w.emissiveMap.colorSpace)===Ne,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===bn,flipSided:w.side===An,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:wt&&w.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(wt&&w.extensions.multiDraw===!0||Ot)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return Gt.vertexUv1s=h.has(1),Gt.vertexUv2s=h.has(2),Gt.vertexUv3s=h.has(3),h.clear(),Gt}function y(w){let N=[];if(w.shaderID?N.push(w.shaderID):(N.push(w.customVertexShaderID),N.push(w.customFragmentShaderID)),w.defines!==void 0)for(let F in w.defines)N.push(F),N.push(w.defines[F]);return w.isRawShaderMaterial===!1&&(_(N,w),A(N,w),N.push(n.outputColorSpace)),N.push(w.customProgramCacheKey),N.join()}function _(w,N){w.push(N.precision),w.push(N.outputColorSpace),w.push(N.envMapMode),w.push(N.envMapCubeUVHeight),w.push(N.mapUv),w.push(N.alphaMapUv),w.push(N.lightMapUv),w.push(N.aoMapUv),w.push(N.bumpMapUv),w.push(N.normalMapUv),w.push(N.displacementMapUv),w.push(N.emissiveMapUv),w.push(N.metalnessMapUv),w.push(N.roughnessMapUv),w.push(N.anisotropyMapUv),w.push(N.clearcoatMapUv),w.push(N.clearcoatNormalMapUv),w.push(N.clearcoatRoughnessMapUv),w.push(N.iridescenceMapUv),w.push(N.iridescenceThicknessMapUv),w.push(N.sheenColorMapUv),w.push(N.sheenRoughnessMapUv),w.push(N.specularMapUv),w.push(N.specularColorMapUv),w.push(N.specularIntensityMapUv),w.push(N.transmissionMapUv),w.push(N.thicknessMapUv),w.push(N.combine),w.push(N.fogExp2),w.push(N.sizeAttenuation),w.push(N.morphTargetsCount),w.push(N.morphAttributeCount),w.push(N.numSunLights),w.push(N.numDirLights),w.push(N.numPointLights),w.push(N.numSpotLights),w.push(N.numSpotLightMaps),w.push(N.numHemiLights),w.push(N.numRectAreaLights),w.push(N.numSunLightShadows),w.push(N.numDirLightShadows),w.push(N.numPointLightShadows),w.push(N.numSpotLightShadows),w.push(N.numSpotLightShadowsWithMaps),w.push(N.numLightProbes),w.push(N.shadowMapType),w.push(N.toneMapping),w.push(N.numClippingPlanes),w.push(N.numClipIntersection),w.push(N.depthPacking)}function A(w,N){l.disableAll(),N.instancing&&l.enable(0),N.instancingColor&&l.enable(1),N.instancingMorph&&l.enable(2),N.matcap&&l.enable(3),N.envMap&&l.enable(4),N.normalMapObjectSpace&&l.enable(5),N.normalMapTangentSpace&&l.enable(6),N.clearcoat&&l.enable(7),N.iridescence&&l.enable(8),N.alphaTest&&l.enable(9),N.vertexColors&&l.enable(10),N.vertexAlphas&&l.enable(11),N.vertexUv1s&&l.enable(12),N.vertexUv2s&&l.enable(13),N.vertexUv3s&&l.enable(14),N.vertexTangents&&l.enable(15),N.anisotropy&&l.enable(16),N.alphaHash&&l.enable(17),N.batching&&l.enable(18),N.dispersion&&l.enable(19),N.retroreflection&&l.enable(24),N.batchingColor&&l.enable(20),N.gradientMap&&l.enable(21),N.packedNormalMap&&l.enable(22),N.vertexNormals&&l.enable(23),w.push(l.mask),l.disableAll(),N.fog&&l.enable(0),N.useFog&&l.enable(1),N.flatShading&&l.enable(2),N.logarithmicDepthBuffer&&l.enable(3),N.reversedDepthBuffer&&l.enable(4),N.skinning&&l.enable(5),N.morphTargets&&l.enable(6),N.morphNormals&&l.enable(7),N.morphColors&&l.enable(8),N.premultipliedAlpha&&l.enable(9),N.shadowMapEnabled&&l.enable(10),N.doubleSided&&l.enable(11),N.flipSided&&l.enable(12),N.useDepthPacking&&l.enable(13),N.dithering&&l.enable(14),N.transmission&&l.enable(15),N.sheen&&l.enable(16),N.opaque&&l.enable(17),N.pointsUvs&&l.enable(18),N.decodeVideoTexture&&l.enable(19),N.decodeVideoTextureEmissive&&l.enable(20),N.alphaToCoverage&&l.enable(21),N.numLightProbeGrids>0&&l.enable(22),N.hasPositionAttribute&&l.enable(23),w.push(l.mask)}function T(w){let N=x[w.type],F;if(N){let U=_i[N];F=op.clone(U.uniforms)}else F=w.uniforms;return F}function S(w,N){let F=d.get(N);return F!==void 0?++F.usedTimes:(F=new Xv(n,N,w,s),f.push(F),d.set(N,F)),F}function I(w){if(--w.usedTimes===0){let N=f.indexOf(w);f[N]=f[f.length-1],f.pop(),d.delete(w.cacheKey),w.destroy()}}function E(w){o.remove(w)}function C(){o.dispose()}return{getParameters:b,getProgramCacheKey:y,getUniforms:T,acquireProgram:S,releaseProgram:I,releaseShaderCache:E,programs:f,dispose:C}}function qv(){let n=new WeakMap;function t(l){return n.has(l)}function e(l){let o=n.get(l);return o===void 0&&(o={},n.set(l,o)),o}function i(l){n.delete(l)}function s(l,o,h){n.get(l)[o]=h}function a(){n=new WeakMap}return{has:t,get:e,remove:i,update:s,dispose:a}}function Zv(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.materialVariant!==t.materialVariant?n.materialVariant-t.materialVariant:n.z!==t.z?n.z-t.z:n.id-t.id}function Tp(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function Ap(){let n=[],t=0,e=[],i=[],s=[];function a(){t=0,e.length=0,i.length=0,s.length=0}function l(p){let x=0;return p.isInstancedMesh&&(x+=2),p.isSkinnedMesh&&(x+=1),x}function o(p,x,v,b,y,_){let A=n[t];return A===void 0?(A={id:p.id,object:p,geometry:x,material:v,materialVariant:l(p),groupOrder:b,renderOrder:p.renderOrder,z:y,group:_},n[t]=A):(A.id=p.id,A.object=p,A.geometry=x,A.material=v,A.materialVariant=l(p),A.groupOrder=b,A.renderOrder=p.renderOrder,A.z=y,A.group=_),t++,A}function h(p,x,v,b,y,_,A){A.reversedDepth===!0&&(y=-y);let T=o(p,x,v,b,y,_);v.transmission>0?i.push(T):v.transparent===!0?s.push(T):e.push(T)}function f(p,x,v,b,y,_){let A=o(p,x,v,b,y,_);v.transmission>0?i.unshift(A):v.transparent===!0?s.unshift(A):e.unshift(A)}function d(p,x){e.length>1&&e.sort(p||Zv),i.length>1&&i.sort(x||Tp),s.length>1&&s.sort(x||Tp)}function g(){for(let p=t,x=n.length;p<x;p++){let v=n[p];if(v.id===null)break;v.id=null,v.object=null,v.geometry=null,v.material=null,v.group=null}}return{opaque:e,transmissive:i,transparent:s,init:a,push:h,unshift:f,finish:g,sort:d}}function Jv(){let n=new WeakMap;function t(i,s){let a=n.get(i),l;return a===void 0?(l=new Ap,n.set(i,[l])):s>=a.length?(l=new Ap,a.push(l)):l=a[s],l}function e(){n=new WeakMap}return{get:t,dispose:e}}function jv(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new tt,color:new le};break;case"SpotLight":e={position:new tt,direction:new tt,color:new le,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new tt,color:new le,distance:0,decay:0};break;case"HemisphereLight":e={direction:new tt,skyColor:new le,groundColor:new le};break;case"RectAreaLight":e={color:new le,position:new tt,halfWidth:new tt,halfHeight:new tt};break}return n[t.id]=e,e}}}function Kv(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new jt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new jt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new jt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}function tb(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function eb(n){let t=new jv,e=Kv(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let f=0;f<9;f++)i.probe.push(new tt);let s=new tt,a=new Oe,l=new Oe;function o(f){let d=0,g=0,p=0;for(let G=0;G<9;G++)i.probe[G].set(0,0,0);let x=0,v=0,b=0,y=0,_=0,A=0,T=0,S=0,I=0,E=0,C=0,w=0,N=0,F=0;f.sort(tb);for(let G=0,V=f.length;G<V;G++){let k=f[G],q=k.color,Z=k.intensity,B=k.distance,K=null;if(k.shadow&&k.shadow.map&&(k.shadow.map.texture.format===es?K=k.shadow.map.texture:K=k.shadow.map.depthTexture||k.shadow.map.texture),k.isAmbientLight)d+=q.r*Z,g+=q.g*Z,p+=q.b*Z;else if(k.isLightProbe){for(let j=0;j<9;j++)i.probe[j].addScaledVector(k.sh.coefficients[j],Z);F++}else if(k.isSunLight){let j=t.get(k);if(j.color.copy(k.color).multiplyScalar(k.intensity),k.castShadow){let st=k.shadow,X=e.get(k);X.shadowIntensity=st.intensity,X.shadowBias=st.bias,X.shadowNormalBias=st.normalBias,X.shadowRadius=st.radius,X.shadowMapSize.copy(st.mapSize).multiply(st.getFrameExtents()),i.sunShadow[v]=X,i.sunShadowMap[v]=K;let bt=st.getViewportCount();for(let St=0;St<bt;St++)i.sunShadowMatrix[b+St]=st.getMatrix(St),i.sunShadowCascade[b+St]=st._cascadeData[St];b+=bt,v++}i.sun[x]=j,x++}else if(k.isDirectionalLight){let j=t.get(k);if(j.color.copy(k.color).multiplyScalar(k.intensity),k.castShadow){let st=k.shadow,X=e.get(k);X.shadowIntensity=st.intensity,X.shadowBias=st.bias,X.shadowNormalBias=st.normalBias,X.shadowRadius=st.radius,X.shadowMapSize=st.mapSize,i.directionalShadow[y]=X,i.directionalShadowMap[y]=K,i.directionalShadowMatrix[y]=k.shadow.matrix,I++}i.directional[y]=j,y++}else if(k.isSpotLight){let j=t.get(k);j.position.setFromMatrixPosition(k.matrixWorld),j.color.copy(q).multiplyScalar(Z),j.distance=B,j.coneCos=Math.cos(k.angle),j.penumbraCos=Math.cos(k.angle*(1-k.penumbra)),j.decay=k.decay,i.spot[A]=j;let st=k.shadow;if(k.map&&(i.spotLightMap[w]=k.map,w++,st.updateMatrices(k),k.castShadow&&N++),i.spotLightMatrix[A]=st.matrix,k.castShadow){let X=e.get(k);X.shadowIntensity=st.intensity,X.shadowBias=st.bias,X.shadowNormalBias=st.normalBias,X.shadowRadius=st.radius,X.shadowMapSize=st.mapSize,i.spotShadow[A]=X,i.spotShadowMap[A]=K,C++}A++}else if(k.isRectAreaLight){let j=t.get(k);j.color.copy(q).multiplyScalar(Z),j.halfWidth.set(k.width*.5,0,0),j.halfHeight.set(0,k.height*.5,0),i.rectArea[T]=j,T++}else if(k.isPointLight){let j=t.get(k);if(j.color.copy(k.color).multiplyScalar(k.intensity),j.distance=k.distance,j.decay=k.decay,k.castShadow){let st=k.shadow,X=e.get(k);X.shadowIntensity=st.intensity,X.shadowBias=st.bias,X.shadowNormalBias=st.normalBias,X.shadowRadius=st.radius,X.shadowMapSize=st.mapSize,X.shadowCameraNear=st.camera.near,X.shadowCameraFar=st.camera.far,i.pointShadow[_]=X,i.pointShadowMap[_]=K,i.pointShadowMatrix[_]=k.shadow.matrix,E++}i.point[_]=j,_++}else if(k.isHemisphereLight){let j=t.get(k);j.skyColor.copy(k.color).multiplyScalar(Z),j.groundColor.copy(k.groundColor).multiplyScalar(Z),i.hemi[S]=j,S++}}T>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=kt.LTC_FLOAT_1,i.rectAreaLTC2=kt.LTC_FLOAT_2):(i.rectAreaLTC1=kt.LTC_HALF_1,i.rectAreaLTC2=kt.LTC_HALF_2)),i.ambient[0]=d,i.ambient[1]=g,i.ambient[2]=p;let U=i.hash;(U.sunLength!==x||U.directionalLength!==y||U.pointLength!==_||U.spotLength!==A||U.rectAreaLength!==T||U.hemiLength!==S||U.numSunShadows!==v||U.numDirectionalShadows!==I||U.numPointShadows!==E||U.numSpotShadows!==C||U.numSpotMaps!==w||U.numLightProbes!==F)&&(i.sun.length=x,i.directional.length=y,i.spot.length=A,i.rectArea.length=T,i.point.length=_,i.hemi.length=S,i.sunShadow.length=v,i.sunShadowMap.length=v,i.sunShadowMatrix.length=b,i.sunShadowCascade.length=b,i.directionalShadow.length=I,i.directionalShadowMap.length=I,i.directionalShadowMatrix.length=I,i.pointShadow.length=E,i.pointShadowMap.length=E,i.pointShadowMatrix.length=E,i.spotShadow.length=C,i.spotShadowMap.length=C,i.spotLightMatrix.length=C+w-N,i.spotLightMap.length=w,i.numSpotLightShadowsWithMaps=N,i.numLightProbes=F,U.sunLength=x,U.directionalLength=y,U.pointLength=_,U.spotLength=A,U.rectAreaLength=T,U.hemiLength=S,U.numSunShadows=v,U.numDirectionalShadows=I,U.numPointShadows=E,U.numSpotShadows=C,U.numSpotMaps=w,U.numLightProbes=F,i.version=Qv++)}function h(f,d){let g=0,p=0,x=0,v=0,b=0,y=0,_=d.matrixWorldInverse;for(let A=0,T=f.length;A<T;A++){let S=f[A];if(S.isSunLight){let I=i.sun[g];I.direction.setFromMatrixPosition(S.matrixWorld),I.direction.transformDirection(_),g++}else if(S.isDirectionalLight){let I=i.directional[p];I.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),I.direction.sub(s),I.direction.transformDirection(_),p++}else if(S.isSpotLight){let I=i.spot[v];I.position.setFromMatrixPosition(S.matrixWorld),I.position.applyMatrix4(_),I.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),I.direction.sub(s),I.direction.transformDirection(_),v++}else if(S.isRectAreaLight){let I=i.rectArea[b];I.position.setFromMatrixPosition(S.matrixWorld),I.position.applyMatrix4(_),l.identity(),a.copy(S.matrixWorld),a.premultiply(_),l.extractRotation(a),I.halfWidth.set(S.width*.5,0,0),I.halfHeight.set(0,S.height*.5,0),I.halfWidth.applyMatrix4(l),I.halfHeight.applyMatrix4(l),b++}else if(S.isPointLight){let I=i.point[x];I.position.setFromMatrixPosition(S.matrixWorld),I.position.applyMatrix4(_),x++}else if(S.isHemisphereLight){let I=i.hemi[y];I.direction.setFromMatrixPosition(S.matrixWorld),I.direction.transformDirection(_),y++}}}return{setup:o,setupView:h,state:i}}function Cp(n){let t=new eb(n),e=[],i=[],s=[];function a(p){g.camera=p,e.length=0,i.length=0,s.length=0}function l(p){e.push(p)}function o(p){i.push(p)}function h(p){s.push(p)}function f(){t.setup(e)}function d(p){t.setupView(e,p)}let g={lightsArray:e,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:a,state:g,setupLights:f,setupLightsView:d,pushLight:l,pushShadow:o,pushLightProbeGrid:h}}function nb(n){let t=new WeakMap;function e(s,a=0){let l=t.get(s),o;return l===void 0?(o=new Cp(n),t.set(s,[o])):a>=l.length?(o=new Cp(n),l.push(o)):o=l[a],o}function i(){t=new WeakMap}return{get:e,dispose:i}}function ab(n,t,e){let i=new fr,s=new jt,a=new jt,l=new $e,o=new ul,h=new fl,f={},d=e.maxTextureSize,g={[ji]:An,[An]:ji,[bn]:bn},p=new Un({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new jt},radius:{value:4}},vertexShader:ib,fragmentShader:sb}),x=p.clone();x.defines.HORIZONTAL_PASS=1;let v=new We;v.setAttribute("position",new He(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let b=new Re(v,p),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Go;let _=this.type;this.render=function(E,C,w){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||E.length===0)return;this.type===_d&&(ie("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Go);let N=n.getRenderTarget(),F=n.getActiveCubeFace(),U=n.getActiveMipmapLevel(),G=n.state;G.setBlending(xi),G.buffers.depth.getReversed()===!0?G.buffers.color.setClear(0,0,0,0):G.buffers.color.setClear(1,1,1,1),G.buffers.depth.setTest(!0),G.setScissorTest(!1);let V=_!==this.type;V&&C.traverse(function(k){k.material&&(Array.isArray(k.material)?k.material.forEach(q=>q.needsUpdate=!0):k.material.needsUpdate=!0)});for(let k=0,q=E.length;k<q;k++){let Z=E[k],B=Z.shadow;if(B===void 0){ie("WebGLShadowMap:",Z,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;s.copy(B.mapSize);let K=B.getFrameExtents();s.multiply(K),a.copy(B.mapSize),(s.x>d||s.y>d)&&(s.x>d&&(a.x=Math.floor(d/K.x),s.x=a.x*K.x,B.mapSize.x=a.x),s.y>d&&(a.y=Math.floor(d/K.y),s.y=a.y*K.y,B.mapSize.y=a.y));let j=n.state.buffers.depth.getReversed();if(B.camera._reversedDepth=j,B.map===null||V===!0){if(B.map!==null&&(B.map.depthTexture!==null&&(B.map.depthTexture.dispose(),B.map.depthTexture=null),B.map.dispose()),this.type===_r){if(Z.isPointLight){ie("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}B.map=new Pn(s.x,s.y,{format:es,type:oi,minFilter:mn,magFilter:mn,generateMipmaps:!1}),B.map.texture.name=Z.name+".shadowMap",B.map.depthTexture=new Gi(s.x,s.y,ri),B.map.depthTexture.name=Z.name+".shadowMapDepth",B.map.depthTexture.format=pi,B.map.depthTexture.compareFunction=null,B.map.depthTexture.minFilter=un,B.map.depthTexture.magFilter=un}else Z.isPointLight?(B.map=new xc(s.x),B.map.depthTexture=new cl(s.x,si)):(B.map=new Pn(s.x,s.y),B.map.depthTexture=new Gi(s.x,s.y,si)),B.map.depthTexture.name=Z.name+".shadowMap",B.map.depthTexture.format=pi,this.type===Go?(B.map.depthTexture.compareFunction=j?dc:fc,B.map.depthTexture.minFilter=mn,B.map.depthTexture.magFilter=mn):(B.map.depthTexture.compareFunction=null,B.map.depthTexture.minFilter=un,B.map.depthTexture.magFilter=un);B.camera.updateProjectionMatrix()}B.map.isWebGLCubeRenderTarget!==!0&&(B.map.width!==s.x||B.map.height!==s.y)&&B.map.setSize(s.x,s.y);let st=B.map.isWebGLCubeRenderTarget?6:B.getViewportCount();Z.isPointLight!==!0&&B.updateMatrices(Z,w);for(let X=0;X<st;X++){let bt=B.getCamera(X);if(Z.isPointLight){let St=B.camera,Vt=B.matrix,$t=Z.distance||St.far;$t!==St.far&&(St.far=$t,St.updateProjectionMatrix()),Qo.setFromMatrixPosition(Z.matrixWorld),St.position.copy(Qo),du.copy(St.position),du.add(rb[X]),St.up.copy(ob[X]),St.lookAt(du),St.updateMatrixWorld(),Vt.makeTranslation(-Qo.x,-Qo.y,-Qo.z),Pp.multiplyMatrices(St.projectionMatrix,St.matrixWorldInverse),B._frustum.setFromProjectionMatrix(Pp,St.coordinateSystem,St.reversedDepth)}if(B.map.isWebGLCubeRenderTarget)n.setRenderTarget(B.map,X),n.clear();else{X===0&&(n.setRenderTarget(B.map),n.clear());let St=B.getViewport(X);l.set(a.x*St.x,a.y*St.y,a.x*St.z,a.y*St.w),G.viewport(l)}i=B.getFrustum(X),S(C,w,bt,Z,this.type)}B.isPointLightShadow!==!0&&this.type===_r&&A(B,w),B.needsUpdate=!1}_=this.type,y.needsUpdate=!1,n.setRenderTarget(N,F,U)};function A(E,C){let w=t.update(b);p.defines.VSM_SAMPLES!==E.blurSamples&&(p.defines.VSM_SAMPLES=E.blurSamples,x.defines.VSM_SAMPLES=E.blurSamples,p.needsUpdate=!0,x.needsUpdate=!0),E.mapPass===null?E.mapPass=new Pn(s.x,s.y,{format:es,type:oi}):(E.mapPass.width!==E.map.width||E.mapPass.height!==E.map.height)&&E.mapPass.setSize(E.map.width,E.map.height),p.uniforms.shadow_pass.value=E.map.depthTexture,p.uniforms.resolution.value.set(E.map.width,E.map.height),p.uniforms.radius.value=E.radius,n.setRenderTarget(E.mapPass),n.clear(),n.renderBufferDirect(C,null,w,p,b,null),x.uniforms.shadow_pass.value=E.mapPass.texture,x.uniforms.resolution.value.set(E.map.width,E.map.height),x.uniforms.radius.value=E.radius,n.setRenderTarget(E.map),n.clear(),n.renderBufferDirect(C,null,w,x,b,null)}function T(E,C,w,N){let F=null,U=w.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(U!==void 0)F=U;else if(F=w.isPointLight===!0?h:o,n.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){let G=F.uuid,V=C.uuid,k=f[G];k===void 0&&(k={},f[G]=k);let q=k[V];q===void 0&&(q=F.clone(),k[V]=q,C.addEventListener("dispose",I)),F=q}if(F.visible=C.visible,F.wireframe=C.wireframe,N===_r?F.side=C.shadowSide!==null?C.shadowSide:C.side:F.side=C.shadowSide!==null?C.shadowSide:g[C.side],F.alphaMap=C.alphaMap,F.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,F.map=C.map,F.clipShadows=C.clipShadows,F.clippingPlanes=C.clippingPlanes,F.clipIntersection=C.clipIntersection,F.displacementMap=C.displacementMap,F.displacementScale=C.displacementScale,F.displacementBias=C.displacementBias,F.wireframeLinewidth=C.wireframeLinewidth,F.linewidth=C.linewidth,w.isPointLight===!0&&F.isMeshDistanceMaterial===!0){let G=n.properties.get(F);G.light=w}return F}function S(E,C,w,N,F){if(E.visible===!1)return;if(E.layers.test(C.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&F===_r)&&(!E.frustumCulled||E.intersectsFrustum(i))){E.modelViewMatrix.multiplyMatrices(w.matrixWorldInverse,E.matrixWorld);let V=t.update(E),k=E.material;if(Array.isArray(k)){let q=V.groups;for(let Z=0,B=q.length;Z<B;Z++){let K=q[Z],j=k[K.materialIndex];if(j&&j.visible){let st=T(E,j,N,F);E.onBeforeShadow(n,E,C,w,V,st,K),n.renderBufferDirect(w,null,V,st,E,K),E.onAfterShadow(n,E,C,w,V,st,K)}}}else if(k.visible){let q=T(E,k,N,F);E.onBeforeShadow(n,E,C,w,V,q,null),n.renderBufferDirect(w,null,V,q,E,null),E.onAfterShadow(n,E,C,w,V,q,null)}}let G=E.children;for(let V=0,k=G.length;V<k;V++)S(G[V],C,w,N,F)}function I(E){E.target.removeEventListener("dispose",I);for(let w in f){let N=f[w],F=E.target.uuid;F in N&&(N[F].dispose(),delete N[F])}}}function lb(n,t){function e(){let Q=!1,Rt=new $e,yt=null,Ct=new $e(0,0,0,0);return{setMask:function(Ut){yt!==Ut&&!Q&&(n.colorMask(Ut,Ut,Ut,Ut),yt=Ut)},setLocked:function(Ut){Q=Ut},setClear:function(Ut,wt,Ht,Gt,Le){Le===!0&&(Ut*=Gt,wt*=Gt,Ht*=Gt),Rt.set(Ut,wt,Ht,Gt),Ct.equals(Rt)===!1&&(n.clearColor(Ut,wt,Ht,Gt),Ct.copy(Rt))},reset:function(){Q=!1,yt=null,Ct.set(-1,0,0,0)}}}function i(){let Q=!1,Rt=!1,yt=null,Ct=null,Ut=null;return{setReversed:function(wt){if(Rt!==wt){let Ht=t.get("EXT_clip_control");wt?Ht.clipControlEXT(Ht.LOWER_LEFT_EXT,Ht.ZERO_TO_ONE_EXT):Ht.clipControlEXT(Ht.LOWER_LEFT_EXT,Ht.NEGATIVE_ONE_TO_ONE_EXT),Rt=wt;let Gt=Ut;Ut=null,this.setClear(Gt)}},getReversed:function(){return Rt},setTest:function(wt){wt?gt(n.DEPTH_TEST):Dt(n.DEPTH_TEST)},setMask:function(wt){yt!==wt&&!Q&&(n.depthMask(wt),yt=wt)},setFunc:function(wt){if(Rt&&(wt=Qd[wt]),Ct!==wt){switch(wt){case Ya:n.depthFunc(n.NEVER);break;case $a:n.depthFunc(n.ALWAYS);break;case qa:n.depthFunc(n.LESS);break;case sr:n.depthFunc(n.LEQUAL);break;case Za:n.depthFunc(n.EQUAL);break;case Ja:n.depthFunc(n.GEQUAL);break;case ja:n.depthFunc(n.GREATER);break;case Ka:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Ct=wt}},setLocked:function(wt){Q=wt},setClear:function(wt){Ut!==wt&&(Ut=wt,Rt&&(wt=1-wt),n.clearDepth(wt))},reset:function(){Q=!1,yt=null,Ct=null,Ut=null,Rt=!1}}}function s(){let Q=!1,Rt=null,yt=null,Ct=null,Ut=null,wt=null,Ht=null,Gt=null,Le=null;return{setTest:function(Te){Q||(Te?gt(n.STENCIL_TEST):Dt(n.STENCIL_TEST))},setMask:function(Te){Rt!==Te&&!Q&&(n.stencilMask(Te),Rt=Te)},setFunc:function(Te,Sn,gn){(yt!==Te||Ct!==Sn||Ut!==gn)&&(n.stencilFunc(Te,Sn,gn),yt=Te,Ct=Sn,Ut=gn)},setOp:function(Te,Sn,gn){(wt!==Te||Ht!==Sn||Gt!==gn)&&(n.stencilOp(Te,Sn,gn),wt=Te,Ht=Sn,Gt=gn)},setLocked:function(Te){Q=Te},setClear:function(Te){Le!==Te&&(n.clearStencil(Te),Le=Te)},reset:function(){Q=!1,Rt=null,yt=null,Ct=null,Ut=null,wt=null,Ht=null,Gt=null,Le=null}}}let a=new e,l=new i,o=new s,h=new WeakMap,f=new WeakMap,d={},g={},p={},x=new WeakMap,v=[],b=null,y=!1,_=null,A=null,T=null,S=null,I=null,E=null,C=null,w=new le(0,0,0),N=0,F=!1,U=null,G=null,V=null,k=null,q=null,Z=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),B=!1,K=0,j=n.getParameter(n.VERSION);j.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(j)[1]),B=K>=1):j.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(j)[1]),B=K>=2);let st=null,X={},bt=n.getParameter(n.SCISSOR_BOX),St=n.getParameter(n.VIEWPORT),Vt=new $e().fromArray(bt),$t=new $e().fromArray(St);function te(Q,Rt,yt,Ct){let Ut=new Uint8Array(4),wt=n.createTexture();n.bindTexture(Q,wt),n.texParameteri(Q,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(Q,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Ht=0;Ht<yt;Ht++)Q===n.TEXTURE_3D||Q===n.TEXTURE_2D_ARRAY?n.texImage3D(Rt,0,n.RGBA,1,1,Ct,0,n.RGBA,n.UNSIGNED_BYTE,Ut):n.texImage2D(Rt+Ht,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Ut);return wt}let ut={};ut[n.TEXTURE_2D]=te(n.TEXTURE_2D,n.TEXTURE_2D,1),ut[n.TEXTURE_CUBE_MAP]=te(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),ut[n.TEXTURE_2D_ARRAY]=te(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),ut[n.TEXTURE_3D]=te(n.TEXTURE_3D,n.TEXTURE_3D,1,1),a.setClear(0,0,0,1),l.setClear(1),o.setClear(0),gt(n.DEPTH_TEST),l.setFunc(sr),ue(!1),Ae(Rh),gt(n.CULL_FACE),ge(xi);function gt(Q){d[Q]!==!0&&(n.enable(Q),d[Q]=!0)}function Dt(Q){d[Q]!==!1&&(n.disable(Q),d[Q]=!1)}function ne(Q,Rt){return p[Q]!==Rt?(n.bindFramebuffer(Q,Rt),p[Q]=Rt,Q===n.DRAW_FRAMEBUFFER&&(p[n.FRAMEBUFFER]=Rt),Q===n.FRAMEBUFFER&&(p[n.DRAW_FRAMEBUFFER]=Rt),!0):!1}function Ot(Q,Rt){let yt=v,Ct=!1;if(Q){yt=x.get(Rt),yt===void 0&&(yt=[],x.set(Rt,yt));let Ut=Q.textures;if(yt.length!==Ut.length||yt[0]!==n.COLOR_ATTACHMENT0){for(let wt=0,Ht=Ut.length;wt<Ht;wt++)yt[wt]=n.COLOR_ATTACHMENT0+wt;yt.length=Ut.length,Ct=!0}}else yt[0]!==n.BACK&&(yt[0]=n.BACK,Ct=!0);Ct&&n.drawBuffers(yt)}function ce(Q){return b!==Q?(n.useProgram(Q),b=Q,!0):!1}let be={[ws]:n.FUNC_ADD,[bd]:n.FUNC_SUBTRACT,[Md]:n.FUNC_REVERSE_SUBTRACT};be[Sd]=n.MIN,be[wd]=n.MAX;let he={[Ed]:n.ZERO,[Td]:n.ONE,[Ad]:n.SRC_COLOR,[Oh]:n.SRC_ALPHA,[Nd]:n.SRC_ALPHA_SATURATE,[Rd]:n.DST_COLOR,[Pd]:n.DST_ALPHA,[Cd]:n.ONE_MINUS_SRC_COLOR,[Fh]:n.ONE_MINUS_SRC_ALPHA,[Ld]:n.ONE_MINUS_DST_COLOR,[Id]:n.ONE_MINUS_DST_ALPHA,[Dd]:n.CONSTANT_COLOR,[Od]:n.ONE_MINUS_CONSTANT_COLOR,[Fd]:n.CONSTANT_ALPHA,[Ud]:n.ONE_MINUS_CONSTANT_ALPHA};function ge(Q,Rt,yt,Ct,Ut,wt,Ht,Gt,Le,Te){if(Q===xi){y===!0&&(Dt(n.BLEND),y=!1);return}if(y===!1&&(gt(n.BLEND),y=!0),Q!==vd){if(Q!==_||Te!==F){if((A!==ws||I!==ws)&&(n.blendEquation(n.FUNC_ADD),A=ws,I=ws),Te)switch(Q){case vr:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Lh:n.blendFunc(n.ONE,n.ONE);break;case Nh:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Dh:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:se("WebGLState: Invalid blending: ",Q);break}else switch(Q){case vr:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Lh:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Nh:se("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Dh:se("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:se("WebGLState: Invalid blending: ",Q);break}T=null,S=null,E=null,C=null,w.set(0,0,0),N=0,_=Q,F=Te}return}Ut=Ut||Rt,wt=wt||yt,Ht=Ht||Ct,(Rt!==A||Ut!==I)&&(n.blendEquationSeparate(be[Rt],be[Ut]),A=Rt,I=Ut),(yt!==T||Ct!==S||wt!==E||Ht!==C)&&(n.blendFuncSeparate(he[yt],he[Ct],he[wt],he[Ht]),T=yt,S=Ct,E=wt,C=Ht),(Gt.equals(w)===!1||Le!==N)&&(n.blendColor(Gt.r,Gt.g,Gt.b,Le),w.copy(Gt),N=Le),_=Q,F=!1}function Se(Q,Rt){Q.side===bn?Dt(n.CULL_FACE):gt(n.CULL_FACE);let yt=Q.side===An;Rt&&(yt=!yt),ue(yt),Q.blending===vr&&Q.transparent===!1?ge(xi):ge(Q.blending,Q.blendEquation,Q.blendSrc,Q.blendDst,Q.blendEquationAlpha,Q.blendSrcAlpha,Q.blendDstAlpha,Q.blendColor,Q.blendAlpha,Q.premultipliedAlpha),l.setFunc(Q.depthFunc),l.setTest(Q.depthTest),l.setMask(Q.depthWrite),a.setMask(Q.colorWrite);let Ct=Q.stencilWrite;o.setTest(Ct),Ct&&(o.setMask(Q.stencilWriteMask),o.setFunc(Q.stencilFunc,Q.stencilRef,Q.stencilFuncMask),o.setOp(Q.stencilFail,Q.stencilZFail,Q.stencilZPass)),Ye(Q.polygonOffset,Q.polygonOffsetFactor,Q.polygonOffsetUnits),Q.alphaToCoverage===!0?gt(n.SAMPLE_ALPHA_TO_COVERAGE):Dt(n.SAMPLE_ALPHA_TO_COVERAGE)}function ue(Q){U!==Q&&(Q?n.frontFace(n.CW):n.frontFace(n.CCW),U=Q)}function Ae(Q){Q!==xd?(gt(n.CULL_FACE),Q!==G&&(Q===Rh?n.cullFace(n.BACK):Q===yd?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Dt(n.CULL_FACE),G=Q}function Ue(Q){Q!==V&&(B&&n.lineWidth(Q),V=Q)}function Ye(Q,Rt,yt){Q?(gt(n.POLYGON_OFFSET_FILL),(k!==Rt||q!==yt)&&(k=Rt,q=yt,l.getReversed()&&(Rt=-Rt),n.polygonOffset(Rt,yt))):Dt(n.POLYGON_OFFSET_FILL)}function Be(Q){Q?gt(n.SCISSOR_TEST):Dt(n.SCISSOR_TEST)}function ke(Q){Q===void 0&&(Q=n.TEXTURE0+Z-1),st!==Q&&(n.activeTexture(Q),st=Q)}function et(Q,Rt,yt){yt===void 0&&(st===null?yt=n.TEXTURE0+Z-1:yt=st);let Ct=X[yt];Ct===void 0&&(Ct={type:void 0,texture:void 0},X[yt]=Ct),(Ct.type!==Q||Ct.texture!==Rt)&&(st!==yt&&(n.activeTexture(yt),st=yt),n.bindTexture(Q,Rt||ut[Q]),Ct.type=Q,Ct.texture=Rt)}function Qe(){let Q=X[st];Q!==void 0&&Q.type!==void 0&&(n.bindTexture(Q.type,null),Q.type=void 0,Q.texture=void 0)}function Ce(){try{n.compressedTexImage2D(...arguments)}catch(Q){se("WebGLState:",Q)}}function z(){try{n.compressedTexImage3D(...arguments)}catch(Q){se("WebGLState:",Q)}}function R(){try{n.texSubImage2D(...arguments)}catch(Q){se("WebGLState:",Q)}}function rt(){try{n.texSubImage3D(...arguments)}catch(Q){se("WebGLState:",Q)}}function ft(){try{n.compressedTexSubImage2D(...arguments)}catch(Q){se("WebGLState:",Q)}}function mt(){try{n.compressedTexSubImage3D(...arguments)}catch(Q){se("WebGLState:",Q)}}function Tt(){try{n.texStorage2D(...arguments)}catch(Q){se("WebGLState:",Q)}}function Pt(){try{n.texStorage3D(...arguments)}catch(Q){se("WebGLState:",Q)}}function xt(){try{n.texImage2D(...arguments)}catch(Q){se("WebGLState:",Q)}}function Mt(){try{n.texImage3D(...arguments)}catch(Q){se("WebGLState:",Q)}}function W(Q){return g[Q]!==void 0?g[Q]:n.getParameter(Q)}function Xt(Q,Rt){g[Q]!==Rt&&(n.pixelStorei(Q,Rt),g[Q]=Rt)}function Lt(Q){Vt.equals(Q)===!1&&(n.scissor(Q.x,Q.y,Q.z,Q.w),Vt.copy(Q))}function At(Q){$t.equals(Q)===!1&&(n.viewport(Q.x,Q.y,Q.z,Q.w),$t.copy(Q))}function qt(Q,Rt){let yt=f.get(Rt);yt===void 0&&(yt=new WeakMap,f.set(Rt,yt));let Ct=yt.get(Q);Ct===void 0&&(Ct=n.getUniformBlockIndex(Rt,Q.name),yt.set(Q,Ct))}function Kt(Q,Rt){let Ct=f.get(Rt).get(Q);h.get(Rt)!==Ct&&(n.uniformBlockBinding(Rt,Ct,Q.__bindingPointIndex),h.set(Rt,Ct))}function ae(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),l.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),d={},g={},st=null,X={},p={},x=new WeakMap,v=[],b=null,y=!1,_=null,A=null,T=null,S=null,I=null,E=null,C=null,w=new le(0,0,0),N=0,F=!1,U=null,G=null,V=null,k=null,q=null,Vt.set(0,0,n.canvas.width,n.canvas.height),$t.set(0,0,n.canvas.width,n.canvas.height),a.reset(),l.reset(),o.reset()}return{buffers:{color:a,depth:l,stencil:o},enable:gt,disable:Dt,bindFramebuffer:ne,drawBuffers:Ot,useProgram:ce,setBlending:ge,setMaterial:Se,setFlipSided:ue,setCullFace:Ae,setLineWidth:Ue,setPolygonOffset:Ye,setScissorTest:Be,activeTexture:ke,bindTexture:et,unbindTexture:Qe,compressedTexImage2D:Ce,compressedTexImage3D:z,texImage2D:xt,texImage3D:Mt,pixelStorei:Xt,getParameter:W,updateUBOMapping:qt,uniformBlockBinding:Kt,texStorage2D:Tt,texStorage3D:Pt,texSubImage2D:R,texSubImage3D:rt,compressedTexSubImage2D:ft,compressedTexSubImage3D:mt,scissor:Lt,viewport:At,reset:ae}}function cb(n,t,e,i,s,a,l){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,h=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),f=new jt,d=new WeakMap,g=new Set,p,x=new WeakMap,v=!1;try{v=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(z,R){return v?new OffscreenCanvas(z,R):yo("canvas")}function y(z,R,rt){let ft=1,mt=Ce(z);if((mt.width>rt||mt.height>rt)&&(ft=rt/Math.max(mt.width,mt.height)),ft<1)if(typeof HTMLImageElement<"u"&&z instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&z instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&z instanceof ImageBitmap||typeof VideoFrame<"u"&&z instanceof VideoFrame){let Tt=Math.floor(ft*mt.width),Pt=Math.floor(ft*mt.height);p===void 0&&(p=b(Tt,Pt));let xt=R?b(Tt,Pt):p;return xt.width=Tt,xt.height=Pt,xt.getContext("2d").drawImage(z,0,0,Tt,Pt),ie("WebGLRenderer: Texture has been resized from ("+mt.width+"x"+mt.height+") to ("+Tt+"x"+Pt+")."),xt}else return"data"in z&&ie("WebGLRenderer: Image in DataTexture is too big ("+mt.width+"x"+mt.height+")."),z;return z}function _(z){return z.generateMipmaps}function A(z){n.generateMipmap(z)}function T(z){return z.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:z.isWebGL3DRenderTarget?n.TEXTURE_3D:z.isWebGLArrayRenderTarget||z.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function S(z,R,rt,ft,mt,Tt=!1){if(z!==null){if(n[z]!==void 0)return n[z];ie("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+z+"'")}let Pt;ft&&(Pt=t.get("EXT_texture_norm16"),Pt||ie("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let xt=R;if(R===n.RED&&(rt===n.FLOAT&&(xt=n.R32F),rt===n.HALF_FLOAT&&(xt=n.R16F),rt===n.UNSIGNED_BYTE&&(xt=n.R8),rt===n.UNSIGNED_SHORT&&Pt&&(xt=Pt.R16_EXT),rt===n.SHORT&&Pt&&(xt=Pt.R16_SNORM_EXT)),R===n.RED_INTEGER&&(rt===n.UNSIGNED_BYTE&&(xt=n.R8UI),rt===n.UNSIGNED_SHORT&&(xt=n.R16UI),rt===n.UNSIGNED_INT&&(xt=n.R32UI),rt===n.BYTE&&(xt=n.R8I),rt===n.SHORT&&(xt=n.R16I),rt===n.INT&&(xt=n.R32I)),R===n.RG&&(rt===n.FLOAT&&(xt=n.RG32F),rt===n.HALF_FLOAT&&(xt=n.RG16F),rt===n.UNSIGNED_BYTE&&(xt=n.RG8),rt===n.UNSIGNED_SHORT&&Pt&&(xt=Pt.RG16_EXT),rt===n.SHORT&&Pt&&(xt=Pt.RG16_SNORM_EXT)),R===n.RG_INTEGER&&(rt===n.UNSIGNED_BYTE&&(xt=n.RG8UI),rt===n.UNSIGNED_SHORT&&(xt=n.RG16UI),rt===n.UNSIGNED_INT&&(xt=n.RG32UI),rt===n.BYTE&&(xt=n.RG8I),rt===n.SHORT&&(xt=n.RG16I),rt===n.INT&&(xt=n.RG32I)),R===n.RGB_INTEGER&&(rt===n.UNSIGNED_BYTE&&(xt=n.RGB8UI),rt===n.UNSIGNED_SHORT&&(xt=n.RGB16UI),rt===n.UNSIGNED_INT&&(xt=n.RGB32UI),rt===n.BYTE&&(xt=n.RGB8I),rt===n.SHORT&&(xt=n.RGB16I),rt===n.INT&&(xt=n.RGB32I)),R===n.RGBA_INTEGER&&(rt===n.UNSIGNED_BYTE&&(xt=n.RGBA8UI),rt===n.UNSIGNED_SHORT&&(xt=n.RGBA16UI),rt===n.UNSIGNED_INT&&(xt=n.RGBA32UI),rt===n.BYTE&&(xt=n.RGBA8I),rt===n.SHORT&&(xt=n.RGBA16I),rt===n.INT&&(xt=n.RGBA32I)),R===n.RGB&&(rt===n.UNSIGNED_SHORT&&Pt&&(xt=Pt.RGB16_EXT),rt===n.SHORT&&Pt&&(xt=Pt.RGB16_SNORM_EXT),rt===n.UNSIGNED_INT_5_9_9_9_REV&&(xt=n.RGB9_E5),rt===n.UNSIGNED_INT_10F_11F_11F_REV&&(xt=n.R11F_G11F_B10F)),R===n.RGBA){let Mt=Tt?xo:Ee.getTransfer(mt);rt===n.FLOAT&&(xt=n.RGBA32F),rt===n.HALF_FLOAT&&(xt=n.RGBA16F),rt===n.UNSIGNED_BYTE&&(xt=Mt===Ne?n.SRGB8_ALPHA8:n.RGBA8),rt===n.UNSIGNED_SHORT&&Pt&&(xt=Pt.RGBA16_EXT),rt===n.SHORT&&Pt&&(xt=Pt.RGBA16_SNORM_EXT),rt===n.UNSIGNED_SHORT_4_4_4_4&&(xt=n.RGBA4),rt===n.UNSIGNED_SHORT_5_5_5_1&&(xt=n.RGB5_A1)}return(xt===n.R16F||xt===n.R32F||xt===n.RG16F||xt===n.RG32F||xt===n.RGBA16F||xt===n.RGBA32F)&&t.get("EXT_color_buffer_float"),xt}function I(z,R){let rt;return z?R===null||R===si||R===Mr?rt=n.DEPTH24_STENCIL8:R===ri?rt=n.DEPTH32F_STENCIL8:R===br&&(rt=n.DEPTH24_STENCIL8,ie("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):R===null||R===si||R===Mr?rt=n.DEPTH_COMPONENT24:R===ri?rt=n.DEPTH_COMPONENT32F:R===br&&(rt=n.DEPTH_COMPONENT16),rt}function E(z,R){return _(z)===!0||z.isFramebufferTexture&&z.minFilter!==un&&z.minFilter!==mn?Math.log2(Math.max(R.width,R.height))+1:z.mipmaps!==void 0&&z.mipmaps.length>0?z.mipmaps.length:z.isCompressedTexture&&Array.isArray(z.image)?R.mipmaps.length:1}function C(z){let R=z.target;R.removeEventListener("dispose",C),N(R),R.isVideoTexture&&d.delete(R),R.isHTMLTexture&&g.delete(R)}function w(z){let R=z.target;R.removeEventListener("dispose",w),U(R)}function N(z){let R=i.get(z);if(R.__webglInit===void 0)return;let rt=z.source,ft=x.get(rt);if(ft){let mt=ft[R.__cacheKey];mt.usedTimes--,mt.usedTimes===0&&F(z),Object.keys(ft).length===0&&x.delete(rt)}i.remove(z)}function F(z){let R=i.get(z);n.deleteTexture(R.__webglTexture);let rt=z.source,ft=x.get(rt);delete ft[R.__cacheKey],l.memory.textures--}function U(z){let R=i.get(z);if(z.depthTexture&&(z.depthTexture.dispose(),i.remove(z.depthTexture)),z.isWebGLCubeRenderTarget)for(let ft=0;ft<6;ft++){if(Array.isArray(R.__webglFramebuffer[ft]))for(let mt=0;mt<R.__webglFramebuffer[ft].length;mt++)n.deleteFramebuffer(R.__webglFramebuffer[ft][mt]);else n.deleteFramebuffer(R.__webglFramebuffer[ft]);R.__webglDepthbuffer&&n.deleteRenderbuffer(R.__webglDepthbuffer[ft])}else{if(Array.isArray(R.__webglFramebuffer))for(let ft=0;ft<R.__webglFramebuffer.length;ft++)n.deleteFramebuffer(R.__webglFramebuffer[ft]);else n.deleteFramebuffer(R.__webglFramebuffer);if(R.__webglDepthbuffer&&n.deleteRenderbuffer(R.__webglDepthbuffer),R.__webglMultisampledFramebuffer&&n.deleteFramebuffer(R.__webglMultisampledFramebuffer),R.__webglColorRenderbuffer)for(let ft=0;ft<R.__webglColorRenderbuffer.length;ft++)R.__webglColorRenderbuffer[ft]&&n.deleteRenderbuffer(R.__webglColorRenderbuffer[ft]);R.__webglDepthRenderbuffer&&n.deleteRenderbuffer(R.__webglDepthRenderbuffer)}let rt=z.textures;for(let ft=0,mt=rt.length;ft<mt;ft++){let Tt=i.get(rt[ft]);Tt.__webglTexture&&(n.deleteTexture(Tt.__webglTexture),l.memory.textures--),i.remove(rt[ft])}i.remove(z)}let G=0;function V(){G=0}function k(){return G}function q(z){G=z}function Z(){let z=G;return z>=s.maxTextures&&ie("WebGLTextures: Trying to use "+(z+1)+" texture units while this GPU supports only "+s.maxTextures),G+=1,z}function B(z){let R=[];return R.push(z.wrapS),R.push(z.wrapT),R.push(z.wrapR||0),R.push(z.magFilter),R.push(z.minFilter),R.push(z.anisotropy),R.push(z.internalFormat),R.push(z.format),R.push(z.type),R.push(z.generateMipmaps),R.push(z.premultiplyAlpha),R.push(z.flipY),R.push(z.unpackAlignment),R.push(z.colorSpace),R.join()}function K(z,R){let rt=i.get(z);if(z.isVideoTexture&&et(z),z.isRenderTargetTexture===!1&&z.isExternalTexture!==!0&&z.version>0&&rt.__version!==z.version){let ft=z.image;if(ft===null)ie("WebGLRenderer: Texture marked for update but no image data found.");else if(ft.complete===!1)ie("WebGLRenderer: Texture marked for update but image is incomplete");else{Dt(rt,z,R);return}}else z.isExternalTexture&&(rt.__webglTexture=z.sourceTexture?z.sourceTexture:null);e.bindTexture(n.TEXTURE_2D,rt.__webglTexture,n.TEXTURE0+R)}function j(z,R){let rt=i.get(z);if(z.isRenderTargetTexture===!1&&z.version>0&&rt.__version!==z.version){Dt(rt,z,R);return}else z.isExternalTexture&&(rt.__webglTexture=z.sourceTexture?z.sourceTexture:null);e.bindTexture(n.TEXTURE_2D_ARRAY,rt.__webglTexture,n.TEXTURE0+R)}function st(z,R){let rt=i.get(z);if(z.isRenderTargetTexture===!1&&z.version>0&&rt.__version!==z.version){Dt(rt,z,R);return}e.bindTexture(n.TEXTURE_3D,rt.__webglTexture,n.TEXTURE0+R)}function X(z,R){let rt=i.get(z);if(z.isCubeDepthTexture!==!0&&z.version>0&&rt.__version!==z.version){ne(rt,z,R);return}e.bindTexture(n.TEXTURE_CUBE_MAP,rt.__webglTexture,n.TEXTURE0+R)}let bt={[Qa]:n.REPEAT,[di]:n.CLAMP_TO_EDGE,[tl]:n.MIRRORED_REPEAT},St={[un]:n.NEAREST,[zd]:n.NEAREST_MIPMAP_NEAREST,[Wo]:n.NEAREST_MIPMAP_LINEAR,[mn]:n.LINEAR,[Cl]:n.LINEAR_MIPMAP_NEAREST,[Qi]:n.LINEAR_MIPMAP_LINEAR},Vt={[Xd]:n.NEVER,[Zd]:n.ALWAYS,[Wd]:n.LESS,[fc]:n.LEQUAL,[Yd]:n.EQUAL,[dc]:n.GEQUAL,[$d]:n.GREATER,[qd]:n.NOTEQUAL};function $t(z,R){if(R.type===ri&&t.has("OES_texture_float_linear")===!1&&(R.magFilter===mn||R.magFilter===Cl||R.magFilter===Wo||R.magFilter===Qi||R.minFilter===mn||R.minFilter===Cl||R.minFilter===Wo||R.minFilter===Qi)&&ie("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(z,n.TEXTURE_WRAP_S,bt[R.wrapS]),n.texParameteri(z,n.TEXTURE_WRAP_T,bt[R.wrapT]),(z===n.TEXTURE_3D||z===n.TEXTURE_2D_ARRAY)&&n.texParameteri(z,n.TEXTURE_WRAP_R,bt[R.wrapR]),n.texParameteri(z,n.TEXTURE_MAG_FILTER,St[R.magFilter]),n.texParameteri(z,n.TEXTURE_MIN_FILTER,St[R.minFilter]),R.compareFunction&&(n.texParameteri(z,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(z,n.TEXTURE_COMPARE_FUNC,Vt[R.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(R.magFilter===un||R.minFilter!==Wo&&R.minFilter!==Qi||R.type===ri&&t.has("OES_texture_float_linear")===!1)return;if(R.anisotropy>1||i.get(R).__currentAnisotropy){let rt=t.get("EXT_texture_filter_anisotropic");n.texParameterf(z,rt.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(R.anisotropy,s.getMaxAnisotropy())),i.get(R).__currentAnisotropy=R.anisotropy}}}function te(z,R){let rt=!1;z.__webglInit===void 0&&(z.__webglInit=!0,R.addEventListener("dispose",C));let ft=R.source,mt=x.get(ft);mt===void 0&&(mt={},x.set(ft,mt));let Tt=B(R);if(Tt!==z.__cacheKey){mt[Tt]===void 0&&(mt[Tt]={texture:n.createTexture(),usedTimes:0},l.memory.textures++,rt=!0),mt[Tt].usedTimes++;let Pt=mt[z.__cacheKey];Pt!==void 0&&(mt[z.__cacheKey].usedTimes--,Pt.usedTimes===0&&F(R)),z.__cacheKey=Tt,z.__webglTexture=mt[Tt].texture}return rt}function ut(z,R,rt){return Math.floor(Math.floor(z/rt)/R)}function gt(z,R,rt,ft){let Tt=z.updateRanges;if(Tt.length===0)e.texSubImage2D(n.TEXTURE_2D,0,0,0,R.width,R.height,rt,ft,R.data);else{Tt.sort((Xt,Lt)=>Xt.start-Lt.start);let Pt=0;for(let Xt=1;Xt<Tt.length;Xt++){let Lt=Tt[Pt],At=Tt[Xt],qt=Lt.start+Lt.count,Kt=ut(At.start,R.width,4),ae=ut(Lt.start,R.width,4);At.start<=qt+1&&Kt===ae&&ut(At.start+At.count-1,R.width,4)===Kt?Lt.count=Math.max(Lt.count,At.start+At.count-Lt.start):(++Pt,Tt[Pt]=At)}Tt.length=Pt+1;let xt=e.getParameter(n.UNPACK_ROW_LENGTH),Mt=e.getParameter(n.UNPACK_SKIP_PIXELS),W=e.getParameter(n.UNPACK_SKIP_ROWS);e.pixelStorei(n.UNPACK_ROW_LENGTH,R.width);for(let Xt=0,Lt=Tt.length;Xt<Lt;Xt++){let At=Tt[Xt],qt=Math.floor(At.start/4),Kt=Math.ceil(At.count/4),ae=qt%R.width,Q=Math.floor(qt/R.width),Rt=Kt,yt=1;e.pixelStorei(n.UNPACK_SKIP_PIXELS,ae),e.pixelStorei(n.UNPACK_SKIP_ROWS,Q),e.texSubImage2D(n.TEXTURE_2D,0,ae,Q,Rt,yt,rt,ft,R.data)}z.clearUpdateRanges(),e.pixelStorei(n.UNPACK_ROW_LENGTH,xt),e.pixelStorei(n.UNPACK_SKIP_PIXELS,Mt),e.pixelStorei(n.UNPACK_SKIP_ROWS,W)}}function Dt(z,R,rt){let ft=n.TEXTURE_2D;(R.isDataArrayTexture||R.isCompressedArrayTexture)&&(ft=n.TEXTURE_2D_ARRAY),R.isData3DTexture&&(ft=n.TEXTURE_3D);let mt=te(z,R),Tt=R.source;e.bindTexture(ft,z.__webglTexture,n.TEXTURE0+rt);let Pt=i.get(Tt);if(Tt.version!==Pt.__version||mt===!0){if(e.activeTexture(n.TEXTURE0+rt),(typeof ImageBitmap<"u"&&R.image instanceof ImageBitmap)===!1){let yt=Ee.getPrimaries(Ee.workingColorSpace),Ct=R.colorSpace===Ri?null:Ee.getPrimaries(R.colorSpace),Ut=R.colorSpace===Ri||yt===Ct?n.NONE:n.BROWSER_DEFAULT_WEBGL;e.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,R.flipY),e.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),e.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ut)}e.pixelStorei(n.UNPACK_ALIGNMENT,R.unpackAlignment);let Mt=y(R.image,!1,s.maxTextureSize);Mt=Qe(R,Mt);let W=a.convert(R.format,R.colorSpace),Xt=a.convert(R.type),Lt=S(R.internalFormat,W,Xt,R.normalized,R.colorSpace,R.isVideoTexture);$t(ft,R);let At,qt=R.mipmaps,Kt=R.isVideoTexture!==!0,ae=Pt.__version===void 0||mt===!0,Q=Tt.dataReady,Rt=E(R,Mt);if(R.isDepthTexture)Lt=I(R.format===ts,R.type),ae&&(Kt?e.texStorage2D(n.TEXTURE_2D,1,Lt,Mt.width,Mt.height):e.texImage2D(n.TEXTURE_2D,0,Lt,Mt.width,Mt.height,0,W,Xt,null));else if(R.isDataTexture)if(qt.length>0){Kt&&ae&&e.texStorage2D(n.TEXTURE_2D,Rt,Lt,qt[0].width,qt[0].height);for(let yt=0,Ct=qt.length;yt<Ct;yt++)At=qt[yt],Kt?Q&&e.texSubImage2D(n.TEXTURE_2D,yt,0,0,At.width,At.height,W,Xt,At.data):e.texImage2D(n.TEXTURE_2D,yt,Lt,At.width,At.height,0,W,Xt,At.data);R.generateMipmaps=!1}else Kt?(ae&&e.texStorage2D(n.TEXTURE_2D,Rt,Lt,Mt.width,Mt.height),Q&&gt(R,Mt,W,Xt)):e.texImage2D(n.TEXTURE_2D,0,Lt,Mt.width,Mt.height,0,W,Xt,Mt.data);else if(R.isCompressedTexture)if(R.isCompressedArrayTexture){Kt&&ae&&e.texStorage3D(n.TEXTURE_2D_ARRAY,Rt,Lt,qt[0].width,qt[0].height,Mt.depth);for(let yt=0,Ct=qt.length;yt<Ct;yt++)if(At=qt[yt],R.format!==Gn)if(W!==null)if(Kt){if(Q)if(R.layerUpdates.size>0){let Ut=ou(At.width,At.height,R.format,R.type);for(let wt of R.layerUpdates){let Ht=At.data.subarray(wt*Ut/At.data.BYTES_PER_ELEMENT,(wt+1)*Ut/At.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,yt,0,0,wt,At.width,At.height,1,W,Ht)}}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,yt,0,0,0,At.width,At.height,Mt.depth,W,At.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,yt,Lt,At.width,At.height,Mt.depth,0,At.data,0,0);else ie("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Kt?Q&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,yt,0,0,0,At.width,At.height,Mt.depth,W,Xt,At.data):e.texImage3D(n.TEXTURE_2D_ARRAY,yt,Lt,At.width,At.height,Mt.depth,0,W,Xt,At.data);R.layerUpdates.size>0&&R.clearLayerUpdates()}else{Kt&&ae&&e.texStorage2D(n.TEXTURE_2D,Rt,Lt,qt[0].width,qt[0].height);for(let yt=0,Ct=qt.length;yt<Ct;yt++)At=qt[yt],R.format!==Gn?W!==null?Kt?Q&&e.compressedTexSubImage2D(n.TEXTURE_2D,yt,0,0,At.width,At.height,W,At.data):e.compressedTexImage2D(n.TEXTURE_2D,yt,Lt,At.width,At.height,0,At.data):ie("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Kt?Q&&e.texSubImage2D(n.TEXTURE_2D,yt,0,0,At.width,At.height,W,Xt,At.data):e.texImage2D(n.TEXTURE_2D,yt,Lt,At.width,At.height,0,W,Xt,At.data)}else if(R.isDataArrayTexture)if(Kt){if(ae&&e.texStorage3D(n.TEXTURE_2D_ARRAY,Rt,Lt,Mt.width,Mt.height,Mt.depth),Q)if(R.layerUpdates.size>0){let yt=ou(Mt.width,Mt.height,R.format,R.type);for(let Ct of R.layerUpdates){let Ut=Mt.data.subarray(Ct*yt/Mt.data.BYTES_PER_ELEMENT,(Ct+1)*yt/Mt.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,Ct,Mt.width,Mt.height,1,W,Xt,Ut)}R.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,Mt.width,Mt.height,Mt.depth,W,Xt,Mt.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,Lt,Mt.width,Mt.height,Mt.depth,0,W,Xt,Mt.data);else if(R.isData3DTexture)Kt?(ae&&e.texStorage3D(n.TEXTURE_3D,Rt,Lt,Mt.width,Mt.height,Mt.depth),Q&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,Mt.width,Mt.height,Mt.depth,W,Xt,Mt.data)):e.texImage3D(n.TEXTURE_3D,0,Lt,Mt.width,Mt.height,Mt.depth,0,W,Xt,Mt.data);else if(R.isFramebufferTexture){if(ae)if(Kt)e.texStorage2D(n.TEXTURE_2D,Rt,Lt,Mt.width,Mt.height);else{let yt=Mt.width,Ct=Mt.height;for(let Ut=0;Ut<Rt;Ut++)e.texImage2D(n.TEXTURE_2D,Ut,Lt,yt,Ct,0,W,Xt,null),yt>>=1,Ct>>=1}}else if(R.isHTMLTexture){if("texElementImage2D"in n){let yt=n.canvas;if(yt.hasAttribute("layoutsubtree")||yt.setAttribute("layoutsubtree","true"),Mt.parentNode!==yt){yt.appendChild(Mt),g.add(R),yt.onpaint=Ct=>{let Ut=Ct.changedElements;for(let wt of g)Ut.includes(wt.image)&&(wt.needsUpdate=!0)},yt.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,Mt);else{let Ut=n.RGBA,wt=n.RGBA,Ht=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,Ut,wt,Ht,Mt)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(qt.length>0){if(Kt&&ae){let yt=Ce(qt[0]);e.texStorage2D(n.TEXTURE_2D,Rt,Lt,yt.width,yt.height)}for(let yt=0,Ct=qt.length;yt<Ct;yt++)At=qt[yt],Kt?Q&&e.texSubImage2D(n.TEXTURE_2D,yt,0,0,W,Xt,At):e.texImage2D(n.TEXTURE_2D,yt,Lt,W,Xt,At);R.generateMipmaps=!1}else if(Kt){if(ae){let yt=Ce(Mt);e.texStorage2D(n.TEXTURE_2D,Rt,Lt,yt.width,yt.height)}Q&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,W,Xt,Mt)}else e.texImage2D(n.TEXTURE_2D,0,Lt,W,Xt,Mt);_(R)&&A(ft),Pt.__version=Tt.version,R.onUpdate&&R.onUpdate(R)}z.__version=R.version}function ne(z,R,rt){if(R.image.length!==6)return;let ft=te(z,R),mt=R.source;e.bindTexture(n.TEXTURE_CUBE_MAP,z.__webglTexture,n.TEXTURE0+rt);let Tt=i.get(mt);if(mt.version!==Tt.__version||ft===!0){e.activeTexture(n.TEXTURE0+rt);let Pt=Ee.getPrimaries(Ee.workingColorSpace),xt=R.colorSpace===Ri?null:Ee.getPrimaries(R.colorSpace),Mt=R.colorSpace===Ri||Pt===xt?n.NONE:n.BROWSER_DEFAULT_WEBGL;e.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,R.flipY),e.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),e.pixelStorei(n.UNPACK_ALIGNMENT,R.unpackAlignment),e.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Mt);let W=R.isCompressedTexture||R.image[0].isCompressedTexture,Xt=R.image[0]&&R.image[0].isDataTexture,Lt=[];for(let wt=0;wt<6;wt++)!W&&!Xt?Lt[wt]=y(R.image[wt],!0,s.maxCubemapSize):Lt[wt]=Xt?R.image[wt].image:R.image[wt],Lt[wt]=Qe(R,Lt[wt]);let At=Lt[0],qt=a.convert(R.format,R.colorSpace),Kt=a.convert(R.type),ae=S(R.internalFormat,qt,Kt,R.normalized,R.colorSpace),Q=R.isVideoTexture!==!0,Rt=Tt.__version===void 0||ft===!0,yt=mt.dataReady,Ct=E(R,At);$t(n.TEXTURE_CUBE_MAP,R);let Ut;if(W){Q&&Rt&&e.texStorage2D(n.TEXTURE_CUBE_MAP,Ct,ae,At.width,At.height);for(let wt=0;wt<6;wt++){Ut=Lt[wt].mipmaps;for(let Ht=0;Ht<Ut.length;Ht++){let Gt=Ut[Ht];R.format!==Gn?qt!==null?Q?yt&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+wt,Ht,0,0,Gt.width,Gt.height,qt,Gt.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+wt,Ht,ae,Gt.width,Gt.height,0,Gt.data):ie("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Q?yt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+wt,Ht,0,0,Gt.width,Gt.height,qt,Kt,Gt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+wt,Ht,ae,Gt.width,Gt.height,0,qt,Kt,Gt.data)}}}else{if(Ut=R.mipmaps,Q&&Rt){Ut.length>0&&Ct++;let wt=Ce(Lt[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,Ct,ae,wt.width,wt.height)}for(let wt=0;wt<6;wt++)if(Xt){Q?yt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+wt,0,0,0,Lt[wt].width,Lt[wt].height,qt,Kt,Lt[wt].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+wt,0,ae,Lt[wt].width,Lt[wt].height,0,qt,Kt,Lt[wt].data);for(let Ht=0;Ht<Ut.length;Ht++){let Le=Ut[Ht].image[wt].image;Q?yt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+wt,Ht+1,0,0,Le.width,Le.height,qt,Kt,Le.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+wt,Ht+1,ae,Le.width,Le.height,0,qt,Kt,Le.data)}}else{Q?yt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+wt,0,0,0,qt,Kt,Lt[wt]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+wt,0,ae,qt,Kt,Lt[wt]);for(let Ht=0;Ht<Ut.length;Ht++){let Gt=Ut[Ht];Q?yt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+wt,Ht+1,0,0,qt,Kt,Gt.image[wt]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+wt,Ht+1,ae,qt,Kt,Gt.image[wt])}}}_(R)&&A(n.TEXTURE_CUBE_MAP),Tt.__version=mt.version,R.onUpdate&&R.onUpdate(R)}z.__version=R.version}function Ot(z,R,rt,ft,mt,Tt){let Pt=a.convert(rt.format,rt.colorSpace),xt=a.convert(rt.type),Mt=S(rt.internalFormat,Pt,xt,rt.normalized,rt.colorSpace),W=i.get(R),Xt=i.get(rt);if(Xt.__renderTarget=R,!W.__hasExternalTextures){let Lt=Math.max(1,R.width>>Tt),At=Math.max(1,R.height>>Tt);mt===n.TEXTURE_3D||mt===n.TEXTURE_2D_ARRAY?e.texImage3D(mt,Tt,Mt,Lt,At,R.depth,0,Pt,xt,null):e.texImage2D(mt,Tt,Mt,Lt,At,0,Pt,xt,null)}e.bindFramebuffer(n.FRAMEBUFFER,z),ke(R)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ft,mt,Xt.__webglTexture,0,Be(R)):(mt===n.TEXTURE_2D||mt>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&mt<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,ft,mt,Xt.__webglTexture,Tt),e.bindFramebuffer(n.FRAMEBUFFER,null)}function ce(z,R,rt){if(n.bindRenderbuffer(n.RENDERBUFFER,z),R.depthBuffer){let ft=R.depthTexture,mt=ft&&ft.isDepthTexture?ft.type:null,Tt=I(R.stencilBuffer,mt),Pt=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;ke(R)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Be(R),Tt,R.width,R.height):rt?n.renderbufferStorageMultisample(n.RENDERBUFFER,Be(R),Tt,R.width,R.height):n.renderbufferStorage(n.RENDERBUFFER,Tt,R.width,R.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Pt,n.RENDERBUFFER,z)}else{let ft=R.textures;for(let mt=0;mt<ft.length;mt++){let Tt=ft[mt],Pt=a.convert(Tt.format,Tt.colorSpace),xt=a.convert(Tt.type),Mt=S(Tt.internalFormat,Pt,xt,Tt.normalized,Tt.colorSpace);ke(R)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Be(R),Mt,R.width,R.height):rt?n.renderbufferStorageMultisample(n.RENDERBUFFER,Be(R),Mt,R.width,R.height):n.renderbufferStorage(n.RENDERBUFFER,Mt,R.width,R.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function be(z,R,rt){let ft=R.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(n.FRAMEBUFFER,z),!(R.depthTexture&&R.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let mt=i.get(R.depthTexture);if(mt.__renderTarget=R,(!mt.__webglTexture||R.depthTexture.image.width!==R.width||R.depthTexture.image.height!==R.height)&&(R.depthTexture.image.width=R.width,R.depthTexture.image.height=R.height,R.depthTexture.needsUpdate=!0),ft){if(mt.__webglInit===void 0&&(mt.__webglInit=!0,R.depthTexture.addEventListener("dispose",C)),mt.__webglTexture===void 0){mt.__webglTexture=n.createTexture(),e.bindTexture(n.TEXTURE_CUBE_MAP,mt.__webglTexture),$t(n.TEXTURE_CUBE_MAP,R.depthTexture);let W=a.convert(R.depthTexture.format),Xt=a.convert(R.depthTexture.type),Lt;R.depthTexture.format===pi?Lt=n.DEPTH_COMPONENT24:R.depthTexture.format===ts&&(Lt=n.DEPTH24_STENCIL8);for(let At=0;At<6;At++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+At,0,Lt,R.width,R.height,0,W,Xt,null)}}else K(R.depthTexture,0);let Tt=mt.__webglTexture,Pt=Be(R),xt=ft?n.TEXTURE_CUBE_MAP_POSITIVE_X+rt:n.TEXTURE_2D,Mt=R.depthTexture.format===ts?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(R.depthTexture.format===pi)ke(R)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Mt,xt,Tt,0,Pt):n.framebufferTexture2D(n.FRAMEBUFFER,Mt,xt,Tt,0);else if(R.depthTexture.format===ts)ke(R)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Mt,xt,Tt,0,Pt):n.framebufferTexture2D(n.FRAMEBUFFER,Mt,xt,Tt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function he(z){let R=i.get(z),rt=z.isWebGLCubeRenderTarget===!0;if(R.__boundDepthTexture!==z.depthTexture){let ft=z.depthTexture;if(R.__depthDisposeCallback&&R.__depthDisposeCallback(),ft){let mt=()=>{delete R.__boundDepthTexture,delete R.__depthDisposeCallback,ft.removeEventListener("dispose",mt)};ft.addEventListener("dispose",mt),R.__depthDisposeCallback=mt}R.__boundDepthTexture=ft}if(z.depthTexture&&!R.__autoAllocateDepthBuffer)if(rt)for(let ft=0;ft<6;ft++)be(R.__webglFramebuffer[ft],z,ft);else{let ft=z.texture.mipmaps;ft&&ft.length>0?be(R.__webglFramebuffer[0],z,0):be(R.__webglFramebuffer,z,0)}else if(rt){R.__webglDepthbuffer=[];for(let ft=0;ft<6;ft++)if(e.bindFramebuffer(n.FRAMEBUFFER,R.__webglFramebuffer[ft]),R.__webglDepthbuffer[ft]===void 0)R.__webglDepthbuffer[ft]=n.createRenderbuffer(),ce(R.__webglDepthbuffer[ft],z,!1);else{let mt=z.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Tt=R.__webglDepthbuffer[ft];n.bindRenderbuffer(n.RENDERBUFFER,Tt),n.framebufferRenderbuffer(n.FRAMEBUFFER,mt,n.RENDERBUFFER,Tt)}}else{let ft=z.texture.mipmaps;if(ft&&ft.length>0?e.bindFramebuffer(n.FRAMEBUFFER,R.__webglFramebuffer[0]):e.bindFramebuffer(n.FRAMEBUFFER,R.__webglFramebuffer),R.__webglDepthbuffer===void 0)R.__webglDepthbuffer=n.createRenderbuffer(),ce(R.__webglDepthbuffer,z,!1);else{let mt=z.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Tt=R.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,Tt),n.framebufferRenderbuffer(n.FRAMEBUFFER,mt,n.RENDERBUFFER,Tt)}}e.bindFramebuffer(n.FRAMEBUFFER,null)}function ge(z,R,rt){let ft=i.get(z);R!==void 0&&Ot(ft.__webglFramebuffer,z,z.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),rt!==void 0&&he(z)}function Se(z){let R=z.texture,rt=i.get(z),ft=i.get(R);z.addEventListener("dispose",w);let mt=z.textures,Tt=z.isWebGLCubeRenderTarget===!0,Pt=mt.length>1;if(Pt||(ft.__webglTexture===void 0&&(ft.__webglTexture=n.createTexture()),ft.__version=R.version,l.memory.textures++),Tt){rt.__webglFramebuffer=[];for(let xt=0;xt<6;xt++)if(R.mipmaps&&R.mipmaps.length>0){rt.__webglFramebuffer[xt]=[];for(let Mt=0;Mt<R.mipmaps.length;Mt++)rt.__webglFramebuffer[xt][Mt]=n.createFramebuffer()}else rt.__webglFramebuffer[xt]=n.createFramebuffer()}else{if(R.mipmaps&&R.mipmaps.length>0){rt.__webglFramebuffer=[];for(let xt=0;xt<R.mipmaps.length;xt++)rt.__webglFramebuffer[xt]=n.createFramebuffer()}else rt.__webglFramebuffer=n.createFramebuffer();if(Pt)for(let xt=0,Mt=mt.length;xt<Mt;xt++){let W=i.get(mt[xt]);W.__webglTexture===void 0&&(W.__webglTexture=n.createTexture(),l.memory.textures++)}if(z.samples>0&&ke(z)===!1){rt.__webglMultisampledFramebuffer=n.createFramebuffer(),rt.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,rt.__webglMultisampledFramebuffer);for(let xt=0;xt<mt.length;xt++){let Mt=mt[xt];rt.__webglColorRenderbuffer[xt]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,rt.__webglColorRenderbuffer[xt]);let W=a.convert(Mt.format,Mt.colorSpace),Xt=a.convert(Mt.type),Lt=S(Mt.internalFormat,W,Xt,Mt.normalized,Mt.colorSpace,z.isXRRenderTarget===!0),At=Be(z);n.renderbufferStorageMultisample(n.RENDERBUFFER,At,Lt,z.width,z.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+xt,n.RENDERBUFFER,rt.__webglColorRenderbuffer[xt])}n.bindRenderbuffer(n.RENDERBUFFER,null),z.depthBuffer&&(rt.__webglDepthRenderbuffer=n.createRenderbuffer(),ce(rt.__webglDepthRenderbuffer,z,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(Tt){e.bindTexture(n.TEXTURE_CUBE_MAP,ft.__webglTexture),$t(n.TEXTURE_CUBE_MAP,R);for(let xt=0;xt<6;xt++)if(R.mipmaps&&R.mipmaps.length>0)for(let Mt=0;Mt<R.mipmaps.length;Mt++)Ot(rt.__webglFramebuffer[xt][Mt],z,R,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Mt);else Ot(rt.__webglFramebuffer[xt],z,R,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0);_(R)&&A(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Pt){for(let xt=0,Mt=mt.length;xt<Mt;xt++){let W=mt[xt],Xt=i.get(W),Lt=n.TEXTURE_2D;(z.isWebGL3DRenderTarget||z.isWebGLArrayRenderTarget)&&(Lt=z.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(Lt,Xt.__webglTexture),$t(Lt,W),Ot(rt.__webglFramebuffer,z,W,n.COLOR_ATTACHMENT0+xt,Lt,0),_(W)&&A(Lt)}e.unbindTexture()}else{let xt=n.TEXTURE_2D;if((z.isWebGL3DRenderTarget||z.isWebGLArrayRenderTarget)&&(xt=z.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(xt,ft.__webglTexture),$t(xt,R),R.mipmaps&&R.mipmaps.length>0)for(let Mt=0;Mt<R.mipmaps.length;Mt++)Ot(rt.__webglFramebuffer[Mt],z,R,n.COLOR_ATTACHMENT0,xt,Mt);else Ot(rt.__webglFramebuffer,z,R,n.COLOR_ATTACHMENT0,xt,0);_(R)&&A(xt),e.unbindTexture()}z.depthBuffer&&he(z)}function ue(z){let R=z.textures;for(let rt=0,ft=R.length;rt<ft;rt++){let mt=R[rt];if(_(mt)){let Tt=T(z),Pt=i.get(mt).__webglTexture;e.bindTexture(Tt,Pt),A(Tt),e.unbindTexture()}}}let Ae=[],Ue=[];function Ye(z){if(z.samples>0){if(ke(z)===!1){let R=z.textures,rt=z.width,ft=z.height,mt=n.COLOR_BUFFER_BIT,Tt=z.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Pt=i.get(z),xt=R.length>1;if(xt)for(let W=0;W<R.length;W++)e.bindFramebuffer(n.FRAMEBUFFER,Pt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+W,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,Pt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+W,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,Pt.__webglMultisampledFramebuffer);let Mt=z.texture.mipmaps;Mt&&Mt.length>0?e.bindFramebuffer(n.DRAW_FRAMEBUFFER,Pt.__webglFramebuffer[0]):e.bindFramebuffer(n.DRAW_FRAMEBUFFER,Pt.__webglFramebuffer);for(let W=0;W<R.length;W++){if(z.resolveDepthBuffer&&(z.depthBuffer&&(mt|=n.DEPTH_BUFFER_BIT),z.stencilBuffer&&z.resolveStencilBuffer&&(mt|=n.STENCIL_BUFFER_BIT)),xt){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Pt.__webglColorRenderbuffer[W]);let Xt=i.get(R[W]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Xt,0)}n.blitFramebuffer(0,0,rt,ft,0,0,rt,ft,mt,n.NEAREST),h===!0&&(Ae.length=0,Ue.length=0,Ae.push(n.COLOR_ATTACHMENT0+W),z.depthBuffer&&z.storeMultisampledDepthBuffer===!1&&(Ae.push(Tt),Ue.push(Tt),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,Ue)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Ae))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),xt)for(let W=0;W<R.length;W++){e.bindFramebuffer(n.FRAMEBUFFER,Pt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+W,n.RENDERBUFFER,Pt.__webglColorRenderbuffer[W]);let Xt=i.get(R[W]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,Pt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+W,n.TEXTURE_2D,Xt,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,Pt.__webglMultisampledFramebuffer)}else if(z.depthBuffer&&z.storeMultisampledDepthBuffer===!1&&h){let R=z.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[R])}}}function Be(z){return Math.min(s.maxSamples,z.samples)}function ke(z){let R=i.get(z);return z.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&R.__useRenderToTexture!==!1}function et(z){let R=l.render.frame;d.get(z)!==R&&(d.set(z,R),z.update())}function Qe(z,R){let rt=z.colorSpace,ft=z.format,mt=z.type;return z.isCompressedTexture===!0||z.isVideoTexture===!0||rt!==go&&rt!==Ri&&(Ee.getTransfer(rt)===Ne?(ft!==Gn||mt!==In)&&ie("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):se("WebGLTextures: Unsupported texture color space:",rt)),R}function Ce(z){return typeof HTMLImageElement<"u"&&z instanceof HTMLImageElement?(f.width=z.naturalWidth||z.width,f.height=z.naturalHeight||z.height):typeof VideoFrame<"u"&&z instanceof VideoFrame?(f.width=z.displayWidth,f.height=z.displayHeight):(f.width=z.width,f.height=z.height),f}this.allocateTextureUnit=Z,this.resetTextureUnits=V,this.getTextureUnits=k,this.setTextureUnits=q,this.setTexture2D=K,this.setTexture2DArray=j,this.setTexture3D=st,this.setTextureCube=X,this.rebindTextures=ge,this.setupRenderTarget=Se,this.updateRenderTargetMipmap=ue,this.updateMultisampleRenderTarget=Ye,this.setupDepthRenderbuffer=he,this.setupFrameBufferTexture=Ot,this.useMultisampledRTT=ke,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function hb(n,t){function e(i,s=Ri){let a,l=Ee.getTransfer(s);if(i===In)return n.UNSIGNED_BYTE;if(i===Il)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Rl)return n.UNSIGNED_SHORT_5_5_5_1;if(i===qh)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Zh)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===Yh)return n.BYTE;if(i===$h)return n.SHORT;if(i===br)return n.UNSIGNED_SHORT;if(i===Pl)return n.INT;if(i===si)return n.UNSIGNED_INT;if(i===ri)return n.FLOAT;if(i===oi)return n.HALF_FLOAT;if(i===Jh)return n.ALPHA;if(i===jh)return n.RGB;if(i===Gn)return n.RGBA;if(i===pi)return n.DEPTH_COMPONENT;if(i===ts)return n.DEPTH_STENCIL;if(i===Kh)return n.RED;if(i===Ll)return n.RED_INTEGER;if(i===es)return n.RG;if(i===Nl)return n.RG_INTEGER;if(i===Dl)return n.RGBA_INTEGER;if(i===Yo||i===$o||i===qo||i===Zo)if(l===Ne)if(a=t.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(i===Yo)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===$o)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===qo)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Zo)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=t.get("WEBGL_compressed_texture_s3tc"),a!==null){if(i===Yo)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===$o)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===qo)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Zo)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Ol||i===Fl||i===Ul||i===Bl)if(a=t.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(i===Ol)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Fl)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Ul)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Bl)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===kl||i===zl||i===Vl||i===Hl||i===Gl||i===Jo||i===Xl)if(a=t.get("WEBGL_compressed_texture_etc"),a!==null){if(i===kl||i===zl)return l===Ne?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(i===Vl)return l===Ne?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC;if(i===Hl)return a.COMPRESSED_R11_EAC;if(i===Gl)return a.COMPRESSED_SIGNED_R11_EAC;if(i===Jo)return a.COMPRESSED_RG11_EAC;if(i===Xl)return a.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Wl||i===Yl||i===$l||i===ql||i===Zl||i===Jl||i===jl||i===Kl||i===Ql||i===tc||i===ec||i===nc||i===ic||i===sc)if(a=t.get("WEBGL_compressed_texture_astc"),a!==null){if(i===Wl)return l===Ne?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Yl)return l===Ne?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===$l)return l===Ne?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===ql)return l===Ne?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Zl)return l===Ne?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Jl)return l===Ne?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===jl)return l===Ne?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Kl)return l===Ne?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Ql)return l===Ne?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===tc)return l===Ne?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===ec)return l===Ne?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===nc)return l===Ne?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===ic)return l===Ne?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===sc)return l===Ne?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===rc||i===oc||i===ac)if(a=t.get("EXT_texture_compression_bptc"),a!==null){if(i===rc)return l===Ne?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===oc)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===ac)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===lc||i===cc||i===jo||i===hc)if(a=t.get("EXT_texture_compression_rgtc"),a!==null){if(i===lc)return a.COMPRESSED_RED_RGTC1_EXT;if(i===cc)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===jo)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===hc)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Mr?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}function pb(n,t){function e(y,_){y.matrixAutoUpdate===!0&&y.updateMatrix(),_.value.copy(y.matrix)}function i(y,_){_.color.getRGB(y.fogColor.value,iu(n)),_.isFog?(y.fogNear.value=_.near,y.fogFar.value=_.far):_.isFogExp2&&(y.fogDensity.value=_.density)}function s(y,_,A,T,S){_.isNodeMaterial?_.uniformsNeedUpdate=!1:_.isMeshBasicMaterial?a(y,_):_.isMeshLambertMaterial?(a(y,_),_.envMap&&(y.envMapIntensity.value=_.envMapIntensity)):_.isMeshToonMaterial?(a(y,_),g(y,_)):_.isMeshPhongMaterial?(a(y,_),d(y,_),_.envMap&&(y.envMapIntensity.value=_.envMapIntensity)):_.isMeshStandardMaterial?(a(y,_),p(y,_),_.isMeshPhysicalMaterial&&x(y,_,S)):_.isMeshMatcapMaterial?(a(y,_),v(y,_)):_.isMeshDepthMaterial?a(y,_):_.isMeshDistanceMaterial?(a(y,_),b(y,_)):_.isMeshNormalMaterial?a(y,_):_.isLineBasicMaterial?(l(y,_),_.isLineDashedMaterial&&o(y,_)):_.isPointsMaterial?h(y,_,A,T):_.isSpriteMaterial?f(y,_):_.isShadowMaterial?(y.color.value.copy(_.color),y.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function a(y,_){y.opacity.value=_.opacity,_.color&&y.diffuse.value.copy(_.color),_.emissive&&y.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(y.map.value=_.map,e(_.map,y.mapTransform)),_.alphaMap&&(y.alphaMap.value=_.alphaMap,e(_.alphaMap,y.alphaMapTransform)),_.bumpMap&&(y.bumpMap.value=_.bumpMap,e(_.bumpMap,y.bumpMapTransform),y.bumpScale.value=_.bumpScale,_.side===An&&(y.bumpScale.value*=-1)),_.normalMap&&(y.normalMap.value=_.normalMap,e(_.normalMap,y.normalMapTransform),y.normalScale.value.copy(_.normalScale),_.side===An&&y.normalScale.value.negate()),_.displacementMap&&(y.displacementMap.value=_.displacementMap,e(_.displacementMap,y.displacementMapTransform),y.displacementScale.value=_.displacementScale,y.displacementBias.value=_.displacementBias),_.emissiveMap&&(y.emissiveMap.value=_.emissiveMap,e(_.emissiveMap,y.emissiveMapTransform)),_.specularMap&&(y.specularMap.value=_.specularMap,e(_.specularMap,y.specularMapTransform)),_.alphaTest>0&&(y.alphaTest.value=_.alphaTest);let A=t.get(_),T=A.envMap,S=A.envMapRotation;T&&(y.envMap.value=T,y.envMapRotation.value.setFromMatrix4(db.makeRotationFromEuler(S)).transpose(),T.isCubeTexture&&T.isRenderTargetTexture===!1&&y.envMapRotation.value.premultiply(Fp),y.reflectivity.value=_.reflectivity,y.ior.value=_.ior,y.refractionRatio.value=_.refractionRatio),_.lightMap&&(y.lightMap.value=_.lightMap,y.lightMapIntensity.value=_.lightMapIntensity,e(_.lightMap,y.lightMapTransform)),_.aoMap&&(y.aoMap.value=_.aoMap,y.aoMapIntensity.value=_.aoMapIntensity,e(_.aoMap,y.aoMapTransform))}function l(y,_){y.diffuse.value.copy(_.color),y.opacity.value=_.opacity,_.map&&(y.map.value=_.map,e(_.map,y.mapTransform))}function o(y,_){y.dashSize.value=_.dashSize,y.totalSize.value=_.dashSize+_.gapSize,y.scale.value=_.scale}function h(y,_,A,T){y.diffuse.value.copy(_.color),y.opacity.value=_.opacity,y.size.value=_.size*A,y.scale.value=T*.5,_.map&&(y.map.value=_.map,e(_.map,y.uvTransform)),_.alphaMap&&(y.alphaMap.value=_.alphaMap,e(_.alphaMap,y.alphaMapTransform)),_.alphaTest>0&&(y.alphaTest.value=_.alphaTest)}function f(y,_){y.diffuse.value.copy(_.color),y.opacity.value=_.opacity,y.rotation.value=_.rotation,_.map&&(y.map.value=_.map,e(_.map,y.mapTransform)),_.alphaMap&&(y.alphaMap.value=_.alphaMap,e(_.alphaMap,y.alphaMapTransform)),_.alphaTest>0&&(y.alphaTest.value=_.alphaTest)}function d(y,_){y.specular.value.copy(_.specular),y.shininess.value=Math.max(_.shininess,1e-4)}function g(y,_){_.gradientMap&&(y.gradientMap.value=_.gradientMap)}function p(y,_){y.metalness.value=_.metalness,_.metalnessMap&&(y.metalnessMap.value=_.metalnessMap,e(_.metalnessMap,y.metalnessMapTransform)),y.roughness.value=_.roughness,_.roughnessMap&&(y.roughnessMap.value=_.roughnessMap,e(_.roughnessMap,y.roughnessMapTransform)),_.envMap&&(y.envMapIntensity.value=_.envMapIntensity)}function x(y,_,A){y.ior.value=_.ior,_.sheen>0&&(y.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),y.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(y.sheenColorMap.value=_.sheenColorMap,e(_.sheenColorMap,y.sheenColorMapTransform)),_.sheenRoughnessMap&&(y.sheenRoughnessMap.value=_.sheenRoughnessMap,e(_.sheenRoughnessMap,y.sheenRoughnessMapTransform))),_.clearcoat>0&&(y.clearcoat.value=_.clearcoat,y.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(y.clearcoatMap.value=_.clearcoatMap,e(_.clearcoatMap,y.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,e(_.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(y.clearcoatNormalMap.value=_.clearcoatNormalMap,e(_.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===An&&y.clearcoatNormalScale.value.negate())),_.dispersion>0&&(y.dispersion.value=_.dispersion),_.retroreflectivity>0&&(y.retroreflectivity.value=_.retroreflectivity),_.iridescence>0&&(y.iridescence.value=_.iridescence,y.iridescenceIOR.value=_.iridescenceIOR,y.iridescenceThicknessMinimum.value=_.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=_.iridescenceThicknessRange[1],_.iridescenceMap&&(y.iridescenceMap.value=_.iridescenceMap,e(_.iridescenceMap,y.iridescenceMapTransform)),_.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=_.iridescenceThicknessMap,e(_.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),_.transmission>0&&(y.transmission.value=_.transmission,y.transmissionSamplerMap.value=A.texture,y.transmissionSamplerSize.value.set(A.width,A.height),_.transmissionMap&&(y.transmissionMap.value=_.transmissionMap,e(_.transmissionMap,y.transmissionMapTransform)),y.thickness.value=_.thickness,_.thicknessMap&&(y.thicknessMap.value=_.thicknessMap,e(_.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=_.attenuationDistance,y.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(y.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(y.anisotropyMap.value=_.anisotropyMap,e(_.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=_.specularIntensity,y.specularColor.value.copy(_.specularColor),_.specularColorMap&&(y.specularColorMap.value=_.specularColorMap,e(_.specularColorMap,y.specularColorMapTransform)),_.specularIntensityMap&&(y.specularIntensityMap.value=_.specularIntensityMap,e(_.specularIntensityMap,y.specularIntensityMapTransform))}function v(y,_){_.matcap&&(y.matcap.value=_.matcap)}function b(y,_){let A=t.get(_).light;y.referencePosition.value.setFromMatrixPosition(A.matrixWorld),y.nearDistance.value=A.shadow.camera.near,y.farDistance.value=A.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function mb(n,t,e,i){let s={},a={},l=[],o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function h(S,I){let E=I.program;i.uniformBlockBinding(S,E)}function f(S,I){let E=s[S.id];E===void 0&&(y(S),E=d(S),s[S.id]=E,S.addEventListener("dispose",A));let C=I.program;i.updateUBOMapping(S,C);let w=t.render.frame;a[S.id]!==w&&(p(S),a[S.id]=w)}function d(S){let I=g();S.__bindingPointIndex=I;let E=n.createBuffer(),C=S.__size,w=S.usage;return n.bindBuffer(n.UNIFORM_BUFFER,E),n.bufferData(n.UNIFORM_BUFFER,C,w),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,I,E),E}function g(){for(let S=0;S<o;S++)if(l.indexOf(S)===-1)return l.push(S),S;return se("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function p(S){let I=s[S.id],E=S.uniforms,C=S.__cache;n.bindBuffer(n.UNIFORM_BUFFER,I);for(let w=0,N=E.length;w<N;w++){let F=E[w];if(Array.isArray(F))for(let U=0,G=F.length;U<G;U++)x(F[U],w,U,C);else x(F,w,0,C)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function x(S,I,E,C){if(b(S,I,E,C)===!0){let w=S.__offset,N=S.value;if(Array.isArray(N)){let F=0;for(let U=0;U<N.length;U++){let G=N[U],V=_(G);v(G,S.__data,F),typeof G!="number"&&typeof G!="boolean"&&!G.isMatrix3&&!ArrayBuffer.isView(G)&&(F+=V.storage/Float32Array.BYTES_PER_ELEMENT)}}else v(N,S.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,w,S.__data)}}function v(S,I,E){typeof S=="number"||typeof S=="boolean"?I[0]=S:S.isMatrix3?(I[0]=S.elements[0],I[1]=S.elements[1],I[2]=S.elements[2],I[3]=0,I[4]=S.elements[3],I[5]=S.elements[4],I[6]=S.elements[5],I[7]=0,I[8]=S.elements[6],I[9]=S.elements[7],I[10]=S.elements[8],I[11]=0):ArrayBuffer.isView(S)?I.set(new S.constructor(S.buffer,S.byteOffset,I.length)):S.toArray(I,E)}function b(S,I,E,C){let w=S.value,N=I+"_"+E;if(C[N]===void 0)return typeof w=="number"||typeof w=="boolean"?C[N]=w:ArrayBuffer.isView(w)?C[N]=w.slice():C[N]=w.clone(),!0;{let F=C[N];if(typeof w=="number"||typeof w=="boolean"){if(F!==w)return C[N]=w,!0}else{if(ArrayBuffer.isView(w))return!0;if(F.equals(w)===!1)return F.copy(w),!0}}return!1}function y(S){let I=S.uniforms,E=0,C=16;for(let N=0,F=I.length;N<F;N++){let U=Array.isArray(I[N])?I[N]:[I[N]];for(let G=0,V=U.length;G<V;G++){let k=U[G],q=Array.isArray(k.value)?k.value:[k.value];for(let Z=0,B=q.length;Z<B;Z++){let K=q[Z],j=_(K),st=E%C,X=st%j.boundary,bt=st+X;E+=X,bt!==0&&C-bt<j.storage&&(E+=C-bt),k.__data=new Float32Array(j.storage/Float32Array.BYTES_PER_ELEMENT),k.__offset=E,E+=j.storage}}}let w=E%C;return w>0&&(E+=C-w),S.__size=E,S.__cache={},this}function _(S){let I={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(I.boundary=4,I.storage=4):S.isVector2?(I.boundary=8,I.storage=8):S.isVector3||S.isColor?(I.boundary=16,I.storage=12):S.isVector4?(I.boundary=16,I.storage=16):S.isMatrix3?(I.boundary=48,I.storage=48):S.isMatrix4?(I.boundary=64,I.storage=64):S.isTexture?ie("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(S)?(I.boundary=16,I.storage=S.byteLength):ie("WebGLRenderer: Unsupported uniform value type.",S),I}function A(S){let I=S.target;I.removeEventListener("dispose",A);let E=l.indexOf(I.__bindingPointIndex);l.splice(E,1),n.deleteBuffer(s[I.id]),delete s[I.id],delete a[I.id]}function T(){for(let S in s)n.deleteBuffer(s[S]);l=[],s={},a={}}return{bind:h,update:f,dispose:T}}function xb(){return yi===null&&(yi=new ol(gb,16,16,es,oi),yi.name="DFG_LUT",yi.minFilter=mn,yi.magFilter=mn,yi.wrapS=di,yi.wrapT=di,yi.generateMipmaps=!1,yi.needsUpdate=!0),yi}var Ig,Rg,Lg,Ng,Dg,Og,Fg,Ug,Bg,kg,zg,Vg,Hg,Gg,Xg,Wg,Yg,$g,qg,Zg,Jg,jg,Kg,Qg,tx,ex,nx,ix,sx,rx,ox,ax,lx,cx,hx,ux,fx,dx,px,mx,gx,xx,yx,_x,vx,bx,Mx,Sx,wx,Ex,Tx,Ax,Cx,Px,Ix,Rx,Lx,Nx,Dx,Ox,Fx,Ux,Bx,kx,zx,Vx,Hx,Gx,Xx,Wx,Yx,$x,qx,Zx,Jx,jx,Kx,Qx,ty,ey,ny,iy,sy,ry,oy,ay,ly,cy,hy,uy,fy,dy,py,my,gy,xy,yy,_y,vy,by,My,Sy,wy,Ey,Ty,Ay,Cy,Py,Iy,Ry,Ly,Ny,Dy,Oy,Fy,Uy,By,ky,zy,Vy,Hy,Gy,Xy,Wy,Yy,$y,qy,Zy,Jy,jy,Ky,Qy,t_,e_,n_,i_,s_,r_,o_,a_,l_,c_,xe,kt,_i,pc,h_,Rp,wr,g_,x_,y_,Ko,cp,lu,cu,hu,uu,__,Cs,gc,xc,I_,Lp,pu,Np,Dp,Op,dp,pp,mp,gp,xp,mu,gu,xu,fu,Er,_v,vv,vp,wv,mc,Iv,Rv,Nv,Ov,Uv,kv,Vv,Wv,_u,vu,Qv,ib,sb,rb,ob,Pp,Qo,du,ub,fb,bu,Mu,db,Fp,gb,yi,yc,ea=pe(()=>{au();au();Ig=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Rg=`#ifdef USE_ALPHAHASH
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
#endif`,Lg=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Ng=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Dg=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Og=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Fg=`#ifdef USE_AOMAP
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
#endif`,Ug=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Bg=`#ifdef USE_BATCHING
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
#endif`,kg=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,zg=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Vg=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Hg=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Gg=`#ifdef USE_IRIDESCENCE
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
#endif`,Xg=`#ifdef USE_BUMPMAP
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
#endif`,Wg=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Yg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,$g=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,qg=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Zg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Jg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,jg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Kg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Qg=`#define PI 3.141592653589793
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
} // validated`,tx=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,ex=`vec3 transformedNormal = objectNormal;
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
#endif`,nx=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ix=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,sx=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,rx=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ox="gl_FragColor = linearToOutputTexel( gl_FragColor );",ax=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,lx=`#ifdef USE_ENVMAP
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
#endif`,cx=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,hx=`#ifdef USE_ENVMAP
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
#endif`,ux=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,fx=`#ifdef USE_ENVMAP
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
#endif`,dx=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,px=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,mx=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,gx=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,xx=`#ifdef USE_GRADIENTMAP
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
}`,yx=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,_x=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,vx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,bx=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Mx=`#ifdef USE_ENVMAP
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
#endif`,Sx=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,wx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Ex=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Tx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Ax=`PhysicalMaterial material;
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
#endif`,Cx=`uniform sampler2D dfgLUT;
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
}`,Px=`
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
#endif`,Ix=`#if defined( RE_IndirectDiffuse )
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
#endif`,Rx=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Lx=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,Nx=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Dx=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ox=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Fx=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Ux=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Bx=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,kx=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,zx=`#if defined( USE_POINTS_UV )
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
#endif`,Vx=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Hx=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Gx=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Xx=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Wx=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Yx=`#ifdef USE_MORPHTARGETS
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
#endif`,$x=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,qx=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Zx=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Jx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,jx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Kx=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Qx=`#ifdef USE_NORMALMAP
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
#endif`,ty=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,ey=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,ny=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,iy=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,sy=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,ry=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,oy=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,ay=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,ly=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,cy=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,hy=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,uy=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,fy=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,dy=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,py=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,my=`float getShadowMask() {
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
}`,gy=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,xy=`#ifdef USE_SKINNING
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
#endif`,yy=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,_y=`#ifdef USE_SKINNING
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
#endif`,vy=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,by=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,My=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Sy=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,wy=`#ifdef USE_TRANSMISSION
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
#endif`,Ey=`#ifdef USE_TRANSMISSION
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
#endif`,Ty=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ay=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Cy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Py=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Iy=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Ry=`uniform sampler2D t2D;
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
}`,Ly=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ny=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Dy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Oy=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Fy=`#include <common>
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
}`,Uy=`#if DEPTH_PACKING == 3200
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
}`,By=`#define DISTANCE
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
}`,ky=`#define DISTANCE
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
}`,zy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Vy=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Hy=`uniform float scale;
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
}`,Gy=`uniform vec3 diffuse;
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
}`,Xy=`#include <common>
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
}`,Wy=`uniform vec3 diffuse;
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
}`,Yy=`#define LAMBERT
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
}`,$y=`#define LAMBERT
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
}`,qy=`#define MATCAP
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
}`,Zy=`#define MATCAP
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
}`,Jy=`#define NORMAL
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
}`,jy=`#define NORMAL
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
}`,Ky=`#define PHONG
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
}`,Qy=`#define PHONG
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
}`,t_=`#define STANDARD
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
}`,e_=`#define STANDARD
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
}`,n_=`#define TOON
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
}`,i_=`#define TOON
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
}`,s_=`uniform float size;
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
}`,r_=`uniform vec3 diffuse;
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
}`,o_=`#include <common>
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
}`,a_=`uniform vec3 color;
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
}`,l_=`uniform float rotation;
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
}`,c_=`uniform vec3 diffuse;
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
}`,xe={alphahash_fragment:Ig,alphahash_pars_fragment:Rg,alphamap_fragment:Lg,alphamap_pars_fragment:Ng,alphatest_fragment:Dg,alphatest_pars_fragment:Og,aomap_fragment:Fg,aomap_pars_fragment:Ug,batching_pars_vertex:Bg,batching_vertex:kg,begin_vertex:zg,beginnormal_vertex:Vg,bsdfs:Hg,iridescence_fragment:Gg,bumpmap_pars_fragment:Xg,clipping_planes_fragment:Wg,clipping_planes_pars_fragment:Yg,clipping_planes_pars_vertex:$g,clipping_planes_vertex:qg,color_fragment:Zg,color_pars_fragment:Jg,color_pars_vertex:jg,color_vertex:Kg,common:Qg,cube_uv_reflection_fragment:tx,defaultnormal_vertex:ex,displacementmap_pars_vertex:nx,displacementmap_vertex:ix,emissivemap_fragment:sx,emissivemap_pars_fragment:rx,colorspace_fragment:ox,colorspace_pars_fragment:ax,envmap_fragment:lx,envmap_common_pars_fragment:cx,envmap_pars_fragment:hx,envmap_pars_vertex:ux,envmap_physical_pars_fragment:Mx,envmap_vertex:fx,fog_vertex:dx,fog_pars_vertex:px,fog_fragment:mx,fog_pars_fragment:gx,gradientmap_pars_fragment:xx,lightmap_pars_fragment:yx,lights_lambert_fragment:_x,lights_lambert_pars_fragment:vx,lights_pars_begin:bx,lights_toon_fragment:Sx,lights_toon_pars_fragment:wx,lights_phong_fragment:Ex,lights_phong_pars_fragment:Tx,lights_physical_fragment:Ax,lights_physical_pars_fragment:Cx,lights_fragment_begin:Px,lights_fragment_maps:Ix,lights_fragment_end:Rx,lightprobes_pars_fragment:Lx,logdepthbuf_fragment:Nx,logdepthbuf_pars_fragment:Dx,logdepthbuf_pars_vertex:Ox,logdepthbuf_vertex:Fx,map_fragment:Ux,map_pars_fragment:Bx,map_particle_fragment:kx,map_particle_pars_fragment:zx,metalnessmap_fragment:Vx,metalnessmap_pars_fragment:Hx,morphinstance_vertex:Gx,morphcolor_vertex:Xx,morphnormal_vertex:Wx,morphtarget_pars_vertex:Yx,morphtarget_vertex:$x,normal_fragment_begin:qx,normal_fragment_maps:Zx,normal_pars_fragment:Jx,normal_pars_vertex:jx,normal_vertex:Kx,normalmap_pars_fragment:Qx,clearcoat_normal_fragment_begin:ty,clearcoat_normal_fragment_maps:ey,clearcoat_pars_fragment:ny,iridescence_pars_fragment:iy,opaque_fragment:sy,packing:ry,premultiplied_alpha_fragment:oy,project_vertex:ay,dithering_fragment:ly,dithering_pars_fragment:cy,roughnessmap_fragment:hy,roughnessmap_pars_fragment:uy,shadowmap_pars_fragment:fy,shadowmap_pars_vertex:dy,shadowmap_vertex:py,shadowmask_pars_fragment:my,skinbase_vertex:gy,skinning_pars_vertex:xy,skinning_vertex:yy,skinnormal_vertex:_y,specularmap_fragment:vy,specularmap_pars_fragment:by,tonemapping_fragment:My,tonemapping_pars_fragment:Sy,transmission_fragment:wy,transmission_pars_fragment:Ey,uv_pars_fragment:Ty,uv_pars_vertex:Ay,uv_vertex:Cy,worldpos_vertex:Py,background_vert:Iy,background_frag:Ry,backgroundCube_vert:Ly,backgroundCube_frag:Ny,cube_vert:Dy,cube_frag:Oy,depth_vert:Fy,depth_frag:Uy,distance_vert:By,distance_frag:ky,equirect_vert:zy,equirect_frag:Vy,linedashed_vert:Hy,linedashed_frag:Gy,meshbasic_vert:Xy,meshbasic_frag:Wy,meshlambert_vert:Yy,meshlambert_frag:$y,meshmatcap_vert:qy,meshmatcap_frag:Zy,meshnormal_vert:Jy,meshnormal_frag:jy,meshphong_vert:Ky,meshphong_frag:Qy,meshphysical_vert:t_,meshphysical_frag:e_,meshtoon_vert:n_,meshtoon_frag:i_,points_vert:s_,points_frag:r_,shadow_vert:o_,shadow_frag:a_,sprite_vert:l_,sprite_frag:c_},kt={common:{diffuse:{value:new le(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new me},alphaMap:{value:null},alphaMapTransform:{value:new me},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new me}},envmap:{envMap:{value:null},envMapRotation:{value:new me},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new me}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new me}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new me},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new me},normalScale:{value:new jt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new me},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new me}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new me}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new me}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new le(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new tt},probesMax:{value:new tt},probesResolution:{value:new tt}},points:{diffuse:{value:new le(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new me},alphaTest:{value:0},uvTransform:{value:new me}},sprite:{diffuse:{value:new le(16777215)},opacity:{value:1},center:{value:new jt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new me},alphaMap:{value:null},alphaMapTransform:{value:new me},alphaTest:{value:0}}},_i={basic:{uniforms:Mn([kt.common,kt.specularmap,kt.envmap,kt.aomap,kt.lightmap,kt.fog]),vertexShader:xe.meshbasic_vert,fragmentShader:xe.meshbasic_frag},lambert:{uniforms:Mn([kt.common,kt.specularmap,kt.envmap,kt.aomap,kt.lightmap,kt.emissivemap,kt.bumpmap,kt.normalmap,kt.displacementmap,kt.fog,kt.lights,{emissive:{value:new le(0)},envMapIntensity:{value:1}}]),vertexShader:xe.meshlambert_vert,fragmentShader:xe.meshlambert_frag},phong:{uniforms:Mn([kt.common,kt.specularmap,kt.envmap,kt.aomap,kt.lightmap,kt.emissivemap,kt.bumpmap,kt.normalmap,kt.displacementmap,kt.fog,kt.lights,{emissive:{value:new le(0)},specular:{value:new le(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:xe.meshphong_vert,fragmentShader:xe.meshphong_frag},standard:{uniforms:Mn([kt.common,kt.envmap,kt.aomap,kt.lightmap,kt.emissivemap,kt.bumpmap,kt.normalmap,kt.displacementmap,kt.roughnessmap,kt.metalnessmap,kt.fog,kt.lights,{emissive:{value:new le(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:xe.meshphysical_vert,fragmentShader:xe.meshphysical_frag},toon:{uniforms:Mn([kt.common,kt.aomap,kt.lightmap,kt.emissivemap,kt.bumpmap,kt.normalmap,kt.displacementmap,kt.gradientmap,kt.fog,kt.lights,{emissive:{value:new le(0)}}]),vertexShader:xe.meshtoon_vert,fragmentShader:xe.meshtoon_frag},matcap:{uniforms:Mn([kt.common,kt.bumpmap,kt.normalmap,kt.displacementmap,kt.fog,{matcap:{value:null}}]),vertexShader:xe.meshmatcap_vert,fragmentShader:xe.meshmatcap_frag},points:{uniforms:Mn([kt.points,kt.fog]),vertexShader:xe.points_vert,fragmentShader:xe.points_frag},dashed:{uniforms:Mn([kt.common,kt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:xe.linedashed_vert,fragmentShader:xe.linedashed_frag},depth:{uniforms:Mn([kt.common,kt.displacementmap]),vertexShader:xe.depth_vert,fragmentShader:xe.depth_frag},normal:{uniforms:Mn([kt.common,kt.bumpmap,kt.normalmap,kt.displacementmap,{opacity:{value:1}}]),vertexShader:xe.meshnormal_vert,fragmentShader:xe.meshnormal_frag},sprite:{uniforms:Mn([kt.sprite,kt.fog]),vertexShader:xe.sprite_vert,fragmentShader:xe.sprite_frag},background:{uniforms:{uvTransform:{value:new me},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:xe.background_vert,fragmentShader:xe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new me}},vertexShader:xe.backgroundCube_vert,fragmentShader:xe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:xe.cube_vert,fragmentShader:xe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:xe.equirect_vert,fragmentShader:xe.equirect_frag},distance:{uniforms:Mn([kt.common,kt.displacementmap,{referencePosition:{value:new tt},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:xe.distance_vert,fragmentShader:xe.distance_frag},shadow:{uniforms:Mn([kt.lights,kt.fog,{color:{value:new le(0)},opacity:{value:1}}]),vertexShader:xe.shadow_vert,fragmentShader:xe.shadow_frag}};_i.physical={uniforms:Mn([_i.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new me},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new me},clearcoatNormalScale:{value:new jt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new me},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new me},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new me},sheen:{value:0},sheenColor:{value:new le(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new me},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new me},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new me},transmissionSamplerSize:{value:new jt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new me},attenuationDistance:{value:0},attenuationColor:{value:new le(0)},specularColor:{value:new le(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new me},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new me},anisotropyVector:{value:new jt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new me}}]),vertexShader:xe.meshphysical_vert,fragmentShader:xe.meshphysical_frag};pc={r:0,b:0,g:0},h_=new Oe,Rp=new me;Rp.set(-1,0,0,0,1,0,0,0,1);wr=4,g_=6,x_=20,y_=256,Ko=new gr,cp=new le,lu=null,cu=0,hu=0,uu=!1,__=new tt,Cs=new tt,gc=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,i=.1,s=100,a={}){let{size:l=256,position:o=__}=a;lu=this._renderer.getRenderTarget(),cu=this._renderer.getActiveCubeFace(),hu=this._renderer.getActiveMipmapLevel(),uu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(l);let h=this._allocateTargets();return h.depthBuffer=!0,this._sceneToCubeUV(t,i,s,h,o),e>0&&this._blur(h,0,0,e),this._applyPMREM(h),this._cleanup(h),h}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=fp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=up(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(lu,cu,hu),this._renderer.xr.enabled=uu,t.scissorTest=!1,Sr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Ki||t.mapping===Es?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),lu=this._renderer.getRenderTarget(),cu=this._renderer.getActiveCubeFace(),hu=this._renderer.getActiveMipmapLevel(),uu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:mn,minFilter:mn,generateMipmaps:!1,type:oi,format:Gn,colorSpace:go,depthBuffer:!1},s=hp(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=hp(t,e,i);let{_lodMax:a}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=v_(a)),this._blurMaterial=M_(a,t,e),this._ggxMaterial=b_(a,t,e)}return s}_compileMaterial(t){let e=new Re(new We,t);this._renderer.compile(e,Ko)}_sceneToCubeUV(t,e,i,s,a){let h=new vn(90,1,e,i),f=[1,-1,1,1,1,1],d=[1,1,1,-1,-1,-1],g=this._renderer,p=g.autoClear,x=g.toneMapping;g.getClearColor(cp),g.toneMapping=ii,g.autoClear=!1,g.state.buffers.depth.getReversed()&&(g.setRenderTarget(s),g.clearDepth(),g.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Re(new Xi,new Fn({name:"PMREM.Background",side:An,depthWrite:!1,depthTest:!1})));let b=this._backgroundBox,y=b.material,_=!1,A=t.background;A?A.isColor&&(y.color.copy(A),t.background=null,_=!0):(y.color.copy(cp),_=!0);for(let T=0;T<6;T++){let S=T%3;S===0?(h.up.set(0,f[T],0),h.position.set(a.x,a.y,a.z),h.lookAt(a.x+d[T],a.y,a.z)):S===1?(h.up.set(0,0,f[T]),h.position.set(a.x,a.y,a.z),h.lookAt(a.x,a.y+d[T],a.z)):(h.up.set(0,f[T],0),h.position.set(a.x,a.y,a.z),h.lookAt(a.x,a.y,a.z+d[T]));let I=this._cubeSize;Sr(s,S*I,T>2?I:0,I,I),g.setRenderTarget(s),_&&g.render(b,h),g.render(t,h)}g.toneMapping=x,g.autoClear=p,t.background=A}_textureToCubeUV(t,e){let i=this._renderer,s=t.mapping===Ki||t.mapping===Es;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=fp()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=up());let a=s?this._cubemapMaterial:this._equirectMaterial,l=this._lodMeshes[0];l.material=a;let o=a.uniforms;o.envMap.value=t;let h=this._cubeSize;Sr(e,0,0,3*h,2*h),i.setRenderTarget(e),i.render(l,Ko)}_applyPMREM(t){let e=this._renderer,i=e.autoClear;e.autoClear=!1;let s=this._lodMeshes.length;for(let a=1;a<s;a++)this._applyGGXFilter(t,a-1,a);e.autoClear=i}_applyGGXFilter(t,e,i){let s=this._renderer,a=this._pingPongRenderTarget,l=this._ggxMaterial,o=this._lodMeshes[i];o.material=l;let h=l.uniforms,f=i/(this._lodMeshes.length-1),d=e/(this._lodMeshes.length-1),g=Math.sqrt(f*f-d*d),p=f*1.25,x=g*p,{_lodMax:v}=this,b=this._sizeLods[i],y=3*b*(i>v-wr?i-v+wr:0),_=4*(this._cubeSize-b);h.envMap.value=t.texture,h.roughness.value=x,h.mipInt.value=v-e,Sr(a,y,_,3*b,2*b),s.setRenderTarget(a),s.render(o,Ko),h.envMap.value=a.texture,h.roughness.value=0,h.mipInt.value=v-i,Sr(t,y,_,3*b,2*b),s.setRenderTarget(t),s.render(o,Ko)}_blur(t,e,i,s){let a=this._pingPongRenderTarget,l=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(t,a,e,i,l),this._blurPass(a,t,i,i,l)}_blurPass(t,e,i,s,a){let l=this._renderer,o=this._blurMaterial,h=this._lodMeshes[s];h.material=o;let f=o.uniforms;f.envMap.value=t.texture,f.sigma.value=a,f.mipInt.value=this._lodMax-i;let d=this._sizeLods[s],g=3*d*(s>this._lodMax-wr?s-this._lodMax+wr:0),p=4*(this._cubeSize-d);Sr(e,g,p,3*d,2*d),l.setRenderTarget(e),l.render(h,Ko)}};xc=class extends Pn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new To(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Xi(5,5,5),a=new Un({name:"CubemapFromEquirect",uniforms:As(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:An,blending:xi});a.uniforms.tEquirect.value=e;let l=new Re(s,a),o=e.minFilter;return e.minFilter===Qi&&(e.minFilter=mn),new wl(1,10,this).update(t,l),e.minFilter=o,l.geometry.dispose(),l.material.dispose(),this}clear(t,e=!0,i=!0,s=!0){let a=t.getRenderTarget();for(let l=0;l<6;l++)t.setRenderTarget(this,l),t.clear(e,i,s);t.setRenderTarget(a)}};I_={[Bh]:"LINEAR_TONE_MAPPING",[kh]:"REINHARD_TONE_MAPPING",[zh]:"CINEON_TONE_MAPPING",[Vh]:"ACES_FILMIC_TONE_MAPPING",[Gh]:"AGX_TONE_MAPPING",[Xh]:"NEUTRAL_TONE_MAPPING",[Hh]:"CUSTOM_TONE_MAPPING"};Lp=new Tn,pu=new Gi(1,1),Np=new vo,Dp=new sl,Op=new To,dp=[],pp=[],mp=new Float32Array(16),gp=new Float32Array(9),xp=new Float32Array(4);mu=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=j_(e.type)}},gu=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=xv(e.type)}},xu=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){let s=this.seq;for(let a=0,l=s.length;a!==l;++a){let o=s[a];o.setValue(t,e[o.id],i)}}},fu=/(\w+)(\])?(\[|\.)?/g;Er=class{constructor(t,e){this.seq=[],this.map={};let i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let l=0;l<i;++l){let o=t.getActiveUniform(e,l),h=t.getUniformLocation(e,o.name);yv(o,h,this)}let s=[],a=[];for(let l of this.seq)l.type===t.SAMPLER_2D_SHADOW||l.type===t.SAMPLER_CUBE_SHADOW||l.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(l):a.push(l);s.length>0&&(this.seq=s.concat(a))}setValue(t,e,i,s){let a=this.map[e];a!==void 0&&a.setValue(t,i,s)}setOptional(t,e,i){let s=e[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,e,i,s){for(let a=0,l=e.length;a!==l;++a){let o=e[a],h=i[o.id];h.needsUpdate!==!1&&o.setValue(t,h.value,s)}}static seqWithValue(t,e){let i=[];for(let s=0,a=t.length;s!==a;++s){let l=t[s];l.id in e&&i.push(l)}return i}};_v=37297,vv=0;vp=new me;wv={[Bh]:"Linear",[kh]:"Reinhard",[zh]:"Cineon",[Vh]:"ACESFilmic",[Gh]:"AgX",[Xh]:"Neutral",[Hh]:"Custom"};mc=new tt;Iv=/^[ \t]*#include +<([\w\d./]+)>/gm;Rv=new Map;Nv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;Ov={[Go]:"SHADOWMAP_TYPE_PCF",[_r]:"SHADOWMAP_TYPE_VSM"};Uv={[Ki]:"ENVMAP_TYPE_CUBE",[Es]:"ENVMAP_TYPE_CUBE",[Xo]:"ENVMAP_TYPE_CUBE_UV"};kv={[Es]:"ENVMAP_MODE_REFRACTION"};Vv={[Uh]:"ENVMAP_BLENDING_MULTIPLY",[Bd]:"ENVMAP_BLENDING_MIX",[kd]:"ENVMAP_BLENDING_ADD"};Wv=0,_u=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,i){let s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(i)===!1&&(s.add(i),i.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){let e=this.shaderCache,i=e.get(t);return i===void 0&&(i=new vu(t),e.set(t,i)),i}},vu=class{constructor(t){this.id=Wv++,this.code=t,this.usedTimes=0}};Qv=0;ib=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,sb=`uniform sampler2D shadow_pass;
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
}`,rb=[new tt(1,0,0),new tt(-1,0,0),new tt(0,1,0),new tt(0,-1,0),new tt(0,0,1),new tt(0,0,-1)],ob=[new tt(0,-1,0),new tt(0,-1,0),new tt(0,0,1),new tt(0,0,-1),new tt(0,-1,0),new tt(0,-1,0)],Pp=new Oe,Qo=new tt,du=new tt;ub=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,fb=`
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

}`,bu=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let i=new Co(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,i=new Un({vertexShader:ub,fragmentShader:fb,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Re(new No(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Mu=class extends ei{constructor(t,e){super();let i=this,s=null,a=1,l=null,o="local-floor",h=1,f=null,d=null,g=null,p=null,x=null,v=null,b=typeof XRWebGLBinding<"u",y=new bu,_={},A=e.getContextAttributes(),T=null,S=null,I=[],E=[],C=new jt,w=null,N=null,F=new vn;F.viewport=new $e;let U=new vn;U.viewport=new $e;let G=[F,U],V=new El,k=null,q=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ut){let gt=I[ut];return gt===void 0&&(gt=new hr,I[ut]=gt),gt.getTargetRaySpace()},this.getControllerGrip=function(ut){let gt=I[ut];return gt===void 0&&(gt=new hr,I[ut]=gt),gt.getGripSpace()},this.getHand=function(ut){let gt=I[ut];return gt===void 0&&(gt=new hr,I[ut]=gt),gt.getHandSpace()};function Z(ut){let gt=E.indexOf(ut.inputSource);if(gt===-1)return;let Dt=I[gt];Dt!==void 0&&(Dt.update(ut.inputSource,ut.frame,f||l),Dt.dispatchEvent({type:ut.type,data:ut.inputSource}))}function B(){s.removeEventListener("select",Z),s.removeEventListener("selectstart",Z),s.removeEventListener("selectend",Z),s.removeEventListener("squeeze",Z),s.removeEventListener("squeezestart",Z),s.removeEventListener("squeezeend",Z),s.removeEventListener("end",B),s.removeEventListener("inputsourceschange",K);for(let ut=0;ut<I.length;ut++){let gt=E[ut];gt!==null&&(E[ut]=null,I[ut].disconnect(gt))}k=null,q=null,y.reset();for(let ut in _)delete _[ut];if(t.setRenderTarget(T),x=null,p=null,g=null,s=null,S=null,te.stop(),i.isPresenting=!1,t.setPixelRatio(w),t.setSize(C.width,C.height,!1),N!==null){let ut=N.camera;ut.fov=N.fov,ut.zoom=N.zoom,ut.updateProjectionMatrix(),N=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ut){a=ut,i.isPresenting===!0&&ie("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ut){o=ut,i.isPresenting===!0&&ie("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return f||l},this.setReferenceSpace=function(ut){f=ut},this.getBaseLayer=function(){return p!==null?p:x},this.getBinding=function(){return g===null&&b&&(g=new XRWebGLBinding(s,e)),g},this.getFrame=function(){return v},this.getSession=function(){return s},this.setSession=async function(ut){if(s=ut,s!==null){if(T=t.getRenderTarget(),s.addEventListener("select",Z),s.addEventListener("selectstart",Z),s.addEventListener("selectend",Z),s.addEventListener("squeeze",Z),s.addEventListener("squeezestart",Z),s.addEventListener("squeezeend",Z),s.addEventListener("end",B),s.addEventListener("inputsourceschange",K),A.xrCompatible!==!0&&await e.makeXRCompatible(),w=t.getPixelRatio(),t.getSize(C),b&&"createProjectionLayer"in XRWebGLBinding.prototype){let Dt=null,ne=null,Ot=null;A.depth&&(Ot=A.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Dt=A.stencil?ts:pi,ne=A.stencil?Mr:si);let ce={colorFormat:e.RGBA8,depthFormat:Ot,scaleFactor:a};g=this.getBinding(),p=g.createProjectionLayer(ce),s.updateRenderState({layers:[p]}),t.setPixelRatio(1),t.setSize(p.textureWidth,p.textureHeight,!1),S=new Pn(p.textureWidth,p.textureHeight,{format:Gn,type:In,depthTexture:new Gi(p.textureWidth,p.textureHeight,ne,void 0,void 0,void 0,void 0,void 0,void 0,Dt),stencilBuffer:A.stencil,colorSpace:t.outputColorSpace,samples:A.antialias?4:0,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1,storeMultisampledDepthBuffer:p.ignoreDepthValues===!1,storeMultisampledStencilBuffer:p.ignoreDepthValues===!1})}else{let Dt={antialias:A.antialias,alpha:!0,depth:A.depth,stencil:A.stencil,framebufferScaleFactor:a};x=new XRWebGLLayer(s,e,Dt),s.updateRenderState({baseLayer:x}),t.setPixelRatio(1),t.setSize(x.framebufferWidth,x.framebufferHeight,!1),S=new Pn(x.framebufferWidth,x.framebufferHeight,{format:Gn,type:In,colorSpace:t.outputColorSpace,stencilBuffer:A.stencil,resolveDepthBuffer:x.ignoreDepthValues===!1,resolveStencilBuffer:x.ignoreDepthValues===!1,storeMultisampledDepthBuffer:x.ignoreDepthValues===!1,storeMultisampledStencilBuffer:x.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(h),f=null,l=await s.requestReferenceSpace(o),te.setContext(s),te.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function K(ut){for(let gt=0;gt<ut.removed.length;gt++){let Dt=ut.removed[gt],ne=E.indexOf(Dt);ne>=0&&(E[ne]=null,I[ne].disconnect(Dt))}for(let gt=0;gt<ut.added.length;gt++){let Dt=ut.added[gt],ne=E.indexOf(Dt);if(ne===-1){for(let ce=0;ce<I.length;ce++)if(ce>=E.length){E.push(Dt),ne=ce;break}else if(E[ce]===null){E[ce]=Dt,ne=ce;break}if(ne===-1)break}let Ot=I[ne];Ot&&Ot.connect(Dt)}}let j=new tt,st=new tt;function X(ut,gt,Dt){j.setFromMatrixPosition(gt.matrixWorld),st.setFromMatrixPosition(Dt.matrixWorld);let ne=j.distanceTo(st),Ot=gt.projectionMatrix.elements,ce=Dt.projectionMatrix.elements,be=Ot[14]/(Ot[10]-1),he=Ot[14]/(Ot[10]+1),ge=(Ot[9]+1)/Ot[5],Se=(Ot[9]-1)/Ot[5],ue=(Ot[8]-1)/Ot[0],Ae=(ce[8]+1)/ce[0],Ue=be*ue,Ye=be*Ae,Be=ne/(-ue+Ae),ke=Be*-ue;if(gt.matrixWorld.decompose(ut.position,ut.quaternion,ut.scale),ut.translateX(ke),ut.translateZ(Be),ut.matrixWorld.compose(ut.position,ut.quaternion,ut.scale),ut.matrixWorldInverse.copy(ut.matrixWorld).invert(),Ot[10]===-1)ut.projectionMatrix.copy(gt.projectionMatrix),ut.projectionMatrixInverse.copy(gt.projectionMatrixInverse);else{let et=be+Be,Qe=he+Be,Ce=Ue-ke,z=Ye+(ne-ke),R=ge*he/Qe*et,rt=Se*he/Qe*et;ut.projectionMatrix.makePerspective(Ce,z,R,rt,et,Qe),ut.projectionMatrixInverse.copy(ut.projectionMatrix).invert()}}function bt(ut,gt){gt===null?ut.matrixWorld.copy(ut.matrix):ut.matrixWorld.multiplyMatrices(gt.matrixWorld,ut.matrix),ut.matrixWorldInverse.copy(ut.matrixWorld).invert()}this.updateCamera=function(ut){if(s===null)return;let gt=ut.near,Dt=ut.far;y.texture!==null&&(y.depthNear>0&&(gt=y.depthNear),y.depthFar>0&&(Dt=y.depthFar)),V.near=U.near=F.near=gt,V.far=U.far=F.far=Dt,(k!==V.near||q!==V.far)&&(s.updateRenderState({depthNear:V.near,depthFar:V.far}),k=V.near,q=V.far),V.layers.mask=ut.layers.mask|6,F.layers.mask=V.layers.mask&-5,U.layers.mask=V.layers.mask&-3;let ne=ut.parent,Ot=V.cameras;bt(V,ne);for(let ce=0;ce<Ot.length;ce++)bt(Ot[ce],ne);Ot.length===2?X(V,F,U):V.projectionMatrix.copy(F.projectionMatrix),N===null&&ut.isPerspectiveCamera&&(N={camera:ut,fov:ut.fov,zoom:ut.zoom}),St(ut,V,ne)};function St(ut,gt,Dt){Dt===null?ut.matrix.copy(gt.matrixWorld):(ut.matrix.copy(Dt.matrixWorld),ut.matrix.invert(),ut.matrix.multiply(gt.matrixWorld)),ut.matrix.decompose(ut.position,ut.quaternion,ut.scale),ut.updateMatrixWorld(!0),ut.projectionMatrix.copy(gt.projectionMatrix),ut.projectionMatrixInverse.copy(gt.projectionMatrixInverse),ut.isPerspectiveCamera&&(ut.fov=ar*2*Math.atan(1/ut.projectionMatrix.elements[5]),ut.zoom=1)}this.getCamera=function(){return V},this.getFoveation=function(){if(!(p===null&&x===null))return h},this.setFoveation=function(ut){h=ut,p!==null&&(p.fixedFoveation=ut),x!==null&&x.fixedFoveation!==void 0&&(x.fixedFoveation=ut)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(V)},this.getCameraTexture=function(ut){return _[ut]};let Vt=null;function $t(ut,gt){if(d=gt.getViewerPose(f||l),v=gt,d!==null){let Dt=d.views;x!==null&&(t.setRenderTargetFramebuffer(S,x.framebuffer),t.setRenderTarget(S));let ne=!1;Dt.length!==V.cameras.length&&(V.cameras.length=0,ne=!0);for(let he=0;he<Dt.length;he++){let ge=Dt[he],Se=null;if(x!==null)Se=x.getViewport(ge);else{let Ae=g.getViewSubImage(p,ge);Se=Ae.viewport,he===0&&(t.setRenderTargetTextures(S,Ae.colorTexture,Ae.depthStencilTexture),t.setRenderTarget(S))}let ue=G[he];ue===void 0&&(ue=new vn,ue.layers.enable(he),ue.viewport=new $e,G[he]=ue),ue.matrix.fromArray(ge.transform.matrix),ue.matrix.decompose(ue.position,ue.quaternion,ue.scale),ue.projectionMatrix.fromArray(ge.projectionMatrix),ue.projectionMatrixInverse.copy(ue.projectionMatrix).invert(),ue.viewport.set(Se.x,Se.y,Se.width,Se.height),he===0&&(V.matrix.copy(ue.matrix),V.matrix.decompose(V.position,V.quaternion,V.scale)),ne===!0&&V.cameras.push(ue)}let Ot=s.enabledFeatures;if(Ot&&Ot.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&b){g=i.getBinding();let he=g.getDepthInformation(Dt[0]);he&&he.isValid&&he.texture&&y.init(he,s.renderState)}if(Ot&&Ot.includes("camera-access")&&b){t.state.unbindTexture(),g=i.getBinding();for(let he=0;he<Dt.length;he++){let ge=Dt[he].camera;if(ge){let Se=_[ge];Se||(Se=new Co,_[ge]=Se);let ue=g.getCameraImage(ge);Se.sourceTexture=ue}}}}for(let Dt=0;Dt<I.length;Dt++){let ne=E[Dt],Ot=I[Dt];ne!==null&&Ot!==void 0&&Ot.update(ne,gt,f||l)}Vt&&Vt(ut,gt),gt.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:gt}),v=null}let te=new Ip;te.setAnimationLoop($t),this.setAnimationLoop=function(ut){Vt=ut},this.dispose=function(){}}},db=new Oe,Fp=new me;Fp.set(-1,0,0,0,1,0,0,0,1);gb=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),yi=null;yc=class{constructor(t={}){let{canvas:e=Jd(),context:i=null,depth:s=!0,stencil:a=!1,alpha:l=!1,antialias:o=!1,premultipliedAlpha:h=!0,preserveDrawingBuffer:f=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:g=!1,reversedDepthBuffer:p=!1,outputBufferType:x=In}=t;this.isWebGLRenderer=!0;let v;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");v=i.getContextAttributes().alpha}else v=l;let b=x,y=new Set([Dl,Nl,Ll]),_=new Set([In,si,br,Mr,Il,Rl]),A=new Uint32Array(4),T=new Int32Array(4),S=new tt,I=null,E=null,C=[],w=[],N=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ii,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let F=this,U=!1,G=null,V=null,k=null,q=null;this._outputColorSpace=En;let Z=0,B=0,K=null,j=-1,st=null,X=new $e,bt=new $e,St=null,Vt=new le(0),$t=0,te=e.width,ut=e.height,gt=1,Dt=null,ne=null,Ot=new $e(0,0,te,ut),ce=new $e(0,0,te,ut),be=!1,he=new fr,ge=!1,Se=!1,ue=new Oe,Ae=new tt,Ue=new $e,Ye={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Be=!1;function ke(){return K===null?gt:1}let et=i;function Qe(L,J){return e.getContext(L,J)}let Ce,z,R,rt,ft,mt,Tt,Pt,xt,Mt,W,Xt,Lt,At,qt,Kt,ae,Q,Rt,yt,Ct,Ut,wt;try{let L={alpha:!0,depth:s,stencil:a,antialias:o,premultipliedAlpha:h,preserveDrawingBuffer:f,powerPreference:d,failIfMajorPerformanceCaveat:g};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"186"}`),e.addEventListener("webglcontextlost",Le,!1),e.addEventListener("webglcontextrestored",Te,!1),e.addEventListener("webglcontextcreationerror",Sn,!1),et===null){let J="webgl2";if(et=Qe(J,L),et===null)throw Qe(J)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Ht()}catch(L){throw e.removeEventListener("webglcontextlost",Le,!1),e.removeEventListener("webglcontextrestored",Te,!1),e.removeEventListener("webglcontextcreationerror",Sn,!1),se("WebGLRenderer: "+L.message),L}function Ht(){Ce=new w_(et),Ce.init(),Ct=new hb(et,Ce),z=new p_(et,Ce,t,Ct),R=new lb(et,Ce),z.reversedDepthBuffer&&p&&R.buffers.depth.setReversed(!0),V=et.createFramebuffer(),k=et.createFramebuffer(),q=et.createFramebuffer(),rt=new A_(et),ft=new qv,mt=new cb(et,Ce,R,ft,z,Ct,rt),Tt=new S_(F),Pt=new Pg(et),Ut=new f_(et,Pt),xt=new E_(et,Pt,rt,Ut),Mt=new P_(et,xt,Pt,Ut,rt),Q=new C_(et,z,mt),qt=new m_(ft),W=new $v(F,Tt,Ce,z,Ut,qt),Xt=new pb(F,ft),Lt=new Jv,At=new nb(Ce),ae=new u_(F,Tt,R,Mt,v,h),Kt=new ab(F,Mt,z),wt=new mb(et,rt,z,R),Rt=new d_(et,Ce,rt),yt=new T_(et,Ce,rt),rt.programs=W.programs,F.capabilities=z,F.extensions=Ce,F.properties=ft,F.renderLists=Lt,F.shadowMap=Kt,F.state=R,F.info=rt}b!==In&&(N=new R_(b,e.width,e.height,o,s,a));let Gt=new Mu(F,et);this.xr=Gt,this.getContext=function(){return et},this.getContextAttributes=function(){return et.getContextAttributes()},this.forceContextLoss=function(){let L=Ce.get("WEBGL_lose_context");L&&L.loseContext()},this.forceContextRestore=function(){let L=Ce.get("WEBGL_lose_context");L&&L.restoreContext()},this.getPixelRatio=function(){return gt},this.setPixelRatio=function(L){L!==void 0&&(gt=L,this.setSize(te,ut,!1))},this.getSize=function(L){return L.set(te,ut)},this.setSize=function(L,J,at=!0){if(Gt.isPresenting){ie("WebGLRenderer: Can't change size while VR device is presenting.");return}te=L,ut=J,e.width=Math.floor(L*gt),e.height=Math.floor(J*gt),at===!0&&(e.style.width=L+"px",e.style.height=J+"px"),N!==null&&N.setSize(e.width,e.height),this.setViewport(0,0,L,J)},this.getDrawingBufferSize=function(L){return L.set(te*gt,ut*gt).floor()},this.setDrawingBufferSize=function(L,J,at){te=L,ut=J,gt=at,e.width=Math.floor(L*at),e.height=Math.floor(J*at),this.setViewport(0,0,L,J)},this.setEffects=function(L){if(b===In){se("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(L){for(let J=0;J<L.length;J++)if(L[J].isOutputPass===!0){ie("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}N.setEffects(L||[])},this.getCurrentViewport=function(L){return L.copy(X)},this.getViewport=function(L){return L.copy(Ot)},this.setViewport=function(L,J,at,lt){L.isVector4?Ot.set(L.x,L.y,L.z,L.w):Ot.set(L,J,at,lt),R.viewport(X.copy(Ot).multiplyScalar(gt).round())},this.getScissor=function(L){return L.copy(ce)},this.setScissor=function(L,J,at,lt){L.isVector4?ce.set(L.x,L.y,L.z,L.w):ce.set(L,J,at,lt),R.scissor(bt.copy(ce).multiplyScalar(gt).round())},this.getScissorTest=function(){return be},this.setScissorTest=function(L){R.setScissorTest(be=L)},this.setOpaqueSort=function(L){Dt=L},this.setTransparentSort=function(L){ne=L},this.getClearColor=function(L){return L.copy(ae.getClearColor())},this.setClearColor=function(){ae.setClearColor(...arguments)},this.getClearAlpha=function(){return ae.getClearAlpha()},this.setClearAlpha=function(){ae.setClearAlpha(...arguments)},this.clear=function(L=!0,J=!0,at=!0){let lt=0;if(L){let ct=!1;if(K!==null){let Ft=K.texture.format;ct=y.has(Ft)}if(ct){let Ft=K.texture.type,It=_.has(Ft),Bt=ae.getClearColor(),Wt=ae.getClearAlpha(),Zt=Bt.r,Nt=Bt.g,ye=Bt.b;It?(A[0]=Zt,A[1]=Nt,A[2]=ye,A[3]=Wt,et.clearBufferuiv(et.COLOR,0,A)):(T[0]=Zt,T[1]=Nt,T[2]=ye,T[3]=Wt,et.clearBufferiv(et.COLOR,0,T))}else lt|=et.COLOR_BUFFER_BIT}J&&(lt|=et.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),at&&(lt|=et.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),lt!==0&&et.clear(lt)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(L){L.setRenderer(this),G=L},this.dispose=function(){e.removeEventListener("webglcontextlost",Le,!1),e.removeEventListener("webglcontextrestored",Te,!1),e.removeEventListener("webglcontextcreationerror",Sn,!1),ae.dispose(),Lt.dispose(),At.dispose(),ft.dispose(),Tt.dispose(),Mt.dispose(),Ut.dispose(),wt.dispose(),W.dispose(),Gt.dispose(),Gt.removeEventListener("sessionstart",os),Gt.removeEventListener("sessionend",as),qn.stop()};function Le(L){L.preventDefault(),_o("WebGLRenderer: Context Lost."),U=!0}function Te(){_o("WebGLRenderer: Context Restored."),U=!1;let L=rt.autoReset,J=Kt.enabled,at=Kt.autoUpdate,lt=Kt.needsUpdate,ct=Kt.type;Ht(),rt.autoReset=L,Kt.enabled=J,Kt.autoUpdate=at,Kt.needsUpdate=lt,Kt.type=ct}function Sn(L){se("WebGLRenderer: A WebGL context could not be created. Reason: ",L.statusMessage)}function gn(L){let J=L.target;J.removeEventListener("dispose",gn),Ns(J)}function Ns(L){$n(L),ft.remove(L)}function $n(L){let J=ft.get(L).programs;J!==void 0&&(J.forEach(function(at){W.releaseProgram(at)}),L.isShaderMaterial&&W.releaseShaderCache(L))}this.renderBufferDirect=function(L,J,at,lt,ct,Ft){J===null&&(J=Ye);let It=ct.isMesh&&ct.matrixWorld.determinantAffine()<0,Bt=re(L,J,at,lt,ct);R.setMaterial(lt,It);let Wt=at.index,Zt=1;if(lt.wireframe===!0){if(Wt=xt.getWireframeAttribute(at),Wt===void 0)return;Zt=2}let Nt=at.drawRange,ye=at.attributes.position,Yt=Nt.start*Zt,Ie=(Nt.start+Nt.count)*Zt;Ft!==null&&(Yt=Math.max(Yt,Ft.start*Zt),Ie=Math.min(Ie,(Ft.start+Ft.count)*Zt)),Wt!==null?(Yt=Math.max(Yt,0),Ie=Math.min(Ie,Wt.count)):ye!=null&&(Yt=Math.max(Yt,0),Ie=Math.min(Ie,ye.count));let Ke=Ie-Yt;if(Ke<0||Ke===1/0)return;Ut.setup(ct,lt,Bt,at,Wt);let ze,r=Rt;if(Wt!==null&&(ze=Pt.get(Wt),r=yt,r.setIndex(ze)),ct.isMesh)lt.wireframe===!0?(R.setLineWidth(lt.wireframeLinewidth*ke()),r.setMode(et.LINES)):r.setMode(et.TRIANGLES);else if(ct.isLine){let c=lt.linewidth;c===void 0&&(c=1),R.setLineWidth(c*ke()),ct.isLineSegments?r.setMode(et.LINES):ct.isLineLoop?r.setMode(et.LINE_LOOP):r.setMode(et.LINE_STRIP)}else ct.isPoints?r.setMode(et.POINTS):ct.isSprite&&r.setMode(et.TRIANGLES);if(ct.isBatchedMesh)if(Ce.get("WEBGL_multi_draw"))r.renderMultiDraw(ct._multiDrawStarts,ct._multiDrawCounts,ct._multiDrawCount);else{let c=ct._multiDrawStarts,u=ct._multiDrawCounts,m=ct._multiDrawCount,M=Wt?Pt.get(Wt).bytesPerElement:1,P=ft.get(lt).currentProgram.getUniforms();for(let D=0;D<m;D++)P.setValue(et,"_gl_DrawID",D),r.render(c[D]/M,u[D])}else if(ct.isInstancedMesh)r.renderInstances(Yt,Ke,ct.count);else if(at.isInstancedBufferGeometry){let c=at._maxInstanceCount!==void 0?at._maxInstanceCount:1/0,u=Math.min(at.instanceCount,c);r.renderInstances(Yt,Ke,u)}else r.render(Yt,Ke)};function Ds(L,J,at,lt){G!==null&&L.isNodeMaterial&&G.setObject(lt,L),ge===!0&&qt.setState(L,at,!1),L.transparent===!0&&L.side===bn&&L.forceSinglePass===!1?(L.side=An,L.needsUpdate=!0,ht(L,J,lt),L.side=ji,L.needsUpdate=!0,ht(L,J,lt),L.side=bn):ht(L,J,lt)}this.compile=function(L,J,at=null){at===null&&(at=L),G!==null&&G.renderStart(L,J,at),E=At.get(at),E.init(J),w.push(E),at.traverseVisible(function(ct){ct.isLight&&ct.layers.test(J.layers)&&(E.pushLight(ct),ct.castShadow&&E.pushShadow(ct))}),L!==at&&L.traverseVisible(function(ct){ct.isLight&&ct.layers.test(J.layers)&&(E.pushLight(ct),ct.castShadow&&E.pushShadow(ct))}),E.setupLights(),G!==null&&G.updateLights(E.state.lightsArray),Se=this.localClippingEnabled,ge=qt.init(this.clippingPlanes,Se),ge===!0&&qt.setGlobalState(this.clippingPlanes,J),G!==null&&Kt.render(E.state.shadowsArray,at,J);let lt=new Set;return L.traverse(function(ct){if(!(ct.isMesh||ct.isPoints||ct.isLine||ct.isSprite))return;let Ft=ct.material;if(Ft)if(Array.isArray(Ft))for(let It=0;It<Ft.length;It++){let Bt=Ft[It];Ds(Bt,at,J,ct),lt.add(Bt)}else Ds(Ft,at,J,ct),lt.add(Ft)}),E=w.pop(),G!==null&&G.renderEnd(),lt},this.compileAsync=function(L,J,at=null){let lt=this.compile(L,J,at);return new Promise(ct=>{function Ft(){if(lt.forEach(function(It){let Wt=ft.get(It).currentProgram;(Wt===void 0||Wt.isReady())&&lt.delete(It)}),lt.size===0){ct(L);return}setTimeout(Ft,10)}Ce.get("KHR_parallel_shader_compile")!==null?Ft():setTimeout(Ft,10)})};let rs=null;function je(L){rs&&rs(L)}function os(){qn.stop()}function as(){qn.start()}let qn=new Ip;qn.setAnimationLoop(je),typeof self<"u"&&qn.setContext(self),this.setAnimationLoop=function(L){rs=L,Gt.setAnimationLoop(L),L===null?qn.stop():qn.start()},Gt.addEventListener("sessionstart",os),Gt.addEventListener("sessionend",as),this.render=function(L,J){if(J!==void 0&&J.isCamera!==!0){se("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(U===!0)return;G!==null&&G.renderStart(L,J);let at=Gt.enabled===!0&&Gt.isPresenting===!0,lt=N!==null&&(K===null||at)&&N.begin(F,K);if(L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),J.parent===null&&J.matrixWorldAutoUpdate===!0&&J.updateMatrixWorld(),Gt.enabled===!0&&Gt.isPresenting===!0&&(N===null||N.isCompositing()===!1)&&(Gt.cameraAutoUpdate===!0&&Gt.updateCamera(J),J=Gt.getCamera()),L.isScene===!0&&L.onBeforeRender(F,L,J,K),E=At.get(L,w.length),E.init(J),E.state.textureUnits=mt.getTextureUnits(),w.push(E),ue.multiplyMatrices(J.projectionMatrix,J.matrixWorldInverse),he.setFromProjectionMatrix(ue,ti,J.reversedDepth),Se=this.localClippingEnabled,ge=qt.init(this.clippingPlanes,Se),I=Lt.get(L,C.length),I.init(),C.push(I),Gt.enabled===!0&&Gt.isPresenting===!0){let It=F.xr.getDepthSensingMesh();It!==null&&ls(It,J,-1/0,F.sortObjects)}ls(L,J,0,F.sortObjects),I.finish(),G!==null&&G.updateLights(E.state.lightsArray),F.sortObjects===!0&&I.sort(Dt,ne),Be=Gt.enabled===!1||Gt.isPresenting===!1||Gt.hasDepthSensing()===!1,Be&&ae.addToRenderList(I,L),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),ge===!0&&qt.beginShadows();let ct=E.state.shadowsArray;if(Kt.render(ct,L,J),ge===!0&&qt.endShadows(),(lt&&N.hasRenderPass())===!1){let It=I.opaque,Bt=I.transmissive;if(E.setupLights(),J.isArrayCamera){let Wt=J.cameras;if(Bt.length>0)for(let Zt=0,Nt=Wt.length;Zt<Nt;Zt++){let ye=Wt[Zt];O(It,Bt,L,ye)}Be&&ae.render(L);for(let Zt=0,Nt=Wt.length;Zt<Nt;Zt++){let ye=Wt[Zt];cs(I,L,ye,ye.viewport)}}else Bt.length>0&&O(It,Bt,L,J),Be&&ae.render(L),cs(I,L,J)}K!==null&&B===0&&(mt.updateMultisampleRenderTarget(K),mt.updateRenderTargetMipmap(K)),lt&&N.end(F),L.isScene===!0&&L.onAfterRender(F,L,J),Ut.resetDefaultState(),j=-1,st=null,w.pop(),w.length>0?(E=w[w.length-1],mt.setTextureUnits(E.state.textureUnits),ge===!0&&qt.setGlobalState(F.clippingPlanes,E.state.camera)):E=null,C.pop(),C.length>0?I=C[C.length-1]:I=null,G!==null&&G.renderEnd()};function ls(L,J,at,lt){if(L.visible===!1)return;if(L.layers.test(J.layers)){if(L.isGroup)at=L.renderOrder;else if(L.isLOD)L.autoUpdate===!0&&L.update(J);else if(L.isLightProbeGrid)E.pushLightProbeGrid(L);else if(L.isLight)E.pushLight(L),L.castShadow&&E.pushShadow(L);else if(L.isSprite){if(!L.frustumCulled||L.intersectsFrustum(he)){lt&&Ue.setFromMatrixPosition(L.matrixWorld).applyMatrix4(ue);let It=Mt.update(L),Bt=L.material;Bt.visible&&I.push(L,It,Bt,at,Ue.z,null,J)}}else if((L.isMesh||L.isLine||L.isPoints)&&(!L.frustumCulled||L.intersectsFrustum(he))){let It=Mt.update(L),Bt=L.material;if(lt&&(L.boundingSphere!==void 0?(L.boundingSphere===null&&L.computeBoundingSphere(),Ue.copy(L.boundingSphere.center)):(It.boundingSphere===null&&It.computeBoundingSphere(),Ue.copy(It.boundingSphere.center)),Ue.applyMatrix4(L.matrixWorld).applyMatrix4(ue)),Array.isArray(Bt)){let Wt=It.groups;for(let Zt=0,Nt=Wt.length;Zt<Nt;Zt++){let ye=Wt[Zt],Yt=Bt[ye.materialIndex];Yt&&Yt.visible&&I.push(L,It,Yt,at,Ue.z,ye,J)}}else Bt.visible&&I.push(L,It,Bt,at,Ue.z,null,J)}}let Ft=L.children;for(let It=0,Bt=Ft.length;It<Bt;It++)ls(Ft[It],J,at,lt)}function cs(L,J,at,lt){let{opaque:ct,transmissive:Ft,transparent:It}=L;E.setupLightsView(at),ge===!0&&qt.setGlobalState(F.clippingPlanes,at),lt&&R.viewport(X.copy(lt)),ct.length>0&&H(ct,J,at),Ft.length>0&&H(Ft,J,at),It.length>0&&H(It,J,at),R.buffers.depth.setTest(!0),R.buffers.depth.setMask(!0),R.buffers.color.setMask(!0),R.setPolygonOffset(!1)}function O(L,J,at,lt){if((at.isScene===!0?at.overrideMaterial:null)!==null)return;if(E.state.transmissionRenderTarget[lt.id]===void 0){let Yt=Ce.has("EXT_color_buffer_half_float")||Ce.has("EXT_color_buffer_float");E.state.transmissionRenderTarget[lt.id]=new Pn(1,1,{generateMipmaps:!0,type:Yt?oi:In,minFilter:Qi,samples:Math.max(4,z.samples),stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Ee.workingColorSpace})}let Ft=E.state.transmissionRenderTarget[lt.id],It=lt.viewport||X;Ft.setSize(It.z*F.transmissionResolutionScale,It.w*F.transmissionResolutionScale);let Bt=F.getRenderTarget(),Wt=F.getActiveCubeFace(),Zt=F.getActiveMipmapLevel();F.setRenderTarget(Ft),F.getClearColor(Vt),$t=F.getClearAlpha(),$t<1&&F.setClearColor(16777215,.5),F.clear(),Be&&ae.render(at);let Nt=F.toneMapping;F.toneMapping=ii;let ye=lt.viewport;if(lt.viewport!==void 0&&(lt.viewport=void 0),E.setupLightsView(lt),ge===!0&&qt.setGlobalState(F.clippingPlanes,lt),H(L,at,lt),mt.updateMultisampleRenderTarget(Ft),mt.updateRenderTargetMipmap(Ft),Ce.has("WEBGL_multisampled_render_to_texture")===!1){let Yt=!1;for(let Ie=0,Ke=J.length;Ie<Ke;Ie++){let ze=J[Ie],{object:r,geometry:c,material:u,group:m}=ze;if(u.side===bn&&r.layers.test(lt.layers)){let M=u.side;u.side=An,u.needsUpdate=!0,ot(r,at,lt,c,u,m),u.side=M,u.needsUpdate=!0,Yt=!0}}Yt===!0&&(mt.updateMultisampleRenderTarget(Ft),mt.updateRenderTargetMipmap(Ft))}F.setRenderTarget(Bt,Wt,Zt),F.setClearColor(Vt,$t),ye!==void 0&&(lt.viewport=ye),F.toneMapping=Nt}function H(L,J,at){let lt=J.isScene===!0?J.overrideMaterial:null;for(let ct=0,Ft=L.length;ct<Ft;ct++){let It=L[ct],{object:Bt,geometry:Wt,group:Zt}=It,Nt=It.material;Nt.allowOverride===!0&&lt!==null&&(Nt=lt),Bt.layers.test(at.layers)&&ot(Bt,J,at,Wt,Nt,Zt)}}function ot(L,J,at,lt,ct,Ft){G!==null&&ct.isNodeMaterial&&G.setObject(L,ct),L.onBeforeRender(F,J,at,lt,ct,Ft),L.modelViewMatrix.multiplyMatrices(at.matrixWorldInverse,L.matrixWorld),L.normalMatrix.getNormalMatrix(L.modelViewMatrix),ct.onBeforeRender(F,J,at,lt,L,Ft),ct.transparent===!0&&ct.side===bn&&ct.forceSinglePass===!1?(ct.side=An,ct.needsUpdate=!0,F.renderBufferDirect(at,J,lt,ct,L,Ft),ct.side=ji,ct.needsUpdate=!0,F.renderBufferDirect(at,J,lt,ct,L,Ft),ct.side=bn):F.renderBufferDirect(at,J,lt,ct,L,Ft),L.onAfterRender(F,J,at,lt,ct,Ft)}function ht(L,J,at){J.isScene!==!0&&(J=Ye);let lt=ft.get(L),ct=E.state.lights,Ft=E.state.shadowsArray,It=ct.state.version,Bt=W.getParameters(L,ct.state,Ft,J,at,E.state.lightProbeGridArray),Wt=W.getProgramCacheKey(Bt),Zt=lt.programs;lt.environment=L.isMeshStandardMaterial||L.isMeshLambertMaterial||L.isMeshPhongMaterial?J.environment:null,lt.fog=J.fog;let Nt=L.isMeshStandardMaterial||L.isMeshLambertMaterial&&!L.envMap||L.isMeshPhongMaterial&&!L.envMap;lt.envMap=Tt.get(L.envMap||lt.environment,Nt),lt.envMapRotation=lt.environment!==null&&L.envMap===null?J.environmentRotation:L.envMapRotation,Zt===void 0&&(L.addEventListener("dispose",gn),Zt=new Map,lt.programs=Zt);let ye=Zt.get(Wt);if(ye!==void 0){if(lt.currentProgram===ye&&lt.lightsStateVersion===It)return dt(L,Bt),ye}else Bt.uniforms=W.getUniforms(L),G!==null&&L.isNodeMaterial&&G.build(L,at,Bt),L.onBeforeCompile(Bt,F),ye=W.acquireProgram(Bt,Wt),Zt.set(Wt,ye),lt.uniforms=Bt.uniforms;let Yt=lt.uniforms;return(!L.isShaderMaterial&&!L.isRawShaderMaterial||L.clipping===!0)&&(Yt.clippingPlanes=qt.uniform),dt(L,Bt),lt.needsLights=Jt(L),lt.lightsStateVersion=It,lt.needsLights&&(Yt.ambientLightColor.value=ct.state.ambient,Yt.lightProbe.value=ct.state.probe,Yt.sunLights.value=ct.state.sun,Yt.sunLightShadows.value=ct.state.sunShadow,Yt.directionalLights.value=ct.state.directional,Yt.directionalLightShadows.value=ct.state.directionalShadow,Yt.spotLights.value=ct.state.spot,Yt.spotLightShadows.value=ct.state.spotShadow,Yt.rectAreaLights.value=ct.state.rectArea,Yt.ltc_1.value=ct.state.rectAreaLTC1,Yt.ltc_2.value=ct.state.rectAreaLTC2,Yt.pointLights.value=ct.state.point,Yt.pointLightShadows.value=ct.state.pointShadow,Yt.hemisphereLights.value=ct.state.hemi,Yt.sunShadowMatrix.value=ct.state.sunShadowMatrix,Yt.sunShadowCascade.value=ct.state.sunShadowCascade,Yt.directionalShadowMatrix.value=ct.state.directionalShadowMatrix,Yt.spotLightMatrix.value=ct.state.spotLightMatrix,Yt.spotLightMap.value=ct.state.spotLightMap,Yt.pointShadowMatrix.value=ct.state.pointShadowMatrix),lt.lightProbeGrid=E.state.lightProbeGridArray.length>0,lt.currentProgram=ye,lt.uniformsList=null,ye}function nt(L){if(L.uniformsList===null){let J=L.currentProgram.getUniforms();L.uniformsList=Er.seqWithValue(J.seq,L.uniforms)}return L.uniformsList}function dt(L,J){let at=ft.get(L);at.outputColorSpace=J.outputColorSpace,at.batching=J.batching,at.batchingColor=J.batchingColor,at.instancing=J.instancing,at.instancingColor=J.instancingColor,at.instancingMorph=J.instancingMorph,at.skinning=J.skinning,at.morphTargets=J.morphTargets,at.morphNormals=J.morphNormals,at.morphColors=J.morphColors,at.morphTargetsCount=J.morphTargetsCount,at.numClippingPlanes=J.numClippingPlanes,at.numIntersection=J.numClipIntersection,at.vertexAlphas=J.vertexAlphas,at.vertexTangents=J.vertexTangents,at.toneMapping=J.toneMapping}function zt(L,J){if(L.length===0)return null;if(L.length===1)return L[0].texture!==null?L[0]:null;S.setFromMatrixPosition(J.matrixWorld);for(let at=0,lt=L.length;at<lt;at++){let ct=L[at];if(ct.texture!==null&&ct.boundingBox.containsPoint(S))return ct}return null}function re(L,J,at,lt,ct){J.isScene!==!0&&(J=Ye),mt.resetTextureUnits();let Ft=J.fog,It=lt.isMeshStandardMaterial||lt.isMeshLambertMaterial||lt.isMeshPhongMaterial?J.environment:null,Bt=K===null?F.outputColorSpace:K.isXRRenderTarget===!0?K.texture.colorSpace:Ee.workingColorSpace,Wt=lt.isMeshStandardMaterial||lt.isMeshLambertMaterial&&!lt.envMap||lt.isMeshPhongMaterial&&!lt.envMap,Zt=Tt.get(lt.envMap||It,Wt),Nt=lt.vertexColors===!0&&!!at.attributes.color&&at.attributes.color.itemSize===4,ye=!!at.attributes.tangent&&(!!lt.normalMap||lt.anisotropy>0),Yt=!!at.morphAttributes.position,Ie=!!at.morphAttributes.normal,Ke=!!at.morphAttributes.color,ze=ii;lt.toneMapped&&(K===null||K.isXRRenderTarget===!0)&&(ze=F.toneMapping);let r=at.morphAttributes.position||at.morphAttributes.normal||at.morphAttributes.color,c=r!==void 0?r.length:0,u=ft.get(lt),m=E.state.lights;if(ge===!0&&(Se===!0||L!==st)){let Et=L===st&&lt.id===j;qt.setState(lt,L,Et)}let M=!1;lt.version===u.__version?(u.needsLights&&u.lightsStateVersion!==m.state.version||u.outputColorSpace!==Bt||ct.isBatchedMesh&&u.batching===!1||!ct.isBatchedMesh&&u.batching===!0||ct.isBatchedMesh&&u.batchingColor===!0&&ct._colorsTexture===null||ct.isBatchedMesh&&u.batchingColor===!1&&ct._colorsTexture!==null||ct.isInstancedMesh&&u.instancing===!1||!ct.isInstancedMesh&&u.instancing===!0||ct.isSkinnedMesh&&u.skinning===!1||!ct.isSkinnedMesh&&u.skinning===!0||ct.isInstancedMesh&&u.instancingColor===!0&&ct.instanceColor===null||ct.isInstancedMesh&&u.instancingColor===!1&&ct.instanceColor!==null||ct.isInstancedMesh&&u.instancingMorph===!0&&ct.morphTexture===null||ct.isInstancedMesh&&u.instancingMorph===!1&&ct.morphTexture!==null||u.envMap!==Zt||lt.fog===!0&&u.fog!==Ft||u.numClippingPlanes!==void 0&&(u.numClippingPlanes!==qt.numPlanes||u.numIntersection!==qt.numIntersection)||u.vertexAlphas!==Nt||u.vertexTangents!==ye||u.morphTargets!==Yt||u.morphNormals!==Ie||u.morphColors!==Ke||u.toneMapping!==ze||u.morphTargetsCount!==c||!!u.lightProbeGrid!=E.state.lightProbeGridArray.length>0)&&(M=!0):(M=!0,u.__version=lt.version);let P=u.currentProgram;M===!0&&(P=ht(lt,J,ct),G&&lt.isNodeMaterial&&G.onUpdateProgram(lt,P,u));let D=!1,Y=!1,$=!1,it=P.getUniforms(),vt=u.uniforms;if(R.useProgram(P.program)&&(D=!0,Y=!0,$=!0),lt.id!==j&&(j=lt.id,Y=!0),u.needsLights){let Et=zt(E.state.lightProbeGridArray,ct);u.lightProbeGrid!==Et&&(u.lightProbeGrid=Et,Y=!0)}if(D||st!==L){R.buffers.depth.getReversed()&&L.reversedDepth!==!0&&(L._reversedDepth=!0,L.updateProjectionMatrix()),it.setValue(et,"projectionMatrix",L.projectionMatrix),it.setValue(et,"viewMatrix",L.matrixWorldInverse);let Qt=it.map.cameraPosition;Qt!==void 0&&Qt.setValue(et,Ae.setFromMatrixPosition(L.matrixWorld)),z.logarithmicDepthBuffer&&it.setValue(et,"logDepthBufFC",2/(Math.log(L.far+1)/Math.LN2)),(lt.isMeshPhongMaterial||lt.isMeshToonMaterial||lt.isMeshLambertMaterial||lt.isMeshBasicMaterial||lt.isMeshStandardMaterial||lt.isShaderMaterial)&&it.setValue(et,"isOrthographic",L.isOrthographicCamera===!0),st!==L&&(st=L,Y=!0,$=!0)}if(u.needsLights&&(m.state.sunShadowMap.length>0&&it.setValue(et,"sunShadowMap",m.state.sunShadowMap,mt),m.state.directionalShadowMap.length>0&&it.setValue(et,"directionalShadowMap",m.state.directionalShadowMap,mt),m.state.spotShadowMap.length>0&&it.setValue(et,"spotShadowMap",m.state.spotShadowMap,mt),m.state.pointShadowMap.length>0&&it.setValue(et,"pointShadowMap",m.state.pointShadowMap,mt)),ct.isSkinnedMesh){it.setOptional(et,ct,"bindMatrix"),it.setOptional(et,ct,"bindMatrixInverse");let Et=ct.skeleton;Et&&(Et.boneTexture===null&&Et.computeBoneTexture(),it.setValue(et,"boneTexture",Et.boneTexture,mt))}ct.isBatchedMesh&&(it.setOptional(et,ct,"batchingTexture"),it.setValue(et,"batchingTexture",ct._matricesTexture,mt),it.setOptional(et,ct,"batchingIdTexture"),it.setValue(et,"batchingIdTexture",ct._indirectTexture,mt),it.setOptional(et,ct,"batchingColorTexture"),ct._colorsTexture!==null&&it.setValue(et,"batchingColorTexture",ct._colorsTexture,mt));let _t=at.morphAttributes;if((_t.position!==void 0||_t.normal!==void 0||_t.color!==void 0)&&Q.update(ct,at,P),(Y||u.receiveShadow!==ct.receiveShadow)&&(u.receiveShadow=ct.receiveShadow,it.setValue(et,"receiveShadow",ct.receiveShadow)),(lt.isMeshStandardMaterial||lt.isMeshLambertMaterial||lt.isMeshPhongMaterial)&&lt.envMap===null&&J.environment!==null&&(vt.envMapIntensity.value=J.environmentIntensity),vt.dfgLUT!==void 0&&(vt.dfgLUT.value=xb()),Y){if(it.setValue(et,"toneMappingExposure",F.toneMappingExposure),u.needsLights&&pt(vt,$),Ft&&lt.fog===!0&&Xt.refreshFogUniforms(vt,Ft),Xt.refreshMaterialUniforms(vt,lt,gt,ut,E.state.transmissionRenderTarget[L.id]),u.needsLights&&u.lightProbeGrid){let Et=u.lightProbeGrid;vt.probesSH.value=Et.texture,vt.probesMin.value.copy(Et.boundingBox.min),vt.probesMax.value.copy(Et.boundingBox.max),vt.probesResolution.value.copy(Et.resolution)}Er.upload(et,nt(u),vt,mt)}if(lt.isShaderMaterial&&lt.uniformsNeedUpdate===!0&&(Er.upload(et,nt(u),vt,mt),lt.uniformsNeedUpdate=!1),lt.isSpriteMaterial&&it.setValue(et,"center",ct.center),it.setValue(et,"modelViewMatrix",ct.modelViewMatrix),it.setValue(et,"normalMatrix",ct.normalMatrix),it.setValue(et,"modelMatrix",ct.matrixWorld),lt.uniformsGroups!==void 0){let Et=lt.uniformsGroups;for(let Qt=0,de=Et.length;Qt<de;Qt++){let _e=Et[Qt];wt.update(_e,P),wt.bind(_e,P)}}return P}function pt(L,J){L.ambientLightColor.needsUpdate=J,L.lightProbe.needsUpdate=J,L.sunLights.needsUpdate=J,L.sunLightShadows.needsUpdate=J,L.directionalLights.needsUpdate=J,L.directionalLightShadows.needsUpdate=J,L.pointLights.needsUpdate=J,L.pointLightShadows.needsUpdate=J,L.spotLights.needsUpdate=J,L.spotLightShadows.needsUpdate=J,L.rectAreaLights.needsUpdate=J,L.hemisphereLights.needsUpdate=J}function Jt(L){return L.isMeshLambertMaterial||L.isMeshToonMaterial||L.isMeshPhongMaterial||L.isMeshStandardMaterial||L.isShadowMaterial||L.isShaderMaterial&&L.lights===!0}this.getActiveCubeFace=function(){return Z},this.getActiveMipmapLevel=function(){return B},this.getRenderTarget=function(){return K},this.setRenderTargetTextures=function(L,J,at){let lt=ft.get(L);lt.__autoAllocateDepthBuffer=L.resolveDepthBuffer===!1,lt.__autoAllocateDepthBuffer===!1&&(lt.__useRenderToTexture=!1),ft.get(L.texture).__webglTexture=J,ft.get(L.depthTexture).__webglTexture=lt.__autoAllocateDepthBuffer?void 0:at,lt.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(L,J){let at=ft.get(L);at.__webglFramebuffer=J,at.__useDefaultFramebuffer=J===void 0},this.setRenderTarget=function(L,J=0,at=0){K=L,Z=J,B=at;let lt=null,ct=!1,Ft=!1;if(L){let Bt=ft.get(L);if(Bt.__useDefaultFramebuffer!==void 0){R.bindFramebuffer(et.FRAMEBUFFER,Bt.__webglFramebuffer),X.copy(L.viewport),bt.copy(L.scissor),St=L.scissorTest,R.viewport(X),R.scissor(bt),R.setScissorTest(St),j=-1;return}else if(Bt.__webglFramebuffer===void 0)mt.setupRenderTarget(L);else if(Bt.__hasExternalTextures)mt.rebindTextures(L,ft.get(L.texture).__webglTexture,ft.get(L.depthTexture).__webglTexture);else if(L.depthBuffer){let Nt=L.depthTexture;if(Bt.__boundDepthTexture!==Nt){if(Nt!==null&&ft.has(Nt)&&(L.width!==Nt.image.width||L.height!==Nt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");mt.setupDepthRenderbuffer(L)}}let Wt=L.texture;(Wt.isData3DTexture||Wt.isDataArrayTexture||Wt.isCompressedArrayTexture)&&(Ft=!0);let Zt=ft.get(L).__webglFramebuffer;L.isWebGLCubeRenderTarget?(Array.isArray(Zt[J])?lt=Zt[J][at]:lt=Zt[J],ct=!0):L.samples>0&&mt.useMultisampledRTT(L)===!1?lt=ft.get(L).__webglMultisampledFramebuffer:Array.isArray(Zt)?lt=Zt[at]:lt=Zt,X.copy(L.viewport),bt.copy(L.scissor),St=L.scissorTest}else X.copy(Ot).multiplyScalar(gt).floor(),bt.copy(ce).multiplyScalar(gt).floor(),St=be;if(at!==0&&(lt=V),R.bindFramebuffer(et.FRAMEBUFFER,lt)&&R.drawBuffers(L,lt),R.viewport(X),R.scissor(bt),R.setScissorTest(St),ct){let Bt=ft.get(L.texture);et.framebufferTexture2D(et.FRAMEBUFFER,et.COLOR_ATTACHMENT0,et.TEXTURE_CUBE_MAP_POSITIVE_X+J,Bt.__webglTexture,at)}else if(Ft){let Bt=J;for(let Wt=0;Wt<L.textures.length;Wt++){let Zt=ft.get(L.textures[Wt]);et.framebufferTextureLayer(et.FRAMEBUFFER,et.COLOR_ATTACHMENT0+Wt,Zt.__webglTexture,at,Bt)}}else if(L!==null&&at!==0){let Bt=ft.get(L.texture);et.framebufferTexture2D(et.FRAMEBUFFER,et.COLOR_ATTACHMENT0,et.TEXTURE_2D,Bt.__webglTexture,at)}j=-1};function ee(L){let J=ft.get(L);return(J.__readFormat!==L.format||J.__readType!==L.type)&&(J.__readFormat=L.format,J.__readType=L.type,J.__formatReadable=z.textureFormatReadable(L.format),J.__typeReadable=z.textureTypeReadable(L.type)),J}this.readRenderTargetPixels=function(L,J,at,lt,ct,Ft,It,Bt=0){if(!(L&&L.isWebGLRenderTarget)){se("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Wt=ft.get(L).__webglFramebuffer;if(L.isWebGLCubeRenderTarget&&It!==void 0&&(Wt=Wt[It]),Wt){R.bindFramebuffer(et.FRAMEBUFFER,Wt);try{let Zt=L.textures[Bt],Nt=Zt.format,ye=Zt.type;L.textures.length>1&&et.readBuffer(et.COLOR_ATTACHMENT0+Bt);let Yt=ee(Zt);if(Yt.__formatReadable===!1){se("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Yt.__typeReadable===!1){se("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}J>=0&&J<=L.width-lt&&at>=0&&at<=L.height-ct&&et.readPixels(J,at,lt,ct,Ct.convert(Nt),Ct.convert(ye),Ft)}finally{let Zt=K!==null?ft.get(K).__webglFramebuffer:null;R.bindFramebuffer(et.FRAMEBUFFER,Zt)}}},this.readRenderTargetPixelsAsync=async function(L,J,at,lt,ct,Ft,It,Bt=0){if(!(L&&L.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Wt=ft.get(L).__webglFramebuffer;if(L.isWebGLCubeRenderTarget&&It!==void 0&&(Wt=Wt[It]),Wt)if(J>=0&&J<=L.width-lt&&at>=0&&at<=L.height-ct){R.bindFramebuffer(et.FRAMEBUFFER,Wt);let Zt=L.textures[Bt],Nt=Zt.format,ye=Zt.type;L.textures.length>1&&et.readBuffer(et.COLOR_ATTACHMENT0+Bt);let Yt=ee(Zt);if(Yt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Yt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Ie=et.createBuffer();et.bindBuffer(et.PIXEL_PACK_BUFFER,Ie),et.bufferData(et.PIXEL_PACK_BUFFER,Ft.byteLength,et.STREAM_READ),et.readPixels(J,at,lt,ct,Ct.convert(Nt),Ct.convert(ye),0),et.bindBuffer(et.PIXEL_PACK_BUFFER,null);let Ke=K!==null?ft.get(K).__webglFramebuffer:null;R.bindFramebuffer(et.FRAMEBUFFER,Ke);let ze=et.fenceSync(et.SYNC_GPU_COMMANDS_COMPLETE,0);return et.flush(),await Kd(et,ze,4),et.bindBuffer(et.PIXEL_PACK_BUFFER,Ie),et.getBufferSubData(et.PIXEL_PACK_BUFFER,0,Ft),et.bindBuffer(et.PIXEL_PACK_BUFFER,null),et.deleteBuffer(Ie),et.deleteSync(ze),Ft}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(L,J=null,at=0){let lt=Math.pow(2,-at),ct=Math.floor(L.image.width*lt),Ft=Math.floor(L.image.height*lt),It=J!==null?J.x:0,Bt=J!==null?J.y:0;mt.setTexture2D(L,0),et.copyTexSubImage2D(et.TEXTURE_2D,at,0,0,It,Bt,ct,Ft),R.unbindTexture()},this.copyTextureToTexture=function(L,J,at=null,lt=null,ct=0,Ft=0){let It,Bt,Wt,Zt,Nt,ye,Yt,Ie,Ke,ze=L.isCompressedTexture?L.mipmaps[Ft]:L.image;if(at!==null)It=at.max.x-at.min.x,Bt=at.max.y-at.min.y,Wt=at.isBox3?at.max.z-at.min.z:1,Zt=at.min.x,Nt=at.min.y,ye=at.isBox3?at.min.z:0;else{let vt=Math.pow(2,-ct);It=Math.floor(ze.width*vt),Bt=Math.floor(ze.height*vt),L.isDataArrayTexture?Wt=ze.depth:L.isData3DTexture?Wt=Math.floor(ze.depth*vt):Wt=1,Zt=0,Nt=0,ye=0}lt!==null?(Yt=lt.x,Ie=lt.y,Ke=lt.z):(Yt=0,Ie=0,Ke=0);let r=Ct.convert(J.format),c=Ct.convert(J.type),u;J.isData3DTexture?(mt.setTexture3D(J,0),u=et.TEXTURE_3D):J.isDataArrayTexture||J.isCompressedArrayTexture?(mt.setTexture2DArray(J,0),u=et.TEXTURE_2D_ARRAY):(mt.setTexture2D(J,0),u=et.TEXTURE_2D),R.activeTexture(et.TEXTURE0),R.pixelStorei(et.UNPACK_FLIP_Y_WEBGL,J.flipY),R.pixelStorei(et.UNPACK_PREMULTIPLY_ALPHA_WEBGL,J.premultiplyAlpha),R.pixelStorei(et.UNPACK_ALIGNMENT,J.unpackAlignment);let m=R.getParameter(et.UNPACK_ROW_LENGTH),M=R.getParameter(et.UNPACK_IMAGE_HEIGHT),P=R.getParameter(et.UNPACK_SKIP_PIXELS),D=R.getParameter(et.UNPACK_SKIP_ROWS),Y=R.getParameter(et.UNPACK_SKIP_IMAGES);R.pixelStorei(et.UNPACK_ROW_LENGTH,ze.width),R.pixelStorei(et.UNPACK_IMAGE_HEIGHT,ze.height),R.pixelStorei(et.UNPACK_SKIP_PIXELS,Zt),R.pixelStorei(et.UNPACK_SKIP_ROWS,Nt),R.pixelStorei(et.UNPACK_SKIP_IMAGES,ye);let $=L.isDataArrayTexture||L.isData3DTexture,it=J.isDataArrayTexture||J.isData3DTexture;if(L.isDepthTexture){let vt=ft.get(L),_t=ft.get(J),Et=ft.get(vt.__renderTarget),Qt=ft.get(_t.__renderTarget);R.bindFramebuffer(et.READ_FRAMEBUFFER,Et.__webglFramebuffer),R.bindFramebuffer(et.DRAW_FRAMEBUFFER,Qt.__webglFramebuffer);for(let de=0;de<Wt;de++)$&&(et.framebufferTextureLayer(et.READ_FRAMEBUFFER,et.COLOR_ATTACHMENT0,ft.get(L).__webglTexture,ct,ye+de),et.framebufferTextureLayer(et.DRAW_FRAMEBUFFER,et.COLOR_ATTACHMENT0,ft.get(J).__webglTexture,Ft,Ke+de)),et.blitFramebuffer(Zt,Nt,It,Bt,Yt,Ie,It,Bt,et.DEPTH_BUFFER_BIT,et.NEAREST);R.bindFramebuffer(et.READ_FRAMEBUFFER,null),R.bindFramebuffer(et.DRAW_FRAMEBUFFER,null)}else if(ct!==0||L.isRenderTargetTexture||ft.has(L)){let vt=ft.get(L),_t=ft.get(J);R.bindFramebuffer(et.READ_FRAMEBUFFER,k),R.bindFramebuffer(et.DRAW_FRAMEBUFFER,q);for(let Et=0;Et<Wt;Et++)$?et.framebufferTextureLayer(et.READ_FRAMEBUFFER,et.COLOR_ATTACHMENT0,vt.__webglTexture,ct,ye+Et):et.framebufferTexture2D(et.READ_FRAMEBUFFER,et.COLOR_ATTACHMENT0,et.TEXTURE_2D,vt.__webglTexture,ct),it?et.framebufferTextureLayer(et.DRAW_FRAMEBUFFER,et.COLOR_ATTACHMENT0,_t.__webglTexture,Ft,Ke+Et):et.framebufferTexture2D(et.DRAW_FRAMEBUFFER,et.COLOR_ATTACHMENT0,et.TEXTURE_2D,_t.__webglTexture,Ft),ct!==0?et.blitFramebuffer(Zt,Nt,It,Bt,Yt,Ie,It,Bt,et.COLOR_BUFFER_BIT,et.NEAREST):it?et.copyTexSubImage3D(u,Ft,Yt,Ie,Ke+Et,Zt,Nt,It,Bt):et.copyTexSubImage2D(u,Ft,Yt,Ie,Zt,Nt,It,Bt);R.bindFramebuffer(et.READ_FRAMEBUFFER,null),R.bindFramebuffer(et.DRAW_FRAMEBUFFER,null)}else it?L.isDataTexture||L.isData3DTexture?et.texSubImage3D(u,Ft,Yt,Ie,Ke,It,Bt,Wt,r,c,ze.data):J.isCompressedArrayTexture?et.compressedTexSubImage3D(u,Ft,Yt,Ie,Ke,It,Bt,Wt,r,ze.data):et.texSubImage3D(u,Ft,Yt,Ie,Ke,It,Bt,Wt,r,c,ze):L.isDataTexture?et.texSubImage2D(et.TEXTURE_2D,Ft,Yt,Ie,It,Bt,r,c,ze.data):L.isCompressedTexture?et.compressedTexSubImage2D(et.TEXTURE_2D,Ft,Yt,Ie,ze.width,ze.height,r,ze.data):et.texSubImage2D(et.TEXTURE_2D,Ft,Yt,Ie,It,Bt,r,c,ze);R.pixelStorei(et.UNPACK_ROW_LENGTH,m),R.pixelStorei(et.UNPACK_IMAGE_HEIGHT,M),R.pixelStorei(et.UNPACK_SKIP_PIXELS,P),R.pixelStorei(et.UNPACK_SKIP_ROWS,D),R.pixelStorei(et.UNPACK_SKIP_IMAGES,Y),Ft===0&&J.generateMipmaps&&et.generateMipmap(u),R.unbindTexture()},this.initRenderTarget=function(L){ft.get(L).__webglFramebuffer===void 0&&mt.setupRenderTarget(L)},this.initTexture=function(L){L.isCubeTexture?mt.setTextureCube(L,0):L.isData3DTexture?mt.setTexture3D(L,0):L.isDataArrayTexture||L.isCompressedArrayTexture?mt.setTexture2DArray(L,0):mt.setTexture2D(L,0),R.unbindTexture()},this.resetState=function(){Z=0,B=0,K=null,R.reset(),Ut.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ti}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=Ee._getDrawingBufferColorSpace(t),e.unpackColorSpace=Ee._getUnpackColorSpace()}}});function Ps(n,t){let e=0;for(let i of t)Mi(n,i)&&(e+=en(i)>0?1:-1);return e>0}function Su(n){let t=wu(n);return _b(t)}function wu(n,t=n.ops.filter(e=>e.kind!=="chamfer")){let e=n.stock.top;t=t.filter(p=>p.enabled!==!1);let i=t.filter(p=>p.kind==="cutout"),s=i.some(p=>!p.inner)?cn(i.flatMap(p=>p.region)):[[[n.stock.minX,n.stock.minY],[n.stock.maxX,n.stock.minY],[n.stock.maxX,n.stock.maxY],[n.stock.minX,n.stock.maxY]]],a=new Map;for(let p of t){let x=p.kind==="pocket"?p.region:p.kind==="inside"?p.zBottom>0?pn(p.loops,ve(p.loops,-p.tool.diameter)):p.loops:null;if(!x?.length)continue;let v=Math.max(0,p.zBottom);a.set(v,[...a.get(v)||[],...x])}let l=[...a.keys()].sort((p,x)=>p-x),o=[],h=[];for(let p of l){let x=cn(a.get(p)),v=sn(ua(pn(x,h),s),.01);p>0&&v.length&&o.push({z:p,region:v}),h=cn([...h,...x])}let f=cn(i.filter(p=>p.inner).flatMap(p=>p.region)),d=f.length?cn([...a.values()].flat().filter(p=>Ps(p[0],f))):[],g=sn(cn([...pn(s,h),...pn(f,d)]),.01);return o.push({z:e,region:g}),o}function Up(n){let t=[];for(let e of n.ops){if(e.enabled===!1)continue;let i=e.tool.diameter;e.kind==="cutout"?t.push(...pn(ve(e.region,i),e.region)):e.kind==="inside"?t.push(...pn(e.loops,ve(e.loops,-i))):e.kind==="pocket"&&t.push(...e.region)}return cn(t)}function _b(n){let t=a=>{for(let l of n)if(Ps(a,l.region))return l.z;return 0},e=[],i=[],s=(a,l,o)=>(e.push(a,l,o),e.length/3-1);for(let a of n)for(let[l,...o]of Zn(a.region)){let h=v=>v.map(([b,y])=>new jt(b,y)),f=h(l),d=o.map(h),g=Lo.triangulateShape(f,d),p=[...f,...d.flat()],x=e.length/3;for(let v of p)e.push(v.x,v.y,a.z);for(let v of g)i.push(x+v[0],x+v[1],x+v[2]);for(let v of[l,...o])for(let b=0;b<v.length;b++){let y=v[b],_=v[(b+1)%v.length],A=_[0]-y[0],T=_[1]-y[1],S=Math.hypot(A,T);if(S<1e-9)continue;let I=(y[0]+_[0])/2,E=(y[1]+_[1])/2,C=T/S*.05,w=-A/S*.05,N=Ps([I+C,E+w],a.region)?[I-C,E-w]:[I+C,E+w],F=t(N);if(F>=a.z-1e-6)continue;let U=s(y[0],y[1],a.z),G=s(_[0],_[1],a.z),V=s(_[0],_[1],F),k=s(y[0],y[1],F);i.push(U,G,V,U,V,k)}}return{positions:Float32Array.from(e),indices:Uint32Array.from(i)}}var Eu=pe(()=>{ea();eo()});function Xn(n,t,e){let i=Math.max(1,Math.ceil((n-t)/e-1e-6));return Array.from({length:i},(s,a)=>n-(a+1)*(n-t)/i)}function Is(n,t,e,i,s,a,l){let o=[...t.breaks(e,i),i];if(l)for(let f of l.edges(e,i))o.push(f);o.sort((f,d)=>f-d);let h=e;for(let f of o){if(f-h<1e-9)continue;let d=(h+f)/2,g=l&&l.inside(d)?l.top:-1/0,[p,x]=t.at(h),v=Math.max(s(h),g),b=n.at;b&&(Math.abs(b.z-v)>1e-6||Math.abs(b.x-p)>1e-6||Math.abs(b.y-x)>1e-6)&&n.feed(p,x,v,a);let[y,_]=t.at(f);n.feed(y,_,Math.max(s(f),g),a),h=f}}function Sb(n,t){if(!(t>0)||!(n.length>0))return 0;let e=0,i=0,s=0,a=n.p;for(let l=0;l<a.length;l++){let[o,h]=a[l],[f,d]=a[(l+1)%a.length],g=o*d-f*h;e+=g,i+=(o+f)*g,s+=(h+d)*g}if(Math.abs(e)<1e-12)return 0;i/=3*e,s/=3*e;for(let[l,o]of a)if(Math.hypot(l-i,o-s)>=t/2)return 0;return n.length/(2*Math.PI)}function wb(n,t){let e=Math.tan(t.rampAngle*Math.PI/180);if(t.packsChips||!(t.plunge>0)||!(t.feed>0))return e;let i=Sb(n,t.toolR);if(!i)return e;let s=t.accel>0?Math.min(t.feed,Math.sqrt(t.accel*i)*60):t.feed;return Math.max(e,Math.min(t.plunge,t.feed)/s)}function Mc(n,t,e,i,s,a,l){let o=Math.tan(a.rampAngle*Math.PI/180),h=t.length<1?o:wb(t,a),f=h>o*1.001,d=Math.max(0,(i-s)/h);if(t.length<1||d<1e-6||h>1){let[x,v]=t.at(e),b=f?Xn(i,s,a.stepdown):[s];for(let y of b)n.feed(x,v,l&&l.inside(e)?Math.max(y,l.top):y,f?Math.min(a.plunge,a.feed):a.plunge),Is(n,t,e,e+t.length,()=>y,a.feed,l);return e}let g=f?Math.max(1,Math.min(a.feed,Math.round(a.plunge*Math.sqrt(1+h*h)/h))):Math.min(a.feed,a.plunge*2),p=e+d;return Is(n,t,e,p,x=>i-(x-e)/d*(i-s),g,l),Is(n,t,p,p+t.length,()=>s,a.feed,l),p}function Eb(n,t,e,i){let s=[];for(let a=t,l=0;l<500;a+=e,l++){let o=ci(sn(ve(n,-a,i),.001),.005);if(!o.length)break;s.push(o)}return s}function Tb(n){let t=n.map((s,a)=>s.map(l=>({loop:l,depth:a,kids:[]})));for(let s=1;s<t.length;s++)for(let a of t[s])(t[s-1].find(o=>Mi(a.loop[0],o.loop)&&Math.sign(en(o.loop))===Math.sign(en(a.loop)))||t[s-1].find(o=>Mi(a.loop[0],o.loop))||t[0][0]).kids.push(a);let e=[],i=s=>{if(!s.kids.length){e.push([s.loop]);return}for(let a of s.kids)i(a);e[e.length-1].push(s.loop)};for(let s of t[0]||[])en(s.loop)>0&&i(s);for(let s of t[0]||[])en(s.loop)<=0&&!t[0].some(a=>a.kids.includes(s))&&i(s);return e}function Cr(n,t){let e=0;for(let i of t)Mi(n,i)&&(e+=en(i)>0?1:-1);return e>0}function Ab(n,t,e){let i=Math.max(2,Math.ceil(Math.hypot(t[0]-n[0],t[1]-n[1])/.2));for(let s=1;s<i;s++){let a=s/i;if(!Cr([n[0]+(t[0]-n[0])*a,n[1]+(t[1]-n[1])*a],e))return!1}return!0}function bc(n,t,e,i,s,a,l,o=null,h=null){let f=Math.min(i.stepover,e*.95),d=Eb(t,e+l,f,l>=.2?.05:void 0);if(!d.length)return;let g=ve(t,-(e+l)+.01),p=Tb(d),x=s;for(let v of Xn(s,a,i.stepdown)){for(let b of p){let y=new Wn(b[0]),[_,A]=y.at(0);n.goTo(_,A,Math.max(x,h?h(_,A):x)),n.feed(_,A,x,i.plunge);let T=Mc(n,y,0,x,v,i);for(let S=1;S<b.length;S++){let I=y.at(T),E=new Wn(b[S]),C=E.nearest(I);if(!Ab(I,E.at(C),g)){[_,A]=E.at(C);let w=n.travel?Math.max(x+1,Math.min(o??1/0,n.travel({x:I[0],y:I[1]},{x:_,y:A}))):o??x+1;n.rapid(I[0],I[1],w),n.rapid(_,A,w);let N=Math.max(x,h?h(_,A):x)+1;w>N&&n.rapid(_,A,N),n.feed(_,A,v,i.plunge)}Is(n,E,C,C+E.length,()=>v,i.feed),y=E,T=C}}x=v}n.retract()}function kp(n,t,e,i,s,a,l){let o=ci(sn(ve(t,-e),.001),.005);for(let h of o){let f=new Wn(h),[d,g]=f.at(0);n.goTo(d,g,s);for(let p of Xn(s,a,l))n.feed(d,g,p,i.plunge),Is(n,f,0,f.length,()=>p,i.feed*.9);n.retract()}}function Cb(n,t,e,i,s,a,l,o){let h=e?ve(e,-(i-.05)):null,f=e?ve(e,-(i+.05)):null,d=g=>!e||Cr(g,h)&&!Cr(g,f);for(let g of ci(sn(ve(t,-(i+.02)),.001),.005)){let p=new Wn(g),x=Math.max(8,Math.ceil(p.length/.5)),v=Array.from({length:x},(_,A)=>d(p.at(A/x*p.length)));if(!v.some(Boolean))continue;let b=v.every(Boolean),y=b?0:v.indexOf(!1);for(let _=0;_<x;_++){let A=(y+_)%x;if(!v[A]||!b&&v[(A-1+x)%x])continue;let T=A;for(;T-A<x-1&&v[(T+1)%x];)T++;let S=A/x*p.length,I=b?S+p.length:(T+1)/x*p.length,[E,C]=p.at(S);if(n.goTo(E,C,Math.max(a,o(E,C))),n.feed(E,C,l,s.plunge),Is(n,p,S,I,()=>l,s.feed*.9),n.retract(),b)break}}}function Pb(n,t,e){for(let i of t)for(let s of Ar(i.loops.map(a=>[a]),n.at).map(a=>a[0])){let a=new Wn(s.slice().reverse()),l=Math.max(8,Math.ceil(a.length/.25)),o=Array.from({length:l},(d,g)=>{let p=a.at(g/l*a.length);return!Cr(p,i.bad)&&(!i.keep||Cr(p,i.keep))});if(!o.some(Boolean))continue;let h=o.every(Boolean),f=h?0:o.indexOf(!1);for(let d=0;d<l;d++){let g=(f+d)%l;if(!o[g]||!h&&o[(g-1+l)%l])continue;let p=g;for(;p-g<l-1&&o[(p+1)%l];)p++;let x=g/l*a.length,v=h?x+a.length:p/l*a.length;if(!h&&v-x<.5)continue;let[b,y]=a.at(x);for(let _ of Xn(i.z,i.z-i.depth,e.stepdown))h?(!n.at||Math.hypot(n.at.x-b,n.at.y-y)>1e-6)&&n.goTo(b,y,i.z):n.goTo(b,y,i.z),n.feed(b,y,_,e.plunge),Is(n,a,x,v,()=>_,e.feed),h||n.retract();if(n.retract(),h)break}}}function Ib(n,t,e,i,s,a,l){let o=sn(pn(t,ve(ve(t,-i),i)),.01);if(!o.length)return;let h=ve(o,e+.5);for(let f of ci(sn(ve(t,-e),.001),.005)){let d=new Wn(f),g=Math.max(8,Math.ceil(d.length/.25)),p=Array.from({length:g},(v,b)=>h.some(y=>Mi(d.at(b/g*d.length),y)));if(p.every(Boolean)){kp(n,t,e,s,a,l,s.stepdown);return}let x=p.indexOf(!1);for(let v=0;v<g;v++){let b=(x+v)%g;if(!p[b]||p[(b-1+g)%g])continue;let y=b;for(;p[(y+1)%g]&&y-b<g;)y++;let _=b/g*d.length,A=(y+1)/g*d.length,[T,S]=d.at(_);n.goTo(T,S,a);let I=!0;for(let E of Xn(a,l,s.stepdown)){let C=[...d.breaks(_,A),A],w=I?C:[...C.slice(0,-1).reverse(),_],[N,F]=d.at(I?_:A);n.feed(N,F,E,s.plunge);for(let U of w){let[G,V]=d.at(U);n.feed(G,V,E,s.feed)}I=!I}n.retract()}}}function Rb(n,t,e,i,s,a){let l=Math.min(i.stepover,e*1.6),o=t.minX-e-2,h=t.maxX+e+2;for(let f of Xn(s,a,i.stepdown)){let d=t.minY+e*.6;n.goTo(o,d,s),n.feed(o,d,f,i.plunge);let g=1;for(;n.feed(g>0?h:o,d,f,i.feed),!(d>=t.maxY-e*.6-1e-6);)d=Math.min(d+l,t.maxY-e*.6),n.feed(g>0?h:o,d,f,i.feed),g=-g}n.retract()}function Lb(n,t,e,i){let s=t.thread,a=t.tool.cut??t.tool.diameter,l=Math.max(0,(s.major-a)/2),o=s.pitch,h=s.hand==="left"?-1:1,f=72,d=t.centers.slice();for(;d.length;){let g=n.at||d[0],p=0;d.forEach((v,b)=>{Math.hypot(v.x-g.x,v.y-g.y)<Math.hypot(d[p].x-g.x,d[p].y-g.y)&&(p=b)});let[x]=d.splice(p,1);n.goTo(x.x,x.y,t.zTop);for(let v of Bp[i]||Bp.balanced){let b=l*v;n.feed(x.x,x.y,t.zTop,e.plunge),n.feed(x.x,x.y,s.zLow,e.plunge);let y=s.zLow;for(let C=1;C<=f/2;C++){let w=Math.PI+Math.PI*C/(f/2);y=s.zLow+o/4*(C/(f/2)),n.feed(x.x+b/2+b/2*Math.cos(w),x.y+h*(b/2)*Math.sin(w),y,e.feed)}let _=(s.zHigh-y)/o,A=Math.max(1,Math.ceil(_*f)),T=0;for(let C=1;C<=A;C++)T=2*Math.PI*_*C/A,n.feed(x.x+b*Math.cos(T),x.y+h*b*Math.sin(T),y+o*T/(2*Math.PI),e.feed);let S=y+o*_,I=x.x+b/2*Math.cos(T),E=x.y+h*(b/2)*Math.sin(T);for(let C=1;C<=f/2;C++){let w=T+Math.PI*C/(f/2);n.feed(I+b/2*Math.cos(w),E+h*(b/2)*Math.sin(w),Math.min(t.zTop,S+o/4*(C/(f/2))),e.feed)}}n.feed(x.x,x.y,t.zTop,e.feed),n.retract()}}function Nb(n,t,e,i,s,a){let l=t.slice();for(;l.length;){let o=n.at||l[0],h=0;l.forEach((x,v)=>{Math.hypot(x.x-o.x,x.y-o.y)<Math.hypot(l[h].x-o.x,l[h].y-o.y)&&(h=v)});let[f]=l.splice(h,1),d=Math.max(0,f.d/2-e),g=Math.max(1,Math.ceil((s-a)/i.stepdown-1e-6)),p=Math.max(12,Math.ceil(2*Math.PI*d/.05));n.goTo(f.x,f.y,s),n.feed(f.x,f.y,s,i.plunge),n.feed(f.x+d,f.y,s,i.feed);for(let x=1;x<=(g+1)*p;x++){let v=2*Math.PI*x/p,b=Math.max(a,s-(s-a)*x/(g*p));n.feed(f.x+d*Math.cos(v),f.y+d*Math.sin(v),b,i.feed)}n.feed(f.x,f.y,a,i.feed),n.retract()}}function Db(n,t,e,i,s,a){let l=Math.max(.5,a*1.5);for(let o of t){n.goTo(o.x,o.y,i);let h=i;for(;h>s+1e-6;){let f=Math.max(s,h-l);h<i&&n.rapid(o.x,o.y,h+.5),n.feed(o.x,o.y,f,e.plunge),n.rapid(o.x,o.y,i+1),h=f}n.retract()}}function zp(n,t,e,i){let s=Math.max(0,Math.round(t.tabs.count));if(!t.tabs.enabled||!s)return null;let a=t.tabs.length??hi(t.material).length,l=2*e+a,o=Array.from({length:s},(f,d)=>{let g=(d+.5)/s*n;return[g-l/2,g+l/2]}),h=n;return{top:i+(t.tabs.height??hi(t.material).height),inside:f=>{let d=(f%h+h)%h;return o.some(([g,p])=>d>g&&d<p)},edges:(f,d)=>{let g=[];for(let p=Math.floor(f/h);p*h<=d;p++)for(let[x,v]of o)for(let b of[x,v]){let y=p*h+b;y>f&&y<d&&g.push(y)}return g}}}function Vp(n,t,e){if(!e.tabs.enabled)return[];let i=Math.max(0,Math.round(e.tabs.count)),s=[];for(let a of Zn(n).map(l=>l[0]))for(let l of ci(sn(ve([a],t),.001),.005).filter(o=>en(o)>0)){let o=new Wn(l.slice().reverse());for(let h=0;h<i;h++)s.push(o.at((h+.5)/i*o.length))}return s}function Ob(n,t,e,i,s,a,l,o){let h=[{off:e+o,fd:i}];o>0&&h.push({off:e,fd:{...i,feed:Math.round(i.feed*.9)},finish:!0});for(let f of h)for(let d of Zn(t).map(g=>g[0])){let g=ci(sn(ve([d],f.off),.001),.005).filter(p=>en(p)>0);for(let p of g){let x=new Wn(p.slice().reverse()),v=zp(x.length,l,e,0),[b,y]=x.at(0);n.goTo(b,y,s),n.feed(b,y,s,i.plunge);let _=0,A=s,T=f.finish?Xn(s,a,Math.max(i.stepdown,Math.min(6*e,s-a))):Xn(s,a,i.stepdown);for(let S of T)_=Mc(n,x,_,A,S,f.fd,v),A=S;n.retract()}}}function Fb(n,t,e,i,s,a,l,o,h){let f={...l,tabs:{...l.tabs,enabled:!!h}},d=[{off:e+o,fd:i}];o>0&&d.push({off:e,fd:{...i,feed:Math.round(i.feed*.9)},finish:!0});let g=new Set;for(let p of d)for(let x of Ar(t.map(v=>[en(v)<0?v.slice().reverse():v]),n.at).map(v=>v[0])){let v=ci(sn(ve([x],-p.off),.001),.005).filter(b=>en(b)>0);!p.finish&&v.length&&g.add(x);for(let b of v){let y=new Wn(b),_=zp(y.length,f,e,0),[A,T]=y.at(0);n.goTo(A,T,s),n.feed(A,T,s,i.plunge);let S=0,I=s,E=p.finish&&g.has(x)?Xn(s,a,Math.max(i.stepdown,Math.min(6*e,s-a))):Xn(s,a,i.stepdown);for(let C of E)S=Mc(n,y,S,I,C,p.fd,_),I=C;n.retract()}}}function Ub(n,t,e,i,s){let a=t.slice();for(;a.length;){let l=n.at||{x:a[0].pts[0][0],y:a[0].pts[0][1]},o=0,h=!1,f=1/0;a.forEach((p,x)=>{let v=p.pts[0],b=p.pts[p.pts.length-1],y=Math.hypot(v[0]-l.x,v[1]-l.y),_=p.closed?1/0:Math.hypot(b[0]-l.x,b[1]-l.y);Math.min(y,_)<f&&(f=Math.min(y,_),o=x,h=_<y)});let[d]=a.splice(o,1),g=h?d.pts.slice().reverse():d.pts;if(d.closed){let p=new Wn(g[0][0]===g.at(-1)[0]&&g[0][1]===g.at(-1)[1]?g.slice(0,-1):g),[x,v]=p.at(0);n.goTo(x,v,i),n.feed(x,v,i,e.plunge);let b=0,y=i;for(let _ of Xn(i,s,e.stepdown))b=Mc(n,p,b,y,_,e),y=_}else{let p=g;n.goTo(p[0][0],p[0][1],i);for(let x of Xn(i,s,e.stepdown)){n.feed(p[0][0],p[0][1],x,e.plunge);for(let[v,b]of p.slice(1))n.feed(v,b,x,e.feed);p=p.slice().reverse()}}n.retract()}}function Bb(n,t,e){let i=t.diameter/2,s=n.cell,a=t.kind==="ball",l=s*Math.SQRT1_2,o=Math.ceil((i+l)/s),h=S=>a?i-Math.sqrt(Math.max(0,i*i-S*S)):0,f=[];for(let S=-o;S<=o;S++)for(let I=-o;I<=o;I++){let E=Math.max(0,Math.hypot(I,S)*s-l);E<=i+1e-9&&f.push(I,S,h(E))}let{nx:d,ny:g,h:p,x0:x,y0:v}=n,b={r:i,c:s,n:o,zFloor:e,x:S=>x+S*s,y:S=>v+S*s};b.drop=(S,I)=>{let E=-1/0;for(let C=0;C<f.length;C+=3){let w=S+f[C],N=I+f[C+1];if(w<0||N<0||w>=d||N>=g)continue;let F=p[N*d+w]-f[C+2];F>E&&(E=F)}return E===-1/0?null:Math.max(E,e)},b.dropAt=(S,I)=>{let E=(S-x)/s,C=(I-v)/s,w=(i+l)/s,N=-1/0;for(let F=Math.max(0,Math.ceil(C-w));F<=Math.min(g-1,Math.floor(C+w));F++)for(let U=Math.max(0,Math.ceil(E-w));U<=Math.min(d-1,Math.floor(E+w));U++){let G=Math.max(0,Math.hypot(U-E,F-C)*s-l);if(G>i)continue;let V=p[F*d+U]-h(G);V>N&&(N=V)}return N===-1/0?null:Math.max(N,e)},b.underAt=(S,I)=>{let E=(S-x)/s,C=(I-v)/s,w=(i+l)/s,N=e;for(let F=Math.max(0,Math.ceil(C-w));F<=Math.min(g-1,Math.floor(C+w));F++)for(let U=Math.max(0,Math.ceil(E-w));U<=Math.min(d-1,Math.floor(E+w));U++)p[F*d+U]>N&&(N=p[F*d+U]);return N};let y=1/0,_=-1,A=1/0,T=-1;for(let S=0;S<g;S++)for(let I=0;I<d;I++)p[S*d+I]!==-1/0&&(I<y&&(y=I),I>_&&(_=I),S<A&&(A=S),S>T&&(T=S));return b.box=_<0?null:{i0:Math.max(0,y-o),i1:Math.min(d-1,_+o),j0:Math.max(0,A-o),j1:Math.min(g-1,T+o)},b}function Hp(n,t,e,i,s,a){let l=e[0],o=n.at;if(o&&!o.r&&Math.hypot(l.x-o.x,l.y-o.y)<=s){let f=Math.max(1,Math.ceil(Math.hypot(l.x-o.x,l.y-o.y)/(t.c/2))),d=Math.max(o.z,l.z),g=!1;for(let p=1;p<f;p++){let x=p/f,v=t.dropAt(o.x+(l.x-o.x)*x,o.y+(l.y-o.y)*x)??t.zFloor;v>o.z+(l.z-o.z)*x+.001&&(g=!0,d=Math.max(d,v))}g&&(n.feed(o.x,o.y,d+.5,i.feed),n.feed(l.x,l.y,d+.5,i.feed)),n.feed(l.x,l.y,l.z,i.plunge)}else n.goTo(l.x,l.y,t.underAt(l.x,l.y)+a),n.feed(l.x,l.y,l.z,i.plunge);let h=l;for(let f of e.slice(1))n.feed(f.x,f.y,f.z,h.z-f.z>kb*Math.hypot(f.x-h.x,f.y-h.y)?i.plunge:i.feed),h=f}function Vb(n,t,e,i,s,a,l,o=!0){let h=Bb(t,e,a);if(!h.box)return;let{r:f,c:d}=h,{i0:g,i1:p,j0:x,j1:v}=h.box,b=e.kind==="ball"?2*Math.sqrt(Math.max(0,2*f*s-s*s)):i.stepover*.5,y=Math.max(1,Math.floor(Math.min(b,f)/d+1e-9)),_=3*y*d+1e-6,A=[];for(let T=x;T<=v;T+=y)A.push(T);A[A.length-1]!==v&&A.push(v),A.forEach((T,S)=>{let I=[],E=[];for(let C=g;C<=p;C++){let w=h.drop(C,T);if(w===null){E.length&&I.push(E),E=[];continue}E.push({x:h.x(C),y:h.y(T),z:w})}E.length&&I.push(E),S%2&&(I.reverse(),I.forEach(C=>C.reverse()));for(let C of I)Hp(n,h,Gp(C,.005),i,_,l)}),o&&Hb(n,h,i,Math.min(b,f),_,l),n.retract()}function Hb(n,t,e,i,s,a){let{i0:o,i1:h,j0:f,j1:d}=t.box,g=Math.floor((h-o)/2)+1,p=Math.floor((d-f)/2)+1,x=new Float32Array(g*p),v=-1/0;for(let S=0;S<p;S++)for(let I=0;I<g;I++){let E=t.drop(o+I*2,f+S*2);x[S*g+I]=E===null?NaN:E,E!==null&&E>v&&(v=E)}let b=2*t.c,y=zb*b,_=S=>t.x(o+S*2),A=S=>t.y(f+S*2),T=new Uint8Array(g*p);for(let S=0;S+1<p;S++)for(let I=0;I+1<g;I++){let E=x[S*g+I],C=x[S*g+I+1],w=x[(S+1)*g+I],N=x[(S+1)*g+I+1];[E,C,w,N].some(Number.isNaN)||(Math.abs(E-C)>y||Math.abs(w-N)>y||Math.abs(E-w)>y||Math.abs(C-N)>y)&&(T[S*g+I]=1)}for(let S=v-i/2;S>t.zFloor+.05;S-=i){let I=new Map,E=[],C=(U,G,V)=>{let k=V?`h${U},${G}`:`v${U},${G}`;if(!I.has(k)){let q=x[G*g+U],Z=V?x[G*g+U+1]:x[(G+1)*g+U],B=(S-q)/(Z-q);I.set(k,{key:k,x:V?_(U)+B*b:_(U),y:V?A(G):A(G)+B*b,segs:[]})}return I.get(k)};for(let U=0;U+1<p;U++)for(let G=0;G+1<g;G++){if(!T[U*g+G])continue;let V=x[U*g+G]>S,k=x[U*g+G+1]>S,q=x[(U+1)*g+G]>S,Z=x[(U+1)*g+G+1]>S,B=[];V!==k&&B.push(C(G,U,!0)),k!==Z&&B.push(C(G+1,U,!1)),q!==Z&&B.push(C(G,U+1,!0)),V!==q&&B.push(C(G,U,!1));for(let K=0;K+1<B.length;K+=2){let j=[B[K],B[K+1]];E.push(j),j[0].segs.push(j),j[1].segs.push(j)}}let w=new Set,N=[];for(let U of E){if(w.has(U))continue;w.add(U);let G=[U[0],U[1]];for(let V of[!1,!0])for(;;){let k=V?G[0]:G[G.length-1],q=k.segs.find(B=>!w.has(B));if(!q)break;w.add(q);let Z=q[0]===k?q[1]:q[0];V?G.unshift(Z):G.push(Z)}G.length>=3&&N.push(G)}let F=n.at;for(;N.length;){let U=0,G=1/0,V=!1;N.forEach((Z,B)=>{for(let[K,j]of[[Z[0],!1],[Z[Z.length-1],!0]]){let st=F?Math.hypot(K.x-F.x,K.y-F.y):0;st<G&&(G=st,U=B,V=j)}});let[k]=N.splice(U,1);V&&k.reverse();let q=k.map(Z=>({x:Z.x,y:Z.y,z:Math.max(S,t.dropAt(Z.x,Z.y)??S)}));Hp(n,t,Gp(q,.005),e,s,a),F=n.at}}}function Gp(n,t){if(n.length<3)return n;let e=new Uint8Array(n.length);e[0]=e[n.length-1]=1;let i=[[0,n.length-1]];for(;i.length;){let[s,a]=i.pop(),l=n[s],o=n[a],h=o.x-l.x,f=o.y-l.y,d=o.z-l.z,g=h*h+f*f+d*d,p=-1,x=t;for(let v=s+1;v<a;v++){let b=n[v],y=g>0?((b.x-l.x)*h+(b.y-l.y)*f+(b.z-l.z)*d)/g:0,_=Math.hypot(l.x+h*y-b.x,l.y+f*y-b.y,l.z+d*y-b.z);_>x&&(x=_,p=v)}p>=0&&(e[p]=1,i.push([s,p],[p,a]))}return n.filter((s,a)=>e[a])}function Gb(n){let t=[],e=[];n.forEach((i,s)=>{let a=[];for(let l of Zn(i.region)){let o=to([l[0]]),h=[...new Set(t.filter(d=>d.b.minX<o.maxX&&o.minX<d.b.maxX&&d.b.minY<o.maxY&&o.minY<d.b.maxY&&Qr(ua(d.last,l))>0).map(d=>d.spot))],f=h[0]||{parts:[]};h.length||e.push(f);for(let d of h.slice(1)){f.parts.push(...d.parts),e=e.filter(g=>g!==d);for(let g of[...t,...a])g.spot===d&&(g.spot=f)}f.parts.push({k:s,area:l}),a.push({k:s,b:o,last:l,spot:f})}t.length=0,t.push(...a)});for(let i of e)i.parts.sort((s,a)=>s.k-a.k);return e.map(i=>Object.assign([...i.parts[0].area],{parts:i.parts}))}function Ar(n,t){let e=l=>{let o=to([l[0]]);return[(o.minX+o.maxX)/2,(o.minY+o.maxY)/2]},i=n.map(l=>({a:l,m:e(l)})),s=[],a=t?[t.x,t.y]:i[0]?.m;for(;i.length;){let l=0;for(let h=1;h<i.length;h++)Math.hypot(i[h].m[0]-a[0],i[h].m[1]-a[1])<Math.hypot(i[l].m[0]-a[0],i[l].m[1]-a[1])&&(l=h);let[o]=i.splice(l,1);s.push(o.a),a=o.m}return s}function Xb(n,t,e,i,s,a){let l=[...new Set(n.map(h=>h.z))].sort((h,f)=>f-h),o=a;for(let h of l){if(h<t-1e-6||!Cr([i,s],Wb(n,h,e)))break;o=h}return Math.max(o,t)}function Wb(n,t,e){let i=n.filter(o=>Math.abs(o.z-t)<1e-6);n.inner||=new Map;let s=`${t}|${e}`,a=n.inner.get(s);if(a&&a.n===i.length)return a.loops;let l=ve(cn(i.flatMap(o=>o.area)),-e-Mb);return n.inner.set(s,{n:i.length,loops:l}),l}function Xp(n){let t=n.stock.top+vb,e=[],i=null,s=(zn[n.job.finish]||zn.balanced).allowance,l=n.ops.some(o=>o.kind==="face"&&o.enabled)?n.analysis.top:n.stock.top;for(let o of n.ops){let h=new Tu(t),f=o.kind!=="face"&&o.zTop>=n.analysis.top-1e-6?Math.max(o.zTop,l):o.zTop,d=o.tool.diameter/2,g={...o.feeds,toolR:d,accel:n.limits?.accel||0,packsChips:!!o.tool.cut},p=Math.min(o.tool.fluteLength||1/0,3*o.tool.diameter);switch(o.kind){case"face":Rb(h,n.stock,d,g,f,o.zBottom);break;case"hole":if(o.bore){Nb(h,o.centers,d,g,f,o.zBottom);break}case"pocket":case"step":for(let x of Ar(Zn(o.region),h.at))bc(h,x,d,g,f,o.zBottom,s),s>0&&kp(h,x,d,g,f,o.zBottom,p);break;case"corners":{let x=n.ops.find(v=>v.id===o.after);Ib(h,o.region,d,x?x.tool.diameter/2:d*2,g,f,o.zBottom);break}case"rough3d":case"rest3d":{let x=o.kind==="rough3d"?o.allowance:0,v=b=>(y,_)=>Xb(e,o.layers[b].zFrom,d,y,_,f);if(i||=new Au(n.stock,l),h.travel=(b,y)=>i.over(b,y,d),o.kind==="rest3d"){for(let b of Ar(Gb(o.layers),h.at))for(let{k:y,area:_}of b.parts){let A=o.layers[y],T=A.zFrom>=n.analysis.top-1e-6?f:A.zFrom;bc(h,_,d,g,T,A.z,0,f+1,v(y));let S=ve(ve(_,-d),d);S.length&&o.enabled&&(e.push({zFrom:T,z:A.z,area:S}),i.layer(S,T,A.z))}h.travel=null,h.retract();break}o.layers.forEach((b,y)=>{let _=b.zFrom>=n.analysis.top-1e-6?f:b.zFrom;for(let T of Ar(Zn(b.region),h.at))bc(h,T,d,g,_,b.z,x,f+1,v(y));for(let T of Ar(Zn(b.fresh||[]),h.at))bc(h,T,d,g,f,b.z,x,f+1);x>0&&y&&Cb(h,b.exact||b.region,o.layers[y-1].exact||o.layers[y-1].region,d,g,_,b.z,v(y));let A=ve(ve([...b.region,...b.fresh||[]],-(d+x)),d);A.length&&o.enabled&&(e.push({zFrom:_,z:b.z,area:A}),i.layer(A,_,b.z))}),h.travel=null,h.retract();break}case"finish3d":Vb(h,o.surface,o.tool,g,o.ridge,0,o.left??bb,o.steep!==!1);break;case"drill":Db(h,o.centers,g,f,o.zBottom,o.tool.diameter);break;case"thread":Lb(h,o,g,n.job.finish);break;case"cutout":Ob(h,o.region,d,g,f,o.zBottom,o.tabs===!1?{...n.job,tabs:{...n.job.tabs,enabled:!1}}:n.job,s);break;case"inside":Fb(h,o.loops,d,g,f,o.zBottom,n.job,s,o.tabs);break;case"online":Ub(h,o.lines,g,f,o.zBottom);break;case"chamfer":Pb(h,o.levels.map(x=>x.z>=n.analysis.top-1e-6?{...x,z:x.z+l-n.analysis.top}:x),g);break}o.moves=h.moves}return n}var vb,bb,Mb,Tu,Wn,Bp,kb,zb,Au,Cu=pe(()=>{eo();io();vb=3,bb=3.5,Mb=.02;Tu=class{constructor(t){this.moves=[],this.clearZ=t,this.at=null,this.travel=null}rapid(t,e,i){this.push({r:!0,x:t,y:e,z:i})}feed(t,e,i,s){this.push({x:t,y:e,z:i,f:s})}push(t){let e=this.at;e&&Math.abs(e.x-t.x)<1e-6&&Math.abs(e.y-t.y)<1e-6&&Math.abs(e.z-t.z)<1e-6||(this.moves.push(t),this.at=t)}goTo(t,e,i){let s=this.at,a=this.clearZ;s&&this.travel&&(a=Math.min(a,Math.max(this.travel(s,{x:t,y:e}),s.z,i+1))),s&&this.rapid(s.x,s.y,a),this.rapid(t,e,a),this.rapid(t,e,i+1)}retract(){this.at&&!this.travel&&this.rapid(this.at.x,this.at.y,this.clearZ)}},Wn=class{constructor(t){this.p=t,this.s=[0];for(let e=1;e<=t.length;e++){let i=t[e-1],s=t[e%t.length];this.s.push(this.s[e-1]+Math.hypot(s[0]-i[0],s[1]-i[1]))}this.length=this.s[t.length]}at(t){let e=this.length,i=(t%e+e)%e,s=1;for(;s<this.s.length-1&&this.s[s]<i;)s++;let a=this.p[s-1],l=this.p[s%this.p.length],o=this.s[s]-this.s[s-1]||1,h=(i-this.s[s-1])/o;return[a[0]+(l[0]-a[0])*h,a[1]+(l[1]-a[1])*h]}breaks(t,e){let i=[],s=this.length;for(let a=Math.floor(t/s);a*s<=e;a++)for(let l=0;l<this.p.length;l++){let o=a*s+this.s[l];o>t+1e-9&&o<e-1e-9&&i.push(o)}return i}nearest([t,e]){let i=0,s=1/0;for(let a=0;a<this.p.length;a++){let l=(this.p[a][0]-t)**2+(this.p[a][1]-e)**2;l<s&&(s=l,i=this.s[a])}return i}};Bp={fast:[.6,1],balanced:[.5,.8,1,1],smooth:[.4,.65,.85,1,1]};kb=Math.tan(70*Math.PI/180);zb=Math.tan(50*Math.PI/180);Au=class{constructor(t,e){this.c=1,this.x0=t.minX,this.y0=t.minY,this.nx=Math.ceil((t.maxX-t.minX)/this.c)+1,this.ny=Math.ceil((t.maxY-t.minY)/this.c)+1,this.top=new Float32Array(this.nx*this.ny).fill(e)}layer(t,e,i){let{c:s,x0:a,y0:l,nx:o,ny:h,top:f}=this,d=ve(t,-(s*Math.SQRT1_2+.02));for(let g=0;g<h;g++){let p=l+g*s,x=[];for(let v of d)for(let b=0;b<v.length;b++){let[y,_]=v[b],[A,T]=v[(b+1)%v.length];_<=p!=T<=p&&x.push(y+(p-_)/(T-_)*(A-y))}x.sort((v,b)=>v-b);for(let v=0;v+1<x.length;v+=2)for(let b=Math.max(0,Math.ceil((x[v]-a)/s));b<=Math.min(o-1,Math.floor((x[v+1]-a)/s));b++){let y=g*o+b;f[y]<=e+1e-6&&i<f[y]&&(f[y]=i)}}}over(t,e,i){let{c:s,x0:a,y0:l,nx:o,ny:h,top:f}=this,d=(i+1.5*s)/s,g=Math.max(1,Math.ceil(Math.hypot(e.x-t.x,e.y-t.y)/(s/2))),p=-1/0;for(let x=0;x<=g;x++){let v=(t.x+(e.x-t.x)*x/g-a)/s,b=(t.y+(e.y-t.y)*x/g-l)/s;for(let y=Math.max(0,Math.ceil(b-d));y<=Math.min(h-1,Math.floor(b+d));y++)for(let _=Math.max(0,Math.ceil(v-d));_<=Math.min(o-1,Math.floor(v+d));_++)(_-v)**2+(y-b)**2<=d*d&&f[y*o+_]>p&&(p=f[y*o+_])}return p+1}}});function Ec(n){let t=n.flatMap(v=>v.pts);if(!t.length)return{shapes:[],size:[0,0],nest:[]};let e=Math.min(...t.map(v=>v[0])),i=Math.min(...t.map(v=>v[1])),s=Math.max(...t.map(v=>v[0])),a=Math.max(...t.map(v=>v[1])),l=n.map(v=>({...v,pts:v.pts.map(([b,y])=>[b-e,y-i])})),o=l.map(v=>v.closed&&v.pts.length>2&&Math.abs(en(Yp(v.pts)))>Rs?Zp(Yp(v.pts)):null),h=o.map(v=>v?en(v):0),f=l.map((v,b)=>{let y=v.pts[0],_=-1,A=0;return o.forEach((T,S)=>{!T||S===b||h[S]<=h[b]||!Mi(y,T)||(A++,(_<0||h[S]<h[_])&&(_=S))}),{parent:_,depth:A}}),d=o.map(v=>v?Yb(v):null),g=v=>l[v].layer??l[v].color,p=(v,b)=>d[v]&&d[b]&&g(v)===g(b)&&Math.hypot(d[v].x-d[b].x,d[v].y-d[b].y)<.05;f.forEach((v,b)=>{if(v.step=null,!d[b])return;let y=0,_=b;for(let T=v.parent;T>=0&&p(b,T);T=f[T].parent)y++,_=T;let A=f.some((T,S)=>T.parent===b&&p(b,S));(y||A)&&f[_].depth>0&&(v.step=y,v.last=!A,v.top=_)});let x=new Map;return f.forEach(v=>{v.top!==void 0&&v.step!==null&&x.set(v.top,(x.get(v.top)||0)+1)}),f.forEach(v=>{v.top!==void 0&&v.step!==null&&(v.of=x.get(v.top))}),{shapes:l,loops:o,areas:h,nest:f,circles:d,size:[s-e,a-i]}}function Yb(n){if(n.length<12)return null;let t=n.reduce((a,l)=>a+l[0],0)/n.length,e=n.reduce((a,l)=>a+l[1],0)/n.length,i=n.map(a=>Math.hypot(a[0]-t,a[1]-e)),s=i.reduce((a,l)=>a+l,0)/i.length;return s>0&&i.every(a=>Math.abs(a-s)<=Math.max(.01*s,.02))&&Math.abs(Math.abs(en(n))-Math.PI*s*s)<=.03*Math.PI*s*s?{x:t,y:e,r:s}:null}function Jp(n,t){if(!n.loops[t])return"online";let e=n.nest[t];return e.step!==null&&e.step!==void 0?e.last?"inside":"pocket":e.depth%2?"inside":"outside"}function jp(n,t=6){return{material:"mdf",finish:"balanced",stock:{fit:!0,margin:5,width:n.size[0]+10,depth:n.size[1]+10,thickness:t},zero:{xy:"front-left",z:"top"},tabs:{enabled:!0,count:4,...hi("mdf")},throughDepth:.3,groups:{},layers:{},shapes:{},depths:{pocket:3,online:1},disabled:{},toolOverride:{}}}function Pu(n){let t=new Map,e=a=>Math.round(a*100)/100,i=new Set(n.shapes.map(a=>a.layer??a.color)).size>1;n.shapes.forEach((a,l)=>{let o=Jp(n,l),h=n.nest[l],f=n.circles[l],d=i?`${a.layer??a.color}:`:"",g,p,x;if(!n.loops[l])g=`line:${d}`,p="line",x="line";else if(o==="outside"&&h.depth===0)g=`outline:${d}`,p="outline",x="outline";else if(f&&h.step!==null&&h.step!==void 0){let v=l;for(;n.nest[v].step>0;)v=n.nest[v].parent;let b=[];for(let y=v;y>=0;)b.push(e(2*n.circles[y].r)),y=n.nest.findIndex((A,T)=>A.parent===y&&n.nest[T].step===n.nest[y].step+1);g=`cb:${d}${b.join("/")}:${h.step}`,p="counterbore",x={d:2*f.r,sizes:b,step:h.step,last:h.last}}else if(f)g=`circle:${d}${e(2*f.r)}:${o}`,p="circle",x={d:2*f.r};else{let v=to([n.loops[l]]),b=v.maxX-v.minX,y=v.maxY-v.minY,_=Math.abs(n.areas[l]-b*y)<.01*b*y;g=`shape:${d}${e(b)}x${e(y)}:${Math.round(n.areas[l])}:${o}`,p=_?"rect":"shape",x={w:b,h:y}}t.has(g)||t.set(g,{key:g,kind:p,label:x,layer:i?a.layer??a.color:null,idx:[],cut:o}),t.get(g).idx.push(l)});let s={outline:0,counterbore:1,circle:2,rect:3,shape:4,line:5};return[...t.values()].sort((a,l)=>s[a.kind]-s[l.kind]||(l.label?.d||0)-(a.label?.d||0)||a.key.localeCompare(l.key))}function Ir(n){let t=new Map;for(let e of n)for(let i of e.idx)t.set(i,e.key);return t}function is(n,t,e,i=null){let s=n.shapes[e],a=t.shapes?.[e]||i&&t.groups?.[i.get(e)],l=t.layers?.[s.layer??s.color],o=a?.cut||l?.cut||Jp(n,e),h=n.nest[e],f=o==="pocket"&&h.step!==null&&h.step!==void 0,d=t.stock?.thickness,g=()=>{let x=t.depths.pocket*(h.step+1);return d>0?Math.min(x,d*(h.step+1)/(h.of||2)):x},p=a?.depth!==void 0?a.depth:l?.depth!==void 0?l.depth:f?g():o==="pocket"||o==="online"?t.depths[o]:null;return{cut:o==="online"||o==="off"||n.loops[e]?o:"online",depth:p}}function Tc(n,t){let[e,i]=n.size,s=t.stock,a=s.fit?e+2*s.margin:Math.max(e,s.width),l=s.fit?i+2*s.margin:Math.max(i,s.depth),o=s.thickness;return{minX:(e-a)/2,minY:(i-l)/2,maxX:(e+a)/2,maxY:(i+l)/2,bottom:0,top:o,width:a,depth:l,thickness:o}}function Iu(n,t){let e=t.xy.split("-"),i=(n.minX+n.maxX)/2,s=(n.minY+n.maxY)/2;return e.includes("left")&&(i=n.minX),e.includes("right")&&(i=n.maxX),e.includes("front")&&(s=n.minY),e.includes("back")&&(s=n.maxY),{x:i,y:s,z:t.z==="bed"?n.bottom:n.top}}function Kp(n,t,e,i={}){let s=B=>$c(B,e.units),a=Tc(n,e),l=a.top,o=[],h=[],f=t.filter(B=>B.kind==="flat").sort((B,K)=>K.diameter-B.diameter),d=e.material==="aluminum"?8:12.8,g=new Set,p=B=>(g.add(B.id),B),x=B=>B==null||B>=l-1e-6?-e.throughDepth:Math.max(l-B,0),v=B=>l-B,b=B=>B==null||B>=l-1e-6?"through":`${s(B)} deep`,y=new Map,_=Ir(Pu(n));n.shapes.forEach((B,K)=>{let j=is(n,e,K,_);if(j.cut==="off")return;let st=x(j.depth);if(st>=l-1e-6)return;let X=`${j.cut}@${st}`;y.has(X)||y.set(X,{cut:j.cut,z:st,depth:j.depth,idx:[]}),y.get(X).idx.push(K)});let A=[...y.values()],T=n.shapes.map((B,K)=>is(n,e,K,_).cut),S=B=>{for(let K=n.nest[B].parent;K>=0;K=n.nest[K].parent)if(T[K]==="pocket")return!0;return!1},I=B=>A.filter(K=>K.cut===B).sort((K,j)=>j.z-K.z),E=(B,K)=>Qr(ve(ve(B,-K),K))/Math.max(Qr(B),Rs);for(let B of I("pocket")){let K=n.loops.map((St,Vt)=>St&&T[Vt]==="outside"&&B.idx.some($t=>$p(n,Vt,$t))?St:null).filter(Boolean),j=sn(pn(Wp(B.idx.map(St=>n.loops[St])),cn(K)),Rs);if(!j.length)continue;let st=f.filter(St=>St.diameter<=d&&Sc(St,v(B.z))&&ve(j,-St.diameter/2).length);if(!st.length){o.push({kind:"notool",text:`No end mill fits the pockets ${b(B.depth)}.`});continue}let X=st.map(St=>({t:St,c:E(j,St.diameter/2)})),bt=X.find(St=>St.c>=.95)||X.reduce((St,Vt)=>Vt.c>St.c?Vt:St);bt.c<.995&&o.push({kind:"corners",text:`${bt.t.name} leaves the pockets' tightest corners rounded.`}),h.push({id:`pocket@${B.z}`,kind:"pocket",label:B.idx.length>1?`Clear ${B.idx.length} pockets`:"Clear the pocket",tool:p(bt.t),zTop:l,zBottom:B.z,region:j,detail:b(B.depth)})}let C=B=>B.slice().sort((K,j)=>Math.abs(K.diameter-6.35)-Math.abs(j.diameter-6.35))[0]||null,w=(B,K)=>{let j=f.filter(st=>st.diameter<=d&&Sc(st,B)&&K(st));return j.find(st=>g.has(st.id))||C(j)},N=B=>T[B]==="outside"&&n.loops[B]&&!S(B),F=B=>n.nest[B].depth>0,U=(zn[e.finish]||zn.balanced).allowance,G=(B,K)=>ve([K],-(B.diameter/2+U+.1)).length>0;function V(B,K,j){let st=f.filter(Vt=>Vt.diameter<=d&&Sc(Vt,v(B.z))),X=C(st),bt=new Map,St=0;for(let Vt of K){let $t=n.loops[Vt],te=st.filter(gt=>G(gt,$t)),ut=te.find(gt=>g.has(gt.id))||C(te);if(!ut){St++;continue}bt.has(ut)||bt.set(ut,[]),bt.get(ut).push($t)}St&&o.push({kind:"notool",text:`No end mill fits inside ${St>1?`${St} shapes`:"a shape"} cut ${b(B.depth)} with room to move: left uncut.`});for(let Vt=!0;Vt&&bt.size>1;){Vt=!1;for(let[$t,te]of[...bt].filter(([ut])=>!g.has(ut.id)&&ut!==X).sort((ut,gt)=>ut[1].length-gt[1].length)){let ut=[...bt.keys()].filter(gt=>gt!==$t).sort((gt,Dt)=>Dt.diameter-gt.diameter);if(te.every(gt=>ut.some(Dt=>G(Dt,gt)))){for(let gt of te)bt.get(ut.find(Dt=>G(Dt,gt))).push(gt);bt.delete($t),Vt=!0;break}}}for(let[Vt,$t]of[...bt].sort((te,ut)=>ut[0].diameter-te[0].diameter))h.push({id:`inside@${B.z}#${Vt.id}${j?":tabs":""}`,kind:"inside",label:`${j?"Cut round the windows":$t.length>1?`Cut ${$t.length} shapes inside`:"Cut inside the shape"}`,tool:p(Vt),zTop:l,zBottom:B.z,loops:$t,region:$t,tabs:j&&B.z<0&&e.tabs.enabled,detail:`${b(B.depth)}${j&&B.z<0&&e.tabs.enabled?" \xB7 tabs hold the parts in them":""}`})}for(let B of I("inside")){let K=j=>n.shapes.some((st,X)=>N(X)&&$p(n,X,j));V(B,B.idx.filter(j=>!K(j)),!1),V(B,B.idx.filter(K),!0)}for(let B of I("outside"))for(let K of[!0,!1]){let j=B.idx.filter(St=>N(St)&&F(St)===K);if(!j.length)continue;let st=Wp(j.map(St=>n.loops[St])),X=w(v(B.z),()=>!0);if(!X){o.push({kind:"notool",text:`No end mill is long enough to cut out ${b(B.depth)} (${s(v(B.z))}).`});continue}let bt=B.z<0;h.push({id:`cutout${K?"-in":""}@${B.z}`,kind:"cutout",inner:K,label:K?"Cut out the parts in the windows":"Cut out the parts",tool:p(X),zTop:l,zBottom:B.z,region:st,tabs:bt,detail:`${b(B.depth)}${bt?` \xB7 ${e.tabs.enabled?`${e.tabs.count} tabs each`:"no tabs"}`:""}`})}for(let B of I("online")){let K=f.filter(X=>Sc(X,v(B.z))),j=K.filter(X=>g.has(X.id)).sort((X,bt)=>X.diameter-bt.diameter)[0]||K.sort((X,bt)=>X.diameter-bt.diameter)[0];if(!j){o.push({kind:"notool",text:`No end mill reaches ${b(B.depth)} for the lines.`});continue}let st=B.idx.map(X=>({pts:n.shapes[X].pts,closed:!!n.loops[X]}));h.push({id:`online@${B.z}`,kind:"online",label:"Cut on the lines",tool:p(j),zTop:l,zBottom:B.z,lines:st,count:B.idx.length,detail:`${B.idx.length} line${B.idx.length>1?"s":""} \xB7 ${b(B.depth)} \xB7 a groove ${s(j.diameter)} wide`})}let k=B=>B.kind==="online"?0:B.kind==="pocket"?1:B.kind==="cutout"&&B.inner?2:B.kind==="inside"?3:4;h.sort((B,K)=>k(B)-k(K)||K.zBottom-B.zBottom);for(let B of h){let K=e.toolOverride?.[B.id];if(K){let j=t.find(st=>st.id===K);j&&(B.tool=j)}B.enabled=!e.disabled?.[B.id],B.feeds=Yc(B.tool,e.material,e.finish,i)}if(e.chamfer?.size>0){let B=$b({a:n,job:e,tools:t,stock:a,ops:h,warnings:o,L:s});B&&(B.enabled=!e.disabled?.[B.id],B.feeds=Yc({...B.tool,diameter:Math.min(B.tool.diameter,2*(B.size+Pr))},e.material,e.finish,i),h.push(B))}let q=e.tabs.enabled?e:{...e,tabs:{...e.tabs,enabled:!1}},Z={top:l,size:[n.size[0],n.size[1],l]};return i.maxRpm>0&&i.maxRpm<Of&&o.push({kind:"spindle",text:`Spindle max is ${Math.round(i.maxRpm)} RPM (${i.source||"$30"}), so every bit is planned at ${Math.round(i.maxRpm)} RPM and its feed slowed to match. If the spindle goes faster, ${String(i.source||"$").startsWith("$")?"set its maximum in Firmware settings":"check its settings in the drive and in Firmware settings"}.`}),{analysis:Z,stock:a,zero:Iu(a,e.zero),ops:h,warnings:o,job:q,limits:i}}function $b({job:n,tools:t,stock:e,ops:i,warnings:s,L:a}){let l=n.chamfer.size,o=n.chamfer.edges||"all",h=e.top,f=t.filter(X=>(X.kind==="vbit"||X.kind==="chamfer")&&X.angle>0&&X.angle<180),d=X=>X.angle*Math.PI/360,g=X=>X.diameter/2>=l+Pr+.1&&(!X.fluteLength||X.fluteLength>=(l+Pr)/Math.tan(d(X))-1e-6),p=t.find(X=>X.id===n.toolOverride?.chamfer&&f.includes(X)),x=p&&g(p)?p:null;p&&!x&&s.push({kind:"chamfer",text:`${p.name} is too small for a ${a(l)} chamfer, so another V-bit is used.`});let v=x||f.filter(g).sort((X,bt)=>Math.abs(X.angle-90)-Math.abs(bt.angle-90)||X.diameter-bt.diameter)[0];if(!v)return s.push({kind:"chamfer",text:f.length?`No V-bit in your Tool Library is wide enough for a ${a(l)} chamfer.`:"Adding a chamfer to top surfaces needs a V-bit in your Tool Library."}),null;let b=(l+Pr)/Math.tan(d(v)),y={stock:e,ops:i},_=wu(y),A=Up(y);if(!A.length)return s.push({kind:"chamfer",text:"No cut makes an edge to chamfer."}),null;let T=[[e.minX,e.minY],[e.maxX,e.minY],[e.maxX,e.maxY],[e.minX,e.maxY]],S=cn(_.flatMap(X=>X.region)),I=sn(pn(pn([T],A),S),Rs),E=X=>X.kind==="cutout"?pn(ve(X.region,X.tool.diameter),X.region):X.kind==="inside"?pn(X.loops,ve(X.loops,-X.tool.diameter)):X.region,C=i.filter(X=>X.enabled!==!1&&X.kind!=="online"&&X.kind!=="chamfer"),w=C.filter(X=>X.zBottom>0).map(X=>{let bt=C.filter(St=>St.zBottom<X.zBottom).flatMap(E);return{z:X.zBottom,area:bt.length?pn(E(X),bt):E(X)}}),N=X=>cn([..._.filter(bt=>bt.z>X).flatMap(bt=>bt.region),...h>X?I:[],...w.filter(bt=>bt.z>X).flatMap(bt=>bt.area)]),F=n.tabs.height??hi(n.material).height,U=n.tabs.length??hi(n.material).length,G=X=>{if(!n.tabs.enabled)return[];let bt=[];for(let St of i){if(St.enabled===!1||!St.tabs||St.zBottom>0)continue;let Vt=St.tool.diameter/2,$t=St.kind==="cutout"?Vp(St.region,Vt,n):St.kind==="inside"?qb(St.loops,Vt,n):[];for(let te of $t)bt.push({q:te,rad:U/2+Vt+X+.5})}return bt.map(({q:[St,Vt],rad:$t})=>Array.from({length:24},(te,ut)=>[St+$t*Math.cos(ut*Math.PI/12),Vt+$t*Math.sin(ut*Math.PI/12)]))},V=ve(A,.05),k=v.diameter/2,q=l+Pr,Z=!1,B=!1,K=0,j=[],st=[...new Set(_.map(X=>X.z))].filter(X=>X>ns).sort((X,bt)=>bt-X);for(let X of st){let bt=X-b;if(bt<-n.throughDepth+.1){Z=!0;continue}let St=sn(cn(_.filter(be=>be.z>=X-ns).flatMap(be=>be.region)),Rs);if(!St.length)continue;let Vt=X<h-ns?N(X+ns):[],$t=sn(pn(N(Math.max(bt,ns)+ns),ve(St,.01)),Rs),te=n.tabs.enabled&&bt<=Math.max(ns,F+.2),ut=te?G(k):[],gt=Math.min(k,(h-bt)*Math.tan(d(v))),Dt=cn([...X<h-ns?ve(Vt,k+.1):[],...ve(I,gt+.1),...ve($t,q+.1),...ut]),ne=[];for(let[be,...he]of Zn(Pf(St,Pr)))o!=="inside"&&ne.push(be),o!=="outside"&&ne.push(...he);let Ot=be=>!Ps(be,V)||Ps(be,Dt),ce=ne.filter(be=>{if(!be.some(ge=>Ps(ge,V)))return!1;let he=0;for(let ge=0;ge<be.length;ge++){let Se=be[ge],ue=be[(ge+1)%be.length],Ae=Math.hypot(ue[0]-Se[0],ue[1]-Se[1]),Ue=Math.max(1,Math.ceil(Ae/.25));for(let Ye=0;Ye<Ue;Ye++)if(Ot([Se[0]+(ue[0]-Se[0])*Ye/Ue,Se[1]+(ue[1]-Se[1])*Ye/Ue]))he=0;else if((he+=Ae/Ue)>=.5)return!0}return K++,!1});ce.length&&(j.push({z:X,depth:b,loops:ce,bad:Dt,keep:V}),te&&ut.length&&o!=="inside"&&(B=!0))}return Z&&s.push({kind:"chamfer",text:`Some edges are too low to chamfer ${a(l)} without cutting the spoilboard.`}),j.length?(B&&s.push({kind:"chamfer",text:"The chamfer lifts over the tabs: sand those spots after breaking the part free."}),K&&s.push({kind:"chamfer",text:`${K} edge${K>1?"s are":" is"} left square: a step below or other material is too close for a ${a(l)} chamfer.`}),{id:"chamfer",kind:"chamfer",label:"Add Chamfer to top surfaces",tool:v,zTop:h,zBottom:Math.min(...j.map(X=>X.z-X.depth)),region:cn(_.flatMap(X=>X.region)),levels:j,show:j.map(X=>({z:X.z,loops:X.loops})),size:l,angle:v.angle/2,detail:`${a(l)} wide \xB7 ${Math.round(v.angle)}\xB0 bit \xB7 ${{all:"all edges",outside:"outside edges",inside:"pockets and holes"}[o]}`}):(s.push({kind:"chamfer",text:`No edge can take a ${a(l)} chamfer with ${v.name}.`}),null)}function qb(n,t,e){let i=Math.max(0,Math.round(e.tabs.count)),s=[];for(let a of n)for(let l of ci(sn(ve([Zp(a)],-t),.001),.005).filter(o=>en(o)>0)){let o=l.map((f,d)=>Math.hypot(l[(d+1)%l.length][0]-f[0],l[(d+1)%l.length][1]-f[1])),h=o.reduce((f,d)=>f+d,0);for(let f=0;f<i;f++){let d=(f+.5)/i*h,g=0;for(;g<l.length-1&&d>o[g];)d-=o[g++];let p=l[g],x=l[(g+1)%l.length],v=o[g]?d/o[g]:0;s.push([p[0]+(x[0]-p[0])*v,p[1]+(x[1]-p[1])*v])}}return s}function $p(n,t,e){if(!n.loops[e]||n.areas[t]>=n.areas[e])return!1;for(let i=n.nest[t].parent;i>=0;i=n.nest[i].parent)if(i===e)return!0;return!1}function Ac(n){let t=[];for(let e of n.ops)e.enabled&&!t.some(i=>i.id===e.tool.id)&&t.push(e.tool);return t}var wc,Rs,ns,Pr,Wp,qp,Sc,Yp,Zp,Qp=pe(()=>{eo();io();qc();Eu();Cu();wc={outside:"Outer (part)",inside:"Inner (perimeter)",pocket:"Inner (clearing)",online:"On the line",off:"Off"},Rs=.01,ns=1e-4,Pr=.25,Wp=n=>sn(ve(ve(cn(n),.01),-.01),Rs),qp=["back-left","back-center","back-right","left-center","center","right-center","front-left","front-center","front-right"],Sc=(n,t)=>!n.fluteLength||n.fluteLength+1e-6>=t,Yp=n=>n.length>2&&n[0][0]===n.at(-1)[0]&&n[0][1]===n.at(-1)[1]?n.slice(0,-1):n,Zp=n=>en(n)<0?n.slice().reverse():n});function tm(n,t={}){let{name:e="part",numbering:i="slot",safeZHeightMm:s=null,safeZCommand:a=!1,spindleDelay:l=3}=t,o=a?"$SAFEZ":Number.isFinite(s)?`G53 G0 Z${ss(s)}`:"G53 G0 Z0",h=n.zero,f=n.stock,d=[Ls(`ncCAM: ${e}`),Ls(`Stock ${ss(f.width)} x ${ss(f.depth)} x ${ss(f.thickness)} mm, ${(fs[n.job.material]||{}).name||n.job.material}, ${(zn[n.job.finish]||{}).name||n.job.finish}`),Ls(`Zero: X Y at the ${Jb[n.job.zero.xy]||n.job.zero.xy}, Z on ${n.job.zero.z==="bed"?"the bed":"top of the stock"}`)],g=n.ops.filter(A=>A.enabled&&A.moves&&A.moves.length);for(let A of[...new Map(g.map(T=>[T.tool.id,T.tool])).values()])d.push(Ls(`T${ds(A,i)}: ${A.name}, ${ss(A.diameter)} mm`));d.push("G21 G90 G94 G17");let p=Number.isFinite(f.top)?f.top:(Number.isFinite(f.bottom)?f.bottom:0)+f.thickness,x=null,v={},b=null,y=null,_=-1/0;for(let A of g){(!x||A.tool.id!==x.id)&&(x&&d.push("M5"),d.push(o,`M6 T${ds(A.tool,i)}`,Ls(A.tool.name)),x=A.tool,_=!da(A.tool)&&A.tool.fluteLength>0?p-A.tool.fluteLength:-1/0,da(A.tool)?(d.push(`M3 S${A.feeds.rpm}`),l>0&&d.push(`G4 P${l}`)):d.push(Ls("No spindle: this tool does not spin")),v={},b=null,y=null),d.push(Ls(`${A.label}${A.detail?": "+A.detail:""}`));for(let T of A.moves){let S=ss(T.x-h.x),I=ss(T.y-h.y),E=ss(Math.max(T.z,_)-h.z);if(T.r&&(S!==v.x||I!==v.y)&&E!==v.z){let F=v.z===void 0||+E<+v.z?[`X${S} Y${I}`,`Z${E}`]:[`Z${E}`,`X${S} Y${I}`];for(let U of F)d.push(`${y==="G0"?"":"G0 "}${U}`),y="G0";v={x:S,y:I,z:E};continue}if(S===v.x&&I===v.y&&E===v.z)continue;let C=T.r?"G0":"G1",w=C===y?"":C;S!==v.x&&(w+=` X${S}`),I!==v.y&&(w+=` Y${I}`),E!==v.z&&(w+=` Z${E}`),!T.r&&T.f!==b&&(w+=` F${Math.round(T.f)}`,b=T.f),w=w.trim(),!(!w||w===C)&&(d.push(w),y=C,v={x:S,y:I,z:E})}}return d.push("M5",o,"M30",""),d.join(`
`)}function em(n,{maxRapid:t=5e3,spindleDelay:e=3,toolChange:i=30}={}){let s=0,a=null,l=null;for(let o of n.ops){if(!o.enabled||!o.moves)continue;(!l||o.tool.id!==l.id)&&(s+=(da(o.tool)?e:0)+(l?i:0),l=o.tool);let h=0;for(let f of o.moves){if(a){let d=Math.hypot(f.x-a.x,f.y-a.y,f.z-a.z);h+=d/(f.r?t:f.f)*60}a=f}o.seconds=h,s+=h}return s}var ss,Zb,Ls,Jb,nm=pe(()=>{io();ss=n=>{let t=(Math.round(n*1e3)/1e3).toFixed(3).replace(/\.?0+$/,"");return t==="-0"?"0":t},Zb={"\xD7":"x","\xB7":"-",\u00D8:"D","\xB0":" deg","\u2019":"'","\u2026":"..."},Ls=n=>`(${String(n).replace(/\(/g,"[").replace(/\)/g,"]").replace(/[^\x20-\x7e]/g,t=>Zb[t]??"")})`,Jb={"back-left":"back left corner","back-center":"back edge, middle","back-right":"back right corner","left-center":"left edge, middle",center:"center","right-center":"right edge, middle","front-left":"front left corner","front-center":"front edge, middle","front-right":"front right corner"}});function jb(n,t){let e=String(t||"").trim();if(e==="dev"||/-dev\b/.test(e))return!0;let i=/^v?(\d+)\.(\d+)\.(\d+)(-.*)?$/.exec(e);if(!i)return!1;let s=n==="pro"?[2,0,326]:[2,0,228];for(let a=0;a<3;a++){let l=Number(i[a+1])-s[a];if(l)return l>0}return!i[4]}function im(n="",t=5e3){let e=async a=>{let l=await fetch(n+a);if(!l.ok)throw new Error(`${a}: ${l.status}`);return l.json()},i=Promise.all([e("/api/app-info"),e("/api/updates/check")]).then(([a,l])=>jb(a?.edition,l?.currentVersion)).catch(()=>!1),s=new Promise(a=>setTimeout(()=>a(!1),t));return Promise.race([i,s])}function sm({base:n="",win:t=globalThis.window,send:e,wait:i=1500,settle:s=250}={}){if(!t?.addEventListener)return Promise.resolve([]);let a=e||(l=>fetch(n+"/api/send-command",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(l)}));return new Promise(l=>{let o=[],h=null,f=()=>{t.removeEventListener("message",d),clearTimeout(h),clearTimeout(g),l(o)},d=p=>{let x=p?.data;x?.type!=="cnc-data"||typeof x.data!="string"||!x.data.trim().startsWith("[SPINDLE:")||(o.push(x.data.trim()),clearTimeout(h),h=setTimeout(f,s))},g=setTimeout(f,i);t.addEventListener("message",d),Promise.resolve().then(()=>a({command:"$SPINDLESH",meta:{sourceId:"ncCut2D",quiet:{terminalCommand:!0,terminalResponse:!0,logCommand:!0,logResponse:!0}}})).catch(f)})}var rm=pe(()=>{});function Ru(n,t){let e=(n.kind==="threadmill"?n.neck:n.diameter)/2,i=Math.ceil(e/t),s=[];for(let l=-i;l<=i;l++)for(let o=-i;o<=i;o++){let h=Math.hypot(o,l)*t;if(h>e+1e-6)continue;let f=Math.min(h,e),d=0;if(n.kind==="ball")d=e-Math.sqrt(Math.max(0,e*e-f*f));else if(n.kind==="vbit"||n.kind==="chamfer"||n.kind==="drill"){let g=(n.angle||(n.kind==="drill"?118:90))*Math.PI/360;d=f/Math.tan(g)}s.push(o,l,d,h)}let a=Float32Array.from(s);return a.inner=Math.max(0,e-t*Math.SQRT1_2),a}function Kb(n,t,e,i,s,a){let l=Math.hypot(i.x-e.x,i.y-e.y),o=Math.max(1,Math.ceil(l/(n.cell*.5))),h=!1;for(let f=s?0:1;f<=o;f++){let d=f/o,g=(e.x+(i.x-e.x)*d-n.x0)/n.cell,p=(e.y+(i.y-e.y)*d-n.y0)/n.cell,x=e.z+(i.z-e.z)*d;if(x>=n.top)continue;let v=Math.round(g),b=Math.round(p);for(let y=0;y<t.length;y+=4){let _=v+t[y],A=b+t[y+1];if(_<0||A<0||_>=n.nx||A>=n.ny)continue;let T=A*n.nx+_,S=x+t[y+2];if(n.h[T]>S+1e-4){if(s){n.h[T]>S+.05&&t[y+3]<=t.inner&&(h=!0);continue}n.h[T]=S,n.op[T]=a+1}}}return h}function om(n){let t=n.nx*n.ny;return n.sx=new Float32Array(t),n.sy=new Float32Array(t),n.wx=new Float32Array(t),n.wy=new Float32Array(t),n.gap=new Float32Array(t).fill(1/0),n.deep=new Float32Array(t).fill(-1/0),n}function Lu(n,t,e,i,s){let a=(t.kind==="threadmill"?t.neck:t.diameter)/2,l=n.cell,o=a/l,h=t.kind==="ball"?V=>a-Math.sqrt(Math.max(0,a*a-V*V)):t.kind==="vbit"||t.kind==="chamfer"||t.kind==="drill"?(V=>k=>k/V)(Math.tan((t.angle||(t.kind==="drill"?118:90))*Math.PI/360)):()=>0,f=!t.kind||t.kind==="flat"||t.kind==="surfacing"||t.kind==="threadmill",{h:d,sx:g,sy:p,wx:x,wy:v,gap:b,deep:y,nx:_,ny:A}=n,T=1.5*l,S=o+1.5,I=(V,k,q,Z)=>{let B=Math.hypot(k,q);if(B>S)return;let K=B*l;if(K<=a){let j=Z+h(K);if(d[V]>j+1e-4)d[V]=j,n.op[V]=s+1,b[V]=1/0,y[V]=-1/0;else if(d[V]<j-1e-4)return;a-K>y[V]&&(y[V]=a-K,f&&a-K<T&&B>1e-6?(g[V]=k/B*(a-K),p[V]=q/B*(a-K),x[V]=-k/B,v[V]=-q/B):(g[V]=0,p[V]=0,x[V]=0,v[V]=0))}else f&&d[V]>Z+1e-4&&K-a<b[V]&&(b[V]=K-a,g[V]=k/B*(a-K),p[V]=q/B*(a-K),x[V]=-k/B,v[V]=-q/B)},E=(e.x-n.x0)/l,C=(e.y-n.y0)/l,w=(i.x-n.x0)/l,N=(i.y-n.y0)/l;if(Math.abs(i.z-e.z)<1e-9){if(e.z>=n.top)return;let V=w-E,k=N-C,q=V*V+k*k,Z=Math.max(0,Math.floor(Math.min(E,w)-S)),B=Math.min(_-1,Math.ceil(Math.max(E,w)+S)),K=Math.max(0,Math.floor(Math.min(C,N)-S)),j=Math.min(A-1,Math.ceil(Math.max(C,N)+S));for(let st=K;st<=j;st++)for(let X=Z;X<=B;X++){let bt=q>0?Math.max(0,Math.min(1,((X-E)*V+(st-C)*k)/q)):0;I(st*_+X,X-(E+V*bt),st-(C+k*bt),e.z)}return}let F=Math.hypot(i.x-e.x,i.y-e.y),U=Math.max(1,Math.ceil(F/(l*.5))),G=Math.ceil(S);for(let V=1;V<=U;V++){let k=V/U,q=E+(w-E)*k,Z=C+(N-C)*k,B=e.z+(i.z-e.z)*k;if(B>=n.top)continue;let K=Math.max(0,Math.floor(q-G)),j=Math.min(_-1,Math.ceil(q+G)),st=Math.max(0,Math.floor(Z-G)),X=Math.min(A-1,Math.ceil(Z+G));for(let bt=st;bt<=X;bt++)for(let St=K;St<=j;St++)I(bt*_+St,St-q,bt-Z,B)}}function am(n,t){let e=new Li(n.stock,t||Li.cellFor(n.stock)),i=[];return n.ops.forEach((s,a)=>{if(!s.enabled||!s.moves)return;let l=Ru(s.tool,e.cell),o=null;for(let h of s.moves)o&&Kb(e,l,o,h,!!h.r,a)&&i.push({op:s.id,at:h}),o=h}),{hm:e,collisions:i}}var Li,lm=pe(()=>{Li=class{constructor(t,e){this.cell=e,this.x0=t.minX,this.y0=t.minY,this.nx=Math.max(2,Math.ceil((t.maxX-t.minX)/e)+1),this.ny=Math.max(2,Math.ceil((t.maxY-t.minY)/e)+1),this.h=new Float32Array(this.nx*this.ny).fill(t.top),this.op=new Uint8Array(this.nx*this.ny),this.top=t.top,this.bottom=t.bottom}static cellFor(t,e=600*600){let i=(t.maxX-t.minX)*(t.maxY-t.minY);return Math.max(.1,Math.sqrt(i/e))}}});var Cc=pe(()=>{Nr();Zu();bf();wf();Ef();Qp();Eu();Cu();nm();rm();lm();io();qc();eo()});function tM(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function eM(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function nM(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(fm),this.state=Fe.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:let t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function iM(n){let t;switch(n.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case Zi.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=Fe.DOLLY;break;case Zi.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=Fe.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=Fe.ROTATE}break;case Zi.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=Fe.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=Fe.PAN}break;default:this.state=Fe.NONE}this.state!==Fe.NONE&&this.dispatchEvent(Ou)}function sM(n){switch(this.state){case Fe.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case Fe.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case Fe.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function rM(n){this.enabled===!1||this.enableZoom===!1||this.state!==Fe.NONE||(n.preventDefault(),this.dispatchEvent(Ou),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent(fm))}function oM(n){this.enabled!==!1&&this._handleKeyDown(n)}function aM(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case Ji.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(n),this.state=Fe.TOUCH_ROTATE;break;case Ji.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(n),this.state=Fe.TOUCH_PAN;break;default:this.state=Fe.NONE}break;case 2:switch(this.touches.TWO){case Ji.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=Fe.TOUCH_DOLLY_PAN;break;case Ji.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=Fe.TOUCH_DOLLY_ROTATE;break;default:this.state=Fe.NONE}break;default:this.state=Fe.NONE}this.state!==Fe.NONE&&this.dispatchEvent(Ou)}function lM(n){switch(this._trackPointer(n),this.state){case Fe.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case Fe.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case Fe.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case Fe.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=Fe.NONE}}function cM(n){this.enabled!==!1&&n.preventDefault()}function hM(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function uM(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}var hm,Ou,fm,Pc,um,Qb,ln,Rn,Fe,Du,Ic,dm=pe(()=>{ea();hm={type:"change"},Ou={type:"start"},fm={type:"end"},Pc=new Hi,um=new Dn,Qb=Math.cos(70*nu.DEG2RAD),ln=new tt,Rn=2*Math.PI,Fe={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Du=1e-6,Ic=class extends Ho{constructor(t,e=null){super(t,e),this.state=Fe.NONE,this.target=new tt,this.cursor=new tt,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Zi.ROTATE,MIDDLE:Zi.DOLLY,RIGHT:Zi.PAN},this.touches={ONE:Ji.ROTATE,TWO:Ji.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new tt,this._lastQuaternion=new On,this._lastTargetPosition=new tt,this._quat=new On().setFromUnitVectors(t.up,new tt(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new yr,this._sphericalDelta=new yr,this._scale=1,this._panOffset=new tt,this._rotateStart=new jt,this._rotateEnd=new jt,this._rotateDelta=new jt,this._panStart=new jt,this._panEnd=new jt,this._panDelta=new jt,this._dollyStart=new jt,this._dollyEnd=new jt,this._dollyDelta=new jt,this._dollyDirection=new tt,this._mouse=new jt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=eM.bind(this),this._onPointerDown=tM.bind(this),this._onPointerUp=nM.bind(this),this._onContextMenu=cM.bind(this),this._onMouseWheel=rM.bind(this),this._onKeyDown=oM.bind(this),this._onTouchStart=aM.bind(this),this._onTouchMove=lM.bind(this),this._onMouseDown=iM.bind(this),this._onMouseMove=sM.bind(this),this._interceptControlDown=hM.bind(this),this._interceptControlUp=uM.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(t){this._cursorStyle=t,t==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.state=Fe.NONE,this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents();let t=this.domElement.getRootNode();t.removeEventListener("keydown",this._interceptControlDown,{capture:!0}),t.removeEventListener("keyup",this._interceptControlUp,{capture:!0}),this._controlActive=!1,this._pointers.length=0,this._pointerPositions={},this.domElement.style.touchAction="",this.domElement.style.cursor="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(hm),this.update(),this.state=Fe.NONE}pan(t,e){this._pan(t,e),this.update()}dollyIn(t){this._dollyIn(t),this.update()}dollyOut(t){this._dollyOut(t),this.update()}rotateLeft(t){this._rotateLeft(t),this.update()}rotateUp(t){this._rotateUp(t),this.update()}update(t=null){let e=this.object.position;ln.copy(e).sub(this.target),ln.applyQuaternion(this._quat),this._spherical.setFromVector3(ln),this.autoRotate&&this.state===Fe.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(i)&&isFinite(s)&&(i<-Math.PI?i+=Rn:i>Math.PI&&(i-=Rn),s<-Math.PI?s+=Rn:s>Math.PI&&(s-=Rn),i<=s?this._spherical.theta=Math.max(i,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+s)/2?Math.max(i,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let a=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let l=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),a=l!=this._spherical.radius}if(ln.setFromSpherical(this._spherical),ln.applyQuaternion(this._quatInverse),e.copy(this.target).add(ln),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let l=null;if(this.object.isPerspectiveCamera){let o=ln.length();l=this._clampDistance(o*this._scale);let h=o-l;this.object.position.addScaledVector(this._dollyDirection,h),this.object.updateMatrixWorld(),a=!!h}else if(this.object.isOrthographicCamera){let o=new tt(this._mouse.x,this._mouse.y,0);o.unproject(this.object);let h=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),a=h!==this.object.zoom;let f=new tt(this._mouse.x,this._mouse.y,0);f.unproject(this.object),this.object.position.sub(f).add(o),this.object.updateMatrixWorld(),l=ln.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;l!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(l).add(this.object.position):(Pc.origin.copy(this.object.position),Pc.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Pc.direction))<Qb?this.object.lookAt(this.target):(um.setFromNormalAndCoplanarPoint(this.object.up,this.target),Pc.intersectPlane(um,this.target))))}else if(this.object.isOrthographicCamera){let l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),l!==this.object.zoom&&(this.object.updateProjectionMatrix(),a=!0)}return this._scale=1,this._performCursorZoom=!1,a||this._lastPosition.distanceToSquared(this.object.position)>Du||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Du||this._lastTargetPosition.distanceToSquared(this.target)>Du?(this.dispatchEvent(hm),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?Rn/60*this.autoRotateSpeed*t:Rn/60/60*this.autoRotateSpeed}_getZoomScale(t){let e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){ln.setFromMatrixColumn(e,0),ln.multiplyScalar(-t),this._panOffset.add(ln)}_panUp(t,e){this.screenSpacePanning===!0?ln.setFromMatrixColumn(e,1):(ln.setFromMatrixColumn(e,0),ln.crossVectors(this.object.up,ln)),ln.multiplyScalar(t),this._panOffset.add(ln)}_pan(t,e){let i=this.domElement;if(this.object.isPerspectiveCamera){let s=this.object.position;ln.copy(s).sub(this.target);let a=ln.length();a*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*a/i.clientHeight,this.object.matrix),this._panUp(2*e*a/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let i=this.domElement.getBoundingClientRect(),s=t-i.left,a=e-i.top,l=i.width,o=i.height;this._mouse.x=s/l*2-1,this._mouse.y=-(a/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let e=this.domElement;this._rotateLeft(Rn*this._rotateDelta.x/e.clientHeight),this._rotateUp(Rn*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(Rn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-Rn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(Rn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-Rn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._rotateStart.set(i,s)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panStart.set(i,s)}}_handleTouchStartDolly(t){let e=this._getSecondPointerPosition(t),i=t.pageX-e.x,s=t.pageY-e.y,a=Math.sqrt(i*i+s*s);this._dollyStart.set(0,a)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{let i=this._getSecondPointerPosition(t),s=.5*(t.pageX+i.x),a=.5*(t.pageY+i.y);this._rotateEnd.set(s,a)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let e=this.domElement;this._rotateLeft(Rn*this._rotateDelta.x/e.clientHeight),this._rotateUp(Rn*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panEnd.set(i,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){let e=this._getSecondPointerPosition(t),i=t.pageX-e.x,s=t.pageY-e.y,a=Math.sqrt(i*i+s*s);this._dollyEnd.set(0,a),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let l=(t.pageX+e.x)*.5,o=(t.pageY+e.y)*.5;this._updateZoomParameters(l,o)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new jt,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){let e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){let e=t.deltaMode,i={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}});function pm(n,t,e,i){n.onBeforeCompile=s=>{s.uniforms.uCut={value:t-.05},s.uniforms.uBase={value:i||new le(1,1,1)},s.uniforms.uBottom={value:t},s.vertexShader=`varying float vZ;
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
diffuseColor.rgb = mix(diffuseColor.rgb, uBase, onWall);`).replace("#include <normal_fragment_begin>",xe.normal_fragment_begin.replace("gl_FrontFacing ? 1.0 : - 1.0","1.0")+`
if (onWall > 0.0) normal = normalize(mix(normal, (viewMatrix * vec4(normalize(vWall.xy), 0.0, 0.0)).xyz, onWall));`))},n.customProgramCacheKey=()=>`through-${e}`}function mm(n,t,e){let i=document.createElement("canvas");i.width=256,i.height=128;let s=i.getContext("2d");s.font="600 84px Inter, system-ui, sans-serif",s.fillStyle="#"+new le(t).getHexString(),s.textAlign="center",s.textBaseline="middle",s.fillText(n,128,64);let a=new Ao(i);a.colorSpace=En;let l=new Eo(new ur({map:a,depthTest:!1,transparent:!0}));return l.scale.set(e*2,e,1),l.renderOrder=6,l}var Yn,Rr,fM,Rc,gm=pe(()=>{ea();dm();Yn={face:"#93a2b4",pocket:"#1abc9c",hole:"#4ea1ff",drill:"#4ea1ff",step:"#2ecc71",corners:"#48d1b4",cutout:"#a78bfa",rough3d:"#f5a524",rest3d:"#e3c341",finish3d:"#ff7a59",chamfer:"#f472b6",thread:"#c084fc",inside:"#4ea1ff",online:"#f5a524"},Rr={softwood:"#d8b38a",hardwood:"#9c6b45",mdf:"#b59672",plastic:"#d9e2ea",aluminum:"#b9c1c9",foam:"#c7b8a5"};fM=(n,t)=>n.some(e=>e.key===t);Rc=class{constructor(){this.el=document.createElement("div"),this.el.className="ncc-viewport",this.renderer=new yc({antialias:!0,alpha:!0}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),this.el.appendChild(this.renderer.domElement),this.scene=new bo,this.camera=new vn(35,1,.1,1e4),this.camera.up.set(0,0,1),this.controls=new Ic(this.camera,this.renderer.domElement),this.controls.enableDamping=!0,this.controls.dampingFactor=.12,this.controls.zoomToCursor=!0,this.controls.addEventListener("start",()=>{this.userMoved=!0}),this.scene.add(new Bo(16777215,4478310,1.6));let t=new xr(16777215,1.6);t.position.set(-.6,-1,1.6),this.scene.add(t);let e=new xr(16777215,.5);e.position.set(1,.6,.4),this.scene.add(e),this.content=new Hn,this.scene.add(this.content),this.onFrame=null,this.alive=!0,this.resize=new ResizeObserver(()=>this.fit()),this.resize.observe(this.el);let i=s=>{if(this.alive){if(!this.el.isConnected&&this.detachedSince&&s-this.detachedSince>3e3&&!document.querySelector(".ncc-wrapper")){this.dispose();return}this.el.isConnected?this.detachedSince=0:this.detachedSince||=s,this.onFrame&&this.onFrame(s),this.controls.update(),this.el.isConnected&&this.renderer.render(this.scene,this.camera),requestAnimationFrame(i)}};requestAnimationFrame(i),this.setupPicking()}fit(){let t=this.el.clientWidth,e=this.el.clientHeight;!t||!e||(this.renderer.setSize(t,e,!1),this.camera.aspect=t/e,this.camera.updateProjectionMatrix(),this.userMoved||this.refit())}clear(){for(let t of[...this.content.children])this.content.remove(t),t.traverse(e=>{e.geometry?.dispose(),e.material&&[].concat(e.material).forEach(i=>i.dispose())});this.pickMesh=null,this.markers=null}frame(t,e,i=.08){this.fitBox=[t,e,i],this.userMoved=!1,this.refit()}refit(){if(!this.fitBox)return;let[t,e,i]=this.fitBox,s=new tt((t[0]+e[0])/2,(t[1]+e[1])/2,(t[2]+e[2])/2),a=Math.max(e[0]-t[0],e[1]-t[1],e[2]-t[2],.001),l=new tt(-.45,-.8,.75).normalize(),o=[];for(let g of[t[0],e[0]])for(let p of[t[1],e[1]])for(let x of[t[2],e[2]])o.push(new tt(g,p,x));let h=s.clone(),f=a*2,d=()=>{this.camera.position.copy(h).addScaledVector(l,f),this.camera.near=f/100,this.camera.far=f*100,this.camera.lookAt(h),this.camera.updateMatrixWorld(),this.camera.updateProjectionMatrix()};for(let g=0;g<8;g++){d();let p=1/0,x=-1/0,v=1/0,b=-1/0;for(let I of o){let E=I.clone().project(this.camera);p=Math.min(p,E.x),x=Math.max(x,E.x),v=Math.min(v,E.y),b=Math.max(b,E.y)}let y=Math.max((x-p)/2,(b-v)/2);if(!(y>0))break;let _=f*Math.tan(this.camera.fov*Math.PI/360),A=_*this.camera.aspect,T=new tt().setFromMatrixColumn(this.camera.matrixWorld,0),S=new tt().setFromMatrixColumn(this.camera.matrixWorld,1);h.addScaledVector(T,(p+x)/2*A).addScaledVector(S,(v+b)/2*_),f*=y/(1-i)}d(),this.controls.target.copy(h),this.controls.update()}showPart(t,e=[]){this.clear();let i=new We;i.setAttribute("position",new He(t.positions,3)),i.setIndex(new He(t.indices,1)),i.computeVertexNormals();let s=new Re(i,new Bn({color:9348283,metalness:.15,roughness:.55,side:bn,polygonOffset:!0,polygonOffsetFactor:1,polygonOffsetUnits:1}));this.content.add(s),this.pickMesh=s;let a=new Ms(new pr(i,25),new ni({color:2832972,transparent:!0,opacity:.55}));this.content.add(a);for(let o of e)this.addLoops(o.loops,o.z,o.color,o.dashed,o.opacity);i.computeBoundingBox();let l=i.boundingBox;this.keepCamera||this.frame(l.min.toArray(),l.max.toArray())}addLoops(t,e,i,s,a=.95){for(let l of t){let o=l.map(([g,p])=>new tt(g,p,e)),h=new We().setFromPoints([...o,o[0]]),f=s?new Oo({color:i,dashSize:2,gapSize:1.5,transparent:!0,opacity:a,depthTest:!1}):new ni({color:i,transparent:!0,opacity:a,depthTest:!1}),d=new bs(h,f);s&&d.computeLineDistances(),d.renderOrder=2,this.content.add(d)}}setupPicking(){let t=this.renderer.domElement,e=null;t.addEventListener("pointerdown",i=>{e=[i.clientX,i.clientY]}),t.addEventListener("pointerup",i=>{if(!e||Math.hypot(i.clientX-e[0],i.clientY-e[1])>4)return;let s=t.getBoundingClientRect(),a=new zo;if(a.setFromCamera(new jt((i.clientX-s.left)/s.width*2-1,-((i.clientY-s.top)/s.height)*2+1),this.camera),this.markers?.length&&this.onMarker){let h=a.intersectObjects(this.markers)[0];if(h?.object.userData.axis){this.onAxis?.(h.object.userData.axis);return}if(h){this.onMarker(h.object.userData.key);return}}if(!this.pickMesh||!this.onPick)return;let l=a.intersectObject(this.pickMesh)[0];if(!l||!l.face)return;let o=l.face.normal.clone();o.dot(a.ray.direction)>0&&o.negate(),this.onPick([o.x,o.y,o.z])})}showZero({stock:t,part:e,points:i,selected:s,zFace:a,color:l,accent:o="#4c6ef5"}){this.clear();let h=t.maxX-t.minX,f=t.maxY-t.minY,d=t.top-t.bottom,g=Math.max(h,f,d),p=new Xi(h,f,d);p.translate((t.minX+t.maxX)/2,(t.minY+t.maxY)/2,(t.top+t.bottom)/2);let x=new Re(p,new Bn({color:l,transparent:!0,opacity:.45,roughness:.9,depthWrite:!1}));if(x.renderOrder=2,this.content.add(x),this.content.add(new Ms(new pr(p),new ni({color:new le(l).multiplyScalar(.6)}))),e){let _=new We;_.setAttribute("position",new He(e.positions,3)),_.setIndex(new He(e.indices,1)),_.computeVertexNormals(),this.partMesh=new Re(_,new Bn({color:9348283,metalness:.15,roughness:.55})),this.content.add(this.partMesh)}else this.partMesh=null;let v=a==="bed"?t.bottom:t.top,b=g*.014;this.markers=[];for(let _ of i){let A=_.key===s,T=new Re(new Wi(A?b*1.3:b,24,16),new Fn({color:A?o:16777215}));if(T.position.set(_.x,_.y,v),T.userData.key=_.key,T.renderOrder=4,T.material.depthTest=!1,!A){let I=new Re(new Wi(b*1.25,24,16),new Fn({color:6187893,depthTest:!1}));I.renderOrder=3,T.add(I)}let S=new Re(new Wi(b*3.5,12,8),new Fn({visible:!1}));if(S.userData.key=_.key,T.add(S),this.markers.push(S),this.content.add(T),A){let I=new Re(new Do(b*1.6,b*2,40),new Fn({color:o,transparent:!0,depthTest:!1,side:bn}));I.position.copy(T.position),I.renderOrder=4,this.content.add(I),this.pulse=I;let E=g*.24;for(let[C,w,N]of[[[1,0,0],15158332,"X"],[[0,1,0],3066993,"Y"],[[0,0,1],5147903,"Z"]]){let F=new Vo(new tt(...C),T.position,E,w,E*.15,E*.065);F.line.visible=!1;let U=new Re(new gi(g*.0028,g*.0028,E*.86,12),new Fn({color:w,depthTest:!1}));U.position.y=E*.43,U.renderOrder=5,F.add(U),F.cone.material.depthTest=!1,F.renderOrder=5,F.cone.renderOrder=5,this.content.add(F);let G=mm(N,w,g*.05);G.position.copy(T.position).add(new tt(...C).multiplyScalar(E*1.18)),this.content.add(G);let V=new Re(new gi(E*.1,E*.1,E*1.3,10),new Fn({visible:!1}));V.quaternion.setFromUnitVectors(new tt(0,1,0),new tt(...C)),V.position.copy(T.position).add(new tt(...C).multiplyScalar(E*.65)),V.userData.axis=N.toLowerCase(),this.content.add(V),this.markers.unshift(V)}}}let y=mm("Front",9675444,g*.04);y.position.set((t.minX+t.maxX)/2,t.minY-g*.08,t.bottom),this.content.add(y),this.keepCamera||this.frame([t.minX,t.minY,t.bottom],[t.maxX,t.maxY,t.top]),fM(i,s)||(this.pulse=null),this.onFrame=_=>{if(!this.pulse)return;let A=_%1600/1600;this.pulse.scale.setScalar(1+A*1.6),this.pulse.material.opacity=.8*(1-A),this.pulse.lookAt(this.camera.position)}}spin(t,e=700){let i=this.partMesh;if(!i)return Promise.resolve();i.geometry.computeBoundingBox();let s=i.geometry.boundingBox.getCenter(new tt),a=t==="x"?new tt(1,0,0):new tt(0,0,1);i.matrixAutoUpdate=!1;let l=performance.now();return new Promise(o=>{let h=f=>{let d=Math.min(1,(f-l)/e),g=d<.5?2*d*d:1-(-2*d+2)**2/2;i.matrix.makeTranslation(s.x,s.y,s.z).multiply(new Oe().makeRotationAxis(a,Math.PI*g)).multiply(new Oe().makeTranslation(-s.x,-s.y,-s.z)),i.matrixWorldNeedsUpdate=!0,d<1&&i.parent?requestAnimationFrame(h):o()};requestAnimationFrame(h)})}showStock(t,e,i){this.clear(),this.keepCamera=!1;let s=t.nx,a=t.ny,l=s*a,o=new Float32Array(l*3),h=new Float32Array(l*3),f=new le(e);for(let A=0;A<a;A++)for(let T=0;T<s;T++){let S=A*s+T;o[S*3]=t.x0+T*t.cell,o[S*3+1]=t.y0+A*t.cell,o[S*3+2]=t.h[S],h[S*3]=f.r,h[S*3+1]=f.g,h[S*3+2]=f.b}let d=new Uint32Array((s-1)*(a-1)*6),g=0;for(let A=0;A<a-1;A++)for(let T=0;T<s-1;T++){let S=A*s+T,I=S+1,E=S+s,C=E+1;d[g++]=S,d[g++]=I,d[g++]=C,d[g++]=S,d[g++]=C,d[g++]=E}let p=new We;p.setAttribute("position",new He(o,3).setUsage(Ts)),p.setAttribute("color",new He(h,3).setUsage(Ts));let x=new Float32Array(l*3);for(let A=0;A<l;A++)x[A*3+2]=1;p.setAttribute("normal",new He(x,3).setUsage(Ts));let v=new Float32Array(l*4);for(let A=0;A<l;A++)v[A*4+2]=t.h[A],v[A*4+3]=t.h[A];p.setAttribute("wall",new He(v,4).setUsage(Ts)),p.setIndex(new He(d,1));let b=new Bn({vertexColors:!0,flatShading:!1,roughness:.8,metalness:e===Rr.aluminum?.5:.05,side:bn});pm(b,t.bottom,!1,f);let y=new Re(p,b);this.content.add(y),this.stock={hm:t,geo:p,base:f,sides:this.makeSides(t,f)};let _=new Bn({color:f.clone().multiplyScalar(.7),roughness:.9,side:bn});if(pm(_,t.bottom,!0),this.content.add(new Re(p,_)),i){let A=new We;A.setAttribute("position",new He(i.positions,3)),A.setIndex(new He(i.indices,1)),A.computeVertexNormals(),this.partGhost=new Re(A,new Bn({color:5153279,transparent:!0,opacity:.25,depthWrite:!1})),this.partGhost.visible=!1,this.content.add(this.partGhost)}this.tool=new Hn,this.content.add(this.tool),this.frame([t.x0,t.y0,t.bottom],[t.x0+(s-1)*t.cell,t.y0+(a-1)*t.cell,t.top])}makeSides(t,e){let i=[];for(let g=0;g<t.nx;g++)i.push(g);for(let g=1;g<t.ny;g++)i.push(g*t.nx+t.nx-1);for(let g=t.nx-2;g>=0;g--)i.push((t.ny-1)*t.nx+g);for(let g=t.ny-2;g>=0;g--)i.push(g*t.nx);let s=new Float32Array(i.length*6),a=new Float32Array(i.length*6),l=[],o=[[0,-1],[1,0],[0,1],[-1,0]],h=[t.nx,t.nx+t.ny-1,2*t.nx+t.ny-2];for(let g=0;g<i.length;g++){let p=i[g],x=t.x0+p%t.nx*t.cell,v=t.y0+Math.floor(p/t.nx)*t.cell;s.set([x,v,t.h[p],x,v,t.bottom],g*6);let[b,y]=o[g<h[0]?0:g<h[1]?1:g<h[2]?2:3];if(a.set([b,y,0,b,y,0],g*6),g<i.length-1){let _=g*2;l.push(_,_+1,_+3,_,_+3,_+2)}}let f=new We;f.setAttribute("position",new He(s,3).setUsage(Ts)),f.setAttribute("normal",new He(a,3)),f.setIndex(l);let d=new Re(f,new Bn({color:e.clone().multiplyScalar(.85),roughness:.85,side:bn}));return this.content.add(d),{g:f,edge:i}}refreshStock(t,e,i){let s=this.stock;if(!s||e<t)return;let{hm:a,geo:l,base:o}=s,h=a.nx,f=a.ny,d=a.h,g=l.attributes.position,p=l.attributes.color,x=l.attributes.normal,v=l.attributes.wall,b=new le,y=Math.max(0,t),_=Math.min(f-1,e),A=a.cell*1.5,T=(w,N,F)=>{let U=d[N*h+w],G=0;for(let V=-1;V<=1;V++)for(let k=-1;k<=1;k++){let q=w+k,Z=N+V;(k||V)&&q>=0&&Z>=0&&q<h&&Z<f&&(G=Math.max(G,F*(d[Z*h+q]-U)))}return G};for(let w=y;w<=_;w++)for(let N=0;N<h;N++){let F=w*h+N;g.array[F*3]=a.x0+N*a.cell+(a.sx?a.sx[F]:0),g.array[F*3+1]=a.y0+w*a.cell+(a.sy?a.sy[F]:0),g.array[F*3+2]=d[F];let U=a.op[F];U?(b.copy(o).lerp(i[U-1],.28),b.multiplyScalar(.82+.18*Math.max(0,Math.min(1,(d[F]-a.bottom)/Math.max(1,a.top-a.bottom))))):b.copy(o),p.array[F*3]=b.r,p.array[F*3+1]=b.g,p.array[F*3+2]=b.b}let S=g.array,I=Math.max(0,y-1),E=Math.min(f-1,_+1);for(let w=I;w<=E;w++)for(let N=0;N<h;N++){let F=w*h+N,U=v.array,G=T(N,w,1),V=T(N,w,-1);if(U[F*4]=0,U[F*4+1]=0,U[F*4+2]=d[F],U[F*4+3]=d[F],a.wx&&(a.wx[F]||a.wy[F])&&(G>A||V>A)){U[F*4]=a.wx[F],U[F*4+1]=a.wy[F],U[F*4+2]=d[F]-V,U[F*4+3]=d[F]+G,x.array[F*3]=0,x.array[F*3+1]=0,x.array[F*3+2]=1;continue}let k=(w*h+Math.max(0,N-1))*3,q=(w*h+Math.min(h-1,N+1))*3,Z=(Math.max(0,w-1)*h+N)*3,B=(Math.min(f-1,w+1)*h+N)*3,K=S[q]-S[k],j=S[q+1]-S[k+1],st=S[q+2]-S[k+2],X=S[B]-S[Z],bt=S[B+1]-S[Z+1],St=S[B+2]-S[Z+2],Vt=j*St-st*bt,$t=st*X-K*St,te=K*bt-j*X,ut=Math.hypot(Vt,$t,te)||1;te<0&&(Vt=-Vt,$t=-$t,te=-te),x.array[F*3]=Vt/ut,x.array[F*3+1]=$t/ut,x.array[F*3+2]=te/ut}g.addUpdateRange(y*h*3,(_-y+1)*h*3),p.addUpdateRange(y*h*3,(_-y+1)*h*3),x.addUpdateRange(I*h*3,(E-I+1)*h*3),v.addUpdateRange(I*h*4,(E-I+1)*h*4),g.needsUpdate=!0,p.needsUpdate=!0,x.needsUpdate=!0,v.needsUpdate=!0;let C=s.sides.g.attributes.position;s.sides.edge.forEach((w,N)=>{C.array[N*6+2]=d[w]}),C.needsUpdate=!0}setTool(t,e){for(let g of[...this.tool.children])this.tool.remove(g),g.traverse(p=>{p.geometry?.dispose(),p.material?.dispose()});let i=t.diameter/2,s=t.kind==="surfacing"||i>6.35,a=s?Math.max(e+1,Math.min(8,i*.5)):Math.max(t.fluteLength||0,Math.min(25,Math.max(e+3,t.diameter*2))),l=new Bn({color:14015457,metalness:.85,roughness:.3}),o;if(t.kind==="vbit"||t.kind==="chamfer"||t.kind==="drill"){let g=i/Math.tan((t.angle||(t.kind==="drill"?118:90))*Math.PI/360);o=new Re(new dr(i,g,48),l),o.rotation.x=-Math.PI/2,o.position.z=g/2}else if(t.kind==="ball"){o=new Hn;let g=new Re(new gi(i,i,a-i,64),l);g.rotation.x=Math.PI/2,g.position.z=i+(a-i)/2;let p=new Re(new Wi(i,48,24,0,Math.PI*2,Math.PI/2,Math.PI/2),l);p.rotation.x=Math.PI/2,p.position.z=i,o.add(g,p)}else o=new Re(new gi(i,i,a,64),l),o.rotation.x=Math.PI/2,o.position.z=a/2;let h=s?3.175:Math.max(i,Math.min(3.175,i*1.5)),f=20,d=new Re(new gi(h,h,f,32),new Bn({color:11187132,metalness:.8,roughness:.35}));d.rotation.x=Math.PI/2,d.position.z=a+f/2,this.tool.add(o,d)}moveTool(t,e,i){this.tool.position.set(t,e,i)}showPaths(t){this.paths&&(this.content.remove(this.paths),this.paths.traverse(e=>{e.geometry?.dispose(),e.material?.dispose()})),this.paths=new Hn;for(let e of t){let i=e.track;if(!i)continue;let s=[],a=[];for(let o=4;o<i.length;o+=4)(i[o+3]>0?s:a).push(i[o-4],i[o-3],i[o-2]+.02,i[o],i[o+1],i[o+2]+.02);let l=(o,h,f)=>{if(!o.length)return;let d=new We;d.setAttribute("position",new Ge(o,3));let g=new Ms(d,new ni({color:h,transparent:!0,opacity:f}));g.renderOrder=3,this.paths.add(g)};l(s,Yn[e.kind]||"#1abc9c",.75),l(a,"#93a2b4",.3)}this.content.add(this.paths)}dispose(){this.alive=!1,this.resize.disconnect(),this.clear(),this.controls.dispose(),this.renderer.dispose()}}});function pM(){return new Promise((n,t)=>{let e=indexedDB.open(dM,1);e.onupgradeneeded=()=>e.result.createObjectStore("kv"),e.onsuccess=()=>n(e.result),e.onerror=()=>t(e.error)})}async function Uu(n,t){let e=await pM();return new Promise((i,s)=>{let a=e.transaction("kv",n),l=t(a.objectStore("kv"));a.oncomplete=()=>{e.close(),i(l?.result)},a.onerror=a.onabort=()=>{e.close(),s(a.error)}})}function mM(n){let t=new Uint8Array(n),e=2166136261;for(let i=0;i<t.length;i++)e^=t[i],e=Math.imul(e,16777619);return(e>>>0).toString(36)}async function xm(){let n=await na("recent");if(Array.isArray(n))return n;let t=await na("last");if(!t?.bytes)return[];let e=Nc(t.name,t.bytes);await ia(`part:${e}`,t);let i=[{key:e,name:t.name,size:t.bytes.byteLength,savedAt:t.savedAt||Date.now()}];return await ia("recent",i),await Lc("last"),i}async function ym(n,t,e=Nc(n.name,n.bytes)){await ia(`part:${e}`,n);let i=gM(n.name,n.bytes);t.some(a=>a.key===i)&&await Lc(`part:${i}`);let s=[{key:e,name:n.name,size:n.bytes.byteLength,savedAt:n.savedAt},...t.filter(a=>a.key!==e&&a.key!==i)];for(let a of s.slice(Fu))await Lc(`part:${a.key}`);return await ia("recent",s.slice(0,Fu)),s.slice(0,Fu)}async function Bu(n,t){await Lc(`part:${n}`);let e=t.filter(i=>i.key!==n);return await ia("recent",e),e}var dM,na,ia,Lc,Fu,Nc,gM,_m=pe(()=>{dM="nccam";na=n=>Uu("readonly",t=>t.get(n)).catch(()=>null),ia=(n,t)=>Uu("readwrite",e=>e.put(t,n)).catch(()=>{}),Lc=n=>Uu("readwrite",t=>t.delete(n)).catch(()=>{}),Fu=10,Nc=(n,t)=>`${n}|${t.byteLength}|${mM(t)}`;gM=(n,t)=>`${n}|${t.byteLength}`});function vm(n){let t=/^\s*([-+]?[\d.]+(?:e[-+]?\d+)?)\s*([a-z%]*)\s*$/i.exec(n||"");if(!t||t[2]==="%")return null;let e=yM[t[2].toLowerCase()];return e?{mm:+t[1]*e,user:+t[1]}:null}function bm(n){let t=/rgba?\(\s*(\d+)[, ]+(\d+)[, ]+(\d+)(?:[,/ ]+([\d.]+%?))?/.exec(n||"");return!t||t[4]!==void 0&&parseFloat(t[4])===0?null:"#"+[t[1],t[2],t[3]].map(e=>(+e).toString(16).padStart(2,"0")).join("")}function Mm(n){let t=new DOMParser().parseFromString(n,"image/svg+xml");if(t.querySelector("parsererror")||t.documentElement.nodeName.toLowerCase()!=="svg")throw new Error("This SVG could not be read. Save it again as plain SVG.");let e=t.documentElement,i=(e.getAttribute("viewBox")||"").trim().split(/[\s,]+/).map(Number),s=i.length===4&&i.every(Number.isFinite)&&i[2]>0&&i[3]>0,a=vm(e.getAttribute("width")),l=vm(e.getAttribute("height")),o=s?i[2]:a?.user??0,h=s?i[3]:l?.user??0,f=a&&s?a.mm/i[2]:l&&s?l.mm/i[3]:a?a.mm/a.user:25.4/96,d=a&&/[a-z]+$/i.exec(e.getAttribute("width"))?.[0]||"px",g=document.createElement("div");g.style.cssText="position:absolute;left:-100000px;top:0;width:0;height:0;overflow:hidden;opacity:0;pointer-events:none";let p=document.importNode(e,!0);s?(p.setAttribute("width",String(i[2])),p.setAttribute("height",String(i[3])),p.setAttribute("preserveAspectRatio","none")):(o&&p.setAttribute("width",String(o)),h&&p.setAttribute("height",String(h))),g.appendChild(p),document.body.appendChild(g);let x=[],v={},b=y=>{v[y]=(v[y]||0)+1};try{bM(p);let y=s?i[3]:h||p.getBBox().height,_=p.querySelectorAll("path, rect, circle, ellipse, line, polyline, polygon, text, image");for(let A of _){if(A.closest(_M))continue;let T=getComputedStyle(A);if(T.display==="none"||T.visibility==="hidden")continue;let S=A.nodeName.toLowerCase();if(S==="text"){b("text");continue}if(S==="image"){b("image");continue}let I=T.stroke!=="none"&&parseFloat(T.strokeOpacity)!==0?bm(T.stroke):null,E=T.fill!=="none"&&parseFloat(T.fillOpacity)!==0?bm(T.fill):null;if(!I&&!E)continue;let C=A.getCTM();if(!C)continue;let w=vM(A);for(let N of MM(A,S)){let F=N.pts.map(([G,V])=>[(C.a*G+C.c*V+C.e)*f,(y-(C.b*G+C.d*V+C.f))*f]),U=hs(F,N.closed);U.length<2||x.push({pts:U,closed:N.closed&&U.length>2,color:I||E,layer:w,filled:!!E})}}}finally{g.remove()}return{shapes:x,units:d,skipped:v}}function vM(n){for(let t=n.parentElement;t&&t.nodeName.toLowerCase()!=="svg";t=t.parentElement)if(t.getAttribute("inkscape:groupmode")==="layer")return t.getAttribute("inkscape:label")||t.id||"";return""}function bM(n){for(let t=0;t<6;t++){let e=n.querySelectorAll("use");if(!e.length)return;for(let i of e){let s=i.getAttribute("href")||i.getAttributeNS("http://www.w3.org/1999/xlink","href")||"",a=s.startsWith("#")?n.querySelector(`[id="${CSS.escape(s.slice(1))}"]`):null,l=document.createElementNS("http://www.w3.org/2000/svg","g");for(let f of i.attributes)["href","xlink:href","x","y","width","height","transform"].includes(f.name)||l.setAttribute(f.name,f.value);let o=parseFloat(i.getAttribute("x"))||0,h=parseFloat(i.getAttribute("y"))||0;if(l.setAttribute("transform",`${i.getAttribute("transform")||""} translate(${o} ${h})`),a&&!a.contains(i)){let f=a.nodeName.toLowerCase()==="symbol"?Object.assign(document.createElementNS("http://www.w3.org/2000/svg","g"),{innerHTML:a.innerHTML}):a.cloneNode(!0);f.removeAttribute("id"),l.appendChild(f)}i.replaceWith(l)}}}function MM(n,t){switch(t){case"path":try{return kc(n.getAttribute("d"))}catch{return[]}case"line":return[{pts:[[fn(n,"x1"),fn(n,"y1")],[fn(n,"x2"),fn(n,"y2")]],closed:!1}];case"polyline":case"polygon":{let e=(n.getAttribute("points")||"").trim().split(/[\s,]+/).map(Number),i=[];for(let s=0;s+1<e.length;s+=2)i.push([e[s],e[s+1]]);return t==="polygon"&&i.length>2&&i.push(i[0].slice()),i.length>1?[{pts:i,closed:t==="polygon"}]:[]}case"circle":{let e=fn(n,"r");return e>0?[{pts:ra(fn(n,"cx"),fn(n,"cy"),e),closed:!0}]:[]}case"ellipse":{let e=fn(n,"rx"),i=fn(n,"ry");if(!(e>0&&i>0))return[];let s=oa(fn(n,"cx"),fn(n,"cy"),e,0,i/e);return s[s.length-1]=s[0].slice(),[{pts:s,closed:!0}]}case"rect":{let e=fn(n,"x"),i=fn(n,"y"),s=fn(n,"width"),a=fn(n,"height");if(!(s>0&&a>0))return[];let l=n.hasAttribute("rx")?fn(n,"rx"):fn(n,"ry"),o=n.hasAttribute("ry")?fn(n,"ry"):l;if(l=Math.min(l,s/2),o=Math.min(o,a/2),!(l>0))return[{pts:[[e,i],[e+s,i],[e+s,i+a],[e,i+a],[e,i]],closed:!0}];let h=Math.max(l,o),f=(g,p,x)=>Us(0,0,h,x,x+Math.PI/2,!0).map(([v,b])=>[g+v/h*l,p+b/h*o]),d=[...f(e+s-l,i+a-o,0),...f(e+l,i+a-o,Math.PI/2),...f(e+l,i+o,Math.PI),...f(e+s-l,i+o,Math.PI*1.5)];return d.push(d[0].slice()),[{pts:d,closed:!0}]}}return[]}var yM,_M,fn,Sm=pe(()=>{Cc();yM={mm:1,cm:10,in:25.4,pt:25.4/72,pc:25.4/6,px:25.4/96,"":25.4/96},_M="defs, clipPath, mask, symbol, marker, pattern, metadata, title, desc";fn=(n,t)=>parseFloat(n.getAttribute(t))||0});function Em(n){return wm||=(async()=>{let t=async a=>{let l=await fetch(n.file(`lib/${a}`));if(!l.ok)throw new Error(`lib/${a}: ${l.status}`);return URL.createObjectURL(new Blob([await l.text()],{type:"text/javascript"}))},[e,i]=await Promise.all([t("pdf.min.mjs"),t("pdf.worker.min.mjs")]),s=await import(e);return s.GlobalWorkerOptions.workerSrc=i,s})().catch(t=>{throw wm=null,t})}var wm,Tm=pe(()=>{wm=null});function Dc(n,t,e){if(n=String(n??""),SM.test(n))return null;n=n.replace(/,/g,".");var i=EM(n,t,e);return i!==null?i:wM(n,t,e)}function Am(n){var t={mm:1,cm:10,in:25.4,inch:25.4,inches:25.4,'"':25.4};return n==="feed"&&(t["mm/min"]=1,t["mm/m"]=1,t["in/min"]=25.4,t["in/m"]=25.4,t["inch/min"]=25.4,t.ipm=25.4,t["mm/s"]=60,t["mm/sec"]=60,t["in/s"]=25.4*60,t["in/sec"]=25.4*60,t.ips=25.4*60),t}function wM(n,t,e){var i=String(n??"").trim().toLowerCase().replace(/[”″]/g,'"').replace(/''/g,'"'),s=Am(e),a=t?25.4:1,l=0,o=function(){for(;i[l]===" ";)l++},h=function(){var x=/^(?:(\d+)\/(\d+)(?![\d.])|(\d+(?:\.\d*)?|\.\d+))\s*([a-z"]+(?:\/[a-z]+)?)?/.exec(i.slice(l));if(!x||+x[2]==0)return null;l+=x[0].length;var v=x[1]!=null?x[1]/x[2]:parseFloat(x[3]);return x[4]?Object.prototype.hasOwnProperty.call(s,x[4])?{v:v*s[x[4]],d:1}:null:{v,d:0}},f,d=function(x){if(o(),!x&&(i[l]==="-"||i[l]==="+")){var v=i[l++]==="-",b=d(!0);return b&&{v:v?-b.v:b.v,d:b.d}}if(i[l]!=="(")return h();l++;var y=f();return o(),!y||i[l]!==")"?null:(l++,y)},g=function(){for(var x=d();;){o();var v=i[l];if(v!=="*"&&v!=="/")return x;l++;var b=d();if(!x||!b)return null;if(v==="*"){if(x.d+b.d>1)return null;x={v:x.v*b.v,d:x.d+b.d}}else{if(b.d||b.v===0)return null;x={v:x.v/b.v,d:x.d}}}};f=function(){for(var x=g();;){o();var v=i[l];if(v!=="+"&&v!=="-")return x;l++;var b=g();if(!x||!b)return null;x.d!==b.d&&(x.d?b={v:b.v*a,d:1}:x={v:x.v*a,d:1}),x={v:v==="+"?x.v+b.v:x.v-b.v,d:x.d}}};var p=f();return o(),!p||l<i.length||!isFinite(p.v)?null:parseFloat((p.d?p.v/a:p.v).toFixed(t?4:3))}function EM(n,t,e){var i=String(n??"").trim().toLowerCase().replace(/[”″]/g,'"').replace(/''/g,'"'),s=i.match(/^([+-])?\s*(\d+(?:\.\d*)?|\.\d+)(?:(?:\s+|-)(\d+)\/(\d+)|\/(\d+))?\s*([a-z"/]*)$/);if(!s)return null;var a=parseFloat(s[2]),l;if(s[3]!=null){if(/\./.test(s[2])||+s[4]==0)return null;l=a+ +s[3]/+s[4]}else if(s[5]!=null){if(/\./.test(s[2])||+s[5]==0)return null;l=a/+s[5]}else l=a;s[1]==="-"&&(l=-l);var o=Am(e),h=s[6];if(!h)return l;if(!Object.prototype.hasOwnProperty.call(o,h))return null;var f=l*o[h],d=t?f/25.4:f;return parseFloat(d.toFixed(t?4:3))}function zu(n,t){return parseFloat(n.toFixed(t?4:3))}function TM(n,t){return t?n/ku:n}function AM(n,t){if(!t)return n;for(var e=n*ku,i=zu(n,!0),s=0;s<=4;s++){var a=parseFloat(e.toFixed(s));if(zu(a/ku,!0)===i)return a}return e}function Cm(n,t){return String(zu(TM(n,t),t))}function Pm(n,t,e){var i=Dc(n,t,e);return i==null?null:AM(i,t)}function Im(n,t){t=t||{};function e(){return typeof t.imperial=="function"?!!t.imperial():!!t.imperial}function i(o){return o&&o.getAttribute&&o.tagName==="INPUT"&&o.getAttribute("data-unit")?o:null}function s(o){var h=Dc(o.value,e(),o.getAttribute("data-unit"));h==null||String(h)===o.value.trim()||(o.value=h,o.dispatchEvent(new Event("input",{bubbles:!0})))}function a(o){var h=i(o.target);h&&s(h)}function l(o){var h=i(o.target);if(!(!h||h.disabled||h.readOnly)){if(o.key==="Enter"){s(h);return}if(!(t.arrows===!1||o.key!=="ArrowUp"&&o.key!=="ArrowDown")&&!(h.parentNode&&h.parentNode.classList&&h.parentNode.classList.contains("nc-step"))){var f=e(),d=Dc(h.value,f,h.getAttribute("data-unit"));(d==null||!isFinite(d))&&(d=0);var g=o.ctrlKey||o.metaKey?.001:o.shiftKey?10:o.altKey?.1:1;h.hasAttribute("data-integer")&&(g=Math.max(1,g));var p=d+(o.key==="ArrowUp"?g:-g),x=parseFloat(h.getAttribute("data-min")!=null?h.getAttribute("data-min"):h.getAttribute("min"));if(isFinite(x)&&p<x){if(!Number.isInteger(x)){o.preventDefault();return}p=x}p=parseFloat(p.toFixed(f?4:3)),o.preventDefault(),String(p)!==h.value&&(h.value=p,h.dispatchEvent(new Event("input",{bubbles:!0})),t.onStep&&t.onStep(h))}}}return n.addEventListener("blur",a,!0),n.addEventListener("keydown",l,!0),function(){n.removeEventListener("blur",a,!0),n.removeEventListener("keydown",l,!0)}}function Rm(n,t){t=t||{};var e=n.ownerDocument||document;function i(){return typeof t.imperial=="function"?!!t.imperial():!!t.imperial}function s(T,S,I){var E=T.getAttribute(S)!=null?T.getAttribute(S):T.getAttribute(I),C=E==null||E===""?NaN:parseFloat(E);return isFinite(C)?C:null}function a(T){var S=t.stepOf&&t.stepOf(T,i())||{step:s(T,"data-step","step"),min:s(T,"data-min","min"),max:s(T,"data-max","max")};return{step:S.step>0?S.step:1,min:S.min==null?-1/0:S.min,max:S.max==null?1/0:S.max}}function l(T){var S=T.value.trim();if(!S)return null;var I=T.getAttribute("data-unit")?Dc(S,i(),T.getAttribute("data-unit")):Number(S.replace(",","."));return I==null||!isFinite(I)?null:I}function o(T){var S=String(T);return S.indexOf(".")<0?0:S.length-S.indexOf(".")-1}function h(T,S){T.dispatchEvent(new Event(S,{bubbles:!0}))}function f(T,S,I){if(T.disabled||T.readOnly)return!1;var E=a(T),C=E.step*(I||1),w=l(T),N=w==null?S>0?Math.max(C,E.min):E.min:(S>0?Math.floor(w/C+1e-6)+1:Math.ceil(w/C-1e-6)-1)*C;if(!isFinite(N))return!1;N=Math.min(E.max,Math.max(E.min,N));var F=String(Number(N.toFixed(o(E.step)+2)));return F===T.value.trim()?!1:(T.value=F,h(T,"input"),!0)}function d(T){var S=T.input,I=a(S),E=l(S);T.minus.disabled=S.disabled||E!=null&&E<=I.min+1e-9,T.plus.disabled=S.disabled||E!=null&&E>=I.max-1e-9,T.el.classList.toggle("is-disabled",!!S.disabled)}var g=null,p=null;function x(){if(g&&(clearTimeout(g),g=null),p){var T=p;p=null,h(T,"change")}}function v(T,S,I){var E=e.createElement("button");return E.type="button",E.className="nc-step-btn",E.textContent=T,E.tabIndex=-1,E.setAttribute("aria-label",(S>0?"Increase ":"Decrease ")+(I.getAttribute("aria-label")||I.id||"value")),E.addEventListener("pointerdown",function(C){if(!(C.button!==0||E.disabled)){C.preventDefault(),x(),p=I,f(I,S);var w=400,N=function(){if(!f(I,S))return x();w=Math.max(50,w*.8),g=setTimeout(N,w)};g=setTimeout(N,w)}}),["pointerup","pointerleave","pointercancel"].forEach(function(C){E.addEventListener(C,x)}),E.addEventListener("contextmenu",function(C){C.preventDefault()}),E.addEventListener("click",function(C){C.detail===0&&f(I,S)&&h(I,"change")}),E}function b(T){T.key!=="ArrowUp"&&T.key!=="ArrowDown"||(T.preventDefault(),f(T.target,T.key==="ArrowUp"?1:-1,T.shiftKey?10:1)&&h(T.target,"change"))}if(t.css!==!1&&e.head&&!e.getElementById("nc-step-css")){var y=e.createElement("style");y.id="nc-step-css",y.textContent=CM,e.head.appendChild(y)}var _=[];Array.prototype.forEach.call(n.querySelectorAll(t.selector||"input[data-unit], input[data-step]"),function(T){if(!(T.parentNode&&T.parentNode.classList&&T.parentNode.classList.contains("nc-step"))){var S={el:e.createElement("div"),input:T,minus:v("\u2212",-1,T),plus:v("+",1,T)};S.el.className="nc-step",T.parentNode.insertBefore(S.el,T),S.el.appendChild(S.minus),S.el.appendChild(T),S.el.appendChild(S.plus),T.addEventListener("keydown",b),_.push(S)}});function A(){_.forEach(d)}return n.addEventListener("input",A),n.addEventListener("change",A),A(),{refresh:A,unwire:function(){x(),n.removeEventListener("input",A),n.removeEventListener("change",A),_.forEach(function(T){T.input.removeEventListener("keydown",b),T.el.parentNode.insertBefore(T.input,T.el),T.el.parentNode.removeChild(T.el)}),_=[]}}}var ku,SM,CM,Lm=pe(()=>{ku=25.4;SM=/(^|[^\d])([1-9]\d*),(\d{3})(?!\d)/;CM='.nc-step{display:flex;align-items:stretch;width:100%;height:36px;box-sizing:border-box;border:1px solid var(--color-border,#888);border-radius:var(--radius-small,4px);background:var(--color-surface,#fff);overflow:hidden}.nc-step:focus-within{border-color:var(--color-accent,#1abc9c)}.nc-step:has([aria-invalid="true"]){border-color:#d32f2f}.nc-step.is-disabled{opacity:.55}.nc-step>input{flex:1 1 0;min-width:0;width:auto;height:100%;margin:0;border:0 !important;border-radius:0;background:transparent;padding:0 4px;text-align:center;box-shadow:none !important;outline:none}.nc-step-btn{flex:0 0 34px;border:0 !important;padding:0 !important;margin:0;border-radius:0 !important;min-width:0 !important;background:color-mix(in srgb,var(--color-text-secondary,#888) 20%,var(--color-surface,#fff)) !important;color:var(--color-text-primary,#222) !important;font-family:inherit;font-size:1.25rem !important;font-weight:700;line-height:1;cursor:pointer;touch-action:manipulation;user-select:none;-webkit-user-select:none}.nc-step-btn:active:not(:disabled){background:color-mix(in srgb,var(--color-accent,#1abc9c) 35%,var(--color-surface,#fff)) !important}.nc-step-btn:disabled{opacity:.4;cursor:default}'});var Nm={};Hu(Nm,{mountApp:()=>IM});function IM(n,t,e){let i={get:async O=>{let H=await fetch(t.base+O);if(!H.ok)throw new Error(`${O}: ${H.status}`);return H.json()},post:(O,H)=>fetch(t.base+O,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(H)}),put:(O,H)=>fetch(t.base+O,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(H)})},s="/api/plugins/com.tmuka.nccut2d/settings",a={},l=async O=>{let H={...a,...O};try{let ot=await i.put(s,H);if(!ot.ok)throw new Error(`ncSender said ${ot.status}`);return a=H,!0}catch(ot){return console.warn("[ncCut2D] settings save failed:",ot),!1}},o={step:1,maxStep:1,fileName:"",loading:"",error:"",up:"top",analysis:null,part:null,scale:null,rot:null,lock:!0,fileSize:null,meshKind:null,tools:[],numbering:"slot",safeZ:null,safeZCommand:!1,connected:!1,units:"mm",limits:{},travel:null,job:null,plan:null,planning:!1,result:null,simChecks:null,toast:"",recent:[],partKey:null,raw:null,a:null,groups:[],sel:new Set,info:null},h=new Rc,f=O=>!!O.toolNumber&&(!o.slots||O.toolNumber<=o.slots),d=(O,H)=>ps.num(O,o.units,H),g=(O,H)=>ps.len(O,o.units,H),p=()=>o.units==="in",x=O=>Cm(O,p()),v=O=>{let H=Pm(O.value,p());return H!=null&&Number.isFinite(H)&&H>0?H:null},b=0,y=im(t.base).then(O=>{o.safeZCommand=O});(async()=>{let[O,H,ot,ht,nt]=await Promise.all([i.get("/api/settings").catch(()=>({})),i.get("/api/tools").catch(()=>[]),i.get("/api/firmware").catch(()=>null),i.get("/api/server-state").catch(()=>null),i.get(s).catch(()=>null)]);a=nt&&typeof nt=="object"?nt:{},o.saveToFm=!!a.saveToFileManager,o.units=ps.unitsFrom(O?.unitsPreference),o.numbering=O?.tool?.numbering==="toolId"?"toolId":"slot",o.slots=Math.max(0,Number(O?.tool?.count)||0);let dt=O?.tool?.probe?Number(O?.tool?.probeToolNumber)||99:null,zt=Number(O?.safeZHeight);o.safeZ=Number.isFinite(zt)?zt:null,o.tools=Lf(Array.isArray(H)?H:H?.tools),o.numbering=Rf(o.numbering,o.tools,o.slots,dt);let re=ot?.settings||{},pt=lt=>{let ct=parseFloat(re[lt]?.value);return Number.isFinite(ct)&&ct>0?ct:null},Jt=ht?.machineState,ee=!!re[395]||/grblhal/i.test(ht?.greetingMessage||""),L=Jt?.connected&&Jt?.status==="Idle"&&(!ht?.senderStatus||ht.senderStatus==="idle"),J=ee&&L?Nf(await sm({base:t.base})):[];o.limits={...Df(re,J),maxFeed:Math.min(pt("110")||1/0,pt("111")||1/0,1/0)},Number.isFinite(o.limits.maxFeed)||delete o.limits.maxFeed;let at=Math.min(pt("120")||1/0,pt("121")||1/0);Number.isFinite(at)&&(o.limits.accel=at),o.maxRapid=Math.min(pt("110")||5e3,pt("111")||5e3),pt("130")&&pt("131")&&(o.travel={x:pt("130"),y:pt("131"),z:pt("132")}),o.connected=!!ht?.machineState?.connected,X(),o.recent=await xm(),o.recent.length&&!o.a&&!o.loading&&Z(o.recent[0].key)})();let _=0,A=/\.(dxf|svg|pdf|ai)$/i;async function T(O,H=null){if(!O&&!H)return;let ot=++_,ht=()=>ot!==_,nt=H?H.name:O.name;if(!A.test(nt)){o.error=/\.(step|stp|stl|3mf)$/i.test(nt)?"That\u2019s a 3D part: open it in ncCAM. ncCut2D reads drawings: DXF, SVG, PDF or AI.":"Open a DXF, SVG, PDF or AI drawing.",X();return}o.fileName=nt,o.loading=`Reading ${nt}\u2026`,o.error="",o.plan=null,o.result=null,o.a=null,o.part=null,o.sel=new Set,o.step=1,o.maxStep=1,X();try{let dt=H?H.bytes:await O.arrayBuffer();if(ht())return;let zt=Nc(nt,dt);if(!H&&o.recent.some(L=>L.key===zt)){let L=await na(`part:${zt}`);if(ht())return;L?.bytes&&B(L.bytes,dt)&&(H={...L,bytes:dt})}let re=nt.split(".").pop().toLowerCase(),pt;if(re==="dxf"?pt=Hc(new TextDecoder().decode(dt)):re==="svg"?pt=Mm(new TextDecoder().decode(dt)):pt=await Gc(new Uint8Array(dt.slice(0)),await Em(t)),ht())return;let Jt=qu(pt.shapes);if(!Jt.shapes.length)throw new Error("No lines or shapes were found in this drawing. Text must be converted to curves (outlines) first.");let ee=Object.entries(pt.skipped||{}).filter(([,L])=>L>0).map(([L,J])=>`${J} ${L}`);if(o.info={units:pt.units,notes:ee.length?`Not drawn: ${ee.join(", ")} (convert text and hatches to curves to cut them).`:""},o.raw=Jt.shapes,o.bytes=dt.slice(0),o.partKey=zt,o.scale=H?.scale||1,await S(H?.job),ht())return;q()}catch(dt){if(ht())return;o.error=dt.message||String(dt),o.fileName="",o.a=null}o.loading="",X()}async function S(O){let H=o.scale===1?o.raw:$u(o.raw,[o.scale,0,0,o.scale,0,0]),ot=o.groups;if(o.a=Ec(H),o.groups=Pu(o.a),O?.groups&&ot?.length){let nt={};for(let dt of o.groups){let zt=ot.find(re=>re.idx.includes(dt.idx[0]));zt&&O.groups[zt.key]&&(nt[dt.key]=O.groups[zt.key])}O={...O,groups:nt}}await e("load",{shapes:H});let ht=jp(o.a,null);o.job=O?{...ht,...O,stock:{...ht.stock,...O.stock,...O.stock?.fit!==!1?{width:ht.stock.width,depth:ht.stock.depth}:{}},groups:O.groups||{},shapes:O.shapes||{}}:ht;for(let nt of Object.keys(o.job.shapes))+nt>=o.a.shapes.length&&delete o.job.shapes[nt];o.sel=new Set([...o.sel].filter(nt=>nt<o.a.shapes.length)),await C()}let I=Promise.resolve();function E(O){return I=I.then(async()=>{o.loading="Resizing the drawing\u2026",X();try{o.scale=O,o.result=null,o.maxStep=Math.min(o.maxStep,3),await S(o.job),q()}catch(H){o.error=H.message||String(H)}o.loading="",X()}),I}async function C(O=!1){if(!o.a||!(o.job?.stock.thickness>0)){o.plan=null,o.part=null,X();return}let H=++b;o.planning=!0,O&&(o.result=null),X(),O&&await y;let ot=performance.now();try{let ht=await e("plan",{tools:o.tools,job:{...o.job,units:o.units},limits:o.limits,paths:O,gcodeOptions:{name:o.fileName,numbering:o.numbering,safeZHeightMm:o.safeZ,safeZCommand:o.safeZCommand},timing:{maxRapid:o.maxRapid||5e3}});if(H!==b)return;o.slow=F(performance.now()-ot,O)??(O?null:o.slow),o.plan=ht.plan,o.part=ht.part,q(),O&&(o.result=ht,o.simChecks=null)}catch(ht){H===b&&(o.error=ht.message||String(ht))}H===b&&(o.planning=!1,X())}let w={plan:6e3,paths:15e3,tip:5e3},N=()=>{let O=/aarch64|arm64|armv\d|raspberry/i.test(navigator.userAgent||"")||(navigator.hardwareConcurrency||8)<=4,H=/^(localhost|127\.|\[?::1)/.test(location.hostname||"localhost")||!/^https?:$/.test(location.protocol);return O&&H};function F(O,H){return!N()||O<(H?w.paths:w.plan)?null:`${H?"Making the toolpaths":"Planning"} took ${Math.round(O/1e3)} s on this small computer. ncCut2D runs in the browser that shows it: open ncSender in a browser on a laptop or desktop (this machine's address, port 8090) and it works there, usually several times faster. Programs still save to this machine.`}function U(O,H=""){return`<div class="ncc-busy" ${H?`style="${H}"`:""}><div class="ncc-busy-in"><div class="ncc-busy-row"><span class="ncc-spin"></span>${fe(O)}<span class="ncc-elapsed" data-elapsed></span></div>
      <div class="ncc-busy-tip" data-slowtip hidden>Slow for your parts? Open ncSender in a browser on a laptop or desktop (this machine's address, port 8090): ncCut2D works there, usually several times faster.</div></div></div>`}let G=null,V=setInterval(()=>{if(!n.isConnected){clearInterval(V);return}if(!(o.loading||o.planning||o.result&&!o.simChecks&&o.step===4)){G=null;return}G??=performance.now();let H=performance.now()-G,ot=Math.floor(H/1e3);n.querySelectorAll("[data-elapsed]").forEach(ht=>{ht.textContent=ot>=2?` ${ot} s`:""}),H>=w.tip&&N()&&n.querySelectorAll("[data-slowtip]").forEach(ht=>{ht.hidden=!1})},500),k=null;function q(){if(!o.bytes||!o.job)return;clearTimeout(k);let O={name:o.fileName,bytes:o.bytes,job:o.job,scale:o.scale,savedAt:Date.now()},H=o.partKey,ot=o.recent[0]?.key!==H;k=setTimeout(async()=>{o.recent=await ym(O,o.recent,H),ot&&X()},400)}async function Z(O){let H=await na(`part:${O}`);if(H?.bytes)return T(null,H);o.recent=await Bu(O,o.recent),o.error="That drawing is no longer kept in this browser.",X()}function B(O,H){if(O.byteLength!==H.byteLength)return!1;let ot=new Uint8Array(O),ht=new Uint8Array(H);for(let nt=0;nt<ot.length;nt++)if(ot[nt]!==ht[nt])return!1;return!0}function K(){let O=o.bytes?o.partKey:null;return o.recent.filter(H=>H.key!==O)}function j(O){let H=(Date.now()-O)/864e5;return H<1?"today":H<2?"yesterday":H<30?`${Math.floor(H)} days ago`:new Date(O).toLocaleDateString()}let st=null;function X(){if(!n.isConnected)return;let O=n.querySelector("[data-keep-scroll]"),H=O?O.scrollTop:0,ot=o.step,ht=[o.a?"Give the stock\u2019s thickness, then choose how each kind of shape is cut and how deep.":"Drop a drawing. ncCut2D groups alike shapes so you choose each kind once.","Pick the material. ncCAM sets the speeds, feeds and depth of each pass.","Tools are picked from your Tool Library. Change any of them, or just continue.","Watch the cut play through. When it looks right, load it."][ot-1],nt=[o.a?"What to cut":"Open your drawing","What are you cutting it from?","Here\u2019s the plan",o.simChecks&&!o.simChecks.ok?"Check the warnings":"Ready to cut"][ot-1];n.innerHTML=`
      <nav class="ncc-rail" aria-label="Steps">
        <div class="ncc-rail-head"><div class="ncc-eyebrow">Plugin</div><div class="ncc-rail-title">ncCut2D<span class="ncc-beta">Beta</span></div><div class="ncc-rail-sub">DXF, SVG, PDF or AI to G-code</div></div>
        <div class="ncc-steps">${PM.map((re,pt)=>{let Jt=pt+1,ee=Jt===ot?"on":Jt<o.maxStep||Jt<ot?"done":"";return`<button class="ncc-step ${ee}" type="button" data-go="${Jt}" ${Jt<=o.maxStep?"":"disabled"}><span class="ncc-num">${ee==="done"?"\u2713":Jt}</span>${fe(re)}</button>`}).join("")}</div>
        <button class="ncc-close" type="button" data-act="close">${qe.close}Close</button>
      </nav>
      <section class="ncc-main">
        <div class="ncc-top">
          <div><h1>${fe(nt)}</h1><p class="ncc-lede">${fe(ht)}</p></div>
          <div class="ncc-conn"><span class="ncc-dot ${o.connected?"ok":""}"></span>${o.connected?"Connected":"Not connected"}</div>
        </div>
        <div class="ncc-body ${ot===3?"fixed":""}">${[$t,Ue,rt,Pt][ot-1]()}</div>
        <div class="ncc-foot">${bt()}</div>
      </section>
      ${o.toast?`<div class="ncc-toast" role="status">${fe(o.toast)}</div>`:""}`;let dt=n.querySelector("[data-keep-scroll]");dt&&(dt.scrollTop=H),st&&st.unwire(),st=Rm(n,{selector:"input[data-unit]",imperial:p,stepOf:(re,pt)=>({step:pt?.0625:1,min:0})});let zt=n.querySelector("[data-viewer]");if(zt){zt.replaceWith(h.el);let re=o.loading||ot===4&&!o.result?U(o.loading||"Making toolpaths\u2026"):"";h.el.querySelectorAll(".ncc-busy, .ncc-overlay").forEach(pt=>pt.remove()),h.el.insertAdjacentHTML("beforeend",(ot===4?Lt():"")+re),h.fit(),ot===2&&R(),ot===3&&ft(),ot===4&&o.result&&qt()}}function bt(){let O=`<button class="ncc-back" type="button" data-go="${o.step-1}" ${o.step>1?"":"disabled"}>Back</button>`;if(o.step===1){let ot=o.a?o.job?.stock.thickness>0?o.plan&&!o.plan.ops.length?"Nothing is set to be cut.":"":"Give the stock\u2019s thickness first.":"";return`${O}${ot?`<span class="ncc-foot-note">${ot}</span>`:""}<button class="ncc-next" type="button" data-go="2" ${o.plan&&o.plan.ops.length&&!o.loading&&!o.planning?"":"disabled"}>Next: Stock ${qe.next}</button>`}if(o.step===2)return`${O}<button class="ncc-next" type="button" data-go="3">Next: Operations ${qe.next}</button>`;if(o.step===3){let ot=o.plan&&o.plan.ops.some(ht=>ht.enabled);return`${O}<button class="ncc-next" type="button" data-go="4" ${ot&&!o.planning?"":"disabled"}>Make toolpaths ${qe.next}</button>`}let H=o.simChecks&&!o.simChecks.ok;return`${O}${H?'<span class="ncc-foot-note ncc-bad">Fix the problems above before loading.</span>':""}<button class="ncc-next" type="button" data-act="load" ${o.result&&o.simChecks&&!H?"":"disabled"}>${qe.load}Load into ncSender</button>`}let St={outside:Yn.cutout,inside:Yn.inside,pocket:Yn.pocket,online:Yn.online,off:"#8a94a3"},Vt=".dxf,.svg,.pdf,.ai,.DXF,.SVG,.PDF,.AI";function $t(){if(!o.a&&!o.loading)return`<div class="ncc-drop" data-drop>
        <div class="ncc-drop-icon">${qe.upload}</div>
        <h2>Drop a DXF, SVG, PDF or AI file here</h2>
        <p>A drawing to size, from Fusion, Inkscape, Illustrator, LibreCAD or QCAD. Each shape gets a cut: <strong>Outer (part)</strong>, <strong>Inner (perimeter)</strong>, <strong>Inner (clearing)</strong> or <strong>On the line</strong>.</p>
        <label class="ncc-btn" style="display: inline-flex; align-items: center; gap: 8px">Open file<input type="file" accept="${Vt}" data-file hidden></label>
        ${o.error?`<div class="ncc-hint bad" style="max-width: 520px">${qe.warn}<span>${fe(o.error)}</span></div>`:""}
        ${K().length?`<div class="ncc-recent"><div class="ncc-recent-h">Recent drawings <span>kept in this browser</span></div>
          ${K().map(H=>`<div class="ncc-recent-row"><button class="ncc-recent-open" type="button" data-recent-open="${fe(H.key)}"><span class="ncc-file-name">${fe(H.name)}</span><span class="ncc-file-sub">${j(H.savedAt)}</span></button><button class="ncc-recent-x" type="button" data-forget="${fe(H.key)}" aria-label="Forget ${fe(H.name)}" title="Forget">${qe.close}</button></div>`).join("")}</div>`:""}
        ${o.tools.length?"":`<div class="ncc-hint" style="max-width: 520px">${qe.info}<span>Your Tool Library is empty. Add your end mills in Settings \u2192 Tool Library so ncCut2D can pick them.</span></div>`}
      </div>`;let O=o.a;return`
      <div class="ncc-card ncc-viewcard ncc-grow">
        <div class="ncc-file">
          <div style="display: flex; align-items: center; gap: 12px; min-width: 0">
            <div class="ncc-drop-icon" style="width: 38px; height: 38px; border-radius: 10px">${qe.part}</div>
            <div style="min-width: 0"><div class="ncc-file-name">${fe(o.fileName)}</div>
            <div class="ncc-file-sub ncc-mono">${O?`${d(O.size[0])} \xD7 ${g(O.size[1])} \xB7 ${O.shapes.length} shape${O.shapes.length===1?"":"s"}`:"&nbsp;"}</div></div>
          </div>
          <div style="display: flex; gap: 8px; align-items: center">
          ${K().length?`<select class="ncc-select ncc-recent-pick" data-recent aria-label="Recent drawings" ${o.loading?"disabled":""}><option value="">Recent drawings\u2026</option>${K().map(H=>`<option value="${fe(H.key)}">${fe(H.name)} \xB7 ${j(H.savedAt)}</option>`).join("")}</select>`:""}
          <label class="ncc-btn muted" style="white-space: nowrap">Open another file<input type="file" accept="${Vt}" data-file hidden></label>
          </div>
        </div>
        <div class="ncc-drawing" data-drawing>${O?ut():U(o.loading||"Reading\u2026","position: static; flex: 1")}</div>
        <div class="ncc-row-sub" style="margin: 0">Click a shape to choose its cut on its own; shift-click for more. ${te()}</div>
      </div>
      <div class="ncc-col ncc-side" data-keep-scroll="cuts">
        ${O?`${Se()}${ge()}${he()}${be()}${ue(!0)}`:""}
      </div>`}let te=()=>["outside","inside","pocket","online","off"].map(O=>`<span style="white-space: nowrap"><span class="ncc-swatch" style="background: ${St[O]}"></span> ${fe(wc[O])}</span>`).join(" ");function ut(){let O=o.a,[H,ot]=O.size,ht=Math.max(H,ot)*.03+1,nt=Ir(o.groups),dt=O.shapes.map((pt,Jt)=>Jt).sort((pt,Jt)=>(O.areas[Jt]||0)-(O.areas[pt]||0)),zt=Math.max(H,ot)/500,re=dt.map(pt=>{let Jt=O.shapes[pt],ee=is(O,o.job,pt,nt),L=Jt.pts.map((ct,Ft)=>`${Ft?"L":"M"}${ct[0].toFixed(3)} ${(ot-ct[1]).toFixed(3)}`).join("")+(O.loops[pt]?"Z":""),J=St[ee.cut],at=o.sel.has(pt),lt=ee.cut==="pocket"&&O.loops[pt]?`fill="${J}" fill-opacity="0.22"`:O.loops[pt]?'fill="transparent"':'fill="none"';return`<path d="${L}" data-shape="${pt}" stroke="${at?"var(--color-accent)":J}" stroke-width="${(at?3:1.4)*zt}" ${ee.cut==="off"?`stroke-dasharray="${4*zt} ${3*zt}"`:""} ${lt} vector-effect="non-scaling-stroke" style="cursor: pointer"><title>${fe(Dt(pt))} \xB7 ${fe(wc[ee.cut])}${gt(ee)}</title></path>`}).join("");return`<svg viewBox="${-ht} ${-ht} ${H+2*ht} ${ot+2*ht}" preserveAspectRatio="xMidYMid meet" style="width: 100%; height: 100%; display: block">${re}</svg>`}let gt=O=>O.cut==="off"?"":O.depth===null||O.depth===void 0?" \xB7 through":` \xB7 ${g(O.depth)} deep`;function Dt(O){let H=o.a,ot=H.circles[O];if(!H.loops[O])return"Line";if(ot)return`\xD8${g(2*ot.r)} circle`;let ht=Bc([H.shapes[O]]);return`${d(ht.w)} \xD7 ${g(ht.h)} shape`}function ne(O){let H=O.idx.length,ot=H>1?`${H} \xD7 `:"";if(O.kind==="outline")return H>1?`Outline (${H} shapes joined)`:"Outline";if(O.kind==="line")return H>1?`${H} lines`:"A line";if(O.kind==="counterbore"){let{sizes:ht,step:nt,last:dt}=O.label;return`${ot}\xD8${g(ht[nt])} ${dt?"hole through the":nt?"inner step of the":"outer step of the"} counterbore${H>1?"s":""} (${ht.map(zt=>d(zt)).join(" / ")})`}return O.kind==="circle"?`${ot}\xD8${g(O.label.d)} circle${H>1?"s":""}`:`${ot}${d(O.label.w)} \xD7 ${g(O.label.h)} ${O.kind==="rect"?"rectangle":"shape"}${H>1?"s":""}`}let Ot=O=>O?["outside","inside","pocket","online","off"]:["online","off"];function ce(O,H,ot){let ht=Ot(ot).map(zt=>`<option value="${zt}" ${H.cut===zt?"selected":""}>${fe(wc[zt])}</option>`).join(""),nt=H.depth===null||H.depth===void 0,dt=H.cut==="off"?"":`<label class="ncc-chk"><input type="checkbox" data-through="${fe(O)}" ${nt?"checked":""}> Through</label>
      ${nt?"":`<input class="ncc-input ncc-mono ncc-depth" type="text" data-unit="length" data-min="0" autocomplete="off" spellcheck="false" aria-label="Depth (${o.units})" data-depth="${fe(O)}" value="${x(H.depth)}"><span class="ncc-unit">${o.units} deep</span>`}`;return`<div class="ncc-choose"><select class="ncc-select" data-cut="${fe(O)}" aria-label="Cut">${ht}</select>${dt}</div>`}function be(){let O=Ir(o.groups);return`<div class="ncc-card"><div class="ncc-label">What to cut</div>${o.groups.map(ot=>{let ht=is(o.a,o.job,ot.idx[0],O),nt=ot.idx.filter(dt=>o.job.shapes[dt]).length;return`<div class="ncc-decide" data-hover="${fe(ot.key)}">
        <div class="ncc-decide-name"><span class="ncc-swatch" style="background: ${St[ht.cut]}"></span>${fe(ne(ot))}${nt?`<small> \xB7 ${nt} set on ${nt>1?"their":"its"} own</small>`:""}</div>
        ${ce(ot.key,ht,ot.kind!=="line")}
      </div>`}).join("")}</div>`}function he(){if(!o.sel.size)return"";let O=[...o.sel],H=Ir(o.groups),ot=is(o.a,o.job,O[0],H),ht=O.every(dt=>o.a.loops[dt]),nt=O.some(dt=>o.job.shapes[dt]);return`<div class="ncc-card ncc-sel-card">
        <div class="ncc-row"><div class="ncc-row-title">${O.length>1?`${O.length} shapes selected`:fe(Dt(O[0]))}</div><button type="button" class="ncc-link" data-act="unselect">Clear</button></div>
        ${ce("sel",ot,ht)}
        ${nt?'<button type="button" class="ncc-link" data-act="sel-reset">Back to its group\u2019s choice</button>':'<div class="ncc-row-sub">A change here applies to the selected shapes only.</div>'}
      </div>`}function ge(){let O=o.job.stock.thickness,H=O?x(O):"";return`<div class="ncc-card ${O?"":"ncc-need"}">
        <div class="ncc-row"><div class="ncc-row-text"><div class="ncc-row-title">Stock thickness</div><div class="ncc-row-sub">${O?"\u201CThrough\u201D cuts go this deep and a little into the spoilboard.":"How thick is the board? Measure it: every \u201Cthrough\u201D cut depends on it."}</div></div>
        <div style="display: flex; align-items: center; gap: 6px"><input class="ncc-input ncc-mono ncc-depth" type="text" data-unit="length" data-min="0" autocomplete="off" spellcheck="false" aria-label="Stock thickness (${o.units})" data-thick value="${H}" placeholder="?"><span class="ncc-unit">${o.units}</span></div></div>
      </div>`}function Se(){let O=o.a,H=Bc(o.raw),ot=o.info?.units==null||o.info?.units==="unitless",ht=Math.round(o.scale*1e4)/100;return`<div class="ncc-card">
        <div class="ncc-fields two">${["X","Y"].map((nt,dt)=>`<div class="ncc-field"><label for="ncc-size${dt}">${nt} (${o.units})</label><input id="ncc-size${dt}" class="ncc-input ncc-mono" type="text" data-unit="length" data-min="0" autocomplete="off" spellcheck="false" data-size="${dt}" value="${x(O.size[dt])}"></div>`).join("")}</div>
        <div class="ncc-row-sub">${ht===100?"As drawn":`Scaled to ${ht}%`}${o.info?.units?` \xB7 the file says ${fe(o.info.units)}`:""}.${ht!==100?' <button type="button" class="ncc-link" data-scale="reset">Back to the drawing\u2019s size</button>':""}</div>
        ${ot&&ht===100&&Math.max(H.w,H.h)<50?`<div class="ncc-hint">${qe.info}<span>Only ${d(Math.max(H.w,H.h))} across and the file has no unit: it may be in inches. <button type="button" class="ncc-link" data-scale="inch">Make it inches (\xD7 25.4)</button></span></div>`:""}
        ${o.info?.notes?`<div class="ncc-hint">${qe.info}<span>${fe(o.info.notes)}</span></div>`:""}
      </div>`}function ue(){let O=o.slow?`<div class="ncc-hint">${qe.info}<span>${fe(o.slow)}</span></div>`:"";return o.plan?O+o.plan.warnings.map(H=>`<div class="ncc-hint ${H.kind==="notool"?"bad":""}">${H.kind==="notool"?qe.warn:qe.info}<span>${fe(H.text)}</span></div>`).join(""):O}let Ae=null;function Ue(){let O=o.job,H=o.plan?.stock||Tc(o.a,O),ot=Object.entries(fs).map(([nt,dt])=>`<button class="ncc-pick ncc-mat ${O.material===nt?"sel":""}" type="button" data-material="${nt}"><span class="ncc-mat-swatch" style="background: ${Rr[nt]}"></span>${fe(dt.name)}<small>${fe(dt.note)}</small></button>`).join(""),ht=(nt,dt,zt)=>`<div class="ncc-field"><label for="ncc-${nt}">${dt}</label><input id="ncc-${nt}" class="ncc-input ncc-mono" type="text" data-unit="length" data-min="0" autocomplete="off" spellcheck="false" data-stock="${nt}" value="${x(zt)}" ${O.stock.fit&&nt!=="thickness"?"disabled":""}></div>`;return`
      <div class="ncc-col ncc-half">
        <div class="ncc-card ncc-mat-card"><div class="ncc-label">Material</div><div class="ncc-picks ncc-mats">${ot}</div></div>
        <div class="ncc-card">
          ${Ye("fit","Size the stock to the drawing",`Adds ${g(O.stock.margin)} on every side`,O.stock.fit)}
          <div class="ncc-fields">${ht("width",`Width X (${o.units})`,H.width)}${ht("depth",`Depth Y (${o.units})`,H.depth)}${ht("thickness",`Thickness Z (${o.units})`,H.thickness)}</div>
        </div>
        <div class="ncc-card">
          ${Ye("tabs","Leave tabs to hold the part",O.tabs.enabled?`${d(ke().height)} \xD7 ${g(ke().length)}, so the part stays put until you cut it free`:"The part comes loose at the end",O.tabs.enabled)}
          ${O.tabs.enabled?`<div class="ncc-row"><span class="ncc-row-title" style="font-weight: 500">Number of tabs</span><div class="ncc-stepper"><button type="button" data-tabs="-1" aria-label="Fewer tabs" ${O.tabs.count<=1?"disabled":""}>\u2212</button><span class="ncc-mono">${O.tabs.count}</span><button type="button" data-tabs="1" aria-label="More tabs" ${O.tabs.count>=12?"disabled":""}>+</button></div></div>
          ${Qe("height","Tab thickness","Thinner tabs","Thicker tabs")}
          ${Qe("length","Tab length","Shorter tabs","Longer tabs")}`:""}
        </div>
      </div>
      <div class="ncc-col ncc-half">
        <div class="ncc-card ncc-zero-card"><div class="ncc-label">Where is zero?</div>${Ce(H)}
          <div style="font-size: 14px">X Y zero: <strong>${fe(Be(O.zero.xy))}</strong> of the stock</div>
          <div class="ncc-seg" role="group" aria-label="Z zero">
            <button type="button" class="${O.zero.z==="top"?"sel":""}" data-z="top">Z0 on top of stock</button>
            <button type="button" class="${O.zero.z==="bed"?"sel":""}" data-z="bed">Z0 on the bed</button>
          </div>
        </div>
      </div>`}let Ye=(O,H,ot,ht)=>`<div class="ncc-row"><div class="ncc-row-text"><div class="ncc-row-title">${fe(H)}</div><div class="ncc-row-sub">${fe(ot)}</div></div><button class="ncc-toggle" type="button" role="switch" aria-checked="${ht}" aria-label="${fe(H)}" data-toggle="${O}"></button></div>`;function Be(O){return{"back-left":"back left corner","back-center":"back edge, middle","back-right":"back right corner","left-center":"left edge, middle",center:"center","right-center":"right edge, middle","front-left":"front left corner","front-center":"front edge, middle","front-right":"front right corner"}[O]}let ke=()=>({...hi(o.job.material),...Object.fromEntries(["height","length"].filter(O=>o.job.tabs[O]!=null).map(O=>[O,o.job.tabs[O]]))}),et=()=>o.units==="in"?{min:.508,max:10.16,step:.508,grid:.254}:{min:.5,max:10,step:.5,grid:.1};function Qe(O,H,ot,ht){let nt=ke()[O];return`<div class="ncc-row"><span class="ncc-row-title" style="font-weight: 500">${H}</span><div class="ncc-stepper"><button type="button" data-tabsize="${O}" data-by="-1" aria-label="${ot}" ${nt<=et().min+1e-6?"disabled":""}>\u2212</button><span class="ncc-mono">${g(nt,o.units==="in"?2:1)}</span><button type="button" data-tabsize="${O}" data-by="1" aria-label="${ht}" ${nt>=et().max-1e-6?"disabled":""}>+</button></div></div>`}function Ce(O){return`<div class="ncc-zero"><div data-viewer></div></div>
      <div class="ncc-row-sub ncc-mono" style="text-align: center; margin: 0">${d(O.width)} \xD7 ${d(O.depth)} \xD7 ${g(O.thickness)} stock \xB7 tap a point for zero, an arrow to turn the part</div>`}let z=null;function R(){let O=o.plan?.stock||Tc(o.a,o.job),H=qp.map(nt=>({key:nt,...Iu(O,{xy:nt,z:"top"})})),ot=getComputedStyle(n).getPropertyValue("--color-accent").trim()||"#4c6ef5",ht=`${o.part?.positions?.length}|${O.width}|${O.depth}|${O.thickness}`;h.keepCamera=z===ht,h.showZero({stock:O,part:o.part,points:H,selected:o.job.zero.xy,zFace:o.job.zero.z,color:Rr[o.job.material],accent:ot}),z=ht,Ae=null,At=null,h.onPick=null,h.onMarker=nt=>{nt!==o.job.zero.xy&&(o.job.zero.xy=nt,je())},h.onAxis=null}function rt(){let O=o.plan;if(!O)return U("Planning\u2026","position: static; flex: 1");let H=O.ops.map(pt=>{let Jt=Tt(pt);return`<div class="ncc-op ${pt.enabled?"":"off"} ${o.focusOp===pt.id?"focus":""}" data-focus="${pt.id}">
        <div class="ncc-op-icon" style="background: color-mix(in srgb, ${Yn[pt.kind]} 16%, transparent); color: ${Yn[pt.kind]}">${qe[pt.kind]||qe.pocket}</div>
        <div class="ncc-op-text"><div class="ncc-op-title">${fe(pt.label)}</div><div class="ncc-op-sub ncc-mono">${fe(pt.detail)}</div></div>
        <select class="ncc-select" data-tool="${pt.id}" aria-label="Tool for ${fe(pt.label)}">${Jt.map(ee=>`<option value="${ee.id}" ${ee.id===pt.tool.id?"selected":""}>T${ds(ee,o.numbering)} \xB7 ${fe(ee.name)}</option>`).join("")}</select>
        <button class="ncc-toggle" type="button" role="switch" aria-checked="${pt.enabled}" aria-label="${fe(pt.label)}" data-op="${pt.id}"></button>
      </div>`}).join(""),ot=Ac(O),ht=new Map;for(let pt of O.ops)pt.enabled&&pt.kind!=="face"&&ht.set(pt.tool.id,(ht.get(pt.tool.id)||0)+1);let nt=[...ht].sort((pt,Jt)=>Jt[1]-pt[1])[0]?.[0],dt=O.ops.find(pt=>pt.enabled&&pt.tool.id===nt)||O.ops.find(pt=>pt.enabled),zt=dt?.feeds,re=`<div class="ncc-pair">
          <div class="ncc-card"><div class="ncc-label">Finish</div>
            <div class="ncc-seg" role="group" aria-label="Finish">${Object.entries(zn).map(([pt,Jt])=>`<button type="button" class="${o.job.finish===pt?"sel":""}" data-finish="${pt}">${Jt.name}</button>`).join("")}</div>
            <div class="ncc-row-sub">${{fast:"Bigger steps, no finishing pass.",balanced:`Leaves ${g(.2,o.units==="in"?3:1)} on the walls, then a clean finishing pass.`,smooth:"Lighter steps and a finishing pass, for the best walls."}[o.job.finish]}</div>
            ${zt?`<div class="ncc-mono ncc-row-sub" style="line-height: 1.6">${fe(dt.tool.name)}<br>${fe(fs[o.job.material].name)} \xB7 ${zt.rpm.toLocaleString()} RPM<br>${o.units==="in"?`${d(zt.feed,1)} in/min`:`${zt.feed.toLocaleString()} mm/min`} \xB7 ${g(zt.stepdown,o.units==="in"?3:2)} per pass</div>`:""}
          </div>
          <div class="ncc-card"><div class="ncc-label">Tools for this job</div>
            ${ot.map(pt=>`<div class="ncc-row"><span style="min-width: 0"><span class="ncc-mono" style="color: var(--color-accent)">T${ds(pt,o.numbering)}</span> ${fe(pt.name)}</span><span class="ncc-slot ${f(pt)?"":"hand"}">${f(pt)?`Slot ${pt.toolNumber}`:"By hand"}</span></div>`).join("")||'<div class="ncc-row-sub">No operations switched on.</div>'}
            ${ot.some(pt=>!pt.toolNumber)?'<div class="ncc-row-sub">By hand: not in the magazine, so you\u2019ll be asked to load it.</div>':""}
          </div>
        </div>`;return`<div class="ncc-plan">
        <div class="ncc-plan-list" data-keep-scroll="ops"><div class="ncc-ops">${H}</div>${mt()}${ue(!1)}<div class="ncc-plan-pair-in">${re}</div></div>
        <div class="ncc-card ncc-viewcard ncc-plan-view"><div data-viewer></div></div>
        <div class="ncc-plan-pair">${re}</div>
      </div>`}function ft(){let H=(o.plan?.ops||[]).filter(ot=>ot.enabled&&ot.kind!=="face").flatMap(ot=>{let ht=o.focusOp&&o.focusOp!==ot.id;return ot.kind==="chamfer"?ot.show.map(dt=>({loops:dt.loops,z:dt.z+.05,color:Yn.chamfer,opacity:ht?.2:1,top:dt.z})):{loops:ot.region||(ot.lines||[]).map(dt=>dt.pts)||[],z:ot.kind==="cutout"?ot.zTop+.05:Math.max(ot.zBottom,0)+.05,color:Yn[ot.kind],dashed:ot.kind==="cutout",opacity:ht?.2:1,top:ot.zTop}});h.keepCamera=Ae===o.part?.positions,h.showPart(o.part,H),Ae=o.part?.positions,At=null,z=null,h.onFrame=null,h.onMarker=null,h.onPick=null}function mt(){let O=o.job.chamfer,H=O?.size>0,ot=H?O.size:Ni.size,ht=O?.edges||"all",nt=H?o.plan.ops.some(dt=>dt.kind==="chamfer")?"A V-bit runs along each top edge the cuts made, after the cut-out.":"No edge can be chamfered: see the notes below.":"Off: edges stay sharp.";return`<div class="ncc-card" style="margin-top: 10px">
        <div class="ncc-row"><div class="ncc-row-text"><div class="ncc-row-title">Add Chamfer to top surfaces</div><div class="ncc-row-sub">${fe(nt)}</div></div><button class="ncc-toggle" type="button" role="switch" aria-checked="${H}" aria-label="Add Chamfer to top surfaces" data-toggle="chamfer"></button></div>
        ${H?`<div class="ncc-row"><span class="ncc-row-title" style="font-weight: 500">Width</span><div class="ncc-stepper"><button type="button" data-chamfer="-1" aria-label="Narrower chamfer" ${ot<=Ni.min+1e-6?"disabled":""}>\u2212</button><span class="ncc-mono">${g(ot,o.units==="in"?3:1)}</span><button type="button" data-chamfer="1" aria-label="Wider chamfer" ${ot>=Ni.max-1e-6?"disabled":""}>+</button></div></div>
        <div class="ncc-seg" role="group" aria-label="Which edges">${Object.entries({all:"All edges",outside:"Outside",inside:"Pockets & holes"}).map(([dt,zt])=>`<button type="button" class="${ht===dt?"sel":""}" data-chamfer-edges="${dt}">${zt}</button>`).join("")}</div>`:""}
      </div>`}function Tt(O){let H=O.kind==="drill"?["drill"]:O.kind==="face"?["surfacing","flat"]:O.kind==="finish3d"?["ball","flat"]:O.kind==="chamfer"?["vbit","chamfer"]:O.kind==="thread"?["threadmill"]:["flat"],ot=o.tools.filter(ht=>H.includes(ht.kind)&&(O.angle==null||Math.abs(ht.angle/2-O.angle)<=1.5)).sort((ht,nt)=>nt.diameter-ht.diameter);return ot.some(ht=>ht.id===O.tool.id)?ot:[O.tool,...ot]}function Pt(){let O=o.result,H=O?.plan,ot=H?Ac(H):[],ht=H?H.ops.filter(nt=>nt.enabled).reduce((nt,dt,zt,re)=>nt+(zt>0&&re[zt-1].tool.id!==dt.tool.id?1:0),0):0;return`
      <div class="ncc-card ncc-viewcard ncc-grow">
        <div data-viewer></div>
        <div class="ncc-play" data-playbar>${Xt()}</div>
      </div>
      <div class="ncc-col ncc-side">
        <div class="ncc-card ncc-stats">
          <div class="ncc-stat"><b class="ncc-mono">${H?Math.max(1,Math.round(O.seconds/60)):"\u2013"}<span> min</span></b><span>Run time</span></div>
          <div class="ncc-stat"><b class="ncc-mono">${ot.length||"\u2013"}</b><span>Tools</span></div>
          <div class="ncc-stat"><b class="ncc-mono">${H?ht:"\u2013"}</b><span>Tool changes</span></div>
        </div>
        <div class="ncc-card ncc-fill"><div class="ncc-label">Checked</div>${Mt()}</div>
        ${o.slow?`<div class="ncc-hint">${qe.info}<span>${fe(o.slow)}</span></div>`:""}
        <div class="ncc-card">
          <div class="ncc-mono ncc-row-sub" style="margin: 0">${fe(xt())}${O?` \xB7 ${(O.gcode.split(`
`).length-1).toLocaleString()} lines`:""}</div>
          <div class="ncc-row" title="Also save each program you load to File Manager \u203A ncCut2D"><div class="ncc-row-text"><div class="ncc-row-title">Save to File Manager</div><div class="ncc-row-sub">${o.saveToFm?"Load into ncSender also saves it in ncCut2D.":"Off: only loaded."}</div></div><button class="ncc-toggle" type="button" role="switch" aria-checked="${!!o.saveToFm}" aria-label="Save to File Manager" data-toggle="savefm"></button></div>
        </div>
      </div>`}let xt=()=>`${(o.fileName||"drawing").replace(/\.(dxf|svg|pdf|ai)$/i,"")}.nc`;function Mt(){let O=o.simChecks;return O?O.items.map(H=>`<div class="ncc-check"><span class="ncc-ck ${H.state}">${H.state==="bad"?qe.cross:H.state==="info"?"!":qe.check}</span><span>${fe(H.text)}</span></div>`).join(""):`<div class="ncc-row-sub">${o.result?"Checking\u2026":"Waiting for the toolpaths\u2026"}<span class="ncc-elapsed" data-elapsed></span></div>`}let W={ops:[],moves:null,opOf:null,cum:null,total:0,t:0,i:1,playing:!1,speed:5,hm:null,stamps:[],colors:[],cursor:null,goal:null};function Xt(){if(!o.result)return"";let H=o.result.plan.ops.filter(nt=>nt.enabled&&nt.track),ot=W.total||1,ht=H[Math.max(0,W.opIndexAt?.(W.t)??0)];return`<button class="ncc-playbtn" type="button" data-act="play" aria-label="${W.playing?"Pause":"Play"}">${W.playing?qe.pause:qe.play}</button>
      <div class="ncc-track">
        <div class="ncc-bar" data-scrub role="slider" aria-label="Position in the program" aria-valuemin="0" aria-valuemax="${Math.round(ot)}" aria-valuenow="${Math.round(W.t)}">
          ${H.map(nt=>`<i style="width: ${(nt.seconds||0)/ot*100}%; background: ${Yn[nt.kind]}"></i>`).join("")}
          <b style="width: ${W.t/ot*100}%"></b><em style="left: ${W.t/ot*100}%"></em>
        </div>
        <div class="ncc-row" style="font-size: 12px; color: var(--color-text-secondary)"><span data-pb="step">${Ns(H,ht)}</span><span class="ncc-mono" data-pb="clock">${Oc(W.t)} / ${Oc(ot)}</span></div>
      </div>
      <div class="ncc-seg" style="padding: 3px" role="group" aria-label="Speed">${[[1,"Slow"],[5,"Normal"],[25,"Fast"]].map(([nt,dt])=>`<button type="button" style="padding: 6px 8px" class="${W.speed===nt?"sel":""}" data-speed="${nt}">${dt}</button>`).join("")}</div>`}function Lt(){return`<div class="ncc-overlay tr">
      <button class="ncc-chip ${h.paths?.visible!==!1&&o.showPaths?"on":""}" type="button" data-act="paths">Toolpaths</button>
      <button class="ncc-chip ${o.showPart?"on":""}" type="button" data-act="ghost">Part</button>
    </div>`}let At=null;function qt(){if(At===o.result){Kt();return}At=o.result,Ae=null,z=null,h.onMarker=null,h.onPick=null;let O=o.result.plan,H=O.ops.filter(pt=>pt.enabled&&pt.track),ot=Li.cellFor(O.stock,N()?380*380:520*520);W.ops=H,W.hm=om(new Li(O.stock,ot)),W.colors=O.ops.map(pt=>new le(Yn[pt.kind])),W.stamps=O.ops.map(pt=>Ru(pt.tool,ot));let ht=0;for(let pt of H)ht+=pt.track.length/4;W.moves=new Float32Array(ht*4),W.opOf=new Uint16Array(ht),W.cum=new Float64Array(ht);let nt=0,dt=0,zt=null,re=o.maxRapid||5e3;for(let pt of H){let Jt=O.ops.indexOf(pt);for(let ee=0;ee<pt.track.length;ee+=4,nt++){if(W.moves.set(pt.track.subarray(ee,ee+4),nt*4),W.opOf[nt]=Jt,zt){let L=Math.hypot(pt.track[ee]-zt[0],pt.track[ee+1]-zt[1],pt.track[ee+2]-zt[2]);dt+=L/(pt.track[ee+3]>0?pt.track[ee+3]:re)*60}zt=[pt.track[ee],pt.track[ee+1],pt.track[ee+2]],W.cum[nt]=dt}}W.total=dt,W.opIndexAt=pt=>{let Jt=Math.min(ht-1,ae(W.cum,pt));return H.indexOf(O.ops[W.opOf[Jt]])},W.t=0,W.i=1,W.cursor=null,W.toolOp=-1,W.snaps=[],W.goal=null,W.cutT=0,h.showStock(W.hm,Rr[O.job.material]||Rr.mdf,o.part);{let pt=W.hm,Jt=[pt.x0,pt.y0,pt.bottom],ee=[pt.x0+(pt.nx-1)*pt.cell,pt.y0+(pt.ny-1)*pt.cell,pt.top];for(let L of H){let J=L.tool.diameter/2;for(let at=0;at<L.track.length;at+=4)L.track[at+3]!==0&&(Jt[0]=Math.min(Jt[0],L.track[at]-J),ee[0]=Math.max(ee[0],L.track[at]+J),Jt[1]=Math.min(Jt[1],L.track[at+1]-J),ee[1]=Math.max(ee[1],L.track[at+1]+J))}h.frame(Jt,ee)}h.showPaths(H),o.showPaths=o.showPaths??!1,Kt(),yt(0),W.speed=5,W.rate=Math.max(1,W.total/600/5),h.onFrame=Le,Ds(O),W.playing=!1,$n()}function Kt(){h.paths&&(h.paths.visible=!!o.showPaths),h.partGhost&&(h.partGhost.visible=!!o.showPart)}function ae(O,H){let ot=0,ht=O.length;for(;ot<ht;){let nt=ot+ht>>1;O[nt]<H?ot=nt+1:ht=nt}return ot}let Q=O=>({x:W.moves[O*4],y:W.moves[O*4+1],z:W.moves[O*4+2],r:W.moves[O*4+3]===0});function Rt(O,H=1/0){let ot=W.hm,ht=W.cum.length,nt=1/0,dt=-1,zt=(pt,Jt,ee)=>{let L=o.result.plan.ops[ee].tool.diameter/2/ot.cell+3,J=Math.floor((Math.min(pt.y,Jt.y)-ot.y0)/ot.cell-L),at=Math.ceil((Math.max(pt.y,Jt.y)-ot.y0)/ot.cell+L);nt=Math.min(nt,Math.max(0,J)),dt=Math.max(dt,Math.min(ot.ny-1,at))},re=0;for(;W.i<ht&&W.cum[W.i]<=O;){if((++re&31)===0&&performance.now()>H)return W.cutT=W.cum[W.i-1],[nt,dt,!1];!W.cursor&&(W.opOf[W.i]!==W.opOf[W.i-1]||Math.floor(W.cum[W.i]/W.total*10)>Math.floor(W.cum[W.i-1]/W.total*10))&&Sn();let pt=W.cursor||Q(W.i-1),Jt=Q(W.i),ee=W.opOf[W.i];Jt.r||(Lu(ot,o.result.plan.ops[ee].tool,pt,Jt,ee),zt(pt,Jt,ee)),W.cursor=null,W.i++}if(W.i<ht&&O>W.cum[W.i-1]){let pt=W.cursor||Q(W.i-1),Jt=Q(W.i),ee=W.opOf[W.i],L=W.cum[W.i-1],J=(O-L)/(W.cum[W.i]-L||1),at=Q(W.i-1),lt={x:at.x+(Jt.x-at.x)*J,y:at.y+(Jt.y-at.y)*J,z:at.z+(Jt.z-at.z)*J};Jt.r||(Lu(ot,o.result.plan.ops[ee].tool,pt,lt,ee),zt(pt,lt,ee)),W.cursor=lt}return W.cutT=O,[nt,dt,!0]}function yt(O){let H=W.cum.length;if(!H)return;let ot=Math.min(H-1,ae(W.cum,O)),ht=W.opOf[ot];if(ht!==W.toolOp){let pt=o.result.plan.ops[ht];h.setTool(pt.tool,pt.zTop-pt.zBottom),W.toolOp=ht}let nt=Q(Math.max(0,ot-1)),dt=Q(ot),zt=ot>0?W.cum[ot-1]:0,re=ot>0?Math.max(0,Math.min(1,(O-zt)/(W.cum[ot]-zt||1))):1;h.moveTool(nt.x+(dt.x-nt.x)*re,nt.y+(dt.y-nt.y)*re,nt.z+(dt.z-nt.z)*re)}let Ct=0,Ut=0,wt=0,Ht=[1/0,-1],Gt={drag:12,catchUp:250};function Le(O){let H=Ct?Math.min(.1,(O-Ct)/1e3):0;if(Ct=O,!W.cum||(W.playing&&(W.t=Math.min(W.total,W.t+H*W.speed*W.rate),W.goal=W.t),W.goal==null))return;let[ot,ht,nt]=Rt(W.goal,performance.now()+(W.dragging||W.playing?Gt.drag:Gt.catchUp));Ht[0]=Math.min(Ht[0],ot),Ht[1]=Math.max(Ht[1],ht),(nt||W.playing||O-wt>250)&&(h.refreshStock(Ht[0],Ht[1],W.colors),Ht[0]=1/0,Ht[1]=-1,wt=O),nt&&(W.goal=null),W.playing&&(yt(W.t),W.t>=W.total?(W.playing=!1,$n()):O-Ut>200&&(Ut=O,$n()))}let Te=["h","op","sx","sy","wx","wy","gap","deep"];function Sn(){W.snaps.some(O=>O.i===W.i)||W.snaps.push({i:W.i,data:Te.map(O=>W.hm[O].slice())})}function gn(O){if(O=Math.max(0,Math.min(W.total,O)),O<(W.cutT??0)){let H=W.snaps.filter(ot=>W.cum[ot.i-1]<=O).sort((ot,ht)=>ht.i-ot.i)[0];H?(Te.forEach((ot,ht)=>W.hm[ot].set(H.data[ht])),W.i=H.i):(W.hm.h.fill(W.hm.top),W.hm.op.fill(0),W.hm.sx.fill(0),W.hm.sy.fill(0),W.hm.wx.fill(0),W.hm.wy.fill(0),W.hm.gap.fill(1/0),W.hm.deep.fill(-1/0),W.i=1),W.cursor=null,W.cutT=W.i>1?W.cum[W.i-1]:0,h.refreshStock(0,W.hm.ny-1,W.colors)}W.goal=O,W.t=O,yt(O),$n()}let Ns=(O,H)=>H?`Step ${O.indexOf(H)+1} of ${O.length} \xB7 ${fe(H.label)} \xB7 T${ds(H.tool,o.numbering)}`:"";function $n(){let O=n.querySelector("[data-playbar]");if(!O)return;if(O._result!==o.result||O._total!==W.total||!O.querySelector("[data-scrub]")){O.innerHTML=Xt(),O._result=o.result,O._total=W.total;return}let H=o.result.plan.ops.filter(Jt=>Jt.enabled&&Jt.track),ot=W.total||1,ht=`${W.t/ot*100}%`,nt=H[Math.max(0,W.opIndexAt?.(W.t)??0)],dt=O.querySelector("[data-scrub]");dt.querySelector("b").style.width=ht,dt.querySelector("em").style.left=ht,dt.setAttribute("aria-valuenow",String(Math.round(W.t)));let zt=(Jt,ee)=>{Jt&&Jt.innerHTML!==ee&&(Jt.innerHTML=ee)};zt(O.querySelector('[data-pb="step"]'),Ns(H,nt)),zt(O.querySelector('[data-pb="clock"]'),`${Oc(W.t)} / ${Oc(ot)}`);let re=O.querySelector('[data-act="play"]'),pt=W.playing?"Pause":"Play";re.getAttribute("aria-label")!==pt&&(re.setAttribute("aria-label",pt),re.innerHTML=W.playing?qe.pause:qe.play);for(let Jt of O.querySelectorAll("[data-speed]"))Jt.classList.toggle("sel",+Jt.dataset.speed===W.speed)}function Ds(O){setTimeout(()=>{if(o.result?.plan!==O)return;let H=o.result?.collisions||[],ot=[];if(ot.push(H.length?{state:"bad",text:`${H.length} fast move${H.length>1?"s go":" goes"} into the material (${[...new Set(H.map(dt=>O.ops.find(zt=>zt.id===dt.op)?.label))].join(", ")}).`}:{state:"ok",text:"No fast moves through the material"}),o.travel){let dt=O.stock.width<=o.travel.x&&O.stock.depth<=o.travel.y;ot.push(dt?{state:"ok",text:"The stock fits inside your machine\u2019s travel"}:{state:"bad",text:`The stock is bigger than your machine\u2019s travel (${d(o.travel.x)} \xD7 ${g(o.travel.y)}).`})}let ht=Ac(O);ot.push(ht.every(dt=>dt.fluteLength)?{state:"ok",text:"Every tool is long enough for its depth"}:{state:"info",text:"Some tools have no cutting length in the Tool Library, so their depth isn\u2019t checked."}),O.ops.find(dt=>dt.kind==="cutout"&&dt.enabled)&&ot.push({state:"ok",text:`The cut-out goes ${g(O.job.throughDepth,o.units==="in"?3:1)} into the spoilboard${O.job.tabs.enabled?`, with ${O.job.tabs.count} tabs`:""}`}),O.warnings.some(dt=>dt.kind==="undercut")&&ot.push({state:"info",text:"Some features are on the other side. Cut this side, then turn the part over and make a program for that side. Pins (the Spoilboard Toolbox plugin can set them up) put it back in the same place."}),o.simChecks={ok:!ot.some(dt=>dt.state==="bad"),items:ot},X()},50)}let rs=O=>{if(!(O<1||O>4||O>o.maxStep+1)){if(O===4&&o.step!==4){W.playing=!1,o.step=4,o.maxStep=4,X(),C(!0);return}o.step=O,o.maxStep=Math.max(o.maxStep,O),O!==4&&(W.playing=!1),X()}},je=()=>{o.maxStep=Math.min(o.maxStep,Math.max(o.step,3)),o.result=null,C(!1)};n.addEventListener("click",O=>{let H=O.target.closest("[data-shape]");if(H||O.target.closest("[data-drawing]")){let dt=H?+H.dataset.shape:null;return dt===null?o.sel=new Set:O.shiftKey||O.metaKey||O.ctrlKey?o.sel.has(dt)?o.sel.delete(dt):o.sel.add(dt):o.sel=o.sel.size===1&&o.sel.has(dt)?new Set:new Set([dt]),X()}let ot=O.target.closest("[data-focus]");if(ot&&!O.target.closest("button, select")){o.focusOp=o.focusOp===ot.dataset.focus?null:ot.dataset.focus,X();return}let ht=O.target.closest("button, [data-scrub]");if(!ht||ht.disabled)return;let nt=ht.dataset;if(nt.go)return rs(+nt.go);if(nt.material)return o.job.material=nt.material,Object.assign(o.job.tabs,hi(nt.material)),je();if(nt.tabsize){let dt=ke(),zt=et();return o.job.tabs[nt.tabsize]=Math.max(zt.min,Math.min(zt.max,Math.round((dt[nt.tabsize]+ +nt.by*zt.step)/zt.grid)*zt.grid)),je()}if(nt.zero)return o.job.zero.xy=nt.zero,je();if(nt.z)return o.job.zero.z=nt.z,je();if(nt.finish)return o.job.finish=nt.finish,je();if(nt.tabs)return o.job.tabs.count=Math.max(1,Math.min(12,o.job.tabs.count+ +nt.tabs)),je();if(nt.toggle==="fit"){let dt=o.plan?.stock;return o.job.stock.fit=!o.job.stock.fit,!o.job.stock.fit&&dt&&Object.assign(o.job.stock,{width:dt.width,depth:dt.depth,thickness:dt.thickness}),je()}if(nt.scale==="reset")return E(1);if(nt.scale==="inch")return E(ps.INCH);if(nt.act==="unselect")return o.sel=new Set,X();if(nt.act==="sel-reset"){for(let dt of o.sel)delete o.job.shapes[dt];return je()}if(nt.toggle==="tabs")return o.job.tabs.enabled=!o.job.tabs.enabled,je();if(nt.toggle==="savefm")return o.saveToFm=!o.saveToFm,X(),l({saveToFileManager:o.saveToFm}).then(dt=>dt||as("Couldn\u2019t remember Save to File Manager for next time."));if(nt.toggle==="chamfer"){let dt=o.job.chamfer||{};return o.job.chamfer=dt.size>0?{...dt,last:dt.size,size:0}:{edges:"all",...dt,size:dt.last||Ni.size},je()}if(nt.chamfer){let dt=o.job.chamfer;return dt.size=Math.max(Ni.min,Math.min(Ni.max,Math.round((dt.size+ +nt.chamfer*Ni.step)/Ni.step)*Ni.step)),dt.last=dt.size,je()}if(nt.chamferEdges)return o.job.chamfer.edges=nt.chamferEdges,je();if(nt.op)return o.job.disabled[nt.op]=!o.job.disabled[nt.op],je();if(nt.speed)return W.speed=+nt.speed,$n();if(nt.act==="play")return W.t>=W.total&&gn(0),W.playing=!W.playing,Ct=0,$n();if(nt.act==="paths"){o.showPaths=!o.showPaths,Kt(),ht.classList.toggle("on",o.showPaths);return}if(nt.act==="ghost"){o.showPart=!o.showPart,Kt(),ht.classList.toggle("on",o.showPart);return}if(nt.act==="close")return cs();if(nt.recentOpen)return Z(nt.recentOpen);if(nt.forget)return Bu(nt.forget,o.recent).then(dt=>{o.recent=dt,X()});if(nt.act==="load")return qn(ht)}),n.addEventListener("pointerdown",O=>{if(!O.target.closest("[data-scrub]")||!W.cum)return;let ot=W.playing;W.playing=!1,W.dragging=!0;let ht=re=>{let pt=n.querySelector("[data-scrub]").getBoundingClientRect();pt.width>0&&gn((re-pt.left)/pt.width*W.total)};ht(O.clientX);let nt=null,dt=re=>{nt===null&&requestAnimationFrame(()=>{let pt=nt;nt=null,ht(pt)}),nt=re.clientX},zt=()=>{W.dragging=!1,window.removeEventListener("pointermove",dt),window.removeEventListener("pointerup",zt),W.playing=ot&&W.t<W.total,Ct=0,$n()};window.addEventListener("pointermove",dt),window.addEventListener("pointerup",zt)}),n.addEventListener("change",O=>{let H=O.target;if(H.matches("input[data-unit]")){if(H.dataset.done===H.value)return;H.dataset.done=H.defaultValue=H.value}if(H.matches("[data-file]"))return T(H.files[0]);if(H.matches("[data-recent]"))return H.value&&Z(H.value);if(H.dataset.tool)return o.job.toolOverride[H.dataset.tool]=+H.value||H.value,je();if(H.dataset.size){let ht=+H.dataset.size,nt=v(H);if(!(nt&&o.a?.size[ht]>0))return X();let dt=nt/o.a.size[ht];return Math.abs(dt-1)<1e-9?X():E(o.scale*dt)}if(H.matches("[data-thick]")){let ht=v(H);return ht&&(o.job.stock.thickness=ht),je()}let ot=H.dataset.cut??H.dataset.through??H.dataset.depth;if(ot!==void 0){let ht=ot==="sel"?[...o.sel].map(nt=>o.job.shapes[nt]||={}):[o.job.groups[ot]||={}];if(ot==="sel"){let nt=Ir(o.groups);[...o.sel].forEach((dt,zt)=>{let re=is(o.a,{...o.job,shapes:{}},dt,nt);ht[zt].cut===void 0&&Object.assign(ht[zt],{cut:re.cut,depth:re.depth})})}else{let nt=o.groups.find(zt=>zt.key===ot),dt=is(o.a,{...o.job,groups:{},shapes:{}},nt.idx[0],null);ht[0].cut===void 0&&Object.assign(ht[0],{cut:dt.cut,depth:dt.depth})}for(let nt of ht)if(H.dataset.cut!==void 0)nt.cut=H.value,nt.depth=H.value==="pocket"||H.value==="online"?nt.depth??o.job.depths[H.value]:H.value==="off"?nt.depth:null;else if(H.dataset.through!==void 0)nt.depth=H.checked?null:Math.max(.1,Math.min(o.job.depths[nt.cut]||o.job.depths.pocket,(o.job.stock.thickness||6)-.5));else{let dt=v(H);dt&&(nt.depth=dt)}return je()}if(H.dataset.stock){let ht=v(H);return ht&&(o.job.stock[H.dataset.stock]=ht),je()}}),Im(n,{imperial:p});let os=O=>{O?.isConnected&&O.matches("input[data-unit]")&&O.value!==O.defaultValue&&O.dispatchEvent(new Event("change",{bubbles:!0}))};n.addEventListener("focusout",O=>os(O.target)),n.addEventListener("keydown",O=>{O.key==="Enter"&&os(O.target)}),n.addEventListener("dragover",O=>{let H=O.target.closest("[data-drop]");H&&(O.preventDefault(),H.classList.add("over"))}),n.addEventListener("dragleave",O=>{let H=O.target.closest("[data-drop]");H&&H.classList.remove("over")}),n.addEventListener("drop",O=>{O.target.closest("[data-drop]")&&(O.preventDefault(),T(O.dataTransfer.files[0]))});function as(O){o.toast=O,X(),setTimeout(()=>{o.toast===O&&(o.toast="",X())},2600)}async function qn(O){O.disabled=!0;let H=!!o.saveToFm,ot=H?ls(xt()).catch(ht=>ht):null;try{let ht=await i.post("/api/gcode-files/load-temp",{filename:xt(),content:o.result.gcode});if(!ht.ok)throw new Error(`ncSender said ${ht.status}`);if(H)try{let nt=await ot;if(nt instanceof Error)throw nt;let dt=await i.post("/api/gcode-files/file/save",{path:nt,content:o.result.gcode});if(!dt.ok)throw new Error(`save failed (${dt.status})`)}catch(nt){alert(`The program was loaded, but saving it to File Manager failed: ${nt.message}`)}cs()}catch(ht){O.disabled=!1,as(`Couldn\u2019t load the program: ${ht.message}`)}}async function ls(O){let H=O.replace(/\.nc$/,""),ot=new Set,ht=nt=>{for(let dt of nt||[])dt.type==="folder"?ht(dt.children):ot.add(dt.path)};ht((await i.get("/api/gcode-files"))?.tree);for(let nt=1;nt<1e3;nt++){let dt=`ncCut2D/${nt<2?O:`${H} (${nt}).nc`}`;if(!ot.has(dt))return dt}throw new Error("too many saved copies")}function cs(){W.playing=!1,window.postMessage({type:"close-plugin-dialog"},"*")}X(),window.__nccut2d={S:o,PLAY:W,viewer:h,seek:O=>gn(O)}}var Ni,PM,fe,Oc,tn,qe,Dm=pe(()=>{ea();Cc();gm();_m();Sm();Tm();Lm();Ni={size:1,min:.5,max:6,step:.5},PM=["Drawing","Stock & Zero","Operations","Preview & Load"],fe=n=>String(n??"").replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t]),Oc=n=>{let t=Math.max(0,Math.round(n));return`${Math.floor(t/60)}:${String(t%60).padStart(2,"0")}`},tn=(n,t=18,e="")=>`<svg width="${t}" height="${t}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" ${e}>${n}</svg>`,qe={close:tn('<path d="M6 6l12 12M18 6L6 18"/>'),next:tn('<path d="M9 6l6 6-6 6"/>',16,'stroke-width="2.4"'),part:tn('<path d="M12 2l9 5v10l-9 5-9-5V7z"/><path d="M12 22V12M21 7l-9 5-9-5"/>',20),upload:tn('<path d="M12 16V4M7 9l5-5 5 5M4 20h16"/>',28),info:tn('<circle cx="12" cy="12" r="9"/><path d="M12 8h.01M11 12h1v5h1"/>'),warn:tn('<path d="M12 3l10 18H2z"/><path d="M12 10v4M12 17h.01"/>'),check:tn('<path d="M5 12l5 5 9-10"/>',12,'stroke-width="3.2"'),cross:tn('<path d="M6 6l12 12M18 6L6 18"/>',12,'stroke-width="3.2"'),play:'<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M7 4l13 8-13 8z"/></svg>',pause:'<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><rect x="6" y="5" width="4" height="14" rx="1"/><rect x="14" y="5" width="4" height="14" rx="1"/></svg>',load:tn('<path d="M12 4v11M7 10l5 5 5-5M5 20h14"/>',16,'stroke-width="2.4"'),face:tn('<path d="M3 9h18M3 15h18"/>'),pocket:tn('<rect x="4" y="6" width="16" height="12" rx="2"/>'),corners:tn('<path d="M4 10V6a2 2 0 012-2h4M20 14v4a2 2 0 01-2 2h-4"/>'),hole:tn('<circle cx="8" cy="12" r="3"/><circle cx="16" cy="12" r="3"/>'),drill:tn('<path d="M12 3v14M8 13l4 8 4-8"/>'),step:tn('<path d="M3 18h6v-6h6V6h6"/>'),cutout:tn('<rect x="3" y="5" width="18" height="14" rx="2" stroke-dasharray="3 2.5"/>'),rough3d:tn('<path d="M3 19h4v-4h3v-4h4v4h3v4h4"/>'),finish3d:tn('<path d="M3 18c3 0 4-9 9-9s6 9 9 9"/>'),thread:tn('<path d="M8 4h8M8 8l8-2M8 12l8-2M8 16l8-2M8 20h8M8 4v16M16 4v16"/>'),chamfer:tn('<path d="M4 20V9l5-5h11v16z"/><path d="M9 4v5H4" stroke-dasharray="2 2"/>'),rest3d:tn('<path d="M3 19h4v-4h3v-4h4v4h3v4h4"/><circle cx="12" cy="17" r="1.5"/>')}});Cc();function Nu(){let n=null,t={async init(){return!0},async load({shapes:e}){return n=Ec(e),{size:n.size,count:n.shapes.length}},async plan({tools:e,job:i,limits:s,paths:a,gcodeOptions:l,timing:o}){if(!n)throw new Error("No drawing open.");let h=Kp(n,e,i,s),f=Su(h);a&&Xp(h);let d=a?em(h,o):0,g=a?tm(h,l):"",p=a?am(h,Li.cellFor(h.stock,300*300)).collisions.map(x=>({op:x.op,at:x.at})):[];for(let x of h.ops){if(!x.moves)continue;let v=new Float32Array(x.moves.length*4);x.moves.forEach((b,y)=>{v[y*4]=b.x,v[y*4+1]=b.y,v[y*4+2]=b.z,v[y*4+3]=b.r?0:b.f}),x.track=v,delete x.moves}return{plan:h,gcode:g,seconds:d,collisions:p,part:f}}};return async function(i){let s=t[i.type];if(!s)throw new Error(`unknown request ${i.type}`);return s(i)}}var Om="0.1.4-mwzxgtay";if(typeof document>"u"){let n=Nu();self.onmessage=async({data:t})=>{try{let e=await n(t),i=e?.part?[e.part.positions.buffer,e.part.indices.buffer]:[];self.postMessage({id:t.id,ok:!0,result:e},i)}catch(e){self.postMessage({id:t.id,ok:!1,error:e.message||String(e)})}}}else{let n=window.NcCut2D=window.NcCut2D||{};n.build!==Om&&n.engine&&(n.engine.then(i=>i.worker?.terminate(),()=>{}),n.engine=null),n.build=Om,n.mount=async(i,s)=>{let{mountApp:a}=await Promise.resolve().then(()=>(Dm(),Nm));try{a(i,s,await t(s))}catch(l){i.textContent=`ncCut2D could not start: ${l.message||l}`}};let t=i=>n.engine||=e(i);async function e(i){let s=null;try{s=new Worker(URL.createObjectURL(new Blob([n.source||""],{type:"text/javascript"})))}catch{s=null}if(s){let l=0,o=new Map;s.onmessage=({data:d})=>{let g=o.get(d.id);g&&(o.delete(d.id),d.ok?g.resolve(d.result):g.reject(new Error(d.error)))};let h=(d,g={},p=[])=>new Promise((x,v)=>{let b=++l;o.set(b,{resolve:x,reject:v}),s.postMessage({...g,id:b,type:d},p)});if(await Promise.race([h("init").then(()=>!0),new Promise(d=>setTimeout(()=>d(!1),5e3))]))return h.worker=s,h;s.terminate()}let a=Nu();return await a({type:"init"}),(l,o={})=>a({...o,type:l})}}})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/

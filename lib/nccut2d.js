(()=>{var Pm=Object.create;var Dc=Object.defineProperty;var Im=Object.getOwnPropertyDescriptor;var Rm=Object.getOwnPropertyNames;var Lm=Object.getPrototypeOf,Nm=Object.prototype.hasOwnProperty;var de=(n,t,e)=>()=>{if(e)throw e[0];try{return n&&(t=n(n=0)),t}catch(i){throw e=[i],i}};var zu=(n,t)=>()=>{try{return t||n((t={exports:{}}).exports,t),t.exports}catch(e){throw t=0,e}},Vu=(n,t)=>{for(var e in t)Dc(n,e,{get:t[e],enumerable:!0})},Dm=(n,t,e,i)=>{if(t&&typeof t=="object"||typeof t=="function")for(let s of Rm(t))!Nm.call(n,s)&&s!==e&&Dc(n,s,{get:()=>t[s],enumerable:!(i=Im(t,s))||i.enumerable});return n};var Hu=(n,t,e)=>(e=n!=null?Pm(Lm(n)):{},Dm(t||!n||!n.__esModule?Dc(e,"default",{value:n,enumerable:!0}):e,n));function ia(n,t,e=.01){if(!(n>e))return 1;let i=2*Math.acos(Math.max(-1,Math.min(1,1-e/n)));return Math.max(2,Math.min(2e3,Math.ceil(Math.abs(t)/i)))}function Ls(n,t,e,i,s,a=!0){let c=s-i;a&&c<=0&&(c+=Math.PI*2),!a&&c>=0&&(c-=Math.PI*2);let o=ia(e,c);return Array.from({length:o+1},(h,f)=>{let d=i+c*f/o;return[n+e*Math.cos(d),t+e*Math.sin(d)]})}function ra(n,t,e,i,s,a=0,c=Math.PI*2){let o=Math.hypot(e,i),h=Math.atan2(i,e),f=o*s,d=c-a;d<=0&&(d+=Math.PI*2);let g=ia(o,d),m=Math.cos(h),x=Math.sin(h);return Array.from({length:g+1},(v,b)=>{let y=a+d*b/g,_=o*Math.cos(y),T=f*Math.sin(y);return[n+_*m-T*x,t+_*x+T*m]})}function Fi(n,t,e,i,s=[n],a=.01,c=0){let o=Gu(t,n,i),h=Gu(e,n,i);if(c>16||Math.max(o,h)<=a)return s.push(i),s;let f=(y,_)=>[(y[0]+_[0])/2,(y[1]+_[1])/2],d=f(n,t),g=f(t,e),m=f(e,i),x=f(d,g),v=f(g,m),b=f(x,v);return Fi(n,d,x,b,s,a,c+1),Fi(b,v,m,i,s,a,c+1),s}function Gu(n,t,e){let i=e[0]-t[0],s=e[1]-t[1],a=Math.hypot(i,s);return a<1e-12?bi(n,t):Math.abs((n[0]-t[0])*s-(n[1]-t[1])*i)/a}function Xu(n,t,e,i,s,a,c){if(!t||!e||n[0]===c[0]&&n[1]===c[1])return[n,c];t=Math.abs(t),e=Math.abs(e);let o=i*Math.PI/180,h=Math.cos(o),f=Math.sin(o),d=(n[0]-c[0])/2,g=(n[1]-c[1])/2,m=h*d+f*g,x=-f*d+h*g,v=m*m/(t*t)+x*x/(e*e);v>1&&(t*=Math.sqrt(v),e*=Math.sqrt(v));let b=t*t*e*e-t*t*x*x-e*e*m*m,y=Math.sqrt(Math.max(0,b/(t*t*x*x+e*e*m*m)));!!s==!!a&&(y=-y);let _=y*t*x/e,T=-y*e*m/t,A=h*_-f*T+(n[0]+c[0])/2,S=f*_+h*T+(n[1]+c[1])/2,R=(U,B,G,H)=>Math.atan2(U*H-B*G,U*G+B*H),E=R(1,0,(m-_)/t,(x-T)/e),P=R((m-_)/t,(x-T)/e,(-m-_)/t,(-x-T)/e);!a&&P>0&&(P-=Math.PI*2),a&&P<0&&(P+=Math.PI*2);let w=ia(Math.max(t,e),P),N=[];for(let U=0;U<=w;U++){let B=E+P*U/w,G=t*Math.cos(B),H=e*Math.sin(B);N.push([h*G-f*H+A,f*G+h*H+S])}return N[0]=n,N[w]=c,N}function Fc(n){let t=1/0,e=1/0,i=-1/0,s=-1/0;for(let a of n)for(let[c,o]of a.pts)c<t&&(t=c),o<e&&(e=o),c>i&&(i=c),o>s&&(s=o);return Number.isFinite(t)?{x0:t,y0:e,x1:i,y1:s,w:i-t,h:s-e}:{x0:0,y0:0,x1:0,y1:0,w:0,h:0}}function as(n,t,e=1e-6){let i=[];for(let s of n)(!i.length||bi(i[i.length-1],s)>e)&&i.push(s);return t&&i.length>2&&bi(i[0],i[i.length-1])>e&&i.push(i[0].slice()),i}function $u(n,t=.05){let e=[],i=[];for(let o of n){if(o.closed||o.pts.length<2){e.push(o);continue}if(bi(o.pts[0],o.pts[o.pts.length-1])<=t&&o.pts.length>2){e.push({...o,closed:!0,pts:as(o.pts.slice(0,-1).concat([o.pts[0]]),!0)});continue}i.push({...o,pts:o.pts.slice()})}let s=0,a=new Map;for(let o of i){let h=o.color+"|"+(o.layer||"");a.has(h)||a.set(h,[]),a.get(h).push(o)}let c=[];for(let o of a.values()){let h=new Array(o.length).fill(!1);for(let f=0;f<o.length;f++){if(h[f])continue;h[f]=!0;let d=o[f],g=!0;for(;g;){g=!1;let m=d.pts[0],x=d.pts[d.pts.length-1];for(let v=0;v<o.length;v++){if(h[v])continue;let b=o[v].pts,y=b[0],_=b[b.length-1];if(bi(x,y)<=t)d.pts.push(...b.slice(1));else if(bi(x,_)<=t)d.pts.push(...b.slice(0,-1).reverse());else if(bi(m,_)<=t)d.pts.unshift(...b.slice(0,-1));else if(bi(m,y)<=t)d.pts.unshift(...b.slice(1).reverse());else continue;h[v]=!0,s++,g=!0;break}}d.pts.length>2&&bi(d.pts[0],d.pts[d.pts.length-1])<=t&&(d.pts[d.pts.length-1]=d.pts[0].slice(),d.closed=!0),c.push(d)}}return{shapes:e.concat(c),joined:s}}var bi,sa,Oc,Wu,Ui,Lr,Yu,Nr=de(()=>{bi=(n,t)=>Math.hypot(t[0]-n[0],t[1]-n[1]);sa=(n,t,e)=>{let i=Ls(n,t,e,0,Math.PI*2,!0);return i[i.length-1]=i[0].slice(),i};Oc=(n,t,e,i)=>Fi(n,[n[0]+2/3*(t[0]-n[0]),n[1]+2/3*(t[1]-n[1])],[e[0]+2/3*(t[0]-e[0]),e[1]+2/3*(t[1]-e[1])],e,i);Wu=[1,0,0,1,0,0],Ui=(n,t)=>[n[0]*t[0]+n[2]*t[1],n[1]*t[0]+n[3]*t[1],n[0]*t[2]+n[2]*t[3],n[1]*t[2]+n[3]*t[3],n[0]*t[4]+n[2]*t[5]+n[4],n[1]*t[4]+n[3]*t[5]+n[5]],Lr=(n,t)=>[n[0]*t[0]+n[2]*t[1]+n[4],n[1]*t[0]+n[3]*t[1]+n[5]];Yu=(n,t)=>n.map(e=>({...e,pts:e.pts.map(i=>Lr(t,i))}))});function Uc(n){let t=[];for(let x of String(n||"").matchAll(Om))t.push(x[1]||+x[2]);let e=[],i=0,s="",a=[0,0],c=[0,0],o=null,h=null,f="",d=()=>{let x=t[i++];if(typeof x!="number")throw new Error("bad path data");return x},g=()=>{let x=t[i];if(typeof x=="number"&&(x===0||x===1))return i++,x;if(typeof x=="number"){let v=String(x);return t.splice(i,1,+v[0],+v.slice(1)),i++,+v[0]}throw new Error("bad arc flag")},m=x=>{o&&o.length>1&&e.push({pts:o,closed:!1}),o=[x],c=x};for(;i<t.length;){if(typeof t[i]=="string")s=t[i++];else if(!s)throw new Error("path must start with M");let x=s===s.toLowerCase(),v=s.toUpperCase(),b=(y,_)=>x?[a[0]+y,a[1]+_]:[y,_];switch(v){case"M":{let y=b(d(),d());m(y),a=y,s=x?"l":"L",h=null;break}case"L":{let y=b(d(),d());o.push(y),a=y,h=null;break}case"H":{let y=d(),_=[x?a[0]+y:y,a[1]];o.push(_),a=_,h=null;break}case"V":{let y=d(),_=[a[0],x?a[1]+y:y];o.push(_),a=_,h=null;break}case"C":{let y=b(d(),d()),_=b(d(),d()),T=b(d(),d());Fi(a,y,_,T,o),h=_,a=T;break}case"S":{let y=h&&"CS".includes(f)?[2*a[0]-h[0],2*a[1]-h[1]]:a,_=b(d(),d()),T=b(d(),d());Fi(a,y,_,T,o),h=_,a=T;break}case"Q":{let y=b(d(),d()),_=b(d(),d());Oc(a,y,_,o),h=y,a=_;break}case"T":{let y=h&&"QT".includes(f)?[2*a[0]-h[0],2*a[1]-h[1]]:a,_=b(d(),d());Oc(a,y,_,o),h=y,a=_;break}case"A":{let y=d(),_=d(),T=d(),A=g(),S=g(),R=b(d(),d());o.push(...Xu(a,y,_,T,A,S,R).slice(1)),a=R,h=null;break}case"Z":{o&&o.length>1&&(o.push(c.slice()),e.push({pts:o,closed:!0})),o=[c],a=c,h=null;break}default:throw new Error(`unknown path command ${s}`)}f=v,v==="Z"&&(s="")}return o&&o.length>1&&e.push({pts:o,closed:!1}),e}var Om,qu=de(()=>{Nr();Om=/([MmLlHhVvCcSsQqTtAaZz])|(-?(?:\d+\.?\d*|\.\d+)(?:[eE][-+]?\d+)?)/g});function Zu(n,t){return n<=9?t:n>=10&&n<=59?parseFloat(t):n>=60&&n<=99?parseInt(t):n>=100&&n<=109?t:n>=110&&n<=149?parseFloat(t):n>=160&&n<=179?parseInt(t):n>=210&&n<=239?parseFloat(t):n>=270&&n<=289?parseInt(t):n>=290&&n<=299?Fm(t):n>=300&&n<=369?t:n>=370&&n<=389?parseInt(t):n>=390&&n<=399?t:n>=400&&n<=409?parseInt(t):n>=410&&n<=419?t:n>=420&&n<=429?parseInt(t):n>=430&&n<=439?t:n>=440&&n<=459?parseInt(t):n>=460&&n<=469?parseFloat(t):n>=470&&n<=481||n===999||n>=1e3&&n<=1009?t:n>=1010&&n<=1059?parseFloat(t):n>=1060&&n<=1071?parseInt(t):(console.log("WARNING: Group code does not have a defined type: %j",{code:n,value:t}),t)}function Fm(n){if(n==="0")return!1;if(n==="1")return!0;throw TypeError("String '"+n+"' cannot be cast to Boolean type")}var Dr,Ju=de(()=>{Dr=class{constructor(t){this._pointer=0,this._eof=!1,this._data=t}next(){if(!this.hasNext())throw this._eof?new Error("Cannot call 'next' after EOF group has been read"):new Error("Unexpected end of input: EOF group not read before end of file. Ended on code "+this._data[this._pointer]);let t={code:parseInt(this._data[this._pointer])};return this._pointer++,t.value=Zu(t.code,this._data[this._pointer].trim()),this._pointer++,t.code===0&&t.value==="EOF"&&(this._eof=!0),this.lastReadGroup=t,t}peek(){if(!this.hasNext())throw this._eof?new Error("Cannot call 'next' after EOF group has been read"):new Error("Unexpected end of input: EOF group not read before end of file. Ended on code "+this._data[this._pointer]);let t={code:parseInt(this._data[this._pointer])};return t.value=Zu(t.code,this._data[this._pointer+1].trim()),t}rewind(t=1){this._pointer=this._pointer-t*2}hasNext(){return!(this._eof||this._pointer>this._data.length-2)}isEOF(){return this._eof}}});var oa,Bc=de(()=>{oa=[0,16711680,16776960,65280,65535,255,16711935,16777215,8421504,12632256,16711680,16744319,13369344,13395558,10027008,10046540,8323072,8339263,4980736,4990502,16727808,16752511,13382400,13401958,10036736,10051404,8331008,8343359,4985600,4992806,16744192,16760703,13395456,13408614,10046464,10056268,8339200,8347455,4990464,4995366,16760576,16768895,13408512,13415014,10056192,10061132,8347392,8351551,4995328,4997670,16776960,16777087,13421568,13421670,10000384,10000460,8355584,8355647,5000192,5000230,12582656,14679935,10079232,11717734,7510016,8755276,6258432,7307071,3755008,4344870,8388352,12582783,6736896,10079334,5019648,7510092,4161280,6258495,2509824,3755046,4194048,10485631,3394560,8375398,2529280,6264908,2064128,5209919,1264640,3099686,65280,8388479,52224,6736998,38912,5019724,32512,4161343,19456,2509862,65343,8388511,52275,6737023,38950,5019743,32543,4161359,19475,2509871,65407,8388543,52326,6737049,38988,5019762,32575,4161375,19494,2509881,65471,8388575,52377,6737074,39026,5019781,32607,4161391,19513,2509890,65535,8388607,52428,6737100,39064,5019800,32639,4161407,19532,2509900,49151,8380415,39372,6730444,29336,5014936,24447,4157311,14668,2507340,32767,8372223,26316,6724044,19608,5010072,16255,4153215,9804,2505036,16383,8364031,13260,6717388,9880,5005208,8063,4149119,4940,2502476,255,8355839,204,6710988,152,5000344,127,4145023,76,2500172,4129023,10452991,3342540,8349388,2490520,6245528,2031743,5193599,1245260,3089996,8323327,12550143,6684876,10053324,4980888,7490712,4128895,6242175,2490444,3745356,12517631,14647295,10027212,11691724,7471256,8735896,6226047,7290751,3735628,4335180,16711935,16744447,13369548,13395660,9961624,9981080,8323199,8339327,4980812,4990540,16711871,16744415,13369497,13395634,9961586,9981061,8323167,8339311,4980793,4990530,16711807,16744383,13369446,13395609,9961548,9981042,8323135,8339295,4980774,4990521,16711743,16744351,13369395,13395583,9961510,9981023,8323103,8339279,4980755,4990511,3355443,5987163,8684676,11382189,14079702,16777215]});function Um(n){return oa[n]}function oe(n){let t={};n.rewind();let e=n.next(),i=e.code;if(t.x=e.value,i+=10,e=n.next(),e.code!=i)throw new Error("Expected code for point value to be "+i+" but got "+e.code+".");return t.y=e.value,i+=10,e=n.next(),e.code!=i?(n.rewind(),t):(t.z=e.value,t)}function Ae(n,t,e){switch(t.code){case 0:n.type=t.value;break;case 5:n.handle=t.value;break;case 6:n.lineType=t.value;break;case 8:n.layer=t.value;break;case 48:n.lineTypeScale=t.value;break;case 60:n.visible=t.value===0;break;case 62:n.colorIndex=t.value,n.color=Um(Math.abs(t.value));break;case 67:n.inPaperSpace=t.value!==0;break;case 100:break;case 101:for(;t.code!=0;)t=e.next();e.rewind();break;case 330:n.ownerHandle=t.value;break;case 347:n.materialObjectHandle=t.value;break;case 370:n.lineweight=t.value;break;case 420:n.color=t.value;break;case 1e3:n.extendedData=n.extendedData||{},n.extendedData.customStrings=n.extendedData.customStrings||[],n.extendedData.customStrings.push(t.value);break;case 1001:n.extendedData=n.extendedData||{},n.extendedData.applicationName=t.value;break;default:return!1}return!0}var gn=de(()=>{Bc()});function Bm(n,t){var e=[],i=!1,s=!1,a=4;for(let o=0;o<=a;o++){for(var c={};!n.isEOF()&&!(t.code===0||s);){switch(t.code){case 10:case 11:case 12:case 13:if(i){s=!0;continue}c.x=t.value,i=!0;break;case 20:case 21:case 22:case 23:c.y=t.value;break;case 30:case 31:case 32:case 33:c.z=t.value;break;default:return e}t=n.next()}e.push(c),i=!1,s=!1}return n.rewind(),e}var Or,ju=de(()=>{gn();Or=class{constructor(){this.ForEntityName="3DFACE"}parseEntity(t,e){let i={type:e.value,vertices:[]};for(e=t.next();!t.isEOF()&&e.code!==0;){switch(e.code){case 70:i.shape=(e.value&1)===1,i.hasContinuousLinetypePattern=(e.value&128)===128;break;case 10:i.vertices=Bm(t,e),e=t.lastReadGroup;break;default:Ae(i,e,t);break}e=t.next()}return i}}});var Fr,Ku=de(()=>{gn();Fr=class{constructor(){this.ForEntityName="ARC"}parseEntity(t,e){let i={type:e.value};for(e=t.next();!t.isEOF()&&e.code!==0;){switch(e.code){case 10:i.center=oe(t);break;case 40:i.radius=e.value;break;case 50:i.startAngle=Math.PI/180*e.value;break;case 51:i.endAngle=Math.PI/180*e.value,i.angleLength=i.endAngle-i.startAngle;break;case 210:i.extrusionDirectionX=e.value;break;case 220:i.extrusionDirectionY=e.value;break;case 230:i.extrusionDirectionZ=e.value;break;default:Ae(i,e,t);break}e=t.next()}return i}}});var Ur,Qu=de(()=>{gn();Ur=class{constructor(){this.ForEntityName="ATTDEF"}parseEntity(t,e){var i={type:e.value,scale:1,textStyle:"STANDARD"};for(e=t.next();!t.isEOF()&&e.code!==0;){switch(e.code){case 1:i.text=e.value;break;case 2:i.tag=e.value;break;case 3:i.prompt=e.value;break;case 7:i.textStyle=e.value;break;case 10:i.startPoint=oe(t);break;case 11:i.endPoint=oe(t);break;case 39:i.thickness=e.value;break;case 40:i.textHeight=e.value;break;case 41:i.scale=e.value;break;case 50:i.rotation=e.value;break;case 51:i.obliqueAngle=e.value;break;case 70:i.invisible=!!(e.value&1),i.constant=!!(e.value&2),i.verificationRequired=!!(e.value&4),i.preset=!!(e.value&8);break;case 71:i.backwards=!!(e.value&2),i.mirrored=!!(e.value&4);break;case 72:i.horizontalJustification=e.value;break;case 73:i.fieldLength=e.value;break;case 74:i.verticalJustification=e.value;break;case 100:break;case 210:i.extrusionDirectionX=e.value;break;case 220:i.extrusionDirectionY=e.value;break;case 230:i.extrusionDirectionZ=e.value;break;default:Ae(i,e,t);break}e=t.next()}return i}}});var Br,tf=de(()=>{gn();Br=class{constructor(){this.ForEntityName="CIRCLE"}parseEntity(t,e){let i={type:e.value};for(e=t.next();!t.isEOF()&&e.code!==0;){switch(e.code){case 10:i.center=oe(t);break;case 40:i.radius=e.value;break;case 50:i.startAngle=Math.PI/180*e.value;break;case 51:let s=Math.PI/180*e.value;s<i.startAngle?i.angleLength=s+2*Math.PI-i.startAngle:i.angleLength=s-i.startAngle,i.endAngle=s;break;default:Ae(i,e,t);break}e=t.next()}return i}}});var kr,ef=de(()=>{gn();kr=class{constructor(){this.ForEntityName="DIMENSION"}parseEntity(t,e){let i={type:e.value};for(e=t.next();!t.isEOF()&&e.code!==0;){switch(e.code){case 2:i.block=e.value;break;case 10:i.anchorPoint=oe(t);break;case 11:i.middleOfText=oe(t);break;case 12:i.insertionPoint=oe(t);break;case 13:i.linearOrAngularPoint1=oe(t);break;case 14:i.linearOrAngularPoint2=oe(t);break;case 15:i.diameterOrRadiusPoint=oe(t);break;case 16:i.arcPoint=oe(t);break;case 70:i.dimensionType=e.value;break;case 71:i.attachmentPoint=e.value;break;case 42:i.actualMeasurement=e.value;break;case 1:i.text=e.value;break;case 50:i.angle=e.value;break;default:Ae(i,e,t);break}e=t.next()}return i}}});var zr,nf=de(()=>{gn();zr=class{constructor(){this.ForEntityName="ELLIPSE"}parseEntity(t,e){let i={type:e.value};for(e=t.next();!t.isEOF()&&e.code!==0;){switch(e.code){case 10:i.center=oe(t);break;case 11:i.majorAxisEndPoint=oe(t);break;case 40:i.axisRatio=e.value;break;case 41:i.startAngle=e.value;break;case 42:i.endAngle=e.value;break;case 2:i.name=e.value;break;default:Ae(i,e,t);break}e=t.next()}return i}}});var Vr,sf=de(()=>{gn();Vr=class{constructor(){this.ForEntityName="INSERT"}parseEntity(t,e){let i={type:e.value};for(e=t.next();!t.isEOF()&&e.code!==0;){switch(e.code){case 2:i.name=e.value;break;case 41:i.xScale=e.value;break;case 42:i.yScale=e.value;break;case 43:i.zScale=e.value;break;case 10:i.position=oe(t);break;case 50:i.rotation=e.value;break;case 70:i.columnCount=e.value;break;case 71:i.rowCount=e.value;break;case 44:i.columnSpacing=e.value;break;case 45:i.rowSpacing=e.value;break;case 210:i.extrusionDirection=oe(t);break;default:Ae(i,e,t);break}e=t.next()}return i}}});var Hr,rf=de(()=>{gn();Hr=class{constructor(){this.ForEntityName="LINE"}parseEntity(t,e){let i={type:e.value,vertices:[]};for(e=t.next();!t.isEOF()&&e.code!==0;){switch(e.code){case 10:i.vertices.unshift(oe(t));break;case 11:i.vertices.push(oe(t));break;case 210:i.extrusionDirection=oe(t);break;case 100:break;default:Ae(i,e,t);break}e=t.next()}return i}}});function km(n,t){if(!n||n<=0)throw Error("n must be greater than 0 verticies");let e=[],i=!1,s=!1,a=t.lastReadGroup;for(let c=0;c<n;c++){let o={};for(;!t.isEOF()&&!(a.code===0||s);){switch(a.code){case 10:if(i){s=!0;continue}o.x=a.value,i=!0;break;case 20:o.y=a.value;break;case 30:o.z=a.value;break;case 40:o.startWidth=a.value;break;case 41:o.endWidth=a.value;break;case 42:a.value!=0&&(o.bulge=a.value);break;default:return t.rewind(),i&&e.push(o),t.rewind(),e}a=t.next()}e.push(o),i=!1,s=!1}return t.rewind(),e}var Gr,of=de(()=>{gn();Gr=class{constructor(){this.ForEntityName="LWPOLYLINE"}parseEntity(t,e){let i={type:e.value,vertices:[]},s=0;for(e=t.next();!t.isEOF()&&e.code!==0;){switch(e.code){case 38:i.elevation=e.value;break;case 39:i.depth=e.value;break;case 70:i.shape=(e.value&1)===1,i.hasContinuousLinetypePattern=(e.value&128)===128;break;case 90:s=e.value;break;case 10:i.vertices=km(s,t);break;case 43:e.value!==0&&(i.width=e.value);break;case 210:i.extrusionDirectionX=e.value;break;case 220:i.extrusionDirectionY=e.value;break;case 230:i.extrusionDirectionZ=e.value;break;default:Ae(i,e,t);break}e=t.next()}return i}}});var Xr,af=de(()=>{gn();Xr=class{constructor(){this.ForEntityName="MTEXT"}parseEntity(t,e){let i={type:e.value};for(e=t.next();!t.isEOF()&&e.code!==0;){switch(e.code){case 3:i.text?i.text+=e.value:i.text=e.value;break;case 1:i.text?i.text+=e.value:i.text=e.value;break;case 10:i.position=oe(t);break;case 11:i.directionVector=oe(t);break;case 40:i.height=e.value;break;case 41:i.width=e.value;break;case 50:i.rotation=e.value;break;case 71:i.attachmentPoint=e.value;break;case 72:i.drawingDirection=e.value;break;default:Ae(i,e,t);break}e=t.next()}return i}}});var Wr,lf=de(()=>{gn();Wr=class{constructor(){this.ForEntityName="POINT"}parseEntity(t,e){let s={type:e.value};for(e=t.next();!t.isEOF()&&e.code!==0;){switch(e.code){case 10:s.position=oe(t);break;case 39:s.thickness=e.value;break;case 210:s.extrusionDirection=oe(t);break;case 100:break;default:Ae(s,e,t);break}e=t.next()}return s}}});var Yr,cf=de(()=>{gn();Yr=class{constructor(){this.ForEntityName="VERTEX"}parseEntity(t,e){var i={type:e.value};for(e=t.next();!t.isEOF()&&e.code!==0;){switch(e.code){case 10:i.x=e.value;break;case 20:i.y=e.value;break;case 30:i.z=e.value;break;case 40:break;case 41:break;case 42:e.value!=0&&(i.bulge=e.value);break;case 70:i.curveFittingVertex=(e.value&1)!==0,i.curveFitTangent=(e.value&2)!==0,i.splineVertex=(e.value&8)!==0,i.splineControlPoint=(e.value&16)!==0,i.threeDPolylineVertex=(e.value&32)!==0,i.threeDPolylineMesh=(e.value&64)!==0,i.polyfaceMeshVertex=(e.value&128)!==0;break;case 50:break;case 71:i.faceA=e.value;break;case 72:i.faceB=e.value;break;case 73:i.faceC=e.value;break;case 74:i.faceD=e.value;break;default:Ae(i,e,t);break}e=t.next()}return i}}});function zm(n,t){let e=new Yr,i=[];for(;!n.isEOF();)if(t.code===0){if(t.value==="VERTEX")i.push(e.parseEntity(n,t)),t=n.lastReadGroup;else if(t.value==="SEQEND"){Vm(n,t);break}}return i}function Vm(n,t){let e={type:t.value};for(t=n.next();!n.isEOF()&&t.code!=0;)Ae(e,t,n),t=n.next();return e}var $r,hf=de(()=>{gn();cf();$r=class{constructor(){this.ForEntityName="POLYLINE"}parseEntity(t,e){var i={type:e.value,vertices:[]};for(e=t.next();!t.isEOF()&&e.code!==0;){switch(e.code){case 10:break;case 20:break;case 30:break;case 39:i.thickness=e.value;break;case 40:break;case 41:break;case 70:i.shape=(e.value&1)!==0,i.includesCurveFitVertices=(e.value&2)!==0,i.includesSplineFitVertices=(e.value&4)!==0,i.is3dPolyline=(e.value&8)!==0,i.is3dPolygonMesh=(e.value&16)!==0,i.is3dPolygonMeshClosed=(e.value&32)!==0,i.isPolyfaceMesh=(e.value&64)!==0,i.hasContinuousLinetypePattern=(e.value&128)!==0;break;case 71:break;case 72:break;case 73:break;case 74:break;case 75:break;case 210:i.extrusionDirection=oe(t);break;default:Ae(i,e,t);break}e=t.next()}return i.vertices=zm(t,e),i}}});var qr,uf=de(()=>{gn();qr=class{constructor(){this.ForEntityName="SOLID"}parseEntity(t,e){let i={type:e.value,points:[]};for(e=t.next();!t.isEOF()&&e.code!==0;){switch(e.code){case 10:i.points[0]=oe(t);break;case 11:i.points[1]=oe(t);break;case 12:i.points[2]=oe(t);break;case 13:i.points[3]=oe(t);break;case 210:i.extrusionDirection=oe(t);break;default:Ae(i,e,t);break}e=t.next()}return i}}});var Zr,ff=de(()=>{gn();Zr=class{constructor(){this.ForEntityName="SPLINE"}parseEntity(t,e){let i={type:e.value};for(e=t.next();!t.isEOF()&&e.code!==0;){switch(e.code){case 10:i.controlPoints||(i.controlPoints=[]),i.controlPoints.push(oe(t));break;case 11:i.fitPoints||(i.fitPoints=[]),i.fitPoints.push(oe(t));break;case 12:i.startTangent=oe(t);break;case 13:i.endTangent=oe(t);break;case 40:i.knotValues||(i.knotValues=[]),i.knotValues.push(e.value);break;case 70:(e.value&1)!=0&&(i.closed=!0),(e.value&2)!=0&&(i.periodic=!0),(e.value&4)!=0&&(i.rational=!0),(e.value&8)!=0&&(i.planar=!0),(e.value&16)!=0&&(i.planar=!0,i.linear=!0);break;case 71:i.degreeOfSplineCurve=e.value;break;case 72:i.numberOfKnots=e.value;break;case 73:i.numberOfControlPoints=e.value;break;case 74:i.numberOfFitPoints=e.value;break;case 210:i.normalVector=oe(t);break;default:Ae(i,e,t);break}e=t.next()}return i}}});var Jr,df=de(()=>{gn();Jr=class{constructor(){this.ForEntityName="TEXT"}parseEntity(t,e){let i={type:e.value};for(e=t.next();!t.isEOF()&&e.code!==0;){switch(e.code){case 10:i.startPoint=oe(t);break;case 11:i.endPoint=oe(t);break;case 40:i.textHeight=e.value;break;case 41:i.xScale=e.value;break;case 50:i.rotation=e.value;break;case 1:i.text=e.value;break;case 72:i.halign=e.value;break;case 73:i.valign=e.value;break;default:Ae(i,e,t);break}e=t.next()}return i}}});var mf=zu((pf,aa)=>{(function(n,t){"use strict";typeof define=="function"&&define.amd?define(t):typeof aa=="object"&&aa.exports?aa.exports=t():n.log=t()})(pf,function(){"use strict";var n=function(){},t="undefined",e=typeof window!==t&&typeof window.navigator!==t&&/Trident\/|MSIE /.test(window.navigator.userAgent),i=["trace","debug","info","warn","error"],s={},a=null;function c(v,b){var y=v[b];if(typeof y.bind=="function")return y.bind(v);try{return Function.prototype.bind.call(y,v)}catch{return function(){return Function.prototype.apply.apply(y,[v,arguments])}}}function o(){console.log&&(console.log.apply?console.log.apply(console,arguments):Function.prototype.apply.apply(console.log,[console,arguments])),console.trace&&console.trace()}function h(v){return v==="debug"&&(v="log"),typeof console===t?!1:v==="trace"&&e?o:console[v]!==void 0?c(console,v):console.log!==void 0?c(console,"log"):n}function f(){for(var v=this.getLevel(),b=0;b<i.length;b++){var y=i[b];this[y]=b<v?n:this.methodFactory(y,v,this.name)}if(this.log=this.debug,typeof console===t&&v<this.levels.SILENT)return"No console available for logging"}function d(v){return function(){typeof console!==t&&(f.call(this),this[v].apply(this,arguments))}}function g(v,b,y){return h(v)||d.apply(this,arguments)}function m(v,b){var y=this,_,T,A,S="loglevel";typeof v=="string"?S+=":"+v:typeof v=="symbol"&&(S=void 0);function R(U){var B=(i[U]||"silent").toUpperCase();if(!(typeof window===t||!S)){try{window.localStorage[S]=B;return}catch{}try{window.document.cookie=encodeURIComponent(S)+"="+B+";"}catch{}}}function E(){var U;if(!(typeof window===t||!S)){try{U=window.localStorage[S]}catch{}if(typeof U===t)try{var B=window.document.cookie,G=encodeURIComponent(S),H=B.indexOf(G+"=");H!==-1&&(U=/^([^;]+)/.exec(B.slice(H+G.length+1))[1])}catch{}return y.levels[U]===void 0&&(U=void 0),U}}function P(){if(!(typeof window===t||!S)){try{window.localStorage.removeItem(S)}catch{}try{window.document.cookie=encodeURIComponent(S)+"=; expires=Thu, 01 Jan 1970 00:00:00 UTC"}catch{}}}function w(U){var B=U;if(typeof B=="string"&&y.levels[B.toUpperCase()]!==void 0&&(B=y.levels[B.toUpperCase()]),typeof B=="number"&&B>=0&&B<=y.levels.SILENT)return B;throw new TypeError("log.setLevel() called with invalid level: "+U)}y.name=v,y.levels={TRACE:0,DEBUG:1,INFO:2,WARN:3,ERROR:4,SILENT:5},y.methodFactory=b||g,y.getLevel=function(){return A??T??_},y.setLevel=function(U,B){return A=w(U),B!==!1&&R(A),f.call(y)},y.setDefaultLevel=function(U){T=w(U),E()||y.setLevel(U,!1)},y.resetLevel=function(){A=null,P(),f.call(y)},y.enableAll=function(U){y.setLevel(y.levels.TRACE,U)},y.disableAll=function(U){y.setLevel(y.levels.SILENT,U)},y.rebuild=function(){if(a!==y&&(_=w(a.getLevel())),f.call(y),a===y)for(var U in s)s[U].rebuild()},_=w(a?a.getLevel():"WARN");var N=E();N!=null&&(A=w(N)),f.call(y)}a=new m,a.getLogger=function(b){if(typeof b!="symbol"&&typeof b!="string"||b==="")throw new TypeError("You must supply a name when creating a logger.");var y=s[b];return y||(y=s[b]=new m(b,a.methodFactory)),y};var x=typeof window!==t?window.log:void 0;return a.noConflict=function(){return typeof window!==t&&window.log===a&&(window.log=x),a},a.getLoggers=function(){return s},a.default=a,a})});function Hm(n){n.registerEntityHandler(Or),n.registerEntityHandler(Fr),n.registerEntityHandler(Ur),n.registerEntityHandler(Br),n.registerEntityHandler(kr),n.registerEntityHandler(zr),n.registerEntityHandler(Vr),n.registerEntityHandler(Hr),n.registerEntityHandler(Gr),n.registerEntityHandler(Xr),n.registerEntityHandler(Wr),n.registerEntityHandler($r),n.registerEntityHandler(qr),n.registerEntityHandler(Zr),n.registerEntityHandler(Jr)}function ci(n,t,e){return n.code===t&&n.value===e}function ls(n){we.default.debug("unhandled group "+gf(n))}function gf(n){return n.code+":"+n.value}function Gm(n){return oa[n]}var we,Ns,kc=de(()=>{Ju();Bc();ju();Ku();Qu();tf();ef();nf();sf();rf();of();af();lf();hf();uf();ff();df();we=Hu(mf());we.default.setLevel("error");Ns=class{constructor(){this._entityHandlers={},Hm(this)}parse(t){return typeof t=="string"?this._parse(t):(console.error("Cannot read dxf source of type `"+typeof t),null)}registerEntityHandler(t){let e=new t;this._entityHandlers[e.ForEntityName]=e}parseSync(t){return this.parse(t)}parseStream(t){let e="",i=this;return new Promise((s,a)=>{t.on("data",c=>{e+=c}),t.on("end",()=>{try{s(i._parse(e))}catch(c){a(c)}}),t.on("error",c=>{a(c)})})}_parse(t){let e={},i=0,s=t.split(/\r\n|\r|\n/g),a=new Dr(s);if(!a.hasNext())throw Error("Empty file");let c=this,o;function h(){for(o=a.next();!a.isEOF();)if(o.code===0&&o.value==="SECTION"){if(o=a.next(),o.code!==2){console.error("Unexpected code %s after 0:SECTION",gf(o)),o=a.next();continue}o.value==="HEADER"?(we.default.debug("> HEADER"),e.header=f(),we.default.debug("<")):o.value==="BLOCKS"?(we.default.debug("> BLOCKS"),e.blocks=d(),we.default.debug("<")):o.value==="ENTITIES"?(we.default.debug("> ENTITIES"),e.entities=A(!1),we.default.debug("<")):o.value==="TABLES"?(we.default.debug("> TABLES"),e.tables=m(),we.default.debug("<")):o.value==="EOF"?we.default.debug("EOF"):we.default.warn("Skipping section '%s'",o.value)}else o=a.next()}function f(){let E=null,P=null,w={};for(o=a.next();;){if(ci(o,0,"ENDSEC")){E&&(w[E]=P);break}else o.code===9?(E&&(w[E]=P),E=o.value):o.code===10?P={x:o.value}:o.code===20?P.y=o.value:o.code===30?P.z=o.value:P=o.value;o=a.next()}return o=a.next(),w}function d(){let E={};for(o=a.next();o.value!=="EOF"&&!ci(o,0,"ENDSEC");)if(ci(o,0,"BLOCK")){we.default.debug("block {");let P=g();we.default.debug("}"),R(P),P.name?E[P.name]=P:we.default.error('block with handle "'+P.handle+'" is missing a name.')}else ls(o),o=a.next();return E}function g(){let E={};for(o=a.next();o.value!=="EOF";){switch(o.code){case 1:E.xrefPath=o.value,o=a.next();break;case 2:E.name=o.value,o=a.next();break;case 3:E.name2=o.value,o=a.next();break;case 5:E.handle=o.value,o=a.next();break;case 8:E.layer=o.value,o=a.next();break;case 10:E.position=S(o),o=a.next();break;case 67:E.paperSpace=!!(o.value&&o.value==1),o=a.next();break;case 70:o.value!=0&&(E.type=o.value),o=a.next();break;case 100:o=a.next();break;case 330:E.ownerHandle=o.value,o=a.next();break;case 0:if(o.value=="ENDBLK")break;E.entities=A(!0);break;default:ls(o),o=a.next()}if(ci(o,0,"ENDBLK")){o=a.next();break}}return E}function m(){let E={};for(o=a.next();o.value!=="EOF"&&!ci(o,0,"ENDSEC");)ci(o,0,"TABLE")?(o=a.next(),T[o.value]?(we.default.debug(o.value+" Table {"),E[T[o.value].tableName]=v(o),we.default.debug("}")):we.default.debug("Unhandled Table "+o.value)):o=a.next();return o=a.next(),E}let x="ENDTAB";function v(E){let P=T[E.value],w={},N=0;for(o=a.next();!ci(o,0,x);)switch(o.code){case 5:w.handle=o.value,o=a.next();break;case 330:w.ownerHandle=o.value,o=a.next();break;case 100:o.value==="AcDbSymbolTable"||ls(o),o=a.next();break;case 70:N=o.value,o=a.next();break;case 0:o.value===P.dxfSymbolName?w[P.tableRecordsProperty]=P.parseTableRecords():(ls(o),o=a.next());break;default:ls(o),o=a.next()}let U=w[P.tableRecordsProperty];if(U){let B=(()=>{if(U.constructor===Array)return U.length;if(typeof U=="object")return Object.keys(U).length})();N!==B&&we.default.warn("Parsed "+B+" "+P.dxfSymbolName+"'s but expected "+N)}return o=a.next(),w}function b(){let E=[],P={};for(we.default.debug("ViewPort {"),o=a.next();!ci(o,0,x);)switch(o.code){case 2:P.name=o.value,o=a.next();break;case 10:P.lowerLeftCorner=S(o),o=a.next();break;case 11:P.upperRightCorner=S(o),o=a.next();break;case 12:P.center=S(o),o=a.next();break;case 13:P.snapBasePoint=S(o),o=a.next();break;case 14:P.snapSpacing=S(o),o=a.next();break;case 15:P.gridSpacing=S(o),o=a.next();break;case 16:P.viewDirectionFromTarget=S(o),o=a.next();break;case 17:P.viewTarget=S(o),o=a.next();break;case 42:P.lensLength=o.value,o=a.next();break;case 43:P.frontClippingPlane=o.value,o=a.next();break;case 44:P.backClippingPlane=o.value,o=a.next();break;case 45:P.viewHeight=o.value,o=a.next();break;case 50:P.snapRotationAngle=o.value,o=a.next();break;case 51:P.viewTwistAngle=o.value,o=a.next();break;case 79:P.orthographicType=o.value,o=a.next();break;case 110:P.ucsOrigin=S(o),o=a.next();break;case 111:P.ucsXAxis=S(o),o=a.next();break;case 112:P.ucsYAxis=S(o),o=a.next();break;case 110:P.ucsOrigin=S(o),o=a.next();break;case 281:P.renderMode=o.value,o=a.next();break;case 281:P.defaultLightingType=o.value,o=a.next();break;case 292:P.defaultLightingOn=o.value,o=a.next();break;case 330:P.ownerHandle=o.value,o=a.next();break;case 63:case 421:case 431:P.ambientColor=o.value,o=a.next();break;case 0:o.value==="VPORT"&&(we.default.debug("}"),E.push(P),we.default.debug("ViewPort {"),P={},o=a.next());break;default:ls(o),o=a.next();break}return we.default.debug("}"),E.push(P),E}function y(){let E={},P={},w=0,N;for(we.default.debug("LType {"),o=a.next();!ci(o,0,"ENDTAB");)switch(o.code){case 2:P.name=o.value,N=o.value,o=a.next();break;case 3:P.description=o.value,o=a.next();break;case 73:w=o.value,w>0&&(P.pattern=[]),o=a.next();break;case 40:P.patternLength=o.value,o=a.next();break;case 49:P.pattern.push(o.value),o=a.next();break;case 0:we.default.debug("}"),w>0&&w!==P.pattern.length&&we.default.warn("lengths do not match on LTYPE pattern"),E[N]=P,P={},we.default.debug("LType {"),o=a.next();break;default:o=a.next()}return we.default.debug("}"),E[N]=P,E}function _(){let E={},P={},w;for(we.default.debug("Layer {"),o=a.next();!ci(o,0,"ENDTAB");)switch(o.code){case 2:P.name=o.value,w=o.value,o=a.next();break;case 62:P.visible=o.value>=0,P.colorIndex=Math.abs(o.value),P.color=Gm(P.colorIndex),o=a.next();break;case 70:P.frozen=(o.value&1)!=0||(o.value&2)!=0,o=a.next();break;case 0:o.value==="LAYER"&&(we.default.debug("}"),E[w]=P,we.default.debug("Layer {"),P={},w=void 0,o=a.next());break;default:ls(o),o=a.next();break}return we.default.debug("}"),E[w]=P,E}let T={VPORT:{tableRecordsProperty:"viewPorts",tableName:"viewPort",dxfSymbolName:"VPORT",parseTableRecords:b},LTYPE:{tableRecordsProperty:"lineTypes",tableName:"lineType",dxfSymbolName:"LTYPE",parseTableRecords:y},LAYER:{tableRecordsProperty:"layers",tableName:"layer",dxfSymbolName:"LAYER",parseTableRecords:_}};function A(E){let P=[],w=E?"ENDBLK":"ENDSEC";for(E||(o=a.next());;)if(o.code===0){if(o.value===w)break;let N=c._entityHandlers[o.value];if(N!=null){we.default.debug(o.value+" {");let U=N.parseEntity(a,o);o=a.lastReadGroup,we.default.debug("}"),R(U),P.push(U)}else{we.default.warn("Unhandled entity "+o.value),o=a.next();continue}}else o=a.next();return w=="ENDSEC"&&(o=a.next()),P}function S(E){let P={},w=E.code;if(P.x=E.value,w+=10,E=a.next(),E.code!=w)throw new Error("Expected code for point value to be "+w+" but got "+E.code+".");return P.y=E.value,w+=10,E=a.next(),E.code!=w?(a.rewind(),P):(P.z=E.value,P)}function R(E){if(!E)throw new TypeError("entity cannot be undefined or null");E.handle||(E.handle=i++)}return h(),e}}});var xf,yf=de(()=>{kc();kc();xf=Ns});function zc(n){let t;try{t=new xf().parseSync(n)}catch(b){throw new Error(`This DXF could not be read (${b.message||b}). Save it again as ASCII DXF.`)}if(!t)throw new Error("This DXF could not be read. Save it again as ASCII DXF.");let e=Number(t.header?.$INSUNITS??0),i=Xm[e]??1,s=t.tables?.layer?.layers||{},a=[],c={},o=b=>{c[b]=(c[b]||0)+1},h=(b,y)=>{let _=b.colorIndex;if(b.color!==void 0&&_!==0&&_!==256)return _f(b.color);if(_===0&&y)return y;let T=s[b.layer];return T&&T.color!==void 0?_f(T.color):y||"#000000"},f=(b,y,_,T,A)=>{if(b.length<2)return;let S=as(b.map(R=>Lr(T,R)),y);S.length<2||a.push({pts:S,closed:y&&S.length>2,color:A,layer:_.layer||"0"})},d=b=>(b.extrusionDirectionZ??b.extrusionDirection?.z??1)<0?[-1,0,0,1,0,0]:Wu;function g(b,y,_){let T=Math.hypot(y.x-b.x,y.y-b.y);if(T<1e-12)return[];let A=Math.abs(_),S=T*(1+A*A)/(4*A),R=(b.x+y.x)/2,E=(b.y+y.y)/2,P=Math.sign(_)*(S-A*T/2),w=-(y.y-b.y)/T,N=(y.x-b.x)/T,U=R+w*P,B=E+N*P,G=Math.atan2(b.y-B,b.x-U),H=Math.atan2(y.y-B,y.x-U);return Ls(U,B,S,G,H,_>0).slice(1)}function m(b,y,_){let T=(b.vertices||[]).filter(E=>Number.isFinite(E.x)&&Number.isFinite(E.y));if(T.length<2)return;let A=!!b.shape,S=[[T[0].x,T[0].y]],R=A?T.length:T.length-1;for(let E=0;E<R;E++){let P=T[E],w=T[(E+1)%T.length];P.bulge?S.push(...g(P,w,P.bulge)):S.push([w.x,w.y])}f(S,A,b,y,_)}function x(b,y,_){let T=(b.controlPoints||[]).map(E=>[E.x,E.y]),A=b.knotValues||[],S=b.degreeOfSplineCurve||3;if(T.length>S&&A.length===T.length+S+1){let E=A[S],P=A[T.length],w=0;for(let B=1;B<T.length;B++)w+=Math.hypot(T[B][0]-T[B-1][0],T[B][1]-T[B-1][1]);let N=Math.max(T.length*8,Math.min(4e3,Math.ceil(w/.2))),U=[];for(let B=0;B<=N;B++)U.push(Ym(S,T,A,E+(P-E)*B/N));return f(U,!!b.closed,b,y,_)}let R=(b.fitPoints||[]).map(E=>[E.x,E.y]);R.length>1&&f(R,!!b.closed,b,y,_)}function v(b,y,_,T){if(!(T>8))for(let A of b||[]){if(A.inPaperSpace||A.visible===!1)continue;let S=s[A.layer];if(S&&(S.visible===!1||S.frozen))continue;let R=h(A,_),E=Ui(y,d(A));switch(A.type){case"LINE":A.vertices?.length>=2&&f(A.vertices.map(P=>[P.x,P.y]),!1,A,y,R);break;case"LWPOLYLINE":case"POLYLINE":if(A.is3dPolygonMesh||A.isPolyfaceMesh){o("mesh");break}m(A,E,R);break;case"CIRCLE":f(sa(A.center.x,A.center.y,A.radius),!0,A,E,R);break;case"ARC":f(Ls(A.center.x,A.center.y,A.radius,A.startAngle,A.endAngle,!0),!1,A,E,R);break;case"ELLIPSE":{let P=A.startAngle===void 0||Math.abs((A.endAngle??0)-(A.startAngle??0)-Math.PI*2)<1e-6||A.startAngle===0&&Math.abs(A.endAngle-Math.PI*2)<1e-6,w=ra(A.center.x,A.center.y,A.majorAxisEndPoint.x,A.majorAxisEndPoint.y,A.axisRatio,A.startAngle??0,A.endAngle??Math.PI*2);f(w,P,A,E,R);break}case"SPLINE":x(A,y,R);break;case"SOLID":{let P=(A.points||[]).filter(Boolean);if(P.length>=3){let w=P.length===4?[P[0],P[1],P[3],P[2]]:P;f(w.map(N=>[N.x,N.y]).concat([[w[0].x,w[0].y]]),!0,A,E,R)}break}case"INSERT":{let P=t.blocks?.[A.name];if(!P){o("missing block");break}let w=(A.rotation||0)*Math.PI/180,N=Math.cos(w),U=Math.sin(w),B=A.xScale??1,G=A.yScale??1,H=P.position||{x:0,y:0},z=Math.max(1,A.columnCount||1),$=Math.max(1,A.rowCount||1);for(let J=0;J<$;J++)for(let O=0;O<z;O++){let Z=(A.position?.x||0)+O*(A.columnSpacing||0)*N-J*(A.rowSpacing||0)*U,W=(A.position?.y||0)+O*(A.columnSpacing||0)*U+J*(A.rowSpacing||0)*N,it=Ui(Ui(y,[N*B,U*B,-U*G,N*G,Z,W]),[1,0,0,1,-H.x,-H.y]);v(P.entities,it,R,T+1)}break}case"TEXT":case"MTEXT":case"ATTDEF":o("text");break;case"DIMENSION":o("dimension");break;case"POINT":break;default:o(A.type.toLowerCase())}}}return v(t.entities,[i,0,0,i,0,0],null,0),{shapes:a,units:Wm[e]??"mm",skipped:c}}function Ym(n,t,e,i){let s=n;for(;s<t.length-1&&i>=e[s+1];)s++;let a=[];for(let c=0;c<=n;c++)a.push(t[c+s-n].slice());for(let c=1;c<=n;c++)for(let o=n;o>=c;o--){let h=o+s-n,f=e[h+n-c+1]-e[h],d=f===0?0:(i-e[h])/f;a[o]=[(1-d)*a[o-1][0]+d*a[o][0],(1-d)*a[o-1][1]+d*a[o][1]]}return a[n]}var Xm,Wm,_f,vf=de(()=>{yf();Nr();Xm={0:1,1:25.4,2:304.8,4:1,5:10,6:1e3,8:254e-7,9:.0254,10:914.4,13:.001,14:100},Wm={0:"mm (no units set)",1:"in",2:"ft",4:"mm",5:"cm",6:"m",8:"\xB5in",9:"mil",10:"yd",13:"\xB5m",14:"dm"},_f=n=>"#"+(n>>>0&16777215).toString(16).padStart(6,"0")});async function Vc(n,t){let e=n instanceof Uint8Array?n:new Uint8Array(n),i=-1;for(let a=0;a<Math.min(e.length-4,1024)&&i<0;a++)Jm(e.subarray(a))&&(i=a);if(i<0)throw new Error($m);e=e.slice();let s=await t.getDocument({data:e,isEvalSupported:!1,disableFontFace:!0,useSystemFonts:!1,verbosity:0}).promise;try{let a=await s.getPage(1),c=await a.getOperatorList({annotationMode:t.AnnotationMode.DISABLE}),o=await s.getOptionalContentConfig().catch(()=>null);return{...jm(a,c,t.OPS,o),units:"pt",pages:s.numPages}}finally{await s.destroy()}}function jm(n,{fnArray:t,argsArray:e},i,s){let a=[];for(let z in i)a[i[z]]=z;let c=n.getViewport({scale:1}),o=Ui([jr,0,0,-jr,0,c.height*jr],c.transform),h=c.width*jr,f=c.height*jr,d=[],g={},m=z=>{g[z]=(g[z]||0)+1},x={ctm:o,stroke:"#000000",fill:"#000000"},v=[],b=[],y=[],_=null,T=[0,0],A=[0,0],S=!1,R=()=>{for(let z=b.length-1;z>=0;z--)if(b[z]?.layer!==void 0)return b[z].layer;return""},E=()=>b.some(z=>z?.hidden),P=(z,$)=>Lr(x.ctm,[z,$]),w=(z,$)=>{_={pts:[P(z,$)],closed:!1},y.push(_),T=A=[z,$]},N=()=>{_||w(T[0],T[1])},U=()=>{_&&(_.closed=!0,_=null,T=A)};function B(z,$){let J=0;for(let O of z)switch(a[O]){case"moveTo":w($[J],$[J+1]),J+=2;break;case"lineTo":N(),T=[$[J],$[J+1]],_.pts.push(P(...T)),J+=2;break;case"curveTo":case"curveTo2":case"curveTo3":{N();let Z,W,it;a[O]==="curveTo"?(Z=[$[J],$[J+1]],W=[$[J+2],$[J+3]],it=[$[J+4],$[J+5]],J+=6):a[O]==="curveTo2"?(Z=T,W=[$[J],$[J+1]],it=[$[J+2],$[J+3]],J+=4):(Z=[$[J],$[J+1]],it=[$[J+2],$[J+3]],W=it,J+=4),Fi(_.pts[_.pts.length-1],P(...Z),P(...W),P(...it),_.pts),T=it;break}case"closePath":U();break;case"rectangle":{let[Z,W,it,ot]=$.slice(J,J+4);J+=4,w(Z,W),_.pts.push(P(Z+it,W),P(Z+it,W+ot),P(Z,W+ot)),U();break}}}let G=z=>{if(!z.filled||z.stroked||z.color!=="#ffffff"||z.pts.length!==5)return!1;let $=z.pts.map(Mt=>Mt[0]),J=z.pts.map(Mt=>Mt[1]),O=Math.min(...$),Z=Math.max(...$),W=Math.min(...J),it=Math.max(...J),ot=.1;return O>ot||W>ot||Z<h-ot||it<f-ot?!1:z.pts.every(Mt=>(Math.abs(Mt[0]-O)<ot||Math.abs(Mt[0]-Z)<ot)&&(Math.abs(Mt[1]-W)<ot||Math.abs(Mt[1]-it)<ot))};function H([z,$,J]){J&&U();let O=E();for(let Z of y){let W=Z.closed||$,it=as(Z.pts,W);if(it.length<2)continue;let ot={pts:it,closed:W&&it.length>2,color:z?x.stroke:x.fill,layer:R(),filled:$};if(O){m("hidden");continue}if(G({...ot,stroked:z})){m("background");continue}d.push(ot)}y=[],_=null}for(let z=0;z<t.length;z++){let $=a[t[z]],J=e[z];if(Mf[$]){H(Mf[$]);continue}if(qm.includes($)){S=!0;continue}if(Zm.includes($)){m("image");continue}switch($){case"constructPath":B(J[0],J[1]);break;case"endPath":y=[],_=null;break;case"save":v.push({...x});break;case"restore":v.length&&(x=v.pop());break;case"transform":x.ctm=Ui(x.ctm,J);break;case"paintFormXObjectBegin":v.push({...x}),J[0]&&(x.ctm=Ui(x.ctm,J[0]));break;case"paintFormXObjectEnd":v.length&&(x=v.pop());break;case"setStrokeRGBColor":x.stroke=bf(J);break;case"setFillRGBColor":x.fill=bf(J);break;case"setStrokeColorN":case"setFillColorN":break;case"beginText":S=!1;break;case"endText":S&&m("text"),S=!1;break;case"shadingFill":m("gradient");break;case"beginMarkedContentProps":{let O=J[0]==="OC"?J[1]:null;if(!O){b.push(null);break}let Z=O.type==="OCG"?s?.getGroup(O.id):null;b.push({layer:Z?.name??"",hidden:s?!s.isVisible(O):!1});break}case"beginMarkedContent":b.push(null);break;case"endMarkedContent":b.pop();break}}return{shapes:d,skipped:g}}var jr,bf,$m,Mf,qm,Zm,Jm,Sf=de(()=>{Nr();jr=25.4/72,bf=n=>"#"+(n[0]<<16|n[1]<<8|n[2]).toString(16).padStart(6,"0"),$m='This .ai file was saved without PDF content. In Illustrator, save it again with "Create PDF Compatible File" on, or export a PDF or SVG.',Mf={stroke:[!0,!1,!1],closeStroke:[!0,!1,!0],fill:[!1,!0,!1],eoFill:[!1,!0,!1],fillStroke:[!0,!0,!1],eoFillStroke:[!0,!0,!1],closeFillStroke:[!0,!0,!0],closeEOFillStroke:[!0,!0,!0]},qm=["showText","showSpacedText","nextLineShowText","nextLineSetSpacingShowText"],Zm=["paintImageXObject","paintInlineImageXObject","paintInlineImageXObjectGroup","paintImageXObjectRepeat","paintImageMaskXObject","paintImageMaskXObjectGroup","paintImageMaskXObjectRepeat","paintSolidColorImageMask"],Jm=n=>n.length>=4&&n[0]===37&&n[1]===80&&n[2]===68&&n[3]===70});var wf=de(()=>{});var Ef=zu((pS,la)=>{(function(){"use strict";var n={};n.version="6.4.2.2",n.use_lines=!0,n.use_xyz=!1;var t=!1;typeof la<"u"&&la.exports?(la.exports=n,t=!0):(typeof define=="function"&&define.amd&&define(n),typeof document<"u"?window.ClipperLib=n:self.ClipperLib=n);var e;if(t){var i="chrome";e="Netscape"}else{var i=navigator.userAgent.toString().toLowerCase();e=navigator.appName}var s={};i.indexOf("chrome")!=-1&&i.indexOf("chromium")==-1?s.chrome=1:s.chrome=0,i.indexOf("chromium")!=-1?s.chromium=1:s.chromium=0,i.indexOf("safari")!=-1&&i.indexOf("chrome")==-1&&i.indexOf("chromium")==-1?s.safari=1:s.safari=0,i.indexOf("firefox")!=-1?s.firefox=1:s.firefox=0,i.indexOf("firefox/17")!=-1?s.firefox17=1:s.firefox17=0,i.indexOf("firefox/15")!=-1?s.firefox15=1:s.firefox15=0,i.indexOf("firefox/3")!=-1?s.firefox3=1:s.firefox3=0,i.indexOf("opera")!=-1?s.opera=1:s.opera=0,i.indexOf("msie 10")!=-1?s.msie10=1:s.msie10=0,i.indexOf("msie 9")!=-1?s.msie9=1:s.msie9=0,i.indexOf("msie 8")!=-1?s.msie8=1:s.msie8=0,i.indexOf("msie 7")!=-1?s.msie7=1:s.msie7=0,i.indexOf("msie ")!=-1?s.msie=1:s.msie=0,n.biginteger_used=null;var a,c=0xdeadbeefcafe,o=(c&16777215)==15715070;function h(r,l,u){n.biginteger_used=1,r!=null&&(typeof r=="number"&&typeof l>"u"?this.fromInt(r):typeof r=="number"?this.fromNumber(r,l,u):l==null&&typeof r!="string"?this.fromString(r,256):this.fromString(r,l))}function f(){return new h(null,void 0,void 0)}function d(r,l,u,p,M,C){for(;--C>=0;){var D=l*this[r++]+u[p]+M;M=Math.floor(D/67108864),u[p++]=D&67108863}return M}function g(r,l,u,p,M,C){for(var D=l&32767,Y=l>>15;--C>=0;){var q=this[r]&32767,nt=this[r++]>>15,_t=Y*q+nt*D;q=D*q+((_t&32767)<<15)+u[p]+(M&1073741823),M=(q>>>30)+(_t>>>15)+Y*nt+(M>>>30),u[p++]=q&1073741823}return M}function m(r,l,u,p,M,C){for(var D=l&16383,Y=l>>14;--C>=0;){var q=this[r]&16383,nt=this[r++]>>14,_t=Y*q+nt*D;q=D*q+((_t&16383)<<14)+u[p]+M,M=(q>>28)+(_t>>14)+Y*nt,u[p++]=q&268435455}return M}o&&e=="Microsoft Internet Explorer"?(h.prototype.am=g,a=30):o&&e!="Netscape"?(h.prototype.am=d,a=26):(h.prototype.am=m,a=28),h.prototype.DB=a,h.prototype.DM=(1<<a)-1,h.prototype.DV=1<<a;var x=52;h.prototype.FV=Math.pow(2,x),h.prototype.F1=x-a,h.prototype.F2=2*a-x;var v="0123456789abcdefghijklmnopqrstuvwxyz",b=new Array,y,_;for(y=48,_=0;_<=9;++_)b[y++]=_;for(y=97,_=10;_<36;++_)b[y++]=_;for(y=65,_=10;_<36;++_)b[y++]=_;function T(r){return v.charAt(r)}function A(r,l){var u=b[r.charCodeAt(l)];return u??-1}function S(r){for(var l=this.t-1;l>=0;--l)r[l]=this[l];r.t=this.t,r.s=this.s}function R(r){this.t=1,this.s=r<0?-1:0,r>0?this[0]=r:r<-1?this[0]=r+this.DV:this.t=0}function E(r){var l=f();return l.fromInt(r),l}function P(r,l){var u;if(l==16)u=4;else if(l==8)u=3;else if(l==256)u=8;else if(l==2)u=1;else if(l==32)u=5;else if(l==4)u=2;else{this.fromRadix(r,l);return}this.t=0,this.s=0;for(var p=r.length,M=!1,C=0;--p>=0;){var D=u==8?r[p]&255:A(r,p);if(D<0){r.charAt(p)=="-"&&(M=!0);continue}M=!1,C==0?this[this.t++]=D:C+u>this.DB?(this[this.t-1]|=(D&(1<<this.DB-C)-1)<<C,this[this.t++]=D>>this.DB-C):this[this.t-1]|=D<<C,C+=u,C>=this.DB&&(C-=this.DB)}u==8&&(r[0]&128)!=0&&(this.s=-1,C>0&&(this[this.t-1]|=(1<<this.DB-C)-1<<C)),this.clamp(),M&&h.ZERO.subTo(this,this)}function w(){for(var r=this.s&this.DM;this.t>0&&this[this.t-1]==r;)--this.t}function N(r){if(this.s<0)return"-"+this.negate().toString(r);var l;if(r==16)l=4;else if(r==8)l=3;else if(r==2)l=1;else if(r==32)l=5;else if(r==4)l=2;else return this.toRadix(r);var u=(1<<l)-1,p,M=!1,C="",D=this.t,Y=this.DB-D*this.DB%l;if(D-- >0)for(Y<this.DB&&(p=this[D]>>Y)>0&&(M=!0,C=T(p));D>=0;)Y<l?(p=(this[D]&(1<<Y)-1)<<l-Y,p|=this[--D]>>(Y+=this.DB-l)):(p=this[D]>>(Y-=l)&u,Y<=0&&(Y+=this.DB,--D)),p>0&&(M=!0),M&&(C+=T(p));return M?C:"0"}function U(){var r=f();return h.ZERO.subTo(this,r),r}function B(){return this.s<0?this.negate():this}function G(r){var l=this.s-r.s;if(l!=0)return l;var u=this.t;if(l=u-r.t,l!=0)return this.s<0?-l:l;for(;--u>=0;)if((l=this[u]-r[u])!=0)return l;return 0}function H(r){var l=1,u;return(u=r>>>16)!=0&&(r=u,l+=16),(u=r>>8)!=0&&(r=u,l+=8),(u=r>>4)!=0&&(r=u,l+=4),(u=r>>2)!=0&&(r=u,l+=2),(u=r>>1)!=0&&(r=u,l+=1),l}function z(){return this.t<=0?0:this.DB*(this.t-1)+H(this[this.t-1]^this.s&this.DM)}function $(r,l){var u;for(u=this.t-1;u>=0;--u)l[u+r]=this[u];for(u=r-1;u>=0;--u)l[u]=0;l.t=this.t+r,l.s=this.s}function J(r,l){for(var u=r;u<this.t;++u)l[u-r]=this[u];l.t=Math.max(this.t-r,0),l.s=this.s}function O(r,l){var u=r%this.DB,p=this.DB-u,M=(1<<p)-1,C=Math.floor(r/this.DB),D=this.s<<u&this.DM,Y;for(Y=this.t-1;Y>=0;--Y)l[Y+C+1]=this[Y]>>p|D,D=(this[Y]&M)<<u;for(Y=C-1;Y>=0;--Y)l[Y]=0;l[C]=D,l.t=this.t+C+1,l.s=this.s,l.clamp()}function Z(r,l){l.s=this.s;var u=Math.floor(r/this.DB);if(u>=this.t){l.t=0;return}var p=r%this.DB,M=this.DB-p,C=(1<<p)-1;l[0]=this[u]>>p;for(var D=u+1;D<this.t;++D)l[D-u-1]|=(this[D]&C)<<M,l[D-u]=this[D]>>p;p>0&&(l[this.t-u-1]|=(this.s&C)<<M),l.t=this.t-u,l.clamp()}function W(r,l){for(var u=0,p=0,M=Math.min(r.t,this.t);u<M;)p+=this[u]-r[u],l[u++]=p&this.DM,p>>=this.DB;if(r.t<this.t){for(p-=r.s;u<this.t;)p+=this[u],l[u++]=p&this.DM,p>>=this.DB;p+=this.s}else{for(p+=this.s;u<r.t;)p-=r[u],l[u++]=p&this.DM,p>>=this.DB;p-=r.s}l.s=p<0?-1:0,p<-1?l[u++]=this.DV+p:p>0&&(l[u++]=p),l.t=u,l.clamp()}function it(r,l){var u=this.abs(),p=r.abs(),M=u.t;for(l.t=M+p.t;--M>=0;)l[M]=0;for(M=0;M<p.t;++M)l[M+u.t]=u.am(0,p[M],l,M,0,u.t);l.s=0,l.clamp(),this.s!=r.s&&h.ZERO.subTo(l,l)}function ot(r){for(var l=this.abs(),u=r.t=2*l.t;--u>=0;)r[u]=0;for(u=0;u<l.t-1;++u){var p=l.am(u,l[u],r,2*u,0,1);(r[u+l.t]+=l.am(u+1,2*l[u],r,2*u+1,p,l.t-u-1))>=l.DV&&(r[u+l.t]-=l.DV,r[u+l.t+1]=1)}r.t>0&&(r[r.t-1]+=l.am(u,l[u],r,2*u,0,1)),r.s=0,r.clamp()}function Mt(r,l,u){var p=r.abs();if(!(p.t<=0)){var M=this.abs();if(M.t<p.t){l?.fromInt(0),u!=null&&this.copyTo(u);return}u==null&&(u=f());var C=f(),D=this.s,Y=r.s,q=this.DB-H(p[p.t-1]);q>0?(p.lShiftTo(q,C),M.lShiftTo(q,u)):(p.copyTo(C),M.copyTo(u));var nt=C.t,_t=C[nt-1];if(_t!=0){var xt=_t*(1<<this.F1)+(nt>1?C[nt-2]>>this.F2:0),St=this.FV/xt,Qt=(1<<this.F1)/xt,he=1<<this.F2,_e=u.t,ze=_e-nt,In=l??f();for(C.dlShiftTo(ze,In),u.compareTo(In)>=0&&(u[u.t++]=1,u.subTo(In,u)),h.ONE.dlShiftTo(nt,In),In.subTo(C,C);C.t<nt;)C[C.t++]=0;for(;--ze>=0;){var li=u[--_e]==_t?this.DM:Math.floor(u[_e]*St+(u[_e-1]+he)*Qt);if((u[_e]+=C.am(0,li,u,ze,0,nt))<li)for(C.dlShiftTo(ze,In),u.subTo(In,u);u[_e]<--li;)u.subTo(In,u)}l!=null&&(u.drShiftTo(nt,l),D!=Y&&h.ZERO.subTo(l,l)),u.t=nt,u.clamp(),q>0&&u.rShiftTo(q,u),D<0&&h.ZERO.subTo(u,u)}}}function wt(r){var l=f();return this.abs().divRemTo(r,null,l),this.s<0&&l.compareTo(h.ZERO)>0&&r.subTo(l,l),l}function qt(r){this.m=r}function Kt(r){return r.s<0||r.compareTo(this.m)>=0?r.mod(this.m):r}function ne(r){return r}function ut(r){r.divRemTo(this.m,null,r)}function pt(r,l,u){r.multiplyTo(l,u),this.reduce(u)}function Tt(r,l){r.squareTo(l),this.reduce(l)}qt.prototype.convert=Kt,qt.prototype.revert=ne,qt.prototype.reduce=ut,qt.prototype.mulTo=pt,qt.prototype.sqrTo=Tt;function ee(){if(this.t<1)return 0;var r=this[0];if((r&1)==0)return 0;var l=r&3;return l=l*(2-(r&15)*l)&15,l=l*(2-(r&255)*l)&255,l=l*(2-((r&65535)*l&65535))&65535,l=l*(2-r*l%this.DV)%this.DV,l>0?this.DV-l:-l}function Nt(r){this.m=r,this.mp=r.invDigit(),this.mpl=this.mp&32767,this.mph=this.mp>>15,this.um=(1<<r.DB-15)-1,this.mt2=2*r.t}function re(r){var l=f();return r.abs().dlShiftTo(this.m.t,l),l.divRemTo(this.m,null,l),r.s<0&&l.compareTo(h.ZERO)>0&&this.m.subTo(l,l),l}function Be(r){var l=f();return r.copyTo(l),this.reduce(l),l}function fe(r){for(;r.t<=this.mt2;)r[r.t++]=0;for(var l=0;l<this.m.t;++l){var u=r[l]&32767,p=u*this.mpl+((u*this.mph+(r[l]>>15)*this.mpl&this.um)<<15)&r.DM;for(u=l+this.m.t,r[u]+=this.m.am(0,p,r,l,0,this.m.t);r[u]>=r.DV;)r[u]-=r.DV,r[++u]++}r.clamp(),r.drShiftTo(this.m.t,r),r.compareTo(this.m)>=0&&r.subTo(this.m,r)}function pe(r,l){r.squareTo(l),this.reduce(l)}function be(r,l,u){r.multiplyTo(l,u),this.reduce(u)}Nt.prototype.convert=re,Nt.prototype.revert=Be,Nt.prototype.reduce=fe,Nt.prototype.mulTo=be,Nt.prototype.sqrTo=pe;function xe(){return(this.t>0?this[0]&1:this.s)==0}function Ne(r,l){if(r>4294967295||r<1)return h.ONE;var u=f(),p=f(),M=l.convert(this),C=H(r)-1;for(M.copyTo(u);--C>=0;)if(l.sqrTo(u,p),(r&1<<C)>0)l.mulTo(p,M,u);else{var D=u;u=p,p=D}return l.revert(u)}function Ke(r,l){var u;return r<256||l.isEven()?u=new qt(l):u=new Nt(l),this.exp(r,u)}h.prototype.copyTo=S,h.prototype.fromInt=R,h.prototype.fromString=P,h.prototype.clamp=w,h.prototype.dlShiftTo=$,h.prototype.drShiftTo=J,h.prototype.lShiftTo=O,h.prototype.rShiftTo=Z,h.prototype.subTo=W,h.prototype.multiplyTo=it,h.prototype.squareTo=ot,h.prototype.divRemTo=Mt,h.prototype.invDigit=ee,h.prototype.isEven=xe,h.prototype.exp=Ne,h.prototype.toString=N,h.prototype.negate=U,h.prototype.abs=B,h.prototype.compareTo=G,h.prototype.bitLength=z,h.prototype.mod=wt,h.prototype.modPowInt=Ke,h.ZERO=E(0),h.ONE=E(1);function tn(){var r=f();return this.copyTo(r),r}function De(){if(this.s<0){if(this.t==1)return this[0]-this.DV;if(this.t==0)return-1}else{if(this.t==1)return this[0];if(this.t==0)return 0}return(this[1]&(1<<32-this.DB)-1)<<this.DB|this[0]}function Ge(){return this.t==0?this.s:this[0]<<24>>24}function tt(){return this.t==0?this.s:this[0]<<16>>16}function qe(r){return Math.floor(Math.LN2*this.DB/Math.log(r))}function Te(){return this.s<0?-1:this.t<=0||this.t==1&&this[0]<=0?0:1}function V(r){if(r==null&&(r=10),this.signum()==0||r<2||r>36)return"0";var l=this.chunkSize(r),u=Math.pow(r,l),p=E(u),M=f(),C=f(),D="";for(this.divRemTo(p,M,C);M.signum()>0;)D=(u+C.intValue()).toString(r).substr(1)+D,M.divRemTo(p,M,C);return C.intValue().toString(r)+D}function I(r,l){this.fromInt(0),l==null&&(l=10);for(var u=this.chunkSize(l),p=Math.pow(l,u),M=!1,C=0,D=0,Y=0;Y<r.length;++Y){var q=A(r,Y);if(q<0){r.charAt(Y)=="-"&&this.signum()==0&&(M=!0);continue}D=l*D+q,++C>=u&&(this.dMultiply(p),this.dAddOffset(D,0),C=0,D=0)}C>0&&(this.dMultiply(Math.pow(l,C)),this.dAddOffset(D,0)),M&&h.ZERO.subTo(this,this)}function st(r,l,u){if(typeof l=="number")if(r<2)this.fromInt(1);else for(this.fromNumber(r,u),this.testBit(r-1)||this.bitwiseTo(h.ONE.shiftLeft(r-1),Vt,this),this.isEven()&&this.dAddOffset(1,0);!this.isProbablePrime(l);)this.dAddOffset(2,0),this.bitLength()>r&&this.subTo(h.ONE.shiftLeft(r-1),this);else{var p=new Array,M=r&7;p.length=(r>>3)+1,l.nextBytes(p),M>0?p[0]&=(1<<M)-1:p[0]=0,this.fromString(p,256)}}function ct(){var r=this.t,l=new Array;l[0]=this.s;var u=this.DB-r*this.DB%8,p,M=0;if(r-- >0)for(u<this.DB&&(p=this[r]>>u)!=(this.s&this.DM)>>u&&(l[M++]=p|this.s<<this.DB-u);r>=0;)u<8?(p=(this[r]&(1<<u)-1)<<8-u,p|=this[--r]>>(u+=this.DB-8)):(p=this[r]>>(u-=8)&255,u<=0&&(u+=this.DB,--r)),(p&128)!=0&&(p|=-256),M==0&&(this.s&128)!=(p&128)&&++M,(M>0||p!=this.s)&&(l[M++]=p);return l}function mt(r){return this.compareTo(r)==0}function Et(r){return this.compareTo(r)<0?this:r}function Pt(r){return this.compareTo(r)>0?this:r}function k(r,l,u){var p,M,C=Math.min(r.t,this.t);for(p=0;p<C;++p)u[p]=l(this[p],r[p]);if(r.t<this.t){for(M=r.s&this.DM,p=C;p<this.t;++p)u[p]=l(this[p],M);u.t=this.t}else{for(M=this.s&this.DM,p=C;p<r.t;++p)u[p]=l(M,r[p]);u.t=r.t}u.s=l(this.s,r.s),u.clamp()}function vt(r,l){return r&l}function Dt(r){var l=f();return this.bitwiseTo(r,vt,l),l}function Vt(r,l){return r|l}function Ot(r){var l=f();return this.bitwiseTo(r,Vt,l),l}function At(r,l){return r^l}function Yt(r){var l=f();return this.bitwiseTo(r,At,l),l}function $t(r,l){return r&~l}function le(r){var l=f();return this.bitwiseTo(r,$t,l),l}function Q(){for(var r=f(),l=0;l<this.t;++l)r[l]=this.DM&~this[l];return r.t=this.t,r.s=~this.s,r}function Ct(r){var l=f();return r<0?this.rShiftTo(-r,l):this.lShiftTo(r,l),l}function yt(r){var l=f();return r<0?this.lShiftTo(-r,l):this.rShiftTo(r,l),l}function It(r){if(r==0)return-1;var l=0;return(r&65535)==0&&(r>>=16,l+=16),(r&255)==0&&(r>>=8,l+=8),(r&15)==0&&(r>>=4,l+=4),(r&3)==0&&(r>>=2,l+=2),(r&1)==0&&++l,l}function Rt(){for(var r=0;r<this.t;++r)if(this[r]!=0)return r*this.DB+It(this[r]);return this.s<0?this.t*this.DB:-1}function bt(r){for(var l=0;r!=0;)r&=r-1,++l;return l}function Jt(){for(var r=0,l=this.s&this.DM,u=0;u<this.t;++u)r+=bt(this[u]^l);return r}function Ht(r){var l=Math.floor(r/this.DB);return l>=this.t?this.s!=0:(this[l]&1<<r%this.DB)!=0}function Re(r,l){var u=h.ONE.shiftLeft(r);return this.bitwiseTo(u,l,u),u}function Se(r){return this.changeBit(r,Vt)}function yn(r){return this.changeBit(r,$t)}function nn(r){return this.changeBit(r,At)}function Pr(r,l){for(var u=0,p=0,M=Math.min(r.t,this.t);u<M;)p+=this[u]+r[u],l[u++]=p&this.DM,p>>=this.DB;if(r.t<this.t){for(p+=r.s;u<this.t;)p+=this[u],l[u++]=p&this.DM,p>>=this.DB;p+=this.s}else{for(p+=this.s;u<r.t;)p+=r[u],l[u++]=p&this.DM,p>>=this.DB;p+=r.s}l.s=p<0?-1:0,p>0?l[u++]=p:p<-1&&(l[u++]=this.DV+p),l.t=u,l.clamp()}function Ir(r){var l=f();return this.addTo(r,l),l}function Ze(r){var l=f();return this.subTo(r,l),l}function Oi(r){var l=f();return this.multiplyTo(r,l),l}function Rr(){var r=f();return this.squareTo(r),r}function Cs(r){var l=f();return this.divRemTo(r,l,null),l}function Ps(r){var l=f();return this.divRemTo(r,null,l),l}function Hn(r){var l=f(),u=f();return this.divRemTo(r,l,u),new Array(l,u)}function F(r){this[this.t]=this.am(0,r-1,this,0,0,this.t),++this.t,this.clamp()}function X(r,l){if(r!=0){for(;this.t<=l;)this[this.t++]=0;for(this[l]+=r;this[l]>=this.DV;)this[l]-=this.DV,++l>=this.t&&(this[this.t++]=0),++this[l]}}function rt(){}function ht(r){return r}function et(r,l,u){r.multiplyTo(l,u)}function dt(r,l){r.squareTo(l)}rt.prototype.convert=ht,rt.prototype.revert=ht,rt.prototype.mulTo=et,rt.prototype.sqrTo=dt;function zt(r){return this.exp(r,new rt)}function ge(r,l,u){var p=Math.min(this.t+r.t,l);for(u.s=0,u.t=p;p>0;)u[--p]=0;var M;for(M=u.t-this.t;p<M;++p)u[p+this.t]=this.am(0,r[p],u,p,0,this.t);for(M=Math.min(r.t,l);p<M;++p)this.am(0,r[p],u,p,0,l-p);u.clamp()}function gt(r,l,u){--l;var p=u.t=this.t+r.t-l;for(u.s=0;--p>=0;)u[p]=0;for(p=Math.max(l-this.t,0);p<r.t;++p)u[this.t+p-l]=this.am(l-p,r[p],u,0,0,this.t+p-l);u.clamp(),u.drShiftTo(1,u)}function Gt(r){this.r2=f(),this.q3=f(),h.ONE.dlShiftTo(2*r.t,this.r2),this.mu=this.r2.divide(r),this.m=r}function te(r){if(r.s<0||r.t>2*this.m.t)return r.mod(this.m);if(r.compareTo(this.m)<0)return r;var l=f();return r.copyTo(l),this.reduce(l),l}function Ie(r){return r}function sn(r){for(r.drShiftTo(this.m.t-1,this.r2),r.t>this.m.t+1&&(r.t=this.m.t+1,r.clamp()),this.mu.multiplyUpperTo(this.r2,this.m.t+1,this.q3),this.m.multiplyLowerTo(this.q3,this.m.t+1,this.r2);r.compareTo(this.r2)<0;)r.dAddOffset(1,this.m.t+1);for(r.subTo(this.r2,r);r.compareTo(this.m)>=0;)r.subTo(this.m,r)}function L(r,l){r.squareTo(l),this.reduce(l)}function j(r,l,u){r.multiplyTo(l,u),this.reduce(u)}Gt.prototype.convert=te,Gt.prototype.revert=Ie,Gt.prototype.reduce=sn,Gt.prototype.mulTo=j,Gt.prototype.sqrTo=L;function ft(r,l){var u=r.bitLength(),p,M=E(1),C;if(u<=0)return M;u<18?p=1:u<48?p=3:u<144?p=4:u<768?p=5:p=6,u<8?C=new qt(l):l.isEven()?C=new Gt(l):C=new Nt(l);var D=new Array,Y=3,q=p-1,nt=(1<<p)-1;if(D[1]=C.convert(this),p>1){var _t=f();for(C.sqrTo(D[1],_t);Y<=nt;)D[Y]=f(),C.mulTo(_t,D[Y-2],D[Y]),Y+=2}var xt=r.t-1,St,Qt=!0,he=f(),_e;for(u=H(r[xt])-1;xt>=0;){for(u>=q?St=r[xt]>>u-q&nt:(St=(r[xt]&(1<<u+1)-1)<<q-u,xt>0&&(St|=r[xt-1]>>this.DB+u-q)),Y=p;(St&1)==0;)St>>=1,--Y;if((u-=Y)<0&&(u+=this.DB,--xt),Qt)D[St].copyTo(M),Qt=!1;else{for(;Y>1;)C.sqrTo(M,he),C.sqrTo(he,M),Y-=2;Y>0?C.sqrTo(M,he):(_e=M,M=he,he=_e),C.mulTo(he,D[St],M)}for(;xt>=0&&(r[xt]&1<<u)==0;)C.sqrTo(M,he),_e=M,M=he,he=_e,--u<0&&(u=this.DB-1,--xt)}return C.revert(M)}function at(r){var l=this.s<0?this.negate():this.clone(),u=r.s<0?r.negate():r.clone();if(l.compareTo(u)<0){var p=l;l=u,u=p}var M=l.getLowestSetBit(),C=u.getLowestSetBit();if(C<0)return l;for(M<C&&(C=M),C>0&&(l.rShiftTo(C,l),u.rShiftTo(C,u));l.signum()>0;)(M=l.getLowestSetBit())>0&&l.rShiftTo(M,l),(M=u.getLowestSetBit())>0&&u.rShiftTo(M,u),l.compareTo(u)>=0?(l.subTo(u,l),l.rShiftTo(1,l)):(u.subTo(l,u),u.rShiftTo(1,u));return C>0&&u.lShiftTo(C,u),u}function lt(r){if(r<=0)return 0;var l=this.DV%r,u=this.s<0?r-1:0;if(this.t>0)if(l==0)u=this[0]%r;else for(var p=this.t-1;p>=0;--p)u=(l*u+this[p])%r;return u}function Bt(r){var l=r.isEven();if(this.isEven()&&l||r.signum()==0)return h.ZERO;for(var u=r.clone(),p=this.clone(),M=E(1),C=E(0),D=E(0),Y=E(1);u.signum()!=0;){for(;u.isEven();)u.rShiftTo(1,u),l?((!M.isEven()||!C.isEven())&&(M.addTo(this,M),C.subTo(r,C)),M.rShiftTo(1,M)):C.isEven()||C.subTo(r,C),C.rShiftTo(1,C);for(;p.isEven();)p.rShiftTo(1,p),l?((!D.isEven()||!Y.isEven())&&(D.addTo(this,D),Y.subTo(r,Y)),D.rShiftTo(1,D)):Y.isEven()||Y.subTo(r,Y),Y.rShiftTo(1,Y);u.compareTo(p)>=0?(u.subTo(p,u),l&&M.subTo(D,M),C.subTo(Y,C)):(p.subTo(u,p),l&&D.subTo(M,D),Y.subTo(C,Y))}if(p.compareTo(h.ONE)!=0)return h.ZERO;if(Y.compareTo(r)>=0)return Y.subtract(r);if(Y.signum()<0)Y.addTo(r,Y);else return Y;return Y.signum()<0?Y.add(r):Y}var Lt=[2,3,5,7,11,13,17,19,23,29,31,37,41,43,47,53,59,61,67,71,73,79,83,89,97,101,103,107,109,113,127,131,137,139,149,151,157,163,167,173,179,181,191,193,197,199,211,223,227,229,233,239,241,251,257,263,269,271,277,281,283,293,307,311,313,317,331,337,347,349,353,359,367,373,379,383,389,397,401,409,419,421,431,433,439,443,449,457,461,463,467,479,487,491,499,503,509,521,523,541,547,557,563,569,571,577,587,593,599,601,607,613,617,619,631,641,643,647,653,659,661,673,677,683,691,701,709,719,727,733,739,743,751,757,761,769,773,787,797,809,811,821,823,827,829,839,853,857,859,863,877,881,883,887,907,911,919,929,937,941,947,953,967,971,977,983,991,997],Ut=(1<<26)/Lt[Lt.length-1];function Xt(r){var l,u=this.abs();if(u.t==1&&u[0]<=Lt[Lt.length-1]){for(l=0;l<Lt.length;++l)if(u[0]==Lt[l])return!0;return!1}if(u.isEven())return!1;for(l=1;l<Lt.length;){for(var p=Lt[l],M=l+1;M<Lt.length&&p<Ut;)p*=Lt[M++];for(p=u.modInt(p);l<M;)if(p%Lt[l++]==0)return!1}return u.millerRabin(r)}function Zt(r){var l=this.subtract(h.ONE),u=l.getLowestSetBit();if(u<=0)return!1;var p=l.shiftRight(u);r=r+1>>1,r>Lt.length&&(r=Lt.length);for(var M=f(),C=0;C<r;++C){M.fromInt(Lt[Math.floor(Math.random()*Lt.length)]);var D=M.modPow(p,this);if(D.compareTo(h.ONE)!=0&&D.compareTo(l)!=0){for(var Y=1;Y++<u&&D.compareTo(l)!=0;)if(D=D.modPowInt(2,this),D.compareTo(h.ONE)==0)return!1;if(D.compareTo(l)!=0)return!1}}return!0}h.prototype.chunkSize=qe,h.prototype.toRadix=V,h.prototype.fromRadix=I,h.prototype.fromNumber=st,h.prototype.bitwiseTo=k,h.prototype.changeBit=Re,h.prototype.addTo=Pr,h.prototype.dMultiply=F,h.prototype.dAddOffset=X,h.prototype.multiplyLowerTo=ge,h.prototype.multiplyUpperTo=gt,h.prototype.modInt=lt,h.prototype.millerRabin=Zt,h.prototype.clone=tn,h.prototype.intValue=De,h.prototype.byteValue=Ge,h.prototype.shortValue=tt,h.prototype.signum=Te,h.prototype.toByteArray=ct,h.prototype.equals=mt,h.prototype.min=Et,h.prototype.max=Pt,h.prototype.and=Dt,h.prototype.or=Ot,h.prototype.xor=Yt,h.prototype.andNot=le,h.prototype.not=Q,h.prototype.shiftLeft=Ct,h.prototype.shiftRight=yt,h.prototype.getLowestSetBit=Rt,h.prototype.bitCount=Jt,h.prototype.testBit=Ht,h.prototype.setBit=Se,h.prototype.clearBit=yn,h.prototype.flipBit=nn,h.prototype.add=Ir,h.prototype.subtract=Ze,h.prototype.multiply=Oi,h.prototype.divide=Cs,h.prototype.remainder=Ps,h.prototype.divideAndRemainder=Hn,h.prototype.modPow=ft,h.prototype.modInverse=Bt,h.prototype.pow=zt,h.prototype.gcd=at,h.prototype.isProbablePrime=Xt,h.prototype.square=Rr;var Ft=h;Ft.prototype.IsNegative=function(){return this.compareTo(Ft.ZERO)==-1},Ft.op_Equality=function(r,l){return r.compareTo(l)==0},Ft.op_Inequality=function(r,l){return r.compareTo(l)!=0},Ft.op_GreaterThan=function(r,l){return r.compareTo(l)>0},Ft.op_LessThan=function(r,l){return r.compareTo(l)<0},Ft.op_Addition=function(r,l){return new Ft(r,void 0,void 0).add(new Ft(l,void 0,void 0))},Ft.op_Subtraction=function(r,l){return new Ft(r,void 0,void 0).subtract(new Ft(l,void 0,void 0))},Ft.Int128Mul=function(r,l){return new Ft(r,void 0,void 0).multiply(new Ft(l,void 0,void 0))},Ft.op_Division=function(r,l){return r.divide(l)},Ft.prototype.ToDouble=function(){return parseFloat(this.toString())};var ye=function(r,l){var u;if(typeof Object.getOwnPropertyNames>"u"){for(u in l.prototype)(typeof r.prototype[u]>"u"||r.prototype[u]===Object.prototype[u])&&(r.prototype[u]=l.prototype[u]);for(u in l)typeof r[u]>"u"&&(r[u]=l[u]);r.$baseCtor=l}else{for(var p=Object.getOwnPropertyNames(l.prototype),M=0;M<p.length;M++)typeof Object.getOwnPropertyDescriptor(r.prototype,p[M])>"u"&&Object.defineProperty(r.prototype,p[M],Object.getOwnPropertyDescriptor(l.prototype,p[M]));for(u in l)typeof r[u]>"u"&&(r[u]=l[u]);r.$baseCtor=l}};n.Path=function(){return[]},n.Path.prototype.push=Array.prototype.push,n.Paths=function(){return[]},n.Paths.prototype.push=Array.prototype.push,n.DoublePoint=function(){var r=arguments;this.X=0,this.Y=0,r.length===1?(this.X=r[0].X,this.Y=r[0].Y):r.length===2&&(this.X=r[0],this.Y=r[1])},n.DoublePoint0=function(){this.X=0,this.Y=0},n.DoublePoint0.prototype=n.DoublePoint.prototype,n.DoublePoint1=function(r){this.X=r.X,this.Y=r.Y},n.DoublePoint1.prototype=n.DoublePoint.prototype,n.DoublePoint2=function(r,l){this.X=r,this.Y=l},n.DoublePoint2.prototype=n.DoublePoint.prototype,n.PolyNode=function(){this.m_Parent=null,this.m_polygon=new n.Path,this.m_Index=0,this.m_jointype=0,this.m_endtype=0,this.m_Childs=[],this.IsOpen=!1},n.PolyNode.prototype.IsHoleNode=function(){for(var r=!0,l=this.m_Parent;l!==null;)r=!r,l=l.m_Parent;return r},n.PolyNode.prototype.ChildCount=function(){return this.m_Childs.length},n.PolyNode.prototype.Contour=function(){return this.m_polygon},n.PolyNode.prototype.AddChild=function(r){var l=this.m_Childs.length;this.m_Childs.push(r),r.m_Parent=this,r.m_Index=l},n.PolyNode.prototype.GetNext=function(){return this.m_Childs.length>0?this.m_Childs[0]:this.GetNextSiblingUp()},n.PolyNode.prototype.GetNextSiblingUp=function(){return this.m_Parent===null?null:this.m_Index===this.m_Parent.m_Childs.length-1?this.m_Parent.GetNextSiblingUp():this.m_Parent.m_Childs[this.m_Index+1]},n.PolyNode.prototype.Childs=function(){return this.m_Childs},n.PolyNode.prototype.Parent=function(){return this.m_Parent},n.PolyNode.prototype.IsHole=function(){return this.IsHoleNode()},n.PolyTree=function(){this.m_AllPolys=[],n.PolyNode.call(this)},n.PolyTree.prototype.Clear=function(){for(var r=0,l=this.m_AllPolys.length;r<l;r++)this.m_AllPolys[r]=null;this.m_AllPolys.length=0,this.m_Childs.length=0},n.PolyTree.prototype.GetFirst=function(){return this.m_Childs.length>0?this.m_Childs[0]:null},n.PolyTree.prototype.Total=function(){var r=this.m_AllPolys.length;return r>0&&this.m_Childs[0]!==this.m_AllPolys[0]&&r--,r},ye(n.PolyTree,n.PolyNode),n.Math_Abs_Int64=n.Math_Abs_Int32=n.Math_Abs_Double=function(r){return Math.abs(r)},n.Math_Max_Int32_Int32=function(r,l){return Math.max(r,l)},s.msie||s.opera||s.safari?n.Cast_Int32=function(r){return r|0}:n.Cast_Int32=function(r){return~~r},typeof Number.toInteger>"u"&&(Number.toInteger=null),s.chrome?n.Cast_Int64=function(r){return r<-2147483648||r>2147483647?r<0?Math.ceil(r):Math.floor(r):~~r}:s.firefox&&typeof Number.toInteger=="function"?n.Cast_Int64=function(r){return Number.toInteger(r)}:s.msie7||s.msie8?n.Cast_Int64=function(r){return parseInt(r,10)}:s.msie?n.Cast_Int64=function(r){return r<-2147483648||r>2147483647?r<0?Math.ceil(r):Math.floor(r):r|0}:n.Cast_Int64=function(r){return r<0?Math.ceil(r):Math.floor(r)},n.Clear=function(r){r.length=0},n.PI=3.141592653589793,n.PI2=2*3.141592653589793,n.IntPoint=function(){var r=arguments,l=r.length;if(this.X=0,this.Y=0,n.use_xyz)if(this.Z=0,l===3)this.X=r[0],this.Y=r[1],this.Z=r[2];else if(l===2)this.X=r[0],this.Y=r[1],this.Z=0;else if(l===1)if(r[0]instanceof n.DoublePoint){var u=r[0];this.X=n.Clipper.Round(u.X),this.Y=n.Clipper.Round(u.Y),this.Z=0}else{var p=r[0];typeof p.Z>"u"&&(p.Z=0),this.X=p.X,this.Y=p.Y,this.Z=p.Z}else this.X=0,this.Y=0,this.Z=0;else if(l===2)this.X=r[0],this.Y=r[1];else if(l===1)if(r[0]instanceof n.DoublePoint){var u=r[0];this.X=n.Clipper.Round(u.X),this.Y=n.Clipper.Round(u.Y)}else{var p=r[0];this.X=p.X,this.Y=p.Y}else this.X=0,this.Y=0},n.IntPoint.op_Equality=function(r,l){return r.X===l.X&&r.Y===l.Y},n.IntPoint.op_Inequality=function(r,l){return r.X!==l.X||r.Y!==l.Y},n.IntPoint0=function(){this.X=0,this.Y=0,n.use_xyz&&(this.Z=0)},n.IntPoint0.prototype=n.IntPoint.prototype,n.IntPoint1=function(r){this.X=r.X,this.Y=r.Y,n.use_xyz&&(typeof r.Z>"u"?this.Z=0:this.Z=r.Z)},n.IntPoint1.prototype=n.IntPoint.prototype,n.IntPoint1dp=function(r){this.X=n.Clipper.Round(r.X),this.Y=n.Clipper.Round(r.Y),n.use_xyz&&(this.Z=0)},n.IntPoint1dp.prototype=n.IntPoint.prototype,n.IntPoint2=function(r,l,u){this.X=r,this.Y=l,n.use_xyz&&(typeof u>"u"?this.Z=0:this.Z=u)},n.IntPoint2.prototype=n.IntPoint.prototype,n.IntRect=function(){var r=arguments,l=r.length;if(l===4)this.left=r[0],this.top=r[1],this.right=r[2],this.bottom=r[3];else if(l===1){var u=r[0];this.left=u.left,this.top=u.top,this.right=u.right,this.bottom=u.bottom}else this.left=0,this.top=0,this.right=0,this.bottom=0},n.IntRect0=function(){this.left=0,this.top=0,this.right=0,this.bottom=0},n.IntRect0.prototype=n.IntRect.prototype,n.IntRect1=function(r){this.left=r.left,this.top=r.top,this.right=r.right,this.bottom=r.bottom},n.IntRect1.prototype=n.IntRect.prototype,n.IntRect4=function(r,l,u,p){this.left=r,this.top=l,this.right=u,this.bottom=p},n.IntRect4.prototype=n.IntRect.prototype,n.ClipType={ctIntersection:0,ctUnion:1,ctDifference:2,ctXor:3},n.PolyType={ptSubject:0,ptClip:1},n.PolyFillType={pftEvenOdd:0,pftNonZero:1,pftPositive:2,pftNegative:3},n.JoinType={jtSquare:0,jtRound:1,jtMiter:2},n.EndType={etOpenSquare:0,etOpenRound:1,etOpenButt:2,etClosedLine:3,etClosedPolygon:4},n.EdgeSide={esLeft:0,esRight:1},n.Direction={dRightToLeft:0,dLeftToRight:1},n.TEdge=function(){this.Bot=new n.IntPoint0,this.Curr=new n.IntPoint0,this.Top=new n.IntPoint0,this.Delta=new n.IntPoint0,this.Dx=0,this.PolyTyp=n.PolyType.ptSubject,this.Side=n.EdgeSide.esLeft,this.WindDelta=0,this.WindCnt=0,this.WindCnt2=0,this.OutIdx=0,this.Next=null,this.Prev=null,this.NextInLML=null,this.NextInAEL=null,this.PrevInAEL=null,this.NextInSEL=null,this.PrevInSEL=null},n.IntersectNode=function(){this.Edge1=null,this.Edge2=null,this.Pt=new n.IntPoint0},n.MyIntersectNodeSort=function(){},n.MyIntersectNodeSort.Compare=function(r,l){var u=l.Pt.Y-r.Pt.Y;return u>0?1:u<0?-1:0},n.LocalMinima=function(){this.Y=0,this.LeftBound=null,this.RightBound=null,this.Next=null},n.Scanbeam=function(){this.Y=0,this.Next=null},n.Maxima=function(){this.X=0,this.Next=null,this.Prev=null},n.OutRec=function(){this.Idx=0,this.IsHole=!1,this.IsOpen=!1,this.FirstLeft=null,this.Pts=null,this.BottomPt=null,this.PolyNode=null},n.OutPt=function(){this.Idx=0,this.Pt=new n.IntPoint0,this.Next=null,this.Prev=null},n.Join=function(){this.OutPt1=null,this.OutPt2=null,this.OffPt=new n.IntPoint0},n.ClipperBase=function(){this.m_MinimaList=null,this.m_CurrentLM=null,this.m_edges=new Array,this.m_UseFullRange=!1,this.m_HasOpenPaths=!1,this.PreserveCollinear=!1,this.m_Scanbeam=null,this.m_PolyOuts=null,this.m_ActiveEdges=null},n.ClipperBase.horizontal=-9007199254740992,n.ClipperBase.Skip=-2,n.ClipperBase.Unassigned=-1,n.ClipperBase.tolerance=1e-20,n.ClipperBase.loRange=47453132,n.ClipperBase.hiRange=0xfffffffffffff,n.ClipperBase.near_zero=function(r){return r>-n.ClipperBase.tolerance&&r<n.ClipperBase.tolerance},n.ClipperBase.IsHorizontal=function(r){return r.Delta.Y===0},n.ClipperBase.prototype.PointIsVertex=function(r,l){var u=l;do{if(n.IntPoint.op_Equality(u.Pt,r))return!0;u=u.Next}while(u!==l);return!1},n.ClipperBase.prototype.PointOnLineSegment=function(r,l,u,p){return p?r.X===l.X&&r.Y===l.Y||r.X===u.X&&r.Y===u.Y||r.X>l.X==r.X<u.X&&r.Y>l.Y==r.Y<u.Y&&Ft.op_Equality(Ft.Int128Mul(r.X-l.X,u.Y-l.Y),Ft.Int128Mul(u.X-l.X,r.Y-l.Y)):r.X===l.X&&r.Y===l.Y||r.X===u.X&&r.Y===u.Y||r.X>l.X==r.X<u.X&&r.Y>l.Y==r.Y<u.Y&&(r.X-l.X)*(u.Y-l.Y)===(u.X-l.X)*(r.Y-l.Y)},n.ClipperBase.prototype.PointOnPolygon=function(r,l,u){for(var p=l;;){if(this.PointOnLineSegment(r,p.Pt,p.Next.Pt,u))return!0;if(p=p.Next,p===l)break}return!1},n.ClipperBase.prototype.SlopesEqual=n.ClipperBase.SlopesEqual=function(){var r=arguments,l=r.length,u,p,M,C,D,Y,q;return l===3?(u=r[0],p=r[1],q=r[2],q?Ft.op_Equality(Ft.Int128Mul(u.Delta.Y,p.Delta.X),Ft.Int128Mul(u.Delta.X,p.Delta.Y)):n.Cast_Int64(u.Delta.Y*p.Delta.X)===n.Cast_Int64(u.Delta.X*p.Delta.Y)):l===4?(M=r[0],C=r[1],D=r[2],q=r[3],q?Ft.op_Equality(Ft.Int128Mul(M.Y-C.Y,C.X-D.X),Ft.Int128Mul(M.X-C.X,C.Y-D.Y)):n.Cast_Int64((M.Y-C.Y)*(C.X-D.X))-n.Cast_Int64((M.X-C.X)*(C.Y-D.Y))===0):(M=r[0],C=r[1],D=r[2],Y=r[3],q=r[4],q?Ft.op_Equality(Ft.Int128Mul(M.Y-C.Y,D.X-Y.X),Ft.Int128Mul(M.X-C.X,D.Y-Y.Y)):n.Cast_Int64((M.Y-C.Y)*(D.X-Y.X))-n.Cast_Int64((M.X-C.X)*(D.Y-Y.Y))===0)},n.ClipperBase.SlopesEqual3=function(r,l,u){return u?Ft.op_Equality(Ft.Int128Mul(r.Delta.Y,l.Delta.X),Ft.Int128Mul(r.Delta.X,l.Delta.Y)):n.Cast_Int64(r.Delta.Y*l.Delta.X)===n.Cast_Int64(r.Delta.X*l.Delta.Y)},n.ClipperBase.SlopesEqual4=function(r,l,u,p){return p?Ft.op_Equality(Ft.Int128Mul(r.Y-l.Y,l.X-u.X),Ft.Int128Mul(r.X-l.X,l.Y-u.Y)):n.Cast_Int64((r.Y-l.Y)*(l.X-u.X))-n.Cast_Int64((r.X-l.X)*(l.Y-u.Y))===0},n.ClipperBase.SlopesEqual5=function(r,l,u,p,M){return M?Ft.op_Equality(Ft.Int128Mul(r.Y-l.Y,u.X-p.X),Ft.Int128Mul(r.X-l.X,u.Y-p.Y)):n.Cast_Int64((r.Y-l.Y)*(u.X-p.X))-n.Cast_Int64((r.X-l.X)*(u.Y-p.Y))===0},n.ClipperBase.prototype.Clear=function(){this.DisposeLocalMinimaList();for(var r=0,l=this.m_edges.length;r<l;++r){for(var u=0,p=this.m_edges[r].length;u<p;++u)this.m_edges[r][u]=null;n.Clear(this.m_edges[r])}n.Clear(this.m_edges),this.m_UseFullRange=!1,this.m_HasOpenPaths=!1},n.ClipperBase.prototype.DisposeLocalMinimaList=function(){for(;this.m_MinimaList!==null;){var r=this.m_MinimaList.Next;this.m_MinimaList=null,this.m_MinimaList=r}this.m_CurrentLM=null},n.ClipperBase.prototype.RangeTest=function(r,l){l.Value?(r.X>n.ClipperBase.hiRange||r.Y>n.ClipperBase.hiRange||-r.X>n.ClipperBase.hiRange||-r.Y>n.ClipperBase.hiRange)&&n.Error("Coordinate outside allowed range in RangeTest()."):(r.X>n.ClipperBase.loRange||r.Y>n.ClipperBase.loRange||-r.X>n.ClipperBase.loRange||-r.Y>n.ClipperBase.loRange)&&(l.Value=!0,this.RangeTest(r,l))},n.ClipperBase.prototype.InitEdge=function(r,l,u,p){r.Next=l,r.Prev=u,r.Curr.X=p.X,r.Curr.Y=p.Y,n.use_xyz&&(r.Curr.Z=p.Z),r.OutIdx=-1},n.ClipperBase.prototype.InitEdge2=function(r,l){r.Curr.Y>=r.Next.Curr.Y?(r.Bot.X=r.Curr.X,r.Bot.Y=r.Curr.Y,n.use_xyz&&(r.Bot.Z=r.Curr.Z),r.Top.X=r.Next.Curr.X,r.Top.Y=r.Next.Curr.Y,n.use_xyz&&(r.Top.Z=r.Next.Curr.Z)):(r.Top.X=r.Curr.X,r.Top.Y=r.Curr.Y,n.use_xyz&&(r.Top.Z=r.Curr.Z),r.Bot.X=r.Next.Curr.X,r.Bot.Y=r.Next.Curr.Y,n.use_xyz&&(r.Bot.Z=r.Next.Curr.Z)),this.SetDx(r),r.PolyTyp=l},n.ClipperBase.prototype.FindNextLocMin=function(r){for(var l;;){for(;n.IntPoint.op_Inequality(r.Bot,r.Prev.Bot)||n.IntPoint.op_Equality(r.Curr,r.Top);)r=r.Next;if(r.Dx!==n.ClipperBase.horizontal&&r.Prev.Dx!==n.ClipperBase.horizontal)break;for(;r.Prev.Dx===n.ClipperBase.horizontal;)r=r.Prev;for(l=r;r.Dx===n.ClipperBase.horizontal;)r=r.Next;if(r.Top.Y!==r.Prev.Bot.Y){l.Prev.Bot.X<r.Bot.X&&(r=l);break}}return r},n.ClipperBase.prototype.ProcessBound=function(r,l){var u,p=r,M;if(p.OutIdx===n.ClipperBase.Skip){if(r=p,l){for(;r.Top.Y===r.Next.Bot.Y;)r=r.Next;for(;r!==p&&r.Dx===n.ClipperBase.horizontal;)r=r.Prev}else{for(;r.Top.Y===r.Prev.Bot.Y;)r=r.Prev;for(;r!==p&&r.Dx===n.ClipperBase.horizontal;)r=r.Next}if(r===p)l?p=r.Next:p=r.Prev;else{l?r=p.Next:r=p.Prev;var C=new n.LocalMinima;C.Next=null,C.Y=r.Bot.Y,C.LeftBound=null,C.RightBound=r,r.WindDelta=0,p=this.ProcessBound(r,l),this.InsertLocalMinima(C)}return p}if(r.Dx===n.ClipperBase.horizontal&&(l?u=r.Prev:u=r.Next,u.Dx===n.ClipperBase.horizontal?u.Bot.X!==r.Bot.X&&u.Top.X!==r.Bot.X&&this.ReverseHorizontal(r):u.Bot.X!==r.Bot.X&&this.ReverseHorizontal(r)),u=r,l){for(;p.Top.Y===p.Next.Bot.Y&&p.Next.OutIdx!==n.ClipperBase.Skip;)p=p.Next;if(p.Dx===n.ClipperBase.horizontal&&p.Next.OutIdx!==n.ClipperBase.Skip){for(M=p;M.Prev.Dx===n.ClipperBase.horizontal;)M=M.Prev;M.Prev.Top.X>p.Next.Top.X&&(p=M.Prev)}for(;r!==p;)r.NextInLML=r.Next,r.Dx===n.ClipperBase.horizontal&&r!==u&&r.Bot.X!==r.Prev.Top.X&&this.ReverseHorizontal(r),r=r.Next;r.Dx===n.ClipperBase.horizontal&&r!==u&&r.Bot.X!==r.Prev.Top.X&&this.ReverseHorizontal(r),p=p.Next}else{for(;p.Top.Y===p.Prev.Bot.Y&&p.Prev.OutIdx!==n.ClipperBase.Skip;)p=p.Prev;if(p.Dx===n.ClipperBase.horizontal&&p.Prev.OutIdx!==n.ClipperBase.Skip){for(M=p;M.Next.Dx===n.ClipperBase.horizontal;)M=M.Next;(M.Next.Top.X===p.Prev.Top.X||M.Next.Top.X>p.Prev.Top.X)&&(p=M.Next)}for(;r!==p;)r.NextInLML=r.Prev,r.Dx===n.ClipperBase.horizontal&&r!==u&&r.Bot.X!==r.Next.Top.X&&this.ReverseHorizontal(r),r=r.Prev;r.Dx===n.ClipperBase.horizontal&&r!==u&&r.Bot.X!==r.Next.Top.X&&this.ReverseHorizontal(r),p=p.Prev}return p},n.ClipperBase.prototype.AddPath=function(r,l,u){n.use_lines?!u&&l===n.PolyType.ptClip&&n.Error("AddPath: Open paths must be subject."):u||n.Error("AddPath: Open paths have been disabled.");var p=r.length-1;if(u)for(;p>0&&n.IntPoint.op_Equality(r[p],r[0]);)--p;for(;p>0&&n.IntPoint.op_Equality(r[p],r[p-1]);)--p;if(u&&p<2||!u&&p<1)return!1;for(var M=new Array,C=0;C<=p;C++)M.push(new n.TEdge);var D=!0;M[1].Curr.X=r[1].X,M[1].Curr.Y=r[1].Y,n.use_xyz&&(M[1].Curr.Z=r[1].Z);var Y={Value:this.m_UseFullRange};this.RangeTest(r[0],Y),this.m_UseFullRange=Y.Value,Y.Value=this.m_UseFullRange,this.RangeTest(r[p],Y),this.m_UseFullRange=Y.Value,this.InitEdge(M[0],M[1],M[p],r[0]),this.InitEdge(M[p],M[0],M[p-1],r[p]);for(var C=p-1;C>=1;--C)Y.Value=this.m_UseFullRange,this.RangeTest(r[C],Y),this.m_UseFullRange=Y.Value,this.InitEdge(M[C],M[C+1],M[C-1],r[C]);for(var q=M[0],nt=q,_t=q;;){if(nt.Curr===nt.Next.Curr&&(u||nt.Next!==q)){if(nt===nt.Next)break;nt===q&&(q=nt.Next),nt=this.RemoveEdge(nt),_t=nt;continue}if(nt.Prev===nt.Next)break;if(u&&n.ClipperBase.SlopesEqual4(nt.Prev.Curr,nt.Curr,nt.Next.Curr,this.m_UseFullRange)&&(!this.PreserveCollinear||!this.Pt2IsBetweenPt1AndPt3(nt.Prev.Curr,nt.Curr,nt.Next.Curr))){nt===q&&(q=nt.Next),nt=this.RemoveEdge(nt),nt=nt.Prev,_t=nt;continue}if(nt=nt.Next,nt===_t||!u&&nt.Next===q)break}if(!u&&nt===nt.Next||u&&nt.Prev===nt.Next)return!1;u||(this.m_HasOpenPaths=!0,q.Prev.OutIdx=n.ClipperBase.Skip),nt=q;do this.InitEdge2(nt,l),nt=nt.Next,D&&nt.Curr.Y!==q.Curr.Y&&(D=!1);while(nt!==q);if(D){if(u)return!1;nt.Prev.OutIdx=n.ClipperBase.Skip;var xt=new n.LocalMinima;for(xt.Next=null,xt.Y=nt.Bot.Y,xt.LeftBound=null,xt.RightBound=nt,xt.RightBound.Side=n.EdgeSide.esRight,xt.RightBound.WindDelta=0;nt.Bot.X!==nt.Prev.Top.X&&this.ReverseHorizontal(nt),nt.Next.OutIdx!==n.ClipperBase.Skip;)nt.NextInLML=nt.Next,nt=nt.Next;return this.InsertLocalMinima(xt),this.m_edges.push(M),!0}this.m_edges.push(M);var St,Qt=null;for(n.IntPoint.op_Equality(nt.Prev.Bot,nt.Prev.Top)&&(nt=nt.Next);nt=this.FindNextLocMin(nt),nt!==Qt;){Qt===null&&(Qt=nt);var xt=new n.LocalMinima;xt.Next=null,xt.Y=nt.Bot.Y,nt.Dx<nt.Prev.Dx?(xt.LeftBound=nt.Prev,xt.RightBound=nt,St=!1):(xt.LeftBound=nt,xt.RightBound=nt.Prev,St=!0),xt.LeftBound.Side=n.EdgeSide.esLeft,xt.RightBound.Side=n.EdgeSide.esRight,u?xt.LeftBound.Next===xt.RightBound?xt.LeftBound.WindDelta=-1:xt.LeftBound.WindDelta=1:xt.LeftBound.WindDelta=0,xt.RightBound.WindDelta=-xt.LeftBound.WindDelta,nt=this.ProcessBound(xt.LeftBound,St),nt.OutIdx===n.ClipperBase.Skip&&(nt=this.ProcessBound(nt,St));var he=this.ProcessBound(xt.RightBound,!St);he.OutIdx===n.ClipperBase.Skip&&(he=this.ProcessBound(he,!St)),xt.LeftBound.OutIdx===n.ClipperBase.Skip?xt.LeftBound=null:xt.RightBound.OutIdx===n.ClipperBase.Skip&&(xt.RightBound=null),this.InsertLocalMinima(xt),St||(nt=he)}return!0},n.ClipperBase.prototype.AddPaths=function(r,l,u){for(var p=!1,M=0,C=r.length;M<C;++M)this.AddPath(r[M],l,u)&&(p=!0);return p},n.ClipperBase.prototype.Pt2IsBetweenPt1AndPt3=function(r,l,u){return n.IntPoint.op_Equality(r,u)||n.IntPoint.op_Equality(r,l)||n.IntPoint.op_Equality(u,l)?!1:r.X!==u.X?l.X>r.X==l.X<u.X:l.Y>r.Y==l.Y<u.Y},n.ClipperBase.prototype.RemoveEdge=function(r){r.Prev.Next=r.Next,r.Next.Prev=r.Prev;var l=r.Next;return r.Prev=null,l},n.ClipperBase.prototype.SetDx=function(r){r.Delta.X=r.Top.X-r.Bot.X,r.Delta.Y=r.Top.Y-r.Bot.Y,r.Delta.Y===0?r.Dx=n.ClipperBase.horizontal:r.Dx=r.Delta.X/r.Delta.Y},n.ClipperBase.prototype.InsertLocalMinima=function(r){if(this.m_MinimaList===null)this.m_MinimaList=r;else if(r.Y>=this.m_MinimaList.Y)r.Next=this.m_MinimaList,this.m_MinimaList=r;else{for(var l=this.m_MinimaList;l.Next!==null&&r.Y<l.Next.Y;)l=l.Next;r.Next=l.Next,l.Next=r}},n.ClipperBase.prototype.PopLocalMinima=function(r,l){return l.v=this.m_CurrentLM,this.m_CurrentLM!==null&&this.m_CurrentLM.Y===r?(this.m_CurrentLM=this.m_CurrentLM.Next,!0):!1},n.ClipperBase.prototype.ReverseHorizontal=function(r){var l=r.Top.X;r.Top.X=r.Bot.X,r.Bot.X=l,n.use_xyz&&(l=r.Top.Z,r.Top.Z=r.Bot.Z,r.Bot.Z=l)},n.ClipperBase.prototype.Reset=function(){if(this.m_CurrentLM=this.m_MinimaList,this.m_CurrentLM!==null){this.m_Scanbeam=null;for(var r=this.m_MinimaList;r!==null;){this.InsertScanbeam(r.Y);var l=r.LeftBound;l!==null&&(l.Curr.X=l.Bot.X,l.Curr.Y=l.Bot.Y,n.use_xyz&&(l.Curr.Z=l.Bot.Z),l.OutIdx=n.ClipperBase.Unassigned),l=r.RightBound,l!==null&&(l.Curr.X=l.Bot.X,l.Curr.Y=l.Bot.Y,n.use_xyz&&(l.Curr.Z=l.Bot.Z),l.OutIdx=n.ClipperBase.Unassigned),r=r.Next}this.m_ActiveEdges=null}},n.ClipperBase.prototype.InsertScanbeam=function(r){if(this.m_Scanbeam===null)this.m_Scanbeam=new n.Scanbeam,this.m_Scanbeam.Next=null,this.m_Scanbeam.Y=r;else if(r>this.m_Scanbeam.Y){var l=new n.Scanbeam;l.Y=r,l.Next=this.m_Scanbeam,this.m_Scanbeam=l}else{for(var u=this.m_Scanbeam;u.Next!==null&&r<=u.Next.Y;)u=u.Next;if(r===u.Y)return;var p=new n.Scanbeam;p.Y=r,p.Next=u.Next,u.Next=p}},n.ClipperBase.prototype.PopScanbeam=function(r){return this.m_Scanbeam===null?(r.v=0,!1):(r.v=this.m_Scanbeam.Y,this.m_Scanbeam=this.m_Scanbeam.Next,!0)},n.ClipperBase.prototype.LocalMinimaPending=function(){return this.m_CurrentLM!==null},n.ClipperBase.prototype.CreateOutRec=function(){var r=new n.OutRec;return r.Idx=n.ClipperBase.Unassigned,r.IsHole=!1,r.IsOpen=!1,r.FirstLeft=null,r.Pts=null,r.BottomPt=null,r.PolyNode=null,this.m_PolyOuts.push(r),r.Idx=this.m_PolyOuts.length-1,r},n.ClipperBase.prototype.DisposeOutRec=function(r){var l=this.m_PolyOuts[r];l.Pts=null,l=null,this.m_PolyOuts[r]=null},n.ClipperBase.prototype.UpdateEdgeIntoAEL=function(r){r.NextInLML===null&&n.Error("UpdateEdgeIntoAEL: invalid call");var l=r.PrevInAEL,u=r.NextInAEL;return r.NextInLML.OutIdx=r.OutIdx,l!==null?l.NextInAEL=r.NextInLML:this.m_ActiveEdges=r.NextInLML,u!==null&&(u.PrevInAEL=r.NextInLML),r.NextInLML.Side=r.Side,r.NextInLML.WindDelta=r.WindDelta,r.NextInLML.WindCnt=r.WindCnt,r.NextInLML.WindCnt2=r.WindCnt2,r=r.NextInLML,r.Curr.X=r.Bot.X,r.Curr.Y=r.Bot.Y,r.PrevInAEL=l,r.NextInAEL=u,n.ClipperBase.IsHorizontal(r)||this.InsertScanbeam(r.Top.Y),r},n.ClipperBase.prototype.SwapPositionsInAEL=function(r,l){if(!(r.NextInAEL===r.PrevInAEL||l.NextInAEL===l.PrevInAEL)){if(r.NextInAEL===l){var u=l.NextInAEL;u!==null&&(u.PrevInAEL=r);var p=r.PrevInAEL;p!==null&&(p.NextInAEL=l),l.PrevInAEL=p,l.NextInAEL=r,r.PrevInAEL=l,r.NextInAEL=u}else if(l.NextInAEL===r){var M=r.NextInAEL;M!==null&&(M.PrevInAEL=l);var C=l.PrevInAEL;C!==null&&(C.NextInAEL=r),r.PrevInAEL=C,r.NextInAEL=l,l.PrevInAEL=r,l.NextInAEL=M}else{var D=r.NextInAEL,Y=r.PrevInAEL;r.NextInAEL=l.NextInAEL,r.NextInAEL!==null&&(r.NextInAEL.PrevInAEL=r),r.PrevInAEL=l.PrevInAEL,r.PrevInAEL!==null&&(r.PrevInAEL.NextInAEL=r),l.NextInAEL=D,l.NextInAEL!==null&&(l.NextInAEL.PrevInAEL=l),l.PrevInAEL=Y,l.PrevInAEL!==null&&(l.PrevInAEL.NextInAEL=l)}r.PrevInAEL===null?this.m_ActiveEdges=r:l.PrevInAEL===null&&(this.m_ActiveEdges=l)}},n.ClipperBase.prototype.DeleteFromAEL=function(r){var l=r.PrevInAEL,u=r.NextInAEL;l===null&&u===null&&r!==this.m_ActiveEdges||(l!==null?l.NextInAEL=u:this.m_ActiveEdges=u,u!==null&&(u.PrevInAEL=l),r.NextInAEL=null,r.PrevInAEL=null)},n.Clipper=function(r){typeof r>"u"&&(r=0),this.m_PolyOuts=null,this.m_ClipType=n.ClipType.ctIntersection,this.m_Scanbeam=null,this.m_Maxima=null,this.m_ActiveEdges=null,this.m_SortedEdges=null,this.m_IntersectList=null,this.m_IntersectNodeComparer=null,this.m_ExecuteLocked=!1,this.m_ClipFillType=n.PolyFillType.pftEvenOdd,this.m_SubjFillType=n.PolyFillType.pftEvenOdd,this.m_Joins=null,this.m_GhostJoins=null,this.m_UsingPolyTree=!1,this.ReverseSolution=!1,this.StrictlySimple=!1,n.ClipperBase.call(this),this.m_Scanbeam=null,this.m_Maxima=null,this.m_ActiveEdges=null,this.m_SortedEdges=null,this.m_IntersectList=new Array,this.m_IntersectNodeComparer=n.MyIntersectNodeSort.Compare,this.m_ExecuteLocked=!1,this.m_UsingPolyTree=!1,this.m_PolyOuts=new Array,this.m_Joins=new Array,this.m_GhostJoins=new Array,this.ReverseSolution=(1&r)!==0,this.StrictlySimple=(2&r)!==0,this.PreserveCollinear=(4&r)!==0,n.use_xyz&&(this.ZFillFunction=null)},n.Clipper.ioReverseSolution=1,n.Clipper.ioStrictlySimple=2,n.Clipper.ioPreserveCollinear=4,n.Clipper.prototype.Clear=function(){this.m_edges.length!==0&&(this.DisposeAllPolyPts(),n.ClipperBase.prototype.Clear.call(this))},n.Clipper.prototype.InsertMaxima=function(r){var l=new n.Maxima;if(l.X=r,this.m_Maxima===null)this.m_Maxima=l,this.m_Maxima.Next=null,this.m_Maxima.Prev=null;else if(r<this.m_Maxima.X)l.Next=this.m_Maxima,l.Prev=null,this.m_Maxima=l;else{for(var u=this.m_Maxima;u.Next!==null&&r>=u.Next.X;)u=u.Next;if(r===u.X)return;l.Next=u.Next,l.Prev=u,u.Next!==null&&(u.Next.Prev=l),u.Next=l}},n.Clipper.prototype.Execute=function(){var r=arguments,l=r.length,u=r[1]instanceof n.PolyTree;if(l===4&&!u){var p=r[0],M=r[1],C=r[2],D=r[3];if(this.m_ExecuteLocked)return!1;this.m_HasOpenPaths&&n.Error("Error: PolyTree struct is needed for open path clipping."),this.m_ExecuteLocked=!0,n.Clear(M),this.m_SubjFillType=C,this.m_ClipFillType=D,this.m_ClipType=p,this.m_UsingPolyTree=!1;try{var Y=this.ExecuteInternal();Y&&this.BuildResult(M)}finally{this.DisposeAllPolyPts(),this.m_ExecuteLocked=!1}return Y}else if(l===4&&u){var p=r[0],q=r[1],C=r[2],D=r[3];if(this.m_ExecuteLocked)return!1;this.m_ExecuteLocked=!0,this.m_SubjFillType=C,this.m_ClipFillType=D,this.m_ClipType=p,this.m_UsingPolyTree=!0;try{var Y=this.ExecuteInternal();Y&&this.BuildResult2(q)}finally{this.DisposeAllPolyPts(),this.m_ExecuteLocked=!1}return Y}else if(l===2&&!u){var p=r[0],M=r[1];return this.Execute(p,M,n.PolyFillType.pftEvenOdd,n.PolyFillType.pftEvenOdd)}else if(l===2&&u){var p=r[0],q=r[1];return this.Execute(p,q,n.PolyFillType.pftEvenOdd,n.PolyFillType.pftEvenOdd)}},n.Clipper.prototype.FixHoleLinkage=function(r){if(!(r.FirstLeft===null||r.IsHole!==r.FirstLeft.IsHole&&r.FirstLeft.Pts!==null)){for(var l=r.FirstLeft;l!==null&&(l.IsHole===r.IsHole||l.Pts===null);)l=l.FirstLeft;r.FirstLeft=l}},n.Clipper.prototype.ExecuteInternal=function(){try{this.Reset(),this.m_SortedEdges=null,this.m_Maxima=null;var r={},l={};if(!this.PopScanbeam(r))return!1;for(this.InsertLocalMinimaIntoAEL(r.v);this.PopScanbeam(l)||this.LocalMinimaPending();){if(this.ProcessHorizontals(),this.m_GhostJoins.length=0,!this.ProcessIntersections(l.v))return!1;this.ProcessEdgesAtTopOfScanbeam(l.v),r.v=l.v,this.InsertLocalMinimaIntoAEL(r.v)}var u,p,M;for(p=0,M=this.m_PolyOuts.length;p<M;p++)u=this.m_PolyOuts[p],!(u.Pts===null||u.IsOpen)&&(u.IsHole^this.ReverseSolution)==this.Area$1(u)>0&&this.ReversePolyPtLinks(u.Pts);for(this.JoinCommonEdges(),p=0,M=this.m_PolyOuts.length;p<M;p++)u=this.m_PolyOuts[p],u.Pts!==null&&(u.IsOpen?this.FixupOutPolyline(u):this.FixupOutPolygon(u));return this.StrictlySimple&&this.DoSimplePolygons(),!0}finally{this.m_Joins.length=0,this.m_GhostJoins.length=0}},n.Clipper.prototype.DisposeAllPolyPts=function(){for(var r=0,l=this.m_PolyOuts.length;r<l;++r)this.DisposeOutRec(r);n.Clear(this.m_PolyOuts)},n.Clipper.prototype.AddJoin=function(r,l,u){var p=new n.Join;p.OutPt1=r,p.OutPt2=l,p.OffPt.X=u.X,p.OffPt.Y=u.Y,n.use_xyz&&(p.OffPt.Z=u.Z),this.m_Joins.push(p)},n.Clipper.prototype.AddGhostJoin=function(r,l){var u=new n.Join;u.OutPt1=r,u.OffPt.X=l.X,u.OffPt.Y=l.Y,n.use_xyz&&(u.OffPt.Z=l.Z),this.m_GhostJoins.push(u)},n.Clipper.prototype.SetZ=function(r,l,u){if(this.ZFillFunction!==null){if(r.Z!==0||this.ZFillFunction===null)return;n.IntPoint.op_Equality(r,l.Bot)?r.Z=l.Bot.Z:n.IntPoint.op_Equality(r,l.Top)?r.Z=l.Top.Z:n.IntPoint.op_Equality(r,u.Bot)?r.Z=u.Bot.Z:n.IntPoint.op_Equality(r,u.Top)?r.Z=u.Top.Z:this.ZFillFunction(l.Bot,l.Top,u.Bot,u.Top,r)}},n.Clipper.prototype.InsertLocalMinimaIntoAEL=function(r){for(var l={},u,p;this.PopLocalMinima(r,l);){u=l.v.LeftBound,p=l.v.RightBound;var M=null;if(u===null?(this.InsertEdgeIntoAEL(p,null),this.SetWindingCount(p),this.IsContributing(p)&&(M=this.AddOutPt(p,p.Bot))):p===null?(this.InsertEdgeIntoAEL(u,null),this.SetWindingCount(u),this.IsContributing(u)&&(M=this.AddOutPt(u,u.Bot)),this.InsertScanbeam(u.Top.Y)):(this.InsertEdgeIntoAEL(u,null),this.InsertEdgeIntoAEL(p,u),this.SetWindingCount(u),p.WindCnt=u.WindCnt,p.WindCnt2=u.WindCnt2,this.IsContributing(u)&&(M=this.AddLocalMinPoly(u,p,u.Bot)),this.InsertScanbeam(u.Top.Y)),p!==null&&(n.ClipperBase.IsHorizontal(p)?(p.NextInLML!==null&&this.InsertScanbeam(p.NextInLML.Top.Y),this.AddEdgeToSEL(p)):this.InsertScanbeam(p.Top.Y)),!(u===null||p===null)){if(M!==null&&n.ClipperBase.IsHorizontal(p)&&this.m_GhostJoins.length>0&&p.WindDelta!==0)for(var C=0,D=this.m_GhostJoins.length;C<D;C++){var Y=this.m_GhostJoins[C];this.HorzSegmentsOverlap(Y.OutPt1.Pt.X,Y.OffPt.X,p.Bot.X,p.Top.X)&&this.AddJoin(Y.OutPt1,M,Y.OffPt)}if(u.OutIdx>=0&&u.PrevInAEL!==null&&u.PrevInAEL.Curr.X===u.Bot.X&&u.PrevInAEL.OutIdx>=0&&n.ClipperBase.SlopesEqual5(u.PrevInAEL.Curr,u.PrevInAEL.Top,u.Curr,u.Top,this.m_UseFullRange)&&u.WindDelta!==0&&u.PrevInAEL.WindDelta!==0){var q=this.AddOutPt(u.PrevInAEL,u.Bot);this.AddJoin(M,q,u.Top)}if(u.NextInAEL!==p){if(p.OutIdx>=0&&p.PrevInAEL.OutIdx>=0&&n.ClipperBase.SlopesEqual5(p.PrevInAEL.Curr,p.PrevInAEL.Top,p.Curr,p.Top,this.m_UseFullRange)&&p.WindDelta!==0&&p.PrevInAEL.WindDelta!==0){var q=this.AddOutPt(p.PrevInAEL,p.Bot);this.AddJoin(M,q,p.Top)}var nt=u.NextInAEL;if(nt!==null)for(;nt!==p;)this.IntersectEdges(p,nt,u.Curr),nt=nt.NextInAEL}}}},n.Clipper.prototype.InsertEdgeIntoAEL=function(r,l){if(this.m_ActiveEdges===null)r.PrevInAEL=null,r.NextInAEL=null,this.m_ActiveEdges=r;else if(l===null&&this.E2InsertsBeforeE1(this.m_ActiveEdges,r))r.PrevInAEL=null,r.NextInAEL=this.m_ActiveEdges,this.m_ActiveEdges.PrevInAEL=r,this.m_ActiveEdges=r;else{for(l===null&&(l=this.m_ActiveEdges);l.NextInAEL!==null&&!this.E2InsertsBeforeE1(l.NextInAEL,r);)l=l.NextInAEL;r.NextInAEL=l.NextInAEL,l.NextInAEL!==null&&(l.NextInAEL.PrevInAEL=r),r.PrevInAEL=l,l.NextInAEL=r}},n.Clipper.prototype.E2InsertsBeforeE1=function(r,l){return l.Curr.X===r.Curr.X?l.Top.Y>r.Top.Y?l.Top.X<n.Clipper.TopX(r,l.Top.Y):r.Top.X>n.Clipper.TopX(l,r.Top.Y):l.Curr.X<r.Curr.X},n.Clipper.prototype.IsEvenOddFillType=function(r){return r.PolyTyp===n.PolyType.ptSubject?this.m_SubjFillType===n.PolyFillType.pftEvenOdd:this.m_ClipFillType===n.PolyFillType.pftEvenOdd},n.Clipper.prototype.IsEvenOddAltFillType=function(r){return r.PolyTyp===n.PolyType.ptSubject?this.m_ClipFillType===n.PolyFillType.pftEvenOdd:this.m_SubjFillType===n.PolyFillType.pftEvenOdd},n.Clipper.prototype.IsContributing=function(r){var l,u;switch(r.PolyTyp===n.PolyType.ptSubject?(l=this.m_SubjFillType,u=this.m_ClipFillType):(l=this.m_ClipFillType,u=this.m_SubjFillType),l){case n.PolyFillType.pftEvenOdd:if(r.WindDelta===0&&r.WindCnt!==1)return!1;break;case n.PolyFillType.pftNonZero:if(Math.abs(r.WindCnt)!==1)return!1;break;case n.PolyFillType.pftPositive:if(r.WindCnt!==1)return!1;break;default:if(r.WindCnt!==-1)return!1;break}switch(this.m_ClipType){case n.ClipType.ctIntersection:switch(u){case n.PolyFillType.pftEvenOdd:case n.PolyFillType.pftNonZero:return r.WindCnt2!==0;case n.PolyFillType.pftPositive:return r.WindCnt2>0;default:return r.WindCnt2<0}case n.ClipType.ctUnion:switch(u){case n.PolyFillType.pftEvenOdd:case n.PolyFillType.pftNonZero:return r.WindCnt2===0;case n.PolyFillType.pftPositive:return r.WindCnt2<=0;default:return r.WindCnt2>=0}case n.ClipType.ctDifference:if(r.PolyTyp===n.PolyType.ptSubject)switch(u){case n.PolyFillType.pftEvenOdd:case n.PolyFillType.pftNonZero:return r.WindCnt2===0;case n.PolyFillType.pftPositive:return r.WindCnt2<=0;default:return r.WindCnt2>=0}else switch(u){case n.PolyFillType.pftEvenOdd:case n.PolyFillType.pftNonZero:return r.WindCnt2!==0;case n.PolyFillType.pftPositive:return r.WindCnt2>0;default:return r.WindCnt2<0}case n.ClipType.ctXor:if(r.WindDelta===0)switch(u){case n.PolyFillType.pftEvenOdd:case n.PolyFillType.pftNonZero:return r.WindCnt2===0;case n.PolyFillType.pftPositive:return r.WindCnt2<=0;default:return r.WindCnt2>=0}else return!0}return!0},n.Clipper.prototype.SetWindingCount=function(r){for(var l=r.PrevInAEL;l!==null&&(l.PolyTyp!==r.PolyTyp||l.WindDelta===0);)l=l.PrevInAEL;if(l===null){var u=r.PolyTyp===n.PolyType.ptSubject?this.m_SubjFillType:this.m_ClipFillType;r.WindDelta===0?r.WindCnt=u===n.PolyFillType.pftNegative?-1:1:r.WindCnt=r.WindDelta,r.WindCnt2=0,l=this.m_ActiveEdges}else if(r.WindDelta===0&&this.m_ClipType!==n.ClipType.ctUnion)r.WindCnt=1,r.WindCnt2=l.WindCnt2,l=l.NextInAEL;else if(this.IsEvenOddFillType(r)){if(r.WindDelta===0){for(var p=!0,M=l.PrevInAEL;M!==null;)M.PolyTyp===l.PolyTyp&&M.WindDelta!==0&&(p=!p),M=M.PrevInAEL;r.WindCnt=p?0:1}else r.WindCnt=r.WindDelta;r.WindCnt2=l.WindCnt2,l=l.NextInAEL}else l.WindCnt*l.WindDelta<0?Math.abs(l.WindCnt)>1?l.WindDelta*r.WindDelta<0?r.WindCnt=l.WindCnt:r.WindCnt=l.WindCnt+r.WindDelta:r.WindCnt=r.WindDelta===0?1:r.WindDelta:r.WindDelta===0?r.WindCnt=l.WindCnt<0?l.WindCnt-1:l.WindCnt+1:l.WindDelta*r.WindDelta<0?r.WindCnt=l.WindCnt:r.WindCnt=l.WindCnt+r.WindDelta,r.WindCnt2=l.WindCnt2,l=l.NextInAEL;if(this.IsEvenOddAltFillType(r))for(;l!==r;)l.WindDelta!==0&&(r.WindCnt2=r.WindCnt2===0?1:0),l=l.NextInAEL;else for(;l!==r;)r.WindCnt2+=l.WindDelta,l=l.NextInAEL},n.Clipper.prototype.AddEdgeToSEL=function(r){this.m_SortedEdges===null?(this.m_SortedEdges=r,r.PrevInSEL=null,r.NextInSEL=null):(r.NextInSEL=this.m_SortedEdges,r.PrevInSEL=null,this.m_SortedEdges.PrevInSEL=r,this.m_SortedEdges=r)},n.Clipper.prototype.PopEdgeFromSEL=function(r){if(r.v=this.m_SortedEdges,r.v===null)return!1;var l=r.v;return this.m_SortedEdges=r.v.NextInSEL,this.m_SortedEdges!==null&&(this.m_SortedEdges.PrevInSEL=null),l.NextInSEL=null,l.PrevInSEL=null,!0},n.Clipper.prototype.CopyAELToSEL=function(){var r=this.m_ActiveEdges;for(this.m_SortedEdges=r;r!==null;)r.PrevInSEL=r.PrevInAEL,r.NextInSEL=r.NextInAEL,r=r.NextInAEL},n.Clipper.prototype.SwapPositionsInSEL=function(r,l){if(!(r.NextInSEL===null&&r.PrevInSEL===null)&&!(l.NextInSEL===null&&l.PrevInSEL===null)){if(r.NextInSEL===l){var u=l.NextInSEL;u!==null&&(u.PrevInSEL=r);var p=r.PrevInSEL;p!==null&&(p.NextInSEL=l),l.PrevInSEL=p,l.NextInSEL=r,r.PrevInSEL=l,r.NextInSEL=u}else if(l.NextInSEL===r){var u=r.NextInSEL;u!==null&&(u.PrevInSEL=l);var p=l.PrevInSEL;p!==null&&(p.NextInSEL=r),r.PrevInSEL=p,r.NextInSEL=l,l.PrevInSEL=r,l.NextInSEL=u}else{var u=r.NextInSEL,p=r.PrevInSEL;r.NextInSEL=l.NextInSEL,r.NextInSEL!==null&&(r.NextInSEL.PrevInSEL=r),r.PrevInSEL=l.PrevInSEL,r.PrevInSEL!==null&&(r.PrevInSEL.NextInSEL=r),l.NextInSEL=u,l.NextInSEL!==null&&(l.NextInSEL.PrevInSEL=l),l.PrevInSEL=p,l.PrevInSEL!==null&&(l.PrevInSEL.NextInSEL=l)}r.PrevInSEL===null?this.m_SortedEdges=r:l.PrevInSEL===null&&(this.m_SortedEdges=l)}},n.Clipper.prototype.AddLocalMaxPoly=function(r,l,u){this.AddOutPt(r,u),l.WindDelta===0&&this.AddOutPt(l,u),r.OutIdx===l.OutIdx?(r.OutIdx=-1,l.OutIdx=-1):r.OutIdx<l.OutIdx?this.AppendPolygon(r,l):this.AppendPolygon(l,r)},n.Clipper.prototype.AddLocalMinPoly=function(r,l,u){var p,M,C;if(n.ClipperBase.IsHorizontal(l)||r.Dx>l.Dx?(p=this.AddOutPt(r,u),l.OutIdx=r.OutIdx,r.Side=n.EdgeSide.esLeft,l.Side=n.EdgeSide.esRight,M=r,M.PrevInAEL===l?C=l.PrevInAEL:C=M.PrevInAEL):(p=this.AddOutPt(l,u),r.OutIdx=l.OutIdx,r.Side=n.EdgeSide.esRight,l.Side=n.EdgeSide.esLeft,M=l,M.PrevInAEL===r?C=r.PrevInAEL:C=M.PrevInAEL),C!==null&&C.OutIdx>=0&&C.Top.Y<u.Y&&M.Top.Y<u.Y){var D=n.Clipper.TopX(C,u.Y),Y=n.Clipper.TopX(M,u.Y);if(D===Y&&M.WindDelta!==0&&C.WindDelta!==0&&n.ClipperBase.SlopesEqual5(new n.IntPoint2(D,u.Y),C.Top,new n.IntPoint2(Y,u.Y),M.Top,this.m_UseFullRange)){var q=this.AddOutPt(C,u);this.AddJoin(p,q,M.Top)}}return p},n.Clipper.prototype.AddOutPt=function(r,l){if(r.OutIdx<0){var u=this.CreateOutRec();u.IsOpen=r.WindDelta===0;var p=new n.OutPt;return u.Pts=p,p.Idx=u.Idx,p.Pt.X=l.X,p.Pt.Y=l.Y,n.use_xyz&&(p.Pt.Z=l.Z),p.Next=p,p.Prev=p,u.IsOpen||this.SetHoleState(r,u),r.OutIdx=u.Idx,p}else{var u=this.m_PolyOuts[r.OutIdx],M=u.Pts,C=r.Side===n.EdgeSide.esLeft;if(C&&n.IntPoint.op_Equality(l,M.Pt))return M;if(!C&&n.IntPoint.op_Equality(l,M.Prev.Pt))return M.Prev;var p=new n.OutPt;return p.Idx=u.Idx,p.Pt.X=l.X,p.Pt.Y=l.Y,n.use_xyz&&(p.Pt.Z=l.Z),p.Next=M,p.Prev=M.Prev,p.Prev.Next=p,M.Prev=p,C&&(u.Pts=p),p}},n.Clipper.prototype.GetLastOutPt=function(r){var l=this.m_PolyOuts[r.OutIdx];return r.Side===n.EdgeSide.esLeft?l.Pts:l.Pts.Prev},n.Clipper.prototype.SwapPoints=function(r,l){var u=new n.IntPoint1(r.Value);r.Value.X=l.Value.X,r.Value.Y=l.Value.Y,n.use_xyz&&(r.Value.Z=l.Value.Z),l.Value.X=u.X,l.Value.Y=u.Y,n.use_xyz&&(l.Value.Z=u.Z)},n.Clipper.prototype.HorzSegmentsOverlap=function(r,l,u,p){var M;return r>l&&(M=r,r=l,l=M),u>p&&(M=u,u=p,p=M),r<p&&u<l},n.Clipper.prototype.SetHoleState=function(r,l){for(var u=r.PrevInAEL,p=null;u!==null;)u.OutIdx>=0&&u.WindDelta!==0&&(p===null?p=u:p.OutIdx===u.OutIdx&&(p=null)),u=u.PrevInAEL;p===null?(l.FirstLeft=null,l.IsHole=!1):(l.FirstLeft=this.m_PolyOuts[p.OutIdx],l.IsHole=!l.FirstLeft.IsHole)},n.Clipper.prototype.GetDx=function(r,l){return r.Y===l.Y?n.ClipperBase.horizontal:(l.X-r.X)/(l.Y-r.Y)},n.Clipper.prototype.FirstIsBottomPt=function(r,l){for(var u=r.Prev;n.IntPoint.op_Equality(u.Pt,r.Pt)&&u!==r;)u=u.Prev;var p=Math.abs(this.GetDx(r.Pt,u.Pt));for(u=r.Next;n.IntPoint.op_Equality(u.Pt,r.Pt)&&u!==r;)u=u.Next;var M=Math.abs(this.GetDx(r.Pt,u.Pt));for(u=l.Prev;n.IntPoint.op_Equality(u.Pt,l.Pt)&&u!==l;)u=u.Prev;var C=Math.abs(this.GetDx(l.Pt,u.Pt));for(u=l.Next;n.IntPoint.op_Equality(u.Pt,l.Pt)&&u!==l;)u=u.Next;var D=Math.abs(this.GetDx(l.Pt,u.Pt));return Math.max(p,M)===Math.max(C,D)&&Math.min(p,M)===Math.min(C,D)?this.Area(r)>0:p>=C&&p>=D||M>=C&&M>=D},n.Clipper.prototype.GetBottomPt=function(r){for(var l=null,u=r.Next;u!==r;)u.Pt.Y>r.Pt.Y?(r=u,l=null):u.Pt.Y===r.Pt.Y&&u.Pt.X<=r.Pt.X&&(u.Pt.X<r.Pt.X?(l=null,r=u):u.Next!==r&&u.Prev!==r&&(l=u)),u=u.Next;if(l!==null)for(;l!==u;)for(this.FirstIsBottomPt(u,l)||(r=l),l=l.Next;n.IntPoint.op_Inequality(l.Pt,r.Pt);)l=l.Next;return r},n.Clipper.prototype.GetLowermostRec=function(r,l){r.BottomPt===null&&(r.BottomPt=this.GetBottomPt(r.Pts)),l.BottomPt===null&&(l.BottomPt=this.GetBottomPt(l.Pts));var u=r.BottomPt,p=l.BottomPt;return u.Pt.Y>p.Pt.Y?r:u.Pt.Y<p.Pt.Y?l:u.Pt.X<p.Pt.X?r:u.Pt.X>p.Pt.X||u.Next===u?l:p.Next===p||this.FirstIsBottomPt(u,p)?r:l},n.Clipper.prototype.OutRec1RightOfOutRec2=function(r,l){do if(r=r.FirstLeft,r===l)return!0;while(r!==null);return!1},n.Clipper.prototype.GetOutRec=function(r){for(var l=this.m_PolyOuts[r];l!==this.m_PolyOuts[l.Idx];)l=this.m_PolyOuts[l.Idx];return l},n.Clipper.prototype.AppendPolygon=function(r,l){var u=this.m_PolyOuts[r.OutIdx],p=this.m_PolyOuts[l.OutIdx],M;this.OutRec1RightOfOutRec2(u,p)?M=p:this.OutRec1RightOfOutRec2(p,u)?M=u:M=this.GetLowermostRec(u,p);var C=u.Pts,D=C.Prev,Y=p.Pts,q=Y.Prev;r.Side===n.EdgeSide.esLeft?l.Side===n.EdgeSide.esLeft?(this.ReversePolyPtLinks(Y),Y.Next=C,C.Prev=Y,D.Next=q,q.Prev=D,u.Pts=q):(q.Next=C,C.Prev=q,Y.Prev=D,D.Next=Y,u.Pts=Y):l.Side===n.EdgeSide.esRight?(this.ReversePolyPtLinks(Y),D.Next=q,q.Prev=D,Y.Next=C,C.Prev=Y):(D.Next=Y,Y.Prev=D,C.Prev=q,q.Next=C),u.BottomPt=null,M===p&&(p.FirstLeft!==u&&(u.FirstLeft=p.FirstLeft),u.IsHole=p.IsHole),p.Pts=null,p.BottomPt=null,p.FirstLeft=u;var nt=r.OutIdx,_t=l.OutIdx;r.OutIdx=-1,l.OutIdx=-1;for(var xt=this.m_ActiveEdges;xt!==null;){if(xt.OutIdx===_t){xt.OutIdx=nt,xt.Side=r.Side;break}xt=xt.NextInAEL}p.Idx=u.Idx},n.Clipper.prototype.ReversePolyPtLinks=function(r){if(r!==null){var l,u;l=r;do u=l.Next,l.Next=l.Prev,l.Prev=u,l=u;while(l!==r)}},n.Clipper.SwapSides=function(r,l){var u=r.Side;r.Side=l.Side,l.Side=u},n.Clipper.SwapPolyIndexes=function(r,l){var u=r.OutIdx;r.OutIdx=l.OutIdx,l.OutIdx=u},n.Clipper.prototype.IntersectEdges=function(r,l,u){var p=r.OutIdx>=0,M=l.OutIdx>=0;if(n.use_xyz&&this.SetZ(u,r,l),n.use_lines&&(r.WindDelta===0||l.WindDelta===0)){if(r.WindDelta===0&&l.WindDelta===0)return;r.PolyTyp===l.PolyTyp&&r.WindDelta!==l.WindDelta&&this.m_ClipType===n.ClipType.ctUnion?r.WindDelta===0?M&&(this.AddOutPt(r,u),p&&(r.OutIdx=-1)):p&&(this.AddOutPt(l,u),M&&(l.OutIdx=-1)):r.PolyTyp!==l.PolyTyp&&(r.WindDelta===0&&Math.abs(l.WindCnt)===1&&(this.m_ClipType!==n.ClipType.ctUnion||l.WindCnt2===0)?(this.AddOutPt(r,u),p&&(r.OutIdx=-1)):l.WindDelta===0&&Math.abs(r.WindCnt)===1&&(this.m_ClipType!==n.ClipType.ctUnion||r.WindCnt2===0)&&(this.AddOutPt(l,u),M&&(l.OutIdx=-1)));return}if(r.PolyTyp===l.PolyTyp)if(this.IsEvenOddFillType(r)){var C=r.WindCnt;r.WindCnt=l.WindCnt,l.WindCnt=C}else r.WindCnt+l.WindDelta===0?r.WindCnt=-r.WindCnt:r.WindCnt+=l.WindDelta,l.WindCnt-r.WindDelta===0?l.WindCnt=-l.WindCnt:l.WindCnt-=r.WindDelta;else this.IsEvenOddFillType(l)?r.WindCnt2=r.WindCnt2===0?1:0:r.WindCnt2+=l.WindDelta,this.IsEvenOddFillType(r)?l.WindCnt2=l.WindCnt2===0?1:0:l.WindCnt2-=r.WindDelta;var D,Y,q,nt;r.PolyTyp===n.PolyType.ptSubject?(D=this.m_SubjFillType,q=this.m_ClipFillType):(D=this.m_ClipFillType,q=this.m_SubjFillType),l.PolyTyp===n.PolyType.ptSubject?(Y=this.m_SubjFillType,nt=this.m_ClipFillType):(Y=this.m_ClipFillType,nt=this.m_SubjFillType);var _t,xt;switch(D){case n.PolyFillType.pftPositive:_t=r.WindCnt;break;case n.PolyFillType.pftNegative:_t=-r.WindCnt;break;default:_t=Math.abs(r.WindCnt);break}switch(Y){case n.PolyFillType.pftPositive:xt=l.WindCnt;break;case n.PolyFillType.pftNegative:xt=-l.WindCnt;break;default:xt=Math.abs(l.WindCnt);break}if(p&&M)_t!==0&&_t!==1||xt!==0&&xt!==1||r.PolyTyp!==l.PolyTyp&&this.m_ClipType!==n.ClipType.ctXor?this.AddLocalMaxPoly(r,l,u):(this.AddOutPt(r,u),this.AddOutPt(l,u),n.Clipper.SwapSides(r,l),n.Clipper.SwapPolyIndexes(r,l));else if(p)(xt===0||xt===1)&&(this.AddOutPt(r,u),n.Clipper.SwapSides(r,l),n.Clipper.SwapPolyIndexes(r,l));else if(M)(_t===0||_t===1)&&(this.AddOutPt(l,u),n.Clipper.SwapSides(r,l),n.Clipper.SwapPolyIndexes(r,l));else if((_t===0||_t===1)&&(xt===0||xt===1)){var St,Qt;switch(q){case n.PolyFillType.pftPositive:St=r.WindCnt2;break;case n.PolyFillType.pftNegative:St=-r.WindCnt2;break;default:St=Math.abs(r.WindCnt2);break}switch(nt){case n.PolyFillType.pftPositive:Qt=l.WindCnt2;break;case n.PolyFillType.pftNegative:Qt=-l.WindCnt2;break;default:Qt=Math.abs(l.WindCnt2);break}if(r.PolyTyp!==l.PolyTyp)this.AddLocalMinPoly(r,l,u);else if(_t===1&&xt===1)switch(this.m_ClipType){case n.ClipType.ctIntersection:St>0&&Qt>0&&this.AddLocalMinPoly(r,l,u);break;case n.ClipType.ctUnion:St<=0&&Qt<=0&&this.AddLocalMinPoly(r,l,u);break;case n.ClipType.ctDifference:(r.PolyTyp===n.PolyType.ptClip&&St>0&&Qt>0||r.PolyTyp===n.PolyType.ptSubject&&St<=0&&Qt<=0)&&this.AddLocalMinPoly(r,l,u);break;case n.ClipType.ctXor:this.AddLocalMinPoly(r,l,u);break}else n.Clipper.SwapSides(r,l)}},n.Clipper.prototype.DeleteFromSEL=function(r){var l=r.PrevInSEL,u=r.NextInSEL;l===null&&u===null&&r!==this.m_SortedEdges||(l!==null?l.NextInSEL=u:this.m_SortedEdges=u,u!==null&&(u.PrevInSEL=l),r.NextInSEL=null,r.PrevInSEL=null)},n.Clipper.prototype.ProcessHorizontals=function(){for(var r={};this.PopEdgeFromSEL(r);)this.ProcessHorizontal(r.v)},n.Clipper.prototype.GetHorzDirection=function(r,l){r.Bot.X<r.Top.X?(l.Left=r.Bot.X,l.Right=r.Top.X,l.Dir=n.Direction.dLeftToRight):(l.Left=r.Top.X,l.Right=r.Bot.X,l.Dir=n.Direction.dRightToLeft)},n.Clipper.prototype.ProcessHorizontal=function(r){var l={Dir:null,Left:null,Right:null};this.GetHorzDirection(r,l);for(var u=l.Dir,p=l.Left,M=l.Right,C=r.WindDelta===0,D=r,Y=null;D.NextInLML!==null&&n.ClipperBase.IsHorizontal(D.NextInLML);)D=D.NextInLML;D.NextInLML===null&&(Y=this.GetMaximaPair(D));var q=this.m_Maxima;if(q!==null)if(u===n.Direction.dLeftToRight){for(;q!==null&&q.X<=r.Bot.X;)q=q.Next;q!==null&&q.X>=D.Top.X&&(q=null)}else{for(;q.Next!==null&&q.Next.X<r.Bot.X;)q=q.Next;q.X<=D.Top.X&&(q=null)}for(var nt=null;;){for(var _t=r===D,xt=this.GetNextInAEL(r,u);xt!==null;){if(q!==null)if(u===n.Direction.dLeftToRight)for(;q!==null&&q.X<xt.Curr.X;)r.OutIdx>=0&&!C&&this.AddOutPt(r,new n.IntPoint2(q.X,r.Bot.Y)),q=q.Next;else for(;q!==null&&q.X>xt.Curr.X;)r.OutIdx>=0&&!C&&this.AddOutPt(r,new n.IntPoint2(q.X,r.Bot.Y)),q=q.Prev;if(u===n.Direction.dLeftToRight&&xt.Curr.X>M||u===n.Direction.dRightToLeft&&xt.Curr.X<p||xt.Curr.X===r.Top.X&&r.NextInLML!==null&&xt.Dx<r.NextInLML.Dx)break;if(r.OutIdx>=0&&!C){n.use_xyz&&(u===n.Direction.dLeftToRight?this.SetZ(xt.Curr,r,xt):this.SetZ(xt.Curr,xt,r)),nt=this.AddOutPt(r,xt.Curr);for(var St=this.m_SortedEdges;St!==null;){if(St.OutIdx>=0&&this.HorzSegmentsOverlap(r.Bot.X,r.Top.X,St.Bot.X,St.Top.X)){var Qt=this.GetLastOutPt(St);this.AddJoin(Qt,nt,St.Top)}St=St.NextInSEL}this.AddGhostJoin(nt,r.Bot)}if(xt===Y&&_t){r.OutIdx>=0&&this.AddLocalMaxPoly(r,Y,r.Top),this.DeleteFromAEL(r),this.DeleteFromAEL(Y);return}if(u===n.Direction.dLeftToRight){var he=new n.IntPoint2(xt.Curr.X,r.Curr.Y);this.IntersectEdges(r,xt,he)}else{var he=new n.IntPoint2(xt.Curr.X,r.Curr.Y);this.IntersectEdges(xt,r,he)}var _e=this.GetNextInAEL(xt,u);this.SwapPositionsInAEL(r,xt),xt=_e}if(r.NextInLML===null||!n.ClipperBase.IsHorizontal(r.NextInLML))break;r=this.UpdateEdgeIntoAEL(r),r.OutIdx>=0&&this.AddOutPt(r,r.Bot),l={Dir:u,Left:p,Right:M},this.GetHorzDirection(r,l),u=l.Dir,p=l.Left,M=l.Right}if(r.OutIdx>=0&&nt===null){nt=this.GetLastOutPt(r);for(var St=this.m_SortedEdges;St!==null;){if(St.OutIdx>=0&&this.HorzSegmentsOverlap(r.Bot.X,r.Top.X,St.Bot.X,St.Top.X)){var Qt=this.GetLastOutPt(St);this.AddJoin(Qt,nt,St.Top)}St=St.NextInSEL}this.AddGhostJoin(nt,r.Top)}if(r.NextInLML!==null)if(r.OutIdx>=0){if(nt=this.AddOutPt(r,r.Top),r=this.UpdateEdgeIntoAEL(r),r.WindDelta===0)return;var ze=r.PrevInAEL,_e=r.NextInAEL;if(ze!==null&&ze.Curr.X===r.Bot.X&&ze.Curr.Y===r.Bot.Y&&ze.WindDelta===0&&ze.OutIdx>=0&&ze.Curr.Y>ze.Top.Y&&n.ClipperBase.SlopesEqual3(r,ze,this.m_UseFullRange)){var Qt=this.AddOutPt(ze,r.Bot);this.AddJoin(nt,Qt,r.Top)}else if(_e!==null&&_e.Curr.X===r.Bot.X&&_e.Curr.Y===r.Bot.Y&&_e.WindDelta!==0&&_e.OutIdx>=0&&_e.Curr.Y>_e.Top.Y&&n.ClipperBase.SlopesEqual3(r,_e,this.m_UseFullRange)){var Qt=this.AddOutPt(_e,r.Bot);this.AddJoin(nt,Qt,r.Top)}}else r=this.UpdateEdgeIntoAEL(r);else r.OutIdx>=0&&this.AddOutPt(r,r.Top),this.DeleteFromAEL(r)},n.Clipper.prototype.GetNextInAEL=function(r,l){return l===n.Direction.dLeftToRight?r.NextInAEL:r.PrevInAEL},n.Clipper.prototype.IsMinima=function(r){return r!==null&&r.Prev.NextInLML!==r&&r.Next.NextInLML!==r},n.Clipper.prototype.IsMaxima=function(r,l){return r!==null&&r.Top.Y===l&&r.NextInLML===null},n.Clipper.prototype.IsIntermediate=function(r,l){return r.Top.Y===l&&r.NextInLML!==null},n.Clipper.prototype.GetMaximaPair=function(r){return n.IntPoint.op_Equality(r.Next.Top,r.Top)&&r.Next.NextInLML===null?r.Next:n.IntPoint.op_Equality(r.Prev.Top,r.Top)&&r.Prev.NextInLML===null?r.Prev:null},n.Clipper.prototype.GetMaximaPairEx=function(r){var l=this.GetMaximaPair(r);return l===null||l.OutIdx===n.ClipperBase.Skip||l.NextInAEL===l.PrevInAEL&&!n.ClipperBase.IsHorizontal(l)?null:l},n.Clipper.prototype.ProcessIntersections=function(r){if(this.m_ActiveEdges===null)return!0;try{if(this.BuildIntersectList(r),this.m_IntersectList.length===0)return!0;if(this.m_IntersectList.length===1||this.FixupIntersectionOrder())this.ProcessIntersectList();else return!1}catch{this.m_SortedEdges=null,this.m_IntersectList.length=0,n.Error("ProcessIntersections error")}return this.m_SortedEdges=null,!0},n.Clipper.prototype.BuildIntersectList=function(r){if(this.m_ActiveEdges!==null){var l=this.m_ActiveEdges;for(this.m_SortedEdges=l;l!==null;)l.PrevInSEL=l.PrevInAEL,l.NextInSEL=l.NextInAEL,l.Curr.X=n.Clipper.TopX(l,r),l=l.NextInAEL;for(var u=!0;u&&this.m_SortedEdges!==null;){for(u=!1,l=this.m_SortedEdges;l.NextInSEL!==null;){var p=l.NextInSEL,M=new n.IntPoint0;if(l.Curr.X>p.Curr.X){this.IntersectPoint(l,p,M),M.Y<r&&(M=new n.IntPoint2(n.Clipper.TopX(l,r),r));var C=new n.IntersectNode;C.Edge1=l,C.Edge2=p,C.Pt.X=M.X,C.Pt.Y=M.Y,n.use_xyz&&(C.Pt.Z=M.Z),this.m_IntersectList.push(C),this.SwapPositionsInSEL(l,p),u=!0}else l=p}if(l.PrevInSEL!==null)l.PrevInSEL.NextInSEL=null;else break}this.m_SortedEdges=null}},n.Clipper.prototype.EdgesAdjacent=function(r){return r.Edge1.NextInSEL===r.Edge2||r.Edge1.PrevInSEL===r.Edge2},n.Clipper.IntersectNodeSort=function(r,l){return l.Pt.Y-r.Pt.Y},n.Clipper.prototype.FixupIntersectionOrder=function(){this.m_IntersectList.sort(this.m_IntersectNodeComparer),this.CopyAELToSEL();for(var r=this.m_IntersectList.length,l=0;l<r;l++){if(!this.EdgesAdjacent(this.m_IntersectList[l])){for(var u=l+1;u<r&&!this.EdgesAdjacent(this.m_IntersectList[u]);)u++;if(u===r)return!1;var p=this.m_IntersectList[l];this.m_IntersectList[l]=this.m_IntersectList[u],this.m_IntersectList[u]=p}this.SwapPositionsInSEL(this.m_IntersectList[l].Edge1,this.m_IntersectList[l].Edge2)}return!0},n.Clipper.prototype.ProcessIntersectList=function(){for(var r=0,l=this.m_IntersectList.length;r<l;r++){var u=this.m_IntersectList[r];this.IntersectEdges(u.Edge1,u.Edge2,u.Pt),this.SwapPositionsInAEL(u.Edge1,u.Edge2)}this.m_IntersectList.length=0};var Wt=function(r){return r<0?Math.ceil(r-.5):Math.round(r)},Ce=function(r){return r<0?Math.ceil(r-.5):Math.floor(r+.5)},Qe=function(r){return r<0?-Math.round(Math.abs(r)):Math.round(r)},ke=function(r){return r<0?(r-=.5,r<-2147483648?Math.ceil(r):r|0):(r+=.5,r>2147483647?Math.floor(r):r|0)};s.msie?n.Clipper.Round=Wt:s.chromium?n.Clipper.Round=Qe:s.safari?n.Clipper.Round=ke:n.Clipper.Round=Ce,n.Clipper.TopX=function(r,l){return l===r.Top.Y?r.Top.X:r.Bot.X+n.Clipper.Round(r.Dx*(l-r.Bot.Y))},n.Clipper.prototype.IntersectPoint=function(r,l,u){u.X=0,u.Y=0;var p,M;if(r.Dx===l.Dx){u.Y=r.Curr.Y,u.X=n.Clipper.TopX(r,u.Y);return}if(r.Delta.X===0)u.X=r.Bot.X,n.ClipperBase.IsHorizontal(l)?u.Y=l.Bot.Y:(M=l.Bot.Y-l.Bot.X/l.Dx,u.Y=n.Clipper.Round(u.X/l.Dx+M));else if(l.Delta.X===0)u.X=l.Bot.X,n.ClipperBase.IsHorizontal(r)?u.Y=r.Bot.Y:(p=r.Bot.Y-r.Bot.X/r.Dx,u.Y=n.Clipper.Round(u.X/r.Dx+p));else{p=r.Bot.X-r.Bot.Y*r.Dx,M=l.Bot.X-l.Bot.Y*l.Dx;var C=(M-p)/(r.Dx-l.Dx);u.Y=n.Clipper.Round(C),Math.abs(r.Dx)<Math.abs(l.Dx)?u.X=n.Clipper.Round(r.Dx*C+p):u.X=n.Clipper.Round(l.Dx*C+M)}if(u.Y<r.Top.Y||u.Y<l.Top.Y){if(r.Top.Y>l.Top.Y)return u.Y=r.Top.Y,u.X=n.Clipper.TopX(l,r.Top.Y),u.X<r.Top.X;u.Y=l.Top.Y,Math.abs(r.Dx)<Math.abs(l.Dx)?u.X=n.Clipper.TopX(r,u.Y):u.X=n.Clipper.TopX(l,u.Y)}u.Y>r.Curr.Y&&(u.Y=r.Curr.Y,Math.abs(r.Dx)>Math.abs(l.Dx)?u.X=n.Clipper.TopX(l,u.Y):u.X=n.Clipper.TopX(r,u.Y))},n.Clipper.prototype.ProcessEdgesAtTopOfScanbeam=function(r){for(var l=this.m_ActiveEdges;l!==null;){var u=this.IsMaxima(l,r);if(u){var p=this.GetMaximaPairEx(l);u=p===null||!n.ClipperBase.IsHorizontal(p)}if(u){this.StrictlySimple&&this.InsertMaxima(l.Top.X);var M=l.PrevInAEL;this.DoMaxima(l),M===null?l=this.m_ActiveEdges:l=M.NextInAEL}else{if(this.IsIntermediate(l,r)&&n.ClipperBase.IsHorizontal(l.NextInLML)?(l=this.UpdateEdgeIntoAEL(l),l.OutIdx>=0&&this.AddOutPt(l,l.Bot),this.AddEdgeToSEL(l)):(l.Curr.X=n.Clipper.TopX(l,r),l.Curr.Y=r),n.use_xyz&&(l.Top.Y===r?l.Curr.Z=l.Top.Z:l.Bot.Y===r?l.Curr.Z=l.Bot.Z:l.Curr.Z=0),this.StrictlySimple){var M=l.PrevInAEL;if(l.OutIdx>=0&&l.WindDelta!==0&&M!==null&&M.OutIdx>=0&&M.Curr.X===l.Curr.X&&M.WindDelta!==0){var C=new n.IntPoint1(l.Curr);n.use_xyz&&this.SetZ(C,M,l);var D=this.AddOutPt(M,C),Y=this.AddOutPt(l,C);this.AddJoin(D,Y,C)}}l=l.NextInAEL}}for(this.ProcessHorizontals(),this.m_Maxima=null,l=this.m_ActiveEdges;l!==null;){if(this.IsIntermediate(l,r)){var D=null;l.OutIdx>=0&&(D=this.AddOutPt(l,l.Top)),l=this.UpdateEdgeIntoAEL(l);var M=l.PrevInAEL,q=l.NextInAEL;if(M!==null&&M.Curr.X===l.Bot.X&&M.Curr.Y===l.Bot.Y&&D!==null&&M.OutIdx>=0&&M.Curr.Y===M.Top.Y&&n.ClipperBase.SlopesEqual5(l.Curr,l.Top,M.Curr,M.Top,this.m_UseFullRange)&&l.WindDelta!==0&&M.WindDelta!==0){var Y=this.AddOutPt(ePrev2,l.Bot);this.AddJoin(D,Y,l.Top)}else if(q!==null&&q.Curr.X===l.Bot.X&&q.Curr.Y===l.Bot.Y&&D!==null&&q.OutIdx>=0&&q.Curr.Y===q.Top.Y&&n.ClipperBase.SlopesEqual5(l.Curr,l.Top,q.Curr,q.Top,this.m_UseFullRange)&&l.WindDelta!==0&&q.WindDelta!==0){var Y=this.AddOutPt(q,l.Bot);this.AddJoin(D,Y,l.Top)}}l=l.NextInAEL}},n.Clipper.prototype.DoMaxima=function(r){var l=this.GetMaximaPairEx(r);if(l===null){r.OutIdx>=0&&this.AddOutPt(r,r.Top),this.DeleteFromAEL(r);return}for(var u=r.NextInAEL;u!==null&&u!==l;)this.IntersectEdges(r,u,r.Top),this.SwapPositionsInAEL(r,u),u=r.NextInAEL;r.OutIdx===-1&&l.OutIdx===-1?(this.DeleteFromAEL(r),this.DeleteFromAEL(l)):r.OutIdx>=0&&l.OutIdx>=0?(r.OutIdx>=0&&this.AddLocalMaxPoly(r,l,r.Top),this.DeleteFromAEL(r),this.DeleteFromAEL(l)):n.use_lines&&r.WindDelta===0?(r.OutIdx>=0&&(this.AddOutPt(r,r.Top),r.OutIdx=n.ClipperBase.Unassigned),this.DeleteFromAEL(r),l.OutIdx>=0&&(this.AddOutPt(l,r.Top),l.OutIdx=n.ClipperBase.Unassigned),this.DeleteFromAEL(l)):n.Error("DoMaxima error")},n.Clipper.ReversePaths=function(r){for(var l=0,u=r.length;l<u;l++)r[l].reverse()},n.Clipper.Orientation=function(r){return n.Clipper.Area(r)>=0},n.Clipper.prototype.PointCount=function(r){if(r===null)return 0;var l=0,u=r;do l++,u=u.Next;while(u!==r);return l},n.Clipper.prototype.BuildResult=function(r){n.Clear(r);for(var l=0,u=this.m_PolyOuts.length;l<u;l++){var p=this.m_PolyOuts[l];if(p.Pts!==null){var M=p.Pts.Prev,C=this.PointCount(M);if(!(C<2)){for(var D=new Array(C),Y=0;Y<C;Y++)D[Y]=M.Pt,M=M.Prev;r.push(D)}}}},n.Clipper.prototype.BuildResult2=function(r){r.Clear();for(var l=0,u=this.m_PolyOuts.length;l<u;l++){var p=this.m_PolyOuts[l],M=this.PointCount(p.Pts);if(!(p.IsOpen&&M<2||!p.IsOpen&&M<3)){this.FixHoleLinkage(p);var C=new n.PolyNode;r.m_AllPolys.push(C),p.PolyNode=C,C.m_polygon.length=M;for(var D=p.Pts.Prev,Y=0;Y<M;Y++)C.m_polygon[Y]=D.Pt,D=D.Prev}}for(var l=0,u=this.m_PolyOuts.length;l<u;l++){var p=this.m_PolyOuts[l];p.PolyNode!==null&&(p.IsOpen?(p.PolyNode.IsOpen=!0,r.AddChild(p.PolyNode)):p.FirstLeft!==null&&p.FirstLeft.PolyNode!==null?p.FirstLeft.PolyNode.AddChild(p.PolyNode):r.AddChild(p.PolyNode))}},n.Clipper.prototype.FixupOutPolyline=function(r){for(var l=r.Pts,u=l.Prev;l!==u;)if(l=l.Next,n.IntPoint.op_Equality(l.Pt,l.Prev.Pt)){l===u&&(u=l.Prev);var p=l.Prev;p.Next=l.Next,l.Next.Prev=p,l=p}l===l.Prev&&(r.Pts=null)},n.Clipper.prototype.FixupOutPolygon=function(r){var l=null;r.BottomPt=null;for(var u=r.Pts,p=this.PreserveCollinear||this.StrictlySimple;;){if(u.Prev===u||u.Prev===u.Next){r.Pts=null;return}if(n.IntPoint.op_Equality(u.Pt,u.Next.Pt)||n.IntPoint.op_Equality(u.Pt,u.Prev.Pt)||n.ClipperBase.SlopesEqual4(u.Prev.Pt,u.Pt,u.Next.Pt,this.m_UseFullRange)&&(!p||!this.Pt2IsBetweenPt1AndPt3(u.Prev.Pt,u.Pt,u.Next.Pt)))l=null,u.Prev.Next=u.Next,u.Next.Prev=u.Prev,u=u.Prev;else{if(u===l)break;l===null&&(l=u),u=u.Next}}r.Pts=u},n.Clipper.prototype.DupOutPt=function(r,l){var u=new n.OutPt;return u.Pt.X=r.Pt.X,u.Pt.Y=r.Pt.Y,n.use_xyz&&(u.Pt.Z=r.Pt.Z),u.Idx=r.Idx,l?(u.Next=r.Next,u.Prev=r,r.Next.Prev=u,r.Next=u):(u.Prev=r.Prev,u.Next=r,r.Prev.Next=u,r.Prev=u),u},n.Clipper.prototype.GetOverlap=function(r,l,u,p,M){return r<l?u<p?(M.Left=Math.max(r,u),M.Right=Math.min(l,p)):(M.Left=Math.max(r,p),M.Right=Math.min(l,u)):u<p?(M.Left=Math.max(l,u),M.Right=Math.min(r,p)):(M.Left=Math.max(l,p),M.Right=Math.min(r,u)),M.Left<M.Right},n.Clipper.prototype.JoinHorz=function(r,l,u,p,M,C){var D=r.Pt.X>l.Pt.X?n.Direction.dRightToLeft:n.Direction.dLeftToRight,Y=u.Pt.X>p.Pt.X?n.Direction.dRightToLeft:n.Direction.dLeftToRight;if(D===Y)return!1;if(D===n.Direction.dLeftToRight){for(;r.Next.Pt.X<=M.X&&r.Next.Pt.X>=r.Pt.X&&r.Next.Pt.Y===M.Y;)r=r.Next;C&&r.Pt.X!==M.X&&(r=r.Next),l=this.DupOutPt(r,!C),n.IntPoint.op_Inequality(l.Pt,M)&&(r=l,r.Pt.X=M.X,r.Pt.Y=M.Y,n.use_xyz&&(r.Pt.Z=M.Z),l=this.DupOutPt(r,!C))}else{for(;r.Next.Pt.X>=M.X&&r.Next.Pt.X<=r.Pt.X&&r.Next.Pt.Y===M.Y;)r=r.Next;!C&&r.Pt.X!==M.X&&(r=r.Next),l=this.DupOutPt(r,C),n.IntPoint.op_Inequality(l.Pt,M)&&(r=l,r.Pt.X=M.X,r.Pt.Y=M.Y,n.use_xyz&&(r.Pt.Z=M.Z),l=this.DupOutPt(r,C))}if(Y===n.Direction.dLeftToRight){for(;u.Next.Pt.X<=M.X&&u.Next.Pt.X>=u.Pt.X&&u.Next.Pt.Y===M.Y;)u=u.Next;C&&u.Pt.X!==M.X&&(u=u.Next),p=this.DupOutPt(u,!C),n.IntPoint.op_Inequality(p.Pt,M)&&(u=p,u.Pt.X=M.X,u.Pt.Y=M.Y,n.use_xyz&&(u.Pt.Z=M.Z),p=this.DupOutPt(u,!C))}else{for(;u.Next.Pt.X>=M.X&&u.Next.Pt.X<=u.Pt.X&&u.Next.Pt.Y===M.Y;)u=u.Next;!C&&u.Pt.X!==M.X&&(u=u.Next),p=this.DupOutPt(u,C),n.IntPoint.op_Inequality(p.Pt,M)&&(u=p,u.Pt.X=M.X,u.Pt.Y=M.Y,n.use_xyz&&(u.Pt.Z=M.Z),p=this.DupOutPt(u,C))}return D===n.Direction.dLeftToRight===C?(r.Prev=u,u.Next=r,l.Next=p,p.Prev=l):(r.Next=u,u.Prev=r,l.Prev=p,p.Next=l),!0},n.Clipper.prototype.JoinPoints=function(r,l,u){var p=r.OutPt1,M=new n.OutPt,C=r.OutPt2,D=new n.OutPt,Y=r.OutPt1.Pt.Y===r.OffPt.Y;if(Y&&n.IntPoint.op_Equality(r.OffPt,r.OutPt1.Pt)&&n.IntPoint.op_Equality(r.OffPt,r.OutPt2.Pt)){if(l!==u)return!1;for(M=r.OutPt1.Next;M!==p&&n.IntPoint.op_Equality(M.Pt,r.OffPt);)M=M.Next;var q=M.Pt.Y>r.OffPt.Y;for(D=r.OutPt2.Next;D!==C&&n.IntPoint.op_Equality(D.Pt,r.OffPt);)D=D.Next;var nt=D.Pt.Y>r.OffPt.Y;return q===nt?!1:q?(M=this.DupOutPt(p,!1),D=this.DupOutPt(C,!0),p.Prev=C,C.Next=p,M.Next=D,D.Prev=M,r.OutPt1=p,r.OutPt2=M,!0):(M=this.DupOutPt(p,!0),D=this.DupOutPt(C,!1),p.Next=C,C.Prev=p,M.Prev=D,D.Next=M,r.OutPt1=p,r.OutPt2=M,!0)}else if(Y){for(M=p;p.Prev.Pt.Y===p.Pt.Y&&p.Prev!==M&&p.Prev!==C;)p=p.Prev;for(;M.Next.Pt.Y===M.Pt.Y&&M.Next!==p&&M.Next!==C;)M=M.Next;if(M.Next===p||M.Next===C)return!1;for(D=C;C.Prev.Pt.Y===C.Pt.Y&&C.Prev!==D&&C.Prev!==M;)C=C.Prev;for(;D.Next.Pt.Y===D.Pt.Y&&D.Next!==C&&D.Next!==p;)D=D.Next;if(D.Next===C||D.Next===p)return!1;var _t={Left:null,Right:null};if(!this.GetOverlap(p.Pt.X,M.Pt.X,C.Pt.X,D.Pt.X,_t))return!1;var xt=_t.Left,St=_t.Right,Qt=new n.IntPoint0,he;return p.Pt.X>=xt&&p.Pt.X<=St?(Qt.X=p.Pt.X,Qt.Y=p.Pt.Y,n.use_xyz&&(Qt.Z=p.Pt.Z),he=p.Pt.X>M.Pt.X):C.Pt.X>=xt&&C.Pt.X<=St?(Qt.X=C.Pt.X,Qt.Y=C.Pt.Y,n.use_xyz&&(Qt.Z=C.Pt.Z),he=C.Pt.X>D.Pt.X):M.Pt.X>=xt&&M.Pt.X<=St?(Qt.X=M.Pt.X,Qt.Y=M.Pt.Y,n.use_xyz&&(Qt.Z=M.Pt.Z),he=M.Pt.X>p.Pt.X):(Qt.X=D.Pt.X,Qt.Y=D.Pt.Y,n.use_xyz&&(Qt.Z=D.Pt.Z),he=D.Pt.X>C.Pt.X),r.OutPt1=p,r.OutPt2=C,this.JoinHorz(p,M,C,D,Qt,he)}else{for(M=p.Next;n.IntPoint.op_Equality(M.Pt,p.Pt)&&M!==p;)M=M.Next;var _e=M.Pt.Y>p.Pt.Y||!n.ClipperBase.SlopesEqual4(p.Pt,M.Pt,r.OffPt,this.m_UseFullRange);if(_e){for(M=p.Prev;n.IntPoint.op_Equality(M.Pt,p.Pt)&&M!==p;)M=M.Prev;if(M.Pt.Y>p.Pt.Y||!n.ClipperBase.SlopesEqual4(p.Pt,M.Pt,r.OffPt,this.m_UseFullRange))return!1}for(D=C.Next;n.IntPoint.op_Equality(D.Pt,C.Pt)&&D!==C;)D=D.Next;var ze=D.Pt.Y>C.Pt.Y||!n.ClipperBase.SlopesEqual4(C.Pt,D.Pt,r.OffPt,this.m_UseFullRange);if(ze){for(D=C.Prev;n.IntPoint.op_Equality(D.Pt,C.Pt)&&D!==C;)D=D.Prev;if(D.Pt.Y>C.Pt.Y||!n.ClipperBase.SlopesEqual4(C.Pt,D.Pt,r.OffPt,this.m_UseFullRange))return!1}return M===p||D===C||M===D||l===u&&_e===ze?!1:_e?(M=this.DupOutPt(p,!1),D=this.DupOutPt(C,!0),p.Prev=C,C.Next=p,M.Next=D,D.Prev=M,r.OutPt1=p,r.OutPt2=M,!0):(M=this.DupOutPt(p,!0),D=this.DupOutPt(C,!1),p.Next=C,C.Prev=p,M.Prev=D,D.Next=M,r.OutPt1=p,r.OutPt2=M,!0)}},n.Clipper.GetBounds=function(r){for(var l=0,u=r.length;l<u&&r[l].length===0;)l++;if(l===u)return new n.IntRect(0,0,0,0);var p=new n.IntRect;for(p.left=r[l][0].X,p.right=p.left,p.top=r[l][0].Y,p.bottom=p.top;l<u;l++)for(var M=0,C=r[l].length;M<C;M++)r[l][M].X<p.left?p.left=r[l][M].X:r[l][M].X>p.right&&(p.right=r[l][M].X),r[l][M].Y<p.top?p.top=r[l][M].Y:r[l][M].Y>p.bottom&&(p.bottom=r[l][M].Y);return p},n.Clipper.prototype.GetBounds2=function(r){var l=r,u=new n.IntRect;for(u.left=r.Pt.X,u.right=r.Pt.X,u.top=r.Pt.Y,u.bottom=r.Pt.Y,r=r.Next;r!==l;)r.Pt.X<u.left&&(u.left=r.Pt.X),r.Pt.X>u.right&&(u.right=r.Pt.X),r.Pt.Y<u.top&&(u.top=r.Pt.Y),r.Pt.Y>u.bottom&&(u.bottom=r.Pt.Y),r=r.Next;return u},n.Clipper.PointInPolygon=function(r,l){var u=0,p=l.length;if(p<3)return 0;for(var M=l[0],C=1;C<=p;++C){var D=C===p?l[0]:l[C];if(D.Y===r.Y&&(D.X===r.X||M.Y===r.Y&&D.X>r.X==M.X<r.X))return-1;if(M.Y<r.Y!=D.Y<r.Y){if(M.X>=r.X)if(D.X>r.X)u=1-u;else{var Y=(M.X-r.X)*(D.Y-r.Y)-(D.X-r.X)*(M.Y-r.Y);if(Y===0)return-1;Y>0==D.Y>M.Y&&(u=1-u)}else if(D.X>r.X){var Y=(M.X-r.X)*(D.Y-r.Y)-(D.X-r.X)*(M.Y-r.Y);if(Y===0)return-1;Y>0==D.Y>M.Y&&(u=1-u)}}M=D}return u},n.Clipper.prototype.PointInPolygon=function(r,l){var u=0,p=l,M=r.X,C=r.Y,D=l.Pt.X,Y=l.Pt.Y;do{l=l.Next;var q=l.Pt.X,nt=l.Pt.Y;if(nt===C&&(q===M||Y===C&&q>M==D<M))return-1;if(Y<C!=nt<C){if(D>=M)if(q>M)u=1-u;else{var _t=(D-M)*(nt-C)-(q-M)*(Y-C);if(_t===0)return-1;_t>0==nt>Y&&(u=1-u)}else if(q>M){var _t=(D-M)*(nt-C)-(q-M)*(Y-C);if(_t===0)return-1;_t>0==nt>Y&&(u=1-u)}}D=q,Y=nt}while(p!==l);return u},n.Clipper.prototype.Poly2ContainsPoly1=function(r,l){var u=r;do{var p=this.PointInPolygon(u.Pt,l);if(p>=0)return p>0;u=u.Next}while(u!==r);return!0},n.Clipper.prototype.FixupFirstLefts1=function(r,l){for(var u,p,M=0,C=this.m_PolyOuts.length;M<C;M++)u=this.m_PolyOuts[M],p=n.Clipper.ParseFirstLeft(u.FirstLeft),u.Pts!==null&&p===r&&this.Poly2ContainsPoly1(u.Pts,l.Pts)&&(u.FirstLeft=l)},n.Clipper.prototype.FixupFirstLefts2=function(r,l){for(var u=l.FirstLeft,p,M,C=0,D=this.m_PolyOuts.length;C<D;C++)p=this.m_PolyOuts[C],!(p.Pts===null||p===l||p===r)&&(M=n.Clipper.ParseFirstLeft(p.FirstLeft),!(M!==u&&M!==r&&M!==l)&&(this.Poly2ContainsPoly1(p.Pts,r.Pts)?p.FirstLeft=r:this.Poly2ContainsPoly1(p.Pts,l.Pts)?p.FirstLeft=l:(p.FirstLeft===r||p.FirstLeft===l)&&(p.FirstLeft=u)))},n.Clipper.prototype.FixupFirstLefts3=function(r,l){for(var u,p,M=0,C=this.m_PolyOuts.length;M<C;M++)u=this.m_PolyOuts[M],p=n.Clipper.ParseFirstLeft(u.FirstLeft),u.Pts!==null&&p===r&&(u.FirstLeft=l)},n.Clipper.ParseFirstLeft=function(r){for(;r!==null&&r.Pts===null;)r=r.FirstLeft;return r},n.Clipper.prototype.JoinCommonEdges=function(){for(var r=0,l=this.m_Joins.length;r<l;r++){var u=this.m_Joins[r],p=this.GetOutRec(u.OutPt1.Idx),M=this.GetOutRec(u.OutPt2.Idx);if(!(p.Pts===null||M.Pts===null)&&!(p.IsOpen||M.IsOpen)){var C;p===M?C=p:this.OutRec1RightOfOutRec2(p,M)?C=M:this.OutRec1RightOfOutRec2(M,p)?C=p:C=this.GetLowermostRec(p,M),this.JoinPoints(u,p,M)&&(p===M?(p.Pts=u.OutPt1,p.BottomPt=null,M=this.CreateOutRec(),M.Pts=u.OutPt2,this.UpdateOutPtIdxs(M),this.Poly2ContainsPoly1(M.Pts,p.Pts)?(M.IsHole=!p.IsHole,M.FirstLeft=p,this.m_UsingPolyTree&&this.FixupFirstLefts2(M,p),(M.IsHole^this.ReverseSolution)==this.Area$1(M)>0&&this.ReversePolyPtLinks(M.Pts)):this.Poly2ContainsPoly1(p.Pts,M.Pts)?(M.IsHole=p.IsHole,p.IsHole=!M.IsHole,M.FirstLeft=p.FirstLeft,p.FirstLeft=M,this.m_UsingPolyTree&&this.FixupFirstLefts2(p,M),(p.IsHole^this.ReverseSolution)==this.Area$1(p)>0&&this.ReversePolyPtLinks(p.Pts)):(M.IsHole=p.IsHole,M.FirstLeft=p.FirstLeft,this.m_UsingPolyTree&&this.FixupFirstLefts1(p,M))):(M.Pts=null,M.BottomPt=null,M.Idx=p.Idx,p.IsHole=C.IsHole,C===M&&(p.FirstLeft=M.FirstLeft),M.FirstLeft=p,this.m_UsingPolyTree&&this.FixupFirstLefts3(M,p)))}}},n.Clipper.prototype.UpdateOutPtIdxs=function(r){var l=r.Pts;do l.Idx=r.Idx,l=l.Prev;while(l!==r.Pts)},n.Clipper.prototype.DoSimplePolygons=function(){for(var r=0;r<this.m_PolyOuts.length;){var l=this.m_PolyOuts[r++],u=l.Pts;if(!(u===null||l.IsOpen))do{for(var p=u.Next;p!==l.Pts;){if(n.IntPoint.op_Equality(u.Pt,p.Pt)&&p.Next!==u&&p.Prev!==u){var M=u.Prev,C=p.Prev;u.Prev=C,C.Next=u,p.Prev=M,M.Next=p,l.Pts=u;var D=this.CreateOutRec();D.Pts=p,this.UpdateOutPtIdxs(D),this.Poly2ContainsPoly1(D.Pts,l.Pts)?(D.IsHole=!l.IsHole,D.FirstLeft=l,this.m_UsingPolyTree&&this.FixupFirstLefts2(D,l)):this.Poly2ContainsPoly1(l.Pts,D.Pts)?(D.IsHole=l.IsHole,l.IsHole=!D.IsHole,D.FirstLeft=l.FirstLeft,l.FirstLeft=D,this.m_UsingPolyTree&&this.FixupFirstLefts2(l,D)):(D.IsHole=l.IsHole,D.FirstLeft=l.FirstLeft,this.m_UsingPolyTree&&this.FixupFirstLefts1(l,D)),p=u}p=p.Next}u=u.Next}while(u!==l.Pts)}},n.Clipper.Area=function(r){if(!Array.isArray(r))return 0;var l=r.length;if(l<3)return 0;for(var u=0,p=0,M=l-1;p<l;++p)u+=(r[M].X+r[p].X)*(r[M].Y-r[p].Y),M=p;return-u*.5},n.Clipper.prototype.Area=function(r){var l=r;if(r===null)return 0;var u=0;do u=u+(r.Prev.Pt.X+r.Pt.X)*(r.Prev.Pt.Y-r.Pt.Y),r=r.Next;while(r!==l);return u*.5},n.Clipper.prototype.Area$1=function(r){return this.Area(r.Pts)},n.Clipper.SimplifyPolygon=function(r,l){var u=new Array,p=new n.Clipper(0);return p.StrictlySimple=!0,p.AddPath(r,n.PolyType.ptSubject,!0),p.Execute(n.ClipType.ctUnion,u,l,l),u},n.Clipper.SimplifyPolygons=function(r,l){typeof l>"u"&&(l=n.PolyFillType.pftEvenOdd);var u=new Array,p=new n.Clipper(0);return p.StrictlySimple=!0,p.AddPaths(r,n.PolyType.ptSubject,!0),p.Execute(n.ClipType.ctUnion,u,l,l),u},n.Clipper.DistanceSqrd=function(r,l){var u=r.X-l.X,p=r.Y-l.Y;return u*u+p*p},n.Clipper.DistanceFromLineSqrd=function(r,l,u){var p=l.Y-u.Y,M=u.X-l.X,C=p*l.X+M*l.Y;return C=p*r.X+M*r.Y-C,C*C/(p*p+M*M)},n.Clipper.SlopesNearCollinear=function(r,l,u,p){return Math.abs(r.X-l.X)>Math.abs(r.Y-l.Y)?r.X>l.X==r.X<u.X?n.Clipper.DistanceFromLineSqrd(r,l,u)<p:l.X>r.X==l.X<u.X?n.Clipper.DistanceFromLineSqrd(l,r,u)<p:n.Clipper.DistanceFromLineSqrd(u,r,l)<p:r.Y>l.Y==r.Y<u.Y?n.Clipper.DistanceFromLineSqrd(r,l,u)<p:l.Y>r.Y==l.Y<u.Y?n.Clipper.DistanceFromLineSqrd(l,r,u)<p:n.Clipper.DistanceFromLineSqrd(u,r,l)<p},n.Clipper.PointsAreClose=function(r,l,u){var p=r.X-l.X,M=r.Y-l.Y;return p*p+M*M<=u},n.Clipper.ExcludeOp=function(r){var l=r.Prev;return l.Next=r.Next,r.Next.Prev=l,l.Idx=0,l},n.Clipper.CleanPolygon=function(r,l){typeof l>"u"&&(l=1.415);var u=r.length;if(u===0)return new Array;for(var p=new Array(u),M=0;M<u;++M)p[M]=new n.OutPt;for(var M=0;M<u;++M)p[M].Pt=r[M],p[M].Next=p[(M+1)%u],p[M].Next.Prev=p[M],p[M].Idx=0;for(var C=l*l,D=p[0];D.Idx===0&&D.Next!==D.Prev;)n.Clipper.PointsAreClose(D.Pt,D.Prev.Pt,C)?(D=n.Clipper.ExcludeOp(D),u--):n.Clipper.PointsAreClose(D.Prev.Pt,D.Next.Pt,C)?(n.Clipper.ExcludeOp(D.Next),D=n.Clipper.ExcludeOp(D),u-=2):n.Clipper.SlopesNearCollinear(D.Prev.Pt,D.Pt,D.Next.Pt,C)?(D=n.Clipper.ExcludeOp(D),u--):(D.Idx=1,D=D.Next);u<3&&(u=0);for(var Y=new Array(u),M=0;M<u;++M)Y[M]=new n.IntPoint1(D.Pt),D=D.Next;return p=null,Y},n.Clipper.CleanPolygons=function(r,l){for(var u=new Array(r.length),p=0,M=r.length;p<M;p++)u[p]=n.Clipper.CleanPolygon(r[p],l);return u},n.Clipper.Minkowski=function(r,l,u,p){var M=p?1:0,C=r.length,D=l.length,Y=new Array;if(u)for(var q=0;q<D;q++){for(var nt=new Array(C),_t=0,xt=r.length,St=r[_t];_t<xt;_t++,St=r[_t])nt[_t]=new n.IntPoint2(l[q].X+St.X,l[q].Y+St.Y);Y.push(nt)}else for(var q=0;q<D;q++){for(var nt=new Array(C),_t=0,xt=r.length,St=r[_t];_t<xt;_t++,St=r[_t])nt[_t]=new n.IntPoint2(l[q].X-St.X,l[q].Y-St.Y);Y.push(nt)}for(var Qt=new Array,q=0;q<D-1+M;q++)for(var _t=0;_t<C;_t++){var he=new Array;he.push(Y[q%D][_t%C]),he.push(Y[(q+1)%D][_t%C]),he.push(Y[(q+1)%D][(_t+1)%C]),he.push(Y[q%D][(_t+1)%C]),n.Clipper.Orientation(he)||he.reverse(),Qt.push(he)}return Qt},n.Clipper.MinkowskiSum=function(r,l,u){if(l[0]instanceof Array){for(var M=l,D=new n.Paths,C=new n.Clipper,Y=0;Y<M.length;++Y){var q=n.Clipper.Minkowski(r,M[Y],!0,u);if(C.AddPaths(q,n.PolyType.ptSubject,!0),u){var p=n.Clipper.TranslatePath(M[Y],r[0]);C.AddPath(p,n.PolyType.ptClip,!0)}}return C.Execute(n.ClipType.ctUnion,D,n.PolyFillType.pftNonZero,n.PolyFillType.pftNonZero),D}else{var p=l,M=n.Clipper.Minkowski(r,p,!0,u),C=new n.Clipper;return C.AddPaths(M,n.PolyType.ptSubject,!0),C.Execute(n.ClipType.ctUnion,M,n.PolyFillType.pftNonZero,n.PolyFillType.pftNonZero),M}},n.Clipper.TranslatePath=function(r,l){for(var u=new n.Path,p=0;p<r.length;p++)u.push(new n.IntPoint2(r[p].X+l.X,r[p].Y+l.Y));return u},n.Clipper.MinkowskiDiff=function(r,l){var u=n.Clipper.Minkowski(r,l,!1,!0),p=new n.Clipper;return p.AddPaths(u,n.PolyType.ptSubject,!0),p.Execute(n.ClipType.ctUnion,u,n.PolyFillType.pftNonZero,n.PolyFillType.pftNonZero),u},n.Clipper.PolyTreeToPaths=function(r){var l=new Array;return n.Clipper.AddPolyNodeToPaths(r,n.Clipper.NodeType.ntAny,l),l},n.Clipper.AddPolyNodeToPaths=function(r,l,u){var p=!0;switch(l){case n.Clipper.NodeType.ntOpen:return;case n.Clipper.NodeType.ntClosed:p=!r.IsOpen;break;default:break}r.m_polygon.length>0&&p&&u.push(r.m_polygon);for(var M=0,C=r.Childs(),D=C.length,Y=C[M];M<D;M++,Y=C[M])n.Clipper.AddPolyNodeToPaths(Y,l,u)},n.Clipper.OpenPathsFromPolyTree=function(r){for(var l=new n.Paths,u=0,p=r.ChildCount();u<p;u++)r.Childs()[u].IsOpen&&l.push(r.Childs()[u].m_polygon);return l},n.Clipper.ClosedPathsFromPolyTree=function(r){var l=new n.Paths;return n.Clipper.AddPolyNodeToPaths(r,n.Clipper.NodeType.ntClosed,l),l},ye(n.Clipper,n.ClipperBase),n.Clipper.NodeType={ntAny:0,ntOpen:1,ntClosed:2},n.ClipperOffset=function(r,l){typeof r>"u"&&(r=2),typeof l>"u"&&(l=n.ClipperOffset.def_arc_tolerance),this.m_destPolys=new n.Paths,this.m_srcPoly=new n.Path,this.m_destPoly=new n.Path,this.m_normals=new Array,this.m_delta=0,this.m_sinA=0,this.m_sin=0,this.m_cos=0,this.m_miterLim=0,this.m_StepsPerRad=0,this.m_lowest=new n.IntPoint0,this.m_polyNodes=new n.PolyNode,this.MiterLimit=r,this.ArcTolerance=l,this.m_lowest.X=-1},n.ClipperOffset.two_pi=6.28318530717959,n.ClipperOffset.def_arc_tolerance=.25,n.ClipperOffset.prototype.Clear=function(){n.Clear(this.m_polyNodes.Childs()),this.m_lowest.X=-1},n.ClipperOffset.Round=n.Clipper.Round,n.ClipperOffset.prototype.AddPath=function(r,l,u){var p=r.length-1;if(!(p<0)){var M=new n.PolyNode;if(M.m_jointype=l,M.m_endtype=u,u===n.EndType.etClosedLine||u===n.EndType.etClosedPolygon)for(;p>0&&n.IntPoint.op_Equality(r[0],r[p]);)p--;M.m_polygon.push(r[0]);for(var C=0,D=0,Y=1;Y<=p;Y++)n.IntPoint.op_Inequality(M.m_polygon[C],r[Y])&&(C++,M.m_polygon.push(r[Y]),(r[Y].Y>M.m_polygon[D].Y||r[Y].Y===M.m_polygon[D].Y&&r[Y].X<M.m_polygon[D].X)&&(D=C));if(!(u===n.EndType.etClosedPolygon&&C<2)&&(this.m_polyNodes.AddChild(M),u===n.EndType.etClosedPolygon))if(this.m_lowest.X<0)this.m_lowest=new n.IntPoint2(this.m_polyNodes.ChildCount()-1,D);else{var q=this.m_polyNodes.Childs()[this.m_lowest.X].m_polygon[this.m_lowest.Y];(M.m_polygon[D].Y>q.Y||M.m_polygon[D].Y===q.Y&&M.m_polygon[D].X<q.X)&&(this.m_lowest=new n.IntPoint2(this.m_polyNodes.ChildCount()-1,D))}}},n.ClipperOffset.prototype.AddPaths=function(r,l,u){for(var p=0,M=r.length;p<M;p++)this.AddPath(r[p],l,u)},n.ClipperOffset.prototype.FixOrientations=function(){if(this.m_lowest.X>=0&&!n.Clipper.Orientation(this.m_polyNodes.Childs()[this.m_lowest.X].m_polygon))for(var r=0;r<this.m_polyNodes.ChildCount();r++){var l=this.m_polyNodes.Childs()[r];(l.m_endtype===n.EndType.etClosedPolygon||l.m_endtype===n.EndType.etClosedLine&&n.Clipper.Orientation(l.m_polygon))&&l.m_polygon.reverse()}else for(var r=0;r<this.m_polyNodes.ChildCount();r++){var l=this.m_polyNodes.Childs()[r];l.m_endtype===n.EndType.etClosedLine&&!n.Clipper.Orientation(l.m_polygon)&&l.m_polygon.reverse()}},n.ClipperOffset.GetUnitNormal=function(r,l){var u=l.X-r.X,p=l.Y-r.Y;if(u===0&&p===0)return new n.DoublePoint2(0,0);var M=1/Math.sqrt(u*u+p*p);return u*=M,p*=M,new n.DoublePoint2(p,-u)},n.ClipperOffset.prototype.DoOffset=function(r){if(this.m_destPolys=new Array,this.m_delta=r,n.ClipperBase.near_zero(r)){for(var l=0;l<this.m_polyNodes.ChildCount();l++){var u=this.m_polyNodes.Childs()[l];u.m_endtype===n.EndType.etClosedPolygon&&this.m_destPolys.push(u.m_polygon)}return}this.MiterLimit>2?this.m_miterLim=2/(this.MiterLimit*this.MiterLimit):this.m_miterLim=.5;var p;this.ArcTolerance<=0?p=n.ClipperOffset.def_arc_tolerance:this.ArcTolerance>Math.abs(r)*n.ClipperOffset.def_arc_tolerance?p=Math.abs(r)*n.ClipperOffset.def_arc_tolerance:p=this.ArcTolerance;var M=3.14159265358979/Math.acos(1-p/Math.abs(r));this.m_sin=Math.sin(n.ClipperOffset.two_pi/M),this.m_cos=Math.cos(n.ClipperOffset.two_pi/M),this.m_StepsPerRad=M/n.ClipperOffset.two_pi,r<0&&(this.m_sin=-this.m_sin);for(var l=0;l<this.m_polyNodes.ChildCount();l++){var u=this.m_polyNodes.Childs()[l];this.m_srcPoly=u.m_polygon;var C=this.m_srcPoly.length;if(!(C===0||r<=0&&(C<3||u.m_endtype!==n.EndType.etClosedPolygon))){if(this.m_destPoly=new Array,C===1){if(u.m_jointype===n.JoinType.jtRound)for(var D=1,Y=0,q=1;q<=M;q++){this.m_destPoly.push(new n.IntPoint2(n.ClipperOffset.Round(this.m_srcPoly[0].X+D*r),n.ClipperOffset.Round(this.m_srcPoly[0].Y+Y*r)));var nt=D;D=D*this.m_cos-this.m_sin*Y,Y=nt*this.m_sin+Y*this.m_cos}else for(var D=-1,Y=-1,q=0;q<4;++q)this.m_destPoly.push(new n.IntPoint2(n.ClipperOffset.Round(this.m_srcPoly[0].X+D*r),n.ClipperOffset.Round(this.m_srcPoly[0].Y+Y*r))),D<0?D=1:Y<0?Y=1:D=-1;this.m_destPolys.push(this.m_destPoly);continue}this.m_normals.length=0;for(var q=0;q<C-1;q++)this.m_normals.push(n.ClipperOffset.GetUnitNormal(this.m_srcPoly[q],this.m_srcPoly[q+1]));if(u.m_endtype===n.EndType.etClosedLine||u.m_endtype===n.EndType.etClosedPolygon?this.m_normals.push(n.ClipperOffset.GetUnitNormal(this.m_srcPoly[C-1],this.m_srcPoly[0])):this.m_normals.push(new n.DoublePoint1(this.m_normals[C-2])),u.m_endtype===n.EndType.etClosedPolygon){for(var _t=C-1,q=0;q<C;q++)_t=this.OffsetPoint(q,_t,u.m_jointype);this.m_destPolys.push(this.m_destPoly)}else if(u.m_endtype===n.EndType.etClosedLine){for(var _t=C-1,q=0;q<C;q++)_t=this.OffsetPoint(q,_t,u.m_jointype);this.m_destPolys.push(this.m_destPoly),this.m_destPoly=new Array;for(var xt=this.m_normals[C-1],q=C-1;q>0;q--)this.m_normals[q]=new n.DoublePoint2(-this.m_normals[q-1].X,-this.m_normals[q-1].Y);this.m_normals[0]=new n.DoublePoint2(-xt.X,-xt.Y),_t=0;for(var q=C-1;q>=0;q--)_t=this.OffsetPoint(q,_t,u.m_jointype);this.m_destPolys.push(this.m_destPoly)}else{for(var _t=0,q=1;q<C-1;++q)_t=this.OffsetPoint(q,_t,u.m_jointype);var St;if(u.m_endtype===n.EndType.etOpenButt){var q=C-1;St=new n.IntPoint2(n.ClipperOffset.Round(this.m_srcPoly[q].X+this.m_normals[q].X*r),n.ClipperOffset.Round(this.m_srcPoly[q].Y+this.m_normals[q].Y*r)),this.m_destPoly.push(St),St=new n.IntPoint2(n.ClipperOffset.Round(this.m_srcPoly[q].X-this.m_normals[q].X*r),n.ClipperOffset.Round(this.m_srcPoly[q].Y-this.m_normals[q].Y*r)),this.m_destPoly.push(St)}else{var q=C-1;_t=C-2,this.m_sinA=0,this.m_normals[q]=new n.DoublePoint2(-this.m_normals[q].X,-this.m_normals[q].Y),u.m_endtype===n.EndType.etOpenSquare?this.DoSquare(q,_t):this.DoRound(q,_t)}for(var q=C-1;q>0;q--)this.m_normals[q]=new n.DoublePoint2(-this.m_normals[q-1].X,-this.m_normals[q-1].Y);this.m_normals[0]=new n.DoublePoint2(-this.m_normals[1].X,-this.m_normals[1].Y),_t=C-1;for(var q=_t-1;q>0;--q)_t=this.OffsetPoint(q,_t,u.m_jointype);u.m_endtype===n.EndType.etOpenButt?(St=new n.IntPoint2(n.ClipperOffset.Round(this.m_srcPoly[0].X-this.m_normals[0].X*r),n.ClipperOffset.Round(this.m_srcPoly[0].Y-this.m_normals[0].Y*r)),this.m_destPoly.push(St),St=new n.IntPoint2(n.ClipperOffset.Round(this.m_srcPoly[0].X+this.m_normals[0].X*r),n.ClipperOffset.Round(this.m_srcPoly[0].Y+this.m_normals[0].Y*r)),this.m_destPoly.push(St)):(_t=1,this.m_sinA=0,u.m_endtype===n.EndType.etOpenSquare?this.DoSquare(0,1):this.DoRound(0,1)),this.m_destPolys.push(this.m_destPoly)}}}},n.ClipperOffset.prototype.Execute=function(){var r=arguments,l=r[0]instanceof n.PolyTree;if(l){var u=r[0],p=r[1];u.Clear(),this.FixOrientations(),this.DoOffset(p);var M=new n.Clipper(0);if(M.AddPaths(this.m_destPolys,n.PolyType.ptSubject,!0),p>0)M.Execute(n.ClipType.ctUnion,u,n.PolyFillType.pftPositive,n.PolyFillType.pftPositive);else{var C=n.Clipper.GetBounds(this.m_destPolys),D=new n.Path;if(D.push(new n.IntPoint2(C.left-10,C.bottom+10)),D.push(new n.IntPoint2(C.right+10,C.bottom+10)),D.push(new n.IntPoint2(C.right+10,C.top-10)),D.push(new n.IntPoint2(C.left-10,C.top-10)),M.AddPath(D,n.PolyType.ptSubject,!0),M.ReverseSolution=!0,M.Execute(n.ClipType.ctUnion,u,n.PolyFillType.pftNegative,n.PolyFillType.pftNegative),u.ChildCount()===1&&u.Childs()[0].ChildCount()>0){var Y=u.Childs()[0];u.Childs()[0]=Y.Childs()[0],u.Childs()[0].m_Parent=u;for(var q=1;q<Y.ChildCount();q++)u.AddChild(Y.Childs()[q])}else u.Clear()}}else{var u=r[0],p=r[1];n.Clear(u),this.FixOrientations(),this.DoOffset(p);var M=new n.Clipper(0);if(M.AddPaths(this.m_destPolys,n.PolyType.ptSubject,!0),p>0)M.Execute(n.ClipType.ctUnion,u,n.PolyFillType.pftPositive,n.PolyFillType.pftPositive);else{var C=n.Clipper.GetBounds(this.m_destPolys),D=new n.Path;D.push(new n.IntPoint2(C.left-10,C.bottom+10)),D.push(new n.IntPoint2(C.right+10,C.bottom+10)),D.push(new n.IntPoint2(C.right+10,C.top-10)),D.push(new n.IntPoint2(C.left-10,C.top-10)),M.AddPath(D,n.PolyType.ptSubject,!0),M.ReverseSolution=!0,M.Execute(n.ClipType.ctUnion,u,n.PolyFillType.pftNegative,n.PolyFillType.pftNegative),u.length>0&&u.splice(0,1)}}},n.ClipperOffset.prototype.OffsetPoint=function(r,l,u){if(this.m_sinA=this.m_normals[l].X*this.m_normals[r].Y-this.m_normals[r].X*this.m_normals[l].Y,Math.abs(this.m_sinA*this.m_delta)<1){var p=this.m_normals[l].X*this.m_normals[r].X+this.m_normals[r].Y*this.m_normals[l].Y;if(p>0)return this.m_destPoly.push(new n.IntPoint2(n.ClipperOffset.Round(this.m_srcPoly[r].X+this.m_normals[l].X*this.m_delta),n.ClipperOffset.Round(this.m_srcPoly[r].Y+this.m_normals[l].Y*this.m_delta))),l}else this.m_sinA>1?this.m_sinA=1:this.m_sinA<-1&&(this.m_sinA=-1);if(this.m_sinA*this.m_delta<0)this.m_destPoly.push(new n.IntPoint2(n.ClipperOffset.Round(this.m_srcPoly[r].X+this.m_normals[l].X*this.m_delta),n.ClipperOffset.Round(this.m_srcPoly[r].Y+this.m_normals[l].Y*this.m_delta))),this.m_destPoly.push(new n.IntPoint1(this.m_srcPoly[r])),this.m_destPoly.push(new n.IntPoint2(n.ClipperOffset.Round(this.m_srcPoly[r].X+this.m_normals[r].X*this.m_delta),n.ClipperOffset.Round(this.m_srcPoly[r].Y+this.m_normals[r].Y*this.m_delta)));else switch(u){case n.JoinType.jtMiter:{var M=1+(this.m_normals[r].X*this.m_normals[l].X+this.m_normals[r].Y*this.m_normals[l].Y);M>=this.m_miterLim?this.DoMiter(r,l,M):this.DoSquare(r,l);break}case n.JoinType.jtSquare:this.DoSquare(r,l);break;case n.JoinType.jtRound:this.DoRound(r,l);break}return l=r,l},n.ClipperOffset.prototype.DoSquare=function(r,l){var u=Math.tan(Math.atan2(this.m_sinA,this.m_normals[l].X*this.m_normals[r].X+this.m_normals[l].Y*this.m_normals[r].Y)/4);this.m_destPoly.push(new n.IntPoint2(n.ClipperOffset.Round(this.m_srcPoly[r].X+this.m_delta*(this.m_normals[l].X-this.m_normals[l].Y*u)),n.ClipperOffset.Round(this.m_srcPoly[r].Y+this.m_delta*(this.m_normals[l].Y+this.m_normals[l].X*u)))),this.m_destPoly.push(new n.IntPoint2(n.ClipperOffset.Round(this.m_srcPoly[r].X+this.m_delta*(this.m_normals[r].X+this.m_normals[r].Y*u)),n.ClipperOffset.Round(this.m_srcPoly[r].Y+this.m_delta*(this.m_normals[r].Y-this.m_normals[r].X*u))))},n.ClipperOffset.prototype.DoMiter=function(r,l,u){var p=this.m_delta/u;this.m_destPoly.push(new n.IntPoint2(n.ClipperOffset.Round(this.m_srcPoly[r].X+(this.m_normals[l].X+this.m_normals[r].X)*p),n.ClipperOffset.Round(this.m_srcPoly[r].Y+(this.m_normals[l].Y+this.m_normals[r].Y)*p)))},n.ClipperOffset.prototype.DoRound=function(r,l){for(var u=Math.atan2(this.m_sinA,this.m_normals[l].X*this.m_normals[r].X+this.m_normals[l].Y*this.m_normals[r].Y),p=Math.max(n.Cast_Int32(n.ClipperOffset.Round(this.m_StepsPerRad*Math.abs(u))),1),M=this.m_normals[l].X,C=this.m_normals[l].Y,D,Y=0;Y<p;++Y)this.m_destPoly.push(new n.IntPoint2(n.ClipperOffset.Round(this.m_srcPoly[r].X+M*this.m_delta),n.ClipperOffset.Round(this.m_srcPoly[r].Y+C*this.m_delta))),D=M,M=M*this.m_cos-this.m_sin*C,C=D*this.m_sin+C*this.m_cos;this.m_destPoly.push(new n.IntPoint2(n.ClipperOffset.Round(this.m_srcPoly[r].X+this.m_normals[r].X*this.m_delta),n.ClipperOffset.Round(this.m_srcPoly[r].Y+this.m_normals[r].Y*this.m_delta)))},n.Error=function(r){try{throw new Error(r)}catch(l){alert(l.message)}},n.JS={},n.JS.AreaOfPolygon=function(r,l){return l||(l=1),n.Clipper.Area(r)/(l*l)},n.JS.AreaOfPolygons=function(r,l){l||(l=1);for(var u=0,p=0;p<r.length;p++)u+=n.Clipper.Area(r[p]);return u/(l*l)},n.JS.BoundsOfPath=function(r,l){return n.JS.BoundsOfPaths([r],l)},n.JS.BoundsOfPaths=function(r,l){l||(l=1);var u=n.Clipper.GetBounds(r);return u.left/=l,u.bottom/=l,u.right/=l,u.top/=l,u},n.JS.Clean=function(p,l){if(!(p instanceof Array))return[];var u=p[0]instanceof Array,p=n.JS.Clone(p);if(typeof l!="number"||l===null)return n.Error("Delta is not a number in Clean()."),p;if(p.length===0||p.length===1&&p[0].length===0||l<0)return p;u||(p=[p]);for(var M=p.length,C,D,Y,q,nt,_t,xt,St=[],Qt=0;Qt<M;Qt++)if(D=p[Qt],C=D.length,C!==0){if(C<3){Y=D,St.push(Y);continue}for(Y=D,q=l*l,nt=D[0],_t=1,xt=1;xt<C;xt++)(D[xt].X-nt.X)*(D[xt].X-nt.X)+(D[xt].Y-nt.Y)*(D[xt].Y-nt.Y)<=q||(Y[_t]=D[xt],nt=D[xt],_t++);nt=D[_t-1],(D[0].X-nt.X)*(D[0].X-nt.X)+(D[0].Y-nt.Y)*(D[0].Y-nt.Y)<=q&&_t--,_t<C&&Y.splice(_t,C-_t),Y.length&&St.push(Y)}return!u&&St.length?St=St[0]:!u&&St.length===0?St=[]:u&&St.length===0&&(St=[[]]),St},n.JS.Clone=function(r){if(!(r instanceof Array))return[];if(r.length===0)return[];if(r.length===1&&r[0].length===0)return[[]];var l=r[0]instanceof Array;l||(r=[r]);var u=r.length,p,M,C,D,Y=new Array(u);for(M=0;M<u;M++){for(p=r[M].length,D=new Array(p),C=0;C<p;C++)D[C]={X:r[M][C].X,Y:r[M][C].Y};Y[M]=D}return l||(Y=Y[0]),Y},n.JS.Lighten=function(r,l){if(!(r instanceof Array))return[];if(typeof l!="number"||l===null)return n.Error("Tolerance is not a number in Lighten()."),n.JS.Clone(r);if(r.length===0||r.length===1&&r[0].length===0||l<0)return n.JS.Clone(r);var u=r[0]instanceof Array;u||(r=[r]);var p,M,C,D,Y,q,nt,_t,xt,St,Qt,he,_e,ze,In,li,Is,Am=r.length,Cm=l*l,Rs=[];for(p=0;p<Am;p++)if(C=r[p],q=C.length,q!==0){for(D=0;D<1e6;D++){for(Y=[],q=C.length,C[q-1].X!==C[0].X||C[q-1].Y!==C[0].Y?(he=1,C.push({X:C[0].X,Y:C[0].Y}),q=C.length):he=0,Qt=[],M=0;M<q-2;M++)nt=C[M],xt=C[M+1],_t=C[M+2],li=nt.X,Is=nt.Y,_e=_t.X-li,ze=_t.Y-Is,(_e!==0||ze!==0)&&(In=((xt.X-li)*_e+(xt.Y-Is)*ze)/(_e*_e+ze*ze),In>1?(li=_t.X,Is=_t.Y):In>0&&(li+=_e*In,Is+=ze*In)),_e=xt.X-li,ze=xt.Y-Is,St=_e*_e+ze*ze,St<=Cm&&(Qt[M+1]=1,M++);for(Y.push({X:C[0].X,Y:C[0].Y}),M=1;M<q-1;M++)Qt[M]||Y.push({X:C[M].X,Y:C[M].Y});if(Y.push({X:C[q-1].X,Y:C[q-1].Y}),he&&C.pop(),Qt.length)C=Y;else break}q=Y.length,Y[q-1].X===Y[0].X&&Y[q-1].Y===Y[0].Y&&Y.pop(),Y.length>2&&Rs.push(Y)}return u||(Rs=Rs[0]),typeof Rs>"u"&&(Rs=[]),Rs},n.JS.PerimeterOfPath=function(r,l,u){if(typeof r>"u")return 0;var p=Math.sqrt,M=0,C,D,Y=0,q=0,nt=0,_t=0,xt=r.length;if(xt<2)return 0;for(l&&(r[xt]=r[0],xt++);--xt;)C=r[xt],Y=C.X,q=C.Y,D=r[xt-1],nt=D.X,_t=D.Y,M+=p((Y-nt)*(Y-nt)+(q-_t)*(q-_t));return l&&r.pop(),M/u},n.JS.PerimeterOfPaths=function(r,l,u){u||(u=1);for(var p=0,M=0;M<r.length;M++)p+=n.JS.PerimeterOfPath(r[M],l,u);return p},n.JS.ScaleDownPath=function(r,l){var u,p;for(l||(l=1),u=r.length;u--;)p=r[u],p.X=p.X/l,p.Y=p.Y/l},n.JS.ScaleDownPaths=function(r,l){var u,p,M;for(l||(l=1),u=r.length;u--;)for(p=r[u].length;p--;)M=r[u][p],M.X=M.X/l,M.Y=M.Y/l},n.JS.ScaleUpPath=function(r,l){var u,p,M=Math.round;for(l||(l=1),u=r.length;u--;)p=r[u],p.X=M(p.X*l),p.Y=M(p.Y*l)},n.JS.ScaleUpPaths=function(r,l){var u,p,M,C=Math.round;for(l||(l=1),u=r.length;u--;)for(p=r[u].length;p--;)M=r[u][p],M.X=C(M.X*l),M.Y=C(M.Y*l)},n.ExPolygons=function(){return[]},n.ExPolygon=function(){this.outer=null,this.holes=null},n.JS.AddOuterPolyNodeToExPolygons=function(r,l){var u=new n.ExPolygon;u.outer=r.Contour();var p=r.Childs(),M=p.length;u.holes=new Array(M);var C,D,Y,q,nt,_t;for(Y=0;Y<M;Y++)for(C=p[Y],u.holes[Y]=C.Contour(),q=0,nt=C.Childs(),_t=nt.length;q<_t;q++)D=nt[q],n.JS.AddOuterPolyNodeToExPolygons(D,l);l.push(u)},n.JS.ExPolygonsToPaths=function(r){var l,u,p,M,C=new n.Paths;for(l=0,p=r.length;l<p;l++)for(C.push(r[l].outer),u=0,M=r[l].holes.length;u<M;u++)C.push(r[l].holes[u]);return C},n.JS.PolyTreeToExPolygons=function(r){var l=new n.ExPolygons,u,p,M,C;for(p=0,M=r.Childs(),C=M.length;p<C;p++)u=M[p],n.JS.AddOuterPolyNodeToExPolygons(u,l);return l}})()});function Gc(n,t,e,i=Je.default.PolyFillType.pftNonZero){let s=new Je.default.Clipper;s.AddPaths(Kr(t),Je.default.PolyType.ptSubject,!0),e&&s.AddPaths(Kr(e),Je.default.PolyType.ptClip,!0);let a=new Je.default.Paths;return s.Execute(n,a,i,i),ca(a)}function ve(n,t,e=Af/Mi){return n.length?(t<-2*Hc&&(n=Tf(n,-Hc,e),t+=Hc),Tf(n,t,e)):[]}function Tf(n,t,e){if(!n.length)return[];let i=new Je.default.ClipperOffset(2,e*Mi);i.AddPaths(Kr(n),Je.default.JoinType.jtRound,Je.default.EndType.etClosedPolygon);let s=new Je.default.Paths;return i.Execute(s,t*Mi),ca(s)}function Cf(n,t){if(!n.length)return[];let e=new Je.default.ClipperOffset(4,Af);e.AddPaths(Kr(n),Je.default.JoinType.jtMiter,Je.default.EndType.etClosedPolygon);let i=new Je.default.Paths;return e.Execute(i,t*Mi),ca(i)}function rn(n){let t=0;for(let e=0,i=n.length-1;e<n.length;i=e++)t+=(n[i][0]+n[e][0])*(n[i][1]-n[e][1]);return-t/2}function to(n){let t=1/0,e=1/0,i=-1/0,s=-1/0;for(let a of n)for(let[c,o]of a)c<t&&(t=c),c>i&&(i=c),o<e&&(e=o),o>s&&(s=o);return{minX:t,minY:e,maxX:i,maxY:s}}function Zn(n){if(!n.length)return[];let t=new Je.default.Clipper;t.AddPaths(Kr(n),Je.default.PolyType.ptSubject,!0);let e=new Je.default.PolyTree;t.Execute(Je.default.ClipType.ctUnion,e,Je.default.PolyFillType.pftNonZero,Je.default.PolyFillType.pftNonZero);let i=[],s=a=>{for(let c of a.Childs()){if(c.IsHole()){s(c);continue}let o=c.Childs().map(h=>h.Contour());i.push(ca([c.Contour(),...o]));for(let h of c.Childs())s(h)}};return s(e),i}function Si([n,t],e){let i=!1;for(let s=0,a=e.length-1;s<e.length;a=s++){let[c,o]=e[s],[h,f]=e[a];o>t!=f>t&&n<(h-c)*(t-o)/(f-o)+c&&(i=!i)}return i}function an(n,t=1e-4){return n.filter(e=>e.length>=3&&Math.abs(rn(e))>t)}function Km(n,t=.005){if(n.length<8)return n;let e=0,i=-1;for(let o=1;o<n.length;o++){let h=(n[o][0]-n[0][0])**2+(n[o][1]-n[0][1])**2;h>i&&(i=h,e=o)}let s=o=>{let h=new Uint8Array(o.length);h[0]=h[o.length-1]=1;let f=[[0,o.length-1]];for(;f.length;){let[d,g]=f.pop(),[m,x]=o[d],[v,b]=o[g],y=Math.hypot(v-m,b-x)||1e-12,_=-1,T=t;for(let A=d+1;A<g;A++){let S=Math.abs((v-m)*(x-o[A][1])-(m-o[A][0])*(b-x))/y;S>T&&(T=S,_=A)}_>0&&(h[_]=1,f.push([d,_],[_,g]))}return o.filter((d,g)=>h[g])},a=s(n.slice(0,e+1)),c=s([...n.slice(e),n[0]]);return[...a,...c.slice(1,-1)]}var Je,Mi,Af,Kr,ca,fn,vn,ha,Hc,Qr,hi,eo=de(()=>{Je=Hu(Ef(),1),Mi=1e3,Af=.01*Mi,Kr=n=>n.map(t=>t.map(([e,i])=>({X:Math.round(e*Mi),Y:Math.round(i*Mi)}))),ca=n=>n.map(t=>t.map(e=>[e.X/Mi,e.Y/Mi]));fn=n=>Gc(Je.default.ClipType.ctUnion,n,null),vn=(n,t)=>Gc(Je.default.ClipType.ctDifference,n,t),ha=(n,t)=>Gc(Je.default.ClipType.ctIntersection,n,t);Hc=.005;Qr=n=>n.reduce((t,e)=>t+rn(e),0);hi=(n,t)=>n.map(e=>Km(e,t)).filter(e=>e.length>=3)});function fa(n){let t=String(n.type||"").toLowerCase().replace(/[-_]/g," ");return/keyhole|round ?over|\bcove\b|bowl|ogee|dovetail/i.test(n.name||"")?"profile":Qm.has(t)||t.startsWith("flat")?"flat":t.startsWith("surfac")?"surfacing":t.startsWith("drill")?"drill":t.startsWith("ball")?"ball":t.startsWith("v")?"vbit":t.startsWith("chamfer")?"chamfer":t.startsWith("thread")?"threadmill":t||"flat"}function hs(n,t){return(typeof t=="string"?t:t?.mode)==="toolId"?n.toolId??n.id:n.toolNumber?n.toolNumber:t?.manual?.get(n.id)??n.toolId??n.id}function Pf(n,t,e=0,i=null){if(n==="toolId")return{mode:n};let s=new Set(t.filter(h=>h.toolNumber).map(h=>h.toolNumber));for(let h=1;h<=e;h++)s.add(h);i&&s.add(i);let a=new Map,c=t.filter(h=>!h.toolNumber);for(let h of c){let f=h.toolId??h.id;f>e&&!s.has(f)&&(a.set(h.id,f),s.add(f))}let o=e+1;for(let h of c)if(!a.has(h.id)){for(;s.has(o);)o++;a.set(h.id,o),s.add(o)}return{mode:n,manual:a}}function If(n){return(n||[]).filter(t=>t&&t.diameter>0).map(t=>({id:t.id,toolId:t.toolId??t.id,toolNumber:t.toolNumber??null,name:t.name||`${t.diameter} mm ${fa(t)}`,kind:fa(t),diameter:Number(t.diameter),fluteLength:Number(t.dimensions?.flute_length)||null,flutes:Number(t.metadata?.flutes)||2,.../^(vbit|chamfer)$/.test(fa(t))?{angle:e0(t)}:{},...fa(t)==="threadmill"?t0(t):{}}))}function t0(n){let t=n.metadata||{},i=[t.sku,n.name,t.notes].filter(Boolean).join(" ").match(/D\s*(\d+(?:\.\d+)?)\s*[×xX*]\s*P(?:itch)?\s*(\d+(?:\.\d+)?)\s*-\s*(\d+(?:\.\d+)?)/),s=Number(t.cut_diameter)||Number(i?i[1]:n.diameter),a=Number(t.reach)||Number(n.dimensions?.neck_length)||0;return{cut:s,pitchMin:Number(t.pitch_min)||(i?Number(i[2]):0),pitchMax:Number(t.pitch_max)||(i?Number(i[3]):1/0),reach:a||3*s,reachAssumed:!a,neck:Number(t.neck_diameter)||.7*s}}function e0(n){let t=Number(n.dimensions?.taper_angle);if(t>0&&t<90)return t*2;let e=String(n.name||"").match(/(\d{2,3}(?:\.\d+)?)\s*(?:°|º|deg\b|degrees?\b)/i),i=e?Number(e[1]):0;return i>0&&i<180?i:90}function Xc(n,t,e,i={}){let s=cs[t]||cs.mdf,a=Gn[e]||Gn.balanced,c=i.maxRpm||24e3,o=i.minRpm||0,h=Math.round(Math.min(c,Math.max(o,s.rpm))),f=Math.min(s.maxChip,s.chip*n.diameter),d=Math.min(i.maxFeed||4e3,4e3),g=Math.round(Math.min(d,Math.max(150,h*n.flutes*f*a.feed)));return{rpm:h,feed:g,plunge:Math.round(Math.max(60,g*.3)),stepdown:Math.max(.05,n.diameter*s.stepdown*a.stepdown),stepover:Math.max(.05,n.diameter*Math.min(.9,s.stepover*a.stepover)),rampAngle:s.ramp}}var cs,Gn,Qm,ui,no=de(()=>{cs={softwood:{name:"Softwood",note:"Pine, cedar",rpm:18e3,chip:.012,maxChip:.25,stepdown:.5,stepover:.45,ramp:5},hardwood:{name:"Hardwood",note:"Oak, maple, walnut",rpm:18e3,chip:.009,maxChip:.2,stepdown:.35,stepover:.4,ramp:4},mdf:{name:"MDF / Plywood",note:"Sheet goods",rpm:18e3,chip:.012,maxChip:.25,stepdown:.5,stepover:.45,ramp:5},plastic:{name:"Plastic",note:"Acrylic, HDPE",rpm:16e3,chip:.01,maxChip:.2,stepdown:.3,stepover:.4,ramp:3},aluminum:{name:"Aluminum",note:"6061",rpm:18e3,chip:.003,maxChip:.05,stepdown:.1,stepover:.25,ramp:2},foam:{name:"Foam",note:"Tooling board",rpm:12e3,chip:.02,maxChip:.4,stepdown:1,stepover:.6,ramp:10}},Gn={fast:{name:"Fast",feed:1.15,stepdown:1.2,stepover:1.1,allowance:0},balanced:{name:"Balanced",feed:1,stepdown:1,stepover:1,allowance:.2},smooth:{name:"Smooth",feed:.85,stepdown:.8,stepover:.7,allowance:.25}},Qm=new Set(["flat","flat end mill","endmill","end mill","flat_end_mill"]);ui=n=>n==="aluminum"?{height:1,length:1}:{height:2,length:2}});var us={};Vu(us,{INCH:()=>n0,len:()=>Wc,num:()=>Rf,toMm:()=>s0,unitsFrom:()=>i0});function Rf(n,t="mm",e=t==="in"?3:1){let i=t==="in"?n/25.4:n;return(Math.round(i*10**e)/10**e).toLocaleString("en-US",{maximumFractionDigits:e})}var n0,i0,Wc,s0,Yc=de(()=>{n0=25.4,i0=n=>n==="imperial"?"in":"mm";Wc=(n,t="mm",e)=>`${Rf(n,t,e)} ${t}`,s0=(n,t="mm")=>t==="in"?n*25.4:n});function r0(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function o0(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function xo(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Wd(){let n=xo("canvas");return n.style.display="block",n}function yo(...n){let t="THREE."+n.shift();er?er("log",t,...n):console.log(t,...n)}function Yd(n){let t=n[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=n[1];e&&e.isStackTrace?n[0]+=" "+e.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function ie(...n){n=Yd(n);let t="THREE."+n.shift();if(er)er("warn",t,...n);else{let e=n[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...n)}}function se(...n){n=Yd(n);let t="THREE."+n.shift();if(er)er("error",t,...n);else{let e=n[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...n)}}function gs(...n){let t=n.join(" ");t in Lf||(Lf[t]=!0,ie(...n))}function $d(n,t,e){return new Promise(function(i,s){function a(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(a,e);break;default:i()}}setTimeout(a,e)})}function Pi(){let n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(bn[n&255]+bn[n>>8&255]+bn[n>>16&255]+bn[n>>24&255]+"-"+bn[t&255]+bn[t>>8&255]+"-"+bn[t>>16&15|64]+bn[t>>24&255]+"-"+bn[e&63|128]+bn[e>>8&255]+"-"+bn[e>>16&255]+bn[e>>24&255]+bn[i&255]+bn[i>>8&255]+bn[i>>16&255]+bn[i>>24&255]).toLowerCase()}function Me(n,t,e){return Math.max(t,Math.min(e,n))}function Qh(n,t){return(n%t+t)%t}function a0(n,t,e,i,s){return i+(n-t)*(s-i)/(e-t)}function l0(n,t,e){return n!==t?(e-n)/(t-n):0}function fo(n,t,e){return(1-e)*n+e*t}function c0(n,t,e,i){return fo(n,t,1-Math.exp(-e*i))}function h0(n,t=1){return t-Math.abs(Qh(n,t*2)-t)}function u0(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*(3-2*n))}function f0(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*n*(n*(n*6-15)+10))}function d0(n,t){return n+Math.floor(Math.random()*(t-n+1))}function p0(n,t){return n+Math.random()*(t-n)}function m0(n){return n*(.5-Math.random())}function g0(n){n!==void 0&&(Nf=n);let t=Nf+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function x0(n){return n*js}function y0(n){return n*nr}function _0(n){return n>0&&Number.isInteger(n)&&2**Math.round(Math.log2(n))===n}function v0(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function b0(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function M0(n,t,e,i,s){let a=Math.cos,c=Math.sin,o=a(e/2),h=c(e/2),f=a((t+i)/2),d=c((t+i)/2),g=a((t-i)/2),m=c((t-i)/2),x=a((i-t)/2),v=c((i-t)/2);switch(s){case"XYX":n.set(o*d,h*g,h*m,o*f);break;case"YZY":n.set(h*m,o*d,h*g,o*f);break;case"ZXZ":n.set(h*g,h*m,o*d,o*f);break;case"XZX":n.set(o*d,h*v,h*x,o*f);break;case"YXY":n.set(h*x,o*d,h*v,o*f);break;case"ZYZ":n.set(h*v,h*x,o*d,o*f);break;default:ie("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Qn(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:case Uint8ClampedArray:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Oe(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function S0(){let n={enabled:!0,workingColorSpace:mo,spaces:{},convert:function(s,a,c){return this.enabled===!1||a===c||!a||!c||(this.spaces[a].transfer===Le&&(s.r=Ii(s.r),s.g=Ii(s.g),s.b=Ii(s.b)),this.spaces[a].primaries!==this.spaces[c].primaries&&(s.applyMatrix3(this.spaces[a].toXYZ),s.applyMatrix3(this.spaces[c].fromXYZ)),this.spaces[c].transfer===Le&&(s.r=Ks(s.r),s.g=Ks(s.g),s.b=Ks(s.b))),s},workingToColorSpace:function(s,a){return this.convert(s,this.workingColorSpace,a)},colorSpaceToWorking:function(s,a){return this.convert(s,a,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Li?go:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,a=this.workingColorSpace){return s.fromArray(this.spaces[a].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,a,c){return s.copy(this.spaces[a].toXYZ).multiply(this.spaces[c].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,a){return gs("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(s,a)},toWorkingColorSpace:function(s,a){return gs("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(s,a)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[mo]:{primaries:t,whitePoint:i,transfer:go,toXYZ:Of,fromXYZ:Ff,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:An},outputColorSpaceConfig:{drawingBufferColorSpace:An}},[An]:{primaries:t,whitePoint:i,transfer:Le,toXYZ:Of,fromXYZ:Ff,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:An}}}),n}function Ii(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Ks(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}function Zc(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?el.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(ie("Texture: Unable to serialize Texture."),{})}function Kc(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}function oh(n,t,e,i,s){for(let a=0,c=n.length-3;a<=c;a+=3){ds.fromArray(n,a);let o=s.x*Math.abs(ds.x)+s.y*Math.abs(ds.y)+s.z*Math.abs(ds.z),h=t.dot(ds),f=e.dot(ds),d=i.dot(ds);if(Math.max(-Math.max(h,f,d),Math.min(h,f,d))>o)return!1}return!0}function Ma(n,t,e,i,s,a){$s.subVectors(n,e).addScalar(.5).multiply(i),s!==void 0?(lo.x=a*$s.x-s*$s.y,lo.y=s*$s.x+a*$s.y):lo.copy($s),n.copy(t),n.x+=lo.x,n.y+=lo.y,n.applyMatrix4(Jd)}function k0(n,t,e,i,s,a,c,o){let h;if(t.side===Pn?h=i.intersectTriangle(c,a,s,!0,o):h=i.intersectTriangle(s,a,c,t.side===Qi,o),h===null)return null;Ia.copy(o),Ia.applyMatrix4(n.matrixWorld);let f=e.ray.origin.distanceTo(Ia);return f<e.near||f>e.far?null:{distance:f,point:Ia.clone(),object:n}}function Ra(n,t,e,i,s,a,c,o,h,f){n.getVertexPosition(o,Ta),n.getVertexPosition(h,Aa),n.getVertexPosition(f,Ca);let d=k0(n,t,e,i,Ta,Aa,Ca,Zf);if(d){let g=new K;di.getBarycoord(Zf,Ta,Aa,Ca,g),s&&(d.uv=di.getInterpolatedAttribute(s,o,h,f,g,new jt)),a&&(d.uv1=di.getInterpolatedAttribute(a,o,h,f,g,new jt)),c&&(d.normal=di.getInterpolatedAttribute(c,o,h,f,g,new K),d.normal.dot(i.direction)>0&&d.normal.multiplyScalar(-1));let m={a:o,b:h,c:f,normal:new K,materialIndex:0};di.getNormal(Ta,Aa,Ca,m.normal),d.face=m,d.barycoord=g}return d}function Da(n,t,e,i,s,a,c){let o=n.geometry.attributes.position;if(ol.fromBufferAttribute(o,s),al.fromBufferAttribute(o,a),e.distanceSqToSegment(ol,al,dh,jf)>i)return;dh.applyMatrix4(n.matrixWorld);let f=t.ray.origin.distanceTo(dh);if(!(f<t.near||f>t.far))return{distance:f,point:jf.clone().applyMatrix4(n.matrixWorld),index:c,face:null,faceIndex:null,barycoord:null,object:n}}function V0(n,t,e=2){let i=t&&t.length,s=i?t[0]*e:n.length,a=jd(n,0,s,e,!0),c=[];if(!a||a.next===a.prev)return c;let o,h,f;if(i&&(a=Y0(n,t,a,e)),n.length>80*e){o=n[0],h=n[1];let d=o,g=h;for(let m=e;m<s;m+=e){let x=n[m],v=n[m+1];x<o&&(o=x),v<h&&(h=v),x>d&&(d=x),v>g&&(g=v)}f=Math.max(d-o,g-h),f=f!==0?32767/f:0}return Co(a,c,e,o,h,f,0),c}function jd(n,t,e,i,s){let a;if(s===ig(n,t,e,i)>0)for(let c=t;c<e;c+=i)a=td(c/i|0,n[c],n[c+1],a);else for(let c=e-i;c>=t;c-=i)a=td(c/i|0,n[c],n[c+1],a);return a&&hr(a,a.next)&&(Io(a),a=a.next),a}function vs(n,t){if(!n)return n;t||(t=n);let e=n,i;do if(i=!1,!e.steiner&&(hr(e,e.next)||je(e.prev,e,e.next)===0)){if(Io(e),e=t=e.prev,e===e.next)break;i=!0}else e=e.next;while(i||e!==t);return t}function Co(n,t,e,i,s,a,c){if(!n)return;!c&&a&&j0(n,i,s,a);let o=n;for(;n.prev!==n.next;){let h=n.prev,f=n.next;if(a?G0(n,i,s,a):H0(n)){t.push(h.i,n.i,f.i),Io(n),n=f.next,o=f.next;continue}if(n=f,n===o){c?c===1?(n=X0(vs(n),t),Co(n,t,e,i,s,a,2)):c===2&&W0(n,t,e,i,s,a):Co(vs(n),t,e,i,s,a,1);break}}}function H0(n){let t=n.prev,e=n,i=n.next;if(je(t,e,i)>=0)return!1;let s=t.x,a=e.x,c=i.x,o=t.y,h=e.y,f=i.y,d=Math.min(s,a,c),g=Math.min(o,h,f),m=Math.max(s,a,c),x=Math.max(o,h,f),v=i.next;for(;v!==t;){if(v.x>=d&&v.x<=m&&v.y>=g&&v.y<=x&&uo(s,o,a,h,c,f,v.x,v.y)&&je(v.prev,v,v.next)>=0)return!1;v=v.next}return!0}function G0(n,t,e,i){let s=n.prev,a=n,c=n.next;if(je(s,a,c)>=0)return!1;let o=s.x,h=a.x,f=c.x,d=s.y,g=a.y,m=c.y,x=Math.min(o,h,f),v=Math.min(d,g,m),b=Math.max(o,h,f),y=Math.max(d,g,m),_=Mh(x,v,t,e,i),T=Mh(b,y,t,e,i),A=n.prevZ,S=n.nextZ;for(;A&&A.z>=_&&S&&S.z<=T;){if(A.x>=x&&A.x<=b&&A.y>=v&&A.y<=y&&A!==s&&A!==c&&uo(o,d,h,g,f,m,A.x,A.y)&&je(A.prev,A,A.next)>=0||(A=A.prevZ,S.x>=x&&S.x<=b&&S.y>=v&&S.y<=y&&S!==s&&S!==c&&uo(o,d,h,g,f,m,S.x,S.y)&&je(S.prev,S,S.next)>=0))return!1;S=S.nextZ}for(;A&&A.z>=_;){if(A.x>=x&&A.x<=b&&A.y>=v&&A.y<=y&&A!==s&&A!==c&&uo(o,d,h,g,f,m,A.x,A.y)&&je(A.prev,A,A.next)>=0)return!1;A=A.prevZ}for(;S&&S.z<=T;){if(S.x>=x&&S.x<=b&&S.y>=v&&S.y<=y&&S!==s&&S!==c&&uo(o,d,h,g,f,m,S.x,S.y)&&je(S.prev,S,S.next)>=0)return!1;S=S.nextZ}return!0}function X0(n,t){let e=n;do{let i=e.prev,s=e.next.next;!hr(i,s)&&Qd(i,e,e.next,s)&&Po(i,s)&&Po(s,i)&&(t.push(i.i,e.i,s.i),Io(e),Io(e.next),e=n=s),e=e.next}while(e!==n);return vs(e)}function W0(n,t,e,i,s,a){let c=n;do{let o=c.next.next;for(;o!==c.prev;){if(c.i!==o.i&&tg(c,o)){let h=tp(c,o);c=vs(c,c.next),h=vs(h,h.next),Co(c,t,e,i,s,a,0),Co(h,t,e,i,s,a,0);return}o=o.next}c=c.next}while(c!==n)}function Y0(n,t,e,i){let s=[];for(let a=0,c=t.length;a<c;a++){let o=t[a]*i,h=a<c-1?t[a+1]*i:n.length,f=jd(n,o,h,i,!1);f===f.next&&(f.steiner=!0),s.push(Q0(f))}s.sort($0);for(let a=0;a<s.length;a++)e=q0(s[a],e);return e}function $0(n,t){let e=n.x-t.x;if(e===0&&(e=n.y-t.y,e===0)){let i=(n.next.y-n.y)/(n.next.x-n.x),s=(t.next.y-t.y)/(t.next.x-t.x);e=i-s}return e}function q0(n,t){let e=Z0(n,t);if(!e)return t;let i=tp(e,n);return vs(i,i.next),vs(e,e.next)}function Z0(n,t){let e=t,i=n.x,s=n.y,a=-1/0,c;if(hr(n,e))return e;do{if(hr(n,e.next))return e.next;if(s<=e.y&&s>=e.next.y&&e.next.y!==e.y){let g=e.x+(s-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(g<=i&&g>a&&(a=g,c=e.x<e.next.x?e:e.next,g===i))return c}e=e.next}while(e!==t);if(!c)return null;let o=c,h=c.x,f=c.y,d=1/0;e=c;do{if(i>=e.x&&e.x>=h&&i!==e.x&&Kd(s<f?i:a,s,h,f,s<f?a:i,s,e.x,e.y)){let g=Math.abs(s-e.y)/(i-e.x);Po(e,n)&&(g<d||g===d&&(e.x>c.x||e.x===c.x&&J0(c,e)))&&(c=e,d=g)}e=e.next}while(e!==o);return c}function J0(n,t){return je(n.prev,n,t.prev)<0&&je(t.next,n,n.next)<0}function j0(n,t,e,i){let s=n;do s.z===0&&(s.z=Mh(s.x,s.y,t,e,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==n);s.prevZ.nextZ=null,s.prevZ=null,K0(s)}function K0(n){let t,e=1;do{let i=n,s;n=null;let a=null;for(t=0;i;){t++;let c=i,o=0;for(let f=0;f<e&&(o++,c=c.nextZ,!!c);f++);let h=e;for(;o>0||h>0&&c;)o!==0&&(h===0||!c||i.z<=c.z)?(s=i,i=i.nextZ,o--):(s=c,c=c.nextZ,h--),a?a.nextZ=s:n=s,s.prevZ=a,a=s;i=c}a.nextZ=null,e*=2}while(t>1);return n}function Mh(n,t,e,i,s){return n=(n-e)*s|0,t=(t-i)*s|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,n|t<<1}function Q0(n){let t=n,e=n;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==n);return e}function Kd(n,t,e,i,s,a,c,o){return(s-c)*(t-o)>=(n-c)*(a-o)&&(n-c)*(i-o)>=(e-c)*(t-o)&&(e-c)*(a-o)>=(s-c)*(i-o)}function uo(n,t,e,i,s,a,c,o){return!(n===c&&t===o)&&Kd(n,t,e,i,s,a,c,o)}function tg(n,t){return n.next.i!==t.i&&n.prev.i!==t.i&&!eg(n,t)&&(Po(n,t)&&Po(t,n)&&ng(n,t)&&(je(n.prev,n,t.prev)||je(n,t.prev,t))||hr(n,t)&&je(n.prev,n,n.next)>0&&je(t.prev,t,t.next)>0)}function je(n,t,e){return(t.y-n.y)*(e.x-t.x)-(t.x-n.x)*(e.y-t.y)}function hr(n,t){return n.x===t.x&&n.y===t.y}function Qd(n,t,e,i){let s=ka(je(n,t,e)),a=ka(je(n,t,i)),c=ka(je(e,i,n)),o=ka(je(e,i,t));return!!(s!==a&&c!==o||s===0&&Ba(n,e,t)||a===0&&Ba(n,i,t)||c===0&&Ba(e,n,i)||o===0&&Ba(e,t,i))}function Ba(n,t,e){return t.x<=Math.max(n.x,e.x)&&t.x>=Math.min(n.x,e.x)&&t.y<=Math.max(n.y,e.y)&&t.y>=Math.min(n.y,e.y)}function ka(n){return n>0?1:n<0?-1:0}function eg(n,t){let e=n;do{if(e.i!==n.i&&e.next.i!==n.i&&e.i!==t.i&&e.next.i!==t.i&&Qd(e,e.next,n,t))return!0;e=e.next}while(e!==n);return!1}function Po(n,t){return je(n.prev,n,n.next)<0?je(n,t,n.next)>=0&&je(n,n.prev,t)>=0:je(n,t,n.prev)<0||je(n,n.next,t)<0}function ng(n,t){let e=n,i=!1,s=(n.x+t.x)/2,a=(n.y+t.y)/2;do e.y>a!=e.next.y>a&&e.next.y!==e.y&&s<(e.next.x-e.x)*(a-e.y)/(e.next.y-e.y)+e.x&&(i=!i),e=e.next;while(e!==n);return i}function tp(n,t){let e=Sh(n.i,n.x,n.y),i=Sh(t.i,t.x,t.y),s=n.next,a=t.prev;return n.next=t,t.prev=n,e.next=s,s.prev=e,i.next=e,e.prev=i,a.next=i,i.prev=a,i}function td(n,t,e,i){let s=Sh(n,t,e);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function Io(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function Sh(n,t,e){return{i:n,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function ig(n,t,e,i){let s=0;for(let a=t,c=e-i;a<e;a+=i)s+=(n[c]-n[a])*(n[a+1]+n[c+1]),c=a;return s}function ed(n){let t=n.length;t>2&&n[t-1].equals(n[0])&&n.pop()}function nd(n,t){for(let e=0;e<t.length;e++)n.push(t[e].x),n.push(t[e].y)}function ws(n){let t={};for(let e in n){t[e]={};for(let i in n[e]){let s=n[e][i];if(id(s))s.isRenderTargetTexture?(ie("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=s.clone();else if(Array.isArray(s))if(id(s[0])){let a=[];for(let c=0,o=s.length;c<o;c++)a[c]=s[c].clone();t[e][i]=a}else t[e][i]=s.slice();else t[e][i]=s}}return t}function En(n){let t={};for(let e=0;e<n.length;e++){let i=ws(n[e]);for(let s in i)t[s]=i[s]}return t}function id(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function sg(n){let t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function eu(n){let t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Ee.workingColorSpace}function qs(n,t){return!n||n.constructor===t?n:typeof t.BYTES_PER_ELEMENT=="number"?new t(n):Array.prototype.slice.call(n)}function mh(n){return n!==void 0&&n.inTangents!==void 0&&n.outTangents!==void 0}function np(n,t,e,i,s){let a=1-n;return a*a*a*t+3*a*a*n*e+3*a*n*n*i+n*n*n*s}function ag(n,t,e,i,s){let a=1-n;return 3*a*a*(e-t)+6*a*n*(i-e)+3*n*n*(s-i)}function lg(n,t,e,i,s){let a=(n-t)/(s-t);for(let c=0;c<8;c++){let o=np(a,t,e,i,s)-n;if(Math.abs(o)<1e-10)break;let h=ag(a,t,e,i,s);if(Math.abs(h)<1e-10)break;a=Math.max(0,Math.min(1,a-o/h))}return a}function sd(n,t){for(let e=0,i=n.length;e!==i;e+=2)n[e]*=t}function hd(n,t){return n.distance-t.distance}function Ah(n,t,e,i){let s=!0;if(n.layers.test(t.layers)&&n.raycast(t,e)===!1&&(s=!1),s===!0&&i===!0){let a=n.children;for(let c=0,o=a.length;c<o;c++)Ah(a[c],t,e,!0)}}function su(n,t,e,i){let s=xg(i);switch(e){case qh:return n*t;case Jh:return n*t/s.components*s.byteLength;case Rl:return n*t/s.components*s.byteLength;case is:return n*t*2/s.components*s.byteLength;case Ll:return n*t*2/s.components*s.byteLength;case Zh:return n*t*3/s.components*s.byteLength;case Yn:return n*t*4/s.components*s.byteLength;case Nl:return n*t*4/s.components*s.byteLength;case Wo:case Yo:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case $o:case qo:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Ol:case Ul:return Math.max(n,16)*Math.max(t,8)/4;case Dl:case Fl:return Math.max(n,8)*Math.max(t,8)/2;case Bl:case kl:case Vl:case Hl:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case zl:case Zo:case Gl:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Xl:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Wl:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case Yl:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case $l:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case ql:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case Zl:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case Jl:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case jl:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case Kl:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case Ql:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case tc:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case ec:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case nc:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case ic:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case sc:case rc:case oc:return Math.ceil(n/4)*Math.ceil(t/4)*16;case ac:case lc:return Math.ceil(n/4)*Math.ceil(t/4)*8;case Jo:case cc:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function xg(n){switch(n){case Ln:case Xh:return{byteLength:1,components:1};case gr:case Wh:case oi:return{byteLength:2,components:1};case Pl:case Il:return{byteLength:2,components:4};case si:case Cl:case ri:return{byteLength:4,components:1};case Yh:case $h:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}var ji,Ki,fd,Ph,dd,Ho,pd,pr,Qi,Pn,wn,yi,mr,Ih,Rh,Lh,md,bs,gd,xd,yd,_d,vd,bd,Md,Sd,Nh,Dh,wd,Ed,Td,Ad,Cd,Pd,Id,Rd,Ld,Wa,Ya,$a,Qs,qa,Za,Ja,ja,Oh,Nd,Dd,ii,Fh,Uh,Bh,kh,zh,Vh,Hh,Gh,ts,Ms,El,Tl,Go,Ka,pi,Qa,pn,Od,Xo,xn,Al,es,Ln,Xh,Wh,gr,Cl,si,ri,oi,Pl,Il,xr,Yh,$h,qh,Zh,Yn,mi,ns,Jh,Rl,is,Ll,Nl,Wo,Yo,$o,qo,Dl,Ol,Fl,Ul,Bl,kl,zl,Vl,Hl,Zo,Gl,Xl,Wl,Yl,$l,ql,Zl,Jl,jl,Kl,Ql,tc,ec,nc,ic,sc,rc,oc,ac,lc,Jo,cc,po,tl,Ga,yh,_h,vh,bh,Fd,hc,Ud,Li,An,mo,go,Le,Xa,Bd,kd,zd,Vd,uc,Hd,Gd,fc,Xd,jh,Ss,Kh,ti,tr,Lf,er,qd,ei,bn,Nf,js,nr,tu,jt,Un,K,$c,Df,ue,qc,Of,Ff,Ee,Ds,el,w0,ir,E0,Jc,Cn,Ye,nl,Rn,_o,il,Fe,Os,Jn,T0,A0,Bi,da,Dn,Uf,Bf,Ri,sr,C0,kf,Fs,wi,pa,io,P0,I0,zf,Vf,Hf,Gf,R0,Us,jc,ln,Wn,L0,rr,Zd,ki,ma,ae,Mn,vo,jn,Ei,Qc,Ti,Bs,ks,Xf,th,eh,nh,ih,sh,rh,di,Gi,Ai,Kn,ga,zs,Vs,Hs,zi,Vi,fs,so,xa,ya,ds,on,_a,N0,Ve,bo,Mo,He,D0,ro,ah,xs,O0,Xn,lh,Gs,On,oo,dn,We,sl,Tn,So,ch,F0,U0,Fn,B0,gi,or,Xs,ao,Ws,Ys,$s,lo,Jd,va,co,ba,Wf,hh,Yf,wo,Ci,uh,Sa,wa,Xi,Bn,$f,ps,Ea,qf,Ta,Aa,Ca,fh,Pa,Zf,Ia,Pe,rl,ms,z0,La,ar,ni,ol,al,Jf,ho,Na,dh,jf,ys,Kf,Qf,_s,Eo,To,Wi,ll,Ao,Yi,xi,lr,Oa,Fa,ph,Ua,cr,wh,Ro,Lo,No,$i,ep,rg,og,kn,cl,zn,hl,ul,Do,qi,fl,dl,pl,ml,Vn,Zi,gl,xl,yl,Oo,Ji,_l,vl,ip,bl,Fo,Uo,gh,rd,od,Ml,za,Va,fi,Bo,Hi,ad,ld,Sn,ur,Eh,fr,Zs,Js,Sl,wl,nu,cg,iu,hg,ug,fg,dg,pg,mg,gg,Th,Xe,gS,cd,ko,dr,Ch,ud,Ha,xh,zo,Vo,ru=de(()=>{ji={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Ki={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},fd=0,Ph=1,dd=2,Ho=1,pd=2,pr=3,Qi=0,Pn=1,wn=2,yi=0,mr=1,Ih=2,Rh=3,Lh=4,md=5,bs=100,gd=101,xd=102,yd=103,_d=104,vd=200,bd=201,Md=202,Sd=203,Nh=204,Dh=205,wd=206,Ed=207,Td=208,Ad=209,Cd=210,Pd=211,Id=212,Rd=213,Ld=214,Wa=0,Ya=1,$a=2,Qs=3,qa=4,Za=5,Ja=6,ja=7,Oh=0,Nd=1,Dd=2,ii=0,Fh=1,Uh=2,Bh=3,kh=4,zh=5,Vh=6,Hh=7,Gh=300,ts=301,Ms=302,El=303,Tl=304,Go=306,Ka=1e3,pi=1001,Qa=1002,pn=1003,Od=1004,Xo=1005,xn=1006,Al=1007,es=1008,Ln=1009,Xh=1010,Wh=1011,gr=1012,Cl=1013,si=1014,ri=1015,oi=1016,Pl=1017,Il=1018,xr=1020,Yh=35902,$h=35899,qh=1021,Zh=1022,Yn=1023,mi=1026,ns=1027,Jh=1028,Rl=1029,is=1030,Ll=1031,Nl=1033,Wo=33776,Yo=33777,$o=33778,qo=33779,Dl=35840,Ol=35841,Fl=35842,Ul=35843,Bl=36196,kl=37492,zl=37496,Vl=37488,Hl=37489,Zo=37490,Gl=37491,Xl=37808,Wl=37809,Yl=37810,$l=37811,ql=37812,Zl=37813,Jl=37814,jl=37815,Kl=37816,Ql=37817,tc=37818,ec=37819,nc=37820,ic=37821,sc=36492,rc=36494,oc=36495,ac=36283,lc=36284,Jo=36285,cc=36286,po=2300,tl=2301,Ga=2302,yh=2303,_h=2400,vh=2401,bh=2402,Fd=3200,hc=0,Ud=1,Li="",An="srgb",mo="srgb-linear",go="linear",Le="srgb",Xa=7680,Bd=519,kd=512,zd=513,Vd=514,uc=515,Hd=516,Gd=517,fc=518,Xd=519,jh=35044,Ss=35048,Kh="300 es",ti=2e3,tr=2001;Lf={},er=null;qd={[Wa]:Ya,[$a]:Ja,[qa]:ja,[Qs]:Za,[Ya]:Wa,[Ja]:$a,[ja]:qa,[Za]:Qs},ei=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){let i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){let i=this._listeners;if(i===void 0)return;let s=i[t];if(s!==void 0){let a=s.indexOf(e);a!==-1&&s.splice(a,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let i=e[t.type];if(i!==void 0){t.target=this;let s=i.slice(0);for(let a=0,c=s.length;a<c;a++)s[a].call(this,t);t.target=null}}},bn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Nf=1234567,js=Math.PI/180,nr=180/Math.PI;tu={DEG2RAD:js,RAD2DEG:nr,generateUUID:Pi,clamp:Me,euclideanModulo:Qh,mapLinear:a0,inverseLerp:l0,lerp:fo,damp:c0,pingpong:h0,smoothstep:u0,smootherstep:f0,randInt:d0,randFloat:p0,randFloatSpread:m0,seededRandom:g0,degToRad:x0,radToDeg:y0,isPowerOfTwo:_0,ceilPowerOfTwo:v0,floorPowerOfTwo:b0,setQuaternionFromProperEuler:M0,normalize:Oe,denormalize:Qn},jt=class n{static{n.prototype.isVector2=!0}constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,i=this.y,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6],this.y=s[1]*e+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Me(this.x,t.x,e.x),this.y=Me(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Me(this.x,t,e),this.y=Me(this.y,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Me(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(Me(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let i=Math.cos(e),s=Math.sin(e),a=this.x-t.x,c=this.y-t.y;return this.x=a*i-c*s+t.x,this.y=a*s+c*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Un=class{constructor(t=0,e=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=s}static slerpFlat(t,e,i,s,a,c,o){let h=i[s+0],f=i[s+1],d=i[s+2],g=i[s+3],m=a[c+0],x=a[c+1],v=a[c+2],b=a[c+3];if(g!==b||h!==m||f!==x||d!==v){let y=h*m+f*x+d*v+g*b;y<0&&(m=-m,x=-x,v=-v,b=-b,y=-y);let _=1-o;if(y<.9995){let T=Math.acos(y),A=Math.sin(T);_=Math.sin(_*T)/A,o=Math.sin(o*T)/A,h=h*_+m*o,f=f*_+x*o,d=d*_+v*o,g=g*_+b*o}else{h=h*_+m*o,f=f*_+x*o,d=d*_+v*o,g=g*_+b*o;let T=1/Math.sqrt(h*h+f*f+d*d+g*g);h*=T,f*=T,d*=T,g*=T}}t[e]=h,t[e+1]=f,t[e+2]=d,t[e+3]=g}static multiplyQuaternionsFlat(t,e,i,s,a,c){let o=i[s],h=i[s+1],f=i[s+2],d=i[s+3],g=a[c],m=a[c+1],x=a[c+2],v=a[c+3];return t[e]=o*v+d*g+h*x-f*m,t[e+1]=h*v+d*m+f*g-o*x,t[e+2]=f*v+d*x+o*m-h*g,t[e+3]=d*v-o*g-h*m-f*x,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,s){return this._x=t,this._y=e,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let i=t._x,s=t._y,a=t._z,c=t._order,o=Math.cos,h=Math.sin,f=o(i/2),d=o(s/2),g=o(a/2),m=h(i/2),x=h(s/2),v=h(a/2);switch(c){case"XYZ":this._x=m*d*g+f*x*v,this._y=f*x*g-m*d*v,this._z=f*d*v+m*x*g,this._w=f*d*g-m*x*v;break;case"YXZ":this._x=m*d*g+f*x*v,this._y=f*x*g-m*d*v,this._z=f*d*v-m*x*g,this._w=f*d*g+m*x*v;break;case"ZXY":this._x=m*d*g-f*x*v,this._y=f*x*g+m*d*v,this._z=f*d*v+m*x*g,this._w=f*d*g-m*x*v;break;case"ZYX":this._x=m*d*g-f*x*v,this._y=f*x*g+m*d*v,this._z=f*d*v-m*x*g,this._w=f*d*g+m*x*v;break;case"YZX":this._x=m*d*g+f*x*v,this._y=f*x*g+m*d*v,this._z=f*d*v-m*x*g,this._w=f*d*g-m*x*v;break;case"XZY":this._x=m*d*g-f*x*v,this._y=f*x*g-m*d*v,this._z=f*d*v+m*x*g,this._w=f*d*g+m*x*v;break;default:ie("Quaternion: .setFromEuler() encountered an unknown order: "+c)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let i=e/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,i=e[0],s=e[4],a=e[8],c=e[1],o=e[5],h=e[9],f=e[2],d=e[6],g=e[10],m=i+o+g;if(m>0){let x=.5/Math.sqrt(m+1);this._w=.25/x,this._x=(d-h)*x,this._y=(a-f)*x,this._z=(c-s)*x}else if(i>o&&i>g){let x=2*Math.sqrt(1+i-o-g);this._w=(d-h)/x,this._x=.25*x,this._y=(s+c)/x,this._z=(a+f)/x}else if(o>g){let x=2*Math.sqrt(1+o-i-g);this._w=(a-f)/x,this._x=(s+c)/x,this._y=.25*x,this._z=(h+d)/x}else{let x=2*Math.sqrt(1+g-i-o);this._w=(c-s)/x,this._x=(a+f)/x,this._y=(h+d)/x,this._z=.25*x}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<1e-8?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Me(this.dot(t),-1,1)))}rotateTowards(t,e){let i=this.angleTo(t);if(i===0)return this;let s=Math.min(1,e/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let i=t._x,s=t._y,a=t._z,c=t._w,o=e._x,h=e._y,f=e._z,d=e._w;return this._x=i*d+c*o+s*f-a*h,this._y=s*d+c*h+a*o-i*f,this._z=a*d+c*f+i*h-s*o,this._w=c*d-i*o-s*h-a*f,this._onChangeCallback(),this}slerp(t,e){let i=t._x,s=t._y,a=t._z,c=t._w,o=this.dot(t);o<0&&(i=-i,s=-s,a=-a,c=-c,o=-o);let h=1-e;if(o<.9995){let f=Math.acos(o),d=Math.sin(f);h=Math.sin(h*f)/d,e=Math.sin(e*f)/d,this._x=this._x*h+i*e,this._y=this._y*h+s*e,this._z=this._z*h+a*e,this._w=this._w*h+c*e,this._onChangeCallback()}else this._x=this._x*h+i*e,this._y=this._y*h+s*e,this._z=this._z*h+a*e,this._w=this._w*h+c*e,this.normalize();return this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),a=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),a*Math.sin(e),a*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},K=class n{static{n.prototype.isVector3=!0}constructor(t=0,e=0,i=0){this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Df.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Df.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,i=this.y,s=this.z,a=t.elements;return this.x=a[0]*e+a[3]*i+a[6]*s,this.y=a[1]*e+a[4]*i+a[7]*s,this.z=a[2]*e+a[5]*i+a[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,i=this.y,s=this.z,a=t.elements,c=1/(a[3]*e+a[7]*i+a[11]*s+a[15]);return this.x=(a[0]*e+a[4]*i+a[8]*s+a[12])*c,this.y=(a[1]*e+a[5]*i+a[9]*s+a[13])*c,this.z=(a[2]*e+a[6]*i+a[10]*s+a[14])*c,this}applyQuaternion(t){let e=this.x,i=this.y,s=this.z,a=t.x,c=t.y,o=t.z,h=t.w,f=2*(c*s-o*i),d=2*(o*e-a*s),g=2*(a*i-c*e);return this.x=e+h*f+c*g-o*d,this.y=i+h*d+o*f-a*g,this.z=s+h*g+a*d-c*f,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,i=this.y,s=this.z,a=t.elements;return this.x=a[0]*e+a[4]*i+a[8]*s,this.y=a[1]*e+a[5]*i+a[9]*s,this.z=a[2]*e+a[6]*i+a[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Me(this.x,t.x,e.x),this.y=Me(this.y,t.y,e.y),this.z=Me(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Me(this.x,t,e),this.y=Me(this.y,t,e),this.z=Me(this.z,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Me(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let i=t.x,s=t.y,a=t.z,c=e.x,o=e.y,h=e.z;return this.x=s*h-a*o,this.y=a*c-i*h,this.z=i*o-s*c,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return $c.copy(this).projectOnVector(t),this.sub($c)}reflect(t){return this.sub($c.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(Me(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return e*e+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){let s=Math.sin(e)*t;return this.x=s*Math.sin(i),this.y=Math.cos(e)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},$c=new K,Df=new Un,ue=class n{static{n.prototype.isMatrix3=!0}constructor(t,e,i,s,a,c,o,h,f){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,s,a,c,o,h,f)}set(t,e,i,s,a,c,o,h,f){let d=this.elements;return d[0]=t,d[1]=s,d[2]=o,d[3]=e,d[4]=a,d[5]=h,d[6]=i,d[7]=c,d[8]=f,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,s=e.elements,a=this.elements,c=i[0],o=i[3],h=i[6],f=i[1],d=i[4],g=i[7],m=i[2],x=i[5],v=i[8],b=s[0],y=s[3],_=s[6],T=s[1],A=s[4],S=s[7],R=s[2],E=s[5],P=s[8];return a[0]=c*b+o*T+h*R,a[3]=c*y+o*A+h*E,a[6]=c*_+o*S+h*P,a[1]=f*b+d*T+g*R,a[4]=f*y+d*A+g*E,a[7]=f*_+d*S+g*P,a[2]=m*b+x*T+v*R,a[5]=m*y+x*A+v*E,a[8]=m*_+x*S+v*P,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[1],s=t[2],a=t[3],c=t[4],o=t[5],h=t[6],f=t[7],d=t[8];return e*c*d-e*o*f-i*a*d+i*o*h+s*a*f-s*c*h}invert(){let t=this.elements,e=t[0],i=t[1],s=t[2],a=t[3],c=t[4],o=t[5],h=t[6],f=t[7],d=t[8],g=d*c-o*f,m=o*h-d*a,x=f*a-c*h,v=e*g+i*m+s*x;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);let b=1/v;return t[0]=g*b,t[1]=(s*f-d*i)*b,t[2]=(o*i-s*c)*b,t[3]=m*b,t[4]=(d*e-s*h)*b,t[5]=(s*a-o*e)*b,t[6]=x*b,t[7]=(i*h-f*e)*b,t[8]=(c*e-i*a)*b,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,s,a,c,o){let h=Math.cos(a),f=Math.sin(a);return this.set(i*h,i*f,-i*(h*c+f*o)+c+t,-s*f,s*h,-s*(-f*c+h*o)+o+e,0,0,1),this}scale(t,e){return gs("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(qc.makeScale(t,e)),this}rotate(t){return gs("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(qc.makeRotation(-t)),this}translate(t,e){return gs("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(qc.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,i=t.elements;for(let s=0;s<9;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}},qc=new ue,Of=new ue().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ff=new ue().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Ee=S0();el=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{Ds===void 0&&(Ds=xo("canvas")),Ds.width=t.width,Ds.height=t.height;let s=Ds.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),i=Ds}return i.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=xo("canvas");e.width=t.width,e.height=t.height;let i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);let s=i.getImageData(0,0,t.width,t.height),a=s.data;for(let c=0;c<a.length;c++)a[c]=Ii(a[c]/255)*255;return i.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(Ii(e[i]/255)*255):e[i]=Ii(e[i]);return{data:e,width:t.width,height:t.height}}else return ie("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},w0=0,ir=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:w0++}),this.uuid=Pi(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let a;if(Array.isArray(s)){a=[];for(let c=0,o=s.length;c<o;c++)s[c].isDataTexture?a.push(Zc(s[c].image)):a.push(Zc(s[c]))}else a=Zc(s);i.url=a}return e||(t.images[this.uuid]=i),i}};E0=0,Jc=new K,Cn=class n extends ei{constructor(t=n.DEFAULT_IMAGE,e=n.DEFAULT_MAPPING,i=pi,s=pi,a=xn,c=es,o=Yn,h=Ln,f=n.DEFAULT_ANISOTROPY,d=Li){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:E0++}),this.uuid=Pi(),this.name="",this.source=new ir(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=a,this.minFilter=c,this.anisotropy=f,this.format=o,this.internalFormat=null,this.type=h,this.offset=new jt(0,0),this.repeat=new jt(1,1),this.center=new jt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ue,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Jc).x}get height(){return this.source.getSize(Jc).y}get depth(){return this.source.getSize(Jc).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let i=t[e];if(i===void 0){ie(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){ie(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Gh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Ka:t.x=t.x-Math.floor(t.x);break;case pi:t.x=t.x<0?0:1;break;case Qa:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Ka:t.y=t.y-Math.floor(t.y);break;case pi:t.y=t.y<0?0:1;break;case Qa:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Cn.DEFAULT_IMAGE=null;Cn.DEFAULT_MAPPING=Gh;Cn.DEFAULT_ANISOTROPY=1;Ye=class n{static{n.prototype.isVector4=!0}constructor(t=0,e=0,i=0,s=1){this.x=t,this.y=e,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,i=this.y,s=this.z,a=this.w,c=t.elements;return this.x=c[0]*e+c[4]*i+c[8]*s+c[12]*a,this.y=c[1]*e+c[5]*i+c[9]*s+c[13]*a,this.z=c[2]*e+c[6]*i+c[10]*s+c[14]*a,this.w=c[3]*e+c[7]*i+c[11]*s+c[15]*a,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,s,a,h=t.elements,f=h[0],d=h[4],g=h[8],m=h[1],x=h[5],v=h[9],b=h[2],y=h[6],_=h[10];if(Math.abs(d-m)<.01&&Math.abs(g-b)<.01&&Math.abs(v-y)<.01){if(Math.abs(d+m)<.1&&Math.abs(g+b)<.1&&Math.abs(v+y)<.1&&Math.abs(f+x+_-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let A=(f+1)/2,S=(x+1)/2,R=(_+1)/2,E=(d+m)/4,P=(g+b)/4,w=(v+y)/4;return A>S&&A>R?A<.01?(i=0,s=.707106781,a=.707106781):(i=Math.sqrt(A),s=E/i,a=P/i):S>R?S<.01?(i=.707106781,s=0,a=.707106781):(s=Math.sqrt(S),i=E/s,a=w/s):R<.01?(i=.707106781,s=.707106781,a=0):(a=Math.sqrt(R),i=P/a,s=w/a),this.set(i,s,a,e),this}let T=Math.sqrt((y-v)*(y-v)+(g-b)*(g-b)+(m-d)*(m-d));return Math.abs(T)<.001&&(T=1),this.x=(y-v)/T,this.y=(g-b)/T,this.z=(m-d)/T,this.w=Math.acos((f+x+_-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Me(this.x,t.x,e.x),this.y=Me(this.y,t.y,e.y),this.z=Me(this.z,t.z,e.z),this.w=Me(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Me(this.x,t,e),this.y=Me(this.y,t,e),this.z=Me(this.z,t,e),this.w=Me(this.w,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Me(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},nl=class extends ei{constructor(t=1,e=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:xn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=i.depth,this.scissor=new Ye(0,0,t,e),this.scissorTest=!1,this.viewport=new Ye(0,0,t,e),this.textures=[];let s={width:t,height:e,depth:i.depth},a=new Cn(s),c=i.count;for(let o=0;o<c;o++)this.textures[o]=a.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:xn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let s=0,a=this.textures.length;s<a;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,i=t.textures.length;e<i;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new ir(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Rn=class extends nl{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}},_o=class extends Cn{constructor(t=null,e=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=pn,this.minFilter=pn,this.wrapR=pi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}},il=class extends Cn{constructor(t=null,e=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=pn,this.minFilter=pn,this.wrapR=pi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}},Fe=class n{static{n.prototype.isMatrix4=!0}constructor(t,e,i,s,a,c,o,h,f,d,g,m,x,v,b,y){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,s,a,c,o,h,f,d,g,m,x,v,b,y)}set(t,e,i,s,a,c,o,h,f,d,g,m,x,v,b,y){let _=this.elements;return _[0]=t,_[4]=e,_[8]=i,_[12]=s,_[1]=a,_[5]=c,_[9]=o,_[13]=h,_[2]=f,_[6]=d,_[10]=g,_[14]=m,_[3]=x,_[7]=v,_[11]=b,_[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){let e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),i.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,i=t.elements,s=1/Os.setFromMatrixColumn(t,0).length(),a=1/Os.setFromMatrixColumn(t,1).length(),c=1/Os.setFromMatrixColumn(t,2).length();return e[0]=i[0]*s,e[1]=i[1]*s,e[2]=i[2]*s,e[3]=0,e[4]=i[4]*a,e[5]=i[5]*a,e[6]=i[6]*a,e[7]=0,e[8]=i[8]*c,e[9]=i[9]*c,e[10]=i[10]*c,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,i=t.x,s=t.y,a=t.z,c=Math.cos(i),o=Math.sin(i),h=Math.cos(s),f=Math.sin(s),d=Math.cos(a),g=Math.sin(a);if(t.order==="XYZ"){let m=c*d,x=c*g,v=o*d,b=o*g;e[0]=h*d,e[4]=-h*g,e[8]=f,e[1]=x+v*f,e[5]=m-b*f,e[9]=-o*h,e[2]=b-m*f,e[6]=v+x*f,e[10]=c*h}else if(t.order==="YXZ"){let m=h*d,x=h*g,v=f*d,b=f*g;e[0]=m+b*o,e[4]=v*o-x,e[8]=c*f,e[1]=c*g,e[5]=c*d,e[9]=-o,e[2]=x*o-v,e[6]=b+m*o,e[10]=c*h}else if(t.order==="ZXY"){let m=h*d,x=h*g,v=f*d,b=f*g;e[0]=m-b*o,e[4]=-c*g,e[8]=v+x*o,e[1]=x+v*o,e[5]=c*d,e[9]=b-m*o,e[2]=-c*f,e[6]=o,e[10]=c*h}else if(t.order==="ZYX"){let m=c*d,x=c*g,v=o*d,b=o*g;e[0]=h*d,e[4]=v*f-x,e[8]=m*f+b,e[1]=h*g,e[5]=b*f+m,e[9]=x*f-v,e[2]=-f,e[6]=o*h,e[10]=c*h}else if(t.order==="YZX"){let m=c*h,x=c*f,v=o*h,b=o*f;e[0]=h*d,e[4]=b-m*g,e[8]=v*g+x,e[1]=g,e[5]=c*d,e[9]=-o*d,e[2]=-f*d,e[6]=x*g+v,e[10]=m-b*g}else if(t.order==="XZY"){let m=c*h,x=c*f,v=o*h,b=o*f;e[0]=h*d,e[4]=-g,e[8]=f*d,e[1]=m*g+b,e[5]=c*d,e[9]=x*g-v,e[2]=v*g-x,e[6]=o*d,e[10]=b*g+m}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(T0,t,A0)}lookAt(t,e,i){let s=this.elements;return Dn.subVectors(t,e),Dn.lengthSq()===0&&(Dn.z=1),Dn.normalize(),Bi.crossVectors(i,Dn),Bi.lengthSq()===0&&(Math.abs(i.z)===1?Dn.x+=1e-4:Dn.z+=1e-4,Dn.normalize(),Bi.crossVectors(i,Dn)),Bi.normalize(),da.crossVectors(Dn,Bi),s[0]=Bi.x,s[4]=da.x,s[8]=Dn.x,s[1]=Bi.y,s[5]=da.y,s[9]=Dn.y,s[2]=Bi.z,s[6]=da.z,s[10]=Dn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,s=e.elements,a=this.elements,c=i[0],o=i[4],h=i[8],f=i[12],d=i[1],g=i[5],m=i[9],x=i[13],v=i[2],b=i[6],y=i[10],_=i[14],T=i[3],A=i[7],S=i[11],R=i[15],E=s[0],P=s[4],w=s[8],N=s[12],U=s[1],B=s[5],G=s[9],H=s[13],z=s[2],$=s[6],J=s[10],O=s[14],Z=s[3],W=s[7],it=s[11],ot=s[15];return a[0]=c*E+o*U+h*z+f*Z,a[4]=c*P+o*B+h*$+f*W,a[8]=c*w+o*G+h*J+f*it,a[12]=c*N+o*H+h*O+f*ot,a[1]=d*E+g*U+m*z+x*Z,a[5]=d*P+g*B+m*$+x*W,a[9]=d*w+g*G+m*J+x*it,a[13]=d*N+g*H+m*O+x*ot,a[2]=v*E+b*U+y*z+_*Z,a[6]=v*P+b*B+y*$+_*W,a[10]=v*w+b*G+y*J+_*it,a[14]=v*N+b*H+y*O+_*ot,a[3]=T*E+A*U+S*z+R*Z,a[7]=T*P+A*B+S*$+R*W,a[11]=T*w+A*G+S*J+R*it,a[15]=T*N+A*H+S*O+R*ot,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[4],s=t[8],a=t[12],c=t[1],o=t[5],h=t[9],f=t[13],d=t[2],g=t[6],m=t[10],x=t[14],v=t[3],b=t[7],y=t[11],_=t[15],T=h*x-f*m,A=o*x-f*g,S=o*m-h*g,R=c*x-f*d,E=c*m-h*d,P=c*g-o*d;return e*(b*T-y*A+_*S)-i*(v*T-y*R+_*E)+s*(v*A-b*R+_*P)-a*(v*S-b*E+y*P)}determinantAffine(){let t=this.elements,e=t[0],i=t[4],s=t[8],a=t[1],c=t[5],o=t[9],h=t[2],f=t[6],d=t[10];return e*(c*d-o*f)-i*(a*d-o*h)+s*(a*f-c*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=i),this}invert(){let t=this.elements,e=t[0],i=t[1],s=t[2],a=t[3],c=t[4],o=t[5],h=t[6],f=t[7],d=t[8],g=t[9],m=t[10],x=t[11],v=t[12],b=t[13],y=t[14],_=t[15],T=e*o-i*c,A=e*h-s*c,S=e*f-a*c,R=i*h-s*o,E=i*f-a*o,P=s*f-a*h,w=d*b-g*v,N=d*y-m*v,U=d*_-x*v,B=g*y-m*b,G=g*_-x*b,H=m*_-x*y,z=T*H-A*G+S*B+R*U-E*N+P*w;if(z===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let $=1/z;return t[0]=(o*H-h*G+f*B)*$,t[1]=(s*G-i*H-a*B)*$,t[2]=(b*P-y*E+_*R)*$,t[3]=(m*E-g*P-x*R)*$,t[4]=(h*U-c*H-f*N)*$,t[5]=(e*H-s*U+a*N)*$,t[6]=(y*S-v*P-_*A)*$,t[7]=(d*P-m*S+x*A)*$,t[8]=(c*G-o*U+f*w)*$,t[9]=(i*U-e*G-a*w)*$,t[10]=(v*E-b*S+_*T)*$,t[11]=(g*S-d*E-x*T)*$,t[12]=(o*N-c*B-h*w)*$,t[13]=(e*B-i*N+s*w)*$,t[14]=(b*A-v*R-y*T)*$,t[15]=(d*R-g*A+m*T)*$,this}scale(t){let e=this.elements,i=t.x,s=t.y,a=t.z;return e[0]*=i,e[4]*=s,e[8]*=a,e[1]*=i,e[5]*=s,e[9]*=a,e[2]*=i,e[6]*=s,e[10]*=a,e[3]*=i,e[7]*=s,e[11]*=a,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,s))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let i=Math.cos(e),s=Math.sin(e),a=1-i,c=t.x,o=t.y,h=t.z,f=a*c,d=a*o;return this.set(f*c+i,f*o-s*h,f*h+s*o,0,f*o+s*h,d*o+i,d*h-s*c,0,f*h-s*o,d*h+s*c,a*h*h+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,s,a,c){return this.set(1,i,a,0,t,1,c,0,e,s,1,0,0,0,0,1),this}compose(t,e,i){let s=this.elements,a=e._x,c=e._y,o=e._z,h=e._w,f=a+a,d=c+c,g=o+o,m=a*f,x=a*d,v=a*g,b=c*d,y=c*g,_=o*g,T=h*f,A=h*d,S=h*g,R=i.x,E=i.y,P=i.z;return s[0]=(1-(b+_))*R,s[1]=(x+S)*R,s[2]=(v-A)*R,s[3]=0,s[4]=(x-S)*E,s[5]=(1-(m+_))*E,s[6]=(y+T)*E,s[7]=0,s[8]=(v+A)*P,s[9]=(y-T)*P,s[10]=(1-(m+b))*P,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,i){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let a=this.determinantAffine();if(a===0)return i.set(1,1,1),e.identity(),this;let c=Os.set(s[0],s[1],s[2]).length(),o=Os.set(s[4],s[5],s[6]).length(),h=Os.set(s[8],s[9],s[10]).length();a<0&&(c=-c),Jn.copy(this);let f=1/c,d=1/o,g=1/h;return Jn.elements[0]*=f,Jn.elements[1]*=f,Jn.elements[2]*=f,Jn.elements[4]*=d,Jn.elements[5]*=d,Jn.elements[6]*=d,Jn.elements[8]*=g,Jn.elements[9]*=g,Jn.elements[10]*=g,e.setFromRotationMatrix(Jn),i.x=c,i.y=o,i.z=h,this}makePerspective(t,e,i,s,a,c,o=ti,h=!1){let f=this.elements,d=2*a/(e-t),g=2*a/(i-s),m=(e+t)/(e-t),x=(i+s)/(i-s),v,b;if(h)v=a/(c-a),b=c*a/(c-a);else if(o===ti)v=-(c+a)/(c-a),b=-2*c*a/(c-a);else if(o===tr)v=-c/(c-a),b=-c*a/(c-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return f[0]=d,f[4]=0,f[8]=m,f[12]=0,f[1]=0,f[5]=g,f[9]=x,f[13]=0,f[2]=0,f[6]=0,f[10]=v,f[14]=b,f[3]=0,f[7]=0,f[11]=-1,f[15]=0,this}makeOrthographic(t,e,i,s,a,c,o=ti,h=!1){let f=this.elements,d=2/(e-t),g=2/(i-s),m=-(e+t)/(e-t),x=-(i+s)/(i-s),v,b;if(h)v=1/(c-a),b=c/(c-a);else if(o===ti)v=-2/(c-a),b=-(c+a)/(c-a);else if(o===tr)v=-1/(c-a),b=-a/(c-a);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return f[0]=d,f[4]=0,f[8]=0,f[12]=m,f[1]=0,f[5]=g,f[9]=0,f[13]=x,f[2]=0,f[6]=0,f[10]=v,f[14]=b,f[3]=0,f[7]=0,f[11]=0,f[15]=1,this}equals(t){let e=this.elements,i=t.elements;for(let s=0;s<16;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}},Os=new K,Jn=new Fe,T0=new K(0,0,0),A0=new K(1,1,1),Bi=new K,da=new K,Dn=new K,Uf=new Fe,Bf=new Un,Ri=class n{constructor(t=0,e=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,s=this._order){return this._x=t,this._y=e,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){let s=t.elements,a=s[0],c=s[4],o=s[8],h=s[1],f=s[5],d=s[9],g=s[2],m=s[6],x=s[10];switch(e){case"XYZ":this._y=Math.asin(Me(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-d,x),this._z=Math.atan2(-c,a)):(this._x=Math.atan2(m,f),this._z=0);break;case"YXZ":this._x=Math.asin(-Me(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(o,x),this._z=Math.atan2(h,f)):(this._y=Math.atan2(-g,a),this._z=0);break;case"ZXY":this._x=Math.asin(Me(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(-g,x),this._z=Math.atan2(-c,f)):(this._y=0,this._z=Math.atan2(h,a));break;case"ZYX":this._y=Math.asin(-Me(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(m,x),this._z=Math.atan2(h,a)):(this._x=0,this._z=Math.atan2(-c,f));break;case"YZX":this._z=Math.asin(Me(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-d,f),this._y=Math.atan2(-g,a)):(this._x=0,this._y=Math.atan2(o,x));break;case"XZY":this._z=Math.asin(-Me(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(m,f),this._y=Math.atan2(o,a)):(this._x=Math.atan2(-d,x),this._y=0);break;default:ie("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return Uf.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Uf,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Bf.setFromEuler(this),this.setFromQuaternion(Bf,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Ri.DEFAULT_ORDER="XYZ";sr=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},C0=0,kf=new K,Fs=new Un,wi=new Fe,pa=new K,io=new K,P0=new K,I0=new Un,zf=new K(1,0,0),Vf=new K(0,1,0),Hf=new K(0,0,1),Gf={type:"added"},R0={type:"removed"},Us={type:"childadded",child:null},jc={type:"childremoved",child:null},ln=class n extends ei{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:C0++}),this.uuid=Pi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let t=new K,e=new Ri,i=new Un,s=new K(1,1,1);function a(){i.setFromEuler(e,!1)}function c(){e.setFromQuaternion(i,void 0,!1)}e._onChange(a),i._onChange(c),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Fe},normalMatrix:{value:new ue}}),this.matrix=new Fe,this.matrixWorld=new Fe,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new sr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Fs.setFromAxisAngle(t,e),this.quaternion.multiply(Fs),this}rotateOnWorldAxis(t,e){return Fs.setFromAxisAngle(t,e),this.quaternion.premultiply(Fs),this}rotateX(t){return this.rotateOnAxis(zf,t)}rotateY(t){return this.rotateOnAxis(Vf,t)}rotateZ(t){return this.rotateOnAxis(Hf,t)}translateOnAxis(t,e){return kf.copy(t).applyQuaternion(this.quaternion),this.position.add(kf.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(zf,t)}translateY(t){return this.translateOnAxis(Vf,t)}translateZ(t){return this.translateOnAxis(Hf,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(wi.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?pa.copy(t):pa.set(t,e,i);let s=this.parent;this.updateWorldMatrix(!0,!1),io.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?wi.lookAt(io,pa,this.up):wi.lookAt(pa,io,this.up),this.quaternion.setFromRotationMatrix(wi),s&&(wi.extractRotation(s.matrixWorld),Fs.setFromRotationMatrix(wi),this.quaternion.premultiply(Fs.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(se("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Gf),Us.child=t,this.dispatchEvent(Us),Us.child=null):se("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(R0),jc.child=t,this.dispatchEvent(jc),jc.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),wi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),wi.multiply(t.parent.matrixWorld)),t.applyMatrix4(wi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Gf),Us.child=t,this.dispatchEvent(Us),Us.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,s=this.children.length;i<s;i++){let c=this.children[i].getObjectByProperty(t,e);if(c!==void 0)return c}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);let s=this.children;for(let a=0,c=s.length;a<c;a++)s[a].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(io,t,P0),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(io,I0,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,i=t.y,s=t.z,a=this.matrix.elements;a[12]+=e-a[0]*e-a[4]*i-a[8]*s,a[13]+=i-a[1]*e-a[5]*i-a[9]*s,a[14]+=s-a[2]*e-a[6]*i-a[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e,i=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),e===!0){let a=this.children;for(let c=0,o=a.length;c<o;c++)a[c].updateWorldMatrix(!1,!0,i)}}toJSON(t){let e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function a(o,h){return o[h.uuid]===void 0&&(o[h.uuid]=h.toJSON(t)),h.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=a(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let h=o.shapes;if(Array.isArray(h))for(let f=0,d=h.length;f<d;f++){let g=h[f];a(t.shapes,g)}else a(t.shapes,h)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let h=0,f=this.material.length;h<f;h++)o.push(a(t.materials,this.material[h]));s.material=o}else s.material=a(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let h=this.animations[o];s.animations.push(a(t.animations,h))}}if(e){let o=c(t.geometries),h=c(t.materials),f=c(t.textures),d=c(t.images),g=c(t.shapes),m=c(t.skeletons),x=c(t.animations),v=c(t.nodes);o.length>0&&(i.geometries=o),h.length>0&&(i.materials=h),f.length>0&&(i.textures=f),d.length>0&&(i.images=d),g.length>0&&(i.shapes=g),m.length>0&&(i.skeletons=m),x.length>0&&(i.animations=x),v.length>0&&(i.nodes=v)}return i.object=s,i;function c(o){let h=[];for(let f in o){let d=o[f];delete d.metadata,h.push(d)}return h}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){let s=t.children[i];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};ln.DEFAULT_UP=new K(0,1,0);ln.DEFAULT_MATRIX_AUTO_UPDATE=!0;ln.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;Wn=class extends ln{constructor(){super(),this.isGroup=!0,this.type="Group"}},L0={type:"move"},rr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Wn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Wn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new K,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new K),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Wn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new K,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new K,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let s=null,a=null,c=null,o=this._targetRay,h=this._grip,f=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(f&&t.hand){c=!0;for(let b of t.hand.values()){let y=e.getJointPose(b,i),_=this._getHandJoint(f,b);y!==null&&(_.matrix.fromArray(y.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=y.radius),_.visible=y!==null}let d=f.joints["index-finger-tip"],g=f.joints["thumb-tip"],m=d.position.distanceTo(g.position),x=.02,v=.005;f.inputState.pinching&&m>x+v?(f.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!f.inputState.pinching&&m<=x-v&&(f.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else h!==null&&t.gripSpace&&(a=e.getPose(t.gripSpace,i),a!==null&&(h.matrix.fromArray(a.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,a.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(a.linearVelocity)):h.hasLinearVelocity=!1,a.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(a.angularVelocity)):h.hasAngularVelocity=!1,h.eventsEnabled&&h.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(s=e.getPose(t.targetRaySpace,i),s===null&&a!==null&&(s=a),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(L0)))}return o!==null&&(o.visible=s!==null),h!==null&&(h.visible=a!==null),f!==null&&(f.visible=c!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let i=new Wn;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}},Zd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ki={h:0,s:0,l:0},ma={h:0,s:0,l:0};ae=class{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=An){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Ee.colorSpaceToWorking(this,e),this}setRGB(t,e,i,s=Ee.workingColorSpace){return this.r=t,this.g=e,this.b=i,Ee.colorSpaceToWorking(this,s),this}setHSL(t,e,i,s=Ee.workingColorSpace){if(t=Qh(t,1),e=Me(e,0,1),i=Me(i,0,1),e===0)this.r=this.g=this.b=i;else{let a=i<=.5?i*(1+e):i+e-i*e,c=2*i-a;this.r=Kc(c,a,t+1/3),this.g=Kc(c,a,t),this.b=Kc(c,a,t-1/3)}return Ee.colorSpaceToWorking(this,s),this}setStyle(t,e=An){function i(a){a!==void 0&&parseFloat(a)<1&&ie("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let a,c=s[1],o=s[2];switch(c){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,e);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,e);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,e);break;default:ie("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let a=s[1],c=a.length;if(c===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,e);if(c===6)return this.setHex(parseInt(a,16),e);ie("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=An){let i=Zd[t.toLowerCase()];return i!==void 0?this.setHex(i,e):ie("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Ii(t.r),this.g=Ii(t.g),this.b=Ii(t.b),this}copyLinearToSRGB(t){return this.r=Ks(t.r),this.g=Ks(t.g),this.b=Ks(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=An){return Ee.workingToColorSpace(Mn.copy(this),t),Math.round(Me(Mn.r*255,0,255))*65536+Math.round(Me(Mn.g*255,0,255))*256+Math.round(Me(Mn.b*255,0,255))}getHexString(t=An){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Ee.workingColorSpace){Ee.workingToColorSpace(Mn.copy(this),e);let i=Mn.r,s=Mn.g,a=Mn.b,c=Math.max(i,s,a),o=Math.min(i,s,a),h,f,d=(o+c)/2;if(o===c)h=0,f=0;else{let g=c-o;switch(f=d<=.5?g/(c+o):g/(2-c-o),c){case i:h=(s-a)/g+(s<a?6:0);break;case s:h=(a-i)/g+2;break;case a:h=(i-s)/g+4;break}h/=6}return t.h=h,t.s=f,t.l=d,t}getRGB(t,e=Ee.workingColorSpace){return Ee.workingToColorSpace(Mn.copy(this),e),t.r=Mn.r,t.g=Mn.g,t.b=Mn.b,t}getStyle(t=An){Ee.workingToColorSpace(Mn.copy(this),t);let e=Mn.r,i=Mn.g,s=Mn.b;return t!==An?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,e,i){return this.getHSL(ki),this.setHSL(ki.h+t,ki.s+e,ki.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(ki),t.getHSL(ma);let i=fo(ki.h,ma.h,e),s=fo(ki.s,ma.s,e),a=fo(ki.l,ma.l,e);return this.setHSL(i,s,a),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,i=this.g,s=this.b,a=t.elements;return this.r=a[0]*e+a[3]*i+a[6]*s,this.g=a[1]*e+a[4]*i+a[7]*s,this.b=a[2]*e+a[5]*i+a[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Mn=new ae;ae.NAMES=Zd;vo=class extends ln{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ri,this.environmentIntensity=1,this.environmentRotation=new Ri,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},jn=new K,Ei=new K,Qc=new K,Ti=new K,Bs=new K,ks=new K,Xf=new K,th=new K,eh=new K,nh=new K,ih=new Ye,sh=new Ye,rh=new Ye,di=class n{constructor(t=new K,e=new K,i=new K){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,s){s.subVectors(i,e),jn.subVectors(t,e),s.cross(jn);let a=s.lengthSq();return a>0?s.multiplyScalar(1/Math.sqrt(a)):s.set(0,0,0)}static getBarycoord(t,e,i,s,a){jn.subVectors(s,e),Ei.subVectors(i,e),Qc.subVectors(t,e);let c=jn.dot(jn),o=jn.dot(Ei),h=jn.dot(Qc),f=Ei.dot(Ei),d=Ei.dot(Qc),g=c*f-o*o;if(g===0)return a.set(0,0,0),null;let m=1/g,x=(f*h-o*d)*m,v=(c*d-o*h)*m;return a.set(1-x-v,v,x)}static containsPoint(t,e,i,s){return this.getBarycoord(t,e,i,s,Ti)===null?!1:Ti.x>=0&&Ti.y>=0&&Ti.x+Ti.y<=1}static getInterpolation(t,e,i,s,a,c,o,h){return this.getBarycoord(t,e,i,s,Ti)===null?(h.x=0,h.y=0,"z"in h&&(h.z=0),"w"in h&&(h.w=0),null):(h.setScalar(0),h.addScaledVector(a,Ti.x),h.addScaledVector(c,Ti.y),h.addScaledVector(o,Ti.z),h)}static getInterpolatedAttribute(t,e,i,s,a,c){return ih.setScalar(0),sh.setScalar(0),rh.setScalar(0),ih.fromBufferAttribute(t,e),sh.fromBufferAttribute(t,i),rh.fromBufferAttribute(t,s),c.setScalar(0),c.addScaledVector(ih,a.x),c.addScaledVector(sh,a.y),c.addScaledVector(rh,a.z),c}static isFrontFacing(t,e,i,s){return jn.subVectors(i,e),Ei.subVectors(t,e),jn.cross(Ei).dot(s)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,s){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,i,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return jn.subVectors(this.c,this.b),Ei.subVectors(this.a,this.b),jn.cross(Ei).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return n.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return n.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,s,a){return n.getInterpolation(t,this.a,this.b,this.c,e,i,s,a)}containsPoint(t){return n.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return n.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let i=this.a,s=this.b,a=this.c,c,o;Bs.subVectors(s,i),ks.subVectors(a,i),th.subVectors(t,i);let h=Bs.dot(th),f=ks.dot(th);if(h<=0&&f<=0)return e.copy(i);eh.subVectors(t,s);let d=Bs.dot(eh),g=ks.dot(eh);if(d>=0&&g<=d)return e.copy(s);let m=h*g-d*f;if(m<=0&&h>=0&&d<=0)return c=h/(h-d),e.copy(i).addScaledVector(Bs,c);nh.subVectors(t,a);let x=Bs.dot(nh),v=ks.dot(nh);if(v>=0&&x<=v)return e.copy(a);let b=x*f-h*v;if(b<=0&&f>=0&&v<=0)return o=f/(f-v),e.copy(i).addScaledVector(ks,o);let y=d*v-x*g;if(y<=0&&g-d>=0&&x-v>=0)return Xf.subVectors(a,s),o=(g-d)/(g-d+(x-v)),e.copy(s).addScaledVector(Xf,o);let _=1/(y+b+m);return c=b*_,o=m*_,e.copy(i).addScaledVector(Bs,c).addScaledVector(ks,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Gi=class{constructor(t=new K(1/0,1/0,1/0),e=new K(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(Kn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(Kn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let i=Kn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let i=t.geometry;if(i!==void 0){let a=i.getAttribute("position");if(e===!0&&a!==void 0&&t.isInstancedMesh!==!0)for(let c=0,o=a.count;c<o;c++)t.isMesh===!0?t.getVertexPosition(c,Kn):Kn.fromBufferAttribute(a,c),Kn.applyMatrix4(t.matrixWorld),this.expandByPoint(Kn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),ga.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),ga.copy(i.boundingBox)),ga.applyMatrix4(t.matrixWorld),this.union(ga)}let s=t.children;for(let a=0,c=s.length;a<c;a++)this.expandByObject(s[a],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Kn),Kn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(so),xa.subVectors(this.max,so),zs.subVectors(t.a,so),Vs.subVectors(t.b,so),Hs.subVectors(t.c,so),zi.subVectors(Vs,zs),Vi.subVectors(Hs,Vs),fs.subVectors(zs,Hs);let e=[0,-zi.z,zi.y,0,-Vi.z,Vi.y,0,-fs.z,fs.y,zi.z,0,-zi.x,Vi.z,0,-Vi.x,fs.z,0,-fs.x,-zi.y,zi.x,0,-Vi.y,Vi.x,0,-fs.y,fs.x,0];return!oh(e,zs,Vs,Hs,xa)||(e=[1,0,0,0,1,0,0,0,1],!oh(e,zs,Vs,Hs,xa))?!1:(ya.crossVectors(zi,Vi),e=[ya.x,ya.y,ya.z],oh(e,zs,Vs,Hs,xa))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Kn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Kn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Ai[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Ai[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Ai[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Ai[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Ai[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Ai[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Ai[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Ai[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Ai),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},Ai=[new K,new K,new K,new K,new K,new K,new K,new K],Kn=new K,ga=new Gi,zs=new K,Vs=new K,Hs=new K,zi=new K,Vi=new K,fs=new K,so=new K,xa=new K,ya=new K,ds=new K;on=new K,_a=new jt,N0=0,Ve=class extends ei{constructor(t,e,i=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:N0++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=jh,this.updateRanges=[],this.gpuType=ri,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let s=0,a=this.itemSize;s<a;s++)this.array[t+s]=e.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)_a.fromBufferAttribute(this,e),_a.applyMatrix3(t),this.setXY(e,_a.x,_a.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)on.fromBufferAttribute(this,e),on.applyMatrix3(t),this.setXYZ(e,on.x,on.y,on.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)on.fromBufferAttribute(this,e),on.applyMatrix4(t),this.setXYZ(e,on.x,on.y,on.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)on.fromBufferAttribute(this,e),on.applyNormalMatrix(t),this.setXYZ(e,on.x,on.y,on.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)on.fromBufferAttribute(this,e),on.transformDirection(t),this.setXYZ(e,on.x,on.y,on.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=Qn(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=Oe(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Qn(e,this.array)),e}setX(t,e){return this.normalized&&(e=Oe(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Qn(e,this.array)),e}setY(t,e){return this.normalized&&(e=Oe(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Qn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Oe(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Qn(e,this.array)),e}setW(t,e){return this.normalized&&(e=Oe(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=Oe(e,this.array),i=Oe(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,s){return t*=this.itemSize,this.normalized&&(e=Oe(e,this.array),i=Oe(i,this.array),s=Oe(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,e,i,s,a){return t*=this.itemSize,this.normalized&&(e=Oe(e,this.array),i=Oe(i,this.array),s=Oe(s,this.array),a=Oe(a,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=a,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}},bo=class extends Ve{constructor(t,e,i){super(new Uint16Array(t),e,i)}},Mo=class extends Ve{constructor(t,e,i){super(new Uint32Array(t),e,i)}},He=class extends Ve{constructor(t,e,i){super(new Float32Array(t),e,i)}},D0=new Gi,ro=new K,ah=new K,xs=class{constructor(t=new K,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let i=this.center;e!==void 0?i.copy(e):D0.setFromPoints(t).getCenter(i);let s=0;for(let a=0,c=t.length;a<c;a++)s=Math.max(s,i.distanceToSquared(t[a]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;ro.subVectors(t,this.center);let e=ro.lengthSq();if(e>this.radius*this.radius){let i=Math.sqrt(e),s=(i-this.radius)*.5;this.center.addScaledVector(ro,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(ah.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(ro.copy(t.center).add(ah)),this.expandByPoint(ro.copy(t.center).sub(ah))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},O0=0,Xn=new Fe,lh=new ln,Gs=new K,On=new Gi,oo=new Gi,dn=new K,We=class n extends ei{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:O0++}),this.uuid=Pi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(r0(t)?Mo:bo)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let a=new ue().getNormalMatrix(t);i.applyNormalMatrix(a),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return Xn.makeRotationFromQuaternion(t),this.applyMatrix4(Xn),this}rotateX(t){return Xn.makeRotationX(t),this.applyMatrix4(Xn),this}rotateY(t){return Xn.makeRotationY(t),this.applyMatrix4(Xn),this}rotateZ(t){return Xn.makeRotationZ(t),this.applyMatrix4(Xn),this}translate(t,e,i){return Xn.makeTranslation(t,e,i),this.applyMatrix4(Xn),this}scale(t,e,i){return Xn.makeScale(t,e,i),this.applyMatrix4(Xn),this}lookAt(t){return lh.lookAt(t),lh.updateMatrix(),this.applyMatrix4(lh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Gs).negate(),this.translate(Gs.x,Gs.y,Gs.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let i=[];for(let s=0,a=t.length;s<a;s++){let c=t[s];i.push(c.x,c.y,c.z||0)}this.setAttribute("position",new He(i,3))}else{let i=Math.min(t.length,e.count);for(let s=0;s<i;s++){let a=t[s];e.setXYZ(s,a.x,a.y,a.z||0)}t.length>e.count&&ie("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Gi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){se("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new K(-1/0,-1/0,-1/0),new K(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,s=e.length;i<s;i++){let a=e[i];On.setFromBufferAttribute(a),this.morphTargetsRelative?(dn.addVectors(this.boundingBox.min,On.min),this.boundingBox.expandByPoint(dn),dn.addVectors(this.boundingBox.max,On.max),this.boundingBox.expandByPoint(dn)):(this.boundingBox.expandByPoint(On.min),this.boundingBox.expandByPoint(On.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&se('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new xs);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){se("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new K,1/0);return}if(t){let i=this.boundingSphere.center;if(On.setFromBufferAttribute(t),e)for(let a=0,c=e.length;a<c;a++){let o=e[a];oo.setFromBufferAttribute(o),this.morphTargetsRelative?(dn.addVectors(On.min,oo.min),On.expandByPoint(dn),dn.addVectors(On.max,oo.max),On.expandByPoint(dn)):(On.expandByPoint(oo.min),On.expandByPoint(oo.max))}On.getCenter(i);let s=0;for(let a=0,c=t.count;a<c;a++)dn.fromBufferAttribute(t,a),s=Math.max(s,i.distanceToSquared(dn));if(e)for(let a=0,c=e.length;a<c;a++){let o=e[a],h=this.morphTargetsRelative;for(let f=0,d=o.count;f<d;f++)dn.fromBufferAttribute(o,f),h&&(Gs.fromBufferAttribute(t,f),dn.add(Gs)),s=Math.max(s,i.distanceToSquared(dn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&se('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){se("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=e.position,s=e.normal,a=e.uv,c=this.getAttribute("tangent");(c===void 0||c.count!==i.count)&&(c=new Ve(new Float32Array(4*i.count),4),this.setAttribute("tangent",c));let o=[],h=[];for(let w=0;w<i.count;w++)o[w]=new K,h[w]=new K;let f=new K,d=new K,g=new K,m=new jt,x=new jt,v=new jt,b=new K,y=new K;function _(w,N,U){f.fromBufferAttribute(i,w),d.fromBufferAttribute(i,N),g.fromBufferAttribute(i,U),m.fromBufferAttribute(a,w),x.fromBufferAttribute(a,N),v.fromBufferAttribute(a,U),d.sub(f),g.sub(f),x.sub(m),v.sub(m);let B=1/(x.x*v.y-v.x*x.y);isFinite(B)&&(b.copy(d).multiplyScalar(v.y).addScaledVector(g,-x.y).multiplyScalar(B),y.copy(g).multiplyScalar(x.x).addScaledVector(d,-v.x).multiplyScalar(B),o[w].add(b),o[N].add(b),o[U].add(b),h[w].add(y),h[N].add(y),h[U].add(y))}let T=this.groups;T.length===0&&(T=[{start:0,count:t.count}]);for(let w=0,N=T.length;w<N;++w){let U=T[w],B=U.start,G=U.count;for(let H=B,z=B+G;H<z;H+=3)_(t.getX(H+0),t.getX(H+1),t.getX(H+2))}let A=new K,S=new K,R=new K,E=new K;function P(w){R.fromBufferAttribute(s,w),E.copy(R);let N=o[w];A.copy(N),A.sub(R.multiplyScalar(R.dot(N))).normalize(),S.crossVectors(E,N);let B=S.dot(h[w])<0?-1:1;c.setXYZW(w,A.x,A.y,A.z,B)}for(let w=0,N=T.length;w<N;++w){let U=T[w],B=U.start,G=U.count;for(let H=B,z=B+G;H<z;H+=3)P(t.getX(H+0)),P(t.getX(H+1)),P(t.getX(H+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==e.count)i=new Ve(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let m=0,x=i.count;m<x;m++)i.setXYZ(m,0,0,0);let s=new K,a=new K,c=new K,o=new K,h=new K,f=new K,d=new K,g=new K;if(t)for(let m=0,x=t.count;m<x;m+=3){let v=t.getX(m+0),b=t.getX(m+1),y=t.getX(m+2);s.fromBufferAttribute(e,v),a.fromBufferAttribute(e,b),c.fromBufferAttribute(e,y),d.subVectors(c,a),g.subVectors(s,a),d.cross(g),o.fromBufferAttribute(i,v),h.fromBufferAttribute(i,b),f.fromBufferAttribute(i,y),o.add(d),h.add(d),f.add(d),i.setXYZ(v,o.x,o.y,o.z),i.setXYZ(b,h.x,h.y,h.z),i.setXYZ(y,f.x,f.y,f.z)}else for(let m=0,x=e.count;m<x;m+=3)s.fromBufferAttribute(e,m+0),a.fromBufferAttribute(e,m+1),c.fromBufferAttribute(e,m+2),d.subVectors(c,a),g.subVectors(s,a),d.cross(g),i.setXYZ(m+0,d.x,d.y,d.z),i.setXYZ(m+1,d.x,d.y,d.z),i.setXYZ(m+2,d.x,d.y,d.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)dn.fromBufferAttribute(t,e),dn.normalize(),t.setXYZ(e,dn.x,dn.y,dn.z)}toNonIndexed(){function t(o,h){let f=o.array,d=o.itemSize,g=o.normalized,m=new f.constructor(h.length*d),x=0,v=0;for(let b=0,y=h.length;b<y;b++){o.isInterleavedBufferAttribute?x=h[b]*o.data.stride+o.offset:x=h[b]*d;for(let _=0;_<d;_++)m[v++]=f[x++]}return new Ve(m,d,g)}if(this.index===null)return ie("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new n,i=this.index.array,s=this.attributes;for(let o in s){let h=s[o],f=t(h,i);e.setAttribute(o,f)}let a=this.morphAttributes;for(let o in a){let h=[],f=a[o];for(let d=0,g=f.length;d<g;d++){let m=f[d],x=t(m,i);h.push(x)}e.morphAttributes[o]=h}e.morphTargetsRelative=this.morphTargetsRelative;let c=this.groups;for(let o=0,h=c.length;o<h;o++){let f=c[o];e.addGroup(f.start,f.count,f.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let h=this.parameters;for(let f in h)h[f]!==void 0&&(t[f]=h[f]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let i=this.attributes;for(let h in i){let f=i[h];t.data.attributes[h]=f.toJSON(t.data)}let s={},a=!1;for(let h in this.morphAttributes){let f=this.morphAttributes[h],d=[];for(let g=0,m=f.length;g<m;g++){let x=f[g];d.push(x.toJSON(t.data))}d.length>0&&(s[h]=d,a=!0)}a&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let c=this.groups;c.length>0&&(t.data.groups=JSON.parse(JSON.stringify(c)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let i=t.index;i!==null&&this.setIndex(i.clone());let s=t.attributes;for(let f in s){let d=s[f];this.setAttribute(f,d.clone(e))}let a=t.morphAttributes;for(let f in a){let d=[],g=a[f];for(let m=0,x=g.length;m<x;m++)d.push(g[m].clone(e));this.morphAttributes[f]=d}this.morphTargetsRelative=t.morphTargetsRelative;let c=t.groups;for(let f=0,d=c.length;f<d;f++){let g=c[f];this.addGroup(g.start,g.count,g.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let h=t.boundingSphere;return h!==null&&(this.boundingSphere=h.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},sl=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=jh,this.updateRanges=[],this.version=0,this.uuid=Pi()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,i){t*=this.stride,i*=e.stride;for(let s=0,a=this.stride;s<a;s++)this.array[t+s]=e.array[i+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Pi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(e,this.stride);return i.setUsage(this.usage),i}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Pi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let e={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return e.usage=this.usage,e}},Tn=new K,So=class n{constructor(t,e,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,i=this.data.count;e<i;e++)Tn.fromBufferAttribute(this,e),Tn.applyMatrix4(t),this.setXYZ(e,Tn.x,Tn.y,Tn.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Tn.fromBufferAttribute(this,e),Tn.applyNormalMatrix(t),this.setXYZ(e,Tn.x,Tn.y,Tn.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Tn.fromBufferAttribute(this,e),Tn.transformDirection(t),this.setXYZ(e,Tn.x,Tn.y,Tn.z);return this}getComponent(t,e){let i=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(i=Qn(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=Oe(i,this.array)),this.data.array[t*this.data.stride+this.offset+e]=i,this}setX(t,e){return this.normalized&&(e=Oe(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=Oe(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=Oe(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=Oe(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Qn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Qn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Qn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Qn(e,this.array)),e}setXY(t,e,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=Oe(e,this.array),i=Oe(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this}setXYZ(t,e,i,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=Oe(e,this.array),i=Oe(i,this.array),s=Oe(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this}setXYZW(t,e,i,s,a){return t=t*this.data.stride+this.offset,this.normalized&&(e=Oe(e,this.array),i=Oe(i,this.array),s=Oe(s,this.array),a=Oe(a,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this.data.array[t+3]=a,this}clone(t){if(t===void 0){yo("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let a=0;a<this.itemSize;a++)e.push(this.data.array[s+a])}return new Ve(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new n(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){yo("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let a=0;a<this.itemSize;a++)e.push(this.data.array[s+a])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},ch=new K,F0=new K,U0=new ue,Fn=class{constructor(t=new K(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,s){return this.normal.set(t,e,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){let s=ch.subVectors(i,e).cross(F0.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,i=!0){let s=t.delta(ch),a=this.normal.dot(s);if(a===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let c=-(t.start.dot(this.normal)+this.constant)/a;return i===!0&&(c<0||c>1)?null:e.copy(t.start).addScaledVector(s,c)}intersectsLine(t){let e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let i=e||U0.getNormalMatrix(t),s=this.coplanarPoint(ch).applyMatrix4(t),a=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(a),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},B0=0,gi=class extends ei{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:B0++}),this.uuid=Pi(),this.name="",this.type="Material",this.blending=mr,this.side=Qi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Nh,this.blendDst=Dh,this.blendEquation=bs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ae(0,0,0),this.blendAlpha=0,this.depthFunc=Qs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Bd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Xa,this.stencilZFail=Xa,this.stencilZPass=Xa,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let i=t[e];if(i===void 0){ie(`Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){ie(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector2&&i&&i.isVector2||s&&s.isEuler&&i&&i.isEuler||s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(a=>a.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(a){let c=[];for(let o in a){let h=a[o];delete h.metadata,c.push(h)}return c}if(e){let a=s(t.textures),c=s(t.images);a.length>0&&(i.textures=a),c.length>0&&(i.images=c)}return i}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new ae().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(i=>new Fn().fromJSON(i))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let i=t.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new jt().fromArray(i)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new jt().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,i=null;if(e!==null){let s=e.length;i=new Array(s);for(let a=0;a!==s;++a)i[a]=e[a].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},or=class extends gi{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new ae(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},ao=new K,Ws=new K,Ys=new K,$s=new jt,lo=new jt,Jd=new Fe,va=new K,co=new K,ba=new K,Wf=new jt,hh=new jt,Yf=new jt,wo=class extends ln{constructor(t=new or){if(super(),this.isSprite=!0,this.type="Sprite",Xs===void 0){Xs=new We;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new sl(e,5);Xs.setIndex([0,1,2,0,2,3]),Xs.setAttribute("position",new So(i,3,0,!1)),Xs.setAttribute("uv",new So(i,2,3,!1))}this.geometry=Xs,this.material=t,this.center=new jt(.5,.5),this.count=1}intersectsFrustum(t){return t.intersectsSprite(this)}raycast(t,e){t.camera===null&&se('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Ws.setFromMatrixScale(this.matrixWorld),Jd.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Ys.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Ws.multiplyScalar(-Ys.z);let i=this.material.rotation,s,a;i!==0&&(a=Math.cos(i),s=Math.sin(i));let c=this.center;Ma(va.set(-.5,-.5,0),Ys,c,Ws,s,a),Ma(co.set(.5,-.5,0),Ys,c,Ws,s,a),Ma(ba.set(.5,.5,0),Ys,c,Ws,s,a),Wf.set(0,0),hh.set(1,0),Yf.set(1,1);let o=t.ray.intersectTriangle(va,co,ba,!1,ao);if(o===null&&(Ma(co.set(-.5,.5,0),Ys,c,Ws,s,a),hh.set(0,1),o=t.ray.intersectTriangle(va,ba,co,!1,ao),o===null))return;let h=t.ray.origin.distanceTo(ao);h<t.near||h>t.far||e.push({distance:h,point:ao.clone(),uv:di.getInterpolation(ao,va,co,ba,Wf,hh,Yf,new jt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};Ci=new K,uh=new K,Sa=new K,wa=new K,Xi=class{constructor(t=new K,e=new K(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Ci)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Ci.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Ci.copy(this.origin).addScaledVector(this.direction,e),Ci.distanceToSquared(t))}distanceSqToSegment(t,e,i,s){uh.copy(t).add(e).multiplyScalar(.5),Sa.copy(e).sub(t).normalize(),wa.copy(this.origin).sub(uh);let a=t.distanceTo(e)*.5,c=-this.direction.dot(Sa),o=wa.dot(this.direction),h=-wa.dot(Sa),f=wa.lengthSq(),d=Math.abs(1-c*c),g,m,x,v;if(d>0)if(g=c*h-o,m=c*o-h,v=a*d,g>=0)if(m>=-v)if(m<=v){let b=1/d;g*=b,m*=b,x=g*(g+c*m+2*o)+m*(c*g+m+2*h)+f}else m=a,g=Math.max(0,-(c*m+o)),x=-g*g+m*(m+2*h)+f;else m=-a,g=Math.max(0,-(c*m+o)),x=-g*g+m*(m+2*h)+f;else m<=-v?(g=Math.max(0,-(-c*a+o)),m=g>0?-a:Math.min(Math.max(-a,-h),a),x=-g*g+m*(m+2*h)+f):m<=v?(g=0,m=Math.min(Math.max(-a,-h),a),x=m*(m+2*h)+f):(g=Math.max(0,-(c*a+o)),m=g>0?a:Math.min(Math.max(-a,-h),a),x=-g*g+m*(m+2*h)+f);else m=c>0?-a:a,g=Math.max(0,-(c*m+o)),x=-g*g+m*(m+2*h)+f;return i&&i.copy(this.origin).addScaledVector(this.direction,g),s&&s.copy(uh).addScaledVector(Sa,m),x}intersectSphere(t,e){if(t.radius<0)return null;Ci.subVectors(t.center,this.origin);let i=Ci.dot(this.direction),s=Ci.dot(Ci)-i*i,a=t.radius*t.radius;if(s>a)return null;let c=Math.sqrt(a-s),o=i-c,h=i+c;return h<0?null:o<0?this.at(h,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){let i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,s,a,c,o,h,f=1/this.direction.x,d=1/this.direction.y,g=1/this.direction.z,m=this.origin;return f>=0?(i=(t.min.x-m.x)*f,s=(t.max.x-m.x)*f):(i=(t.max.x-m.x)*f,s=(t.min.x-m.x)*f),d>=0?(a=(t.min.y-m.y)*d,c=(t.max.y-m.y)*d):(a=(t.max.y-m.y)*d,c=(t.min.y-m.y)*d),i>c||a>s||((a>i||isNaN(i))&&(i=a),(c<s||isNaN(s))&&(s=c),g>=0?(o=(t.min.z-m.z)*g,h=(t.max.z-m.z)*g):(o=(t.max.z-m.z)*g,h=(t.min.z-m.z)*g),i>h||o>s)||((o>i||i!==i)&&(i=o),(h<s||s!==s)&&(s=h),s<0)?null:this.at(i>=0?i:s,e)}intersectsBox(t){return this.intersectBox(t,Ci)!==null}intersectTriangle(t,e,i,s,a){let c=this.origin,o=this.direction,h=o.x,f=o.y,d=o.z,g=t.x-c.x,m=t.y-c.y,x=t.z-c.z,v=e.x-c.x,b=e.y-c.y,y=e.z-c.z,_=i.x-c.x,T=i.y-c.y,A=i.z-c.z,S=Math.abs(h),R=Math.abs(f),E=Math.abs(d),P,w,N,U,B,G,H,z,$,J,O,Z;if(S>=R&&S>=E?(N=h,G=g,$=v,Z=_,h>=0?(P=f,w=d,U=m,B=x,H=b,z=y,J=T,O=A):(P=d,w=f,U=x,B=m,H=y,z=b,J=A,O=T)):R>=E?(N=f,G=m,$=b,Z=T,f>=0?(P=d,w=h,U=x,B=g,H=y,z=v,J=A,O=_):(P=h,w=d,U=g,B=x,H=v,z=y,J=_,O=A)):(N=d,G=x,$=y,Z=A,d>=0?(P=h,w=f,U=g,B=m,H=v,z=b,J=_,O=T):(P=f,w=h,U=m,B=g,H=b,z=v,J=T,O=_)),N===0)return null;let W=P/N,it=w/N,ot=1/N,Mt=U-W*G,wt=B-it*G,qt=H-W*$,Kt=z-it*$,ne=J-W*Z,ut=O-it*Z,pt=ne*Kt-ut*qt,Tt=Mt*ut-wt*ne,ee=qt*wt-Kt*Mt;if(s){if(pt<0||Tt<0||ee<0)return null}else if((pt<0||Tt<0||ee<0)&&(pt>0||Tt>0||ee>0))return null;let Nt=pt+Tt+ee;if(Nt===0)return null;let re=ot*(pt*G+Tt*$+ee*Z);return(Nt>0?re<0:re>0)?null:this.at(re/Nt,a)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Bn=class extends gi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ae(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ri,this.combine=Oh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},$f=new Fe,ps=new Xi,Ea=new xs,qf=new K,Ta=new K,Aa=new K,Ca=new K,fh=new K,Pa=new K,Zf=new K,Ia=new K,Pe=class extends ln{constructor(t=new We,e=new Bn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,c=s.length;a<c;a++){let o=s[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=a}}}}getVertexPosition(t,e){let i=this.geometry,s=i.attributes.position,a=i.morphAttributes.position,c=i.morphTargetsRelative;e.fromBufferAttribute(s,t);let o=this.morphTargetInfluences;if(a&&o){Pa.set(0,0,0);for(let h=0,f=a.length;h<f;h++){let d=o[h],g=a[h];d!==0&&(fh.fromBufferAttribute(g,t),c?Pa.addScaledVector(fh,d):Pa.addScaledVector(fh.sub(e),d))}e.add(Pa)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let i=this.geometry,s=this.material,a=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Ea.copy(i.boundingSphere),Ea.applyMatrix4(a),ps.copy(t.ray).recast(t.near),!(Ea.containsPoint(ps.origin)===!1&&(ps.intersectSphere(Ea,qf)===null||ps.origin.distanceToSquared(qf)>(t.far-t.near)**2))&&($f.copy(a).invert(),ps.copy(t.ray).applyMatrix4($f),!(i.boundingBox!==null&&ps.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,ps)))}_computeIntersections(t,e,i){let s,a=this.geometry,c=this.material,o=a.index,h=a.attributes.position,f=a.attributes.uv,d=a.attributes.uv1,g=a.attributes.normal,m=a.groups,x=a.drawRange;if(o!==null)if(Array.isArray(c))for(let v=0,b=m.length;v<b;v++){let y=m[v],_=c[y.materialIndex],T=Math.max(y.start,x.start),A=Math.min(o.count,Math.min(y.start+y.count,x.start+x.count));for(let S=T,R=A;S<R;S+=3){let E=o.getX(S),P=o.getX(S+1),w=o.getX(S+2);s=Ra(this,_,t,i,f,d,g,E,P,w),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=y.materialIndex,e.push(s))}}else{let v=Math.max(0,x.start),b=Math.min(o.count,x.start+x.count);for(let y=v,_=b;y<_;y+=3){let T=o.getX(y),A=o.getX(y+1),S=o.getX(y+2);s=Ra(this,c,t,i,f,d,g,T,A,S),s&&(s.faceIndex=Math.floor(y/3),e.push(s))}}else if(h!==void 0)if(Array.isArray(c))for(let v=0,b=m.length;v<b;v++){let y=m[v],_=c[y.materialIndex],T=Math.max(y.start,x.start),A=Math.min(h.count,Math.min(y.start+y.count,x.start+x.count));for(let S=T,R=A;S<R;S+=3){let E=S,P=S+1,w=S+2;s=Ra(this,_,t,i,f,d,g,E,P,w),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=y.materialIndex,e.push(s))}}else{let v=Math.max(0,x.start),b=Math.min(h.count,x.start+x.count);for(let y=v,_=b;y<_;y+=3){let T=y,A=y+1,S=y+2;s=Ra(this,c,t,i,f,d,g,T,A,S),s&&(s.faceIndex=Math.floor(y/3),e.push(s))}}}};rl=class extends Cn{constructor(t=null,e=1,i=1,s,a,c,o,h,f=pn,d=pn,g,m){super(null,c,o,h,f,d,s,a,g,m),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},ms=new xs,z0=new jt(.5,.5),La=new K,ar=class{constructor(t=new Fn,e=new Fn,i=new Fn,s=new Fn,a=new Fn,c=new Fn){this.planes=[t,e,i,s,a,c]}set(t,e,i,s,a,c){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(i),o[3].copy(s),o[4].copy(a),o[5].copy(c),this}copy(t){let e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=ti,i=!1){let s=this.planes,a=t.elements,c=a[0],o=a[1],h=a[2],f=a[3],d=a[4],g=a[5],m=a[6],x=a[7],v=a[8],b=a[9],y=a[10],_=a[11],T=a[12],A=a[13],S=a[14],R=a[15];if(s[0].setComponents(f-c,x-d,_-v,R-T).normalize(),s[1].setComponents(f+c,x+d,_+v,R+T).normalize(),s[2].setComponents(f+o,x+g,_+b,R+A).normalize(),s[3].setComponents(f-o,x-g,_-b,R-A).normalize(),i)s[4].setComponents(h,m,y,S).normalize(),s[5].setComponents(f-h,x-m,_-y,R-S).normalize();else if(s[4].setComponents(f-h,x-m,_-y,R-S).normalize(),e===ti)s[5].setComponents(f+h,x+m,_+y,R+S).normalize();else if(e===tr)s[5].setComponents(h,m,y,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ms.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),ms.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ms)}intersectsSprite(t){ms.center.set(0,0,0);let e=z0.distanceTo(t.center);return ms.radius=.7071067811865476+e,ms.applyMatrix4(t.matrixWorld),this.intersectsSphere(ms)}intersectsSphere(t){let e=this.planes,i=t.center,s=-t.radius;for(let a=0;a<6;a++)if(e[a].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let i=0;i<6;i++){let s=e[i];if(La.x=s.normal.x>0?t.max.x:t.min.x,La.y=s.normal.y>0?t.max.y:t.min.y,La.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(La)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},ni=class extends gi{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ae(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},ol=new K,al=new K,Jf=new Fe,ho=new Xi,Na=new xs,dh=new K,jf=new K,ys=class extends ln{constructor(t=new We,e=new ni){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,i=[0];for(let s=1,a=e.count;s<a;s++)ol.fromBufferAttribute(e,s-1),al.fromBufferAttribute(e,s),i[s]=i[s-1],i[s]+=ol.distanceTo(al);t.setAttribute("lineDistance",new He(i,1))}else ie("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let i=this.geometry,s=this.matrixWorld,a=t.params.Line.threshold,c=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Na.copy(i.boundingSphere),Na.applyMatrix4(s),Na.radius+=a,t.ray.intersectsSphere(Na)===!1)return;Jf.copy(s).invert(),ho.copy(t.ray).applyMatrix4(Jf);let o=a/((this.scale.x+this.scale.y+this.scale.z)/3),h=o*o,f=this.isLineSegments?2:1,d=i.index,m=i.attributes.position;if(d!==null){let x=Math.max(0,c.start),v=Math.min(d.count,c.start+c.count);for(let b=x,y=v-1;b<y;b+=f){let _=d.getX(b),T=d.getX(b+1),A=Da(this,t,ho,h,_,T,b);A&&e.push(A)}if(this.isLineLoop){let b=d.getX(v-1),y=d.getX(x),_=Da(this,t,ho,h,b,y,v-1);_&&e.push(_)}}else{let x=Math.max(0,c.start),v=Math.min(m.count,c.start+c.count);for(let b=x,y=v-1;b<y;b+=f){let _=Da(this,t,ho,h,b,b+1,b);_&&e.push(_)}if(this.isLineLoop){let b=Da(this,t,ho,h,v-1,x,v-1);b&&e.push(b)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,c=s.length;a<c;a++){let o=s[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=a}}}}};Kf=new K,Qf=new K,_s=class extends ys{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,i=[];for(let s=0,a=e.count;s<a;s+=2)Kf.fromBufferAttribute(e,s),Qf.fromBufferAttribute(e,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+Kf.distanceTo(Qf);t.setAttribute("lineDistance",new He(i,1))}else ie("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},Eo=class extends Cn{constructor(t=[],e=ts,i,s,a,c,o,h,f,d){super(t,e,i,s,a,c,o,h,f,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},To=class extends Cn{constructor(t,e,i,s,a,c,o,h,f){super(t,e,i,s,a,c,o,h,f),this.isCanvasTexture=!0,this.needsUpdate=!0}},Wi=class extends Cn{constructor(t,e,i=si,s,a,c,o=pn,h=pn,f,d=mi,g=1){if(d!==mi&&d!==ns)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let m={width:t,height:e,depth:g};super(m,s,a,c,o,h,d,i,f),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new ir(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},ll=class extends Wi{constructor(t,e=si,i=ts,s,a,c=pn,o=pn,h,f=mi){let d={width:t,height:t,depth:1},g=[d,d,d,d,d,d];super(t,t,e,i,s,a,c,o,h,f),this.image=g,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},Ao=class extends Cn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},Yi=class n extends We{constructor(t=1,e=1,i=1,s=1,a=1,c=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:s,heightSegments:a,depthSegments:c};let o=this;s=Math.floor(s),a=Math.floor(a),c=Math.floor(c);let h=[],f=[],d=[],g=[],m=0,x=0;v("z","y","x",-1,-1,i,e,t,c,a,0),v("z","y","x",1,-1,i,e,-t,c,a,1),v("x","z","y",1,1,t,i,e,s,c,2),v("x","z","y",1,-1,t,i,-e,s,c,3),v("x","y","z",1,-1,t,e,i,s,a,4),v("x","y","z",-1,-1,t,e,-i,s,a,5),this.setIndex(h),this.setAttribute("position",new He(f,3)),this.setAttribute("normal",new He(d,3)),this.setAttribute("uv",new He(g,2));function v(b,y,_,T,A,S,R,E,P,w,N){let U=S/P,B=R/w,G=S/2,H=R/2,z=E/2,$=P+1,J=w+1,O=0,Z=0,W=new K;for(let it=0;it<J;it++){let ot=it*B-H;for(let Mt=0;Mt<$;Mt++){let wt=Mt*U-G;W[b]=wt*T,W[y]=ot*A,W[_]=z,f.push(W.x,W.y,W.z),W[b]=0,W[y]=0,W[_]=E>0?1:-1,d.push(W.x,W.y,W.z),g.push(Mt/P),g.push(1-it/w),O+=1}}for(let it=0;it<w;it++)for(let ot=0;ot<P;ot++){let Mt=m+ot+$*it,wt=m+ot+$*(it+1),qt=m+(ot+1)+$*(it+1),Kt=m+(ot+1)+$*it;h.push(Mt,wt,Kt),h.push(wt,qt,Kt),Z+=6}o.addGroup(x,Z,N),x+=Z,m+=O}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}},xi=class n extends We{constructor(t=1,e=1,i=1,s=32,a=1,c=!1,o=0,h=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:s,heightSegments:a,openEnded:c,thetaStart:o,thetaLength:h};let f=this;s=Math.floor(s),a=Math.floor(a);let d=[],g=[],m=[],x=[],v=0,b=[],y=i/2,_=0;T(),c===!1&&(t>0&&A(!0),e>0&&A(!1)),this.setIndex(d),this.setAttribute("position",new He(g,3)),this.setAttribute("normal",new He(m,3)),this.setAttribute("uv",new He(x,2));function T(){let S=new K,R=new K,E=0,P=(e-t)/i;for(let w=0;w<=a;w++){let N=[],U=w/a,B=U*(e-t)+t;for(let G=0;G<=s;G++){let H=G/s,z=H*h+o,$=Math.sin(z),J=Math.cos(z);R.x=B*$,R.y=-U*i+y,R.z=B*J,g.push(R.x,R.y,R.z),S.set($,P,J).normalize(),m.push(S.x,S.y,S.z),x.push(H,1-U),N.push(v++)}b.push(N)}for(let w=0;w<s;w++)for(let N=0;N<a;N++){let U=b[N][w],B=b[N+1][w],G=b[N+1][w+1],H=b[N][w+1];(t>0||N!==0)&&(d.push(U,B,H),E+=3),(e>0||N!==a-1)&&(d.push(B,G,H),E+=3)}f.addGroup(_,E,0),_+=E}function A(S){let R=v,E=new jt,P=new K,w=0,N=S===!0?t:e,U=S===!0?1:-1;for(let G=1;G<=s;G++)g.push(0,y*U,0),m.push(0,U,0),x.push(.5,.5),v++;let B=v;for(let G=0;G<=s;G++){let z=G/s*h+o,$=Math.cos(z),J=Math.sin(z);P.x=N*J,P.y=y*U,P.z=N*$,g.push(P.x,P.y,P.z),m.push(0,U,0),E.x=$*.5+.5,E.y=J*.5*U+.5,x.push(E.x,E.y),v++}for(let G=0;G<s;G++){let H=R+G,z=B+G;S===!0?d.push(z,z+1,H):d.push(z+1,z,H),w+=3}f.addGroup(_,w,S===!0?1:2),_+=w}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},lr=class n extends xi{constructor(t=1,e=1,i=32,s=1,a=!1,c=0,o=Math.PI*2){super(0,t,e,i,s,a,c,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:i,heightSegments:s,openEnded:a,thetaStart:c,thetaLength:o}}static fromJSON(t){return new n(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Oa=new K,Fa=new K,ph=new K,Ua=new di,cr=class extends We{constructor(t=null,e=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:t,thresholdAngle:e},t!==null){let s=Math.pow(10,4),a=Math.cos(js*e),c=t.getIndex(),o=t.getAttribute("position"),h=c?c.count:o.count,f=[0,0,0],d=["a","b","c"],g=new Array(3),m={},x=[];for(let v=0;v<h;v+=3){c?(f[0]=c.getX(v),f[1]=c.getX(v+1),f[2]=c.getX(v+2)):(f[0]=v,f[1]=v+1,f[2]=v+2);let{a:b,b:y,c:_}=Ua;if(b.fromBufferAttribute(o,f[0]),y.fromBufferAttribute(o,f[1]),_.fromBufferAttribute(o,f[2]),Ua.getNormal(ph),g[0]=`${Math.round(b.x*s)},${Math.round(b.y*s)},${Math.round(b.z*s)}`,g[1]=`${Math.round(y.x*s)},${Math.round(y.y*s)},${Math.round(y.z*s)}`,g[2]=`${Math.round(_.x*s)},${Math.round(_.y*s)},${Math.round(_.z*s)}`,!(g[0]===g[1]||g[1]===g[2]||g[2]===g[0]))for(let T=0;T<3;T++){let A=(T+1)%3,S=g[T],R=g[A],E=Ua[d[T]],P=Ua[d[A]],w=`${S}_${R}`,N=`${R}_${S}`;N in m&&m[N]?(ph.dot(m[N].normal)<=a&&(x.push(E.x,E.y,E.z),x.push(P.x,P.y,P.z)),m[N]=null):w in m||(m[w]={index0:f[T],index1:f[A],normal:ph.clone()})}}for(let v in m)if(m[v]){let{index0:b,index1:y}=m[v];Oa.fromBufferAttribute(o,b),Fa.fromBufferAttribute(o,y),x.push(Oa.x,Oa.y,Oa.z),x.push(Fa.x,Fa.y,Fa.z)}this.setAttribute("position",new He(x,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}};wh=class{static triangulate(t,e,i=2){return V0(t,e,i)}},Ro=class n{static area(t){let e=t.length,i=0;for(let s=e-1,a=0;a<e;s=a++)i+=t[s].x*t[a].y-t[a].x*t[s].y;return i*.5}static isClockWise(t){return n.area(t)<0}static triangulateShape(t,e){let i=[],s=[],a=[];ed(t),nd(i,t);let c=t.length;e.forEach(ed);for(let h=0;h<e.length;h++)s.push(c),c+=e[h].length,nd(i,e[h]);let o=wh.triangulate(i,s);for(let h=0;h<o.length;h+=3)a.push(o.slice(h,h+3));return a}};Lo=class n extends We{constructor(t=1,e=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:s};let a=t/2,c=e/2,o=Math.floor(i),h=Math.floor(s),f=o+1,d=h+1,g=t/o,m=e/h,x=[],v=[],b=[],y=[];for(let _=0;_<d;_++){let T=_*m-c;for(let A=0;A<f;A++){let S=A*g-a;v.push(S,-T,0),b.push(0,0,1),y.push(A/o),y.push(1-_/h)}}for(let _=0;_<h;_++)for(let T=0;T<o;T++){let A=T+f*_,S=T+f*(_+1),R=T+1+f*(_+1),E=T+1+f*_;x.push(A,S,E),x.push(S,R,E)}this.setIndex(x),this.setAttribute("position",new He(v,3)),this.setAttribute("normal",new He(b,3)),this.setAttribute("uv",new He(y,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.widthSegments,t.heightSegments)}},No=class n extends We{constructor(t=.5,e=1,i=32,s=1,a=0,c=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:i,phiSegments:s,thetaStart:a,thetaLength:c},i=Math.max(3,i),s=Math.max(1,s);let o=[],h=[],f=[],d=[],g=t,m=(e-t)/s,x=new K,v=new jt;for(let b=0;b<=s;b++){for(let y=0;y<=i;y++){let _=a+y/i*c;x.x=g*Math.cos(_),x.y=g*Math.sin(_),h.push(x.x,x.y,x.z),f.push(0,0,1),v.x=(x.x/e+1)/2,v.y=(x.y/e+1)/2,d.push(v.x,v.y)}g+=m}for(let b=0;b<s;b++){let y=b*(i+1);for(let _=0;_<i;_++){let T=_+y,A=T,S=T+i+1,R=T+i+2,E=T+1;o.push(A,S,E),o.push(S,R,E)}}this.setIndex(o),this.setAttribute("position",new He(h,3)),this.setAttribute("normal",new He(f,3)),this.setAttribute("uv",new He(d,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}},$i=class n extends We{constructor(t=1,e=32,i=16,s=0,a=Math.PI*2,c=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:s,phiLength:a,thetaStart:c,thetaLength:o},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));let h=Math.min(c+o,Math.PI),f=0,d=[],g=new K,m=new K,x=[],v=[],b=[],y=[];for(let _=0;_<=i;_++){let T=[],A=_/i,S=c+A*o,R=t*Math.cos(S),E=Math.sqrt(t*t-R*R),P=0;_===0&&c===0?P=.5/e:_===i&&h===Math.PI&&(P=-.5/e);for(let w=0;w<=e;w++){let N=w/e,U=s+N*a;g.x=-E*Math.cos(U),g.y=R,g.z=E*Math.sin(U),v.push(g.x,g.y,g.z),m.copy(g).normalize(),b.push(m.x,m.y,m.z),y.push(N+P,1-A),T.push(f++)}d.push(T)}for(let _=0;_<i;_++)for(let T=0;T<e;T++){let A=d[_][T+1],S=d[_][T],R=d[_+1][T],E=d[_+1][T+1];(_!==0||c>0)&&x.push(A,S,E),(_!==i-1||h<Math.PI)&&x.push(S,R,E)}this.setIndex(x),this.setAttribute("position",new He(v,3)),this.setAttribute("normal",new He(b,3)),this.setAttribute("uv",new He(y,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};ep={clone:ws,merge:En},rg=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,og=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,kn=class extends gi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=rg,this.fragmentShader=og,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ws(t.uniforms),this.uniformsGroups=sg(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let c=this.uniforms[s].value;c&&c.isTexture?e.uniforms[s]={type:"t",value:c.toJSON(t).uuid}:c&&c.isColor?e.uniforms[s]={type:"c",value:c.getHex()}:c&&c.isVector2?e.uniforms[s]={type:"v2",value:c.toArray()}:c&&c.isVector3?e.uniforms[s]={type:"v3",value:c.toArray()}:c&&c.isVector4?e.uniforms[s]={type:"v4",value:c.toArray()}:c&&c.isMatrix3?e.uniforms[s]={type:"m3",value:c.toArray()}:c&&c.isMatrix4?e.uniforms[s]={type:"m4",value:c.toArray()}:e.uniforms[s]={value:c}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let i in t.uniforms){let s=t.uniforms[i];switch(this.uniforms[i]={},s.type){case"t":this.uniforms[i].value=e[s.value]||null;break;case"c":this.uniforms[i].value=new ae().setHex(s.value);break;case"v2":this.uniforms[i].value=new jt().fromArray(s.value);break;case"v3":this.uniforms[i].value=new K().fromArray(s.value);break;case"v4":this.uniforms[i].value=new Ye().fromArray(s.value);break;case"m3":this.uniforms[i].value=new ue().fromArray(s.value);break;case"m4":this.uniforms[i].value=new Fe().fromArray(s.value);break;default:this.uniforms[i].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let i in t.extensions)this.extensions[i]=t.extensions[i];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},cl=class extends kn{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},zn=class extends gi{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ae(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ae(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=hc,this.normalScale=new jt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ri,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},hl=class extends gi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Fd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},ul=class extends gi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},Do=class extends ni{constructor(t){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(t)}copy(t){return super.copy(t),this.scale=t.scale,this.dashSize=t.dashSize,this.gapSize=t.gapSize,this}};qi=class{constructor(t,e,i,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(i),this.sampleValues=e,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,i=this._cachedIndex,s=e[i],a=e[i-1];n:{t:{let c;e:{i:if(!(t<s)){for(let o=i+2;;){if(s===void 0){if(t<a)break i;return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(a=s,s=e[++i],t<s)break t}c=e.length;break e}if(!(t>=a)){let o=e[1];t<o&&(i=2,a=o);for(let h=i-2;;){if(a===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===h)break;if(s=a,a=e[--i-1],t>=a)break t}c=i,i=0;break e}break n}for(;i<c;){let o=i+c>>>1;t<e[o]?c=o:i=o+1}if(s=e[i],a=e[i-1],a===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,a,s)}return this.interpolate_(i,a,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,i=this.sampleValues,s=this.valueSize,a=t*s;for(let c=0;c!==s;++c)e[c]=i[a+c];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},fl=class extends qi{constructor(t,e,i,s){super(t,e,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:_h,endingEnd:_h}}intervalChanged_(t,e,i){let s=this.parameterPositions,a=t-2,c=t+1,o=s[a],h=s[c];if(o===void 0)switch(this.getSettings_().endingStart){case vh:a=t,o=2*e-i;break;case bh:a=s.length-2,o=e+s[a]-s[a+1];break;default:a=t,o=i}if(h===void 0)switch(this.getSettings_().endingEnd){case vh:c=t,h=2*i-e;break;case bh:c=1,h=i+s[1]-s[0];break;default:c=t-1,h=e}let f=(i-e)*.5,d=this.valueSize;this._weightPrev=f/(e-o),this._weightNext=f/(h-i),this._offsetPrev=a*d,this._offsetNext=c*d}interpolate_(t,e,i,s){let a=this.resultBuffer,c=this.sampleValues,o=this.valueSize,h=t*o,f=h-o,d=this._offsetPrev,g=this._offsetNext,m=this._weightPrev,x=this._weightNext,v=(i-e)/(s-e),b=v*v,y=b*v,_=-m*y+2*m*b-m*v,T=(1+m)*y+(-1.5-2*m)*b+(-.5+m)*v+1,A=(-1-x)*y+(1.5+x)*b+.5*v,S=x*y-x*b;for(let R=0;R!==o;++R)a[R]=_*c[d+R]+T*c[f+R]+A*c[h+R]+S*c[g+R];return a}},dl=class extends qi{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){let a=this.resultBuffer,c=this.sampleValues,o=this.valueSize,h=t*o,f=h-o,d=(i-e)/(s-e),g=1-d;for(let m=0;m!==o;++m)a[m]=c[f+m]*g+c[h+m]*d;return a}},pl=class extends qi{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t){return this.copySampleValue_(t-1)}},ml=class extends qi{interpolate_(t,e,i,s){let a=this.resultBuffer,c=this.sampleValues,o=this.valueSize,h=t*o,f=h-o,d=this.inTangents,g=this.outTangents;if(!d||!g){let v=(i-e)/(s-e),b=1-v;for(let y=0;y!==o;++y)a[y]=c[f+y]*b+c[h+y]*v;return a}let m=o*2,x=t-1;for(let v=0;v!==o;++v){let b=c[f+v],y=c[h+v],_=x*m+v*2,T=g[_],A=g[_+1],S=t*m+v*2,R=d[S],E=d[S+1],P=lg(i,e,T,R,s);a[v]=np(P,b,A,E,y)}return a}};Vn=class{constructor(t,e,i,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=qs(e,this.TimeBufferType),this.values=qs(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,i;if(e.toJSON!==this.toJSON)i=e.toJSON(t);else{i={name:t.name,times:qs(t.times,Array),values:qs(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(i.interpolation=s),mh(t.settings)&&(i.settings={inTangents:qs(t.settings.inTangents,Array),outTangents:qs(t.settings.outTangents,Array)})}return i.type=t.ValueTypeName,i}InterpolantFactoryMethodDiscrete(t){return new pl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new dl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new fl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new ml(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case po:e=this.InterpolantFactoryMethodDiscrete;break;case tl:e=this.InterpolantFactoryMethodLinear;break;case Ga:e=this.InterpolantFactoryMethodSmooth;break;case yh:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return ie("KeyframeTrack:",i),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return po;case this.InterpolantFactoryMethodLinear:return tl;case this.InterpolantFactoryMethodSmooth:return Ga;case this.InterpolantFactoryMethodBezier:return yh}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]*=t;mh(this.settings)&&(sd(this.settings.inTangents,t),sd(this.settings.outTangents,t))}return this}trim(t,e){let i=this.times,s=i.length,a=0,c=s-1;for(;a!==s&&i[a]<t;)++a;for(;c!==-1&&i[c]>e;)--c;if(++c,a!==0||c!==s){a>=c&&(c=Math.max(c,1),a=c-1);let o=this.getValueSize();this.times=i.slice(a,c),this.values=this.values.slice(a*o,c*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(se("KeyframeTrack: Invalid value size in track.",this),t=!1);let i=this.times,s=this.values,a=i.length;a===0&&(se("KeyframeTrack: Track is empty.",this),t=!1);let c=null;for(let o=0;o!==a;o++){let h=i[o];if(typeof h=="number"&&isNaN(h)){se("KeyframeTrack: Time is not a valid number.",this,o,h),t=!1;break}if(c!==null&&c>h){se("KeyframeTrack: Out of order keys.",this,o,h,c),t=!1;break}c=h}if(s!==void 0&&o0(s))for(let o=0,h=s.length;o!==h;++o){let f=s[o];if(isNaN(f)){se("KeyframeTrack: Value is not a valid number.",this,o,f),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===Ga,a=t.length-1,c=1;for(let o=1;o<a;++o){let h=!1,f=t[o],d=t[o+1];if(f!==d&&(o!==1||f!==t[0]))if(s)h=!0;else{let g=o*i,m=g-i,x=g+i;for(let v=0;v!==i;++v){let b=e[g+v];if(b!==e[m+v]||b!==e[x+v]){h=!0;break}}}if(h){if(o!==c){t[c]=t[o];let g=o*i,m=c*i;for(let x=0;x!==i;++x)e[m+x]=e[g+x]}++c}}if(a>0){t[c]=t[a];for(let o=a*i,h=c*i,f=0;f!==i;++f)e[h+f]=e[o+f];++c}return c!==t.length?(this.times=t.slice(0,c),this.values=e.slice(0,c*i)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),i=this.constructor,s=new i(this.name,t,e);return s.createInterpolant=this.createInterpolant,mh(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};Vn.prototype.ValueTypeName="";Vn.prototype.TimeBufferType=Float32Array;Vn.prototype.ValueBufferType=Float32Array;Vn.prototype.DefaultInterpolation=tl;Zi=class extends Vn{constructor(t,e,i){super(t,e,i)}};Zi.prototype.ValueTypeName="bool";Zi.prototype.ValueBufferType=Array;Zi.prototype.DefaultInterpolation=po;Zi.prototype.InterpolantFactoryMethodLinear=void 0;Zi.prototype.InterpolantFactoryMethodSmooth=void 0;gl=class extends Vn{constructor(t,e,i,s){super(t,e,i,s)}};gl.prototype.ValueTypeName="color";xl=class extends Vn{constructor(t,e,i,s){super(t,e,i,s)}};xl.prototype.ValueTypeName="number";yl=class extends qi{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){let a=this.resultBuffer,c=this.sampleValues,o=this.valueSize,h=(i-e)/(s-e),f=t*o;for(let d=f+o;f!==d;f+=4)Un.slerpFlat(a,0,c,f-o,c,f,h);return a}},Oo=class extends Vn{constructor(t,e,i,s){super(t,e,i,s)}InterpolantFactoryMethodLinear(t){return new yl(this.times,this.values,this.getValueSize(),t)}};Oo.prototype.ValueTypeName="quaternion";Oo.prototype.InterpolantFactoryMethodSmooth=void 0;Ji=class extends Vn{constructor(t,e,i){super(t,e,i)}};Ji.prototype.ValueTypeName="string";Ji.prototype.ValueBufferType=Array;Ji.prototype.DefaultInterpolation=po;Ji.prototype.InterpolantFactoryMethodLinear=void 0;Ji.prototype.InterpolantFactoryMethodSmooth=void 0;_l=class extends Vn{constructor(t,e,i,s){super(t,e,i,s)}};_l.prototype.ValueTypeName="vector";vl=class{constructor(t,e,i){let s=this,a=!1,c=0,o=0,h,f=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this._abortController=null,this.itemStart=function(d){o++,a===!1&&s.onStart!==void 0&&s.onStart(d,c,o),a=!0},this.itemEnd=function(d){c++,s.onProgress!==void 0&&s.onProgress(d,c,o),c===o&&(a=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(d){s.onError!==void 0&&s.onError(d)},this.resolveURL=function(d){return d=d.normalize("NFC"),h?h(d):d},this.setURLModifier=function(d){return h=d,this},this.addHandler=function(d,g){return f.push(d,g),this},this.removeHandler=function(d){let g=f.indexOf(d);return g!==-1&&f.splice(g,2),this},this.getHandler=function(d){for(let g=0,m=f.length;g<m;g+=2){let x=f[g],v=f[g+1];if(x.global&&(x.lastIndex=0),x.test(d))return v}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},ip=new vl,bl=class{constructor(t){this.manager=t!==void 0?t:ip,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let i=this;return new Promise(function(s,a){i.load(t,s,e,a)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};bl.DEFAULT_MATERIAL_NAME="__DEFAULT";Fo=class extends ln{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new ae(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},Uo=class extends Fo{constructor(t,e,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(ln.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ae(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},gh=new Fe,rd=new K,od=new K,Ml=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new jt(512,512),this.mapType=Ln,this.map=null,this.mapPass=null,this.matrix=new Fe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ar,this._frameExtents=new jt(1,1),this._viewportCount=1,this._viewports=[new Ye(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;rd.setFromMatrixPosition(t.matrixWorld),e.position.copy(rd),od.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(od),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,i,s){gh.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),i.setFromProjectionMatrix(gh,t.coordinateSystem,t.reversedDepth);let a=this._frameExtents,c=s?s.z/a.x:1,o=s?s.w/a.y:1,h=s?s.x/a.x:0,f=s?s.y/a.y:0;t.coordinateSystem===tr||t.reversedDepth?e.set(.5*c,0,0,.5*c+h,0,.5*o,0,.5*o+f,0,0,1,0,0,0,0,1):e.set(.5*c,0,0,.5*c+h,0,.5*o,0,.5*o+f,0,0,.5,.5,0,0,0,1),e.multiply(gh)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},za=new K,Va=new Un,fi=new K,Bo=class extends ln{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Fe,this.projectionMatrix=new Fe,this.projectionMatrixInverse=new Fe,this.coordinateSystem=ti,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(za,Va,fi),fi.x===1&&fi.y===1&&fi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(za,Va,fi.set(1,1,1)).invert()}updateWorldMatrix(t,e,i=!1){super.updateWorldMatrix(t,e,i),this.matrixWorld.decompose(za,Va,fi),fi.x===1&&fi.y===1&&fi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(za,Va,fi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Hi=new K,ad=new jt,ld=new jt,Sn=class extends Bo{constructor(t=50,e=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=nr*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(js*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return nr*2*Math.atan(Math.tan(js*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){Hi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Hi.x,Hi.y).multiplyScalar(-t/Hi.z),Hi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Hi.x,Hi.y).multiplyScalar(-t/Hi.z)}getViewSize(t,e){return this.getViewBounds(t,ad,ld),e.subVectors(ld,ad)}setViewOffset(t,e,i,s,a,c){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=a,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(js*.5*this.fov)/this.zoom,i=2*e,s=this.aspect*i,a=-.5*s,c=this.view;if(this.view!==null&&this.view.enabled){let h=c.fullWidth,f=c.fullHeight;a+=c.offsetX*s/h,e-=c.offsetY*i/f,s*=c.width/h,i*=c.height/f}let o=this.filmOffset;o!==0&&(a+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+s,e,e-i,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},ur=class extends Bo{constructor(t=-1,e=1,i=1,s=-1,a=.1,c=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=s,this.near=a,this.far=c,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,s,a,c){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=a,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,a=i-t,c=i+t,o=s+e,h=s-e;if(this.view!==null&&this.view.enabled){let f=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=f*this.view.offsetX,c=a+f*this.view.width,o-=d*this.view.offsetY,h=o-d*this.view.height}this.projectionMatrix.makeOrthographic(a,c,o,h,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Eh=class extends Ml{constructor(){super(new ur(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},fr=class extends Fo{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ln.DEFAULT_UP),this.updateMatrix(),this.target=new ln,this.shadow=new Eh}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}},Zs=-90,Js=1,Sl=class extends ln{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Sn(Zs,Js,t,e);s.layers=this.layers,this.add(s);let a=new Sn(Zs,Js,t,e);a.layers=this.layers,this.add(a);let c=new Sn(Zs,Js,t,e);c.layers=this.layers,this.add(c);let o=new Sn(Zs,Js,t,e);o.layers=this.layers,this.add(o);let h=new Sn(Zs,Js,t,e);h.layers=this.layers,this.add(h);let f=new Sn(Zs,Js,t,e);f.layers=this.layers,this.add(f)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[i,s,a,c,o,h]=e;for(let f of e)this.remove(f);if(t===ti)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),c.up.set(0,0,1),c.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),h.up.set(0,1,0),h.lookAt(0,0,-1);else if(t===tr)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),c.up.set(0,0,-1),c.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),h.up.set(0,-1,0),h.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let f of e)this.add(f),f.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[a,c,o,h,f,d]=this.children,g=t.getRenderTarget(),m=t.getActiveCubeFace(),x=t.getActiveMipmapLevel(),v=t.xr.enabled;t.xr.enabled=!1;let b=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let y=!1;t.isWebGLRenderer===!0?y=t.state.buffers.depth.getReversed():y=t.reversedDepthBuffer,t.setRenderTarget(i,0,s),y&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(i,1,s),y&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),t.setRenderTarget(i,2,s),y&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(i,3,s),y&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(i,4,s),y&&t.autoClear===!1&&t.clearDepth(),t.render(e,f),i.texture.generateMipmaps=b,t.setRenderTarget(i,5,s),y&&t.autoClear===!1&&t.clearDepth(),t.render(e,d),t.setRenderTarget(g,m,x),t.xr.enabled=v,i.texture.needsPMREMUpdate=!0}},wl=class extends Sn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}},nu="\\[\\]\\.:\\/",cg=new RegExp("["+nu+"]","g"),iu="[^"+nu+"]",hg="[^"+nu.replace("\\.","")+"]",ug=/((?:WC+[\/:])*)/.source.replace("WC",iu),fg=/(WCOD+)?/.source.replace("WCOD",hg),dg=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",iu),pg=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",iu),mg=new RegExp("^"+ug+fg+dg+pg+"$"),gg=["material","materials","bones","map"],Th=class{constructor(t,e,i){let s=i||Xe.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(t,e)}setValue(t,e){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,a=i.length;s!==a;++s)i[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].unbind()}},Xe=class n{constructor(t,e,i){this.path=e,this.parsedPath=i||n.parseTrackName(e),this.node=n.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,i){return t&&t.isAnimationObjectGroup?new n.Composite(t,e,i):new n(t,e,i)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(cg,"")}static parseTrackName(t){let e=mg.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let i={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let a=i.nodeName.substring(s+1);gg.indexOf(a)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=a)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return i}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let i=t.skeleton.getBoneByName(e);if(i!==void 0)return i}if(t.children){let i=function(a){for(let c=0;c<a.length;c++){let o=a[c];if(o.name===e||o.uuid===e)return o;let h=i(o.children);if(h)return h}return null},s=i(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let i=this.resolvedProperty;for(let s=0,a=i.length;s!==a;++s)t[e++]=i[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let i=this.resolvedProperty;for(let s=0,a=i.length;s!==a;++s)i[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let i=this.resolvedProperty;for(let s=0,a=i.length;s!==a;++s)i[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let i=this.resolvedProperty;for(let s=0,a=i.length;s!==a;++s)i[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,i=e.objectName,s=e.propertyName,a=e.propertyIndex;if(t||(t=n.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){ie("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let f=e.objectIndex;switch(i){case"materials":if(!t.material){se("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){se("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){se("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let d=0;d<t.length;d++)if(t[d].name===f){f=d;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){se("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){se("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[i]===void 0){se("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[i]}if(f!==void 0){if(t[f]===void 0){se("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[f]}}let c=t[s];if(c===void 0){let f=e.nodeName;se("PropertyBinding: Trying to update property for track: "+f+"."+s+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?o=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let h=this.BindingType.Direct;if(a!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){se("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){se("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[a]!==void 0&&(a=t.morphTargetDictionary[a])}h=this.BindingType.ArrayElement,this.resolvedProperty=c,this.propertyIndex=a}else c.fromArray!==void 0&&c.toArray!==void 0?(h=this.BindingType.HasFromToArray,this.resolvedProperty=c):Array.isArray(c)?(h=this.BindingType.EntireArray,this.resolvedProperty=c):this.propertyName=s;this.getValue=this.GetterByBindingType[h],this.setValue=this.SetterByBindingTypeAndVersioning[h][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Xe.Composite=Th;Xe.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Xe.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Xe.prototype.GetterByBindingType=[Xe.prototype._getValue_direct,Xe.prototype._getValue_array,Xe.prototype._getValue_arrayElement,Xe.prototype._getValue_toArray];Xe.prototype.SetterByBindingTypeAndVersioning=[[Xe.prototype._setValue_direct,Xe.prototype._setValue_direct_setNeedsUpdate,Xe.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Xe.prototype._setValue_array,Xe.prototype._setValue_array_setNeedsUpdate,Xe.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Xe.prototype._setValue_arrayElement,Xe.prototype._setValue_arrayElement_setNeedsUpdate,Xe.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Xe.prototype._setValue_fromArray,Xe.prototype._setValue_fromArray_setNeedsUpdate,Xe.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];gS=new Float32Array(1),cd=new Fe,ko=class{constructor(t,e,i=0,s=1/0){this.ray=new Xi(t,e),this.near=i,this.far=s,this.camera=null,this.layers=new sr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,e.projectionMatrix.elements[14]).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):se("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return cd.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(cd),this}intersectObject(t,e=!0,i=[]){return Ah(t,this,i,e),i.sort(hd),i}intersectObjects(t,e=!0,i=[]){for(let s=0,a=t.length;s<a;s++)Ah(t[s],this,i,e);return i.sort(hd),i}};dr=class{constructor(t=1,e=0,i=0){this.radius=t,this.phi=e,this.theta=i}set(t,e,i){return this.radius=t,this.phi=e,this.theta=i,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Me(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,i){return this.radius=Math.sqrt(t*t+e*e+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,i),this.phi=Math.acos(Me(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}},Ch=class n{static{n.prototype.isMatrix2=!0}constructor(t,e,i,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,i,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let i=0;i<4;i++)this.elements[i]=t[i+e];return this}set(t,e,i,s){let a=this.elements;return a[0]=t,a[2]=e,a[1]=i,a[3]=s,this}},ud=new K,zo=class extends ln{constructor(t=new K(0,0,1),e=new K(0,0,0),i=1,s=16776960,a=i*.2,c=a*.2){super(),this.type="ArrowHelper",Ha===void 0&&(Ha=new We,Ha.setAttribute("position",new He([0,0,0,0,1,0],3)),xh=new lr(.5,1,5,1),xh.translate(0,-.5,0)),this.position.copy(e),this.line=new ys(Ha,new ni({color:s,toneMapped:!1})),this.line.matrixAutoUpdate=!1,this.add(this.line),this.cone=new Pe(xh,new Bn({color:s,toneMapped:!1})),this.cone.matrixAutoUpdate=!1,this.add(this.cone),this.setDirection(t),this.setLength(i,a,c)}setDirection(t){if(t.y>.99999)this.quaternion.set(0,0,0,1);else if(t.y<-.99999)this.quaternion.set(1,0,0,0);else{ud.set(t.z,0,-t.x).normalize();let e=Math.acos(t.y);this.quaternion.setFromAxisAngle(ud,e)}}setLength(t,e=t*.2,i=e*.2){this.line.scale.set(1,Math.max(1e-4,t-e),1),this.line.updateMatrix(),this.cone.scale.set(i,e,i),this.cone.position.y=t,this.cone.updateMatrix()}setColor(t){this.line.material.color.set(t),this.cone.material.color.set(t)}copy(t){return super.copy(t,!1),this.line.copy(t.line),this.cone.copy(t.cone),this}dispose(){super.dispose(),this.line.geometry.dispose(),this.line.material.dispose(),this.cone.geometry.dispose(),this.cone.material.dispose()}},Vo=class extends ei{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}};typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?ie("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186")});function Ep(){let n=null,t=!1,e=null,i=null;function s(a,c){i=n.requestAnimationFrame(s),e(a,c)}return{start:function(){t!==!0&&e!==null&&n!==null&&(i=n.requestAnimationFrame(s),t=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(a){e=a},setContext:function(a){n=a}}}function _g(n){let t=new WeakMap;function e(o,h){let f=o.array,d=o.usage,g=f.byteLength,m=n.createBuffer();n.bindBuffer(h,m),n.bufferData(h,f,d),o.onUploadCallback();let x;if(f instanceof Float32Array)x=n.FLOAT;else if(typeof Float16Array<"u"&&f instanceof Float16Array)x=n.HALF_FLOAT;else if(f instanceof Uint16Array)o.isFloat16BufferAttribute?x=n.HALF_FLOAT:x=n.UNSIGNED_SHORT;else if(f instanceof Int16Array)x=n.SHORT;else if(f instanceof Uint32Array)x=n.UNSIGNED_INT;else if(f instanceof Int32Array)x=n.INT;else if(f instanceof Int8Array)x=n.BYTE;else if(f instanceof Uint8Array)x=n.UNSIGNED_BYTE;else if(f instanceof Uint8ClampedArray)x=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:m,type:x,bytesPerElement:f.BYTES_PER_ELEMENT,version:o.version,size:g}}function i(o,h,f){let d=h.array,g=h.updateRanges;if(n.bindBuffer(f,o),g.length===0)n.bufferSubData(f,0,d);else{g.sort((x,v)=>x.start-v.start);let m=0;for(let x=1;x<g.length;x++){let v=g[m],b=g[x];b.start<=v.start+v.count+1?v.count=Math.max(v.count,b.start+b.count-v.start):(++m,g[m]=b)}g.length=m+1;for(let x=0,v=g.length;x<v;x++){let b=g[x];n.bufferSubData(f,b.start*d.BYTES_PER_ELEMENT,d,b.start,b.count)}h.clearUpdateRanges()}h.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function a(o){o.isInterleavedBufferAttribute&&(o=o.data);let h=t.get(o);h&&(n.deleteBuffer(h.buffer),t.delete(o))}function c(o,h){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let d=t.get(o);(!d||d.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let f=t.get(o);if(f===void 0)t.set(o,e(o,h));else if(f.version<o.version){if(f.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(f.buffer,o,h),f.version=o.version}}return{get:s,remove:a,update:c}}function e_(n,t,e,i,s,a){let c=new ae(0),o=s===!0?0:1,h,f,d=null,g=0,m=null;function x(T){let A=T.isScene===!0?T.background:null;if(A&&A.isTexture){let S=T.backgroundBlurriness>0;A=t.get(A,S)}return A}function v(T){let A=!1,S=x(T);S===null?y(c,o):S&&S.isColor&&(y(S,1),A=!0);let R=n.xr.getEnvironmentBlendMode();R==="additive"?e.buffers.color.setClear(0,0,0,1,a):R==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,a),(n.autoClear||A)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function b(T,A){let S=x(A);S&&(S.isCubeTexture||S.mapping===Go)?(f===void 0&&(f=new Pe(new Yi(1,1,1),new kn({name:"BackgroundCubeMaterial",uniforms:ws(vi.backgroundCube.uniforms),vertexShader:vi.backgroundCube.vertexShader,fragmentShader:vi.backgroundCube.fragmentShader,side:Pn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),f.geometry.deleteAttribute("normal"),f.geometry.deleteAttribute("uv"),f.onBeforeRender=function(R,E,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(f.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(f)),f.material.uniforms.envMap.value=S,f.material.uniforms.backgroundBlurriness.value=A.backgroundBlurriness,f.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,f.material.uniforms.backgroundRotation.value.setFromMatrix4(t_.makeRotationFromEuler(A.backgroundRotation)).transpose(),S.isCubeTexture&&S.isRenderTargetTexture===!1&&f.material.uniforms.backgroundRotation.value.premultiply(Tp),f.material.toneMapped=Ee.getTransfer(S.colorSpace)!==Le,(d!==S||g!==S.version||m!==n.toneMapping)&&(f.material.needsUpdate=!0,d=S,g=S.version,m=n.toneMapping),f.layers.enableAll(),T.unshift(f,f.geometry,f.material,0,0,null)):S&&S.isTexture&&(h===void 0&&(h=new Pe(new Lo(2,2),new kn({name:"BackgroundMaterial",uniforms:ws(vi.background.uniforms),vertexShader:vi.background.vertexShader,fragmentShader:vi.background.fragmentShader,side:Qi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(h)),h.material.uniforms.t2D.value=S,h.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,h.material.toneMapped=Ee.getTransfer(S.colorSpace)!==Le,S.matrixAutoUpdate===!0&&S.updateMatrix(),h.material.uniforms.uvTransform.value.copy(S.matrix),(d!==S||g!==S.version||m!==n.toneMapping)&&(h.material.needsUpdate=!0,d=S,g=S.version,m=n.toneMapping),h.layers.enableAll(),T.unshift(h,h.geometry,h.material,0,0,null))}function y(T,A){T.getRGB(dc,eu(n)),e.buffers.color.setClear(dc.r,dc.g,dc.b,A,a)}function _(){f!==void 0&&(f.geometry.dispose(),f.material.dispose(),f=void 0),h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0)}return{getClearColor:function(){return c},setClearColor:function(T,A=1){c.set(T),o=A,y(c,o)},getClearAlpha:function(){return o},setClearAlpha:function(T){o=T,y(c,o)},render:v,addToRenderList:b,dispose:_}}function n_(n,t){let e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=m(null),a=s,c=!1;function o(B,G,H,z,$){let J=!1,O=g(B,z,H,G);a!==O&&(a=O,f(a.object)),J=x(B,z,H,$),J&&v(B,z,H,$),$!==null&&t.update($,n.ELEMENT_ARRAY_BUFFER),(J||c)&&(c=!1,S(B,G,H,z),$!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get($).buffer))}function h(){return n.createVertexArray()}function f(B){return n.bindVertexArray(B)}function d(B){return n.deleteVertexArray(B)}function g(B,G,H,z){let $=z.wireframe===!0,J=i[G.id];J===void 0&&(J={},i[G.id]=J);let O=B.isInstancedMesh===!0?B.id:0,Z=J[O];Z===void 0&&(Z={},J[O]=Z);let W=Z[H.id];W===void 0&&(W={},Z[H.id]=W);let it=W[$];return it===void 0&&(it=m(h()),W[$]=it),it}function m(B){let G=[],H=[],z=[];for(let $=0;$<e;$++)G[$]=0,H[$]=0,z[$]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:G,enabledAttributes:H,attributeDivisors:z,object:B,attributes:{},index:null}}function x(B,G,H,z){let $=a.attributes,J=G.attributes,O=0,Z=H.getAttributes();for(let W in Z)if(Z[W].location>=0){let ot=$[W],Mt=J[W];if(Mt===void 0&&(W==="instanceMatrix"&&B.instanceMatrix&&(Mt=B.instanceMatrix),W==="instanceColor"&&B.instanceColor&&(Mt=B.instanceColor)),ot===void 0||ot.attribute!==Mt||Mt&&ot.data!==Mt.data)return!0;O++}return a.attributesNum!==O||a.index!==z}function v(B,G,H,z){let $={},J=G.attributes,O=0,Z=H.getAttributes();for(let W in Z)if(Z[W].location>=0){let ot=J[W];ot===void 0&&(W==="instanceMatrix"&&B.instanceMatrix&&(ot=B.instanceMatrix),W==="instanceColor"&&B.instanceColor&&(ot=B.instanceColor));let Mt={};Mt.attribute=ot,ot&&ot.data&&(Mt.data=ot.data),$[W]=Mt,O++}a.attributes=$,a.attributesNum=O,a.index=z}function b(){let B=a.newAttributes;for(let G=0,H=B.length;G<H;G++)B[G]=0}function y(B){_(B,0)}function _(B,G){let H=a.newAttributes,z=a.enabledAttributes,$=a.attributeDivisors;H[B]=1,z[B]===0&&(n.enableVertexAttribArray(B),z[B]=1),$[B]!==G&&(n.vertexAttribDivisor(B,G),$[B]=G)}function T(){let B=a.newAttributes,G=a.enabledAttributes;for(let H=0,z=G.length;H<z;H++)G[H]!==B[H]&&(n.disableVertexAttribArray(H),G[H]=0)}function A(B,G,H,z,$,J,O){O===!0?n.vertexAttribIPointer(B,G,H,$,J):n.vertexAttribPointer(B,G,H,z,$,J)}function S(B,G,H,z){b();let $=z.attributes,J=H.getAttributes(),O=G.defaultAttributeValues;for(let Z in J){let W=J[Z];if(W.location>=0){let it=$[Z];if(it===void 0&&(Z==="instanceMatrix"&&B.instanceMatrix&&(it=B.instanceMatrix),Z==="instanceColor"&&B.instanceColor&&(it=B.instanceColor)),it!==void 0){let ot=it.normalized,Mt=it.itemSize,wt=t.get(it);if(wt===void 0)continue;let qt=wt.buffer,Kt=wt.type,ne=wt.bytesPerElement,ut=Kt===n.INT||Kt===n.UNSIGNED_INT||it.gpuType===Cl;if(it.isInterleavedBufferAttribute){let pt=it.data,Tt=pt.stride,ee=it.offset;if(pt.isInstancedInterleavedBuffer){for(let Nt=0;Nt<W.locationSize;Nt++)_(W.location+Nt,pt.meshPerAttribute);B.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=pt.meshPerAttribute*pt.count)}else for(let Nt=0;Nt<W.locationSize;Nt++)y(W.location+Nt);n.bindBuffer(n.ARRAY_BUFFER,qt);for(let Nt=0;Nt<W.locationSize;Nt++)A(W.location+Nt,Mt/W.locationSize,Kt,ot,Tt*ne,(ee+Mt/W.locationSize*Nt)*ne,ut)}else{if(it.isInstancedBufferAttribute){for(let pt=0;pt<W.locationSize;pt++)_(W.location+pt,it.meshPerAttribute);B.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=it.meshPerAttribute*it.count)}else for(let pt=0;pt<W.locationSize;pt++)y(W.location+pt);n.bindBuffer(n.ARRAY_BUFFER,qt);for(let pt=0;pt<W.locationSize;pt++)A(W.location+pt,Mt/W.locationSize,Kt,ot,Mt*ne,Mt/W.locationSize*pt*ne,ut)}}else if(O!==void 0){let ot=O[Z];if(ot!==void 0)switch(ot.length){case 2:n.vertexAttrib2fv(W.location,ot);break;case 3:n.vertexAttrib3fv(W.location,ot);break;case 4:n.vertexAttrib4fv(W.location,ot);break;default:n.vertexAttrib1fv(W.location,ot)}}}}T()}function R(){N();for(let B in i){let G=i[B];for(let H in G){let z=G[H];for(let $ in z){let J=z[$];for(let O in J)d(J[O].object),delete J[O];delete z[$]}}delete i[B]}}function E(B){if(i[B.id]===void 0)return;let G=i[B.id];for(let H in G){let z=G[H];for(let $ in z){let J=z[$];for(let O in J)d(J[O].object),delete J[O];delete z[$]}}delete i[B.id]}function P(B){for(let G in i){let H=i[G];for(let z in H){let $=H[z];if($[B.id]===void 0)continue;let J=$[B.id];for(let O in J)d(J[O].object),delete J[O];delete $[B.id]}}}function w(B){for(let G in i){let H=i[G],z=B.isInstancedMesh===!0?B.id:0,$=H[z];if($!==void 0){for(let J in $){let O=$[J];for(let Z in O)d(O[Z].object),delete O[Z];delete $[J]}delete H[z],Object.keys(H).length===0&&delete i[G]}}}function N(){U(),c=!0,a!==s&&(a=s,f(a.object))}function U(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:N,resetDefaultState:U,dispose:R,releaseStatesOfGeometry:E,releaseStatesOfObject:w,releaseStatesOfProgram:P,initAttributes:b,enableAttribute:y,disableUnusedAttributes:T}}function i_(n,t,e){let i;function s(h){i=h}function a(h,f){n.drawArrays(i,h,f),e.update(f,i,1)}function c(h,f,d){d!==0&&(n.drawArraysInstanced(i,h,f,d),e.update(f,i,d))}function o(h,f,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,h,0,f,0,d);let m=0;for(let x=0;x<d;x++)m+=f[x];e.update(m,i,1)}this.setMode=s,this.render=a,this.renderInstances=c,this.renderMultiDraw=o}function s_(n,t,e,i){let s;function a(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let P=t.get("EXT_texture_filter_anisotropic");s=n.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function c(P){return!(P!==Yn&&i.convert(P)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(P){let w=P===oi&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(P!==Ln&&P!==ri&&!w&&i.convert(P)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE))}function h(P){if(P==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let f=e.precision!==void 0?e.precision:"highp",d=h(f);d!==f&&(ie("WebGLRenderer:",f,"not supported, using",d,"instead."),f=d);let g=e.logarithmicDepthBuffer===!0,m=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&m===!1&&ie("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let x=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),v=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),b=n.getParameter(n.MAX_TEXTURE_SIZE),y=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),_=n.getParameter(n.MAX_VERTEX_ATTRIBS),T=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),A=n.getParameter(n.MAX_VARYING_VECTORS),S=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),R=n.getParameter(n.MAX_SAMPLES),E=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:h,textureFormatReadable:c,textureTypeReadable:o,precision:f,logarithmicDepthBuffer:g,reversedDepthBuffer:m,maxTextures:x,maxVertexTextures:v,maxTextureSize:b,maxCubemapSize:y,maxAttributes:_,maxVertexUniforms:T,maxVaryings:A,maxFragmentUniforms:S,maxSamples:R,samples:E}}function r_(n){let t=this,e=null,i=0,s=!1,a=!1,c=new Fn,o=new ue,h={value:null,needsUpdate:!1};this.uniform=h,this.numPlanes=0,this.numIntersection=0,this.init=function(g,m){let x=g.length!==0||m||i!==0||s;return s=m,i=g.length,x},this.beginShadows=function(){a=!0,d(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(g,m){e=d(g,m,0)},this.setState=function(g,m,x){let v=g.clippingPlanes,b=g.clipIntersection,y=g.clipShadows,_=n.get(g);if(!s||v===null||v.length===0||a&&!y)a?d(null):f();else{let T=a?0:i,A=T*4,S=_.clippingState||null;h.value=S,S=d(v,m,A,x);for(let R=0;R!==A;++R)S[R]=e[R];_.clippingState=S,this.numIntersection=b?this.numPlanes:0,this.numPlanes+=T}};function f(){h.value!==e&&(h.value=e,h.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function d(g,m,x,v){let b=g!==null?g.length:0,y=null;if(b!==0){if(y=h.value,v!==!0||y===null){let _=x+b*4,T=m.matrixWorldInverse;o.getNormalMatrix(T),(y===null||y.length<_)&&(y=new Float32Array(_));for(let A=0,S=x;A!==b;++A,S+=4)c.copy(g[A]).applyMatrix4(T,o),c.normal.toArray(y,S),y[S+3]=c.constant}h.value=y,h.needsUpdate=!0}return t.numPlanes=b,t.numIntersection=0,y}}function h_(n){let t=[],e=[],i=n,s=n-_r+1+o_;for(let a=0;a<s;a++){let c=Math.pow(2,i);t.push(c);let o=1/(c-2),h=-o,f=1+o,d=[h,h,f,h,f,f,h,h,f,f,h,f],g=6,m=6,x=3,v=new Float32Array(x*m*g),b=new Float32Array(x*m*g);for(let _=0;_<g;_++){let T=_%3*2/3-1,A=_>2?0:-1,S=[T,A,0,T+2/3,A,0,T+2/3,A+1,0,T,A,0,T+2/3,A+1,0,T,A+1,0];v.set(S,x*m*_);for(let R=0;R<m;R++){let E=d[R*2]*2-1,P=d[R*2+1]*2-1;_===0?Es.set(1,P,E):_===1?Es.set(-E,1,-P):_===2?Es.set(-E,P,1):_===3?Es.set(-1,P,-E):_===4?Es.set(-E,-1,P):Es.set(E,P,-1),Es.toArray(b,(_*m+R)*x)}}let y=new We;y.setAttribute("position",new Ve(v,x)),y.setAttribute("outputDirection",new Ve(b,x)),e.push(new Pe(y,null)),i>_r&&i--}return{lodMeshes:e,sizeLods:t}}function rp(n,t,e){let i=new Rn(n,t,e);return i.texture.mapping=Go,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function yr(n,t,e,i,s){n.viewport.set(t,e,i,s),n.scissor.set(t,e,i,s)}function u_(n,t,e){return new kn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:l_,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:yc(),fragmentShader:`

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
		`,blending:yi,depthTest:!1,depthWrite:!1})}function f_(n,t,e){return new kn({name:"SphericalGaussianBlur",defines:{SAMPLES:a_,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:yc(),fragmentShader:`

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
		`,blending:yi,depthTest:!1,depthWrite:!1})}function op(){return new kn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:yc(),fragmentShader:`

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
		`,blending:yi,depthTest:!1,depthWrite:!1})}function ap(){return new kn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:yc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:yi,depthTest:!1,depthWrite:!1})}function yc(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}function d_(n){let t=new WeakMap,e=new WeakMap,i=null;function s(m,x=!1){return m==null?null:x?c(m):a(m)}function a(m){if(m&&m.isTexture){let x=m.mapping;if(x===El||x===Tl)if(t.has(m)){let v=t.get(m).texture;return o(v,m.mapping)}else{let v=m.image;if(v&&v.height>0){let b=new gc(v.height);return b.fromEquirectangularTexture(n,m),t.set(m,b),m.addEventListener("dispose",f),o(b.texture,m.mapping)}else return null}}return m}function c(m){if(m&&m.isTexture){let x=m.mapping,v=x===El||x===Tl,b=x===ts||x===Ms;if(v||b){let y=e.get(m),_=y!==void 0?y.texture.pmremVersion:0;if(m.isRenderTargetTexture&&m.pmremVersion!==_)return i===null&&(i=new mc(n)),y=v?i.fromEquirectangular(m,y):i.fromCubemap(m,y),y.texture.pmremVersion=m.pmremVersion,e.set(m,y),y.texture;if(y!==void 0)return y.texture;{let T=m.image;return v&&T&&T.height>0||b&&T&&h(T)?(i===null&&(i=new mc(n)),y=v?i.fromEquirectangular(m):i.fromCubemap(m),y.texture.pmremVersion=m.pmremVersion,e.set(m,y),m.addEventListener("dispose",d),y.texture):null}}}return m}function o(m,x){return x===El?m.mapping=ts:x===Tl&&(m.mapping=Ms),m}function h(m){let x=0,v=6;for(let b=0;b<v;b++)m[b]!==void 0&&x++;return x===v}function f(m){let x=m.target;x.removeEventListener("dispose",f);let v=t.get(x);v!==void 0&&(t.delete(x),v.dispose())}function d(m){let x=m.target;x.removeEventListener("dispose",d);let v=e.get(x);v!==void 0&&(e.delete(x),v.dispose())}function g(){t=new WeakMap,e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:g}}function p_(n){let t={};function e(i){if(t[i]!==void 0)return t[i];let s=n.getExtension(i);return t[i]=s,s}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){let s=e(i);return s===null&&gs("WebGLRenderer: "+i+" extension not supported."),s}}}function m_(n,t,e,i){let s={},a=new WeakMap;function c(g){let m=g.target;m.index!==null&&t.remove(m.index);for(let v in m.attributes)t.remove(m.attributes[v]);m.removeEventListener("dispose",c),delete s[m.id];let x=a.get(m);x&&(t.remove(x),a.delete(m)),i.releaseStatesOfGeometry(m),m.isInstancedBufferGeometry===!0&&delete m._maxInstanceCount,e.memory.geometries--}function o(g,m){return s[m.id]===!0||(m.addEventListener("dispose",c),s[m.id]=!0,e.memory.geometries++),m}function h(g){let m=g.attributes;for(let x in m)t.update(m[x],n.ARRAY_BUFFER)}function f(g){let m=[],x=g.index,v=g.attributes.position,b=0;if(v===void 0)return;if(x!==null){let T=x.array;b=x.version;for(let A=0,S=T.length;A<S;A+=3){let R=T[A+0],E=T[A+1],P=T[A+2];m.push(R,E,E,P,P,R)}}else{let T=v.array;b=v.version;for(let A=0,S=T.length/3-1;A<S;A+=3){let R=A+0,E=A+1,P=A+2;m.push(R,E,E,P,P,R)}}let y=new(v.count>=65535?Mo:bo)(m,1);y.version=b;let _=a.get(g);_&&t.remove(_),a.set(g,y)}function d(g){let m=a.get(g);if(m){let x=g.index;x!==null&&m.version<x.version&&f(g)}else f(g);return a.get(g)}return{get:o,update:h,getWireframeAttribute:d}}function g_(n,t,e){let i;function s(g){i=g}let a,c;function o(g){a=g.type,c=g.bytesPerElement}function h(g,m){n.drawElements(i,m,a,g*c),e.update(m,i,1)}function f(g,m,x){x!==0&&(n.drawElementsInstanced(i,m,a,g*c,x),e.update(m,i,x))}function d(g,m,x){if(x===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,m,0,a,g,0,x);let b=0;for(let y=0;y<x;y++)b+=m[y];e.update(b,i,1)}this.setMode=s,this.setIndex=o,this.render=h,this.renderInstances=f,this.renderMultiDraw=d}function x_(n){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(a,c,o){switch(e.calls++,c){case n.TRIANGLES:e.triangles+=o*(a/3);break;case n.LINES:e.lines+=o*(a/2);break;case n.LINE_STRIP:e.lines+=o*(a-1);break;case n.LINE_LOOP:e.lines+=o*a;break;case n.POINTS:e.points+=o*a;break;default:se("WebGLInfo: Unknown draw mode:",c);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:i}}function y_(n,t,e){let i=new WeakMap,s=new Ye;function a(c,o,h){let f=c.morphTargetInfluences,d=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,g=d!==void 0?d.length:0,m=i.get(o);if(m===void 0||m.count!==g){let N=function(){P.dispose(),i.delete(o),o.removeEventListener("dispose",N)};m!==void 0&&m.texture.dispose();let x=o.morphAttributes.position!==void 0,v=o.morphAttributes.normal!==void 0,b=o.morphAttributes.color!==void 0,y=o.morphAttributes.position||[],_=o.morphAttributes.normal||[],T=o.morphAttributes.color||[],A=0;x===!0&&(A=1),v===!0&&(A=2),b===!0&&(A=3);let S=o.attributes.position.count*A,R=1;S>t.maxTextureSize&&(R=Math.ceil(S/t.maxTextureSize),S=t.maxTextureSize);let E=new Float32Array(S*R*4*g),P=new _o(E,S,R,g);P.type=ri,P.needsUpdate=!0;let w=A*4;for(let U=0;U<g;U++){let B=y[U],G=_[U],H=T[U],z=S*R*4*U;for(let $=0;$<B.count;$++){let J=$*w;x===!0&&(s.fromBufferAttribute(B,$),E[z+J+0]=s.x,E[z+J+1]=s.y,E[z+J+2]=s.z,E[z+J+3]=0),v===!0&&(s.fromBufferAttribute(G,$),E[z+J+4]=s.x,E[z+J+5]=s.y,E[z+J+6]=s.z,E[z+J+7]=0),b===!0&&(s.fromBufferAttribute(H,$),E[z+J+8]=s.x,E[z+J+9]=s.y,E[z+J+10]=s.z,E[z+J+11]=H.itemSize===4?s.w:1)}}m={count:g,texture:P,size:new jt(S,R)},i.set(o,m),o.addEventListener("dispose",N)}if(c.isInstancedMesh===!0&&c.morphTexture!==null)h.getUniforms().setValue(n,"morphTexture",c.morphTexture,e);else{let x=0;for(let b=0;b<f.length;b++)x+=f[b];let v=o.morphTargetsRelative?1:1-x;h.getUniforms().setValue(n,"morphTargetBaseInfluence",v),h.getUniforms().setValue(n,"morphTargetInfluences",f)}h.getUniforms().setValue(n,"morphTargetsTexture",m.texture,e),h.getUniforms().setValue(n,"morphTargetsTextureSize",m.size)}return{update:a}}function __(n,t,e,i,s){let a=new WeakMap;function c(f){let d=s.render.frame,g=f.geometry,m=t.get(f,g);if(a.get(m)!==d&&(t.update(m),a.set(m,d)),f.isInstancedMesh&&(f.hasEventListener("dispose",h)===!1&&f.addEventListener("dispose",h),a.get(f)!==d&&(e.update(f.instanceMatrix,n.ARRAY_BUFFER),f.instanceColor!==null&&e.update(f.instanceColor,n.ARRAY_BUFFER),a.set(f,d))),f.isSkinnedMesh){let x=f.skeleton;a.get(x)!==d&&(x.update(),a.set(x,d))}return m}function o(){a=new WeakMap}function h(f){let d=f.target;d.removeEventListener("dispose",h),i.releaseStatesOfObject(d),e.remove(d.instanceMatrix),d.instanceColor!==null&&e.remove(d.instanceColor)}return{update:c,dispose:o}}function b_(n,t,e,i,s,a){let c=new Rn(t,e,{type:n,depthBuffer:s,stencilBuffer:a,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,h=null,f=new We;f.setAttribute("position",new He([-1,3,0,-1,-1,0,3,-1,0],3)),f.setAttribute("uv",new He([0,2,0,0,2,0],2));let d=new cl({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),g=new Pe(f,d),m=new ur(-1,1,1,-1,0,1),x=null,v=null,b=!1,y,_=null,T=[],A=!1;this.setSize=function(S,R){c.setSize(S,R),o!==null&&o.setSize(S,R),h!==null&&h.setSize(S,R);for(let E=0;E<T.length;E++){let P=T[E];P.setSize&&P.setSize(S,R)}},this.setEffects=function(S){T=S,A=T.length>0&&T[0].isRenderPass===!0;let R=c.width,E=c.height;T.length>0&&o===null&&(o=new Rn(R,E,{type:oi,depthBuffer:!1,stencilBuffer:!1}),h=new Rn(R,E,{type:oi,depthBuffer:!1,stencilBuffer:!1}));for(let P=0;P<T.length;P++){let w=T[P];w.setSize&&w.setSize(R,E)}},this.begin=function(S,R){if(b||S.toneMapping===ii&&T.length===0)return!1;if(_=R,R!==null){let E=R.width,P=R.height;(c.width!==E||c.height!==P)&&this.setSize(E,P)}return A===!1&&S.setRenderTarget(c),y=S.toneMapping,S.toneMapping=ii,!0},this.hasRenderPass=function(){return A},this.end=function(S,R){S.toneMapping=y,b=!0;let E=c,P=o;for(let w=0;w<T.length;w++){let N=T[w];N.enabled!==!1&&(N.render(S,P,E,R),N.needsSwap!==!1&&(E=P,P=P===o?h:o))}if(x!==S.outputColorSpace||v!==S.toneMapping){x=S.outputColorSpace,v=S.toneMapping,d.defines={},Ee.getTransfer(x)===Le&&(d.defines.SRGB_TRANSFER="");let w=v_[v];w&&(d.defines[w]=""),d.needsUpdate=!0}d.uniforms.tDiffuse.value=E.texture,S.setRenderTarget(_),S.render(g,m),_=null,b=!1},this.isCompositing=function(){return b},this.dispose=function(){c.dispose(),o!==null&&o.dispose(),h!==null&&h.dispose(),f.dispose(),d.dispose()}}function br(n,t,e){let i=n[0];if(i<=0||i>0)return n;let s=t*e,a=lp[s];if(a===void 0&&(a=new Float32Array(s),lp[s]=a),t!==0){i.toArray(a,0);for(let c=1,o=0;c!==t;++c)o+=e,n[c].toArray(a,o)}return a}function cn(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function hn(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function _c(n,t){let e=cp[t];e===void 0&&(e=new Int32Array(t),cp[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function M_(n,t){let e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function S_(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(cn(e,t))return;n.uniform2fv(this.addr,t),hn(e,t)}}function w_(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(cn(e,t))return;n.uniform3fv(this.addr,t),hn(e,t)}}function E_(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(cn(e,t))return;n.uniform4fv(this.addr,t),hn(e,t)}}function T_(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(cn(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),hn(e,t)}else{if(cn(e,i))return;fp.set(i),n.uniformMatrix2fv(this.addr,!1,fp),hn(e,i)}}function A_(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(cn(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),hn(e,t)}else{if(cn(e,i))return;up.set(i),n.uniformMatrix3fv(this.addr,!1,up),hn(e,i)}}function C_(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(cn(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),hn(e,t)}else{if(cn(e,i))return;hp.set(i),n.uniformMatrix4fv(this.addr,!1,hp),hn(e,i)}}function P_(n,t){let e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function I_(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(cn(e,t))return;n.uniform2iv(this.addr,t),hn(e,t)}}function R_(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(cn(e,t))return;n.uniform3iv(this.addr,t),hn(e,t)}}function L_(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(cn(e,t))return;n.uniform4iv(this.addr,t),hn(e,t)}}function N_(n,t){let e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function D_(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(cn(e,t))return;n.uniform2uiv(this.addr,t),hn(e,t)}}function O_(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(cn(e,t))return;n.uniform3uiv(this.addr,t),hn(e,t)}}function F_(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(cn(e,t))return;n.uniform4uiv(this.addr,t),hn(e,t)}}function U_(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let a;this.type===n.SAMPLER_2D_SHADOW?(fu.compareFunction=e.isReversedDepthBuffer()?fc:uc,a=fu):a=Ap,e.setTexture2D(t||a,s)}function B_(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture3D(t||Pp,s)}function k_(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTextureCube(t||Ip,s)}function z_(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture2DArray(t||Cp,s)}function V_(n){switch(n){case 5126:return M_;case 35664:return S_;case 35665:return w_;case 35666:return E_;case 35674:return T_;case 35675:return A_;case 35676:return C_;case 5124:case 35670:return P_;case 35667:case 35671:return I_;case 35668:case 35672:return R_;case 35669:case 35673:return L_;case 5125:return N_;case 36294:return D_;case 36295:return O_;case 36296:return F_;case 35678:case 36198:case 36298:case 36306:case 35682:return U_;case 35679:case 36299:case 36307:return B_;case 35680:case 36300:case 36308:case 36293:return k_;case 36289:case 36303:case 36311:case 36292:return z_}}function H_(n,t){n.uniform1fv(this.addr,t)}function G_(n,t){let e=br(t,this.size,2);n.uniform2fv(this.addr,e)}function X_(n,t){let e=br(t,this.size,3);n.uniform3fv(this.addr,e)}function W_(n,t){let e=br(t,this.size,4);n.uniform4fv(this.addr,e)}function Y_(n,t){let e=br(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function $_(n,t){let e=br(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function q_(n,t){let e=br(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function Z_(n,t){n.uniform1iv(this.addr,t)}function J_(n,t){n.uniform2iv(this.addr,t)}function j_(n,t){n.uniform3iv(this.addr,t)}function K_(n,t){n.uniform4iv(this.addr,t)}function Q_(n,t){n.uniform1uiv(this.addr,t)}function tv(n,t){n.uniform2uiv(this.addr,t)}function ev(n,t){n.uniform3uiv(this.addr,t)}function nv(n,t){n.uniform4uiv(this.addr,t)}function iv(n,t,e){let i=this.cache,s=t.length,a=_c(e,s);cn(i,a)||(n.uniform1iv(this.addr,a),hn(i,a));let c;this.type===n.SAMPLER_2D_SHADOW?c=fu:c=Ap;for(let o=0;o!==s;++o)e.setTexture2D(t[o]||c,a[o])}function sv(n,t,e){let i=this.cache,s=t.length,a=_c(e,s);cn(i,a)||(n.uniform1iv(this.addr,a),hn(i,a));for(let c=0;c!==s;++c)e.setTexture3D(t[c]||Pp,a[c])}function rv(n,t,e){let i=this.cache,s=t.length,a=_c(e,s);cn(i,a)||(n.uniform1iv(this.addr,a),hn(i,a));for(let c=0;c!==s;++c)e.setTextureCube(t[c]||Ip,a[c])}function ov(n,t,e){let i=this.cache,s=t.length,a=_c(e,s);cn(i,a)||(n.uniform1iv(this.addr,a),hn(i,a));for(let c=0;c!==s;++c)e.setTexture2DArray(t[c]||Cp,a[c])}function av(n){switch(n){case 5126:return H_;case 35664:return G_;case 35665:return X_;case 35666:return W_;case 35674:return Y_;case 35675:return $_;case 35676:return q_;case 5124:case 35670:return Z_;case 35667:case 35671:return J_;case 35668:case 35672:return j_;case 35669:case 35673:return K_;case 5125:return Q_;case 36294:return tv;case 36295:return ev;case 36296:return nv;case 35678:case 36198:case 36298:case 36306:case 35682:return iv;case 35679:case 36299:case 36307:return sv;case 35680:case 36300:case 36308:case 36293:return rv;case 36289:case 36303:case 36311:case 36292:return ov}}function dp(n,t){n.seq.push(t),n.map[t.id]=t}function lv(n,t,e){let i=n.name,s=i.length;for(hu.lastIndex=0;;){let a=hu.exec(i),c=hu.lastIndex,o=a[1],h=a[2]==="]",f=a[3];if(h&&(o=o|0),f===void 0||f==="["&&c+2===s){dp(e,f===void 0?new du(o,n,t):new pu(o,n,t));break}else{let g=e.map[o];g===void 0&&(g=new mu(o),dp(e,g)),e=g}}}function pp(n,t,e){let i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}function uv(n,t){let e=n.split(`
`),i=[],s=Math.max(t-6,0),a=Math.min(t+6,e.length);for(let c=s;c<a;c++){let o=c+1;i.push(`${o===t?">":" "} ${o}: ${e[c]}`)}return i.join(`
`)}function fv(n){Ee._getMatrix(mp,Ee.workingColorSpace,n);let t=`mat3( ${mp.elements.map(e=>e.toFixed(4))} )`;switch(Ee.getTransfer(n)){case go:return[t,"LinearTransferOETF"];case Le:return[t,"sRGBTransferOETF"];default:return ie("WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function gp(n,t,e){let i=n.getShaderParameter(t,n.COMPILE_STATUS),a=(n.getShaderInfoLog(t)||"").trim();if(i&&a==="")return"";let c=/ERROR: 0:(\d+)/.exec(a);if(c){let o=parseInt(c[1]);return e.toUpperCase()+`

`+a+`

`+uv(n.getShaderSource(t),o)}else return a}function dv(n,t){let e=fv(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function mv(n,t){let e=pv[t];return e===void 0?(ie("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function gv(){Ee.getLuminanceCoefficients(pc);let n=pc.x.toFixed(4),t=pc.y.toFixed(4),e=pc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function xv(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Qo).join(`
`)}function yv(n){let t=[];for(let e in n){let i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function _v(n,t){let e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let a=n.getActiveAttrib(t,s),c=a.name,o=1;a.type===n.FLOAT_MAT2&&(o=2),a.type===n.FLOAT_MAT3&&(o=3),a.type===n.FLOAT_MAT4&&(o=4),e[c]={type:a.type,location:n.getAttribLocation(t,c),locationSize:o}}return e}function Qo(n){return n!==""}function xp(n,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function yp(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}function gu(n){return n.replace(vv,Mv)}function Mv(n,t){let e=me[t];if(e===void 0){let i=bv.get(t);if(i!==void 0)e=me[i],ie('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return gu(e)}function _p(n){return n.replace(Sv,wv)}function wv(n,t,e,i){let s="";for(let a=parseInt(t);a<parseInt(e);a++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return s}function vp(n){let t=`precision ${n.precision} float;
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
#define LOW_PRECISION`),t}function Tv(n){return Ev[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}function Cv(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":Av[n.envMapMode]||"ENVMAP_TYPE_CUBE"}function Iv(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":Pv[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}function Lv(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":Rv[n.combine]||"ENVMAP_BLENDING_NONE"}function Nv(n){let t=n.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:i,maxMip:e}}function Dv(n,t,e,i){let s=n.getContext(),a=e.defines,c=e.vertexShader,o=e.fragmentShader,h=Tv(e),f=Cv(e),d=Iv(e),g=Lv(e),m=Nv(e),x=xv(e),v=yv(a),b=s.createProgram(),y,_,T=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(y=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v].filter(Qo).join(`
`),y.length>0&&(y+=`
`),_=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v].filter(Qo).join(`
`),_.length>0&&(_+=`
`)):(y=[vp(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+d:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+h:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Qo).join(`
`),_=[vp(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+f:"",e.envMap?"#define "+d:"",e.envMap?"#define "+g:"",m?"#define CUBEUV_TEXEL_WIDTH "+m.texelWidth:"",m?"#define CUBEUV_TEXEL_HEIGHT "+m.texelHeight:"",m?"#define CUBEUV_MAX_MIP "+m.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+h:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==ii?"#define TONE_MAPPING":"",e.toneMapping!==ii?me.tonemapping_pars_fragment:"",e.toneMapping!==ii?mv("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",me.colorspace_pars_fragment,dv("linearToOutputTexel",e.outputColorSpace),gv(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Qo).join(`
`)),c=gu(c),c=xp(c,e),c=yp(c,e),o=gu(o),o=xp(o,e),o=yp(o,e),c=_p(c),o=_p(o),e.isRawShaderMaterial!==!0&&(T=`#version 300 es
`,y=[x,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,_=["#define varying in",e.glslVersion===Kh?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Kh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);let A=T+y+c,S=T+_+o,R=pp(s,s.VERTEX_SHADER,A),E=pp(s,s.FRAGMENT_SHADER,S);s.attachShader(b,R),s.attachShader(b,E),e.index0AttributeName!==void 0?s.bindAttribLocation(b,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(b,0,"position"),s.linkProgram(b);function P(B){if(n.debug.checkShaderErrors){let G=s.getProgramInfoLog(b)||"",H=s.getShaderInfoLog(R)||"",z=s.getShaderInfoLog(E)||"",$=G.trim(),J=H.trim(),O=z.trim(),Z=!0,W=!0;if(s.getProgramParameter(b,s.LINK_STATUS)===!1)if(Z=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,b,R,E);else{let it=gp(s,R,"vertex"),ot=gp(s,E,"fragment");se("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(b,s.VALIDATE_STATUS)+`

Material Name: `+B.name+`
Material Type: `+B.type+`

Program Info Log: `+$+`
`+it+`
`+ot)}else $!==""?ie("WebGLProgram: Program Info Log:",$):(J===""||O==="")&&(W=!1);W&&(B.diagnostics={runnable:Z,programLog:$,vertexShader:{log:J,prefix:y},fragmentShader:{log:O,prefix:_}})}s.deleteShader(R),s.deleteShader(E),w=new vr(s,b),N=_v(s,b)}let w;this.getUniforms=function(){return w===void 0&&P(this),w};let N;this.getAttributes=function(){return N===void 0&&P(this),N};let U=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return U===!1&&(U=s.getProgramParameter(b,cv)),U},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(b),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=hv++,this.cacheKey=t,this.usedTimes=1,this.program=b,this.vertexShader=R,this.fragmentShader=E,this}function Fv(n){return n===is||n===Zo||n===Jo}function Uv(n,t,e,i,s,a){let c=new sr,o=new xu,h=new Set,f=[],d=new Map,g=i.logarithmicDepthBuffer,m=i.precision,x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(w){return h.add(w),w===0?"uv":`uv${w}`}function b(w,N,U,B,G,H){let z=B.fog,$=G.geometry,J=w.isMeshStandardMaterial||w.isMeshLambertMaterial||w.isMeshPhongMaterial?B.environment:null,O=w.isMeshStandardMaterial||w.isMeshLambertMaterial&&!w.envMap||w.isMeshPhongMaterial&&!w.envMap,Z=t.get(w.envMap||J,O),W=Z&&Z.mapping===Go?Z.image.height:null,it=x[w.type];w.precision!==null&&(m=i.getMaxPrecision(w.precision),m!==w.precision&&ie("WebGLProgram.getParameters:",w.precision,"not supported, using",m,"instead."));let ot=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,Mt=ot!==void 0?ot.length:0,wt=0;$.morphAttributes.position!==void 0&&(wt=1),$.morphAttributes.normal!==void 0&&(wt=2),$.morphAttributes.color!==void 0&&(wt=3);let qt,Kt,ne,ut;if(it){let Re=vi[it];qt=Re.vertexShader,Kt=Re.fragmentShader}else{qt=w.vertexShader,Kt=w.fragmentShader;let Re=o.getVertexShaderStage(w),Se=o.getFragmentShaderStage(w);o.update(w,Re,Se),ne=Re.id,ut=Se.id}let pt=n.getRenderTarget(),Tt=n.state.buffers.depth.getReversed(),ee=G.isInstancedMesh===!0,Nt=G.isBatchedMesh===!0,re=!!w.map,Be=!!w.matcap,fe=!!Z,pe=!!w.aoMap,be=!!w.lightMap,xe=!!w.bumpMap&&w.wireframe===!1,Ne=!!w.normalMap,Ke=!!w.displacementMap,tn=!!w.emissiveMap,De=!!w.metalnessMap,Ge=!!w.roughnessMap,tt=w.anisotropy>0,qe=w.clearcoat>0,Te=w.dispersion>0,V=w.retroreflectivity>0,I=w.iridescence>0,st=w.sheen>0,ct=w.transmission>0,mt=tt&&!!w.anisotropyMap,Et=qe&&!!w.clearcoatMap,Pt=qe&&!!w.clearcoatNormalMap,k=qe&&!!w.clearcoatRoughnessMap,vt=I&&!!w.iridescenceMap,Dt=I&&!!w.iridescenceThicknessMap,Vt=st&&!!w.sheenColorMap,Ot=st&&!!w.sheenRoughnessMap,At=!!w.specularMap,Yt=!!w.specularColorMap,$t=!!w.specularIntensityMap,le=ct&&!!w.transmissionMap,Q=ct&&!!w.thicknessMap,Ct=!!w.gradientMap,yt=!!w.alphaMap,It=w.alphaTest>0,Rt=!!w.alphaHash,bt=!!w.extensions,Jt=ii;w.toneMapped&&(pt===null||pt.isXRRenderTarget===!0)&&(Jt=n.toneMapping);let Ht={shaderID:it,shaderType:w.type,shaderName:w.name,vertexShader:qt,fragmentShader:Kt,defines:w.defines,customVertexShaderID:ne,customFragmentShaderID:ut,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:m,batching:Nt,batchingColor:Nt&&G._colorsTexture!==null,instancing:ee,instancingColor:ee&&G.instanceColor!==null,instancingMorph:ee&&G.morphTexture!==null,outputColorSpace:pt===null?n.outputColorSpace:pt.isXRRenderTarget===!0?pt.texture.colorSpace:Ee.workingColorSpace,alphaToCoverage:!!w.alphaToCoverage,map:re,matcap:Be,envMap:fe,envMapMode:fe&&Z.mapping,envMapCubeUVHeight:W,aoMap:pe,lightMap:be,bumpMap:xe,normalMap:Ne,displacementMap:Ke,emissiveMap:tn,normalMapObjectSpace:Ne&&w.normalMapType===Ud,normalMapTangentSpace:Ne&&w.normalMapType===hc,packedNormalMap:Ne&&w.normalMapType===hc&&Fv(w.normalMap.format),metalnessMap:De,roughnessMap:Ge,anisotropy:tt,anisotropyMap:mt,clearcoat:qe,clearcoatMap:Et,clearcoatNormalMap:Pt,clearcoatRoughnessMap:k,dispersion:Te,retroreflection:V,iridescence:I,iridescenceMap:vt,iridescenceThicknessMap:Dt,sheen:st,sheenColorMap:Vt,sheenRoughnessMap:Ot,specularMap:At,specularColorMap:Yt,specularIntensityMap:$t,transmission:ct,transmissionMap:le,thicknessMap:Q,gradientMap:Ct,opaque:w.transparent===!1&&w.blending===mr&&w.alphaToCoverage===!1,alphaMap:yt,alphaTest:It,alphaHash:Rt,combine:w.combine,mapUv:re&&v(w.map.channel),aoMapUv:pe&&v(w.aoMap.channel),lightMapUv:be&&v(w.lightMap.channel),bumpMapUv:xe&&v(w.bumpMap.channel),normalMapUv:Ne&&v(w.normalMap.channel),displacementMapUv:Ke&&v(w.displacementMap.channel),emissiveMapUv:tn&&v(w.emissiveMap.channel),metalnessMapUv:De&&v(w.metalnessMap.channel),roughnessMapUv:Ge&&v(w.roughnessMap.channel),anisotropyMapUv:mt&&v(w.anisotropyMap.channel),clearcoatMapUv:Et&&v(w.clearcoatMap.channel),clearcoatNormalMapUv:Pt&&v(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:k&&v(w.clearcoatRoughnessMap.channel),iridescenceMapUv:vt&&v(w.iridescenceMap.channel),iridescenceThicknessMapUv:Dt&&v(w.iridescenceThicknessMap.channel),sheenColorMapUv:Vt&&v(w.sheenColorMap.channel),sheenRoughnessMapUv:Ot&&v(w.sheenRoughnessMap.channel),specularMapUv:At&&v(w.specularMap.channel),specularColorMapUv:Yt&&v(w.specularColorMap.channel),specularIntensityMapUv:$t&&v(w.specularIntensityMap.channel),transmissionMapUv:le&&v(w.transmissionMap.channel),thicknessMapUv:Q&&v(w.thicknessMap.channel),alphaMapUv:yt&&v(w.alphaMap.channel),vertexTangents:!!$.attributes.tangent&&(Ne||tt),vertexNormals:!!$.attributes.normal,vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,pointsUvs:G.isPoints===!0&&!!$.attributes.uv&&(re||yt),fog:!!z,useFog:w.fog===!0,fogExp2:!!z&&z.isFogExp2,flatShading:w.wireframe===!1&&(w.flatShading===!0||$.attributes.normal===void 0&&Ne===!1&&(w.isMeshLambertMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isMeshPhysicalMaterial)),sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:g,reversedDepthBuffer:Tt,skinning:G.isSkinnedMesh===!0,hasPositionAttribute:$.attributes.position!==void 0,morphTargets:$.morphAttributes.position!==void 0,morphNormals:$.morphAttributes.normal!==void 0,morphColors:$.morphAttributes.color!==void 0,morphTargetsCount:Mt,morphTextureStride:wt,numSunLights:N.sun.length,numDirLights:N.directional.length,numPointLights:N.point.length,numSpotLights:N.spot.length,numSpotLightMaps:N.spotLightMap.length,numRectAreaLights:N.rectArea.length,numHemiLights:N.hemi.length,numSunLightShadows:N.sunShadowMap.length,numDirLightShadows:N.directionalShadowMap.length,numPointLightShadows:N.pointShadowMap.length,numSpotLightShadows:N.spotShadowMap.length,numSpotLightShadowsWithMaps:N.numSpotLightShadowsWithMaps,numLightProbes:N.numLightProbes,numLightProbeGrids:H.length,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:w.dithering,shadowMapEnabled:n.shadowMap.enabled&&U.length>0,shadowMapType:n.shadowMap.type,toneMapping:Jt,decodeVideoTexture:re&&w.map.isVideoTexture===!0&&Ee.getTransfer(w.map.colorSpace)===Le,decodeVideoTextureEmissive:tn&&w.emissiveMap.isVideoTexture===!0&&Ee.getTransfer(w.emissiveMap.colorSpace)===Le,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===wn,flipSided:w.side===Pn,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:bt&&w.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(bt&&w.extensions.multiDraw===!0||Nt)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return Ht.vertexUv1s=h.has(1),Ht.vertexUv2s=h.has(2),Ht.vertexUv3s=h.has(3),h.clear(),Ht}function y(w){let N=[];if(w.shaderID?N.push(w.shaderID):(N.push(w.customVertexShaderID),N.push(w.customFragmentShaderID)),w.defines!==void 0)for(let U in w.defines)N.push(U),N.push(w.defines[U]);return w.isRawShaderMaterial===!1&&(_(N,w),T(N,w),N.push(n.outputColorSpace)),N.push(w.customProgramCacheKey),N.join()}function _(w,N){w.push(N.precision),w.push(N.outputColorSpace),w.push(N.envMapMode),w.push(N.envMapCubeUVHeight),w.push(N.mapUv),w.push(N.alphaMapUv),w.push(N.lightMapUv),w.push(N.aoMapUv),w.push(N.bumpMapUv),w.push(N.normalMapUv),w.push(N.displacementMapUv),w.push(N.emissiveMapUv),w.push(N.metalnessMapUv),w.push(N.roughnessMapUv),w.push(N.anisotropyMapUv),w.push(N.clearcoatMapUv),w.push(N.clearcoatNormalMapUv),w.push(N.clearcoatRoughnessMapUv),w.push(N.iridescenceMapUv),w.push(N.iridescenceThicknessMapUv),w.push(N.sheenColorMapUv),w.push(N.sheenRoughnessMapUv),w.push(N.specularMapUv),w.push(N.specularColorMapUv),w.push(N.specularIntensityMapUv),w.push(N.transmissionMapUv),w.push(N.thicknessMapUv),w.push(N.combine),w.push(N.fogExp2),w.push(N.sizeAttenuation),w.push(N.morphTargetsCount),w.push(N.morphAttributeCount),w.push(N.numSunLights),w.push(N.numDirLights),w.push(N.numPointLights),w.push(N.numSpotLights),w.push(N.numSpotLightMaps),w.push(N.numHemiLights),w.push(N.numRectAreaLights),w.push(N.numSunLightShadows),w.push(N.numDirLightShadows),w.push(N.numPointLightShadows),w.push(N.numSpotLightShadows),w.push(N.numSpotLightShadowsWithMaps),w.push(N.numLightProbes),w.push(N.shadowMapType),w.push(N.toneMapping),w.push(N.numClippingPlanes),w.push(N.numClipIntersection),w.push(N.depthPacking)}function T(w,N){c.disableAll(),N.instancing&&c.enable(0),N.instancingColor&&c.enable(1),N.instancingMorph&&c.enable(2),N.matcap&&c.enable(3),N.envMap&&c.enable(4),N.normalMapObjectSpace&&c.enable(5),N.normalMapTangentSpace&&c.enable(6),N.clearcoat&&c.enable(7),N.iridescence&&c.enable(8),N.alphaTest&&c.enable(9),N.vertexColors&&c.enable(10),N.vertexAlphas&&c.enable(11),N.vertexUv1s&&c.enable(12),N.vertexUv2s&&c.enable(13),N.vertexUv3s&&c.enable(14),N.vertexTangents&&c.enable(15),N.anisotropy&&c.enable(16),N.alphaHash&&c.enable(17),N.batching&&c.enable(18),N.dispersion&&c.enable(19),N.retroreflection&&c.enable(24),N.batchingColor&&c.enable(20),N.gradientMap&&c.enable(21),N.packedNormalMap&&c.enable(22),N.vertexNormals&&c.enable(23),w.push(c.mask),c.disableAll(),N.fog&&c.enable(0),N.useFog&&c.enable(1),N.flatShading&&c.enable(2),N.logarithmicDepthBuffer&&c.enable(3),N.reversedDepthBuffer&&c.enable(4),N.skinning&&c.enable(5),N.morphTargets&&c.enable(6),N.morphNormals&&c.enable(7),N.morphColors&&c.enable(8),N.premultipliedAlpha&&c.enable(9),N.shadowMapEnabled&&c.enable(10),N.doubleSided&&c.enable(11),N.flipSided&&c.enable(12),N.useDepthPacking&&c.enable(13),N.dithering&&c.enable(14),N.transmission&&c.enable(15),N.sheen&&c.enable(16),N.opaque&&c.enable(17),N.pointsUvs&&c.enable(18),N.decodeVideoTexture&&c.enable(19),N.decodeVideoTextureEmissive&&c.enable(20),N.alphaToCoverage&&c.enable(21),N.numLightProbeGrids>0&&c.enable(22),N.hasPositionAttribute&&c.enable(23),w.push(c.mask)}function A(w){let N=x[w.type],U;if(N){let B=vi[N];U=ep.clone(B.uniforms)}else U=w.uniforms;return U}function S(w,N){let U=d.get(N);return U!==void 0?++U.usedTimes:(U=new Dv(n,N,w,s),f.push(U),d.set(N,U)),U}function R(w){if(--w.usedTimes===0){let N=f.indexOf(w);f[N]=f[f.length-1],f.pop(),d.delete(w.cacheKey),w.destroy()}}function E(w){o.remove(w)}function P(){o.dispose()}return{getParameters:b,getProgramCacheKey:y,getUniforms:A,acquireProgram:S,releaseProgram:R,releaseShaderCache:E,programs:f,dispose:P}}function Bv(){let n=new WeakMap;function t(c){return n.has(c)}function e(c){let o=n.get(c);return o===void 0&&(o={},n.set(c,o)),o}function i(c){n.delete(c)}function s(c,o,h){n.get(c)[o]=h}function a(){n=new WeakMap}return{has:t,get:e,remove:i,update:s,dispose:a}}function kv(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.materialVariant!==t.materialVariant?n.materialVariant-t.materialVariant:n.z!==t.z?n.z-t.z:n.id-t.id}function bp(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function Mp(){let n=[],t=0,e=[],i=[],s=[];function a(){t=0,e.length=0,i.length=0,s.length=0}function c(m){let x=0;return m.isInstancedMesh&&(x+=2),m.isSkinnedMesh&&(x+=1),x}function o(m,x,v,b,y,_){let T=n[t];return T===void 0?(T={id:m.id,object:m,geometry:x,material:v,materialVariant:c(m),groupOrder:b,renderOrder:m.renderOrder,z:y,group:_},n[t]=T):(T.id=m.id,T.object=m,T.geometry=x,T.material=v,T.materialVariant=c(m),T.groupOrder=b,T.renderOrder=m.renderOrder,T.z=y,T.group=_),t++,T}function h(m,x,v,b,y,_,T){T.reversedDepth===!0&&(y=-y);let A=o(m,x,v,b,y,_);v.transmission>0?i.push(A):v.transparent===!0?s.push(A):e.push(A)}function f(m,x,v,b,y,_){let T=o(m,x,v,b,y,_);v.transmission>0?i.unshift(T):v.transparent===!0?s.unshift(T):e.unshift(T)}function d(m,x){e.length>1&&e.sort(m||kv),i.length>1&&i.sort(x||bp),s.length>1&&s.sort(x||bp)}function g(){for(let m=t,x=n.length;m<x;m++){let v=n[m];if(v.id===null)break;v.id=null,v.object=null,v.geometry=null,v.material=null,v.group=null}}return{opaque:e,transmissive:i,transparent:s,init:a,push:h,unshift:f,finish:g,sort:d}}function zv(){let n=new WeakMap;function t(i,s){let a=n.get(i),c;return a===void 0?(c=new Mp,n.set(i,[c])):s>=a.length?(c=new Mp,a.push(c)):c=a[s],c}function e(){n=new WeakMap}return{get:t,dispose:e}}function Vv(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new K,color:new ae};break;case"SpotLight":e={position:new K,direction:new K,color:new ae,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new K,color:new ae,distance:0,decay:0};break;case"HemisphereLight":e={direction:new K,skyColor:new ae,groundColor:new ae};break;case"RectAreaLight":e={color:new ae,position:new K,halfWidth:new K,halfHeight:new K};break}return n[t.id]=e,e}}}function Hv(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new jt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new jt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new jt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}function Xv(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function Wv(n){let t=new Vv,e=Hv(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let f=0;f<9;f++)i.probe.push(new K);let s=new K,a=new Fe,c=new Fe;function o(f){let d=0,g=0,m=0;for(let G=0;G<9;G++)i.probe[G].set(0,0,0);let x=0,v=0,b=0,y=0,_=0,T=0,A=0,S=0,R=0,E=0,P=0,w=0,N=0,U=0;f.sort(Xv);for(let G=0,H=f.length;G<H;G++){let z=f[G],$=z.color,J=z.intensity,O=z.distance,Z=null;if(z.shadow&&z.shadow.map&&(z.shadow.map.texture.format===is?Z=z.shadow.map.texture:Z=z.shadow.map.depthTexture||z.shadow.map.texture),z.isAmbientLight)d+=$.r*J,g+=$.g*J,m+=$.b*J;else if(z.isLightProbe){for(let W=0;W<9;W++)i.probe[W].addScaledVector(z.sh.coefficients[W],J);U++}else if(z.isSunLight){let W=t.get(z);if(W.color.copy(z.color).multiplyScalar(z.intensity),z.castShadow){let it=z.shadow,ot=e.get(z);ot.shadowIntensity=it.intensity,ot.shadowBias=it.bias,ot.shadowNormalBias=it.normalBias,ot.shadowRadius=it.radius,ot.shadowMapSize.copy(it.mapSize).multiply(it.getFrameExtents()),i.sunShadow[v]=ot,i.sunShadowMap[v]=Z;let Mt=it.getViewportCount();for(let wt=0;wt<Mt;wt++)i.sunShadowMatrix[b+wt]=it.getMatrix(wt),i.sunShadowCascade[b+wt]=it._cascadeData[wt];b+=Mt,v++}i.sun[x]=W,x++}else if(z.isDirectionalLight){let W=t.get(z);if(W.color.copy(z.color).multiplyScalar(z.intensity),z.castShadow){let it=z.shadow,ot=e.get(z);ot.shadowIntensity=it.intensity,ot.shadowBias=it.bias,ot.shadowNormalBias=it.normalBias,ot.shadowRadius=it.radius,ot.shadowMapSize=it.mapSize,i.directionalShadow[y]=ot,i.directionalShadowMap[y]=Z,i.directionalShadowMatrix[y]=z.shadow.matrix,R++}i.directional[y]=W,y++}else if(z.isSpotLight){let W=t.get(z);W.position.setFromMatrixPosition(z.matrixWorld),W.color.copy($).multiplyScalar(J),W.distance=O,W.coneCos=Math.cos(z.angle),W.penumbraCos=Math.cos(z.angle*(1-z.penumbra)),W.decay=z.decay,i.spot[T]=W;let it=z.shadow;if(z.map&&(i.spotLightMap[w]=z.map,w++,it.updateMatrices(z),z.castShadow&&N++),i.spotLightMatrix[T]=it.matrix,z.castShadow){let ot=e.get(z);ot.shadowIntensity=it.intensity,ot.shadowBias=it.bias,ot.shadowNormalBias=it.normalBias,ot.shadowRadius=it.radius,ot.shadowMapSize=it.mapSize,i.spotShadow[T]=ot,i.spotShadowMap[T]=Z,P++}T++}else if(z.isRectAreaLight){let W=t.get(z);W.color.copy($).multiplyScalar(J),W.halfWidth.set(z.width*.5,0,0),W.halfHeight.set(0,z.height*.5,0),i.rectArea[A]=W,A++}else if(z.isPointLight){let W=t.get(z);if(W.color.copy(z.color).multiplyScalar(z.intensity),W.distance=z.distance,W.decay=z.decay,z.castShadow){let it=z.shadow,ot=e.get(z);ot.shadowIntensity=it.intensity,ot.shadowBias=it.bias,ot.shadowNormalBias=it.normalBias,ot.shadowRadius=it.radius,ot.shadowMapSize=it.mapSize,ot.shadowCameraNear=it.camera.near,ot.shadowCameraFar=it.camera.far,i.pointShadow[_]=ot,i.pointShadowMap[_]=Z,i.pointShadowMatrix[_]=z.shadow.matrix,E++}i.point[_]=W,_++}else if(z.isHemisphereLight){let W=t.get(z);W.skyColor.copy(z.color).multiplyScalar(J),W.groundColor.copy(z.groundColor).multiplyScalar(J),i.hemi[S]=W,S++}}A>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=kt.LTC_FLOAT_1,i.rectAreaLTC2=kt.LTC_FLOAT_2):(i.rectAreaLTC1=kt.LTC_HALF_1,i.rectAreaLTC2=kt.LTC_HALF_2)),i.ambient[0]=d,i.ambient[1]=g,i.ambient[2]=m;let B=i.hash;(B.sunLength!==x||B.directionalLength!==y||B.pointLength!==_||B.spotLength!==T||B.rectAreaLength!==A||B.hemiLength!==S||B.numSunShadows!==v||B.numDirectionalShadows!==R||B.numPointShadows!==E||B.numSpotShadows!==P||B.numSpotMaps!==w||B.numLightProbes!==U)&&(i.sun.length=x,i.directional.length=y,i.spot.length=T,i.rectArea.length=A,i.point.length=_,i.hemi.length=S,i.sunShadow.length=v,i.sunShadowMap.length=v,i.sunShadowMatrix.length=b,i.sunShadowCascade.length=b,i.directionalShadow.length=R,i.directionalShadowMap.length=R,i.directionalShadowMatrix.length=R,i.pointShadow.length=E,i.pointShadowMap.length=E,i.pointShadowMatrix.length=E,i.spotShadow.length=P,i.spotShadowMap.length=P,i.spotLightMatrix.length=P+w-N,i.spotLightMap.length=w,i.numSpotLightShadowsWithMaps=N,i.numLightProbes=U,B.sunLength=x,B.directionalLength=y,B.pointLength=_,B.spotLength=T,B.rectAreaLength=A,B.hemiLength=S,B.numSunShadows=v,B.numDirectionalShadows=R,B.numPointShadows=E,B.numSpotShadows=P,B.numSpotMaps=w,B.numLightProbes=U,i.version=Gv++)}function h(f,d){let g=0,m=0,x=0,v=0,b=0,y=0,_=d.matrixWorldInverse;for(let T=0,A=f.length;T<A;T++){let S=f[T];if(S.isSunLight){let R=i.sun[g];R.direction.setFromMatrixPosition(S.matrixWorld),R.direction.transformDirection(_),g++}else if(S.isDirectionalLight){let R=i.directional[m];R.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),R.direction.sub(s),R.direction.transformDirection(_),m++}else if(S.isSpotLight){let R=i.spot[v];R.position.setFromMatrixPosition(S.matrixWorld),R.position.applyMatrix4(_),R.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),R.direction.sub(s),R.direction.transformDirection(_),v++}else if(S.isRectAreaLight){let R=i.rectArea[b];R.position.setFromMatrixPosition(S.matrixWorld),R.position.applyMatrix4(_),c.identity(),a.copy(S.matrixWorld),a.premultiply(_),c.extractRotation(a),R.halfWidth.set(S.width*.5,0,0),R.halfHeight.set(0,S.height*.5,0),R.halfWidth.applyMatrix4(c),R.halfHeight.applyMatrix4(c),b++}else if(S.isPointLight){let R=i.point[x];R.position.setFromMatrixPosition(S.matrixWorld),R.position.applyMatrix4(_),x++}else if(S.isHemisphereLight){let R=i.hemi[y];R.direction.setFromMatrixPosition(S.matrixWorld),R.direction.transformDirection(_),y++}}}return{setup:o,setupView:h,state:i}}function Sp(n){let t=new Wv(n),e=[],i=[],s=[];function a(m){g.camera=m,e.length=0,i.length=0,s.length=0}function c(m){e.push(m)}function o(m){i.push(m)}function h(m){s.push(m)}function f(){t.setup(e)}function d(m){t.setupView(e,m)}let g={lightsArray:e,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:a,state:g,setupLights:f,setupLightsView:d,pushLight:c,pushShadow:o,pushLightProbeGrid:h}}function Yv(n){let t=new WeakMap;function e(s,a=0){let c=t.get(s),o;return c===void 0?(o=new Sp(n),t.set(s,[o])):a>=c.length?(o=new Sp(n),c.push(o)):o=c[a],o}function i(){t=new WeakMap}return{get:e,dispose:i}}function jv(n,t,e){let i=new ar,s=new jt,a=new jt,c=new Ye,o=new hl,h=new ul,f={},d=e.maxTextureSize,g={[Qi]:Pn,[Pn]:Qi,[wn]:wn},m=new kn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new jt},radius:{value:4}},vertexShader:$v,fragmentShader:qv}),x=m.clone();x.defines.HORIZONTAL_PASS=1;let v=new We;v.setAttribute("position",new Ve(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let b=new Pe(v,m),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ho;let _=this.type;this.render=function(E,P,w){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||E.length===0)return;this.type===pd&&(ie("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Ho);let N=n.getRenderTarget(),U=n.getActiveCubeFace(),B=n.getActiveMipmapLevel(),G=n.state;G.setBlending(yi),G.buffers.depth.getReversed()===!0?G.buffers.color.setClear(0,0,0,0):G.buffers.color.setClear(1,1,1,1),G.buffers.depth.setTest(!0),G.setScissorTest(!1);let H=_!==this.type;H&&P.traverse(function(z){z.material&&(Array.isArray(z.material)?z.material.forEach($=>$.needsUpdate=!0):z.material.needsUpdate=!0)});for(let z=0,$=E.length;z<$;z++){let J=E[z],O=J.shadow;if(O===void 0){ie("WebGLShadowMap:",J,"has no shadow.");continue}if(O.autoUpdate===!1&&O.needsUpdate===!1)continue;s.copy(O.mapSize);let Z=O.getFrameExtents();s.multiply(Z),a.copy(O.mapSize),(s.x>d||s.y>d)&&(s.x>d&&(a.x=Math.floor(d/Z.x),s.x=a.x*Z.x,O.mapSize.x=a.x),s.y>d&&(a.y=Math.floor(d/Z.y),s.y=a.y*Z.y,O.mapSize.y=a.y));let W=n.state.buffers.depth.getReversed();if(O.camera._reversedDepth=W,O.map===null||H===!0){if(O.map!==null&&(O.map.depthTexture!==null&&(O.map.depthTexture.dispose(),O.map.depthTexture=null),O.map.dispose()),this.type===pr){if(J.isPointLight){ie("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}O.map=new Rn(s.x,s.y,{format:is,type:oi,minFilter:xn,magFilter:xn,generateMipmaps:!1}),O.map.texture.name=J.name+".shadowMap",O.map.depthTexture=new Wi(s.x,s.y,ri),O.map.depthTexture.name=J.name+".shadowMapDepth",O.map.depthTexture.format=mi,O.map.depthTexture.compareFunction=null,O.map.depthTexture.minFilter=pn,O.map.depthTexture.magFilter=pn}else J.isPointLight?(O.map=new gc(s.x),O.map.depthTexture=new ll(s.x,si)):(O.map=new Rn(s.x,s.y),O.map.depthTexture=new Wi(s.x,s.y,si)),O.map.depthTexture.name=J.name+".shadowMap",O.map.depthTexture.format=mi,this.type===Ho?(O.map.depthTexture.compareFunction=W?fc:uc,O.map.depthTexture.minFilter=xn,O.map.depthTexture.magFilter=xn):(O.map.depthTexture.compareFunction=null,O.map.depthTexture.minFilter=pn,O.map.depthTexture.magFilter=pn);O.camera.updateProjectionMatrix()}O.map.isWebGLCubeRenderTarget!==!0&&(O.map.width!==s.x||O.map.height!==s.y)&&O.map.setSize(s.x,s.y);let it=O.map.isWebGLCubeRenderTarget?6:O.getViewportCount();J.isPointLight!==!0&&O.updateMatrices(J,w);for(let ot=0;ot<it;ot++){let Mt=O.getCamera(ot);if(J.isPointLight){let wt=O.camera,qt=O.matrix,Kt=J.distance||wt.far;Kt!==wt.far&&(wt.far=Kt,wt.updateProjectionMatrix()),Ko.setFromMatrixPosition(J.matrixWorld),wt.position.copy(Ko),uu.copy(wt.position),uu.add(Zv[ot]),wt.up.copy(Jv[ot]),wt.lookAt(uu),wt.updateMatrixWorld(),qt.makeTranslation(-Ko.x,-Ko.y,-Ko.z),wp.multiplyMatrices(wt.projectionMatrix,wt.matrixWorldInverse),O._frustum.setFromProjectionMatrix(wp,wt.coordinateSystem,wt.reversedDepth)}if(O.map.isWebGLCubeRenderTarget)n.setRenderTarget(O.map,ot),n.clear();else{ot===0&&(n.setRenderTarget(O.map),n.clear());let wt=O.getViewport(ot);c.set(a.x*wt.x,a.y*wt.y,a.x*wt.z,a.y*wt.w),G.viewport(c)}i=O.getFrustum(ot),S(P,w,Mt,J,this.type)}O.isPointLightShadow!==!0&&this.type===pr&&T(O,w),O.needsUpdate=!1}_=this.type,y.needsUpdate=!1,n.setRenderTarget(N,U,B)};function T(E,P){let w=t.update(b);m.defines.VSM_SAMPLES!==E.blurSamples&&(m.defines.VSM_SAMPLES=E.blurSamples,x.defines.VSM_SAMPLES=E.blurSamples,m.needsUpdate=!0,x.needsUpdate=!0),E.mapPass===null?E.mapPass=new Rn(s.x,s.y,{format:is,type:oi}):(E.mapPass.width!==E.map.width||E.mapPass.height!==E.map.height)&&E.mapPass.setSize(E.map.width,E.map.height),m.uniforms.shadow_pass.value=E.map.depthTexture,m.uniforms.resolution.value.set(E.map.width,E.map.height),m.uniforms.radius.value=E.radius,n.setRenderTarget(E.mapPass),n.clear(),n.renderBufferDirect(P,null,w,m,b,null),x.uniforms.shadow_pass.value=E.mapPass.texture,x.uniforms.resolution.value.set(E.map.width,E.map.height),x.uniforms.radius.value=E.radius,n.setRenderTarget(E.map),n.clear(),n.renderBufferDirect(P,null,w,x,b,null)}function A(E,P,w,N){let U=null,B=w.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(B!==void 0)U=B;else if(U=w.isPointLight===!0?h:o,n.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0||P.alphaToCoverage===!0){let G=U.uuid,H=P.uuid,z=f[G];z===void 0&&(z={},f[G]=z);let $=z[H];$===void 0&&($=U.clone(),z[H]=$,P.addEventListener("dispose",R)),U=$}if(U.visible=P.visible,U.wireframe=P.wireframe,N===pr?U.side=P.shadowSide!==null?P.shadowSide:P.side:U.side=P.shadowSide!==null?P.shadowSide:g[P.side],U.alphaMap=P.alphaMap,U.alphaTest=P.alphaToCoverage===!0?.5:P.alphaTest,U.map=P.map,U.clipShadows=P.clipShadows,U.clippingPlanes=P.clippingPlanes,U.clipIntersection=P.clipIntersection,U.displacementMap=P.displacementMap,U.displacementScale=P.displacementScale,U.displacementBias=P.displacementBias,U.wireframeLinewidth=P.wireframeLinewidth,U.linewidth=P.linewidth,w.isPointLight===!0&&U.isMeshDistanceMaterial===!0){let G=n.properties.get(U);G.light=w}return U}function S(E,P,w,N,U){if(E.visible===!1)return;if(E.layers.test(P.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&U===pr)&&(!E.frustumCulled||E.intersectsFrustum(i))){E.modelViewMatrix.multiplyMatrices(w.matrixWorldInverse,E.matrixWorld);let H=t.update(E),z=E.material;if(Array.isArray(z)){let $=H.groups;for(let J=0,O=$.length;J<O;J++){let Z=$[J],W=z[Z.materialIndex];if(W&&W.visible){let it=A(E,W,N,U);E.onBeforeShadow(n,E,P,w,H,it,Z),n.renderBufferDirect(w,null,H,it,E,Z),E.onAfterShadow(n,E,P,w,H,it,Z)}}}else if(z.visible){let $=A(E,z,N,U);E.onBeforeShadow(n,E,P,w,H,$,null),n.renderBufferDirect(w,null,H,$,E,null),E.onAfterShadow(n,E,P,w,H,$,null)}}let G=E.children;for(let H=0,z=G.length;H<z;H++)S(G[H],P,w,N,U)}function R(E){E.target.removeEventListener("dispose",R);for(let w in f){let N=f[w],U=E.target.uuid;U in N&&(N[U].dispose(),delete N[U])}}}function Kv(n,t){function e(){let Q=!1,Ct=new Ye,yt=null,It=new Ye(0,0,0,0);return{setMask:function(Rt){yt!==Rt&&!Q&&(n.colorMask(Rt,Rt,Rt,Rt),yt=Rt)},setLocked:function(Rt){Q=Rt},setClear:function(Rt,bt,Jt,Ht,Re){Re===!0&&(Rt*=Ht,bt*=Ht,Jt*=Ht),Ct.set(Rt,bt,Jt,Ht),It.equals(Ct)===!1&&(n.clearColor(Rt,bt,Jt,Ht),It.copy(Ct))},reset:function(){Q=!1,yt=null,It.set(-1,0,0,0)}}}function i(){let Q=!1,Ct=!1,yt=null,It=null,Rt=null;return{setReversed:function(bt){if(Ct!==bt){let Jt=t.get("EXT_clip_control");bt?Jt.clipControlEXT(Jt.LOWER_LEFT_EXT,Jt.ZERO_TO_ONE_EXT):Jt.clipControlEXT(Jt.LOWER_LEFT_EXT,Jt.NEGATIVE_ONE_TO_ONE_EXT),Ct=bt;let Ht=Rt;Rt=null,this.setClear(Ht)}},getReversed:function(){return Ct},setTest:function(bt){bt?pt(n.DEPTH_TEST):Tt(n.DEPTH_TEST)},setMask:function(bt){yt!==bt&&!Q&&(n.depthMask(bt),yt=bt)},setFunc:function(bt){if(Ct&&(bt=qd[bt]),It!==bt){switch(bt){case Wa:n.depthFunc(n.NEVER);break;case Ya:n.depthFunc(n.ALWAYS);break;case $a:n.depthFunc(n.LESS);break;case Qs:n.depthFunc(n.LEQUAL);break;case qa:n.depthFunc(n.EQUAL);break;case Za:n.depthFunc(n.GEQUAL);break;case Ja:n.depthFunc(n.GREATER);break;case ja:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}It=bt}},setLocked:function(bt){Q=bt},setClear:function(bt){Rt!==bt&&(Rt=bt,Ct&&(bt=1-bt),n.clearDepth(bt))},reset:function(){Q=!1,yt=null,It=null,Rt=null,Ct=!1}}}function s(){let Q=!1,Ct=null,yt=null,It=null,Rt=null,bt=null,Jt=null,Ht=null,Re=null;return{setTest:function(Se){Q||(Se?pt(n.STENCIL_TEST):Tt(n.STENCIL_TEST))},setMask:function(Se){Ct!==Se&&!Q&&(n.stencilMask(Se),Ct=Se)},setFunc:function(Se,yn,nn){(yt!==Se||It!==yn||Rt!==nn)&&(n.stencilFunc(Se,yn,nn),yt=Se,It=yn,Rt=nn)},setOp:function(Se,yn,nn){(bt!==Se||Jt!==yn||Ht!==nn)&&(n.stencilOp(Se,yn,nn),bt=Se,Jt=yn,Ht=nn)},setLocked:function(Se){Q=Se},setClear:function(Se){Re!==Se&&(n.clearStencil(Se),Re=Se)},reset:function(){Q=!1,Ct=null,yt=null,It=null,Rt=null,bt=null,Jt=null,Ht=null,Re=null}}}let a=new e,c=new i,o=new s,h=new WeakMap,f=new WeakMap,d={},g={},m={},x=new WeakMap,v=[],b=null,y=!1,_=null,T=null,A=null,S=null,R=null,E=null,P=null,w=new ae(0,0,0),N=0,U=!1,B=null,G=null,H=null,z=null,$=null,J=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),O=!1,Z=0,W=n.getParameter(n.VERSION);W.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(W)[1]),O=Z>=1):W.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),O=Z>=2);let it=null,ot={},Mt=n.getParameter(n.SCISSOR_BOX),wt=n.getParameter(n.VIEWPORT),qt=new Ye().fromArray(Mt),Kt=new Ye().fromArray(wt);function ne(Q,Ct,yt,It){let Rt=new Uint8Array(4),bt=n.createTexture();n.bindTexture(Q,bt),n.texParameteri(Q,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(Q,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Jt=0;Jt<yt;Jt++)Q===n.TEXTURE_3D||Q===n.TEXTURE_2D_ARRAY?n.texImage3D(Ct,0,n.RGBA,1,1,It,0,n.RGBA,n.UNSIGNED_BYTE,Rt):n.texImage2D(Ct+Jt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Rt);return bt}let ut={};ut[n.TEXTURE_2D]=ne(n.TEXTURE_2D,n.TEXTURE_2D,1),ut[n.TEXTURE_CUBE_MAP]=ne(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),ut[n.TEXTURE_2D_ARRAY]=ne(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),ut[n.TEXTURE_3D]=ne(n.TEXTURE_3D,n.TEXTURE_3D,1,1),a.setClear(0,0,0,1),c.setClear(1),o.setClear(0),pt(n.DEPTH_TEST),c.setFunc(Qs),xe(!1),Ne(Ph),pt(n.CULL_FACE),pe(yi);function pt(Q){d[Q]!==!0&&(n.enable(Q),d[Q]=!0)}function Tt(Q){d[Q]!==!1&&(n.disable(Q),d[Q]=!1)}function ee(Q,Ct){return m[Q]!==Ct?(n.bindFramebuffer(Q,Ct),m[Q]=Ct,Q===n.DRAW_FRAMEBUFFER&&(m[n.FRAMEBUFFER]=Ct),Q===n.FRAMEBUFFER&&(m[n.DRAW_FRAMEBUFFER]=Ct),!0):!1}function Nt(Q,Ct){let yt=v,It=!1;if(Q){yt=x.get(Ct),yt===void 0&&(yt=[],x.set(Ct,yt));let Rt=Q.textures;if(yt.length!==Rt.length||yt[0]!==n.COLOR_ATTACHMENT0){for(let bt=0,Jt=Rt.length;bt<Jt;bt++)yt[bt]=n.COLOR_ATTACHMENT0+bt;yt.length=Rt.length,It=!0}}else yt[0]!==n.BACK&&(yt[0]=n.BACK,It=!0);It&&n.drawBuffers(yt)}function re(Q){return b!==Q?(n.useProgram(Q),b=Q,!0):!1}let Be={[bs]:n.FUNC_ADD,[gd]:n.FUNC_SUBTRACT,[xd]:n.FUNC_REVERSE_SUBTRACT};Be[yd]=n.MIN,Be[_d]=n.MAX;let fe={[vd]:n.ZERO,[bd]:n.ONE,[Md]:n.SRC_COLOR,[Nh]:n.SRC_ALPHA,[Cd]:n.SRC_ALPHA_SATURATE,[Td]:n.DST_COLOR,[wd]:n.DST_ALPHA,[Sd]:n.ONE_MINUS_SRC_COLOR,[Dh]:n.ONE_MINUS_SRC_ALPHA,[Ad]:n.ONE_MINUS_DST_COLOR,[Ed]:n.ONE_MINUS_DST_ALPHA,[Pd]:n.CONSTANT_COLOR,[Id]:n.ONE_MINUS_CONSTANT_COLOR,[Rd]:n.CONSTANT_ALPHA,[Ld]:n.ONE_MINUS_CONSTANT_ALPHA};function pe(Q,Ct,yt,It,Rt,bt,Jt,Ht,Re,Se){if(Q===yi){y===!0&&(Tt(n.BLEND),y=!1);return}if(y===!1&&(pt(n.BLEND),y=!0),Q!==md){if(Q!==_||Se!==U){if((T!==bs||R!==bs)&&(n.blendEquation(n.FUNC_ADD),T=bs,R=bs),Se)switch(Q){case mr:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Ih:n.blendFunc(n.ONE,n.ONE);break;case Rh:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Lh:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:se("WebGLState: Invalid blending: ",Q);break}else switch(Q){case mr:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Ih:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Rh:se("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Lh:se("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:se("WebGLState: Invalid blending: ",Q);break}A=null,S=null,E=null,P=null,w.set(0,0,0),N=0,_=Q,U=Se}return}Rt=Rt||Ct,bt=bt||yt,Jt=Jt||It,(Ct!==T||Rt!==R)&&(n.blendEquationSeparate(Be[Ct],Be[Rt]),T=Ct,R=Rt),(yt!==A||It!==S||bt!==E||Jt!==P)&&(n.blendFuncSeparate(fe[yt],fe[It],fe[bt],fe[Jt]),A=yt,S=It,E=bt,P=Jt),(Ht.equals(w)===!1||Re!==N)&&(n.blendColor(Ht.r,Ht.g,Ht.b,Re),w.copy(Ht),N=Re),_=Q,U=!1}function be(Q,Ct){Q.side===wn?Tt(n.CULL_FACE):pt(n.CULL_FACE);let yt=Q.side===Pn;Ct&&(yt=!yt),xe(yt),Q.blending===mr&&Q.transparent===!1?pe(yi):pe(Q.blending,Q.blendEquation,Q.blendSrc,Q.blendDst,Q.blendEquationAlpha,Q.blendSrcAlpha,Q.blendDstAlpha,Q.blendColor,Q.blendAlpha,Q.premultipliedAlpha),c.setFunc(Q.depthFunc),c.setTest(Q.depthTest),c.setMask(Q.depthWrite),a.setMask(Q.colorWrite);let It=Q.stencilWrite;o.setTest(It),It&&(o.setMask(Q.stencilWriteMask),o.setFunc(Q.stencilFunc,Q.stencilRef,Q.stencilFuncMask),o.setOp(Q.stencilFail,Q.stencilZFail,Q.stencilZPass)),tn(Q.polygonOffset,Q.polygonOffsetFactor,Q.polygonOffsetUnits),Q.alphaToCoverage===!0?pt(n.SAMPLE_ALPHA_TO_COVERAGE):Tt(n.SAMPLE_ALPHA_TO_COVERAGE)}function xe(Q){B!==Q&&(Q?n.frontFace(n.CW):n.frontFace(n.CCW),B=Q)}function Ne(Q){Q!==fd?(pt(n.CULL_FACE),Q!==G&&(Q===Ph?n.cullFace(n.BACK):Q===dd?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Tt(n.CULL_FACE),G=Q}function Ke(Q){Q!==H&&(O&&n.lineWidth(Q),H=Q)}function tn(Q,Ct,yt){Q?(pt(n.POLYGON_OFFSET_FILL),(z!==Ct||$!==yt)&&(z=Ct,$=yt,c.getReversed()&&(Ct=-Ct),n.polygonOffset(Ct,yt))):Tt(n.POLYGON_OFFSET_FILL)}function De(Q){Q?pt(n.SCISSOR_TEST):Tt(n.SCISSOR_TEST)}function Ge(Q){Q===void 0&&(Q=n.TEXTURE0+J-1),it!==Q&&(n.activeTexture(Q),it=Q)}function tt(Q,Ct,yt){yt===void 0&&(it===null?yt=n.TEXTURE0+J-1:yt=it);let It=ot[yt];It===void 0&&(It={type:void 0,texture:void 0},ot[yt]=It),(It.type!==Q||It.texture!==Ct)&&(it!==yt&&(n.activeTexture(yt),it=yt),n.bindTexture(Q,Ct||ut[Q]),It.type=Q,It.texture=Ct)}function qe(){let Q=ot[it];Q!==void 0&&Q.type!==void 0&&(n.bindTexture(Q.type,null),Q.type=void 0,Q.texture=void 0)}function Te(){try{n.compressedTexImage2D(...arguments)}catch(Q){se("WebGLState:",Q)}}function V(){try{n.compressedTexImage3D(...arguments)}catch(Q){se("WebGLState:",Q)}}function I(){try{n.texSubImage2D(...arguments)}catch(Q){se("WebGLState:",Q)}}function st(){try{n.texSubImage3D(...arguments)}catch(Q){se("WebGLState:",Q)}}function ct(){try{n.compressedTexSubImage2D(...arguments)}catch(Q){se("WebGLState:",Q)}}function mt(){try{n.compressedTexSubImage3D(...arguments)}catch(Q){se("WebGLState:",Q)}}function Et(){try{n.texStorage2D(...arguments)}catch(Q){se("WebGLState:",Q)}}function Pt(){try{n.texStorage3D(...arguments)}catch(Q){se("WebGLState:",Q)}}function k(){try{n.texImage2D(...arguments)}catch(Q){se("WebGLState:",Q)}}function vt(){try{n.texImage3D(...arguments)}catch(Q){se("WebGLState:",Q)}}function Dt(Q){return g[Q]!==void 0?g[Q]:n.getParameter(Q)}function Vt(Q,Ct){g[Q]!==Ct&&(n.pixelStorei(Q,Ct),g[Q]=Ct)}function Ot(Q){qt.equals(Q)===!1&&(n.scissor(Q.x,Q.y,Q.z,Q.w),qt.copy(Q))}function At(Q){Kt.equals(Q)===!1&&(n.viewport(Q.x,Q.y,Q.z,Q.w),Kt.copy(Q))}function Yt(Q,Ct){let yt=f.get(Ct);yt===void 0&&(yt=new WeakMap,f.set(Ct,yt));let It=yt.get(Q);It===void 0&&(It=n.getUniformBlockIndex(Ct,Q.name),yt.set(Q,It))}function $t(Q,Ct){let It=f.get(Ct).get(Q);h.get(Ct)!==It&&(n.uniformBlockBinding(Ct,It,Q.__bindingPointIndex),h.set(Ct,It))}function le(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),c.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),d={},g={},it=null,ot={},m={},x=new WeakMap,v=[],b=null,y=!1,_=null,T=null,A=null,S=null,R=null,E=null,P=null,w=new ae(0,0,0),N=0,U=!1,B=null,G=null,H=null,z=null,$=null,qt.set(0,0,n.canvas.width,n.canvas.height),Kt.set(0,0,n.canvas.width,n.canvas.height),a.reset(),c.reset(),o.reset()}return{buffers:{color:a,depth:c,stencil:o},enable:pt,disable:Tt,bindFramebuffer:ee,drawBuffers:Nt,useProgram:re,setBlending:pe,setMaterial:be,setFlipSided:xe,setCullFace:Ne,setLineWidth:Ke,setPolygonOffset:tn,setScissorTest:De,activeTexture:Ge,bindTexture:tt,unbindTexture:qe,compressedTexImage2D:Te,compressedTexImage3D:V,texImage2D:k,texImage3D:vt,pixelStorei:Vt,getParameter:Dt,updateUBOMapping:Yt,uniformBlockBinding:$t,texStorage2D:Et,texStorage3D:Pt,texSubImage2D:I,texSubImage3D:st,compressedTexSubImage2D:ct,compressedTexSubImage3D:mt,scissor:Ot,viewport:At,reset:le}}function Qv(n,t,e,i,s,a,c){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,h=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),f=new jt,d=new WeakMap,g=new Set,m,x=new WeakMap,v=!1;try{v=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(V,I){return v?new OffscreenCanvas(V,I):xo("canvas")}function y(V,I,st){let ct=1,mt=Te(V);if((mt.width>st||mt.height>st)&&(ct=st/Math.max(mt.width,mt.height)),ct<1)if(typeof HTMLImageElement<"u"&&V instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&V instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&V instanceof ImageBitmap||typeof VideoFrame<"u"&&V instanceof VideoFrame){let Et=Math.floor(ct*mt.width),Pt=Math.floor(ct*mt.height);m===void 0&&(m=b(Et,Pt));let k=I?b(Et,Pt):m;return k.width=Et,k.height=Pt,k.getContext("2d").drawImage(V,0,0,Et,Pt),ie("WebGLRenderer: Texture has been resized from ("+mt.width+"x"+mt.height+") to ("+Et+"x"+Pt+")."),k}else return"data"in V&&ie("WebGLRenderer: Image in DataTexture is too big ("+mt.width+"x"+mt.height+")."),V;return V}function _(V){return V.generateMipmaps}function T(V){n.generateMipmap(V)}function A(V){return V.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:V.isWebGL3DRenderTarget?n.TEXTURE_3D:V.isWebGLArrayRenderTarget||V.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function S(V,I,st,ct,mt,Et=!1){if(V!==null){if(n[V]!==void 0)return n[V];ie("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+V+"'")}let Pt;ct&&(Pt=t.get("EXT_texture_norm16"),Pt||ie("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let k=I;if(I===n.RED&&(st===n.FLOAT&&(k=n.R32F),st===n.HALF_FLOAT&&(k=n.R16F),st===n.UNSIGNED_BYTE&&(k=n.R8),st===n.UNSIGNED_SHORT&&Pt&&(k=Pt.R16_EXT),st===n.SHORT&&Pt&&(k=Pt.R16_SNORM_EXT)),I===n.RED_INTEGER&&(st===n.UNSIGNED_BYTE&&(k=n.R8UI),st===n.UNSIGNED_SHORT&&(k=n.R16UI),st===n.UNSIGNED_INT&&(k=n.R32UI),st===n.BYTE&&(k=n.R8I),st===n.SHORT&&(k=n.R16I),st===n.INT&&(k=n.R32I)),I===n.RG&&(st===n.FLOAT&&(k=n.RG32F),st===n.HALF_FLOAT&&(k=n.RG16F),st===n.UNSIGNED_BYTE&&(k=n.RG8),st===n.UNSIGNED_SHORT&&Pt&&(k=Pt.RG16_EXT),st===n.SHORT&&Pt&&(k=Pt.RG16_SNORM_EXT)),I===n.RG_INTEGER&&(st===n.UNSIGNED_BYTE&&(k=n.RG8UI),st===n.UNSIGNED_SHORT&&(k=n.RG16UI),st===n.UNSIGNED_INT&&(k=n.RG32UI),st===n.BYTE&&(k=n.RG8I),st===n.SHORT&&(k=n.RG16I),st===n.INT&&(k=n.RG32I)),I===n.RGB_INTEGER&&(st===n.UNSIGNED_BYTE&&(k=n.RGB8UI),st===n.UNSIGNED_SHORT&&(k=n.RGB16UI),st===n.UNSIGNED_INT&&(k=n.RGB32UI),st===n.BYTE&&(k=n.RGB8I),st===n.SHORT&&(k=n.RGB16I),st===n.INT&&(k=n.RGB32I)),I===n.RGBA_INTEGER&&(st===n.UNSIGNED_BYTE&&(k=n.RGBA8UI),st===n.UNSIGNED_SHORT&&(k=n.RGBA16UI),st===n.UNSIGNED_INT&&(k=n.RGBA32UI),st===n.BYTE&&(k=n.RGBA8I),st===n.SHORT&&(k=n.RGBA16I),st===n.INT&&(k=n.RGBA32I)),I===n.RGB&&(st===n.UNSIGNED_SHORT&&Pt&&(k=Pt.RGB16_EXT),st===n.SHORT&&Pt&&(k=Pt.RGB16_SNORM_EXT),st===n.UNSIGNED_INT_5_9_9_9_REV&&(k=n.RGB9_E5),st===n.UNSIGNED_INT_10F_11F_11F_REV&&(k=n.R11F_G11F_B10F)),I===n.RGBA){let vt=Et?go:Ee.getTransfer(mt);st===n.FLOAT&&(k=n.RGBA32F),st===n.HALF_FLOAT&&(k=n.RGBA16F),st===n.UNSIGNED_BYTE&&(k=vt===Le?n.SRGB8_ALPHA8:n.RGBA8),st===n.UNSIGNED_SHORT&&Pt&&(k=Pt.RGBA16_EXT),st===n.SHORT&&Pt&&(k=Pt.RGBA16_SNORM_EXT),st===n.UNSIGNED_SHORT_4_4_4_4&&(k=n.RGBA4),st===n.UNSIGNED_SHORT_5_5_5_1&&(k=n.RGB5_A1)}return(k===n.R16F||k===n.R32F||k===n.RG16F||k===n.RG32F||k===n.RGBA16F||k===n.RGBA32F)&&t.get("EXT_color_buffer_float"),k}function R(V,I){let st;return V?I===null||I===si||I===xr?st=n.DEPTH24_STENCIL8:I===ri?st=n.DEPTH32F_STENCIL8:I===gr&&(st=n.DEPTH24_STENCIL8,ie("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):I===null||I===si||I===xr?st=n.DEPTH_COMPONENT24:I===ri?st=n.DEPTH_COMPONENT32F:I===gr&&(st=n.DEPTH_COMPONENT16),st}function E(V,I){return _(V)===!0||V.isFramebufferTexture&&V.minFilter!==pn&&V.minFilter!==xn?Math.log2(Math.max(I.width,I.height))+1:V.mipmaps!==void 0&&V.mipmaps.length>0?V.mipmaps.length:V.isCompressedTexture&&Array.isArray(V.image)?I.mipmaps.length:1}function P(V){let I=V.target;I.removeEventListener("dispose",P),N(I),I.isVideoTexture&&d.delete(I),I.isHTMLTexture&&g.delete(I)}function w(V){let I=V.target;I.removeEventListener("dispose",w),B(I)}function N(V){let I=i.get(V);if(I.__webglInit===void 0)return;let st=V.source,ct=x.get(st);if(ct){let mt=ct[I.__cacheKey];mt.usedTimes--,mt.usedTimes===0&&U(V),Object.keys(ct).length===0&&x.delete(st)}i.remove(V)}function U(V){let I=i.get(V);n.deleteTexture(I.__webglTexture);let st=V.source,ct=x.get(st);delete ct[I.__cacheKey],c.memory.textures--}function B(V){let I=i.get(V);if(V.depthTexture&&(V.depthTexture.dispose(),i.remove(V.depthTexture)),V.isWebGLCubeRenderTarget)for(let ct=0;ct<6;ct++){if(Array.isArray(I.__webglFramebuffer[ct]))for(let mt=0;mt<I.__webglFramebuffer[ct].length;mt++)n.deleteFramebuffer(I.__webglFramebuffer[ct][mt]);else n.deleteFramebuffer(I.__webglFramebuffer[ct]);I.__webglDepthbuffer&&n.deleteRenderbuffer(I.__webglDepthbuffer[ct])}else{if(Array.isArray(I.__webglFramebuffer))for(let ct=0;ct<I.__webglFramebuffer.length;ct++)n.deleteFramebuffer(I.__webglFramebuffer[ct]);else n.deleteFramebuffer(I.__webglFramebuffer);if(I.__webglDepthbuffer&&n.deleteRenderbuffer(I.__webglDepthbuffer),I.__webglMultisampledFramebuffer&&n.deleteFramebuffer(I.__webglMultisampledFramebuffer),I.__webglColorRenderbuffer)for(let ct=0;ct<I.__webglColorRenderbuffer.length;ct++)I.__webglColorRenderbuffer[ct]&&n.deleteRenderbuffer(I.__webglColorRenderbuffer[ct]);I.__webglDepthRenderbuffer&&n.deleteRenderbuffer(I.__webglDepthRenderbuffer)}let st=V.textures;for(let ct=0,mt=st.length;ct<mt;ct++){let Et=i.get(st[ct]);Et.__webglTexture&&(n.deleteTexture(Et.__webglTexture),c.memory.textures--),i.remove(st[ct])}i.remove(V)}let G=0;function H(){G=0}function z(){return G}function $(V){G=V}function J(){let V=G;return V>=s.maxTextures&&ie("WebGLTextures: Trying to use "+(V+1)+" texture units while this GPU supports only "+s.maxTextures),G+=1,V}function O(V){let I=[];return I.push(V.wrapS),I.push(V.wrapT),I.push(V.wrapR||0),I.push(V.magFilter),I.push(V.minFilter),I.push(V.anisotropy),I.push(V.internalFormat),I.push(V.format),I.push(V.type),I.push(V.generateMipmaps),I.push(V.premultiplyAlpha),I.push(V.flipY),I.push(V.unpackAlignment),I.push(V.colorSpace),I.join()}function Z(V,I){let st=i.get(V);if(V.isVideoTexture&&tt(V),V.isRenderTargetTexture===!1&&V.isExternalTexture!==!0&&V.version>0&&st.__version!==V.version){let ct=V.image;if(ct===null)ie("WebGLRenderer: Texture marked for update but no image data found.");else if(ct.complete===!1)ie("WebGLRenderer: Texture marked for update but image is incomplete");else{Tt(st,V,I);return}}else V.isExternalTexture&&(st.__webglTexture=V.sourceTexture?V.sourceTexture:null);e.bindTexture(n.TEXTURE_2D,st.__webglTexture,n.TEXTURE0+I)}function W(V,I){let st=i.get(V);if(V.isRenderTargetTexture===!1&&V.version>0&&st.__version!==V.version){Tt(st,V,I);return}else V.isExternalTexture&&(st.__webglTexture=V.sourceTexture?V.sourceTexture:null);e.bindTexture(n.TEXTURE_2D_ARRAY,st.__webglTexture,n.TEXTURE0+I)}function it(V,I){let st=i.get(V);if(V.isRenderTargetTexture===!1&&V.version>0&&st.__version!==V.version){Tt(st,V,I);return}e.bindTexture(n.TEXTURE_3D,st.__webglTexture,n.TEXTURE0+I)}function ot(V,I){let st=i.get(V);if(V.isCubeDepthTexture!==!0&&V.version>0&&st.__version!==V.version){ee(st,V,I);return}e.bindTexture(n.TEXTURE_CUBE_MAP,st.__webglTexture,n.TEXTURE0+I)}let Mt={[Ka]:n.REPEAT,[pi]:n.CLAMP_TO_EDGE,[Qa]:n.MIRRORED_REPEAT},wt={[pn]:n.NEAREST,[Od]:n.NEAREST_MIPMAP_NEAREST,[Xo]:n.NEAREST_MIPMAP_LINEAR,[xn]:n.LINEAR,[Al]:n.LINEAR_MIPMAP_NEAREST,[es]:n.LINEAR_MIPMAP_LINEAR},qt={[kd]:n.NEVER,[Xd]:n.ALWAYS,[zd]:n.LESS,[uc]:n.LEQUAL,[Vd]:n.EQUAL,[fc]:n.GEQUAL,[Hd]:n.GREATER,[Gd]:n.NOTEQUAL};function Kt(V,I){if(I.type===ri&&t.has("OES_texture_float_linear")===!1&&(I.magFilter===xn||I.magFilter===Al||I.magFilter===Xo||I.magFilter===es||I.minFilter===xn||I.minFilter===Al||I.minFilter===Xo||I.minFilter===es)&&ie("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(V,n.TEXTURE_WRAP_S,Mt[I.wrapS]),n.texParameteri(V,n.TEXTURE_WRAP_T,Mt[I.wrapT]),(V===n.TEXTURE_3D||V===n.TEXTURE_2D_ARRAY)&&n.texParameteri(V,n.TEXTURE_WRAP_R,Mt[I.wrapR]),n.texParameteri(V,n.TEXTURE_MAG_FILTER,wt[I.magFilter]),n.texParameteri(V,n.TEXTURE_MIN_FILTER,wt[I.minFilter]),I.compareFunction&&(n.texParameteri(V,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(V,n.TEXTURE_COMPARE_FUNC,qt[I.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(I.magFilter===pn||I.minFilter!==Xo&&I.minFilter!==es||I.type===ri&&t.has("OES_texture_float_linear")===!1)return;if(I.anisotropy>1||i.get(I).__currentAnisotropy){let st=t.get("EXT_texture_filter_anisotropic");n.texParameterf(V,st.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(I.anisotropy,s.getMaxAnisotropy())),i.get(I).__currentAnisotropy=I.anisotropy}}}function ne(V,I){let st=!1;V.__webglInit===void 0&&(V.__webglInit=!0,I.addEventListener("dispose",P));let ct=I.source,mt=x.get(ct);mt===void 0&&(mt={},x.set(ct,mt));let Et=O(I);if(Et!==V.__cacheKey){mt[Et]===void 0&&(mt[Et]={texture:n.createTexture(),usedTimes:0},c.memory.textures++,st=!0),mt[Et].usedTimes++;let Pt=mt[V.__cacheKey];Pt!==void 0&&(mt[V.__cacheKey].usedTimes--,Pt.usedTimes===0&&U(I)),V.__cacheKey=Et,V.__webglTexture=mt[Et].texture}return st}function ut(V,I,st){return Math.floor(Math.floor(V/st)/I)}function pt(V,I,st,ct){let Et=V.updateRanges;if(Et.length===0)e.texSubImage2D(n.TEXTURE_2D,0,0,0,I.width,I.height,st,ct,I.data);else{Et.sort((Vt,Ot)=>Vt.start-Ot.start);let Pt=0;for(let Vt=1;Vt<Et.length;Vt++){let Ot=Et[Pt],At=Et[Vt],Yt=Ot.start+Ot.count,$t=ut(At.start,I.width,4),le=ut(Ot.start,I.width,4);At.start<=Yt+1&&$t===le&&ut(At.start+At.count-1,I.width,4)===$t?Ot.count=Math.max(Ot.count,At.start+At.count-Ot.start):(++Pt,Et[Pt]=At)}Et.length=Pt+1;let k=e.getParameter(n.UNPACK_ROW_LENGTH),vt=e.getParameter(n.UNPACK_SKIP_PIXELS),Dt=e.getParameter(n.UNPACK_SKIP_ROWS);e.pixelStorei(n.UNPACK_ROW_LENGTH,I.width);for(let Vt=0,Ot=Et.length;Vt<Ot;Vt++){let At=Et[Vt],Yt=Math.floor(At.start/4),$t=Math.ceil(At.count/4),le=Yt%I.width,Q=Math.floor(Yt/I.width),Ct=$t,yt=1;e.pixelStorei(n.UNPACK_SKIP_PIXELS,le),e.pixelStorei(n.UNPACK_SKIP_ROWS,Q),e.texSubImage2D(n.TEXTURE_2D,0,le,Q,Ct,yt,st,ct,I.data)}V.clearUpdateRanges(),e.pixelStorei(n.UNPACK_ROW_LENGTH,k),e.pixelStorei(n.UNPACK_SKIP_PIXELS,vt),e.pixelStorei(n.UNPACK_SKIP_ROWS,Dt)}}function Tt(V,I,st){let ct=n.TEXTURE_2D;(I.isDataArrayTexture||I.isCompressedArrayTexture)&&(ct=n.TEXTURE_2D_ARRAY),I.isData3DTexture&&(ct=n.TEXTURE_3D);let mt=ne(V,I),Et=I.source;e.bindTexture(ct,V.__webglTexture,n.TEXTURE0+st);let Pt=i.get(Et);if(Et.version!==Pt.__version||mt===!0){if(e.activeTexture(n.TEXTURE0+st),(typeof ImageBitmap<"u"&&I.image instanceof ImageBitmap)===!1){let yt=Ee.getPrimaries(Ee.workingColorSpace),It=I.colorSpace===Li?null:Ee.getPrimaries(I.colorSpace),Rt=I.colorSpace===Li||yt===It?n.NONE:n.BROWSER_DEFAULT_WEBGL;e.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,I.flipY),e.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),e.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Rt)}e.pixelStorei(n.UNPACK_ALIGNMENT,I.unpackAlignment);let vt=y(I.image,!1,s.maxTextureSize);vt=qe(I,vt);let Dt=a.convert(I.format,I.colorSpace),Vt=a.convert(I.type),Ot=S(I.internalFormat,Dt,Vt,I.normalized,I.colorSpace,I.isVideoTexture);Kt(ct,I);let At,Yt=I.mipmaps,$t=I.isVideoTexture!==!0,le=Pt.__version===void 0||mt===!0,Q=Et.dataReady,Ct=E(I,vt);if(I.isDepthTexture)Ot=R(I.format===ns,I.type),le&&($t?e.texStorage2D(n.TEXTURE_2D,1,Ot,vt.width,vt.height):e.texImage2D(n.TEXTURE_2D,0,Ot,vt.width,vt.height,0,Dt,Vt,null));else if(I.isDataTexture)if(Yt.length>0){$t&&le&&e.texStorage2D(n.TEXTURE_2D,Ct,Ot,Yt[0].width,Yt[0].height);for(let yt=0,It=Yt.length;yt<It;yt++)At=Yt[yt],$t?Q&&e.texSubImage2D(n.TEXTURE_2D,yt,0,0,At.width,At.height,Dt,Vt,At.data):e.texImage2D(n.TEXTURE_2D,yt,Ot,At.width,At.height,0,Dt,Vt,At.data);I.generateMipmaps=!1}else $t?(le&&e.texStorage2D(n.TEXTURE_2D,Ct,Ot,vt.width,vt.height),Q&&pt(I,vt,Dt,Vt)):e.texImage2D(n.TEXTURE_2D,0,Ot,vt.width,vt.height,0,Dt,Vt,vt.data);else if(I.isCompressedTexture)if(I.isCompressedArrayTexture){$t&&le&&e.texStorage3D(n.TEXTURE_2D_ARRAY,Ct,Ot,Yt[0].width,Yt[0].height,vt.depth);for(let yt=0,It=Yt.length;yt<It;yt++)if(At=Yt[yt],I.format!==Yn)if(Dt!==null)if($t){if(Q)if(I.layerUpdates.size>0){let Rt=su(At.width,At.height,I.format,I.type);for(let bt of I.layerUpdates){let Jt=At.data.subarray(bt*Rt/At.data.BYTES_PER_ELEMENT,(bt+1)*Rt/At.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,yt,0,0,bt,At.width,At.height,1,Dt,Jt)}}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,yt,0,0,0,At.width,At.height,vt.depth,Dt,At.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,yt,Ot,At.width,At.height,vt.depth,0,At.data,0,0);else ie("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else $t?Q&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,yt,0,0,0,At.width,At.height,vt.depth,Dt,Vt,At.data):e.texImage3D(n.TEXTURE_2D_ARRAY,yt,Ot,At.width,At.height,vt.depth,0,Dt,Vt,At.data);I.layerUpdates.size>0&&I.clearLayerUpdates()}else{$t&&le&&e.texStorage2D(n.TEXTURE_2D,Ct,Ot,Yt[0].width,Yt[0].height);for(let yt=0,It=Yt.length;yt<It;yt++)At=Yt[yt],I.format!==Yn?Dt!==null?$t?Q&&e.compressedTexSubImage2D(n.TEXTURE_2D,yt,0,0,At.width,At.height,Dt,At.data):e.compressedTexImage2D(n.TEXTURE_2D,yt,Ot,At.width,At.height,0,At.data):ie("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):$t?Q&&e.texSubImage2D(n.TEXTURE_2D,yt,0,0,At.width,At.height,Dt,Vt,At.data):e.texImage2D(n.TEXTURE_2D,yt,Ot,At.width,At.height,0,Dt,Vt,At.data)}else if(I.isDataArrayTexture)if($t){if(le&&e.texStorage3D(n.TEXTURE_2D_ARRAY,Ct,Ot,vt.width,vt.height,vt.depth),Q)if(I.layerUpdates.size>0){let yt=su(vt.width,vt.height,I.format,I.type);for(let It of I.layerUpdates){let Rt=vt.data.subarray(It*yt/vt.data.BYTES_PER_ELEMENT,(It+1)*yt/vt.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,It,vt.width,vt.height,1,Dt,Vt,Rt)}I.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,vt.width,vt.height,vt.depth,Dt,Vt,vt.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,Ot,vt.width,vt.height,vt.depth,0,Dt,Vt,vt.data);else if(I.isData3DTexture)$t?(le&&e.texStorage3D(n.TEXTURE_3D,Ct,Ot,vt.width,vt.height,vt.depth),Q&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,vt.width,vt.height,vt.depth,Dt,Vt,vt.data)):e.texImage3D(n.TEXTURE_3D,0,Ot,vt.width,vt.height,vt.depth,0,Dt,Vt,vt.data);else if(I.isFramebufferTexture){if(le)if($t)e.texStorage2D(n.TEXTURE_2D,Ct,Ot,vt.width,vt.height);else{let yt=vt.width,It=vt.height;for(let Rt=0;Rt<Ct;Rt++)e.texImage2D(n.TEXTURE_2D,Rt,Ot,yt,It,0,Dt,Vt,null),yt>>=1,It>>=1}}else if(I.isHTMLTexture){if("texElementImage2D"in n){let yt=n.canvas;if(yt.hasAttribute("layoutsubtree")||yt.setAttribute("layoutsubtree","true"),vt.parentNode!==yt){yt.appendChild(vt),g.add(I),yt.onpaint=It=>{let Rt=It.changedElements;for(let bt of g)Rt.includes(bt.image)&&(bt.needsUpdate=!0)},yt.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,vt);else{let Rt=n.RGBA,bt=n.RGBA,Jt=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,Rt,bt,Jt,vt)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(Yt.length>0){if($t&&le){let yt=Te(Yt[0]);e.texStorage2D(n.TEXTURE_2D,Ct,Ot,yt.width,yt.height)}for(let yt=0,It=Yt.length;yt<It;yt++)At=Yt[yt],$t?Q&&e.texSubImage2D(n.TEXTURE_2D,yt,0,0,Dt,Vt,At):e.texImage2D(n.TEXTURE_2D,yt,Ot,Dt,Vt,At);I.generateMipmaps=!1}else if($t){if(le){let yt=Te(vt);e.texStorage2D(n.TEXTURE_2D,Ct,Ot,yt.width,yt.height)}Q&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,Dt,Vt,vt)}else e.texImage2D(n.TEXTURE_2D,0,Ot,Dt,Vt,vt);_(I)&&T(ct),Pt.__version=Et.version,I.onUpdate&&I.onUpdate(I)}V.__version=I.version}function ee(V,I,st){if(I.image.length!==6)return;let ct=ne(V,I),mt=I.source;e.bindTexture(n.TEXTURE_CUBE_MAP,V.__webglTexture,n.TEXTURE0+st);let Et=i.get(mt);if(mt.version!==Et.__version||ct===!0){e.activeTexture(n.TEXTURE0+st);let Pt=Ee.getPrimaries(Ee.workingColorSpace),k=I.colorSpace===Li?null:Ee.getPrimaries(I.colorSpace),vt=I.colorSpace===Li||Pt===k?n.NONE:n.BROWSER_DEFAULT_WEBGL;e.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,I.flipY),e.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),e.pixelStorei(n.UNPACK_ALIGNMENT,I.unpackAlignment),e.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,vt);let Dt=I.isCompressedTexture||I.image[0].isCompressedTexture,Vt=I.image[0]&&I.image[0].isDataTexture,Ot=[];for(let bt=0;bt<6;bt++)!Dt&&!Vt?Ot[bt]=y(I.image[bt],!0,s.maxCubemapSize):Ot[bt]=Vt?I.image[bt].image:I.image[bt],Ot[bt]=qe(I,Ot[bt]);let At=Ot[0],Yt=a.convert(I.format,I.colorSpace),$t=a.convert(I.type),le=S(I.internalFormat,Yt,$t,I.normalized,I.colorSpace),Q=I.isVideoTexture!==!0,Ct=Et.__version===void 0||ct===!0,yt=mt.dataReady,It=E(I,At);Kt(n.TEXTURE_CUBE_MAP,I);let Rt;if(Dt){Q&&Ct&&e.texStorage2D(n.TEXTURE_CUBE_MAP,It,le,At.width,At.height);for(let bt=0;bt<6;bt++){Rt=Ot[bt].mipmaps;for(let Jt=0;Jt<Rt.length;Jt++){let Ht=Rt[Jt];I.format!==Yn?Yt!==null?Q?yt&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+bt,Jt,0,0,Ht.width,Ht.height,Yt,Ht.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+bt,Jt,le,Ht.width,Ht.height,0,Ht.data):ie("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Q?yt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+bt,Jt,0,0,Ht.width,Ht.height,Yt,$t,Ht.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+bt,Jt,le,Ht.width,Ht.height,0,Yt,$t,Ht.data)}}}else{if(Rt=I.mipmaps,Q&&Ct){Rt.length>0&&It++;let bt=Te(Ot[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,It,le,bt.width,bt.height)}for(let bt=0;bt<6;bt++)if(Vt){Q?yt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+bt,0,0,0,Ot[bt].width,Ot[bt].height,Yt,$t,Ot[bt].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+bt,0,le,Ot[bt].width,Ot[bt].height,0,Yt,$t,Ot[bt].data);for(let Jt=0;Jt<Rt.length;Jt++){let Re=Rt[Jt].image[bt].image;Q?yt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+bt,Jt+1,0,0,Re.width,Re.height,Yt,$t,Re.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+bt,Jt+1,le,Re.width,Re.height,0,Yt,$t,Re.data)}}else{Q?yt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+bt,0,0,0,Yt,$t,Ot[bt]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+bt,0,le,Yt,$t,Ot[bt]);for(let Jt=0;Jt<Rt.length;Jt++){let Ht=Rt[Jt];Q?yt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+bt,Jt+1,0,0,Yt,$t,Ht.image[bt]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+bt,Jt+1,le,Yt,$t,Ht.image[bt])}}}_(I)&&T(n.TEXTURE_CUBE_MAP),Et.__version=mt.version,I.onUpdate&&I.onUpdate(I)}V.__version=I.version}function Nt(V,I,st,ct,mt,Et){let Pt=a.convert(st.format,st.colorSpace),k=a.convert(st.type),vt=S(st.internalFormat,Pt,k,st.normalized,st.colorSpace),Dt=i.get(I),Vt=i.get(st);if(Vt.__renderTarget=I,!Dt.__hasExternalTextures){let Ot=Math.max(1,I.width>>Et),At=Math.max(1,I.height>>Et);mt===n.TEXTURE_3D||mt===n.TEXTURE_2D_ARRAY?e.texImage3D(mt,Et,vt,Ot,At,I.depth,0,Pt,k,null):e.texImage2D(mt,Et,vt,Ot,At,0,Pt,k,null)}e.bindFramebuffer(n.FRAMEBUFFER,V),Ge(I)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ct,mt,Vt.__webglTexture,0,De(I)):(mt===n.TEXTURE_2D||mt>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&mt<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,ct,mt,Vt.__webglTexture,Et),e.bindFramebuffer(n.FRAMEBUFFER,null)}function re(V,I,st){if(n.bindRenderbuffer(n.RENDERBUFFER,V),I.depthBuffer){let ct=I.depthTexture,mt=ct&&ct.isDepthTexture?ct.type:null,Et=R(I.stencilBuffer,mt),Pt=I.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;Ge(I)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,De(I),Et,I.width,I.height):st?n.renderbufferStorageMultisample(n.RENDERBUFFER,De(I),Et,I.width,I.height):n.renderbufferStorage(n.RENDERBUFFER,Et,I.width,I.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Pt,n.RENDERBUFFER,V)}else{let ct=I.textures;for(let mt=0;mt<ct.length;mt++){let Et=ct[mt],Pt=a.convert(Et.format,Et.colorSpace),k=a.convert(Et.type),vt=S(Et.internalFormat,Pt,k,Et.normalized,Et.colorSpace);Ge(I)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,De(I),vt,I.width,I.height):st?n.renderbufferStorageMultisample(n.RENDERBUFFER,De(I),vt,I.width,I.height):n.renderbufferStorage(n.RENDERBUFFER,vt,I.width,I.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Be(V,I,st){let ct=I.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(n.FRAMEBUFFER,V),!(I.depthTexture&&I.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let mt=i.get(I.depthTexture);if(mt.__renderTarget=I,(!mt.__webglTexture||I.depthTexture.image.width!==I.width||I.depthTexture.image.height!==I.height)&&(I.depthTexture.image.width=I.width,I.depthTexture.image.height=I.height,I.depthTexture.needsUpdate=!0),ct){if(mt.__webglInit===void 0&&(mt.__webglInit=!0,I.depthTexture.addEventListener("dispose",P)),mt.__webglTexture===void 0){mt.__webglTexture=n.createTexture(),e.bindTexture(n.TEXTURE_CUBE_MAP,mt.__webglTexture),Kt(n.TEXTURE_CUBE_MAP,I.depthTexture);let Dt=a.convert(I.depthTexture.format),Vt=a.convert(I.depthTexture.type),Ot;I.depthTexture.format===mi?Ot=n.DEPTH_COMPONENT24:I.depthTexture.format===ns&&(Ot=n.DEPTH24_STENCIL8);for(let At=0;At<6;At++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+At,0,Ot,I.width,I.height,0,Dt,Vt,null)}}else Z(I.depthTexture,0);let Et=mt.__webglTexture,Pt=De(I),k=ct?n.TEXTURE_CUBE_MAP_POSITIVE_X+st:n.TEXTURE_2D,vt=I.depthTexture.format===ns?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(I.depthTexture.format===mi)Ge(I)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,vt,k,Et,0,Pt):n.framebufferTexture2D(n.FRAMEBUFFER,vt,k,Et,0);else if(I.depthTexture.format===ns)Ge(I)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,vt,k,Et,0,Pt):n.framebufferTexture2D(n.FRAMEBUFFER,vt,k,Et,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function fe(V){let I=i.get(V),st=V.isWebGLCubeRenderTarget===!0;if(I.__boundDepthTexture!==V.depthTexture){let ct=V.depthTexture;if(I.__depthDisposeCallback&&I.__depthDisposeCallback(),ct){let mt=()=>{delete I.__boundDepthTexture,delete I.__depthDisposeCallback,ct.removeEventListener("dispose",mt)};ct.addEventListener("dispose",mt),I.__depthDisposeCallback=mt}I.__boundDepthTexture=ct}if(V.depthTexture&&!I.__autoAllocateDepthBuffer)if(st)for(let ct=0;ct<6;ct++)Be(I.__webglFramebuffer[ct],V,ct);else{let ct=V.texture.mipmaps;ct&&ct.length>0?Be(I.__webglFramebuffer[0],V,0):Be(I.__webglFramebuffer,V,0)}else if(st){I.__webglDepthbuffer=[];for(let ct=0;ct<6;ct++)if(e.bindFramebuffer(n.FRAMEBUFFER,I.__webglFramebuffer[ct]),I.__webglDepthbuffer[ct]===void 0)I.__webglDepthbuffer[ct]=n.createRenderbuffer(),re(I.__webglDepthbuffer[ct],V,!1);else{let mt=V.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Et=I.__webglDepthbuffer[ct];n.bindRenderbuffer(n.RENDERBUFFER,Et),n.framebufferRenderbuffer(n.FRAMEBUFFER,mt,n.RENDERBUFFER,Et)}}else{let ct=V.texture.mipmaps;if(ct&&ct.length>0?e.bindFramebuffer(n.FRAMEBUFFER,I.__webglFramebuffer[0]):e.bindFramebuffer(n.FRAMEBUFFER,I.__webglFramebuffer),I.__webglDepthbuffer===void 0)I.__webglDepthbuffer=n.createRenderbuffer(),re(I.__webglDepthbuffer,V,!1);else{let mt=V.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Et=I.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,Et),n.framebufferRenderbuffer(n.FRAMEBUFFER,mt,n.RENDERBUFFER,Et)}}e.bindFramebuffer(n.FRAMEBUFFER,null)}function pe(V,I,st){let ct=i.get(V);I!==void 0&&Nt(ct.__webglFramebuffer,V,V.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),st!==void 0&&fe(V)}function be(V){let I=V.texture,st=i.get(V),ct=i.get(I);V.addEventListener("dispose",w);let mt=V.textures,Et=V.isWebGLCubeRenderTarget===!0,Pt=mt.length>1;if(Pt||(ct.__webglTexture===void 0&&(ct.__webglTexture=n.createTexture()),ct.__version=I.version,c.memory.textures++),Et){st.__webglFramebuffer=[];for(let k=0;k<6;k++)if(I.mipmaps&&I.mipmaps.length>0){st.__webglFramebuffer[k]=[];for(let vt=0;vt<I.mipmaps.length;vt++)st.__webglFramebuffer[k][vt]=n.createFramebuffer()}else st.__webglFramebuffer[k]=n.createFramebuffer()}else{if(I.mipmaps&&I.mipmaps.length>0){st.__webglFramebuffer=[];for(let k=0;k<I.mipmaps.length;k++)st.__webglFramebuffer[k]=n.createFramebuffer()}else st.__webglFramebuffer=n.createFramebuffer();if(Pt)for(let k=0,vt=mt.length;k<vt;k++){let Dt=i.get(mt[k]);Dt.__webglTexture===void 0&&(Dt.__webglTexture=n.createTexture(),c.memory.textures++)}if(V.samples>0&&Ge(V)===!1){st.__webglMultisampledFramebuffer=n.createFramebuffer(),st.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,st.__webglMultisampledFramebuffer);for(let k=0;k<mt.length;k++){let vt=mt[k];st.__webglColorRenderbuffer[k]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,st.__webglColorRenderbuffer[k]);let Dt=a.convert(vt.format,vt.colorSpace),Vt=a.convert(vt.type),Ot=S(vt.internalFormat,Dt,Vt,vt.normalized,vt.colorSpace,V.isXRRenderTarget===!0),At=De(V);n.renderbufferStorageMultisample(n.RENDERBUFFER,At,Ot,V.width,V.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+k,n.RENDERBUFFER,st.__webglColorRenderbuffer[k])}n.bindRenderbuffer(n.RENDERBUFFER,null),V.depthBuffer&&(st.__webglDepthRenderbuffer=n.createRenderbuffer(),re(st.__webglDepthRenderbuffer,V,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(Et){e.bindTexture(n.TEXTURE_CUBE_MAP,ct.__webglTexture),Kt(n.TEXTURE_CUBE_MAP,I);for(let k=0;k<6;k++)if(I.mipmaps&&I.mipmaps.length>0)for(let vt=0;vt<I.mipmaps.length;vt++)Nt(st.__webglFramebuffer[k][vt],V,I,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+k,vt);else Nt(st.__webglFramebuffer[k],V,I,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+k,0);_(I)&&T(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Pt){for(let k=0,vt=mt.length;k<vt;k++){let Dt=mt[k],Vt=i.get(Dt),Ot=n.TEXTURE_2D;(V.isWebGL3DRenderTarget||V.isWebGLArrayRenderTarget)&&(Ot=V.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(Ot,Vt.__webglTexture),Kt(Ot,Dt),Nt(st.__webglFramebuffer,V,Dt,n.COLOR_ATTACHMENT0+k,Ot,0),_(Dt)&&T(Ot)}e.unbindTexture()}else{let k=n.TEXTURE_2D;if((V.isWebGL3DRenderTarget||V.isWebGLArrayRenderTarget)&&(k=V.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(k,ct.__webglTexture),Kt(k,I),I.mipmaps&&I.mipmaps.length>0)for(let vt=0;vt<I.mipmaps.length;vt++)Nt(st.__webglFramebuffer[vt],V,I,n.COLOR_ATTACHMENT0,k,vt);else Nt(st.__webglFramebuffer,V,I,n.COLOR_ATTACHMENT0,k,0);_(I)&&T(k),e.unbindTexture()}V.depthBuffer&&fe(V)}function xe(V){let I=V.textures;for(let st=0,ct=I.length;st<ct;st++){let mt=I[st];if(_(mt)){let Et=A(V),Pt=i.get(mt).__webglTexture;e.bindTexture(Et,Pt),T(Et),e.unbindTexture()}}}let Ne=[],Ke=[];function tn(V){if(V.samples>0){if(Ge(V)===!1){let I=V.textures,st=V.width,ct=V.height,mt=n.COLOR_BUFFER_BIT,Et=V.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Pt=i.get(V),k=I.length>1;if(k)for(let Dt=0;Dt<I.length;Dt++)e.bindFramebuffer(n.FRAMEBUFFER,Pt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Dt,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,Pt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Dt,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,Pt.__webglMultisampledFramebuffer);let vt=V.texture.mipmaps;vt&&vt.length>0?e.bindFramebuffer(n.DRAW_FRAMEBUFFER,Pt.__webglFramebuffer[0]):e.bindFramebuffer(n.DRAW_FRAMEBUFFER,Pt.__webglFramebuffer);for(let Dt=0;Dt<I.length;Dt++){if(V.resolveDepthBuffer&&(V.depthBuffer&&(mt|=n.DEPTH_BUFFER_BIT),V.stencilBuffer&&V.resolveStencilBuffer&&(mt|=n.STENCIL_BUFFER_BIT)),k){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Pt.__webglColorRenderbuffer[Dt]);let Vt=i.get(I[Dt]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Vt,0)}n.blitFramebuffer(0,0,st,ct,0,0,st,ct,mt,n.NEAREST),h===!0&&(Ne.length=0,Ke.length=0,Ne.push(n.COLOR_ATTACHMENT0+Dt),V.depthBuffer&&V.storeMultisampledDepthBuffer===!1&&(Ne.push(Et),Ke.push(Et),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,Ke)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Ne))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),k)for(let Dt=0;Dt<I.length;Dt++){e.bindFramebuffer(n.FRAMEBUFFER,Pt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Dt,n.RENDERBUFFER,Pt.__webglColorRenderbuffer[Dt]);let Vt=i.get(I[Dt]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,Pt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Dt,n.TEXTURE_2D,Vt,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,Pt.__webglMultisampledFramebuffer)}else if(V.depthBuffer&&V.storeMultisampledDepthBuffer===!1&&h){let I=V.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[I])}}}function De(V){return Math.min(s.maxSamples,V.samples)}function Ge(V){let I=i.get(V);return V.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&I.__useRenderToTexture!==!1}function tt(V){let I=c.render.frame;d.get(V)!==I&&(d.set(V,I),V.update())}function qe(V,I){let st=V.colorSpace,ct=V.format,mt=V.type;return V.isCompressedTexture===!0||V.isVideoTexture===!0||st!==mo&&st!==Li&&(Ee.getTransfer(st)===Le?(ct!==Yn||mt!==Ln)&&ie("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):se("WebGLTextures: Unsupported texture color space:",st)),I}function Te(V){return typeof HTMLImageElement<"u"&&V instanceof HTMLImageElement?(f.width=V.naturalWidth||V.width,f.height=V.naturalHeight||V.height):typeof VideoFrame<"u"&&V instanceof VideoFrame?(f.width=V.displayWidth,f.height=V.displayHeight):(f.width=V.width,f.height=V.height),f}this.allocateTextureUnit=J,this.resetTextureUnits=H,this.getTextureUnits=z,this.setTextureUnits=$,this.setTexture2D=Z,this.setTexture2DArray=W,this.setTexture3D=it,this.setTextureCube=ot,this.rebindTextures=pe,this.setupRenderTarget=be,this.updateRenderTargetMipmap=xe,this.updateMultisampleRenderTarget=tn,this.setupDepthRenderbuffer=fe,this.setupFrameBufferTexture=Nt,this.useMultisampledRTT=Ge,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function tb(n,t){function e(i,s=Li){let a,c=Ee.getTransfer(s);if(i===Ln)return n.UNSIGNED_BYTE;if(i===Pl)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Il)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Yh)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===$h)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===Xh)return n.BYTE;if(i===Wh)return n.SHORT;if(i===gr)return n.UNSIGNED_SHORT;if(i===Cl)return n.INT;if(i===si)return n.UNSIGNED_INT;if(i===ri)return n.FLOAT;if(i===oi)return n.HALF_FLOAT;if(i===qh)return n.ALPHA;if(i===Zh)return n.RGB;if(i===Yn)return n.RGBA;if(i===mi)return n.DEPTH_COMPONENT;if(i===ns)return n.DEPTH_STENCIL;if(i===Jh)return n.RED;if(i===Rl)return n.RED_INTEGER;if(i===is)return n.RG;if(i===Ll)return n.RG_INTEGER;if(i===Nl)return n.RGBA_INTEGER;if(i===Wo||i===Yo||i===$o||i===qo)if(c===Le)if(a=t.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(i===Wo)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Yo)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===$o)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===qo)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=t.get("WEBGL_compressed_texture_s3tc"),a!==null){if(i===Wo)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Yo)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===$o)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===qo)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Dl||i===Ol||i===Fl||i===Ul)if(a=t.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(i===Dl)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Ol)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Fl)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Ul)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Bl||i===kl||i===zl||i===Vl||i===Hl||i===Zo||i===Gl)if(a=t.get("WEBGL_compressed_texture_etc"),a!==null){if(i===Bl||i===kl)return c===Le?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(i===zl)return c===Le?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC;if(i===Vl)return a.COMPRESSED_R11_EAC;if(i===Hl)return a.COMPRESSED_SIGNED_R11_EAC;if(i===Zo)return a.COMPRESSED_RG11_EAC;if(i===Gl)return a.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Xl||i===Wl||i===Yl||i===$l||i===ql||i===Zl||i===Jl||i===jl||i===Kl||i===Ql||i===tc||i===ec||i===nc||i===ic)if(a=t.get("WEBGL_compressed_texture_astc"),a!==null){if(i===Xl)return c===Le?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Wl)return c===Le?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Yl)return c===Le?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===$l)return c===Le?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===ql)return c===Le?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Zl)return c===Le?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Jl)return c===Le?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===jl)return c===Le?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Kl)return c===Le?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Ql)return c===Le?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===tc)return c===Le?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===ec)return c===Le?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===nc)return c===Le?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===ic)return c===Le?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===sc||i===rc||i===oc)if(a=t.get("EXT_texture_compression_bptc"),a!==null){if(i===sc)return c===Le?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===rc)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===oc)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===ac||i===lc||i===Jo||i===cc)if(a=t.get("EXT_texture_compression_rgtc"),a!==null){if(i===ac)return a.COMPRESSED_RED_RGTC1_EXT;if(i===lc)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Jo)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===cc)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===xr?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}function sb(n,t){function e(y,_){y.matrixAutoUpdate===!0&&y.updateMatrix(),_.value.copy(y.matrix)}function i(y,_){_.color.getRGB(y.fogColor.value,eu(n)),_.isFog?(y.fogNear.value=_.near,y.fogFar.value=_.far):_.isFogExp2&&(y.fogDensity.value=_.density)}function s(y,_,T,A,S){_.isNodeMaterial?_.uniformsNeedUpdate=!1:_.isMeshBasicMaterial?a(y,_):_.isMeshLambertMaterial?(a(y,_),_.envMap&&(y.envMapIntensity.value=_.envMapIntensity)):_.isMeshToonMaterial?(a(y,_),g(y,_)):_.isMeshPhongMaterial?(a(y,_),d(y,_),_.envMap&&(y.envMapIntensity.value=_.envMapIntensity)):_.isMeshStandardMaterial?(a(y,_),m(y,_),_.isMeshPhysicalMaterial&&x(y,_,S)):_.isMeshMatcapMaterial?(a(y,_),v(y,_)):_.isMeshDepthMaterial?a(y,_):_.isMeshDistanceMaterial?(a(y,_),b(y,_)):_.isMeshNormalMaterial?a(y,_):_.isLineBasicMaterial?(c(y,_),_.isLineDashedMaterial&&o(y,_)):_.isPointsMaterial?h(y,_,T,A):_.isSpriteMaterial?f(y,_):_.isShadowMaterial?(y.color.value.copy(_.color),y.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function a(y,_){y.opacity.value=_.opacity,_.color&&y.diffuse.value.copy(_.color),_.emissive&&y.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(y.map.value=_.map,e(_.map,y.mapTransform)),_.alphaMap&&(y.alphaMap.value=_.alphaMap,e(_.alphaMap,y.alphaMapTransform)),_.bumpMap&&(y.bumpMap.value=_.bumpMap,e(_.bumpMap,y.bumpMapTransform),y.bumpScale.value=_.bumpScale,_.side===Pn&&(y.bumpScale.value*=-1)),_.normalMap&&(y.normalMap.value=_.normalMap,e(_.normalMap,y.normalMapTransform),y.normalScale.value.copy(_.normalScale),_.side===Pn&&y.normalScale.value.negate()),_.displacementMap&&(y.displacementMap.value=_.displacementMap,e(_.displacementMap,y.displacementMapTransform),y.displacementScale.value=_.displacementScale,y.displacementBias.value=_.displacementBias),_.emissiveMap&&(y.emissiveMap.value=_.emissiveMap,e(_.emissiveMap,y.emissiveMapTransform)),_.specularMap&&(y.specularMap.value=_.specularMap,e(_.specularMap,y.specularMapTransform)),_.alphaTest>0&&(y.alphaTest.value=_.alphaTest);let T=t.get(_),A=T.envMap,S=T.envMapRotation;A&&(y.envMap.value=A,y.envMapRotation.value.setFromMatrix4(ib.makeRotationFromEuler(S)).transpose(),A.isCubeTexture&&A.isRenderTargetTexture===!1&&y.envMapRotation.value.premultiply(Rp),y.reflectivity.value=_.reflectivity,y.ior.value=_.ior,y.refractionRatio.value=_.refractionRatio),_.lightMap&&(y.lightMap.value=_.lightMap,y.lightMapIntensity.value=_.lightMapIntensity,e(_.lightMap,y.lightMapTransform)),_.aoMap&&(y.aoMap.value=_.aoMap,y.aoMapIntensity.value=_.aoMapIntensity,e(_.aoMap,y.aoMapTransform))}function c(y,_){y.diffuse.value.copy(_.color),y.opacity.value=_.opacity,_.map&&(y.map.value=_.map,e(_.map,y.mapTransform))}function o(y,_){y.dashSize.value=_.dashSize,y.totalSize.value=_.dashSize+_.gapSize,y.scale.value=_.scale}function h(y,_,T,A){y.diffuse.value.copy(_.color),y.opacity.value=_.opacity,y.size.value=_.size*T,y.scale.value=A*.5,_.map&&(y.map.value=_.map,e(_.map,y.uvTransform)),_.alphaMap&&(y.alphaMap.value=_.alphaMap,e(_.alphaMap,y.alphaMapTransform)),_.alphaTest>0&&(y.alphaTest.value=_.alphaTest)}function f(y,_){y.diffuse.value.copy(_.color),y.opacity.value=_.opacity,y.rotation.value=_.rotation,_.map&&(y.map.value=_.map,e(_.map,y.mapTransform)),_.alphaMap&&(y.alphaMap.value=_.alphaMap,e(_.alphaMap,y.alphaMapTransform)),_.alphaTest>0&&(y.alphaTest.value=_.alphaTest)}function d(y,_){y.specular.value.copy(_.specular),y.shininess.value=Math.max(_.shininess,1e-4)}function g(y,_){_.gradientMap&&(y.gradientMap.value=_.gradientMap)}function m(y,_){y.metalness.value=_.metalness,_.metalnessMap&&(y.metalnessMap.value=_.metalnessMap,e(_.metalnessMap,y.metalnessMapTransform)),y.roughness.value=_.roughness,_.roughnessMap&&(y.roughnessMap.value=_.roughnessMap,e(_.roughnessMap,y.roughnessMapTransform)),_.envMap&&(y.envMapIntensity.value=_.envMapIntensity)}function x(y,_,T){y.ior.value=_.ior,_.sheen>0&&(y.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),y.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(y.sheenColorMap.value=_.sheenColorMap,e(_.sheenColorMap,y.sheenColorMapTransform)),_.sheenRoughnessMap&&(y.sheenRoughnessMap.value=_.sheenRoughnessMap,e(_.sheenRoughnessMap,y.sheenRoughnessMapTransform))),_.clearcoat>0&&(y.clearcoat.value=_.clearcoat,y.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(y.clearcoatMap.value=_.clearcoatMap,e(_.clearcoatMap,y.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,e(_.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(y.clearcoatNormalMap.value=_.clearcoatNormalMap,e(_.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===Pn&&y.clearcoatNormalScale.value.negate())),_.dispersion>0&&(y.dispersion.value=_.dispersion),_.retroreflectivity>0&&(y.retroreflectivity.value=_.retroreflectivity),_.iridescence>0&&(y.iridescence.value=_.iridescence,y.iridescenceIOR.value=_.iridescenceIOR,y.iridescenceThicknessMinimum.value=_.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=_.iridescenceThicknessRange[1],_.iridescenceMap&&(y.iridescenceMap.value=_.iridescenceMap,e(_.iridescenceMap,y.iridescenceMapTransform)),_.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=_.iridescenceThicknessMap,e(_.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),_.transmission>0&&(y.transmission.value=_.transmission,y.transmissionSamplerMap.value=T.texture,y.transmissionSamplerSize.value.set(T.width,T.height),_.transmissionMap&&(y.transmissionMap.value=_.transmissionMap,e(_.transmissionMap,y.transmissionMapTransform)),y.thickness.value=_.thickness,_.thicknessMap&&(y.thicknessMap.value=_.thicknessMap,e(_.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=_.attenuationDistance,y.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(y.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(y.anisotropyMap.value=_.anisotropyMap,e(_.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=_.specularIntensity,y.specularColor.value.copy(_.specularColor),_.specularColorMap&&(y.specularColorMap.value=_.specularColorMap,e(_.specularColorMap,y.specularColorMapTransform)),_.specularIntensityMap&&(y.specularIntensityMap.value=_.specularIntensityMap,e(_.specularIntensityMap,y.specularIntensityMapTransform))}function v(y,_){_.matcap&&(y.matcap.value=_.matcap)}function b(y,_){let T=t.get(_).light;y.referencePosition.value.setFromMatrixPosition(T.matrixWorld),y.nearDistance.value=T.shadow.camera.near,y.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function rb(n,t,e,i){let s={},a={},c=[],o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function h(S,R){let E=R.program;i.uniformBlockBinding(S,E)}function f(S,R){let E=s[S.id];E===void 0&&(y(S),E=d(S),s[S.id]=E,S.addEventListener("dispose",T));let P=R.program;i.updateUBOMapping(S,P);let w=t.render.frame;a[S.id]!==w&&(m(S),a[S.id]=w)}function d(S){let R=g();S.__bindingPointIndex=R;let E=n.createBuffer(),P=S.__size,w=S.usage;return n.bindBuffer(n.UNIFORM_BUFFER,E),n.bufferData(n.UNIFORM_BUFFER,P,w),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,R,E),E}function g(){for(let S=0;S<o;S++)if(c.indexOf(S)===-1)return c.push(S),S;return se("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function m(S){let R=s[S.id],E=S.uniforms,P=S.__cache;n.bindBuffer(n.UNIFORM_BUFFER,R);for(let w=0,N=E.length;w<N;w++){let U=E[w];if(Array.isArray(U))for(let B=0,G=U.length;B<G;B++)x(U[B],w,B,P);else x(U,w,0,P)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function x(S,R,E,P){if(b(S,R,E,P)===!0){let w=S.__offset,N=S.value;if(Array.isArray(N)){let U=0;for(let B=0;B<N.length;B++){let G=N[B],H=_(G);v(G,S.__data,U),typeof G!="number"&&typeof G!="boolean"&&!G.isMatrix3&&!ArrayBuffer.isView(G)&&(U+=H.storage/Float32Array.BYTES_PER_ELEMENT)}}else v(N,S.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,w,S.__data)}}function v(S,R,E){typeof S=="number"||typeof S=="boolean"?R[0]=S:S.isMatrix3?(R[0]=S.elements[0],R[1]=S.elements[1],R[2]=S.elements[2],R[3]=0,R[4]=S.elements[3],R[5]=S.elements[4],R[6]=S.elements[5],R[7]=0,R[8]=S.elements[6],R[9]=S.elements[7],R[10]=S.elements[8],R[11]=0):ArrayBuffer.isView(S)?R.set(new S.constructor(S.buffer,S.byteOffset,R.length)):S.toArray(R,E)}function b(S,R,E,P){let w=S.value,N=R+"_"+E;if(P[N]===void 0)return typeof w=="number"||typeof w=="boolean"?P[N]=w:ArrayBuffer.isView(w)?P[N]=w.slice():P[N]=w.clone(),!0;{let U=P[N];if(typeof w=="number"||typeof w=="boolean"){if(U!==w)return P[N]=w,!0}else{if(ArrayBuffer.isView(w))return!0;if(U.equals(w)===!1)return U.copy(w),!0}}return!1}function y(S){let R=S.uniforms,E=0,P=16;for(let N=0,U=R.length;N<U;N++){let B=Array.isArray(R[N])?R[N]:[R[N]];for(let G=0,H=B.length;G<H;G++){let z=B[G],$=Array.isArray(z.value)?z.value:[z.value];for(let J=0,O=$.length;J<O;J++){let Z=$[J],W=_(Z),it=E%P,ot=it%W.boundary,Mt=it+ot;E+=ot,Mt!==0&&P-Mt<W.storage&&(E+=P-Mt),z.__data=new Float32Array(W.storage/Float32Array.BYTES_PER_ELEMENT),z.__offset=E,E+=W.storage}}}let w=E%P;return w>0&&(E+=P-w),S.__size=E,S.__cache={},this}function _(S){let R={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(R.boundary=4,R.storage=4):S.isVector2?(R.boundary=8,R.storage=8):S.isVector3||S.isColor?(R.boundary=16,R.storage=12):S.isVector4?(R.boundary=16,R.storage=16):S.isMatrix3?(R.boundary=48,R.storage=48):S.isMatrix4?(R.boundary=64,R.storage=64):S.isTexture?ie("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(S)?(R.boundary=16,R.storage=S.byteLength):ie("WebGLRenderer: Unsupported uniform value type.",S),R}function T(S){let R=S.target;R.removeEventListener("dispose",T);let E=c.indexOf(R.__bindingPointIndex);c.splice(E,1),n.deleteBuffer(s[R.id]),delete s[R.id],delete a[R.id]}function A(){for(let S in s)n.deleteBuffer(s[S]);c=[],s={},a={}}return{bind:h,update:f,dispose:A}}function ab(){return _i===null&&(_i=new rl(ob,16,16,is,oi),_i.name="DFG_LUT",_i.minFilter=xn,_i.magFilter=xn,_i.wrapS=pi,_i.wrapT=pi,_i.generateMipmaps=!1,_i.needsUpdate=!0),_i}var vg,bg,Mg,Sg,wg,Eg,Tg,Ag,Cg,Pg,Ig,Rg,Lg,Ng,Dg,Og,Fg,Ug,Bg,kg,zg,Vg,Hg,Gg,Xg,Wg,Yg,$g,qg,Zg,Jg,jg,Kg,Qg,tx,ex,nx,ix,sx,rx,ox,ax,lx,cx,hx,ux,fx,dx,px,mx,gx,xx,yx,_x,vx,bx,Mx,Sx,wx,Ex,Tx,Ax,Cx,Px,Ix,Rx,Lx,Nx,Dx,Ox,Fx,Ux,Bx,kx,zx,Vx,Hx,Gx,Xx,Wx,Yx,$x,qx,Zx,Jx,jx,Kx,Qx,ty,ey,ny,iy,sy,ry,oy,ay,ly,cy,hy,uy,fy,dy,py,my,gy,xy,yy,_y,vy,by,My,Sy,wy,Ey,Ty,Ay,Cy,Py,Iy,Ry,Ly,Ny,Dy,Oy,Fy,Uy,By,ky,zy,Vy,Hy,Gy,Xy,Wy,Yy,$y,qy,Zy,Jy,jy,Ky,Qy,me,kt,vi,dc,t_,Tp,_r,o_,a_,l_,jo,sp,ou,au,lu,cu,c_,Es,mc,gc,v_,Ap,fu,Cp,Pp,Ip,lp,cp,hp,up,fp,du,pu,mu,hu,vr,cv,hv,mp,pv,pc,vv,bv,Sv,Ev,Av,Pv,Rv,Ov,xu,yu,Gv,$v,qv,Zv,Jv,wp,Ko,uu,eb,nb,_u,vu,ib,Rp,ob,_i,xc,ta=de(()=>{ru();ru();vg=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,bg=`#ifdef USE_ALPHAHASH
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
#endif`,Mg=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Sg=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,wg=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Eg=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Tg=`#ifdef USE_AOMAP
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
#endif`,Ag=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Cg=`#ifdef USE_BATCHING
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
#endif`,Pg=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Ig=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Rg=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Lg=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Ng=`#ifdef USE_IRIDESCENCE
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
#endif`,Dg=`#ifdef USE_BUMPMAP
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
#endif`,Og=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Fg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Ug=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Bg=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,kg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,zg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Vg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Hg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Gg=`#define PI 3.141592653589793
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
} // validated`,Xg=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Wg=`vec3 transformedNormal = objectNormal;
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
#endif`,Yg=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,$g=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,qg=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Zg=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Jg="gl_FragColor = linearToOutputTexel( gl_FragColor );",jg=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Kg=`#ifdef USE_ENVMAP
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
#endif`,Qg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,tx=`#ifdef USE_ENVMAP
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
#endif`,ex=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,nx=`#ifdef USE_ENVMAP
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
#endif`,ix=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,sx=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,rx=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ox=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ax=`#ifdef USE_GRADIENTMAP
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
}`,lx=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,cx=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,hx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,ux=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,fx=`#ifdef USE_ENVMAP
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
#endif`,dx=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,px=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,mx=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,gx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,xx=`PhysicalMaterial material;
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
#endif`,yx=`uniform sampler2D dfgLUT;
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
}`,_x=`
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
#endif`,vx=`#if defined( RE_IndirectDiffuse )
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
#endif`,bx=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Mx=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,Sx=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,wx=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ex=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Tx=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Ax=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Cx=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Px=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Ix=`#if defined( USE_POINTS_UV )
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
#endif`,Rx=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Lx=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Nx=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Dx=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Ox=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Fx=`#ifdef USE_MORPHTARGETS
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
#endif`,Ux=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Bx=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,kx=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,zx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Vx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Hx=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Gx=`#ifdef USE_NORMALMAP
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
#endif`,Xx=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Wx=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Yx=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,$x=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,qx=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Zx=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Jx=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,jx=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Kx=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Qx=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,ty=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ey=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ny=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,iy=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,sy=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,ry=`float getShadowMask() {
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
}`,oy=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,ay=`#ifdef USE_SKINNING
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
#endif`,ly=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,cy=`#ifdef USE_SKINNING
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
#endif`,hy=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,uy=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,fy=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,dy=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,py=`#ifdef USE_TRANSMISSION
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
#endif`,my=`#ifdef USE_TRANSMISSION
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
#endif`,gy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,xy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,yy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,_y=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,vy=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,by=`uniform sampler2D t2D;
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
}`,My=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Sy=`#ifdef ENVMAP_TYPE_CUBE
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
}`,wy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ey=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ty=`#include <common>
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
}`,Ay=`#if DEPTH_PACKING == 3200
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
}`,Cy=`#define DISTANCE
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
}`,Py=`#define DISTANCE
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
}`,Iy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Ry=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ly=`uniform float scale;
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
}`,Ny=`uniform vec3 diffuse;
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
}`,Dy=`#include <common>
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
}`,Oy=`uniform vec3 diffuse;
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
}`,Fy=`#define LAMBERT
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
}`,Uy=`#define LAMBERT
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
}`,By=`#define MATCAP
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
}`,ky=`#define MATCAP
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
}`,zy=`#define NORMAL
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
}`,Vy=`#define NORMAL
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
}`,Hy=`#define PHONG
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
}`,Gy=`#define PHONG
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
}`,Xy=`#define STANDARD
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
}`,Wy=`#define STANDARD
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
}`,Yy=`#define TOON
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
}`,$y=`#define TOON
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
}`,qy=`uniform float size;
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
}`,Zy=`uniform vec3 diffuse;
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
}`,Jy=`#include <common>
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
}`,jy=`uniform vec3 color;
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
}`,Ky=`uniform float rotation;
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
}`,Qy=`uniform vec3 diffuse;
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
}`,me={alphahash_fragment:vg,alphahash_pars_fragment:bg,alphamap_fragment:Mg,alphamap_pars_fragment:Sg,alphatest_fragment:wg,alphatest_pars_fragment:Eg,aomap_fragment:Tg,aomap_pars_fragment:Ag,batching_pars_vertex:Cg,batching_vertex:Pg,begin_vertex:Ig,beginnormal_vertex:Rg,bsdfs:Lg,iridescence_fragment:Ng,bumpmap_pars_fragment:Dg,clipping_planes_fragment:Og,clipping_planes_pars_fragment:Fg,clipping_planes_pars_vertex:Ug,clipping_planes_vertex:Bg,color_fragment:kg,color_pars_fragment:zg,color_pars_vertex:Vg,color_vertex:Hg,common:Gg,cube_uv_reflection_fragment:Xg,defaultnormal_vertex:Wg,displacementmap_pars_vertex:Yg,displacementmap_vertex:$g,emissivemap_fragment:qg,emissivemap_pars_fragment:Zg,colorspace_fragment:Jg,colorspace_pars_fragment:jg,envmap_fragment:Kg,envmap_common_pars_fragment:Qg,envmap_pars_fragment:tx,envmap_pars_vertex:ex,envmap_physical_pars_fragment:fx,envmap_vertex:nx,fog_vertex:ix,fog_pars_vertex:sx,fog_fragment:rx,fog_pars_fragment:ox,gradientmap_pars_fragment:ax,lightmap_pars_fragment:lx,lights_lambert_fragment:cx,lights_lambert_pars_fragment:hx,lights_pars_begin:ux,lights_toon_fragment:dx,lights_toon_pars_fragment:px,lights_phong_fragment:mx,lights_phong_pars_fragment:gx,lights_physical_fragment:xx,lights_physical_pars_fragment:yx,lights_fragment_begin:_x,lights_fragment_maps:vx,lights_fragment_end:bx,lightprobes_pars_fragment:Mx,logdepthbuf_fragment:Sx,logdepthbuf_pars_fragment:wx,logdepthbuf_pars_vertex:Ex,logdepthbuf_vertex:Tx,map_fragment:Ax,map_pars_fragment:Cx,map_particle_fragment:Px,map_particle_pars_fragment:Ix,metalnessmap_fragment:Rx,metalnessmap_pars_fragment:Lx,morphinstance_vertex:Nx,morphcolor_vertex:Dx,morphnormal_vertex:Ox,morphtarget_pars_vertex:Fx,morphtarget_vertex:Ux,normal_fragment_begin:Bx,normal_fragment_maps:kx,normal_pars_fragment:zx,normal_pars_vertex:Vx,normal_vertex:Hx,normalmap_pars_fragment:Gx,clearcoat_normal_fragment_begin:Xx,clearcoat_normal_fragment_maps:Wx,clearcoat_pars_fragment:Yx,iridescence_pars_fragment:$x,opaque_fragment:qx,packing:Zx,premultiplied_alpha_fragment:Jx,project_vertex:jx,dithering_fragment:Kx,dithering_pars_fragment:Qx,roughnessmap_fragment:ty,roughnessmap_pars_fragment:ey,shadowmap_pars_fragment:ny,shadowmap_pars_vertex:iy,shadowmap_vertex:sy,shadowmask_pars_fragment:ry,skinbase_vertex:oy,skinning_pars_vertex:ay,skinning_vertex:ly,skinnormal_vertex:cy,specularmap_fragment:hy,specularmap_pars_fragment:uy,tonemapping_fragment:fy,tonemapping_pars_fragment:dy,transmission_fragment:py,transmission_pars_fragment:my,uv_pars_fragment:gy,uv_pars_vertex:xy,uv_vertex:yy,worldpos_vertex:_y,background_vert:vy,background_frag:by,backgroundCube_vert:My,backgroundCube_frag:Sy,cube_vert:wy,cube_frag:Ey,depth_vert:Ty,depth_frag:Ay,distance_vert:Cy,distance_frag:Py,equirect_vert:Iy,equirect_frag:Ry,linedashed_vert:Ly,linedashed_frag:Ny,meshbasic_vert:Dy,meshbasic_frag:Oy,meshlambert_vert:Fy,meshlambert_frag:Uy,meshmatcap_vert:By,meshmatcap_frag:ky,meshnormal_vert:zy,meshnormal_frag:Vy,meshphong_vert:Hy,meshphong_frag:Gy,meshphysical_vert:Xy,meshphysical_frag:Wy,meshtoon_vert:Yy,meshtoon_frag:$y,points_vert:qy,points_frag:Zy,shadow_vert:Jy,shadow_frag:jy,sprite_vert:Ky,sprite_frag:Qy},kt={common:{diffuse:{value:new ae(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ue},alphaMap:{value:null},alphaMapTransform:{value:new ue},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ue}},envmap:{envMap:{value:null},envMapRotation:{value:new ue},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ue}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ue}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ue},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ue},normalScale:{value:new jt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ue},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ue}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ue}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ue}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ae(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new K},probesMax:{value:new K},probesResolution:{value:new K}},points:{diffuse:{value:new ae(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ue},alphaTest:{value:0},uvTransform:{value:new ue}},sprite:{diffuse:{value:new ae(16777215)},opacity:{value:1},center:{value:new jt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ue},alphaMap:{value:null},alphaMapTransform:{value:new ue},alphaTest:{value:0}}},vi={basic:{uniforms:En([kt.common,kt.specularmap,kt.envmap,kt.aomap,kt.lightmap,kt.fog]),vertexShader:me.meshbasic_vert,fragmentShader:me.meshbasic_frag},lambert:{uniforms:En([kt.common,kt.specularmap,kt.envmap,kt.aomap,kt.lightmap,kt.emissivemap,kt.bumpmap,kt.normalmap,kt.displacementmap,kt.fog,kt.lights,{emissive:{value:new ae(0)},envMapIntensity:{value:1}}]),vertexShader:me.meshlambert_vert,fragmentShader:me.meshlambert_frag},phong:{uniforms:En([kt.common,kt.specularmap,kt.envmap,kt.aomap,kt.lightmap,kt.emissivemap,kt.bumpmap,kt.normalmap,kt.displacementmap,kt.fog,kt.lights,{emissive:{value:new ae(0)},specular:{value:new ae(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:me.meshphong_vert,fragmentShader:me.meshphong_frag},standard:{uniforms:En([kt.common,kt.envmap,kt.aomap,kt.lightmap,kt.emissivemap,kt.bumpmap,kt.normalmap,kt.displacementmap,kt.roughnessmap,kt.metalnessmap,kt.fog,kt.lights,{emissive:{value:new ae(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:me.meshphysical_vert,fragmentShader:me.meshphysical_frag},toon:{uniforms:En([kt.common,kt.aomap,kt.lightmap,kt.emissivemap,kt.bumpmap,kt.normalmap,kt.displacementmap,kt.gradientmap,kt.fog,kt.lights,{emissive:{value:new ae(0)}}]),vertexShader:me.meshtoon_vert,fragmentShader:me.meshtoon_frag},matcap:{uniforms:En([kt.common,kt.bumpmap,kt.normalmap,kt.displacementmap,kt.fog,{matcap:{value:null}}]),vertexShader:me.meshmatcap_vert,fragmentShader:me.meshmatcap_frag},points:{uniforms:En([kt.points,kt.fog]),vertexShader:me.points_vert,fragmentShader:me.points_frag},dashed:{uniforms:En([kt.common,kt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:me.linedashed_vert,fragmentShader:me.linedashed_frag},depth:{uniforms:En([kt.common,kt.displacementmap]),vertexShader:me.depth_vert,fragmentShader:me.depth_frag},normal:{uniforms:En([kt.common,kt.bumpmap,kt.normalmap,kt.displacementmap,{opacity:{value:1}}]),vertexShader:me.meshnormal_vert,fragmentShader:me.meshnormal_frag},sprite:{uniforms:En([kt.sprite,kt.fog]),vertexShader:me.sprite_vert,fragmentShader:me.sprite_frag},background:{uniforms:{uvTransform:{value:new ue},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:me.background_vert,fragmentShader:me.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ue}},vertexShader:me.backgroundCube_vert,fragmentShader:me.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:me.cube_vert,fragmentShader:me.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:me.equirect_vert,fragmentShader:me.equirect_frag},distance:{uniforms:En([kt.common,kt.displacementmap,{referencePosition:{value:new K},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:me.distance_vert,fragmentShader:me.distance_frag},shadow:{uniforms:En([kt.lights,kt.fog,{color:{value:new ae(0)},opacity:{value:1}}]),vertexShader:me.shadow_vert,fragmentShader:me.shadow_frag}};vi.physical={uniforms:En([vi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ue},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ue},clearcoatNormalScale:{value:new jt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ue},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ue},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ue},sheen:{value:0},sheenColor:{value:new ae(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ue},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ue},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ue},transmissionSamplerSize:{value:new jt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ue},attenuationDistance:{value:0},attenuationColor:{value:new ae(0)},specularColor:{value:new ae(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ue},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ue},anisotropyVector:{value:new jt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ue}}]),vertexShader:me.meshphysical_vert,fragmentShader:me.meshphysical_frag};dc={r:0,b:0,g:0},t_=new Fe,Tp=new ue;Tp.set(-1,0,0,0,1,0,0,0,1);_r=4,o_=6,a_=20,l_=256,jo=new ur,sp=new ae,ou=null,au=0,lu=0,cu=!1,c_=new K,Es=new K,mc=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,i=.1,s=100,a={}){let{size:c=256,position:o=c_}=a;ou=this._renderer.getRenderTarget(),au=this._renderer.getActiveCubeFace(),lu=this._renderer.getActiveMipmapLevel(),cu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(c);let h=this._allocateTargets();return h.depthBuffer=!0,this._sceneToCubeUV(t,i,s,h,o),e>0&&this._blur(h,0,0,e),this._applyPMREM(h),this._cleanup(h),h}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ap(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=op(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(ou,au,lu),this._renderer.xr.enabled=cu,t.scissorTest=!1,yr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===ts||t.mapping===Ms?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),ou=this._renderer.getRenderTarget(),au=this._renderer.getActiveCubeFace(),lu=this._renderer.getActiveMipmapLevel(),cu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:xn,minFilter:xn,generateMipmaps:!1,type:oi,format:Yn,colorSpace:mo,depthBuffer:!1},s=rp(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=rp(t,e,i);let{_lodMax:a}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=h_(a)),this._blurMaterial=f_(a,t,e),this._ggxMaterial=u_(a,t,e)}return s}_compileMaterial(t){let e=new Pe(new We,t);this._renderer.compile(e,jo)}_sceneToCubeUV(t,e,i,s,a){let h=new Sn(90,1,e,i),f=[1,-1,1,1,1,1],d=[1,1,1,-1,-1,-1],g=this._renderer,m=g.autoClear,x=g.toneMapping;g.getClearColor(sp),g.toneMapping=ii,g.autoClear=!1,g.state.buffers.depth.getReversed()&&(g.setRenderTarget(s),g.clearDepth(),g.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Pe(new Yi,new Bn({name:"PMREM.Background",side:Pn,depthWrite:!1,depthTest:!1})));let b=this._backgroundBox,y=b.material,_=!1,T=t.background;T?T.isColor&&(y.color.copy(T),t.background=null,_=!0):(y.color.copy(sp),_=!0);for(let A=0;A<6;A++){let S=A%3;S===0?(h.up.set(0,f[A],0),h.position.set(a.x,a.y,a.z),h.lookAt(a.x+d[A],a.y,a.z)):S===1?(h.up.set(0,0,f[A]),h.position.set(a.x,a.y,a.z),h.lookAt(a.x,a.y+d[A],a.z)):(h.up.set(0,f[A],0),h.position.set(a.x,a.y,a.z),h.lookAt(a.x,a.y,a.z+d[A]));let R=this._cubeSize;yr(s,S*R,A>2?R:0,R,R),g.setRenderTarget(s),_&&g.render(b,h),g.render(t,h)}g.toneMapping=x,g.autoClear=m,t.background=T}_textureToCubeUV(t,e){let i=this._renderer,s=t.mapping===ts||t.mapping===Ms;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=ap()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=op());let a=s?this._cubemapMaterial:this._equirectMaterial,c=this._lodMeshes[0];c.material=a;let o=a.uniforms;o.envMap.value=t;let h=this._cubeSize;yr(e,0,0,3*h,2*h),i.setRenderTarget(e),i.render(c,jo)}_applyPMREM(t){let e=this._renderer,i=e.autoClear;e.autoClear=!1;let s=this._lodMeshes.length;for(let a=1;a<s;a++)this._applyGGXFilter(t,a-1,a);e.autoClear=i}_applyGGXFilter(t,e,i){let s=this._renderer,a=this._pingPongRenderTarget,c=this._ggxMaterial,o=this._lodMeshes[i];o.material=c;let h=c.uniforms,f=i/(this._lodMeshes.length-1),d=e/(this._lodMeshes.length-1),g=Math.sqrt(f*f-d*d),m=f*1.25,x=g*m,{_lodMax:v}=this,b=this._sizeLods[i],y=3*b*(i>v-_r?i-v+_r:0),_=4*(this._cubeSize-b);h.envMap.value=t.texture,h.roughness.value=x,h.mipInt.value=v-e,yr(a,y,_,3*b,2*b),s.setRenderTarget(a),s.render(o,jo),h.envMap.value=a.texture,h.roughness.value=0,h.mipInt.value=v-i,yr(t,y,_,3*b,2*b),s.setRenderTarget(t),s.render(o,jo)}_blur(t,e,i,s){let a=this._pingPongRenderTarget,c=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(t,a,e,i,c),this._blurPass(a,t,i,i,c)}_blurPass(t,e,i,s,a){let c=this._renderer,o=this._blurMaterial,h=this._lodMeshes[s];h.material=o;let f=o.uniforms;f.envMap.value=t.texture,f.sigma.value=a,f.mipInt.value=this._lodMax-i;let d=this._sizeLods[s],g=3*d*(s>this._lodMax-_r?s-this._lodMax+_r:0),m=4*(this._cubeSize-d);yr(e,g,m,3*d,2*d),c.setRenderTarget(e),c.render(h,jo)}};gc=class extends Rn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new Eo(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Yi(5,5,5),a=new kn({name:"CubemapFromEquirect",uniforms:ws(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Pn,blending:yi});a.uniforms.tEquirect.value=e;let c=new Pe(s,a),o=e.minFilter;return e.minFilter===es&&(e.minFilter=xn),new Sl(1,10,this).update(t,c),e.minFilter=o,c.geometry.dispose(),c.material.dispose(),this}clear(t,e=!0,i=!0,s=!0){let a=t.getRenderTarget();for(let c=0;c<6;c++)t.setRenderTarget(this,c),t.clear(e,i,s);t.setRenderTarget(a)}};v_={[Fh]:"LINEAR_TONE_MAPPING",[Uh]:"REINHARD_TONE_MAPPING",[Bh]:"CINEON_TONE_MAPPING",[kh]:"ACES_FILMIC_TONE_MAPPING",[Vh]:"AGX_TONE_MAPPING",[Hh]:"NEUTRAL_TONE_MAPPING",[zh]:"CUSTOM_TONE_MAPPING"};Ap=new Cn,fu=new Wi(1,1),Cp=new _o,Pp=new il,Ip=new Eo,lp=[],cp=[],hp=new Float32Array(16),up=new Float32Array(9),fp=new Float32Array(4);du=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=V_(e.type)}},pu=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=av(e.type)}},mu=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){let s=this.seq;for(let a=0,c=s.length;a!==c;++a){let o=s[a];o.setValue(t,e[o.id],i)}}},hu=/(\w+)(\])?(\[|\.)?/g;vr=class{constructor(t,e){this.seq=[],this.map={};let i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let c=0;c<i;++c){let o=t.getActiveUniform(e,c),h=t.getUniformLocation(e,o.name);lv(o,h,this)}let s=[],a=[];for(let c of this.seq)c.type===t.SAMPLER_2D_SHADOW||c.type===t.SAMPLER_CUBE_SHADOW||c.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(c):a.push(c);s.length>0&&(this.seq=s.concat(a))}setValue(t,e,i,s){let a=this.map[e];a!==void 0&&a.setValue(t,i,s)}setOptional(t,e,i){let s=e[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,e,i,s){for(let a=0,c=e.length;a!==c;++a){let o=e[a],h=i[o.id];h.needsUpdate!==!1&&o.setValue(t,h.value,s)}}static seqWithValue(t,e){let i=[];for(let s=0,a=t.length;s!==a;++s){let c=t[s];c.id in e&&i.push(c)}return i}};cv=37297,hv=0;mp=new ue;pv={[Fh]:"Linear",[Uh]:"Reinhard",[Bh]:"Cineon",[kh]:"ACESFilmic",[Vh]:"AgX",[Hh]:"Neutral",[zh]:"Custom"};pc=new K;vv=/^[ \t]*#include +<([\w\d./]+)>/gm;bv=new Map;Sv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;Ev={[Ho]:"SHADOWMAP_TYPE_PCF",[pr]:"SHADOWMAP_TYPE_VSM"};Av={[ts]:"ENVMAP_TYPE_CUBE",[Ms]:"ENVMAP_TYPE_CUBE",[Go]:"ENVMAP_TYPE_CUBE_UV"};Pv={[Ms]:"ENVMAP_MODE_REFRACTION"};Rv={[Oh]:"ENVMAP_BLENDING_MULTIPLY",[Nd]:"ENVMAP_BLENDING_MIX",[Dd]:"ENVMAP_BLENDING_ADD"};Ov=0,xu=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,i){let s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(i)===!1&&(s.add(i),i.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){let e=this.shaderCache,i=e.get(t);return i===void 0&&(i=new yu(t),e.set(t,i)),i}},yu=class{constructor(t){this.id=Ov++,this.code=t,this.usedTimes=0}};Gv=0;$v=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,qv=`uniform sampler2D shadow_pass;
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
}`,Zv=[new K(1,0,0),new K(-1,0,0),new K(0,1,0),new K(0,-1,0),new K(0,0,1),new K(0,0,-1)],Jv=[new K(0,-1,0),new K(0,-1,0),new K(0,0,1),new K(0,0,-1),new K(0,-1,0),new K(0,-1,0)],wp=new Fe,Ko=new K,uu=new K;eb=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,nb=`
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

}`,_u=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let i=new Ao(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,i=new kn({vertexShader:eb,fragmentShader:nb,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Pe(new Lo(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},vu=class extends ei{constructor(t,e){super();let i=this,s=null,a=1,c=null,o="local-floor",h=1,f=null,d=null,g=null,m=null,x=null,v=null,b=typeof XRWebGLBinding<"u",y=new _u,_={},T=e.getContextAttributes(),A=null,S=null,R=[],E=[],P=new jt,w=null,N=null,U=new Sn;U.viewport=new Ye;let B=new Sn;B.viewport=new Ye;let G=[U,B],H=new wl,z=null,$=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ut){let pt=R[ut];return pt===void 0&&(pt=new rr,R[ut]=pt),pt.getTargetRaySpace()},this.getControllerGrip=function(ut){let pt=R[ut];return pt===void 0&&(pt=new rr,R[ut]=pt),pt.getGripSpace()},this.getHand=function(ut){let pt=R[ut];return pt===void 0&&(pt=new rr,R[ut]=pt),pt.getHandSpace()};function J(ut){let pt=E.indexOf(ut.inputSource);if(pt===-1)return;let Tt=R[pt];Tt!==void 0&&(Tt.update(ut.inputSource,ut.frame,f||c),Tt.dispatchEvent({type:ut.type,data:ut.inputSource}))}function O(){s.removeEventListener("select",J),s.removeEventListener("selectstart",J),s.removeEventListener("selectend",J),s.removeEventListener("squeeze",J),s.removeEventListener("squeezestart",J),s.removeEventListener("squeezeend",J),s.removeEventListener("end",O),s.removeEventListener("inputsourceschange",Z);for(let ut=0;ut<R.length;ut++){let pt=E[ut];pt!==null&&(E[ut]=null,R[ut].disconnect(pt))}z=null,$=null,y.reset();for(let ut in _)delete _[ut];if(t.setRenderTarget(A),x=null,m=null,g=null,s=null,S=null,ne.stop(),i.isPresenting=!1,t.setPixelRatio(w),t.setSize(P.width,P.height,!1),N!==null){let ut=N.camera;ut.fov=N.fov,ut.zoom=N.zoom,ut.updateProjectionMatrix(),N=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ut){a=ut,i.isPresenting===!0&&ie("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ut){o=ut,i.isPresenting===!0&&ie("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return f||c},this.setReferenceSpace=function(ut){f=ut},this.getBaseLayer=function(){return m!==null?m:x},this.getBinding=function(){return g===null&&b&&(g=new XRWebGLBinding(s,e)),g},this.getFrame=function(){return v},this.getSession=function(){return s},this.setSession=async function(ut){if(s=ut,s!==null){if(A=t.getRenderTarget(),s.addEventListener("select",J),s.addEventListener("selectstart",J),s.addEventListener("selectend",J),s.addEventListener("squeeze",J),s.addEventListener("squeezestart",J),s.addEventListener("squeezeend",J),s.addEventListener("end",O),s.addEventListener("inputsourceschange",Z),T.xrCompatible!==!0&&await e.makeXRCompatible(),w=t.getPixelRatio(),t.getSize(P),b&&"createProjectionLayer"in XRWebGLBinding.prototype){let Tt=null,ee=null,Nt=null;T.depth&&(Nt=T.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Tt=T.stencil?ns:mi,ee=T.stencil?xr:si);let re={colorFormat:e.RGBA8,depthFormat:Nt,scaleFactor:a};g=this.getBinding(),m=g.createProjectionLayer(re),s.updateRenderState({layers:[m]}),t.setPixelRatio(1),t.setSize(m.textureWidth,m.textureHeight,!1),S=new Rn(m.textureWidth,m.textureHeight,{format:Yn,type:Ln,depthTexture:new Wi(m.textureWidth,m.textureHeight,ee,void 0,void 0,void 0,void 0,void 0,void 0,Tt),stencilBuffer:T.stencil,colorSpace:t.outputColorSpace,samples:T.antialias?4:0,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1,storeMultisampledDepthBuffer:m.ignoreDepthValues===!1,storeMultisampledStencilBuffer:m.ignoreDepthValues===!1})}else{let Tt={antialias:T.antialias,alpha:!0,depth:T.depth,stencil:T.stencil,framebufferScaleFactor:a};x=new XRWebGLLayer(s,e,Tt),s.updateRenderState({baseLayer:x}),t.setPixelRatio(1),t.setSize(x.framebufferWidth,x.framebufferHeight,!1),S=new Rn(x.framebufferWidth,x.framebufferHeight,{format:Yn,type:Ln,colorSpace:t.outputColorSpace,stencilBuffer:T.stencil,resolveDepthBuffer:x.ignoreDepthValues===!1,resolveStencilBuffer:x.ignoreDepthValues===!1,storeMultisampledDepthBuffer:x.ignoreDepthValues===!1,storeMultisampledStencilBuffer:x.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(h),f=null,c=await s.requestReferenceSpace(o),ne.setContext(s),ne.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function Z(ut){for(let pt=0;pt<ut.removed.length;pt++){let Tt=ut.removed[pt],ee=E.indexOf(Tt);ee>=0&&(E[ee]=null,R[ee].disconnect(Tt))}for(let pt=0;pt<ut.added.length;pt++){let Tt=ut.added[pt],ee=E.indexOf(Tt);if(ee===-1){for(let re=0;re<R.length;re++)if(re>=E.length){E.push(Tt),ee=re;break}else if(E[re]===null){E[re]=Tt,ee=re;break}if(ee===-1)break}let Nt=R[ee];Nt&&Nt.connect(Tt)}}let W=new K,it=new K;function ot(ut,pt,Tt){W.setFromMatrixPosition(pt.matrixWorld),it.setFromMatrixPosition(Tt.matrixWorld);let ee=W.distanceTo(it),Nt=pt.projectionMatrix.elements,re=Tt.projectionMatrix.elements,Be=Nt[14]/(Nt[10]-1),fe=Nt[14]/(Nt[10]+1),pe=(Nt[9]+1)/Nt[5],be=(Nt[9]-1)/Nt[5],xe=(Nt[8]-1)/Nt[0],Ne=(re[8]+1)/re[0],Ke=Be*xe,tn=Be*Ne,De=ee/(-xe+Ne),Ge=De*-xe;if(pt.matrixWorld.decompose(ut.position,ut.quaternion,ut.scale),ut.translateX(Ge),ut.translateZ(De),ut.matrixWorld.compose(ut.position,ut.quaternion,ut.scale),ut.matrixWorldInverse.copy(ut.matrixWorld).invert(),Nt[10]===-1)ut.projectionMatrix.copy(pt.projectionMatrix),ut.projectionMatrixInverse.copy(pt.projectionMatrixInverse);else{let tt=Be+De,qe=fe+De,Te=Ke-Ge,V=tn+(ee-Ge),I=pe*fe/qe*tt,st=be*fe/qe*tt;ut.projectionMatrix.makePerspective(Te,V,I,st,tt,qe),ut.projectionMatrixInverse.copy(ut.projectionMatrix).invert()}}function Mt(ut,pt){pt===null?ut.matrixWorld.copy(ut.matrix):ut.matrixWorld.multiplyMatrices(pt.matrixWorld,ut.matrix),ut.matrixWorldInverse.copy(ut.matrixWorld).invert()}this.updateCamera=function(ut){if(s===null)return;let pt=ut.near,Tt=ut.far;y.texture!==null&&(y.depthNear>0&&(pt=y.depthNear),y.depthFar>0&&(Tt=y.depthFar)),H.near=B.near=U.near=pt,H.far=B.far=U.far=Tt,(z!==H.near||$!==H.far)&&(s.updateRenderState({depthNear:H.near,depthFar:H.far}),z=H.near,$=H.far),H.layers.mask=ut.layers.mask|6,U.layers.mask=H.layers.mask&-5,B.layers.mask=H.layers.mask&-3;let ee=ut.parent,Nt=H.cameras;Mt(H,ee);for(let re=0;re<Nt.length;re++)Mt(Nt[re],ee);Nt.length===2?ot(H,U,B):H.projectionMatrix.copy(U.projectionMatrix),N===null&&ut.isPerspectiveCamera&&(N={camera:ut,fov:ut.fov,zoom:ut.zoom}),wt(ut,H,ee)};function wt(ut,pt,Tt){Tt===null?ut.matrix.copy(pt.matrixWorld):(ut.matrix.copy(Tt.matrixWorld),ut.matrix.invert(),ut.matrix.multiply(pt.matrixWorld)),ut.matrix.decompose(ut.position,ut.quaternion,ut.scale),ut.updateMatrixWorld(!0),ut.projectionMatrix.copy(pt.projectionMatrix),ut.projectionMatrixInverse.copy(pt.projectionMatrixInverse),ut.isPerspectiveCamera&&(ut.fov=nr*2*Math.atan(1/ut.projectionMatrix.elements[5]),ut.zoom=1)}this.getCamera=function(){return H},this.getFoveation=function(){if(!(m===null&&x===null))return h},this.setFoveation=function(ut){h=ut,m!==null&&(m.fixedFoveation=ut),x!==null&&x.fixedFoveation!==void 0&&(x.fixedFoveation=ut)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(H)},this.getCameraTexture=function(ut){return _[ut]};let qt=null;function Kt(ut,pt){if(d=pt.getViewerPose(f||c),v=pt,d!==null){let Tt=d.views;x!==null&&(t.setRenderTargetFramebuffer(S,x.framebuffer),t.setRenderTarget(S));let ee=!1;Tt.length!==H.cameras.length&&(H.cameras.length=0,ee=!0);for(let fe=0;fe<Tt.length;fe++){let pe=Tt[fe],be=null;if(x!==null)be=x.getViewport(pe);else{let Ne=g.getViewSubImage(m,pe);be=Ne.viewport,fe===0&&(t.setRenderTargetTextures(S,Ne.colorTexture,Ne.depthStencilTexture),t.setRenderTarget(S))}let xe=G[fe];xe===void 0&&(xe=new Sn,xe.layers.enable(fe),xe.viewport=new Ye,G[fe]=xe),xe.matrix.fromArray(pe.transform.matrix),xe.matrix.decompose(xe.position,xe.quaternion,xe.scale),xe.projectionMatrix.fromArray(pe.projectionMatrix),xe.projectionMatrixInverse.copy(xe.projectionMatrix).invert(),xe.viewport.set(be.x,be.y,be.width,be.height),fe===0&&(H.matrix.copy(xe.matrix),H.matrix.decompose(H.position,H.quaternion,H.scale)),ee===!0&&H.cameras.push(xe)}let Nt=s.enabledFeatures;if(Nt&&Nt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&b){g=i.getBinding();let fe=g.getDepthInformation(Tt[0]);fe&&fe.isValid&&fe.texture&&y.init(fe,s.renderState)}if(Nt&&Nt.includes("camera-access")&&b){t.state.unbindTexture(),g=i.getBinding();for(let fe=0;fe<Tt.length;fe++){let pe=Tt[fe].camera;if(pe){let be=_[pe];be||(be=new Ao,_[pe]=be);let xe=g.getCameraImage(pe);be.sourceTexture=xe}}}}for(let Tt=0;Tt<R.length;Tt++){let ee=E[Tt],Nt=R[Tt];ee!==null&&Nt!==void 0&&Nt.update(ee,pt,f||c)}qt&&qt(ut,pt),pt.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:pt}),v=null}let ne=new Ep;ne.setAnimationLoop(Kt),this.setAnimationLoop=function(ut){qt=ut},this.dispose=function(){}}},ib=new Fe,Rp=new ue;Rp.set(-1,0,0,0,1,0,0,0,1);ob=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),_i=null;xc=class{constructor(t={}){let{canvas:e=Wd(),context:i=null,depth:s=!0,stencil:a=!1,alpha:c=!1,antialias:o=!1,premultipliedAlpha:h=!0,preserveDrawingBuffer:f=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:g=!1,reversedDepthBuffer:m=!1,outputBufferType:x=Ln}=t;this.isWebGLRenderer=!0;let v;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");v=i.getContextAttributes().alpha}else v=c;let b=x,y=new Set([Nl,Ll,Rl]),_=new Set([Ln,si,gr,xr,Pl,Il]),T=new Uint32Array(4),A=new Int32Array(4),S=new K,R=null,E=null,P=[],w=[],N=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ii,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let U=this,B=!1,G=null,H=null,z=null,$=null;this._outputColorSpace=An;let J=0,O=0,Z=null,W=-1,it=null,ot=new Ye,Mt=new Ye,wt=null,qt=new ae(0),Kt=0,ne=e.width,ut=e.height,pt=1,Tt=null,ee=null,Nt=new Ye(0,0,ne,ut),re=new Ye(0,0,ne,ut),Be=!1,fe=new ar,pe=!1,be=!1,xe=new Fe,Ne=new K,Ke=new Ye,tn={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},De=!1;function Ge(){return Z===null?pt:1}let tt=i;function qe(L,j){return e.getContext(L,j)}let Te,V,I,st,ct,mt,Et,Pt,k,vt,Dt,Vt,Ot,At,Yt,$t,le,Q,Ct,yt,It,Rt,bt;try{let L={alpha:!0,depth:s,stencil:a,antialias:o,premultipliedAlpha:h,preserveDrawingBuffer:f,powerPreference:d,failIfMajorPerformanceCaveat:g};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"186"}`),e.addEventListener("webglcontextlost",Re,!1),e.addEventListener("webglcontextrestored",Se,!1),e.addEventListener("webglcontextcreationerror",yn,!1),tt===null){let j="webgl2";if(tt=qe(j,L),tt===null)throw qe(j)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Jt()}catch(L){throw e.removeEventListener("webglcontextlost",Re,!1),e.removeEventListener("webglcontextrestored",Se,!1),e.removeEventListener("webglcontextcreationerror",yn,!1),se("WebGLRenderer: "+L.message),L}function Jt(){Te=new p_(tt),Te.init(),It=new tb(tt,Te),V=new s_(tt,Te,t,It),I=new Kv(tt,Te),V.reversedDepthBuffer&&m&&I.buffers.depth.setReversed(!0),H=tt.createFramebuffer(),z=tt.createFramebuffer(),$=tt.createFramebuffer(),st=new x_(tt),ct=new Bv,mt=new Qv(tt,Te,I,ct,V,It,st),Et=new d_(U),Pt=new _g(tt),Rt=new n_(tt,Pt),k=new m_(tt,Pt,st,Rt),vt=new __(tt,k,Pt,Rt,st),Q=new y_(tt,V,mt),Yt=new r_(ct),Dt=new Uv(U,Et,Te,V,Rt,Yt),Vt=new sb(U,ct),Ot=new zv,At=new Yv(Te),le=new e_(U,Et,I,vt,v,h),$t=new jv(U,vt,V),bt=new rb(tt,st,V,I),Ct=new i_(tt,Te,st),yt=new g_(tt,Te,st),st.programs=Dt.programs,U.capabilities=V,U.extensions=Te,U.properties=ct,U.renderLists=Ot,U.shadowMap=$t,U.state=I,U.info=st}b!==Ln&&(N=new b_(b,e.width,e.height,o,s,a));let Ht=new vu(U,tt);this.xr=Ht,this.getContext=function(){return tt},this.getContextAttributes=function(){return tt.getContextAttributes()},this.forceContextLoss=function(){let L=Te.get("WEBGL_lose_context");L&&L.loseContext()},this.forceContextRestore=function(){let L=Te.get("WEBGL_lose_context");L&&L.restoreContext()},this.getPixelRatio=function(){return pt},this.setPixelRatio=function(L){L!==void 0&&(pt=L,this.setSize(ne,ut,!1))},this.getSize=function(L){return L.set(ne,ut)},this.setSize=function(L,j,ft=!0){if(Ht.isPresenting){ie("WebGLRenderer: Can't change size while VR device is presenting.");return}ne=L,ut=j,e.width=Math.floor(L*pt),e.height=Math.floor(j*pt),ft===!0&&(e.style.width=L+"px",e.style.height=j+"px"),N!==null&&N.setSize(e.width,e.height),this.setViewport(0,0,L,j)},this.getDrawingBufferSize=function(L){return L.set(ne*pt,ut*pt).floor()},this.setDrawingBufferSize=function(L,j,ft){ne=L,ut=j,pt=ft,e.width=Math.floor(L*ft),e.height=Math.floor(j*ft),this.setViewport(0,0,L,j)},this.setEffects=function(L){if(b===Ln){se("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(L){for(let j=0;j<L.length;j++)if(L[j].isOutputPass===!0){ie("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}N.setEffects(L||[])},this.getCurrentViewport=function(L){return L.copy(ot)},this.getViewport=function(L){return L.copy(Nt)},this.setViewport=function(L,j,ft,at){L.isVector4?Nt.set(L.x,L.y,L.z,L.w):Nt.set(L,j,ft,at),I.viewport(ot.copy(Nt).multiplyScalar(pt).round())},this.getScissor=function(L){return L.copy(re)},this.setScissor=function(L,j,ft,at){L.isVector4?re.set(L.x,L.y,L.z,L.w):re.set(L,j,ft,at),I.scissor(Mt.copy(re).multiplyScalar(pt).round())},this.getScissorTest=function(){return Be},this.setScissorTest=function(L){I.setScissorTest(Be=L)},this.setOpaqueSort=function(L){Tt=L},this.setTransparentSort=function(L){ee=L},this.getClearColor=function(L){return L.copy(le.getClearColor())},this.setClearColor=function(){le.setClearColor(...arguments)},this.getClearAlpha=function(){return le.getClearAlpha()},this.setClearAlpha=function(){le.setClearAlpha(...arguments)},this.clear=function(L=!0,j=!0,ft=!0){let at=0;if(L){let lt=!1;if(Z!==null){let Bt=Z.texture.format;lt=y.has(Bt)}if(lt){let Bt=Z.texture.type,Lt=_.has(Bt),Ut=le.getClearColor(),Xt=le.getClearAlpha(),Zt=Ut.r,Ft=Ut.g,ye=Ut.b;Lt?(T[0]=Zt,T[1]=Ft,T[2]=ye,T[3]=Xt,tt.clearBufferuiv(tt.COLOR,0,T)):(A[0]=Zt,A[1]=Ft,A[2]=ye,A[3]=Xt,tt.clearBufferiv(tt.COLOR,0,A))}else at|=tt.COLOR_BUFFER_BIT}j&&(at|=tt.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),ft&&(at|=tt.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),at!==0&&tt.clear(at)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(L){L.setRenderer(this),G=L},this.dispose=function(){e.removeEventListener("webglcontextlost",Re,!1),e.removeEventListener("webglcontextrestored",Se,!1),e.removeEventListener("webglcontextcreationerror",yn,!1),le.dispose(),Ot.dispose(),At.dispose(),ct.dispose(),Et.dispose(),vt.dispose(),Rt.dispose(),bt.dispose(),Dt.dispose(),Ht.dispose(),Ht.removeEventListener("sessionstart",Cs),Ht.removeEventListener("sessionend",Ps),Hn.stop()};function Re(L){L.preventDefault(),yo("WebGLRenderer: Context Lost."),B=!0}function Se(){yo("WebGLRenderer: Context Restored."),B=!1;let L=st.autoReset,j=$t.enabled,ft=$t.autoUpdate,at=$t.needsUpdate,lt=$t.type;Jt(),st.autoReset=L,$t.enabled=j,$t.autoUpdate=ft,$t.needsUpdate=at,$t.type=lt}function yn(L){se("WebGLRenderer: A WebGL context could not be created. Reason: ",L.statusMessage)}function nn(L){let j=L.target;j.removeEventListener("dispose",nn),Pr(j)}function Pr(L){Ir(L),ct.remove(L)}function Ir(L){let j=ct.get(L).programs;j!==void 0&&(j.forEach(function(ft){Dt.releaseProgram(ft)}),L.isShaderMaterial&&Dt.releaseShaderCache(L))}this.renderBufferDirect=function(L,j,ft,at,lt,Bt){j===null&&(j=tn);let Lt=lt.isMesh&&lt.matrixWorld.determinantAffine()<0,Ut=Gt(L,j,ft,at,lt);I.setMaterial(at,Lt);let Xt=ft.index,Zt=1;if(at.wireframe===!0){if(Xt=k.getWireframeAttribute(ft),Xt===void 0)return;Zt=2}let Ft=ft.drawRange,ye=ft.attributes.position,Wt=Ft.start*Zt,Ce=(Ft.start+Ft.count)*Zt;Bt!==null&&(Wt=Math.max(Wt,Bt.start*Zt),Ce=Math.min(Ce,(Bt.start+Bt.count)*Zt)),Xt!==null?(Wt=Math.max(Wt,0),Ce=Math.min(Ce,Xt.count)):ye!=null&&(Wt=Math.max(Wt,0),Ce=Math.min(Ce,ye.count));let Qe=Ce-Wt;if(Qe<0||Qe===1/0)return;Rt.setup(lt,at,Ut,ft,Xt);let ke,r=Ct;if(Xt!==null&&(ke=Pt.get(Xt),r=yt,r.setIndex(ke)),lt.isMesh)at.wireframe===!0?(I.setLineWidth(at.wireframeLinewidth*Ge()),r.setMode(tt.LINES)):r.setMode(tt.TRIANGLES);else if(lt.isLine){let l=at.linewidth;l===void 0&&(l=1),I.setLineWidth(l*Ge()),lt.isLineSegments?r.setMode(tt.LINES):lt.isLineLoop?r.setMode(tt.LINE_LOOP):r.setMode(tt.LINE_STRIP)}else lt.isPoints?r.setMode(tt.POINTS):lt.isSprite&&r.setMode(tt.TRIANGLES);if(lt.isBatchedMesh)if(Te.get("WEBGL_multi_draw"))r.renderMultiDraw(lt._multiDrawStarts,lt._multiDrawCounts,lt._multiDrawCount);else{let l=lt._multiDrawStarts,u=lt._multiDrawCounts,p=lt._multiDrawCount,M=Xt?Pt.get(Xt).bytesPerElement:1,C=ct.get(at).currentProgram.getUniforms();for(let D=0;D<p;D++)C.setValue(tt,"_gl_DrawID",D),r.render(l[D]/M,u[D])}else if(lt.isInstancedMesh)r.renderInstances(Wt,Qe,lt.count);else if(ft.isInstancedBufferGeometry){let l=ft._maxInstanceCount!==void 0?ft._maxInstanceCount:1/0,u=Math.min(ft.instanceCount,l);r.renderInstances(Wt,Qe,u)}else r.render(Wt,Qe)};function Ze(L,j,ft,at){G!==null&&L.isNodeMaterial&&G.setObject(at,L),pe===!0&&Yt.setState(L,ft,!1),L.transparent===!0&&L.side===wn&&L.forceSinglePass===!1?(L.side=Pn,L.needsUpdate=!0,dt(L,j,at),L.side=Qi,L.needsUpdate=!0,dt(L,j,at),L.side=wn):dt(L,j,at)}this.compile=function(L,j,ft=null){ft===null&&(ft=L),G!==null&&G.renderStart(L,j,ft),E=At.get(ft),E.init(j),w.push(E),ft.traverseVisible(function(lt){lt.isLight&&lt.layers.test(j.layers)&&(E.pushLight(lt),lt.castShadow&&E.pushShadow(lt))}),L!==ft&&L.traverseVisible(function(lt){lt.isLight&&lt.layers.test(j.layers)&&(E.pushLight(lt),lt.castShadow&&E.pushShadow(lt))}),E.setupLights(),G!==null&&G.updateLights(E.state.lightsArray),be=this.localClippingEnabled,pe=Yt.init(this.clippingPlanes,be),pe===!0&&Yt.setGlobalState(this.clippingPlanes,j),G!==null&&$t.render(E.state.shadowsArray,ft,j);let at=new Set;return L.traverse(function(lt){if(!(lt.isMesh||lt.isPoints||lt.isLine||lt.isSprite))return;let Bt=lt.material;if(Bt)if(Array.isArray(Bt))for(let Lt=0;Lt<Bt.length;Lt++){let Ut=Bt[Lt];Ze(Ut,ft,j,lt),at.add(Ut)}else Ze(Bt,ft,j,lt),at.add(Bt)}),E=w.pop(),G!==null&&G.renderEnd(),at},this.compileAsync=function(L,j,ft=null){let at=this.compile(L,j,ft);return new Promise(lt=>{function Bt(){if(at.forEach(function(Lt){let Xt=ct.get(Lt).currentProgram;(Xt===void 0||Xt.isReady())&&at.delete(Lt)}),at.size===0){lt(L);return}setTimeout(Bt,10)}Te.get("KHR_parallel_shader_compile")!==null?Bt():setTimeout(Bt,10)})};let Oi=null;function Rr(L){Oi&&Oi(L)}function Cs(){Hn.stop()}function Ps(){Hn.start()}let Hn=new Ep;Hn.setAnimationLoop(Rr),typeof self<"u"&&Hn.setContext(self),this.setAnimationLoop=function(L){Oi=L,Ht.setAnimationLoop(L),L===null?Hn.stop():Hn.start()},Ht.addEventListener("sessionstart",Cs),Ht.addEventListener("sessionend",Ps),this.render=function(L,j){if(j!==void 0&&j.isCamera!==!0){se("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(B===!0)return;G!==null&&G.renderStart(L,j);let ft=Ht.enabled===!0&&Ht.isPresenting===!0,at=N!==null&&(Z===null||ft)&&N.begin(U,Z);if(L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),j.parent===null&&j.matrixWorldAutoUpdate===!0&&j.updateMatrixWorld(),Ht.enabled===!0&&Ht.isPresenting===!0&&(N===null||N.isCompositing()===!1)&&(Ht.cameraAutoUpdate===!0&&Ht.updateCamera(j),j=Ht.getCamera()),L.isScene===!0&&L.onBeforeRender(U,L,j,Z),E=At.get(L,w.length),E.init(j),E.state.textureUnits=mt.getTextureUnits(),w.push(E),xe.multiplyMatrices(j.projectionMatrix,j.matrixWorldInverse),fe.setFromProjectionMatrix(xe,ti,j.reversedDepth),be=this.localClippingEnabled,pe=Yt.init(this.clippingPlanes,be),R=Ot.get(L,P.length),R.init(),P.push(R),Ht.enabled===!0&&Ht.isPresenting===!0){let Lt=U.xr.getDepthSensingMesh();Lt!==null&&F(Lt,j,-1/0,U.sortObjects)}F(L,j,0,U.sortObjects),R.finish(),G!==null&&G.updateLights(E.state.lightsArray),U.sortObjects===!0&&R.sort(Tt,ee),De=Ht.enabled===!1||Ht.isPresenting===!1||Ht.hasDepthSensing()===!1,De&&le.addToRenderList(R,L),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),pe===!0&&Yt.beginShadows();let lt=E.state.shadowsArray;if($t.render(lt,L,j),pe===!0&&Yt.endShadows(),(at&&N.hasRenderPass())===!1){let Lt=R.opaque,Ut=R.transmissive;if(E.setupLights(),j.isArrayCamera){let Xt=j.cameras;if(Ut.length>0)for(let Zt=0,Ft=Xt.length;Zt<Ft;Zt++){let ye=Xt[Zt];rt(Lt,Ut,L,ye)}De&&le.render(L);for(let Zt=0,Ft=Xt.length;Zt<Ft;Zt++){let ye=Xt[Zt];X(R,L,ye,ye.viewport)}}else Ut.length>0&&rt(Lt,Ut,L,j),De&&le.render(L),X(R,L,j)}Z!==null&&O===0&&(mt.updateMultisampleRenderTarget(Z),mt.updateRenderTargetMipmap(Z)),at&&N.end(U),L.isScene===!0&&L.onAfterRender(U,L,j),Rt.resetDefaultState(),W=-1,it=null,w.pop(),w.length>0?(E=w[w.length-1],mt.setTextureUnits(E.state.textureUnits),pe===!0&&Yt.setGlobalState(U.clippingPlanes,E.state.camera)):E=null,P.pop(),P.length>0?R=P[P.length-1]:R=null,G!==null&&G.renderEnd()};function F(L,j,ft,at){if(L.visible===!1)return;if(L.layers.test(j.layers)){if(L.isGroup)ft=L.renderOrder;else if(L.isLOD)L.autoUpdate===!0&&L.update(j);else if(L.isLightProbeGrid)E.pushLightProbeGrid(L);else if(L.isLight)E.pushLight(L),L.castShadow&&E.pushShadow(L);else if(L.isSprite){if(!L.frustumCulled||L.intersectsFrustum(fe)){at&&Ke.setFromMatrixPosition(L.matrixWorld).applyMatrix4(xe);let Lt=vt.update(L),Ut=L.material;Ut.visible&&R.push(L,Lt,Ut,ft,Ke.z,null,j)}}else if((L.isMesh||L.isLine||L.isPoints)&&(!L.frustumCulled||L.intersectsFrustum(fe))){let Lt=vt.update(L),Ut=L.material;if(at&&(L.boundingSphere!==void 0?(L.boundingSphere===null&&L.computeBoundingSphere(),Ke.copy(L.boundingSphere.center)):(Lt.boundingSphere===null&&Lt.computeBoundingSphere(),Ke.copy(Lt.boundingSphere.center)),Ke.applyMatrix4(L.matrixWorld).applyMatrix4(xe)),Array.isArray(Ut)){let Xt=Lt.groups;for(let Zt=0,Ft=Xt.length;Zt<Ft;Zt++){let ye=Xt[Zt],Wt=Ut[ye.materialIndex];Wt&&Wt.visible&&R.push(L,Lt,Wt,ft,Ke.z,ye,j)}}else Ut.visible&&R.push(L,Lt,Ut,ft,Ke.z,null,j)}}let Bt=L.children;for(let Lt=0,Ut=Bt.length;Lt<Ut;Lt++)F(Bt[Lt],j,ft,at)}function X(L,j,ft,at){let{opaque:lt,transmissive:Bt,transparent:Lt}=L;E.setupLightsView(ft),pe===!0&&Yt.setGlobalState(U.clippingPlanes,ft),at&&I.viewport(ot.copy(at)),lt.length>0&&ht(lt,j,ft),Bt.length>0&&ht(Bt,j,ft),Lt.length>0&&ht(Lt,j,ft),I.buffers.depth.setTest(!0),I.buffers.depth.setMask(!0),I.buffers.color.setMask(!0),I.setPolygonOffset(!1)}function rt(L,j,ft,at){if((ft.isScene===!0?ft.overrideMaterial:null)!==null)return;if(E.state.transmissionRenderTarget[at.id]===void 0){let Wt=Te.has("EXT_color_buffer_half_float")||Te.has("EXT_color_buffer_float");E.state.transmissionRenderTarget[at.id]=new Rn(1,1,{generateMipmaps:!0,type:Wt?oi:Ln,minFilter:es,samples:Math.max(4,V.samples),stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Ee.workingColorSpace})}let Bt=E.state.transmissionRenderTarget[at.id],Lt=at.viewport||ot;Bt.setSize(Lt.z*U.transmissionResolutionScale,Lt.w*U.transmissionResolutionScale);let Ut=U.getRenderTarget(),Xt=U.getActiveCubeFace(),Zt=U.getActiveMipmapLevel();U.setRenderTarget(Bt),U.getClearColor(qt),Kt=U.getClearAlpha(),Kt<1&&U.setClearColor(16777215,.5),U.clear(),De&&le.render(ft);let Ft=U.toneMapping;U.toneMapping=ii;let ye=at.viewport;if(at.viewport!==void 0&&(at.viewport=void 0),E.setupLightsView(at),pe===!0&&Yt.setGlobalState(U.clippingPlanes,at),ht(L,ft,at),mt.updateMultisampleRenderTarget(Bt),mt.updateRenderTargetMipmap(Bt),Te.has("WEBGL_multisampled_render_to_texture")===!1){let Wt=!1;for(let Ce=0,Qe=j.length;Ce<Qe;Ce++){let ke=j[Ce],{object:r,geometry:l,material:u,group:p}=ke;if(u.side===wn&&r.layers.test(at.layers)){let M=u.side;u.side=Pn,u.needsUpdate=!0,et(r,ft,at,l,u,p),u.side=M,u.needsUpdate=!0,Wt=!0}}Wt===!0&&(mt.updateMultisampleRenderTarget(Bt),mt.updateRenderTargetMipmap(Bt))}U.setRenderTarget(Ut,Xt,Zt),U.setClearColor(qt,Kt),ye!==void 0&&(at.viewport=ye),U.toneMapping=Ft}function ht(L,j,ft){let at=j.isScene===!0?j.overrideMaterial:null;for(let lt=0,Bt=L.length;lt<Bt;lt++){let Lt=L[lt],{object:Ut,geometry:Xt,group:Zt}=Lt,Ft=Lt.material;Ft.allowOverride===!0&&at!==null&&(Ft=at),Ut.layers.test(ft.layers)&&et(Ut,j,ft,Xt,Ft,Zt)}}function et(L,j,ft,at,lt,Bt){G!==null&&lt.isNodeMaterial&&G.setObject(L,lt),L.onBeforeRender(U,j,ft,at,lt,Bt),L.modelViewMatrix.multiplyMatrices(ft.matrixWorldInverse,L.matrixWorld),L.normalMatrix.getNormalMatrix(L.modelViewMatrix),lt.onBeforeRender(U,j,ft,at,L,Bt),lt.transparent===!0&&lt.side===wn&&lt.forceSinglePass===!1?(lt.side=Pn,lt.needsUpdate=!0,U.renderBufferDirect(ft,j,at,lt,L,Bt),lt.side=Qi,lt.needsUpdate=!0,U.renderBufferDirect(ft,j,at,lt,L,Bt),lt.side=wn):U.renderBufferDirect(ft,j,at,lt,L,Bt),L.onAfterRender(U,j,ft,at,lt,Bt)}function dt(L,j,ft){j.isScene!==!0&&(j=tn);let at=ct.get(L),lt=E.state.lights,Bt=E.state.shadowsArray,Lt=lt.state.version,Ut=Dt.getParameters(L,lt.state,Bt,j,ft,E.state.lightProbeGridArray),Xt=Dt.getProgramCacheKey(Ut),Zt=at.programs;at.environment=L.isMeshStandardMaterial||L.isMeshLambertMaterial||L.isMeshPhongMaterial?j.environment:null,at.fog=j.fog;let Ft=L.isMeshStandardMaterial||L.isMeshLambertMaterial&&!L.envMap||L.isMeshPhongMaterial&&!L.envMap;at.envMap=Et.get(L.envMap||at.environment,Ft),at.envMapRotation=at.environment!==null&&L.envMap===null?j.environmentRotation:L.envMapRotation,Zt===void 0&&(L.addEventListener("dispose",nn),Zt=new Map,at.programs=Zt);let ye=Zt.get(Xt);if(ye!==void 0){if(at.currentProgram===ye&&at.lightsStateVersion===Lt)return ge(L,Ut),ye}else Ut.uniforms=Dt.getUniforms(L),G!==null&&L.isNodeMaterial&&G.build(L,ft,Ut),L.onBeforeCompile(Ut,U),ye=Dt.acquireProgram(Ut,Xt),Zt.set(Xt,ye),at.uniforms=Ut.uniforms;let Wt=at.uniforms;return(!L.isShaderMaterial&&!L.isRawShaderMaterial||L.clipping===!0)&&(Wt.clippingPlanes=Yt.uniform),ge(L,Ut),at.needsLights=Ie(L),at.lightsStateVersion=Lt,at.needsLights&&(Wt.ambientLightColor.value=lt.state.ambient,Wt.lightProbe.value=lt.state.probe,Wt.sunLights.value=lt.state.sun,Wt.sunLightShadows.value=lt.state.sunShadow,Wt.directionalLights.value=lt.state.directional,Wt.directionalLightShadows.value=lt.state.directionalShadow,Wt.spotLights.value=lt.state.spot,Wt.spotLightShadows.value=lt.state.spotShadow,Wt.rectAreaLights.value=lt.state.rectArea,Wt.ltc_1.value=lt.state.rectAreaLTC1,Wt.ltc_2.value=lt.state.rectAreaLTC2,Wt.pointLights.value=lt.state.point,Wt.pointLightShadows.value=lt.state.pointShadow,Wt.hemisphereLights.value=lt.state.hemi,Wt.sunShadowMatrix.value=lt.state.sunShadowMatrix,Wt.sunShadowCascade.value=lt.state.sunShadowCascade,Wt.directionalShadowMatrix.value=lt.state.directionalShadowMatrix,Wt.spotLightMatrix.value=lt.state.spotLightMatrix,Wt.spotLightMap.value=lt.state.spotLightMap,Wt.pointShadowMatrix.value=lt.state.pointShadowMatrix),at.lightProbeGrid=E.state.lightProbeGridArray.length>0,at.currentProgram=ye,at.uniformsList=null,ye}function zt(L){if(L.uniformsList===null){let j=L.currentProgram.getUniforms();L.uniformsList=vr.seqWithValue(j.seq,L.uniforms)}return L.uniformsList}function ge(L,j){let ft=ct.get(L);ft.outputColorSpace=j.outputColorSpace,ft.batching=j.batching,ft.batchingColor=j.batchingColor,ft.instancing=j.instancing,ft.instancingColor=j.instancingColor,ft.instancingMorph=j.instancingMorph,ft.skinning=j.skinning,ft.morphTargets=j.morphTargets,ft.morphNormals=j.morphNormals,ft.morphColors=j.morphColors,ft.morphTargetsCount=j.morphTargetsCount,ft.numClippingPlanes=j.numClippingPlanes,ft.numIntersection=j.numClipIntersection,ft.vertexAlphas=j.vertexAlphas,ft.vertexTangents=j.vertexTangents,ft.toneMapping=j.toneMapping}function gt(L,j){if(L.length===0)return null;if(L.length===1)return L[0].texture!==null?L[0]:null;S.setFromMatrixPosition(j.matrixWorld);for(let ft=0,at=L.length;ft<at;ft++){let lt=L[ft];if(lt.texture!==null&&lt.boundingBox.containsPoint(S))return lt}return null}function Gt(L,j,ft,at,lt){j.isScene!==!0&&(j=tn),mt.resetTextureUnits();let Bt=j.fog,Lt=at.isMeshStandardMaterial||at.isMeshLambertMaterial||at.isMeshPhongMaterial?j.environment:null,Ut=Z===null?U.outputColorSpace:Z.isXRRenderTarget===!0?Z.texture.colorSpace:Ee.workingColorSpace,Xt=at.isMeshStandardMaterial||at.isMeshLambertMaterial&&!at.envMap||at.isMeshPhongMaterial&&!at.envMap,Zt=Et.get(at.envMap||Lt,Xt),Ft=at.vertexColors===!0&&!!ft.attributes.color&&ft.attributes.color.itemSize===4,ye=!!ft.attributes.tangent&&(!!at.normalMap||at.anisotropy>0),Wt=!!ft.morphAttributes.position,Ce=!!ft.morphAttributes.normal,Qe=!!ft.morphAttributes.color,ke=ii;at.toneMapped&&(Z===null||Z.isXRRenderTarget===!0)&&(ke=U.toneMapping);let r=ft.morphAttributes.position||ft.morphAttributes.normal||ft.morphAttributes.color,l=r!==void 0?r.length:0,u=ct.get(at),p=E.state.lights;if(pe===!0&&(be===!0||L!==it)){let St=L===it&&at.id===W;Yt.setState(at,L,St)}let M=!1;at.version===u.__version?(u.needsLights&&u.lightsStateVersion!==p.state.version||u.outputColorSpace!==Ut||lt.isBatchedMesh&&u.batching===!1||!lt.isBatchedMesh&&u.batching===!0||lt.isBatchedMesh&&u.batchingColor===!0&&lt._colorsTexture===null||lt.isBatchedMesh&&u.batchingColor===!1&&lt._colorsTexture!==null||lt.isInstancedMesh&&u.instancing===!1||!lt.isInstancedMesh&&u.instancing===!0||lt.isSkinnedMesh&&u.skinning===!1||!lt.isSkinnedMesh&&u.skinning===!0||lt.isInstancedMesh&&u.instancingColor===!0&&lt.instanceColor===null||lt.isInstancedMesh&&u.instancingColor===!1&&lt.instanceColor!==null||lt.isInstancedMesh&&u.instancingMorph===!0&&lt.morphTexture===null||lt.isInstancedMesh&&u.instancingMorph===!1&&lt.morphTexture!==null||u.envMap!==Zt||at.fog===!0&&u.fog!==Bt||u.numClippingPlanes!==void 0&&(u.numClippingPlanes!==Yt.numPlanes||u.numIntersection!==Yt.numIntersection)||u.vertexAlphas!==Ft||u.vertexTangents!==ye||u.morphTargets!==Wt||u.morphNormals!==Ce||u.morphColors!==Qe||u.toneMapping!==ke||u.morphTargetsCount!==l||!!u.lightProbeGrid!=E.state.lightProbeGridArray.length>0)&&(M=!0):(M=!0,u.__version=at.version);let C=u.currentProgram;M===!0&&(C=dt(at,j,lt),G&&at.isNodeMaterial&&G.onUpdateProgram(at,C,u));let D=!1,Y=!1,q=!1,nt=C.getUniforms(),_t=u.uniforms;if(I.useProgram(C.program)&&(D=!0,Y=!0,q=!0),at.id!==W&&(W=at.id,Y=!0),u.needsLights){let St=gt(E.state.lightProbeGridArray,lt);u.lightProbeGrid!==St&&(u.lightProbeGrid=St,Y=!0)}if(D||it!==L){I.buffers.depth.getReversed()&&L.reversedDepth!==!0&&(L._reversedDepth=!0,L.updateProjectionMatrix()),nt.setValue(tt,"projectionMatrix",L.projectionMatrix),nt.setValue(tt,"viewMatrix",L.matrixWorldInverse);let Qt=nt.map.cameraPosition;Qt!==void 0&&Qt.setValue(tt,Ne.setFromMatrixPosition(L.matrixWorld)),V.logarithmicDepthBuffer&&nt.setValue(tt,"logDepthBufFC",2/(Math.log(L.far+1)/Math.LN2)),(at.isMeshPhongMaterial||at.isMeshToonMaterial||at.isMeshLambertMaterial||at.isMeshBasicMaterial||at.isMeshStandardMaterial||at.isShaderMaterial)&&nt.setValue(tt,"isOrthographic",L.isOrthographicCamera===!0),it!==L&&(it=L,Y=!0,q=!0)}if(u.needsLights&&(p.state.sunShadowMap.length>0&&nt.setValue(tt,"sunShadowMap",p.state.sunShadowMap,mt),p.state.directionalShadowMap.length>0&&nt.setValue(tt,"directionalShadowMap",p.state.directionalShadowMap,mt),p.state.spotShadowMap.length>0&&nt.setValue(tt,"spotShadowMap",p.state.spotShadowMap,mt),p.state.pointShadowMap.length>0&&nt.setValue(tt,"pointShadowMap",p.state.pointShadowMap,mt)),lt.isSkinnedMesh){nt.setOptional(tt,lt,"bindMatrix"),nt.setOptional(tt,lt,"bindMatrixInverse");let St=lt.skeleton;St&&(St.boneTexture===null&&St.computeBoneTexture(),nt.setValue(tt,"boneTexture",St.boneTexture,mt))}lt.isBatchedMesh&&(nt.setOptional(tt,lt,"batchingTexture"),nt.setValue(tt,"batchingTexture",lt._matricesTexture,mt),nt.setOptional(tt,lt,"batchingIdTexture"),nt.setValue(tt,"batchingIdTexture",lt._indirectTexture,mt),nt.setOptional(tt,lt,"batchingColorTexture"),lt._colorsTexture!==null&&nt.setValue(tt,"batchingColorTexture",lt._colorsTexture,mt));let xt=ft.morphAttributes;if((xt.position!==void 0||xt.normal!==void 0||xt.color!==void 0)&&Q.update(lt,ft,C),(Y||u.receiveShadow!==lt.receiveShadow)&&(u.receiveShadow=lt.receiveShadow,nt.setValue(tt,"receiveShadow",lt.receiveShadow)),(at.isMeshStandardMaterial||at.isMeshLambertMaterial||at.isMeshPhongMaterial)&&at.envMap===null&&j.environment!==null&&(_t.envMapIntensity.value=j.environmentIntensity),_t.dfgLUT!==void 0&&(_t.dfgLUT.value=ab()),Y){if(nt.setValue(tt,"toneMappingExposure",U.toneMappingExposure),u.needsLights&&te(_t,q),Bt&&at.fog===!0&&Vt.refreshFogUniforms(_t,Bt),Vt.refreshMaterialUniforms(_t,at,pt,ut,E.state.transmissionRenderTarget[L.id]),u.needsLights&&u.lightProbeGrid){let St=u.lightProbeGrid;_t.probesSH.value=St.texture,_t.probesMin.value.copy(St.boundingBox.min),_t.probesMax.value.copy(St.boundingBox.max),_t.probesResolution.value.copy(St.resolution)}vr.upload(tt,zt(u),_t,mt)}if(at.isShaderMaterial&&at.uniformsNeedUpdate===!0&&(vr.upload(tt,zt(u),_t,mt),at.uniformsNeedUpdate=!1),at.isSpriteMaterial&&nt.setValue(tt,"center",lt.center),nt.setValue(tt,"modelViewMatrix",lt.modelViewMatrix),nt.setValue(tt,"normalMatrix",lt.normalMatrix),nt.setValue(tt,"modelMatrix",lt.matrixWorld),at.uniformsGroups!==void 0){let St=at.uniformsGroups;for(let Qt=0,he=St.length;Qt<he;Qt++){let _e=St[Qt];bt.update(_e,C),bt.bind(_e,C)}}return C}function te(L,j){L.ambientLightColor.needsUpdate=j,L.lightProbe.needsUpdate=j,L.sunLights.needsUpdate=j,L.sunLightShadows.needsUpdate=j,L.directionalLights.needsUpdate=j,L.directionalLightShadows.needsUpdate=j,L.pointLights.needsUpdate=j,L.pointLightShadows.needsUpdate=j,L.spotLights.needsUpdate=j,L.spotLightShadows.needsUpdate=j,L.rectAreaLights.needsUpdate=j,L.hemisphereLights.needsUpdate=j}function Ie(L){return L.isMeshLambertMaterial||L.isMeshToonMaterial||L.isMeshPhongMaterial||L.isMeshStandardMaterial||L.isShadowMaterial||L.isShaderMaterial&&L.lights===!0}this.getActiveCubeFace=function(){return J},this.getActiveMipmapLevel=function(){return O},this.getRenderTarget=function(){return Z},this.setRenderTargetTextures=function(L,j,ft){let at=ct.get(L);at.__autoAllocateDepthBuffer=L.resolveDepthBuffer===!1,at.__autoAllocateDepthBuffer===!1&&(at.__useRenderToTexture=!1),ct.get(L.texture).__webglTexture=j,ct.get(L.depthTexture).__webglTexture=at.__autoAllocateDepthBuffer?void 0:ft,at.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(L,j){let ft=ct.get(L);ft.__webglFramebuffer=j,ft.__useDefaultFramebuffer=j===void 0},this.setRenderTarget=function(L,j=0,ft=0){Z=L,J=j,O=ft;let at=null,lt=!1,Bt=!1;if(L){let Ut=ct.get(L);if(Ut.__useDefaultFramebuffer!==void 0){I.bindFramebuffer(tt.FRAMEBUFFER,Ut.__webglFramebuffer),ot.copy(L.viewport),Mt.copy(L.scissor),wt=L.scissorTest,I.viewport(ot),I.scissor(Mt),I.setScissorTest(wt),W=-1;return}else if(Ut.__webglFramebuffer===void 0)mt.setupRenderTarget(L);else if(Ut.__hasExternalTextures)mt.rebindTextures(L,ct.get(L.texture).__webglTexture,ct.get(L.depthTexture).__webglTexture);else if(L.depthBuffer){let Ft=L.depthTexture;if(Ut.__boundDepthTexture!==Ft){if(Ft!==null&&ct.has(Ft)&&(L.width!==Ft.image.width||L.height!==Ft.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");mt.setupDepthRenderbuffer(L)}}let Xt=L.texture;(Xt.isData3DTexture||Xt.isDataArrayTexture||Xt.isCompressedArrayTexture)&&(Bt=!0);let Zt=ct.get(L).__webglFramebuffer;L.isWebGLCubeRenderTarget?(Array.isArray(Zt[j])?at=Zt[j][ft]:at=Zt[j],lt=!0):L.samples>0&&mt.useMultisampledRTT(L)===!1?at=ct.get(L).__webglMultisampledFramebuffer:Array.isArray(Zt)?at=Zt[ft]:at=Zt,ot.copy(L.viewport),Mt.copy(L.scissor),wt=L.scissorTest}else ot.copy(Nt).multiplyScalar(pt).floor(),Mt.copy(re).multiplyScalar(pt).floor(),wt=Be;if(ft!==0&&(at=H),I.bindFramebuffer(tt.FRAMEBUFFER,at)&&I.drawBuffers(L,at),I.viewport(ot),I.scissor(Mt),I.setScissorTest(wt),lt){let Ut=ct.get(L.texture);tt.framebufferTexture2D(tt.FRAMEBUFFER,tt.COLOR_ATTACHMENT0,tt.TEXTURE_CUBE_MAP_POSITIVE_X+j,Ut.__webglTexture,ft)}else if(Bt){let Ut=j;for(let Xt=0;Xt<L.textures.length;Xt++){let Zt=ct.get(L.textures[Xt]);tt.framebufferTextureLayer(tt.FRAMEBUFFER,tt.COLOR_ATTACHMENT0+Xt,Zt.__webglTexture,ft,Ut)}}else if(L!==null&&ft!==0){let Ut=ct.get(L.texture);tt.framebufferTexture2D(tt.FRAMEBUFFER,tt.COLOR_ATTACHMENT0,tt.TEXTURE_2D,Ut.__webglTexture,ft)}W=-1};function sn(L){let j=ct.get(L);return(j.__readFormat!==L.format||j.__readType!==L.type)&&(j.__readFormat=L.format,j.__readType=L.type,j.__formatReadable=V.textureFormatReadable(L.format),j.__typeReadable=V.textureTypeReadable(L.type)),j}this.readRenderTargetPixels=function(L,j,ft,at,lt,Bt,Lt,Ut=0){if(!(L&&L.isWebGLRenderTarget)){se("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Xt=ct.get(L).__webglFramebuffer;if(L.isWebGLCubeRenderTarget&&Lt!==void 0&&(Xt=Xt[Lt]),Xt){I.bindFramebuffer(tt.FRAMEBUFFER,Xt);try{let Zt=L.textures[Ut],Ft=Zt.format,ye=Zt.type;L.textures.length>1&&tt.readBuffer(tt.COLOR_ATTACHMENT0+Ut);let Wt=sn(Zt);if(Wt.__formatReadable===!1){se("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Wt.__typeReadable===!1){se("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}j>=0&&j<=L.width-at&&ft>=0&&ft<=L.height-lt&&tt.readPixels(j,ft,at,lt,It.convert(Ft),It.convert(ye),Bt)}finally{let Zt=Z!==null?ct.get(Z).__webglFramebuffer:null;I.bindFramebuffer(tt.FRAMEBUFFER,Zt)}}},this.readRenderTargetPixelsAsync=async function(L,j,ft,at,lt,Bt,Lt,Ut=0){if(!(L&&L.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Xt=ct.get(L).__webglFramebuffer;if(L.isWebGLCubeRenderTarget&&Lt!==void 0&&(Xt=Xt[Lt]),Xt)if(j>=0&&j<=L.width-at&&ft>=0&&ft<=L.height-lt){I.bindFramebuffer(tt.FRAMEBUFFER,Xt);let Zt=L.textures[Ut],Ft=Zt.format,ye=Zt.type;L.textures.length>1&&tt.readBuffer(tt.COLOR_ATTACHMENT0+Ut);let Wt=sn(Zt);if(Wt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Wt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Ce=tt.createBuffer();tt.bindBuffer(tt.PIXEL_PACK_BUFFER,Ce),tt.bufferData(tt.PIXEL_PACK_BUFFER,Bt.byteLength,tt.STREAM_READ),tt.readPixels(j,ft,at,lt,It.convert(Ft),It.convert(ye),0),tt.bindBuffer(tt.PIXEL_PACK_BUFFER,null);let Qe=Z!==null?ct.get(Z).__webglFramebuffer:null;I.bindFramebuffer(tt.FRAMEBUFFER,Qe);let ke=tt.fenceSync(tt.SYNC_GPU_COMMANDS_COMPLETE,0);return tt.flush(),await $d(tt,ke,4),tt.bindBuffer(tt.PIXEL_PACK_BUFFER,Ce),tt.getBufferSubData(tt.PIXEL_PACK_BUFFER,0,Bt),tt.bindBuffer(tt.PIXEL_PACK_BUFFER,null),tt.deleteBuffer(Ce),tt.deleteSync(ke),Bt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(L,j=null,ft=0){let at=Math.pow(2,-ft),lt=Math.floor(L.image.width*at),Bt=Math.floor(L.image.height*at),Lt=j!==null?j.x:0,Ut=j!==null?j.y:0;mt.setTexture2D(L,0),tt.copyTexSubImage2D(tt.TEXTURE_2D,ft,0,0,Lt,Ut,lt,Bt),I.unbindTexture()},this.copyTextureToTexture=function(L,j,ft=null,at=null,lt=0,Bt=0){let Lt,Ut,Xt,Zt,Ft,ye,Wt,Ce,Qe,ke=L.isCompressedTexture?L.mipmaps[Bt]:L.image;if(ft!==null)Lt=ft.max.x-ft.min.x,Ut=ft.max.y-ft.min.y,Xt=ft.isBox3?ft.max.z-ft.min.z:1,Zt=ft.min.x,Ft=ft.min.y,ye=ft.isBox3?ft.min.z:0;else{let _t=Math.pow(2,-lt);Lt=Math.floor(ke.width*_t),Ut=Math.floor(ke.height*_t),L.isDataArrayTexture?Xt=ke.depth:L.isData3DTexture?Xt=Math.floor(ke.depth*_t):Xt=1,Zt=0,Ft=0,ye=0}at!==null?(Wt=at.x,Ce=at.y,Qe=at.z):(Wt=0,Ce=0,Qe=0);let r=It.convert(j.format),l=It.convert(j.type),u;j.isData3DTexture?(mt.setTexture3D(j,0),u=tt.TEXTURE_3D):j.isDataArrayTexture||j.isCompressedArrayTexture?(mt.setTexture2DArray(j,0),u=tt.TEXTURE_2D_ARRAY):(mt.setTexture2D(j,0),u=tt.TEXTURE_2D),I.activeTexture(tt.TEXTURE0),I.pixelStorei(tt.UNPACK_FLIP_Y_WEBGL,j.flipY),I.pixelStorei(tt.UNPACK_PREMULTIPLY_ALPHA_WEBGL,j.premultiplyAlpha),I.pixelStorei(tt.UNPACK_ALIGNMENT,j.unpackAlignment);let p=I.getParameter(tt.UNPACK_ROW_LENGTH),M=I.getParameter(tt.UNPACK_IMAGE_HEIGHT),C=I.getParameter(tt.UNPACK_SKIP_PIXELS),D=I.getParameter(tt.UNPACK_SKIP_ROWS),Y=I.getParameter(tt.UNPACK_SKIP_IMAGES);I.pixelStorei(tt.UNPACK_ROW_LENGTH,ke.width),I.pixelStorei(tt.UNPACK_IMAGE_HEIGHT,ke.height),I.pixelStorei(tt.UNPACK_SKIP_PIXELS,Zt),I.pixelStorei(tt.UNPACK_SKIP_ROWS,Ft),I.pixelStorei(tt.UNPACK_SKIP_IMAGES,ye);let q=L.isDataArrayTexture||L.isData3DTexture,nt=j.isDataArrayTexture||j.isData3DTexture;if(L.isDepthTexture){let _t=ct.get(L),xt=ct.get(j),St=ct.get(_t.__renderTarget),Qt=ct.get(xt.__renderTarget);I.bindFramebuffer(tt.READ_FRAMEBUFFER,St.__webglFramebuffer),I.bindFramebuffer(tt.DRAW_FRAMEBUFFER,Qt.__webglFramebuffer);for(let he=0;he<Xt;he++)q&&(tt.framebufferTextureLayer(tt.READ_FRAMEBUFFER,tt.COLOR_ATTACHMENT0,ct.get(L).__webglTexture,lt,ye+he),tt.framebufferTextureLayer(tt.DRAW_FRAMEBUFFER,tt.COLOR_ATTACHMENT0,ct.get(j).__webglTexture,Bt,Qe+he)),tt.blitFramebuffer(Zt,Ft,Lt,Ut,Wt,Ce,Lt,Ut,tt.DEPTH_BUFFER_BIT,tt.NEAREST);I.bindFramebuffer(tt.READ_FRAMEBUFFER,null),I.bindFramebuffer(tt.DRAW_FRAMEBUFFER,null)}else if(lt!==0||L.isRenderTargetTexture||ct.has(L)){let _t=ct.get(L),xt=ct.get(j);I.bindFramebuffer(tt.READ_FRAMEBUFFER,z),I.bindFramebuffer(tt.DRAW_FRAMEBUFFER,$);for(let St=0;St<Xt;St++)q?tt.framebufferTextureLayer(tt.READ_FRAMEBUFFER,tt.COLOR_ATTACHMENT0,_t.__webglTexture,lt,ye+St):tt.framebufferTexture2D(tt.READ_FRAMEBUFFER,tt.COLOR_ATTACHMENT0,tt.TEXTURE_2D,_t.__webglTexture,lt),nt?tt.framebufferTextureLayer(tt.DRAW_FRAMEBUFFER,tt.COLOR_ATTACHMENT0,xt.__webglTexture,Bt,Qe+St):tt.framebufferTexture2D(tt.DRAW_FRAMEBUFFER,tt.COLOR_ATTACHMENT0,tt.TEXTURE_2D,xt.__webglTexture,Bt),lt!==0?tt.blitFramebuffer(Zt,Ft,Lt,Ut,Wt,Ce,Lt,Ut,tt.COLOR_BUFFER_BIT,tt.NEAREST):nt?tt.copyTexSubImage3D(u,Bt,Wt,Ce,Qe+St,Zt,Ft,Lt,Ut):tt.copyTexSubImage2D(u,Bt,Wt,Ce,Zt,Ft,Lt,Ut);I.bindFramebuffer(tt.READ_FRAMEBUFFER,null),I.bindFramebuffer(tt.DRAW_FRAMEBUFFER,null)}else nt?L.isDataTexture||L.isData3DTexture?tt.texSubImage3D(u,Bt,Wt,Ce,Qe,Lt,Ut,Xt,r,l,ke.data):j.isCompressedArrayTexture?tt.compressedTexSubImage3D(u,Bt,Wt,Ce,Qe,Lt,Ut,Xt,r,ke.data):tt.texSubImage3D(u,Bt,Wt,Ce,Qe,Lt,Ut,Xt,r,l,ke):L.isDataTexture?tt.texSubImage2D(tt.TEXTURE_2D,Bt,Wt,Ce,Lt,Ut,r,l,ke.data):L.isCompressedTexture?tt.compressedTexSubImage2D(tt.TEXTURE_2D,Bt,Wt,Ce,ke.width,ke.height,r,ke.data):tt.texSubImage2D(tt.TEXTURE_2D,Bt,Wt,Ce,Lt,Ut,r,l,ke);I.pixelStorei(tt.UNPACK_ROW_LENGTH,p),I.pixelStorei(tt.UNPACK_IMAGE_HEIGHT,M),I.pixelStorei(tt.UNPACK_SKIP_PIXELS,C),I.pixelStorei(tt.UNPACK_SKIP_ROWS,D),I.pixelStorei(tt.UNPACK_SKIP_IMAGES,Y),Bt===0&&j.generateMipmaps&&tt.generateMipmap(u),I.unbindTexture()},this.initRenderTarget=function(L){ct.get(L).__webglFramebuffer===void 0&&mt.setupRenderTarget(L)},this.initTexture=function(L){L.isCubeTexture?mt.setTextureCube(L,0):L.isData3DTexture?mt.setTexture3D(L,0):L.isDataArrayTexture||L.isCompressedArrayTexture?mt.setTexture2DArray(L,0):mt.setTexture2D(L,0),I.unbindTexture()},this.resetState=function(){J=0,O=0,Z=null,I.reset(),Rt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ti}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=Ee._getDrawingBufferColorSpace(t),e.unpackColorSpace=Ee._getUnpackColorSpace()}}});function Mr(n,t){let e=0;for(let i of t)Si(n,i)&&(e+=rn(i)>0?1:-1);return e>0}function bu(n){let t=Mu(n);return cb(t)}function Mu(n,t=n.ops.filter(e=>e.kind!=="chamfer")){let e=n.stock.top;t=t.filter(m=>m.enabled!==!1);let i=t.filter(m=>m.kind==="cutout"),s=i.length?fn(i.flatMap(m=>m.region)):[[[n.stock.minX,n.stock.minY],[n.stock.maxX,n.stock.minY],[n.stock.maxX,n.stock.maxY],[n.stock.minX,n.stock.maxY]]],a=new Map;for(let m of t){let x=m.kind==="pocket"?m.region:m.kind==="inside"?m.zBottom>0?vn(m.loops,ve(m.loops,-m.tool.diameter)):m.loops:null;if(!x?.length)continue;let v=Math.max(0,m.zBottom);a.set(v,[...a.get(v)||[],...x])}let c=[...a.keys()].sort((m,x)=>m-x),o=[],h=[];for(let m of c){let x=fn(a.get(m)),v=an(ha(vn(x,h),s),.01);m>0&&v.length&&o.push({z:m,region:v}),h=fn([...h,...x])}let f=fn(i.filter(m=>m.inner).flatMap(m=>m.region)),d=f.length?fn([...a.values()].flat().filter(m=>Mr(m[0],f))):[],g=an(fn([...vn(s,h),...vn(f,d)]),.01);return o.push({z:e,region:g}),o}function Lp(n){let t=[];for(let e of n.ops){if(e.enabled===!1)continue;let i=e.tool.diameter;e.kind==="cutout"?t.push(...vn(ve(e.region,i),e.region)):e.kind==="inside"?t.push(...vn(e.loops,ve(e.loops,-i))):e.kind==="pocket"&&t.push(...e.region)}return fn(t)}function cb(n){let t=a=>{for(let c of n)if(Mr(a,c.region))return c.z;return 0},e=[],i=[],s=(a,c,o)=>(e.push(a,c,o),e.length/3-1);for(let a of n)for(let[c,...o]of Zn(a.region)){let h=v=>v.map(([b,y])=>new jt(b,y)),f=h(c),d=o.map(h),g=Ro.triangulateShape(f,d),m=[...f,...d.flat()],x=e.length/3;for(let v of m)e.push(v.x,v.y,a.z);for(let v of g)i.push(x+v[0],x+v[1],x+v[2]);for(let v of[c,...o])for(let b=0;b<v.length;b++){let y=v[b],_=v[(b+1)%v.length],T=_[0]-y[0],A=_[1]-y[1],S=Math.hypot(T,A);if(S<1e-9)continue;let R=(y[0]+_[0])/2,E=(y[1]+_[1])/2,P=A/S*.05,w=-T/S*.05,N=Mr([R+P,E+w],a.region)?[R-P,E-w]:[R+P,E+w],U=t(N);if(U>=a.z-1e-6)continue;let B=s(y[0],y[1],a.z),G=s(_[0],_[1],a.z),H=s(_[0],_[1],U),z=s(y[0],y[1],U);i.push(B,G,H,B,H,z)}}return{positions:Float32Array.from(e),indices:Uint32Array.from(i)}}var Su=de(()=>{ta();eo()});function ai(n,t,e){let i=Math.max(1,Math.ceil((n-t)/e-1e-6));return Array.from({length:i},(s,a)=>n-(a+1)*(n-t)/i)}function Ts(n,t,e,i,s,a,c){let o=[...t.breaks(e,i),i];if(c)for(let f of c.edges(e,i))o.push(f);o.sort((f,d)=>f-d);let h=e;for(let f of o){if(f-h<1e-9)continue;let d=(h+f)/2,g=c&&c.inside(d)?c.top:-1/0,[m,x]=t.at(h),v=Math.max(s(h),g),b=n.at;b&&(Math.abs(b.z-v)>1e-6||Math.abs(b.x-m)>1e-6||Math.abs(b.y-x)>1e-6)&&n.feed(m,x,v,a);let[y,_]=t.at(f);n.feed(y,_,Math.max(s(f),g),a),h=f}}function bc(n,t,e,i,s,a,c){let o=Math.max(0,(i-s)/Math.tan(a.rampAngle*Math.PI/180));if(t.length<1||o<1e-6){let[f,d]=t.at(e);return n.feed(f,d,c&&c.inside(e)?Math.max(s,c.top):s,a.plunge),Ts(n,t,e,e+t.length,()=>s,a.feed,c),e}let h=e+o;return Ts(n,t,e,h,f=>i-(f-e)/o*(i-s),Math.min(a.feed,a.plunge*2),c),Ts(n,t,h,h+t.length,()=>s,a.feed,c),h}function db(n,t,e,i){let s=[];for(let a=t,c=0;c<500;a+=e,c++){let o=hi(an(ve(n,-a,i),.001),.005);if(!o.length)break;s.push(o)}return s}function pb(n){let t=n.map((s,a)=>s.map(c=>({loop:c,depth:a,kids:[]})));for(let s=1;s<t.length;s++)for(let a of t[s])(t[s-1].find(o=>Si(a.loop[0],o.loop)&&Math.sign(rn(o.loop))===Math.sign(rn(a.loop)))||t[s-1].find(o=>Si(a.loop[0],o.loop))||t[0][0]).kids.push(a);let e=[],i=s=>{if(!s.kids.length){e.push([s.loop]);return}for(let a of s.kids)i(a);e[e.length-1].push(s.loop)};for(let s of t[0]||[])rn(s.loop)>0&&i(s);for(let s of t[0]||[])rn(s.loop)<=0&&!t[0].some(a=>a.kids.includes(s))&&i(s);return e}function wr(n,t){let e=0;for(let i of t)Si(n,i)&&(e+=rn(i)>0?1:-1);return e>0}function mb(n,t,e){let i=Math.max(2,Math.ceil(Math.hypot(t[0]-n[0],t[1]-n[1])/.2));for(let s=1;s<i;s++){let a=s/i;if(!wr([n[0]+(t[0]-n[0])*a,n[1]+(t[1]-n[1])*a],e))return!1}return!0}function vc(n,t,e,i,s,a,c,o=null,h=null){let f=Math.min(i.stepover,e*.95),d=db(t,e+c,f,c>=.2?.05:void 0);if(!d.length)return;let g=ve(t,-(e+c)+.01),m=pb(d),x=s;for(let v of ai(s,a,i.stepdown)){for(let b of m){let y=new $n(b[0]),[_,T]=y.at(0);n.goTo(_,T,Math.max(x,h?h(_,T):x)),n.feed(_,T,x,i.plunge);let A=bc(n,y,0,x,v,i);for(let S=1;S<b.length;S++){let R=y.at(A),E=new $n(b[S]),P=E.nearest(R);if(!mb(R,E.at(P),g)){[_,T]=E.at(P);let w=n.travel?Math.max(x+1,Math.min(o??1/0,n.travel({x:R[0],y:R[1]},{x:_,y:T}))):o??x+1;n.rapid(R[0],R[1],w),n.rapid(_,T,w);let N=Math.max(x,h?h(_,T):x)+1;w>N&&n.rapid(_,T,N),n.feed(_,T,v,i.plunge)}Ts(n,E,P,P+E.length,()=>v,i.feed),y=E,A=P}}x=v}n.retract()}function Dp(n,t,e,i,s,a,c){let o=hi(an(ve(t,-e),.001),.005);for(let h of o){let f=new $n(h),[d,g]=f.at(0);n.goTo(d,g,s);for(let m of ai(s,a,c))n.feed(d,g,m,i.plunge),Ts(n,f,0,f.length,()=>m,i.feed*.9);n.retract()}}function gb(n,t,e,i,s,a,c,o){let h=e?ve(e,-(i-.05)):null,f=e?ve(e,-(i+.05)):null,d=g=>!e||wr(g,h)&&!wr(g,f);for(let g of hi(an(ve(t,-(i+.02)),.001),.005)){let m=new $n(g),x=Math.max(8,Math.ceil(m.length/.5)),v=Array.from({length:x},(_,T)=>d(m.at(T/x*m.length)));if(!v.some(Boolean))continue;let b=v.every(Boolean),y=b?0:v.indexOf(!1);for(let _=0;_<x;_++){let T=(y+_)%x;if(!v[T]||!b&&v[(T-1+x)%x])continue;let A=T;for(;A-T<x-1&&v[(A+1)%x];)A++;let S=T/x*m.length,R=b?S+m.length:(A+1)/x*m.length,[E,P]=m.at(S);if(n.goTo(E,P,Math.max(a,o(E,P))),n.feed(E,P,c,s.plunge),Ts(n,m,S,R,()=>c,s.feed*.9),n.retract(),b)break}}}function xb(n,t,e){for(let i of t)for(let s of Sr(i.loops.map(a=>[a]),n.at).map(a=>a[0])){let a=new $n(s.slice().reverse()),c=Math.max(8,Math.ceil(a.length/.25)),o=Array.from({length:c},(d,g)=>{let m=a.at(g/c*a.length);return!wr(m,i.bad)&&(!i.keep||wr(m,i.keep))});if(!o.some(Boolean))continue;let h=o.every(Boolean),f=h?0:o.indexOf(!1);for(let d=0;d<c;d++){let g=(f+d)%c;if(!o[g]||!h&&o[(g-1+c)%c])continue;let m=g;for(;m-g<c-1&&o[(m+1)%c];)m++;let x=g/c*a.length,v=h?x+a.length:m/c*a.length;if(!h&&v-x<.5)continue;let[b,y]=a.at(x);for(let _ of ai(i.z,i.z-i.depth,e.stepdown))h?(!n.at||Math.hypot(n.at.x-b,n.at.y-y)>1e-6)&&n.goTo(b,y,i.z):n.goTo(b,y,i.z),n.feed(b,y,_,e.plunge),Ts(n,a,x,v,()=>_,e.feed),h||n.retract();if(n.retract(),h)break}}}function yb(n,t,e,i,s,a,c){let o=an(vn(t,ve(ve(t,-i),i)),.01);if(!o.length)return;let h=ve(o,e+.5);for(let f of hi(an(ve(t,-e),.001),.005)){let d=new $n(f),g=Math.max(8,Math.ceil(d.length/.25)),m=Array.from({length:g},(v,b)=>h.some(y=>Si(d.at(b/g*d.length),y)));if(m.every(Boolean)){Dp(n,t,e,s,a,c,s.stepdown);return}let x=m.indexOf(!1);for(let v=0;v<g;v++){let b=(x+v)%g;if(!m[b]||m[(b-1+g)%g])continue;let y=b;for(;m[(y+1)%g]&&y-b<g;)y++;let _=b/g*d.length,T=(y+1)/g*d.length,[A,S]=d.at(_);n.goTo(A,S,a);let R=!0;for(let E of ai(a,c,s.stepdown)){let P=[...d.breaks(_,T),T],w=R?P:[...P.slice(0,-1).reverse(),_],[N,U]=d.at(R?_:T);n.feed(N,U,E,s.plunge);for(let B of w){let[G,H]=d.at(B);n.feed(G,H,E,s.feed)}R=!R}n.retract()}}}function _b(n,t,e,i,s,a){let c=Math.min(i.stepover,e*1.6),o=t.minX-e-2,h=t.maxX+e+2;for(let f of ai(s,a,i.stepdown)){let d=t.minY+e*.6;n.goTo(o,d,s),n.feed(o,d,f,i.plunge);let g=1;for(;n.feed(g>0?h:o,d,f,i.feed),!(d>=t.maxY-e*.6-1e-6);)d=Math.min(d+c,t.maxY-e*.6),n.feed(g>0?h:o,d,f,i.feed),g=-g}n.retract()}function vb(n,t,e,i){let s=t.thread,a=t.tool.cut??t.tool.diameter,c=Math.max(0,(s.major-a)/2),o=s.pitch,h=s.hand==="left"?-1:1,f=72,d=t.centers.slice();for(;d.length;){let g=n.at||d[0],m=0;d.forEach((v,b)=>{Math.hypot(v.x-g.x,v.y-g.y)<Math.hypot(d[m].x-g.x,d[m].y-g.y)&&(m=b)});let[x]=d.splice(m,1);n.goTo(x.x,x.y,t.zTop);for(let v of Np[i]||Np.balanced){let b=c*v;n.feed(x.x,x.y,t.zTop,e.plunge),n.feed(x.x,x.y,s.zLow,e.plunge);let y=s.zLow;for(let P=1;P<=f/2;P++){let w=Math.PI+Math.PI*P/(f/2);y=s.zLow+o/4*(P/(f/2)),n.feed(x.x+b/2+b/2*Math.cos(w),x.y+h*(b/2)*Math.sin(w),y,e.feed)}let _=(s.zHigh-y)/o,T=Math.max(1,Math.ceil(_*f)),A=0;for(let P=1;P<=T;P++)A=2*Math.PI*_*P/T,n.feed(x.x+b*Math.cos(A),x.y+h*b*Math.sin(A),y+o*A/(2*Math.PI),e.feed);let S=y+o*_,R=x.x+b/2*Math.cos(A),E=x.y+h*(b/2)*Math.sin(A);for(let P=1;P<=f/2;P++){let w=A+Math.PI*P/(f/2);n.feed(R+b/2*Math.cos(w),E+h*(b/2)*Math.sin(w),Math.min(t.zTop,S+o/4*(P/(f/2))),e.feed)}}n.feed(x.x,x.y,t.zTop,e.feed),n.retract()}}function bb(n,t,e,i,s,a){let c=t.slice();for(;c.length;){let o=n.at||c[0],h=0;c.forEach((x,v)=>{Math.hypot(x.x-o.x,x.y-o.y)<Math.hypot(c[h].x-o.x,c[h].y-o.y)&&(h=v)});let[f]=c.splice(h,1),d=Math.max(0,f.d/2-e),g=Math.max(1,Math.ceil((s-a)/i.stepdown-1e-6)),m=Math.max(12,Math.ceil(2*Math.PI*d/.05));n.goTo(f.x,f.y,s),n.feed(f.x,f.y,s,i.plunge),n.feed(f.x+d,f.y,s,i.feed);for(let x=1;x<=(g+1)*m;x++){let v=2*Math.PI*x/m,b=Math.max(a,s-(s-a)*x/(g*m));n.feed(f.x+d*Math.cos(v),f.y+d*Math.sin(v),b,i.feed)}n.feed(f.x,f.y,a,i.feed),n.retract()}}function Mb(n,t,e,i,s,a){let c=Math.max(.5,a*1.5);for(let o of t){n.goTo(o.x,o.y,i);let h=i;for(;h>s+1e-6;){let f=Math.max(s,h-c);h<i&&n.rapid(o.x,o.y,h+.5),n.feed(o.x,o.y,f,e.plunge),n.rapid(o.x,o.y,i+1),h=f}n.retract()}}function Op(n,t,e,i){let s=Math.max(0,Math.round(t.tabs.count));if(!t.tabs.enabled||!s)return null;let a=t.tabs.length??ui(t.material).length,c=2*e+a,o=Array.from({length:s},(f,d)=>{let g=(d+.5)/s*n;return[g-c/2,g+c/2]}),h=n;return{top:i+(t.tabs.height??ui(t.material).height),inside:f=>{let d=(f%h+h)%h;return o.some(([g,m])=>d>g&&d<m)},edges:(f,d)=>{let g=[];for(let m=Math.floor(f/h);m*h<=d;m++)for(let[x,v]of o)for(let b of[x,v]){let y=m*h+b;y>f&&y<d&&g.push(y)}return g}}}function Fp(n,t,e){if(!e.tabs.enabled)return[];let i=Math.max(0,Math.round(e.tabs.count)),s=[];for(let a of Zn(n).map(c=>c[0]))for(let c of hi(an(ve([a],t),.001),.005).filter(o=>rn(o)>0)){let o=new $n(c.slice().reverse());for(let h=0;h<i;h++)s.push(o.at((h+.5)/i*o.length))}return s}function Sb(n,t,e,i,s,a,c,o){let h=[{off:e+o,fd:i}];o>0&&h.push({off:e,fd:{...i,feed:Math.round(i.feed*.9)},finish:!0});for(let f of h)for(let d of Zn(t).map(g=>g[0])){let g=hi(an(ve([d],f.off),.001),.005).filter(m=>rn(m)>0);for(let m of g){let x=new $n(m.slice().reverse()),v=Op(x.length,c,e,0),[b,y]=x.at(0);n.goTo(b,y,s),n.feed(b,y,s,i.plunge);let _=0,T=s,A=f.finish?ai(s,a,Math.max(i.stepdown,Math.min(6*e,s-a))):ai(s,a,i.stepdown);for(let S of A)_=bc(n,x,_,T,S,f.fd,v),T=S;n.retract()}}}function wb(n,t,e,i,s,a,c,o,h){let f={...c,tabs:{...c.tabs,enabled:!!h}},d=[{off:e+o,fd:i}];o>0&&d.push({off:e,fd:{...i,feed:Math.round(i.feed*.9)},finish:!0});let g=new Set;for(let m of d)for(let x of Sr(t.map(v=>[rn(v)<0?v.slice().reverse():v]),n.at).map(v=>v[0])){let v=hi(an(ve([x],-m.off),.001),.005).filter(b=>rn(b)>0);!m.finish&&v.length&&g.add(x);for(let b of v){let y=new $n(b),_=Op(y.length,f,e,0),[T,A]=y.at(0);n.goTo(T,A,s),n.feed(T,A,s,i.plunge);let S=0,R=s,E=m.finish&&g.has(x)?ai(s,a,Math.max(i.stepdown,Math.min(6*e,s-a))):ai(s,a,i.stepdown);for(let P of E)S=bc(n,y,S,R,P,m.fd,_),R=P;n.retract()}}}function Eb(n,t,e,i,s){let a=t.slice();for(;a.length;){let c=n.at||{x:a[0].pts[0][0],y:a[0].pts[0][1]},o=0,h=!1,f=1/0;a.forEach((m,x)=>{let v=m.pts[0],b=m.pts[m.pts.length-1],y=Math.hypot(v[0]-c.x,v[1]-c.y),_=m.closed?1/0:Math.hypot(b[0]-c.x,b[1]-c.y);Math.min(y,_)<f&&(f=Math.min(y,_),o=x,h=_<y)});let[d]=a.splice(o,1),g=h?d.pts.slice().reverse():d.pts;if(d.closed){let m=new $n(g[0][0]===g.at(-1)[0]&&g[0][1]===g.at(-1)[1]?g.slice(0,-1):g),[x,v]=m.at(0);n.goTo(x,v,i),n.feed(x,v,i,e.plunge);let b=0,y=i;for(let _ of ai(i,s,e.stepdown))b=bc(n,m,b,y,_,e),y=_}else{let m=g;n.goTo(m[0][0],m[0][1],i);for(let x of ai(i,s,e.stepdown)){n.feed(m[0][0],m[0][1],x,e.plunge);for(let[v,b]of m.slice(1))n.feed(v,b,x,e.feed);m=m.slice().reverse()}}n.retract()}}function Tb(n,t,e){let i=t.diameter/2,s=n.cell,a=t.kind==="ball",c=s*Math.SQRT1_2,o=Math.ceil((i+c)/s),h=S=>a?i-Math.sqrt(Math.max(0,i*i-S*S)):0,f=[];for(let S=-o;S<=o;S++)for(let R=-o;R<=o;R++){let E=Math.max(0,Math.hypot(R,S)*s-c);E<=i+1e-9&&f.push(R,S,h(E))}let{nx:d,ny:g,h:m,x0:x,y0:v}=n,b={r:i,c:s,n:o,zFloor:e,x:S=>x+S*s,y:S=>v+S*s};b.drop=(S,R)=>{let E=-1/0;for(let P=0;P<f.length;P+=3){let w=S+f[P],N=R+f[P+1];if(w<0||N<0||w>=d||N>=g)continue;let U=m[N*d+w]-f[P+2];U>E&&(E=U)}return E===-1/0?null:Math.max(E,e)},b.dropAt=(S,R)=>{let E=(S-x)/s,P=(R-v)/s,w=(i+c)/s,N=-1/0;for(let U=Math.max(0,Math.ceil(P-w));U<=Math.min(g-1,Math.floor(P+w));U++)for(let B=Math.max(0,Math.ceil(E-w));B<=Math.min(d-1,Math.floor(E+w));B++){let G=Math.max(0,Math.hypot(B-E,U-P)*s-c);if(G>i)continue;let H=m[U*d+B]-h(G);H>N&&(N=H)}return N===-1/0?null:Math.max(N,e)},b.underAt=(S,R)=>{let E=(S-x)/s,P=(R-v)/s,w=(i+c)/s,N=e;for(let U=Math.max(0,Math.ceil(P-w));U<=Math.min(g-1,Math.floor(P+w));U++)for(let B=Math.max(0,Math.ceil(E-w));B<=Math.min(d-1,Math.floor(E+w));B++)m[U*d+B]>N&&(N=m[U*d+B]);return N};let y=1/0,_=-1,T=1/0,A=-1;for(let S=0;S<g;S++)for(let R=0;R<d;R++)m[S*d+R]!==-1/0&&(R<y&&(y=R),R>_&&(_=R),S<T&&(T=S),S>A&&(A=S));return b.box=_<0?null:{i0:Math.max(0,y-o),i1:Math.min(d-1,_+o),j0:Math.max(0,T-o),j1:Math.min(g-1,A+o)},b}function Up(n,t,e,i,s,a){let c=e[0],o=n.at;if(o&&!o.r&&Math.hypot(c.x-o.x,c.y-o.y)<=s){let f=Math.max(1,Math.ceil(Math.hypot(c.x-o.x,c.y-o.y)/(t.c/2))),d=Math.max(o.z,c.z),g=!1;for(let m=1;m<f;m++){let x=m/f,v=t.dropAt(o.x+(c.x-o.x)*x,o.y+(c.y-o.y)*x)??t.zFloor;v>o.z+(c.z-o.z)*x+.001&&(g=!0,d=Math.max(d,v))}g&&(n.feed(o.x,o.y,d+.5,i.feed),n.feed(c.x,c.y,d+.5,i.feed)),n.feed(c.x,c.y,c.z,i.plunge)}else n.goTo(c.x,c.y,t.underAt(c.x,c.y)+a),n.feed(c.x,c.y,c.z,i.plunge);let h=c;for(let f of e.slice(1))n.feed(f.x,f.y,f.z,h.z-f.z>Ab*Math.hypot(f.x-h.x,f.y-h.y)?i.plunge:i.feed),h=f}function Pb(n,t,e,i,s,a,c,o=!0){let h=Tb(t,e,a);if(!h.box)return;let{r:f,c:d}=h,{i0:g,i1:m,j0:x,j1:v}=h.box,b=e.kind==="ball"?2*Math.sqrt(Math.max(0,2*f*s-s*s)):i.stepover*.5,y=Math.max(1,Math.floor(Math.min(b,f)/d+1e-9)),_=3*y*d+1e-6,T=[];for(let A=x;A<=v;A+=y)T.push(A);T[T.length-1]!==v&&T.push(v),T.forEach((A,S)=>{let R=[],E=[];for(let P=g;P<=m;P++){let w=h.drop(P,A);if(w===null){E.length&&R.push(E),E=[];continue}E.push({x:h.x(P),y:h.y(A),z:w})}E.length&&R.push(E),S%2&&(R.reverse(),R.forEach(P=>P.reverse()));for(let P of R)Up(n,h,Bp(P,.005),i,_,c)}),o&&Ib(n,h,i,Math.min(b,f),_,c),n.retract()}function Ib(n,t,e,i,s,a){let{i0:o,i1:h,j0:f,j1:d}=t.box,g=Math.floor((h-o)/2)+1,m=Math.floor((d-f)/2)+1,x=new Float32Array(g*m),v=-1/0;for(let S=0;S<m;S++)for(let R=0;R<g;R++){let E=t.drop(o+R*2,f+S*2);x[S*g+R]=E===null?NaN:E,E!==null&&E>v&&(v=E)}let b=2*t.c,y=Cb*b,_=S=>t.x(o+S*2),T=S=>t.y(f+S*2),A=new Uint8Array(g*m);for(let S=0;S+1<m;S++)for(let R=0;R+1<g;R++){let E=x[S*g+R],P=x[S*g+R+1],w=x[(S+1)*g+R],N=x[(S+1)*g+R+1];[E,P,w,N].some(Number.isNaN)||(Math.abs(E-P)>y||Math.abs(w-N)>y||Math.abs(E-w)>y||Math.abs(P-N)>y)&&(A[S*g+R]=1)}for(let S=v-i/2;S>t.zFloor+.05;S-=i){let R=new Map,E=[],P=(B,G,H)=>{let z=H?`h${B},${G}`:`v${B},${G}`;if(!R.has(z)){let $=x[G*g+B],J=H?x[G*g+B+1]:x[(G+1)*g+B],O=(S-$)/(J-$);R.set(z,{key:z,x:H?_(B)+O*b:_(B),y:H?T(G):T(G)+O*b,segs:[]})}return R.get(z)};for(let B=0;B+1<m;B++)for(let G=0;G+1<g;G++){if(!A[B*g+G])continue;let H=x[B*g+G]>S,z=x[B*g+G+1]>S,$=x[(B+1)*g+G]>S,J=x[(B+1)*g+G+1]>S,O=[];H!==z&&O.push(P(G,B,!0)),z!==J&&O.push(P(G+1,B,!1)),$!==J&&O.push(P(G,B+1,!0)),H!==$&&O.push(P(G,B,!1));for(let Z=0;Z+1<O.length;Z+=2){let W=[O[Z],O[Z+1]];E.push(W),W[0].segs.push(W),W[1].segs.push(W)}}let w=new Set,N=[];for(let B of E){if(w.has(B))continue;w.add(B);let G=[B[0],B[1]];for(let H of[!1,!0])for(;;){let z=H?G[0]:G[G.length-1],$=z.segs.find(O=>!w.has(O));if(!$)break;w.add($);let J=$[0]===z?$[1]:$[0];H?G.unshift(J):G.push(J)}G.length>=3&&N.push(G)}let U=n.at;for(;N.length;){let B=0,G=1/0,H=!1;N.forEach((J,O)=>{for(let[Z,W]of[[J[0],!1],[J[J.length-1],!0]]){let it=U?Math.hypot(Z.x-U.x,Z.y-U.y):0;it<G&&(G=it,B=O,H=W)}});let[z]=N.splice(B,1);H&&z.reverse();let $=z.map(J=>({x:J.x,y:J.y,z:Math.max(S,t.dropAt(J.x,J.y)??S)}));Up(n,t,Bp($,.005),e,s,a),U=n.at}}}function Bp(n,t){if(n.length<3)return n;let e=new Uint8Array(n.length);e[0]=e[n.length-1]=1;let i=[[0,n.length-1]];for(;i.length;){let[s,a]=i.pop(),c=n[s],o=n[a],h=o.x-c.x,f=o.y-c.y,d=o.z-c.z,g=h*h+f*f+d*d,m=-1,x=t;for(let v=s+1;v<a;v++){let b=n[v],y=g>0?((b.x-c.x)*h+(b.y-c.y)*f+(b.z-c.z)*d)/g:0,_=Math.hypot(c.x+h*y-b.x,c.y+f*y-b.y,c.z+d*y-b.z);_>x&&(x=_,m=v)}m>=0&&(e[m]=1,i.push([s,m],[m,a]))}return n.filter((s,a)=>e[a])}function Rb(n){let t=[],e=[];n.forEach((i,s)=>{let a=[];for(let c of Zn(i.region)){let o=to([c[0]]),h=[...new Set(t.filter(d=>d.b.minX<o.maxX&&o.minX<d.b.maxX&&d.b.minY<o.maxY&&o.minY<d.b.maxY&&Qr(ha(d.last,c))>0).map(d=>d.spot))],f=h[0]||{parts:[]};h.length||e.push(f);for(let d of h.slice(1)){f.parts.push(...d.parts),e=e.filter(g=>g!==d);for(let g of[...t,...a])g.spot===d&&(g.spot=f)}f.parts.push({k:s,area:c}),a.push({k:s,b:o,last:c,spot:f})}t.length=0,t.push(...a)});for(let i of e)i.parts.sort((s,a)=>s.k-a.k);return e.map(i=>Object.assign([...i.parts[0].area],{parts:i.parts}))}function Sr(n,t){let e=c=>{let o=to([c[0]]);return[(o.minX+o.maxX)/2,(o.minY+o.maxY)/2]},i=n.map(c=>({a:c,m:e(c)})),s=[],a=t?[t.x,t.y]:i[0]?.m;for(;i.length;){let c=0;for(let h=1;h<i.length;h++)Math.hypot(i[h].m[0]-a[0],i[h].m[1]-a[1])<Math.hypot(i[c].m[0]-a[0],i[c].m[1]-a[1])&&(c=h);let[o]=i.splice(c,1);s.push(o.a),a=o.m}return s}function Lb(n,t,e,i,s,a){let c=[...new Set(n.map(h=>h.z))].sort((h,f)=>f-h),o=a;for(let h of c){if(h<t-1e-6||!wr([i,s],Nb(n,h,e)))break;o=h}return Math.max(o,t)}function Nb(n,t,e){let i=n.filter(o=>Math.abs(o.z-t)<1e-6);n.inner||=new Map;let s=`${t}|${e}`,a=n.inner.get(s);if(a&&a.n===i.length)return a.loops;let c=ve(fn(i.flatMap(o=>o.area)),-e-fb);return n.inner.set(s,{n:i.length,loops:c}),c}function kp(n){let t=n.stock.top+hb,e=[],i=null,s=(Gn[n.job.finish]||Gn.balanced).allowance,c=n.ops.some(o=>o.kind==="face"&&o.enabled)?n.analysis.top:n.stock.top;for(let o of n.ops){let h=new wu(t),f=o.kind!=="face"&&o.zTop>=n.analysis.top-1e-6?Math.max(o.zTop,c):o.zTop,d=o.tool.diameter/2,g=o.feeds,m=Math.min(o.tool.fluteLength||1/0,3*o.tool.diameter);switch(o.kind){case"face":_b(h,n.stock,d,g,f,o.zBottom);break;case"hole":if(o.bore){bb(h,o.centers,d,g,f,o.zBottom);break}case"pocket":case"step":for(let x of Sr(Zn(o.region),h.at))vc(h,x,d,g,f,o.zBottom,s),s>0&&Dp(h,x,d,g,f,o.zBottom,m);break;case"corners":{let x=n.ops.find(v=>v.id===o.after);yb(h,o.region,d,x?x.tool.diameter/2:d*2,g,f,o.zBottom);break}case"rough3d":case"rest3d":{let x=o.kind==="rough3d"?o.allowance:0,v=b=>(y,_)=>Lb(e,o.layers[b].zFrom,d,y,_,f);if(i||=new Eu(n.stock,c),h.travel=(b,y)=>i.over(b,y,d),o.kind==="rest3d"){for(let b of Sr(Rb(o.layers),h.at))for(let{k:y,area:_}of b.parts){let T=o.layers[y],A=T.zFrom>=n.analysis.top-1e-6?f:T.zFrom;vc(h,_,d,g,A,T.z,0,f+1,v(y));let S=ve(ve(_,-d),d);S.length&&o.enabled&&(e.push({zFrom:A,z:T.z,area:S}),i.layer(S,A,T.z))}h.travel=null,h.retract();break}o.layers.forEach((b,y)=>{let _=b.zFrom>=n.analysis.top-1e-6?f:b.zFrom;for(let A of Sr(Zn(b.region),h.at))vc(h,A,d,g,_,b.z,x,f+1,v(y));for(let A of Sr(Zn(b.fresh||[]),h.at))vc(h,A,d,g,f,b.z,x,f+1);x>0&&y&&gb(h,b.exact||b.region,o.layers[y-1].exact||o.layers[y-1].region,d,g,_,b.z,v(y));let T=ve(ve([...b.region,...b.fresh||[]],-(d+x)),d);T.length&&o.enabled&&(e.push({zFrom:_,z:b.z,area:T}),i.layer(T,_,b.z))}),h.travel=null,h.retract();break}case"finish3d":Pb(h,o.surface,o.tool,g,o.ridge,0,o.left??ub,o.steep!==!1);break;case"drill":Mb(h,o.centers,g,f,o.zBottom,o.tool.diameter);break;case"thread":vb(h,o,g,n.job.finish);break;case"cutout":Sb(h,o.region,d,g,f,o.zBottom,o.tabs===!1?{...n.job,tabs:{...n.job.tabs,enabled:!1}}:n.job,s);break;case"inside":wb(h,o.loops,d,g,f,o.zBottom,n.job,s,o.tabs);break;case"online":Eb(h,o.lines,g,f,o.zBottom);break;case"chamfer":xb(h,o.levels.map(x=>x.z>=n.analysis.top-1e-6?{...x,z:x.z+c-n.analysis.top}:x),g);break}o.moves=h.moves}return n}var hb,ub,fb,wu,$n,Np,Ab,Cb,Eu,Tu=de(()=>{eo();no();hb=3,ub=3.5,fb=.02;wu=class{constructor(t){this.moves=[],this.clearZ=t,this.at=null,this.travel=null}rapid(t,e,i){this.push({r:!0,x:t,y:e,z:i})}feed(t,e,i,s){this.push({x:t,y:e,z:i,f:s})}push(t){let e=this.at;e&&Math.abs(e.x-t.x)<1e-6&&Math.abs(e.y-t.y)<1e-6&&Math.abs(e.z-t.z)<1e-6||(this.moves.push(t),this.at=t)}goTo(t,e,i){let s=this.at,a=this.clearZ;s&&this.travel&&(a=Math.min(a,Math.max(this.travel(s,{x:t,y:e}),s.z,i+1))),s&&this.rapid(s.x,s.y,a),this.rapid(t,e,a),this.rapid(t,e,i+1)}retract(){this.at&&!this.travel&&this.rapid(this.at.x,this.at.y,this.clearZ)}},$n=class{constructor(t){this.p=t,this.s=[0];for(let e=1;e<=t.length;e++){let i=t[e-1],s=t[e%t.length];this.s.push(this.s[e-1]+Math.hypot(s[0]-i[0],s[1]-i[1]))}this.length=this.s[t.length]}at(t){let e=this.length,i=(t%e+e)%e,s=1;for(;s<this.s.length-1&&this.s[s]<i;)s++;let a=this.p[s-1],c=this.p[s%this.p.length],o=this.s[s]-this.s[s-1]||1,h=(i-this.s[s-1])/o;return[a[0]+(c[0]-a[0])*h,a[1]+(c[1]-a[1])*h]}breaks(t,e){let i=[],s=this.length;for(let a=Math.floor(t/s);a*s<=e;a++)for(let c=0;c<this.p.length;c++){let o=a*s+this.s[c];o>t+1e-9&&o<e-1e-9&&i.push(o)}return i}nearest([t,e]){let i=0,s=1/0;for(let a=0;a<this.p.length;a++){let c=(this.p[a][0]-t)**2+(this.p[a][1]-e)**2;c<s&&(s=c,i=this.s[a])}return i}};Np={fast:[.6,1],balanced:[.5,.8,1,1],smooth:[.4,.65,.85,1,1]};Ab=Math.tan(70*Math.PI/180);Cb=Math.tan(50*Math.PI/180);Eu=class{constructor(t,e){this.c=1,this.x0=t.minX,this.y0=t.minY,this.nx=Math.ceil((t.maxX-t.minX)/this.c)+1,this.ny=Math.ceil((t.maxY-t.minY)/this.c)+1,this.top=new Float32Array(this.nx*this.ny).fill(e)}layer(t,e,i){let{c:s,x0:a,y0:c,nx:o,ny:h,top:f}=this,d=ve(t,-(s*Math.SQRT1_2+.02));for(let g=0;g<h;g++){let m=c+g*s,x=[];for(let v of d)for(let b=0;b<v.length;b++){let[y,_]=v[b],[T,A]=v[(b+1)%v.length];_<=m!=A<=m&&x.push(y+(m-_)/(A-_)*(T-y))}x.sort((v,b)=>v-b);for(let v=0;v+1<x.length;v+=2)for(let b=Math.max(0,Math.ceil((x[v]-a)/s));b<=Math.min(o-1,Math.floor((x[v+1]-a)/s));b++){let y=g*o+b;f[y]<=e+1e-6&&i<f[y]&&(f[y]=i)}}}over(t,e,i){let{c:s,x0:a,y0:c,nx:o,ny:h,top:f}=this,d=(i+1.5*s)/s,g=Math.max(1,Math.ceil(Math.hypot(e.x-t.x,e.y-t.y)/(s/2))),m=-1/0;for(let x=0;x<=g;x++){let v=(t.x+(e.x-t.x)*x/g-a)/s,b=(t.y+(e.y-t.y)*x/g-c)/s;for(let y=Math.max(0,Math.ceil(b-d));y<=Math.min(h-1,Math.floor(b+d));y++)for(let _=Math.max(0,Math.ceil(v-d));_<=Math.min(o-1,Math.floor(v+d));_++)(_-v)**2+(y-b)**2<=d*d&&f[y*o+_]>m&&(m=f[y*o+_])}return m+1}}});function wc(n){let t=n.flatMap(v=>v.pts);if(!t.length)return{shapes:[],size:[0,0],nest:[]};let e=Math.min(...t.map(v=>v[0])),i=Math.min(...t.map(v=>v[1])),s=Math.max(...t.map(v=>v[0])),a=Math.max(...t.map(v=>v[1])),c=n.map(v=>({...v,pts:v.pts.map(([b,y])=>[b-e,y-i])})),o=c.map(v=>v.closed&&v.pts.length>2&&Math.abs(rn(Vp(v.pts)))>As?Xp(Vp(v.pts)):null),h=o.map(v=>v?rn(v):0),f=c.map((v,b)=>{let y=v.pts[0],_=-1,T=0;return o.forEach((A,S)=>{!A||S===b||h[S]<=h[b]||!Si(y,A)||(T++,(_<0||h[S]<h[_])&&(_=S))}),{parent:_,depth:T}}),d=o.map(v=>v?Db(v):null),g=v=>c[v].layer??c[v].color,m=(v,b)=>d[v]&&d[b]&&g(v)===g(b)&&Math.hypot(d[v].x-d[b].x,d[v].y-d[b].y)<.05;f.forEach((v,b)=>{if(v.step=null,!d[b])return;let y=0,_=b;for(let A=v.parent;A>=0&&m(b,A);A=f[A].parent)y++,_=A;let T=f.some((A,S)=>A.parent===b&&m(b,S));(y||T)&&f[_].depth>0&&(v.step=y,v.last=!T,v.top=_)});let x=new Map;return f.forEach(v=>{v.top!==void 0&&v.step!==null&&x.set(v.top,(x.get(v.top)||0)+1)}),f.forEach(v=>{v.top!==void 0&&v.step!==null&&(v.of=x.get(v.top))}),{shapes:c,loops:o,areas:h,nest:f,circles:d,size:[s-e,a-i]}}function Db(n){if(n.length<12)return null;let t=n.reduce((a,c)=>a+c[0],0)/n.length,e=n.reduce((a,c)=>a+c[1],0)/n.length,i=n.map(a=>Math.hypot(a[0]-t,a[1]-e)),s=i.reduce((a,c)=>a+c,0)/i.length;return s>0&&i.every(a=>Math.abs(a-s)<=Math.max(.01*s,.02))&&Math.abs(Math.abs(rn(n))-Math.PI*s*s)<=.03*Math.PI*s*s?{x:t,y:e,r:s}:null}function Wp(n,t){if(!n.loops[t])return"online";let e=n.nest[t];return e.step!==null&&e.step!==void 0?e.last?"inside":"pocket":e.depth%2?"inside":"outside"}function Yp(n,t=6){return{material:"mdf",finish:"balanced",stock:{fit:!0,margin:5,width:n.size[0]+10,depth:n.size[1]+10,thickness:t},zero:{xy:"front-left",z:"top"},tabs:{enabled:!0,count:4,...ui("mdf")},throughDepth:.3,groups:{},layers:{},shapes:{},depths:{pocket:3,online:1},disabled:{},toolOverride:{}}}function Au(n){let t=new Map,e=a=>Math.round(a*100)/100,i=new Set(n.shapes.map(a=>a.layer??a.color)).size>1;n.shapes.forEach((a,c)=>{let o=Wp(n,c),h=n.nest[c],f=n.circles[c],d=i?`${a.layer??a.color}:`:"",g,m,x;if(!n.loops[c])g=`line:${d}`,m="line",x="line";else if(o==="outside"&&h.depth===0)g=`outline:${d}`,m="outline",x="outline";else if(f&&h.step!==null&&h.step!==void 0){let v=c;for(;n.nest[v].step>0;)v=n.nest[v].parent;let b=[];for(let y=v;y>=0;)b.push(e(2*n.circles[y].r)),y=n.nest.findIndex((T,A)=>T.parent===y&&n.nest[A].step===n.nest[y].step+1);g=`cb:${d}${b.join("/")}:${h.step}`,m="counterbore",x={d:2*f.r,sizes:b,step:h.step,last:h.last}}else if(f)g=`circle:${d}${e(2*f.r)}:${o}`,m="circle",x={d:2*f.r};else{let v=to([n.loops[c]]),b=v.maxX-v.minX,y=v.maxY-v.minY,_=Math.abs(n.areas[c]-b*y)<.01*b*y;g=`shape:${d}${e(b)}x${e(y)}:${Math.round(n.areas[c])}:${o}`,m=_?"rect":"shape",x={w:b,h:y}}t.has(g)||t.set(g,{key:g,kind:m,label:x,layer:i?a.layer??a.color:null,idx:[],cut:o}),t.get(g).idx.push(c)});let s={outline:0,counterbore:1,circle:2,rect:3,shape:4,line:5};return[...t.values()].sort((a,c)=>s[a.kind]-s[c.kind]||(c.label?.d||0)-(a.label?.d||0)||a.key.localeCompare(c.key))}function Tr(n){let t=new Map;for(let e of n)for(let i of e.idx)t.set(i,e.key);return t}function rs(n,t,e,i=null){let s=n.shapes[e],a=t.shapes?.[e]||i&&t.groups?.[i.get(e)],c=t.layers?.[s.layer??s.color],o=a?.cut||c?.cut||Wp(n,e),h=n.nest[e],f=o==="pocket"&&h.step!==null&&h.step!==void 0,d=t.stock?.thickness,g=()=>{let x=t.depths.pocket*(h.step+1);return d>0?Math.min(x,d*(h.step+1)/(h.of||2)):x},m=a?.depth!==void 0?a.depth:c?.depth!==void 0?c.depth:f?g():o==="pocket"||o==="online"?t.depths[o]:null;return{cut:o==="online"||o==="off"||n.loops[e]?o:"online",depth:m}}function Ec(n,t){let[e,i]=n.size,s=t.stock,a=s.fit?e+2*s.margin:Math.max(e,s.width),c=s.fit?i+2*s.margin:Math.max(i,s.depth),o=s.thickness;return{minX:(e-a)/2,minY:(i-c)/2,maxX:(e+a)/2,maxY:(i+c)/2,bottom:0,top:o,width:a,depth:c,thickness:o}}function Cu(n,t){let e=t.xy.split("-"),i=(n.minX+n.maxX)/2,s=(n.minY+n.maxY)/2;return e.includes("left")&&(i=n.minX),e.includes("right")&&(i=n.maxX),e.includes("front")&&(s=n.minY),e.includes("back")&&(s=n.maxY),{x:i,y:s,z:t.z==="bed"?n.bottom:n.top}}function $p(n,t,e,i={}){let s=O=>Wc(O,e.units),a=Ec(n,e),c=a.top,o=[],h=[],f=t.filter(O=>O.kind==="flat").sort((O,Z)=>Z.diameter-O.diameter),d=e.material==="aluminum"?8:12.8,g=new Set,m=O=>(g.add(O.id),O),x=O=>O==null||O>=c-1e-6?-e.throughDepth:Math.max(c-O,0),v=O=>c-O,b=O=>O==null||O>=c-1e-6?"through":`${s(O)} deep`,y=new Map,_=Tr(Au(n));n.shapes.forEach((O,Z)=>{let W=rs(n,e,Z,_);if(W.cut==="off")return;let it=x(W.depth);if(it>=c-1e-6)return;let ot=`${W.cut}@${it}`;y.has(ot)||y.set(ot,{cut:W.cut,z:it,depth:W.depth,idx:[]}),y.get(ot).idx.push(Z)});let T=[...y.values()],A=n.shapes.map((O,Z)=>rs(n,e,Z,_).cut),S=O=>{for(let Z=n.nest[O].parent;Z>=0;Z=n.nest[Z].parent)if(A[Z]==="pocket")return!0;return!1},R=O=>T.filter(Z=>Z.cut===O).sort((Z,W)=>W.z-Z.z),E=(O,Z)=>Qr(ve(ve(O,-Z),Z))/Math.max(Qr(O),As);for(let O of R("pocket")){let Z=n.loops.map((wt,qt)=>wt&&A[qt]==="outside"&&O.idx.some(Kt=>Hp(n,qt,Kt))?wt:null).filter(Boolean),W=an(vn(zp(O.idx.map(wt=>n.loops[wt])),fn(Z)),As);if(!W.length)continue;let it=f.filter(wt=>wt.diameter<=d&&Mc(wt,v(O.z))&&ve(W,-wt.diameter/2).length);if(!it.length){o.push({kind:"notool",text:`No end mill fits the pockets ${b(O.depth)}.`});continue}let ot=it.map(wt=>({t:wt,c:E(W,wt.diameter/2)})),Mt=ot.find(wt=>wt.c>=.95)||ot.reduce((wt,qt)=>qt.c>wt.c?qt:wt);Mt.c<.995&&o.push({kind:"corners",text:`${Mt.t.name} leaves the pockets' tightest corners rounded.`}),h.push({id:`pocket@${O.z}`,kind:"pocket",label:O.idx.length>1?`Clear ${O.idx.length} pockets`:"Clear the pocket",tool:m(Mt.t),zTop:c,zBottom:O.z,region:W,detail:b(O.depth)})}let P=O=>O.slice().sort((Z,W)=>Math.abs(Z.diameter-6.35)-Math.abs(W.diameter-6.35))[0]||null,w=(O,Z)=>{let W=f.filter(it=>it.diameter<=d&&Mc(it,O)&&Z(it));return W.find(it=>g.has(it.id))||P(W)},N=O=>A[O]==="outside"&&n.loops[O]&&!S(O),U=O=>n.nest[O].depth>0,B=(Gn[e.finish]||Gn.balanced).allowance,G=(O,Z)=>ve([Z],-(O.diameter/2+B+.1)).length>0;function H(O,Z,W){let it=f.filter(qt=>qt.diameter<=d&&Mc(qt,v(O.z))),ot=P(it),Mt=new Map,wt=0;for(let qt of Z){let Kt=n.loops[qt],ne=it.filter(pt=>G(pt,Kt)),ut=ne.find(pt=>g.has(pt.id))||P(ne);if(!ut){wt++;continue}Mt.has(ut)||Mt.set(ut,[]),Mt.get(ut).push(Kt)}wt&&o.push({kind:"notool",text:`No end mill fits inside ${wt>1?`${wt} shapes`:"a shape"} cut ${b(O.depth)} with room to move: left uncut.`});for(let qt=!0;qt&&Mt.size>1;){qt=!1;for(let[Kt,ne]of[...Mt].filter(([ut])=>!g.has(ut.id)&&ut!==ot).sort((ut,pt)=>ut[1].length-pt[1].length)){let ut=[...Mt.keys()].filter(pt=>pt!==Kt).sort((pt,Tt)=>Tt.diameter-pt.diameter);if(ne.every(pt=>ut.some(Tt=>G(Tt,pt)))){for(let pt of ne)Mt.get(ut.find(Tt=>G(Tt,pt))).push(pt);Mt.delete(Kt),qt=!0;break}}}for(let[qt,Kt]of[...Mt].sort((ne,ut)=>ut[0].diameter-ne[0].diameter))h.push({id:`inside@${O.z}#${qt.id}${W?":tabs":""}`,kind:"inside",label:`${W?"Cut round the windows":Kt.length>1?`Cut ${Kt.length} shapes inside`:"Cut inside the shape"}`,tool:m(qt),zTop:c,zBottom:O.z,loops:Kt,region:Kt,tabs:W&&O.z<0&&e.tabs.enabled,detail:`${b(O.depth)}${W&&O.z<0&&e.tabs.enabled?" \xB7 tabs hold the parts in them":""}`})}for(let O of R("inside")){let Z=W=>n.shapes.some((it,ot)=>N(ot)&&Hp(n,ot,W));H(O,O.idx.filter(W=>!Z(W)),!1),H(O,O.idx.filter(Z),!0)}for(let O of R("outside"))for(let Z of[!0,!1]){let W=O.idx.filter(wt=>N(wt)&&U(wt)===Z);if(!W.length)continue;let it=zp(W.map(wt=>n.loops[wt])),ot=w(v(O.z),()=>!0);if(!ot){o.push({kind:"notool",text:`No end mill is long enough to cut out ${b(O.depth)} (${s(v(O.z))}).`});continue}let Mt=O.z<0;h.push({id:`cutout${Z?"-in":""}@${O.z}`,kind:"cutout",inner:Z,label:Z?"Cut out the parts in the windows":"Cut out the parts",tool:m(ot),zTop:c,zBottom:O.z,region:it,tabs:Mt,detail:`${b(O.depth)}${Mt?` \xB7 ${e.tabs.enabled?`${e.tabs.count} tabs each`:"no tabs"}`:""}`})}for(let O of R("online")){let Z=f.filter(ot=>Mc(ot,v(O.z))),W=Z.filter(ot=>g.has(ot.id)).sort((ot,Mt)=>ot.diameter-Mt.diameter)[0]||Z.sort((ot,Mt)=>ot.diameter-Mt.diameter)[0];if(!W){o.push({kind:"notool",text:`No end mill reaches ${b(O.depth)} for the lines.`});continue}let it=O.idx.map(ot=>({pts:n.shapes[ot].pts,closed:!!n.loops[ot]}));h.push({id:`online@${O.z}`,kind:"online",label:"Cut on the lines",tool:m(W),zTop:c,zBottom:O.z,lines:it,count:O.idx.length,detail:`${O.idx.length} line${O.idx.length>1?"s":""} \xB7 ${b(O.depth)} \xB7 a groove ${s(W.diameter)} wide`})}let z=O=>O.kind==="online"?0:O.kind==="pocket"?1:O.kind==="cutout"&&O.inner?2:O.kind==="inside"?3:4;h.sort((O,Z)=>z(O)-z(Z)||Z.zBottom-O.zBottom);for(let O of h){let Z=e.toolOverride?.[O.id];if(Z){let W=t.find(it=>it.id===Z);W&&(O.tool=W)}O.enabled=!e.disabled?.[O.id],O.feeds=Xc(O.tool,e.material,e.finish,i)}if(e.chamfer?.size>0){let O=Ob({a:n,job:e,tools:t,stock:a,ops:h,warnings:o,L:s});O&&(O.enabled=!e.disabled?.[O.id],O.feeds=Xc({...O.tool,diameter:Math.min(O.tool.diameter,2*(O.size+Er))},e.material,e.finish,i),h.push(O))}let $=e.tabs.enabled?e:{...e,tabs:{...e.tabs,enabled:!1}};return{analysis:{top:c,size:[n.size[0],n.size[1],c]},stock:a,zero:Cu(a,e.zero),ops:h,warnings:o,job:$}}function Ob({job:n,tools:t,stock:e,ops:i,warnings:s,L:a}){let c=n.chamfer.size,o=n.chamfer.edges||"all",h=e.top,f=t.filter(O=>(O.kind==="vbit"||O.kind==="chamfer")&&O.angle>0&&O.angle<180),d=O=>O.angle*Math.PI/360,g=O=>O.diameter/2>=c+Er+.1&&(!O.fluteLength||O.fluteLength>=(c+Er)/Math.tan(d(O))-1e-6),x=t.find(O=>O.id===n.toolOverride?.chamfer&&f.includes(O))||f.filter(g).sort((O,Z)=>Math.abs(O.angle-90)-Math.abs(Z.angle-90)||O.diameter-Z.diameter)[0];if(!x)return s.push({kind:"chamfer",text:f.length?`No V-bit in your Tool Library is wide enough for a ${a(c)} chamfer.`:"Adding a chamfer to top surfaces needs a V-bit in your Tool Library."}),null;let v=(c+Er)/Math.tan(d(x)),b={stock:e,ops:i},y=Mu(b),_=Lp(b);if(!_.length)return s.push({kind:"chamfer",text:"No cut makes an edge to chamfer."}),null;let T=[[e.minX,e.minY],[e.maxX,e.minY],[e.maxX,e.maxY],[e.minX,e.maxY]],A=fn(y.flatMap(O=>O.region)),S=an(vn(vn([T],_),A),As),R=i.filter(O=>O.enabled!==!1&&O.zBottom>0&&O.kind!=="online"),E=O=>fn([...y.filter(Z=>Z.z>O).flatMap(Z=>Z.region),...h>O?S:[],...R.filter(Z=>Z.zBottom>O).flatMap(Z=>Z.kind==="cutout"?vn(ve(Z.region,Z.tool.diameter),Z.region):Z.kind==="inside"?vn(Z.loops,ve(Z.loops,-Z.tool.diameter)):Z.region)]),P=n.tabs.height??ui(n.material).height,w=n.tabs.length??ui(n.material).length,N=O=>{if(!n.tabs.enabled)return[];let Z=[];for(let W of i){if(W.enabled===!1||!W.tabs||W.zBottom>0)continue;let it=W.tool.diameter/2,ot=W.kind==="cutout"?Fp(W.region,it,n):W.kind==="inside"?Fb(W.loops,it,n):[];for(let Mt of ot)Z.push({q:Mt,rad:w/2+it+O+.5})}return Z.map(({q:[W,it],rad:ot})=>Array.from({length:24},(Mt,wt)=>[W+ot*Math.cos(wt*Math.PI/12),it+ot*Math.sin(wt*Math.PI/12)]))},U=ve(_,.05),B=x.diameter/2,G=c+Er,H=!1,z=!1,$=[],J=[...new Set(y.map(O=>O.z))].filter(O=>O>ss).sort((O,Z)=>Z-O);for(let O of J){let Z=O-v;if(Z<-n.throughDepth+.1){H=!0;continue}let W=an(fn(y.filter(Tt=>Tt.z>=O-ss).flatMap(Tt=>Tt.region)),As);if(!W.length)continue;let it=O<h-ss?E(O+ss):[],ot=an(vn(E(Math.max(Z,ss)+ss),ve(W,.01)),As),Mt=n.tabs.enabled&&Z<=Math.max(ss,P+.2),wt=Mt?N(B):[],qt=Math.min(B,(h-Z)*Math.tan(d(x))),Kt=fn([...O<h-ss?ve(it,B+.1):[],...ve(S,qt+.1),...ve(ot,G+.1),...wt]),ne=[];for(let[Tt,...ee]of Zn(Cf(W,Er)))o!=="inside"&&ne.push(Tt),o!=="outside"&&ne.push(...ee);let ut=Tt=>!Mr(Tt,U)||Mr(Tt,Kt),pt=ne.filter(Tt=>{let ee=0;for(let Nt=0;Nt<Tt.length;Nt++){let re=Tt[Nt],Be=Tt[(Nt+1)%Tt.length],fe=Math.hypot(Be[0]-re[0],Be[1]-re[1]),pe=Math.max(1,Math.ceil(fe/.25));for(let be=0;be<pe;be++)if(ut([re[0]+(Be[0]-re[0])*be/pe,re[1]+(Be[1]-re[1])*be/pe]))ee=0;else if((ee+=fe/pe)>=.5)return!0}return!1});pt.length&&($.push({z:O,depth:v,loops:pt,bad:Kt,keep:U}),Mt&&wt.length&&o!=="inside"&&(z=!0))}return H&&s.push({kind:"chamfer",text:`Some edges are too low to chamfer ${a(c)} without cutting the spoilboard.`}),$.length?(z&&s.push({kind:"chamfer",text:"The chamfer lifts over the tabs: sand those spots after breaking the part free."}),{id:"chamfer",kind:"chamfer",label:"Add Chamfer to top surfaces",tool:x,zTop:h,zBottom:Math.min(...$.map(O=>O.z-O.depth)),region:fn(y.flatMap(O=>O.region)),levels:$,show:$.map(O=>({z:O.z,loops:O.loops})),size:c,angle:x.angle/2,detail:`${a(c)} wide \xB7 ${Math.round(x.angle)}\xB0 bit \xB7 ${{all:"all edges",outside:"outside edges",inside:"pockets and holes"}[o]}`}):(s.push({kind:"chamfer",text:`No edge can take a ${a(c)} chamfer with ${x.name}.`}),null)}function Fb(n,t,e){let i=Math.max(0,Math.round(e.tabs.count)),s=[];for(let a of n)for(let c of hi(an(ve([Xp(a)],-t),.001),.005).filter(o=>rn(o)>0)){let o=c.map((f,d)=>Math.hypot(c[(d+1)%c.length][0]-f[0],c[(d+1)%c.length][1]-f[1])),h=o.reduce((f,d)=>f+d,0);for(let f=0;f<i;f++){let d=(f+.5)/i*h,g=0;for(;g<c.length-1&&d>o[g];)d-=o[g++];let m=c[g],x=c[(g+1)%c.length],v=o[g]?d/o[g]:0;s.push([m[0]+(x[0]-m[0])*v,m[1]+(x[1]-m[1])*v])}}return s}function Hp(n,t,e){if(!n.loops[e]||n.areas[t]>=n.areas[e])return!1;for(let i=n.nest[t].parent;i>=0;i=n.nest[i].parent)if(i===e)return!0;return!1}function Tc(n){let t=[];for(let e of n.ops)e.enabled&&!t.some(i=>i.id===e.tool.id)&&t.push(e.tool);return t}var Sc,As,ss,Er,zp,Gp,Mc,Vp,Xp,qp=de(()=>{eo();no();Yc();Su();Tu();Sc={outside:"Outer (part)",inside:"Inner (perimeter)",pocket:"Inner (clearing)",online:"On the line",off:"Off"},As=.01,ss=1e-4,Er=.25,zp=n=>an(ve(ve(fn(n),.01),-.01),As),Gp=["back-left","back-center","back-right","left-center","center","right-center","front-left","front-center","front-right"],Mc=(n,t)=>!n.fluteLength||n.fluteLength+1e-6>=t,Vp=n=>n.length>2&&n[0][0]===n.at(-1)[0]&&n[0][1]===n.at(-1)[1]?n.slice(0,-1):n,Xp=n=>rn(n)<0?n.slice().reverse():n});function Zp(n,t={}){let{name:e="part",numbering:i="slot",safeZHeightMm:s=null,spindleDelay:a=3}=t,c=Number.isFinite(s)?`G53 G0 Z${os(s)}`:"G53 G0 Z0",o=n.zero,h=n.stock,f=[Ar(`ncCAM: ${e}`),Ar(`Stock ${os(h.width)} x ${os(h.depth)} x ${os(h.thickness)} mm, ${(cs[n.job.material]||{}).name||n.job.material}, ${(Gn[n.job.finish]||{}).name||n.job.finish}`),Ar(`Zero: X Y at the ${Bb[n.job.zero.xy]||n.job.zero.xy}, Z on ${n.job.zero.z==="bed"?"the bed":"top of the stock"}`)],d=n.ops.filter(b=>b.enabled&&b.moves&&b.moves.length);for(let b of[...new Map(d.map(y=>[y.tool.id,y.tool])).values()])f.push(Ar(`T${hs(b,i)}: ${b.name}, ${os(b.diameter)} mm`));f.push("G21 G90 G94 G17");let g=null,m={},x=null,v=null;for(let b of d){(!g||b.tool.id!==g.id)&&(g&&f.push("M5"),f.push(c,`M6 T${hs(b.tool,i)}`,Ar(b.tool.name)),g=b.tool,f.push(`M3 S${b.feeds.rpm}`),a>0&&f.push(`G4 P${a}`),m={},x=null,v=null),f.push(Ar(`${b.label}${b.detail?": "+b.detail:""}`));for(let y of b.moves){let _=os(y.x-o.x),T=os(y.y-o.y),A=os(y.z-o.z);if(y.r&&(_!==m.x||T!==m.y)&&A!==m.z){let P=m.z===void 0||+A<+m.z?[`X${_} Y${T}`,`Z${A}`]:[`Z${A}`,`X${_} Y${T}`];for(let w of P)f.push(`${v==="G0"?"":"G0 "}${w}`),v="G0";m={x:_,y:T,z:A};continue}let S=y.r?"G0":"G1",R=S===v?"":S;_!==m.x&&(R+=` X${_}`),T!==m.y&&(R+=` Y${T}`),A!==m.z&&(R+=` Z${A}`),!y.r&&y.f!==x&&(R+=` F${Math.round(y.f)}`,x=y.f),R=R.trim(),!(!R||R===S)&&(f.push(R),v=S,m={x:_,y:T,z:A})}}return f.push("M5",c,"M30",""),f.join(`
`)}function Jp(n,{maxRapid:t=5e3,spindleDelay:e=3,toolChange:i=30}={}){let s=0,a=null,c=null;for(let o of n.ops){if(!o.enabled||!o.moves)continue;(!c||o.tool.id!==c.id)&&(s+=e+(c?i:0),c=o.tool);let h=0;for(let f of o.moves){if(a){let d=Math.hypot(f.x-a.x,f.y-a.y,f.z-a.z);h+=d/(f.r?t:f.f)*60}a=f}o.seconds=h,s+=h}return s}var os,Ub,Ar,Bb,jp=de(()=>{no();os=n=>{let t=(Math.round(n*1e3)/1e3).toFixed(3).replace(/\.?0+$/,"");return t==="-0"?"0":t},Ub={"\xD7":"x","\xB7":"-",\u00D8:"D","\xB0":" deg","\u2019":"'","\u2026":"..."},Ar=n=>`(${String(n).replace(/\(/g,"[").replace(/\)/g,"]").replace(/[^\x20-\x7e]/g,t=>Ub[t]??"")})`,Bb={"back-left":"back left corner","back-center":"back edge, middle","back-right":"back right corner","left-center":"left edge, middle",center:"center","right-center":"right edge, middle","front-left":"front left corner","front-center":"front edge, middle","front-right":"front right corner"}});function Pu(n,t){let e=(n.kind==="threadmill"?n.neck:n.diameter)/2,i=Math.ceil(e/t),s=[];for(let c=-i;c<=i;c++)for(let o=-i;o<=i;o++){let h=Math.hypot(o,c)*t;if(h>e+1e-6)continue;let f=Math.min(h,e),d=0;if(n.kind==="ball")d=e-Math.sqrt(Math.max(0,e*e-f*f));else if(n.kind==="vbit"||n.kind==="chamfer"||n.kind==="drill"){let g=(n.angle||(n.kind==="drill"?118:90))*Math.PI/360;d=f/Math.tan(g)}s.push(o,c,d,h)}let a=Float32Array.from(s);return a.inner=Math.max(0,e-t*Math.SQRT1_2),a}function kb(n,t,e,i,s,a){let c=Math.hypot(i.x-e.x,i.y-e.y),o=Math.max(1,Math.ceil(c/(n.cell*.5))),h=!1;for(let f=s?0:1;f<=o;f++){let d=f/o,g=(e.x+(i.x-e.x)*d-n.x0)/n.cell,m=(e.y+(i.y-e.y)*d-n.y0)/n.cell,x=e.z+(i.z-e.z)*d;if(x>=n.top)continue;let v=Math.round(g),b=Math.round(m);for(let y=0;y<t.length;y+=4){let _=v+t[y],T=b+t[y+1];if(_<0||T<0||_>=n.nx||T>=n.ny)continue;let A=T*n.nx+_,S=x+t[y+2];if(n.h[A]>S+1e-4){if(s){n.h[A]>S+.05&&t[y+3]<=t.inner&&(h=!0);continue}n.h[A]=S,n.op[A]=a+1}}}return h}function Kp(n){let t=n.nx*n.ny;return n.sx=new Float32Array(t),n.sy=new Float32Array(t),n.wx=new Float32Array(t),n.wy=new Float32Array(t),n.gap=new Float32Array(t).fill(1/0),n.deep=new Float32Array(t).fill(-1/0),n}function Iu(n,t,e,i,s){let a=(t.kind==="threadmill"?t.neck:t.diameter)/2,c=n.cell,o=a/c,h=t.kind==="ball"?H=>a-Math.sqrt(Math.max(0,a*a-H*H)):t.kind==="vbit"||t.kind==="chamfer"||t.kind==="drill"?(H=>z=>z/H)(Math.tan((t.angle||(t.kind==="drill"?118:90))*Math.PI/360)):()=>0,f=!t.kind||t.kind==="flat"||t.kind==="surfacing"||t.kind==="threadmill",{h:d,sx:g,sy:m,wx:x,wy:v,gap:b,deep:y,nx:_,ny:T}=n,A=1.5*c,S=o+1.5,R=(H,z,$,J)=>{let O=Math.hypot(z,$);if(O>S)return;let Z=O*c;if(Z<=a){let W=J+h(Z);if(d[H]>W+1e-4)d[H]=W,n.op[H]=s+1,b[H]=1/0,y[H]=-1/0;else if(d[H]<W-1e-4)return;a-Z>y[H]&&(y[H]=a-Z,f&&a-Z<A&&O>1e-6?(g[H]=z/O*(a-Z),m[H]=$/O*(a-Z),x[H]=-z/O,v[H]=-$/O):(g[H]=0,m[H]=0,x[H]=0,v[H]=0))}else f&&d[H]>J+1e-4&&Z-a<b[H]&&(b[H]=Z-a,g[H]=z/O*(a-Z),m[H]=$/O*(a-Z),x[H]=-z/O,v[H]=-$/O)},E=(e.x-n.x0)/c,P=(e.y-n.y0)/c,w=(i.x-n.x0)/c,N=(i.y-n.y0)/c;if(Math.abs(i.z-e.z)<1e-9){if(e.z>=n.top)return;let H=w-E,z=N-P,$=H*H+z*z,J=Math.max(0,Math.floor(Math.min(E,w)-S)),O=Math.min(_-1,Math.ceil(Math.max(E,w)+S)),Z=Math.max(0,Math.floor(Math.min(P,N)-S)),W=Math.min(T-1,Math.ceil(Math.max(P,N)+S));for(let it=Z;it<=W;it++)for(let ot=J;ot<=O;ot++){let Mt=$>0?Math.max(0,Math.min(1,((ot-E)*H+(it-P)*z)/$)):0;R(it*_+ot,ot-(E+H*Mt),it-(P+z*Mt),e.z)}return}let U=Math.hypot(i.x-e.x,i.y-e.y),B=Math.max(1,Math.ceil(U/(c*.5))),G=Math.ceil(S);for(let H=1;H<=B;H++){let z=H/B,$=E+(w-E)*z,J=P+(N-P)*z,O=e.z+(i.z-e.z)*z;if(O>=n.top)continue;let Z=Math.max(0,Math.floor($-G)),W=Math.min(_-1,Math.ceil($+G)),it=Math.max(0,Math.floor(J-G)),ot=Math.min(T-1,Math.ceil(J+G));for(let Mt=it;Mt<=ot;Mt++)for(let wt=Z;wt<=W;wt++)R(Mt*_+wt,wt-$,Mt-J,O)}}function Qp(n,t){let e=new Ni(n.stock,t||Ni.cellFor(n.stock)),i=[];return n.ops.forEach((s,a)=>{if(!s.enabled||!s.moves)return;let c=Pu(s.tool,e.cell),o=null;for(let h of s.moves)o&&kb(e,c,o,h,!!h.r,a)&&i.push({op:s.id,at:h}),o=h}),{hm:e,collisions:i}}var Ni,tm=de(()=>{Ni=class{constructor(t,e){this.cell=e,this.x0=t.minX,this.y0=t.minY,this.nx=Math.max(2,Math.ceil((t.maxX-t.minX)/e)+1),this.ny=Math.max(2,Math.ceil((t.maxY-t.minY)/e)+1),this.h=new Float32Array(this.nx*this.ny).fill(t.top),this.op=new Uint8Array(this.nx*this.ny),this.top=t.top,this.bottom=t.bottom}static cellFor(t,e=600*600){let i=(t.maxX-t.minX)*(t.maxY-t.minY);return Math.max(.1,Math.sqrt(i/e))}}});var Ac=de(()=>{Nr();qu();vf();Sf();wf();qp();Su();Tu();jp();tm();no();Yc();eo()});function Vb(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function Hb(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function Gb(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(sm),this.state=Ue.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:let t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function Xb(n){let t;switch(n.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case ji.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=Ue.DOLLY;break;case ji.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=Ue.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=Ue.ROTATE}break;case ji.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=Ue.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=Ue.PAN}break;default:this.state=Ue.NONE}this.state!==Ue.NONE&&this.dispatchEvent(Nu)}function Wb(n){switch(this.state){case Ue.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case Ue.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case Ue.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function Yb(n){this.enabled===!1||this.enableZoom===!1||this.state!==Ue.NONE||(n.preventDefault(),this.dispatchEvent(Nu),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent(sm))}function $b(n){this.enabled!==!1&&this._handleKeyDown(n)}function qb(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case Ki.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(n),this.state=Ue.TOUCH_ROTATE;break;case Ki.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(n),this.state=Ue.TOUCH_PAN;break;default:this.state=Ue.NONE}break;case 2:switch(this.touches.TWO){case Ki.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=Ue.TOUCH_DOLLY_PAN;break;case Ki.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=Ue.TOUCH_DOLLY_ROTATE;break;default:this.state=Ue.NONE}break;default:this.state=Ue.NONE}this.state!==Ue.NONE&&this.dispatchEvent(Nu)}function Zb(n){switch(this._trackPointer(n),this.state){case Ue.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case Ue.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case Ue.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case Ue.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=Ue.NONE}}function Jb(n){this.enabled!==!1&&n.preventDefault()}function jb(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Kb(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}var nm,Nu,sm,Cc,im,zb,un,Nn,Ue,Lu,Pc,rm=de(()=>{ta();nm={type:"change"},Nu={type:"start"},sm={type:"end"},Cc=new Xi,im=new Fn,zb=Math.cos(70*tu.DEG2RAD),un=new K,Nn=2*Math.PI,Ue={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Lu=1e-6,Pc=class extends Vo{constructor(t,e=null){super(t,e),this.state=Ue.NONE,this.target=new K,this.cursor=new K,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:ji.ROTATE,MIDDLE:ji.DOLLY,RIGHT:ji.PAN},this.touches={ONE:Ki.ROTATE,TWO:Ki.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new K,this._lastQuaternion=new Un,this._lastTargetPosition=new K,this._quat=new Un().setFromUnitVectors(t.up,new K(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new dr,this._sphericalDelta=new dr,this._scale=1,this._panOffset=new K,this._rotateStart=new jt,this._rotateEnd=new jt,this._rotateDelta=new jt,this._panStart=new jt,this._panEnd=new jt,this._panDelta=new jt,this._dollyStart=new jt,this._dollyEnd=new jt,this._dollyDelta=new jt,this._dollyDirection=new K,this._mouse=new jt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=Hb.bind(this),this._onPointerDown=Vb.bind(this),this._onPointerUp=Gb.bind(this),this._onContextMenu=Jb.bind(this),this._onMouseWheel=Yb.bind(this),this._onKeyDown=$b.bind(this),this._onTouchStart=qb.bind(this),this._onTouchMove=Zb.bind(this),this._onMouseDown=Xb.bind(this),this._onMouseMove=Wb.bind(this),this._interceptControlDown=jb.bind(this),this._interceptControlUp=Kb.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(t){this._cursorStyle=t,t==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.state=Ue.NONE,this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents();let t=this.domElement.getRootNode();t.removeEventListener("keydown",this._interceptControlDown,{capture:!0}),t.removeEventListener("keyup",this._interceptControlUp,{capture:!0}),this._controlActive=!1,this._pointers.length=0,this._pointerPositions={},this.domElement.style.touchAction="",this.domElement.style.cursor="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(nm),this.update(),this.state=Ue.NONE}pan(t,e){this._pan(t,e),this.update()}dollyIn(t){this._dollyIn(t),this.update()}dollyOut(t){this._dollyOut(t),this.update()}rotateLeft(t){this._rotateLeft(t),this.update()}rotateUp(t){this._rotateUp(t),this.update()}update(t=null){let e=this.object.position;un.copy(e).sub(this.target),un.applyQuaternion(this._quat),this._spherical.setFromVector3(un),this.autoRotate&&this.state===Ue.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(i)&&isFinite(s)&&(i<-Math.PI?i+=Nn:i>Math.PI&&(i-=Nn),s<-Math.PI?s+=Nn:s>Math.PI&&(s-=Nn),i<=s?this._spherical.theta=Math.max(i,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+s)/2?Math.max(i,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let a=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let c=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),a=c!=this._spherical.radius}if(un.setFromSpherical(this._spherical),un.applyQuaternion(this._quatInverse),e.copy(this.target).add(un),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let c=null;if(this.object.isPerspectiveCamera){let o=un.length();c=this._clampDistance(o*this._scale);let h=o-c;this.object.position.addScaledVector(this._dollyDirection,h),this.object.updateMatrixWorld(),a=!!h}else if(this.object.isOrthographicCamera){let o=new K(this._mouse.x,this._mouse.y,0);o.unproject(this.object);let h=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),a=h!==this.object.zoom;let f=new K(this._mouse.x,this._mouse.y,0);f.unproject(this.object),this.object.position.sub(f).add(o),this.object.updateMatrixWorld(),c=un.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;c!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(c).add(this.object.position):(Cc.origin.copy(this.object.position),Cc.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Cc.direction))<zb?this.object.lookAt(this.target):(im.setFromNormalAndCoplanarPoint(this.object.up,this.target),Cc.intersectPlane(im,this.target))))}else if(this.object.isOrthographicCamera){let c=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),c!==this.object.zoom&&(this.object.updateProjectionMatrix(),a=!0)}return this._scale=1,this._performCursorZoom=!1,a||this._lastPosition.distanceToSquared(this.object.position)>Lu||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Lu||this._lastTargetPosition.distanceToSquared(this.target)>Lu?(this.dispatchEvent(nm),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?Nn/60*this.autoRotateSpeed*t:Nn/60/60*this.autoRotateSpeed}_getZoomScale(t){let e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){un.setFromMatrixColumn(e,0),un.multiplyScalar(-t),this._panOffset.add(un)}_panUp(t,e){this.screenSpacePanning===!0?un.setFromMatrixColumn(e,1):(un.setFromMatrixColumn(e,0),un.crossVectors(this.object.up,un)),un.multiplyScalar(t),this._panOffset.add(un)}_pan(t,e){let i=this.domElement;if(this.object.isPerspectiveCamera){let s=this.object.position;un.copy(s).sub(this.target);let a=un.length();a*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*a/i.clientHeight,this.object.matrix),this._panUp(2*e*a/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let i=this.domElement.getBoundingClientRect(),s=t-i.left,a=e-i.top,c=i.width,o=i.height;this._mouse.x=s/c*2-1,this._mouse.y=-(a/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let e=this.domElement;this._rotateLeft(Nn*this._rotateDelta.x/e.clientHeight),this._rotateUp(Nn*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(Nn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-Nn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(Nn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-Nn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._rotateStart.set(i,s)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panStart.set(i,s)}}_handleTouchStartDolly(t){let e=this._getSecondPointerPosition(t),i=t.pageX-e.x,s=t.pageY-e.y,a=Math.sqrt(i*i+s*s);this._dollyStart.set(0,a)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{let i=this._getSecondPointerPosition(t),s=.5*(t.pageX+i.x),a=.5*(t.pageY+i.y);this._rotateEnd.set(s,a)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let e=this.domElement;this._rotateLeft(Nn*this._rotateDelta.x/e.clientHeight),this._rotateUp(Nn*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panEnd.set(i,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){let e=this._getSecondPointerPosition(t),i=t.pageX-e.x,s=t.pageY-e.y,a=Math.sqrt(i*i+s*s);this._dollyEnd.set(0,a),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let c=(t.pageX+e.x)*.5,o=(t.pageY+e.y)*.5;this._updateZoomParameters(c,o)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new jt,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){let e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){let e=t.deltaMode,i={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}});function om(n,t,e,i){n.onBeforeCompile=s=>{s.uniforms.uCut={value:t-.05},s.uniforms.uBase={value:i||new ae(1,1,1)},s.uniforms.uBottom={value:t},s.vertexShader=`varying float vZ;
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
if (onWall > 0.0) normal = normalize(mix(normal, (viewMatrix * vec4(normalize(vWall.xy), 0.0, 0.0)).xyz, onWall));`))},n.customProgramCacheKey=()=>`through-${e}`}function am(n,t,e){let i=document.createElement("canvas");i.width=256,i.height=128;let s=i.getContext("2d");s.font="600 84px Inter, system-ui, sans-serif",s.fillStyle="#"+new ae(t).getHexString(),s.textAlign="center",s.textBaseline="middle",s.fillText(n,128,64);let a=new To(i);a.colorSpace=An;let c=new wo(new or({map:a,depthTest:!1,transparent:!0}));return c.scale.set(e*2,e,1),c.renderOrder=6,c}var qn,Cr,Qb,Ic,lm=de(()=>{ta();rm();qn={face:"#93a2b4",pocket:"#1abc9c",hole:"#4ea1ff",drill:"#4ea1ff",step:"#2ecc71",corners:"#48d1b4",cutout:"#a78bfa",rough3d:"#f5a524",rest3d:"#e3c341",finish3d:"#ff7a59",chamfer:"#f472b6",thread:"#c084fc",inside:"#4ea1ff",online:"#f5a524"},Cr={softwood:"#d8b38a",hardwood:"#9c6b45",mdf:"#b59672",plastic:"#d9e2ea",aluminum:"#b9c1c9",foam:"#c7b8a5"};Qb=(n,t)=>n.some(e=>e.key===t);Ic=class{constructor(){this.el=document.createElement("div"),this.el.className="ncc-viewport",this.renderer=new xc({antialias:!0,alpha:!0}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),this.el.appendChild(this.renderer.domElement),this.scene=new vo,this.camera=new Sn(35,1,.1,1e4),this.camera.up.set(0,0,1),this.controls=new Pc(this.camera,this.renderer.domElement),this.controls.enableDamping=!0,this.controls.dampingFactor=.12,this.controls.addEventListener("start",()=>{this.userMoved=!0}),this.scene.add(new Uo(16777215,4478310,1.6));let t=new fr(16777215,1.6);t.position.set(-.6,-1,1.6),this.scene.add(t);let e=new fr(16777215,.5);e.position.set(1,.6,.4),this.scene.add(e),this.content=new Wn,this.scene.add(this.content),this.onFrame=null,this.alive=!0,this.resize=new ResizeObserver(()=>this.fit()),this.resize.observe(this.el);let i=s=>{if(this.alive){if(!this.el.isConnected&&this.detachedSince&&s-this.detachedSince>3e3&&!document.querySelector(".ncc-wrapper")){this.dispose();return}this.el.isConnected?this.detachedSince=0:this.detachedSince||=s,this.onFrame&&this.onFrame(s),this.controls.update(),this.el.isConnected&&this.renderer.render(this.scene,this.camera),requestAnimationFrame(i)}};requestAnimationFrame(i),this.setupPicking()}fit(){let t=this.el.clientWidth,e=this.el.clientHeight;!t||!e||(this.renderer.setSize(t,e,!1),this.camera.aspect=t/e,this.camera.updateProjectionMatrix(),this.userMoved||this.refit())}clear(){for(let t of[...this.content.children])this.content.remove(t),t.traverse(e=>{e.geometry?.dispose(),e.material&&[].concat(e.material).forEach(i=>i.dispose())});this.pickMesh=null,this.markers=null}frame(t,e,i=.08){this.fitBox=[t,e,i],this.userMoved=!1,this.refit()}refit(){if(!this.fitBox)return;let[t,e,i]=this.fitBox,s=new K((t[0]+e[0])/2,(t[1]+e[1])/2,(t[2]+e[2])/2),a=Math.max(e[0]-t[0],e[1]-t[1],e[2]-t[2],.001),c=new K(-.45,-.8,.75).normalize(),o=[];for(let g of[t[0],e[0]])for(let m of[t[1],e[1]])for(let x of[t[2],e[2]])o.push(new K(g,m,x));let h=s.clone(),f=a*2,d=()=>{this.camera.position.copy(h).addScaledVector(c,f),this.camera.near=f/100,this.camera.far=f*100,this.camera.lookAt(h),this.camera.updateMatrixWorld(),this.camera.updateProjectionMatrix()};for(let g=0;g<8;g++){d();let m=1/0,x=-1/0,v=1/0,b=-1/0;for(let R of o){let E=R.clone().project(this.camera);m=Math.min(m,E.x),x=Math.max(x,E.x),v=Math.min(v,E.y),b=Math.max(b,E.y)}let y=Math.max((x-m)/2,(b-v)/2);if(!(y>0))break;let _=f*Math.tan(this.camera.fov*Math.PI/360),T=_*this.camera.aspect,A=new K().setFromMatrixColumn(this.camera.matrixWorld,0),S=new K().setFromMatrixColumn(this.camera.matrixWorld,1);h.addScaledVector(A,(m+x)/2*T).addScaledVector(S,(v+b)/2*_),f*=y/(1-i)}d(),this.controls.target.copy(h),this.controls.update()}showPart(t,e=[]){this.clear();let i=new We;i.setAttribute("position",new Ve(t.positions,3)),i.setIndex(new Ve(t.indices,1)),i.computeVertexNormals();let s=new Pe(i,new zn({color:9348283,metalness:.15,roughness:.55,side:wn,polygonOffset:!0,polygonOffsetFactor:1,polygonOffsetUnits:1}));this.content.add(s),this.pickMesh=s;let a=new _s(new cr(i,25),new ni({color:2832972,transparent:!0,opacity:.55}));this.content.add(a);for(let o of e)this.addLoops(o.loops,o.z,o.color,o.dashed,o.opacity);i.computeBoundingBox();let c=i.boundingBox;this.keepCamera||this.frame(c.min.toArray(),c.max.toArray())}addLoops(t,e,i,s,a=.95){for(let c of t){let o=c.map(([g,m])=>new K(g,m,e)),h=new We().setFromPoints([...o,o[0]]),f=s?new Do({color:i,dashSize:2,gapSize:1.5,transparent:!0,opacity:a,depthTest:!1}):new ni({color:i,transparent:!0,opacity:a,depthTest:!1}),d=new ys(h,f);s&&d.computeLineDistances(),d.renderOrder=2,this.content.add(d)}}setupPicking(){let t=this.renderer.domElement,e=null;t.addEventListener("pointerdown",i=>{e=[i.clientX,i.clientY]}),t.addEventListener("pointerup",i=>{if(!e||Math.hypot(i.clientX-e[0],i.clientY-e[1])>4)return;let s=t.getBoundingClientRect(),a=new ko;if(a.setFromCamera(new jt((i.clientX-s.left)/s.width*2-1,-((i.clientY-s.top)/s.height)*2+1),this.camera),this.markers?.length&&this.onMarker){let h=a.intersectObjects(this.markers)[0];if(h?.object.userData.axis){this.onAxis?.(h.object.userData.axis);return}if(h){this.onMarker(h.object.userData.key);return}}if(!this.pickMesh||!this.onPick)return;let c=a.intersectObject(this.pickMesh)[0];if(!c||!c.face)return;let o=c.face.normal.clone();o.dot(a.ray.direction)>0&&o.negate(),this.onPick([o.x,o.y,o.z])})}showZero({stock:t,part:e,points:i,selected:s,zFace:a,color:c,accent:o="#4c6ef5"}){this.clear();let h=t.maxX-t.minX,f=t.maxY-t.minY,d=t.top-t.bottom,g=Math.max(h,f,d),m=new Yi(h,f,d);m.translate((t.minX+t.maxX)/2,(t.minY+t.maxY)/2,(t.top+t.bottom)/2);let x=new Pe(m,new zn({color:c,transparent:!0,opacity:.45,roughness:.9,depthWrite:!1}));if(x.renderOrder=2,this.content.add(x),this.content.add(new _s(new cr(m),new ni({color:new ae(c).multiplyScalar(.6)}))),e){let _=new We;_.setAttribute("position",new Ve(e.positions,3)),_.setIndex(new Ve(e.indices,1)),_.computeVertexNormals(),this.partMesh=new Pe(_,new zn({color:9348283,metalness:.15,roughness:.55})),this.content.add(this.partMesh)}else this.partMesh=null;let v=a==="bed"?t.bottom:t.top,b=g*.014;this.markers=[];for(let _ of i){let T=_.key===s,A=new Pe(new $i(T?b*1.3:b,24,16),new Bn({color:T?o:16777215}));if(A.position.set(_.x,_.y,v),A.userData.key=_.key,A.renderOrder=4,A.material.depthTest=!1,!T){let R=new Pe(new $i(b*1.25,24,16),new Bn({color:6187893,depthTest:!1}));R.renderOrder=3,A.add(R)}let S=new Pe(new $i(b*3.5,12,8),new Bn({visible:!1}));if(S.userData.key=_.key,A.add(S),this.markers.push(S),this.content.add(A),T){let R=new Pe(new No(b*1.6,b*2,40),new Bn({color:o,transparent:!0,depthTest:!1,side:wn}));R.position.copy(A.position),R.renderOrder=4,this.content.add(R),this.pulse=R;let E=g*.24;for(let[P,w,N]of[[[1,0,0],15158332,"X"],[[0,1,0],3066993,"Y"],[[0,0,1],5147903,"Z"]]){let U=new zo(new K(...P),A.position,E,w,E*.15,E*.065);U.line.visible=!1;let B=new Pe(new xi(g*.0028,g*.0028,E*.86,12),new Bn({color:w,depthTest:!1}));B.position.y=E*.43,B.renderOrder=5,U.add(B),U.cone.material.depthTest=!1,U.renderOrder=5,U.cone.renderOrder=5,this.content.add(U);let G=am(N,w,g*.05);G.position.copy(A.position).add(new K(...P).multiplyScalar(E*1.18)),this.content.add(G);let H=new Pe(new xi(E*.1,E*.1,E*1.3,10),new Bn({visible:!1}));H.quaternion.setFromUnitVectors(new K(0,1,0),new K(...P)),H.position.copy(A.position).add(new K(...P).multiplyScalar(E*.65)),H.userData.axis=N.toLowerCase(),this.content.add(H),this.markers.unshift(H)}}}let y=am("Front",9675444,g*.04);y.position.set((t.minX+t.maxX)/2,t.minY-g*.08,t.bottom),this.content.add(y),this.keepCamera||this.frame([t.minX,t.minY,t.bottom],[t.maxX,t.maxY,t.top]),Qb(i,s)||(this.pulse=null),this.onFrame=_=>{if(!this.pulse)return;let T=_%1600/1600;this.pulse.scale.setScalar(1+T*1.6),this.pulse.material.opacity=.8*(1-T),this.pulse.lookAt(this.camera.position)}}spin(t,e=700){let i=this.partMesh;if(!i)return Promise.resolve();i.geometry.computeBoundingBox();let s=i.geometry.boundingBox.getCenter(new K),a=t==="x"?new K(1,0,0):new K(0,0,1);i.matrixAutoUpdate=!1;let c=performance.now();return new Promise(o=>{let h=f=>{let d=Math.min(1,(f-c)/e),g=d<.5?2*d*d:1-(-2*d+2)**2/2;i.matrix.makeTranslation(s.x,s.y,s.z).multiply(new Fe().makeRotationAxis(a,Math.PI*g)).multiply(new Fe().makeTranslation(-s.x,-s.y,-s.z)),i.matrixWorldNeedsUpdate=!0,d<1&&i.parent?requestAnimationFrame(h):o()};requestAnimationFrame(h)})}showStock(t,e,i){this.clear(),this.keepCamera=!1;let s=t.nx,a=t.ny,c=s*a,o=new Float32Array(c*3),h=new Float32Array(c*3),f=new ae(e);for(let T=0;T<a;T++)for(let A=0;A<s;A++){let S=T*s+A;o[S*3]=t.x0+A*t.cell,o[S*3+1]=t.y0+T*t.cell,o[S*3+2]=t.h[S],h[S*3]=f.r,h[S*3+1]=f.g,h[S*3+2]=f.b}let d=new Uint32Array((s-1)*(a-1)*6),g=0;for(let T=0;T<a-1;T++)for(let A=0;A<s-1;A++){let S=T*s+A,R=S+1,E=S+s,P=E+1;d[g++]=S,d[g++]=R,d[g++]=P,d[g++]=S,d[g++]=P,d[g++]=E}let m=new We;m.setAttribute("position",new Ve(o,3).setUsage(Ss)),m.setAttribute("color",new Ve(h,3).setUsage(Ss));let x=new Float32Array(c*3);for(let T=0;T<c;T++)x[T*3+2]=1;m.setAttribute("normal",new Ve(x,3).setUsage(Ss));let v=new Float32Array(c*4);for(let T=0;T<c;T++)v[T*4+2]=t.h[T],v[T*4+3]=t.h[T];m.setAttribute("wall",new Ve(v,4).setUsage(Ss)),m.setIndex(new Ve(d,1));let b=new zn({vertexColors:!0,flatShading:!1,roughness:.8,metalness:e===Cr.aluminum?.5:.05,side:wn});om(b,t.bottom,!1,f);let y=new Pe(m,b);this.content.add(y),this.stock={hm:t,geo:m,base:f,sides:this.makeSides(t,f)};let _=new zn({color:f.clone().multiplyScalar(.7),roughness:.9,side:wn});if(om(_,t.bottom,!0),this.content.add(new Pe(m,_)),i){let T=new We;T.setAttribute("position",new Ve(i.positions,3)),T.setIndex(new Ve(i.indices,1)),T.computeVertexNormals(),this.partGhost=new Pe(T,new zn({color:5153279,transparent:!0,opacity:.25,depthWrite:!1})),this.partGhost.visible=!1,this.content.add(this.partGhost)}this.tool=new Wn,this.content.add(this.tool),this.frame([t.x0,t.y0,t.bottom],[t.x0+(s-1)*t.cell,t.y0+(a-1)*t.cell,t.top])}makeSides(t,e){let i=[];for(let g=0;g<t.nx;g++)i.push(g);for(let g=1;g<t.ny;g++)i.push(g*t.nx+t.nx-1);for(let g=t.nx-2;g>=0;g--)i.push((t.ny-1)*t.nx+g);for(let g=t.ny-2;g>=0;g--)i.push(g*t.nx);let s=new Float32Array(i.length*6),a=new Float32Array(i.length*6),c=[],o=[[0,-1],[1,0],[0,1],[-1,0]],h=[t.nx,t.nx+t.ny-1,2*t.nx+t.ny-2];for(let g=0;g<i.length;g++){let m=i[g],x=t.x0+m%t.nx*t.cell,v=t.y0+Math.floor(m/t.nx)*t.cell;s.set([x,v,t.h[m],x,v,t.bottom],g*6);let[b,y]=o[g<h[0]?0:g<h[1]?1:g<h[2]?2:3];if(a.set([b,y,0,b,y,0],g*6),g<i.length-1){let _=g*2;c.push(_,_+1,_+3,_,_+3,_+2)}}let f=new We;f.setAttribute("position",new Ve(s,3).setUsage(Ss)),f.setAttribute("normal",new Ve(a,3)),f.setIndex(c);let d=new Pe(f,new zn({color:e.clone().multiplyScalar(.85),roughness:.85,side:wn}));return this.content.add(d),{g:f,edge:i}}refreshStock(t,e,i){let s=this.stock;if(!s||e<t)return;let{hm:a,geo:c,base:o}=s,h=a.nx,f=a.ny,d=a.h,g=c.attributes.position,m=c.attributes.color,x=c.attributes.normal,v=c.attributes.wall,b=new ae,y=Math.max(0,t),_=Math.min(f-1,e),T=a.cell*1.5,A=(w,N,U)=>{let B=d[N*h+w],G=0;for(let H=-1;H<=1;H++)for(let z=-1;z<=1;z++){let $=w+z,J=N+H;(z||H)&&$>=0&&J>=0&&$<h&&J<f&&(G=Math.max(G,U*(d[J*h+$]-B)))}return G};for(let w=y;w<=_;w++)for(let N=0;N<h;N++){let U=w*h+N;g.array[U*3]=a.x0+N*a.cell+(a.sx?a.sx[U]:0),g.array[U*3+1]=a.y0+w*a.cell+(a.sy?a.sy[U]:0),g.array[U*3+2]=d[U];let B=a.op[U];B?(b.copy(o).lerp(i[B-1],.28),b.multiplyScalar(.82+.18*Math.max(0,Math.min(1,(d[U]-a.bottom)/Math.max(1,a.top-a.bottom))))):b.copy(o),m.array[U*3]=b.r,m.array[U*3+1]=b.g,m.array[U*3+2]=b.b}let S=g.array,R=Math.max(0,y-1),E=Math.min(f-1,_+1);for(let w=R;w<=E;w++)for(let N=0;N<h;N++){let U=w*h+N,B=v.array,G=A(N,w,1),H=A(N,w,-1);if(B[U*4]=0,B[U*4+1]=0,B[U*4+2]=d[U],B[U*4+3]=d[U],a.wx&&(a.wx[U]||a.wy[U])&&(G>T||H>T)){B[U*4]=a.wx[U],B[U*4+1]=a.wy[U],B[U*4+2]=d[U]-H,B[U*4+3]=d[U]+G,x.array[U*3]=0,x.array[U*3+1]=0,x.array[U*3+2]=1;continue}let z=(w*h+Math.max(0,N-1))*3,$=(w*h+Math.min(h-1,N+1))*3,J=(Math.max(0,w-1)*h+N)*3,O=(Math.min(f-1,w+1)*h+N)*3,Z=S[$]-S[z],W=S[$+1]-S[z+1],it=S[$+2]-S[z+2],ot=S[O]-S[J],Mt=S[O+1]-S[J+1],wt=S[O+2]-S[J+2],qt=W*wt-it*Mt,Kt=it*ot-Z*wt,ne=Z*Mt-W*ot,ut=Math.hypot(qt,Kt,ne)||1;ne<0&&(qt=-qt,Kt=-Kt,ne=-ne),x.array[U*3]=qt/ut,x.array[U*3+1]=Kt/ut,x.array[U*3+2]=ne/ut}g.addUpdateRange(y*h*3,(_-y+1)*h*3),m.addUpdateRange(y*h*3,(_-y+1)*h*3),x.addUpdateRange(R*h*3,(E-R+1)*h*3),v.addUpdateRange(R*h*4,(E-R+1)*h*4),g.needsUpdate=!0,m.needsUpdate=!0,x.needsUpdate=!0,v.needsUpdate=!0;let P=s.sides.g.attributes.position;s.sides.edge.forEach((w,N)=>{P.array[N*6+2]=d[w]}),P.needsUpdate=!0}setTool(t,e){for(let g of[...this.tool.children])this.tool.remove(g),g.traverse(m=>{m.geometry?.dispose(),m.material?.dispose()});let i=t.diameter/2,s=t.kind==="surfacing"||i>6.35,a=s?Math.max(e+1,Math.min(8,i*.5)):Math.max(t.fluteLength||0,Math.min(25,Math.max(e+3,t.diameter*2))),c=new zn({color:14015457,metalness:.85,roughness:.3}),o;if(t.kind==="vbit"||t.kind==="chamfer"||t.kind==="drill"){let g=i/Math.tan((t.angle||(t.kind==="drill"?118:90))*Math.PI/360);o=new Pe(new lr(i,g,48),c),o.rotation.x=-Math.PI/2,o.position.z=g/2}else if(t.kind==="ball"){o=new Wn;let g=new Pe(new xi(i,i,a-i,64),c);g.rotation.x=Math.PI/2,g.position.z=i+(a-i)/2;let m=new Pe(new $i(i,48,24,0,Math.PI*2,Math.PI/2,Math.PI/2),c);m.rotation.x=Math.PI/2,m.position.z=i,o.add(g,m)}else o=new Pe(new xi(i,i,a,64),c),o.rotation.x=Math.PI/2,o.position.z=a/2;let h=s?3.175:Math.max(i,Math.min(3.175,i*1.5)),f=20,d=new Pe(new xi(h,h,f,32),new zn({color:11187132,metalness:.8,roughness:.35}));d.rotation.x=Math.PI/2,d.position.z=a+f/2,this.tool.add(o,d)}moveTool(t,e,i){this.tool.position.set(t,e,i)}showPaths(t){this.paths&&(this.content.remove(this.paths),this.paths.traverse(e=>{e.geometry?.dispose(),e.material?.dispose()})),this.paths=new Wn;for(let e of t){let i=e.track;if(!i)continue;let s=[],a=[];for(let o=4;o<i.length;o+=4)(i[o+3]>0?s:a).push(i[o-4],i[o-3],i[o-2]+.02,i[o],i[o+1],i[o+2]+.02);let c=(o,h,f)=>{if(!o.length)return;let d=new We;d.setAttribute("position",new He(o,3));let g=new _s(d,new ni({color:h,transparent:!0,opacity:f}));g.renderOrder=3,this.paths.add(g)};c(s,qn[e.kind]||"#1abc9c",.75),c(a,"#93a2b4",.3)}this.content.add(this.paths)}dispose(){this.alive=!1,this.resize.disconnect(),this.clear(),this.controls.dispose(),this.renderer.dispose()}}});function eM(){return new Promise((n,t)=>{let e=indexedDB.open(tM,1);e.onupgradeneeded=()=>e.result.createObjectStore("kv"),e.onsuccess=()=>n(e.result),e.onerror=()=>t(e.error)})}async function Ou(n,t){let e=await eM();return new Promise((i,s)=>{let a=e.transaction("kv",n),c=t(a.objectStore("kv"));a.oncomplete=()=>{e.close(),i(c?.result)},a.onerror=a.onabort=()=>{e.close(),s(a.error)}})}function nM(n){let t=new Uint8Array(n),e=2166136261;for(let i=0;i<t.length;i++)e^=t[i],e=Math.imul(e,16777619);return(e>>>0).toString(36)}async function cm(){let n=await ea("recent");if(Array.isArray(n))return n;let t=await ea("last");if(!t?.bytes)return[];let e=Lc(t.name,t.bytes);await na(`part:${e}`,t);let i=[{key:e,name:t.name,size:t.bytes.byteLength,savedAt:t.savedAt||Date.now()}];return await na("recent",i),await Rc("last"),i}async function hm(n,t,e=Lc(n.name,n.bytes)){await na(`part:${e}`,n);let i=iM(n.name,n.bytes);t.some(a=>a.key===i)&&await Rc(`part:${i}`);let s=[{key:e,name:n.name,size:n.bytes.byteLength,savedAt:n.savedAt},...t.filter(a=>a.key!==e&&a.key!==i)];for(let a of s.slice(Du))await Rc(`part:${a.key}`);return await na("recent",s.slice(0,Du)),s.slice(0,Du)}async function Fu(n,t){await Rc(`part:${n}`);let e=t.filter(i=>i.key!==n);return await na("recent",e),e}var tM,ea,na,Rc,Du,Lc,iM,um=de(()=>{tM="nccam";ea=n=>Ou("readonly",t=>t.get(n)).catch(()=>null),na=(n,t)=>Ou("readwrite",e=>e.put(t,n)).catch(()=>{}),Rc=n=>Ou("readwrite",t=>t.delete(n)).catch(()=>{}),Du=10,Lc=(n,t)=>`${n}|${t.byteLength}|${nM(t)}`;iM=(n,t)=>`${n}|${t.byteLength}`});function fm(n){let t=/^\s*([-+]?[\d.]+(?:e[-+]?\d+)?)\s*([a-z%]*)\s*$/i.exec(n||"");if(!t||t[2]==="%")return null;let e=rM[t[2].toLowerCase()];return e?{mm:+t[1]*e,user:+t[1]}:null}function dm(n){let t=/rgba?\(\s*(\d+)[, ]+(\d+)[, ]+(\d+)(?:[,/ ]+([\d.]+%?))?/.exec(n||"");return!t||t[4]!==void 0&&parseFloat(t[4])===0?null:"#"+[t[1],t[2],t[3]].map(e=>(+e).toString(16).padStart(2,"0")).join("")}function pm(n){let t=new DOMParser().parseFromString(n,"image/svg+xml");if(t.querySelector("parsererror")||t.documentElement.nodeName.toLowerCase()!=="svg")throw new Error("This SVG could not be read. Save it again as plain SVG.");let e=t.documentElement,i=(e.getAttribute("viewBox")||"").trim().split(/[\s,]+/).map(Number),s=i.length===4&&i.every(Number.isFinite)&&i[2]>0&&i[3]>0,a=fm(e.getAttribute("width")),c=fm(e.getAttribute("height")),o=s?i[2]:a?.user??0,h=s?i[3]:c?.user??0,f=a&&s?a.mm/i[2]:c&&s?c.mm/i[3]:a?a.mm/a.user:25.4/96,d=a&&/[a-z]+$/i.exec(e.getAttribute("width"))?.[0]||"px",g=document.createElement("div");g.style.cssText="position:absolute;left:-100000px;top:0;width:0;height:0;overflow:hidden;opacity:0;pointer-events:none";let m=document.importNode(e,!0);s?(m.setAttribute("width",String(i[2])),m.setAttribute("height",String(i[3])),m.setAttribute("preserveAspectRatio","none")):(o&&m.setAttribute("width",String(o)),h&&m.setAttribute("height",String(h))),g.appendChild(m),document.body.appendChild(g);let x=[],v={},b=y=>{v[y]=(v[y]||0)+1};try{lM(m);let y=s?i[3]:h||m.getBBox().height,_=m.querySelectorAll("path, rect, circle, ellipse, line, polyline, polygon, text, image");for(let T of _){if(T.closest(oM))continue;let A=getComputedStyle(T);if(A.display==="none"||A.visibility==="hidden")continue;let S=T.nodeName.toLowerCase();if(S==="text"){b("text");continue}if(S==="image"){b("image");continue}let R=A.stroke!=="none"&&parseFloat(A.strokeOpacity)!==0?dm(A.stroke):null,E=A.fill!=="none"&&parseFloat(A.fillOpacity)!==0?dm(A.fill):null;if(!R&&!E)continue;let P=T.getCTM();if(!P)continue;let w=aM(T);for(let N of cM(T,S)){let U=N.pts.map(([G,H])=>[(P.a*G+P.c*H+P.e)*f,(y-(P.b*G+P.d*H+P.f))*f]),B=as(U,N.closed);B.length<2||x.push({pts:B,closed:N.closed&&B.length>2,color:R||E,layer:w,filled:!!E})}}}finally{g.remove()}return{shapes:x,units:d,skipped:v}}function aM(n){for(let t=n.parentElement;t&&t.nodeName.toLowerCase()!=="svg";t=t.parentElement)if(t.getAttribute("inkscape:groupmode")==="layer")return t.getAttribute("inkscape:label")||t.id||"";return""}function lM(n){for(let t=0;t<6;t++){let e=n.querySelectorAll("use");if(!e.length)return;for(let i of e){let s=i.getAttribute("href")||i.getAttributeNS("http://www.w3.org/1999/xlink","href")||"",a=s.startsWith("#")?n.querySelector(`[id="${CSS.escape(s.slice(1))}"]`):null,c=document.createElementNS("http://www.w3.org/2000/svg","g");for(let f of i.attributes)["href","xlink:href","x","y","width","height","transform"].includes(f.name)||c.setAttribute(f.name,f.value);let o=parseFloat(i.getAttribute("x"))||0,h=parseFloat(i.getAttribute("y"))||0;if(c.setAttribute("transform",`${i.getAttribute("transform")||""} translate(${o} ${h})`),a&&!a.contains(i)){let f=a.nodeName.toLowerCase()==="symbol"?Object.assign(document.createElementNS("http://www.w3.org/2000/svg","g"),{innerHTML:a.innerHTML}):a.cloneNode(!0);f.removeAttribute("id"),c.appendChild(f)}i.replaceWith(c)}}}function cM(n,t){switch(t){case"path":try{return Uc(n.getAttribute("d"))}catch{return[]}case"line":return[{pts:[[mn(n,"x1"),mn(n,"y1")],[mn(n,"x2"),mn(n,"y2")]],closed:!1}];case"polyline":case"polygon":{let e=(n.getAttribute("points")||"").trim().split(/[\s,]+/).map(Number),i=[];for(let s=0;s+1<e.length;s+=2)i.push([e[s],e[s+1]]);return t==="polygon"&&i.length>2&&i.push(i[0].slice()),i.length>1?[{pts:i,closed:t==="polygon"}]:[]}case"circle":{let e=mn(n,"r");return e>0?[{pts:sa(mn(n,"cx"),mn(n,"cy"),e),closed:!0}]:[]}case"ellipse":{let e=mn(n,"rx"),i=mn(n,"ry");if(!(e>0&&i>0))return[];let s=ra(mn(n,"cx"),mn(n,"cy"),e,0,i/e);return s[s.length-1]=s[0].slice(),[{pts:s,closed:!0}]}case"rect":{let e=mn(n,"x"),i=mn(n,"y"),s=mn(n,"width"),a=mn(n,"height");if(!(s>0&&a>0))return[];let c=n.hasAttribute("rx")?mn(n,"rx"):mn(n,"ry"),o=n.hasAttribute("ry")?mn(n,"ry"):c;if(c=Math.min(c,s/2),o=Math.min(o,a/2),!(c>0))return[{pts:[[e,i],[e+s,i],[e+s,i+a],[e,i+a],[e,i]],closed:!0}];let h=Math.max(c,o),f=(g,m,x)=>Ls(0,0,h,x,x+Math.PI/2,!0).map(([v,b])=>[g+v/h*c,m+b/h*o]),d=[...f(e+s-c,i+a-o,0),...f(e+c,i+a-o,Math.PI/2),...f(e+c,i+o,Math.PI),...f(e+s-c,i+o,Math.PI*1.5)];return d.push(d[0].slice()),[{pts:d,closed:!0}]}}return[]}var rM,oM,mn,mm=de(()=>{Ac();rM={mm:1,cm:10,in:25.4,pt:25.4/72,pc:25.4/6,px:25.4/96,"":25.4/96},oM="defs, clipPath, mask, symbol, marker, pattern, metadata, title, desc";mn=(n,t)=>parseFloat(n.getAttribute(t))||0});function xm(n){return gm||=(async()=>{let t=async a=>{let c=await fetch(n.file(`lib/${a}`));if(!c.ok)throw new Error(`lib/${a}: ${c.status}`);return URL.createObjectURL(new Blob([await c.text()],{type:"text/javascript"}))},[e,i]=await Promise.all([t("pdf.min.mjs"),t("pdf.worker.min.mjs")]),s=await import(e);return s.GlobalWorkerOptions.workerSrc=i,s})().catch(t=>{throw gm=null,t})}var gm,ym=de(()=>{gm=null});function Bu(n,t,e){var i=uM(n,t,e);return i!==null?i:hM(n,t,e)}function _m(n){var t={mm:1,cm:10,in:25.4,inch:25.4,inches:25.4,'"':25.4};return n==="feed"&&(t["mm/min"]=1,t["mm/m"]=1,t["in/min"]=25.4,t["in/m"]=25.4,t["inch/min"]=25.4,t.ipm=25.4,t["mm/s"]=60,t["mm/sec"]=60,t["in/s"]=25.4*60,t["in/sec"]=25.4*60,t.ips=25.4*60),t}function hM(n,t,e){var i=String(n??"").trim().toLowerCase().replace(/[”″]/g,'"').replace(/''/g,'"'),s=_m(e),a=t?25.4:1,c=0,o=function(){for(;i[c]===" ";)c++},h=function(){var x=/^(?:(\d+)\/(\d+)(?![\d.])|(\d+(?:\.\d*)?|\.\d+))\s*([a-z"]+(?:\/[a-z]+)?)?/.exec(i.slice(c));if(!x||+x[2]==0)return null;c+=x[0].length;var v=x[1]!=null?x[1]/x[2]:parseFloat(x[3]);return x[4]?Object.prototype.hasOwnProperty.call(s,x[4])?{v:v*s[x[4]],d:1}:null:{v,d:0}},f,d=function(x){if(o(),!x&&(i[c]==="-"||i[c]==="+")){var v=i[c++]==="-",b=d(!0);return b&&{v:v?-b.v:b.v,d:b.d}}if(i[c]!=="(")return h();c++;var y=f();return o(),!y||i[c]!==")"?null:(c++,y)},g=function(){for(var x=d();;){o();var v=i[c];if(v!=="*"&&v!=="/")return x;c++;var b=d();if(!x||!b)return null;if(v==="*"){if(x.d+b.d>1)return null;x={v:x.v*b.v,d:x.d+b.d}}else{if(b.d||b.v===0)return null;x={v:x.v/b.v,d:x.d}}}};f=function(){for(var x=g();;){o();var v=i[c];if(v!=="+"&&v!=="-")return x;c++;var b=g();if(!x||!b)return null;x.d!==b.d&&(x.d?b={v:b.v*a,d:1}:x={v:x.v*a,d:1}),x={v:v==="+"?x.v+b.v:x.v-b.v,d:x.d}}};var m=f();return o(),!m||c<i.length||!isFinite(m.v)?null:parseFloat((m.d?m.v/a:m.v).toFixed(t?4:3))}function uM(n,t,e){var i=String(n??"").trim().toLowerCase().replace(/[”″]/g,'"').replace(/''/g,'"'),s=i.match(/^([+-])?\s*(\d+(?:\.\d*)?|\.\d+)(?:(?:\s+|-)(\d+)\/(\d+)|\/(\d+))?\s*([a-z"/]*)$/);if(!s)return null;var a=parseFloat(s[2]),c;if(s[3]!=null){if(/\./.test(s[2])||+s[4]==0)return null;c=a+ +s[3]/+s[4]}else if(s[5]!=null){if(/\./.test(s[2])||+s[5]==0)return null;c=a/+s[5]}else c=a;s[1]==="-"&&(c=-c);var o=_m(e),h=s[6];if(!h)return c;if(!Object.prototype.hasOwnProperty.call(o,h))return null;var f=c*o[h],d=t?f/25.4:f;return parseFloat(d.toFixed(t?4:3))}function ku(n,t){return parseFloat(n.toFixed(t?4:3))}function fM(n,t){return t?n/Uu:n}function dM(n,t){if(!t)return n;for(var e=n*Uu,i=ku(n,!0),s=0;s<=4;s++){var a=parseFloat(e.toFixed(s));if(ku(a/Uu,!0)===i)return a}return e}function vm(n,t){return String(ku(fM(n,t),t))}function bm(n,t,e){var i=Bu(n,t,e);return i==null?null:dM(i,t)}function Mm(n,t){t=t||{};function e(){return typeof t.imperial=="function"?!!t.imperial():!!t.imperial}function i(o){return o&&o.getAttribute&&o.tagName==="INPUT"&&o.getAttribute("data-unit")?o:null}function s(o){var h=Bu(o.value,e(),o.getAttribute("data-unit"));h==null||String(h)===o.value.trim()||(o.value=h,o.dispatchEvent(new Event("input",{bubbles:!0})))}function a(o){var h=i(o.target);h&&s(h)}function c(o){var h=i(o.target);if(!(!h||h.disabled||h.readOnly)){if(o.key==="Enter"){s(h);return}if(!(t.arrows===!1||o.key!=="ArrowUp"&&o.key!=="ArrowDown")){var f=e(),d=Bu(h.value,f,h.getAttribute("data-unit"));(d==null||!isFinite(d))&&(d=0);var g=o.ctrlKey||o.metaKey?.001:o.shiftKey?10:o.altKey?.1:1;h.hasAttribute("data-integer")&&(g=Math.max(1,g));var m=d+(o.key==="ArrowUp"?g:-g),x=parseFloat(h.getAttribute("data-min")!=null?h.getAttribute("data-min"):h.getAttribute("min"));if(isFinite(x)&&m<x){if(!Number.isInteger(x)){o.preventDefault();return}m=x}m=parseFloat(m.toFixed(f?4:3)),o.preventDefault(),String(m)!==h.value&&(h.value=m,h.dispatchEvent(new Event("input",{bubbles:!0})),t.onStep&&t.onStep(h))}}}return n.addEventListener("focusout",a,!0),n.addEventListener("keydown",c,!0),function(){n.removeEventListener("focusout",a,!0),n.removeEventListener("keydown",c,!0)}}var Uu,Sm=de(()=>{Uu=25.4});var wm={};Vu(wm,{mountApp:()=>mM});function mM(n,t,e){let i={get:async F=>{let X=await fetch(t.base+F);if(!X.ok)throw new Error(`${F}: ${X.status}`);return X.json()},post:(F,X)=>fetch(t.base+F,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(X)}),put:(F,X)=>fetch(t.base+F,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(X)})},s="/api/plugins/com.tmuka.nccut2d/settings",a={},c=F=>(a={...a,...F},i.put(s,a).catch(X=>console.warn("[ncCut2D] settings save failed:",X))),o={step:1,maxStep:1,fileName:"",loading:"",error:"",up:"top",analysis:null,part:null,scale:null,rot:null,lock:!0,fileSize:null,meshKind:null,tools:[],numbering:"slot",safeZ:null,connected:!1,units:"mm",limits:{},travel:null,job:null,plan:null,planning:!1,result:null,simChecks:null,toast:"",recent:[],partKey:null,raw:null,a:null,groups:[],sel:new Set,info:null},h=new Ic,f=F=>!!F.toolNumber&&(!o.slots||F.toolNumber<=o.slots),d=(F,X)=>us.num(F,o.units,X),g=(F,X)=>us.len(F,o.units,X),m=()=>o.units==="in",x=F=>vm(F,m()),v=F=>{let X=bm(String(F.value).replace(/^(\d+),(\d+)$/,"$1.$2"),m());return X!=null&&Number.isFinite(X)&&X>0?X:null},b=0;(async()=>{let[F,X,rt,ht,et]=await Promise.all([i.get("/api/settings").catch(()=>({})),i.get("/api/tools").catch(()=>[]),i.get("/api/firmware").catch(()=>null),i.get("/api/server-state").catch(()=>null),i.get(s).catch(()=>null)]);a=et&&typeof et=="object"?et:{},o.saveToFm=!!a.saveToFileManager,o.units=us.unitsFrom(F?.unitsPreference),o.numbering=F?.tool?.numbering==="toolId"?"toolId":"slot",o.slots=Math.max(0,Number(F?.tool?.count)||0);let dt=F?.tool?.probe?Number(F?.tool?.probeToolNumber)||99:null,zt=Number(F?.safeZHeight);o.safeZ=Number.isFinite(zt)?zt:null,o.tools=If(Array.isArray(X)?X:X?.tools),o.numbering=Pf(o.numbering,o.tools,o.slots,dt);let ge=rt?.settings||{},gt=Gt=>{let te=parseFloat(ge[Gt]?.value);return Number.isFinite(te)&&te>0?te:null};o.limits={maxRpm:gt("30")||void 0,minRpm:gt("31")||void 0,maxFeed:Math.min(gt("110")||1/0,gt("111")||1/0,1/0)},Number.isFinite(o.limits.maxFeed)||delete o.limits.maxFeed,o.maxRapid=Math.min(gt("110")||5e3,gt("111")||5e3),gt("130")&&gt("131")&&(o.travel={x:gt("130"),y:gt("131"),z:gt("132")}),o.connected=!!ht?.machineState?.connected,W(),o.recent=await cm(),o.recent.length&&!o.a&&!o.loading&&$(o.recent[0].key)})();let y=0,_=/\.(dxf|svg|pdf|ai)$/i;async function T(F,X=null){if(!F&&!X)return;let rt=++y,ht=()=>rt!==y,et=X?X.name:F.name;if(!_.test(et)){o.error=/\.(step|stp|stl|3mf)$/i.test(et)?"That\u2019s a 3D part: open it in ncCAM. ncCut2D reads drawings: DXF, SVG, PDF or AI.":"Open a DXF, SVG, PDF or AI drawing.",W();return}o.fileName=et,o.loading=`Reading ${et}\u2026`,o.error="",o.plan=null,o.result=null,o.a=null,o.part=null,o.sel=new Set,o.step=1,o.maxStep=1,W();try{let dt=X?X.bytes:await F.arrayBuffer();if(ht())return;let zt=Lc(et,dt);if(!X&&o.recent.some(Ie=>Ie.key===zt)){let Ie=await ea(`part:${zt}`);if(ht())return;Ie?.bytes&&J(Ie.bytes,dt)&&(X={...Ie,bytes:dt})}let ge=et.split(".").pop().toLowerCase(),gt;if(ge==="dxf"?gt=zc(new TextDecoder().decode(dt)):ge==="svg"?gt=pm(new TextDecoder().decode(dt)):gt=await Vc(new Uint8Array(dt.slice(0)),await xm(t)),ht())return;let Gt=$u(gt.shapes);if(!Gt.shapes.length)throw new Error("No lines or shapes were found in this drawing. Text must be converted to curves (outlines) first.");let te=Object.entries(gt.skipped||{}).filter(([,Ie])=>Ie>0).map(([Ie,sn])=>`${sn} ${Ie}`);if(o.info={units:gt.units,notes:te.length?`Not drawn: ${te.join(", ")} (convert text and hatches to curves to cut them).`:""},o.raw=Gt.shapes,o.bytes=dt.slice(0),o.partKey=zt,o.scale=X?.scale||1,await A(X?.job),ht())return;z()}catch(dt){if(ht())return;o.error=dt.message||String(dt),o.fileName="",o.a=null}o.loading="",W()}async function A(F){let X=o.scale===1?o.raw:Yu(o.raw,[o.scale,0,0,o.scale,0,0]),rt=o.groups;if(o.a=wc(X),o.groups=Au(o.a),F?.groups&&rt?.length){let et={};for(let dt of o.groups){let zt=rt.find(ge=>ge.idx.includes(dt.idx[0]));zt&&F.groups[zt.key]&&(et[dt.key]=F.groups[zt.key])}F={...F,groups:et}}await e("load",{shapes:X});let ht=Yp(o.a,null);o.job=F?{...ht,...F,stock:{...ht.stock,...F.stock,...F.stock?.fit!==!1?{width:ht.stock.width,depth:ht.stock.depth}:{}},groups:F.groups||{},shapes:F.shapes||{}}:ht;for(let et of Object.keys(o.job.shapes))+et>=o.a.shapes.length&&delete o.job.shapes[et];o.sel=new Set([...o.sel].filter(et=>et<o.a.shapes.length)),await E()}let S=Promise.resolve();function R(F){return S=S.then(async()=>{o.loading="Resizing the drawing\u2026",W();try{o.scale=F,o.result=null,o.maxStep=Math.min(o.maxStep,3),await A(o.job),z()}catch(X){o.error=X.message||String(X)}o.loading="",W()}),S}async function E(F=!1){if(!o.a||!(o.job?.stock.thickness>0)){o.plan=null,o.part=null,W();return}let X=++b;o.planning=!0,F&&(o.result=null),W();let rt=performance.now();try{let ht=await e("plan",{tools:o.tools,job:{...o.job,units:o.units},limits:o.limits,paths:F,gcodeOptions:{name:o.fileName,numbering:o.numbering,safeZHeightMm:o.safeZ},timing:{maxRapid:o.maxRapid||5e3}});if(X!==b)return;o.slow=N(performance.now()-rt,F)??(F?null:o.slow),o.plan=ht.plan,o.part=ht.part,z(),F&&(o.result=ht,o.simChecks=null)}catch(ht){X===b&&(o.error=ht.message||String(ht))}X===b&&(o.planning=!1,W())}let P={plan:6e3,paths:15e3,tip:5e3},w=()=>{let F=/aarch64|arm64|armv\d|raspberry/i.test(navigator.userAgent||"")||(navigator.hardwareConcurrency||8)<=4,X=/^(localhost|127\.|\[?::1)/.test(location.hostname||"localhost")||!/^https?:$/.test(location.protocol);return F&&X};function N(F,X){return!w()||F<(X?P.paths:P.plan)?null:`${X?"Making the toolpaths":"Planning"} took ${Math.round(F/1e3)} s on this small computer. ncCut2D runs in the browser that shows it: open ncSender in a browser on a laptop or desktop (this machine's address, port 8090) and it works there, usually several times faster. Programs still save to this machine.`}function U(F,X=""){return`<div class="ncc-busy" ${X?`style="${X}"`:""}><div class="ncc-busy-in"><div class="ncc-busy-row"><span class="ncc-spin"></span>${ce(F)}<span class="ncc-elapsed" data-elapsed></span></div>
      <div class="ncc-busy-tip" data-slowtip hidden>Slow for your parts? Open ncSender in a browser on a laptop or desktop (this machine's address, port 8090): ncCut2D works there, usually several times faster.</div></div></div>`}let B=null,G=setInterval(()=>{if(!n.isConnected){clearInterval(G);return}if(!(o.loading||o.planning||o.result&&!o.simChecks&&o.step===4)){B=null;return}B??=performance.now();let X=performance.now()-B,rt=Math.floor(X/1e3);n.querySelectorAll("[data-elapsed]").forEach(ht=>{ht.textContent=rt>=2?` ${rt} s`:""}),X>=P.tip&&w()&&n.querySelectorAll("[data-slowtip]").forEach(ht=>{ht.hidden=!1})},500),H=null;function z(){if(!o.bytes||!o.job)return;clearTimeout(H);let F={name:o.fileName,bytes:o.bytes,job:o.job,scale:o.scale,savedAt:Date.now()},X=o.partKey,rt=o.recent[0]?.key!==X;H=setTimeout(async()=>{o.recent=await hm(F,o.recent,X),rt&&W()},400)}async function $(F){let X=await ea(`part:${F}`);if(X?.bytes)return T(null,X);o.recent=await Fu(F,o.recent),o.error="That drawing is no longer kept in this browser.",W()}function J(F,X){if(F.byteLength!==X.byteLength)return!1;let rt=new Uint8Array(F),ht=new Uint8Array(X);for(let et=0;et<rt.length;et++)if(rt[et]!==ht[et])return!1;return!0}function O(){let F=o.bytes?o.partKey:null;return o.recent.filter(X=>X.key!==F)}function Z(F){let X=(Date.now()-F)/864e5;return X<1?"today":X<2?"yesterday":X<30?`${Math.floor(X)} days ago`:new Date(F).toLocaleDateString()}function W(){if(!n.isConnected)return;let F=n.querySelector("[data-keep-scroll]"),X=F?F.scrollTop:0,rt=o.step,ht=[o.a?"Give the stock\u2019s thickness, then choose how each kind of shape is cut and how deep.":"Drop a drawing. ncCut2D groups alike shapes so you choose each kind once.","Pick the material. ncCAM sets the speeds, feeds and depth of each pass.","Tools are picked from your Tool Library. Change any of them, or just continue.","Watch the cut play through. When it looks right, load it."][rt-1],et=[o.a?"What to cut":"Open your drawing","What are you cutting it from?","Here\u2019s the plan",o.simChecks&&!o.simChecks.ok?"Check the warnings":"Ready to cut"][rt-1];n.innerHTML=`
      <nav class="ncc-rail" aria-label="Steps">
        <div class="ncc-rail-head"><div class="ncc-eyebrow">Plugin</div><div class="ncc-rail-title">ncCut2D<span class="ncc-beta">Beta</span></div><div class="ncc-rail-sub">DXF, SVG, PDF or AI to G-code</div></div>
        <div class="ncc-steps">${pM.map((ge,gt)=>{let Gt=gt+1,te=Gt===rt?"on":Gt<o.maxStep||Gt<rt?"done":"";return`<button class="ncc-step ${te}" type="button" data-go="${Gt}" ${Gt<=o.maxStep?"":"disabled"}><span class="ncc-num">${te==="done"?"\u2713":Gt}</span>${ce(ge)}</button>`}).join("")}</div>
        <button class="ncc-close" type="button" data-act="close">${$e.close}Close</button>
      </nav>
      <section class="ncc-main">
        <div class="ncc-top">
          <div><h1>${ce(et)}</h1><p class="ncc-lede">${ce(ht)}</p></div>
          <div class="ncc-conn"><span class="ncc-dot ${o.connected?"ok":""}"></span>${o.connected?"Connected":"Not connected"}</div>
        </div>
        <div class="ncc-body ${rt===3?"fixed":""}">${[wt,xe,V,mt][rt-1]()}</div>
        <div class="ncc-foot">${it()}</div>
      </section>
      ${o.toast?`<div class="ncc-toast" role="status">${ce(o.toast)}</div>`:""}`;let dt=n.querySelector("[data-keep-scroll]");dt&&(dt.scrollTop=X);let zt=n.querySelector("[data-viewer]");if(zt){zt.replaceWith(h.el);let ge=o.loading||rt===4&&!o.result?U(o.loading||"Making toolpaths\u2026"):"";h.el.querySelectorAll(".ncc-busy, .ncc-overlay").forEach(gt=>gt.remove()),h.el.insertAdjacentHTML("beforeend",(rt===4?Dt():"")+ge),h.fit(),rt===2&&Te(),rt===3&&I(),rt===4&&o.result&&Ot()}}function it(){let F=`<button class="ncc-back" type="button" data-go="${o.step-1}" ${o.step>1?"":"disabled"}>Back</button>`;if(o.step===1){let rt=o.a?o.job?.stock.thickness>0?o.plan&&!o.plan.ops.length?"Nothing is set to be cut.":"":"Give the stock\u2019s thickness first.":"";return`${F}${rt?`<span class="ncc-foot-note">${rt}</span>`:""}<button class="ncc-next" type="button" data-go="2" ${o.plan&&o.plan.ops.length&&!o.loading&&!o.planning?"":"disabled"}>Next: Stock ${$e.next}</button>`}if(o.step===2)return`${F}<button class="ncc-next" type="button" data-go="3">Next: Operations ${$e.next}</button>`;if(o.step===3){let rt=o.plan&&o.plan.ops.some(ht=>ht.enabled);return`${F}<button class="ncc-next" type="button" data-go="4" ${rt&&!o.planning?"":"disabled"}>Make toolpaths ${$e.next}</button>`}let X=o.simChecks&&!o.simChecks.ok;return`${F}${X?'<span class="ncc-foot-note ncc-bad">Fix the problems above before loading.</span>':""}<button class="ncc-next" type="button" data-act="load" ${o.result&&o.simChecks&&!X?"":"disabled"}>${$e.load}Load into ncSender</button>`}let ot={outside:qn.cutout,inside:qn.inside,pocket:qn.pocket,online:qn.online,off:"#8a94a3"},Mt=".dxf,.svg,.pdf,.ai,.DXF,.SVG,.PDF,.AI";function wt(){if(!o.a&&!o.loading)return`<div class="ncc-drop" data-drop>
        <div class="ncc-drop-icon">${$e.upload}</div>
        <h2>Drop a DXF, SVG, PDF or AI file here</h2>
        <p>A drawing to size, from Fusion, Inkscape, Illustrator, LibreCAD or QCAD. Each shape gets a cut: <strong>Outer (part)</strong>, <strong>Inner (perimeter)</strong>, <strong>Inner (clearing)</strong> or <strong>On the line</strong>.</p>
        <label class="ncc-btn" style="display: inline-flex; align-items: center; gap: 8px">Open file<input type="file" accept="${Mt}" data-file hidden></label>
        ${o.error?`<div class="ncc-hint bad" style="max-width: 520px">${$e.warn}<span>${ce(o.error)}</span></div>`:""}
        ${O().length?`<div class="ncc-recent"><div class="ncc-recent-h">Recent drawings <span>kept in this browser</span></div>
          ${O().map(X=>`<div class="ncc-recent-row"><button class="ncc-recent-open" type="button" data-recent-open="${ce(X.key)}"><span class="ncc-file-name">${ce(X.name)}</span><span class="ncc-file-sub">${Z(X.savedAt)}</span></button><button class="ncc-recent-x" type="button" data-forget="${ce(X.key)}" aria-label="Forget ${ce(X.name)}" title="Forget">${$e.close}</button></div>`).join("")}</div>`:""}
        ${o.tools.length?"":`<div class="ncc-hint" style="max-width: 520px">${$e.info}<span>Your Tool Library is empty. Add your end mills in Settings \u2192 Tool Library so ncCut2D can pick them.</span></div>`}
      </div>`;let F=o.a;return`
      <div class="ncc-card ncc-viewcard ncc-grow">
        <div class="ncc-file">
          <div style="display: flex; align-items: center; gap: 12px; min-width: 0">
            <div class="ncc-drop-icon" style="width: 38px; height: 38px; border-radius: 10px">${$e.part}</div>
            <div style="min-width: 0"><div class="ncc-file-name">${ce(o.fileName)}</div>
            <div class="ncc-file-sub ncc-mono">${F?`${d(F.size[0])} \xD7 ${g(F.size[1])} \xB7 ${F.shapes.length} shape${F.shapes.length===1?"":"s"}`:"&nbsp;"}</div></div>
          </div>
          <div style="display: flex; gap: 8px; align-items: center">
          ${O().length?`<select class="ncc-select ncc-recent-pick" data-recent aria-label="Recent drawings" ${o.loading?"disabled":""}><option value="">Recent drawings\u2026</option>${O().map(X=>`<option value="${ce(X.key)}">${ce(X.name)} \xB7 ${Z(X.savedAt)}</option>`).join("")}</select>`:""}
          <label class="ncc-btn muted" style="white-space: nowrap">Open another file<input type="file" accept="${Mt}" data-file hidden></label>
          </div>
        </div>
        <div class="ncc-drawing" data-drawing>${F?Kt():U(o.loading||"Reading\u2026","position: static; flex: 1")}</div>
        <div class="ncc-row-sub" style="margin: 0">Click a shape to choose its cut on its own; shift-click for more. ${qt()}</div>
      </div>
      <div class="ncc-col ncc-side" data-keep-scroll="cuts">
        ${F?`${fe()}${Be()}${re()}${Nt()}${pe(!0)}`:""}
      </div>`}let qt=()=>["outside","inside","pocket","online","off"].map(F=>`<span style="white-space: nowrap"><span class="ncc-swatch" style="background: ${ot[F]}"></span> ${ce(Sc[F])}</span>`).join(" ");function Kt(){let F=o.a,[X,rt]=F.size,ht=Math.max(X,rt)*.03+1,et=Tr(o.groups),dt=F.shapes.map((gt,Gt)=>Gt).sort((gt,Gt)=>(F.areas[Gt]||0)-(F.areas[gt]||0)),zt=Math.max(X,rt)/500,ge=dt.map(gt=>{let Gt=F.shapes[gt],te=rs(F,o.job,gt,et),Ie=Gt.pts.map((ft,at)=>`${at?"L":"M"}${ft[0].toFixed(3)} ${(rt-ft[1]).toFixed(3)}`).join("")+(F.loops[gt]?"Z":""),sn=ot[te.cut],L=o.sel.has(gt),j=te.cut==="pocket"&&F.loops[gt]?`fill="${sn}" fill-opacity="0.22"`:F.loops[gt]?'fill="transparent"':'fill="none"';return`<path d="${Ie}" data-shape="${gt}" stroke="${L?"var(--color-accent)":sn}" stroke-width="${(L?3:1.4)*zt}" ${te.cut==="off"?`stroke-dasharray="${4*zt} ${3*zt}"`:""} ${j} vector-effect="non-scaling-stroke" style="cursor: pointer"><title>${ce(ut(gt))} \xB7 ${ce(Sc[te.cut])}${ne(te)}</title></path>`}).join("");return`<svg viewBox="${-ht} ${-ht} ${X+2*ht} ${rt+2*ht}" preserveAspectRatio="xMidYMid meet" style="width: 100%; height: 100%; display: block">${ge}</svg>`}let ne=F=>F.cut==="off"?"":F.depth===null||F.depth===void 0?" \xB7 through":` \xB7 ${g(F.depth)} deep`;function ut(F){let X=o.a,rt=X.circles[F];if(!X.loops[F])return"Line";if(rt)return`\xD8${g(2*rt.r)} circle`;let ht=Fc([X.shapes[F]]);return`${d(ht.w)} \xD7 ${g(ht.h)} shape`}function pt(F){let X=F.idx.length,rt=X>1?`${X} \xD7 `:"";if(F.kind==="outline")return X>1?`Outline (${X} shapes joined)`:"Outline";if(F.kind==="line")return X>1?`${X} lines`:"A line";if(F.kind==="counterbore"){let{sizes:ht,step:et,last:dt}=F.label;return`${rt}\xD8${g(ht[et])} ${dt?"hole through the":et?"inner step of the":"outer step of the"} counterbore${X>1?"s":""} (${ht.map(zt=>d(zt)).join(" / ")})`}return F.kind==="circle"?`${rt}\xD8${g(F.label.d)} circle${X>1?"s":""}`:`${rt}${d(F.label.w)} \xD7 ${g(F.label.h)} ${F.kind==="rect"?"rectangle":"shape"}${X>1?"s":""}`}let Tt=F=>F?["outside","inside","pocket","online","off"]:["online","off"];function ee(F,X,rt){let ht=Tt(rt).map(zt=>`<option value="${zt}" ${X.cut===zt?"selected":""}>${ce(Sc[zt])}</option>`).join(""),et=X.depth===null||X.depth===void 0,dt=X.cut==="off"?"":`<label class="ncc-chk"><input type="checkbox" data-through="${ce(F)}" ${et?"checked":""}> Through</label>
      ${et?"":`<input class="ncc-input ncc-mono ncc-depth" type="text" data-unit="length" data-min="0" autocomplete="off" spellcheck="false" aria-label="Depth (${o.units})" data-depth="${ce(F)}" value="${x(X.depth)}"><span class="ncc-unit">${o.units} deep</span>`}`;return`<div class="ncc-choose"><select class="ncc-select" data-cut="${ce(F)}" aria-label="Cut">${ht}</select>${dt}</div>`}function Nt(){let F=Tr(o.groups);return`<div class="ncc-card"><div class="ncc-label">What to cut</div>${o.groups.map(rt=>{let ht=rs(o.a,o.job,rt.idx[0],F),et=rt.idx.filter(dt=>o.job.shapes[dt]).length;return`<div class="ncc-decide" data-hover="${ce(rt.key)}">
        <div class="ncc-decide-name"><span class="ncc-swatch" style="background: ${ot[ht.cut]}"></span>${ce(pt(rt))}${et?`<small> \xB7 ${et} set on ${et>1?"their":"its"} own</small>`:""}</div>
        ${ee(rt.key,ht,rt.kind!=="line")}
      </div>`}).join("")}</div>`}function re(){if(!o.sel.size)return"";let F=[...o.sel],X=Tr(o.groups),rt=rs(o.a,o.job,F[0],X),ht=F.every(dt=>o.a.loops[dt]),et=F.some(dt=>o.job.shapes[dt]);return`<div class="ncc-card ncc-sel-card">
        <div class="ncc-row"><div class="ncc-row-title">${F.length>1?`${F.length} shapes selected`:ce(ut(F[0]))}</div><button type="button" class="ncc-link" data-act="unselect">Clear</button></div>
        ${ee("sel",rt,ht)}
        ${et?'<button type="button" class="ncc-link" data-act="sel-reset">Back to its group\u2019s choice</button>':'<div class="ncc-row-sub">A change here applies to the selected shapes only.</div>'}
      </div>`}function Be(){let F=o.job.stock.thickness,X=F?x(F):"";return`<div class="ncc-card ${F?"":"ncc-need"}">
        <div class="ncc-row"><div class="ncc-row-text"><div class="ncc-row-title">Stock thickness</div><div class="ncc-row-sub">${F?"\u201CThrough\u201D cuts go this deep and a little into the spoilboard.":"How thick is the board? Measure it: every \u201Cthrough\u201D cut depends on it."}</div></div>
        <div style="display: flex; align-items: center; gap: 6px"><input class="ncc-input ncc-mono ncc-depth" type="text" data-unit="length" data-min="0" autocomplete="off" spellcheck="false" aria-label="Stock thickness (${o.units})" data-thick value="${X}" placeholder="?"><span class="ncc-unit">${o.units}</span></div></div>
      </div>`}function fe(){let F=o.a,X=Fc(o.raw),rt=o.info?.units==null||o.info?.units==="unitless",ht=Math.round(o.scale*1e4)/100;return`<div class="ncc-card">
        <div class="ncc-fields">${["X","Y"].map((et,dt)=>`<div class="ncc-field"><label for="ncc-size${dt}">${et} (${o.units})</label><input id="ncc-size${dt}" class="ncc-input ncc-mono" type="text" data-unit="length" data-min="0" autocomplete="off" spellcheck="false" data-size="${dt}" value="${x(F.size[dt])}"></div>`).join("")}</div>
        <div class="ncc-row-sub">${ht===100?"As drawn":`Scaled to ${ht}%`}${o.info?.units?` \xB7 the file says ${ce(o.info.units)}`:""}.${ht!==100?' <button type="button" class="ncc-link" data-scale="reset">Back to the drawing\u2019s size</button>':""}</div>
        ${rt&&ht===100&&Math.max(X.w,X.h)<50?`<div class="ncc-hint">${$e.info}<span>Only ${d(Math.max(X.w,X.h))} across and the file has no unit: it may be in inches. <button type="button" class="ncc-link" data-scale="inch">Make it inches (\xD7 25.4)</button></span></div>`:""}
        ${o.info?.notes?`<div class="ncc-hint">${$e.info}<span>${ce(o.info.notes)}</span></div>`:""}
      </div>`}function pe(){let F=o.slow?`<div class="ncc-hint">${$e.info}<span>${ce(o.slow)}</span></div>`:"";return o.plan?F+o.plan.warnings.map(X=>`<div class="ncc-hint ${X.kind==="notool"?"bad":""}">${X.kind==="notool"?$e.warn:$e.info}<span>${ce(X.text)}</span></div>`).join(""):F}let be=null;function xe(){let F=o.job,X=o.plan?.stock||Ec(o.a,F),rt=Object.entries(cs).map(([et,dt])=>`<button class="ncc-pick ncc-mat ${F.material===et?"sel":""}" type="button" data-material="${et}"><span class="ncc-mat-swatch" style="background: ${Cr[et]}"></span>${ce(dt.name)}<small>${ce(dt.note)}</small></button>`).join(""),ht=(et,dt,zt)=>`<div class="ncc-field"><label for="ncc-${et}">${dt}</label><input id="ncc-${et}" class="ncc-input ncc-mono" type="text" data-unit="length" data-min="0" autocomplete="off" spellcheck="false" data-stock="${et}" value="${x(zt)}" ${F.stock.fit&&et!=="thickness"?"disabled":""}></div>`;return`
      <div class="ncc-col ncc-half">
        <div class="ncc-card ncc-mat-card"><div class="ncc-label">Material</div><div class="ncc-picks ncc-mats">${rt}</div></div>
        <div class="ncc-card">
          ${Ne("fit","Size the stock to the drawing",`Adds ${g(F.stock.margin)} on every side`,F.stock.fit)}
          <div class="ncc-fields">${ht("width",`Width X (${o.units})`,X.width)}${ht("depth",`Depth Y (${o.units})`,X.depth)}${ht("thickness",`Thickness Z (${o.units})`,X.thickness)}</div>
        </div>
        <div class="ncc-card">
          ${Ne("tabs","Leave tabs to hold the part",F.tabs.enabled?`${d(tn().height)} \xD7 ${g(tn().length)}, so the part stays put until you cut it free`:"The part comes loose at the end",F.tabs.enabled)}
          ${F.tabs.enabled?`<div class="ncc-row"><span class="ncc-row-title" style="font-weight: 500">Number of tabs</span><div class="ncc-stepper"><button type="button" data-tabs="-1" aria-label="Fewer tabs" ${F.tabs.count<=1?"disabled":""}>\u2212</button><span class="ncc-mono">${F.tabs.count}</span><button type="button" data-tabs="1" aria-label="More tabs" ${F.tabs.count>=12?"disabled":""}>+</button></div></div>
          ${Ge("height","Tab thickness","Thinner tabs","Thicker tabs")}
          ${Ge("length","Tab length","Shorter tabs","Longer tabs")}`:""}
        </div>
      </div>
      <div class="ncc-col ncc-half">
        <div class="ncc-card ncc-zero-card"><div class="ncc-label">Where is zero?</div>${tt(X)}
          <div style="font-size: 14px">X Y zero: <strong>${ce(Ke(F.zero.xy))}</strong> of the stock</div>
          <div class="ncc-seg" role="group" aria-label="Z zero">
            <button type="button" class="${F.zero.z==="top"?"sel":""}" data-z="top">Z0 on top of stock</button>
            <button type="button" class="${F.zero.z==="bed"?"sel":""}" data-z="bed">Z0 on the bed</button>
          </div>
        </div>
      </div>`}let Ne=(F,X,rt,ht)=>`<div class="ncc-row"><div class="ncc-row-text"><div class="ncc-row-title">${ce(X)}</div><div class="ncc-row-sub">${ce(rt)}</div></div><button class="ncc-toggle" type="button" role="switch" aria-checked="${ht}" aria-label="${ce(X)}" data-toggle="${F}"></button></div>`;function Ke(F){return{"back-left":"back left corner","back-center":"back edge, middle","back-right":"back right corner","left-center":"left edge, middle",center:"center","right-center":"right edge, middle","front-left":"front left corner","front-center":"front edge, middle","front-right":"front right corner"}[F]}let tn=()=>({...ui(o.job.material),...Object.fromEntries(["height","length"].filter(F=>o.job.tabs[F]!=null).map(F=>[F,o.job.tabs[F]]))}),De=()=>o.units==="in"?{min:.508,max:10.16,step:.508,grid:.254}:{min:.5,max:10,step:.5,grid:.1};function Ge(F,X,rt,ht){let et=tn()[F];return`<div class="ncc-row"><span class="ncc-row-title" style="font-weight: 500">${X}</span><div class="ncc-stepper"><button type="button" data-tabsize="${F}" data-by="-1" aria-label="${rt}" ${et<=De().min+1e-6?"disabled":""}>\u2212</button><span class="ncc-mono">${g(et,o.units==="in"?2:1)}</span><button type="button" data-tabsize="${F}" data-by="1" aria-label="${ht}" ${et>=De().max-1e-6?"disabled":""}>+</button></div></div>`}function tt(F){return`<div class="ncc-zero"><div data-viewer></div></div>
      <div class="ncc-row-sub ncc-mono" style="text-align: center; margin: 0">${d(F.width)} \xD7 ${d(F.depth)} \xD7 ${g(F.thickness)} stock \xB7 tap a point for zero, an arrow to turn the part</div>`}let qe=null;function Te(){let F=o.plan?.stock||Ec(o.a,o.job),X=Gp.map(et=>({key:et,...Cu(F,{xy:et,z:"top"})})),rt=getComputedStyle(n).getPropertyValue("--color-accent").trim()||"#4c6ef5",ht=`${o.part?.positions?.length}|${F.width}|${F.depth}|${F.thickness}`;h.keepCamera=qe===ht,h.showZero({stock:F,part:o.part,points:X,selected:o.job.zero.xy,zFace:o.job.zero.z,color:Cr[o.job.material],accent:rt}),qe=ht,be=null,Vt=null,h.onPick=null,h.onMarker=et=>{et!==o.job.zero.xy&&(o.job.zero.xy=et,Ze())},h.onAxis=null}function V(){let F=o.plan;if(!F)return U("Planning\u2026","position: static; flex: 1");let X=F.ops.map(gt=>{let Gt=ct(gt);return`<div class="ncc-op ${gt.enabled?"":"off"} ${o.focusOp===gt.id?"focus":""}" data-focus="${gt.id}">
        <div class="ncc-op-icon" style="background: color-mix(in srgb, ${qn[gt.kind]} 16%, transparent); color: ${qn[gt.kind]}">${$e[gt.kind]||$e.pocket}</div>
        <div class="ncc-op-text"><div class="ncc-op-title">${ce(gt.label)}</div><div class="ncc-op-sub ncc-mono">${ce(gt.detail)}</div></div>
        <select class="ncc-select" data-tool="${gt.id}" aria-label="Tool for ${ce(gt.label)}">${Gt.map(te=>`<option value="${te.id}" ${te.id===gt.tool.id?"selected":""}>T${hs(te,o.numbering)} \xB7 ${ce(te.name)}</option>`).join("")}</select>
        <button class="ncc-toggle" type="button" role="switch" aria-checked="${gt.enabled}" aria-label="${ce(gt.label)}" data-op="${gt.id}"></button>
      </div>`}).join(""),rt=Tc(F),ht=new Map;for(let gt of F.ops)gt.enabled&&gt.kind!=="face"&&ht.set(gt.tool.id,(ht.get(gt.tool.id)||0)+1);let et=[...ht].sort((gt,Gt)=>Gt[1]-gt[1])[0]?.[0],dt=F.ops.find(gt=>gt.enabled&&gt.tool.id===et)||F.ops.find(gt=>gt.enabled),zt=dt?.feeds,ge=`<div class="ncc-pair">
          <div class="ncc-card"><div class="ncc-label">Finish</div>
            <div class="ncc-seg" role="group" aria-label="Finish">${Object.entries(Gn).map(([gt,Gt])=>`<button type="button" class="${o.job.finish===gt?"sel":""}" data-finish="${gt}">${Gt.name}</button>`).join("")}</div>
            <div class="ncc-row-sub">${{fast:"Bigger steps, no finishing pass.",balanced:`Leaves ${g(.2,o.units==="in"?3:1)} on the walls, then a clean finishing pass.`,smooth:"Lighter steps and a finishing pass, for the best walls."}[o.job.finish]}</div>
            ${zt?`<div class="ncc-mono ncc-row-sub" style="line-height: 1.6">${ce(dt.tool.name)}<br>${ce(cs[o.job.material].name)} \xB7 ${zt.rpm.toLocaleString()} RPM<br>${o.units==="in"?`${d(zt.feed,1)} in/min`:`${zt.feed.toLocaleString()} mm/min`} \xB7 ${g(zt.stepdown,o.units==="in"?3:2)} per pass</div>`:""}
          </div>
          <div class="ncc-card"><div class="ncc-label">Tools for this job</div>
            ${rt.map(gt=>`<div class="ncc-row"><span style="min-width: 0"><span class="ncc-mono" style="color: var(--color-accent)">T${hs(gt,o.numbering)}</span> ${ce(gt.name)}</span><span class="ncc-slot ${f(gt)?"":"hand"}">${f(gt)?`Slot ${gt.toolNumber}`:"By hand"}</span></div>`).join("")||'<div class="ncc-row-sub">No operations switched on.</div>'}
            ${rt.some(gt=>!gt.toolNumber)?'<div class="ncc-row-sub">By hand: not in the magazine, so you\u2019ll be asked to load it.</div>':""}
          </div>
        </div>`;return`<div class="ncc-plan">
        <div class="ncc-plan-list" data-keep-scroll="ops"><div class="ncc-ops">${X}</div>${st()}${pe(!1)}<div class="ncc-plan-pair-in">${ge}</div></div>
        <div class="ncc-card ncc-viewcard ncc-plan-view"><div data-viewer></div></div>
        <div class="ncc-plan-pair">${ge}</div>
      </div>`}function I(){let X=(o.plan?.ops||[]).filter(rt=>rt.enabled&&rt.kind!=="face").flatMap(rt=>{let ht=o.focusOp&&o.focusOp!==rt.id;return rt.kind==="chamfer"?rt.show.map(dt=>({loops:dt.loops,z:dt.z+.05,color:qn.chamfer,opacity:ht?.2:1,top:dt.z})):{loops:rt.region||(rt.lines||[]).map(dt=>dt.pts)||[],z:rt.kind==="cutout"?rt.zTop+.05:Math.max(rt.zBottom,0)+.05,color:qn[rt.kind],dashed:rt.kind==="cutout",opacity:ht?.2:1,top:rt.zTop}});h.keepCamera=be===o.part?.positions,h.showPart(o.part,X),be=o.part?.positions,Vt=null,qe=null,h.onFrame=null,h.onMarker=null,h.onPick=null}function st(){let F=o.job.chamfer,X=F?.size>0,rt=X?F.size:Di.size,ht=F?.edges||"all",et=X?o.plan.ops.some(dt=>dt.kind==="chamfer")?"A V-bit runs along each top edge the cuts made, after the cut-out.":"No edge can be chamfered: see the notes below.":"Off: edges stay sharp.";return`<div class="ncc-card" style="margin-top: 10px">
        <div class="ncc-row"><div class="ncc-row-text"><div class="ncc-row-title">Add Chamfer to top surfaces</div><div class="ncc-row-sub">${ce(et)}</div></div><button class="ncc-toggle" type="button" role="switch" aria-checked="${X}" aria-label="Add Chamfer to top surfaces" data-toggle="chamfer"></button></div>
        ${X?`<div class="ncc-row"><span class="ncc-row-title" style="font-weight: 500">Width</span><div class="ncc-stepper"><button type="button" data-chamfer="-1" aria-label="Narrower chamfer" ${rt<=Di.min+1e-6?"disabled":""}>\u2212</button><span class="ncc-mono">${g(rt,o.units==="in"?3:1)}</span><button type="button" data-chamfer="1" aria-label="Wider chamfer" ${rt>=Di.max-1e-6?"disabled":""}>+</button></div></div>
        <div class="ncc-seg" role="group" aria-label="Which edges">${Object.entries({all:"All edges",outside:"Outside",inside:"Pockets & holes"}).map(([dt,zt])=>`<button type="button" class="${ht===dt?"sel":""}" data-chamfer-edges="${dt}">${zt}</button>`).join("")}</div>`:""}
      </div>`}function ct(F){let X=F.kind==="drill"?["drill"]:F.kind==="face"?["surfacing","flat"]:F.kind==="finish3d"?["ball","flat"]:F.kind==="chamfer"?["vbit","chamfer"]:F.kind==="thread"?["threadmill"]:["flat"],rt=o.tools.filter(ht=>X.includes(ht.kind)&&(F.angle==null||Math.abs(ht.angle/2-F.angle)<=1.5)).sort((ht,et)=>et.diameter-ht.diameter);return rt.some(ht=>ht.id===F.tool.id)?rt:[F.tool,...rt]}function mt(){let F=o.result,X=F?.plan,rt=X?Tc(X):[],ht=X?X.ops.filter(et=>et.enabled).reduce((et,dt,zt,ge)=>et+(zt>0&&ge[zt-1].tool.id!==dt.tool.id?1:0),0):0;return`
      <div class="ncc-card ncc-viewcard ncc-grow">
        <div data-viewer></div>
        <div class="ncc-play" data-playbar>${vt()}</div>
      </div>
      <div class="ncc-col ncc-side">
        <div class="ncc-card ncc-stats">
          <div class="ncc-stat"><b class="ncc-mono">${X?Math.max(1,Math.round(F.seconds/60)):"\u2013"}<span> min</span></b><span>Run time</span></div>
          <div class="ncc-stat"><b class="ncc-mono">${rt.length||"\u2013"}</b><span>Tools</span></div>
          <div class="ncc-stat"><b class="ncc-mono">${X?ht:"\u2013"}</b><span>Tool changes</span></div>
        </div>
        <div class="ncc-card"><div class="ncc-label">Checked</div>${Pt()}</div>
        ${o.slow?`<div class="ncc-hint">${$e.info}<span>${ce(o.slow)}</span></div>`:""}
        <div class="ncc-card">
          <div class="ncc-mono ncc-row-sub" style="margin: 0">${ce(Et())}${F?` \xB7 ${(F.gcode.split(`
`).length-1).toLocaleString()} lines`:""}</div>
          <div class="ncc-row" title="Also save each program you load to File Manager \u203A ncCut2D"><div class="ncc-row-text"><div class="ncc-row-title">Save to File Manager</div><div class="ncc-row-sub">${o.saveToFm?"Load into ncSender also saves it in ncCut2D.":"Off: only loaded."}</div></div><button class="ncc-toggle" type="button" role="switch" aria-checked="${!!o.saveToFm}" aria-label="Save to File Manager" data-toggle="savefm"></button></div>
        </div>
      </div>`}let Et=()=>`${(o.fileName||"drawing").replace(/\.(dxf|svg|pdf|ai)$/i,"")}.nc`;function Pt(){let F=o.simChecks;return F?F.items.map(X=>`<div class="ncc-check"><span class="ncc-ck ${X.state}">${X.state==="bad"?$e.cross:X.state==="info"?"!":$e.check}</span><span>${ce(X.text)}</span></div>`).join(""):`<div class="ncc-row-sub">${o.result?"Checking\u2026":"Waiting for the toolpaths\u2026"}<span class="ncc-elapsed" data-elapsed></span></div>`}let k={ops:[],moves:null,opOf:null,cum:null,total:0,t:0,i:1,playing:!1,speed:5,hm:null,stamps:[],colors:[],cursor:null,goal:null};function vt(){if(!o.result)return"";let X=o.result.plan.ops.filter(et=>et.enabled&&et.track),rt=k.total||1,ht=X[Math.max(0,k.opIndexAt?.(k.t)??0)];return`<button class="ncc-playbtn" type="button" data-act="play" aria-label="${k.playing?"Pause":"Play"}">${k.playing?$e.pause:$e.play}</button>
      <div class="ncc-track">
        <div class="ncc-bar" data-scrub role="slider" aria-label="Position in the program" aria-valuemin="0" aria-valuemax="${Math.round(rt)}" aria-valuenow="${Math.round(k.t)}">
          ${X.map(et=>`<i style="width: ${(et.seconds||0)/rt*100}%; background: ${qn[et.kind]}"></i>`).join("")}
          <b style="width: ${k.t/rt*100}%"></b><em style="left: ${k.t/rt*100}%"></em>
        </div>
        <div class="ncc-row" style="font-size: 12px; color: var(--color-text-secondary)"><span data-pb="step">${yn(X,ht)}</span><span class="ncc-mono" data-pb="clock">${Nc(k.t)} / ${Nc(rt)}</span></div>
      </div>
      <div class="ncc-seg" style="padding: 3px" role="group" aria-label="Speed">${[[1,"Slow"],[5,"Normal"],[25,"Fast"]].map(([et,dt])=>`<button type="button" style="padding: 6px 8px" class="${k.speed===et?"sel":""}" data-speed="${et}">${dt}</button>`).join("")}</div>`}function Dt(){return`<div class="ncc-overlay tr">
      <button class="ncc-chip ${h.paths?.visible!==!1&&o.showPaths?"on":""}" type="button" data-act="paths">Toolpaths</button>
      <button class="ncc-chip ${o.showPart?"on":""}" type="button" data-act="ghost">Part</button>
    </div>`}let Vt=null;function Ot(){if(Vt===o.result){At();return}Vt=o.result,be=null,qe=null,h.onMarker=null,h.onPick=null;let F=o.result.plan,X=F.ops.filter(gt=>gt.enabled&&gt.track),rt=Ni.cellFor(F.stock,w()?380*380:520*520);k.ops=X,k.hm=Kp(new Ni(F.stock,rt)),k.colors=F.ops.map(gt=>new ae(qn[gt.kind])),k.stamps=F.ops.map(gt=>Pu(gt.tool,rt));let ht=0;for(let gt of X)ht+=gt.track.length/4;k.moves=new Float32Array(ht*4),k.opOf=new Uint16Array(ht),k.cum=new Float64Array(ht);let et=0,dt=0,zt=null,ge=o.maxRapid||5e3;for(let gt of X){let Gt=F.ops.indexOf(gt);for(let te=0;te<gt.track.length;te+=4,et++){if(k.moves.set(gt.track.subarray(te,te+4),et*4),k.opOf[et]=Gt,zt){let Ie=Math.hypot(gt.track[te]-zt[0],gt.track[te+1]-zt[1],gt.track[te+2]-zt[2]);dt+=Ie/(gt.track[te+3]>0?gt.track[te+3]:ge)*60}zt=[gt.track[te],gt.track[te+1],gt.track[te+2]],k.cum[et]=dt}}k.total=dt,k.opIndexAt=gt=>{let Gt=Math.min(ht-1,Yt(k.cum,gt));return X.indexOf(F.ops[k.opOf[Gt]])},k.t=0,k.i=1,k.cursor=null,k.toolOp=-1,k.snaps=[],k.goal=null,k.cutT=0,h.showStock(k.hm,Cr[F.job.material]||Cr.mdf,o.part);{let gt=k.hm,Gt=[gt.x0,gt.y0,gt.bottom],te=[gt.x0+(gt.nx-1)*gt.cell,gt.y0+(gt.ny-1)*gt.cell,gt.top];for(let Ie of X){let sn=Ie.tool.diameter/2;for(let L=0;L<Ie.track.length;L+=4)Ie.track[L+3]!==0&&(Gt[0]=Math.min(Gt[0],Ie.track[L]-sn),te[0]=Math.max(te[0],Ie.track[L]+sn),Gt[1]=Math.min(Gt[1],Ie.track[L+1]-sn),te[1]=Math.max(te[1],Ie.track[L+1]+sn))}h.frame(Gt,te)}h.showPaths(X),o.showPaths=o.showPaths??!1,At(),Q(0),k.speed=5,k.rate=Math.max(1,k.total/600/5),h.onFrame=Jt,Pr(F),k.playing=!1,nn()}function At(){h.paths&&(h.paths.visible=!!o.showPaths),h.partGhost&&(h.partGhost.visible=!!o.showPart)}function Yt(F,X){let rt=0,ht=F.length;for(;rt<ht;){let et=rt+ht>>1;F[et]<X?rt=et+1:ht=et}return rt}let $t=F=>({x:k.moves[F*4],y:k.moves[F*4+1],z:k.moves[F*4+2],r:k.moves[F*4+3]===0});function le(F,X=1/0){let rt=k.hm,ht=k.cum.length,et=1/0,dt=-1,zt=(gt,Gt,te)=>{let Ie=o.result.plan.ops[te].tool.diameter/2/rt.cell+3,sn=Math.floor((Math.min(gt.y,Gt.y)-rt.y0)/rt.cell-Ie),L=Math.ceil((Math.max(gt.y,Gt.y)-rt.y0)/rt.cell+Ie);et=Math.min(et,Math.max(0,sn)),dt=Math.max(dt,Math.min(rt.ny-1,L))},ge=0;for(;k.i<ht&&k.cum[k.i]<=F;){if((++ge&31)===0&&performance.now()>X)return k.cutT=k.cum[k.i-1],[et,dt,!1];!k.cursor&&(k.opOf[k.i]!==k.opOf[k.i-1]||Math.floor(k.cum[k.i]/k.total*10)>Math.floor(k.cum[k.i-1]/k.total*10))&&Re();let gt=k.cursor||$t(k.i-1),Gt=$t(k.i),te=k.opOf[k.i];Gt.r||(Iu(rt,o.result.plan.ops[te].tool,gt,Gt,te),zt(gt,Gt,te)),k.cursor=null,k.i++}if(k.i<ht&&F>k.cum[k.i-1]){let gt=k.cursor||$t(k.i-1),Gt=$t(k.i),te=k.opOf[k.i],Ie=k.cum[k.i-1],sn=(F-Ie)/(k.cum[k.i]-Ie||1),L=$t(k.i-1),j={x:L.x+(Gt.x-L.x)*sn,y:L.y+(Gt.y-L.y)*sn,z:L.z+(Gt.z-L.z)*sn};Gt.r||(Iu(rt,o.result.plan.ops[te].tool,gt,j,te),zt(gt,j,te)),k.cursor=j}return k.cutT=F,[et,dt,!0]}function Q(F){let X=k.cum.length;if(!X)return;let rt=Math.min(X-1,Yt(k.cum,F)),ht=k.opOf[rt];if(ht!==k.toolOp){let gt=o.result.plan.ops[ht];h.setTool(gt.tool,gt.zTop-gt.zBottom),k.toolOp=ht}let et=$t(Math.max(0,rt-1)),dt=$t(rt),zt=rt>0?k.cum[rt-1]:0,ge=rt>0?Math.max(0,Math.min(1,(F-zt)/(k.cum[rt]-zt||1))):1;h.moveTool(et.x+(dt.x-et.x)*ge,et.y+(dt.y-et.y)*ge,et.z+(dt.z-et.z)*ge)}let Ct=0,yt=0,It=0,Rt=[1/0,-1],bt={drag:12,catchUp:250};function Jt(F){let X=Ct?Math.min(.1,(F-Ct)/1e3):0;if(Ct=F,!k.cum||(k.playing&&(k.t=Math.min(k.total,k.t+X*k.speed*k.rate),k.goal=k.t),k.goal==null))return;let[rt,ht,et]=le(k.goal,performance.now()+(k.dragging||k.playing?bt.drag:bt.catchUp));Rt[0]=Math.min(Rt[0],rt),Rt[1]=Math.max(Rt[1],ht),(et||k.playing||F-It>250)&&(h.refreshStock(Rt[0],Rt[1],k.colors),Rt[0]=1/0,Rt[1]=-1,It=F),et&&(k.goal=null),k.playing&&(Q(k.t),k.t>=k.total?(k.playing=!1,nn()):F-yt>200&&(yt=F,nn()))}let Ht=["h","op","sx","sy","wx","wy","gap","deep"];function Re(){k.snaps.some(F=>F.i===k.i)||k.snaps.push({i:k.i,data:Ht.map(F=>k.hm[F].slice())})}function Se(F){if(F=Math.max(0,Math.min(k.total,F)),F<(k.cutT??0)){let X=k.snaps.filter(rt=>k.cum[rt.i-1]<=F).sort((rt,ht)=>ht.i-rt.i)[0];X?(Ht.forEach((rt,ht)=>k.hm[rt].set(X.data[ht])),k.i=X.i):(k.hm.h.fill(k.hm.top),k.hm.op.fill(0),k.hm.sx.fill(0),k.hm.sy.fill(0),k.hm.wx.fill(0),k.hm.wy.fill(0),k.hm.gap.fill(1/0),k.hm.deep.fill(-1/0),k.i=1),k.cursor=null,k.cutT=k.i>1?k.cum[k.i-1]:0,h.refreshStock(0,k.hm.ny-1,k.colors)}k.goal=F,k.t=F,Q(F),nn()}let yn=(F,X)=>X?`Step ${F.indexOf(X)+1} of ${F.length} \xB7 ${ce(X.label)} \xB7 T${hs(X.tool,o.numbering)}`:"";function nn(){let F=n.querySelector("[data-playbar]");if(!F)return;if(F._result!==o.result||F._total!==k.total||!F.querySelector("[data-scrub]")){F.innerHTML=vt(),F._result=o.result,F._total=k.total;return}let X=o.result.plan.ops.filter(Gt=>Gt.enabled&&Gt.track),rt=k.total||1,ht=`${k.t/rt*100}%`,et=X[Math.max(0,k.opIndexAt?.(k.t)??0)],dt=F.querySelector("[data-scrub]");dt.querySelector("b").style.width=ht,dt.querySelector("em").style.left=ht,dt.setAttribute("aria-valuenow",String(Math.round(k.t)));let zt=(Gt,te)=>{Gt&&Gt.innerHTML!==te&&(Gt.innerHTML=te)};zt(F.querySelector('[data-pb="step"]'),yn(X,et)),zt(F.querySelector('[data-pb="clock"]'),`${Nc(k.t)} / ${Nc(rt)}`);let ge=F.querySelector('[data-act="play"]'),gt=k.playing?"Pause":"Play";ge.getAttribute("aria-label")!==gt&&(ge.setAttribute("aria-label",gt),ge.innerHTML=k.playing?$e.pause:$e.play);for(let Gt of F.querySelectorAll("[data-speed]"))Gt.classList.toggle("sel",+Gt.dataset.speed===k.speed)}function Pr(F){setTimeout(()=>{if(o.result?.plan!==F)return;let X=o.result?.collisions||[],rt=[];if(rt.push(X.length?{state:"bad",text:`${X.length} fast move${X.length>1?"s go":" goes"} into the material (${[...new Set(X.map(dt=>F.ops.find(zt=>zt.id===dt.op)?.label))].join(", ")}).`}:{state:"ok",text:"No fast moves through the material"}),o.travel){let dt=F.stock.width<=o.travel.x&&F.stock.depth<=o.travel.y;rt.push(dt?{state:"ok",text:"The stock fits inside your machine\u2019s travel"}:{state:"bad",text:`The stock is bigger than your machine\u2019s travel (${d(o.travel.x)} \xD7 ${g(o.travel.y)}).`})}let ht=Tc(F);rt.push(ht.every(dt=>dt.fluteLength)?{state:"ok",text:"Every tool is long enough for its depth"}:{state:"info",text:"Some tools have no cutting length in the Tool Library, so their depth isn\u2019t checked."}),F.ops.find(dt=>dt.kind==="cutout"&&dt.enabled)&&rt.push({state:"ok",text:`The cut-out goes ${g(F.job.throughDepth,o.units==="in"?3:1)} into the spoilboard${F.job.tabs.enabled?`, with ${F.job.tabs.count} tabs`:""}`}),F.warnings.some(dt=>dt.kind==="undercut")&&rt.push({state:"info",text:"Some features are on the other side. Cut this side, then turn the part over and make a program for that side. Pins (the Spoilboard Toolbox plugin can set them up) put it back in the same place."}),o.simChecks={ok:!rt.some(dt=>dt.state==="bad"),items:rt},W()},50)}let Ir=F=>{if(!(F<1||F>4||F>o.maxStep+1)){if(F===4&&o.step!==4){k.playing=!1,o.step=4,o.maxStep=4,W(),E(!0);return}o.step=F,o.maxStep=Math.max(o.maxStep,F),F!==4&&(k.playing=!1),W()}},Ze=()=>{o.maxStep=Math.min(o.maxStep,Math.max(o.step,3)),o.result=null,E(!1)};n.addEventListener("click",F=>{let X=F.target.closest("[data-shape]");if(X||F.target.closest("[data-drawing]")){let dt=X?+X.dataset.shape:null;return dt===null?o.sel=new Set:F.shiftKey||F.metaKey||F.ctrlKey?o.sel.has(dt)?o.sel.delete(dt):o.sel.add(dt):o.sel=o.sel.size===1&&o.sel.has(dt)?new Set:new Set([dt]),W()}let rt=F.target.closest("[data-focus]");if(rt&&!F.target.closest("button, select")){o.focusOp=o.focusOp===rt.dataset.focus?null:rt.dataset.focus,W();return}let ht=F.target.closest("button, [data-scrub]");if(!ht||ht.disabled)return;let et=ht.dataset;if(et.go)return Ir(+et.go);if(et.material)return o.job.material=et.material,Object.assign(o.job.tabs,ui(et.material)),Ze();if(et.tabsize){let dt=tn(),zt=De();return o.job.tabs[et.tabsize]=Math.max(zt.min,Math.min(zt.max,Math.round((dt[et.tabsize]+ +et.by*zt.step)/zt.grid)*zt.grid)),Ze()}if(et.zero)return o.job.zero.xy=et.zero,Ze();if(et.z)return o.job.zero.z=et.z,Ze();if(et.finish)return o.job.finish=et.finish,Ze();if(et.tabs)return o.job.tabs.count=Math.max(1,Math.min(12,o.job.tabs.count+ +et.tabs)),Ze();if(et.toggle==="fit"){let dt=o.plan?.stock;return o.job.stock.fit=!o.job.stock.fit,!o.job.stock.fit&&dt&&Object.assign(o.job.stock,{width:dt.width,depth:dt.depth,thickness:dt.thickness}),Ze()}if(et.scale==="reset")return R(1);if(et.scale==="inch")return R(us.INCH);if(et.act==="unselect")return o.sel=new Set,W();if(et.act==="sel-reset"){for(let dt of o.sel)delete o.job.shapes[dt];return Ze()}if(et.toggle==="tabs")return o.job.tabs.enabled=!o.job.tabs.enabled,Ze();if(et.toggle==="savefm")return o.saveToFm=!o.saveToFm,c({saveToFileManager:o.saveToFm}),W();if(et.toggle==="chamfer"){let dt=o.job.chamfer||{};return o.job.chamfer=dt.size>0?{...dt,last:dt.size,size:0}:{edges:"all",...dt,size:dt.last||Di.size},Ze()}if(et.chamfer){let dt=o.job.chamfer;return dt.size=Math.max(Di.min,Math.min(Di.max,Math.round((dt.size+ +et.chamfer*Di.step)/Di.step)*Di.step)),dt.last=dt.size,Ze()}if(et.chamferEdges)return o.job.chamfer.edges=et.chamferEdges,Ze();if(et.op)return o.job.disabled[et.op]=!o.job.disabled[et.op],Ze();if(et.speed)return k.speed=+et.speed,nn();if(et.act==="play")return k.t>=k.total&&Se(0),k.playing=!k.playing,Ct=0,nn();if(et.act==="paths"){o.showPaths=!o.showPaths,At(),ht.classList.toggle("on",o.showPaths);return}if(et.act==="ghost"){o.showPart=!o.showPart,At(),ht.classList.toggle("on",o.showPart);return}if(et.act==="close")return Hn();if(et.recentOpen)return $(et.recentOpen);if(et.forget)return Fu(et.forget,o.recent).then(dt=>{o.recent=dt,W()});if(et.act==="load")return Cs(ht)}),n.addEventListener("pointerdown",F=>{if(!F.target.closest("[data-scrub]")||!k.cum)return;let rt=k.playing;k.playing=!1,k.dragging=!0;let ht=ge=>{let gt=n.querySelector("[data-scrub]").getBoundingClientRect();gt.width>0&&Se((ge-gt.left)/gt.width*k.total)};ht(F.clientX);let et=null,dt=ge=>{et===null&&requestAnimationFrame(()=>{let gt=et;et=null,ht(gt)}),et=ge.clientX},zt=()=>{k.dragging=!1,window.removeEventListener("pointermove",dt),window.removeEventListener("pointerup",zt),k.playing=rt&&k.t<k.total,Ct=0,nn()};window.addEventListener("pointermove",dt),window.addEventListener("pointerup",zt)}),n.addEventListener("change",F=>{let X=F.target;if(X.matches("input[data-unit]")){if(X.dataset.done===X.value)return;X.dataset.done=X.defaultValue=X.value}if(X.matches("[data-file]"))return T(X.files[0]);if(X.matches("[data-recent]"))return X.value&&$(X.value);if(X.dataset.tool)return o.job.toolOverride[X.dataset.tool]=+X.value||X.value,Ze();if(X.dataset.size){let ht=+X.dataset.size,et=v(X);if(!(et&&o.a?.size[ht]>0))return W();let dt=et/o.a.size[ht];return Math.abs(dt-1)<1e-9?W():R(o.scale*dt)}if(X.matches("[data-thick]")){let ht=v(X);return ht&&(o.job.stock.thickness=ht),Ze()}let rt=X.dataset.cut??X.dataset.through??X.dataset.depth;if(rt!==void 0){let ht=rt==="sel"?[...o.sel].map(et=>o.job.shapes[et]||={}):[o.job.groups[rt]||={}];if(rt==="sel"){let et=Tr(o.groups);[...o.sel].forEach((dt,zt)=>{let ge=rs(o.a,{...o.job,shapes:{}},dt,et);ht[zt].cut===void 0&&Object.assign(ht[zt],{cut:ge.cut,depth:ge.depth})})}else{let et=o.groups.find(zt=>zt.key===rt),dt=rs(o.a,{...o.job,groups:{},shapes:{}},et.idx[0],null);ht[0].cut===void 0&&Object.assign(ht[0],{cut:dt.cut,depth:dt.depth})}for(let et of ht)if(X.dataset.cut!==void 0)et.cut=X.value,et.depth=X.value==="pocket"||X.value==="online"?et.depth??o.job.depths[X.value]:X.value==="off"?et.depth:null;else if(X.dataset.through!==void 0)et.depth=X.checked?null:Math.max(.1,Math.min(o.job.depths[et.cut]||o.job.depths.pocket,(o.job.stock.thickness||6)-.5));else{let dt=v(X);dt&&(et.depth=dt)}return Ze()}if(X.dataset.stock){let ht=v(X);return ht&&(o.job.stock[X.dataset.stock]=ht),Ze()}}),Mm(n,{imperial:m});let Oi=F=>{F?.isConnected&&F.matches("input[data-unit]")&&F.value!==F.defaultValue&&F.dispatchEvent(new Event("change",{bubbles:!0}))};n.addEventListener("focusout",F=>Oi(F.target)),n.addEventListener("keydown",F=>{F.key==="Enter"&&Oi(F.target)}),n.addEventListener("dragover",F=>{let X=F.target.closest("[data-drop]");X&&(F.preventDefault(),X.classList.add("over"))}),n.addEventListener("dragleave",F=>{let X=F.target.closest("[data-drop]");X&&X.classList.remove("over")}),n.addEventListener("drop",F=>{F.target.closest("[data-drop]")&&(F.preventDefault(),T(F.dataTransfer.files[0]))});function Rr(F){o.toast=F,W(),setTimeout(()=>{o.toast===F&&(o.toast="",W())},2600)}async function Cs(F){F.disabled=!0;let X=!!o.saveToFm,rt=X?Ps(Et()).catch(ht=>ht):null;try{let ht=await i.post("/api/gcode-files/load-temp",{filename:Et(),content:o.result.gcode});if(!ht.ok)throw new Error(`ncSender said ${ht.status}`);if(X)try{let et=await rt;if(et instanceof Error)throw et;let dt=await i.post("/api/gcode-files/file/save",{path:et,content:o.result.gcode});if(!dt.ok)throw new Error(`save failed (${dt.status})`)}catch(et){alert(`The program was loaded, but saving it to File Manager failed: ${et.message}`)}Hn()}catch(ht){F.disabled=!1,Rr(`Couldn\u2019t load the program: ${ht.message}`)}}async function Ps(F){let X=F.replace(/\.nc$/,""),rt=new Set,ht=et=>{for(let dt of et||[])dt.type==="folder"?ht(dt.children):rt.add(dt.path)};ht((await i.get("/api/gcode-files"))?.tree);for(let et=1;et<1e3;et++){let dt=`ncCut2D/${et<2?F:`${X} (${et}).nc`}`;if(!rt.has(dt))return dt}throw new Error("too many saved copies")}function Hn(){k.playing=!1,window.postMessage({type:"close-plugin-dialog"},"*")}W(),window.__nccut2d={S:o,PLAY:k,viewer:h,seek:F=>Se(F)}}var Di,pM,ce,Nc,en,$e,Em=de(()=>{ta();Ac();lm();um();mm();ym();Sm();Di={size:1,min:.5,max:6,step:.5},pM=["Drawing","Stock & Zero","Operations","Preview & Load"],ce=n=>String(n??"").replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t]),Nc=n=>{let t=Math.max(0,Math.round(n));return`${Math.floor(t/60)}:${String(t%60).padStart(2,"0")}`},en=(n,t=18,e="")=>`<svg width="${t}" height="${t}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" ${e}>${n}</svg>`,$e={close:en('<path d="M6 6l12 12M18 6L6 18"/>'),next:en('<path d="M9 6l6 6-6 6"/>',16,'stroke-width="2.4"'),part:en('<path d="M12 2l9 5v10l-9 5-9-5V7z"/><path d="M12 22V12M21 7l-9 5-9-5"/>',20),upload:en('<path d="M12 16V4M7 9l5-5 5 5M4 20h16"/>',28),info:en('<circle cx="12" cy="12" r="9"/><path d="M12 8h.01M11 12h1v5h1"/>'),warn:en('<path d="M12 3l10 18H2z"/><path d="M12 10v4M12 17h.01"/>'),check:en('<path d="M5 12l5 5 9-10"/>',12,'stroke-width="3.2"'),cross:en('<path d="M6 6l12 12M18 6L6 18"/>',12,'stroke-width="3.2"'),play:'<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M7 4l13 8-13 8z"/></svg>',pause:'<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><rect x="6" y="5" width="4" height="14" rx="1"/><rect x="14" y="5" width="4" height="14" rx="1"/></svg>',load:en('<path d="M12 4v11M7 10l5 5 5-5M5 20h14"/>',16,'stroke-width="2.4"'),face:en('<path d="M3 9h18M3 15h18"/>'),pocket:en('<rect x="4" y="6" width="16" height="12" rx="2"/>'),corners:en('<path d="M4 10V6a2 2 0 012-2h4M20 14v4a2 2 0 01-2 2h-4"/>'),hole:en('<circle cx="8" cy="12" r="3"/><circle cx="16" cy="12" r="3"/>'),drill:en('<path d="M12 3v14M8 13l4 8 4-8"/>'),step:en('<path d="M3 18h6v-6h6V6h6"/>'),cutout:en('<rect x="3" y="5" width="18" height="14" rx="2" stroke-dasharray="3 2.5"/>'),rough3d:en('<path d="M3 19h4v-4h3v-4h4v4h3v4h4"/>'),finish3d:en('<path d="M3 18c3 0 4-9 9-9s6 9 9 9"/>'),thread:en('<path d="M8 4h8M8 8l8-2M8 12l8-2M8 16l8-2M8 20h8M8 4v16M16 4v16"/>'),chamfer:en('<path d="M4 20V9l5-5h11v16z"/><path d="M9 4v5H4" stroke-dasharray="2 2"/>'),rest3d:en('<path d="M3 19h4v-4h3v-4h4v4h3v4h4"/><circle cx="12" cy="17" r="1.5"/>')}});Ac();function Ru(){let n=null,t={async init(){return!0},async load({shapes:e}){return n=wc(e),{size:n.size,count:n.shapes.length}},async plan({tools:e,job:i,limits:s,paths:a,gcodeOptions:c,timing:o}){if(!n)throw new Error("No drawing open.");let h=$p(n,e,i,s),f=bu(h);a&&kp(h);let d=a?Jp(h,o):0,g=a?Zp(h,c):"",m=a?Qp(h,Ni.cellFor(h.stock,300*300)).collisions.map(x=>({op:x.op,at:x.at})):[];for(let x of h.ops){if(!x.moves)continue;let v=new Float32Array(x.moves.length*4);x.moves.forEach((b,y)=>{v[y*4]=b.x,v[y*4+1]=b.y,v[y*4+2]=b.z,v[y*4+3]=b.r?0:b.f}),x.track=v,delete x.moves}return{plan:h,gcode:g,seconds:d,collisions:m,part:f}}};return async function(i){let s=t[i.type];if(!s)throw new Error(`unknown request ${i.type}`);return s(i)}}var Tm="0.0.1-mw24tya7";if(typeof document>"u"){let n=Ru();self.onmessage=async({data:t})=>{try{let e=await n(t),i=e?.part?[e.part.positions.buffer,e.part.indices.buffer]:[];self.postMessage({id:t.id,ok:!0,result:e},i)}catch(e){self.postMessage({id:t.id,ok:!1,error:e.message||String(e)})}}}else{let n=window.NcCut2D=window.NcCut2D||{};n.build!==Tm&&n.engine&&(n.engine.then(i=>i.worker?.terminate(),()=>{}),n.engine=null),n.build=Tm,n.mount=async(i,s)=>{let{mountApp:a}=await Promise.resolve().then(()=>(Em(),wm));try{a(i,s,await t(s))}catch(c){i.textContent=`ncCut2D could not start: ${c.message||c}`}};let t=i=>n.engine||=e(i);async function e(i){let s=null;try{s=new Worker(URL.createObjectURL(new Blob([n.source||""],{type:"text/javascript"})))}catch{s=null}if(s){let c=0,o=new Map;s.onmessage=({data:d})=>{let g=o.get(d.id);g&&(o.delete(d.id),d.ok?g.resolve(d.result):g.reject(new Error(d.error)))};let h=(d,g={},m=[])=>new Promise((x,v)=>{let b=++c;o.set(b,{resolve:x,reject:v}),s.postMessage({...g,id:b,type:d},m)});if(await Promise.race([h("init").then(()=>!0),new Promise(d=>setTimeout(()=>d(!1),5e3))]))return h.worker=s,h;s.terminate()}let a=Ru();return await a({type:"init"}),(c,o={})=>a({...o,type:c})}}})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/

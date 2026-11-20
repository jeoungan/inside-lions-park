(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const gl="180",_s={ROTATE:0,DOLLY:1,PAN:2},fs={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},cf=0,tc=1,hf=2,Vh=1,uf=2,Hn=3,jn=0,Ye=1,Qe=2,mi=0,xs=1,ec=2,nc=3,ic=4,ff=5,Ii=100,df=101,pf=102,mf=103,gf=104,_f=200,xf=201,vf=202,yf=203,_a=204,xa=205,Mf=206,Sf=207,Ef=208,wf=209,Tf=210,bf=211,Af=212,Rf=213,Cf=214,va=0,ya=1,Ma=2,Ms=3,Sa=4,Ea=5,wa=6,Ta=7,Hh=0,Pf=1,Lf=2,gi=0,Df=1,If=2,Uf=3,Gh=4,Nf=5,Of=6,Ff=7,Wh=300,Ss=301,Es=302,ba=303,Aa=304,vo=306,Ra=1e3,Fi=1001,Ca=1002,tn=1003,zf=1004,vr=1005,En=1006,Ro=1007,zi=1008,Rn=1009,Xh=1010,Yh=1011,Qs=1012,_l=1013,Bi=1014,wn=1015,dr=1016,xl=1017,vl=1018,tr=1020,qh=35902,$h=35899,jh=1021,Kh=1022,gn=1023,er=1026,nr=1027,yl=1028,Ml=1029,Zh=1030,Sl=1031,El=1033,jr=33776,Kr=33777,Zr=33778,Jr=33779,Pa=35840,La=35841,Da=35842,Ia=35843,Ua=36196,Na=37492,Oa=37496,Fa=37808,za=37809,Ba=37810,ka=37811,Va=37812,Ha=37813,Ga=37814,Wa=37815,Xa=37816,Ya=37817,qa=37818,$a=37819,ja=37820,Ka=37821,Za=36492,Ja=36494,Qa=36495,tl=36283,el=36284,nl=36285,il=36286,Bf=3200,kf=3201,Jh=0,Vf=1,ai="",Be="srgb",ws="srgb-linear",ro="linear",re="srgb",$i=7680,sc=519,Hf=512,Gf=513,Wf=514,Qh=515,Xf=516,Yf=517,qf=518,$f=519,rc=35044,oc="300 es",Tn=2e3,oo=2001;class Xi{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){const i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){const i=this._listeners;if(i===void 0)return;const s=i[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const i=e[t.type];if(i!==void 0){t.target=this;const s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}}const De=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Qr=Math.PI/180,sl=180/Math.PI;function Cs(){const n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(De[n&255]+De[n>>8&255]+De[n>>16&255]+De[n>>24&255]+"-"+De[t&255]+De[t>>8&255]+"-"+De[t>>16&15|64]+De[t>>24&255]+"-"+De[e&63|128]+De[e>>8&255]+"-"+De[e>>16&255]+De[e>>24&255]+De[i&255]+De[i>>8&255]+De[i>>16&255]+De[i>>24&255]).toLowerCase()}function Zt(n,t,e){return Math.max(t,Math.min(e,n))}function jf(n,t){return(n%t+t)%t}function Co(n,t,e){return(1-e)*n+e*t}function Ns(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Ge(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const Kf={DEG2RAD:Qr};class mt{constructor(t=0,e=0){mt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6],this.y=s[1]*e+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Zt(this.x,t.x,e.x),this.y=Zt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Zt(this.x,t,e),this.y=Zt(this.y,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Zt(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Zt(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*i-o*s+t.x,this.y=r*s+o*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Kn{constructor(t=0,e=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=s}static slerpFlat(t,e,i,s,r,o,a){let l=i[s+0],c=i[s+1],u=i[s+2],h=i[s+3];const f=r[o+0],d=r[o+1],m=r[o+2],_=r[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=u,t[e+3]=h;return}if(a===1){t[e+0]=f,t[e+1]=d,t[e+2]=m,t[e+3]=_;return}if(h!==_||l!==f||c!==d||u!==m){let g=1-a;const p=l*f+c*d+u*m+h*_,R=p>=0?1:-1,E=1-p*p;if(E>Number.EPSILON){const T=Math.sqrt(E),C=Math.atan2(T,p*R);g=Math.sin(g*C)/T,a=Math.sin(a*C)/T}const y=a*R;if(l=l*g+f*y,c=c*g+d*y,u=u*g+m*y,h=h*g+_*y,g===1-a){const T=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=T,c*=T,u*=T,h*=T}}t[e]=l,t[e+1]=c,t[e+2]=u,t[e+3]=h}static multiplyQuaternionsFlat(t,e,i,s,r,o){const a=i[s],l=i[s+1],c=i[s+2],u=i[s+3],h=r[o],f=r[o+1],d=r[o+2],m=r[o+3];return t[e]=a*m+u*h+l*d-c*f,t[e+1]=l*m+u*f+c*h-a*d,t[e+2]=c*m+u*d+a*f-l*h,t[e+3]=u*m-a*h-l*f-c*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,s){return this._x=t,this._y=e,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const i=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(s/2),h=a(r/2),f=l(i/2),d=l(s/2),m=l(r/2);switch(o){case"XYZ":this._x=f*u*h+c*d*m,this._y=c*d*h-f*u*m,this._z=c*u*m+f*d*h,this._w=c*u*h-f*d*m;break;case"YXZ":this._x=f*u*h+c*d*m,this._y=c*d*h-f*u*m,this._z=c*u*m-f*d*h,this._w=c*u*h+f*d*m;break;case"ZXY":this._x=f*u*h-c*d*m,this._y=c*d*h+f*u*m,this._z=c*u*m+f*d*h,this._w=c*u*h-f*d*m;break;case"ZYX":this._x=f*u*h-c*d*m,this._y=c*d*h+f*u*m,this._z=c*u*m-f*d*h,this._w=c*u*h+f*d*m;break;case"YZX":this._x=f*u*h+c*d*m,this._y=c*d*h+f*u*m,this._z=c*u*m-f*d*h,this._w=c*u*h-f*d*m;break;case"XZY":this._x=f*u*h-c*d*m,this._y=c*d*h-f*u*m,this._z=c*u*m+f*d*h,this._w=c*u*h+f*d*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],u=e[6],h=e[10],f=i+a+h;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(u-l)*d,this._y=(r-c)*d,this._z=(o-s)*d}else if(i>a&&i>h){const d=2*Math.sqrt(1+i-a-h);this._w=(u-l)/d,this._x=.25*d,this._y=(s+o)/d,this._z=(r+c)/d}else if(a>h){const d=2*Math.sqrt(1+a-i-h);this._w=(r-c)/d,this._x=(s+o)/d,this._y=.25*d,this._z=(l+u)/d}else{const d=2*Math.sqrt(1+h-i-a);this._w=(o-s)/d,this._x=(r+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<1e-8?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Zt(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const s=Math.min(1,e/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,u=e._w;return this._x=i*u+o*a+s*c-r*l,this._y=s*u+o*l+r*a-i*c,this._z=r*u+o*c+i*l-s*a,this._w=o*u-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const i=this._x,s=this._y,r=this._z,o=this._w;let a=o*t._w+i*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const d=1-e;return this._w=d*o+e*this._w,this._x=d*i+e*this._x,this._y=d*s+e*this._y,this._z=d*r+e*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),h=Math.sin((1-e)*u)/c,f=Math.sin(e*u)/c;return this._w=o*h+this._w*f,this._x=i*h+this._x*f,this._y=s*h+this._y*f,this._z=r*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class O{constructor(t=0,e=0,i=0){O.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(ac.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(ac.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*s,this.y=r[1]*e+r[4]*i+r[7]*s,this.z=r[2]*e+r[5]*i+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(t){const e=this.x,i=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*i),u=2*(a*e-r*s),h=2*(r*i-o*e);return this.x=e+l*c+o*h-a*u,this.y=i+l*u+a*c-r*h,this.z=s+l*h+r*u-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*s,this.y=r[1]*e+r[5]*i+r[9]*s,this.z=r[2]*e+r[6]*i+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Zt(this.x,t.x,e.x),this.y=Zt(this.y,t.y,e.y),this.z=Zt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Zt(this.x,t,e),this.y=Zt(this.y,t,e),this.z=Zt(this.z,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Zt(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return Po.copy(this).projectOnVector(t),this.sub(Po)}reflect(t){return this.sub(Po.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Zt(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return e*e+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const s=Math.sin(e)*t;return this.x=s*Math.sin(i),this.y=Math.cos(e)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Po=new O,ac=new Kn;class Kt{constructor(t,e,i,s,r,o,a,l,c){Kt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,l,c)}set(t,e,i,s,r,o,a,l,c){const u=this.elements;return u[0]=t,u[1]=s,u[2]=a,u[3]=e,u[4]=r,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],h=i[7],f=i[2],d=i[5],m=i[8],_=s[0],g=s[3],p=s[6],R=s[1],E=s[4],y=s[7],T=s[2],C=s[5],P=s[8];return r[0]=o*_+a*R+l*T,r[3]=o*g+a*E+l*C,r[6]=o*p+a*y+l*P,r[1]=c*_+u*R+h*T,r[4]=c*g+u*E+h*C,r[7]=c*p+u*y+h*P,r[2]=f*_+d*R+m*T,r[5]=f*g+d*E+m*C,r[8]=f*p+d*y+m*P,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8];return e*o*u-e*a*c-i*r*u+i*a*l+s*r*c-s*o*l}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],h=u*o-a*c,f=a*l-u*r,d=c*r-o*l,m=e*h+i*f+s*d;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/m;return t[0]=h*_,t[1]=(s*c-u*i)*_,t[2]=(a*i-s*o)*_,t[3]=f*_,t[4]=(u*e-s*l)*_,t[5]=(s*r-a*e)*_,t[6]=d*_,t[7]=(i*l-c*e)*_,t[8]=(o*e-i*r)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Lo.makeScale(t,e)),this}rotate(t){return this.premultiply(Lo.makeRotation(-t)),this}translate(t,e){return this.premultiply(Lo.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<9;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Lo=new Kt;function tu(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function ao(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Zf(){const n=ao("canvas");return n.style.display="block",n}const lc={};function ir(n){n in lc||(lc[n]=!0,console.warn(n))}function Jf(n,t,e){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:i()}}setTimeout(r,e)})}const cc=new Kt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),hc=new Kt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Qf(){const n={enabled:!0,workingColorSpace:ws,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===re&&(s.r=Yn(s.r),s.g=Yn(s.g),s.b=Yn(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===re&&(s.r=vs(s.r),s.g=vs(s.g),s.b=vs(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===ai?ro:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return ir("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return ir("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[ws]:{primaries:t,whitePoint:i,transfer:ro,toXYZ:cc,fromXYZ:hc,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Be},outputColorSpaceConfig:{drawingBufferColorSpace:Be}},[Be]:{primaries:t,whitePoint:i,transfer:re,toXYZ:cc,fromXYZ:hc,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Be}}}),n}const ee=Qf();function Yn(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function vs(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let ji;class td{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{ji===void 0&&(ji=ao("canvas")),ji.width=t.width,ji.height=t.height;const s=ji.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),i=ji}return i.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=ao("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const s=i.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Yn(r[o]/255)*255;return i.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(Yn(e[i]/255)*255):e[i]=Yn(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let ed=0;class wl{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:ed++}),this.uuid=Cs(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):e instanceof VideoFrame?t.set(e.displayHeight,e.displayWidth,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Do(s[o].image)):r.push(Do(s[o]))}else r=Do(s);i.url=r}return e||(t.images[this.uuid]=i),i}}function Do(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?td.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let nd=0;const Io=new O;class Ne extends Xi{constructor(t=Ne.DEFAULT_IMAGE,e=Ne.DEFAULT_MAPPING,i=Fi,s=Fi,r=En,o=zi,a=gn,l=Rn,c=Ne.DEFAULT_ANISOTROPY,u=ai){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:nd++}),this.uuid=Cs(),this.name="",this.source=new wl(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new mt(0,0),this.repeat=new mt(1,1),this.center=new mt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Kt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Io).x}get height(){return this.source.getSize(Io).y}get depth(){return this.source.getSize(Io).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const i=t[e];if(i===void 0){console.warn(`THREE.Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${e}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Wh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Ra:t.x=t.x-Math.floor(t.x);break;case Fi:t.x=t.x<0?0:1;break;case Ca:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Ra:t.y=t.y-Math.floor(t.y);break;case Fi:t.y=t.y<0?0:1;break;case Ca:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Ne.DEFAULT_IMAGE=null;Ne.DEFAULT_MAPPING=Wh;Ne.DEFAULT_ANISOTROPY=1;class ge{constructor(t=0,e=0,i=0,s=1){ge.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*i+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,s,r;const l=t.elements,c=l[0],u=l[4],h=l[8],f=l[1],d=l[5],m=l[9],_=l[2],g=l[6],p=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-_)<.01&&Math.abs(m-g)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+_)<.1&&Math.abs(m+g)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const E=(c+1)/2,y=(d+1)/2,T=(p+1)/2,C=(u+f)/4,P=(h+_)/4,D=(m+g)/4;return E>y&&E>T?E<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(E),s=C/i,r=P/i):y>T?y<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),i=C/s,r=D/s):T<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(T),i=P/r,s=D/r),this.set(i,s,r,e),this}let R=Math.sqrt((g-m)*(g-m)+(h-_)*(h-_)+(f-u)*(f-u));return Math.abs(R)<.001&&(R=1),this.x=(g-m)/R,this.y=(h-_)/R,this.z=(f-u)/R,this.w=Math.acos((c+d+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Zt(this.x,t.x,e.x),this.y=Zt(this.y,t.y,e.y),this.z=Zt(this.z,t.z,e.z),this.w=Zt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Zt(this.x,t,e),this.y=Zt(this.y,t,e),this.z=Zt(this.z,t,e),this.w=Zt(this.w,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Zt(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class id extends Xi{constructor(t=1,e=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:En,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=i.depth,this.scissor=new ge(0,0,t,e),this.scissorTest=!1,this.viewport=new ge(0,0,t,e);const s={width:t,height:e,depth:i.depth},r=new Ne(s);this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(t={}){const e={minFilter:En,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=i,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,i=t.textures.length;e<i;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const s=Object.assign({},t.textures[e].image);this.textures[e].source=new wl(s)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ki extends id{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}}class eu extends Ne{constructor(t=null,e=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=tn,this.minFilter=tn,this.wrapR=Fi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class sd extends Ne{constructor(t=null,e=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=tn,this.minFilter=tn,this.wrapR=Fi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Yi{constructor(t=new O(1/0,1/0,1/0),e=new O(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(un.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(un.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=un.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const r=i.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,un):un.fromBufferAttribute(r,o),un.applyMatrix4(t.matrixWorld),this.expandByPoint(un);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),yr.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),yr.copy(i.boundingBox)),yr.applyMatrix4(t.matrixWorld),this.union(yr)}const s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,un),un.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Os),Mr.subVectors(this.max,Os),Ki.subVectors(t.a,Os),Zi.subVectors(t.b,Os),Ji.subVectors(t.c,Os),ti.subVectors(Zi,Ki),ei.subVectors(Ji,Zi),bi.subVectors(Ki,Ji);let e=[0,-ti.z,ti.y,0,-ei.z,ei.y,0,-bi.z,bi.y,ti.z,0,-ti.x,ei.z,0,-ei.x,bi.z,0,-bi.x,-ti.y,ti.x,0,-ei.y,ei.x,0,-bi.y,bi.x,0];return!Uo(e,Ki,Zi,Ji,Mr)||(e=[1,0,0,0,1,0,0,0,1],!Uo(e,Ki,Zi,Ji,Mr))?!1:(Sr.crossVectors(ti,ei),e=[Sr.x,Sr.y,Sr.z],Uo(e,Ki,Zi,Ji,Mr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,un).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(un).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(On[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),On[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),On[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),On[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),On[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),On[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),On[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),On[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(On),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const On=[new O,new O,new O,new O,new O,new O,new O,new O],un=new O,yr=new Yi,Ki=new O,Zi=new O,Ji=new O,ti=new O,ei=new O,bi=new O,Os=new O,Mr=new O,Sr=new O,Ai=new O;function Uo(n,t,e,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){Ai.fromArray(n,r);const a=s.x*Math.abs(Ai.x)+s.y*Math.abs(Ai.y)+s.z*Math.abs(Ai.z),l=t.dot(Ai),c=e.dot(Ai),u=i.dot(Ai);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const rd=new Yi,Fs=new O,No=new O;class Ps{constructor(t=new O,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):rd.setFromPoints(t).getCenter(i);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Fs.subVectors(t,this.center);const e=Fs.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),s=(i-this.radius)*.5;this.center.addScaledVector(Fs,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(No.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Fs.copy(t.center).add(No)),this.expandByPoint(Fs.copy(t.center).sub(No))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const Fn=new O,Oo=new O,Er=new O,ni=new O,Fo=new O,wr=new O,zo=new O;class yo{constructor(t=new O,e=new O(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Fn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Fn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Fn.copy(this.origin).addScaledVector(this.direction,e),Fn.distanceToSquared(t))}distanceSqToSegment(t,e,i,s){Oo.copy(t).add(e).multiplyScalar(.5),Er.copy(e).sub(t).normalize(),ni.copy(this.origin).sub(Oo);const r=t.distanceTo(e)*.5,o=-this.direction.dot(Er),a=ni.dot(this.direction),l=-ni.dot(Er),c=ni.lengthSq(),u=Math.abs(1-o*o);let h,f,d,m;if(u>0)if(h=o*l-a,f=o*a-l,m=r*u,h>=0)if(f>=-m)if(f<=m){const _=1/u;h*=_,f*=_,d=h*(h+o*f+2*a)+f*(o*h+f+2*l)+c}else f=r,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;else f=-r,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;else f<=-m?(h=Math.max(0,-(-o*r+a)),f=h>0?-r:Math.min(Math.max(-r,-l),r),d=-h*h+f*(f+2*l)+c):f<=m?(h=0,f=Math.min(Math.max(-r,-l),r),d=f*(f+2*l)+c):(h=Math.max(0,-(o*r+a)),f=h>0?r:Math.min(Math.max(-r,-l),r),d=-h*h+f*(f+2*l)+c);else f=o>0?-r:r,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(Oo).addScaledVector(Er,f),d}intersectSphere(t,e){Fn.subVectors(t.center,this.origin);const i=Fn.dot(this.direction),s=Fn.dot(Fn)-i*i,r=t.radius*t.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,s,r,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(i=(t.min.x-f.x)*c,s=(t.max.x-f.x)*c):(i=(t.max.x-f.x)*c,s=(t.min.x-f.x)*c),u>=0?(r=(t.min.y-f.y)*u,o=(t.max.y-f.y)*u):(r=(t.max.y-f.y)*u,o=(t.min.y-f.y)*u),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),h>=0?(a=(t.min.z-f.z)*h,l=(t.max.z-f.z)*h):(a=(t.max.z-f.z)*h,l=(t.min.z-f.z)*h),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,e)}intersectsBox(t){return this.intersectBox(t,Fn)!==null}intersectTriangle(t,e,i,s,r){Fo.subVectors(e,t),wr.subVectors(i,t),zo.crossVectors(Fo,wr);let o=this.direction.dot(zo),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;ni.subVectors(this.origin,t);const l=a*this.direction.dot(wr.crossVectors(ni,wr));if(l<0)return null;const c=a*this.direction.dot(Fo.cross(ni));if(c<0||l+c>o)return null;const u=-a*ni.dot(zo);return u<0?null:this.at(u/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ie{constructor(t,e,i,s,r,o,a,l,c,u,h,f,d,m,_,g){ie.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,l,c,u,h,f,d,m,_,g)}set(t,e,i,s,r,o,a,l,c,u,h,f,d,m,_,g){const p=this.elements;return p[0]=t,p[4]=e,p[8]=i,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=u,p[10]=h,p[14]=f,p[3]=d,p[7]=m,p[11]=_,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ie().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,i=t.elements,s=1/Qi.setFromMatrixColumn(t,0).length(),r=1/Qi.setFromMatrixColumn(t,1).length(),o=1/Qi.setFromMatrixColumn(t,2).length();return e[0]=i[0]*s,e[1]=i[1]*s,e[2]=i[2]*s,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*o,e[9]=i[9]*o,e[10]=i[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,s=t.y,r=t.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),h=Math.sin(r);if(t.order==="XYZ"){const f=o*u,d=o*h,m=a*u,_=a*h;e[0]=l*u,e[4]=-l*h,e[8]=c,e[1]=d+m*c,e[5]=f-_*c,e[9]=-a*l,e[2]=_-f*c,e[6]=m+d*c,e[10]=o*l}else if(t.order==="YXZ"){const f=l*u,d=l*h,m=c*u,_=c*h;e[0]=f+_*a,e[4]=m*a-d,e[8]=o*c,e[1]=o*h,e[5]=o*u,e[9]=-a,e[2]=d*a-m,e[6]=_+f*a,e[10]=o*l}else if(t.order==="ZXY"){const f=l*u,d=l*h,m=c*u,_=c*h;e[0]=f-_*a,e[4]=-o*h,e[8]=m+d*a,e[1]=d+m*a,e[5]=o*u,e[9]=_-f*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const f=o*u,d=o*h,m=a*u,_=a*h;e[0]=l*u,e[4]=m*c-d,e[8]=f*c+_,e[1]=l*h,e[5]=_*c+f,e[9]=d*c-m,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const f=o*l,d=o*c,m=a*l,_=a*c;e[0]=l*u,e[4]=_-f*h,e[8]=m*h+d,e[1]=h,e[5]=o*u,e[9]=-a*u,e[2]=-c*u,e[6]=d*h+m,e[10]=f-_*h}else if(t.order==="XZY"){const f=o*l,d=o*c,m=a*l,_=a*c;e[0]=l*u,e[4]=-h,e[8]=c*u,e[1]=f*h+_,e[5]=o*u,e[9]=d*h-m,e[2]=m*h-d,e[6]=a*u,e[10]=_*h+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(od,t,ad)}lookAt(t,e,i){const s=this.elements;return Ke.subVectors(t,e),Ke.lengthSq()===0&&(Ke.z=1),Ke.normalize(),ii.crossVectors(i,Ke),ii.lengthSq()===0&&(Math.abs(i.z)===1?Ke.x+=1e-4:Ke.z+=1e-4,Ke.normalize(),ii.crossVectors(i,Ke)),ii.normalize(),Tr.crossVectors(Ke,ii),s[0]=ii.x,s[4]=Tr.x,s[8]=Ke.x,s[1]=ii.y,s[5]=Tr.y,s[9]=Ke.y,s[2]=ii.z,s[6]=Tr.z,s[10]=Ke.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],h=i[5],f=i[9],d=i[13],m=i[2],_=i[6],g=i[10],p=i[14],R=i[3],E=i[7],y=i[11],T=i[15],C=s[0],P=s[4],D=s[8],v=s[12],S=s[1],I=s[5],z=s[9],q=s[13],ot=s[2],$=s[6],et=s[10],lt=s[14],st=s[3],vt=s[7],Mt=s[11],Rt=s[15];return r[0]=o*C+a*S+l*ot+c*st,r[4]=o*P+a*I+l*$+c*vt,r[8]=o*D+a*z+l*et+c*Mt,r[12]=o*v+a*q+l*lt+c*Rt,r[1]=u*C+h*S+f*ot+d*st,r[5]=u*P+h*I+f*$+d*vt,r[9]=u*D+h*z+f*et+d*Mt,r[13]=u*v+h*q+f*lt+d*Rt,r[2]=m*C+_*S+g*ot+p*st,r[6]=m*P+_*I+g*$+p*vt,r[10]=m*D+_*z+g*et+p*Mt,r[14]=m*v+_*q+g*lt+p*Rt,r[3]=R*C+E*S+y*ot+T*st,r[7]=R*P+E*I+y*$+T*vt,r[11]=R*D+E*z+y*et+T*Mt,r[15]=R*v+E*q+y*lt+T*Rt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],u=t[2],h=t[6],f=t[10],d=t[14],m=t[3],_=t[7],g=t[11],p=t[15];return m*(+r*l*h-s*c*h-r*a*f+i*c*f+s*a*d-i*l*d)+_*(+e*l*d-e*c*f+r*o*f-s*o*d+s*c*u-r*l*u)+g*(+e*c*h-e*a*d-r*o*h+i*o*d+r*a*u-i*c*u)+p*(-s*a*u-e*l*h+e*a*f+s*o*h-i*o*f+i*l*u)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],h=t[9],f=t[10],d=t[11],m=t[12],_=t[13],g=t[14],p=t[15],R=h*g*c-_*f*c+_*l*d-a*g*d-h*l*p+a*f*p,E=m*f*c-u*g*c-m*l*d+o*g*d+u*l*p-o*f*p,y=u*_*c-m*h*c+m*a*d-o*_*d-u*a*p+o*h*p,T=m*h*l-u*_*l-m*a*f+o*_*f+u*a*g-o*h*g,C=e*R+i*E+s*y+r*T;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const P=1/C;return t[0]=R*P,t[1]=(_*f*r-h*g*r-_*s*d+i*g*d+h*s*p-i*f*p)*P,t[2]=(a*g*r-_*l*r+_*s*c-i*g*c-a*s*p+i*l*p)*P,t[3]=(h*l*r-a*f*r-h*s*c+i*f*c+a*s*d-i*l*d)*P,t[4]=E*P,t[5]=(u*g*r-m*f*r+m*s*d-e*g*d-u*s*p+e*f*p)*P,t[6]=(m*l*r-o*g*r-m*s*c+e*g*c+o*s*p-e*l*p)*P,t[7]=(o*f*r-u*l*r+u*s*c-e*f*c-o*s*d+e*l*d)*P,t[8]=y*P,t[9]=(m*h*r-u*_*r-m*i*d+e*_*d+u*i*p-e*h*p)*P,t[10]=(o*_*r-m*a*r+m*i*c-e*_*c-o*i*p+e*a*p)*P,t[11]=(u*a*r-o*h*r-u*i*c+e*h*c+o*i*d-e*a*d)*P,t[12]=T*P,t[13]=(u*_*s-m*h*s+m*i*f-e*_*f-u*i*g+e*h*g)*P,t[14]=(m*a*s-o*_*s-m*i*l+e*_*l+o*i*g-e*a*g)*P,t[15]=(o*h*s-u*a*s+u*i*l-e*h*l-o*i*f+e*a*f)*P,this}scale(t){const e=this.elements,i=t.x,s=t.y,r=t.z;return e[0]*=i,e[4]*=s,e[8]*=r,e[1]*=i,e[5]*=s,e[9]*=r,e[2]*=i,e[6]*=s,e[10]*=r,e[3]*=i,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,s))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),s=Math.sin(e),r=1-i,o=t.x,a=t.y,l=t.z,c=r*o,u=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,u*a+i,u*l-s*o,0,c*l-s*a,u*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,s,r,o){return this.set(1,i,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,i){const s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,u=o+o,h=a+a,f=r*c,d=r*u,m=r*h,_=o*u,g=o*h,p=a*h,R=l*c,E=l*u,y=l*h,T=i.x,C=i.y,P=i.z;return s[0]=(1-(_+p))*T,s[1]=(d+y)*T,s[2]=(m-E)*T,s[3]=0,s[4]=(d-y)*C,s[5]=(1-(f+p))*C,s[6]=(g+R)*C,s[7]=0,s[8]=(m+E)*P,s[9]=(g-R)*P,s[10]=(1-(f+_))*P,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,i){const s=this.elements;let r=Qi.set(s[0],s[1],s[2]).length();const o=Qi.set(s[4],s[5],s[6]).length(),a=Qi.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],fn.copy(this);const c=1/r,u=1/o,h=1/a;return fn.elements[0]*=c,fn.elements[1]*=c,fn.elements[2]*=c,fn.elements[4]*=u,fn.elements[5]*=u,fn.elements[6]*=u,fn.elements[8]*=h,fn.elements[9]*=h,fn.elements[10]*=h,e.setFromRotationMatrix(fn),i.x=r,i.y=o,i.z=a,this}makePerspective(t,e,i,s,r,o,a=Tn,l=!1){const c=this.elements,u=2*r/(e-t),h=2*r/(i-s),f=(e+t)/(e-t),d=(i+s)/(i-s);let m,_;if(l)m=r/(o-r),_=o*r/(o-r);else if(a===Tn)m=-(o+r)/(o-r),_=-2*o*r/(o-r);else if(a===oo)m=-o/(o-r),_=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=h,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,i,s,r,o,a=Tn,l=!1){const c=this.elements,u=2/(e-t),h=2/(i-s),f=-(e+t)/(e-t),d=-(i+s)/(i-s);let m,_;if(l)m=1/(o-r),_=o/(o-r);else if(a===Tn)m=-2/(o-r),_=-(o+r)/(o-r);else if(a===oo)m=-1/(o-r),_=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=h,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=m,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<16;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}}const Qi=new O,fn=new ie,od=new O(0,0,0),ad=new O(1,1,1),ii=new O,Tr=new O,Ke=new O,uc=new ie,fc=new Kn;class Cn{constructor(t=0,e=0,i=0,s=Cn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,s=this._order){return this._x=t,this._y=e,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],u=s[9],h=s[2],f=s[6],d=s[10];switch(e){case"XYZ":this._y=Math.asin(Zt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Zt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(Zt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Zt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Zt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-Zt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return uc.makeRotationFromQuaternion(t),this.setFromRotationMatrix(uc,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return fc.setFromEuler(this),this.setFromQuaternion(fc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Cn.DEFAULT_ORDER="XYZ";class Tl{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let ld=0;const dc=new O,ts=new Kn,zn=new ie,br=new O,zs=new O,cd=new O,hd=new Kn,pc=new O(1,0,0),mc=new O(0,1,0),gc=new O(0,0,1),_c={type:"added"},ud={type:"removed"},es={type:"childadded",child:null},Bo={type:"childremoved",child:null};class Te extends Xi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ld++}),this.uuid=Cs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Te.DEFAULT_UP.clone();const t=new O,e=new Cn,i=new Kn,s=new O(1,1,1);function r(){i.setFromEuler(e,!1)}function o(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ie},normalMatrix:{value:new Kt}}),this.matrix=new ie,this.matrixWorld=new ie,this.matrixAutoUpdate=Te.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Te.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Tl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return ts.setFromAxisAngle(t,e),this.quaternion.multiply(ts),this}rotateOnWorldAxis(t,e){return ts.setFromAxisAngle(t,e),this.quaternion.premultiply(ts),this}rotateX(t){return this.rotateOnAxis(pc,t)}rotateY(t){return this.rotateOnAxis(mc,t)}rotateZ(t){return this.rotateOnAxis(gc,t)}translateOnAxis(t,e){return dc.copy(t).applyQuaternion(this.quaternion),this.position.add(dc.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(pc,t)}translateY(t){return this.translateOnAxis(mc,t)}translateZ(t){return this.translateOnAxis(gc,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(zn.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?br.copy(t):br.set(t,e,i);const s=this.parent;this.updateWorldMatrix(!0,!1),zs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?zn.lookAt(zs,br,this.up):zn.lookAt(br,zs,this.up),this.quaternion.setFromRotationMatrix(zn),s&&(zn.extractRotation(s.matrixWorld),ts.setFromRotationMatrix(zn),this.quaternion.premultiply(ts.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(_c),es.child=t,this.dispatchEvent(es),es.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(ud),Bo.child=t,this.dispatchEvent(Bo),Bo.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),zn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),zn.multiply(t.parent.matrixWorld)),t.applyMatrix4(zn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(_c),es.child=t,this.dispatchEvent(es),es.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,s=this.children.length;i<s;i++){const o=this.children[i].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(zs,t,cd),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(zs,hd,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e){const i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];r(t.shapes,h)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),c=o(t.textures),u=o(t.images),h=o(t.shapes),f=o(t.skeletons),d=o(t.animations),m=o(t.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),h.length>0&&(i.shapes=h),f.length>0&&(i.skeletons=f),d.length>0&&(i.animations=d),m.length>0&&(i.nodes=m)}return i.object=s,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const s=t.children[i];this.add(s.clone())}return this}}Te.DEFAULT_UP=new O(0,1,0);Te.DEFAULT_MATRIX_AUTO_UPDATE=!0;Te.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const dn=new O,Bn=new O,ko=new O,kn=new O,ns=new O,is=new O,xc=new O,Vo=new O,Ho=new O,Go=new O,Wo=new ge,Xo=new ge,Yo=new ge;class mn{constructor(t=new O,e=new O,i=new O){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,s){s.subVectors(i,e),dn.subVectors(t,e),s.cross(dn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,i,s,r){dn.subVectors(s,e),Bn.subVectors(i,e),ko.subVectors(t,e);const o=dn.dot(dn),a=dn.dot(Bn),l=dn.dot(ko),c=Bn.dot(Bn),u=Bn.dot(ko),h=o*c-a*a;if(h===0)return r.set(0,0,0),null;const f=1/h,d=(c*l-a*u)*f,m=(o*u-a*l)*f;return r.set(1-d-m,m,d)}static containsPoint(t,e,i,s){return this.getBarycoord(t,e,i,s,kn)===null?!1:kn.x>=0&&kn.y>=0&&kn.x+kn.y<=1}static getInterpolation(t,e,i,s,r,o,a,l){return this.getBarycoord(t,e,i,s,kn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,kn.x),l.addScaledVector(o,kn.y),l.addScaledVector(a,kn.z),l)}static getInterpolatedAttribute(t,e,i,s,r,o){return Wo.setScalar(0),Xo.setScalar(0),Yo.setScalar(0),Wo.fromBufferAttribute(t,e),Xo.fromBufferAttribute(t,i),Yo.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(Wo,r.x),o.addScaledVector(Xo,r.y),o.addScaledVector(Yo,r.z),o}static isFrontFacing(t,e,i,s){return dn.subVectors(i,e),Bn.subVectors(t,e),dn.cross(Bn).dot(s)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,s){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,i,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return dn.subVectors(this.c,this.b),Bn.subVectors(this.a,this.b),dn.cross(Bn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return mn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return mn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,s,r){return mn.getInterpolation(t,this.a,this.b,this.c,e,i,s,r)}containsPoint(t){return mn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return mn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,s=this.b,r=this.c;let o,a;ns.subVectors(s,i),is.subVectors(r,i),Vo.subVectors(t,i);const l=ns.dot(Vo),c=is.dot(Vo);if(l<=0&&c<=0)return e.copy(i);Ho.subVectors(t,s);const u=ns.dot(Ho),h=is.dot(Ho);if(u>=0&&h<=u)return e.copy(s);const f=l*h-u*c;if(f<=0&&l>=0&&u<=0)return o=l/(l-u),e.copy(i).addScaledVector(ns,o);Go.subVectors(t,r);const d=ns.dot(Go),m=is.dot(Go);if(m>=0&&d<=m)return e.copy(r);const _=d*c-l*m;if(_<=0&&c>=0&&m<=0)return a=c/(c-m),e.copy(i).addScaledVector(is,a);const g=u*m-d*h;if(g<=0&&h-u>=0&&d-m>=0)return xc.subVectors(r,s),a=(h-u)/(h-u+(d-m)),e.copy(s).addScaledVector(xc,a);const p=1/(g+_+f);return o=_*p,a=f*p,e.copy(i).addScaledVector(ns,o).addScaledVector(is,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const nu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},si={h:0,s:0,l:0},Ar={h:0,s:0,l:0};function qo(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}class Qt{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Be){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ee.colorSpaceToWorking(this,e),this}setRGB(t,e,i,s=ee.workingColorSpace){return this.r=t,this.g=e,this.b=i,ee.colorSpaceToWorking(this,s),this}setHSL(t,e,i,s=ee.workingColorSpace){if(t=jf(t,1),e=Zt(e,0,1),i=Zt(i,0,1),e===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+e):i+e-i*e,o=2*i-r;this.r=qo(o,r,t+1/3),this.g=qo(o,r,t),this.b=qo(o,r,t-1/3)}return ee.colorSpaceToWorking(this,s),this}setStyle(t,e=Be){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Be){const i=nu[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Yn(t.r),this.g=Yn(t.g),this.b=Yn(t.b),this}copyLinearToSRGB(t){return this.r=vs(t.r),this.g=vs(t.g),this.b=vs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Be){return ee.workingToColorSpace(Ie.copy(this),t),Math.round(Zt(Ie.r*255,0,255))*65536+Math.round(Zt(Ie.g*255,0,255))*256+Math.round(Zt(Ie.b*255,0,255))}getHexString(t=Be){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ee.workingColorSpace){ee.workingToColorSpace(Ie.copy(this),e);const i=Ie.r,s=Ie.g,r=Ie.b,o=Math.max(i,s,r),a=Math.min(i,s,r);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case i:l=(s-r)/h+(s<r?6:0);break;case s:l=(r-i)/h+2;break;case r:l=(i-s)/h+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,e=ee.workingColorSpace){return ee.workingToColorSpace(Ie.copy(this),e),t.r=Ie.r,t.g=Ie.g,t.b=Ie.b,t}getStyle(t=Be){ee.workingToColorSpace(Ie.copy(this),t);const e=Ie.r,i=Ie.g,s=Ie.b;return t!==Be?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,e,i){return this.getHSL(si),this.setHSL(si.h+t,si.s+e,si.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(si),t.getHSL(Ar);const i=Co(si.h,Ar.h,e),s=Co(si.s,Ar.s,e),r=Co(si.l,Ar.l,e);return this.setHSL(i,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,i=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*s,this.g=r[1]*e+r[4]*i+r[7]*s,this.b=r[2]*e+r[5]*i+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ie=new Qt;Qt.NAMES=nu;let fd=0;class Ls extends Xi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:fd++}),this.uuid=Cs(),this.name="",this.type="Material",this.blending=xs,this.side=jn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=_a,this.blendDst=xa,this.blendEquation=Ii,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Qt(0,0,0),this.blendAlpha=0,this.depthFunc=Ms,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=sc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=$i,this.stencilZFail=$i,this.stencilZPass=$i,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==xs&&(i.blending=this.blending),this.side!==jn&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==_a&&(i.blendSrc=this.blendSrc),this.blendDst!==xa&&(i.blendDst=this.blendDst),this.blendEquation!==Ii&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Ms&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==sc&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==$i&&(i.stencilFail=this.stencilFail),this.stencilZFail!==$i&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==$i&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(e){const r=s(t.textures),o=s(t.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const s=e.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class Vi extends Ls{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Qt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Cn,this.combine=Hh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const ve=new O,Rr=new mt;let dd=0;class hn{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:dd++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=rc,this.updateRanges=[],this.gpuType=wn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)Rr.fromBufferAttribute(this,e),Rr.applyMatrix3(t),this.setXY(e,Rr.x,Rr.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)ve.fromBufferAttribute(this,e),ve.applyMatrix3(t),this.setXYZ(e,ve.x,ve.y,ve.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)ve.fromBufferAttribute(this,e),ve.applyMatrix4(t),this.setXYZ(e,ve.x,ve.y,ve.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)ve.fromBufferAttribute(this,e),ve.applyNormalMatrix(t),this.setXYZ(e,ve.x,ve.y,ve.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)ve.fromBufferAttribute(this,e),ve.transformDirection(t),this.setXYZ(e,ve.x,ve.y,ve.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=Ns(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=Ge(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Ns(e,this.array)),e}setX(t,e){return this.normalized&&(e=Ge(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Ns(e,this.array)),e}setY(t,e){return this.normalized&&(e=Ge(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Ns(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Ge(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Ns(e,this.array)),e}setW(t,e){return this.normalized&&(e=Ge(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=Ge(e,this.array),i=Ge(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,s){return t*=this.itemSize,this.normalized&&(e=Ge(e,this.array),i=Ge(i,this.array),s=Ge(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t*=this.itemSize,this.normalized&&(e=Ge(e,this.array),i=Ge(i,this.array),s=Ge(s,this.array),r=Ge(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==rc&&(t.usage=this.usage),t}}class iu extends hn{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class su extends hn{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class be extends hn{constructor(t,e,i){super(new Float32Array(t),e,i)}}let pd=0;const sn=new ie,$o=new Te,ss=new O,Ze=new Yi,Bs=new Yi,Ce=new O;class Ve extends Xi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:pd++}),this.uuid=Cs(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(tu(t)?su:iu)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new Kt().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return sn.makeRotationFromQuaternion(t),this.applyMatrix4(sn),this}rotateX(t){return sn.makeRotationX(t),this.applyMatrix4(sn),this}rotateY(t){return sn.makeRotationY(t),this.applyMatrix4(sn),this}rotateZ(t){return sn.makeRotationZ(t),this.applyMatrix4(sn),this}translate(t,e,i){return sn.makeTranslation(t,e,i),this.applyMatrix4(sn),this}scale(t,e,i){return sn.makeScale(t,e,i),this.applyMatrix4(sn),this}lookAt(t){return $o.lookAt(t),$o.updateMatrix(),this.applyMatrix4($o.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ss).negate(),this.translate(ss.x,ss.y,ss.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const i=[];for(let s=0,r=t.length;s<r;s++){const o=t[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new be(i,3))}else{const i=Math.min(t.length,e.count);for(let s=0;s<i;s++){const r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Yi);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new O(-1/0,-1/0,-1/0),new O(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,s=e.length;i<s;i++){const r=e[i];Ze.setFromBufferAttribute(r),this.morphTargetsRelative?(Ce.addVectors(this.boundingBox.min,Ze.min),this.boundingBox.expandByPoint(Ce),Ce.addVectors(this.boundingBox.max,Ze.max),this.boundingBox.expandByPoint(Ce)):(this.boundingBox.expandByPoint(Ze.min),this.boundingBox.expandByPoint(Ze.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ps);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new O,1/0);return}if(t){const i=this.boundingSphere.center;if(Ze.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];Bs.setFromBufferAttribute(a),this.morphTargetsRelative?(Ce.addVectors(Ze.min,Bs.min),Ze.expandByPoint(Ce),Ce.addVectors(Ze.max,Bs.max),Ze.expandByPoint(Ce)):(Ze.expandByPoint(Bs.min),Ze.expandByPoint(Bs.max))}Ze.getCenter(i);let s=0;for(let r=0,o=t.count;r<o;r++)Ce.fromBufferAttribute(t,r),s=Math.max(s,i.distanceToSquared(Ce));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Ce.fromBufferAttribute(a,c),l&&(ss.fromBufferAttribute(t,c),Ce.add(ss)),s=Math.max(s,i.distanceToSquared(Ce))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new hn(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let D=0;D<i.count;D++)a[D]=new O,l[D]=new O;const c=new O,u=new O,h=new O,f=new mt,d=new mt,m=new mt,_=new O,g=new O;function p(D,v,S){c.fromBufferAttribute(i,D),u.fromBufferAttribute(i,v),h.fromBufferAttribute(i,S),f.fromBufferAttribute(r,D),d.fromBufferAttribute(r,v),m.fromBufferAttribute(r,S),u.sub(c),h.sub(c),d.sub(f),m.sub(f);const I=1/(d.x*m.y-m.x*d.y);isFinite(I)&&(_.copy(u).multiplyScalar(m.y).addScaledVector(h,-d.y).multiplyScalar(I),g.copy(h).multiplyScalar(d.x).addScaledVector(u,-m.x).multiplyScalar(I),a[D].add(_),a[v].add(_),a[S].add(_),l[D].add(g),l[v].add(g),l[S].add(g))}let R=this.groups;R.length===0&&(R=[{start:0,count:t.count}]);for(let D=0,v=R.length;D<v;++D){const S=R[D],I=S.start,z=S.count;for(let q=I,ot=I+z;q<ot;q+=3)p(t.getX(q+0),t.getX(q+1),t.getX(q+2))}const E=new O,y=new O,T=new O,C=new O;function P(D){T.fromBufferAttribute(s,D),C.copy(T);const v=a[D];E.copy(v),E.sub(T.multiplyScalar(T.dot(v))).normalize(),y.crossVectors(C,v);const I=y.dot(l[D])<0?-1:1;o.setXYZW(D,E.x,E.y,E.z,I)}for(let D=0,v=R.length;D<v;++D){const S=R[D],I=S.start,z=S.count;for(let q=I,ot=I+z;q<ot;q+=3)P(t.getX(q+0)),P(t.getX(q+1)),P(t.getX(q+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new hn(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let f=0,d=i.count;f<d;f++)i.setXYZ(f,0,0,0);const s=new O,r=new O,o=new O,a=new O,l=new O,c=new O,u=new O,h=new O;if(t)for(let f=0,d=t.count;f<d;f+=3){const m=t.getX(f+0),_=t.getX(f+1),g=t.getX(f+2);s.fromBufferAttribute(e,m),r.fromBufferAttribute(e,_),o.fromBufferAttribute(e,g),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),a.fromBufferAttribute(i,m),l.fromBufferAttribute(i,_),c.fromBufferAttribute(i,g),a.add(u),l.add(u),c.add(u),i.setXYZ(m,a.x,a.y,a.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(g,c.x,c.y,c.z)}else for(let f=0,d=e.count;f<d;f+=3)s.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),i.setXYZ(f+0,u.x,u.y,u.z),i.setXYZ(f+1,u.x,u.y,u.z),i.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)Ce.fromBufferAttribute(t,e),Ce.normalize(),t.setXYZ(e,Ce.x,Ce.y,Ce.z)}toNonIndexed(){function t(a,l){const c=a.array,u=a.itemSize,h=a.normalized,f=new c.constructor(l.length*u);let d=0,m=0;for(let _=0,g=l.length;_<g;_++){a.isInterleavedBufferAttribute?d=l[_]*a.data.stride+a.offset:d=l[_]*u;for(let p=0;p<u;p++)f[m++]=c[d++]}return new hn(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Ve,i=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=t(l,i);e.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let u=0,h=c.length;u<h;u++){const f=c[u],d=t(f,i);l.push(d)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const l in i){const c=i[l];t.data.attributes[l]=c.toJSON(t.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){const d=c[h];u.push(d.toJSON(t.data))}u.length>0&&(s[l]=u,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone());const s=t.attributes;for(const c in s){const u=s[c];this.setAttribute(c,u.clone(e))}const r=t.morphAttributes;for(const c in r){const u=[],h=r[c];for(let f=0,d=h.length;f<d;f++)u.push(h[f].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let c=0,u=o.length;c<u;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const vc=new ie,Ri=new yo,Cr=new Ps,yc=new O,Pr=new O,Lr=new O,Dr=new O,jo=new O,Ir=new O,Mc=new O,Ur=new O;class Pe extends Te{constructor(t=new Ve,e=new Vi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;e.fromBufferAttribute(s,t);const a=this.morphTargetInfluences;if(r&&a){Ir.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=a[l],h=r[l];u!==0&&(jo.fromBufferAttribute(h,t),o?Ir.addScaledVector(jo,u):Ir.addScaledVector(jo.sub(e),u))}e.add(Ir)}return e}raycast(t,e){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Cr.copy(i.boundingSphere),Cr.applyMatrix4(r),Ri.copy(t.ray).recast(t.near),!(Cr.containsPoint(Ri.origin)===!1&&(Ri.intersectSphere(Cr,yc)===null||Ri.origin.distanceToSquared(yc)>(t.far-t.near)**2))&&(vc.copy(r).invert(),Ri.copy(t.ray).applyMatrix4(vc),!(i.boundingBox!==null&&Ri.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,Ri)))}_computeIntersections(t,e,i){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,f=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let m=0,_=f.length;m<_;m++){const g=f[m],p=o[g.materialIndex],R=Math.max(g.start,d.start),E=Math.min(a.count,Math.min(g.start+g.count,d.start+d.count));for(let y=R,T=E;y<T;y+=3){const C=a.getX(y),P=a.getX(y+1),D=a.getX(y+2);s=Nr(this,p,t,i,c,u,h,C,P,D),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{const m=Math.max(0,d.start),_=Math.min(a.count,d.start+d.count);for(let g=m,p=_;g<p;g+=3){const R=a.getX(g),E=a.getX(g+1),y=a.getX(g+2);s=Nr(this,o,t,i,c,u,h,R,E,y),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let m=0,_=f.length;m<_;m++){const g=f[m],p=o[g.materialIndex],R=Math.max(g.start,d.start),E=Math.min(l.count,Math.min(g.start+g.count,d.start+d.count));for(let y=R,T=E;y<T;y+=3){const C=y,P=y+1,D=y+2;s=Nr(this,p,t,i,c,u,h,C,P,D),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{const m=Math.max(0,d.start),_=Math.min(l.count,d.start+d.count);for(let g=m,p=_;g<p;g+=3){const R=g,E=g+1,y=g+2;s=Nr(this,o,t,i,c,u,h,R,E,y),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}}}function md(n,t,e,i,s,r,o,a){let l;if(t.side===Ye?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,t.side===jn,a),l===null)return null;Ur.copy(a),Ur.applyMatrix4(n.matrixWorld);const c=e.ray.origin.distanceTo(Ur);return c<e.near||c>e.far?null:{distance:c,point:Ur.clone(),object:n}}function Nr(n,t,e,i,s,r,o,a,l,c){n.getVertexPosition(a,Pr),n.getVertexPosition(l,Lr),n.getVertexPosition(c,Dr);const u=md(n,t,e,i,Pr,Lr,Dr,Mc);if(u){const h=new O;mn.getBarycoord(Mc,Pr,Lr,Dr,h),s&&(u.uv=mn.getInterpolatedAttribute(s,a,l,c,h,new mt)),r&&(u.uv1=mn.getInterpolatedAttribute(r,a,l,c,h,new mt)),o&&(u.normal=mn.getInterpolatedAttribute(o,a,l,c,h,new O),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const f={a,b:l,c,normal:new O,materialIndex:0};mn.getNormal(Pr,Lr,Dr,f.normal),u.face=f,u.barycoord=h}return u}class rn extends Ve{constructor(t=1,e=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],u=[],h=[];let f=0,d=0;m("z","y","x",-1,-1,i,e,t,o,r,0),m("z","y","x",1,-1,i,e,-t,o,r,1),m("x","z","y",1,1,t,i,e,s,o,2),m("x","z","y",1,-1,t,i,-e,s,o,3),m("x","y","z",1,-1,t,e,i,s,r,4),m("x","y","z",-1,-1,t,e,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new be(c,3)),this.setAttribute("normal",new be(u,3)),this.setAttribute("uv",new be(h,2));function m(_,g,p,R,E,y,T,C,P,D,v){const S=y/P,I=T/D,z=y/2,q=T/2,ot=C/2,$=P+1,et=D+1;let lt=0,st=0;const vt=new O;for(let Mt=0;Mt<et;Mt++){const Rt=Mt*I-q;for(let b=0;b<$;b++){const H=b*S-z;vt[_]=H*R,vt[g]=Rt*E,vt[p]=ot,c.push(vt.x,vt.y,vt.z),vt[_]=0,vt[g]=0,vt[p]=C>0?1:-1,u.push(vt.x,vt.y,vt.z),h.push(b/P),h.push(1-Mt/D),lt+=1}}for(let Mt=0;Mt<D;Mt++)for(let Rt=0;Rt<P;Rt++){const b=f+Rt+$*Mt,H=f+Rt+$*(Mt+1),B=f+(Rt+1)+$*(Mt+1),it=f+(Rt+1)+$*Mt;l.push(b,H,it),l.push(H,B,it),st+=6}a.addGroup(d,st,v),d+=st,f+=lt}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new rn(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Ts(n){const t={};for(const e in n){t[e]={};for(const i in n[e]){const s=n[e][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=s.clone():Array.isArray(s)?t[e][i]=s.slice():t[e][i]=s}}return t}function ze(n){const t={};for(let e=0;e<n.length;e++){const i=Ts(n[e]);for(const s in i)t[s]=i[s]}return t}function gd(n){const t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function ru(n){const t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ee.workingColorSpace}const _d={clone:Ts,merge:ze};var xd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,vd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class vi extends Ls{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=xd,this.fragmentShader=vd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ts(t.uniforms),this.uniformsGroups=gd(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}}class ou extends Te{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ie,this.projectionMatrix=new ie,this.projectionMatrixInverse=new ie,this.coordinateSystem=Tn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ri=new O,Sc=new mt,Ec=new mt;class an extends ou{constructor(t=50,e=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=sl*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Qr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return sl*2*Math.atan(Math.tan(Qr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){ri.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(ri.x,ri.y).multiplyScalar(-t/ri.z),ri.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ri.x,ri.y).multiplyScalar(-t/ri.z)}getViewSize(t,e){return this.getViewBounds(t,Sc,Ec),e.subVectors(Ec,Sc)}setViewOffset(t,e,i,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Qr*.5*this.fov)/this.zoom,i=2*e,s=this.aspect*i,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-i,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const rs=-90,os=1;class yd extends Te{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new an(rs,os,t,e);s.layers=this.layers,this.add(s);const r=new an(rs,os,t,e);r.layers=this.layers,this.add(r);const o=new an(rs,os,t,e);o.layers=this.layers,this.add(o);const a=new an(rs,os,t,e);a.layers=this.layers,this.add(a);const l=new an(rs,os,t,e);l.layers=this.layers,this.add(l);const c=new an(rs,os,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[i,s,r,o,a,l]=e;for(const c of e)this.remove(c);if(t===Tn)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===oo)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,u]=this.children,h=t.getRenderTarget(),f=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),m=t.xr.enabled;t.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,s),t.render(e,r),t.setRenderTarget(i,1,s),t.render(e,o),t.setRenderTarget(i,2,s),t.render(e,a),t.setRenderTarget(i,3,s),t.render(e,l),t.setRenderTarget(i,4,s),t.render(e,c),i.texture.generateMipmaps=_,t.setRenderTarget(i,5,s),t.render(e,u),t.setRenderTarget(h,f,d),t.xr.enabled=m,i.texture.needsPMREMUpdate=!0}}class au extends Ne{constructor(t=[],e=Ss,i,s,r,o,a,l,c,u){super(t,e,i,s,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Md extends ki{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new au(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new rn(5,5,5),r=new vi({name:"CubemapFromEquirect",uniforms:Ts(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Ye,blending:mi});r.uniforms.tEquirect.value=e;const o=new Pe(s,r),a=e.minFilter;return e.minFilter===zi&&(e.minFilter=En),new yd(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,i=!0,s=!0){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,i,s);t.setRenderTarget(r)}}class ye extends Te{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Sd={type:"move"};class Ko{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ye,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ye,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new O,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new O),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ye,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new O,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new O),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(const _ of t.hand.values()){const g=e.getJointPose(_,i),p=this._getHandJoint(c,_);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),d=.02,m=.005;c.inputState.pinching&&f>d+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=d-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Sd)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const i=new ye;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}}class bl{constructor(t,e=1,i=1e3){this.isFog=!0,this.name="",this.color=new Qt(t),this.near=e,this.far=i}clone(){return new bl(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Ed extends Te{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Cn,this.environmentIntensity=1,this.environmentRotation=new Cn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}const Or=new O,wc=new O;class wd extends Te{constructor(){super(),this.isLOD=!0,this._currentLevel=0,this.type="LOD",Object.defineProperties(this,{levels:{enumerable:!0,value:[]}}),this.autoUpdate=!0}copy(t){super.copy(t,!1);const e=t.levels;for(let i=0,s=e.length;i<s;i++){const r=e[i];this.addLevel(r.object.clone(),r.distance,r.hysteresis)}return this.autoUpdate=t.autoUpdate,this}addLevel(t,e=0,i=0){e=Math.abs(e);const s=this.levels;let r;for(r=0;r<s.length&&!(e<s[r].distance);r++);return s.splice(r,0,{distance:e,hysteresis:i,object:t}),this.add(t),this}removeLevel(t){const e=this.levels;for(let i=0;i<e.length;i++)if(e[i].distance===t){const s=e.splice(i,1);return this.remove(s[0].object),!0}return!1}getCurrentLevel(){return this._currentLevel}getObjectForDistance(t){const e=this.levels;if(e.length>0){let i,s;for(i=1,s=e.length;i<s;i++){let r=e[i].distance;if(e[i].object.visible&&(r-=r*e[i].hysteresis),t<r)break}return e[i-1].object}return null}raycast(t,e){if(this.levels.length>0){Or.setFromMatrixPosition(this.matrixWorld);const s=t.ray.origin.distanceTo(Or);this.getObjectForDistance(s).raycast(t,e)}}update(t){const e=this.levels;if(e.length>1){Or.setFromMatrixPosition(t.matrixWorld),wc.setFromMatrixPosition(this.matrixWorld);const i=Or.distanceTo(wc)/t.zoom;e[0].object.visible=!0;let s,r;for(s=1,r=e.length;s<r;s++){let o=e[s].distance;if(e[s].object.visible&&(o-=o*e[s].hysteresis),i>=o)e[s-1].object.visible=!1,e[s].object.visible=!0;else break}for(this._currentLevel=s-1;s<r;s++)e[s].object.visible=!1}}toJSON(t){const e=super.toJSON(t);this.autoUpdate===!1&&(e.object.autoUpdate=!1),e.object.levels=[];const i=this.levels;for(let s=0,r=i.length;s<r;s++){const o=i[s];e.object.levels.push({object:o.object.uuid,distance:o.distance,hysteresis:o.hysteresis})}return e}}class Td extends Ne{constructor(t=null,e=1,i=1,s,r,o,a,l,c=tn,u=tn,h,f){super(null,o,a,l,c,u,s,r,h,f),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Tc extends hn{constructor(t,e,i,s=1){super(t,e,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const as=new ie,bc=new ie,Fr=[],Ac=new Yi,bd=new ie,ks=new Pe,Vs=new Ps;class Ad extends Pe{constructor(t,e,i){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Tc(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,bd)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Yi),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,as),Ac.copy(t.boundingBox).applyMatrix4(as),this.boundingBox.union(Ac)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ps),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,as),Vs.copy(t.boundingSphere).applyMatrix4(as),this.boundingSphere.union(Vs)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const i=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,o=t*r+1;for(let a=0;a<i.length;a++)i[a]=s[o+a]}raycast(t,e){const i=this.matrixWorld,s=this.count;if(ks.geometry=this.geometry,ks.material=this.material,ks.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Vs.copy(this.boundingSphere),Vs.applyMatrix4(i),t.ray.intersectsSphere(Vs)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,as),bc.multiplyMatrices(i,as),ks.matrixWorld=bc,ks.raycast(t,Fr);for(let o=0,a=Fr.length;o<a;o++){const l=Fr[o];l.instanceId=r,l.object=this,e.push(l)}Fr.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Tc(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const i=e.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new Td(new Float32Array(s*this.count),s,this.count,yl,wn));const r=this.morphTexture.source.data.data;let o=0;for(let c=0;c<i.length;c++)o+=i[c];const a=this.geometry.morphTargetsRelative?1:1-o,l=s*t;r[l]=a,r.set(i,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Zo=new O,Rd=new O,Cd=new Kt;class Wn{constructor(t=new O(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,s){return this.normal.set(t,e,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const s=Zo.subVectors(i,e).cross(Rd.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const i=t.delta(Zo),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(i,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||Cd.getNormalMatrix(t),s=this.coplanarPoint(Zo).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ci=new Ps,Pd=new mt(.5,.5),zr=new O;class Al{constructor(t=new Wn,e=new Wn,i=new Wn,s=new Wn,r=new Wn,o=new Wn){this.planes=[t,e,i,s,r,o]}set(t,e,i,s,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=Tn,i=!1){const s=this.planes,r=t.elements,o=r[0],a=r[1],l=r[2],c=r[3],u=r[4],h=r[5],f=r[6],d=r[7],m=r[8],_=r[9],g=r[10],p=r[11],R=r[12],E=r[13],y=r[14],T=r[15];if(s[0].setComponents(c-o,d-u,p-m,T-R).normalize(),s[1].setComponents(c+o,d+u,p+m,T+R).normalize(),s[2].setComponents(c+a,d+h,p+_,T+E).normalize(),s[3].setComponents(c-a,d-h,p-_,T-E).normalize(),i)s[4].setComponents(l,f,g,y).normalize(),s[5].setComponents(c-l,d-f,p-g,T-y).normalize();else if(s[4].setComponents(c-l,d-f,p-g,T-y).normalize(),e===Tn)s[5].setComponents(c+l,d+f,p+g,T+y).normalize();else if(e===oo)s[5].setComponents(l,f,g,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ci.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Ci.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ci)}intersectsSprite(t){Ci.center.set(0,0,0);const e=Pd.distanceTo(t.center);return Ci.radius=.7071067811865476+e,Ci.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ci)}intersectsSphere(t){const e=this.planes,i=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const s=e[i];if(zr.x=s.normal.x>0?t.max.x:t.min.x,zr.y=s.normal.y>0?t.max.y:t.min.y,zr.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(zr)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class lu extends Ls{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Qt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const lo=new O,co=new O,Rc=new ie,Hs=new yo,Br=new Ps,Jo=new O,Cc=new O;class Ld extends Te{constructor(t=new Ve,e=new lu){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[0];for(let s=1,r=e.count;s<r;s++)lo.fromBufferAttribute(e,s-1),co.fromBufferAttribute(e,s),i[s]=i[s-1],i[s]+=lo.distanceTo(co);t.setAttribute("lineDistance",new be(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const i=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Br.copy(i.boundingSphere),Br.applyMatrix4(s),Br.radius+=r,t.ray.intersectsSphere(Br)===!1)return;Rc.copy(s).invert(),Hs.copy(t.ray).applyMatrix4(Rc);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=i.index,f=i.attributes.position;if(u!==null){const d=Math.max(0,o.start),m=Math.min(u.count,o.start+o.count);for(let _=d,g=m-1;_<g;_+=c){const p=u.getX(_),R=u.getX(_+1),E=kr(this,t,Hs,l,p,R,_);E&&e.push(E)}if(this.isLineLoop){const _=u.getX(m-1),g=u.getX(d),p=kr(this,t,Hs,l,_,g,m-1);p&&e.push(p)}}else{const d=Math.max(0,o.start),m=Math.min(f.count,o.start+o.count);for(let _=d,g=m-1;_<g;_+=c){const p=kr(this,t,Hs,l,_,_+1,_);p&&e.push(p)}if(this.isLineLoop){const _=kr(this,t,Hs,l,m-1,d,m-1);_&&e.push(_)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function kr(n,t,e,i,s,r,o){const a=n.geometry.attributes.position;if(lo.fromBufferAttribute(a,s),co.fromBufferAttribute(a,r),e.distanceSqToSegment(lo,co,Jo,Cc)>i)return;Jo.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(Jo);if(!(c<t.near||c>t.far))return{distance:c,point:Cc.clone().applyMatrix4(n.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:n}}class Pc extends Ne{constructor(t,e,i,s,r,o,a,l,c){super(t,e,i,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class cu extends Ne{constructor(t,e,i=Bi,s,r,o,a=tn,l=tn,c,u=er,h=1){if(u!==er&&u!==nr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:t,height:e,depth:h};super(f,s,r,o,a,l,u,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new wl(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class hu extends Ne{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class ho extends Ve{constructor(t=1,e=1,i=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const u=[],h=[],f=[],d=[];let m=0;const _=[],g=i/2;let p=0;R(),o===!1&&(t>0&&E(!0),e>0&&E(!1)),this.setIndex(u),this.setAttribute("position",new be(h,3)),this.setAttribute("normal",new be(f,3)),this.setAttribute("uv",new be(d,2));function R(){const y=new O,T=new O;let C=0;const P=(e-t)/i;for(let D=0;D<=r;D++){const v=[],S=D/r,I=S*(e-t)+t;for(let z=0;z<=s;z++){const q=z/s,ot=q*l+a,$=Math.sin(ot),et=Math.cos(ot);T.x=I*$,T.y=-S*i+g,T.z=I*et,h.push(T.x,T.y,T.z),y.set($,P,et).normalize(),f.push(y.x,y.y,y.z),d.push(q,1-S),v.push(m++)}_.push(v)}for(let D=0;D<s;D++)for(let v=0;v<r;v++){const S=_[v][D],I=_[v+1][D],z=_[v+1][D+1],q=_[v][D+1];(t>0||v!==0)&&(u.push(S,I,q),C+=3),(e>0||v!==r-1)&&(u.push(I,z,q),C+=3)}c.addGroup(p,C,0),p+=C}function E(y){const T=m,C=new mt,P=new O;let D=0;const v=y===!0?t:e,S=y===!0?1:-1;for(let z=1;z<=s;z++)h.push(0,g*S,0),f.push(0,S,0),d.push(.5,.5),m++;const I=m;for(let z=0;z<=s;z++){const ot=z/s*l+a,$=Math.cos(ot),et=Math.sin(ot);P.x=v*et,P.y=g*S,P.z=v*$,h.push(P.x,P.y,P.z),f.push(0,S,0),C.x=$*.5+.5,C.y=et*.5*S+.5,d.push(C.x,C.y),m++}for(let z=0;z<s;z++){const q=T+z,ot=I+z;y===!0?u.push(ot,ot+1,q):u.push(ot+1,ot,q),D+=3}c.addGroup(p,D,y===!0?1:2),p+=D}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ho(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class In{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(t,e){const i=this.getUtoTmapping(t);return this.getPoint(i,e)}getPoints(t=5){const e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return e}getSpacedPoints(t=5){const e=[];for(let i=0;i<=t;i++)e.push(this.getPointAt(i/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let i,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)i=this.getPoint(o/t),r+=i.distanceTo(s),e.push(r),s=i;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){const i=this.getLengths();let s=0;const r=i.length;let o;e?o=e:o=t*i[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=i[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,i[s]===o)return s/(r-1);const u=i[s],f=i[s+1]-u,d=(o-u)/f;return(s+d)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);const o=this.getPoint(s),a=this.getPoint(r),l=e||(o.isVector2?new mt:new O);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){const i=this.getUtoTmapping(t);return this.getTangent(i,e)}computeFrenetFrames(t,e=!1){const i=new O,s=[],r=[],o=[],a=new O,l=new ie;for(let d=0;d<=t;d++){const m=d/t;s[d]=this.getTangentAt(m,new O)}r[0]=new O,o[0]=new O;let c=Number.MAX_VALUE;const u=Math.abs(s[0].x),h=Math.abs(s[0].y),f=Math.abs(s[0].z);u<=c&&(c=u,i.set(1,0,0)),h<=c&&(c=h,i.set(0,1,0)),f<=c&&i.set(0,0,1),a.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let d=1;d<=t;d++){if(r[d]=r[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(s[d-1],s[d]),a.length()>Number.EPSILON){a.normalize();const m=Math.acos(Zt(s[d-1].dot(s[d]),-1,1));r[d].applyMatrix4(l.makeRotationAxis(a,m))}o[d].crossVectors(s[d],r[d])}if(e===!0){let d=Math.acos(Zt(r[0].dot(r[t]),-1,1));d/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(d=-d);for(let m=1;m<=t;m++)r[m].applyMatrix4(l.makeRotationAxis(s[m],d*m)),o[m].crossVectors(s[m],r[m])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Rl extends In{constructor(t=0,e=0,i=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new mt){const i=e,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);const a=this.aStartAngle+t*r;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),f=l-this.aX,d=c-this.aY;l=f*u-d*h+this.aX,c=f*h+d*u+this.aY}return i.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class Dd extends Rl{constructor(t,e,i,s,r,o){super(t,e,i,i,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Cl(){let n=0,t=0,e=0,i=0;function s(r,o,a,l){n=r,t=a,e=-3*r+3*o-2*a-l,i=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,u,h){let f=(o-r)/c-(a-r)/(c+u)+(a-o)/u,d=(a-o)/u-(l-o)/(u+h)+(l-a)/h;f*=u,d*=u,s(o,a,f,d)},calc:function(r){const o=r*r,a=o*r;return n+t*r+e*o+i*a}}}const Vr=new O,Qo=new Cl,ta=new Cl,ea=new Cl;class Id extends In{constructor(t=[],e=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=i,this.tension=s}getPoint(t,e=new O){const i=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,u;this.closed||a>0?c=s[(a-1)%r]:(Vr.subVectors(s[0],s[1]).add(s[0]),c=Vr);const h=s[a%r],f=s[(a+1)%r];if(this.closed||a+2<r?u=s[(a+2)%r]:(Vr.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=Vr),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let m=Math.pow(c.distanceToSquared(h),d),_=Math.pow(h.distanceToSquared(f),d),g=Math.pow(f.distanceToSquared(u),d);_<1e-4&&(_=1),m<1e-4&&(m=_),g<1e-4&&(g=_),Qo.initNonuniformCatmullRom(c.x,h.x,f.x,u.x,m,_,g),ta.initNonuniformCatmullRom(c.y,h.y,f.y,u.y,m,_,g),ea.initNonuniformCatmullRom(c.z,h.z,f.z,u.z,m,_,g)}else this.curveType==="catmullrom"&&(Qo.initCatmullRom(c.x,h.x,f.x,u.x,this.tension),ta.initCatmullRom(c.y,h.y,f.y,u.y,this.tension),ea.initCatmullRom(c.z,h.z,f.z,u.z,this.tension));return i.set(Qo.calc(l),ta.calc(l),ea.calc(l)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(new O().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function Lc(n,t,e,i,s){const r=(i-t)*.5,o=(s-e)*.5,a=n*n,l=n*a;return(2*e-2*i+r+o)*l+(-3*e+3*i-2*r-o)*a+r*n+e}function Ud(n,t){const e=1-n;return e*e*t}function Nd(n,t){return 2*(1-n)*n*t}function Od(n,t){return n*n*t}function $s(n,t,e,i){return Ud(n,t)+Nd(n,e)+Od(n,i)}function Fd(n,t){const e=1-n;return e*e*e*t}function zd(n,t){const e=1-n;return 3*e*e*n*t}function Bd(n,t){return 3*(1-n)*n*n*t}function kd(n,t){return n*n*n*t}function js(n,t,e,i,s){return Fd(n,t)+zd(n,e)+Bd(n,i)+kd(n,s)}class uu extends In{constructor(t=new mt,e=new mt,i=new mt,s=new mt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new mt){const i=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(js(t,s.x,r.x,o.x,a.x),js(t,s.y,r.y,o.y,a.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Vd extends In{constructor(t=new O,e=new O,i=new O,s=new O){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new O){const i=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(js(t,s.x,r.x,o.x,a.x),js(t,s.y,r.y,o.y,a.y),js(t,s.z,r.z,o.z,a.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class fu extends In{constructor(t=new mt,e=new mt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new mt){const i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new mt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Hd extends In{constructor(t=new O,e=new O){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new O){const i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new O){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class du extends In{constructor(t=new mt,e=new mt,i=new mt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new mt){const i=e,s=this.v0,r=this.v1,o=this.v2;return i.set($s(t,s.x,r.x,o.x),$s(t,s.y,r.y,o.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Gd extends In{constructor(t=new O,e=new O,i=new O){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new O){const i=e,s=this.v0,r=this.v1,o=this.v2;return i.set($s(t,s.x,r.x,o.x),$s(t,s.y,r.y,o.y),$s(t,s.z,r.z,o.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class pu extends In{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new mt){const i=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],u=s[o>s.length-2?s.length-1:o+1],h=s[o>s.length-3?s.length-1:o+2];return i.set(Lc(a,l.x,c.x,u.x,h.x),Lc(a,l.y,c.y,u.y,h.y)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(new mt().fromArray(s))}return this}}var rl=Object.freeze({__proto__:null,ArcCurve:Dd,CatmullRomCurve3:Id,CubicBezierCurve:uu,CubicBezierCurve3:Vd,EllipseCurve:Rl,LineCurve:fu,LineCurve3:Hd,QuadraticBezierCurve:du,QuadraticBezierCurve3:Gd,SplineCurve:pu});class Wd extends In{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const i=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new rl[i](e,t))}return this}getPoint(t,e){const i=t*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=i){const o=s[r]-i,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let i=0,s=this.curves.length;i<s;i++)e+=this.curves[i].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let i;for(let s=0,r=this.curves;s<r.length;s++){const o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let c=0;c<l.length;c++){const u=l[c];i&&i.equals(u)||(e.push(u),i=u)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){const s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,i=this.curves.length;e<i;e++){const s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){const s=t.curves[e];this.curves.push(new rl[s.type]().fromJSON(s))}return this}}class ol extends Wd{constructor(t){super(),this.type="Path",this.currentPoint=new mt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,i=t.length;e<i;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const i=new fu(this.currentPoint.clone(),new mt(t,e));return this.curves.push(i),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,i,s){const r=new du(this.currentPoint.clone(),new mt(t,e),new mt(i,s));return this.curves.push(r),this.currentPoint.set(i,s),this}bezierCurveTo(t,e,i,s,r,o){const a=new uu(this.currentPoint.clone(),new mt(t,e),new mt(i,s),new mt(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),i=new pu(e);return this.curves.push(i),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,i,s,r,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,i,s,r,o),this}absarc(t,e,i,s,r,o){return this.absellipse(t,e,i,i,s,r,o),this}ellipse(t,e,i,s,r,o,a,l){const c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(t+c,e+u,i,s,r,o,a,l),this}absellipse(t,e,i,s,r,o,a,l){const c=new Rl(t,e,i,s,r,o,a,l);if(this.curves.length>0){const h=c.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(c);const u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class to extends ol{constructor(t){super(t),this.uuid=Cs(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let i=0,s=this.holes.length;i<s;i++)e[i]=this.holes[i].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){const s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,i=this.holes.length;e<i;e++){const s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){const s=t.holes[e];this.holes.push(new ol().fromJSON(s))}return this}}function Xd(n,t,e=2){const i=t&&t.length,s=i?t[0]*e:n.length;let r=mu(n,0,s,e,!0);const o=[];if(!r||r.next===r.prev)return o;let a,l,c;if(i&&(r=Kd(n,t,r,e)),n.length>80*e){a=1/0,l=1/0;let u=-1/0,h=-1/0;for(let f=e;f<s;f+=e){const d=n[f],m=n[f+1];d<a&&(a=d),m<l&&(l=m),d>u&&(u=d),m>h&&(h=m)}c=Math.max(u-a,h-l),c=c!==0?32767/c:0}return sr(r,o,e,a,l,c,0),o}function mu(n,t,e,i,s){let r;if(s===ap(n,t,e,i)>0)for(let o=t;o<e;o+=i)r=Dc(o/i|0,n[o],n[o+1],r);else for(let o=e-i;o>=t;o-=i)r=Dc(o/i|0,n[o],n[o+1],r);return r&&bs(r,r.next)&&(or(r),r=r.next),r}function Hi(n,t){if(!n)return n;t||(t=n);let e=n,i;do if(i=!1,!e.steiner&&(bs(e,e.next)||pe(e.prev,e,e.next)===0)){if(or(e),e=t=e.prev,e===e.next)break;i=!0}else e=e.next;while(i||e!==t);return t}function sr(n,t,e,i,s,r,o){if(!n)return;!o&&r&&ep(n,i,s,r);let a=n;for(;n.prev!==n.next;){const l=n.prev,c=n.next;if(r?qd(n,i,s,r):Yd(n)){t.push(l.i,n.i,c.i),or(n),n=c.next,a=c.next;continue}if(n=c,n===a){o?o===1?(n=$d(Hi(n),t),sr(n,t,e,i,s,r,2)):o===2&&jd(n,t,e,i,s,r):sr(Hi(n),t,e,i,s,r,1);break}}}function Yd(n){const t=n.prev,e=n,i=n.next;if(pe(t,e,i)>=0)return!1;const s=t.x,r=e.x,o=i.x,a=t.y,l=e.y,c=i.y,u=Math.min(s,r,o),h=Math.min(a,l,c),f=Math.max(s,r,o),d=Math.max(a,l,c);let m=i.next;for(;m!==t;){if(m.x>=u&&m.x<=f&&m.y>=h&&m.y<=d&&Ws(s,a,r,l,o,c,m.x,m.y)&&pe(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function qd(n,t,e,i){const s=n.prev,r=n,o=n.next;if(pe(s,r,o)>=0)return!1;const a=s.x,l=r.x,c=o.x,u=s.y,h=r.y,f=o.y,d=Math.min(a,l,c),m=Math.min(u,h,f),_=Math.max(a,l,c),g=Math.max(u,h,f),p=al(d,m,t,e,i),R=al(_,g,t,e,i);let E=n.prevZ,y=n.nextZ;for(;E&&E.z>=p&&y&&y.z<=R;){if(E.x>=d&&E.x<=_&&E.y>=m&&E.y<=g&&E!==s&&E!==o&&Ws(a,u,l,h,c,f,E.x,E.y)&&pe(E.prev,E,E.next)>=0||(E=E.prevZ,y.x>=d&&y.x<=_&&y.y>=m&&y.y<=g&&y!==s&&y!==o&&Ws(a,u,l,h,c,f,y.x,y.y)&&pe(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;E&&E.z>=p;){if(E.x>=d&&E.x<=_&&E.y>=m&&E.y<=g&&E!==s&&E!==o&&Ws(a,u,l,h,c,f,E.x,E.y)&&pe(E.prev,E,E.next)>=0)return!1;E=E.prevZ}for(;y&&y.z<=R;){if(y.x>=d&&y.x<=_&&y.y>=m&&y.y<=g&&y!==s&&y!==o&&Ws(a,u,l,h,c,f,y.x,y.y)&&pe(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function $d(n,t){let e=n;do{const i=e.prev,s=e.next.next;!bs(i,s)&&_u(i,e,e.next,s)&&rr(i,s)&&rr(s,i)&&(t.push(i.i,e.i,s.i),or(e),or(e.next),e=n=s),e=e.next}while(e!==n);return Hi(e)}function jd(n,t,e,i,s,r){let o=n;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&sp(o,a)){let l=xu(o,a);o=Hi(o,o.next),l=Hi(l,l.next),sr(o,t,e,i,s,r,0),sr(l,t,e,i,s,r,0);return}a=a.next}o=o.next}while(o!==n)}function Kd(n,t,e,i){const s=[];for(let r=0,o=t.length;r<o;r++){const a=t[r]*i,l=r<o-1?t[r+1]*i:n.length,c=mu(n,a,l,i,!1);c===c.next&&(c.steiner=!0),s.push(ip(c))}s.sort(Zd);for(let r=0;r<s.length;r++)e=Jd(s[r],e);return e}function Zd(n,t){let e=n.x-t.x;if(e===0&&(e=n.y-t.y,e===0)){const i=(n.next.y-n.y)/(n.next.x-n.x),s=(t.next.y-t.y)/(t.next.x-t.x);e=i-s}return e}function Jd(n,t){const e=Qd(n,t);if(!e)return t;const i=xu(e,n);return Hi(i,i.next),Hi(e,e.next)}function Qd(n,t){let e=t;const i=n.x,s=n.y;let r=-1/0,o;if(bs(n,e))return e;do{if(bs(n,e.next))return e.next;if(s<=e.y&&s>=e.next.y&&e.next.y!==e.y){const h=e.x+(s-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(h<=i&&h>r&&(r=h,o=e.x<e.next.x?e:e.next,h===i))return o}e=e.next}while(e!==t);if(!o)return null;const a=o,l=o.x,c=o.y;let u=1/0;e=o;do{if(i>=e.x&&e.x>=l&&i!==e.x&&gu(s<c?i:r,s,l,c,s<c?r:i,s,e.x,e.y)){const h=Math.abs(s-e.y)/(i-e.x);rr(e,n)&&(h<u||h===u&&(e.x>o.x||e.x===o.x&&tp(o,e)))&&(o=e,u=h)}e=e.next}while(e!==a);return o}function tp(n,t){return pe(n.prev,n,t.prev)<0&&pe(t.next,n,n.next)<0}function ep(n,t,e,i){let s=n;do s.z===0&&(s.z=al(s.x,s.y,t,e,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==n);s.prevZ.nextZ=null,s.prevZ=null,np(s)}function np(n){let t,e=1;do{let i=n,s;n=null;let r=null;for(t=0;i;){t++;let o=i,a=0;for(let c=0;c<e&&(a++,o=o.nextZ,!!o);c++);let l=e;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||i.z<=o.z)?(s=i,i=i.nextZ,a--):(s=o,o=o.nextZ,l--),r?r.nextZ=s:n=s,s.prevZ=r,r=s;i=o}r.nextZ=null,e*=2}while(t>1);return n}function al(n,t,e,i,s){return n=(n-e)*s|0,t=(t-i)*s|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,n|t<<1}function ip(n){let t=n,e=n;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==n);return e}function gu(n,t,e,i,s,r,o,a){return(s-o)*(t-a)>=(n-o)*(r-a)&&(n-o)*(i-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(i-a)}function Ws(n,t,e,i,s,r,o,a){return!(n===o&&t===a)&&gu(n,t,e,i,s,r,o,a)}function sp(n,t){return n.next.i!==t.i&&n.prev.i!==t.i&&!rp(n,t)&&(rr(n,t)&&rr(t,n)&&op(n,t)&&(pe(n.prev,n,t.prev)||pe(n,t.prev,t))||bs(n,t)&&pe(n.prev,n,n.next)>0&&pe(t.prev,t,t.next)>0)}function pe(n,t,e){return(t.y-n.y)*(e.x-t.x)-(t.x-n.x)*(e.y-t.y)}function bs(n,t){return n.x===t.x&&n.y===t.y}function _u(n,t,e,i){const s=Gr(pe(n,t,e)),r=Gr(pe(n,t,i)),o=Gr(pe(e,i,n)),a=Gr(pe(e,i,t));return!!(s!==r&&o!==a||s===0&&Hr(n,e,t)||r===0&&Hr(n,i,t)||o===0&&Hr(e,n,i)||a===0&&Hr(e,t,i))}function Hr(n,t,e){return t.x<=Math.max(n.x,e.x)&&t.x>=Math.min(n.x,e.x)&&t.y<=Math.max(n.y,e.y)&&t.y>=Math.min(n.y,e.y)}function Gr(n){return n>0?1:n<0?-1:0}function rp(n,t){let e=n;do{if(e.i!==n.i&&e.next.i!==n.i&&e.i!==t.i&&e.next.i!==t.i&&_u(e,e.next,n,t))return!0;e=e.next}while(e!==n);return!1}function rr(n,t){return pe(n.prev,n,n.next)<0?pe(n,t,n.next)>=0&&pe(n,n.prev,t)>=0:pe(n,t,n.prev)<0||pe(n,n.next,t)<0}function op(n,t){let e=n,i=!1;const s=(n.x+t.x)/2,r=(n.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(i=!i),e=e.next;while(e!==n);return i}function xu(n,t){const e=ll(n.i,n.x,n.y),i=ll(t.i,t.x,t.y),s=n.next,r=t.prev;return n.next=t,t.prev=n,e.next=s,s.prev=e,i.next=e,e.prev=i,r.next=i,i.prev=r,i}function Dc(n,t,e,i){const s=ll(n,t,e);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function or(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function ll(n,t,e){return{i:n,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function ap(n,t,e,i){let s=0;for(let r=t,o=e-i;r<e;r+=i)s+=(n[o]-n[r])*(n[r+1]+n[o+1]),o=r;return s}class lp{static triangulate(t,e,i=2){return Xd(t,e,i)}}class ds{static area(t){const e=t.length;let i=0;for(let s=e-1,r=0;r<e;s=r++)i+=t[s].x*t[r].y-t[r].x*t[s].y;return i*.5}static isClockWise(t){return ds.area(t)<0}static triangulateShape(t,e){const i=[],s=[],r=[];Ic(t),Uc(i,t);let o=t.length;e.forEach(Ic);for(let l=0;l<e.length;l++)s.push(o),o+=e[l].length,Uc(i,e[l]);const a=lp.triangulate(i,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}}function Ic(n){const t=n.length;t>2&&n[t-1].equals(n[0])&&n.pop()}function Uc(n,t){for(let e=0;e<t.length;e++)n.push(t[e].x),n.push(t[e].y)}class Ks extends Ve{constructor(t=new to([new mt(.5,.5),new mt(-.5,.5),new mt(-.5,-.5),new mt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const i=this,s=[],r=[];for(let a=0,l=t.length;a<l;a++){const c=t[a];o(c)}this.setAttribute("position",new be(s,3)),this.setAttribute("uv",new be(r,2)),this.computeVertexNormals();function o(a){const l=[],c=e.curveSegments!==void 0?e.curveSegments:12,u=e.steps!==void 0?e.steps:1,h=e.depth!==void 0?e.depth:1;let f=e.bevelEnabled!==void 0?e.bevelEnabled:!0,d=e.bevelThickness!==void 0?e.bevelThickness:.2,m=e.bevelSize!==void 0?e.bevelSize:d-.1,_=e.bevelOffset!==void 0?e.bevelOffset:0,g=e.bevelSegments!==void 0?e.bevelSegments:3;const p=e.extrudePath,R=e.UVGenerator!==void 0?e.UVGenerator:cp;let E,y=!1,T,C,P,D;p&&(E=p.getSpacedPoints(u),y=!0,f=!1,T=p.computeFrenetFrames(u,!1),C=new O,P=new O,D=new O),f||(g=0,d=0,m=0,_=0);const v=a.extractPoints(c);let S=v.shape;const I=v.holes;if(!ds.isClockWise(S)){S=S.reverse();for(let N=0,k=I.length;N<k;N++){const Y=I[N];ds.isClockWise(Y)&&(I[N]=Y.reverse())}}function q(N){const Y=10000000000000001e-36;let K=N[0];for(let ht=1;ht<=N.length;ht++){const at=ht%N.length,pt=N[at],Lt=pt.x-K.x,Ct=pt.y-K.y,A=Lt*Lt+Ct*Ct,x=Math.max(Math.abs(pt.x),Math.abs(pt.y),Math.abs(K.x),Math.abs(K.y)),G=Y*x*x;if(A<=G){N.splice(at,1),ht--;continue}K=pt}}q(S),I.forEach(q);const ot=I.length,$=S;for(let N=0;N<ot;N++){const k=I[N];S=S.concat(k)}function et(N,k,Y){return k||console.error("THREE.ExtrudeGeometry: vec does not exist"),N.clone().addScaledVector(k,Y)}const lt=S.length;function st(N,k,Y){let K,ht,at;const pt=N.x-k.x,Lt=N.y-k.y,Ct=Y.x-N.x,A=Y.y-N.y,x=pt*pt+Lt*Lt,G=pt*A-Lt*Ct;if(Math.abs(G)>Number.EPSILON){const nt=Math.sqrt(x),ft=Math.sqrt(Ct*Ct+A*A),rt=k.x-Lt/nt,zt=k.y+pt/nt,St=Y.x-A/ft,Nt=Y.y+Ct/ft,Ot=((St-rt)*A-(Nt-zt)*Ct)/(pt*A-Lt*Ct);K=rt+pt*Ot-N.x,ht=zt+Lt*Ot-N.y;const gt=K*K+ht*ht;if(gt<=2)return new mt(K,ht);at=Math.sqrt(gt/2)}else{let nt=!1;pt>Number.EPSILON?Ct>Number.EPSILON&&(nt=!0):pt<-Number.EPSILON?Ct<-Number.EPSILON&&(nt=!0):Math.sign(Lt)===Math.sign(A)&&(nt=!0),nt?(K=-Lt,ht=pt,at=Math.sqrt(x)):(K=pt,ht=Lt,at=Math.sqrt(x/2))}return new mt(K/at,ht/at)}const vt=[];for(let N=0,k=$.length,Y=k-1,K=N+1;N<k;N++,Y++,K++)Y===k&&(Y=0),K===k&&(K=0),vt[N]=st($[N],$[Y],$[K]);const Mt=[];let Rt,b=vt.concat();for(let N=0,k=ot;N<k;N++){const Y=I[N];Rt=[];for(let K=0,ht=Y.length,at=ht-1,pt=K+1;K<ht;K++,at++,pt++)at===ht&&(at=0),pt===ht&&(pt=0),Rt[K]=st(Y[K],Y[at],Y[pt]);Mt.push(Rt),b=b.concat(Rt)}let H;if(g===0)H=ds.triangulateShape($,I);else{const N=[],k=[];for(let Y=0;Y<g;Y++){const K=Y/g,ht=d*Math.cos(K*Math.PI/2),at=m*Math.sin(K*Math.PI/2)+_;for(let pt=0,Lt=$.length;pt<Lt;pt++){const Ct=et($[pt],vt[pt],at);Z(Ct.x,Ct.y,-ht),K===0&&N.push(Ct)}for(let pt=0,Lt=ot;pt<Lt;pt++){const Ct=I[pt];Rt=Mt[pt];const A=[];for(let x=0,G=Ct.length;x<G;x++){const nt=et(Ct[x],Rt[x],at);Z(nt.x,nt.y,-ht),K===0&&A.push(nt)}K===0&&k.push(A)}}H=ds.triangulateShape(N,k)}const B=H.length,it=m+_;for(let N=0;N<lt;N++){const k=f?et(S[N],b[N],it):S[N];y?(P.copy(T.normals[0]).multiplyScalar(k.x),C.copy(T.binormals[0]).multiplyScalar(k.y),D.copy(E[0]).add(P).add(C),Z(D.x,D.y,D.z)):Z(k.x,k.y,0)}for(let N=1;N<=u;N++)for(let k=0;k<lt;k++){const Y=f?et(S[k],b[k],it):S[k];y?(P.copy(T.normals[N]).multiplyScalar(Y.x),C.copy(T.binormals[N]).multiplyScalar(Y.y),D.copy(E[N]).add(P).add(C),Z(D.x,D.y,D.z)):Z(Y.x,Y.y,h/u*N)}for(let N=g-1;N>=0;N--){const k=N/g,Y=d*Math.cos(k*Math.PI/2),K=m*Math.sin(k*Math.PI/2)+_;for(let ht=0,at=$.length;ht<at;ht++){const pt=et($[ht],vt[ht],K);Z(pt.x,pt.y,h+Y)}for(let ht=0,at=I.length;ht<at;ht++){const pt=I[ht];Rt=Mt[ht];for(let Lt=0,Ct=pt.length;Lt<Ct;Lt++){const A=et(pt[Lt],Rt[Lt],K);y?Z(A.x,A.y+E[u-1].y,E[u-1].x+Y):Z(A.x,A.y,h+Y)}}}L(),U();function L(){const N=s.length/3;if(f){let k=0,Y=lt*k;for(let K=0;K<B;K++){const ht=H[K];Q(ht[2]+Y,ht[1]+Y,ht[0]+Y)}k=u+g*2,Y=lt*k;for(let K=0;K<B;K++){const ht=H[K];Q(ht[0]+Y,ht[1]+Y,ht[2]+Y)}}else{for(let k=0;k<B;k++){const Y=H[k];Q(Y[2],Y[1],Y[0])}for(let k=0;k<B;k++){const Y=H[k];Q(Y[0]+lt*u,Y[1]+lt*u,Y[2]+lt*u)}}i.addGroup(N,s.length/3-N,0)}function U(){const N=s.length/3;let k=0;j($,k),k+=$.length;for(let Y=0,K=I.length;Y<K;Y++){const ht=I[Y];j(ht,k),k+=ht.length}i.addGroup(N,s.length/3-N,1)}function j(N,k){let Y=N.length;for(;--Y>=0;){const K=Y;let ht=Y-1;ht<0&&(ht=N.length-1);for(let at=0,pt=u+g*2;at<pt;at++){const Lt=lt*at,Ct=lt*(at+1),A=k+K+Lt,x=k+ht+Lt,G=k+ht+Ct,nt=k+K+Ct;ct(A,x,G,nt)}}}function Z(N,k,Y){l.push(N),l.push(k),l.push(Y)}function Q(N,k,Y){X(N),X(k),X(Y);const K=s.length/3,ht=R.generateTopUV(i,s,K-3,K-2,K-1);M(ht[0]),M(ht[1]),M(ht[2])}function ct(N,k,Y,K){X(N),X(k),X(K),X(k),X(Y),X(K);const ht=s.length/3,at=R.generateSideWallUV(i,s,ht-6,ht-3,ht-2,ht-1);M(at[0]),M(at[1]),M(at[3]),M(at[1]),M(at[2]),M(at[3])}function X(N){s.push(l[N*3+0]),s.push(l[N*3+1]),s.push(l[N*3+2])}function M(N){r.push(N.x),r.push(N.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,i=this.parameters.options;return hp(e,i,t)}static fromJSON(t,e){const i=[];for(let r=0,o=t.shapes.length;r<o;r++){const a=e[t.shapes[r]];i.push(a)}const s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new rl[s.type]().fromJSON(s)),new Ks(i,t.options)}}const cp={generateTopUV:function(n,t,e,i,s){const r=t[e*3],o=t[e*3+1],a=t[i*3],l=t[i*3+1],c=t[s*3],u=t[s*3+1];return[new mt(r,o),new mt(a,l),new mt(c,u)]},generateSideWallUV:function(n,t,e,i,s,r){const o=t[e*3],a=t[e*3+1],l=t[e*3+2],c=t[i*3],u=t[i*3+1],h=t[i*3+2],f=t[s*3],d=t[s*3+1],m=t[s*3+2],_=t[r*3],g=t[r*3+1],p=t[r*3+2];return Math.abs(a-u)<Math.abs(o-c)?[new mt(o,1-l),new mt(c,1-h),new mt(f,1-m),new mt(_,1-p)]:[new mt(a,1-l),new mt(u,1-h),new mt(d,1-m),new mt(g,1-p)]}};function hp(n,t,e){if(e.shapes=[],Array.isArray(n))for(let i=0,s=n.length;i<s;i++){const r=n[i];e.shapes.push(r.uuid)}else e.shapes.push(n.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class pn extends Ve{constructor(t=1,e=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:s};const r=t/2,o=e/2,a=Math.floor(i),l=Math.floor(s),c=a+1,u=l+1,h=t/a,f=e/l,d=[],m=[],_=[],g=[];for(let p=0;p<u;p++){const R=p*f-o;for(let E=0;E<c;E++){const y=E*h-r;m.push(y,-R,0),_.push(0,0,1),g.push(E/a),g.push(1-p/l)}}for(let p=0;p<l;p++)for(let R=0;R<a;R++){const E=R+c*p,y=R+c*(p+1),T=R+1+c*(p+1),C=R+1+c*p;d.push(E,y,C),d.push(y,T,C)}this.setIndex(d),this.setAttribute("position",new be(m,3)),this.setAttribute("normal",new be(_,3)),this.setAttribute("uv",new be(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new pn(t.width,t.height,t.widthSegments,t.heightSegments)}}class Pl extends Ve{constructor(t=.5,e=1,i=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:i,phiSegments:s,thetaStart:r,thetaLength:o},i=Math.max(3,i),s=Math.max(1,s);const a=[],l=[],c=[],u=[];let h=t;const f=(e-t)/s,d=new O,m=new mt;for(let _=0;_<=s;_++){for(let g=0;g<=i;g++){const p=r+g/i*o;d.x=h*Math.cos(p),d.y=h*Math.sin(p),l.push(d.x,d.y,d.z),c.push(0,0,1),m.x=(d.x/e+1)/2,m.y=(d.y/e+1)/2,u.push(m.x,m.y)}h+=f}for(let _=0;_<s;_++){const g=_*(i+1);for(let p=0;p<i;p++){const R=p+g,E=R,y=R+i+1,T=R+i+2,C=R+1;a.push(E,y,C),a.push(y,T,C)}}this.setIndex(a),this.setAttribute("position",new be(l,3)),this.setAttribute("normal",new be(c,3)),this.setAttribute("uv",new be(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Pl(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class vu extends Ls{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Qt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Qt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Jh,this.normalScale=new mt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Cn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class up extends Ls{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Bf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class fp extends Ls{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class yu extends Te{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Qt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class dp extends yu{constructor(t,e,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Te.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Qt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const na=new ie,Nc=new O,Oc=new O;class pp{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new mt(512,512),this.mapType=Rn,this.map=null,this.mapPass=null,this.matrix=new ie,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Al,this._frameExtents=new mt(1,1),this._viewportCount=1,this._viewports=[new ge(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,i=this.matrix;Nc.setFromMatrixPosition(t.matrixWorld),e.position.copy(Nc),Oc.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Oc),e.updateMatrixWorld(),na.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(na,e.coordinateSystem,e.reversedDepth),e.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(na)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class Mu extends ou{constructor(t=-1,e=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-t,o=i+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class mp extends pp{constructor(){super(new Mu(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class gp extends yu{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Te.DEFAULT_UP),this.updateMatrix(),this.target=new Te,this.shadow=new mp}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class _p extends an{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}const Fc=new ie;class xp{constructor(t,e,i=0,s=1/0){this.ray=new yo(t,e),this.near=i,this.far=s,this.camera=null,this.layers=new Tl,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Fc.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Fc),this}intersectObject(t,e=!0,i=[]){return cl(t,this,i,e),i.sort(zc),i}intersectObjects(t,e=!0,i=[]){for(let s=0,r=t.length;s<r;s++)cl(t[s],this,i,e);return i.sort(zc),i}}function zc(n,t){return n.distance-t.distance}function cl(n,t,e,i){let s=!0;if(n.layers.test(t.layers)&&n.raycast(t,e)===!1&&(s=!1),s===!0&&i===!0){const r=n.children;for(let o=0,a=r.length;o<a;o++)cl(r[o],t,e,!0)}}class Bc{constructor(t=1,e=0,i=0){this.radius=t,this.phi=e,this.theta=i}set(t,e,i){return this.radius=t,this.phi=e,this.theta=i,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Zt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,i){return this.radius=Math.sqrt(t*t+e*e+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,i),this.phi=Math.acos(Zt(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class vp extends Xi{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){if(t===void 0){console.warn("THREE.Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}}function kc(n,t,e,i){const s=yp(i);switch(e){case jh:return n*t;case yl:return n*t/s.components*s.byteLength;case Ml:return n*t/s.components*s.byteLength;case Zh:return n*t*2/s.components*s.byteLength;case Sl:return n*t*2/s.components*s.byteLength;case Kh:return n*t*3/s.components*s.byteLength;case gn:return n*t*4/s.components*s.byteLength;case El:return n*t*4/s.components*s.byteLength;case jr:case Kr:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Zr:case Jr:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case La:case Ia:return Math.max(n,16)*Math.max(t,8)/4;case Pa:case Da:return Math.max(n,8)*Math.max(t,8)/2;case Ua:case Na:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Oa:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Fa:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case za:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case Ba:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case ka:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case Va:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case Ha:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case Ga:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case Wa:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case Xa:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case Ya:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case qa:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case $a:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case ja:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case Ka:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case Za:case Ja:case Qa:return Math.ceil(n/4)*Math.ceil(t/4)*16;case tl:case el:return Math.ceil(n/4)*Math.ceil(t/4)*8;case nl:case il:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function yp(n){switch(n){case Rn:case Xh:return{byteLength:1,components:1};case Qs:case Yh:case dr:return{byteLength:2,components:1};case xl:case vl:return{byteLength:2,components:4};case Bi:case _l:case wn:return{byteLength:4,components:1};case qh:case $h:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:gl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=gl);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Su(){let n=null,t=!1,e=null,i=null;function s(r,o){e(r,o),i=n.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(i=n.requestAnimationFrame(s),t=!0)},stop:function(){n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){n=r}}}function Mp(n){const t=new WeakMap;function e(a,l){const c=a.array,u=a.usage,h=c.byteLength,f=n.createBuffer();n.bindBuffer(l,f),n.bufferData(l,c,u),a.onUploadCallback();let d;if(c instanceof Float32Array)d=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=n.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=n.HALF_FLOAT:d=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=n.SHORT;else if(c instanceof Uint32Array)d=n.UNSIGNED_INT;else if(c instanceof Int32Array)d=n.INT;else if(c instanceof Int8Array)d=n.BYTE;else if(c instanceof Uint8Array)d=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function i(a,l,c){const u=l.array,h=l.updateRanges;if(n.bindBuffer(c,a),h.length===0)n.bufferSubData(c,0,u);else{h.sort((d,m)=>d.start-m.start);let f=0;for(let d=1;d<h.length;d++){const m=h[f],_=h[d];_.start<=m.start+m.count+1?m.count=Math.max(m.count,_.start+_.count-m.start):(++f,h[f]=_)}h.length=f+1;for(let d=0,m=h.length;d<m;d++){const _=h[d];n.bufferSubData(c,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=t.get(a);l&&(n.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=t.get(a);(!u||u.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var Sp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Ep=`#ifdef USE_ALPHAHASH
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
#endif`,wp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Tp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,bp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Ap=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Rp=`#ifdef USE_AOMAP
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
#endif`,Cp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Pp=`#ifdef USE_BATCHING
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
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Lp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Dp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Ip=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Up=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Np=`#ifdef USE_IRIDESCENCE
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
#endif`,Op=`#ifdef USE_BUMPMAP
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
#endif`,Fp=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,zp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Bp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,kp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Vp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Hp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Gp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Wp=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Xp=`#define PI 3.141592653589793
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
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
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
} // validated`,Yp=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,qp=`vec3 transformedNormal = objectNormal;
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
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,$p=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,jp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Kp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Zp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Jp="gl_FragColor = linearToOutputTexel( gl_FragColor );",Qp=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,tm=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,em=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,nm=`#ifdef USE_ENVMAP
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
#endif`,im=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,sm=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,rm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,om=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,am=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,lm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,cm=`#ifdef USE_GRADIENTMAP
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
}`,hm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,um=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,fm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,dm=`uniform bool receiveShadow;
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
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
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
#endif`,pm=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
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
	#endif
#endif`,mm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,gm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,_m=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,xm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,vm=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
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
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
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
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
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
#endif`,ym=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
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
		vec3 iridescenceF0;
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
		float v = 0.5 / ( gv + gl );
		return saturate(v);
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
	vec3 f0 = material.specularColor;
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
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
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
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
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
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
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
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Mm=`
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
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
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
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Sm=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Em=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,wm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Tm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,bm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Am=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Rm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Cm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Pm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Lm=`#if defined( USE_POINTS_UV )
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
#endif`,Dm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Im=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Um=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Nm=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Om=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Fm=`#ifdef USE_MORPHTARGETS
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
#endif`,zm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Bm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
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
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,km=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Vm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Hm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Gm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Wm=`#ifdef USE_NORMALMAP
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
#endif`,Xm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Ym=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,qm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,$m=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,jm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Km=`vec3 packNormalToRGB( const in vec3 normal ) {
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
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Zm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Jm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Qm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,tg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,eg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ng=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ig=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
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
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
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
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
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
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,sg=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
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
#endif`,rg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
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
#endif`,og=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
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
	#if NUM_POINT_LIGHT_SHADOWS > 0
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
}`,ag=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,lg=`#ifdef USE_SKINNING
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
#endif`,cg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,hg=`#ifdef USE_SKINNING
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
#endif`,ug=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,fg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,dg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,pg=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,mg=`#ifdef USE_TRANSMISSION
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
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,gg=`#ifdef USE_TRANSMISSION
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
#endif`,_g=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,xg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,vg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,yg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Mg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Sg=`uniform sampler2D t2D;
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
}`,Eg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,wg=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Tg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,bg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ag=`#include <common>
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
}`,Rg=`#if DEPTH_PACKING == 3200
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
}`,Cg=`#define DISTANCE
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
}`,Pg=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Lg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Dg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ig=`uniform float scale;
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
}`,Ug=`uniform vec3 diffuse;
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
}`,Ng=`#include <common>
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
}`,Og=`uniform vec3 diffuse;
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
}`,Fg=`#define LAMBERT
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
}`,zg=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
}`,Bg=`#define MATCAP
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
}`,kg=`#define MATCAP
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
}`,Vg=`#define NORMAL
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
}`,Hg=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
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
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Gg=`#define PHONG
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
}`,Wg=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
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
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
}`,Xg=`#define STANDARD
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
}`,Yg=`#define STANDARD
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
#include <packing>
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
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
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
}`,qg=`#define TOON
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
}`,$g=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
}`,jg=`uniform float size;
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
}`,Kg=`uniform vec3 diffuse;
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
}`,Zg=`#include <common>
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
}`,Jg=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
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
}`,Qg=`uniform float rotation;
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
}`,t_=`uniform vec3 diffuse;
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
}`,jt={alphahash_fragment:Sp,alphahash_pars_fragment:Ep,alphamap_fragment:wp,alphamap_pars_fragment:Tp,alphatest_fragment:bp,alphatest_pars_fragment:Ap,aomap_fragment:Rp,aomap_pars_fragment:Cp,batching_pars_vertex:Pp,batching_vertex:Lp,begin_vertex:Dp,beginnormal_vertex:Ip,bsdfs:Up,iridescence_fragment:Np,bumpmap_pars_fragment:Op,clipping_planes_fragment:Fp,clipping_planes_pars_fragment:zp,clipping_planes_pars_vertex:Bp,clipping_planes_vertex:kp,color_fragment:Vp,color_pars_fragment:Hp,color_pars_vertex:Gp,color_vertex:Wp,common:Xp,cube_uv_reflection_fragment:Yp,defaultnormal_vertex:qp,displacementmap_pars_vertex:$p,displacementmap_vertex:jp,emissivemap_fragment:Kp,emissivemap_pars_fragment:Zp,colorspace_fragment:Jp,colorspace_pars_fragment:Qp,envmap_fragment:tm,envmap_common_pars_fragment:em,envmap_pars_fragment:nm,envmap_pars_vertex:im,envmap_physical_pars_fragment:pm,envmap_vertex:sm,fog_vertex:rm,fog_pars_vertex:om,fog_fragment:am,fog_pars_fragment:lm,gradientmap_pars_fragment:cm,lightmap_pars_fragment:hm,lights_lambert_fragment:um,lights_lambert_pars_fragment:fm,lights_pars_begin:dm,lights_toon_fragment:mm,lights_toon_pars_fragment:gm,lights_phong_fragment:_m,lights_phong_pars_fragment:xm,lights_physical_fragment:vm,lights_physical_pars_fragment:ym,lights_fragment_begin:Mm,lights_fragment_maps:Sm,lights_fragment_end:Em,logdepthbuf_fragment:wm,logdepthbuf_pars_fragment:Tm,logdepthbuf_pars_vertex:bm,logdepthbuf_vertex:Am,map_fragment:Rm,map_pars_fragment:Cm,map_particle_fragment:Pm,map_particle_pars_fragment:Lm,metalnessmap_fragment:Dm,metalnessmap_pars_fragment:Im,morphinstance_vertex:Um,morphcolor_vertex:Nm,morphnormal_vertex:Om,morphtarget_pars_vertex:Fm,morphtarget_vertex:zm,normal_fragment_begin:Bm,normal_fragment_maps:km,normal_pars_fragment:Vm,normal_pars_vertex:Hm,normal_vertex:Gm,normalmap_pars_fragment:Wm,clearcoat_normal_fragment_begin:Xm,clearcoat_normal_fragment_maps:Ym,clearcoat_pars_fragment:qm,iridescence_pars_fragment:$m,opaque_fragment:jm,packing:Km,premultiplied_alpha_fragment:Zm,project_vertex:Jm,dithering_fragment:Qm,dithering_pars_fragment:tg,roughnessmap_fragment:eg,roughnessmap_pars_fragment:ng,shadowmap_pars_fragment:ig,shadowmap_pars_vertex:sg,shadowmap_vertex:rg,shadowmask_pars_fragment:og,skinbase_vertex:ag,skinning_pars_vertex:lg,skinning_vertex:cg,skinnormal_vertex:hg,specularmap_fragment:ug,specularmap_pars_fragment:fg,tonemapping_fragment:dg,tonemapping_pars_fragment:pg,transmission_fragment:mg,transmission_pars_fragment:gg,uv_pars_fragment:_g,uv_pars_vertex:xg,uv_vertex:vg,worldpos_vertex:yg,background_vert:Mg,background_frag:Sg,backgroundCube_vert:Eg,backgroundCube_frag:wg,cube_vert:Tg,cube_frag:bg,depth_vert:Ag,depth_frag:Rg,distanceRGBA_vert:Cg,distanceRGBA_frag:Pg,equirect_vert:Lg,equirect_frag:Dg,linedashed_vert:Ig,linedashed_frag:Ug,meshbasic_vert:Ng,meshbasic_frag:Og,meshlambert_vert:Fg,meshlambert_frag:zg,meshmatcap_vert:Bg,meshmatcap_frag:kg,meshnormal_vert:Vg,meshnormal_frag:Hg,meshphong_vert:Gg,meshphong_frag:Wg,meshphysical_vert:Xg,meshphysical_frag:Yg,meshtoon_vert:qg,meshtoon_frag:$g,points_vert:jg,points_frag:Kg,shadow_vert:Zg,shadow_frag:Jg,sprite_vert:Qg,sprite_frag:t_},wt={common:{diffuse:{value:new Qt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Kt},alphaMap:{value:null},alphaMapTransform:{value:new Kt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Kt}},envmap:{envMap:{value:null},envMapRotation:{value:new Kt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Kt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Kt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Kt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Kt},normalScale:{value:new mt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Kt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Kt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Kt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Kt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Qt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Qt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Kt},alphaTest:{value:0},uvTransform:{value:new Kt}},sprite:{diffuse:{value:new Qt(16777215)},opacity:{value:1},center:{value:new mt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Kt},alphaMap:{value:null},alphaMapTransform:{value:new Kt},alphaTest:{value:0}}},Sn={basic:{uniforms:ze([wt.common,wt.specularmap,wt.envmap,wt.aomap,wt.lightmap,wt.fog]),vertexShader:jt.meshbasic_vert,fragmentShader:jt.meshbasic_frag},lambert:{uniforms:ze([wt.common,wt.specularmap,wt.envmap,wt.aomap,wt.lightmap,wt.emissivemap,wt.bumpmap,wt.normalmap,wt.displacementmap,wt.fog,wt.lights,{emissive:{value:new Qt(0)}}]),vertexShader:jt.meshlambert_vert,fragmentShader:jt.meshlambert_frag},phong:{uniforms:ze([wt.common,wt.specularmap,wt.envmap,wt.aomap,wt.lightmap,wt.emissivemap,wt.bumpmap,wt.normalmap,wt.displacementmap,wt.fog,wt.lights,{emissive:{value:new Qt(0)},specular:{value:new Qt(1118481)},shininess:{value:30}}]),vertexShader:jt.meshphong_vert,fragmentShader:jt.meshphong_frag},standard:{uniforms:ze([wt.common,wt.envmap,wt.aomap,wt.lightmap,wt.emissivemap,wt.bumpmap,wt.normalmap,wt.displacementmap,wt.roughnessmap,wt.metalnessmap,wt.fog,wt.lights,{emissive:{value:new Qt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:jt.meshphysical_vert,fragmentShader:jt.meshphysical_frag},toon:{uniforms:ze([wt.common,wt.aomap,wt.lightmap,wt.emissivemap,wt.bumpmap,wt.normalmap,wt.displacementmap,wt.gradientmap,wt.fog,wt.lights,{emissive:{value:new Qt(0)}}]),vertexShader:jt.meshtoon_vert,fragmentShader:jt.meshtoon_frag},matcap:{uniforms:ze([wt.common,wt.bumpmap,wt.normalmap,wt.displacementmap,wt.fog,{matcap:{value:null}}]),vertexShader:jt.meshmatcap_vert,fragmentShader:jt.meshmatcap_frag},points:{uniforms:ze([wt.points,wt.fog]),vertexShader:jt.points_vert,fragmentShader:jt.points_frag},dashed:{uniforms:ze([wt.common,wt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:jt.linedashed_vert,fragmentShader:jt.linedashed_frag},depth:{uniforms:ze([wt.common,wt.displacementmap]),vertexShader:jt.depth_vert,fragmentShader:jt.depth_frag},normal:{uniforms:ze([wt.common,wt.bumpmap,wt.normalmap,wt.displacementmap,{opacity:{value:1}}]),vertexShader:jt.meshnormal_vert,fragmentShader:jt.meshnormal_frag},sprite:{uniforms:ze([wt.sprite,wt.fog]),vertexShader:jt.sprite_vert,fragmentShader:jt.sprite_frag},background:{uniforms:{uvTransform:{value:new Kt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:jt.background_vert,fragmentShader:jt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Kt}},vertexShader:jt.backgroundCube_vert,fragmentShader:jt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:jt.cube_vert,fragmentShader:jt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:jt.equirect_vert,fragmentShader:jt.equirect_frag},distanceRGBA:{uniforms:ze([wt.common,wt.displacementmap,{referencePosition:{value:new O},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:jt.distanceRGBA_vert,fragmentShader:jt.distanceRGBA_frag},shadow:{uniforms:ze([wt.lights,wt.fog,{color:{value:new Qt(0)},opacity:{value:1}}]),vertexShader:jt.shadow_vert,fragmentShader:jt.shadow_frag}};Sn.physical={uniforms:ze([Sn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Kt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Kt},clearcoatNormalScale:{value:new mt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Kt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Kt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Kt},sheen:{value:0},sheenColor:{value:new Qt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Kt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Kt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Kt},transmissionSamplerSize:{value:new mt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Kt},attenuationDistance:{value:0},attenuationColor:{value:new Qt(0)},specularColor:{value:new Qt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Kt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Kt},anisotropyVector:{value:new mt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Kt}}]),vertexShader:jt.meshphysical_vert,fragmentShader:jt.meshphysical_frag};const Wr={r:0,b:0,g:0},Pi=new Cn,e_=new ie;function n_(n,t,e,i,s,r,o){const a=new Qt(0);let l=r===!0?0:1,c,u,h=null,f=0,d=null;function m(E){let y=E.isScene===!0?E.background:null;return y&&y.isTexture&&(y=(E.backgroundBlurriness>0?e:t).get(y)),y}function _(E){let y=!1;const T=m(E);T===null?p(a,l):T&&T.isColor&&(p(T,1),y=!0);const C=n.xr.getEnvironmentBlendMode();C==="additive"?i.buffers.color.setClear(0,0,0,1,o):C==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||y)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function g(E,y){const T=m(y);T&&(T.isCubeTexture||T.mapping===vo)?(u===void 0&&(u=new Pe(new rn(1,1,1),new vi({name:"BackgroundCubeMaterial",uniforms:Ts(Sn.backgroundCube.uniforms),vertexShader:Sn.backgroundCube.vertexShader,fragmentShader:Sn.backgroundCube.fragmentShader,side:Ye,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(C,P,D){this.matrixWorld.copyPosition(D.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),Pi.copy(y.backgroundRotation),Pi.x*=-1,Pi.y*=-1,Pi.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(Pi.y*=-1,Pi.z*=-1),u.material.uniforms.envMap.value=T,u.material.uniforms.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(e_.makeRotationFromEuler(Pi)),u.material.toneMapped=ee.getTransfer(T.colorSpace)!==re,(h!==T||f!==T.version||d!==n.toneMapping)&&(u.material.needsUpdate=!0,h=T,f=T.version,d=n.toneMapping),u.layers.enableAll(),E.unshift(u,u.geometry,u.material,0,0,null)):T&&T.isTexture&&(c===void 0&&(c=new Pe(new pn(2,2),new vi({name:"BackgroundMaterial",uniforms:Ts(Sn.background.uniforms),vertexShader:Sn.background.vertexShader,fragmentShader:Sn.background.fragmentShader,side:jn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=T,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.toneMapped=ee.getTransfer(T.colorSpace)!==re,T.matrixAutoUpdate===!0&&T.updateMatrix(),c.material.uniforms.uvTransform.value.copy(T.matrix),(h!==T||f!==T.version||d!==n.toneMapping)&&(c.material.needsUpdate=!0,h=T,f=T.version,d=n.toneMapping),c.layers.enableAll(),E.unshift(c,c.geometry,c.material,0,0,null))}function p(E,y){E.getRGB(Wr,ru(n)),i.buffers.color.setClear(Wr.r,Wr.g,Wr.b,y,o)}function R(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(E,y=1){a.set(E),l=y,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(E){l=E,p(a,l)},render:_,addToRenderList:g,dispose:R}}function i_(n,t){const e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=f(null);let r=s,o=!1;function a(S,I,z,q,ot){let $=!1;const et=h(q,z,I);r!==et&&(r=et,c(r.object)),$=d(S,q,z,ot),$&&m(S,q,z,ot),ot!==null&&t.update(ot,n.ELEMENT_ARRAY_BUFFER),($||o)&&(o=!1,y(S,I,z,q),ot!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(ot).buffer))}function l(){return n.createVertexArray()}function c(S){return n.bindVertexArray(S)}function u(S){return n.deleteVertexArray(S)}function h(S,I,z){const q=z.wireframe===!0;let ot=i[S.id];ot===void 0&&(ot={},i[S.id]=ot);let $=ot[I.id];$===void 0&&($={},ot[I.id]=$);let et=$[q];return et===void 0&&(et=f(l()),$[q]=et),et}function f(S){const I=[],z=[],q=[];for(let ot=0;ot<e;ot++)I[ot]=0,z[ot]=0,q[ot]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:z,attributeDivisors:q,object:S,attributes:{},index:null}}function d(S,I,z,q){const ot=r.attributes,$=I.attributes;let et=0;const lt=z.getAttributes();for(const st in lt)if(lt[st].location>=0){const Mt=ot[st];let Rt=$[st];if(Rt===void 0&&(st==="instanceMatrix"&&S.instanceMatrix&&(Rt=S.instanceMatrix),st==="instanceColor"&&S.instanceColor&&(Rt=S.instanceColor)),Mt===void 0||Mt.attribute!==Rt||Rt&&Mt.data!==Rt.data)return!0;et++}return r.attributesNum!==et||r.index!==q}function m(S,I,z,q){const ot={},$=I.attributes;let et=0;const lt=z.getAttributes();for(const st in lt)if(lt[st].location>=0){let Mt=$[st];Mt===void 0&&(st==="instanceMatrix"&&S.instanceMatrix&&(Mt=S.instanceMatrix),st==="instanceColor"&&S.instanceColor&&(Mt=S.instanceColor));const Rt={};Rt.attribute=Mt,Mt&&Mt.data&&(Rt.data=Mt.data),ot[st]=Rt,et++}r.attributes=ot,r.attributesNum=et,r.index=q}function _(){const S=r.newAttributes;for(let I=0,z=S.length;I<z;I++)S[I]=0}function g(S){p(S,0)}function p(S,I){const z=r.newAttributes,q=r.enabledAttributes,ot=r.attributeDivisors;z[S]=1,q[S]===0&&(n.enableVertexAttribArray(S),q[S]=1),ot[S]!==I&&(n.vertexAttribDivisor(S,I),ot[S]=I)}function R(){const S=r.newAttributes,I=r.enabledAttributes;for(let z=0,q=I.length;z<q;z++)I[z]!==S[z]&&(n.disableVertexAttribArray(z),I[z]=0)}function E(S,I,z,q,ot,$,et){et===!0?n.vertexAttribIPointer(S,I,z,ot,$):n.vertexAttribPointer(S,I,z,q,ot,$)}function y(S,I,z,q){_();const ot=q.attributes,$=z.getAttributes(),et=I.defaultAttributeValues;for(const lt in $){const st=$[lt];if(st.location>=0){let vt=ot[lt];if(vt===void 0&&(lt==="instanceMatrix"&&S.instanceMatrix&&(vt=S.instanceMatrix),lt==="instanceColor"&&S.instanceColor&&(vt=S.instanceColor)),vt!==void 0){const Mt=vt.normalized,Rt=vt.itemSize,b=t.get(vt);if(b===void 0)continue;const H=b.buffer,B=b.type,it=b.bytesPerElement,L=B===n.INT||B===n.UNSIGNED_INT||vt.gpuType===_l;if(vt.isInterleavedBufferAttribute){const U=vt.data,j=U.stride,Z=vt.offset;if(U.isInstancedInterleavedBuffer){for(let Q=0;Q<st.locationSize;Q++)p(st.location+Q,U.meshPerAttribute);S.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=U.meshPerAttribute*U.count)}else for(let Q=0;Q<st.locationSize;Q++)g(st.location+Q);n.bindBuffer(n.ARRAY_BUFFER,H);for(let Q=0;Q<st.locationSize;Q++)E(st.location+Q,Rt/st.locationSize,B,Mt,j*it,(Z+Rt/st.locationSize*Q)*it,L)}else{if(vt.isInstancedBufferAttribute){for(let U=0;U<st.locationSize;U++)p(st.location+U,vt.meshPerAttribute);S.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=vt.meshPerAttribute*vt.count)}else for(let U=0;U<st.locationSize;U++)g(st.location+U);n.bindBuffer(n.ARRAY_BUFFER,H);for(let U=0;U<st.locationSize;U++)E(st.location+U,Rt/st.locationSize,B,Mt,Rt*it,Rt/st.locationSize*U*it,L)}}else if(et!==void 0){const Mt=et[lt];if(Mt!==void 0)switch(Mt.length){case 2:n.vertexAttrib2fv(st.location,Mt);break;case 3:n.vertexAttrib3fv(st.location,Mt);break;case 4:n.vertexAttrib4fv(st.location,Mt);break;default:n.vertexAttrib1fv(st.location,Mt)}}}}R()}function T(){D();for(const S in i){const I=i[S];for(const z in I){const q=I[z];for(const ot in q)u(q[ot].object),delete q[ot];delete I[z]}delete i[S]}}function C(S){if(i[S.id]===void 0)return;const I=i[S.id];for(const z in I){const q=I[z];for(const ot in q)u(q[ot].object),delete q[ot];delete I[z]}delete i[S.id]}function P(S){for(const I in i){const z=i[I];if(z[S.id]===void 0)continue;const q=z[S.id];for(const ot in q)u(q[ot].object),delete q[ot];delete z[S.id]}}function D(){v(),o=!0,r!==s&&(r=s,c(r.object))}function v(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:D,resetDefaultState:v,dispose:T,releaseStatesOfGeometry:C,releaseStatesOfProgram:P,initAttributes:_,enableAttribute:g,disableUnusedAttributes:R}}function s_(n,t,e){let i;function s(c){i=c}function r(c,u){n.drawArrays(i,c,u),e.update(u,i,1)}function o(c,u,h){h!==0&&(n.drawArraysInstanced(i,c,u,h),e.update(u,i,h))}function a(c,u,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,h);let d=0;for(let m=0;m<h;m++)d+=u[m];e.update(d,i,1)}function l(c,u,h,f){if(h===0)return;const d=t.get("WEBGL_multi_draw");if(d===null)for(let m=0;m<c.length;m++)o(c[m],u[m],f[m]);else{d.multiDrawArraysInstancedWEBGL(i,c,0,u,0,f,0,h);let m=0;for(let _=0;_<h;_++)m+=u[_]*f[_];e.update(m,i,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function r_(n,t,e,i){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const P=t.get("EXT_texture_filter_anisotropic");s=n.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(P){return!(P!==gn&&i.convert(P)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(P){const D=P===dr&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(P!==Rn&&i.convert(P)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&P!==wn&&!D)}function l(P){if(P==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const h=e.logarithmicDepthBuffer===!0,f=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),d=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),m=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_TEXTURE_SIZE),g=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),R=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),E=n.getParameter(n.MAX_VARYING_VECTORS),y=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),T=m>0,C=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:h,reversedDepthBuffer:f,maxTextures:d,maxVertexTextures:m,maxTextureSize:_,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:R,maxVaryings:E,maxFragmentUniforms:y,vertexTextures:T,maxSamples:C}}function o_(n){const t=this;let e=null,i=0,s=!1,r=!1;const o=new Wn,a=new Kt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const d=h.length!==0||f||i!==0||s;return s=f,i=h.length,d},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,f){e=u(h,f,0)},this.setState=function(h,f,d){const m=h.clippingPlanes,_=h.clipIntersection,g=h.clipShadows,p=n.get(h);if(!s||m===null||m.length===0||r&&!g)r?u(null):c();else{const R=r?0:i,E=R*4;let y=p.clippingState||null;l.value=y,y=u(m,f,E,d);for(let T=0;T!==E;++T)y[T]=e[T];p.clippingState=y,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=R}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function u(h,f,d,m){const _=h!==null?h.length:0;let g=null;if(_!==0){if(g=l.value,m!==!0||g===null){const p=d+_*4,R=f.matrixWorldInverse;a.getNormalMatrix(R),(g===null||g.length<p)&&(g=new Float32Array(p));for(let E=0,y=d;E!==_;++E,y+=4)o.copy(h[E]).applyMatrix4(R,a),o.normal.toArray(g,y),g[y+3]=o.constant}l.value=g,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,g}}function a_(n){let t=new WeakMap;function e(o,a){return a===ba?o.mapping=Ss:a===Aa&&(o.mapping=Es),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===ba||a===Aa)if(t.has(o)){const l=t.get(o).texture;return e(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new Md(l.height);return c.fromEquirectangularTexture(n,o),t.set(o,c),o.addEventListener("dispose",s),e(c.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:i,dispose:r}}const ps=4,Vc=[.125,.215,.35,.446,.526,.582],Ui=20,ia=new Mu,Hc=new Qt;let sa=null,ra=0,oa=0,aa=!1;const Di=(1+Math.sqrt(5))/2,ls=1/Di,Gc=[new O(-Di,ls,0),new O(Di,ls,0),new O(-ls,0,Di),new O(ls,0,Di),new O(0,Di,-ls),new O(0,Di,ls),new O(-1,1,-1),new O(1,1,-1),new O(-1,1,1),new O(1,1,1)],l_=new O;class Wc{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,s=100,r={}){const{size:o=256,position:a=l_}=r;sa=this._renderer.getRenderTarget(),ra=this._renderer.getActiveCubeFace(),oa=this._renderer.getActiveMipmapLevel(),aa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,i,s,l,a),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=qc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Yc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(sa,ra,oa),this._renderer.xr.enabled=aa,t.scissorTest=!1,Xr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Ss||t.mapping===Es?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),sa=this._renderer.getRenderTarget(),ra=this._renderer.getActiveCubeFace(),oa=this._renderer.getActiveMipmapLevel(),aa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:En,minFilter:En,generateMipmaps:!1,type:dr,format:gn,colorSpace:ws,depthBuffer:!1},s=Xc(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Xc(t,e,i);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=c_(r)),this._blurMaterial=h_(r,t,e)}return s}_compileMaterial(t){const e=new Pe(this._lodPlanes[0],t);this._renderer.compile(e,ia)}_sceneToCubeUV(t,e,i,s,r){const l=new an(90,1,e,i),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,f=h.autoClear,d=h.toneMapping;h.getClearColor(Hc),h.toneMapping=gi,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(s),h.clearDepth(),h.setRenderTarget(null));const _=new Vi({name:"PMREM.Background",side:Ye,depthWrite:!1,depthTest:!1}),g=new Pe(new rn,_);let p=!1;const R=t.background;R?R.isColor&&(_.color.copy(R),t.background=null,p=!0):(_.color.copy(Hc),p=!0);for(let E=0;E<6;E++){const y=E%3;y===0?(l.up.set(0,c[E],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+u[E],r.y,r.z)):y===1?(l.up.set(0,0,c[E]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+u[E],r.z)):(l.up.set(0,c[E],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+u[E]));const T=this._cubeSize;Xr(s,y*T,E>2?T:0,T,T),h.setRenderTarget(s),p&&h.render(g,l),h.render(t,l)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=f,t.background=R}_textureToCubeUV(t,e){const i=this._renderer,s=t.mapping===Ss||t.mapping===Es;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=qc()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Yc());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new Pe(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;const l=this._cubeSize;Xr(e,0,0,3*l,2*l),i.setRenderTarget(e),i.render(o,ia)}_applyPMREM(t){const e=this._renderer,i=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Gc[(s-r-1)%Gc.length];this._blur(t,r-1,r,o,a)}e.autoClear=i}_blur(t,e,i,s,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,i,s,"latitudinal",r),this._halfBlur(o,t,i,i,s,"longitudinal",r)}_halfBlur(t,e,i,s,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new Pe(this._lodPlanes[s],c),f=c.uniforms,d=this._sizeLods[i]-1,m=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*Ui-1),_=r/m,g=isFinite(r)?1+Math.floor(u*_):Ui;g>Ui&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Ui}`);const p=[];let R=0;for(let P=0;P<Ui;++P){const D=P/_,v=Math.exp(-D*D/2);p.push(v),P===0?R+=v:P<g&&(R+=2*v)}for(let P=0;P<p.length;P++)p[P]=p[P]/R;f.envMap.value=t.texture,f.samples.value=g,f.weights.value=p,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:E}=this;f.dTheta.value=m,f.mipInt.value=E-i;const y=this._sizeLods[s],T=3*y*(s>E-ps?s-E+ps:0),C=4*(this._cubeSize-y);Xr(e,T,C,3*y,2*y),l.setRenderTarget(e),l.render(h,ia)}}function c_(n){const t=[],e=[],i=[];let s=n;const r=n-ps+1+Vc.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);e.push(a);let l=1/a;o>n-ps?l=Vc[o-n+ps-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),u=-c,h=1+c,f=[u,u,h,u,h,h,u,u,h,h,u,h],d=6,m=6,_=3,g=2,p=1,R=new Float32Array(_*m*d),E=new Float32Array(g*m*d),y=new Float32Array(p*m*d);for(let C=0;C<d;C++){const P=C%3*2/3-1,D=C>2?0:-1,v=[P,D,0,P+2/3,D,0,P+2/3,D+1,0,P,D,0,P+2/3,D+1,0,P,D+1,0];R.set(v,_*m*C),E.set(f,g*m*C);const S=[C,C,C,C,C,C];y.set(S,p*m*C)}const T=new Ve;T.setAttribute("position",new hn(R,_)),T.setAttribute("uv",new hn(E,g)),T.setAttribute("faceIndex",new hn(y,p)),t.push(T),s>ps&&s--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function Xc(n,t,e){const i=new ki(n,t,e);return i.texture.mapping=vo,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Xr(n,t,e,i,s){n.viewport.set(t,e,i,s),n.scissor.set(t,e,i,s)}function h_(n,t,e){const i=new Float32Array(Ui),s=new O(0,1,0);return new vi({name:"SphericalGaussianBlur",defines:{n:Ui,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Ll(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:mi,depthTest:!1,depthWrite:!1})}function Yc(){return new vi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ll(),fragmentShader:`

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
		`,blending:mi,depthTest:!1,depthWrite:!1})}function qc(){return new vi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ll(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:mi,depthTest:!1,depthWrite:!1})}function Ll(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function u_(n){let t=new WeakMap,e=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===ba||l===Aa,u=l===Ss||l===Es;if(c||u){let h=t.get(a);const f=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return e===null&&(e=new Wc(n)),h=c?e.fromEquirectangular(a,h):e.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,t.set(a,h),h.texture;if(h!==void 0)return h.texture;{const d=a.image;return c&&d&&d.height>0||u&&d&&s(d)?(e===null&&(e=new Wc(n)),h=c?e.fromEquirectangular(a):e.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,t.set(a,h),a.addEventListener("dispose",r),h.texture):null}}}return a}function s(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:o}}function f_(n){const t={};function e(i){if(t[i]!==void 0)return t[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return t[i]=s,s}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){const s=e(i);return s===null&&ir("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function d_(n,t,e,i){const s={},r=new WeakMap;function o(h){const f=h.target;f.index!==null&&t.remove(f.index);for(const m in f.attributes)t.remove(f.attributes[m]);f.removeEventListener("dispose",o),delete s[f.id];const d=r.get(f);d&&(t.remove(d),r.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(h,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,e.memory.geometries++),f}function l(h){const f=h.attributes;for(const d in f)t.update(f[d],n.ARRAY_BUFFER)}function c(h){const f=[],d=h.index,m=h.attributes.position;let _=0;if(d!==null){const R=d.array;_=d.version;for(let E=0,y=R.length;E<y;E+=3){const T=R[E+0],C=R[E+1],P=R[E+2];f.push(T,C,C,P,P,T)}}else if(m!==void 0){const R=m.array;_=m.version;for(let E=0,y=R.length/3-1;E<y;E+=3){const T=E+0,C=E+1,P=E+2;f.push(T,C,C,P,P,T)}}else return;const g=new(tu(f)?su:iu)(f,1);g.version=_;const p=r.get(h);p&&t.remove(p),r.set(h,g)}function u(h){const f=r.get(h);if(f){const d=h.index;d!==null&&f.version<d.version&&c(h)}else c(h);return r.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function p_(n,t,e){let i;function s(f){i=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function l(f,d){n.drawElements(i,d,r,f*o),e.update(d,i,1)}function c(f,d,m){m!==0&&(n.drawElementsInstanced(i,d,r,f*o,m),e.update(d,i,m))}function u(f,d,m){if(m===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,d,0,r,f,0,m);let g=0;for(let p=0;p<m;p++)g+=d[p];e.update(g,i,1)}function h(f,d,m,_){if(m===0)return;const g=t.get("WEBGL_multi_draw");if(g===null)for(let p=0;p<f.length;p++)c(f[p]/o,d[p],_[p]);else{g.multiDrawElementsInstancedWEBGL(i,d,0,r,f,0,_,0,m);let p=0;for(let R=0;R<m;R++)p+=d[R]*_[R];e.update(p,i,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function m_(n){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(e.calls++,o){case n.TRIANGLES:e.triangles+=a*(r/3);break;case n.LINES:e.lines+=a*(r/2);break;case n.LINE_STRIP:e.lines+=a*(r-1);break;case n.LINE_LOOP:e.lines+=a*r;break;case n.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:i}}function g_(n,t,e){const i=new WeakMap,s=new ge;function r(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0;let f=i.get(a);if(f===void 0||f.count!==h){let S=function(){D.dispose(),i.delete(a),a.removeEventListener("dispose",S)};var d=S;f!==void 0&&f.texture.dispose();const m=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,g=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],R=a.morphAttributes.normal||[],E=a.morphAttributes.color||[];let y=0;m===!0&&(y=1),_===!0&&(y=2),g===!0&&(y=3);let T=a.attributes.position.count*y,C=1;T>t.maxTextureSize&&(C=Math.ceil(T/t.maxTextureSize),T=t.maxTextureSize);const P=new Float32Array(T*C*4*h),D=new eu(P,T,C,h);D.type=wn,D.needsUpdate=!0;const v=y*4;for(let I=0;I<h;I++){const z=p[I],q=R[I],ot=E[I],$=T*C*4*I;for(let et=0;et<z.count;et++){const lt=et*v;m===!0&&(s.fromBufferAttribute(z,et),P[$+lt+0]=s.x,P[$+lt+1]=s.y,P[$+lt+2]=s.z,P[$+lt+3]=0),_===!0&&(s.fromBufferAttribute(q,et),P[$+lt+4]=s.x,P[$+lt+5]=s.y,P[$+lt+6]=s.z,P[$+lt+7]=0),g===!0&&(s.fromBufferAttribute(ot,et),P[$+lt+8]=s.x,P[$+lt+9]=s.y,P[$+lt+10]=s.z,P[$+lt+11]=ot.itemSize===4?s.w:1)}}f={count:h,texture:D,size:new mt(T,C)},i.set(a,f),a.addEventListener("dispose",S)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,e);else{let m=0;for(let g=0;g<c.length;g++)m+=c[g];const _=a.morphTargetsRelative?1:1-m;l.getUniforms().setValue(n,"morphTargetBaseInfluence",_),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",f.texture,e),l.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:r}}function __(n,t,e,i){let s=new WeakMap;function r(l){const c=i.render.frame,u=l.geometry,h=t.get(l,u);if(s.get(h)!==c&&(t.update(h),s.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(e.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;s.get(f)!==c&&(f.update(),s.set(f,c))}return h}function o(){s=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:o}}const Eu=new Ne,$c=new cu(1,1),wu=new eu,Tu=new sd,bu=new au,jc=[],Kc=[],Zc=new Float32Array(16),Jc=new Float32Array(9),Qc=new Float32Array(4);function Ds(n,t,e){const i=n[0];if(i<=0||i>0)return n;const s=t*e;let r=jc[s];if(r===void 0&&(r=new Float32Array(s),jc[s]=r),t!==0){i.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,n[o].toArray(r,a)}return r}function Ae(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function Re(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function Mo(n,t){let e=Kc[t];e===void 0&&(e=new Int32Array(t),Kc[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function x_(n,t){const e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function v_(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ae(e,t))return;n.uniform2fv(this.addr,t),Re(e,t)}}function y_(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ae(e,t))return;n.uniform3fv(this.addr,t),Re(e,t)}}function M_(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ae(e,t))return;n.uniform4fv(this.addr,t),Re(e,t)}}function S_(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Ae(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),Re(e,t)}else{if(Ae(e,i))return;Qc.set(i),n.uniformMatrix2fv(this.addr,!1,Qc),Re(e,i)}}function E_(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Ae(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),Re(e,t)}else{if(Ae(e,i))return;Jc.set(i),n.uniformMatrix3fv(this.addr,!1,Jc),Re(e,i)}}function w_(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Ae(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),Re(e,t)}else{if(Ae(e,i))return;Zc.set(i),n.uniformMatrix4fv(this.addr,!1,Zc),Re(e,i)}}function T_(n,t){const e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function b_(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ae(e,t))return;n.uniform2iv(this.addr,t),Re(e,t)}}function A_(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ae(e,t))return;n.uniform3iv(this.addr,t),Re(e,t)}}function R_(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ae(e,t))return;n.uniform4iv(this.addr,t),Re(e,t)}}function C_(n,t){const e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function P_(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ae(e,t))return;n.uniform2uiv(this.addr,t),Re(e,t)}}function L_(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ae(e,t))return;n.uniform3uiv(this.addr,t),Re(e,t)}}function D_(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ae(e,t))return;n.uniform4uiv(this.addr,t),Re(e,t)}}function I_(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?($c.compareFunction=Qh,r=$c):r=Eu,e.setTexture2D(t||r,s)}function U_(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture3D(t||Tu,s)}function N_(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTextureCube(t||bu,s)}function O_(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture2DArray(t||wu,s)}function F_(n){switch(n){case 5126:return x_;case 35664:return v_;case 35665:return y_;case 35666:return M_;case 35674:return S_;case 35675:return E_;case 35676:return w_;case 5124:case 35670:return T_;case 35667:case 35671:return b_;case 35668:case 35672:return A_;case 35669:case 35673:return R_;case 5125:return C_;case 36294:return P_;case 36295:return L_;case 36296:return D_;case 35678:case 36198:case 36298:case 36306:case 35682:return I_;case 35679:case 36299:case 36307:return U_;case 35680:case 36300:case 36308:case 36293:return N_;case 36289:case 36303:case 36311:case 36292:return O_}}function z_(n,t){n.uniform1fv(this.addr,t)}function B_(n,t){const e=Ds(t,this.size,2);n.uniform2fv(this.addr,e)}function k_(n,t){const e=Ds(t,this.size,3);n.uniform3fv(this.addr,e)}function V_(n,t){const e=Ds(t,this.size,4);n.uniform4fv(this.addr,e)}function H_(n,t){const e=Ds(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function G_(n,t){const e=Ds(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function W_(n,t){const e=Ds(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function X_(n,t){n.uniform1iv(this.addr,t)}function Y_(n,t){n.uniform2iv(this.addr,t)}function q_(n,t){n.uniform3iv(this.addr,t)}function $_(n,t){n.uniform4iv(this.addr,t)}function j_(n,t){n.uniform1uiv(this.addr,t)}function K_(n,t){n.uniform2uiv(this.addr,t)}function Z_(n,t){n.uniform3uiv(this.addr,t)}function J_(n,t){n.uniform4uiv(this.addr,t)}function Q_(n,t,e){const i=this.cache,s=t.length,r=Mo(e,s);Ae(i,r)||(n.uniform1iv(this.addr,r),Re(i,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||Eu,r[o])}function tx(n,t,e){const i=this.cache,s=t.length,r=Mo(e,s);Ae(i,r)||(n.uniform1iv(this.addr,r),Re(i,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||Tu,r[o])}function ex(n,t,e){const i=this.cache,s=t.length,r=Mo(e,s);Ae(i,r)||(n.uniform1iv(this.addr,r),Re(i,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||bu,r[o])}function nx(n,t,e){const i=this.cache,s=t.length,r=Mo(e,s);Ae(i,r)||(n.uniform1iv(this.addr,r),Re(i,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||wu,r[o])}function ix(n){switch(n){case 5126:return z_;case 35664:return B_;case 35665:return k_;case 35666:return V_;case 35674:return H_;case 35675:return G_;case 35676:return W_;case 5124:case 35670:return X_;case 35667:case 35671:return Y_;case 35668:case 35672:return q_;case 35669:case 35673:return $_;case 5125:return j_;case 36294:return K_;case 36295:return Z_;case 36296:return J_;case 35678:case 36198:case 36298:case 36306:case 35682:return Q_;case 35679:case 36299:case 36307:return tx;case 35680:case 36300:case 36308:case 36293:return ex;case 36289:case 36303:case 36311:case 36292:return nx}}class sx{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=F_(e.type)}}class rx{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=ix(e.type)}}class ox{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(t,e[a.id],i)}}}const la=/(\w+)(\])?(\[|\.)?/g;function th(n,t){n.seq.push(t),n.map[t.id]=t}function ax(n,t,e){const i=n.name,s=i.length;for(la.lastIndex=0;;){const r=la.exec(i),o=la.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){th(e,c===void 0?new sx(a,n,t):new rx(a,n,t));break}else{let h=e.map[a];h===void 0&&(h=new ox(a),th(e,h)),e=h}}}class eo{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);ax(r,o,this)}}setValue(t,e,i,s){const r=this.map[e];r!==void 0&&r.setValue(t,i,s)}setOptional(t,e,i){const s=e[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,e,i,s){for(let r=0,o=e.length;r!==o;++r){const a=e[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){const i=[];for(let s=0,r=t.length;s!==r;++s){const o=t[s];o.id in e&&i.push(o)}return i}}function eh(n,t,e){const i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}const lx=37297;let cx=0;function hx(n,t){const e=n.split(`
`),i=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){const a=o+1;i.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return i.join(`
`)}const nh=new Kt;function ux(n){ee._getMatrix(nh,ee.workingColorSpace,n);const t=`mat3( ${nh.elements.map(e=>e.toFixed(4))} )`;switch(ee.getTransfer(n)){case ro:return[t,"LinearTransferOETF"];case re:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function ih(n,t,e){const i=n.getShaderParameter(t,n.COMPILE_STATUS),r=(n.getShaderInfoLog(t)||"").trim();if(i&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const a=parseInt(o[1]);return e.toUpperCase()+`

`+r+`

`+hx(n.getShaderSource(t),a)}else return r}function fx(n,t){const e=ux(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function dx(n,t){let e;switch(t){case Df:e="Linear";break;case If:e="Reinhard";break;case Uf:e="Cineon";break;case Gh:e="ACESFilmic";break;case Of:e="AgX";break;case Ff:e="Neutral";break;case Nf:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Yr=new O;function px(){ee.getLuminanceCoefficients(Yr);const n=Yr.x.toFixed(4),t=Yr.y.toFixed(4),e=Yr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function mx(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Xs).join(`
`)}function gx(n){const t=[];for(const e in n){const i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function _x(n,t){const e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=n.getActiveAttrib(t,s),o=r.name;let a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:n.getAttribLocation(t,o),locationSize:a}}return e}function Xs(n){return n!==""}function sh(n,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function rh(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const xx=/^[ \t]*#include +<([\w\d./]+)>/gm;function hl(n){return n.replace(xx,yx)}const vx=new Map;function yx(n,t){let e=jt[t];if(e===void 0){const i=vx.get(t);if(i!==void 0)e=jt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return hl(e)}const Mx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function oh(n){return n.replace(Mx,Sx)}function Sx(n,t,e,i){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function ah(n){let t=`precision ${n.precision} float;
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
#define LOW_PRECISION`),t}function Ex(n){let t="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Vh?t="SHADOWMAP_TYPE_PCF":n.shadowMapType===uf?t="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Hn&&(t="SHADOWMAP_TYPE_VSM"),t}function wx(n){let t="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Ss:case Es:t="ENVMAP_TYPE_CUBE";break;case vo:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Tx(n){let t="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Es:t="ENVMAP_MODE_REFRACTION";break}return t}function bx(n){let t="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Hh:t="ENVMAP_BLENDING_MULTIPLY";break;case Pf:t="ENVMAP_BLENDING_MIX";break;case Lf:t="ENVMAP_BLENDING_ADD";break}return t}function Ax(n){const t=n.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:i,maxMip:e}}function Rx(n,t,e,i){const s=n.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const l=Ex(e),c=wx(e),u=Tx(e),h=bx(e),f=Ax(e),d=mx(e),m=gx(r),_=s.createProgram();let g,p,R=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(Xs).join(`
`),g.length>0&&(g+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(Xs).join(`
`),p.length>0&&(p+=`
`)):(g=[ah(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Xs).join(`
`),p=[ah(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==gi?"#define TONE_MAPPING":"",e.toneMapping!==gi?jt.tonemapping_pars_fragment:"",e.toneMapping!==gi?dx("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",jt.colorspace_pars_fragment,fx("linearToOutputTexel",e.outputColorSpace),px(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Xs).join(`
`)),o=hl(o),o=sh(o,e),o=rh(o,e),a=hl(a),a=sh(a,e),a=rh(a,e),o=oh(o),a=oh(a),e.isRawShaderMaterial!==!0&&(R=`#version 300 es
`,g=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["#define varying in",e.glslVersion===oc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===oc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const E=R+g+o,y=R+p+a,T=eh(s,s.VERTEX_SHADER,E),C=eh(s,s.FRAGMENT_SHADER,y);s.attachShader(_,T),s.attachShader(_,C),e.index0AttributeName!==void 0?s.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function P(I){if(n.debug.checkShaderErrors){const z=s.getProgramInfoLog(_)||"",q=s.getShaderInfoLog(T)||"",ot=s.getShaderInfoLog(C)||"",$=z.trim(),et=q.trim(),lt=ot.trim();let st=!0,vt=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(st=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,_,T,C);else{const Mt=ih(s,T,"vertex"),Rt=ih(s,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+$+`
`+Mt+`
`+Rt)}else $!==""?console.warn("THREE.WebGLProgram: Program Info Log:",$):(et===""||lt==="")&&(vt=!1);vt&&(I.diagnostics={runnable:st,programLog:$,vertexShader:{log:et,prefix:g},fragmentShader:{log:lt,prefix:p}})}s.deleteShader(T),s.deleteShader(C),D=new eo(s,_),v=_x(s,_)}let D;this.getUniforms=function(){return D===void 0&&P(this),D};let v;this.getAttributes=function(){return v===void 0&&P(this),v};let S=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=s.getProgramParameter(_,lx)),S},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=cx++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=T,this.fragmentShader=C,this}let Cx=0;class Px{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,i=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return i===void 0&&(i=new Lx(t),e.set(t,i)),i}}class Lx{constructor(t){this.id=Cx++,this.code=t,this.usedTimes=0}}function Dx(n,t,e,i,s,r,o){const a=new Tl,l=new Px,c=new Set,u=[],h=s.logarithmicDepthBuffer,f=s.vertexTextures;let d=s.precision;const m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(v){return c.add(v),v===0?"uv":`uv${v}`}function g(v,S,I,z,q){const ot=z.fog,$=q.geometry,et=v.isMeshStandardMaterial?z.environment:null,lt=(v.isMeshStandardMaterial?e:t).get(v.envMap||et),st=lt&&lt.mapping===vo?lt.image.height:null,vt=m[v.type];v.precision!==null&&(d=s.getMaxPrecision(v.precision),d!==v.precision&&console.warn("THREE.WebGLProgram.getParameters:",v.precision,"not supported, using",d,"instead."));const Mt=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,Rt=Mt!==void 0?Mt.length:0;let b=0;$.morphAttributes.position!==void 0&&(b=1),$.morphAttributes.normal!==void 0&&(b=2),$.morphAttributes.color!==void 0&&(b=3);let H,B,it,L;if(vt){const ne=Sn[vt];H=ne.vertexShader,B=ne.fragmentShader}else H=v.vertexShader,B=v.fragmentShader,l.update(v),it=l.getVertexShaderID(v),L=l.getFragmentShaderID(v);const U=n.getRenderTarget(),j=n.state.buffers.depth.getReversed(),Z=q.isInstancedMesh===!0,Q=q.isBatchedMesh===!0,ct=!!v.map,X=!!v.matcap,M=!!lt,N=!!v.aoMap,k=!!v.lightMap,Y=!!v.bumpMap,K=!!v.normalMap,ht=!!v.displacementMap,at=!!v.emissiveMap,pt=!!v.metalnessMap,Lt=!!v.roughnessMap,Ct=v.anisotropy>0,A=v.clearcoat>0,x=v.dispersion>0,G=v.iridescence>0,nt=v.sheen>0,ft=v.transmission>0,rt=Ct&&!!v.anisotropyMap,zt=A&&!!v.clearcoatMap,St=A&&!!v.clearcoatNormalMap,Nt=A&&!!v.clearcoatRoughnessMap,Ot=G&&!!v.iridescenceMap,gt=G&&!!v.iridescenceThicknessMap,At=nt&&!!v.sheenColorMap,Gt=nt&&!!v.sheenRoughnessMap,Bt=!!v.specularMap,Tt=!!v.specularColorMap,$t=!!v.specularIntensityMap,F=ft&&!!v.transmissionMap,yt=ft&&!!v.thicknessMap,Et=!!v.gradientMap,It=!!v.alphaMap,_t=v.alphaTest>0,ut=!!v.alphaHash,Ft=!!v.extensions;let Yt=gi;v.toneMapped&&(U===null||U.isXRRenderTarget===!0)&&(Yt=n.toneMapping);const ce={shaderID:vt,shaderType:v.type,shaderName:v.name,vertexShader:H,fragmentShader:B,defines:v.defines,customVertexShaderID:it,customFragmentShaderID:L,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:d,batching:Q,batchingColor:Q&&q._colorsTexture!==null,instancing:Z,instancingColor:Z&&q.instanceColor!==null,instancingMorph:Z&&q.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:U===null?n.outputColorSpace:U.isXRRenderTarget===!0?U.texture.colorSpace:ws,alphaToCoverage:!!v.alphaToCoverage,map:ct,matcap:X,envMap:M,envMapMode:M&&lt.mapping,envMapCubeUVHeight:st,aoMap:N,lightMap:k,bumpMap:Y,normalMap:K,displacementMap:f&&ht,emissiveMap:at,normalMapObjectSpace:K&&v.normalMapType===Vf,normalMapTangentSpace:K&&v.normalMapType===Jh,metalnessMap:pt,roughnessMap:Lt,anisotropy:Ct,anisotropyMap:rt,clearcoat:A,clearcoatMap:zt,clearcoatNormalMap:St,clearcoatRoughnessMap:Nt,dispersion:x,iridescence:G,iridescenceMap:Ot,iridescenceThicknessMap:gt,sheen:nt,sheenColorMap:At,sheenRoughnessMap:Gt,specularMap:Bt,specularColorMap:Tt,specularIntensityMap:$t,transmission:ft,transmissionMap:F,thicknessMap:yt,gradientMap:Et,opaque:v.transparent===!1&&v.blending===xs&&v.alphaToCoverage===!1,alphaMap:It,alphaTest:_t,alphaHash:ut,combine:v.combine,mapUv:ct&&_(v.map.channel),aoMapUv:N&&_(v.aoMap.channel),lightMapUv:k&&_(v.lightMap.channel),bumpMapUv:Y&&_(v.bumpMap.channel),normalMapUv:K&&_(v.normalMap.channel),displacementMapUv:ht&&_(v.displacementMap.channel),emissiveMapUv:at&&_(v.emissiveMap.channel),metalnessMapUv:pt&&_(v.metalnessMap.channel),roughnessMapUv:Lt&&_(v.roughnessMap.channel),anisotropyMapUv:rt&&_(v.anisotropyMap.channel),clearcoatMapUv:zt&&_(v.clearcoatMap.channel),clearcoatNormalMapUv:St&&_(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Nt&&_(v.clearcoatRoughnessMap.channel),iridescenceMapUv:Ot&&_(v.iridescenceMap.channel),iridescenceThicknessMapUv:gt&&_(v.iridescenceThicknessMap.channel),sheenColorMapUv:At&&_(v.sheenColorMap.channel),sheenRoughnessMapUv:Gt&&_(v.sheenRoughnessMap.channel),specularMapUv:Bt&&_(v.specularMap.channel),specularColorMapUv:Tt&&_(v.specularColorMap.channel),specularIntensityMapUv:$t&&_(v.specularIntensityMap.channel),transmissionMapUv:F&&_(v.transmissionMap.channel),thicknessMapUv:yt&&_(v.thicknessMap.channel),alphaMapUv:It&&_(v.alphaMap.channel),vertexTangents:!!$.attributes.tangent&&(K||Ct),vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,pointsUvs:q.isPoints===!0&&!!$.attributes.uv&&(ct||It),fog:!!ot,useFog:v.fog===!0,fogExp2:!!ot&&ot.isFogExp2,flatShading:v.flatShading===!0&&v.wireframe===!1,sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:j,skinning:q.isSkinnedMesh===!0,morphTargets:$.morphAttributes.position!==void 0,morphNormals:$.morphAttributes.normal!==void 0,morphColors:$.morphAttributes.color!==void 0,morphTargetsCount:Rt,morphTextureStride:b,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:v.dithering,shadowMapEnabled:n.shadowMap.enabled&&I.length>0,shadowMapType:n.shadowMap.type,toneMapping:Yt,decodeVideoTexture:ct&&v.map.isVideoTexture===!0&&ee.getTransfer(v.map.colorSpace)===re,decodeVideoTextureEmissive:at&&v.emissiveMap.isVideoTexture===!0&&ee.getTransfer(v.emissiveMap.colorSpace)===re,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===Qe,flipSided:v.side===Ye,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:Ft&&v.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ft&&v.extensions.multiDraw===!0||Q)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return ce.vertexUv1s=c.has(1),ce.vertexUv2s=c.has(2),ce.vertexUv3s=c.has(3),c.clear(),ce}function p(v){const S=[];if(v.shaderID?S.push(v.shaderID):(S.push(v.customVertexShaderID),S.push(v.customFragmentShaderID)),v.defines!==void 0)for(const I in v.defines)S.push(I),S.push(v.defines[I]);return v.isRawShaderMaterial===!1&&(R(S,v),E(S,v),S.push(n.outputColorSpace)),S.push(v.customProgramCacheKey),S.join()}function R(v,S){v.push(S.precision),v.push(S.outputColorSpace),v.push(S.envMapMode),v.push(S.envMapCubeUVHeight),v.push(S.mapUv),v.push(S.alphaMapUv),v.push(S.lightMapUv),v.push(S.aoMapUv),v.push(S.bumpMapUv),v.push(S.normalMapUv),v.push(S.displacementMapUv),v.push(S.emissiveMapUv),v.push(S.metalnessMapUv),v.push(S.roughnessMapUv),v.push(S.anisotropyMapUv),v.push(S.clearcoatMapUv),v.push(S.clearcoatNormalMapUv),v.push(S.clearcoatRoughnessMapUv),v.push(S.iridescenceMapUv),v.push(S.iridescenceThicknessMapUv),v.push(S.sheenColorMapUv),v.push(S.sheenRoughnessMapUv),v.push(S.specularMapUv),v.push(S.specularColorMapUv),v.push(S.specularIntensityMapUv),v.push(S.transmissionMapUv),v.push(S.thicknessMapUv),v.push(S.combine),v.push(S.fogExp2),v.push(S.sizeAttenuation),v.push(S.morphTargetsCount),v.push(S.morphAttributeCount),v.push(S.numDirLights),v.push(S.numPointLights),v.push(S.numSpotLights),v.push(S.numSpotLightMaps),v.push(S.numHemiLights),v.push(S.numRectAreaLights),v.push(S.numDirLightShadows),v.push(S.numPointLightShadows),v.push(S.numSpotLightShadows),v.push(S.numSpotLightShadowsWithMaps),v.push(S.numLightProbes),v.push(S.shadowMapType),v.push(S.toneMapping),v.push(S.numClippingPlanes),v.push(S.numClipIntersection),v.push(S.depthPacking)}function E(v,S){a.disableAll(),S.supportsVertexTextures&&a.enable(0),S.instancing&&a.enable(1),S.instancingColor&&a.enable(2),S.instancingMorph&&a.enable(3),S.matcap&&a.enable(4),S.envMap&&a.enable(5),S.normalMapObjectSpace&&a.enable(6),S.normalMapTangentSpace&&a.enable(7),S.clearcoat&&a.enable(8),S.iridescence&&a.enable(9),S.alphaTest&&a.enable(10),S.vertexColors&&a.enable(11),S.vertexAlphas&&a.enable(12),S.vertexUv1s&&a.enable(13),S.vertexUv2s&&a.enable(14),S.vertexUv3s&&a.enable(15),S.vertexTangents&&a.enable(16),S.anisotropy&&a.enable(17),S.alphaHash&&a.enable(18),S.batching&&a.enable(19),S.dispersion&&a.enable(20),S.batchingColor&&a.enable(21),S.gradientMap&&a.enable(22),v.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.reversedDepthBuffer&&a.enable(4),S.skinning&&a.enable(5),S.morphTargets&&a.enable(6),S.morphNormals&&a.enable(7),S.morphColors&&a.enable(8),S.premultipliedAlpha&&a.enable(9),S.shadowMapEnabled&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.decodeVideoTextureEmissive&&a.enable(20),S.alphaToCoverage&&a.enable(21),v.push(a.mask)}function y(v){const S=m[v.type];let I;if(S){const z=Sn[S];I=_d.clone(z.uniforms)}else I=v.uniforms;return I}function T(v,S){let I;for(let z=0,q=u.length;z<q;z++){const ot=u[z];if(ot.cacheKey===S){I=ot,++I.usedTimes;break}}return I===void 0&&(I=new Rx(n,S,v,r),u.push(I)),I}function C(v){if(--v.usedTimes===0){const S=u.indexOf(v);u[S]=u[u.length-1],u.pop(),v.destroy()}}function P(v){l.remove(v)}function D(){l.dispose()}return{getParameters:g,getProgramCacheKey:p,getUniforms:y,acquireProgram:T,releaseProgram:C,releaseShaderCache:P,programs:u,dispose:D}}function Ix(){let n=new WeakMap;function t(o){return n.has(o)}function e(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,l){n.get(o)[a]=l}function r(){n=new WeakMap}return{has:t,get:e,remove:i,update:s,dispose:r}}function Ux(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.z!==t.z?n.z-t.z:n.id-t.id}function lh(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function ch(){const n=[];let t=0;const e=[],i=[],s=[];function r(){t=0,e.length=0,i.length=0,s.length=0}function o(h,f,d,m,_,g){let p=n[t];return p===void 0?(p={id:h.id,object:h,geometry:f,material:d,groupOrder:m,renderOrder:h.renderOrder,z:_,group:g},n[t]=p):(p.id=h.id,p.object=h,p.geometry=f,p.material=d,p.groupOrder=m,p.renderOrder=h.renderOrder,p.z=_,p.group=g),t++,p}function a(h,f,d,m,_,g){const p=o(h,f,d,m,_,g);d.transmission>0?i.push(p):d.transparent===!0?s.push(p):e.push(p)}function l(h,f,d,m,_,g){const p=o(h,f,d,m,_,g);d.transmission>0?i.unshift(p):d.transparent===!0?s.unshift(p):e.unshift(p)}function c(h,f){e.length>1&&e.sort(h||Ux),i.length>1&&i.sort(f||lh),s.length>1&&s.sort(f||lh)}function u(){for(let h=t,f=n.length;h<f;h++){const d=n[h];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:e,transmissive:i,transparent:s,init:r,push:a,unshift:l,finish:u,sort:c}}function Nx(){let n=new WeakMap;function t(i,s){const r=n.get(i);let o;return r===void 0?(o=new ch,n.set(i,[o])):s>=r.length?(o=new ch,r.push(o)):o=r[s],o}function e(){n=new WeakMap}return{get:t,dispose:e}}function Ox(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new O,color:new Qt};break;case"SpotLight":e={position:new O,direction:new O,color:new Qt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new O,color:new Qt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new O,skyColor:new Qt,groundColor:new Qt};break;case"RectAreaLight":e={color:new Qt,position:new O,halfWidth:new O,halfHeight:new O};break}return n[t.id]=e,e}}}function Fx(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new mt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new mt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new mt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}let zx=0;function Bx(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function kx(n){const t=new Ox,e=Fx(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new O);const s=new O,r=new ie,o=new ie;function a(c){let u=0,h=0,f=0;for(let v=0;v<9;v++)i.probe[v].set(0,0,0);let d=0,m=0,_=0,g=0,p=0,R=0,E=0,y=0,T=0,C=0,P=0;c.sort(Bx);for(let v=0,S=c.length;v<S;v++){const I=c[v],z=I.color,q=I.intensity,ot=I.distance,$=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)u+=z.r*q,h+=z.g*q,f+=z.b*q;else if(I.isLightProbe){for(let et=0;et<9;et++)i.probe[et].addScaledVector(I.sh.coefficients[et],q);P++}else if(I.isDirectionalLight){const et=t.get(I);if(et.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){const lt=I.shadow,st=e.get(I);st.shadowIntensity=lt.intensity,st.shadowBias=lt.bias,st.shadowNormalBias=lt.normalBias,st.shadowRadius=lt.radius,st.shadowMapSize=lt.mapSize,i.directionalShadow[d]=st,i.directionalShadowMap[d]=$,i.directionalShadowMatrix[d]=I.shadow.matrix,R++}i.directional[d]=et,d++}else if(I.isSpotLight){const et=t.get(I);et.position.setFromMatrixPosition(I.matrixWorld),et.color.copy(z).multiplyScalar(q),et.distance=ot,et.coneCos=Math.cos(I.angle),et.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),et.decay=I.decay,i.spot[_]=et;const lt=I.shadow;if(I.map&&(i.spotLightMap[T]=I.map,T++,lt.updateMatrices(I),I.castShadow&&C++),i.spotLightMatrix[_]=lt.matrix,I.castShadow){const st=e.get(I);st.shadowIntensity=lt.intensity,st.shadowBias=lt.bias,st.shadowNormalBias=lt.normalBias,st.shadowRadius=lt.radius,st.shadowMapSize=lt.mapSize,i.spotShadow[_]=st,i.spotShadowMap[_]=$,y++}_++}else if(I.isRectAreaLight){const et=t.get(I);et.color.copy(z).multiplyScalar(q),et.halfWidth.set(I.width*.5,0,0),et.halfHeight.set(0,I.height*.5,0),i.rectArea[g]=et,g++}else if(I.isPointLight){const et=t.get(I);if(et.color.copy(I.color).multiplyScalar(I.intensity),et.distance=I.distance,et.decay=I.decay,I.castShadow){const lt=I.shadow,st=e.get(I);st.shadowIntensity=lt.intensity,st.shadowBias=lt.bias,st.shadowNormalBias=lt.normalBias,st.shadowRadius=lt.radius,st.shadowMapSize=lt.mapSize,st.shadowCameraNear=lt.camera.near,st.shadowCameraFar=lt.camera.far,i.pointShadow[m]=st,i.pointShadowMap[m]=$,i.pointShadowMatrix[m]=I.shadow.matrix,E++}i.point[m]=et,m++}else if(I.isHemisphereLight){const et=t.get(I);et.skyColor.copy(I.color).multiplyScalar(q),et.groundColor.copy(I.groundColor).multiplyScalar(q),i.hemi[p]=et,p++}}g>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=wt.LTC_FLOAT_1,i.rectAreaLTC2=wt.LTC_FLOAT_2):(i.rectAreaLTC1=wt.LTC_HALF_1,i.rectAreaLTC2=wt.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=h,i.ambient[2]=f;const D=i.hash;(D.directionalLength!==d||D.pointLength!==m||D.spotLength!==_||D.rectAreaLength!==g||D.hemiLength!==p||D.numDirectionalShadows!==R||D.numPointShadows!==E||D.numSpotShadows!==y||D.numSpotMaps!==T||D.numLightProbes!==P)&&(i.directional.length=d,i.spot.length=_,i.rectArea.length=g,i.point.length=m,i.hemi.length=p,i.directionalShadow.length=R,i.directionalShadowMap.length=R,i.pointShadow.length=E,i.pointShadowMap.length=E,i.spotShadow.length=y,i.spotShadowMap.length=y,i.directionalShadowMatrix.length=R,i.pointShadowMatrix.length=E,i.spotLightMatrix.length=y+T-C,i.spotLightMap.length=T,i.numSpotLightShadowsWithMaps=C,i.numLightProbes=P,D.directionalLength=d,D.pointLength=m,D.spotLength=_,D.rectAreaLength=g,D.hemiLength=p,D.numDirectionalShadows=R,D.numPointShadows=E,D.numSpotShadows=y,D.numSpotMaps=T,D.numLightProbes=P,i.version=zx++)}function l(c,u){let h=0,f=0,d=0,m=0,_=0;const g=u.matrixWorldInverse;for(let p=0,R=c.length;p<R;p++){const E=c[p];if(E.isDirectionalLight){const y=i.directional[h];y.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(g),h++}else if(E.isSpotLight){const y=i.spot[d];y.position.setFromMatrixPosition(E.matrixWorld),y.position.applyMatrix4(g),y.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(g),d++}else if(E.isRectAreaLight){const y=i.rectArea[m];y.position.setFromMatrixPosition(E.matrixWorld),y.position.applyMatrix4(g),o.identity(),r.copy(E.matrixWorld),r.premultiply(g),o.extractRotation(r),y.halfWidth.set(E.width*.5,0,0),y.halfHeight.set(0,E.height*.5,0),y.halfWidth.applyMatrix4(o),y.halfHeight.applyMatrix4(o),m++}else if(E.isPointLight){const y=i.point[f];y.position.setFromMatrixPosition(E.matrixWorld),y.position.applyMatrix4(g),f++}else if(E.isHemisphereLight){const y=i.hemi[_];y.direction.setFromMatrixPosition(E.matrixWorld),y.direction.transformDirection(g),_++}}}return{setup:a,setupView:l,state:i}}function hh(n){const t=new kx(n),e=[],i=[];function s(u){c.camera=u,e.length=0,i.length=0}function r(u){e.push(u)}function o(u){i.push(u)}function a(){t.setup(e)}function l(u){t.setupView(e,u)}const c={lightsArray:e,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function Vx(n){let t=new WeakMap;function e(s,r=0){const o=t.get(s);let a;return o===void 0?(a=new hh(n),t.set(s,[a])):r>=o.length?(a=new hh(n),o.push(a)):a=o[r],a}function i(){t=new WeakMap}return{get:e,dispose:i}}const Hx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Gx=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Wx(n,t,e){let i=new Al;const s=new mt,r=new mt,o=new ge,a=new up({depthPacking:kf}),l=new fp,c={},u=e.maxTextureSize,h={[jn]:Ye,[Ye]:jn,[Qe]:Qe},f=new vi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new mt},radius:{value:4}},vertexShader:Hx,fragmentShader:Gx}),d=f.clone();d.defines.HORIZONTAL_PASS=1;const m=new Ve;m.setAttribute("position",new hn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Pe(m,f),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Vh;let p=this.type;this.render=function(C,P,D){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||C.length===0)return;const v=n.getRenderTarget(),S=n.getActiveCubeFace(),I=n.getActiveMipmapLevel(),z=n.state;z.setBlending(mi),z.buffers.depth.getReversed()===!0?z.buffers.color.setClear(0,0,0,0):z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);const q=p!==Hn&&this.type===Hn,ot=p===Hn&&this.type!==Hn;for(let $=0,et=C.length;$<et;$++){const lt=C[$],st=lt.shadow;if(st===void 0){console.warn("THREE.WebGLShadowMap:",lt,"has no shadow.");continue}if(st.autoUpdate===!1&&st.needsUpdate===!1)continue;s.copy(st.mapSize);const vt=st.getFrameExtents();if(s.multiply(vt),r.copy(st.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/vt.x),s.x=r.x*vt.x,st.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/vt.y),s.y=r.y*vt.y,st.mapSize.y=r.y)),st.map===null||q===!0||ot===!0){const Rt=this.type!==Hn?{minFilter:tn,magFilter:tn}:{};st.map!==null&&st.map.dispose(),st.map=new ki(s.x,s.y,Rt),st.map.texture.name=lt.name+".shadowMap",st.camera.updateProjectionMatrix()}n.setRenderTarget(st.map),n.clear();const Mt=st.getViewportCount();for(let Rt=0;Rt<Mt;Rt++){const b=st.getViewport(Rt);o.set(r.x*b.x,r.y*b.y,r.x*b.z,r.y*b.w),z.viewport(o),st.updateMatrices(lt,Rt),i=st.getFrustum(),y(P,D,st.camera,lt,this.type)}st.isPointLightShadow!==!0&&this.type===Hn&&R(st,D),st.needsUpdate=!1}p=this.type,g.needsUpdate=!1,n.setRenderTarget(v,S,I)};function R(C,P){const D=t.update(_);f.defines.VSM_SAMPLES!==C.blurSamples&&(f.defines.VSM_SAMPLES=C.blurSamples,d.defines.VSM_SAMPLES=C.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new ki(s.x,s.y)),f.uniforms.shadow_pass.value=C.map.texture,f.uniforms.resolution.value=C.mapSize,f.uniforms.radius.value=C.radius,n.setRenderTarget(C.mapPass),n.clear(),n.renderBufferDirect(P,null,D,f,_,null),d.uniforms.shadow_pass.value=C.mapPass.texture,d.uniforms.resolution.value=C.mapSize,d.uniforms.radius.value=C.radius,n.setRenderTarget(C.map),n.clear(),n.renderBufferDirect(P,null,D,d,_,null)}function E(C,P,D,v){let S=null;const I=D.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(I!==void 0)S=I;else if(S=D.isPointLight===!0?l:a,n.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0||P.alphaToCoverage===!0){const z=S.uuid,q=P.uuid;let ot=c[z];ot===void 0&&(ot={},c[z]=ot);let $=ot[q];$===void 0&&($=S.clone(),ot[q]=$,P.addEventListener("dispose",T)),S=$}if(S.visible=P.visible,S.wireframe=P.wireframe,v===Hn?S.side=P.shadowSide!==null?P.shadowSide:P.side:S.side=P.shadowSide!==null?P.shadowSide:h[P.side],S.alphaMap=P.alphaMap,S.alphaTest=P.alphaToCoverage===!0?.5:P.alphaTest,S.map=P.map,S.clipShadows=P.clipShadows,S.clippingPlanes=P.clippingPlanes,S.clipIntersection=P.clipIntersection,S.displacementMap=P.displacementMap,S.displacementScale=P.displacementScale,S.displacementBias=P.displacementBias,S.wireframeLinewidth=P.wireframeLinewidth,S.linewidth=P.linewidth,D.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const z=n.properties.get(S);z.light=D}return S}function y(C,P,D,v,S){if(C.visible===!1)return;if(C.layers.test(P.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&S===Hn)&&(!C.frustumCulled||i.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,C.matrixWorld);const q=t.update(C),ot=C.material;if(Array.isArray(ot)){const $=q.groups;for(let et=0,lt=$.length;et<lt;et++){const st=$[et],vt=ot[st.materialIndex];if(vt&&vt.visible){const Mt=E(C,vt,v,S);C.onBeforeShadow(n,C,P,D,q,Mt,st),n.renderBufferDirect(D,null,q,Mt,C,st),C.onAfterShadow(n,C,P,D,q,Mt,st)}}}else if(ot.visible){const $=E(C,ot,v,S);C.onBeforeShadow(n,C,P,D,q,$,null),n.renderBufferDirect(D,null,q,$,C,null),C.onAfterShadow(n,C,P,D,q,$,null)}}const z=C.children;for(let q=0,ot=z.length;q<ot;q++)y(z[q],P,D,v,S)}function T(C){C.target.removeEventListener("dispose",T);for(const D in c){const v=c[D],S=C.target.uuid;S in v&&(v[S].dispose(),delete v[S])}}}const Xx={[va]:ya,[Ma]:wa,[Sa]:Ta,[Ms]:Ea,[ya]:va,[wa]:Ma,[Ta]:Sa,[Ea]:Ms};function Yx(n,t){function e(){let F=!1;const yt=new ge;let Et=null;const It=new ge(0,0,0,0);return{setMask:function(_t){Et!==_t&&!F&&(n.colorMask(_t,_t,_t,_t),Et=_t)},setLocked:function(_t){F=_t},setClear:function(_t,ut,Ft,Yt,ce){ce===!0&&(_t*=Yt,ut*=Yt,Ft*=Yt),yt.set(_t,ut,Ft,Yt),It.equals(yt)===!1&&(n.clearColor(_t,ut,Ft,Yt),It.copy(yt))},reset:function(){F=!1,Et=null,It.set(-1,0,0,0)}}}function i(){let F=!1,yt=!1,Et=null,It=null,_t=null;return{setReversed:function(ut){if(yt!==ut){const Ft=t.get("EXT_clip_control");ut?Ft.clipControlEXT(Ft.LOWER_LEFT_EXT,Ft.ZERO_TO_ONE_EXT):Ft.clipControlEXT(Ft.LOWER_LEFT_EXT,Ft.NEGATIVE_ONE_TO_ONE_EXT),yt=ut;const Yt=_t;_t=null,this.setClear(Yt)}},getReversed:function(){return yt},setTest:function(ut){ut?U(n.DEPTH_TEST):j(n.DEPTH_TEST)},setMask:function(ut){Et!==ut&&!F&&(n.depthMask(ut),Et=ut)},setFunc:function(ut){if(yt&&(ut=Xx[ut]),It!==ut){switch(ut){case va:n.depthFunc(n.NEVER);break;case ya:n.depthFunc(n.ALWAYS);break;case Ma:n.depthFunc(n.LESS);break;case Ms:n.depthFunc(n.LEQUAL);break;case Sa:n.depthFunc(n.EQUAL);break;case Ea:n.depthFunc(n.GEQUAL);break;case wa:n.depthFunc(n.GREATER);break;case Ta:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}It=ut}},setLocked:function(ut){F=ut},setClear:function(ut){_t!==ut&&(yt&&(ut=1-ut),n.clearDepth(ut),_t=ut)},reset:function(){F=!1,Et=null,It=null,_t=null,yt=!1}}}function s(){let F=!1,yt=null,Et=null,It=null,_t=null,ut=null,Ft=null,Yt=null,ce=null;return{setTest:function(ne){F||(ne?U(n.STENCIL_TEST):j(n.STENCIL_TEST))},setMask:function(ne){yt!==ne&&!F&&(n.stencilMask(ne),yt=ne)},setFunc:function(ne,Nn,Mn){(Et!==ne||It!==Nn||_t!==Mn)&&(n.stencilFunc(ne,Nn,Mn),Et=ne,It=Nn,_t=Mn)},setOp:function(ne,Nn,Mn){(ut!==ne||Ft!==Nn||Yt!==Mn)&&(n.stencilOp(ne,Nn,Mn),ut=ne,Ft=Nn,Yt=Mn)},setLocked:function(ne){F=ne},setClear:function(ne){ce!==ne&&(n.clearStencil(ne),ce=ne)},reset:function(){F=!1,yt=null,Et=null,It=null,_t=null,ut=null,Ft=null,Yt=null,ce=null}}}const r=new e,o=new i,a=new s,l=new WeakMap,c=new WeakMap;let u={},h={},f=new WeakMap,d=[],m=null,_=!1,g=null,p=null,R=null,E=null,y=null,T=null,C=null,P=new Qt(0,0,0),D=0,v=!1,S=null,I=null,z=null,q=null,ot=null;const $=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let et=!1,lt=0;const st=n.getParameter(n.VERSION);st.indexOf("WebGL")!==-1?(lt=parseFloat(/^WebGL (\d)/.exec(st)[1]),et=lt>=1):st.indexOf("OpenGL ES")!==-1&&(lt=parseFloat(/^OpenGL ES (\d)/.exec(st)[1]),et=lt>=2);let vt=null,Mt={};const Rt=n.getParameter(n.SCISSOR_BOX),b=n.getParameter(n.VIEWPORT),H=new ge().fromArray(Rt),B=new ge().fromArray(b);function it(F,yt,Et,It){const _t=new Uint8Array(4),ut=n.createTexture();n.bindTexture(F,ut),n.texParameteri(F,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(F,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Ft=0;Ft<Et;Ft++)F===n.TEXTURE_3D||F===n.TEXTURE_2D_ARRAY?n.texImage3D(yt,0,n.RGBA,1,1,It,0,n.RGBA,n.UNSIGNED_BYTE,_t):n.texImage2D(yt+Ft,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,_t);return ut}const L={};L[n.TEXTURE_2D]=it(n.TEXTURE_2D,n.TEXTURE_2D,1),L[n.TEXTURE_CUBE_MAP]=it(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),L[n.TEXTURE_2D_ARRAY]=it(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),L[n.TEXTURE_3D]=it(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),U(n.DEPTH_TEST),o.setFunc(Ms),Y(!1),K(tc),U(n.CULL_FACE),N(mi);function U(F){u[F]!==!0&&(n.enable(F),u[F]=!0)}function j(F){u[F]!==!1&&(n.disable(F),u[F]=!1)}function Z(F,yt){return h[F]!==yt?(n.bindFramebuffer(F,yt),h[F]=yt,F===n.DRAW_FRAMEBUFFER&&(h[n.FRAMEBUFFER]=yt),F===n.FRAMEBUFFER&&(h[n.DRAW_FRAMEBUFFER]=yt),!0):!1}function Q(F,yt){let Et=d,It=!1;if(F){Et=f.get(yt),Et===void 0&&(Et=[],f.set(yt,Et));const _t=F.textures;if(Et.length!==_t.length||Et[0]!==n.COLOR_ATTACHMENT0){for(let ut=0,Ft=_t.length;ut<Ft;ut++)Et[ut]=n.COLOR_ATTACHMENT0+ut;Et.length=_t.length,It=!0}}else Et[0]!==n.BACK&&(Et[0]=n.BACK,It=!0);It&&n.drawBuffers(Et)}function ct(F){return m!==F?(n.useProgram(F),m=F,!0):!1}const X={[Ii]:n.FUNC_ADD,[df]:n.FUNC_SUBTRACT,[pf]:n.FUNC_REVERSE_SUBTRACT};X[mf]=n.MIN,X[gf]=n.MAX;const M={[_f]:n.ZERO,[xf]:n.ONE,[vf]:n.SRC_COLOR,[_a]:n.SRC_ALPHA,[Tf]:n.SRC_ALPHA_SATURATE,[Ef]:n.DST_COLOR,[Mf]:n.DST_ALPHA,[yf]:n.ONE_MINUS_SRC_COLOR,[xa]:n.ONE_MINUS_SRC_ALPHA,[wf]:n.ONE_MINUS_DST_COLOR,[Sf]:n.ONE_MINUS_DST_ALPHA,[bf]:n.CONSTANT_COLOR,[Af]:n.ONE_MINUS_CONSTANT_COLOR,[Rf]:n.CONSTANT_ALPHA,[Cf]:n.ONE_MINUS_CONSTANT_ALPHA};function N(F,yt,Et,It,_t,ut,Ft,Yt,ce,ne){if(F===mi){_===!0&&(j(n.BLEND),_=!1);return}if(_===!1&&(U(n.BLEND),_=!0),F!==ff){if(F!==g||ne!==v){if((p!==Ii||y!==Ii)&&(n.blendEquation(n.FUNC_ADD),p=Ii,y=Ii),ne)switch(F){case xs:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case ec:n.blendFunc(n.ONE,n.ONE);break;case nc:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case ic:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}else switch(F){case xs:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case ec:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case nc:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case ic:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}R=null,E=null,T=null,C=null,P.set(0,0,0),D=0,g=F,v=ne}return}_t=_t||yt,ut=ut||Et,Ft=Ft||It,(yt!==p||_t!==y)&&(n.blendEquationSeparate(X[yt],X[_t]),p=yt,y=_t),(Et!==R||It!==E||ut!==T||Ft!==C)&&(n.blendFuncSeparate(M[Et],M[It],M[ut],M[Ft]),R=Et,E=It,T=ut,C=Ft),(Yt.equals(P)===!1||ce!==D)&&(n.blendColor(Yt.r,Yt.g,Yt.b,ce),P.copy(Yt),D=ce),g=F,v=!1}function k(F,yt){F.side===Qe?j(n.CULL_FACE):U(n.CULL_FACE);let Et=F.side===Ye;yt&&(Et=!Et),Y(Et),F.blending===xs&&F.transparent===!1?N(mi):N(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),o.setFunc(F.depthFunc),o.setTest(F.depthTest),o.setMask(F.depthWrite),r.setMask(F.colorWrite);const It=F.stencilWrite;a.setTest(It),It&&(a.setMask(F.stencilWriteMask),a.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),a.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),at(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?U(n.SAMPLE_ALPHA_TO_COVERAGE):j(n.SAMPLE_ALPHA_TO_COVERAGE)}function Y(F){S!==F&&(F?n.frontFace(n.CW):n.frontFace(n.CCW),S=F)}function K(F){F!==cf?(U(n.CULL_FACE),F!==I&&(F===tc?n.cullFace(n.BACK):F===hf?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):j(n.CULL_FACE),I=F}function ht(F){F!==z&&(et&&n.lineWidth(F),z=F)}function at(F,yt,Et){F?(U(n.POLYGON_OFFSET_FILL),(q!==yt||ot!==Et)&&(n.polygonOffset(yt,Et),q=yt,ot=Et)):j(n.POLYGON_OFFSET_FILL)}function pt(F){F?U(n.SCISSOR_TEST):j(n.SCISSOR_TEST)}function Lt(F){F===void 0&&(F=n.TEXTURE0+$-1),vt!==F&&(n.activeTexture(F),vt=F)}function Ct(F,yt,Et){Et===void 0&&(vt===null?Et=n.TEXTURE0+$-1:Et=vt);let It=Mt[Et];It===void 0&&(It={type:void 0,texture:void 0},Mt[Et]=It),(It.type!==F||It.texture!==yt)&&(vt!==Et&&(n.activeTexture(Et),vt=Et),n.bindTexture(F,yt||L[F]),It.type=F,It.texture=yt)}function A(){const F=Mt[vt];F!==void 0&&F.type!==void 0&&(n.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function x(){try{n.compressedTexImage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function G(){try{n.compressedTexImage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function nt(){try{n.texSubImage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ft(){try{n.texSubImage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function rt(){try{n.compressedTexSubImage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function zt(){try{n.compressedTexSubImage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function St(){try{n.texStorage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Nt(){try{n.texStorage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Ot(){try{n.texImage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function gt(){try{n.texImage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function At(F){H.equals(F)===!1&&(n.scissor(F.x,F.y,F.z,F.w),H.copy(F))}function Gt(F){B.equals(F)===!1&&(n.viewport(F.x,F.y,F.z,F.w),B.copy(F))}function Bt(F,yt){let Et=c.get(yt);Et===void 0&&(Et=new WeakMap,c.set(yt,Et));let It=Et.get(F);It===void 0&&(It=n.getUniformBlockIndex(yt,F.name),Et.set(F,It))}function Tt(F,yt){const It=c.get(yt).get(F);l.get(yt)!==It&&(n.uniformBlockBinding(yt,It,F.__bindingPointIndex),l.set(yt,It))}function $t(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},vt=null,Mt={},h={},f=new WeakMap,d=[],m=null,_=!1,g=null,p=null,R=null,E=null,y=null,T=null,C=null,P=new Qt(0,0,0),D=0,v=!1,S=null,I=null,z=null,q=null,ot=null,H.set(0,0,n.canvas.width,n.canvas.height),B.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:U,disable:j,bindFramebuffer:Z,drawBuffers:Q,useProgram:ct,setBlending:N,setMaterial:k,setFlipSided:Y,setCullFace:K,setLineWidth:ht,setPolygonOffset:at,setScissorTest:pt,activeTexture:Lt,bindTexture:Ct,unbindTexture:A,compressedTexImage2D:x,compressedTexImage3D:G,texImage2D:Ot,texImage3D:gt,updateUBOMapping:Bt,uniformBlockBinding:Tt,texStorage2D:St,texStorage3D:Nt,texSubImage2D:nt,texSubImage3D:ft,compressedTexSubImage2D:rt,compressedTexSubImage3D:zt,scissor:At,viewport:Gt,reset:$t}}function qx(n,t,e,i,s,r,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new mt,u=new WeakMap;let h;const f=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(A,x){return d?new OffscreenCanvas(A,x):ao("canvas")}function _(A,x,G){let nt=1;const ft=Ct(A);if((ft.width>G||ft.height>G)&&(nt=G/Math.max(ft.width,ft.height)),nt<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){const rt=Math.floor(nt*ft.width),zt=Math.floor(nt*ft.height);h===void 0&&(h=m(rt,zt));const St=x?m(rt,zt):h;return St.width=rt,St.height=zt,St.getContext("2d").drawImage(A,0,0,rt,zt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ft.width+"x"+ft.height+") to ("+rt+"x"+zt+")."),St}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ft.width+"x"+ft.height+")."),A;return A}function g(A){return A.generateMipmaps}function p(A){n.generateMipmap(A)}function R(A){return A.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?n.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function E(A,x,G,nt,ft=!1){if(A!==null){if(n[A]!==void 0)return n[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let rt=x;if(x===n.RED&&(G===n.FLOAT&&(rt=n.R32F),G===n.HALF_FLOAT&&(rt=n.R16F),G===n.UNSIGNED_BYTE&&(rt=n.R8)),x===n.RED_INTEGER&&(G===n.UNSIGNED_BYTE&&(rt=n.R8UI),G===n.UNSIGNED_SHORT&&(rt=n.R16UI),G===n.UNSIGNED_INT&&(rt=n.R32UI),G===n.BYTE&&(rt=n.R8I),G===n.SHORT&&(rt=n.R16I),G===n.INT&&(rt=n.R32I)),x===n.RG&&(G===n.FLOAT&&(rt=n.RG32F),G===n.HALF_FLOAT&&(rt=n.RG16F),G===n.UNSIGNED_BYTE&&(rt=n.RG8)),x===n.RG_INTEGER&&(G===n.UNSIGNED_BYTE&&(rt=n.RG8UI),G===n.UNSIGNED_SHORT&&(rt=n.RG16UI),G===n.UNSIGNED_INT&&(rt=n.RG32UI),G===n.BYTE&&(rt=n.RG8I),G===n.SHORT&&(rt=n.RG16I),G===n.INT&&(rt=n.RG32I)),x===n.RGB_INTEGER&&(G===n.UNSIGNED_BYTE&&(rt=n.RGB8UI),G===n.UNSIGNED_SHORT&&(rt=n.RGB16UI),G===n.UNSIGNED_INT&&(rt=n.RGB32UI),G===n.BYTE&&(rt=n.RGB8I),G===n.SHORT&&(rt=n.RGB16I),G===n.INT&&(rt=n.RGB32I)),x===n.RGBA_INTEGER&&(G===n.UNSIGNED_BYTE&&(rt=n.RGBA8UI),G===n.UNSIGNED_SHORT&&(rt=n.RGBA16UI),G===n.UNSIGNED_INT&&(rt=n.RGBA32UI),G===n.BYTE&&(rt=n.RGBA8I),G===n.SHORT&&(rt=n.RGBA16I),G===n.INT&&(rt=n.RGBA32I)),x===n.RGB&&(G===n.UNSIGNED_INT_5_9_9_9_REV&&(rt=n.RGB9_E5),G===n.UNSIGNED_INT_10F_11F_11F_REV&&(rt=n.R11F_G11F_B10F)),x===n.RGBA){const zt=ft?ro:ee.getTransfer(nt);G===n.FLOAT&&(rt=n.RGBA32F),G===n.HALF_FLOAT&&(rt=n.RGBA16F),G===n.UNSIGNED_BYTE&&(rt=zt===re?n.SRGB8_ALPHA8:n.RGBA8),G===n.UNSIGNED_SHORT_4_4_4_4&&(rt=n.RGBA4),G===n.UNSIGNED_SHORT_5_5_5_1&&(rt=n.RGB5_A1)}return(rt===n.R16F||rt===n.R32F||rt===n.RG16F||rt===n.RG32F||rt===n.RGBA16F||rt===n.RGBA32F)&&t.get("EXT_color_buffer_float"),rt}function y(A,x){let G;return A?x===null||x===Bi||x===tr?G=n.DEPTH24_STENCIL8:x===wn?G=n.DEPTH32F_STENCIL8:x===Qs&&(G=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===Bi||x===tr?G=n.DEPTH_COMPONENT24:x===wn?G=n.DEPTH_COMPONENT32F:x===Qs&&(G=n.DEPTH_COMPONENT16),G}function T(A,x){return g(A)===!0||A.isFramebufferTexture&&A.minFilter!==tn&&A.minFilter!==En?Math.log2(Math.max(x.width,x.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?x.mipmaps.length:1}function C(A){const x=A.target;x.removeEventListener("dispose",C),D(x),x.isVideoTexture&&u.delete(x)}function P(A){const x=A.target;x.removeEventListener("dispose",P),S(x)}function D(A){const x=i.get(A);if(x.__webglInit===void 0)return;const G=A.source,nt=f.get(G);if(nt){const ft=nt[x.__cacheKey];ft.usedTimes--,ft.usedTimes===0&&v(A),Object.keys(nt).length===0&&f.delete(G)}i.remove(A)}function v(A){const x=i.get(A);n.deleteTexture(x.__webglTexture);const G=A.source,nt=f.get(G);delete nt[x.__cacheKey],o.memory.textures--}function S(A){const x=i.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),i.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let nt=0;nt<6;nt++){if(Array.isArray(x.__webglFramebuffer[nt]))for(let ft=0;ft<x.__webglFramebuffer[nt].length;ft++)n.deleteFramebuffer(x.__webglFramebuffer[nt][ft]);else n.deleteFramebuffer(x.__webglFramebuffer[nt]);x.__webglDepthbuffer&&n.deleteRenderbuffer(x.__webglDepthbuffer[nt])}else{if(Array.isArray(x.__webglFramebuffer))for(let nt=0;nt<x.__webglFramebuffer.length;nt++)n.deleteFramebuffer(x.__webglFramebuffer[nt]);else n.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&n.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&n.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let nt=0;nt<x.__webglColorRenderbuffer.length;nt++)x.__webglColorRenderbuffer[nt]&&n.deleteRenderbuffer(x.__webglColorRenderbuffer[nt]);x.__webglDepthRenderbuffer&&n.deleteRenderbuffer(x.__webglDepthRenderbuffer)}const G=A.textures;for(let nt=0,ft=G.length;nt<ft;nt++){const rt=i.get(G[nt]);rt.__webglTexture&&(n.deleteTexture(rt.__webglTexture),o.memory.textures--),i.remove(G[nt])}i.remove(A)}let I=0;function z(){I=0}function q(){const A=I;return A>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+s.maxTextures),I+=1,A}function ot(A){const x=[];return x.push(A.wrapS),x.push(A.wrapT),x.push(A.wrapR||0),x.push(A.magFilter),x.push(A.minFilter),x.push(A.anisotropy),x.push(A.internalFormat),x.push(A.format),x.push(A.type),x.push(A.generateMipmaps),x.push(A.premultiplyAlpha),x.push(A.flipY),x.push(A.unpackAlignment),x.push(A.colorSpace),x.join()}function $(A,x){const G=i.get(A);if(A.isVideoTexture&&pt(A),A.isRenderTargetTexture===!1&&A.isExternalTexture!==!0&&A.version>0&&G.__version!==A.version){const nt=A.image;if(nt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(nt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{L(G,A,x);return}}else A.isExternalTexture&&(G.__webglTexture=A.sourceTexture?A.sourceTexture:null);e.bindTexture(n.TEXTURE_2D,G.__webglTexture,n.TEXTURE0+x)}function et(A,x){const G=i.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&G.__version!==A.version){L(G,A,x);return}e.bindTexture(n.TEXTURE_2D_ARRAY,G.__webglTexture,n.TEXTURE0+x)}function lt(A,x){const G=i.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&G.__version!==A.version){L(G,A,x);return}e.bindTexture(n.TEXTURE_3D,G.__webglTexture,n.TEXTURE0+x)}function st(A,x){const G=i.get(A);if(A.version>0&&G.__version!==A.version){U(G,A,x);return}e.bindTexture(n.TEXTURE_CUBE_MAP,G.__webglTexture,n.TEXTURE0+x)}const vt={[Ra]:n.REPEAT,[Fi]:n.CLAMP_TO_EDGE,[Ca]:n.MIRRORED_REPEAT},Mt={[tn]:n.NEAREST,[zf]:n.NEAREST_MIPMAP_NEAREST,[vr]:n.NEAREST_MIPMAP_LINEAR,[En]:n.LINEAR,[Ro]:n.LINEAR_MIPMAP_NEAREST,[zi]:n.LINEAR_MIPMAP_LINEAR},Rt={[Hf]:n.NEVER,[$f]:n.ALWAYS,[Gf]:n.LESS,[Qh]:n.LEQUAL,[Wf]:n.EQUAL,[qf]:n.GEQUAL,[Xf]:n.GREATER,[Yf]:n.NOTEQUAL};function b(A,x){if(x.type===wn&&t.has("OES_texture_float_linear")===!1&&(x.magFilter===En||x.magFilter===Ro||x.magFilter===vr||x.magFilter===zi||x.minFilter===En||x.minFilter===Ro||x.minFilter===vr||x.minFilter===zi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(A,n.TEXTURE_WRAP_S,vt[x.wrapS]),n.texParameteri(A,n.TEXTURE_WRAP_T,vt[x.wrapT]),(A===n.TEXTURE_3D||A===n.TEXTURE_2D_ARRAY)&&n.texParameteri(A,n.TEXTURE_WRAP_R,vt[x.wrapR]),n.texParameteri(A,n.TEXTURE_MAG_FILTER,Mt[x.magFilter]),n.texParameteri(A,n.TEXTURE_MIN_FILTER,Mt[x.minFilter]),x.compareFunction&&(n.texParameteri(A,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(A,n.TEXTURE_COMPARE_FUNC,Rt[x.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===tn||x.minFilter!==vr&&x.minFilter!==zi||x.type===wn&&t.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||i.get(x).__currentAnisotropy){const G=t.get("EXT_texture_filter_anisotropic");n.texParameterf(A,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,s.getMaxAnisotropy())),i.get(x).__currentAnisotropy=x.anisotropy}}}function H(A,x){let G=!1;A.__webglInit===void 0&&(A.__webglInit=!0,x.addEventListener("dispose",C));const nt=x.source;let ft=f.get(nt);ft===void 0&&(ft={},f.set(nt,ft));const rt=ot(x);if(rt!==A.__cacheKey){ft[rt]===void 0&&(ft[rt]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,G=!0),ft[rt].usedTimes++;const zt=ft[A.__cacheKey];zt!==void 0&&(ft[A.__cacheKey].usedTimes--,zt.usedTimes===0&&v(x)),A.__cacheKey=rt,A.__webglTexture=ft[rt].texture}return G}function B(A,x,G){return Math.floor(Math.floor(A/G)/x)}function it(A,x,G,nt){const rt=A.updateRanges;if(rt.length===0)e.texSubImage2D(n.TEXTURE_2D,0,0,0,x.width,x.height,G,nt,x.data);else{rt.sort((gt,At)=>gt.start-At.start);let zt=0;for(let gt=1;gt<rt.length;gt++){const At=rt[zt],Gt=rt[gt],Bt=At.start+At.count,Tt=B(Gt.start,x.width,4),$t=B(At.start,x.width,4);Gt.start<=Bt+1&&Tt===$t&&B(Gt.start+Gt.count-1,x.width,4)===Tt?At.count=Math.max(At.count,Gt.start+Gt.count-At.start):(++zt,rt[zt]=Gt)}rt.length=zt+1;const St=n.getParameter(n.UNPACK_ROW_LENGTH),Nt=n.getParameter(n.UNPACK_SKIP_PIXELS),Ot=n.getParameter(n.UNPACK_SKIP_ROWS);n.pixelStorei(n.UNPACK_ROW_LENGTH,x.width);for(let gt=0,At=rt.length;gt<At;gt++){const Gt=rt[gt],Bt=Math.floor(Gt.start/4),Tt=Math.ceil(Gt.count/4),$t=Bt%x.width,F=Math.floor(Bt/x.width),yt=Tt,Et=1;n.pixelStorei(n.UNPACK_SKIP_PIXELS,$t),n.pixelStorei(n.UNPACK_SKIP_ROWS,F),e.texSubImage2D(n.TEXTURE_2D,0,$t,F,yt,Et,G,nt,x.data)}A.clearUpdateRanges(),n.pixelStorei(n.UNPACK_ROW_LENGTH,St),n.pixelStorei(n.UNPACK_SKIP_PIXELS,Nt),n.pixelStorei(n.UNPACK_SKIP_ROWS,Ot)}}function L(A,x,G){let nt=n.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(nt=n.TEXTURE_2D_ARRAY),x.isData3DTexture&&(nt=n.TEXTURE_3D);const ft=H(A,x),rt=x.source;e.bindTexture(nt,A.__webglTexture,n.TEXTURE0+G);const zt=i.get(rt);if(rt.version!==zt.__version||ft===!0){e.activeTexture(n.TEXTURE0+G);const St=ee.getPrimaries(ee.workingColorSpace),Nt=x.colorSpace===ai?null:ee.getPrimaries(x.colorSpace),Ot=x.colorSpace===ai||St===Nt?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,x.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,x.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ot);let gt=_(x.image,!1,s.maxTextureSize);gt=Lt(x,gt);const At=r.convert(x.format,x.colorSpace),Gt=r.convert(x.type);let Bt=E(x.internalFormat,At,Gt,x.colorSpace,x.isVideoTexture);b(nt,x);let Tt;const $t=x.mipmaps,F=x.isVideoTexture!==!0,yt=zt.__version===void 0||ft===!0,Et=rt.dataReady,It=T(x,gt);if(x.isDepthTexture)Bt=y(x.format===nr,x.type),yt&&(F?e.texStorage2D(n.TEXTURE_2D,1,Bt,gt.width,gt.height):e.texImage2D(n.TEXTURE_2D,0,Bt,gt.width,gt.height,0,At,Gt,null));else if(x.isDataTexture)if($t.length>0){F&&yt&&e.texStorage2D(n.TEXTURE_2D,It,Bt,$t[0].width,$t[0].height);for(let _t=0,ut=$t.length;_t<ut;_t++)Tt=$t[_t],F?Et&&e.texSubImage2D(n.TEXTURE_2D,_t,0,0,Tt.width,Tt.height,At,Gt,Tt.data):e.texImage2D(n.TEXTURE_2D,_t,Bt,Tt.width,Tt.height,0,At,Gt,Tt.data);x.generateMipmaps=!1}else F?(yt&&e.texStorage2D(n.TEXTURE_2D,It,Bt,gt.width,gt.height),Et&&it(x,gt,At,Gt)):e.texImage2D(n.TEXTURE_2D,0,Bt,gt.width,gt.height,0,At,Gt,gt.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){F&&yt&&e.texStorage3D(n.TEXTURE_2D_ARRAY,It,Bt,$t[0].width,$t[0].height,gt.depth);for(let _t=0,ut=$t.length;_t<ut;_t++)if(Tt=$t[_t],x.format!==gn)if(At!==null)if(F){if(Et)if(x.layerUpdates.size>0){const Ft=kc(Tt.width,Tt.height,x.format,x.type);for(const Yt of x.layerUpdates){const ce=Tt.data.subarray(Yt*Ft/Tt.data.BYTES_PER_ELEMENT,(Yt+1)*Ft/Tt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,_t,0,0,Yt,Tt.width,Tt.height,1,At,ce)}x.clearLayerUpdates()}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,_t,0,0,0,Tt.width,Tt.height,gt.depth,At,Tt.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,_t,Bt,Tt.width,Tt.height,gt.depth,0,Tt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else F?Et&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,_t,0,0,0,Tt.width,Tt.height,gt.depth,At,Gt,Tt.data):e.texImage3D(n.TEXTURE_2D_ARRAY,_t,Bt,Tt.width,Tt.height,gt.depth,0,At,Gt,Tt.data)}else{F&&yt&&e.texStorage2D(n.TEXTURE_2D,It,Bt,$t[0].width,$t[0].height);for(let _t=0,ut=$t.length;_t<ut;_t++)Tt=$t[_t],x.format!==gn?At!==null?F?Et&&e.compressedTexSubImage2D(n.TEXTURE_2D,_t,0,0,Tt.width,Tt.height,At,Tt.data):e.compressedTexImage2D(n.TEXTURE_2D,_t,Bt,Tt.width,Tt.height,0,Tt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):F?Et&&e.texSubImage2D(n.TEXTURE_2D,_t,0,0,Tt.width,Tt.height,At,Gt,Tt.data):e.texImage2D(n.TEXTURE_2D,_t,Bt,Tt.width,Tt.height,0,At,Gt,Tt.data)}else if(x.isDataArrayTexture)if(F){if(yt&&e.texStorage3D(n.TEXTURE_2D_ARRAY,It,Bt,gt.width,gt.height,gt.depth),Et)if(x.layerUpdates.size>0){const _t=kc(gt.width,gt.height,x.format,x.type);for(const ut of x.layerUpdates){const Ft=gt.data.subarray(ut*_t/gt.data.BYTES_PER_ELEMENT,(ut+1)*_t/gt.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,ut,gt.width,gt.height,1,At,Gt,Ft)}x.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,gt.width,gt.height,gt.depth,At,Gt,gt.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,Bt,gt.width,gt.height,gt.depth,0,At,Gt,gt.data);else if(x.isData3DTexture)F?(yt&&e.texStorage3D(n.TEXTURE_3D,It,Bt,gt.width,gt.height,gt.depth),Et&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,gt.width,gt.height,gt.depth,At,Gt,gt.data)):e.texImage3D(n.TEXTURE_3D,0,Bt,gt.width,gt.height,gt.depth,0,At,Gt,gt.data);else if(x.isFramebufferTexture){if(yt)if(F)e.texStorage2D(n.TEXTURE_2D,It,Bt,gt.width,gt.height);else{let _t=gt.width,ut=gt.height;for(let Ft=0;Ft<It;Ft++)e.texImage2D(n.TEXTURE_2D,Ft,Bt,_t,ut,0,At,Gt,null),_t>>=1,ut>>=1}}else if($t.length>0){if(F&&yt){const _t=Ct($t[0]);e.texStorage2D(n.TEXTURE_2D,It,Bt,_t.width,_t.height)}for(let _t=0,ut=$t.length;_t<ut;_t++)Tt=$t[_t],F?Et&&e.texSubImage2D(n.TEXTURE_2D,_t,0,0,At,Gt,Tt):e.texImage2D(n.TEXTURE_2D,_t,Bt,At,Gt,Tt);x.generateMipmaps=!1}else if(F){if(yt){const _t=Ct(gt);e.texStorage2D(n.TEXTURE_2D,It,Bt,_t.width,_t.height)}Et&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,At,Gt,gt)}else e.texImage2D(n.TEXTURE_2D,0,Bt,At,Gt,gt);g(x)&&p(nt),zt.__version=rt.version,x.onUpdate&&x.onUpdate(x)}A.__version=x.version}function U(A,x,G){if(x.image.length!==6)return;const nt=H(A,x),ft=x.source;e.bindTexture(n.TEXTURE_CUBE_MAP,A.__webglTexture,n.TEXTURE0+G);const rt=i.get(ft);if(ft.version!==rt.__version||nt===!0){e.activeTexture(n.TEXTURE0+G);const zt=ee.getPrimaries(ee.workingColorSpace),St=x.colorSpace===ai?null:ee.getPrimaries(x.colorSpace),Nt=x.colorSpace===ai||zt===St?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,x.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,x.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Nt);const Ot=x.isCompressedTexture||x.image[0].isCompressedTexture,gt=x.image[0]&&x.image[0].isDataTexture,At=[];for(let ut=0;ut<6;ut++)!Ot&&!gt?At[ut]=_(x.image[ut],!0,s.maxCubemapSize):At[ut]=gt?x.image[ut].image:x.image[ut],At[ut]=Lt(x,At[ut]);const Gt=At[0],Bt=r.convert(x.format,x.colorSpace),Tt=r.convert(x.type),$t=E(x.internalFormat,Bt,Tt,x.colorSpace),F=x.isVideoTexture!==!0,yt=rt.__version===void 0||nt===!0,Et=ft.dataReady;let It=T(x,Gt);b(n.TEXTURE_CUBE_MAP,x);let _t;if(Ot){F&&yt&&e.texStorage2D(n.TEXTURE_CUBE_MAP,It,$t,Gt.width,Gt.height);for(let ut=0;ut<6;ut++){_t=At[ut].mipmaps;for(let Ft=0;Ft<_t.length;Ft++){const Yt=_t[Ft];x.format!==gn?Bt!==null?F?Et&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ut,Ft,0,0,Yt.width,Yt.height,Bt,Yt.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ut,Ft,$t,Yt.width,Yt.height,0,Yt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):F?Et&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ut,Ft,0,0,Yt.width,Yt.height,Bt,Tt,Yt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ut,Ft,$t,Yt.width,Yt.height,0,Bt,Tt,Yt.data)}}}else{if(_t=x.mipmaps,F&&yt){_t.length>0&&It++;const ut=Ct(At[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,It,$t,ut.width,ut.height)}for(let ut=0;ut<6;ut++)if(gt){F?Et&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ut,0,0,0,At[ut].width,At[ut].height,Bt,Tt,At[ut].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ut,0,$t,At[ut].width,At[ut].height,0,Bt,Tt,At[ut].data);for(let Ft=0;Ft<_t.length;Ft++){const ce=_t[Ft].image[ut].image;F?Et&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ut,Ft+1,0,0,ce.width,ce.height,Bt,Tt,ce.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ut,Ft+1,$t,ce.width,ce.height,0,Bt,Tt,ce.data)}}else{F?Et&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ut,0,0,0,Bt,Tt,At[ut]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ut,0,$t,Bt,Tt,At[ut]);for(let Ft=0;Ft<_t.length;Ft++){const Yt=_t[Ft];F?Et&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ut,Ft+1,0,0,Bt,Tt,Yt.image[ut]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ut,Ft+1,$t,Bt,Tt,Yt.image[ut])}}}g(x)&&p(n.TEXTURE_CUBE_MAP),rt.__version=ft.version,x.onUpdate&&x.onUpdate(x)}A.__version=x.version}function j(A,x,G,nt,ft,rt){const zt=r.convert(G.format,G.colorSpace),St=r.convert(G.type),Nt=E(G.internalFormat,zt,St,G.colorSpace),Ot=i.get(x),gt=i.get(G);if(gt.__renderTarget=x,!Ot.__hasExternalTextures){const At=Math.max(1,x.width>>rt),Gt=Math.max(1,x.height>>rt);ft===n.TEXTURE_3D||ft===n.TEXTURE_2D_ARRAY?e.texImage3D(ft,rt,Nt,At,Gt,x.depth,0,zt,St,null):e.texImage2D(ft,rt,Nt,At,Gt,0,zt,St,null)}e.bindFramebuffer(n.FRAMEBUFFER,A),at(x)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,nt,ft,gt.__webglTexture,0,ht(x)):(ft===n.TEXTURE_2D||ft>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&ft<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,nt,ft,gt.__webglTexture,rt),e.bindFramebuffer(n.FRAMEBUFFER,null)}function Z(A,x,G){if(n.bindRenderbuffer(n.RENDERBUFFER,A),x.depthBuffer){const nt=x.depthTexture,ft=nt&&nt.isDepthTexture?nt.type:null,rt=y(x.stencilBuffer,ft),zt=x.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,St=ht(x);at(x)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,St,rt,x.width,x.height):G?n.renderbufferStorageMultisample(n.RENDERBUFFER,St,rt,x.width,x.height):n.renderbufferStorage(n.RENDERBUFFER,rt,x.width,x.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,zt,n.RENDERBUFFER,A)}else{const nt=x.textures;for(let ft=0;ft<nt.length;ft++){const rt=nt[ft],zt=r.convert(rt.format,rt.colorSpace),St=r.convert(rt.type),Nt=E(rt.internalFormat,zt,St,rt.colorSpace),Ot=ht(x);G&&at(x)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ot,Nt,x.width,x.height):at(x)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ot,Nt,x.width,x.height):n.renderbufferStorage(n.RENDERBUFFER,Nt,x.width,x.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Q(A,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(n.FRAMEBUFFER,A),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const nt=i.get(x.depthTexture);nt.__renderTarget=x,(!nt.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),$(x.depthTexture,0);const ft=nt.__webglTexture,rt=ht(x);if(x.depthTexture.format===er)at(x)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ft,0,rt):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ft,0);else if(x.depthTexture.format===nr)at(x)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ft,0,rt):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ft,0);else throw new Error("Unknown depthTexture format")}function ct(A){const x=i.get(A),G=A.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==A.depthTexture){const nt=A.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),nt){const ft=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,nt.removeEventListener("dispose",ft)};nt.addEventListener("dispose",ft),x.__depthDisposeCallback=ft}x.__boundDepthTexture=nt}if(A.depthTexture&&!x.__autoAllocateDepthBuffer){if(G)throw new Error("target.depthTexture not supported in Cube render targets");const nt=A.texture.mipmaps;nt&&nt.length>0?Q(x.__webglFramebuffer[0],A):Q(x.__webglFramebuffer,A)}else if(G){x.__webglDepthbuffer=[];for(let nt=0;nt<6;nt++)if(e.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer[nt]),x.__webglDepthbuffer[nt]===void 0)x.__webglDepthbuffer[nt]=n.createRenderbuffer(),Z(x.__webglDepthbuffer[nt],A,!1);else{const ft=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,rt=x.__webglDepthbuffer[nt];n.bindRenderbuffer(n.RENDERBUFFER,rt),n.framebufferRenderbuffer(n.FRAMEBUFFER,ft,n.RENDERBUFFER,rt)}}else{const nt=A.texture.mipmaps;if(nt&&nt.length>0?e.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer[0]):e.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=n.createRenderbuffer(),Z(x.__webglDepthbuffer,A,!1);else{const ft=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,rt=x.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,rt),n.framebufferRenderbuffer(n.FRAMEBUFFER,ft,n.RENDERBUFFER,rt)}}e.bindFramebuffer(n.FRAMEBUFFER,null)}function X(A,x,G){const nt=i.get(A);x!==void 0&&j(nt.__webglFramebuffer,A,A.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),G!==void 0&&ct(A)}function M(A){const x=A.texture,G=i.get(A),nt=i.get(x);A.addEventListener("dispose",P);const ft=A.textures,rt=A.isWebGLCubeRenderTarget===!0,zt=ft.length>1;if(zt||(nt.__webglTexture===void 0&&(nt.__webglTexture=n.createTexture()),nt.__version=x.version,o.memory.textures++),rt){G.__webglFramebuffer=[];for(let St=0;St<6;St++)if(x.mipmaps&&x.mipmaps.length>0){G.__webglFramebuffer[St]=[];for(let Nt=0;Nt<x.mipmaps.length;Nt++)G.__webglFramebuffer[St][Nt]=n.createFramebuffer()}else G.__webglFramebuffer[St]=n.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){G.__webglFramebuffer=[];for(let St=0;St<x.mipmaps.length;St++)G.__webglFramebuffer[St]=n.createFramebuffer()}else G.__webglFramebuffer=n.createFramebuffer();if(zt)for(let St=0,Nt=ft.length;St<Nt;St++){const Ot=i.get(ft[St]);Ot.__webglTexture===void 0&&(Ot.__webglTexture=n.createTexture(),o.memory.textures++)}if(A.samples>0&&at(A)===!1){G.__webglMultisampledFramebuffer=n.createFramebuffer(),G.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let St=0;St<ft.length;St++){const Nt=ft[St];G.__webglColorRenderbuffer[St]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,G.__webglColorRenderbuffer[St]);const Ot=r.convert(Nt.format,Nt.colorSpace),gt=r.convert(Nt.type),At=E(Nt.internalFormat,Ot,gt,Nt.colorSpace,A.isXRRenderTarget===!0),Gt=ht(A);n.renderbufferStorageMultisample(n.RENDERBUFFER,Gt,At,A.width,A.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+St,n.RENDERBUFFER,G.__webglColorRenderbuffer[St])}n.bindRenderbuffer(n.RENDERBUFFER,null),A.depthBuffer&&(G.__webglDepthRenderbuffer=n.createRenderbuffer(),Z(G.__webglDepthRenderbuffer,A,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(rt){e.bindTexture(n.TEXTURE_CUBE_MAP,nt.__webglTexture),b(n.TEXTURE_CUBE_MAP,x);for(let St=0;St<6;St++)if(x.mipmaps&&x.mipmaps.length>0)for(let Nt=0;Nt<x.mipmaps.length;Nt++)j(G.__webglFramebuffer[St][Nt],A,x,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+St,Nt);else j(G.__webglFramebuffer[St],A,x,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+St,0);g(x)&&p(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(zt){for(let St=0,Nt=ft.length;St<Nt;St++){const Ot=ft[St],gt=i.get(Ot);let At=n.TEXTURE_2D;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(At=A.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(At,gt.__webglTexture),b(At,Ot),j(G.__webglFramebuffer,A,Ot,n.COLOR_ATTACHMENT0+St,At,0),g(Ot)&&p(At)}e.unbindTexture()}else{let St=n.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(St=A.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(St,nt.__webglTexture),b(St,x),x.mipmaps&&x.mipmaps.length>0)for(let Nt=0;Nt<x.mipmaps.length;Nt++)j(G.__webglFramebuffer[Nt],A,x,n.COLOR_ATTACHMENT0,St,Nt);else j(G.__webglFramebuffer,A,x,n.COLOR_ATTACHMENT0,St,0);g(x)&&p(St),e.unbindTexture()}A.depthBuffer&&ct(A)}function N(A){const x=A.textures;for(let G=0,nt=x.length;G<nt;G++){const ft=x[G];if(g(ft)){const rt=R(A),zt=i.get(ft).__webglTexture;e.bindTexture(rt,zt),p(rt),e.unbindTexture()}}}const k=[],Y=[];function K(A){if(A.samples>0){if(at(A)===!1){const x=A.textures,G=A.width,nt=A.height;let ft=n.COLOR_BUFFER_BIT;const rt=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,zt=i.get(A),St=x.length>1;if(St)for(let Ot=0;Ot<x.length;Ot++)e.bindFramebuffer(n.FRAMEBUFFER,zt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ot,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,zt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ot,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,zt.__webglMultisampledFramebuffer);const Nt=A.texture.mipmaps;Nt&&Nt.length>0?e.bindFramebuffer(n.DRAW_FRAMEBUFFER,zt.__webglFramebuffer[0]):e.bindFramebuffer(n.DRAW_FRAMEBUFFER,zt.__webglFramebuffer);for(let Ot=0;Ot<x.length;Ot++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(ft|=n.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(ft|=n.STENCIL_BUFFER_BIT)),St){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,zt.__webglColorRenderbuffer[Ot]);const gt=i.get(x[Ot]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,gt,0)}n.blitFramebuffer(0,0,G,nt,0,0,G,nt,ft,n.NEAREST),l===!0&&(k.length=0,Y.length=0,k.push(n.COLOR_ATTACHMENT0+Ot),A.depthBuffer&&A.resolveDepthBuffer===!1&&(k.push(rt),Y.push(rt),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,Y)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,k))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),St)for(let Ot=0;Ot<x.length;Ot++){e.bindFramebuffer(n.FRAMEBUFFER,zt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ot,n.RENDERBUFFER,zt.__webglColorRenderbuffer[Ot]);const gt=i.get(x[Ot]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,zt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ot,n.TEXTURE_2D,gt,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,zt.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&l){const x=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[x])}}}function ht(A){return Math.min(s.maxSamples,A.samples)}function at(A){const x=i.get(A);return A.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function pt(A){const x=o.render.frame;u.get(A)!==x&&(u.set(A,x),A.update())}function Lt(A,x){const G=A.colorSpace,nt=A.format,ft=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||G!==ws&&G!==ai&&(ee.getTransfer(G)===re?(nt!==gn||ft!==Rn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",G)),x}function Ct(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(c.width=A.naturalWidth||A.width,c.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(c.width=A.displayWidth,c.height=A.displayHeight):(c.width=A.width,c.height=A.height),c}this.allocateTextureUnit=q,this.resetTextureUnits=z,this.setTexture2D=$,this.setTexture2DArray=et,this.setTexture3D=lt,this.setTextureCube=st,this.rebindTextures=X,this.setupRenderTarget=M,this.updateRenderTargetMipmap=N,this.updateMultisampleRenderTarget=K,this.setupDepthRenderbuffer=ct,this.setupFrameBufferTexture=j,this.useMultisampledRTT=at}function $x(n,t){function e(i,s=ai){let r;const o=ee.getTransfer(s);if(i===Rn)return n.UNSIGNED_BYTE;if(i===xl)return n.UNSIGNED_SHORT_4_4_4_4;if(i===vl)return n.UNSIGNED_SHORT_5_5_5_1;if(i===qh)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===$h)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===Xh)return n.BYTE;if(i===Yh)return n.SHORT;if(i===Qs)return n.UNSIGNED_SHORT;if(i===_l)return n.INT;if(i===Bi)return n.UNSIGNED_INT;if(i===wn)return n.FLOAT;if(i===dr)return n.HALF_FLOAT;if(i===jh)return n.ALPHA;if(i===Kh)return n.RGB;if(i===gn)return n.RGBA;if(i===er)return n.DEPTH_COMPONENT;if(i===nr)return n.DEPTH_STENCIL;if(i===yl)return n.RED;if(i===Ml)return n.RED_INTEGER;if(i===Zh)return n.RG;if(i===Sl)return n.RG_INTEGER;if(i===El)return n.RGBA_INTEGER;if(i===jr||i===Kr||i===Zr||i===Jr)if(o===re)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===jr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Kr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Zr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Jr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===jr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Kr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Zr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Jr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Pa||i===La||i===Da||i===Ia)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Pa)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===La)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Da)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Ia)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Ua||i===Na||i===Oa)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Ua||i===Na)return o===re?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Oa)return o===re?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Fa||i===za||i===Ba||i===ka||i===Va||i===Ha||i===Ga||i===Wa||i===Xa||i===Ya||i===qa||i===$a||i===ja||i===Ka)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Fa)return o===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===za)return o===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Ba)return o===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===ka)return o===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Va)return o===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Ha)return o===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Ga)return o===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Wa)return o===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Xa)return o===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Ya)return o===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===qa)return o===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===$a)return o===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===ja)return o===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Ka)return o===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Za||i===Ja||i===Qa)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===Za)return o===re?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Ja)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Qa)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===tl||i===el||i===nl||i===il)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===tl)return r.COMPRESSED_RED_RGTC1_EXT;if(i===el)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===nl)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===il)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===tr?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}const jx=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Kx=`
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

}`;class Zx{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const i=new hu(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,i=new vi({vertexShader:jx,fragmentShader:Kx,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Pe(new pn(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Jx extends Xi{constructor(t,e){super();const i=this;let s=null,r=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,f=null,d=null,m=null;const _=typeof XRWebGLBinding<"u",g=new Zx,p={},R=e.getContextAttributes();let E=null,y=null;const T=[],C=[],P=new mt;let D=null;const v=new an;v.viewport=new ge;const S=new an;S.viewport=new ge;const I=[v,S],z=new _p;let q=null,ot=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(L){let U=T[L];return U===void 0&&(U=new Ko,T[L]=U),U.getTargetRaySpace()},this.getControllerGrip=function(L){let U=T[L];return U===void 0&&(U=new Ko,T[L]=U),U.getGripSpace()},this.getHand=function(L){let U=T[L];return U===void 0&&(U=new Ko,T[L]=U),U.getHandSpace()};function $(L){const U=C.indexOf(L.inputSource);if(U===-1)return;const j=T[U];j!==void 0&&(j.update(L.inputSource,L.frame,c||o),j.dispatchEvent({type:L.type,data:L.inputSource}))}function et(){s.removeEventListener("select",$),s.removeEventListener("selectstart",$),s.removeEventListener("selectend",$),s.removeEventListener("squeeze",$),s.removeEventListener("squeezestart",$),s.removeEventListener("squeezeend",$),s.removeEventListener("end",et),s.removeEventListener("inputsourceschange",lt);for(let L=0;L<T.length;L++){const U=C[L];U!==null&&(C[L]=null,T[L].disconnect(U))}q=null,ot=null,g.reset();for(const L in p)delete p[L];t.setRenderTarget(E),d=null,f=null,h=null,s=null,y=null,it.stop(),i.isPresenting=!1,t.setPixelRatio(D),t.setSize(P.width,P.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(L){r=L,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(L){a=L,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(L){c=L},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return h===null&&_&&(h=new XRWebGLBinding(s,e)),h},this.getFrame=function(){return m},this.getSession=function(){return s},this.setSession=async function(L){if(s=L,s!==null){if(E=t.getRenderTarget(),s.addEventListener("select",$),s.addEventListener("selectstart",$),s.addEventListener("selectend",$),s.addEventListener("squeeze",$),s.addEventListener("squeezestart",$),s.addEventListener("squeezeend",$),s.addEventListener("end",et),s.addEventListener("inputsourceschange",lt),R.xrCompatible!==!0&&await e.makeXRCompatible(),D=t.getPixelRatio(),t.getSize(P),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let j=null,Z=null,Q=null;R.depth&&(Q=R.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,j=R.stencil?nr:er,Z=R.stencil?tr:Bi);const ct={colorFormat:e.RGBA8,depthFormat:Q,scaleFactor:r};h=this.getBinding(),f=h.createProjectionLayer(ct),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),y=new ki(f.textureWidth,f.textureHeight,{format:gn,type:Rn,depthTexture:new cu(f.textureWidth,f.textureHeight,Z,void 0,void 0,void 0,void 0,void 0,void 0,j),stencilBuffer:R.stencil,colorSpace:t.outputColorSpace,samples:R.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{const j={antialias:R.antialias,alpha:!0,depth:R.depth,stencil:R.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,e,j),s.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),y=new ki(d.framebufferWidth,d.framebufferHeight,{format:gn,type:Rn,colorSpace:t.outputColorSpace,stencilBuffer:R.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),it.setContext(s),it.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function lt(L){for(let U=0;U<L.removed.length;U++){const j=L.removed[U],Z=C.indexOf(j);Z>=0&&(C[Z]=null,T[Z].disconnect(j))}for(let U=0;U<L.added.length;U++){const j=L.added[U];let Z=C.indexOf(j);if(Z===-1){for(let ct=0;ct<T.length;ct++)if(ct>=C.length){C.push(j),Z=ct;break}else if(C[ct]===null){C[ct]=j,Z=ct;break}if(Z===-1)break}const Q=T[Z];Q&&Q.connect(j)}}const st=new O,vt=new O;function Mt(L,U,j){st.setFromMatrixPosition(U.matrixWorld),vt.setFromMatrixPosition(j.matrixWorld);const Z=st.distanceTo(vt),Q=U.projectionMatrix.elements,ct=j.projectionMatrix.elements,X=Q[14]/(Q[10]-1),M=Q[14]/(Q[10]+1),N=(Q[9]+1)/Q[5],k=(Q[9]-1)/Q[5],Y=(Q[8]-1)/Q[0],K=(ct[8]+1)/ct[0],ht=X*Y,at=X*K,pt=Z/(-Y+K),Lt=pt*-Y;if(U.matrixWorld.decompose(L.position,L.quaternion,L.scale),L.translateX(Lt),L.translateZ(pt),L.matrixWorld.compose(L.position,L.quaternion,L.scale),L.matrixWorldInverse.copy(L.matrixWorld).invert(),Q[10]===-1)L.projectionMatrix.copy(U.projectionMatrix),L.projectionMatrixInverse.copy(U.projectionMatrixInverse);else{const Ct=X+pt,A=M+pt,x=ht-Lt,G=at+(Z-Lt),nt=N*M/A*Ct,ft=k*M/A*Ct;L.projectionMatrix.makePerspective(x,G,nt,ft,Ct,A),L.projectionMatrixInverse.copy(L.projectionMatrix).invert()}}function Rt(L,U){U===null?L.matrixWorld.copy(L.matrix):L.matrixWorld.multiplyMatrices(U.matrixWorld,L.matrix),L.matrixWorldInverse.copy(L.matrixWorld).invert()}this.updateCamera=function(L){if(s===null)return;let U=L.near,j=L.far;g.texture!==null&&(g.depthNear>0&&(U=g.depthNear),g.depthFar>0&&(j=g.depthFar)),z.near=S.near=v.near=U,z.far=S.far=v.far=j,(q!==z.near||ot!==z.far)&&(s.updateRenderState({depthNear:z.near,depthFar:z.far}),q=z.near,ot=z.far),z.layers.mask=L.layers.mask|6,v.layers.mask=z.layers.mask&3,S.layers.mask=z.layers.mask&5;const Z=L.parent,Q=z.cameras;Rt(z,Z);for(let ct=0;ct<Q.length;ct++)Rt(Q[ct],Z);Q.length===2?Mt(z,v,S):z.projectionMatrix.copy(v.projectionMatrix),b(L,z,Z)};function b(L,U,j){j===null?L.matrix.copy(U.matrixWorld):(L.matrix.copy(j.matrixWorld),L.matrix.invert(),L.matrix.multiply(U.matrixWorld)),L.matrix.decompose(L.position,L.quaternion,L.scale),L.updateMatrixWorld(!0),L.projectionMatrix.copy(U.projectionMatrix),L.projectionMatrixInverse.copy(U.projectionMatrixInverse),L.isPerspectiveCamera&&(L.fov=sl*2*Math.atan(1/L.projectionMatrix.elements[5]),L.zoom=1)}this.getCamera=function(){return z},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(L){l=L,f!==null&&(f.fixedFoveation=L),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=L)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(z)},this.getCameraTexture=function(L){return p[L]};let H=null;function B(L,U){if(u=U.getViewerPose(c||o),m=U,u!==null){const j=u.views;d!==null&&(t.setRenderTargetFramebuffer(y,d.framebuffer),t.setRenderTarget(y));let Z=!1;j.length!==z.cameras.length&&(z.cameras.length=0,Z=!0);for(let M=0;M<j.length;M++){const N=j[M];let k=null;if(d!==null)k=d.getViewport(N);else{const K=h.getViewSubImage(f,N);k=K.viewport,M===0&&(t.setRenderTargetTextures(y,K.colorTexture,K.depthStencilTexture),t.setRenderTarget(y))}let Y=I[M];Y===void 0&&(Y=new an,Y.layers.enable(M),Y.viewport=new ge,I[M]=Y),Y.matrix.fromArray(N.transform.matrix),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.projectionMatrix.fromArray(N.projectionMatrix),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert(),Y.viewport.set(k.x,k.y,k.width,k.height),M===0&&(z.matrix.copy(Y.matrix),z.matrix.decompose(z.position,z.quaternion,z.scale)),Z===!0&&z.cameras.push(Y)}const Q=s.enabledFeatures;if(Q&&Q.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&_){h=i.getBinding();const M=h.getDepthInformation(j[0]);M&&M.isValid&&M.texture&&g.init(M,s.renderState)}if(Q&&Q.includes("camera-access")&&_){t.state.unbindTexture(),h=i.getBinding();for(let M=0;M<j.length;M++){const N=j[M].camera;if(N){let k=p[N];k||(k=new hu,p[N]=k);const Y=h.getCameraImage(N);k.sourceTexture=Y}}}}for(let j=0;j<T.length;j++){const Z=C[j],Q=T[j];Z!==null&&Q!==void 0&&Q.update(Z,U,c||o)}H&&H(L,U),U.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:U}),m=null}const it=new Su;it.setAnimationLoop(B),this.setAnimationLoop=function(L){H=L},this.dispose=function(){}}}const Li=new Cn,Qx=new ie;function t0(n,t){function e(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function i(g,p){p.color.getRGB(g.fogColor.value,ru(n)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function s(g,p,R,E,y){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(g,p):p.isMeshToonMaterial?(r(g,p),h(g,p)):p.isMeshPhongMaterial?(r(g,p),u(g,p)):p.isMeshStandardMaterial?(r(g,p),f(g,p),p.isMeshPhysicalMaterial&&d(g,p,y)):p.isMeshMatcapMaterial?(r(g,p),m(g,p)):p.isMeshDepthMaterial?r(g,p):p.isMeshDistanceMaterial?(r(g,p),_(g,p)):p.isMeshNormalMaterial?r(g,p):p.isLineBasicMaterial?(o(g,p),p.isLineDashedMaterial&&a(g,p)):p.isPointsMaterial?l(g,p,R,E):p.isSpriteMaterial?c(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,e(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===Ye&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,e(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===Ye&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,e(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,e(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);const R=t.get(p),E=R.envMap,y=R.envMapRotation;E&&(g.envMap.value=E,Li.copy(y),Li.x*=-1,Li.y*=-1,Li.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(Li.y*=-1,Li.z*=-1),g.envMapRotation.value.setFromMatrix4(Qx.makeRotationFromEuler(Li)),g.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,g.aoMapTransform))}function o(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform))}function a(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function l(g,p,R,E){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*R,g.scale.value=E*.5,p.map&&(g.map.value=p.map,e(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function c(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function u(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function h(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function f(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function d(g,p,R){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Ye&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=R.texture,g.transmissionSamplerSize.value.set(R.width,R.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,p){p.matcap&&(g.matcap.value=p.matcap)}function _(g,p){const R=t.get(p).light;g.referencePosition.value.setFromMatrixPosition(R.matrixWorld),g.nearDistance.value=R.shadow.camera.near,g.farDistance.value=R.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function e0(n,t,e,i){let s={},r={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(R,E){const y=E.program;i.uniformBlockBinding(R,y)}function c(R,E){let y=s[R.id];y===void 0&&(m(R),y=u(R),s[R.id]=y,R.addEventListener("dispose",g));const T=E.program;i.updateUBOMapping(R,T);const C=t.render.frame;r[R.id]!==C&&(f(R),r[R.id]=C)}function u(R){const E=h();R.__bindingPointIndex=E;const y=n.createBuffer(),T=R.__size,C=R.usage;return n.bindBuffer(n.UNIFORM_BUFFER,y),n.bufferData(n.UNIFORM_BUFFER,T,C),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,E,y),y}function h(){for(let R=0;R<a;R++)if(o.indexOf(R)===-1)return o.push(R),R;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(R){const E=s[R.id],y=R.uniforms,T=R.__cache;n.bindBuffer(n.UNIFORM_BUFFER,E);for(let C=0,P=y.length;C<P;C++){const D=Array.isArray(y[C])?y[C]:[y[C]];for(let v=0,S=D.length;v<S;v++){const I=D[v];if(d(I,C,v,T)===!0){const z=I.__offset,q=Array.isArray(I.value)?I.value:[I.value];let ot=0;for(let $=0;$<q.length;$++){const et=q[$],lt=_(et);typeof et=="number"||typeof et=="boolean"?(I.__data[0]=et,n.bufferSubData(n.UNIFORM_BUFFER,z+ot,I.__data)):et.isMatrix3?(I.__data[0]=et.elements[0],I.__data[1]=et.elements[1],I.__data[2]=et.elements[2],I.__data[3]=0,I.__data[4]=et.elements[3],I.__data[5]=et.elements[4],I.__data[6]=et.elements[5],I.__data[7]=0,I.__data[8]=et.elements[6],I.__data[9]=et.elements[7],I.__data[10]=et.elements[8],I.__data[11]=0):(et.toArray(I.__data,ot),ot+=lt.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,z,I.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function d(R,E,y,T){const C=R.value,P=E+"_"+y;if(T[P]===void 0)return typeof C=="number"||typeof C=="boolean"?T[P]=C:T[P]=C.clone(),!0;{const D=T[P];if(typeof C=="number"||typeof C=="boolean"){if(D!==C)return T[P]=C,!0}else if(D.equals(C)===!1)return D.copy(C),!0}return!1}function m(R){const E=R.uniforms;let y=0;const T=16;for(let P=0,D=E.length;P<D;P++){const v=Array.isArray(E[P])?E[P]:[E[P]];for(let S=0,I=v.length;S<I;S++){const z=v[S],q=Array.isArray(z.value)?z.value:[z.value];for(let ot=0,$=q.length;ot<$;ot++){const et=q[ot],lt=_(et),st=y%T,vt=st%lt.boundary,Mt=st+vt;y+=vt,Mt!==0&&T-Mt<lt.storage&&(y+=T-Mt),z.__data=new Float32Array(lt.storage/Float32Array.BYTES_PER_ELEMENT),z.__offset=y,y+=lt.storage}}}const C=y%T;return C>0&&(y+=T-C),R.__size=y,R.__cache={},this}function _(R){const E={boundary:0,storage:0};return typeof R=="number"||typeof R=="boolean"?(E.boundary=4,E.storage=4):R.isVector2?(E.boundary=8,E.storage=8):R.isVector3||R.isColor?(E.boundary=16,E.storage=12):R.isVector4?(E.boundary=16,E.storage=16):R.isMatrix3?(E.boundary=48,E.storage=48):R.isMatrix4?(E.boundary=64,E.storage=64):R.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",R),E}function g(R){const E=R.target;E.removeEventListener("dispose",g);const y=o.indexOf(E.__bindingPointIndex);o.splice(y,1),n.deleteBuffer(s[E.id]),delete s[E.id],delete r[E.id]}function p(){for(const R in s)n.deleteBuffer(s[R]);o=[],s={},r={}}return{bind:l,update:c,dispose:p}}class n0{constructor(t={}){const{canvas:e=Zf(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:f=!1}=t;this.isWebGLRenderer=!0;let d;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=i.getContextAttributes().alpha}else d=o;const m=new Uint32Array(4),_=new Int32Array(4);let g=null,p=null;const R=[],E=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=gi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const y=this;let T=!1;this._outputColorSpace=Be;let C=0,P=0,D=null,v=-1,S=null;const I=new ge,z=new ge;let q=null;const ot=new Qt(0);let $=0,et=e.width,lt=e.height,st=1,vt=null,Mt=null;const Rt=new ge(0,0,et,lt),b=new ge(0,0,et,lt);let H=!1;const B=new Al;let it=!1,L=!1;const U=new ie,j=new O,Z=new ge,Q={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ct=!1;function X(){return D===null?st:1}let M=i;function N(w,V){return e.getContext(w,V)}try{const w={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${gl}`),e.addEventListener("webglcontextlost",Et,!1),e.addEventListener("webglcontextrestored",It,!1),e.addEventListener("webglcontextcreationerror",_t,!1),M===null){const V="webgl2";if(M=N(V,w),M===null)throw N(V)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let k,Y,K,ht,at,pt,Lt,Ct,A,x,G,nt,ft,rt,zt,St,Nt,Ot,gt,At,Gt,Bt,Tt,$t;function F(){k=new f_(M),k.init(),Bt=new $x(M,k),Y=new r_(M,k,t,Bt),K=new Yx(M,k),Y.reversedDepthBuffer&&f&&K.buffers.depth.setReversed(!0),ht=new m_(M),at=new Ix,pt=new qx(M,k,K,at,Y,Bt,ht),Lt=new a_(y),Ct=new u_(y),A=new Mp(M),Tt=new i_(M,A),x=new d_(M,A,ht,Tt),G=new __(M,x,A,ht),gt=new g_(M,Y,pt),St=new o_(at),nt=new Dx(y,Lt,Ct,k,Y,Tt,St),ft=new t0(y,at),rt=new Nx,zt=new Vx(k),Ot=new n_(y,Lt,Ct,K,G,d,l),Nt=new Wx(y,G,Y),$t=new e0(M,ht,Y,K),At=new s_(M,k,ht),Gt=new p_(M,k,ht),ht.programs=nt.programs,y.capabilities=Y,y.extensions=k,y.properties=at,y.renderLists=rt,y.shadowMap=Nt,y.state=K,y.info=ht}F();const yt=new Jx(y,M);this.xr=yt,this.getContext=function(){return M},this.getContextAttributes=function(){return M.getContextAttributes()},this.forceContextLoss=function(){const w=k.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=k.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return st},this.setPixelRatio=function(w){w!==void 0&&(st=w,this.setSize(et,lt,!1))},this.getSize=function(w){return w.set(et,lt)},this.setSize=function(w,V,J=!0){if(yt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}et=w,lt=V,e.width=Math.floor(w*st),e.height=Math.floor(V*st),J===!0&&(e.style.width=w+"px",e.style.height=V+"px"),this.setViewport(0,0,w,V)},this.getDrawingBufferSize=function(w){return w.set(et*st,lt*st).floor()},this.setDrawingBufferSize=function(w,V,J){et=w,lt=V,st=J,e.width=Math.floor(w*J),e.height=Math.floor(V*J),this.setViewport(0,0,w,V)},this.getCurrentViewport=function(w){return w.copy(I)},this.getViewport=function(w){return w.copy(Rt)},this.setViewport=function(w,V,J,tt){w.isVector4?Rt.set(w.x,w.y,w.z,w.w):Rt.set(w,V,J,tt),K.viewport(I.copy(Rt).multiplyScalar(st).round())},this.getScissor=function(w){return w.copy(b)},this.setScissor=function(w,V,J,tt){w.isVector4?b.set(w.x,w.y,w.z,w.w):b.set(w,V,J,tt),K.scissor(z.copy(b).multiplyScalar(st).round())},this.getScissorTest=function(){return H},this.setScissorTest=function(w){K.setScissorTest(H=w)},this.setOpaqueSort=function(w){vt=w},this.setTransparentSort=function(w){Mt=w},this.getClearColor=function(w){return w.copy(Ot.getClearColor())},this.setClearColor=function(){Ot.setClearColor(...arguments)},this.getClearAlpha=function(){return Ot.getClearAlpha()},this.setClearAlpha=function(){Ot.setClearAlpha(...arguments)},this.clear=function(w=!0,V=!0,J=!0){let tt=0;if(w){let W=!1;if(D!==null){const xt=D.texture.format;W=xt===El||xt===Sl||xt===Ml}if(W){const xt=D.texture.type,bt=xt===Rn||xt===Bi||xt===Qs||xt===tr||xt===xl||xt===vl,Ut=Ot.getClearColor(),Dt=Ot.getClearAlpha(),Ht=Ut.r,Wt=Ut.g,kt=Ut.b;bt?(m[0]=Ht,m[1]=Wt,m[2]=kt,m[3]=Dt,M.clearBufferuiv(M.COLOR,0,m)):(_[0]=Ht,_[1]=Wt,_[2]=kt,_[3]=Dt,M.clearBufferiv(M.COLOR,0,_))}else tt|=M.COLOR_BUFFER_BIT}V&&(tt|=M.DEPTH_BUFFER_BIT),J&&(tt|=M.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),M.clear(tt)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Et,!1),e.removeEventListener("webglcontextrestored",It,!1),e.removeEventListener("webglcontextcreationerror",_t,!1),Ot.dispose(),rt.dispose(),zt.dispose(),at.dispose(),Lt.dispose(),Ct.dispose(),G.dispose(),Tt.dispose(),$t.dispose(),nt.dispose(),yt.dispose(),yt.removeEventListener("sessionstart",Mn),yt.removeEventListener("sessionend",$l),wi.stop()};function Et(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),T=!0}function It(){console.log("THREE.WebGLRenderer: Context Restored."),T=!1;const w=ht.autoReset,V=Nt.enabled,J=Nt.autoUpdate,tt=Nt.needsUpdate,W=Nt.type;F(),ht.autoReset=w,Nt.enabled=V,Nt.autoUpdate=J,Nt.needsUpdate=tt,Nt.type=W}function _t(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function ut(w){const V=w.target;V.removeEventListener("dispose",ut),Ft(V)}function Ft(w){Yt(w),at.remove(w)}function Yt(w){const V=at.get(w).programs;V!==void 0&&(V.forEach(function(J){nt.releaseProgram(J)}),w.isShaderMaterial&&nt.releaseShaderCache(w))}this.renderBufferDirect=function(w,V,J,tt,W,xt){V===null&&(V=Q);const bt=W.isMesh&&W.matrixWorld.determinant()<0,Ut=nf(w,V,J,tt,W);K.setMaterial(tt,bt);let Dt=J.index,Ht=1;if(tt.wireframe===!0){if(Dt=x.getWireframeAttribute(J),Dt===void 0)return;Ht=2}const Wt=J.drawRange,kt=J.attributes.position;let Jt=Wt.start*Ht,se=(Wt.start+Wt.count)*Ht;xt!==null&&(Jt=Math.max(Jt,xt.start*Ht),se=Math.min(se,(xt.start+xt.count)*Ht)),Dt!==null?(Jt=Math.max(Jt,0),se=Math.min(se,Dt.count)):kt!=null&&(Jt=Math.max(Jt,0),se=Math.min(se,kt.count));const me=se-Jt;if(me<0||me===1/0)return;Tt.setup(W,tt,Ut,J,Dt);let he,le=At;if(Dt!==null&&(he=A.get(Dt),le=Gt,le.setIndex(he)),W.isMesh)tt.wireframe===!0?(K.setLineWidth(tt.wireframeLinewidth*X()),le.setMode(M.LINES)):le.setMode(M.TRIANGLES);else if(W.isLine){let Vt=tt.linewidth;Vt===void 0&&(Vt=1),K.setLineWidth(Vt*X()),W.isLineSegments?le.setMode(M.LINES):W.isLineLoop?le.setMode(M.LINE_LOOP):le.setMode(M.LINE_STRIP)}else W.isPoints?le.setMode(M.POINTS):W.isSprite&&le.setMode(M.TRIANGLES);if(W.isBatchedMesh)if(W._multiDrawInstances!==null)ir("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),le.renderMultiDrawInstances(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount,W._multiDrawInstances);else if(k.get("WEBGL_multi_draw"))le.renderMultiDraw(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount);else{const Vt=W._multiDrawStarts,fe=W._multiDrawCounts,te=W._multiDrawCount,$e=Dt?A.get(Dt).bytesPerElement:1,qi=at.get(tt).currentProgram.getUniforms();for(let je=0;je<te;je++)qi.setValue(M,"_gl_DrawID",je),le.render(Vt[je]/$e,fe[je])}else if(W.isInstancedMesh)le.renderInstances(Jt,me,W.count);else if(J.isInstancedBufferGeometry){const Vt=J._maxInstanceCount!==void 0?J._maxInstanceCount:1/0,fe=Math.min(J.instanceCount,Vt);le.renderInstances(Jt,me,fe)}else le.render(Jt,me)};function ce(w,V,J){w.transparent===!0&&w.side===Qe&&w.forceSinglePass===!1?(w.side=Ye,w.needsUpdate=!0,xr(w,V,J),w.side=jn,w.needsUpdate=!0,xr(w,V,J),w.side=Qe):xr(w,V,J)}this.compile=function(w,V,J=null){J===null&&(J=w),p=zt.get(J),p.init(V),E.push(p),J.traverseVisible(function(W){W.isLight&&W.layers.test(V.layers)&&(p.pushLight(W),W.castShadow&&p.pushShadow(W))}),w!==J&&w.traverseVisible(function(W){W.isLight&&W.layers.test(V.layers)&&(p.pushLight(W),W.castShadow&&p.pushShadow(W))}),p.setupLights();const tt=new Set;return w.traverse(function(W){if(!(W.isMesh||W.isPoints||W.isLine||W.isSprite))return;const xt=W.material;if(xt)if(Array.isArray(xt))for(let bt=0;bt<xt.length;bt++){const Ut=xt[bt];ce(Ut,J,W),tt.add(Ut)}else ce(xt,J,W),tt.add(xt)}),p=E.pop(),tt},this.compileAsync=function(w,V,J=null){const tt=this.compile(w,V,J);return new Promise(W=>{function xt(){if(tt.forEach(function(bt){at.get(bt).currentProgram.isReady()&&tt.delete(bt)}),tt.size===0){W(w);return}setTimeout(xt,10)}k.get("KHR_parallel_shader_compile")!==null?xt():setTimeout(xt,10)})};let ne=null;function Nn(w){ne&&ne(w)}function Mn(){wi.stop()}function $l(){wi.start()}const wi=new Su;wi.setAnimationLoop(Nn),typeof self<"u"&&wi.setContext(self),this.setAnimationLoop=function(w){ne=w,yt.setAnimationLoop(w),w===null?wi.stop():wi.start()},yt.addEventListener("sessionstart",Mn),yt.addEventListener("sessionend",$l),this.render=function(w,V){if(V!==void 0&&V.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(T===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),V.parent===null&&V.matrixWorldAutoUpdate===!0&&V.updateMatrixWorld(),yt.enabled===!0&&yt.isPresenting===!0&&(yt.cameraAutoUpdate===!0&&yt.updateCamera(V),V=yt.getCamera()),w.isScene===!0&&w.onBeforeRender(y,w,V,D),p=zt.get(w,E.length),p.init(V),E.push(p),U.multiplyMatrices(V.projectionMatrix,V.matrixWorldInverse),B.setFromProjectionMatrix(U,Tn,V.reversedDepth),L=this.localClippingEnabled,it=St.init(this.clippingPlanes,L),g=rt.get(w,R.length),g.init(),R.push(g),yt.enabled===!0&&yt.isPresenting===!0){const xt=y.xr.getDepthSensingMesh();xt!==null&&bo(xt,V,-1/0,y.sortObjects)}bo(w,V,0,y.sortObjects),g.finish(),y.sortObjects===!0&&g.sort(vt,Mt),ct=yt.enabled===!1||yt.isPresenting===!1||yt.hasDepthSensing()===!1,ct&&Ot.addToRenderList(g,w),this.info.render.frame++,it===!0&&St.beginShadows();const J=p.state.shadowsArray;Nt.render(J,w,V),it===!0&&St.endShadows(),this.info.autoReset===!0&&this.info.reset();const tt=g.opaque,W=g.transmissive;if(p.setupLights(),V.isArrayCamera){const xt=V.cameras;if(W.length>0)for(let bt=0,Ut=xt.length;bt<Ut;bt++){const Dt=xt[bt];Kl(tt,W,w,Dt)}ct&&Ot.render(w);for(let bt=0,Ut=xt.length;bt<Ut;bt++){const Dt=xt[bt];jl(g,w,Dt,Dt.viewport)}}else W.length>0&&Kl(tt,W,w,V),ct&&Ot.render(w),jl(g,w,V);D!==null&&P===0&&(pt.updateMultisampleRenderTarget(D),pt.updateRenderTargetMipmap(D)),w.isScene===!0&&w.onAfterRender(y,w,V),Tt.resetDefaultState(),v=-1,S=null,E.pop(),E.length>0?(p=E[E.length-1],it===!0&&St.setGlobalState(y.clippingPlanes,p.state.camera)):p=null,R.pop(),R.length>0?g=R[R.length-1]:g=null};function bo(w,V,J,tt){if(w.visible===!1)return;if(w.layers.test(V.layers)){if(w.isGroup)J=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(V);else if(w.isLight)p.pushLight(w),w.castShadow&&p.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||B.intersectsSprite(w)){tt&&Z.setFromMatrixPosition(w.matrixWorld).applyMatrix4(U);const bt=G.update(w),Ut=w.material;Ut.visible&&g.push(w,bt,Ut,J,Z.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||B.intersectsObject(w))){const bt=G.update(w),Ut=w.material;if(tt&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),Z.copy(w.boundingSphere.center)):(bt.boundingSphere===null&&bt.computeBoundingSphere(),Z.copy(bt.boundingSphere.center)),Z.applyMatrix4(w.matrixWorld).applyMatrix4(U)),Array.isArray(Ut)){const Dt=bt.groups;for(let Ht=0,Wt=Dt.length;Ht<Wt;Ht++){const kt=Dt[Ht],Jt=Ut[kt.materialIndex];Jt&&Jt.visible&&g.push(w,bt,Jt,J,Z.z,kt)}}else Ut.visible&&g.push(w,bt,Ut,J,Z.z,null)}}const xt=w.children;for(let bt=0,Ut=xt.length;bt<Ut;bt++)bo(xt[bt],V,J,tt)}function jl(w,V,J,tt){const W=w.opaque,xt=w.transmissive,bt=w.transparent;p.setupLightsView(J),it===!0&&St.setGlobalState(y.clippingPlanes,J),tt&&K.viewport(I.copy(tt)),W.length>0&&_r(W,V,J),xt.length>0&&_r(xt,V,J),bt.length>0&&_r(bt,V,J),K.buffers.depth.setTest(!0),K.buffers.depth.setMask(!0),K.buffers.color.setMask(!0),K.setPolygonOffset(!1)}function Kl(w,V,J,tt){if((J.isScene===!0?J.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[tt.id]===void 0&&(p.state.transmissionRenderTarget[tt.id]=new ki(1,1,{generateMipmaps:!0,type:k.has("EXT_color_buffer_half_float")||k.has("EXT_color_buffer_float")?dr:Rn,minFilter:zi,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ee.workingColorSpace}));const xt=p.state.transmissionRenderTarget[tt.id],bt=tt.viewport||I;xt.setSize(bt.z*y.transmissionResolutionScale,bt.w*y.transmissionResolutionScale);const Ut=y.getRenderTarget(),Dt=y.getActiveCubeFace(),Ht=y.getActiveMipmapLevel();y.setRenderTarget(xt),y.getClearColor(ot),$=y.getClearAlpha(),$<1&&y.setClearColor(16777215,.5),y.clear(),ct&&Ot.render(J);const Wt=y.toneMapping;y.toneMapping=gi;const kt=tt.viewport;if(tt.viewport!==void 0&&(tt.viewport=void 0),p.setupLightsView(tt),it===!0&&St.setGlobalState(y.clippingPlanes,tt),_r(w,J,tt),pt.updateMultisampleRenderTarget(xt),pt.updateRenderTargetMipmap(xt),k.has("WEBGL_multisampled_render_to_texture")===!1){let Jt=!1;for(let se=0,me=V.length;se<me;se++){const he=V[se],le=he.object,Vt=he.geometry,fe=he.material,te=he.group;if(fe.side===Qe&&le.layers.test(tt.layers)){const $e=fe.side;fe.side=Ye,fe.needsUpdate=!0,Zl(le,J,tt,Vt,fe,te),fe.side=$e,fe.needsUpdate=!0,Jt=!0}}Jt===!0&&(pt.updateMultisampleRenderTarget(xt),pt.updateRenderTargetMipmap(xt))}y.setRenderTarget(Ut,Dt,Ht),y.setClearColor(ot,$),kt!==void 0&&(tt.viewport=kt),y.toneMapping=Wt}function _r(w,V,J){const tt=V.isScene===!0?V.overrideMaterial:null;for(let W=0,xt=w.length;W<xt;W++){const bt=w[W],Ut=bt.object,Dt=bt.geometry,Ht=bt.group;let Wt=bt.material;Wt.allowOverride===!0&&tt!==null&&(Wt=tt),Ut.layers.test(J.layers)&&Zl(Ut,V,J,Dt,Wt,Ht)}}function Zl(w,V,J,tt,W,xt){w.onBeforeRender(y,V,J,tt,W,xt),w.modelViewMatrix.multiplyMatrices(J.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),W.onBeforeRender(y,V,J,tt,w,xt),W.transparent===!0&&W.side===Qe&&W.forceSinglePass===!1?(W.side=Ye,W.needsUpdate=!0,y.renderBufferDirect(J,V,tt,W,w,xt),W.side=jn,W.needsUpdate=!0,y.renderBufferDirect(J,V,tt,W,w,xt),W.side=Qe):y.renderBufferDirect(J,V,tt,W,w,xt),w.onAfterRender(y,V,J,tt,W,xt)}function xr(w,V,J){V.isScene!==!0&&(V=Q);const tt=at.get(w),W=p.state.lights,xt=p.state.shadowsArray,bt=W.state.version,Ut=nt.getParameters(w,W.state,xt,V,J),Dt=nt.getProgramCacheKey(Ut);let Ht=tt.programs;tt.environment=w.isMeshStandardMaterial?V.environment:null,tt.fog=V.fog,tt.envMap=(w.isMeshStandardMaterial?Ct:Lt).get(w.envMap||tt.environment),tt.envMapRotation=tt.environment!==null&&w.envMap===null?V.environmentRotation:w.envMapRotation,Ht===void 0&&(w.addEventListener("dispose",ut),Ht=new Map,tt.programs=Ht);let Wt=Ht.get(Dt);if(Wt!==void 0){if(tt.currentProgram===Wt&&tt.lightsStateVersion===bt)return Ql(w,Ut),Wt}else Ut.uniforms=nt.getUniforms(w),w.onBeforeCompile(Ut,y),Wt=nt.acquireProgram(Ut,Dt),Ht.set(Dt,Wt),tt.uniforms=Ut.uniforms;const kt=tt.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(kt.clippingPlanes=St.uniform),Ql(w,Ut),tt.needsLights=rf(w),tt.lightsStateVersion=bt,tt.needsLights&&(kt.ambientLightColor.value=W.state.ambient,kt.lightProbe.value=W.state.probe,kt.directionalLights.value=W.state.directional,kt.directionalLightShadows.value=W.state.directionalShadow,kt.spotLights.value=W.state.spot,kt.spotLightShadows.value=W.state.spotShadow,kt.rectAreaLights.value=W.state.rectArea,kt.ltc_1.value=W.state.rectAreaLTC1,kt.ltc_2.value=W.state.rectAreaLTC2,kt.pointLights.value=W.state.point,kt.pointLightShadows.value=W.state.pointShadow,kt.hemisphereLights.value=W.state.hemi,kt.directionalShadowMap.value=W.state.directionalShadowMap,kt.directionalShadowMatrix.value=W.state.directionalShadowMatrix,kt.spotShadowMap.value=W.state.spotShadowMap,kt.spotLightMatrix.value=W.state.spotLightMatrix,kt.spotLightMap.value=W.state.spotLightMap,kt.pointShadowMap.value=W.state.pointShadowMap,kt.pointShadowMatrix.value=W.state.pointShadowMatrix),tt.currentProgram=Wt,tt.uniformsList=null,Wt}function Jl(w){if(w.uniformsList===null){const V=w.currentProgram.getUniforms();w.uniformsList=eo.seqWithValue(V.seq,w.uniforms)}return w.uniformsList}function Ql(w,V){const J=at.get(w);J.outputColorSpace=V.outputColorSpace,J.batching=V.batching,J.batchingColor=V.batchingColor,J.instancing=V.instancing,J.instancingColor=V.instancingColor,J.instancingMorph=V.instancingMorph,J.skinning=V.skinning,J.morphTargets=V.morphTargets,J.morphNormals=V.morphNormals,J.morphColors=V.morphColors,J.morphTargetsCount=V.morphTargetsCount,J.numClippingPlanes=V.numClippingPlanes,J.numIntersection=V.numClipIntersection,J.vertexAlphas=V.vertexAlphas,J.vertexTangents=V.vertexTangents,J.toneMapping=V.toneMapping}function nf(w,V,J,tt,W){V.isScene!==!0&&(V=Q),pt.resetTextureUnits();const xt=V.fog,bt=tt.isMeshStandardMaterial?V.environment:null,Ut=D===null?y.outputColorSpace:D.isXRRenderTarget===!0?D.texture.colorSpace:ws,Dt=(tt.isMeshStandardMaterial?Ct:Lt).get(tt.envMap||bt),Ht=tt.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,Wt=!!J.attributes.tangent&&(!!tt.normalMap||tt.anisotropy>0),kt=!!J.morphAttributes.position,Jt=!!J.morphAttributes.normal,se=!!J.morphAttributes.color;let me=gi;tt.toneMapped&&(D===null||D.isXRRenderTarget===!0)&&(me=y.toneMapping);const he=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,le=he!==void 0?he.length:0,Vt=at.get(tt),fe=p.state.lights;if(it===!0&&(L===!0||w!==S)){const Oe=w===S&&tt.id===v;St.setState(tt,w,Oe)}let te=!1;tt.version===Vt.__version?(Vt.needsLights&&Vt.lightsStateVersion!==fe.state.version||Vt.outputColorSpace!==Ut||W.isBatchedMesh&&Vt.batching===!1||!W.isBatchedMesh&&Vt.batching===!0||W.isBatchedMesh&&Vt.batchingColor===!0&&W.colorTexture===null||W.isBatchedMesh&&Vt.batchingColor===!1&&W.colorTexture!==null||W.isInstancedMesh&&Vt.instancing===!1||!W.isInstancedMesh&&Vt.instancing===!0||W.isSkinnedMesh&&Vt.skinning===!1||!W.isSkinnedMesh&&Vt.skinning===!0||W.isInstancedMesh&&Vt.instancingColor===!0&&W.instanceColor===null||W.isInstancedMesh&&Vt.instancingColor===!1&&W.instanceColor!==null||W.isInstancedMesh&&Vt.instancingMorph===!0&&W.morphTexture===null||W.isInstancedMesh&&Vt.instancingMorph===!1&&W.morphTexture!==null||Vt.envMap!==Dt||tt.fog===!0&&Vt.fog!==xt||Vt.numClippingPlanes!==void 0&&(Vt.numClippingPlanes!==St.numPlanes||Vt.numIntersection!==St.numIntersection)||Vt.vertexAlphas!==Ht||Vt.vertexTangents!==Wt||Vt.morphTargets!==kt||Vt.morphNormals!==Jt||Vt.morphColors!==se||Vt.toneMapping!==me||Vt.morphTargetsCount!==le)&&(te=!0):(te=!0,Vt.__version=tt.version);let $e=Vt.currentProgram;te===!0&&($e=xr(tt,V,W));let qi=!1,je=!1,Us=!1;const de=$e.getUniforms(),en=Vt.uniforms;if(K.useProgram($e.program)&&(qi=!0,je=!0,Us=!0),tt.id!==v&&(v=tt.id,je=!0),qi||S!==w){K.buffers.depth.getReversed()&&w.reversedDepth!==!0&&(w._reversedDepth=!0,w.updateProjectionMatrix()),de.setValue(M,"projectionMatrix",w.projectionMatrix),de.setValue(M,"viewMatrix",w.matrixWorldInverse);const He=de.map.cameraPosition;He!==void 0&&He.setValue(M,j.setFromMatrixPosition(w.matrixWorld)),Y.logarithmicDepthBuffer&&de.setValue(M,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(tt.isMeshPhongMaterial||tt.isMeshToonMaterial||tt.isMeshLambertMaterial||tt.isMeshBasicMaterial||tt.isMeshStandardMaterial||tt.isShaderMaterial)&&de.setValue(M,"isOrthographic",w.isOrthographicCamera===!0),S!==w&&(S=w,je=!0,Us=!0)}if(W.isSkinnedMesh){de.setOptional(M,W,"bindMatrix"),de.setOptional(M,W,"bindMatrixInverse");const Oe=W.skeleton;Oe&&(Oe.boneTexture===null&&Oe.computeBoneTexture(),de.setValue(M,"boneTexture",Oe.boneTexture,pt))}W.isBatchedMesh&&(de.setOptional(M,W,"batchingTexture"),de.setValue(M,"batchingTexture",W._matricesTexture,pt),de.setOptional(M,W,"batchingIdTexture"),de.setValue(M,"batchingIdTexture",W._indirectTexture,pt),de.setOptional(M,W,"batchingColorTexture"),W._colorsTexture!==null&&de.setValue(M,"batchingColorTexture",W._colorsTexture,pt));const nn=J.morphAttributes;if((nn.position!==void 0||nn.normal!==void 0||nn.color!==void 0)&&gt.update(W,J,$e),(je||Vt.receiveShadow!==W.receiveShadow)&&(Vt.receiveShadow=W.receiveShadow,de.setValue(M,"receiveShadow",W.receiveShadow)),tt.isMeshGouraudMaterial&&tt.envMap!==null&&(en.envMap.value=Dt,en.flipEnvMap.value=Dt.isCubeTexture&&Dt.isRenderTargetTexture===!1?-1:1),tt.isMeshStandardMaterial&&tt.envMap===null&&V.environment!==null&&(en.envMapIntensity.value=V.environmentIntensity),je&&(de.setValue(M,"toneMappingExposure",y.toneMappingExposure),Vt.needsLights&&sf(en,Us),xt&&tt.fog===!0&&ft.refreshFogUniforms(en,xt),ft.refreshMaterialUniforms(en,tt,st,lt,p.state.transmissionRenderTarget[w.id]),eo.upload(M,Jl(Vt),en,pt)),tt.isShaderMaterial&&tt.uniformsNeedUpdate===!0&&(eo.upload(M,Jl(Vt),en,pt),tt.uniformsNeedUpdate=!1),tt.isSpriteMaterial&&de.setValue(M,"center",W.center),de.setValue(M,"modelViewMatrix",W.modelViewMatrix),de.setValue(M,"normalMatrix",W.normalMatrix),de.setValue(M,"modelMatrix",W.matrixWorld),tt.isShaderMaterial||tt.isRawShaderMaterial){const Oe=tt.uniformsGroups;for(let He=0,Ao=Oe.length;He<Ao;He++){const Ti=Oe[He];$t.update(Ti,$e),$t.bind(Ti,$e)}}return $e}function sf(w,V){w.ambientLightColor.needsUpdate=V,w.lightProbe.needsUpdate=V,w.directionalLights.needsUpdate=V,w.directionalLightShadows.needsUpdate=V,w.pointLights.needsUpdate=V,w.pointLightShadows.needsUpdate=V,w.spotLights.needsUpdate=V,w.spotLightShadows.needsUpdate=V,w.rectAreaLights.needsUpdate=V,w.hemisphereLights.needsUpdate=V}function rf(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return P},this.getRenderTarget=function(){return D},this.setRenderTargetTextures=function(w,V,J){const tt=at.get(w);tt.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,tt.__autoAllocateDepthBuffer===!1&&(tt.__useRenderToTexture=!1),at.get(w.texture).__webglTexture=V,at.get(w.depthTexture).__webglTexture=tt.__autoAllocateDepthBuffer?void 0:J,tt.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,V){const J=at.get(w);J.__webglFramebuffer=V,J.__useDefaultFramebuffer=V===void 0};const of=M.createFramebuffer();this.setRenderTarget=function(w,V=0,J=0){D=w,C=V,P=J;let tt=!0,W=null,xt=!1,bt=!1;if(w){const Dt=at.get(w);if(Dt.__useDefaultFramebuffer!==void 0)K.bindFramebuffer(M.FRAMEBUFFER,null),tt=!1;else if(Dt.__webglFramebuffer===void 0)pt.setupRenderTarget(w);else if(Dt.__hasExternalTextures)pt.rebindTextures(w,at.get(w.texture).__webglTexture,at.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const kt=w.depthTexture;if(Dt.__boundDepthTexture!==kt){if(kt!==null&&at.has(kt)&&(w.width!==kt.image.width||w.height!==kt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");pt.setupDepthRenderbuffer(w)}}const Ht=w.texture;(Ht.isData3DTexture||Ht.isDataArrayTexture||Ht.isCompressedArrayTexture)&&(bt=!0);const Wt=at.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Wt[V])?W=Wt[V][J]:W=Wt[V],xt=!0):w.samples>0&&pt.useMultisampledRTT(w)===!1?W=at.get(w).__webglMultisampledFramebuffer:Array.isArray(Wt)?W=Wt[J]:W=Wt,I.copy(w.viewport),z.copy(w.scissor),q=w.scissorTest}else I.copy(Rt).multiplyScalar(st).floor(),z.copy(b).multiplyScalar(st).floor(),q=H;if(J!==0&&(W=of),K.bindFramebuffer(M.FRAMEBUFFER,W)&&tt&&K.drawBuffers(w,W),K.viewport(I),K.scissor(z),K.setScissorTest(q),xt){const Dt=at.get(w.texture);M.framebufferTexture2D(M.FRAMEBUFFER,M.COLOR_ATTACHMENT0,M.TEXTURE_CUBE_MAP_POSITIVE_X+V,Dt.__webglTexture,J)}else if(bt){const Dt=V;for(let Ht=0;Ht<w.textures.length;Ht++){const Wt=at.get(w.textures[Ht]);M.framebufferTextureLayer(M.FRAMEBUFFER,M.COLOR_ATTACHMENT0+Ht,Wt.__webglTexture,J,Dt)}}else if(w!==null&&J!==0){const Dt=at.get(w.texture);M.framebufferTexture2D(M.FRAMEBUFFER,M.COLOR_ATTACHMENT0,M.TEXTURE_2D,Dt.__webglTexture,J)}v=-1},this.readRenderTargetPixels=function(w,V,J,tt,W,xt,bt,Ut=0){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Dt=at.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&bt!==void 0&&(Dt=Dt[bt]),Dt){K.bindFramebuffer(M.FRAMEBUFFER,Dt);try{const Ht=w.textures[Ut],Wt=Ht.format,kt=Ht.type;if(!Y.textureFormatReadable(Wt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Y.textureTypeReadable(kt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}V>=0&&V<=w.width-tt&&J>=0&&J<=w.height-W&&(w.textures.length>1&&M.readBuffer(M.COLOR_ATTACHMENT0+Ut),M.readPixels(V,J,tt,W,Bt.convert(Wt),Bt.convert(kt),xt))}finally{const Ht=D!==null?at.get(D).__webglFramebuffer:null;K.bindFramebuffer(M.FRAMEBUFFER,Ht)}}},this.readRenderTargetPixelsAsync=async function(w,V,J,tt,W,xt,bt,Ut=0){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Dt=at.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&bt!==void 0&&(Dt=Dt[bt]),Dt)if(V>=0&&V<=w.width-tt&&J>=0&&J<=w.height-W){K.bindFramebuffer(M.FRAMEBUFFER,Dt);const Ht=w.textures[Ut],Wt=Ht.format,kt=Ht.type;if(!Y.textureFormatReadable(Wt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Y.textureTypeReadable(kt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Jt=M.createBuffer();M.bindBuffer(M.PIXEL_PACK_BUFFER,Jt),M.bufferData(M.PIXEL_PACK_BUFFER,xt.byteLength,M.STREAM_READ),w.textures.length>1&&M.readBuffer(M.COLOR_ATTACHMENT0+Ut),M.readPixels(V,J,tt,W,Bt.convert(Wt),Bt.convert(kt),0);const se=D!==null?at.get(D).__webglFramebuffer:null;K.bindFramebuffer(M.FRAMEBUFFER,se);const me=M.fenceSync(M.SYNC_GPU_COMMANDS_COMPLETE,0);return M.flush(),await Jf(M,me,4),M.bindBuffer(M.PIXEL_PACK_BUFFER,Jt),M.getBufferSubData(M.PIXEL_PACK_BUFFER,0,xt),M.deleteBuffer(Jt),M.deleteSync(me),xt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,V=null,J=0){const tt=Math.pow(2,-J),W=Math.floor(w.image.width*tt),xt=Math.floor(w.image.height*tt),bt=V!==null?V.x:0,Ut=V!==null?V.y:0;pt.setTexture2D(w,0),M.copyTexSubImage2D(M.TEXTURE_2D,J,0,0,bt,Ut,W,xt),K.unbindTexture()};const af=M.createFramebuffer(),lf=M.createFramebuffer();this.copyTextureToTexture=function(w,V,J=null,tt=null,W=0,xt=null){xt===null&&(W!==0?(ir("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),xt=W,W=0):xt=0);let bt,Ut,Dt,Ht,Wt,kt,Jt,se,me;const he=w.isCompressedTexture?w.mipmaps[xt]:w.image;if(J!==null)bt=J.max.x-J.min.x,Ut=J.max.y-J.min.y,Dt=J.isBox3?J.max.z-J.min.z:1,Ht=J.min.x,Wt=J.min.y,kt=J.isBox3?J.min.z:0;else{const nn=Math.pow(2,-W);bt=Math.floor(he.width*nn),Ut=Math.floor(he.height*nn),w.isDataArrayTexture?Dt=he.depth:w.isData3DTexture?Dt=Math.floor(he.depth*nn):Dt=1,Ht=0,Wt=0,kt=0}tt!==null?(Jt=tt.x,se=tt.y,me=tt.z):(Jt=0,se=0,me=0);const le=Bt.convert(V.format),Vt=Bt.convert(V.type);let fe;V.isData3DTexture?(pt.setTexture3D(V,0),fe=M.TEXTURE_3D):V.isDataArrayTexture||V.isCompressedArrayTexture?(pt.setTexture2DArray(V,0),fe=M.TEXTURE_2D_ARRAY):(pt.setTexture2D(V,0),fe=M.TEXTURE_2D),M.pixelStorei(M.UNPACK_FLIP_Y_WEBGL,V.flipY),M.pixelStorei(M.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),M.pixelStorei(M.UNPACK_ALIGNMENT,V.unpackAlignment);const te=M.getParameter(M.UNPACK_ROW_LENGTH),$e=M.getParameter(M.UNPACK_IMAGE_HEIGHT),qi=M.getParameter(M.UNPACK_SKIP_PIXELS),je=M.getParameter(M.UNPACK_SKIP_ROWS),Us=M.getParameter(M.UNPACK_SKIP_IMAGES);M.pixelStorei(M.UNPACK_ROW_LENGTH,he.width),M.pixelStorei(M.UNPACK_IMAGE_HEIGHT,he.height),M.pixelStorei(M.UNPACK_SKIP_PIXELS,Ht),M.pixelStorei(M.UNPACK_SKIP_ROWS,Wt),M.pixelStorei(M.UNPACK_SKIP_IMAGES,kt);const de=w.isDataArrayTexture||w.isData3DTexture,en=V.isDataArrayTexture||V.isData3DTexture;if(w.isDepthTexture){const nn=at.get(w),Oe=at.get(V),He=at.get(nn.__renderTarget),Ao=at.get(Oe.__renderTarget);K.bindFramebuffer(M.READ_FRAMEBUFFER,He.__webglFramebuffer),K.bindFramebuffer(M.DRAW_FRAMEBUFFER,Ao.__webglFramebuffer);for(let Ti=0;Ti<Dt;Ti++)de&&(M.framebufferTextureLayer(M.READ_FRAMEBUFFER,M.COLOR_ATTACHMENT0,at.get(w).__webglTexture,W,kt+Ti),M.framebufferTextureLayer(M.DRAW_FRAMEBUFFER,M.COLOR_ATTACHMENT0,at.get(V).__webglTexture,xt,me+Ti)),M.blitFramebuffer(Ht,Wt,bt,Ut,Jt,se,bt,Ut,M.DEPTH_BUFFER_BIT,M.NEAREST);K.bindFramebuffer(M.READ_FRAMEBUFFER,null),K.bindFramebuffer(M.DRAW_FRAMEBUFFER,null)}else if(W!==0||w.isRenderTargetTexture||at.has(w)){const nn=at.get(w),Oe=at.get(V);K.bindFramebuffer(M.READ_FRAMEBUFFER,af),K.bindFramebuffer(M.DRAW_FRAMEBUFFER,lf);for(let He=0;He<Dt;He++)de?M.framebufferTextureLayer(M.READ_FRAMEBUFFER,M.COLOR_ATTACHMENT0,nn.__webglTexture,W,kt+He):M.framebufferTexture2D(M.READ_FRAMEBUFFER,M.COLOR_ATTACHMENT0,M.TEXTURE_2D,nn.__webglTexture,W),en?M.framebufferTextureLayer(M.DRAW_FRAMEBUFFER,M.COLOR_ATTACHMENT0,Oe.__webglTexture,xt,me+He):M.framebufferTexture2D(M.DRAW_FRAMEBUFFER,M.COLOR_ATTACHMENT0,M.TEXTURE_2D,Oe.__webglTexture,xt),W!==0?M.blitFramebuffer(Ht,Wt,bt,Ut,Jt,se,bt,Ut,M.COLOR_BUFFER_BIT,M.NEAREST):en?M.copyTexSubImage3D(fe,xt,Jt,se,me+He,Ht,Wt,bt,Ut):M.copyTexSubImage2D(fe,xt,Jt,se,Ht,Wt,bt,Ut);K.bindFramebuffer(M.READ_FRAMEBUFFER,null),K.bindFramebuffer(M.DRAW_FRAMEBUFFER,null)}else en?w.isDataTexture||w.isData3DTexture?M.texSubImage3D(fe,xt,Jt,se,me,bt,Ut,Dt,le,Vt,he.data):V.isCompressedArrayTexture?M.compressedTexSubImage3D(fe,xt,Jt,se,me,bt,Ut,Dt,le,he.data):M.texSubImage3D(fe,xt,Jt,se,me,bt,Ut,Dt,le,Vt,he):w.isDataTexture?M.texSubImage2D(M.TEXTURE_2D,xt,Jt,se,bt,Ut,le,Vt,he.data):w.isCompressedTexture?M.compressedTexSubImage2D(M.TEXTURE_2D,xt,Jt,se,he.width,he.height,le,he.data):M.texSubImage2D(M.TEXTURE_2D,xt,Jt,se,bt,Ut,le,Vt,he);M.pixelStorei(M.UNPACK_ROW_LENGTH,te),M.pixelStorei(M.UNPACK_IMAGE_HEIGHT,$e),M.pixelStorei(M.UNPACK_SKIP_PIXELS,qi),M.pixelStorei(M.UNPACK_SKIP_ROWS,je),M.pixelStorei(M.UNPACK_SKIP_IMAGES,Us),xt===0&&V.generateMipmaps&&M.generateMipmap(fe),K.unbindTexture()},this.initRenderTarget=function(w){at.get(w).__webglFramebuffer===void 0&&pt.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?pt.setTextureCube(w,0):w.isData3DTexture?pt.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?pt.setTexture2DArray(w,0):pt.setTexture2D(w,0),K.unbindTexture()},this.resetState=function(){C=0,P=0,D=null,K.reset(),Tt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Tn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=ee._getDrawingBufferColorSpace(t),e.unpackColorSpace=ee._getUnpackColorSpace()}}const uh={type:"change"},Dl={type:"start"},Au={type:"end"},qr=new yo,fh=new Wn,i0=Math.cos(70*Kf.DEG2RAD),Se=new O,We=2*Math.PI,ae={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},ca=1e-6;class s0 extends vp{constructor(t,e=null){super(t,e),this.state=ae.NONE,this.target=new O,this.cursor=new O,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:_s.ROTATE,MIDDLE:_s.DOLLY,RIGHT:_s.PAN},this.touches={ONE:fs.ROTATE,TWO:fs.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new O,this._lastQuaternion=new Kn,this._lastTargetPosition=new O,this._quat=new Kn().setFromUnitVectors(t.up,new O(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Bc,this._sphericalDelta=new Bc,this._scale=1,this._panOffset=new O,this._rotateStart=new mt,this._rotateEnd=new mt,this._rotateDelta=new mt,this._panStart=new mt,this._panEnd=new mt,this._panDelta=new mt,this._dollyStart=new mt,this._dollyEnd=new mt,this._dollyDelta=new mt,this._dollyDirection=new O,this._mouse=new mt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=o0.bind(this),this._onPointerDown=r0.bind(this),this._onPointerUp=a0.bind(this),this._onContextMenu=p0.bind(this),this._onMouseWheel=h0.bind(this),this._onKeyDown=u0.bind(this),this._onTouchStart=f0.bind(this),this._onTouchMove=d0.bind(this),this._onMouseDown=l0.bind(this),this._onMouseMove=c0.bind(this),this._interceptControlDown=m0.bind(this),this._interceptControlUp=g0.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(uh),this.update(),this.state=ae.NONE}update(t=null){const e=this.object.position;Se.copy(e).sub(this.target),Se.applyQuaternion(this._quat),this._spherical.setFromVector3(Se),this.autoRotate&&this.state===ae.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(i)&&isFinite(s)&&(i<-Math.PI?i+=We:i>Math.PI&&(i-=We),s<-Math.PI?s+=We:s>Math.PI&&(s-=We),i<=s?this._spherical.theta=Math.max(i,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+s)/2?Math.max(i,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(Se.setFromSpherical(this._spherical),Se.applyQuaternion(this._quatInverse),e.copy(this.target).add(Se),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=Se.length();o=this._clampDistance(a*this._scale);const l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){const a=new O(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;const c=new O(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=Se.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(qr.origin.copy(this.object.position),qr.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(qr.direction))<i0?this.object.lookAt(this.target):(fh.setFromNormalAndCoplanarPoint(this.object.up,this.target),qr.intersectPlane(fh,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>ca||8*(1-this._lastQuaternion.dot(this.object.quaternion))>ca||this._lastTargetPosition.distanceToSquared(this.target)>ca?(this.dispatchEvent(uh),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?We/60*this.autoRotateSpeed*t:We/60/60*this.autoRotateSpeed}_getZoomScale(t){const e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){Se.setFromMatrixColumn(e,0),Se.multiplyScalar(-t),this._panOffset.add(Se)}_panUp(t,e){this.screenSpacePanning===!0?Se.setFromMatrixColumn(e,1):(Se.setFromMatrixColumn(e,0),Se.crossVectors(this.object.up,Se)),Se.multiplyScalar(t),this._panOffset.add(Se)}_pan(t,e){const i=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;Se.copy(s).sub(this.target);let r=Se.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*r/i.clientHeight,this.object.matrix),this._panUp(2*e*r/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),s=t-i.left,r=e-i.top,o=i.width,a=i.height;this._mouse.x=s/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(We*this._rotateDelta.x/e.clientHeight),this._rotateUp(We*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(We*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-We*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(We*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-We*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._rotateStart.set(i,s)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panStart.set(i,s)}}_handleTouchStartDolly(t){const e=this._getSecondPointerPosition(t),i=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(i*i+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),s=.5*(t.pageX+i.x),r=.5*(t.pageY+i.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(We*this._rotateDelta.x/e.clientHeight),this._rotateUp(We*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panEnd.set(i,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const e=this._getSecondPointerPosition(t),i=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(i*i+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(t.pageX+e.x)*.5,a=(t.pageY+e.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new mt,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){const e=t.deltaMode,i={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function r0(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n)))}function o0(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function a0(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Au),this.state=ae.NONE;break;case 1:const t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function l0(n){let t;switch(n.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case _s.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=ae.DOLLY;break;case _s.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=ae.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=ae.ROTATE}break;case _s.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=ae.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=ae.PAN}break;default:this.state=ae.NONE}this.state!==ae.NONE&&this.dispatchEvent(Dl)}function c0(n){switch(this.state){case ae.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case ae.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case ae.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function h0(n){this.enabled===!1||this.enableZoom===!1||this.state!==ae.NONE||(n.preventDefault(),this.dispatchEvent(Dl),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent(Au))}function u0(n){this.enabled!==!1&&this._handleKeyDown(n)}function f0(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case fs.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(n),this.state=ae.TOUCH_ROTATE;break;case fs.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(n),this.state=ae.TOUCH_PAN;break;default:this.state=ae.NONE}break;case 2:switch(this.touches.TWO){case fs.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=ae.TOUCH_DOLLY_PAN;break;case fs.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=ae.TOUCH_DOLLY_ROTATE;break;default:this.state=ae.NONE}break;default:this.state=ae.NONE}this.state!==ae.NONE&&this.dispatchEvent(Dl)}function d0(n){switch(this._trackPointer(n),this.state){case ae.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case ae.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case ae.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case ae.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=ae.NONE}}function p0(n){this.enabled!==!1&&n.preventDefault()}function m0(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function g0(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const _e={aisleOffset:12.8,aisleWidth:2.8,portalWidth:3.4,wallOffset:5.8,wallThickness:.24,wallHeight:2.4,upper:{bands:24,start:10.5,step:-.85,y:10.1,rise:.42},lower:{bands:3,start:14.4,step:.9,y:9.4,rise:-.28},glassOffset:17.3,suiteOffset:17.55,roofInner:19,roofOuter:-12},cs=n=>21.8-n*.07;function _0(n){const t=_e.upper,e=Math.max(0,Math.min(t.bands-1,Math.floor((n-t.start)/t.step)));return t.y+e*t.rise-.25}const ar=(n,t)=>Math.hypot(t.x-n.x,t.z-n.z);function Gn(n,t){return n.map((e,i)=>{const s=n[Math.max(0,i-1)],r=n[Math.min(n.length-1,i+1)],o=(h,f)=>{const d=ar(h,f);return{x:-(f.z-h.z)/d,z:(f.x-h.x)/d}},a=o(i?s:e,i?e:r),l=o(i<n.length-1?e:s,i<n.length-1?r:e),c={x:a.x+l.x,z:a.z+l.z},u=c.x*l.x+c.z*l.z;return{...e,x:e.x+c.x*t/u,z:e.z+c.z*t/u}})}function dh(n,t){let e;for(let i=1;i<t.length;i++){const s=t[i-1],r=t[i],o=ar(s,r),a=Math.max(0,Math.min(1,((n.x-s.x)*(r.x-s.x)+(n.z-s.z)*(r.z-s.z))/(o*o))),l={x:s.x+(r.x-s.x)*a,z:s.z+(r.z-s.z)*a,y:s.y},c=ar(n,l);(!e||c<e.distance)&&(e={...l,distance:c,segment:i-1,t:a})}return e}function x0(n,t){const e=Gn(n,_e.aisleOffset),i=Gn(n,_e.wallOffset),s=t.map(({number:r,position:o})=>{const a=dh(o,n),l=n[a.segment],c=n[a.segment+1],u=ar(l,c),h={x:-(c.z-l.z)/u,z:(c.x-l.x)/u},f={"08":1,10:-1,13:3.4}[r]||0,d={...a};a.x+=(c.x-l.x)/u*f,a.z+=(c.z-l.z)/u*f;const m=dh({x:a.x+h.x*_e.aisleOffset,z:a.z+h.z*_e.aisleOffset},e),_=ar(a,m),g={x:(m.x-a.x)/_,z:(m.z-a.z)/_};return{id:"sky-portal-"+r,number:r,sourceProjection:d,alongShift:f,start:{x:a.x,z:a.z,y:a.y},end:{x:m.x,z:m.z,y:a.y},direction:g,width:_e.portalWidth,length:_}});return{frontPath:e,wallPath:i,portals:s,walkways:[{id:"sky-front",path:e,width:_e.aisleWidth},...s.map(r=>({id:r.id,path:[r.start,r.end],width:r.width}))]}}const v0=[{section:"T3-1",row:10,seat:1,source:["O05","V29"],localU:1.4},{section:"T3-1",row:6,seat:8,source:["O05","V30-03"],localU:1.4+7*.61},{section:"T3-1",row:2,seat:8,source:["O05","V36-08"],localU:1.4+7*.61},{section:"T1-4",row:8,seat:1,source:["O05","V32-00"],localU:1.4},{section:"T1-4",row:8,seat:2,source:["O05","V32-00"],localU:2.01},{section:"T1-4",row:12,seat:1,source:["O05","V38-06"],localU:1.4},{section:"T1-4",row:12,seat:3,source:["O05","V38-03"],localU:2.62},{section:"T1-4",row:5,seat:5,source:["O05","V39-01","V39-text"],localU:3.84},{section:"T1-4",row:4,seat:5,source:["O05","V39-15"],localU:3.84},{section:"T1-4",row:4,seat:6,source:["O05","V39-15"],localU:4.45},{section:"T1-4",row:4,seat:7,source:["O05","V39-15"],localU:5.06},{section:"T1-1",row:2,seat:1,source:["O05","V42-10"],localU:1.4},{section:"T1-1",row:3,seat:1,source:["O05","V42-01","V42-text"],localU:1.4},{section:"T1-1",row:5,seat:1,source:["O05","V37-07"],localU:1.4},{section:"T1-1",row:5,seat:2,source:["O05","V37-07"],localU:2.01},{section:"T1-1",row:3,seat:8,source:["O05","V47-text","V47-09"],localU:5.67},{section:"T1-1",row:3,seat:9,source:["O05","V47-04"],localU:6.28},{section:"3-3",row:23,seat:8,source:["O05","V48-text"],localU:5.67},{section:"3-3",row:23,seat:9,source:["O05","V48-02"],localU:6.28},{section:"3-3",row:30,seat:4,source:["O05","V49-00"],localU:3.23},{section:"3-3",row:30,seat:5,source:["O05","V49-00"],localU:3.84},{section:"3-3",row:32,seat:10,source:["O05","V52-text"],localU:6.89},{section:"3-3",row:32,seat:11,source:["O05","V52-text"],localU:7.5},{section:"3-3",row:7,seat:8,source:["O05","V51-18"],localU:5.67},{section:"3-3",row:27,seat:8,source:["O05","V51-22"],localU:5.67},{section:"3-3",row:27,seat:9,source:["O05","V51-22"],localU:6.28},{section:"3-3",row:27,seat:10,source:["O05","V51-22"],localU:6.89},{section:"3-3",row:28,seat:8,source:["O05","V51-22"],localU:5.67},{section:"3-3",row:28,seat:9,source:["O05","V51-22"],localU:6.28},{section:"3-3",row:29,seat:9,source:["O05","V51-22"],localU:6.28},{section:"3-3",row:33,seat:9,source:["O05","V51-26"],localU:6.28},{section:"3-3",row:32,seat:8,source:["O05","V53-01"],localU:5.67},{section:"3-3",row:32,seat:9,source:["O05","V53-01"],localU:6.28},{section:"3-3",row:29,seat:2,source:["O05","V48-04"],localU:2.01}],Un=[{id:"seating-T3-1",section:"T3-1",floor:"3F",origin:{x:37.1,y:0,z:79.04},across:{x:-1,z:0},forward:{x:0,z:-1},rows:12,rowPitch:2.05,rear:6.8,aisleWidth:1.5,farAisle:10.4,terraceMin:.75,terraceMax:9.65,source:["O05","V29","V30","V31","V36"],accuracy:"observed-topology-inferred-dimensions"},{id:"seating-T1-4",section:"T1-4",floor:"3F",origin:{x:77.44,y:0,z:8.9},across:{x:0,z:1},forward:{x:-1,z:0},rows:14,rowPitch:2.05,rear:6.8,entry:5.15,aisleWidth:1.5,farAisle:6.45,terraceMin:.75,terraceMax:5.7,chairCount:7,tableGroups:[4,3],source:["O05","V31-T1-4","V32","V38","V39","V40"],accuracy:"observed-topology-inferred-dimensions"},{id:"seating-T1-1",section:"T1-1",floor:"3F",origin:{x:77.44,y:0,z:38.5},across:{x:0,z:-1},forward:{x:-1,z:0},rows:12,rowPitch:2.05,rear:6.8,entry:5.15,aisleWidth:1.5,farAisle:12.6,terraceMin:.75,terraceMax:11.85,nearInset:3.2,firstTableGroups:[2,2,4,4,4,4,3,4,4,3,2,3],tableGroupsByRow:{3:[4,3,2]},source:["O05","V31-T1-1","V37","V42"],accuracy:"observed-topology-inferred-dimensions"},{id:"seating-3-3",section:"3-3",floor:"3F",origin:{x:-4,y:0,z:79.04},across:{x:-1,z:0},forward:{x:0,z:-1},rows:33,firstRow:7,rowPitch:1.15,rear:6.8,entry:5.15,aisleWidth:1.5,farAisle:10.4,terraceMin:.75,terraceMax:9.65,rowRise:.25,rearDrop:.25,rowBack:.35,landing:.28,treadCount:2,chairOffset:.62,chairDepth:.2,folded:!0,source:["O05","V31-B3","V48","V49","V51","V52","V53"],accuracy:"observed-topology-inferred-dimensions"}],lr=n=>Un.find(t=>t.id===n),Il=n=>Array.from({length:n.rows-(n.firstRow||1)+1},(t,e)=>(n.firstRow||1)+e),uo=n=>n.rowBack??.5,yi=n=>n.rowPitch-uo(n),ln=(n,t)=>n.rear+(n.rows-t)*n.rowPitch,Zn=(n,t)=>t===n.rows?n.origin.y:n.origin.y-(n.rearDrop??.6)-(n.rows-1-t)*(n.rowRise??.46);function we(n,t,e,i=n.origin.y){return{x:n.origin.x+n.across.x*t+n.forward.x*e,z:n.origin.z+n.across.z*t+n.forward.z*e,y:i,floor:n.floor,seating:n.id}}function ui(n,t){const e=t.x-n.origin.x,i=t.z-n.origin.z;return{u:e*n.across.x+i*n.across.z,v:e*n.forward.x+i*n.forward.z}}const Pn=n=>ln(n,n.firstRow||1),Gi=(n,t)=>(n.nearInset||0)*Math.max(0,Math.min(1,(t-n.rear)/(Pn(n)-n.rear))),Xn=(n,t,e)=>t?n.farAisle:Gi(n,e);function So(n,t,e,i,s){const r=[i,n.rear,Pn(n),s].filter(a=>a>=i&&a<=s).sort((a,l)=>a-l),o=[[Gi(n,i)+t,i],[n.farAisle+e,i],[n.farAisle+e,s],...r.reverse().map(a=>[Gi(n,a)+t,a])];return o.push(o[0]),o.map(([a,l])=>{const c=we(n,a,l);return[c.x,c.z]})}function y0(n,t,e,i){const s=[e,n.rear,Pn(n),i].filter(o=>o>=e&&o<=i).sort((o,a)=>o-a),r=[...s.map(o=>[Xn(n,t,o)-n.aisleWidth/2,o]),...s.reverse().map(o=>[Xn(n,t,o)+n.aisleWidth/2,o])];return r.push(r[0]),r.map(([o,a])=>{const l=we(n,o,a);return[l.x,l.z]})}const M0=Un.map(n=>[So(n,-n.aisleWidth/2,n.aisleWidth/2,n.rear-.5,Pn(n)+yi(n)+.05)]),S0=Un.map(n=>[So(n,-n.aisleWidth/2-.5,n.aisleWidth/2+.5,n.rear-1,Pn(n)+yi(n)+.55)]),E0=Un.map(n=>({floor:n.floor,polygons:[[So(n,-n.aisleWidth/2-.2,n.aisleWidth/2+.2,n.rear-.7,Pn(n)+yi(n)+.25)]]}));function Ru(n){const t=[];for(const e of[0,1])for(const i of Ul(n))e&&i.v1<=n.rear||t.push({polygons:[[y0(n,e,e?Math.max(i.v0,n.rear-.5):i.v0,i.v1)]],y:i.y,kind:"aisle"});for(const e of Il(n))t.push({polygons:[[So(n,n.terraceMin,n.terraceMax-n.farAisle,ln(n,e)-uo(n),ln(n,e)+yi(n))]],y:Zn(n,e),kind:"row",row:e});return t}function Ul(n){const t=n.landing??.45,e=n.treadCount??3,i=[{v0:0,v1:n.rear+t,y:n.origin.y}];for(let s=n.rows;s>(n.firstRow||1);s--){const r=ln(n,s)+t,o=n.rowPitch-t*2,a=Zn(n,s),l=Zn(n,s-1)-a;for(let c=0;c<e;c++)i.push({v0:r+o*c/e,v1:c===e-1?ln(n,s-1)+t:r+o*(c+1)/e,y:a+l*(c+1)/e})}return i.at(-1).v1=Pn(n)+yi(n),i}function Cu(n){var e;const t=[];for(const i of Il(n)){const s=ln(n,i),r=Zn(n,i),o=Gi(n,s+(n.chairOffset??.8)),a=n.nearInset?Math.floor((n.terraceMax-o-1.4-.24)/.61)+1:n.chairCount||14;for(let u=0;u<a;u++)t.push({kind:n.folded?"folded-chair":"chair",u:o+1.4+u*.61,v:s+(n.chairOffset??.8),y:r,width:.48,depth:n.chairDepth??.48,height:.9,row:i});if(n.folded)continue;const l=n.firstTableGroups?[...((e=n.tableGroupsByRow)==null?void 0:e[i])||[n.firstTableGroups[i-1]]]:n.tableGroups||(i%2?[2,4,2,4,2]:[4,2,2,2,4]);if(n.firstTableGroups){let u=a-l.reduce((h,f)=>h+f,0);for(;u>0;){const h=u===5?3:Math.min(4,u);l.push(h),u-=h}}let c=0;for(const u of l){const h=Math.min(u,a-c);if(h<=0)break;t.push({kind:"table",u:o+1.4+(c+(h-1)/2)*.61,v:s+1.37,y:r,width:h*.61-.09,depth:.4,height:.76,row:i}),c+=h}}return t}const no=new Map(Un.map(n=>[n.id,{treads:Ul(n),objects:Cu(n)}]));function pr(n,t,e=.28){const{u:i,v:s}=ui(n,t),r=Gi(n,s),o=r-n.aisleWidth/2,a=n.farAisle+n.aisleWidth/2,l=e*Math.hypot(1,(n.nearInset||0)/(Pn(n)-n.rear));if(i<o+l||i>a-e||s<0||s>Pn(n)+yi(n)-e)return null;const c=Math.abs(i-r)<=n.aisleWidth/2-l,u=Math.abs(i-n.farAisle)<=n.aisleWidth/2-e;if(s<n.rear-.5&&!c)return null;let h;if(c||u)h=(no.get(n.id).treads.find(d=>s>=d.v0-1e-7&&s<d.v1-1e-7)||no.get(n.id).treads.at(-1)).y;else{const f=Math.max(n.firstRow||1,Math.min(n.rows,n.rows-Math.floor((s-n.rear+uo(n))/n.rowPitch))),d=ln(n,f);if(s<d-uo(n)||s>d+yi(n))return null;h=Zn(n,f)}for(const f of no.get(n.id).objects)if(!(f.y+f.height<h+.05||f.y>h+1.75)&&Math.hypot(Math.max(Math.abs(i-f.u)-f.width/2,0),Math.max(Math.abs(s-f.v)-f.depth/2,0))<e)return null;return{...we(n,i,s,h),u:i,v:s}}const Nl=v0.map(n=>{const t=Un.find(o=>o.section===n.section),e=ln(t,n.row),i=Zn(t,n.row),s=n.localU+Gi(t,e+(t.chairOffset??.8)),r=we(t,s,e,i);return{...n,id:`seat-${n.section}-${n.row}-${n.seat}`,name:`${n.section} · ${n.row}열 ${n.seat}번`,code:n.section,kind:"seat",floor:t.floor,seating:t.id,position:r,facade:we(t,s,e+(t.chairOffset??.8),i+1.52),arrivalYaw:Math.atan2(-t.forward.x,-t.forward.z),detail:"좌석 뒤 열 통로",accuracy:t.accuracy}});function ha(n,t,e){const i=lr(n.seating),s=pr(i,{x:t,z:e});return!s||Math.abs(s.y-n.y)>.225?!1:(Object.assign(n,{x:s.x,z:s.z,y:s.y}),!0)}const ph=(n,t)=>Math.hypot(n.x-t.x,n.y-t.y,n.z-t.z);function Pu(n,t,e){const i=Math.max(1,Math.ceil(Math.hypot(t.x-e.x,t.z-e.z)/.075));let s=t;for(let r=1;r<=i;r++){const o=r/i,a={x:t.x+(e.x-t.x)*o,z:t.z+(e.z-t.z)*o},l=pr(n,a);if(!l||Math.abs(l.y-s.y)>.225)return!1;s=l}return Math.abs(s.y-e.y)<.225}function $r(n,t,e,i){const s=Math.min(e,i),r=Math.max(e,i),o=u=>pr(n,we(n,Xn(n,t===n.farAisle?1:0,u),u)),a=[o(s)];for(const u of no.get(n.id).treads){if(u.v0<=s+1e-6||u.v0>=r-1e-6)continue;const h=o(u.v0),f=o(u.v0-1e-5);Math.abs(h.y-f.y)>.001&&a.push({...h,y:f.y}),a.push(h)}const l=o(r),c=o(Math.max(s,r-1e-5));return Math.abs(l.y-c.y)>.001&&a.push({...l,y:c.y}),a.push(l),e<=i?a:a.reverse()}function ua(n,t,e){const i=Il(n).reverse(),s=i.flatMap(m=>[0,1].map(_=>we(n,Xn(n,_,ln(n,m)),ln(n,m),Zn(n,m)))),r=s.map(()=>[]),o=(m,_,g)=>{const p=g.slice(1).reduce((R,E,y)=>R+ph(E,g[y]),0);r[m].push({to:_,points:g,weight:p}),r[_].push({to:m,points:[...g].reverse(),weight:p})};for(let m=0;m<i.length;m++)if(o(m*2,m*2+1,[s[m*2],s[m*2+1]]),m)for(let _=0;_<2;_++)o((m-1)*2+_,m*2+_,$r(n,_?n.farAisle:0,ln(n,n.rows-m+1),ln(n,n.rows-m)));const a=s.length;s.push(we(n,0,0)),r.push([]),o(a,0,[s[a],s[0]]);for(const m of[t,e]){const _=ui(n,m);for(const g of[0,1]){const p=Xn(n,g,_.v);if(Math.abs(_.u-p)>n.aisleWidth/2-.28+.001)continue;const R=pr(n,we(n,p,_.v));if(!R||Math.abs(R.y-m.y)>.001)continue;const E=s.length;s.push(R),r.push([]);for(let y=0;y<a;y++)y%2===g&&o(E,y,$r(n,g?n.farAisle:0,_.v,ui(n,s[y]).v));g===0&&o(E,a,$r(n,0,_.v,0))}}for(const m of[t,e]){const _=s.length;s.push({...m,seating:n.id}),r.push([]);const g=ui(n,m);for(let p=0;p<_;p++){const R=s[p],E=ui(n,R),y=[0,1].find(T=>Math.abs(g.u-Xn(n,T,g.v))<.001&&Math.abs(E.u-Xn(n,T,E.v))<.001);y!==void 0?o(_,p,$r(n,y?n.farAisle:0,g.v,E.v)):Math.abs(m.y-R.y)<.001&&Pu(n,m,R)&&o(_,p,[m,R])}}const l=s.length-2,c=s.length-1,u=s.map(()=>1/0),h=[],f=new Set;for(u[l]=0;f.size<s.length;){let m=-1;for(let _=0;_<s.length;_++)!f.has(_)&&(m<0||u[_]<u[m])&&(m=_);if(m<0||!Number.isFinite(u[m])||m===c)break;f.add(m);for(const _ of r[m])u[m]+_.weight<u[_.to]&&(u[_.to]=u[m]+_.weight,h[_.to]={from:m,edge:_})}if(!Number.isFinite(u[c]))return null;const d=[];for(let m=c;m!==l;){const _=h[m];d.unshift(_.edge.points),m=_.from}return d.flat().filter((m,_,g)=>!_||ph(m,g[_-1])>1e-5)}const Le=([n,t],e=0)=>({x:(n-450)*.32,z:(t-500)*.32,y:e}),mr=([n,t])=>Le([241+(n-225)*277/271,283+(t-279)*275/271],9.6),mh=[[178,350],[284,225],[530,225],[692,386],[692,615],[563,747],[319,747],[178,606],[178,350]],gh=[[720,391],[720,667],[606,775],[273,775],[115,619]],Ln=[{id:"3F",name:"3층 · 내야 / 외야",y:0,width:11.2,source:"O02",pixels:mh,path:mh.map(n=>Le(n))},{id:"5F",name:"5층 · SKY",y:9.6,width:12,source:"O04",pixels:gh,path:gh.map(mr)}],Mi=n=>Ln.find(t=>t.id===n),qt=(n,t)=>Math.hypot(n.x-t.x,n.z-t.z);function Lu(n,t,e){const i=qt(t,e),s=Math.max(0,Math.min(1,((n.x-t.x)*(e.x-t.x)+(n.z-t.z)*(e.z-t.z))/(i*i)));return{x:t.x+(e.x-t.x)*s,z:t.z+(e.z-t.z)*s,y:t.y+(e.y-t.y)*s,t:s,length:i}}function bn(n,t){let e;return t.path.slice(1).forEach((i,s)=>{const r=t.path[s],o=Lu(n,r,i),a=qt(n,o);(!e||a<e.distance)&&(e={...o,distance:a,segment:s})}),e}const Du=[["01",[699,383]],["02",[699,445]],["03",[699,507]],["04",[699,569]],["05",[699,631]],["06",[666,676]],["07",[622,720]],["08",[577,752]],["09",[514,752]],["10",[452,752]],["11",[391,752]],["12",[329,752]],["13",[274,742]],["14",[230,697]],["15",[185,652]],["16",[141,609]]],Jn=x0(Ln[1].path,Du.map(([n,t])=>({number:n,position:mr(t)})));for(const n of Ln)n.walkways=[{id:n.id+"-concourse",path:n.path,width:n.width},...n.id==="5F"?Jn.walkways:[]];Ln[0].walkways.push({id:"central-stair-approach",path:[{x:23.6,y:0,z:Ln[0].path[5].z},{x:23.6,y:0,z:96}],width:3.4,source:["O02","V23"],accuracy:"inferred-approach"});const Ol=[{id:"central-stair",name:"중앙 계단 · SKY 09",from:"3F",to:"5F",width:3.4,rise:.16,source:["O02","O03","O04","V23-08","V23-09","V23-11"],accuracy:"observed-endpoint-inferred-section",restrictedLanding:{floor:"4F",y:4.8,source:"V23-09",accuracy:"inferred-boundary-position-and-dimensions"},path:[{x:23.6,y:0,z:96},{x:23.6,y:2.4,z:101.2},{x:23.6,y:2.4,z:105},{x:28.1,y:2.4,z:105},{x:28.1,y:2.4,z:101.2},{x:28.1,y:4.8,z:96},{x:28.1,y:4.8,z:94.2},{x:23.6,y:4.8,z:94.2},{x:23.6,y:4.8,z:96},{x:23.6,y:7.2,z:101.2},{x:23.6,y:7.2,z:105},{x:28.1,y:7.2,z:105},{x:28.1,y:7.2,z:101.2},{x:28.1,y:9.6,z:96},{x:28.1,y:9.6,z:94.2}]}],Eo=[{id:"gate21",name:"GATE 21 · 3루 출입구",floor:"3F",pixel:[418,747],yaw:-Math.PI/2,source:"O06"},{id:"gate1",name:"GATE 1 · 1루 출입구",floor:"3F",pixel:[692,497],yaw:Math.PI/2,source:"O06"},{id:"gate2",name:"GATE 2 · 외야 출입구",floor:"3F",pixel:[341,225],yaw:Math.PI,source:"O06"}].map(n=>({...n,position:Le(n.pixel),kind:"gate",detail:"출입구에서 시작"})),w0=[{id:"nursing-t3",name:"수유실 · 3루",floor:"3F",pixel:[520,747],source:["O05","O07","V26b-13","V27-20"],alignWith:"section-T3-1",frontageGroup:"family-3F",kind:"nursing",detail:"3층 T3-1 구역 뒤"},{id:"nursing-t1",name:"수유실 · 1루",floor:"3F",pixel:[692,587],alignWith:"section-T1-1",entryShift:-1.2,source:["O05","O07"],accuracy:"observed-section-adjacency-inferred-position",kind:"nursing",detail:"3층 T1-1 구역 뒤"},{id:"kids",name:"어린이 쉼터",floor:"3F",pixel:[638,676],source:["O08","V26b-13","V27-21"],alignWith:"section-T3-1",entryShift:-3.2,frontageGroup:"family-3F",accuracy:"observed-adjacency-inferred-position",kind:"kids",detail:"3층 TC-2·3 구역 뒤",aliases:["키즈룸","놀이방","KIDS ZONE","키즈존"]},{id:"nursing-sky",name:"수유실 · SKY",floor:"5F",pixel:[501,775],source:"O07",kind:"nursing",detail:"스카이석 09 출입구 앞"},{id:"restroom-women-t3",name:"여자화장실 · 3루 테이블석",floor:"3F",pixel:[520,747],source:["O07","V26a-07"],alignWith:"section-T3-1",entryShift:3.8,frontageGroup:"family-3F",accuracy:"observed-adjacency-inferred-position",kind:"restroom",detail:"3층 T3-1 구역 뒤",aliases:["여성화장실","화장실","WC","restroom","toilet"]}].map(n=>({...n,position:n.floor==="5F"?mr(n.pixel):Le(n.pixel)})),Dn=[];function Iu(n,t,e,i,s,r){for(let o=0;o<t;o++){const a=o/(t-1),l=[i[0]+(s[0]-i[0])*a,i[1]+(s[1]-i[1])*a],c=`${n}${o+1}`;Dn.push({id:"section-"+c,name:`${c} 구역`,code:c,floor:e,pixel:l,position:Le(l),source:"O05",kind:"section",detail:r+" · 회랑 입구",accuracy:"schematic-entry"})}}Iu("1-",6,"3F",[692,520],[692,397],"1루");for(let n=7;n<=12;n++){const t=(n-7)/5,e=[682-131*t,376-132*t];Dn.push({id:`section-1-${n}`,name:`1-${n} 구역`,code:`1-${n}`,floor:"3F",pixel:e,position:Le(e),source:"O05",kind:"section",detail:"1루 내야 · 회랑 입구",accuracy:"schematic-entry"})}Iu("3-",6,"3F",[476,747],[336,747],"3루 블루존");for(let n=7;n<=12;n++){const t=(n-7)/5,e=[308-122*t,736-120*t];Dn.push({id:`section-3-${n}`,name:`3-${n} 구역`,code:`3-${n}`,floor:"3F",pixel:e,position:Le(e),source:"O05",kind:"section",detail:"3루 내야 · 회랑 입구",accuracy:"schematic-entry"})}const T0=[{first:1,last:9,a:[720,387],b:[720,642]},{first:10,last:14,a:[703,684],b:[619,767]},{first:15,last:24,a:[583,775],b:[283,775]},{first:25,last:31,a:[258,760],b:[142,647]}];for(const n of T0)for(let t=n.first;t<=n.last;t++){const e=(t-n.first)/(n.last-n.first),i=[n.a[0]+(n.b[0]-n.a[0])*e,n.a[1]+(n.b[1]-n.a[1])*e];Dn.push({id:`section-U${t}`,name:`U${t} 구역`,code:`U${t}`,floor:"5F",pixel:i,position:mr(i),source:"O05",kind:"section",detail:"SKY 관람석 · 회랑 입구",accuracy:"schematic-entry"})}for(const[n,t]of[["T3-1",[551,747]],["T3-2",[530,747]],["T3-3",[505,747]],["T1-1",[692,610]],["T1-2",[692,585]],["T1-3",[692,559]],["T1-4",[692,540]],["TC-1",[678,630]],["TC-2",[652,656]],["TC-3",[625,683]]])Dn.push({id:"section-"+n,name:n+" 구역",code:n,floor:"3F",pixel:t,position:Le(t),source:"O05",kind:"section",detail:"테이블석 · 회랑 입구",accuracy:"schematic-entry"});const b0=[...Array.from({length:8},(n,t)=>({code:`LF-${t+1}`,pixel:[178,583-t*29]})),{code:"LF-9",pixel:[188,338]},{code:"LF-10",pixel:[210,312]},...Array.from({length:8},(n,t)=>({code:`RF-${t+1}`,pixel:[515-t*28,225]})),{code:"RF-9",pixel:[278,236]},{code:"RF-10",pixel:[256,259]}];for(const{code:n,pixel:t}of b0)Dn.push({id:"section-"+n,name:n+" 구역",code:n,floor:"3F",pixel:t,position:Le(t),source:"O05",kind:"section",detail:n.startsWith("LF")?"좌측 외야 · 회랑 입구":"우측 외야 · 회랑 입구",accuracy:"schematic-entry"});Dn.push({id:"section-T3-4",name:"T3-4 구역",code:"T3-4",floor:"3F",pixel:[487,747],position:Le([487,747]),source:"O05",kind:"section",detail:"3루 테이블석 · 회랑 입구",accuracy:"schematic-entry"});const A0=Du.map(([n,t])=>({id:"sky-entrance-"+n,name:`SKY ${n} 출입구`,entranceNumber:n,floor:"5F",pixel:t,position:mr(t),kind:"entrance",source:["O04","O05"],detail:"5층 관람석 출입구 · 회랑 쪽",accuracy:"schematic-entry"})),hs=Jn.portals.find(n=>n.number==="13"),R0={destination:"section-3-5",column:{x:-28.84,z:74.29,y:0,floor:"3F",radius:.35},position:{x:-28.84,z:74.655,y:1.9},arrival:{x:-28.84,z:77.34,y:0},width:.68,height:.62,source:["O05","V15-219"],accuracy:"inferred-column-mount"},C0={destination:"section-3-3",column:{x:-14.84,z:74.29,y:0,floor:"3F",radius:.35},position:{x:-14.475,z:74.29,y:1.9},arrival:{x:-11.79,z:74.29,y:0},width:.68,height:.62,source:["O05","V18-concourse"],accuracy:"inferred-column-mount"},P0={destination:"section-3-1",column:{x:13.16,z:74.29,y:0,floor:"3F",radius:.35},position:{x:12.795,z:74.29,y:1.9},arrival:{x:10.11,z:74.29,y:0},text:"← 3-1",textScale:.38,width:.68,height:.62,source:["O05","V19-06"],accuracy:"inferred-column-mount"},fo=[R0,C0,P0,...Dn.filter(n=>/^3-(7|8|9|10|11)$/.test(n.code)).map(n=>{const t=Mi("3F"),e=bn(n.position,t),i=t.path[e.segment],s=t.path[e.segment+1],r=qt(i,s),o=-(s.z-i.z)/r,a=(s.x-i.x)/r,l={x:e.x+o*(t.width/2-.85),z:e.z+a*(t.width/2-.85),y:0,floor:"3F",radius:.35,sectionCode:n.code},c=["3-9","3-10","3-11"].includes(n.code)?[{id:"side",position:{x:l.x-.365,z:l.z,y:1.9},faceToward:{x:l.x-1,z:l.z}}]:[];return{destination:n.id,column:l,position:{x:l.x,z:l.z+.365,y:1.9},arrival:{x:l.x,z:l.z+3.05,y:0},additionalFaces:c,width:.68,height:.62,source:["O05","V06-16","V16-R3"],accuracy:"inferred-column-mount"}})],L0={id:"sky-front-13",name:"SKY 13 · 관람석 앞 통로",floor:"5F",kind:"walkway",detail:"5층 · 13번 출입구를 지나 관람석 앞으로",source:["O04","V05-13","V08-32","V09-10"],accuracy:"inferred-section",position:{...hs.end},facade:{x:hs.start.x+hs.direction.x*5.73,z:hs.start.z+hs.direction.z*5.73,y:hs.end.y+2.25}},_i=[...w0,...Eo,...Dn,...A0,L0].map(n=>{var _;if(n.kind==="walkway")return{...n,arrivalYaw:Math.atan2(n.position.x-n.facade.x,n.position.z-n.facade.z)};const t=fo.find(g=>g.destination===n.id);if(t){const{arrival:g,position:p,source:R,accuracy:E}=t;return{...n,position:{...g},facade:{...p},rawPosition:n.position,arrivalYaw:Math.atan2(g.x-p.x,g.z-p.z),source:R,accuracy:E,signMount:"column"}}const e=Mi(n.floor),i=n.kind==="entrance"?Jn.portals.find(g=>g.number===n.entranceNumber):null,s=bn((i==null?void 0:i.start)||((_=Dn.find(g=>g.id===n.alignWith))==null?void 0:_.position)||n.position,e),r=e.path[s.segment],o=e.path[s.segment+1],a=qt(r,o),l=-(o.z-r.z)/a,c=(o.x-r.x)/a,u=["section","entrance"].includes(n.kind)?1:-1;if(s.x+=(o.x-r.x)/a*(n.entryShift||0),s.z+=(o.z-r.z)/a*(n.entryShift||0),n.kind==="entrance"){const g=["07","11","12","15"].includes(n.entranceNumber)?-3.3:3.3;s.x+=(o.x-r.x)/a*g,s.z+=(o.z-r.z)/a*g}const h=n.kind==="entrance"?-2:["nursing","kids","restroom"].includes(n.kind)?e.width/2-4.05:0,f={x:s.x+l*h*u,y:s.y,z:s.z+c*h*u},d=n.kind==="entrance"?5.65:e.width/2-(["nursing","kids","restroom"].includes(n.kind)?.55:1.4),m={x:s.x+l*d*u,y:s.y+(n.kind==="gate"?2.05:n.kind==="entrance"?1.5:2.45),z:s.z+c*d*u};return{...n,position:f,facade:m,arrivalYaw:Math.atan2(f.x-m.x,f.z-m.z),rawPosition:n.position}}),cr=n=>_i.find(t=>t.id===n)||Nl.find(t=>t.id===n),fi=n=>n.toUpperCase().replace(/[\s·_]/g,"").replace(/U-(\d)/g,"U$1").replace(/\b(LF|RF)-?(\d)/g,"$1-$2").replace(/구역/g,"").replace(/^([13])-0+([1-9]\d*)$/,"$1-$2");function D0(n){const t=fi(n);if(!t)return _i.filter(s=>!["section","entrance","walkway"].includes(s.kind));const i=t.replace(/^(?:5층|5F)/,"").replace(/^스카이/,"SKY").match(/^(?:SKY-?(\d{1,2})(?:번)?(?:출입구|입구)?|(\d{1,2})(?:번)?(?:출입구|입구)|(?:출입구|입구)(\d{1,2}))$/);if(i){const s=String(Number(i[1]||i[2]||i[3])).padStart(2,"0");return _i.filter(r=>r.kind==="entrance"&&r.entranceNumber===s)}return _i.filter(s=>fi(s.name+" "+s.detail+" "+(s.code||"")+" "+(s.aliases||[]).join(" ")).includes(t))}const I0="시스템 업데이트 예정입니다. 불편을 드려 정말 죄송합니다.";function U0(n,t="",e=""){if(String(t).trim()||String(e).trim()){const r=String(t).trim().match(/^(\d+)\s*열?$/),o=String(e).trim().match(/^(\d+)\s*번?$/),a=r&&o&&Nl.find(l=>fi(l.section)===fi(n)&&l.row===Number(r[1])&&l.seat===Number(o[1]));return a?{destination:a}:{error:I0}}const i=fi(n),s=_i.find(r=>r.code&&fi(r.code)===i);return s?{destination:s}:{error:"구역을 찾을 수 없습니다. 3-1, T3-1, U25처럼 입력해 주세요."}}class Si{constructor(t,e){this.next=null,this.key=t,this.data=e,this.left=null,this.right=null}}function N0(n,t){return n>t?1:n<t?-1:0}function li(n,t,e){const i=new Si(null,null);let s=i,r=i;for(;;){const o=e(n,t.key);if(o<0){if(t.left===null)break;if(e(n,t.left.key)<0){const a=t.left;if(t.left=a.right,a.right=t,t=a,t.left===null)break}r.left=t,r=t,t=t.left}else if(o>0){if(t.right===null)break;if(e(n,t.right.key)>0){const a=t.right;if(t.right=a.left,a.left=t,t=a,t.right===null)break}s.right=t,s=t,t=t.right}else break}return s.right=t.left,r.left=t.right,t.left=i.right,t.right=i.left,t}function fa(n,t,e,i){const s=new Si(n,t);if(e===null)return s.left=s.right=null,s;e=li(n,e,i);const r=i(n,e.key);return r<0?(s.left=e.left,s.right=e,e.left=null):r>=0&&(s.right=e.right,s.left=e,e.right=null),s}function _h(n,t,e){let i=null,s=null;if(t){t=li(n,t,e);const r=e(t.key,n);r===0?(i=t.left,s=t.right):r<0?(s=t.right,t.right=null,i=t):(i=t.left,t.left=null,s=t)}return{left:i,right:s}}function O0(n,t,e){return t===null?n:(n===null||(t=li(n.key,t,e),t.left=n),t)}function ul(n,t,e,i,s){if(n){i(`${t}${e?"└── ":"├── "}${s(n)}
`);const r=t+(e?"    ":"│   ");n.left&&ul(n.left,r,!1,i,s),n.right&&ul(n.right,r,!0,i,s)}}class Fl{constructor(t=N0){this._root=null,this._size=0,this._comparator=t}insert(t,e){return this._size++,this._root=fa(t,e,this._root,this._comparator)}add(t,e){const i=new Si(t,e);this._root===null&&(i.left=i.right=null,this._size++,this._root=i);const s=this._comparator,r=li(t,this._root,s),o=s(t,r.key);return o===0?this._root=r:(o<0?(i.left=r.left,i.right=r,r.left=null):o>0&&(i.right=r.right,i.left=r,r.right=null),this._size++,this._root=i),this._root}remove(t){this._root=this._remove(t,this._root,this._comparator)}_remove(t,e,i){let s;return e===null?null:(e=li(t,e,i),i(t,e.key)===0?(e.left===null?s=e.right:(s=li(t,e.left,i),s.right=e.right),this._size--,s):e)}pop(){let t=this._root;if(t){for(;t.left;)t=t.left;return this._root=li(t.key,this._root,this._comparator),this._root=this._remove(t.key,this._root,this._comparator),{key:t.key,data:t.data}}return null}findStatic(t){let e=this._root;const i=this._comparator;for(;e;){const s=i(t,e.key);if(s===0)return e;s<0?e=e.left:e=e.right}return null}find(t){return this._root&&(this._root=li(t,this._root,this._comparator),this._comparator(t,this._root.key)!==0)?null:this._root}contains(t){let e=this._root;const i=this._comparator;for(;e;){const s=i(t,e.key);if(s===0)return!0;s<0?e=e.left:e=e.right}return!1}forEach(t,e){let i=this._root;const s=[];let r=!1;for(;!r;)i!==null?(s.push(i),i=i.left):s.length!==0?(i=s.pop(),t.call(e,i),i=i.right):r=!0;return this}range(t,e,i,s){const r=[],o=this._comparator;let a=this._root,l;for(;r.length!==0||a;)if(a)r.push(a),a=a.left;else{if(a=r.pop(),l=o(a.key,e),l>0)break;if(o(a.key,t)>=0&&i.call(s,a))return this;a=a.right}return this}keys(){const t=[];return this.forEach(({key:e})=>{t.push(e)}),t}values(){const t=[];return this.forEach(({data:e})=>{t.push(e)}),t}min(){return this._root?this.minNode(this._root).key:null}max(){return this._root?this.maxNode(this._root).key:null}minNode(t=this._root){if(t)for(;t.left;)t=t.left;return t}maxNode(t=this._root){if(t)for(;t.right;)t=t.right;return t}at(t){let e=this._root,i=!1,s=0;const r=[];for(;!i;)if(e)r.push(e),e=e.left;else if(r.length>0){if(e=r.pop(),s===t)return e;s++,e=e.right}else i=!0;return null}next(t){let e=this._root,i=null;if(t.right){for(i=t.right;i.left;)i=i.left;return i}const s=this._comparator;for(;e;){const r=s(t.key,e.key);if(r===0)break;r<0?(i=e,e=e.left):e=e.right}return i}prev(t){let e=this._root,i=null;if(t.left!==null){for(i=t.left;i.right;)i=i.right;return i}const s=this._comparator;for(;e;){const r=s(t.key,e.key);if(r===0)break;r<0?e=e.left:(i=e,e=e.right)}return i}clear(){return this._root=null,this._size=0,this}toList(){return z0(this._root)}load(t,e=[],i=!1){let s=t.length;const r=this._comparator;if(i&&pl(t,e,0,s-1,r),this._root===null)this._root=fl(t,e,0,s),this._size=s;else{const o=B0(this.toList(),F0(t,e),r);s=this._size+s,this._root=dl({head:o},0,s)}return this}isEmpty(){return this._root===null}get size(){return this._size}get root(){return this._root}toString(t=e=>String(e.key)){const e=[];return ul(this._root,"",!0,i=>e.push(i),t),e.join("")}update(t,e,i){const s=this._comparator;let{left:r,right:o}=_h(t,this._root,s);s(t,e)<0?o=fa(e,i,o,s):r=fa(e,i,r,s),this._root=O0(r,o,s)}split(t){return _h(t,this._root,this._comparator)}*[Symbol.iterator](){let t=this._root;const e=[];let i=!1;for(;!i;)t!==null?(e.push(t),t=t.left):e.length!==0?(t=e.pop(),yield t,t=t.right):i=!0}}function fl(n,t,e,i){const s=i-e;if(s>0){const r=e+Math.floor(s/2),o=n[r],a=t[r],l=new Si(o,a);return l.left=fl(n,t,e,r),l.right=fl(n,t,r+1,i),l}return null}function F0(n,t){const e=new Si(null,null);let i=e;for(let s=0;s<n.length;s++)i=i.next=new Si(n[s],t[s]);return i.next=null,e.next}function z0(n){let t=n;const e=[];let i=!1;const s=new Si(null,null);let r=s;for(;!i;)t?(e.push(t),t=t.left):e.length>0?(t=r=r.next=e.pop(),t=t.right):i=!0;return r.next=null,s.next}function dl(n,t,e){const i=e-t;if(i>0){const s=t+Math.floor(i/2),r=dl(n,t,s),o=n.head;return o.left=r,n.head=n.head.next,o.right=dl(n,s+1,e),o}return null}function B0(n,t,e){const i=new Si(null,null);let s=i,r=n,o=t;for(;r!==null&&o!==null;)e(r.key,o.key)<0?(s.next=r,r=r.next):(s.next=o,o=o.next),s=s.next;return r!==null?s.next=r:o!==null&&(s.next=o),i.next}function pl(n,t,e,i,s){if(e>=i)return;const r=n[e+i>>1];let o=e-1,a=i+1;for(;;){do o++;while(s(n[o],r)<0);do a--;while(s(n[a],r)>0);if(o>=a)break;let l=n[o];n[o]=n[a],n[a]=l,l=t[o],t[o]=t[a],t[a]=l}pl(n,t,e,a,s),pl(n,t,a+1,i,s)}const qn=11102230246251565e-32,Ue=134217729,k0=(3+8*qn)*qn;function da(n,t,e,i,s){let r,o,a,l,c=t[0],u=i[0],h=0,f=0;u>c==u>-c?(r=c,c=t[++h]):(r=u,u=i[++f]);let d=0;if(h<n&&f<e)for(u>c==u>-c?(o=c+r,a=r-(o-c),c=t[++h]):(o=u+r,a=r-(o-u),u=i[++f]),r=o,a!==0&&(s[d++]=a);h<n&&f<e;)u>c==u>-c?(o=r+c,l=o-r,a=r-(o-l)+(c-l),c=t[++h]):(o=r+u,l=o-r,a=r-(o-l)+(u-l),u=i[++f]),r=o,a!==0&&(s[d++]=a);for(;h<n;)o=r+c,l=o-r,a=r-(o-l)+(c-l),c=t[++h],r=o,a!==0&&(s[d++]=a);for(;f<e;)o=r+u,l=o-r,a=r-(o-l)+(u-l),u=i[++f],r=o,a!==0&&(s[d++]=a);return(r!==0||d===0)&&(s[d++]=r),d}function V0(n,t){let e=t[0];for(let i=1;i<n;i++)e+=t[i];return e}function dt(n){return new Float64Array(n)}const H0=(3+16*qn)*qn,G0=(2+12*qn)*qn,W0=(9+64*qn)*qn*qn,us=dt(4),xh=dt(8),vh=dt(12),yh=dt(16),Fe=dt(4);function X0(n,t,e,i,s,r,o){let a,l,c,u,h,f,d,m,_,g,p,R,E,y,T,C,P,D;const v=n-s,S=e-s,I=t-r,z=i-r;y=v*z,f=Ue*v,d=f-(f-v),m=v-d,f=Ue*z,_=f-(f-z),g=z-_,T=m*g-(y-d*_-m*_-d*g),C=I*S,f=Ue*I,d=f-(f-I),m=I-d,f=Ue*S,_=f-(f-S),g=S-_,P=m*g-(C-d*_-m*_-d*g),p=T-P,h=T-p,us[0]=T-(p+h)+(h-P),R=y+p,h=R-y,E=y-(R-h)+(p-h),p=E-C,h=E-p,us[1]=E-(p+h)+(h-C),D=R+p,h=D-R,us[2]=R-(D-h)+(p-h),us[3]=D;let q=V0(4,us),ot=G0*o;if(q>=ot||-q>=ot||(h=n-v,a=n-(v+h)+(h-s),h=e-S,c=e-(S+h)+(h-s),h=t-I,l=t-(I+h)+(h-r),h=i-z,u=i-(z+h)+(h-r),a===0&&l===0&&c===0&&u===0)||(ot=W0*o+k0*Math.abs(q),q+=v*u+z*a-(I*c+S*l),q>=ot||-q>=ot))return q;y=a*z,f=Ue*a,d=f-(f-a),m=a-d,f=Ue*z,_=f-(f-z),g=z-_,T=m*g-(y-d*_-m*_-d*g),C=l*S,f=Ue*l,d=f-(f-l),m=l-d,f=Ue*S,_=f-(f-S),g=S-_,P=m*g-(C-d*_-m*_-d*g),p=T-P,h=T-p,Fe[0]=T-(p+h)+(h-P),R=y+p,h=R-y,E=y-(R-h)+(p-h),p=E-C,h=E-p,Fe[1]=E-(p+h)+(h-C),D=R+p,h=D-R,Fe[2]=R-(D-h)+(p-h),Fe[3]=D;const $=da(4,us,4,Fe,xh);y=v*u,f=Ue*v,d=f-(f-v),m=v-d,f=Ue*u,_=f-(f-u),g=u-_,T=m*g-(y-d*_-m*_-d*g),C=I*c,f=Ue*I,d=f-(f-I),m=I-d,f=Ue*c,_=f-(f-c),g=c-_,P=m*g-(C-d*_-m*_-d*g),p=T-P,h=T-p,Fe[0]=T-(p+h)+(h-P),R=y+p,h=R-y,E=y-(R-h)+(p-h),p=E-C,h=E-p,Fe[1]=E-(p+h)+(h-C),D=R+p,h=D-R,Fe[2]=R-(D-h)+(p-h),Fe[3]=D;const et=da($,xh,4,Fe,vh);y=a*u,f=Ue*a,d=f-(f-a),m=a-d,f=Ue*u,_=f-(f-u),g=u-_,T=m*g-(y-d*_-m*_-d*g),C=l*c,f=Ue*l,d=f-(f-l),m=l-d,f=Ue*c,_=f-(f-c),g=c-_,P=m*g-(C-d*_-m*_-d*g),p=T-P,h=T-p,Fe[0]=T-(p+h)+(h-P),R=y+p,h=R-y,E=y-(R-h)+(p-h),p=E-C,h=E-p,Fe[1]=E-(p+h)+(h-C),D=R+p,h=D-R,Fe[2]=R-(D-h)+(p-h),Fe[3]=D;const lt=da(et,vh,4,Fe,yh);return yh[lt-1]}function Y0(n,t,e,i,s,r){const o=(t-r)*(e-s),a=(n-s)*(i-r),l=o-a,c=Math.abs(o+a);return Math.abs(l)>=H0*c?l:-X0(n,t,e,i,s,r,c)}dt(4);dt(4);dt(4);dt(4);dt(4);dt(4);dt(4);dt(4);dt(4);dt(8);dt(8);dt(8);dt(4);dt(8);dt(8);dt(16);dt(12);dt(192);dt(192);dt(4);dt(4);dt(4);dt(4);dt(4);dt(4);dt(4);dt(4);dt(8);dt(8);dt(8);dt(8);dt(8);dt(8);dt(8);dt(8);dt(8);dt(4);dt(4);dt(4);dt(8);dt(16);dt(16);dt(16);dt(32);dt(32);dt(48);dt(64);dt(1152);dt(1152);dt(4);dt(4);dt(4);dt(4);dt(4);dt(4);dt(4);dt(4);dt(4);dt(4);dt(24);dt(24);dt(24);dt(24);dt(24);dt(24);dt(24);dt(24);dt(24);dt(24);dt(1152);dt(1152);dt(1152);dt(1152);dt(1152);dt(2304);dt(2304);dt(3456);dt(5760);dt(8);dt(8);dt(8);dt(16);dt(24);dt(48);dt(48);dt(96);dt(192);dt(384);dt(384);dt(384);dt(768);dt(96);dt(96);dt(96);dt(1152);var Uu={};const Gs=(n,t)=>n.ll.x<=t.x&&t.x<=n.ur.x&&n.ll.y<=t.y&&t.y<=n.ur.y,ml=(n,t)=>{if(t.ur.x<n.ll.x||n.ur.x<t.ll.x||t.ur.y<n.ll.y||n.ur.y<t.ll.y)return null;const e=n.ll.x<t.ll.x?t.ll.x:n.ll.x,i=n.ur.x<t.ur.x?n.ur.x:t.ur.x,s=n.ll.y<t.ll.y?t.ll.y:n.ll.y,r=n.ur.y<t.ur.y?n.ur.y:t.ur.y;return{ll:{x:e,y:s},ur:{x:i,y:r}}};let di=Number.EPSILON;di===void 0&&(di=Math.pow(2,-52));const q0=di*di,Mh=(n,t)=>{if(-di<n&&n<di&&-di<t&&t<di)return 0;const e=n-t;return e*e<q0*n*t?0:n<t?-1:1};class $0{constructor(){this.reset()}reset(){this.xRounder=new Sh,this.yRounder=new Sh}round(t,e){return{x:this.xRounder.round(t),y:this.yRounder.round(e)}}}class Sh{constructor(){this.tree=new Fl,this.round(0)}round(t){const e=this.tree.add(t),i=this.tree.prev(e);if(i!==null&&Mh(e.key,i.key)===0)return this.tree.remove(t),i.key;const s=this.tree.next(e);return s!==null&&Mh(e.key,s.key)===0?(this.tree.remove(t),s.key):t}}const hr=new $0,io=(n,t)=>n.x*t.y-n.y*t.x,Nu=(n,t)=>n.x*t.x+n.y*t.y,Eh=(n,t,e)=>{const i=Y0(n.x,n.y,t.x,t.y,e.x,e.y);return i>0?-1:i<0?1:0},po=n=>Math.sqrt(Nu(n,n)),j0=(n,t,e)=>{const i={x:t.x-n.x,y:t.y-n.y},s={x:e.x-n.x,y:e.y-n.y};return io(s,i)/po(s)/po(i)},K0=(n,t,e)=>{const i={x:t.x-n.x,y:t.y-n.y},s={x:e.x-n.x,y:e.y-n.y};return Nu(s,i)/po(s)/po(i)},wh=(n,t,e)=>t.y===0?null:{x:n.x+t.x/t.y*(e-n.y),y:e},Th=(n,t,e)=>t.x===0?null:{x:e,y:n.y+t.y/t.x*(e-n.x)},Z0=(n,t,e,i)=>{if(t.x===0)return Th(e,i,n.x);if(i.x===0)return Th(n,t,e.x);if(t.y===0)return wh(e,i,n.y);if(i.y===0)return wh(n,t,e.y);const s=io(t,i);if(s==0)return null;const r={x:e.x-n.x,y:e.y-n.y},o=io(r,t)/s,a=io(r,i)/s,l=n.x+a*t.x,c=e.x+o*i.x,u=n.y+a*t.y,h=e.y+o*i.y,f=(l+c)/2,d=(u+h)/2;return{x:f,y:d}};class on{static compare(t,e){const i=on.comparePoints(t.point,e.point);return i!==0?i:(t.point!==e.point&&t.link(e),t.isLeft!==e.isLeft?t.isLeft?1:-1:xi.compare(t.segment,e.segment))}static comparePoints(t,e){return t.x<e.x?-1:t.x>e.x?1:t.y<e.y?-1:t.y>e.y?1:0}constructor(t,e){t.events===void 0?t.events=[this]:t.events.push(this),this.point=t,this.isLeft=e}link(t){if(t.point===this.point)throw new Error("Tried to link already linked events");const e=t.point.events;for(let i=0,s=e.length;i<s;i++){const r=e[i];this.point.events.push(r),r.point=this.point}this.checkForConsuming()}checkForConsuming(){const t=this.point.events.length;for(let e=0;e<t;e++){const i=this.point.events[e];if(i.segment.consumedBy===void 0)for(let s=e+1;s<t;s++){const r=this.point.events[s];r.consumedBy===void 0&&i.otherSE.point.events===r.otherSE.point.events&&i.segment.consume(r.segment)}}}getAvailableLinkedEvents(){const t=[];for(let e=0,i=this.point.events.length;e<i;e++){const s=this.point.events[e];s!==this&&!s.segment.ringOut&&s.segment.isInResult()&&t.push(s)}return t}getLeftmostComparator(t){const e=new Map,i=s=>{const r=s.otherSE;e.set(s,{sine:j0(this.point,t.point,r.point),cosine:K0(this.point,t.point,r.point)})};return(s,r)=>{e.has(s)||i(s),e.has(r)||i(r);const{sine:o,cosine:a}=e.get(s),{sine:l,cosine:c}=e.get(r);return o>=0&&l>=0?a<c?1:a>c?-1:0:o<0&&l<0?a<c?-1:a>c?1:0:l<o?-1:l>o?1:0}}}let J0=0;class xi{static compare(t,e){const i=t.leftSE.point.x,s=e.leftSE.point.x,r=t.rightSE.point.x,o=e.rightSE.point.x;if(o<i)return 1;if(r<s)return-1;const a=t.leftSE.point.y,l=e.leftSE.point.y,c=t.rightSE.point.y,u=e.rightSE.point.y;if(i<s){if(l<a&&l<c)return 1;if(l>a&&l>c)return-1;const h=t.comparePoint(e.leftSE.point);if(h<0)return 1;if(h>0)return-1;const f=e.comparePoint(t.rightSE.point);return f!==0?f:-1}if(i>s){if(a<l&&a<u)return-1;if(a>l&&a>u)return 1;const h=e.comparePoint(t.leftSE.point);if(h!==0)return h;const f=t.comparePoint(e.rightSE.point);return f<0?1:f>0?-1:1}if(a<l)return-1;if(a>l)return 1;if(r<o){const h=e.comparePoint(t.rightSE.point);if(h!==0)return h}if(r>o){const h=t.comparePoint(e.rightSE.point);if(h<0)return 1;if(h>0)return-1}if(r!==o){const h=c-a,f=r-i,d=u-l,m=o-s;if(h>f&&d<m)return 1;if(h<f&&d>m)return-1}return r>o?1:r<o||c<u?-1:c>u?1:t.id<e.id?-1:t.id>e.id?1:0}constructor(t,e,i,s){this.id=++J0,this.leftSE=t,t.segment=this,t.otherSE=e,this.rightSE=e,e.segment=this,e.otherSE=t,this.rings=i,this.windings=s}static fromRing(t,e,i){let s,r,o;const a=on.comparePoints(t,e);if(a<0)s=t,r=e,o=1;else if(a>0)s=e,r=t,o=-1;else throw new Error(`Tried to create degenerate segment at [${t.x}, ${t.y}]`);const l=new on(s,!0),c=new on(r,!1);return new xi(l,c,[i],[o])}replaceRightSE(t){this.rightSE=t,this.rightSE.segment=this,this.rightSE.otherSE=this.leftSE,this.leftSE.otherSE=this.rightSE}bbox(){const t=this.leftSE.point.y,e=this.rightSE.point.y;return{ll:{x:this.leftSE.point.x,y:t<e?t:e},ur:{x:this.rightSE.point.x,y:t>e?t:e}}}vector(){return{x:this.rightSE.point.x-this.leftSE.point.x,y:this.rightSE.point.y-this.leftSE.point.y}}isAnEndpoint(t){return t.x===this.leftSE.point.x&&t.y===this.leftSE.point.y||t.x===this.rightSE.point.x&&t.y===this.rightSE.point.y}comparePoint(t){if(this.isAnEndpoint(t))return 0;const e=this.leftSE.point,i=this.rightSE.point,s=this.vector();if(e.x===i.x)return t.x===e.x?0:t.x<e.x?1:-1;const r=(t.y-e.y)/s.y,o=e.x+r*s.x;if(t.x===o)return 0;const a=(t.x-e.x)/s.x,l=e.y+a*s.y;return t.y===l?0:t.y<l?-1:1}getIntersection(t){const e=this.bbox(),i=t.bbox(),s=ml(e,i);if(s===null)return null;const r=this.leftSE.point,o=this.rightSE.point,a=t.leftSE.point,l=t.rightSE.point,c=Gs(e,a)&&this.comparePoint(a)===0,u=Gs(i,r)&&t.comparePoint(r)===0,h=Gs(e,l)&&this.comparePoint(l)===0,f=Gs(i,o)&&t.comparePoint(o)===0;if(u&&c)return f&&!h?o:!f&&h?l:null;if(u)return h&&r.x===l.x&&r.y===l.y?null:r;if(c)return f&&o.x===a.x&&o.y===a.y?null:a;if(f&&h)return null;if(f)return o;if(h)return l;const d=Z0(r,this.vector(),a,t.vector());return d===null||!Gs(s,d)?null:hr.round(d.x,d.y)}split(t){const e=[],i=t.events!==void 0,s=new on(t,!0),r=new on(t,!1),o=this.rightSE;this.replaceRightSE(r),e.push(r),e.push(s);const a=new xi(s,o,this.rings.slice(),this.windings.slice());return on.comparePoints(a.leftSE.point,a.rightSE.point)>0&&a.swapEvents(),on.comparePoints(this.leftSE.point,this.rightSE.point)>0&&this.swapEvents(),i&&(s.checkForConsuming(),r.checkForConsuming()),e}swapEvents(){const t=this.rightSE;this.rightSE=this.leftSE,this.leftSE=t,this.leftSE.isLeft=!0,this.rightSE.isLeft=!1;for(let e=0,i=this.windings.length;e<i;e++)this.windings[e]*=-1}consume(t){let e=this,i=t;for(;e.consumedBy;)e=e.consumedBy;for(;i.consumedBy;)i=i.consumedBy;const s=xi.compare(e,i);if(s!==0){if(s>0){const r=e;e=i,i=r}if(e.prev===i){const r=e;e=i,i=r}for(let r=0,o=i.rings.length;r<o;r++){const a=i.rings[r],l=i.windings[r],c=e.rings.indexOf(a);c===-1?(e.rings.push(a),e.windings.push(l)):e.windings[c]+=l}i.rings=null,i.windings=null,i.consumedBy=e,i.leftSE.consumedBy=e.leftSE,i.rightSE.consumedBy=e.rightSE}}prevInResult(){return this._prevInResult!==void 0?this._prevInResult:(this.prev?this.prev.isInResult()?this._prevInResult=this.prev:this._prevInResult=this.prev.prevInResult():this._prevInResult=null,this._prevInResult)}beforeState(){if(this._beforeState!==void 0)return this._beforeState;if(!this.prev)this._beforeState={rings:[],windings:[],multiPolys:[]};else{const t=this.prev.consumedBy||this.prev;this._beforeState=t.afterState()}return this._beforeState}afterState(){if(this._afterState!==void 0)return this._afterState;const t=this.beforeState();this._afterState={rings:t.rings.slice(0),windings:t.windings.slice(0),multiPolys:[]};const e=this._afterState.rings,i=this._afterState.windings,s=this._afterState.multiPolys;for(let a=0,l=this.rings.length;a<l;a++){const c=this.rings[a],u=this.windings[a],h=e.indexOf(c);h===-1?(e.push(c),i.push(u)):i[h]+=u}const r=[],o=[];for(let a=0,l=e.length;a<l;a++){if(i[a]===0)continue;const c=e[a],u=c.poly;if(o.indexOf(u)===-1)if(c.isExterior)r.push(u);else{o.indexOf(u)===-1&&o.push(u);const h=r.indexOf(c.poly);h!==-1&&r.splice(h,1)}}for(let a=0,l=r.length;a<l;a++){const c=r[a].multiPoly;s.indexOf(c)===-1&&s.push(c)}return this._afterState}isInResult(){if(this.consumedBy)return!1;if(this._isInResult!==void 0)return this._isInResult;const t=this.beforeState().multiPolys,e=this.afterState().multiPolys;switch(_n.type){case"union":{const i=t.length===0,s=e.length===0;this._isInResult=i!==s;break}case"intersection":{let i,s;t.length<e.length?(i=t.length,s=e.length):(i=e.length,s=t.length),this._isInResult=s===_n.numMultiPolys&&i<s;break}case"xor":{const i=Math.abs(t.length-e.length);this._isInResult=i%2===1;break}case"difference":{const i=s=>s.length===1&&s[0].isSubject;this._isInResult=i(t)!==i(e);break}default:throw new Error(`Unrecognized operation type found ${_n.type}`)}return this._isInResult}}class bh{constructor(t,e,i){if(!Array.isArray(t)||t.length===0)throw new Error("Input geometry is not a valid Polygon or MultiPolygon");if(this.poly=e,this.isExterior=i,this.segments=[],typeof t[0][0]!="number"||typeof t[0][1]!="number")throw new Error("Input geometry is not a valid Polygon or MultiPolygon");const s=hr.round(t[0][0],t[0][1]);this.bbox={ll:{x:s.x,y:s.y},ur:{x:s.x,y:s.y}};let r=s;for(let o=1,a=t.length;o<a;o++){if(typeof t[o][0]!="number"||typeof t[o][1]!="number")throw new Error("Input geometry is not a valid Polygon or MultiPolygon");let l=hr.round(t[o][0],t[o][1]);l.x===r.x&&l.y===r.y||(this.segments.push(xi.fromRing(r,l,this)),l.x<this.bbox.ll.x&&(this.bbox.ll.x=l.x),l.y<this.bbox.ll.y&&(this.bbox.ll.y=l.y),l.x>this.bbox.ur.x&&(this.bbox.ur.x=l.x),l.y>this.bbox.ur.y&&(this.bbox.ur.y=l.y),r=l)}(s.x!==r.x||s.y!==r.y)&&this.segments.push(xi.fromRing(r,s,this))}getSweepEvents(){const t=[];for(let e=0,i=this.segments.length;e<i;e++){const s=this.segments[e];t.push(s.leftSE),t.push(s.rightSE)}return t}}class Q0{constructor(t,e){if(!Array.isArray(t))throw new Error("Input geometry is not a valid Polygon or MultiPolygon");this.exteriorRing=new bh(t[0],this,!0),this.bbox={ll:{x:this.exteriorRing.bbox.ll.x,y:this.exteriorRing.bbox.ll.y},ur:{x:this.exteriorRing.bbox.ur.x,y:this.exteriorRing.bbox.ur.y}},this.interiorRings=[];for(let i=1,s=t.length;i<s;i++){const r=new bh(t[i],this,!1);r.bbox.ll.x<this.bbox.ll.x&&(this.bbox.ll.x=r.bbox.ll.x),r.bbox.ll.y<this.bbox.ll.y&&(this.bbox.ll.y=r.bbox.ll.y),r.bbox.ur.x>this.bbox.ur.x&&(this.bbox.ur.x=r.bbox.ur.x),r.bbox.ur.y>this.bbox.ur.y&&(this.bbox.ur.y=r.bbox.ur.y),this.interiorRings.push(r)}this.multiPoly=e}getSweepEvents(){const t=this.exteriorRing.getSweepEvents();for(let e=0,i=this.interiorRings.length;e<i;e++){const s=this.interiorRings[e].getSweepEvents();for(let r=0,o=s.length;r<o;r++)t.push(s[r])}return t}}class Ah{constructor(t,e){if(!Array.isArray(t))throw new Error("Input geometry is not a valid Polygon or MultiPolygon");try{typeof t[0][0][0]=="number"&&(t=[t])}catch{}this.polys=[],this.bbox={ll:{x:Number.POSITIVE_INFINITY,y:Number.POSITIVE_INFINITY},ur:{x:Number.NEGATIVE_INFINITY,y:Number.NEGATIVE_INFINITY}};for(let i=0,s=t.length;i<s;i++){const r=new Q0(t[i],this);r.bbox.ll.x<this.bbox.ll.x&&(this.bbox.ll.x=r.bbox.ll.x),r.bbox.ll.y<this.bbox.ll.y&&(this.bbox.ll.y=r.bbox.ll.y),r.bbox.ur.x>this.bbox.ur.x&&(this.bbox.ur.x=r.bbox.ur.x),r.bbox.ur.y>this.bbox.ur.y&&(this.bbox.ur.y=r.bbox.ur.y),this.polys.push(r)}this.isSubject=e}getSweepEvents(){const t=[];for(let e=0,i=this.polys.length;e<i;e++){const s=this.polys[e].getSweepEvents();for(let r=0,o=s.length;r<o;r++)t.push(s[r])}return t}}class mo{static factory(t){const e=[];for(let i=0,s=t.length;i<s;i++){const r=t[i];if(!r.isInResult()||r.ringOut)continue;let o=null,a=r.leftSE,l=r.rightSE;const c=[a],u=a.point,h=[];for(;o=a,a=l,c.push(a),a.point!==u;)for(;;){const f=a.getAvailableLinkedEvents();if(f.length===0){const _=c[0].point,g=c[c.length-1].point;throw new Error(`Unable to complete output ring starting at [${_.x}, ${_.y}]. Last matching segment found ends at [${g.x}, ${g.y}].`)}if(f.length===1){l=f[0].otherSE;break}let d=null;for(let _=0,g=h.length;_<g;_++)if(h[_].point===a.point){d=_;break}if(d!==null){const _=h.splice(d)[0],g=c.splice(_.index);g.unshift(g[0].otherSE),e.push(new mo(g.reverse()));continue}h.push({index:c.length,point:a.point});const m=a.getLeftmostComparator(o);l=f.sort(m)[0].otherSE;break}e.push(new mo(c))}return e}constructor(t){this.events=t;for(let e=0,i=t.length;e<i;e++)t[e].segment.ringOut=this;this.poly=null}getGeom(){let t=this.events[0].point;const e=[t];for(let c=1,u=this.events.length-1;c<u;c++){const h=this.events[c].point,f=this.events[c+1].point;Eh(h,t,f)!==0&&(e.push(h),t=h)}if(e.length===1)return null;const i=e[0],s=e[1];Eh(i,t,s)===0&&e.shift(),e.push(e[0]);const r=this.isExteriorRing()?1:-1,o=this.isExteriorRing()?0:e.length-1,a=this.isExteriorRing()?e.length:-1,l=[];for(let c=o;c!=a;c+=r)l.push([e[c].x,e[c].y]);return l}isExteriorRing(){if(this._isExteriorRing===void 0){const t=this.enclosingRing();this._isExteriorRing=t?!t.isExteriorRing():!0}return this._isExteriorRing}enclosingRing(){return this._enclosingRing===void 0&&(this._enclosingRing=this._calcEnclosingRing()),this._enclosingRing}_calcEnclosingRing(){let t=this.events[0];for(let s=1,r=this.events.length;s<r;s++){const o=this.events[s];on.compare(t,o)>0&&(t=o)}let e=t.segment.prevInResult(),i=e?e.prevInResult():null;for(;;){if(!e)return null;if(!i)return e.ringOut;if(i.ringOut!==e.ringOut)return i.ringOut.enclosingRing()!==e.ringOut?e.ringOut:e.ringOut.enclosingRing();e=i.prevInResult(),i=e?e.prevInResult():null}}}class Rh{constructor(t){this.exteriorRing=t,t.poly=this,this.interiorRings=[]}addInterior(t){this.interiorRings.push(t),t.poly=this}getGeom(){const t=[this.exteriorRing.getGeom()];if(t[0]===null)return null;for(let e=0,i=this.interiorRings.length;e<i;e++){const s=this.interiorRings[e].getGeom();s!==null&&t.push(s)}return t}}class tv{constructor(t){this.rings=t,this.polys=this._composePolys(t)}getGeom(){const t=[];for(let e=0,i=this.polys.length;e<i;e++){const s=this.polys[e].getGeom();s!==null&&t.push(s)}return t}_composePolys(t){const e=[];for(let i=0,s=t.length;i<s;i++){const r=t[i];if(!r.poly)if(r.isExteriorRing())e.push(new Rh(r));else{const o=r.enclosingRing();o.poly||e.push(new Rh(o)),o.poly.addInterior(r)}}return e}}class ev{constructor(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:xi.compare;this.queue=t,this.tree=new Fl(e),this.segments=[]}process(t){const e=t.segment,i=[];if(t.consumedBy)return t.isLeft?this.queue.remove(t.otherSE):this.tree.remove(e),i;const s=t.isLeft?this.tree.add(e):this.tree.find(e);if(!s)throw new Error(`Unable to find segment #${e.id} [${e.leftSE.point.x}, ${e.leftSE.point.y}] -> [${e.rightSE.point.x}, ${e.rightSE.point.y}] in SweepLine tree.`);let r=s,o=s,a,l;for(;a===void 0;)r=this.tree.prev(r),r===null?a=null:r.key.consumedBy===void 0&&(a=r.key);for(;l===void 0;)o=this.tree.next(o),o===null?l=null:o.key.consumedBy===void 0&&(l=o.key);if(t.isLeft){let c=null;if(a){const h=a.getIntersection(e);if(h!==null&&(e.isAnEndpoint(h)||(c=h),!a.isAnEndpoint(h))){const f=this._splitSafely(a,h);for(let d=0,m=f.length;d<m;d++)i.push(f[d])}}let u=null;if(l){const h=l.getIntersection(e);if(h!==null&&(e.isAnEndpoint(h)||(u=h),!l.isAnEndpoint(h))){const f=this._splitSafely(l,h);for(let d=0,m=f.length;d<m;d++)i.push(f[d])}}if(c!==null||u!==null){let h=null;c===null?h=u:u===null?h=c:h=on.comparePoints(c,u)<=0?c:u,this.queue.remove(e.rightSE),i.push(e.rightSE);const f=e.split(h);for(let d=0,m=f.length;d<m;d++)i.push(f[d])}i.length>0?(this.tree.remove(e),i.push(t)):(this.segments.push(e),e.prev=a)}else{if(a&&l){const c=a.getIntersection(l);if(c!==null){if(!a.isAnEndpoint(c)){const u=this._splitSafely(a,c);for(let h=0,f=u.length;h<f;h++)i.push(u[h])}if(!l.isAnEndpoint(c)){const u=this._splitSafely(l,c);for(let h=0,f=u.length;h<f;h++)i.push(u[h])}}}this.tree.remove(e)}return i}_splitSafely(t,e){this.tree.remove(t);const i=t.rightSE;this.queue.remove(i);const s=t.split(e);return s.push(i),t.consumedBy===void 0&&this.tree.add(t),s}}const Ch=typeof process<"u"&&Uu.POLYGON_CLIPPING_MAX_QUEUE_SIZE||1e6,nv=typeof process<"u"&&Uu.POLYGON_CLIPPING_MAX_SWEEPLINE_SEGMENTS||1e6;class iv{run(t,e,i){_n.type=t,hr.reset();const s=[new Ah(e,!0)];for(let h=0,f=i.length;h<f;h++)s.push(new Ah(i[h],!1));if(_n.numMultiPolys=s.length,_n.type==="difference"){const h=s[0];let f=1;for(;f<s.length;)ml(s[f].bbox,h.bbox)!==null?f++:s.splice(f,1)}if(_n.type==="intersection")for(let h=0,f=s.length;h<f;h++){const d=s[h];for(let m=h+1,_=s.length;m<_;m++)if(ml(d.bbox,s[m].bbox)===null)return[]}const r=new Fl(on.compare);for(let h=0,f=s.length;h<f;h++){const d=s[h].getSweepEvents();for(let m=0,_=d.length;m<_;m++)if(r.insert(d[m]),r.size>Ch)throw new Error("Infinite loop when putting segment endpoints in a priority queue (queue size too big).")}const o=new ev(r);let a=r.size,l=r.pop();for(;l;){const h=l.key;if(r.size===a){const d=h.segment;throw new Error(`Unable to pop() ${h.isLeft?"left":"right"} SweepEvent [${h.point.x}, ${h.point.y}] from segment #${d.id} [${d.leftSE.point.x}, ${d.leftSE.point.y}] -> [${d.rightSE.point.x}, ${d.rightSE.point.y}] from queue.`)}if(r.size>Ch)throw new Error("Infinite loop when passing sweep line over endpoints (queue size too big).");if(o.segments.length>nv)throw new Error("Infinite loop when passing sweep line over endpoints (too many sweep line segments).");const f=o.process(h);for(let d=0,m=f.length;d<m;d++){const _=f[d];_.consumedBy===void 0&&r.insert(_)}a=r.size,l=r.pop()}hr.reset();const c=mo.factory(o.segments);return new tv(c).getGeom()}}const _n=new iv,sv=function(n){for(var t=arguments.length,e=new Array(t>1?t-1:0),i=1;i<t;i++)e[i-1]=arguments[i];return _n.run("union",n,e)},rv=function(n){for(var t=arguments.length,e=new Array(t>1?t-1:0),i=1;i<t;i++)e[i-1]=arguments[i];return _n.run("intersection",n,e)},ov=function(n){for(var t=arguments.length,e=new Array(t>1?t-1:0),i=1;i<t;i++)e[i-1]=arguments[i];return _n.run("xor",n,e)},av=function(n){for(var t=arguments.length,e=new Array(t>1?t-1:0),i=1;i<t;i++)e[i-1]=arguments[i];return _n.run("difference",n,e)};var An={union:sv,intersection:rv,xor:ov,difference:av};const ms=.28,ur=n=>n.map(t=>t.map(e=>Math.round(e*1e4)/1e4));function cn(n,t,e){const i=qt(n,t),s=-(t.z-n.z)/i*e/2,r=(t.x-n.x)/i*e/2;return ur([[n.x+s,n.z+r],[t.x+s,t.z+r],[t.x-s,t.z-r],[n.x-s,n.z-r],[n.x+s,n.z+r]])}const pa=new WeakMap;function Ou(n){return pa.has(n)||pa.set(n,{minX:Math.min(...n.map(t=>t[0])),maxX:Math.max(...n.map(t=>t[0])),minZ:Math.min(...n.map(t=>t[1])),maxZ:Math.max(...n.map(t=>t[1]))}),pa.get(n)}function Ph(n,t,e){const i=Ou(e);if(n<i.minX||n>i.maxX||t<i.minZ||t>i.maxZ)return!1;let s=!1;for(let r=0,o=e.length-1;r<e.length;o=r++){const a=e[r],l=e[o];a[1]>t!=l[1]>t&&n<(l[0]-a[0])*(t-a[1])/(l[1]-a[1])+a[0]&&(s=!s)}return s}function ys(n,t,e){return e.some(i=>Ph(n,t,i[0])&&!i.slice(1).some(s=>Ph(n,t,s)))}const go=Ln.map(n=>{const t=[];for(const r of n.walkways){t.push(...r.path.slice(1).map((o,a)=>[cn(r.path[a],o,r.width)]));for(const o of r.path){const a=r.width/2;t.push([[[o.x-a,o.z-a],[o.x+a,o.z-a],[o.x+a,o.z+a],[o.x-a,o.z+a],[o.x-a,o.z-a]]])}}let e=An.union(...t.map(r=>r.map(ur)));const i=Ol.filter(r=>r.to===n.id).flatMap(r=>r.path.slice(1).flatMap((o,a)=>{const l=r.path[a];if(o.y<=l.y||o.y<=n.y-1.9)return[];const c=Math.max(0,Math.min(1,(n.y-1.9-l.y)/(o.y-l.y))),u={x:l.x+(o.x-l.x)*c,z:l.z+(o.z-l.z)*c};return[[cn(u,o,r.width+.4)]]}));i.length&&(e=An.difference(e,...i));const s=e;for(const r of E0.filter(o=>o.floor===n.id))e=An.difference(e,...r.polygons);return{...n,polygons:e,structuralPolygons:s,openings:i}}),Fu=n=>go.find(t=>t.id===n);function lv(n,t,e){let i=[[0,1]];for(const s of Un.filter(r=>r.floor===e.id)){const r=we(s,0,0),o=we(s,0,s.rear),a=qt(r,o),l=(o.x-r.x)/a,c=(o.z-r.z)/a,u=(n.x-r.x)*l+(n.z-r.z)*c,h=(n.x-r.x)*-c+(n.z-r.z)*l,f=(t.x-n.x)*l+(t.z-n.z)*c,d=(t.x-n.x)*-c+(t.z-n.z)*l;let m=0,_=1;for(const[g,p,R,E]of[[u,f,0,a],[h,d,-s.aisleWidth/2,s.aisleWidth/2]])if(Math.abs(p)<1e-9){if(g<R||g>E){m=1,_=0;break}}else{const y=(R-g)/p,T=(E-g)/p;m=Math.max(m,Math.min(y,T)),_=Math.min(_,Math.max(y,T))}_>m&&(i=i.flatMap(([g,p])=>_<=g||m>=p?[[g,p]]:[...m>g?[[g,m]]:[],..._<p?[[_,p]]:[]]))}for(const s of Ol){const r=s.path.slice(1).map((o,a)=>[s.path[a],o]);if(s.from===e.id){const o=s.path[0],a=s.path[1],l=qt(o,a),c=(a.x-o.x)/l,u=(a.z-o.z)/l;r.push([{...o,x:o.x-c*.01,z:o.z-u*.01},{...o,x:o.x+c*.01,z:o.z+u*.01}])}for(const[o,a]of r){if(Math.abs(o.y-e.y)>.001||Math.abs(a.y-e.y)>.001)continue;const l=qt(o,a),c=(a.x-o.x)/l,u=(a.z-o.z)/l,h=-u,f=c,d=(n.x-o.x)*c+(n.z-o.z)*u,m=(n.x-o.x)*h+(n.z-o.z)*f,_=(t.x-n.x)*c+(t.z-n.z)*u,g=(t.x-n.x)*h+(t.z-n.z)*f;let p=0,R=1;const E=s.width/2+(e.id===s.to?.2:0);for(const[y,T,C,P]of[[d,_,-.001,l+.001],[m,g,-E,E]])if(Math.abs(T)<1e-9){if(y<C||y>P){p=1,R=0;break}}else{const D=(C-y)/T,v=(P-y)/T;p=Math.max(p,Math.min(D,v)),R=Math.min(R,Math.max(D,v))}R>p&&(i=i.flatMap(([y,T])=>R<=y||p>=T?[[y,T]]:[...p>y?[[y,p]]:[],...R<T?[[R,T]]:[]]))}}return i.filter(([s,r])=>r-s>1e-6).map(([s,r])=>[s,r].map(o=>({x:n.x+(t.x-n.x)*o,z:n.z+(t.z-n.z)*o,y:n.y})))}const cv=Jn.portals.map(n=>[cn(n.start,n.end,n.width)]),Lh=Jn.portals.map(n=>[cn({x:n.start.x+n.direction.x*5.6,z:n.start.z+n.direction.z*5.6},n.end,n.width)]),hv=An.union(...Jn.wallPath.slice(1).map((n,t)=>[cn(Jn.wallPath[t],n,_e.wallThickness)])),zu=An.difference(hv,...cv);function Dh(n,t,e){let i=1/0;for(const s of e){const r=Ou(s[0]);if(!(n<r.minX-1||n>r.maxX+1||t<r.minZ-1||t>r.maxZ+1)){if(ys(n,t,[s]))return 0;for(const o of s)for(let a=1;a<o.length;a++){const l=o[a-1],c=o[a],u=c[0]-l[0],h=c[1]-l[1],f=Math.max(0,Math.min(1,((n-l[0])*u+(t-l[1])*h)/(u*u+h*h)));i=Math.min(i,Math.hypot(n-l[0]-u*f,t-l[1]-h*f))}}}return i}const zl=[(()=>{const n=Mi("3F"),t=bn(cr("section-3-7").rawPosition,n),e=bn(cr("section-3-11").rawPosition,n),i=qt(t,e),s={x:(e.x-t.x)/i,z:(e.z-t.z)/i},r={x:-s.z,z:s.x},o=.22,a=4.48,l=n.width/2-.15,c=l+o/2,u={x:t.x-r.x*c,z:t.z-r.z*c},h={x:e.x-r.x*c,z:e.z-r.z*c};return{id:"service-frontage-3-7-11",floor:n.id,y:n.y,start:u,end:h,tangent:s,front:r,length:i,depth:o,height:a,faceOffset:l,polygons:[[cn(u,h,o)]],source:["O02","V06-16","V09-05","V16-R3"],accuracy:"inferred-extent-and-dimensions",publicInterior:!1}})()],_o=["section-U25"].map(n=>{const t=cr(n),e=t.arrivalYaw,i={x:Math.sin(e),z:Math.cos(e)};return{id:"wall-"+n,destination:n,floor:t.floor,x:t.facade.x-i.x*.18,z:t.facade.z-i.z*.18,y:t.position.y,yaw:e,front:i,width:3.4,depth:.22,height:4.1,source:"V02-06",accuracy:"inferred-dimensions"}});function Ih(n,t,e){const i=t-n.x,s=e-n.z,r=i*Math.cos(n.yaw)-s*Math.sin(n.yaw),o=i*n.front.x+s*n.front.z;return Math.hypot(Math.max(Math.abs(r)-n.width/2,0),Math.max(Math.abs(o)-n.depth/2,0))}const so=new Map;for(const n of _i.filter(t=>["nursing","kids","restroom"].includes(t.kind))){const t=n.frontageGroup||n.id;so.has(t)||so.set(t,[]),so.get(t).push(n)}const Bu=[...so].map(([n,t])=>{const e=t[0],i=e.arrivalYaw,s={x:Math.sin(i),z:Math.cos(i)},r=t.reduce((g,p)=>g+p.facade.x,0)/t.length,o=t.reduce((g,p)=>g+p.facade.z,0)/t.length,a=t.length>1,l=a?1.35:1.8,c=[],u=t.map(g=>({destination:g.id,x:(g.facade.x-r)*Math.cos(i)-(g.facade.z-o)*Math.sin(i),width:l})).sort((g,p)=>g.x-p.x),h=(g,p,R,E,y,T,C)=>c.push({width:g,height:p,depth:R,x:E,y,z:T,material:C});for(const g of u)h(l,2.3,.18,g.x,1.15,0,"dark"),h(l+.04,.9,.22,g.x,2.75,-.13,"wall"),h(.08,.42,.09,g.x+l*.35,1.02,.14,"white"),a||h(.04,2.3,.025,g.x,1.15,.105,"beam");const f=a?1.2:1.8,d=.02,m=u[0].x-l/2,_=u.at(-1).x+l/2;h(f,3.2,.22,m-d-f/2,1.6,-.13,"wall"),h(f,3.2,.22,_+d+f/2,1.6,-.13,"wall");for(let g=1;g<u.length;g++){const p=u[g-1].x+l/2+d,R=u[g].x-l/2-d;h(R-p,3.2,.22,(p+R)/2,1.6,-.13,"wall")}return{id:n,floor:e.floor,x:r,z:o,y:e.position.y,yaw:i,front:s,parts:c,doors:u,source:[...new Set(t.flatMap(g=>g.source))],accuracy:"inferred-dimensions",publicInterior:!1}}),ku=Bu.flatMap(n=>n.parts.filter(t=>t.y-t.height/2<.01).map(t=>({id:n.id,floor:n.floor,x:n.x+t.x*Math.cos(n.yaw)+t.z*Math.sin(n.yaw),z:n.z-t.x*Math.sin(n.yaw)+t.z*Math.cos(n.yaw),yaw:n.yaw,front:n.front,width:t.width,depth:t.depth,height:t.height}))),gr=[];for(const n of Ln)n.path.slice(1).forEach((t,e)=>{const i=n.path[e],s=qt(i,t),r=-(t.z-i.z)/s,o=(t.x-i.x)/s;for(let a=9;a<s-7;a+=14){const l=a/s;for(const c of[-1,1]){if(n.id==="3F"&&e===6&&c===1)continue;const u=i.x+(t.x-i.x)*l+r*(n.width/2-.85)*c,h=i.z+(t.z-i.z)*l+o*(n.width/2-.85)*c;ys(u,h,Fu(n.id).structuralPolygons)&&!(n.id==="5F"&&Math.hypot(u+21.26066420664207,h-96.77273062730627)<.001)&&gr.push({x:u,z:h,y:n.y,floor:n.id,radius:.35})}}});gr.push(...fo.filter(n=>n.column.sectionCode).map(n=>({...n.column})));function Ni(n,t,e,i=ms){const s=Fu(n);if(!s)return!1;for(let r=0;r<12;r++){const o=r*Math.PI/6;if(!ys(t+Math.cos(o)*i,e+Math.sin(o)*i,s.polygons))return!1}return!(n==="5F"&&Dh(t,e,zu)<i)&&!zl.some(r=>r.floor===n&&Dh(t,e,r.polygons)<i)&&!gr.some(r=>r.floor===n&&Math.hypot(Math.max(Math.abs(t-r.x)-r.radius,0),Math.max(Math.abs(e-r.z)-r.radius,0))<i)&&!_o.some(r=>r.floor===n&&Ih(r,t,e)<i)&&!ku.some(r=>r.floor===n&&Ih(r,t,e)<i)}const As=Ol.map(n=>{let t=0;const e=n.path.slice(1).map((s,r)=>{const o=n.path[r],a=qt(o,s),l=t;return t+=a,{a:o,b:s,len:a,s:l,rising:Math.abs(o.y-s.y)>.01,steps:Math.round(Math.abs(s.y-o.y)/n.rise)}}),i=e.filter(s=>s.rising).map(s=>[cn(s.a,s.b,n.width)]);for(const s of e.filter(r=>!r.rising)){const r=n.width/2,o=s.b,a=ur([[o.x-r,o.z-r],[o.x+r,o.z-r],[o.x+r,o.z+r],[o.x-r,o.z+r],[o.x-r,o.z-r]]);s.landingPolygons=An.difference(An.union([cn(s.a,s.b,n.width)],[a]),...i)}return{...n,segments:e,length:t}});function ci(n,t,e=0){t=Math.max(0,Math.min(n.length,t));const i=n.segments.find(l=>t<=l.s+l.len+1e-7)||n.segments.at(-1),s=Math.max(0,Math.min(1,(t-i.s)/i.len)),r=i.rising?i.a.y+(i.b.y-i.a.y)*Math.min(1,Math.floor(s*i.steps+1e-6)/i.steps):i.a.y,o=-(i.b.z-i.a.z)/i.len,a=(i.b.x-i.a.x)/i.len;return{x:i.a.x+(i.b.x-i.a.x)*s+o*e,z:i.a.z+(i.b.z-i.a.z)*s+a*e,y:r,s:t,lateral:e,segment:n.segments.indexOf(i)}}function Uh(n,t,e=null){let i;for(const s of n.segments){const r=Lu(t,s.a,s.b),o=s.s+r.t*s.len;if(e!==null&&Math.abs(o-e)>1.5)continue;const a=-(s.b.z-s.a.z)/s.len,l=(s.b.x-s.a.x)/s.len,c=(t.x-r.x)*a+(t.z-r.z)*l,u=qt(t,r);(!i||u<i.distance)&&(i={...ci(n,o,c),distance:u})}return i}function uv(n,t=0,e=n.length){const i=Math.min(t,e),s=Math.max(t,e),r=[],o=c=>({...c,floor:c.s<n.length/2?n.from:n.to,connector:n.id});r.push(o(ci(n,i)));for(const c of n.segments){const u=c.rising?c.steps:1;for(let h=1;h<=u;h++){const f=c.s+c.len*h/u;if(f<=i+1e-6||f>=s-1e-6)continue;const d=ci(n,f),m=ci(n,f-1e-5);Math.abs(d.y-m.y)>.001&&r.push(o({...d,y:m.y})),r.push(o(d))}}const a=ci(n,s),l=ci(n,Math.max(i,s-1e-5));return Math.abs(a.y-l.y)>.001&&r.push(o({...a,y:l.y})),r.push(o(a)),t<=e?r:r.reverse()}function Vu(n=Eo[0]){return{...n.position,floor:n.floor,yaw:n.yaw,pitch:0,connector:null,s:null,lateral:0}}function fv(n,t,e){const i=Math.max(1,Math.ceil(Math.hypot(t,e)/.075));let s=0;for(let r=0;r<i;r++){const o=n.x+t/i,a=n.z+e/i,l={x:n.x,z:n.z};if(n.seating){const c=lr(n.seating),u=ui(c,{x:o,z:a});u.v<.05&&u.v>-.2&&Math.abs(u.u)<c.aisleWidth/2-ms&&Ni(n.floor,o,a)?Object.assign(n,{x:o,z:a,y:Mi(n.floor).y,seating:null}):ha(n,o,a)||ha(n,o,n.z)||ha(n,n.x,a)}else if(n.connector){const c=As.find(d=>d.id===n.connector),u=Uh(c,{x:o,z:a},n.s);if(!u||u.distance>c.width/2-ms)continue;const h=u.s<.035,f=u.s>c.length-.035;if((h||f)&&Ni(h?c.from:c.to,o,a)){const d=h?c.segments[0]:c.segments.at(-1),m=(o-n.x)*(d.b.x-d.a.x)+(a-n.z)*(d.b.z-d.a.z);if(h&&m<0||f&&m>0){Object.assign(n,{x:o,z:a,y:Mi(h?c.from:c.to).y,floor:h?c.from:c.to,connector:null,s:null,lateral:0}),s+=qt(l,n);continue}}if(u.s===0||u.s===c.length){const d=ci(c,u.s,u.lateral);if(qt({x:o,z:a},d)>.08)continue}Object.assign(n,{x:u.x,z:u.z,y:u.y,s:u.s,lateral:u.lateral})}else{let c=!1;for(const u of Un){if(n.floor!==u.floor)continue;const h=ui(u,n),f=ui(u,{x:o,z:a}),d=u.entry??u.rear-1.2;if(h.v<=d&&f.v>d&&Math.abs(f.u)<u.aisleWidth/2-ms){const m=pr(u,{x:o,z:a});if(m){Object.assign(n,{x:o,z:a,y:m.y,seating:u.id}),c=!0;break}}}for(const u of c?[]:As){const h=n.floor===u.to;if(n.floor!==u.from&&!h)continue;const f=h?u.path.at(-1):u.path[0],d=h?u.segments.at(-1):u.segments[0];if(qt(n,f)>u.width/2+.2)continue;const m=(o-n.x)*(d.b.x-d.a.x)+(a-n.z)*(d.b.z-d.a.z);if(h?m>=0:m<=0)continue;const _=Uh(u,{x:o,z:a},h?u.length:0);if(_&&_.distance<u.width/2-ms&&(h?_.s<u.length-.02:_.s>.02)){Object.assign(n,{x:_.x,z:_.z,y:_.y,connector:u.id,s:_.s,lateral:_.lateral}),c=!0;break}}c||(Ni(n.floor,o,a)?Object.assign(n,{x:o,z:a}):Ni(n.floor,o,n.z)?n.x=o:Ni(n.floor,n.x,a)&&(n.z=a))}s+=qt(l,n)}return s}function oi(n,t,e){const i=qt(n,t),s=Math.max(1,Math.ceil(i/.075));for(let r=0;r<=s;r++){const o=r/s;if(!Ni(e,n.x+(t.x-n.x)*o,n.z+(t.z-n.z)*o))return!1}return!0}function dv(n,t,e){const i=ms+.08,s=[],r=(h,f)=>{Ni(t,h,f)&&s.push({x:h,z:f,y:n.y,floor:t})};for(const h of gr.filter(f=>f.floor===t&&qt(f,n)<12))for(const f of[-1,1])for(const d of[-1,1])r(h.x+f*(h.radius+i),h.z+d*(h.radius+i));for(const h of _o.filter(f=>f.floor===t&&qt(f,n)<12))for(const f of[-1,1])for(const d of[-1,1]){const m=f*(h.width/2+i),_=d*(h.depth/2+i);r(h.x+Math.cos(h.yaw)*m+h.front.x*_,h.z-Math.sin(h.yaw)*m+h.front.z*_)}const o=[n,...s,...e],a=1+s.length,l=o.map(()=>1/0),c=o.map(()=>-1),u=new Set;for(l[0]=0;u.size<o.length;){let h=-1;for(let f=0;f<o.length;f++)!u.has(f)&&(h<0||l[f]<l[h])&&(h=f);if(h<0||!Number.isFinite(l[h]))return null;if(h>=a){const f=[];for(let d=h;d!==-1;d=c[d])f.unshift({...o[d],floor:t});return{q:o[h],points:f}}u.add(h);for(let f=1;f<o.length;f++){if(u.has(f))continue;const d=l[h]+qt(o[h],o[f]);d>=l[f]||!oi(o[h],o[f],t)||(l[f]=d,c[f]=h)}}return null}let Ee=null;function wo(n,t){if(n.seating||t.seating){const T=lr(n.seating),C=lr(t.seating);let P=[];if(T&&T===C)P=ua(T,n,t.position);else{let D=n,v=t,S=[],I=[];if(T){const q=we(T,0,0);S=ua(T,n,q),D={...q,seating:null,connector:null}}if(C){const q=we(C,0,0);I=ua(C,q,t.position),v={position:{...q,seating:null},floor:C.floor}}if(!S||!I)return{error:"좌석 통로를 연결하지 못했습니다."};const z=wo(D,v);if(z.error)return z;P=[...S,...z.points,...I]}return P?(P=P.filter((D,v,S)=>!v||Math.hypot(D.x-S[v-1].x,D.y-S[v-1].y,D.z-S[v-1].z)>1e-5),{points:P,distance:P.slice(1).reduce((D,v,S)=>D+Math.hypot(v.x-P[S].x,v.y-P[S].y,v.z-P[S].z),0),destination:t,usesStairs:P.some(D=>D.connector)||P.some((D,v)=>v&&Math.abs(D.y-P[v-1].y)>.01)}):{error:"좌석 통로를 연결하지 못했습니다."}}const e=Ee?[...Ee.nodes]:[],i=Ee?Ee.edges.map(T=>[...T]):[],s=(T,C,P={})=>{const D=e.length;return e.push({...T,floor:C,...P}),i.push([]),D},r=(T,C,P=null)=>{const D=P||[e[T],e[C]];let v=0;for(let S=1;S<D.length;S++)v+=Math.hypot(D[S].x-D[S-1].x,D[S].z-D[S-1].z,D[S].y-D[S-1].y);i[T].push({to:C,weight:v,path:D}),i[C].push({to:T,weight:v,path:[...D].reverse()})},o=(Ee==null?void 0:Ee.floorNodes)||new Map,a=(Ee==null?void 0:Ee.clearSegments)||new Map,l=(T,C,P)=>T+":"+C+":"+P;if(!Ee)for(const T of Ln){const C=T.walkways.map((P,D)=>{const v=P.path.map(S=>s(S,T.id));for(let S=1;S<v.length;S++){const I=oi(P.path[S-1],P.path[S],T.id);a.set(l(T.id,D,S-1),I),I&&r(v[S-1],v[S])}return qt(P.path[0],P.path.at(-1))<.01&&r(v[0],v.at(-1)),v});o.set(T.id,C)}const c=Ee?[...Ee.attachments]:[];function u(T,C,P=null){const D=Mi(C);let v=P||D.walkways.map(($,et)=>({...bn(T,{path:$.path}),walkway:et})).sort(($,et)=>$.distance-et.distance)[0],S=null;if(!oi(T,v,C)){const $=D.walkways[v.walkway].path,et=$[v.segment],lt=$[v.segment+1],st=qt(et,lt),vt=[v];for(const Mt of[-1.5,1.5,-3,3,-6,6,-10,10]){const Rt=Math.max(0,Math.min(1,v.t+Mt/st));vt.push({...v,t:Rt,x:et.x+(lt.x-et.x)*Rt,z:et.z+(lt.z-et.z)*Rt})}if(vt.sort((Mt,Rt)=>qt(T,Mt)-qt(T,Rt)),v=vt.find(Mt=>oi(T,Mt,C)),!v){const Mt=dv(T,C,vt);if(!Mt)return null;v=Mt.q,S=Mt.points}}const I=s(T,C),z=s(v,C),q=o.get(C)[v.walkway],ot=a.get(l(C,v.walkway,v.segment));r(I,z,S);for(const $ of[q[v.segment],q[v.segment+1]])(ot||oi(v,e[$],C))&&r(z,$);for(const $ of c)$.floor===C&&$.walkway===v.walkway&&$.segment===v.segment&&(ot||oi(v,$.q,C))&&r(z,$.id);return c.push({id:z,floor:C,walkway:v.walkway,segment:v.segment,q:v}),I}if(!Ee)for(const T of Ln)for(let C=0;C<T.walkways.length;C++){const P=T.walkways[C];for(const D of[0,P.path.length-1])for(let v=0;v<T.walkways.length;v++){if(v===C)continue;const S=P.path[D],I=bn(S,{path:T.walkways[v].path});if(I.distance>.01||!oi(S,I,T.id))continue;const z=u(S,T.id,{...I,walkway:v});z!==null&&r(o.get(T.id)[C][D],z)}}const h=(Ee==null?void 0:Ee.stairEnds)||new Map,f=uv;if(!Ee){for(const T of As){const C=u(T.path[0],T.from),P=u(T.path.at(-1),T.to);if(C===null||P===null)throw new Error("계단 도착점이 회랑과 연결되지 않았습니다.");r(C,P,f(T)),h.set(T.id,{a:C,b:P})}Ee={nodes:[...e],edges:i.map(T=>[...T]),floorNodes:o,clearSegments:a,attachments:[...c],stairEnds:h}}const d=u(t.position,t.floor);if(d===null)return{error:"목적지 앞 통로를 연결하지 못했습니다."};let m;if(n.connector){const T=As.find(D=>D.id===n.connector),C=h.get(T.id);m=s(n,n.floor);const P={...ci(T,n.s),floor:n.floor,connector:T.id};for(const[D,v]of[[C.a,0],[C.b,T.length]])r(m,D,[{...n},P,...f(T,n.s,v)])}else if(m=u(n,n.floor),m===null)return{error:"현재 위치 주변 통로를 연결하지 못했습니다."};const _=e.map(()=>1/0),g=e.map(()=>null),p=new Set;for(_[m]=0;p.size<e.length;){let T=-1;for(let C=0;C<e.length;C++)!p.has(C)&&(T<0||_[C]<_[T])&&(T=C);if(T<0||!Number.isFinite(_[T])||T===d)break;p.add(T);for(const C of i[T]){const P=_[T]+C.weight;P<_[C.to]&&(_[C.to]=P,g[C.to]={from:T,edge:C})}}if(!Number.isFinite(_[d]))return{error:"아직 연결되지 않은 경로입니다."};const R=[];let E=d;for(;E!==m;){const T=g[E];if(!T)return{error:"경로를 완성하지 못했습니다."};R.unshift(T.edge.path),E=T.from}const y=R.flat().filter((T,C,P)=>!C||Math.hypot(T.x-P[C-1].x,T.z-P[C-1].z,T.y-P[C-1].y)>.001);return{points:y,distance:_[d],destination:t,usesStairs:y.some(T=>T.connector)}}function Hu(n,t,e=4){var f;if(!((f=t==null?void 0:t.points)!=null&&f.length))return{remaining:0,target:{...n}};const i=t.points;if(i.length===1)return{remaining:Math.hypot(n.x-i[0].x,n.y-i[0].y,n.z-i[0].z),target:i[0]};const s=i.slice(1).map((d,m)=>Math.hypot(d.x-i[m].x,d.y-i[m].y,d.z-i[m].z));let r=s.reduce((d,m)=>d+m,0),o=1/0,a=r,l;for(let d=1;d<i.length;d++){const m=i[d-1],_=i[d],g=s[d-1];if(r-=g,g<1e-8)continue;const p=Math.max(0,Math.min(1,((n.x-m.x)*(_.x-m.x)+(n.y-m.y)*(_.y-m.y)+(n.z-m.z)*(_.z-m.z))/(g*g))),R=Math.hypot(n.x-m.x-(_.x-m.x)*p,n.y-m.y-(_.y-m.y)*p,n.z-m.z-(_.z-m.z)*p);R<o&&(o=R,a=R+(1-p)*g+r,l={index:d,t:p,point:{x:m.x+(_.x-m.x)*p,y:m.y+(_.y-m.y)*p,z:m.z+(_.z-m.z)*p}})}if(!l)return{remaining:0,target:i.at(-1)};const c={offRouteDistance:o,projection:l.point};if(o>1.2)return{remaining:a,target:l.point,...c};let u=e,h=l.point;for(let d=l.index;d<i.length;d++){const m=d===l.index?l.point:i[d-1],_=i[d],g=Math.hypot(_.x-m.x,_.y-m.y,_.z-m.z);if(g<1e-8)continue;const p=Math.min(1,u/g);if(h={x:m.x+(_.x-m.x)*p,y:m.y+(_.y-m.y)*p,z:m.z+(_.z-m.z)*p},g>=u)break;u-=g}return{remaining:Math.max(0,a),target:h,...c}}function pv(n,t){if(!t)return t;const e=Hu(n,t),i=e.projection;if(!i)return t;const s=!n.connector&&e.offRouteDistance>.15&&(n.seating?!Pu(lr(n.seating),n,i):Math.abs(i.y-n.y)>.3||!oi(n,i,n.floor));if(e.offRouteDistance<=1.5&&!s)return t;const r=wo(n,t.destination);return r.error?t:r}function mv(n,t){return n?n.points.slice(1).flatMap((e,i)=>{const s=n.points[i];return!s.connector&&!e.connector&&s.floor===t&&e.floor===t?[[s,e]]:[]}):[]}function ma(n,t=!1){const e=n[0].index!==null,i=new Set(Object.keys(n[0].attributes)),s=new Set(Object.keys(n[0].morphAttributes)),r={},o={},a=n[0].morphTargetsRelative,l=new Ve;let c=0;for(let u=0;u<n.length;++u){const h=n[u];let f=0;if(e!==(h.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const d in h.attributes){if(!i.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+d+'" attribute exists among all geometries, or in none of them.'),null;r[d]===void 0&&(r[d]=[]),r[d].push(h.attributes[d]),f++}if(f!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(a!==h.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const d in h.morphAttributes){if(!s.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;o[d]===void 0&&(o[d]=[]),o[d].push(h.morphAttributes[d])}if(t){let d;if(e)d=h.index.count;else if(h.attributes.position!==void 0)d=h.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,d,u),c+=d}}if(e){let u=0;const h=[];for(let f=0;f<n.length;++f){const d=n[f].index;for(let m=0;m<d.count;++m)h.push(d.getX(m)+u);u+=n[f].attributes.position.count}l.setIndex(h)}for(const u in r){const h=Nh(r[u]);if(!h)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;l.setAttribute(u,h)}for(const u in o){const h=o[u][0].length;if(h===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[u]=[];for(let f=0;f<h;++f){const d=[];for(let _=0;_<o[u].length;++_)d.push(o[u][_][f]);const m=Nh(d);if(!m)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;l.morphAttributes[u].push(m)}}return l}function Nh(n){let t,e,i,s=-1,r=0;for(let c=0;c<n.length;++c){const u=n[c];if(t===void 0&&(t=u.array.constructor),t!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=u.itemSize),e!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=u.normalized),i!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=u.gpuType),s!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=u.count*e}const o=new t(r),a=new hn(o,e,i);let l=0;for(let c=0;c<n.length;++c){const u=n[c];if(u.isInterleavedBufferAttribute){const h=l/e;for(let f=0,d=u.count;f<d;f++)for(let m=0;m<e;m++){const _=u.getComponent(f,m);a.setComponent(f+h,m,_)}}else o.set(u.array,l);l+=u.count*e}return s!==void 0&&(a.gpuType=s),a}const gv={id:"outfield-scoreboard",pixel:[422,185],position:Le([422,185]),yaw:0,screen:{width:36,height:20.4,source:"O16"},bottom:4.8,depth:1.5,source:["O02","O05","O14-01","V05-18","O16"],accuracy:"published-screen-size-inferred-placement",publicWalkable:!1},Vn=(n,t={})=>new vu({color:n,roughness:.91,metalness:0,...t});function _v(n,t,e){const i=new Vi({map:n,side:t?jn:Qe,transparent:e});return t||(i.forceSinglePass=!0,i.onBeforeCompile=s=>{s.fragmentShader=s.fragmentShader.replace("#include <map_fragment>",jt.map_fragment.replace("texture2D( map, vMapUv )","texture2D( map, vec2( gl_FrontFacing ? vMapUv.x : 1.0 - vMapUv.x, vMapUv.y ) )"))},i.customProgramCacheKey=()=>"lions-readable-plaque-v1"),i}function xv({compact:n=!1}={}){const t=new ye,e=new Map,i=[],s=[],r=[],o=new Map,a=new ye;t.add(a);const l={floor:Vn("#b9bcbf"),wall:Vn("#e1e3e5"),beam:Vn("#a0a5ab"),dark:Vn("#686e75"),seat:Vn("#8c9298"),field:Vn("#d1d4d3"),white:Vn("#f4f4f1")},c=new Map,u=[];function h(b,H,B,it,L=[]){const U=qt(b,H),j=Math.atan2(it.x,it.z);for(let Z=.8;Z<U-.8;Z+=.7){if(Z%12<1.45)continue;const Q=new O(b.x+(H.x-b.x)*Z/U,B+.03,b.z+(H.z-b.z)*Z/U);L.length&&ys(Q.x,Q.z,L)||u.push(new ie().compose(Q,new Kn().setFromAxisAngle(new O(0,1,0),j),new O(1,1,1)))}}function f(b,H,B=t,it=!1){const L=new Pe(b,H);return L.receiveShadow=!0,L.castShadow=!0,B.add(L),it&&r.push(L),L}function d(b,H,B,it,L,U,j,Z=t){const Q=new rn(b,H,B);return Q.translate(it,L,U),f(Q,j,Z)}function m(b,H,B,it,L){for(const U of b){const j=new to(U[0].map(Q=>new mt(Q[0],-Q[1])));for(const Q of U.slice(1))j.holes.push(new ol(Q.map(ct=>new mt(ct[0],-ct[1]))));const Z=new Ks(j,{depth:B,bevelEnabled:!1});Z.rotateX(-Math.PI/2),Z.translate(0,H-B,0),f(Z,it,L,!0)}}function _(b,H,B,it,L,U){const j=qt(b,H),Z=new rn(B,it,j);return Z.rotateY(Math.atan2(H.x-b.x,H.z-b.z)),Z.translate((b.x+H.x)/2,(b.y+H.y)/2,(b.z+H.z)/2),f(Z,L,U)}function g(b,H,B,it,L){const U=new O(b.x,b.y,b.z),j=new O(H.x,H.y,H.z),Z=j.clone().sub(U),Q=new rn(B,B,Z.length());return Q.applyQuaternion(new Kn().setFromUnitVectors(new O(0,0,1),Z.normalize())),Q.translate(...U.add(j).multiplyScalar(.5).toArray()),f(Q,it,L)}function p(b,H){const B=[...b,...b.map(L=>({...L,y:L.y-H}))].flatMap(L=>[L.x,L.y,L.z]),it=new Ve;it.setAttribute("position",new be(B,3)),it.setAttribute("uv",new be(new Float32Array(16),2)),it.setIndex([0,1,2,0,2,3,4,6,5,4,7,6,0,4,5,0,5,1,1,5,6,1,6,2,2,6,7,2,7,3,3,7,4,3,4,0]),it.computeVertexNormals(),f(it,l.wall,a,!0)}function R(b,H,B=5.8,it=1.05,L="section",U=null,j=null){const Z=document.createElement("canvas");Z.width=768,Z.height=Math.round(768*it/B);const Q=Z.getContext("2d"),ct=L==="painted";ct||(Q.fillStyle=L==="section"?"#f4f4f1":"#343b43",Q.fillRect(0,0,Z.width,Z.height)),Q.fillStyle=L==="section"||ct?"#343b43":"#ffffff",Q.font=`600 ${Math.round(Z.height*(j??(L==="column"?.62:.38)))}px "Malgun Gothic", sans-serif`,Q.textAlign="center",Q.textBaseline="middle",Q.fillText(b,Z.width/2,Z.height/2,720);const X=new Pc(Z);X.colorSpace=Be;const M=new Pe(new pn(B,it),_v(X,["entrance","column"].includes(L),ct));return M.position.set(H.x,H.y,H.z),U&&(M.rotation.y=Math.atan2(U.x-H.x,U.z-H.z)),t.add(M),M}for(const b of go){const H=new ye;H.name=b.id,t.add(H),e.set(b.id,H),m(b.polygons,b.y,.32,l.floor,H);for(const B of b.polygons)for(const it of B)for(let L=1;L<it.length;L++){const U={x:it[L-1][0],z:it[L-1][1],y:b.y+.52},j={x:it[L][0],z:it[L][1],y:b.y+.52};for(const[Z,Q]of lv(U,j,b)){const ct=qt(Z,Q),X=-(Q.z-Z.z)/ct,M=(Q.x-Z.x)/ct,N=(Z.x+Q.x)/2,k=(Z.z+Q.z)/2,Y=ys(N+X*.01,k+M*.01,b.polygons)?-1:1,K={...Z,x:Z.x+X*.07*Y,z:Z.z+M*.07*Y},ht={...Q,x:Q.x+X*.07*Y,z:Q.z+M*.07*Y},at={x:(K.x+ht.x)/2,z:(K.z+ht.z)/2},pt=bn(at,b),Lt=b.path[pt.segment],Ct=b.path[pt.segment+1],A=qt(Lt,Ct),x=(at.x-pt.x)*(-(Ct.z-Lt.z)/A)+(at.z-pt.z)*(Ct.x-Lt.x)/A;if(b.id==="3F"&&x>0){_({...K,y:b.y+1.05},{...ht,y:b.y+1.05},.065,.065,l.beam,H),_({...K,y:b.y+.18},{...ht,y:b.y+.18},.045,.045,l.beam,H);const G=qt(K,ht);for(let nt=0;nt<=G;nt+=.2){const ft=nt/G,rt=Math.round(nt/.2)%12===0;d(rt?.065:.025,.86,rt?.065:.025,K.x+(ht.x-K.x)*ft,b.y+.61,K.z+(ht.z-K.z)*ft,l.beam,H)}}else b.id==="5F"&&x>10?_({...K,y:b.y+.09},{...ht,y:b.y+.09},.13,.18,l.wall,H):_(K,ht,.13,1.04,l.wall,H)}}if(b.id==="3F"){const B=b.path.slice(3,8);for(let it=1;it<B.length;it++)m([[cn(B[it-1],B[it],b.width-.3)]],b.y+4.7,.22,l.wall,a);for(let it=1;it<B.length;it++){const L=B[it-1],U=B[it],j=qt(L,U),Z=(U.x-L.x)/j,Q=(U.z-L.z)/j,ct=-Q,X=Z;for(const M of[-1,1]){const N=b.width*.25*M;_({x:L.x+ct*N,z:L.z+X*N,y:4.03},{x:U.x+ct*N,z:U.z+X*N,y:4.03},.055,.055,l.dark,a);for(let k=3;k<j-2;k+=6){const Y=L.x+Z*k+ct*N,K=L.z+Q*k+X*N;d(.035,.42,.035,Y,4.25,K,l.dark,a),_({x:Y-Z*.65,z:K-Q*.65,y:3.98},{x:Y+Z*.65,z:K+Q*.65,y:3.98},.24,.12,l.white,a)}}}}for(const B of gr.filter(it=>it.floor===b.id)){const it=bn(B,b),L=b.path[it.segment],U=b.path[it.segment+1],j=qt(L,U),Z=(B.x-it.x)*(-(U.z-L.z)/j)+(B.z-it.z)*(U.x-L.x)/j,Q=b.id==="5F"?_0(Z)-b.y:4.4;d(.7,Q,.7,B.x,B.y+Q/2,B.z,l.beam,H),b.id==="5F"&&d(.7,9.3,.7,B.x,4.65,B.z,l.beam,t)}b.path.slice(1).forEach((B,it)=>{if(b.id==="3F"&&it<3)return;const L=b.path[it],U=qt(L,B),j=-(B.z-L.z)/U,Z=(B.x-L.x)/U,Q=[];if(b.id==="3F"&&it===6)for(const ct of fo.filter(X=>X.column.sectionCode))Q.push(bn(ct.column,b).t*U);else for(let ct=9;ct<U-7;ct+=14)Q.push(ct);for(const ct of Q){const X=ct/U,M=L.x+(B.x-L.x)*X,N=L.z+(B.z-L.z)*X;_({x:M+j*b.width/2,z:N+Z*b.width/2,y:b.y+4.25},{x:M-j*b.width/2,z:N-Z*b.width/2,y:b.y+4.25},.5,.65,l.beam,a)}})}for(const b of zl){const H=new ye;H.name=b.id,H.userData={source:b.source,accuracy:b.accuracy,publicInterior:b.publicInterior},e.get(b.floor).add(H),m(b.polygons,b.y+b.height,b.height,l.wall,H);for(let B=3.8;B<b.length-2.5;B+=7){const it={x:b.start.x+b.tangent.x*B+b.front.x*(b.depth/2+.003),z:b.start.z+b.tangent.z*B+b.front.z*(b.depth/2+.003)},L=f(new pn(4.2,2.35),l.dark,H);L.rotation.y=Math.atan2(b.front.x,b.front.z),L.position.set(it.x,b.y+1.4,it.z);for(let U=.4;U<2.55;U+=.22){const j=f(new pn(4.2,.018),l.beam,H);j.rotation.y=L.rotation.y,j.position.set(it.x+b.front.x*.001,b.y+U,it.z+b.front.z*.001)}}}for(const b of As){const H=new ye;H.name=b.id,t.add(H);for(const B of b.segments){B.rising||m(B.landingPolygons,B.a.y,.22,l.floor,H);for(let U=0;U<B.steps;U++){const j=U/B.steps,Z=(U+1)/B.steps,Q={x:B.a.x+(B.b.x-B.a.x)*j,z:B.a.z+(B.b.z-B.a.z)*j},ct={x:B.a.x+(B.b.x-B.a.x)*Z,z:B.a.z+(B.b.z-B.a.z)*Z};m([[cn(Q,ct,b.width)]],B.a.y+(B.b.y-B.a.y)*U/B.steps,.18,l.wall,H)}const it=-(B.b.z-B.a.z)/B.len,L=(B.b.x-B.a.x)/B.len;for(const U of[-1,1]){const j=X=>{const M=X/B.len;return{x:B.a.x+(B.b.x-B.a.x)*M+it*(b.width/2+.065)*U,y:B.a.y+(B.b.y-B.a.y)*M,z:B.a.z+(B.b.z-B.a.z)*M+L*(b.width/2+.065)*U}},Z=X=>!go.some(M=>Math.abs(X.y-M.y)<.001&&ys(X.x,X.z,M.polygons))&&!b.segments.some(M=>{if(M===B)return!1;const N=M.b.x-M.a.x,k=M.b.z-M.a.z,Y=Math.max(0,Math.min(1,((X.x-M.a.x)*N+(X.z-M.a.z)*k)/(M.len*M.len))),K=M.a.y+(M.b.y-M.a.y)*Y;return Math.hypot(X.x-M.a.x-N*Y,X.z-M.a.z-k*Y)<b.width/2+.18&&Math.abs(X.y-K)<.6});let Q=null;const ct=(X,M)=>{const N=j(X),k=j(M);g({...N,y:N.y+1.1},{...k,y:k.y+1.1},.11,l.dark,H)};for(let X=0;X<B.len;X+=.15){const M=Math.min(B.len,X+.15),N=Z(j((X+M)/2));N&&Q===null&&(Q=X),!N&&Q!==null&&(ct(Q,X),Q=null),M===B.len&&Q!==null&&ct(Q,M)}for(let X=0;X<=B.len;X+=1.4){const M=j(X);Z(M)&&d(.07,1.1,.07,M.x,M.y+.55,M.z,l.dark,H)}}}for(const[B,it,L]of[[b.path[0],b.path[1],"계단  ↑  SKY 5층"],[b.path.at(-1),b.path.at(-2),"계단  ↓  3층 회랑"]]){const U=qt(B,it),j=(it.x-B.x)/U,Z=(it.z-B.z)/U;R(L,{x:B.x-j,z:B.z-Z,y:B.y+2.5},5,1,"stairs",{x:B.x-j*8,z:B.z-Z*8})}if(b.restrictedLanding){const B=b.restrictedLanding,it=b.segments.filter(N=>!N.rising&&Math.abs(N.a.y-B.y)<.001).sort((N,k)=>k.len-N.len)[0],L=(it.b.x-it.a.x)/it.len,U=(it.b.z-it.a.z)/it.len,j=-U,Z=L,Q=b.width/2+.18,ct={x:(it.a.x+it.b.x)/2+j*Q,z:(it.a.z+it.b.z)/2+Z*Q},X=(it.len+b.width)/2,M=new ye;M.name="4F-restricted-landing",M.userData={...B,publicWalkable:!1},H.add(M),_({x:ct.x-L*X,z:ct.z-U*X,y:B.y+1.5},{x:ct.x+L*X,z:ct.z+U*X,y:B.y+1.5},.18,3,l.wall,M),R("4F · 전용 구역",{x:ct.x-j*.1,z:ct.z-Z*.1,y:B.y+1.9},3.2,.6,"entrance",{x:ct.x-j*3,z:ct.z-Z*3})}}const E=[[241,340],[299,283],[515,283],[594,365],[594,578],[528,631],[366,631],[241,558]].map(b=>Le(b,-6)),y=[[205,330],[293,255],[521,255],[655,386],[655,611],[551,711],[330,711],[205,584]].map(b=>Le(b,-.5));for(let b=0;b<E.length;b++){const H=(b+1)%E.length;for(let B=0;B<14;B++){const it=B/14,L=(B+1)/14,U=(N,k,Y)=>({x:N.x+(k.x-N.x)*Y,z:N.z+(k.z-N.z)*Y}),j=U(E[b],y[b],it),Z=U(E[H],y[H],it),Q=U(E[H],y[H],L),ct=U(E[b],y[b],L),X=[j,Z,Q,ct,j].map(N=>[N.x,N.z]),M=-6+5.5*it;if(m(An.difference([[ur(X)]],...M0),M,.25,b===2?l.field:l.floor,t),b!==2){const N=U(E[b],y[b],(it+L)/2),k=U(E[H],y[H],(it+L)/2),Y=qt(N,k);h(N,k,M,{x:-(k.z-N.z)/Y,z:(k.x-N.x)/Y},S0)}}}for(const b of Un){let it=function(L,U,j,Z,Q,ct,X){const M=new rn(L,U,j);M.rotateY(B);const N=we(b,Z,Q,ct);return M.translate(N.x,N.y,N.z),f(M,X,H)};var Rt=it;const H=new ye;H.name=b.id,H.userData={source:b.source,accuracy:b.accuracy},t.add(H);for(const L of Ru(b))m(L.polygons,L.y,.2,l.floor,H);const B=Math.atan2(b.forward.x,b.forward.z);for(const L of Cu(b))if(L.kind==="table"){it(L.width,.06,L.depth,L.u,L.v,L.y+.73,l.white),it(L.width,.27,.045,L.u,L.v+.18,L.y+.58,l.beam);for(const U of[-1,1])it(.065,.7,.065,L.u+U*(L.width/2-.1),L.v,L.y+.35,l.dark)}else if(L.kind==="folded-chair"){it(.48,.5,.075,L.u,L.v-.06,L.y+.65,l.seat),it(.48,.4,.1,L.u,L.v+.04,L.y+.45,l.seat);for(const U of[-1,1])it(.055,.055,.2,L.u+U*.22,L.v,L.y+.7,l.dark);it(.08,.4,.12,L.u,L.v,L.y+.2,l.dark)}else it(.48,.09,.45,L.u,L.v,L.y+.42,l.seat),it(.48,.4,.075,L.u,L.v-.2,L.y+.68,l.seat),it(.085,.39,.26,L.u,L.v,L.y+.195,l.dark);for(const L of[0,1])for(const U of Ul(b)){if(U.v1<=5.6||L&&U.v1<=b.rear)continue;const j=Math.max(U.v0,L?b.rear:5.6),Z=(L?1:-1)*(b.aisleWidth/2+.065),Q=we(b,Xn(b,L,j)+Z,j,U.y),ct=we(b,Xn(b,L,U.v1)+Z,U.v1,U.y);_({...Q,y:Q.y+1.05},{...ct,y:ct.y+1.05},.065,.065,l.dark,H),d(.055,1.05,.055,ct.x,ct.y+.525,ct.z,l.dark,H)}for(const[L,U,j]of[[Pn(b)+yi(b)+.05,Zn(b,b.firstRow||1),-b.aisleWidth/2],[b.rear-.55,Zn(b,b.rows),b.aisleWidth/2]]){const Z=Gi(b,L)+j,Q=we(b,Z,L,U),ct=we(b,b.farAisle+b.aisleWidth/2,L,U);_({...Q,y:U+1.05},{...ct,y:U+1.05},.065,.065,l.dark,H);for(let X=Z;X<=b.farAisle+b.aisleWidth/2;X+=1.2){const M=we(b,X,L,U);d(.055,1.05,.055,M.x,U+.525,M.z,l.dark,H)}}for(const L of Nl.filter(U=>U.seating===b.id)){const U=R(`${L.row}열 ${L.seat}번`,L.facade,.22,.075,"seat",L.position,.5);U.userData={destination:L.id},i.push({mesh:U,destination:L})}}const T=-8.7,C=[...E,E[0]].map(b=>[b.x,b.z]);m([[C]],T,.25,l.floor,t);const P=[[241,340],[299,283],[515,283],[515,446],[537,460],[550,482],[554,512],[554,558],[548,578],[532,592],[515,596],[437,596],[418,581],[399,558],[241,558],[241,340]].map(b=>{const H=Le(b);return[H.x,H.z]});m([[P]],T+.03,.04,l.field,t);const D=[[518,558],[518,477],[437,477],[437,558],[518,558]].map(b=>{const H=Le(b);return new O(H.x,T+.05,H.z)});t.add(new Ld(new Ve().setFromPoints(D),new lu({color:"#f5f5f2"})));const v=Le([476,517]),S=new ho(2.8,2.9,.18,32);S.translate(v.x,T+.12,v.z),f(S,l.floor,t);for(const b of[[518,558],[518,477],[437,477],[437,558]]){const H=Le(b);d(.42,.07,.42,H.x,-6.19,H.z,l.white,t)}d(.6,.06,.15,v.x,-6.06,v.z,l.white,t);for(const b of Ln.filter(H=>H.id==="5F")){const H=Gn(b.path,_e.suiteOffset),B=new ye;B.name="4F-exterior",B.userData={source:["O14-03","O15-p63","O15-p64"],accuracy:"inferred-dimensions",publicWalkable:!1},t.add(B);const it=Vn("#586169",{roughness:.38,metalness:.08});for(let X=1;X<H.length;X++){const M=H[X-1],N=H[X],k=qt(M,N);_({...M,y:5.08},{...N,y:5.08},.38,.96,l.wall,B),_({...M,y:6.72},{...N,y:6.72},.2,2.32,it,B),_({...M,y:8.21},{...N,y:8.21},.42,.66,l.wall,B),_({...M,y:5.56},{...N,y:5.56},.46,.12,l.dark,B);for(let Y=0;Y<=k;Y+=5.8){const K=Y/k;d(.17,2.32,.17,M.x+(N.x-M.x)*K,6.72,M.z+(N.z-M.z)*K,l.wall,B)}}const L=Jn.portals.map(X=>[cn({x:X.start.x+X.direction.x*5.3,z:X.start.z+X.direction.z*5.3},X.end,X.width+.7)]);for(const X of[_e.lower,_e.upper])for(let M=0;M<X.bands;M++){const N=X===_e.upper,k=Gn(b.path,X.start+M*X.step),Y=Gn(b.path,X.start+(M+1)*X.step),K=Gn(b.path,X.start+(M+.5)*X.step),ht=X.y+M*X.rise;for(let at=1;at<b.path.length;at++){const pt=ur([k[at-1],k[at],Y[at],Y[at-1],k[at-1]].map(G=>[G.x,G.z])),Lt=N?An.difference([pt],...Lh):[[pt]];if(m(Lt,ht,.25,l.floor,t),N&&M<X.bands-1){const G=An.difference([cn(Y[at-1],Y[at],.045)],...Lh);m(G,ht+X.rise,.42,l.floor,t)}const Ct=b.path[at-1],A=b.path[at],x=qt(Ct,A);h(K[at-1],K[at],ht,{x:-(A.z-Ct.z)/x,z:(A.x-Ct.x)/x},N?L:[])}}m(zu,b.y+_e.wallHeight,_e.wallHeight,l.wall,e.get(b.id));for(const X of Jn.portals){const M=X.direction,N={x:-M.z,z:M.x},k={x:X.start.x+M.x*5.6,z:X.start.z+M.z*5.6},Y={x:X.start.x+M.x*11.4,z:X.start.z+M.z*11.4};for(const K of[-1,1]){const ht=K*(X.width/2+.12),at={x:k.x+N.x*ht,z:k.z+N.z*ht},pt={x:Y.x+N.x*ht,z:Y.z+N.z*ht},Lt=qt(at,pt),Ct=new to([new mt(0,0),new mt(Lt,0),new mt(Lt,1.1),new mt(0,2.4)]),A=new Ks(Ct,{depth:.24,bevelEnabled:!1});A.translate(0,0,-.12),A.rotateY(-Math.atan2(M.z,M.x)),A.translate(at.x,b.y,at.z),f(A,l.wall,t)}_({x:k.x+N.x*X.width/2,z:k.z+N.z*X.width/2,y:b.y+2.55},{x:k.x-N.x*X.width/2,z:k.z-N.z*X.width/2,y:b.y+2.55},.18,.32,l.beam,t),o.set(X.number,R(X.number,{x:k.x+M.x*.13,z:k.z+M.z*.13,y:b.y+2.25},2.8,.64,"entrance",X.end))}const U=Gn(b.path,_e.glassOffset),j=Vn("#c9d3d5",{transparent:!0,opacity:.28,depthWrite:!1});for(let X=1;X<U.length;X++){const M={...U[X-1],y:9.4},N={...U[X],y:9.4};_(M,N,.045,.95,j,t),_({...M,y:9.91},{...N,y:9.91},.055,.055,l.dark,t);const k=qt(M,N);for(let Y=0;Y<=k;Y+=2.4){const K=Y/k;d(.05,1.05,.05,M.x+(N.x-M.x)*K,9.4,M.z+(N.z-M.z)*K,l.dark,t)}}const Z=Gn(b.path,_e.roofInner),Q=Gn(b.path,_e.roofOuter),ct=new ye;ct.name="sky-roof-supports",ct.userData={source:"V08-36/37",accuracy:"inferred-position-and-size",publicWalkable:!1},a.add(ct);for(let X=1;X<b.path.length;X++){p([{...Z[X-1],y:cs(_e.roofInner)},{...Z[X],y:cs(_e.roofInner)},{...Q[X],y:cs(_e.roofOuter)},{...Q[X-1],y:cs(_e.roofOuter)}],.22);const M=b.path[X-1],N=b.path[X],k=qt(M,N),Y=-(N.z-M.z)/k,K=(N.x-M.x)/k;for(let ht=8;ht<k-5;ht+=12){const at=M.x+(N.x-M.x)*ht/k+Y*-11.1,pt=M.z+(N.z-M.z)*ht/k+K*-11.1;if(Math.abs(at+22.26066420664207)<1e-6&&Math.abs(pt-102.72273062730626)<1e-6)continue;const Lt=20.3,Ct=cs(-11.1)-.35;d(.65,Lt+7,.65,at,(Lt-7)/2,pt,l.wall,ct);for(const A of[-1,1])g({x:at,y:Lt,z:pt},{x:at+(N.x-M.x)/k*2*A,y:Ct,z:pt+(N.z-M.z)/k*2*A},.35,l.wall,ct)}for(let ht=8;ht<k-5;ht+=12){const at=M.x+(N.x-M.x)*ht/k,pt=M.z+(N.z-M.z)*ht/k,Lt=(Ct,A=0)=>({x:at+Y*Ct,z:pt+K*Ct,y:cs(Ct)-A});g(Lt(-11,.35),Lt(18,.35),.18,l.beam,a),g(Lt(-11,1.4),Lt(18,.35),.12,l.beam,a);for(let Ct=-11;Ct<18;Ct+=4){const A=1.4-(Ct+11)/29*1.05;g(Lt(Ct,.35),Lt(Ct,A),.08,l.beam,a),g(Lt(Ct,A),Lt(Math.min(18,Ct+4),.35),.08,l.beam,a)}}}}for(const b of _o){const H=new ye;H.name=b.id,H.position.set(b.x,b.y,b.z),H.rotation.y=b.yaw,t.add(H),d(b.width,b.height,b.depth,0,b.height/2,0,l.wall,H),d(b.width,.3,.9,0,4.25,-.25,l.beam,H),d(.18,.76,.18,1.25,3,.19,l.dark,H),d(.13,.56,.2,1.25,3,.21,l.white,H)}{const b=gv,H=new ye;H.name=b.id,H.position.set(b.position.x,b.bottom,b.position.z),H.rotation.y=b.yaw,H.userData={...b},t.add(H);const B=[[-18.8,-.6],[-24,5],[-24,10],[-18.8,14],[-18.8,21],[-12,21],[0,31],[12,21],[18.8,21],[18.8,14],[24,10],[24,5],[18.8,-.6],[-18.8,-.6]],it=new to(B.map(([ct,X])=>new mt(ct,X))),L=new Ks(it,{depth:b.depth,bevelEnabled:!1});L.translate(0,0,-1.5),f(L,l.beam,H);for(let ct=1;ct<B.length;ct++){const X=B[ct-1],M=B[ct];g({x:X[0],y:X[1],z:.03},{x:M[0],y:M[1],z:.03},.12,l.white,H)}for(const ct of[-14,14])d(1.1,b.bottom+7,1.1,ct,-11.8/2,-.6,l.wall,H);const U=document.createElement("canvas");U.width=1200,U.height=680;const j=U.getContext("2d");j.fillStyle="#30373c",j.fillRect(0,0,1200,680),j.strokeStyle="#858e94",j.lineWidth=3,j.strokeRect(24,24,1152,632),j.fillStyle="#e8ebe9",j.textAlign="center",j.font="500 64px sans-serif",j.fillText("DAEGU",600,265),j.font="600 84px sans-serif",j.fillText("LIONS PARK",600,365),j.font='34px "Malgun Gothic",sans-serif',j.fillText("대구 삼성 라이온즈 파크",600,450);const Z=new Pc(U);Z.colorSpace=Be;const Q=new Pe(new pn(b.screen.width,b.screen.height),new Vi({map:Z}));Q.name="main-screen",Q.position.set(0,b.screen.height/2,.055),H.add(Q);for(const[ct,X,M,N]of[[-23,8,6.4,7],[23,8,6.4,7],[0,27,7.2,8]])d(M+.35,N+.35,.4,ct,X,.2,l.wall,H),d(M,N,.08,ct,X,.43,l.dark,H);for(const ct of[-3.4,3.4])d(.24,5,.24,ct,32.3,-.3,l.wall,H);d(14.5,2.6,.3,0,35,-.4,l.dark,H);for(let ct=0;ct<3;ct++)for(let X=0;X<12;X++){const M=new ho(.21,.21,.14,6);M.rotateX(Math.PI/2),M.translate(-6.6+X*1.2,34.15+ct*.85,-.18),f(M,l.white,H)}}const I=new rn(.48,.09,.45);I.translate(0,.42,0);const z=new rn(.48,.4,.075);z.translate(0,.68,-.2);const q=new rn(.085,.39,.26);q.translate(0,.195,0);const ot=ma([I,z,q]),$=new pn(.48,.4);$.translate(0,.68,-.2);const et=new pn(.48,.45);et.rotateX(-Math.PI/2),et.translate(0,.42,0);const lt=ma([$,et]),st=l.seat.clone();st.side=Qe;const vt=new ye;vt.name="illustrative-chairs",vt.userData.visualCount=u.length,t.add(vt);const Mt=new Map;for(const b of u){const H=b.elements,B=[Math.floor(H[12]/32),Math.floor(H[13]/8),Math.floor(H[14]/32)].join(",");Mt.has(B)||Mt.set(B,[]),Mt.get(B).push(b)}for(const[b,H]of Mt){const[B,it,L]=b.split(",").map(Number),U=new O(B*32+16,it*8+4,L*32+16),j=new ie().makeTranslation(-U.x,-U.y,-U.z),Z=new wd;Z.position.copy(U),vt.add(Z);for(const[Q,ct,X]of[[ot,l.seat,0],[lt,st,n?20:32]]){const M=new Ad(Q,ct,H.length);H.forEach((N,k)=>M.setMatrixAt(k,N.clone().premultiply(j))),M.computeBoundingSphere(),Z.addLevel(M,X)}Z.addLevel(new ye,n?55:90)}for(const b of Bu){const H=new ye;H.name="facility-facade-"+b.id,H.position.set(b.x,b.y,b.z),H.rotation.y=b.yaw,H.userData={source:b.source,accuracy:b.accuracy,publicInterior:!1},t.add(H);for(const B of b.parts)d(B.width,B.height,B.depth,B.x,B.y,B.z,l[B.material],H)}for(const b of _i){if(b.kind==="walkway"){const N=o.get("13");N.userData.destination=b.id,s.push(N),i.push({mesh:N,destination:b});continue}const H=Mi(b.floor),B=bn(b.position,H),it=H.path[B.segment],L=H.path[B.segment+1],U=qt(it,L);-(L.z-it.z)/U,(L.x-it.x)/U,b.kind,H.width/2-.55;const j={...b.facade},Z=["nursing","kids","restroom"].includes(b.kind);if(Z){const N=b.position.x-j.x,k=b.position.z-j.z,Y=Math.hypot(N,k);j.x+=N/Y*.13,j.z+=k/Y*.13,j.y=b.position.y+1.9}const Q=b.kind==="section"?b.code:b.kind==="entrance"?`SKY ${b.entranceNumber}`:b.kind==="nursing"?"수유실":b.kind==="kids"?"어린이 쉼터":b.name.split(" · ")[0],ct=b.signMount==="column",X=fo.find(N=>N.destination===b.id);if(ct){const N=X,k=N.column,Y=new ye;Y.name="column-sign-"+b.code,Y.userData={source:N.source,accuracy:N.accuracy,column:{...k}},t.add(Y),d(.701,.9,.701,k.x,N.position.y,k.z,new Vi({color:"#343b43"}),Y)}const M=R((X==null?void 0:X.text)||Q,j,ct?X.width:b.kind==="section"?2.1:b.kind==="entrance"?2.8:b.frontageGroup?1.35:Z?1.8:4.2,ct?X.height:["section","entrance"].includes(b.kind)?.64:Z?.4:.8,ct?"column":_o.some(N=>N.destination===b.id)?"painted":b.kind,b.position,X==null?void 0:X.textScale);M.userData={destination:b.id,signFace:"primary"},s.push(M),i.push({mesh:M,destination:b,face:"primary"});for(const N of(X==null?void 0:X.additionalFaces)||[]){const k=R((X==null?void 0:X.text)||Q,N.position,X.width,X.height,"column",N.faceToward,X==null?void 0:X.textScale);k.userData={destination:b.id,signFace:N.id},s.push(k),i.push({mesh:k,destination:b,face:N.id})}}t.traverse(b=>{if(b.isMesh&&!b.isInstancedMesh&&!b.material.map){const H=b.parent.uuid+":"+b.material.uuid;c.has(H)||c.set(H,[]),c.get(H).push(b)}}),t.updateMatrixWorld(!0);for(const b of c.values()){if(b.length<2)continue;const H=b[0].parent,B=b.map(U=>{const j=U.geometry.index?U.geometry.toNonIndexed():U.geometry.clone();return j.applyMatrix4(U.matrix),j}),it=ma(B,!1);if(!it)continue;const L=new Pe(it,b[0].material);L.receiveShadow=!0,L.castShadow=!0,H.add(L),b.forEach(U=>H.remove(U)),B.forEach(U=>U.dispose())}return{root:t,labels:i,pickables:s,floorGroups:e,surfaces:r,roofs:a}}function vv(n){const t=new ye;if(!(n!=null&&n.length))return t;const e=[{width:1.15,color:"#39322b",offset:.022},{width:.92,color:"#fff4d9",offset:.028},{width:.66,color:"#ff8a24",offset:.034}];for(const i of e){const s=[];for(let a=1;a<n.length;a++){const l=n[a-1],c=n[a],u=qt(l,c);let h=l,f=c;if(u<1e-4){if(Math.abs(l.y-c.y)<.001)continue;h=n[Math.max(0,a-2)],f=c,qt(h,f)<.001&&(h=l,f=n[Math.min(n.length-1,a+1)])}const d=qt(h,f);if(d<.001)continue;const m=-(f.z-h.z)/d*i.width/2,_=(f.x-h.x)/d*i.width/2,g=l.y+i.offset,p=c.y+i.offset,R=E=>s.push(...E[0],...E[1],...E[2],...E[0],...E[2],...E[3]);if(u<1e-4){const E=c.y>l.y?-1:1,y=(f.x-h.x)/d*i.offset*E,T=(f.z-h.z)/d*i.offset*E;R([[l.x+m+y,g,l.z+_+T],[c.x+m+y,p,c.z+_+T],[c.x-m+y,p,c.z-_+T],[l.x-m+y,g,l.z-_+T]])}else Math.abs(l.y-c.y)>.01&&(l.connector||c.connector)?(R([[l.x+m,g,l.z+_],[c.x+m,g,c.z+_],[c.x-m,g,c.z-_],[l.x-m,g,l.z-_]]),R([[c.x+m,g,c.z+_],[c.x+m,p,c.z+_],[c.x-m,p,c.z-_],[c.x-m,g,c.z-_]])):R([[l.x+m,g,l.z+_],[c.x+m,p,c.z+_],[c.x-m,p,c.z-_],[l.x-m,g,l.z-_]])}const r=new Ve;r.setAttribute("position",new be(s,3)),r.computeVertexNormals();const o=new Pe(r,new Vi({color:i.color,side:Qe,depthTest:!0}));o.renderOrder=2,t.add(o)}return t}function yv(n,{isRotated:t}){let e=null,i=null;const s=()=>{e=null,i=null};n.addEventListener("touchstart",r=>{if(i=null,e=null,!t()||r.touches.length!==1||r.target.closest('canvas,input[type="range"]'))return;const o=[];for(let l=r.target;l&&l!==n;l=l.parentElement){const c=getComputedStyle(l),u=/(auto|scroll)/.test(c.overflowX)&&l.scrollWidth>l.clientWidth+1,h=/(auto|scroll)/.test(c.overflowY)&&l.scrollHeight>l.clientHeight+1;(u||h)&&o.push({node:l,x:u,y:h})}if(!o.length)return;const a=r.touches[0];e={id:a.identifier,x:a.clientX,y:a.clientY,startX:a.clientX,startY:a.clientY,scrollers:o,moved:!1}},{passive:!0}),n.addEventListener("touchmove",r=>{const o=e;if(!o||!t()||r.touches.length!==1){e=null;return}const a=[...r.touches].find(d=>d.identifier===o.id);if(!a||!o.moved&&Math.hypot(a.clientX-o.startX,a.clientY-o.startY)<6)return;r.preventDefault(),o.moved=!0;const l=o.y-a.clientY,c=a.clientX-o.x,u=Math.abs(c)>=Math.abs(l)?"y":"x",h=u==="y"?c:l,f=u==="y"?"scrollTop":"scrollLeft";for(const{node:d,...m}of o.scrollers){if(!m[u])continue;const _=d[f];if(d[f]+=h,Math.abs(d[f]-_)>.1)break}o.x=a.clientX,o.y=a.clientY},{passive:!1}),n.addEventListener("touchend",()=>{e!=null&&e.moved&&(i={node:e.scrollers[0].node,until:performance.now()+400}),e=null},{passive:!0}),n.addEventListener("touchcancel",s,{passive:!0}),n.addEventListener("click",r=>{i&&r.detail&&performance.now()<i.until&&i.node.contains(r.target)&&(r.preventDefault(),r.stopPropagation(),i=null)},{capture:!0}),window.addEventListener("inside:layout-changing",s),window.addEventListener("blur",s)}function Mv(n){var u,h,f;const t=document.documentElement,e=document.createElement("button");e.id="landscape-fullscreen",e.className="btn",e.setAttribute("aria-label","전체 화면으로 보기"),e.setAttribute("aria-pressed","false"),e.innerHTML='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true"><path d="M8 3H3v5m13-5h5v5M3 16v5h5m13-5v5h-5"/></svg><span>전체 화면</span>',n.querySelector(".top-actions").prepend(e);const i=!!(document.fullscreenEnabled&&t.requestFullscreen);let s=!1,r=!1,o="",a=0;function l(){var I;a=0,s=(navigator.maxTouchPoints>0||matchMedia("(any-pointer:coarse)").matches)&&(Math.min(screen.width,screen.height)<=600||/iPhone|iPod|Android.*Mobile/.test(navigator.userAgent));const m=(I=screen.orientation)==null?void 0:I.type,_=m?m.startsWith("portrait"):typeof window.orientation=="number"?Math.abs(window.orientation)%180===0:screen.width<=screen.height,g=s&&_,p=window.visualViewport,R=(p==null?void 0:p.width)??innerWidth,E=(p==null?void 0:p.height)??innerHeight,y=(p==null?void 0:p.offsetLeft)??0,T=(p==null?void 0:p.offsetTop)??0,C=`${g}:${R}:${E}:${y}:${T}`,P=g!==r;o&&C!==o&&window.dispatchEvent(new CustomEvent("inside:layout-changing",{detail:{orientationChanged:P}})),r=g,t.classList.toggle("phone-layout",s),t.classList.toggle("phone-rotated",r),t.classList.toggle("phone-compact",s&&(r?R:E)<=360);for(const[z,q]of Object.entries({"app-width":r?E:R,"app-height":r?R:E,"display-width":R,"display-left":y,"display-top":T,"display-center-x":y+R/2,"display-center-y":T+E/2}))t.style.setProperty(`--${z}`,`${q}px`);const D=document.activeElement,v=s&&(D==null?void 0:D.matches('input:not([type="range"]):not([type="checkbox"]),textarea,[contenteditable="true"]'))&&E<(_?Math.max(screen.width,screen.height):Math.min(screen.width,screen.height))*.72;t.classList.toggle("phone-keyboard",!!v),e.hidden=!s||!i;const S=!!document.fullscreenElement;e.setAttribute("aria-pressed",String(S)),e.setAttribute("aria-label",S?"전체 화면 끝내기":"전체 화면으로 보기"),o&&C!==o&&window.dispatchEvent(new CustomEvent("inside:layout-ready",{detail:{orientationChanged:P}})),o=C,v&&D.scrollIntoView({block:"nearest",inline:"nearest"})}const c=()=>{a||(a=requestAnimationFrame(l))};return e.onclick=async()=>{try{document.fullscreenElement?await document.exitFullscreen():await t.requestFullscreen()}catch{}c()},window.addEventListener("resize",c),window.addEventListener("orientationchange",c),(u=window.visualViewport)==null||u.addEventListener("resize",c),(h=window.visualViewport)==null||h.addEventListener("scroll",c),(f=screen.orientation)==null||f.addEventListener("change",c),document.addEventListener("fullscreenchange",c),document.addEventListener("focusin",c),document.addEventListener("focusout",c),l(),yv(n,{isRotated:()=>r}),{get rotated(){return r},get phone(){return s}}}function Sv(n,{isRotated:t}){const e=new Map,i=new Map,s=c=>i.set(c.pointerId,{pointerId:c.pointerId,pointerType:c.pointerType,clientX:c.clientX,clientY:c.clientY});n.addEventListener("pointerdown",s,{capture:!0}),n.addEventListener("pointermove",c=>{i.has(c.pointerId)&&s(c)},{capture:!0});for(const c of["pointerup","pointercancel","lostpointercapture"])n.addEventListener(c,u=>i.delete(u.pointerId),{capture:!0});function r(c){if(!("clientX"in c))return c;const u=n.getBoundingClientRect(),h=t(),f=n.clientWidth/(h?u.height:u.width)||1,d=n.clientHeight/(h?u.width:u.height)||1,m=(h?c.clientY-u.top:c.clientX-u.left)*f,_=(h?u.right-c.clientX:c.clientY-u.top)*d,g={clientX:m,clientY:_,pageX:m,pageY:_,offsetX:m,offsetY:_,movementX:(h?c.movementY:c.movementX)*f,movementY:(h?-c.movementX:c.movementY)*d};return new Proxy(c,{get(p,R){if(R in g)return g[R];const E=Reflect.get(p,R,p);return typeof E=="function"?E.bind(p):E}})}function o(c,u,h){const f=`${c}:${typeof h=="boolean"?h:!!(h!=null&&h.capture)}`;e.has(f)||e.set(f,new WeakMap);const d=e.get(f);return d.has(u)||d.set(u,m=>{const _=r(m);typeof u=="function"?u.call(a,_):u.handleEvent(_)}),d.get(u)}const a=new Proxy(n,{get(c,u){if(u==="addEventListener")return(f,d,m)=>{d&&c.addEventListener(f,o(f,d,m),m)};if(u==="removeEventListener")return(f,d,m)=>{d&&c.removeEventListener(f,o(f,d,m),m)};if(u==="getBoundingClientRect")return()=>new DOMRect(0,0,c.clientWidth,c.clientHeight);const h=Reflect.get(c,u,c);return typeof h=="function"?h.bind(c):h}});function l(){for(const c of[...i.values()])n.dispatchEvent(new PointerEvent("pointercancel",{...c,bubbles:!0})),n.hasPointerCapture(c.pointerId)&&n.releasePointerCapture(c.pointerId);i.clear()}return{surface:a,cancelPointers:l}}function Ev(n,{enabled:t,onMove:e,onLook:i,onBegin:s,onState:r=()=>{}}){const o=new Map,a=48,l=7;function c(){const f=[...o.values()].find(g=>g.mode==="move"),d=[...o.values()].find(g=>g.mode==="look"),m=f?Math.hypot(f.dx,f.dy):0,_=Math.min(1,Math.max(0,(m-l)/(a-l)));e({forward:m?-f.dy/m*_:0,side:m?f.dx/m*_:0}),r({move:f?{x:f.x,y:f.y,dx:f.dx/Math.max(1,m/a),dy:f.dy/Math.max(1,m/a)}:null,look:d?{x:d.lastX,y:d.lastY}:null})}function u(){o.clear(),c()}n.addEventListener("pointerdown",f=>{if(!t()||f.pointerType==="mouse")return;const d=f.clientX<n.clientWidth/2?"move":"look";[...o.values()].some(m=>m.mode===d)||(f.preventDefault(),o.set(f.pointerId,{x:f.clientX,y:f.clientY,lastX:f.clientX,lastY:f.clientY,dx:0,dy:0,mode:d}),n.setPointerCapture(f.pointerId),c())}),n.addEventListener("pointermove",f=>{const d=o.get(f.pointerId);if(d){if(!t()){u();return}f.preventDefault(),d.mode==="look"&&i(f.clientX-d.lastX,f.clientY-d.lastY),d.dx=f.clientX-d.x,d.dy=f.clientY-d.y,d.lastX=f.clientX,d.lastY=f.clientY,c()}});const h=f=>{o.delete(f.pointerId),c()};for(const f of["pointerup","pointercancel","lostpointercapture"])n.addEventListener(f,h);return window.addEventListener("blur",u),document.addEventListener("visibilitychange",()=>{document.hidden&&u()}),{reset:u}}function wv({x:n,y:t,width:e,height:i,camera:s,root:r,pickables:o,clippingPlanes:a=[]}){if(e<=0||i<=0||n<0||t<0||n>e||t>i)return null;const l=new xp;s.updateMatrixWorld(),r.updateMatrixWorld(!0),l.setFromCamera(new mt(n/e*2-1,1-t/i*2),s),l.near=s.near,l.far=s.far;const c=d=>{for(let m=d;m;m=m.parent)if(!m.visible)return!1;return!0},u=d=>a.every(m=>m.distanceToPoint(d.point)>=-1e-6),h=l.intersectObjects(o.filter(c),!1).find(u);if(!h)return null;const f=[];return r.traverseVisible(d=>{d.isMesh&&d!==h.object&&f.push(d)}),l.far=h.distance-.01,l.intersectObjects(f,!1).some(u)?null:h.object.userData.destination||null}function Tv(n,{enabled:t,pick:e,onSelect:i,now:s=()=>performance.now()}){var u;const r=new Set;let o=null;const a=()=>{r.clear(),o=null},l={pointerdown(h){if(r.add(h.pointerId),r.size!==1||h.button!==0||h.ctrlKey||h.metaKey||h.altKey||!t()){o=null;return}const f=e(h.clientX,h.clientY);o=f?{pointer:h.pointerId,id:f,x:h.clientX,y:h.clientY,time:s()}:null},pointermove(h){(o==null?void 0:o.pointer)===h.pointerId&&Math.hypot(h.clientX-o.x,h.clientY-o.y)>6&&(o=null)},pointerup(h){const f=o;o=null,r.delete(h.pointerId),!(!f||f.pointer!==h.pointerId||r.size||h.button!==0||h.buttons||!t()||s()-f.time>550||Math.hypot(h.clientX-f.x,h.clientY-f.y)>6)&&e(h.clientX,h.clientY)===f.id&&i(f.id)},pointercancel(h){r.delete(h.pointerId),o=null},lostpointercapture(h){r.delete(h.pointerId),o=null}};for(const[h,f]of Object.entries(l))n.addEventListener(h,f);const c=h=>{r.size&&!r.has(h.pointerId)&&(o=null)};return(u=n.ownerDocument)==null||u.addEventListener("pointerdown",c,!0),{reset:a,dispose(){var h;a();for(const[f,d]of Object.entries(l))n.removeEventListener(f,d);(h=n.ownerDocument)==null||h.removeEventListener("pointerdown",c,!0)}}}const bv=[{id:"accessible-restrooms",name:"장애인 화장실 · 3층",kind:"accessible",detail:"1루·3루 휠체어석 뒤",aliases:"화장실 장애인화장실 휠체어 화장실 WC restroom toilet",source:"V19",locations:["3층 3루 휠체어석 뒤","3층 1루 휠체어석 뒤"],note:"계단뿌셔클럽 현장 조사에 따른 안내입니다. 가까운 출입문은 현장 표지나 직원에게 확인해 주세요.",navigationNote:"정확한 출입문 위치를 확인 중입니다. 현재는 3D 길안내와 거리를 제공하지 않습니다.",sourceURL:"https://con.staircrusher.club/289c9499-b060-8067-93a7-d956c6c23519",sourceLabel:"계단뿌셔클럽 현장 조사 안내",checkedAt:"2026.11.10"},{id:"lockers",name:"물품보관함",kind:"locker",detail:"중앙매표소 양옆 · 전설로주차장 입구",aliases:"짐 보관 짐보관소 락커 라커 사물함 캐리어",source:"O09",locations:["A·B: 중앙매표소 양옆","C: 전설로주차장 입구"],note:"요금과 이용 가능 여부는 현장 보관함 안내를 확인해 주세요.",sourceURL:"https://www.samsunglions.com/img/intro/2026_03.jpg"},{id:"team-store",name:"팀스토어 · 유니폼 마킹",kind:"shop",detail:"어센틱샵 · 레플리카 베리즈샵",aliases:"굿즈 유니폼 마킹 매장 용품점 샵 쇼핑",source:"O11",locations:["팀스토어: 어센틱샵 / 레플리카 베리즈샵","마킹샵: 어센틱 매장 옆"],note:"마킹은 보통 매장 안에서 진행하며, 혼잡할 때는 매장 밖에서도 운영합니다.",sourceURL:"https://www.samsunglions.com/img/intro/2026_04.jpg"},{id:"smoking-areas",name:"구장 밖 흡연구역",kind:"outside",detail:"외야 출입구 뒤 등 외부 4곳",aliases:"흡연장 흡연실 담배",source:"O12",locations:["외야 출입구 뒤 주차장 인근","GATE 21 아래 매표소 뒤편","팀스토어 맞은편","전설로주차장 2F 옆"],note:"게이트 안쪽은 전 구역 금연입니다.",sourceURL:"https://www.samsunglions.com/img/intro/2026_07.jpg"}];function Av(n){const t=fi(n);return bv.filter(e=>!t||fi([e.name,e.detail,e.aliases,...e.locations].join(" ")).includes(t))}const Ei={nursing:'<path d="M9 3h6v4l2 3v10H7V10l2-3V3Zm0 4h6M7 12h10M10 16h4"/>',kids:'<path d="m6 20 2-6-3-4 4-2 2-4 4 3 4 2-1 4h-5l-2 7M4 21h15"/>',gate:'<path d="M5 21V4h14v17M9 21V9h10M13 14h2"/>',section:'<path d="M6 4v9h12V4M4 11v6h16v-6M7 17v4m10-4v4"/>',accessible:'<circle cx="11" cy="4" r="2"/><path d="m10 7 1 7h6l3 6 2-1M11 10h6M7 11a5 5 0 1 0 7 7"/>'};Ei.entrance=Ei.gate;Ei.walkway=Ei.gate;Ei.restroom='<circle cx="12" cy="4" r="2"/><path d="m10 8-4 9h12l-4-9M10 17v5m4-5v5"/>';const Oh=n=>`<svg viewBox="0 0 24 24" aria-hidden="true">${Ei[n]||Ei.section}</svg>`,xn=document.querySelector("#app");xn.innerHTML=`<header><div class="brand"><i class="brand-mark"></i>inside</div><div class="building-name">대구 라이온즈 파크<small>DAEGU SAMSUNG LIONS PARK</small></div><div class="top-actions"><button class="btn" id="help">이용 안내</button><button class="btn" id="about">공간 정보</button></div></header>
<main class="stage" aria-label="대구 라이온즈 파크 3D 탐색"><div class="view-tools" aria-label="보기 방식"><button data-view="overview" class="active">3D 둘러보기</button><button data-view="plan">평면</button><button data-view="walk">걷기</button></div><div class="floor-switch" aria-label="관찰할 층"><button data-floor="all" class="active">전체</button><button data-floor="3F">3F</button><button data-floor="5F">5F</button></div>
<div class="location-card"><div class="eyebrow"><i class="dot"></i> WALK THROUGH THE PARK</div><h1>경기장 안의 길을,<br>미리 걸어보세요.</h1><p>출입구에서 관람 구역까지.<br>화장실·수유실과 어린이 쉼터도 찾아보세요.</p><div class="tag">대구 수성구 야구전설로 1 · 공용 회랑 탐색</div></div>
<aside class="nav-panel" aria-label="길찾기"><div class="panel-heading">어디로 갈까요?<button id="collapse" class="icon-btn" aria-label="길찾기 접기">›</button></div><div class="panel-scroll"><label class="field-label" for="start">출발 위치</label><select id="start" class="field"><option value="current">현재 위치에서</option>${Eo.map(n=>`<option value="${n.id}">${n.name}</option>`).join("")}</select><hr class="split-rule"><div class="tabs"><button data-tab="facilities" class="active">장소 찾기</button><button data-tab="seats">좌석 찾기</button></div><div id="facility-input"><label class="field-label" for="search">목적지</label><input class="field" id="search" type="search" placeholder="수유실, SKY 09, U25…" autocomplete="off"><div class="results" id="results"></div></div><form id="seat-input" hidden><label class="field-label" for="section">구역</label><input id="section" class="field" placeholder="예: 3-1, T3-1, U25" autocomplete="off"><div class="seat-extra"><label><span class="field-label">열 · 선택</span><input id="seat-row" class="field" inputmode="numeric" placeholder="열"></label><label><span class="field-label">번호 · 선택</span><input id="seat-number" class="field" inputmode="numeric" placeholder="번호"></label></div><p class="panel-foot">구역만 입력하면 회랑의 구역 입구까지 안내합니다.</p></form><div id="selected" class="selected-name">목적지를 선택해 주세요</div><button id="route" class="primary"><span>길찾기</span><span aria-hidden="true">↗</span></button><p id="message" class="route-message" role="status"></p><p class="panel-foot">안내선은 앱 안의 현재 위치에서 시작합니다.</p></div></aside>
<button class="nav-tab" id="expand" aria-label="길찾기 펼치기" hidden><span>⌕</span>길찾기</button><div class="guidance-hud" hidden><div class="guidance-arrow">↗</div><div><div class="guidance-title"></div><div class="guidance-detail">바닥의 주황색 선을 따라가세요</div></div><div class="guidance-distance"></div><button id="end-guidance" class="end-guidance" aria-label="길안내 종료" title="길안내 종료"><span aria-hidden="true">×</span></button></div><div class="minimap"><small>현재 위치 · <b id="body-floor">3F</b></small><canvas aria-label="현재 위치 지도" width="252" height="252"></canvas></div><div class="controls-hint" hidden><span>왼쪽 · 이동</span><span>오른쪽 · 시점</span></div><div class="joystick" hidden><i></i></div><div class="toast" role="status" hidden></div><div class="info-overlay" hidden><section class="info-card" role="dialog" aria-modal="true" aria-labelledby="info-title"><button class="icon-btn" id="info-close" aria-label="안내 닫기">×</button><h2 id="info-title"></h2><div id="info-body"></div></section></div></main>`;const Pt=n=>xn.querySelector(n),Qn=Pt(".stage"),Bl=Mv(xn);let qe;try{qe=new n0({antialias:!Bl.phone,alpha:!1,powerPreference:"high-performance"})}catch(n){throw Qn.insertAdjacentHTML("beforeend",'<div class="error-screen">3D 화면을 열지 못했습니다.<br>WebGL을 지원하는 브라우저에서 다시 열어 주세요.</div>'),n}qe.domElement.className="webgl";qe.domElement.setAttribute("aria-label","경기장 3D 화면");Qn.prepend(qe.domElement);qe.setPixelRatio(Math.min(devicePixelRatio,1.75));qe.outputColorSpace=Be;qe.toneMapping=Gh;qe.toneMappingExposure=.85;qe.setClearColor("#e8eae7");const vn=new Ed;vn.background=new Qt("#e8eae7");const Rv=new bl("#e8eae7",230,560);vn.fog=null;vn.add(new dp("#ffffff","#999e9c",1.65));const Gu=new gp("#fffaf3",1.6);Gu.position.set(-90,160,70);vn.add(Gu);const Rs=xv({compact:Bl.phone});vn.add(Rs.root);Rs.roofs.visible=!1;const fr=new Pe(new Pl(1.6,2.05,48),new Vi({color:"#dc7d34",side:Qe}));fr.rotation.x=-Math.PI/2;fr.visible=!1;vn.add(fr);const pi=document.createElement("div");pi.className="destination-pin";pi.hidden=!0;Qn.append(pi);const kl=new Pe(new pn(5e3,5e3),new vu({color:"#e0e3de",roughness:1}));kl.rotation.x=-Math.PI/2;kl.position.y=-7;vn.add(kl);const Me=new an(46,1,.8,1100),Wu=Sv(qe.domElement,{isRotated:()=>Bl.rotated}),$n=Wu.surface,ke=new s0(Me,$n);ke.enableDamping=!0;ke.dampingFactor=.09;ke.maxPolarAngle=Math.PI*.47;ke.minDistance=12;ke.maxDistance=440;ke.target.set(0,1,0);Me.position.set(-180,150,200);ke.update();let Xt=Vu(),ue="overview",Zs="all",Oi="facilities",xe=null,oe=null,gs=null,xo={forward:0,side:0},hi=null,Js=0,Fh,Ys=null;const Je=new Set,qs=new Set(["nursing","kids","restroom"]);let Xe=null,zh="",Bh=new Map,ga=0;function Xu(n){Pt(".toast").textContent=n,Pt(".toast").hidden=!1,clearTimeout(Fh),Fh=setTimeout(()=>Pt(".toast").hidden=!0,3600)}function yn(){Je.clear(),xo={forward:0,side:0},hi=null,Xe=null,Cv.reset(),Pv.reset(),Wu.cancelPointers()}function To(n){Pt(".nav-panel").hidden=!n,Pt("#expand").hidden=n,Pt("#collapse").setAttribute("aria-expanded",String(n)),yn(),n&&Is()}function Vl(n){var t;yn(),ue=n,vn.fog=ue==="walk"?Rv:null,Rs.roofs.visible=ue==="walk",Qn.classList.toggle("walking",ue==="walk"),Pt(".controls-hint").hidden=ue!=="walk",ke.enabled=ue!=="walk",Pt(".location-card").hidden=ue==="walk",xn.querySelectorAll("[data-view]").forEach(e=>{e.classList.toggle("active",e.dataset.view===ue),e.setAttribute("aria-pressed",String(e.dataset.view===ue))}),Me.near=ue==="walk"?.08:.8,Me.updateProjectionMatrix(),qe.clippingPlanes=ue!=="walk"&&Zs==="3F"?[new Wn(new O(0,-1,0),4.85)]:[],ue==="walk"?(To(!1),Xl()):ue==="plan"?(ke.enableRotate=!1,Me.up.set(0,0,-1),Me.position.set(0,300,.01),ke.target.set(0,((t=Mi(Zs))==null?void 0:t.y)??0,0),ke.update()):(ke.enableRotate=!0,Me.up.set(0,1,0),Me.position.set(-180,150,200),ke.target.set(0,Zs==="5F"?9.6:0,0),ke.update()),Gl()}function Hl(n){xe=cr(n),Pt("#selected").textContent=xe?xe.name+" · "+xe.floor:"목적지를 선택해 주세요",Pt("#message").textContent="",pi.textContent=xe?xe.name+" · "+xe.floor:"",Is(),Gl()}function Gl(){const n=!!xe&&ue!=="walk"&&(Zs!=="3F"||xe.floor==="3F");if(fr.visible=n,pi.hidden=!n,!n)return;const t=xe.position;fr.position.set(t.x,t.y+.05,t.z);const e=new O(t.x,t.y+3,t.z).project(Me);pi.hidden=e.z<-1||e.z>1||Math.abs(e.x)>.94||Math.abs(e.y)>.94,pi.style.left=(e.x+1)*Qn.clientWidth/2+"px",pi.style.top=(1-e.y)*Qn.clientHeight/2+"px"}function Yu(){const n=[Xt.floor,Xt.connector,Xt.seating,...["x","y","z","s","lateral"].map(t=>Math.round((Xt[t]||0)*10))].join(":");return n!==zh&&(zh=n,Bh=new Map(_i.filter(t=>qs.has(t.kind)).map(t=>[t.id,wo(Xt,t)]))),Bh}function qu(){const n=xn.querySelectorAll("[data-walking-distance]");if(!n.length)return;const t=Yu();for(const e of n){const i=t.get(e.dataset.walkingDistance),s=i&&!i.error;e.textContent=s?"약 "+Math.round(i.distance)+" m":"거리 확인 불가",e.dataset.meters=s?String(i.distance):"";const r=e.closest(".result").querySelector(".result-via");r.textContent=s&&i.usesStairs?" · 계단 경유":""}}function Is(){const n=Pt("#search").value,t=D0(n),e=Av(n),i=Pt("#results"),s=t.some(o=>qs.has(o.kind));if(s){const o=Yu();t.sort((a,l)=>{var h,f;const c=qs.has(a.kind),u=qs.has(l.kind);return c!==u?c?-1:1:c?(((h=o.get(a.id))==null?void 0:h.distance)??1/0)-(((f=o.get(l.id))==null?void 0:f.distance)??1/0):0})}if(i.replaceChildren(),!t.length&&!e.length){i.textContent="검색 결과가 없습니다.";return}const r=o=>{const a=document.createElement("div");a.className="result-group",a.textContent=o,i.append(a)};s?r("시설 · 앱 안의 예상 보행거리"):t.length&&e.length&&r("3D 길찾기");for(const o of t.slice(0,75)){const a=qs.has(o.kind),l=document.createElement("button");l.className="result"+((xe==null?void 0:xe.id)===o.id?" selected":""),l.dataset.destination=o.id,l.innerHTML=`<span class="facility-icon">${Oh(o.kind)}</span><span><span class="result-name">${o.name}</span><small>${o.detail}${a?'<span class="result-via"></span>':""}</small></span><span class="result-floor">${o.floor}${a?`<small class="walking-distance" data-walking-distance="${o.id}"></small>`:""}</span>`,l.onclick=()=>Hl(o.id),i.append(l)}qu(),e.length&&r("시설 · 위치 안내");for(const o of e){const a=document.createElement("button");a.className="result information-result",a.dataset.visitorInfo=o.id,a.setAttribute("aria-haspopup","dialog"),a.innerHTML=`<span class="facility-icon">${Oh(Ei[o.kind]?o.kind:"gate")}</span><span><span class="result-name">${o.name}</span><small>${o.detail}</small></span><span class="result-floor">안내 ›</span>`,a.onclick=()=>Yl(o.name,`<p class="info-kicker">시설 · 위치 안내</p><ul class="place-locations">${o.locations.map(l=>`<li>${l}</li>`).join("")}</ul><p>${o.note}</p><p class="place-navigation-note">${o.navigationNote||"이 시설은 현재 3D 길안내 범위 밖에 있습니다. 아래 공식 안내의 위치를 참고해 주세요."}</p><p><a href="${o.sourceURL}" target="_blank" rel="noopener">${o.sourceLabel||"삼성라이온즈 공식 위치 안내"} ↗</a><br><small>안내 확인: ${o.checkedAt||"2026.11.09"}</small></p>`),i.append(a)}}function Wl(){gs&&(vn.remove(gs),gs.traverse(n=>{var t,e;(t=n.geometry)==null||t.dispose(),(e=n.material)==null||e.dispose()}),gs=null)}function $u(){oe&&(yn(),Wl(),oe=null,Js=0,Pt(".guidance-hud").hidden=!0,Pt(".guidance-title").textContent="",Pt(".guidance-detail").textContent="",Pt(".guidance-distance").textContent="",Pt("#message").textContent="",Ju(),xn.querySelector(`[data-view="${ue}"]`).focus({preventScroll:!0}),Xu("길안내를 종료했습니다. 현재 위치에서 계속 둘러보세요."))}function ju(n){Wl(),oe=n,gs=vv(oe.points),vn.add(gs),Pt(".guidance-hud").hidden=!1,Pt(".guidance-title").textContent=oe.destination.name,Js=0,Zu()}function Ku(){if(Oi==="seats"){const t=U0(Pt("#section").value,Pt("#seat-row").value,Pt("#seat-number").value);if(t.error){Pt("#message").textContent=t.error;return}Hl(t.destination.id)}if(!xe){Pt("#message").textContent="목적지를 먼저 선택해 주세요.";return}const n=wo(Xt,xe);if(n.error){Pt("#message").textContent=n.error;return}ju(n),Vl("walk")}function Xl(){ue==="walk"&&(Me.up.set(0,1,0),Me.position.set(Xt.x,Xt.y+1.68,Xt.z),Me.rotation.order="YXZ",Me.rotation.set(Xt.pitch,Xt.yaw,0,"YXZ"))}function Zu(){if(Pt("#body-floor").textContent=Xt.connector?"계단":Xt.seating?"3F · 관람석":Xt.floor,!oe)return;const n=Math.hypot(Xt.x-oe.destination.position.x,Xt.y-oe.destination.position.y,Xt.z-oe.destination.position.z),t=n<1.2&&!Xt.connector,e=Hu(Xt,oe);Pt(".guidance-distance").textContent=t?"도착":Math.round(e.remaining)+" m";const i=t?oe.destination.arrivalYaw:Math.atan2(Xt.x-e.target.x,Xt.z-e.target.z),s=Math.atan2(Math.sin(i-Xt.yaw),Math.cos(i-Xt.yaw)),r=Math.abs(s)<.4?"정면":Math.abs(s)>2.6?"뒤쪽":s>0?"왼쪽":"오른쪽";Pt(".guidance-arrow").textContent=r==="정면"?"↑":r==="뒤쪽"?"↶":Math.abs(s)<1.2?s>0?"↖":"↗":s>0?"←":"→";const o=oe.destination.kind==="seat"?"좌석 번호":oe.destination.kind==="walkway"?"통로 표지":oe.destination.kind==="section"?"구역 표지":["gate","entrance"].includes(oe.destination.kind)?"출입구 표지":"출입문";Pt(".guidance-detail").textContent=t?r+"의 "+o+"를 확인하세요":Xt.connector?"계단을 따라 "+oe.destination.floor+"으로 이동":r==="뒤쪽"?"뒤돌아 주황색 안내선을 따라가세요":r==="정면"?Xt.floor!==oe.destination.floor?"안내선을 따라 계단으로 이동":"앞으로 주황색 안내선을 따라가세요":r+"의 주황색 안내선을 따라가세요"}function Ju(){const n=Pt(".minimap canvas"),t=n.getContext("2d"),e=Xt.connector?Xt.y<4.8?"3F":"5F":Xt.floor;t.clearRect(0,0,252,252),t.save(),t.translate(126,130),t.scale(1.03,1.03);for(const i of Un.filter(s=>s.floor===e)){t.fillStyle="#d0d5d1",t.strokeStyle="#a5afaa";for(const s of Ru(i))for(const r of s.polygons)t.beginPath(),r[0].forEach((o,a)=>a?t.lineTo(...o):t.moveTo(...o)),t.closePath(),t.fill(),t.stroke()}for(const i of go)if(i.id===e){t.fillStyle="#d0d5d1",t.strokeStyle="#bbc3be";for(const s of i.polygons){t.beginPath();for(const r of s)r.forEach((o,a)=>a?t.lineTo(...o):t.moveTo(...o)),t.closePath();t.fill("evenodd"),t.stroke()}}t.fillStyle="#727d81",t.strokeStyle="#727d81",t.lineWidth=1;for(const i of zl)if(i.floor===e)for(const s of i.polygons){t.beginPath();for(const r of s)r.forEach((o,a)=>a?t.lineTo(...o):t.moveTo(...o)),t.closePath();t.fill("evenodd"),t.stroke()}for(const i of ku)i.floor===e&&(t.save(),t.translate(i.x,i.z),t.rotate(-i.yaw),t.fillRect(-i.width/2,-i.depth/2,i.width,i.depth),t.restore());if(oe){t.strokeStyle="#df853e",t.lineWidth=2,t.beginPath();for(const[i,s]of mv(oe,e))t.moveTo(i.x,i.z),t.lineTo(s.x,s.z);if(t.stroke(),oe.usesStairs){t.setLineDash([2,3]);for(const i of As.filter(s=>oe.points.some(r=>r.connector===s.id)))t.beginPath(),i.path.forEach((s,r)=>r?t.lineTo(s.x,s.z):t.moveTo(s.x,s.z)),t.stroke();t.setLineDash([])}oe.destination.floor===e&&(t.fillStyle="#df853e",t.beginPath(),t.arc(oe.destination.position.x,oe.destination.position.z,3.4,0,Math.PI*2),t.fill())}t.translate(Xt.x,Xt.z),t.rotate(-Xt.yaw),t.fillStyle="#303d46",t.beginPath(),t.moveTo(0,-5.5),t.lineTo(-4,4),t.lineTo(4,4),t.closePath(),t.fill(),t.restore()}const Cv=Ev($n,{enabled:()=>ue==="walk"&&Pt(".info-overlay").hidden,onBegin:()=>{},onMove:n=>xo=n,onLook:(n,t)=>{Xt.yaw-=n*.004,Xt.pitch=Math.max(-1.15,Math.min(1.15,Xt.pitch-t*.004))},onState:n=>{const t=Pt(".joystick");t.hidden=!n.move,n.move&&(t.style.left=n.move.x-40+"px",t.style.top=n.move.y-40+"px",t.firstElementChild.style.transform=`translate(${n.move.dx*.7}px,${n.move.dy*.7}px)`)}});$n.addEventListener("pointerdown",n=>{n.pointerType==="mouse"&&ue==="walk"&&Pt(".info-overlay").hidden&&(hi={id:n.pointerId,x:n.clientX,y:n.clientY},$n.setPointerCapture(n.pointerId))});$n.addEventListener("pointermove",n=>{hi&&ue==="walk"&&(Xt.yaw-=(n.clientX-hi.x)*.004,Xt.pitch=Math.max(-1.15,Math.min(1.15,Xt.pitch-(n.clientY-hi.y)*.004)),hi.x=n.clientX,hi.y=n.clientY)});for(const n of["pointerup","pointercancel","lostpointercapture"])$n.addEventListener(n,()=>hi=null);const Pv=Tv($n,{enabled:()=>Pt(".info-overlay").hidden&&Je.size===0,pick:(n,t)=>wv({x:n,y:t,width:$n.clientWidth,height:$n.clientHeight,camera:Me,root:Rs.root,pickables:Rs.pickables,clippingPlanes:qe.clippingPlanes}),onSelect:n=>{Qu("facilities"),Pt("#search").value=cr(n).name,Hl(n),To(!0);const t=Pt(".panel-scroll");t.scrollTop=t.scrollHeight}});window.addEventListener("keydown",n=>{if(n.code==="Escape"){Pt(".info-overlay").hidden?yn():ql();return}n.target.closest("input,select,textarea")||!Pt(".info-overlay").hidden||["KeyW","KeyA","KeyS","KeyD","ArrowUp","ArrowDown","ArrowLeft","ArrowRight","ShiftLeft"].includes(n.code)&&(n.preventDefault(),Je.add(n.code))});window.addEventListener("keyup",n=>Je.delete(n.code));window.addEventListener("blur",yn);document.addEventListener("visibilitychange",()=>{document.hidden&&yn()});window.addEventListener("inside:layout-changing",yn);xn.querySelectorAll("[data-view]").forEach(n=>n.onclick=()=>Vl(n.dataset.view));xn.querySelectorAll("[data-floor]").forEach(n=>n.onclick=()=>{Zs=n.dataset.floor,xn.querySelectorAll("[data-floor]").forEach(t=>t.classList.toggle("active",t===n)),ue!=="walk"&&Vl(ue)});const Wi=Pt("#end-guidance");Wi.addEventListener("pointerdown",n=>{yn(),n.pointerType==="touch"&&!n.isPrimary&&(Xe={id:n.pointerId,x:n.clientX,y:n.clientY,time:performance.now(),moved:!1},Wi.setPointerCapture(n.pointerId))});Wi.addEventListener("pointermove",n=>{(Xe==null?void 0:Xe.id)===n.pointerId&&Math.hypot(n.clientX-Xe.x,n.clientY-Xe.y)>6&&(Xe.moved=!0)});Wi.addEventListener("pointerup",n=>{const t=Xe;if((t==null?void 0:t.id)!==n.pointerId)return;Xe=null;const e=Wi.getBoundingClientRect();!t.moved&&performance.now()-t.time<=550&&n.clientX>=e.left&&n.clientX<=e.right&&n.clientY>=e.top&&n.clientY<=e.bottom&&$u()});for(const n of["pointercancel","lostpointercapture"])Wi.addEventListener(n,t=>{(Xe==null?void 0:Xe.id)===t.pointerId&&(Xe=null)});Wi.onclick=$u;Pt("#collapse").onclick=()=>To(!1);Pt("#expand").onclick=()=>To(!0);Pt("#search").oninput=Is;Pt("#route").onclick=Ku;Pt("#seat-input").onsubmit=n=>{n.preventDefault(),Ku()};function Qu(n){Oi=n,xn.querySelectorAll("[data-tab]").forEach(t=>t.classList.toggle("active",t.dataset.tab===Oi)),Pt("#seat-input").hidden=Oi!=="seats",Pt("#facility-input").hidden=Oi==="seats",Pt("#message").textContent="",Oi==="facilities"&&Is()}xn.querySelectorAll("[data-tab]").forEach(n=>n.onclick=()=>Qu(n.dataset.tab));Pt("#start").onchange=()=>{const n=Eo.find(t=>t.id===Pt("#start").value);n&&(yn(),Xt=Vu(n),Wl(),oe=null,Pt(".guidance-hud").hidden=!0,Pt("#start").value="current",Xl(),Is(),Xu(n.name+"에서 시작합니다."))};function Yl(n,t){yn(),Ys=document.activeElement,Pt("#info-title").textContent=n,Pt("#info-body").innerHTML=t,Pt(".info-overlay").hidden=!1,Pt(".info-card").scrollTop=0,Pt("#info-close").focus({preventScroll:!0})}Pt("#about").onclick=()=>Yl("대구 라이온즈 파크",'<p>대구광역시 수성구 야구전설로 1</p><p>공식 층별 안내도와 2026 구역 안내를 바탕으로 만든 공용 공간 탐색 모델입니다. 3층 회랑과 5층 SKY 회랑을 둘러보고, 구역 입구·화장실·수유실·어린이 쉼터를 찾을 수 있습니다.</p><p><b>층을 오가는 길</b><br>앱의 계단은 3층 회랑에서 4층 전용 구역 앞을 지나 5층 SKY 09 맞은편으로 연결됩니다. 2016년 방문 사진에서 4층 중간 지점과 09 입구 맞은편 계단 상단을 확인했습니다. 3층의 정확한 출발 위치와 계단 전체의 꺾임·단수는 아직 확인되지 않아 모델로 추정했습니다. 현장에서는 구장 표지와 직원 안내를 따라 주세요.</p><p><b>공간과 거리</b><br>회랑 폭, 층 높이, 계단 형상과 시설의 문 앞 위치는 추정값입니다. SKY 입구의 길이·폭·높이 차이도 실측되지 않았습니다. 표시 거리는 이 모델 안의 길이이며, 실제 GPS 위치나 당일 출입·영업 상황을 반영하지 않습니다.</p><p><b>좌석 구역</b><br>구역만 입력하면 구역 입구로, 확인된 열·번호를 함께 입력하면 좌석 뒤 통로까지 안내합니다. 좌석 번호는 방문 기록으로 확인한 주소만 지원합니다. 관람석 전체의 의자 개수는 실제 좌석 수를 뜻하지 않습니다.</p><p>자료 확인: 2026.11.10<br><a href="https://www.samsunglions.com/intro/intro05_4.asp" target="_blank" rel="noopener">삼성라이온즈 공식 라팍 이용안내 ↗</a><br><a href="https://blog.naver.com/PostView.naver?blogId=kiha16&logNo=220702526767" target="_blank" rel="noopener">계단 방문 사진 · 2016.05 ↗</a></p>');Pt("#help").onclick=()=>Yl("걷고, 둘러보고, 찾아보세요","<p><b>휴대폰</b><br>왼쪽 화면을 누르고 밀면 이동합니다. 오른쪽 화면을 밀면 시점을 돌립니다. 두 손을 함께 사용할 수 있습니다. 휴대폰을 세로로 들면 앱이 가로 방향으로 회전합니다.</p><p><b>키보드와 마우스</b><br>WASD 또는 방향키로 이동하고, 화면을 드래그해 시점을 바꿉니다. 3D 둘러보기에서는 드래그로 회전, 휠로 확대합니다.</p><p><b>장소 표지 선택</b><br>화면에 보이는 구역·출입구·시설 표지를 짧게 누르면 길찾기 창에서 그 장소가 선택됩니다. 선택한 뒤 길찾기를 누르면 안내를 시작합니다.</p><p><b>길찾기</b><br>목적지를 선택하고 길찾기를 누르면 현재 위치에서 주황색 안내선이 이어집니다. 안내선을 벗어나면 현재 위치에서 길을 다시 찾습니다. 안내 표시 옆 ×를 누르면 현재 위치와 시점을 유지한 채 길안내를 끝낼 수 있습니다. 출입구를 직접 선택하면 그곳에서 새로 시작합니다. 관찰층과 카메라를 바꿔도 걷는 위치는 유지됩니다.</p>");function ql(){Pt(".info-overlay").hidden=!0,yn(),Ys!=null&&Ys.isConnected&&Ys.focus()}Pt("#info-close").onclick=ql;Pt(".info-overlay").onclick=n=>{n.target===Pt(".info-overlay")&&ql()};Pt(".info-overlay").addEventListener("keydown",n=>{if(n.key==="Tab"){const t=[...Pt(".info-card").querySelectorAll("button,a")],e=t[0],i=t.at(-1);n.shiftKey&&document.activeElement===e?(n.preventDefault(),i.focus()):!n.shiftKey&&document.activeElement===i&&(n.preventDefault(),e.focus())}});function tf(){const n=Qn.clientWidth,t=Qn.clientHeight;qe.setSize(n,t,!1),Me.aspect=n/t,Me.updateProjectionMatrix()}new ResizeObserver(tf).observe(Qn);tf();Is();function Lv(n){if(ue==="walk"&&Pt(".info-overlay").hidden){let t=xo.forward+(Je.has("KeyW")||Je.has("ArrowUp")?1:0)-(Je.has("KeyS")||Je.has("ArrowDown")?1:0),e=xo.side+(Je.has("KeyD")||Je.has("ArrowRight")?1:0)-(Je.has("KeyA")||Je.has("ArrowLeft")?1:0);const i=Math.max(1,Math.hypot(t,e));t/=i,e/=i;const s=Je.has("ShiftLeft")?4.2:2.5,r=fv(Xt,(-Math.sin(Xt.yaw)*t+Math.cos(Xt.yaw)*e)*s*n,(-Math.cos(Xt.yaw)*t-Math.sin(Xt.yaw)*e)*s*n);if(Xl(),oe&&(Js+=n,Js>.65&&r>1e-4)){const o=pv(Xt,oe);o!==oe&&ju(o),Js=0}}else ue!=="walk"&&Pt(".info-overlay").hidden&&ke.update();Zu(),Ju()}let kh=performance.now();function ef(n){const t=Math.min(.1,(n-kh)/1e3);kh=n,Lv(t),ga+=t,ga>.8&&(ga=0,!Pt(".nav-panel").hidden&&Oi==="facilities"&&Pt(".info-overlay").hidden&&qu()),Gl();for(const e of Rs.labels){const i=e.destination;e.mesh.visible=i.kind==="seat"?i.id===(xe==null?void 0:xe.id)&&ue==="walk":ue==="walk"?Math.hypot(Me.position.x-e.mesh.position.x,Me.position.z-e.mesh.position.z)<65&&Math.abs(Me.position.y-e.mesh.position.y)<7:!["section","seat"].includes(i.kind)||i.id===(xe==null?void 0:xe.id)}qe.render(vn,Me),requestAnimationFrame(ef)}requestAnimationFrame(ef);

// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var n,t;n=this,t=function(){"use strict";function n(n){return n!=n}var t,r="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),e=Object.prototype.toString,o=Object.prototype.hasOwnProperty,i="function"==typeof Symbol?Symbol:void 0,f="function"==typeof i?i.toStringTag:"",u=r&&"symbol"==typeof Symbol.toStringTag?function(n){var t,r,i,u,a;if(null==n)return e.call(n);r=n[f],a=f,t=null!=(u=n)&&o.call(u,a);try{n[f]=void 0}catch(t){return e.call(n)}return i=e.call(n),t?n[f]=r:delete n[f],i}:function(n){return e.call(n)},a="function"==typeof Uint32Array,c="function"==typeof Uint32Array?Uint32Array:null,y="function"==typeof Uint32Array?Uint32Array:void 0;t=function(){var n,t,r;if("function"!=typeof c)return!1;try{t=new c(t=[1,3.14,-3.14,4294967296,4294967297]),r=t,n=(a&&r instanceof Uint32Array||"[object Uint32Array]"===u(r))&&1===t[0]&&3===t[1]&&4294967293===t[2]&&0===t[3]&&1===t[4]}catch(t){n=!1}return n}()?y:function(){throw new Error("not implemented")};var l,p=t,A="function"==typeof Float64Array,b="function"==typeof Float64Array?Float64Array:null,v="function"==typeof Float64Array?Float64Array:void 0;l=function(){var n,t,r;if("function"!=typeof b)return!1;try{t=new b([1,3.14,-3.14,NaN]),r=t,n=(A&&r instanceof Float64Array||"[object Float64Array]"===u(r))&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){n=!1}return n}()?v:function(){throw new Error("not implemented")};var d,w=l,U="function"==typeof Uint8Array,m="function"==typeof Uint8Array?Uint8Array:null,s="function"==typeof Uint8Array?Uint8Array:void 0;d=function(){var n,t,r;if("function"!=typeof m)return!1;try{t=new m(t=[1,3.14,-3.14,256,257]),r=t,n=(U&&r instanceof Uint8Array||"[object Uint8Array]"===u(r))&&1===t[0]&&3===t[1]&&253===t[2]&&0===t[3]&&1===t[4]}catch(t){n=!1}return n}()?s:function(){throw new Error("not implemented")};var h,N=d,I="function"==typeof Uint16Array,F="function"==typeof Uint16Array?Uint16Array:null,S="function"==typeof Uint16Array?Uint16Array:void 0;h=function(){var n,t,r;if("function"!=typeof F)return!1;try{t=new F(t=[1,3.14,-3.14,65536,65537]),r=t,n=(I&&r instanceof Uint16Array||"[object Uint16Array]"===u(r))&&1===t[0]&&3===t[1]&&65533===t[2]&&0===t[3]&&1===t[4]}catch(t){n=!1}return n}()?S:function(){throw new Error("not implemented")};var T,g={uint16:h,uint8:N};(T=new g.uint16(1))[0]=4660;var j=52===new g.uint8(T.buffer)[0],E=!0===j?1:0,O=new w(1),x=new p(O.buffer);function H(n){return O[0]=n,x[E]}var G=!0===j?1:0,L=new w(1),P=new p(L.buffer);function V(n,t){return L[0]=n,P[G]=t>>>0,L[0]}var W,Y,_=Number.POSITIVE_INFINITY,M=Number.NEGATIVE_INFINITY,k=1023,q=.6931471803691238,z=1.9082149292705877e-10;function B(n){return Math.abs(n)}!0===j?(W=1,Y=0):(W=0,Y=1);var C={HIGH:W,LOW:Y},D=new w(1),J=new p(D.buffer),K=C.HIGH,Q=C.LOW,R=.6931471803691238,X=1.9082149292705877e-10,Z=1.4426950408889634;function $(t){var r,e,o,i,f,u,a,c,y,l,p,A,b,v,d;if(t===_||n(t))return t;if(t===M)return-1;if(0===t)return t;if(t<0?(o=!0,c=-t):(o=!1,c=t),c>=38.816242111356935){if(o)return-1;if(c>=709.782712893384)return _}if(u=0|H(c),c>.34657359027997264)c<1.0397207708399179?o?(i=t+R,f=-X,b=-1):(i=t-R,f=X,b=1):(b=o?Z*t-.5:Z*t+.5,i=t-(p=b|=0)*R,f=p*X),l=i-(t=i-f)-f;else{if(u<1016070144)return t;b=0}return a=1+(y=t*(r=.5*t))*function(n){return 0===n?-.03333333333333313:n*(.0015873015872548146+n*(n*(4008217827329362e-21+-2.0109921818362437e-7*n)-793650757867488e-19))-.03333333333333313}(y),A=y*((a-(p=3-a*r))/(6-t*p)),0===b?t-(t*A-y):(v=k+b<<20,d=0,J[K]=v,J[Q]=d,e=D[0],A=t*(A-l)-l,A-=y,-1===b?.5*(t-A)-.5:1===b?t<-.25?-2*(A-(t+.5)):1+2*(t-A):b<=-2||b>56?(c=1-(A-t),1024===b?c=V(c,i=H(c)+(b<<20)|0):c*=e,c-1):(p=1,b<20?c=(p=V(p,i=1072693248-(2097152>>b)|0))-(A-t):(c=t-(A+(p=V(p,i=k-b<<20|0))),c+=1),c*=e))}return function(t,r){var e;return n(t)||n(r)||t<-1?NaN:-1===t&&r<0?M:(e=function(t){var r,e,o,i,f,u,a,c,y,l;if(t<-1||n(t))return NaN;if(-1===t)return M;if(t===_)return t;if(0===t)return t;if(l=1,(o=t<0?-t:t)<.41421356237309503){if(o<1.862645149230957e-9)return o<5551115123125783e-32?t:t-t*t*.5;t>-.2928932188134525&&(l=0,i=t,e=1)}return 0!==l&&(o<9007199254740992?(f=(l=((e=H(y=1+t))>>20)-k)>0?1-(y-t):t-(y-1),f/=y):(l=((e=H(y=t))>>20)-k,f=0),(e&=1048575)<434334?y=V(y,1072693248|e):(l+=1,y=V(y,1071644672|e),e=1048576-e>>2),i=y-1),r=.5*i*i,0===e?0===i?l*q+(f+=l*z):l*q-((c=r*(1-.6666666666666666*i))-(l*z+f)-i):(c=(a=(u=i/(2+i))*u)*function(n){return 0===n?.6666666666666735:.6666666666666735+n*(.3999999999940942+n*(.2857142874366239+n*(.22222198432149784+n*(.1818357216161805+n*(.15313837699209373+.14798198605116586*n)))))}(a),0===l?i-(r-u*(r+c)):l*q-(r-(u*(r+c)+(l*z+f))-i))}(t),B(r)<1e-19||B(e)<1e-289&&B(r)<1e273?e:$(r*e)/r)}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(n="undefined"!=typeof globalThis?globalThis:n||self).boxcox1p=t();
//# sourceMappingURL=index.js.map

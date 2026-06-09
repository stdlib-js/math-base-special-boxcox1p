"use strict";var s=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var o=s(function(N,n){
var v=require('@stdlib/math-base-special-log1p/dist'),u=require('@stdlib/math-base-special-abs/dist'),p=require('@stdlib/math-base-special-expm1/dist'),t=require('@stdlib/math-base-assert-is-nan/dist'),q=require('@stdlib/constants-float64-ninf/dist');function c(e,r){var i;return t(e)||t(r)||e<-1?NaN:e===-1&&r<0?q:(i=v(e),u(r)<1e-19||u(i)<1e-289&&u(r)<1e273?i:p(r*i)/r)}n.exports=c
});var x=o();module.exports=x;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map

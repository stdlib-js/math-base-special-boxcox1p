// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import s from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-log1p@esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-abs@esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-expm1@esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@esm/index.mjs";import m from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-ninf@esm/index.mjs";var n=s,a=t,r=e,d=i,l=m;var p=function(s,t){var e;return d(s)||d(t)||s<-1?NaN:-1===s&&t<0?l:(e=n(s),a(t)<1e-19||a(e)<1e-289&&a(t)<1e273?e:r(t*e)/t)};export{p as default};
//# sourceMappingURL=index.mjs.map

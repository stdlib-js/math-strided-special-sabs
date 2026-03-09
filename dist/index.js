"use strict";var t=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var v=t(function(z,n){
var f=require('@stdlib/strided-base-smap/dist'),j=require('@stdlib/math-base-special-abs/dist');function x(e,r,a,s,i){return f(e,r,a,s,i,j)}n.exports=x
});var o=t(function(A,q){
var l=require('@stdlib/strided-base-smap/dist').ndarray,R=require('@stdlib/math-base-special-abs/dist');function _(e,r,a,s,i,m,y){return l(e,r,a,s,i,m,y,R)}q.exports=_
});var b=t(function(B,p){
var E=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),c=v(),O=o();E(c,"ndarray",O);p.exports=c
});var g=require("path").join,h=require('@stdlib/utils-try-require/dist'),k=b(),u,d=h(g(__dirname,"./native.js"));d instanceof Error?u=k:u=d;module.exports=u;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map

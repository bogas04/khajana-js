!function(a,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.Khajana=e():a.Khajana=e()}("undefined"!=typeof self?self:this,function(){return function(a){function e(o){if(r[o])return r[o].exports;var t=r[o]={i:o,l:!1,exports:{}};return a[o].call(t.exports,t,t.exports,e),t.l=!0,t.exports}var r={};return e.m=a,e.c=r,e.d=function(a,r,o){e.o(a,r)||Object.defineProperty(a,r,{configurable:!1,enumerable:!0,get:o})},e.n=function(a){var r=a&&a.__esModule?function(){return a.default}:function(){return a};return e.d(r,"a",r),r},e.o=function(a,e){return Object.prototype.hasOwnProperty.call(a,e)},e.p="",e(e.s=0)}([function(a,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.buildApiUrl=e.SOURCES=e.TYPES=void 0;var o=["First letter each word from start (Gurmukhi)","First letter each word anywhere (Gurmukhi)","Full Word (Gurmukhi)","Full Word Translation (English)","Romanized Gurmukhi (English)"];e.TYPES=o;var t={all:"All Sources",G:"Guru Granth Sahib Ji",D:"Dasam Granth Sahib",B:"Bhai Gurdas Ji Vaaran",A:"Amrit Keertan",S:"Bhai Gurdas Singh Ji Vaaran",N:"Bhai Nand Lal Ji Vaaran",R:"Rehatnamas and Tankhanamas"};e.SOURCES=t;var n=function(a){var e=a.q,r=void 0!==e&&e,o=a.source,t=void 0!==o&&o,n=a.type,i=void 0!==n&&n,u=a.writer,c=void 0!==u&&u,s=a.raag,d=void 0!==s&&s,l=a.ang,f=void 0!==l&&l,h=a.results,p=void 0!==h&&h,v=a.offset,m=void 0!==v&&v,b=a.id,y=void 0!==b&&b,S=a.hukam,g=void 0!==S&&S,G=a.akhar,j=void 0!==G&&G,k=a.lipi,x=void 0!==k&&k,w=a.random,E=void 0!==w&&w,A=a.randomid,O=void 0!==A&&A,P=a.API_URL,R=void 0===P?"https://api.banidb.com/":P,U=R;if(!1!==r){var _=[];t&&_.push("source=".concat(t)),i&&_.push("searchtype=".concat(i)),c&&_.push("writer=".concat(c)),d&&_.push("raag=".concat(d)),f&&_.push("ang=".concat(f)),p&&_.push("results=".concat(p)),m&&_.push("offset=".concat(m)),U+="search/".concat(r,"?").concat(_.join("&"))}else if(!1!==y)U+="shabad/".concat(y);else if(!1!==f)U+="ang/".concat(f,"/").concat(t||"");else if(!1!==g)U+="hukamnama/today";else if(!1!==j&&!1!==x)U+="akhar/".concat(x);else if(!1!==O)U+="random/id";else{if(!1===E)throw new Error("Invalid options sent");U+="random"}return U};e.buildApiUrl=n}])});
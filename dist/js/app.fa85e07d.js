(function(t){function e(e){for(var r,i,c=e[0],o=e[1],u=e[2],f=0,p=[];f<c.length;f++)i=c[f],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&p.push(a[i][0]),a[i]=0;for(r in o)Object.prototype.hasOwnProperty.call(o,r)&&(t[r]=o[r]);l&&l(e);while(p.length)p.shift()();return s.push.apply(s,u||[]),n()}function n(){for(var t,e=0;e<s.length;e++){for(var n=s[e],r=!0,c=1;c<n.length;c++){var o=n[c];0!==a[o]&&(r=!1)}r&&(s.splice(e--,1),t=i(i.s=n[0]))}return t}var r={},a={app:0},s=[];function i(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=r,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(n,r,function(e){return t[e]}.bind(null,r));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],o=c.push.bind(c);c.push=e,c=c.slice();for(var u=0;u<c.length;u++)e(c[u]);var l=o;s.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"h-100"},[n("Header"),n("main",{staticClass:"d-flex align-items-center"},[n("Main",{attrs:{artists:t.artists}})],1)],1)},s=[],i=n("bc3a"),c=n.n(i),o=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},u=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("header",{staticClass:"d-flex align-items-center"},[r("img",{staticClass:"d-block",attrs:{src:n("5c10"),alt:"Spotify Logo"}})])}],l={name:"Header",props:{}},f=l,p=(n("5d85"),n("2877")),d=Object(p["a"])(f,o,u,!1,null,"2db713eb",null),b=d.exports,h=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("div",{staticClass:"row g-3"},t._l(t.artists,(function(e){return n("div",{key:e.author,staticClass:"card text-center"},[n("div",{staticClass:"img-cont"},[n("img",{staticClass:"dsa img-fluid",attrs:{src:e.poster,alt:e.author}})]),n("div",{staticClass:"card-text d-flex flex-column justify-content-between flex-grow-1"},[n("p",{staticClass:"song-name text-white text-uppercase"},[t._v(t._s(e.title))]),n("div",{staticClass:"auth-year"},[n("p",[t._v(t._s(e.author))]),n("p",[t._v(t._s(e.year))])])])])})),0)])},v=[],m={name:"Main",props:["artists"]},g=m,y=(n("b58c"),Object(p["a"])(g,h,v,!1,null,"3471fab5",null)),_=y.exports,x={name:"App",components:{Header:b,Main:_},data:function(){return{artists:[]}},methods:{getArtists:function(){var t=this;c.a.get("https://flynn.boolean.careers/exercises/api/array/music").then((function(e){t.artists=e.data.response}))}},mounted:function(){this.getArtists()}},w=x,O=(n("5c0b"),Object(p["a"])(w,a,s,!1,null,null,null)),j=O.exports;r["a"].config.productionTip=!1,new r["a"]({render:function(t){return t(j)}}).$mount("#app")},"5c0b":function(t,e,n){"use strict";n("9c0c")},"5c10":function(t,e,n){t.exports=n.p+"img/spotify-logo.e80f6757.png"},"5d85":function(t,e,n){"use strict";n("6709")},6709:function(t,e,n){},"6dae":function(t,e,n){},"9c0c":function(t,e,n){},b58c:function(t,e,n){"use strict";n("6dae")}});
//# sourceMappingURL=app.fa85e07d.js.map
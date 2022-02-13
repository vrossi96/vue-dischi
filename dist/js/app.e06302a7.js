(function(e){function t(t){for(var n,o,i=t[0],u=t[1],c=t[2],f=0,h=[];f<i.length;f++)o=i[f],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&h.push(a[o][0]),a[o]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(e[n]=u[n]);l&&l(t);while(h.length)h.shift()();return s.push.apply(s,c||[]),r()}function r(){for(var e,t=0;t<s.length;t++){for(var r=s[t],n=!0,i=1;i<r.length;i++){var u=r[i];0!==a[u]&&(n=!1)}n&&(s.splice(t--,1),e=o(o.s=r[0]))}return e}var n={},a={app:0},s=[];function o(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=e,o.c=n,o.d=function(e,t,r){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(r,n,function(t){return e[t]}.bind(null,n));return r},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],u=i.push.bind(i);i.push=t,i=i.slice();for(var c=0;c<i.length;c++)t(i[c]);var l=u;s.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},5006:function(e,t,r){"use strict";r("a8be")},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"h-100"},[r("Header",{attrs:{"generes-array":e.genre,"authors-array":e.authors},on:{"genre-search":e.getSelectedGenre,"author-search":e.getSelectedAuthor}}),r("main",{staticClass:"d-flex align-items-center justify-content-center"},[e.loader?r("div",[r("h1",{staticClass:"text-white"},[e._v("CARICAMENTO")])]):r("Main",{attrs:{artists:e.songsShowed}})],1)],1)},s=[],o=(r("4de4"),r("d3b7"),r("159b"),r("caad"),r("2532"),r("bc3a")),i=r.n(o),u=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("header",{staticClass:"d-flex align-items-center justify-content-between"},[n("img",{staticClass:"d-block",attrs:{src:r("5c10"),alt:"Spotify Logo"}}),n("div",[n("select",{directives:[{name:"model",rawName:"v-model",value:e.genreValue,expression:"genreValue"}],attrs:{name:"genre",id:"genre"},on:{input:function(t){return e.$emit("genre-search",t.target.value)},change:function(t){var r=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.genreValue=t.target.multiple?r:r[0]}}},[n("option",{attrs:{value:""}},[e._v("Seleziona genere")]),e._l(e.generesArray,(function(t){return n("option",{key:t,domProps:{value:t}},[e._v(e._s(t))])}))],2),n("select",{directives:[{name:"model",rawName:"v-model",value:e.authorValue,expression:"authorValue"}],attrs:{name:"author",id:"author"},on:{input:function(t){return e.$emit("author-search",t.target.value)},change:function(t){var r=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.authorValue=t.target.multiple?r:r[0]}}},[n("option",{attrs:{value:""}},[e._v("Seleziona per autore")]),e._l(e.authorsArray,(function(t){return n("option",{key:t,domProps:{value:t}},[e._v(e._s(t))])}))],2)])])},c=[],l={name:"Header",props:["generesArray","authorsArray"],data:function(){return{genreValue:"",authorValue:""}},mounted:function(){}},f=l,h=(r("5006"),r("2877")),p=Object(h["a"])(f,u,c,!1,null,"8de5350e",null),d=p.exports,g=function(){var e=this,t=e.$createElement,r=e._self._c||t;return e.artists.length?r("div",{staticClass:"container"},[r("div",{staticClass:"row g-3"},e._l(e.artists,(function(t){return r("div",{key:t.author,staticClass:"card text-center"},[r("div",{staticClass:"img-cont"},[r("img",{staticClass:"dsa img-fluid",attrs:{src:t.poster,alt:t.author}})]),r("div",{staticClass:"card-text d-flex flex-column justify-content-between flex-grow-1"},[r("p",{staticClass:"song-name text-white text-uppercase"},[e._v(e._s(t.title))]),r("div",{staticClass:"auth-year"},[r("p",[e._v(e._s(t.author))]),r("p",[e._v(e._s(t.year))])])])])})),0)]):e._e()},v=[],m={name:"Main",props:["artists"]},y=m,b=(r("70fc"),Object(h["a"])(y,g,v,!1,null,"1d388358",null)),_=b.exports,x={name:"App",components:{Header:d,Main:_},data:function(){return{loader:!0,artists:[],genre:[],authors:[],searchGenre:"",searchAuthor:""}},computed:{genreArray:function(){return this.genre},songsShowed:function(){var e=this;return this.artists.filter((function(t){if(!e.searchGenre&&!e.searchAuthor)return!0;if(!e.searchGenre&&e.searchAuthor){if(t.author===e.searchAuthor)return!0}else if(e.searchGenre&&!e.searchAuthor){if(t.genre===e.searchGenre)return!0}else if(t.genre===e.searchGenre&&t.author===e.searchAuthor)return!0}))}},methods:{getArtists:function(){var e=this;this.loader=!0,i.a.get("https://flynn.boolean.careers/exercises/api/array/music").then((function(t){e.artists=t.data.response,e.loader=!1}))},getGenres:function(){var e=this;i.a.get("https://flynn.boolean.careers/exercises/api/array/music").then((function(t){t.data.response.forEach((function(t){e.authors.includes(t.author)||e.authors.push(t.author)}))}))},getAuthors:function(){var e=this;i.a.get("https://flynn.boolean.careers/exercises/api/array/music").then((function(t){t.data.response.forEach((function(t){e.genre.includes(t.genre)||e.genre.push(t.genre)}))}))},getSelectedGenre:function(e){this.searchGenre=e},getSelectedAuthor:function(e){this.searchAuthor=e}},mounted:function(){this.getArtists(),this.getGenres(),this.getAuthors()}},A=x,w=(r("5c0b"),Object(h["a"])(A,a,s,!1,null,null,null)),j=w.exports;n["a"].config.productionTip=!1,new n["a"]({render:function(e){return e(j)}}).$mount("#app")},"5c0b":function(e,t,r){"use strict";r("9c0c")},"5c10":function(e,t,r){e.exports=r.p+"img/spotify-logo.e80f6757.png"},"5f60":function(e,t,r){},"70fc":function(e,t,r){"use strict";r("5f60")},"9c0c":function(e,t,r){},a8be:function(e,t,r){}});
//# sourceMappingURL=app.e06302a7.js.map
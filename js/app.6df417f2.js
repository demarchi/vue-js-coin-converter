(function(n){function e(e){for(var r,c,a=e[0],u=e[1],s=e[2],v=0,p=[];v<a.length;v++)c=a[v],Object.prototype.hasOwnProperty.call(o,c)&&o[c]&&p.push(o[c][0]),o[c]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(n[r]=u[r]);l&&l(e);while(p.length)p.shift()();return i.push.apply(i,s||[]),t()}function t(){for(var n,e=0;e<i.length;e++){for(var t=i[e],r=!0,a=1;a<t.length;a++){var u=t[a];0!==o[u]&&(r=!1)}r&&(i.splice(e--,1),n=c(c.s=t[0]))}return n}var r={},o={app:0},i=[];function c(e){if(r[e])return r[e].exports;var t=r[e]={i:e,l:!1,exports:{}};return n[e].call(t.exports,t,t.exports,c),t.l=!0,t.exports}c.m=n,c.c=r,c.d=function(n,e,t){c.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:t})},c.r=function(n){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},c.t=function(n,e){if(1&e&&(n=c(n)),8&e)return n;if(4&e&&"object"===typeof n&&n&&n.__esModule)return n;var t=Object.create(null);if(c.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var r in n)c.d(t,r,function(e){return n[e]}.bind(null,r));return t},c.n=function(n){var e=n&&n.__esModule?function(){return n["default"]}:function(){return n};return c.d(e,"a",e),e},c.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},c.p="/vue-js-coin-converter/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],u=a.push.bind(a);a.push=e,a=a.slice();for(var s=0;s<a.length;s++)e(a[s]);var l=u;i.push([0,"chunk-vendors"]),t()})({0:function(n,e,t){n.exports=t("56d7")},"034f":function(n,e,t){"use strict";var r=t("85ec"),o=t.n(r);o.a},"56d7":function(n,e,t){"use strict";t.r(e);t("e260"),t("e6cf"),t("cca6"),t("a79d");var r=t("2b0e"),o=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{attrs:{id:"app"}},[t("h1",[n._v("Coin Converter in Vue.js")]),t("div",{staticClass:"row"},[t("CoinConverter",{attrs:{coinA:"GBP",coinB:"BRL"}}),t("CoinConverter",{attrs:{coinA:"BRL",coinB:"GBP"}})],1),t("div",{staticClass:"row"},[t("CoinConverter",{attrs:{coinA:"USD",coinB:"BRL"}}),t("CoinConverter",{attrs:{coinA:"BRL",coinB:"USD"}})],1),t("div",{staticClass:"row"},[t("CoinConverter",{attrs:{coinA:"EUR",coinB:"BRL"}}),t("CoinConverter",{attrs:{coinA:"BRL",coinB:"EUR"}})],1)])},i=[],c=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{staticClass:"converter"},[t("h2",[n._v(n._s(n.coinA)+" to "+n._s(n.coinB))]),t("input",{directives:[{name:"model",rawName:"v-model",value:n.coinA_value,expression:"coinA_value"}],attrs:{type:"text",placeholder:n.coinA},domProps:{value:n.coinA_value},on:{input:function(e){e.target.composing||(n.coinA_value=e.target.value)}}}),t("input",{attrs:{type:"button",value:"Converter"},on:{click:n.converter}}),t("h2",[n._v(n._s(n.coinB_value))])])},a=[],u=(t("b680"),t("d3b7"),t("acd8"),{name:"Converter",props:["coinA","coinB"],data:function(){return{coinA_value:"",coinB_value:0}},methods:{converter:function(){var n=this,e=this.coinA+"_"+this.coinB,t="https://free.currconv.com/api/v7/convert?q="+e+"&compact=y&apiKey=9bc4c3198176577a4d65";fetch(t).then((function(n){return n.json()})).then((function(t){var r=t[e].val;n.coinB_value=(r*parseFloat(n.coinA_value)).toFixed(2)}))}}}),s=u,l=(t("78d6"),t("2877")),v=Object(l["a"])(s,c,a,!1,null,"da1cdeb4",null),p=v.exports,f={name:"app",components:{CoinConverter:p}},d=f,h=(t("034f"),Object(l["a"])(d,o,i,!1,null,null,null)),b=h.exports;r["a"].config.productionTip=!1,new r["a"]({render:function(n){return n(b)}}).$mount("#app")},"78d6":function(n,e,t){"use strict";var r=t("b481"),o=t.n(r);o.a},"85ec":function(n,e,t){},b481:function(n,e,t){}});
//# sourceMappingURL=app.6df417f2.js.map
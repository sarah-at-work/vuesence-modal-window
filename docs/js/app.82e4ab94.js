(function(e){function t(t){for(var n,i,l=t[0],s=t[1],c=t[2],d=0,p=[];d<l.length;d++)i=l[d],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&p.push(a[i][0]),a[i]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n]);u&&u(t);while(p.length)p.shift()();return r.push.apply(r,c||[]),o()}function o(){for(var e,t=0;t<r.length;t++){for(var o=r[t],n=!0,l=1;l<o.length;l++){var s=o[l];0!==a[s]&&(n=!1)}n&&(r.splice(t--,1),e=i(i.s=o[0]))}return e}var n={},a={app:0},r=[];function i(t){if(n[t])return n[t].exports;var o=n[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,i),o.l=!0,o.exports}i.m=e,i.c=n,i.d=function(e,t,o){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(i.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(o,n,function(t){return e[t]}.bind(null,n));return o},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],s=l.push.bind(l);l.push=t,l=l.slice();for(var c=0;c<l.length;c++)t(l[c]);var u=s;r.push([0,"chunk-vendors"]),o()})({0:function(e,t,o){e.exports=o("56d7")},"034f":function(e,t,o){"use strict";var n=o("3ebb"),a=o.n(n);a.a},"3ebb":function(e,t,o){var n=o("e31a");"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var a=o("499e").default;a("517436b3",n,!0,{sourceMap:!1,shadowMode:!1})},"3f13":function(e,t,o){var n=o("9532");"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var a=o("499e").default;a("89f0bf80",n,!0,{sourceMap:!1,shadowMode:!1})},"56d7":function(e,t,o){"use strict";o.r(t);o("e260"),o("e6cf"),o("cca6"),o("a79d");var n=o("2b0e"),a=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{attrs:{id:"app"}},[o("p",[e._v("Click the button to open modal window")]),o("button",{on:{click:function(t){e.showModal=!0}}},[e._v("Open Modal")]),o("modal-window",{attrs:{visible:e.showModal,"close-on-escape":!0,"close-on-outside-click":!0,"show-x-mark":!0},on:{close:function(t){e.showModal=!1}}},[o("h2",[e._v("Modal window")]),o("p",[e._v("Here be the content")])])],1)},r=[],i=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("transition",{attrs:{name:"modal"}},[e.visible?o("div",{staticClass:"vmw-modal-overlay"},[o("div",{ref:"overlay",staticClass:"vmw-modal-wrapper"},[o("div",{staticClass:"vmw-modal-container"},[e._t("default"),e.showXMark?o("div",{staticClass:"vmw-close-sign",on:{click:function(t){return e.$emit("close")}}},[e._v(" ❌ ")]):e._e()],2)])]):e._e()])},l=[],s={name:"ModalWindow",props:{visible:Boolean,closeOnEscape:{type:Boolean,default:!0},closeOnOutsideClick:{type:Boolean,default:!0},showXMark:{type:Boolean,default:!0}},watch:{visible:function(){var e=this;this.visible&&this.$nextTick((function(){e.closeOnOutsideClick&&e.$refs.overlay.addEventListener("click",(function(t){t.target==e.$refs.overlay&&e.$emit("close")})),e.closeOnEscape&&document.addEventListener("keydown",(function(t){"Escape"===t.key&&e.$emit("close")}))}))}}},c=s,u=(o("9e15"),o("2877")),d=Object(u["a"])(c,i,l,!1,null,null,null),p=d.exports,f={name:"App",components:{ModalWindow:p},data:function(){return{showModal:!1}}},v=f,m=(o("034f"),Object(u["a"])(v,a,r,!1,null,null,null)),b=m.exports;n["a"].config.productionTip=!1,new n["a"]({render:function(e){return e(b)}}).$mount("#app")},9532:function(e,t,o){var n=o("24fb");t=n(!1),t.push([e.i,'.vmw-modal-overlay{position:fixed;z-index:9998;top:0;left:0;width:100%;height:100%;background-color:rgba(0,0,0,.5);display:table;transition:opacity .3s ease}.vmw-modal-wrapper{display:table-cell;vertical-align:middle}.vmw-modal-container{width:300px;margin:0 auto;padding:20px 30px 40px;background-color:#fff;border-radius:2px;box-shadow:0 2px 8px rgba(0,0,0,.33);transition:all .3s ease;font-family:Helvetica,Arial,sans-serif;position:relative}.modal-enter,.modal-leave-active{opacity:0}.modal-enter .vmw-modal-container,.modal-leave-active .vmw-modal-container{transform:scale(1.1)}.vmw-close-sign{content:"";position:absolute;color:#bbb;font-weight:700;top:0;right:0;padding:12px;cursor:pointer;transition:all .3s ease-out;font-size:1.3em}.vmw-close-sign:hover{color:#444}',""]),e.exports=t},"9e15":function(e,t,o){"use strict";var n=o("3f13"),a=o.n(n);a.a},e31a:function(e,t,o){var n=o("24fb");t=n(!1),t.push([e.i,"body,html{height:100%;padding:0;margin:0}#app,body{display:flex;justify-content:center;align-items:center}#app{flex-direction:column}",""]),e.exports=t}});
//# sourceMappingURL=app.82e4ab94.js.map
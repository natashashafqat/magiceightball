module.exports=function(e){var t=require("../../../ssr-module-cache.js");function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}},i=!0;try{e[n].call(o.exports,o,o.exports,r),i=!1}finally{i&&delete t[n]}return o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=1)}({"+shI":function(e,t,r){"use strict";var n=r("cDcd"),o=r.n(n),i=r("YFqc"),s=r.n(i),u=r("4151"),a=r.n(u),c=r("Ms0O"),l=r.n(c),f=r("UVoM"),p=r.n(f),h=r("Wh1t"),d=r.n(h),y={marginRight:15,fontSize:20};t.a=function(){return o.a.createElement("div",null,o.a.createElement(a.a,{position:"static",style:{background:"#685fa8"}},o.a.createElement(l.a,null,o.a.createElement(p.a,{variant:"title",color:"inherit"},o.a.createElement(s.a,{href:"/"},o.a.createElement(d.a,{color:"inherit",style:y},"Play Magic 8 Ball")),o.a.createElement(s.a,{href:"/statistics"},o.a.createElement(d.a,{color:"inherit",style:y},"Game Statistics"))))))}},"/+P4":function(e,t,r){var n=r("Bhuq"),o=r("TRZx");function i(t){return e.exports=i=o?n:function(e){return e.__proto__||n(e)},i(t)}e.exports=i},"/+oN":function(e,t){e.exports=require("core-js/library/fn/object/get-prototype-of")},"/HRN":function(e,t){e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},"0Bsm":function(e,t,r){"use strict";var n=r("KI45"),o=n(r("UXZV")),i=n(r("/HRN")),s=n(r("WaGi")),u=n(r("ZDA2")),a=n(r("/+P4")),c=n(r("N9n2")),l=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t},f=function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var p=l(r("cDcd")),h=f(r("rf6O")),d=f(r("2mql")),y=r("p8BD");t.default=function(e){var t=y.getDisplayName(e),r=function(t){function r(){return(0,i.default)(this,r),(0,u.default)(this,(0,a.default)(r).apply(this,arguments))}return(0,c.default)(r,t),(0,s.default)(r,[{key:"render",value:function(){return p.default.createElement(e,(0,o.default)({router:this.context.router},this.props))}}]),r}(p.Component);return r.contextTypes={router:h.default.object},r.displayName="withRouter(".concat(t,")"),d.default(r,e)}},"0iUn":function(e,t,r){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}r.d(t,"a",function(){return n})},1:function(e,t,r){e.exports=r("RNiq")},"1imS":function(e,t){e.exports=require("@material-ui/core/CircularProgress")},"20a2":function(e,t,r){e.exports=r("nOHt")},"2mql":function(e,t,r){"use strict";var n=r("UWCm"),o={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},i={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},s={};s[n.ForwardRef]={$$typeof:!0,render:!0};var u=Object.defineProperty,a=Object.getOwnPropertyNames,c=Object.getOwnPropertySymbols,l=Object.getOwnPropertyDescriptor,f=Object.getPrototypeOf,p=Object.prototype;e.exports=function e(t,r,n){if("string"!=typeof r){if(p){var h=f(r);h&&h!==p&&e(t,h,n)}var d=a(r);c&&(d=d.concat(c(r)));for(var y=s[t.$$typeof]||o,m=s[r.$$typeof]||o,v=0;v<d.length;++v){var b=d[v];if(!(i[b]||n&&n[b]||m&&m[b]||y&&y[b])){var _=l(r,b);try{u(t,b,_)}catch(e){}}}return t}return t}},"3niX":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.flush=function(){var e=l.cssRules();return l.flush(),e},t.default=void 0;var n,o=r("cDcd");function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function u(e,t){return!t||"object"!==i(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function a(e){return(a=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function c(e,t){return(c=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var l=new(((n=r("SevZ"))&&n.__esModule?n:{default:n}).default),f=function(e){function t(e){var r;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(r=u(this,a(t).call(this,e))).prevProps={},r}var r,n,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&c(e,t)}(t,o.Component),r=t,i=[{key:"dynamic",value:function(e){return e.map(function(e){var t=e[0],r=e[1];return l.computeId(t,r)}).join(" ")}}],(n=[{key:"shouldComponentUpdate",value:function(e){return this.props.id!==e.id||String(this.props.dynamic)!==String(e.dynamic)}},{key:"componentWillUnmount",value:function(){l.remove(this.props)}},{key:"render",value:function(){return this.shouldComponentUpdate(this.prevProps)&&(this.prevProps.id&&l.remove(this.prevProps),l.add(this.props),this.prevProps=this.props),null}}])&&s(r.prototype,n),i&&s(r,i),t}();t.default=f},4151:function(e,t){e.exports=require("@material-ui/core/AppBar")},"6BQ9":function(e,t,r){e.exports=r("wa65")},"9Jkg":function(e,t,r){e.exports=r("fozc")},"9kyW":function(e,t,r){"use strict";e.exports=function(e){for(var t=5381,r=e.length;r;)t=33*t^e.charCodeAt(--r);return t>>>0}},"AT/M":function(e,t,r){"use strict";function n(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}r.d(t,"a",function(){return n})},Bhuq:function(e,t,r){e.exports=r("/+oN")},IbbU:function(e,t){e.exports=require("@material-ui/core/TextField")},K47E:function(e,t){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},KI45:function(e,t){e.exports=function(e){return e&&e.__esModule?e:{default:e}}},MI3g:function(e,t,r){"use strict";var n=r("XVgq"),o=r.n(n),i=r("Z7t5"),s=r.n(i);function u(e){return(u="function"==typeof s.a&&"symbol"==typeof o.a?function(e){return typeof e}:function(e){return e&&"function"==typeof s.a&&e.constructor===s.a&&e!==s.a.prototype?"symbol":typeof e})(e)}function a(e){return(a="function"==typeof s.a&&"symbol"===u(o.a)?function(e){return u(e)}:function(e){return e&&"function"==typeof s.a&&e.constructor===s.a&&e!==s.a.prototype?"symbol":u(e)})(e)}var c=r("AT/M");function l(e,t){return!t||"object"!==a(t)&&"function"!=typeof t?Object(c.a)(e):t}r.d(t,"a",function(){return l})},MX0m:function(e,t,r){e.exports=r("3niX")},Ms0O:function(e,t){e.exports=require("@material-ui/core/Toolbar")},N9n2:function(e,t,r){var n=r("SqZg"),o=r("vjea");e.exports=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=n(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&o(e,t)}},RNiq:function(e,t,r){"use strict";r.r(t);r("cDcd"),r("faye");var n=r("k8vJ");t.default=n.default},SevZ:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=i(r("9kyW")),o=i(r("bVZc"));function i(e){return e&&e.__esModule?e:{default:e}}function s(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var u=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=t.styleSheet,n=void 0===r?null:r,i=t.optimizeForSpeed,s=void 0!==i&&i,u=t.isBrowser,a=void 0===u?"undefined"!=typeof window:u;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._sheet=n||new o.default({name:"styled-jsx",optimizeForSpeed:s}),this._sheet.inject(),n&&"boolean"==typeof s&&(this._sheet.setOptimizeForSpeed(s),this._optimizeForSpeed=this._sheet.isOptimizeForSpeed()),this._isBrowser=a,this._fromServer=void 0,this._indices={},this._instancesCounts={},this.computeId=this.createComputeId(),this.computeSelector=this.createComputeSelector()}var t,r,i;return t=e,(r=[{key:"add",value:function(e){var t=this;void 0===this._optimizeForSpeed&&(this._optimizeForSpeed=Array.isArray(e.children),this._sheet.setOptimizeForSpeed(this._optimizeForSpeed),this._optimizeForSpeed=this._sheet.isOptimizeForSpeed()),this._isBrowser&&!this._fromServer&&(this._fromServer=this.selectFromServer(),this._instancesCounts=Object.keys(this._fromServer).reduce(function(e,t){return e[t]=0,e},{}));var r=this.getIdAndRules(e),n=r.styleId,o=r.rules;if(n in this._instancesCounts)this._instancesCounts[n]+=1;else{var i=o.map(function(e){return t._sheet.insertRule(e)}).filter(function(e){return-1!==e});this._indices[n]=i,this._instancesCounts[n]=1}}},{key:"remove",value:function(e){var t=this,r=this.getIdAndRules(e).styleId;if(function(e,t){if(!e)throw new Error("StyleSheetRegistry: ".concat(t,"."))}(r in this._instancesCounts,"styleId: `".concat(r,"` not found")),this._instancesCounts[r]-=1,this._instancesCounts[r]<1){var n=this._fromServer&&this._fromServer[r];n?(n.parentNode.removeChild(n),delete this._fromServer[r]):(this._indices[r].forEach(function(e){return t._sheet.deleteRule(e)}),delete this._indices[r]),delete this._instancesCounts[r]}}},{key:"update",value:function(e,t){this.add(t),this.remove(e)}},{key:"flush",value:function(){this._sheet.flush(),this._sheet.inject(),this._fromServer=void 0,this._indices={},this._instancesCounts={},this.computeId=this.createComputeId(),this.computeSelector=this.createComputeSelector()}},{key:"cssRules",value:function(){var e=this,t=this._fromServer?Object.keys(this._fromServer).map(function(t){return[t,e._fromServer[t]]}):[],r=this._sheet.cssRules();return t.concat(Object.keys(this._indices).map(function(t){return[t,e._indices[t].map(function(e){return r[e].cssText}).join(e._optimizeForSpeed?"":"\n")]}).filter(function(e){return Boolean(e[1])}))}},{key:"createComputeId",value:function(){var e={};return function(t,r){if(!r)return"jsx-".concat(t);var o=String(r),i=t+o;return e[i]||(e[i]="jsx-".concat((0,n.default)("".concat(t,"-").concat(o)))),e[i]}}},{key:"createComputeSelector",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:/__jsx-style-dynamic-selector/g,t={};return function(r,n){this._isBrowser||(n=n.replace(/\/style/gi,"\\/style"));var o=r+n;return t[o]||(t[o]=n.replace(e,r)),t[o]}}},{key:"getIdAndRules",value:function(e){var t=this,r=e.children,n=e.dynamic,o=e.id;if(n){var i=this.computeId(o,n);return{styleId:i,rules:Array.isArray(r)?r.map(function(e){return t.computeSelector(i,e)}):[this.computeSelector(i,r)]}}return{styleId:this.computeId(o),rules:Array.isArray(r)?r:[r]}}},{key:"selectFromServer",value:function(){return Array.prototype.slice.call(document.querySelectorAll('[id^="__jsx-"]')).reduce(function(e,t){return e[t.id.slice(2)]=t,e},{})}}])&&s(t.prototype,r),i&&s(t,i),e}();t.default=u},SqZg:function(e,t,r){e.exports=r("o5io")},TRZx:function(e,t,r){e.exports=r("Wk4r")},TUA0:function(e,t){e.exports=require("core-js/library/fn/object/define-property")},Tit0:function(e,t,r){"use strict";var n=r("SqZg"),o=r.n(n),i=r("TRZx"),s=r.n(i);function u(e,t){return(u=s.a||function(e,t){return e.__proto__=t,e})(e,t)}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=o()(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&u(e,t)}r.d(t,"a",function(){return a})},UVoM:function(e,t){e.exports=require("@material-ui/core/Typography")},UWCm:function(e,t){e.exports=require("react-is")},UXZV:function(e,t,r){e.exports=r("dGr4")},WaGi:function(e,t,r){var n=r("hfKm");function o(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),n(e,o.key,o)}}e.exports=function(e,t,r){return t&&o(e.prototype,t),r&&o(e,r),e}},Wh1t:function(e,t){e.exports=require("@material-ui/core/Button")},Wk4r:function(e,t){e.exports=require("core-js/library/fn/object/set-prototype-of")},XVgq:function(e,t,r){e.exports=r("gHn/")},YFqc:function(e,t,r){e.exports=r("cTJO")},Z7t5:function(e,t,r){e.exports=r("vqFK")},ZDA2:function(e,t,r){var n=r("iZP3"),o=r("K47E");e.exports=function(e,t){return!t||"object"!==n(t)&&"function"!=typeof t?o(e):t}},a7VT:function(e,t,r){"use strict";r.d(t,"a",function(){return u});var n=r("Bhuq"),o=r.n(n),i=r("TRZx"),s=r.n(i);function u(e){return(u=s.a?o.a:function(e){return e.__proto__||o()(e)})(e)}},aAV7:function(e,t){e.exports=require("core-js/library/fn/reflect/construct")},b3CU:function(e,t,r){var n=r("pbKT"),o=r("vjea");function i(t,r,s){return!function(){if("undefined"==typeof Reflect||!n)return!1;if(n.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(n(Date,[],function(){})),!0}catch(e){return!1}}()?e.exports=i=function(e,t,r){var n=[null];n.push.apply(n,t);var i=new(Function.bind.apply(e,n));return r&&o(i,r.prototype),i}:e.exports=i=n,i.apply(null,arguments)}e.exports=i},bVZc:function(e,t,r){"use strict";function n(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=process.env&&!0,i=function(e){return"[object String]"===Object.prototype.toString.call(e)},s=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=t.name,n=void 0===r?"stylesheet":r,s=t.optimizeForSpeed,a=void 0===s?o:s,c=t.isBrowser,l=void 0===c?"undefined"!=typeof window:c;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),u(i(n),"`name` must be a string"),this._name=n,this._deletedRulePlaceholder="#".concat(n,"-deleted-rule____{}"),u("boolean"==typeof a,"`optimizeForSpeed` must be a boolean"),this._optimizeForSpeed=a,this._isBrowser=l,this._serverSheet=void 0,this._tags=[],this._injected=!1,this._rulesCount=0;var f=this._isBrowser&&document.querySelector('meta[property="csp-nonce"]');this._nonce=f?f.getAttribute("content"):null}var t,r,s;return t=e,(r=[{key:"setOptimizeForSpeed",value:function(e){u("boolean"==typeof e,"`setOptimizeForSpeed` accepts a boolean"),u(0===this._rulesCount,"optimizeForSpeed cannot be when rules have already been inserted"),this.flush(),this._optimizeForSpeed=e,this.inject()}},{key:"isOptimizeForSpeed",value:function(){return this._optimizeForSpeed}},{key:"inject",value:function(){var e=this;if(u(!this._injected,"sheet already injected"),this._injected=!0,this._isBrowser&&this._optimizeForSpeed)return this._tags[0]=this.makeStyleTag(this._name),this._optimizeForSpeed="insertRule"in this.getSheet(),void(this._optimizeForSpeed||(o||console.warn("StyleSheet: optimizeForSpeed mode not supported falling back to standard mode."),this.flush(),this._injected=!0));this._serverSheet={cssRules:[],insertRule:function(t,r){return"number"==typeof r?e._serverSheet.cssRules[r]={cssText:t}:e._serverSheet.cssRules.push({cssText:t}),r},deleteRule:function(t){e._serverSheet.cssRules[t]=null}}}},{key:"getSheetForTag",value:function(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]}},{key:"getSheet",value:function(){return this.getSheetForTag(this._tags[this._tags.length-1])}},{key:"insertRule",value:function(e,t){if(u(i(e),"`insertRule` accepts only strings"),!this._isBrowser)return"number"!=typeof t&&(t=this._serverSheet.cssRules.length),this._serverSheet.insertRule(e,t),this._rulesCount++;if(this._optimizeForSpeed){var r=this.getSheet();"number"!=typeof t&&(t=r.cssRules.length);try{r.insertRule(e,t)}catch(t){return o||console.warn("StyleSheet: illegal rule: \n\n".concat(e,"\n\nSee https://stackoverflow.com/q/20007992 for more info")),-1}}else{var n=this._tags[t];this._tags.push(this.makeStyleTag(this._name,e,n))}return this._rulesCount++}},{key:"replaceRule",value:function(e,t){if(this._optimizeForSpeed||!this._isBrowser){var r=this._isBrowser?this.getSheet():this._serverSheet;if(t.trim()||(t=this._deletedRulePlaceholder),!r.cssRules[e])return e;r.deleteRule(e);try{r.insertRule(t,e)}catch(n){o||console.warn("StyleSheet: illegal rule: \n\n".concat(t,"\n\nSee https://stackoverflow.com/q/20007992 for more info")),r.insertRule(this._deletedRulePlaceholder,e)}}else{var n=this._tags[e];u(n,"old rule at index `".concat(e,"` not found")),n.textContent=t}return e}},{key:"deleteRule",value:function(e){if(this._isBrowser)if(this._optimizeForSpeed)this.replaceRule(e,"");else{var t=this._tags[e];u(t,"rule at index `".concat(e,"` not found")),t.parentNode.removeChild(t),this._tags[e]=null}else this._serverSheet.deleteRule(e)}},{key:"flush",value:function(){this._injected=!1,this._rulesCount=0,this._isBrowser?(this._tags.forEach(function(e){return e&&e.parentNode.removeChild(e)}),this._tags=[]):this._serverSheet.cssRules=[]}},{key:"cssRules",value:function(){var e=this;return this._isBrowser?this._tags.reduce(function(t,r){return r?t=t.concat(e.getSheetForTag(r).cssRules.map(function(t){return t.cssText===e._deletedRulePlaceholder?null:t})):t.push(null),t},[]):this._serverSheet.cssRules}},{key:"makeStyleTag",value:function(e,t,r){t&&u(i(t),"makeStyleTag acceps only strings as second parameter");var n=document.createElement("style");this._nonce&&n.setAttribute("nonce",this._nonce),n.type="text/css",n.setAttribute("data-".concat(e),""),t&&n.appendChild(document.createTextNode(t));var o=document.head||document.getElementsByTagName("head")[0];return r?o.insertBefore(n,r):o.appendChild(n),n}},{key:"length",get:function(){return this._rulesCount}}])&&n(t.prototype,r),s&&n(t,s),e}();function u(e,t){if(!e)throw new Error("StyleSheet: ".concat(t,"."))}t.default=s},bzos:function(e,t){e.exports=require("url")},cDcd:function(e,t){e.exports=require("react")},cTJO:function(e,t,r){"use strict";var n=r("KI45"),o=n(r("9Jkg")),i=n(r("iZP3")),s=n(r("/HRN")),u=n(r("WaGi")),a=n(r("ZDA2")),c=n(r("/+P4")),l=n(r("N9n2")),f=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t},p=function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var h=r("bzos"),d=f(r("cDcd")),y=(p(r("rf6O")),f(r("20a2"))),m=r("p8BD");var v=function(e){function t(){var e,r,n,o,u;return(0,s.default)(this,t),(e=(0,a.default)(this,(0,c.default)(t).apply(this,arguments))).formatUrls=(r=function(e,t){return{href:e&&"object"===(0,i.default)(e)?m.formatWithValidation(e):e,as:t&&"object"===(0,i.default)(t)?m.formatWithValidation(t):t}},n=null,o=null,u=null,function(e,t){if(e===n&&t===o)return u;var i=r(e,t);return n=e,o=t,u=i,i}),e.linkClicked=function(t){var r=t.currentTarget,n=r.nodeName,o=r.target;if("A"!==n||!(o&&"_self"!==o||t.metaKey||t.ctrlKey||t.shiftKey||t.nativeEvent&&2===t.nativeEvent.which)){var i=e.formatUrls(e.props.href,e.props.as),s=i.href,u=i.as;if(function(e){var t=h.parse(e,!1,!0),r=h.parse(m.getLocationOrigin(),!1,!0);return!t.host||t.protocol===r.protocol&&t.host===r.host}(s)){var a=window.location.pathname;s=h.resolve(a,s),u=u?h.resolve(a,u):s,t.preventDefault();var c=e.props.scroll;null==c&&(c=u.indexOf("#")<0),y.default[e.props.replace?"replace":"push"](s,u,{shallow:e.props.shallow}).then(function(e){e&&c&&(window.scrollTo(0,0),document.body.focus())}).catch(function(t){e.props.onError&&e.props.onError(t)})}}},e}return(0,l.default)(t,e),(0,u.default)(t,[{key:"componentDidMount",value:function(){this.prefetch()}},{key:"componentDidUpdate",value:function(e){(0,o.default)(this.props.href)!==(0,o.default)(e.href)&&this.prefetch()}},{key:"prefetch",value:function(){if(this.props.prefetch&&"undefined"!=typeof window){var e=window.location.pathname,t=this.formatUrls(this.props.href,this.props.as).href,r=h.resolve(e,t);y.default.prefetch(r)}}},{key:"render",value:function(){var e=this,t=this.props.children,r=this.formatUrls(this.props.href,this.props.as),n=r.href,o=r.as;"string"==typeof t&&(t=d.default.createElement("a",null,t));var i=d.Children.only(t),s={onClick:function(t){i.props&&"function"==typeof i.props.onClick&&i.props.onClick(t),t.defaultPrevented||e.linkClicked(t)}};return!this.props.passHref&&("a"!==i.type||"href"in i.props)||(s.href=o||n),s.href&&"undefined"!=typeof __NEXT_DATA__&&__NEXT_DATA__.nextExport&&(s.href=y.Router._rewriteUrlForNextExport(s.href)),d.default.cloneElement(i,s)}}]),t}(d.Component);t.default=v},dGr4:function(e,t){e.exports=require("core-js/library/fn/object/assign")},faye:function(e,t){e.exports=require("react-dom")},fozc:function(e,t){e.exports=require("core-js/library/fn/json/stringify")},"gHn/":function(e,t){e.exports=require("core-js/library/fn/symbol/iterator")},hfKm:function(e,t,r){e.exports=r("TUA0")},iZP3:function(e,t,r){var n=r("XVgq"),o=r("Z7t5");function i(e){return(i="function"==typeof o&&"symbol"==typeof n?function(e){return typeof e}:function(e){return e&&"function"==typeof o&&e.constructor===o&&e!==o.prototype?"symbol":typeof e})(e)}function s(t){return"function"==typeof o&&"symbol"===i(n)?e.exports=s=function(e){return i(e)}:e.exports=s=function(e){return e&&"function"==typeof o&&e.constructor===o&&e!==o.prototype?"symbol":i(e)},s(t)}e.exports=s},k8vJ:function(e,t,r){"use strict";r.r(t);var n=r("6BQ9"),o=r.n(n),i=r("0iUn"),s=r("sLSF"),u=r("MI3g"),a=r("a7VT"),c=r("AT/M"),l=r("Tit0"),f=r("hfKm"),p=r.n(f);function h(e,t,r){return t in e?p()(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var d=r("MX0m"),y=r.n(d),m=r("+shI"),v=r("cDcd"),b=r.n(v),_=r("IbbU"),g=r.n(_),S=r("Wh1t"),x=r.n(S),w=r("UVoM"),j=r.n(w),C=r("1imS"),k=r.n(C),O=function(e){function t(e){var r;return Object(i.a)(this,t),r=Object(u.a)(this,Object(a.a)(t).call(this,e)),h(Object(c.a)(r),"componentDidMount",function(){r.setState({count:o()(localStorage.getItem("count"))||0})}),h(Object(c.a)(r),"incrementCounter",function(){var e=r.state.count+1;localStorage.setItem("count",e),r.setState({count:e})}),h(Object(c.a)(r),"handleSubmit",function(e){e.preventDefault(),""==inputquestion.value?alert("Enter a question first!"):fetch("/",{method:"POST"}).then(function(e){return e.text()}).then(function(e){return r.setState({response:e})}).then(r.setState({showProgress:!1})).then(r.setState({showAnswer:!0}))}),r.state={response:void 0,showProgress:!1},r.incrementCounter=r.incrementCounter.bind(Object(c.a)(r)),r.handleSubmit=r.handleSubmit.bind(Object(c.a)(r)),r}return Object(l.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return b.a.createElement("body",{style:{backgroundColor:"#191b1e"},className:"jsx-4166456230"},b.a.createElement(m.a,null),b.a.createElement("div",{style:{marginTop:"100px",display:"flex",marginLeft:"auto",marginRight:"auto",justifyContent:"center",alignItems:"center"},id:"circle",className:"jsx-4166456230"},b.a.createElement(j.a,{variant:"title",color:"inherit"},b.a.createElement("div",{style:{display:"flex",justifyContent:"center",alignItems:"center"},className:"jsx-4166456230"},b.a.createElement("h1",{style:{fontFamily:"Arial",fontSize:"50px",color:"#685fa8"},className:"jsx-4166456230"},"Magic 8 Ball")),b.a.createElement("div",{style:{display:"flex",justifyContent:"center",alignItems:"center"},className:"jsx-4166456230"},b.a.createElement("form",{onSubmit:this.handleSubmit,className:"jsx-4166456230 question-input"},b.a.createElement(g.a,{id:"inputquestion",autoComplete:"off",placeholder:"Ask your question...",InputProps:{style:{color:"white"}},InputLabelProps:{style:{color:"white"}},margin:"normal",style:{width:"200px",paddingRight:"10px",color:"white"}}),b.a.createElement(x.a,h({variant:"contained",type:"submit",color:"primary",onClick:this.incrementCounter.bind(this),id:"submitquestion",style:{width:"100px",fontSize:17,background:"#4d1393"}},"id","input"),"Shake Me!"))),b.a.createElement("div",{className:"jsx-4166456230"},this.state.showProgress?b.a.createElement(k.a,{color:"primary"}):null),b.a.createElement("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",color:"white",fontWeight:"bold"},className:"jsx-4166456230"},this.state.showAnswer?b.a.createElement("p",{className:"jsx-4166456230"},this.state.response):null))),b.a.createElement(y.a,{id:"4166456230"},["#circle.jsx-4166456230{width:500px;height:500px;background:#191b1e;border-radius:1000px;-webkit-box-shadow:0 0 90px grey;-moz-box-shadow:0 0 90px grey;box-shadow:0 0 90px grey;}"]))}}]),t}(v.Component);t.default=O},nOHt:function(e,t,r){"use strict";var n=r("KI45"),o=n(r("UXZV")),i=n(r("iZP3")),s=n(r("b3CU")),u=n(r("hfKm")),a=function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var c=a(r("qxCs")),l={router:null,readyCallbacks:[],ready:function(e){if(this.router)return e();"undefined"!=typeof window&&this.readyCallbacks.push(e)}},f=["pathname","route","query","asPath"],p=["components"],h=["push","replace","reload","back","prefetch","beforePopState"];function d(){if(!l.router){throw new Error('No router instance found.\nYou should only use "next/router" inside the client side of your app.\n')}}Object.defineProperty(l,"events",{get:function(){return c.default.events}}),p.concat(f).forEach(function(e){(0,u.default)(l,e,{get:function(){return d(),l.router[e]}})}),h.forEach(function(e){l[e]=function(){var t;return d(),(t=l.router)[e].apply(t,arguments)}}),["routeChangeStart","beforeHistoryChange","routeChangeComplete","routeChangeError","hashChangeStart","hashChangeComplete"].forEach(function(e){l.ready(function(){c.default.events.on(e,function(){var t="on".concat(e.charAt(0).toUpperCase()).concat(e.substring(1));if(l[t])try{l[t].apply(l,arguments)}catch(e){console.error("Error when running the Router event: ".concat(t)),console.error("".concat(e.message,"\n").concat(e.stack))}})})}),t.default=l;var y=r("0Bsm");t.withRouter=y.default,t.createRouter=function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return l.router=(0,s.default)(c.default,t),l.readyCallbacks.forEach(function(e){return e()}),l.readyCallbacks=[],l.router},t.Router=c.default,t.makePublicRouterInstance=function(e){for(var t={},r=0;r<f.length;r++){var n=f[r];"object"!==(0,i.default)(e[n])?t[n]=e[n]:t[n]=(0,o.default)({},e[n])}return t.events=c.default.events,p.forEach(function(r){(0,u.default)(t,r,{get:function(){return e[r]}})}),h.forEach(function(r){t[r]=function(){return e[r].apply(e,arguments)}}),t}},o5io:function(e,t){e.exports=require("core-js/library/fn/object/create")},p8BD:function(e,t){e.exports=require("next-server/dist/lib/utils")},pbKT:function(e,t,r){e.exports=r("aAV7")},qxCs:function(e,t){e.exports=require("next-server/dist/lib/router/router")},rf6O:function(e,t){e.exports=require("prop-types")},sLSF:function(e,t,r){"use strict";r.d(t,"a",function(){return s});var n=r("hfKm"),o=r.n(n);function i(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),o()(e,n.key,n)}}function s(e,t,r){return t&&i(e.prototype,t),r&&i(e,r),e}},vjea:function(e,t,r){var n=r("TRZx");function o(t,r){return e.exports=o=n||function(e,t){return e.__proto__=t,e},o(t,r)}e.exports=o},vqFK:function(e,t){e.exports=require("core-js/library/fn/symbol")},wa65:function(e,t){e.exports=require("core-js/library/fn/parse-int")}});
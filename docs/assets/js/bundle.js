(()=>{"use strict";var n={56:(n,r,e)=>{n.exports=function(n){var r=e.nc;r&&n.setAttribute("nonce",r)}},72:n=>{var r=[];function e(n){for(var e=-1,t=0;t<r.length;t++)if(r[t].identifier===n){e=t;break}return e}function t(n,t){for(var i={},a=[],c=0;c<n.length;c++){var s=n[c],u=t.base?s[0]+t.base:s[0],A=i[u]||0,f="".concat(u," ").concat(A);i[u]=A+1;var p=e(f),l={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)r[p].references++,r[p].updater(l);else{var d=o(l,t);t.byIndex=c,r.splice(c,0,{identifier:f,updater:d,references:1})}a.push(f)}return a}function o(n,r){var e=r.domAPI(r);return e.update(n),function(r){if(r){if(r.css===n.css&&r.media===n.media&&r.sourceMap===n.sourceMap&&r.supports===n.supports&&r.layer===n.layer)return;e.update(n=r)}else e.remove()}}n.exports=function(n,o){var i=t(n=n||[],o=o||{});return function(n){n=n||[];for(var a=0;a<i.length;a++){var c=e(i[a]);r[c].references--}for(var s=t(n,o),u=0;u<i.length;u++){var A=e(i[u]);0===r[A].references&&(r[A].updater(),r.splice(A,1))}i=s}}},113:n=>{n.exports=function(n,r){if(r.styleSheet)r.styleSheet.cssText=n;else{for(;r.firstChild;)r.removeChild(r.firstChild);r.appendChild(document.createTextNode(n))}}},314:n=>{n.exports=function(n){var r=[];return r.toString=function(){return this.map((function(r){var e="",t=void 0!==r[5];return r[4]&&(e+="@supports (".concat(r[4],") {")),r[2]&&(e+="@media ".concat(r[2]," {")),t&&(e+="@layer".concat(r[5].length>0?" ".concat(r[5]):""," {")),e+=n(r),t&&(e+="}"),r[2]&&(e+="}"),r[4]&&(e+="}"),e})).join("")},r.i=function(n,e,t,o,i){"string"==typeof n&&(n=[[null,n,void 0]]);var a={};if(t)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(a[s]=!0)}for(var u=0;u<n.length;u++){var A=[].concat(n[u]);t&&a[A[0]]||(void 0!==i&&(void 0===A[5]||(A[1]="@layer".concat(A[5].length>0?" ".concat(A[5]):""," {").concat(A[1],"}")),A[5]=i),e&&(A[2]?(A[1]="@media ".concat(A[2]," {").concat(A[1],"}"),A[2]=e):A[2]=e),o&&(A[4]?(A[1]="@supports (".concat(A[4],") {").concat(A[1],"}"),A[4]=o):A[4]="".concat(o)),r.push(A))}},r}},354:n=>{n.exports=function(n){var r=n[1],e=n[3];if(!e)return r;if("function"==typeof btoa){var t=btoa(unescape(encodeURIComponent(JSON.stringify(e)))),o="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(t),i="/*# ".concat(o," */");return[r].concat([i]).join("\n")}return[r].join("\n")}},540:n=>{n.exports=function(n){var r=document.createElement("style");return n.setAttributes(r,n.attributes),n.insert(r,n.options),r}},659:n=>{var r={};n.exports=function(n,e){var t=function(n){if(void 0===r[n]){var e=document.querySelector(n);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(n){e=null}r[n]=e}return r[n]}(n);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");t.appendChild(e)}},825:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var r=n.insertStyleElement(n);return{update:function(e){!function(n,r,e){var t="";e.supports&&(t+="@supports (".concat(e.supports,") {")),e.media&&(t+="@media ".concat(e.media," {"));var o=void 0!==e.layer;o&&(t+="@layer".concat(e.layer.length>0?" ".concat(e.layer):""," {")),t+=e.css,o&&(t+="}"),e.media&&(t+="}"),e.supports&&(t+="}");var i=e.sourceMap;i&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),r.styleTagTransform(t,n,r.options)}(r,n,e)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(r)}}}},958:(n,r,e)=>{e.d(r,{A:()=>c});var t=e(354),o=e.n(t),i=e(314),a=e.n(i)()(o());a.push([n.id,"@import url(https://fonts.googleapis.com/css2?family=Arvo:ital,wght@0,400;0,700;1,400;1,700&display=swap);"]),a.push([n.id,"@charset \"UTF-8\";\n\n:root {\n    --blue: #054f77;\n    --off-white: #f5f5f5;\n    --orange: #f67828;\n    --title-font: 'Arvo', sans-serif;\n}\n\n* {\n    box-sizing: border-box;\n    margin: 0px;\n    padding: 0px;\n}\n\nhtml, body {\n    background: var(--blue);\n    font-family: Arial, Helvetica, sans-serif;\n    font-size: 1.2em;\n    line-height: 1.5em;\n}\n\nmain > section {\n    background: var(--off-white);\n    margin: 50px auto;\n    padding: 20px;\n    width: 680px;\n    border-radius: 10px;\n}\n\nmain > section > h1 {\n    text-align: center;\n}\n\nmain > section > form {\n    margin: 20px;\n}\n\nmain > section > form > div > p {\n    font-size: 1.5em;\n    color: var(--blue);\n    margin: 20px;\n}\n\nmain > section > form > div {\n    text-align: center;\n}\n\nmain > section > form > div > button {\n    height: 50px;\n    width: 200px;\n    margin: 0px 20px;\n    background: var(--orange);\n    border: none;\n    box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.6);\n    border-radius: 5px;\n    font-size: 1em;\n    color: #fff;\n    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.6);\n}\n\nmain > section > form > div > button:hover {\n    background: orangered;\n    cursor: pointer;\n}\n\nfooter {\n    background: var(--off-white);\n    position: absolute;\n    bottom: 0;\n    width: 100%;\n}\n\nfooter > p {\n    font-size: 0.7em;\n    text-align: center;\n}\n\nfooter > p > a {\n    text-decoration: none;\n    color: var(--blue);\n}\n\nfooter > p > a:hover {\n    text-decoration: underline;\n    color: var(--orange);\n}\n","",{version:3,sources:["webpack://./src/assets/css/style.css"],names:[],mappings:"AAAA,gBAAgB;;AAIhB;IACI,eAAe;IACf,oBAAoB;IACpB,iBAAiB;IACjB,gCAAgC;AACpC;;AAEA;IACI,sBAAsB;IACtB,WAAW;IACX,YAAY;AAChB;;AAEA;IACI,uBAAuB;IACvB,yCAAyC;IACzC,gBAAgB;IAChB,kBAAkB;AACtB;;AAEA;IACI,4BAA4B;IAC5B,iBAAiB;IACjB,aAAa;IACb,YAAY;IACZ,mBAAmB;AACvB;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,gBAAgB;IAChB,kBAAkB;IAClB,YAAY;AAChB;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,YAAY;IACZ,YAAY;IACZ,gBAAgB;IAChB,yBAAyB;IACzB,YAAY;IACZ,0CAA0C;IAC1C,kBAAkB;IAClB,cAAc;IACd,WAAW;IACX,2CAA2C;AAC/C;;AAEA;IACI,qBAAqB;IACrB,eAAe;AACnB;;AAEA;IACI,4BAA4B;IAC5B,kBAAkB;IAClB,SAAS;IACT,WAAW;AACf;;AAEA;IACI,gBAAgB;IAChB,kBAAkB;AACtB;;AAEA;IACI,qBAAqB;IACrB,kBAAkB;AACtB;;AAEA;IACI,0BAA0B;IAC1B,oBAAoB;AACxB",sourcesContent:["@charset \"UTF-8\";\r\n\r\n@import url('https://fonts.googleapis.com/css2?family=Arvo:ital,wght@0,400;0,700;1,400;1,700&display=swap');\r\n\r\n:root {\r\n    --blue: #054f77;\r\n    --off-white: #f5f5f5;\r\n    --orange: #f67828;\r\n    --title-font: 'Arvo', sans-serif;\r\n}\r\n\r\n* {\r\n    box-sizing: border-box;\r\n    margin: 0px;\r\n    padding: 0px;\r\n}\r\n\r\nhtml, body {\r\n    background: var(--blue);\r\n    font-family: Arial, Helvetica, sans-serif;\r\n    font-size: 1.2em;\r\n    line-height: 1.5em;\r\n}\r\n\r\nmain > section {\r\n    background: var(--off-white);\r\n    margin: 50px auto;\r\n    padding: 20px;\r\n    width: 680px;\r\n    border-radius: 10px;\r\n}\r\n\r\nmain > section > h1 {\r\n    text-align: center;\r\n}\r\n\r\nmain > section > form {\r\n    margin: 20px;\r\n}\r\n\r\nmain > section > form > div > p {\r\n    font-size: 1.5em;\r\n    color: var(--blue);\r\n    margin: 20px;\r\n}\r\n\r\nmain > section > form > div {\r\n    text-align: center;\r\n}\r\n\r\nmain > section > form > div > button {\r\n    height: 50px;\r\n    width: 200px;\r\n    margin: 0px 20px;\r\n    background: var(--orange);\r\n    border: none;\r\n    box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.6);\r\n    border-radius: 5px;\r\n    font-size: 1em;\r\n    color: #fff;\r\n    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.6);\r\n}\r\n\r\nmain > section > form > div > button:hover {\r\n    background: orangered;\r\n    cursor: pointer;\r\n}\r\n\r\nfooter {\r\n    background: var(--off-white);\r\n    position: absolute;\r\n    bottom: 0;\r\n    width: 100%;\r\n}\r\n\r\nfooter > p {\r\n    font-size: 0.7em;\r\n    text-align: center;\r\n}\r\n\r\nfooter > p > a {\r\n    text-decoration: none;\r\n    color: var(--blue);\r\n}\r\n\r\nfooter > p > a:hover {\r\n    text-decoration: underline;\r\n    color: var(--orange);\r\n}\r\n"],sourceRoot:""}]);const c=a}},r={};function e(t){var o=r[t];if(void 0!==o)return o.exports;var i=r[t]={id:t,exports:{}};return n[t](i,i.exports,e),i.exports}e.n=n=>{var r=n&&n.__esModule?()=>n.default:()=>n;return e.d(r,{a:r}),r},e.d=(n,r)=>{for(var t in r)e.o(r,t)&&!e.o(n,t)&&Object.defineProperty(n,t,{enumerable:!0,get:r[t]})},e.o=(n,r)=>Object.prototype.hasOwnProperty.call(n,r),e.nc=void 0;var t=e(72),o=e.n(t),i=e(825),a=e.n(i),c=e(659),s=e.n(c),u=e(56),A=e.n(u),f=e(540),p=e.n(f),l=e(113),d=e.n(l),m=e(958),v={};function g(n){return g="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},g(n)}function b(n,r){for(var e=0;e<r.length;e++){var t=r[e];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(n,y(t.key),t)}}function y(n){var r=function(n){if("object"!=g(n)||!n)return n;var r=n[Symbol.toPrimitive];if(void 0!==r){var e=r.call(n,"string");if("object"!=g(e))return e;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(n)}(n);return"symbol"==g(r)?r:r+""}v.styleTagTransform=d(),v.setAttributes=A(),v.insert=s().bind(null,"head"),v.domAPI=a(),v.insertStyleElement=p(),o()(m.A,v),m.A&&m.A.locals&&m.A.locals;var h=function(){function n(r){!function(n,r){if(!(n instanceof r))throw new TypeError("Cannot call a class as a function")}(this,n),Object.defineProperty(this,"cpfOnlyNumbers",{enumerable:!1,configyrable:!1,get:function(){return r.replace(/\D+/g,"")}})}return r=n,t=[{key:"generateDigit",value:function(n){var r=Array.from(n),e=r.length+1,t=11-r.reduce((function(n,r){return n+=Number(r)*e,e--,n}),0)%11;return t>9?"0":String(t)}}],(e=[{key:"generateCpf",value:function(){var r=this.cpfOnlyNumbers.slice(0,-2),e=n.generateDigit(r);return r+e+n.generateDigit(r+e)}},{key:"isSequence",value:function(){return this.cpfOnlyNumbers[0].repeat(this.cpfOnlyNumbers.length)===this.cpfOnlyNumbers}},{key:"valide",value:function(){return!!this.cpfOnlyNumbers&&!this.isSequence()&&11===this.cpfOnlyNumbers.length&&"string"==typeof this.cpfOnlyNumbers&&this.generateCpf()===this.cpfOnlyNumbers}}])&&b(r.prototype,e),t&&b(r,t),Object.defineProperty(r,"prototype",{writable:!1}),r;var r,e,t}();function C(n){return C="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},C(n)}function B(n,r){for(var e=0;e<r.length;e++){var t=r[e];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(n,x(t.key),t)}}function x(n){var r=function(n){if("object"!=C(n)||!n)return n;var r=n[Symbol.toPrimitive];if(void 0!==r){var e=r.call(n,"string");if("object"!=C(e))return e;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(n)}(n);return"symbol"==C(r)?r:r+""}var I=function(){return n=function n(){!function(n,r){if(!(n instanceof r))throw new TypeError("Cannot call a class as a function")}(this,n)},r=[{key:"rand",value:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1e8,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:999999999;return String(Math.round(Math.random()*(r-n)+n))}},{key:"generateNewCpf",value:function(){var n=this.rand(),r=h.generateDigit(n);return(n+r+h.generateDigit(n+r)).replace(/(\d{3})(\d{3})(\d{3})(\d{2})/,"$1.$2.$3-$4")}}],r&&B(n.prototype,r),Object.defineProperty(n,"prototype",{writable:!1}),n;var n,r}(),w=document.querySelector(".display");document.querySelector(".form").addEventListener("submit",(function(n){n.preventDefault();var r=new I;w.innerHTML=r.generateNewCpf()}))})();
//# sourceMappingURL=bundle.js.map
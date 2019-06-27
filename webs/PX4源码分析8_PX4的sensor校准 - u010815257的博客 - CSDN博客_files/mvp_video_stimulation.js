var VIDEO_STIMULATION=function(t){"use strict";Date.now||(Date.now=function(){return+new Date}),Function.prototype.bind||(Function.prototype.bind=function(t){if("function"!=typeof this)throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable");var e=Array.prototype.slice.call(arguments,1),n=this,o=function(){},i=function(){return n.apply(this instanceof o?this:t,e.concat(Array.prototype.slice.call(arguments)))};return this.prototype&&(o.prototype=this.prototype),i.prototype=new o,i});var e="MVP_VIDEO_STIMULATION",n={UID:function(){function t(t){var e,n=1,o=0;if(t)for(n=0,e=t.length-1;e>=0;e--)n=0!=(o=266338304&(n=(n<<6&268435455)+(o=t.charCodeAt(e))+(o<<14)))?n^o>>21:n;return n}return(""+t(document.referrer)+(new Date).getTime()+t(document.cookie)).substr(0,32)}(),displayShowId:[],ids:[]},o={scheme:"https:"==document.location.protocol?"https":"http",sendMessage:function(t){try{o[t.containerID].iframe.contentWindow.postMessage(t,"*")}catch(e){console.log(e)}}},i=function(t){var e=document.createElement("b");return e.innerHTML="\x3c!--[if IE "+t+"]><i></i><![endif]--\x3e",1===e.getElementsByTagName("i").length},r=function(t){var e,n=[],o=document,i=o.documentElement,r=i.doScroll,a=(r?/^loaded|^c/:/^loaded|c/).test(o.readyState);function s(t){for(a=1;t=n.shift();)t()}return o.addEventListener&&o.addEventListener("DOMContentLoaded",e=function(){o.removeEventListener("DOMContentLoaded",e,!1),s()},!1),r&&o.attachEvent("onreadystatechange",e=function(){/^c/.test(o.readyState)&&(o.detachEvent("onreadystatechange",e),s())}),t=r?function(e){self!=top?a?e():n.push(e):function(){try{i.doScroll("left")}catch(n){return setTimeout(function(){t(e)},50)}e()}()}:function(t){a?t():n.push(t)}}();function a(t,e,n){var o=this;if(window.addEventListener)return t.addEventListener(e,function(t){n.call(o,t)},!1);t.attachEvent("on"+e,function(){var t=window.event;t.target=t.srcElement,n.call(o,t)})}var s=function(t,e,n){return n=n||/\{([^\{\}]*)\}/g,t.replace(n,function(t,n){var o=n.split("."),i=e;try{for(var r in o)o.hasOwnProperty(r)&&(i=i[o[r]])}catch(a){i=t}return"string"==typeof i||"number"==typeof i?i:t})};function c(t){return"[object Array]"===Object.prototype.toString.call(t)}function l(t){return"[object Object]"===Object.prototype.toString.call(t)}function d(t){if(c(t))return 0===t.length;if(o=t,"[object String]"===Object.prototype.toString.call(o))return""===t;if(l(t)){var e=0;for(var n in t)if(Object.prototype.hasOwnProperty.call(t,n)){e++;break}return 0===e}return!1;var o}function p(t,e){if(c(t))for(var n=0;n<t.length;n++)e.call(null,t[n]);else{if(!l(t))return;for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&e.call(null,t[o])}}function f(t){if("NaN"==t||!t)return!1;var e=new Image;e.onload=e.onerror=function(){e=null},e.src=t}function u(t){this.placeholderId=t.placeholderId,this.message=t.message,this.prefix=t.containerID,this.st=null,this.ct=null,this.ut=null}u.prototype={constructor:u,popup:function(){document.createElement("info-div"),o[this.prefix].watchDone=!1;var t=document.getElementById(this.prefix+"-dialog");t&&document.body.removeChild(t),this.dialog(),this.dialog_events()},dialog_events:function(){var t=this,e=this,n=document.getElementById(this.prefix+"-video-player"),i=document.getElementById(this.prefix+"-mute-on"),r=document.getElementById(this.prefix+"-mute-off"),s=document.getElementById(this.prefix+"-pause"),c=document.getElementById(this.prefix+"-close"),l=document.getElementById(this.prefix+"-confirm"),d=document.getElementById(this.prefix+"-go-on-play"),u=document.getElementById(this.prefix+"-close-video"),m=document.getElementById(this.prefix+"-stimulate"),h=document.getElementById(this.prefix+"-details");a(document.getElementById(this.prefix+"-modal-body"),"mousedown",function(){e.ct=(new Date).getTime()}),a(document.getElementById(this.prefix+"-modal-body"),"mouseup",function(){e.ut=(new Date).getTime()}),a(i,"click",function(t){n.muted=!0,i.style.display="none",r.style.display="block"}),a(r,"click",function(t){n.muted=!1,i.style.display="block",r.style.display="none"}),a(n,"click",function(e){var i,r,a,s,c,l={};i=e.clientX,r=e.clientY,a=n.getBoundingClientRect(),s=i-a.left,c=r-a.top,l={x:s,y:c},p(o[t.prefix].adData.ads[0].clktk,function(e){f(e=e.replace("__EVENT_TIME_START__",t.ct).replace("__EVENT_TIME_END__",t.ut).replace("__OFFSET_X__",parseInt(l.x)).replace("__OFFSET_Y__",parseInt(l.y)))});var d=o[t.prefix].adData.ads[0].curl;d=d.replace("__EVENT_TIME_START__",t.ct).replace("__EVENT_TIME_END__",t.ut).replace("__OFFSET_X__",parseInt(l.x)).replace("__OFFSET_Y__",parseInt(l.y)),window.open(d,"mediav"+(new Date).getTime())}),a(s,"click",function(t){n.play(),s.style.display="none"});var g=0;a(n,"timeupdate",function(){var e=10-parseInt(n.currentTime);0!=e||0!=g||o[t.prefix].watchDone?e>0&&!o[t.prefix].watchDone&&(m.innerText="再观看 "+parseInt(e)+" 秒, 即可获得"+o[t.prefix].options.award+"."):(o[t.prefix].watchDone=!0,m.innerText="恭喜您已获取"+o[t.prefix].options.award,o[t.prefix].watchDone&&"function"==typeof o[t.prefix].options.onSuccess&&(o[t.prefix].options.onSuccess(),g++))}),a(h,"click",function(e){var i,r,a,c,l,d={};i=e.clientX,r=e.clientY,a=n.getBoundingClientRect(),c=i-a.left,l=r-a.top,d={x:c,y:l},n.pause(),s.style.display="block",p(o[t.prefix].adData.ads[0].clktk,function(e){f(e=e.replace("__EVENT_TIME_START__",t.ct).replace("__EVENT_TIME_END__",t.ut).replace("__OFFSET_X__",parseInt(d.x)).replace("__OFFSET_Y__",parseInt(d.y)))});var u=o[t.prefix].adData.ads[0].curl;u=u.replace("__EVENT_TIME_START__",t.ct).replace("__EVENT_TIME_END__",t.ut).replace("__OFFSET_X__",parseInt(d.x)).replace("__OFFSET_Y__",parseInt(d.y)),window.open(u,"mediav"+(new Date).getTime())}),a(c,"click",function(e){if(o[t.prefix].watchDone){t.closeDialog();var i=o[t.prefix].options.onClosed;"function"==typeof i&&i(o[t.prefix].watchDone)}else l.style.display="block",n.pause()}),a(d,"click",function(t){l.style.display="none",s.style.display="none",n.play()}),a(u,"click",function(e){l.style.display="none",t.closeDialog();var n=o[t.prefix].options.onClosed;"function"==typeof n&&n(o[t.prefix].watchDone)})},closeDialog:function(){this.placeholderId?(document.getElementById(this.placeholderId).innerHTML="",document.getElementById(this.placeholderId).style.display="none"):document.body.removeChild(document.getElementById(this.prefix+"-dialog")),delete n[this.prefix],n.ids.length=0},dialog:function(){var t=window.innerWidth,e=800,n=450;this.placeholderId&&(t=document.getElementById(this.placeholderId).offsetWidth);t<=850&&(n=(e=t-100)/(800/450)),this.placeholderId&&(t<=850&&(n=(e=t)/(800/450)),document.getElementById(this.placeholderId).style.height=n+"px");var i,r,a,c=s(".{prefix} info-div, .{prefix}info-div{\n\t\t\t\t\t\t\t\t display: block;\n}\n.{prefix}.popShowPrize{\n\tposition: {dialogPosition};\n\tz-index: 10000;\n\ttop: 0;\n\tright: 0;\n\tbottom: 0;\n\tleft: 0;\n\twidth: 100%;\n\theight: 100%;\n\tpadding: 0 10px;\n\tbox-sizing: border-box;\n\t/*overflow: hidden;*/\n\tbackground-color: rgba(0, 0, 0, .99);\n\tdisplay: none;\n}\n\n@-webkit-keyframes skip {\n\tfrom {\n\t\t-webkit-transform: scale(0.88);\n\t\ttransform: scale(0.88)\n\t}\n\t100% {\n\t\t-webkit-transform: scale(1.07);\n\t\ttransform: scale(1.07)\n\t}\n}\n\n@-moz-keyframes skip {\n\tfrom {\n\t\t-moz-transform: scale(0.88);\n\t\ttransform: scale(0.88)\n\t}\n\t100% {\n\t\t-moz-transform: scale(1.07);\n\t\ttransform: scale(1.07)\n\t}\n}\n\n@keyframes skip {\n\tfrom {\n\t\t-webkit-transform: scale(0.88);\n\t\t-moz-transform: scale(0.88);\n\t\ttransform: scale(0.88)\n\t}\n\t100% {\n\t\t-webkit-transform: scale(1.07);\n\t\t-moz-transform: scale(1.07);\n\t\ttransform: scale(1.07)\n\t}\n}\n@keyframes circle {\n\tfrom {\n\t\ttransform: rotate(0);\n\t}\n\tto {\n\t\ttransform: rotate(-360deg);\n\t}\n}\n\n@-webkit-keyframes circle {\n\tfrom {\n\t\t-webkit-transform: rotate(0);\n\t}\n\tto {\n\t\t-webkit-transform: rotate(-360deg);\n\t}\n}\n.{prefix}.popShowPrize .closetc {\n\tdisplay: block;\n\twidth: 30px;\n\theight: 30px;\n\ttext-align: center;\n\tposition: absolute;\n\tline-height: 30px;\n\tbackground: url({scheme}://p1.ssl.qhimg.com/t016b81b52eccf9cc79.png) no-repeat center;\n\tbackground-size: 100% 100%;\n}\n\n.{prefix}.popShowPrize .showPrize-dialog {\n    width: {VW}px;\n    height: {VH}px;\n\tposition: absolute;\n\ttop: 50%;\n\tleft: 50%;\n\tz-index: 2;\n\toverflow: visible;\n\tmargin-left: -{ML}px;\n\tmargin-top: -{MT}px;\n\t-webkit-animation: showModal .5s ease-in-out;\n\tanimation: showModal .5s ease-in-out;\n}\n\n.{prefix}.popShowPrize .{prefix}-detail{\n\twidth: {VW}px;\n\theight: {VH}px;\n\tposition: relative;\n\tbackground: black;\n}\n.{prefix}.popShowPrize .{prefix}-loading{\n\twidth: 50px;\n\theight: 50px;\n\tposition: absolute;\n\ttop: 50%;\n\tleft: 50%;\n\tmargin-left: -25px;\n\tmargin-top: -25px;\n\tbackground: url({scheme}://p2.ssl.qhimg.com/t0151ea996ec80b8000.png) no-repeat;\n\tbackground-size: 100% auto;\n\tbackground-position: center;\n\tanimation: circle 3s linear infinite;\n\t-webkit-animation: circle 3s linear infinite;\n}\n\n.{prefix}.popShowPrize #{prefix}-video-wrapper{\n\twidth: {VW}px;\n\theight: {VH}px;\n\tposition: relative;\n}\n.{prefix}.popShowPrize #{prefix}-video-player{\n\twidth: {VW}px;\n\theight: {VH}px;\n\tcursor: pointer;\n}\n\n.{prefix}.popShowPrize .close-btn {\n\tdisplay: block;\n\ttext-align: center;\n\tposition: absolute;\n\ttop: 30px;\n\tright: 30px;\n\tfont-size: 16px;\n\tz-index: 1000;\n\tcursor: pointer;\n}\n\n.{prefix}.popShowPrize .close-btn>img {\n\twidth: 100%;\n\theight: 100%;\n}\n\n.{prefix}.popShowPrize .{prefix}-mute-on {\n\twidth: 30px;\n\theight: 30px;\n\tdisplay: block;\n\tposition: absolute;\n\ttop: 15px;\n\tleft: 15px;\n\tz-index: 1000;\n\tcursor: pointer;\n\tbackground: url({scheme}://p1.ssl.qhimg.com/t018975e5827cf6c7f7.png) no-repeat;\n\tbackground-size: 80% auto;\n\tbackground-position: center;\n\tbackground-color: rgba(0,0,0,0.5);\n}\n\n.{prefix}.popShowPrize .{prefix}-mute-off {\n\twidth: 30px;\n\theight: 30px;\n\tdisplay: block;\n\tposition: absolute;\n\ttop: 15px;\n\tleft: 15px;\n\tz-index: 1000;\n\tcursor: pointer;\n\tbackground: url({scheme}://p3.ssl.qhimg.com/t01bc5ed0766d51799d.png) no-repeat;\n\tbackground-size: 80% auto;\n\tbackground-position: center;\n\tbackground-color: rgba(0,0,0,0.5);\n\tdisplay: none;\n}\n.{prefix}.popShowPrize #{prefix}-pause {\n\twidth: 50px;\n\theight: 50px;\n\tdisplay: block;\n\tposition: absolute;\n\ttop: 50%;\n\tleft: 50%;\n\tmargin-top: -25px;\n\tmargin-left: -25px;\n\tz-index: 1000;\n\tcursor: pointer;\n\tbackground: url({scheme}://p4.ssl.qhimg.com/t01336c2d39016ad3d3.png) no-repeat;\n\tbackground-size: 80% auto;\n\tbackground-position: center;\n\tbackground-color: rgba(0,0,0,0.5);\n\tdisplay: none;\n}\n\n.{prefix}.popShowPrize #{prefix}-confirm{\n\tdisplay: none;\n\twidth: 200px;\n\tbackground-color: white;\n\tborder-radius: 5px;\n \tbox-shadow: rgba(67, 90, 111, 0.3) 0px 0px 1px, rgba(67, 90, 111, 0.47) 0px 16px 24px -8px;\n\tbox-sizing: border-box;\n\tposition: absolute;\n\ttop: 33px;\n\tright: 77px;\n\tpadding: 15px;\n\tz-index: 1000;\n}\n.{prefix}.popShowPrize .{prefix}-confirm-title{\n\tdisplay: block;\n\tfont-size: 16px;\n\tfont-weight: 700;\n\tcolor: black;\n\twidth: 100%;\n\tmargin-bottom: 15px;\n}\n\n.{prefix}.popShowPrize #{prefix}-stimulate{\n\t/*width: {VW}px;*/\n\tdisplay: block;\n\tfont-size: 16px;\n\tfont-weight: 600;\n\tcolor: white;\n\tposition: absolute;\n\tleft: 0;\n\ttop: -39px;\n\ttext-shadow: 0px 0px 5px #000000, 2px 2px 10px #000000;\n}\n.{prefix}.popShowPrize #{prefix}-details{\n\t width: 66px;\n\t font-size: 16px;\n\t color: white;\n\t position: absolute;\n\t right: 30px;\n\t bottom: 30px;\n\t border-right: none;\n\t background: rgba(255, 88, 0, 1);\n\t line-height: 36px;\n\t padding: 0 15px;\n\t cursor: pointer;\n\t z-index: 100;\n\t border-radius: 5px;\n\t display: none;\n}\n.{prefix}-button{\n\t -webkit-font-smoothing: antialiased;\n\t -webkit-appearance: none;\n\t -moz-appearance: none;\n\t vertical-align: middle;\n\t text-decoration: none;\n\t border: none;\n\t outline: none;\n\t cursor: pointer;\n\t color: #425A70;\n\t background-color: white;\n\t background-image: -webkit-linear-gradient(to bottom, #FFFFFF, #F4F5F7);\n\t background-image: -moz-linear-gradient(to bottom, #FFFFFF, #F4F5F7);\n\t background-image: linear-gradient(to bottom, #FFFFFF, #F4F5F7);\n\t box-shadow: inset 0 0 0 1px rgba(67, 90, 111, 0.14), inset 0 -1px 1px 0 rgba(67, 90, 111, 0.06);\n\t display: inline-block!important;\n\t border-radius: 3px;\n\t font-weight: 500;\n\t text-align: center;\n\t padding: 5px 8px;\n\t font-size: 14px;\n}\n\n.{prefix}-button:hover{\n\t background-image: -webkit-linear-gradient(to bottom, #FAFBFB, #EAECEE);\n\t background-image: -moz-linear-gradient(to bottom, #FAFBFB, #EAECEE);\n\t background-image: linear-gradient(to bottom, #FAFBFB, #EAECEE);\n}\n\n.{prefix}-button:focus{\n\t z-index: 2;\n\t box-shadow: 0 0 0 3px rgba(16, 112, 202, 0.14), inset 0 0 0 1px rgba(67, 90, 111, 0.3), inset 0 -1px 1px 0 rgba(67, 90, 111, 0.14);\n }\n\n.{prefix}-button:active{\n\t background-image: none;\n\t background-color: rgba(16, 112, 202, 0.09);\n\t box-shadow: inset 0 0 0 1px rgba(67, 90, 111, 0.14), inset 0 1px 1px 0 rgba(67, 90, 111, 0.06);\n }\n\n.{prefix}-button-blue{\n\t background-image: -webkit-linear-gradient(to bottom, #0788DE, #116AB8);\n\t background-image: -moz-linear-gradient(to bottom, #0788DE, #116AB8);\n\t background-image: linear-gradient(to bottom, #0788DE, #116AB8);\n\t color: white;\n}\n\n.{prefix}-button-blue:hover{\n\t background-image: -webkit-linear-gradient(to bottom, #0679c5, #0f5da1);\n\t background-image: -moz-linear-gradient(to bottom, #0679c5, #0f5da1);\n\t background-image: linear-gradient(to bottom, #0679c5, #0f5da1);\n }\n\n.{prefix}-button-blue:focus{\n\t z-index: 2;\n\t box-shadow: 0 0 0 3px rgba(7, 136, 222, 0.4), inset 0 0 0 1px rgba(67, 90, 111, 0.14), inset 0 -1px 1px 0 rgba(67, 90, 111, 0.3);\n }\n\n.{prefix}-button-blue:active{\n\t background-image: -webkit-linear-gradient(to bottom, #0f5da1, #0f5da1);\n\t background-image: -moz-linear-gradient(to bottom, #0f5da1, #0f5da1);\n\t background-image: linear-gradient(to bottom, #0f5da1, #0f5da1);\n\t box-shadow: inset 0 0 0 1px rgba(67, 90, 111, 0.14), inset 0 1px 1px 0 rgba(67, 90, 111, 0.06);\n }\n\n@-webkit-keyframes showModal {\n\tfrom {\n\t\t-webkit-transform: scale(.1);\n\t\ttransform: scale(.1);\n\t}\n\tto {\n\t\t-webkit-transform: scale(1);\n\t\ttransform: scale(1);\n\t}\n}\n\n@keyframes showModal {\n\tfrom {\n\t\t-webkit-transform: scale(.1);\n\t\ttransform: scale(.1);\n\t}\n\tto {\n\t\t-webkit-transform: scale(1);\n\t\ttransform: scale(1);\n\t}\n}\n\n@keyframes scale {\n\tfrom {\n\t\ttransform: scale(0);\n\t\t-webkit-transform: scale(0);\n\t}\n\tto {\n\t\ttransform: scale(1);\n\t}\n}\n\n@-webkit-keyframes scale {\n\tfrom {\n\t\t-webkit-transform: scale(0);\n\t\ttransform: scale(0);\n\t}\n\tto {\n\t\t-webkit-transform: scale(1);\n\t\ttransform: scale(1);\n\t}\n}\n\n\n",{prefix:this.prefix,scheme:o.scheme,dialogPosition:this.placeholderId?"relative":"fixed",VW:e,VH:n,MT:n/2,ML:e/2});i=c,r=document.head||document.getElementsByTagName("head")[0],(a=document.createElement("style")).type="text/css",a.styleSheet?a.styleSheet.cssText=i:a.appendChild(document.createTextNode(i)),r.appendChild(a);var l=s('<info-div  class="{prefix} popShowPrize" id="{prefix}-dialog">\n\t<info-div class="close-btn closetc" id="{prefix}-close"></info-div>\n\t<info-div id="{prefix}-confirm">\n\t\t<info-div class="{prefix}-confirm-title">马上就可以获得奖励了</info-div>\n\t\t<info-div id="{prefix}-close-video" class="{prefix}-button" style="margin-right: 10px;">关闭视频</info-div>\n\t\t<info-div id="{prefix}-go-on-play" class="{prefix}-button {prefix}-button-blue">继续观看</info-div>\n\t</info-div>\n\t<info-div  class="showPrize-dialog modal-body" id="{prefix}-modal-body">\n\t\t<info-div  class="{prefix}-detail">\n\t\t\t<info-div class="{prefix}-loading"></info-div>\n\t\t\t<info-div id="{prefix}-video-wrapper">\n\t\t\t\t<info-div id="{prefix}-mute-on" class="{prefix}-mute-on"></info-div>\n\t\t\t\t<info-div id="{prefix}-mute-off" class="{prefix}-mute-off"></info-div>\n\t\t\t\t<info-div id="{prefix}-pause"></info-div>\n\t\t\t\t<info-div id="{prefix}-stimulate"></info-div>\n\t\t\t\t<info-div id="{prefix}-details">查看详情</info-div>\n\t\t\t\t<video id="{prefix}-video-player" autoplay preload loop></video>\n\t\t\t</info-div>\n\t\t</info-div>\n\t</info-div>\n</info-div>\n',{prefix:this.prefix,scheme:o.scheme});this.placeholderId?(document.getElementById(this.placeholderId).innerHTML=l,document.getElementById(this.prefix+"-dialog").style.display="block"):(document.body.insertAdjacentHTML("beforeend",l),document.getElementById(this.prefix+"-dialog").style.display="block"),this.st=(new Date).getTime()}};var m=setTimeout;function h(){}function g(t){if(!(this instanceof g))throw new TypeError("Promises must be constructed via new");if("function"!=typeof t)throw new TypeError("not a function");this._state=0,this._handled=!1,this._value=undefined,this._deferreds=[],v(t,this)}function x(t,e){for(;3===t._state;)t=t._value;0!==t._state?(t._handled=!0,g._immediateFn(function(){var n=1===t._state?e.onFulfilled:e.onRejected;if(null!==n){var o;try{o=n(t._value)}catch(i){return void b(e.promise,i)}y(e.promise,o)}else(1===t._state?y:b)(e.promise,t._value)})):t._deferreds.push(e)}function y(t,e){try{if(e===t)throw new TypeError("A promise cannot be resolved with itself.");if(e&&("object"==typeof e||"function"==typeof e)){var n=e.then;if(e instanceof g)return t._state=3,t._value=e,void w(t);if("function"==typeof n)return void v((o=n,i=e,function(){o.apply(i,arguments)}),t)}t._state=1,t._value=e,w(t)}catch(r){b(t,r)}var o,i}function b(t,e){t._state=2,t._value=e,w(t)}function w(t){2===t._state&&0===t._deferreds.length&&g._immediateFn(function(){t._handled||g._unhandledRejectionFn(t._value)});for(var e=0,n=t._deferreds.length;e<n;e++)x(t,t._deferreds[e]);t._deferreds=null}function v(t,e){var n=!1;try{t(function(t){n||(n=!0,y(e,t))},function(t){n||(n=!0,b(e,t))})}catch(o){if(n)return;n=!0,b(e,o)}}function _(t,e){return t(e={exports:{}},e.exports),e.exports}g.prototype["catch"]=function(t){return this.then(null,t)},g.prototype.then=function(t,e){var n=new this.constructor(h);return x(this,new function(t,e,n){this.onFulfilled="function"==typeof t?t:null,this.onRejected="function"==typeof e?e:null,this.promise=n}(t,e,n)),n},g.prototype["finally"]=function(t){var e=this.constructor;return this.then(function(n){return e.resolve(t()).then(function(){return n})},function(n){return e.resolve(t()).then(function(){return e.reject(n)})})},g.all=function(t){return new g(function(e,n){if(!t||"undefined"==typeof t.length)throw new TypeError("Promise.all accepts an array");var o=Array.prototype.slice.call(t);if(0===o.length)return e([]);var i=o.length;function r(t,a){try{if(a&&("object"==typeof a||"function"==typeof a)){var s=a.then;if("function"==typeof s)return void s.call(a,function(e){r(t,e)},n)}o[t]=a,0==--i&&e(o)}catch(c){n(c)}}for(var a=0;a<o.length;a++)r(a,o[a])})},g.resolve=function(t){return t&&"object"==typeof t&&t.constructor===g?t:new g(function(e){e(t)})},g.reject=function(t){return new g(function(e,n){n(t)})},g.race=function(t){return new g(function(e,n){for(var o=0,i=t.length;o<i;o++)t[o].then(e,n)})},g._immediateFn="function"==typeof setImmediate&&function(t){setImmediate(t)}||function(t){m(t,0)},g._unhandledRejectionFn=function(t){"undefined"!=typeof console&&console&&console.warn("Possible Unhandled Promise Rejection:",t)};var k=1e3,E=60*k,I=60*E,T=24*I,F=365.25*T,z=function(t,e){e=e||{};var n,o=typeof t;if("string"===o&&t.length>0)return function(t){if((t=String(t)).length>100)return;var e=/^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(t);if(!e)return;var n=parseFloat(e[1]);switch((e[2]||"ms").toLowerCase()){case"years":case"year":case"yrs":case"yr":case"y":return n*F;case"days":case"day":case"d":return n*T;case"hours":case"hour":case"hrs":case"hr":case"h":return n*I;case"minutes":case"minute":case"mins":case"min":case"m":return n*E;case"seconds":case"second":case"secs":case"sec":case"s":return n*k;case"milliseconds":case"millisecond":case"msecs":case"msec":case"ms":return n;default:return undefined}}(t);if("number"===o&&!1===isNaN(t))return e.long?S(n=t,T,"day")||S(n,I,"hour")||S(n,E,"minute")||S(n,k,"second")||n+" ms":function(t){if(t>=T)return Math.round(t/T)+"d";if(t>=I)return Math.round(t/I)+"h";if(t>=E)return Math.round(t/E)+"m";if(t>=k)return Math.round(t/k)+"s";return t+"ms"}(t);throw new Error("val is not a non-empty string or a valid number. val="+JSON.stringify(t))};function S(t,e,n){if(!(t<e))return t<1.5*e?Math.floor(t/e)+" "+n:Math.ceil(t/e)+" "+n+"s"}var D={"default":z,__moduleExports:z},B=D&&z||D,A=_(function(t,e){var n;function o(t){function o(){if(o.enabled){var t=o,i=+new Date,r=i-(n||i);t.diff=r,t.prev=n,t.curr=i,n=i;for(var a=new Array(arguments.length),s=0;s<a.length;s++)a[s]=arguments[s];a[0]=e.coerce(a[0]),"string"!=typeof a[0]&&a.unshift("%O");var c=0;a[0]=a[0].replace(/%([a-zA-Z%])/g,function(n,o){if("%%"===n)return n;c++;var i=e.formatters[o];if("function"==typeof i){var r=a[c];n=i.call(t,r),a.splice(c,1),c--}return n}),e.formatArgs.call(t,a),(o.log||e.log||console.log.bind(console)).apply(t,a)}}return o.namespace=t,o.enabled=e.enabled(t),o.useColors=e.useColors(),o.color=function(t){var n,o=0;for(n in t)o=(o<<5)-o+t.charCodeAt(n),o|=0;return e.colors[Math.abs(o)%e.colors.length]}(t),"function"==typeof e.init&&e.init(o),o}(e=t.exports=o.debug=o["default"]=o).coerce=function(t){return t instanceof Error?t.stack||t.message:t},e.disable=function(){e.enable("")},e.enable=function(t){e.save(t),e.names=[],e.skips=[];for(var n=("string"==typeof t?t:"").split(/[\s,]+/),o=n.length,i=0;i<o;i++)n[i]&&("-"===(t=n[i].replace(/\*/g,".*?"))[0]?e.skips.push(new RegExp("^"+t.substr(1)+"$")):e.names.push(new RegExp("^"+t+"$")))},e.enabled=function(t){var n,o;for(n=0,o=e.skips.length;n<o;n++)if(e.skips[n].test(t))return!1;for(n=0,o=e.names.length;n<o;n++)if(e.names[n].test(t))return!0;return!1},e.humanize=B,e.names=[],e.skips=[],e.formatters={}}),M={"default":A,__moduleExports:A,coerce:A.coerce,disable:A.disable,enable:A.enable,enabled:A.enabled,humanize:A.humanize,names:A.names,skips:A.skips,formatters:A.formatters},O=M&&A||M,P=_(function(t,e){function n(){var t;try{t=e.storage.debug}catch(n){}return!t&&"undefined"!=typeof process&&"env"in process&&(t=process.env.DEBUG),t}(e=t.exports=O).log=function(){return"object"==typeof console&&console.log&&Function.prototype.apply.call(console.log,console,arguments)},e.formatArgs=function(t){var n=this.useColors;if(t[0]=(n?"%c":"")+this.namespace+(n?" %c":" ")+t[0]+(n?"%c ":" ")+"+"+e.humanize(this.diff),!n)return;var o="color: "+this.color;t.splice(1,0,o,"color: inherit");var i=0,r=0;t[0].replace(/%[a-zA-Z%]/g,function(t){"%%"!==t&&"%c"===t&&(r=++i)}),t.splice(r,0,o)},e.save=function(t){try{null==t?e.storage.removeItem("debug"):e.storage.debug=t}catch(n){}},e.load=n,e.useColors=function(){if("undefined"!=typeof window&&window.process&&"renderer"===window.process.type)return!0;return"undefined"!=typeof document&&document.documentElement&&document.documentElement.style&&document.documentElement.style.WebkitAppearance||"undefined"!=typeof window&&window.console&&(window.console.firebug||window.console.exception&&window.console.table)||"undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)&&parseInt(RegExp.$1,10)>=31||"undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/)},e.storage="undefined"!=typeof chrome&&"undefined"!=typeof chrome.storage?chrome.storage.local:function(){try{return window.localStorage}catch(t){}}(),e.colors=["lightseagreen","forestgreen","goldenrod","dodgerblue","darkorchid","crimson"],e.formatters.j=function(t){try{return JSON.stringify(t)}catch(e){return"[UnexpectedJSONParseError]: "+e.message}},e.enable(n())}),j={"default":P,__moduleExports:P,log:P.log,formatArgs:P.formatArgs,save:P.save,load:P.load,useColors:P.useColors,storage:P.storage,colors:P.colors},C=(j&&P||j)("jsonp"),N=function(t,e,n){"function"==typeof e&&(n=e,e={});e||(e={});var o,i,r=e.prefix||"__jp",a=e.name||r+V++,s=e.param||"callback",c=null!=e.timeout?e.timeout:6e4,l=encodeURIComponent,d=document.getElementsByTagName("script")[0]||document.head;c&&(i=setTimeout(function(){p(),n&&n(new Error("Timeout"))},c));function p(){o.parentNode&&o.parentNode.removeChild(o),window[a]=R,i&&clearTimeout(i)}return window[a]=function(t){C("jsonp got",t),p(),n&&n(null,t)},t=(t+=(~t.indexOf("?")?"&":"?")+s+"="+l(a)).replace("?&","?"),C('jsonp req "%s"',t),(o=document.createElement("script")).src=t,d.parentNode.insertBefore(o,d),function(){window[a]&&p()}},V=0;function R(){}function L(t){var e=[];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e.push(n+"="+encodeURIComponent(t[n]));return e.join("&")}function W(){}W.prototype.next=function(t,e){var n={type:1,of:4,newf:1,impct:t,showid:o[e].showid,scheme:o.scheme},i="";return i="https"===n.scheme?"https://show-g.mediav.com/s?"+L(n):"http://show.g.mediav.com/s?"+L(n),new g(function(t,n){N(i,{param:"jsonp",timeout:5e3,prefix:e},function(e,n){e&&t({errno:1}),t(n)})})};var q=new W,H={update:function(t){var e=this;q.next(1,t).then(function(n){if(null===(r=n)||r===undefined||d(n.ads)){var i=o[t].options.onFail;if("function"==typeof i)return void i("NO_ADS")}var r;o[t].adData=n;var a=document.querySelector("#"+t+"-video-player");a.src=n.ads[0].video,e.playerControl(a,t);var s=o[t].adData.ads[0].imptk;o[t].adData.ads[0].impurl&&s.push(o[t].adData.ads[0].impurl+o[t].adData.ads[0].imparg),p(s,f)})["catch"](function(e){var n=o[t].options.onFail;"function"==typeof n&&n("AD_ERROR")})},playerControl:function(t,e){var n=document.querySelector("."+e+"-loading"),o=document.getElementById(e+"-details");a(t,"play",function(){n.style.display="none",o.style.display="block"}),a(t,"playing",function(){n.style.display="none"}),a(t,"pause",function(){n.style.display="block"}),a(t,"ended",function(){n.style.display="none"}),a(t,"waiting",function(){n.style.display="block"})}};return t.render=function(t){if(window!=window.parent&&(t.isIframe=!0),t.showid&&(n.displayShowId.join(",").indexOf(t.showid)>-1||n.displayShowId.push(t.showid),!(i(5)||i(6)||i(7)||i(8)||i(9)||n.ids.length>=1))){var s=e+"_"+(new Date).getTime();n[s]={},o[s]={},o[s].showid=t.showid,o[s].options=t,n.ids.push(s),r(function(){var e=new u({message:"",placeholderId:!!t.placeholderId&&t.placeholderId,containerID:s});t.target?a(document.querySelector(t.target),"click",function(){e.popup(),H.update(s),o[s].watchDone&&(o[s].watchDone=!1)}):(document.getElementById(t.placeholderId)&&(document.getElementById(t.placeholderId).style.display="block"),e.popup(),H.update(s),o[s].watchDone&&(o[s].watchDone=!1))})}},t.store=n,t.version="1.0",t}({});
//# sourceMappingURL=mvp_video_stimulation.js.map

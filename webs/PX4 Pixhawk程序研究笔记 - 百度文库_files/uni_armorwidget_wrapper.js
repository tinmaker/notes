var passport=passport||window.passport||{};passport._modulePool=passport._modulePool||{},passport._define=passport._define||function(e,t){passport._modulePool[e]=t&&t()},passport._getModule=passport._getModule||function(e){return passport._modulePool[e]},passport.pop=passport.pop||{},passport.pop.insertScript=passport.pop.insertScript||function(e,t){var s=document,o=s.createElement("SCRIPT");o.type="text/javascript",o.charset="UTF-8",o.readyState?o.onreadystatechange=function(){("loaded"==o.readyState||"complete"==o.readyState)&&(o.onreadystatechange=null,t&&t())}:o.onload=function(){t&&t()},o.src=e,s.getElementsByTagName("head")[0].appendChild(o)},passport.pop.initForceverify=passport.pop.initForceverify||function(e){var t,s={"http:":"http://passport.baidu.com","https:":"https://passport.baidu.com"},o=s[window.location.protocol.toLowerCase()],p={uni_forceverify:"/passApi/js/uni_forceverify_fd55741.js",lib_rsa:"/passApi/js/lib/rsa_6ce55c4.js",idcard_validate:"/passApi/js/lib/idcard_validate.min_6738f5b.js"},a="/passApi/css/uni_forceverify_2a5ae5d.css",e=e||{},r=document,e=e||{},n=("_PassUni"+(new Date).getTime(),o+a);return e.cssUrlWrapper&&(n=cssUrlWrapper.join("uni_forceverify.css")),t={show:function(){return t.loadPass(),t},loadPass:function(){var e=r.createElement("link");e.rel="stylesheet",e.type="text/css",e.href=n,e.disabled=!1,e.setAttribute("data-for","result"),r.getElementsByTagName("head")[0].appendChild(e),t.passCallback(),delete t.loadPass},passCallback:function(){t.components.length>0?passport.pop.insertScript(t.components.shift(),t.passCallback):(new passport.pop.Forceverify(e,!0,t),delete t.passCallback,delete t.components)},components:[]},t.components.push(o+p.uni_forceverify),t.components.push(o+p.lib_rsa),t.components.push(o+p.idcard_validate),e.cache&&t.loadPass(),t},passport.pop=passport.pop||{},passport.pop.insertScript||(passport.pop.insertScript=function(e,t){var s=document.createElement("SCRIPT");s.type="text/javascript",s.charset="UTF-8",s.readyState?s.onreadystatechange=function(){("loaded"===s.readyState||"complete"===s.readyState)&&(s.onreadystatechange=null,t&&t())}:s.onload=function(){t&&t()},s.src=e,document.getElementsByTagName("head")[0].appendChild(s)}),passport.pop.ArmorWidget||(passport.pop.ArmorWidget=function(e,t){if(window.passport_pop_ArmorWidget_instance)return{show:function(){}};window.passport_pop_ArmorWidget_instance=!0;var s={"http:":"http://passport.baidu.com","https:":"https://passport.baidu.com"}[window.location.protocol.toLowerCase()],o={uni_wrapper:[s,"/passApi/js/uni_wrapper.js?cdnversion=25697b"].join(""),md5:[s,"/passApi/js/lib/md5.min_8c25c62.js"].join(""),uni_armorwidget:[s,"/passApi/js/uni/armorwidget_09e8a40.js"].join("")},p=null,t=t||{};p=t.cssDir?t.cssDir+"/uni_armorwidget.css?tt="+(new Date).getTime():[s,"/passApi/css/uni_armorwidget_c2f8a55.css"].join("");var a={show:function(){a.loadStyle(),a.loadScript()},loadStyle:function(){var e=document.createElement("link");e.rel="stylesheet",e.type="text/css",e.href=p,e.disabled=!1,e.setAttribute("data-for","result"),document.getElementsByTagName("head")[0].appendChild(e),delete a.loadStyle},resouses:[o.uni_wrapper,o.md5,o.uni_armorwidget,"https://passport.baidu.com/static/passpc-base/js/ld.min.js"],loadScript:function(){a.resouses.length>0?passport.pop.insertScript(a.resouses.shift(),a.loadScript):(a.callImp(),delete a.loadScript,delete a.resouses)},callImp:function(){t.onAfterClose=function(){window.passport_pop_ArmorWidget_instance=!1},new passport.pop.ArmorWidgetImp(e,t,!0,this)}};return t.cache&&a.loadStyle(),a});
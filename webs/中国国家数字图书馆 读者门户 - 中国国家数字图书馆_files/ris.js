(function(d){d("#userLoginFlag").attr("value",false);var e=null,c,b=true,a={w:"请输入正确信息！",r:"通过信息验证！",c:"正在检测信息…",s:"请填入信息！",v:"所填信息没有经过验证，请稍后…",p:"正在提交数据…"},f=function(){if(d("#Validform_msg").length!==0){return false}c=d('<div id="Validform_msg"><div class="Validform_title">提示信息<a class="Validform_close" href="javascript:void(0);">&chi;</a></div><div class="Validform_info"></div><div class="iframe"><iframe frameborder="0" scrolling="no" height="100%" width="100%"></iframe></div></div>').appendTo("body");c.find("a.Validform_close").click(function(){c.hide();b=true;if(e){e.focus().addClass("Validform_error")}return false}).focus(function(){this.blur()});d(window).bind("scroll resize",function(){if(!b){var i=(d(window).width()-c.width())/2;var h=(d(window).height()-c.height())/2;var g=(document.documentElement.scrollTop?document.documentElement.scrollTop:document.body.scrollTop)+(h>0?h:0);c.animate({left:i,top:g},{duration:400,queue:false})}})};d.fn.checkformelements=function(h){var g=true;h.find("[datatype]").each(function(){var i=true;if((d(this).attr("minlength")==""||d(this).attr("minlength")==undefined)&&(d(this).attr("maxlength")==""||d(this).attr("maxlength")==undefined)){i=d.fn.Validform.sn.regcheckNoLimit(d(this).attr("datatype"),d(this).val())}else{if(d(this).attr("minlength")!=""&&d(this).attr("maxlength")==""){i=d.fn.Validform.sn.regcheckLengthLimit(d(this).attr("datatype"),d(this).val(),d(this).attr("minlength"),"")}else{if(d(this).attr("minlength")==""&&d(this).attr("maxlength")!=""){i=d.fn.Validform.sn.regcheckLengthLimit(d(this).attr("datatype"),d(this).val(),0,d(this).attr("maxlength"))}else{i=d.fn.Validform.sn.regcheckLengthLimit(d(this).attr("datatype"),d(this).val(),d(this).attr("minlength"),d(this).attr("maxlength"))}}}if(!i){if(d(this).attr("ignore")==="ignore"&&(d(this).val()===""||d(this).val()===d(this).attr("tip"))){i=true}else{i=false;g=false;d(this).focus()}}});return g};d.fn.Validform=function(g){var h={};g=d.extend({},d.fn.Validform.sn.defaults,g);this.each(function(){var k=d(this);var j=false;k.find("[tip]").each(function(){var m=d(this).attr("tip");var l=d(this).attr("altercss");d(this).focus(function(){if(d(this).val()==m){d(this).val("");if(l){d(this).removeClass(l)}}}).blur(function(){if(d.trim(d(this).val())===""){d(this).val(m);if(l){d(this).addClass(l)}}})});d(this).find("[datatype]").blur(function(){var l=true;l=d.fn.Validform.sn.checkform(d(this),k,g.tiptype,"hide");if(!l){return false}if(typeof(l)!="boolean"){d(this).removeClass("Validform_error");return false}if((d(this).attr("minlength")==""||d(this).attr("minlength")==undefined)&&(d(this).attr("maxlength")==""||d(this).attr("maxlength")==undefined)){l=d.fn.Validform.sn.regcheckNoLimit(d(this).attr("datatype"),d(this).val())}else{if(d(this).attr("minlength")!=""&&d(this).attr("maxlength")==""){l=d.fn.Validform.sn.regcheckLengthLimit(d(this).attr("datatype"),d(this).val(),d(this).attr("minlength"),"")}else{if(d(this).attr("minlength")==""&&d(this).attr("maxlength")!=""){l=d.fn.Validform.sn.regcheckLengthLimit(d(this).attr("datatype"),d(this).val(),0,d(this).attr("maxlength"))}else{l=d.fn.Validform.sn.regcheckLengthLimit(d(this).attr("datatype"),d(this).val(),d(this).attr("minlength"),d(this).attr("maxlength"))}}}if(!l){if(d(this).attr("ignore")==="ignore"&&(d(this).val()===""||d(this).val()===d(this).attr("tip"))){if(g.tiptype==2){d(this).parent().next().find(".Validform_checktip").removeClass().addClass("Validform_checktip").text(d(this).attr("tip"))}l=true;return true}e=d(this);d.fn.Validform.sn.showmsg(d(this).attr("errormsg")||a.w,g.tiptype,{obj:d(this)},"hide")}else{if(d(this).attr("ajaxurl")){var m=d(this);m.attr("valid",a.c);d.fn.Validform.sn.showmsg(a.c,g.tiptype,{obj:m,type:1},"hide");d.ajax({type:"POST",url:m.attr("ajaxurl"),data:"param="+d(this).val(),dataType:"text",success:function(n){if(n=="y"){m.attr("valid","true");d.fn.Validform.sn.showmsg(a.r,g.tiptype,{obj:m,type:2},"hide")}else{m.attr("valid",n);e=m;d.fn.Validform.sn.showmsg(n,g.tiptype,{obj:m})}}})}else{e=null;d.fn.Validform.sn.showmsg(a.r,g.tiptype,{obj:d(this),type:2},"hide")}}});var i=function(){var l=true;if(j){return false}k.find("[datatype]").each(function(){l=d.fn.Validform.sn.checkform(d(this),k,g.tiptype);if(!l){e.focus();return false}if(typeof(l)!="boolean"){l=true;return true}if((d(this).attr("minlength")==""||d(this).attr("minlength")==undefined)&&(d(this).attr("maxlength")==""||d(this).attr("maxlength")==undefined)){l=d.fn.Validform.sn.regcheckNoLimit(d(this).attr("datatype"),d(this).val())}else{if(d(this).attr("minlength")!=""&&d(this).attr("maxlength")==""){l=d.fn.Validform.sn.regcheckLengthLimit(d(this).attr("datatype"),d(this).val(),d(this).attr("minlength"),"")}else{if(d(this).attr("minlength")==""&&d(this).attr("maxlength")!=""){l=d.fn.Validform.sn.regcheckLengthLimit(d(this).attr("datatype"),d(this).val(),0,d(this).attr("maxlength"))}else{l=d.fn.Validform.sn.regcheckLengthLimit(d(this).attr("datatype"),d(this).val(),d(this).attr("minlength"),d(this).attr("maxlength"))}}}if(!l){if(d(this).attr("ignore")==="ignore"&&(d(this).val()===""||d(this).val()===d(this).attr("tip"))){l=true;return true}e=d(this);e.focus();d.fn.Validform.sn.showmsg(d(this).attr("errormsg")||a.w,g.tiptype,{obj:d(this)});return false}if(d(this).attr("ajaxurl")){if(d(this).attr("valid")!="true"){l=false;var m=d(this);e=m;e.focus();d.fn.Validform.sn.showmsg(m.attr("valid")||a.v,g.tiptype,{obj:m});if(!b||g.tiptype==2){setTimeout(function(){m.trigger("blur")},2000)}return false}else{d.fn.Validform.sn.showmsg(a.r,g.tiptype,{obj:d(this),type:2},"hide");l=true}}});if(l&&!j){e=null;if(g.postonce){j=true}if(g.ajaxPost){d.fn.Validform.sn.showmsg(a.p,g.tiptype,{obj:d(this)},"alwaysshow");d.ajax({type:"POST",dataType:"json",url:k.attr("action"),data:k.serialize(),success:function(m){d.fn.Validform.sn.showmsg(m.info,g.tiptype,{obj:d(this)},"alwaysshow");(g.callback)(m)}});return false}else{k.get(0).submit()}}};g.btnSubmit&&k.find(g.btnSubmit).bind("click",i);k.submit(function(){i();return false})});if(g.tiptype!=2||g.ajaxurl){f()}};d.fn.Validform.sn={defaults:{tiptype:1,ajaxPost:false},regcheckNoLimit:function(h,i){var g;switch(h){case"*":return true;case"number":return !isNaN(i);case"string":g=/^\\w+$/;return g.test(i);case"lettersOnly":g=/^[A-Za-z]+$/;return g.test(i);case"postcode":g=/^[0-9]{6}$/;return g.test(i);case"phone":g=/^1[0-9]{10}$/;return g.test(i);case"idcard":g=/^([\dX]{0}|[\dX]{18}|[\dX]{15})$/;return g.test(i);case"chinese":g=/^[\u4e00-\u9fa5]{0,}$/;return g.test(i);case"yhk":g=/^[\d]{16,19}$/;return g.test(i);case"email":g=/^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;return g.test(i);case"ip":g=/^((?:(?:25[0-5]|2[0-4]\d|[01]?\d?\d)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d?\d))$/;return g.test(i);case"positive":g=/^(([0-9]+\.[0-9]*[1-9][0-9]*)|([0-9]*[1-9][0-9]*\.[0-9]+)|([0-9]*[1-9][0-9]*))$/;return g.test(i);default:return false}},regcheckLengthLimit:function(j,k,i,g){var h;switch(j){case"*":h="[^s]{"+i+","+g+"}";return new RegExp(h).test(k);case"number":h="^\\d{"+i+","+g+"}$";return new RegExp(h).test(k);case"string":h="^\\w{"+i+","+g+"}$";return new RegExp(h).test(k);case"lettersOnly":h="^[A-Za-z]{"+i+","+g+"}$";return new RegExp(h).test(k);case"postcode":h=/^[0-9]{6}$/;return h.test(k);case"phone":h=/^1[0-9]{10}$/;return h.test(k);case"idcard":h=/^([\dX]{0}|[\dX]{18}|[\dX]{15})$/;return h.test(k);case"chinese":h="^[\u4e00-\u9fa5]{"+i+","+g+"}$";return new RegExp(h).test(k);case"yhk":h=/^[\d]{16,19}$/;return h.test(k);case"email":h=/^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;return h.test(k);case"ip":h=/^((?:(?:25[0-5]|2[0-4]\d|[01]?\d?\d)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d?\d))$/;return h.test(k);case"positive":h=/^(([0-9]+\.[0-9]*[1-9][0-9]*)|([0-9]*[1-9][0-9]*\.[0-9]+)|([0-9]*[1-9][0-9]*))$/;return h.test(k);default:return false}},showmsg:function(l,h,k,g){if(e){e.addClass("Validform_error")}if(h==1||g=="alwaysshow"){c.find(".Validform_info").text(l)}if(h==1&&g!="hide"||g=="alwaysshow"){b=false;c.find(".iframe").css("height",c.height());var j=(d(window).width()-c.width())/2;var i=(d(window).height()-c.height())/2;i=(document.documentElement.scrollTop?document.documentElement.scrollTop:document.body.scrollTop)+(i>0?i:0);c.css({left:j}).show().animate({top:i},100)}if(h==2){if(k.type){switch(k.type){case 1:k.obj.parent().find("#MsgDiv").removeClass().addClass("Validform_checktip Validform_loading").html(l);break;case 2:k.obj.parent().find("#MsgDiv").removeClass().addClass("Validform_checktip Validform_right").html(l);break}}else{k.obj.parent().find("#MsgDiv").removeClass().addClass("Validform_wrong Validform_checktip").html(l)}}},checkform:function(l,k,h,q){var m=l.attr("errormsg")||a.w;if(l.is("[datatype='radio']")){var j=l.attr("name");var p=k.find(":radio[name="+j+"]:checked").val();if(!p){e=l;this.showmsg(m,h,{obj:l},q);return false}e=null;this.showmsg(a.r,h,{obj:l,type:2},"hide");return"radio"}if(l.is("[datatype='checkbox']")){var j=l.attr("name");var o=k.find(":checkbox[name="+j+"]:checked").val();if(!o){e=l;this.showmsg(m,h,{obj:l},q);return false}e=null;this.showmsg(a.r,h,{obj:l,type:2},"hide");return"checkbox"}if(l.is("[datatype='select']")){if(!l.val()){e=l;this.showmsg(m,h,{obj:l},q);return false}e=null;this.showmsg(a.r,h,{obj:l,type:2},"hide");return"select"}var r=l.attr("tip");if((l.val()===""||l.val()===r)&&l.attr("ignore")!="ignore"){e=l;this.showmsg(l.attr("nullmsg")||a.s,h,{obj:l},q);return false}if(l.attr("recheck")){var i=k.find("input[id="+l.attr("recheck")+"]:first");var n=i.val()+"";var g=l.val()+"";if((n==g)){}else{e=l;this.showmsg(m,h,{obj:l},q);return false}}l.removeClass("Validform_error");e=null;return true}};d.Showmsg=function(g){f();d.fn.Validform.sn.showmsg(g,1)};d.Hidemsg=function(){c.hide();b=true};d.post("/system/usersomething/userSomething.action",{},function(k){if(k!=null&&k!=""){if(k.flag=="0"){var i=window.location.href;var h=i.indexOf("web/guest/reader_login");if(h>0){var g="<a class='link-regist' href='"+i+"'>[请登录]</a>，新用户？<a class='link-regist' href='"+k.newReader+"'>[免费注册]</a>";d("#userWelcome").html(g)}else{var j=i.substring(i.indexOf("//")+2);userRedirectStr=j.substring(j.indexOf("/"));userRedirectStr=userRedirectStr.replace("?","%3F");userRedirectStr=userRedirectStr.replace(/&/g,"%26");d("#userWelcome").html("<a class='link-regist' href='/web/guest/reader_login?redirect="+userRedirectStr+"'>[请登录]</a>，新用户？<a class='link-regist' href='"+k.newReader+"'>[免费注册]</a>")}}else{if(k.flag=="1"){d("#userLoginFlag").attr("value",true);d("#userWelcome").html(k.nickName+",&nbsp;<a href = 'javascript:loginOut();'>退出</a> ");d("#userMsgNum").html("("+k.msgNum+")")}}}},"json")})(jQuery);document.write('<script language="javascript" src="http://sso1.nlc.cn/sso/get-sso-ticket?rand='+Math.random()+'">');document.write("<\/script>");function loginOut(){var a=new SSOUtil();a.ssoProcess("/logout/sso-logout");return false};
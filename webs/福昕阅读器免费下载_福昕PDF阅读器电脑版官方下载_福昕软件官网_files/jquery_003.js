(function(b){var a=a||{};b.fn.czPopupLayar=function(d){var e="czPopupLayar";var c=b(this).data(e);if(typeof d=="string"&&d=="instance"){return c}var d=b.extend({},a.czPopupLayar.defaults,d||{});return b(this).each(function(){var f=new a.czPopupLayar(d);f.$element=b(this);f.init();b(this).data(e,f)})};a.czPopupLayar=function(c){this.NAME="czPopupLayar";this.VERSION="1.0";this.options=c;this.$element=null;this.$wrap=null;this.hasOpen=false};a.czPopupLayar.defaults={title:"",className:"",zIndex:90000,shade:true,shadeBgColor:"#333",shadeOpacity:"0.6",fix:true,type:"center",left:0,top:0,initCallback:null,showCallback:null,hideCallback:null};a.czPopupLayar.prototype={init:function(){this._create();this._bindEvent();this._callback("init");this.hide(true)},debug:function(c){if(typeof c=="undefined"){c=this}if(window.console&&window.console.log){window.console.log(c)}else{alert(c)}},_callback:function(c){if(typeof this.options[c+"Callback"]!="function"){return}this.options[c+"Callback"].call(this)},_create:function(){if(this.options.shade==true){this.$shade=b("<div></div>").css({position:"fixed",height:b(document).height(),width:"100%",height:"100%",top:0,left:0,zIndex:this.options.zIndex,backgroundColor:this.options.shadeBgColor});if(b.browser.msie&&b.browser.version=="6.0"&&(!b.support.style)){this.$shade.css({position:"absolute",height:b(document).height()})}this.$shade.appendTo("body").fadeTo(0,this.options.shadeOpacity).hide()}this.$element.show();this.$wrap=b("<div></div>").css({zIndex:this.options.zIndex+1});if(this.options.type=="center"&&this.options.fix==true){this.$wrap.appendTo("body");this._isIE6()?this.$wrap.css({position:"absolute"}):this.$wrap.css({position:"fixed"})}else{if(this.options.type=="dropdown"){this.$wrap.appendTo(this.$element.parent());this.$wrap.css({position:"absolute",top:this.options.top,left:this.options.left})}}this.$wrap.html('<div class="czPopupLayar '+this.options.className+'">						<div class="popup_title"><a class="close"></a><span>'+this.options.title+'</span></div>						<div class="popup_content"></div>					</div>');this.$popup=this.$wrap.find(".popup_content");this.$close=this.$wrap.find(".close");this.$element.appendTo(this.$popup)},setTitle:function(c){this.$wrap.find(".popup_title span").html(c)},_getPositionPos:function(){if(this.$wrap.width()>b(window).width()){this.leftPos=0}else{this.leftPos=(b(window).width()-this.$wrap.width())/2}if(b(window).height()>=this.$wrap.height()){if(this._isIE6()){this.topPos=b(document).scrollTop()+(b(window).height()-this.$wrap.height())/2}else{this.topPos=(b(window).height()-this.$wrap.height())/2}}else{if(this._isIE6()){this.topPos=b(document).scrollTop()}else{this.topPos=0}}if(this.$wrap.height()+b(document).scrollTop()>b(document).height()){this.topPos=b(document).height()-this.$wrap.height()}},_isIE6:function(){if(b.browser.msie&&b.browser.version=="6.0"&&(!b.support.style)){return true}return false},_positionScroll:function(){this.$wrap.stop().animate({top:this.topPos,left:this.leftPos},100)},_positionFix:function(){if(this.options.type=="center"){this._getPositionPos();this.$wrap.css({top:this.topPos,left:this.leftPos})}else{if(this.options.type=="dropdown"){offset=this.$wrap.offset();mgBottom=b(window).height()-(this.$wrap.height()+offset.top-b(document).scrollTop());if(mgBottom<0){var c=b(document).scrollTop()+mgBottom;b("html,body").animate({scrollTop:c},1000)}tableMarginRight=b(window).width()-(offset.left+this.$wrap.width());if(tableMarginRight<0){this.$wrap.animate({left:tableMarginRight},100)}}}},_bindEvent:function(){var c=this;this.$close.bind("click",function(){c.hide()});b(window).scroll(function(){if(c.options.fix==true&&c.options.type=="center"&&c.$wrap.is(":visible")==true&&c._isIE6()){c._getPositionPos();c._positionScroll()}});b(window).resize(function(){if(c.options.fix==true&&c.options.type=="center"&&c.$wrap.is(":visible")==true){c._getPositionPos();c._positionScroll()}})},hide:function(c){if(this.$wrap.is(":visible")==false){return false}if(this.options.shade==true){this.$shade.hide()}this.$wrap.hide();if(c!=true){this._callback("hide")}},show:function(c){if(this.$wrap.is(":visible")==true){return false}if(this.options.shade==true){this.$shade.show()}this.$wrap.show();this._positionFix();if(c!=true){this._callback("show")}if(c!=true&&!this.hasOpen){this.hasOpen=true}},hasOpen:function(){return this.hasOpen}}})(jQuery);
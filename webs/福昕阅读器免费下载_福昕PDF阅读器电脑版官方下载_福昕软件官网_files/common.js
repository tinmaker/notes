(function(){
    // remove layerX and layerY
    var all = $.event.props,
        len = all.length,
        res = [];
    while (len--) {
      var el = all[len];
      if (el != 'layerX' && el != 'layerY') res.push(el);
    }
    $.event.props = res;
}());

//var down_base_url = 'http://hy.download.foxit.com';
//var en_base_url   = 'http://hy.www.foxit.com';
var down_base_url = 'http://hy.download.foxit.com';
if(window.location.host=='www.foxitsoftware.cn'){
	var en_base_url   = 'https://www.foxitsoftware.cn';
	var root_zh   = '';
}else{
	var en_base_url   = 'https://dryrun.foxitsoftware.cn';
	var root_zh   = '/zh';
}

var os = getOSInfo();

String.prototype.ltrim = function() { return this.replace(/^\s*/,""); };
String.prototype.rtrim = function() { return this.replace(/\s*$/,""); };
String.prototype.trim  = function() { return this.ltrim().rtrim(); };

Array.prototype.in_array = function(e) {
	for(i=0;i<this.length;i++) {
		if(this[i] == e) return true;  
	}  
	return false;  
} 

function subscribe($_objEmail, $_objFirstName){
	
	var Email     = $_objEmail.val();
	var FirstName = $_objFirstName.val();

	if(FirstName.length == 0) {
		alert("Please type in your name.");
		$_objFirstName.focus();
		return false;
	}

	if(Email.indexOf("@") == -1 || Email.indexOf(".") == -1) {
		alert("Please type in a valid email address.");
		$_objEmail.focus();
		return false;
	}

	$.ajax({
		type : "POST",
		url  : en_base_url + "/mailinglist/quick_save.php",
		data : "name="+FirstName+"&email="+Email+"&random="+Math.random(),
		dataType:'json',
		success:function(data){
			if(data.msg != ""){
				$_objEmail.val('').blur();
				$_objFirstName.val('').blur();
				alert(data.msg);
			}
			if (data.mkt != '') {
				eval(data.mkt);
			}
		}
	});	

}

function animateAnchor(_id) {
	$targetId = $("#"+_id);
	$("body,html,document").animate({scrollTop: $targetId.offset().top}, 1000);
}

function getStateHTML (country, prefix, classname) {
    if ( typeof prefix == 'undefined' )
        prefix = '';
    if ( typeof classname == 'undefined' )
        classname = 'czProduct';

    if (country == 'United States') {
        $.get(root_zh+'/register/state.php', function(str) {
            $('#' + prefix + 'statewrap').html( str );
            $('#' + prefix + 'statewrap').find('select').attr('id', prefix + 'state');
            $('#' + prefix + 'state').czCombobox({
                maxHeight: 200,
                className: classname
            });
        });
    } else {
        var statewraphtml = $('#' + prefix + 'statewrap').html();
        if(statewraphtml.indexOf('select') != -1) {
            $('#' + prefix + 'statewrap').html('<input name="state" id="' + prefix + 'state" datatype="Require" Msg="Please enter your state" size="18" maxlength="32" type="text" value="" class="txt"/>');
        }
    }
}

function getOSInfo(){ 
    var _pf = navigator.platform; 
    var appVer = navigator.userAgent; 
    
    if( _pf == "Win32" || _pf == "Windows" || _pf == "Win64" ){ 
        if(appVer.indexOf("WOW64")>-1 || appVer.indexOf("Win64")>-1 || appVer.indexOf("x64")>-1){
            _bit = "x64"; 
        } else { 
            _bit = "x86"; 
        } 
        if(appVer.indexOf("Windows NT 6.0") > -1 || appVer.indexOf("Windows Vista") > -1){ 
            return 'Windows_vista-'+_bit; 
        }else if(appVer.indexOf("Windows NT 6.1") > -1 || appVer.indexOf("Windows 7") > -1) { 
            return 'Windows_7-'+_bit; 
        }else{ 
            try{ 
                var _winName = Array('2000','XP','2003'); 
                var _ntNum = appVer.match(/Windows NT 5.\d/i).toString(); 
                return 'Windows_' + _winName[_ntNum.replace(/Windows NT 5.(\d)/i,"$1")]+"-"+_bit; 
            }catch(e){return 'Windows';} 
        } 
    }else if(_pf == "Mac68K" || _pf == "MacPPC" || _pf == "Macintosh" ||  _pf =="MacIntel"){ 
        return "Mac-OS-X"; 
    }else if(_pf == "X11"){ 
        return "Unix"; 
    }else if(String(_pf).indexOf("Linux") > -1){
    	if(appVer.toLowerCase().indexOf("x86_64")>=0){
    		return 'Linux-64-bit';
    	}else{
    		return 'Linux-32-bit';
    	}
    }else{ 
        return "Unknown"; 
    } 
}

var base_url     = root_zh+'/downloads/require/getPackage.php?'+Math.random()+'&os='+os;
var combo_counts = 0;
function getCascadingUrl( input_id, cascading_url ) {
    var url = '';
    switch (input_id) {
        case 'platform':
            url = cascading_url;
            break;
        case 'language':
            url = getCascadingUrl('platform', cascading_url);
            url += '&platform='+getHiddenValue($('#platform'));
            break;
        case 'package_type':
            url = getCascadingUrl('language', cascading_url);
            url += '&language='+getHiddenValue($('#language'));
            break;
        case 'version':
            url = getCascadingUrl('package_type', cascading_url);
            url += '&package_type='+getHiddenValue($('#package_type'));

    }
    
    return url;
}

function initCombo( input_id, cascading_url ) {
	$('input:radio[name="product"]').bind('change' ,function() {
		product2=$(this).val();
		getInfoBaseUrl2 = root_zh+'/downloads/require/getPackage.php?'+Math.random()+'&product='+encodeURIComponent(product2)+'&language='+getHiddenValue($('#language'));
		$.getJSON(getInfoBaseUrl2, function(data) {
			setDownForm(data);	
		});
	});
    $('#' + input_id ).sexyCombo({
        initCallback: function(){
            combo_counts ++;
            if ( combo_counts > 1) 
                return;

            temp_url = getCascadingUrl( input_id, cascading_url );
            $.getJSON(temp_url, function(data) { 
                setDownForm(data);  
            });
        },
        changeCallback: function(){        	
            temp_url = getCascadingUrl( input_id, cascading_url );
            if(temp_url.indexOf('product=Foxit-Reader')!='-1' && input_id=='platform' && (this.getHiddenValue()=='Linux-32-bit' || this.getHiddenValue()=='Linux-64-bit')){
				$(".install_guide").css("display","inline-block");
			}else{			    
				$(".install_guide").css("display","none");
			}
            $.getJSON(temp_url + '&'+input_id+'='+encodeURIComponent(this.getHiddenValue()), function(data) {                
                setDownForm(data);  
            });
        },
        showListCallback : function(){fixIE($('#' + input_id), 280);}
    });
}

function initCascading(product, platform, language,special) {

    var cascading_url = base_url + '&product='+encodeURIComponent(product)+'&special='+special;
    var has_language  = $('#language').is("select"); 
    var has_platform  = $('#platform').is("select");
    combo_counts = 0;

    if ( has_platform ) {
        initCombo( 'platform', cascading_url );
    }

    if ( has_language ) {
        initCombo( 'language', cascading_url );
    }

    initCombo( 'package_type', cascading_url );
    initCombo( 'version', cascading_url );
    
    $(".cascadingForm :text").not('.need').attr('readonly','readonly');
}

function setDownForm (jsonData) {
    
    if (typeof jsonData != 'object') return;
    if (typeof jsonData.platform == 'object' && $('#platform').is("select") )
        setOptions($('#platform'), jsonData.platform);
    if (typeof jsonData.language == 'object' && $('#language').is("select") )
        setOptions($('#language'), jsonData.language);
    if (typeof jsonData.type == 'object')
    	setOptions($('#package_type'), jsonData.type);
//    	$('#package_type').val(jsonData.type['0']);
    if (typeof jsonData.version == 'object')
        setOptions($('#version'),jsonData.version);
    if (jsonData.os.length > 0 )
        $('#os').html(jsonData.os);
    if (jsonData.size.length > 0 ){
    	if($('#product').val()=='Foxit-Reader' && $('#special').val()=='1' && $('#platform').val()=='Windows' && $('#version').val()=='8.0.4.815'){
    		$('#package_size').html('51.4 MB');//显示离线包大小
    	} else if($('#product').val()=='Foxit-Reader-Plus' && $('#special').val()=='1' && $('#platform').val()=='Windows' && $('#version').val()=='8.55.0.1014'){
    		$('#package_size').html('52.1 MB');//显示离线包大小
    	} else if(($('#product').val()=='Foxit-PhantomPDF-Standard' || $('#product').val()=='Foxit-PhantomPDF-Business') && $('#special').val()=='1' && $('#platform').val()=='32-bit' && $('#version').val()=='9.0.1.1049'){
    		$('#package_size').html('218.79MB');//显示离线包大小
    	} else if(($('#product').val()=='Foxit-PhantomPDF-Standard' || $('#product').val()=='Foxit-PhantomPDF-Business') && $('#special').val()=='1' && $('#platform').val()=='32-bit' && $('#version').val()=='8.3.5.30351'){
            $('#package_size').html('214.41MB');//显示离线包大小
        } else if(($('#product').val()=='Foxit-PhantomPDF-Standard' || $('#product').val()=='Foxit-PhantomPDF-Business') && $('#special').val()=='1' && $('#platform').val()=='32-bit' && $('#version').val()=='9.1.0.5096'){
            $('#package_size').html('228.40MB');//显示离线包大小
        } else if(($('#product').val()=='Foxit-PhantomPDF-Standard' || $('#product').val()=='Foxit-PhantomPDF-Business') && $('#special').val()=='1' && $('#platform').val()=='32-bit' && $('#version').val()=='9.2.0.9297'){
            $('#package_size').html('248.71MB');//显示离线包大小
        } else{
    		$('#package_size').html(jsonData.size);
    	}
    }
    if (jsonData.release.length > 0 )
        $('#release_date').html(jsonData.release);
}

/*Get Combo Ul Li*/
function setOptions (objSelect, arrSelect) {
    objSelect.empty();
    if ( typeof arrSelect.length == 'number') {
        for (var k=0; k<arrSelect.length; k++) {
            var selected = k == 0 ? ' selected' : '';
            objSelect.append('<option value="'+arrSelect[k]+'"'+selected+'>'+arrSelect[k]+'</option>');
        } 
    } else {
        for (k in arrSelect) {
            var selected = k == 0 ? ' selected' : '';
            objSelect.append('<option value="'+k+'"'+selected+'>'+arrSelect[k]+'</option>');
        }
    }
    $.sexyCombo.changeOptions(objSelect);
}

/*Get Combo Li Value*/
function getHiddenValue(objSelect) {
    if ( objSelect.is('select') )
        var objHidden = objSelect;//.parent().find("input[type='text']");
    else
        var objHidden = objSelect;
    return encodeURIComponent(objHidden.val());
}

/*Fix IE Combo Li width*/
function fixIE(objSelect, _width) {
    if ($.browser.msie && ($.browser.version == "7.0" || $.browser.version == "6.0")) {
        
        var liWidth = 0;
        objSelect.parent().find('li').each(function() {
            liWidth = $(this).width() > liWidth ? $(this).width() : liWidth;
        });

        liWidth = liWidth > _width ? liWidth : _width;
        objSelect.parent().find('.list-wrapper').width(liWidth);

        if ($.browser.version == "6.0") {
            objSelect.parent().find('li').each(function() {
                $(this).width(liWidth);
            });
        }
        
    }
}

function getDownForm($obj, product, platform, language,special) {

	if (typeof platform == 'undefined' || platform == '') platform = '';
	if (typeof language == 'undefined' || language == '') language = '';
	if (typeof special == 'undefined' || special == '') special = '';
	
	if(product=='Foxit-Reader'){
		var sUserAgent = navigator.userAgent.toLowerCase();
        if((navigator.platform == "Win32") || (navigator.platform == "Windows")){
        	platform='Windows';
        }else if((navigator.platform == "Mac68K") || (navigator.platform == "MacPPC") || (navigator.platform == "Macintosh") || (navigator.platform == "MacIntel")){
        	platform='Mac-OS-X';
        }else if(String(navigator.platform).indexOf("Linux") > -1){
        	if(sUserAgent.indexOf("x86_64")>=0){
			    platform = 'Linux-64-bit';    
		  	}else{
				platform = 'Linux-32-bit';
			}
        }else{
        	platform='Unknown';
        }
	}
	extra_param='';
	//区分同一页面中的多个下载按钮
	if($('.hidden_download_position').val()!=''){
		extra_param='&extra_param='+$('.hidden_download_position').val();
	}
	//platform='Mac-OS-X';
	$.ajax({
		type:'get',
		url :root_zh+'/downloads/require/getFormApi.php',
		data:"product="+product+"&platform="+platform+"&language="+language+"&special="+special+extra_param,
		beforeSend: function(){
			$obj.html('<img src="'+root_zh+'/resources/images/downloads/loading.gif" border="0" width="200" height="30" style="margin:20px 120px" />');
		},
		success: function(msg){
			$obj.html(msg);
			initCascading(product, platform, language,special);
		}
	});
}

function getRegisterForm($container, product) {
    $.ajax({
        type:'get',
        url :root_zh+'/products/apiRegisterForm.php',
        data:"product="+product,
        beforeSend: function(){
            $container.html('<img src="'+root_zh+'/resources/images/downloads/loading.gif" border="0" width="200" height="30" style="margin:20px 120px" />');
        },
        success: function(msg){
            $container.html(msg);
            getRegisterFormComplete();
        }
    });
}

function getContactForm($container, product) {
    $.ajax({
        type:'get',
        url :root_zh+'/products/apiContactForm.php',
        data:"product="+product,
        beforeSend: function(){
            $container.html('<img src="'+root_zh+'/resources/images/downloads/loading.gif" border="0" width="200" height="30" style="margin:20px 120px" />');
        },
        success: function(msg){
            $container.html(msg);
            getContactFormComplete();
        }
    });
}

function getContactFormComplete() {
    return false;
}

function getRegisterFormComplete() {
    return false;
}

function setAnchorIndex(i) {
	var index = i + 1;
	if (index.toString().length == 1) 
		return '0' + index;
	return index;
}

function getChkIMG(){
	document.getElementById('imgcode').src=root_zh+"/include/code.php?"+Math.random();
}

function getChkIMG_ZH(add){
	document.getElementById('imgcode').src=""+add+"/include/code.php?"+Math.random();
}

function showDiv(){
	document.getElementById('popDiv').style.display='block';
	document.getElementById('bg').style.display='block';
}
 
function closeDiv(){
	document.getElementById('popDiv').style.display='none';
	document.getElementById('bg').style.display='none';
}
function getCookie(c_name){
	if (document.cookie.length>0){
	  c_start=document.cookie.indexOf(c_name + "=");
	  if (c_start!=-1){ 
	    c_start=c_start + c_name.length+1; 
	    c_end=document.cookie.indexOf(";",c_start);
	    if (c_end==-1) c_end=document.cookie.length;
	    return unescape(document.cookie.substring(c_start,c_end));
	  } 
	}
	return "";
}
function isLogged(){
	if(getCookie('FX_zh_login[account]')){
		return true;
	}else{
		return false;
	}
}

function submitFieldForm(obj) {
	objForm = $(obj);
	if ( ! Validator.Validate(objForm.get(0),2) )
		return false;
	if(!isLogged()){
		location.href=root_zh+'/login.php?reUrl='+encodeURIComponent(location.href);
		return false;
	}
    objForm.parents('.czPopupLayar').parent('div').hide();
    objForm.parents('.czPopupLayar').parent('div').prev('div').hide();
	objForm.submit();
}
function submitFieldFormWithoutLogin(obj) {
	objForm = $(obj);
	if ( ! Validator.Validate(objForm.get(0),2) )
		return false;

    objForm.parents('.czPopupLayar').parent('div').hide();
    objForm.parents('.czPopupLayar').parent('div').prev('div').hide();
	var browser=navigator.appName 
    var b_version=navigator.appVersion 
    var version=b_version.split(";"); 
    var trim_Version=version[1].replace(/[ ]/g,""); 
    if(!(browser=="Microsoft Internet Explorer" && trim_Version=="MSIE8.0")) //解决ie8下重复提交表单bug
        { 
        objForm.submit();
        } 
}

function showGuide(){
    var msg = "请参照以下步骤安装Foxit Reader（适用于Linux）：\n  •   使用以下命令进入下载文件所在目录（以/tmp文件夹为例）：\n      # cd /tmp \n  •   使用以下命令解压可执行文件：\n      # gzip -d 'FoxitReader_version_Setup.run.tar.gz'\n  •   使用以下命令对.tar文件进行解包：\n      # tar xvf 'FoxitReader_version_Setup.run.tar'\n  •   使用以下命令运行安装程序：\n      # ./'FoxitReader_version_Setup.run'\n  •   根据屏幕提示完成安装\n";
//    artDialog({content:msg,width:'500px','z-index':'9999'});
    alert(msg);

}
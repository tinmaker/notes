(function (config) {
    config['title']     = 'Message';
    config['fixed']     = true;
    config['okVal']     = 'Ok';
    config['cancelVal'] = 'Cancel';
    // [more..]
})(art.dialog.defaults);

artDialog.fn.shake = function (){
    var style = this.DOM.wrap[0].style,
        p = [4, 8, 4, 0, -4, -8, -4, 0],
        fx = function () {
            style.marginLeft = p.shift() + 'px';
            if (p.length <= 0) {
                style.marginLeft = 0;
                clearInterval(timerId);
            };
        };
    p = p.concat(p.concat(p));
    timerId = setInterval(fx, 13);
    return this;
};

artDialog.notice = function (options) {
    var opt = options || {},
        api, aConfig, hide, wrap, top,
        duration = 800;
        
    var config = {
        id: 'FX-Notice',
        left: '100%',
        top: '100%',
        fixed: true,
        drag: false,
        resize: false,
        follow: null,
        lock: false,
        init: function(here){
            api = this;
            aConfig = api.config;
            wrap = api.DOM.wrap;
            top = parseInt(wrap[0].style.top);
            hide = top + wrap[0].offsetHeight;
            
            wrap.css('top', hide + 'px')
                .animate({top: top + 'px'}, duration, function () {
                    opt.init && opt.init.call(api, here);
                });
        },
        close: function(here){
            wrap.animate({top: hide + 'px'}, duration, function () {
                opt.close && opt.close.call(this, here);
                aConfig.close = $.noop;
                api.close();
            });
            
            return false;
        }
    };  
    
    for (var i in opt) {
        if (config[i] === undefined) config[i] = opt[i];
    };
    
    return artDialog(config);
};


artDialog.alert = function (content, callback) {
    return artDialog({
        id: 'FX-Alert',
        icon: 'warning',
        fixed: true,
        lock: true,
        content: content,
        ok: true,
        close: callback
    });
};


artDialog.confirm = function (content, yes, no) {
    return artDialog({
        id: 'FX-Confirm',
        icon: 'question',
        fixed: true,
        lock: true,
        opacity: .1,
        content: content,
        ok: function (here) {
            return yes.call(this, here);
        },
        cancel: function (here) {
            return no && no.call(this, here);
        }
    });
};


artDialog.prompt = function (content, yes, value) {
    value = value || '';
    var input;
    
    return artDialog({
        id: 'FX-Prompt',
        icon: 'question',
        fixed: true,
        lock: true,
        opacity: .1,
        content: [
            '<div style="margin-bottom:5px;font-size:12px">',
                content,
            '</div>',
            '<div>',
                '<input value="',
                    value,
                '" style="width:18em;padding:6px 4px" />',
            '</div>'
            ].join(''),
        init: function () {
            input = this.DOM.content.find('input')[0];
            input.select();
            input.focus();
        },
        ok: function (here) {
            return yes && yes.call(this, input.value, here);
        },
        cancel: true
    });
};

artDialog.tips = function (content, time) {
    return artDialog({
        id: 'FX-Tips',
        title: false,
        cancel: false,
        fixed: true,
        lock: true
    })
    .content('<div style="padding: 0 1em;">' + content + '</div>')
    .time(time || 1);
};

artDialog.complete = function( content ) {
    return artDialog({
        id: 'FX-Complete',
        title:'完成', 
        width:"500px", 
        fixed: true,
        lock: true,
        icon: 'succeed'
    })
    .content('<div style="padding: 0 1em;text-align:left;text-indent:2em;">' + content + '</div>');
};

artDialog.complete_zh = function( content ) {
    return artDialog({
        id: 'FX-Complete',
        title:'完成', 
        width:"500px", 
        fixed: true,
        lock: true
    })
    .content('<div style="padding: 0 1em;text-align:left;text-indent:2em;"><table width="100%" border="0" align="center" cellpadding="0" cellspacing="0"><tr><td style="vertical-align:middle;"><img src="../../resources/js/libs/artDialog/skins/icons/succeed.png" style="padding-top:8px;"></td><td style="vertical-align:middle;">' + content + '</td></tr></table></div>');
};




artDialog.error = function( content ) {
    return artDialog({
        id: 'FX-Error',
        title:'错误信息', 
        width:"500px", 
        fixed: true,
        lock: true,
        icon: 'error'
    })
    .content('<div style="padding: 0 1em;text-align:left;text-indent:2em;">' + content + '</div>');
};

artDialog.error_zh = function( content ) {
    return artDialog({
        id: 'FX-Error',
        title:'错误信息', 
        width:"500px", 
        fixed: true,
        lock: true
    })
    .content('<div style="padding: 0 1em;text-align:left;text-indent:2em;"><table width="100%" border="0" align="center" cellpadding="0" cellspacing="0"><tr><td style="vertical-align:middle;"><img src="../../resources/js/libs/artDialog/skins/icons/error.png" style="padding-top:8px;"></td><td style="vertical-align:middle;">' + content + '</td></tr></table></div>');
};

artDialog.loading = function() {
    return artDialog({
        id: 'FX-Loading',
        title:'加载', 
        width:"300px", 
        fixed: true,
        lock: true,
        cancel: false,
        content: '<img src ="/resources/images/downloads/loading.gif" />'
    });
};

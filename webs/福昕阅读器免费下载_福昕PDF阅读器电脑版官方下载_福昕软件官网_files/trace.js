/* baidu */
$(document).ready(function() {
	$("a").click(function(){
		if(typeof($(this).attr("class"))!="undefined"){
			var cls = $(this).attr('class');
		}
		if(typeof($(this).attr("rev"))!="undefined"){
			var rev = $(this).attr('rev');
		}
		/* index */
		if($(this).hasClass('trace-other-freedown')){
			trace('首页免费下载','点击','http://www.foxitsoftware.cn/downloads/','1');
		}else if($(this).hasClass('trace-other-group')){
			trace('首页集团采购','点击','http://www.foxitsoftware.cn/groupbuying.php','2');
		}else if($(this).hasClass('trace-other-distributors')){
			trace('首页福昕代理商','点击','http://www.foxitsoftware.cn/company/distributors.php','3');
		}else if($(this).hasClass('trace-other-volume')){
			trace('首页批量购买','点击','http://www.foxitsoftware.cn/products/volume.php','4');
		}else if($(this).hasClass('trace-other-webinar')){
			trace('首页福昕直播间','点击','http://www.foxitsoftware.cn/products/webinar.php','5');
		}else if($(this).hasClass('trace-other-about-ns')){
			trace('首页关于福昕','点击','http://www.foxitsoftware.cn/company/','6');
		}
		
		if(typeof($(this).attr("href"))!="undefined"){
			var hef = $(this).attr("href").toLowerCase();
			/* contact */
			if(hef=='mailto:support@foxitsoftware'){
				trace('ConTact-support','点击','mailto:support@foxitsoftware','1');
			}else if(hef=='mailto:sales@foxitsoftware'){
				trace('ConTact-sales','点击','mailto:sales@foxitsoftware','2');
			}
		}
	});
});
/* download */
function gaqPush_down(label){
	trace(label,'下载',label,'1');
}
/* trace */
function trace(category,action,opt_label,opt_value){
	_hmt.push(['_trackEvent', category, action, opt_label, opt_value]);
}
/**
 * 发送百度统计
 * _hmt.push(['_trackEvent', category, action, opt_label, opt_value]);
 * 1. '_trackEvent': 固定参数，表明统计类型是时间跟踪。
 * 1. category：要监控的目标的类型名称，通常是同一组目标的名字，比如"视频"、"音乐"、"软件"、"游戏"等等。该项必选。
 * 1. action：用户跟目标交互的行为，如"播放"、"暂停"、"下载"等等。该项必选。
 * 1. opt_label：事件的一些额外信息，通常可以是歌曲的名称、软件的名称、链接的名称等等。该项可选。
 * 1. opt_value：事件的一些数值信息，比如权重、时长、价格等等，在报表中可以看到其平均值等数据。该项可选。
 */
function _baidu(category, action, opt_label){

    _hmt.push(['_trackEvent', category, action, opt_label, 1]);

}
$(function(){

	/**
	 * 导航菜单处理
	 */
    var current = $("div.mainmenu2 #current").parent();
	$("div.mainmenu li div").not(current).hover(function() {
        if ($(this).parent().parent().is("[id=current]")) {
            return true;
        }
        var _class = $(this).attr("class");
        var prefix = _class.substring(0, _class.length - 1);
        $(this).attr("class", prefix + "3");
	}, function() {
        if ($(this).parent().parent().is("[id=current]")) {
            return true;
        }
        var _class = $(this).attr("class");
        var prefix = _class.substring(0, _class.length - 1);
        $(this).attr("class", prefix + "1");
	});
	
	//-------------------------------//
	$(".sidebar ul div, .sidebar_mini ul div").hover(function() {
		if ($("#sidebar").is(".sidebar_mini")) {
			$("div.meumToolTip #tooltipContent").text($(this).attr("name"));
			$("div.meumToolTip").css({
				left : $(this).offset().left + 55,
				top : $(this).offset().top - 10
			}).fadeIn();
		}
		if ($(this).parent().parent().is("[id=current]")) {
			return true;
		}
		var _class = $(this).attr("class");
		var prefix = _class.substring(0, _class.length - 2);
		$(this).attr("class", prefix + "02");
	},
	function() {
		if ($("#sidebar").is(".sidebar_mini")) {
			$("div.meumToolTip").hide();
		}
		if ($(this).parent().parent().is("[id=current]")) {
			return true;
		}
		var _class = $(this).attr("class");
		var prefix = _class.substring(0, _class.length - 2);
		$(this).attr("class", prefix + "01");
	});

	var sidebarContent = $("div.sidebar,div.sidebar_mini");
	sidebarContentHeight();
	function sidebarContentHeight() {
		if (sidebarContent.height() < $(document).height() - 163) {
			sidebarContent.height($(document).height() - 163);
		}
		$("div.sidebar_arrow").css({
			top : $(window).height() * 0.35
		})
	}

	$(window).resize(sidebarContentHeight);

	hideSidebar();
	//左侧菜单停靠按钮处理
	$("div.sidebar_arrow").on("click",function() {
		var mini = $(this).attr("mini");
		//当前状态为停靠(折叠)
		if (mini && mini == "true") {
			$("#sidebar").addClass("sidebar").removeClass("sidebar_mini").find("div[name]").each(function(i, obj) {
				var siderbarHtml = $(this).attr("name");
				var afterImageClass = $(this).attr("afterImageClass");
				if ("" != afterImageClass) {
					siderbarHtml += '<span class="' + afterImageClass + '"></span>';
				}
				$(this).html(siderbarHtml);
			});
			$("div.conright_min_sidebar").removeClass("conright_min_sidebar").addClass("conright");
			$("div.content_sidebar").removeClass("content_sidebar_background_mini").addClass("content_sidebar_background");
			$(this).attr("mini", false).addClass("sidebar_arrow_left").removeClass("sidebar_arrow_right");
		} else {//当前状态为展开
			$("#sidebar").addClass("sidebar_mini").removeClass("sidebar").find("div[name]").each(function(i, obj) {
				$(this).empty();
			});
			$("div.conright").removeClass("conright").addClass("conright_min_sidebar");
			$("div.content_sidebar").removeClass("content_sidebar_background").addClass("content_sidebar_background_mini");
			$(this).attr("mini", true).addClass("sidebar_arrow_right").removeClass("sidebar_arrow_left");
		}
	});
	//-------------------------------//
});

function hideSidebar(){
	var arrow_div = $("#arrow_div");
	var mini = arrow_div.attr("mini");
	if(mini && mini == "true"){
		$("#sidebar").addClass("sidebar_mini").removeClass("sidebar").find("div[name]").each(function(i, obj) {
			$(this).empty();
		});
		$("div.conright").removeClass("conright").addClass("conright_min_sidebar");
		$("div.content_sidebar").removeClass("content_sidebar_background").addClass("content_sidebar_background_mini");
		arrow_div.attr("mini", true).addClass("sidebar_arrow_right").removeClass("sidebar_arrow_left");
	}
	
}

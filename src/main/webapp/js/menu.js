function init_menu(){
	$.getJSON(context_path + "/rest/menu", function(data){
		$.each(data, function(i, pm){
			var pcurrent ="";
			var scurrent="";
			if(i==0){
				$.getJSON(context_path + "/rest/menu/"+ pm.id, function(data){
					$.each(data, function(j, sm){
						if(j==0){
							scurrent = "id=sec_cur";
						}
						$("#smenu").append("<li "+ scurrent +"><a href='javascript:void(0);' narrow='up' onclick='getAction(this,"+sm.action+")'><div class='"+ sm.style +"' name='"+ sm.name +"' >"+ sm.name +"</div></li>");
						$("#smenu>li>a").css("background","url(static/images/whole_up.gif) 90% 50% no-repeat");
					});
				});
				pcurrent = "id=current";
			}
			$("#navigation").append("<li "+ pcurrent +"><a href='javascript:;' onclick='load_sec_menu(this, "+ pm.id +")'><div class="+ pm.style +">"+ pm.name +"</div></a></li>");
		});
	});
}

function load_sec_menu(obj, pid){
	$("#navigation").children("[id=current]").removeAttr("id");
	$(obj).parent().attr("id", "current");
	$("#smenu").children().remove();
	$.getJSON(context_path + "/rest/menu/"+ pid, function(data){
		$.each(data, function(j, sm){
			var scurrent = "";
			if(j==0){
				scurrent = "id=sec_cur";
			}
			$("#smenu").append("<li "+ scurrent +"><a href='javascript:void(0);' narrow='up' onclick='getAction(this,"+sm.action+")'><div class='"+ sm.style +"' name="+ sm.name +">"+ sm.name +"</div></li>");
			$("#smenu>li>a").css("background","url(static/images/whole_up.gif) 90% 50% no-repeat");
		});
	});	
	
}

function getAction(obj,action){
	changeCurMenuColor(obj);
	action;
}	

/**
 * 改变二级菜单样式
 * @param obj
 */
function changeCurMenuColor(obj){
	$("#smenu").children("[id=sec_cur]").removeAttr("id");
	if($(obj).attr("narrow")=="up"){//箭头向上时改向
		$(obj).css("background","url(static/images/whole_down.gif) 90% 50% no-repeat");
		$(obj).attr("narrow","down");
	}else{//箭头向下时改向上
		$(obj).css("background","url(static/images/whole_up.gif) 90% 50% no-repeat");
		$(obj).attr("narrow","up");
	}
	$(obj).parent().attr("id", "sec_cur");//指定当前li表示存在id=current,可在rum.css更换样式
}
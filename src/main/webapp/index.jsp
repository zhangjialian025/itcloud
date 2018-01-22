<%@ page language="java" import="java.util.*" pageEncoding="UTF-8" %>
<!DOCTYPE html>
<html>
	<head>
	<title>数据云平台</title>
	<meta http-equiv="Content-Type" content="text/html;charset=utf-8" />
	<script type="text/javascript" src="${pageContext.request.contextPath}/static/jquery/jquery-1.10.2.min.js"></script>
	<script type="text/javascript" src="${pageContext.request.contextPath}/static/js/commons.js"></script>
	<script type="text/javascript" src="${pageContext.request.contextPath}/data/jquery.dataTables.js"></script>
	
	<script type="text/javascript" src="${pageContext.request.contextPath}/bootstrap/js/bootstrap.min.js"></script>
	<script type="text/javascript" src="${pageContext.request.contextPath}/bootstrap/datepicker/js/bootstrap-datetimepicker.min.js"></script>
	<script type="text/javascript" src="${pageContext.request.contextPath}/bootstrap/datepicker/js/locales/bootstrap-datetimepicker.zh-CN.js"></script>
	
	<script type="text/javascript" src="${pageContext.request.contextPath}/js/menu.js"></script>
	<script type="text/javascript" src="${pageContext.request.contextPath}/echarts/dist/echarts.js"></script>
	<script type="text/javascript" src="${pageContext.request.contextPath}/js/setup.js"></script>
	
	<link rel="stylesheet" type="text/css" href="${pageContext.request.contextPath}/bootstrap/css/bootstrap.min.css"/>
	<link rel="stylesheet" type="text/css" href="${pageContext.request.contextPath}/bootstrap/css/bootstrap-theme.min.css"/>
	<link rel="stylesheet" type="text/css" href="${pageContext.request.contextPath}/bootstrap/datepicker/css/bootstrap-datetimepicker.min.css"/>
	
	<link rel="stylesheet" type="text/css" href="${pageContext.request.contextPath}/static/styles/rum.css"/>
	<link rel="stylesheet" type="text/css" href="${pageContext.request.contextPath}/data/jquery.dataTables.css"/>
	<link rel="stylesheet" type="text/css" href="${pageContext.request.contextPath}/echarts/css/echarts.css"/>
	
	<script type="text/javascript">
		var context_path = "${pageContext.request.contextPath}";
		$(function() {
			/* $('.date').datetimepicker({
				 language: 'zh-CN',//显示中文
	 			 format: 'yyyy-mm-dd',//显示格式
	 			 autoclose:true,
	 			 minView:'month',
			}); */
			$("#startDate").datetimepicker({
		        format: 'yyyy-mm-dd',
		        minView:'month',
		        language: 'zh-CN',
		        autoclose:true,
		        maxView: "decade",  
		        todayBtn: 'linked',
		    }).on("changeDate",function(ev){
			    $("#endDate").datetimepicker("setStartDate",ev.date);
			    $("#endDate").datetimepicker("setEndDate",new Date(ev.date-0+6*86400000));
		    });
		    $("#endDate").datetimepicker({
		        format: 'yyyy-mm-dd',//显示格式
		        minView:'month',//设置只显示到月份
		        language: 'zh-CN',//显示中文
		        autoclose:true,//选中自动关闭
		        maxView: "decade",  //显示今日按钮
    			todayBtn: true, 
		    }).on("changeDate",function(ev){
		    	$("#startDate").datetimepicker("setStartDate",new Date(ev.date-0-6*86400000));
			    $("#startDate").datetimepicker("setEndDate",ev.date);
		    });
			init_menu();		
		});
	</script>
	</head>

	<body>
		<div class="bodyq">
			<div class="header">
				<div class="logo">
					<a href="http://www.itcast.cn/" target="_blank"><img src="static/images/logo.png" height="50" align="middle" /></a>
				</div>
				<div class="mainmenu">
					<ul id="navigation">
						
					</ul>
				</div>
				<div class="mini_nav">
					<!-- 系统退出按钮 -->
					<div class="jump_button">
						<div class="button">
							<span class="user_name">退出</span>
						</div>
					</div>
					
					<!-- 帮助栏 -->
					<div class="mini_nav_fl">
						<div id="topAlert" onmouseover="this.className='alert02'" onmouseout="this.className='alert01'" class="alert01" title="告警">
							<div class="prompt" style="display: none;"></div>
						</div>
						<div onmouseover="this.className='information02'" onmouseout="this.className='information01'" class="information01" title="帮助" onclick="help()"></div>
					</div>
					<!-- 用户信息入口 -->
					<div class="jump_button">
						<div class="button">
							<span class="user_name">管理员</span>
						</div>
					</div>
				</div>
			</div>
			
			<div class="content_sidebar content_sidebar_background">
				<div id="sidebar" class="sidebar">
					<div id="arrow_div" class="sidebar_arrow sidebar_arrow_left" mini="${mini}"></div>
					<ul id="smenu">
						
					</ul>
				</div>
				<!-- <div class="meumToolTip tooltip2" style="margin:20px; float:left;display: none;position: absolute; z-index: 1100">
					<div class="icon_arrow"></div>
					<div id="tooltipContent" style="float:left;">正常</div>
				</div> -->
				<div id="conright" class="conright">
					<div id="con_header" class="main" style="width:90%;height:100px;margin-left:3%;margin-bottom:10px;">
						<div class="row">
							<div class="col-xs-1 col-sm-1 col-lg-1" style="float:right;">
								<button type="button" class="btn btn-success">查询</button>
							</div>
							
							<div class="col-xs-3 col-sm-3 col-lg-3" style="float:right;">
								<div class='input-group date' id='endDate' > 
									<span class="input-group-addon">到</span> 
					                <input type='text' class="form-control" />  
					                <span class="input-group-addon">  
					                    <span class="glyphicon glyphicon-calendar"></span>  
					                </span>  
				            	</div>
							</div>
							<!-- <div class="glyphicon glyphicon-arrow-right" style="float:right;margin-top:10px;"></div> -->
							<div class="col-xs-3 col-sm-3 col-lg-3" style="float:right;">
								<div class='input-group date' id='startDate' >  
									<span class="input-group-addon">查询日期</span>
					                <input type='text' class="form-control" />  
					                <span class="input-group-addon">
					                    <span class="glyphicon glyphicon-calendar"></span>  
					                </span>  
					            </div> 
							</div>
							
				    	</div>
					</div>
					
					<div id="main" class="main" style="width:90%;height:525px;margin-left:3%;"></div>
				</div>
			</div>
		</div>
	</body>
</html>
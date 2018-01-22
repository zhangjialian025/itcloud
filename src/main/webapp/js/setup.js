var option ={};

/**
 * 
 * @param option
 * 		参数
 * @param module
 *		加载模块
 * @param requestUrl
 * 		访问数据地址
 */
function initEchart(option,module,requestUrl){
	require.config({
		paths : {
			echarts : context_path + '/echarts/dist'
		}
	});
	require([ 'echarts', 
	          module //加载echarts图解模块
	          ], function(ec) {
		var myChart = ec.init(document.getElementById('main'), 'default');
		if(requestUrl){
			$.ajax({//数据加载过程
				type : "GET",
				url : requestUrl,
				dataType : "json",
				success : function(result) {
					option.series[0].data= result;
					myChart.setOption(option);
				}
			});
		}else{
			myChart.setOption(option);
		}
		
		console.log(option);
		
		//window.onresize = myChart.resize;
	});
	
}
function show_data(){
	
}
function show_user_dist() {
	option = {
		title : {//图表名
			text : '国内用户分布',
			x : 'center'
		},
		tooltip : {//地图指示
			trigger : 'item'
		},
		legend : {//数据声明
			orient : 'vertical',
			x : 'left',
			data : ['普通用户']
		},
		dataRange : {//数据程度变化栏
			min : 0,
			max : 1500,
			x : 'left',
			y : 'bottom',
			text : [ '高', '低' ],
			calculable : true
		},
		toolbox : {//图形操作工具栏
			show : true,//展示
			orient : 'vertical',
			x : 'right',
			y : 'center',//右边中心位置
			feature : {
				mark : {//辅助线开关
					show : true
				},
				dataView : {//数据视图
					show : true,
					readOnly : false
				},
				restore : {//还原
					show : true
				},
				saveAsImage : {//保存图片
					show : true
				}
			}
		},
		roamController : {//放大镜移动操作栏
			show : true,
			x : 'right',
			y : 'top',
			mapTypeControl : {
				'china' : true//是否可放大，左右上下移动
			}
		},
		series : [ {
			name : '普通用户',
			type : 'map',
			mapType : 'china',
			itemStyle : {
				normal : {//显示地图key值
					label : {
						show : true
					}
				},
				emphasis : {//鼠标放上去会加深
					label : {
						show : true
					}
				}
			},
			data : []
		} ]
	};
		
	/*$.ajax({
		type : "GET",
		url : context_path + "/rest/location",
		dataType : "json",
		success : function(result) {
			option.series[0].data = result
			myChart.setOption(option);
		}
	});*/

	initEchart(option,'echarts/chart/map',context_path + "/rest/location");//加载地图模块
}

function show_user_drr() {
	
	//var myChart = ec.init(document.getElementById('main'), 'macarons');

	var option = {
		title : {
			text : '用户留存'
		},
		tooltip : {
			trigger : 'axis'
		},
		legend : {
			data : [ '次日留存', '7日留存', '30日留存' ]
		},
		toolbox : {
			show : true,
			feature : {
				mark : {
					show : true
				},
				dataView : {
					show : true,
					readOnly : false
				},
				magicType : {
					show : true,
					type : [ 'line', 'bar', 'stack', 'tiled' ]
				},
				restore : {
					show : true
				},
				saveAsImage : {
					show : true
				}
			}
		},
		calculable : true,
		xAxis : [ {
			type : 'category',
			boundaryGap : false,
			data : [ '周一', '周二', '周三', '周四', '周五', '周六', '周日' ]
		} ],
		yAxis : [ {
			type : 'value',
			min : 0,
			max : 100,
			nameLocation : "end",
			axisLabel : {
				show : true,
				formatter : '{value} %'
			}
		} ],
		series : [ {
			name : '次日留存',
			type : 'line',
			stack : '总量',
			itemStyle : {
				normal : {
					areaStyle : {
						type : 'default'
					}
				}
			},
			data : [ 43, 41, 40, 31, 26, 23, 21 ]
		}, {
			name : '7日留存',
			type : 'line',
			stack : '总量',
			itemStyle : {
				normal : {
					areaStyle : {
						type : 'default'
					}
				}
			},
			data : [ 33, 31, 30, 21, 19, 17, 16 ]
		}, {
			name : '30日留存',
			type : 'line',
			stack : '总量',
			itemStyle : {
				normal : {
					areaStyle : {
						type : 'default'
					}
				}
			},
			data : [ 23, 21, 18, 17, 16, 16, 14 ]
		} ]
	};
	initEchart(option,'echarts/chart/line',null);//加载折线图模块
		
}

function show_user_long() {

	require.config({
		paths : {
			echarts : context_path + '/echarts/dist'
		}
	});

	require([ 'echarts', 'echarts/chart/bar' ], function(ec) {
		var myChart = ec.init(document.getElementById('main'), 'macarons');

		var option = {
			title : {
				text : '单日游戏时长'
			},
			tooltip : {
				trigger : 'axis'
			},
			toolbox : {
				show : true,
				feature : {
					mark : {
						show : true
					},
					dataView : {
						show : true,
						readOnly : false
					},
					magicType : {
						show : true,
						type : [ 'line', 'bar' ]
					},
					restore : {
						show : true
					},
					saveAsImage : {
						show : true
					}
				}
			},
			calculable : true,
			xAxis : [ {
				type : 'value',
				boundaryGap : [ 0, 0.01 ]
			} ],
			yAxis : [
					{
						type : 'category',
						name : '时长区间',
						data : [ '<10mins', '10~30mins', '30~60mins',
								'1~2hours', '2~4hours', '4~8hours',
								'8~12hours', '>12hours' ]
					}, {
						type : 'category',
						name : '百分比',
						axisLabel : {
							formatter : '{value} %'
						},
						data : [ 10, 10, 20, 20, 20, 10, 5, 5 ]
					} ],
			series : [ {
				type : 'bar',
				name : '玩家数量',
				itemStyle : {
					normal : {
						color : '#87CEFA'
					}
				},
				data : [ 1820, 2348, 2903, 10490, 1317, 6302, 1111, 3333 ]
			} ]
		};

		// 为echarts对象加载数据
		myChart.setOption(option);
		window.onresize = myChart.resize;
	});
}

function show_user_time() {
	require.config({
		paths : {
			echarts : context_path + '/echarts/dist'
		}
	});

	require([ 'echarts', 'echarts/chart/line' ], function(ec) {
		// 基于准备好的dom，初始化echarts图表
		var myChart = ec.init(document.getElementById('main'), 'macarons');

		var option = {
			title : {
				text : '游戏时段'
			},
			tooltip : {
				trigger : 'axis'
			},
			legend : {
				data : [ '在线玩家' ]
			},
			toolbox : {
				show : true,
				feature : {
					mark : {
						show : true
					},
					dataView : {
						show : true,
						readOnly : false
					},
					magicType : {
						show : true,
						type : [ 'line', 'bar', 'stack', 'tiled' ]
					},
					restore : {
						show : true
					},
					saveAsImage : {
						show : true
					}
				}
			},
			calculable : true,
			xAxis : [ {
				type : 'category',
				boundaryGap : false,
				axisLabel : {
					interval : 1
				// rotate : 0,
				// margin : 2
				},
				data : [ '0:00~0:59', '1:00~1:59', '2:00~2:59', '3:00~3:59',
						'4:00~4:59', '5:00~5:59', '6:00~6:59', '7:00~7:59',
						'8:00~8:59', '9:00~9:59', '10:00~10:59', '11:00~11:59',
						'12:00~12:59', '13:00~13:59', '14:00~14:59',
						'15:00~15:59', '16:00~16:59', '17:00~17:59',
						'18:00~18.59', '19:00~19:59', '20:00~20:59',
						'21:00~21:59', '22:00~22:59', '23:00~23:59' ]
			} ],
			yAxis : [ {
				type : 'value',
				name : '在线人数'
			} ],
			series : [ {
				name : '在线人数',
				type : 'line',
				stack : '总量',
				itemStyle : {
					normal : {
						color : '#87CEFA',
						areaStyle : {
							type : 'default'
						}
					}
				},
				data : [ 120, 130, 100, 130, 90, 120, 170, 230, 240, 250, 360,
						340, 350, 400, 370, 400, 470, 550, 610, 660, 600, 580,
						500, 360 ]
			} ]
		};

		myChart.setOption(option);
		window.onresize = myChart.resize;
	});
}

function show_level_dist() {
	// 路径配置
	require.config({
		paths : {
			echarts : context_path + '/echarts/dist'
		}
	});

	// 使用
	require([ 'echarts', 'echarts/chart/bar', 'echarts/chart/line', ],
			function(ec) {
				var myChart = ec.init(document.getElementById('main'),
						'macarons');

				var option = {
					title : {
						text : '玩家等级分布'
					},
					tooltip : {
						trigger : 'axis'
					},
					toolbox : {
						show : true,
						feature : {
							mark : {
								show : true
							},
							dataView : {
								show : true,
								readOnly : false
							},
							magicType : {
								show : true,
								type : [ 'line', 'bar' ]
							},
							restore : {
								show : true
							},
							saveAsImage : {
								show : true
							}
						}
					},
					calculable : true,
					legend : {
						data : [ '玩家数量', '百分比' ]
					},
					xAxis : [ {
						type : 'category',
						axisLabel : {
							interval : 0
						},
						data : [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 ]
					} ],
					yAxis : [ {
						type : 'value',
						name : '玩家数量'
					}, {
						type : 'value',
						name : '百分比',
						axisLabel : {
							formatter : '{value} %'
						}
					} ],
					series : [

							{
								name : '玩家数量',
								type : 'bar',
								data : [ 22, 31, 37, 45, 57, 73, 135, 162, 52,
										20, 9, 4 ]
							},
							{
								name : '百分比',
								type : 'line',
								yAxisIndex : 1,
								data : [ 3.4, 4.8, 5.7, 6.9, 8.8, 11.3, 20.9,
										25, 8, 3.1, 1.4, 0.6 ]
							} ]
				};

				// 为echarts对象加载数据
				myChart.setOption(option);
				window.onresize = myChart.resize;
			});
}
/**
 * 渠道分析
 */
function show_user_resource(){
	option = {
	    tooltip : {
	        trigger: 'axis',
	        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
	            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
	        }
	    },
	    legend: {
	        data:['直接访问', '邮件营销','联盟广告','视频广告','搜索引擎']
	    },
	    toolbox: {
	        show : true,
	        feature : {
	            mark : {show: true},
	            dataView : {show: true, readOnly: false},
	            magicType : {show: true, type: ['line', 'bar', 'stack', 'tiled']},
	            restore : {show: true},
	            saveAsImage : {show: true}
	        }
	    },
	    calculable : true,
	    xAxis : [
	        {
	            type : 'value'
	        }
	    ],
	    yAxis : [
	        {
	            type : 'category',
	            data : ['周一','周二','周三','周四','周五','周六','周日']
	        }
	    ],
	    series : [
	        {
	            name:'直接访问',
	            type:'bar',
	            stack: '总量',
	            itemStyle : { normal: {label : {show: true, position: 'insideRight'}}},
	            data:[320, 302, 301, 334, 390, 330, 320]
	        },
	        {
	            name:'邮件营销',
	            type:'bar',
	            stack: '总量',
	            itemStyle : { normal: {label : {show: true, position: 'insideRight'}}},
	            data:[120, 132, 101, 134, 90, 230, 210]
	        },
	        {
	            name:'联盟广告',
	            type:'bar',
	            stack: '总量',
	            itemStyle : { normal: {label : {show: true, position: 'insideRight'}}},
	            data:[220, 182, 191, 234, 290, 330, 310]
	        },
	        {
	            name:'视频广告',
	            type:'bar',
	            stack: '总量',
	            itemStyle : { normal: {label : {show: true, position: 'insideRight'}}},
	            data:[150, 212, 201, 154, 190, 330, 410]
	        },
	        {
	            name:'搜索引擎',
	            type:'bar',
	            stack: '总量',
	            itemStyle : { normal: {label : {show: true, position: 'insideRight'}}},
	            data:[820, 832, 901, 934, 1290, 1330, 1320]
	        }
	    ]
	};
		                    
	initEchart(option,"echarts/chart/bar",null);
		                    
}
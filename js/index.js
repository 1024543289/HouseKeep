$(function(){
	//首页跳转
	$("#index").click(function(){
		var url = $(this).attr("url");
		$("#wrapper").load(url);
		$("ul.left_nav > li").removeClass("current");
	})
	// 为导航添加事件
	$("ul.left_nav").on("click","li",function(){
		//点击后子页面进行跳转
		var url = $(this).attr("url");
		$("#wrapper").load(url);
		//点击后更换样式
		$("ul.left_nav > li").removeClass("current");
		$(this).addClass("current");
	})

	// 模拟点击第一个li
	$("ul.left_nav > li:nth-child(1)").trigger("click");
	
});
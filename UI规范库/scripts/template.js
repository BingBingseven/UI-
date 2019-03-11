$(function(){
	//slide滑块
	var sliderTrack = $('#sliderTrack'),
        sliderHandler = $('#sliderHandler'),
        sliderValue = $('#sliderValue'),
        mouseMoveFlag = false,
        totalLen = $('#sliderInner').width(),
        startLeft = 0,
        startX = 0;
    sliderHandler
    .on('mousedown', function (e) {
    	mouseMoveFlag = true;
        startLeft = parseInt(sliderHandler.css('left')) * totalLen / 100;
        startX = e.clientX;
    })
    .on('mousemove', function(e){
    	if(mouseMoveFlag){
    		var dist = startLeft + e.clientX - startX,percent;
            dist = dist < 0 ? 0 : dist > totalLen ? totalLen : dist;
            percent =  parseInt(dist / totalLen * 100);
            sliderTrack.css('width', percent + '%');
            sliderHandler.css('left', percent + '%');
            sliderValue.text(percent);
            e.preventDefault();
    	}
    })
    .on('mouseup',function(e){
    	mouseMoveFlag = false;
    })
    .on('touchstart', function (e) {
        startLeft = parseInt(sliderHandler.css('left')) * totalLen / 100;
        startX = e.changedTouches[0].clientX;
    })
    .on('touchmove', function(e){
        var dist = startLeft + e.changedTouches[0].clientX - startX,
            percent;
        dist = dist < 0 ? 0 : dist > totalLen ? totalLen : dist;
        percent =  parseInt(dist / totalLen * 100);
        sliderTrack.css('width', percent + '%');
        sliderHandler.css('left', percent + '%');
        sliderValue.text(percent);

        e.preventDefault();
    });
    $("body").on("mouseup",function(e){
    	mouseMoveFlag = false;
    });
    $("body").on("mousemove",function(e){
    	if(mouseMoveFlag){
    		var dist = startLeft + e.clientX - startX,percent;
            dist = dist < 0 ? 0 : dist > totalLen ? totalLen : dist;
            percent =  parseInt(dist / totalLen * 100);
            sliderTrack.css('width', percent + '%');
            sliderHandler.css('left', percent + '%');
            sliderValue.text(percent);
            e.preventDefault();
    	}
    });
    //silde滑块结束
     
    //tab导航栏切换
	$('#tab1').tab({defaultIndex:0,activeClass:"tab-green"});
	$(".weui_navbar_item.topFix").click(function(){
		var panelID = $(this).attr('panelID');
		$("#"+panelID).show();
		$(".weui-tab_bd-item").not($("#"+panelID)).hide();
	});
	$(".weui_navbar_item").eq(0).trigger('click');
	//导航栏切换结束
	
	//卡片宽度适应大屏
	if($(".cardList .cardTopimg").width() < $(".cardImg").width()){
		$(".cardList .cardTopimg").css("border-radius","0px");
	}else{
		
	}
	//卡片宽度适应大屏结束
	
	//控制下拉卡片标题文字的宽度
	$(".weui-flex-item .title").width($(window).width() - 150 + "px");
	window.onresize = function(){
		//当屏幕宽度实时变化时，以下组件的样式需要发生变化
		//1.卡片标题的宽度
		$(".weui-flex-item .title").width($(window).width() - 150 + "px");
		//2.屏宽大于600时，底部弹框改为在页面中间显示，距离顶部150px
		if($(window).width() > 600){
			$(".popKu").css({
				'bottom':'auto',
				'top':'150px',
				'left':'calc(50% - 300px)',
				'max-width':'580px',
				'border-radius':'10px'
			})
		}else{
			$(".popKu").css({
				'bottom':'0px',
				'top':'auto',
				'left':'0px',
				'max-width':'none',
				'border-radius':'10px 10px 0 0'
			})
		}
	}
	
	//九宫格切换
	$(".weui_grids.changeStatu .weui_grid").click(function(){
		$(this).toggleClass('checkedLa');
	})
	
	//控制加号和减号的简单加减功能
	$(".weui_cell.addFunc .weui_cell_ft p").click(function(){
		if($(this).html() == '-' && $(this).next().html() > 1){
			$(this).next().html(parseInt($(this).next().html()) - 1);
		}else{
			$(this).prev().html(parseInt($(this).prev().html()) + 1);
		}
	})
	
	
});   

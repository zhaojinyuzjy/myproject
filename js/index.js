
//5轮播图
var index=0;
var timer=setInterval(autoplay,2000);
function autoplay(){
	index++;
	if(index==$(".banner ol li").length){
		index=0;
	}
	$(".banner ol li").eq(index).addClass("act").siblings().removeClass("act")
	$(".banner ul li").eq(index).fadeIn(1000).siblings().fadeOut(1000)
}


//6楼层效果
//滚动滚动条  出现楼梯号
var flag=true;////值为true时   可以操作滚动条
$(window).scroll(function(){
	var sTop=$("body,html").scrollTop();
	//console.log(sTop)
	if(sTop>500){
		$(".loutiNav").css({
			"display":"block",
			"position":"fixed",
			"left":0,
			"top":"200px"
		})
	}else{
		$(".loutiNav").css("display","none")
	}
	//遍历所有楼层 找到满足条件的楼层
	//条件 ： 绝对值（当前楼层的top值-页面滚走的距离） < 楼层高度的一半
	if(flag){
		$floor=$(".louti").filter(function(){
		    return Math.abs($(this).offset().top-sTop)<$(this).height()/2;
	    })
		 //根据楼层的下标找到对应的楼层号   操作楼层号的高亮显示
		if($floor.index()!=-1){
			$(".loutiNav li:not(:first)").eq($floor.index())
		                             .addClass("current")
		                             .siblings()
		                             .removeClass("current")
		}
		
	}
	
})
//点击知我首页   回到顶部
$(".loutiNav li").eq(0).click(function(){
	$("html,body").animate({scrollTop:0},2000)
})
////获取当前楼层号对应楼层的offsetTop值  $(this).index()
$(".loutiNav li:not(:first)").click(function(){
	flag=false;
	//获取每一个楼层的top值
	var divsTop=$(".louti").eq($(this).index()-1).offset().top;
	//设置页面滚走的距离为offsetTop值
	$("html,body").animate({scrollTop:divsTop},2000,function(){
		flag=true;
	})
	//对应的楼层号高亮显示
	$(this).addClass("current")
	       .siblings()
	       .removeClass("current")
})

//8倒计时
  var now=new Date();
  var d=new Date("2018-4-21 24:00:00");
  var t=diff(now,d);
  function showTime(){
  	//剩余的小时数
  	var hour=parseInt(t/3600);
  	//剩余的分钟数
  	var minute=parseInt((t-hour*3600)/60);
  	//剩余的秒数
  	var seconds=parseInt(t-hour*3600-minute*60);
  	$(".toutiao1 h4").html("距团购结束："+hour+"小时"+minute+"分"+seconds+"秒");
  	$(".new .newp3 span").html("距团购结束："+hour+"小时"+minute+"分"+seconds+"秒");
  }
  var timer1=setInterval(function(){
  	t--;
  	if(t<0){
  		$(".toutiao1 h4").html("商品过期了");
  		$(".new .newp3 span").html("商品过期了")
  		clearInterval(timer1);
  	}else{
  		showTime();
  	}
  },1000)
  
//9划过新品的图片  p显示
$(".new dl dt").hover(function(){
	$(this).find("p").css("display","block")
},function(){
	$(this).find("p").css("display","none")
})

//10品牌团  选项卡
$(".ul-biaoti li").hover(function(){
	$(this).addClass("active")
	        .siblings().removeClass("active")
	//对应的图片组出现
	$(".pinImg ol").eq($(this).index()).css("z-index",10)
},function(){
	$(".pinImg ol").eq($(this).index()).css("z-index",0)
})
//点击左右箭头    标题切换   对应的图片组进行切换 
var index1=0;
$(".pinImg-big .span2").click(function(){
	index1++;
	if(index1==$(".pinImg-big ul li").length){
		index1=0;
	}
	$(".pinImg-big ul li").eq(index1).css({
		"opacity":1,	
	}).siblings().css("opacity",0)
	//标题
	$(".ul-biaoti li").eq(index1).addClass("active")
	                  .siblings().removeClass("active")
	//对应的图片组
	$(".pinImg ol").eq(index1).css("z-index",11)
	                          .siblings()
	                          .css("z-index",0)
	
})
$(".pinImg-big .span1").click(function(){
	index1--;
	if(index1<=-1){
		index1=3;
	}
	$(".pinImg-big ul li").eq(index1).css({
		"opacity":1,	
	}).siblings().css("opacity",0)
	//标题
	$(".ul-biaoti li").eq(index1).addClass("active")
	                  .siblings().removeClass("active")
	//对应的图片组
	$(".pinImg ol").eq(index1).css("z-index",13)
	                          .siblings()
	                          .css("z-index",0)
})

//12.点击加入购物车 
//今日头条
$(".toutiao1 .p2 i").click(addShop)
//今日新品
$(".newp2 span").click(addShop)

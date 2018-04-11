//海淘
$(".header-nav-cont ul li").eq(2).mouseenter(function(){
	$(this).css("background-image","url(../images/haitao2.gif)")
}).mouseleave(function(){
	$(this).css("background-image","url(../images/haitao1.gif)")
})
//加入购物车
$(".main-top dl dd h6 span").click(addShop)
$(".sellAll dd p i").click(addShop)
$(".mainR .R1 p i").click(addShop)

//放大镜
$(".smallList li").mouseenter(function(){
	var index=$(this).index();
	//当前图片显示  其余隐藏
	$(".small img").eq(index).show().siblings("img").hide();
	$(".big img").eq(index).show().siblings().hide();
})
$(".small").mouseenter(function(){
	$(".mask").css("display","block");
	$(".big").css("display","block");
}).mouseleave(function(){
	$(".mask").css("display","none");
	$(".big").css("display","none");
})
$(".small").mousemove(function(e){
	var e=e||event;
	//mask在小图区移动的距离
	var x=e.pageX-$(this).offset().left-$(".mask").width()/2;
	var y=e.pageY-$(this).offset().top-$(".mask").height()/2;
	//mask在小图区的最大移动距离
	var maxL=$(this).width()-$(".mask").width();
	var maxT=$(this).height()-$(".mask").height();
	x=Math.min(maxL,Math.max(0,x));
	y=Math.min(maxT,Math.max(0,y));
	$(".mask").css({
		left:x,
		top:y
	})
	//获取大图的left和top
	//mask在小图区右移   大图在可视区左移
	var bigL=x*$(".big img").width()/$(".small").width();
	var bigT=y*$(".big img").height()/$(".small").height();
	$(".big img").css({
		left:-bigL,
		top:-bigT
	})	
})


//划过特卖图片  透明度改变
$(".sellAll").find("img").hover(function(){
	$(this).css("opacity","1")
},function(){
	$(this).css("opacity","0.4")
})

//吸顶$(".mainR .R1 p")
$(window).scroll(function(){
	var sTop=$(document).scrollTop();
	if(sTop>$(".mainL .L1 p").eq(0).offset().top){
		$(".mainR .R1 p").css({
			"position":"fixed",
			"top":"0"
		})
	}else{
		$(".mainR .R1 p").css({
			"position":"static"
			
		})
	}
})

$(".pnav ul li b").html(sum);
//点击+- 数字相应加减
var index2=1;
$(".main-top dl dd p span em").eq(2).click(function(){
	index2++;
	$(this).prev().html(index2)
})
$(".main-top dl dd p span em").eq(0).click(function(){
	if(index2<=1){
		index2=1;
	}
	index2--;
	$(this).next().html(index2)
	
})
//划过商品参数里的图  改变他的宽高


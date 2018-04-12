/*公共js*/

//1主菜单
$(".ul-right>li").hover(function(){
	$(this).css({
		"background-color":"#fff"
	})
	$(this).find("ul").slideDown();
	$(this).find("img").slideDown();
},function(){
	$(this).css("background-color","#f2f2f2")
	$(this).find("ul").slideUp();
	$(this).find("img").slideUp();
})
$(".ul-right #ll1").hover(function(){
	$(this).css({
		"background": "url('./images/jiantou2.jpg') no-repeat 70px center",
		"background-color":"#fff"
	})
},function(){
	$(this).css({
		"background": "url('./images/jiantou.jpg') no-repeat 70px center",
		"background-color":"#f2f2f2"
	})
})
	


//2点击搜索
$(".header-search input").eq(1).click(function(){
	var txt=$(".header-search input").eq(0).val();
	location.href="http://www.zhiwo.com/product/search?keyword="+txt+"&search='搜索'"
})


//3heaer-top-nav  菜单
$(".header-nav-cont ul li:not(:eq(2))").hover(function(){
	$(this).addClass("visit").siblings().removeClass("visit")
})
$(".header-nav-cont ul li").eq(1).mouseenter(function(){
	$(".li_list").css("display","block")
}).mouseleave(function(){
	$(".li_list").css("display","none")
	$(this).removeClass("visit")
})
$(".header-nav-cont ul li").eq(2).mouseenter(function(){
	$(this).css("background-image","url(images/haitao2.gif)")
}).mouseleave(function(){
	$(this).css("background-image","url(images/haitao1.gif)")
})
//点击二级菜单  
$(".li_list dd").click(function(){
	location.href="http://www.zhiwo.com/products/c24";
})



//4划过小logo  显示a
$(".header-nav-cont ol li").hover(function(){
	$(this).find("a").stop().show(1000)
	             
},function(){
	$(this).find("a").stop().hide(1000)
})

//11.右侧导航
$(".pnav li").hover(function(){
	$(this).addClass("curr")
	       .siblings()
	       .removeClass("curr")
	$(this).find("p").css("display","block")
},function(){
	$(this) .removeClass("curr")
	$(this).find("p").css("display","none")
})
$(".pnav li").eq(3).mouseenter(function(){
	$(this).find("h4").children().show(1000)
}).mouseleave(function(){
	$(this).find("h4").children().hide(1000)
})
$(".pnav li").eq(4).click(function(){
	$("html,body").animate({scrollTop:0},2000)
})

//加入购物车
var sum = 0
function addShop(){
	//1 定义三点坐标  商品的起始点  结束点  最高点
		var startPoint = {
 			x : $(this).offset().left + $(this).width()/2,
 			y : $(this).offset().top 
		}
		var endPoint = {
 			x : $(".shopcart").offset().left + $(".shopcart").width()/2,
 			y :$(".shopcart").offset().top
		}
		var topPoint = {
 			x : endPoint.x-100,
 			y : endPoint.y-80
		}
	//2 根据三点坐标确定抛物线方程的三个系数 a  b   c
		//根据三点坐标确定抛物线的系数
		var a = ((startPoint.y - endPoint.y) * (startPoint.x - topPoint.x) - (startPoint.y - topPoint.y) * (startPoint.x - endPoint.x)) / ((startPoint.x * startPoint.x - endPoint.x * endPoint.x) * (startPoint.x - topPoint.x)-(startPoint.x * startPoint.x - topPoint.x * topPoint.x) * (startPoint.x - endPoint.x));  
				
		var b = ((endPoint.y - startPoint.y) - a * (endPoint.x * endPoint.x - startPoint.x * startPoint.x)) / (endPoint.x - startPoint.x);  
				
		var c = startPoint.y - a * startPoint.x * startPoint.x - b * startPoint.x;
       //3 创建商品
		var good = $("<div>");
		good.addClass("good");
		$(this).append(good);
		var x = startPoint.x;
		var y = startPoint.y;
		good.css({
			left:x,
			top:y
		})
		//4 启动定时器 控制商品运动  操作left和top   left是抛物线某点的x  top是抛物线某点的y
		var timer2 = setInterval(function(){
			if( x < endPoint.x ){
				x = x + 5;
				y = a*x*x + b*x + c;
				good.css({
					left:x,
					top:y,
					zIndex:999
				})
			}else{
				clearInterval(timer2);
				good.remove();
			    sum=parseInt($(".pnav b").html());
				var m = parseInt($(".numm").html())
				if(m){
					$(".pnav b").html(sum + m )
				}else{
					sum++;
					$(".pnav b").html(sum)
				}
				
			}
		},20)

}
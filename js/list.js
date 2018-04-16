

//海淘
$(".header-nav-cont ul li").eq(2).mouseenter(function(){
	$(this).css("background-image","url(../images/haitao2.gif)")
}).mouseleave(function(){
	$(this).css("background-image","url(../images/haitao1.gif)")
})

//倒计时
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
  	$(".new .newp3 span").html("距团购结束："+hour+"小时"+minute+"分"+seconds+"秒");
  }
  var timer1=setInterval(function(){
  	t--;
  	if(t<0){
  		$(".new .newp3 span").html("商品过期了")
  		clearInterval(timer1);
  	}else{
  		showTime();
  	}
  },1000)

$(".xinpin .new dl dt").find("img").hover(function(){
	$(this).css("opacity","1")
},function(){
	$(this).css("opacity","0.4")
})


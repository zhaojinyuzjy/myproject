$("input").focus(function(){
	$(this).css({
		"border":"2px solid #00C8FF",
	})
}).blur(function(){
	$(this).css(
		"border",""
	)
})

//表单验证
$(".login form").submit(function(){
	if(flagPhone && flagPwd  && flagYZ){
		return true;
	}else{
		return false;
	}
})
//验证手机号
//失去焦点时  取cookie  取cookie中的手机号   根据手机号判断 密码是否正确  
var flagPhone=null;
$(".login form p input").eq(0).blur(function(){
	var str=$(this).val();
	var reg=/^[1-9]\d{10}$/;
	if(reg.test(str)){
		var user=getCookie("user");
		userJson=JSON.parse(user);
		for(var i=0;i<userJson.length;i++){
			uphone=userJson[i].phone;
			if($(this).val()==uphone){
				$("#s1").html("账号存在");
			    flagPhone=true;
			}else{
				$("#s1").html("账号不存在");
			    flagPhone=false;
			}
		}
		//upwd=userJson.pwd;	
	}else{
		$("#s1").html("请输入合法的手机号");
		flagPhone=false;
	}
})
//验证密码
var flagPwd=null;
$(".login form p input").eq(1).blur(function(){
	var str=$(this).val();
	var reg=/^\w{6,16}$/;
	if(reg.test(str)&& flagPhone){
		var user=getCookie("user");
		userJson=JSON.parse(user);
		for(var i=0;i<userJson.length;i++){
			uphone=userJson[i].phone;
			if($(".login form p input").eq(0).val()==uphone){
				upwd=userJson[i].pwd;
				if($(this).val()==upwd){
					$("#s2").html("密码正确");
				    flagPwd=true;
				}else{
					$("#s2").html("密码错误");
				    flagPwd=false;
				}
			}else{
				$("#s1").html("账号不存在");
			    flagPhone=false;
			}
		}	
	}else{
		$("#s2").html("密码与账号不一致");
		flagPwd=false;
	}
})



//验证码
$(".login form p input").eq(2).next().html(yanzheng());
function yanzheng(){
 	var str="";
 	//  从 48--122 之间   ，随机获取一个整数  ，
//  如果 这个随机整数在 58--64 或  91--96之间，说明不是数字或字母， 就重新抽取一个新的code值
//  如果这个随机整数 不在58--64 或  91--96之间，说明是数字或字母，转成对应字符  进行字符串拼接
 	for(var i=0;i<6;i++){
		var code=rand(48,122);
		if(code>=58&&code<=64 ||code>=91&&code<=96){
			i--;
		}else{
			str+=String.fromCharCode(code);
		}
	}
 	return str;
}
$(".login .click").click(function(){
	$(".login form p input").eq(2).val(" ");
	$(this).prev().html(yanzheng())
})
//验证码框失去焦点验证
var flagYZ=null;
$(".login form p input").eq(2).blur(function(){
	var str=$(this).val();
	if(str==$(this).next().html()){
		$("#s4").html("ok");
		flagYZ=true;
	}else{
		$("#s4").html("验证码有误");
		flagYZ=false;
	}
})
//点击忘记密码
$("#forget").click(function(){
	location.href="http://www.zhiwo.com/account/repwd";
})

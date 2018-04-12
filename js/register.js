$("input").focus(function(){
	$(this).css({
		"border":"3px solid #00C8FF",
	})
}).blur(function(){
	$(this).css(
		"border",""
	)
})
//表单验证
//var flagPush=true;//可以push
var arr=[];
$(".register form").submit(function(){
    if(flagPhone && flagPwd /*&& flagPwdre && flagYZ*/){
		//存cookie
		var json={
			"phone":$("#phone").val(),
			"pwd":$("#pwd").val()
		}
	     oldCookie=getCookie("user");
		var flagPush=true;//可以push
		if(oldCookie.length!=0){
			arr=oldCookie;
			/*for(var i=0;i<arr.length;i++){
				if(json.phone){
					flagPush=false;
					break;
				}
			}*/
		}
		if(flagPush){
			arr.push(json)
		}
		setCookie("user",JSON.stringify(arr))
		return true;
	}else{
		return false;
	}
	
})
//验证手机号
var flagPhone=null;
$(".register form p input").eq(0).blur(function(){
	var str=$(this).val();
	var reg=/^[0-9]\d{10}$/;
	if(reg.test(str)){
		$("#s1").html("合法");
		flagPhone=true;
	}else{
		$("#s1").html("手机格式有误，请重新输入");
		flagPhone=false;
	}
})
//验证密码
var flagPwd=null;
$(".register form p input").eq(1).blur(function(){
	var str=$(this).val();
	var reg=/^\w{6,16}$/;
	if(reg.test(str)){
		$("#s2").html("合法");
		flagPwd=true;
	}else{
		$("#s2").html("密码长度需6-16位字符");
		flagPwd=false;
	}
})
//确认密码
var flagPwdre=null;
$(".register form p input").eq(2).blur(function(){
	var str=$(this).val();
	if(str==$(".register form p input").eq(1).val()){
		$("#s3").html("密码一致");
		flagPwdre=true;
	}else{
		$("#s3").html("重新输入密码");
		flagPwdre=false;
	}
})
//验证码
$(".register form p input").eq(3).next().html(yanzheng());
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
$(".register .click").click(function(){
	$(".register form p input").eq(3).val(" ");
	$(this).prev().html(yanzheng())
})
//验证码框失去焦点验证
var flagYZ=null;
$(".register form p input").eq(3).blur(function(){
	var str=$(this).val();
	if(str==$(this).next().html()){
		$("#s4").html("ok");
		flagYZ=true;
	}else{
		$("#s4").html("验证码有误,请重新输入");
		flagYZ=false;
	}
})
//点击知我网用户协议
$(".register form h4").click(function(){
	location.href="http://www.zhiwo.com/help/user_terms";
})

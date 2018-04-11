//验证码
$(".login form p input").eq(3).next().html(yanzheng());
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
	$(".login form p input").eq(3).val(" ");
	$(this).prev().html(yanzheng())
})
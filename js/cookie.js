//封装一个 获取cookie值
function getCookie(key){
	if( document.cookie ){ //如果有cookie
		var str = document.cookie;
		var arr = str.split("; ");//分号后的空格不要删       cookie之间的键值对是通过"; "间隔
		for( var i = 0 ; i < arr.length ; i++ ){
			var item = arr[i].split("=");
			if( item[0] == key ){
				return item[1];
			}
		}
		//有cookie数据，但是没有key 得不到cookie，返回一个空字符串
		return "";
	}
	//如果没有cookie
	return "";
}
//封装一个 设置cookie值 函数
function setCookie(key,value,day){
	if( day ){
		var d = new Date();
		d.setDate( d.getDate() + day );
		document.cookie = key + "=" + value + ";expires=" + d;
	}else{
		document.cookie = key + "=" + value;
	}
}

//删除cookie
function removeCookie(key){
	setCookie( key , "" , -1 );
}

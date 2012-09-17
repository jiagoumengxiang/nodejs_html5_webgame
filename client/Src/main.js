//登陆->显示登陆窗体,处理登陆请求
document.getElementById("login").style.display="";
document.getElementById("btn_login").onclick=function(){
	//获取用户名
	var userName=document.getElementById("username");
	//密码
	/////////////
	CONNECTION.connect(userName,"123456",function(){
		alert("登陆成功");
		document.getElementById("login").style.display="none";
		document.getElementById("game").style.display="";
	});
};

//网络连接

//绘制

//事件处理



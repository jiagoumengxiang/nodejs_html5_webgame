function MAIN() {
	//事件处理
	document.body.onkedown=ONKEYDOWN;
	document.body.onkeyup=ONKEYUP;
	//网络连接
	//登陆->显示登陆窗体,处理登陆请求
	document.getElementById("login").style.display = "block";
	document.getElementById("btn_login").onclick = function() {
		//获取用户名
		var userName = document.getElementById("username").value;
		//密码
		/////////////
		CONNECTION.getMsg(function() {
			alert("登陆成功");
			document.getElementById("login").style.display = "none";
			document.getElementById("game").style.display = "block";
			//绘制初始化
			GameEngin.InitEngin();
			//事件处理
			//开始游戏
			GameEngin.GameProcess();
		});
		CONNECTION.send({
			type: "login",
			data: {
				name: userName,
				password: "123456"
			}
		});
	};
}
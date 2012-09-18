//舞台

function Stage(_C, _FPS) {
	//场景列表
	var Scene = {};
	//timeout ID
	var TimeoutID = 0;
	var C=_C;
	var FPS=_FPS;

	//切换场景
	this.ChangeScene = function(_scene) {

		//暂停Timeout
		if (TimeoutID !== 0) {
			clearTimeout(TimeoutID);
		}

		//切换
		Scene = _scene;
		//场景初始化函数执行
		Scene.Init();
	};

	function Playing(){
		var t1 = new Date().getTime();
		//清空屏幕
		C.fillStyle = "#FFF";
		C.fillRect(0, 0, 800, 600);
		//绘制
		Scene.Draw(C);
		//逻辑
		Scene.Logic();
		var t2 = new Date().getTime();
		C.fillStyle = "#000";
		C.fillText(t2 - t1, 780, 10);
		if ((t2 - t1) < (1000 / FPS)) {
			//控制FPS
			TimeoutID = setTimeout(Playing, Math.round(1000 / FPS - (t2 - t1)));
		} else {
			//控制FPS
			Playing();
		}
	}
	this.Start=function(){
		Playing();
	};
}
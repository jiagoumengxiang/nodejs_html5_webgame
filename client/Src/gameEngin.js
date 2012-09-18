/*
游戏功能
*/
var GameEngin = {};
GameEngin.InitEngin = function() {
	var canvas = document.getElementById("canvas");
	this.CTX = canvas.getContext("2d");
	this.GameStage = new Stage(GameEngin.CTX, 30);
	//大厅 id:0
	this.GameStage.ChangeScene(new GameScene.Hall());
};

//游戏进行过程
GameEngin.GameProcess = function() {
	this.GameStage.Start();
};
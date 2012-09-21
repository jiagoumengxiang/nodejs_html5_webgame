var GameScene = {};
//大厅
GameScene.Hall = function() {
	var a="asdfldasfa";
	var b="";
	this.Init = function() {
		a="wdfjasf";
		CONNECTION.getMsg(function(_data){
			a=JSON.stringify(_data);
		});
	};
	this.Draw = function(_C) {
		_C.fillStyle = "#FF0000";
		_C.fillRect(0, 0, 150, 75);
		_C.fillText(a, 480, 400);
		_C.fillText(b,580, 400);
	};
	this.Logic = function(){
		//a=INPUT.X+"//"+INPUT.Y;
		if(INPUT.KEY!=="0"){
			b="你按下了 "+INPUT.KEY;
			CONNECTION.sendMsg({type:'userlist'});
		}
	};
};
//准备
GameScene.Ready = function(){
	this.Init = function() {

	};
	this.Draw = function(_C){
		_C.fillStyle = "#FF0000";
		_C.fillRect(0, 0, 150, 75);
	};
	this.Logic = function() {

	};
};
//游戏中
GameScene.Gaming = function() {
	this.Init = function() {

	};
	this.Draw = function(_C) {
		_C.fillStyle = "#FF0000";
		_C.fillRect(0, 0, 150, 75);
	};
	this.Logic = function() {

	};
};
//结束
GameScene.Over = function() {
	this.Init = function() {

	};
	this.Draw = function(_C) {
		_C.fillStyle = "#FF0000";
		_C.fillRect(0, 0, 150, 75);
	};
	this.Logic = function() {

	};
};
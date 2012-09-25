var conn = require("./gameObj/Connection.js");
var IO = require('socket.io').listen(9005);
var gameScene=require("./gameObj/GameScene.js");

//启动端口
conn.connect(IO);
// IO.sockets.on('connection', function(_socket) {
// 	console.log("connection 启动...........");
// 	_socket.on("message",function(_data){
// 		var rtnData=parseInt(_data,10)+1;
// 		_socket.emit("message",rtnData);
// 	});
// });










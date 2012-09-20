var gameAction=require("./Action.js");

exports.connect = function(io) {
	io.sockets.on('connection', function(_socket) {
		console.log("connection 启动...........");
		_socket.on("message", function(_data) {
			console.log(_data);
			_socket.send(gameAction.CallAcrion(JSON.parse(_data)));
		});
		_socket.on('disconnect', function() {
			//下线.
			console.log("客户端已退出");
		});
	});
};






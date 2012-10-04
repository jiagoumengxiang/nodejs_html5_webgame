var io,gameAction;

exports.Init=function(_io,_action){
	io=_io;
	gameAction=_action;
};

exports.connect = function() {
	io.sockets.on('connection', function(_socket) {
		console.log("connection 启动...........");
		_socket.on("message", function(_data) {
			console.log(_data);
			_socket.emit("message",gameAction.CallAction(JSON.parse(_data),_socket));
		});
		_socket.on('disconnect', function() {
			//下线.
			console.log("客户端已退出");
		});
	});
};






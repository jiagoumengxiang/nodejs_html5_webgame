var conn = require("./gameObj/Connection.js");
var IO = require('socket.io').listen(9005);

//conn.connect(IO);
IO.sockets.on('connection', function(_socket) {
	console.log("connection 启动...........");
	_socket.on("login", function(_data) {
		console.log(_data);
		_socket.emit("login", "success"+_data);
	});
	_socket.on('disconnect', function() {
		//下线.
		console.log("客户端已退出");
	});
	_socket.emit("loginInit", "success");
});
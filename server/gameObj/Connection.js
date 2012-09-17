var userStorage = require("./UserStorage.js");
var userObj = require("./User.js");

exports.connect = function(io) {
	io.sockets.on('connection', function(_socket) {
		console.log("connection 启动...........");
		_socket.on("login", function(_data) {
			console.log(_data);
			//检查用户名密码
			//实例化用户加入storage
			var user = new userObj.User(_data, _socket);
			userStorage.UserLogin(user);
			_socket.emit("login", "success");
		});
		_socket.on('disconnect', function() {
			//下线.
			console.log("客户端已退出");
		});
		_socket.emit("loginInit", "success");
	});
};





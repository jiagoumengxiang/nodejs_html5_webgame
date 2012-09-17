var userStorage=require("./UserStorage.js");
var userObj=require("./User.js");

exports.connect = function(io){
	io.sockets.on('connection', function(_socket) {
		_socket.on("login",function(_data){
			//检查用户名密码

			//实例化用户加入storage
			var user= new userObj.User(_data.username,_socket);
			userStorage.UserLogin(user);
			_sock.emit("login","success");
		});
		_socket.on('disconnect', function() {
			//下线.
			console.log("客户端已退出");
		});
	});
};



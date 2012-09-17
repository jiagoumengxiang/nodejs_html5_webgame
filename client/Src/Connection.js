var CONNECTION = {};
CONNECTION.socket = null;
CONNECTION.connect = function(_userName, _password, _fn) {
	//连接服务器
	this.socket = io.connect('http://localhost:9005');
	this.socket = this.socket.on('connect', function() {

		CONNECTION.socket.on("loginInit", function(_data) {
			CONNECTION.socket.emit("login", "aaaaa");
		});
		CONNECTION.socket.on("login", function(_data) {
			//成功,则调用回调函数通知main.
			if (_data === "success") {
				_fn();
			}
		});
	});
};






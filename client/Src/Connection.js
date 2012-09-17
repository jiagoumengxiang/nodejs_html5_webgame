var CONNECTION = {};
CONNECTION.socket = null;
CONNECTION.connect = function(_userName, _password, _fn) {
	//连接服务器
	this.socket = io.connect('http://localhost:9005');
	this.socket = this.socket.on('connect', function() {
		this.socket.on("loginInit", function(_data) {
			this.socket.emit("login", "aaaaa");
		});
		this.socket.on("login", function(_data) {
			//成功,则调用回调函数通知main.
			if (_data === "success") {
				_fn();
			}
		});
	});
};
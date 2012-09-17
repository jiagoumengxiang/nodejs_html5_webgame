var CONNECTION = {};
//连接服务器
CONNECTION.socket = io.connect('http://localhost:8889');
CONNECTION.connect = function(_userName,_password,_fn) {
	this.socket = this.socket.on('connect', function() {
		this.socket.emit("login",{username:_userName,password:_password});
		this.socket.on("login",function(_data){
			//成功,则调用回调函数通知main.
			if(_data==="success"){
				_fn();
			}
		});
	});
};





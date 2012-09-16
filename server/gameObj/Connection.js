
exports.connect = function(_port) {
	var io = require('socket.io').listen(_port);
	io.sockets.on('connection', function(_socket) {
		_socket.emit('message',{'type':'login','data':'请输入你的名字->'});
		_socket.on("message",function(_data){
			console.log(_data);
			if(fn!==null){
				fn(_socket,_data);
			}else{
				console.log("message获取异常,fn为null");
			}
		});
		_socket.on('disconnect', function() {
			//下线.
			console.log("客户端已退出");
			fn_exit(_socket.id);
		});
	});
};

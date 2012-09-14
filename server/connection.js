var socket,fn=null,fn_exit=null;
exports.connect = function(_port) {

	var io = require('socket.io').listen(_port);
	io.sockets.on('connection', function(_socket) {
		socket = _socket;
		socket.emit('message',{'type':'login','data':'请输入你的名字->'});

		socket.on("message",function(_data){
			console.log(_data);
			if(fn!==null){
				fn(socket.id,_data);
			}else{
				console.log("message获取异常,fn为null");
			}
		});

		socket.on('disconnect', function() {
			//下线.
			console.log("客户端已退出");
			fn_exit(socket.id);
		});
	});
};

exports.sendMsg = function(_msg) {
	socket.emit('message',_msg);
};

exports.emitMsg = function(_msg) {
	socket.broadcast.emit('message',_msg);
};

exports.getMsg = function(_fn) {
	fn=_fn;
};
exports.clientExit=function(_fn){
	fn_exit=_fn;
};
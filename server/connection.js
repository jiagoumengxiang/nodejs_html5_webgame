var socket, isConn = false;
exports.connect = function(_port) {

	var io = require('socket.io').listen(_port);
	io.sockets.on('connection', function(_socket) {
		isConn = true;
		socket = _socket;
		socket.emit('message',{'type':'login','data':'请输入你的名字->'});
		socket.on('disconnect', function() {
			isConn = false;
			//下线.
		});
	});
};

exports.sendMsg = function(_msg) {
	if (isConn) socket.emit('message',_msg);
	else console.log('网络断开');
};

exports.emitMsg = function(_msg) {
	if (isConn) socket.broadcast.emit(_msg);
	else console.log('网络断开');
};

exports.getMsg = function(_fn) {
	if (isConn) socket.on('message', function(_data) {
		_fn(socket.id, _data);
	});
};
var conn = require("./gameObj/Connection.js");
var IO = require('socket.io').listen(9005);

conn.connect(IO);


// IO.sockets.on('connection', function(_socket) {
// 	console.log("connection 启动...........");
// 	_socket.on("message",function(_data){
// 		var rtnData=parseInt(_data,10)+1;
// 		_socket.emit("message",rtnData);
// 	});
// });










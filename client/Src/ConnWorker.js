/*

1.发送数据到服务器
2.接收服务器返回到额数据
3.定期同步

*/
importScripts("socket.io.js");

var socket = io.connect('http://localhost:9005');

var message = "";

socket = socket.on('connect', function() {
	socket.on('message', function(_data) {
		postMessage(_data); //将获取到的数据发送会主线程
		message="";
	});
});

onmessage = function(evt) {
	message = evt.data; //通过evt.data获得发送来的数据
};

//与后台的同步
var sync = function() {
	if(message.length>0){
		socket.emit('message',message);
		message="";
	}
	setTimeout(sync,'500');
};
sync();





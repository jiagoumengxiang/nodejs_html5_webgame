var conn = require('./connection.js');
var gameEvent = require('./event.js');


conn.connect(8889);

function login(_socket, _data) {
	if (gameEvent.login(_socket.id, _data)) {
		_socket.broadcast.emit("message", {
			'type': 'broad',
			'data': (_data + '上线了.')
		});
		_socket.emit("message", {
			'type': 'login',
			'data': '欢迎登陆'
		});
		_socket.emit("message", {
			'type': 'weit',
			'data': '请输入操作:1.查看在线用户.2.发起挑战'
		});
	}
}

function weit(_socket, _data) {
	switch (_data) {
	case "1":
		_socket.emit("message", {
			'type': 'weit',
			'data': gameEvent.getUsers()
		});
		_socket.emit("message", {
			'type': 'weit',
			'data': '请输入操作:1.查看在线用户.2.发起挑战'
		});
		break;
	case "2":
		_socket.emit("message",{type:'challenge',data:"请输入其他用户编号:"});
		break;
	default:
		_socket.emit("message", {
			'type': 'weit',
			'data': "很抱歉,你输入了一个我不懂的答案....."
		});
		_socket.emit("message", {
			'type': 'weit',
			'data': '请输入操作:1.查看在线用户.2.发起挑战'
		});
	}
}
//挑战
function challenge(_socket,_data){
	//判断用户输入,与其他用户建立关系.
	
}

conn.getMsg(function(_socket, _data) {
	switch (_data.type) {
		//登陆
	case 'login':
		login(_socket, _data.data);
		break;
		//大厅
	case 'weit':
		weit(_socket, _data.data);
		break;
		//挑战
	case 'challenge':
		challenge(_socket,_data.data);
		break;
	default:
		console.log("其他未处理消息.");
	}
});

conn.clientExit(function(_id) {
	gameEvent.loginOut(_id);
});
var conn = require('./connection.js');
var gameEvent = require('./event.js');


conn.connect(8889);

function login(_id, _data) {
	if (gameEvent.login(_id, _data)) {
		conn.emitMsg({
			'type': 'login',
			'data': (_data + '上线了.')
		});
		conn.sendMsg({
			'type': 'login',
			'data': '欢迎登陆'
		});
		conn.sendMsg({
			'type': 'weit',
			'data': '请输入操作:1.查看在线用户.2.发起挑战'
		});
	}
}

function weit(_id, _data) {
	switch (_data) {
	case "1":
		conn.sendMsg({
			'type': 'weit',
			'data': gameEvent.getUsers()
		});
		conn.sendMsg({
			'type': 'weit',
			'data': '请输入操作:1.查看在线用户.2.发起挑战'
		});
		break;
	case "2":
		
		break;
	default:
		conn.sendMsg({
			'type': 'weit',
			'data': "很抱歉,你输入了一个我不懂的答案....."
		});
		conn.sendMsg({
			'type': 'weit',
			'data': '请输入操作:1.查看在线用户.2.发起挑战'
		});
	}
}

conn.getMsg(function(_id, _data) {
	switch (_data.type) {
	case 'login':
		login(_id, _data.data);
		break;
	case 'weit':
		weit(_id, _data.data);
		break;
	default:
		console.log("其他未处理消息.");
	}
});

conn.clientExit(function(_id){
	gameEvent.loginOut(_id);
});
var conn=require('./connection.js');
var gameEvent=require('./event.js');

conn.connect(8889);

conn.getMsg(function(_id,_data){
	switch(_data.type){
		case 'login':
			conn.emitMsg(gameEvent.login(_id,_data.data));
		break;
		case 'msg':
		break;
		default:
			console.log("其他未处理消息.");
	}
});
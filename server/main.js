var conn=require('./connection.js');
var gameEvent=require('./event.js');


conn.connect(8889);

function login(_id,_data){
	conn.emitMsg({type:'login',data:gameEvent.login(_id,_data.data)});
}
function msg(_id,_data){

}



conn.getMsg(function(_id,_data){
	switch(_data.type){
		case 'login':
			login(_id,_data);
		break;
		case 'msg':
		break;
		default:
			console.log("其他未处理消息.");
	}
});
/*
1.解析connection来的json

2.将返回数据反馈给connection
*/

var userStorage = require("./UserStorage.js");
var userObj = require("./User.js");

function Login(_data,_socket) {

	//检查用户名密码
	//实例化用户加入storage
	var user = new userObj.User(_data.name, _socket);
	userStorage.UserLogin(user);
}

function UserList(_data) {
	//返回用户列表
	return  userStorage.GetUserList();
}

exports.CallAction = function(_data,_socket) {
	var RTNVAL = {type:"success"};
	switch (_data.type) {
	case "login":
		Login(_data.data,_socket);
		break;
	case "userlist":
		RTNVAL=UserList(_data.data);
		break;
	default:
	}
	return JSON.stringify(RTNVAL);
};
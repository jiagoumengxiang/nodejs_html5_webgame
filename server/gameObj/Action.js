/*
1.解析connection来的json

2.将返回数据反馈给connection
*/

var userStorage = require("./UserStorage.js");
var userObj = require("./User.js");

exports.CallAction = function(_data) {
	var RTNVAL={};
	switch (_data.type) {
	case "login":
		//检查用户名密码
		//实例化用户加入storage
		var user = new userObj.User(_data, _socket);
		userStorage.UserLogin(user);
		_socket.emit("message", "success");
		break;
	case "list":
		//返回用户列表
		_socket.emit("message", userStorage.GetUserList());
		break;
	default:
	}

	return JSON.stringify(RTNVAL);
};






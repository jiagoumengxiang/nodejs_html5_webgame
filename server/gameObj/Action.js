/*
1.解析connection来的json

2.将返回数据反馈给connection
*/

var userStorage = require("./Data/UserStorage.js");
var userObj = require("./Data/User.js");
var logic;

function Login(_data, _socket) {

	//检查用户名密码
	//实例化用户加入storage
	var user = new userObj.User(_data.name, _socket);
	userStorage.UserLogin(user);
}

function GetScene() {
	return {
		type: "scene",
		data: logic.GetScene()
	};
}

function CreateTank() {
	return {
		type: "myT",
		data: logic.CreateTank()
	};
}

function TankMove(_data) {
	return {
		type: "tm",
		data: logic.TankMove(_data)
	};
}
function Fire(_tankID){
	return {
		type: "fire",
		data: logic.Fire(_tankID)
	};
}

exports.CallAction = function(_data, _socket) {
	var RTNVAL = {
		type: "success"
	};
	switch (_data.type) {
	case "login":
		Login(_data.data, _socket);
		break;
	case "scene":
		//获取场景信息
		RTNVAL = GetScene();
		break;
	case "myT":
		//返回新tankid
		RTNVAL = CreateTank();
		break;
	case "tm":
		RTNVAL = TankMove(_data.data);
		_socket.broadcast.emit("message", JSON.stringify({
			type: "otm",
			data: [_data.data[1], _data.data[2], RTNVAL.data]
		}));
		break;
	case "fire":
		RTNVAL=Fire(_data.data);
		_socket.broadcast.emit("message", JSON.stringify(RTNVAL));
		_socket.emit("message",JSON.stringify(RTNVAL));
		break;
	default:
	}
	return JSON.stringify(RTNVAL);
};
exports.NewStart = function(_newSS) {
	var socket = userStorage.GetSocket();
	if (socket !== undefined) {
		socket.emit("message", JSON.stringify({
			type: "news",
			data: _newSS
		}));
		socket.broadcast.emit("message", JSON.stringify({
			type: "news",
			data: _newSS
		}));
	}
};

exports.Init = function(_logic) {
	logic = _logic;
};
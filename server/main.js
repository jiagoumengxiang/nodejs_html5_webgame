var conn = require("./gameObj/Connection.js");
var IO = require('socket.io').listen(9005);
var logic=require("./gameObj/Logic.js");
var data = require("./gameObj/Data.js");
var action = require("./gameObj/Action.js");

//初始化数据
data.Init();
//初始化逻辑
logic.Init(data,action);
//初始动作处理
action.Init(logic);
//网络初始化
conn.Init(IO,action);

//开始逻辑
logic.Start();
//启动端口
conn.connect();











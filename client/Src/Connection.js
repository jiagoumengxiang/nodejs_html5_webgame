/*
1.像服务器发送json数据
	将接收的json数据转换为字符串发给worker
2.从服务接收json数据
	将worker返回的数据转换为json
*/
var CONNECTION = {};
CONNECTION.worker = null;
CONNECTION.onmessage = null;
CONNECTION.worker = new Worker("Src/ConnWorker.js");
//String->JSON
CONNECTION.worker.onmessage = function(_data) {
	if (CONNECTION.onmessage !== null) {
		CONNECTION.onmessage(JSON.parse(_data.data));
	}
};
//JSON->String
CONNECTION.sendMsg = function(_data) {
	CONNECTION.worker.postMessage(JSON.stringify(_data));
};

CONNECTION.getMsg = function(_fn) {
	CONNECTION.onmessage = _fn;
};





var conn = require("./gameObj/Connection.js");
var IO =  require('socket.io').listen("9000");

conn.connect(IO);
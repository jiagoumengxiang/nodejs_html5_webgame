var conn = require("./gameObj/Connection.js");
var IO = require('socket.io').listen(9005);

conn.connect(IO);


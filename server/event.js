var users;

exports.login=function(_id,_name){
	users.push({'id':_id,'name':_name});

	console.log(users);

	return "欢迎"+_name;
};
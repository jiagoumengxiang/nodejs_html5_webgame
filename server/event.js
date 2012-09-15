var users=[];

exports.login=function(_id,_name){
	users.push({'id':_id,'name':_name});
	console.log(users);
	return true;
};

exports.loginOut=function(_id){
	//找出id相同的人去掉
	for(var i in users){
		if(users[i].id===_id){
			users.splice(i,1);
			break;
		}
	}
};

exports.getUsers=function(){
	var rtnVal="";
	for(var i in users){
		rtnVal+=(","+(parseInt(i,10)+1)+":"+users[i].name);
	}
	return rtnVal.substring(1);
};
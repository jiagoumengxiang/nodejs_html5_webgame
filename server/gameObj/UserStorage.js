var Storage=[];



exports.UserLogin=function(_socket){
	Storage.push(_socket);
};

exports.GetUser=function(_id){
	for(var i in Storage){
		if(_id===Storage[i].id){
			return Storage[i];
		}
	}
};
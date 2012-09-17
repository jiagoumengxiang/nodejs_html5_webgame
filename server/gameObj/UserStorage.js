var Storage=[];

exports.UserLogin=function(_user){
	Storage.push(_user);
};

exports.GetUser=function(_id){
	for(var i in Storage){
		if(_id===Storage[i].id){
			return Storage[i];
		}
	}
};



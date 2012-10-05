var GameScene = {};


GameScene.Hall = function() {
	var myTank;
	var Scenes = {};
	Scenes.starts = [];
	Scenes.bullets = [];
	Scenes.tanks = [];
	this.Init = function() {
		CONNECTION.send({
			type: "myT"
		});
		CONNECTION.getMsg(function(_data) {
			var i, j;
			switch (_data.type) {
			case "fire":
				if (_data.data !== undefined || _data.data !== null) {
					for (i in Scenes.starts) {
						if (Scenes.starts[i].id === _data.data) {
							Scenes.starts[i].del=true;
							break;
						}
					}
				}
				break;
			case "news":
					Scenes.starts.push(new Sprite.Start(_data.data));
				break;
			case "otm":
				for (i in Scenes.tanks) {
					if (Scenes.tanks[i].id === _data.data[0]) {
						if ("l" === _data.data[1]) {
							Scenes.tanks[i].x -= 5;
						} else {
							Scenes.tanks[i].x += 5;
						}
						break;
					}
				}
				break;
			case "tm":
				//tank move
				myTank.x = _data.data;
				break;
			case "myT":
				//获取我的坦克
				myTank = _data.data;
				break;
			case "scene":
				//场景
				Sprite.refScenes(Scenes, _data.data);

				if (myTank.constructor !== "Object") {
					for (i in Scenes.tanks) {
						if (Scenes.tanks[i].id === myTank) {
							myTank = Scenes.tanks[i];
							break;
						}
					}
				}

				break;
			}
		});
	};
	this.Draw = function(_C) {
		//绘制场景
		for (var i in Scenes.starts) {
			Scenes.starts[i].draw(_C);
		}
		for (i in Scenes.bullets) {
			Scenes.bullets[i].draw(_C);
		}
		for (i in Scenes.tanks) {
			Scenes.tanks[i].draw(_C);
		}
	};
	this.Logic = function() {
		for (var i in Scenes.starts) {
			if(Scenes.starts[i].del){
				Scenes.starts.splice(i, 1);
				i--;
				continue;
			}
			if (Scenes.starts[i].y < 400 ) {
				Scenes.starts[i].logic();
			} else {
				Scenes.starts.splice(i, 1);
				i--;
			}
		}
		switch (INPUT.KEY) {
		case 37:
			//left
			myTank.moveLeft();
			break;
		case 39:
			//right
			myTank.moveRight();
			break;
		case 32:
			//space
			myTank.fire();
			break;
		}

		//获取场景
		CONNECTION.sendMsg({
			type: "scene"
		});


	};
};
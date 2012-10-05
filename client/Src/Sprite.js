/*
精灵类
*/
var Sprite = {
    Tank: function(_id) {
        this.id = _id;
        this.x = 380;
        this.y = 540;
        this.img = new Image();
        this.img.src = "/Src/img/tank.gif";
        this.moveLeft = function() {
            if (this.x > 5) {
                this.x -= 5;
            }
            CONNECTION.send({
                type: "tm",
                data: ["t", this.id, "l"]
            });
        };
        this.moveRight = function() {
            if (this.x < 765) {
                this.x += 5;
            }
            CONNECTION.send({
                type: "tm",
                data: ["t", this.id, "r"]
            });
        };
        this.fire=function(){
            CONNECTION.send({
                type:"fire",
                data:this.id
            });
        };
        this.draw = function(_c) {
            _c.drawImage(this.img, this.x, this.y, 37, 61);
        };
    },
    Start:function(_start){
        this.id = _start[0];
        this.x = _start[1];
        this.y = _start[2];
        this.img = new Image();
        this.img.src = "/Src/img/start.gif";
        this.del=false;

        this.draw = function(_c) {
            _c.drawImage(this.img, this.x, this.y, 32, 32);
        };
        this.logic=function(){
            this.y+=3;
        };
    },
    refScenes: function(_scenes, _data) {
        var i, j, k, temp = [];
            var newTK = true;
        for (i in _scenes.starts) {
            for(j in _data.starts){
               if(_scenes.starts[i].id===_data.starts[j][0]){
                    //位置同步
                    _scenes.starts[i].x=_data.starts[j][1];
                    _scenes.starts[i].y=_data.starts[j][2];
                    break;
               }
            }
        }

        // newTK=true,temp=[];
        // for (i in _scenes.bullets) {
        //     _scenes.bullets[i].draw();
        // }


        newTK=true,temp=[];
        for (i in _scenes.tanks) {
            for (j in _data.tanks) {

                if (_scenes.tanks[i].id === _data.tanks[j][1]) {
                    //位置同步
                    _scenes.tanks[i].x = _data.tanks[j][2];
                    _scenes.tanks[i].y = _data.tanks[j][3];
                    temp.push(j);
                    j --;
                    break;
                }
            }
        }
        for (j in _data.tanks) {
            for (k in temp) {
                if (j === k) {
                    newTK=false;
                    break;
                }
            }
            if (newTK) {
                _scenes.tanks.push(new Sprite.Tank(_data.tanks[j][1]));
            }
            newTK=true;
        }
    }

};
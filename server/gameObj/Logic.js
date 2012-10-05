var Data, Action;
var FPS = 100;
var r1 = 0,
    r2 = 0,
    r3 = 0;


//逻辑层初始化
exports.Init = function(_data, _action) {
    Data = _data;
    Action = _action;
};

//开始逻辑
exports.Start = function() {
    HeartBeat();
};

var Scenes = {};
Scenes.id = 0;
Scenes.starts = [];
Scenes.bullets = [];
Scenes.tanks = [];

//获取场景
exports.GetScene = function() {
    var rtnVal = {};
    rtnVal.starts = [];
    rtnVal.bullets = [];
    rtnVal.tanks = [];
    for (var i in Scenes.starts) {
        rtnVal.starts.push(Scenes.starts[i]);
    }
    for (i in Scenes.bullets) {
        rtnVal.bullets.push(Scenes.bullets[i]);
    }
    for (i in Scenes.tanks) {
        rtnVal.tanks.push(Scenes.tanks[i]);
    }
    return rtnVal;
};

//创建新tank
exports.CreateTank = function() {
    var tid = Scenes.id++;
    Scenes.tanks.push(["t", tid, 380, 540]);
    return tid;
};

//坦克移动
exports.TankMove = function(_data) {
    for (var i in Scenes.tanks) {
        if (Scenes.tanks[i][1] === _data[1]) {
            if ("r" === _data[2]) {
                Scenes.tanks[i][2] += 5;
            } else {
                Scenes.tanks[i][2] -= 5;
            }
            return Scenes.tanks[i][2];
        }
    }
};
exports.Fire = function(_tankID) {
 console.log(Scenes.starts.length);
    for (var i in Scenes.tanks) {
        if (Scenes.tanks[i][1] === _tankID) {
            for (var j in Scenes.starts) {
                var bx=Scenes.tanks[i][2] + 20 - Scenes.starts[j][1];
                if (30 > bx && bx > 0) {
                    var sid = Scenes.starts[j][0];
                    Scenes.starts.splice(j, 1);
                    return sid;
                }
            }
            break;
        }
    }
};
//场景逻辑

function SceneLogic() {
    var i, j, k, tid, news;
    //生成星星
    if (r1 !== 0) {
        r1--;
    } else {
        r1 = Math.round(Math.random() * 5 + 10);
        tid = Scenes.id++;
        news = [tid, Math.round(Math.random() * 700 + 50), 0];
        Scenes.starts.push(news);
        Action.NewStart(news);
    }
    //星星移动
    for (i = 0; i < Scenes.starts.length; i++) {
        if (Scenes.starts[i][2] < 400) {
            Scenes.starts[i][2] += 10;
        } else {
            Scenes.starts.splice(i, 1);
            i--;
        }

    }
    //碰撞检测(bullet<->start)
}

//心跳

function HeartBeat() {
    var t1 = new Date().getTime();

    SceneLogic();

    var t2 = new Date().getTime() - t1;

    if (t2 > 0) {
        console.log(t2);
    }

    if (FPS > t2) {
        setTimeout(HeartBeat, FPS - t2);
    } else {
        setTimeout(HeartBeat, 1);
    }

}
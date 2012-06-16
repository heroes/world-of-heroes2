/**
 * stage Battle Class
 */
/**
 * stage Battle Class
 */
Laro.NS('woh.stageClass', function (L) {
    var pkg = this;
    var Battle = L.BaseState.extend(function () {
        this.objects = [];
        this.damageArea    	
    }).methods({
        enter: function (msg, from) {
            woh.log('enter stage [battle] with msg ' + msg);
            woh.show(woh.els.battle);
            this.canvas =  woh.els.battle.querySelector("#battle_canvas");
            this.context = this.canvas.getContext("2d");
            this.context.clearRect(0,0,this.canvas.width,this.canvas.height);
            this.registerObj(rio_tang);
        },
        leave: function () {
            woh.log('leave stage [battle]');
            woh.hide(woh.els.battle);
        },
        update: function (dt) {
            this.timeInState += dt;
            with(this)
                this.objects.forEach(function(o){
                    o.update(dt);
                })
        },
        transition: function () {
            this.timeInState > Infinity && woh.gameScript.continueExec();
        },
        draw: function (render) {
            this.context.clearRect(0,0,this.canvas.width,this.canvas.height);
            with(this)
                this.objects.forEach(function(o){
                    o.draw(context);
                })
        },
        registerObj:function(obj){
            this.objects.push(obj);
        },
        unregisterObj:function(obj){
            this.objects = this.objects.filter(function(o){ return o!=obj; });
        }
    });
    this.Battle = Battle;
});

function loadImage(src) {
    var img = new Image;
    img.src = src;
    return img;
}

woh.cache = {
    rio_tang:{
        standing:loadImage(".\\images\\rio_tang\\stand\\character\\1.png"),
        preparing:loadImage(".\\images\\rio_tang\\stand\\character\\2.png")
    }
}


var rio_tang_actions = {
     defaultAction:"stand",
     stand:{
        name: "stand",
        type: "cycle",
        states: [
            {
                name:"standing",
                drawInfo:{
                    image:[loadImage(".\\images\\rio_tang\\stand\\character\\1.png"),loadImage(".\\images\\rio_tang\\stand\\weapon\\1.png")]
                },
                duration:300,
                areaInfo:null
            },
            {
                name:"preparing",
                drawInfo:{
                    image:[loadImage(".\\images\\rio_tang\\stand\\character\\2.png"),loadImage(".\\images\\rio_tang\\stand\\weapon\\2.png")]
                },
                duration:300,
                areaInfo:null
            }
        ]
    },
    attack:{
        name: "attack",
        type: "once",
        states: [
            {
                drawInfo:{
                    image: [loadImage(".\\images\\rio_tang\\attack\\character\\1.png"),loadImage(".\\images\\rio_tang\\attack\\weapon\\1.png")]
                },
                duration:50,
                areaInfo:null
            },
            {
                drawInfo:{
                    image: [loadImage(".\\images\\rio_tang\\attack\\character\\2.png"),loadImage(".\\images\\rio_tang\\attack\\weapon\\2.png")]
                },
                duration:100,
                areaInfo:null
            },
            {
                drawInfo:{
                    image: [loadImage(".\\images\\rio_tang\\attack\\character\\3.png"),loadImage(".\\images\\rio_tang\\attack\\weapon\\3.png")]
                },
                duration:100,
                areaInfo:null
            },
            {
                drawInfo:{
                    image: [loadImage(".\\images\\rio_tang\\attack\\character\\4.png"),loadImage(".\\images\\rio_tang\\attack\\weapon\\4.png")]
                },
                duration:100,
                areaInfo:null
            }
        ]
    },
}

var rio_tang = new Character({
    
})

document.body.onclick = function(){ rio_tang.attack() };

function Character(data){



    
    
    var pos = [0,0]
    var stage = null;
    this.setStage = function(_stage) {
        if(stage)
            stage.unregisterObj(this);

        stage = _stage;
        stage.registerObj(this);
    }
    
    this.attack = function (){
        curr = 0;
        this.action = rio_tang_actions.attack;
        this.state = this.action.states[curr];
        duration = this.action.states[curr].duration;
    }
    
    var curr = 0;
    var t = 0;
    var duration = 0;
    this.action = rio_tang_actions[rio_tang_actions.defaultAction]
    this.state = this.action.states[curr];
    this.update = function(dt) {
        duration -= Math.floor(dt*1000);
        
        if(duration<0) {
            curr ++;
            if(curr >=  this.action.states.length) {
                if(this.action.type == "cycle") {
                    curr = 0;
                    this.state = this.action.states[curr];
                    duration += this.action.states[curr].duration;
                }
                else {
                    curr = 0;
                    this.action = rio_tang_actions[rio_tang_actions.defaultAction]
                    this.state = this.action.states[curr];
                    duration += this.action.states[curr].duration;
                }
            }
            else {
                this.state = this.action.states[curr];
                duration += this.action.states[curr].duration;
            }
        }

    }
    this.draw = function(context) {
        context.strokeStyle = "blue";
        if(this.state.drawInfo) {
            this.state.drawInfo.image.forEach(function(img) {
                context.drawImage(img,1,1, img.width, img.height);
            });
        }
    }
}
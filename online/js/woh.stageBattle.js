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

var rio_tang = new Character({
    
})

function Character(data){
    this.timeline = [];
    var pos = [0,0]
    var stage = null;
    this.setStage = function(_stage) {
        if(stage)
            stage.unregisterObj(this);

        stage = _stage;
        stage.registerObj(this);
    }
    this.update = function() {
        
    }
    this.draw = function(context) {
        context.strokeRect(10,10,100,300);
    }
}
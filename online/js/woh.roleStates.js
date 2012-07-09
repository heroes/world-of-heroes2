/**
 * role states
 */

woh.roleStates = {
    stand: 0,
    run: 1,
    attack: 2,
    hurted: 3,
    magic: 4,
    dead: 5
};

woh.roleMessages = {
    animStopped : 0,
	animationEvent: 1,
	alreadyHidden : 2,
	attackBlocked : 3
};

Laro.NS('woh.roleStateClass', function (L) {
    
    // stand
    var Stand = L.BaseState.extend(function () {
    
    }).methods({
        enter: function (msg, from) {
            this.host.setAndPlay('stand');
        },
        leave: function () {},
        update: function (dt) {
        
        },
        transition: function () {},
        message: function () {}
    
    });
    
    // Move
    var Run = L.BaseState.extend(function () {
    
    }).methods({
        enter: function (msg, from) {
            console.log('enter run');
            this.host.setAndPlay('run');
            this.dis = Number.MAX_VALUE;
        },
        leave: function () {
            console.log('leave run')
        },
        update: function (dt) {
            if (this.host.toPos) {
                var speed = dt*200;
                this.dis = Math.sqrt(Math.pow(this.host.toPos.x-this.host.x, 2) + Math.pow(this.host.toPos.y-this.host.y, 2));
                var newX = this.host.x + speed * (this.host.toPos.x - this.host.x)/this.dis,
                    newY = this.host.y + speed * (this.host.toPos.y - this.host.y)/this.dis;
                this.host.setPos(newX, newY);
            }
        },
        transition: function () {
            this.dis < 2 && this.host.stand();
        },
        message: function () {}
    
    });
    

    var Attack = L.BaseState.extend(function () {
    
    }).methods({
        enter: function (msg, from) {
            this.host.setAndPlay('attack');
        },
        leave: function () {},
        update: function (dt) {
        
        },
        transition: function () {},
        message: function () {}
    
    });
    
    var Hurted = L.BaseState.extend(function () {
    
    }).methods({
        enter: function (msg, from) {
            this.host.setAndPlay('hurted');
        },
        leave: function () {},
        update: function (dt) {
            
        },
        transition: function () {},
        message: function () {}
    
    });
    
    var Magic = L.BaseState.extend(function () {
    
    }).methods({
        enter: function (msg, from) {
            this.host.setAndPlay('magic');
        },
        leave: function () {},
        update: function (dt) {
        
        },
        transition: function () {},
        message: function () {}
    
    });
    
    var Dead = L.BaseState.extend(function () {
    
    }).methods({
        enter: function (msg, from) {
            this.host.setAndPlay('dead');
        },
        leave: function () {},
        update: function (dt) {
        
        },
        transition: function () {},
        message: function () {}
    
    });

    this.Stand = Stand;
    this.Run = Run;
    this.Hurted = Hurted;
    this.Magic = Magic;
    this.Attack=Attack;
    this.Dead = Dead;
});
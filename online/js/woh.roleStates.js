/**
 * role states
 */

woh.roleStates = {
    stand: 0,
    move: 1,
    normlAttack: 2,
    hurt: 3,
    skill: 4,
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
    var Move = L.BaseState.extend(function () {
    
    }).methods({
        enter: function (msg, from) {
            this.host.setAndPlay('move');
        },
        leave: function () {},
        update: function (dt) {
        
        },
        transition: function () {},
        message: function () {}
    
    });
    

    var NormalAttack = L.BaseState.extend(function () {
    
    }).methods({
        enter: function (msg, from) {
            this.host.setAndPlay('normalAttack');
        },
        leave: function () {},
        update: function (dt) {
        
        },
        transition: function () {},
        message: function () {}
    
    });
    
    var Hurt = L.BaseState.extend(function () {
    
    }).methods({
        enter: function (msg, from) {
            this.host.setAndPlay('hurt');
        },
        leave: function () {},
        update: function (dt) {
        
        },
        transition: function () {},
        message: function () {}
    
    });
    
    var Skill = L.BaseState.extend(function () {
    
    }).methods({
        enter: function (msg, from) {
            this.host.setAndPlay('skill');
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
    this.Move = Move;
    this.NormalAttack = NormalAttack;
    this.Hurt = Hurt;
    this.Skill = Skill;
    this.Dead = Dead;
});
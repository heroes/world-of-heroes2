/**
 * 人物或者怪物 
 */
woh.roleAttackType = {
    normalAttack: 0,
    heavyAttack: 1
};
// Role
Laro.NS('woh', function (L) {
    

    var Sprite = L.Class(function (data, brain) {
        var statesList = [
            woh.roleStates.stand, woh.roleStateClass.Stand,
            woh.roleStates.run, woh.roleStateClass.Run,
            woh.roleStates.attack, woh.roleStateClass.Attack,
            woh.roleStates.hurted, woh.roleStateClass.Hurted,
            woh.roleStates.magic, woh.roleStateClass.Magic,
            woh.roleStates.dead, woh.roleStateClass.Dead,
        ];
        
        this.data = data;
        //L.extend(this, data);
        this.nowLife=this.life = 1000;
        // 不用 Vector 操作，在大数据量操作的时候会快些
        this.x = 0;
        this.y = 0;
        //定义血条的宽和高
        this.bloodBarW=this.data.bloodBarW||120;
        this.bloodBarH=15;
        this.movement = new L.Vector2(0, 0);
        this.fsm = new L.AppFSM(this, statesList);
        // 当前animation
        this.animations = {};
        this.curAnimation = null;
        
        // 是否可移动标志
        this.canMove = false;
        this.face = 'right';

        this.brain = brain;
        this.brain.knowSprite(this);

        this.born();
    }).methods({
        born: function () {
            this.getAnimations();
            this.initCheckArea();
            this.stand(); // 默认进入站立状态
        },
        initCheckArea: function () {
            // 可操作区域 == > 这一部分数据需要 提到 人物数据配置 里面去， 这里目前暂时先写死
            var me = this;
            this.checkRect = new L.Sprite(woh.stage.$, function () {
                this.width = 100;
                this.height = 120;
                this.setPos = function (x, y) {
                    // 因为 sprite 默认是画在中心的，所以 也需要加上偏移量
                    this.x = x - 50;
                    this.y = y - 60;
                };
                this.setPos(me.x, me.y);
                // dev 模式，可以显示可以操作的区域，正式的时候把draw去掉
                this.draw = function (rd) {
                    rd.drawRect(0, 0, this.width, this.height, '#000');
                }
            });    
        },

        getAnimations: function () {
            this.animations.stand = this.getAnimationGroup('stand');
            this.animations.run = this.getAnimationGroup('run');
            this.animations.hurted = this.getAnimationGroup('hurted');
            this.animations.attack = this.getAnimationGroup('attack');
            this.animations.magic = this.getAnimationGroup('magic');
        },
        // 设置当前 animation 并自动播放
        setAndPlay: function (animation, loop, start, end) {
            if (loop === undefined) loop = true;
            if (start === undefined) start = 0;
            if (end === undefined) end = 1;
            
            animation = typeof animation == 'string' ? this.animations[animation] : animation;
            this.curAnimation = animation;
            
            animation.forEach(function (o) {
                o.setRange(start, end);
                o.rewind();
                o.play(loop);
            });
            
            animation[0].setCallback(L.curry(this.onAnimationEvent, this));
        },
        onAnimationEvent: function (evt, anim) {
            var me = this;
            
            switch (evt) {
                case "stopped" : this.fsm.message(woh.roleMessages.animStopped); break;
                case "standup": 
                    with(this.getPos())
                         this.stage.registerHurtableObject(me,me.data["areadata"]["standup"],{x:x-82,y:y-120});
                    break;
                case "standdown":
                    with(this.getPos())
                         this.stage.registerHurtableObject(me,me.data["areadata"]["standdown"],{x:x-82,y:y-120});
                    break;
                case "end_attack" : this.endAttack(); break;
            }

            this.fsm.message(evt, anim);
        },
        update: function (dt) {
            this.fsm.update(dt);
            this.curAnimation && this.curAnimation.forEach(function (o) { 
                o.update(dt) 
            });
            
        },
        draw: function (render) {
            var x = Math.floor(this.x), y = Math.floor(this.y),
                me = this;
            this.curAnimation && this.curAnimation.forEach(function (o) { 
                ((me.face == 'left' && !o.renderMirrored) || (me.face == 'right' && o.renderMirrored)) && o.mirror();
                o.draw(render, x, y, 0, 1, null); 
            });
            this.drawHPBar(render);
        },
        pressEnd: function () {
            this.canMove = false;
        },
        startAttack: function (type) {
        
        },
        endAttack: function () {
            //todo
            this.setInvulnerable(false);
        },
        // 可能某些时候人物是无敌的，比如处于攻击状态的时候 
        setInvulnerable: function (bool) {
            
        },
        getPos: function () {
            return {
                x: this.x,
                y: this.y
            }
        },
        setPos: function (x, y) {
            this.x = x;
            this.y = y;
            this.checkRect.setPos(x, y);
            this.brain.knowPos(this,x,y);
        },
        faceLeft: function () {
            this.face = 'left';
        },
        faceRight: function () {
            this.face = 'right';
        },
        
        stand: function () {
            this.toPos = null;
            this.fsm.setState(woh.roleStates.stand);
        },
        moveTo: function (x, y) {
            x > this.x ? this.faceRight() : this.faceLeft();
            this.toPos = {x: x, y: y-60};
            this.fsm.setState(woh.roleStates.run);
        },
        normalAttack: function () {
            this.fsm.setState(woh.roleStates.attack);
        },
        hurted: function (damage) {
            this.life -= damage;
            this.fsm.setState(woh.roleStates.hurted);
        },
        drawHPBar: function (render) {
            var ctx = render.context;
            var x = this.x - this.bloodBarW / 2 ;
            var y = this.y - this.checkRect.height+10;
            //console.log(this.bloodBarW,this.checkRect.height);
            var border = 2;
            ctx.save();
            ctx.globalAlpha = 0.7;
            ctx.lineCap = "round";


            ctx.beginPath();
            ctx.lineWidth = this.bloodBarH+border*2;
            ctx.strokeStyle = '#000';
            ctx.moveTo(x - border,y );
            ctx.lineTo(x+border+this.bloodBarW,y);
            ctx.stroke();
            ctx.closePath();

            ctx.beginPath();
            ctx.lineWidth = this.bloodBarH ;
            ctx.strokeStyle = 'green';
            ctx.moveTo(x,y);
            ctx.lineTo(x+ this.bloodBarW*this.nowLife/this.life ,y);
            ctx.stroke();
            ctx.closePath();

            ctx.restore();
        },
    });
    this.Sprite = Sprite;

    

});
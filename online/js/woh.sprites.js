/**
 * 人物或者怪物 
 */

woh.roleAttackType = {
    normalAttack: 0,
    heavyAttack: 1
};
// Role
Laro.NS('woh', function (L) {
    
    /**
     * 从 config 里面获取到的人物数据 如下
         '001':{
            'name':'唐如',//名字
            'type':'002',//类型
            'lv':0,//等级(根据类型和等级读取其他数据)
            'avatar':'images/role/ava/ava_001.png',//头像
            'exp_current':0,//当前经验值
            'weapon':'001',//武器编号
            'clothes':'001',//衣服编号
            'skill_point':'0',//剩余技能点
            'skill_list':{
                '疾风刺':0, 
                '落英染':0,
                '浮云风卷':0,
                '醉舞秋红':0
            }//技能列表（编号-等级）
        }
    */
    var Sprite = L.Class(function (data) {
        var statesList = [
            woh.roleStates.stand, woh.roleStateClass.Stand,
            woh.roleStates.run, woh.roleStateClass.Run,
            woh.roleStates.normlAttack, woh.roleStateClass.NormalAttack,
            woh.roleStates.hurt, woh.roleStateClass.Hurted,
            woh.roleStates.magic, woh.roleStateClass.Magic,
            woh.roleStates.dead, woh.roleStateClass.Dead,
        ];
        
        this.data = data;
        this.bloodBarW=this.data.bloodBarW||150;
        L.extend(this, data);
        // 不用 Vector 操作，在大数据量操作的时候会快些
        this.x = 0;
        this.y = 0;
        this.movement = new L.Vector2(0, 0);
        this.fsm = new L.AppFSM(this, statesList);
        // 当前animation
        this.animations = {};
        this.curAnimation = null;
        
        // 是否可移动标志
        this.canMove = false;
        this.face = 'right';
        
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
            
            // this.checkRect.addEventListener('mousedown', function (x, y) {
            //     me.canMove = true;
            // });
        },
        getAnimationGroup: function (type) {
            L.$lea.setLoader(woh.loader);
            
            var obj = [
                woh.g_config.clothes[this.data['clothes']][type],
                woh.g_config.weapon[this.data['weapon']][type],
            ],
                ret = [];
            if (!Array.isArray(obj)) {
                obj = [obj];
            }
            L.$lea.setSourceObj(obj);
            for (var i = 0; i < obj.length; i ++) {
                ret.push(L.$lea.getAnimation(i));
            }
            
            return ret;
        },
        getAnimations: function () {
            this.animations.stand = this.getAnimationGroup('stand');
            this.animations.run = this.getAnimationGroup('run');
            this.animations.hurt = this.getAnimationGroup('hurt');
            this.animations.attack = this.getAnimationGroup('attack');
            this.animations.magic=this.getAnimationGroup('magic');
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
            var ctx = render.context;
        },
        //绘制血条
        drawBloodBar: function (render) {
            var ctx = render.context;
            console.log(ctx);
            var x = this.x - this.bloodBarW / 2 ;
            var y = this.y - this.height-20;
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
            this.fsm.setState(woh.roleStates.move);
        },
        normalAttack: function () {
            this.fsm.setState(woh.roleStates.normalAttack);
        },
        hurted: function (damage) {
            this.life -= damage;
            this.fsm.setState(woh.roleStates.hurted);
        }
    
    });
//由基础精灵类派生出人物类
    var Role=Sprite.extend(function(){
        //根据等级和装备计算人物的相应数据
        this.nowLife=this.life=1000;//生命
        this.attack=0;//攻击
        this.miss=0;//闪避
        
        //防御
    }).methods({
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
            
            this.checkRect.addEventListener('mousedown', function (x, y) {
                me.canMove = true;
            });
        },
        draw: function (render) {
            var x = Math.floor(this.x), y = Math.floor(this.y),
                me = this;
            // draw circle & pie ==> 这里的数据也要提出去
            if (this.canMove) {
                render.context.drawImage(woh.loader.loadedImages['images/circle.png'], this.x-60, this.y+20);
                render.context.drawImage(woh.loader.loadedImages['images/pie.png'], woh.STAGE_MOUSE_POS.x-38, woh.STAGE_MOUSE_POS.y-23);
                render.drawLine(this.x, this.y+45, woh.STAGE_MOUSE_POS.x, woh.STAGE_MOUSE_POS.y, '#fff')
            }
            this.drawBloodBar(render);
            this.curAnimation && this.curAnimation.forEach(function (o) { 
                ((me.face == 'left' && !o.renderMirrored) || (me.face == 'right' && o.renderMirrored)) && o.mirror();
                o.draw(render, x, y, 0, 1, null); 
            });
        },
    });
    var Monster=Sprite.extend(function(){
        //相同等级的小怪各项属性分别是同类型人物属性的减半

    }).methods({

    });

    this.Role = Role;
    this.Monster=Monster;
});
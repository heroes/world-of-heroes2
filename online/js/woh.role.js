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
                '落英旋':0,
                '浮云风卷':0,
                '醉舞秋红':0
            }//技能列表（编号-等级）
        }
    */
    var Role = L.Class(function (data, uid) {
        var statesList = [
            woh.roleStates.stand, woh.roleStateClass.Stand,
            woh.roleStates.move, woh.roleStateClass.Move,
            woh.roleStates.normlAttack, woh.roleStateClass.NormalAttack,
            woh.roleStates.hurt, woh.roleStateClass.Hurt,
            woh.roleStates.skill, woh.roleStateClass.Skill,
            woh.roleStates.dead, woh.roleStateClass.Dead,
        ];
        
        this.data = data;
        this.uid = uid;
        L.extend(this, data);
        this.life = this.data.life || 1000;
        this.pos = new L.Vector2(0, 0);
        this.movement = new L.Vector2(0, 0);
        this.fsm = new L.AppFSM(this, statesList);
        // 当前animation
        this.animations = {};
        this.curAnimation = null;
        
        this.born();
    }).methods({
        born: function () {
            this.getAnimations();
            this.stand(); // 默认进入站立状态
        },
        getAnimationGroup: function (type) {
            L.$lea.setLoader(woh.loader);
            
            var obj = woh.g_config.sprites[this.uid][type],
                ret = [];
            if (!Array.isArray(obj)) {
                obj = [obj];
            }
            
            L.$lea.setSourceObj(obj);
            obj.forEach(function (o, i) {
                ret.push(L.$lea.getAnimation(i));
            });
            
            return ret;
        },
        getAnimations: function () {
            this.animations.stand = this.getAnimationGroup('stand');
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
            switch (evt) {
                case "stopped" : this.fsm.message(woh.roleMessages.animStopped); break;
                case "end_attack" : this.endAttack(); break;
            }

            this.fsm.message(evt, anim);
        },
        update: function (dt) {
            this.fsm.update(dt);
            this.curAnimation && this.curAnimation.forEach(function (o) { o.update(dt) });
        },
        draw: function (render) {
            var x = Math.floor(this.pos.x), y = Math.floor(this.pos.y);
            this.curAnimation && this.curAnimation.forEach(function (o) { o.draw(render, x, y, 0, 1, null) });
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
        
        },
        setPos: function (pos) {
        
        },
        faceLeft: function () {
        
        },
        faceRight: function () {
        
        },
        
        stand: function () {
            this.fsm.setState(woh.roleStates.stand);
        },
        move: function () {
            this.fsm.setState(woh.roleStates.move);
        },
        normalAttack: function () {
            this.fsm.setState(woh.roleStates.normalAttack);
        },
        hurt: function (damage) {
            this.life -= damage;
            this.fsm.setState(woh.roleStates.hurt);
        }
    
    });
    
    this.Role = Role;

});
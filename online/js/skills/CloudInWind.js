/**
 * 技能影响
 */
Laro.NS('woh', function (L) {
    var CloudInWind = woh.SkillEffect.extend(function (caster,stage,data) {
        this.caster = caster;
        var loop,start,end;
        this.curAnimation = this.getAnimationGroup();
        
        if (loop === undefined) loop = true;
        if (start === undefined) start = 0;
        if (end === undefined) end = 1;


        //console.log("当前动画",animation);
        this.curAnimation.forEach(function (o) {
            o.setRange(start, end);
            o.rewind();
            o.play(loop);
        });
            
        this.t = 0;
        this.stage = stage;
        
    }).methods({
        getAnimationGroup: function (type) {
            L.$lea.setLoader(woh.loader);

            var obj = woh.g_config.skill_effect['003']['animation'];
            ret = [];
            if (!Array.isArray(obj)) {
                obj = [obj];
            }
            L.$lea.setSourceObj(obj);
            for (var i = 0; i < obj.length; i++) {
                ret.push(L.$lea.getAnimation(i));
            }

            return ret;
        },
        update: function(dt){
            this.supr(dt);
            this.t += dt;
            if(this.t>2) {
                this.stage.kill(this);
            }
        },
        draw: function (render) {
            me = this;
            me.curAnimation && me.curAnimation.forEach(function (o) {
                 o.draw(render, me.caster.x,me.caster.y, 0, 1, null);
            });
        }
    });
    this.CloudInWind  = CloudInWind ;
});
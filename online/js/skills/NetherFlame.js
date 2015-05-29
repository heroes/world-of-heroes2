/**
 * ����Ӱ��
 */
Laro.NS('woh', function (L) {
    var NetherFlame = woh.SkillEffect.extend(function (caster,stage,data,level) {
        var loop,start,end;
        this.curAnimation = this.getAnimationGroup();
        
        if (loop === undefined) loop = true;
        if (start === undefined) start = 0;
        if (end === undefined) end = 1;


        //console.log("��ǰ����",animation);
        this.curAnimation.forEach(function (o) {
            o.setRange(start, end);
            o.rewind();
            o.play(loop);
        });
            
        this.t = 0;
        this.stage = stage;
        this.stage.roles._objects.forEach(function(o){
            var role = o.obj;
            if(role instanceof woh.Monster) {
                var damageData = {
                    damage:data.damage[level],
                    attacker:caster,
                    force:0
                };
                role.hurted(damageData);
            }
        })
    
    }).methods({
        getAnimationGroup: function (type) {
            L.$lea.setLoader(woh.loader);

            var obj = woh.g_config.skill_effect['005']['animation'];
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
            this.stage.roles._objects.forEach(function(o){
                var role = o.obj;
                if(role instanceof woh.Monster) {
                    console.log(role.x,role.y)
                    me.curAnimation && me.curAnimation.forEach(function (o) {
                        o.draw(render, role.x,role.y, 0, 1, null);
                    });
                }
            })

        }
    });
    this.NetherFlame = NetherFlame;
});
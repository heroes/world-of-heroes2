/**
 * battle
 */

Laro.NS('woh.stageClass', function (L) {
    var pkg = this;
    var Battle = L.BaseState.extend(function () {
        //console.log(pkg);
        // role collection
        this.roles = new woh.RoleCollection();
        woh.currentRoleGroup = this.roles;
        this.hurtables = {
            monster: [],
            role: []
        };
        this.data=null;
    }).methods({
        enter: function (data, from) { 
            woh.log('enter stage [Battle]');
            setTimeout(function () {woh.util.fadeIn(woh.els.canvasWrap)}, 500);

            woh.util.playOneSound(data.bgm);
            this.timeInState = 0;
            this.gameOverTime = 0;
            // temp part to do area
            var me = this;
            this.data=data;
            this.totalexp=0;
            // rio_tang
            this.aiController = new woh.AIController(this);
            woh.runtime.activeRole = [];
            var i = 0;

            data['role'].forEach(function (roleId) {
                woh.runtime.activeRole.push(woh.runtime.role[roleId]);
                me.roles.add(roleId, new woh.Role(woh.runtime.role[roleId], me.aiController));
                me.roles.get(roleId).stage = me;
                me.roles.get(roleId).setPos(400 - 120 * i++, 300-(i%2)*120);
            });
            //挑战模式下全部技能开启
            if(this.data.name=='battle_Infinity'){
                woh.runtime.role['001'].skill_list['001']=1;
                woh.runtime.role['001'].skill_list['002']=1;
                woh.runtime.role['001'].skill_list['003']=1;
            }
            //console.log("当前活动人物队列",woh.currentRoleGroup);
            this.activeLines = data.monster.length;
            data.monster.forEach(function (line) {
                function startWave(i) {
                    if (i >= line.length) {
                        me.activeLines--;
                        return;
                    }
                    var wave = line[i].slice();
                    var living = wave.length;
                    wave.forEach(function (data) {
                        var monster = new woh.Monster(woh.g_config.monsters[data.type], me.aiController);
                        monster.ondead = function () {
                            me.totalexp+=monster.data.exp;
                            living--;
                            if (living == 0)
                                startWave(i + 1);
                        };
                        monster.stage = me;
                        monster.setPos(data.x, data.y);
                        me.roles.add(Math.random().toFixed(10), monster);
                    });
                }
                startWave(0);
            })
        },
        transition: function () {
            if (this.aiController.players.length == 0&&this.data.name!='battle_Infinity') { 
                console.log(this.data.name);
                if (!this.gameOverTime) { this.gameOverTime = this.timeInState; }
            }
            else{
                if(this.activeLines == 0||(this.aiController.players.length == 0&&this.data.name=='battle_Infinity')){
                    woh.gameScript.continueExec();
                }
            }

            if (this.gameOverTime > 0 && this.timeInState - this.gameOverTime > 1.5) { 
                woh.stage.go('gameover', {replay: true});
                woh.util.fadeOut(woh.els.canvasWrap);
            }
        },
        leave: function () {
            woh.log('leave stage [battle]');
            //清空技能列表
            document.getElementById('role-skill-container').innerHTML="";
            //清空技能cd
            console.log('清空技能cd');
            for(var key in woh.runtime.cdCounter){
                var o=woh.runtime.cdCounter[key];
                    o.cd=false;
                    o.cdTime=woh.skill_data[key].cd;
            }
            console.log('清空技能cd结束');
            console.log(this.aiController);
            if(this.aiController.players.length != 0||(this.aiController.players.length == 0&&this.data.name=='battle_Infinity')){
                var result={
                    exp:this.totalexp,
                    roledata:woh.runtime.activeRole,
                    drop:this.data.drop
                };
                battleCount.init(result);
            }
            this.roles.remove();
        },
        update: function (dt) {
            this.timeInState += dt;
            if (this.aiController.players.length != 0) {
                this.roles.dispatch('update', dt);
            }
            //计算技能cd倒计时
            for(var key in woh.runtime.cdCounter){
                var o=woh.runtime.cdCounter[key];
                if(o.cd){
                    o.cdTime+=dt;
                    if(o.cdTime>=woh.skill_data[key].cd){o.cd=false;o.cdTime=woh.skill_data[key].cd;}
                    var _skillDom=document.querySelector('.battle-module .skill-icon[data-cmd="'+key+'"]');
                    if(_skillDom){
                        _skillDom.querySelector('.mask').style.height=100*(woh.skill_data[key].cd-o.cdTime>=0?woh.skill_data[key].cd-o.cdTime:0)/woh.skill_data[key].cd+"px";
                    }
                }
            }
        },
        draw: function (render) {
            if (this.timeInState > 0.5) {
                this.drawBg(render);
                // 把控制人物移动的pie和line放到这里draw，保证只在bg上面
                this.drawMovePie(render);
                this.drawMask(render);
                this.roles.dispatch('draw', render);
            }
        },
        drawBg: function (rd) {
            console.log(this.data['bg']);
            rd.context.drawImage(woh.loader.loadedImages[this.data['bg']], 0, 0);
        },
        drawMovePie: function (render) {
            if (woh.canMoveRole) {
                render.context.drawImage(woh.loader.loadedImages['images/pie.png'], woh.STAGE_MOUSE_POS.x - 38, woh.STAGE_MOUSE_POS.y - 23);
                render.drawLine(woh.canMoveRole.x, woh.canMoveRole.y+woh.canMoveRole.checkRect.height/2, woh.STAGE_MOUSE_POS.x, woh.STAGE_MOUSE_POS.y, '#fff');
            }
        },
        drawMask: function (rd) {
            pkg.Battle.ENABLE_MASK && rd.drawFillScreen('rgba(0,0,0,' + pkg.Battle.screenMaskAlpha + ')');
        },
        registerHurtableObject: function (type, obj, area) {
            //console.log([areas[0]+offset.x,areas[1]+offset.y,areas[2]+offset.x,areas[3]+offset.y]);
            if (this.hurtables[type].some(function (e) {
                if (e.obj == obj) {
                    e.areas = {
                        left: area.left,
                        top: area.top,
                        right: area.right,
                        bottom: area.bottom
                    };
                    return true;
                }
            })) return;

            this.hurtables[type].push({
                obj: obj,
                areas: {
                    left: area.left,
                    top: area.top,
                    right: area.right,
                    bottom: area.bottom
                }
            })
        },
        hurtArea: function (type, area, damage) {
            canvas = document.getElementById("canvas");
            function areaCross(area1, area2) {
                with (canvas.getContext("2d")){
                    strokeStyle = "red";
                    strokeRect(area1.left, area1.top, area1.right - area1.left, area1.bottom - area1.top);
                    strokeStyle = "blue";
                    strokeRect(area2.left, area2.top, area2.right - area2.left, area2.bottom - area2.top);
                }
                return (area1.top < area2.bottom && area2.top < area1.bottom) &&
                    (area1.left < area2.right && area2.left < area1.right);
            }

            this.hurtables[type].forEach(function (e) {
                if (areaCross(area, e.areas)) {
                    e.obj.hurted(damage);
                    return true;
                }
            })
        },
        kill: function (sprite) { 
            this.roles.remove(sprite);
            if (sprite.ondead) {
                sprite.ondead();
            }
        },
        createSkillEffect:function(caster,skill,level) {
            this.roles.add(Math.random().toFixed(10), new woh[skill.effect](caster,this,skill,level));
        }

    }).statics({
        // static methods
        // woh.stageClass.Battle.enableScreenMask();
        enableScreenMask: function (alpha) {
            this.screenMaskAlpha = alpha;
            this.ENABLE_MASK = true;
        },
        disableScreenMask: function () {
            this.ENABLE_MASK = false;
        }

    });

    this.Battle = Battle;
});
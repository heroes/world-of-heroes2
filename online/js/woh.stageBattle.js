/**
 * battle
 */

Laro.NS('woh.stageClass', function (L) {
    var pkg = this;
    var Battle = L.BaseState.extend(function () {
        // role collection
        this.roles = new woh.RoleCollection();
        woh.currentRoleGroup = this.roles;
        this.hurtables = {
            monster: [],
            role: []
        }

    }).methods({
        enter: function (data, from) {
            woh.log('enter stage [Battle]');
            woh.show(woh.els.canvasWrap);
            // temp part to do area
            var me = this;
            /*
            document.querySelector("body").onmouseup = function (e) {
            if (e.target.tagName != "CANVAS") return;
            var rect = e.target.getClientRects()[0];
            var offsetX = e.clientX - rect.left;
            var offsetY = e.clientY - rect.top;
            me.hurtArea({
            left: offsetX - 50,
            top: offsetY - 50,
            right: offsetX + 50,
            bottom: offsetY + 50
            }, e.target);
            }*/
            // rio_tang
            this.aiController = new woh.AIController(this);
            woh.runtime.activeRole = [];

            var me = this;
            var i = 0;
            data['role'].forEach(function (roleId) {
                woh.runtime.activeRole.push(woh.runtime.role[roleId]);
                me.roles.add(roleId, new woh.Role(woh.runtime.role[roleId], me.aiController));
                me.roles.get(roleId).setPos(400 - 120 * i++, 300);
                me.roles.get(roleId).stage = me;
            });

            this.activeLines = data.monster.length;
            data.monster.forEach(function (line) {

                function startWave(i) {
                    if (i >= line.length) {
                        me.activeLines--;

                        // if (me.activeLines == 0) {
                        //     //TODO:È«²¿½áÊø
                        //     alert("你被螃蟹君干掉了");
                        // }
                        return;
                    }
                    var wave = line[i].slice();
                    var living = wave.length;
                    wave.forEach(function (data) {
                        var monster = new woh.Monster(woh.g_config.monsters[data.type], me.aiController);
                        monster.ondead = function () {
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


            // this.roles.add('001', new woh.Role(woh.runtime.role['001'], this.aiController));
            // this.roles.get('001').setPos(100, 400);
            // this.roles.get('001').stage = this;
            // this.roles.add('sola_cheng', new woh.Role(woh.runtime.role['002'], this.aiController));
            // this.roles.get('sola_cheng').setPos(200, 400);
            // this.roles.get('sola_cheng').stage = this;
            // this.roles.add('attack_1', new woh.SkillEffect(woh.g_config.skill_effect.normal_1));
            // this.roles.get('attack_1').setPos(300, 300);
            // this.roles.get('attack_1').stage = this;
        },
        transition: function () {
            //this.timeInState > 2 && woh.gameScript.continueExec();
            this.activeLines == 0 && woh.gameScript.continueExec();
        },
        leave: function () {
            woh.log('leave stage [battle]');
            woh.hide(woh.els.canvasWrap);
        },
        update: function (dt) {
            this.roles.dispatch('update', dt);
        },
        draw: function (render) {
            this.drawBg(render);
            this.drawMask(render);
            this.roles.dispatch('draw', render);
        },
        drawBg: function (rd) {
            rd.context.drawImage(woh.loader.loadedImages['images/bg/bg-beach-dusk.jpg'], 0, 0);
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
                with (canvas.getContext("2d")) {
                    strokeStyle = "red";
                    strokeRect(area1.left, area1.top, area1.right - area1.left, area1.bottom - area1.top);
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
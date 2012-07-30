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
        };
        this.data=null;
    }).methods({
        enter: function (data, from) {
            woh.log('enter stage [Battle]');
            setTimeout(function () {woh.util.fadeIn(woh.els.canvasWrap)}, 500);
            this.timeInState = 0;
            // temp part to do area
            var me = this;
            this.data=data;
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
            var i = 0;
            data['role'].forEach(function (roleId) {
                woh.runtime.activeRole.push(woh.runtime.role[roleId]);
                me.roles.add(roleId, new woh.Role(woh.runtime.role[roleId], me.aiController));
                me.roles.get(roleId).stage = me;
                me.roles.get(roleId).setPos(400 - 120 * i++, 300-(i%2)*120);
            });

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
            this.activeLines == 0 && woh.gameScript.continueExec();
        },
        leave: function () {
            woh.log('leave stage [battle]');
            battleCount.init();
            this.roles.remove();
        },
        update: function (dt) {
            this.roles.dispatch('update', dt);
            this.timeInState += dt;
        },
        draw: function (render) {
            if (this.timeInState > 0.5) {
                this.drawBg(render);
                this.drawMask(render);
                this.roles.dispatch('draw', render);
            }
        },
        drawBg: function (rd) {
            rd.context.drawImage(woh.loader.loadedImages[this.data['bg']], 0, 0);
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
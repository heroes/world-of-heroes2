/**
 * battle for hongru
 */

Laro.NS('woh.stageClass', function (L) {
    var pkg = this;
    var Battle = L.BaseState.extend(function () {
        // role collection
        this.roles = new woh.RoleCollection();
        woh.currentRoleGroup = this.roles;
        this.hurtables = [];

    }).methods({
        enter: function (msg, from) {
            woh.log('enter stage [battle] with msg ' + msg);
            woh.show(woh.els.battle);

            woh.log('enter stage [Battle] with msg ' + msg);
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
            this.aiController = {
                knowPos: function (obj, x, y) {
                    if(obj == me.roles.get('rio_tang')) {
                        var crab = me.roles.get('crab');
                        if(!crab) return;
                        var crabpos = crab.getPos();
                        if(crabpos.x-x>0)
                            crab.moveTo(x+100,y+50);
                        else if(crabpos.x-x<0)
                            crab.moveTo(x-100,y+50);
                    }
                    if(obj == me.roles.get('sola_cheng')) {
                        var crab = me.roles.get('crab');
                        if(!crab) return;
                        var crabpos = crab.getPos();
                        if(crabpos.x-x>0)
                            crab.moveTo(x+100,y+50);
                        else if(crabpos.x-x<0)
                            crab.moveTo(x-100,y+50);
                    }

                    var rio = me.roles.get('rio_tang');
                    var crab = me.roles.get('crab');
                    if(!crab) return;
                    if(!rio) return;
                    var crabpos = crab.getPos();
                    var riopos = rio.getPos();
                    if(riopos.x-crab.x<120 && riopos.x-crab.x>0 && Math.abs(riopos.y-crab.y)<60) {
                        crab.faceRight();
                        crab.normalAttack();
                    }
                   if(riopos.x-crab.x>-120 && riopos.x-crab.x<0 && Math.abs(riopos.y-crab.y)<60) {
                        crab.faceLeft();
                        crab.normalAttack();
                    }
                },
                knowSprite: function (obj) {
                    
                },
            }
            this.roles.add('rio_tang', new woh.Role(woh.runtime.role['001'], this.aiController));
            this.roles.get('rio_tang').setPos(100, 400);
            this.roles.get('rio_tang').stage = this;
            this.roles.add('sola_cheng', new woh.Role(woh.runtime.role['002'], this.aiController));
            this.roles.get('sola_cheng').setPos(200, 400);
            this.roles.get('sola_cheng').stage = this;
            this.roles.add('crab', new woh.Monster(woh.g_config.monsters.crab, this.aiController));
            this.roles.get('crab').setPos(500, 400);
            this.roles.get('crab').stage = this;

        },
        leave: function () {
            woh.log('leave stage [battle]');
            woh.hide(woh.els.battle);
        },
        update: function (dt) {
            this.timeInState += dt;

        },
        transition: function () {
            //this.timeInState > 2 && woh.gameScript.continueExec();
            this.timeInState > Infinity && woh.gameScript.continueExec();
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
            this.roles.dispatch('draw', render);
        },
        drawBg: function (rd) {
            rd.context.drawImage(woh.loader.loadedImages['images/bg/bg-beach-dusk.jpg'], 0, 0);
        },
        registerHurtableObject: function (obj, areas, offset) {
            //console.log([areas[0]+offset.x,areas[1]+offset.y,areas[2]+offset.x,areas[3]+offset.y]);
            if (this.hurtables.some(function (e) {
                if (e.obj == obj) {
                    e.areas = {
                        left: areas[0] + offset.x,
                        top: areas[1] + offset.y,
                        right: areas[2] + offset.x,
                        bottom: areas[3] + offset.y
                    };
                    return true;
                }
            })) return;

            this.hurtables.push({
                obj: obj,
                areas: {
                    left: areas[0] + offset.x,
                    top: areas[1] + offset.y,
                    right: areas[2] + offset.x,
                    bottom: areas[3] + offset.y
                }
            })
        },
        hurtArea: function (area) {
            canvas = document.getElementById("canvas");
            function areaCross(area1, area2) {
                with (canvas.getContext("2d")) {
                    strokeRect(area1.left, area1.top, area1.right - area1.left, area1.bottom - area1.top);
                    strokeRect(area2.left, area2.top, area2.right - area2.left, area2.bottom - area2.top);
                }
                return (area1.top < area2.bottom && area2.top < area1.bottom) &&
                    (area1.left < area2.right && area2.left < area1.right);
            }

            this.hurtables.forEach(function (e) {
                if (areaCross(area, e.areas)) {
                    e.obj.hurted(1);
                    return true;
                }
            })
        }
    });
    this.Battle = Battle;
});
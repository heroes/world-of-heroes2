

Laro.NS('woh', function (L) {

    function computeDistance(pos1, pos2) {
        return Math.sqrt(Math.pow(pos1.x - pos2.x, 2) + Math.pow(pos1.y - pos2.y, 2));
    }

    var AIController = L.Class(function (me) {
        this.me = me;
        this.monsters = [];
        this.players = [];
    }).methods({
        isPlayer: function (sprite) {
            return sprite instanceof woh.Role;
        },
        isMonster: function (sprite) {
            return sprite instanceof woh.Monster;
        },
        updateMonsterTarget: function (monster) {
            var nearest = null;
            var nearestDistance = Infinity;
            var monsterPos = monster.getPos();
            var me = this;
            this.players.forEach(function (player) {
                var playerPos = player.getPos();
                var distance = computeDistance(playerPos, monsterPos)
                if (distance < nearestDistance) {
                    nearest = player;
                    nearestDistance = distance;
                }
            });
            if (nearest) {
                var nearestPos = nearest.getPos();

                if (monsterPos.x - nearestPos.x > 0)
                    monster.moveTo(nearestPos.x + 100, nearestPos.y + 50);
                else if (monsterPos.x - nearestPos.x < 0)
                    monster.moveTo(nearestPos.x - 100, nearestPos.y + 50);

                if (nearestPos.x - monsterPos.x < 120 && nearestPos.x - monsterPos.x > 0 && Math.abs(nearestPos.y - monsterPos.y) < 60) {
                    monster.faceRight();
                    monster.normalAttack();
                }
                if (nearestPos.x - monsterPos.x > -120 && nearestPos.x - monsterPos.x < 0 && Math.abs(nearestPos.y - monsterPos.y) < 60) {
                    monster.faceLeft();
                    monster.normalAttack();
                }
            }
        },
        knowPos: function (obj, x, y) {
            if (this.isMonster(obj)) {
                this.updateMonsterTarget(obj);
            }
            if (this.isPlayer(obj)) {
                var player = obj;
                var playerPos = player.getPos();
                var nearest = null;
                var nearestDistance = Infinity;
                var me = this;
                this.monsters.forEach(function (monster) {
                    var monsterPos = monster.getPos();
                    var distance = computeDistance(playerPos, monsterPos)
                    if (distance < nearestDistance) {
                        nearest = monster;
                        nearestDistance = distance;
                    }
                    me.updateMonsterTarget(monster);
                });

                if (nearest) {
                    var nearestPos = nearest.getPos();
                    if (player.fsm.getCurrentState().stateId != woh.roleStates.stand)
                        return;
                    if (nearestPos.x - playerPos.x < 120 && nearestPos.x - playerPos.x > 0 && Math.abs(nearestPos.y - playerPos.y) < 60) {
                        player.faceRight();
                        player.normalAttack();
                    }
                    if (nearestPos.x - playerPos.x > -120 && nearestPos.x - playerPos.x < 0 && Math.abs(nearestPos.y - playerPos.y) < 60) {
                        player.faceLeft();
                        player.normalAttack();
                    }
                }
            }

            /*
            var me = this.me;
            if (obj == me.roles.get('rio_tang')) {
            var crab = me.roles.get('crab');
            if (!crab) return;
            var crabpos = crab.getPos();
            if (crabpos.x - x > 0)
            crab.moveTo(x + 100, y + 50);
            else if (crabpos.x - x < 0)
            crab.moveTo(x - 100, y + 50);
            }
            if (obj == me.roles.get('sola_cheng')) {
            var crab = me.roles.get('crab');
            if (!crab) return;
            var crabpos = crab.getPos();
            if (crabpos.x - x > 0)
            crab.moveTo(x + 100, y + 50);
            else if (crabpos.x - x < 0)
            crab.moveTo(x - 100, y + 50);
            }

            var rio = me.roles.get('rio_tang');
            var crab = me.roles.get('crab');
            if (!crab) return;
            if (!rio) return;
            var crabpos = crab.getPos();
            var riopos = rio.getPos();
            if (riopos.x - crab.x < 120 && riopos.x - crab.x > 0 && Math.abs(riopos.y - crab.y) < 60) {
            crab.faceRight();
            crab.normalAttack();
            }
            if (riopos.x - crab.x > -120 && riopos.x - crab.x < 0 && Math.abs(riopos.y - crab.y) < 60) {
            crab.faceLeft();
            crab.normalAttack();
            }
            */
        },
        knowSprite: function (obj) {
            if (this.isPlayer(obj))
                this.players.push(obj);
            if (this.isMonster(obj))
                this.monsters.push(obj);
        }
    });
    this.AIController = AIController;
});
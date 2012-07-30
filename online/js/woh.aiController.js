

Laro.NS('woh', function (L) {

    function computeDistance(pos1, pos2) {
        return Math.sqrt(Math.pow(pos1.x - pos2.x, 2) + Math.pow(pos1.y - pos2.y, 2));
    }
    function areaCross(area1, area2) {
        return (area1.top < area2.bottom && area2.top < area1.bottom) &&
            (area1.left < area2.right && area2.left < area1.right);
    }
    function canAttack(sprite1,sprite2) {
        return areaCross(sprite1.damageArea,sprite2);
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
            if(monster.locked)
                return;
            var nearest = null;
            var nearestDistance = Infinity;
            var monsterPos = monster.getPos();
            var me = this;
            this.players.forEach(function (player) {
                var playerPos = player.getPos();
                var distance = computeDistance(playerPos, monsterPos);
                if (distance < nearestDistance) {
                    nearest = player;
                    nearestDistance = distance;
                }
            });
            if (nearest) {
                var nearestPos = nearest.getPos();

                var monsterFace = monster.face;

                monster.faceRight();
                if (canAttack(monster,nearest)) {
                    monster.normalAttack();
                    return ;
                }
                monster.faceLeft();
                if (canAttack(monster,nearest)) {
                    monster.normalAttack();
                    return;
                }

                    monster.face = monsterFace;

                if (monsterPos.x - nearestPos.x > 0)
                    monster.moveTo(nearestPos.x + 10, nearestPos.y );
                else if (monsterPos.x - nearestPos.x < 0)
                    monster.moveTo(nearestPos.x - 10, nearestPos.y );

 
            }
        },
        updatePlayerTarget:function(player) {
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
                });

                if (nearest) {
                    var nearestPos = nearest.getPos();
                    if (player.fsm.getCurrentState().stateId != woh.roleStates.stand)
                        return;
                    var playerFace = player.face;

                    player.faceRight();
                    if (canAttack(player,nearest)) {
                        player.normalAttack();
                        return ;
                    }
                    player.faceLeft();
                    if (canAttack(player,nearest)) {
                        player.normalAttack();
                        return;
                    }

                    player.face = playerFace;
                }
        },
        knowPos: function (obj, x, y) {
            if (this.isMonster(obj)) {
                this.updateMonsterTarget(obj);
            }
            if (this.isPlayer(obj)) {
                var me = this;
                this.monsters.forEach(function (monster) {
                    me.updateMonsterTarget(monster);
                });
                this.updatePlayerTarget(obj);
            }
        },
        knowSprite: function (obj) {
            if (this.isPlayer(obj))
                this.players.push(obj);
            if (this.isMonster(obj))
                this.monsters.push(obj);
        },
        knowDie: function (obj) {
            if (this.isPlayer(obj)) {
                this.players = this.players.filter(function (e) { return e != obj });
                this.monsters.forEach(function (monster) {
                    me.updateMonsterTarget(monster);
                });
            }
            if (this.isMonster(obj)) {
                this.monsters = this.monsters.filter(function (e) { return e != obj });
                var me =this;
                this.players.forEach(function (player) {
                    me.updatePlayerTarget(obj);
                });
            }
        }
    });
    this.AIController = AIController;
});
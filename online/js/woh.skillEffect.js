/**
 * 技能影响
 */
 Laro.NS('woh', function (L) {


    var SkillEffect = woh.Sprite.extend(function () {
        this.speed = 100;
    }).methods({
        getAnimationGroup: function (type) {
            L.$lea.setLoader(woh.loader);

            var obj = this.data[type];
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
        initCheckArea: function () {
            // ¿É²Ù×÷ÇøÓò == > ÕâÒ»²¿·ÖÊý¾ÝÐèÒª Ìáµ½ ÈËÎïÊý¾ÝÅäÖÃ ÀïÃæÈ¥£¬ ÕâÀïÄ¿Ç°ÔÝÊ±ÏÈÐ´ËÀ
            var me = this;
            this.checkRect = new L.Sprite(woh.stage.$, function () {
                this.width = 100;
                this.height = 120;

                this.setPos = function (x, y) {
                    // ÒòÎª sprite Ä¬ÈÏÊÇ»­ÔÚÖÐÐÄµÄ£¬ËùÒÔ Ò²ÐèÒª¼ÓÉÏÆ«ÒÆÁ¿
                    this.x = x - 50;
                    this.y = y - 60;
                };

                this.setPos(me.x, me.y);
                // dev Ä£Ê½£¬¿ÉÒÔÏÔÊ¾¿ÉÒÔ²Ù×÷µÄÇøÓò£¬ÕýÊ½µÄÊ±ºò°ÑdrawÈ¥µô
                this.draw = function (rd) {
                    rd.drawRect(0, 0, this.width, this.height, '#000');
                }
            });
        },
        draw: function (render) {
            var x = Math.floor(this.x), y = Math.floor(this.y),
                me = this;

            this.curAnimation && this.curAnimation.forEach(function (o) {
                ((me.face == 'left' && !o.renderMirrored) || (me.face == 'right' && o.renderMirrored)) && o.mirror();
                o.draw(render, x, y, 0, 1, null);
            });
            this.drawHPBar(render);
            //console.log(ctx);

        },

        normalAttack: function () {
            this.fsm.setState(woh.roleStates.attack);
        }
    });
    this.SkillEffect = SkillEffect;
});
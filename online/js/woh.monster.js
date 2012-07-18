/**
 * ÈËÎï»òÕß¹ÖÎï 
 */


Laro.NS('woh', function (L) {


    var Monster = woh.Sprite.extend(function () {
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
        draw: function (render) {
            var x = Math.floor(this.x), y = Math.floor(this.y),
                me = this;

            this.curAnimation && this.curAnimation.forEach(function (o) {
                ((me.face == 'left' && !o.renderMirrored) || (me.face == 'right' && o.renderMirrored)) && o.mirror();
                o.draw(render, x, y, 0, 1, null);
            });
            this.drawHPBar(render); //绘制血条
        },

        normalAttack: function () {

            this.fsm.setState(woh.roleStates.attack);
        }
    });
    this.Monster = Monster;
});
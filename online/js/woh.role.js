Laro.NS('woh', function (L) {
    var Role = this.Sprite.extend(function () {
        this.speed = 200;
    }).methods({
        initCheckArea: function () {
            var me = this;
            this.checkRect = new L.Sprite(woh.stage.$, function () {
                this.width = me.data['width'];
                this.height = me.data['height'];

                this.setPos = function (x, y) {
                    this.x = x - this.width/2;
                    this.y = y - this.height/2;
                };

                this.setPos(me.x, me.y);
                this.draw = function (rd) {
                     rd.drawRect(0, 0, this.width, this.height, '#000');
                }
            });

            this.checkRect.addEventListener('mousedown', function (x, y) {
                me.canMove = true;
                woh.skills.show(me.data.type);
            });
        },
        draw: function (render) {
            var x = Math.floor(this.x), y = Math.floor(this.y),
                me = this;
            if (this.canMove) {
                render.context.drawImage(woh.loader.loadedImages['images/circle.png'], this.x - me.checkRect.width/2, this.y+me.checkRect.height/2-30);
                render.context.drawImage(woh.loader.loadedImages['images/pie.png'], woh.STAGE_MOUSE_POS.x - 38, woh.STAGE_MOUSE_POS.y - 23);
                render.drawLine(this.x, this.y+me.checkRect.height/2, woh.STAGE_MOUSE_POS.x, woh.STAGE_MOUSE_POS.y, '#fff')
            }
            this.curAnimation && this.curAnimation.forEach(function (o) {
                ((me.face == 'left' && !o.renderMirrored) || (me.face == 'right' && o.renderMirrored)) && o.mirror();
                o.draw(render, x, y, 0, 1, null);
            });
            this.drawHPBar(render);
            //console.log(ctx);

        },
        getAnimationGroup: function (type) {
            L.$lea.setLoader(woh.loader);
            var obj = [
                woh.g_config.clothes[this.data['clothes']][type],
                woh.g_config.weapon[this.data['weapon']][type],
            ],
                ret = [];
            if (!Array.isArray(obj)) {
                obj = [obj];
            }
            L.$lea.setSourceObj(obj);
            for (var i = 0; i < obj.length; i ++) {
                ret.push(L.$lea.getAnimation(i));
            }
            
            return ret;
        },
    });
    this.Role = Role;
});
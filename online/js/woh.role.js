Laro.NS('woh', function (L) {
    var Role = this.Sprite.extend(function () {
        this.speed = 200;
    }).methods({
        initCheckArea: function () {
            // 可操作区域 == > 这一部分数据需要 提到 人物数据配置 里面去， 这里目前暂时先写死
            var me = this;
            this.checkRect = new L.Sprite(woh.stage.$, function () {
                this.width = 100;
                this.height = 120;

                this.setPos = function (x, y) {
                    // 因为 sprite 默认是画在中心的，所以 也需要加上偏移量
                    this.x = x - 50;
                    this.y = y - 60;
                };

                this.setPos(me.x, me.y);
                // dev 模式，可以显示可以操作的区域，正式的时候把draw去掉
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
            // draw circle & pie ==> 这里的数据也要提出去
            if (this.canMove) {
                render.context.drawImage(woh.loader.loadedImages['images/circle.png'], this.x - 60, this.y + 20);
                render.context.drawImage(woh.loader.loadedImages['images/pie.png'], woh.STAGE_MOUSE_POS.x - 38, woh.STAGE_MOUSE_POS.y - 23);
                render.drawLine(this.x, this.y + 45, woh.STAGE_MOUSE_POS.x, woh.STAGE_MOUSE_POS.y, '#fff')
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
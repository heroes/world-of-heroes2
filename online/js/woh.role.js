Laro.NS('woh', function (L) {
    var Role = this.Sprite.extend(function () {
        this.speed = 200;
        this.enemy = "monster";
        var rate_info=woh.skill_rate[this.data['type']],
        level_info=woh.base_level_data[this.data['lv']];
        //根据偏移百分比计算出人物的各项基础数值
        var health=rate_info['health']*level_info['health'],
        attack=rate_info['attack']*level_info['attack'],
        defend=rate_info['defend']*level_info['defend'],
        crit=rate_info['crit']*level_info['crit'];
        //加上装备的加成值
        //武器的加成值
        if(this.data['weapon']!='none'){
            var weapon=woh.item_data['weapon'][this.data['weapon']];
                health+=weapon['health'];
                attack+=weapon['attack'];
                defend+=weapon['defend'];
                crit+=weapon['crit'];
        }
        //衣服的加成值
        if(this.data['clothes']!='none'){
            var clothes=woh.item_data['clothes'][this.data['clothes']];
                health+=clothes['health'];
                attack+=clothes['attack'];
                defend+=clothes['defend'];
                crit+=clothes['crit'];
        }
        //计算人物的生命
        this.currentHP = health || 1000;
        this.maxHP = health || 1000;
        this.damage=attack;
        this.defend=defend;
        this.crit=crit;
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
                // this.draw = function (rd) {
                //      rd.drawRect(0, 0, this.width, this.height, '#000');
                // }
            });

            function onTapDown (x, y) {
                woh.STAGE_MOUSE_POS = { x: me.x, y: (me.y+me.height/2) };
                me.canMove = true;
                woh.skills.show(me.data.type);
            }
            this.checkRect.addEventListener('mousedown', onTapDown);
            this.checkRect.addEventListener('touchstart', onTapDown);
        },
        draw: function (render) {
            var x = Math.floor(this.x), y = Math.floor(this.y),
                me = this;
            render.context.drawImage(woh.loader.loadedImages['images/shadow.png'], this.x - 60, this.y+me.height/2-40);
            if (this.canMove) {
                render.context.drawImage(woh.loader.loadedImages['images/circle.png'], this.x - 55, this.y+me.checkRect.height/2-30);
                render.context.drawImage(woh.loader.loadedImages['images/pie.png'], woh.STAGE_MOUSE_POS.x - 38, woh.STAGE_MOUSE_POS.y - 23);
                render.drawLine(this.x, this.y+me.checkRect.height/2, woh.STAGE_MOUSE_POS.x, woh.STAGE_MOUSE_POS.y, '#fff')
            }
            this.curAnimation && this.curAnimation.forEach(function (o) {
                ((me.face == 'left' && !o.renderMirrored) || (me.face == 'right' && o.renderMirrored)) && o.mirror();
                o.draw(render, x, y, 0, 1, null);
            });             /***debug***/
            render.context.fillStyle = "blue";
            render.context.fillRect(this.x - 2, this.y - 2, 4, 4);
            render.context.strokeStyle = "green";
            render.context.strokeRect(this.left, this.top, this.width, this.height);
            render.context.strokeStyle = "red";
            render.context.strokeRect(this.damageArea.left, this.damageArea.top, this.damageArea.right - this.damageArea.left, this.damageArea.bottom - this.damageArea.top)
            /***********/
            this.drawHPBar(render);
            //console.log(ctx);
        },
        initSkills:function(){

        },
        getAnimationGroup: function (type) {
            L.$lea.setLoader(woh.loader);
            var obj = [
                woh.g_config.clothes[this.data['clothes']][type],
            ],ret = [];
            var weapon = woh.g_config.weapon[this.data['weapon']][type];
            if(weapon)
                obj.push(weapon);

            if (!Array.isArray(obj)) {
                obj = [obj];
            }
            L.$lea.setSourceObj(obj);
            for (var i = 0; i < obj.length; i ++) {
                ret.push(L.$lea.getAnimation(i));
            }
            return ret;
        },
        setPos: function(x, y){
            this.x = x;
            this.y = y;
            this.checkRect.setPos(x, y);
            this.brain.knowPos(this,x,y);
            if(this.stage)
                this.stage.registerHurtableObject("role", this,{left:this.left,right:this.right,top:this.top,bottom:this.bottom});
        },
    });
    this.Role = Role;
});
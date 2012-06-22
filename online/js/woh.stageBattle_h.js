/**
 * battle for hongru
 */

Laro.NS('woh.stageClass', function (L) {
    var pkg = this;
    var Battle = L.BaseState.extend(function () {
        this.objects = [];
 	
    }).methods({
        enter: function (msg, from) {
            woh.log('enter stage [battle] with msg ' + msg);
            woh.show(woh.els.battle);

            woh.log('enter stage [Battle] with msg ' + msg);
            woh.show(woh.els.canvasWrap);
            
            // rio_tang
            this.rio_tang = new woh.Role(woh.role_init_data['001'], '001');
            this.rio_tang.pos.add(new L.Vector2(200, 400));
            
            this.timeInState=0;
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
            this.rio_tang.update(dt);
        },
        draw: function (render) {
            this.drawBg(render);
            this.rio_tang.draw(render);
        },
        drawBg: function (rd) {
            rd.context.drawImage(woh.loader.loadedImages['images/bg/BG3.jpg'], 0, 0);
        }
    });
    this.Battle = Battle;
});
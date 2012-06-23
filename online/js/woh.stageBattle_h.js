/**
 * battle for hongru
 */

Laro.NS('woh.stageClass', function (L) {
    var pkg = this;
    var Battle = L.BaseState.extend(function () {
        // role collection
        this.roles = new woh.RoleCollection();
        woh.currentRoleGroup = this.roles;
 	
    }).methods({
        enter: function (msg, from) {
            woh.log('enter stage [battle] with msg ' + msg);
            woh.show(woh.els.battle);

            woh.log('enter stage [Battle] with msg ' + msg);
            woh.show(woh.els.canvasWrap);
            
            // rio_tang
            this.roles.add('rio_tang', new woh.Role(woh.role_init_data['001'], '001'));
            this.roles.get('rio_tang').setPos(200, 400);
            
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
            this.roles.dispatch('update', dt);
        },
        draw: function (render) {
            this.drawBg(render);
            this.roles.dispatch('draw', render);
        },
        drawBg: function (rd) {
            rd.context.drawImage(woh.loader.loadedImages['images/bg/BG3.jpg'], 0, 0);
        }
    });
    this.Battle = Battle;
});
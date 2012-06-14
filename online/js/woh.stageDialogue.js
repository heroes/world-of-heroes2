/* dialogue stage */

Laro.NS('woh.stageClass', function (L) {
    var pkg = this;

    var Dialogue = L.BaseState.extend(function () {
    
    }).methods({
        enter: function (msg, from) {
            woh.log('enter stage [dialogue] with msg ' + msg);
            woh.show(woh.els.dialogue)
            this.timeInState=0;
        },
        leave: function () {
            woh.log('leave stage [dialogue]');
            woh.hide(woh.els.dialogue);
        },
        update: function (dt) {
            this.timeInState += dt;
        },
        transition: function () {
            this.timeInState > 2 && woh.gameScript.continueExec();
        },
        draw: function (render) {}
    
    });

    this.Dialogue = Dialogue;

});

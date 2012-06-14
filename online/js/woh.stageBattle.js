/**
 * stage Battle Class
 */
Laro.NS('woh.stageClass', function (L) {
    var pkg = this;
    var Battle = L.BaseState.extend(function () {
    	
    }).methods({
    	enter: function (msg, from) {
            woh.log('enter stage [Battle] with msg ' + msg);
            woh.show(woh.els.battle)
            
        },
        leave: function () {
            woh.log('leave stage [battle]');
            woh.hide(woh.els.battle);
        },
        update: function (dt) {
        
        },
        transition: function () {
        
        },
        draw: function (render) {}
    });
    this.Battle = Battle;
});

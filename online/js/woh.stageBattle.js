/**
 * stage Battle Class
 */
Laro.NS('woh.stageClass', function (L) {
    var pkg = this;
    var Battle = L.BaseState.extend(function () {
    	
    }).methods({
    	enter: function (msg, from) {
            woh.log('enter stage [Battle] with msg ' + msg);
            woh.show(woh.els.cg)
            
        },
        leave: function () {},
        update: function (dt) {
        
        },
        transition: function () {
        
        },
        draw: function (render) {}
    });
    this.Battle = Battle;
});

/* dialogue stage */

Laro.NS('woh.stageClass', function (L) {
    var pkg = this;

    var Cg = L.BaseState.extend(function () {
    
    }).methods({
        enter: function (msg, from) {
            woh.log('enter stage [Cg] with msg ' + msg);
            woh.show(woh.els.cg)
            
        },
        leave: function () {
            woh.log('leave stage [cg]');
            woh.hide(woh.els.cg);
        },
        update: function (dt) {
        
        },
        transition: function () {
        
        },
        draw: function (render) {}
    
    });

    this.Cg = Cg;

});
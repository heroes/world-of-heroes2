Laro.NS('woh.stageClass', function (L) {
    var Cg = L.BaseState.extend(function () {
        var pkg = this;
    }).methods({
        enter: function (msg, from) {
            woh.log('enter stage [cg] with msg ' + msg);
            woh.show(woh.els.cg);
        },
        leave: function () {},
        update: function (dt) {
        
        },
        transition: function () {
        
        },
        draw: function (render) {}
    
    });
    this.Cg = Cg;
});
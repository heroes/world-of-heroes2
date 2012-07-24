/* dialogue stage */

Laro.NS('woh.stageClass', function (L) {
    var pkg = this;

    var Cg = L.BaseState.extend(function () {
    
    }).methods({
        enter: function (data, from) {
            woh.log('enter stage [Cg]');
            //woh.els.cg.innerHTML+="<img src='"+data[0]['path']+"''>";
            woh.show(woh.els.cg);
            
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
/* dialogue stage */

Laro.NS('woh.stageClass', function (L) {
    var pkg = this;

    var Dialogue = L.BaseState.extend(function () {
    
    }).methods({
        enter: function (msg, from) {
            woh.log('enter stage [dialogue] with msg ' + msg);
            woh.show(woh.els.dialogue)
            
        },
        leave: function () {},
        update: function (dt) {
        
        },
        transition: function () {
        
        },
        draw: function (render) {}
    
    });

    this.Dialogue = Dialogue;

});

/* dialogue stage */

Laro.NS('woh.stageClass', function (L) {
    var pkg = this;

    var Cg = L.BaseState.extend(function () {
    
    }).methods({
        enter: function (data, from) {
            woh.log('enter stage [Cg]');
            woh.els.cg.querySelector('img').src=data[0]['path'];
            woh.g_config.sound_play && woh.util.playOneSound('music/cg.mp3');
            woh.util.fadeIn(woh.els.cg);
        },
        leave: function () {
            woh.log('leave stage [cg]');
            woh.util.fadeOut(woh.els.cg);
        },
        update: function (dt) {
        
        },
        transition: function () {
        
        },
        draw: function (render) {}
    
    });

    this.Cg = Cg;

});
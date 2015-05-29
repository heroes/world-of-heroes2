/**
 * stage Gameover Class
 */

Laro.NS('woh.stageClass', function (L) {
    var pkg = this;

    var Gameover = L.BaseState.extend(function () {
    
    }).methods({
        enter: function (msg, from) {
            console.log('game over')
            console.log(msg);
            woh.util.fadeIn(woh.els.gameover);
            woh.g_config.sound_play&&woh.util.playOneSound('music/fail.mp3');
        },
        draw: function () {},
        update: function () {},
        leave: function () {
            woh.util.fadeOut(woh.els.gameover);
        }
    
    });

    this.Gameover = Gameover;

});

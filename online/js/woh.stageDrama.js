/**
 * stage Drama Class
 */

Laro.NS('woh.stageClass', function (L) {
    var pkg = this,
        dramaData = woh.stage_config.stage_drama,
        timeSpace = 500;

    var Drama = L.BaseState.extend(function () {
        this.timeInState = 0;
        this.msg = null;
        this.actTime = Number.MAX_VALUE;
        
    }).methods({
        enter: function (msg, from) {
            woh.log('enter stage [drama] with msg ' + msg);
            woh.show(woh.els.drama);
            this.msg = msg;
            var captionPlayer = new woh.CaptionPlayer();
            for (var i = 0; i < dramaData[msg]['caption'].length; i ++) {
                var caption = new woh.Caption(dramaData[msg]['caption'][i]);
                captionPlayer.add(caption);
            }
            captionPlayer.play();
            this.actTime = captionPlayer.totalTime / 1000;
        },
        leave: function () {
            woh.log('leave stage [drama]');
            woh.hide(woh.els.drama);
        },
        update: function (dt) {
            this.timeInState += dt;
        },
        transition: function () {
            this.timeInState > this.actTime && woh.stage.go('dialogue', 'first');
        },
        draw: function (render) {
        
        }
    
    });

    this.Drama = Drama;

});

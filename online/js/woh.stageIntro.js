/**
 * stage Intro Class
 */

Laro.NS('woh.stageClass', function (L) {
    var pkg = this;
    
    /*function prepare(textures) {
        var img = new Image();
        img.src = textures.index.src;
        img.width = woh.g_config.canvasWidth;
        img.height = woh.g_config.canvasHeight;
        woh.els.intro.appendChild(img);
        img.onload = fadeIn;
    }
    function fadeIn () {
        woh.hide(woh.els.loading);
        fx(woh.els.intro, {
            opacity: 1
        });
    }
    function fadeOut (cb) {
        fx(woh.els.intro, {
            opacity: 0,
            complete: function () {
                woh.hide(woh.els.intro);
                cb && cb();
            }
        })
    }*/

    var Intro = L.BaseState.extend(function () {
        this.timeInState = 0;        
    }).methods({
        enter: function (msg, fromState) {
            woh.hide(woh.els.loading);
            woh.log('enter stage [intro]');
            woh.show(woh.els.intro);
            //woh.els.intro.style['opacity'] = 0;
            //prepare(msg);
        },
        leave: function () {
            //woh.log('leave stage [intro]');
            woh.hide(woh.els.intro);
        },
        update: function (dt) {
            this.timeInState += dt;
        },
        transition: function () {
            //this.timeInState > 2 && woh.gameScript.continueExec();
        },
        draw: function () {
            // TODO
        }
    
    });

    this.Intro = Intro;

});

/**
 * stage Battle Class
 */
Laro.NS('woh.stageClass', function (L) {
    var pkg = this;
    var Battle = L.BaseState.extend(function () {
    	
    }).methods({
    	enter: function (msg, from) {
            woh.log('enter stage [Battle] with msg ' + msg);
            woh.show(woh.els.canvasWrap);
            
            L.$lea.setLoader(woh.loader);
            L.$lea.setSourceObj(woh.g_config.sprites);
            
            this.test_boss2 = L.$lea.getAnimation('boss_2');
            this.test_boss2.play();
            
        },
        leave: function () {
            woh.log('leave stage [battle]');
        },
        update: function (dt) {
            this.test_boss2.update(dt);
        },
        transition: function () {
        
        },
        draw: function (render) {
            this.test_boss2.draw(render, render.getWidth()/2, render.getHeight()/2, 0, 1, false);
        }
    });
    this.Battle = Battle;
});

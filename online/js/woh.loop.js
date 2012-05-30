/* woh loop */
Laro.NS('woh.loop', function (L) {
    
    var pkg = this,
        looper = null;
        
    function bindFocus () {
        window.addEventListener('blur', function (e) { woh.pause() }, false);
        window.addEventListener('focus', function (e) { woh.resume() }, false);
    }
    
    this.init = function () {
        looper = new L.Loop(this.tick, this);
        this.looper = looper;
        bindFocus();
    };
    this.stop = function () {
        looper && looper.stop();
    };
    this.resume = function () {
        looper && looper.resume();
    };
    this.tick = function (dt) {
        woh.update(dt);
        woh.draw();
    };
    

});
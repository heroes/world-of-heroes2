/* world of heroes */

Laro.NS('woh', function (L) {
    var pkg = this;
    
    function $ (id) {
        return document.getElementById(id);
    }
    function getEls () {
        var els = {};
        els.doc = $('doc');
        els.loading = $('css-loading');
        els.gameContainer = $('game-container');
        els.intro = $('intro');
        els.drama = $('drama');
        els.dialogue = $('dialogue');
        pkg.els = els;
    }
    
    this.$id = $;
    this.hide = function (el) {
        el.style['display'] = 'none';
    };
    this.show = function (el) {
        el.style['display'] = 'block';
    };

    this.log = function (msg) {
        window.console && window.console.log(msg);
    };
    this.warn = function (msg) {
        window.console && window.console.warn(msg);
    };
    
    this.update = function (dt) {
        woh.stage.update(dt);
        //...
    };
    this.draw = function () {
        woh.stage.draw()
    };
    this.pause = function () {
        // show global pause tips
        woh.loop.stop();
    };
    this.resume = function () {
        //...
        woh.loop.resume();
    };
    
    this.init = function () {
        getEls();
        
        woh.stage.init();
        woh.loop.init();
    };

});
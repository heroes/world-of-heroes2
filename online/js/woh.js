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
        els.cg=$('cg');
        els.dialogue = $('dialogue');
        els.battle=$('battle');
        els.canvas = $('canvas');
        els.canvasWrap = $('canvas-wrap');
        els.map = $('map');
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
        woh.canvasRender.clear();
        woh.stage.draw(woh.canvasRender)
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
        //loader
        this.loader = new L.ResourceLoader('resources/'); // 默认以resources/ 为资源根目录
        // render
        pkg.els.canvas.width = 960;
        pkg.els.canvas.height = 640;
        this.canvasRender = new L.CanvasRender(pkg.els.canvas, 1, false);
        
        woh.stage.init();
        woh.loop.init();
    };

});
/* util methods */
Laro.NS('woh.util', function (L) {
    var pkg = this;
    /**
     * 获取点击的事件源, 该事件源是有 data-cmd 属性的 默认从event.target往上找三层,找不到就返回null
     */
    function getActionTarget (event, level, property, parent){
        var t = event.target,
            l = level || 3,
            s = level !== -1,
            p = property || 'data-cmd',
            end = parent || document.body;
        while(t && (t !== end) && (s ? (l-- > 0) : true)){
            if(t.getAttribute(p)){
                return t;
            }else{
                t = t.parentNode;
            }
        }
        return null;
    }
    
    function getRandomFlag () {
        return Math.random() > 0.5 ? 1 : -1;
    }
    function getRange (from, to) {
        return parseInt(from + Math.random()*(to-from));
    }
    /**
     * 震屏，
     * 暂时先放util 里
     */
    function shakeScreen () {

        var originL = -woh.els.canvasWrap.offsetWidth/2 || -480,
            originT = -woh.els.canvasWrap.offsetHeight/2 || -320;
        
        clearInterval(pkg.SHAKE_INTERVAL);
        pkg.SHAKE_INTERVAL = setInterval(function () {
            var horiDis = getRandomFlag() * getRange(10, 20) + originL,
                vertDis = getRandomFlag() * getRange(8, 15) + originT;
            
            woh.els.canvasWrap.style['marginLeft'] = horiDis + 'px';
            woh.els.canvasWrap.style['marginTop'] = vertDis + 'px';
        }, 120);
    }
    function stopShakeScreen () {
        clearInterval(pkg.SHAKE_INTERVAL);
        var originL = -woh.els.canvasWrap.offsetWidth/2 || -480,
            originT = -woh.els.canvasWrap.offsetHeight/2 || -320;
        woh.els.canvasWrap.style['marginLeft'] = originL + 'px';
        woh.els.canvasWrap.style['marginTop'] = originT + 'px';
    }
    
    function apply2Els (els, fn) {
        if (typeof els == 'string') {
            els = document.querySelectorAll(els);
        } else if (els.nodeType && els.nodeType == 1) {
            els = [els];
        }
        for (var i = 0; i < els.length; i ++) {
            var el = els[i];
            typeof fn == 'function' && fn(el);
        }
    }
    function show (selector) {
        apply2Els(selector, function (el) {
            el.style.display = 'block';
        })
    }
    function hide (selector) {
        apply2Els(selector, function (el) {
            el.style.display = 'none';
        })
    }
    
    /**
     * 针对所有的 stage-container ，显示某一个，其他全部自动隐藏
     */
    function showContainer (sel) {
        hide('.stage-container');
        show(sel);
    }
    
    this.getActionTarget = getActionTarget;
    this.shakeScreen = shakeScreen;
    this.stopShakeScreen = stopShakeScreen;
    this.show = show;
    this.hide = hide;
    this.showContainer = showContainer;
    
});
/* util methods */
Laro.NS('woh.util', function (L) {
    var pkg = this;
    
    woh.isTouchDevice = /andriod|iphone|ipad/i.test(navigator.userAgent);
    
    var trimReplace = /(^\s*|\s*$)/g;
    var trim = String.prototype.trim ?
    function (s) {
        return s.trim()
    } : function (s) {
        return s.replace(trimReplace, '')
    }
    
    function classReg(c) {
        return new RegExp("(^|\\s+)" + c + "(\\s+|$)")
    }
    
    var hasClass = function (el, c) {
        return classReg(c).test(el.className)
    };
    var _addClass = function (el, c) {
        el.className = trim(el.className + ' ' + c)
    };
    var _removeClass = function (el, c) {
        el.className = trim(el.className.replace(classReg(c), ' '))
    };
    
    /**
     * 获取点击的事件源, 该事件源是有 data-cmd 属性的 默认从event.target往上找三层,找不到就返回null
     */
    function getActionTarget (event, level, property, parent){
        var t = woh.isTouchDevice ? event.targetTouches[0].target : event.target,
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
            var //horiDis = getRandomFlag() * getRange(10, 20) + originL;
                vertDis = getRandomFlag() * getRange(8, 15) + originT;
            
            //woh.els.canvasWrap.style['marginLeft'] = horiDis + 'px';
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
    
    function addClass (selector, c) {
        apply2Els(selector, function (el) {
            !hasClass(el, c) && _addClass(el, c);
        });
    }
    function removeClass(selector, c) {
        apply2Els(selector, function (el) {
            hasClass(el, c) && _removeClass(el, c);
        });
    }
    function setAttr(sel, prop, val) {
        apply2Els(sel, function (el) {
            el && el.setAttribute && el.setAttribute(prop, val);
        });
    }
    function fadeIn (sel) {
        apply2Els(sel, function (el) {
            el.style.opacity = 0;
            show(el);
            addClass(el, 'opacity-anim');
            setTimeout(function () {
                el.style.opacity = 1;
            }, 0);
            
        });
    }
    // 这里由于css3 transition 的duration 是0.5s 所以暂时定500ms;
    function fadeOut (sel) {
        apply2Els(sel, function (el) {
            el.style.opacity = 1;
            addClass(el, 'opacity-anim');
            setTimeout(function () {
                el.style.opacity = 0;
            }, 0);
            setTimeout(function () {
                hide(el);
            }, 500)
        });
    }
    
    /**
     * 针对所有的 stage-container ，显示某一个，其他全部自动隐藏
     */
    function showContainer (sel) {
        hide('.stage-container');
        show(sel);
    }
    
    // 播放已加载音乐中的一个，其他都暂停
    function playOneSound(key, isLoop) {
        var sds = woh.loader.loadedSounds;
        if (isLoop == undefined) { isLoop = true }
        if (sds[key]) {
            for (var k in sds) {
                (k == key) ? (sds[k].audio.paused && sds[k].play('default', isLoop)) : sds[k].pause();
            }
        }
    }
    this.playOneSound = playOneSound;
    
    this.getActionTarget = getActionTarget;
    this.shakeScreen = shakeScreen;
    this.stopShakeScreen = stopShakeScreen;
    this.show = show;
    this.hide = hide;
    this.showContainer = showContainer;
    
    this.hasClass = hasClass;
    this.addClass = addClass;
    this.removeClass = removeClass;
    
    this.fadeIn = fadeIn;
    this.fadeOut = fadeOut;
    
});
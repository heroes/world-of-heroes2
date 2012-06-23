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
        // 统一清除 canvas 重绘，其他地方不用在每次draw的时候再清canvas了
        woh.canvasRender.clear();
        woh.stage.draw(woh.canvasRender)
    };
    this.pause = function () {
        // show global pause tips
        //woh.loop.stop();
    };
    this.resume = function () {
        //...
        //woh.loop.resume();
    };
    
    this.init = function () {
        getEls();
        //loader
        this.loader = new L.ResourceLoader('resources/'); // 默认以resources/ 为资源根目录
        // render
        pkg.els.canvas.width = 960;
        pkg.els.canvas.height = 640;
        this.canvasRender = new L.CanvasRender(pkg.els.canvas, 1, false);
        
        woh.runtime.init();//初始化运行时数据
        woh.stage.init();
        woh.loop.init();
    };

});

// objects collection
Laro.NS('woh', function (L) {

    var Collection = L.Class(function () {
        this._objects = [];
    }).methods({
        add: function (name, o) {
            this._objects.push({'name': name, 'obj': o});
        },
        remove: function (name) {
            if (name == undefined) {
                this._objects = [];
            } else {
                for (var i = 0; i < this._objects.length; i ++) {
                    var o = this._objects[i];
                    if (o.name == name) {
                        return this._objects.splice(i, 1);
                    }
                }
            }
        },
        get: function (name) {
            if (name == undefined) return this._objects;
            for (var i = 0; i < this._objects.length; i ++) {
                var o = this._objects[i];
                if (o.name == name) {
                    return o.obj;
                }
            }

        },
        sort: function (fn) {
            return this._objects.sort(fn);
        },
        dispatch: function (fnName, args) {
            var _args = arguments,
                slice = Array.prototype.slice,
                __args = slice.call(_args, 0);
            __args.splice(0, 1);

            this._objects.forEach(function (o) {
                var obj = o.obj;
                obj[fnName] && obj[fnName].apply(obj, __args);
            });
        }
    });
    
    this.Collection = Collection;

});

// roles collection
Laro.NS('woh', function (L) {

    var RoleCollection = woh.Collection.extend().methods({
        getOneCanMove: function () {
            for (var i = 0; i < this._objects.length; i ++) {
                var obj = this._objects[i].obj;
                if (obj.canMove) return obj;
            }
            return null;
        }
    });
    
    this.RoleCollection = RoleCollection;

});
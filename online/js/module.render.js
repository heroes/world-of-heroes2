/**
 * 背包
 * @author
 */
(function(_win){

	var cache = {};
	_win.tmpl =  function (str, data){
	var fn = !/\W/.test(str) ?
	  cache[str] = cache[str] ||
		tmpl(document.getElementById(str).innerHTML) :

	  new Function("obj",
		"var p=[],print=function(){p.push.apply(p,arguments);};" +
		"with(obj){p.push('" +

		str
		  .replace(/[\r\t\n]/g, " ")
		  .split("<%").join("\t")
		  .replace(/((^|%>)[^\t]*)'/g, "$1\r")
		  .replace(/\t=(.*?)%>/g, "',$1,'")
		  .split("\t").join("');")
		  .split("%>").join("p.push('")
		  .split("\r").join("\\'")
	  + "');}return p.join('');");

	return data ? fn( data ) : fn;
	};

    var _events = {};
    function _addEvent(e, callback, cfg) {
        cfg = cfg || {};
        cfg.obj = cfg.obj || null;
        cfg.onlyone = cfg.onlyone || false;
        var item = {callback: callback,obj: cfg.obj};
        if (cfg.obj && cfg.onlyone) {
            if (_events[e]) {
                for (var i = 0; i < _events[e].length; i++) {
                    if (callback) {
                        if (_events[e][i].obj === cfg.obj && _events[e][i].callback === callback) {
                            return;
                        }
                    } else {
                        if (_events[e][i].obj === cfg.obj) {
                            return;
                        }
                    }
                }
            }
        }
        _events[e] = _events[e] || [];
        _events[e].push(item);
    }
    function _removeEvent(e, callback, cfg) {
        cfg = cfg || {};
        cfg.obj = cfg.obj || null;
        if (_events[e]) {
            for (var i = _events[e].length - 1; i >= 0; i--) {
                if (cfg.obj && cfg.obj === _events[e][i].obj) {
                    if (callback && _events[e][i].obj.callback === callback) {
                        _events[e].splice(i, 1);
                    } else {
                        _events[e].splice(i, 1);
                    }
                } else {
                    if (callback && _events[e][i].obj.callback === callback) {
                        _events[e].splice(i, 1);
                    } else {
                        _events[e].splice(i, 1);
                    }
                }
            }
        }
    }
    function _fireEvent(e, args, async) {
        async = typeof async != 'undefined' ? async : true;
        if (async) {
            if (_events[e]) {
                for (var i = 0; i < _events[e].length; i++) {
                    if (typeof _events[e][i].callback == "function") {
                        var fn = _events[e][i].callback;
                        var context = this;
                        setTimeout((function(fn, context) {
                            return function() {
                                fn.apply(context, [args]);
                            }
                        })(fn, context), i * 12);
                    }
                }
            }
        } else {
            if (_events[e]) {
                for (var i = 0; i < _events[e].length; i++) {
                    if (typeof _events[e][i].callback == "function") {
                        var fn = _events[e][i].callback;
                        var context = this;
                        fn.apply(context, [args]);
                    }
                }
            }
        }
    }
    function _clear(obj) {
        if (obj != null) {
            _clearObjEvent(obj);
        } else {
            _clearAll();
        }
    }
    function _clearObjEvent(obj) {
        if (obj == null) {
            return;
        }
        for (var e in _events) {
            if (!_events[e]) {
                continue;
            }
            for (var i = _events[e].length - 1; i >= 0; i--) {
                if (_events[e][i].obj === obj) {
                    _events[e].splice(i, 1);
                }
            }
        }
    }
    function _clearAll() {
        for (var e in _events) {
            delete _events[e];
            _events[e] = null;
        }
    }



	var _doc = _win.document;

	var packetManager = _win.packetManager = {
		init : function(){
			packetManager.article.init();
		},
		unInit : function(){

		}
	};
    //开始界面
    packetManager.Intro={
        tpl:'<div class="intro-module"></div>',
        tpl_pop:'',//弹出窗
        init:function(){
            
        },
        unInit:function(){

        }

    };
	packetManager.article = {
		tpl : '<article class="item_icon"></article>',
		total :28,
		data : {},
		init : function() {
			this.render();
			this.bind();
		},
		unInit : function(){
			this.unbind();
		},
		render : function(){
			var items = [];
			for(var i = 0; i < this.total; i++){
				items.push(tmpl(this.tpl, this.data));
			}
			//_doc.querySelector('#item_icons div.icon_panel').innerHTML = items.join('');
		},
		bind : function(){

		},
		unbind : function(){

		}
	}
})(window);
packetManager.Intro.init();

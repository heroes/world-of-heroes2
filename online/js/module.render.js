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
    Intro={
        tpl:function(id){
            return '<div class="button" id="'+id+'"></div>'
        },
        tpl_pop:'<div class="intro-pop"></div>',//弹出窗
        total:4,
        init:function(){
            var items = [];
            for(var i = 0; i < this.total; i++){  
                items.push(this.tpl("btn-"+i));
            }
           _doc.querySelector('#intro').innerHTML = items.join('');
           _doc.querySelector('#intro').addEventListener('mousedown',this.callbackFunc,false);
           _doc.querySelector('#intro').addEventListener('touchstart',this.callbackFunc,false);
        },
        unInit:function(){

        },
        callbackFunc:function(e){
            if(e.target.id.substring(0,4)=='btn-'){
                e.target.style.background="url(../online/resources/images/index/index-btn-press.png) no-repeat";
                switch(e.target.id){
                    case 'btn-3':setTimeout('woh.gameScript.continueExec()',300);
                    case 'btn-2':break;
                    case 'btn-1':break;
                    case 'btn-0':break;
                    default:break;
                }
            }
        }
    };
    //CG界面
    CG={
        tpl:'<div class="button">跳过CG</div>',
        init:function(){
            this.render();
            this.bind();
        },
        callbackFunc:function(e){
            woh.gameScript.continueExec();
        },
        render:function(){
            _doc.querySelector('#cg').innerHTML = this.tpl;
        },
        bind:function(){
            _doc.querySelector('#cg .button').addEventListener('mousedown',this.callbackFunc,false);
        }
    }
    //对话界面
    Dialogue={
        tpl:function(){return '<div class="chat">'+
            '<div class="avatar">头像图片</div>'+
            '<div class="content">'+
                '<h1><span>【</span><span class="name">名字</span><span>】</span></h1>'+
                '<p class="words">单段剧情</p>'+
            '</div>'+
        '</div>'
        },
        init:function(){
            this.render();
        },
        render:function(){
            _doc.querySelector('#dialogue').innerHTML=this.tpl();
        },
        bind:function(){

        }
    }
    //战斗界面
    Battle={
        tpl:'<div class="skill-icons"></div>',
        init:function(){},
        render:function(){},
        bind:function(){}
    }
	//物品管理界面
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
    Intro.init();
    CG.init();
    Dialogue.init();
})(window);


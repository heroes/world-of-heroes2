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

	var _doc = _win.document;

	var packetManager = _win.packetManager = {
        tpl:function(){

          return  "<div id='item_manage'><div class='btn_close'></div>"+
            "<div id='attribute_panel'>"+
            "<div id='avatars'>"+
              "<div class='avatar'></div>"+
              "<div class='avatar'></div>"+
              "<div class='avatar'></div>"+
            "</div>"+
            "<div id='attributes'>"+
              "<h1 id='role_name'>唐如</h1>"+
              "<div id='wear_left'>"+
                "<div class='weapon'></div>"+
              "</div>"+
              "<canvas id='wear_preview'></canvas>"+

            "<div id='wear_right'>"+
            "<div class='clothes'></div>"+
            "</div>"+
            "<div id='attribute_list'>"+
            "<label>生命值</label>"+
            "<span id='num_0'>8523</span>"+
            "<label>等级</label>"+
            "<span id='num_1'>13</span>"+
            "<label>攻击</label>"+
            "<span id='num_2'>12</span>"+
            "<label>防御</label>"+
            "<span id='num_3'>23</span>"+
            "<label>暴击</label>"+
            "<span id='num_4'>5</span>"+
            "<label>闪避</label>"+
            "<span id='num_5'>5</span>"+
            "<label>经验</label>"+
            "<div class='exp_line_outer'>"+
              "<div class='exp_line_inner'><span class='value'>200/1000</span></div>"+
            "</div>"+
            "</div>"+
            "</div>"+
            "</div>"+
            "<div id='item_panel'>"+
            "<div id='item_icons'>"+
            "<div class='icon_panel'>"+
            "</div>  "+
            "</div>"+
            "<div class='description'>"+
            "<h2 class='item_name'>物品名称</h2>"+
            "<p class='item_description'>物品描述</p>"+
            "<p class='item_attribute'>物品属性</p>"+
            "</div>"+
            "</div></div>"
        },
		init : function(){
            var packet = _doc.getElementById('packet');
            packet.innerHTML = this.tpl();
            packet.style.display = 'block';
			packetManager.article.init();
            this.bind();
		},
		unInit : function(){

		},
        bind : function(){
             _doc.querySelector('.btn_close').addEventListener('click', function(){
                packet.style.display = 'none';
            })
        }
	};
    

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

    //开始界面
    Intro = {
        tpl:function(id){
            return '<div class="button" id="'+id+'"></div>'
        },
        tpl_pop:'<div class="intro-pop"></div>',//弹出窗
        total:4,
        init:function(){
            var items = [];
            for(var i = 1; i <= this.total; i++){  
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
                //e.target.style.background="url(../online/resources/images/index/index-btn-press.png) no-repeat";
                switch(e.target.id){
                    case 'btn-1':setTimeout('woh.gameScript.continueExec()',300);
                    case 'btn-2':break;
                    case 'btn-3':break;
                    case 'btn-4':break;
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
    Dialogue = _win.Dialogue = {
        tpl:function(data){
        var str = '<div class="chat">'+
            '<%if(avatar){%>'+
            '<div class="avatar <%=position||"left"%>"><img src="<%=avatar%>" alt="" /></div>'+
            '<%}%>'+
            '<div class="content">'+
                '<%if(name){%>'+
                '<h1><span>【</span><span class="name"><%=name%></span><span>】</span></h1>'+
                '<%}%>'+
                '<p class="words"><%=content%></p>'+
            '</div>'+
        '</div>';
        return str;
        },
        init:function(data){
            this.data = data;
            this.index = 0;
            this.render();
            this.bind();
        },
        render:function(){
            if(this.index >= this.data.length){
                woh.gameScript.continueExec();
            }else{
                _doc.querySelector('#dialogue').innerHTML= tmpl(this.tpl(), this.data[this.index]);
            }
        },
        bind:function(){
            var self = this;
             _doc.getElementById('dialogue').addEventListener('click', function(){
                self.index++;
                self.render();
            })
        }
    }
    //战斗界面
    Battle={
        tpl:'<div class="skill-icons"></div>',
        init:function(){},
        render:function(){},
        bind:function(){}
    }

    //地图界面
    Map={
        tpl:function(){
            return '<div class="map-module">' +
                '<div class="button" id="map-leave">离开</div>' +
                '<div class="button" id="map-skill">技能</div>' +
                '<div class="button" id="map-person">人物</div>' + 
            "</div>"
        },
        init:function(){
            this.render();
            this.bind();
        },
        render:function(){
            _doc.getElementById('map').innerHTML=this.tpl();
        },
        bind:function(){
            _doc.getElementById('map-person').addEventListener('click', function(){
                packetManager.init();
            })
        }
    }
    Map.init();
    Intro.init();
    CG.init();
})(window);


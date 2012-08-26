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


    //开始界面
    Intro = {
        tpl:function(id){
            return '<div class="button" id="'+id+'"></div>'
        },
        tpl_pop:function(id){return '<div id="'+id+'" class="sub-win">'+
            '<div class="content">内容</div>'+
            '<button class="close" data-toggle='+id+'></button>'
        '</div>'},//弹出窗
        total:4,
        init:function(){
            var items = [];
            for(var i = 1; i <= this.total; i++){  
                items.push(this.tpl("btn-"+i));
            }
           _doc.getElementById('intro').innerHTML = items.join('');
           _doc.getElementById('intro').addEventListener('mousedown',this.callbackFunc,false);
           _doc.getElementById('intro').addEventListener('touchstart',this.callbackFunc,false);
           //添加三个子窗体
           for(var i=0;i<3;i++){
              var sub=document.createElement();
              _doc.getElementById('intro').appendChild(sub);
              sub.outerHTML=this.tpl_pop('Intro-'+i);
            }
            //设置三个子窗体中的内容
            document.getElementById('Intro-1').innerHTML+="<p class='aboutus first'>小重：（角色原画、人设、动作设计)</p>"+
                                                          "<p class='aboutus'>佛生：（场景、UI、怪物设计、技能特效）</p>"+
                                                          "<p class='aboutus'>Winter：（主程序、剧情）</p>"+
                                                          "<p class='aboutus'>虹如：（主程序、模特）</p>"+
                                                          "<p class='aboutus'>阿征：（策划、剧情、程序、切图）</p>"+
                                                          "<p class='aboutus'>阿子：（程序）</p>"+
                                                          "<p class='aboutus'>小蜜：（UI）</p>"+
                                                          "<p class='aboutus'>少宏、菜挺：（策划）</p>";
            document.getElementById('Intro-2').innerHTML+="<p class='thanks first'>本游戏内使用的背景音乐均为单机PC游戏《仙剑奇侠传5》中的背景音乐。</p>"+
                                                         "<p class='thanks'>感谢《仙剑奇侠传》带给我们实现梦想的动力和勇气。<a href='http://weibo.com/yaosir1'>@姚壮宪</a><a href='http://e.weibo.com/palclub'>@仙剑奇侠传</a></p>"+
                                                         "<p class='thanks'>PS：本游戏纯属业余爱好，非商用，请勿擅自用于商业目的。</p>";
            for(var j=0;j<3;j++){
                document.getElementById('Intro-'+j).querySelector('.close').addEventListener(
                 'click',function(){document.getElementById(this.getAttribute('data-toggle')).style.display='none';},false
              );
            }
        },
        unInit:function(){

        },
        callbackFunc:function(e){
            if(e.target.id.substring(0,4)=='btn-'){
                //e.target.style.background="url(../online/resources/images/index/index-btn-press.png) no-repeat";
                switch(e.target.id){
                    case 'btn-1':woh.runtime.init();setTimeout('woh.gameScript.continueExec()',300);break;
                    //case 'btn-2':document.getElementById('Intro-0').style.display='block';break;
                    case 'btn-2':woh.runtime.init();woh.runtime.stageTag='drama_Infinity';setTimeout('woh.gameScript.continueExec()',300);break;
                    case 'btn-3':document.getElementById('Intro-1').style.display='block';break;
                    case 'btn-4':document.getElementById('Intro-2').style.display='block';break;
                    default:break;
                }
            }
        },
    };
    //CG界面
    CG={
        tpl:'<button class="skip"></button><img/>',
        init:function(){
            this.render();
            this.bind();
        },
        callbackFunc:function(e){
            woh.gameScript.continueExec();
        },
        render:function(){
            _doc.getElementById('cg').innerHTML = this.tpl;
        },
        bind:function(){
            _doc.querySelector('#cg button.skip').addEventListener('mousedown',this.callbackFunc,false);
            _doc.querySelector('#cg').addEventListener('touchstart',this.callbackFunc,false);
        }
    }
    //对话界面
    Dialogue = _win.Dialogue = {
        tpl:function(data){
        var str = '<div  class="chat-wrap" style="background:url(<%=globalBg%>) no-repeat 0 0"><div class="chat">'+
            '<%if( typeof position !=="undefined" && position == "right"){%>'+
                '<%if(avatar){%>'+
                    '<div class="avatar right scaleX"><img src="<%=avatar%>" alt="" /></div>'+
                '<%}%>'+
                '<div class="bg scaleX"></div>'+
                '<div class="content left">'+
                    '<%if(name){%>'+
                    '<h1><span>【</span><span class="name"><%=name%></span><span>】</span></h1>'+
                    '<%}%>'+
                    '<p class="words"><%=content%></p>'+
                '</div>'+
            '<%}else{%>'+
                '<%if(avatar){%>'+
                    '<div class="avatar left"><img src="<%=avatar%>" alt="" /></div>'+
                '<%}%>'+
                '<div class="bg"></div>'+
                '<div class="content right">'+
                    '<%if(name){%>'+
                    '<h1><span>【</span><span class="name"><%=name%></span><span>】</span></h1>'+
                    '<%}%>'+
                    '<p class="words"><%=content%></p>'+
                '</div>'+
            '<%}%>'+
        '</div></div>';
        return str;
        },
        init:function(data){
            this.data = data;
            this.index = 0;
            _doc.querySelector('#dialogue').innerHTML = '<div class="content-wrap"></div><button class="skip" id="skip-dialogue"></button>';
            this.render();
            this.bind();
        },
        render:function(){
            if(this.index >= this.data.length){
                woh.gameScript.continueExec();
            }else{
                _doc.querySelector('#dialogue div.content-wrap').innerHTML= tmpl(this.tpl(), this.data[this.index]);
            }
        },
        bind:function(){
            var self = this;
             _doc.querySelector('#dialogue .content-wrap').addEventListener('click', function(){
                self.index++;
                self.render();
            }, false);
            _doc.getElementById('skip-dialogue').addEventListener('click', function(){
                woh.gameScript.continueExec();
            },false);
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
            return '<div class="button" id="map-leave"></div>' +
                '<div class="button" id="map-skill"></div>' +
                '<div class="button" id="map-person"></div>'+
                '<div id="role-manage" class="sub-win"></div>'+
                '<div id="skill-manage" class="sub-win"></div>'
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
                roleManager.init();
            });
            _doc.getElementById('map-skill').addEventListener('click', function(){
                skillManager.init();
            });
            _doc.getElementById('map-leave').addEventListener('click', function(){
                woh.gameScript.continueExec();
            })
        }
    }

    //物品管理界面
    var roleManager = _win.roleManager = {
        currentActiveRole:0,
        tpl:function(){
          return "<button class='close'>"+
                 "</button>"+
                 "<div class='left-block'>"+
                    "<ul class='ava-bar'>"+
                    "</ul>"+
                    "<div class='role-info'>"+
                        "<h1 id='name'></h1>"+
                        "<div id='weapon'>"+
                        "</div>"+
                        "<canvas id='role_preview' width='200' height='200'>"+

                        "</canvas>"+
                        "<div id='clothes'>"+
                        "</div>"+
                        "<ul class='role-attributes'>"+
                            "<li><label>生命：</label><span id='health'></span></li>"+
                            "<li><label>攻击：</label><span id='attack'></span></li>"+
                            "<li><label>防御：</label><span id='defend'></span></li>"+
                            "<li><label>暴击：</label><span id='crit'></span></li>"+
                        "</ul>"+
                        "<div class='exp-bar'>"+
                            "<div class='exp-bar-inner'>"+
                                "<div class='exp-value'>"+
                                "</div>"+
                            "</div>"+
                        "</div>"+
                     "</div>"+
                 "</div>"+
                 "<div class='right-block'>"+
                    "<ul class='items'>"+
                    "</ul>"+
                    "<div class='description'>"+
                        "<h3 class='name'>"+
                        "</h3>"+
                        "<p class='content'></p>"+
                        "<p class='value'></p>"+
                    "</div>"+
                 "</div>"
        },
        initData:function(id){
            this.currentActiveRole=id;                          
            var data=woh.runtime.activeRole[id];//显示相应人物的数据
            _doc.querySelector('#role-manage .role-info h1#name').innerHTML=data['name']+'<small> Lv:'+data['lv']+'</small>';
            //载入相关数据
            var rate_info=woh.skill_rate[data['type']],
                level_info=woh.base_level_data[data['lv']];
            //根据偏移百分比计算出基础数值
            var health=parseInt(rate_info['health']*level_info['health']),
                attack=parseInt(rate_info['attack']*level_info['attack']),
                defend=parseInt(rate_info['defend']*level_info['defend']),
                crit=parseInt(rate_info['crit']*level_info['crit']);
            //加上装备的加成值
            //武器的加成值
            if(data['weapon']!='none'){
                var weapon=woh.item_data['weapon'][data['weapon']];
                    health+=weapon['health'];
                    attack+=weapon['attack'];
                    defend+=weapon['defend'];
                    crit+=weapon['crit'];
            }
            //衣服的加成值
            if(data['clothes']!='none'){
                var clothes=woh.item_data['clothes'][data['clothes']];
                    health+=clothes['health'];
                    attack+=clothes['attack'];
                    defend+=clothes['defend'];
                    crit+=clothes['crit'];
            }
            //读取当前经验值
            var role_exp=data['exp'],
                expwidth=220;
                //满级的处理
                if(data['lv']<20){
                    expwidth=220*(data['exp']-woh.base_level_data[data['lv']]['exp'])/(woh.base_level_data[data['lv']+1]['exp']-woh.base_level_data[data['lv']]['exp']);
                }
            //console.log(expwidth);
            //界面渲染的相关部分，应当提出来
            //将数据渲染到界面上
            _doc.querySelector('#role-manage .role-info .role-attributes #health').innerHTML=health;
            _doc.querySelector('#role-manage .role-info .role-attributes #attack').innerHTML=attack;
            _doc.querySelector('#role-manage .role-info .role-attributes #defend').innerHTML=defend;
            _doc.querySelector('#role-manage .role-info .role-attributes #crit').innerHTML=crit*100;
            _doc.querySelector('#role-manage .role-info .exp-value').style.width=expwidth+"px";
            //将装备和服装图标设为人物当前的装备
            _doc.getElementById('weapon').innerHTML="<img width='77' height='77' class='useable' datatag='"+data['weapon']+"' draggable='false' for='"+data['type']+"' datatype='weapon' src='"+(data["weapon"]=="none"?'':woh.item_data["weapon"][data["weapon"]]["icon"])+"'/>";
            _doc.getElementById('clothes').innerHTML="<img width='77' height='77' class='useable' datatag='"+data['clothes']+"' draggable='false' for='"+data['type']+"' datatype='clothes' src='"+(data["clothes"]=="none"?'':woh.item_data["clothes"][data["clothes"]]["icon"])+"'/>";
            //禁用不适合当前人物的装备
            var itemsList=_doc.querySelectorAll('#role-manage ul.items li img');

            for(var i in itemsList){
                if(itemsList[i].getAttribute&&itemsList[i].getAttribute('for')!=data['type']){
                         itemsList[i].className=''; 
                }
                else{
                    itemsList[i].className='useable'; 
                }
            }
            //预览装备
            this.setPreview(data['clothes'],data['weapon']);
        },
        renderItemlattic:function(){
            var items=[];
            for(var i=0;i<15;i++){
                items.push("<li></li>");
            }
            items=items.join('');
            _doc.querySelector('#role-manage ul.items').innerHTML=items;

        },
        renderItems:function(){
            var that=this;
            //渲染物品图标
            var itemlattics=_doc.querySelectorAll('#role-manage ul.items li'),
                itemdatas=woh.runtime.packageItems;
            for(var i in itemdatas){
                itemlattics[i].innerHTML="<img width='77' height='77' src='"+woh.item_data[itemdatas[i][0]][itemdatas[i][1]]['icon']+"' draggable='false'"
                +"datatype='"+woh.runtime.packageItems[i][0]+"' datatag='"+woh.runtime.packageItems[i][1]+"' for='"+woh.item_data[itemdatas[i][0]][itemdatas[i][1]]['for']+"'/>";
            }
        },
        init : function(data){
            var roleinfo = _doc.getElementById('role-manage');
            roleinfo.innerHTML = this.tpl();
            roleinfo.style.display = 'block';
           
            this.renderItemlattic();
            this.initAvatarBar();
            this.renderItems();
            this.bind();
            this.initData(0);
            _doc.querySelector('#role-manage .ava-bar .avar:first-child').className+=' active';
        },
        unInit : function(){

        },
        //设置预览
        setPreview:function(clothesid,weaponid){
            console.log(clothesid,weaponid);
            var ctx=_doc.getElementById('role_preview').getContext('2d'),
                clothes=woh.item_data['clothes'][clothesid]['modal'],
                weapon=woh.item_data['weapon'][weaponid]['modal'];
                ctx.clearRect(0,0,200,200);
            var clothesImg=new Image();
                clothesImg.src=clothes[0];
                ctx.drawImage(clothesImg,clothes[1],clothes[2],clothes[3],clothes[4],0,0,clothes[3],clothes[4]);
            var weaponImg=new Image();
                weaponImg.src=weapon[0];
                ctx.drawImage(weaponImg,weapon[1],weapon[2],weapon[3],weapon[4],0,0,clothes[3],clothes[4]);
        },
        bind : function(){
            var that=this;
            _doc.querySelector('#role-manage .close').addEventListener('click', function(){
                _doc.getElementById('role-manage').style.display = 'none';
            });
            //当前人物切换处理
            _doc.querySelector('#role-manage .ava-bar').addEventListener('click',function(e){
                if(e.target.id){
                var currentId=e.target.getAttribute('data-toggle');
                    _doc.querySelector('#role-manage .ava-bar .active').className='avar standard-stroke';
                    e.target.parentNode.className+=" active";
                    that.initData(currentId);
                }
        },false);
            
            //装备图标拖动事件
        var draggingType,
            draggingId;
        var draggingIcon;

        Array.prototype.forEach.call(document.querySelectorAll('#role-manage .items img'),function(elem){
            enableMouseGestureEvents(elem);
            enableGestureEvents(elem);
            elem.addEventListener('panstart',function(e){ 
                if(this.className=='useable'){
                    draggingType=e.target.attributes['datatype'].nodeValue;
                    draggingId=e.target.attributes['datatag'].nodeValue;
                    draggingIcon = this;
                }
            },false);
            var puttingWeapon = false;
            var puttingClothes = false;
            elem.addEventListener('pan',function(e){
                if(this.className!='useable')
                    return ;
                this.style.webkitTransform = "matrix(1, 0, 0, 1, "+[e.displacementX,e.displacementY]+")";
                var rect = this.getClientRects()[0];
                var weapon = document.querySelector("#weapon");
                if(Math.abs(weapon.getClientRects()[0].left - rect.left) < 30) {
                    console.log("puttingWeapon = true");
                    puttingWeapon = true;
                }
                var clothes = document.querySelector("#clothes");
                if(Math.abs(clothes.getClientRects()[0].left - rect.left) < 30) {
                    console.log("puttingClothes = true");
                    puttingClothes = true;
                }
            },false);

            elem.addEventListener('panend',function(e){
                var cache_src=(draggingIcon.src).toString(),
                    cache_id=eval('('+JSON.stringify(draggingIcon.attributes['datatag'].nodeValue)+')');
                var cache={src:cache_src,id:cache_id}; 
                if(puttingWeapon) {
                    if(draggingType=='weapon'){
                        draggingIcon.src=weapon.getElementsByTagName('img')[0].src;
                        draggingIcon.attributes['datatag'].nodeValue=eval('('+JSON.stringify(weapon.getElementsByTagName('img')[0].attributes['datatag'].nodeValue)+')');
                        weapon.getElementsByTagName('img')[0].src=cache.src;
                        weapon.getElementsByTagName('img')[0].attributes['datatag'].nodeValue=cache.id;
                        woh.runtime.activeRole[that.currentActiveRole]['weapon']=draggingId;
                        //更新包裹数据
                        for(var i in woh.runtime.packageItems){
                            if(woh.runtime.packageItems[i][0]=='weapon'&&woh.runtime.packageItems[i][1]==draggingId){
                                woh.runtime.packageItems[i][1]=draggingIcon.attributes['datatag'].nodeValue;
                                break;
                            }
                        }
                        that.initData(that.currentActiveRole);
                        draggingType="";
                    }
                }
                if(puttingClothes) {
                    if(draggingType=='clothes'){
                        draggingIcon.src=clothes.getElementsByTagName('img')[0].src;
                        draggingIcon.attributes['datatag'].nodeValue=eval('('+JSON.stringify(clothes.getElementsByTagName('img')[0].attributes['datatag'].nodeValue)+')');
                        clothes.getElementsByTagName('img')[0].src=cache.src;
                        clothes.getElementsByTagName('img')[0].attributes['datatag'].nodeValue=cache.id;
                        woh.runtime.activeRole[that.currentActiveRole]['clothes']=draggingId;
                        //更新包裹数据
                        for(var i in woh.runtime.packageItems){
                            if(woh.runtime.packageItems[i][0]=='clothes'&&woh.runtime.packageItems[i][1]==draggingId){
                                woh.runtime.packageItems[i][1]=draggingIcon.attributes['datatag'].nodeValue;
                                break;
                            }
                        }
                        that.initData(that.currentActiveRole);
                        draggingType="";
                    }
                }
                this.style.webkitTransform = "matrix(1, 0, 0, 1, 0 ,0)";
            },false);
            //点击装备图标显示相应数值
            elem.addEventListener('tap',function(e){
                if(e.target.attributes['datatype']){
                    if(_doc.querySelector('#role-manage .items .active')){
                        _doc.querySelector('#role-manage .items .active').classList.remove("active");
                    }
                    this.parentNode.classList.add("active");

                    var dataType=e.target.attributes['datatype'].nodeValue,
                        dataTag=e.target.attributes['datatag'].nodeValue,
                        dataItem=woh.item_data[dataType][dataTag];
                    //显示相应的资料
                    _doc.querySelector('#role-manage .description .name').innerHTML=dataItem['name'];
                    _doc.querySelector('#role-manage .description .content').innerHTML=dataItem['description'];
                    _doc.querySelector('#role-manage .description .value').innerHTML='生命+'+dataItem['health']+' 攻击+'+dataItem['attack']+
                    ' 防御+'+dataItem['defend']+' 暴击+'+dataItem['crit'];
                }
            },false);
        });


/*
            _doc.getElementById('weapon').ondragover=function(e){
                if (e.preventDefault) 
                    e.preventDefault();                                          
            };
            _doc.getElementById('clothes').ondragover=function(e){
                if (e.preventDefault) 
                    e.preventDefault();                                          
            };

            _doc.getElementById('weapon').addEventListener('drop',function(e){
                if(draggingType=='weapon'){
                    if(e.target.id=='weapon'){
                        e.target.innerHTML="<img width='77' height='77' src='"+woh.item_data['weapon'][draggingId]['icon']+"'/>";
                    }
                    else{
                        e.target.src=woh.item_data['weapon'][draggingId]['icon'];
                    }
                    //更新相关数据
                    woh.runtime.activeRole[that.currentActiveRole]['weapon']=draggingId;
                    that.initData(that.currentActiveRole);
                    draggingType="";
                }
            },false);
            _doc.getElementById('clothes').addEventListener('drop',function(e){
                if(draggingType=='clothes'){
                    if(e.target.id=='clothes'){
                        e.target.innerHTML="<img width='77' height='77' src='"+woh.item_data['clothes'][draggingId]['icon']+"'/>";
                    }
                    else{
                        e.target.src=woh.item_data['clothes'][draggingId]['icon'];
                    }
                    //更新相关数据
                    woh.runtime.activeRole[that.currentActiveRole]['clothes']=draggingId;
                    that.initData(that.currentActiveRole);
                    draggingType="";
                }
            },false);
*/
        },
        initAvatarBar:function(){ //载入活动人物的头像
            for(var i in woh.runtime.activeRole){
                _doc.querySelector('#role-manage .ava-bar').innerHTML+='<li class="avar standard-stroke"><img width="105" height="105" id="role'+i+'" src="'+woh.runtime.activeRole[i]['avatar']+'" data-toggle="'+i+'"></li>';
            }
        }
    }
    //点技能界面
    //需求：类似dota的点技能，当技能处于可点状态，点击相应图标升级技能，每升级一次消耗一个技能点
    var skillManager = _win.skillManager = {
        currentActiveRole:0,
        tpl:function(){
          return "<button class='close'>"+
                 "</button>"+
                 "<ul class='ava-bar'>"+
                 "</ul>"+
                 "<div></div>"+
                 "<h1 class='name'></h1>"+
                 "<span class='skill-point'></span>"+
                 "<canvas class='preview'></canvas>"+
                 "<ul class='skill-list'></ul>"+
                 "<div class='description'>"+
                    "<h3 class='name'></h3>"+
                    "<p class='content'></p>"+
                 "</div>";
        },
        init : function(){
            var skillinfo = _doc.getElementById('skill-manage');
            skillinfo.innerHTML = this.tpl();
            skillinfo.style.display = 'block';
            _doc.querySelector('#skill-manage .name').innerHTML=woh.runtime.activeRole[0]['name'];

            this.initAvatarBar();
            this.initData(0);
            _doc.querySelector('#skill-manage .ava-bar .avar:first-child').className+=' active';
            this.bind();
        },
        unInit : function(){

        },
        bind : function(){
            _doc.querySelector('#skill-manage .close').addEventListener('click', function(){
                _doc.getElementById('skill-manage').style.display = 'none';
            });
            //绑定点技能的功能
            var that=this;
            _doc.querySelector('#skill-manage .skill-list').addEventListener('click',function(e){
                if(e.target.nodeName=='img'||e.target.nodeName=='IMG'){
                    var skill_key=e.target.getAttribute('data-toggle');
                    if(e.target.className=='useable'&&e.target.parentNode.className=='active'){
                        woh.runtime.activeRole[that.currentActiveRole]['skill_list'][skill_key]++;
                        woh.runtime.activeRole[that.currentActiveRole]['skill_point']--;
                        that.initData(that.currentActiveRole);
                    }
                    else{
                        (_doc.querySelector('#skill-manage .skill-list li.active')===null)||(_doc.querySelector('#skill-manage .skill-list li.active').className="");
                        e.target.parentNode.className='active';
                    }
                    _doc.querySelector('#skill-manage .description h3.name').innerHTML=woh.skill_data[skill_key]['name'];
                    _doc.querySelector('#skill-manage .description p.content').innerHTML=woh.skill_data[skill_key]['description'];
                }
            },false);
        },
        initAvatarBar:function(){ //载入活动人物的头像
            for(var i in woh.runtime.activeRole){
                _doc.querySelector('#skill-manage .ava-bar').innerHTML+='<li class="avar standard-stroke"><img width="105" height="105" id="roles'+i+'" src="'+woh.runtime.activeRole[i]['avatar']+'" data-toggle="'+i+'"></li>';
            }
            var that=this;
            _doc.querySelector('#skill-manage .ava-bar').addEventListener('click',function(e){
                if(e.target.id){
                var currentId=e.target.getAttribute('data-toggle');
                    _doc.querySelector('#skill-manage .ava-bar .active').className='avar standard-stroke';
                    e.target.parentNode.className+=" active";
                    that.initData(currentId);
                }
            },false);
        },
        initData:function(id){
            this.currentActiveRole=id;
            var dataSkillPoint=woh.runtime.activeRole[id]['skill_point'],
                dataSkillList=woh.runtime.activeRole[id]['skill_list'],
                dataRoleCurrentLv=woh.runtime.activeRole[id]['lv'],
                items=[];
                _doc.querySelector('#skill-manage .skill-point').innerHTML=dataSkillPoint;
                console.log("技能列表",dataSkillList);
                for(var key in dataSkillList){
                    var iconclass='',
                        nextSkillLevel=dataSkillList[key]+1;
                    //当有剩余技能点以及当前人物等级大于下一阶段技能可点等级时技能标识为可点
                    if(dataSkillPoint>0&&nextSkillLevel<woh.skill_data[key]['level_limit'].length&&woh.skill_data[key]['level_limit'][nextSkillLevel-1]<=dataRoleCurrentLv){
                        iconclass=" class='useable' ";
                    }
                    items.push("<li><img width='77' height='77'"+iconclass+"data-toggle='"+key+"' src='"+woh.skill_data[key]['icon']+"'/></li>");
                }
                items=items.join("");
            _doc.querySelector('#skill-manage .skill-list').innerHTML=items;    
        }
    };
    var battleCount = _win.battleCount={
        tpl:function(){
            return "<div class='battle-count'>"+
                "<ul class='role'>111</ul>"+
                "<ul class='item'>111</ul>"+
            "</div>";
        },
        _item_tpl:function(){
            return "<li class='item'></li>";
        },
        init:function(data){
            _doc.querySelector('.battle-module .mask').innerHTML=this.tpl(); 
            _doc.querySelector('.battle-module .mask').style.display="block";
            this.bind();
            this.initData(data);
            woh.util.playOneSound('music/win.mp3', false);
        },
        bind:function(){
            var me=this;
            _doc.querySelector('.battle-module .mask .battle-count').addEventListener('click',function(){
                woh.util.fadeOut(woh.els.canvasWrap);
                me.hide();
            },false);
        },
        hide:function(){
            _doc.querySelector('.battle-module .mask').innerHTML="";
            _doc.querySelector('.battle-module .mask').style.display="none";
        },
        //渲染界面数据
        initData:function(result){
            //计算经验值
            //经验条宽度最大值为105
            var items=[];
            result.roledata.forEach(function (role) {
                    var show="",
                        expwidth=105,
                        distance=0;//距离下一等级的经验
                //计算等级提升情况，若满级（20）则直接跳过计算
                if(role.lv<20){
                    role.exp+=result.exp;
                    var nextexp=woh.base_level_data[role.lv+1]['exp'],
                        distance=nextexp-woh.base_level_data[role.lv]['exp'];
                    while(role.exp>=nextexp)
                    {
                        show="show";
                        role.lv++;
                        if(role.lv==20)break;
                        //升级则技能点+1
                        role.skill_point++;
                        nextexp=woh.base_level_data[role.lv+1]['exp'];
                        distance=nextexp-woh.base_level_data[role.lv]['exp'];
                    }
                    if(role.lv<20){expwidth=105*(role.exp-woh.base_level_data[role.lv]['exp'])/distance;}
                }
                items.push("<li class='exp-info'>"+
                    "<img class='lvup "+show+"' src='./resources/images/count/lvUP.png'>"+
                    "<div class='avatar'><img src="+role.avatar+"></div>"+
                    "<div class='exp-bar'><div class='exp-bar-inner' style='width:"+expwidth+"px'></div></div>"+
                    "<p class='lv-info'>Lv:"+role.lv+"</p>"
                    +"</li>");
            });
            //渲染等级数据
            _doc.querySelector('.battle-module .mask .battle-count .role').innerHTML=items.join("");
            //计算掉落
            if(Math.random()<=result.drop[2]&&woh.runtime.packageItems.length<15){
                woh.runtime.packageItems.push([result.drop[0],result.drop[1]]);
                _doc.querySelector('.battle-module .mask .battle-count .item').innerHTML="<li class='single'><img src='"+woh.item_data[result.drop[0]][result.drop[1]].icon+"'></li>"
            }
        }
    };
    Map.init();
    Intro.init();
    CG.init();
})(window);


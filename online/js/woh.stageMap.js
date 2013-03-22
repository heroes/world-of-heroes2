/**
 * stage Map Class
 */
Laro.NS('woh.stageClass', function (L) {
   var pkg = this;

    var Map;
    Map = L.BaseState.extend(function () {
    }).methods({
            enter: function (msg, from) {
                woh.log('enter stage [Map] with msg ' + msg);
                woh.show(woh.els.map);
                woh.g_config.sound_play && woh.util.playOneSound('music/chat.mp3');

                var data = msg;
                data.forEach(function (o) {
                    var sp = document.createElement("div");
                    map.appendChild(sp);
                    sp.setAttribute("class", "story-point");
                    sp.setAttribute("data-menu", o.id);
                    sp.style.left = o.xPos + "px";
                    sp.style.bottom = o.yPos + "px";
                    sp.addEventListener('click', function (e) {
                        var activemenu = document.querySelector(".story-menu.active");
                        activemenu&&activemenu.setAttribute("class","story-menu");
                        var menu_id = e.target.getAttribute("data-menu");
                        var menu = document.getElementById(menu_id);
                        var menu_class = menu.getAttribute("class");
                        menu.setAttribute("class",menu_class+" active");
                    }, false);
                    var sp_list = document.createElement("ul");
                        map.appendChild(sp_list);
                        sp_list.setAttribute("class", "story-menu");
                        sp_list.setAttribute("id", o.id);
                        sp_list.style.left = parseInt(o.xPos) + 80 + "px";
                        sp_list.style.bottom = o.yPos + "px";
                    var sp_list_header = document.createElement("li");
                        sp_list.appendChild(sp_list_header);
                        sp_list_header.setAttribute("class","header");
                    var menu_area = document.createElement("li");
                        sp_list.appendChild(menu_area);
                    var sp_list_menu = document.createElement("ul");
                        menu_area.appendChild(sp_list_menu);
                    o.storyList.forEach(function (o) {
                        var sp_list_node = document.createElement("li");
                        sp_list_node.innerHTML = o.title;
                        sp_list_node.setAttribute("class","story-menu-li");
                        sp_list_node.setAttribute("data-point", o.story_point);
                        sp_list_menu.appendChild(sp_list_node);
                        sp_list_node.addEventListener('click', function (e) {
                            woh.gameScript.startExec(woh.g_config.script, e.target.getAttribute("data-point"));
                        }, false);
                    });
                    var sp_list_bottom = document.createElement("li");
                        sp_list.appendChild(sp_list_bottom);
                        sp_list_bottom.setAttribute("class","bottom");
                });

//
//            document.getElementById("map").appendChild(sp);
//            sp.setAttribute("class","story-point");
//            sp.addEventListener("click",function(e){
//                woh.gameScript.startExec(woh.g_config.script, 'cg_1');
//            },false);
            },
            leave: function () {
                woh.log('leave stage [map]');
                var sps = document.querySelectorAll(".story-point");
                var sms = document.querySelectorAll(".story-menu");
                for(var i=0;i<sps.length;i++){
                    sps[i].remove();
                    sms[i].remove();
                }
                woh.hide(woh.els.map);
            },
            update: function (dt) {

            },
            transition: function () {

            },
            draw: function (render) {
            }
        });

    this.Map = Map;

});

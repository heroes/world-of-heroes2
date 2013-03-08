/**
 * stage Map Class
 */
Laro.NS('woh.stageClass', function (L) {
   var pkg = this;

   var Map = L.BaseState.extend(function () {
    	
    }).methods({
    	enter: function (msg, from) {
            woh.log('enter stage [Map] with msg ' + msg);
            woh.show(woh.els.map);
            woh.util.playOneSound('music/chat.mp3');
            //以下为测试代码
            var sp = document.createElement("div");
            sp.setAttribute("class","story-point")
            sp.style.width="30px";
            sp.style.height="30px";
            sp.style.background="red";
            sp.style.position="absolute";
            sp.style.left="100px";
            sp.style.top="100px";
            document.getElementById("map").appendChild(sp);
            sp.addEventListener("click",function(e){
                woh.gameScript.startExec(woh.g_config.script, 'loading_1'); 
            },false);
        },
        leave: function () {
            woh.log('leave stage [map]');
            woh.hide(woh.els.map);
        },
        update: function (dt) {
        
        },
        transition: function () {
        
        },
        draw: function (render) {}
    });

    this.Map = Map;

});

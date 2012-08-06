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

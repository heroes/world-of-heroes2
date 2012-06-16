/**
 * stage controler
 */

Laro.NS('woh.gameScript', function (L) {

    var script = null;
    //this.stageTag = '1';
        
    this.startExec = function(_script){
        script = _script;
        woh.runtime.stageTag = '1';
        with(script[woh.runtime.stageTag])
            woh.stage.go(type,data);
    }
    this.continueExec = function(){
        with(script[woh.runtime.stageTag =script[woh.runtime.stageTag].next])
            woh.stage.go(type,data);
    }
    
});

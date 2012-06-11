/**
 * stage controler
 */

Laro.NS('woh.gameScript', function (L) {

    var script = null;
    this.stageNum = 0;
        
    this.startExec = function(_script){
        script = _script;
        this.stageNum = 0;

        with(script[this.stageNum ++])
             woh.stage.go(type,data);
    }
    this.continueExec = function(){
        with(script[this.stageNum ++])
            woh.stage.go(type,data);
    }
    
});

/**
 * stage controler
 */

Laro.NS('woh.gameScript', function (L) {

    var script = null;
    this.stageTag = '1';
        
    this.startExec = function(_script){
        script = _script;
        this.stageTag = '1';
        with(script[this.stageTag])
            woh.stage.go(type,data);
    }
    this.continueExec = function(){
        with(script[this.stageTag =script[this.stageTag].next])
            woh.stage.go(type,data);
            console.log(this.stageTag);
    }
    
});

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
        console.log('sss');
        with(script[script[this.stageTag].next])
            woh.stage.go(type,data);
    }
    
});

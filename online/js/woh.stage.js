/**
 * stage controler
 */

Laro.NS('woh.stage', function (L) {
    var pkg = this;
    this.statesName = {
        'intro': 0, // 介绍场景（开始界面）
        'drama': 1, // 字幕
        'dialogue': 2,//对话
        'cg':3,//CG播放
        'map': 4, // 大地图场景
        'battle': 5, // 战斗场景
        'gameover': 6 // 战斗结束
    };
    this.statesList = [
        this.statesName.intro, woh.stageClass.Intro,
        this.statesName.drama, woh.stageClass.Drama,
        this.statesName.dialogue, woh.stageClass.Dialogue,
        this.statesName.cg, woh.stageClass.Cg,
        this.statesName.map, woh.stageClass.Map,
        this.statesName.battle, woh.stageClass.Battle,
        this.statesName.gameover, woh.stageClass.Gameover
    ];
    
    function init () {
        pkg.fsm = new L.AppFSM(this, this.statesList);
        woh.gameScript.startExec(woh.g_config.script);
    }
    function go (stage, msg) {

        if (pkg.statesName[stage] == undefined) {
            return woh.warn('no this stage --> ' + stage);
        }
        pkg.fsm.enter(pkg.statesName[stage], msg);
    }
    
    this.update = function (dt) {
        this.fsm && this.fsm.update(dt);
    };
    this.draw = function (render) {
        this.fsm && this.fsm.draw(render);
    };
    
    this.init = init;
    this.go = go;
});

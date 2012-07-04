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
        'gameover': 6, // 战斗结束
        'loading': 7 // 公用资源加载场景，可以出现在每个需要资源预加载的场景前，具体应该加载某个具体的场景资源列表由 message 消息指定.
    };
    this.statesList = [
        this.statesName.intro, woh.stageClass.Intro,
        this.statesName.drama, woh.stageClass.Drama,
        this.statesName.dialogue, woh.stageClass.Dialogue,
        this.statesName.cg, woh.stageClass.Cg,
        this.statesName.map, woh.stageClass.Map,
        this.statesName.battle, woh.stageClass.Battle,
        this.statesName.gameover, woh.stageClass.Gameover,
        this.statesName.loading, woh.stageClass.Loading
    ];
    
    function init () {
        initStageCollection();
        pkg.fsm = new L.AppFSM(this, this.statesList);
        
        woh.gameScript.startExec(woh.g_config.script,'intro');//从开始界面开始
    }
    function go (stage, msg) {

        if (pkg.statesName[stage] == undefined) {
            return woh.warn('no this stage --> ' + stage);
        }
        pkg.fsm.enter(pkg.statesName[stage], msg);
    }
    function initStageCollection () {
        // 用于处理一些有事件交互的 sprite, 暂不管多点触摸的情况
        pkg.$ = new L.Stage(woh.els.canvas);
        pkg.$.addEventListener('mouseup', function (x, y) {
            if (woh.currentRoleGroup) {
                var r = woh.currentRoleGroup.getOneCanMove();
                r && r.moveTo(x, y);
                woh.currentRoleGroup.dispatch('pressEnd');
            }
        });
        pkg.$.addEventListener('mousemove', function (x, y) {
            woh.STAGE_MOUSE_POS = {x: x, y: y};
        });
    }
    
    this.update = function (dt) {
        this.fsm && this.fsm.update(dt);
        this.$.dispatchUpdate(dt);
    };
    this.draw = function (render) {
        this.fsm && this.fsm.draw(render);
        this.$.dispatchDraw(render);
    };
    
    this.init = init;
    this.go = go;
});

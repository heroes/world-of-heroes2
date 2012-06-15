/**
 * 资源加载场景，在每个需要资源预加载的场景前 都可以使用它
 * 具体的每个场景对应的资源配置列表统一在 g_config.js 中吧 
 */
Laro.NS('woh.stageClass', function (L) {
    var pkg = this;

    function loadCallback (p) {
        
    }
    
    var Loading = L.BaseState.extend(function () {
        this.timeInState = 0;        
    }).methods({
        enter: function (msg, fromState) {
            /*
             * 这里既然把 流程线 写到了config 里面，就不用再传 loading 完之后要去哪个地方了。直接 continueExec 吧
                msg: {
                    key: 'battle_1', //获取资源列表的key
                    toStage: 'battle' // 加载完后进入哪个stage
                }
            */
            woh.log('enter [loading]', msg);
            this.msg = msg;
            this.progress = 0;
            woh.show(woh.els.canvasWrap);
            
            var ress = woh.g_config.resources[msg.key].resources;
            woh.loader.preload(ress, L.curry(this.loadProgressCallback, this));
            
        },
        leave: function () {
            
        },
        update: function (dt) {
            this.timeInState += dt;
        },
        transition: function () {
            (this.timeInState - this._finishTime > 1) && woh.gameScript.continueExec();
        },
        draw: function (render) {
            // TODO
            render.drawSystemText(this.progress*100 + '%', render.getWidth()/2, render.getHeight()/2, 'red');
        },
        
        // 各种处理
        loadProgressCallback: function (p) {
            this.progress = Math.min(p, 1);
            if (this.progress == 1) { this._finishTime = this.timeInState } 
        }
    });

    this.Loading = Loading;

}); 
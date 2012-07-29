/**
 * 资源加载场景，在每个需要资源预加载的场景前 都可以使用它
 * 具体的每个场景对应的资源配置列表统一在 g_config.js 中吧 
 */
Laro.NS('woh.stageClass', function (L) {
    var pkg = this;

    function loadCallback (p) {
        
    }
    
    var Loading = L.BaseState.extend(function () {

        this.font = new L.Font({
            "outline_b": 0,
            "font": "Georgia",
            "outline": 2.0,
            "base_b": 255,
            "base_g": 255,
            "outline_r": 0,
            "base_r": 255,
            "size": 12,
            "id": "loading",
            "outline_g": 0
        });
        
        var byid = function (id) { return document.getElementById(id); }
        this.imgs = {
            person: byid('loadingImgPerson'),
            bg: byid('loadingImgBg'),
            barbg: byid('loadingImgBarBg'),
            bar: byid('loadingImgBar')
        };
        
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
            this.timeInState = 0;
            this._finishTime = Number.MAX_VALUE;
            this.msg = msg;
            this.progress = 0;
            
            var ress = woh.g_config.resources[msg.key].resources;
            //console.log(ress)
            woh.loader.preload(ress, L.curry(this.loadProgressCallback, this));
            
            woh.util.fadeIn(woh.els.canvasWrap);
        },
        leave: function () {
            woh.util.fadeOut(woh.els.canvasWrap);
        },
        update: function (dt) {
            this.timeInState += dt;
        },
        transition: function () {
            (this.timeInState - this._finishTime > 1) && woh.gameScript.continueExec();
        },
        draw: function (render) {
            // TODO
            var w = render.getWidth(),
                h = render.getHeight(),
                totalW = 370,
                barW = parseInt(totalW * this.progress);
                
            render.context.drawImage(this.imgs.bg, 0, 0, w, h);
            render.context.drawImage(this.imgs.barbg, 268, 328);
            render.context.drawImage(this.imgs.bar, 0, 0, barW, this.imgs.bar.height, 305, 366, barW, 38);
            render.context.drawImage(this.imgs.person, (w-this.imgs.person.width)/2-172 + barW, (h-this.imgs.person.height)/2-60);
            render.drawSystemText(Math.floor(this.progress*100) + '%', w/2 - 20, h/2 + 104, this.font);
        },
        
        // 各种处理
        loadProgressCallback: function (p) {
            this.progress = Math.min(p, 1);
            if (this.progress == 1) { this._finishTime = this.timeInState } 
        }
    });

    this.Loading = Loading;

}); 
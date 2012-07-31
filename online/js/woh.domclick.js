/* 统一处理 dom[data-cmd] 的 click 事件*/
Laro.NS('woh.evt', function (L) {
    var pkg = this;
    
    function dispatchClick (e) {
        var tar = woh.util.getActionTarget(e, 3);
        if (tar) {
            var cmd = tar.getAttribute('data-cmd');
            switch (cmd) {
                // 技能btn
                case 'skill001':
                    alert('技能1');
                    break;
                case 'skill002':
                    alert('技能2');
                    break;
                
                //返回首页
                case 'backToHome':
                    woh.stage.go('intro');
                    break;
            }
        }
    }
    
    function init () {
        document.body.addEventListener('click', dispatchClick, false);
    }
    this.init = init;
});
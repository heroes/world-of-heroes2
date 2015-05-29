/* 统一处理 dom[data-cmd] 的 click 事件*/
Laro.NS('woh.evt', function (L) {
    var pkg = this;
    
    function dispatchClick (e) {
        var tar = woh.util.getActionTarget(e, 3);
        if (tar) {
            var cmd = tar.getAttribute('data-cmd'),
                roleId= tar.getAttribute('role-type')||null;
            //roleId和cmd分别对应人物ID和技能ID，initSkills写在woh.role.js文件里，可以改成其他的。
            if(roleId&&!woh.runtime.cdCounter[cmd].cd){
                woh.currentRoleGroup.get(roleId).initSkills(cmd);
                woh.stageClass.Battle.enableScreenMask(0.8);
                setTimeout('woh.stageClass.Battle.disableScreenMask()',1000);
                tar.querySelector('.mask').style.height='100px';
                woh.runtime.cdCounter[cmd].cd=true;
                woh.runtime.cdCounter[cmd].cdTime=0;
            };
            switch (cmd) {
                // // 技能btn
                // case '001':
                //     alert('技能1');
                //     break;
                // case '002':
                //     alert('技能2');
                //     break;
                //返回首页
                case 'backToHome':
                    woh.stage.go('intro');
                    break;
            }
        }
    }
    
    function init () {
        var evt = woh.isTouchDevice ? 'touchstart' : 'click';
        document.body.addEventListener(evt, dispatchClick, false);
    }
    this.init = init;
});
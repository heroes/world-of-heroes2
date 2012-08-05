/* 统一处理 dom[data-cmd] 的 click 事件*/
Laro.NS('woh.evt', function (L) {
    var pkg = this;
    
    function dispatchClick (e) {
        var tar = woh.util.getActionTarget(e, 3);
        if (tar) {
            var cmd = tar.getAttribute('data-cmd'),
                roleId= tar.getAttribute('role-type')||null;
            //roleId和cmd分别对应人物ID和技能ID，initSkills写在woh.role.js文件里，可以改成其他的。
            roleId&&woh.currentRoleGroup.get(roleId).initSkills(cmd);
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
        document.body.addEventListener('click', dispatchClick, false);
    }
    this.init = init;
});
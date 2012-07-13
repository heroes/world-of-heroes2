/* skill icons view */
Laro.NS('woh.skills.tpl', {
    '001': '<img class="skill-icon" data-cmd="skill1" src="./resources/images/skillicons/001.jpg" />\
            <img class="skill-icon" data-cmd="skill2" src="./resources/images/skillicons/002.jpg" />\
            <img class="skill-icon" data-cmd="skill3" src="./resources/images/skillicons/003.jpg" />\
            <img class="skill-icon" data-cmd="skill4" src="./resources/images/skillicons/004.jpg" />',
            
    '002': '<img class="skill-icon" data-cmd="skill5" src="./resources/images/skillicons/005.jpg" />\
            <img class="skill-icon" data-cmd="skill6" src="./resources/images/skillicons/006.jpg" />\
            <img class="skill-icon" data-cmd="skill7" src="./resources/images/skillicons/007.jpg" />\
            <img class="skill-icon" data-cmd="skill8" src="./resources/images/skillicons/008.jpg" />'
});

Laro.NS('woh.skills', function (L) {
    var els = {};
    function getEls () {
        els.container = document.getElementById('role-skill-container');
    }
    function bindEvent () {
        els.container.addEventListener('click', dispathEvent, false);
    }
    function dispathEvent (e) {
        var tar = woh.util.getActionTarget(e, 3);
        if (tar) {
            var cmd = tar.getAttribute('data-cmd');
            alert(cmd);
            switch (cmd) {
                case 'skill1':
                    // todo, 调用释放第一个技能的方法
                    break;
                case 'skill2':
                    //todo
                    break;
            }
        }
    }
    // 显示对应人物 的技能列表
    this.show = function (type) {
        var h = woh.skills.tpl[type];
        if (h) els.container.innerHTML = h;
    };
    
    this.init = function () {
        getEls();
        bindEvent();
    }
});

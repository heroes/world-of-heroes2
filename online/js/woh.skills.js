/* skill icons view（改成读写配置文件里的人物技能数据） */
// Laro.NS('woh.skills.tpl', {
//     '001': '<img class="skill-icon" data-cmd="skill1" src="./resources/images/skillicons/001.jpg" />\
//             <img class="skill-icon" data-cmd="skill2" src="./resources/images/skillicons/002.jpg" />\
//             <img class="skill-icon" data-cmd="skill3" src="./resources/images/skillicons/003.jpg" />\
//             <img class="skill-icon" data-cmd="skill4" src="./resources/images/skillicons/004.jpg" />',
            
//     '002': '<img class="skill-icon" data-cmd="skill5" src="./resources/images/skillicons/005.jpg" />\
//             <img class="skill-icon" data-cmd="skill6" src="./resources/images/skillicons/006.jpg" />\
//             <img class="skill-icon" data-cmd="skill7" src="./resources/images/skillicons/007.jpg" />\
//             <img class="skill-icon" data-cmd="skill8" src="./resources/images/skillicons/008.jpg" />'
// });

Laro.NS('woh.skills', function (L) {
    var els = {};
    function getEls () {
        els.container = document.getElementById('role-skill-container');
    }

    // 显示对应人物 的技能列表
    this.show = function (id) {
        var h = [],
            skillList=woh.runtime.role[id]['skill_list'];
        for(var key in skillList){
            console.log(key);
            if(skillList[key]!=0){
                h.push('<img class="skill-icon" role-type="'+id+'" data-cmd="'+key+'" src="'+woh.skill_data[key]['icon']+'">');
            }
        }
        h=h.join('');
        console.log(h);
        els.container.innerHTML = h;
    };
    
    this.init = function () {
        getEls();
    }
});

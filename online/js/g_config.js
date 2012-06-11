/* global default configs */
woh.g_config = {
    canvasWidth: 960,
    canvasHeight: 640
};

/* stage config */
woh.g_config.script = [
    {
        type:"intro",
        data: {
            index:{
                src: './resources/images/index.jpg',
                width: 1032,
                height: 774
            }
        }        
    },
    {
        type: "drama",
        data:[
                {
                    appear: 'auto',
                    data: [
                        '当唐如捡起沙滩上第九十九个贝壳的时候——',
                        '他们相遇了。',
                        '这是命运的邂逅。'    
                    ]
                },
                {
                    appear: 'auto',
                    data: [
                        '阳光明澈，将海水映得蔚蓝',
                        '对面那人的脸在逆光中显得暧昧不明，辨不出是男是女',
                        '织锦的华裳在海风中衣袂翩然',
                        '微笑，长发，美得如同不食人间烟火的精灵'
                    ]
                }                
        ]
    },
    {
        type: "drama",
        data:[
                {
                    appear: 'auto',
                    data: [
                        '发生这种事情呢，其实谁都不想的',
                        '做人呢，最重要的就是开心。',
                        '喏，我下面给你吃吧。'    
                    ]
                }
        ]
    }
];

//主要思想：剧情脚本的数据全部用json来封装，然后通过msg传入场景
//'next'用来存储下一幕的
woh.story_script={
    '000':{
        'enable':'true',
        'type':'dead',
        data:{},
        'next':'001'
    },
    '001':{
        'enable':'true',
        'type':'intro',//标记相应的stage类型
        data:{},
        'next':'002'
    },
    '002':{
        'enable':'true',
        'type':'CG',//标记相应的stage类型
        data:{},
        'next':'003'
    },
    '003':{
        'enable':'true',
        'type':'dialogue',
        data:{},
        'next':'004'
    },
    '004':{
        'enable':'true',
        'type':'CG',
        data:{

        },
        'next':'005'
    },
    '005':{
        'enable':'true',
        'type':'battle',
        data:{}
       }
}


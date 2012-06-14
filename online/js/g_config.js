/* global default configs */
woh.g_config = {
    canvasWidth: 960,
    canvasHeight: 640
};

/* stage config */
/*woh.g_config.script = [
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
];*/

//主要思想：剧情脚本的数据全部用json来封装，然后通过msg传入场景
//'next'用来存储下一幕的
woh.g_config.script={
    //死亡
    '0':{
        type:'dead',
        data: {},     
        next:'1'
    },
    //开始界面
    '1':{
        type:'intro',//标记相应的stage类型
        data: {
            index:{
                src: './resources/images/index.jpg',
                width: 1032,
                height: 774
            }
        },
        next:'2'
    },
    '2':{
        type:'drama',//标记相应的stage类型
        data:[
                {
                    appear: 'auto',
                    data: [
                        '当唐如捡起沙滩上第九十九个贝壳的时候——',
                        '他们相遇了。',
                        '这是命运的邂逅。'    
                    ]
                }
        ],
        next:'3'
    },
    '3':{
        type:'cg',
        data:{},
        next:'4'
    },
    '4':{
        type:'dialogue',
        data:{

        },
        next:'5'
    },
    '5':{
        type:'battle',
        data:{},
        next:'6'
       }
    '6':{
        type:'map',
        data:{},
        next:'1'
    }
}


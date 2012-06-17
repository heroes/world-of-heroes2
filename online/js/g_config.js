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
        repeat:true,//标记在流程中是否允许重复出现（即选关的时候是否会被再次触发）
        data: {
            index:{
                src: './resources/images/index.jpg',
                width: 1032,
                height: 774
            }
        },
        next:'4'
    },
    '2':{
        type:'drama',//标记相应的stage类型
        repeat:false,
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
        repeat:false,
        data:{},
        next:'4'
    },
    '4':{
        type:'dialogue',
        repeat:false,
        data:[
            {'avatar':'','name':'唐如','content':'好美的人哦……',position:'left'},
            {'avatar':'','name':'？？','content':'你知道……人鱼吗？',position:'right'},
            {'avatar':'','name':'唐如','content':'人鱼？古书里面倒是记载着不少关于这个的传说……',position:'left'},
            {'avatar':'','name':'','content':'喂喂喂，你怎么了！'},
            {'avatar':'','name':'？？','content':'……',position:'right'},
            {'avatar':'','name':'唐如','content':'你没事吧，醒醒啊！呼吸很平稳，看来只是晕过去了而已。',position:'left'},
            {'avatar':'','name':'唐如','content':'天啊，哪来那么多的大螃蟹！不好，螃蟹似乎是冲着那个人来的。不管怎么样，先把它们击退吧。',position:'left'}
        ],
        next:'7'
    },
    
    '5':{
        type:'battle',
        repeat:false,
        data:{},
        next:'6'
       },
    '6':{
        type:'map',
        repeat:true,
        data:{},
        next:'1'
    },
    
    '7': {
        type: 'loading',
        repeat: true,
        data: {
            key: 'battle_1' // 从 resources 中拿battle_1的数据
        },
        next: '5'
    }
};


// 暂时放在此吧 -_-! ，到时候需要整合再说，每个场景对应的需要预加载的资源列表
woh.g_config.resources = {
    // 比如： 战斗场景，随便测试一个, 假如第一场战斗
    // 根目录基于 resources/
    battle_1: {
        type: 'battle',
        resources: [
            'images/test/BG3.jpg',
            'images/test/boss_2.png'
        ]
    }
};

// 精灵啦啦啦啦
woh.g_config.sprites = {
    // 用于测试，大侠一的boss_2
    // http://hongru.github.com/proj/laro/Leditor/animation/index.html
    "boss_2": {
        "info": {
            "nbrOfFrames": 5,
            "name": "boss_2",
            "type": "animation",
            "framerate": 10,
            "pivotx": 125,
            "pivoty": 92,
            "events": []
        },
        "data": [
            [0,0,250,183,0,0,250,183],
            [251,0,501,183,251,0,501,183],
            [502,0,752,183,502,0,752,183],
            [753,0,1003,183,753,0,1003,183],
            [1004,0,1254,183,1004,0,1254,183]
        ],
        "filename": "images/test/boss_2.png"
    }
}


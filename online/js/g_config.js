/* global default configs */
woh.g_config = {
    canvasWidth: 960,
    canvasHeight: 640
};

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
        next:'2'
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
            {'avatar':'resources/images/dialogue/UI-dialog-character.png','name':'唐如','content':'好美的人哦……',position:'left'},
            {'avatar':'resources/images/dialogue/UI-dialog-character.png','name':'？？','content':'你知道……人鱼吗？',position:'right'},
            {'avatar':'resources/images/dialogue/UI-dialog-character.png','name':'唐如','content':'人鱼？古书里面倒是记载着不少关于这个的传说……',position:'left'},
            {'avatar':'','name':'','content':'喂喂喂，你怎么了！'},
            {'avatar':'resources/images/dialogue/UI-dialog-character.png','name':'？？','content':'……',position:'right'},
            {'avatar':'resources/images/dialogue/UI-dialog-character.png','name':'唐如','content':'你没事吧，醒醒啊！呼吸很平稳，看来只是晕过去了而已。',position:'left'},
            {'avatar':'resources/images/dialogue/UI-dialog-character.png','name':'唐如','content':'天啊，哪来那么多的大螃蟹！不好，螃蟹似乎是冲着那个人来的。不管怎么样，先把它们击退吧。',position:'left'}
        ],
        next:'5'
    },
    // 
    '7':{
        type:'loading',
        repeat:true,
        data:{
            key: 'battle_1'
        },
        next:'6'
    },
    '6':{
        type:'battle',
        repeat:false,
        data:{},
        next:'7'
    },
    '7':{
        type:'map',
        repeat:true,
        data:{},
        next:'1'
    }
};

// 暂时放在此吧 -_-! ，到时候需要整合再说，每个场景对应的需要预加载的资源列表
woh.g_config.resources = {
    // 比如： 战斗场景，随便测试一个, 假如第一场战斗
    // 根目录基于 resources/
    intro:{

    },
    battle_1: {
        type: 'battle',
        resources: [
            'images/bg/game-bg-beach.jpg',
            'images/sprites/rio_tang/stand_r1_c1.png',
            'images/sprites/rio_tang/stand_r1_c2.png',
            
            'images/sprites/rio_tang/hit_r1_c1.png',
            'images/sprites/rio_tang/hit_r1_c2.png',
            
            'images/sprites/rio_tang/hurt_r1_c1.png',
            'images/sprites/rio_tang/hurt_r1_c2.png',
            
            'images/sprites/rio_tang/magic_r1_c1.png',
            'images/sprites/rio_tang/magic_r1_c2.png',
            
            'images/sprites/rio_tang/move_r1_c1.png',
            'images/sprites/rio_tang/move_r1_c2.png',
            
            'images/circle.png',
            'images/pie.png'
        ]
    }
};

// 精灵啦啦啦啦
woh.g_config.sprites = {
    // http://hongru.github.com/proj/laro/Leditor/animation/index.html
    // 跟public 里面 人物 uid 对应， 001 -> 唐如
    "001": {
        "areadata": {
            standup:[0,0,140,210],
            standdown:[0,0,140,210]
        },
        "stand": [
            // role
            {
                "info": {
                    "nbrOfFrames": 2,
                    "name": "",
                    "type": "animation",
                    "framerate": 4,
                    "pivotx": 145,
                    "pivoty": 122,
                    "events": [
                        {
                            name: 'standup',
                            frame: 1 //第一帧进入时触发
                        },
                        {
                            name: 'standdown',
                            frame: 2 // 第二帧进入时触发
                        }
                    ]
                },
                "data": [
                    [0,0,289,244,0,0,289,244],
                    [290,0,579,244,290,0,579,244]
                ],
                "filename": 'images/sprites/rio_tang/stand_r1_c1.png'
            },
            {
                "info": {
                    "nbrOfFrames": 2,
                    "name": "",
                    "type": "animation",
                    "framerate": 4,
                    "pivotx": 145,
                    "pivoty": 122,
                    "events": []
                },
                "data": [
                    [0,0,289,244,0,0,289,244],
                    [290,0,579,244,290,0,579,244]
                ],
                "filename": "images/sprites/rio_tang/stand_r1_c2.png"
            }
        ],
        "move": [
            {
                "info": {
                    "nbrOfFrames": 4,
                    "name": "",
                    "type": "animation",
                    "framerate": 6,
                    "pivotx": 145,
                    "pivoty": 122,
                    "events": []
                },
                "data": [
                    [0,0,289,244,0,0,289,244],
                    [290,0,579,244,290,0,579,244],
                    [580,0,869,244,580,0,869,244],
                    [870,0,1159,244,870,0,1159,244]
                ],
                "filename": "images/sprites/rio_tang/move_r1_c1.png"
            },
            {
                "info": {
                    "nbrOfFrames": 4,
                    "name": "",
                    "type": "animation",
                    "framerate": 6,
                    "pivotx": 145,
                    "pivoty": 122,
                    "events": []
                },
                "data": [
                    [0,0,289,244,0,0,289,244],
                    [290,0,579,244,290,0,579,244],
                    [580,0,869,244,580,0,869,244],
                    [870,0,1159,244,870,0,1159,244]
                ],
                "filename": "images/sprites/rio_tang/move_r1_c2.png"
            }
        ],
        "hit": [
            {
                "info": {
                    "nbrOfFrames": 4,
                    "name": "",
                    "type": "animation",
                    "framerate": 8,
                    "pivotx": 145,
                    "pivoty": 122,
                    "events": []
                },
                "data": [
                    [0,0,289,244,0,0,289,244],
                    [290,0,579,244,290,0,579,244],
                    [580,0,869,244,580,0,869,244],
                    [870,0,1159,244,870,0,1159,244]
                ],
                "filename": "images/sprites/rio_tang/hit_r1_c1.png"
            },
            {
                "info": {
                    "nbrOfFrames": 4,
                    "name": "",
                    "type": "animation",
                    "framerate": 8,
                    "pivotx": 145,
                    "pivoty": 122,
                    "events": []
                },
                "data": [
                    [0,0,289,244,0,0,289,244],
                    [290,0,579,244,290,0,579,244],
                    [580,0,869,244,580,0,869,244],
                    [870,0,1159,244,870,0,1159,244]
                ],
                "filename": "images/sprites/rio_tang/hit_r1_c2.png"
            }
        ]
    }
}


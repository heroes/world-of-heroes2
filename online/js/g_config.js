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
        next:'7'
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
            {'avatar':'resources/images/dialogue/UI-dialog-character.png','name':'唐如','content':'好美的人哦……',position:'left',globalBg : 'resources/images/bg/bg-beach-dusk.jpg'},
            {'avatar':'resources/images/dialogue/UI-dialog-character.png','name':'？？','content':'你知道……人鱼吗？',position:'right',globalBg : 'resources/images/bg/bg-beach-dusk.jpg'},
            {'avatar':'resources/images/dialogue/UI-dialog-character.png','name':'唐如','content':'人鱼？古书里面倒是记载着不少关于这个的传说……',position:'left',globalBg : 'resources/images/bg/bg-beach-dusk.jpg'},
            {'avatar':'','name':'','content':'喂喂喂，你怎么了！',globalBg : 'resources/images/bg/bg-beach-dusk.jpg'},
            {'avatar':'resources/images/dialogue/UI-dialog-character.png','name':'？？','content':'……',position:'right',globalBg : 'resources/images/bg/bg-beach-dusk.jpg'},
            {'avatar':'resources/images/dialogue/UI-dialog-character.png','name':'唐如','content':'你没事吧，醒醒啊！呼吸很平稳，看来只是晕过去了而已。',position:'left',globalBg : 'resources/images/bg/bg-beach-dusk.jpg'},
            {'avatar':'resources/images/dialogue/UI-dialog-character.png','name':'唐如','content':'天啊，哪来那么多的大螃蟹！不好，螃蟹似乎是冲着那个人来的。不管怎么样，先把它们击退吧。',position:'left',globalBg : 'resources/images/bg/bg-beach-dusk.jpg'}
        ],
        next:'5'
    },
    // 
    '5':{
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
        next:'5'
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
            'images/bg/bg-beach-dusk.jpg',
            
            'images/circle.png',
            'images/pie.png',

            //载入无装备状态的资源
            'images/sprites/clothes/001/none/attack.png',
            'images/sprites/clothes/001/none/hurted.png',
            'images/sprites/clothes/001/none/magic.png',
            'images/sprites/clothes/001/none/stand.png',
            'images/sprites/clothes/001/none/run.png',
            'images/sprites/clothes/001/001/stand.png',

            'images/sprites/weapon/001/attack.png',
            'images/sprites/weapon/001/hurted.png',
            'images/sprites/weapon/001/magic.png',
            'images/sprites/weapon/001/stand.png',
            'images/sprites/weapon/001/run.png',

            'images/sprites/weapon/002/attack.png',
            'images/sprites/weapon/002/hurt.png',
            'images/sprites/weapon/002/magic.png',
            'images/sprites/weapon/002/stand.png',
            'images/sprites/weapon/002/run.png',
        ]
    }
};

//衣服的动画数据
woh.g_config.clothes={
    'none':{
        "stand":{
            "info": {
                "nbrOfFrames": 2,
                "name": "stand",
                "type": "animation",
                "framerate": 2,
                "pivotx": 100,
                "pivoty": 85,
                "events": [
                    {name:'standup',frame:1},//第一帧进入时触发
                    {name:'standdown',frame:2}//第二帧进入时触发
                ]
            },
            "data": [
                [0,0,199,169,0,0,199,169],
                [200,0,399,169,200,0,399,169]
            ],
            "filename": "images/sprites/clothes/001/none/stand.png"
        }, 
        "run":{
            "info": {
                "nbrOfFrames": 4,
                "name": "",
                "type": "animation",
                "framerate": 4,
                "pivotx": 100,
                "pivoty": 85,
                "events": []
            },
            "data": [
                [0,0,199,169,0,0,199,169],
                [200,0,399,169,200,0,399,169],
                [400,0,599,169,400,0,599,169],
                [600,0,799,169,600,0,799,169]
            ],
            "filename": "images/sprites/clothes/001/none/run.png"
        },
        "attack":{
            "info": {
                "nbrOfFrames": 4,
                "name": "",
                "type": "animation",
                "framerate": 10,
                "pivotx": 100,
                "pivoty": 85,
                "events": []
            },
            "data": [
                [0,0,199,169,0,0,199,169],
                [200,0,399,169,200,0,399,169],
                [400,0,599,169,400,0,599,169],
                [600,0,799,169,600,0,799,169]
            ],
            "filename": "images/sprites/clothes/001/none/attack.png"
        },
        "hurted": {
            "info": {
                "nbrOfFrames": 2,
                "name": "hurted",
                "type": "animation",
                "framerate": 4,
                "pivotx": 100,
                "pivoty": 85,
                "events": []
            },
            "data": [
                [0,0,199,169,0,0,199,169],
                [200,0,399,169,200,0,399,169]
            ],
            "filename": "images/sprites/clothes/001/none/hurted.png"
        },
        "magic": {
            "info": {
                "nbrOfFrames": 4,
                "name": "hurted",
                "type": "animation",
                "framerate": 2,
                "pivotx": 100,
                "pivoty": 85,
                "events": []
            },
            "data": [
                [0,0,199,169,0,0,199,169],
                [200,0,399,169,200,0,399,169],
                [400,0,599,169,400,0,599,169],
                [600,0,799,169,600,0,799,169]
            ],
            "filename": "images/sprites/clothes/001/none/magic.png"
        }
    },  
    '001':{
        "stand":{
            "info": {
                "nbrOfFrames": 2,
                "name": "stand",
                "type": "animation",
                "framerate": 2,
                "pivotx": 100,
                "pivoty": 85,
                "events": [
                    {name:'standup',frame:1},//第一帧进入时触发
                    {name:'standdown',frame:2}//第二帧进入时触发
                ]
            },
            "data": [
                [0,0,199,169,0,0,199,169],
                [200,0,399,169,200,0,399,169]
            ],
            "filename": "images/sprites/clothes/001/001/stand.png"
        }, 
        "run":{
            "info": {
                "nbrOfFrames": 4,
                "name": "",
                "type": "animation",
                "framerate": 4,
                "pivotx": 100,
                "pivoty": 85,
                "events": []
            },
            "data": [
                [0,0,199,169,0,0,199,169],
                [200,0,399,169,200,0,399,169],
                [400,0,599,169,400,0,599,169],
                [600,0,799,169,600,0,799,169]
            ],
            "filename": "images/sprites/clothes/001/001/run.png"
        },
        "attack":{
            "info": {
                "nbrOfFrames": 4,
                "name": "",
                "type": "animation",
                "framerate": 10,
                "pivotx": 100,
                "pivoty": 85,
                "events": []
            },
            "data": [
                [0,0,199,169,0,0,199,169],
                [200,0,399,169,200,0,399,169],
                [400,0,599,169,400,0,599,169],
                [600,0,799,169,600,0,799,169]
            ],
            "filename": "images/sprites/clothes/001/001/attack.png"
        },
        "hurted": {
            "info": {
                "nbrOfFrames": 2,
                "name": "hurted",
                "type": "animation",
                "framerate": 4,
                "pivotx": 100,
                "pivoty": 85,
                "events": []
            },
            "data": [
                [0,0,199,169,0,0,199,169],
                [200,0,399,169,200,0,399,169]
            ],
            "filename": "images/sprites/clothes/001/001/hurted.png"
        },
        "magic": {
            "info": {
                "nbrOfFrames": 4,
                "name": "hurted",
                "type": "animation",
                "framerate": 2,
                "pivotx": 100,
                "pivoty": 85,
                "events": []
            },
            "data": [
                [0,0,199,169,0,0,199,169],
                [200,0,399,169,200,0,399,169],
                [400,0,599,169,400,0,599,169],
                [600,0,799,169,600,0,799,169]
            ],
            "filename": "images/sprites/clothes/001/001/magic.png"
        }
    },   
}
//武器的动画数据
woh.g_config.weapon={
    'none':{},
    '001':{
        "stand":{
            "info": {
                "nbrOfFrames": 2,
                "name": "",
                "type": "animation",
                "framerate": 2,
                "pivotx": 100,
                "pivoty": 85,
                "events": []
            },
            "data": [
                [0,0,199,169,0,0,199,169],
                [200,0,399,169,200,0,399,169]
            ],
            "filename": "images/sprites/weapon/001/stand.png"
        },
        "run":{
                "info": {
                    "nbrOfFrames": 4,
                    "name": "",
                    "type": "animation",
                    "framerate": 4,
                    "pivotx": 100,
                    "pivoty": 85,
                    "events": []
                },
                "data": [
                    [0,0,199,169,0,0,199,169],
                    [200,0,399,169,200,0,399,169],
                    [400,0,599,169,400,0,599,169],
                    [600,0,799,169,600,0,799,169]
                ],
                "filename": "images/sprites/weapon/001/run.png"
        },
        "attack":{
            "info": {
                "nbrOfFrames": 4,
                "name": "",
                "type": "animation",
                "framerate": 10,
                "pivotx": 100,
                "pivoty": 85,
                "events": []
            },
            "data": [
                [0,0,199,169,0,0,199,169],
                [200,0,399,169,200,0,399,169],
                [400,0,599,169,400,0,599,169],
                [600,0,799,169,600,0,799,169]
            ],
            "filename": "images/sprites/weapon/001/attack.png"
        }
    },
    '002':{
        "stand":{
            "info": {
                "nbrOfFrames": 2,
                "name": "",
                "type": "animation",
                "framerate": 2,
                "pivotx": 100,
                "pivoty": 85,
                "events": []
            },
            "data": [
                [0,0,199,169,0,0,199,169],
                [200,0,399,169,200,0,399,169]
            ],
            "filename": "images/sprites/weapon/002/stand.png"
        },
        "run":{
                "info": {
                    "nbrOfFrames": 4,
                    "name": "",
                    "type": "animation",
                    "framerate": 4,
                    "pivotx": 100,
                    "pivoty": 85,
                    "events": []
                },
                "data": [
                    [0,0,199,169,0,0,199,169],
                    [200,0,399,169,200,0,399,169],
                    [400,0,599,169,400,0,599,169],
                    [600,0,799,169,600,0,799,169]
                ],
                "filename": "images/sprites/weapon/002/run.png"
        },
        "attack":{
            "info": {
                "nbrOfFrames": 4,
                "name": "",
                "type": "animation",
                "framerate": 10,
                "pivotx": 100,
                "pivoty": 85,
                "events": []
            },
            "data": [
                [0,0,199,169,0,0,199,169],
                [200,0,399,169,200,0,399,169],
                [400,0,599,169,400,0,599,169],
                [600,0,799,169,600,0,799,169]
            ],
            "filename": "images/sprites/weapon/002/attack.png"
        }
    },
}
 // 精灵啦啦啦啦
woh.g_config.monsters = {

    "crab": {
        "areadata": {
            standup: [0, 0, 190, 120],
            standdown: [0, 0, 190, 120]
        },
        "stand": [
        // role
                {
                "info": {
                    "nbrOfFrames": 2,
                    "name": "stand",
                    "type": "animation",
                    "framerate": 2,
                    "pivotx": 100,
                    "pivoty": 85,
                    "events": [
                            { name: 'standup', frame: 1 }, //第一帧进入时触发
                            {name: 'standdown', frame: 2}//第二帧进入时触发
                        ]
                },
                "data": [
                        [380,0,569,119,380,0,569,119],
                        [570,0,759,119,570,0,759,119]
                    ],
                "filename": "images/monster/normal001-crab.png"
            }
        ],
        "run": [
            {
                "info": {
                    "nbrOfFrames": 4,
                    "name": "",
                    "type": "animation",
                    "framerate": 4,
                    "pivotx": 100,
                    "pivoty": 85,
                    "events": []
                },
                "data": [
                        [380,0,569,119,380,0,569,119],
                        [570,0,759,119,570,0,759,119]
                ],
                "filename": "images/monster/normal001-crab.png"
            }
        ],
        "attack": [
            {
                "info": {
                    "nbrOfFrames": 4,
                    "name": "",
                    "type": "animation",
                    "framerate": 10,
                    "pivotx": 100,
                    "pivoty": 85,
                    "events": []
                },
                "data": [
                    [570,0,759,119,570,0,759,119],
                    [190,0,379,119,190,0,379,119]
                ],
                "filename": "images/monster/normal001-crab.png"
            }
        ],
        "hurted": [
            {
                "info": {
                    "nbrOfFrames": 4,
                    "name": "",
                    "type": "animation",
                    "framerate": 10,
                    "pivotx": 100,
                    "pivoty": 85,
                    "events": []
                },
                "data": [
                    [0,0,189,119,0,0,189,119]
                ],
                "filename": "images/monster/normal001-crab.png"
            }
        ]
    }

}
//用于初始化人物的数据
woh.role_init_data={
    '001':{
        'name':'唐如',//名字
        'type':'001',//类型
        'lv':0,//等级(根据类型和等级读取其他数据)
        'avatar':'./resources/images/map/ava/rio_tang.png',//头像
        'exp':0,//当前经验值
        'weapon':'001',//武器编号
        'clothes':'001',//衣服编号,none表示裸奔
        'skill_point':'0',//剩余技能点
        'skill_list':{
            '001':0, 
            '002':0,
            '003':0,
            '004':0
        },//技能列表（编号-等级）
        "areadata": {
            standup:[0,0,140,210],
            standdown:[0,0,140,210]
        }
    },
    '002':{
        'name':'程少非',//名字
        'type':'002',//类型
        'lv':2,//等级
        'avatar':'./resources/images/map/ava/shaofei_cheng.png',//头像
        'exp':1300,//当前经验值
        'weapon':'003',//武器编号
        'clothes':'none',//衣服编号
        'skill_point':'0',
        'skill_list':{
            '005':1,
            '006':1,
            '007':0,
            '008':0,
        }
    },
    '003':{
        'name':'碧青',//名字
        'type':'003',//类型
        'lv':2,//等级
        'avatar':'./resources/images/map/ava/biqing_guo.png',//头像
        'exp':1300,//当前经验值
        'weapon':'005',//武器编号
        'clothes':'005',//衣服编号
        'skill_point':0,
        'skill_list':{
            '009':1,
            '010':1,
            '011':0,
            '012':0
        }
    },
}

woh.item_data={
        'weapon':{
            '001':{
                'name':'匕首',//名称
                'description':'勉强能够用来防身的便宜货,居家旅行常备的防盗工具。',
                'icon':'./resources/images/map/items/w_001.png',
                'health':0,
                'attack':10,
                'defend':3,
                'crit':0,
                'for':'001',
            },
            '002':{
                'name':'玉殃',//名称
                'description':'美其名曰“玉”，其实不过是打磨得比较光滑的青铜而已。',//描述
                'icon':'./resources/images/map/items/w_002.png',//图标路径
                'health':0,//血量加成
                'attack':3,//攻击加成
                'defend':0,//防御加成
                'crit':0,//暴击加成
                'for':'001',//适用角色（读取role_data中的数据）
            },
            '003':{
                'name':'龙泉剑',
                'description':'“装饰着金色精美花纹的剑，一看就很贵的样子，至于攻击力，就不得而知了。',
                'icon':'./resources/images/map/items/w_003.png',
                'health':0,
                'attack':10,
                'defend':3,
                'crit':0,
                'for':'002',
            },
            '004':{
                'name':'飞渊剑',
                'description':'据说取材于极渊苦寒之地的紫晶，看起来挺像那么回事的。',
                'icon':'./resources/images/map/items/w_004.png',
                'health':0,
                'attack':10,
                'defend':3,
                'crit':0,
                'for':'002',   
            },
            '005':{
                'name':'阴阳镜',
                'description':'阴阳二气，万物之宗，以之为镜，可窥天地一斑。',
                'icon':'./resources/images/map/items/w_005.png',
                'health_addition':0,
                'attack_addition':10,
                'defend_addition':3,
                'crit_addition':0,
                'for':'003',   
            },
            '006':{
                'name':'紫晶珠',
                'description':'紫光流转的珠子,煞是好看,据说具有神秘的力量。',
                'icon':'images/weapon/icons/001.png',
                'model':'images/weapon/model/001.png',
                'health_addition':0,
                'attack_addition':10,
                'defend_addition':3,
                'crit_addition':0,
                'for':'003',  
            },
            '007':{
                'name':'十八妹',
                'description':'虽然外表看起来像是一把菜刀,但是其主人坚称它是一柄剑,能够增加一定程度的攻击和防御。',
                'icon':'images/weapon/icons/001.png',
                'model':'images/weapon/model/001.png',
                'health_addition':0,
                'attack_addition':10,
                'defend_addition':3,
                'crit_addition':0,
                'for':'003',  
            }
        },

        'clothes':{
            '001':{
                'name':'粗布衣',
                'description':'旧衣店出售的破旧衣服,上面还打了几个补丁。',
                'icon':'./resources/images/map/items/c_001.png',
                'health':0,
                'attack':10,
                'defend':3,
                'crit':0,
                'for':'001',//适用角色
            },
            '002':{
                'name':'云锦深衣',
                'description':'看起来是高级武将使用的样式，但已十分破旧，上有云锦纹路，据说有护持作用。',
                'icon':'./resources/images/map/items/c_001.png',
                'health':0,
                'attack':10,
                'defend':3,
                'crit':0,
                'for':'001',
            },
            '003':{
                'name':'锦袍',
                'description':'富家公子常穿的便服,冬暖夏凉。',
                'icon':'./resources/images/map/items/c_003.png',
                'health':0,
                'attack':10,
                'defend':3,
                'crit':0,
                'for':'002',//适用角色
            },
            '004':{
                'name':'蜀锦袍',
                'description':'“犹馀蜀中锦,爱惜比甘棠。”蜀地的锦缎千载驰名,用其制作的袍子自然也价格不菲。',
                'icon':'./resources/images/map/items/c_003.png',
                'health':0,
                'attack':10,
                'defend':3,
                'crit':0,
                'for':'002',//适用角色
            },
            '005':{
                'name':'华彩裙',
                'description':'少女们钟爱的薄绸裙,在阳光下会隐隐泛出五色华彩。',
                'icon':'./resources/images/map/items/c_005.png',
                'health':0,
                'attack':10,
                'defend':3,
                'crit':0, 
                'for':'003',//适用角色
            },
            '006':{
                'name':'麟裳',
                'description':'人鱼国最常见的平民装束。',
                'icon':'./resources/images/map/items/c_005.png',
                'health':0,
                'attack':10,
                'defend':3,
                'crit':0,
                'for':'003',//适用角色
            }
        }
}

//技能影响
//直接伤害,回复生命,区域伤害,添加buff
//buff类型：速度类（加减）,防御类（加减）,暴击类（加减）,生命类（加减）
//注：大招均为手势识别施放,每个人的第四个招为大招

//目前唐如的三个技能分别为 单体攻击 瞬发群体攻击 吟唱群体攻击 大招为全屏幕地图炮高伤害攻击 

woh.skill_data={
    '001':{
        'name':'疾风刺',
        'description':'追求一击必杀的招式,轻灵迅捷,其威力在不同修为者手中截然不同。（冲向对方进行一次攻击）',//技能描述
        'icon':'resources/iamges/001.png',//技能图标路径
        'level_limit':[1,2,4,5,7],//每一阶段的可点等级
        'cd':15,//CD时间
        
        //技能影响
        'data':{
            //单体直接伤害，攻击范围等同于武器攻击范围
            'attack_direct':{
                'target':'enemySingle',//使用对象 selfSingle/ememySingle/selfRange/ememyRange/selfAll/enemyAll
                'attack_addition':[10,12,14,16,18],//伤害增加值,对应不同等级
            }
        }
    },
    '002':{
        'name':'落英染',
        'description':'英华翩舞兮,染景纷纷旧年时。美好的追忆总能治愈人心。（己方全体生命回复）',//技能描述
        'icon':'resources/iamges/001.png',//技能图标路径
        'level_limit':[2,3,4,8,10],//每一阶段的可点等级
        'cd':15,//CD时间
        //技能影响
        'data':{
            //回复
            'recover':{
                'target':'selfAll',
                'attack_addition':[]
            },
        }
    },
    '003':{
        'name':'浮云风卷',
        'description':'飘风自南,泱泱涤尘。凝神静气,荡净浮埃。（以施法者为中心,在半径200的区域内进行群体攻击）',//技能描述
        'icon':'resources/iamges/001.png',//技能图标路径
        'level_limit':[2,3,4,9,11],//每一阶段的可点等级
        'cd':30,//CD时间
        //技能影响
        'data':{
            //单体直接伤害
            'attack_direct':{

            },
            //回复
            'recover':{

            },
            //区域伤害
            'attack_area':{
                'target':'enemyRange',//使用对象 selfSingle/ememySingle/selfRange/ememyRange
                'duration':3,//动作持续时间
                'continue':3,//技能有效时间
                'times':3,//造成的伤害次数
                'range':200, //技能的攻击范围,数值表示攻击范围的半径
                'attack_addition':[50,60,70,80,90],//伤害增加值
            },
            //添加buff
            'buff':{

            }
        }
    },
    '004':{
        'name':'醉舞秋红',
        'description':'日暮秋烟起,萧萧枫树林。寄托壮志未酬哀思的招式,饱含尽除敌寇的怨愤。(敌方全体造成大量伤害)',
        'icon':'resources/iamges/001.png',//技能图标路径
        'level_limit':[5,8,9,13,15],//每一阶段的可点等级
        'cd':120,//CD时间
        //技能影响
        'data':{
            //区域伤害
            'attack_area':{
                'target':'enemyAll',//使用对象 selfSingle/ememySingle/selfRange/ememyRange
                'duration':0.5,//动作持续时间
                'continue':5,//技能效果持续时间
                'attack_addition':30,//伤害增加值
            },
            //添加buff
            //'buff':{

            //}
        }
    },
    '005':{
        'name':'灵焰灼',
        'description':'星星之火,可以燎原,一旦燃起,便势不可当。(受到攻击的敌人每秒受到伤害,持续五秒)',
        'icon':'resources/iamges/001.png',//技能图标路径
        'level_limit':[1,2,4,5,7],//每一阶段的可点等级
        'cd':15,//CD时间
        //技能影响
        'data':{
            
            //添加buff
            'buff':{
                'target':'enemyRange',
                'health_addition':[-20,-30,-40,-50,-60],
                'duration':5,
                'times':5
            }
        }
    },
    '006':{
        'name':'心月斩',
        'description':'心月狐,其性属火,喜好游戏人间,祸乱人心。（造成范围伤害,受到伤害者行动封印。）',
        'icon':'resources/iamges/001.png',//技能图标路径
        'level_limit':[2,3,4,8,10],//每一阶段的可点等级
        'cd':15,//CD时间
        //技能影响
        'data':{
            'attack_area':{
                'target':'enemyRange',//使用对象 selfSingle/ememySingle/selfRange/ememyRange
                'range':10,
                'attack_addition':[10,20,30,40,50],//伤害增加值
            },
            //添加buff
            'buff':{
                'target':'enemyRange',
                'speed_addition':-9999,
                'duration':[0.5,1,1.2,1.5,2]
            }
        }
    },
    '007':{
        'name':'天狐之怒',
        'description':'“青丘之山,有兽焉,其状如狐而九尾。”九尾狐出,乃世间将有大乱之象。（全部敌人受到连续伤害）',
        'icon':'resources/iamges/001.png',//技能图标路径
        'level_limit':[2,3,4,9,11],//每一阶段的可点等级
        'cd':30,//CD时间
        //技能影响
        'data':{
            'attack_area':{
                
            },
            //添加buff
            'buff':{
                
            }
        }
    },
    '008':{
        'name':'心宿炎障',
        'description':'心宿,又称大火,东方苍龙七宿之心,守心护元,灭障除魔。（全部队友获得5秒免伤状态）',
        'icon':'resources/iamges/001.png',//技能图标路径
        'level_limit':[5,8,9,13,15],//每一阶段的可点等级
        'cd':60,//CD时间
        //技能影响
        'data':{
            'attack_area':{
                
            },
            //添加buff
            'buff':{
                
            }
        }
    },
    '009':{
        'name':'花雨露',
        'description':'花雨润泽,沁人心脾,沐浴者神清气爽。（单体回复体力）',
        'icon':'resources/iamges/001.png',//技能图标路径
        'level_limit':[5,6,7,8,9],//每一阶段的可点等级
        'cd':15,//CD时间
        //技能影响
        'data':{
            
        }
    },
    '010':{
        'name':'水月霖',
        'description':'水月之力属幻,堕入幽梦者,如履太虚。（敌方全体受到伤害并进入减速状态）',
        'icon':'resources/iamges/001.png',//技能图标路径
        'level_limit':[5,6,7,8,9],//每一阶段的可点等级
        'cd':15,//CD时间
        //技能影响
        'data':{
            
        }
    },
    '011':{
        'name':'芳华流转',
        'description':'芳华轻笑,千红流转,生机盎然。（全体回复体力）',
        'icon':'resources/iamges/001.png',//技能图标路径
        'level_limit':[5,6,7,8,9],//每一阶段的可点等级
        'cd':30,//CD时间
        //技能影响
    },
    '012':{
        'name':'镜泉润物',
        'description':'泉之始,镜之初,润泽万物,生生不息。（全体回复大量体力并解除一切负面状态）',
        'icon':'resources/iamges/001.png',//技能图标路径
        'level_limit':[5,6,7,8,9],//每一阶段的可点等级
        'cd':60,//CD时间
        //技能影响
    }
}

//怪物初始化数据
woh.monster_init_data={
    'crab':{
        'health':140,
        'attack':20,
    },
    'crab_boss':{
        'health':1400,
        'attack':30,
    }

}
//console.log(role_data);


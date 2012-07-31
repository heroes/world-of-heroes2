/* global default configs */
woh.g_config = {
    canvasWidth: 960,
    canvasHeight: 640
};

//主要思想：剧情脚本的数据全部用json来封装，然后通过msg传入场景
//'next'用来存储下一幕的
woh.g_config.script={
    //死亡
    'dead':{
        type:'dead',
        repeat:true,
        data: {},     
        next:'loading_1'
    },
    //开始界面
    'loading_1':{
        type:'loading',
        repeat:true,
        data:{
            key:'intro'
        },
        next:'intro'
        //next:'loading_2'
    },
    'intro':{
        type:'intro',//标记相应的stage类型
        repeat:true,//标记在流程中是否允许重复出现（即选关的时候是否会被再次触发）
        data:{},
        next:'drama_1'
    }, 
    'drama_1':{
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
        next:'cg_1'
    },
    'cg_1':{
        type:'cg',
        repeat:false,
        data:[{'path':'resources/images/cg/cg_1.jpg'}],
        next:'dialogue_1'
    },
    'dialogue_1':{
        type:'dialogue',
        repeat:false,
        data:[
            {'avatar':'resources/images/dialogue/rio_tang_beauty_sup.png','name':'唐如','content':'世间竟有如此美丽之人……',position:'left',globalBg : 'resources/images/bg/bg-beach-dusk.jpg'},
            {'avatar':'resources/images/dialogue/sola_cheng_nature.png','name':'？？','content':'你知道……人鱼吗？',position:'right',globalBg : 'resources/images/bg/bg-beach-dusk.jpg'},
            {'avatar':'resources/images/dialogue/rio_tang_smile.png','name':'唐如','content':'人鱼？虽说古籍中确有此物记载，然子不语怪力乱神……',position:'left',globalBg : 'resources/images/bg/bg-beach-dusk.jpg'},
            {'avatar':'resources/images/dialogue/rio_tang_sup.png','name':'唐如','content':'喂喂喂，兄台你怎么了！',globalBg : 'resources/images/bg/bg-beach-dusk.jpg'},
            {'avatar':'resources/images/dialogue/sola_cheng_a.png','name':'？？','content':'……',position:'right',globalBg : 'resources/images/bg/bg-beach-dusk.jpg'},
            {'avatar':'resources/images/dialogue/rio_tang_sup.png','name':'唐如','content':'醒，醒醒啊！呼吸平稳，脉象虽弱却不乱，莫非是饿晕过去了？',position:'left',globalBg : 'resources/images/bg/bg-beach-dusk.jpg'},
            {'avatar':'resources/images/dialogue/rio_tang_sup.png','name':'唐如','content':'天啊，哪来那么多的大螃蟹！不好，螃蟹似乎是冲着那个人来的。无论如何，先把它们击退吧。',position:'left',globalBg : 'resources/images/bg/bg-beach-dusk.jpg'}
        ],
        next:'loading_2'
    },
    'loading_2':{
        type:'loading',
        repeat:true,
        data:{
            key: 'battle_1'
        },
        next:'battle_withlittlecrab'
    },
    'battle_withlittlecrab':{
        type:'battle',
        repeat:true,
        data:{
            "role":["001"],
            "bg":'images/bg/bg-beach-dusk.jpg',
            "monster":[
                //sample
                //[
                    //[{type:'crab',x:100,y:200},{type:'crab',x:800,y:300},{type:'crab',x:300,y:500}],
                    // [{type:'crab',x:100,y:200},{type:'crab',x:300,y:200}],
                    // [{type:'crab',x:100,y:200},{type:'crab',x:300,y:200}]
                //],
                // [
                //     [{type:'crab_boss',x:100,y:200}]
                // ]
                [
                    [{type:'crab',x:100,y:200}],[{type:'crab',x:100,y:200},{type:'crab',x:300,y:200}]
                    

                ],
            ],
            "drop":['clothes','002',1],//掉落类型，掉落id，掉落概率
        },
        next:'map_1'
    },
    'map_1':{
        type:'map',
        repeat:true,
        data:{},
        next:'dialogue_2'
    },
    'dialogue_2':{
        type:'dialogue',
        repeat:false,
        data:[
            {'avatar':'resources/images/dialogue/rio_tang_wei.png','name':'唐如','content':'此人究竟做过何事，竟惹得这些螃蟹如此怨愤？君子不立危墙之下，还是速速离去为好——',position:'left',globalBg : 'resources/images/bg/bg-beach-dusk.jpg'},
            {'avatar':'resources/images/dialogue/rio_tang_heavy.png','name':'唐如','content':'嘿～咻～此人虽不肥胖，分量却着实不轻。',position:'left',globalBg : 'resources/images/bg/bg-beach-dusk.jpg'},
        ],
        next:'drama_2'
    },
    'drama_2':{
        type:'drama',//标记相应的stage类型
        repeat:false,
        data:[
            {
                appear: 'auto',
                data: [
                        '唐如带着晕倒的少年回到了自己家。',
                        '自双亲去世后，',
                        '唐如就独自一人居住在停泊在小湾中的一艘大船里。'    
                ]
            }
        ],
        next:'dialogue_3'
    },
    'dialogue_3':{
        type:'dialogue',
        repeat:false,
        data:[
            {'avatar':'resources/images/dialogue/sola_cheng_nature.png','name':'少年','content':'饿了。',position:'right',globalBg : 'resources/images/bg/bg-boat-inner.jpg'},
            {'avatar':'resources/images/dialogue/rio_tang_smile.png','name':'唐如','content':'来，这是刚熬好的粥，哎呀，我说你倒是慢点喝，刚饿晕了，不宜马上暴食啊。',position:'left',globalBg : 'resources/images/bg/bg-boat-inner.jpg'},
            {'avatar':'resources/images/dialogue/sola_cheng_food.png','name':'少年','content':'粥是好粥，就是这碗寒酸了点，此粥色泽金黄，当用镶金玉碗相配，方显相得益彰，色香和合——烦请再来一碗。',position:'right',globalBg : 'resources/images/bg/bg-boat-inner.jpg'},
            {'avatar':'resources/images/dialogue/rio_tang_wei.png','name':'唐如','content':'买不起镶金玉碗还真是抱歉。好吧好吧，你等着，我给你盛去，真是个爱使唤人的大少爷。',position:'left',globalBg : 'resources/images/bg/bg-boat-inner.jpg'},
            {'avatar':'resources/images/dialogue/sola_cheng_pity.png','name':'少年','content':'这是你家？果然破落。那边架上那堆书看来也是你的，俗语说，读书穷三代，笔墨毁一生，而今亲眼所见，果真不假。',position:'right',globalBg : 'resources/images/bg/bg-boat-inner.jpg'},
            {'avatar':'resources/images/dialogue/rio_tang_light_angry.png','name':'唐如','content':'是是是，实~在~抱~歉!阁下若已吃饱，就请歇息吧。',position:'left',globalBg : 'resources/images/bg/bg-boat-inner.jpg'},
        ],
        next:'drama_3'
    },
    'drama_3':{
        type:'drama',//标记相应的stage类型
        repeat:false,
        data:[
            {
                appear: 'auto',
                data: [
                        'ZZZZZZZZZZZZZZZZ',
                        '.',
                        '.',
                        '.'   
                ]
            }
        ],
        next:'dialogue_4'
    },
    'dialogue_4':{
        type:'dialogue',
        repeat:false,
        data:[
            {'avatar':'resources/images/dialogue/rio_tang_normal.png','name':'唐如','content':'好舒服的香气，不似花香，却似……唔，稻香——咦？这是谁的衣服？',position:'left',globalBg : 'resources/images/bg/bg-boat-outer.jpg'},
            {'avatar':'resources/images/dialogue/sola_cheng_pity.png','name':'少年','content':'看你衣衫破败，身体羸弱，这般躺在外面，若受寒得病，想来也是孤苦伶仃无人照拂，在下实在于心不忍，便解衣与你御寒。',position:'right',globalBg : 'resources/images/bg/bg-boat-outer.jpg'},
            {'avatar':'resources/images/dialogue/rio_tang_wei.png','name':'唐如','content':'儒生今日还要为生计操劳，若阁下已无大碍，儒生恕不远送。',position:'left',globalBg : 'resources/images/bg/bg-boat-outer.jpg'},
            {'avatar':'resources/images/dialogue/sola_cheng_normal.png','name':'少年','content':'你这住处还挺别致，只是此处潮湿阴寒，你又身体羸弱，长住下去似乎不妥吧。',position:'right',globalBg : 'resources/images/bg/bg-boat-outer.jpg'},
            {'avatar':'resources/images/dialogue/rio_tang_light_angry.png','name':'唐如','content':'又是身……身体羸弱，好吧，这原是父亲留下的船只，去岁寒冬，海风卷了茅屋，未及修葺，便在此暂住，阁下不必担忧。',position:'left',globalBg : 'resources/images/bg/bg-boat-outer.jpg'},
            {'avatar':'resources/images/dialogue/sola_cheng_food.png','name':'少年','content':'唔，仔细看去，这船的做工倒是不坏。',position:'right',globalBg : 'resources/images/bg/bg-boat-outer.jpg'},
            {'avatar':'resources/images/dialogue/sola_cheng_a.png','name':'少年','content':'哎呀，坏了坏了！赶快领我去一趟昨天的海滩，昨天晕倒的时候，似乎掉了很重要的东西呢。',position:'right',globalBg : 'resources/images/bg/bg-boat-outer.jpg'},
            {'avatar':'resources/images/dialogue/rio_tang_wei.png','name':'唐如','content':'……好吧。（看来捡了个大麻烦回家啊。）',position:'left',globalBg : 'resources/images/bg/bg-boat-outer.jpg'},
        ],
        next:'loading_3'
    },
    'loading_3':{
        type:'loading',
        repeat:true,
        data:{
            key:'battle_2'
        },
        next:'battle_withlittlecrab2'
    },
    'battle_withlittlecrab2':{
        type:'battle',
        repeat:false,
        data:{
            "role":["001","002"],
            "bg":'images/bg/bg-beach.jpg',
            "monster":[
                [
                    [{type:'crab',x:100,y:-200},{type:'crab',x:300,y:-200},{type:'crab',x:500,y:900},{type:'crab',x:400,y:900}],
                    [{type:'crab',x:100,y:-200},{type:'crab',x:300,y:-200},{type:'crab',x:500,y:900},{type:'crab',x:400,y:900}],
                    [{type:'crab',x:100,y:-200},{type:'crab',x:300,y:-200},{type:'crab',x:500,y:900},{type:'crab',x:400,y:900},{type:'crab',x:300,y:900}],
                ]
            ],
            "drop":['weapon','004',1],//掉落类型，掉落id，掉落概率
        },
        next:'map_2'
    },
    'map_2':{
        type:'map',
        repeat:true,
        data:{},
        next:'dialogue_5'
    },
    'dialogue_5':{
        type:'dialogue',
        repeat:false,
        data:[
            {'avatar':'resources/images/dialogue/crab_boss.png','name':'大王蟹','content':'可恶，可恶的人类！侵我族类，不可饶恕！',position:'left',globalBg : 'resources/images/bg/bg-beach.jpg'},
        ],
        next:'battle_withcrabboss'
    },
    'battle_withcrabboss':{
        type:'battle',
        repeat:true,
        data:{
            "role":["001","002"],
            "bg":'images/bg/bg-beach.jpg',
            "monster":[
                [
                    [{type:'crab_boss',x:100,y:200}]
                ]
            ],
            "drop":['weapon','002',1],//掉落类型，掉落id，掉落概率
        },
        
        next:'map_3'
    },
    'map_3':{
        type:'map',
        repeat:true,
        data:{},
        next:'dialogue_6'
    },
    'dialogue_6':{
        type:'dialogue',
        repeat:false,
        data:[
            {'avatar':'resources/images/dialogue/sola_cheng_food.png','name':'少年','content':'幸好幸好，没有损坏，这可是我一年的心血呢！',position:'left',globalBg : 'resources/images/bg/bg-beach.jpg'},
            {'avatar':'resources/images/dialogue/rio_tang_normal.png','name':'唐如','content':'这是什么？《海味谱》？待我看看。',position:'right',globalBg : 'resources/images/bg/bg-beach.jpg'},
             {'avatar':'resources/images/dialogue/rio_tang_wei.png','name':'唐如','content':'……第三章，“蟹肉治法百种”，难怪那些螃蟹要攻击他。',position:'right',globalBg : 'resources/images/bg/bg-boat-outer.jpg'},
            {'avatar':'resources/images/dialogue/sola_cheng_a.png','name':'少年','content':'我决定了！',position:'left',globalBg : 'resources/images/bg/bg-boat-outer.jpg'},
            {'avatar':'resources/images/dialogue/rio_tang_wei.png','name':'唐如','content':'你决定了什么……喂喂喂，你在做什么？',position:'right',globalBg : 'resources/images/bg/bg-boat-outer.jpg'},
            {'avatar':'resources/images/dialogue/sola_cheng_food.png','name':'少年','content':'我决定了，以后我来保护你，我们出海寻找人鱼去吧——对了，你叫什么名字？',position:'left',globalBg : 'resources/images/bg/bg-boat-outer.jpg'},
            {'avatar':'resources/images/dialogue/rio_tang_sup.png','name':'唐如','content':'儒生姓唐名如……等等，我为什么要被你保护……你在对别人的家做什么啊！',position:'right',globalBg : 'resources/images/bg/bg-boat-outer.jpg'},
            {'avatar':'resources/images/dialogue/sola_cheng_food.png','name':'少年','content':'我叫程少非，赶快上船吧！',position:'left',globalBg : 'resources/images/bg/bg-boat-outer.jpg'},
            {'avatar':'resources/images/dialogue/rio_tang_sup.png','name':'唐如','content':'不不不，这不是钱的问题，就算你再往我手里塞金叶子我也不能把父亲留下来的……喂，不要自顾自地把人家的家开走啊！',position:'right',globalBg : 'resources/images/bg/bg-boat-outer.jpg'},
        ],
        next:'drama_4'
    },
    'drama_4':{
        type:'drama',//标记相应的stage类型
        repeat:false,
        data:[
            {
                appear: 'auto',
                data: [
                        '就这样,',
                        '唐如不情不愿地被少非拖着，',
                        '开始了出海寻找人鱼的旅程。',
                        '（第一章完）'   
                ]
            }
        ],
        next:'intro'
    },
};  

//每个场景对应的需要预加载的资源列表
woh.g_config.resources = {
    // 比如： 战斗场景，随便测试一个, 假如第一场战斗
    // 根目录基于 resources/
    intro:{
        type:'intro',
        resources:[
            'images/index/index.jpg',
            'images/index/start-button-1.png',
            'images/index/start-button-2.png',
            'images/index/start-button-3.png',
            'images/index/start-button-4.png',

            'images/dialogue/rio_tang_normal.png',
            'images/dialogue/rio_tang_angry.png',
            'images/dialogue/rio_tang_beauty_sup.png',
            'images/dialogue/rio_tang_heavy.png',
            'images/dialogue/rio_tang_light_angry.png',
            'images/dialogue/rio_tang_smile.png',
            'images/dialogue/rio_tang_sup.png',
            'images/dialogue/rio_tang_wei.png',

            'images/dialogue/sola_cheng_normal.png',
            'images/dialogue/sola_cheng_a.png',
            'images/dialogue/sola_cheng_food.png',
            'images/dialogue/sola_cheng_nature.png',
            'images/dialogue/sola_cheng_pity.png',
            'images/dialogue/sola_cheng_sigh.png',
            
            'images/dialogue/UI-dialog-bg.png',

            'images/bg/bg-beach-dusk.jpg',
            'images/bg/bg-beach.jpg',
            'images/bg/bg-boat-inner.jpg',
            'images/bg/bg-boat-outer.jpg',
            'images/bg/btn-skip.png',
            'images/bg/btn-skip2.png',

            'images/cg/cg_1.jpg',
            //载入结算界面的资源
            'images/count/avatar-outer.png',
            'images/count/lvUP.png',
            'images/count/expbar-bg.png',
            'images/count/count-bg.png',
        ]
    },
    battle_1: {
        type: 'battle',
        resources: [
            'images/bg/bg-beach-dusk.jpg',
            
            'images/circle.png',
            'images/pie.png',
            'images/shadow.png',

            //载入大地图资源
            'images/map/ava/rio_tang.png',
            'images/map/ava/shaofei_cheng.png',
            'images/map/items/c_001.png',
            'images/map/items/c_002.png',
            'images/map/items/c_003.png',
            'images/map/items/c_005.png',
            'images/map/items/w_001.png',
            'images/map/items/w_002.png',
            'images/map/items/w_003.png',
            'images/map/items/w_004.png',
            'images/map/items/w_005.png',

            'images/map/button1.png',
            'images/map/button2.png',
            'images/map/button3.png',
            'images/map/cross.png',
            'images/map/exp-right.png',
            'images/map/map.jpg',
            'images/map/selected_bg.png',
            'images/map/win_bg.jpg',
            'images/map/win_bg2.jpg',
            
            //载入装备资源
            'images/sprites/clothes/001/none/attack.png',
            'images/sprites/clothes/001/none/hurted.png',
            'images/sprites/clothes/001/none/magic.png',
            'images/sprites/clothes/001/none/stand.png',
            'images/sprites/clothes/001/none/run.png',
            'images/sprites/clothes/001/none/dead.png',

            
            'images/sprites/clothes/001/001/attack.png',
            'images/sprites/clothes/001/001/hurted.png',
            'images/sprites/clothes/001/001/magic.png',
            'images/sprites/clothes/001/001/stand.png',
            'images/sprites/clothes/001/001/run.png',
            'images/sprites/clothes/001/001/dead.png',

            'images/sprites/clothes/001/002/attack.png',
            'images/sprites/clothes/001/002/hurted.png',
            'images/sprites/clothes/001/002/magic.png',
            'images/sprites/clothes/001/002/stand.png',
            'images/sprites/clothes/001/002/run.png',
            'images/sprites/clothes/001/002/dead.png',

            'images/sprites/clothes/002/none/attack.png',
            'images/sprites/clothes/002/none/hurted.png',
            'images/sprites/clothes/002/none/magic.png',
            'images/sprites/clothes/002/none/stand.png',
            'images/sprites/clothes/002/none/run.png',
            'images/sprites/clothes/002/none/dead.png',

            'images/sprites/clothes/002/003/attack.png',
            'images/sprites/clothes/002/003/hurted.png',
            'images/sprites/clothes/002/003/magic.png',
            'images/sprites/clothes/002/003/stand.png',
            'images/sprites/clothes/002/003/run.png',
            'images/sprites/clothes/002/003/dead.png',

            'images/sprites/weapon/001/attack.png',
            'images/sprites/weapon/001/hurted.png',
            'images/sprites/weapon/001/magic.png',
            'images/sprites/weapon/001/stand.png',
            'images/sprites/weapon/001/run.png',

            'images/sprites/weapon/002/attack.png',
            'images/sprites/weapon/002/hurted.png',
            'images/sprites/weapon/002/magic.png',
            'images/sprites/weapon/002/stand.png',
            'images/sprites/weapon/002/run.png',

            'images/sprites/weapon/003/attack.png',
            'images/sprites/weapon/003/hurted.png',
            'images/sprites/weapon/003/magic.png',
            'images/sprites/weapon/003/stand.png',
            'images/sprites/weapon/003/run.png',

            'images/sprites/weapon/004/attack.png',
            'images/sprites/weapon/004/hurted.png',
            'images/sprites/weapon/004/magic.png',
            'images/sprites/weapon/004/stand.png',
            'images/sprites/weapon/004/run.png',

            'images/monster/normal001-crab.png'
        ]
    },
    battle_2: {
        type: 'battle',
        resources: [
                'images/bg/bg-beach.jpg',
                'images/dialogue/crab_boss.png',
                'images/monster/boss-crab.png'
            ]
    }
};

//衣服的动画数据
woh.g_config.clothes={
    '001_none':{
        "stand":{
            "info": {
                "nbrOfFrames": 2,
                "name": "stand",
                "type": "animation",
                "framerate": 2,
                "pivotx": 100,
                "pivoty": 75,
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
                "pivoty": 75,
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
                "nbrOfFrames": 5,
                "name": "",
                "type": "animation",
                "framerate": 4,
                "pivotx": 100,
                "pivoty": 75,
                "events": [{name: 'attack_affect', frame: 4}]
            },
            "data": [
                [0,0,199,169,0,0,199,169],
                [200,0,399,169,200,0,399,169],
                [400,0,599,169,400,0,599,169],
                [600,0,799,169,600,0,799,169],
                [0,0,199,169,0,0,199,169]
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
                "pivoty": 75,
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
                "name": "magic",
                "type": "animation",
                "framerate": 2,
                "pivotx": 100,
                "pivoty": 75,
                "events": []
            },
            "data": [
                [0,0,199,169,0,0,199,169],
                [200,0,399,169,200,0,399,169],
                [400,0,599,169,400,0,599,169],
                [600,0,799,169,600,0,799,169]
            ],
            "filename": "images/sprites/clothes/001/none/magic.png"
        },
        "dead": {
            "info": {
                "nbrOfFrames": 6,
                "name": "dead",
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
                [600,0,799,169,600,0,799,169],
                [400,0,599,169,400,0,599,169],
                [600,0,799,169,600,0,799,169],
            ],
            "filename": "images/sprites/clothes/001/none/dead.png"
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
                "pivoty": 75,
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
                "pivoty": 75,
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
                "nbrOfFrames": 5,
                "name": "",
                "type": "animation",
                "framerate": 4,
                "pivotx": 100,
                "pivoty": 75,
                "events": [{name: 'attack_affect', frame: 4}]
            },
            "data": [
                [0,0,199,169,0,0,199,169],
                [200,0,399,169,200,0,399,169],
                [400,0,599,169,400,0,599,169],
                [600,0,799,169,600,0,799,169],
                [0,0,199,169,0,0,199,169]
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
                "pivoty": 75,
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
                "name": "magic",
                "type": "animation",
                "framerate": 4,
                "pivotx": 100,
                "pivoty": 75,
                "events": []
            },
            "data": [
                [0,0,199,169,0,0,199,169],
                [200,0,399,169,200,0,399,169],
                [400,0,599,169,400,0,599,169],
                [600,0,799,169,600,0,799,169]
            ],
            "filename": "images/sprites/clothes/001/001/magic.png"
        },
        "dead": {
            "info": {
                "nbrOfFrames": 6,
                "name": "dead",
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
                [600,0,799,169,600,0,799,169],
                [400,0,599,169,400,0,599,169],
                [600,0,799,169,600,0,799,169],
            ],
            "filename": "images/sprites/clothes/001/001/dead.png"
        }        
    },
    '002':{
        "stand":{
            "info": {
                "nbrOfFrames": 2,
                "name": "stand",
                "type": "animation",
                "framerate": 2,
                "pivotx": 100,
                "pivoty": 75,
                "events": [
                    {name:'standup',frame:1},//第一帧进入时触发
                    {name:'standdown',frame:2}//第二帧进入时触发
                ]
            },
            "data": [
                [0,0,199,169,0,0,199,169],
                [200,0,399,169,200,0,399,169]
            ],
            "filename": "images/sprites/clothes/001/002/stand.png"
        }, 
        "run":{
            "info": {
                "nbrOfFrames": 4,
                "name": "",
                "type": "animation",
                "framerate": 4,
                "pivotx": 100,
                "pivoty": 75,
                "events": []
            },
            "data": [
                [0,0,199,169,0,0,199,169],
                [200,0,399,169,200,0,399,169],
                [400,0,599,169,400,0,599,169],
                [600,0,799,169,600,0,799,169]
            ],
            "filename": "images/sprites/clothes/001/002/run.png"
        },
        "attack":{
            "info": {
                "nbrOfFrames": 5,
                "name": "",
                "type": "animation",
                "framerate": 4,
                "pivotx": 100,
                "pivoty": 75,
                "events": [{name: 'attack_affect', frame: 4}]
            },
            "data": [
                [0,0,199,169,0,0,199,169],
                [200,0,399,169,200,0,399,169],
                [400,0,599,169,400,0,599,169],
                [600,0,799,169,600,0,799,169],
                [0,0,199,169,0,0,199,169]
            ],
            "filename": "images/sprites/clothes/001/002/attack.png"
        },
        "hurted": {
            "info": {
                "nbrOfFrames": 2,
                "name": "hurted",
                "type": "animation",
                "framerate": 4,
                "pivotx": 100,
                "pivoty": 75,
                "events": []
            },
            "data": [
                [0,0,199,169,0,0,199,169],
                [200,0,399,169,200,0,399,169]
            ],
            "filename": "images/sprites/clothes/001/002/hurted.png"
        },
        "magic": {
            "info": {
                "nbrOfFrames": 4,
                "name": "magic",
                "type": "animation",
                "framerate": 4,
                "pivotx": 100,
                "pivoty": 75,
                "events": []
            },
            "data": [
                [0,0,199,169,0,0,199,169],
                [200,0,399,169,200,0,399,169],
                [400,0,599,169,400,0,599,169],
                [600,0,799,169,600,0,799,169]
            ],
            "filename": "images/sprites/clothes/001/002/magic.png"
        },
        "dead": {
            "info": {
                "nbrOfFrames": 6,
                "name": "dead",
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
                [600,0,799,169,600,0,799,169],
                [400,0,599,169,400,0,599,169],
                [600,0,799,169,600,0,799,169],
            ],
            "filename": "images/sprites/clothes/001/002/dead.png"
        }        
    }, 
    '002_none':{
        "stand": {
            "info": {
                "nbrOfFrames": 2,
                "name": "stand",
                "type": "animation",
                "framerate": 2,
                "pivotx": 171,
                "pivoty": 130,
                "events": [
                    {name:'standup',frame:1},//第一帧进入时触发
                    {name:'standdown',frame:2}//第二帧进入时触发
                ]
            },
            "data": [
                [0,0,341,209,0,0,341,209],
                [342,0,683,209,342,0,683,209]
            ],
            "filename": "images/sprites/clothes/002/none/stand.png"
        },
        "run": {
            "info": {
                "nbrOfFrames": 4,
                "name": "run",
                "type": "animation",
                "framerate": 4,
                "pivotx": 171,
                "pivoty": 130,
                "events": [
                    {name:'standup',frame:1},//第一帧进入时触发
                    {name:'standdown',frame:2}//第二帧进入时触发
                ]
            },
            "data": [
                [0,0,341,209,0,0,341,209],
                [342,0,683,209,342,0,683,209],
                [684,0,1025,209,684,0,1025,209],
                [1026,0,1367,209,1026,0,1367,209]
            ],
            "filename": "images/sprites/clothes/002/none/run.png"
        },
        "attack": {
            "info": {
                "nbrOfFrames": 4,
                "name": "attack",
                "type": "animation",
                "framerate": 2,
                "pivotx": 171,
                "pivoty": 130,
                "events": [{name: 'attack_affect', frame: 2}]
            },
            "data": [
                [0,0,341,209,0,0,341,209],
                [342,0,683,209,342,0,683,209],
                [342,0,683,209,342,0,683,209],
                [0,0,341,209,0,0,341,209]
            ],
            "filename": "images/sprites/clothes/002/none/attack.png"
        },
        "magic": {
            "info": {
                "nbrOfFrames": 3,
                "name": "magic",
                "type": "animation",
                "framerate": 2,
                "pivotx": 171,
                "pivoty": 130,
                "events": []
            },
            "data": [
                [0,0,341,209,0,0,341,209],
                [342,0,683,209,342,0,683,209],
                [684,0,1025,209,684,0,1025,209]
            ],
            "filename": "images/sprites/clothes/002/none/magic.png"
        },
        "hurted": {
            "info": {
                "nbrOfFrames": 1,
                "name": "hurted",
                "type": "animation",
                "framerate": 4,
                "pivotx": 171,
                "pivoty": 130,
                "events": []
            },
            "data": [
                [0,0,341,209,0,0,341,209]
            ],
            "filename": "images/sprites/clothes/002/none/hurted.png"
        }, 
        "dead": {
            "info": {
                "nbrOfFrames": 6,
                "name": "dead",
                "type": "animation",
                "framerate": 6,
                "pivotx": 171,
                "pivoty": 105,
                "events": []
            },
            "data": [
                [0,0,341,209,0,0,341,209],
                [342,0,683,209,342,0,683,209],
                [684,0,1025,209,684,0,1025,209],
                [1026,0,1367,209,1026,0,1367,209],
                [684,0,1025,209,684,0,1025,209],
                [1026,0,1367,209,1026,0,1367,209]
            ],
            "filename": "images/sprites/clothes/002/none/dead.png"
        }                 
    }, 
    '003':{
        "stand": {
            "info": {
                "nbrOfFrames": 2,
                "name": "stand",
                "type": "animation",
                "framerate": 2,
                "pivotx": 171,
                "pivoty": 130,
                "events": [
                    {name:'standup',frame:1},//第一帧进入时触发
                    {name:'standdown',frame:2}//第二帧进入时触发
                ]
            },
            "data": [
                [0,0,341,209,0,0,341,209],
                [342,0,683,209,342,0,683,209]
            ],
            "filename": "images/sprites/clothes/002/003/stand.png"
        },
        "run": {
            "info": {
                "nbrOfFrames": 4,
                "name": "run",
                "type": "animation",
                "framerate": 4,
                "pivotx": 171,
                "pivoty": 130,
                "events": []
            },
            "data": [
                [0,0,341,209,0,0,341,209],
                [342,0,683,209,342,0,683,209],
                [684,0,1025,209,684,0,1025,209],
                [1026,0,1367,209,1026,0,1367,209]
            ],
            "filename": "images/sprites/clothes/002/003/run.png"
        },
        "attack": {
            "info": {
                "nbrOfFrames": 4,
                "name": "attack",
                "type": "animation",
                "framerate": 2,
                "pivotx": 171,
                "pivoty": 130,
                "events": [{name: 'attack_affect', frame: 2}]
            },
            "data": [
                [0,0,341,209,0,0,341,209],
                [342,0,683,209,342,0,683,209],
                [342,0,683,209,342,0,683,209],
                [0,0,341,209,0,0,341,209]
            ],
            "filename": "images/sprites/clothes/002/003/attack.png"
        },
        "magic": {
            "info": {
                "nbrOfFrames": 3,
                "name": "magic",
                "type": "animation",
                "framerate": 2,
                "pivotx": 171,
                "pivoty": 130,
                "events": []
            },
            "data": [
                [0,0,341,209,0,0,341,209],
                [342,0,683,209,342,0,683,209],
                [684,0,1025,209,684,0,1025,209]
            ],
            "filename": "images/sprites/clothes/002/003/magic.png"
        },
        "hurted": {
            "info": {
                "nbrOfFrames": 1,
                "name": "hurted",
                "type": "animation",
                "framerate": 4,
                "pivotx": 171,
                "pivoty": 130,
                "events": []
            },
            "data": [
                [0,0,341,209,0,0,341,209]
            ],
            "filename": "images/sprites/clothes/002/003/hurted.png"
        },
        "dead": {
            "info": {
                "nbrOfFrames": 6,
                "name": "dead",
                "type": "animation",
                "framerate": 6,
                "pivotx": 171,
                "pivoty": 105,
                "events": []
            },
            "data": [
                [0,0,341,209,0,0,341,209],
                [342,0,683,209,342,0,683,209],
                [684,0,1025,209,684,0,1025,209],
                [1026,0,1367,209,1026,0,1367,209],
                [684,0,1025,209,684,0,1025,209],
                [1026,0,1367,209,1026,0,1367,209]
            ],
            "filename": "images/sprites/clothes/002/003/dead.png"
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
                "pivoty": 75,
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
                    "pivoty": 75,
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
                "nbrOfFrames": 5,
                "name": "",
                "type": "animation",
                "framerate": 4,
                "pivotx": 100,
                "pivoty": 75,
                "events": []
            },
            "data": [
                [0,0,199,169,0,0,199,169],
                [200,0,399,169,200,0,399,169],
                [400,0,599,169,400,0,599,169],
                [600,0,799,169,600,0,799,169],
                [0,0,199,169,0,0,199,169]
            ],
            "filename": "images/sprites/weapon/001/attack.png"
        },
        "magic": {
            "info": {
                "nbrOfFrames": 4,
                "name": "magic",
                "type": "animation",
                "framerate": 2,
                "pivotx": 100,
                "pivoty": 75,
                "events": []
            },
            "data": [
                [0,0,199,169,0,0,199,169],
                [200,0,399,169,200,0,399,169],
                [400,0,599,169,400,0,599,169],
                [600,0,799,169,600,0,799,169]
            ],
            "filename": "images/sprites/weapon/001/magic.png"
        },
        "hurted": {
            "info": {
                "nbrOfFrames": 2,
                "name": "hurted",
                "type": "animation",
                "framerate": 4,
                "pivotx": 100,
                "pivoty": 75,
                "events": []
            },
            "data": [
                [0,0,199,169,0,0,199,169],
                [200,0,399,169,200,0,399,169]
            ],
            "filename": "images/sprites/weapon/001/hurted.png"
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
                "pivoty": 75,
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
                    "pivoty": 75,
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
                "nbrOfFrames": 5,
                "name": "",
                "type": "animation",
                "framerate": 4,
                "pivotx": 100,
                "pivoty": 75,
                "events": []
            },
            "data": [
                [0,0,199,169,0,0,199,169],
                [200,0,399,169,200,0,399,169],
                [400,0,599,169,400,0,599,169],
                [600,0,799,169,600,0,799,169],
                [0,0,199,169,0,0,199,169]
            ],
            "filename": "images/sprites/weapon/002/attack.png"
        },
        "magic": {
            "info": {
                "nbrOfFrames": 4,
                "name": "magic",
                "type": "animation",
                "framerate": 2,
                "pivotx": 100,
                "pivoty": 75,
                "events": []
            },
            "data": [
                [0,0,199,169,0,0,199,169],
                [200,0,399,169,200,0,399,169],
                [400,0,599,169,400,0,599,169],
                [600,0,799,169,600,0,799,169]
            ],
            "filename": "images/sprites/weapon/002/magic.png"
        },
        "hurted": {
            "info": {
                "nbrOfFrames": 2,
                "name": "hurted",
                "type": "animation",
                "framerate": 4,
                "pivotx": 100,
                "pivoty": 75,
                "events": []
            },
            "data": [
                [0,0,199,169,0,0,199,169],
                [200,0,399,169,200,0,399,169]
            ],
            "filename": "images/sprites/weapon/002/hurted.png"
        }
    },
    '003':{
        "stand": {
            "info": {
                "nbrOfFrames": 2,
                "name": "stand",
                "type": "animation",
                "framerate": 2,
                "pivotx": 171,
                "pivoty": 130,
                "events": []
            },
            "data": [
                [0,0,341,209,0,0,341,209],
                [342,0,683,209,342,0,683,209]
            ],
            "filename": "images/sprites/weapon/003/stand.png"
        },
        "run": {
            "info": {
                "nbrOfFrames": 4,
                "name": "run",
                "type": "animation",
                "framerate": 4,
                "pivotx": 171,
                "pivoty": 130,
                "events": []
            },
            "data": [
                [0,0,341,209,0,0,341,209],
                [342,0,683,209,342,0,683,209],
                [684,0,1025,209,684,0,1025,209],
                [1026,0,1367,209,1026,0,1367,209]
            ],
            "filename": "images/sprites/weapon/003/run.png"
        }, 
        "attack": {
            "info": {
                "nbrOfFrames": 4,
                "name": "attack",
                "type": "animation",
                "framerate": 2,
                "pivotx": 171,
                "pivoty": 130,
                "events": []
            },
            "data": [
                [0,0,341,209,0,0,341,209],
                [342,0,683,209,342,0,683,209],
                [342,0,683,209,342,0,683,209],
                [0,0,341,209,0,0,341,209]
            ],
            "filename": "images/sprites/weapon/003/attack.png"
        },
        "magic": {
            "info": {
                "nbrOfFrames": 3,
                "name": "magic",
                "type": "animation",
                "framerate": 2,
                "pivotx": 171,
                "pivoty": 130,
                "events": []
            },
            "data": [
                [0,0,341,209,0,0,341,209],
                [342,0,683,209,342,0,683,209],
                [684,0,1025,209,684,0,1025,209]
            ],
            "filename": "images/sprites/weapon/003/magic.png"
        },
        "hurted": {
            "info": {
                "nbrOfFrames": 1,
                "name": "hurted",
                "type": "animation",
                "framerate": 4,
                "pivotx": 171,
                "pivoty": 130,
                "events": []
            },
            "data": [
                [0,0,341,209,0,0,341,209]
            ],
            "filename": "images/sprites/weapon/003/hurted.png"
        }     
    },
    '004':{
        "stand": {
            "info": {
                "nbrOfFrames": 2,
                "name": "stand",
                "type": "animation",
                "framerate": 2,
                "pivotx": 171,
                "pivoty": 130,
                "events": []
            },
            "data": [
                [0,0,341,209,0,0,341,209],
                [342,0,683,209,342,0,683,209]
            ],
            "filename": "images/sprites/weapon/004/stand.png"
        },
        "run": {
            "info": {
                "nbrOfFrames": 4,
                "name": "run",
                "type": "animation",
                "framerate": 4,
                "pivotx": 171,
                "pivoty": 130,
                "events": []
            },
            "data": [
                [0,0,341,209,0,0,341,209],
                [342,0,683,209,342,0,683,209],
                [684,0,1025,209,684,0,1025,209],
                [1026,0,1367,209,1026,0,1367,209]
            ],
            "filename": "images/sprites/weapon/004/run.png"
        }, 
        "attack": {
            "info": {
                "nbrOfFrames": 3,
                "name": "attack",
                "type": "animation",
                "framerate": 2,
                "pivotx": 171,
                "pivoty": 130,
                "events": []
            },
            "data": [
                [0,0,341,209,0,0,341,209],
                [342,0,683,209,342,0,683,209],
                [342,0,683,209,342,0,683,209],
                [0,0,341,209,0,0,341,209]
            ],
            "filename": "images/sprites/weapon/004/attack.png"
        },
        "magic": {
            "info": {
                "nbrOfFrames": 3,
                "name": "magic",
                "type": "animation",
                "framerate": 2,
                "pivotx": 171,
                "pivoty": 130,
                "events": []
            },
            "data": [
                [0,0,341,209,0,0,341,209],
                [342,0,683,209,342,0,683,209],
                [684,0,1025,209,684,0,1025,209]
            ],
            "filename": "images/sprites/weapon/004/magic.png"
        },
        "hurted": {
            "info": {
                "nbrOfFrames": 1,
                "name": "hurted",
                "type": "animation",
                "framerate": 4,
                "pivotx": 171,
                "pivoty": 130,
                "events": []
            },
            "data": [
                [0,0,341,209,0,0,341,209]
            ],
            "filename": "images/sprites/weapon/004/hurted.png"
        }     
    },
}
//怪物的数据
woh.g_config.monsters = {
    "crab": {
        "health":300,//血量
        "damage":4,//攻击
        "defend":0,//防御
        "crit":0,//暴击
        "exp":1250,//打死一只怪物获得的经验值
        'width':124,
        'height':74,
        'cooldown':2000,
        "areadata": {
            standup: [0, 0, 190, 120],
            standdown: [0, 0, 190, 120]
        },
        "damageArea":[0,-45,100,30],
        "stand": [
        // role
                {
                "info": {
                    "nbrOfFrames": 2,
                    "name": "stand",
                    "type": "animation",
                    "framerate": 2,
                    "pivotx": 70,
                    "pivoty": 55,
                    "events": [
                            {name: 'standup', frame: 1}, //第一帧进入时触发
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
                    "nbrOfFrames": 2,
                    "name": "",
                    "type": "animation",
                    "framerate": 4,
                    "pivotx": 70,
                    "pivoty": 55,
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
                    "nbrOfFrames": 2,
                    "name": "",
                    "type": "animation",
                    "framerate": 2,
                    "pivotx": 70,
                    "pivoty": 55,
                    "events": [
                            {name: 'attack_affect', frame: 1}
                        ]
                },
                "data": [
                    [190,0,379,119,190,0,379,119],
                    [570,0,759,119,570,0,759,119]
                ],
                "filename": "images/monster/normal001-crab.png"
            }
        ],
        "hurted": [
            {
                "info": {
                    "nbrOfFrames": 1,
                    "name": "hurted",
                    "type": "animation",
                    "framerate": 4,
                    "pivotx": 70,
                    "pivoty": 55,
                    "events": []
                },
                "data": [
                    [0,0,189,119,0,0,189,119]
                ],
                "filename": "images/monster/normal001-crab.png"
            }
        ],
        "dead": [{
            "info": {
                "nbrOfFrames": 5,
                "name": "dead",
                "type": "animation",
                "framerate": 4,
                "pivotx": 70,
                "pivoty": 55,
                "events": []
            },
            "data": [
                [0,0,189,119,0,0,189,119],
                [760,0,949,119,760,0,949,119],
                [0,0,189,119,0,0,189,119],
                [760,0,949,119,760,0,949,119]
            ],
            "filename": "images/monster/normal001-crab.png"
        }]        
    },
    "crab_boss": {
        "health":1000,//血量
        "damage":15,//攻击
        "defend":0,//防御
        "crit":0,//暴击
        //"drop":['clothes','001',0.05],//掉落类型，掉落id，掉落概率
        "exp":20,//打死一只怪物获得的经验值
        "width":200,
        "height":100,
        "areadata": {
            standup: [0, 0, 190, 120],
            standdown: [0, 0, 190, 120]
        },
        "damageArea":[100,-45,200,30],
        "stand": [
            {
                "info": {
                    "nbrOfFrames": 2,
                    "name": "crab_boss",
                    "type": "animation",
                    "framerate": 2,
                    "pivotx": 100,
                    "pivoty": 123,
                    "events": []
                },
                "data": [
                    [592,0,887,206,592,0,887,206],
                    [888,0,1183,206,888,0,1183,206],
                ],
                "filename": "images/monster/boss-crab.png"
            }
        ],
        "run": [
            {
                "info": {
                    "nbrOfFrames": 2,
                    "name": "crab_boss",
                    "type": "animation",
                    "framerate": 4,
                    "pivotx": 100,
                    "pivoty": 123,
                    "events": []
                },
                "data": [
                    [592,0,887,206,592,0,887,206],
                    [888,0,1183,206,888,0,1183,206],
                ],
                "filename": "images/monster/boss-crab.png"
            }
        ],
        "attack": [
            {
                "info": {
                    "nbrOfFrames": 2,
                    "name": "crab_boss",
                    "type": "animation",
                    "framerate": 2,
                    "pivotx": 100,
                    "pivoty": 123,
                    "events": [{name: 'attack_affect', frame: 1}]
                },
                "data": [
                    [592,0,887,206,592,0,887,206],
                    [296,0,591,206,296,0,591,206]
                ],
                "filename": "images/monster/boss-crab.png"
            }
        ],
        "hurted": [
            {
                "info": {
                    "nbrOfFrames": 2,
                    "name": "crab_boss",
                    "type": "animation",
                    "framerate": 2,
                    "pivotx": 100,
                    "pivoty": 123,
                    "events": []
                },
                "data": [
                    [0,0,295,206,0,0,295,206],
                    [296,0,591,206,296,0,591,206]
                ],
                "filename": "images/monster/boss-crab.png"
            }
        ],
        "dead": [
            {
                "info": {
                    "nbrOfFrames": 4,
                    "name": "crab_boss",
                    "type": "animation",
                    "framerate": 2,
                    "pivotx": 100,
                    "pivoty": 123,
                    "events": []
                },
                "data": [
                    [1184,0,1479,206,1184,0,1479,206],
                    [1480,0,1775,206,1480,0,1775,206],
                    [1184,0,1479,206,1184,0,1479,206],
                    [1480,0,1775,206,1480,0,1775,206]
                ],
                "filename": "images/monster/boss-crab.png"
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
        'skill_point':0,//剩余技能点
        'damageArea':[20,-45,80,45],
        'skill_list':{
            '001':0, 
            '002':0,
            '003':0,
            '004':0
        },//技能列表（编号-等级）
        "areadata": {
            standup:[0,0,140,210],
            standdown:[0,0,140,210]
        },
        'width':100,
        'height':140
    },
    '002':{
        'name':'程少非',//名字
        'type':'002',//类型
        'lv':2,//等级
        'avatar':'./resources/images/map/ava/shaofei_cheng.png',//头像
        'exp':1300,//当前经验值
        'weapon':'003',//武器编号
        'clothes':'003',//衣服编号
        'damageArea':[20,-15,180,65],
        'force':90,
        'cooldown':2000,
        'skill_point':3,
        'skill_list':{
            '005':1,
            '006':1,
            '007':0,
            '008':0,
        },
        "areadata": {
            standup:[0,0,140,210],
            standdown:[0,0,140,210]
        },
        'width':100,
        'height':140
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
        },
        'width':100,
        'height':120
    },
}
//怪物初始化数据
// woh.monster_init_data={
//     'crab':{
        
//     },
//     'crab_boss':{
//         'health':1400,
//         'attack':30,
//         'skill':[function(){

//         },function(){

//         }]
//     }
// }
woh.item_data={
        'weapon':{
            '001':{
                'name':'匕首',//名称
                'description':'勉强能够用来防身的便宜货,居家旅行常备的防盗工具。',
                'icon':'./resources/images/map/items/w_001.png',//图标路径
                'modal':['./resources/images/sprites/weapon/001/stand.png',200,170],//模型路径
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
                'modal':['./resources/images/sprites/weapon/002/stand.png',200,170],//模型路径
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
                'modal':['./resources/images/sprites/weapon/003/stand.png',342,210],
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
                'modal':['./resources/images/sprites/weapon/004/stand.png',342,210],
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
            'none':{},
            '001':{
                'name':'百家布衣',
                'description':'各种布料东拼西凑而成的寒酸衣服，穷苦人家的穿着。',
                'icon':'./resources/images/map/items/c_001.png',
                'modal':['resources/images/sprites/clothes/001/001/stand.png',200,170],
                'health':0,
                'attack':10,
                'defend':3,
                'crit':0,
                'for':'001',//适用职业类型
            },
            '002':{
                'name':'云锦深衣',
                'description':'看起来是高级武将使用的样式，但已十分破旧，上有云锦纹路，据说有护持作用。',
                'icon':'./resources/images/map/items/c_002.png',
                'modal':['resources/images/sprites/clothes/001/002/stand.png',200,170],
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
                'modal':['resources/images/sprites/clothes/002/003/stand.png',342,210],
                'health':0,
                'attack':10,
                'defend':3,
                'crit':0,
                'for':'002',//适用职业类型
            },
            '004':{
                'name':'蜀锦袍',
                'description':'“犹馀蜀中锦,爱惜比甘棠。”蜀地的锦缎千载驰名,用其制作的袍子自然也价格不菲。',
                'icon':'./resources/images/map/items/c_003.png',
                'modal':['resources/images/sprites/clothes/002/003/stand.png',342,210],
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

//目前唐如的三个技能分别为 单体攻击 治疗 吟唱群体攻击 大招为全屏幕地图炮高伤害攻击 

woh.skill_data={
    '001':{
        'name':'疾风刺',
        'description':'追求一击必杀的招式,轻灵迅捷,其威力在不同修为者手中截然不同。（冲向对方进行一次攻击）',//技能描述
        'icon':'./resources/images/skillicons/001.jpg',//技能图标路径
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
        'icon':'./resources/images/skillicons/002.jpg',//技能图标路径
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
        'icon':'./resources/images/skillicons/003.jpg',//技能图标路径
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
        'icon':'./resources/images/skillicons/004.jpg',//技能图标路径
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
            }
        }
    },
    '005':{
        'name':'灵焰灼',
        'description':'星星之火,可以燎原,一旦燃起,便势不可当。(敌方全体受到伤害)',
        'icon':'./resources/images/skillicons/005.jpg',//技能图标路径
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
        'icon':'./resources/images/skillicons/006.jpg',//技能图标路径
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
        'icon':'./resources/images/skillicons/007.jpg',//技能图标路径
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
        'icon':'./resources/images/skillicons/008.jpg',//技能图标路径
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
        'icon':'./resources/images/skillicons/009.jpg',//技能图标路径
        'level_limit':[5,6,7,8,9],//每一阶段的可点等级
        'cd':15,//CD时间
        //技能影响
        'data':{
            
        }
    },
    '010':{
        'name':'水月霖',
        'description':'水月之力属幻,堕入幽梦者,如履太虚。（敌方全体受到伤害并进入减速状态）',
        'icon':'./resources/images/skillicons/010.png',//技能图标路径
        'level_limit':[5,6,7,8,9],//每一阶段的可点等级
        'cd':15,//CD时间
        //技能影响
        'data':{
            
        }
    },
    '011':{
        'name':'芳华流转',
        'description':'芳华轻笑,千红流转,生机盎然。（全体回复体力）',
        'icon':'./resources/images/skillicons/011.png',//技能图标路径
        'level_limit':[5,6,7,8,9],//每一阶段的可点等级
        'cd':30,//CD时间
        //技能影响
    },
    '012':{
        'name':'镜泉润物',
        'description':'泉之始,镜之初,润泽万物,生生不息。（全体回复大量体力并解除一切负面状态）',
        'icon':'./resources/images/skillicons/012.png',//技能图标路径
        'level_limit':[5,6,7,8,9],//每一阶段的可点等级
        'cd':60,//CD时间
        //技能影响
    }
}
//技能效果动画的配置
woh.g_config.skill_effect={
    "normal_1":{
        "stand": {
            "info": {
                "nbrOfFrames": 2,
                "name": "normal_1",
                "type": "animation",
                "framerate": 4,
                "pivotx": 35,
                "pivoty": 77,
                "events": []
            },
            "data": [
                [0,0,69,154,0,0,69,154],
                [70,0,139,154,70,0,139,154]
            ],
            "filename": "images/sprites/skilleffect/normal_1.png"
        }
    },
    "001": {
        "stand":{
            "info": {
                "nbrOfFrames": 4,
                "name": "001",
                "type": "animation",
                "framerate": 4,
                "pivotx": 200,
                "pivoty": 185,
                "events": []
            },
            "data": [
                [0,0,399,369,0,0,399,369],
                [400,0,799,369,400,0,799,369],
                [800,0,1199,369,800,0,1199,369],
                [1200,0,1599,369,1200,0,1599,369]
            ],
            "filename": "images/sprites/skilleffect/001.png"
        }
    },
    "002": {
        "stand":{
            "info": {
            "nbrOfFrames": 4,
            "name": "002",
            "type": "animation",
            "framerate": 4,
            "pivotx": 70,
            "pivoty": 92,
            "events": []
            },
            "data": [
                [0,0,139,184,0,0,139,184],
                [140,0,279,184,140,0,279,184],
                [280,0,419,184,280,0,419,184],
                [420,0,559,184,420,0,559,184]
            ],
            "filename": "images/sprites/skilleffect/002.png"
        }
    },
    "003":{
        "stand": {
            "info": {
                "nbrOfFrames": 4,
                "name": "stand",
                "type": "animation",
                "framerate": 4,
                "pivotx": 150,
                "pivoty": 150,
                "events": []
            },
            "data": [
                [0,0,299,299,0,0,299,299],
                [300,0,599,299,300,0,599,299],
                [600,0,899,299,600,0,899,299],
                [900,0,1199,299,900,0,1199,299]
            ],
            "filename": "images/sprites/skilleffect/003.png"
        }
    },
    "004":{
        "stand": {
            "info": {
                "nbrOfFrames": 8,
                "name": "",
                "type": "animation",
                "framerate": 4,
                "pivotx": 65,
                "pivoty": 150,
                "events": []
            },
            "data": [
                [0,0,130,299,0,0,130,299],
                [131,0,261,299,131,0,261,299],
                [262,0,392,299,262,0,392,299],
                [393,0,523,299,393,0,523,299],
                [524,0,654,299,524,0,654,299],
                [655,0,785,299,655,0,785,299],
                [786,0,916,299,786,0,916,299],
                [917,0,1047,299,917,0,1047,299]
            ],
            "filename": "images/sprites/skilleffect/004.png"
        }       
    },
    "005":{
        "stand": {
            "info": {
                "nbrOfFrames": 3,
                "name": "stand",
                "type": "animation",
                "framerate": 4,
                "pivotx": 171,
                "pivoty": 170,
                "events": []
            },
            "data": [
                [0,0,341,339,0,0,341,339],
                [342,0,683,339,342,0,683,339],
                [684,0,1025,339,684,0,1025,339]
            ],
            "filename": "images/sprites/skilleffect/005.png"
        }        
    },
    "006":{
        "stand": {
            "info": {
                "nbrOfFrames": 3,
                "name": "stand",
                "type": "animation",
                "framerate": 3,
                "pivotx": 171,
                "pivoty": 105,
                "events": []
            },
            "data": [
                [0,0,341,209,0,0,341,209],
                [342,0,683,209,342,0,683,209],
                [684,0,1025,209,684,0,1025,209]
            ],
            "filename": "images/sprites/skilleffect/006.png"
        }
    },
    "007":{
        "stand": {
            "info": {
                "nbrOfFrames": 3,
                "name": "stand",
                "type": "animation",
                "framerate": 4,
                "pivotx": 171,
                "pivoty": 170,
                "events": []
            },
            "data": [
                [0,0,341,339,0,0,341,339],
                [342,0,683,339,342,0,683,339],
                [684,0,1025,339,684,0,1025,339]
            ],
            "filename": "images/sprites/skilleffect/007.png"
        }       
    },
    "008":{
        "stand": {
            "info": {
                "nbrOfFrames": 3,
                "name": "stand",
                "type": "animation",
                "framerate": 10,
                "pivotx": 171,
                "pivoty": 170,
                "events": []
            },
            "data": [
                [0,0,341,339,0,0,341,339],
                [342,0,683,339,342,0,683,339],
                [684,0,1025,339,684,0,1025,339]
            ],
            "filename": "images/sprites/skilleffect/008.png"
        }        
    }
}

//console.log(role_data);


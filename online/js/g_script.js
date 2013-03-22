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
    },
    'intro':{
        type:'intro',//标记相应的stage类型
        repeat:true,//标记在流程中是否允许重复出现（即选关的时候是否会被再次触发）
        data:{},
        next:'drama_1'
        //next:'loading_4'
    }, 
    'drama_1':{
        type:'drama',//标记相应的stage类型
        repeat:false,          
        data: [
                '当唐如捡起沙滩上第九十九个贝壳的时候——',
                '他们相遇了',
                '这是命运的邂逅'    
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
            {'avatar':'resources/images/dialogue/rio_tang_beauty_sup.png','name':'唐如','content':'好美的人！',position:'left',globalBg : 'resources/images/bg/bg-beach-dusk.jpg'},
            {'avatar':'resources/images/dialogue/sola_cheng_nature.png','name':'？？','content':'你知道……人鱼吗？',position:'right',globalBg : 'resources/images/bg/bg-beach-dusk.jpg'},
            {'avatar':'resources/images/dialogue/rio_tang_smile.png','name':'唐如','content':'人鱼？虽说古籍中确有记载，然而看起来都是些不足取信的怪诞之说……',position:'left',globalBg : 'resources/images/bg/bg-beach-dusk.jpg'},
            {'avatar':'resources/images/dialogue/sola_cheng_faint.png','name':'？？','content':'……',position:'right',globalBg : 'resources/images/bg/bg-beach-dusk.jpg'},
            {'avatar':'resources/images/dialogue/rio_tang_sup.png','name':'唐如','content':'喂喂喂，兄台你怎么了！',globalBg : 'resources/images/bg/bg-beach-dusk.jpg'},
            {'avatar':'resources/images/dialogue/rio_tang_sup.png','name':'唐如','content':'醒，醒醒啊！',position:'left',globalBg : 'resources/images/bg/bg-beach-dusk.jpg'},
            {'avatar':'resources/images/dialogue/rio_tang_wei.png','name':'唐如','content':'呼吸平稳，脉象虽弱却不乱，莫不是饿晕过去了？',position:'left',globalBg : 'resources/images/bg/bg-beach-dusk.jpg'},
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
            'name':'battle_withlittlecrab',
            "role":["001"],
            "bg":'images/bg/bg-beach-dusk.jpg',
            "bgm":"music/battle-normal.mp3",
            "monster":[
                [
                    [{type:'crab',x:100,y:200}],
                    [{type:'crab',x:100,y:200},{type:'crab',x:300,y:200}],
                    [{type:'crab',x:100,y:200},{type:'crab',x:900,y:200}]
                ],
            ],
            "drop":['clothes','002',1]//掉落类型，掉落id，掉落概率
        },
        next:'map_1'
    },
    'map_1':{
        type:'map',
        repeat:true,
        data:[   //数组形式存储点
            {
                id:"place1",//点的id
                xPos:700, //x轴坐标
                yPos:260, //y轴坐标
                storyList:[//菜单项
                    {
                        title:"初遇少年",
                        story_point:"drama_1"
                    },
                    {
                        title:"走为上计",
                        story_point:"dialogue_2"
                    }
                ]
            },
        ],
        next:'dialogue_2'
    },
    'dialogue_2':{
        type:'dialogue',
        repeat:false,
        data:[
            {'avatar':'resources/images/dialogue/rio_tang_wei.png','name':'唐如','content':'此人究竟做过何事，让这些螃蟹如此怨愤？君子不立危墙之下，三十六计走为上策——',position:'left',globalBg : 'resources/images/bg/bg-beach-dusk.jpg'},
            {'avatar':'resources/images/dialogue/rio_tang_heavy.png','name':'唐如','content':'嘿～咻～此人虽不肥胖，分量却着实不轻。',position:'left',globalBg : 'resources/images/bg/bg-beach-dusk.jpg'},
        ],
        next:'drama_2'
    },
    'drama_2':{
        type:'drama',//标记相应的stage类型
        repeat:false,
        data:[
           
            '唐如带着晕倒的少年回到了自己家',
            '自双亲去世后',
            '唐如就独自一人居住在停泊在小湾中的一艘大船里'    
        ],
        next:'dialogue_3'
    },
    'dialogue_3':{
        type:'dialogue',
        repeat:false,
        data:[
            {'avatar':'resources/images/dialogue/sola_cheng_nature.png','name':'少年','content':'饿了。',position:'right',globalBg : 'resources/images/bg/bg-boat-inner.jpg'},
            {'avatar':'resources/images/dialogue/rio_tang_smile.png','name':'唐如','content':'来，这是刚熬好的粥，我说你倒是慢点喝，饿晕醒转，不宜马上暴食。',position:'left',globalBg : 'resources/images/bg/bg-boat-inner.jpg'},
            {'avatar':'resources/images/dialogue/sola_cheng_food.png','name':'少年','content':'粥是好粥，就是碗寒酸了点。此粥色泽金黄，香味清新，应该用镶金玉碗相配，方显相得益彰，色香和合——再来一碗。',position:'right',globalBg : 'resources/images/bg/bg-boat-inner.jpg'},
            {'avatar':'resources/images/dialogue/rio_tang_wei.png','name':'唐如','content':'买不起镶金玉碗还真-是-抱-歉-啊！好吧好吧，你等着，我这就给你盛去。',position:'left',globalBg : 'resources/images/bg/bg-boat-inner.jpg'},
            {'avatar':'resources/images/dialogue/sola_cheng_pity.png','name':'少年','content':'这是你家？果然破落。那边架上那堆书看来也是你的，俗语说，读书穷三代，笔墨毁一生，现在亲眼所见，果然不假。',position:'right',globalBg : 'resources/images/bg/bg-boat-inner.jpg'},
            {'avatar':'resources/images/dialogue/rio_tang_light_angry.png','name':'唐如','content':'是是是，实~在~抱~歉!阁下若已吃饱，就请歇息吧。（罢了罢了，眼不见心不烦，将就着在外面歇一宿，明天便请他离开吧。）',position:'left',globalBg : 'resources/images/bg/bg-boat-inner.jpg'},

        ],
        next:'drama_3'
    },
    'drama_3':{
        type:'drama',//标记相应的stage类型
        repeat:false,

        data: [
            'ZZZZZZZZZZZZZZZZ',
            '.',
            '.',
            '.'   
        ],
        next:'dialogue_4'
    },
    'dialogue_4':{
        type:'dialogue',
        repeat:false,
        data:[
            {'avatar':'resources/images/dialogue/rio_tang_normal.png','name':'唐如','content':'好舒服的香气，不似花香，却似……唔，稻香——咦？这是谁的衣服？',position:'left',globalBg : 'resources/images/bg/bg-boat-outer.jpg'},
            {'avatar':'resources/images/dialogue/sola_cheng_pity.png','name':'少年','content':'昨晚醒来看你衣衫褴褛，身体病弱，还躺在外面，万一受寒得病也一定没人照顾。我实在不忍心，赶紧把外袍拿来给你披上了。',position:'right',globalBg : 'resources/images/bg/bg-boat-outer.jpg'},
            {'avatar':'resources/images/dialogue/rio_tang_wei.png','name':'唐如','content':'在，在下手足俱全，尚可自食其力，不劳阁下多虑。',position:'left',globalBg : 'resources/images/bg/bg-boat-outer.jpg'},
            {'avatar':'resources/images/dialogue/sola_cheng_normal.png','name':'少年','content':'这住处还挺别致，就是这海边阴冷潮湿，你这病弱不堪的身子，长住下去似乎不妥……嗯。',position:'right',globalBg : 'resources/images/bg/bg-boat-outer.jpg'},
            {'avatar':'resources/images/dialogue/rio_tang_light_angry.png','name':'唐如','content':'……',position:'left',globalBg : 'resources/images/bg/bg-boat-outer.jpg'},
            {'avatar':'resources/images/dialogue/sola_cheng_food.png','name':'少年','content':'说来这船做工不坏，咦咦咦？这花纹，哎呀坏了！',position:'right',globalBg : 'resources/images/bg/bg-boat-outer.jpg'},
            {'avatar':'resources/images/dialogue/sola_cheng_a.png','name':'少年','content':'坏了坏了！赶快领我去一趟昨天的海滩，昨天晕倒的时候，似乎掉了很重要的东西。',position:'right',globalBg : 'resources/images/bg/bg-boat-outer.jpg'},
            {'avatar':'resources/images/dialogue/rio_tang_wei.png','name':'唐如','content':'……好吧。（看来捡了个大麻烦回家。）',position:'left',globalBg : 'resources/images/bg/bg-boat-outer.jpg'},
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
            "name": 'battle_withlittlecrab2',
            "role":["001","002"],
            "bg":'images/bg/bg-beach.jpg',
            "bgm":"music/battle-normal.mp3",
            "monster":[
                [
                    [{type:'crab',x:100,y:-200},{type:'crab',x:300,y:-200},{type:'crab',x:500,y:900},{type:'crab',x:400,y:900}],
                    [{type:'crab',x:100,y:-200},{type:'crab',x:300,y:-200},{type:'crab',x:500,y:900},{type:'crab',x:400,y:900}],
                    [{type:'crab',x:100,y:-200},{type:'crab',x:300,y:-200},{type:'crab',x:500,y:900},{type:'crab',x:400,y:900},{type:'crab',x:300,y:900}],
                ]
            ],
            "drop":['weapon','004',1]//掉落类型，掉落id，掉落概率
        },
        next:'map_2'
    },
    'map_2':{
        type:'map',
        repeat:true,
        data:[   //数组形式存储点
            {
                id:"place1",//点的id
                xPos:700, //x轴坐标
                yPos:260, //y轴坐标
                storyList:[//菜单项
                    {
                        title:"初遇少年",
                        story_point:"drama_1"
                    },
                    {
                        title:"走为上计",
                        story_point:"dialogue_2"
                    },
                    {
                        title:"大战蟹王",
                        story_point:"dialogue_5"
                    }
                ]
            },
        ],
        next:'dialogue_5'
    },
    'dialogue_5':{
        type:'dialogue',
        repeat:false,
        data:[
            {'avatar':'resources/images/dialogue/crab_boss.png','name':'大王蟹','content':'可恶，可恶的人类！血海深仇，不共戴天！',position:'left',globalBg : 'resources/images/bg/bg-beach.jpg'},
        ],
        next:'battle_withcrabboss'
    },
    'battle_withcrabboss':{
        type:'battle',
        repeat:true,
        data:{
            "name":'battle_withcrabboss',
            "role":["001","002"],
            "bg":'images/bg/bg-beach.jpg',
            "bgm":"music/battle-boss.mp3",
            "monster":[
                [
                    [{type:'crab_boss',x:100,y:200},{type:'crab',x:50,y:200},{type:'crab',x:50,y:300}]
                ]
            ],
            "drop":['weapon','002',1]//掉落类型，掉落id，掉落概率
        },
        
        next:'map_3'
    },
    'map_3':{
        type:'map',
        repeat:true,
        data:[   //数组形式存储点
            {
                id:"place1",//点的id
                xPos:700, //x轴坐标
                yPos:260, //y轴坐标
                storyList:[//菜单项
                    {
                        title:"初遇少年",
                        story_point:"drama_1"
                    },
                    {
                        title:"走为上计",
                        story_point:"dialogue_2"
                    },
                    {
                        title:"大战蟹王",
                        story_point:"dialogue_5"
                    },
                    {
                        title:"扬帆远航",
                        story_point:"dialogue_6"
                    }
                ]
            },
        ],
        next:'dialogue_6'
    },
    'dialogue_6':{
        type:'dialogue',
        repeat:false,
        data:[
            {'avatar':'resources/images/dialogue/sola_cheng_food.png','name':'少年','content':'幸好幸好，没有损坏，这可是我整整一年的心血结晶啊！',position:'left',globalBg : 'resources/images/bg/bg-beach.jpg'},
            {'avatar':'resources/images/dialogue/rio_tang_normal.png','name':'唐如','content':'这是……《海味谱》？待我看看。',position:'right',globalBg : 'resources/images/bg/bg-beach.jpg'},
            {'avatar':'resources/images/dialogue/rio_tang_wei.png','name':'唐如','content':'第三章，“蟹肉治法百种”，难怪那些螃蟹要攻击他。',position:'right',globalBg : 'resources/images/bg/bg-boat-outer.jpg'},
            {'avatar':'resources/images/dialogue/sola_cheng_a.png','name':'少年','content':'我决定了！',position:'left',globalBg : 'resources/images/bg/bg-boat-outer.jpg'},
            {'avatar':'resources/images/dialogue/rio_tang_wei.png','name':'唐如','content':'喂喂喂，你在做什么？',position:'right',globalBg : 'resources/images/bg/bg-boat-outer.jpg'},
            {'avatar':'resources/images/dialogue/sola_cheng_food.png','name':'少年','content':'从今以后，我们一起游历江海，寻找人鱼去吧——对了你叫什么名字？',position:'left',globalBg : 'resources/images/bg/bg-boat-outer.jpg'},
            {'avatar':'resources/images/dialogue/rio_tang_sup.png','name':'唐如','content':'在下姓唐名如……等等，你在对别人的家做什么啊！',position:'right',globalBg : 'resources/images/bg/bg-boat-outer.jpg'},
            {'avatar':'resources/images/dialogue/sola_cheng_food.png','name':'少年','content':'唐如，唐如，哈哈！我叫程少非，赶快上船吧！',position:'left',globalBg : 'resources/images/bg/bg-boat-outer.jpg'},
            {'avatar':'resources/images/dialogue/rio_tang_sup.png','name':'唐如','content':'不不不，这不是钱的问题，就算你拿再多的金叶子我也不能把父亲留下来的……喂，不要自顾自地把人家的家开走啊！',position:'right',globalBg : 'resources/images/bg/bg-boat-outer.jpg'},
        ],
        next:'drama_4'
    },
    'drama_4':{
        type:'drama',//标记相应的stage类型
        repeat:false,
        data:[
            '就这样,',
            '唐如不情不愿地被少非拖着，',
            '开始了出海寻找人鱼的旅程。',
            '（第一章完）'   
        ],
        next:'map_4'
    },
    'map_4':{
        type:'map',
        repeat:true,
        data:[   //数组形式存储点
            {
                id:"place1",//点的id
                xPos:700, //x轴坐标
                yPos:260, //y轴坐标
                storyList:[//菜单项
                    {
                        title:"初遇少年",
                        story_point:"drama_1"
                    },
                    {
                        title:"走为上计",
                        story_point:"dialogue_2"
                    },
                    {
                        title:"大战蟹王",
                        story_point:"dialogue_5"
                    },
                    {
                        title:"扬帆远航",
                        story_point:"dialogue_6"
                    }
                ]
            },
        ],
        next:'loading_4'
    },
    'loading_4':{
        type:'loading',
        repeat:true,
        data:{
            key:'section_2'
        },
        next:'drama_5'
    },
    'drama_5':{
        type:'drama',//标记相应的stage类型
        repeat:false,
        data:[
            '两人一船驶向茫茫大海，',
            '向着传说中人鱼所在的海域行驶而去。'   
        ],
        next:'dialogue_7'
    },
    'dialogue_7':{
        type:'dialogue',
        repeat:false,
        data:[
            {'avatar':'resources/images/dialogue/sola_cheng_sigh.png','name':'程少非','content':'怪事怪事怪事，这不可能！',position:'right',globalBg : 'resources/images/bg/bg-boat-outer2.jpg'},
            {'avatar':'resources/images/dialogue/rio_tang_wei.png','name':'唐如','content':'又是何事惊叹啊？',position:'left',globalBg : 'resources/images/bg/bg-boat-outer2.jpg'},
            {'avatar':'resources/images/dialogue/sola_cheng_nature.png','name':'程少非','content':'根据这份航海图，过了青邱国就是普度湾，可怎么到现在还是一片汪洋？',position:'right',globalBg : 'resources/images/bg/bg-boat-outer2.jpg'},
            {'avatar':'resources/images/dialogue/rio_tang_wei.png','name':'唐如','content':'航海图且让我一观。',position:'left',globalBg : 'resources/images/bg/bg-boat-outer2.jpg'},
            {'avatar':'resources/images/dialogue/rio_tang_sup.png','name':'唐如','content':'“仅售十文，买五送一，货真价实，童叟无欺”，这航海图你是哪弄的？',position:'left',globalBg : 'resources/images/bg/bg-boat-outer2.jpg'},
            {'avatar':'resources/images/dialogue/sola_cheng_food.png','name':'程少非','content':'东口山脚下卖包子的瘸腿大爷手里买下的，开价十文钱，很便宜吧？',position:'right',globalBg : 'resources/images/bg/bg-boat-outer2.jpg'},
            {'avatar':'resources/images/dialogue/sola_cheng_nature.png','name':'程少非','content':'不过我看他孤苦可怜，就硬给了十个金叶子，他拿了以后，不知为何连包子都不要就飞快地跑了，追也追不上，唉。',position:'right',globalBg : 'resources/images/bg/bg-boat-outer2.jpg'},
            {'avatar':'resources/images/dialogue/rio_tang_wei.png','name':'唐如','content':'怜悯孤弱固然值得称赞，不过总觉得哪里不对劲的样子。',position:'left',globalBg : 'resources/images/bg/bg-boat-outer2.jpg'},
            {'avatar':'resources/images/dialogue/rio_tang_sup.png','name':'唐如','content':'我说，你还真敢就凭这么一份来历不明的航海图出海啊！',position:'left',globalBg : 'resources/images/bg/bg-boat-outer2.jpg'},
            {'avatar':'resources/images/dialogue/sola_cheng_normal.png','name':'程少非','content':'放心放心，凭我在外游历的经验，是绝不会在这种小事上出错的。',position:'right',globalBg : 'resources/images/bg/bg-boat-outer2.jpg'},
            {'avatar':'resources/images/dialogue/rio_tang_smile.png','name':'唐如','content':'（看他一副经验老成的样子，莫非比想象中的要可靠？）说起来，你在外游历了多久啊？',position:'left',globalBg : 'resources/images/bg/bg-boat-outer2.jpg'},
            {'avatar':'resources/images/dialogue/sola_cheng_nature.png','name':'程少非','content':'至今一年有余。啧啧，这海上风光，和陆上截然不同，令人心胸开朗。',position:'right',globalBg : 'resources/images/bg/bg-boat-outer2.jpg'},
            {'avatar':'resources/images/dialogue/rio_tang_sup.png','name':'唐如','content':'等，等等，这么说来，莫非你是头一次出海？',position:'left',globalBg : 'resources/images/bg/bg-boat-outer2.jpg'},
            {'avatar':'resources/images/dialogue/sola_cheng_normal.png','name':'程少非','content':'是啊，有何不妥？',position:'right',globalBg : 'resources/images/bg/bg-boat-outer2.jpg'},
            {'avatar':'resources/images/dialogue/rio_tang_wei.png','name':'唐如','content':'事到如今，也只好听天由命了。',position:'left',globalBg : 'resources/images/bg/bg-boat-outer2.jpg'},
            {'avatar':'resources/images/dialogue/rio_tang_beauty_sup.png','name':'唐如','content':'——咦？怎么有歌声？',position:'left',globalBg : 'resources/images/bg/bg-boat-outer2.jpg'},
        ],
        next:'cg_2'
    },
    'cg_2':{
        type:'cg',
        repeat:false,
        data:[{'path':'resources/images/cg/cg_2.jpg'}],
        next:'dialogue_8'
    },
    'dialogue_8':{
        type:'dialogue',
        repeat:false,
        data:[
            {'avatar':'','name':'人鱼少女','content':'灵皇皇兮既降，飙远举兮云中；览冀洲兮有余，横四海兮焉穷！',position:'right',globalBg : 'resources/images/cg/cg_3.jpg'},
            {'avatar':'resources/images/dialogue/rio_tang_beauty_sup.png','name':'唐如','content':'此曲只应天上有……子曰“不图为乐之至于斯也”，想必莫过于此了。',position:'left',globalBg : 'resources/images/cg/cg_3.jpg'},
            {'avatar':'resources/images/dialogue/sola_cheng_food.png','name':'程少非','content':'啊哈，终于找到了！',position:'left',globalBg : 'resources/images/cg/cg_3.jpg'},
            {'avatar':'resources/images/dialogue/sola_cheng_food.png','name':'程少非','content':'这位人鱼姑娘，这厢有礼，在下远道而来，请问能否借尾巴一尝？',position:'left',globalBg : 'resources/images/cg/cg_3.jpg'},
            {'avatar':'resources/images/dialogue/qing_normal.png','name':'人鱼少女','content':'……',position:'right',globalBg : 'resources/images/bg/bg-meet-dusk.jpg'},
            {'avatar':'resources/images/dialogue/rio_tang_sup.png','name':'唐如','content':'尝……尝？你在胡言乱语什么啊，当心冲撞了人家姑娘……你你你，你拿着刀冲上去是想……',position:'left',globalBg : 'resources/images/bg/bg-meet-dusk.jpg'},
            {'avatar':'resources/images/dialogue/sola_cheng_food.png','name':'程少非','content':'人鱼肉是世间美味，想必这位姑娘也早已习惯，请姑娘稍安勿躁，可能会有一点点痛，但事后必有重酬。',position:'left',globalBg : 'resources/images/bg/bg-meet-dusk.jpg'},
            {'avatar':'resources/images/dialogue/rio_tang_sup.png','name':'唐如','content':'习惯？那……那种事情怎有可能习惯……喂！',position:'left',globalBg : 'resources/images/bg/bg-meet-dusk.jpg'},
            {'avatar':'resources/images/dialogue/qing_normal.png','name':'人鱼少女','content':'哼，愚蠢的人类。',position:'right',globalBg : 'resources/images/bg/bg-meet-dusk.jpg'},
        ],
        next:'drama_6'
    },
    'drama_6':{
        type:'drama',//标记相应的stage类型
        repeat:false,
        data:[
            '人鱼少女伸开双手，',
            '口中不知念了几句什么。',
            '海面突然掀起滔天巨浪，',
            '两人连人带船被卷进了水幕中。'   
        ],
        next:'dialogue_9'
    },
    'dialogue_9':{
        type:'dialogue',
        repeat:false,
        data:[
            {'avatar':'resources/images/dialogue/sola_cheng_pity.png','name':'程少非','content':'醒醒，醒醒！',position:'left',globalBg : 'resources/images/bg/bg-sea.jpg'},
            {'avatar':'resources/images/dialogue/rio_tang_heavy.png','name':'唐如','content':'唔……唔……你往在下口中塞了何物？',position:'right',globalBg : 'resources/images/bg/bg-sea.jpg'},
            {'avatar':'resources/images/dialogue/sola_cheng_sigh.png','name':'程少非','content':'反应那么普通，你还真是无趣啊。',position:'left',globalBg : 'resources/images/bg/bg-sea.jpg'},
            {'avatar':'resources/images/dialogue/rio_tang_wei.png','name':'唐如','content':'好吧，我那么无趣还真是……唔！',position:'right',globalBg : 'resources/images/bg/bg-sea.jpg'},
            {'avatar':'resources/images/dialogue/sola_cheng_a.png','name':'程少非','content':'喂喂喂，含住含住，不要吐出来，这是避水珠，能让人在水中行动自如，吐掉了那可是要淹死的哟！',position:'left',globalBg : 'resources/images/bg/bg-sea.jpg'},
            {'avatar':'resources/images/dialogue/rio_tang_sup.png','name':'唐如','content':'如此说来，我们现在是在水底？',position:'right',globalBg : 'resources/images/bg/bg-sea.jpg'},
            {'avatar':'resources/images/dialogue/sola_cheng_normal.png','name':'程少非','content':'你可总算回过神了，刚才牙咬得那么紧，害我费了好大劲，最后用了点小手段才把珠子塞进你嘴里，呼。',position:'left',globalBg : 'resources/images/bg/bg-sea.jpg'},
            {'avatar':'resources/images/dialogue/rio_tang_wei.png','name':'唐如','content':'手……段，那倒是什么啊。',position:'right',globalBg : 'resources/images/bg/bg-sea.jpg'},
            {'avatar':'resources/images/dialogue/sola_cheng_normal.png','name':'程少非','content':'若说是什么手段，那肯定是……秘密啦！此地水族十分凶猛，跟紧我不要走散了。',position:'left',globalBg : 'resources/images/bg/bg-sea.jpg'},
        ],
        next:'battle_withlittlecrab3'
    },
    'battle_withlittlecrab3':{
        type:'battle',
        repeat:true,
        data:{
            "name": 'battle_withlittlecrab3',
            "role":["001","002"],
            "bg":'images/bg/bg-sea.jpg',
            "bgm":"music/battle-normal2.mp3",
            "monster":[
                [
                    [{type:'crab_2',x:100,y:-200},{type:'crab',x:300,y:-200},{type:'crab',x:500,y:900},{type:'crab',x:400,y:900}],
                    [{type:'crab_3',x:100,y:-200},{type:'crab',x:300,y:-200},{type:'crab',x:500,y:900},{type:'crab',x:400,y:900}],
                    [{type:'crab',x:100,y:-200},{type:'crab_2',x:300,y:-200},{type:'crab_3',x:500,y:900},{type:'crab',x:400,y:900},{type:'crab',x:300,y:900}],
                ]
            ],
            "drop":['weapon','004',1],//掉落类型，掉落id，掉落概率
        },
        next:'map_5'
    },
    'map_5':{
        type:'map',
        repeat:true,
        data:[   //数组形式存储点
            {
                id:"place1",//点的id
                xPos:700, //x轴坐标
                yPos:260, //y轴坐标
                storyList:[//菜单项
                    {
                        title:"初遇少年",
                        story_point:"drama_1"
                    },
                    {
                        title:"走为上计",
                        story_point:"dialogue_2"
                    },
                    {
                        title:"大战蟹王",
                        story_point:"dialogue_5"
                    },
                    {
                        title:"扬帆远航",
                        story_point:"dialogue_6"
                    }
                ]
            },
            {
                id:"place2",//点的id
                xPos:400, //x轴坐标
                yPos:450, //y轴坐标
                storyList:[//菜单项
                    {
                        title:"陆沉海转",
                        story_point:"dialogue_10"
                    }
                ]
            }
        ],
        next:'dialogue_10'
    },
    'dialogue_10':{
        type:'dialogue',
        repeat:false,
        data:[
            {'avatar':'resources/images/dialogue/rio_tang_wei.png','name':'唐如','content':'到了这里还没完没了的，你究竟残害了多少它们的同类……',position:'left',globalBg : 'resources/images/bg/bg-sea.jpg'},
            {'avatar':'resources/images/dialogue/rio_tang_heavy.png','name':'唐如','content':'哎呀珠子……唔！',position:'left',globalBg : 'resources/images/bg/bg-sea.jpg'},
            {'avatar':'resources/images/dialogue/sola_cheng_a.png','name':'程少非','content':'哎呀哎呀，都叫你小心点的，不好，避水珠被暗流卷走了！',position:'right',globalBg : 'resources/images/bg/bg-sea.jpg'},
            {'avatar':'','name':'？？？','content':'陆沉海转，风起岚涛，飙远举兮云中，喝！',position:'right',globalBg : 'resources/images/bg/bg-sea.jpg'},
            {'avatar':'resources/images/dialogue/sola_cheng_a.png','name':'程少非','content':'呜哇！',position:'right',globalBg : 'resources/images/bg/bg-sea.jpg'},
            {'avatar':'resources/images/dialogue/rio_tang_sup.png','name':'唐如','content':'呜哇！',position:'left',globalBg : 'resources/images/bg/bg-sea.jpg'},
        ],
        next:'drama_7'
    },
    'drama_7':{
        type:'drama',//标记相应的stage类型
        repeat:false,
        data:[
            '海水被一股强大的力量从中间破开，',
            '两人被从水底重新甩到了岸上。'  
        ],
        next:'map_6'
    },
    'map_6':{
        type:'map',
        repeat:true,
        data:[   //数组形式存储点
            {
                id:"place1",//点的id
                xPos:700, //x轴坐标
                yPos:260, //y轴坐标
                storyList:[//菜单项
                    {
                        title:"初遇少年",
                        story_point:"drama_1"
                    },
                    {
                        title:"走为上计",
                        story_point:"dialogue_2"
                    },
                    {
                        title:"大战蟹王",
                        story_point:"dialogue_5"
                    },
                    {
                        title:"扬帆远航",
                        story_point:"dialogue_6"
                    }
                ]
            },
            {
                id:"place2",//点的id
                xPos:400, //x轴坐标
                yPos:450, //y轴坐标
                storyList:[//菜单项
                    {
                        title:"陆沉海转",
                        story_point:"dialogue_10"
                    },
                    {
                        title:"安然无恙",
                        story_point:"dialogue_11"
                    }
                ]
            }
        ],
        next:'dialogue_11'
    },
    'dialogue_11':{
        type:'dialogue',
        repeat:false,
        data:[
            {'avatar':'resources/images/dialogue/sola_cheng_nature.png','name':'程少非','content':'虽然不知道怎么回事，不过看起来好像安全了的样子。',position:'left',globalBg : 'resources/images/bg/bg-beach-dusk.jpg'},
            {'avatar':'resources/images/dialogue/rio_tang_heavy.png','name':'唐如','content':'咳，咳，咳，我，呕……',position:'right',globalBg : 'resources/images/bg/bg-beach-dusk.jpg'},
            {'avatar':'resources/images/dialogue/sola_cheng_a.png','name':'程少非','content':'唉，你看你你看你，如此体弱，接下来舟车劳顿，可怎么受得了，啧啧，着实令人忧心。',position:'left',globalBg : 'resources/images/bg/bg-beach-dusk.jpg'},
            {'avatar':'resources/images/dialogue/rio_tang_light_angry.png','name':'唐如','content':'一副事不关己的样子，莫非不是你强拖我来的？',position:'right',globalBg : 'resources/images/bg/bg-beach-dusk.jpg'},
            {'avatar':'resources/images/dialogue/sola_cheng_food.png','name':'程少非','content':'和螃蟹战斗那么久，肚子也饿了，不如就往陆上走走，说不定会有意想不到的美食在前。',position:'left',globalBg : 'resources/images/bg/bg-beach-dusk.jpg'},
            {'avatar':'resources/images/dialogue/rio_tang_wei.png','name':'唐如','content':'(虽说完全不想再和这不靠谱的家伙扯上关系，但目前看来单独行动着实不是明智之举，也只有走一步算一步了。)',position:'left',globalBg : 'resources/images/bg/bg-beach-dusk.jpg'},
            {'avatar':'resources/images/dialogue/rio_tang_sup.png','name':'唐如','content':'我说你就不能等人家考虑完再走，喂喂喂，等等我！',position:'left',globalBg : 'resources/images/bg/bg-beach-dusk.jpg'},
            {'avatar':'resources/images/dialogue/fuchen_angry.png','name':'扶尘子','content':'喂，那边的！怎敢随便在老朽的花田里踩来踩去，当真无礼至极。',position:'left',globalBg : 'resources/images/bg/bg-field.jpg'},
            {'avatar':'resources/images/dialogue/rio_tang_sup.png','name':'唐如','content':'花田？可这分明是荒地。',position:'right',globalBg : 'resources/images/bg/bg-field.jpg'},
            {'avatar':'resources/images/dialogue/sola_cheng_nature.png','name':'程少非','content':'那边几株萝卜苗倒是长势不错，好好烹调，也称得上佳肴。',position:'left',globalBg : 'resources/images/bg/bg-field.jpg'},
            {'avatar':'resources/images/dialogue/fuchen_face_red.png','name':'扶尘子','content':'胡胡胡胡胡扯！老朽才不屑与你们这些不通风雅之人说话，哼！',position:'left',globalBg : 'resources/images/bg/bg-field.jpg'},
            {'avatar':'resources/images/dialogue/rio_tang_wei.png','name':'唐如','content':'看起来好像很生气的样子，是不是应该道歉呢？',position:'left',globalBg : 'resources/images/bg/bg-field.jpg'},
            {'avatar':'resources/images/dialogue/rio_tang_sup.png','name':'唐如','content':'喂喂喂，你又在做什么！',position:'left',globalBg : 'resources/images/bg/bg-field.jpg'},
            {'avatar':'resources/images/dialogue/sola_cheng_nature.png','name':'程少非','content':'这种果子似乎没见过，嗯，色彩鲜艳，气味芬芳，应当是一种食材。',position:'left',globalBg : 'resources/images/bg/bg-field.jpg'},
        ],
        next:'drama_8'
    },
    'drama_8':{
        type:'drama',//标记相应的stage类型
        repeat:false,
        data:[
            '轰隆一声巨响',
            '两人眼前出现了无数',
            '似乎看起来还挺可爱的——',
            '它们冲过来了！'
        ],
        next:'battle_withrabbit'
    },
    'battle_withrabbit':{
        type:'battle',
        repeat:true,
        data:{
            'name':'battle_withlittlecrab',
            "role":["001","002"],
            "bg":'images/bg/bg-field.jpg',
            "bgm":"music/battle-normal2.mp3",
            "monster":[
                [
                    [{type:'rabbit_1',x:100,y:-200},{type:'rabbit_1',x:300,y:-200},{type:'rabbit_1',x:500,y:900},{type:'rabbit_1',x:400,y:900}],
                    [{type:'rabbit_2',x:100,y:-200},{type:'rabbit_2',x:300,y:-200},{type:'rabbit_2',x:500,y:900},{type:'rabbit_2',x:400,y:900}],
                    [{type:'rabbit_1',x:100,y:-200},{type:'rabbit_2',x:300,y:-200},{type:'rabbit_1',x:500,y:900},{type:'rabbit_2',x:400,y:900},{type:'rabbit_1',x:300,y:900}],
                    [{type:'rabbit_2',x:100,y:-200},{type:'rabbit_2',x:300,y:-200},{type:'rabbit_2',x:500,y:900},{type:'rabbit_2',x:400,y:900},{type:'rabbit_2',x:300,y:900}],
                ]
            ],
            "drop":['clothes','004',1],//掉落类型，掉落id，掉落概率
        },

        next:'map_7'
    },
    'map_7':{
        type:'map',
        repeat:true,
        data:[   //数组形式存储点
            {
                id:"place1",//点的id
                xPos:700, //x轴坐标
                yPos:260, //y轴坐标
                storyList:[//菜单项
                    {
                        title:"初遇少年",
                        story_point:"drama_1"
                    },
                    {
                        title:"走为上计",
                        story_point:"dialogue_2"
                    },
                    {
                        title:"大战蟹王",
                        story_point:"dialogue_5"
                    },
                    {
                        title:"扬帆远航",
                        story_point:"dialogue_6"
                    }
                ]
            },
            {
                id:"place2",//点的id
                xPos:400, //x轴坐标
                yPos:450, //y轴坐标
                storyList:[//菜单项
                    {
                        title:"陆沉海转",
                        story_point:"dialogue_10"
                    },
                    {
                        title:"安然无恙",
                        story_point:"dialogue_11"
                    },
                    {
                        title:"人鱼少女",
                        story_point:"dialogue_11"
                    }
                ]
            }
        ],
        next:'dialogue_12'
    },
    'dialogue_12':{
        type:'dialogue',
        repeat:false,
        data:[
            {'avatar':'resources/images/dialogue/fuchen_angry.png','name':'扶尘子','content':'急急如律令，退！',position:'left',globalBg : 'resources/images/bg/bg-field.jpg'},
            {'avatar':'resources/images/dialogue/sola_cheng_a.png','name':'程少非','content':'那些兔子怪一下都不见了，好厉害的道长！',position:'right',globalBg : 'resources/images/bg/bg-field.jpg'},
            {'avatar':'resources/images/dialogue/fuchen_angry.png','name':'扶尘子','content':'道，道长？你才是道长，你全家都是道长！',position:'left',globalBg : 'resources/images/bg/bg-field.jpg'},
            {'avatar':'resources/images/dialogue/rio_tang_sup.png','name':'唐如','content':'但是看前辈衣着，明明是修道之人？',position:'left',globalBg : 'resources/images/bg/bg-field.jpg'},
            {'avatar':'resources/images/dialogue/fuchen_angry.png','name':'扶尘子','content':'去去去，没事的话你们可以滚了，现在的年轻人啊，全不知礼数，老人家说话也不静静听着，当真是世风日下，人心不古。',position:'left',globalBg : 'resources/images/bg/bg-field.jpg'},
            {'avatar':'resources/images/dialogue/sola_cheng_food.png','name':'程少非','content':'唐如唐如，有好吃的了，快过来帮忙生火。',position:'left',globalBg : 'resources/images/bg/bg-field.jpg'},
            {'avatar':'resources/images/dialogue/rio_tang_beauty_sup.png','name':'唐如','content':'好香……不对，你这是哪里弄来的肉？',position:'left',globalBg : 'resources/images/bg/bg-field.jpg'},
            {'avatar':'resources/images/dialogue/sola_cheng_food.png','name':'程少非','content':'放心吧，这是刚才飞过的海鸥，这牡丹枝烤肉虽不及荔枝木，却也别有一番风味，在这荒岛上，也算是难得。',position:'left',globalBg : 'resources/images/bg/bg-field.jpg'},
            {'avatar':'resources/images/dialogue/fuchen_angry.png','name':'扶尘子','content':'混蛋！你们在烧什么？！！！！！我精心培育的牡丹花树啊！！！！可恶！！！',position:'right',globalBg : 'resources/images/bg/bg-field.jpg'},
            {'avatar':'resources/images/dialogue/sola_cheng_food.png','name':'程少非','content':'我见它毫无生机，多半早就枯死了，不如让它物尽其用。',position:'left',globalBg : 'resources/images/bg/bg-field.jpg'},
            {'avatar':'resources/images/dialogue/fuchen_face_red.png','name':'扶尘子','content':'胡说，胡说！虽然算不上用了多少心思，这牡丹花也是我日日自万里之外取甘露浇灌的。你们烧了这牡丹，待那人回来又要多事，搅我耳根清净——说是什么牡丹花开之日定会回来，谁会信啊？',position:'right',globalBg : 'resources/images/bg/bg-field.jpg'},
            {'avatar':'resources/images/dialogue/qing_pay_a_look.png','name':'少女','content':'又在痴人说梦。',position:'left',globalBg : 'resources/images/bg/bg-field.jpg'},
            {'avatar':'resources/images/dialogue/fuchen_face_red.png','name':'扶尘子','content':'碧青你来得正好，赶紧帮为师教训一下这两个无礼小贼！',position:'right',globalBg : 'resources/images/bg/bg-field.jpg'},
            {'avatar':'resources/images/dialogue/qing_pay_a_look.png','name':'碧青','content':'那么久了，亏你还在乎那种无聊约定。',position:'left',globalBg : 'resources/images/bg/bg-field.jpg'},
            {'avatar':'resources/images/dialogue/fuchen_face_red.png','name':'扶尘子','content':'这……碧青你也是知道的，虽然跟那人约好绝不能对人类动武这样的事情我从一开始就没打算遵守，不过和这两个小辈动手总归有失身份，所以还是你来……',position:'right',globalBg : 'resources/images/bg/bg-field.jpg'},
            {'avatar':'resources/images/dialogue/qing_pay_a_look.png','name':'碧青','content':'无聊。你们，一起上吧。',position:'left',globalBg : 'resources/images/bg/bg-field.jpg'},
        ],
        next:'intro'
    },
    //无限模式
    'drama_Infinity':{
        type:'drama',
        repeat:true,
        data:[
        
        ],
        next:'loading_Infinity'
    },
    'loading_Infinity':{
        type:'loading',
        repeat:true,
        data:{
            key:'battle_infinity'
        },
        next:'battle_Infinity'
    },
    'battle_Infinity':{
        type:'battle',
        repeat:true,
        data:{
            "name":'battle_Infinity',
            "role":["001"],
            "bg":'images/bg/bg-beach.jpg',
            "bgm":"music/battle-normal.mp3",
            "monster":[
                [
                    [{type:'crab_3',x:100,y:200}],
                    [{type:'crab',x:100,y:200},{type:'crab',x:900,y:200}],
                    [{type:'crab',x:100,y:200},{type:'crab',x:900,y:200},{type:'crab',x:500,y:0},{type:'rabbit_1',x:500,y:640}],
                    [{type:'crab',x:100,y:200},{type:'crab',x:900,y:200},{type:'crab',x:500,y:0},{type:'crab',x:500,y:640},{type:'crab',x:300,y:0},{type:'crab',x:800,y:640}],
                    [{type:'crab',x:100,y:200},{type:'crab_2',x:900,y:200},{type:'crab',x:500,y:0},{type:'crab',x:500,y:640},{type:'crab',x:300,y:0},{type:'crab',x:800,y:640},{type:'crab',x:150,y:0},{type:'crab',x:960,y:640}],
                    [{type:'crab_boss',x:500,y:640}],
                    [{type:'rabbit_1',x:100,y:200},{type:'rabbit_2',x:900,y:200}],
                    [{type:'rabbit_1',x:100,y:200},{type:'rabbit_2',x:900,y:200},{type:'crab',x:500,y:0}],
                    [{type:'rabbit_1',x:100,y:200},{type:'rabbit_2',x:900,y:200},{type:'rabbit_1',x:500,y:0},{type:'rabbit_2',x:500,y:640},{type:'crab',x:300,y:0},{type:'crab',x:800,y:640}],
                    [{type:'rabbit_1',x:100,y:200},{type:'rabbit_2',x:900,y:200},{type:'crab',x:500,y:0},{type:'rabbit_1',x:500,y:640},{type:'rabbit_2',x:300,y:0},{type:'crab',x:800,y:640},{type:'crab',x:150,y:0},{type:'crab',x:960,y:640}],
                    [{type:'crab_boss',x:500,y:640},{type:'crab',x:100,y:200},{type:'crab',x:900,y:200}],
                    [{type:'rabbit_1',x:100,y:200},{type:'rabbit_2',x:900,y:200},{type:'crab',x:500,y:0}],
                    [{type:'rabbit_1',x:100,y:200},{type:'rabbit_2',x:900,y:200},{type:'rabbit_1',x:500,y:0},{type:'rabbit_2',x:500,y:640},{type:'crab',x:300,y:0},{type:'crab',x:800,y:640}],
                    [{type:'rabbit_1',x:100,y:200},{type:'rabbit_2',x:900,y:200},{type:'crab',x:500,y:0},{type:'rabbit_1',x:500,y:640},{type:'rabbit_2',x:300,y:0},{type:'crab',x:800,y:640},{type:'crab',x:150,y:0},{type:'crab',x:960,y:640}],
                    [{type:'crab_boss',x:500,y:640},{type:'crab',x:100,y:200},{type:'crab',x:900,y:200}],
                ],
            ],
            "drop":['clothes','002',1],//掉落类型，掉落id，掉落概率
        },
        next:'intro'
    }
};  

//每个场景对应的需要预加载的资源列表
woh.g_config.resources = {
    // 比如： 战斗场景，随便测试一个, 假如第一场战斗
    // 根目录基于 resources/
    battle_infinity:{
        type: 'battle',
        resources:[
            'images/circle.png',
            'images/pie.png',
            'images/shadow.png',
            //载入技能图标资源
            'images/skillicons/001.jpg',
            'images/skillicons/002.jpg',
            'images/skillicons/003.jpg',
            'images/skillicons/004.jpg',
            'images/skillicons/005.jpg',
            'images/skillicons/006.jpg',
            'images/skillicons/007.jpg',
            'images/skillicons/008.jpg',
            'images/skillicons/009.jpg',
            'images/skillicons/010.jpg',
            'images/skillicons/011.jpg',
            'images/skillicons/012.jpg',
            //载入装备资源
            'images/sprites/clothes/001/001/attack.png',
            'images/sprites/clothes/001/001/hurted.png',
            'images/sprites/clothes/001/001/magic.png',
            'images/sprites/clothes/001/001/stand.png',
            'images/sprites/clothes/001/001/run.png',
            'images/sprites/clothes/001/001/dead.png',

            'images/sprites/weapon/001/attack.png',
            'images/sprites/weapon/001/hurted.png',
            'images/sprites/weapon/001/magic.png',
            'images/sprites/weapon/001/stand.png',
            'images/sprites/weapon/001/run.png',

            //载入技能特效图片
            'images/sprites/skilleffect/001.png',
            'images/sprites/skilleffect/002.png',
            'images/sprites/skilleffect/003.png',
            'images/sprites/skilleffect/004.png',
            'images/sprites/skilleffect/005.png',
            'images/sprites/skilleffect/006.png',
            'images/sprites/skilleffect/007.png',
            'images/sprites/skilleffect/008.png',
            'images/sprites/skilleffect/normal_1.png',
            //头像物品等资源
            'images/map/ava/rio_tang.png',
            'images/map/items/c_002.png',
            //载入结算界面的资源
            'images/count/avatar-outer.png',
            'images/count/lvUP.png',
            'images/count/expbar-bg.png',
            'images/count/count-bg.png',

            'images/monster/normal001-crab.png',
            'images/monster/normal002-rabbit.png',
            'images/monster/normal003-rabbit.png',
            'images/monster/normal004-crab.png',
            'images/monster/normal005-crab.png',

            'music/battle-normal.mp3',
            'music/fail.mp3',
            'music/win.mp3',

            // 攻击和技能音效
            'sound/attack.mp3',
            'sound/skill_001.mp3',
            'sound/skill_002.mp3',
            'sound/skill_003.mp3',
            'sound/skill_004.mp3',
            'sound/skill_005.mp3',
            'sound/skill_006.mp3',
            'sound/skill_007.mp3',
            'sound/skill_008.mp3'
        ] 
    },
    intro:{
        type:'intro',
        resources:[
            'images/index/index.jpg',
            'images/index/dead.jpg',
            'images/index/start-button-1.png',
            'images/index/start-button-2.png',
            'images/index/start-button-3.png',
            'images/index/start-button-4.png',
            'images/index/return-button.png',
            'images/index/sound.png',
            'images/index/nosound.png',

            'images/dialogue/rio_tang_normal.png',
            'images/dialogue/rio_tang_angry.png',
            'images/dialogue/rio_tang_beauty_sup.png',
            'images/dialogue/rio_tang_heavy.png',
            'images/dialogue/rio_tang_light_angry.png',
            'images/dialogue/rio_tang_smile.png',
            'images/dialogue/rio_tang_sup.png',
            'images/dialogue/rio_tang_wei.png',

            'images/dialogue/sola_cheng_normal.png',
            'images/dialogue/sola_cheng_faint.png',
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
            
            //sound
            'music/chat.mp3'
        ]
    },
    battle_1: {
        type: 'battle',
        resources:[
            'images/bg/bg-beach-dusk.jpg',
            
            'images/circle.png',
            'images/pie.png',
            'images/shadow.png',
            //载入技能图标资源
            'images/skillicons/001.jpg',
            'images/skillicons/002.jpg',
            'images/skillicons/003.jpg',
            'images/skillicons/004.jpg',
            'images/skillicons/005.jpg',
            'images/skillicons/006.jpg',
            'images/skillicons/007.jpg',
            'images/skillicons/008.jpg',
            'images/skillicons/009.jpg',
            'images/skillicons/010.jpg',
            'images/skillicons/011.jpg',
            'images/skillicons/012.jpg',
            //载入大地图资源
            'images/map/ava/rio_tang.png',
            'images/map/ava/shaofei_cheng.png',
            'images/map/items/select-ico.png',
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
            //载入技能特效图片
            'images/sprites/skilleffect/001.png',
            'images/sprites/skilleffect/002.png',
            'images/sprites/skilleffect/003.png',
            'images/sprites/skilleffect/004.png',
            'images/sprites/skilleffect/005.png',
            'images/sprites/skilleffect/006.png',
            'images/sprites/skilleffect/007.png',
            'images/sprites/skilleffect/008.png',
            'images/sprites/skilleffect/normal_1.png',
            //载入结算界面的资源
            'images/count/avatar-outer.png',
            'images/count/lvUP.png',
            'images/count/expbar-bg.png',
            'images/count/count-bg.png',

            'images/monster/normal001-crab.png',
            
            'music/battle-boss.mp3',
            'music/battle-normal.mp3',
            'music/fail.mp3',
            'music/win.mp3',
            // 攻击和技能音效
            'sound/attack.mp3',
            'sound/skill_001.mp3',
            'sound/skill_002.mp3',
            'sound/skill_003.mp3',
            'sound/skill_004.mp3',
            'sound/skill_005.mp3',
            'sound/skill_006.mp3',
            'sound/skill_007.mp3',
            'sound/skill_008.mp3'
        ] 
    },
    battle_2: {
        type: 'battle',
        resources: [
                'images/bg/bg-beach.jpg',
                'images/dialogue/crab_boss.png',
                'images/monster/boss-crab.png'
            ]
    },
    section_2:{
        type: 'battle',
        resources: [
            'images/bg/bg-boat-outer2.jpg',
            'images/cg/cg_2.jpg',
            'images/cg/cg_3.jpg',
            //碧青的表情图
            'images/dialogue/qing_normal.png',
            'images/dialogue/qing_look_ahead.png',
            'images/dialogue/qing_pay_a_look.png',
            'images/dialogue/qing_lose_sprite.png',
            'images/dialogue/qing_soft.png',
            'images/dialogue/qing_thinking.png',
            'images/dialogue/qing_upset.png',
            //扶尘子的表情图
            'images/dialogue/fuchen_angry.png',
            'images/dialogue/fuchen_cold_laugh.png',
            'images/dialogue/fuchen_face_red.png',
            'images/dialogue/fuchen_pretent_pity.png',
            'images/dialogue/fuchen_sad_laugh.png',
            'images/dialogue/fuchen_upset.png',
            //背景资源
            'images/bg/bg-meet-dusk.jpg',
            'images/bg/bg-sea.jpg',
            'images/bg/bg-field.jpg',
            //音乐
            'music/battle-normal2.mp3',
            //怪物
            'images/monster/normal004-crab.png',
            'images/monster/normal005-crab.png',
        ]    
    }
};
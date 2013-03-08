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
    },
    'intro':{
        type:'intro',//标记相应的stage类型
        repeat:true,//标记在流程中是否允许重复出现（即选关的时候是否会被再次触发）
        data:{},
        next:'dialogue_12'
        //next:'loading_4'
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
            {'avatar':'resources/images/dialogue/fuchen_face_red.png','name':'扶尘子','content':'这……碧青你也是知道的，我虽然跟那人约好绝不能对人类动武这样的事情我从一开始就没打算遵守，不过和这两个小辈动手总归有失身份，所以还是你来……',position:'right',globalBg : 'resources/images/bg/bg-field.jpg'},
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
            'music/chat.mp3',
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
   
            'images/bg/bg-beach.jpg',
            'images/dialogue/crab_boss.png',
            'images/monster/boss-crab.png',
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
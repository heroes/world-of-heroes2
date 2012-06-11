//用于通信的
role_data={
	'001':{
		'name':'唐如',//名字
		'type':'002',//类型
		'lv':0,//等级
		'avatar':'images/role/ava/ava_001.png',//头像
		'model':'images/role/model/001_normal.png',//裸模
		'health':1000,//生命
		'exp_current':12345,//当前经验值
		'exp_next':20000,//升级经验值
		'attack':15,//攻击
		'defend':3,//防御
		'crit':5,//暴击
		'miss':5,//闪避
		'weapon':'001',//武器编号
		'clothes':'001',//衣服编号
		'skill_point':'2',//剩余技能点
		'skill_list':{
			'疾风刺':1,
			'落英旋':2,
			'浮云风卷':3,
			'醉舞秋红':0
		}//技能列表（编号-等级）
	},
	'002':{
		'name':'祝离',//名字
		'type':'001',//类型
		'lv':0,//等级
		'avatar':'images/role/ava/ava_001.png',//头像
		'model':'images/role/model/001_normal.png',//裸模
		'health':1000,//生命
		'exp_current':12345,//当前经验值
		'exp_next':20000,//升级经验值
		'attack':15,//攻击
		'defend':3,//防御
		'crit':5,//暴击
		'miss':5,//闪避
		'weapon':'001',//武器编号
		'clothes':'001',//衣服编号
		'skill_point':'2',
		'skill_list':{
			'灵焰灼':1,
			'心月斩':2,
			'天狐之怒':0,
			'心宿业炎':1,
		}
	},
	'003':{
		'name':'碧青',//名字
		'type':'003',//类型
		'lv':0,//等级
		'avatar':'images/role/ava/ava_001.png',//头像
		'model':'images/role/model/001_normal.png',//裸模
		'health':1000,//生命
		'exp_current':12345,//当前经验值
		'exp_next':20000,//升级经验值
		'attack':15,//攻击
		'defend':3,//防御
		'crit':5,//暴击
		'miss':5,//闪避
		'weapon':'001',//武器编号
		'clothes':'001',//衣服编号
		'skill_point':'2',
		'skill_list':{
			'花雨露':1,
			'水月霖':1,
			'芳华流转':3,
			'镜泉润物':0
		}
	},
}

item_data={
		'weapon':{
			'001':{
				'name':'小刀',//名称
				'description':'常见的小刀，可以用来切切水果什么的。',//描述
				'icon':'images/weapon/icons/001.png',//图标路径
				'model':'images/weapon/model/001.png',//模型路径
				'health_addition':0,//血量加成
				'attack_addition':3,//攻击加成
				'defend_addition':0,//防御加成
				'crit_addition':0,//暴击加成
				'for':'001',//适用角色（读取role_data中的数据）
				'open':true//是否已经获得
			},
			'002':{
				'name':'匕首',//名称
				'description':'勉强能够用来防身的便宜货，居家旅行常备的防盗工具',
				'icon':'images/weapon/icons/001.png',
				'model':'images/weapon/model/001.png',
				'health_addition':0,
				'attack_addition':10,
				'defend_addition':3,
				'crit_addition':0,
				'for':'001',
				'open':false
			},
			'003':{
				'name':'长剑',
				'description':'“长剑一杯酒， 男儿方寸心。”游侠儿的必备装饰，看起来很拉风的样子。',
				'icon':'images/weapon/icons/001.png',
				'model':'images/weapon/model/001.png',
				'health_addition':0,
				'attack_addition':10,
				'defend_addition':3,
				'crit_addition':0,
				'for':'002',
				'open':false
			},
			'004':{
				'name':'青铜剑',
				'description':'古法锻冶的剑，拿在手里颇有分量，比普通的长剑看起来有内涵的样子，是这几年的流行选择。',
				'icon':'images/weapon/icons/001.png',
				'model':'images/weapon/model/001.png',
				'health_addition':0,
				'attack_addition':10,
				'defend_addition':3,
				'crit_addition':0,
				'for':'002',
				'open':false	
			},
			'005':{
				'name':'晶球',
				'description':'白水晶磨制的透明圆球，看不出有什么特别。',
				'icon':'images/weapon/icons/001.png',
				'model':'images/weapon/model/001.png',
				'health_addition':0,
				'attack_addition':10,
				'defend_addition':3,
				'crit_addition':0,
				'for':'002',
				'open':false	
			},
			'006':{
				'name':'紫晶珠',
				'description':'紫光流转的珠子，煞是好看，据说具有神秘的力量。',
				'icon':'images/weapon/icons/001.png',
				'model':'images/weapon/model/001.png',
				'health_addition':0,
				'attack_addition':10,
				'defend_addition':3,
				'crit_addition':0,
				'for':'003',
				'open':false	
			},
			'007':{
				'name':'十八妹',
				'description':'虽然外表看起来像是一把菜刀，但是其主人坚称它是一柄剑，能够增加一定程度的攻击和防御。',
				'icon':'images/weapon/icons/001.png',
				'model':'images/weapon/model/001.png',
				'health_addition':0,
				'attack_addition':10,
				'defend_addition':3,
				'crit_addition':0,
				'for':'003',
				'open':false	
			}
		},

		'clothes':{
			'001':{
				'name':'粗布衣',
				'description':'旧衣店出售的破旧衣服，上面还打了几个补丁。',
				'icon':'images/weapon/icons/001.png',
				'model':'images/weapon/model/001.png',
				'health_addition':0,
				'attack_addition':10,
				'defend_addition':3,
				'crit_addition':0,
				'speed_addition':0, 
				'for':'001',//适用角色
				'open':true
			},
			'002':{
				'name':'棉布衣',
				'description':'一般穷书生穿的布袍，只是单纯的布袍而已。',
				'icon':'images/weapon/icons/001.png',
				'model':'images/weapon/model/001.png',
				'health_addition':0,
				'attack_addition':10,
				'defend_addition':3,
				'crit_addition':0,
				'speed_addition':0, 
				'for':'001',
				'open':false
			},
			'003':{
				'name':'锦袍',
				'description':'富家公子常穿的便服，冬暖夏凉。',
				'icon':'images/weapon/icons/001.png',
				'model':'images/weapon/model/001.png',
				'health_addition':0,
				'attack_addition':10,
				'defend_addition':3,
				'crit_addition':0,
				'speed_addition':0, 
				'for':'002',//适用角色
				'open':true
			},
			'004':{
				'name':'蜀锦袍',
				'description':'“犹馀蜀中锦，爱惜比甘棠。”蜀地的锦缎千载驰名，用其制作的袍子自然也价格不菲。',
				'icon':'images/weapon/icons/001.png',
				'model':'images/weapon/model/001.png',
				'health_addition':0,
				'attack_addition':10,
				'defend_addition':3,
				'crit_addition':0,
				'speed_addition':0, 
				'for':'002',//适用角色
				'open':false
			},
			'005':{
				'name':'麟裳',
				'description':'人鱼国最常见的平民装束。',
				'icon':'images/weapon/icons/001.png',
				'model':'images/weapon/model/001.png',
				'health_addition':0,
				'attack_addition':10,
				'defend_addition':3,
				'crit_addition':0,
				'speed_addition':0, 
				'for':'003',//适用角色
				'open':true
			},
			'006':{
				'name':'华彩裙',
				'description':'少女们钟爱的薄绸裙，在阳光下会隐隐泛出五色华彩。',
				'icon':'images/weapon/icons/001.png',
				'model':'images/weapon/model/001.png',
				'health_addition':0,
				'attack_addition':10,
				'defend_addition':3,
				'crit_addition':0,
				'speed_addition':0, 
				'for':'003',//适用角色
				'open':false
			}
		}
}

//技能影响
//直接伤害，回复生命，区域伤害，添加buff
//buff类型：速度类（加减），防御类（加减），暴击类（加减），生命类（加减）
//注：大招均为手势识别施放，每个人的第四个招为大招

//目前唐如的三个技能分别为 单体攻击 瞬发群体攻击 吟唱群体攻击 大招为全屏幕地图炮高伤害攻击 

skill_data={
	'疾风刺':{
		'description':'追求一击必杀的招式，轻灵迅捷，其威力在不同修为者手中截然不同。（冲向对方进行一次攻击）',//技能描述
		'icon':'resources/iamges/001.png',//技能图标路径
		'level_limit':[0,3,4,5,7],//每一阶段的可点等级
		'cd':3,//CD时间
		
		//技能影响
		'data':{
			//单体直接伤害
			'attack_direct':{
				'target':'enemySingle',//使用对象 selfSingle/ememySingle/selfRange/ememyRange
				'duration':0.5,//动作持续时间
				'range':0.5, //技能的攻击范围，数值表示攻击范围的半径
				'attack_addition':[40,60,80,100,110],//伤害增加值,对应不同等级
		    },
		    //回复
		    //'recover':{

		    //},
		    //区域伤害
		    //'attack_area':{

		    //},
		    //添加buff
		    'buff':{
		    	//技能施展的同时冲向对方，用速度来表示
		    	'target':'selfSingle',
		    	'speed_addition':50,
		    }
		}
	},
	'落英旋':{
		'description':'英华翩舞兮，染景纷纷旧年时。映丽柔美，伤人于幻梦之中。（以指定点为中心，在半径30的区域内进行群体攻击）',//技能描述
		'icon':'resources/iamges/001.png',//技能图标路径
		'level_limit':[0,3,4,5,7],//每一阶段的可点等级
		'cd':3,//CD时间
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
				'duration':0.5,//动作持续时间
				'continue':2,//技能效果持续时间 
				'times':1,//造成伤害的次数
				'range':30, //技能的攻击范围，数值表示攻击范围的半径
				'attack_addition':[50,60,70,80,90],//伤害增加值
		    },
		    //添加buff
		    'buff':{

		    }
		}
	},
	'浮云风卷':{
		'description':'飘风自南，泱泱涤尘。凝神静气，荡净浮埃。（以施法者为中心，在半径200的区域内进行群体攻击，攻击+50）',//技能描述
		'icon':'resources/iamges/001.png',//技能图标路径
		'level_limit':[0,3,4,5,7],//每一阶段的可点等级
		'cd':5,//CD时间
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
				'range':200, //技能的攻击范围，数值表示攻击范围的半径
				'attack_addition':[50,60,70,80,90],//伤害增加值
		    },
		    //添加buff
		    'buff':{

		    }
		}
	},
	'醉舞秋红':{
		'description':'日暮秋烟起，萧萧枫树林。寄托壮志未酬哀思的招式，饱含尽除敌寇的怨愤。(敌方全体造成大量伤害)',
		'icon':'resources/iamges/001.png',//技能图标路径
		'level_limit':[5],//每一阶段的可点等级
		'cd':5,//CD时间
		//技能影响
		'data':{
			//单体直接伤害
			//'attack_direct':{

		    //},
		    //回复
		    //'recover':{

		    //},
		    //区域伤害
		    'attack_area':{
		    	'target':'enemyRange',//使用对象 selfSingle/ememySingle/selfRange/ememyRange
				'duration':0.5,//动作持续时间
				'continue':5,//技能效果持续时间
				'range':9999, //技能的攻击范围，数值表示攻击范围的半径
				'attack_addition':500,//伤害增加值
		    },
		    //添加buff
		    //'buff':{

		    //}
		}
	},
	'灵焰灼':{
		'description':'(受到攻击的敌人每秒受到)',
		'icon':'resources/iamges/001.png',//技能图标路径
		'level_limit':[5],//每一阶段的可点等级
		'cd':5,//CD时间
		//技能影响
		'data':{
			//单体直接伤害
			//'attack_direct':{

		    //},
		    //回复
		    //'recover':{

		    //},
		    //区域伤害
		    'attack_area':{
		    	'target':'enemyRange',//使用对象 selfSingle/ememySingle/selfRange/ememyRange
				'duration':0.5,//动作持续时间
				'continue':5,//技能效果持续时间
				'range':9999, //技能的攻击范围，数值表示攻击范围的半径
				'attack_addition':500,//伤害增加值
		    },
		    //添加buff
		    //'buff':{

		    //}
		}
	},
	'心月斩':{

	},
	'天狐之怒':{

	},
	'心宿业炎':{

	},
	'花雨露':{

	},
	'水月霖':{

	},
	'芳华流转':{

	},
	'镜泉润物':{

	}
}



console.log(role_data);

/* global default configs */
woh.g_config = {
    canvasWidth: 960,
    canvasHeight: 580
};

/* stage config */
woh.stage_config = {
    stage_intro: {
        textures: {
            index: {
                src: './resources/images/index.jpg',
                width: 1032,
                height: 774
            }
        }
        
    },
    // 情节，剧情，对话
    stage_drama: {
        textures: {},
        // 第一幕
        firstAct: {
            caption:[
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
        }
    },
    
    stage_dialogue: {
        textures: {},
        first: {
            
        }
    }
};
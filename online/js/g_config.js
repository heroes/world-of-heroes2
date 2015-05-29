﻿/* global default configs */
woh.g_config = {
    canvasWidth: 960,
    canvasHeight: 640,
    sound_play: true
};

//衣服的动画数据
woh.g_config.clothes = {
    '001_none': {
        "stand": {
            "info": {
                "nbrOfFrames": 2,
                "name": "stand",
                "type": "animation",
                "framerate": 2,
                "pivotx": 100,
                "pivoty": 75,
                "events": [{
                        name: 'standup',
                        frame: 1
                    }, //第一帧进入时触发
                    {
                        name: 'standdown',
                        frame: 2
                    } //第二帧进入时触发
                ]
            },
            "data": [
                [0, 0, 199, 169, 0, 0, 199, 169],
                [200, 0, 399, 169, 200, 0, 399, 169]
            ],
            "filename": "images/sprites/clothes/001/none/stand.png"
        },
        "run": {
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
                [0, 0, 199, 169, 0, 0, 199, 169],
                [200, 0, 399, 169, 200, 0, 399, 169],
                [400, 0, 599, 169, 400, 0, 599, 169],
                [600, 0, 799, 169, 600, 0, 799, 169]
            ],
            "filename": "images/sprites/clothes/001/none/run.png"
        },
        "attack": {
            "info": {
                "nbrOfFrames": 4,
                "name": "",
                "type": "animation",
                "framerate": 4,
                "pivotx": 100,
                "pivoty": 75,
                "events": [{
                    name: 'attack_affect',
                    frame: 1
                }]
            },
            "data": [
                [0, 0, 199, 169, 0, 0, 199, 169],
                [200, 0, 399, 169, 200, 0, 399, 169],
                [400, 0, 599, 169, 400, 0, 599, 169],
                [600, 0, 799, 169, 600, 0, 799, 169],
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
                [0, 0, 199, 169, 0, 0, 199, 169],
                [200, 0, 399, 169, 200, 0, 399, 169]
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
                [0, 0, 199, 169, 0, 0, 199, 169],
                [200, 0, 399, 169, 200, 0, 399, 169],
                [400, 0, 599, 169, 400, 0, 599, 169],
                [600, 0, 799, 169, 600, 0, 799, 169]
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
                [0, 0, 199, 169, 0, 0, 199, 169],
                [200, 0, 399, 169, 200, 0, 399, 169],
                [400, 0, 599, 169, 400, 0, 599, 169],
                [600, 0, 799, 169, 600, 0, 799, 169],
                [400, 0, 599, 169, 400, 0, 599, 169],
                [600, 0, 799, 169, 600, 0, 799, 169],
            ],
            "filename": "images/sprites/clothes/001/none/dead.png"
        }
    },
    '001': {
        "stand": {
            "info": {
                "nbrOfFrames": 2,
                "name": "stand",
                "type": "animation",
                "framerate": 2,
                "pivotx": 100,
                "pivoty": 75,
                "events": [{
                        name: 'standup',
                        frame: 1
                    }, //第一帧进入时触发
                    {
                        name: 'standdown',
                        frame: 2
                    } //第二帧进入时触发
                ]
            },
            "data": [
                [0, 0, 199, 169, 0, 0, 199, 169],
                [200, 0, 399, 169, 200, 0, 399, 169]
            ],
            "filename": "images/sprites/clothes/001/001/stand.png"
        },
        "run": {
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
                [0, 0, 199, 169, 0, 0, 199, 169],
                [200, 0, 399, 169, 200, 0, 399, 169],
                [400, 0, 599, 169, 400, 0, 599, 169],
                [600, 0, 799, 169, 600, 0, 799, 169]
            ],
            "filename": "images/sprites/clothes/001/001/run.png"
        },
        "attack": {
            "info": {
                "nbrOfFrames": 4,
                "name": "",
                "type": "animation",
                "framerate": 4,
                "pivotx": 100,
                "pivoty": 75,
                "events": [{
                    name: 'attack_affect',
                    frame: 1
                }]
            },
            "data": [
                [0, 0, 199, 169, 0, 0, 199, 169],
                [200, 0, 399, 169, 200, 0, 399, 169],
                [400, 0, 599, 169, 400, 0, 599, 169],
                [600, 0, 799, 169, 600, 0, 799, 169],
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
                [0, 0, 199, 169, 0, 0, 199, 169],
                [200, 0, 399, 169, 200, 0, 399, 169]
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
                [0, 0, 199, 169, 0, 0, 199, 169],
                [200, 0, 399, 169, 200, 0, 399, 169],
                [400, 0, 599, 169, 400, 0, 599, 169],
                [600, 0, 799, 169, 600, 0, 799, 169]
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
                [0, 0, 199, 169, 0, 0, 199, 169],
                [200, 0, 399, 169, 200, 0, 399, 169],
                [400, 0, 599, 169, 400, 0, 599, 169],
                [600, 0, 799, 169, 600, 0, 799, 169],
                [400, 0, 599, 169, 400, 0, 599, 169],
                [600, 0, 799, 169, 600, 0, 799, 169],
            ],
            "filename": "images/sprites/clothes/001/001/dead.png"
        }
    },
    '002': {
        "stand": {
            "info": {
                "nbrOfFrames": 2,
                "name": "stand",
                "type": "animation",
                "framerate": 2,
                "pivotx": 100,
                "pivoty": 75,
                "events": [{
                        name: 'standup',
                        frame: 1
                    }, //第一帧进入时触发
                    {
                        name: 'standdown',
                        frame: 2
                    } //第二帧进入时触发
                ]
            },
            "data": [
                [0, 0, 199, 169, 0, 0, 199, 169],
                [200, 0, 399, 169, 200, 0, 399, 169]
            ],
            "filename": "images/sprites/clothes/001/002/stand.png"
        },
        "run": {
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
                [0, 0, 199, 169, 0, 0, 199, 169],
                [200, 0, 399, 169, 200, 0, 399, 169],
                [400, 0, 599, 169, 400, 0, 599, 169],
                [600, 0, 799, 169, 600, 0, 799, 169]
            ],
            "filename": "images/sprites/clothes/001/002/run.png"
        },
        "attack": {
            "info": {
                "nbrOfFrames": 4,
                "name": "",
                "type": "animation",
                "framerate": 4,
                "pivotx": 100,
                "pivoty": 75,
                "events": [{
                    name: 'attack_affect',
                    frame: 1
                }]
            },
            "data": [
                [0, 0, 199, 169, 0, 0, 199, 169],
                [200, 0, 399, 169, 200, 0, 399, 169],
                [400, 0, 599, 169, 400, 0, 599, 169],
                [600, 0, 799, 169, 600, 0, 799, 169],
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
                [0, 0, 199, 169, 0, 0, 199, 169],
                [200, 0, 399, 169, 200, 0, 399, 169]
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
                [0, 0, 199, 169, 0, 0, 199, 169],
                [200, 0, 399, 169, 200, 0, 399, 169],
                [400, 0, 599, 169, 400, 0, 599, 169],
                [600, 0, 799, 169, 600, 0, 799, 169]
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
                [0, 0, 199, 169, 0, 0, 199, 169],
                [200, 0, 399, 169, 200, 0, 399, 169],
                [400, 0, 599, 169, 400, 0, 599, 169],
                [600, 0, 799, 169, 600, 0, 799, 169],
                [400, 0, 599, 169, 400, 0, 599, 169],
                [600, 0, 799, 169, 600, 0, 799, 169],
            ],
            "filename": "images/sprites/clothes/001/002/dead.png"
        }
    },
    '002_none': {
        "stand": {
            "info": {
                "nbrOfFrames": 2,
                "name": "stand",
                "type": "animation",
                "framerate": 2,
                "pivotx": 171,
                "pivoty": 130,
                "events": [{
                        name: 'standup',
                        frame: 1
                    }, //第一帧进入时触发
                    {
                        name: 'standdown',
                        frame: 2
                    } //第二帧进入时触发
                ]
            },
            "data": [
                [0, 0, 341, 209, 0, 0, 341, 209],
                [342, 0, 683, 209, 342, 0, 683, 209]
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
                "events": [{
                        name: 'standup',
                        frame: 1
                    }, //第一帧进入时触发
                    {
                        name: 'standdown',
                        frame: 2
                    } //第二帧进入时触发
                ]
            },
            "data": [
                [0, 0, 341, 209, 0, 0, 341, 209],
                [342, 0, 683, 209, 342, 0, 683, 209],
                [684, 0, 1025, 209, 684, 0, 1025, 209],
                [1026, 0, 1367, 209, 1026, 0, 1367, 209]
            ],
            "filename": "images/sprites/clothes/002/none/run.png"
        },
        "attack": {
            "info": {
                "nbrOfFrames": 3,
                "name": "attack",
                "type": "animation",
                "framerate": 2,
                "pivotx": 171,
                "pivoty": 130,
                "events": [{
                    name: 'attack_affect',
                    frame: 2
                }]
            },
            "data": [
                [342, 0, 683, 209, 342, 0, 683, 209],
                [342, 0, 683, 209, 342, 0, 683, 209],
                [0, 0, 341, 209, 0, 0, 341, 209],
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
                [0, 0, 341, 209, 0, 0, 341, 209],
                [342, 0, 683, 209, 342, 0, 683, 209],
                [684, 0, 1025, 209, 684, 0, 1025, 209]
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
                [0, 0, 341, 209, 0, 0, 341, 209]
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
                [0, 0, 341, 209, 0, 0, 341, 209],
                [342, 0, 683, 209, 342, 0, 683, 209],
                [684, 0, 1025, 209, 684, 0, 1025, 209],
                [1026, 0, 1367, 209, 1026, 0, 1367, 209],
                [684, 0, 1025, 209, 684, 0, 1025, 209],
                [1026, 0, 1367, 209, 1026, 0, 1367, 209]
            ],
            "filename": "images/sprites/clothes/002/none/dead.png"
        }
    },
    '003': {
        "stand": {
            "info": {
                "nbrOfFrames": 2,
                "name": "stand",
                "type": "animation",
                "framerate": 2,
                "pivotx": 171,
                "pivoty": 130,
                "events": [{
                        name: 'standup',
                        frame: 1
                    }, //第一帧进入时触发
                    {
                        name: 'standdown',
                        frame: 2
                    } //第二帧进入时触发
                ]
            },
            "data": [
                [0, 0, 341, 209, 0, 0, 341, 209],
                [342, 0, 683, 209, 342, 0, 683, 209]
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
                [0, 0, 341, 209, 0, 0, 341, 209],
                [342, 0, 683, 209, 342, 0, 683, 209],
                [684, 0, 1025, 209, 684, 0, 1025, 209],
                [1026, 0, 1367, 209, 1026, 0, 1367, 209]
            ],
            "filename": "images/sprites/clothes/002/003/run.png"
        },
        "attack": {
            "info": {
                "nbrOfFrames": 3,
                "name": "attack",
                "type": "animation",
                "framerate": 2,
                "pivotx": 171,
                "pivoty": 130,
                "events": [{
                    name: 'attack_affect',
                    frame: 2
                }]
            },
            "data": [
                [342, 0, 683, 209, 342, 0, 683, 209],
                [342, 0, 683, 209, 342, 0, 683, 209],
                [0, 0, 341, 209, 0, 0, 341, 209],
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
                [0, 0, 341, 209, 0, 0, 341, 209],
                [342, 0, 683, 209, 342, 0, 683, 209],
                [684, 0, 1025, 209, 684, 0, 1025, 209]
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
                [0, 0, 341, 209, 0, 0, 341, 209]
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
                [0, 0, 341, 209, 0, 0, 341, 209],
                [342, 0, 683, 209, 342, 0, 683, 209],
                [684, 0, 1025, 209, 684, 0, 1025, 209],
                [1026, 0, 1367, 209, 1026, 0, 1367, 209],
                [684, 0, 1025, 209, 684, 0, 1025, 209],
                [1026, 0, 1367, 209, 1026, 0, 1367, 209]
            ],
            "filename": "images/sprites/clothes/002/003/dead.png"
        }
    },
}
//武器的动画数据
woh.g_config.weapon = {
    'none': {},
    '001': {
        "stand": {
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
                [0, 0, 199, 169, 0, 0, 199, 169],
                [200, 0, 399, 169, 200, 0, 399, 169]
            ],
            "filename": "images/sprites/weapon/001/stand.png"
        },
        "run": {
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
                [0, 0, 199, 169, 0, 0, 199, 169],
                [200, 0, 399, 169, 200, 0, 399, 169],
                [400, 0, 599, 169, 400, 0, 599, 169],
                [600, 0, 799, 169, 600, 0, 799, 169]
            ],
            "filename": "images/sprites/weapon/001/run.png"
        },
        "attack": {
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
                [0, 0, 199, 169, 0, 0, 199, 169],
                [200, 0, 399, 169, 200, 0, 399, 169],
                [400, 0, 599, 169, 400, 0, 599, 169],
                [600, 0, 799, 169, 600, 0, 799, 169],
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
                [0, 0, 199, 169, 0, 0, 199, 169],
                [200, 0, 399, 169, 200, 0, 399, 169],
                [400, 0, 599, 169, 400, 0, 599, 169],
                [600, 0, 799, 169, 600, 0, 799, 169]
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
                [0, 0, 199, 169, 0, 0, 199, 169],
                [200, 0, 399, 169, 200, 0, 399, 169]
            ],
            "filename": "images/sprites/weapon/001/hurted.png"
        }
    },
    '002': {
        "stand": {
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
                [0, 0, 199, 169, 0, 0, 199, 169],
                [200, 0, 399, 169, 200, 0, 399, 169]
            ],
            "filename": "images/sprites/weapon/002/stand.png"
        },
        "run": {
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
                [0, 0, 199, 169, 0, 0, 199, 169],
                [200, 0, 399, 169, 200, 0, 399, 169],
                [400, 0, 599, 169, 400, 0, 599, 169],
                [600, 0, 799, 169, 600, 0, 799, 169]
            ],
            "filename": "images/sprites/weapon/002/run.png"
        },
        "attack": {
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
                [0, 0, 199, 169, 0, 0, 199, 169],
                [200, 0, 399, 169, 200, 0, 399, 169],
                [400, 0, 599, 169, 400, 0, 599, 169],
                [600, 0, 799, 169, 600, 0, 799, 169],
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
                [0, 0, 199, 169, 0, 0, 199, 169],
                [200, 0, 399, 169, 200, 0, 399, 169],
                [400, 0, 599, 169, 400, 0, 599, 169],
                [600, 0, 799, 169, 600, 0, 799, 169]
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
                [0, 0, 199, 169, 0, 0, 199, 169],
                [200, 0, 399, 169, 200, 0, 399, 169]
            ],
            "filename": "images/sprites/weapon/002/hurted.png"
        }
    },
    '003': {
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
                [0, 0, 341, 209, 0, 0, 341, 209],
                [342, 0, 683, 209, 342, 0, 683, 209]
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
                [0, 0, 341, 209, 0, 0, 341, 209],
                [342, 0, 683, 209, 342, 0, 683, 209],
                [684, 0, 1025, 209, 684, 0, 1025, 209],
                [1026, 0, 1367, 209, 1026, 0, 1367, 209]
            ],
            "filename": "images/sprites/weapon/003/run.png"
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
                [342, 0, 683, 209, 342, 0, 683, 209],
                [342, 0, 683, 209, 342, 0, 683, 209],
                [0, 0, 341, 209, 0, 0, 341, 209],
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
                [0, 0, 341, 209, 0, 0, 341, 209],
                [342, 0, 683, 209, 342, 0, 683, 209],
                [684, 0, 1025, 209, 684, 0, 1025, 209]
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
                [0, 0, 341, 209, 0, 0, 341, 209]
            ],
            "filename": "images/sprites/weapon/003/hurted.png"
        }
    },
    '004': {
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
                [0, 0, 341, 209, 0, 0, 341, 209],
                [342, 0, 683, 209, 342, 0, 683, 209]
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
                [0, 0, 341, 209, 0, 0, 341, 209],
                [342, 0, 683, 209, 342, 0, 683, 209],
                [684, 0, 1025, 209, 684, 0, 1025, 209],
                [1026, 0, 1367, 209, 1026, 0, 1367, 209]
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
                [342, 0, 683, 209, 342, 0, 683, 209],
                [342, 0, 683, 209, 342, 0, 683, 209],
                [0, 0, 341, 209, 0, 0, 341, 209],
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
                [0, 0, 341, 209, 0, 0, 341, 209],
                [342, 0, 683, 209, 342, 0, 683, 209],
                [684, 0, 1025, 209, 684, 0, 1025, 209]
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
                [0, 0, 341, 209, 0, 0, 341, 209]
            ],
            "filename": "images/sprites/weapon/004/hurted.png"
        }
    },
}
//怪物的数据
woh.g_config.monsters = {
    "crab": {
        "health": 300, //血量
        "damage": 4, //攻击
        "defend": 0, //防御
        "crit": 0, //暴击
        "exp": 300, //打死一只怪物获得的经验值
        'width': 124,
        'height': 74,
        'cooldown': 2000,
        "areadata": {
            standup: [0, 0, 190, 120],
            standdown: [0, 0, 190, 120]
        },
        "damageArea": [0, -45, 100, 30],
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
                    "events": [{
                            name: 'standup',
                            frame: 1
                        }, //第一帧进入时触发
                        {
                            name: 'standdown',
                            frame: 2
                        } //第二帧进入时触发
                    ]
                },
                "data": [
                    [380, 0, 569, 119, 380, 0, 569, 119],
                    [570, 0, 759, 119, 570, 0, 759, 119]
                ],
                "filename": "images/monster/normal001-crab.png"
            }
        ],
        "run": [{
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
                [380, 0, 569, 119, 380, 0, 569, 119],
                [570, 0, 759, 119, 570, 0, 759, 119]
            ],
            "filename": "images/monster/normal001-crab.png"
        }],
        "attack": [{
            "info": {
                "nbrOfFrames": 2,
                "name": "",
                "type": "animation",
                "framerate": 2,
                "pivotx": 70,
                "pivoty": 55,
                "events": [{
                    name: 'attack_affect',
                    frame: 1
                }]
            },
            "data": [
                [190, 0, 379, 119, 190, 0, 379, 119],
                [570, 0, 759, 119, 570, 0, 759, 119]
            ],
            "filename": "images/monster/normal001-crab.png"
        }],
        "hurted": [{
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
                [0, 0, 189, 119, 0, 0, 189, 119]
            ],
            "filename": "images/monster/normal001-crab.png"
        }],
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
                [0, 0, 189, 119, 0, 0, 189, 119],
                [760, 0, 949, 119, 760, 0, 949, 119],
                [0, 0, 189, 119, 0, 0, 189, 119],
                [760, 0, 949, 119, 760, 0, 949, 119]
            ],
            "filename": "images/monster/normal001-crab.png"
        }]
    },
    "crab_2": {
        "health": 300, //血量
        "damage": 4, //攻击
        "defend": 0, //防御
        "crit": 0, //暴击
        "exp": 300, //打死一只怪物获得的经验值
        'width': 124,
        'height': 74,
        'cooldown': 2000,
        "areadata": {
            standup: [0, 0, 190, 120],
            standdown: [0, 0, 190, 120]
        },
        "damageArea": [0, -45, 100, 30],
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
                    "events": [{
                            name: 'standup',
                            frame: 1
                        }, //第一帧进入时触发
                        {
                            name: 'standdown',
                            frame: 2
                        } //第二帧进入时触发
                    ]
                },
                "data": [
                    [380, 0, 569, 119, 380, 0, 569, 119],
                    [570, 0, 759, 119, 570, 0, 759, 119]
                ],
                "filename": "images/monster/normal004-crab.png"
            }
        ],
        "run": [{
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
                [380, 0, 569, 119, 380, 0, 569, 119],
                [570, 0, 759, 119, 570, 0, 759, 119]
            ],
            "filename": "images/monster/normal004-crab.png"
        }],
        "attack": [{
            "info": {
                "nbrOfFrames": 2,
                "name": "",
                "type": "animation",
                "framerate": 2,
                "pivotx": 70,
                "pivoty": 55,
                "events": [{
                    name: 'attack_affect',
                    frame: 1
                }]
            },
            "data": [
                [190, 0, 379, 119, 190, 0, 379, 119],
                [570, 0, 759, 119, 570, 0, 759, 119]
            ],
            "filename": "images/monster/normal004-crab.png"
        }],
        "hurted": [{
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
                [0, 0, 189, 119, 0, 0, 189, 119]
            ],
            "filename": "images/monster/normal004-crab.png"
        }],
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
                [0, 0, 189, 119, 0, 0, 189, 119],
                [760, 0, 949, 119, 760, 0, 949, 119],
                [0, 0, 189, 119, 0, 0, 189, 119],
                [760, 0, 949, 119, 760, 0, 949, 119]
            ],
            "filename": "images/monster/normal004-crab.png"
        }]
    },
    "crab_3": {
        "health": 300, //血量
        "damage": 4, //攻击
        "defend": 0, //防御
        "crit": 0, //暴击
        "exp": 300, //打死一只怪物获得的经验值
        'width': 124,
        'height': 74,
        'cooldown': 2000,
        "areadata": {
            standup: [0, 0, 190, 120],
            standdown: [0, 0, 190, 120]
        },
        "damageArea": [0, -45, 100, 30],
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
                    "events": [{
                            name: 'standup',
                            frame: 1
                        }, //第一帧进入时触发
                        {
                            name: 'standdown',
                            frame: 2
                        } //第二帧进入时触发
                    ]
                },
                "data": [
                    [380, 0, 569, 119, 380, 0, 569, 119],
                    [570, 0, 759, 119, 570, 0, 759, 119]
                ],
                "filename": "images/monster/normal005-crab.png"
            }
        ],
        "run": [{
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
                [380, 0, 569, 119, 380, 0, 569, 119],
                [570, 0, 759, 119, 570, 0, 759, 119]
            ],
            "filename": "images/monster/normal005-crab.png"
        }],
        "attack": [{
            "info": {
                "nbrOfFrames": 2,
                "name": "",
                "type": "animation",
                "framerate": 2,
                "pivotx": 70,
                "pivoty": 55,
                "events": [{
                    name: 'attack_affect',
                    frame: 1
                }]
            },
            "data": [
                [190, 0, 379, 119, 190, 0, 379, 119],
                [570, 0, 759, 119, 570, 0, 759, 119]
            ],
            "filename": "images/monster/normal005-crab.png"
        }],
        "hurted": [{
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
                [0, 0, 189, 119, 0, 0, 189, 119]
            ],
            "filename": "images/monster/normal005-crab.png"
        }],
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
                [0, 0, 189, 119, 0, 0, 189, 119],
                [760, 0, 949, 119, 760, 0, 949, 119],
                [0, 0, 189, 119, 0, 0, 189, 119],
                [760, 0, 949, 119, 760, 0, 949, 119]
            ],
            "filename": "images/monster/normal005-crab.png"
        }]
    },
    "crab_boss": {
        "health": 1200, //血量
        "damage": 15, //攻击
        "defend": 0, //防御
        "crit": 0, //暴击
        //"drop":['clothes','001',0.05],//掉落类型，掉落id，掉落概率
        "exp": 1200, //打死一只怪物获得的经验值
        "width": 200,
        "height": 100,
        "areadata": {
            standup: [0, 0, 190, 120],
            standdown: [0, 0, 190, 120]
        },
        "damageArea": [100, -45, 200, 30],
        "stand": [{
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
                [592, 0, 887, 206, 592, 0, 887, 206],
                [888, 0, 1183, 206, 888, 0, 1183, 206],
            ],
            "filename": "images/monster/boss-crab.png"
        }],
        "run": [{
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
                [592, 0, 887, 206, 592, 0, 887, 206],
                [888, 0, 1183, 206, 888, 0, 1183, 206],
            ],
            "filename": "images/monster/boss-crab.png"
        }],
        "attack": [{
            "info": {
                "nbrOfFrames": 2,
                "name": "crab_boss",
                "type": "animation",
                "framerate": 2,
                "pivotx": 100,
                "pivoty": 123,
                "events": [{
                    name: 'attack_affect',
                    frame: 1
                }]
            },
            "data": [
                [592, 0, 887, 206, 592, 0, 887, 206],
                [296, 0, 591, 206, 296, 0, 591, 206]
            ],
            "filename": "images/monster/boss-crab.png"
        }],
        "hurted": [{
            "info": {
                "nbrOfFrames": 1,
                "name": "hurted",
                "type": "animation",
                "framerate": 2,
                "pivotx": 100,
                "pivoty": 123,
                "events": []
            },
            "data": [
                [296, 0, 591, 206, 296, 0, 591, 206]
            ],
            "filename": "images/monster/boss-crab.png"
        }],
        "dead": [{
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
                [1184, 0, 1479, 206, 1184, 0, 1479, 206],
                [1480, 0, 1775, 206, 1480, 0, 1775, 206],
                [1184, 0, 1479, 206, 1184, 0, 1479, 206],
                [1480, 0, 1775, 206, 1480, 0, 1775, 206]
            ],
            "filename": "images/monster/boss-crab.png"
        }]
    },
    "rabbit_1": {
        "health": 300, //血量
        "damage": 5, //攻击
        "defend": 0, //防御
        "crit": 0, //暴击
        "exp": 500, //打死一只怪物获得的经验值
        'width': 107,
        'height': 155,
        'cooldown': 2000,
        "areadata": {
            standup: [0, 0, 107, 155],
            standdown: [0, 0, 107, 155]
        },
        "damageArea": [0, -45, 100, 30],
        "stand": [{
            "info": {
                "nbrOfFrames": 2,
                "name": "stand",
                "type": "animation",
                "framerate": 2,
                "pivotx": 79,
                "pivoty": 78,
                "events": []
            },
            "data": [
                [0, 0, 158, 156, 0, 0, 158, 156],
                [159, 0, 317, 156, 159, 0, 317, 156]
            ],
            "filename": "images/monster/normal002-rabbit.png"
        }],
        "run": [{
            "info": {
                "nbrOfFrames": 6,
                "name": "run",
                "type": "animation",
                "framerate": 2,
                "pivotx": 79,
                "pivoty": 78,
                "events": []
            },
            "data": [
                [0, 0, 158, 156, 0, 0, 158, 156],
                [159, 0, 317, 156, 159, 0, 317, 156]
            ],
            "filename": "images/monster/normal002-rabbit.png"
        }],
        "attack": [{
            "info": {
                "nbrOfFrames": 2,
                "name": "attack",
                "type": "animation",
                "framerate": 2,
                "pivotx": 79,
                "pivoty": 78,
                "events": [{
                    name: 'attack_affect',
                    frame: 2
                }]
            },
            "data": [
                [318, 0, 476, 156, 318, 0, 476, 156],
                [477, 0, 635, 156, 477, 0, 635, 156]
            ],
            "filename": "images/monster/normal002-rabbit.png"
        }],
        "hurted": [{
            "info": {
                "nbrOfFrames": 1,
                "name": "hurted",
                "type": "animation",
                "framerate": 4,
                "pivotx": 79,
                "pivoty": 78,
                "events": []
            },
            "data": [
                [636, 0, 794, 156, 636, 0, 794, 156]
            ],
            "filename": "images/monster/normal002-rabbit.png"
        }],
        "dead": [{
            "info": {
                "nbrOfFrames": 4,
                "name": "hurted",
                "type": "animation",
                "framerate": 2,
                "pivotx": 79,
                "pivoty": 78,
                "events": []
            },
            "data": [
                [636, 0, 794, 156, 636, 0, 794, 156],
                [795, 0, 953, 156, 795, 0, 953, 156],
                [636, 0, 794, 156, 636, 0, 794, 156],
                [795, 0, 953, 156, 795, 0, 953, 156]
            ],
            "filename": "images/monster/normal002-rabbit.png"
        }],
    },
    "rabbit_2": {
        "health": 600, //血量
        "damage": 4, //攻击
        "defend": 0, //防御
        "crit": 0, //暴击
        "exp": 450, //打死一只怪物获得的经验值
        'width': 162,
        'height': 166,
        'cooldown': 2000,
        "areadata": {
            standup: [0, 0, 107, 155],
            standdown: [0, 0, 107, 155]
        },
        "damageArea": [0, -45, 100, 30],
        "stand": [{
            "info": {
                "nbrOfFrames": 2,
                "name": "stand",
                "type": "animation",
                "framerate": 4,
                "pivotx": 81,
                "pivoty": 83,
                "events": []
            },
            "data": [
                [0, 0, 161, 165, 0, 0, 161, 165],
                [162, 0, 323, 165, 162, 0, 323, 165],
            ],
            "filename": "images/monster/normal003-rabbit.png"
        }],
        "run": [{
            "info": {
                "nbrOfFrames": 2,
                "name": "run",
                "type": "animation",
                "framerate": 4,
                "pivotx": 81,
                "pivoty": 83,
                "events": []
            },
            "data": [
                [0, 0, 161, 165, 0, 0, 161, 165],
                [162, 0, 323, 165, 162, 0, 323, 165],
            ],
            "filename": "images/monster/normal003-rabbit.png"
        }],
        "attack": [{
            "info": {
                "nbrOfFrames": 3,
                "name": "attack",
                "type": "animation",
                "framerate": 4,
                "pivotx": 81,
                "pivoty": 83,
                "events": [{
                    name: 'attack_affect',
                    frame: 2
                }]
            },
            "data": [
                [324, 0, 485, 165, 324, 0, 485, 165],
                [486, 0, 647, 165, 486, 0, 647, 165],
                [648, 0, 809, 165, 648, 0, 809, 165]
            ],
            "filename": "images/monster/normal003-rabbit.png"
        }],
        "hurted": [{
            "info": {
                "nbrOfFrames": 1,
                "name": "hurted",
                "type": "animation",
                "framerate": 4,
                "pivotx": 81,
                "pivoty": 83,
                "events": []
            },
            "data": [
                [810, 0, 971, 165, 810, 0, 971, 165]
            ],
            "filename": "images/monster/normal003-rabbit.png"
        }],
        "dead": [{
            "info": {
                "nbrOfFrames": 4,
                "name": "hurted",
                "type": "animation",
                "framerate": 4,
                "pivotx": 81,
                "pivoty": 83,
                "events": []
            },
            "data": [
                [810, 0, 971, 165, 810, 0, 971, 165],
                [972, 0, 1133, 165, 972, 0, 1133, 165],
                [810, 0, 971, 165, 810, 0, 971, 165],
                [972, 0, 1133, 165, 972, 0, 1133, 165]
            ],
            "filename": "images/monster/normal003-rabbit.png"
        }]
    }
}
//用于初始化人物的数据
woh.role_init_data = {
    '001': {
        'name': '唐如', //名字
        'type': '001', //类型
        'lv': 0, //等级(根据类型和等级读取其他数据)
        'avatar': './resources/images/map/ava/rio_tang.png', //头像
        'exp': 0, //当前经验值
        'weapon': '001', //武器编号
        'clothes': '001', //衣服编号,none表示裸奔
        'skill_point': 0, //剩余技能点
        'damageArea': [30, -45, 100, 45],
        'skill_list': {
            '001': 1,
            '002': 0,
            '003': 0,
            '004': 0
        }, //技能列表（编号-等级）
        "areadata": {
            standup: [0, 0, 140, 210],
            standdown: [0, 0, 140, 210]
        },
        'width': 100,
        'height': 140
    },
    '002': {
        'name': '程少非', //名字
        'type': '002', //类型
        'lv': 2, //等级
        'avatar': './resources/images/map/ava/shaofei_cheng.png', //头像
        'exp': 1300, //当前经验值
        'weapon': '003', //武器编号
        'clothes': '003', //衣服编号
        'damageArea': [20, -15, 180, 65],
        'force': 90,
        'cooldown': 1000,
        'skill_point': 0,
        'skill_list': {
            '005': 1,
            '006': 1,
            '007': 0,
            '008': 0,
        },
        "areadata": {
            standup: [0, 0, 140, 210],
            standdown: [0, 0, 140, 210]
        },
        'width': 100,
        'height': 140
    },
    '003': {
        'name': '碧青', //名字
        'type': '003', //类型
        'lv': 2, //等级
        'avatar': './resources/images/map/ava/biqing_guo.png', //头像
        'exp': 1300, //当前经验值
        'weapon': '005', //武器编号
        'clothes': '005', //衣服编号
        'skill_point': 0,
        'skill_list': {
            '009': 1,
            '010': 1,
            '011': 0,
            '012': 0
        },
        'width': 100,
        'height': 120
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
woh.item_data = {
    'weapon': {
        '001': {
            'name': '匕首', //名称
            'description': '勉强能够用来防身的便宜货,居家旅行常备的防盗工具。',
            'icon': './resources/images/map/items/w_001.png', //图标路径
            'modal': ['./resources/images/sprites/weapon/001/stand.png', 0, 0, 200, 170], //模型路径
            'health': 0,
            'attack': 5,
            'defend': 3,
            'crit': 0,
            'for': '001',
        },
        '002': {
            'name': '玉殃', //名称
            'description': '美其名曰“玉”，其实不过是打磨得比较光滑的青铜而已。', //描述
            'icon': './resources/images/map/items/w_002.png', //图标路径
            'modal': ['./resources/images/sprites/weapon/002/stand.png', 0, 0, 200, 170], //模型路径
            'health': 10, //血量加成
            'attack': 10, //攻击加成
            'defend': 3, //防御加成
            'crit': 0, //暴击加成
            'for': '001', //适用角色（读取role_data中的数据）
        },
        '003': {
            'name': '龙泉剑',
            'description': '“装饰着金色精美花纹的剑，一看就很贵的样子，至于攻击力，就不得而知了。',
            'icon': './resources/images/map/items/w_003.png',
            'modal': ['./resources/images/sprites/weapon/003/stand.png', 75, 55, 267, 155],
            'health': 0,
            'attack': 10,
            'defend': 3,
            'crit': 0,
            'for': '002',
        },
        '004': {
            'name': '飞渊剑',
            'description': '据说取材于极渊苦寒之地的紫晶，看起来挺像那么回事的。',
            'icon': './resources/images/map/items/w_004.png',
            'modal': ['./resources/images/sprites/weapon/004/stand.png', 75, 55, 267, 155],
            'health': 0,
            'attack': 15,
            'defend': 3,
            'crit': 0,
            'for': '002',
        },
        '005': {
            'name': '阴阳镜',
            'description': '阴阳二气，万物之宗，以之为镜，可窥天地一斑。',
            'icon': './resources/images/map/items/w_005.png',
            'health_addition': 0,
            'attack_addition': 10,
            'defend_addition': 3,
            'crit_addition': 0,
            'for': '003',
        },
        '006': {
            'name': '紫晶珠',
            'description': '紫光流转的珠子,煞是好看,据说具有神秘的力量。',
            'icon': 'images/weapon/icons/001.png',
            'model': 'images/weapon/model/001.png',
            'health_addition': 0,
            'attack_addition': 10,
            'defend_addition': 3,
            'crit_addition': 0,
            'for': '003',
        },
        '007': {
            'name': '十八妹',
            'description': '虽然外表看起来像是一把菜刀,但是其主人坚称它是一柄剑,能够增加一定程度的攻击和防御。',
            'icon': 'images/weapon/icons/001.png',
            'model': 'images/weapon/model/001.png',
            'health_addition': 0,
            'attack_addition': 10,
            'defend_addition': 3,
            'crit_addition': 0,
            'for': '003',
        }
    },
    'clothes': {
        'none': {},
        '001': {
            'name': '百家布衣',
            'description': '各种布料东拼西凑而成的寒酸衣服，穷苦人家的穿着。',
            'icon': './resources/images/map/items/c_001.png',
            'modal': ['resources/images/sprites/clothes/001/001/stand.png', 0, 0, 200, 170],
            'health': 3,
            'attack': 0,
            'defend': 3,
            'crit': 0,
            'for': '001', //适用职业类型
        },
        '002': {
            'name': '云锦深衣',
            'description': '看起来是高级武将使用的样式，但已十分破旧，上有云锦纹路，据说有护持作用。',
            'icon': './resources/images/map/items/c_002.png',
            'modal': ['resources/images/sprites/clothes/001/002/stand.png', 0, 0, 200, 170],
            'health': 5,
            'attack': 0,
            'defend': 3,
            'crit': 0,
            'for': '001',
        },
        '003': {
            'name': '锦袍',
            'description': '富家公子常穿的便服,冬暖夏凉。',
            'icon': './resources/images/map/items/c_003.png',
            'modal': ['resources/images/sprites/clothes/002/003/stand.png', 75, 55, 267, 155],
            'health': 5,
            'attack': 0,
            'defend': 3,
            'crit': 0,
            'for': '002', //适用职业类型
        },
        '004': {
            'name': '蜀锦袍',
            'description': '“犹馀蜀中锦,爱惜比甘棠。”蜀地的锦缎千载驰名,用其制作的袍子自然也价格不菲。',
            'icon': './resources/images/map/items/c_003.png',
            'modal': ['resources/images/sprites/clothes/002/003/stand.png', 75, 55, 267, 155],
            'health': 7,
            'attack': 2,
            'defend': 3,
            'crit': 0,
            'for': '002', //适用角色
        },
        '005': {
            'name': '华彩裙',
            'description': '少女们钟爱的薄绸裙,在阳光下会隐隐泛出五色华彩。',
            'icon': './resources/images/map/items/c_005.png',
            'health': 0,
            'attack': 10,
            'defend': 3,
            'crit': 0,
            'for': '003', //适用角色
        },
        '006': {
            'name': '麟裳',
            'description': '人鱼国最常见的平民装束。',
            'icon': './resources/images/map/items/c_005.png',
            'health': 0,
            'attack': 10,
            'defend': 3,
            'crit': 0,
            'for': '003', //适用角色
        }
    }
}

//技能影响
//直接伤害,回复生命,区域伤害,添加buff
//buff类型：速度类（加减）,防御类（加减）,暴击类（加减）,生命类（加减）
//注：大招均为手势识别施放,每个人的第四个招为大招

//目前唐如的三个技能分别为 单体攻击 治疗 吟唱群体攻击 大招为全屏幕地图炮高伤害攻击 

woh.skill_data = {
    '001': {
        'name': '疾风刺',
        'description': '追求一击必杀的招式,轻灵迅捷,其威力在不同修为者手中截然不同。（冲向对方进行一次攻击）', //技能描述
        'icon': './resources/images/skillicons/001.jpg', //技能图标路径
        'level_limit': [0, 1, 2, 4, 5, 7], //每一阶段的可点等级
        'cd': 15, //CD时间

        //技能影响
        'data': {
            //单体直接伤害，攻击范围等同于武器攻击范围

            'type': 'attackBuff',
            'damage': [30, 60, 90, 120, 150],
            'converter': 'WindStrike'
        }
    },
    '002': {
        'name': '落英染',
        'description': '英华翩舞兮,染景纷纷旧年时。美好的追忆总能治愈人心。（己方全体生命回复）', //技能描述
        'icon': './resources/images/skillicons/002.jpg', //技能图标路径
        'level_limit': [1, 3, 4, 8, 10, 11], //每一阶段的可点等级
        'cd': 15, //CD时间
        //技能影响
        'data': {
            //回复
            'type': 'call',
            'heal': [60, 120, 180, 240, 300],
            'effect': 'FallenFlowers'
        }
    },
    '003': {
        'name': '浮云风卷',
        'description': '飘风自南,泱泱涤尘。凝神静气,荡净浮埃。（以施法者为中心,在半径200的区域内进行群体攻击）', //技能描述
        'icon': './resources/images/skillicons/003.jpg', //技能图标路径
        'level_limit': [3, 4, 6, 9, 11, 12], //每一阶段的可点等级
        'cd': 30, //CD时间
        //技能影响
        'data': {
            'type': 'call',
            'damage': [90, 150, 210, 270, 330],
            'effect': 'CloudInWind'
        }
    },
    '004': {
        'name': '醉舞秋红',
        'description': '日暮秋烟起,萧萧枫树林。寄托壮志未酬哀思的招式,饱含尽除敌寇的怨愤。(敌方全体造成大量伤害)',
        'icon': './resources/images/skillicons/004.jpg', //技能图标路径
        'level_limit': [9, 13, 14, 15, 16, 20], //每一阶段的可点等级
        'cd': 120, //CD时间
        //技能影响
        'data': {
            //区域伤害
            'type': 'call',
            'effect': 'FuryOfFox',
            'damage': [90, 150, 210, 270, 330],
        }
    },
    '005': {
        'name': '灵焰灼',
        'description': '星星之火,可以燎原,一旦燃起,便势不可当。(敌方全体受到伤害)',
        'icon': './resources/images/skillicons/005.jpg', //技能图标路径
        'level_limit': [0, 1, 2, 4, 5, 7], //每一阶段的可点等级
        'cd': 15, //CD时间
        //技能影响
        'data': {
            'type': 'call',
            'damage': [20, 40, 60, 80, 100],
            'effect': 'NetherFlame'
        }
    },
    '006': {
        'name': '心月斩',
        'description': '心月狐,其性属火,喜好游戏人间,祸乱人心。（造成范围伤害,受到伤害者行动封印。）',
        'icon': './resources/images/skillicons/006.jpg', //技能图标路径
        'level_limit': [2, 3, 4, 8, 10, 11], //每一阶段的可点等级
        'cd': 15, //CD时间
        //技能影响
        'data': {
            'type': 'attackBuff',
            'damage': [90, 150, 210, 270, 330],
            'converter': 'WillStrike'
        }
    },
    '007': {
        'name': '天狐之怒',
        'description': '“青丘之山,有兽焉,其状如狐而九尾。”九尾狐出,乃世间将有大乱之象。（全部敌人受到连续伤害）',
        'icon': './resources/images/skillicons/007.jpg', //技能图标路径
        'level_limit': [3, 4, 6, 9, 11, 12], //每一阶段的可点等级
        'cd': 30, //CD时间
        //技能影响
        'data': {
            'type': 'call',
            'effect': 'FuryOfFox',
            'damage': [90, 150, 210, 270, 330],
        }
    },
    '008': {
        'name': '心宿炎障',
        'description': '心宿,又称大火,东方苍龙七宿之心,守心护元,灭障除魔。（全部队友获得5秒免伤状态）',
        'icon': './resources/images/skillicons/008.jpg', //技能图标路径
        'level_limit': [9, 13, 14, 15, 16, 20], //每一阶段的可点等级
        'cd': 60, //CD时间
        //技能影响
        'data': {
            'attack_area': {

            },
            //添加buff
            'buff': {

            }
        }
    },
    '009': {
        'name': '花雨露',
        'description': '花雨润泽,沁人心脾,沐浴者神清气爽。（单体回复体力）',
        'icon': './resources/images/skillicons/009.jpg', //技能图标路径
        'level_limit': [0, 5, 6, 7, 8, 9], //每一阶段的可点等级
        'cd': 15, //CD时间
        //技能影响
        'data': {

        }
    },
    '010': {
        'name': '水月霖',
        'description': '水月之力属幻,堕入幽梦者,如履太虚。（敌方全体受到伤害并进入减速状态）',
        'icon': './resources/images/skillicons/010.png', //技能图标路径
        'level_limit': [0, 5, 6, 7, 8, 9], //每一阶段的可点等级
        'cd': 15, //CD时间
        //技能影响
        'data': {

        }
    },
    '011': {
        'name': '芳华流转',
        'description': '芳华轻笑,千红流转,生机盎然。（全体回复体力）',
        'icon': './resources/images/skillicons/011.png', //技能图标路径
        'level_limit': [0, 5, 6, 7, 8, 9], //每一阶段的可点等级
        'cd': 30, //CD时间
        //技能影响
    },
    '012': {
        'name': '镜泉润物',
        'description': '泉之始,镜之初,润泽万物,生生不息。（全体回复大量体力并解除一切负面状态）',
        'icon': './resources/images/skillicons/012.png', //技能图标路径
        'level_limit': [0, 5, 6, 7, 8, 9], //每一阶段的可点等级
        'cd': 60, //CD时间
        //技能影响
    }
}
//技能效果动画和音效配置
woh.g_config.skill_effect = {
    "normal_1": {
        "sound": "sound/attack.mp3",
        "animation": {
            "info": {
                "nbrOfFrames": 2,
                "name": "stand",
                "type": "animation",
                "framerate": 2,
                "pivotx": 23,
                "pivoty": 80,
                "events": []
            },
            "data": [
                [0, 0, 45, 159, 0, 0, 45, 159],
                [46, 0, 91, 159, 46, 0, 91, 159]
            ],
            "filename": "images/sprites/skilleffect/normal_1.png"
        }
    },
    "001": {
        "sound": "resources/sound/skill_001.mp3",
        "animation": {
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
                [0, 0, 399, 369, 0, 0, 399, 369],
                [400, 0, 799, 369, 400, 0, 799, 369],
                [800, 0, 1199, 369, 800, 0, 1199, 369],
                [1200, 0, 1599, 369, 1200, 0, 1599, 369]
            ],
            "filename": "images/sprites/skilleffect/001.png"
        }
    },
    "002": {
        "sound": "resources/sound/skill_002.mp3",
        "animation": {
            "info": {
                "nbrOfFrames": 4,
                "name": "002",
                "type": "animation",
                "framerate": 4,
                "pivotx": 100,
                "pivoty": 75,
                "events": []
            },
            "data": [
                [0, 0, 139, 184, 0, 0, 139, 184],
                [140, 0, 279, 184, 140, 0, 279, 184],
                [280, 0, 419, 184, 280, 0, 419, 184],
                [420, 0, 559, 184, 420, 0, 559, 184]
            ],
            "filename": "images/sprites/skilleffect/002.png"
        }
    },
    "003": {
        "sound": "resources/sound/skill_003.mp3",
        "animation": {
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
                [0, 0, 299, 299, 0, 0, 299, 299],
                [300, 0, 599, 299, 300, 0, 599, 299],
                [600, 0, 899, 299, 600, 0, 899, 299],
                [900, 0, 1199, 299, 900, 0, 1199, 299]
            ],
            "filename": "images/sprites/skilleffect/003.png"
        }
    },
    "004": {
        "sound": "resources/sound/skill_004.mp3",
        "animation": {
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
                [0, 0, 130, 299, 0, 0, 130, 299],
                [131, 0, 261, 299, 131, 0, 261, 299],
                [262, 0, 392, 299, 262, 0, 392, 299],
                [393, 0, 523, 299, 393, 0, 523, 299],
                [524, 0, 654, 299, 524, 0, 654, 299],
                [655, 0, 785, 299, 655, 0, 785, 299],
                [786, 0, 916, 299, 786, 0, 916, 299],
                [917, 0, 1047, 299, 917, 0, 1047, 299]
            ],
            "filename": "images/sprites/skilleffect/004.png"
        }
    },
    "005": {
        "sound": "resources/sound/skill_005.mp3",
        "animation": {
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
                [0, 0, 341, 339, 0, 0, 341, 339],
                [342, 0, 683, 339, 342, 0, 683, 339],
                [684, 0, 1025, 339, 684, 0, 1025, 339]
            ],
            "filename": "images/sprites/skilleffect/005.png"
        }
    },
    "006": {
        "sound": "resources/sound/skill_006.mp3",
        "animation": {
            "info": {
                "nbrOfFrames": 3,
                "name": "stand",
                "type": "animation",
                "framerate": 2,
                "pivotx": 171,
                "pivoty": 130,
                "events": []
            },
            "data": [
                [342, 0, 683, 209, 342, 0, 683, 209],
                [684, 0, 1025, 209, 684, 0, 1025, 209],
                [0, 0, 341, 209, 0, 0, 341, 209],
            ],
            "filename": "images/sprites/skilleffect/006.png"
        }
    },
    "007": {
        "sound": "resources/sound/skill_007.mp3",
        "animation": {
            "info": {
                "nbrOfFrames": 3,
                "name": "stand",
                "type": "animation",
                "framerate": 3,
                "pivotx": 171,
                "pivoty": 170,
                "events": []
            },
            "data": [
                [0, 0, 341, 339, 0, 0, 341, 339],
                [342, 0, 683, 339, 342, 0, 683, 339],
                [684, 0, 1025, 339, 684, 0, 1025, 339]
            ],
            "filename": "images/sprites/skilleffect/007.png"
        }
    },
    "008": {
        "sound": "resources/sound/skill_008.mp3",
        "animation": {
            "info": {
                "nbrOfFrames": 3,
                "name": "stand",
                "type": "animation",
                "framerate": 3,
                "pivotx": 171,
                "pivoty": 170,
                "events": []
            },
            "data": [
                [0, 0, 341, 339, 0, 0, 341, 339],
                [342, 0, 683, 339, 342, 0, 683, 339],
                [684, 0, 1025, 339, 684, 0, 1025, 339]
            ],
            "filename": "images/sprites/skilleffect/008.png"
        }
    }
}

//console.log(role_data);
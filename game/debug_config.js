debug_config = {
    fps: {
        description: 'fps',
        id: 'id-fps',
        value: 30,
        max: 60,
        min: 1,
    },

    player_bullet_speed: {
        description: '英雄子弹速度',
        id: 'id-player-bullet-speed',
        value: 5,
        max: 20,
        min: 1,
    },

    enemy_bullet_speed: {
        description: '敌人子弹速度',
        id: 'id-enemy-bullet-speed',
        value: -5,
        max: -1,
        min: -20,
    },

    player_cooldown: {
        description: '英雄子弹冷却时间',
        id: 'id-player-bullet-cooldown-time',
        value: 5,
        max: 20,
        min: 1,
    },

    enemy_cooldown: {
        description: '敌人弹冷却时间',
        id: 'id-enemy-bullet-cooldown-time',
        value: 60,
        max: 100,
        min: 30,
    },

    cloud_speed: {
        description: '云移动速度',
        id: 'id-cloud-speed',
        value: 5,
        max: 10,
        min: 1,
    },

}

class Bullet extends Sprite {
    // constructor
    constructor(status, game) {
        super(status, game)
        this.setup()
    }

    setup() {
        this.speed = 5
    }

    move() {
        this.y -= this.speed
    }

    debug() {
        if (this.game.debugMode) {
            if (this.name === 'player_bullet') {
                this.speed = debug_config['player_bullet_speed']['value']
            }
        }
    }

    update() {
        super.update()
        this.debug()
        this.move()
        if (this.y < -100) {
            this.die = true
        }
    }

}
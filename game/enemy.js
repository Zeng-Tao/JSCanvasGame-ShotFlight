class Enemy extends Sprite {
    // constructor
    constructor(status, game) {
        super(status, game)
        this.speed = 5
        this.cooldown = randomIntBetween(40, 60)
        this.setup()
    }

    fire() {
        // 生产子弹
        if (this.cooldown < 0) {
            let stauts = {
                y: (this.y + this.height - 20),
                name: 'enemy_bullet',
            }
            let b = new Bullet(stauts, this.game)
            let x = this.x + this.width / 2 - b.width / 2
            b.x = x
            this.game.addSprites(b)
            if (this.game.debugMode) {
                this.cooldown = debug_config['enemy_cooldown']['value']
            } else {
                this.cooldown = randomIntBetween(40, 60)
            }
        }
    }

    move() {
        this.y += this.speed
        if (this.y > this.game.height + 100) {
            this.die = true
        }
    }

    setup() {
        this.x = randomIntBetween(1, this.game.width - this.width - 100)
        this.y = randomIntBetween(-10, -50)
        this.speed = randomIntBetween(1, 5)
        this.cooldown = randomIntBetween(3, 8)
    }

    update() {
        super.update()
        this.move()
        this.fire()
        this.cooldown -= 1
    }

}
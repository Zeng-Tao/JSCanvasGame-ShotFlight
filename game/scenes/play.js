class Play extends Scene {
    // constructor
    constructor(name, game) {
        super(name, game)
        this.score = 0
    }

    setup() {
        // setup 在 TaoGame 绑定 scene 时执行
        this.sky = this.addSky()
        this.cloudes = this.addClouds()
        this.player = this.addPlayer()
        this.enemies = this.addEnemies()
        // 注册场景按键事件
        // this.registerEvents()
    }

    addSky() {
        let status = {
            name: 'sky',
        }
        let sky = new Sky(status, this.game)
        this.game.addSprites(sky)
        return sky
    }

    addPlayer() {
        let status = {
            name: 'player',
        }
        let player = new Player(status, this.game)
        let x = (this.game.canvas.width + player.width) / 2
        let y = this.game.canvas.height - player.height - 50
        player.x = x
        player.y = y
        this.game.addSprites(player)
        return player
    }

    addClouds(count = 2) {
        let clouds = []
        let status = {
            name: 'cloud',
        }
        for (let i = 0; i < count; i++) {
            let cloud = new Cloud(status, this.game)
            this.game.addSprites(cloud)
            clouds.push(cloud)    
        }
        return clouds
    }

    addEnemies(number = 5) {
        let enemies = this.enemies || []
        // log('enemies, ', enemies)
        number = number - enemies.length
        for (let i = 0; i < number; i++) {
            let no = randomIntBetween(0, 4)
            let status = {
                name: `enemy${no}`,
            }    
            let e = new Enemy(status, this.game)
            this.game.addSprites(e)
            enemies.push(e)    
        }
        return enemies
    }

    registerEvents() {
        this.game.registerEvent('Escape', () => {
            this.backToHome()
        })
    }

    draw() {
        super.draw()
        // draw score
        this.game.drawText(this.score, 10, this.game.height - 10, 24)
    }

    update() {
        super.update()
        let enemies = this.enemies
        enemies.forEach((e, index)=> {
            if (e.die) {
                enemies.splice(index, 1)
            }
        })
        this.enemies = enemies
        this.addEnemies()
    }

    backToHome() {
        let s = new Home('home', this.game)
        this.game.isReload = false
        this.game.runWithScene(s)
    }

}
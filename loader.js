function loader(){
    loadSprite('mark', './assets/sprites/mark.png', {
        sliceX: Math.floor(6),
        sliceY: Math.floor(7),
        anims: {
            idle: {from: 8, to: 9, speed: 2, loop: true,},
            walking: {from: 20, to: 28, speed: 14, loop: true,},
        }
    })
    loadSprite('grass1', './assets/sprites/grass1.png')
    loadSprite('grass2', './assets/sprites/grass2.png')
    loadSprite('grass3', './assets/sprites/grass3.png')
    loadSprite('tree1', './assets/sprites/trees1.png')
    loadSprite('tree2', './assets/sprites/trees2.png')
}

export default loader;
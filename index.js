const canvas = document.querySelector('canvas')

canvas.width = window.innerWidth - 200
canvas.height = window.innerHeight - 20 

window.addEventListener('resize', () => {
    canvas.width = innerWidth
    canvas.height = innerHeight

    init()
})

const context = canvas.getContext('2d')

function getDistance(x1 ,y1, x2, y2){
    let xDistance = x2 - x1
    let yDistance = y2 - y1

    return Math.sqrt(Math.pow(xDistance, 2) + Math.pow(yDistance, 2))
}

function getSquareCenter(x1, y1, width, height){
    return ({
        cx: x1 + width/2, 
        cy: y1 + height/2
    })
}
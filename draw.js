let snake
let food
function init(){
    snake = new Snake()
    food = new Food()
}

function animate(){
    requestAnimationFrame(animate)
    context.clearRect(0, 0, innerWidth, innerHeight)

    context.font = "32px monospace"
    context.fillStyle = "yellow"
    context.fillText(`SCORE: ${snake.score}`, 20, 50)

    food.generate()
    snake.update()

    if(snake.eat(food)){
        food.update()
    }
}

window.addEventListener('keydown', (event) => {
    snake.changeDirection(event.key)
})

init()
animate()
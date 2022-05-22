let snake
let food
let running

function init(){
    running = 1
    snake = new Snake()
    food = new Food()
}

function animate(){
    requestAnimationFrame(animate)
    if(running === 1){
        context.clearRect(0, 0, innerWidth, innerHeight)
        
        context.font = "32px monospace"
        context.fillStyle = "yellow"
        context.fillText(`SCORE: ${snake.score}`, 20, 50)
        
        food.generate()
        snake.update()
        let scoreText = `SCORE: ${snake.score}`
        if(snake.checkCollidedWithSelf()){
            context.font = "32px monospace"
            context.fillStyle = "yellow"
            context.fillText(scoreText, canvas.width/2 - scoreText.length*10, canvas.height/2)
            running = 0
        }
        
        if(snake.eat(food)){
            food.update()
        }
    }
}

window.addEventListener('keydown', (event) => {
    snake.changeDirection(event.key)
})

window.addEventListener('click', () =>{
    if(running === 0){
        init()
    }
})

init()
animate()
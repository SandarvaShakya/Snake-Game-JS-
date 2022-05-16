class Snake{
    constructor(){
        this.x = canvas.width / 2
        this.y = canvas.height / 2

        this.dx = 5
        this.dy = 0

        this.length = 30
        this.height = 30

        this.direction = 'LEFT'
        this.movingAxis = 'X'

        this.totalFoodEaten = 0
        this.score = 0
        this.body = []
    }

    draw(){
        context.fillStyle = 'rgba(0, 68, 0, 1)'

        let tempLength
        let tempHeight

        if(this.movingAxis === 'X'){
            tempLength = this.length
            tempHeight = this.height 
        }
        
        if(this.movingAxis === 'Y'){
            tempLength = this.height
            tempHeight = this.length 
        }

        for(let i = 0; i <= this.body.length - 1; i++){
            context.fillRect(this.body[i].x, this.body[i].y, tempLength, tempHeight)
        }
    }

    update(){
        for(let i = 0; i < this.body.length - 1; i++){
            this.body[i] = this.body[i+1]
        }

        this.body[this.totalFoodEaten] = {
            x: this.x,
            y: this.y
        }

        if(this.x > canvas.width){
            this.x = 0
        }
        
        if(this.x < 0){
            this.x = canvas.width
        }
        
        if(this.y > canvas.height){
            this.y = 0
        } 
        
        if(this.y < 0){
            this.y = canvas.height
        }

        this.x += this.dx
        this.y += this.dy
        this.draw()
    }

    changeDirection(direction){
        if(direction === 'ArrowUp' && this.direction != 'DOWN'){
            this.dx = 0
            this.dy = -5
            this.direction = 'UP'
            this.movingAxis = 'Y'
        }

        if(direction === 'ArrowDown' && this.direction != 'UP'){
            this.dx = 0
            this.dy = 5
            this.direction = 'DOWN'
            this.movingAxis = 'Y'
        }

        if(direction === 'ArrowLeft' && this.direction != 'RIGHT'){
            this.dx = -5
            this.dy = 0
            this.direction = 'LEFT'
            this.movingAxis = 'X'
        }

        if(direction === 'ArrowRight' && this.direction != 'LEFT'){
            this.dx = 5
            this.dy = 0
            this.direction = 'RIGHT'
            this.movingAxis = 'X'
        }
    }

    eat(food){
        let snakeHeadCenter = getSquareCenter(this.x, this.y, this.length, this.height)
        let distance = Math.floor(getDistance(snakeHeadCenter.cx, snakeHeadCenter.cy, food.x, food.y))
        
        if(this.length/2 + food.radius > distance){
            this.totalFoodEaten += 1
            this.score += 5
            return true
        }
        return false
    }
}
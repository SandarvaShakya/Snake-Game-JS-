class Food{
    constructor(){
        this.radius = 8
        this.x = Math.floor(Math.random() * (canvas.width - this.radius))
        this.y = Math.floor(Math.random() * (canvas.height - this.radius))
    }

    generate(){
        context.beginPath()
        context.arc(this.x, this.y, this.radius, 0, Math.PI * 2)
        context.fillStyle = 'rgba(255, 177, 0, 1)'
        context.fill()

        // let food = new Image()
        // food.src = './coin.png'
        // context.drawImage(food, this.x, this.y, 16, 16)
    }

    update(){
        this.x = Math.floor(Math.random() * (canvas.width - this.radius))
        this.y = Math.floor(Math.random() * (canvas.height - this.radius))
        this.generate()
    }
}
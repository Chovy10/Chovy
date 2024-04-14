var canvas = document.getElementById("GameScreenCanvas");
var ctx = canvas.getContext("2d");

var colors = ["#C7C5FF", "black", "blue", "magenta", "pink", "cyan", "orange"]; 

class HeartObject {
    constructor() {
        this.color = colors[Math.floor(Math.random() * colors.length)];
        this.size = Math.random() * 30 + 10; 
        this.speed = Math.random() * 2 + 1; 
        this.rotationSpeed = Math.random() * 0.1 - 0.05; 
        this.directionX = Math.random() > 0.5 ? 1 : -1; 
        this.directionY = Math.random() > 0.5 ? 1 : -1; 
        this.positionX = canvas.width / 2; 
        this.positionY = canvas.height / 2;  
    }

    draw() {
        ctx.save();
        ctx.translate(this.positionX, this.positionY);
        ctx.rotate(Math.PI / 180 * this.rotationSpeed);

        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.moveTo(0, -this.size * 0.7);
        ctx.bezierCurveTo(this.size * 0.5, -this.size, this.size, -this.size * 0.5, 0, this.size); 
        ctx.bezierCurveTo(-this.size, -this.size * 0.5, -this.size * 0.5, -this.size, 0, -this.size * 0.7); 
        ctx.fill();

        

        ctx.restore();
    }

    update() {
        this.positionX += this.directionX * this.speed;
        this.positionY += this.directionY * this.speed;
        this.rotationSpeed += this.rotationSpeed;
    }
}

var hearts = [];

function render() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (var i = 0; i < hearts.length; i++) {
        hearts[i].update();
        hearts[i].draw();
    }

    if (hearts.length < 100 && Math.random() < 0.02) {
        hearts.push(new HeartObject());
    }

    requestAnimationFrame(render);
}

canvas.addEventListener('mousemove', function(event) {
    canvas.style.cursor = 'none';
    for (var i = 0; i < hearts.length; i++) {
        hearts[i].positionX += (event.clientX - canvas.getBoundingClientRect().left - hearts[i].positionX) * 0.05;
        hearts[i].positionY += (event.clientY - canvas.getBoundingClientRect().top - hearts[i].positionY) * 0.05;
    }
});

render();
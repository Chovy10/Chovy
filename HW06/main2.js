var canvas = document.getElementById("GameScreenCanvas");
var ctx = canvas.getContext("2d");

var colors = ["#C7C5FF", "black", "blue", "magenta", "pink", "cyan", "orange"]; 


class HeartObject {
    constructor(colorIndex, size, speed, rotationSpeed, direction) {
        this.color = colors[colorIndex]; // 랜덤한 색상 선택
        this.size = size; // 크기
        this.speed = speed; // 이동 속도
        this.rotationSpeed = rotationSpeed; // 회전 속도
        this.direction = direction; // 이동 방향
        this.positionX = canvas.width / 2; // 초기 X 위치 (캔버스 중앙)
        this.positionY = canvas.height / 2; // 초기 Y 위치 (캔버스 중앙)
    }

    draw() {
        ctx.save();
        ctx.translate(this.positionX, this.positionY);
        ctx.rotate((Math.PI / 180) * this.rotationSpeed); // 회전 속도에 따라 회전
        ctx.fillStyle = this.color;

        // 하트 그리기
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.bezierCurveTo(75, 37, 75, 75, 0, 112.5);
        ctx.bezierCurveTo(-75, 75, -75, 37, 0, 0);
        ctx.fill();
        ctx.closePath();

        ctx.restore();
    }

    update() {
        // 이동
        this.positionX += this.speed * this.direction.x;
        this.positionY += this.speed * this.direction.y;

        // 캔버스 밖으로 나가면 반대쪽으로 이동하도록 처리
        if (this.positionX > canvas.width + 50 || this.positionX < -50) {
            this.direction.x = -this.direction.x;
        }
        if (this.positionY > canvas.height + 50 || this.positionY < -50) {
            this.direction.y = -this.direction.y;
        }
    }
}

// 하트 오브젝트를 담을 배열
var hearts = [];

function createHeart() {
    // 랜덤한 속성으로 하트 생성
    var heart = new HeartObject(
        Math.floor(Math.random() * colors.length), // 랜덤한 색상
        Math.random() * 20 + 10, // 랜덤한 크기 (10에서 30까지)
        Math.random() * 2 + 1, // 랜덤한 이동 속도 (1에서 3까지)
        Math.random() * 4 - 2, // 랜덤한 회전 속도 (-2에서 2까지)
        { x: Math.random() * 2 - 1, y: Math.random() * 2 - 1 } // 랜덤한 이동 방향
    );
    hearts.push(heart);
}

function render() {
    // 화면 지우기
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // 새로운 하트 생성
    createHeart();

    // 생성된 하트들을 업데이트하고 그리기
    for (var i = 0; i < hearts.length; i++) {
        hearts[i].update();
        hearts[i].draw();
    }

    // 0.2초마다 render 함수 호출
    setTimeout(render, 200);
}

// 초기 렌더링 시작
render();
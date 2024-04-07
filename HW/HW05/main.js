var canvas = document.getElementById("GameScreenCanvas");
var ctx = canvas.getContext("2d");


var rotTaeYang = 0; // 태양의 회전 
var rotEarthTaeYangCentered = 0; //  지구가 태양 중점으로 회전
var rotEarth = 0; // 지구의 회전 
var rotMoon = 0; // 달의 회전 
var rotMoonEarthCentered = 0; // 달이 지구를 중점으로 회전


draw();

function draw() {
    // Canvas 초기화
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // 태양의 회전
    rotTaeYang += Math.PI / 100;

    //지구가 태양 중점 회전
    rotEarthTaeYangCentered += Math.PI / 200;

    // 지구의 회전
    rotEarth += Math.PI / 150;

    // 달이 지구를 중점으로 회전
    rotMoonEarthCentered += Math.PI / 100;

    // 달의 회전
    rotMoon += Math.PI / 80;

    // 태양 
    ctx.save();
    ctx.translate(canvas.width / 2, canvas.height / 2);
    ctx.rotate(rotTaeYang);
    ctx.fillStyle = "orange";
    ctx.fillRect(-50, -50, 100, 100);
    ctx.restore();

    // 지구 
    ctx.save();
    ctx.translate(canvas.width / 2, canvas.height / 2);
    ctx.rotate(rotEarthTaeYangCentered); 
    ctx.translate(150, 0); 
    ctx.rotate(rotEarth); 
    ctx.fillStyle = "blue";
    ctx.fillRect(-25, -25, 50, 50);
    ctx.restore();

    // 달 
    ctx.save();
    ctx.translate(canvas.width / 2, canvas.height / 2);
    ctx.rotate(rotEarthTaeYangCentered); 
    ctx.translate(150, 0); 
    ctx.rotate(rotEarth); 
    ctx.translate(100, 0); 
    ctx.rotate(rotMoonEarthCentered); 
    ctx.rotate(rotMoon); 
    ctx.fillStyle = "yellow";
    ctx.fillRect(-15, -15, 30, 30);
    ctx.restore();

  
    requestAnimationFrame(draw);
}
var canvas = document.getElementById("myCanvas");
var context = canvas.getContext("2d");
var ballX = canvas.width/2;
var ballY = canvas.height-30;
var dx = 2;
var dy = -2;
var ballRadius = 10;

setInterval(loop, 6);

function loop() {
  update();
  draw();
}

function update() {
  // bounce
  if (ballX - ballRadius < 0 || ballX + ballRadius > canvas.width) {
    dx = -dx;
  } if (ballY - ballRadius < 0 || ballY + ballRadius > canvas.height) {
    dy = -dy;
  }

  // move
  ballX += dx;
  ballY += dy;
}

function draw() {
  context.clearRect(0, 0, canvas.width, canvas.height);
  drawBall(ballX, ballY, ballRadius);
}

function drawBall(x, y, radius) {
  context.beginPath();
  context.arc(x, y, radius, 0, 2 * Math.PI);
  context.fillStyle = "#0095DD";
  context.fill();
  context.closePath();
}

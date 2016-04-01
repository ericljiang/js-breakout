var canvas = document.getElementById("myCanvas");
var context = canvas.getContext("2d");
var word = "hello";

class Ball {
  constructor() {
    this.x = canvas.width / 2;
    this.y = canvas.height - 30;
    this.dx = 2;
    this.dy = -2;
    this.radius = 10;
  }

  update() {
    this.x += this.dx;
    this.y += this.dy;
    if (this.x - this.radius < 0 || this.x + this.radius > canvas.width) {
      this.dx = -this.dx;
    }
    if (this.y - this.radius < 0) {
      this.dy = -this.dy;
    }
  }

  collideWith(p) {
    if (this.x >= p.x - p.width / 2 && this.x <= p.x + p.width / 2 && this.y + this.radius > canvas.height - p.height) {
      this.dy = -this.dy;
    }
  }

  draw() {
    context.beginPath();
    context.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
    context.fillStyle = "#0095DD";
    context.fill();
    context.closePath();
  }
}

class Paddle {
  constructor() {
    this.width = 50;
    this.height = 10;
    this.x = canvas.width / 2;
    this.y = 0;
    this.leftPressed = false;
    this.rightPressed = false;
    this.speed = 4;
  }

  update() {
    if (this.leftPressed) {
      this.x -= this.speed;
    }
    if (this.rightPressed) {
      this.x += this.speed;
    }
  }

  draw() {
    context.beginPath();
    context.rect(this.x - this.width / 2, canvas.height - this.height, this.width, this.height);
    context.fillStyle = "#0095DD";
    context.fill();
    context.closePath();
  }

  handleKeyDown(e) {
    if (e.keyCode == 39) {
        this.rightPressed = true;
    } else if (e.keyCode == 37) {
        this.leftPressed = true;
    }
  }

  handleKeyUp(e) {
    if (e.keyCode == 39) {
        this.rightPressed = false;
    } else if (e.keyCode == 37) {
        this.leftPressed = false;
    }
  }
}

ball = new Ball();
paddle = new Paddle();

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

function keyDownHandler(e) {
  paddle.handleKeyDown(e);
}

function keyUpHandler(e) {
  paddle.handleKeyUp(e);
}

setInterval(loop, 6);

function loop() {
  update();
  draw();
}

function update() {
  ball.update();
  paddle.update();
  ball.collideWith(paddle);
}

function draw() {
  context.clearRect(0, 0, canvas.width, canvas.height);
  ball.draw();
  paddle.draw();
}

console.log("loaded v1.0");

// variaveis
let x, y, snakePosition, direction, newSnake;
// criar grid
// 400x400 cada square terá 20x20

// setup array objeto snake

snakePosition = [
  { x: 20, y: 20 },
  { x: 40, y: 20 },
];
x = 20;
y = 20;
direction = "RIGHT";

// carregar o canvas
let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");

//criar o objeto snake

class Snake {
  constructor(snakePosition, x, y, direction) {
    this.snakePosition = snakePosition;
    this.x = x;
    this.y = y;
    this.direction = direction;
  }
  init() {
    this.draw();
    this.walK();
  }
  draw() {
    snakePosition.map((pos) => {
      ctx.fillRect(pos.x, pos.y, x, y);
    });
  }
  //shift and push
  walK() {
    //create newPosition
    let newDirection = {
      x: 0,
      y: 0,
    };
    if (direction === "RIGHT") {
      newDirection.x = 20;
      newDirection.y = 0;
    } else if (direction === "LEFT") {
      newDirection.x = -20;
      newDirection.y = 0;
    } else if (direction === "UP") {
      newDirection.x = 0;
      newDirection.y = -20;
    } else if (direction === "DOWN") {
      newDirection.x = 0;
      newDirection.y = 20;
    }
    let newPos = {
      x: snakePosition[snakePosition.length - 1].x + newDirection.x,
      y: snakePosition[snakePosition.length - 1].y + newDirection.y,
    };

    snakePosition.shift(); //remove the first element
    snakePosition.push(newPos);
  }
}

newSnake = new Snake(snakePosition, x, y, direction);

// criar o objeto comida

// modificar direcoes a partir de acoes do teclado

// funcao para atualizar requestKeyFrame

function init() {
  newSnake.init();
}
setInterval(() => {
  ctx.clearRect(x, y, 400, 400);
  init();
}, 3000);
init();

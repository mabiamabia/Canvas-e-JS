console.log("loaded v1.0");

// criar grid
// 400x400 cada square terá 20x20
let x, y;
x = 20;
y = 20;

// setup array objeto snake
let snakePosition = [
  { x: 80, y: 80 },
  { x: 100, y: 80 },
  { x: 120, y: 100 },
  { x: 140, y: 100 },
];

// carregar o canvas
let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");

//criar o objeto snake

class Snake {
  constructor(snakePosition) {
    this.snakePosition = snakePosition;
  }
  draw() {
    snakePosition.map((pos) => {
      ctx.fillRect(pos.x, pos.y, x, y);
    });
  }
}

let newSnake = new Snake(snakePosition, x, y);
newSnake.draw();
// criar o objeto comida

// modificar direcoes a partir de acoes do teclado

// funcao para atualizar requestKeyFrame

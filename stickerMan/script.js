let canvas = document.getElementById("stickMan");
let context = canvas.getContext("2d");

let cor = "#000";

canvas.width = 400;
canvas.heigth = 300;

context.fillStyle = cor; //preenchimento
context.strokeStyle = cor; //cor da linha

context.lineWidth = 5;

context.beginPath();

context.arc(200, 50, 20, 0, Math.PI * 2);

context.fill();


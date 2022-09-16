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

context.beginPath();
context.moveTo(200, 80);
context.lineTo(200, 180);
context.stroke();

context.beginPath();
context.moveTo(200, 80);
context.lineTo(150, 130);
context.stroke();

context.beginPath();
context.moveTo(200, 80);
context.lineTo(250, 130);
context.stroke();

let canvas = document.getElementById("canvas");
let context = canvas.getContext("2d");

context.lineWidth = 10
context.strokeStyle = "red"
context.beginPath();
context.moveTo(0, 0);
context.lineTo(400, 200);
context.moveTo(0, 150);
context.lineTo(300, 0);
context.stroke() // numbers are so random??

context.fillStyle = "green"
context.fillRect(125, 0, 50, 25);

let x = 150;
let y = 125;
context.lineWidth = 2
context.strokeStyle = "green"
context.moveTo(x, y);
context.arc(x, y, 20, 0, 2*Math.PI);
context.stroke();
context.fill()


context.font = "30px MV Boli";
context.fillStyle = "black";
context.textAlign = "center"
context.fillText("YAY SHAPES!!!", canvas.width/2, canvas.height/2 + 10)

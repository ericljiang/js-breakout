var canvas = document.getElementById("myCanvas");
var context = canvas.getContext("2d");

context.beginPath();
context.rect(20, 40, 50, 50);
context.fillStyle = "#FF0000";
context.fill();
context.closePath();

context.beginPath();
context.arc(240, 160, 20, 93, Math.PI*2, false);
context.fillStyle = "green";
context.strokeStyle = "rgba(0, 200, 0, 0.5)";
context.stroke();
context.closePath();

context.beginPath();
context.rect(160, 10, 100, 40);
context.strokeStyle = "rgba(0, 0, 255, 0.5)";
context.stroke();
context.closePath();

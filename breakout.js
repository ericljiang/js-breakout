var canvas = document.getElementById("myCanvas");
var context = canvas.getContext("2d");

context.beginPath();
context.rect(20, 40, 50, 50);
context.fillStyle = "#FF0000";
context.fill();
context.endPath();

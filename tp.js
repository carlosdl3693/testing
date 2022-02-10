function ajaxex()
{
var canvas = document.body.appendChild(document.createElement("canvas"));
var ctx = canvas.getContext("2d");

ctx.beginPath();
ctx.arc(canvas.width / 2, canvas.height / 2, 50, 0, Math.PI * 2);
ctx.fillStyle = "red";
ctx.strokeStyle = "black";
ctx.stroke();
ctx.fill();
}
ajaxex();

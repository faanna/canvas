const canvas = document.querySelector('#myCanvas');
const canvas_context = canvas.getContext('2d');

// canvas_context.beginPath();
// canvas_context.arc(100, 100, 50, 0, 2 * Math.PI);
// canvas_context.fillStyle = 'red';
// canvas_context.fill();

// canvas_context.beginPath();
// canvas_context.fillStyle = 'blue';
// canvas_context.fillRect(20, 20, 100, 50);
// canvas_context.fill();

canvas_context.beginPath();
canvas_context.moveTo(100, 300);
canvas_context.lineTo(100, 300);
canvas_context.lineTo(150, 350);
canvas_context.lineTo(100, 400);
canvas_context.lineTo(50, 350);
canvas_context.closePath();
canvas_context.fillStyle = 'aqua';
canvas_context.lineWidth = 3;
canvas_context.stroke();
canvas_context.fill();

canvas_context.beginPath();
canvas_context.moveTo(300, 300);
canvas_context.lineTo(330, 370);
canvas_context.lineTo(260, 330);
canvas_context.lineTo(340, 330);
canvas_context.lineTo(270, 370);
canvas_context.closePath();
canvas_context.fillStyle = 'yellow';
canvas_context.strokeStyle = 'gold';
canvas_context.lineWidth = 3;
canvas_context.stroke();
canvas_context.fill();

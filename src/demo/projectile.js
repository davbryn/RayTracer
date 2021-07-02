import Tuple from '../maths/tuple.js';

let start = 0;
const canvas = document.getElementById('myCanvas');
let ctx = canvas.getContext('2d')

let position = Tuple.point(200, 200, 0);
let velocity = Tuple.vector(1.0, -5, 0);
let gravity = Tuple.vector(0.0, 0.2, 0);
let wind = Tuple.vector(0.1, 0.0, 0);

function drawCircle(ctx, x, y, radius, fill, stroke, strokeWidth) {
    ctx.beginPath()
    ctx.arc(x, y, radius, 0, 2 * Math.PI, false)
    if (fill) {
      ctx.fillStyle = fill
      ctx.fill()
    }
    if (stroke) {
      ctx.lineWidth = strokeWidth
      ctx.strokeStyle = stroke
      ctx.stroke()
    }
  }



function tick() {
    // Clear canvas
    
    velocity = velocity.add(gravity).add(wind);
    position = position.add(velocity);
    if ((position.x > 1000) || (position.x < 0)) {
        velocity.x = -velocity.x;
    }
    if ((position.y > 1000) || (position.y < 0)) {
        velocity.y = -velocity.y;
    }
    //ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawCircle(ctx, position.x, position.y, 5, 'black', 'red', 2)

}

export default function animate(timestamp) { 
    const elapsed = timestamp - start;
    if (elapsed > 0) {
      start = timestamp;
      tick();
    }
    requestAnimationFrame(animate); 
}


animate(0);



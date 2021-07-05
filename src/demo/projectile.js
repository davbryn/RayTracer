import Tuple from '../maths/tuple.js';
import Matrix from '../maths/matrix.js';
import Canvas from '../canvas.js';
import Color from '../color.js';



var frameCount = 0;
var fps, fpsInterval, startTime, now, then, elapsed;




let start = 0;
const canvas = document.getElementById('myCanvas');
let ctx = canvas.getContext('2d')


let c = new Canvas(1000,1000);


let position = Tuple.point(200, 200, 0);
let velocity = Tuple.vector(2.0, -5, 0);
let gravity = Tuple.vector(0.0, 0.2, 0);
let wind = Tuple.vector(0.2, 0.0, 0);

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
    //drawCircle(ctx, position.x, position.y, 100 * position.normalize().x, 'black', 'red', 2 * position.normalize().x)

    c.writePixel( position.x, position.y,new Color(255,0,255));

    c.renderToCanvas('myCanvas');

}

function animate(timestamp) { 

        // request another frame

    requestAnimationFrame(animate);

    // calc elapsed time since last loop

    now = Date.now();
    elapsed = now - then;

    // if enough time has elapsed, draw the next frame

    if (elapsed > fpsInterval) {

        // Get ready for next frame by setting then=now, but also adjust for your
        // specified fpsInterval not being a multiple of RAF's interval (16.7ms)
        then = now - (elapsed % fpsInterval);

        // Put your drawing code here
        tick();
    }
}



function startAnimating(fps) {
    fpsInterval = 1000 / fps;
    then = Date.now();
    startTime = then;
    animate();
}

startAnimating(60);

let matrix = new Matrix(4, 4);
matrix.log();
matrix = new Matrix(2, 2);
matrix.log();
matrix = new Matrix(3, 3);
matrix.log();



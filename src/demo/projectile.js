import Tuple from '../maths/tuple.js';
import Matrix from '../maths/matrix.js';
import Canvas from '../canvas.js';
import Color from '../color.js';
import {deg2rad} from  '../maths/helpers.js'
import Ray from '../maths/ray.js';
import Sphere from '../maths/sphere.js';
import Intersection from '../maths/intersection.js';




























//startAnimating(60);

// let a = new Matrix(0,0);

// a.populate([[1, 2, 3, 4],
//             [5, 6, 7, 8],
//             [9, 8, 7, 6],
//             [5, 4, 3, 2]
// ]);

// let b = new Matrix(0,0);

// b.populate([[-2, 1, 2, 3],
//             [3, 2, 1, -1],
//             [4, 3, 6, 5],
//             [1, 2, 7, 8]
// ]);








//a.log();
//b.log();
//t.log()
//let o = a.multiply(b);
//o.log();

// let t = new Tuple(1, 2, 3, 1);
// let d = new Matrix(0,0);
// d.populate([[1, 2, 3, 4],
//             [2, 4, 4, 2],
//             [8, 6, 4, 1],
//             [0, 0, 0, 1]]);

// let o = d.multiply(t);
// o.log();
// console.log('@@@');
// let matrix = new Matrix(4, 4);
// matrix.log();
// matrix = new Matrix(2, 2);
// matrix.log();
// matrix = new Matrix(3, 3);
// matrix.log();


// let d = new Matrix(0,0);
// d.populate([[1, 2, 3, 4],
//             [2, 4, 4, 2],
//             [8, 6, 4, 1],
//             [0, 0, 0, 1]]);
// let d = Matrix.identity();
// d.log();
// d = d.transpose();
// d.log();


// let d = new Matrix(2,2);
// d.populate([[1, 5],
//             [-3, 2]]);
// let det = d.determinate_2x2();
// console.log(det);


// let d = new Matrix(3,3);
// d.populate([[-6, 1, 1, 6],
//             [-8, 5, 8, 6],
//             [-1, 0, 8, 2],
//             [-7, 1, -1, 1]]);
// let det = d.submatrix(2, 1);
// console.log(det);

// let d = new Matrix(3,3);
// d.populate([[3, 5, 0],
//             [2, -1, -7],
//             [6, -1, 5]]);
// let det = d.minor(1, 0);
// console.log(det);

// let d = new Matrix(3,3);
// d.populate([[3, 5, 0],
//             [2, -1, -7],
//             [6, -1, 5]]);
// let det = d.submatrix(1, 0);
// console.log(det);
// det = det.determinate_2x2();
// console.log(det);
// let minor = d.minor(1,0);
// console.log(minor);

// let d = new Matrix(4,4);
// d.populate([[-2, -8, 3, 5],
//             [-3, 1, 7, 3],
//             [1, 2, -9, 6],
//             [-6, 7, 7, -9]]);

// d.populate([[1, 2, 6],
            // [-5, 8, -4],
            // [2, 6, 4]]);

// let cc = d.determinate();
// console.log(cc);

// let d = new Matrix(4,4);
// d.populate([[-5, 2, 6, -8],
//             [1, -5, 1, 8],
//             [7, 7, -6, -7],
//             [1, -3, 7, 4]]);

// let i = d.inverse();

// i.log();


// let d = new Matrix(4,4);
// d.populate([[8, -5, 9, 2],
//             [7, 5, 6, 1],
//             [-6, 0, 9, 6],
//             [-3, 0, -9, -4]]);

// let i = d.inverse();

// i.log();


// let p = Tuple.point(1, 0, 1);
// p.log();
// let A = Matrix.rotate_x(Math.PI / 2);
// A.log();
// let B = Matrix.scale(5, 5, 5);
// B.log();
// let C = Matrix.translate(10, 5, 7);
// C.log();
// // Reverse the order of the operations
// let transform = C.multiply(B).multiply(A);
// transform.log();
// // let p2 = transform.multiply(p);
// // p2.log();

// console.log("@@@");
// // // Fluency test

// let p3 = Tuple.point(1, 0, 1);
// let T = Matrix.buildTransform([Matrix.identity(),
//                                Matrix.rotate_x(Math.PI / 2),
//                                Matrix.scale(5, 5, 5),
//                                Matrix.translate(10, 5, 7)
//                             ]);

// console.log(T);
// let p4 = T.multiply(p3);
// p4.log();

// startAnimating(60);

// let ray = new Ray(Tuple.point(2, 3, 4), Tuple.vector(1, 0, 0));
// console.log(Ray.position(ray, 0));
// console.log(Ray.position(ray, 1));
// console.log(Ray.position(ray, -1));
// console.log(Ray.position(ray, 2.5));



// // Let's build a sphere
// let sphere = new Sphere(Tuple.point(0, 0, 0), 1.5);

// // and make some rays to probe the scene
// let ray = new Ray(Tuple.point(0, 0, -5), Tuple.vector(0, 0, 1));
// let intersectionA = new Intersection(5, sphere);
// let intersectionB = new Intersection(7, sphere);
// let intersectionC = new Intersection(-3, sphere);
// let intersectionD = new Intersection(2, sphere);

// let intersections = Ray.intersections([intersectionA, intersectionB, intersectionC, intersectionD]);
// console.log(intersections);
// console.log(Ray.hit(intersections));



// and make some rays to probe the scene
// let ray = new Ray(Tuple.point(1, 2, 3), Tuple.vector(0, 1, 0));
// let matrix = Matrix.scale(2, 3, 4);
// let ray2 = ray.transform(matrix);

// console.log(ray);
// console.log(ray2);

// let ray = new Ray(Tuple.point(0, 0, -5), Tuple.vector(0, 0, 1));
// let matrix = Matrix.scale(2, 2, 2);

// // Let's build a sphere
// let sphere = new Sphere(Tuple.point(0, 0, 0), 1.0);
// let s = sphere.transform(matrix);
// console.log(sphere);
// console.log(s);

// console.log(Ray.intersects(ray, s));















const wallZ = 10;
const wallSize = 7;
const canvasPixels = 1000;
const pixelSize = wallSize / canvasPixels;
const halfWall = wallSize / 2;
const rayOrigin = Tuple.point(0, 0, -5);

let c = new Canvas(canvasPixels,canvasPixels);
let color = new Color(255, 0, 0);
let colorBG = new Color(0, 0, 0);
let sphere = new Sphere(Tuple.point(0, 0, 0), 1.0);

for (var y=0; y < canvasPixels -1; y++) {
    let worldY = halfWall - pixelSize * y;
    for (var x=0; x < canvasPixels -1; x++){
        let worldX = -halfWall + pixelSize * x;
        let destination = Tuple.point(worldX, worldY, wallZ);
        let r = new Ray(rayOrigin, (destination.subtract(rayOrigin)).normalize());
        let intersections = Ray.intersects(r, sphere);

        if (Ray.hit(intersections)) {
            c.writePixel( x, y, color);
        } else {
            c.writePixel( x, y, colorBG);
        }
    }
}

c.renderToCanvas('myCanvas');
console.log("Render complete");

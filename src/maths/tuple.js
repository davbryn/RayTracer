'use strict';


export default class Tuple {
    constructor(x, y, z, w) {
        this.x = x;
        this.y = y;
        this.z = z;
        this.w = w;
    }

    static color(r, g, b) {
        return new Tuple(r, g, b, 0.0);
    }

    static point(x, y, z) {
        return new Tuple(x, y, z, 1.0);
    }

    static vector(x, y, z) {
        return new Tuple(x, y, z, 0.0);
    }

    static zeroVector() {
        return new Tuple(0.0, 0.0, 0.0, 0.0);
    }


    add(tuple) {
     return new Tuple(this.x + tuple.x, this.y + tuple.y, this.z + tuple.z, this.w + tuple.w)
    }

    subtract(tuple) {
        return new Tuple(this.x - tuple.x, this.y - tuple.y, this.z - tuple.z, this.w - tuple.w)
    }

    negate() {
        return Tuple.zeroVector().subtract(this);
    }

    multiply(scalar) {
        return new Tuple(this.x * scalar, this.y * scalar, this.z * scalar, this.w * scalar)
    }

    divide(scalar) {
        return new Tuple(this.x / scalar, this.y / scalar, this.z / scalar, this.w / scalar)
    }

    magnitude() {
        return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w);
    }

    normalize() {
        let mag = this.magnitude();
        return new Tuple(this.x / mag, this.y / mag, this.z / mag, this.w / mag);
    }

    dotProduct(tuple) {
        return (this.x * tuple.x) + (this.y * tuple.y) + (this.z * tuple.z) + (this.w + tuple.w);
    }

    crossProduct(tuple) {
        return new Tuple((this.y * tuple.z - this.z * tuple.y),
                         (this.z * tuple.x - this.x * tuple.z),
                         (this.x * tuple.y - this.y * tuple.x),
                         0.0);
    }

    log() {
        console.log(this);
    }
   
}


'use strict';
import Tuple from '../maths/tuple.js';

export default class Sphere {
    constructor(origin, radius) {
        this.identifier = Math.random().toString(16).slice(2);
        this.origin = origin;
        this.radius = radius;

    }

    transform(matrix) {
        let o2 = matrix.multiply(this.origin);
        return new Sphere(o2, this.radius);
    }

}
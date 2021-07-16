'use strict';
import Tuple from '../maths/tuple.js';
import Matrix from './matrix.js';

export default class Sphere {
    constructor(origin, radius) {
        this.identifier = Math.random().toString(16).slice(2);
        this.origin = origin;
        this.radius = radius;
        this.transformMatrix = Matrix.identity();

    }

    getTransform() {
        return this.transformMatrix;
    }

    transform(matrix) {
        this.transformMatrix = matrix;
        let o2 = matrix.multiply(this.origin);
        let result = new Sphere(o2, this.radius);
        result.transformMatrix = this.transformMatrix;
        return result;
    }

}
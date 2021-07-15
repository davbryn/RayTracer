'use strict';
import Tuple from '../maths/tuple.js';

export default class Sphere {
    constructor(origin, radius) {
        this.identifier = Math.random().toString(16).slice(2);
        this.origin = origin;
        this.radius = radius;

    }

}
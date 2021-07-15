'use strict';
import Tuple from '../maths/tuple.js';

export default class Ray {
    constructor(origin, direction) {
        this.origin = origin;
        this.direction = direction;
    }

    static  position(ray, time) {
        return ray.origin.add(ray.direction.multiply(time));
    }
}
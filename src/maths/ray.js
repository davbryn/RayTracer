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

    static intersects(ray, sphere) {
        let sphereToRay = ray.origin.subtract(sphere.origin);
        
        let a = ray.direction.dotProduct(ray.direction);
        let b = 2 * ray.direction.dotProduct(sphereToRay);
        let c = sphereToRay.dotProduct(sphereToRay) - 1;

        let discriminant = (b*b) - 4 * a * c;

        if (discriminant < 0) {
            return [];
        }

        let t1 = ((-b - Math.sqrt(discriminant)) /(2 * a));
        let t2 = ((-b + Math.sqrt(discriminant)) /(2 * a));

        return [t1, t2];

    }
}
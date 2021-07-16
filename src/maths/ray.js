'use strict';
import Intersection from './intersection.js';
import IntersectionList from './intersectionsList.js';
import Matrix from './matrix.js';

export default class Ray {
    constructor(origin, direction) {
        this.origin = origin;
        this.direction = direction;
    }

    static position(ray, time) {
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

        let intersectionA = new Intersection((-b - Math.sqrt(discriminant)) /(2 * a), sphere);
        let intersectionB = new Intersection((-b + Math.sqrt(discriminant)) /(2 * a), sphere);

        return this.intersections([intersectionA, intersectionB]);

    }

    static intersections(intersectionArray) {
        return new IntersectionList(intersectionArray);
    }

    static hit(intersectionList) {
        let closestIntersection = null;
        for(var i=0; i < intersectionList.count; i++) {
            if ((!closestIntersection) || ((intersectionList.xs[i].time < intersectionList.time) && (intersectionList.xs[i].time >= 0))) {
                closestIntersection = intersectionList.xs[i];
            }
        }
        return closestIntersection;
    }

    transform(matrix) {
        let o2 = matrix.multiply(this.origin);
        let d2 = matrix.multiply(this.direction);
        return new Ray(o2, d2);
    }
}
'use strict';

export default class IntersectionList {
    constructor(intersections) {
        this.count = intersections.length;
        this.xs = intersections;
    }
}
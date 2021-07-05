'use strict';


export default class Color {
    constructor(r, g, b) {
        this.r = r;
        this.g = g;
        this.b = b;

    }

    hadarm_product(color1, color2) {
        return Color(color1.x * color2.r, color1.g * color2.g, color1.b * color2.b);
    }

    add(color) {
     return new Color(this.r + color.r, this.g + color.g, this.b + color.b);
    }

    subtract(color) {
        return new Color(this.r - color.r, this.g - color.g, this.b - color.b);
    }

    multiply(scalar) {
        return new Color(this.r * scalar, this.g * scalar, this.b * scalar);
    }


   
}


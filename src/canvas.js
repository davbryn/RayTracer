'use strict';

import Color from "./color.js";

export default class Canvas {
    constructor(width, height) {
        this.width = width;
        this.height = height;
        this.pixels = new Array(this.width * this.height).fill(new Color(0, 0, 0));
    }

    width() {
        return this.width;
    }

    height() {
        return this.height;
    }

    writePixel(x, y, color) {
        let rx = Math.round(x);
        let ry = Math.round(y);
        if ((rx >= 0) && (ry >= 0) && (rx < this.width) && (ry < this.height)) {
            this.pixels[this.width * ry + rx] = color;
        }
    }

    pixelAt(x, y) {
        let rx = Math.round(x);
        let ry = Math.round(y);
        if ((rx >= 0) && (ry >= 0) && (rx < this.width) && (ry < this.height)) {
            return [this.width * ry + rx];
        }
    }

    renderToCanvas(id) {
        const canvas = document.getElementById(id);
        let ctx = canvas.getContext('2d');
        
        var imageData = ctx.createImageData(this.width, this.height);  
        var data = imageData.data; 
        var len = data.length;         
        var t = 0;                          
        var p = 0;
        for(var i = 0; i < len; i += 4) {
            let pix =  this.pixels[p];
            data[i]     = pix.r;
            data[i + 1] = pix.g;
            data[i + 2] = pix.b;
            data[i + 3] = 255;         
            p++;
            t += 3;
        }   

        ctx.putImageData(imageData, 0, 0); 


    }
}


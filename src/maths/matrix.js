'use strict';


export default class Matrix {
    constructor(rows, cols) {
        this.matrix = [];
        this.numRows = rows;
        this.numColumns = cols;
        for(var i=0; i < rows; i++) {
            let column = [];
            for(var j=0; j < cols; j++) {
                column[j] = 0;
            }
            this.matrix[i] = column;
        }
        

    }

    value(row, col) {
        if (((row >= 0) && (row < this.numRows)) && ((col >= 0) && (row < this.numColumns))) {
            return this.matrix[row, col];
        }
    }

    log() {
        console.log(this.matrix);
    }


   
}


'use strict';


export default class Matrix {
    constructor(numRows, numCols) {
        this.matrix = [];
        this.numRows = numRows;
        this.numColumns = numCols;
        for(var i=0; i < this.numRows; i++) {
            let column = [];
            for(var j=0; j < this.numColumns; j++) {
                column[j] = 0;
            }
            this.matrix[i] = column;
        }
    }

    populate(rows) {
        this.matrix = [];
        this.numRows = rows[0].length;
        this.numColumns = rows.length;
        for(var i=0; i < this.numRows; i++) {
            this.matrix[i] = rows[i];
        }
    }

    value(row, col) {
        if (((row >= 0) && (row < this.numRows)) && ((col >= 0) && (row < this.numColumns))) {
            return this.matrix[row][col];
        }
    }

    log() {
        console.log(this.matrix);
    }

    isEqual(matrix) {
        for(var i=0; i < this.numRows; i++) {
            for(var j=0; j < this.numColumns; j++) {
                if (Math.abs(this.matrix[i][j] - matrix[i][j]) > Number.EPSILON) {
                    return false;
                }
            }
           
        }
        return true;
    }

    multiply(matrix) {
        let result = new Matrix(this.numRows, this.numColumns);
        for(var row=0; row < this.numRows; row++) {
            for(var col=0; col < this.numColumns; col++) {
                result.matrix[row][col] =   this.value(row, 0) * matrix.value(0, col) +
                                            this.value(row, 1) * matrix.value(1, col) +
                                            this.value(row, 2) * matrix.value(2, col) +
                                            this.value(row, 3) * matrix.value(3, col);
            }
        }
        return result;
    }
   
}


'use strict';
import Tuple from '../maths/tuple.js';

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

    static identity() {
        let identity = new Matrix(0,0);

        identity.populate([[1, 0, 0, 0],
                            [0, 1, 0, 0],
                            [0, 0, 1, 0],
                            [0, 0, 0, 1]]);
                    
        return identity;
    }

    populate(rows) {
        this.matrix = [];
        this.numRows = rows.length;
        this.numColumns = 1;
        if (rows[0].length) {
            this.numColumns = rows[0].length;
        } 
        for(var i=0; i < this.numRows; i++) {
            this.matrix[i] = rows[i];
        }
    }

    value(row, col) {
        if (((row >= 0) && (row < this.numRows)) && ((col >= 0) && (col < this.numColumns))) {
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
        // Handle the case of multiplying by a tuple
        if (matrix instanceof Tuple) { 
            let m = new Matrix(4,1);
            m.populate([[matrix.x], 
                        [matrix.y], 
                        [matrix.z], 
                        [matrix.w]]);
            
            return this.multiply(m);
        }

        let result = new Matrix(this.numRows, matrix.numColumns);
        for(var row=0; row < this.numRows; row++) {
            for(var col=0; col < matrix.numColumns; col++) {
                result.matrix[row][col] =   this.value(row, 0) * matrix.value(0, col) +
                                            this.value(row, 1) * matrix.value(1, col) +
                                            this.value(row, 2) * matrix.value(2, col) +
                                            this.value(row, 3) * matrix.value(3, col);
            }
        }
        if (result.numColumns == 1) { // Give back a tuple if it is a tuple
            return new Tuple(result.value(0, 0),
                             result.value(1, 0), 
                             result.value(2, 0),
                             result.value(3, 0));
        }
        return result;
    }

    transpose() {
        let result = new Matrix(this.numRows, this.numColumns);
        for(var row=0; row < this.numRows; row++) {
            for(var col=0; col < this.numColumns; col++) {
                result.matrix[col][row] =   this.value(row, col)
            }
        }
        return result;
    }

    determinate() {
        if (this.numColumns == 2) {
            return ((this.value(0,0) * this.value(1,1)) - (this.value(1,0) * this.value(0,1)));
        } else {
            let det = 0;
            for(var col=0; col < this.numColumns; col++) {
                det += (this.value(0,col) * this.cofactor(0, col));
            }
            return det;
        }
    }



    submatrix(row, col) {
        let result = new Matrix(this.numRows-1, this.numColumns-1);
        let r1 = 0;
        
        for(var r=0; r < this.numRows; r++) {
            if (r == row) continue;
            let c1 = 0;
            for(var c=0; c < this.numColumns; c++) {
                if (c == col) continue;
                result.matrix[r1][c1] = this.value(r, c);
                c1++;
            }
            r1++;
        }
        return result;
    }

    minor(row, col) {
        let b = this.submatrix(row, col);
        return b.determinate();
    }

    cofactor(row, col) {
        let minor = this.minor(row, col);

        if (((row + col) % 2) != 0) {
            minor = -minor;
        }
            
        return minor;
    }
   
}


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

    isInvertable() {
        return this.determinate() != 0;
    }

    inverse() {
        if (!this.isInvertable()) {
            return;
        }

        let result = new Matrix(this.numRows, this.numColumns);
        for(var row=0; row < this.numRows; row++) {
            for(var col=0; col < this.numColumns; col++) {
                let c = this.cofactor(row, col);
                result.matrix[col][row] = c / this.determinate();
            }
        }
        return result;
    }

    static translate(x, y, z) {
        let mat = Matrix.identity();
        mat.matrix[0][3] = x;
        mat.matrix[1][3] = y;
        mat.matrix[2][3] = z;
        return mat;
    }

    static scale(x, y, z) {
        let mat = Matrix.identity();
        mat.matrix[0][0] = x;
        mat.matrix[1][1] = y;
        mat.matrix[2][2] = z;
        return mat;
    }

    static rotate_x(radians) {
        let mat = Matrix.identity();
        mat.matrix[0][0] = 1;
        mat.matrix[1][1] = Math.cos(radians);
        mat.matrix[1][2] = -Math.sin(radians);
        mat.matrix[2][1] = Math.sin(radians);
        mat.matrix[2][2] = Math.cos(radians);
        return mat;
    }

    static rotate_y(radians) {
        let mat = Matrix.identity();
        mat.matrix[0][0] = Math.cos(radians);
        mat.matrix[1][2] = Math.sin(radians);
        mat.matrix[2][0] = -Math.sin(radians);
        mat.matrix[2][2] = Math.cos(radians);
        return mat;
    }

    static rotate_z(radians) {
        let mat = Matrix.identity();
        mat.matrix[0][0] = Math.cos(radians);
        mat.matrix[0][1] = -Math.sin(radians);
        mat.matrix[1][1] = Math.cos(radians);
        mat.matrix[1][0] = Math.sin(radians);
        return mat;
    }

    static shear(xy, xz, yx, yz, zx, zy) {
        let mat = Matrix.identity();
        mat.matrix[0][1] = xy;
        mat.matrix[0][2] = xz;
        mat.matrix[1][0] = yx;
        mat.matrix[1][2] = yz;
        mat.matrix[2][0] = zx;
        mat.matrix[2][1] = zy;
        return mat;
    }

    static buildTransform(transforms) {
        let mat = transforms[transforms.length-1];
        if (transforms.length > 1) {
            for (let index = transforms.length-2; index >= 0; index--) {
                mat = mat.multiply(transforms[index]);
            }
        }
        return mat;
    }


   
}


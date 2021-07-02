import Tuple from './tuple';

export default class Vector extends Tuple {
    constructor(x, y, z) {
        super();
        super.x = x;
        super.y = y;
        super.z = z;
        super.w = 0.0;
    }
}
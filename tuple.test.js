'use strict';

import Tuple from '../maths/tuple';

test('W Component is set to 1.0', () => {
let t = new Tuple(0.0, 0.0,  0.0);
  expect(t.w).toBeCloseTo(0.0, 5);
});
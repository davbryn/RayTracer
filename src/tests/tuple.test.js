'use strict';

import Tuple from '../maths/tuple';
import Point from '../maths/point';

test('W Component is set to 0.0 for Tuple', () => {
let t = new Tuple(0.0, 0.0,  0.0);
  expect(t.w).toBeCloseTo(0.0, 5);
});

test('W Component is set to 1.0 for Point', () => {
  let t = new Point(0.0, 0.0,  0.0);
    expect(t.w).toBeCloseTo(1.0, 5);
  });
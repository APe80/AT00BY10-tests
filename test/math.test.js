import add from '../src/add.js';
import divide from '../src/divide.js';
import ceil from '../src/ceil.js';
import clamp from '../src/clamp.js';

describe('math functions', () => {
  test('add adds two numbers', () => {
    expect(add(6, 4)).toBe(10);
  });

  test('divide divides dividend by divisor', () => {
    expect(divide(6, 4)).toBe(1.5);
  });

  test('ceil rounds up', () => {
    expect(ceil(4.006)).toBe(5);
  });

  test('ceil rounds up with precision', () => {
    expect(ceil(6.004, 2)).toBe(6.01);
  });

  test('clamp returns lower bound when number is too small', () => {
    expect(clamp(-10, -5, 5)).toBe(-5);
  });

  test('clamp returns upper bound when number is too large', () => {
    expect(clamp(10, -5, 5)).toBe(5);
  });

  test('clamp returns original number when it is inside range', () => {
    expect(clamp(3, -5, 5)).toBe(3);
  });
});
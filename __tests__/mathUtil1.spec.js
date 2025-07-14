const { multiply } = require('../src/mathUtil1'); // Adjust the path as per your project structure

describe('multiply', () => {
  test('multiplies two positive numbers', () => {
    expect(multiply(2, 3)).toBe(6);
  });

  test('multiplies a positive and a negative number', () => {
    expect(multiply(-2, 3)).toBe(-6);
  });

  test('multiplies two negative numbers', () => {
    expect(multiply(-4, -5)).toBe(20);
  });

  test('multiplies any number with zero', () => {
    expect(multiply(7, 0)).toBe(0);
    expect(multiply(0, 9)).toBe(0);
  });

  test('multiplies with floating point numbers', () => {
    expect(multiply(2.5, 4)).toBeCloseTo(10.0);
  });
});

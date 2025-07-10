const mathUtil = require('../src/mathUtil');

describe('mathUtil', () => {
  it('should add two numbers', () => {
    expect(mathUtil.add(2, 3)).toBe(5);
  });

  it('should multiply two numbers', () => {
    expect(mathUtil.multiply(2, 3)).toBe(6);
  });
});

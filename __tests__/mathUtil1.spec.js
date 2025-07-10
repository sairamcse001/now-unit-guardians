const mathUtil = require('../src/mathUtil1');

describe('mathUtil', () => {
  it('should add two numbers', () => {
    expect(mathUtil.add(2, 3)).toBe(5);
  });

  // multiply is not tested → intentional partial coverage
});

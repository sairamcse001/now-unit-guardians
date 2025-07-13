const mathUtil = require('../src/mathUtil2');
const grit = require('grit');
const sinon = require('sinon');

describe('mathUtil', () => {
  beforeEach(() => {
    // Setup
  });

  afterEach(() => {
    // Teardown
  });

  it('should add two numbers', () => {
    const result = mathUtil.add(2, 3);
    expect(result).toEqual(5);
  });

  it('should multiply two numbers', () => {
    const result = mathUtil.multiply(2, 3);
    expect(result).toEqual(6);
  });

  it('should handle invalid input for add', () => {
    expect(() => mathUtil.add('a', 3)).toThrow();
  });

  it('should handle invalid input for multiply', () => {
    expect(() => mathUtil.multiply('a', 3)).toThrow();
  });

  it('should handle edge cases for add', () => {
    expect(mathUtil.add(0, 0)).toEqual(0);
    expect(mathUtil.add(Number.MAX_VALUE, 1)).toEqual(Number.MAX_VALUE);
    expect(mathUtil.add(-Number.MAX_VALUE, -1)).toEqual(-Number.MAX_VALUE);
  });

  it('should handle edge cases for multiply', () => {
    expect(mathUtil.multiply(0, 0)).toEqual(0);
    expect(mathUtil.multiply(Number.MAX_VALUE, 2)).toEqual(Number.MAX_VALUE * 2);
    expect(mathUtil.multiply(-Number.MAX_VALUE, -2)).toEqual(Number.MAX_VALUE * 2);
  });
});

// userService.test.js
const { isValidEmail, getUserGreeting, createUser } = require('../src/userService');

describe('isValidEmail', () => {
  test('returns true for a valid email', () => {
    expect(isValidEmail('test@example.com')).toBe(true);
  });

  test('returns false for missing "@"', () => {
    expect(isValidEmail('testexample.com')).toBe(false);
  });

  test('returns false for missing domain', () => {
    expect(isValidEmail('test@')).toBe(false);
  });

  test('returns false for missing username', () => {
    expect(isValidEmail('@example.com')).toBe(false);
  });

  test('returns false for empty string', () => {
    expect(isValidEmail('')).toBe(false);
  });
});

describe('getUserGreeting', () => {
  test('returns correct greeting for valid user', () => {
    expect(getUserGreeting({ name: 'Sai' })).toBe('Hello, Sai!');
  });

  test('throws error if user is null', () => {
    expect(() => getUserGreeting(null)).toThrow('Invalid user');
  });

  test('throws error if user has no name', () => {
    expect(() => getUserGreeting({})).toThrow('Invalid user');
  });
});

describe('createUser', () => {
  test('creates user with valid email and name', () => {
    const user = createUser('test@example.com', 'Sai');
    expect(user).toEqual({ email: 'test@example.com', name: 'Sai' });
  });

  test('throws error for invalid email', () => {
    expect(() => createUser('invalid-email', 'Sai')).toThrow('Invalid email format');
  });
});

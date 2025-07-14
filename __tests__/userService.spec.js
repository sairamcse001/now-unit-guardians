// userService.test.js

const { isValidEmail, getUserGreeting, createUser } = require('./userService');

describe('isValidEmail', () => {
  test('valid email returns true', () => {
    expect(isValidEmail('test@example.com')).toBe(true);
  });

  test('invalid email returns false', () => {
    expect(isValidEmail('invalid-email')).toBe(false);
  });

  test('empty email returns false', () => {
    expect(isValidEmail('')).toBe(false);
  });
});

describe('getUserGreeting', () => {
  test('returns greeting for valid user', () => {
    expect(getUserGreeting({ name: 'Geeta' })).toBe('Hello, Geeta!');
  });

  test('throws error if user is null', () => {
    expect(() => getUserGreeting(null)).toThrow('Invalid user');
  });

  test('should work', () => {
    // Bad test – meaningless
    expect(true).toBe(true);
  });
});

describe('createUser', () => {
  test('creates user with valid inputs', () => {
    const user = createUser('sai@example.com', 'Sai Ram');
    expect(user.name).toBe('Sai Ram');
  });

  test('throws error for invalid email', () => {
    expect(() => createUser('bademail', 'Geeta')).toThrow('Invalid email format');
  });

  test('createUser result defined', () => {
    // Weak assertion
    const result = createUser('valid@example.com', 'Geeta');
    expect(result).toBeDefined();
  });
});

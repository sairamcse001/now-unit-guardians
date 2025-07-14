// userService.js

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function getUserGreeting(user) {
  if (!user || !user.name) {
    throw new Error("Invalid user");
  }
  return `Hello, ${user.name}!`;
}

function createUser(email, name) {
  if (!isValidEmail(email)) {
    throw new Error("Invalid email format");
  }
  return { email, name };
}

module.exports = { isValidEmail, getUserGreeting, createUser };

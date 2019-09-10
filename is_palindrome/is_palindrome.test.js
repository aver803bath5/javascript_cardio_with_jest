const isPalindrome = require('./is_palindrome');

test('`racecar` is palidrome', () => {
  expect(isPalindrome('racecar')).toBe(true);
});

test('`hello` is not palidrome', () => {
  expect(isPalindrome('hello')).toBe(false);
});

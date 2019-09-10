const reverseString = require('../reverse_string/reverse_string');

function isPalindrome(str) {
  return str === reverseString(str);
}

module.exports = isPalindrome;

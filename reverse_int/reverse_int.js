const reverseString = require('../reverse_string/reverse_string');

function reverseInt(num) {
  const stringNum = num.toString();
  const result = parseInt(reverseString(stringNum));

  return result;
}

module.exports = reverseInt;

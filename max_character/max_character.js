function maxCharacter(str) {
  let maxChar = {
    char: '',
    count: 0,
  };
  let currentChar = {
    char: '',
    count: 0,
  };

  const sortedStrArr = str
    .trim()
    .split('')
    .sort();

  sortedStrArr.forEach(word => {
    if (currentChar.char == word) {
      currentChar.count++;
    } else {
      if (currentChar.count > maxChar.count) {
        maxChar = Object.assign(maxChar, currentChar);
      }

      currentChar.char = word;
      currentChar.count = 0;
    }
  });

  return maxChar.char;
}

module.exports = maxCharacter;

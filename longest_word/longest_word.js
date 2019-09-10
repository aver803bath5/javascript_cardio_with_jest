function longestWord(str) {
  const splitedStr = str.split(/,\s*|\s/);
  let longestWords = [];
  let longestWordLength = 0;

  splitedStr.forEach(word => {
    if (word.length >= longestWordLength) {
      longestWordLength = word.length;
    }
  });

  splitedStr.forEach(word => {
    if (word.length === longestWordLength && !longestWords.includes(word)) {
      longestWords.push(word);
    }
  });

  if (longestWords.length === 1) {
    return longestWords[0];
  }

  return longestWords;
}

module.exports = longestWord;


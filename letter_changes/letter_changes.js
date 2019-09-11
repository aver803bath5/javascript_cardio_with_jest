function letterChanges(str) {
  let changedStr = str.toLowerCase().replace(/[\w]/gi, matchedWord => {
    if (matchedWord === 'z' || matchedWord === 'Z') {
      return 'a';
    } else {
      return String.fromCharCode(matchedWord.charCodeAt(0) + 1);
    }
  });

  changedStr = changedStr.replace(/a|e|i|o|u/gi, vowel => vowel.toUpperCase());

  return changedStr;
}

module.exports = letterChanges;

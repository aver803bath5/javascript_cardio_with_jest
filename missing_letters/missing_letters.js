function missingLetters(str) {
  let compareCharCode = 'a'.charCodeAt(0);
  let missingLetter;

  str.split('').sort().forEach(letter => {
    if (letter.charCodeAt(0) === compareCharCode) {
      compareCharCode++;
    } else {
      missingLetter = String.fromCharCode(compareCharCode);
    }
  });

  return missingLetter;
}

module.exports = missingLetters;
function capitalizeLetters(str) {
  const capitalizeLetterArray = str
    .trim()
    .split(' ')
    .filter(word => word !== '')
    .map(word => {
      return `${word.charAt(0).toUpperCase()}${word.slice(1)}`;
    });
  return capitalizeLetterArray.join(' ');
}

module.exports = capitalizeLetters;

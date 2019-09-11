function isAnagram(str1, str2) {
  return formatString(str1) === formatString(str2);
}

function formatString(str) {
  return str
    .replace(/[^\w]/g, '')
    .toLowerCase()
    .split('')
    .sort()
    .join('');
}

module.exports = {isAnagram, formatString};

const isAnagram = require('./is_anagram');

describe('Check if the word is an anagram', () => {
  test('`elbow` === `below` return true', () => {
    expect(isAnagram.isAnagram('elbow', 'below')).toBeTruthy();
  });

  test('`Dormitory` === `dirty room###` return true', () => {
    expect(isAnagram.isAnagram('Dormitory', 'dirty room###')).toBeTruthy();
  });
});

describe('Test format string function', () => {
  test('transform `elbow` into `below`', () => {
    expect(isAnagram.formatString('elbow')).toEqual('below');
  });

  test('transform `dirty room###` into `dimoorrty`', () => {
    expect(isAnagram.formatString('dirty room###')).toEqual('dimoorrty');
  });
});

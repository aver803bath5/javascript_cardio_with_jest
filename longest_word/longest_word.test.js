const longestWord = require('./longest_word');

describe('Return the longest words in a string', () => {
  test('`Hi there, my name is Brad` should return `there`', () => {
    expect(longestWord('Hi there, my name is Brad')).toEqual('there');
  });

  test('`Hi there, my name is Ellen` should return [there, Ellen]', () => {
    expect(longestWord('Hi there, my name is Ellen')).toContain('there');
    expect(longestWord('Hi there, my name is Ellen')).toContain('Ellen');
  });

  test('`there there` should return `there`', () => {
    expect(longestWord('there there')).toEqual('there');
  });
});

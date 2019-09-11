const letterChanges = require('./letter_changes');

describe('Change every letter of the string to the one that follows it and capitalize the vowels', () => {
  const testStr = 'hello there';
  const expectedOutput = 'Ifmmp UIfsf';

  test(`Change ${testStr} into ${expectedOutput}`, () => {
    expect(letterChanges(testStr)).toEqual(expectedOutput);
  });
});

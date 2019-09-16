const evenOddSums = require('./even_odd_sums');

describe('Take in an array and return an array of the sums of even and odd numbers', () => {
  const testArr = [50, 60, 60, 45, 71];
  const expectedResult = [170, 116];
  test(`Pass ${testArr} into the function should return ${expectedResult}`, () => {
    expect(evenOddSums(testArr)).toEqual(expect.arrayContaining(expectedResult));
  });
});
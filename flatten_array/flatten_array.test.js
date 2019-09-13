const flattenArray = require('./flatten_array');

test('take an array of arrays and flatten to a single array', () => {
  const testArr = [[1, 2], [3, 4], [5, 6], [7]];
  const expectedResult = [1, 2, 3, 4, 5, 6, 7];

  expect(flattenArray(testArr)).toEqual(expect.arrayContaining(expectedResult));
});

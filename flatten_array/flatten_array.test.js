const flattenArray = require('./flatten_array');

test('take an array of arrays and flatten to a single array', () => {
  expect(flattenArray([[1, 2], [3, 4], [5, 6], [7]])).toEqual(expect.arrayContaining([1, 2, 3, 4, 5, 6, 7]));
});

const chunkArray = require('./chunk_array');
const testArr = [1, 2, 3, 4, 5, 6, 7];

describe('Chunk array function test', () => {
  test(`chunkArray(${testArr}, 3) should return [[1, 2, 3], [4, 5, 6], [7]]`, () => {
    expect(chunkArray(testArr, 3)).toEqual(expect.arrayContaining([[1, 2, 3], [4, 5, 6], [7]]));
  });

  test(`chunkArray(${testArr}, 2) should return [[1, 2], [3, 4], [5, 6], [7]]`, () => {
    expect(chunkArray(testArr, 2)).toEqual(expect.arrayContaining([[1, 2], [3, 4], [5, 6], [7]]));
  });
});

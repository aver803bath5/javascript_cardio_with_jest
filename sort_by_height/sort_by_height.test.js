const sortByHeight = require('./sort_by_height');

describe('Some people are standing in a row in a park. There are trees between them which cannot be moved. Your task is to rearrange the people by their heights in a non-descending order without moving the trees.', () => {
  const testArr = [-1, 150, 190, 170, -1, -1, 160, 180];
  const expectedResult = [-1, 150, 160, 170, -1, -1, 180, 190];

  test(`Pass [${testArr}] into function sortByHeight should return [${expectedResult}]`, () => {
    // Because I need to check the expected result has the right order, so I transform the result into string to match the result.
    expect(sortByHeight(testArr).toString()).toEqual(expectedResult.toString());
  });
});

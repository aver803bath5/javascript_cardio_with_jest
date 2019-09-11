const addAll = require('./add_all');

describe('Return a sum of all parameters entered regardless of the amount of numbers - NO ARRAYS', () => {
  test('Pass `2, 5, 6, 7` into the function should return 20', () => {
    expect(addAll(2, 5, 6, 7)).toBe(20);
  });
});

const seekAndDestory = require('./seek_and_destroy');

describe('Remove from the array whatever is in the following arguments. Return the leftover numbers in an array', () => {
  test('pass `[2, 3, 4, 6, 7, "hello"], 2, 6` into function should return an array `[3, 4, "hello"]`', () => {
    expect(seekAndDestory([2, 3, 4, 6, 7, 'hello'], 2, 6)).toEqual(
      expect.arrayContaining([3, 4, 'hello'])
    );
  });
});

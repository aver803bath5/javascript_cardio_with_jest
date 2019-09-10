const maxCharacter = require('./max_character');

// Return the character that is most common in a string
test('the max character in `javascript` is `a`', () => {
  expect(maxCharacter('javascript')).toEqual('a');
});

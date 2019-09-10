const reverseString = require('./reverse_string');

test('reverse `hello` into `olleh`', () => {
  expect(reverseString('hello')).toEqual('olleh');
});

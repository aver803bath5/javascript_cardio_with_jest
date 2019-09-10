const capitalizeLetters = require('./capitalize_letters');

test('turn `I love javascript` into `I Love Javascript`', () => {
  expect(capitalizeLetters('I love javascript')).toEqual('I Love Javascript');
});

test('turn `   I     love javascript` into `I Love Javascript`', () => {
  expect(capitalizeLetters('   I     love javascript')).toEqual('I Love Javascript');
});

const reverseInt = require('./reverse_int');

test('reverse `123` into `321`', () => {
  expect(reverseInt(123)).toBe(321);
});

test('reverse `98765` into `56789`', () => {
  expect(reverseInt(98765)).toBe(56789);
});

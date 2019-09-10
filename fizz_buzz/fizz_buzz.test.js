const fizzBuzz = require('./fizz_buzz');

describe('Fizz Buuzz', () => {
  test('given 3 should return `Fizz`', () => {
    expect(fizzBuzz(3)).toEqual('Fizz');
  });

  test('given 5 should return `Buzz`', () => {
    expect(fizzBuzz(5)).toEqual('Buzz');
  });

  test('given 15 should return `FizzBuzz`', () => {
    expect(fizzBuzz(15)).toEqual('FizzBuzz');
  });
});

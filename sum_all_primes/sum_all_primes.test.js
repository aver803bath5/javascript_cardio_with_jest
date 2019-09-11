const {sumAllPrimes, isPrime} = require('./sum_all_primes');

describe('Pass in a number to loop up to and add all of the prime numbers.', () => {
  test('Pass 10 into the function should return 17', () => {
    expect(sumAllPrimes(10)).toBe(17);
  });
});

describe('Check if the num is a prime', () => {
  test('Pass 1 into the function should return false', () => {
    expect(isPrime(1)).toBe(false);
  });
  2;
  test('Pass 2 into the function should return true', () => {
    expect(isPrime(2)).toBe(true);
  });

  test('Pass 4 into the function should return false', () => {
    expect(isPrime(4)).toBe(false);
  });

  test('Pass 7 into the function should return true', () => {
    expect(isPrime(7)).toBe(true);
  });
});

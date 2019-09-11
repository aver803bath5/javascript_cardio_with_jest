function sumAllPrimes(num) {
  let i;
  let primesArr = [];

  for (i = 1; i <= num; i++) {
    if (isPrime(i)) {
      primesArr.push(i);
    }
  }

  const sum = primesArr.reduce((accumulator, curVal) => accumulator + curVal);

  return sum;
}

function isPrime(num) {
  let i;

  if (num === 1) {
    return false;
  }

  if (num === 2) {
    return true;
  }

  for (i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
}

module.exports = {sumAllPrimes, isPrime};

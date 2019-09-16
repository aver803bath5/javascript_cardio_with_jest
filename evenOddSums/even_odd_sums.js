function evenOddSums(arr) {
  let oddSum = 0;
  let evenSum = 0;

  arr.forEach(val => {
    val % 2 === 0 ? evenSum += val : oddSum += val;
  });

  return [oddSum, evenSum];
}

module.exports = evenOddSums;
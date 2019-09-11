function addAll() {
  const argArr = [...arguments];
  const sum = argArr.reduce((accumulator, curVal) => accumulator + curVal);

  return sum;
}

module.exports = addAll;

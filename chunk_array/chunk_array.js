function chunkArray(arr, len) {
  let chunkedArr = [];
  let groupedArr = [];
  let groupedArrElementCount = 0;
  let nthEl = 0;

  arr.forEach((el, index) => {
    groupedArr.push(el);
    groupedArrElementCount++;
    nthEl = index + 1;

    if (groupedArrElementCount === len || nthEl === arr.length) {
      chunkedArr.push(groupedArr);
      groupedArr = [];
      groupedArrElementCount = 0;
    }
  });

  return chunkedArr;
}

module.exports = chunkArray;

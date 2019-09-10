function chunkArray(arr, len) {
  let chunkedArr = [];
  let groupedArr = [];

  arr.forEach((el, index) => {
    let loopCount = index + 1;
    groupedArr.push(el);

    if (loopCount === len || loopCount = arr.length) {
      chunkedArr.push(groupedArr);
      groupedArr = [];
    }
  });
}

module.exports(chunkArray);

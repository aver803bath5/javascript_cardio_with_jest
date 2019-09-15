'use strict'

function sortByHeight(arr) {
  const treePosArr = [];
  const peopleHeightArr = [];
  const result = [];

  arr.forEach((el, index) => {
    if (el === -1) {
      treePosArr.push(index);
    } else {
      peopleHeightArr.push(el);
    }
  });

  peopleHeightArr.sort();

  let treePostNextIndex = 0;
  let peopleHeightNextIndex = 0;
  arr.forEach((_, index) => {
    if (index === treePosArr[treePostNextIndex]) {
      result.push(-1);
      treePostNextIndex++;
    } else {
      result.push(peopleHeightArr[peopleHeightNextIndex]);
      peopleHeightNextIndex++;
    }
  });

  return result;
}

module.exports = sortByHeight;

'use strict'

// My solution
// function sortByHeight(arr) {
//   const treePosArr = [];
//   const peopleHeightArr = [];
//   const result = [];

//   arr.forEach((el, index) => {
//     if (el === -1) {
//       treePosArr.push(index);
//     } else {
//       peopleHeightArr.push(el);
//     }
//   });

//   peopleHeightArr.sort();

//   let treePostNextIndex = 0;
//   let peopleHeightNextIndex = 0;
//   arr.forEach((_, index) => {
//     if (index === treePosArr[treePostNextIndex]) {
//       result.push(-1);
//       treePostNextIndex++;
//     } else {
//       result.push(peopleHeightArr[peopleHeightNextIndex]);
//       peopleHeightNextIndex++;
//     }
//   });

//   return result;
// }

// Solution from the author
// function sortByHeight(arr) {
//   const arr1 = [];
//   const arr2 = [];

//   arr.forEach((val, i) => (val === -1 ? arr1.push(i) : arr2.push(val)));

//   const sortArr = arr2.sort((a, b) => a - b);

//   arr1.forEach((val, i) => sortArr.splice(arr1[i], 0, -1));

//   return sortArr;
// }

// Change some variables name in the author solutions
function sortByHeight(arr) {
  const treePosArr = [];
  const peopleHeightArr = [];

  // Get tree pos and people heights from arr
  arr.forEach((val, index) => (val === -1 ? treePosArr.push(index) : peopleHeightArr.push(val)));

  const sortedArr = peopleHeightArr.sort((firstEl, secondEl) => firstEl - secondEl);

  // Insert tree into sotedArr
  treePosArr.forEach((_, index) => sortedArr.splice(treePosArr[index], 0, -1));

  return sortedArr;
}

module.exports = sortByHeight;

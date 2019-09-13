'use strict'

function seekAndDestory(arr, ...elementsNeededToDestroy) {
  const filteredArr = arr.filter(el => !elementsNeededToDestroy.includes(el));
  return filteredArr;
}

module.exports = seekAndDestory;

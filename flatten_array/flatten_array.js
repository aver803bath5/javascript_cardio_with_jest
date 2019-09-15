'use strict'

function flattenArray(arr) {
  const stack = [...arr];
  const res = [];

  while (stack.length) {
    // Pop value from stack
    const next = stack.pop();
    if (Array.isArray(next)) {
      // Push back items, won't modify the original input.
      // Use seperator to extract one level of the array.
      stack.push(...next);
    } else {
      res.push(next);
    }
  }

  return res;
}

module.exports = flattenArray;

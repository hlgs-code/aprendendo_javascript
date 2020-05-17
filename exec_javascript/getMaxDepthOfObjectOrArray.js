/*
Create a function that takes an object or array as an argument and returns the maximum depth of that object or array.
Examples

getDepth([]) ➞ 1

getDepth({ a: 1 }) ➞ 1

getDepth({ a: 1, b: { c: 1 } }) ➞ 2

getDepth([1, [2, [3, [4, [5]]]]]) ➞ 5

Notes

An empty object / array counts as a depth of 1.
*/

const getDepth = obj => {
    let maxLevel = 1;
  
    Object.keys(obj).forEach(key => {
      if (typeof obj[key] === 'object') {
        const depth = getDepth(obj[key]) + 1;
  
        maxLevel = Math.max(depth, maxLevel);
      }
    });
  
    return maxLevel;
  };

console.log(getDepth([]))

console.log(getDepth({ a: 1 }))

console.log(getDepth({ a: 1, b: { c: 1 } }))

console.log(getDepth([1, [2, [3, [4, [5]]]]]))
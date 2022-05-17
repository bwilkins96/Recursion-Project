/***********************************************************************
Write a function called `subsets` that will return all subsets of an array.

Examples:

subsets([]) // [[]]
subsets([1]) // [[], [1]]
subsets([1, 2]) // [[], [1], [2], [1, 2]]
subsets([1, 2, 3]) // [[], [1], [2], [1, 2], [3], [1, 3], [2, 3], [1, 2, 3]]

Hint: For subsets([1, 2, 3]), there are two kinds of subsets:
  1. Those that do not contain 3 (all of these are subsets of [1, 2]).
  2. For every subset that does not contain 3, there is also a corresponding
     subset that is the same, except it also does contain 3.
***********************************************************************/

const subsetsI = arr => {
  let subArr = [];
  //if (arr.length <= 1) {return arr}

  for (let i1 = 0; i1 < arr.length; i1++) {
    for (let i2 = i1 + 1; i2 <= arr.length; i2++) {
      subArr.push(arr.slice(i1, i2))
    }
  }

  return subArr;
}

const subsets = arr => {
  if (arr.length <= 1) return [arr];
  else {
  	subarr = subsets(arr.slice(1));
    console.log(subarr)
  	return subarr.concat(subarr.map(e => e.concat(arr[0])), [[arr[0]]]);
  }
}

//let c = []
//let a = [1,2,3,4]
//let b = c.concat(c.map(e => e.concat(a[0])), [[a[0]]]);

//console.log("b: " + b)

/* const subsets = arr => {
  let subArr = [];
  if (arr.length == 0) {return []}

  for (let i = 1; i <= arr.length; i++) {
    subArr.push(arr.slice(0, i));
  }

  subArr.push(...subsets(arr.slice(1)));

  return subArr;
} */
// :(

console.log(subsets([])) // [[]]
console.log(subsets([1])) // [[], [1]]
console.log(subsets([1, 2])) // [[], [1], [2], [1, 2]]
console.log(subsets([1, 2, 3])) // [[], [1], [2], [1, 2], [3], [1, 3], [2, 3], [1, 2, 3]]

/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = subsets;
} catch (e) {
  module.exports = null;
}

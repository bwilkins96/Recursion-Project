/***********************************************************************
Write a recursive function called `sumToN` that takes in a number and returns
the sum of all the numbers from 0 to that number. Return null for any input
number below 0.

Examples:

sumToN(5) // returns 15
sumToN(1)  // returns 1
sumToN(9)  // returns 45
sumToN(-8)  // returns null
***********************************************************************/

const sumToN = num => {
  if ( num < 0 ) {return null}
  else if (num === 0) {return 0}

  return num + sumToN(num - 1);
}



let a = sumToN(5) // returns 15
let b = sumToN(1)  // returns 1
let c = sumToN(9)  // returns 45
let d = sumToN(-8)  // returns null

console.log(a, b, c, d);
/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = sumToN;
} catch (e) {
  module.exports = null;
}

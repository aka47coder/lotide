//assertArraysEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS

const eqArrays = require('./eqArrays');

function assertArraysEqual(arr1,arr2){
  //console.log(arr2 , arr1);
  if (eqArrays(arr1,arr2)){
    return `😀 Assertion Passed: ${arr1} === ${arr2} `;
  }
  else {
    return `❌ Assertion Failed: ${arr1} !== ${arr2}`;
    
  }
  
}
module.exports = assertArraysEqual;
//console.log(assertArraysEqual(eqArrays([1, 2,2], [1, 2, 3]), true));




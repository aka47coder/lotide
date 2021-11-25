// TEST/ASSERTION FUNCTIONS
const eqArrays = function(x) {
  //...
  if (x===true){
    return `😀 Assertion Passed: ${true} === ${x} `;
  }
  
  else {
    return `❌ Assertion Failed: ${false} !== ${false}`
    
  }
  
}

const assertArraysEqual = function(actual, expected) {
  //...
  var q = 0;
  for (let i = 0;i < actual.length;i++){
  
      if (actual[i] === expected[i]){
        q=q+1;
      }
        
    }
    if (q===expected.length){
      return true;
    }else{
    return false;
    }
}

// ACTUAL FUNCTION
const middle = function(array) {
  //...
  if (array.length===0||array.length===1||array.length===2){
    return [];
  }
  if (array.length%2===0){
    var middile=[]
    middile.push(array[(array.length/2)-1])
    middile.push(array[array.length/2])
    return middile;
  }
  if (array.length%2!==0){
    var middile=[]
    middile.push(array[(array.length/2)-0.5])
    
    return middile;
  }
}

// TEST CODE
// ...
console.log(eqArrays(assertArraysEqual(middle([1]),[]))) // => []
console.log(middle([1, 2])) // => []
//console.log(eqArrays(true));
console.log(middle([1, 2, 3])) // => [2]
console.log(middle([1, 2, 3, 4, 5])) // => [3]

console.log(middle([1, 2, 3, 4])) // => [2, 3]
console.log(middle([1, 2, 3, 4, 5, 6])) // => [3, 4]

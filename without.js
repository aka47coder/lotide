//assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS

function assertEqual(eqArrays){
  if (eqArrays){
    return `😀 Assertion Passed: true === true `;
  }
  
  
}


  

// console.log(assertEqual(without([0, 1,2], [1, 2, 3]), true));
// console.log(without([0, 1,2], [1, 2, 3]));

function without(mainArr, arryRem){
  const result = [];
  for (let i = 0; i < mainArr.length; i++) {
    const element = mainArr[i];
    if (!arryRem.includes(element)){
      //console.log(`we are removing element ${element}`)
      result.push(element)
    }   
  }
 // console.log('results is ===========================================', result)
  return result;
}

const words = ["hello", "world", "lighthouse", 7, 10, 17, 20];
console.log(assertEqual(without(words, ["world", 10]))); // no need to capture return value for this test case
//[hello,world]

// Make sure the original array was not altered by the without function
// assertArraysEqual(words, ["hello", "world", "lighthouse"]);


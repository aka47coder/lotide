assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS

function eqArrays(arr1,arr2){
  
  var q = 0;
  for (let i = 0;i < arr1.length;i++){
  
      if (arr1[i] === arr2[i]){
        q=q+1;
      }
        
    }
    if (q===arr2.length){
      return true;
    }
}

function assertEqual(eqArrays,x){
  if (eqArrays===x){
    return `😀 Assertion Passed: ${eqArrays} === ${x} `;
  }
  else {
    return `❌ Assertion Failed: ${eqArrays} !== ${x}`
    
  }
  
}

console.log(assertEqual(eqArrays([1, 2,3], [1, 2, 3]), true));




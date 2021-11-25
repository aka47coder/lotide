const words = ["ground", "control", "to", "major", "tom"];

function eqArrays(arr1,arr2){
   console.log(arr1)
  var q = 0;
  for (let i = 0;i < arr1.length;i++){
  
      if (arr1[i] === arr2[i]){
        q=q+1;
      }
        
    }
    if (q===arr2.length){
      return [true,arr1,arr2];
    }else{
    return [false,arr1,arr2];
    }
}

function assertEqual(eqArrays){
 
  if (eqArrays[0]===true){
    return `😀 Assertion Passed: ${eqArrays[1]} === ${eqArrays[2]} `;
  }
  else {
    return `❌ Assertion Failed: ${eqArrays[1]} === ${eqArrays[2]} `;
    
  }
  
}
const map = function(array, callback) {
  // empty for now :)
  
  
  const results = [];
   
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
 
  
}
const results1 = map(words, word => word[0]);
console.log(assertEqual(eqArrays(results1,[ 'g', 'c', 't', 'm', 't' ])));
console.log(assertEqual(eqArrays(results1,[ 'g', 'c', 'h', 'm', 't' ])));

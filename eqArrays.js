console.log(eqArrays([1, 2, 3], [1, 2, 3]))// => should PASS

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

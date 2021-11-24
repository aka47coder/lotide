//assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS

function assertEqual(eqArrays,x){
  if (eqArrays===x){
    return `😀 Assertion Passed: ${eqArrays} === ${x} `;
  }
  else {
    return `❌ Assertion Failed: ${eqArrays} !== ${x}`
    
  }
  
}
function without(x,y){
  var q123=[]
  var q1234=[]
  for (let i = 0;i < x.length;i++){
    if (x[i] === y[i]){
      q123.push(x[i])
      q1234.push(y[i])
  }
}
 var q=0;
for (let i = 0;i < q123.length;i++){
 
if (q1234[i] === q123[i]){
        q=q+1;
      }
      
    }
    if (q123.length>0){
    if (q===q123.length){
      return true;
    }
    }
    else{
      return false;
    }
  
  
}
console.log(assertEqual(without([0, 1,2], [1, 2, 3]), true));




function eqArrays(arr1,arr2){
  
  var q = 0;
  for (let i = 0;i < arr1.length;i++){
  
      if (arr1[i] === arr2[i]){
        q=q+1;
      }
        
    }
    if (q===arr2.length&&q===arr1.length){
      return true;
    }
    else{
      return false;
    }
}
const eqObjects = function(object1, object2) {
  var result1 = Object.entries(object1);
  //console.log(result1.length);
  var result2 = Object.entries(object2);
  //console.log(result2);
  if (result1.length===result2.length){
    var b=0;
    var b123;
        for (let item1 in object1){
          for (let item2 in object2){
            
            if (object1[item1]===object2[item2]){
              b++;
              
            }
            var bq=object1[item1]===object2[item2];
            if (bq===false){
              b12345=object1[item1];
              c12345=object2[item2];
              
              if (eqArrays(b12345,c12345)===true){
                b123=eqArrays(b12345,c12345);
                b++;
              }
              
             
            }
            
          }
        }
        console.log(b)
        
        if (Object.keys(object1) .length===b){
          return [ab,true];
        }
  }
  
  else{
    return [ab,false];
  }
    return [ab,false];
};
const assertEqual = function(actual, expected) {
  const inspect = require('util').inspect; 
  if (actual[1] === true) {
    console.log(`😀 Assertion Passed: ${inspect(actual[0])} === ${inspect(expected)}`);

  } else {
    console.log(`❌ Assertion Failed: ${inspect(actual[0])} !== ${inspect(expected)}`);
  }
};

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertEqual(eqObjects(ab, ba),{ b: "2", a: "1" }); // => true

const abc = { a: "1", b: "2", c: "3" };
assertEqual(eqObjects(ab, abc),{ a: "1", b: "2", c: "3" });; // => false

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd, dc),{ d: ["2", 3], c: "1" }); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2),{ c: "1", d: ["2", 3, 4] }); // => false

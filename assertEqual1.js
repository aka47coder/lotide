
const assertEqual1 = function(actual, expected) {
  /*var q = 0;
  for (let i = 0;i < actual.length;i++){
  }
      if (actual[i] === expected[i]){
      }
        q=q+1;
    }
  }
  var p;
  if ( q === actual.length && q === expected.length){
    p=true;
  }
  if (p) {
    console.log(`😀 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌ Assertion Failed: ${actual} !== ${expected}`);
  }*/
  if (typeof actual === "number") {
    if (actual === expected) {
      return console.log(`😀 Assertion Passed: ${actual} === ${expected} `);
    } else if (actual !== expected) {
      return console.log(`❌ Assertion Failed: ${actual} !== ${expected}`);
    }
  }

  for (let i = 0; i < actual.length; i++) {
    if (actual[i] !== expected[i]) {
          
      return console.log(`❌ Assertion Failed: ${actual} !== ${expected}`);

    }


  }
  return console.log(`😀 Assertion Passed: ${actual} === ${expected} `);
};
module.exports = assertEqual1;
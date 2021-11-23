// FUNCTION IMPLEMENTATION

const assertEqual = function(actual, expected) {
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
const tail = function(actual) {

  let q = [];
  for (let i = 1; i < actual.length; i++) {
    q.push(actual[i]);
  }
  return q;

    

};
// TEST CODE
const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result, ["Lighthouse", "Labs"]); // => will always fail!
const words = ["Yo Yo", "Lighthouse", "Labs"];
//console.log("before",words.length)
tail(words); // no need to capture the return value since we are not checking it
//console.log("after",words.length)
assertEqual(words.length, 3); // original array should still have 3 elements!

//console.log(typeof [12,45,756])

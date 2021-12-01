
const middle = require("../middle");
//const assertArraysEqual = require("../assertArraysEqual");
const assert = require('chai').assert;




// console.log(assertArraysEqual(middle([1]), [])); // => []

// //console.log(eqArrays(true));

// console.log(assertArraysEqual(middle([1,2,3,4]), [2,1]));
// console.log(middle([1, 2, 3, 4, 5])); // => [3]


// console.log(middle([1, 2, 3, 4, 5, 6])); // => [3, 4]

describe("middle", () => {
    it("returns [] for [1]", () => {
      assert.deepEqual(middle([1]), []);
    });
    it("returns [2,3] for [1,2,3,4]", () => {
        assert.deepEqual(middle([1,2,3,4]), [2,3]);
      });
  });

// TEST/ASSERTION FUNCTIONS
//const assertArraysEqual = require("./assertArraysEqual");

// ACTUAL FUNCTION
const middle = function (array) {
  //...
  if (array.length === 0 || array.length === 1 || array.length === 2) {
    return [];
  }
  if (array.length % 2 === 0) {
    var middile = [];
    middile.push(array[array.length / 2 - 1]);
    middile.push(array[array.length / 2]);
    return middile;
  }
  if (array.length % 2 !== 0) {
    var middile = [];
    middile.push(array[array.length / 2 - 0.5]);

    return middile;
  }
};
module.exports = middle;

// TEST CODE
// ...


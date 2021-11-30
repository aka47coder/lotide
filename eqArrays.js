//const assertEqual = require('./assertEqual');

function eqArrays(arr1, arr2) {
  var q = 0;
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] === arr2[i]) {
      q = q + 1;
    }
  }
  if (q === arr2.length && q === arr1.length) {
    return true;
  } else {
    return false;
  }
}
module.exports = eqArrays;
// => should PASS

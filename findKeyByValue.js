const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};
function findKeyByValue(m,y){
 for (let item in m){
    if (m[item]===y){
      return item;
    }
 }
}
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`😀 Assertion Passed: ${actual} === ${expected}`);

  } else {
    console.log(`❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};
//console.log(findKeyByValue(bestTVShowsByGenre, "The Wire"));
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);

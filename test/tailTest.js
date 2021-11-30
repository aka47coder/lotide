
const tail = require('../tail.js');
const assertEqual1 = require('../assertEqual1');
const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual1(result, ["Lighthouse", "Labs"]); // => will always fail!
const words = ["Yo Yo", "Lighthouse", "Labs"];
//console.log("before",words.length)
tail(words); // no need to capture the return value since we are not checking it
//console.log("after",words.length)
assertEqual1(words.length, 3); // original array should still have 3 elements!
const findKey = function(array, callback) {
  // ...
 
   const results = [];
   for (let item in array){
     if (callback(array[item])===true){
       return item;
     };
     
   }
 
  return results;
  
}
var result1=findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2) // => "noma"

console.log(result1);

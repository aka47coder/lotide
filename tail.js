// FUNCTION IMPLEMENTATION


const tail = function(actual) {

  let q = [];
  for (let i = 1; i < actual.length; i++) {
    q.push(actual[i]);
  }
  return q;

    

};
// TEST CODE
module.exports = tail;
//module.exports = assertEqual1;



//console.log(typeof [12,45,756])

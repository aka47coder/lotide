const assertEqual = function(o1, o2) {
  for(var p in o1){
    if(o1.hasOwnProperty(p)){
        if(o1[p] !== o2[p]){
            return false;
        }
    }
}
for(var p in o2){
    if(o2.hasOwnProperty(p)){
        if(o1[p] !== o2[p]){
            return false;
        }
    }
}
return true;
};
var countLetters=function(string){
  var freq = {};
  for (var i=0; i<string.length;i++) {
      var character = string.charAt(i);
      if (!freq[character]) {
         freq[character]=[i];
      } else {
         freq[character].push(i);
      }
  }

  return freq;
}
console.log(countLetters('NEWWWCFG'));
console.log(assertEqual(countLetters('NEWWWCFG'),{ N: 1, E: 1, W: 3, C: 1, F: 1, G: 1 }))

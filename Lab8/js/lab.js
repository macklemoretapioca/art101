// index.js - purpose and description here
// Author: Connor Maynard
// Date: 10/28/24

//function to calculate square root
function MultiplyDis(x){
  var results = x * x;
  return results;
}

//print result
console.log("Square these up", MultiplyDis(5));

array = [3, 19, 44, 98]
console.log("My array", array);

var result = array.map(MultiplyDis);
//will return multiplied numbers 
console.log("Test of square on array", result);

var result = array.map (function(x){
  return x/4;
})
//should return array values /4
console.log("Array divided by 4", result);










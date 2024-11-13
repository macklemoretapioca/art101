// lab.js  - 
// Author: Connor Maynard
// Date: 11/14/24

//sorting hat function
function sortingHat(str) {
  len = str.length;
  mod = len % 4;
  if (mod == 0) {
    return "Slytherin"
  }

  if (mod == 1) {
    return "Ravenclaw"
  }

  if (mod == 2) {
    return "HufflePuff"
  }

  if (mod == 3) {
    return "Gryffindor"
  }

}

var mybutton = document.getElementById("button");
mybutton.addEventListener("click", function(){
    var name = document.getElementById("input").value;
    var house = sortingHat(name);
    newText = "<p>You have been sorted into " + house + "</p>";
    document.getElementById("output").innerHTML = newText;
})









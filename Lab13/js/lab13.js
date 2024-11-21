// lab.js  - 
// Author: Connor Maynard
// Date: 11/18/24

$(document).ready(function () {
  function fizzBuzz() {
      let oneLongString = ""; 
      for (let num = 1; num <= 200; num++) {
          let output = "";
          if (num % 3 === 0) output += "Fizz";
          if (num % 5 === 0) output += "Buzz";
          if (num % 7 === 0) output += "Boom";
          oneLongString += (output ? output + "!" : num) + "<br>";
      }

      // Output 
      $("#output").html(oneLongString);
  }

  fizzBuzz();
});











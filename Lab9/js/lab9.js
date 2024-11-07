// lab.js - This simple JavaScript/jQuery script uses buttons to modify some elements on the page
// Author: Connor Maynard
// Date: 11/4/24

// add button to challenge section
$("#Challenge").append("<button id='button-Challenge'>Make Special</button>");

// button to problems
$("#Problems").append("<button id='button-Problems'>Make Special</button>");

// add a click listener to the challenge button
$("button-Challenge").click(function(){
  // now add (or subtract) the "special" class to the section
  $("#Challenge").toggleClass("special");
});



  









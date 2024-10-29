// index.js - purpose and description here
// Author: Connor Maynard
// Date: 10/28/24

// Sortusername - a function that sorts the letter of the input
function sortusername() {
  var userName = window.prompt("Time to sort this username cmon now");
  console.log("userName=", userName);
  // split string to array
  var nameArray = userName.split('');
  console.log("nameArray =", nameArray);
  // sort the array
  var nameArraySort = nameArray.sort();
  console.log("nameArraySort =", nameArraySort);
  // Join array back to a string
  var nameSorted = nameArraySort.join('');
  console.log("nameSorted =", nameSorted);
  // Did the long version only to work on the function elements
  return nameSorted;
}

// output
document.writeln("Oh hey, I've fixed your name: ",
    sortUserName(), "</br>");







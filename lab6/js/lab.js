// index.js - purpose and description here
// Author: Your Name
// Date:

// Define Variables
myTransport = ["Mazda Miata", "Friends"]

// create object for MyMainRide
var MyMainRide={
  make: "Mazda",
  model: "Miata",
  color: "Black",
  year: "1996",
  age: function() {
      return 2024 - this.year;
      }
}

// output
document.writeln("My Main Ride: <pre>", 
  JSON.stringify(MyMainRide, null, '\t'), "</pre>");






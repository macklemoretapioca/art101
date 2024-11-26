// lab.js  - 
// Author: Connor Maynard
// Date: 11/25/24

// Add a click event to the button
$("#activate").click(function () {
  // Using the core $.ajax() method
  $.ajax({
      url: "https://api.chucknorris.io/jokes/random",
      type: "GET",
      dataType: "json",
      success: function (data) {
          $("#output").html(`<p>${data.value}</p>`);
          console.log(data);
      },
      error: function (jqXHR, textStatus, errorThrown) {
          console.error("Error:", textStatus, errorThrown);
          $("#output").html(`<p>Error fetching data. Please try again.</p>`);
      },
  });
});











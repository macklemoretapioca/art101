// lab.js  - 
// Author: Connor Maynard
// Date: 12/2/24

// Using the core $.ajax() method
$.ajax({
    // The URL for the request (from the api docs)
    url: "https://xkcd.com/info.0.json",
    // The data to send (will be converted to a query string)
    data: { 
          },
    // Whether this is a POST or GET request
    type: "GET",
    // The type of data we expect back
    dataType : "json",
    // What do we do when the api call is successful
    //   all the action goes in here
    success: function(comicObj) {
        // do stuff
        console.log(comicObj);

        $("#output").append(`<h3>${comicObj.title}</h3>`);
            $("#output").append(`
                <img src="${comicObj.img}" 
                     alt="${comicObj.alt}" 
                     title="${comicObj.alt}">
            `);
    },

    
    // What we do if the api call fails
    error: function (jqXHR, textStatus, errorThrown) { 
        // do stuff
        console.log("Error:", textStatus, errorThrown);
    }
})









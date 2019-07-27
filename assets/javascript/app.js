

function displayBreweries() {

    var queryURL = "https://api.openbrewerydb.org/breweries?by_city=" + city + "";
    var city = $("#event").val();

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        console.log(response);


        var breweries = response;
        for (var i = 0; i < breweries.length; i++) {
            //  Creating variables to hold brewerie information
            var brewery = {
                name: breweries[i].name,
                postalCode: breweries[i].postal_code,
                type: breweries[i].brewery_type,
                city: breweries[i].city,
                phone: breweries[i].phone,
                state: breweries[i].state,
                street: breweries[i].street,
                url: breweries[i].website_url
            };



            console.log(brewery);

            var tr = $("<tr>");

            var tdName = $("<td>").text(brewery.name);
            var tdPostalCode = $("<td>").text(brewery.postalCode);
            var tdType = $("<td>").text(brewery.type);
            var tdCity = $("<td>").text(brewery.city);
            var tdPhone = $("<td>").text(brewery.phone);
            var tdState = $("<td>").text(brewery.state);
            var tdStreet = $("<td>").text(brewery.street);
            var tdUrl = $("<td>").text(brewery.url);


            tr.append(tdName).append(tdType).append(tdPhone).append(tdStreet).append(tdCity).append(tdState).append(tdPostalCode).append(tdUrl);

            $(".breweries").append(tr);
            // $(".breweries").append(brewery.name);


            // $(".breweries").append(breweries[i].name + " ");
            // $(".breweries").append(breweries[i].postal_code);
        }

    });
}
displayBreweries();


function displayEvents() {

    var queryURL = "https://app.ticketmaster.com/discovery/v2/events.json?apikey=TSEGa9L3UMUnkG8jrVBHViun6NdHepmA&postalCode=32803";

    $.ajax({

        url: queryURL,
        method: "GET"
    }).then(function (response) {
        // console.log(response);
        for (var i = 0; i < response._embedded.events.length; i++) {
            var event = response._embedded.events;
            // console.log (event[0].dates.start.dateTime); 
        }
    });
}

displayEvents();


// console.log("works");


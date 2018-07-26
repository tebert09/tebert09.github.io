//////// Google Map = API
// on page load, google maps shows user's location
// if location services off, map shows minneapolis
// map should zoom, have markers of restaurants

function initMap() {
    var map = new google.maps.Map(document.getElementById('map'), {
        center: {
            lat: 44.946017,
            lng: -93.300276
        },
        zoom: 10,
        zoomControl: true,
        mapTypeControl: true,
        scaleControl: true,
        streetViewControl: true,
        rotateControl: true,
        fullscreenControl: true
    });
}

/////// Search 
// as user searches, restaurants filter below
// restaurants animate in a quick, scramble fashion


/////// Filters
// not for this project


/////// Favorites
// user clicks the star 
// star changes colors
// restaurant is added to favorites list (side column)

/////// View more
// on page load, user sees first ~4 restaurants
// when they click "view more" the next 4 will show up
// page gets longer

/////// Rating
// to rate the restaurant, user clicks on the restaurant box to flip the card
// card flips and grows with animation
// can rate (1-5 scale) and comment
// on submit, card flips to "thank you for your rating" screen
// click card again, card flips back to info

/////// JS Object
// each restaurant is an object 

/////// Questions
// How detailed of a site?
// What other JS requirements? (object, DOM manipulation, API/Firebase, GIT)
// think about data structure in firebase (users, ratings, )
// keep in mind what needs to be grouped together.
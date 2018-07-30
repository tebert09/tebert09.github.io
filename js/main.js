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

[
 {
   "Name": "56 Brewery",
   "Address": "3055 NE Columbia Ave Suite 102, Minneapolis, MN 55418",
   "Food Type": "Brewery",
   "Rating": 4
 },
 {
   "Name": "612 Brew",
   "Address": "945 Broadway St NE, Minneapolis, MN 55413",
   "Food Type": "Brewery",
   "Rating": 4
 },
 {
   "Name": "Able Brewery",
   "Address": "1121 Quincy St NE, Minneapolis, MN 55413",
   "Food Type": "Brewery",
   "Rating": 5
 },
 {
   "Name": "Bauhaus Brewery",
   "Address": "1315 Tyler St NE, Minneapolis, MN 55413",
   "Food Type": "Brewery",
   "Rating": 3
 },
 {
   "Name": "Dangerous Man",
   "Address": "1300 NE 2nd St, Minneapolis, MN 55413",
   "Food Type": "Brewery",
   "Rating": 5
 },
 {
   "Name": "Fair State Brewery",
   "Address": "2506 Central Ave NE, Minneapolis, MN 55418",
   "Food Type": "Brewery",
   "Rating": 4
 },
 {
   "Name": "HeadFlyer Brewery",
   "Address": "861 E Hennepin Ave, Minneapolis, MN 55414",
   "Food Type": "Brewery",
   "Rating": 3
 },
 {
   "Name": "Indeed Brewery",
   "Address": "711 NE 15th Ave, Minneapolis, MN 55413",
   "Food Type": "Brewery",
   "Rating": 4
 },
 {
   "Name": "Insight Brewing",
   "Address": "2821 E Hennepin Ave, Minneapolis, MN 55413",
   "Food Type": "Brewery",
   "Rating": 3
 },
 {
   "Name": "Norseman Distillery",
   "Address": "451 Taft St NE, Minneapolis, MN 55413",
   "Food Type": "Distillery",
   "Rating": 4
 },
 {
   "Name": "Sociable Cider Werks",
   "Address": "1500 Fillmore St NE, Minneapolis, MN 55413",
   "Food Type": "Cider ",
   "Rating": 5
 },
 {
   "Name": "Tattersall Distilling",
   "Address": "1620 Central Ave NE #150, Minneapolis, MN 55413",
   "Food Type": "Distillery",
   "Rating": 3
 }
]

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
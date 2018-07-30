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


var breweryList = {
 fiveSix: {
   name: "56 Brewery",
   address: "3055 NE Columbia Ave Suite 102, Minneapolis, MN 55418",
   type: "Brewery",
   rating: 4
 },
 sixOneTwo: {
   name: "612 Brew",
   address: "945 Broadway St NE, Minneapolis, MN 55413",
   type: "Brewery",
   rating: 4
 },
 able: {
   name: "Able Brewery",
   address: "1121 Quincy St NE, Minneapolis, MN 55413",
   type: "Brewery",
   rating: 5
 },
 bauhaus: {
   name: "Bauhaus Brewery",
   address: "1315 Tyler St NE, Minneapolis, MN 55413",
   type: "Brewery",
   rating: 3
 },
 dangerousMan: {
   name: "Dangerous Man",
   address: "1300 NE 2nd St, Minneapolis, MN 55413",
   type: "Brewery",
   rating: 5
 },
 fairState: {
   name: "Fair State Brewery",
   address: "2506 Central Ave NE, Minneapolis, MN 55418",
   type: "Brewery",
   rating: 4
 },
 headFlyer: {
   name: "HeadFlyer Brewery",
   address: "861 E Hennepin Ave, Minneapolis, MN 55414",
   type: "Brewery",
   rating: 3
 },
 indeed: {
   name: "Indeed Brewery",
    address: "711 NE 15th Ave, Minneapolis, MN 55413",
   type: "Brewery",
   rating: 4
 },
 insight: {
   name: "Insight Brewing",
   address: "2821 E Hennepin Ave, Minneapolis, MN 55413",
   type: "Brewery",
   rating: 3
 },
 norseman: {
   name: "Norseman Distillery",
   address: "451 Taft St NE, Minneapolis, MN 55413",
   type: "Distillery",
   rating: 4
 },
 sociableCider: {
   name: "Sociable Cider Werks",
   address: "1500 Fillmore St NE, Minneapolis, MN 55413",
   type: "Cider ",
   rating: 5
 }
}

// take breweryList object, convert to HTML
// properties go into rest-info div


function Brewery(name, address, type, rating) {
    this.name = name; 
    this.address = address; 
    this.type = type; 
    this.rating = rating; 
}

var tattersall = new Brewery('Tattersall Distilling', '1620 Central Ave NE #150, Minneapolis, MN 55413', 'Distillery', 3);

// create new breweries
// take values from input and put inside HTML
// use mustache
$('form').on('submit', function(e) {
  e.preventDefault();

  var userInput = {
    name: $('#name').val(), 
    address: $('#address').val(),
    type: $('#type').val(), 
    rating: $('#rating').val()
  }

  var source = $("#brewery").html();
  var template = Handlebars.compile(source);
  var newListItemHTML = template(userInput); 

  $('.rest-info').append(newListItemHTML);
});


/////// Search 
// as user searches, restaurants filter below
// restaurants animate in a quick, scramble fashion


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
// What other JS requirements? (object, DOM manipulation, API/Firebase, GIT)
// think about data structure in firebase (users, ratings, )
// keep in mind what needs to be grouped together.
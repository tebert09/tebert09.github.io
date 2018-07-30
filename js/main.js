
//////// Google Map = API
// on page load, google maps current list of breweries with markers
// map should zoom
// objects need lat, lng
// as user adds new brewery, marker is created

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

    var marker = new google.maps.Marker({
          position: {lat: 45.006075, lng: -93.249174},
          map: map,
          title: 'Tattersall'
    });

}

// create breweries array
// each object has name, address, type, rating
// add to this array with a user submitted form.
var breweries = [
 {
   name: "56 Brewery",
   address: "3055 NE Columbia Ave Suite 102, Minneapolis, MN 55418",
   type: "Brewery",
   rating: 4, 
   lat: 45.023837, 
   lng: -93.272108
 },
 {
   name: "612 Brew",
   address: "945 Broadway St NE, Minneapolis, MN 55413",
   type: "Brewery",
   rating: 4, 
   lat: 44.999261, 
   lng: -93.246726
 },
 {
   name: "Able Brewery",
   address: "1121 Quincy St NE, Minneapolis, MN 55413",
   type: "Brewery",
   rating: 5, 
   lat: 44.999666, 
   lng: -93.251025
 },
 {
   name: "Bauhaus Brewery",
   address: "",
   type: "Brewery",
   rating: 3, 
   lat: 45.001165, 
   lng: -93.244679
 },
 {
   name: "Dangerous Man",
   address: "1300 NE 2nd St, Minneapolis, MN 55413",
   type: "Brewery",
   rating: 5, 
   lat: 45.001288, 
   lng: -93.266419
 },
 {
   name: "Fair State Brewery",
   address: "2506 Central Ave NE, Minneapolis, MN 55418",
   type: "Brewery",
   rating: 4, 
   lat: 45.013777,  
   lng: -93.247565
 },
 {
   name: "HeadFlyer Brewery",
   address: "861 E Hennepin Ave, Minneapolis, MN 55414",
   type: "Brewery",
   rating: 3, 
   lat: 44.992155, 
   lng: -93.243879
 },
 {
   name: "Indeed Brewery",
   address: "711 NE 15th Ave, Minneapolis, MN 55413",
   type: "Brewery",
   rating: 4, 
   lat: 45.003504, 
   lng: -93.251146
 },
 {
   name: "Insight Brewing",
   address: "2821 E Hennepin Ave, Minneapolis, MN 55413",
   type: "Brewery",
   rating: 3, 
   lat: 44.992008, 
   lng: -93.212638
 },
 {
   name: "Sociable Cider Werks",
   address: "1500 Fillmore St NE, Minneapolis, MN 55413",
   type: "Cider",
   rating: 5, 
   lat: 45.004698, 
   lng: -93.243990
 }
];

// take breweryList object, convert to HTML
// properties go into rest-info div
// for every object in the breweries array, loop through, and display name, address, type, and rating
// add divs around each property
$(function() {
  for (var i = 0; i < breweries.length; i++) {
    var txt1 = '<h3>' + breweries[i].name + '</h3>';
    var txt2 = '<div class="address">' + breweries[i].address + '</div>';
    var txt3 = '<div class="type">' + breweries[i].type + '</div>';
    var txt4 = '<div class="rating">' + breweries[i].rating + '</div>';
    $('.restaurants').append('<div class="rest-info">' + txt1 + txt2 + txt3 + txt4 + '</div>');
  }
});

//Firebase
// Initialize Firebase
var config = {
    apiKey: "AIzaSyA5KMrMHk595d0d0G0ceSgEUVuTFLbDRrY",
    authDomain: "telp-d15c4.firebaseapp.com",
    databaseURL: "https://telp-d15c4.firebaseio.com",
    projectId: "telp-d15c4",
    storageBucket: "",
    messagingSenderId: "794102786107"
};
firebase.initializeApp(config);

// Connect to Database
var database = firebase.database();


// create new breweries from user submitted form
// take values from input and put inside rest-info div
// use handlebars to template
$('form').on('submit', function(e) {
  e.preventDefault();

  var userInput = {
    name: $('#name').val(), 
    address: $('#address').val(),
    type: $('#type').val(), 
    rating: $('#rating').val()
  }

  //get HTML from handlebars template
  var source = $("#brewery").html();
  // compile handlebars
  var template = Handlebars.compile(source);
  //pass data for new brewery into the template
  var newListItemHTML = template(userInput); 

  $('#listAddition').append(newListItemHTML);
  $('input').val('');

  // store the user's brewery in firebase
  var newBrew = database.ref('breweryLocation');
  newBrew.push({
    brewery: userInput
  });
});

//create a function that queries the database for brewery additions
function getBrewery () {
    //listen for changes in brewery data
    database.ref('breweryLocation').on('value', function(results){
        // store breweries in the results we received from Firebase
        var allBreweries = results.val();
        // set empty array to add all breweries we'll append to DOM
        var userBreweries = [];
        // loop through all breweries coming from database call
        for (var item in allBreweries) {
            // create object literal with data to pass through handlebars
            var userInput = {
                name: $('#name').val(), 
                address: $('#address').val(),
                type: $('#type').val(), 
                rating: $('#rating').val()
            }
            //get HTML from handlebars template
            var source = $("#brewery").html();
            // compile handlebars
            var template = Handlebars.compile(source);
            //pass data for new brewery into the template
            var newListItemHTML = template(userInput); 
            // push newly created element to brewery array
            userBreweries.push(newListItemHTML);
        }
    });
}
// on page load, bring in all breweries
getBrewery();

/////// Questions
// how do I get these new breweries to stay on the page? 
// how to create new map markers from objects and user submissions
// doing a handlebars template for something that doesn't get submitted?



////// Need to have
// variables - done
// object - done
// API (google) - done
// updating DOM (new brewery) - done
// git - done
// Firebase 
// CRUD
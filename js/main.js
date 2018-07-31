
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
       name: "Bauhaus Brew Labs",
       address: "1315 Tyler St NE, Minneapolis, MN 55413",
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
$(function() {
// for every object in the breweries array, loop through, and display name, address, type, and rating
    for (var i = 0; i < breweries.length; i++) {
        // add divs around each property
        var txt1 = '<h3>' + breweries[i].name + '</h3>';
        var txt2 = '<div class="address">' + breweries[i].address + '</div>';
        var txt3 = '<div class="type">' + breweries[i].type + '</div>';
        var txt4 = '<div class="rating">' + breweries[i].rating + '</div>'
        $('.restaurants').append('<div class="rest-info">' + txt1 + txt2 + txt3 + txt4 + '</div>');
    }
});

//Firebase
// Initialize Firebase
var config = {
    apiKey: "AIzaSyDSNPqYLhbc3nrmozLMyyMFHZmgmN2mpWk",
    authDomain: "breweries-b04db.firebaseapp.com",
    databaseURL: "https://breweries-b04db.firebaseio.com",
    projectId: "breweries-b04db",
    storageBucket: "",
    messagingSenderId: "548449086340"
};
firebase.initializeApp(config);

// Connect to Database
var database = firebase.database();

var breweryData = {};

// create new breweries from user submitted form
// take values from input and put inside rest-info div
// use handlebars to template
$('form').on('submit', function(e) {
    // prevent page reload
    e.preventDefault();

    //save all inputs from the user
    breweryData = {
        name: $('#name').val(), 
        address: $('#address').val(),
        type: $('#type').val(), 
        rating: $('#rating').val()
    }

    // clear form after submitting
    $('input').val('');

    // store the user's data (breweryData) in firebase
    // save as breweryLocations
    var newBrew = database.ref('breweryLocations');
    newBrew.push(breweryData);
});

//create a function that queries the database for brewery additions
function getBreweries () {
    //listen for changes in brewery data
    database.ref('breweryLocations').on('value', function (results) {

        // store breweries in the results we received from Firebase
        var allBreweries = results.val();
        //console.log(allBreweries);

        // set empty array to add all breweries we'll append to DOM

        $('.restaurants').empty();

        // loop through all breweries coming from database call
        for (var item in allBreweries) {
            // create object literal with data to pass through handlebars
            var context = {
                name: $('#name').val(), 
                address: $('#address').val(),
                type: $('#type').val(), 
                rating: $('#rating').val()
            }
            console.log(context);

            //get HTML from handlebars template
            var source = $('#brewery-template').html();
            // compile handlebars
            var template = Handlebars.compile(source);
            //pass data for new brewery into the template
            var newBreweryItem = template(context); 
            // push newly created element to brewery array
            $('.restaurants').append(newBreweryItem);
        }
    });
}
// on page load, bring in all breweries and when a new entry is added
getBreweries();


/////// Questions
// Getting Firebase to save user adds
// currently have two lists.. but maybe I shouldn't. Once firebase is working, should I just use that?
    // doing a handlebars template for something that doesn't get submitted?
    // how to creating new map markers from objects and user submissions
// GIT
    // how do I keep Google API key on GIT without getting hacked? 
    // live url looks different than just viewing from sublime


////// Need to have
// variables - done
// object - done
// API (google) - done
// updating DOM (new brewery) - done
// git - done
// Firebase 
// CRUD
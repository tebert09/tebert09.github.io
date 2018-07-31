
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
    // how to creating new map markers from objects and user submissions



////// Need to have
// variables - done
// object - done
// API (google) - done
// updating DOM (new brewery) - done
// git - done
// Firebase 
// CRUD
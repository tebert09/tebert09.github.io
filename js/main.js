
//////// Google Map = API
// on page load, google maps shows current list of breweries with markers
// map should zoom

var locations = [
    ['612 Brew', 44.999261, -93.246726, 2],
    ['Indeed Brewery', 45.003504, -93.251146, 2],
    ['Sociable Cider Werks', 45.004698, -93.243990, 1]
];

function initMap() { 
    var minneapolis = {lat: 44.988862, lng: -93.250381}
    var map = new google.maps.Map(document.getElementById('map'), {
        center: minneapolis,
        zoom: 12,
        zoomControl: true,
        mapTypeControl: true,
        scaleControl: true,
        streetViewControl: true,
        rotateControl: true,
        fullscreenControl: true
    });

    var count;

    for (count = 0; count < locations.length; count++) {  

        var marker = new google.maps.Marker({
            position: new google.maps.LatLng(locations[count][1], locations[count][2]),
            map: map
        });

        marker.info = new google.maps.InfoWindow({
            content: locations [count][0]
        });

        google.maps.event.addListener(marker, 'click', function() {  
            // this = marker
            var marker_map = this.getMap();
            this.info.open(marker_map, this);
            // Note: If you call open() without passing a marker, the InfoWindow will use the position specified upon construction through the InfoWindowOptions object literal.
        });
    }

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

        //$('.restaurants').empty();

        // loop through all breweries coming from database call
        for (var brewery in allBreweries) {
            // create object literal with data to pass through handlebars
            var context = {
                name: allBreweries[brewery].name, 
                address: allBreweries[brewery].address,
                type: allBreweries[brewery].type, 
                rating: allBreweries[brewery].rating
            }

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
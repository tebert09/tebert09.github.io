function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 44.946017, lng: -93.300276},
    zoom: 8, 
      zoomControl: true,
  mapTypeControl: true,
  scaleControl: true,
  streetViewControl: true,
  rotateControl: true,
  fullscreenControl: true
  });
}

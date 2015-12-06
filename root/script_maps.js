
var directionsDisplay;
var directionsService = new google.maps.DirectionsService();
var map;

function initialize() {
    var beaches = {"beaches":[
    {
      "nombre" : "Pimentel",
      "lat" : -6.8385667,
      "lng" : -79.9376798,
    },
    {
      "nombre" : "Las Rocas",
      "lat" : -6.849837,
      "lng" : -79.937633,
    },
    {
      "nombre" : "Santa Rosa",
      "lat" : -6.878607,
      "lng" : -79.924992,
    },
    {
      "nombre" : "Puerto Eten",
      "lat" : -6.933170,
      "lng" : -79.866226,
    },
    {
      "nombre" : "San José",
      "lat" : -6.768344,
      "lng" : -79.972566,
    }
  ]};

  directionsDisplay = new google.maps.DirectionsRenderer();
  var Pimentel = new google.maps.LatLng(-6.8385667, -79.9376798);
  var mapOptions = {
    zoom: 12,
    center: Pimentel
  }
  
  map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

  //Pimentel
  var PimentelUbi = {lat: beaches.beaches[0].lat, lng: beaches.beaches[0].lng};
  var titleP = beaches.beaches[0].nombre;
  var image = 'beach.png';

  var marker = new google.maps.Marker({
    map: map,
    position: PimentelUbi,
    title: titleP,
    icon: image
  });

  //Santa Rosa
  var PimentelUbi = {lat: beaches.beaches[2].lat, lng: beaches.beaches[2].lng};
  var titleP = beaches.beaches[2].nombre;
  var image = 'beach.png';

  var marker = new google.maps.Marker({
    map: map,
    position: PimentelUbi,
    title: titleP,
    icon: image
  });

  var image = 'beach.png';
  //FOR
  for (var i = 0; i < beaches.beaches.length; i++) {
    var position = {lat: beaches.beaches[i].lat, lng: beaches.beaches[i].lng};
    var title = beaches.beaches[i].nombre;

    var marker = new google.maps.Marker({
    map: map,
    position: position,
    title: title,
    icon: image
    });
  };

  directionsDisplay.setMap(map);
}

google.maps.event.addDomListener(window, 'load', initialize);
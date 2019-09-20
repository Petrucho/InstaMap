// document.addEventListener('DOMContentLoaded', event => {
  function initMap() {
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 8,
      center: { lat: -34.397, lng: 150.644 },
    });
    var geocoder = new google.maps.Geocoder();

    document.getElementById('submit').addEventListener('click', function() {
      geocodeAddress(geocoder, map);
    });

    google.maps.event.addListener(map, 'click', function(event) {
      console.log(`Catch click on MAP!`);
      alert(`latLng:${event.latLng.lat()}   latLng:${event.latLng.lng()}`);
      // document.getElementById('latlongclicked').value = event.latLng.lat()
      // document.getElementById('lotlongclicked').value =  event.latLng.lng()
    });
  }

  function geocodeAddress(geocoder, resultsMap) {
    var address = document.getElementById('address').value;
    geocoder.geocode({ address: address }, function(results, status) {
      if (status === 'OK') {
        resultsMap.setCenter(results[0].geometry.location);
        var marker = new google.maps.Marker({
          map: resultsMap,
          position: results[0].geometry.location,
        });
      } else {
        alert('Geocode was not successful for the following reason: ' + status);
      }
    });
  }
  // function Catch

  //starting Google Maps
  // initMap();
// });

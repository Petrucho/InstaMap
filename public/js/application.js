// document.addEventListener('DOMContentLoaded', event => {
function initMap() {
  const map = new google.maps.Map(document.getElementById('map'), {
    zoom: 8,
    center: { lat: -34.397, lng: 150.644 },
  });
  const geocoder = new google.maps.Geocoder();

  document.getElementById('submit').addEventListener('click', function() {
    geocodeAddress(geocoder, map);
  });

  google.maps.event.addListener(map, 'click', async function(event) {
    console.log(`Catch click on MAP!`);

    myLatlng = new google.maps.LatLng(event.latLng.lat(), event.latLng.lng());

    let marker = new google.maps.Marker({
      position: myLatlng,
      map: map,
      title: 'Hello World!',
    });

    const contentString =
      "<div id='content'>Тут всё то про что должно быть рассказано</div><div style='float:left'><img src='https://scontent-arn2-1.cdninstagram.com/vp/b69b5f4c4cc6ceafe53f62122912da07/5E00C732/t51.2885-19/s150x150/38013895_2195250364087227_5054515632184229888_n.jpg?_nc_ht=scontent-arn2-1.cdninstagram.com'></div>";
    const infowindow = new google.maps.InfoWindow({
      content: contentString,
    });

    infowindow.open(map, marker);

    setTimeout(function() {
      infowindow.close();
    }, 2000);

    function setMapOnAll(map) {
      marker.setMap(map);
    }

    setTimeout(function() {
      setMapOnAll(null);
    }, 3000);

    // alert(`latLng:${event.latLng.lat()}   latLng:${event.latLng.lng()}`);
    // const response = await fetch(
    //   `https://api.instagram.com/v1/locations/search?lat=${event.latLng.lat()}&lng=${event.latLng.lng()}&distance=20000&access_token=1399931291.6d3da36.88a6f93df3c24ca888d118b468bb19a0`,
    // );
    // const respData = await response.json();
    // console.log(`respData: ${respData}`);
  });
}

function geocodeAddress(geocoder, resultsMap) {
  const address = document.getElementById('address').value;
  geocoder.geocode({ address: address }, function(results, status) {
    if (status === 'OK') {
      resultsMap.setCenter(results[0].geometry.location);
      const marker = new google.maps.Marker({
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

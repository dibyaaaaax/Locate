var bounds="";
var southWest="";
var northEast="";
function initMap() {

  var kathmandu = {lat: 27.7, lng: 85.3};
  
  var map = new google.maps.Map(
      document.getElementById('map'),
      {zoom: 4, center: kathmandu});
 
  var marker = new google.maps.Marker({position: kathmandu, map: map});

  google.maps.event.addListener(map, 'bounds_changed', function() {
         bounds=map.getBounds();
         southWest = bounds.getSouthWest();
		 northEast = bounds.getNorthEast();
      });
}
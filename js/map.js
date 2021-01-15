let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("gmap"), {
    center: { lat: 33.9793850904405, lng: -84.80068145991714 },
    zoom: 15,
  });
}
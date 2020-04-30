// var map = L.map('mapid').setView([39.7502,-104.9490], 17);
// L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
//          attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
//         maxZoom: 18,
//         id: 'mapbox/streets-v11',
//         tileSize: 512,
//         zoomOffset: -1,
//         accessToken: 'pk.eyJ1IjoibWNpYW44IiwiYSI6ImNrNm1kNjdyejAwb3czbG1lYjc1bWIyODIifQ.1vyq7YXe8jv8UxQJzPPx7g'
// }).addTo(map);

var gjData = "./public/data/DenverZooTrees.geojson"

var pointStyle = {
    radius: 3,
    fillColor: "#134413",
    color: "#000",
    weight: 1,
    opacity: 0.35,
    fillOpacity: 0.8
    };

let xhr = new XMLHttpRequest();
xhr.open('GET', gjData);
xhr.setRequestHeader('Content-Type', 'application/json');
xhr.responseType = 'json';
xhr.onload = function() {
    if (xhr.status !== 200) return
    var treeLayer = L.geoJSON(xhr.response, {
        pointToLayer: function (feature, latlng) {
               return L.circleMarker(latlng, pointStyle);
          }
       });
       treeLayer.addTo(map);
  };
xhr.send(); 
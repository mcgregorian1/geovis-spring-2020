var map = L.map('mapid').setView([39.7502,-104.967], 14);
L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
         attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        id: 'mapbox/streets-v11',
        tileSize: 512,
        zoomOffset: -1,
        accessToken: 'pk.eyJ1IjoibWNpYW44IiwiYSI6ImNrNm1kNjdyejAwb3czbG1lYjc1bWIyODIifQ.1vyq7YXe8jv8UxQJzPPx7g'
}).addTo(map);
        
        var geojsonFeature = {
            "type": "Feature",
            "properties": {
                "name": "Coors Field",
                "amenity": "Baseball Stadium",
                "popupContent": "This is where the Rockies play!"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-104.99404, 39.75621]
            }
        };

        var myStyle = {
            "color": "#ff7800",
            "weight": 10,
            "opacity": 0.8
        };

        var myLayer = L.geoJSON("", {
            style: myStyle
        }
        );

        myLayer.addData(geojsonFeature);
        myLayer.addTo(map);

        var myLines = [{
            "type": "LineString",
            "coordinates": [
                [-100, 40],
                [-105, 45],
                [-110, 55]
            ]
        }, {
            "type": "LineString",
            "coordinates": [
                [-105, 40],
                [-110, 45],
                [-115, 55]
            ]
        }];

        myLayer.addData(myLines);
        var ptLayer = L.geoJSON(geojsonFeature);
        myLayer.addData(myLines);

        var states = [{
            "type": "Feature",
            "properties": {
                "party": "Republican"
            },
            "geometry": {
                "type": "Polygon",
                "coordinates": [
                    [
                        [-104.05, 48.99],
                        [-97.22, 48.98],
                        [-96.58, 45.94],
                        [-104.03, 45.94],
                        [-104.05, 48.99]
                    ]
                ]
            }
        }, {
            "type": "Feature",
            "properties": {
                "party": "Democrat"
            },
            "geometry": {
                "type": "Polygon",
                "coordinates": [
                    [
                        [-109.05, 41.00],
                        [-102.06, 40.99],
                        [-102.03, 36.99],
                        [-109.04, 36.99],
                        [-109.05, 41.00]
                    ]
                ]
            }
        }];

        var theStyler = function (feature) {
            switch (feature.properties.party) {
                case 'Republican': return { color: "#ff0000" };
                case 'Democrat': return { color: "#0000ff" };
            }
        };
        
        var myLayer2 = L.geoJSON("", {
            style: theStyler
        }
        );
        
        myLayer2.addData(states);
        myLayer2.addTo(map);

        var geojsonMarkerOptions = {
            radius: 8,
            fillColor: "#ff7800",
            color: "#000",
            weight: 1,
            opacity: 1,
            fillOpacity: 0.8
        };

        myLayer3 = L.geoJSON("", {
            pointToLayer: function (feature, latlng) {
                return L.circleMarker(latlng, geojsonMarkerOptions);
            }
        });

        myLayer3.addData(geojsonFeature);
        myLayer3.addTo(map);

        function onEachOfMyFeatures(feature, layer) {
            // does this feature have a property named popupContent?
            if (feature.properties && feature.properties.popupContent) {
                layer.bindPopup(feature.properties.popupContent);
            }
        }
        var geojsonFeature = {
            "type": "Feature",
            "properties": {
                "name": "Coors Field",
                "amenity": "Baseball Stadium",
                "popupContent": "This is where the Rockies play!"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-104.99404, 39.75621]
            }
        };

        L.geoJSON(geojsonFeature, {
            onEachFeature: onEachOfMyFeatures
        }).addTo(map);


        var someFeatures = [{
            "type": "Feature",
            "properties": {
                "name": "Northglenn",
                "show_on_map": true
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-104.9811, 39.8962]
            }
        }, {
            "type": "Feature",
            "properties": {
                "name": "Thornton",
                "show_on_map": true
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-104.9719, 39.8680]
            }
        }];

        L.geoJSON(someFeatures, {
            filter: function (feature, layer) {
                return feature.properties.show_on_map;
            }
        }).addTo(map);
 /*jshint esversion: 6 */
 /*
 * google-map.js
 * This file contains code to display google map 
 *
 * @project:    GAF
 * @date:       2016-11-03
 * @author:     SAPIENTNITRO
 * @licensor:   SAPIENTNITRO
 *
 */

/**
 * renders the google map
 * @param {object} locations - list of locations
 * @param {object} config - map configurations
 */
function renderMap(container,locations =[],config = {}){
    if(container && container.length > 0){
        let mapType = config.mapType || "ROADMAP";
        let mapConfig = {
            zoom:  config.zoom || 10,
            center: new google.maps.LatLng(config.centerLat || 12.97, config.centerLng || 77.59),
            mapTypeId : google.maps.MapTypeId[mapType]
        }; 

        let map = new google.maps.Map(container[0], mapConfig),
            infowindow = new google.maps.InfoWindow(),
            marker, i;

        for (i = 0; i < locations.length; i++) {  
            marker = new google.maps.Marker({
                position: new google.maps.LatLng(locations[i][1], locations[i][2]),
                map: map
            });

            google.maps.event.addListener(marker, 'mouseover', (function(marker, i) {
                return function() {
                    if(locations[i][0] != infowindow.getContent()){
                        infowindow.setContent(locations[i][0]);
                        infowindow.open(map, marker);
                    }
                };
            })(marker, i));

            google.maps.event.addListener(marker, 'click', (function(marker, i) {
                return function() {
                    map.setZoom(14);
                    map.setCenter(marker.getPosition());          
                };
            })(marker, i));
        }
    }
}

 

   

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
 
let locationData =   {
    filterList:[{
        id:"contractor 1",
        type:"contractor",
        location:    ['Gopalan Mall', 12.9855300, 77.7083500, 3]
    },{
        id:"Distributor 1",
        type:"distributor",
        location:    ['UB City', 12.9718230, 77.5960760, 2]
    },{
        id:"Distributor 2",
        type:"distributor",
        location:    ['HAL', 12.9509290, 77.6679290, 1]
    }]
}; 

/**
 * filter map locations w.r.t. filter type
 * @param {object} mapData
 * @param {string} filterType
 * @returns{object} filtered location array
 */
function filterMapLocation(mapData,filterType){ 
    let locationData = [];
    let filteredMapData = mapData.filter((data)=>{ return data.type == filterType;});

    filteredMapData.forEach(function(data){
        if(data.location){
            locationData.push(data.location);
        }
    });

    return locationData;
}

/**
 * renders the google map
 * @param {object} locations - list of locations
 * @param {object} config - map configurations
 */
function renderMap(locations =[],config = {}){
    let mapType = config.mapType || "ROADMAP";
    let mapConfig = {
        zoom:  config.zoom || 10,
        center: new google.maps.LatLng(config.centerLat || 12.97, config.centerLng || 77.59),
        mapTypeId : google.maps.MapTypeId[mapType]
    }; 

    let map = new google.maps.Map(document.getElementById('map'), mapConfig),
     infowindow = new google.maps.InfoWindow(),
     marker, i;

    for (i = 0; i < locations.length; i++) {  
        marker = new google.maps.Marker({
            position: new google.maps.LatLng(locations[i][1], locations[i][2]),
            map: map
        });

     /**    google.maps.event.addListener(marker, 'mouseover', (function(marker, i) {
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
        })(marker, i));*/
    }
}

 var locations = filterMapLocation(locationData.filterList,"distributor");
 renderMap(locations);
 

   

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
$(document).ready(function(){
    function loadGoogleMap(){
        var script_tag = document.createElement('script');
        script_tag.setAttribute("type","text/javascript");
        script_tag.setAttribute("src","http://maps.google.com/maps/api/js?key=AIzaSyBLRBD1payUxAa1wpIiT6lMjyP8W2pHrs0");
        (document.getElementsByTagName("head")[0] || document.documentElement).appendChild(script_tag);
    }
    loadGoogleMap();

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
            
            var map = new google.maps.Map(container[0], mapConfig),
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

    function renderSearchResultForMap(data, resultContainer){
        let template = resultContainer.find("#search-map-result").html();
        let compiledCode = Handlebars.compile(template);
        let result = compiledCode(data);   
        resultContainer.html(result);
        $(".ui.rating").rating();
    }

    /* filter map locations w.r.t. filter type
     * @param {object} mapData
     * @param {string} filterType
     * @returns {object} filtered location array
     */
    function filterMapLocation(mapData,filterType){ 
        let locationData = [];
        let filteredMapData = mapData.filter((data)=>{ return data.type == filterType;});
        if(filterType){
                filteredMapData.forEach(function(data){
                if(data.location){
                    locationData.push(data.location);
                }
            });
        }else{
            mapData.forEach(function(data){
                if(data.location){
                    locationData.push(data.location);
                }
            });
        }
        return locationData;
    }
    
    /**
    * Retrieves the data from api
    * @param{string} url - api url
    * @param{function} callback - callback to be executed after data retrival 
    * @param{object} locationData - array of locations for google api
    */
    function getData(url,callback){
        $.get(url, function( data ) {
            if(callback && typeof(callback) === "function"){
                callback(data);
            }
        });
    }

    var mapContainer = $(".gaf-map-container");

    if(mapContainer.length > 0){
        $.each(mapContainer,function(index,container){
            var config = {};
            config.zoom =  $(container).data("map-zoom") || undefined;
            config.centerLat = $(container).data("center-lat") || undefined;
            config.centerLng=$(container).data("center-lng") || undefined;
            config.mapType = $(container).data("map-type") || undefined;
            let mapDataURL = $(container).data("href") || undefined;
            if(mapDataURL){
                //get data from service
                 getData(mapDataURL,function(data){
                    let locations = filterMapLocation(data.filterList);
                    let mapElement = $(container).find(".map");
                    //render google map in container
                    renderMap(mapElement,locations, config);
                    var searchNearByResults =  $(container).find(".search-result");
                    if(searchNearByResults && searchNearByResults.length>0){    
                        renderSearchResultForMap(data,searchNearByResults);
                    }
                });
            }           
        });
    } 
});




 

   

/*jshint esversion: 6 */

$(document).ready(function(){
    $.get("http://www.json-generator.com/api/json/get/bPqKNtzqxu?indent=2", function( data ) {
        if(data && data.filterList){
            var locations = filterMapLocation(data.filterList,"distributor");
            renderMap($(".about-map-container"),locations,{});
        }
    });

    /**
     * filter map locations w.r.t. filter type
     * @param {object} mapData
     * @param {string} filterType
     * @returns {object} filtered location array
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
});
 

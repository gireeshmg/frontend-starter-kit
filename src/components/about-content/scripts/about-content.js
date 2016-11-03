/*jshint esversion: 6 */

$(document).ready(function(){
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

    var locations = filterMapLocation(locationData.filterList,"distributor");
    renderMap($(".about-map-container"),locations,{});
});
 

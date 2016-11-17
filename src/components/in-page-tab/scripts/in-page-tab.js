 /*jshint esversion: 6 */
 /*
 * in-page-tab.js
 * This file contains logic related to in page tabs component 
 *
 * @project:    GAF
 * @date:       2016-11-03
 * @author:     SAPIENTNITRO
 * @licensor:   SAPIENTNITRO
 *
 */
$(document).ready(function(){
    var categoryItems = $('.slider-category-names > div');
    var originalItemOrder = [];
    if(categoryItems && categoryItems.length >0){
        var indexOfActiveItem =-1;
        $.each(categoryItems,function(index,item){
            if($(item).hasClass("active")){
                indexOfActiveItem = index;
            }
            originalItemOrder.push(item.outerHTML);
        });
        if(indexOfActiveItem !== -1){
            var moveElemsBy = indexOfActiveItem - 1; 
            console.log("jryufy"+ moveElemsBy)
            if(moveElemsBy<0 ){
                moveElemsBy = categoryItems.length;
                console.log(moveElemsBy);
            }
            originalItemOrder = originalItemOrder.concat(originalItemOrder.splice(0,moveElemsBy));         
        }
      $('.slider-category-names').html(originalItemOrder.join(" ")); 
    }

    $('.slider-category-names').slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1
    });   
});
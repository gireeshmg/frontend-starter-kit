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
    $(".short-names-category column").click(function(){
        let parentElement = $(this).parent();
    });

    $('.slider-category-names').slick({
        centerMode: true,
        centerPadding: '60px',
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 1,
    });
});
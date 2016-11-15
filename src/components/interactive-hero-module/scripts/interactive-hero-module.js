$(document).ready(function(){
	$('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: false,
    asNavFor: '.slider-nav',
    dots: true,
    arrows:false
});
$('.slider-nav').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    dots: true,
    arrows:true,
    centerMode: false,
    focusOnSelect: true
});

$('.slider').slick({
        centerMode: true,
        centerPadding: '60px',
        dots: true, /* Just changed this to get the bottom dots navigation */
        infinite: true,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 1,
       });


});
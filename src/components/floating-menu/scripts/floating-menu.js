$(document).ready(function(){
	
	$('.tabs .item').on('click',function (ev) {
            if(ev.currentTarget.id === "work"){
               $('.ui .sticky').sticky({
                    context: '#context'
                });
               $('.ui.sticky')
                .sticky('refresh'); 

 	$('.example').visibility({
                    observeChanges: false,
                    once: false,
                    offset: 50,
                    onTopPassed: function () {
                    $('.ui.sticky a').each(function(){
                        if($(this).hasClass('active'))
                            $(this).removeClass("active");
                    });
                    $('.ui.sticky a[href="#'+$(this).attr('id')+'"]').addClass('active');
            },
					onTopPassedReverse : function(){
						 $('.ui.sticky a[href="#'+$(this).attr('id')+'"]').removeClass('active');
                        },
                    onPassing: function() {
           				$('.ui.sticky a').each(function(){
                            if($(this).hasClass('active'))
                                    $(this).removeClass("active");
                        });
                        $('.ui.sticky a[href="#'+$(this).attr('id')+'"]').addClass('active');
            }
			

			
        });
 	}
        });
});
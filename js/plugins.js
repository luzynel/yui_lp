$(document).ready(function(){
    
    $(window).scroll(function() {
    
        var checkWidth = $(window).width();
        var headrH = $('header.page-header').height();
        var scrollH = $(window).scrollTop();
    
        if (checkWidth > 500) {
            if ( scrollH >= headrH) {
                $(".top-btns-fixed").css({
                    'position' : 'fixed',
                    'top' : '100px',
                    'right' : 0
                });       
            } else {
                $(".top-btns-fixed").css({
                    'position' : 'static'
                });  
            }
        } else {
            $(".top-btns-fixed").css({
                'position' : 'static'
            }); 
        }
        
    });
	
});


$(window).on('resize',function(){
		
	$(window).scroll(function() {
    
        var checkWidth = $(window).width();
        var headrH = $('header.page-header').height();
        var scrollH = $(window).scrollTop();
    
        if (checkWidth > 500) {
            if ( scrollH >= headrH) {
                $(".top-btns-fixed").css({
                    'position' : 'fixed',
                    'top' : '100px',
                    'right' : 0
                });       
            } else {
                $(".top-btns-fixed").css({
                    'position' : 'static'
                });  
            }
        } else {
            $(".top-btns-fixed").css({
                'position' : 'fixed',
                'top'   : 0
            }); 
        }
        
    });

});	




$(document).ready(function() {

    $('.caption').hover(function(){
        $('.caption').fadeOut();
    });

    $('.read-more').click(function() {
        $('.read-more').animate({left:'+=20px'},100);
    });
    
    
    
});


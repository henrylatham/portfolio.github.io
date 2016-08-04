//$('.button').someAction for a class//

$(document).ready(function() {
   $('#menu').mouseenter(function() {
       $(this).animate({
           height: '+=10px'
       });
   });
   $('#menu').mouseleave(function() {
       $(this).animate({
           height: '-=10px'
       }); 
   });
   $('#menu').click(function() {
       $(this).toggle(1000);
   }); 
});

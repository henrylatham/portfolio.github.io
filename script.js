//$('.button').someAction for a class//

$(document).ready(function() {
   $('#tagline').mouseenter(function() {
       $(this).animate({
           height: '+=10px'
       });
   });
   $('#tagline').mouseleave(function() {
       $(this).animate({
           height: '-=10px'
       }); 
   });
   $('#tagline').click(function() {
       $(this).toggle(1000);
   }); 
});

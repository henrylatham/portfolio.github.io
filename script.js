$(document).ready(function() {
   $('svg').mouseenter(function() {
       $(this).animate({
           height: '+=10px'
       });
   });
   $('svg').mouseleave(function() {
       $(this).animate({
           height: '-=10px'
       }); 
   });
   $('svg').click(function() {
       $(this).toggle(1000);
   }); 
});

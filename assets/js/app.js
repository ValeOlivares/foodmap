$(function(){
   setTimeout(function() {
      $('#splash').fadeOut(500);
   }, 3000);

});
//volver al inicio, revisar no funcionaa
/*$('#miboton').click(function({
	location.reload();
});*/  

$(document).ready(function(){
    $('.zoom').hover(function() {
        $(this).addClass('transition');
    }, function() {
        $(this).removeClass('transition');
    });
});
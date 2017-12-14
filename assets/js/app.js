$(document).ready(function(){
	$(function(){
	   setTimeout(function() {
	      $('#splash').fadeOut(500);
	   }, 3000);

	});

    $('.zoom').hover(function() {
        $(this).addClass('transition');
    }, function() {
        $(this).removeClass('transition');
    });

     $("#myInput").on("keyup", function() {
    var value = $(this).val().toLowerCase();
    $("#myList div").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
  });
});


 //volver al inicio, revisar no funcionaa
/*$('#miboton').click(function({
	location.reload();
});*/ 

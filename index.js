$(document).ready(function(){
  $(function() {
  	$("#tabs").tabs();
  	$("#config").menu();
  	$("#datepicker").datepicker({
  		inline: true
  	});

  	$( ".draggable" ).draggable({stack: "#droppable"});
  	$( ".draggable" ).resizable({animate: true, autoHide: true, ghost: true});
    $( "#droppable" ).resizable({animate: true, autoHide: true, ghost: true});
  	$( "#droppable" ).droppable({
  		over: function( event, ui ) {
  				$( this )
  			.addClass( "ui-state-highlight" )
  			.find( "p" )
  			.html("BORRAR!");
  		},
  		out: function( event, ui ) {
  				$( this )
  			.removeClass( "ui-state-highlight" )
  			.find( "p" )
  			.html( "Papelera" );
  		}
  	});
  });
});

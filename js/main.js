$(document).ready(function(){	

	$.ajaxSetup({ cache: false });  // Close AJAX cache

	$('input[type="text"]').val("");  // Reset all textfield value
	
	resetOptionValue();
	initiateTabActivation();

});

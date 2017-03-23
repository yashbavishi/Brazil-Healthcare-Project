$(document).ready(function(){

  	/* Only allow decimal numbers */
  	/*$("#age, #height, #weight, #sampleHoursAfterExposure, "
  		+ "#toxinLevel, #dose, #pbLevel, #conc").on("keypress", function (e) {
		$(this).val($(this).val().replace(/[^0-9\.]/g,''));
		if ((e.which != 46 || $(this).val().indexOf('.') != -1) && (e.which < 48 || e.which > 57)) {
			e.preventDefault();
		}
		// // Change "." to "0"
		// $("#age, #height, #weight, #sampleHoursAfterExposure, #toxinLevel, " 
		// 	+ "#dose, #pbLevel, #conc").on("blur", function () {
		// 		if ($(this).val() == ".")
		// 			$(this).val("0");
		// });
	});*/

	$("#info-form").validate({
		rules: {
			"age": {
				required: true,
      			min: 0,
			},
			"height": {
				required: true,
      			min: 0,
			},
		},
		messages: {
			"age": "Please enter valid County Name.",
			"height": "Please enter valid Year.",
		}
	});
	
	$(".acetylcysteine-form").validate({
		rules: {
			"sampleHoursAfterExposure": {
				required: true,
      			range: [4, 24]
			},
			"toxinLevel": {
				required: true,
      			min: 0,
			}
		},
		messages: {
			"sampleHoursAfterExposure": "Please enter valid data.",
			"toxinLevel": "Please enter valid data."
		}
	});

	$(".digiFab-form-1").validate({ 
		rules: {  "dose": { required: true, min: 0, } },
		messages: { "dose": "Please enter valid data." }
	});

	$(".digiFab-form-2").validate({ 
		rules: {  "level": { required: true, min: 0, } },
		messages: { "level": "Please enter valid data." }
	});

	$(".edtaDimercaprol-form").validate({ 
		rules: {  "pbLevel": { required: true, min: 0, } },
		messages: { "pbLevel": "Please enter valid data." }
	});

	$(".fomepizole-form").validate({ 
		rules: {  "conc": { required: true, min: 0, } },
		messages: { "conc": "Please enter valid data." }
	});

	$(".pyridoxine-form").validate({ 
		rules: {  "dose": { required: true, min: 0, } },
		messages: { "dose": "Please enter valid data." }
	});

});

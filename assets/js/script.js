jQuery(function(){

	$('#go').on('click', function() {
		var url = $("#qrlink").val();
	
		if ($("#qrlink").val().length > 0) {
		
			$("#output").empty();	
			
			if ($("#small").prop("checked")) {
				var size = 120
			}
			else {
				var size = 220
			}
		
			jQuery('#output').qrcode({
				width: size,
				height: size,
				text: url
			});

			var canvas = document.querySelector("#output canvas");
			var png = canvas.toDataURL("image/png");
			var jpg = canvas.toDataURL("image/jpeg");
			var random = Math.round(Math.random() * 9000 - 1000);
			
			$('#export-png').on('click', function() {
				var dl = document.createElement('a');
				dl.setAttribute('href', png);
				dl.setAttribute('download', 'qrcode-' + random + '.png');
				dl.click();
			});
	  
			$('#export-jpg').on('click', function() {
				var dl = document.createElement('a');
				dl.setAttribute('href', jpg);
				dl.setAttribute('download', 'qrcode-' + random + '.jpg');
				dl.click();
			});
		}
		else {

            $('#qrlink').attr('placeholder','Bitte URL hier eintragen');
			$('#qrlink').focus();
		}		
	});
})


$("#cleaner").on('click', function() {
	$("#qrlink").val("");
	$("#output").empty();
	location.reload(true);					
});


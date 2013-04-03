var geocoder = new google.maps.Geocoder();

clocks = document.getElementsByClassName('clock');
for( var i = 0; i < clocks.length; ++i){
    geocoder.geocode(
		{'address': (clocks[i].getElementsByClassName('label'))[0].innerHTML}, 
		function(results, status){
			if(status == google.maps.GeocoderStatus.OK){
				
			}
		}
	);
}

function setClock(clock){
	geocoder.geocode(
		{'address': address},
		function(results, status){
			if(status = google.maps.GeocoderStatus.OK){
				
			}
		}
	);	
}
function drawPin(map,place){
    var geocoder = new google.maps.Geocoder();
    geocoder.geocode({
        address: place
    }, function(results, status){
        if(status == google.maps.GeocoderStatus.OK){
            for(var i in results){
                var latlng = results[i].geometry.location;
		var marker = new google.maps.Marker({
		    position: latlng,
		    map: map
		});
		var infowin = new google.maps.InfoWindow({content: place});
		google.maps.event.addListener(marker, 'mouseover', function(){
		    infowin.open(map, marker);
                });
		google.maps.event.addListener(marker, 'mouseout', function(){
		    infowin.close();
		});
            }
        }
        else{
            alert( 'Faild：' + status );
        }
    });
}

function initialize(){
    var address = ["渋谷","恵比寿"];
    var center = "東京都千代田区丸の内一丁目";
    var geocoder = new google.maps.Geocoder();
    geocoder.geocode({
        address: center
    }, function(results, status){
        if(status == google.maps.GeocoderStatus.OK){
            var latlng = results[0].geometry.location;
            var opts = {
                zoom: 12,
                center: latlng,
                mapTypeId: google.maps.MapTypeId.ROADMAP
            };
            var map = new google.maps.Map(document.getElementById("map"), opts);
            for(var i in address){
                drawPin(map,address[i]);
            }
        }
    });
}

function getLatLng(place){
    var geocoder = new google.maps.Geocoder();
    geocoder.geocode({
        address: place
    }, function(results, status){
        for(var i in results){
            if(status == google.maps.GeocoderStatus.OK){
                var latlng = results[0].geometry.location;
                var opts = {
                    zoom: 14,
                    center: latlng,
                    mapTypeId: google.maps.MapTypeId.ROADMAP
                };

                var map = new google.maps.Map(document.getElementById("map_canvas"), opts);
                
                var marker1 = new google.maps.Marker({
                    position: latlng,
                    map: map
                });
            }
            else{
                alert( 'Faild：' + status );
            }
        }
    });
}
/*
function initialize(){
    var latlng = getLatLng("東京都港区南麻布5丁目2番32号");
    var opts = {
        zoom: 14,
        center: latlng,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    var map = new google.maps.Map(document.getElementById("map_canvas"), opts);
    
    var marker1 = new google.maps.Marker({
        position: latlng,
        map: map
    });
}
*/

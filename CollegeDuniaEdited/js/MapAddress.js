window.onload = function(){
    InitializeMap();
}

function InitializeMap() {
    $.ajax({
        url: "https://maps.googleapis.com/maps/api/geocode/json?address=" + $("#address").text() + "&key=AIzaSyBrESPPs_yH8e6iZIgbRYHFiokzhA9YUOI",
        type: 'GET',
        success: function(data){
            var response = (data);
            var mapOptions = {
                zoom: 14,
                center: {
                    lat: response.results[0].geometry.location.lat,
                    lng: response.results[0].geometry.location.lng
                }
            };
            map = new google.maps.Map(document.getElementById('map'), mapOptions);
            centerMarker();
        },
        error: function(){
            console.log('Unable to retrieve geocode');
        }
    });
}

function centerMarker() {
    $('<div/>').addClass('centerMarker').appendTo(map.getDiv());
};
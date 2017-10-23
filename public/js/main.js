$(function() {
  // Your custom JavaScript goes here
});

function initialize() {

      var styles = {
        'myThem': [
          {
          "stylers": [
              {
                  "hue": "#007fff"
              },
              {
                  "saturation": 89
              }
          ]
      },
      {
          "featureType": "water",
          "stylers": [
              {
                  "color": "#ffffff"
              }
          ]
      },
      {
          "featureType": "administrative.country",
          "elementType": "labels",
          "stylers": [
              {
                  "visibility": "off"
              }
          ]
      }
      ]};

      var i =0;
      $(".list").each(function(){

        var shoes = document.getElementsByClassName("test"+i)[0];
        var longitude = shoes.dataset.long;
        var latitude = shoes.dataset.lat;
        console.log(longitude + " " + latitude);

        var mapOptions = {
                    zoom: 6,
                    center: new google.maps.LatLng(longitude,latitude),
                    mapTypeId: google.maps.MapTypeId.ROADMAP,
                    disableDefaultUI: true,
                    mapTypeId: 'myThem'
                }

        var map = new google.maps.Map(document.getElementById('map_canvas'+i), mapOptions);
        var styledMapType = new google.maps.StyledMapType(styles['myThem'], {name: 'myThem'});
        map.mapTypes.set('myThem', styledMapType);

        i +=1;


      });
}

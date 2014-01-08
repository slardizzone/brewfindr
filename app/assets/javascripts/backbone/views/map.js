var MapView = Backbone.View.extend({

  initialize: function(opts) {
    var myLatlng = new google.maps.LatLng(opts.latitude, opts.longitude);
    console.log(this.el)
    console.log(opts.latitude)
    console.log(opts.longitude)

    var mapOptions = {
      center: myLatlng,
      zoom: 13
    };

    console.log(mapOptions)

    var map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);

    console.log(map)

    var marker = new google.maps.Marker({
      position: myLatlng,
      map: map,
      title:"Hello World!"
    });

    // marker.setMap(map)
  }
});


var MapView = Backbone.View.extend({

  initialize: function(opts) {
    var myLatlng = new google.maps.LatLng(opts.latitude, opts.longitude);

    var mapOptions = {
      center: myLatlng,
      zoom: 13
    };

    var map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);

    var marker = new google.maps.Marker({
      position: myLatlng,
      map: map,
      title:"Hello World!"
    });

  }
});


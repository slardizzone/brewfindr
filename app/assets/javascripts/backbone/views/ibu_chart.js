var IbuChartView = Backbone.View.extend({
  el: '#ibu-chart',

  initialize: function(opts) {

  var ibuMin = parseInt(opts.ibuMin)
  var ibuMax = parseInt(opts.ibuMax)
 
  var ctx = $("#ibu-chart").get(0).getContext("2d");

  var data = {
    labels : ["IBU Min/Max"],

    datasets : [
      {
        fillColor : "rgba(220,220,220,0.5)",
        strokeColor : "rgba(220,220,220,1)",
        pointColor : "rgba(220,220,220,1)",
        pointStrokeColor : "#fff",
        data : [ibuMin]

      },
      {
        fillColor : "rgba(151,187,205,0.5)",
        strokeColor : "rgba(151,187,205,1)",
        pointColor : "rgba(151,187,205,1)",
        pointStrokeColor : "#fff",
        data : [ibuMax]
      }
    ]
  }

  var options = {
    scaleOverride : true, 
    scaleSteps: 20,
    scaleStartValue: 0,
    scaleStepWidth: 5
    
  }

  new Chart(ctx).Bar(data, options);
 
  }
});
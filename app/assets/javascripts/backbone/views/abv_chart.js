var AbvChartView = Backbone.View.extend({
  el: '#abv-chart',

  initialize: function(opts) {

  var abvMin = opts.abvMin
  var abvMax = opts.abvMax

  console.log(abvMin)
  console.log(abvMax)
  //Get context with jQuery - using jQuery's .get() method.
  var ctx = $("#abv-chart").get(0).getContext("2d");

//This will get the first returned node in the jQuery collection.

  var data = {
    labels : ["ABV Min/Max"],

    datasets : [
      {
        fillColor : "rgba(220,220,220,0.5)",
        strokeColor : "rgba(220,220,220,1)",
        pointColor : "rgba(220,220,220,1)",
        pointStrokeColor : "#fff",
        data : [abvMin]

      },
      {
        fillColor : "rgba(151,187,205,0.5)",
        strokeColor : "rgba(151,187,205,1)",
        pointColor : "rgba(151,187,205,1)",
        pointStrokeColor : "#fff",
        data : [abvMax]
      }
    ]
  }

  var options = {
    scaleOverride : true, 
    scaleSteps: 20,
    scaleStartValue: 0,
    scaleStepWidth: 1
    
  }

  new Chart(ctx).Bar(data, options);
 
  }
});
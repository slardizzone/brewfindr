var SrmChartView = Backbone.View.extend({
  el: '#srm-chart',

  initialize: function(opts) {

  getSrmColor = function(srm) {
    switch(srm) {
      case 1: 
        return "rgba(254, 231, 153, 0.5)"
        break; 
      case 2: 
        return "rgba(253, 217, 120, 0.5)"
        break;
      case 3: 
        return "rgba(253, 203, 90, 0.5)"
        break;
      case 4: 
        return "rgba(252, 193, 67, 0.5)"
        break; 
      case 5: 
        return "rgba(247, 179, 36, 0.5)"
        break; 
      case 6: 
        return "rgba(245, 168, 0, 0.5)"
        break;
      case 7: 
        return "rgba(238, 158, 0, 0.5)"
        break;
      case 8: 
        return "rgba(230, 145, 0, 0.5)"
        break; 
      case 9: 
        return "rgba(227, 137, 1, 0.5)"
        break; 
      case 10: 
        return "rgba(218, 126, 1, 0.5)"
        break;
      case 11: 
        return "rgba(211, 116, 0, 0.5)"
        break;
      case 12: 
        return "rgba(203, 108, 0, 0.5)"
        break; 
      case 13: 
        return "rgba(198, 100, 1, 0.5)"
        break; 
      case 14: 
        return "rgba(191, 92, 1, 0.5)"
        break;
      case 15: 
        return "rgba(182, 83, 0, 0.5)"
        break;
      case 16: 
        return "rgba(176, 79, 0, 0.5)"
        break; 
      case 17: 
        return "rgba(172, 71, 1, 0.5)"
        break; 
      case 18: 
        return "rgba(162, 64, 1, 0.5)"
        break;
      case 19: 
        return "rgba(156, 57, 0, 0.5)"
        break;
      case 20: 
        return "rgba(150, 53, 0, 0.5)"
        break; 
      case 21: 
        return "rgba(145, 47, 0, 0.5)"
        break; 
      case 22: 
        return "rgba(140, 45, 1, 0.5)"
        break;
      case 23: 
        return "rgba(131, 37, 1, 0.5)"
        break;
      case 24: 
        return "rgba(126, 31, 1, 0.5)"
        break; 
      case 25: 
        return "rgba(119, 28, 1, 0.5)"
        break; 
      case 26: 
        return "rgba(114, 27, 0, 0.5)"
        break;
      case 27: 
        return "rgba(108, 21, 1, 0.5)"
        break;
      case 28: 
        return "rgba(103, 15, 1, 0.5)"
        break; 
      case 29: 
        return "rgba(98, 15, 1, 0.5)"
        break; 
      case 30: 
        return "rgba(91, 13, 1, 0.5)"
        break;
      case 31: 
        return "rgba(86, 12, 3, 0.5)"
        break;
      case 32: 
        return "rgba(93, 10, 2, 0.5)"
        break; 
      case 33: 
        return "rgba(80, 10, 8, 0.5)"
        break; 
      case 34: 
        return "rgba(74, 6, 5, 0.5)"
        break;
      case 35: 
        return"rgba(68, 7, 6, 0.5)"
        break;
      case 36: 
        return "rgba(66, 8, 7, 0.5)"
        break; 
      case 37: 
        return "rgba(60, 9, 8, 0.5)"
        break; 
      case 38: 
        return "rgba(57, 7, 8, 0.5)"
        break;
      case 39: 
        return "rgba(57, 8, 11, 0.5)"
        break;
      case 40: 
        return "rgba(53, 9, 10, 0.5)"
        break; 
    }
  }

  var srmMinValue = parseInt(opts.srmMin)
  var srmMaxValue = parseInt(opts.srmMax)

  var srmMinColor = getSrmColor(srmMinValue)
  var srmMaxColor = getSrmColor(srmMaxValue)

  console.log(srmMinValue)
  console.log(srmMaxValue)
  console.log(srmMinColor)
  console.log(srmMaxColor)



  var ctx = $("#srm-chart").get(0).getContext("2d");




  // switch(srmMax) {
  //   case 1: 
  //     var srmMaxColor = "rgba(254, 231, 153, 0.5)"
  //     break; 
  //   case 2: 
  //     var srmMaxColor = "rgba(253, 217, 120, 0.5)"
  //     break;
  //   case 3: 
  //     var srmMaxColor = "rgba(253, 203, 90, 0.5)"
  //     break;
  //   case 4: 
  //     var srmMaxColor = "rgba(252, 193, 67, 0.5)"
  //     break; 
  //   case 5: 
  //     var srmMaxColor = "rgba(247, 179, 36, 0.5)"
  //     break; 
  //   case 6: 
  //     var srmMaxColor = "rgba(245, 168, 0, 0.5)"
  //     break;
  //   case 7: 
  //     var srmMaxColor = "rgba(238, 158, 0, 0.5)"
  //     break;
  //   case 8: 
  //     var srmMaxColor = "rgba(230, 145, 0, 0.5)"
  //     break; 
  //   case 9: 
  //     var srmMaxColor = "rgba(227, 137, 1, 0.5)"
  //     break; 
  //   case 10: 
  //     var srmMaxColor = "rgba(218, 126, 1, 0.5)"
  //     break;
  //   case 11: 
  //     var srmMaxColor = "rgba(211, 116, 0, 0.5)"
  //     break;
  //   case 12: 
  //     var srmMaxColor = "rgba(203, 108, 0, 0.5)"
  //     break; 
  //   case 13: 
  //     var srmMaxColor = "rgba(198, 100, 1, 0.5)"
  //     break; 
  //   case 14: 
  //     var srmMaxColor = "rgba(191, 92, 1, 0.5)"
  //     break;
  //   case 15: 
  //     var srmMaxColor = "rgba(182, 83, 0, 0.5)"
  //     break;
  //   case 16: 
  //     var srmMaxColor = "rgba(176, 79, 0, 0.5)"
  //     break; 
  //   case 17: 
  //     var srmMaxColor = "rgba(172, 71, 1, 0.5)"
  //     break; 
  //   case 18: 
  //     var srmMaxColor = "rgba(162, 64, 1, 0.5)"
  //     break;
  //   case 19: 
  //     var srmMaxColor = "rgba(156, 57, 0, 0.5)"
  //     break;
  //   case 20: 
  //     var srmMaxColor = "rgba(150, 53, 0, 0.5)"
  //     break; 
  //   case 21: 
  //     var srmMaxColor = "rgba(145, 47, 0, 0.5)"
  //     break; 
  //   case 22: 
  //     var srmMaxColor = "rgba(140, 45, 1, 0.5)"
  //     break;
  //   case 23: 
  //     var srmMaxColor = "rgba(131, 37, 1, 0.5)"
  //     break;
  //   case 24: 
  //     var srmMaxColor = "rgba(126, 31, 1, 0.5)"
  //     break; 
  //   case 25: 
  //     var srmMaxColor = "rgba(119, 28, 1, 0.5)"
  //     break; 
  //   case 26: 
  //     var srmMaxColor = "rgba(114, 27, 0, 0.5)"
  //     break;
  //   case 27: 
  //     var srmMaxColor = "rgba(108, 21, 1, 0.5)"
  //     break;
  //   case 28: 
  //     var srmMaxColor = "rgba(103, 15, 1, 0.5)"
  //     break; 
  //   case 29: 
  //     var srmMaxColor = "rgba(98, 15, 1, 0.5)"
  //     break; 
  //   case 30: 
  //     var srmMaxColor = "rgba(91, 13, 1, 0.5)"
  //     break;
  //   case 31: 
  //     var srmMaxColor = "rgba(86, 12, 3, 0.5)"
  //     break;
  //   case 32: 
  //     var srmMaxColor = "rgba(93, 10, 2, 0.5)"
  //     break; 
  //   case 33: 
  //     var srmMaxColor = "rgba(80, 10, 8, 0.5)"
  //     break; 
  //   case 34: 
  //     var srmMaxColor = "rgba(74, 6, 5, 0.5)"
  //     break;
  //   case 35: 
  //     var srmMaxColor = "rgba(68, 7, 6, 0.5)"
  //     break;
  //   case 36: 
  //     var srmMaxColor = "rgba(66, 8, 7, 0.5)"
  //     break; 
  //   case 37: 
  //     var srmMaxColor = "rgba(60, 9, 8, 0.5)"
  //     break; 
  //   case 38: 
  //     var srmMaxColor = "rgba(57, 7, 8, 0.5)"
  //     break;
  //   case 39: 
  //     var srmMaxColor = "rgba(57, 8, 11, 0.5)"
  //     break;
  //   case 40: 
  //     var srmMaxColor = "rgba(53, 9, 10, 0.5)"
  //     break; 
  // }

  var data = {
    labels : ["SRM Min/Max"],

    datasets : [
      {
        fillColor : srmMinColor,
        strokeColor : "rgba(220,220,220,1)",
        pointColor : "rgba(220,220,220,1)",
        pointStrokeColor : "#fff",
        data : [srmMinValue]

      },
      {
        fillColor : srmMaxColor,
        strokeColor : "rgba(151,187,205,1)",
        pointColor : "rgba(151,187,205,1)",
        pointStrokeColor : "#fff",
        data : [srmMaxValue]
      }
    ]
  }

  var options = {
    scaleOverride : true, 
    scaleSteps: 20,
    scaleStartValue: 0,
    scaleStepWidth: 2
    
  }

  new Chart(ctx).Bar(data, options);
 
  }
});
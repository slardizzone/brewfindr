var Test = Backbone.Model.extend({

  initialize: function(opts) {
    var label = this.get("labels") || {}
    var icon = label["icon"] || "http://www.wwubap.org/wp-content/uploads/2012/03/no-available-image.png"
    var style = this.get("style") || {}
    var new_style = style["name"] || "Style Not Available"
    this.set({icon: icon, style: new_style});
  }
 
});
var Test = Backbone.Model.extend({

  initialize: function(opts) {
    var label = this.get("labels") || {}
    var icon = label["icon"] || ""
    var style = this.get("style") || {}
    var new_style = style["name"] || "Style Not Available"
    this.set({icon: icon, style: new_style});

    // beer["data"]["glass"] =     beer["data"]["glass"]     || {};
  }
 
});
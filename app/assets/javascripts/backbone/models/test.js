var Test = Backbone.Model.extend({

  initialize: function(opts) {
    var label = this.get("labels") || {}
    var icon = label["icon"] || ""
    this.set({icon: icon});

    console.log(this)

    // beer["data"]["glass"] =     beer["data"]["glass"]     || {};
  }
 
});
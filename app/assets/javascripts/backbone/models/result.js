var Result = Beer.extend({

  initialize: function(opts) {
    this.id = opts.id
    console.log("OPTS ID " + this.id)
  },

  getBeerData: function() {
    $.ajax({
      url: "/beer/?q=" + this.get("id"),
      type: "GET",
      success: console.log("worked"),
      dataType: json
    });
  }
});


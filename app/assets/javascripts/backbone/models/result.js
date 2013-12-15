var Result = Beer.extend({

  initialize: function(opts) {
    this.id = opts.id
    console.log("OPTS ID " + this.id)
  },

  getBeerData: function() {
    $.ajax({
      url: "/beer/?q=" + this.get("id"),
      type: "GET",
      datatype: "JSON",
      success: this.receiveBeer,
      context: this
    });
  },

  receiveBeer: function(beer) {
    console.log(beer["data"])
    this.name = beer["data"]["name"];
    console.log(this.name)
  }
});


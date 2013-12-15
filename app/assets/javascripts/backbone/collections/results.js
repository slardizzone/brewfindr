var Results = Backbone.Collection.extend({
  model: Result,

  url: "/beer/search/",

  initialize: function(opts) {
    this.name = opts.name;
  },

  load: function() {
    this.fetch({
      data: {name: this.name},
      reset: true
    });
  },

  parse: function(response) {
    console.log(response)
    console.log(response["data"])
    return response["data"];
  }
});



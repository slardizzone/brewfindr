var BeerResults = Backbone.Collection.extend({
  model: Beer,

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
    return response["data"];
  }
});



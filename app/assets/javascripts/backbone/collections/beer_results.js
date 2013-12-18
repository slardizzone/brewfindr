var BeerResults = Backbone.Collection.extend({
  model: Beer,

  url: "/beers/search/",

  initialize: function(opts) {
    this.name = opts.name;
    this.style = opts.style;
  },

  loadByName: function() {
    this.fetch({
      data: {name: this.name},
      reset: true
    });
  },

  parse: function(response) {
    return _.first(response["data"], 20);
  }
});




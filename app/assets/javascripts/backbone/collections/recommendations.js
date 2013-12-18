var Recommendations = Backbone.Collection.extend({
  model: Beer,

  url: "/beers/style/",

  initialize: function(opts) {
    this.id = opts.id;
  },

  load: function() {
    this.fetch({
      data: {style_id: this.id},
      reset: true
    });
  },

  parse: function(response) {
    console.log(_.sample(response["data"], 5))
    return _.sample(response["data"], 5)
  }

});

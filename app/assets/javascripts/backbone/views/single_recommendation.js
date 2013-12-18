var SingleRecommendationView = Backbone.View.extend({
  tagName: "li",
  className: "recommendations",

  initialize: function(opts) {
    this.render();
    this.name = this.model.get('name')
    console.log(this.name)
  },

  events: {
    "click" : "goToSingleBeer"
  },

  goToSingleBeer: function() {
    var id = this.model.get('id');
    var beerResult = this.model
    Backbone.history.navigate("/beer/"+ encodeURI(id), {trigger: true});
  },

  template: _.template($("script.single-rec-result[type='text/html']").html()),

  render: function() {
    this.$el.html(this.template());
  }
  
});
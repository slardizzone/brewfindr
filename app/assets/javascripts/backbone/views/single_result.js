var SingleResultView = Backbone.View.extend({

  tagName: "li",

  initialize: function(opts) {
    this.render(); 
  },

  events: {
    "click" : "goToSingleBeer"
  },

  goToSingleBeer: function() {
    console.log("Navigating to single beer...")
    var id = this.model.get('id');
    var beerResult = this.model
    Backbone.history.navigate("/beer/"+ encodeURI(id), {trigger: true});
  },

  template: _.template($("script.search-result[type='text/html']").html()),

  render: function() {
    this.$el.html(this.template());
  }
});

 
var ResultsView = Backbone.View.extend({
  tagName: "ul",

  className: "results",

  initialize: function(opts) {
    this.listenTo(this.collection, "reset", this.addAll);
    this.render();
  },

  addAll: function() {
    this.collection.each(this.addOne, this);
  },

  addOne: function(beerResult) {
    console.log(beerResult)
    var view = new SingleResultView({model: beerResult});
    this.$el.append(view.el);
  }
});




    
var ResultsView = Backbone.View.extend({
  tagName: "ul",

  className: "results",

  initialize: function(opts) {
    console.log(opts)
    console.log(this.collection.length)
    this.listenTo(this.collection, "reset", this.addAll);
    this.render();
  },

  addAll: function() {
    this.collection.each(this.addOne, this);
    console.log(this)
  },

  addOne: function(beerResult) {
    console.log(beerResult)
    var view = new SingleResultView({model: beerResult});
    this.$el.append(view.el);
  }
});




    
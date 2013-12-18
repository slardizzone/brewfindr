var ResultsView = Backbone.View.extend({
  tagName: "div",

  className: "all-results",

  template: $("script.all-results[type='text/html']").html(),

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
    this.$el.find("ul").append(view.el);
  },

  render: function() {
    this.$el.html(this.template);
  }
});




    
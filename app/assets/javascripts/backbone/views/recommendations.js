var RecommendationsView = Backbone.View.extend({
  tagName: "ul",
  className: "recommendation-list",

  initialize: function(opts) {
    this.listenTo(this.collection, "reset", this.addAll);
    $(".main-info").append(this.$el);
  },

  addAll: function() {
    this.collection.each(this.addOne, this);
  },

  addOne: function(recommendation) {
    var recView = new SingleRecommendationView({model: recommendation});
    this.$el.append(recView.el);
  },

});
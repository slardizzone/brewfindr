var BeerView = Backbone.View.extend({
  tagName: "div",

  className: "beer-view",

  initialize: function() {
    this.listenTo(this.model, "change", this.render);
    this.model.getBeerData();
    this.render();
    $("body").append(this.$el);
  },

  template: _.template($("script.single-beer[type='text/html']").html()),

  render: function() {
    this.$el.html(this.template());
  }
});



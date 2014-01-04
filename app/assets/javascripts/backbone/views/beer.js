 var BeerView = Backbone.View.extend({
  tagName: "div",

  className: "beer-view",

  initialize: function() {
    this.listenTo(this.model, "change", this.render);
    this.render();
    $("body").append(this.$el);
  },

  events: {
    "click button":"createBeer"
  },

  createBeer: function() {
    this.model.save({name: this.model.get("name"), api_id: this.model.get("id")})
    // this.model.save({name: });
  },

  template: _.template($("script.single-beer[type='text/html']").html()),

  render: function() {
    this.$el.html(this.template());
  }

});



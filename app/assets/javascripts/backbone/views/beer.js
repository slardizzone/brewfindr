 var BeerView = Backbone.View.extend({
  tagName: "div",

  className: "beer-view",

  initialize: function() {
    this.listenTo(this.model, "change", this.render);
    this.render();
    $("body").append(this.$el);
  },

  events: {
    "click button":"createFavorite"
  },

  createFavorite: function() {
    var button = $('button')

    $.ajax({
      type: "POST",
      url: "/favorites/",
      data: {beer_id: this.model.get("id")},
      dataType: "JSON",
      success: button.text("Saved!"),
      context: this
    });
  },

  template: _.template($("script.single-beer[type='text/html']").html()),

  render: function() {
    this.$el.html(this.template());
  }

});



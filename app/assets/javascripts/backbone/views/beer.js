 var BeerView = Backbone.View.extend({
  tagName: "div",

  className: "beer-view",

  initialize: function() {
    this.listenTo(this.model, "change", this.render);
    this.render();
  },

  events: {
    "click button":"createFavorite",
    "click a.style-modal":"openStyleModal",
    "click a.brewery-modal":"openBreweryModal"
  },

  openStyleModal: function() {
    new StyleModalView();
    $('#style-modal').foundation('reveal', 'open');
  },

  openBreweryModal: function() {
    new BreweryModalView();
    $('#brewery-modal').foundation('reveal', 'open');
  },

  createFavorite: function() {
    var button = $('button')

    $.ajax({
      type: "POST",
      url: "/favorites/",
      data: {beer_id: this.model.get("id")},
      dataType: "JSON",
      success: button.text("Saved!")  ,
      context: this
    });
  },

  template: _.template($("script.single-beer[type='text/html']").html()),

  render: function() {
    this.$el.html(this.template());
  }

});



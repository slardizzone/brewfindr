var BreweryModalView = Backbone.View.extend({
  el: "#brewery-modal",

  events: {
    "click a.close-reveal-modal": "sayHello"
  },

  sayHello: function() {
    $(this.el).foundation('reveal', 'close');
  }

});
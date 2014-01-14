var StyleModalView = Backbone.View.extend({
  el: "#style-modal",

  events: {
    "click a.close-reveal-modal": "sayHello"
  },

  sayHello: function() {
    $(this.el).foundation('reveal', 'close');
  }

});
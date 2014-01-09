var ModalView = Backbone.View.extend({
  el: "#myModal",

  events: {
    "click a.close-reveal-modal": "sayHello"
  },

  sayHello: function() {
    $('#myModal').foundation('reveal', 'close');
  }

});
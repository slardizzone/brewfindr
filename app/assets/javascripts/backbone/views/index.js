var IndexView = Backbone.View.extend({
  tagName: "div",

  initialize: function() {
    this.render();
  },

  template: $("script.index[type='text/html']").html(),

  render: function() {
    this.$el.html(this.template);
  }
});


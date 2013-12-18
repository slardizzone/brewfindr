var IndexView = Backbone.View.extend({
  tagName: "div",

  initialize: function() {
    console.log("initialize beer view");
    console.log(this.el)
    this.render();
  },

  template: $("script.index[type='text/html']").html(),

  render: function() {
    this.$el.html(this.template);
  }
});


var SingleResultView = Backbone.View.extend({

  tagName: "li",

  initialize: function() {
    this.render(); 
  },

  events: {
    "click" : "sayHello"
  },

  sayHello: function() {
    console.log("hello!")
    var id = this.model.get('id')
    console.log(id)
    Backbone.history.navigate("/beer/id"+ encodeURI(id), {trigger: true});
  },

  template: _.template($("script.search-result[type='text/html']").html()),

  render: function() {
    this.$el.html(this.template());
  }
});

 
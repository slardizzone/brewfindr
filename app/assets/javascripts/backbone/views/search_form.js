var SearchFormView = Backbone.View.extend({
  el: "form.search",

  events: {
    "submit": "search"
  },

  search: function(e) {
    e.preventDefault();
    var name = this.$el.find("input[name='name']").val();
    this.el.reset(); 
    Backbone.history.navigate("/beer/search/"+ encodeURI(name), {trigger: true});
  }
});

var Router = Backbone.Router.extend({
  routes: {
    "": "index",
    "beer/search/:name": "search"
  }, 

  search: function(name) {
    this.loadView(new BeerView({name: name}));
  },

  loadView: function(view) {
    this.main && this.main.remove();
    this.main = view;
    $("body").append(view.el);
  }
});




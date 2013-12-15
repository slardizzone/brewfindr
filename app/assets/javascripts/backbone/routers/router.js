var Router = Backbone.Router.extend({
  routes: {
    "": "index",
    "beer/search/:name": "search",
    "beer/:id" : "sayHello"
  }, 

  search: function(name) {
    var results = new Results({name: name})
    this.loadView(new ResultsView({collection: results}));
    results.load();
    console.log(results)
  },

  sayHello: function() {
    console.log("hello!!!")
    this.loadView(new BeerView({model: result}))
  },

  loadView: function(view) {
    this.main && this.main.remove();
    this.main = view;
    $(".all-results").append(view.el);
  }
});




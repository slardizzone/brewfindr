var Router = Backbone.Router.extend({
  routes: {
    "": "index",
    "beer/search/:name": "search",
    "beer/:id" : "getSingleBeer"
  }, 

  search: function(name) {
    var results = new Results({name: name})
    this.loadView(new ResultsView({collection: results}));
    results.load();
  },

  getSingleBeer: function(id) {
    console.log("This is the id " + id)
    var result = new Result({id: id})
    this.loadView(new BeerView({model: result}))
  },

  loadView: function(view) {
    this.main && this.main.remove();
    this.main = view;
    $("body").append(view.el);
  }
});




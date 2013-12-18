var Router = Backbone.Router.extend({
  routes: {
    "": "index",
    "beer/search/:name": "search",
    "beer/:id": "getSingleBeer"
  }, 

  index: function() {
    this.loadView(new IndexView)
  },


  search: function(name) {
    var beerResults = new BeerResults({name: name});
    this.loadView(new ResultsView({collection: beerResults}));
    beerResults.loadByName();
  },

  getSingleBeer: function(id) {
    var result = new Result({id: id});
    this.loadView(new BeerView({model: result}));
  },


  loadView: function(view) {
    this.main && this.main.remove();
    this.main = view;
    $("body").append(view.el);
  }
});




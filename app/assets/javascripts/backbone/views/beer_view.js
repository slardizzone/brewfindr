var BeerView = Backbone.View.extend({

  template: _.template($("script[type='text/html']").html()),

  initialize: function(opts) {
    this.name = opts.name;
    this.$el.appendTo($("body"));
    this.render();
    this.fetchBeer();
  },

  render: function() {
    var compiledTemplate = this.template();
    this.$el.html(compiledTemplate);
  },

  fetchBeer: function() {
    $.ajax({
      type: "GET",
      dataType: "json",
      url: "/beer/search/?name=" + this.name,
      success: this.receiveBeer,
      context: this
    });
  },

  receiveBeer: function(beer) {
    this.beerName = beer.data[0]["name"]
    console.log(this.name)
    this.glass = beer.data[0]["glass"]["name"].toLowerCase();
    this.beerDescription = beer.data[0]["description"]
    this.abv = beer.data[0]["abv"]
    this.organic = beer.data[0]["isOrganic"]
    this.beerLabel = beer.data[0]["labels"]["large"]
    this.beerStyle = beer.data[0]["style"]["name"]
    console.log(this.style)
    this.season = beer.data[0]["available"]["name"]
    console.log(this.season)
    this.styleDescription = beer.data[0]["style"]["description"]
    console.log(this.styleDescription)
    this.render();
  }
});


// function(response){console.log(response.data[0];}


    
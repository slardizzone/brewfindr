var Result = Beer.extend({
  initialize: function() {
    this.getBeerData();
  },

  getBeerData: function() {
    $.ajax({
      url: "/beers/" + this.get("id"),
      type: "GET",
      datatype: "JSON",
      success: this.receiveBeer,
      context: this
    });
  },

  receiveBeer: function(beer) {
    console.log(beer)
   
    this.set({name:         beer["data"]["name"],
              abv:          beer["data"]["abv"],
              glass:        beer["data"]["glass"]["name"].toLowerCase(),
              available:    beer["data"]["available"]["name"],
              style:        beer["data"]["style"]["name"],
              label:        beer["data"]["labels"]["medium"],
              isOrganic:    beer["data"]["isOrganic"],
              description:  beer["data"]["description"],
              styleDescription: beer["data"]["style"]["description"],
              ibu:          beer["data"]["ibu"],
              foodPairings: beer["data"]["foodPairings"],
              styleId:      beer["data"]["style"]["id"]
    });

    var recommendations = new Recommendations({id: beer["data"]["style"]["id"]});
    console.log("Loading..." + recommendations);
    this.loadView(new RecommendationsView({collection: recommendations}));
    recommendations.load();
  }
});


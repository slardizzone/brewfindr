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
    console.log(beer["data"])
    
    beer["data"]["glass"] =     beer["data"]["glass"]     || {};
    beer["data"]["glass"]["name"] = beer["data"]["glass"]["name"] || "";
    beer["data"]["available"] = beer["data"]["available"] || {};
    beer["data"]["style"] =     beer["data"]["style"]     || {};
    beer["data"]["labels"] =    beer["data"]["labels"]    || {};

    console.log(beer["data"]["glass"]["name"])

    this.set({name:         beer["data"]["name"]                        || "N/A",
              abv:          beer["data"]["abv"]                         || "N/A",
              glass:        beer["data"]["glass"]["name"].toLowerCase() || "pint",
              available:    beer["data"]["available"]["name"]           || "N/A",
              style:        beer["data"]["style"]["name"]               || "N/A",
              label:        beer["data"]["labels"]["medium"]            || "http://placekitten.com/266/266",
              isOrganic:    beer["data"]["isOrganic"]                   || "N/A",
              description:  beer["data"]["description"]                 || "N/A",
              styleDescription: beer["data"]["style"]["description"]    || "N/A",
              ibu:          beer["data"]["ibu"]                         || "N/A",
              foodPairings: beer["data"]["foodPairings"]                || "N/A",
              styleId:      beer["data"]["style"]["id"]                 || "N/A"
    });

    var recommendations = new Recommendations({id: beer["data"]["style"]["id"]});
    console.log("Loading..." + recommendations);
    recommendations.load();
    new RecommendationsView({collection: recommendations});
  },



});


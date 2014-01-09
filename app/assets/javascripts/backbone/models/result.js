var Result = Beer.extend({

  url: "/beers/",

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
    
    beer["data"]["glass"] =     beer["data"]["glass"]     || {};
    beer["data"]["glass"]["name"] = beer["data"]["glass"]["name"] || "";
    beer["data"]["available"] = beer["data"]["available"] || {};
    beer["data"]["style"] =     beer["data"]["style"]     || {};
    beer["data"]["labels"] =    beer["data"]["labels"]    || {};

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
    recommendations.load();
    new RecommendationsView({collection: recommendations});
    new MapView({latitude: beer["data"]["breweries"][0]["locations"][0]["latitude"],
                 longitude: beer["data"]["breweries"][0]["locations"][0]["longitude"]});
  }



});


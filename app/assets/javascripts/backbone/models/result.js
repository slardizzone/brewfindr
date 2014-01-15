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

    beer["data"]["breweries"][0]["name"] = beer["data"]["breweries"][0]["name"] || {}
    beer["data"]["glass"] =                beer["data"]["glass"]     || {};
    beer["data"]["glass"]["name"] =        beer["data"]["glass"]["name"] || "";
    beer["data"]["available"] =            beer["data"]["available"] || {};
    beer["data"]["style"] =                beer["data"]["style"]     || {};
    beer["data"]["labels"] =               beer["data"]["labels"]    || {};

    this.set({name:         beer["data"]["name"]                                          || "N/A",
              abv:          beer["data"]["abv"]                                           || "N/A",
              glass:        beer["data"]["glass"]["name"].toLowerCase()                   || "pint",
              available:    beer["data"]["available"]["name"]                             || "N/A",
              style:        beer["data"]["style"]["name"]                                 || "N/A",
              label:        beer["data"]["labels"]["medium"]                              || "/assets/no_image.jpg",
              isOrganic:    beer["data"]["isOrganic"]                                     || "N/A",
              description:  beer["data"]["description"]                                   || "N/A",
              styleDescription: beer["data"]["style"]["description"]                      || "N/A",
              ibu:          beer["data"]["ibu"]                                           || "N/A",
              foodPairings: beer["data"]["foodPairings"]                                  || "N/A",
              styleId:      beer["data"]["style"]["id"]                                   || "N/A",
              brewery:      beer["data"]["breweries"][0]["name"]                          || "N/A",
              breweryStreet:beer["data"]["breweries"][0]["locations"][0]["streetAddress"] || "N/A",
              breweryCity:  beer["data"]["breweries"][0]["locations"][0]["locality"]      || "N/A",
              breweryState: beer["data"]["breweries"][0]["locations"][0]["region"]        || "N/A",
              breweryZip:   beer["data"]["breweries"][0]["locations"][0]["postalCode"]    || "N/A",
              breweryPhone: beer["data"]["breweries"][0]["locations"][0]["phone"]         || "N/A"    
    });

    var recommendations = new Recommendations({id: beer["data"]["style"]["id"]});
    recommendations.load();
    new RecommendationsView({collection: recommendations});

    new MapView({latitude: beer["data"]["breweries"][0]["locations"][0]["latitude"],
                 longitude: beer["data"]["breweries"][0]["locations"][0]["longitude"]});

    new IbuChartView({ibuMin: beer["data"]["style"]["ibuMin"],
                      ibuMax: beer["data"]["style"]["ibuMax"]});

    new AbvChartView({abvMin: beer["data"]["style"]["abvMin"],
                      abvMax: beer["data"]["style"]["abvMax"]});

    new SrmChartView({srmMin: beer["data"]["style"]["srmMin"],
                      srmMax: beer["data"]["style"]["srmMax"]});

    new AbvView();
  }



});


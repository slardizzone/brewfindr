var Result = Beer.extend({
  initialize: function() {
    this.getBeerData();
  },

  getBeerData: function() {
    $.ajax({
      url: "/beer/?q=" + this.get("id"),
      type: "GET",
      datatype: "JSON",
      success: this.receiveBeer,
      context: this
    });
  },

  receiveBeer: function(beer) {
    console.log(beer)
    // console.log(beer["data"]["name"])
    // console.log(beer["data"]["available"]["name"])
    console.log(beer["data"]["glass"]["name"])
    // console.log(beer["data"]["isOrganic"])
    // console.log(beer["data"]["labels"]["large"])
    // console.log(beer["data"]["abv"])
    // console.log(beer["data"]["description"])
    // console.log(beer["data"]["style"]["description"])
    // console.log(beer["data"]["ibu"])
    // console.log(beer["data"]["foodPairings"])

    this.set({name: beer["data"]["name"],
              abv: beer["data"]["abv"],
              glass: beer["data"]["glass"]["name"].toLowerCase(),
              available: beer["data"]["available"]["name"],
              style: beer["data"]["style"]["name"],
              label: beer["data"]["labels"]["medium"],
              isOrganic: beer["data"]["isOrganic"],
              description: beer["data"]["description"],
              styleDescription: beer["data"]["style"]["description"],
              ibu: beer["data"]["ibu"],
              foodPairings: beer["data"]["foodPairings"]
    });
  }

  // glass: function() {
  //   var glass = this.get("glass")
  //   glass = glass.toLowerCase();
  //   return glass
  // }
});


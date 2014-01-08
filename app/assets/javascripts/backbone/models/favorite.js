var Favorite = Backbone.Model.extend({

  url: "/favorites/",

  initialize: function() {
    this.getFavorite();
  },

  getFavorite: function() {
    $.ajax({
      url: "/favorites/" + this.get("id"),
      type: "GET",
      datatype: "JSON",
      success: this.receiveFavorite,
      context: this
    });
  },

  receiveFavorite: function(favorite) {
    var favorite = favorite 
    if(favorite == null) {
      $('button').text("Add to Favorites?")
    } else {
      $('button').text("Saved!")
    }
  }
 
});
var SingleRecommendationView = Backbone.View.extend({
  tagName: "li",
  className: "recommendations",

  initialize: function(opts) {
    this.render();
    this.name = this.model.get('name')
  },

  events: {
    "click" : function(e) {
      this.goToSingleBeer(e);
      this.createBeer(e);
    }
  },

  goToSingleBeer: function() {
    var id = this.model.get('id');
    Backbone.history.navigate("/beer/"+ encodeURI(id), {trigger: true});
  },

  createBeer: function() {
    $.ajax({
      type: "POST",
      url: "/beers/",
      data: {name: this.model.get("name"), api_id: this.model.get("id")},
      dataType: "JSON",
      success: this.hello,
      context: this
    });
  },

  template: _.template($("script.single-rec-result[type='text/html']").html()),

  render: function() {
    this.$el.html(this.template());
  }
  
});




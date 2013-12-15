var Result = Beer.extend({
  getBeerData: function() {
    $.ajax({
      url: "/beer/?q=" + this.get("id"),
      type: "GET",
      success: console.log("worked"),
      dataType: json
    });
  }
});


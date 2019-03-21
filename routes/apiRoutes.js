var db = require("../models");
// var keys = require("../config/keys");

module.exports = function(app) {
  // Open Weather Map API call
  app.get("/api/weather", function(req, res) {
    // retrieve lat & lng
    //req.body (do stuff)

    // var queryURL = "https://api.openweathermap.org/data/2.5/weather?lat=" + latitutde + "&lon=" + longitude + "&appid=" + keys.owm;

    var queryURL =
      "https://api.openweathermap.org/data/2.5/weather?lat=" +
      latitutde +
      "&lon=" +
      longitude +
      "&appid=" +
      "" +
      "&units=imperial";

    // initiate ajax call
    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response) {
      console.log(response);

      res.json(response);
    });

    then(function(dbExamples) {
      res.json(dbExamples);
    });
  });
  // Create a new example
  app.post("/api/examples", function(req, res) {
    db.Example.create(req.body).then(function(dbExample) {
      res.json(dbExample);
    });
  });
  // Delete an example by id
  app.delete("/api/examples/:id", function(req, res) {
    db.Example.destroy({ where: { id: req.params.id } }).then(function(
      dbExample
    ) {
      res.json(dbExample);
    });
  });
};

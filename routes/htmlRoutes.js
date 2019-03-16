// var db = require("../models");

// module.exports = function(app) {
//   // Load index page
//   app.get("/", function(req, res) {
//     db.Example.findAll({}).then(function(dbExamples) {
//       res.render("index", {
//         msg: "Welcome!",
//         examples: dbExamples
//       });
//     });
//   });

//   // Load example page and pass in an example by id
//   app.get("/example/:id", function(req, res) {
//     db.Example.findOne({ where: { id: req.params.id } }).then(function(dbExample) {
//       res.render("example", {
//         example: dbExample
//       });
//     });
//   });

//   // Render 404 page for any unmatched routes
//   app.get("*", function(req, res) {
//     res.render("404");
//   });
// };


module.exports = function(app) {

 

app.get("/home", function(req, res) {

  var foxUser = [
    {
      userID: "jsmith161",
      name: "Pedro Smith"
    }
  ];
  // Handlebars requires an object to be sent to the handlebars file.
  // User must be set as an object
  // var currentUser = foxUser[1].name;
  // console.log(currentUser);
  //Send the user object to the index.handlebars file.
  res.render("home", {
    title: "Secure Fox",
    // Need to pass object to handlebars
    name:  "Current User"
  });
});
}

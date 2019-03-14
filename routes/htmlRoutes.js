var db = require("../models");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    db.Example.findAll({}).then(function(dbExamples) {
      res.render("index", {
        msg: "Welcome!",
        examples: dbExamples
      });
    });
  });

  // Load example page and pass in an example by id
  app.get("/example/:id", function(req, res) {
    db.Example.findOne({ where: { id: req.params.id } }).then(function(dbExample) {
      res.render("example", {
        example: dbExample
      });
    });
  });

  // Route for signup page
  app.get("/signup",(req,res) => {
    res.render("signup");
    
  });

  // Route for signup page
  app.get("/login",(req,res) => {
    res.render("login");
    
  });

  // Route for signup page
  app.get("/login2",(req,res) => {
    res.render("login2");
    
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });

  



};

 
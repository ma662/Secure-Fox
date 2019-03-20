var db = require("../models");

module.exports = function(app) {
  // Set up real stuff here.
  // Get all examples
  app.get("/api/examples", function(req, res) {
    db.Example.findAll({}).then(function(dbExamples) {
      res.json(dbExamples);
    });
  });
  // Create a new example
  app.post("/api/examples", function(req, res) {
    db.Example.create(req.body).then(function(dbExample) {
      res.json(dbExample);
    });
  });

  app.post("/api/entry", function(req, res) {
    console.log(req.body.entry);
   
    db.JournalEntry.create({
      journalEntry: req.body.entry

    }).then(function(dbPost) {
      res.json(dbPost);
    });
    // res.render("/");

      // $("input").click( function( event ) {
      //   var first = $('#firstpage').val();
      //   alert("Attemping to post");
        
      //   $('#firstpage').val('');
      //   event.preventDefault();

      //   $.ajax({
      //     type: 'POST',
      //     contentType: "text/plain",
      //     url: "/api/entry"
      //     data: {
      //         entry: first,
      //     },
      //     success: function() {
      //         alert('Posted shit to db');
      //     }
      //   });
      // });
      // res.json(dbExample);
    // });
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

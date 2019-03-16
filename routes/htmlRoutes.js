

module.exports = function(app) {

 
app.get("/home", function(req, res) {


  //Next 6 lines are just test data
  var foxUser = [
    {
      userID: "jsmith161",
      name: "Pedro Smith"
    }
  ];
  // Handlebars requires an object to be sent to the handlebars file.
  // User must be set as an object

  //Send the user object to the index.handlebars file.
  res.render("home", {
    title: "Secure Fox",
    // Need to pass object to handlebars
    name:  "Current User"
  });
});
}

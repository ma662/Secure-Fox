require("dotenv").config();
const express = require("express");
const exphbs = require("express-handlebars");
const passport = require("passport");
const flash = require("connect-flash");
const session = require("express-session");

var db = require("./models");

var app = express();
var PORT = process.env.PORT || 3000;
// var PORT = 8080;

// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static("public"));


// Express session midleware
app.use(session({
  secret: "secret",
  resave: true,
  saveUninitialized: true,
}));


// Passport middleware--very imp to put after express session
app.use(passport.initialize());
app.use(passport.session());

app.use(flash());



// Handlebars
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");



// Routes
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

//passport config
require("./config/passport")(passport);


var syncOptions = { force: false };

// If running a test, set syncOptions.force to true
// clearing the `testdb`
if (process.env.NODE_ENV === "test") {
  syncOptions.force = true;
}

// Starting the server, syncing our models ------------------------------------/
db.sequelize.sync(syncOptions).then(function() {
  app.listen(PORT, function() {
    console.log(
      "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
      PORT,
      PORT
    );
  });
});

// app.listen(PORT, function() {
//   console.log("App listening on PORT " + PORT);
// });

module.exports = app;

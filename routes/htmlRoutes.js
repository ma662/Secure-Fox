var db = require("../models");
const bcrypt = require("bcryptjs");
const passport = require("passport");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    return res.render("index");
  });

  app.get("/signup", (req, res) => {
    return res.render("signup");
  });

<<<<<<< HEAD
  app.get("/home",(req,res) => {
    res.render("home");
  });

  // app.get("/text",(req,res) => {
  //   res.render("text");
    
  // });

  //log in post 
  // app.post('/login',(req,res,next) =>{
    
  //     passport.authenticate('local',{
  //     successRedirect:'/text',
  //     failureRedirect:'/login',
  //     failureFlash:true
  //     })(req,res,next);
    
  // });
  app.post('/login', 
  passport.authenticate('local',
   { failureRedirect: '/login',failureFlash:'Bad Login!'}),
   
  function(req, res,next) {
    
   res.render('home');
=======
  app.get("/login", (req, res) => {
    return res.render("login");
>>>>>>> origin/master
  });

  app.post(
    "/login",
    passport.authenticate("local", {
      failureRedirect: "/login",
      failureFlash: "Bad Login!"
    }),
    (req, res) => {
      return res.render("home");
    }
  );

  //register form post
  app.post("/signup", (req, res) => {
    let errors = [];
    let msg = [];
    if (req.body.password !== req.body.password2) {
      errors.push({ text: "Password do not match!" });
    }
    if (req.body.password.length < 4) {
      errors.push({ text: "Password must be atleast 4 characters" });
    }
    //so the form doesnt clear
    if (errors.length > 0) {
      res.render("signup", {
        errors: errors,
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        password2: req.body.password2
      });
    } else {
      //check if email already exists in the db
      db.User.findOne({ where: { email: req.body.email } }).then(user => {
        if (user) {
          errors.push({ text: "Email already Registered! Please Login." });
          res.render("signup", {
            errors: errors
          });
          //if email doesnt exist, create new account
        } else {
          const newUser = {
            name: req.body.name,
            email: req.body.email,
            password: req.body.password
          };
          //hashing the password so it get encrysted before it is saved in the database
          bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash(newUser.password, salt, (err, hash) => {
              if (err) {
                throw err;
              }
              newUser.password = hash;
              db.User.create(newUser);
              msg.push({
                text: "Thanks for Signing Up. Please Log in to Continue."
              });
              res.render("login", {
                msg: msg
              });
            });
          });
        }
      });
    }
  });

  app.get("/logout", function(req, res) {
    req.logout();
    return res.redirect("/");
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });

  // Route adding posts
  app.get("/allposts/add", (req, res) => {
    res.render("login");
  });
};

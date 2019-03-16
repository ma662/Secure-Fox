var db = require("../models");
const bcrypt = require('bcryptjs');
const passport = require('passport');

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    
      res.render("index")
    
  });

  // Load example page and pass in an example by id
  app.get("/example/:id", function(req, res) {
      res.render("example")
  });

  // Route for signup page
  app.get("/signup",(req,res) => {
    res.render("signup");
    
  });

  // Route for signup page
  app.get("/login",(req,res) => {
    res.render("login");
    
  });

  //register form post
  app.post('/signup',(req,res)=>{
    let errors =[];
    if(req.body.password != req.body.password2){
      errors.push({text:'Password do not match!'})
    }
    if(req.body.password.length < 4){
      errors.push({text:'Password must be atleast 4 characters'})
    }
    //so the form doesnt clear
    if(errors.length > 0){
      res.render('signup',{
        errors: errors,
        name:req.body.name,
        email:req.body.email,
        password:req.body.password,
        password2:req.body.password2
      })
    } else{
      const newUser = {
        name:req.body.name,
        email:req.body.email,
        password:req.body.password
      }
      //hashing the password so it get encrysted before it is saved in the database
      bcrypt.genSalt(10,(err,salt)=>{
        bcrypt.hash(newUser.password,salt,(err,hash)=>{
          if(err) throw err;
          newUser.password = hash;
          db.users_tables.create(newUser);
          res.send('done');
        });
      });
    }
});

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });

  



};

 
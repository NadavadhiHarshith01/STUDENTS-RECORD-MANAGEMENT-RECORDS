//jshint esversion:6

require('dotenv').config()
const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require('mongoose');
const session=require("express-session");
const passport=require("passport");
const passportLocalMongoose=require("passport-local-mongoose");
const findOrCreate = require('mongoose-findorcreate');
const cors=require("cors");


const app = express();
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static("public"));
app.use(cors());

app.use(session({
  secret: process.env.SECRET,
  resave: false,
  saveUninitialized: true,
}));

app.use(passport.initialize());
app.use(passport.session());

mongoose.connect(process.env.DATABASE_ACCESS, {useNewUrlParser: true});

const blogDataSchema={
  title:String,
  img_url:String
};

const Post = mongoose.model("Post", blogDataSchema);

const userSchema=new mongoose.Schema({
  email:String,
  password:String,
  secret:String
});

userSchema.plugin(passportLocalMongoose);
userSchema.plugin(findOrCreate);


const User=new mongoose.model("User",userSchema);

passport.use(User.createStrategy());

passport.serializeUser(function(user, done) {
    done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  User.findById(id, function(err, user) {
    done(err, user);
  });
});


//Routes

app.get("/",function(req,res){
  res.render("home");
});

app.get("/login",function(req,res){
  res.render("login");
});

app.get("/register",function(req,res){
  res.render("register");
});

app.get("/compose",function(req,res){
  if(req.isAuthenticated()){
    res.render("compose");
  }else{
    res.redirect("/login");
  }
});



app.post("/compose", function(req, res){
  const post = new Post({
    title: req.body.postTitle,
    img_url: req.body.postBody
  });

  post.save(function(err){
  if (!err){
    res.redirect("/");
  }
});
});


app.get("/logout",function(req,res){
  req.logout(function(err){
    if(err){
      console.log(err);
    }
    else{
      res.redirect("/");
    }
  });
});

app.post("/register",function(req,res){
  User.register({username:req.body.username}, req.body.password, function(err, user) {
    if (err){
      console.log(err);
      res.redirect("/register");
    }else{
      passport.authenticate("local")(req,res,function(){
        res.redirect("/login");
      });
    }
});
});

app.post("/login",function(req,res){
const user = new User({
  username:req.body.username,
  password:req.body.password
});
req.login(user,function(err){
  if(err){
    console.log(err);
  }else{
    passport.authenticate("local")(req,res,function(){
      res.redirect("/compose");
    });
  }
});
});

app.get("/loginc",function(req,res){
  res.send("hi")
});




app.post("/loginc",function(req,res){

  console.log(passport.authenticate("local")(req,res,function(){}));
console.log(req.body);
const user = new User({
  username:req.body.username,
  password:req.body.password
});

req.login(user,function(err){
  if(err){
    console.log(err);
  }
  else{
    if(passport.authenticate("local")(req,res,function(){}))
    {
      res.send({message:"user not found",user:user})
    }
    else{
      passport.authenticate("local")(req,res,function(){

       res.send({message:"login",user:user})
        // res.redirect("/");
      });
    }


  }
});
});

app.listen(3000, function() {
  console.log("Server started on port 3000");
});

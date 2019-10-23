const passport = require("passport");
const auth      = require('./index')
const GoogleStrategy = require('passport-google-oauth20').Strategy;

//this stores the entire user object
//you may only want some info
passport.serializeUser(function(user, done) {
 done(null, user);
});

passport.deserializeUser(function(user, done) {
 done(null, user);
});

passport.use(
 new GoogleStrategy(
  {
   clientID: auth.google_id,
   clientSecret: auth.google_secret,
   callbackURL: "http://localhost:5000/auth/google/callback"
  },
  function(accessToken, refreshToken, profile, done) {
   var userData = {
    email: profile.emails[0].value,
    name: profile.displayName,
    token: accessToken
   };
   done(null, userData);
  }
 )
);

// https://hackernoon.com/m-e-r-n-stack-application-using-passport-for-authentication-920b1140a134
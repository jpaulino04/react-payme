const passport          = require("passport");
const auth              = require('./index');
// const LocalStrategy     = require('passport-local').Strategy;
// const OAuth2Strategy    = require('passport-oauth').OAuth2Strategy;
const GoogleStrategy    = require( 'passport-google-oauth2' ).Strategy;

//********************Passport / session notes:
//Strategies, and their configuration, are supplied via the use() function.
//If the credentials are valid, the verify callback invokes done to supply Passport with the user that authenticated.
//In a Connect or Express-based application, passport.initialize() middleware is required to initialize Passport. 
//If your application uses persistent login sessions, passport.session() middleware must also be used.
//be sure to use session() before passport.session() to ensure that the login session is restored in the correct order.
//If authentication succeeds, a session will be established and maintained via a cookie set in the user's browser.
// Each subsequent request will not contain credentials, but rather the unique cookie that identifies the session.
// In order to support login sessions, Passport will serialize and deserialize user instances to and from the session.
//-------------------------------Local Strategy

//this stores the entire user object in req.user
//note you may want to keep the amount of data in the session small (maybe the id only), the user might be too big
//you may only want some info

passport.serializeUser(function(user, done) {
    done(null, user);
});
   
passport.deserializeUser(function(user, done) {
    done(null, user);
});

//-------------------------------Passport Google Auth2 Strategy
passport.use(new GoogleStrategy({
    clientID:     auth.google_id,
    clientSecret: auth.google_secret,
    callbackURL: "http://localhost:5000/auth/google/callback",
    passReqToCallback   : true
  },

  function(request, accessToken, refreshToken, profile, done) {
    const userData = {
        email: profile.emails[0].value,
        name: profile.displayName,
        token: accessToken
    };
    //refresh token refreshes the access token
    // we are not using either the access or refresh token in our app    
    done(null, userData);
  }            
));


// passport.use(new LocalStrategy(
//     function(username, password, done) {
//         User.findOne({ username: username }, function (err, user) {
//         if (err) { return done(err); }//db error
//         if (!user) {
//             return done(null, false, { message: 'Incorrect username.' });
//         }
//         if (!user.validPassword(password)) {
//             return done(null, false, { message: 'Incorrect password.' });
//         }
//         return done(null, user);
//         });
//     }
// ));


// -------------------------------Google Strategy
// passport.use(
//  new GoogleStrategy(
//   {
//    clientID: auth.google_id,
//    clientSecret: auth.google_secret,
//    callbackURL: "http://localhost:5000/auth/google/callback"
//   },
//   function(accessToken, refreshToken, profile, done) {
//    var userData = {
//     email: profile.emails[0].value,
//     name: profile.displayName,
//     token: accessToken
//    };
//    done(null, userData);
//   }
//  )
// );

// https://hackernoon.com/m-e-r-n-stack-application-using-passport-for-authentication-920b1140a134
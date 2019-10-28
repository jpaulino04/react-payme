const express   = require('express');
const router    = express.Router();
const passport  = require('passport');
const auth      = require('../config')
const accessMiddleware = require('../middlewares/accessMiddleware')
const {check, validationResult} = require('express-validator')


//--------------------------------Passport Google Auth2 \

// Redirect the user to the OAuth 2.0 provider for authentication.  When
// complete, the provider will redirect the user back to the application at
//     /auth/provider/callback
router.get('/auth/google', passport.authenticate("google", { scope: ["profile", "email"] }));

// The OAuth 2.0 provider has redirected the user back to the application.
// Finish the authentication process by attempting to obtain an access
// token.  If authorization was granted, the user will be logged in.
// Otherwise, authentication has failed.
router.get('/auth/google/callback',
    passport.authenticate("google", { failureRedirect: "/", session: true }),
        function(req, res) {
            var token = req.user.token; //via serialize/deserialize user     
            res.redirect("http://localhost:3000/main?token=" + token);
        }
);

router.get('/auth/current_user', (req, res) => {
    res.send(req.user);
})

//-------------------------------------------------------------------------Google Auth Routes

// router.get("/welcome", accessMiddleware, function(req,res) {
//     var token = req.user.token;    
//     res.redirect("http://localhost:3000/main?token=" + token);
// })

//-------------------General Routes----------------------------

router.get('/logout', function(req, res){
    req.logout();
    res.redirect('http://localhost:3000/');
  });

module.exports = router;
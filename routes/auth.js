const express   = require('express');
const router    = express.Router();
const passport  = require('passport');
const auth      = require('../config')
const {check, validationResult} = require('express-validator')



/* GET Google Authentication API. */
router.get(
    "/auth/google",
    passport.authenticate("google", { scope: ["profile", "email"] })
    //“profile” & “email” in scope array to get user’s profile and email address.
);

router.get(
    "/auth/google/callback",
    passport.authenticate("google", { failureRedirect: "/", session: true }),
    function(req, res) {
        var token = req.user.token; //via serialize/deserialize user
        res.redirect("http://localhost:3000/main?token=" + token);
    }
);

router.get('/logout', function(req, res){
    req.logout();
    res.redirect('/');
  });

module.exports = router;
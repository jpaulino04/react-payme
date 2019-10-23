

// Checks if a user is logged in
const accessMiddleware = (req, res, next) => {  
    if (req.isAuthenticated()) {
        next();
    } else {
        // res.status(403).json({
        // message: 'must be logged in to continue',
        // });
        res.redirect("http://localhost:3000/")
    }
};

module.exports = accessMiddleware;
var authController = require('../controllers/authcontroller.js');
 var db = require("../models");
 
module.exports = function(app, passport) {
 
    app.get('/', authController.signin);

 
    app.get('/signup', authController.signup);
 
 
    app.get('/signin', authController.signin);
 
 
    app.post('/signup', passport.authenticate('local-signup', {
            successRedirect: '/dashboard',
 
            failureRedirect: '/signup'
        }
 
    ));
 
 
    app.get('/dashboard', isLoggedIn, authController.dashboard);

    app.get('/forum', isLoggedIn, authController.forum);

    app.post('/post', isLoggedIn, authController.createPost);
 
    app.get('/logout', authController.logout);
 
 
    app.post('/signin', passport.authenticate('local-signin', {
            successRedirect: '/dashboard',
 
            failureRedirect: '/signin'
        }
 
    ));

    app.post('/api/useritem', isLoggedIn, authController.addUserItem);

    app.delete('/api/useritem', isLoggedIn, authController.removeUserItem);

    function isLoggedIn(req, res, next) {
        if (req.isAuthenticated())
 
            return next();
 
        res.redirect('/signin');
 
    }
 
}
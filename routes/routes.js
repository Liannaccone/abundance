var controller = require('../controllers/controller.js');
 var db = require("../models");
 
module.exports = function(app, passport) {
 
    app.get('/', controller.signin);

 
    app.get('/signup', controller.signup);
 
 
    app.get('/signin', controller.signin);
 
 
    app.post('/signup', passport.authenticate('local-signup', {
            successRedirect: '/dashboard',
 
            failureRedirect: '/signup'
        }
 
    ));
 
 
    app.get('/dashboard', isLoggedIn, controller.dashboard);

    app.get('/forum', isLoggedIn, controller.forum);

    app.post('/post', isLoggedIn, controller.createPost);
 
    app.get('/logout', controller.logout);
 
 
    app.post('/signin', passport.authenticate('local-signin', {
            successRedirect: '/dashboard',
 
            failureRedirect: '/signin'
        }
 
    ));

    app.post('/api/useritem', isLoggedIn, controller.addUserItem);

    app.delete('/api/useritem', isLoggedIn, controller.removeUserItem);

    function isLoggedIn(req, res, next) {
        if (req.isAuthenticated())
 
            return next();
 
        res.redirect('/signin');
 
    }
 
}
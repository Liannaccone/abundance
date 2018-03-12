var exports = module.exports = {}
var db = require("../models");

  exports.signup = function(req, res) {
      res.render('signup');
  }

  exports.signin = function(req, res) {
      res.render('signin');
  }

  exports.dashboard = function(req, res) {
    db.Product.findAll({}).then(function(data) {
      var hbsObject = {
        product: data
      };
      // console.log(hbsObject);
      res.render("dashboard", hbsObject);
    });
  }

  exports.forum = function(req, res) {
      res.render('forum');
  }

  exports.logout = function(req, res) {
      req.session.destroy(function(err) {
          res.redirect('/');
      });
  }

var exports = module.exports = {}
var db = require("../models");

  exports.signup = function(req, res) {
      res.render('signup');
  }

  exports.signin = function(req, res) {
      res.render('signin');
  }

  exports.dashboard = function(req, res) {
    var reqUser = req.session.passport.user;
    var hbsObject = {};
    // queries db for all products
    db.Product.findAll({}).then(function(data) {
      // console.log('\n*****\n', data[0]['dataValues'].item_name)
      hbsObject.product = [];
      for (i = 0; i < data.length; i++) {
        var newProduct = {
          id: data[i]['dataValues'].id,
          name: data[i]['dataValues'].item_name,
          photoUrl: data[i]['dataValues'].photo_url
        }
        hbsObject.product.push(newProduct)
      }
      // console.log(hbsObject.product)
    });
    // queries db for all user items where userID is reqUser
    // need to also get item_name and img url out of this, join to product table?
    db.Useritem.findAll({
      userId: reqUser
    }).then(function(data) {
      if(!data) {
        next();
      }
      else{
        // console.log('\n*****\n', data[0]['dataValues'].name)
        hbsObject.useritem = [];
        for (i = 0; i < data.length; i++) {
          var newProduct = {
            id: data[i]['dataValues'].id,
            name: data[i]['dataValues'].name
          }
          hbsObject.product.push(newProduct)
        }
      }
            res.render('dashboard', hbsObject)
    });
    // // queries db for all user items where userID is not reqUser
    // db.Useritem.findAll({
    //   where: {
    //     userId: {
    //     $not:reqUser
    //     }
    //   }
    // }).then(function(data) {
    //   hbsObject.communityitem = data
    //   console.log(hbsObject)
    //   res.render('dashboard', hbsObject)
    // })
  }

  exports.forum = function(req, res) {
    // var hbsObject = {}
    // db.Post.findAll({}).then(function(data){
    //   dbsObject.post = data
      res.render('forum');
    // })
  }

  exports.logout = function(req, res) {
      req.session.destroy(function(err) {
          res.redirect('/');
      });
  }

  // ================
  // api routes
  // ================

  exports.addUserItem = function(req, res) {
        var reqUser = req.session.passport.user;
        var reqProduct = req.body.product_id;
        var reqName = req.body.product_name;

        db.Useritem.create({
          ProductId: reqProduct,
          userId: reqUser,
          name: reqName
          }).then(function(data)  {
            console.log('New user item added')
          });
  }

  exports.removeUserItem = function(req, res){
    var reqId = req.body.id
    db.Useritem.destroy({
      where: {
        id: reqId
      }
    }).then(function() {
      console.log('Successfully deleted entry')
    })
  }

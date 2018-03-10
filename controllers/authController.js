var exports = module.exports = {}

exports.signup = function(req, res) {
    res.render('signup');
}

exports.signin = function(req, res) {
    res.render('signin');
}

exports.dashboard = function(req, res) {
  Produce_item.all(function(data) {
    var hbsObject = {
      produce_items: data
    };
    console.log(hbsObject);
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
// user-api-routes.js - routes for displaying and saving User-related data to the db


// ----------------------------------------------------------
//           DEPENDENCIES
// ----------------------------------------------------------

var db = require('../models');

// ----------------------------------------------------------
//           ROUTES
// ----------------------------------------------------------

module.exports = function(app) {
	
	// creates a new user
	app.post('/api/user', function(req, res) {
		db.User.create(req.body).then(function(dbUser) {
			res.json(dbUser);
		})
	})

	// return the information for all users (including associated items)
	app.get('/api/user', function(req, res) {
		db.User.findAll({
			include: [db.Item]
		}).then(function(dbUser) {
			res.json(dbUser);
		});
	});

	// return the information for a specific user (including associated items)
	app.get('/api/user/:id', function(re, res) {
		db.User.findOne({
			where: {
				id: req.params.id
			},
			include: [db.Item]
		}).then(function(dbUser) {
			res.json(dbUser);
		});
	});

	// deletes a specific user
	app.delete('/api/user/:id', function(req, res) {
		db.User.destroy({
			where: {
				id: req.params.id
			}
		}).then(function(dbUser) {
			res.json(dbUser)
		});
	});
}
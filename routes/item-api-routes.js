// // item-api-routes.js - routes for displaying and saving Item-related data to the db

// // ----------------------------------------------------------
// //           DEPENDENCIES
// // ----------------------------------------------------------

// var db = require('../models');

// // ----------------------------------------------------------
// //           ROUTES
// // ----------------------------------------------------------

// module.exports = function(app) {

// 	// creates an item...
// 	// app.post('/api/item', function(req, res) {
// 	// 	db.Item.create(req.body).then(function(dbItem) {
// 	// 		alert('ot worked!')
// 	// 		// res.json(dbItem);
// 	// 	});
// 	// });

// 	// // returns all items...
// 	// app.get('/api/item', function(req, res) {
// 	// 	var query = {};
// 	// 	if (req.query.user_id) {
// 	// 		query.UserId = req.query.user_id;
// 	// 	}
// 	// 	db.Item.findAll({
// 	// 		where: query,
// 	// 		include: [
// 	// 		{model: User}
// 	// 		]
// 	// 	}).then(function(dbItem) {
// 	// 		res.json(dbItem);
// 	// 	});
// 	// });

// 	// // returns a single item
// 	// app.get('/api/item:id', function(req, res) {
// 	// 	db.Item.findOne({
// 	// 		where: {
// 	// 			id: req.params.id
// 	// 		},
// 	// 		include: [
// 	// 		{model: user}
// 	// 		]
// 	// 	}).then(function(dbItem) {
// 	// 		res.json(dbItem);
// 	// 	});
// 	// });

// 	// // updates a item...
// 	// app.put('/api/item', function(req, res){
// 	// 	db.Item.update(
// 	// 		req.body,
// 	// 		{
// 	// 			where: {
// 	// 				id: req.body.id
// 	// 			}
// 	// 		}).then(function(dbItem) {
// 	// 			res.json(dbItem);
// 	// 	});
// 	// });

// 	// // deletes a specific item...
// 	// app.delete('/api/item/:id', function(req, res) {
// 	// 	db.Item.destroy({
// 	// 		where: {
// 	// 			id: req.params.id
// 	// 		}
// 	// 	}).then(function(dbItem) {
// 	// 		res.json(dbItem);
// 	// 	});
// 	// });

// }
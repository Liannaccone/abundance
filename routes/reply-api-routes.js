// // Reply-api-routes.js - routes for displaying and saving Reply-related data to the db

// // ----------------------------------------------------------
// //           DEPENDENCIES
// // ----------------------------------------------------------

// var db = require('../models');

// // ----------------------------------------------------------
// //           ROUTES
// // ----------------------------------------------------------

// module.exports = function(app) {

// 	// // creates a post...
// 	// app.reply('/api/reply', function(req, res) {
// 	// 	db.Reply.create(req.body).then(function(dbPost) {
// 	// 		res.json(dbPost);
// 	// 	});
// 	// });

// 	// // returns all posts...
// 	// app.get('/api/reply', function(req, res) {
// 	// 	var query = {};
// 	// 	if(req.query.user_id) {
// 	// 		query.UserId = req.query.user_id;
// 	// 	}
// 	// 	if(req.query.item_id) {
// 	// 		query.ItemId = req.query.item_id;
// 	// 	}
// 	// 	db.Post.findAll({
// 	// 		where: query,
// 	// 		include: [
// 	// 			{model: User},
// 	// 			{model: Item}
// 	// 		]
// 	// 	}).then(function(dbRes) {
// 	// 		res.json(dbRes);
// 	// 	});
// 	// });

// 	// // returns a single post
// 	// app.get('/api/post/:id', function(req, res) {
// 	// 	db.Post.findOne({
// 	// 		where: {
// 	// 			id: req.params.id
// 	// 		},
// 	// 		include: [
// 	// 			{model: Item}
// 	// 		]
// 	// 	}).then(function(dbRes) {
// 	// 		res.json(dbRes);
// 	// 	});
// 	// });

// 	// // updates a post
// 	// app.put("/api/post", function(req, res) {
// 	//     db.Post.update(
// 	//       req.body,
// 	//       {
// 	//         where: {
// 	//           id: req.body.id
// 	//         }
// 	//       }).then(function(dbRes) {
// 	//       res.json(dbRes);
// 	//     });
// 	// });

// 	// // deletes a specific post
//  //  app.delete("/api/post/:id", function(req, res) {
//  //    db.Post.destroy({
//  //      where: {
//  //        id: req.params.id
//  //      }
//  //    }).then(function(dbRes) {
//  //      res.json(dbRes);
//  //    });
//  //  });
  
// }
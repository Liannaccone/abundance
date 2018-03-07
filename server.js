// This file is the initial starting point for the Node/Express server.
// ************************************************************


// ----------------------------------------------------------
//           DEPENDENCIES
// ----------------------------------------------------------

var express = require('express');
var bodyParser = require('body-parser');

// sets up the Express app...
var app = express();
var PORT = process.env.PORT || 3000;

// require models for syncing...
var db = require('./models');

// set up Express app to handle data parsing...

// parse appliucation/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
// parse application/json
app.use(bodyParser.json());

// Static directory
app.use(express.static("public"));

// ----------------------------------------------------------
//           ROUTES
// ----------------------------------------------------------

// require('./routes/html-routes.js')(app);
// require('./routes/user-api-routes.js')(app);
// require('./routes/item-api-routes.js')(app);

// Syncing our sequelize models and then starting our Express app

db.sequelize.sync({ force: true }).then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});
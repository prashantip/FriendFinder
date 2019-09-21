var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var app = express();
//var PORT = 3000;
var PORT = process.env.PORT || 3000;
// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Sets up the Express app to handle data parsing

// parse various different custom JSON types as JSON
 app.use(bodyParser.json({ type: 'application/*+json' }))
 
// parse some custom thing into a Buffer
app.use(bodyParser.raw({ type: 'application/vnd.custom-type' }))
 
// parse an HTML body into a string
app.use(bodyParser.text({ type: 'text/html' }))

//Router
require("./routing/apiRoutes")(app);
require("./routing/htmlRoutes.js")(app);

 
// Starts the server to begin listening
// =============================================================
app.listen(PORT, function () {
    console.log("App listening on PORT:" + PORT);
});



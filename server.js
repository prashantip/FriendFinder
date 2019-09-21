var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var app = express();
//var PORT = 3000;
var PORT = process.env.PORT || 3000;
// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


//Router
require("./routing/apiRoutes")(app);
require("./routing/htmlRoutes.js")(app);

 
// Starts the server to begin listening
// =============================================================
app.listen(PORT, function () {
    console.log("App listening on PORT:" + PORT);
});



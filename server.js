var express = require("express");

var bodyParser = require("body-parser")
var app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

var htmlRoute = require("./app/routing/htmlRoutes")
htmlRoute(app)

require("./app/routing/apiRoutes")(app)

var PORT = process.env.PORT || 3000;






app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});
//npm required modules
var express = require("express");
var path = require("path");

var app = express();


var PORT = process.env.PORT || 8080;

app.use(express.static("app"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

// Initiate server
app.listen(PORT, function() {
  //Console logs that server has initiated.
  console.log("Server listening on: http://localhost:" + PORT);
});

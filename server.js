// server page
var express =require('express')
var path =require("path")
var bodyParser= require ("body-parser")
var methodOverride = require ("method-override")

var PORT= process.env.PORT || 4040;

var app= express();

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// Parse application body
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
// Override with POST having ?_method=DELETE
app.use(methodOverride("_method"))

// Set Handlebars.
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({defaultLayout: "main"}))
app.set("view engine", "handlebars")

var routes =require("./controllers/burgers_controller")

app.use(routes)


app.listen(PORT, function() {
    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT);
  });
  



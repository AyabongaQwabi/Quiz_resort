var express = require("express")
var exphbs = require("express-handlebars")
  
var app = express();
app.engine("handlebars", exphbs({defaultLayout:"main"}))
app.set("view engine", "handlebars")

app.use("/static", express.static("views"))
app.use("/static", express.static("."))

app.get("/", function(req, res){
	res.render("home")
})



app.get("/play", function(req, res){
	res.render("play")
})

var server = app.listen(3000, function(){

	console.log("server is running on " + server.address().address + ":" +server.address().port)

})
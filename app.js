var express = require("express")
var exphbs = require("express-handlebars")

 // parse application/x-www-form-urlencoded
//app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
//app.use(bodyParser.json())

var app = express();

var questions = {
	1 : {
      quest:"Give the name of a resort that you can find on your way to Cape point from Simons's Town?",
      options: ["Silwerstroomstrand", "Kuilsriver", "Miler's Point Resort." ,"Hendon Park"],
      answer : "Miler's Point Resort."
	},
	2 : {
	  quest:"Name the resort that falls on the West Coast Biosphere Resort and Koeberg Power Station.",
      options: ["Silwerstroomstrand", "Kuilsriver", "Miler's Point Resort." ,"Hendon Park"],
      answer : "Silwerstroomstrand Resort."
	},
	3 : {
	  quest:"This is Resort is next to Muizenberg Beach and in Summer it's shaltered from the famous Cape's South-Easter winds.",
      options: ["Silwerstroomstrand", "Zandvlei Resort.", "Miler's Point Resort." ,"Hendon Park"],
      answer : "Zandvlei Resort."
	},
	4 : {
	  quest:" A Xhosa name of one of the Resorts means: 'Bringing joy', which is it?.",
      options: ["Silwerstroomstrand", "Kuilsriver", "Miler's Point Resort." ," Monwabisi Resort."],
      answer : " Monwabisi Resort."
	},
	5 : {
	  quest:"If you wish to watch some Whales by the Bay, you would visit this Resort.",
      options: ["Silwerstroomstrand", "Kuilsriver", "Miler's Point Resort." ,"Hendon Park"],
      answer : " Kogel Bay"
	}
};

app.engine("handlebars", exphbs({defaultLayout:"main"}))
app.set("view engine", "handlebars")
//quiz = require('./routes/quiz'),
app.use(express.static(__dirname + '/public'));

app.get("/", function(req, res){
	res.render("home")
});

app.get("/play", function(req, res){
	res.render("play")
});

//return questions
app.get('/question/:question_id', function(req, res){
	var question_id = req.params.question_id;
	// get the question in the map
	var question = questions[question_id];
	//show the question
	res.render('question', {question : question})
});

//answer question
app.post('/questions/:question_id', function(req, res){

	// get the original question

	// get the question that is answered

	//check if it's wrong or right

	//render next question + points

});

/*
app.get("/resortLists", function(req, res){
	var resort = require("./resortList.json")
	res.render("resortLists", {resort:resort})
	})
*/

//app.get('/question1', quiz.show_quest1);
//app.post('/quiz/response/:answer', function(req, res){
	// what should we do?
	//
	//show a view
//}); 

var server = app.listen(3000, function(){

	console.log("server is running on " + server.address().address + ":" +server.address().port)

})
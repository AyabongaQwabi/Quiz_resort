var express = require("express")
var exphbs = require("express-handlebars")
var bodyParser = require('body-parser')

var app = express();


//parse application/form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
//parse application/json
app.use(bodyParser.json())


var questions = {
	1 : {
		question_id : 1,	
      quest:"Give the name of a resort that you can find on your way to Cape Point from Simon's Town?",
      options: ["Silwerstroomstrand", "Kuilsriver", "Miler's Point Resort." ,"Hendon Park"],
      answer : "Miler's Point Resort."
	},
	2 : {
		question_id : 2, 
	  quest:"Name the resort that falls on the West Coast Biosphere Reserve and Koeberg Power Station.",
      options: ["Silwerstroomstrand Resort", "Kuilsriver", "Miler's Point Resort." ,"Hendon Park"],
      answer : "Silwerstroomstrand Resort."
	},
	3 : {
		question_id : 3,
	  quest:"This resort is next to Muizenberg Beach and in summer it's sheltered from the Cape's famous South-Easter winds.",
      options: ["Silwerstroomstrand", "Zandvlei Resort.", "Miler's Point Resort." ,"Hendon Park"],
      answer : "Zandvlei Resort."
	},
	4 : {
		question_id : 4,
	  quest:" A Xhosa name for one of the resorts means: 'bringing joy', which is it?.",
      options: ["Morapedi Resort", "Khayelitsha Resort", "Miler's Point Resort." ," Monwabisi Resort."],
      answer : " Monwabisi Resort."
	},
	5 : {
		question_id : 5,
	  quest:"If you wish to watch some Whales by the Bay, you would visit this Resort.",
      options: ["Silwerstroomstrand", "Kuilsriver", "Miler's Point Resort." ,"Kogel Bay"],
      answer : " Kogel Bay"
	}
};

var points = 0;


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
	
	console.log("question_id : " + question_id);

	// get the question in the map
	var question = questions[question_id];
	//show the question
	res.render('question', {
			question : question,
			points : points
		})
});

//answer question
app.post('/question/:question_id', function(req, res){

	var currentQuestion = questions[req.params.question_id];
		console.log(currentQuestion);
		console.log(req.body);

	var answer = req.body.answer;

	if (currentQuestion.answer ===  answer){
		console.log("correct!")
		points++;
	}

	var nextQuestionId = Number(req.params.question_id) + 1;
	var question = questions[nextQuestionId];

	//if I found no questions we are done!!!
	if(question === undefined){
		res.render('done');
	}

	//show the question,
	res.render('question', {question : question, 
							points : points})
	


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


var result = function(answer){
		var increment = 0;
		if (answer === "correct"){
			increment++;
		}
		return increment;
	};


exports.show_quest1 = function (req, res, next) {
	result(increment)
	res.redirect( 'finalResult', {});
      	
};


//exports.show_finalResult = function (req, res, next) {
	//var finalRes = totalC
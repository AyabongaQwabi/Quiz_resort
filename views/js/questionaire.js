$(document).ready(function () {
//alert('hi');
$("#submit").click(function(evt){
	evt.preventDefault();
	var value = $('input[name=radioName]:checked', '#questionForm').val();
	alert (value);
});

});
 
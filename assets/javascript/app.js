$(document).ready(function() {

// starting variables
var correctAnswers = 0;
var wrongAnswers = 0;
var incompleteAnswers = 0;

var questions = [{
		question: "Who directed, wrote, produced, and starred in The Room?",
		choices: ["Tommy Wiseau", "Clint Eastwood", "James Franco"],
		answerIndex: 0,
		identifier: "questionOne"
	},
	{
		question: "What did Lisa do to Johnny?",
		choices: ["Forgot his birthday", "Cheated on him with his best friend", "Hired an assassin to kill him"],
		answerIndex: 1,
		identifier: "questionTwo"
	},
	{
		question: "What is Johnny's famous line in the scene where he buys Lisa flowers?",
		choices: ["Oh hi doggy", "There won't be another day like this", "How could you do this to me"],
		answerIndex: 0,
		identifier: "questionThree"
	},
	{
		question: "Who jumps into bed with Johnny and Lisa?",
		choices: ["Mark, Johnny's best friend", "Denny, Johnny's neighbor", "Peter, Johnny's psychologist friend"],
		answerIndex: 1,
		identifier: "questionFour"
	},
	{
		question: "Who is Chris-R?",
		choices: ["Johnny's lawyer and friend", "A drug dealer who Denny owes money to", "The DJ at Johnny's birthday party"],
		answerIndex: 1,
		identifier: "questionFive"
	},
	{
		question: "What is the name of the memoir written by Greg Sestero that describes the making of The Room?",
		choices: ["Red, Red Room", "The Making of The Room", "The Disaster Artist"],
		answerIndex: 2,
		identifier: "questionSix"
	},
	{
		question: "Which duo produced and directed the film adaptation of Sestero's making-of memoir?",
		choices: ["Patton Oswalt and Jon Hamm", "Greg Sestero and Dave Franco", "Seth Rogen and James Franco"],
		answerIndex: 2,
		identifier: "questionSeven"
	},
	{
		question: "What does Lisa's mother, Claudette, reveal to Lisa suddenly that she never mentions again?",
		choices: ["She has breast cancer", "She is in love with Johnny", "She adopted Lisa as an infant"],
		answerIndex: 0,
		identifier: "questionEight"
	},
	{
		question: "What do fans famously bring to limited movie screenings of The Room?",
		choices: ["Tape recorders", "Spoons", "Roses"],
		answerIndex: 1,
		identifier: "questionNine"
	},
	{
		question: "What is Johnny's favorite sport?",
		choices: ["Football", "Soccer", "Hockey"],
		answerIndex: 0,
		identifier: "questionTen"
	}];

//call iteration function and pass through array argument
iterateThroughQuestionsArray(questions);

//function to iterate through questions array
function iterateThroughQuestionsArray(questions) {

	for(var x = 0; x < questions.length; x++){

		//call display questions function
		displayQuestions(questions[x]);
		//call display choices function
		displayChoices(questions[x].choices, x);

	};
	//call display button function
	displayButton();
};

//append button to bottom of the form
function displayButton(){

	$("#submitButton").append("<input type='submit' value='submit' id='buttonStyle'>");

};

//append questions
function displayQuestions(questions) {

	$(".question-div").append("<div class='question-styling'>" + questions.question + "</div>");

};

//append choices
function displayChoices(choices, questionIndex) {

	for(var y = 0; y < choices.length; y++) {

	$(".question-div").append(`<input type='radio' name=${questions[questionIndex].identifier} class='options' value=${y}>${choices[y]} </input> <br />`);

	}
};

//submit button calls for time to stop, calculate function, and print results function
$("#submitButton").on("click", function(){
	clearInterval(timer);
	calculateScore();
	printResults();
});

//calculate correct and incorrect answers, as well as unselected answers
function calculateScore() {

	$.each(questions, function(key, value) {

		var valueOf = $(`input[name=${value.identifier}]:checked`).val()

		if (valueOf == value.answerIndex) {
			correctAnswers++;
		} else if (valueOf == undefined) {
			incompleteAnswers++;
		} else {
			wrongAnswers++;
		};

	});
};

//print results of quiz
function printResults() {
	$(".question-div").html("<br><br><h4><b>Correct Answers : </b>" + correctAnswers + "</h4> <br /> <h4><b>Incorrect Answers : </b>" + wrongAnswers + "</h4> <br /> <h4><b>Number of Questions Left Unanswered : </b>" + incompleteAnswers + "</h4><br><br>")
	$("#submitButton").empty();
};

//timer countdown
var secondsRemaining = 120;

var timer = setInterval(timeQuiz, 1000)

function timeQuiz() {
	displayTime();
	if (secondsRemaining !== 0) {
		secondsRemaining -= 1;
	}
	if (secondsRemaining == 0) {
	clearInterval(timer);
	calculateScore();
	printResults();
	}
};

function displayTime() {
	$("#timeRemaining").html(secondsRemaining);
};

function resetGame() {


}

});

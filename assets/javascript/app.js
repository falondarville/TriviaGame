$(document).ready(function() {
// starting variables
var correctAnswers = 0;
var wrongAnswers = 0;
var incompleteAnswers = 0;

//questions that will populate based off of iteration
var questions = [{
		question: "Who directed, wrote, produced, and starred in The Room?",
		choices: ["Tommy Wiseau", "Clint Eastwood", "James Franco"],
		answerIndex: 0
	},
	{
		question: "What did Lisa do to Johnny?",
		choices: ["Forgot his birthday", "Cheated on him with his best friend", "Hired an assassin to kill him"],
		answerIndex: 1
	},
	{
		question: "What is Johnny's favorite sport?",
		choices: ["Football", "Soccer", "Hockey"],
		answerIndex: 0
	}];

//Function to iterate through questions array
function iterateThroughQuestionsArray(questions) {

	for(var x = 0; x < questions.length; x++){
		//call append questions function
		displayQuestions();
		//call append choices function
		displayChoices();
	};
};

iterateThroughQuestionsArray(questions);

//append question
function displayQuestions() {
	$(".question-div").append("<div>" + questions.question + "</div>");
};

//append choices
function displayChoices() {
	$(".question-div").append("<div>" + questions.choices + "</div>");
};


//function to render a single question to print to html

//Functions to change questions and question choices when button next and previous buttons are clicked. 

//dynamically populate the questions and radio buttons
//dynamically populate submit button

//on submit, dynamically populate win/loss/unanswered questions

});







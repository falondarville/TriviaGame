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
		question: "What is Johnny's famous line in the scene where he buys Lisa flowers?",
		choices: ["Oh hi doggy", "There won't be another day like this", "How could you do this to me"],
		answerIndex: 0
	},
	{
		question: "Who jumps into bed with Johnny and Lisa?",
		choices: ["Mark, Johnny's best friend", "Denny, Johnny's neighbor", "Peter, Johnny's psychologist friend"],
		answerIndex: 1
	},
	{
		question: "Who is Chris-R?",
		choices: ["Johnny's lawyer and friend", "A drug dealer who Denny owes money to", "The DJ at Johnny's birthday party"],
		answerIndex: 1
	},
	{
		question: "What is the name of the memoir written by Greg Sestero that describes the making of The Room?",
		choices: ["Red, Red Room", "The Making of The Room", "The Disaster Artist"],
		answerIndex: 2
	},
	{
		question: "Which duo produced and directed the film adaptation of Sestero's making-of memoir?",
		choices: ["Patton Oswalt and Jon Hamm", "Greg Sestero and Dave Franco", "Seth Rogen and James Franco"],
		answerIndex: 2
	},
	{
		question: "What does Lisa's mother, Claudette, reveal to Lisa suddenly that she never mentions again?",
		choices: ["She has breast cancer", "She is in love with Johnny", "She adopted Lisa as an infant"],
		answerIndex: 0
	},
	{
		question: "What do fans famously bring to limited movie screenings of The Room?",
		choices: ["Tape recorders", "Spoons", "Roses"],
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
		displayQuestions(questions[x]);
		//call append choices function
		displayChoices(questions[x].choices);

	};

};

//call iteration function and pass through array argument
iterateThroughQuestionsArray(questions);
$("#submitButton").append("<input type='submit' value='submit' id='buttonStyle'>");


//append question
//SHOWING UNDEFINED
function displayQuestions(questions) {
	$(".question-div").append("<div class='question-styling'>" + questions.question + "</div>");
};

//append choices
function displayChoices(choices) {
	for(var y = 0; y < choices.length; y++)
	$(".question-div").append("<input type='radio' name='choice' class='options'>" + choices[y] + "</input> <br />");
};

$("#submitButton").append("<input type='submit>Submit</input>");

//onclick submit button that calls two functions: calculated results and print results
$("#submitButton").on("click", function(){
	//submit form 
	alert("button works!");
	//call two function
	// printResults();
});

//function to calculate results

//function to print results

// function printResults() {
// 	$(".question-div").append("<p>Correct Answers : " + correctAnswers "</p> <br /> <p>Incorrect Answers : " + wrongAnswers + "</p> <br /> <p>Number of Questions Left Unanswered : " + incompleteAnswers + "</p>")
// }

//timer countdown from 120 seconds






});







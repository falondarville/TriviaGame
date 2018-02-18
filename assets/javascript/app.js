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

//call iteration function and pass through array argument
iterateThroughQuestionsArray(questions);

//Function to iterate through questions array
function iterateThroughQuestionsArray(questions) {

	for(var x = 0; x < questions.length; x++){

		//call display questions function
		displayQuestions(questions[x]);
		//call display choices function
		displayChoices(questions[x].choices);

	};
	//call display button function
	displayButton();
};

function displayButton(){
	$("#submitButton").append("<input type='submit' value='submit' id='buttonStyle'>");
};

//append question
function displayQuestions(questions) {
	$(".question-div").append("<div class='question-styling'>" + questions.question + "</div>");
};

var choicesArray = [];
var answersArray = [0, 1, 0, 1, 1, 2, 2, 0, 1, 0];

//append choices
//ISSUE: user can only choose one answer from the whole quiz since the class "choice" is the same for each value
function displayChoices(choices) {
	for(var y = 0; y < choices.length; y++)
	$(".question-div").append(`<input type='radio' name='choice' class='options' value=${y}>${choices[y]}</input> <br />`);
};

//this function pushes the index of the value chosen to the choicesArray
//ISSUE: pushing to array means that I will be able to compare arrays only if the user selects the questions in that specific order
$('.options').click(function() {
    console.log($(this).val());
    choicesArray.push($(this).val());
    console.log(choicesArray);
});

//function to compare choicesArray to answersArray
//function to determine if all values have been inputted, and if not, output the amount of unanswered questions the user left
$("#submitButton").on("click", function(){
	//submit form 
	alert("button works!");
	//call two function
	// printResults();
});

//function to print results

// function printResults() {
// 	$(".question-div").append("<p>Correct Answers : " + correctAnswers "</p> <br /> <p>Incorrect Answers : " + wrongAnswers + "</p> <br /> <p>Number of Questions Left Unanswered : " + incompleteAnswers + "</p>")
// }

//timer countdown from 120 seconds
var secondsRemaining = 120;

var timer = setInterval(timeQuiz, 1000)

function timeQuiz() {
	displayTime();
	if (secondsRemaining !== 0) {
		secondsRemaining -= 1;
	//call function that displays quiz results
	
	}
};

function displayTime() {
	$("#timeRemaining").html(secondsRemaining);
};


});

// Creating all game variables
var wireTrivia = [{
  question: "Which one of these people was not part of Barksdale's crew?",
  answers: ["Wee-Bey","Poot","McNulty","D'Angelo"],
  correct: 2
},{
  question: "What was Hamsterdam?",
  answers: ["An experimental area of 'legalization'","The most coveted drug terriroty in West Baltimore","Hang out spot for Marlo Stanfield and his organization","A nickname for prison"],
  correct: 0
},{
  question: "The most important thing to Marlo Stanfield was?",
  answers: ["His corners","Gaining control of the herion trade","His name","His was with Avon Barksdale"],
  correct: 2
},{
  question: "What did Wee-Bey find 'beautiful as hell'?",
  answers: ["The game","A clean package of herion","His favorite pistol","His many fish and fish tanks"],
  correct: 3
},{
  question: "What song does Omar Little whistle while on the hunt?",
  answers: ["Farmer in the Dell","A hunting we will go","Changes","Big Poppa"],
  correct: 0
},{
  question: "Avon Barksdale cared only about?",
  answers: ["His cousin D'Angelo","His corners","His best friend and partner Stringer","Women"],
  correct: 1
},{
  question: "The unknown upstart with the most violent crew was?",
  answers: ["Wee-Bey","Poot","McNulty","Marlo Stanfield"],
  correct: 3
},{
  question: "Stringer Bell hired who to kill Omar?",
  answers: ["Brother Mouzone","Wallace","Bodie","Savino"],
  correct: 0
},{
  question: "The most loyal soldier of any crew was?",
  answers: ["Cheese","Snoop","Slim Charles","Chris Partlow"],
  correct: 2
},{
  question: "Cheese was played by?",
  answers: ["Jay Z","Method Man","Mos Def","RZA"],
  correct: 1
}, {
  question: "Why was Cutty regarded as a man by Avon?",
  answers: ["He just got out of prison","He represented the OG's","He was a good soldier","The game wasn't in him anymore"],
  correct: 3
},{
  question: "Where's Wallace String? Where's the boy String?",
  answers: ["Locked up","Dead","With his grandparents","Hiding out"],
  correct: 1
}];

var wireGifs = ["mcnutty", "hamsterdam", "myname", "weebey", "omar", "avon", "marlo", "mouzone", "slim", "cheese", "cutty", "wallace"];

var message = {
  right: "Correct!",
  wrong: "Nope! Nice try.",
  ooT: "Out of time!",
  final: "All done. Here's how you did."
};

var currentQuestion;
var rightAnswer;
var wrongAnswer;
var noAnswer;
var totalTime;
var timer;
var answered;
var userChoice;

// Game start and Restart events
$("#startGame").on("click", function(){
  $(this).hide();
  restart();
});

$("#restartGame").on("click", function(){
  $(this).hide();
  restart();
});

// Game functions
function restart(){
  $("#finalDisplay").empty();
  $("#wrongAnswers").empty();
  $("#rightAnswers").empty();
  $("#noAnswer").empty();
  $("#restartGame").empty();
  currentQuestion = 0;
  rightAnswer = 0;
  wrongAnswer = 0;
  noAnswer = 0;
  nextQuestion();
}

function nextQuestion(){
  $("#display").empty();
  $("#rightAnswer").empty();
  $("#gif").empty();
  answered = true;

  // Code to select new questions and answers
  $("#currentQuestion").html("Question #" + (currentQuestion+1) + "/" + wireTrivia.length);
  $(".question").html("<h3>" + wireTrivia[currentQuestion].question + "</h3>");
  for (var i = 0; i < 4; i++){
    var multipleChoice = $("<div>");
    multipleChoice.text(wireTrivia[currentQuestion].answers[i]);
    multipleChoice.attr({"data-index": i});
    multipleChoice.addClass("chosenOne");
    $(".answers").append(multipleChoice);
  }
  timeLeft();

  // On click time pauses and answer screen is called.
  $(".chosenOne").on("click", function(){
    userChoice = $(this).data("index");
    clearInterval(timer);
    answerScreen();
  });
}

  // Sets timer length and timer to countdown
function timeLeft(){
  totalTime = 20;
  $("#timeLeft").html("<h3>Time Remaining: " + totalTime + "</h3>");
  answered = true;
  timer = setInterval(countdown, 1000);
}

  // Displays countdown and conditions for no answers
function countdown(){
  totalTime--;
  $("#timeLeft").html("<h3>Time Remaining: " + totalTime + " seconds</h3>");
  if (totalTime < 1){
    clearInterval(timer);
    answered = false;
    answerScreen();
  }
}

  // Answer screen logic
function answerScreen(){
  $("#currentQuestion").empty();
  $(".chosenOne").empty();
  $(".question").empty();

  // Creates variables for answer messages, correct answers, and displaying gifs
  var rightAnswerMessage = wireTrivia[currentQuestion].answers[wireTrivia[currentQuestion].correct];
  var rightAnswerChoice = wireTrivia[currentQuestion].correct;
  $("#gif").html("<img src='./assets/images/" + wireGifs[currentQuestion] + ".gif' width = '350px'>" );

  // Conditions for answering questions and counters
  if ((userChoice == rightAnswerChoice) && (answered == true)){
    rightAnswer++;
    $("#display").html(message.right);
  }
  else if ((userChoice != rightAnswerChoice) && (answered == true)){
    wrongAnswer++;
    $("#display").html(message.wrong);
    $("#rightAnswer").html("The correct answer was: " + rightAnswerMessage);
  }
  else {
    noAnswer++;
    $("#display").html(message.ooT);
    $("#rightAnswer").html("The correct answer was: " + rightAnswerMessage);
    answered = true;
  }

  // Sets timers for score screen and answer screen
  if (currentQuestion == (wireTrivia.length -1)){
    setTimeout(score, 5000);
  }
  else {
    currentQuestion++;
    setTimeout(nextQuestion, 5000);
  }
}

// Score screen logic
function score(){
  $("#timeLeft").empty();
  $("#display").empty();
  $("#rightAnswer").empty();
  $("#gif").empty();

  $("#finalDisplay").html(message.final);
  $("#wrongAnswers").html("Wrong Answers: " + wrongAnswer);
  $("#rightAnswers").html("Right Answers: " + rightAnswer);
  $("#noAnswer").html("Unanswered: " + noAnswer);
  $("#restartGame").addClass("reset");
  $("#restartGame").show();
  $("#restartGame").html("Try again?");

}
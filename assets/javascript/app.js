//Creating all game variables
var wireTrivia = [{
  question: "Which one of these people was not part of Barksdale's crew?",
  answers: ["Wee-Bey","Poot","McNulty","D'Angelo"],
  correct: 3
},{
  question: "What was Hamsterdam?",
  answers: ["An experimental area of de facto 'legalization' of the drug trade","The most coveted drug terriroty in West Baltimore","Hang out spot for Marlo Stanfield and his organization","Nickname for prison"],
  correct: 1
},{
  question: "The most important thing to Marlo Stanfield was?",
  answers: ["His corners","Gaining control of the herion trade","His name","His was with Avon Barksdale"],
  correct: 3
},{
  question: "What did Wee-Bey find 'beautiful as hell'?",
  answers: ["The game","A clean package of herion","His favorite pistol","His many fish and fish tanks"],
  correct: 4
},{
  question: "What song does Omar Little whistle while on the prowl?",
  answers: ["Farmer in the Dell","A hunting we will go","Tupac - Changes","Biggie - Big Poppa"],
  correct: 1
},{
  question: "Avon Barksdale cared only about?",
  answers: ["His cousin D'Angelo","His corners","His best friend and partner Stringer","Women"],
  correct: 2
},{
  question: "The young upstart with the most violent crew was?",
  answers: ["Wee-Bey","Poot","McNulty","Marlo Stanfield"],
  correct: 4
},{
  question: "Stringer Bell hired who to kill Omar?",
  answers: ["Brother Mouzone","Wallace","Bodie","Savino"],
  correct: 1
},{
  question: "The most loyal soldier of any crew was?",
  answers: ["Cheese","Snoop","Slim Charles","Chris Partlow"],
  correct: 3
},{
  question: "Cheese was played by?",
  answers: ["Jay Z","Method Man","Mos Def","RZA"],
  correct: 2
}];

var wireGif = ["question1", "question2", "question3", "question4", "question5", "question6", "question7", "question8", "question9", "question10",];

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
var seconds;
var time;
var answered;
var userChoice;
var readlineSync = require('readline-sync');
const chalk = require('chalk');




function welcome(){
var username = readlineSync.question("What is your name?")
console.log(chalk.bold.blue("WELCOME "+ username +" TO THE MIRZAPUR QUIZ"));
}

score = 0;

var questions = [{
  question:"Who plays the role of Munna on the show?",
  answer:"Divyendu Sharma"
},
{
  question:"How many eggs does Guddu Bhaiyya eat in Season 1?",
  answer:"50"
},
{
  question:"Based on the video, which of these is written on the number plate of a car driven by Munna, in the video?",
  answer:"King of Mirzapur"
},
{
  question:"When was the show Mirzapur first aired?",
  answer:"16 November 2018"
},
{
  question:"Which of these actors has the same surname in the series ‘Mirzapur’ as he does in real life?",
  answer:"Pankaj Tripathi"
}
];


var highScores = [
  {
    name: "Priyansh",
    score: 4,
  },

  {
    name: "Pasha",
    score: 2,
  },
];


// play function

function play(question,answer){
  var userAnswer = readlineSync.question(question);
  if(userAnswer.toUpperCase() === answer.toUpperCase()){
    console.log(chalk.bold.green("Right"));
    score++;
  }else{ 
  console.log(chalk.bold.red("Wrong"));
  score--;
  }
console.log(chalk.underline.bgGrey("current score:", score));
console.log("-------------");
}


// game function

function game(){
 for(var i=0; i < questions.length; i++){
   var currentQues = questions[i];
   play(currentQues.question,currentQues.answer); 
 } 
}

function showScores() {
  console.log(chalk.bold.bgBlue("You Scored: ", score));

  console.log("Check out the high scores: ");

  highScores.map(score => console.log(score.name, " : ", score.score));
}



welcome();
game();
showScores();

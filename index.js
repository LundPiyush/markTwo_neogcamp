var readlinesync = require("readline-sync");
var chalk = require("chalk");

var userName  = readlinesync.question(chalk.blue("Hi, Whats your name? "));

console.log(chalk.yellow.bold("\nWelcome "+ chalk.blue(userName) +"!\nLets see how well do you know about SUITS !"));

var questionAnswerArray = [
{
    question : "Harvey and Donna have a secret ritual involving a what?",
    options : "a. Spatula\nb. Stapler\nc. Can opener",
    answer : "c"
},
{
    question : "Where did Rachel earn her law degree?",
    options : "a. Harvard\nb. Columbia \nc. NYU",
    answer : "b"
},
{
    question : "In order to save the firm, Jessica once entered into a merger with _______________.",
    options : "a. Edward Darby \nb. Charles Forstman \nc. Sean Cahill",
    answer : "a"
},
{
    question : "What clue finally makes Louis realize Mike didn’t go to Harvard?",
    options : "a. The Order of the Coif\nb. Law School Trophy\nc. Law School Trophy",
    answer : "a"
},
{
    question : "Who sends the tip to the U.S. Attorney’s office that Mike is a fraud?",
    options : "a. Anita Gibbs\nb. Sheila Sazs\nc. Charles Forstman",
    answer : "b"
},
{
    question : "Before he worked at Pearson Hardman, Harvey had a job where?",
    options : "a. District Attorney’s office\nb. Darby International\nc. Bratton Gould",
    answer : "a"
},
{
    question : "Why does Jessica fire Donna in Season 2?",
    options : "a. Because Donna knew the truth about Mike.\nb. Because Donna covered up an accounting error.\nc. Because Donna destroyed an important memo.",
    answer : "c"
},
{
    question : "What is Louis's catchphrase?",
    options : "a. You Just Got Litt Up.\nb. Litt My Fire.\nc. Got ya.",
    answer : "a"
},
{
    question : "How did the firm get Daniel to resign?",
    options : "a. A bribe.\nb. A threat.\nc. A paper.",
    answer : "b"
},
{
    question : "What does Louis do when he's stressing?",
    options : "a. Goes running.\nb. Does yoga.\nc. Goes mudding.",
    answer : "c"
},
{
    question : "How long is Mike's prison sentence?",
    options : "a. 2 years.\nb. 1 year.\nc. Six months.",
    answer : "a"
},
{
    question : "How does Louis attain named partner status?",
    options : "a. Blackmail.\nb. Assault.\nc. Drugs.",
    answer : "a"
}
]



console.log(chalk.green.bold("\nSo here are the rules of the game:\n1. There are 3 levels in all and each level has 4 questions.\n2. You have to answer atleast 2 out of 4 questions correctly to go to next level.\nBEST OF LUCK ! Lets begin\n------------------------------"));

var score =0;
for(var i=0; i<questionAnswerArray.length;i++){
  console.log(chalk.blue.bold(questionAnswerArray[i].question+"\n"));
  console.log(chalk.white.bold(questionAnswerArray[i].options+"\n"));
  var userAnswer = readlinesync.question(chalk.white.bold("Enter your answer: "));

   while(true){
    if(userAnswer.toLowerCase() !== 'a' && userAnswer.toLowerCase() !== 'b' && userAnswer.toLowerCase() !== 'c'){
      console.log(chalk.white.bold.bgRed("Please Enter Valid Option!!"));
      userAnswer = readlinesync.question(chalk.white.bold("Enter your answer: "));
    }
    else
      break;
  }

  if(userAnswer.toLowerCase()===questionAnswerArray[i].answer){
    score+=1;
    console.log(chalk.green.bold("Correct!"));
    console.log("------------------------");
  }
  else{
    console.log(chalk.red.bold("Incorrect!"));
    console.log("------------------------");
  }
  if(i==3){
    if(score>=2){
    console.log(chalk.green.bold("Congratulations " + chalk.white(userName) + " ! You've cleared Level 1\n"));
      score = 0;
    continue;
   
    }
    else{
      console.log(chalk.red.bold("Unfortunately," + chalk.white(userName) +" You didn't clear Level 1.\n"));
      break;
    }
  }

    if(i==7){
    if(score>=2){
    console.log(chalk.green.bold("Congratulations " + chalk.white(userName) + " ! You've cleared Level 2\n"));
      score = 0;
    continue;
   
    }
    else{
      console.log(chalk.red.bold("Unfortunately," + chalk.white(userName) +" You didn't clear Level 2.\n"));
      break;
    }
    }
  

  if(i==11){
    if(score>=2){
    console.log(chalk.green.bold("Congratulations " + chalk.white(userName) + " ! You've cleared Level 3\n"));
      score = 0;
    continue;
   
    }
    else{ 
      console.log(chalk.red.bold("Unfortunately," + chalk.white(userName) +" You didn't clear Level 3.\n"));
      break;
    }
  }
}


var DEBUG = true;
DEBUG && console.log("Started:run.js");
var inquirer = require("inquirer");
var Word = require("./word.js")
var wordlist = ["word", "mother", "dog", "english", "aluminium", "music", "advertisement"];
var attempts = 10;
console.log("\nHello %username%!\n")
var word = new Word(wordlist[Math.floor(Math.random()*(wordlist.length-1))]);

function question(){
	console.log("Attempts: "+ attempts);
	inquirer.prompt([
	{
		type:"input",
		name: "userInput",
		message: "Guess a letter!",
	}
	]).then(function(answers) {	
		word.checkaLetter(answers.userInput)
		word.show();
		if(attempts >0){
			if(word.length==0){
				console.log("Congratulations! The word is '"+ word.word+"'");
				oneMoreGame();
			}else{
				question();
			}
		}else{
			console.log("No more attempts for this word. ")
			oneMoreGame();
		}
	});
	attempts--;
}

function oneMoreGame(){
	inquirer.prompt([
	{
		type: "confirm",
		name: "confirm",
		message: "The word is "+ word.word + ". Would you like to play one more time?"
	}]).then(answers2=>{
		console.log(answers2.confirm);
		if(answers2.confirm == true) {
			word = new Word(wordlist[Math.floor(Math.random()*(wordlist.length-1))]);
			word.initializing();
			word.show();
			attempts = 10;
			question();
		}
	})
}

function game(){
	word.initializing();
	console.log("Guess the word!"  );
	word.show();
	question();	
}
game();

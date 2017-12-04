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
	]).then(answers => {	
		word.checkaLetter(answers.userInput)
		word.show();
		if(attempts >0){
			if(word.length==0){
				console.log("Congratulations!");
			}else{
				question();
			}
		}
	});
}

function game(){
	word.initializing();
	console.log("Guess the word!");
	question();	
}
game();

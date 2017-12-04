var DEBUG = true;
DEBUG && console.log("Started:run.js");
var inquirer = require("inquirer");
var Word = require("./word.js")
var wordlist = ["word", "mother", "dog", "english", "aluminium", "music", "advertisement"];
var attempts = 10;
console.log("\nHello %username%!\n")

function game(){
	var word = new Word(wordlist[Math.floor(Math.random()*(wordlist.length-1))]);
	word.initializing();
	console.log("Guess the word!");
	word.show();
	for(var i = 10; i>0; i--){
		console.log("Attempts: "+ i);
		inquirer.prompt([
		{
			type:"input",
			name: "userInput",
			message: "Guess a letter!",
		}
		]).then(answers => {
			console.log(answers.userInput); 
			word.checkaLetter(answers.userInput)
			word.show();
		});
	}
	

}
game();

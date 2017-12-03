var DEBUG = true;
DEBUG && console.log("Started:run.js");
var inquirer = require("inquirer");


function Word(wordd) {
	this.word = wordd;
	this.massive = [];
	this.Initializing = ()=>{
		for(var index in this.word){
			console.log(this.word[index]);

		}
	}

}

function Letter(innerLetter){
	this.state = "_";
	this.letterToShow = innerLetter;
	this.Activate = ()=>{
		this.state = this.letterToShow;
	} 
}

var word = new Word("mashina");
word.Initializing();

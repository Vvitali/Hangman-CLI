console.log("word.js")
var Letter = require("./letter.js");
module.exports = Word;
function Word(wordd) {
	this.word = wordd;
	this.massive = [];
}

Word.prototype.show =function(){
	var tempWord= '';
	for(var index in this.massive){
		tempWord+=  this.massive[index].state;
	}
	console.log(tempWord);
}
Word.prototype.initializing = function(){
	for(var index in this.word){
		this.massive[index] = new Letter(this.word[index]);
	}
}

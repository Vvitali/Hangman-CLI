var Letter = require("./letter.js");
module.exports = Word;
function Word(wordd) {
	this.word = wordd;
	this.massive = [];
	this.length = this.word.length;
}

Word.prototype.show =function(){
	var tempWord= '';
	for(var index in this.massive){
		tempWord+=  this.massive[index].state;
	}
	console.log(tempWord);
}
Word.prototype.checkaLetter = function(userLetter){
	var index =this.word.indexOf(userLetter) + 1
	if( index  ){
		console.log("good!")
		this.massive[index-1].activate();
		this.length--;
	}else{
		console.log("No such letter in the word!")
	}
}
Word.prototype.initializing = function(){
	for(var index in this.word){
		this.massive[index] = new Letter(this.word[index]);
	}
}

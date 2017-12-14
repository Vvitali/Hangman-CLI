var Letter = require("./letter.js");
module.exports = Word;
function Word(wordd) {
	this.word = wordd;
	this.massive = [];
	this.length = this.word.length;
	this.alphabet = {};
}

Word.prototype.show =function(){
	var tempWord= '';
	for(var index in this.massive){
		tempWord+=  this.massive[index].state;
	}
	console.log(tempWord);
}
Word.prototype.checkaLetter = function(userLetter){
	
	var index =this.word.indexOf(userLetter) + 1;
	if( index  ){
		console.log("Right!")
		this.indexesOfLetter(userLetter);
		return 0;
	}else{
		console.log("No such letter in the word!");
		
		return this.indexesOfLetter(userLetter);
	}
}
Word.prototype.initializing = function(){
	for(var index in this.word){
		this.massive[index] = new Letter(this.word[index]);
	}
}

Word.prototype.indexesOfLetter = function(letter){
	var indexes = [];
	for (var i = 0; i < this.word.length; i++){
		if (this.word[i] === letter || this.alphabet[letter]) {
			if(this.word[i]==this.massive[i].state || this.alphabet[letter])	{
				console.log("You already guessed this letter!");
				return 0;
			}
			indexes.push(i);
		}
	}

	for(var i = 0; i<indexes.length && this.massive[indexes[i]].state=="_ " ; i++){
		this.length--;
		console.log("Index: "+i)
		this.massive[indexes[i]].activate();
	}
	this.alphabet[letter] = true;
	return 1;
}

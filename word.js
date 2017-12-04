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
		console.log("Right!")
		this.indexesOfLetter(userLetter);
	}else{
		console.log("No such letter in the word!")
	}
}
Word.prototype.initializing = function(){
	for(var index in this.word){
		this.massive[index] = new Letter(this.word[index]);
	}
}

Word.prototype.indexesOfLetter = function(letter){
	var indexes = [];

	for (var i = 0; i < this.word.length; i++)
		if (this.word[i] === letter) {
			if(this.word[i]==this.massive[i].state)	{
				console.log("You already guessed this letter!");
				return 0;
			}
			indexes.push(i);

		}

		for(var i = 0; i<indexes.length && this.massive[indexes[i]].state=="_" ; i++){
			this.length--;
			this.massive[indexes[i]].activate();
		}
		return indexes;
	}

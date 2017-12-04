  
function Letter(innerLetter){
	this.state = "|";
	this.letter = innerLetter;
}

Letter.prototype.activate = function(){
	this.state = this.letter;
} 

module.exports = Letter;
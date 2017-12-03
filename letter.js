console.log("letter.js")
var DEBUG = false;
function Letter(innerLetter){
	DEBUG && console.log("l:"+innerLetter);
	this.state = "_";
	this.letter = innerLetter;
}

Letter.prototype.activate = function(){
	this.state = this.letter;
} 

module.exports = Letter;
var theWord = document.getElementById("theword");
var remainGuessesH = document.getElementById("guessesRemain");
var wordlist = ["word", "mother", "dog", "english", "aluminium", "music", "advertisement"];
var attempts = 10;
var guessedListH = document.getElementById("guessedList");
var winsCounter = 0;

var gameM = {

    guessedList: [],
    underscorePlaceHolder: [],
    secretWord: undefined,

    generateWord: function() {
        this.secretWord = wordlist[Math.floor(Math.random() * wordlist.length)];
        console.log("SecretWord: " + this.secretWord);
    },

    onInput: function(event) {
        var thePressedKey = event.key.toLowerCase();
        remainGuessesH.innerHTML = --attempts;
        guessedListH.innerHTML = this.guessedList;

        console.log("Pressed:" + thePressedKey);
        //if statement - only for debuging
        if (this.checkTheList(thePressedKey)) { console.log(thePressedKey + " letter already  does exist in the list") };

        if (this.checkTheWord(thePressedKey)) {
            this.indexesOfLetter(thePressedKey).forEach(function(element, index) {
                console.log("The letter in the word!")
                this.gameM.updateUnderScorePlaceHolder(element, thePressedKey);
            })
        }
        guessedListH.innerHTML = this.guessedList;
        if (this.secretWord === this.underscorePlaceHolder.join("")) {
            alert("YOU ARE WINNER! The word is: " + this.secretWord);
            winsCounter++;
            document.getElementById("winsCounter").innerHTML = ("Wins: " + winsCounter);
            this.newGame();
        }
        if (attempts === 0) {
            alert("You lose! The word is: " + this.secretWord);
            this.newGame();
        }

    },

    checkTheList: function(theKey) {
        if (this.guessedList.indexOf(theKey) == -1) {
            this.guessedList.push(theKey);
            //if letter does not existed in the list - we push the key to the array, and function returns 0
            return 0;
        }
        //if letter does exist in the list - just return 1
        return 1;
    },

    checkTheWord: function(theKey) {
        if (this.secretWord.indexOf(theKey) == -1) {
            //if letter does not existed in the word - function returns 0
            return 0;
        }
        else { return 1; }
    },

    initializeHtmlByUnderscore: function(length) {
        var underscores = [];
        for (var i = 0; i < length; i++) {
            underscores[i] = "_";
        }
        this.underscorePlaceHolder = underscores;
        underscores = underscores.join(" ");

        theWord.innerHTML = underscores;
    },

    updateUnderScorePlaceHolder: function(position, letter) {
        //console output
        console.log(position);
        console.log("Holder: " + this.underscorePlaceHolder);
        //update the array for internal needs
        this.underscorePlaceHolder[position] = letter;
        //console outup
        console.log("New letter " + letter + ", on the position #" + position);
        //update html element
        theWord.innerHTML = this.underscorePlaceHolder.join(" ");
    },

    //Calculate how many times the letter excists in the word
    indexesOfLetter: function(letter) {
        var indexes = [];

        for (var i = 0; i < this.secretWord.length; i++)
            if (this.secretWord[i] === letter) indexes.push(i);
        return indexes;
    },

    newGame: function() {
        document.body.setAttribute("onkeyup", "gameM.onInput(event)")
        //1) generate the word
        this.generateWord();
        //2) put a underscore-placeholder to the html
        this.initializeHtmlByUnderscore(gameM.secretWord.length);
        attempts = 10;
        this.guessedList = [];
        //3)  if the letter exists in the word - this stage is running only when user pressed any key (Check  onInput() function)

    }

}
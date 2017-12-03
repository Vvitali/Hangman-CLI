var DEBUG = true;
DEBUG && console.log("Started:run.js");
var inquirer = require("inquirer");
var Word = require("./word.js")

var word = new Word("mashina");
word.initializing();
word.massive[1].activate();
word.massive[5].activate();
word.show();
const inquirer = require("inquirer");
const chalk = require("chalk");
const Word = require("./Word");
const words = require("./words");

function Game(){
    let self = this;

    //set 10 guesses and gets next word
    this.play = function() {
        this.guessesLeft = 10;
        this.nextWord();
    };

    //create new word and ask for guesses
    this.nextWord = function(){
        let randomWord = words[Math.floor(Math.random()* words.length)];
        this.currentWord = new Word(randomWord);
        console.log("\n" + this.currentWord + "\n");
        this.makeAGuess;
    };

    //inquirer prompts user for guesses

//no code below this line
}
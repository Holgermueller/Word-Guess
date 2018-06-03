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
    this.makeAGuess = function(){
        this.askForALetter().then(function(){
            if (self.guessesLeft < 1){
                console.log("No guesses left! The word was: \"" + self.currentWord.getSolution() + "\"\n");
                self.askToPlayAgain();
            } else if (self.currentWord.guessedWordCorrectly()){
                console.log("You got the word right! Now for the next word!");
                self.guessesLeft = 10;
                self.nextWord();
            } else {
                self.makeAGuess();
            }
        });
    };

    //ask the player if they'd like to play again after losing
    this.askToPlayAgain = function(){
        inquirer.prompt([{
            type: "confirm",
            name: "choice",
            message: "Would you like to play again?"
        }]).then(function(val){
            if (val.choice) {
                self.play();
            } else {
                self.quit();
            }
        });
    };

    //prompt player to guess a letter
    this.askForALetter = function(){
        return inquirer.prompt([{
            type: "input",
            name: "choice",
            message: "Guess a letter already!",
            validate: function(val){
                return /[a-z1-9]/gi.test(val);
            }
        }]).then(function(val){
            let guessedLetterCorrectly = self.currentWord.guessALetter(val.choice);
            if (guessedLetterCorrectly){
                console.log("\nCorrect!!!\n");
            } else {
                self.guessesLeft--;
                console.log("\nWRONG!\n");
                console.log(self.guessesLeft + " guess remaining! \n");
            }
        });
    };

    //quit function
    this.quit = function() {
        console.log("\nSo Long.");
        process.exit(0);
    };

//no code below this line
}
//except for this
module.exports = Game;

const inquirer = require("inquirer");
const colors = require("colors/safe");
const Word = require("./Word");
const words = require("./words");
const figlet = require("figlet");

function Game() {
    let self = this;

    //set 10 guesses and gets next word
    this.play = function () {
        this.guessesLeft = 10;
        this.nextWord();
    };

    //create new word and ask for guesses
    this.nextWord = function () {
        let randomWord = words[Math.floor(Math.random() * words.length)];
        this.currentWord = new Word(randomWord);
        console.log("\n" + this.currentWord + "\n");
        this.makeAGuess();
    };

    //inquirer prompts user for guesses
    this.makeAGuess = function () {
        this.askForALetter().then(function () {
            if (self.guessesLeft < 1) {
                console.log("No guesses left! The word was: \"" + self.currentWord.getSolution() + "\"\n");
                self.askToPlayAgain();
            } else if (self.currentWord.guessedWordCorrectly()) {
                console.log(figlet.textSync("You got the word right!" + "\n" +"Now for the next word!", {
                    font: 'Slant',
                    horizontalLayout: 'default',
                    verticalLayout: 'default'
                }));
                self.guessesLeft = 10;
                self.nextWord();
            } else {
                self.makeAGuess();
            }
        });
    };

    //ask the player if they'd like to play again after losing
    this.askToPlayAgain = function () {
        inquirer.prompt([{
            type: "confirm",
            name: "choice",
            message: "Would you like to play again?"
        }]).then(function (val) {
            if (val.choice) {
                self.play();
            } else {
                self.quit();
            }
        });
    };

    //prompt player to guess a letter
    this.askForALetter = function () {
        return inquirer.prompt([{
            type: "input",
            name: "choice",
            message: "Guess a letter already!",
            validate: function (val) {
                return /[a-z1-9]/gi.test(val);
            }
        }]).then(function (val) {
            let guessedLetterCorrectly = self.currentWord.guessALetter(val.choice);
            if (guessedLetterCorrectly) {
                console.log(figlet.textSync("Correct!!!", {
                    font: "Sub-Zero",
                    horizontalLayout: "default",
                    verticalLayout: "default"
                }));
            } else {
                self.guessesLeft--;
                console.log(figlet.textSync("WRONG!", {
                    font: "Epic",
                    horizontalLayout: "default",
                    verticalLayout: "default"
                }));
                console.log(self.guessesLeft + " guess remaining!");
            }
        });
    };

    //quit function
    this.quit = function () {
        console.log("\nSo Long.");
        process.exit(0);
    };

    //no code below this line
}
//except for this
module.exports = Game;

const inquirer = require("inquirer");
const chalk = require("chalk");
const Word = require("./Word");
const words = require("./words");
const figlet = require("figlet");

function Game() {
  let self = this;

  //set 10 guesses and gets next word
  this.play = () => {
    this.guessesLeft = 10;
    this.nextWord();
  };

  //create new word and ask for guesses
  this.nextWord = () => {
    let randomWord = words[Math.floor(Math.random() * words.length)];
    this.currentWord = new Word(randomWord);
    console.log(chalk.blue("\n" + this.currentWord + "\n"));
    this.makeAGuess();
  };

  //inquirer prompts user for guesses
  this.makeAGuess = () => {
    this.askForALetter().then(() => {
      if (self.guessesLeft < 1) {
        console.log(
          'No guesses left! The word was: "' +
            self.currentWord.getSolution() +
            '"\n'
        );
        self.askToPlayAgain();
      } else if (self.currentWord.guessedWordCorrectly()) {
        console.log(
          chalk.magenta(
            figlet.textSync(
              "You got the word right!" + "\n" + "Now for the next word!",
              {
                font: "big",
                horizontalLayout: "default",
                verticalLayout: "default",
              }
            )
          )
        );
        self.guessesLeft = 10;
        self.nextWord();
      } else {
        self.makeAGuess();
      }
    });
  };

  //ask the player if they'd like to play again after losing
  this.askToPlayAgain = () => {
    inquirer
      .prompt([
        {
          type: "confirm",
          name: "choice",
          message: chalk.green("Would you like to play again?"),
        },
      ])
      .then((val) => {
        val.choice ? self.play() : self.quit();
      });
  };

  //prompt player to guess a letter
  this.askForALetter = () => {
    return inquirer
      .prompt([
        {
          type: "input",
          name: "choice",
          message: chalk.green(
            "Welcome to the X-Men word-guess game!! \n Test your knowledge of earth's mightiest mutants! \n You have " +
              this.guessesLeft +
              " guesses remaining. \n Enter your guess here: "
          ),
          validate: (val) => {
            return /[a-z1-9]/gi.test(val);
          },
        },
      ])
      .then((val) => {
        let guessedLetterCorrectly = self.currentWord.guessALetter(val.choice);
        if (guessedLetterCorrectly) {
          console.log(
            chalk.blue(
              figlet.textSync("Correct!!!", {
                font: "Sub-Zero",
                horizontalLayout: "default",
                verticalLayout: "default",
              })
            )
          );
        } else {
          self.guessesLeft--;
          console.log(
            chalk.red(
              figlet.textSync("WRONG!", {
                font: "Epic",
                horizontalLayout: "default",
                verticalLayout: "default",
              })
            )
          );
          console.log(chalk.red(self.guessesLeft + " guess remaining!"));
        }
      });
  };

  //quit function
  this.quit = () => {
    console.log(
      chalk.yellow(
        figlet.textSync("So Long.", {
          font: "big",
          horizontalLayout: "default",
          verticalLayout: "default",
        })
      )
    );
    process.exit(0);
  };
  //no code below this line
}
//except for this
module.exports = Game;

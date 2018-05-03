'use strict';

//require Word constructor
const Word = require('./word.js');

//require node package
const inquirer = require("inquirer");
const isLetter = require("is-letter");
const colors = require("colors");

//set up scoreboard
let wins = 0;
let losses = 0;
let guessesLeft = 9;

//default for user guesses
let usersCorrectGuesses = false;

//hold letter player guessees
let playerGuess = "";

//track letters already guesses
let alreadyGuessed = "";
let guessesArray = [];
let underscoresLeft = 0;

//words to be randomly chosen
const listOfWords = ['Colossus', 'Deadpool', 'Wolverine', 'Cyclops', 'Rogue', 'Phoenix', 'Magneto', 'Storm', 'Fantomex'];
    //console.log(listOfWords);

//show player rules

//create function to randomly select a word
//use Word constructor to store it
function wordChooser(){
    let randomWord = listOfWords[Math.floor(Math.random() * listOfWords.length)];
    let theWord = new Word (randomWord);
    console.log("The word contains " + randomWord.length + " letters.");
    console.log("Your word is: ")
    theword.stringWord();
    theWord.lettersGenerator();
    guessTheLetter();
    //console.log(theWord);
}

//Prompt user for each guess
function startConfirmation(){
    const readyToStart = [
        {type: 'text',
        name: 'playersName',
        message: 'What is your name?'
        },
        {type: 'confirm',
        name: 'readyToPlay',
        message: 'I hope you are ready to play!',
        default: true
        }
    ];
    inquirer.prompt(readyToStart).then(answers => {
        if (answers.readyToPlay){
            console.log("Welcome " + answers. playersName + " !");
            gameStart();
        } else {
            console.log("Okay, " + answers.playersName + ". Bye, then.");
            return;
        }
    });
}

function gameStart(){
    let guessesLeft = 9;
    wordChooser();
    let alreadyGuessed = "";
    let guessesArray = [];
}

//keep track of users remaining guesses
function guessTheLetter(){
    if (underscoresLeft < theWord.letters.length ||  guessesLeft > 0){
        inquirer.prompt([
            {name: "letter",
            message: "Guess a letter:",
            validate: function(value){
                if (isLetter(value)) {
                    return true;
                } else {
                    return false;
                }
            }
        }
        ]).then(function(guess){
            guess.letters.toUpperCase();
            console.log("Your guess is: " + guess.letters.toUpperCase());
            correct = false;
            if (guessesArray.indexOf(guess.letters.toUpperCase()) > -1){
                console.log("That letter has already been guessed. Try another.");
                console.log("=========================================");
                guessTheLetter();
            } else if (guessesArray.indexOf(guess.letters.toUpperCase()) === -1){
                let alreadyGuessed = alreadyGuessed.concat(" " + guess.letters.toUpperCase());
                alreadyGuessed.push(guess.letters.toUpperCase());
                console.log("Letters already guessed: " + alreadyGuessed);

                for (let i = 0; theWord.letters.length; i++) {
                    if (guess.letters.toUpperCase() === theWord.letters[i].character && theWord.letters[i]. letterGuessedCorrectly === false){
                        theWord.letters[i].letterGuessedCorrectly === true;
                        usersCorrectGuesses = true;
                        theWord.underscores[i] = guess.letters.toUpperCase();
                        underscoresLeft++;
                    }
                }
                console.log("Your word is: ");
                theWord.stringWord();
                theWord.lettersGenerator();

                if (usersCorrectGuesses) {
                    console.log("Correct!!");
                    console.log("===========================================");
                    userWins();
                } else {
                    console.log("Incorrect!!!");
                    guessesLeft--;
                    console.log("You have " + guessesLeft + " guesses remaining.");
                    console.log("===========================================");
                    userWins();
                }
            }
        })
    }
}

function userWins(){
    if (guessesLeft === 0){
        console.log("===========================================");
        console.log("Sorry, you lose.");
        console.log("The correct answer was: " + randomWord);
        losses++;
        console.log("Wins: " + wins);
        console.log("Losses: " + losses);
        console.log("===========================================");
        tryAgain();
    } else if (underscoresLeft === theWord.letters.length){
        console.log("===========================================");
        console.log("You win! You are a true X-Men fan!");
        console.log("wins: " + wins);
        console.log("Losses: " + losses);
        console.log("===========================================");
        tryAgain();
    } else {
        guessTheLetter("");
    }
}

function tryAgain(){
    let tryGameAgain = [{
        type: 'confirm',
        name: 'tryAgain',
        message: "Want to try again?",
        default: true
    }];
    inquirer.prompt(tryGameAgain).then(playerWantsTo => { 
        if (playerWantsTo.tryAgain) {
            let alreadyGuessed = "";
            let guessesArray = [];
            let underscoresLeft = 0;
            console.log("Welcome back!");
            gameStart();
        } else {
            console.log("Sorry to see you go.");
            return;
        }
    });
}
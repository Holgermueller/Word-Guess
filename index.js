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
                if ( ) {

                }
            }
        }
        ])
    }
}
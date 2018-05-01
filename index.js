'use strict';

//require Word constructor
const Word = require('./word.js');

//require node package
const inquirer = require("inquirer");

//set up scoreboard
let wins = 0;
let losses = 0;
let guessesLeft = 9;

//hold letter player guessees
let playerGuess = "";

//track letters already guesses
let alreadyGuessed = "";
let guessesArray = [];

//words to be randomly chosen
const listOfWords = ['Colossus', 'Deadpool', 'Wolverine', 'Cyclops', 'Rogue', 'Phoenix', 'Magneto', 'Storm', 'Fantomex'];
    //console.log(listOfWords);
//show player rules


//create function to randomly select a word
function wordChooser(){
    let randomWord = listOfWords[Math.floor(Math.random() * listOfWords.length)];
    let theWord = new Word (randomWord);
    theword.stringWord();
    theWord.lettersGenerator();

    console.log(theWord);
}

//use Word constructor to store it


//Prompt user for each guess


//keep track of users remaining guesses
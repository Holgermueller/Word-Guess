'use strict';

let prompt = require('prompt');

const Letter = function (character, correct) {
    //create string value to store underlying character for letter
    this.character = character;

    //create boolean value to store if letter has been guessed yet
    this.correct = false;
}

//create function to return underlying character if guessed or underscore if not guessed
Letter.prototype.toString = function () {
    if (this.correct) {
        return this.character;
    } else {
        return ('_');
    }
}

//create function that takes a character as argument and checks it against underlying character and updates...
//stored boolean value to true if letter is guessed correctly
Letter.prototype.characterChecker = function (character) {
    if (character.toUpperCase() === this.character.toUpperCase()) {
        this.correct = true;
        return true;
    } 
    return false;
}

//check to see if it works: it works
//let testLetter = new Letter("d");
//console.log(testLetter.toString())
//testLetter.characterChecker("a");
//console.log(testLetter.toString())
//testLetter.characterChecker("d");
//console.log(testLetter.toString())

module.exports = Letter;
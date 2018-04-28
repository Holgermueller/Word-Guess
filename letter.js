'use strict';

let prompt = require('prompt');

const Letter = function(character, correct) {
    //create string value to store underlying character for letter
    this.character = character;

    //create boolean value to store if letter has been guessed yet
    this.correct = false;

    //create function to return underlying character if guessed or underscore if not guessed
    this.returnCharacter = function(){
        let userGuess = event.key;
        if (userGuess === this.character) {
            return letters;
            console.log("Good guess!");
        } else {
            return '_';
            console.log("Sorry, that's wrong.");
        }
    }

    //create function that takes a character as argument and checks it against underlying character and updates...
    //stored boolean value to true if letter is guessed correctly
    this.characterChecker = function(character){
        if (character === this.character) {
            this.correct = true;
        } else {
            this.correct = false;
        }
    }

}

module.exports = Letter;
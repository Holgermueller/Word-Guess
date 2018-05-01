'use strict';

let prompt = require('prompt');
let colors = require('colors/safe');

const Letter = function(character, correct) {
    //create string value to store underlying character for letter
    this.character = character;

    //create boolean value to store if letter has been guessed yet
    this.correct = false;

    //create function to return underlying character if guessed or underscore if not guessed
    this.returnCharacter = function(){
        if (this.character) {
            console.log(this.character);
        } else {
            console.log('_');
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

//check to see if it works: it works
//let letterOne = new Letter ("a");
//letterOne.returnCharacter();

module.exports = Letter;
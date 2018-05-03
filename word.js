'use strict';

//require Letter constructor
const Letter = require("./letter.js");

const Word = function(currentWord){
    //to store the current word
    this.currentWord = currentWord;
    //for letters in the chosen word
    let wordArray = this.currentWord.split("");
    this.letters = wordArray.map(function(char){
        return(new Letter(char))
    });
    //underscores to replace letters until letters are guessed
    this.underscores = [];
    //create function that returns a string representing the word. Calls function defined in...
    //Letter.js and displays the character or an underscore. Concatenate these together.
}

Word.prototype.toString = function(){
    return this.letters.join(" ");
};

Word.prototype.guessLetter = function(char){
    let isCharCorrect = false;
    for (let i = 0; i < this.letters.length; i++){
        if (this.letters[i].characterChecker(char)) {
            isCharCorrect = true;
        }
    }
    return isCharCorrect;
}

Word.prototype.isWordGuessed = function(){
    for (let i = 0; i < this.letters.length; i++){
        if (!this.letters[i].correct) {
            return false;
        }
    }
    return true;
}

//test constuctor:
let testWord = new Word ("Deadpool");
//testWord.stringWord();
//testWord.lettersGenerator();
console.log(testWord.toString());
testWord.guessLetter('d');
console.log(testWord.toString());

//export to index.js
module.exports = Word;
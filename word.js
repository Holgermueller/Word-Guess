'use strict';

const Letter = require("./letter.js");

const Word = function(currentWord){
    //create array of new Letter objects to represent the letters of underlying word
    this.currentWord = currentWord;
    this.letters = [];
    this.underscores = [];
    //create function that returns a string representing the word. Calls function defined in...
    //Letter.js and displays the character or an underscore. Concatenate these together.
    this.stringWord = function(){
        this.letters = this.currentWord.split("");
        //console.log(this.letters);
        underscoresForWord = this.letters.length;
        //console.log("Underscores: " + underscoresForWord);
        //for (let i = 0; i < underscoresForWord; i++ ){
        //    this.underscores.push('_ ');
        //}
        //console.log(this.underscores);
        console.log(this.underscores.join(' '));
    }
    //create function that takes a character as argument and calls guess function in Letter.js
    
}

module.exports = Word;
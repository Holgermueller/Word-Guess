'use strict';

const Letter = require("./letter.js");

const Word = function(currentWord){
    //to store the current word
    this.currentWord = currentWord;
    //for letters in the chosen word
    this.letters = [];
    //underscores to replace letters until letters are guessed
    this.underscores = [];
    //create function that returns a string representing the word. Calls function defined in...
    //Letter.js and displays the character or an underscore. Concatenate these together.
    this.stringWord = function(){
        this.letters = this.currentWord.split("");
        //console.log(this.letters);
        //produce underscores to replace letters
        let underscoresForWord = this.letters.length;
        //console.log("Underscores: " + underscoresForWord);
        //for (let i = 0; i < underscoresForWord; i++ ){
        //    this.underscores.push('_ ');
        //}
        //console.log(this.underscores);
        console.log(this.underscores.join(" "));
    }
    //create function that takes a character as argument and calls guess function in Letter.js
    this.lettersGenerator = function(){
       for (let i = 0; this.letters.length; i++){
            this.letters[i] = new Letter (this.letters[i]);
            //this.letters[i].correct = true;
            //console.log(this.letters[i]);
            this.letters[i].returnCharacter();
           }
    }
}

//test constuctor:
let testWord = new Word ("Deadpool");
testWord.stringWord();
testWord.lettersGenerator();

//export to index.js
module.exports = Word;
//require Letter constructor
const Letter = require("./Letter.js");

//create Word constructor
function Word(word){
    //word.split = splits word into array of letters
    //.map 
    this.letters = word.split("").map(function(char){
        return new Letter(char);
    });
};

Word.prototype.getSolution = function(){
    return this.letters.map(function(letter){ //iterate over each letter
        return letter.getSolution(); //return solution
    }).join(""); //create string from array of solved letters
};

//
Word.prototype.toString = function(){
    return this.letters.join(" ");
};

Word.prototype.guessLetter = function(char){
    //checks if players guesses match any letters in array
    let foundLetter = false;
    this.letters.forEach(function(letter){
        if (letter.guess(char)){
            foundLetter = true;
        }
    });
    console.log("\n" + this + "\n");
    return foundLetter;
};

//continue here
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
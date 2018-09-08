//require Letter constructor
const Letter = require("./Letter.js");

//create Word constructor
function Word(word){
    //word.split = splits word into array of letters
    //.map 
    this.letters = word.split("").map(char => {
        return new Letter(char);
    });
};

Word.prototype.getSolution = function(){
    return this.letters.map(letter => { //iterate over each letter
        return letter.getSolution(); //return solution
    }).join(""); //create string from array of solved letters
};

//
Word.prototype.toString = function() {
    return this.letters.join(" ");
};

Word.prototype.guessALetter = function(char){
    //checks if players guesses match any letters in array
    let foundLetter = false;
    this.letters.forEach(letter =>{
        if (letter.guess(char)){
            foundLetter = true;
        }
    });
    console.log("\n" + this + "\n");
    return foundLetter;
};

//returns true if letters in word have been guessed correctly
Word.prototype.guessedWordCorrectly = function(){
    return this.letters.every(letter => { letter.visible });
};

module.exports = Word;
//constructor for displaying either and underscore or the underlying letter
function Letter(char){
    //makes character visible if not a letter or number
    this.visible = !/[a-z1-9]/i.test(char);
    //saves underlying character
    this.char = char;
}

//create function to return underlying character if guessed or underscore if not guessed
Letter.prototype.toString = function () {
    if (this.visible=== true) {
        return this.char;
    } else {
        return ('_');
    }
};

//create function that takes a character as argument and checks it against underlying character and updates...
//stored boolean value to true if letter is guessed correctly
Letter.prototype.characterChecker = function(character) {
    if (character.toUpperCase() === this.character.toUpperCase()) {
        this.correct = true;
        return true;
    } 
    return false;
};

Letter.prototype.getSolution = function(){
    return this.char;
};

//accept user's guess
Letter.prototype.guess = function(charGuess) {
    if (charGuess.toUpperCase() === this.char.toUpperCase()){
        this.visible = true;
        return true;
    }
    return false;
};

module.exports = Letter;
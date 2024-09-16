const Letter = require("./Letter.js");

function Word(word) {
  this.letters = word.split("").map((char) => {
    return new Letter(char);
  });
}

Word.prototype.getSolution = function () {
  return this.letters
    .map((letter) => {
      return letter.getSolution();
    })
    .join("");
};

//
Word.prototype.toString = function () {
  return this.letters.join(" ");
};

Word.prototype.guessALetter = function (char) {
  let foundLetter = false;
  this.letters.forEach((letter) => {
    if (letter.guess(char)) {
      foundLetter = true;
    }
  });
  console.log("\n" + this + "\n");
  return foundLetter;
};

Word.prototype.guessedWordCorrectly = function () {
  return this.letters.every((letter) => {
    letter.visible;
  });
};

module.exports = Word;

function Letter(char) {
  this.visible = !/[a-z1-9]/i.test(char);

  this.char = char;
}

Letter.prototype.toString = function () {
  if (this.visible === true) {
    return this.char;
  } else {
    return "_";
  }
};

Letter.prototype.characterChecker = function (character) {
  if (character.toUpperCase() === this.character.toUpperCase()) {
    this.correct = true;
    return true;
  }
  return false;
};

Letter.prototype.getSolution = function () {
  return this.char;
};

Letter.prototype.guess = function (charGuess) {
  if (charGuess.toUpperCase() === this.char.toUpperCase()) {
    this.visible = true;
    return true;
  }
  return false;
};

module.exports = Letter;

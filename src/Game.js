const Card = require('./Card');
const data = require('./data');
const Deck = require('./deck');
const Round = require('./round');
const prototypeQuestions = data.prototypeData;
const util = require('./util');

class Game {
  constructor() {
    this.currentRound
  }

  printMessage(deck, round) {
    console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`)
  }

  printQuestion(round) {
      util.main(round);
  }

  start() {
    let newCards = prototypeQuestions.map(card => new Card(card.id,card.question, card.answers, card.correct));
    let deck = new Deck(newCards);
    let round = new Round(deck)

    this.currentRound = 1;
    this.printMessage(deck, round);
    this.printQuestion(round);
  }

}

module.exports = Game;
const Turn = require("./turn")

class Round {
    constructor(deck) {
        this.deck = deck.cards;
        this.turn = 0;
        this.currentCard = this.deck[0];
        this.incorrectGuesses = [];
    }

    returnCurrentCard() {
        return this.deck[this.turn];
    }

    takeTurn(guess) {
        this.turn++
        let turn = new Turn(guess, this.currentCard);
        turn.evaluateGuess();
        if(!turn.evaluateGuess()) {
            this.incorrectGuesses.push(this.currentCard.id);
            this.currentCard = this.deck[this.turn];
        }
        this.currentCard = this.deck[this.turn]
        return turn.giveUserFeedback()
    }

    calculatePercentCorrect() {
        let correctPercent = parseFloat(((this.turn - this.incorrectGuesses.length) / this.turn * 100).toFixed(2))
        return correctPercent
    }

    endRound() {
        return `** Round over! ** You answered ${this.calculatePercentCorrect()}% of the questions correctly!`
    }
}

module.exports = Round;
const Turn = require("./turn")

class Round {
    constructor(deck) {
        this.deck = deck;
        this.turns = 0;
        this.incorrectGuesses = [];
    }

    returnCurrentCard() {
        return this.deck.cards[this.turns];
    }

    takeTurn(guess) {
        let turn = new Turn(guess, this.returnCurrentCard());
        this.turns++
        if(!turn.evaluateGuess()) {
            this.incorrectGuesses.push(this.returnCurrentCard().id);
        }
        return turn.giveUserFeedback()
    }

    calculatePercentCorrect() {
        let correctPercent = parseFloat(((this.turns - this.incorrectGuesses.length) / this.turns * 100).toFixed(2))
        return correctPercent
    }

    endRound() {
        console.timeLog('Game run time: ')
        console.log(`** Round over! ** You answered ${this.calculatePercentCorrect()}% of the questions correctly!`)
        return `** Round over! ** You answered ${this.calculatePercentCorrect()}% of the questions correctly!`
    }
}

module.exports = Round;
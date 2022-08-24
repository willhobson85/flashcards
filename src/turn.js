class Turn {
    constructor(userGuess, cardObject) {
        this.userGuess = userGuess;
        this.cardObject = cardObject;
    }

    returnGuess() {
        return this.userGuess;
    }

    returnCard() {
        return this.cardObject;
    }

    evaluateGuess() {
        if (this.userGuess === this.cardObject.correctAnswer) {
            return true;
        } else {
            return false;
        }
    }

    giveUserFeedback() {
        if (this.evaluateGuess()) {
            return 'correct!'
        } else {
            return 'incorrect!'
        }
    }


}

module.exports = Turn;
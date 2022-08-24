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
        return (this.userGuess === this.cardObject.correctAnswer) 
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
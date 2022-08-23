const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');
let turn
let turn2

describe('Turn', () => {

    beforeEach(() => {
        turn = new Turn();
        turn2 = new Turn();
    })
    it('should be a function', () => {
        expect(Turn).to.be.a('function');
    })

    it('should be an instance of Turn', () => {
        expect(turn).to.be.an.instanceOf(Turn);
        expect(turn2).to.be.an.instanceOf(Turn);
    })

    it('should return the player\'s guess', () => {
        //expect(turn.userGuess).to.equal(      )
        //expect(turn2.userGuess).to.equal(      )
    })

    it('should return a card object', () => {
        //expect(turn.cardObject).to.equal(     )
        //expect(turn2.cardObject).to.equal(     )
    })

    it('should indicate if the user\'s answer is correct', () => {
        //turn.evauluateGuess()
        //expect(turn.userGuess).to.equal(true)

        //turn2.evaluateGuess()
        //expect(turn2.userGuess).to.equal(false)
    })

    it('should give feedback on user\'s guess', () => {
        //turn.giveUserFeedback()
        //expect(turn.feedback).to.equal('correct!')

        //turn2.giveUserFeedback()
        //expect(turn2.feedback).to.equal('incorrect!')
    })

})

// Instantiated with two arguments - a string (that represents a user’s guess to the question), and a Card object for the current card in play.
// returnGuess: method that returns the guess
// returnCard: method that returns the Card
// evaluateGuess: method that returns a boolean indicating if the user’s guess matches the correct answer on the card
// giveFeedback - method that returns either ‘incorrect!’ or ‘correct!’ based on whether the guess is correct or not.
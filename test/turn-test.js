const chai = require('chai');
const expect = chai.expect;
const Card = require('../src/Card');

const Turn = require('../src/Turn');
let turn
let turn2
let card
let card2

describe('Turn', () => {

    beforeEach(() => {
        turn = new Turn("object", card);
        turn2 = new Turn("object", card2);
        card = new Card(1, "What allows you to define a set of related information using key-value pairs?", ["object", "array", "function"], "object");
        card2 = new Card(2,"What is a comma-separated list of related values?", ["array", "object", "function"], "array")
    })

    it('should be a function', () => {
        expect(Turn).to.be.a('function');
    })

    it('should be an instance of Turn', () => {
        expect(turn).to.be.an.instanceOf(Turn);
        expect(turn2).to.be.an.instanceOf(Turn);
    })

    it('should return the player\'s guess', () => {
        expect(turn.returnGuess()).to.equal('object')
        expect(turn2.returnGuess()).to.equal('object')
    })

    it('should return a card object', () => {
        expect(turn.returnCard()).to.deep.equal(card)
        expect(turn2.returnCard()).to.deep.equal(card2)
    })

    it('should indicate if the user\'s answer is correct', () => {
        expect(turn.evaluateGuess()).to.equal(true)
        expect(turn2.evaluateGuess()).to.equal(false)
    })

    it('should give feedback on user\'s guess', () => {
        expect(turn.giveUserFeedback()).to.equal('correct!')
        expect(turn2.giveUserFeedback()).to.equal('incorrect!')
    })

})

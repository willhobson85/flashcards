const chai = require('chai');
const Turn = require('../src/turn');
const Deck = require('../src/deck');
const Round = require('../src/round');
const { prototypeData } = require('../src/data');
const expect = chai.expect;

let deck
let round

describe('Round', () => {

    beforeEach(() => {
        deck = new Deck(prototypeData);
        round = new Round(deck)
    })

    it('should be an instance of Round', () => {
        expect(round).to.be.an.instanceOf(Round);
    })

    it('should have a deck of cards', () => {
        expect(round.deck).to.deep.equal(prototypeData);
    })

    it('should start with the first card', () => {
        expect(round.returnCurrentCard()).to.equal(prototypeData[0]);
    })

    it('should increase turns with each guess', () => {
        expect(round.turn).to.equal(0);
        round.takeTurn('object');
        expect(round.turn).to.equal(1);
    })

    it('should give feedback for guesses', () => {
        let correct = round.takeTurn('object');
        expect(correct).to.equal('correct!');
        
        let incorrect = round.takeTurn('object');
        expect(incorrect).to.equal('incorrect!');

    })

    it('should push incorrect answer ids to an array', () => {
        expect(round.incorrectGuesses.length).to.equal(0);
        round.takeTurn('function');
        expect(round.incorrectGuesses.length).to.equal(1);
        expect(round.incorrectGuesses).to.deep.equal([1])
    })

    it('should calculate the percentage of correct answers', () => {
        round.takeTurn('object');
        expect(round.calculatePercentCorrect()).to.equal(100);

        round.takeTurn('object');
        expect(round.calculatePercentCorrect()).to.equal(50);

        round.takeTurn('object');
        expect(round.calculatePercentCorrect()).to.equal(33.33);
    })

    it('should end the game with a message stating the percentage of correct answers', () => {
        round.takeTurn('object');
        
        expect(round.endRound()).to.equal('** Round over! ** You answered 100% of the questions correctly!')
    })

});
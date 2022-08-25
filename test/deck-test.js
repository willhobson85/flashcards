const chai = require('chai');
const expect = chai.expect;
const Card = require('../src/Card');
const Deck = require('../src/deck')

let deck
let card1
let card2
let card3

describe('Deck', () => {

    beforeEach(() => {
        deck = new Deck([card1, card2, card3]);
        card1 = new Card(1, "What allows you to define a set of related information using key-value pairs?", ["object", "array", "function"], "object");
        card2 = new Card(2,"What is a comma-separated list of related values?", ["array", "object", "function"], "array")
        card3 = new Card(3, "What type of prototype method directly modifies the existing array?", ["mutator method", "accessor method", "iteration method"], "mutator method")
    })

    it('should be an instance of Deck', () => {
        expect(deck).to.be.an.instanceOf(Deck);
    })

    it('should hold an array of Card objects', () => {
        expect(deck.cards.length).to.equal(3);
        expect(deck.cards[0]).to.deep.equal(card1);
        expect(deck.cards[1]).to.deep.equal(card2);
        expect(deck.cards[2]).to.deep.equal(card3);
    })

    it('should know how many cards are in the deck', () => {
        expect(deck.countCards()).to.equal(3)
    })
})
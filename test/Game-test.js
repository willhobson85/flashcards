const chai = require('chai');
const expect = chai.expect;

const data = require('../src/data');
const { prototypeData } = require('../src/data');

const Game = require('../src/Game');
const Deck = require('../src/deck');
const Round = require('../src/round');

let deck;
let round;
let game;

describe('Game', () => {

    beforeEach(() => {
        deck = new Deck(prototypeData);
        round = new Round(deck);
        game = new Game(round);
    }) 

    it('should be an instance of Game', () => {
        expect(game).to.be.an.instanceOf(Game);
    })
})
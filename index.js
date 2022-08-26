const Game = require("./src/Game");

// This is where your project starts.
let game
game = new Game()
game.start()
console.log('Your project is running...'); 
console.time('Game run time: ')

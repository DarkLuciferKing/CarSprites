var database;
var gameState = 0;
var playerCount = 0;
var game, form, player;
var allPlayers;
var car1, car2, car3, car4;
var cars = [];


function setup(){
    createCanvas(windowWidth - 50,windowHeight - 50);
    database = firebase.database()

    game = new Game();
    game.getGameState();
    game.start();

}

function draw(){
    if(playerCount === 4) {
        game.updateGameState(1);
    }
    if(gameState === 1) {
        clear();
        game.play();
    }
}


class Game{
    constructor(){

    }








    getGameState(){
        var gameStateRef = database.ref("gameState");
        gameStateRef.on("value", function(data) {
            gameState = data.val();
        }, function(errorMsg) {
            console.log(errorMsg)
        });

    }

    updateGameState(stateValue){
        var databaseRef = database.ref("/");
        databaseRef.update({
            gameState : stateValue
        });        
    }

    start() {
        if(gameState === 0) {
            player = new Player();
            player.getPlayerCount();
            form = new Form();
            form.display();
        }

        car1 = createSprite(windowWidth/2 - 300, windowHeight)
        car2 = createSprite(windowWidth/2 - 100, windowHeight)
        car3 = createSprite(windowWidth/2 + 100, windowHeight)
        car4 = createSprite(windowWidth/2 + 300, windowHeight)
        cars = [car1, car2, car3, car4];
        


    }

    play(){
        form.greeting.hide();
        textSize(20);
        text("Game Started", 200, 150);

        Player.readPlayers();
        if(allPlayers !== undefined) {
            var yPos = 200;
            for(var plr in allPlayers) {
                if(plr === "player" + player.index) {
                    fill("red");
                } else {
                    fill("black");
                }
                text(allPlayers[plr].playerName + " : " + allPlayers[plr].distance, 200, yPos);
                yPos += 30;
            }

        }

        if(keyDown("w")){
            player.distance += 50;
            player.updatePlayerDetails();
        }

    }
}


var goTop = {};
var goBottom = {};
var goLeft = {};
var goRight = {};

//move dumbBot
function moveDumbBot(){
    //algo to make dumbot move right everytime it meets a wall or a player
    dumbBot.forEach(function(dumbBot){
        //set "go" directions for each dumbbot
        if(goTop[dumbBot.id] === undefined){
            goTop[dumbBot.id] = true
        }
        if(goBottom[dumbBot.id] === undefined){
            goBottom[dumbBot.id] = true
        }
        if(goLeft[dumbBot.id] === undefined){
            goLeft[dumbBot.id] = true
        }
        if(goRight[dumbBot.id] === undefined){
            goRight[dumbBot.id] = true
        }

        if(goRight[dumbBot.id]){
            if(!dumbBot.move("right")){
                goRight[dumbBot.id] = false;
            }
        } else {
            if(goBottom[dumbBot.id]){
                if(!dumbBot.move("bottom")){
                    goBottom[dumbBot.id] = false;
                }
            } else {
                if(goLeft[dumbBot.id]){
                    if(!dumbBot.move("left")){
                        goLeft[dumbBot.id] = false;
                    }
                } else {
                    if(goTop[dumbBot.id]){
                        if(!dumbBot.move("top")){
                            goRight[dumbBot.id] = true;
                            goBottom[dumbBot.id] = true;
                            goLeft[dumbBot.id] = true;
                        }
                    }
                }
            }
        }
    });

}

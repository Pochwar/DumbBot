var goTop = {};
var goBottom = {};
var goLeft = {};
var goRight = {};

//move dumbBot
function moveDumbBot(){
    //algo to make dumbot move right everytime it meets a wall or a player
    items.dumbBot.forEach(function(dumbBot){
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
            var prepareGo = dumbBot.moveVerification("right");
            if (prepareGo.move){
                dumbBot.go(prepareGo.id, prepareGo.property, prepareGo.coordToApply);
            } else {
                goRight[dumbBot.id] = false;
            }
        } else {
            if(goBottom[dumbBot.id]){
                var prepareGo = dumbBot.moveVerification("bottom");
                if (prepareGo.move){
                    dumbBot.go(prepareGo.id, prepareGo.property, prepareGo.coordToApply);
                } else {
                    goBottom[dumbBot.id] = false;
                }
            } else {
                if(goLeft[dumbBot.id]){
                    var prepareGo = dumbBot.moveVerification("left");
                    if (prepareGo.move){
                        dumbBot.go(prepareGo.id, prepareGo.property, prepareGo.coordToApply);
                    } else {
                        goLeft[dumbBot.id] = false;
                    }
                } else {
                    if(goTop[dumbBot.id]){
                        var prepareGo = dumbBot.moveVerification("top");
                        if (prepareGo.move){
                            dumbBot.go(prepareGo.id, prepareGo.property, prepareGo.coordToApply);
                        } else {
                            goRight[dumbBot.id] = true;
                            goLeft[dumbBot.id] = true;
                            goBottom[dumbBot.id] = true;
                        }
                    }
                }
            }
        }
    });

}

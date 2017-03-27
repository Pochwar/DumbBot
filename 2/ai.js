var goTop = {};
var goBottom = {};
var goLeft = {};
var goRight = {};
//set "go" directions for each dumbbot
dumbBot.forEach(function(dumbBot){
goTop[dumbBot.id] = true;
goBottom[dumbBot.id] = true;
goLeft[dumbBot.id] = true;
goRight[dumbBot.id] = true;
});
//move bot
function moveDumbBot(){
    dumbBot.forEach(function(dumbBot){
        // console.log(dumbBot.move("bottom"))
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

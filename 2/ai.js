//bot move
var goTop = true;
var goBottom = true;
var goLeft = true;
var goRight = true;
function moveDumbBot(){
    dumbBot.forEach(function(dumbBot){
        // console.log(dumbBot.move("bottom"))
        if(goRight){
            if(!dumbBot.move("right")){
                goRight = false;
            }
        } else {
            if(goBottom){
                if(!dumbBot.move("bottom")){
                    goBottom = false;
                }
            } else {
                if(goLeft){
                    if(!dumbBot.move("left")){
                        goLeft = false;
                    }
                } else {
                    if(goTop){
                        if(!dumbBot.move("top")){
                            goRight = true;
                            goBottom = true;
                            goLeft = true;
                        }
                    }
                }
            }
        }
    });

}

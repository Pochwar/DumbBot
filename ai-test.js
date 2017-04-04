var goTop = {};
var goBottom = {};
var goLeft = {};
var goRight = {};
var randDur = {};


//move dumbBot
function moveDumbBot(){
    //algo to make dumbot move randomly

    items.dumbBot.forEach(function(dumbBot){
        dumbBot.move("top");
        dumbBot.move("right");
        dumbBot.move("right");
        dumbBot.move("right");
    });

}

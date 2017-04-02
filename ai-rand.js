var goTop = {};
var goBottom = {};
var goLeft = {};
var goRight = {};
var randDur = {};


//move dumbBot
function moveDumbBot(){
    //algo to make dumbot move randomly

    dumbBot.forEach(function(dumbBot){
        //set "go" directions for each dumbbot
        if(goTop[dumbBot.id] === undefined){
            goTop[dumbBot.id] = false
        }
        if(goBottom[dumbBot.id] === undefined){
            goBottom[dumbBot.id] = false
        }
        if(goLeft[dumbBot.id] === undefined){
            goLeft[dumbBot.id] = false
        }
        if(goRight[dumbBot.id] === undefined){
            goRight[dumbBot.id] = false
        }
        //if no dir & no dur set
        if (!goTop[dumbBot.id] && !goBottom[dumbBot.id] && !goLeft[dumbBot.id] && !goRight[dumbBot.id]){
            console.log("test1");
            //set rand direction & duration
            var randDir = Math.floor( Math.random()*4);

            switch (randDir) {
                case 0:
                goTop[dumbBot.id] = true
                console.log("top");
                break;

                case 1:
                goBottom[dumbBot.id] = true
                console.log("bottom");
                break;

                case 2:
                goLeft[dumbBot.id] = true
                console.log("left");
                break;

                case 3:
                goRight[dumbBot.id] = true
                console.log("right");
                break;

                default:

            }
        }
        else {
            if(randDur[dumbBot.id] === undefined){
                randDur[dumbBot.id] = Math.floor( Math.random()*10)
            }
            console.log(randDur[dumbBot.id])
            if (randDur[dumbBot.id] > 0) {
                if (goTop[dumbBot.id]){ dumbBot.move("top");}
                if (goLeft[dumbBot.id]) {dumbBot.move("left");}
                if (goRight[dumbBot.id]) {dumbBot.move("right");}
                if (goBottom[dumbBot.id]){ dumbBot.move("bottom");}
                randDur[dumbBot.id]--;
            }
            if (randDur[dumbBot.id] === 0){
                goTop[dumbBot.id] = false;
                goBottom[dumbBot.id] = false;
                goLeft[dumbBot.id] = false;
                goRight[dumbBot.id] = false;
                randDur[dumbBot.id] = undefined;
            }
        }
    });

}

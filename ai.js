var go = {};
go["top"] = {};
go["bottom"] = {};
go["left"] = {};
go["right"] = {};

//move dumbBot
function moveDumbBot(){
    //algo to make dumbot move right everytime it meets a wall or a player
    items.dumbBot.forEach(function(dumbBot){
        //set "go" directions for each dumbbot
        if(go["top"][dumbBot.id] === undefined){
            go["top"][dumbBot.id] = false
        }
        if(go["bottom"][dumbBot.id] === undefined){
            go["bottom"][dumbBot.id] = false
        }
        if(go["left"][dumbBot.id] === undefined){
            go["left"][dumbBot.id] = false
        }
        if(go["right"][dumbBot.id] === undefined){
            go["right"][dumbBot.id] = true
        }

        //Set relative directions
        switch (true) {
            case go["right"][dumbBot.id] :
            var forward = "right";
            var left = "top";
            var right = "bottom";
            break;

            case go["left"][dumbBot.id] :
            var forward = "left";
            var left = "bottom";
            var right = "top";
            break;

            case go["bottom"][dumbBot.id] :
            var forward = "bottom";
            var left = "right";
            var right = "left";
            break;

            case go["top"][dumbBot.id] :
            var forward = "top";
            var left = "left";
            var right = "right";
            break;
            default:

        }

        if(go[forward][dumbBot.id]){
            var prepareGo = dumbBot.moveVerification(forward);
            if (prepareGo.move){
                dumbBot.go(prepareGo.id, prepareGo.property, prepareGo.coordToApply, prepareGo.targetReach);
            } else {
                go[forward][dumbBot.id] = false;
                go[right][dumbBot.id] = true;
            }
        }

    });

}

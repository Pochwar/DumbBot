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
        console.log("forward : " + forward);
        if(go[forward][dumbBot.id]){
            //check if there is a path @ right
            var pathRight = dumbBot.moveVerification(right);
            //if yes
            if (pathRight.move){
                console.log("path right");
                //turn right
                go[forward][dumbBot.id] = false;
                go[right][dumbBot.id] = true;
                //go
                dumbBot.go(pathRight.id, pathRight.property, pathRight.coordToApply, pathRight.targetReach);
            } else {
                console.log("no path right");
                //check if there is a path forward
                var pathForward = dumbBot.moveVerification(forward);
                //if yes
                if (pathForward.move){
                    //go
                    dumbBot.go(pathForward.id, pathForward.property, pathForward.coordToApply, pathForward.targetReach);
                } else {
                    //turn left
                    go[forward][dumbBot.id] = false;
                    go[left][dumbBot.id] = true;
                }
            }
        }
    }
)}

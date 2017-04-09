var go = {};
go["top"] = {};
go["bottom"] = {};
go["left"] = {};
go["right"] = {};



//move dumbBot
function moveDumbBot(){
    //make bot rush closest player
    items.dumbBot.forEach(function(dumbBot){
        var playerTop = [];
        var playerLeft = [];
        var closestTop ={};
        var closestLeft = {};
        closestTop.dist = undefined;
        closestLeft.dist = undefined;
        var distanceTemp = Infinity;


        items.player.forEach(function(player){
            //put players coords in arrays
            playerTop.push(removePxParseInt(document.querySelector("#"+player.id).style.top));
            playerLeft.push(removePxParseInt(document.querySelector("#"+player.id).style.left));

        })
        //check wich player is closest
        //top
        playerTop.forEach(function(playerTop, i){
            //first player : set distanceTop.value and distanceTop.id
            if (closestTop.dist === undefined){
                closestTop.dist = Math.abs(dumbBot.top - playerTop);
                closestTop.id = i;
            } else {
                //if next player is closest : reset distanceTop.value and distanceTop.id
                distanceTemp = Math.abs(dumbBot.top - playerTop);
                if (distanceTemp < closestTop.dist){
                    closestTop.dist = distanceTemp;
                    closestTop.id = i;
                }
            }

        })
        //left
        playerLeft.forEach(function(playerLeft, i){
            //first player : set distanceTop.value and distanceTop.id
            if (closestLeft.dist === undefined){
                closestLeft.dist = Math.abs(dumbBot.left - playerLeft);
                closestLeft.id = i;
            } else {
                //if next player is closest : reset distanceTop.value and distanceTop.id
                distanceTemp = Math.abs(dumbBot.left - playerLeft);
                if (distanceTemp < closestLeft.dist){
                    closestLeft.dist = distanceTemp;
                    closestLeft.id = i;
                }
            }
        })

        //find closest player id
        if (closestLeft.dist < closestTop.dist){
            var closestPlayerId = closestLeft.id;
        } else {
            var closestPlayerId = closestTop.id;
        }

        //closest Player Top
        var closestPlayer = document.querySelector("#player"+closestPlayerId);
        var closestPlayerTop = removePxParseInt(closestPlayer.style.top)
        var closestPlayerLeft = removePxParseInt(closestPlayer.style.left)


        if (dumbBot.top > closestPlayerTop){

            var goBot = dumbBot.moveVerification("top");
            if (goBot.move){
                var newCoords = dumbBot.go(goBot.id, goBot.property, goBot.coordToApply, goBot.targetReach);
                dumbBot.top = removePxParseInt(newCoords["top"]);
            }
        } else if (dumbBot.top < closestPlayerTop){
            var goBot = dumbBot.moveVerification("bottom");
            if (goBot.move){
                var newCoords = dumbBot.go(goBot.id, goBot.property, goBot.coordToApply, goBot.targetReach);
                dumbBot.top = removePxParseInt(newCoords["top"]);
            }
        }



        if (dumbBot.left > closestPlayerLeft){
            var goBot = dumbBot.moveVerification("left");
            if (goBot.move){
                var newCoords = dumbBot.go(goBot.id, goBot.property, goBot.coordToApply, goBot.targetReach);
                dumbBot.left = removePxParseInt(newCoords["left"]);
            }
        } else if (dumbBot.left < closestPlayerLeft){
            var goBot = dumbBot.moveVerification("right");
            if (goBot.move){
                var newCoords = dumbBot.go(goBot.id, goBot.property, goBot.coordToApply, goBot.targetReach);
                dumbBot.left = removePxParseInt(newCoords["left"]);
            }
        }



        // //set "go" directions for each dumbbot
        // if(go["top"][dumbBot.id] === undefined){
        //     go["top"][dumbBot.id] = false;
        // }
        // if(go["bottom"][dumbBot.id] === undefined){
        //     go["bottom"][dumbBot.id] = false;
        // }
        // if(go["left"][dumbBot.id] === undefined){
        //     go["left"][dumbBot.id] = false;
        // }
        // if(go["right"][dumbBot.id] === undefined){
        //     go["right"][dumbBot.id] = true;
        // }
        //
        // //Set relative directions
        // switch (true) {
        //     case go["right"][dumbBot.id] :
        //     var forward = "right";
        //     var left = "top";
        //     var right = "bottom";
        //     break;
        //
        //     case go["left"][dumbBot.id] :
        //     var forward = "left";
        //     var left = "bottom";
        //     var right = "top";
        //     break;
        //
        //     case go["bottom"][dumbBot.id] :
        //     var forward = "bottom";
        //     var left = "right";
        //     var right = "left";
        //     break;
        //
        //     case go["top"][dumbBot.id] :
        //     var forward = "top";
        //     var left = "left";
        //     var right = "right";
        //     break;
        //     default:
        //
        // }
        // console.log("forward : " + forward);
        // if(go[forward][dumbBot.id]){
        //     //check if there is a path @ right
        //     var pathRight = dumbBot.moveVerification(right);
        //     //if yes
        //     if (pathRight.move){
        //         console.log("path right");
        //         //turn right
        //         go[forward][dumbBot.id] = false;
        //         go[right][dumbBot.id] = true;
        //         //go
        //         dumbBot.go(pathRight.id, pathRight.property, pathRight.coordToApply, pathRight.targetReach);
        //     } else {
        //         console.log("no path right");
        //         //check if there is a path forward
        //         var pathForward = dumbBot.moveVerification(forward);
        //         //if yes
        //         if (pathForward.move){
        //             //go
        //             dumbBot.go(pathForward.id, pathForward.property, pathForward.coordToApply, pathForward.targetReach);
        //         } else {
        //             //turn left
        //             go[forward][dumbBot.id] = false;
        //             go[left][dumbBot.id] = true;
        //         }
        //     }
        // }


    }
)}

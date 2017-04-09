//move dumbBot
function moveDumbBot(){
    //make bot rush closest player
    items.dumbBot.forEach(function(dumbBot){
        var closestPlayer = {};
        var distanceTemp = Infinity;

        //determines wich player is the closest
        items.player.forEach(function(player, i){
            //get top and left foreach player
            var playerTop = removePxParseInt(document.querySelector("#"+player.id).style.top);
            var playerLeft = removePxParseInt(document.querySelector("#"+player.id).style.left);
            //claculate distance top and left from the bot
            var distanceTop = Math.abs(dumbBot.top - playerTop);
            var distanceLeft = Math.abs(dumbBot.left - playerLeft);
            //if first player, set distance and id in closestPlayer Object
            if (closestPlayer.distance === undefined){
                closestPlayer.distance = distanceTop + distanceLeft;
                closestPlayer.number = i;
            } else {
                //if next player is closest, reset distance and id in closestPlayer Object
                distanceTemp = distanceTop + distanceLeft;;
                if (distanceTemp < closestPlayer.distance){
                    closestPlayer.distance = distanceTemp;
                    closestPlayer.number = i;
                }
            }
        })

        //get closest player from id and get its top and left coords
        var closestPlayer = document.querySelector("#player"+closestPlayer.number);
        var closestPlayerTop = removePxParseInt(closestPlayer.style.top)
        var closestPlayerLeft = removePxParseInt(closestPlayer.style.left)

        //make bot move y axis
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

        //make bot move x axis
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

    }
)}
